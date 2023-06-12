export const mobilenoRegex = /^\d{10}$/;
// export const mobilenoRegex=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
export const detectSpacesRegex = /\s/g;

export const alphaNumericRegex = /^[a-z0-9]+$/i;

export const passwordRegex = /^(?=.*\d)(?=.*[a-z]).{6,}$/;

export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const nameRegex = /^[a-zA-Z ]{2,}$/;
export const addressRegex = /^([a-zA-z0-9/\\''(),-\s]{2,255})$/;
export const pincodeREgex = '^[1-9]{1}[0-9]{2}[0-9]{3}$';
export const aadharRegex = '^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$';

export const otpRegex = /^\d{4}$/;
