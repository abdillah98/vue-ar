<template>
  <div class="container-ar">
    <div class="close">
      <button class="btn-close" @click="$emit('closeModal')"></button>
    </div>
    <div class="arjs-loader">
      <div>Loading, please wait...</div>
    </div>

    <!-- a-frame scene -->
    <a-scene
      vr-mode-ui="enabled: false;"
      renderer="logarithmicDepthBuffer: true;"
      embedded
      arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
    >
      <!-- a-nft is the anchor that defines an Image Tracking entity -->
      <!-- on 'url' use the path to the Image Descriptors created before. -->
      <!-- the path should end with the name without the extension e.g. if file is 'pinball.fset' the path should end with 'pinball' -->
      <a-nft
        type="nft"
        url="marker/book_marker"
        smooth="true"
        smoothCount="10"
        smoothTolerance=".01"
        smoothThreshold="5"
      >
        <!-- as a child of the a-nft entity, you can define the content to show. here's a GLTF model entity -->
        <a-entity
          gltf-model="/marker/fi_buggy/scene.gltf"
          scale="5 5 5"
          position="120 120 0"
        >
        </a-entity>
      </a-nft>
      <!-- static camera that moves according to the device movemenents -->
      <a-entity camera></a-entity>
    </a-scene>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  @Prop() markerUrl: string | undefined
  @Prop() modelUrl: string | undefined

  mounted() {
    console.log('mounted');
    document.body.style.overflow = 'hidden';
    console.log('document.body.style', document.body.style.overflow);
    // console.log('markerUrl', this.markerUrl);
    // console.log('modelUrl', this.modelUrl);
  }

  beforeUnmount() {
    console.log('beforeUnmount gege');
    document.body.style.overflow = null || '';
    document.body.style.height = null || '';
    document.body.style.width = null || '';
    document.body.style.marginLeft = null || '';
    document.body.style.marginTop = null || '';
    // Hapus gaya CSS lain yang ditambahkan sebelumnya
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
