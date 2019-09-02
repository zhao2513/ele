module.exports={
	toImg:function(allData){
		let imgs_url,distances;
			for( let i=0;i<allData.length;i++){

				//设置图片
				let data=allData[i];
				let img_url='/'+data.image_path[0]+'/'+data.image_path.substring(1,3)+'/'+data.image_path.substring(3);

				if(img_url.endsWith('jpeg')){
					img_url+='.jpeg';
				}else if(img_url.endsWith('png')){
					img_url+='.png';
				}else{
					console.log('格式有错')
				}
				 imgs_url='https://fuss10.elemecdn.com'+img_url;
					
					this.listData=allData
					allData[i].images_path=imgs_url;
					//console.log(allData[i].images_path)

				//设置距离
				distances=allData[i].distance
					allData[i].distances=distances>1000?`${(distances/1000)}km`:`${distances}m`
					
				}
				return allData;
	},
	toScreen:function(allData){//排序
		return allData.sort().filter((a,b,c)=>{
						if(a!=c[b+1]){
							return a
						}
					});
	}
}