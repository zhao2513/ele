const Router=require('koa-router');
//const config=require('../../../libs/config');
const db=require('../../../libs/mysql');



let router=new Router();
console.log('restaurant')
router.get ('restaurant/:page/:size',async ctx=>{

	let {page,size}=ctx.params;
console.log('restaurant11',page)
	if(isNaN(page)){
		page=0;
	}

	if(isNaN(size)){
		size=8;
	}
	let data = await db.query(`SELECT * FROM restaurant_table LIMIT ${page*size},${size}`);

	if(data.length==0){
		ctx.response.body={err:true,data:[]};
	}else{
		ctx.response.body={err:false,data};
	}
})
module.exports=router.routes();