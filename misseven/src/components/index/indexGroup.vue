<template>
	<!-- <div class="indexGroup">
		<div class="head">
			<div class="title">
				<div class="indexTitle sound">
					<i></i>人气 M 音
				</div>
			</div>
			<div class="nav">
				<a class="indexNav" href="/rank">
					排行榜
				</a>
			</div>
		</div>
		<div class="body">
			<a href="#" class="bodyList">
				<div class="list-pic"></div>
				<div class="list-title">【冥月】love story</div>
				<div class="list-detail">
					<span class="list-item play-times">2578</span>
					<span class="list-item comments">63</span>
				</div>
			</a>
		</div>
	</div> -->
	<div id="indexGroup">
		<div class="indexGroup" >
			<div class="head">
				<div class="title">
					<div class="indexTitle " :class="zimu">
						<i></i>{{sound}}
					</div>
				</div>
				<div class="nav">
					<a class="indexNav" href="/rank">
						{{sou}}
					</a>
				</div>
			</div>
			<div class="body">
				<a href="#" class="bodyList" v-for="data in name">
					<div class="list-pic"><img :src="cal(data.cover_image)"></div>
					<!-- //static.missevan.com/coversmini/data.cover_image-->
					<div class="list-title">{{data.soundstr}}</div>
					<div class="list-detail">
						<span class="list-item play-times">{{data.view_count}}</span>
						<span class="list-item comments">{{data.all_comments}}</span>
					</div>
				</a>

			</div>
		</div>
	</div>
	
</template>

<script>
export default {

  name: 'indexGroup',

  data () {
    return {
    	datalist:[],
    }
  },
  props:["name","sound","zimu","sou"],
  methods:{
  	cal(index){
  		//return '//static.missevan.com/coversmini/'+index;
  		return `//static.missevan.com/coversmini/${index}`
  		
  	}
  }

}
</script>

<style lang="scss" scoped>
    .indexGroup{
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
    .sound i{
    	background-position: -22px 0;
    }
    .nav{
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
    	    overflow-x: auto;
    	    min-height: 170px;
    	    display: flex;
    	    justify-content: space-around;
    	    align-items: center;
    	    margin: 0 14px;
    	    .bodyList{
    	    	width: 106px;
    			height: 163px;
    			display: inline-block;
				margin: 5px;
				padding: 0;
    	    }
    	    .list-pic{
    	    	width: 106px;
    	    	height: 106px;
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
    	    }
    	    .list-pic:before{
    	    	content: "";
	    	    display: block;
	    	    position: absolute;
	    	    right: 8px;
	    	    bottom: 8px;
	    	    height: 24px;
	    	    width: 24px;
	    	    background-image: url(../../assets/icon.png);
	    	    background-position: 0 0;
	    	    background-size: 56px 55px;
    	    }
    	    .list-title{
    	    	width: 100%;
    	    	height: 36px;
    	    	word-break: break-all;
    	    	text-overflow: ellipsis;
    	    	overflow: hidden;
    	    	display: -moz-box;
    	    	display: -webkit-box;
    	    	box-orient: vertical;
    	    	line-height: 18px;
    	    	margin: 4px 0;
    	    	display: block;
    	        color: #616161;
    	    	font-size: 13px;
    	    }
    	    .list-detail{
    	    	display: flex;
    	    	justify-content: space-between;
    	    }
    	    .list-item{
    	    	position: relative;
	    	    padding-left: 14px;
	    	    font-size: 11px;
	    	    line-height: 11px;
	    	    color: #bdbdbd;
    	    }
    	    .play-times:before{
    	    	background-image: url(../../assets/icon.png);
    			background-size: 56px 55px;
    			background-position: -44px -14px;
    	    }
    	    .list-item:before {
    	        content: "";
    	        display: block;
    	        position: absolute;
    	        left: 0;
    	        height: 10px;
    	        width: 12px;
    	    }
    	    .comments:before{
    	    	background-image: url(../../assets/icon.png);
    	    	background-size: 56px 55px;
    	    	background-position: -44px -26px;
    	    }
	    }
	    .music i{
	    	background-position: -66px -44px;
	    }
	    .musica i{
	    	background-position: -22px -44px;
	    }
        .entertainment i{
            background-position: -66px 0;
        }
        .hypnosis i{
            background-position: -22px -66px;
        }
        .broadcasting i{
            background-position: -44px -22px;
        }
        .daycatch i{
            background-position: -66px -22px;
        }
        .listenBook i{
            background-position: 0 -44px;
        }
        .dub i{
            background-position: 0 -66px;
        }
        .bell i{
            background-position: -66px -66px;
        }
</style>