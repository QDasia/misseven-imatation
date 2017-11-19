import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/index.vue';//.vue可省
import News from '@/components/news.vue';
import Audio from '@/components/audio.vue';
import Login from '@/components/login.vue';
import MusicList from '@/components/index/musicList.vue';
import Recommend from '@/components/index/recommend.vue';
import Classify from '@/components/index/classify.vue';
import Album from '@/components/index/album.vue';

Vue.use(Router)

export default new Router({
  //mode:'history',//去#号
  routes: [
    {
      path:'/index',
      component:Index,
      children:[
          {
            path:"musicList",
            component:MusicList
          },//音单
          {
            path:"recommend",
            component:Recommend
          },//推荐
          {
            path:"classify",
            component:Classify
          },//分类
          {
            path:'*',
            redirect:"/index/recommend"
          }//自动跳转
      ]//二级路由
    },//首页
    {
      path:'/login',
      component:Login
      
    },//登录
    
    {
      path:'/news',
      component:News
      
    },//新闻页
    {
      path:'/audio',
      component:Audio
      
    },//直播页
    {
      /*path:'/album',
      component:Album //第一种*/
      path:'/album/:alid',
      component:Album //动态路由匹配
      
    },//唱片集页
    {
      path:'*',
      redirect:"/index/recommend"
    }//自动跳转
  ]
})
