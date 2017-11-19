<template>
		<div id="header">
			<div class="head-left">
			
				<img src="../../assets/missevan.png" alt="logo" class="logo">
			</div>
			<div class="head-right">
				<a href="#">
					<i class="head-search"></i>
				</a>
				<slot></slot>
			</div>
		</div>
</template>

<script>
export default {

  name: 'navbar',

  data () {
    return {

    }
  }
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
#header {
	padding:10px;
	display: block;
	position: fixed;
	left:0;
	top:0;
	height: 40px;
	width:100%;
	z-index:22;
	background:#000000;
	.head-left{
		float:left;
		.logo{
			width: 109px;
			height: 20px;
		}
	}
	.head-right{
		float:right;
		.head-search{
				display:inline-block;
				width: 22px;
				height: 20px;
				background-image: url("../../assets/detail.png");
				background-size: 151px 129px;
				background-position: -93px -42px;
				margin: 0 20px;
		}
		.head-menu{
				display:inline-block;
				margin: 0;
				background-position: -93px -20px;
				width: 22px;
				height: 20px;
				background-image: url("../../assets/detail.png");
			    background-size: 151px 129px;
		}
	}
}
</style>