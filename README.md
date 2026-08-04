# Halle Fromson — personal site

Live at **https://hfromson.github.io/halle-fromson-site/**

Two pages:

| Page | What it is |
|---|---|
| `index.html` | The scroll-through world. Five scenes (brief → plan → production → review → finish line) rendered as AI video that the camera flies through as you scroll. |
| `resume.html` | The 60-second version: about, experience, strengths, how-I-work, contact. This is the page recruiters read. |

No build step, no dependencies, nothing to install. It's plain HTML/CSS/JS — edit a file, refresh the browser, done.

---

## The one file that holds all the words

**`halle-content.js`** is the single source of truth for every word on the resume page. Change it there and the page updates itself. You never need to touch HTML to fix copy.

### Still to fill in (marked in that file)

Anything in `[square brackets]` is a placeholder, and `// VERIFY` comments flag lines written from public information that you should confirm or rewrite in your own words:

1. **Arsonal Design** — the start year (`[Start year] – Present`)
2. **The Pure Imagination Party Company** — role title, location, dates
3. **Real Genius Entertainment** — role title, location, dates
4. **Your bullet points** — the responsibilities under each role were written to be role-typical and transferable. Rewrite them as things you actually did. Keep them outcome-shaped, and don't add metrics you can't back up.
5. **Education detail** — confirm the certificate line is right
6. **Optional public email** — set `meta.email` to show one, leave `""` to hide it

Everything else (hero, about, strengths, how-I-work, contact) is written and ready to go.

---

## Editing it with an AI assistant

This repo is written to be maintained by an AI coding assistant (Claude Code, Cursor, and similar). Useful prompts:

- *"Open halle-content.js and update my Arsonal Design bullets to these: …"*
- *"Fill in the placeholder dates and titles: Pure Imagination was [role] from [dates], Real Genius was …"*
- *"Add a 'Selected work' section to the resume page with three project stories."*
- *"Change the third scene's copy on the scroll page to say …"* (scene copy lives in `index.html`)

Ask it to read this README first and it will know where everything is.

## Running it on your own computer

Any static server works. With Python installed:

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173

---

## Giving it a real web address

The site currently lives at a github.io address. To use something like `hallefromson.com`:

1. Buy the domain (Cloudflare sells at cost, roughly $11/year)
2. In your DNS settings add **four A records** on `@` pointing at GitHub's servers —
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` —
   plus one **CNAME** on `www` pointing to `hfromson.github.io`.
   If you're on Cloudflare, every one of those must be set to **"DNS only" (grey cloud)**, not proxied, or HTTPS never finishes setting up.
3. In this repo: **Settings → Pages → Custom domain**, enter the domain, Save
4. Wait for the green checkmark, then tick **Enforce HTTPS**
5. Last step, easy to forget: update the social-preview lines in **both** `index.html` and `resume.html` (`og:url`, `og:image`, `twitter:image`) to the new domain, so the link-preview image keeps working when you share the site.

## How the scroll page works (only if you're curious)

`index.html` mounts a scroll engine (`scrub-engine.js`) that plays nine short video clips as one continuous camera flight: five "dive" clips, one per scene, and four "connector" clips that join them seamlessly. Scroll position drives video time — the camera genuinely moves, scrolling just controls when.

The clips live in `assets/vid/`. The `.webp` files in `assets/` are still-image posters shown before each clip loads. On phones, and for anyone who prefers reduced motion, the page falls back to those stills automatically.

Scroll architecture adapted from [scroll-world](https://github.com/oso95/scroll-world) (MIT). Site built by Claude Code, directed by Kevin Zoss.
