<template>
  <div class="about">
    <!-- hero section -->
    <div class="hero">
      <div class="cont-img">
        <!-- <img
          src="https://preview.colorlib.com/theme/plataforma/images/xabout.jpg.pagespeed.ic.VTA39KU9OF.webp"
          alt=""
        /> -->
      </div>
      <div class="info">
        <p class="note">about me</p>
        <h1 class="heading">What is all about me?</h1>
        <p>
          Lorem ipsum dolor sit amet accusantium expedita provident laudantium.
          Illum, tenetur. Iste obcaecati nesciunt tenetur reiciendis!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
          accusamus incidunt corporis quo fuga! Obcaecati doloribus, harum
          officiis in quos cumque assumenda nesciunt vitae qui aliquid minus
          facere porro deleniti.
        </p>

        <div class="note">my progress</div>
        <div class="heading">Progress in projects</div>
        <div class="progress">
          <div
            class="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            style="width: 15%"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            js
          </div>
          <div
            class="
              progress-bar progress-bar-striped progress-bar-animated
              bg-success
            "
            role="progressbar"
            style="width: 30%"
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            laravel
          </div>
          <div
            class="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            style="width: 20%"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            vue js
          </div>
        </div>
        <button type="button" class="btn">For More</button>
      </div>
    </div>

    <!-- stats section -->
    <div class="stats">
      <div class="main-hiding">
        <p>my stats</p>
        <h1>All Stats</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque optio
          numquam reprehenderit expedita quasi cupiditate.
        </p>
      </div>
      <div class="cards">
        <div class="card">
          <span>
            <vue-fontawesome icon="tasks" size="3"></vue-fontawesome>
          </span>
          <h1>
            <div class="counter" data-goal="144">0</div>
          </h1>
          <p>Projects</p>
        </div>
        <div class="card">
          <span>
            <vue-fontawesome icon="code" size="3"></vue-fontawesome>
          </span>
          <h1>
            <div class="counter" data-goal="130">0</div>
          </h1>
          <p>Programming language</p>
        </div>
        <div class="card">
          <span>
            <vue-fontawesome icon="users" size="3"></vue-fontawesome>
          </span>
          <h1>
            <div class="counter" data-goal="107">0</div>
          </h1>
          <p>CLients</p>
        </div>
        <div class="card">
          <span>
            <vue-fontawesome
              icon="calendar"
              size="3"
              class="icon"
            ></vue-fontawesome>
          </span>
          <h1>
            <div class="counter" data-goal="120">0</div>
          </h1>
          <p>Years of Experience</p>
        </div>
      </div>
    </div>
    <mainFooter></mainFooter>
  </div>
</template>

<script>
import mainFooter from "@/components/mainFooter.vue";
export default {
  components: {
    mainFooter,
  },
  mounted() {
    let counter = document.querySelectorAll(".counter");
    let section = document.querySelector(".hero");
    let started = false;
    window.onscroll = () => {
      if (window.scrollY >= section.offsetTop - 10) {
        if (!started) counter.forEach((el) => startCount(el));
      }
      started = true;
    };
    function startCount(el) {
      let goal = el.dataset.goal;
      let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) clearInterval(count);
      }, 5000 / goal);
    }
  },
};
</script>

<style lang="scss" scoped>
.about {
  .hero {
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .cont-img {
      flex-basis: 45%;
      background-image: url("../assets/00.jpg");
      background-size: cover;
      border-top-left-radius: 5px;
      opacity: 0.8;
      box-shadow: rgba(0, 0, 0, 0.4) 1.95px 0px 2.6px;
    }
    .info {
      flex-basis: 50%;
      padding: 60px 20px 60px 0;
      text-align: left;
      .heading {
        font-weight: bold;
        color: #333;
        font-size: 35px;
        letter-spacing: 1.7px;
      }
      .heading:nth-of-type(2) {
        font-size: 20px;
      }
      .note {
        color: #b2b594;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 14px;
        margin-bottom: 10px;
      }
      p:nth-of-type(2),
      p:nth-of-type(3) {
        line-height: 1.8;
        font-weight: 400px;
        margin: 1.6rem 0;
      }
      p:nth-of-type(2) {
        color: #b2b594;
      }
      p:nth-of-type(3) {
        color: #999;
      }
      .progress {
        margin: 1rem 0;
        .progress-bar:nth-of-type(3) {
          background-color: #888;
        }
      }
      .btn {
        margin-top: 30px;
        background-color: #477b88;
        color: #fff;
        padding: 7px 25px;
        transition: 0.2s;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

        &:hover {
          opacity: 0.8;
        }
      }
    }
    @media (max-width: 767px) {
      & {
        flex-direction: column-reverse;
        .cont-img {
          // display: none;
          min-height: 500px;
        }
        .info {
          padding: 60px 20px;
        }
      }
    }
  }

  .stats {
    padding: 80px 20px 20px 20px;
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 25px;
      .card {
        padding: 30px 20px;
        background-color: #356574;
        border: none;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        color: #fff;
        transition: 0.2s;
        h1 {
          margin: 20px 0;
        }
        p {
          color: #cbcbcb;
        }
        .icon {
          transition: 0.2s;
        }
        &:hover {
          background-color: #35657452;
          color: #356574;
          p {
            color: #356574;
          }
          .icon {
            color: #356574;
          }
        }
      }
    }
  }
}
</style>