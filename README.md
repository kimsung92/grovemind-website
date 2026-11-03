# GroveMind company website

Bilingual company introduction for **Shenzhen Grovemind Technology Co., Ltd. / 深圳市智林星瀚科技有限公司**.

## Website

- English: https://grovemindlabs.com/?lang=en
- Chinese: https://grovemindlabs.com/?lang=zh
- Corporate email: jinxing@grovemindlabs.com

The primary focus is software and app development. AI application development and product/industrial design are secondary areas. Company identity and address are based on supplied company records. No customer, certification, revenue or released-product claims are made. The website does not imply Apple endorsement or enrollment approval.

## Editing and publishing

`index.html` contains the page, styles and language switching. `privacy.html` contains a bilingual website privacy notice. Fonts and the favicon are in `assets/`. Both languages are visible when JavaScript is disabled. No build tools are required.

GitHub Pages publishes the root of the `main` branch. Changes pushed to `main` publish automatically through GitHub's Pages build.

Local preview: `python3 -m http.server 4173 --bind 127.0.0.1`.

## Custom domain

The production domain is **grovemindlabs.com**. GitHub Pages is configured with this apex domain in `CNAME`; `www.grovemindlabs.com` also points to the same site and is redirected by GitHub to the apex domain.

Configured on November 3, 2026:

- Domain ownership verified under the `kimsung92` GitHub account, using the GitHub-provided TXT verification record.
- Four apex A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
- `www` CNAME: `kimsung92.github.io` (no protocol or repository path).
- Canonical and Open Graph URLs use `https://grovemindlabs.com/`; `robots.txt` links to the two-page sitemap.
- GitHub provisions the TLS certificate. HTTPS enforcement is enabled once the certificate is ready; see the dated deployment verification for the confirmed state.

**All eight pre-existing email records were preserved**, including three MX records, SPF, and the `mail`, `smtp`, `imap`, `pop3` CNAME records. Their values, TTLs, enabled states and original update times were compared before and after the website DNS additions. No nameservers were changed.

Keep the GitHub domain-verification TXT record. For future website hosting changes, update only the website-specific DNS records, preserving all mail-related records.

Official instructions:

- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages

GitHub Pages is for static information here, not a shopping checkout or commercial SaaS. Follow GitHub's usage limits before expanding its function.

## Assets

Manrope font from the Google Fonts repository, licensed under the SIL Open Font License: see `assets/OFL-Manrope.txt`. The small typographic favicon is authored for this website; it is not a trademark registration or a separately approved company logo.
