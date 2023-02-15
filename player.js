document.addEventListener("DOMContentLoaded", function() {
    // Defining sections and button
    let profiles = document.querySelectorAll(".profile-container");

    for (let profile of profiles) {
        let inventoryButton = profile.querySelector(".inventory-button")
        let spellsButton = profile.querySelector(".spells-button")
        let historyButton = profile.querySelector(".history-button")
        let buttonArray = [inventoryButton, spellsButton, historyButton]

        let inventorySection = profile.querySelector(".inventory");
        let spellsSection = profile.querySelector(".spells");
        let historySection = profile.querySelector(".history");
        let sectionArray = [inventorySection, spellsSection, historySection]

        function changeProfileSection(displaySection, displayButton) {
            for (button of buttonArray) {
                if (button === displayButton) {
                    button.style.borderBottom = "solid 2px var(--black--)"
                } else {
                    button.style.borderBottom = "0px"
                }
            }
            for (let section of sectionArray) {
                if (section === displaySection) {
                    section.style.display = "block";
                } else {
                    section.style.display = "none";
                }
    
            }
        }
        
        inventoryButton.addEventListener("click", () => changeProfileSection(inventorySection, inventoryButton));
        spellsButton.addEventListener("click", () => changeProfileSection(spellsSection, spellsButton));
        historyButton.addEventListener("click", () => changeProfileSection(historySection, historyButton));

    }


});
