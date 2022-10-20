"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[78272],{22e3:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-7691b462",path:"/devices/GR-ZB01-W.html",title:"AXIS GR-ZB01-W control via MQTT",lang:"en-US",frontmatter:{title:"AXIS GR-ZB01-W control via MQTT",description:"Integrate your AXIS GR-ZB01-W via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"AC Power",slug:"ac-power",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Cover",slug:"cover",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/GR-ZB01-W.md",git:{updatedTime:1666277295e3}}},24448:(e,t,o)=>{o.r(t),o.d(t,{default:()=>c});var i=o(66252);const a=(0,i.uE)('<h1 id="axis-gr-zb01-w" tabindex="-1"><a class="header-anchor" href="#axis-gr-zb01-w" aria-hidden="true">#</a> AXIS GR-ZB01-W</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>GR-ZB01-W</td></tr><tr><td>Vendor</td><td>AXIS</td></tr><tr><td>Description</td><td>Gear window shade motor</td></tr><tr><td>Exposes</td><td>cover (state, position), battery, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/GR-ZB01-W.jpg" alt="AXIS GR-ZB01-W"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="ac-power" tabindex="-1"><a class="header-anchor" href="#ac-power" aria-hidden="true">#</a> AC Power</h3><p>If you are using the AC wall adapter, the battery level will always stay within the range of 25-35% as it is continually drawing power from the outlet. The battery level indicator is only relevant to if you are using the solar panel.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',6),d=(0,i.Uk)("How to use device type specific configuration"),r=(0,i.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),s={},c=(0,o(83744).Z)(s,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[d])),_:1})])]),r],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);