# Katie Dew Photography

A simple static photography website ready for GitHub Pages.

## Files

- `index.html` — home page
- `about.html` — about and contact page
- `gallery.html` — Astrophotography, Landscapes and Aerial galleries
- `blog.html` — sample blog layout
- `style.css` — all colours, layout and responsive styling
- `script.js` — mobile menu, year and email contact form

## Add your photographs

1. Create an `images` folder beside the HTML files.
2. Add your image, for example `images/milky-way.jpg`.
3. Replace a placeholder `<div>` with:

```html
<img class="photo tall" src="images/milky-way.jpg" alt="Milky Way over the Scenic Rim">
```

Use `tall`, `wide`, or `square` to control the gallery size.

## Before publishing

1. In every HTML file, replace the Instagram URL if needed.
2. In `script.js`, replace `hello@example.com` with your email address.
3. In the HTML footers, replace the same sample email address.
4. Replace all sample text and placeholder blocks with your own content.

## Publish with GitHub Pages

Upload these files to the top level of your GitHub repository. In the repository, open **Settings → Pages**, choose **Deploy from a branch**, select your main branch and the `/ (root)` folder, then save.
