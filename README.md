# GroveMind company website

Four-language company introduction for **Shenzhen Grovemind Technology Co., Ltd. / 深圳市智林星瀚科技有限公司**.

## Website

Language order: English (`en`), Korean (`ko`), Japanese (`ja`), Chinese (`zh`). Append `?lang=CODE` to any page to select a language.

- Homepage: https://grovemindlabs.com/
- Website privacy notice and product policy directory: https://grovemindlabs.com/privacy/
- LUMISCENE privacy policy: https://grovemindlabs.com/privacy/lumiscene/
- Website and privacy contact: kimsung92@gmail.com

The company integrates hardware and software development: custom apps and software for hardware, independent hardware R&D, and its own physical factory in Huizhou. This positioning and factory ownership were supplied by the company on November 9, 2026. Company identity and address are based on supplied company records. No customer, certification, revenue or released-product claims are made. The website does not imply Apple endorsement or enrollment approval.

## Editing and publishing

`index.html` contains the four-language homepage. `assets/home.css` provides its cyber / sci-fi design; `assets/shared.css` shares the language navigation, contact dialog and privacy layouts. `assets/language-init.js` selects the initial language; `assets/site.js` handles language changes, internal language links, and contact interactions. An original animated SVG illustrates software and hardware integration and is labelled as a concept diagram. Motion respects reduced-motion settings.

The footer shows Shenzhen Grovemind Technology Co., Ltd. and Huizhou Deyun Technology Co., Ltd. (惠州德韵科技有限公司), without the street address. The latter is a footer company identity, not a change to the LUMISCENE privacy controller.

`privacy/index.html` contains the website privacy notice and product-policy links. Add future product policies to its directory in all four languages. `privacy/lumiscene/index.html` is the separate LUMISCENE app policy. Legacy `privacy.html` and `lumiscene/privacy.html` redirect to the new paths while preserving query parameters and fragments with JavaScript; a no-JavaScript redirect and ordinary link are also provided. All four policy languages remain readable without JavaScript. No build tools are required.

Both homepage contact links open a dialog with copy-email, native email-app and Gmail-compose options. No message is sent by opening the panel or copying the address. Without JavaScript, links fall back to `mailto:`. Actual sending happens in the user's mail client or Gmail.

GitHub Pages publishes the root of the `main` branch. Changes pushed to `main` publish automatically through GitHub's Pages build.

Local preview: `python3 -m http.server 4173 --bind 127.0.0.1`.

## Custom domain

The production domain is **grovemindlabs.com**. GitHub Pages is configured with this apex domain in `CNAME`; `www.grovemindlabs.com` also points to the same site and is redirected by GitHub to the apex domain.

Configured on November 3, 2026:

- Domain ownership verified under the `kimsung92` GitHub account, using the GitHub-provided TXT verification record.
- Four apex A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
- `www` CNAME: `kimsung92.github.io` (no protocol or repository path).
- Canonical and Open Graph URLs use `https://grovemindlabs.com/`; `robots.txt` links to the three-page sitemap (home, website privacy and LUMISCENE privacy).
- GitHub provisions the TLS certificate. HTTPS enforcement is enabled once the certificate is ready; see the dated deployment verification for the confirmed state.

**All eight pre-existing email records were preserved**, including three MX records, SPF, and the `mail`, `smtp`, `imap`, `pop3` CNAME records. Their values, TTLs, enabled states and original update times were compared before and after the website DNS additions. No nameservers were changed.

Keep the GitHub domain-verification TXT record. For future website hosting changes, update only the website-specific DNS records, preserving all mail-related records.

Official instructions:

- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages

GitHub Pages is for static information here, not a shopping checkout or commercial SaaS. Follow GitHub's usage limits before expanding its function.

## Assets

Manrope is self-hosted under the SIL Open Font License. East Asian text uses system fonts. The earlier Newsreader font remains in the asset archive but is not required by the current cyber layout. See the font license files in `assets/`. The small typographic favicon is authored for this website; it is not a trademark registration or a separately approved company logo.

## LUMISCENE privacy policy · 2026-11-07

The operator confirmed Shenzhen Grovemind Technology Co., Ltd. as the responsible company; LUMISCENE is free, has no accounts or in-app purchases, and is for a general audience including children with guardian guidance. The confirmed release design keeps photos, QR processing, case information and lighting settings local (lighting commands use Bluetooth), without server uploads, advertising, usage analytics or third-party crash reporting. The privacy contact is kimsung92@gmail.com; the corporate website now uses the same email address.

This webpage is a publication of those confirmed practices, not proof that the final app has passed a privacy audit or store review. The available Android 0.1.18 UI handoff still requires the vendor's real BLE/QR integration; check the final Android/iOS permissions, SDKs, network behavior, retention/deletion and in-app policy link against this policy before submission. Determine any older Android Bluetooth permission handling and child-audience requirements from the actual release implementation. Complete App Store privacy details and Google Play Data safety separately.

## Homepage refresh · 2026-11-09

Updated both languages and metadata to the company-confirmed hardware/software positioning and own Huizhou factory. Homepage uses a dark background, mint and violet accents, circuit grid and a layered hardware/software illustration. No factory capacity, certifications, clients or performance claims were added. This initial homepage refresh was followed by the four-language and privacy-center update below.

## Four-language privacy center and contact update · 2026-11-09

Added Korean and Japanese across the homepage, website privacy hub, and LUMISCENE policy. The app policy keeps its November 7 effective date; its November 9 update covers translations, routing and presentation, without changing confirmed app data practices. Legacy privacy URLs remain usable. `www` continues to redirect to the existing apex canonical domain. No DNS, email-service records or HTTPS settings were changed.

Validation covered all three pages in four languages at 320, 390, 768 and 1440 px, visible headings, internal anchors and links, both homepage contact triggers in every language, actual clipboard contents, Escape/close focus return, cross-page language preservation, and legacy redirects. Visual checks used desktop and mobile screenshots. Mail sending itself is not part of website testing.
