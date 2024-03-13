/*
  Demo: test ordinary Java/TypeScript
*/

import { expect, test } from 'vitest';


test('is 1 + 1 = 2?', () => {
  expect(1 + 1).toBe(2)
})

// Notice how you can test vanilla TS functions using Playwright as well!
// test('main.zero() should return 0', () => {
//   expect(main.zero()).toBe(0)
// })

// For more information on how to make unit tests, visit:
// https://jestjs.io/docs/using-matchers