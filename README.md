# Axel Orellana: personal website

A hand-built static site: plain HTML, CSS, and a little JavaScript. There are no frameworks and no build step.

## Files

```
index.html        Home: intro, skills module, selected work, contact
projects.html     Project case studies
experience.html   Work history, education, leadership, certifications
css/style.css     All styling. Colors are variables at the top (:root)
js/main.js        Mobile menu toggle and footer year
assets/img/       Photos (already cropped and compressed) and favicon
assets/fonts/     Archivo and JetBrains Mono (SIL Open Font License)
assets/           Put Axel_Orellana_Resume.pdf here
```

## Before you publish

1. Add your resume as `assets/Axel_Orellana_Resume.pdf`. Until you do, the Resume links will 404.
2. Search for `TODO` (Ctrl/Cmd + Shift + F in VS Code) and fill in each one. They mark details only you know:
   which HDL you used for the adder, what the Raspberry Pi program does, and a non-confidential Limbic example.
3. Open `index.html` in a browser and check it on your phone too.

## How the design works (useful if your professor asks)

- The look is borrowed from an RTL schematic: navy "ink", green "nets", and pale yellow "gates".
- The skills section on the home page is drawn as a hardware module: skills are input ports, and the
  site's links are output ports. It's built from a `<figure>` with two lists. The port symbols and wires
  are CSS pseudo-elements (`::before` is the pentagon, `::after` is the wire).
- The experience timeline is drawn as a wire with junction dots, also using pseudo-elements.
- Layout is mobile-first. Media queries at 720px, 820px, and 900px switch to multi-column layouts.
- Dark mode follows the visitor's system setting through `prefers-color-scheme`.

## Run locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publish on GitHub Pages

1. Create a public repo named exactly `Axel-Orellana-dev.github.io`.
2. Copy these files into it, then commit and push:
   `git add .` then `git commit -m "Launch personal site"` then `git push`
3. In the repo, go to Settings, then Pages, and choose your main branch with the root folder.
4. In a minute or two, the site is live at https://axel-orellana-dev.github.io
