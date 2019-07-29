<template>
  <div id="app">
    <div class="wrapper">
        <vueSideBar/>
        <vuePageContent/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import vueSideBar from './components/vueSideBar'
import vuePageContent from './components/vuePageContent'
export default {
  name: 'App',
  components: {
    HelloWorld,vueSideBar,vuePageContent
  }
}
</script>

<style src='./assets/css/style4.css'></style>