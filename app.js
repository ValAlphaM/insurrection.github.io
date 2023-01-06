document.addEventListener("DOMContentLoaded", function() {

    // SIDEBAR BUTTON ANIMATION
    // Def section id
    let map = document.getElementById("map");
    let loupe = document.getElementById("loupe");
    let playersSection = document.getElementById("players-section");
    let charactersSection = document.getElementById("characters-section")
    let mapSection = document.getElementById("map-section");
    let sectionArray = [playersSection, charactersSection, mapSection]
    let mapContainer = document.getElementById("map-container")

    // Def button id 
    let playersSectionButton = document.getElementById("players-button");
    let charactersSectionButton = document.getElementById("characters-button")
    let mapSectionButton = document.getElementById("map-button");
    let buttonArray = [playersSectionButton, charactersSectionButton, mapSectionButton];
    // Functions
    function changeSection(displaySection, displayButton) {
        for (let section of sectionArray) {
            if (section === displaySection) {
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
                });
                button.addEventListener("mouseout", () => {
                    button.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
                });
            } else {
                button.style.backgroundColor = '';
                button.addEventListener("mouseover", () => {
                    button.style.backgroundColor = "";
                });
                button.addEventListener("mouseout", () => {
                    button.style.backgroundColor = "";
                });
            };
        };
    }
    // Button animations
    playersSectionButton.addEventListener("click", () => changeSection(playersSection, playersSectionButton));
    charactersSectionButton.addEventListener("click", () => changeSection(charactersSection, charactersSectionButton));
    mapSectionButton.addEventListener("click", () => changeSection(mapSection, mapSectionButton));
    
    // ZOOM MAP ANIMATION
    mapContainer.addEventListener("mouseenter", () => {
        let zoom = 2;
        loupe.style.backgroundSize = zoom * 500 + "px";
        loupe.style.display = "block";

    })
    mapContainer.addEventListener("mousemove", (event) => {
        let zoom = 2;
        const x = event.pageX;
        const y = event.pageY;
        const loupeWidth = loupe.offsetWidth;
        const loupeHeight = loupe.offsetHeight;
        const mapRectangle = map.getBoundingClientRect();
        console.log(mapRectangle.right, mapRectangle.bottom, mapRectangle.left, mapRectangle.top)
        console.log(loupeWidth, loupeHeight)
        loupe.style.backgroundPosition = `-${(x-150) * zoom}px -${(y - 220) * zoom}px`
        loupe.style.left = `${x - 195}px`;
        loupe.style.top = `${y- 175}px`;

        // Conditions de sortie du cadre
        

    });
    mapContainer.addEventListener("mouseleave", () => {
        loupe.style.display = "none";
    })
  });
