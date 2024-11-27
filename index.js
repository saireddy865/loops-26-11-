// ---- 1st-------

for (var i=1; i <= 20;i++){
    console.log(i);
}


console.log("-------1st completed-------")

//-------------2nd-----------

for (var i=1; i <= 10; i++){
    var square=i*i;
    console.log(square);
}


console.log("---------2nd completed-----------")


//---- 3rd-----

for (var i=1; i <=10; i++){
    console.log(i*5);
}


console.log("----------3rd completed-----------")

// -------4th------

for (var i=20; i > 0; i--){
    console.log(i);
}

console.log("----4th completed-------")

//-------5th-----

for (var i=20; i >= 2;i-=2){
    console.log(i);
}

console.log("----------5th completed----------")

//------ 6th-----------

arr=[10,20,30,40,50]
// console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.table(arr);



console.log("------6th completed----------")



//---- 7th-------

// arr=['apple' ,'banana', 'cherry']
// console.table(arr);

//-----or----

var array = ['apple' ,'banana', 'cherry'];
for (var i=0;i<=array.length-1;i++){
    console.log(`index ${i}:`,array[i])
}

