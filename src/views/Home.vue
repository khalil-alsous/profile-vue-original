<template>
  <div class="home">
    <!-- hero section -->
    <div class="hero">
      <div class="img-cont">
        <img src="../assets/33.png" alt="" />
      </div>
      <div class="content">
        <p>my intro</p>
        <h1>How Am I</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque optio
          numquam reprehenderit expedita quasi cupiditate. Mollitia, amet
          adipisci? Asperiores, dicta doloremque! Aut error odio vitae maxime
          necessitatibus eveniet quos ad.
        </p>
        <table class="table">
          <tr>
            <td>Name:</td>
            <td>Khalil Alsous</td>
          </tr>
          <tr>
            <td>Date of birth:</td>
            <td>25/4/2002</td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>San Francisco CA 97987 USA</td>
          </tr>
          <tr>
            <td>Zip code:</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>cydenowitzki@gmail.com</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>+1-2234-5678-9-0</td>
          </tr>
        </table>
        <h2 class="project-completed">
          <span class="counter" data-goal="67">0</span>
          Project Completed
        </h2>
      </div>
    </div>
    <!-- skills section -->
    <div class="skills">
      <div class="main-hiding">
        <p>my intro</p>
        <h1>My Skills</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque optio
          numquam reprehenderit expedita quasi cupiditate.
        </p>
      </div>
      <div class="container-skills">
        <skills
          v-for="skill in skills"
          :key="skill.id"
          :title="skill.title"
          :progress="skill.progress"
          :week="skill.mounthWorkPercentage"
          :mounth="skill.mounthWorkPercentage"
        ></skills>
      </div>
    </div>

    <!-- Footer -->
    <mainFooter></mainFooter>
  </div>
</template>

<script>
import skills from "@/components/skills.vue";
import mainFooter from "@/components/mainFooter.vue";
export default {
  name: "home",
  data() {
    return {
      skills: [
        {
          id: 1,
          title: "Html",
          progress: "90%",
          weekWorkPercentage: "20%",
          mounthWorkPercentage: "90%",
        },
        {
          id: 2,
          title: "Css",
          progress: "83%",
          weekWorkPercentage: "40%",
          mounthWorkPercentage: "65%",
        },
        {
          id: 3,
          title: "Javascript",
          progress: "60%",
          weekWorkPercentage: "76%",
          mounthWorkPercentage: "33%",
        },
        {
          id: 4,
          title: "Vue Js",
          progress: "70%",
          weekWorkPercentage: "78%",
          mounthWorkPercentage: "65%",
        },
        {
          id: 5,
          title: "Laravel",
          progress: "55%",
          weekWorkPercentage: "44%",
          mounthWorkPercentage: "76%",
        },
        {
          id: 6,
          title: "Wordpress",
          progress: "50%",
          weekWorkPercentage: "90%",
          mounthWorkPercentage: "98%",
        },
      ],
    };
  },
  components: {
    skills,
    mainFooter,
  },
  mounted() {
    let counter = document.querySelector(".counter");
    function startCount(el) {
      let goal = el.dataset.goal;
      let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) clearInterval(count);
      }, 3000 / goal);
    }
    startCount(counter);
  },
};
</script>

<style lang="scss" scoped>
.home {
  // hero section
  .hero {
    padding: 60px 20px;
    min-height: calc(100vh - 100px);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    .img-cont {
      flex-basis: 48%;
      img {
        width: 100%;
        animation: image 5s infinite;
      }
    }
    @keyframes image {
      0% {
        transform: translateY(-10px);
      }
      50% {
        transform: translateY(10px);
      }
      100% {
        transform: translateY(-10px);
      }
    }
    .content {
      flex-basis: 50%;
      text-align: left;
      h1:nth-of-type(1) {
        font-weight: bold;
        color: #333;
        font-size: 35px;
        letter-spacing: 1.7px;
      }
      p:nth-of-type(1) {
        color: #b2b594;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 14px;
        margin-bottom: 10px;
      }
      p:nth-of-type(2) {
        color: #999;
        line-height: 1.8;
        font-weight: 400px;
        margin: 1.6rem 0;
      }
      .table {
        border-collapse: revert;
        margin-bottom: 1.6rem;
        tr {
          td {
            font-weight: bold;
            padding: 2px 0px;
            letter-spacing: 0.5px;
          }
          td:first-of-type {
            color: #444;
          }
          td:last-of-type {
            color: #b2b594;
          }
        }
      }
      .project-completed {
        font-weight: bold;
        color: #2a454e;
        font-size: 28px;
        span {
          margin-right: 5px;
          color: #00a88f;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .hero {
      flex-direction: column-reverse;
      padding-bottom: 0;
      .img-cont {
        margin-top: 50px;
      }
    }
  }

  // skills section
  .skills {
    padding: 60px 20px;
    .container-skills {
      padding: 0 10px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
      gap: 40px;
    }
  }
}
</style>