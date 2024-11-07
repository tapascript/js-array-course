"use strict";

// How to Create an Array in JavaScript
{
  const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
  const anotherSalad = new Array('🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑');
}

// How to Get Elements from an Array in JS
{
  const element = array[index];
  
  const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
  salad[0]; // '🍅'
  salad[2]; // '🥦'
  salad[5]; // '🥕'

  const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
  const len = salad.length;
  salad[len - 1]; // '🥑'
  salad[len - 3]; // '🌽'


  const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

  for(let i=0; i<salad.length; i++) {
    console.log(`Element at index ${i} is ${salad[i]}`);
  }
}

// How to Add Elements to an Array in JS
{
  const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
  salad.push('🥜');

  const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
  salad.unshift('🥜');
}

// How to Remove Elements from an Array in JS
{
  const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
  salad.pop(); // 🥑

  console.log(salad); // ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕']
}

// How to Copy and Clone an Array in JS
{
  const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
  const saladCopy = salad.slice();
  
  console.log(saladCopy); // ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']
  
  salad === saladCopy; // returns false
}

// How to Determine if a Value is an Array in JS
{
  Array.isArray(['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']); // returns true
  Array.isArray('🍅'); // returns false
  Array.isArray({ 'tomato': '🍅'}); // returns false
  Array.isArray([]); // returns true
}

// Array Destructuring in JavaScript
{
  let [tomato, mushroom, carrot] = ['🍅', '🍄', '🥕'];
  console.log(tomato, mushroom, carrot); // Output, 🍅 🍄 🥕

  let vegetables = ['🍅', '🍄', '🥕'];
  let tomato = vegetables[0];
  let mushroom= vegetables[1];
  let carrot= vegetables[2];
}

// How to Assign a Default Value to a Variable
{
  let [tomato , mushroom = '🍄'] = ['🍅'];
  console.log(tomato); // '🍅'
  console.log(mushroom ); // '🍄'
}

// How to Skip a Value in an Array
{
  let [tomato, , carrot] = ['🍅', '🍄', '🥕'];

  console.log(tomato); // '🍅'
  console.log(carrot); // '🥕'
}

// Nested Array Destructuring in JS
{
  let fruits = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];
  const veg = fruits[4]; // returns the array ['🍅', '🍄', '🥕']
  const carrot = veg[2]; // returns '🥕'
  fruits[4][2]; // returns '🥕'

  let [,,,,[,,carrot]] = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];
}

// How to Use the Rest Parameter in JS
{
  const [tomato, mushroom, ...rest] = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

  console.log(tomato); // '🍅'
  console.log(mushroom); // '🍄'
  console.log(rest); // ["🥦", "🥒", "🌽", "🥕", "🥑"]
}

// How to Use the Spread Operator in JS
{
  const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

  const saladCloned = [...salad];
  console.log(saladCloned); // ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]
  
  salad === saladCloned // false
}

// How to Swap Values with Destructuring
{
  let first = '😔';
  let second = '🙂';
  [first, second] = [second, first];
  
  console.log(first);  // '🙂'
  console.log(second); // '😔'
}

// How to Merge Arrays
{
  const emotion = ['🙂', '😔'];
  const veggies = ['🥦', '🥒', '🌽', '🥕'];

  const emotionalVeggies = [...emotion, ...veggies];
  console.log(emotionalVeggies); // ["🙂", "😔", "🥦", "🥒", "🌽", "🥕"]
}

// Array Length Property
{
  const arr1 = [11, 21, 73];
  const arr2 = new Array(7);
  
  console.log(arr1.length);
  console.log(arr2.length);
  
  arr2.length = 2 ** 32; // 4294967296
  
  const arr3 = new Array(-10); 

  const arr = [11, 32];
  console.log(arr);
  arr.length = 5; 
  arr.length = 0
}

// Non-Modifiable Length Property
{
  
}
