const array = [1,5,3,8,9,2];
const object = {bread: true, ham:true, mayo:true, ketchup:false};

//BASIC USE
if (array.length > 0) {
    console.log("array length is larger than zero");
} else {
    console.log("array length is zero");
}

//SHORTHAND BASIC
array.length > 0? console.log("array length is larger than zero") : console.log("array length is zero");


