<template>
<div id="app">
  <NavigationBar/>
  <div class="content">
    <router-view />
  </div>
  <Footer/>
</div>
</template>

<script>
import NavigationBar from '../src/components/NavigationBar.vue'
import Footer from '../src/components/Footer.vue'
export default {
  components: { NavigationBar, Footer}
}
</script>

<style>
html {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}

/* Header */
.header {
  display: flex;
  padding: 10px 100px 0px 100px;
  background-color: #5BDEFF;
  color: #1C454F;
}

.title {
  margin-top: 5px;
}

.title h1 {
  font-size: 30px;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
}

/* Footer */
.footer {
  height: 50px;
  padding: 20px 100px 0px 100px;
  background: #e3e3e3;
  font-size: 12px;
}

.footer a {
  color: #000;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}
.link{
  padding: 10px;
}
</style>
