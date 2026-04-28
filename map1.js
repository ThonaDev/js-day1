// 1. Create a Map
const myMap = new Map();

// 2. set(key, value) -> add or update an item
myMap.set('name', 'Put');           
myMap.set('age', 25);               
myMap.set('city', 'Phnom Penh');    

// 3. get(key) -> get the value of a specific key
console.log(myMap.get('name')); // Output: Put
console.log(myMap.get('age'));  // Output: 25

// 4. has(key) -> check if the key exists in the Map
console.log(myMap.has('city'));    // Output: true
console.log(myMap.has('country')); // Output: false

// 5. delete(key) -> remove an item by key
myMap.delete('age');
console.log(myMap.has('age')); // Output: false

// 6. size -> total number of key-value pairs
console.log(myMap.size); // Output: 2 (remaining: 'name' and 'city')

// 7. clear() -> remove all items
myMap.clear();
console.log(myMap.size); // Output: 0