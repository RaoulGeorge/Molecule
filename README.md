# Molecule

##Summary
This is a personal project of mine using all the lessons learned through several years of professional web development experience. Molecule is a front-end ecosystem consisting of framework agnostic code, tooling and tests.

##External Libs
* Requirejs
* jQuery

##Patterns

##Naming Conventions

###Prototype Methods
All prototype methods are named Object_methodname. This is done to allow for easier debugging instead of using anonymous functions. See below -:

`Composer.prototype.addScaffolding = function Composer_addScaffolding() {};`

##Tooling

##Tests

##Notes
These notes are for personal use only. Just tiny tidbits I write down.

#### package.json
Set this up using `npm init` in the app folder. Need this in place for grunt.
Use `npm install <pkg> --save` afterwards to install a package and save it as a dependency in the package.json file