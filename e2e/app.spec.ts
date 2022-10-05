import { test, expect } from '@playwright/test'

test('app has links and title and working counter', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  await expect(page).toHaveTitle(/Hello React/)

  const heading = page.locator('h1')
  await expect(heading).toHaveText('Hello Vite + React!')

  const links = page.locator('header a', { has: page.locator('img') })
  expect(links).toHaveCount(2)

  const counter = page.locator('button', { hasText: 'Increment' })
  const counterValue = page.locator('button + p')

  await expect(counterValue).toHaveText('Count is: 0')

  await counter.click()
  await expect(counterValue).toHaveText('Count is: 1')
})
