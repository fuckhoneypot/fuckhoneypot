默安幻阵蜜罐系统特征：
```
iconhash="a274b071560a7f32cba1cbc4d9e014b9"
title="幻阵"
body="/static/video.b1f7b70b.mp4"
```
然之协同OA蜜罐模板特征：
```
iconhash="9fd6f0e56f12adfc2a4da2f6002fea7a"
title="然之协同"
body=">v.ignoreNotice"
```
然之协同OA蜜罐加载js特征：
```
<script src='https://api.zdoo.com/updater-latest-biz5.7.4.html?v=biz5.7.4' type='text/javascript'></script>
<script src='http://api.ranzhico.com/updater-latest-pro2.2.2.html?v=pro2.2.2' type='text/javascript'></script>
<script src='http://api.ranzhico.com/updater-latest-3.7.html?v=3.7' type='text/javascript'></script>
<script src='http://api.ranzhi.org/updater-latest-5.2.html?v=5.2' type='text/javascript'></script>
<script src='http://api.ranzhico.com/updater-latest-4.5.html?v=4.5' type='text/javascript'></script>
```
ranzhico.com域名正在出售

api.ranzhi.org跳转api.zdoo.com

目前在用：https://api.zdoo.com/user-deny-index-index.html

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

默安幻阵蜜罐最快捷有效的识别方式就是查看源代码是否有直接加载的加密js代码或加载js文件中是加密js代码以及jsonp获取是通过iframe嵌入。
