import { expect, test } from "@playwright/test";

/**
 * This test class tests command functionality of our application
 */

//beforeEach goes to our webpage before every test
test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:8000/");
});

//------------------------------------------------------------------------
//--------------------------LOAD------------------------------------------
//------------------------------------------------------------------------
test("I can load a file", async ({ page }) => {
  // login and enter command
  await page.getByLabel("Login").click();
  await page.getByLabel("Command input").click();
  await page
    .getByLabel("Command input")
    .fill("load census/postsecondary_education.csv");

  //submit command and check output
  await page.getByRole("button", { name: "Submitted 0 times" }).click();
  await expect(page.getByLabel("history")).toHaveText("Successfully loaded");
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
  //   //await expect(page.getByRole("table", { name: "IPEDS Race" })).toBeVisible;
  //   await expect(page.textContent("table")).toContain("IPEDS Race");

  //load another file
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("load census/income_by_race.csv");

  //click submit and ensure that new table is created with different data
  await page.getByRole("button", { name: "Submitted 2 times" }).click();

  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("view");
  await page.getByRole("button", { name: "Submitted 3 times" }).click();

  const tables = await page.$$("table");
  await tables[0].waitForSelector("tr td");
  await tables[1].waitForSelector("tr td");
  const content1 = await tables[0].textContent();
  const content2 = await tables[1].textContent();

  await expect(content1).not.toEqual(content2);
});

//--------------------------------------------------------------------------
//-------------------------------MODE---------------------------------------
//--------------------------------------------------------------------------
test("I start in mode brief", async ({ page }) => {
  // login and load
  await page.getByLabel("Login").click();
  await page.getByLabel("Command input").click();
  await page
    .getByLabel("Command input")
    .fill("load census/postsecondary_education.csv");
  await page.getByRole("button", { name: "Submitted 0 times" }).click();

  //check that output is not verbose
  await expect(page.getByLabel("history")).not.toHaveText(
    "Command: loadOutput: Successfully loadedCommand: modeOutput: Mode is now verbose"
  );
});

test("I can switch to mode verbose", async ({ page }) => {
  // login and load
  await page.getByLabel("Login").click();
  await page.getByLabel("Command input").click();
  await page
    .getByLabel("Command input")
    .fill("load census/postsecondary_education.csv");
  await page.getByRole("button", { name: "Submitted 0 times" }).click();

  //check that output is not verbose
  await expect(page.getByLabel("history")).not.toHaveText(
    "Command: loadOutput: Successfully loadedCommand: modeOutput: Mode is now verbose"
  );

  //enter mode switch command
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("mode verbose");
  await page.getByRole("button", { name: "Submitted 1 times" }).click();

  //check that mode is switched
  await expect(page.getByLabel("history")).toHaveText(
    "Command: loadOutput: Successfully loadedCommand: modeOutput: Mode is now verbose"
  );
});

test("going back to brief after verbose works", async ({ page }) => {
  // login and load
  await page.getByLabel("Login").click();
  await page.getByLabel("Command input").click();
  await page
    .getByLabel("Command input")
    .fill("load census/postsecondary_education.csv");
  await page.getByRole("button", { name: "Submitted 0 times" }).click();

  //enter view command
  await expect(page.getByLabel("history")).not.toHaveText("load");

  //enter mode verbose switch command
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("mode verbose");
  await page.getByRole("button", { name: "Submitted 1 times" }).click();

  //test that mode has switched
  await expect(page.getByLabel("history")).toHaveText(
    "Command: loadOutput: Successfully loadedCommand: modeOutput: Mode is now verbose"
  );

  //enter mode brief switch command
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("mode brief");
  await page.getByRole("button", { name: "Submitted 2 times" }).click();
  //check that output is not verbose
  await expect(page.getByLabel("history")).not.toHaveText(
    "Command: loadOutput: Successfully loadedCommand: modeOutput: Mode is now verbose"
  );
});

//----------------------------------------------------------------------------
//-------------------------------LOG IN---------------------------------------
//----------------------------------------------------------------------------
test("I can load a file, log out, log back in, and file isn't there", async ({
  page,
}) => {
  // login and enter command
  await page.getByLabel("Login").click();
  await page.getByLabel("Command input").click();
  await page
    .getByLabel("Command input")
    .fill("load census/postsecondary_education.csv");

  //submit command and check output
  await page.getByRole("button", { name: "Submitted 0 times" }).click();
  await expect(page.getByLabel("history")).toHaveText("Successfully loaded");

  //logout and log back in
  await page.getByLabel("Sign out").click();
  await page.getByLabel("Login").click();
  //try view and check that file is no longer loaded
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("view");

  //click submit and check error message is thrown
  await page.getByRole("button", { name: "Submitted 0 times" }).click();
  await expect(page.getByRole("table")).toHaveText("errorNo Data Found");
});

//-----------------------------------------------------------------------
//-----------------------------SEARCH------------------------------------
//-----------------------------------------------------------------------
test("I can't search search before loading", async ({ page }) => {
  // login and search
  await page.getByLabel("Login").click();
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("search token column");
  await page.getByRole("button", { name: "Submitted 0 times" }).click();
  await expect(page.getByLabel("history")).toHaveText(
    "error: No File Data Found"
  );
});

test("I can search with one arg (token)", async ({ page }) => {
  // login
  await page.getByLabel("Login").click();
  // load
  await page.getByLabel("Command input").click();
  await page
    .getByLabel("Command input")
    .fill("load census/postsecondary_education.csv");
  await page.getByRole("button", { name: "Submitted 0 times" }).click();
  await expect(page.getByLabel("history")).toHaveText("Successfully loaded");

  // command search
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("search token");
  // enter command search
  await page.getByRole("button", { name: "Submitted 1 times" }).click();
  await expect(page.getByRole("table")).toBeVisible();
  await expect(page.getByRole("table")).toContainText("012345678");
});
