const _headers={
//'content-encoding':'gzip,deflate, br',//不加会返回原始的值
  'authority':'h5.ele.me',
  'method':'get',
  'path':'/restapi/shopping/v3/restaurants?latitude=21.467583&longitude=109.122649&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5',
  'referer':'https://h5.ele.me/',
  'x-shard':'loc=109.122649,21.467583',
  'scheme':'https',
  'accept':'application/json, text/plain, */*',
   'accept-encoding':'gzip, deflate, br',
  'accept-language':'zh-CN,zh;q=0.9,en;q=0.8',
  'cache-control':'max-age=0',
  'cookie':'ubt_ssid=ebaenrv6he11p4qyckmxdpchnjsptxic_2019-07-18; perf_ssid=ejcg71nt4i6wafn2zp64tj8hrhyd2vtg_2019-07-18; _bl_uid=nyja2yUm85pfU960je66mkFt2thn; cna=uNN3FFKdzQgCAbSNe1mHl4US; _utrace=19141a19d8677fd415c5b6a3ed0d8f7e_2019-07-18; tzyy=e23a7c0e556105f9c8c33864da97b058; _uab_collina=156344362119728900916806; track_id=1563439465|81371766e5f6ebbe3d512b3a29e48da7292f1d9238e4ae782d|4c74f196bbb24a507ba310b9732d114f; USERID=4855882034; SID=8ghqaWO7DkHRkBLmvm69mv38pTuZnsvAQSvw; ZDS=1.0|1563444177|OgBlBF6++ir/mtpMuu15CVQjpPFc9kh0hb/V0YiNPJRq8FvGvp1XW6zvwKBGlMRL; pizza73686f7070696e67=_HHDoSEnvf2x_BZ4BJF9VwYfA17PZBt8G5rGZDQlkQ17CvaG-RRG8ZDyQIuhr-kN; _umdata=GAE6B30FF640CD758290D57BD842FAEB054F110; pizza-rc-ca-result=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGciOiJIUzI1NiIsImV4cCI6MTU2MzUyNjcxMSwic2FsdDEiOiI2NmQ5Mjk1M2Y1YTY3YTFlYWE5ZmFhZmQxZTEzOWRiZiIsInNhbHQyIjoiYWJlYjA3OGIzMzc5ZWE4YjlkZTdmNDRlMWNmNGM5NzQifQ.pOq9SoycU8VnFyAQXZ-Sscxgv5rvHNR-uuWxvOHNEus; UTUSER=4855882034; pizza7567632f76332f72=5xMqRQuOWng_3Lh8jjs5aE1V9AGasfJ3Y1oIPsNV7rug3ojNu_rI899WAo32AY3I; isg=BDU14SWihMVcl-B4CFa0wZhVRLEvGuugUSHe57da9qz7jlSAfwLjlFSP2BAdzgF8; ut_ubt_ssid=wc2h5ka7873phvazdwfvif6tc58wclxh_2019-07-18',
  'x-uab':'118#ZVWZzxDH4YDh5ex4Bg1MZYquZYT4zHWzZgC2S0yM+TgTVeqTyHRxZZgZZzqhzHRzZgCZXfquZg2zZZFhXHPGzZ2Zzl8TzeWzzgeuVfq4zH2ZZZChXHR4ZggZZzqhzHRZZXquVfq4zH2zZD5ygZJwZ8WAkNYGYwg7rg7gU52VQeuSZseZSV2gsm5nrG7HPz9h+jgnq4UK50pxD/R7ZZe3L4PXZZxqMH2285zfZYiP+C4lCtVzh3t0df9X0kbHdQr9FZcmfDMfiJ4Q49djhrGBfGXa5gmQne68oNQwTTi+ru+xF0zbGKahDoX4twm7UqtwikFcTIy39pz3+6cG0gN0nxk9jssLXWMmlRsfYziKRjFQlEREdYrrHGGUMTY5SNow/w1JyBEyGP1ltJ8+FqViYXmtkahq2q8MALxBVOId2jCw9fThRevZnKtW6Qnj5nS0rrq=',
   'user-agent': ' Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',

//menu
// 'authority':'h5.ele.me',
// 'method':'GET',
// 'path':'/pizza/shopping/restaurants/E1760582611490519654/batch_shop?user_id=4855882034&code=0.18072897260243015&extras=%5B%22activities%22%2C%22albums%22%2C%22license%22%2C%22identification%22%2C%22qualification%22%5D&terminal=h5&latitude=21.467583&longitude=109.122649',
// 'scheme':'https',
// 'accept':'application/json, text/plain, */*',
// 'accept-encoding':'gzip, deflate, br',
// 'accept-language':'zh-CN,zh;q=0.8',
// 'cookie':'ubt_ssid=ebaenrv6he11p4qyckmxdpchnjsptxic_2019-07-18; perf_ssid=ejcg71nt4i6wafn2zp64tj8hrhyd2vtg_2019-07-18; _bl_uid=nyja2yUm85pfU960je66mkFt2thn; cna=uNN3FFKdzQgCAbSNe1mHl4US; _utrace=19141a19d8677fd415c5b6a3ed0d8f7e_2019-07-18; tzyy=e23a7c0e556105f9c8c33864da97b058; _uab_collina=156344362119728900916806; track_id=1563439465|81371766e5f6ebbe3d512b3a29e48da7292f1d9238e4ae782d|4c74f196bbb24a507ba310b9732d114f; USERID=4855882034; SID=8ghqaWO7DkHRkBLmvm69mv38pTuZnsvAQSvw; ZDS=1.0|1563444177|OgBlBF6++ir/mtpMuu15CVQjpPFc9kh0hb/V0YiNPJRq8FvGvp1XW6zvwKBGlMRL; _umdata=GAE6B30FF640CD758290D57BD842FAEB054F110; ut_ubt_ssid=wc2h5ka7873phvazdwfvif6tc58wclxh_2019-07-18; UTUSER=4855882034; pizza-rc-ca=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjM2MDMxNDAsInNhbHQxIjoiNjZkOTI5NTNmNWE2N2ExZWFhOWZhYWZkMWUxMzlkYmYiLCJzYWx0MiI6IjEwZjI3Yjk4ZjdiMjhmNWRiZTY4YWIxZmVmNDEzMDhiIn0.cSnP6s6SM3-itLieB1J5oi20-fCaK72sBaijm7oFokY; pizza-rc-ca-result=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGciOiJIUzI1NiIsImV4cCI6MTU2MzYwNDg4MCwic2FsdDEiOiI2NmQ5Mjk1M2Y1YTY3YTFlYWE5ZmFhZmQxZTEzOWRiZiIsInNhbHQyIjoiMTBmMjdiOThmN2IyOGY1ZGJlNjhhYjFmZWY0MTMwOGIifQ.bi27Epe4zf8t2nqbdbqP9m29Hw8RoAg3Nv8iJj1pyxI; isg=BL6-wWmgb1v0ubt9t2uPbN8QD9TAV4Ad2ams2GjHK4B-C1_l0I-eiib9hZFiM3qR',
// 'referer':'https://h5.ele.me/shop/',
// 'user-agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
// 'x-shard':'shopid=E1760582611490519654;loc=109.122649,21.467583',
// 'x-uab':'118#ZVWZzSm2cD5VsZ7lBHvIZYquZYT4zHWzZgC2Voq4m0gTVeqTyHRVPgZuusqhzeWZZZZZXoqVzeAuZZZh0HWVZyb/Zz6TW1ZzZgeCc5qVzHZzZeZTVHRVZZZuZwqhzeWzZZZuXTbVzHZzZeZhTgKfgH2Z5Nh6DwmYtHFUpoq4cAIJ+Q1VIgxgxsu2Ule+Lm5aho6yszapXOZ7McH5iidw1frTgRVa5GNWQwJ9UE2MQ4Pw8mndtSTSbsxKflQ0fuyF6iGUR8cI+dP33dS8D3q7ZZe3L4PXZZxqFZS/mCsoZYiP+7Mw/HTwYqOTuV0uRHekS/7Iens62wTHsNXY0mic3e7zvieQyLZOx6/hFKcwJuPguI+CeNvT+HW66PKF2zhN0cxTwvEM8++c9uRxBAMHelESI9u0B2g22YIUklaAijnmC/e9PxpKUy/nAt4IdZFOfdXFQrGiKQZ1k47LwAZrXxvkUf9uEak99hmc2LHNfa352DtMl9qJmKLx86PNwSxHG5L+ig/gYAbqBLbMkXNm7ea/ofwrzG1sm8v4Sp3gYvvM8AtAVppXgVOP6ZaovoamCaILiEPmjF4RvMaIPsGX7P+hhOOY5ydRg3WaOVUe9mIn9Jh7pZFRAgiVNw3dlyYoXKURYDwCleN5MDeDYkjkJBMFmslvH1//llws/YyV72pLfR2ciOUrC7qfEhUsjb+95ujLG4XoNiSi4ZhZws7ZHTeMfWTr5BG/xvhOKe0MPIWbbD8Vg/n2mvuIbT6A2w3YxthZV+hYA465Eszhdg1hL65h/pYu6evHU7/PsmMHe3LqclJei31ITrN/ZDTMLlhz9gwoao2N20QaNg=='




  //豆瓣
  //'host':'movie.douban.com',
 // 'accept-encoding':'gzip, deflate, br',
 //  'cookie':'ll="118309"; bid=IcCbnvgs7dU; UM_distinctid=16beef7544d10-0d06299fe1dab8-49433e1e-144000-16beef7544e18f; ap_v=0,6.0; _pk_ref.100001.4cf6=%5B%22%22%2C%22%22%2C1563082319%2C%22https%3A%2F%2Fwww.douban.com%2F%22%5D; __utmt=1; __yadk_uid=8H1BuSFqbUpfSq9csXI5jeY8nyOfx3Ba; _pk_id.100001.4cf6=d5b010f4de97217a.1563082319.1.1563082329.1563082319.; _pk_ses.100001.4cf6=*; __utma=30149280.480337625.1563082319.1563082319.1563082319.2; __utmb=30149280.1.10.1563082319; __utmc=30149280; __utmz=30149280.1563082319.2.2.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __utma=223695111.999828030.1563082319.1563082319.1563082319.1; __utmb=223695111.0.10.1563082319; __utmc=223695111; __utmz=223695111.1563082319.1.1.utmcsr=douban.com|utmccn=(referral)|utmcmd=referral|utmcct=/; _vwo_uuid_v2=DF556B41A57BFE7B79ECCFDA8339DD8B7|bdee9a5539ce1909a308ae88697d5fe9; CNZZDATA1256793262=336951249-1563077957-https%253A%252F%252Fwww.douban.com%252F%7C1563077957',
 //  'user-agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.90 Safari/537.36 2345Explorer/9.7.0.18838'
};

const DEBUG=false;

function debug_log(...args){
  if(DEBUG){
    console.log(`[${new Date().toGMTString()}]`, ...args);
  }
}

//url, method, headers, postdata
module.exports=function (options){
  if(typeof options=='string'){
    options={
      url: options,
      method: 'GET',
      headers: {}
    };
  }else{
    options=options||{};
    options.method=options.method||'GET';
    options.headers=options.headers||{};
  }

  //handle headers
  for(let name in _headers){
    options.headers[name]=options.headers[name]||_headers[name];
  }

  return new Promise((resolve, reject)=>{
    _req(options);

    function _req(options){
      debug_log('start fetch11111111111111111', options.url);
      var obj=require('url').parse(options.url);
      //console.log(obj)

      //chioce mod
      let mod=null;
      let port=0;
      switch(obj.protocol){//protocol:协议头：如https
        case 'https:':
          mod=require('https');
          port=443;
          break;
        case 'http:':
        default:
          mod=require('http');
          port=80;
          break;
      }

      //headers.host=headers.host||obj.hostname;

      const req_options={
        hostname: obj.hostname,
        port: obj.port||port,
        path: obj.path,
        method: options.method,
        headers: options.headers
      };

      let _req_obj=mod.request(req_options, (res)=>{//实际是请求http.hostname
        console.log(res.statusCode+'0000')
        if(res.statusCode!=200){
          console.log(res.statusCode)
          if(res.statusCode==302 || res.statusCode==301){
            debug_log('redirected', res.headers['location']);

            options.url=res.headers['location'];
            options.method='GET';
            delete options.postdata;
            _req(options);
          }else{
            debug_log('error occurred');
            debug_log(res.statusCode);
            debug_log(res.headers);
            reject(res);
          }
        }else{
          var arr=[];
          res.on('data', (data)=>arr.push(data));
          // console.log(Buffer.concat(arr))
          res.on('end', ()=>resolve({
            buffer:Buffer.concat(arr),
            headers:res.headers 
          }));
        }
      });
      _req_obj.on('error', e=>reject(e));
      _req_obj.write(options.postdata||'');
      _req_obj.end();
    }
  });
};
