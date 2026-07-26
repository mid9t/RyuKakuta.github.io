# Ryu Kakuta — Portfolio

Personal site of **Ryu Kakuta**, AI Evaluation Engineer. Built with
[Next.js](https://nextjs.org) (App Router) and exported as a static site for
[GitHub Pages](https://pages.github.com).

Live: [https://mid9t.github.io/RyuKakuta.github.io/](https://mid9t.github.io/RyuKakuta.github.io/)

## Stack

- Next.js 16 (App Router, `output: "export"`)
- React 19 + TypeScript
- Tailwind CSS 4
- Lucide icons
- Deployed via GitHub Actions → GitHub Pages

## Project layout

```
app/                  # Routes (homepage, /articles, /projects/…)
components/           # Portfolio UI (Hero, About, Experience, …)
content/              # Typed data: experience, projects, article registry
lib/                  # Shared helpers (base path, className utils)
public/               # Static assets + self-contained article HTML bodies
.github/workflows/    # Pages deploy pipeline
```

Copy for the homepage (roles, projects, featured writing, résumé URL, socials)
lives in [`content/portfolio.ts`](content/portfolio.ts). The article archive is
generated from [`content/articles.ts`](content/articles.ts); each article body
is a hand-authored HTML page under `public/articles/<slug>/index.html`.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000/RyuKakuta.github.io/](http://localhost:3000/RyuKakuta.github.io/)
(the site is built with `basePath: "/RyuKakuta.github.io"` to match GitHub Pages).

Useful scripts:

| Command              | Purpose                        |
| -------------------- | ------------------------------ |
| `npm run dev`        | Hot-reload development server  |
| `npm run build`      | Produce the static export      |
| `npm run typecheck`  | TypeScript check only          |
| `npm run lint`       | ESLint                         |

### Preview the production export

```bash
npm run build
# Serve `out/` under the Pages base path:
python3 - <<'PY'
import http.server, socketserver, tempfile, os, pathlib
root = pathlib.Path("out").resolve()
tmpdir = tempfile.mkdtemp()
os.symlink(root, os.path.join(tmpdir, "RyuKakuta.github.io"))
class H(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **k):
        super().__init__(*a, directory=tmpdir, **k)
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()
socketserver.TCPServer.allow_reuse_address = True
print("http://127.0.0.1:8765/RyuKakuta.github.io/")
with socketserver.TCPServer(("127.0.0.1", 8765), H) as httpd:
    httpd.serve_forever()
PY
```

## Deployment

Pushes to `main` trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which installs locked dependencies, typechecks, builds the static export, and
publishes `out/` to GitHub Pages.

In the repository settings, set **Pages → Source** to **GitHub Actions**.

## Editing content

- **Experience / Projects / About / Contact copy** → edit `content/portfolio.ts`
- **Article archive cards / dates / labels** → edit `content/articles.ts`
- **Article body prose** → edit `public/articles/<slug>/index.html`
- **Theme tokens (colors, fonts)** → edit `app/globals.css`

No more hand-patching of minified `_next` chunks.
