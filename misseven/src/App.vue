<template>
<div id="app">
  <navbar>
    <i class="head-menu" @click="isShow=!isShow"></i>
  </navbar>
  <sidebar :show="isShow" @ev="handleC"></sidebar>
  <section>
    <router-view></router-view>
  </section>
  <foote></foote>
</div>
</template>

<script>
import navbar from "@/components/common/navbar.vue";
import sidebar from "@/components/common/sidebar.vue";
import foote from "@/components/common/footer.vue";
export default {
  data(){
    return {
      isShow:false
    }
  },
  components:{
    navbar,
    sidebar,
    foote
  },
  methods:{
    handleC(value){
      this.isShow=value;
    }
  }
}
</script>

<style lang="scss">

*{
	margin:0;
	padding:0;
	box-sizing: border-box;
  text-decoration: none;
  outline: none;
}
html,body{
	width:100%;
	height:100%;
}
section{
  position:relative;
  margin-top: 40px;
}
body{
  background-color: #f5f5f5;
}

</style>
