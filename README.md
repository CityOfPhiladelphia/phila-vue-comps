# phila-vue-comps ([@philly/vue-comps](https://www.npmjs.com/package/@philly/vue-comps) in [npmjs.com](https://npmjs.com))

phila-vue-comps is a library of Vue components that can be used in apps which use [Vue.js](https://vuejs.org/v2/guide/) and [Vuex](https://vuex.vuejs.org/).  It includes many data-presentation components such as [Vertical Tables](https://github.com/CityOfPhiladelphia/phila-vue-comps/wiki/Vertical-Table) or [Horizontal Tables](https://github.com/CityOfPhiladelphia/phila-vue-comps/wiki/Horizontal-Table), etc.

## To Include The Components In Your App
* in a bundled app, use npm:

    `npm install @philly/vue-comps`

* in an html file, use the CDN:

    `<script src="//unpkg.com/@philly/vue-comps@1.0.21/dist/phila-vue-comps.js"></script>`

## Examples

### Badge-Custom
![](https://s3.amazonaws.com/mapboard-images/TopicPanel/BadgeCustom.JPG)

### Horizontal Table
![](https://s3.amazonaws.com/mapboard-images/TopicPanel/horizontalTable_2.JPG)

## Usage
Check out [the wiki](https://github.com/CityOfPhiladelphia/phila-vue-comps/wiki) for usage documentation.

## Coming Soon

* The ability to add any component to a Horizontal Table Cell

## Publishing
To publish a new version of Mapboard to NPM:

Commit your changes to master.
Bump the NPM version with npm version major|minor|patch.
Push with tags: git push && git push --tags.
Update wiki docs to reflect new version and/or dependency changes.
Travis will now run a build and publish to NPM.


## Publishing

To publish a new version of Mapboard to NPM:

1. Commit your changes to `master`.
2. Bump the NPM version with `npm version major|minor|patch`.
3. Push with tags: `git push && git push --tags`.
4. Update wiki docs to reflect new version and/or dependency changes.

### 2.0.3 - 1/7/2020

*Fixes csv export for fields that are number format instead of string.

### 2.0.2 - 1/5/2020

* Message slot changed to allow html code
* Prop added to prevent data change when button clicked

### 2.0.1 - 12/30/2019

* Fixes bug with pdf and csv export buttons

### 2.0.0 - 12/17/2019

* Merges all changes necessary for Property Data Explorer

### 1.0.48 - 12/09/2019

* Fixes generation of xml for epay

### 1.0.47 - 11/04/2019

* Adds form labels to combo search

### 1.0.46 - 10/24/2019

* fixes more bugs caused new date-fns

### 1.0.45 - 10/22/2019

* fixes bugs caused by new date-fns

### 1.0.44 - 10/22/2019

* ran all pull requests created by dependabot

### 1.0.43 - 10/22/2019

push failed due to linting

### 1.0.42 - 10/9/2019

* Allows legends (used in StreetSmart) to have style passed to them

### 1.0.41 - 10/8/2019

* Removes connections to pvd from ComboSearch

### 1.0.40 - 10/7/2019

* Fixes bug with removal of old "ConfigurableInput" component

### 1.0.39 - 10/7/2019

* Monthly package upgrades

### 1.0.38 - 9/20/2019

* Changes to make polyline work in pvm

### 1.0.37 - 9/6/2019

* Monthly package upgrades

### 1.0.36 - 8/9/2019

* Adds border to address search

### 1.0.35 - 8/9/2019

* Gives ids to horizontal and vertical tables

### 1.0.34 - 8/9/2019

* Monthly package upgrades

### 1.0.33 - 7/11/2019

* Upgrades lodash-es and lodash.defaultsdeep

### 1.0.32 - 6/20/2019

* changes for Pinboard

### 1.0.31 - 6/2/2019

* Uses axios 0.19.0 to fix security bug
* Moves badge color to slots

### 1.0.30 - 5/30/2019

* Small changes made in CheckboxSet.vue to fix a bug with filtering layers in Openmaps, which was introduced when work was done on layerboard for StreetSmart.
* Small changes made in Checkbox.vue to fix the alignment of checkboxes in Openmaps if a datasource is not in Benny.

### 1.0.29 - 5/30/2019

* A large number of changes that were made over the initial development of StreetSmart, and were used in the original release of the StreetSmart site as commits of pvc.
* A number of changes that were made over the continued development of CleanPhl.
