<template>
    <div class="chip-selector">
      <!-- Left Chip -->
      <div class="chip-box" @click="selectChip('left')">
        <i class="fas fa-cog settings-icon"></i>
        <div class="chip-name">{{ chips[leftChipIndex].name }}</div>
        <img :src="chips[leftChipIndex].image" class="chip-image">
        <div class="availability">{{ chips[leftChipIndex].availability }}</div>
      </div>
  
      <!-- Arrow and features going from left to middle -->
      <div class="arrow-box">
        <div class="features-box added">
          <ul>
            <li v-for="feature in featuresAddedLeft" :key="feature">{{ feature }}</li>
          </ul>
        </div>
        <div class="arrow">←</div>
        <div class="features-box removed">
          <ul>
            <li v-for="feature in featuresLostLeft" :key="feature">{{ feature }}</li>
          </ul>
        </div>
      </div>
  
      <!-- Middle Chip -->
      <div class="chip-box">
        <div class="chip-name">{{ chips[currentChipIndex].name }}</div>
        <img :src="chips[currentChipIndex].image" class="chip-image">
        <div class="availability">{{ chips[currentChipIndex].availability }}</div>
      </div>
  
      <!-- Arrow and features going from middle to right -->
      <div class="arrow-box">
        <div class="features-box added">
          <ul>
            <li v-for="feature in featuresAddedRight" :key="feature">{{ feature }}</li>
          </ul>
        </div>
        <div class="arrow">→</div>
        <div class="features-box removed">
          <ul>
            <li v-for="feature in featuresLostRight" :key="feature">{{ feature }}</li>
          </ul>
        </div>
      </div>
  
      <!-- Right Chip -->
      <div class="chip-box" @click="selectChip('right')">
        <i class="fas fa-cog settings-icon"></i>
        <div class="chip-name">{{ chips[rightChipIndex].name }}</div>
        <img :src="chips[rightChipIndex].image" class="chip-image">
        <div class="availability">{{ chips[rightChipIndex].availability }}</div>
      </div>
    </div>
  </template>
    
  
  <script>
  export default {
    name: 'ChipSelector',
    data() {
      return {
        chips: [
          { name: 'ESP32', image: 'images/esp32-c6-socs.png', features: ['RAM', 'ETH', 'WiFi', 'PSRAM', 'SD/MMC', 'LCD', 'Xtensa'] },
          { name: 'ESP32-S3', image: 'images/esp32-s3-socs.png', features: ['RAM', 'USB', 'LCD', 'CAM', 'WiFi', 'PSRAM', 'SPI-ETH', 'SD/MMC', 'Xtensa'] },
          { name: 'ESP32-C6', image: 'images/esp32-c6-socs.png', features: ['RAM', 'WiFi', 'WiFi6', 'SPI-ETH', 'Low-Power', 'RISC-V'] },
        ],
        currentChipIndex: 1,
      };
    },
    computed: {
      leftChipIndex() {
        return Math.max(0, this.currentChipIndex - 1);
      },
      rightChipIndex() {
        return Math.min(this.chips.length - 1, this.currentChipIndex + 1);
      },
      featuresAddedLeft() {
        // Compute features added when moving from left to middle
        return this.compareFeatures(this.chips[this.leftChipIndex].features, this.chips[this.currentChipIndex].features);
      },
      featuresLostLeft() {
        // Compute features lost when moving from left to middle
        return this.compareFeatures(this.chips[this.currentChipIndex].features, this.chips[this.leftChipIndex].features);
      },
      featuresAddedRight() {
        // Compute features added when moving from middle to right
        return this.compareFeatures(this.chips[this.rightChipIndex].features, this.chips[this.currentChipIndex].features);
      },
      featuresLostRight() {
        // Compute features lost when moving from middle to right
        return this.compareFeatures(this.chips[this.currentChipIndex].features, this.chips[this.rightChipIndex].features);
      },
    },
    methods: {
      selectChip(position) {
        if (position === 'left' && this.currentChipIndex > 0) {
          this.currentChipIndex--;
        } else if (position === 'right' && this.currentChipIndex < this.chips.length - 1) {
          this.currentChipIndex++;
        }
      },
      compareFeatures(base, compare) {
        return base.filter(feature => !compare.includes(feature));
      }
    }
  }
  </script>
  
  <style scoped>
  .chip-selector {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }
  
  .chip-box {
    flex: 1;
    margin: 10px;
    cursor: pointer;
    text-align: center;
  }
  
  .chip-box img {
    max-width: 100px;
    height: auto;
  }
  
  .chip-name {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  
  .arrow-box {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .arrow {
    margin: 0 20px;
    font-size: 24px;
    color: #666;
  }
  
  .features-box {
    padding: 5px;
    background: white;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }
  
  .features-box ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .features-box li {
    font-size: 14px;
    color: #555;
  }

  
.features-box.added {
  color: green;
}

.features-box.removed {
  color: orange;
}

.availability {
  font-size: 12px;
  margin-top: 5px;
  color: #555;
}

.arrow-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.features-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 0;
}

.features-box ul {
  padding: 0;
  list-style-type: none;
}

.chip-box {
  text-align: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 10px;
}

  </style>
  