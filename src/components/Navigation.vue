<template>
  <b-navbar>
    <b-navbar-nav>
      <ul ref="nav">
        <b-navbar-brand class="image-logo" @click="toggleNav">
          <img :src="imagePath" height="20px" />
        </b-navbar-brand>

        <li v-for="(link, index) in navLinks" :key="index">
          <router-link :to="link.path" :style="{ color: linkColor || '#000' }">
            {{ link.text }}
            <i :class="link.icon" />
          </router-link>
        </li>

        <b-nav-item-dropdown v-if="cities" text="STORES">
          <div v-for="city in cities" :key="city.name">
            <b-dropdown-item>{{ city.name }}</b-dropdown-item>
          </div>
        </b-nav-item-dropdown>
      </ul>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      cities: [true],
      name: [],
    };
  },
  created() {
    fetch("https://avancera.app/cities/")
      .then((response) => response.json())
      .then((result) => {
        this.cities = result;
      });
  },
  props: [
    "navLinks",
    "linkColor",
    "imagePath",
    "hoverBackground",
    "background",
  ],
  methods: {
    toggleNav() {
      const nav = this.$refs.nav.classList;
      nav.contains("active") ? nav.remove("active") : nav.add("active");
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  top: 0;
  width: 100%;
  background: white;
  position: absolute;
  align-items: stretch;

  ul {
    margin-bottom: 20px;
    display: flex;
    height: 100%;
    align-items: center;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;

    a {
      text-decoration: none;
      font-size: 16px;
      font-family: "Avenir", Helvetica, Arial, sans-serif;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  li {
    list-style-type: none;
    padding: 10px;
    align-items: right;
  }
  img {
    padding-right: 30px;
  }
}

@media screen and (max-width: 759px) {
  nav {
    ul {
      z-index: 9999;
      top: 45px;
      left: -130px;
      position: fixed;
      width: 130px;
      flex-direction: column;
      transition: 300ms ease all;

      &.active {
        left: 0px;
      }
      .image-logo {
        position: fixed;
        padding-left: 20px;
        top: 10px;
        left: 0px;
      }
      li {
        padding-left: 20px;
        width: 100%;
        padding-right: 0;
        background: white;
        border: black;
      }
      a {
        margin-left: 0px;
        font-size: 12px;
      }
    }
  }
  img {
    height: 12px;
  }
}
@media screen and (min-width: 759px) {
  img {
    padding-left: 15px;
  }
}
</style>