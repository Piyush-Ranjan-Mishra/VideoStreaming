# Screeenshots
<div align=”center”> 
  ![Web-Screenshot](/screenshots/web.png?raw=true "Web-Screenshot")
  ![Mobile-Screenshot](/screenshots/mobile.png?raw=true "Mobile Responsive")
  ![Web-Screenshot](/screenshots/screenshots.gif?raw=true "Web-Screenshot"
  ![Performance](/screenshots/performance-report.png?raw=true "Performance Report")
</div>
# Link

https://videostreaming-tv-apps.netlify.app/

# Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Additional Feature](#feature)

# Prerequisites

- [node 15](https://nodejs.org/en/download/)
- [yarn](https://yarnpkg.com/en/docs/install) package manager (instead of npm)
- [react](https://reactjs.org/)
- [VSCode](https://code.visualstudio.com/download) editor for good typescript intellisense
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension for consistent code formatting
  - [tslint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint) extension for consistent code style

# Getting started

With all the prereqs installed:

1.  clone this repo,
2.  `cd` into it and run `yarn install`. This will install all the node dependencies we need for development.
3.  Run `yarn start` to start the react dev server in specified environment.
4.  Run `yarn build` for deplyment.

# Feature

1. Implemented horizontal scroll from scratch
2. Implement tab to scroll from different clickable element to select
3. Implemented fade-in for video cards
4. Implement Responsive website
5. For Performance :
   - Pre-rendered static website(SSR)
   - CSS from scratch to for lower bandwidth no bootstrap or material-ui
   - Implemented lazy loading and skeleton ui
   - Used webp image for faster rendering
   - used different image sizes for mobile to reduce bandwidth charge for users

# Running tests

1. Run test by `npm test` or `yarn test`
