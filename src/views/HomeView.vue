<template>
  <div class="container-custom">
    <div class="row py-5">
      <!-- {{ console.log(items[0].imageUrl) }} -->
      <div class="col-6 mb-4" v-for="item in items" :key="item.id">
        <router-link :to="{ name: 'DetailsView', params: { id: item.id } }">
          <div class="card rounded-4 cursor-pointer">
            <img :src="item.imageUrl" class="card-img-top rounded-4 rounded-bottom-0" :alt="item.name">
            <div class="card-body">
              <h6 class="card-title fw-bolder">{{ item.name }}</h6>
            </div>
          </div>
        </router-link >
      </div>
    </div>
    <!-- {{ name }}
    <input type="text" class="form-control" v-model="name" />
    <button type="button" class="btn btn-primary" v-on:click="greeting">Click</button> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import products from '@/data/products.json';

interface Product {
  id: number;
  name: string;
  imageUrl: string;
}

@Options({
  components: {
    HelloWorld,
  },
})

export default class HomeView extends Vue {
  items: Product[] = products;
}
</script>

<style scoped>
.card {
  cursor: pointer;
}
a {
  text-decoration: none !important;
}
.card:hover {
  border-color: #0d6efd;
}

.container-custom {
  position: relative;
  width: 100%;
  padding: 0 20px;
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 476px) {
  .container-custom {
    max-width: 476px;
    padding: 0 20px;
    margin: auto;
  }
}
</style>
