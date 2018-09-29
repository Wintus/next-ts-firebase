# Next.js by TypeScript with styled components & Firebase Hosting

## How to use

<details>
<summary><b>Set up firebase</b></summary>

* install Firebase Tools: `npm i -g firebase-tools`
* create a project through the [firebase web console](https://console.firebase.google.com/)
* grab the projects ID from the web consoles URL: `https://console.firebase.google.com/project/<projectId>`
* update the `.firebaserc` default project ID to the newly created project
* login to the Firebase CLI tool with `firebase login`

</details>

<details>
<summary><b>Install Project</b></summary>

```bash
yarn
```

#### Run Next.js development:

```bash
yarn dev
```

#### Run Firebase locally for testing:

```
yarn serve
```

#### Deploy it to the cloud with Firebase:

```bash
yarn deploy
```

#### Clean dist folder

```bash
yarn clean
```

</details>

## Important

* The empty `placeholder.html` file is so Firebase Hosting does not error on an empty `public/` folder and still hosts at the Firebase project URL.
* `firebase.json` outlines the catchall rewrite rule for our Cloud Function.
* The [Firebase predeploy](https://firebase.google.com/docs/cli/#predeploy_and_postdeploy_hooks) hooks run most of the npm scripts when `yarn deploy` runs `firebase deploy`. The only scripts you should need are `clean`, `dev`, `serve` and `deploy`.

### Customization

Next App and Next Server development are separated into two different folders:

* app - `src/app/`
* server - `src/functions/`

If you wish to modify any configuration of the Next App, you should only modify the contents of `src/app`.

For instance, the `.babelrc` in `src/functions` is used only to compile the Firebase Cloud Functions code, which is our the Next Server code. If you wish to customize the `.babelrc` for the Next App compilation, then you should create one at `src/app/.babelrc` and follow the [customization guide](https://github.com/zeit/next.js#customizing-babel-config).

### _app.js

If using `_app.js` you may receive the following error on your deployed Cloud Function:

```
{ Error: Cannot find module '@babel/runtime/regenerator'...
```

Despite next.js having `@babel/runtime` as a dependency, you must install it as a dependency directly in this project.
