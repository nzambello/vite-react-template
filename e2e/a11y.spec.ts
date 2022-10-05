import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('a11y', () => {
  test('should not have any automatically detectable accessibility issues', async ({
    page
  }) => {
    await page.goto('http://localhost:5173/');

    await page.locator('#root main').waitFor();

    const axe = new AxeBuilder({ page });

    const accessibilityScanResults = await axe.include('#root').analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
