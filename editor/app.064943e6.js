parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"A2T1":[function(require,module,exports) {
window.btmMenu_previous="btmMenu_sche",window.CORE_CMD={wifi_scan:"@ap scan",wifi_connect:(e,t)=>`@ap connect [${e}]:[${t}]`,wifi_reconnect:"@ap connect reconnect",wifi_reset:"@ap connect reset",device_set_name:e=>`@set device id:${e}`,device_set_ssid:(e,t)=>`@set sap [${e}]:[${t}]`,device_set_bps:e=>`@bps: ${e}`,device_set_SSbps:e=>`SS bps: ${e}`,sche_show:"schedule show",sche_add:(e,t,s)=>`schedule add Week:${e} H:M=${t} ${s.join(" ")}`,sche_save:"schedule save",sche_remove:e=>`schedule remove ${e}`,ws_ping:"@rssi?"},window.CUSTOM_CMD={wifi_set_addr:e=>`set recv Addr ${e}`,wifi_get_addr:"get recv Addr",system_setting:"system setting",system_set:(e,t)=>`system setting ${e}: ${t}`,system_save:"system setting save",file_write:"write DNA",file_get:"get DNA",file_remove:"remove file DNA.dat",modbus_add:(e,t,s,n)=>`add station st:${e}|cycle:${t}|rds:${s}|${n.join("")}`,modbus_show:"show station"},window.$=function(e){return document.getElementById(e)},window.bindEventIfIdExist=((e,t,s)=>{e&&e.addEventListener(t,()=>s())}),window.switch_page=function(e){e.id!==btmMenu_previous&&("home"===btmMenu_previous||"menu"===btmMenu_previous?($(e.id).parentElement.classList.add("buttomMenu-selected"),show_page(e.id.split("_")[1])):""!==btmMenu_previous&&($(btmMenu_previous).parentElement.classList.remove("buttomMenu-selected"),$(e.id).parentElement.classList.add("buttomMenu-selected"),show_page(e.id.split("_")[1]),hide_page(btmMenu_previous.split("_")[1])),btmMenu_previous=e.id)},window.show_page=function(e){switch(e){case"sche":localStorage.setItem("current_hash",location.hash),$("btmMenu_sche").parentElement.classList.add("buttomMenu-selected"),$("sche_editor").classList.add("hidden"),$("sche_page").classList.remove("hidden"),$("sche_list").classList.remove("hidden"),$("sche_list").scrollTo({top:0,behavior:"smooth"}),$("sche_btn_group").classList.remove("hidden");break;case"custom":localStorage.setItem("current_hash",location.hash),$("btmMenu_custom").parentElement.classList.add("buttomMenu-selected"),$("custom_page").classList.remove("hidden"),$("custom_list").scrollTo({top:0,behavior:"instant"});break;case"network":localStorage.setItem("current_hash",location.hash),$("btmMenu_network").parentElement.classList.add("buttomMenu-selected"),$("network_page").classList.remove("hidden");break;case"system":localStorage.setItem("current_hash",location.hash),$("btmMenu_system").parentElement.classList.add("buttomMenu-selected"),$("system_page").classList.remove("hidden"),$("system_list").scrollTo({top:0,behavior:"instant"});break;case"terminal":localStorage.setItem("current_hash",location.hash),$("btmMenu_terminal").parentElement.classList.add("buttomMenu-selected"),$("terminal_page").classList.remove("hidden");break;case"home":localStorage.setItem("current_hash",location.hash),$("menu_bottom").classList.add("hidden"),$("mask_setting").classList.add("hidden"),$("sche_page").classList.add("hidden"),$("custom_page").classList.add("hidden"),$("network_page").classList.add("hidden"),$("system_page").classList.add("hidden"),$("terminal_page").classList.add("hidden"),$("btmMenu_sche").parentElement.classList.remove("buttomMenu-selected"),$("btmMenu_custom").parentElement.classList.remove("buttomMenu-selected"),$("btmMenu_network").parentElement.classList.remove("buttomMenu-selected"),$("btmMenu_system").parentElement.classList.remove("buttomMenu-selected"),$("btmMenu_terminal").parentElement.classList.remove("buttomMenu-selected"),$("body").classList.remove("overflow-hidden")}},window.hide_page=function(e){switch(e){case"sche":$("sche_page").classList.add("hidden"),clearScheduleAdd();break;case"custom":$("custom_page").classList.add("hidden");break;case"network":$("network_page").classList.add("hidden");break;case"system":$("system_page").classList.add("hidden");break;case"terminal":$("terminal_page").classList.add("hidden");break;case"home":$("menu_bottom").classList.remove("hidden"),$("mask_setting").classList.remove("hidden"),$("mask").classList.add("hidden"),$("menu").classList.add("hidden")}},bindEventIfIdExist($("open-menu"),"click",()=>{switchMenu(1)}),bindEventIfIdExist($("mask"),"click",()=>{switchMenu(0)}),window.switchMenu=function(e){e?(window.location.hash="#menu",localStorage.setItem("current_hash",location.hash),$("mask").classList.remove("hidden"),$("menu").classList.remove("hidden"),$("body").classList.add("overflow-hidden")):(window.location.hash="#home",$("mask").classList.add("hidden"),$("menu").classList.add("hidden"),$("body").classList.remove("overflow-hidden"))},bindEventIfIdExist($("open-sche"),"click",()=>{window.location.hash="#sche"}),bindEventIfIdExist($("btmMenu_sche"),"click",()=>{"btmMenu_sche"!==btmMenu_previous&&(window.location.hash="#sche")}),bindEventIfIdExist($("sche_btn_cancel"),"click",()=>{show_page("sche"),clearScheduleAdd()}),bindEventIfIdExist($("sche_btn_add"),"click",()=>{clearScheduleAdd(),$("sche_list").classList.add("hidden"),$("sche_btn_group").classList.add("hidden"),$("sche_editor").classList.remove("hidden"),updateScheduleArea()}),window.updateSchedulePage=function(){$("sche_list").innerHTML="";let e,t,s,n,i,d,a,o,c=SYSDATA.Sched;for(let l=c.length-1;l>-1;l--){let r=c[l],m=r[0].split("W")[1].split("");s=document.createElement("tbody"),(i=document.createElement("td")).innerText="X",i.className="schedule-remove",i.onclick=(e=>{if(confirm("確認是否刪除排程？")){let t=getChildElementIndex(e.target.parentElement.parentElement.parentElement);t=t+(c.length+1-t-t)-2,removeSchedule(t)}}),s.append(i);for(let e=0;e<7;e++)d=document.createElement("input"),o=document.createElement("span"),a=document.createElement("label"),i=document.createElement("td"),d.type="checkbox",d.disabled=!0,m.length>0&&m[0]==e+1&&(m.shift(),d.checked=!0),0===e&&(o.innerText="一"),1===e&&(o.innerText="二"),2===e&&(o.innerText="三"),3===e&&(o.innerText="四"),4===e&&(o.innerText="五"),5===e&&(o.innerText="六"),6===e&&(o.innerText="日"),a.append(d),a.append(o),i.append(a),s.append(i);let u=document.createElement("table");u.className="schedule-week",u.append(s),o=document.createElement("span"),e=document.createElement("div");let _=0==r[2]?"00":r[2]<10?`0${r[2]}`:r[2];o.innerText=`${r[1]}:${_}`,e.className="schedule-time",e.append(o);let h=document.createElement("div");h.className="schedule-container",h.append(e),n=document.createElement("tr"),s=document.createElement("tbody");for(let e=0;e<parseInt(SYSDATA.Stations);e++)i=document.createElement("td"),r[e+3]>0?i.className="schedule-exec":i.className="schedule-close",i.innerText=`${e+1}區`,n.append(i);s.append(n),(n=document.createElement("tr")).style.height="4rem";for(let e=0;e<parseInt(SYSDATA.Stations);e++)i=document.createElement("td"),r[e+3]>0?i.className="schedule-exec":i.className="schedule-close",i.innerText=r[e+3],n.append(i);s.append(n),(t=document.createElement("table")).className="schedule-area",t.append(s),h.append(t),(e=document.createElement("div")).className="schedule",e.append(u),e.append(h),document.getElementById("sche_list").append(e)}},bindEventIfIdExist($("open-custom"),"click",()=>{window.location.hash="#custom"}),bindEventIfIdExist($("btmMenu_custom"),"click",()=>{"btmMenu_custom"!==btmMenu_previous&&(window.location.hash="#custom")}),bindEventIfIdExist($("open-network"),"click",()=>{window.location.hash="#network"}),bindEventIfIdExist($("btmMenu_network"),"click",()=>{"btmMenu_network"!==btmMenu_previous&&(window.location.hash="#network")}),bindEventIfIdExist($("open-system"),"click",()=>{window.location.hash="#system"}),bindEventIfIdExist($("btmMenu_system"),"click",()=>{"btmMenu_system"!==btmMenu_previous&&(window.location.hash="#system")}),bindEventIfIdExist($("open-terminal"),"click",()=>{window.location.hash="#terminal"}),bindEventIfIdExist($("btmMenu_terminal"),"click",()=>{"btmMenu_terminal"!==btmMenu_previous&&(window.location.hash="#terminal")}),bindEventIfIdExist($("btmMenu_close"),"click",()=>{window.location.hash="#home"}),document.querySelectorAll('input[name="float-input"]').forEach(e=>{window.innerWidth>768||(e.addEventListener("focus",e=>{$("menu_bottom").classList.add("hidden")}),e.addEventListener("blur",e=>{$("menu_bottom").classList.remove("hidden")}))}),window.postCmd=function(e){if(""===e)return;let t={SENDCMD:e};if(console.log(t),window.worker)try{window.worker.postMessage(t)}catch(s){console.log(s)}else console.log("websocket not ready...")},window.createClearAllInterval=function(){const e=()=>{};let t=setInterval(e,0);return()=>{const s=setInterval(e,0);for(;t!==s;)t+=1,clearInterval(t)}};var e,t=createClearAllInterval();window.createControlOption=function(e){for(let t=0;t<SYSDATA.Stations;t++){$(`sche_add_area_${t+1}`).innerHTML="";for(let s=0;s<e+1;s++){let e=document.createElement("option");e.innerText=s,$(`sche_add_area_${t+1}`).appendChild(e)}}},window.getOptionValue=function(e){return $(e).options[$(e).selectedIndex].value},window.addSchedule=function(){let e="";for(let n=0;n<7;n++)$(`sche_add_w${n+1}`).checked&&(e+=n+1);if(""===e)return void alert("至少選擇一個星期");let t=$("sche_add_time").value;if(""===t)return void alert("請選擇灑水時段");let s=[];for(let n=0;n<SYSDATA.Stations;n++)s.push(`ST${n+1}:`+getOptionValue(`sche_add_area_${n+1}`));s.filter(e=>e.split(":")[1]>0&&e.split(":")[1]<=30).length<1?alert("至少設定一區有效的灑水時間,為防止電磁閥過熱，每站上限為30分鐘。"):(postCmd(window.CORE_CMD.sche_add(e,t,s)),clearScheduleAdd(),spin(1),setTimeout(()=>{spin(0),btmMenu_previous="btmMenu_sche",hide_page("home"),show_page("sche"),updateSchedulePage(),postCmd(window.CORE_CMD.sche_save),alert("新增排程完成，若需要自動控制，請回到首頁將模式切換回自動。")},2e3))},bindEventIfIdExist($("sche_btn_confirm"),"click",()=>{addSchedule()}),window.removeSchedule=function(e){spin(1),postCmd(window.CORE_CMD.sche_remove(e)),setTimeout(()=>{spin(0),updateSchedulePage(),postCmd(window.CORE_CMD.sche_save)},2e3)},bindEventIfIdExist($("sche_btn_update"),"click",()=>{$("sche_list").innerHTML="",SYSDATA.Sched=[],postCmd(window.CORE_CMD.sche_show),spin(1),setTimeout(()=>{postCmd(window.CUSTOM_CMD.system_setting)},1e3),setTimeout(()=>{spin(0),0!==SYSDATA.Sched.length?updateSchedulePage():alert("無任何設定排程")},2e3)}),window.clearScheduleAdd=function(){for(let e=0;e<7;e++)$(`sche_add_w${e+1}`).checked=!1;$("sche_add_time").value="";for(let e=0;e<SYSDATA.Stations;e++)$(`sche_add_area_${e+1}`).selectedIndex=0},window.updateScheduleArea=function(){for(let e=0;e<8;e++)e<parseInt(SYSDATA.Stations)?($(`area_title_${e+1}`).classList.remove("hidden"),$(`area_input_${e+1}`).classList.remove("hidden")):($(`area_title_${e+1}`).classList.add("hidden"),$(`area_input_${e+1}`).classList.add("hidden"))},bindEventIfIdExist($("network_btn_scan"),"click",()=>{scanWifi(),spin(1)}),window.scanWifi=function(){var t=0,s="",n=$("wifi-result"),i=$("network_btn_scan");res_wifi="",n.innerHTML="",postCmd(window.CORE_CMD.wifi_scan),i.disabled=!0;var d=document.createElement("div");n.appendChild(d),e=setInterval(()=>{if((t+=1)>=10)return spin(0),alert("已逾時，請重新搜尋。"),clearInterval(e),n.innerHTML="",void(i.disabled=!1);res_wifi&&(spin(0),s=res_wifi,n.innerHTML="",s.split("|").forEach(e=>{if(""!==e){var t=document.createElement("li"),s=document.createElement("input");s.className="w-btn",s.type="button",s.value=e,s.onclick=(()=>inputWifiPWD(e)),t.appendChild(s),n.appendChild(t)}}),clearInterval(e),i.disabled=!1)},1e3)},window.inputWifiPWD=function(e){let t=prompt(`SSID: ${e},Wifi密碼: `);null!==t&&postCmd(window.CORE_CMD.wifi_connect(e,t))},bindEventIfIdExist($("network_btn_reconnect"),"click",()=>{postCmd(window.CORE_CMD.wifi_reconnect),spin(1),setTimeout(()=>{spin(0)},1e3)}),bindEventIfIdExist($("network_btn_set_socket"),"click",()=>{let e=prompt("請輸入Socket Server位址：");e&&(postCmd(window.CUSTOM_CMD.wifi_set_addr(e)),spin(1),setTimeout(()=>{postCmd(window.CUSTOM_CMD.wifi_get_addr)},500),setTimeout(()=>{spin(0)},1e3))}),bindEventIfIdExist($("network_btn_get_socket"),"click",()=>{postCmd(window.CUSTOM_CMD.wifi_get_addr),spin(1),setTimeout(()=>{spin(0)},500)}),bindEventIfIdExist($("system_set_device"),"click",()=>{let e=prompt("請輸入裝置名稱:");e?postCmd(window.CORE_CMD.device_set_name(e)):alert("請輸入至少一個字")}),bindEventIfIdExist($("system_set_time"),"click",()=>{let e=new Date(Date.now()),t=`${e.getFullYear()}-${e.getMonth()+1<10?`0${e.getMonth()+1}`:e.getMonth()+1}-${e.getDate()<10?`0${e.getDate()}`:e.getDate()}T${e.getHours()<10?`0${e.getHours()}`:e.getHours()}:${e.getMinutes()<10?`0${e.getMinutes()}`:e.getMinutes()} ${e.getDay()}`;confirm(`確定要更新系統時間？ ${t}`)&&(spin(1),postCmd(`set time ${t}`),setTimeout(()=>{spin(0)},500))}),bindEventIfIdExist($("system_set_ssid"),"click",()=>{let e=prompt("請輸入SSID:");if(!e)return void alert("格式不符，請重試");let t=prompt("請輸入8~16位密碼:");t?confirm(`確定更改為 wifi名稱: ${e}, 密碼: ${t} ?`)&&postCmd(window.CORE_CMD.device_set_ssid(e,t)):alert("格式不符，請重試")}),bindEventIfIdExist($("system_set_bps"),"click",()=>{let e=prompt("請輸入serial baud rate:");e&&(postCmd(window.CORE_CMD.device_set_bps(e)),spin(1),setTimeout(()=>{spin(0)},500))}),bindEventIfIdExist($("system_set_SSbps"),"click",()=>{let e=prompt("請輸入soft serial baud rate:");e&&(postCmd(window.CORE_CMD.device_set_SSbps(e)),spin(1),setTimeout(()=>{spin(0)},500))}),bindEventIfIdExist($("system_reload"),"click",()=>{confirm("確認強制重新整理?")&&reloadWeb()}),window.updateSystemPage=function(){$("system_device").innerText=SYSDATA.device},bindEventIfIdExist($("terminal_send"),"click",()=>{let e=$("cmd_input").value;"config"!==e?(postCmd(e),$("cmd_input").value=""):$("btmMenu_custom_btn").classList.remove("hidden")}),bindEventIfIdExist($("terminal_clear"),"click",()=>{$("tx").value=""}),bindEventIfIdExist($("terminal_scroll"),"click",()=>{window.terminal_scroll?(window.terminal_scroll=!1,$("terminal_scroll").innerText="捲動: OFF",$("terminal_scroll").classList.remove("success"),$("terminal_scroll").classList.add("default")):(window.terminal_scroll=!0,$("terminal_scroll").innerText="捲動: ON",$("terminal_scroll").classList.add("success"),$("terminal_scroll").classList.remove("default"))}),bindEventIfIdExist($("terminal_log"),"click",()=>{window.terminal_log?(window.terminal_log=!1,$("terminal_log").innerText="Log: OFF",$("terminal_log").classList.remove("success"),$("terminal_log").classList.add("default")):(window.terminal_log=!0,$("terminal_log").innerText="Log: ON",$("terminal_log").classList.add("success"),$("terminal_log").classList.remove("default"))}),bindEventIfIdExist($("status_light"),"click",()=>{confirm("確認強制重新整理?")&&reloadWeb()}),window.spin=function(e){e?$("spin").classList.remove("hidden"):$("spin").classList.add("hidden")},window.spinWithTime=function(e){$("spin").classList.remove("hidden"),setTimeout(()=>{$("spin").classList.add("hidden")},1e3*e)},window.getChildElementIndex=function(e){return console.log(e),Array.prototype.indexOf.call(e.parentElement.children,e)},window.reloadWeb=(()=>{"build"===$("build_check").innerText&&localStorage.clear(),window.location.reload()}),window.addEventListener("hashchange",e=>{switch(e.preventDefault(),console.log("hashchange: "+location.hash),location.hash){case"#home":show_page("home"),switchMenu(0),btmMenu_previous="home";break;case"#menu":show_page("home"),switchMenu(1),btmMenu_previous="menu";break;case"#sche":switch_page($("btmMenu_sche")),$("sche_list").innerHTML="",SYSDATA.Sched=[],postCmd(window.CORE_CMD.sche_show),spin(1),setTimeout(()=>{postCmd(window.CUSTOM_CMD.system_setting)},1e3),setTimeout(()=>{spin(0),0!==SYSDATA.Sched.length?updateSchedulePage():alert("無任何設定排程")},2e3),createControlOption(30),btmMenu_previous="btmMenu_sche",hide_page("home");break;case"#custom":switch_page($("btmMenu_custom")),btmMenu_previous="btmMenu_custom",hide_page("home");break;case"#network":switch_page($("btmMenu_network")),btmMenu_previous="btmMenu_network",hide_page("home"),postCmd(window.CORE_CMD.ws_ping);break;case"#system":switch_page($("btmMenu_system")),btmMenu_previous="btmMenu_system",hide_page("home"),updateSystemPage();break;case"#terminal":switch_page($("btmMenu_terminal")),btmMenu_previous="btmMenu_terminal",hide_page("home");break;default:console.log("not vaild hash.")}});
},{}]},{},["A2T1"], null)
//# sourceMappingURL=/editor/app.064943e6.js.map