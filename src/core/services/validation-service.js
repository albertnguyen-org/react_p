
export const emailRegExp = new RegExp("/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i");
export const passwordRegExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$");


// export const emailIsVaild = (input) => {
//     return regEx.test(String(input).toLowerCase());
// }


// /**
//  * Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character
//  * @param {*} input 
//  * @returns 
//  */
// export const passwordIsVaild = (input) => {
//     return regEx.test(String(input).toLowerCase());
// }