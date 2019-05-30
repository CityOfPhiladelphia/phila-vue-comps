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

## Release Notes

### 1.0.30:

Small changes made in CheckboxSet.vue to fix a bug with filtering layers in Openmaps, which was introduced when work was done on layerboard for StreetSmart.
Small changes made in Checkbox.vue to fix the alignment of checkboxes in Openmaps if a datasource is not in Benny.

### 1.0.29:

A large number of changes that were made over the initial development of StreetSmart, and were used in the original release of the StreetSmart site as commits of pvc.