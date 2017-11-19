<template>
	<footer>
		<div class="content">
			<button>客户端</button>
			<i class="logo-cat"></i>
			<button @click="reTop()">返回顶部</button>
		</div>
		<div class="bottom">MissEvan弹幕音频网 京ICP备:14055174号-1</div>
	</footer>
</template>

<script>
export default {

  name: 'footer',

  data () {
    return {
    	
    }
  },
  methods:{
  	reTop(){
  		document.documentElement.scrollTop=document.body.scrollTop=0;
  	}
  }
}
</script>

<style lang="scss" scoped>
footer{
	display: flex;
	justify-content: space-around;
    width: 100%;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 70px;
    padding: 10px 20px;
    color: #9e9e9e;
    font-size: 14px;
}
.content{
	    display: flex;
	    justify-content: space-around;
    	width: 100%;
    	button{
    		color: #9e9e9e;
		    border: none;
		    width: 60px;
		    background: transparent;
    	}
    	i{
    		height: 16px;
    		width: 16px;
    		background-image: url("../../assets/detail.png");
    		background-position: -98px -93px;
    		background-size: 151px 129px;
    	}
    	.bottom{
    		width: 100%;
		    text-align: center;
		    font-size: 12px;
    	}
}
</style>