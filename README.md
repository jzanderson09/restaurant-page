# Restaurant Page

### [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page)

### [Github](https://github.com/jzanderson09/restaurant-page)

### Assignment:

1. Start the project the same way you began the webpack tutorial project, by creating the `package.json` file and setting up Webpack.

    * Remember, you only need to install and configure the things you need for your project. For example, if you do not plan to have local image files linked in your HTML template, you will not need to install and configure `html-loader`.

2. Create a `.gitignore` file in the root of your project. It should contain the text `node_modules` and `dist` on separate lines.

![.gitignore screenshot](./gitignore_screenshot.png)

3. Set up an HTML skeleton inside of src/template.html. Inside the body, add a `<header>` element that contains a `<nav>` with buttons (not links!) for different “tabs” (for example buttons for “Home”, “Menu” or “About” etc). Below the `<header>`, add a single `<div id="content">`.

4. Inside of `src/index.js` write a `console.log` or `alert` statement and then run `npx webpack serve`. Open http://localhost:8080 in your browser and check your JavaScript is running.

5. Inside `div#content`, create a homepage for your restaurant. You might want to include an image, headline, and some text about how wonderful the restaurant is; you do not have to make this look too fancy. It’s okay to hard-code these into the HTML for now just to see how they look on the page.

6. Now remove everything inside `div#content` from the HTML (so you still have the `<header>` and `<nav>` with an empty `<div id="content">` below it) and instead create them by using JavaScript only, e.g. by appending each new element to `div#content` once the page is first loaded. Since we’re all set up to write our code in multiple files, let’s write this initial page-load function inside of its own module and then import and call it inside of `index.js`.

7. Next, set up your restaurant site to use tabbed browsing to access the Menu and Contact pages. Look at the behavior of this [student’s live preview site](https://web.archive.org/web/20221024060550/https://eckben.github.io/bearysBreakfastBar/) for visual inspiration.

    1. Put the contents of each “tab” inside of its own module. Each module will export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.

    2. Write the tab-switching logic inside of `index.js`. You should have event listeners for each button in the header navbar that wipes out the current contents of `div#content` and then runs the correct ‘tab module’ to populate it with the new contents again.

8. Let’s deploy to GitHub pages! First, we will need to bundle our application into `dist` by running `npx webpack`. Unfortunately, we need to do a little more work to deploy to GitHub pages, because GitHub Pages tries to look for an `index.html` in the root of your project, but yours is inside `dist`! We will need to do a few steps to push the contents of your `dist` directory to its own branch on GitHub, which will then have a root-level `index.html` for GitHub pages to serve.

    1. Follow the instructions in this [gist about deploying your dist subdirectory to GitHub pages.](https://gist.github.com/cobyism/4730490) EZPZ!

    2. Recall that the **source branch** for GitHub Pages is set in your repository’s settings. Get this changed to the `gh-pages` branch.