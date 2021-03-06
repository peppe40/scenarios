import { Vue, components, utils } from "https://designstem.github.io/fachwerk/fachwerk.js";
Vue.prototype.$global = new Vue({ data: { state: {} } });

for (const name in components) {
  Vue.component(name, components[name])
}

new Vue({
    el: "#app",
    data: () => ({
	red:30,
	green:30,
	blue:30,
	sred:30,
	sgreen:30,
	sblue:30,
	spoti:30,
    }),
    methods: {
	...utils },
    template:
    ` <div style="padding-left:10px; display:inline">

        <div style="width:40%; float:left;">
        <br/>
        <h2>Ambiental</h2>
        <h3> Red: {{red}}% </h3>
        <input id="rslider" type="range" v-model="red" max="100" min=0 step="10"></input>
        <h3> Green: {{green}}% </h3>
        <input id="gslider" type="range" v-model="green" max="100" min=0 step="10"></input>
        <h3> Blue: {{blue}}% </h3>
        <input id="bslider" type="range" v-model="blue" max="100" min=0 step="10"></input>
        </div>
        <div style="width:40%; float:right;">
        <br/>
        <h2>Spot Light</h2>
        <h3> Red: {{sred}}% </h3>
        <input id="rsslider" type="range" v-model="sred" max="100" min=0 step="10"></input>
        <h3> Green: {{sgreen}}% </h3>
        <input id="gsslider" type="range" v-model="sgreen" max="100" min=0 step="10"></input>
        <h3> Blue: {{sblue}}% </h3>
        <input id="bsslider" type="range" v-model="sblue" max="100" min=0 step="10"></input>
        <h3> Radius: {{spoti}}% </h3>
        <input id="isslider" type="range" v-model="spoti" max="100" min=0 step="10"></input>
        </div>
    </div>
`
});
