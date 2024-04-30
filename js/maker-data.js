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
                'image': 'https://www.espressif.com/sites/default/files/dev-board/ESP32-S3-BOX-3_S.png',
                'doc': 'https://github.com/espressif/esp-box/blob/master/docs/hardware_overview/esp32_s3_box_3/hardware_overview_for_box_3.md',
                'bsp': 'https://components.espressif.com/components/espressif/esp-box-3',
                'shop': 'https://www.espressif.com/en/products/devkits/esp32-s3-box-3',
                'video': 'https://www.youtube.com/watch?v=3Q1Z9Q1Z9Qw',
                'wokwi' : 'https://wokwi.com/esp32-s3-box-3',
                'example': 'https://github.com/espressif/esp-box/tree/master/examples/esp_joystick/joystick_controller',
                'pinout': 'https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/hw-reference/esp32s3-box-3.html'
            },
            {
                'name': 'M5Stack CoreS3',
                'image': 'https://static-cdn.m5stack.com/resource/docs/products/core/CoreS3/img-9618aed2-e595-4bb4-ac53-e0b9772aefd6.webp',
                'doc': 'https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/hw-reference/esp32s3-box-3.html',
                'bsp': 'https://components.espressif.com/components/espressif/esp-box-3',
                'shop': 'https://www.espressif.com/en/products/devkits/esp32-s3-box-3',
                'video': 'https://www.youtube.com/watch?v=3Q1Z9Q1Z9Qw',
                'wokwi' : 'https://wokwi.com/esp32-s3-box-3',
                'example': 'https://github.com/espressif/esp-box/tree/master/examples/esp_joystick/joystick_controller',
                'pinout': 'https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/hw-reference/esp32s3-box-3.html'
            },
            {
                'name': 'ESP32-S3-DevKitM-1',
                'image': 'https://www.espressif.com/sites/default/files/dev-board/ESP32-S3-DevKitM-1_S.png',
                'doc': 'https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/hw-reference/esp32s3-box-3.html',
                'bsp': 'https://components.espressif.com/components/espressif/esp-box-3',
                'shop': 'https://www.espressif.com/en/products/devkits/esp32-s3-box-3',
                'video': 'https://www.youtube.com/watch?v=3Q1Z9Q1Z9Qw',
                'wokwi' : 'https://wokwi.com/esp32-s3-box-3',
                'example': 'https://github.com/espressif/esp-box/tree/master/examples/esp_joystick/joystick_controller',
                'pinout': 'https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/hw-reference/esp32s3-box-3.html'
            },
            {
                'name': 'ESP32-S3-DevKitC-1',
                'image': 'https://www.espressif.com/sites/default/files/dev-board/ESP32-S3-DevKitC-1%20%E5%B0%8F.png',
                'doc': 'https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/hw-reference/esp32s3-box-3.html',
                'bsp': 'https://components.espressif.com/components/espressif/esp-box-3',
                'shop': 'https://www.espressif.com/en/products/devkits/esp32-s3-box-3',
                'video': 'https://www.youtube.com/watch?v=3Q1Z9Q1Z9Qw',
                'wokwi' : 'https://wokwi.com/esp32-s3-box-3',
                'example': 'https://github.com/espressif/esp-box/tree/master/examples/esp_joystick/joystick_controller',
                'pinout': 'https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/hw-reference/esp32s3-box-3.html'
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
