<template>
    <div id="app">
      <h1>ESP32 Chip Selector</h1>
      <chip-selector :chips="chips" v-model="currentChipIndex"></chip-selector>
      <form-factors :current-chip="chips[currentChipIndex]"></form-factors>
    </div>
  </template>
  
  <script>
  import ChipSelector from './components/ChipSelector.vue';
  import FormFactors from './components/FormFactors.vue';
  
  export default {
    name: 'App',
    components: {
      ChipSelector,
      FormFactors
    },
    data() {
  return {
    chips: [
      { 
        name: 'ESP32', 
        image: 'images/esp32-c6-socs.png', 
        features: ['RAM', 'ETH', 'WiFi', 'PSRAM', 'SD/MMC', 'LCD', 'Xtensa'],
        devkits: [
          { name: 'ESP32-DevKitC', image: 'images/esp32-devkitc.jpg' },
          { name: 'ESP32-DevKitM', image: 'images/esp32-devkitm.jpg' }
        ],
        modules: [
          { name: 'ESP32-WROOM-32', image: 'images/esp32-wroom-32.jpg' },
          { name: 'ESP32-WROVER', image: 'images/esp32-wrover.jpg' }
        ],
        socs: [
          { name: 'ESP32', image: 'images/esp32-socs.png' }
        ]
      },
      { 
        name: 'ESP32-S3', 
        image: 'images/esp32-s3-socs.png', 
        features: ['RAM', 'USB', 'LCD', 'CAM', 'WiFi', 'PSRAM', 'SPI-ETH', 'SD/MMC', 'Xtensa'],
        devkits: [
          { name: 'ESP32-S3-BOX-3', image: 'images/esp32-s3-box-3.jpg' },
          { name: 'M5Stack CoreS3', image: 'images/m5stack-cores3.jpg' }
        ],
        modules: [
          { name: 'ESP32-S3-WROOM-1', image: 'images/esp32-s3-wroom-1.jpg' },
          { name: 'ESP32-S3-MINI-1', image: 'images/esp32-s3-mini-1.jpg' }
        ],
        socs: [
          { name: 'ESP32-S3', image: 'images/esp32-s3-socs.jpg' }
        ]
      },
      { 
        name: 'ESP32-C6', 
        image: 'images/esp32-c6-socs.png', 
        features: ['RAM', 'WiFi', 'WiFi6', 'SPI-ETH', 'Low-Power', 'RISC-V'],
        devkits: [
          { name: 'ESP32-C6-DevKitC-1', image: 'images/esp32-c6-devkitc-1.jpg' },
          { name: 'ESP32-C6-DevKitM-1', image: 'images/esp32-c6-devkitm-1.jpg' }
        ],
        modules: [
          { name: 'ESP32-C6-WROOM-1', image: 'images/esp32-c6-wroom-1.jpg' }
        ],
        socs: [
          { name: 'ESP32-C6', image: 'images/esp32-c6-socs.jpg' }
        ]
      },
      // More chips can be added here
    ],
    currentChipIndex: 1
  };
}
  }
  </script>
  
  <style>
  #app {
    text-align: center;
  }
  </style>
  