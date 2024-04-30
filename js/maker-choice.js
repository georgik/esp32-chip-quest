var chips = ['ESP32', 'ESP32-S3', 'ESP32-C6', 'ESP32-P4'];
let currentChipIndex = 1; // Start with ESP32-S3

function updateDisplay() {
    const currentChip = chips[currentChipIndex];
    const leftChip = chips[currentChipIndex - 1] || chips[0];
    const rightChip = chips[currentChipIndex + 1] || chips[chips.length - 1];

    document.getElementById('current-chip').textContent = currentChip;
    document.getElementById('chip-left').textContent = leftChip;
    document.getElementById('chip-right').textContent = rightChip;

    updateFeatureLists(leftChip, currentChip, rightChip);
    updateAvailability(leftChip, 'availability-left');
    updateAvailability(currentChip, 'availability-current');
    updateAvailability(rightChip, 'availability-right');
}

function updateFeatureLists(leftChip, currentChip, rightChip) {
    const featuresLostLeft = chipFeatures[currentChip].filter(f => !chipFeatures[leftChip].includes(f));
    const featuresAddedLeft = chipFeatures[leftChip].filter(f => !chipFeatures[currentChip].includes(f));
    const featuresAddedRight = chipFeatures[rightChip].filter(f => !chipFeatures[currentChip].includes(f));
    const featuresLostRight = chipFeatures[currentChip].filter(f => !chipFeatures[rightChip].includes(f));

    document.getElementById('features-lost-left').innerHTML = featuresLostLeft.map(f => `<li>- ${f}</li>`).join('');
    document.getElementById('features-added-left').innerHTML = featuresAddedLeft.map(f => `<li>+ ${f}</li>`).join('');
    document.getElementById('features-added-right').innerHTML = featuresAddedRight.map(f => `<li>+ ${f}</li>`).join('');
    document.getElementById('features-lost-right').innerHTML = featuresLostRight.map(f => `<li>- ${f}</li>`).join('');
}

function updateAvailability(chip, elementId) {
    const availabilityInfo = chipProperties[chip].availability;
    const yearsLeft = availabilityInfo.end - new Date().getFullYear();
    const availabilityElement = document.getElementById(elementId);
    availabilityElement.innerHTML = `Available: ${availabilityInfo.start} - ${availabilityInfo.end} `;

    let iconHtml = '<i class="fas ';
    if (yearsLeft >= 5) {
        iconHtml += 'fa-check-circle" style="color: green;"></i>';
    } else if (yearsLeft > 2) {
        iconHtml += 'fa-exclamation-triangle" style="color: orange;"></i>';
    } else {
        iconHtml += 'fa-times-circle" style="color: red;"></i>';
    }
    availabilityElement.innerHTML += iconHtml;
}


document.addEventListener('DOMContentLoaded', updateDisplay);


let formFactorsVisible = false;


document.getElementById('next-step-pointer').addEventListener('click', function() {
    toggleFormFactors();
});

document.getElementById('form-factor-title').addEventListener('click', function() {
    toggleFormFactors();
});


function renderDevKits() {
    const devkits = chipProperties[chips[currentChipIndex]].devkits;
    const devkitList = document.getElementById('devkit-list');
    devkitList.innerHTML = devkits.map(devkit => `
        <li>
            <img class="devkit-thumbnail" src="${devkit.image}" alt="${devkit.name}" style="width:100px; height:auto;">
            <span>${devkit.name}</span>
            <div class="devkit-links">
                <a href="${devkit.doc}" target="_blank" title="Documentation"><i class="fas fa-book"></i></a>
                <a href="${devkit.bsp}" target="_blank" title="Board Support Package"><i class="fas fa-microchip"></i></a>
                <a href="${devkit.shop}" target="_blank" title="Shop"><i class="fas fa-shopping-cart"></i></a>
                <a href="${devkit.video}" target="_blank" title="Video"><i class="fas fa-video"></i></a>
                <a href="${devkit.wokwi}" target="_blank" title="Simulator"><i class="fas fa-vr-cardboard"></i></a>
                <a href="${devkit.example}" target="_blank" title="Example Code"><i class="fas fa-code"></i></a>
                <a href="${devkit.pinout}" target="_blank" title="Pinout"><i class="fas fa-map"></i></a>
            </div>
        </li>
    `).join('');
}

function renderModules() {
    const modules = chipProperties[chips[currentChipIndex]].modules;
    const moduleList = document.getElementById('module-list');
    moduleList.innerHTML = modules.map(module => `
        <li>
            <img src="${module.image}" alt="${module.name}" style="max-width:100px; height:auto;">
            <span>${module.name}</span>
        </li>
    `).join('');
}

function renderChips() {
    const socs = chipProperties[chips[currentChipIndex]].socs;
    const socList = document.getElementById('chip-list');
    socList.innerHTML = socs.map(soc => `
        <li>
            <img src="${soc.image}" alt="${soc.name}" style="max-width:100px; height:auto;">
            <span>${soc.name}</span>
        </li>
    `).join('');
}

function toggleFormFactors() {
    var formFactors = document.querySelector('.form-factors');
    if (formFactors.style.display === "none") {
        formFactors.style.display = "flex";
        formFactorsVisible = true;
        renderDevKits();
        renderModules();
        renderChips();
    } else {
        formFactors.style.display = "none";
        formFactorsVisible = false;
    }
}




// Add event listeners to form factors
document.getElementById('devkit').addEventListener('click', function() {
    showFormFactorDetails('DevKit');
});
document.getElementById('module').addEventListener('click', function() {
    showFormFactorDetails('Module');
});
document.getElementById('chip').addEventListener('click', function() {
    showFormFactorDetails('Chip');
});

function showFormFactorDetails(formFactor) {
    console.log("Selected Form Factor:", formFactor);
    // Placeholder for displaying images or details related to the selected form factor
    // Implement actual display logic or update page content here
}


function setupChipSelectionModal() {
    var modal = document.getElementById("chip-selection-modal");
    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.querySelectorAll('.settings-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            var position = this.getAttribute('data-position');
            populateChipSelection(position);
            modal.style.display = "block";
        });
    });
}

function populateChipSelection(position) {
    var list = document.getElementById("chip-selection-list");
    list.innerHTML = '';
    chips.forEach((chip, index) => {
        var div = document.createElement('div');
        div.className = 'chip-selection-item';
        div.innerHTML = `<img src="images/${chip.toLowerCase()}-socs.png" alt="${chip}">
                         <span>${chip}</span>`;
        div.onclick = function() {
            setCurrentChipIndex(index, position);
            updateDisplay();
            document.getElementById("chip-selection-modal").style.display = "none";
        };
        list.appendChild(div);
    });
}

function setCurrentChipIndex(index, position) {
    if (position === 'left') {
        // Adjust index for left chip
        currentChipIndex = Math.max(0, currentChipIndex - 1);
    } else if (position === 'right') {
        // Adjust index for right chip
        currentChipIndex = Math.min(chips.length - 1, currentChipIndex + 1);
    } else {
        // Middle chip
        currentChipIndex = index;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    setupChipSelectionModal();
    updateDisplay();
});
