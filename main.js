import "./style.css";
import fetchCurrentWeather from "./src/fetchCurrentWeather";
import appendWeather from "./src/appendWeather";

const searchWeatherBtn = document.getElementById("search-weather-btn");
const searchWeatherInput = document.getElementById("search-weather-input");

searchWeatherBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const input = searchWeatherInput.value;

  if (input === "") return;

  fetchCurrentWeather(input).then((data) => {
    appendWeather(data);
    searchWeatherInput.value = "";
  });
});
/*
const currentWeather =
  '{"location": "Manila","temperature": 30,"country": "PH","cities": ["Pasig,Caloocan, Makati"]}';

const weatherData = JSON.parse(currentWeather);

document.body.innerHTML = `
<h1>${weatherData.temperature}</h1>
<p>${weatherData.location}</p>`;*/

/*
const h2 = document.createElement("h2");
h2.textContent = `${weatherData.location}`;

const h1 = document.createElement("h1");
h1.textContent = `${weatherData.temperature}°C`;

console.log(weatherData);
document.body.appendChild(h2);
document.body.appendChild(h1);*/
/*
const jsonData = `[{"_id":"GlKWBC1r__","content":"The art challenges the technology, and the technology inspires the art.","author":"John Lasseter","tags":["Technology"],"authorSlug":"john-lasseter","length":71,"dateAdded":"2020-10-29","dateModified":"2023-04-14"}`;

const quote = JSON.parse(jsonData);

document.body.innerHTML = `
<h1>${quoteData.content}</h1>
<p>${quoteData.author}`;
*/
/*
import "./style.css";

const jsonData =
  '{"title": "My Favorite Movies","movies": [{"title": "The Shawshank Redemption","year": 1994,"director": "Frank Darabont"},{"title": "The Godfather","year": 1972,"director": "Francis Ford Coppola"},{"title": "The Dark Knight","year": 2008,"director": "Christopher Nolan"}]}';

const movieData = JSON.parse(jsonData);

const title = document.createElement("h1");
title.textContent = movieData.title;

const app = document.getElementById("app");
app.appendChild(title);

movieData.movies.forEach((movie) => {
  const movieContainer = document.createElement("div");
  movieContainer.classList.add("movie-container");

  const h2 = document.createElement("h2");
  h2.textContent = movie.title;

  const h3 = document.createElement("h3");
  h3.textContent = movie.year;

  const p = document.createElement("p");
  p.textContent = movie.director;

  movieContainer.append(h2, h3, p);
  app.appendChild(movieContainer);
});

*/
/*
-----
function getData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const data = [1, 2, 3, 4, 5];
      resolve(data);
    }, 3000);
  });
}

getData()
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
*/
/*
----------
function fetchData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const data = { name: "bert", age: 30 };
      resolve(data);
    }, 5000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));*/
/*
function getQuote() {
  return new Promise((resolve, reject) => {
    fetch("https://api.quotable.io/quotes/random")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

getQuote()
  .then(
    (data) =>
      (document.body.innerHTML = `<h1>${data[0].author}</h1> <p>${data[0].content}</p>`)
  )
  .catch((error) => console.error(error));
*/
/*
function fetchData() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}
function append(data) {
  document.body.innerHTML = `<h1>${data.title}</h1>
  <p>${data.body}</p>`;
}

fetchData()
  .then((data) => append(data))
  .catch((error) => console.error(error));
*/
/*
const app = document.getElementById("app");
const RANDOM_QUOTE_API = "https://api.quotable.io/quotes/random";
async function fetchQuote() {
  try {
    const response = await fetch(RANDOM_QUOTE_API);
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
}
fetchQuote()
  .then(
    (data) =>
      (document.body.innerHTML = `<img src="quotation.png" /><h1>${data[0].author}</h1> <p>${data[0].content}}`)
  )
  .catch((error) => console.error(error));
*/
/*
  ----
  const RANDOM_QUOTE_API = "https://api.quotable.io/quotes/random";
async function fetchQuote() {
  try {
    const response = await fetch(RANDOM_QUOTE_API);
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
}
fetchQuote()
  .then(
    (data) =>
      (document.body.innerHTML = `<h1>${data[0].author}</h1> <p>${data[0].content}}`)
  )
  .catch((error) => console.error(error));*/

/*



  const WEATHER_AP = "https://api.quotable.io/quotes/random";
async function fetchQuote() {
  try {
    const response = await fetch(RANDOM_QUOTE_API);
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
}
fetchQuote()
  .then(
    (data) =>
      (document.body.innerHTML = `<h1>${data[0].author}</h1> <p>${data[0].content}}`)
  )*/
