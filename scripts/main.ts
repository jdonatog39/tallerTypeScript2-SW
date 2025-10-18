import { Serie } from './Serie';
import { series } from './dataSerie';

const seriesTbody = document.getElementById("series") as HTMLElement;
const avgSeasonsElm = document.getElementById("average-seasons") as HTMLElement;
const detailCardContainer = document.getElementById("card-container") as HTMLElement;

renderSeriesInTable(series);
avgSeasonsElm.innerHTML = `<strong>Average seasons:</strong> ${getAverageSeasons(series).toFixed(2)}`;

function renderSeriesInTable(series: Serie[]): void {
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

function getAverageSeasons(series: Serie[]): number {
  const totalSeasons = series.reduce((acc, s) => acc + s.seasons, 0);
  return totalSeasons / series.length;
}
function showSerieDetail(serie: Serie): void {
  detailCardContainer.innerHTML = `
    <div class="card" style="width: 20rem;">
      <img src="${serie.poster}" class="card-img-top" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.webpage}" target="_blank" class="card-link">info</a>
      </div>
    </div>
  `;
}

