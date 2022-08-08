"use strict";

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(item => item.rating >= 8);
}

showGoodFilms(films);

function showListOfFilms(arr) {
    const names = arr.map(item => item.name);
    return names.reduce((result, word) => `${result}, ${word}`);
}

showListOfFilms(films);

function setFilmsIds(arr) {
    return arr.map(item => Object.assign(item, {id: arr.indexOf(item)}));
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(item => item.hasOwnProperty("id"));
}

checkFilms(tranformedArray);