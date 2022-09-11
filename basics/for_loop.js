const array = [1,5,3,8,9,2];
const object = {bread: true, ham:true, mayo:true, ketchup:false};


//BASIC FOR LOOP

for (let i = 0; i < array.length; i++) {
    //do something
    console.log(array[i]);
};

//SHORT HAND EXAMPLE 1
for (i in array) {
    //do something
    console.log(array[i],);
};




