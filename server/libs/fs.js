const fs=require('fs');

module.exports={
		readFile(path,options){
			return new Promise((resolve,reject)=>{
			fs.readFile(path,options,(err,data)=>{
				if(err){
					reject(err);
				}else{
					resolve(data)
				}
			})
		})
		.catch(error => console.log('caught', error));
		},

	writeFile(path,data,options){
		return new Promise((resolve,reject)=>{
		fs.writeFile(path , data,err=>{
			
				if(err){
					reject(err);
				}else{
					resolve()
				}
			})
		})
		.catch(error => console.log('caught', error));
	}
		
}