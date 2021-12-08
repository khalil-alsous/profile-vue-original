<template>
  <div class="Contact">
    <section class="hero">
      <div class="main-hiding">
        <p>contact</p>
        <h1>Contact With Me</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque optio
          numquam reprehenderit expedita quasi cupiditate.
        </p>
      </div>
      <div class="info">
        <div class="box">
          <vue-fontawesome
            icon="map-marker"
            size="2"
            class="icon"
            color="#fff"
          ></vue-fontawesome>
          <h1>address</h1>
          <p>198 West 21th Street, Suite 721 New York NY 10016</p>
        </div>
        <div class="box">
          <vue-fontawesome
            class="icon"
            icon="phone"
            size="2"
            color="#fff"
          ></vue-fontawesome>
          <h1>contact number</h1>
          <p>+ 1235 2355 98</p>
        </div>
        <div class="box">
          <vue-fontawesome
            icon="telegram"
            class="icon"
            size="2"
            color="#fff"
          ></vue-fontawesome>
          <h1>email address</h1>
          <p>info@yoursite.com</p>
        </div>
        <div class="box">
          <vue-fontawesome
            class="icon"
            icon="globe"
            size="2"
            color="#fff"
          ></vue-fontawesome>
          <h1>website</h1>
          <p>yoursite.com</p>
        </div>
      </div>
    </section>
    <form class="contact">
      <input type="text" name="name" placeholder="Your Name" />
      <input type="email" name="name" placeholder="Your Email" />
      <input type="text" name="subject" placeholder="Subject" />
      <textarea
        name="message"
        cols="30"
        rows="5"
        placeholder="Your Message"
      ></textarea>
      <button type="submit">Send Message</button>
    </form>
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
.hero {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  min-height: 100vh;
  background-image: url("../assets/b3.jpg");
  background-size: cover;
  padding: 20px;
  padding-top: 50px;
  .info {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 25px;
    .box {
      background-image: linear-gradient(to right, #9af569, #33de78);
      padding: 25px;
      border-radius: 5px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      transition: 0.5s;
      .icon {
        background-color: #69e06a;
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        border-radius: 50%;
      }
      h1 {
        font-size: 25px;
        margin: 30px 0 15px 0;
        text-transform: capitalize;
        color: #fff;
      }
      p {
        color: rgba(255, 255, 255, 0.8);
      }
      &:hover {
        background-image: linear-gradient(to right, #33de78, #9af569);
      }
    }
  }
}

.contact {
  padding: 50px;
  background-color: #f8f9fa;
  margin: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  & {
    @media (max-width: 767px) {
      & {
        padding: 20px;
      }
    }
  }
  input,
  textarea {
    border: 1px solid rgb(218, 218, 218);
    border-radius: 5px;
    margin-bottom: 15px;
    padding: 15px;
    transition: 0.2s;
    outline: 1px solid transparent;
    color: #666;
    &::placeholder {
      color: #888;
    }
    &:focus {
      outline: 1px solid rgb(150, 150, 150);
    }
  }
  button {
    width: 200px;
    padding: 15px 30px;
    border-radius: 40px;
    border: none;
    color: #fff;
    transition: 0.2s;
    font-size: 17px;
    margin-top: 10px;
    background-image: linear-gradient(to right, #9af569, #33de78);
    &:hover {
      background-image: linear-gradient(to right, #33de78, #9af569);
    }
    @media (max-width: 767px) {
      & {
        width: 154px;
        padding: 15px 20px;
      }
    }
  }
}
footer {
  margin-top: 0;
}
</style>