<template>
	<div class="shop-control" >
		<div class="reduce" v-show="count" >
			<div class="svg-cut"><svg viewBox="0 0 44 44" width="100%" height="100%"><path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm0 42C11 42 2 33 2 22S11 2 22 2s20 9 20 20-9 20-20 20z" clip-rule="evenodd"></path><path id="cart-maxs" fill-rule="evenodd" d="M32 20c1.1 0 2 .9 2 2s-.9 2-2 2H12c-1.1 0-2-.9-2-2s.9-2 2-2h20z" clip-rule="evenodd"></path></svg></div>
			<div class="count" v-for="(val,name,index) of foods">{{name}}</div>
		</div>
		
		<div class="svg-add"  @click="addCount()"><svg viewBox="0 0 44 44"  width="100%" height="100%"><path fill="none" d="M0 0h44v44H0z"></path><path id="cart-minus"fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z" clip-rule="evenodd"></path>
								</svg></div>
	</div>
</template>

<script type="text/javascript">



export default {
	name:'shopCart',
	props:{
		foods:Array
	},

	watch:{
		foods:{
			immediate: true, 
			handler(val){
				console.log(val)
				
				this.aa(val)
			}
		}
		// foods(newV , oldV){
		// 	console.log(aaa)
		// 	console.log(newV)
		// 		console.log(oldV)
		// 	this.aa(newV)
		// }
	},
	data(){
		return {
			count:0,
			food:[],
			// foods:[]
		}
	},

	methods: {
		addCount(){

			
			this.count++;
			console.log(this.food)
		},
		aa(val){
			this.food.push(val)
			
		}
	},
	// updated(){
	// 	this.foods=this.food
	// 	// console.log(this.foods)
	// }


}
</script>

<style  scoped lang="stylus">
.shop-control
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