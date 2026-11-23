# Nikolaos Fragkas — portfolio

Static copy of the [Wix portfolio](https://fragkasnikolaos.wixsite.com/website), ready to host on GitHub Pages.

## Pages

- Home, with the project list and contact links
- MSc Courseworks (OpenGL and the physics engine)
- Team Projects (El Bloob)
- Dissertation (Vindolanda Mystery)
- Personal Projects
- CV, including the downloadable PDF

Videos stay embedded from YouTube and Vimeo. Images, the CV, and the score-system PDF are stored in this repository.

## Publish on GitHub Pages

The workflow in `.github/workflows/pages.yml` publishes the site on every push to `main`. If Pages is still off, that workflow turns it on and sets the source to GitHub Actions.

You can also turn it on by hand: **Settings → Pages → Build and deployment → Source: GitHub Actions**, then re-run the failed deploy.

The address will be:

`https://somnitis.github.io/Portfolio/`

## Edit the site

Page copy lives in the HTML files. Shared layout and colours are in `css/styles.css`. Pictures are in `assets/images/` and documents in `assets/docs/`.
