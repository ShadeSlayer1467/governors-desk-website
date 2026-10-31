# The Governor’s Desk — mock rebrand

Status: original mock rebrand, preserved as a website design reference. The application rename was implemented and verified separately in the product repository.

Open [the visual preview](governors-desk.html) in a browser. This is a static local concept, not a functioning replacement UI. Example city data is fictional. The visual treatment is a concept; it is not a screenshot of the current application.

## Product goal

Replace a development-process name with a name for the user's workspace: managing recurring KingShot city work. The current README describes Training, Arena, Intel, Pet Adventures, city schedules and monitoring; Pet and endurance acceptance remain incomplete. The brand must describe automation plainly without suggesting official affiliation or permission.

## Proposed identity

- Full public name: **The Governor’s Desk**.
- Compact app label: **Governor’s Desk**.
- Plain-text fallback: **The Governor's Desk**.
- Description: **A desktop automation companion for KingShot.**
- Tagline: **Your cities. Your schedules. Less routine work.**
- README headline alternative: **Less routine work. More time for your kingdom.**

Keep KingShot in the description so a first-time reader understands the purpose. Avoid an acronym as the main name. The desk emblem is a concept, not a finalized application icon. Name, trademark and domain availability have not been checked.

## Visual direction

Forest #203F36, warm paper #F2F0E9, brass #AC8846. Use a serif wordmark with familiar sans-serif interface text. The desk symbol suggests a workspace rather than another rank or servant. Favor readable labels and clear workflow states over decorative game imagery.

The preview changes navigation placement to show the identity in context. That is illustrative only: a branding implementation can keep the existing WPF tabs, commands and layouts. There is no requirement to redesign the app to adopt this name. Current control names such as City automation, Activity log and Start city automation remain useful and explicit.

## Proposed copy surfaces

| Surface | Proposed wording |
| --- | --- |
| Window title | The Governor’s Desk |
| Main identity | The Governor’s Desk / A companion for KingShot |
| App description | A desktop automation companion for KingShot. |
| Shortcut label, if a shortcut is supplied | The Governor’s Desk |
| README heading | The Governor’s Desk |

The visual preview contains a proposed README introduction. It does not replace the current README's setup instructions, detailed spending policies, known limitations or roadmap. Preserve those when applying any future rename. Do not rename workflow state messages into metaphorical “desk” language that obscures what the automation is doing.

## Staged implementation after approval

1. Apply the approved name to user-visible window titles and current product documentation. Inventory other visible strings first. Preserve explicit automation wording and spending disclosures.
2. Consider a final icon and distribution metadata separately. Check small-size legibility before making an icon deliverable.
3. Keep repository/folder names, solution/project names, namespaces, executable identity, environment variables, database locations, route IDs and existing user data paths unchanged initially. Renaming these is a separate compatibility decision, not necessary for this brand.
4. If technical identifiers are later renamed, inventory persistence and packaging references, design migration, and run the normal build/regression checks before rollout.

## Review and verification

Acceptance for this effort: local preview renders, document link resolves, sample content is clearly labeled, and the diff contains only this proposal and preview (plus review evidence if added). No runtime build or gameplay test is required because application files and behavior are unchanged. User review of the brand is outstanding; implementation and release approval are separate.

Starting baseline: ScriptBased at b54e6a6053c9ced1a5ad7333ac45bb926e710d05, clean and synchronized with origin. Reference decisions: #2; scope contract: #76. No architecture or runtime changes are proposed here.

Verification outcome: source checks confirmed the proposed name, absence of scripts/external resources, and the linked proposal file. The preview was subsequently served over localhost HTTP. Desktop browser rendering and the proposal link were checked successfully. Narrow-window review remains outstanding. No runtime build, gameplay test or brand availability search was performed.
