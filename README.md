# Channel New Project

> Beep boop

## Gatsby

#### to start:

```
npx gatsby new ${site-name}
```

and:

```
cd ${site-name}
```

#### yarn:

```
yarn add gatsby-plugin-typescript gatsby-plugin-resolve-src gatsby-plugin-page-transitions gatsby-plugin-robots-txt gatsby-plugin-sass gatsby-plugin-sitemap dotenv @channelstudio/loglogo node-sass
```

Have a starter template for `gatsby-config.js` that gets copied over, this will include resolve optinos for different packages.

> After this you'll want to leave a note to edit `gatsby-config.js` and what to change (the options for contentful, manifest, and sitemap) in the install script

This is what you'll need to add:

Goes above `module.exports`:

```
require('dotenv').config({
  path: '.env',
});
```

Goes into plugins:

```
`gatsby-plugin-resolve-src`,
`gatsby-plugin-sass`,
{
  resolve : `gatsby-plugin-sitemap`,
  options : {
    exclude: []
  }
},
`gatsby-plugin-robots-txt`,
```

Source filesystem gets changed to:

```
options: {
  name: `static`,
  path: `${__dirname}/src/static`,
},
```

#### src templates

Folders/files to delete: 

* `src/images/`
* `src/components/*`
* `src/pages/page-2.js`

Command to delete folders/files:

```
rm -rf src/images/ src/components/* src/pages/page-2.js
```

Folders/files to create: 

* `src/static/`
	* `fonts/`
	* `images/`
	* `icons/`
* `src/styles/`
	* `App.scss`
	* `_global.scss`
	* `_mixins.scss`
	* `_reset.scss`
	* `_settings.scss`
	* `_typography.scss`
	* `_utils.scss`
	* `components/`
		* `Home.scss`
		* `Header.scss`
		* `Footer.scss`
		* `NotFound.scss`
	* `settings/`
		* `_colors.scss`
		* `_fonts.scss`
		* `_responsive.scss`
* `src/components/`
	* `base/`
		* `Image.js`
	* `Layout.js`
	* `site/`
		* `Header.js`
		* `Footer.js`
* `src/templates/`

Command to create folders:

```
mkdir -p src/static/ src/static/fonts/ src/static/images/ src/static/icons src/styles/ src/styles/components/ src/styles/settings/ src/components/ src/components/base/ src/components/site/ src/templates/
```

Command to create files:

```
touch src/styles/App.scss src/styles/_global.scss src/styles/_mixins.scss src/styles/_reset.scss src/styles/_settings.scss src/styles/_typography.scss src/styles/_utils.scss src/styles/components/Home.scss src/styles/components/Header.scss src/styles/components/Footer.scss src/styles/components/NotFound.scss src/styles/settings/_colors.scss src/styles/settings/_fonts.scss src/styles/settings/_responsive.scss src/components/base/Images.js src/components/Layout.js src/components/site/Header.js src/components/site/Footer.js
```
