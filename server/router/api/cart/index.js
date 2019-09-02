const Router=require('koa-router');

const db=require('../../../libs/mysql');


let router=new Router();

router.post('cart/:item_id/:count',async ctx=>{
	console.log(ctx.params)
	let {item_id,count}=ctx.params;
	let user_id=ctx.user_id;

	let datas=await db.select('ID,count','cart_table',{item_id,user_id});

	if(datas.length==0){

		//添加一个
		await db.insert('cart_table',{user_id,item_id,count})
	}else{
		let data=datas[0];
		console.log(data.count)
		await db.update('cart_table',data.ID,Number(data.count)+Number(count))
	}
});

module.exports=router.routes();