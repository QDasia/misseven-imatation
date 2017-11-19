<template>
	<div id="musicList">
		<div class="music-head">
			<div class="head-title">
				<div class="all-list">
					全部音单
				</div>
			</div>
			<div class="head-nav">
				<span class="xing">类型</span>
			</div>
		</div>
		<div class="music-body">
			<a  class="muslist" v-for="data in datalist" @click="musclick(data.id)">
			<!--这里a标签不要加上href否则会跳2次 style="background-image: url("//static.missevan.com/coversmini/201709/15/6733ed05404ea00a72b3ad5dc4be65a2170935.jpg");" -->
				<div class="muspic" >
					<img :src="cal(data.cover_image)" >
					<div class="sound-num">
						<span>90</span>
					</div>
				</div>
				<div class="title">{{data.title}}</div>
			</a>
			<button class="btn-text open-app">更多</button>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import router from "@/router";//index.js自动找
export default {

  name: 'musicList',

  data () {
    return {
    	datalist:[]
    }
  },
  mounted(){
  		axios.get('explore/tagalbum',{
  			params:{
  				order:0
  			}
  		}).then(res=>{
  			console.log(res.data.albums);
  			this.datalist=res.data.albums;
  		})
  },
  methods:{
  	cal(index){
  		return "https://static.missevan.com/coversmini/"+index;
  	},
  	musclick(id){
  		console.log(id);
  		router.push(`/album/${id}`);
  	}

  }
}
</script>

<style lang="scss" scoped>
	.music-head{
		height: 24px;
		line-height: 24px;
		display: flex;
		position: relative;
		justify-content: space-between;
		padding: 0 14px;
		margin: 10px 0;
	}
	.head-title{
		font-size: 16px;
		display:inline-block;
	}
	.all-list{
		margin: 0;
		font-size: 16px;
		display: block;
	    position: relative;
	    margin: 10px 0;
	    padding-left: 10px;
	}
	.all-list:before{
		content: "";
	    display: block;
	    position: absolute;
	    left: 0;
	    top: 10%;
	    height: 80%;
	    background-color: #000;
	    width: 4px;
	    border-radius: 4px;
	}
	.head-nav{
		font-size: 14px;
		color: #9e9e9e;
		display: inline-block;
	}
	.xing{
		display: block;
	    position: relative;
	    float: right;
	    background-color: #fff;
	    border: 1px solid #e0e0e0;
	    border-radius: 20px;
	    width: 64px;
	    height: 24px;
	    line-height: 24px;
	    font-size: 13px;
	    text-align: center;
	    color: #757575;
	    margin: 10px 0;
	}
	.xing:after{
		content: "";
	    display: block;
	    position: relative;
	    float: right;
	    top: 7px;
	    right: 12px;
	    width: 8px;
	    height: 8px;
	    box-sizing: border-box;
	    border: 1px solid #757575;
	    border-bottom: none;
	    border-left: none;
	    transform: rotate(45deg);
	}
	.music-body{
		flex-wrap: wrap;
	    padding: 10px 0;
	    min-height: 320px;
	    display: flex;
	    justify-content:space-around;
	    align-items: center;
	    margin: 0 14px;
	}
	.muslist{
		width: calc((100vw - 28px) / 2 - 10px);
    	margin: 0 0 10px;
	}
	.muspic{
		width: 100%;
	    height: calc((100vw - 28px) / 2 - 10px);
		border: none;
	    border: 1px solid #bdbdbd;
	    border-radius: 4px;
	    background-color: #fff;
	    display: block;
        overflow: hidden;
        position: relative;
        border-radius: 4px;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: 100%;
        overflow: visible;
        img{
        	width:100%;
        	height:100%;
        }
	}
	.sound-num{
		height: 36px;
	    background: linear-gradient(180deg,transparent,rgba(0,0,0,.26));
	    bottom: 0;
	    right: 0;
	    left: 0;
	    height: 18px;
	    line-height: 18px;
	    position: absolute;
        border-bottom-right-radius: 4px;
        span{
        	bottom: 0;
			text-shadow: 0.5px 0 1px #000;
			display: block;
			position: absolute;
			right: 5px;
			padding-left: 14px;
			font-size: 12px;
			color: #fff;
        }
        span:before{
        	content: "";
    	    display: block;
    	    position: absolute;
    	    margin: 4px 0 3px;
    	    left: 0;
    	    height: 11px;
    	    width: 13px;
    	    background-image: url("../../assets/icon.png");
    	    background-position: 0 -44px;
    	    background-size: 56px 55px;
        }
	}
	.title{
		margin-top: 6px;
		width: 100%;
		margin: 0;
		white-space: normal;
		height: 40px;
		word-break: break-all;
		text-overflow: ellipsis;
		overflow: hidden;
		display: -moz-box;
		display: -webkit-box;
		box-orient: vertical;
		line-clamp: 2;
		line-height: 20px;
		display: block;
	    color: #616161;
	    font-size: 13px;
	}
	.open-app{
		display: block;
		    width: 80%;
		    height: 30px;
		    margin: 10px auto;
		    border: none;
    font-size: 14px;
    position: relative;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border-radius: 3px;
    box-sizing: border-box;
    transition: color .2s ease,background-color .2s ease,background .2s ease,border-color .2s ease;
	}
</style>