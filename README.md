[![Build Status](https://travis-ci.org/yusrilhs/str-truncate.svg?branch=master)](https://travis-ci.org/yusrilhs/str-truncate)

# str-truncate
 Polyfill for truncate string

## Install
* using npm `npm install str-truncate --save`
* using yarn `yarn add str-truncate`

## Usage
```js
require('str-truncate');

// Output: Lorem ipsum dolor sit amet, consectetur...
'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
Aliquid corrupti vitae, doloribus iusto praesentium dolorem.'.truncate(50);

// Output: Lorem ipsum dolor sit amet, ..read more
'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
Eaque doloremque asperiores ut ipsum totam quos.'.truncate(50, ' ..read more');
```
