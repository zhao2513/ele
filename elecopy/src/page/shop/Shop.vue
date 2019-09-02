<template>
	<div class="shop-body">
		<shop-header :headerData="titleDatas"></shop-header>
		<shopList  
		:contentDatas="contentDatas"
		/>
		<shopCart/>
	</div>
</template>

<script type="text/javascript">
import shopHeader from './components/shopHeader'
import shopList from './components/shopList'
import shopCart from './components/shopCart'
export default {
	name:'shop',
	components:{
		shopHeader,
		shopList,
		shopCart
	},
	data(){
		return{
			titleDatas:[],
			contentDatas:{},
		}
	},
		methods:{
		getMenuData(){
			this.$a.get(`menu/${this.$route.params.id}`).then(res=>{
			res=res.data
			if(res.err){
					alert('数据有错')
			}
			//把数据给list
			this.titleDatas =res.data;

			 this.$toImg(this.titleDatas);

			let contentDatas =res.datas;
			let arrName=[];

			//把相同类型的菜品筛选出来
			for(let i=0;i<contentDatas.length;i++){
				arrName.push(contentDatas[i].name)
			}

			let mainList=this.$toScreen(arrName)
			this.$toImg(contentDatas)
				let objList={};//存新排序好的数组
			for(let i=0;i<mainList.length;i++){

			objList[mainList[i]]=[];

			contentDatas.forEach((contentItem,contentId)=>{

			//如果为count为undefine,
			//shopList组件if-show监听不到数据的变化
			if(!contentItem.count){
				contentItem.count=0
			};
				//判断如果相同则把对象放进去：‘螺蛳粉’：[{},{}]
				if(mainList[i]==contentItem.name){
					
					objList[mainList[i]].push(contentItem);
				}
			})
		}
			this.contentDatas=objList;
			this.$store.state.oldFoods=objList;
			},err=>{
				console.log('传输有错')
			})
		
		},
	},
	mounted(){//mounted后再传给子组件的props
		this.getMenuData()
	}

}
</script>

<style  scoped>
.shop-body{
	background:#fff
}
</style>