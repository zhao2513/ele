<template>
	<div class="content-body">
		<div class="content-top">
			<div class="content-left">
				<div class="left-word">
					<div class="left-title">品质套餐</div>
					<div class="left-sec">搭配齐全吃得好</div>
					<div class="left-bottom">立即抢购 ></div>
				</div>
			</div>
			<div class="content-right">
				<img src="https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/">
			</div>		
		</div>
		<div class="content-bottom">
			<div class="bottom-vip">超级会员 </div>
			<div class="vip-word">已为我节省</div>
			<div class="vip-right"><b class="vip-b">0.5</b>个奖励金</div>
		</div>
	</div>
</template>

<script type="text/javascript">



export default {
	name:'carousel',

}
</script>

<style  scoped lang="stylus">
.content-body
	.content-top
		background:#f8f8f8;
		padding:0.3rem 0.2rem 0.3rem 0.3rem
		overflow: hidden;
		margin: 0 .2rem;
		.content-left
			float:left;
			.left-word
				.left-title
					color: #333
					font-weight: 700
					font-size: 17px;
				.left-sec
					color:#777;
					font-size:13px;
					margin:0.16rem 0 0.26rem
				.left-bottom
					color: #af8260;
					font-weight:700
					font-size:13px
		.content-right
			float:right;
			height: 2.2rem;	
			img
				height:90%
	.content-bottom	
		margin: 0.1rem .2rem;
		height:.85rem;
		background-image: linear-gradient(90deg,#ffefc4,#f3dda0);
		box-sizing: border-box;
		line-height: .85rem;
		padding: 0 .4rem
		color: #644f1b;
		.bottom-vip
			font-weight: 700;
			float: left;			
		.vip-word
			font-size:12px;
			float: left;
			margin-left: .2rem;
		.vip-right
			float:right;
			font-size:12px;
			.vip-b
				color: #bd8f22;
				font-size: 18px;
				font-weight: 700;
</style>