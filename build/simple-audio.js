(()=>{var e={704:(e,o,t)=>{e.exports=t(79)("./src/core.js")},448:(e,o,t)=>{e.exports=t(79)("./src/upload.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},o={};function t(i){var l=o[i];if(void 0!==l)return l.exports;var r=o[i]={exports:{}};return e[i](r,r.exports,t),r.exports}t.d=(e,o)=>{for(var i in o)t.o(o,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:o[i]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{"use strict";t.r(i),t.d(i,{SimpleAudio:()=>s,icons:()=>n});var e=t(704);class o extends e.Plugin{init(){this._defineSchema(),console.log("AudioUI#init() got called, schema is defined"),this._defineConverters(),console.log("Converters for Audio have been defined")}_defineSchema(){this.editor.model.schema.register("simpleaudio",{isObject:!0,isBlock:!0,allowAttributes:["source","controls"],allowWhere:"$text",allowChildren:"$text"})}_defineConverters(){const e=this.editor.conversion;e.for("downcast").elementToElement({model:{name:"audioBr",attributes:["controls, source"]},view:(e,{writer:o})=>(console.log(e),o.createContainerElement("audio",{controls:e.getAttribute("controls"),src:e.getAttribute("source")}))}),e.for("upcast").elementToElement({view:{name:"audio",attributes:["controls","src"]},model:(e,{writer:o})=>(console.log(e),o.createElement("simpleaudio",{controls:e.getAttribute("controls"),source:e.getAttribute("src")}))})}}var l=t(448);class r extends e.Plugin{static get pluginName(){return"AudioUI"}init(){const e=this.editor,o=e.t;e.ui.componentFactory.add("simpleAudioButton",e=>{const t=new l.FileDialogButtonView(e);return t.set({acceptedType:"audio/mpeg",allowMultipleFiles:!1}),t.buttonView.set({label:o("Simple audio"),icon:'<svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_audio</title><path d="M17.229,4a.9.9,0,0,0-.569.232l-7.6,6.32a1.158,1.158,0,0,1-.955.328H3.208A1.2,1.2,0,0,0,2,12.088v7.826A1.2,1.2,0,0,0,3.208,21.12H8.1a1.158,1.158,0,0,1,.955.328l7.6,6.32c.521.433,1.081.224,1.081-.289V4.522A.494.494,0,0,0,17.229,4ZM27,6.3,25.209,8.093a14.708,14.708,0,0,1,0,15.844l1.785,1.776A17.19,17.19,0,0,0,27,6.3Zm-4.333,4.323L20.905,12.4a6.035,6.035,0,0,1,0,7.237l1.756,1.756a8.554,8.554,0,0,0,.01-10.769Z" style="fill:#00007f"/></svg>',tooltip:!0}),t.on("done",(e,o)=>{o[0]?this.insertAudio(o[0]):logError("No file available",{})}),t}),console.log("AudioUI.init() executed")}insertAudio(e){console.log("insert audio from file ",e),console.log("plugins",editor.plugins);const o=editor.plugins.get("FileRepository"),t=o.createLoader(e);t.upload().then(e=>this.createAudio(e),e=>logError("error",e)),console.log("loader",t),console.log("Repository",o)}createAudio(e){const o=this.editor.model;console.log("uploadResult",e),o.change(t=>{const i=t.createElement("simpleaudio",{source:e.url,controls:""});console.log("audio",i),o.insertContent(i)})}}class s extends e.Plugin{static get requires(){return[o,r]}}const n={ckeditor:"<svg width='68' height='64' viewBox='0 0 68 64' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><path d='M43.71 11.025a11.508 11.508 0 0 0-1.213 5.159c0 6.42 5.244 11.625 11.713 11.625.083 0 .167 0 .25-.002v16.282a5.464 5.464 0 0 1-2.756 4.739L30.986 60.7a5.548 5.548 0 0 1-5.512 0L4.756 48.828A5.464 5.464 0 0 1 2 44.089V20.344c0-1.955 1.05-3.76 2.756-4.738L25.474 3.733a5.548 5.548 0 0 1 5.512 0l12.724 7.292z' fill='#FFF'/><path d='M45.684 8.79a12.604 12.604 0 0 0-1.329 5.65c0 7.032 5.744 12.733 12.829 12.733.091 0 .183-.001.274-.003v17.834a5.987 5.987 0 0 1-3.019 5.19L31.747 63.196a6.076 6.076 0 0 1-6.037 0L3.02 50.193A5.984 5.984 0 0 1 0 45.003V18.997c0-2.14 1.15-4.119 3.019-5.19L25.71.804a6.076 6.076 0 0 1 6.037 0L45.684 8.79zm-29.44 11.89c-.834 0-1.51.671-1.51 1.498v.715c0 .828.676 1.498 1.51 1.498h25.489c.833 0 1.51-.67 1.51-1.498v-.715c0-.827-.677-1.498-1.51-1.498h-25.49.001zm0 9.227c-.834 0-1.51.671-1.51 1.498v.715c0 .828.676 1.498 1.51 1.498h18.479c.833 0 1.509-.67 1.509-1.498v-.715c0-.827-.676-1.498-1.51-1.498H16.244zm0 9.227c-.834 0-1.51.671-1.51 1.498v.715c0 .828.676 1.498 1.51 1.498h25.489c.833 0 1.51-.67 1.51-1.498v-.715c0-.827-.677-1.498-1.51-1.498h-25.49.001zm41.191-14.459c-5.835 0-10.565-4.695-10.565-10.486 0-5.792 4.73-10.487 10.565-10.487C63.27 3.703 68 8.398 68 14.19c0 5.791-4.73 10.486-10.565 10.486v-.001z' fill='#1EBC61' fill-rule='nonzero'/><path d='M60.857 15.995c0-.467-.084-.875-.251-1.225a2.547 2.547 0 0 0-.686-.88 2.888 2.888 0 0 0-1.026-.531 4.418 4.418 0 0 0-1.259-.175c-.134 0-.283.006-.447.018-.15.01-.3.034-.446.07l.075-1.4h3.587v-1.8h-5.462l-.214 5.06c.319-.116.682-.21 1.089-.28.406-.071.77-.107 1.088-.107.218 0 .437.021.655.063.218.041.413.114.585.218s.313.244.422.419c.109.175.163.391.163.65 0 .424-.132.745-.396.961a1.434 1.434 0 0 1-.938.325c-.352 0-.656-.1-.912-.3-.256-.2-.43-.453-.523-.762l-1.925.588c.1.35.258.664.472.943.214.279.47.514.767.706.298.191.63.339.995.443.365.104.749.156 1.151.156.437 0 .86-.064 1.272-.193.41-.13.778-.323 1.1-.581a2.8 2.8 0 0 0 .775-.981c.193-.396.29-.864.29-1.405h-.001z' fill='#FFF' fill-rule='nonzero'/></g></svg>\n"}})(),(window.CKEditor5=window.CKEditor5||{}).simpleAudio=i})();