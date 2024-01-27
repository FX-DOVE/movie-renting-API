class Movie {
    constructor(title, availableCopies) {
        this.title = title;
        this.availableCopies = availableCopies;
    }
}

class MovieStore {
    constructor() {
        this.movies = [];
    }

    addMovie(movie) {
        this.movies.push(movie);
    }
   
//function that rent movies
    rentMovie(title) {
        let movie = this.movies.find(movie => movie.title === title);
        if (movie && movie.availableCopies > 0) {
            movie.availableCopies--;
            return `You have successfully rented ${title}`;
        } else {
            return `${title} is currently unavailable`;
        }
    }
// function that returns movie
    returnMovie(title) {
        let movie = this.movies.find(movie => movie.title === title);
        if (movie) {
            movie.availableCopies++;
            return `You have successfully returned ${title}`;
        } else {
            return `you did not rent ${title} `;
        }
    }
}

// creating movies stores
let store = new MovieStore();
store.addMovie(new Movie('Inception', 3));
store.addMovie(new Movie('Interstellar', 2));
store.addMovie(new Movie('merlin', 0));
store.addMovie(new Movie('ben 10', 8));


console.log(store.findMovie('title')) // is used to check if the movies you want is in the app 
console.log(store.rentMovie('title'));  // is used to rent movie 
console.log(store.returnMovie('title'));  // is used to return movie after watching


