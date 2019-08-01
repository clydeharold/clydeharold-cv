<template>
  <!-- Page Content  -->
  <div id="content">
    <md-card md-with-hover>
       <button type="button" id="sidebarCollapse" class="btn btn-info">
        <i style="padding:0" class="fas fa-align-left"></i>
      </button>

      <router-view/>
    </md-card>
  </div>
</template>

<script>
import vueHome from './vueHome'
export default {
  name: 'App',
  components: {
    vueHome
  }
}
</script>

<style>
.changemarg {
    margin:0 !important;
}
</style>
