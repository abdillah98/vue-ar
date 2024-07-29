<template>
  <a-scene embedded arjs='sourceType: webcam;'>
    <a-box position='0 0.5 0' color="#EF2D5E"></a-box>
    <a-marker-camera preset='hiro'></a-marker-camera>
  </a-scene>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class HelloWorld extends Vue {
  mounted() {
    console.log('mounted');
    document.body.style.overflow = 'hidden';
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.close {
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 100;
}
.close button{
  width: 40px;
  height: 40px;
  background-color: #00000052;
  border-radius: 50%;
  outline: none !important;
  box-shadow: none;
}

.arjs-loader {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arjs-loader div {
  text-align: center;
  font-size: 1.25em;
  color: white;
}
</style>