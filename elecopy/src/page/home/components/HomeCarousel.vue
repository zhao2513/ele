<template>
	
	<swiper :options="swiperOption"  ref="mySwiper" >
		<!-- slides -->
		<swiper-slide  v-for="(page,index) of pages" :key="index"><div class="carousel-body" >
		<ul>
			<li  v-for="item of page"><div class="carousel-li"><img :src="item.img_url">{{item.icon_word}}</div></li>
		</ul>

	</div></swiper-slide>
		

	</swiper>
</template>

<script type="text/javascript">



export default {
	name:'carousel',
	data(){
		return {
			swiperOption: {
				autoplay: false,
				//loop:true
			// some swiper options/callbacks
			// 所有的参数同 swiper 官方 api 参数
			// ...
			},
			imgs:[
			{img_url:'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
			icon_word:'美食'
			},
			{img_url:'https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
			icon_word:'晚餐'
			},
			{img_url:'https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
			icon_word:'水果'
			},
			{img_url:'https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
			icon_word:'医药健康'
			},
			{img_url:'https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
			icon_word:'浪漫鲜花'
			},
			{img_url:'https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
			icon_word:'汉堡披萨'
			},
			{img_url:'https://fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
			icon_word:'厨房生鲜'
			},
			{img_url:'https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
			icon_word:'甜品饮品'
			},
			{img_url:'https://fuss10.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
			icon_word:'速餐简餐'
			},
			{img_url:'https://fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
			icon_word:'地方小吃'
			},
			{img_url:'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
			icon_word:'美食'
			}
		]
	}

},
computed: {
	// swiper() {
	// return this.$refs.mySwiper.swiper
	// },
	pages(){
		const pages=[]
		for(let i=0;i<this.imgs.length;i++){

			let page=Math.floor(i/10);
			if (!pages[page]) {
			pages[page] = []
			}
			pages[page].push(this.imgs[i])
		}
		
		return pages
      }
    },
    // mounted() {
    //   // current swiper instance
    //   // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    //   console.log('this is current swiper instance object', this.swiper)
    //   this.swiper.slideTo(3, 1000, false)
    // }
}
</script>

<style  scoped lang="stylus">
.carousel-body
	background:#fff;
	overflow: hidden;
	margin-bottom:.4rem
	ul
		width:100%;
		li
			width:20%;
			text-align: center;
			float: left;
		    .carousel-li
				width:80%	
				margin: auto;
				font-size: .24rem;
				img
					width:100%
					padding: 0.18rem 0 0.1rem
</style>