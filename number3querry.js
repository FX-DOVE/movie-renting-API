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

    rentMovie(title) {
        let movie = this.movies.find(movie => movie.title === title);
        if (movie && movie.availableCopies > 0) {
            movie.availableCopies--;
            return `You have successfully rented ${title}`;
        } else {
            return `${title} is currently unavailable`;
        }
    }

    returnMovie(title) {
        let movie = this.movies.find(movie => movie.title === title);
        if (movie) {
            movie.availableCopies++;
            return `You have successfully returned ${title}`;
        } else {
            return `We do not have ${title} in our records`;
        }
    }
}

// Usage
let store = new MovieStore();
store.addMovie(new Movie('Inception', 3));
store.addMovie(new Movie('Interstellar', 2));
store.addMovie(new Movie('merlin', 0));
store.addMovie(new Movie('ben 10', 8));

console.log(store.rentMovie('Inception'));  // You have successfully rented Inception
console.log(store.rentMovie('chisom'));  // You have successfully rented Inception
console.log(store.rentMovie('Inception'));  // You have successfully rented Inception
console.log(store.rentMovie('Inception'));  // Inception is currently unavailable

