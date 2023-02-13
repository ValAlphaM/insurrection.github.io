document.addEventListener("DOMContentLoaded", function() {
    
    let map = document.getElementById("map");
    let loupe = document.getElementById("loupe");
    let playersSection = document.getElementById("players-section");
    let charactersSection = document.getElementById("characters-section")
    let mapSection = document.getElementById("map-section");
    let sectionArray = [playersSection, charactersSection, mapSection];
    let mapContainer = document.getElementById("map-container");
    let loupeCheckBox = document.getElementById("loupe-checkbox");
    let booleanForLoupe = true;
    const sectionDisplay = [[playersSection, "flex"], [charactersSection, "block"], [mapSection, "flex"]];
    let varamCard = document.getElementById("card-varam");
    let barlowCard = document.getElementById("card-barlow");
    let momoCard = document.getElementById("card-momo");
    let cards = [varamCard, barlowCard, momoCard];
    let varamProfile = document.getElementById("varam-profile");
    let barlowProfile = document.getElementById("barlow-profile");
    let momoProfile = document.getElementById("momo-profile");
    let profiles = [varamProfile, barlowProfile, momoProfile];
    let blurBackground = document.getElementById("blur");
    let profileDisplay = false;

    // Def button id 
    let playersSectionButton = document.getElementById("players-button");
    let charactersSectionButton = document.getElementById("characters-button")
    let mapSectionButton = document.getElementById("map-button");
    let buttonArray = [playersSectionButton, charactersSectionButton, mapSectionButton];
    // Functions
    function changeSection(displaySection, displayButton) {
        for (let section of sectionArray) {
            if (section === displaySection) {
                for (let sectionDisp of sectionDisplay) {
                    if (sectionDisp[0] === section){
                        section.style.display = sectionDisp[1];
                    }
                };
            } else {
                section.style.display = "none";

            };
        blurBackground.style.display = 'none'
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

    function selectProfile(selectedProfile) {
        blurBackground.style.display = "block";
        for (let profile of profiles) {
            console.log(profile)
            if (profile === selectedProfile) {
                profile.style.display = 'flex';
                profiles.profile = true
            } else {
                profile.style.display = 'none';
                profiles.profile = false
            }
        }
    }

    // Button animations
    playersSectionButton.addEventListener("click", () => changeSection(playersSection, playersSectionButton));
    charactersSectionButton.addEventListener("click", () => changeSection(charactersSection, charactersSectionButton));
    mapSectionButton.addEventListener("click", () => changeSection(mapSection, mapSectionButton));
    // DISPLAY PROFILE PLAYERS
    varamCard.addEventListener("click", () => selectProfile(varamProfile))
    barlowCard.addEventListener("click", () => selectProfile(barlowProfile))
    momoCard.addEventListener("click", () => selectProfile(momoProfile))
    blurBackground.addEventListener("click", (event) => {
        if (event.target.className === 'background-blur') {
            console.log("c'est gagné oh")
            blurBackground.style.display = 'none';
            console.log(blurBackground.style.display)
        }
    })
    // ZOOM MAP ANIMATION
    mapSection.addEventListener("mousemove", (event) => {
        if (booleanForLoupe) { 
            let zoom = 2;
            const mapWidth = mapContainer.offsetWidth;
            const mapHeight = mapContainer.offsetHeight;
            const loupeWidth = loupe.offsetWidth;
            const loupeHeight = loupe.offsetHeight;
            const x = event.pageX;
            const y = event.pageY;
            const mapRecCoords = map.getBoundingClientRect();
    
            loupe.style.backgroundSize = `${mapWidth * zoom}px`
            //Coordonnées de la loupe qui suivent le pointeur
            loupe.style.left = `${x - mapRecCoords.left - loupeWidth/2}px`;
            loupe.style.top = `${y - mapRecCoords.top - loupeHeight/2}px`;
            // Déplacement du zoom
            loupe.style.backgroundPosition = `-${(x - mapRecCoords.left + mapWidth) * zoom -loupeWidth/2 }px -${(y - mapRecCoords.top + mapHeight)* zoom - loupeHeight/2}px`;
    
            // Disparition de la loupe si le curseur sort du cadre.
            if ((x < (mapRecCoords.left)) || (x > mapRecCoords.right) || (y < mapRecCoords.top) || (y > mapRecCoords.bottom)) {
                loupe.style.display = "none";
            } else {
                loupe.style.display = "block";
            };
        } else {
            loupe.style.display = "none";
            mapContainer.style.cursor = "default"
        }
    });
    loupeCheckBox.addEventListener("click", () => {
        booleanForLoupe = !booleanForLoupe
    });
  });
