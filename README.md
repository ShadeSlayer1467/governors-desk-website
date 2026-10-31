# The Governor’s Desk — website

Standalone public marketing website for The Governor’s Desk, a Windows desktop automation companion for KingShot players using MuMu Player.

## Status

Complete responsive product presentation: workflows, operating approach, requirements, FAQ and a mock download-request contact. Published on GitHub Pages: **https://readtechsolutions.com/governors-desk-website/**.

No application repository is linked, imported or deployed. There is no installer, contact submission, mailto link, tracker or backend. The requested fictional address `support@TheGovenorsDesk.com` is display text only, with a local mock-contact note. Public product copy does not discuss the owner's personal use of this website.

## Files

- `docs/`: the complete publishable site (HTML, CSS, SVG favicon and `.nojekyll`).
- `design/rebrand-preview/`: original visual direction, kept outside the publishing folder.
- `PRODUCT_REVIEW.md`: WP-WEBSITE-LAUNCH scope and acceptance.
- `AGENTS.md`: website-specific implementation instructions.

No photos, GIFs, video areas or placeholders for future media are included. The desk emblem is inline SVG, not a substitute screenshot or simulated app view.

## Preview and verification

No dependencies or build step. With Python installed:

```powershell
python -m http.server 8766 --bind 127.0.0.1 --directory docs
```

Open `http://127.0.0.1:8766/`. Check desktop and phone widths, fragment navigation, FAQ keyboard behavior, loaded styles and horizontal overflow. All local asset paths are relative for project-site hosting.

## Publishing

GitHub Pages uses the **main** branch and **/docs** folder. Do not publish the repository root or connect the site to the sibling application's repository. Pages is configured and HTTPS is enforced. Future changes to `docs/` on `main` publish automatically. The project site inherits the account’s existing custom domain; no domain or personal-homepage source was changed. The fictional email is not a verified domain or mailbox, and the website does not promise actual download delivery.

Verified publication and browser checks are recorded in [VERIFICATION.md](VERIFICATION.md).
