<template>
  <div class="container-custom" v-if="!isRun">
    <div class="row py-5">
      <div class="col">
        <div v-if="product">
          <h3 class="fw-bolder">{{ product.name }}</h3>
          <img :src="product.imageUrl" :alt="product.name" class="img-fluid"/>
          <p>Product ID: {{ product.id }}</p>
        </div>
        <div v-else>
          <p>Product not found</p>
        </div>
        <div class="card-overlay card rounded-3">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, assumenda laboriosam?</p>
          <div class="row">
            <div class="col d-grid">
              <button class="btn btn-secondary btn-block" @click="goBack">Back</button>
            </div>
            <div class="col d-grid">
              <button class="btn btn-primary btn-block" @click="runARModel">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <RunModel 
      @close-modal="runARModel"
      :marker-url="markerUrl"
      :model-url="modelUrl"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import products from '@/data/products.json';
import RunModel from '@/components/RunModel.vue'
import { getRootUrl } from '@/utils/helpers';

interface Product {
  id: number;
  name: string;
  imageUrl: string;
}

@Options({
  components: {
    RunModel
  }
})

export default class ProductDetail extends Vue {
  product: Product | undefined = undefined;
  isRun = false;
  markerUrl = '';
  modelUrl = '' 

  runARModel() {
    this.isRun = !this.isRun
  }

  @Watch('isRun')
  onShowModalChanged(newVal: boolean) {
    if (!newVal) {
      this.stopCamera();
    }
  }

  stopCamera() {
    try {
      // Find and stop the video stream
      const videoElements = document.querySelectorAll('video');
      videoElements.forEach(videoElement => {
        const stream = videoElement.srcObject as MediaStream;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach(track => track.stop());
        }
        // Remove the video element from the DOM
        videoElement.parentNode?.removeChild(videoElement);
      });
    } catch (error) {
      console.error('Error stopping camera:', error);
    }
  }

  created() {
    const rootUrl = getRootUrl();
    const id = parseInt(this.$route.params.id as string, 10);
    this.product = products.map(item => ({...item, imageUrl: rootUrl + item.imageUrl})).find(product => product.id === id);
    this.markerUrl = rootUrl + '/marker/hiro_marker'
    this.modelUrl = rootUrl + '/marker/fi_buggy/scene.gltf'
    console.log('this.markerUrl', this.markerUrl);
    console.log('this.modelUrl', this.modelUrl);
  }

  goBack() {
    this.$router.go(-1); // Kembali ke halaman sebelumnya
  }
}
</script>

<style scoped>
.container-custom {
  position: relative;
  width: 100%;
  padding: 0 20px;
  height: 100vh;
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 476px) {
  .container-custom {
    max-width: 476px;
    padding: 0 20px;
    margin: auto;
  }
}

.card-overlay {
  position: absolute;
  bottom: 30px;
  width: 100%;
  min-height: 100px;
  box-shadow: 4px 4px 4px 0 #eee;
  text-align: left;
  padding: 20px;
}
</style>
