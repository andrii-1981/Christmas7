(function () {
    const popupContainer = document.querySelector(".popup");
    const openPopupButton = document.querySelectorAll(".open-popup");
    const closePopup = document.querySelector(".close-popup");
  
    function element(e) {
      e.preventDefault();
      popupContainer.classList.add("active");
    }
  
    openPopupButton.forEach((button) => {
      button.addEventListener("click", element);
    });
  
    function closeButton() {
      popupContainer.classList.remove("active");
    }
  
    closePopup.addEventListener("click", closeButton);
  
    document.addEventListener("click", (e) => {
      if (e.target === popupContainer) {
        popupContainer.classList.remove("active");
      }
    });
  })();