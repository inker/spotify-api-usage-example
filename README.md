# Spotify API usage example

## Demo
https://inker.github.io/spotify-api-usage-example

## Features
- The artist is saved in the URL. On page refresh, filters are retained.
- The sidebar is resizeable.
- Light/dark/system theme switcher.
- Login & logout buttons. 

## What's lacking
- The token is stored in `localStorage` which is unsafe, because it's vulnerable to XSS attacks.
- Redirect URI & App ID are hardcoded.
- Vue components don't have unit tests.
- Vue components should be made reusable and moved to a separate repository & be tested with unit tests & storybook.
- No end-to-end tests.
- The build pipeline lacks the compression step which would obviate the need to compress static files on the fly. Sadly, GitHub Pages only supports dynamic compression.
- Router working in hash mode due to GitHub Pages limitations.
- Commit messages could be more descriptive.
- Some commits do more than one thing.
