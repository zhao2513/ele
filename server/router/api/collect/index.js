const Router=require('koa-router');
const db=require('../../../libs/mysql');
const config=require('../../../config');

let router=new Router();
console.log('yes11')
router.get('collect/:type/:data/',async ctx=>{
	console.log('yes')
	let{type,data}=ctx.params;

	await db.insert('collect_table',{type,data});
	ctx.body={'ok':true}

});

module.exports=router.routes();