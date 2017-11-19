<template>
	<div id="classify">
		<div class="classify">
			<a class="Catalog" href="#">
				<span class="catalog-icon" style="background-image: url('../../src/assets/46.png')"></span>
				<span class="catalog-title">有声漫画</span>
			</a>
			<a class="Catalog" href="#">
				<span class="catalog-icon" style="background-image: url('../../src/assets/8.png')"></span>
				<span class="catalog-title">音乐</span>
			</a>
			<a class="Catalog" href="#">
				<span class="catalog-icon" style="background-image: url('../../src/assets/26.png')"></span>
				<span class="catalog-title">娱乐</span>
			</a>
			<a class="Catalog" href="#">
				<span class="catalog-icon" style="background-image: url('../../src/assets/54.png')"></span>
				<span class="catalog-title">催眠</span>
			</a>
			<a class="Catalog" href="#">
				<span class="catalog-icon" style="background-image: url('../../src/assets/5.png')"></span>
				<span class="catalog-title">广播剧</span>
			</a>
			<a class="Catalog" href="#">
				<span class="catalog-icon" style="background-image: url('../../src/assets/41.png')"></span>
				<span class="catalog-title">日抓</span>
			</a>
			<a class="Catalog" href="#">
				<span class="catalog-icon" style="background-image: url('../../src/assets/6.png')"></span>
				<span class="catalog-title">听书</span>
			</a>
			<a class="Catalog" href="#">
				<span class="catalog-icon" style="background-image: url('../../src/assets/52.png')"></span>
				<span class="catalog-title">配音</span>
			</a>
			<a class="Catalog" href="#">
				<span class="catalog-icon" style="background-image: url('../../src/assets/65.png')"></span>
				<span class="catalog-title">铃声</span>
			</a>
		</div>
		
	</div>
</template>

<script>
export default {

  name: 'classify',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

#classify{
	padding: 12px;
	min-height: calc(100vh - 160px);
}
.classify{
	display: flex;
	height: 100%;
	width: 100%;
	padding: 5px;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	
}
.Catalog{
	height: 105px;
    width: 105px;
    display: inline-block;
    position: relative;
    margin: 10px 0;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.2);
    text-align: center;
    margin-left: 2px;
    .catalog-icon{
    	display: block;
	    height: 50px;
	    width: 50px;
	    margin: 15px auto 8px;
	    background-position: 50%;
	    background-repeat: no-repeat;
	    background-size: 100%;
    }
    .catalog-title{
    	font-size: 14px;
    	color: #000;
    }
}
body{
	background: #f5f5f5;
}
</style>