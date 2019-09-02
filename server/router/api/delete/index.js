const Router=require('koa-router');
const db=require('../../../libs/mysql');


let router=new Router();

router.delete('cart/:item_id/:count/' async ctx=>{
	let {item_id}=ctx.params;
	let user_id=ctx.user_id;

	await db.delete('cart_table',{item_id,user_id});
	ctx.body={ok:true}
})
module.exports=router.routes();