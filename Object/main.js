//1
let timeObject = {
    hours: 10,
    minutes: 59,
    seconds: 59,
    displayTime: function () {
        let formattedHours = this.hours < 10 ? '0' + this.hours : this.hours;
        let formattedMinutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
        let formattedSeconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
      return formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;
    },
    addSecond: function () {
      this.seconds++;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
        if (this.minutes === 60) {
          this.minutes = 0;
          this.hours++;
          if (this.hours === 24) {
            this.hours = 0;
          }
        }
      }
    },
    subtractSecond: function () {
      this.seconds--;
      if (this.seconds < 0) {
        this.seconds = 59;
        this.minutes--;
        if (this.minutes < 0) {
          this.minutes = 59;
          this.hours--;
          if (this.hours < 0) {
            this.hours = 23;
          }
        }
      }
    },
    showCurrentTimeOnPage: function () {
      document.write('<p>' + this.displayTime() + '</p>');
    }
  };

timeObject.showCurrentTimeOnPage();
timeObject.addSecond();
timeObject.showCurrentTimeOnPage();
timeObject.subtractSecond();
timeObject.showCurrentTimeOnPage();

//2
let car = {
    manufacturer: "Audi",
    model: "A5",
    year: 2022,
    averageSpeed: 60,
};
function displayCarInfo(car) {
    console.log("Manufacturer: " + car.manufacturer);
    console.log("Model: " + car.model);
    console.log("Year: " + car.year);
    console.log("Average Speed: " + car.averageSpeed + " km/h");
}
function calculateTravelTime(car, distance) {
    let totalHours = distance / car.averageSpeed;
    let breaks = Math.floor(totalHours / 4);
    let totalTime = totalHours + breaks;
    return totalTime;
}

displayCarInfo(car);
var distance = 300;
console.log("Time to travel " + distance + " km: " + calculateTravelTime(car, distance) + " hours");
