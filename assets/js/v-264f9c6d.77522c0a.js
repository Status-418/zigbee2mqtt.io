"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[38129],{15797:(t,e,a)=>{a.r(e),a.d(e,{data:()=>o});const o={key:"v-264f9c6d",path:"/devices/SR600.html",title:"Salus Controls SR600 control via MQTT",lang:"en-US",frontmatter:{title:"Salus Controls SR600 control via MQTT",description:"Integrate your Salus Controls SR600 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-11-01T12:47:02.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SR600.md",git:{updatedTime:1666277295e3}}},46168:(t,e,a)=>{a.r(e),a.d(e,{default:()=>c});var o=a(66252);const i=(0,o.uE)('<h1 id="salus-controls-sr600" tabindex="-1"><a class="header-anchor" href="#salus-controls-sr600" aria-hidden="true">#</a> Salus Controls SR600</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SR600</td></tr><tr><td>Vendor</td><td>Salus Controls</td></tr><tr><td>Description</td><td>Relay switch</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SR600.jpg" alt="Salus Controls SR600"></td></tr></tbody></table><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',3),s=(0,o.Uk)("This device supports OTA updates, for more information see "),d=(0,o.Uk)("OTA updates"),r=(0,o.Uk)("."),u=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),l={},c=(0,a(83744).Z)(l,[["render",function(t,e){const a=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[i,(0,o._)("p",null,[s,(0,o.Wm)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,o.w5)((()=>[d])),_:1}),r]),u],64)}]])},83744:(t,e)=>{e.Z=(t,e)=>{for(const[a,o]of e)t[a]=o;return t}}}]);