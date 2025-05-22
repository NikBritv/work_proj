"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMoveDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Один из последних просмотренных фильмов', ''),
//       b = prompt('На сколько оцените его? ', '');
//       c = prompt('Один из последних просмотренных фильмов', ''),
//       d = prompt('На сколько оцените его? ', '');

// personalMoveDB.movies [a] = b;
// personalMoveDB.movies [c] = d;
// console.log(personalMoveDB);
for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов', ''),
          b = prompt('На сколько оцените его? ', '');
    if(a != null && b != null  && a != '' && b != '' && a.length < 50){
        personalMoveDB.movies [a] = b; 
        console.log('done!');
    }else{
        console.log('error');
        i--;
    }
    
}
// console.log(personalMoveDB);
if(personalMoveDB.count < 10){
    console.log("Просмотрено довольно мало фильмов");
}else if(personalMoveDB.count >= 10 && personalMoveDB.count < 30){
    console.log("вы классический зритель");
}else if(personalMoveDB.count >= 30){
    console.log("Вы киноман");
}else{
    console.log("Ошибка");
}
