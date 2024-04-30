<template>
    <div class="form-factors">
      <div class="form-factor" @click="toggleVisibility('devkit')">
        <h2>DevKits</h2>
        <ul v-if="visible.devkit">
          <li v-for="devkit in currentChip.devkits" :key="devkit.name">
            <img :src="devkit.image" alt="devkit.name">
            <span>{{ devkit.name }}</span>
          </li>
        </ul>
      </div>
      <div class="form-factor" @click="toggleVisibility('module')">
        <h2>Modules</h2>
        <ul v-if="visible.module">
          <li v-for="module in currentChip.modules" :key="module.name">
            <img :src="module.image" alt="module.name">
            <span>{{ module.name }}</span>
          </li>
        </ul>
      </div>
      <div class="form-factor" @click="toggleVisibility('soc')">
        <h2>Chips (SoC)</h2>
        <ul v-if="visible.soc">
          <li v-for="soc in currentChip.socs" :key="soc.name">
            <img :src="soc.image" alt="soc.name">
            <span>{{ soc.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'FormFactors',
    props: ['currentChip'],
    data() {
      return {
        visible: {
          devkit: true,
          module: true,
          soc: true
        }
      };
    },
    methods: {
      toggleVisibility(factor) {
        this.visible[factor] = !this.visible[factor];
      }
    }
  }
  </script>


<style scoped>
.form-factors {
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.form-factor {
  cursor: pointer;
  margin-bottom: 10px;
}

.form-factor h2 {
  font-size: 20px;
  color: #333;
  padding: 10px;
  background-color: #e9e9e9;
  border-radius: 4px;
  margin: 0;
  user-select: none; /* Prevent text selection */
}

.form-factor ul {
  list-style-type: none;
  padding: 0;
  margin-top: 5px;
  display: none; /* Initially hidden */
}

.form-factor ul li {
  background-color: white;
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.form-factor ul li img {
  width: 50px;
  height: auto;
  margin-right: 10px;
  vertical-align: middle;
}

.form-factor ul li span {
  vertical-align: middle;
  font-size: 16px;
}
</style>
