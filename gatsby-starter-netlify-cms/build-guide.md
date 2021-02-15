# Gatsby & Netlify CMS Starter

<pre>
$ git clone https://github.com/chomskim/gatsby-starter-netlify-cms
$ cd gatsby-starter-netlify-cms
$ npm install
$ npm install gatsby-plugin-netlify-cms@latest
$ npm uninstall netlify-cms-media-library-cloudinary
$ npm uninstall netlify-cms-media-library-uploadcare
[$ gatsby clean]
$ gatsby develop --host 0.0.0.0

<b>ERROR #98123  WEBPACK</b>

So, Try

$ npm install sass-resources-loader --save-dev
<b>Not solved</b>

"node-sass": "^4.14.0",
$ npm uninstall node-sass
$ npm install node-sass
"node-sass": "^5.0.0",
Node Sass version 5.0.0 is incompatible with ^4.0.0
<b>Not solved</b>

Change node version
$ node --version
v14.9.0
 nvm list 
       v12.18.3
->      v14.9.0
...
$ nvm use 12.18.3
$ node --version
v12.18.3

$ npm install -g gatsby-cli
Remove node_modules
$ npm install
<b>Not solved</b>

$ npm uninstall gatsby-plugin-purgecss
<b>Not solved</b>

<b>Problem Cleared by Transforming Indent Style Sass to CSS Syntax</b>
</pre>

## Deploy Error

<pre>
12:16:35 PM: /opt/build/repo/node_modules/yoga-layout-prebuilt/yoga-layout/build/Release/nbind.js:53
12:16:35 PM:         throw ex;
12:16:35 PM:         ^
12:16:35 PM: Error: Callback was already called.
12:16:35 PM:     at throwError (/opt/build/repo/node_modules/neo-async/async.js:16:11)
12:16:35 PM:     at /opt/build/repo/node_modules/neo-async/async.js:2818:7
12:16:35 PM:     at processTicksAndRejections (internal/process/task_queues.js:79:11)
</pre>


