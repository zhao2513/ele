const Router=require('koa-router');
const config=require('../config');
const db=require('../libs/mysql')
let router=new Router();


console.log('restaurant')
router.get ('restaurant/:page/:size',async ctx=>{

	let {page,size}=ctx.params;
console.log('restaurant11',page,size)
	if(isNaN(page)){
		page=0;
	}

	if(isNaN(size)){
		size=8;
	}
	//ctx.body='yes';
	// dbs.query(`SELECT * FROM collect_table WHERE ID=1`,(err,data)=>{
	// 	if(err){
	// 		console.log('ye')
	// 		console.log(err)
	// 	}else if(data.length==0){
	// 		console.log('shujuke')
	// 	}else{
	// 		console.log(data)
	// 	}
	// });
	let data=await db.query(`SELECT * FROM collect_table WHERE ID=1`)
	console.log('sss')
	//console.log(data.err)
	ctx.body=data;
})
module.exports=router.routes();













module.exports=router.routes();