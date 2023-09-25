let header = document.querySelector("header");

let body = document.querySelector("body");
body.style.backgroundImage = "url('./images/galaxy.gif')";

let main = document.querySelector("main");
main.style.display = "flex";
main.style.justifyContent = "center";
main.style.alignItems = "center";

let h1 = document.querySelector("h1");
h1.classList.add("centered");
h1.style.color = "#0086cc";
h1.style.fontSize = "40px";
//h1.style.textStroke = "4px grey";
h1.style.textShadow = "2px 2px 4px rgba(255, 255, 255, 0.5)";

let input = document.querySelector("input");
input.classList.add("inputs");
let select = document.querySelector("select");
select.classList.add("inputs");
let button = document.querySelector("button");
button.classList.add("inputs");

let divInputs = document.createElement("div");
header.appendChild(divInputs);
divInputs.appendChild(input);
divInputs.appendChild(select);
divInputs.appendChild(button);

divInputs.style.display = "flex";
divInputs.style.justifyContent = "center";
divInputs.style.alignItems = "center";
divInputs.style.marginBottom = "20px";

input.style.width = "200px";
input.style.height = "30px";
input.style.border = "2px solid white";
input.style.marginRight = '15px';

select.style.width = "200px";
select.style.height = "35px";
select.style.border = "2px solid white";
select.style.borderRadius = "5px";
select.style.marginRight = '15px';

button.style.width = "200px";
button.style.height = "40px";
button.style.border = "2px solid white";
button.style.borderRadius = "8px";
button.style.color = "White";
button.style.backgroundColor = "#919191";
button.style.fontWeight = "Bold";
button.style.marginRight = '0px';

const pianeti = {"Mercurio": 3.70, "Venere": 8.87, "Terra": 9.81, "Luna": 1.62, "Marte": 3.71, "Giove": 24.79, "Saturno": 8.96, "Urano": 8.89, "Nettuno": 11.00, "Plutone": 0.62};
for (let key in pianeti) {
    let opzione = document.createElement("option");
    opzione.textContent = key;
    opzione.value = pianeti[key];
    select.appendChild(opzione);
}

let flexContainer = document.querySelector(".flex-container");
//flexContainer.classList.add("centered");
flexContainer.style.backgroundColor = "rgba(51, 51, 51, 0.5)";
flexContainer.style.display = "flex";
flexContainer.style.justifyContent = "center";
flexContainer.style.alignItems = "center";
flexContainer.style.width = "85%";
flexContainer.style.height = "73vh";

let flexImage = document.querySelector(".flex-item");
flexImage.style.display = "flex";
flexImage.style.justifyContent = "center";
flexImage.style.alignItems = "center";
flexImage.style.padding = "40px";

flexImage.style.transform = `scale(0.8)`;

let centered = document.querySelector(".centered");
centered.style.display = "flex";
centered.style.justifyContent = "center";
centered.style.alignItems = "center";

function calcolaPeso() {
    const massInput = document.getElementById("mass");
    const selectedOption = document.querySelector("select option:checked");
    const gravita = parseFloat(selectedOption.value);
    const massa = parseFloat(massInput.value);

    if ((isNaN(massa)) || (massa < 0)) {
        alert("Inserisci una massa valida in Kilogrammi.");
        return;
    }

    if (isNaN(gravita)) {
        alert("Seleziona un Pianeta.");
        return;
    }

    const result = massa * gravita;

    flexContainer.style.justifyContent = "flex-start";
    
    const pianeti = {"Terra": "earth", "Giove": "jupiter", "Marte": "mars", "Mercurio": "mercury", "Luna": "moon", "Nettuno": "neptune", "Plutone": "pluto", "Saturno": "saturn", "Urano": "uranus", "Venere": "venus"};
    let pianeta = pianeti[selectedOption.textContent];

    flexImage.style.marginRight = "80px";
    flexImage.innerHTML = `<img src='./images/${pianeta}.png' class="planet-image" />`;

    const descriptionDiv = document.querySelector(".description");
    descriptionDiv.style.color = "white";
    //descriptionDiv.style.fontWeight = "bold";
    descriptionDiv.style.fontSize = "24px";
    descriptionDiv.style.backgroundColor = "rgba(204, 204, 204, 0.4)";
    descriptionDiv.style.padding = "30px";
    descriptionDiv.style.marginRight = "20px";

    descriptionDiv.style.height = "50%";
    descriptionDiv.style.width = "40%";

    descriptionDiv.innerHTML = `<p>Il peso dell'oggetto sul pianeta <span style='font-size: 30px; font-weight: bold'>${selectedOption.textContent.toUpperCase()}</span></p>`;
    descriptionDiv.innerHTML += `<p>${result.toFixed(2)} N</p>`;

    descriptionDiv.style.display = "flex";
    descriptionDiv.style.justifyContent = "center";
    descriptionDiv.style.alignItems = "center";
    descriptionDiv.style.flexDirection = "column";

    let secondoP = document.querySelectorAll("p")[1];
    secondoP.style.color = "white";
    secondoP.style.fontWeight = "bold";
    secondoP.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    secondoP.style.padding = "10px";
    secondoP.style.fontSize = "50px";
    secondoP.style.width = "300px";
    secondoP.style.height = "300px";
    secondoP.style.borderRadius = "50%";
    secondoP.style.display = "flex";
    secondoP.style.justifyContent = "center";
    secondoP.style.alignItems = "center";
}
button.onclick = calcolaPeso;
