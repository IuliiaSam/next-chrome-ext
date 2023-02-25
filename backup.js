// "background.service": {
//   "scripts": ["background.js"]
// },

// "minimum_chrome_version": "10.0",
// "devtools_page": "./nextwork.html"

// chrome.devtools.panels.create(
//   "NextWork Panel",
//   "favicon.ico",
//   "nextwork.html",
//   function (panel) {
//     // code invoked on panel creation
//     console.log("panel created");
//     console.log(panel);
//   }
// );

// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="UTF-8" />
//   </head>
//   <body>
//     <h1>Our future NextWork Extension</h1>
//     <!-- <script src="background.js"></script> -->
//   </body>
// </html>

// "build": "next build && next export && mv out/_next out/next && sed -i '' -e 's/\\/_next/\\.\\/next/g' out/**.html && mv out/index.html ../extension && rsync -va --delete-after out/next/ ../extension/next/",
