<template>
	<div>
		<div class="list-body" v-for="item of list">
			<div class="list-left" @click='toShop(item.restaurant_id)'>
				<div class="list-img">
					<img :src="item.images_path"> 
				</div>
				<div class="list-content">
					<div class="list-title">{{item.name}}</div>
					<div class="list-num"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=">
						{{item.rating}} 月售{{item.recent_order_num}}单
					</div>
					<div class="list-play">
						<div class="peisong" style="float: left;">¥{{item.float_delivery_fee}}起送 | 免配送费</div>
						<div class="sjian"  style="float: right;">{{item.distances}} | {{item.order_lead_time}}分钟</div>
					</div>
					<div class="list-bottom">
						<div class="list-first"><span>首</span>新用户下单立减15元</div>
						<div class="list-second"><span class="bao">保</span><span class="baos">该商户食品安全已由国泰产险承担，食品安全有保障</span></div>
					</div>
				</div>
			</div>
		</div>
			
	</div>
</template>

<script type="text/javascript">



export default {
	name:'list',

	data(){
		return {list:[]}
	},
	
	methods:{
		playAxios(){
			this.$a.get('/restaurant/0/8').then(this.getDataRestaurant,err=>{
			console.log('有错',err)
		})
		},
		getDataRestaurant(res){
			res=res.data
			if(res.err){
					alert('数据有错')
			}
			//把数据给list
			this.list =res.data;
			
			console.log(this.list)

				this.$toImg(this.list);
			},


			//
			toShop(id){
				//alert(id)
				this.$router.push(`/shop/${id}`)
			}
},
mounted(){
		this.playAxios();
		
		console.log(this.list.length);
	},
}
</script>

<style  scoped lang="stylus">
	.list-body
		margin: 0 .2rem
		overflow: hidden;
		.list-left
			float:left
			font-size:12px;
			color:#666;
			display: flex;
			width:100%
			.list-img
				height:1.2rem
				width:1.2rem;
				float: left;
				img
					width:100%
			.list-content
				overflow: hidden;
				margin-left: .22rem;
				float:left
				.list-title
					color:#000;
					font-size: 15px;
					font-weight: 700;
				.list-num
					margin:0.2rem 0
				.list-play
					overflow:hidden
				.list-bottom
					margin: .4rem 0;
					color:#666;
					.list-first
						font-size:12px
						span
							color:#fff
							margin-right: .1rem;
							background-color: rgb(112, 188, 70)
					.list-second
						margin: .18rem 0 1rem;
						display:flex;
						.bao
							background-color: rgb(153, 153, 153);
							color:#fff;
							margin-right: .1rem;
							padding: .02rem;
						.baos
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
	</style>