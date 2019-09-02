const koa=require('koa');
const db=require('./libs/mysql');
const Router=require('koa-router');
const static=require('koa-static');
const config=require('./config');
const pathlib=require('path');
const url=require('url')

const server=new koa();

server.use(async (ctx,next)=>{
	if(ctx.request.headers['origin']&& url.parse(ctx.request.headers['origin']).hostname=='localhost'){
		ctx.set('Access-Control-Allow-Origin','*');//设置跨域的头
	}
	await next();
})
server.listen(config.PORT);

server.use(async (ctx,next)=>{
	ctx.user_id='用户0001';
	await next();//必须加next
})

server.use(static(pathlib.resolve(__dirname,'www/')))//当前server目录下+'www'

let router=new Router();

server.use(router.routes())
//router.use('/api/',require('./router/api'))
router.use('/api/',require('./router/api/collect/'));
router.use('/api/',require('./router/api/restaurant/'))
router.use('/api/',require('./router/api/menu/'));
router.use('/api/',require('./router/api/cart/'));
