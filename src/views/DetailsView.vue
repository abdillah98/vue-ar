<template>
  <div class="container-custom">
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
              <button class="btn btn-primary btn-block" @click="goToRunPage">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import products from '@/data/products.json';
import router from '@/router';

interface Product {
  id: number;
  name: string;
  imageUrl: string;
}

export default class ProductDetail extends Vue {
  product: Product | undefined = undefined;

  created() {
    const id = parseInt(this.$route.params.id as string, 10);
    this.product = products.find(product => product.id === id);
    console.log('this.product ', this.product);
  }

  goBack() {
    this.$router.go(-1); // Kembali ke halaman sebelumnya
  }

  goToRunPage() {
    this.$router.push('/run')
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
