该蜜罐可以反制burp

蜜罐模板页面标题特征：
```
GPON Home Gateway
BIG-IP®- Redirect
CMS Web Viewer
```
源代码中很明显的一个注释ip特征：
```
172.104.73.17
```
jsonp特征：
```
https://data.sloss.xyz/cloud.js?access=5oCd5peg6YKq
https://data.sloss.xyz/jquery.js
```
jsonp数据上传特征：
```
POST https://upload.sloss.xyz/5piv6ZmM5LiK5Lq6
POST https://upload.sloss.xyz/5piv6Iqx6Ze06Iie
```
源代码加载js特征：
```
<script src="https://data.sloss.xyz/cloud.js?access=5oCd5peg6YKq"></script>
```
jsonp接口：
```
http://burp/favicon.ico

https://www.cmpassport.com/h5/onekeylogin/getNewUnicomPhonescrip

https://www.cmpassport.com/h5/onekeylogin/getNewTelecomPhonescrip

https://verify.cmpassport.com/h5/httpsPreGetmobile

https://id6.me/auth/preauth.do?paramKey=10F72757C5A5A12B0A6DA61E62BDF3238163CC31B9CC3CC506CCD6BF67D3BC8CEEC92DAF1ED125BC4F681D118A2ED62D8CD18EE0629220BD69802469FAB4E1C62067CA310EDC5E1A2DCDCF0E8202AA852D611A0B78364344F15A866395C9AAF3C1061C9F6B1ACDCAB232960AC6F14D615ED5184184BDB125AC647A8422EC25D7&clientType=2&paramStr=39826A2D6BADA0327947D80463C1422C01D472F90ECC1B7FC72D262D1C7AC4FC201506C46971655C6C67C5714F232A532126204E40DD35C24C4264AC5D106D9EBEFEBB98157CB7230F5F8BF1788608CA3CF9F38998815804A4652BF20C1EB763525257296155BAF2B4B46836ED276DE6944344B4135D94555640885B4363C4AD&appId=8013416909&format=jsonp&sign=C733AA0C9B2F41175F94344CAF0AA227C2F2B199&version=1.5&

https://opencloud.wostore.cn/openapi/netauth/precheck/wp?timeStamp=1659325750804&packname=xxx&business_type=1&format=jsonp&sign=FCE6F4692C5FEDD8993FDEBD079EBF49&callback=getNewUnicomPhone&fp=&client_type=7&version=v4.5&client_id=99166000000000000228&key=c4ZMLe9%2F1iX9Do2h4FGMqy5vC0IzZ%2Fgj9LePAFU%2BwTSc%2BHUbB6W1arA9YDRqR7HjFok226YHwwJrLq06Da%2BBMBM%2FPV7%2FexfV3uV%2BbR0xzMz4Xy%2F1pKyIriuaXA%2BieaQeYtvjXs1gTYXWc%2F8vZb3TODk9cKywn9FOI7m3iqrJUko%3D&packsign=xxx&

https://openfpcdn.io/fingerprintjs/v3

https://www.taobao.com/help/getip.php?callback=ipCallback

https://tieba.baidu.com/tbmall/gettdouiconinfo?callback=jsonp1613919078534

https://www.qidian.com/ajax/UserInfoFemale/GetUserInfo?areaid=6&appid=10&format=jsonp&method=autoLoginHandler&autoLoginHandler=&_=1607051376245&callback=autoLoginHandler

https://www.yy.com/yyweb/user/queryUserInfo.json?callback=jsonp

https://www.qidian.com/ajax/UserInfoFemale/GetUserInfo?areaid=6&appid=10&format=jsonp&method=autoLoginHandler&autoLoginHandler=&_=1607051376245&callback=autoLoginHandler

https://v2.sohu.com/api/pc-home-city/home-data/ip2location?_=1606458878259&callback=jQuery1124018281896477578718_1606458878259

https://widget.weibo.com/public/aj_relationship.php?fuid=2991975565&callback=STK_16073033003861

https://yuedu.baidu.com/nauser/getyduserinfo?na_uncheck=1&opid=wk_na&callback=bd
```
