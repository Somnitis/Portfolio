# Nikolaos Fragkas — portfolio

Static copy of the [Wix portfolio](https://fragkasnikolaos.wixsite.com/website), ready to host on GitHub Pages.

## Pages

- Home, with the project list and contact links
- MSc Courseworks (OpenGL and the physics engine)
- Team Project (El Bloob)
- Dissertation (Vindolanda Mystery)
- Unreal Engine projects
- CV, including the downloadable PDF

Videos stay embedded from YouTube and Vimeo. Images, the CV, and the score-system PDF are stored in this repository.

## Publish on GitHub Pages

1. Merge this branch into `main`.
2. In the repository on GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.

The workflow in `.github/workflows/pages.yml` publishes the site on every push to `main`. The address will be:

`https://somnitis.github.io/Portfolio/`

## Edit the site

Page copy lives in the HTML files. Shared layout and colours are in `css/styles.css`. Pictures are in `assets/images/` and documents in `assets/docs/`.
