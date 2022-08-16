// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let listDirectors = [];
    moviesArray.map(directorsName => {
        listDirectors.push(directorsName.director);
    })
    return listDirectors;
}
console.log(getAllDirectors(movies));

// Bonus teration 1.1: Clean the array of directors
function removeDuplicatesDirectors(arrayDirectors){
    let listDirectors = getAllDirectors(arrayDirectors);
    let uniqueDirectors = listDirectors.filter((item, index) => {
        return listDirectors.indexOf(item) === index;
    });
    console.log(uniqueDirectors);
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const numberOfMovies = moviesArray.filter((item)=> {
       return item.director === "Steven Spielberg" && item.genre.includes("Drama");
    });
    return numberOfMovies.length;   
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const averageScore = moviesArray.reduce((sum, valueScore)=> {
        return sum + valueScore.score
    }, 0)

    if (averageScore === 0) {
        return 0
    }

    const averageScoreTotalFilms = averageScore / moviesArray.length
    return parseFloat(averageScoreTotalFilms.toFixed(2))    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
