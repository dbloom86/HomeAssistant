import{e0 as t,l as e,d2 as a,dj as s,dl as n,e9 as r,d8 as i,dP as d,i as o,eb as u,ea as c,dV as l}from"./card-e5d55e5b.js";import{C as g,G as h}from"./engine-generic-93cdbee6.js";import{a as _,V as m}from"./media-c9012082.js";class y extends g{constructor(){super(...arguments),this._entity=null}async initialize(a){const s=this.getConfig(),n=s.camera_entity?await a.entityRegistryManager.getEntity(a.hass,s.camera_entity):null;if(!n||!s.camera_entity)throw new t(e("error.no_camera_entity"),s);return this._entity=n,this}getEntity(){return this._entity}}class M extends h{constructor(t,e,a,s,n,r){super(e,r),this._entityRegistryManager=t,this._browseMediaManager=a,this._resolvedMediaCache=s,this._requestCache=n}generateDefaultEventQuery(t,e,s){return[{type:a.Event,cameraIDs:e,...s}]}async getMediaDownloadPath(t,e,a){const r=a.getContentID();if(!r)return null;const i=await s(t,r,this._resolvedMediaCache);return i?{endpoint:n(t,i.url)}:null}getQueryResultMaxAge(t){return t.type===a.Event?r:null}getMediaCapabilities(t){return{canFavorite:!1,canDownload:!0}}}class p extends _{constructor(t,e,a){super(t,e),this._browseMedia=a,a._metadata?.startDate?this._id=`${e}/${i(a._metadata.startDate,"yyyy-MM-dd HH:mm:ss")}`:this._id=a.media_content_id}getStartTime(){return this._browseMedia._metadata?.startDate??null}getEndTime(){return this._browseMedia._metadata?.endDate??null}getVideoContentType(){return m.MP4}getID(){return this._id}getContentID(){return this._browseMedia.media_content_id}getTitle(){const t=this.getStartTime();return t?d(t):this._browseMedia.title}getThumbnail(){return this._browseMedia.thumbnail}getWhat(){return null}getScore(){return null}getTags(){return null}isGroupableWith(t){return this.getMediaType()===t.getMediaType()&&o(this.getWhere(),t.getWhere())&&o(this.getWhat(),t.getWhat())}}class w{static createEventViewMedia(t,e,a){return new p(t,a,e)}}const D=t=>{const e=new Map;for(const a of t){const t=a._metadata?.cameraID;if(!t)continue;const s=a.media_class===u?"clip":a.media_class===c?"snapshot":null;if(!s)continue;const n=w.createEventViewMedia(s,a,t),r=n.getID(),i=e.get(r);(!i||"snapshot"===i.getMediaType()&&"clip"===n.getMediaType())&&e.set(r,n)}return[...e.values()]},b=(t,e,a)=>!!t._metadata&&(e&&a?l({start:t._metadata.startDate,end:t._metadata.endDate},{start:e,end:a}):!e&&a?t._metadata.startDate<=a:!(e&&!a)||t._metadata.startDate>=e);export{y as B,M as a,D as g,b as i};
