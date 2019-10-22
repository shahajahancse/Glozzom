<template>
  <div id="app">
    <nav class="navbar navbar-dark navbar-expand-md"  id="fize" uk-sticky="top: 100; animation: uk-animation-slide-top; bottom: #sticky-on-scroll-up">
      <div class="container">
        <a href="index.html" class="navbar-brand">Glozzom</a>
        <button class="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target="#navbarNab">
          <!-- <spam class="navbar-toggler-icon"></spam> -->
        </button>
        <div id="navbarNab" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/services">Services</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/blog">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>


// Now the app has started!

  export default {
  name: 'app',
  data () {
    return {
       
    }
  }
}

  </script>

