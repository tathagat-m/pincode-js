"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pincodeValidatorExistsForCountry = exports.pincodeValidator = exports.CountryCode = void 0;
const pincode_regexes_1 = require("./pincode-regexes");
var pincode_types_1 = require("./pincode-types");
Object.defineProperty(exports, "CountryCode", { enumerable: true, get: function () { return pincode_types_1.CountryCode; } });
const pincodeValidator = (postcode, country) => {
    if (!pincode_regexes_1.PINCODE_REGEXES.has(country)) {
        // throw Error if country code is unrecognised
        throw Error(`Invalid country code: ${country}`);
    }
    return pincode_regexes_1.PINCODE_REGEXES.get(country).test(postcode);
};
exports.pincodeValidator = pincodeValidator;
const pincodeValidatorExistsForCountry = (country) => {
    return pincode_regexes_1.PINCODE_REGEXES.has(country);
};
exports.pincodeValidatorExistsForCountry = pincodeValidatorExistsForCountry;
