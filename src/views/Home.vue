<template>
  <div class="home">
    <header>
      <Header />
    </header>

    <main>
      <mdb-container fluid class="container-fluid-mobile">
        <mdb-row>
          <mdb-col class="col-sm-12" id="container">
            <img
              class="img-fluid"
              :src="require('../assets/prev2-.jpg')"
            /><b-button
              :href="require('../assets/2021-Catalogue.jpg')"
              download="2021-Catalogue"
              id="button-1"
              pill
              variant="outline-dark"
              >Download our Catalogue &darr;</b-button
            >
          </mdb-col>
        </mdb-row>

        <mdb-row>
          <mdb-col class="col-sm-6" id="container">
            <img
              class="img-fluid"
              :src="require('../assets/greensofa-mobile.jpg')"
            /><b-button id="button" pill variant="outline-dark">Sofas</b-button>
          </mdb-col>
          <mdb-col class="col-sm-6" id="container">
            <img
              class="img-fluid"
              :src="require('../assets/warm-wall-mobile.jpg')"
            /><b-button id="button" pill variant="outline-dark"
              >Decorations</b-button
            >
          </mdb-col>
        </mdb-row>
        <mdb-row>
          <mdb-col class="col-sm-12" id="container">
            <img
              class="img-fluid"
              :src="require('../assets/blue-table-mobile.svg')"
            /><b-button id="button" pill variant="outline-dark"
              >Tables</b-button
            >
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </main>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import Header from "@/components/Header";
export default {
  components: {
    Header,
    mdbContainer,
    mdbRow,
    mdbCol,
  },
  props: ["imagePath"],
};
</script>

<style scoped lang="scss">
.home {
  z-index: 1;
  padding-top: 50px;
  margin-top: 30px;
}
header {
  width: 100%;
}
main {
  background-color: black;
}
#container {
  padding: 0;
  margin: 0;
}
#container #button {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  border-color: white;
  cursor: pointer;
  color: white;
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
  margin-right: -15px;
  margin-left: -15px;
}

@media screen and (min-width: 759px) {
  .container-fluid-2 {
    display: none;
  }

  .col-sm-12 img {
    width: 100%;
    height: 100%;
  }
}
@media screen and (max-width: 759px) {
  .home {
    padding-top: 30px;
    margin-top: 30px;
  }
  .container-fluid-2 {
    display: none;
  }
  #button {
    font-size: 10px;
  }
  #button-1 {
    font-size: 10px;
  }
}
</style>