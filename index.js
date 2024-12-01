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
  const ages = [21, 12, 73, 41, 67];
  Object.defineProperty(ages, "length", { writable: false });
  ages[5] = 6; 
  ages.push(5); 
}

// The contact() method
{
  const first = [1, 2, 3];
  const second = [4, 5, 6];
  
  const merged = first.concat(second);
  
  console.log(merged); // [1, 2, 3, 4, 5, 6]
  console.log(first); // [1, 2, 3]
  console.log(second); // [4, 5, 6]
}

// The join() method
{
  const emotions = ['🙂', '😍', '🙄', '😟'];

  const joined = emotions.join();
  console.log(joined); // "🙂,😍,🙄,😟"

  const joined = emotions.join('<=>');
  console.log(joined); // "🙂<=>😍<=>🙄<=>😟"

  [].join() // returns ""
}

// The fill() method
{
  const colors = ['red', 'blue', 'green'];

  colors.fill('pink');
  console.log(colors); // ["pink", "pink", "pink"]

  const colors = ['red', 'blue', 'green'];

  colors.fill('pink', 1,3); // ["red", "pink", "pink"]
}

// The includes() array method
{
  const names = ['tom', 'alex', 'bob', 'john'];

  names.includes('tom'); // returns true
  names.includes('july'); // returns false
}

// The indexOf() array method
{
  const names = ['tom', 'alex', 'bob', 'john'];

  names.indexOf('alex'); // returns 1
  names.indexOf('rob'); // returns -1


  const names = ['tom', 'alex', 'bob', 'tom'];

  names.indexOf('tom'); // returns 0
  names.lastIndexOf('tom'); // returns 3
}

// The reverse() array method
{
  const names = ['tom', 'alex', 'bob'];

  names.reverse(); // returns ["bob", "alex", "tom"]
}

// The sort() array method

{
  let artists = [
    'John White Abbott', 
    'Leonardo da Vinci', 
    'Charles Aubry', 
    'Anna Atkins', 
    'Barent Avercamp'
  ];

  let sorted = artists.sort();
  
  console.log('Sort the artist names', sorted);

  console.log(artists === sorted); // returns true

    // A compare function
  function (a, b) {
      if (a > b) {
        return -1;
      }
      if (a < b) {
        return 1;
      }
      // a must be equal to b
      return 0;
   }

  function (a,b) {
   return a === b ? 0 : a > b ? -1 : 1;
  }

  artists.sort(function (a, b) {
     return a === b ? 0 : a > b ? -1 : 1;
  });
  
  console.log('Sort the artist names(Descending)', artists);

  // Sorting Numbers
  let ages = [2, 1000, 10, 3, 23, 12, 30, 21];

  ages.sort();
  console.log(ages);
}

// The splice() array method
{
  const names = ['tom', 'alex', 'bob'];

  names.splice(1, 0, 'zack');
  
  console.log(names); // ["tom", "zack", "alex", "bob"]


  const names = ['tom', 'alex', 'bob'];

  const deleted = names.splice(2, 1, 'zack');
  
  console.log(deleted); // ["bob"]
  console.log(names); // ["tom", "alex", "zack"]
}

// The at() method
{
  const junkFoodILove = ['🥖', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🍿'];

  junkFoodILove.at(0); // 🥖
  junkFoodILove.at(3); // 🍕
  junkFoodILove.at(-1); // 🍿
  junkFoodILove.at(-5); // 🍕
  junkFoodILove.at(-8); // 🥖
  junkFoodILove.at(10); // undefined
}

// The flat() method
{
  const arr1 = [0, 1, 2, [3, 4]];

  console.log(arr1.flat());
  
  const arr2 = [0, 1, [2, [3, [4, 5]]]];
  console.log(arr2.flat());
  console.log(arr2.flat(2));
  console.log(arr2.flat(Infinity));
}

// The copyWithin() method
{
  const array = [1, 2, 3, 4, 5, 6, 7];
  array.copyWithin(0, 3, 6)

  const array = [1, 2, 3, 4, 5, 6, 7];
  array.copyWithin(0, 4)
}

// The toSorted() method
{
  const months = ["Mar", "Jan", "Feb", "Dec"];
  const sortedMonths = months.toSorted();
  console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
  console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']
}

// The toReversed() method
{
  const items = [1, 2, 3];
  console.log(items); // [1, 2, 3]
  
  const reversedItems = items.toReversed();
  console.log(reversedItems); // [3, 2, 1]
  console.log(items); // [1, 2, 3]
}

// The toSpliced() method
{
  const months = ["Jan", "Mar", "Apr", "May"];
  const months2 = months.toSpliced(1, 0, "Feb");
}

// The with() method
{
  const numbers = [1, 2, 3, 4, 5];

  numbers[2] = 6;
  console.log(numbers); // [1, 2, 6, 4, 5];

  const newArray = numbers.with(2,6);

  console.log(numbers); // Unchanged => [1, 2, 3, 4, 5];
  console.log(newArray); // Changed(A new copy) => [1, 2, 6, 4, 5];

  numbers[-2] = 8;
  console.log(numbers); // [1, 2, 3, 4, 5, -2: 8]

  const numbers = [1, 2, 3, 4, 5];
  const anotherArray = numbers.with(-2, 8);
  console.log(anotherArray); // [1, 2, 3, 8, 5]

  anotherArray.at(-2); // 8
}

