Peak Landing
============

![Chuck](http://www.thirstyforbeer.com/db/wp-content/uploads/2013/05/ThirstyForBeer_AwesomeGIFs-0011.gif)

### Development Setup
1\. Clone this repo and `cd` into the folder
```
git clone git@github.com:Whitespell/peak-landing.git && cd peak-landing
```
2\. Install the required dependencies
```
sudo npm i
```
3\. Also make sure you have [Grunt](http://gruntjs.com) installed as you will need it for development

### Development

#### Storage
1. Uncompiled code is stored in the `dev/` folder
2. Compiled code in stored in the `www/` folder
2. Assets (like images, fonts etc.) are also stored in the `www/` folder

#### Coding
When you start doing development work start a server using the `grunt` command. This will start a server on `*:9000` and will listen for changes as you develop. When a change is detected everything from `dev/` will be compiled into browser-readable files which will be placed in the `www/` folder.

#### EJS Structure
For more modular and maintainable markup we use [grunt-ejs-locals](https://github.com/RandomEtc/ejs-locals) which is a Grunt EJS compiled, it enables us to enjoy the convienience of EJS with static web files by preprocessing them using Grunt.

All `.ejs` files are stored in `dev/ejs`. In there all the files are page files except for the files in `_inc/`. In the `_inc/` folder we store elements that are being used multiple times on the website (partials) like the mastfoot and masthead as well as the layout for out page.

##### Layout
The layout stored in `_inc/layout.ejs` is being used as the default layout for the website's pages. This means the markup for every page is wrapped in this file's contents. More information on layouts can be found in the [ejs-locals docs](https://github.com/RandomEtc/ejs-locals).

##### Partials

A basic partial include:
```
<%- partial('_inc/masthead') %>
```

There are also more dynamic partials like `feature` which gives has quite some dynamic parts you can control using variables you pass to the partial when you include it:

```
<%- partial('_inc/feature', {
		  title: 'Create your own workouts',
		  sub_title: 'With content from your idols',
		  desc: 'An awesome description for an awesome title, awesomeness!',
		  previewSrc: 'iphone-profile.png',
		  testimonial: {
			  imgSrc: 'isaiah-thomas.jpg',
			  quote: 'An awesome qoute will be inserted here',
			  cite: 'Isaiah Thomas',
			  logo: {
			  	src: 'boston-celtics-logo.png',
				  isVertical: true
			  }
		  },
		  options: {
		  	reversed: true,
		  	noBorderBottom: true
		  }
	  }) %>
```

#### SASS and JS Structure
I think the SASS and JS structure is pretty self-explanatory. If you have questions send me an email on `koen@whitespell.com`.
