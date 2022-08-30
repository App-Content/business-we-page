const buttons = [
  document.querySelector(".galleryArea__triggerButton"),
  document.querySelector(".carouselClosingButton"),
];

const toggledClasses = [
  {
    domItem: document.querySelector("#carouselExampleControls"),
    itemClass: "invisible",
  },

  {
    domItem: document.querySelector(".fbAndGallery"),
    itemClass: "fbAndGallery",
  },
];

const toggledColumns = [
  document.querySelector(".galleryArea"),
  document.querySelector(".fbArea"),
];

export const launchCarousel = buttons[0].addEventListener("click", () => {
  toggledClasses.map((toggledClass) => {
    toggledClass.domItem.classList.remove(toggledClass.itemClass);
  });
  toggledColumns.map((toggledColumn) => {
    toggledColumn.style.display = "none";
  });
});

export const closeCarousel = buttons[1].addEventListener("click", () => {
  toggledClasses.map((toggledClass) => {
    toggledClass.domItem.classList.add(toggledClass.itemClass);
  });

  toggledColumns.map((toggledColumn) => {
    toggledColumn.style.display = "flex";
  });
});
