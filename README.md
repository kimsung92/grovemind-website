# GroveMind company website

Bilingual company introduction for **Shenzhen Grovemind Technology Co., Ltd. / 深圳市智林星瀚科技有限公司**.

## Website

- English: https://grovemindlabs.com/?lang=en
- Chinese: https://grovemindlabs.com/?lang=zh
- LUMISCENE privacy policy: https://grovemindlabs.com/lumiscene/privacy.html (English default; `?lang=zh` for Chinese)
- LUMISCENE privacy contact: kimsung92@gmail.com
- Corporate email: jinxing@grovemindlabs.com

The primary focus is software and app development. AI application development and product/industrial design are secondary areas. Company identity and address are based on supplied company records. No customer, certification, revenue or released-product claims are made. The website does not imply Apple endorsement or enrollment approval.

## Editing and publishing

`index.html` contains the page, styles and language switching. The current typography-led layout uses direct service descriptions and keeps complete legal names and the registered address in a compact 12px footer; mobile navigation remains visible. `privacy.html` contains a bilingual website privacy notice. `lumiscene/privacy.html` is the separate bilingual LUMISCENE app privacy policy, with explicit language URLs and readable content without JavaScript. Fonts and the favicon are in `assets/`. Both languages are visible when JavaScript is disabled. No build tools are required.

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

Manrope (body and wordmark) and Newsreader (English display headings) are self-hosted from the Google Fonts repository under the SIL Open Font License. See `assets/OFL-Manrope.txt` and `assets/OFL-Newsreader.txt`. Chinese display headings use the system Songti/SimSun serif fallback. The small typographic favicon is authored for this website; it is not a trademark registration or a separately approved company logo.

## LUMISCENE privacy policy · 2026-11-07

The operator confirmed Shenzhen Grovemind Technology Co., Ltd. as the responsible company; LUMISCENE is free, has no accounts or in-app purchases, and is for a general audience including children with guardian guidance. The confirmed release design keeps photos, QR processing, case information and lighting settings local (lighting commands use Bluetooth), without server uploads, advertising, usage analytics or third-party crash reporting. The privacy contact is kimsung92@gmail.com; the corporate website email stays unchanged.

This webpage is a publication of those confirmed practices, not proof that the final app has passed a privacy audit or store review. The available Android 0.1.18 UI handoff still requires the vendor's real BLE/QR integration; check the final Android/iOS permissions, SDKs, network behavior, retention/deletion and in-app policy link against this policy before submission. Determine any older Android Bluetooth permission handling and child-audience requirements from the actual release implementation. Complete App Store privacy details and Google Play Data safety separately.
