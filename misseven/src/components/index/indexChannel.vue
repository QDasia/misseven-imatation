<template>
	<div class="indexChannel">
		<div class="head">
			<div class="title">
				<div class="indexTitle channel">
					<i></i>频道
				</div>
			</div>
			<div class="nav">
				<a class="indexNav" href="/channels">
					更多
				</a>
			</div>
		</div>
		<div class="body">
			<a class="channel" href="#" v-for="data in channel">
				<div class="cover" >
					<img :src="data.smallpic" >
					<div class="follow">
					    <span>{{data.follow_num}}</span>
					</div>
				</div>
				<div class="title">{{data.name}}</div>
			</a>
		</div>
	</div>
</template>

<script>
export default {

  name: 'indexChannel',

  data () {
    return {

    }
  },
  props:["channel"]
}
</script>

<style lang="scss" scoped>
 .indexChannel{
    	display: block;
	    position: relative;
	    width: 100%;
	    padding-bottom: 16px;
	    margin: 10px auto;
	    border: 1px solid #eee;
}
.head{
	height: 40px;
    line-height: 40px;
    display: flex;
    position: relative;
    justify-content: space-between;
    padding: 0 14px;
    .title{
    	font-size: 16px;
    	display:inline-block;
    }
    .indexTitle{
    	    width: 100px;
    	    //text-align: center;
	        font-size: 16px;
	        color: #000;

    }
    .indexTitle i{
    	background-image: url("../../assets/nav.png");
    	background-size: 86px 86px;
    	position: relative;
	    top: 4px;
	    margin-right: 5px;
	    height: 20px;
	    width: 20px;
	    display:inline-block;
	    background-repeat: no-repeat;
    }
    .indexNav{
    	display: inline-block;
    	max-width: 66px;
    	text-align: center;
    	font-size: 13px;
    	color: #9e9e9e;
    }
    .channel i{
    	background-position: -44px -44px;
    }
    .nav{
    	    width: 50px;
    	font-size: 14px;
    	color: #9e9e9e;
    	display: inline-block;
    }
    .nav:after{
    	content: "";
    	height: 16px;
    	width: 16px;
    	display: inline-block;
    	position: relative;
    	top: 3px;
    	right: -3px;
    	background-image: url(../../assets/detail.png);
    	background-position: -62px -93px;
    	background-size: 151px 129px;
    }
}
.body{
	flex-wrap: wrap;
	min-height: 170px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 14px;
    .channel{
	    width: calc(50vw - 28px);
		margin: 3px;
		display: inline-block;
	    margin: 5px;
	    padding: 0;
    }
    .cover{
    	width: 100%;
    	height: calc((50vw - 28px) / 1.5);
    	display: block;
	    overflow: hidden;
	    position: relative;
	    border-radius: 4px;
	    background-repeat: no-repeat;
	    background-position: 50%;
	    background-size: 100%;
	    img{
	    	width:100%;
	    	height:100%;
	    }
	    .follow{
	    	position: absolute;
	    	    top: 0;
	    	    right: 0;
	    	    background-image: linear-gradient(90deg,transparent,rgba(0,0,0,.2));
	    	    width: 80px;
	    	    height: 20px;
	    	    padding: 0 5px;
	    	    text-align: right;
	    	    border-top-right-radius: 4px;
	    	    span{
	    	    	float: right;
    display: inline-block;
    position: relative;
    height: 20px;
    line-height: 20px;
    padding-left: 18px;
    color: #fff;
    font-size: 12px;
    text-shadow: 0 1px 1px rgba(0,0,0,.7);
	    	    }
	    	    span:before{
	    	    		    content: "";
	    	    		    position: absolute;
	    	    		    top: 4px;
	    	    		    left: 0;
	    	    		    width: 15px;
	    	    		    height: 13px;
	    	    		    background-image: url("../../assets/icon.png");
	    	    		    background-position: -18px -26px;
	    	    		    background-size: 56px 55px;
	    	    }
	    }
    }
}
.title{
	margin-top: 3px;
	    width: 100%;
	    height: 40px;
	    word-break: break-all;
	    text-overflow: ellipsis;
	    overflow: hidden;
	    display: -moz-box;
	    display: -webkit-box;
	    box-orient: vertical;
	    line-height: 20px;
	    display: block;
        color: #616161;
        font-size: 13px;
}
</style>