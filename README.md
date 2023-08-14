# pinocode-js

A lightweight JS module for parsing and validating postcodes. Country specific validation is supported for most countries including GB, US, Canada, Japan and many others.

## Install

```javascript
npm install pincode-js
```

## Usage

```javascript
// commonjs
const { pincodeValidator, pincodeValidatorExistsForCountry } = require('postcode-validator');
// ES6
import { pincodeValidator, pincodeValidatorExistsForCountry } from 'postcode-validator';

pincodeValidator('W85TT', 'GB'); // returns true
pincodeValidator('1234567', 'GB'); // returns false

pincodeValidatorExistsForCountry('GB'); // returns true
pincodeValidatorExistsForCountry('Moon'); // returns false

country codes: US, GB, CA, JP, INTL(International), etc
```
