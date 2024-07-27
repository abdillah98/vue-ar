<template>
  <div class="container-custom">
    <div class="row py-5">
      <div class="col">
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
            url="/marker/hiro_marker"
            smooth="true"
            smoothCount="10"
            smoothTolerance=".01"
            smoothThreshold="5"
          >
            <!-- as a child of the a-nft entity, you can define the content to show. here's a GLTF model entity -->
            <a-entity
              gltf-model="/marker/fi_buggy/scene.gltf"
              scale="5 5 5"
              position="50 150 0"
            >
            </a-entity>
          </a-nft>
          <!-- static camera that moves according to the device movemenents -->
          <a-entity camera></a-entity>
        </a-scene>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-custom {
  position: relative;
  width: 100%;
  padding: 0 20px;
  height: 100vh;
  overflow: hidden !important;
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 476px) {
  .container-custom {
    max-width: 476px !important;
    padding: 0 20px;
    margin: auto;
  }
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