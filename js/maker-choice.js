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
        },
        'devkits': [
            {
                'name': 'ESP32-DevKitC',
                'image': 'images/esp32-devkitc.jpg'
            },
            {
                'name': 'ESP32-DevKitM',
                'image': 'images/esp32-devkitm.jpg'
            }
        ],
        'modules': [
            {
                'name': 'ESP32-WROOM-32',
                'image': 'images/esp32-wroom-32.jpg'
            },
            {
                'name': 'ESP32-WROVER',
                'image': 'images/esp32-wrover.jpg'
            }
        ],
        'socs': [
            {
                'name': 'ESP32',
                'image': 'images/esp32-socs.png'
            }
        ]
    },
    'ESP32-S3': {
        'availability': {
            'start': '2022',
            'end': '2034'
        },
        'devkits': [
            {
                'name': 'ESP32-S3-BOX-3',
                'image': 'https://www.espressif.com/sites/default/files/dev-board/ESP32-S3-BOX-3_S.png'
            },
            {
                'name': 'M5Stack CoreS3',
                'image': 'https://static-cdn.m5stack.com/resource/docs/products/core/CoreS3/img-9618aed2-e595-4bb4-ac53-e0b9772aefd6.webp'
            },
            {
                'name': 'ESP32-S3-DevKitM-1',
                'image': 'https://www.espressif.com/sites/default/files/dev-board/ESP32-S3-DevKitM-1_S.png'
            },
            {
                'name': 'ESP32-S3-DevKitC-1',
                'image': 'https://www.espressif.com/sites/default/files/dev-board/ESP32-S3-DevKitC-1%20%E5%B0%8F.png'
            }
        ],
        'modules': [
            {
                'name': 'ESP32-S3-WROOM-1',
                'image': 'https://www.espressif.com/sites/default/files/modules/ESP32-S3-WROOM-1%20S_0.png'
            },
            {
                'name': 'ESP32-S3-MINI-1',
                'image': 'https://www.espressif.com/sites/default/files/modules/ESP32-S3-MINI-1%20S_0.png'
            }
        ],
        'socs': [
            {
                'name': 'ESP32-S3',
                'image': 'https://www.espressif.com/sites/default/files/chips/ESP32-S3_S_0.png'
            },
            {
                'name': 'ESP32-S3-PICO-1',
                'image': 'https://www.espressif.com/sites/default/files/chips/ESP32-S3-PICO-1_S_0.png'
            }
        ]
    },
    'ESP32-C6': {
        'availability': {
            'start': '2023',
            'end': '2035'
        },
        'devkits': [
            {
                'name': 'ESP32-C6-DevKitC-1',
                'image': 'images/esp32-c6-devkitc-1.jpg'
            },
            {
                'name': 'ESP32-C6-DevKitM-1',
                'image': 'images/esp32-c6-devkitm-1.jpg'
            }
        ],
        'modules': [
            {
                'name': 'ESP32-C6-WROOM-1',
                'image': 'images/esp32-c6-wroom-1.jpg'
            }
        ],
        'socs': [
            {
                'name': 'ESP32-C6',
                'image': 'images/esp32-c6-socs.png'
            }
        ]
    },
    'ESP32-P4': {
        'availability': {
            'start': '2024',
            'end': '2036'
        },
        'devkits': [
            {
                'name': 'ESP32-P4-DevKitC-1',
                'image': 'images/esp32-p4-devkitc-1.jpg'
            },
            {
                'name': 'ESP32-P4-DevKitM-1',
                'image': 'images/esp32-p4-devkitm-1.jpg'
            }
        ],
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


function renderDevKits() {
    const devkits = chipProperties[chips[currentChipIndex]].devkits;
    const devkitList = document.getElementById('devkit-list');
    devkitList.innerHTML = devkits.map(devkit => `
        <li>
            <img class="devkit-thumbnail" src="${devkit.image}" alt="${devkit.name}" style="max-width:100px; height:auto;">
            <span>${devkit.name}</span>
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

