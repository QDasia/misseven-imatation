<template>
	<div id="recommend">
		<div class="banner">
			<swipe class="my-swipe">
			  <swipe-item v-for="pic in piclist">
			  		<img :src="pic.pic"/>
			  </swipe-item>
			</swipe>
		</div>
		<!-- 轮播 -->
		<indexGroup :name="relist"  :sound="sound[0]"  :zimu="zimu[0]" :sou="sou[0]"></indexGroup>
		<!-- 人气M音 -->
    <indexChannel :channel="channel"></indexChannel>
    <!--频道 -->
    <indexGroup :name="music_a"  :sound="sound[1]"  :zimu="zimu[1]" :sou="sou[1]"></indexGroup>
    <!-- 有声漫画 -->
    <indexGroup :name="music_b"  :sound="sound[2]"  :zimu="zimu[2]" :sou="sou[1]"></indexGroup>
    <!-- 音乐 -->
   <indexGroup :name="music_c"  :sound="sound[3]"  :zimu="zimu[3]" :sou="sou[1]"></indexGroup>
    <!-- 娱乐 -->
    <indexGroup :name="music_d"  :sound="sound[4]"  :zimu="zimu[4]" :sou="sou[1]"></indexGroup>
    <!-- 催眠 -->
    <indexGroup :name="music_e"  :sound="sound[5]"  :zimu="zimu[5]" :sou="sou[1]"></indexGroup>
    <!-- 广播剧 -->
    <indexGroup :name="music_f"  :sound="sound[6]"  :zimu="zimu[6]" :sou="sou[1]"></indexGroup>
    <!-- 日抓 -->
    <indexGroup :name="music_g"  :sound="sound[7]"  :zimu="zimu[7]" :sou="sou[1]"></indexGroup>
    <!-- 听书 -->
    <indexGroup :name="music_h"  :sound="sound[8]"  :zimu="zimu[8]" :sou="sou[1]"></indexGroup>
    <!-- 配音 -->
    <indexGroup :name="music_i"  :sound="sound[9]"  :zimu="zimu[9]" :sou="sou[1]"></indexGroup>
    <!-- 铃声 -->
	</div>

</template>

<script>
import "vue-swipe/dist/vue-swipe.css";
import { Swipe, SwipeItem } from 'vue-swipe';
import IndexGroup from '@/components/index/indexGroup.vue';
import indexChannel from '@/components/index/indexChannel.vue';
import axios from "axios";
export default {

  name: 'recommend',

  data () {
    return {
    	piclist:[],
      soundlist:[],
      relist:[],
      musica:[],
      music_a:[],//人气M音
      musicb:[],
      music_b:[],//音乐
      musicc:[],
      music_c:[],//娱乐
      musicd:[],
      music_d:[],//催眠
      musice:[],
      music_e:[],//广播剧
      musicf:[],
      music_f:[],//日抓
      musicg:[],
      music_g:[],//听书
      musich:[],
      music_h:[],//配音
      musici:[],
      music_i:[],//铃声
      channel:[],//有声漫画
      sound:["人气M音","有声漫画","音乐","娱乐","催眠","广播剧","日抓","听书","配音","铃声"],
      zimu:["sound","music","musica","entertainment","hypnosis","broadcasting","daycatch","listenBook","dub","bell"],
      sou:["排行榜","更多"]
     
    }
  },
  mounted(){
  	fetch("/mobileWeb/newHomepage3").then(res=>res.json()).then(res=>{
  		//console.log(res);
  		this.piclist=res.info.banner;
      this.soundlist=res.info.sound;
      this.channel=res.info.channel;
      //console.log(this.channel);
      for(var i=0;i<3;i++){
          this.relist.push(this.soundlist[i]);
      };
  	});//请求数据
     axios.get('/sound/newhomepagedata').then((res)=>{
            //console.log(res.data.music[0].objects_point);
            this.musica=res.data.music[0].objects_point;
            for(var a=0;a<3;a++){
                this.music_a.push(this.musica[a]);
            };//有声漫画
            

            this.musica=res.data.music[1].objects_point;
            for(var b=0;b<3;b++){
                this.music_b.push(this.musica[b]);
            };//音乐

            
            this.musicc=res.data.music[2].objects_point;
            for(var c=0;c<3;c++){
                this.music_c.push(this.musicc[c]);
            };//娱乐

            this.musicd=res.data.music[3].objects_point;
            for(var d=0;d<3;d++){
                this.music_d.push(this.musicd[d]);
            };//催眠

            this.musice=res.data.music[4].objects_point;
            for(var e=0;e<3;e++){
                this.music_e.push(this.musice[e]);
            };//广播剧

            this.musicf=res.data.music[5].objects_point;
            for(var f=0;f<3;f++){
                this.music_f.push(this.musicf[f]);
            };//日抓

            this.musicg=res.data.music[6].objects_point;
            for(var g=0;g<3;g++){
                this.music_g.push(this.musicg[g]);
            };//听书

            this.musich=res.data.music[7].objects_point;
            for(var h=0;h<3;h++){
                this.music_h.push(this.musich[h]);
            };//配音

            this.musici=res.data.music[8].objects_point;
            for(var i=0;i<3;i++){
                this.music_i.push(this.musici[i]);
            };//铃声
            
      }).catch(function(err){
            console.log(err);
      });//请求数据https://www.missevan.com/sound/newhomepagedata
  },
  components:{
  	'swipe':Swipe,
  	'swipe-item': SwipeItem,
  	'indexGroup':IndexGroup,
    'indexChannel':indexChannel
  },
  
}
</script>

<style lang="scss">
.banner{
	border-bottom: 1px solid #e0e0e0;
}
.my-swipe {
  height: 33.33333vw;
  img{
  	width:100%;
  }
}
body{
  background-color: #f5f5f5;
}



</style>