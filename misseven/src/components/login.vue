<template>
	<div id="main-l">
		<from class="form-group">
			<span class="form-title">登录 MissEvan</span>
			<input type="text" placeholder="手机号/邮箱">
			<input type="password" placeholder="密码">
			<div class="form-row">
				<p class="form-checkbox">
					<input type="checkbox" id="check-row-before" value="1">
					<label for="check-row-before">记住我</label>
				</p>
				<a class="btn-text red row-right" title="忘记密码？" href="#">忘记密码？</a>
			</div>
			<input type="submit" title="登录" value="登录">
			<a class="btn-white btn-block" href="#">注册</a>
		</from>
		<div class="thirdparty-login">
			<span class="thirdparty-title">第三方登录</span>
			<a href="https://graph.qq.com/oauth2.0/authorize?response_type=code&amp;client_id=101117657&amp;redirect_uri=http%3A%2F%2Fwww.missevan.com%2Fmember%2Fauthqq%3Fbackurl=http%3A%2F%2Fm.missevan.com%2F">
				<i class="tencent"></i>
			</a>
			<a href="https://api.weibo.com/oauth2/authorize?client_id=4018040466&amp;response_type=code&amp;redirect_uri=http%3A%2F%2Fwww.missevan.com%2Fmember%2Fauthweibo%3Fbackurl=http%3A%2F%2Fm.missevan.com%2F">
				<i class="weibo"></i>
			</a>
		</div>
	</div>
</template>

<script>
export default {

  name: 'login',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
	#main-l{
		    margin: 0 36px;
		    width: calc(100% - 72px);
		    display: flex;
		    -webkit-box-orient: vertical;
		    -webkit-box-direction: normal;
		    flex-direction: column;
		    -webkit-box-pack: justify;
		    justify-content: space-between;
		    position: relative;
		    height: 100%;
	}
	.form-group{
		margin: 10px auto;
		width: 100%;
		display: block;
		padding: 5px;
		box-sizing: border-box;
		input{
			color: #000;
			box-sizing: border-box;
		    font-size: 14px;
		    background-color: #fff;
		    border-radius: 4px;
		    border: 1px solid #e0e0e0;
		}
		input[type=text]{
			width: 100%;
			margin: 20px 0;
			display: block;
			height: 42px;
			line-height: 30px;
			padding: 5px 10px;
		}
		input[type=password]{
			width: 100%;
		    margin: 20px 0;
		    display: block;
		    height: 42px;
		    line-height: 30px;
		    padding: 5px 10px;
		}
		input[type=checkbox]{
			color: #000;
			box-sizing: border-box;
			font-size: 14px;
			background-color: #fff;
			border-radius: 4px;
			border: 1px solid #e0e0e0;
		}
		input[type=submit]{
			color: #fff;
			background-color: #c14a3f;
			border-color: #c14a3f;
			box-sizing: border-box;
			font-size: 16px;
			border-radius: 3px;
			height: 40px;
		    line-height: 26px;
		    width: 100%;
		    margin: 20px 0;
		    display: inline-block;
	        position: relative;
	        text-align: center;
	        vertical-align: middle;
	        cursor: pointer;
	        border: 1px solid transparent;
	        box-sizing: border-box;
	        transition: color .2s ease,background-color .2s ease,background .2s ease,border-color .2s ease;
		}
	}
	.form-title{
		font-size: 16px;
		margin: 12px 0;
		color: #000;
		display: block;
	}
	.form-row{
		display: flex;
	    -webkit-box-pack: justify;
	    justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
        width: 100%;
        line-height: 20px;
        height: 20px;
        box-sizing: border-box;
        margin: 20px 0;
        label{
        	cursor: pointer;
        	font-size: 14px;
        	color: #000;
        	float: left;
        	line-height: 20px;
        	    height: 20px;
        }
        label:before{
        	content: "";
    	    display: inline-block;
    	    width: 14px;
    	    height: 14px;
    	    margin: 0 .5em 0 0;
    	    border-radius: 3px;
    	    border: 1px solid #bdbdbd;
    	    background-color: #fff;
    	    vertical-align: bottom;
    	    position: relative;
    	    bottom: 2px;
        }
        /* label:after{
        	content: "\2714";
    	    color: #fff;
    	    top: -1px;
    	    left: 5px;
    	    position: absolute;
        } */
	}
	.form-checkbox{
		margin: 0;
	    display: inline-block;
	}
	#check-row-before{
		position: absolute;
		    left: -1000em;
	}
	.btn-text{
		line-height: 20px;
    height: 20px;
    right: 0;
    position: absolute;
    font-size: 14px;
    color: #c14a3f;
	}
	.btn-white{
		    width: 100%;
		    font-size: 16px;
	        height: 42px;
	        line-height: 42px;
	        color: #000;
            background-color: #fff;
            border-color: #e0e0e0;
            display: inline-block;
            position: relative;
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
            border: 1px solid transparent;
            border-radius: 3px;
            box-sizing: border-box;
            transition: color .2s ease,background-color .2s ease,background .2s ease,border-color .2s ease;
	}
	.thirdparty-title{
		width: 100%;
	    display: block;
	    position: relative;
	    text-align: center;
	    font-size: 13px;
	    color: #9e9e9e;
	    height: 18px;
	    line-height: 18px;

	}
	.thirdparty-title:before,.thirdparty-title:after{
		    content: "";
		    display: block;
		    position: absolute;
		    top: 0;
		    height: 8px;
		    width: calc((100% - 95px) / 2);
		    border-bottom: 1px solid #e0e0e0;
	}
	.thirdparty-title:before{
		left:0;
	}
	.thirdparty-title:after{
		right:0;
	}
	.thirdparty-login{
		display: block;
	    position: relative;
		    a{
		    	display: inline-block;
	    	    margin: 20px calc((50% - 54px) / 2);
	    	    i{
	    	    	height: 50px;
    	    	    width: 50px;	
    	    	    display: inline-block;
    	    	    background-repeat: no-repeat;
	    	    }
	    	    i.tencent{
	    	    	background-position: -104px -51px;
	    	    }
	    	    i.weibo{
	    	    	background-position: -104px 0;
	    	    }
	    	    i.tencent, i.weibo {
	    	        background-image: url("../assets/third.png");
	    	        background-size: 154px 101px;
	    	    }
		    }
	}
</style>