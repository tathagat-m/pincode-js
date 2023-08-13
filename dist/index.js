"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postcodeValidatorExistsForCountry = exports.postcodeValidator = exports.CountryCode = void 0;
const pincode_regexes_1 = require("./pincode-regexes");
var pincode_types_1 = require("./pincode-types");
Object.defineProperty(exports, "CountryCode", { enumerable: true, get: function () { return pincode_types_1.CountryCode; } });
const postcodeValidator = (postcode, country) => {
    if (!pincode_regexes_1.POSTCODE_REGEXES.has(country)) {
        // throw Error if country code is unrecognised
        throw Error(`Invalid country code: ${country}`);
    }
    return pincode_regexes_1.POSTCODE_REGEXES.get(country).test(postcode);
};
exports.postcodeValidator = postcodeValidator;
const postcodeValidatorExistsForCountry = (country) => {
    return pincode_regexes_1.POSTCODE_REGEXES.has(country);
};
exports.postcodeValidatorExistsForCountry = postcodeValidatorExistsForCountry;
