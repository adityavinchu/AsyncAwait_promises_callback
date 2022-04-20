//----------push pop op.-----------------------
const fruits=["Mango","Banana","Apple","Orange"];

console.log(fruits.pop());
console.log(fruits);

fruits.push("Watermelon");
console.log(fruits);

//------------shift Unshift--------------------

fruits.shift();
console.log(fruits);

fruits.unshift("cherry");
console.log(fruits);

//--------------------change elements using index----------------
fruits[0]="lemon";
console.log(fruits);

//-------------concat----------------------
const fruit1=["pineapple","guava","papaya"];
allfruits=fruits.concat(fruit1);
console.log(allfruits);

//----------------splice, slice---------------------
fruits.splice(2,0,"gouva","mango");  //(start | delete | ...items)
console.log(fruits);

const fruit2=fruits.slice(1)  //removes frist element
console.log(fruit2);


