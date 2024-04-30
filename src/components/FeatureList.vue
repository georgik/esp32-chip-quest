<template>
    <div class="feature-list-container">
      <div class="features-box">
        <h3>Features Added</h3>
        <ul>
          <li v-for="feature in featuresAdded" :key="feature">{{ feature }}</li>
        </ul>
      </div>
      <div class="features-box">
        <h3>Features Lost</h3>
        <ul>
          <li v-for="feature in featuresLost" :key="feature">{{ feature }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FeatureList',
    props: {
      currentChip: Object,
      compareChip: Object
    },
    computed: {
        featuresAdded() {
            if (!this.currentChip || !this.compareChip) return [];
            return this.compareChip.features.filter(f => !this.currentChip.features.includes(f));
        },
        featuresLost() {
            if (!this.currentChip || !this.compareChip) return [];
            return this.currentChip.features.filter(f => !this.compareChip.features.includes(f));
        }
    }
  }
  </script>
  
  <style scoped>
  .features-box {
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    list-style-type: none;
  }
  </style>
  