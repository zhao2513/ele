const mysql=require('koa-mysql');
const config=require('../config');
const assert=require('assert')

let db=mysql.createPool({
	host:config.DB_HOST,
	user:config.DB_USER,
	password:config.DB_PASS,
	port:config.DB_PORT,
	database:config.DB_NAME,
});

function filterValue(val){
	return val.toString().replace(/'/g,"\\'").replace(/"/g,"\\\"")
	}




let _q=db.query.bind(db);
db.query=function(sql){
	//检测传过来的sql语法是否有错
	console.log(sql)
	return new Promise((resolve,reject)=>{
		let fn=_q(sql);

		fn((err,data)=>{
			if(err){
				reject(err);
			}else{
				resolve(data);
			}
		})
	})
}





//添加
db.insert=function(table,data){
	let keys=[];
	let vals=[];

	for(let key in data ){
		keys.push(key);
		// if(data[key]){
			vals.push('\''+filterValue(data[key])+'\'');
			//}
		
		
	}

	console.log('差不多成功')

	 return db.query(`INSERT INTO ${table} (${keys.join(',')}) VALUES(${vals.join(',')})`);
	}





//select查询获取
db.select=function(fiels,table,where){
	if(!where){
		where='1=1';
	}else{
		let arr=[];
		for(let key in where){
			arr.push(`${key}='${filterValue(where[key])}'`);
			//把单引号 '转化为\'   "  => \"
		}
		where=arr.join(' AND ')
		console.log(where)
	}

	return db.query(`SELECT ${fiels} from ${table} WHERE ${where} `)
	}


//update更新
db.update=function(table,data){

	let arr=[];
		for(let key in data){
			arr.push(`${key}='${filterValue(data[key])}'`);
			//把单引号 '转化为\'   "  => \"
		}

	return db.query(`UPDATE ${table} SET ${arr.join(',')} WHERE ID='${ID}'`)
	}



//delete删除
db.delete=function(table,where){
	assert(where);
	assert(typeof where=='object');

	let arr=[];
		for(let key in where){
			arr.push(`${key}='${filterValue(where[key])}'`);
			//把单引号 '转化为\'   "  => \"
		}
		where=arr.join('AND')

		db.query(`DELETE FROM ${table} WHERE ${where}`)
}












module.exports=db