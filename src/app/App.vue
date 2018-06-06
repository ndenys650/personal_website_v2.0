<template>
  <div id="app">
    <div class="container-fluid">
      <NavBar />
      <div class="row align-items-center">
        <About />
        <Profile />
      </div>
    </div>
  </div>
</template>

<script>
import About from './components/About';
import Profile from './components/Profile';
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    NavBar,
    About,
    Profile
  }
};
</script>

<style>
html,
body {
  background: white;
}

#app {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
