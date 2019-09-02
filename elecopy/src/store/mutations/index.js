export default {
	controlFoods(state,foodName){
		if(foodName=={}){//为空时，即是减
			state.newFoods=state.oldFoods
		}else{
			state.newFoods=[];//这个是大哥，清零，还保存count
			state.allTotal=0;//初始化后获取总数
			for(let name in state.oldFoods){
				state.oldFoods[name].forEach(item=>{
					if(item.count){
						state.allTotal+=(item.lowest_price*item.count)
						state.newFoods.push(item)
						
					}
					
				})
			}
		}
		
	}

}