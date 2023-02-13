document.addEventListener("DOMContentLoaded", function() {
    // Defining sections and button
    let inventoryButton = document.getElementById("inventory");
    let historyButton = document.getElementById("history");
    let spellsButton = document.getElementById("spells");
    let buttonArray = [inventoryButton, historyButton, spellsButton]
    let inventorySection = document.getElementById("show-inventory");
    let historySection = document.getElementById("show-history");
    let spellsSection = document.getElementById("show-spells");
    let profileSectionArray = [inventorySection, spellsSection, historySection]

    function changeProfileSection(displaySection, displayButton) {
        for (button of buttonArray) {
            if (button === displayButton) {
                button.style.borderBottom = "solid 2px var(--black--)"
            } else {
                button.style.borderBottom = "0px"
            }
        }
        for (let section of profileSectionArray) {
            if (section === displaySection) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }

        }
    }
    inventoryButton.addEventListener("click" , () => changeProfileSection(inventorySection, inventoryButton));
    spellsButton.addEventListener("click" , () => changeProfileSection(spellsSection, spellsButton))
    historyButton.addEventListener("click" , () => changeProfileSection(historySection, historyButton))
});
