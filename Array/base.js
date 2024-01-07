//1
console.log("Завдання 1");
let date = new Date();
let hour = date.getHours();
let greeting = ["morning", "day", "evening", "night"];
let id = 0;
if (hour >= 5 && hour < 12)
    id = 0;
else if (hour >= 12 && hour < 17)
    id = 1;
else if (hour >= 17 && hour < 21) 
    id = 2; 
else 
    id = 3;
console.log("Good " + greeting[id] + "!");
//2
console.log("Завдання 2 - 3");
let array = [];
for(let i =0; i < 20; i++){
    array.push(Math.floor((Math.random() * 100) + 1));
}
//3
for (let i = 0; i < array.length; i++) {
    console.log("[" + (i + 1) + "] – " + array[i]);
}
//4
console.log("Завдання 4");
let found = false;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 7 === 0) {
        found = true;
        break;
    }
}
if (found) {
    console.log("У масиві є число кратне 7");
} else {
    console.log("У масиві немає числа кратного 7");
}
//5
console.log("Завдання 5");
array.sort((a, b) => b - a);
console.log(array);
//6
console.log("Завдання 6");
for (let i = array.length/2; i < array.length; i++) {
    array[i] = 0;
}
for (let i = 0; i < array.length; i++) {
    console.log("[" + (i + 1) + "] – " + array[i]);
}
//6
console.log("Завдання 6");
array.splice(0, 3);
console.log(array);
//7
console.log("Завдання 7");
if(new Set(array).size !== array.length){
    console.log("У масиві є однакові числа");
}
else
{
    console.log("У масиві немає однакових чисел");
}
//8
console.log("Завдання 8");
let newArray = array.slice(1, -1);
console.log(newArray);
//9
console.log("Завдання 9");
let evenCount = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        evenCount++;
    }
}
console.log("Кількість парних чисел в масиві:", evenCount);
//Додаткове
function createArray(start, end) {
    const funcArray = [];
    for (let i = start; i <= end; i++) {
        funcArray.push(i);
    }
    return funcArray;
  }
  const myNewArray = createArray(1, 5);
  console.log(myNewArray);