import {
  detectSpacesRegex,
  passwordRegex,
  mobilenoRegex,
  emailRegex,
  alphaNumericRegex,
  nameRegex,
  addressRegex,
  pincodeREgex,
  aadharRegex,
  otpRegex,
} from './Regex';

const validationStrings = {
  usernameRequired: 'Username is Required',
  passwordRequired: 'Password is Required',
  fullNameRequired: 'Name is Required',
  emailRequired: 'Email is Required',
  mobileNoRequired: 'Mobile no is Required',
  invalidUsername: 'Invalid Username',
  invalidpassword: 'Invalid Password',
  invalidMobileNo: 'Please enter a valid number',
  invalidEmail: 'Invalid Email',
  firstNameRequired: 'Name should have a minimum of 2 characters',
  morethan40: 'Name should have less than 40 characters',
  addressRequired: 'Enter your address',
  houseNoRequired: 'Enter House no/Flat/Building',
  landmarkRequired: 'Enter Landmark',
  colonyRequired: 'Enter Colony/Area/Sector',
  pinRequired: 'Enter Pincode',
  aadharRequired: 'Enter Addhar Number',
  invalidAdress: 'Invalid Address',
  invalidAadharNo: 'Please enter only numeric digits',
  aadharless12digit: 'Please enter required 12 digits',
  aadharMore12digit: 'Aadhar No should have less than 40 characters',
  invalidPincode: 'Invalid Pincode',
  otpRequired: 'otp is required',
  invalidOtp: 'please enter valid otp',
  bloodGroupRequired: 'Blood Group is required',
  addressDropDownRequired: 'Address is required',
  relationRequired: 'Relation is required',
  stateRequired: 'State is required',
  genderRequired: 'Gender is required',
  dateRequired: 'Date is required',
  // middleNameRequired:'Name should have a minimum of 2 characters',
  // lastNameRequired:'Name should have a minimum of 2 characters'
};

export const emailRequired = value =>
  value ? undefined : validationStrings.emailRequired;

export const passwordRequired = value =>
  value ? undefined : validationStrings.passwordRequired;

export const mobileNoRequired = value =>
  value ? undefined : validationStrings.mobileNoRequired;

export const usernameRequired = value =>
  value ? undefined : validationStrings.usernameRequired;

export const fullnameRequired = value =>
  value ? undefined : validationStrings.fullNameRequired;

export const firstNameRequired = value =>
  value ? undefined : validationStrings.firstNameRequired;

export const addressRequired = value =>
  value ? undefined : validationStrings.addressRequired;

export const addressDropDownRequired = value =>
  value ? undefined : validationStrings.addressDropDownRequired;

export const houseNoRequired = value =>
  value ? undefined : validationStrings.houseNoRequired;

export const landmarkRequired = value =>
  value ? undefined : validationStrings.landmarkRequired;

export const colonyRequired = value =>
  value ? undefined : validationStrings.colonyRequired;

export const pinRequired = value =>
  value ? undefined : validationStrings.pinRequired;

export const aadharRequired = value =>
  value ? undefined : validationStrings.aadharRequired;

export const otpRequired = value =>
  value ? undefined : validationStrings.otpRequired;

export const bloodGroupRequired = value =>
  value ? undefined : validationStrings.bloodGroupRequired;

export const relationRequired = value =>
  value ? undefined : validationStrings.relationRequired;

export const genderRequired = value =>
  value ? undefined : validationStrings.genderRequired;

export const dateRequired = value =>
  value ? undefined : validationStrings.dateRequired;

export const stateRequired = value =>
  value ? undefined : validationStrings.stateRequired;

export const removeSpaces = term =>
  new String(term).replace(detectSpacesRegex, '');

export const validateMobileno = value =>
  value && !value.match(mobilenoRegex)
    ? validationStrings.invalidMobileNo
    : undefined;

export const validateotp = value =>
  value && !value.match(mobilenoRegex)
    ? validationStrings.invalidOtp
    : undefined;

export const validateEmail = value =>
  value && !value.match(emailRegex)
    ? validationStrings.invalidEmail
    : undefined;

export const validatePassword = value =>
  value && !value.match(passwordRegex)
    ? validationStrings.invalidpassword
    : undefined;

export const validateName = value => {
  if (value && !value.match(nameRegex)) {
    return validationStrings.invalidUsername;
  } else if (value.length > 40) {
    return validationStrings.morethan40;
  }
};

export const validateAddress = value =>
  value && !value.match(addressRegex)
    ? validationStrings.invalidAdress
    : undefined;

export const validatePinCode = value =>
  value && !value.match(pincodeREgex)
    ? validationStrings.invalidPincode
    : undefined;

export const validateAadharNo = value => {
  if (value && !value.match(aadharRegex)) {
    return validationStrings.aadharless12digit;
  } else if (value.length > 12) {
    return validationStrings.aadharMore12digit;
  }
};
