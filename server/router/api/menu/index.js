const Router=require('koa-router');
 const db=require('../../../libs/mysql');
let router=new Router();

router.get('menu/:restaurant_id',async ctx=>{
	console.log('menu')
	let {restaurant_id}=ctx.params;

	let data=await db.select('*','restaurant_table',{restaurant_id:restaurant_id})
	let datas=await db.select('*','menu_table',{ID:restaurant_id})
	//let datas=await db.query(`SELECT * FROM  menu_table WHERE ID='${restaurant_id}'`);
	if(datas.length==0){
		console.log(datas+'youcuo')
		ctx.response.body={err:true,datas:[],data:[]};
	}else{
		ctx.response.body={err:false,datas,data};
	}
})
module.exports=router.routes();