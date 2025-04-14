const usePopup = () => {
  const openPopup = () => {
    const popup = document.getElementById("popup");
    if (popup) {
      popup.classList.remove("hidden");
      popup.classList.add("block", "opacity-100");
    }
  };

  const closePopup = () => {
    const popup = document.getElementById("popup");
    if (popup) {
      popup.classList.remove("block");
      popup.classList.add("opacity-0");
      setTimeout(() => {
        popup.classList.add("hidden");
      }, 0);
    }
  };

  return { openPopup, closePopup };
};

export default usePopup;
