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

class ToggleClass {
  constructor(param) {
    this.param = param;
  }

  getResult() {
    if (this.param === "add") {
      toggledClasses.map((toggledClass) => {
        toggledClass.domItem.classList.add(toggledClass.itemClass);
      });
    } else if (this.param === "remove") {
      toggledClasses.map((toggledClass) => {
        toggledClass.domItem.classList.remove(toggledClass.itemClass);
      });
    }
  }
}

export const launchCarousel = buttons[0].addEventListener("click", () => {
  const removeInvisibleClass = new ToggleClass("remove");
  removeInvisibleClass.getResult();

  toggledColumns.map((toggledColumn) => {
    toggledColumn.style.display = "none";
  });
});

export const closeCarousel = buttons[1].addEventListener("click", () => {
  const addInvisibleClass = new ToggleClass("add");
  addInvisibleClass.getResult();

  toggledColumns.map((toggledColumn) => {
    toggledColumn.style.display = "flex";
  });
});
