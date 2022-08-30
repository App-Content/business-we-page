import { serviceSpreadList } from "./serviceList";

export const sectionButtonTexts = [
  "Diagnostyka komputerowa",
  "Programowanie elektroniki",
  "Wymiana modułów i podzespołów elektronicznych",
  "Naprawa elementów elektronicznych",
  "Aktualizacje",
  "Elektroniczne części samochodowe",
];

const buttonArea = document.getElementById("root1");

const attributes = {
  idNumber: 1,
  onclick: "serviceSpreadList(this)",
};

setAttributes = (element, attributes) => {
  Object.keys(attributes).forEach((attr) => {
    element.setAttribute(attr, attributes[attr]);
  });
};

export const buttonInitialLoad = function (btn) {
  sectionButtonTexts.map((singleButtonText) => {
    btn = document.createElement("button");
    setAttributes(btn, attributes);
    attributes.idNumber++;
    btn.innerHTML = singleButtonText;
    btn.classList.add("sectionLeft__buttonArea--button");
    buttonArea.appendChild(btn);
  });
};

buttonInitialLoad();
