<template>
	<div class="list-content" >
		<div class="list-left" ref="menuWrapper">
			<ul >
				<li 
				v-for="(val,name,index) of contentDatas" 
				@click.prevent="clickMenu(index)"
				:class="index==indexBg?'icons-id':'li-id'"
				><!-- class="icons" -->{{name}}</li>
				
			</ul>
		</div>

		<div class="list-right" ref="foodsWrapper">
			<div>
			<div class="food-list" v-for="(val,name,index) of contentDatas">
				<div class="right-id">{{name}}</div>
				<div >
				<div class="list-right-content" v-for="value of val">
					<div class="content-menu-left">
						<img class="menu-img" :src="value.images_path">
					</div>
					<div class="content-menu-right">
						<div class="menu-fir">{{value.foods_name}}</div>
						<div class="menu-sec" v-if="value.description">{{value.description}}</div>
						<div class="menu-thr">月售{{value.month_sales}}份
						 &nbsp好评率{{value.month_sales}}%</div>
						<div class="menu-four">
							<div class="price">￥<span style="font-size:.3rem">{{value.lowest_price}}</span> 起</div>
							<div class="price-click">
								<div class="shop-control" >
									<div class="reduce"  v-show="value.count"><!--  :class="{active:}" -->
										<div class="svg-cut" @click.prevent="reduce(value)">
											<svg viewBox="0 0 44 44" width="100%" height="100%"><path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm0 42C11 42 2 33 2 22S11 2 22 2s20 9 20 20-9 20-20 20z" clip-rule="evenodd"></path><path id="cart-maxs" fill-rule="evenodd" d="M32 20c1.1 0 2 .9 2 2s-.9 2-2 2H12c-1.1 0-2-.9-2-2s.9-2 2-2h20z" clip-rule="evenodd"></path>
											</svg>
										</div>
										<div class="count">{{value.count}}</div>
									</div>
									<div class="svg-add"  @click="addCount(value,$event)"><svg viewBox="0 0 44 44"  width="100%" height="100%"><path fill="none" d="M0 0h44v44H0z"></path><path id="cart-minus"fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z" clip-rule="evenodd"></path>
							</svg></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import Bscroll from 'better-scroll'
import shopControl from '@/common/shopControl'

export default {
	name:'shopList',
	props:{
		contentDatas:Object
	},

	data(){
		return {
			menuScrollY:{},
			foodsScrollY:{},
			indexBg:0,//给一个className变化的索引
			heightList:[],//存各菜单相应滚动高度的值
			count:0,
			foods:[],
			foodInfo:[]
		}
	},
	methods:{
		_initScroll(){//菜单栏滚动
			this.menuWrapper = new Bscroll(this.$refs.menuWrapper, {
			click: true,
			probeType: 3
			});
			//食物栏滚动
			this.foodsWrapper = new Bscroll(this.$refs.foodsWrapper, {
				click: true,
				probeType: 3,
				
			})
			//滚动事件
			// this.foodsWrapper.on('scroll', (pos) => {
			// this.foodsScrollY = Math.abs(Math.round(pos.y))
			// })
		},
		clickMenu(index){//点击滚动到相应栏的按钮
			//获取各mune的高度
			let menuId=this.$refs.foodsWrapper.querySelectorAll('.food-list');
			let height=0;
			this.heightList.push(height)
			for(let i=0,l=menuId.length;i<l;i++){
				height+=menuId[i].offsetHeight;
				this.heightList.push(height)
				if(index==i){
					this.indexBg=i;
				}
			}
			this.foodsWrapper.scrollTo(0,-this.heightList[this.indexBg],200)
			//布局时要注意，margin会影响滚动和offsetHeight的值
		},

		addCount(foodName,event){//event是判断系统事件
			if (!event._constructed) {
				return
			}
			foodName.count++;
			this.$store.state.allCount++;
			this.$store.commit('controlFoods',foodName)

		},

		reduce(foodName){
			this.$store.state.allCount--;
			foodName.count--;
			if(this.$store.state.allCount==0){
			this.$store.commit('controlFoods',{})
			}else{
				this.$store.commit('controlFoods',foodName)
			}
		}


	},
	mounted(){//初始化滚动
		this._initScroll();
	},
		watch:{
		contentDatas(newVal,oldVal){
			
				this.foods=newVal
				
			
		},

		// immediate: true, 
			// handler(val){

	},


}
</script>

<style  scoped lang="stylus">
	.list-content
		display:flex
		margin-bottom: 1.2rem;
		overflow: hidden;
		position:relative
		height: 6.8rem;
		.list-left
			//height: 1000px;
			flex:0 0 80px
			margin-right: .15rem;
			height: 300px;
			ul
				.li-id
					color: #666
					background-color:#f8f8f8;
					padding: 0.28rem 0.15rem;
					border:1px solid #f8f8f8;
				.icons-id
					color: #333
					background-color:#fff;
					padding: 0.28rem 0.15rem;
					border:1px solid transparent;
		.list-right
			flex:9
			margin-left: 0.01rem;
			//height:500px;
			div
				.right-id
					position relative
					padding-top: 0.35rem;
					color: #666;
					font-weight: 700;
					font-size: .24rem;
				.list-right-content
					overflow: hidden;
					padding-top: .3rem;
					position: relative;
					.content-menu-left
						width:34%
						.menu-img
							width: 100%;
							float: left;
					.content-menu-right
						float: left;
						margin-left: 5%;
						color: #999;
						font-size: .24rem;
						width:60%
						.menu-fir
							font-weight: 700
							font-size: .3rem;
							color:#333
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						.menu-sec
							margin-top: 0.13rem;
							overflow: hidden;
							font-size: .24rem;
							height: .24rem;
							line-height: .24rem;
							text-overflow: ellipsis;
							width: 42vw;
							white-space: nowrap;
						.menu-thr
							margin-top: 0.13rem;
						.menu-four
							position: absolute;
							bottom: 0;
							width: 55%;
							.price
								float:left
								font-size:.26rem;
								color:red;
								margin-top: .01rem;
							.price-click
								float:right;
								.reduce
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
								
								
	</style>