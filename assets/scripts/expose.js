// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectElement = document.getElementById("horn-select");

  // Event listener for horn selection change
  selectElement.addEventListener('change', (event) => {
    const selectedHorn = event.target.value;
    const imageElement = document.querySelector("main img");
    
    // Update image source based on selected horn
    switch (selectedHorn) {
      case "air-horn":
        imageElement.src = "assets/images/air-horn.svg";
        break;
      case "car-horn":
        imageElement.src = "assets/images/car-horn.svg";
        break;
      case "party-horn":
        imageElement.src = "assets/images/party-horn.svg";
        break;
      default:
        break;
    }
  });
}