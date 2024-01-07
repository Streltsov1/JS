//1
class GeometricFigure {
    constructor(name) {
        this.name = name;
    }
    get figureName() {
        return this.name;
    }
    displayInfo() {
        console.log(`Figure: ${this.name}`);
    }
    area() {
        return "Not implemented";
    }
    perimeter() {
        return "Not implemented";
    }
  }
class Square extends GeometricFigure {
    constructor(side) {
        super("Square");
        this.side = side;
    }
    displayInfo() {
        console.log(`Side: ${this.side}`);
    }
    area() {
        return this.side * this.side;
    }
    perimeter() {
        return 4 * this.side;
    }
  }
class Rectangle extends GeometricFigure {
    constructor(length, width) {
      super("Rectangle");
      this.length = length;
      this.width = width;
    }
    displayInfo() {
        console.log(`Length: ${this.length}\n Width: ${this.width}`);
    }
    area() {
      return this.length * this.width;
    }
    perimeter() {
      return 2 * (this.length + this.width);
    }
  }
class Triangle extends GeometricFigure {
    constructor(side1, side2, side3) {
      super("Triangle");
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    }
    displayInfo() {
        console.log(`Side1: ${this.side1}\n Side2: ${this.side2}\n Side3: ${this.side3}` );
    }
    area() {
      const s = (this.side1 + this.side2 + this.side3) / 2;
      return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
    }
    perimeter() {
      return this.side1 + this.side2 + this.side3;
    }
}


const figures = [
    new Square(5),
    new Rectangle(4, 6),
    new Triangle(3, 4, 5),
];
for (const figure of figures) {
    console.log(figure.figureName);
    figure.displayInfo();
    console.log("Area:", figure.area());
    console.log("Perimeter:", figure.perimeter());
    console.log("------------------------");
}


//2
console.log("Task 2");
class NewsFeed {
    constructor() {
      this.newsArray = [];
    }
    get newsCount() {
      return this.newsArray.length;
    }
    displayNews() {
      console.log("News Feed:");
      this.newsArray.forEach(news => console.log(news));
    }
    addNews(news) {
      this.newsArray.push(news);
    }
    deleteNews(index) {
      if (index >= 0 && index < this.newsArray.length) {
        this.newsArray.splice(index, 1);
      }
    }
    sortNewsByDate() {
      this.newsArray.sort((a, b) => b.date - a.date);
    }
    searchNewsByTag(tag) {
      return this.newsArray.filter(news => news.tags.includes(tag));
    }
}
  

const newsFeed = new NewsFeed();
newsFeed.addNews({
    title: "News 1",
    content: "Blablablablablalbalbla",
    date: new Date(2023, 12, 25),
    tags: ["important", "breaking"],
});
newsFeed.addNews({
    title: "Technology",
    content: "Technology blablabla",
    date: new Date(2023, 12, 28),
    tags: ["technology"],
});

console.log("News count:" + newsFeed.newsCount)
console.log("display news");
newsFeed.displayNews();
console.log("sort news");
newsFeed.sortNewsByDate();
newsFeed.displayNews();
console.log("delete news");
newsFeed.deleteNews(0);
newsFeed.displayNews();
console.log("find news by tag");
const technologyNews = newsFeed.searchNewsByTag("technology");
console.log("Technology News:", technologyNews);