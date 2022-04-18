
export const emailRegExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

// /**
//  * Minimum eight and unlimited characters, at least one uppercase letter, one lowercase letter, one number and one special character
//  * @param {*} input 
//  * @returns 
//  */
export const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


// export const emailIsVaild = (input) => {
//     return regEx.test(String(input).toLowerCase());
// }


// export const passwordIsVaild = (input) => {
//     return regEx.test(String(input).toLowerCase());
// }