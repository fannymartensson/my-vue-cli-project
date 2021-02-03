<template>
  <div class="catalogue">
    <div>
      <b-carousel
        id="carousel-1"
        :interval="4000"
        controls
        indicators
        background="#ffff"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
      >
        <!-- Text slides with image -->

        <!-- Slides with custom text -->

        <!-- Slides with image only -->
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              :src="require('../assets/method-draw-image (1).svg')"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              :src="require('../assets/prev3-.jpg')"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              :src="require('../assets/prev9-.jpg')"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
      <mdb-container fluid class="container-fluid-mobile">
        <mdb-row>
          <mdb-col class="col-sm-12" id="container">
            <img class="img-fluid" /><b-button
              :href="require('../assets/2021-Catalogue.jpg')"
              download="2021-Catalogue"
              id="button-1"
              pill
              variant="outline-dark"
              >Download our Catalogue &darr;</b-button
            >
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </div>
  </div>
</template>
<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  props: ["imagePath"],
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
  },
};
</script>
<style slang="scss">
.catalogue {
  padding-top: 50px;
  margin-top: 30px;
}
#container {
  padding: 0;
  margin: 0;
}

#container #button-1 {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  border-color: black;
  cursor: pointer;
  color: black;
}
.container-fluid-mobile {
  margin: 0;
  padding: 0;
  padding-top: 50px;
  padding-bottom: 50px;
  margin-right: -15px;
  margin-left: -15px;
}
@media screen and (max-width: 759px) {
  #button-1 {
    font-size: 10px;
  }
}
</style>