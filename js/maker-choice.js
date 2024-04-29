const chips = ['ESP32', 'ESP32-S3', 'ESP32-C6', 'ESP32-P4'];
let currentChipIndex = 1; // Start with ESP32-S3

const chipFeatures = {
    'ESP32': ['RAM', 'ETH', 'WiFi', 'PSRAM', 'SD/MMC', 'LCD', 'Xtensa'],
    'ESP32-S3': ['RAM', 'USB', 'LCD', 'CAM', 'WiFi', 'PSRAM', 'SPI-ETH', 'SD/MMC', 'Xtensa'],
    'ESP32-C6': ['RAM', 'WiFi', 'WiFi6', 'SPI-ETH', 'Low-Power', 'RISC-V'],
    'ESP32-P4': ['RAM', 'LCD', 'CAM', 'PSRAM', 'MIPI-DSI']
};

const chipProperties = {
    'ESP32': {
        'availability': {
            'start': '2016',
            'end': '2028'
        }
    },
    'ESP32-S3': {
        'availability': {
            'start': '2022',
            'end': '2034'
        }
    },
    'ESP32-C6': {
        'availability': {
            'start': '2023',
            'end': '2035'
        }
    },
    'ESP32-P4': {
        'availability': {
            'start': '2024',
            'end': '2036'
        }
    }
};

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



document.getElementById('current-chip-box').addEventListener('click', function() {
    toggleFormFactors();
});

function toggleFormFactors() {
    var formFactors = document.querySelector('.form-factors');
    if (formFactors.style.display === "none") {
        formFactors.style.display = "flex";
        formFactorsVisible = true;
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


window.addEventListener('resize', function() {
    if (formFactorsVisible) {
        drawConnectors(); // Only redraw if form factors are visible
    }
});
