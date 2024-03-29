!function(a,b,c){"use strict";var d=function(a,b,d){d||d===c?e.prototype[a]=b:e[a]=b},e=function(d){if(this===a||this===c)return new e(d);var f=typeof d;if("string"===f)this._selector(d,b);else if(1===d.nodeType||d===a)this[0]=d;else if(d[0]&&1===d[0].nodeType)for(var g=0,h=d.length;h>g;g++)this[g]=d[g];return this};d("_selector",function(a,c){if(0===a.indexOf("#"))this[0]=b.getElementById(a.replace("#",""));else for(var d=0===a.indexOf(".")?c.getElementsByClassName(a.replace(".","")):/^[a-zA-Z]+$/.test(a)?c.getElementsByTagName(a):c.querySelectorAll(a),e=0,f=d.length;f>e;e++)this[e]=d[e]}),d("ajax",function(a){var b=new XMLHttpRequest,d=a.data,e=a.dataType;b.onreadystatechange=function(){if(4===b.readyState){var c,d=b.responseText;if("json"===e)try{c=JSON.parse(d)}catch(f){c=d}else c=d;200===b.status?"function"==typeof a.success&&a.success(c,b):"function"==typeof a.error&&a.error(c,b)}};var f=a.type!==c?a.type.toUpperCase():"GET",g=["POST","PUT","DELETE"];b.open(f,a.url,!0),-1!==g.indexOf(f)&&("object"==typeof d?b.setRequestHeader("Content-Type","application/json"):b.setRequestHeader("Content-Type","application/x-www-form-urlencoded")),"json"!==e||"object"!=typeof d||Array.isArray(d)||(d=JSON.stringify(d)),b.send(d)},!1),d("getJSON",function(a,b){return e.ajax({dataType:"json",url:a,success:b})},!1),"object"==typeof b.documentElement.classList?(d("hasClass",function(a){return this[0].classList.contains(a)!==!1?this:!1}),d("addClass",function(a){return this[0].classList.add(a),this}),d("removeClass",function(a){return this[0].classList.remove(a),this}),d("toggleClass",function(a){return this[0].classList.toggle(a),this})):(d("_ClassesBase",function(a,b,c){var d=a.className.split(" ");if(c)d.push(b);else{var e=d.indexOf(b);-1!==e&&d.splice(e,1)}a.className=d.join(" ")}),d("hasClass",function(a){return-1!==this[0].className.split(" ").indexOf(a)?this:!1}),d("addClass",function(a){return this.hasClass(a)||this._ClassesBase(this[0],a,!0),this}),d("removeClass",function(a){return this.hasClass(a)&&this._ClassesBase(this[0],a,!1),this}),d("toggleClass",function(a){return this.hasClass(a)?this.removeClass(a):this.addClass(a),this})),d("click",function(){var b;return function(c){return b||(b="function"==typeof a.FastButton?function(a){new FastButton(this[0],a)}:function(a){this.on("click",a)}),b.call(this,c),this}}()),d("resizeEnd",function(a){return this.on("resize",function(){typeof this.resizeEndTimeout!==c&&clearTimeout(this.resizeEndTimeout),this.resizeEndTimeout=setTimeout(a,200)}),this}),d("each",function(a){for(var b in this)1===this[b].nodeType&&a(this[b]);return this}),d("on",function(a,b){return this[0].addEventListener(a,b,!1),this}),d("off",function(a,b){return this[0].removeEventListener(a,b,!1),this}),d("extend",function(){for(var a=arguments,b=1,c=a.length;c>b;b++)for(var d in a[b])a[b].hasOwnProperty(d)&&(a[0][d]=a[b][d]);return a[0]},!1),d("find",function(){var a;return function(b){a||(a=function(a){for(var b in a)a.hasOwnProperty(b)&&!isNaN(b)&&(a[b]=c);return a});var d=Object.create(this);return d=a.call(this,d),d._selector(b,this[0]),d}}()),d("forEach",function(a,b){if(Array.isArray(a))a.forEach(b);else if("object"==typeof a)for(var c in a)a.hasOwnProperty(c)&&b(a[c],c,a)},!1),d("setInterval",function(a,b){"object"!=typeof this._intervalCache&&(this._intervalCache={currNextIdx:0,availableIdxs:[],cache:{}});var c,d=this._intervalCache,e=d.cache,f=d.availableIdxs;f.length>0?(c=f[0],f.splice(0,1)):c=d.currNextIdx++,e[c]=0;var g=function(a,b){return"number"==typeof e[c]?setTimeout(function(){a(),e[c]=g(a,b)},b):void 0};return e[c]=g(a,b),c},!1),d("clearInterval",function(b){if("object"==typeof this._intervalCache){var d=this._intervalCache,e=d.cache,f=e[b];if("number"==typeof f)return e[b]=c,d.availableIdxs.push(b),a.clearTimeout(f)}},!1),d("noConflict",function(){var b={B:a.B,Browserkit:a.Browserkit};return function(c){return c===!0&&(a.Browserkit=b.Browserkit),a.B=b.B,e}}(),!1),d("scrollTop",function(){var d,e;return function(){var f=this[0];return d||(a.pageYOffset!==c?d=function(){return a.pageYOffset}:(e||(e=b.documentElement||b.body.parentNode||b.body),d=function(){return e.scrollTop})),f===a?d():f.scrollTop}}()),d("serialize",function(){var a,b=this[0],c=b.getElementsByTagName("input"),d=b.getElementsByTagName("textarea"),e="";for(a=c.length-1;a>=0;a--){var f=c[a],g=f.getAttribute("type");"radio"===g||"checkbox"===g?f.checked===!0&&(e+=f.name+"="+f.value+"&"):e+=f.name+"="+f.value+"&"}for(a=d.length-1;a>=0;a--){var h=d[a];e+=h.name+"="+h.value+"&"}return e=e.slice(0,-1)}),d("type",function(){var a={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Object]":"object","[object Error]":"error","[object Undefined]":"undefined","[object Null]":"null"};return function(b){var c={}.toString.call(b);return a[c]||c.match(/\s(\w+)/)[1].toLowerCase()}}(),!1),e.fn=e.prototype,a.Browserkit=e,a.B=e}(this,this.document);

/*
* Symbolset
* www.symbolset.com
* Copyright © 2012 Oak Studios LLC
*
* Upload this file to your web server
* and place this before the closing </body> tag.
* <script src="webfonts/ss-pika.js"></script>
*/

if (/(MSIE [7-9]\.|Opera.*Version\/(10\.[5-9]|(11|12)\.)|Chrome\/([1-9]|10)\.|Version\/[2-4][\.0-9]+ Safari\/|Version\/(4\.0\.[4-9]|4\.[1-9]|5\.0)[\.0-9]+? Mobile\/.*Safari\/|Android [1-2]\.|BlackBerry.*WebKit)/.test(navigator.userAgent) && !/(IEMobile)/.test(navigator.userAgent)) {

  var ss_set={'notifications disabled':'\uD83D\uDD15','notification disabled':'\uD83D\uDD15','wheelchair accessible':'\u267F','notificationsdisabled':'\uD83D\uDD15','notificationdisabled':'\uD83D\uDD15','horizontal bar chart':'\uE574','downwards line chart':'\uD83D\uDCC9','wheelchairaccessible':'\u267F','line chart clipboard':'\uE2B5','downwards bar chart':'\uE573','medical thermometer':'\uF4B3','linechartclipboard':'\uE2B5','upwards line chart':'\uD83D\uDCC8','medicalthermometer':'\uF4B3','telephone disabled':'\uE300','downwardslinechart':'\uD83D\uDCC9','horizontalbarchart':'\uE574','wine glass sparkle':'\uF129','compact lightbulb':'\uEA85','telephonedisabled':'\uE300','navigation mobile':'\uEA2A','downwardsbarchart':'\uE573','upwards bar chart':'\uE572','charging battery':'\uEA14','navigationmobile':'\uEA2A','compactlightbulb':'\uEA85','cooking utensils':'\uF151','writing disabled':'\uE071','pie chart thirds':'\uE571','anatomical heart':'\uF4D0','wineglasssparkle':'\uF129','upwardslinechart':'\uD83D\uDCC8','compass navigate':'\uE680','music open book':'\uE966','compassnavigate':'\uE680','check clipboard':'\uE2B3','pencil disabled':'\uE071','upwardsbarchart':'\uE572','writingdisabled':'\uE071','anatomicalheart':'\uF4D0','cookingutensils':'\uF151','chargingbattery':'\uEA14','delete calendar':'\uF073','shopping basket':'\uE510','download folder':'\uEC76','remove calendar':'\uF071','deletecalendar':'\uF073','traffic camera':'\uF314','baseball glove':'\uF404','delivery truck':'\uE5E1','bathroom scale':'\uF4B7','steering wheel':'\uF313','downloadfolder':'\uEC76','weather online':'\uEA35','battery mobile':'\uEA2B','checkclipboard':'\uE2B3','download cloud':'\uEB00','pencildisabled':'\uE071','christmas tree':'\uD83C\uDF84','search barcode':'\uE531','phone disabled':'\uE300','check calendar':'\uF072','piechartthirds':'\uE571','medium battery':'\uEA11','wifi open book':'\uE969','picture folder':'\uEC87','download crate':'\uEB03','shoppingbasket':'\uE510','removecalendar':'\uF071','globe location':'\uE6D2','support ribbon':'\uD83C\uDF80','navigate right':'\u25BB','announcements':'\uD83D\uDCE2','picturefolder':'\uEC87','exercise bike':'\uF415','supportribbon':'\uD83C\uDF80','download file':'\uEC06','weatheronline':'\uEA35','baseballglove':'\uF404','globelocation':'\uE6D2','compass arrow':'\uE681','realty online':'\uEA33','browse online':'\uEA30','medical cross':'\uF4B0','trafficcamera':'\uF314','navigate down':'\uF501','traffic light':'\uD83D\uDEA6','deliverytruck':'\uE5E1','bathroomscale':'\uF4B7','female avatar':'\uD83D\uDC67','steeringwheel':'\uF313','scatter chart':'\uE578','rubber eraser':'\uE221','partly cloudy':'\u26C5','batterymobile':'\uEA2B','settings file':'\uEC0A','downloadcloud':'\uEB00','musicopenbook':'\uE966','dollar mobile':'\uEA27','tropical fish':'\uEF21','downloadcrate':'\uEB03','business user':'\uE407','empty battery':'\uEA13','christmastree':'\uD83C\uDF84','shopping cart':'\uE500','navigateright':'\u25BB','phonedisabled':'\uE300','mediumbattery':'\uEA11','notifications':'\uD83D\uDD14','download book':'\uE963','call disabled':'\uE300','previous page':'\u2397','download cart':'\uE505','dispense cash':'\uE542','checkcalendar':'\uF072','measuring cup':'\uF162','bell disabled':'\uD83D\uDD15','navigate left':'\u25C5','upload folder':'\uEC77','secure folder':'\uEC83','cash register':'\uE530','searchbarcode':'\uE531','uploadfolder':'\uEC77','trafficlight':'\uD83D\uDEA6','digital safe':'\uE541','dispensecash':'\uE542','downloadcart':'\uE505','partly sunny':'\u26C5','notification':'\uD83D\uDD14','thunderstorm':'\u26C8','shoppingcart':'\uE500','tape measure':'\uF036','businessuser':'\uE407','user profile':'\uE406','partlycloudy':'\u26C5','scatterchart':'\uE578','femaleavatar':'\uD83D\uDC67','delivery van':'\uE5E0','this side up':'\uE5E8','tropicalfish':'\uEF21','search house':'\uE612','compassarrow':'\uE681','medicalcross':'\uF4B0','map location':'\uE6D1','add calendar':'\uF070','train tunnel':'\uD83D\uDE87','donotdisturb':'\uE422','vinyl record':'\uE810','movie folder':'\uEC88','exercisebike':'\uF415','fast forward':'\u23E9','announcement':'\uD83D\uDCE2','securefolder':'\uEC83','skip forward':'\u23ED','cloud folder':'\uEC80','cashregister':'\uE530','belldisabled':'\uD83D\uDD15','downloadbook':'\uE963','calldisabled':'\uE300','rubber stamp':'\uE226','paint roller':'\uE225','table tennis':'\uF402','rubbereraser':'\uE221','navigatedown':'\uF501','mobile phone':'\uEA02','navigateleft':'\u25C5','wifiopenbook':'\uE969','picture file':'\uEC17','full battery':'\uD83D\uDD0B','high battery':'\uEA10','emptybattery':'\uEA13','heart mobile':'\uEA23','phone mobile':'\uEA24','dollarmobile':'\uEA27','weather vane':'\uF200','power mobile':'\uEA2C','browseonline':'\uEA30','realtyonline':'\uEA33','direct right':'\u25B9','lightbulb on':'\uEA83','picnic table':'\uEAB1','settingsfile':'\uEC0A','previouspage':'\u2397','download box':'\uEB02','measuringcup':'\uF162','upload cloud':'\uEB40','upload crate':'\uEB43','intersection':'\uF322','downloadfile':'\uEC06','rotate right':'\u21BB','skipforward':'\u23ED','deliveryvan':'\uE5E0','rotate left':'\u21BA','lock folder':'\uEC81','tapemeasure':'\uF036','female user':'\uD83D\uDC67','broken bone':'\uF4E1','credit card':'\uD83D\uDCB3','solar panel':'\uF281','stethoscope':'\uF4B4','male avatar':'\uD83D\uDC64','rubberstamp':'\uE226','search book':'\uE967','eye surgery':'\uF4E0','searchhouse':'\uE612','tabletennis':'\uF402','paintroller':'\uE225','open folder':'\uD83D\uDCC2','check heart':'\uF4D1','alarm clock':'\u23F0','mobilephone':'\uEA02','thermometer':'\uF201','walky talky':'\uEA03','delete cart':'\uE504','digitalsafe':'\uE541','traintunnel':'\uD83D\uDE87','fullbattery':'\uD83D\uDD0B','maplocation':'\uE6D1','highbattery':'\uEA10','userprofile':'\uE406','delete date':'\uF073','empty heart':'\u2661','low battery':'\uEA12','addcalendar':'\uF070','thumbs down':'\uD83D\uDC4E','heartmobile':'\uEA23','delete user':'\uE404','phonemobile':'\uEA24','remove user':'\uE402','lock mobile':'\uEA25','text mobile':'\uEA26','floppy disk':'\uD83D\uDCBE','euro mobile':'\uEA28','information':'\u2139','weathervane':'\uF200','directright':'\u25B9','powermobile':'\uEA2C','eighth note':'\u266A','remove cart':'\uE502','shop online':'\uEA31','bank online':'\uEA32','high volume':'\uD83D\uDD0A','vinylrecord':'\uE810','read online':'\uEA34','lightbulbon':'\uEA83','line charts':'\uE576','picnictable':'\uEAB1','cloudfolder':'\uEC80','picturefile':'\uEC17','direct down':'\u25BE','waterbottle':'\uF128','direct left':'\u25C3','moviefolder':'\uEC88','export file':'\uEC09','import file':'\uEC08','upload file':'\uEC07','photographs':'\uD83C\uDF04','downloadbox':'\uEB02','videocamera':'\uD83D\uDCF9','temperature':'\uF201','uploadcloud':'\uEB40','navigate up':'\uF500','uploadcrate':'\uEB43','fastforward':'\u23E9','partlysunny':'\u26C5','supplements':'\uF4B6','rotateright':'\u21BB','pill bottle':'\uF4B5','delete file':'\uEC04','remove file':'\uEC02','remove date':'\uF071','deletedate':'\uF073','linecharts':'\uE576','motorcycle':'\uF303','alarmclock':'\u23F0','brokenbone':'\uF4E1','pull quote':'\u201C','spoon fork':'\uF150','floor plan':'\uE610','lowbattery':'\uEA12','photograph':'\uD83C\uDF04','empty cart':'\uE507','emptyheart':'\u2661','half heart':'\uE1A0','navigateup':'\uF500','user group':'\uE400','play video':'\uE8A1','removedate':'\uF071','deletecart':'\uE504','lockmobile':'\uEA25','house sale':'\uE613','textmobile':'\uEA26','navigation':'\uE670','automobile':'\uD83D\uDE98','thumbsdown':'\uD83D\uDC4E','euromobile':'\uEA28','directions':'\uE672','rss mobile':'\uEA29','disapprove':'\uD83D\uDC4E','maleavatar':'\uD83D\uDC64','calculator':'\uE551','creditcard':'\uD83D\uDCB3','rotateleft':'\u21BA','removecart':'\uE502','down right':'\u2B0A','flower tag':'\uE103','shoponline':'\uEA31','lockfolder':'\uEC81','bankonline':'\uEA32','locomotive':'\uD83D\uDE82','eyesurgery':'\uF4E0','deleteuser':'\uE404','readonline':'\uEA34','checkheart':'\uF4D1','descending':'\u25BE','wine glass':'\uD83C\uDF77','heart book':'\uE962','femaleuser':'\uD83D\uDC67','directdown':'\u25BE','no smoking':'\uD83D\uDEAD','hair dryer':'\uEA88','cargo ship':'\uE5E3','pillbottle':'\uF4B5','containers':'\uE5E6','searchbook':'\uE967','floppydisk':'\uD83D\uDCBE','directleft':'\u25C3','solarpanel':'\uF281','left right':'\u2B0C','scale down':'\uEE05','hard drive':'\uE7B0','exportfile':'\uEC09','thissideup':'\uE5E8','importfile':'\uEC08','thumbnails':'\uE9A3','uploadfile':'\uEC07','eighthnote':'\u266A','attachment':'\uD83D\uDCCE','visibility':'\uD83D\uDC40','openfolder':'\uD83D\uDCC2','removeuser':'\uE402','bank check':'\uE544','binoculars':'\uE010','grid lines':'\uE206','smartphone':'\uEA02','upload box':'\uEB42','microphone':'\uD83C\uDFA4','departures':'\uF324','wheelchair':'\u267F','check date':'\uF072','cell phone':'\uD83D\uDCF1','walkytalky':'\uEA03','helicopter':'\uD83D\uDE81','interstate':'\uF320','low volume':'\uD83D\uDD09','deletefile':'\uEC04','eyedropper':'\uE200','connection':'\uEB85','screenshot':'\uE004','highvolume':'\uD83D\uDD0A','removefile':'\uEC02','paperclip':'\uD83D\uDCCE','palm tree':'\uD83C\uDF34','evergreen':'\uD83C\uDF32','piggybank':'\uE545','playvideo':'\uE8A1','gridlines':'\uE206','direct up':'\u25B4','money bag':'\uD83D\uDCB0','briefcase':'\uD83D\uDCBC','warehouse':'\uE602','rssmobile':'\uEA29','floorplan':'\uE610','checkdate':'\uF072','skip back':'\u23EE','calculate':'\uE551','next page':'\u2398','down left':'\u2B0B','housesale':'\uE613','thumbs up':'\uD83D\uDC4D','bear face':'\uD83D\uDC3B','pie chart':'\uE570','backspace':'\u232B','checkmark':'\u2713','badminton':'\uF403','hot sauce':'\uF133','ambulance':'\uD83D\uDE91','heartbook':'\uE962','wifi mail':'\uE352','bar chart':'\uD83D\uDCCA','nosmoking':'\uD83D\uDEAD','lightbulb':'\uD83D\uDCA1','billiards':'\uD83C\uDFB1','emptycart':'\uE507','leftright':'\u2B0C','ice skate':'\u26F8','downright':'\u2B0A','hamburger':'\uD83C\uDF54','hairdryer':'\uEA88','ascending':'\u25B4','newspaper':'\uD83D\uDCF0','analytics':'\uE575','halfheart':'\uE1A0','user file':'\uEC15','crosshair':'\u2316','lock file':'\uEC11','olive oil':'\uF132','male user':'\uD83D\uDC64','christmas':'\uD83C\uDF84','rightward':'\uF503','page curl':'\uE9B0','clockwise':'\u2941','spoonfork':'\uF150','wineglass':'\uD83C\uDF77','scaledown':'\uEE05','three die':'\u2682','harddrive':'\uE7B0','telephone':'\uD83D\uDCDE','call bell':'\uF424','stopwatch':'\u23F1','cellphone':'\uD83D\uDCF1','musicnote':'\u266B','sunscreen':'\uF423','usergroup':'\uE400','egg timer':'\uF165','dashboard':'\uF000','text file':'\uEC19','wifi book':'\uE968','bbq apron':'\uF171','uploadbox':'\uEB42','departure':'\uF324','half star':'\uE1A1','ice cream':'\uD83C\uDF68','lowvolume':'\uD83D\uDD09','spaghetti':'\uD83C\uDF5D','price tag':'\uE102','snowflake':'\u2744','cargoship':'\uE5E3','highlight':'\uED11','flowertag':'\uE103','open book':'\uD83D\uDCD6','side dish':'\uD83C\uDF5A','pullquote':'\u201C','megaphone':'\uD83D\uDCE2','jump rope':'\uF417','bankcheck':'\uE544','palmtree':'\uD83C\uDF34','add file':'\uEC01','five die':'\u2684','four die':'\u2683','threedie':'\u2682','elevator':'\uF380','lockfile':'\uEC11','userfile':'\uEC15','campfire':'\uD83D\uDD25','iceskate':'\u26F8','textfile':'\uEC19','wifibook':'\uE968','passport':'\uF316','jerrycan':'\uF315','computer':'\uD83D\uDCBB','pagecurl':'\uE9B0','notebook':'\uD83D\uDCD3','openbook':'\uD83D\uDCD6','document':'\uE903','football':'\uD83C\uDFC8','exercise':'\uF414','skipback':'\u23EE','dumbbell':'\uF416','jumprope':'\uF417','pictures':'\uD83C\uDF04','sky lift':'\uD83D\uDEA1','meditate':'\uF418','schooner':'\uF305','typeface':'\uED01','sailboat':'\u26F5','suitcase':'\uE420','redirect':'\u21AA','contract':'\uEE01','question':'\u2753','arrivals':'\uF325','callbell':'\uF424','sign out':'\uEE02','scale up':'\uEE04','database':'\uE7A0','firewall':'\uE720','hospital':'\u26E8','subtract':'\u002D','location':'\uE6D0','signpost':'\uE672','bearface':'\uD83D\uDC3B','navigate':'\uE670','building':'\uD83C\uDFE2','download':'\uEB01','seedling':'\uD83C\uDF31','forklift':'\uE5E2','settings':'\u2699','umbrella':'\u2602','barchart':'\uD83D\uDCCA','piechart':'\uE570','moneybag':'\uD83D\uDCB0','banknote':'\uD83D\uDCB5','fracture':'\uF4E1','add cart':'\uE501','add user':'\uE401','up right':'\u2B08','maleuser':'\uD83D\uDC64','calendar':'\uD83D\uDCC5','wifimail':'\uE352','downleft':'\u2B0B','add date':'\uF070','envelope':'\u2709','facetime':'\uE320','end call':'\uE300','bullseye':'\uD83C\uDFAF','halfstar':'\uE1A1','favorite':'\u22C6','previous':'\u25C5','directup':'\u25B4','thumbsup':'\uD83D\uDC4D','sidedish':'\uD83C\uDF5A','bookmark':'\uD83D\uDD16','pricetag':'\uE102','icecream':'\uD83C\uDF68','keywords':'\uE100','bbqapron':'\uF171','trashcan':'\uE0D0','cocktail':'\uD83C\uDF78','dropdown':'\u25BE','insecure':'\uD83D\uDD13','unlocked':'\uD83D\uDD13','oliveoil':'\uF132','hotsauce':'\uF133','leftward':'\uF505','sriracha':'\uF133','eggtimer':'\uF165','colander':'\uF163','nextpage':'\u2398','zoom out':'\uE003','barbecue':'\uF142','utensils':'\uD83C\uDF74','display':'\uD83D\uDCBB','refresh':'\u21BB','tornado':'\uF213','rainbow':'\uD83C\uDF08','package':'\uD83D\uDCE6','airplay':'\uE800','desktop':'\uD83D\uDCBB','printer':'\u2399','percent':'\u0025','bonfire':'\uEAB3','savings':'\uE545','bicycle':'\uD83D\uDEB2','receipt':'\uE972','notepad':'\uE972','present':'\uD83C\uDF81','speaker':'\uD83D\uDD08','luggage':'\uE421','addcart':'\uE501','upright':'\u2B08','columns':'\uE9A2','adduser':'\uE401','droplet':'\uD83D\uDCA7','avatars':'\uD83D\uDC65','weather':'\uF210','balloon':'\uD83C\uDF88','dictate':'\uD83C\uDFA4','forward':'\u27A1','retweet':'\uF600','comment':'\uD83D\uDCAC','highway':'\uF320','fivedie':'\u2684','adddate':'\uF070','arrival':'\uF325','warning':'\u26A0','up left':'\u2B09','caution':'\u26D4','headset':'\uE302','log out':'\uEE02','endcall':'\uE300','feather':'\uE220','windows':'\uE202','signout':'\uEE02','bowling':'\uF406','tractor':'\uD83D\uDE9C','sign in':'\uEE03','sausage':'\uF103','scaleup':'\uEE04','dislike':'\uD83D\uDC4E','loading':'\uEB83','approve':'\uD83D\uDC4D','shuffle':'\uD83D\uDD00','battery':'\uD83D\uDD0B','noodles':'\uD83C\uDF5C','caravan':'\uD83D\uDE90','handbag':'\uD83D\uDC5C','fourdie':'\u2683','pushpin':'\uD83D\uDCCC','keyword':'\uE100','fitness':'\uF414','descend':'\u25BE','syncing':'\uEB82','checked':'\u2713','platter':'\uF166','two die':'\u2681','compass':'\uE671','one die':'\u2680','private':'\uD83D\uDD12','ereader':'\uEA04','compose':'\uD83D\uDCDD','chicken':'\uD83D\uDC26','address':'\uE611','addfile':'\uEC01','lodging':'\uD83C\uDFE8','picture':'\uD83C\uDF04','visible':'\uD83D\uDC40','monitor':'\uD83D\uDCBB','syringe':'\uD83D\uDC89','fragile':'\uE5E7','skylift':'\uD83D\uDEA1','zoomout':'\uE003','zoom in':'\uE002','bandage':'\uF4B2','puzzle':'\uE710','reload':'\uEB87','camera':'\uD83D\uDCF7','locked':'\uD83D\uDD12','zoomin':'\uE002','wrench':'\uD83D\uDD27','basket':'\uE510','layout':'\uEDA0','action':'\uEE00','images':'\uD83C\uDF04','secure':'\uD83D\uDD12','hockey':'\uF401','expand':'\u2922','photos':'\uD83C\uDF04','sample':'\uE200','avatar':'\uD83D\uDC64','unlock':'\uD83D\uDD13','videos':'\uD83D\uDCF9','notice':'\uE973','target':'\u25CE','layers':'\uE202','tunnel':'\uF323','logout':'\uEE02','knight':'\u265E','onedie':'\u2680','locate':'\uE670','twodie':'\u2681','log in':'\uEE03','camper':'\uD83D\uDE90','signin':'\uEE03','ascend':'\u25B4','weight':'\uE5E5','resume':'\uEC15','charts':'\uE575','record':'\u25CF','burger':'\uD83C\uDF54','rewind':'\u23EA','pencil':'\u270E','hyphen':'\u002D','hanger':'\uF1A0','shrimp':'\uD83C\uDF64','turkey':'\uF105','laptop':'\uEA00','remove':'\u002D','sixdie':'\u2685','tablet':'\uEA01','tennis':'\uD83C\uDFBE','public':'\uD83D\uDD13','carrot':'\uF111','delete':'\u2421','iphone':'\uEA02','rocket':'\uD83D\uDE80','coffee':'\u2615','folder':'\uD83D\uDCC1','bottle':'\uF122','outlet':'\uF282','mobile':'\uEA02','fishes':'\uEF20','eraser':'\u2710','teapot':'\uF127','volume':'\uD83D\uDD08','upleft':'\u2B09','tagged':'\uE100','upload':'\uEB41','pepper':'\uF131','office':'\uD83C\uDFE2','shower':'\uD83D\uDEBF','repeat':'\uD83D\uDD01','replay':'\u21BA','search':'\uD83D\uDD0E','attach':'\uD83D\uDCCE','soccer':'\u26BD','street':'\uF321','scales':'\u2696','outbox':'\uD83D\uDCE4','stereo':'\uE801','cursor':'\uE001','boxing':'\uF405','garage':'\uE600','ribbon':'\uD83C\uDF80','knife':'\uD83D\uDD2A','share':'\uF601','write':'\u270E','stove':'\uF141','erase':'\u2710','scale':'\uF164','trash':'\uE0D0','heart':'\u2665','zelda':'\uE1A0','apron':'\uF170','medal':'\uE1C1','quill':'\uE220','phone':'\uD83D\uDCDE','reply':'\u21A9','purse':'\uD83D\uDC5C','steak':'\uF106','email':'\u2709','inbox':'\uD83D\uDCE5','right':'\u27A1','pizza':'\uD83C\uDF55','users':'\uD83D\uDC65','alarm':'\u23F0','timer':'\u23F1','cloud':'\u2601','apple':'\uD83C\uDF4F','watch':'\u231A','store':'\uD83C\uDFEC','sunny':'\u2600','coins':'\uE543','clock':'\u23F2','flash':'\u2301','stock':'\uE579','crate':'\uE5D8','rainy':'\u2614','earth':'\uD83C\uDF0E','world':'\uD83C\uDF0E','globe':'\uD83C\uDF10','music':'\u266B','audio':'\u266B','sound':'\uD83D\uDD08','grass':'\uEF70','radio':'\uD83D\uDCFB','image':'\uD83C\uDF04','photo':'\uD83C\uDF04','video':'\uD83D\uDCF9','pause':'\uE8A0','eject':'\u23CF','close':'\u2421','hiker':'\uF410','index':'\uE902','check':'\u2713','train':'\uD83D\uDE86','minus':'\u002D','books':'\uD83D\uDCDA','ebook':'\uEA05','truck':'\uD83D\uDE9A','flame':'\uEAB2','enter':'\uEE03','login':'\uEE03','sweep':'\uEA86','plane':'\u2708','alert':'\u26A0','broom':'\uEA86','chess':'\u265E','visit':'\uEE00','merge':'\uEB81','nodes':'\uEB85','quote':'\u201C','print':'\u2399','knob':'\uF004','boat':'\uD83D\uDEA2','font':'\uED01','text':'\uED00','list':'\uED50','zoom':'\uE002','view':'\uD83D\uDC40','look':'\uD83D\uDC40','link':'\uD83D\uDD17','move':'\uE070','fuel':'\u26FD','edit':'\u270E','cook':'\uD83C\uDF73','oven':'\uF140','file':'\uD83D\uDCC4','bike':'\uD83D\uDEB2','wifi':'\uEB84','sync':'\uEB82','road':'\uF321','redo':'\u21BB','draw':'\u270F','fork':'\uEB80','help':'\u2753','info':'\u2139','exit':'\uEE02','golf':'\uF400','fire':'\uD83D\uDD25','plus':'\u002B','lock':'\uD83D\uDD12','idea':'\uD83D\uDCA1','coal':'\uF136','tags':'\uE100','ipad':'\uEA01','rows':'\uE9A1','news':'\uD83D\uDCF0','flag':'\u2691','book':'\uD83D\uDCD5','page':'\uE903','like':'\uD83D\uDC4D','undo':'\u21BA','taxi':'\uD83D\uDE96','hike':'\uF410','pool':'\uE412','salt':'\uF130','skip':'\u23ED','stop':'\u25A0','bird':'\uD83D\uDC26','play':'\u25B6','plug':'\uD83D\uDD0C','tree':'\uD83C\uDF33','leaf':'\uD83C\uDF42','yoga':'\uF418','disc':'\uD83D\uDCBF','love':'\u2665','star':'\u22C6','beer':'\uD83C\uDF7A','wind':'\uF212','crop':'\uE201','next':'\u25BB','save':'\uD83D\uDCBE','chef':'\uF172','call':'\uD83D\uDCDE','corn':'\uF110','gear':'\u2699','dial':'\uF004','send':'\uE350','mail':'\u2709','home':'\u2302','pill':'\uD83D\uDC8A','hook':'\uE5E4','rain':'\u2614','back':'\u2B05','form':'\uE582','bell':'\uD83D\uDD14','left':'\u2B05','bank':'\uD83C\uDFE6','work':'\uD83D\uDCBC','time':'\u23F2','cash':'\uD83D\uDCB5','fish':'\uD83D\uDC1F','safe':'\uE540','down':'\u2B07','drop':'\uD83D\uDCA7','gift':'\uD83C\uDF81','chat':'\uD83D\uDCAC','cart':'\uE500','date':'\uD83D\uDCC5','talk':'\uD83D\uDCAC','user':'\uD83D\uDC64','cell':'\uD83D\uDCF1','car':'\uD83D\uDE98','sun':'\u2600','atm':'\uD83C\uDFE7','tip':'\uE546','dna':'\uF4C2','box':'\uD83D\uDCE6','bed':'\uD83C\uDFE8','fax':'\uD83D\uDCE0','map':'\uE673','rss':'\uE310','gps':'\uE674','pin':'\uD83D\uDCCD','hdd':'\uE7B0','mug':'\u2615','pen':'\u2712','fog':'\uF211','mic':'\uD83C\uDFA4','cog':'\u2699','tea':'\uD83C\uDF75','fan':'\uF280','png':'\uEC36','cab':'\uD83D\uDE96','add':'\u002B','bbq':'\uF142','tag':'\uE100','new':'\uD83C\uDD95','bus':'\uD83D\uDE8D','ban':'\uD83D\uDEAB','key':'\uD83D\uDD11','cfl':'\uEA85','out':'\uEE00','exe':'\uEC30','zip':'\uEC31','gas':'\u26FD','doc':'\uEC32','ppt':'\uEC33','pdf':'\uEC34','eye':'\uD83D\uDC40','jpg':'\uEC35','up':'\u2B06','za':'\uD83C\uDF55'};

  if (typeof ss_icons !== 'object' || typeof ss_icons !== 'object') {
    var ss_icons = ss_set;
    var ss_keywords = [];
    for (var i in ss_set) { ss_keywords.push(i); };
  } else {
    for (var i in ss_set) { ss_icons[i] = ss_set[i]; ss_keywords.push(i); }
  };

  if (typeof ss_legacy !== 'function') {

    /* domready.js */
    !function(a,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&typeof define.amd=="object"?define(b):this[a]=b()}("ss_ready",function(a){function m(a){l=1;while(a=b.shift())a()}var b=[],c,d=!1,e=document,f=e.documentElement,g=f.doScroll,h="DOMContentLoaded",i="addEventListener",j="onreadystatechange",k="readyState",l=/^loade|c/.test(e[k]);return e[i]&&e[i](h,c=function(){e.removeEventListener(h,c,d),m()},d),g&&e.attachEvent(j,c=function(){/^c/.test(e[k])&&(e.detachEvent(j,c),m())}),a=g?function(c){self!=top?l?c():b.push(c):function(){try{f.doScroll("left")}catch(b){return setTimeout(function(){a(c)},50)}c()}()}:function(a){l?a():b.push(a)}})

    var ss_legacy = function(node) {

      if (!node instanceof Object) return false;

      if (node.length) {
        for (var i=0; i<node.length; i++) {
          ss_legacy(node[i]);
        }
        return;
      };

      if (node.value) {
        node.value = ss_liga(node.value);
      } else if (node.nodeValue) {
        node.nodeValue = ss_liga(node.nodeValue);
      } else if (node.innerHTML) {
        node.innerHTML = ss_liga(node.innerHTML);
      }

    };

    var ss_getElementsByClassName = function(node, classname) {
      if (document.querySelectorAll) {
        return document.querySelectorAll('.'+classname);
      }
      var a = [];
      var re = new RegExp('(^| )'+classname+'( |$)');
      var els = node.getElementsByTagName("*");
      for(var i=0,j=els.length; i<j; i++)
          if(re.test(els[i].className))a.push(els[i]);
      return a;
    };

    var ss_liga = function(that) {
      var re = new RegExp(ss_keywords.join('|').replace(/[-[\]{}()*+?.,\\^$#\s]/g, "\\$&"),"gi");
      return that.replace(re, function(v) {
        return ss_icons[v.toLowerCase()];
      });
    };

    ss_ready(function() {
      if (document.getElementsByClassName) {
        ss_legacy(document.getElementsByClassName('ss-icon'));
      } else {
        ss_legacy(ss_getElementsByClassName(document.body, 'ss-icon'));
      }
    });

  }

};

/*
* Symbolset
* www.symbolset.com
* Copyright © 2013 Oak Studios LLC
*
* Upload this file to your web server
* and place this before the closing </body> tag.
* <script src="webfonts/ss-social.js"></script>
*/

if (/(MSIE [7-9]\.|Opera.*Version\/(10\.[5-9]|(11|12)\.)|Chrome\/([1-9]|10)\.|Version\/[2-4][\.0-9]+ Safari\/|Version\/(4\.0\.[4-9]|4\.[1-9]|5\.0)[\.0-9]+? Mobile\/.*Safari\/|Android ([1-2]|4\.[2-9].*Version\/4)\.|BlackBerry.*WebKit)/.test(navigator.userAgent) && !/(IEMobile)/.test(navigator.userAgent)) {

  if (/Android 4\.[2-9].*Version\/4/.test(navigator.userAgent)) {
    var ss_android = document.createElement('style');
    ss_android.innerHTML = '.ss-icon,[class^="ss-"],[class*=" ss-"],[class^="ss-"]:before,[class*=" ss-"]:before,[class^="ss-"].right:after[class*=" ss-"].right:after{text-rendering:auto!important}';
    document.body.appendChild(ss_android);
  }

  var ss_set={'five hundred pixels':'\uF642','fivehundredpixels':'\uF642','five hundred px':'\uF642','github octocat':'\uF671','stack overflow':'\uF672','stackoverflow':'\uF672','fivehundredpx':'\uF642','githuboctocat':'\uF671','kickstarter':'\uF681','app dot net':'\uF614','google plus':'\uF613','googleplus':'\uF613','foursquare':'\uF690','soundcloud':'\uF6B3','letterboxd':'\uF632','blackberry':'\uF6F4','delicious':'\uF655','posterous':'\uF623','pinterest':'\uF650','microsoft':'\uF6F1','thumbs up':'\uD83D\uDC4D','telephone':'\uD83D\uDCDE','appdotnet':'\uF614','wordpress':'\uF621','instagram':'\uF641','facebook':'\uF610','thumbsup':'\uD83D\uDC4D','readmill':'\uF652','pinboard':'\uF654','dribbble':'\uF660','envelope':'\u2709','google +':'\uF613','linkedin':'\uF612','twitter':'\uF611','approve':'\uD83D\uDC4D','behance':'\uF661','youtube':'\uF630','blogger':'\uF622','dropbox':'\uF653','octocat':'\uF671','android':'\uF6F3','google+':'\uF613','last fm':'\uF6B2','app net':'\uF614','windows':'\uF6F2','spotify':'\uF6B1','flickr':'\uF640','lastfm':'\uF6B2','zerply':'\uF615','appnet':'\uF614','paypal':'\uF680','tumblr':'\uF620','github':'\uF670','svpply':'\uF651','reddit':'\uF616','share':'\uF601','phone':'\uD83D\uDCDE','apple':'\uF8FF','vimeo':'\uF631','email':'\u2709','steam':'\uF617','quora':'\uF624','500px':'\uF642','skype':'\uF6A0','like':'\uD83D\uDC4D','mail':'\u2709','call':'\uD83D\uDCDE','link':'\uD83D\uDD17','rdio':'\uF6B0','yelp':'\uF691','etsy':'\uF682','vine':'\uF633','rss':'\uE310'};


  if (typeof ss_icons !== 'object' || typeof ss_icons !== 'object') {
    var ss_icons = ss_set;
    var ss_keywords = [];
    for (var i in ss_set) { ss_keywords.push(i); };
  } else {
    for (var i in ss_set) { ss_icons[i] = ss_set[i]; ss_keywords.push(i); }
  };

  if (typeof ss_legacy !== 'function') {

    /* domready.js */
    !function(a,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&typeof define.amd=="object"?define(b):this[a]=b()}("ss_ready",function(a){function m(a){l=1;while(a=b.shift())a()}var b=[],c,d=!1,e=document,f=e.documentElement,g=f.doScroll,h="DOMContentLoaded",i="addEventListener",j="onreadystatechange",k="readyState",l=/^loade|c/.test(e[k]);return e[i]&&e[i](h,c=function(){e.removeEventListener(h,c,d),m()},d),g&&e.attachEvent(j,c=function(){/^c/.test(e[k])&&(e.detachEvent(j,c),m())}),a=g?function(c){self!=top?l?c():b.push(c):function(){try{f.doScroll("left")}catch(b){return setTimeout(function(){a(c)},50)}c()}()}:function(a){l?a():b.push(a)}})

    var ss_legacy = function(node) {

      if (!node instanceof Object) return false;

      if (node.length) {
        for (var i=0; i<node.length; i++) {
          ss_legacy(node[i]);
        }
        return;
      };

      if (node.value) {
        node.value = ss_liga(node.value);
      } else if (node.nodeValue) {
        node.nodeValue = ss_liga(node.nodeValue);
      } else if (node.innerHTML) {
        node.innerHTML = ss_liga(node.innerHTML);
      }

    };

    var ss_getElementsByClassName = function(node, classname) {
      if (document.querySelectorAll) {
        return document.querySelectorAll('.'+classname);
      }
      var a = [];
      var re = new RegExp('(^| )'+classname+'( |$)');
      var els = node.getElementsByTagName("*");
      for(var i=0,j=els.length; i<j; i++)
          if(re.test(els[i].className))a.push(els[i]);
      return a;
    };

    var ss_liga = function(that) {
      var re = new RegExp(ss_keywords.join('|').replace(/[-[\]{}()*+?.,\\^$#\s]/g, "\\$&"),"gi");
      return that.replace(re, function(v) {
        return ss_icons[v.toLowerCase()];
      });
    };

    ss_ready(function() {
      if (document.getElementsByClassName) {
        ss_legacy(document.getElementsByClassName('ss-icon'));
      } else {
        ss_legacy(ss_getElementsByClassName(document.body, 'ss-icon'));
      }
    });

  }

};


(function(WS, undefined){

    'use strict';

    WS.utils = {

        _gebi: function(id){
            return document.getElementById(id);
        },

        getParameterByName: function(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }

    };

}(window.WS = window.WS || {}));

(function(WS, undefined){

    'use strict';

    WS.httpFormHelper = function(options){
        this._el = WS.utils._gebi(options.formId);
        if(!this._el) return;

        this._options = options;
        this._performingState = false;

        var sendBtn = WS.utils._gebi(options.formId+'__send-btn');
        this._BsendBtn = B(sendBtn);

        this._bindEvents();

        if(options.submitOnInit === true){
            this._send();
        }
    };

    WS.httpFormHelper.prototype = {

        _bindEvents: function(){
            var self = this;

            B(this._el).on('submit', this._send.bind(this));
            this._BsendBtn.click(this._send.bind(this));
            
            B(this._el).on('keyup', function(e){
                if(e.keyCode === 13){
                    self._send.call(self);
                }
            });
        },

        _showState: function(stateName, freezeOnState){
            var self = this,
                BsendBtn = this._BsendBtn;

            this._performingState = true;

            BsendBtn.addClass('button--send--is-hidden');
            setTimeout(function(){
                BsendBtn.removeClass('button--send--is-hidden');
                BsendBtn.addClass('button--send--is-'+stateName);

                if(!freezeOnState){
                    setTimeout(function(){
                        BsendBtn.addClass('button--send--is-hidden');
                        setTimeout(function(){
                            BsendBtn.removeClass('button--send--is-'+stateName);
                            BsendBtn.removeClass('button--send--is-hidden');
                            self._performingState = false;
                        }, 300);
                    }, 1000);
                }
            }, 300);
        },

        _validate: function(){
            var inputs = this._el.getElementsByTagName('input'),
                inputsList = {},
                formValid = true;

            //loop inputs
            for(var i = 0, inputsl = inputs.length; i < inputsl; i++){
                var curr = inputs[i],
                    val = curr.value;

                //add to inputs list
                inputsList[curr.getAttribute('name')] = val;

                //check if input is required
                if(!curr.hasAttribute('required')){
                    continue;
                }

                //check if input is valid
                var valid;
                switch(curr.getAttribute('type')){
                    case 'email':
                        valid = (/.+\@.+\..+/.test(val));
                        break;
                    default:
                        valid = (val !== '');
                        break;
                }

                if(curr.hasAttribute('data-match')){
                    var el = document.getElementById(curr.getAttribute('data-match'));
                    if(el && el.value !== curr.value){
                        B(curr.parentNode).addClass('input-wrapper--has-error--match-error');
                        valid = false;
                    }
                }

                if(!valid){
                    B(curr.parentNode).addClass('input-wrapper--has-error');
                    formValid = false;
                } else {
                    B(curr.parentNode).removeClass('input-wrapper--has-error');
                }
            }

            //check if form is valid
            if(!formValid){
                return {
                    success: false,
                    inputs: inputsList
                };
            } else {
                return {
                    success: true,
                    inputs: inputsList
                };
            }
        },

        _send: function(e){
            if(e){
                e.preventDefault();
            }
            
            if(this._performingState) return false;

            var BsendBtn = this._BsendBtn,
                self = this,
                validation = this._validate();

            if(!validation.success){
                self._showState('error');
                return false;
            }

            //send email
            BsendBtn.addClass('button--send--is-mailing');

            var onSuccess = function(res, xhr){
                BsendBtn.removeClass('button--send--is-mailing');

                self._showState('success', true);
                document.activeElement.blur();
                self._options.onSuccess(res, xhr);
            },
            onError = function(res, xhr){
                BsendBtn.removeClass('button--send--is-mailing');

                self._showState('error');
                if(res.errorMessage){
                    WS.notification.show('error', res.errorMessage);
                } else {
                    WS.notification.show('error', 'Looks like something went wrong, please try again or <a href="mailto:info@whitespell.com?subject=Got a '+xhr.status+' error on '+window.location.href+'">notify</a> us.');
                }
            };

            self._options.doRequest(validation, onSuccess, onError);

        }

    };

}(window.WS = window.WS || {}));


(function(WS, undefined){

    WS.notification = {

        init: function(){
            this._el = WS.utils._gebi('notification');
            if(!this._el) return;

            this._Bel = B(this._el);
        },

        show: function(state, content){
            var Bel = this._Bel;

            this._el.innerHTML = content;

            Bel.removeClass('notification--error');
            Bel.removeClass('notification--success');

            switch(state){
                case 'error':
                    Bel.addClass('notification--error');
                    break;
                case 'success':
                    Bel.addClass('notification--success');
                    break;
            }

            Bel.removeClass('notification--is-hidden');
        },

        hide: function(){
            this._Bel.addClass('notification--is-hidden');
        }

    };

    WS.notification.init();

}(window.WS = window.WS || {}));

(function(WS, undefined){

    WS.promoVidDialog = {

        init: function(){
            var el = this._el = WS.utils._gebi('js-dialog');
            if(!el) return;

            this._Bel = B(el);

            this._bindEvents();
        },

        _bindEvents: function(){
            B(  WS.utils._gebi('js-dialog-open') ).click(this._show.bind(this));
            B(  WS.utils._gebi('js-dialog-close') ).click(this._hide.bind(this));
        },

        _createIframe: function(){
            var el = document.createElement('iframe');
            el.setAttribute('src', 'https://www.youtube.com/embed/KKvYVeYL1Fw?autoplay=1');
            el.setAttribute('frameborder', '0');
            el.setAttribute('allowfullscreen', '1');
            this._iframe = el;
            this._el.appendChild(el);
        },

        _removeIframe: function(){
            if(this._iframe){
                this._el.removeChild(this._iframe);
            }
        },

        _show: function(state, content){
            this._createIframe();
            this._Bel.addClass('dialog--visible');
        },

        _hide: function(){
            this._Bel.removeClass('dialog--visible');
            this._removeIframe();
        }

    };

    WS.promoVidDialog.init();

}(window.WS = window.WS || {}));

(function(WS, undefined){

    'use strict';

    //get token
    var inputEl = document.getElementById('token-input');
    if(!inputEl) return;
    inputEl.value = WS.utils.getParameterByName('token');

    inputEl = document.getElementById('username-input');
    if(!inputEl) return;
    inputEl.value = WS.utils.getParameterByName('username');

    //
    new WS.httpFormHelper({
        formId: 'forgot-password-form',
        onSuccess: function(){
            WS.notification.show('success', 'Thank you! Your password has been changed');
        },
        doRequest: function(validation, onSuccess, onError){
            console.log(validation);
            B.ajax({
                url: 'https://peakapi.whitespell.com/users/reset',
                type: 'post',
                data: {
                    resetToken: validation.inputs.token,
                    userName: validation.inputs.username,
                    newPassword: validation.inputs.new_password
                },
                dataType: 'json',
                success: onSuccess,
                error: onError
            });
        }
    });

}(window.WS = window.WS || {}));


(function(WS, undefined){

    'use strict';

    //get email
    var inputEl = document.getElementById('signup-email-input');
    if(!inputEl) return;
    inputEl.value = WS.utils.getParameterByName('email');

    //get email
    var isPublisherSignup = false;//!!WS.utils.getParameterByName('publisher'); publisher signup is currently disabled
    if(isPublisherSignup){
        var titleEl = document.getElementById('form-title');
        titleEl.innerText = titleEl.getAttribute('data-publisher-text');
    }

    new WS.httpFormHelper({
        formId: 'signup-form',
        onSuccess: function(){
            WS.notification.show('success', 'Thank you! We\'ll be in touch shortly.');
            location.href = 'https://app.upfit.co';
        },
        doRequest: function(validation, onSuccess, onError){
            B.ajax({
                url: 'https://peakapi.whitespell.com/users',
                type: 'post',
                data: {
                    userName: validation.inputs.username,
                    email: validation.inputs.email,
                    password: validation.inputs.password,
                    publisher: 0//(WS.utils.getParameterByName('publisher') ? 1 : 0)
                },
                dataType: 'json',
                success: onSuccess,
                error: onError
            });
        }
    });

}(window.WS = window.WS || {}));

(function(WS, undefined){

    'use strict';

    //get token
    var inputEl = document.getElementById('token-input');
    if(!inputEl) return;
    inputEl.value = WS.utils.getParameterByName('token');

    inputEl = document.getElementById('username-input');
    if(!inputEl) return;
    inputEl.value = WS.utils.getParameterByName('username');

    var formEl = WS.utils._gebi('verify-email-form'),
        socialButtonsEl = WS.utils._gebi('social-buttons');

    //
    new WS.httpFormHelper({
        formId: 'verify-email-form',
        submitOnInit: true,
        onSuccess: function(){
            WS.notification.show('success', 'Your email has been verified!');
        },
        doRequest: function(validation, onSuccess, onError){
            B.ajax({
                url: 'https://peakapi.whitespell.com/users/email',
                type: 'post',
                data: {
                    userName: validation.inputs.username,
                    emailToken: validation.inputs.token
                },
                dataType: 'json',
                success: function(res, xhr){
                    B(socialButtonsEl).addClass('is-hidden--is-visible');
                    onSuccess(res, xhr);
                },
                error: function(res, xhr){
                    B(formEl).addClass('is-hidden--is-visible');
                    onError(res, xhr);
                }
            });
        }
    });

}(window.WS = window.WS || {}));
