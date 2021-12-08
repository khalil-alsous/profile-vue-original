<template>
  <div class="portfolio">
    <!-- Hero section -->
    <div class="hero">
      <div class="main-hiding">
        <p>my Work</p>
        <h1>My Portfolio</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          optionumquam reprehenderit expedita quasi cupiditate.
        </p>
      </div>
    </div>
    <!-- projects section -->
    <section class="projects">
      <div class="heading">
        <h2>Some Of My Work</h2>
      </div>
      <carousel>
        <slide class="slide">
          <img src="../assets/p1.jpg" alt="" />
          <div class="details">
            <h3>Project One</h3>
            <span>
              <p>joi bark</p>
              <a href="#">For More</a>
            </span>
          </div>
        </slide>
        <slide class="slide">
          <img src="../assets/p4.jpg" alt="" />
          <div class="details">
            <h3>Project One</h3>
            <span>
              <p>joi bark</p>
              <a href="#">For More</a>
            </span>
          </div>
        </slide>
        <slide class="slide">
          <img src="../assets/p6.jpg" alt="" />
          <div class="details">
            <h3>Project One</h3>
            <span>
              <p>joi bark</p>
              <a href="#">For More</a>
            </span>
          </div>
        </slide>
        <slide class="slide">
          <img src="../assets/p3.jpg" alt="" />
          <div class="details">
            <h3>Project One</h3>
            <span>
              <p>joi bark</p>
              <a href="#">For More</a>
            </span>
          </div>
        </slide>
        <slide class="slide">
          <img src="../assets/p7.jpg" alt="" />
          <div class="details">
            <h3>Project One</h3>
            <span>
              <p>joi bark</p>
              <a href="#">For More</a>
            </span>
          </div>
        </slide>
        <slide class="slide">
          <img src="../assets/p5.jpg" alt="" />
          <div class="details">
            <h3>Project One</h3>
            <span>
              <p>joi bark</p>
              <a href="#">For More</a>
            </span>
          </div>
        </slide>
        <slide class="slide">
          <img src="../assets/p2.jpg" alt="" />
          <div class="details">
            <h3>Project One</h3>
            <span>
              <p>joi bark</p>
              <a href="#">For More</a>
            </span>
          </div>
        </slide>
      </carousel>
    </section>

    <!-- footer section -->
    <mainFooter></mainFooter>
  </div>
</template>
<script>
import mainFooter from "../components/mainFooter.vue";
export default {
  components: {
    mainFooter,
  },
};
</script>
<style lang="scss" scoped>
.portfolio {
  .hero {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    min-height: 100vh;
    background-image: url("../assets/b8.jpg");
    background-size: cover;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    .main-hiding {
      h1 {
        color: #fff;
        font-size: 50px;
      }
      p:nth-of-type(1) {
        font-size: 18px;
      }
      p:nth-of-type(2) {
        font-size: 18px;
      }
    }
    @media (max-width: 767px) {
      & {
        border-radius: unset;
      }
    }
  }
  .projects {
    padding: 60px 20px 0;
    .heading {
      h2 {
        width: fit-content;
        text-align: left;
        font-weight: bold;
        color: #396069;
        padding-bottom: 15px;
        margin-bottom: 60px;
        margin-left: 10px;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #00d1b2;
        }
        &::after {
          content: "";
          position: absolute;
          bottom: -7px;
          left: 0;
          width: 14px;
          height: 14px;
          background-color: #4b8491;
          transform: rotate(45deg);
        }
      }
    }
    .slide {
      position: relative;
      flex-basis: 40%;
      justify-content: space-between;
      margin: 0 12px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      border-radius: 5px;
      overflow: hidden;
      img {
        max-width: 100%;
        border-radius: 5px;
        transition: 0.5s;
      }
      .details {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #31de79;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        padding: 15px 20px;
        opacity: 0;
        transition: 0.5s;
        h3 {
          font-size: 20px;
          color: #fff;
          text-align: left;
        }
        span {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          p {
            margin-bottom: 0;
            color: rgba(255, 255, 255, 0.8);
            text-transform: uppercase;
          }
          a {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            &:hover {
              color: #fff;
              text-decoration: underline;
            }
          }
        }
      }
      &:hover {
        img {
          transform: scale(1.2);
          filter: blur(0.7px);
        }
        .details {
          opacity: 1;
        }
      }
      @media (max-width: 767px) {
        & {
          flex-basis: 80%;
        }
        &:nth-of-type(5),
        &:nth-of-type(6),
        &:nth-of-type(7) {
          display: none;
        }
      }
    }
  }
}
</style>


