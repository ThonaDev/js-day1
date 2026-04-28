// 1. Create a Set
const mySet = new Set();

// 2. add(value) - add elements
mySet.add('apple');
mySet.add('banana');
mySet.add('orange');
mySet.add('apple'); // duplicate, will be ignored

console.log("After add:", mySet); 
// Output: Set(3) {"apple", "banana", "orange"}

// 3. has(value) - check existence
console.log("Has banana?", mySet.has('banana')); // true
console.log("Has grape?", mySet.has('grape'));   // false

// 4. delete(value) - remove a specific element
mySet.delete('orange');
console.log("After delete orange:", mySet); 
// Output: Set(2) {"apple", "banana"}

// 5. size - number of elements
console.log("Size of Set:", mySet.size); // 2

// 6. values() - get an iterator of values
const valuesIterator = mySet.values();
console.log("Values iterator:", valuesIterator.next().value); // apple
console.log(valuesIterator.next().value); // banana

// 7. keys() - same as values()
const keysIterator = mySet.keys();
console.log("Keys iterator:", keysIterator.next().value); // apple

// 8. entries() - iterator of [value, value]
const entriesIterator = mySet.entries();
console.log("Entries iterator:", entriesIterator.next().value); // ["apple", "apple"]
console.log(entriesIterator.next().value); // ["banana", "banana"]

// 9. forEach(callback) - iterate through all elements
console.log("forEach iteration:");
mySet.forEach(value => console.log(value));
// Output:
// apple
// banana

// 10. clear() - remove all elements
mySet.clear();
console.log("After clear, size:", mySet.size); // 0