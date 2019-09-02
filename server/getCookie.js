// const express=require('express');
// //let router=express.Router();

// let server=express();
// //server.listen('https://h5.ele.me/');

// server.use('https://h5.ele.me/',(req,res,next)=>{
// console.log(req.cookies['ubt_ssid']);
// next();
// })

// var session = require('cookie-session')
//  const req_options={
//         hostname: obj.https://h5.ele.me/,
//         port: obj.port||port,
//         path: obj.path,
//         method: options.method,
//         headers: options.headers
//       };
//  let _req_obj=mod.request(req_options, (res)=>{

//  })





 var session = require('cookie-session')
var express = require('express')
var app = express()

var expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour
app.use(session({
  name: 'session',
  keys: ['ubt_ssid'],
  cookie: {
    secure: true,
    httpOnly: true,
    domain: 'h5.ele.me',
    //path: 'foo/bar',
    expires: expiryDate
  }
}))
