//1
function brackets(num) {
    let string = "";
    for (let i = 0; i < num; i++) {
        string += '(';
    }
    for (let i = 0; i < num; i++) {
        string += ')';
    }
    return string;
}
console.log(brackets(4));


//2
function getRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number')
        throw new TypeError();
    if (width <= 0 || height <= 0)
        throw new RangeError();
    return width * height;
}
try {
    console.log(getRectangleArea("fewf", 5));
}
catch (error) {
    console.error("Error name:", error.name);
}


//3
class WeekdayError {
    #message;
    constructor(message) {
        this.name = "WeekdayError";
        this.#message = message;
    }
    get message() {
        return this.#message;
    }
    set message(value) {
        this.#message = value;
    }
}
function showWeekdayName(day) {
    if (typeof day !== 'number')
        throw new WeekdayError("Error day is not number!");
    if (day <= 0 || day > 7)
        throw new WeekdayError("Error day must be 1 - 7!");
    let textDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return textDay[day - 1];
}
try {
    // console.log(showWeekdayName(10));
    // console.log(showWeekdayName("fewgerg"));
    console.log(showWeekdayName(2));
}
catch (error) {
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);
}

//4
function fibonachi() {
    let num1 = 0;
    let num2 = 1;
    return function other() {
        let result = num1 + num2;
        num1 = num2;
        num2 = result;
        return num2;
    }
}
let Fibonachi = fibonachi();
console.log(Fibonachi());
console.log(Fibonachi());
console.log(Fibonachi());
console.log(Fibonachi());
console.log(Fibonachi());
console.log(Fibonachi());
console.log(Fibonachi());
console.log(Fibonachi());
console.log(Fibonachi());