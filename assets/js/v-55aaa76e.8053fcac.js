"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[91993],{13160:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d={key:"v-55aaa76e",path:"/devices/M515EGBZTN.html",title:"Zemismart M515EGBZTN control via MQTT",lang:"en-US",frontmatter:{title:"Zemismart M515EGBZTN control via MQTT",description:"Integrate your Zemismart M515EGBZTN via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-08-31T11:26:27.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Cover",slug:"cover",children:[]},{level:3,title:"Motor_direction (enum)",slug:"motor-direction-enum",children:[]},{level:3,title:"Border (enum)",slug:"border-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/M515EGBZTN.md",git:{updatedTime:1666277295e3}}},29700:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var d=o(66252);const i=(0,d.uE)('<h1 id="zemismart-m515egbztn" tabindex="-1"><a class="header-anchor" href="#zemismart-m515egbztn" aria-hidden="true">#</a> Zemismart M515EGBZTN</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>M515EGBZTN</td></tr><tr><td>Vendor</td><td>Zemismart</td></tr><tr><td>Description</td><td>Roller shade driver</td></tr><tr><td>Exposes</td><td>cover (state, position), motor_direction, border, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/M515EGBZTN.jpg" alt="Zemismart M515EGBZTN"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),r=(0,d.Uk)("How to use device type specific configuration"),a=(0,d.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="motor-direction-enum" tabindex="-1"><a class="header-anchor" href="#motor-direction-enum" aria-hidden="true">#</a> Motor_direction (enum)</h3><p>Value can be found in the published state on the <code>motor_direction</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_direction&quot;: NEW_VALUE}</code>. The possible values are: <code>forward</code>, <code>back</code>.</p><h3 id="border-enum" tabindex="-1"><a class="header-anchor" href="#border-enum" aria-hidden="true">#</a> Border (enum)</h3><p>Value can be found in the published state on the <code>border</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;border&quot;: NEW_VALUE}</code>. The possible values are: <code>up</code>, <code>down</code>, <code>down_delete</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),c={},s=(0,o(83744).Z)(c,[["render",function(e,t){const o=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)(d.HY,null,[i,(0,d._)("p",null,[(0,d._)("em",null,[(0,d.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.w5)((()=>[r])),_:1})])]),a],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,d]of t)e[o]=d;return e}}}]);