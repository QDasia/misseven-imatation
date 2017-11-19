<template>
	<transition name="slide">
	<div id="sidebar" v-show="show" @click="handleClick()">
		<router-link to="/login" tag="a" class="side-row side-user">
			<div class="avatar"></div>
			<div class="click-login">
				<span class="side-username">点击登录</span>
			</div>
		 </router-link>
		 <router-link to="/index/recommend" tag="a" class="side-row side-home side-icon">
			M-主站
		 </router-link>
		 <router-link to="/index/recommend" tag="a" class="side-row side-news side-icon">
			M-新闻
		 </router-link>
		 <router-link to="/index/recommend" tag="a" class="side-row side-audio side-icon">
			M-直播
		 </router-link>
		<!-- <a href="#" class="side-row side-user">
			<div class="avatar"></div>
			<div class="click-login">
				<span class="side-username">点击登录</span>
			</div>
		</a>
		<a href="#" class="side-row side-home side-icon">M-主站</a>
		<a href="#" class="side-row side-news side-icon">M-新闻</a>
		<a href="#" class="side-row side-audio side-icon">M-直播</a> -->
	</div>
	</transition>
</template>

<script>
export default {

  name: 'sidebar',

  data () {
    return {

    }
  },
  methods:{
  	handleClick(){
  		this.$emit("ev",false)
  	}
  },
  props:["show"]
}
</script>

<style lang="scss" scoped>
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
#sidebar{
	position: fixed;
	top: 40px;
	left:0;
	background: #000;
	color:#fff;
	width:100%;
	height:100%;
	z-index:999
}
.side-row{
	color:#fff;
	display: block;
    position: relative;
    height: 38px;
    width: 100%;
    background: #3d3d3d;
    margin-bottom: 1px;
}
.side-user{
	height: 110px;
	padding: 20px 30px;
	margin-bottom: 20px;
	.avatar{
		background-image: url("../../assets/header.jpg");
		position: relative;
	    float: left;
	    width: 70px;
	    height: 70px;
	    border-radius: 50%;
	    background-position: 50%;
	    background-repeat: no-repeat;
	    background-size: cover;
	}
	.click-login{
		float: left;
	    height: 100%;
	    width: calc(100% - 150px);
	    padding: 10px 20px;
	    display: flex;
	    flex-direction: column;
	    justify-content: center;
	}
	.side-username{
		font-size: 16px;
	}

}
.side-row:after{
	content:"";
	display: block;
	position: absolute;
	top: calc((100% - 14px) / 2);
    right: 10px;
    height: 14px;
    width: 8px;
    background-image: url("../../assets/detail.png");
    background-position: 0 -115px;
    background-size: 151px 129px;
}
.side-news:before {
    background: url("https://static.missevan.com/assets/m/images/build/sprite-svg.33256674.svg") -2px -2px/40px 20px;
    content: "";
    display: block;
    position: absolute;
    top: 11px;
    left: 10px;
    height: 16px;
    width: 16px;
    background-repeat: no-repeat;
}
.side-home:before{
	background: url("https://static.missevan.com/assets/m/images/build/sprite-svg.33256674.svg") -22px -2px/40px 20px;
	content: "";
    display: block;
    position: absolute;
   top: 11px;
   left: 10px;
    height: 16px;
    width: 16px;
    background-repeat: no-repeat;
}
.side-audio:before{
	background: url("https://static.missevan.com/assets/m/images/build/sprite-svg.33256674.svg") -22px -2px/40px 20px;
	content: "";
    display: block;
    position: absolute;
   top: 11px;
   left: 10px;
    height: 16px;
    width: 16px;
    background-repeat: no-repeat;
}
.side-icon{
	line-height: 38px;
    font-size: 16px;
    padding: 0 10px;
    padding-left: 36px;
}
.slide-enter-active {
  animation: bounce-in .5s;
  left:0;
}
.slide-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translateX(100%);
    //opacity: 0;
  }
  100% {
    transform: translateX(0px);
    //opacity: 1;
  }
}
</style>