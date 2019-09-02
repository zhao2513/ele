<template>
	<div>
		<div class="abs">
			<div class="shop-bg" @click="fn_back()"><span class="iconfont" >&#xe731;</span></div>
		</div>
		<div class="shop-header" v-for="item of headerData">
			<img class="title-img" :src="item.images_path">

			<div class="shop-title-content">
				<h2>{{item.name}}</h2><i></i>
				<div class="title-sec">评价{{item.rating}}<span>月售{{item.recent_order_num}}单</span>蜂鸟专送约{{item.float_delivery_fee}}分钟</div>
				<div class="title-tre">
					<div class="tre-cotent" style="float:left"><span class="fir-color">首单</span>新用户下单立减15元(不与其他活动同享)</div><div class="youhu">1个优惠</div>
				</div>
				<div class="title-four">
					公告：亲：为节约猪肉资源   目前主打素粉   9元/份（二两）不拒肉食者   另加3元[抱拳][抱拳][抱拳]感谢新老顾客的支持。
				</div>
			</div>
		</div>
		<div class="list-title">
			<ul>
				<li class="click-icon" @click="toMenuStatus('menu')">点餐</li>
				<li  @click="toMenuStatus('pingjia')">评价</li>
				<li  @click="toMenuStatus('restaurant')">商家</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">



export default {
	name:'shopHeader',
	props:{
		headerData:Array
	},
	// data(){
	// 	return {
	// 		toMenuStatus
	// 	}
	// },
	methods:{
		toMenuStatus(aa){
			this.$router.push('/shop/comment')
		},
		fn_back(){
			this.$router.back();
		}
	}


}
</script>

<style  scoped lang="stylus">
	.abs
		background-image:url("//fuss10.elemecdn.com/a/d8/591a23dc94ffd6b1658c705738ed4png.png?imageMogr/format/webp/thumbnail/750x/");
		background-position: 50%;
		// position: absolute;
		height:2.2rem;
		background-size: cover;
		position: relative;
		.shop-bg
			position: absolute;
			top: 0;
			left: 0;
			//background: rgba(0, 0, 0, 0.8);
			width: 100%;
			height: 100%;
			background: linear-gradient(rgba(0, 0, 0, 0.4), transparent);
			.iconfont
				font-size: 30px;
				color: #fff;
				display: inline-block;
				margin: 5px;
	.shop-header
		text-align: center;
		.title-img
			border-radius: .08rem;
			height: 1.6rem;
			position: absolute;
			left: 50%;
			margin-left: -0.8rem;
			top:6%;
		.shop-title-content
			font-size:12px
			h2
				font-weight: 700;
				white-space: nowrap;
				padding:0.38rem 0 .01rem;
				font-size: 20px;
			i
				border-color: transparent transparent transparent rgba(0,0,0,.67);
				border-width: .146667rem 0 .146667rem .173333rem;
				height: .2rem;
				width: .2rem;
				font-size: 16px;
				display: inline-block;
			.title-sec
				color: #666;
				text-align: center;
				span
					padding:0 0.23rem;
			.title-tre
				padding: .25rem 0.6rem;
				overflow: hidden;
				justify-content: center;
				display: flex;
				.tre-cotent
					color: #000;
					width: 63vw;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				.youhu
					float: left;
					padding-left: .22rem;
				.fir-color
					background-color: rgb(112, 188, 70);
					color:#fff;
					margin-right: .13rem;
					padding: 0 .1rem;
			.title-four
				padding: .25rem 0.85rem;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				color:#999;
	.list-title
		ul
			display:flex;
			justify-content:space-around;
			border-bottom: 1px solid #ebebeb;
			li
				color: #666;
			.click-icon
				color:#000
				font-size: 15px;
				font-weight: 600;
				padding-bottom: .2rem;
				border-bottom: 2px solid #2395ff;
</style>