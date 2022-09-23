if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}
function initializeCode() {
  const datasetTable = document.getElementById("dataset");

  async function getDataset() {
    const url =
      "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
    const datasetPromise = await fetch(url);
    const datasetJSON = await datasetPromise.json();
    const arrayLength = Object.values(
      datasetJSON.dataset.dimension.Alue.category.label
    ).length;

    for (var i = 0; i < arrayLength; i++) {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");

      td1.innerText = Object.values(
        datasetJSON.dataset.dimension.Alue.category.label
      )[i];
      td2.innerText = Object.values(datasetJSON.dataset.value)[i];
      tr.appendChild(td1);
      tr.appendChild(td2);
      datasetTable.appendChild(tr);
    }
  }

  getDataset();
}
