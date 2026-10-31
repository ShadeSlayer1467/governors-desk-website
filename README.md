# The Governor’s Desk — website

Public marketing website repository for The Governor’s Desk, a Windows desktop automation companion for KingShot players using MuMu Player.

This repository contains website content and design references only. Application source, tests, runtime data and releases belong to the separate product repository. The sibling application's private source is not copied or deployed here.

## Status

Repository bootstrap, WP-WEBSITE-SETUP. A small static landing page is included; the complete marketing site is still to be developed. **GitHub Pages is not enabled and no live site is claimed.** No app download is advertised until a suitable release is available.

## Layout

- `docs/`: the only intended GitHub Pages publishing directory.
- `design/rebrand-preview/`: the original mock rebrand, preserved as design material; excluded from the intended published directory.
- `AGENTS.md`: website-specific scope and accuracy rules.

The repository is a sibling of the application repository inside the shared parent workspace. Neither repository is nested inside the other.

## Preview

No dependencies, build step or package installation is required. With Python installed:

```powershell
python -m http.server 8766 --bind 127.0.0.1 --directory docs
```

Open `http://127.0.0.1:8766/`, or open `docs/index.html` directly. Check a narrow viewport as well as a desktop viewport. All assets and links must work under a project-site subpath.

## Future Pages publishing

When publishing is authorized, configure GitHub Pages to deploy from the **main** branch and **/docs** folder. Do not publish the repository root. The standard project URL would be `https://shadeslayer1467.github.io/governors-desk-website/`; that address is not live merely because the repository exists. A custom domain can be chosen separately.

## Next work

Develop the full marketing page from the approved forest/paper/brass direction, add current app screenshots suitable for public display, verify feature claims against the product's current documentation, and add release links only when publicly usable. Test layout, links and accessibility before enabling Pages.
