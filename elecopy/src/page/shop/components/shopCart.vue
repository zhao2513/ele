<template>
	<div class="shop-cart">
		<div class="cart-bg" style="display: none;"></div><!--  -->
		<div class="cart-menu">
			<div class="cart-header">
				<span>满50减2元</span>
				<span v-show="toDiffers">，还差 <span style="color:#FF5339">{{toDiffer()}}</span></span>
				
			</div>
			<div class="cart-content"  v-show="visibilitys">
				<div class="cart-content-header">
					<div class="header-info">已选商品</div>
					<div class="delete-info">清空</div>
				</div>
				<ul class="cart-content-list">
					<li class="list-info"  v-for="item of this.$store.state.newFoods">
						<div class="food-name">{{item.foods_name}}</div>
						<div class="price"><span style="font-size:.24rem">￥</span>{{computeTotal(item.lowest_price,item.count)}}</div>
						<div class="count-cart">
							<div class="reduces" v-show="item.count" >
								<div class="svg-cut"  @click="reduce(item)">
									<svg viewBox="0 0 44 44" width="100%" height="100%"><path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm0 42C11 42 2 33 2 22S11 2 22 2s20 9 20 20-9 20-20 20z" clip-rule="evenodd"></path><path id="cart-maxs" fill-rule="evenodd" d="M32 20c1.1 0 2 .9 2 2s-.9 2-2 2H12c-1.1 0-2-.9-2-2s.9-2 2-2h20z" clip-rule="evenodd"></path></svg>
								</div>
								<div class="count">{{item.count}}</div>
							</div>
							<div class="svg-add"   @click="addCount(item)">
								<svg viewBox="0 0 44 44"  width="100%" height="100%"><path fill="none" d="M0 0h44v44H0z"></path><path id="cart-minus"fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z" clip-rule="evenodd"></path>
													</svg>
							</div>
									
						</div>
					</li>
				</ul>
			</div>
			<div class="cart-bottom"  @click="clickDisplay">
				<div class="cart-logo"><div class="logo"><div class="logo-content"></div></div></div>
				<div class="total">￥{{this.$store.state.allTotal}}</div>
				<div class="account">去结算</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import shopControl from '@/common/shopControl'

export default {
	name:'shopCart',
	data(){
		return {
			count:0,
			visibility:false,//用来隐藏购物车参数
			toDiffers:true

		}
	},

	methods: {
		computeTotal(price,count){
			//只要数据变化，会触发methods方法
			return price*count
		},
		toDiffer(){//计算差价
			//这个50可以是配送起步价
			let result=50-this.$store.state.allTotal;
			console.log(typeof result)
			this.toDiffers=result>0?true:false;
			return result
		},
		clickDisplay(){
		//如何总是大于0，购物车可以自由点击
			if(this.$store.state.allCount>0){
				 this.visibility=!this.visibility
			}else{//小于0时，只能隐藏
				this.visibility=false;
			}
			
		},
		addCount(foodName){//event是判断系统事件
			foodName.count++;
			this.$store.state.allCount++;
			this.$store.commit('controlFoods',foodName)

		},

		reduce(foodName){//减少函数
			this.$store.state.allCount--;
			foodName.count--;
			if(this.$store.state.allCount==0){
			this.$store.commit('controlFoods',{})
			}else{
				this.$store.commit('controlFoods',foodName)
			}
		}
	},
	computed:{
		visibilitys(){//当总数大于0且点击购物车栏时，才显示
			if(this.$store.state.allCount>0&&this.visibility){
				return true
			}else{
				return false
			}
		}
	}


}
</script>

<style  scoped lang="stylus">
	.shop-cart
		position:fixed
		bottom 0
		width: 100%;
		.cart-bg
			background #000
			opacity: .4;
			transition: opacity .3s ease;
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
		.cart-menu
			position: fixed;
			background: #505052;
			z-index: 2;
			bottom: 0;
			left: 0;
			right: 0;
			.cart-header
				height: 0.4rem;
				line-height: .4rem;
				background: #fffad6;
				color #333333
				text-align: center;
				font-size: 0.1rem;
			.cart-content
				corlor #fff
				background #fff
				.cart-content-header
					height .7rem
					background #eceff1
					padding: 0 .35rem;
					line-height .7rem
					color: #666;
					.header-info
						float:left
						font-size:.32rem
					.delete-info
						float:right
				.cart-content-list
					padding: 0 .3rem 0 .35rem;
					.list-info
						display:flex
						border-bottom: 1px solid #eee;
						.food-name
							flex:5
							font-size: .34rem;
							line-height: 1rem;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						.price
							flex 4
							font-size: .34rem;
							font-weight: 700;
							color: #ff5339;
							text-align: right;
							line-height: 1rem;
						.count-cart
							flex 3.5
							padding-top: 5px;
							text-align: right;
							line-height 1rem
						.reduces
							display:inline-block
							height: .4rem;
							line-height: .4rem;
							.svg-cut
								width: 0.4rem;
								display:inline-block
							svg
								fill: #2396ff;
								#cart-maxs
									fill: rgb(35, 149, 255);
							.count
								text-align: center;
								vertical-align: top;
								font-size: 17px;
								color:#333
								width: 0.4rem;
								display:inline-block
						.svg-add
							width: 0.42rem;
							display:inline-block
							#cart-minus
								fill:rgb(35, 149, 255);
			.cart-bottom
				height: 1rem;
				color #fff
				display flex
				line-height 1rem
				padding-left .3rem
				.cart-logo
					flex 1.8
					position relative
					.logo
						position: absolute;
						width: 1rem;
						height: 1rem;
						top -.2rem
						border-radius: 100%;
						box-sizing: border-box;
						padding: .1rem;
						background-color: #505052;
						.logo-content
							background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTggNTgiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIiBzdGREZXZpYXRpb249IjEuNSIvPjxmZUNvbG9yTWF0cml4IGluPSJzaGFkb3dCbHVyT3V0ZXIxIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA4IDAiLz48ZmVNZXJnZT48ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSIvPjxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPjwvZmVNZXJnZT48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTcuNjE0IDQuMDUxYy0xLjA2Ni4wODYtMS40NTItLjM5OC0xLjc1Mi0xLjU4NEM1LjU2MiAxLjI4LjMzIDUuODguMzMgNS44OGwzLjcxIDE5LjQ3NmMwIC4xNDgtMS41NiA3LjUxNS0xLjU2IDcuNTE1LS40ODkgMi4xOS4yOTIgNC4yNyAzLjU2IDQuMzIgMCAwIDM2LjkxNy4wMTcgMzYuOTIuMDQ3IDEuOTc5LS4wMTIgMi45ODEtLjk5NSAzLjAxMy0zLjAzOS4wMy0yLjA0My0xLjA0NS0yLjk3OC0yLjk4Ny0yLjk5M0w4LjgzIDMxLjE5MnMuODYtMy44NjUgMS4wNzctMy44NjVjMCAwLTUuNzg4LjEyMiAzMi4wNjUtMS45NTYuNjA2LS4wMzMgMi4wMTgtLjc2NCAyLjI5OC0xLjg0OCAxLjExMy00LjMxNyA0LjAwOC0xMy4yNiA0LjQ1OC0xNS42NC45MzItNC45MjUgMi4wNjEtOC41NTgtNC4yOC03LjQwNSAwIDAtMzUuNzY4IDMuNDg3LTM2LjgzMyAzLjU3M3oiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWx0ZXI9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDM4IDcuODA4KSI+PG1hc2sgaWQ9ImMiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2IiLz48L21hc2s+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYiIvPjxwYXRoIGZpbGw9IiMyMDczQzEiIGQ9Ik01My45NjIgNy43NzRsLTUuNzAxIDE5LjMwNS00MC43OCAxLjU3NHoiIG1hc2s9InVybCgjYykiIG9wYWNpdHk9Ii4xIi8+PC9nPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjYiIGQ9Ik05LjM3NCAxOC43MjJTNy44NjggMTEuMjgzIDcuMzIzIDguNzFDNi43NzggNi4xMzYgNS44NiA1LjMzIDMuOTc4IDQuNTIgMi4wOTYgMy43MTMuMzY3IDIuMjg2LjM2NyAyLjI4NiIvPjxjaXJjbGUgY3g9IjQ2IiBjeT0iNTEiIHI9IjQiIGZpbGw9IiNGRkYiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjUxIiByPSI0IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==') 50% no-repeat;
							background-size: 0.5rem;
							border-radius: 100%;
							height: 100%;
							width: 100%;
							background-color: #3190e8;
				.total
					flex 6
					font-size .36rem
				.account
					flex 3
					font-size .32rem
					font-weight 700
					text-align: center;
					background-color: #38ca73;
</style>