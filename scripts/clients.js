const clientContainer = document.getElementById("clients");
const numberClientByRow = 6;
const rowClientClassList = ["row", "justify-content-center"];
const imageClientClassList = ["img-fluid"];
const imageClientDivClassList = [
    "col-6",
    "col-md-4",
    "col-lg-2",
    "d-flex",
    "align-items-center",
    "justify-content-center"
];



function createImageElement(parent, clientCurrentNumber) {
    let imageDiv = document.createElement("div");
    let imageElement = document.createElement('img');

    imageDiv.classList.add(...imageClientDivClassList);
    imageElement.classList.add(...imageClientClassList);
    imageElement.src = `src/images/clients/client${clientCurrentNumber + 1}.png`;

    imageDiv.appendChild(imageElement);
    parent.appendChild(imageDiv);
};

function createRow(parent) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add(...rowClientClassList);
    parent.appendChild(rowDiv);
    return rowDiv;
}

let currentRow = null;

for (let i = 0; i < numberOfClients; i++) {
    if (i === 0 || i % numberClientByRow === 0) {
        currentRow = createRow(clientContainer);
    }
    createImageElement(currentRow, i)
};
