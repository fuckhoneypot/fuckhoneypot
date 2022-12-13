长亭谛听蜜罐系统特征：
```
favicon1.ico_iconhash="a0a29b01861b7b8d2603d2f86fef6f26"
favicon2.ico_iconhash="d6399752ee952ece2a4644d5cb9dca02"
title="谛听（D-Sensor）"
title="D-Sensor"
body="D-Sensor© Chaitin Tech."
```
[Struts2蜜罐模板](https://raw.githubusercontent.com/fuckhoneypot/fuckhoneypot/main/%E9%95%BF%E4%BA%AD%E8%B0%9B%E5%90%AC%E8%9C%9C%E7%BD%90/Struts2%E8%9C%9C%E7%BD%90%E6%A8%A1%E6%9D%BF.jpg "Struts2蜜罐模板")特征：
```
body="unsafe-url" && title="BugScan"
body="unsafe-url" && title="BugScan Memos"
<script src="/（随机）.js" referrerpolicy="unsafe-url"></script></head>
```
[Shiro蜜罐模板](https://raw.githubusercontent.com/fuckhoneypot/fuckhoneypot/main/%E9%95%BF%E4%BA%AD%E8%B0%9B%E5%90%AC%E8%9C%9C%E7%BD%90/Shiro%E8%9C%9C%E7%BD%90%E6%A8%A1%E6%9D%BF.jpg "Shiro蜜罐模板")特征：
```
<script src="/js/jquery.min.js?t=1670813595"></script>
body="正在验证登录" && body="js/jquery.min.js?t=" && body="后台管理框架"
```
[OA蜜罐模板](https://github.com/fuckhoneypot/fuckhoneypot/blob/main/%E9%95%BF%E4%BA%AD%E8%B0%9B%E5%90%AC%E8%9C%9C%E7%BD%90/OA%E8%9C%9C%E7%BD%90%E6%A8%A1%E6%9D%BF.jpg "OA蜜罐模板")特征：
```
title="OA办公系统" && body="/static/js/2.ca599e2d.chunk.js?t="
title="OA办公系统" && body="http://127.0.0.1:8080/"
```
WordPress蜜罐模板特征：
```
body="WordPress site v4.5" && body="\u5c55\u5f00\u5b50\u83dc\u5355"
/wp-login.php
<script src="/（随机）.js" referrerpolicy="unsafe-url"></script></head>
<script type="text/javascript" src="/js/moment.js" referrerpolicy="unsafe-url"></script></head>
<script src="/（随机）.js"></script></head>
```
Jenkins蜜罐模板特征：
```
Sign in [Jenkins]
<script src="/ynqns（随机）.js" referrerpolicy="unsafe-url"></script>
```
Joomla蜜罐模板特征：
```
<script src="/media/jui/js/jquery.min.js?t=1670805856"></script>
```
