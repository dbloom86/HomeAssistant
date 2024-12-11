import{eB as e,eC as t,l as i,e7 as a,e6 as n,e5 as s,e3 as r,j as c,eD as l}from"./card-45855f1f.js";class o{constructor(t,i,a){this._destroyCallbacks=[],this._stateChangeHandler=t=>{this._eventCallback?.({cameraID:this.getID(),type:e(t.newState.state)?"new":"end"})},this._config=t,this._engine=i,this._capabilities=a?.capabilities,this._eventCallback=a?.eventCallback}async initialize(e){return e.stateWatcher.subscribe(this._stateChangeHandler,this._config.triggers.entities),this._onDestroy((()=>e.stateWatcher.unsubscribe(this._stateChangeHandler))),this}async destroy(){this._destroyCallbacks.forEach((e=>e()))}getConfig(){return this._config}setID(e){this._config.id=e}getID(){if(this._config.id)return this._config.id;throw new t(i("error.no_camera_id"))}getEngine(){return this._engine}getCapabilities(){return this._capabilities??null}getProxyConfig(){return{dynamic:this._config.proxy.dynamic,media:"auto"!==this._config.proxy.media&&this._config.proxy.media,ssl_verification:!1!==this._config.proxy.ssl_verification,ssl_ciphers:"auto"===this._config.proxy.ssl_ciphers?"default":this._config.proxy.ssl_ciphers}}_onDestroy(e){this._destroyCallbacks.push(e)}}const u=(e,t)=>{const i=t?.url??e.go2rtc?.url,a=t?.stream??e.go2rtc?.stream;if(!i||!a)return null;const n=`${i}/api/ws?src=${a}`;return{endpoint:n,sign:n.startsWith("/")}};class g{constructor(e,t){this._stateWatcher=e,this._eventCallback=t}getEngineType(){return a.Generic}async createCamera(e,t){return await new o(t,this,{capabilities:new n({"favorite-events":!1,"favorite-recordings":!1,clips:!1,live:!0,menu:!0,recordings:!1,seek:!1,snapshots:!1,substream:!0,ptz:s(t)??void 0},{disable:t.capabilities?.disable,disableExcept:t.capabilities?.disable_except}),eventCallback:this._eventCallback}).initialize({stateWatcher:this._stateWatcher})}generateDefaultEventQuery(e,t,i){return null}generateDefaultRecordingQuery(e,t,i){return null}generateDefaultRecordingSegmentsQuery(e,t,i){return null}async getEvents(e,t,i,a){return null}async getRecordings(e,t,i,a){return null}async getRecordingSegments(e,t,i,a){return null}generateMediaFromEvents(e,t,i,a){return null}generateMediaFromRecordings(e,t,i,a){return null}async getMediaDownloadPath(e,t,i){return null}async favoriteMedia(e,t,i,a){}getQueryResultMaxAge(e){return null}async getMediaSeekTime(e,t,i,a,n){return null}async getMediaMetadata(e,t,i,a){return null}getCameraMetadata(e,t){const i=r(t);return{title:t.title??c(e,t.camera_entity)??c(e,t.webrtc_card?.entity)??t.id??"",icon:t?.icon??(i?l(e,i,"mdi:video"):"mdi:video")}}getMediaCapabilities(e){return null}getCameraEndpoints(e,t){const i=u(e);return i?{go2rtc:i}:null}async executePTZAction(e,t,i,a){}}var d=Object.freeze({__proto__:null,GenericCameraManagerEngine:g});export{o as C,g as G,d as e,u as g};
