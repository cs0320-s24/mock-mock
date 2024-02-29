import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:8000/");
});

test("I can load a file", async ({ page }) => {
  // login and enter command
  await page.getByLabel("Login").click();
  await page.getByLabel("Command input").click();
  await page
    .getByLabel("Command input")
    .fill("load census/postsecondary_education.csv");

  //submit command and check output
  await page.getByRole("button", { name: "Submitted 0 times" }).click();
  await expect(page.getByLabel("history")).toHaveText("successfully loaded");
});

test("I can load a file and then search it", async ({ page }) => {
  // login and ;oad
  await page.getByLabel("Login").click();
  await page.getByLabel("Command input").click();
  await page
    .getByLabel("Command input")
    .fill("load census/postsecondary_education.csv");
  await page.getByRole("button", { name: "Submitted 0 times" }).click();

  //enter search command
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("search 1 2");

  //click submit and check table is created
  await page.getByRole("button", { name: "Submitted 1 times" }).click();
  await expect(page.getByRole("table")).toBeVisible;
});

test("I can load a file and then view it", async ({ page }) => {
  // login and load
  await page.getByLabel("Login").click();
  await page.getByLabel("Command input").click();
  await page
    .getByLabel("Command input")
    .fill("load census/postsecondary_education.csv");
  await page.getByRole("button", { name: "Submitted 0 times" }).click();

  //enter view command
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("view");

  //click submit and check table is created
  await page.getByRole("button", { name: "Submitted 1 times" }).click();
  await expect(page.getByRole("table")).toBeVisible;
});

test("I can load a file and view it then load another file and view it", async ({
  page,
}) => {
  // login and load
  await page.getByLabel("Login").click();
  await page.getByLabel("Command input").click();
  await page
    .getByLabel("Command input")
    .fill("load census/postsecondary_education.csv");
  await page.getByRole("button", { name: "Submitted 0 times" }).click();

  //enter view command
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("view");

  //click submit and check table is created with correct data
  await page.getByRole("button", { name: "Submitted 1 times" }).click();
  //await expect(page.getByRole("table", { name: "IPEDS Race" })).toBeVisible;
    await expect(page.textContent("table")).toContain("IPEDS Race");
    

  //load another file
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("load census/income_by_race.csv");

  //click submit and ensure that new table is created with different data
  await page.getByRole("button", { name: "Submitted 2 times" }).click();
  //await expect(page.getByRole("table", { name: "Race ID" })).toBeVisible;
  await expect(page.textContent("table")).toContain("Race ID");
});
