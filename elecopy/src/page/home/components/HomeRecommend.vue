<template>
	<div>
		<div class="recommend-body">
			—— <span style="margin: 0 .2rem">推荐商家</span>——
		
		</div>
		<div class="recommend-nav">
			<ul>
				<li>综合排序</li>
				<li>距离最近</li>
				<li>品质联盟</li>
				<li>筛选</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">



export default {
	name:'recommend',

}
</script>

<style  scoped lang="stylus">
.recommend-body
	text-align:center;
	margin:.5rem auto;
	color: #000;
	font-size: 16px;
.recommend-nav
	font-size:14px;
	text-align:center;
	color: #666;
	margin-bottom:.5rem
	overflow: hidden;
	ul
		li
			width:25%;
			float:left
				
</style>