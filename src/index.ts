import { PINCODE_REGEXES } from './pincode-regexes';

export { CountryCode } from './pincode-types';

export const pincodeValidator = (postcode: string, country: string): boolean => {
  if (!PINCODE_REGEXES.has(country)) {
    // throw Error if country code is unrecognised
    throw Error(`Invalid country code: ${country}`);
  }

  return PINCODE_REGEXES.get(country)!.test(postcode);
};

export const pincodeValidatorExistsForCountry = (country: string): boolean => {
  return PINCODE_REGEXES.has(country);
};