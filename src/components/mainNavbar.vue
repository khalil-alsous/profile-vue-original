<template>
  <nav class="nav">
    <div class="overlay">
      <div class="logo-cont">
        <img src="../assets/ll.png" alt="logo" />
      </div>
      <ul class="links">
        <router-link to="/" tag="li" class="link">
          <a href="#" class="link-text">Home</a>
        </router-link>
        <router-link to="about" tag="li" class="link">
          <a href="#" class="link-text">About</a>
        </router-link>
        <router-link to="portfolio" tag="li" class="link">
          <a href="#" class="link-text">Portfolio</a>
        </router-link>
        <router-link to="contact" tag="li" class="link">
          <a href="#" class="link-text">Contact</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navBar",
};
</script>

<style lang="scss" scoped>
.nav {
  background-image: url("../assets/photo.jpg");
  background-size: cover;
  width: 19vw;
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  .overlay {
    padding-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.466);
      z-index: -1;
    }
  }
  .logo-cont {
    margin-bottom: 30px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.61);
    padding-bottom: 30px;
    img {
      max-width: 100%;
      opacity: 0.8;
    }
  }
  .links {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 25px;
    .link {
      width: 100%;
      text-align: left;
      transition: 0.3s;
      margin-bottom: 20px;
      a {
        display: inline-block;
        background-color: #f8f9fa;
        border-radius: 5px;
        color: #333;
        padding: 8px 0;
        text-decoration: none;
        transition: 0.3s;
        width: 100%;
        text-align: center;
        opacity: 0.7;
        font-weight: bold;
      }
      &:hover {
        transform: translateY(-5px);
        a {
          text-align: center;
          opacity: 1;
        }
      }
      &.router-link-exact-active {
        a {
          opacity: 1;
          background-color: #fff;
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .nav {
    position: initial;
    width: 100%;
    min-height: fit-content;
    .links {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      .link {
        flex-basis: 45%;
      }
    }
  }
}
</style>