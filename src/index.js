const datasetsTable = document.getElementById("datasets");

async function getDatasets() {
  const url =
    "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
  const datasetsPromise = await fetch(url);
  const datasetsJSON = await datasetsPromise.json();

  datasetsJSON.forEach((dataset) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");

    td1.innerText = dataset.dimension.Alue.category.label;
    td2.innerText = dataset.value;
    tr.appendChild(td1);
    tr.appendChild(td2);

    datasetsTable.appendChild(tr);
  });
}
