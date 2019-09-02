<template>
	<div class="home-body">
		<home-header></home-header>
		<home-search></home-search>
		<home-carousel></home-carousel>
		<home-content></home-content>
		<HomeRecommend/>
		<home-list :list='list'></home-list>
	</div>
</template>

<script type="text/javascript">
import HomeHeader from './components/HomeHeader'
import HomeSearch from './components/HomeSearch'
import HomeCarousel from './components/HomeCarousel'
import HomeContent from './components/HomeContent'
import HomeRecommend from './components/HomeRecommend'
import HomeList from './components/HomeList'


export default {
	name:'Home',
	components:{
		HomeHeader,
		HomeSearch,
		HomeCarousel,
		HomeContent,
		HomeRecommend,
		HomeList
	},
	data(){
		return {
			list:[]
		}
	},
	// mounted(){
	// 	this.playAxios()
	// },
	// methods:{
	// 	// playAxios(){
	// 	// 	this.$a.get('/restaurant/0/8').then(this.getDataRestaurant,err=>{
	// 	// 	console.log('有错',err)
	// 	// })
	// 	// },
	// 	// getDataRestaurant(res){
	// 	// 	res=res.data
	// 	// 	if(res.err){
	// 	// 			alert('数据有错')
	// 	// 	}
	// 	// 	this.list =res.data;
	// 	// 	console.log(this.list[0].image_path)
	// 	// }
	// }

}
</script>

<style  scoped>
.home-body{
	background:#fff
}
</style>