<template>
  <div class="skill-card">
    <h4 class="title">{{ title }}</h4>
    <div class="skill-progress">{{ progress }}</div>
    <div class="work-percentage">
      <span>
        <p>{{ week }}</p>
        <p>Last Week</p>
      </span>
      <span>
        <p>{{ mounth }}</p>
        <p>Last Mounth</p>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "skills",
  props: ["title", "progress", "week", "mounth"],
};
</script>
<style lang="scss" scoped>
.skill-card {
  border-radius: 5px;
  transition: 0.2s;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 25px;
  .title {
    text-align: center;
    color: #333;
    font-weight: bold;
  }
  .skill-progress {
    height: 150px;
    margin: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 25px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 7px solid #eee;
      border-radius: 50%;
      width: 130px;
      height: 130px;
      transition: 0.2s;
    }
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 7px solid #b1b493;
      border-right-color: transparent;
      z-index: 2;
      border-radius: 50%;
      width: 130px;
      height: 130px;
      transition: 0.2s;
    }
  }
  .work-percentage {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    span {
      display: block;
      flex-basis: 50%;
      p {
        margin-bottom: 5px;
        font-weight: bold;
      }
      p:nth-of-type(1) {
        font-size: 20px;
        color: #b1b493;
      }
      p:nth-of-type(2) {
        font-size: 14px;
        color: #b5b5b5;
      }
      &:last-of-type {
        border-left: 1px solid rgb(218, 218, 218);
      }
    }
  }
  &:hover {
    background-color: #b1b493;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    .title {
      color: #fff;
    }
    .skill-progress {
      color: #fff;
      &::after {
        border-color: rgba(51, 51, 51, 0.308);
      }
      &::before {
        border: 7px solid #fff;
        border-right-color: transparent;
      }
    }
    .work-percentage {
      span {
        p:nth-of-type(1) {
          color: #fff;
        }
        p:nth-of-type(2) {
          color: rgb(253, 255, 221);
        }
        &:last-of-type {
          border-left: 1px solid rgb(253, 255, 221);
        }
      }
    }
  }
}
</style>