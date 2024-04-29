
const chipProperties = {
    'ESP32-S3': {
        'RAM': {
            'info': '380',
            'memory': 'fa-memory'
        },
        'LCD':  {
            'info': '320x200',
            'icon': 'fa-display'
        },
        'CAM':{
            'icon': 'fa-camera'
        },
        'USB': {
            'info': 'USB2.0',
            'icon': 'fa-usb'
        },
        'SPI-ETH': {},
        'SD/MMC': {},
        'software': ['Arduino', 'ESP-IDF', 'MicroPython', 'CircuitPython', 'Rust', 'Rust no_std'],
        'solutions': [ "IoT", "Connectivity", "Multimedia and HMI"],
        'icon': 'images/esp32-c6-socs.png',
        'examples': [
            {
                'name': 'Blinky',
                'url': 'https://wokwi.com/projects/341952826535051858'
            },
            {
                'name': 'WiFi Scan',
                'url': 'https://wokwi.com/projects/305569599398609473'
            },
            {
                'name': 'Joke Machine',
                'url': 'https://wokwi.com/projects/342032431249883731'
            }
         ],
        'availability': {
            'start': '2022',
            'end': '2034'
        }
    },
    'ESP32-C6': {
        'RAM': {
            'info': '420',
            'memory': 'fa-memory'
        },
        'WiFi' : { 'info':'WiFi 6' },
        'software': [ 'ESP-IDF', 'MicroPython', 'CircuitPython', 'Rust', 'Rust no_std'],
        'solutions': [ "IoT", "Connectivity", "Low-Power Applications"],
        'icon': 'images/esp32-c6-socs.png',
        'availability': {
            'start': '2023',
            'end': '2035'
        }

    },
    'ESP32-P4': {
        'RAM': {
            'info': '620',
            'memory': 'fa-memory'
        },
        'PSRAM': { 'info': '2-32MB' },
        'LCD': {
            'info': 'MIPI-DSI: 1280x800',
            'icon': 'fa-display'
        },
        'CAM': {
            'info': 'MIPI-CSI',
            'icon': 'fa-video'
        },
        'software': [ 'ESP-IDF', 'Rust'],
        'solutions': [  "Multimedia and HMI" ],
        'icon': 'images/esp32-c6-socs.png',
        'availability': {
            'start': '2024',
            'end': '2036'
        }

    },
    'ESP32': {
        'RAM': {
            info: '400',
            'memory': 'fa-memory'
        },
        'ETH': {},
        'PSRAM':{ 'info': '2-32MB' },
        'software': ['Arduino', 'ESP-IDF', 'MicroPython', 'CircuitPython', 'Rust', 'Rust no_std'],
        'solutions': [ "IoT", "Connectivity", "Multimedia and HMI"],
        'icon': 'images/esp32-c6-socs.png',
        'availability': {
            'start': '2016',
            'end': '2028'
        }

    }
};
