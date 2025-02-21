// Welcome to your OOP practice!
// Use this file to write and test your answers to the questions.


console.log('Start practicing OOP concepts!');


// Question 1: Basic Class Creation

class Movie {
	constructor(title, year = 'unknown', rating = 'unknown') {
		this.title = title,
		this.year = year
	}

	getDetails() {
		console.log(`${this.title} (${this.year}) Rating: ${this.rating}`)
	}

  setRating (rating) {
    this.rating = rating
  }

}

// Question 2: Working with Multiple Objects

let instance = new Movie('The Lion King', 1994);
instance.getDetails()
let instance2 = new Movie('Frozen', 2013);
instance2.getDetails()


// Question 3: Extending a Class

class Series extends Movie {
  constructor (title, year, episodes) {
    super (title, year);
    this.episodes = episodes;
  }

  getSeriesDetails() {
    console.log(`${this.title} (${this.year}) - ${this.episodes} episodes`)
  }
}

let instance3 = new Series('Stranger Things', 2016, 25);
instance3.getSeriesDetails()



// Question 4: Using Constructor Defaults

let instance4 = new Movie('Unknown Movie');
instance4.getDetails()



// Question 5: Encapsulation with Properties

const instance5 = new Movie('The Matrix', 1999, 4.5);
instance5.getDetails();
instance5.setRating(5);
instance5.getDetails();


// Question 6: Working with Arrays of Objects

const instance6 = [
    new Movie("Star Wars", 1977, "Rating: 5"),
    new Movie("The Empire Strikes Back", 1980, "Rating: 5"),
    new Movie("Return of the Jedi", 1983, "Rating: 5")
];

console.log(instance6);

function getAllDetails(instance6){
  instance6.forEach((movie) => {
      console.log(movie.getDetails());
  })
}

getAllDetails(instance6);


// Question 7: Simple Inheritance

class Documentary extends Movie {
  constructor(title, year, narrator) {
      super(title, year);
      this.narrator = narrator;
  }

  getDetails() {
      return `${this.title} (${this.year}) - Narrated by ${this.narrator}`
  }
}

const instance7 = new Documentary("Cosmos: A Spacetime Odyssey", 2014, "Neil deGrasse Tyson");
console.log(instance7.getDetails());


// Question 8: Basic Debugging

  // We ran out of time in class, ALAS.