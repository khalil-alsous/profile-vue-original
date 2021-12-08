<template>
  <footer class="text-center text-white">
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Facebook -->
        <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #3b5998"
          href="#!"
          role="button"
        >
          <vue-fontawesome
            icon="facebook"
            size="1"
            color="#fff"
          ></vue-fontawesome>
        </a>

        <!-- Twitter -->
        <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #55acee"
          href="#!"
          role="button"
        >
          <vue-fontawesome
            icon="twitter"
            size="1"
            color="#fff"
          ></vue-fontawesome>
        </a>

        <!-- Google -->
        <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #dd4b39"
          href="#!"
          role="button"
        >
          <vue-fontawesome
            icon="google"
            size="1"
            color="#fff"
          ></vue-fontawesome>
        </a>

        <!-- Instagram -->
        <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #ac2bac"
          href="#!"
          role="button"
        >
          <vue-fontawesome
            icon="instagram"
            size="1"
            color="#fff"
          ></vue-fontawesome>
        </a>

        <!-- Linkedin -->
        <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #0082ca"
          href="#!"
          role="button"
        >
          <vue-fontawesome
            icon="linkedin"
            size="1"
            color="#fff"
          ></vue-fontawesome>
        </a>
        <!-- Github -->
        <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #333333"
          href="#!"
          role="button"
        >
          <vue-fontawesome
            icon="github"
            size="1"
            color="#fff"
          ></vue-fontawesome>
        </a>
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3 copyright">© 2020 Copyright: Khalil Alsous</div>
    <!-- Copyright -->
  </footer>
</template>

<style lang="scss" scoped>
footer {
  margin-top: 60px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #eee;
  .container {
    section {
      .btn {
        border: none;
        transition: 0.2s;
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
  .copyright {
    background-color: #999;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
</style>