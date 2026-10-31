# Website repository instructions

## Scope

This repository is marketing for The Governor’s Desk. Keep application code, binaries, private account data, credentials, captures and runtime storage in the separate application repository. Do not modify the sibling application repository as part of website work unless the user requests it.

## Identity and accuracy

- Public name: The Governor’s Desk. Compact form: Governor’s Desk.
- Description: A desktop automation companion for KingShot.
- Keep automation and material limitations clear. Do not imply official affiliation, permission from the game publisher, account safety or unattended reliability.
- The site describes the product; it does not run game automation in the browser.
- Treat the mock rebrand as design reference, not proof of implemented app UI or features.
- Never invent testimonials, download counts, public releases, supported workflows or validation claims.

## Implementation and publishing

Use simple static HTML/CSS/JavaScript unless a real need justifies more. Keep all deployable assets in `docs/`; use relative URLs compatible with a GitHub Pages project subpath. Keep design/reference files outside that folder. Avoid trackers and external assets by default.

GitHub default branch is `main`. This separate website repo has no `ScriptBased` integration branch. Bootstrap is recorded by WP-WEBSITE-SETUP; future substantive work uses a focused branch and commit. The product repo's branch and release conventions do not create application branches here.

Verify changed pages in a browser, including a narrow viewport, links, readable text and focus styles. Enable or change Pages/domain configuration only within the user's authorized publishing scope. Keep the root README clear about whether the site is actually live.
