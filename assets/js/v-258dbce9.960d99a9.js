"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[81188],{55042:(e,t,a)=>{a.r(t),a.d(t,{data:()=>r});const r={key:"v-258dbce9",path:"/devices/MCCGQ14LM.html",title:"Xiaomi MCCGQ14LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi MCCGQ14LM control via MQTT",description:"Integrate your Xiaomi MCCGQ14LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-11-30T20:10:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Adapter firmware",slug:"adapter-firmware",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Contact (binary)",slug:"contact-binary",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Battery_low (binary)",slug:"battery-low-binary",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/MCCGQ14LM.md",git:{updatedTime:1666277295e3}}},61817:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var r=a(66252);const i=(0,r.uE)('<h1 id="xiaomi-mccgq14lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-mccgq14lm" aria-hidden="true">#</a> Xiaomi MCCGQ14LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>MCCGQ14LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara E1 door &amp; window contact sensor</td></tr><tr><td>Exposes</td><td>contact, battery, battery_low, voltage, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/MCCGQ14LM.jpg" alt="Xiaomi MCCGQ14LM"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="adapter-firmware" tabindex="-1"><a class="header-anchor" href="#adapter-firmware" aria-hidden="true">#</a> Adapter firmware</h3><p>In order for this device to work (fully), at least the following firmware is required on your adapter:</p>',5),o=(0,r.Uk)("CC2530/CC2531: "),d={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin",target:"_blank",rel:"noopener noreferrer"},n=(0,r._)("code",null,"20211115",-1),l=(0,r.Uk)("CC1352/CC2652: "),c={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin",target:"_blank",rel:"noopener noreferrer"},s=(0,r._)("code",null,"20211114",-1),h=(0,r.Uk)("CC2538: "),u={href:"https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592",target:"_blank",rel:"noopener noreferrer"},p=(0,r._)("code",null,"20211222",-1),m=(0,r.Uk)("Conbee II: "),b={href:"http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26720700.bin.GCF",target:"_blank",rel:"noopener noreferrer"},f=(0,r._)("code",null,"0x26720700",-1),g=(0,r._)("p",null,[(0,r._)("em",null,"Note that if you have already paired the device you will need to repair it after upgrading your adapter firmware.")],-1),y=(0,r._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,r.Uk)(" OTA updates")],-1),v=(0,r.Uk)("This device supports OTA updates, for more information see "),w=(0,r.Uk)("OTA updates"),k=(0,r.Uk)("."),_=(0,r.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="contact-binary" tabindex="-1"><a class="header-anchor" href="#contact-binary" aria-hidden="true">#</a> Contact (binary)</h3><p>Indicates if the contact is closed (= true) or open (= false). Value can be found in the published state on the <code>contact</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>false</code> contact is ON, if <code>true</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),C={},x=(0,a(83744).Z)(C,[["render",function(e,t){const a=(0,r.up)("OutboundLink"),C=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[i,(0,r._)("ul",null,[(0,r._)("li",null,[o,(0,r._)("a",d,[n,(0,r.Wm)(a)])]),(0,r._)("li",null,[l,(0,r._)("a",c,[s,(0,r.Wm)(a)])]),(0,r._)("li",null,[h,(0,r._)("a",u,[p,(0,r.Wm)(a)])]),(0,r._)("li",null,[m,(0,r._)("a",b,[f,(0,r.Wm)(a)])])]),g,y,(0,r._)("p",null,[v,(0,r.Wm)(C,{to:"/guide/usage/ota_updates.html"},{default:(0,r.w5)((()=>[w])),_:1}),k]),_],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,r]of t)e[a]=r;return e}}}]);