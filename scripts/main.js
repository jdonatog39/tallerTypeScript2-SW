import { series } from './dataSerie.js';
import { Serie } from './Serie.js';
const seriesTbody = document.getElementById("series");
const avgSeasonsElm = document.getElementById("average-seasons");
const detailCardContainer = document.getElementById("card-container");
renderSeriesInTable(series);
avgSeasonsElm.innerHTML = `<strong>Average seasons:</strong> ${getAverageSeasons(series).toFixed(2)}`;
function renderSeriesInTable(series) {
    console.log("Mostrando series en la tabla...");
    series.forEach((serie) => {
        const trElement = document.createElement("tr");
        trElement.innerHTML = `
      <th scope="row">${serie.id}</th>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        trElement.addEventListener("click", () => showSerieDetail(serie));
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    const totalSeasons = series.reduce((acc, s) => acc + s.seasons, 0);
    return totalSeasons / series.length;
}
function showSerieDetail(serie) {
    detailCardContainer.innerHTML = `
    <div class="card" style="width: 20rem;">
      <img src="${serie.poster}" class="card-img-top" alt="Image of ${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.webpage}" target="_blank"class="btn btn-primary">Info</a>
        </div>
        </div>
    `;
    }
