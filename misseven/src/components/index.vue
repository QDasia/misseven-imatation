<template>
	<div id="main-m">
			<ul class="main-nav">
				<router-link class="tab" tag="li" to="/index/musicList" activeClass="active">音单</router-link>
				<router-link class="tab" tag="li" to="/index/recommend" activeClass="active">推荐</router-link>
				<router-link class="tab" tag="li" to="/index/classify" activeClass="active">分类</router-link>
			</ul>
		<router-view></router-view>
	</div>
</template>

<script>
export default {

  name: 'index',

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
	margin:0;
}
li{
	list-style: none;
}
.main-nav{
	margin: 0;
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    position: relative;
    height: 40px;
    line-height: 40px;
    justify-content: space-between;
    font-size: 12px;
}

.tab{
	font-size: 16px;
    color: #9e9e9e;
    position: relative;
    display: inline-block;
    text-align: center;
    flex:auto;
    cursor: pointer;
    z-index: 0;
}
.active{
	color: #000;
    border-color: #000;
    border-bottom: 2px solid #000;

}



</style>