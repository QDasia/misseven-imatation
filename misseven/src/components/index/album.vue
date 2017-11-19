<template>
	<div >
	<template v-if='info'>
		<div id="album">
			<div class="album-head">
				
				<img :src="cal" class="album-pic">
				<div class="album-detail">
					<span class="album-title">{{info.album.title}}</span>
					<a href="#" class="album-user">
						 <img class="avatar" :src="call">
						 <span class="name">{{info.album.username}}</span>
					</a>
				</div>
				
			</div><!-- 头部 -->
			<div class="album-header" :style="calt"></div>
		</div>
		<div class="album-list">
			<div class="list-sound" v-for="data in datalist">
				<div class="cover">
					<img class="cover-img" :src=cover(data.cover_image)>
				</div>
				<a class="detail" href="#">
					<div class="title">{{data.soundstr}}</div>
					<div class="statistics">
						<div class="item play-times">{{data.view_count}}</div>
						<div class="item duration">{{caltime(data.duration)}}</div>
					</div>
				</a>
			</div>
		</div>
		</template>
	</div>
</template>

<script>
import axios from "axios";
export default {

  name: 'album',
  computed:{
  	cal(){
  		return '//static.missevan.com/coversmini/'+this.info.album.cover_image;
  	},
  	call(){
  		return '//static.missevan.com/profile/'+this.info.owner.boardiconurl;


  	},
  	calt(){
  		return 	`background-image: url("//static.missevan.com/coversmini/${this.info.album.cover_image}");`
  	},
  },
  methods:{
  	cover(id){
  		return `//static.missevan.com/coversmini/${id}`
  	},
  	caltime(time){
  		var s=Math.floor(time/1000);
  		var m=Math.floor(s/60);
  		var second=s%60;
  		//console.log(second);
  		if(second<10){
  			return m+':0'+second;
  		}else{
  			return m+':'+second;
  		}
  		
  	}
  },

  data () {
    return {
    	info:null,
    	datalist:[]
    }
  },
  mounted(){
  	//console.log(this.$route.params.alid);
  	axios.get(`/sound/soundalllist?albumid=${this.$route.params.alid}`).then(res=>{
  		//console.log(res.data.info);
  		this.info=res.data.info;
  		this.datalist=res.data.info.sounds;
  		//console.log(this.datalist);
  	})
  }
}
</script>

<style lang="scss" scoped>
#album{
	height: 150px;
    background-color: rgba(0,0,0,.5);
    display: block;
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    overflow: hidden;
}
.album-head{
	    display: flex;
	    justify-content: space-around;
	    align-items: center;
	    padding: 10px;
        overflow: hidden;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
   	    position: absolute;
}
.album-pic{
	width: 110px;
	display: block;
	height: 110px;
}
.album-detail{
	display: flex;
	flex-direction: column;
    justify-content: space-between;
    color: #fff;
    width: calc(100% - 130px);
    height: 110px;
}
.album-title{
	width: calc(100% - 10px);
	height: 50px;
	word-break: break-all;
	text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 25px;
    margin-left: 10px
}
.album-user{
	width: calc(100% - 10px);
    position: relative;
    color: #fff;
    display: block;
    height: 30px;
    line-height: 30px;
    margin: 5px;
    padding: 0;
}
.avatar{
	height: 25px;
	width: 25px;
	display: block;
	position: absolute;
	left: 2px;
	margin: 2px;
	border-radius: 50%;
}
.name{
	display: block;
    position: relative;
    margin-left: 40px;
    font-size: 16px;
    width: calc(100% - 40px);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.album-header{
	filter: blur(20px);
	left: -20px;
    right: -20px;
    top: -20px;
    bottom: -20px;
    z-index: 0;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: block;
    position: absolute;
}
.album-list{
	display: block;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.list-sound{
	display: block;
    position: relative;
    height: 70px;
    line-height: 70px;
    width: 100%;
    margin: 0;
}
.list-sound:after{
	content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 10px;
    border-bottom: 1px solid #e0e0e0;
}
.cover{
	border-radius: 4px;
    height: 50px;
    width: 50px;
    margin: 10px;
    float: left;
    overflow: hidden;
    position: relative;
    display: block;
    overflow: hidden;
    position: relative;
    border-radius: 4px;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100%;
}
.cover-img{
	display: block;
    position: absolute;
    z-index: 0;
    border-radius: 4px;
    height: 50px;
    width: 50px;
}
.detail{
	float: right;
    padding: 10px 0;
    height: 100%;
    width: calc(100% - 70px);
    color: #424242;
    overflow: hidden;
    position: relative;
}
.title{
	width: 94%;
    height: 36px;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 18px;
    font-size: 12px;
    color: #616161;
}
.statistics{
	height: 10px;
    line-height: 10px;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 11px;
}
.item{
	font-size: 12px;
    color: #9e9e9e;
    margin-right: 20px;
    padding-left: 18px;
    width: 56px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline-block;
    position: relative;
    height: 10px;
    line-height: 10px;
}
.item:before{
	content: "";
	    display: block;
	    position: absolute;
	    left: 2px;
	    width: 12px;
	        height: 10px;
    line-height: 10px;
    background: url("../../assets/icon.png");
}
.play-times:before{
	
	background-size: 56px 55px;
	background-position: -44px -14px;
	content: "";
    display: block;
    position: absolute;
    left: 2px;
    width: 12px;
    height: 10px;
    line-height: 10px;
}
.duration:before{
    content: "";
    display: block;
    position: absolute;
    left: 2px;
    width: 12px;
    height: 10px;
    line-height: 10px;
    background-position: -15px -44px;
	background-size: 56px 55px;
}
</style>