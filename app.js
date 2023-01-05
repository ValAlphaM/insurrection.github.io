document.addEventListener("DOMContentLoaded", function() {

    // SIDEBAR BUTTON ANIMATION
    // Def section id
    let playersSection = document.getElementById("players-section");
    let charactersSection = document.getElementById("characters-section")
    let mapSection = document.getElementById("map-section");
    let sectionArray = [playersSection, charactersSection, mapSection]

    // Def button id 
    let playersSectionButton = document.getElementById("players-button");
    let charactersSectionButton = document.getElementById("characters-button")
    let mapSectionButton = document.getElementById("map-button");
    let buttonArray = [playersSectionButton, charactersSectionButton, mapSectionButton]
    
    let map = document.querySelector("#map");
    let zoom = document.querySelector("#zoom");
    // Functions
    const changeSection = (displaySection, displayButton) => {
        for (let section of sectionArray) {
            if (section === displaySection){
                section.style.display = 'block';
            } else {
                section.style.display = "none";
                
            }
        };
        for (let button of buttonArray) {
            if (button === displayButton) {
                button.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
                button.addEventListener("mouseover", () => {
                    button.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
                })
                button.addEventListener("mouseout", () => {
                    button.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
                })
            } else {
                button.style.backgroundColor = '';
                button.addEventListener("mouseover", () => {
                    button.style.backgroundColor = ""
                })
                button.addEventListener("mouseout", () => {
                    button.style.backgroundColor = "";
                })
            };
        };
    };

    // Button animations
    playersSectionButton.addEventListener("click", () => changeSection(playersSection, playersSectionButton));
    charactersSectionButton.addEventListener("click", () => changeSection(charactersSection, charactersSectionButton));
    mapSectionButton.addEventListener("click", () => changeSection(mapSection, mapSectionButton));
    // ZOOM MAP ANIMATION
  });
