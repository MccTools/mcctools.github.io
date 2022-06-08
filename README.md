# MCC Tools
A collection of GUI tools to ease the development of MC datapacks and resource packs.

These tools are available both as a web app at [mcctools.github.io](https://mcctools.github.io/), and as a dedicated desktop app available in the [releases](https://github.com/MccTools/mcctools.github.io/releases).

The desktop app is more fully featured than the web app, thanks to [Tauri](https://tauri.studio/) making it possible to interface more natively with the desktop environment.

## Developing
First install dependencies with `npm install`, then use `npm run dev-tauri` to test the desktop app, or use `npm run dev-ghpages` and open `https://localhost:3000` in your browser to test the browser version.

## Building
Build the desktop app using `npm run build-tauri`, or build the web app using `npm run build-ghpages`

## Releasing
> TODO: The exact method of generating a release is yet to be determined