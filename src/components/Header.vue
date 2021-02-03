<template>
  <div id="header">
    <div>
      <b-carousel
        id="carousel-1"
        :interval="4000"
        controls
        indicators
        style="text-shadow: 1px 1px 2px #333"
      >
        <!-- Text slides with image -->
        <b-carousel-slide img-width="1024" img-height="480">
          <template #img>
            <img
              class="d-block img-fluid w-100"
              :src="require('../assets/who.jpg')"
              alt="image slot"
            /> </template
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              :src="require('../assets/XianXiang_EatenByTigers-05.jpg')"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>

        <!-- Slides with image only -->

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              :src="require('../assets/XianXiang_EatenByTigers-01.jpg')"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>
<script>
export default {
  props: ["imagePath"],
};
</script>

<style scoped lang="scss">
#carousel-1 {
  width: 100%;
  margin-right: 15px;
}
h1 {
  position: absolute;
  top: 50%;
  left: 10%;
  position: left;
}
img {
  max-width: 100%;
  height: auto;
}
@media screen and (max-width: 759px) {
  h1 {
    font-size: 15px;
  }
}
</style>