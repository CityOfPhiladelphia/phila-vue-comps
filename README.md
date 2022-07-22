# phila-vue-comps ([@phila/vue-comps](https://www.npmjs.com/package/@phila/vue-comps) in [npmjs.com](https://npmjs.com))

phila-vue-comps is a library of Vue components that can be used in apps which use [Vue.js](https://vuejs.org/v2/guide/) and [Vuex](https://vuex.vuejs.org/).  It includes many data-presentation components such as [Vertical Tables](https://github.com/CityOfPhiladelphia/phila-vue-comps/wiki/Vertical-Table) or [Horizontal Tables](https://github.com/CityOfPhiladelphia/phila-vue-comps/wiki/Horizontal-Table), etc.

## To Include The Components In Your App
* in a bundled app, use npm:

    `npm install @phila/vue-comps`

* in an html file, use the CDN:

    `<script src="//unpkg.com/@phila/vue-comps@2.0.9/dist/phila-vue-comps.js"></script>`

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

To publish a new version of @phila/vue-comps to NPM:

1. Commit your changes to `master`.
2. Bump the NPM version with `npm version major|minor|patch`. (Double check this is done from 'master')
3. Push with tags: `git push && git push --tags`.
4. Update wiki docs to reflect new version and/or dependency changes.

### 3.0.3 - 7/22/2022

* fixes for vertical tables

### 3.0.2 - 3/18/2022

* rolls back to fontawesome 5.15.4 so that it is not ahead of phila-ui

### 3.0.1 - 3/10/2022

* upgrades to fontawesome 6.0.0, updates icons.
* uses fontawesome-svg-core 1.2.36, because 1.3.0 causes errors

### 3.0.0 - 7/26/2021

* requires using npm for all package commands

### 2.1.23 - 2/8/2021

* changes to VerticalTableLight.vue for pinboard

### 2.1.22 - 11/12/2020

* removes files that were specific to real estate tax

### 2.1.21 - 10/28/2020

* fixes buttons on HorizontalTable.vue

### 2.1.20 - 10/23/2020

* completes BadgeSet.vue component

### 2.1.19 - 10/23/2020

* another attempt to push with github actions

### 2.1.18 - 10/23/2020

* setting up push with github actions

### 2.1.17 - 10/23/2020

* changes to VerticalTableLight.vue for Covid Testing site

### 2.1.16 - 10/21/2020

* changes for adding i18n capability to some components

### 2.1.15 - 10/6/2020

* ran yarn upgrades

### 2.1.14 - 9/18/2020

* changes for layerboard for streetsmart

### 2.1.13 - 9/17/2020

* adds back label when checkbox is hidden

### 2.1.12 - 9/17/2020

* re-releases due to npm error

### 2.1.11 - 9/17/2020

* allows checkboxes to be hidden

### 2.1.10 - 9/17/2020

* re-releases due to npm error

### 2.1.9 - 9/17/2020

* adds InfoBox.vue

### 2.1.8 - 9/4/2020

* changes for WAVE for atlas.phila.gov

### 2.1.7 - 8/14/2020

* adds props to IconToolTip.vue

### 2.1.6 - 8/3/2020

* fixes optional buttons in HorizontalTable.vue

### 2.1.5 - 7/29/2020

* small fixes for making tabs work in atlas with a mapbox map

### 2.1.4 - 6/14/2020

* updates comboSearch for Pinboard apps

### 2.1.3 - 5/27/2020

* upgrades all packages

### 2.1.2 - 5/15/2020

* small changes to vertical table light

### 2.1.1 - 5/5/2020

* Fixes bug and re-releases

### 2.1.0 - 5/5/2020

* merges changes for use in pinboard and viewerboard

### 2.0.11 - 3/26/2020

### 2.0.10 - 3/26/2020

### 2.0.9 - 1/31/2020

* pushes to @phila/vue-comps instead of @philly/vue-comps

### 2.0.8 - 1/30/2020

* allows hiding badges

### 2.0.7 - 1/24/2020

* builds for push to npm

### 2.0.6 - 1/24/2020

* Linting ran

### 2.0.5 - 1/24/2020

* Fixes small bug in collection summary for PDE

### 2.0.4 - 1/10/2020

* More fixes for csv export

### 2.0.3 - 1/7/2020

* Fixes csv export for fields that are number format instead of string

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
