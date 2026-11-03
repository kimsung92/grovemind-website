# GroveMind company website

Bilingual company introduction for **Shenzhen Grovemind Technology Co., Ltd. / 深圳市智林星瀚科技有限公司**.

## Website

- English: https://kimsung92.github.io/grovemind-website/?lang=en
- Chinese: https://kimsung92.github.io/grovemind-website/?lang=zh
- Corporate email: jinxing@grovemindlabs.com

The primary focus is software and app development. AI application development and product/industrial design are secondary areas. Company identity and address are based on supplied company records. No customer, certification, revenue or released-product claims are made. The website does not imply Apple endorsement or enrollment approval.

## Editing and publishing

`index.html` contains the page, styles and language switching. `privacy.html` contains a bilingual website privacy notice. Fonts and the favicon are in `assets/`. Both languages are visible when JavaScript is disabled. No build tools are required.

GitHub Pages publishes the root of the `main` branch. Changes pushed to `main` publish automatically through GitHub's Pages build.

Local preview: `python3 -m http.server 4173 --bind 127.0.0.1`.

## Custom domain — prepared, not yet enabled

The domain `grovemindlabs.com` has been registered, but this initial release deliberately uses the GitHub Pages URL, following the request to bind the domain later. No `CNAME` file is committed and no domain DNS records are changed.

When ready:

1. Verify the domain under the owning GitHub account's Pages settings using the exact TXT name/value GitHub supplies.
2. In this repository's Pages settings, set `www.grovemindlabs.com` as the custom domain. GitHub will write a root `CNAME` file.
3. At Alibaba Cloud DNS, add `www` as a CNAME to **`kimsung92.github.io`**. The target contains no protocol and no `/grovemind-website` path.
4. For the bare domain, follow GitHub's current official A/AAAA instructions. Confirm current addresses in the documentation below before entering them. GitHub can redirect between the bare domain and `www` when both are configured.
5. After DNS and certificate provisioning complete, enable **Enforce HTTPS**. Verify both URLs and mail delivery.
6. Add canonical and Open Graph URL metadata for the chosen production domain, then update these README links and the sitemap.

**Preserve the existing MX, SPF, DKIM, DMARC and mailbox-related CNAME records. Do not replace the DNS zone or change nameservers merely to bind the website.** The website and email use separate DNS records and can coexist.

Official instructions:

- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages

GitHub Pages is for static information here, not a shopping checkout or commercial SaaS. Follow GitHub's usage limits before expanding its function.

## Assets

Manrope font from the Google Fonts repository, licensed under the SIL Open Font License: see `assets/OFL-Manrope.txt`. The small typographic favicon is authored for this website; it is not a trademark registration or a separately approved company logo.
