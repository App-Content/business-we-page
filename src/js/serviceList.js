import { sectionButtonTexts, buttonInitialLoad } from "./buttons";

const serviceArrow = [
  {
    id: 1,
    services: [
      "Kompleksowa diagnostyka, odczyt, analiza kodów usterek, kodowanie",
      "Odczyt kodów Carpass - PIN",
      "Podgląd parametrów w czasie rzeczywistym",
      "Testy elementów wykonawczych",
    ],
  },

  {
    id: 2,
    services: [
      "Programowanie modułów",
      "Programowanie sterowników silnika",
      "Programowanie modułów BCM",
      "Programowanie modułów CIM",
      "Programowanie kluczy wraz z docięciem grotu",
      "Programowanie, adapatacja podzespołów silnika po wymianie, np. (czujnik DPF, SCV, wtryskiwacze)",
      "Kasowanie CRASH DATA",
    ],
  },

  {
    id: 3,
    services: [
      "Wymiana i programowanie modułów CIM (przełącznik zespolony kolumny kierownicy)",
      "Wymiana i programowanie sterowników silnika",
      "Wymiana i programowanie modułów BCM (moduł komfortu nadwozia)",
      "Wymiana i kalibracja czujników kąta skrętu",
      "Wymiana pomp wspomagania oraz ich programowanie i konfiguracja",
      "Montaż i programowanie tempomatów",
    ],
  },

  {
    id: 4,
    services: [
      "Naprawa paneli nawiewów (Vectra C, Signum)",
      "Naprawa kluczyków",
      "Naprawa liczników",
      "Naprawa podświetlenia",
      "Naprawa wyświetlaczy",
    ],
  },

  {
    id: 5,
    services: [
      "Aktualizacje modułów i sterowników",
      "Aktualizacje i programowanie serwisowe SPS",
      "Aktualizacje softu w radiach CD70/DVD90, montaż AUX",
      "Aktualizacje softu wyświetlacza",
      "Aktualizacje softu modułu BCM",
    ],
  },

  {
    id: 6,
    services: [
      "Sprzedajemy również sprawdzone elektroniczne części samochodowe, dzięki temu w większości przypadków posiadamy na miejscu najbardziej wrażliwe na uszkodzenia moduły, przełączniki itp.",
      "Kliknij tu i sprawdź naszą ofertę części na Allegro!",
    ],
  },
];

const popup = document.querySelector("div.popup");
const mPopupTitle = document.querySelector(".mPopupTitle");
const serviceLIstArea = document.querySelector(".mPopupBody__listArea");
const closingButton = document.querySelector(".closingButton");

serviceSpreadList = (btn) => {
  serviceArrow.map((serviceArrowItem) => {
    const serviceButtonId = btn.getAttribute("idNumber");
    if (serviceButtonId == serviceArrowItem.id) {
      mPopupTitle.innerHTML = `${btn.innerHTML}:`;
      serviceArrowItem.services.forEach((service) => {
        const serviceLIstAreaItem = document.createElement("li");
        serviceLIstAreaItem.innerHTML = service;
        serviceLIstArea.appendChild(serviceLIstAreaItem);
        serviceLIstAreaItem.classList.add("mPopupBody__listArea-item");
        popup.style.display = "block";
      });
    }
  });
};

const closeList = () => {
  serviceLIstArea.innerHTML = "";
  popup.style.display = "none";
};

closingButton.addEventListener("click", closeList);
