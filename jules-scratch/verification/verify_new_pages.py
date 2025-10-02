from playwright.sync_api import sync_playwright, expect
import os

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # Get absolute path for file URLs
    base_path = os.getcwd()

    # Verify Beauty page
    beauty_url = f"file://{base_path}/beauty.html"
    page.goto(beauty_url)
    expect(page.locator("h1")).to_have_text("Beauty Products")
    page.screenshot(path="jules-scratch/verification/beauty_page.png")

    # Verify Fashion page
    fashion_url = f"file://{base_path}/fashion.html"
    page.goto(fashion_url)
    expect(page.locator("h1")).to_have_text("Fashion Collection")
    page.screenshot(path="jules-scratch/verification/fashion_page.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)