const fetchHtml=require('./libs/fetch-html-blue');
const zlib=require('zlib');
const fs=require('./libs/fs');
const db=require('./libs/mysql');
const pathlib=require('path');
const mysql=require('mysql');



async function aa(){
	let dbs=mysql.createPool({
	host:'localhost',
	user:'root',
	pass:'',
	database:'eleme',
	port:8081
})
	console.log('111')
 dbs.query('SELECT name FROM `restaurant_table` LIMIT 0, 8',(err,data)=>{
	if(err){
		console.log('111');
		console.log(err)
	}else{
		console.log(data)
	}
});
// console.log(datas)
}
aa();

// function fetch(options){
// 	return new Promise((resolve,reject)=>{
// 		fetchHtml(options).then(result=>{
// 			let {buffer,headers}=result;


// 				if(headers['content-encoding']=='gzip'){
// 					zlib.gunzip(buffer,(err,data)=>{
// 						if(err){
// 							console.log('有错1')
// 							reject(err)
// 						}else{
							
// 							resolve(data)
// 						}
// 					})
// 				}else{
// 					resolve(buffer)
// 				}

// 		},err=>{
// 			console.log('数据库有错2',err)
// 			reject(err);})
// 	})
// 	.catch(error => console.log('caught', error));
// }




// async function getRestaurants(page=0){
// 	let offset=page*8;
// 	// let limit=page*8;
// 	//let url=`https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=21.467583&longitude=109.122649&offset=${offset}&limit=${limit}`;
// 	let url='https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=21.467583&longitude=109.122649&offset=8&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5'
// 	//let url='https://h5.ele.me/pizza/shopping/restaurants/E3907964109124241559/batch_shop?user_id=4855882034&code=0.9787986517411451&extras=%5B%22activities%22%2C%22albums%22%2C%22license%22%2C%22identification%22%2C%22qualification%22%5D&terminal=h5&latitude=21.467583&longitude=109.122649';

// 	let buffer= await fetch({url,method:'get'});

// 	let json=JSON.parse(buffer.toString())
// 	let datas=json.items.map((item,index)=>{
// 		let restaurant=item.restaurant;

// 		return {
// 			ID:index,
// 			restaurant_id:        restaurant.id||'',
// 			name :                restaurant.name||'',//店名
// 			distance:             restaurant.distance||'',//距离
// 			tips:                 restaurant.piecewise_agent_fee.tips||'免配送费0',
// 			recent_order_num:     restaurant.recent_order_num||'',//月售
// 			rating:               restaurant.rating||'',//评分
// 			float_delivery_fee:   restaurant.float_minimum_order_amount||0,//起送价
// 			latitude:             restaurant.latitude||'',//经纬度
// 			order_lead_time:        restaurant.order_lead_time||'',//配送时间
// 			longitude:            restaurant.longitude||'',//经纬度
// 			image_path:            restaurant.image_path||'',
// 			rating_count          :restaurant.rating_count||''

// 		}
// 		//console.log(restaurant)
// 	});

// console.log(datas)
// console.log(datas.length)
// 	for( let i=0;i<datas.length;i++){
// 		let data=datas[i];
// 		let img_url='/'+data.image_path[0]+'/'+data.image_path.substring(1,3)+'/'+data.image_path.substring(3);


// 		if(img_url.endsWith('jpeg')){
// 			img_url+='.jpeg';
// 		}else if(img_url.endsWith('png')){
// 			img_url+='png';
// 		}else{
// 			assert(0);
// 		}
// 		let imgs_url='https://fuss10.elemecdn.com'+img_url;
// 		let img_buffer=await fetch(imgs_url);


// 		await fs.writeFile(pathlib.resolve(__dirname,'./images/',data.image_path),img_buffer);
// 		//await fs.writeFile('imgs_url.json',img_buffer,)
		


// 	}

// 	for( let i=0; i< datas.length;i++){

// 		// let keys=[];
// 		// let vals=[];
// 		// for(let key in data ){
// 		// 	keys.push(key);
// 		// 	vals.push('\''+ data[key].toString().replace(/'/g,"\\'").replace(/'/g,"\\\"")+'\'')
// 		// }
// 		// 
		
// 		await db.insert('restaurants_table',datas[i]);

// 	}
	
// }
// getRestaurants(1)
// // async function clawerRestaurant(){
// // 	for(let i=0;i<10;i++){
// // 		getRestaurants(i)
// // 		console.log(`第${i}页`)
// // 	}
// // }

// // setTimeout(clawerRestaurant,100)





//爬取菜单信息
// async function getMenu(id){
// 	let url=`https://h5.ele.me/pizza/shopping/restaurants/${id}/batch_shop`;
// 	//let json=fetchHtml({url});

// 	let buffer= await fetch({url,method:'get'});

// 	let json=JSON.parse(buffer.toString())

// 	let datas=json.menu.map(item=>{
// 		let name=item.name;
// 		let foods_name,image_path,lowest_price,satisfy_rate,month_sales,ID,description;
// 		let results={};
// 		console.log(item.foods.length+"fods")
// 			results=item.foods.map(food_item=>{

// 				foods_name=food_item.name;
// 			image_path=food_item.image_path;
// 			lowest_price=food_item.lowest_price;
// 			satisfy_rate=food_item.satisfy_rate;
// 			month_sales=food_item.month_sales;
// 			ID=food_item.restaurant_id;
// 			description=food_item.description||'';
// 			return {
// 			name: 			name,
// 			ID: 			ID,
// 			image_path: 	image_path,
// 			description: 	description,
// 			lowest_price: 	lowest_price,
// 			foods_name: 	foods_name,
// 			satisfy_rate: 	satisfy_rate,
// 			month_sales: 	month_sales,
// 		}
// 			})
// 			console.log(results.length)
		
// 		return results
// 	})
// 		console.log(datas.length)
// 	console.log(datas)


// 	// for(let i =0;i<datas.length;i++){
// 	// 	let data=datas[i];
// 	// 	 console.log(data[i].image_path)
// 	// 	 for(let i =0;i<data.length;i++){
// 	// 	let img_url='/'+data[i].image_path[0]+'/'+data[i].image_path.substring(1,3)+'/'+data[i].image_path.substring(3);
	
// 	// 	
// 	// 	
// // 		if(img_url.endsWith('jpeg')){
// // 			img_url+='.jpeg';
// // 		}else if(img_url.endsWith('png')){
// // 			img_url+='png';
// // 		}else{
// // 			assert(0);
// // 		}
// // 		let imgs_url='https://fuss10.elemecdn.com'+img_url;
// // 		let img_buffer=await fetch(imgs_url);


// // 		await fs.writeFile(pathlib.resolve(__dirname,'./images/',data.image_path),img_buffer);
// // 		//await 
// 	// }
// 	// }

// 	for(let i=0; i<datas.length;i++){
// 		let data=datas[i];
// 		for(let i=0;i<data.length;i++){
// 			await db.insert('menu_table',data[i])
// 		}
		
// 	}
	
// }
// getMenu('E1760582611490519654')

//菜单函数结束












