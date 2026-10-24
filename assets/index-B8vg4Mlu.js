(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();const rg=""+new URL("Fragments by @AERØHEAD 🇺🇸-CH6-KLJc.mp3",import.meta.url).href,ag=""+new URL("IN MEMORIAM by Onycs 🇫🇷-D1XmzUWE.mp3",import.meta.url).href,cg=""+new URL("Imphenzia - Discovery Of Planet X-D4ILWVv0.mp3",import.meta.url).href,lg=""+new URL("No.10 A New Beginning-CKeYDUKG.mp3",import.meta.url).href,ug=""+new URL("Travis Fitzsimmons - Painting The Solar System-Icomd7I4.mp3",import.meta.url).href;const pu="180",cs={ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hg=0,fh=1,dg=2,mf=1,fg=2,hi=3,$i=0,rn=1,pi=2,ki=0,ls=1,ph=2,mh=3,gh=4,pg=5,lo=100,mg=101,gg=102,_g=103,yg=104,xg=200,vg=201,Mg=202,Sg=203,sl=204,rl=205,bg=206,Eg=207,Cg=208,Ag=209,Tg=210,wg=211,Rg=212,Og=213,Ig=214,al=0,cl=1,ll=2,_s=3,ul=4,hl=5,dl=6,fl=7,ja=0,Pg=1,Lg=2,zi=0,Ng=1,Dg=2,Fg=3,Hg=4,Ug=5,Bg=6,kg=7,gf=300,ys=301,xs=302,pl=303,ml=304,Ya=306,gl=1e3,po=1001,_l=1002,yn=1003,zg=1004,Or=1005,Jn=1006,mc=1007,mo=1008,ni=1009,_f=1010,yf=1011,cr=1012,mu=1013,Mo=1014,Qn=1015,vr=1016,gu=1017,_u=1018,lr=1020,xf=35902,vf=35899,Mf=1021,Sf=1022,zn=1023,ur=1026,hr=1027,yu=1028,xu=1029,bf=1030,vu=1031,Mu=1033,ca=33776,la=33777,ua=33778,ha=33779,yl=35840,xl=35841,vl=35842,Ml=35843,Sl=36196,bl=37492,El=37496,Cl=37808,Al=37809,Tl=37810,wl=37811,Rl=37812,Ol=37813,Il=37814,Pl=37815,Ll=37816,Nl=37817,Dl=37818,Fl=37819,Hl=37820,Ul=37821,Bl=36492,kl=36494,zl=36495,Vl=36283,Gl=36284,Wl=36285,$l=36286,Vg=3200,Gg=3201,Su=0,Wg=1,Ni="",An="srgb",vs="srgb-linear",Sa="linear",de="srgb",Po=7680,_h=519,$g=512,Xg=513,qg=514,Ef=515,jg=516,Yg=517,Kg=518,Zg=519,Xl=35044,Jg=35048,yh="300 es",ti=2e3,ba=2001;class To{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const o=i[t];if(o!==void 0){const s=o.indexOf(e);s!==-1&&o.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const o=i.slice(0);for(let s=0,r=o.length;s<r;s++)o[s].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],da=Math.PI/180,ql=180/Math.PI;function Vi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]).toLowerCase()}function Kt(n,t,e){return Math.max(t,Math.min(e,n))}function Qg(n,t){return(n%t+t)%t}function gc(n,t,e){return(1-e)*n+e*t}function Zn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function fe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const t0={DEG2RAD:da};class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6],this.y=o[1]*e+o[4]*i+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),o=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*o+t.x,this.y=s*o+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Si{constructor(t=0,e=0,i=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=o}static slerpFlat(t,e,i,o,s,r,a){let c=i[o+0],l=i[o+1],h=i[o+2],d=i[o+3];const u=s[r+0],f=s[r+1],m=s[r+2],_=s[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(d!==_||c!==u||l!==f||h!==m){let g=1-a;const p=c*u+l*f+h*m+d*_,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const T=Math.sqrt(M),v=Math.atan2(T,p*y);g=Math.sin(g*v)/T,a=Math.sin(a*v)/T}const x=a*y;if(c=c*g+u*x,l=l*g+f*x,h=h*g+m*x,d=d*g+_*x,g===1-a){const T=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=T,l*=T,h*=T,d*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,o,s,r){const a=i[o],c=i[o+1],l=i[o+2],h=i[o+3],d=s[r],u=s[r+1],f=s[r+2],m=s[r+3];return t[e]=a*m+h*d+c*f-l*u,t[e+1]=c*m+h*u+l*d-a*f,t[e+2]=l*m+h*f+a*u-c*d,t[e+3]=h*m-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,o){return this._x=t,this._y=e,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,o=t._y,s=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(o/2),d=a(s/2),u=c(i/2),f=c(o/2),m=c(s/2);switch(r){case"XYZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"YZX":this._x=u*h*d+l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d-u*f*m;break;case"XZY":this._x=u*h*d-l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,o=Math.sin(i);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],o=e[4],s=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(r-o)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(o+r)/f,this._z=(s+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(s-l)/f,this._x=(o+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(r-o)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const o=Math.min(1,e/i);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,o=t._y,s=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+r*a+o*l-s*c,this._y=o*h+r*c+s*a-i*l,this._z=s*h+r*l+i*c-o*a,this._w=r*h-i*a-o*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,o=this._y,s=this._z,r=this._w;let a=r*t._w+i*t._x+o*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=o,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*i+e*this._x,this._y=f*o+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=r*d+this._w*u,this._x=i*d+this._x*u,this._y=o*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(o*Math.sin(t),o*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,o=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*o,this.y=s[1]*e+s[4]*i+s[7]*o,this.z=s[2]*e+s[5]*i+s[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,o=this.z,s=t.elements,r=1/(s[3]*e+s[7]*i+s[11]*o+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*o+s[12])*r,this.y=(s[1]*e+s[5]*i+s[9]*o+s[13])*r,this.z=(s[2]*e+s[6]*i+s[10]*o+s[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,o=this.z,s=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*o-a*i),h=2*(a*e-s*o),d=2*(s*i-r*e);return this.x=e+c*l+r*d-a*h,this.y=i+c*h+a*l-s*d,this.z=o+c*d+s*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,o=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*o,this.y=s[1]*e+s[5]*i+s[9]*o,this.z=s[2]*e+s[6]*i+s[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,o=t.y,s=t.z,r=e.x,a=e.y,c=e.z;return this.x=o*c-s*a,this.y=s*r-i*c,this.z=i*a-o*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return _c.copy(this).projectOnVector(t),this.sub(_c)}reflect(t){return this.sub(_c.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,o=this.z-t.z;return e*e+i*i+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const o=Math.sin(e)*t;return this.x=o*Math.sin(i),this.y=Math.cos(e)*t,this.z=o*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _c=new P,xh=new Si;class Wt{constructor(t,e,i,o,s,r,a,c,l){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,o,s,r,a,c,l)}set(t,e,i,o,s,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=o,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,o=e.elements,s=this.elements,r=i[0],a=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],f=i[5],m=i[8],_=o[0],g=o[3],p=o[6],y=o[1],M=o[4],x=o[7],T=o[2],v=o[5],b=o[8];return s[0]=r*_+a*y+c*T,s[3]=r*g+a*M+c*v,s[6]=r*p+a*x+c*b,s[1]=l*_+h*y+d*T,s[4]=l*g+h*M+d*v,s[7]=l*p+h*x+d*b,s[2]=u*_+f*y+m*T,s[5]=u*g+f*M+m*v,s[8]=u*p+f*x+m*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],o=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-i*s*h+i*a*c+o*s*l-o*r*c}invert(){const t=this.elements,e=t[0],i=t[1],o=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*r-a*l,u=a*c-h*s,f=l*s-r*c,m=e*d+i*u+o*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=d*_,t[1]=(o*l-h*i)*_,t[2]=(a*i-o*r)*_,t[3]=u*_,t[4]=(h*e-o*c)*_,t[5]=(o*s-a*e)*_,t[6]=f*_,t[7]=(i*c-l*e)*_,t[8]=(r*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,o,s,r,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*r+l*a)+r+t,-o*l,o*c,-o*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(yc.makeScale(t,e)),this}rotate(t){return this.premultiply(yc.makeRotation(-t)),this}translate(t,e){return this.premultiply(yc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let o=0;o<9;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yc=new Wt;function Cf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function e0(){const n=Ea("canvas");return n.style.display="block",n}const vh={};function dr(n){n in vh||(vh[n]=!0,console.warn(n))}function n0(n,t,e){return new Promise(function(i,o){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const Mh=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sh=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function i0(){const n={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(o,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===de&&(o.r=vi(o.r),o.g=vi(o.g),o.b=vi(o.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(o.applyMatrix3(this.spaces[s].toXYZ),o.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===de&&(o.r=us(o.r),o.g=us(o.g),o.b=us(o.b))),o},workingToColorSpace:function(o,s){return this.convert(o,this.workingColorSpace,s)},colorSpaceToWorking:function(o,s){return this.convert(o,s,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ni?Sa:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,s=this.workingColorSpace){return o.fromArray(this.spaces[s].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,s,r){return o.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,s){return dr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,s)},toWorkingColorSpace:function(o,s){return dr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[vs]:{primaries:t,whitePoint:i,transfer:Sa,toXYZ:Mh,fromXYZ:Sh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:t,whitePoint:i,transfer:de,toXYZ:Mh,fromXYZ:Sh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),n}const oe=i0();function vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function us(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Lo;class o0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Lo===void 0&&(Lo=Ea("canvas")),Lo.width=t.width,Lo.height=t.height;const o=Lo.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),i=Lo}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ea("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const o=i.getImageData(0,0,t.width,t.height),s=o.data;for(let r=0;r<s.length;r++)s[r]=vi(s[r]/255)*255;return i.putImageData(o,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(vi(e[i]/255)*255):e[i]=vi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let s0=0;class bu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=Vi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let s;if(Array.isArray(o)){s=[];for(let r=0,a=o.length;r<a;r++)o[r].isDataTexture?s.push(xc(o[r].image)):s.push(xc(o[r]))}else s=xc(o);i.url=s}return e||(t.images[this.uuid]=i),i}}function xc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?o0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let r0=0;const vc=new P;class tn extends To{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,i=po,o=po,s=Jn,r=mo,a=zn,c=ni,l=tn.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Vi(),this.name="",this.source=new bu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vc).x}get height(){return this.source.getSize(vc).y}get depth(){return this.source.getSize(vc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const o=this[e];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}o&&i&&o.isVector2&&i.isVector2||o&&i&&o.isVector3&&i.isVector3||o&&i&&o.isMatrix3&&i.isMatrix3?o.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gl:t.x=t.x-Math.floor(t.x);break;case po:t.x=t.x<0?0:1;break;case _l:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gl:t.y=t.y-Math.floor(t.y);break;case po:t.y=t.y<0?0:1;break;case _l:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=gf;tn.DEFAULT_ANISOTROPY=1;class Ie{constructor(t=0,e=0,i=0,o=1){Ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,o){return this.x=t,this.y=e,this.z=i,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,o=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*o+r[12]*s,this.y=r[1]*e+r[5]*i+r[9]*o+r[13]*s,this.z=r[2]*e+r[6]*i+r[10]*o+r[14]*s,this.w=r[3]*e+r[7]*i+r[11]*o+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,o,s;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,x=(f+1)/2,T=(p+1)/2,v=(h+u)/4,b=(d+_)/4,w=(m+g)/4;return M>x&&M>T?M<.01?(i=0,o=.707106781,s=.707106781):(i=Math.sqrt(M),o=v/i,s=b/i):x>T?x<.01?(i=.707106781,o=0,s=.707106781):(o=Math.sqrt(x),i=v/o,s=w/o):T<.01?(i=.707106781,o=.707106781,s=0):(s=Math.sqrt(T),i=b/s,o=w/s),this.set(i,o,s,e),this}let y=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(d-_)/y,this.z=(u-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class a0 extends To{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e);const o={width:t,height:e,depth:i.depth},s=new tn(o);this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Jn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let o=0,s=this.textures.length;o<s;o++)this.textures[o].image.width=t,this.textures[o].image.height=e,this.textures[o].image.depth=i,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const o=Object.assign({},t.textures[e].image);this.textures[e].source=new bu(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class So extends a0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Af extends tn{constructor(t=null,e=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=yn,this.minFilter=yn,this.wrapR=po,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class c0 extends tn{constructor(t=null,e=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=yn,this.minFilter=yn,this.wrapR=po,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wo{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Pn):Pn.fromBufferAttribute(s,r),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ir.copy(i.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}const o=t.children;for(let s=0,r=o.length;s<r;s++)this.expandByObject(o[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),Pr.subVectors(this.max,Ns),No.subVectors(t.a,Ns),Do.subVectors(t.b,Ns),Fo.subVectors(t.c,Ns),Ai.subVectors(Do,No),Ti.subVectors(Fo,Do),no.subVectors(No,Fo);let e=[0,-Ai.z,Ai.y,0,-Ti.z,Ti.y,0,-no.z,no.y,Ai.z,0,-Ai.x,Ti.z,0,-Ti.x,no.z,0,-no.x,-Ai.y,Ai.x,0,-Ti.y,Ti.x,0,-no.y,no.x,0];return!Mc(e,No,Do,Fo,Pr)||(e=[1,0,0,0,1,0,0,0,1],!Mc(e,No,Do,Fo,Pr))?!1:(Lr.crossVectors(Ai,Ti),e=[Lr.x,Lr.y,Lr.z],Mc(e,No,Do,Fo,Pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const si=[new P,new P,new P,new P,new P,new P,new P,new P],Pn=new P,Ir=new wo,No=new P,Do=new P,Fo=new P,Ai=new P,Ti=new P,no=new P,Ns=new P,Pr=new P,Lr=new P,io=new P;function Mc(n,t,e,i,o){for(let s=0,r=n.length-3;s<=r;s+=3){io.fromArray(n,s);const a=o.x*Math.abs(io.x)+o.y*Math.abs(io.y)+o.z*Math.abs(io.z),c=t.dot(io),l=e.dot(io),h=i.dot(io);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const l0=new wo,Ds=new P,Sc=new P;class ws{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):l0.setFromPoints(t).getCenter(i);let o=0;for(let s=0,r=t.length;s<r;s++)o=Math.max(o,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);const e=Ds.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),o=(i-this.radius)*.5;this.center.addScaledVector(Ds,o/i),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(Sc)),this.expandByPoint(Ds.copy(t.center).sub(Sc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ri=new P,bc=new P,Nr=new P,wi=new P,Ec=new P,Dr=new P,Cc=new P;class Ka{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,i,o){bc.copy(t).add(e).multiplyScalar(.5),Nr.copy(e).sub(t).normalize(),wi.copy(this.origin).sub(bc);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Nr),a=wi.dot(this.direction),c=-wi.dot(Nr),l=wi.lengthSq(),h=Math.abs(1-r*r);let d,u,f,m;if(h>0)if(d=r*c-a,u=r*a-c,m=s*h,d>=0)if(u>=-m)if(u<=m){const _=1/h;d*=_,u*=_,f=d*(d+r*u+2*a)+u*(r*d+u+2*c)+l}else u=s,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-m?(d=Math.max(0,-(-r*s+a)),u=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l):u<=m?(d=0,u=Math.min(Math.max(-s,-c),s),f=u*(u+2*c)+l):(d=Math.max(0,-(r*s+a)),u=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+u*(u+2*c)+l);else u=r>0?-s:s,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),o&&o.copy(bc).addScaledVector(Nr,u),f}intersectSphere(t,e){ri.subVectors(t.center,this.origin);const i=ri.dot(this.direction),o=ri.dot(ri)-i*i,s=t.radius*t.radius;if(o>s)return null;const r=Math.sqrt(s-o),a=i-r,c=i+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,o,s,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,o=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,o=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||s>o||((s>i||isNaN(i))&&(i=s),(r<o||isNaN(o))&&(o=r),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),i>c||a>o)||((a>i||i!==i)&&(i=a),(c<o||o!==o)&&(o=c),o<0)?null:this.at(i>=0?i:o,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,i,o,s){Ec.subVectors(e,t),Dr.subVectors(i,t),Cc.crossVectors(Ec,Dr);let r=this.direction.dot(Cc),a;if(r>0){if(o)return null;a=1}else if(r<0)a=-1,r=-r;else return null;wi.subVectors(this.origin,t);const c=a*this.direction.dot(Dr.crossVectors(wi,Dr));if(c<0)return null;const l=a*this.direction.dot(Ec.cross(wi));if(l<0||c+l>r)return null;const h=-a*wi.dot(Cc);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,i,o,s,r,a,c,l,h,d,u,f,m,_,g){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,o,s,r,a,c,l,h,d,u,f,m,_,g)}set(t,e,i,o,s,r,a,c,l,h,d,u,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=o,p[1]=s,p[5]=r,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,o=1/Ho.setFromMatrixColumn(t,0).length(),s=1/Ho.setFromMatrixColumn(t,1).length(),r=1/Ho.setFromMatrixColumn(t,2).length();return e[0]=i[0]*o,e[1]=i[1]*o,e[2]=i[2]*o,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,o=t.y,s=t.z,r=Math.cos(i),a=Math.sin(i),c=Math.cos(o),l=Math.sin(o),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=r*h,f=r*d,m=a*h,_=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+m*l,e[5]=u-_*l,e[9]=-a*c,e[2]=_-u*l,e[6]=m+f*l,e[10]=r*c}else if(t.order==="YXZ"){const u=c*h,f=c*d,m=l*h,_=l*d;e[0]=u+_*a,e[4]=m*a-f,e[8]=r*l,e[1]=r*d,e[5]=r*h,e[9]=-a,e[2]=f*a-m,e[6]=_+u*a,e[10]=r*c}else if(t.order==="ZXY"){const u=c*h,f=c*d,m=l*h,_=l*d;e[0]=u-_*a,e[4]=-r*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=r*h,e[9]=_-u*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const u=r*h,f=r*d,m=a*h,_=a*d;e[0]=c*h,e[4]=m*l-f,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const u=r*c,f=r*l,m=a*c,_=a*l;e[0]=c*h,e[4]=_-u*d,e[8]=m*d+f,e[1]=d,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+m,e[10]=u-_*d}else if(t.order==="XZY"){const u=r*c,f=r*l,m=a*c,_=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=r*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(u0,t,h0)}lookAt(t,e,i){const o=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ri.crossVectors(i,mn),Ri.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ri.crossVectors(i,mn)),Ri.normalize(),Fr.crossVectors(mn,Ri),o[0]=Ri.x,o[4]=Fr.x,o[8]=mn.x,o[1]=Ri.y,o[5]=Fr.y,o[9]=mn.y,o[2]=Ri.z,o[6]=Fr.z,o[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,o=e.elements,s=this.elements,r=i[0],a=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],f=i[13],m=i[2],_=i[6],g=i[10],p=i[14],y=i[3],M=i[7],x=i[11],T=i[15],v=o[0],b=o[4],w=o[8],S=o[12],C=o[1],R=o[5],L=o[9],B=o[13],k=o[2],G=o[6],U=o[10],K=o[14],W=o[3],st=o[7],rt=o[11],At=o[15];return s[0]=r*v+a*C+c*k+l*W,s[4]=r*b+a*R+c*G+l*st,s[8]=r*w+a*L+c*U+l*rt,s[12]=r*S+a*B+c*K+l*At,s[1]=h*v+d*C+u*k+f*W,s[5]=h*b+d*R+u*G+f*st,s[9]=h*w+d*L+u*U+f*rt,s[13]=h*S+d*B+u*K+f*At,s[2]=m*v+_*C+g*k+p*W,s[6]=m*b+_*R+g*G+p*st,s[10]=m*w+_*L+g*U+p*rt,s[14]=m*S+_*B+g*K+p*At,s[3]=y*v+M*C+x*k+T*W,s[7]=y*b+M*R+x*G+T*st,s[11]=y*w+M*L+x*U+T*rt,s[15]=y*S+M*B+x*K+T*At,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],o=t[8],s=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+s*c*d-o*l*d-s*a*u+i*l*u+o*a*f-i*c*f)+_*(+e*c*f-e*l*u+s*r*u-o*r*f+o*l*h-s*c*h)+g*(+e*l*d-e*a*f-s*r*d+i*r*f+s*a*h-i*l*h)+p*(-o*a*h-e*c*d+e*a*u+o*r*d-i*r*u+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],o=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],y=d*g*l-_*u*l+_*c*f-a*g*f-d*c*p+a*u*p,M=m*u*l-h*g*l-m*c*f+r*g*f+h*c*p-r*u*p,x=h*_*l-m*d*l+m*a*f-r*_*f-h*a*p+r*d*p,T=m*d*c-h*_*c-m*a*u+r*_*u+h*a*g-r*d*g,v=e*y+i*M+o*x+s*T;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/v;return t[0]=y*b,t[1]=(_*u*s-d*g*s-_*o*f+i*g*f+d*o*p-i*u*p)*b,t[2]=(a*g*s-_*c*s+_*o*l-i*g*l-a*o*p+i*c*p)*b,t[3]=(d*c*s-a*u*s-d*o*l+i*u*l+a*o*f-i*c*f)*b,t[4]=M*b,t[5]=(h*g*s-m*u*s+m*o*f-e*g*f-h*o*p+e*u*p)*b,t[6]=(m*c*s-r*g*s-m*o*l+e*g*l+r*o*p-e*c*p)*b,t[7]=(r*u*s-h*c*s+h*o*l-e*u*l-r*o*f+e*c*f)*b,t[8]=x*b,t[9]=(m*d*s-h*_*s-m*i*f+e*_*f+h*i*p-e*d*p)*b,t[10]=(r*_*s-m*a*s+m*i*l-e*_*l-r*i*p+e*a*p)*b,t[11]=(h*a*s-r*d*s-h*i*l+e*d*l+r*i*f-e*a*f)*b,t[12]=T*b,t[13]=(h*_*o-m*d*o+m*i*u-e*_*u-h*i*g+e*d*g)*b,t[14]=(m*a*o-r*_*o-m*i*c+e*_*c+r*i*g-e*a*g)*b,t[15]=(r*d*o-h*a*o+h*i*c-e*d*c-r*i*u+e*a*u)*b,this}scale(t){const e=this.elements,i=t.x,o=t.y,s=t.z;return e[0]*=i,e[4]*=o,e[8]*=s,e[1]*=i,e[5]*=o,e[9]*=s,e[2]*=i,e[6]*=o,e[10]*=s,e[3]*=i,e[7]*=o,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,o))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),o=Math.sin(e),s=1-i,r=t.x,a=t.y,c=t.z,l=s*r,h=s*a;return this.set(l*r+i,l*a-o*c,l*c+o*a,0,l*a+o*c,h*a+i,h*c-o*r,0,l*c-o*a,h*c+o*r,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,o,s,r){return this.set(1,i,s,0,t,1,r,0,e,o,1,0,0,0,0,1),this}compose(t,e,i){const o=this.elements,s=e._x,r=e._y,a=e._z,c=e._w,l=s+s,h=r+r,d=a+a,u=s*l,f=s*h,m=s*d,_=r*h,g=r*d,p=a*d,y=c*l,M=c*h,x=c*d,T=i.x,v=i.y,b=i.z;return o[0]=(1-(_+p))*T,o[1]=(f+x)*T,o[2]=(m-M)*T,o[3]=0,o[4]=(f-x)*v,o[5]=(1-(u+p))*v,o[6]=(g+y)*v,o[7]=0,o[8]=(m+M)*b,o[9]=(g-y)*b,o[10]=(1-(u+_))*b,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,i){const o=this.elements;let s=Ho.set(o[0],o[1],o[2]).length();const r=Ho.set(o[4],o[5],o[6]).length(),a=Ho.set(o[8],o[9],o[10]).length();this.determinant()<0&&(s=-s),t.x=o[12],t.y=o[13],t.z=o[14],Ln.copy(this);const l=1/s,h=1/r,d=1/a;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=d,Ln.elements[9]*=d,Ln.elements[10]*=d,e.setFromRotationMatrix(Ln),i.x=s,i.y=r,i.z=a,this}makePerspective(t,e,i,o,s,r,a=ti,c=!1){const l=this.elements,h=2*s/(e-t),d=2*s/(i-o),u=(e+t)/(e-t),f=(i+o)/(i-o);let m,_;if(c)m=s/(r-s),_=r*s/(r-s);else if(a===ti)m=-(r+s)/(r-s),_=-2*r*s/(r-s);else if(a===ba)m=-r/(r-s),_=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,o,s,r,a=ti,c=!1){const l=this.elements,h=2/(e-t),d=2/(i-o),u=-(e+t)/(e-t),f=-(i+o)/(i-o);let m,_;if(c)m=1/(r-s),_=r/(r-s);else if(a===ti)m=-2/(r-s),_=-(r+s)/(r-s);else if(a===ba)m=-1/(r-s),_=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let o=0;o<16;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ho=new P,Ln=new me,u0=new P(0,0,0),h0=new P(1,1,1),Ri=new P,Fr=new P,mn=new P,bh=new me,Eh=new Si;class Xn{constructor(t=0,e=0,i=0,o=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,o=this._order){return this._x=t,this._y=e,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const o=t.elements,s=o[0],r=o[4],a=o[8],c=o[1],l=o[5],h=o[9],d=o[2],u=o[6],f=o[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Kt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Eh.setFromEuler(this),this.setFromQuaternion(Eh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class Eu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let d0=0;const Ch=new P,Uo=new Si,ai=new me,Hr=new P,Fs=new P,f0=new P,p0=new Si,Ah=new P(1,0,0),Th=new P(0,1,0),wh=new P(0,0,1),Rh={type:"added"},m0={type:"removed"},Bo={type:"childadded",child:null},Ac={type:"childremoved",child:null};class Ve extends To{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new P,e=new Xn,i=new Si,o=new P(1,1,1);function s(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new me},normalMatrix:{value:new Wt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Uo.setFromAxisAngle(t,e),this.quaternion.multiply(Uo),this}rotateOnWorldAxis(t,e){return Uo.setFromAxisAngle(t,e),this.quaternion.premultiply(Uo),this}rotateX(t){return this.rotateOnAxis(Ah,t)}rotateY(t){return this.rotateOnAxis(Th,t)}rotateZ(t){return this.rotateOnAxis(wh,t)}translateOnAxis(t,e){return Ch.copy(t).applyQuaternion(this.quaternion),this.position.add(Ch.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ah,t)}translateY(t){return this.translateOnAxis(Th,t)}translateZ(t){return this.translateOnAxis(wh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Hr.copy(t):Hr.set(t,e,i);const o=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Fs,Hr,this.up):ai.lookAt(Hr,Fs,this.up),this.quaternion.setFromRotationMatrix(ai),o&&(ai.extractRotation(o.matrixWorld),Uo.setFromRotationMatrix(ai),this.quaternion.premultiply(Uo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rh),Bo.child=t,this.dispatchEvent(Bo),Bo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(m0),Ac.child=t,this.dispatchEvent(Ac),Ac.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rh),Bo.child=t,this.dispatchEvent(Bo),Bo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,o=this.children.length;i<o;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const o=this.children;for(let s=0,r=o.length;s<r;s++)o[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,t,f0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,p0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const o=this.children;for(let s=0,r=o.length;s<r;s++)o[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(a=>({...a})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));o.material=a}else o.material=s(t.materials,this.material);if(this.children.length>0){o.children=[];for(let a=0;a<this.children.length;a++)o.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];o.animations.push(s(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),f=r(t.animations),m=r(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=o,i;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const o=t.children[i];this.add(o.clone())}return this}}Ve.DEFAULT_UP=new P(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new P,ci=new P,Tc=new P,li=new P,ko=new P,zo=new P,Oh=new P,wc=new P,Rc=new P,Oc=new P,Ic=new Ie,Pc=new Ie,Lc=new Ie;class wn{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,o){o.subVectors(i,e),Nn.subVectors(t,e),o.cross(Nn);const s=o.lengthSq();return s>0?o.multiplyScalar(1/Math.sqrt(s)):o.set(0,0,0)}static getBarycoord(t,e,i,o,s){Nn.subVectors(o,e),ci.subVectors(i,e),Tc.subVectors(t,e);const r=Nn.dot(Nn),a=Nn.dot(ci),c=Nn.dot(Tc),l=ci.dot(ci),h=ci.dot(Tc),d=r*l-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(l*c-a*h)*u,m=(r*h-a*c)*u;return s.set(1-f-m,m,f)}static containsPoint(t,e,i,o){return this.getBarycoord(t,e,i,o,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,i,o,s,r,a,c){return this.getBarycoord(t,e,i,o,li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,li.x),c.addScaledVector(r,li.y),c.addScaledVector(a,li.z),c)}static getInterpolatedAttribute(t,e,i,o,s,r){return Ic.setScalar(0),Pc.setScalar(0),Lc.setScalar(0),Ic.fromBufferAttribute(t,e),Pc.fromBufferAttribute(t,i),Lc.fromBufferAttribute(t,o),r.setScalar(0),r.addScaledVector(Ic,s.x),r.addScaledVector(Pc,s.y),r.addScaledVector(Lc,s.z),r}static isFrontFacing(t,e,i,o){return Nn.subVectors(i,e),ci.subVectors(t,e),Nn.cross(ci).dot(o)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,o){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,i,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Nn.cross(ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,o,s){return wn.getInterpolation(t,this.a,this.b,this.c,e,i,o,s)}containsPoint(t){return wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,o=this.b,s=this.c;let r,a;ko.subVectors(o,i),zo.subVectors(s,i),wc.subVectors(t,i);const c=ko.dot(wc),l=zo.dot(wc);if(c<=0&&l<=0)return e.copy(i);Rc.subVectors(t,o);const h=ko.dot(Rc),d=zo.dot(Rc);if(h>=0&&d<=h)return e.copy(o);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(i).addScaledVector(ko,r);Oc.subVectors(t,s);const f=ko.dot(Oc),m=zo.dot(Oc);if(m>=0&&f<=m)return e.copy(s);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(i).addScaledVector(zo,a);const g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Oh.subVectors(s,o),a=(d-h)/(d-h+(f-m)),e.copy(o).addScaledVector(Oh,a);const p=1/(g+_+u);return r=_*p,a=u*p,e.copy(i).addScaledVector(ko,r).addScaledVector(zo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function Nc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Lt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=An){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,o=oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,oe.colorSpaceToWorking(this,o),this}setHSL(t,e,i,o=oe.workingColorSpace){if(t=Qg(t,1),e=Kt(e,0,1),i=Kt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,r=2*i-s;this.r=Nc(r,s,t+1/3),this.g=Nc(r,s,t),this.b=Nc(r,s,t-1/3)}return oe.colorSpaceToWorking(this,o),this}setStyle(t,e=An){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=o[1],a=o[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=o[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=An){const i=Tf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=An){return oe.workingToColorSpace(Je.copy(this),t),Math.round(Kt(Je.r*255,0,255))*65536+Math.round(Kt(Je.g*255,0,255))*256+Math.round(Kt(Je.b*255,0,255))}getHexString(t=An){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(Je.copy(this),e);const i=Je.r,o=Je.g,s=Je.b,r=Math.max(i,o,s),a=Math.min(i,o,s);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const d=r-a;switch(l=h<=.5?d/(r+a):d/(2-r-a),r){case i:c=(o-s)/d+(o<s?6:0);break;case o:c=(s-i)/d+2;break;case s:c=(i-o)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=An){oe.workingToColorSpace(Je.copy(this),t);const e=Je.r,i=Je.g,o=Je.b;return t!==An?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(t,e,i){return this.getHSL(Oi),this.setHSL(Oi.h+t,Oi.s+e,Oi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Oi),t.getHSL(Ur);const i=gc(Oi.h,Ur.h,e),o=gc(Oi.s,Ur.s,e),s=gc(Oi.l,Ur.l,e);return this.setHSL(i,o,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,o=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*o,this.g=s[1]*e+s[4]*i+s[7]*o,this.b=s[2]*e+s[5]*i+s[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new Lt;Lt.NAMES=Tf;let g0=0;class Ji extends To{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=ls,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=rl,this.blendEquation=lo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Po,this.stencilZFail=Po,this.stencilZPass=Po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const o=this[e];if(o===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sl&&(i.blendSrc=this.blendSrc),this.blendDst!==rl&&(i.blendDst=this.blendDst),this.blendEquation!==lo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_h&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Po&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Po&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Po&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(s){const r=[];for(const a in s){const c=s[a];delete c.metadata,r.push(c)}return r}if(e){const s=o(t.textures),r=o(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const o=e.length;i=new Array(o);for(let s=0;s!==o;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class _o extends Ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new P,Br=new Ot;let _0=0;class Rn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Xl,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let o=0,s=this.itemSize;o<s;o++)this.array[t+o]=e.array[i+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Br.fromBufferAttribute(this,e),Br.applyMatrix3(t),this.setXY(e,Br.x,Br.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Zn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,o){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),o=fe(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this}setXYZW(t,e,i,o,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),o=fe(o,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xl&&(t.usage=this.usage),t}}class wf extends Rn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Rf extends Rn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ye extends Rn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let y0=0;const Mn=new me,Dc=new Ve,Vo=new P,gn=new wo,Hs=new wo,Xe=new P;class On extends To{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cf(t)?Rf:wf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Wt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,i){return Mn.makeTranslation(t,e,i),this.applyMatrix4(Mn),this}scale(t,e,i){return Mn.makeScale(t,e,i),this.applyMatrix4(Mn),this}lookAt(t){return Dc.lookAt(t),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vo).negate(),this.translate(Vo.x,Vo.y,Vo.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let o=0,s=t.length;o<s;o++){const r=t[o];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ye(i,3))}else{const i=Math.min(t.length,e.count);for(let o=0;o<i;o++){const s=t[o];e.setXYZ(o,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,o=e.length;i<o;i++){const s=e[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const a=e[s];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(gn.min,Hs.min),gn.expandByPoint(Xe),Xe.addVectors(gn.max,Hs.max),gn.expandByPoint(Xe)):(gn.expandByPoint(Hs.min),gn.expandByPoint(Hs.max))}gn.getCenter(i);let o=0;for(let s=0,r=t.count;s<r;s++)Xe.fromBufferAttribute(t,s),o=Math.max(o,i.distanceToSquared(Xe));if(e)for(let s=0,r=e.length;s<r;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Xe.fromBufferAttribute(a,l),c&&(Vo.fromBufferAttribute(t,l),Xe.add(Vo)),o=Math.max(o,i.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,o=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let w=0;w<i.count;w++)a[w]=new P,c[w]=new P;const l=new P,h=new P,d=new P,u=new Ot,f=new Ot,m=new Ot,_=new P,g=new P;function p(w,S,C){l.fromBufferAttribute(i,w),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,C),u.fromBufferAttribute(s,w),f.fromBufferAttribute(s,S),m.fromBufferAttribute(s,C),h.sub(l),d.sub(l),f.sub(u),m.sub(u);const R=1/(f.x*m.y-m.x*f.y);isFinite(R)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(R),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(R),a[w].add(_),a[S].add(_),a[C].add(_),c[w].add(g),c[S].add(g),c[C].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let w=0,S=y.length;w<S;++w){const C=y[w],R=C.start,L=C.count;for(let B=R,k=R+L;B<k;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const M=new P,x=new P,T=new P,v=new P;function b(w){T.fromBufferAttribute(o,w),v.copy(T);const S=a[w];M.copy(S),M.sub(T.multiplyScalar(T.dot(S))).normalize(),x.crossVectors(v,S);const R=x.dot(c[w])<0?-1:1;r.setXYZW(w,M.x,M.y,M.z,R)}for(let w=0,S=y.length;w<S;++w){const C=y[w],R=C.start,L=C.count;for(let B=R,k=R+L;B<k;B+=3)b(t.getX(B+0)),b(t.getX(B+1)),b(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const o=new P,s=new P,r=new P,a=new P,c=new P,l=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){const m=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);o.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),h.subVectors(r,s),d.subVectors(o,s),h.cross(d),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),a.add(h),c.add(h),l.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)o.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,s),d.subVectors(o,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)u[m++]=l[f++]}return new Rn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new On,i=this.index.array,o=this.attributes;for(const a in o){const c=o[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=t(u,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const o={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(o[c]=h,s=!0)}s&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const o=t.attributes;for(const l in o){const h=o[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ih=new me,oo=new Ka,kr=new ws,Ph=new P,zr=new P,Vr=new P,Gr=new P,Fc=new P,Wr=new P,Lh=new P,$r=new P;class Qe extends Ve{constructor(t=new On,e=new _o){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=o.length;s<r;s++){const a=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,o=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(o,t);const a=this.morphTargetInfluences;if(s&&a){Wr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],d=s[c];h!==0&&(Fc.fromBufferAttribute(d,t),r?Wr.addScaledVector(Fc,h):Wr.addScaledVector(Fc.sub(e),h))}e.add(Wr)}return e}raycast(t,e){const i=this.geometry,o=this.material,s=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere),kr.applyMatrix4(s),oo.copy(t.ray).recast(t.near),!(kr.containsPoint(oo.origin)===!1&&(oo.intersectSphere(kr,Ph)===null||oo.origin.distanceToSquared(Ph)>(t.far-t.near)**2))&&(Ih.copy(s).invert(),oo.copy(t.ray).applyMatrix4(Ih),!(i.boundingBox!==null&&oo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,oo)))}_computeIntersections(t,e,i){let o;const s=this.geometry,r=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=r[g.materialIndex],y=Math.max(g.start,f.start),M=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,T=M;x<T;x+=3){const v=a.getX(x),b=a.getX(x+1),w=a.getX(x+2);o=Xr(this,p,t,i,l,h,d,v,b,w),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=g.materialIndex,e.push(o))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const y=a.getX(g),M=a.getX(g+1),x=a.getX(g+2);o=Xr(this,r,t,i,l,h,d,y,M,x),o&&(o.faceIndex=Math.floor(g/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=r[g.materialIndex],y=Math.max(g.start,f.start),M=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,T=M;x<T;x+=3){const v=x,b=x+1,w=x+2;o=Xr(this,p,t,i,l,h,d,v,b,w),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=g.materialIndex,e.push(o))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const y=g,M=g+1,x=g+2;o=Xr(this,r,t,i,l,h,d,y,M,x),o&&(o.faceIndex=Math.floor(g/3),e.push(o))}}}}function x0(n,t,e,i,o,s,r,a){let c;if(t.side===rn?c=i.intersectTriangle(r,s,o,!0,a):c=i.intersectTriangle(o,s,r,t.side===$i,a),c===null)return null;$r.copy(a),$r.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo($r);return l<e.near||l>e.far?null:{distance:l,point:$r.clone(),object:n}}function Xr(n,t,e,i,o,s,r,a,c,l){n.getVertexPosition(a,zr),n.getVertexPosition(c,Vr),n.getVertexPosition(l,Gr);const h=x0(n,t,e,i,zr,Vr,Gr,Lh);if(h){const d=new P;wn.getBarycoord(Lh,zr,Vr,Gr,d),o&&(h.uv=wn.getInterpolatedAttribute(o,a,c,l,d,new Ot)),s&&(h.uv1=wn.getInterpolatedAttribute(s,a,c,l,d,new Ot)),r&&(h.normal=wn.getInterpolatedAttribute(r,a,c,l,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new P,materialIndex:0};wn.getNormal(zr,Vr,Gr,u.normal),h.face=u,h.barycoord=d}return h}class Mr extends On{constructor(t=1,e=1,i=1,o=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:o,heightSegments:s,depthSegments:r};const a=this;o=Math.floor(o),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],h=[],d=[];let u=0,f=0;m("z","y","x",-1,-1,i,e,t,r,s,0),m("z","y","x",1,-1,i,e,-t,r,s,1),m("x","z","y",1,1,t,i,e,o,r,2),m("x","z","y",1,-1,t,i,-e,o,r,3),m("x","y","z",1,-1,t,e,i,o,s,4),m("x","y","z",-1,-1,t,e,-i,o,s,5),this.setIndex(c),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(d,2));function m(_,g,p,y,M,x,T,v,b,w,S){const C=x/b,R=T/w,L=x/2,B=T/2,k=v/2,G=b+1,U=w+1;let K=0,W=0;const st=new P;for(let rt=0;rt<U;rt++){const At=rt*R-B;for(let kt=0;kt<G;kt++){const le=kt*C-L;st[_]=le*y,st[g]=At*M,st[p]=k,l.push(st.x,st.y,st.z),st[_]=0,st[g]=0,st[p]=v>0?1:-1,h.push(st.x,st.y,st.z),d.push(kt/b),d.push(1-rt/w),K+=1}}for(let rt=0;rt<w;rt++)for(let At=0;At<b;At++){const kt=u+At+G*rt,le=u+At+G*(rt+1),ge=u+(At+1)+G*(rt+1),Jt=u+(At+1)+G*rt;c.push(kt,le,Jt),c.push(le,ge,Jt),W+=6}a.addGroup(f,W,S),f+=W,u+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ms(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const o=n[e][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=o.clone():Array.isArray(o)?t[e][i]=o.slice():t[e][i]=o}}return t}function sn(n){const t={};for(let e=0;e<n.length;e++){const i=Ms(n[e]);for(const o in i)t[o]=i[o]}return t}function v0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Of(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const M0={clone:Ms,merge:sn};var S0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,b0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends Ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=S0,this.fragmentShader=b0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=v0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const o in this.uniforms){const r=this.uniforms[o].value;r&&r.isTexture?e.uniforms[o]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[o]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[o]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[o]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[o]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[o]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[o]={type:"m4",value:r.toArray()}:e.uniforms[o]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class If extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ii=new P,Nh=new Ot,Dh=new Ot;class Tn extends If{constructor(t=50,e=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ql*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(da*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ql*2*Math.atan(Math.tan(da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z)}getViewSize(t,e){return this.getViewBounds(t,Nh,Dh),e.subVectors(Dh,Nh)}setViewOffset(t,e,i,o,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(da*.5*this.fov)/this.zoom,i=2*e,o=this.aspect*i,s=-.5*o;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*o/c,e-=r.offsetY*i/l,o*=r.width/c,i*=r.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+o,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Go=-90,Wo=1;class E0 extends Ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Tn(Go,Wo,t,e);o.layers=this.layers,this.add(o);const s=new Tn(Go,Wo,t,e);s.layers=this.layers,this.add(s);const r=new Tn(Go,Wo,t,e);r.layers=this.layers,this.add(r);const a=new Tn(Go,Wo,t,e);a.layers=this.layers,this.add(a);const c=new Tn(Go,Wo,t,e);c.layers=this.layers,this.add(c);const l=new Tn(Go,Wo,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,o,s,r,a,c]=e;for(const l of e)this.remove(l);if(t===ti)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,o),t.render(e,s),t.setRenderTarget(i,1,o),t.render(e,r),t.setRenderTarget(i,2,o),t.render(e,a),t.setRenderTarget(i,3,o),t.render(e,c),t.setRenderTarget(i,4,o),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,o),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Pf extends tn{constructor(t=[],e=ys,i,o,s,r,a,c,l,h){super(t,e,i,o,s,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class C0 extends So{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},o=[i,i,i,i,i,i];this.texture=new Pf(o),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Mr(5,5,5),s=new Xi({name:"CubemapFromEquirect",uniforms:Ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:ki});s.uniforms.tEquirect.value=e;const r=new Qe(o,s),a=e.minFilter;return e.minFilter===mo&&(e.minFilter=Jn),new E0(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,i=!0,o=!0){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,o);t.setRenderTarget(s)}}class qr extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A0={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let o=null,s=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,i),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;l.inputState.pinching&&u>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(o=e.getPose(t.targetRaySpace,i),o===null&&s!==null&&(o=s),o!==null&&(a.matrix.fromArray(o.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,o.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(o.linearVelocity)):a.hasLinearVelocity=!1,o.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(o.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(A0)))}return a!==null&&(a.visible=o!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new qr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Cu{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=i}clone(){return new Cu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class T0 extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class w0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xl,this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let o=0,s=this.stride;o<s;o++)this.array[t+o]=e.array[i+o];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new P;class Ca{constructor(t,e,i,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Zn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Zn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),o=fe(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=o,this}setXYZW(t,e,i,o,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),o=fe(o,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=o,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[o+s])}return new Rn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ca(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[o+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class jl extends Ji{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let $o;const Us=new P,Xo=new P,qo=new P,jo=new Ot,Bs=new Ot,Lf=new me,jr=new P,ks=new P,Yr=new P,Fh=new Ot,Uc=new Ot,Hh=new Ot;class Uh extends Ve{constructor(t=new jl){if(super(),this.isSprite=!0,this.type="Sprite",$o===void 0){$o=new On;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new w0(e,5);$o.setIndex([0,1,2,0,2,3]),$o.setAttribute("position",new Ca(i,3,0,!1)),$o.setAttribute("uv",new Ca(i,2,3,!1))}this.geometry=$o,this.material=t,this.center=new Ot(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xo.setFromMatrixScale(this.matrixWorld),Lf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xo.multiplyScalar(-qo.z);const i=this.material.rotation;let o,s;i!==0&&(s=Math.cos(i),o=Math.sin(i));const r=this.center;Kr(jr.set(-.5,-.5,0),qo,r,Xo,o,s),Kr(ks.set(.5,-.5,0),qo,r,Xo,o,s),Kr(Yr.set(.5,.5,0),qo,r,Xo,o,s),Fh.set(0,0),Uc.set(1,0),Hh.set(1,1);let a=t.ray.intersectTriangle(jr,ks,Yr,!1,Us);if(a===null&&(Kr(ks.set(-.5,.5,0),qo,r,Xo,o,s),Uc.set(0,1),a=t.ray.intersectTriangle(jr,Yr,ks,!1,Us),a===null))return;const c=t.ray.origin.distanceTo(Us);c<t.near||c>t.far||e.push({distance:c,point:Us.clone(),uv:wn.getInterpolation(Us,jr,ks,Yr,Fh,Uc,Hh,new Ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Kr(n,t,e,i,o,s){jo.subVectors(n,e).addScalar(.5).multiply(i),o!==void 0?(Bs.x=s*jo.x-o*jo.y,Bs.y=o*jo.x+s*jo.y):Bs.copy(jo),n.copy(t),n.x+=Bs.x,n.y+=Bs.y,n.applyMatrix4(Lf)}class R0 extends tn{constructor(t=null,e=1,i=1,o,s,r,a,c,l=yn,h=yn,d,u){super(null,r,a,c,l,h,o,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bh extends Rn{constructor(t,e,i,o=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Yo=new me,kh=new me,Zr=[],zh=new wo,O0=new me,zs=new Qe,Vs=new ws;class Za extends Qe{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Bh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<i;o++)this.setMatrixAt(o,O0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new wo),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Yo),zh.copy(t.boundingBox).applyMatrix4(Yo),this.boundingBox.union(zh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ws),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Yo),Vs.copy(t.boundingSphere).applyMatrix4(Yo),this.boundingSphere.union(Vs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,o=this.morphTexture.source.data.data,s=i.length+1,r=t*s+1;for(let a=0;a<i.length;a++)i[a]=o[r+a]}raycast(t,e){const i=this.matrixWorld,o=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vs.copy(this.boundingSphere),Vs.applyMatrix4(i),t.ray.intersectsSphere(Vs)!==!1))for(let s=0;s<o;s++){this.getMatrixAt(s,Yo),kh.multiplyMatrices(i,Yo),zs.matrixWorld=kh,zs.raycast(t,Zr);for(let r=0,a=Zr.length;r<a;r++){const c=Zr[r];c.instanceId=s,c.object=this,e.push(c)}Zr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Bh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,o=i.length+1;this.morphTexture===null&&(this.morphTexture=new R0(new Float32Array(o*this.count),o,this.count,yu,Qn));const s=this.morphTexture.source.data.data;let r=0;for(let l=0;l<i.length;l++)r+=i[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=o*t;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Bc=new P,I0=new P,P0=new Wt;class fi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,o){return this.normal.set(t,e,i),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const o=Bc.subVectors(i,e).cross(I0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Bc),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/o;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||P0.getNormalMatrix(t),o=this.coplanarPoint(Bc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const so=new ws,L0=new Ot(.5,.5),Jr=new P;class Au{constructor(t=new fi,e=new fi,i=new fi,o=new fi,s=new fi,r=new fi){this.planes=[t,e,i,o,s,r]}set(t,e,i,o,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(o),a[4].copy(s),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ti,i=!1){const o=this.planes,s=t.elements,r=s[0],a=s[1],c=s[2],l=s[3],h=s[4],d=s[5],u=s[6],f=s[7],m=s[8],_=s[9],g=s[10],p=s[11],y=s[12],M=s[13],x=s[14],T=s[15];if(o[0].setComponents(l-r,f-h,p-m,T-y).normalize(),o[1].setComponents(l+r,f+h,p+m,T+y).normalize(),o[2].setComponents(l+a,f+d,p+_,T+M).normalize(),o[3].setComponents(l-a,f-d,p-_,T-M).normalize(),i)o[4].setComponents(c,u,g,x).normalize(),o[5].setComponents(l-c,f-u,p-g,T-x).normalize();else if(o[4].setComponents(l-c,f-u,p-g,T-x).normalize(),e===ti)o[5].setComponents(l+c,f+u,p+g,T+x).normalize();else if(e===ba)o[5].setComponents(c,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),so.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),so.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(so)}intersectsSprite(t){so.center.set(0,0,0);const e=L0.distanceTo(t.center);return so.radius=.7071067811865476+e,so.applyMatrix4(t.matrixWorld),this.intersectsSphere(so)}intersectsSphere(t){const e=this.planes,i=t.center,o=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<o)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const o=e[i];if(Jr.x=o.normal.x>0?t.max.x:t.min.x,Jr.y=o.normal.y>0?t.max.y:t.min.y,Jr.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nf extends Ji{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Aa=new P,Ta=new P,Vh=new me,Gs=new Ka,Qr=new ws,kc=new P,Gh=new P;class N0 extends Ve{constructor(t=new On,e=new Nf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let o=1,s=e.count;o<s;o++)Aa.fromBufferAttribute(e,o-1),Ta.fromBufferAttribute(e,o),i[o]=i[o-1],i[o]+=Aa.distanceTo(Ta);t.setAttribute("lineDistance",new Ye(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,o=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(o),Qr.radius+=s,t.ray.intersectsSphere(Qr)===!1)return;Vh.copy(o).invert(),Gs.copy(t.ray).applyMatrix4(Vh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let _=f,g=m-1;_<g;_+=l){const p=h.getX(_),y=h.getX(_+1),M=ta(this,t,Gs,c,p,y,_);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(f),p=ta(this,t,Gs,c,_,g,m-1);p&&e.push(p)}}else{const f=Math.max(0,r.start),m=Math.min(u.count,r.start+r.count);for(let _=f,g=m-1;_<g;_+=l){const p=ta(this,t,Gs,c,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=ta(this,t,Gs,c,m-1,f,m-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=o.length;s<r;s++){const a=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ta(n,t,e,i,o,s,r){const a=n.geometry.attributes.position;if(Aa.fromBufferAttribute(a,o),Ta.fromBufferAttribute(a,s),e.distanceSqToSegment(Aa,Ta,kc,Gh)>i)return;kc.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(kc);if(!(l<t.near||l>t.far))return{distance:l,point:Gh.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const Wh=new P,$h=new P;class D0 extends N0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let o=0,s=e.count;o<s;o+=2)Wh.fromBufferAttribute(e,o),$h.fromBufferAttribute(e,o+1),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+Wh.distanceTo($h);t.setAttribute("lineDistance",new Ye(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Df extends tn{constructor(t,e,i,o,s,r,a,c,l){super(t,e,i,o,s,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ff extends tn{constructor(t,e,i=Mo,o,s,r,a=yn,c=yn,l,h=ur,d=1){if(h!==ur&&h!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,o,s,r,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Hf extends tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ja extends On{constructor(t=1,e=1,i=1,o=32,s=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:o,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:c};const l=this;o=Math.floor(o),s=Math.floor(s);const h=[],d=[],u=[],f=[];let m=0;const _=[],g=i/2;let p=0;y(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ye(d,3)),this.setAttribute("normal",new Ye(u,3)),this.setAttribute("uv",new Ye(f,2));function y(){const x=new P,T=new P;let v=0;const b=(e-t)/i;for(let w=0;w<=s;w++){const S=[],C=w/s,R=C*(e-t)+t;for(let L=0;L<=o;L++){const B=L/o,k=B*c+a,G=Math.sin(k),U=Math.cos(k);T.x=R*G,T.y=-C*i+g,T.z=R*U,d.push(T.x,T.y,T.z),x.set(G,b,U).normalize(),u.push(x.x,x.y,x.z),f.push(B,1-C),S.push(m++)}_.push(S)}for(let w=0;w<o;w++)for(let S=0;S<s;S++){const C=_[S][w],R=_[S+1][w],L=_[S+1][w+1],B=_[S][w+1];(t>0||S!==0)&&(h.push(C,R,B),v+=3),(e>0||S!==s-1)&&(h.push(R,L,B),v+=3)}l.addGroup(p,v,0),p+=v}function M(x){const T=m,v=new Ot,b=new P;let w=0;const S=x===!0?t:e,C=x===!0?1:-1;for(let L=1;L<=o;L++)d.push(0,g*C,0),u.push(0,C,0),f.push(.5,.5),m++;const R=m;for(let L=0;L<=o;L++){const k=L/o*c+a,G=Math.cos(k),U=Math.sin(k);b.x=S*U,b.y=g*C,b.z=S*G,d.push(b.x,b.y,b.z),u.push(0,C,0),v.x=G*.5+.5,v.y=U*.5*C+.5,f.push(v.x,v.y),m++}for(let L=0;L<o;L++){const B=T+L,k=R+L;x===!0?h.push(k,k+1,B):h.push(k+1,k,B),w+=3}l.addGroup(p,w,x===!0?1:2),p+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ja(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qa extends On{constructor(t=1,e=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:o};const s=t/2,r=e/2,a=Math.floor(i),c=Math.floor(o),l=a+1,h=c+1,d=t/a,u=e/c,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const y=p*u-r;for(let M=0;M<l;M++){const x=M*d-s;m.push(x,-y,0),_.push(0,0,1),g.push(M/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const M=y+l*p,x=y+l*(p+1),T=y+1+l*(p+1),v=y+1+l*p;f.push(M,x,v),f.push(x,T,v)}this.setIndex(f),this.setAttribute("position",new Ye(m,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qa(t.width,t.height,t.widthSegments,t.heightSegments)}}class Gi extends On{constructor(t=1,e=32,i=16,o=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:o,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(r+a,Math.PI);let l=0;const h=[],d=new P,u=new P,f=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){const y=[],M=p/i;let x=0;p===0&&r===0?x=.5/e:p===i&&c===Math.PI&&(x=-.5/e);for(let T=0;T<=e;T++){const v=T/e;d.x=-t*Math.cos(o+v*s)*Math.sin(r+M*a),d.y=t*Math.cos(r+M*a),d.z=t*Math.sin(o+v*s)*Math.sin(r+M*a),m.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(v+x,1-M),y.push(l++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){const M=h[p][y+1],x=h[p][y],T=h[p+1][y],v=h[p+1][y+1];(p!==0||r>0)&&f.push(M,x,v),(p!==i-1||c<Math.PI)&&f.push(x,T,v)}this.setIndex(f),this.setAttribute("position",new Ye(m,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Uf extends Ji{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Lt(16777215),this.specular=new Lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Su,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bf extends Ji{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Su,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class F0 extends Ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class H0 extends Ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class kf extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class U0 extends kf{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const zc=new me,Xh=new P,qh=new P;class B0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Au,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Xh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xh),qh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qh),e.updateMatrixWorld(),zc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class zf extends If{constructor(t=-1,e=1,i=1,o=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=o,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,o,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let s=i-t,r=i+t,a=o+e,c=o-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class k0 extends B0{constructor(){super(new zf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vf extends kf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new k0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class z0 extends Tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const jh=new me;class V0{constructor(t,e,i=0,o=1/0){this.ray=new Ka(t,e),this.near=i,this.far=o,this.camera=null,this.layers=new Eu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return jh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jh),this}intersectObject(t,e=!0,i=[]){return Yl(t,this,i,e),i.sort(Yh),i}intersectObjects(t,e=!0,i=[]){for(let o=0,s=t.length;o<s;o++)Yl(t[o],this,i,e);return i.sort(Yh),i}}function Yh(n,t){return n.distance-t.distance}function Yl(n,t,e,i){let o=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(o=!1),o===!0&&i===!0){const s=n.children;for(let r=0,a=s.length;r<a;r++)Yl(s[r],t,e,!0)}}class Kh{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Gf extends D0{constructor(t=10,e=10,i=4473924,o=8947848){i=new Lt(i),o=new Lt(o);const s=e/2,r=t/e,a=t/2,c=[],l=[];for(let u=0,f=0,m=-a;u<=e;u++,m+=r){c.push(-a,0,m,a,0,m),c.push(m,0,-a,m,0,a);const _=u===s?i:o;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const h=new On;h.setAttribute("position",new Ye(c,3)),h.setAttribute("color",new Ye(l,3));const d=new Nf({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class G0 extends To{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Zh(n,t,e,i){const o=W0(i);switch(e){case Mf:return n*t;case yu:return n*t/o.components*o.byteLength;case xu:return n*t/o.components*o.byteLength;case bf:return n*t*2/o.components*o.byteLength;case vu:return n*t*2/o.components*o.byteLength;case Sf:return n*t*3/o.components*o.byteLength;case zn:return n*t*4/o.components*o.byteLength;case Mu:return n*t*4/o.components*o.byteLength;case ca:case la:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ua:case ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xl:case Ml:return Math.max(n,16)*Math.max(t,8)/4;case yl:case vl:return Math.max(n,8)*Math.max(t,8)/2;case Sl:case bl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case El:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case wl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Il:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Fl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Hl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Bl:case kl:case zl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Vl:case Gl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Wl:case $l:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function W0(n){switch(n){case ni:case _f:return{byteLength:1,components:1};case cr:case yf:case vr:return{byteLength:2,components:1};case gu:case _u:return{byteLength:2,components:4};case Mo:case mu:case Qn:return{byteLength:4,components:1};case xf:case vf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pu);function Wf(){let n=null,t=!1,e=null,i=null;function o(s,r){e(s,r),i=n.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(o),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function $0(n){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,d=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const h=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){const m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){const _=d[f];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function o(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:o,remove:s,update:r}}var X0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,q0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,j0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Q0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,e_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,n_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,i_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,s_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,r_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,m_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,g_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,__=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,y_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,M_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S_="gl_FragColor = linearToOutputTexel( gl_FragColor );",b_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,E_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,C_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,A_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,T_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,R_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,N_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,U_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,B_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,W_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,X_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,q_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,j_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Q_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ty=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ey=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ny=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ry=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ay=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ly=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,uy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,py=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,my=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_y=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,My=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,by=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ey=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ay=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ty=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ry=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Oy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Iy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Py=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ly=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ny=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,By=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ky=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $y=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ky=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ox=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ax=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ux=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,px=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_x=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ex=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:X0,alphahash_pars_fragment:q0,alphamap_fragment:j0,alphamap_pars_fragment:Y0,alphatest_fragment:K0,alphatest_pars_fragment:Z0,aomap_fragment:J0,aomap_pars_fragment:Q0,batching_pars_vertex:t_,batching_vertex:e_,begin_vertex:n_,beginnormal_vertex:i_,bsdfs:o_,iridescence_fragment:s_,bumpmap_pars_fragment:r_,clipping_planes_fragment:a_,clipping_planes_pars_fragment:c_,clipping_planes_pars_vertex:l_,clipping_planes_vertex:u_,color_fragment:h_,color_pars_fragment:d_,color_pars_vertex:f_,color_vertex:p_,common:m_,cube_uv_reflection_fragment:g_,defaultnormal_vertex:__,displacementmap_pars_vertex:y_,displacementmap_vertex:x_,emissivemap_fragment:v_,emissivemap_pars_fragment:M_,colorspace_fragment:S_,colorspace_pars_fragment:b_,envmap_fragment:E_,envmap_common_pars_fragment:C_,envmap_pars_fragment:A_,envmap_pars_vertex:T_,envmap_physical_pars_fragment:U_,envmap_vertex:w_,fog_vertex:R_,fog_pars_vertex:O_,fog_fragment:I_,fog_pars_fragment:P_,gradientmap_pars_fragment:L_,lightmap_pars_fragment:N_,lights_lambert_fragment:D_,lights_lambert_pars_fragment:F_,lights_pars_begin:H_,lights_toon_fragment:B_,lights_toon_pars_fragment:k_,lights_phong_fragment:z_,lights_phong_pars_fragment:V_,lights_physical_fragment:G_,lights_physical_pars_fragment:W_,lights_fragment_begin:$_,lights_fragment_maps:X_,lights_fragment_end:q_,logdepthbuf_fragment:j_,logdepthbuf_pars_fragment:Y_,logdepthbuf_pars_vertex:K_,logdepthbuf_vertex:Z_,map_fragment:J_,map_pars_fragment:Q_,map_particle_fragment:ty,map_particle_pars_fragment:ey,metalnessmap_fragment:ny,metalnessmap_pars_fragment:iy,morphinstance_vertex:oy,morphcolor_vertex:sy,morphnormal_vertex:ry,morphtarget_pars_vertex:ay,morphtarget_vertex:cy,normal_fragment_begin:ly,normal_fragment_maps:uy,normal_pars_fragment:hy,normal_pars_vertex:dy,normal_vertex:fy,normalmap_pars_fragment:py,clearcoat_normal_fragment_begin:my,clearcoat_normal_fragment_maps:gy,clearcoat_pars_fragment:_y,iridescence_pars_fragment:yy,opaque_fragment:xy,packing:vy,premultiplied_alpha_fragment:My,project_vertex:Sy,dithering_fragment:by,dithering_pars_fragment:Ey,roughnessmap_fragment:Cy,roughnessmap_pars_fragment:Ay,shadowmap_pars_fragment:Ty,shadowmap_pars_vertex:wy,shadowmap_vertex:Ry,shadowmask_pars_fragment:Oy,skinbase_vertex:Iy,skinning_pars_vertex:Py,skinning_vertex:Ly,skinnormal_vertex:Ny,specularmap_fragment:Dy,specularmap_pars_fragment:Fy,tonemapping_fragment:Hy,tonemapping_pars_fragment:Uy,transmission_fragment:By,transmission_pars_fragment:ky,uv_pars_fragment:zy,uv_pars_vertex:Vy,uv_vertex:Gy,worldpos_vertex:Wy,background_vert:$y,background_frag:Xy,backgroundCube_vert:qy,backgroundCube_frag:jy,cube_vert:Yy,cube_frag:Ky,depth_vert:Zy,depth_frag:Jy,distanceRGBA_vert:Qy,distanceRGBA_frag:tx,equirect_vert:ex,equirect_frag:nx,linedashed_vert:ix,linedashed_frag:ox,meshbasic_vert:sx,meshbasic_frag:rx,meshlambert_vert:ax,meshlambert_frag:cx,meshmatcap_vert:lx,meshmatcap_frag:ux,meshnormal_vert:hx,meshnormal_frag:dx,meshphong_vert:fx,meshphong_frag:px,meshphysical_vert:mx,meshphysical_frag:gx,meshtoon_vert:_x,meshtoon_frag:yx,points_vert:xx,points_frag:vx,shadow_vert:Mx,shadow_frag:Sx,sprite_vert:bx,sprite_frag:Ex},lt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Kn={basic:{uniforms:sn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:sn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:sn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:sn([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:sn([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:sn([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:sn([lt.points,lt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:sn([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:sn([lt.common,lt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:sn([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:sn([lt.sprite,lt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:sn([lt.common,lt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:sn([lt.lights,lt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Kn.physical={uniforms:sn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const ea={r:0,b:0,g:0},ro=new Xn,Cx=new me;function Ax(n,t,e,i,o,s,r){const a=new Lt(0);let c=s===!0?0:1,l,h,d=null,u=0,f=null;function m(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1;const T=m(M);T===null?p(a,c):T&&T.isColor&&(p(T,1),x=!0);const v=n.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,x){const T=m(x);T&&(T.isCubeTexture||T.mapping===Ya)?(h===void 0&&(h=new Qe(new Mr(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:Ms(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(v,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(h)),ro.copy(x.backgroundRotation),ro.x*=-1,ro.y*=-1,ro.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ro.y*=-1,ro.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cx.makeRotationFromEuler(ro)),h.material.toneMapped=oe.getTransfer(T.colorSpace)!==de,(d!==T||u!==T.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=T,u=T.version,f=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Qe(new Qa(2,2),new Xi({name:"BackgroundMaterial",uniforms:Ms(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=oe.getTransfer(T.colorSpace)!==de,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||u!==T.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=T,u=T.version,f=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,x){M.getRGB(ea,Of(n)),i.buffers.color.setClear(ea.r,ea.g,ea.b,x,r)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:_,addToRenderList:g,dispose:y}}function Tx(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},o=u(null);let s=o,r=!1;function a(C,R,L,B,k){let G=!1;const U=d(B,L,R);s!==U&&(s=U,l(s.object)),G=f(C,B,L,k),G&&m(C,B,L,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(G||r)&&(r=!1,x(C,R,L,B),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function h(C){return n.deleteVertexArray(C)}function d(C,R,L){const B=L.wireframe===!0;let k=i[C.id];k===void 0&&(k={},i[C.id]=k);let G=k[R.id];G===void 0&&(G={},k[R.id]=G);let U=G[B];return U===void 0&&(U=u(c()),G[B]=U),U}function u(C){const R=[],L=[],B=[];for(let k=0;k<e;k++)R[k]=0,L[k]=0,B[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:B,object:C,attributes:{},index:null}}function f(C,R,L,B){const k=s.attributes,G=R.attributes;let U=0;const K=L.getAttributes();for(const W in K)if(K[W].location>=0){const rt=k[W];let At=G[W];if(At===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(At=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(At=C.instanceColor)),rt===void 0||rt.attribute!==At||At&&rt.data!==At.data)return!0;U++}return s.attributesNum!==U||s.index!==B}function m(C,R,L,B){const k={},G=R.attributes;let U=0;const K=L.getAttributes();for(const W in K)if(K[W].location>=0){let rt=G[W];rt===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(rt=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(rt=C.instanceColor));const At={};At.attribute=rt,rt&&rt.data&&(At.data=rt.data),k[W]=At,U++}s.attributes=k,s.attributesNum=U,s.index=B}function _(){const C=s.newAttributes;for(let R=0,L=C.length;R<L;R++)C[R]=0}function g(C){p(C,0)}function p(C,R){const L=s.newAttributes,B=s.enabledAttributes,k=s.attributeDivisors;L[C]=1,B[C]===0&&(n.enableVertexAttribArray(C),B[C]=1),k[C]!==R&&(n.vertexAttribDivisor(C,R),k[C]=R)}function y(){const C=s.newAttributes,R=s.enabledAttributes;for(let L=0,B=R.length;L<B;L++)R[L]!==C[L]&&(n.disableVertexAttribArray(L),R[L]=0)}function M(C,R,L,B,k,G,U){U===!0?n.vertexAttribIPointer(C,R,L,k,G):n.vertexAttribPointer(C,R,L,B,k,G)}function x(C,R,L,B){_();const k=B.attributes,G=L.getAttributes(),U=R.defaultAttributeValues;for(const K in G){const W=G[K];if(W.location>=0){let st=k[K];if(st===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(st=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(st=C.instanceColor)),st!==void 0){const rt=st.normalized,At=st.itemSize,kt=t.get(st);if(kt===void 0)continue;const le=kt.buffer,ge=kt.type,Jt=kt.bytesPerElement,X=ge===n.INT||ge===n.UNSIGNED_INT||st.gpuType===mu;if(st.isInterleavedBufferAttribute){const Q=st.data,_t=Q.stride,Ut=st.offset;if(Q.isInstancedInterleavedBuffer){for(let wt=0;wt<W.locationSize;wt++)p(W.location+wt,Q.meshPerAttribute);C.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let wt=0;wt<W.locationSize;wt++)g(W.location+wt);n.bindBuffer(n.ARRAY_BUFFER,le);for(let wt=0;wt<W.locationSize;wt++)M(W.location+wt,At/W.locationSize,ge,rt,_t*Jt,(Ut+At/W.locationSize*wt)*Jt,X)}else{if(st.isInstancedBufferAttribute){for(let Q=0;Q<W.locationSize;Q++)p(W.location+Q,st.meshPerAttribute);C.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Q=0;Q<W.locationSize;Q++)g(W.location+Q);n.bindBuffer(n.ARRAY_BUFFER,le);for(let Q=0;Q<W.locationSize;Q++)M(W.location+Q,At/W.locationSize,ge,rt,At*Jt,At/W.locationSize*Q*Jt,X)}}else if(U!==void 0){const rt=U[K];if(rt!==void 0)switch(rt.length){case 2:n.vertexAttrib2fv(W.location,rt);break;case 3:n.vertexAttrib3fv(W.location,rt);break;case 4:n.vertexAttrib4fv(W.location,rt);break;default:n.vertexAttrib1fv(W.location,rt)}}}}y()}function T(){w();for(const C in i){const R=i[C];for(const L in R){const B=R[L];for(const k in B)h(B[k].object),delete B[k];delete R[L]}delete i[C]}}function v(C){if(i[C.id]===void 0)return;const R=i[C.id];for(const L in R){const B=R[L];for(const k in B)h(B[k].object),delete B[k];delete R[L]}delete i[C.id]}function b(C){for(const R in i){const L=i[R];if(L[C.id]===void 0)continue;const B=L[C.id];for(const k in B)h(B[k].object),delete B[k];delete L[C.id]}}function w(){S(),r=!0,s!==o&&(s=o,l(s.object))}function S(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:w,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:v,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function wx(n,t,e){let i;function o(l){i=l}function s(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function r(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),e.update(h,i,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let f=0;for(let m=0;m<d;m++)f+=h[m];e.update(f,i,1)}function c(l,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)r(l[m],h[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,u,0,d);let m=0;for(let _=0;_<d;_++)m+=h[_]*u[_];e.update(m,i,1)}}this.setMode=o,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Rx(n,t,e,i){let o;function s(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");o=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function r(b){return!(b!==zn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const w=b===vr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==ni&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Qn&&!w)}function c(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,v=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:T,maxSamples:v}}function Ox(n){const t=this;let e=null,i=0,o=!1,s=!1;const r=new fi,a=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||o;return o=u,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!o||m===null||m.length===0||s&&!g)s?h(null):l();else{const y=s?0:i,M=y*4;let x=p.clippingState||null;c.value=x,x=h(m,u,M,f);for(let T=0;T!==M;++T)x[T]=e[T];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,m){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,x=f;M!==_;++M,x+=4)r.copy(d[M]).applyMatrix4(y,a),r.normal.toArray(g,x),g[x+3]=r.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Ix(n){let t=new WeakMap;function e(r,a){return a===pl?r.mapping=ys:a===ml&&(r.mapping=xs),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===pl||a===ml)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new C0(c.height);return l.fromEquirectangularTexture(n,r),t.set(r,l),r.addEventListener("dispose",o),e(l.texture,r.mapping)}else return null}}return r}function o(r){const a=r.target;a.removeEventListener("dispose",o);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const is=4,Jh=[.125,.215,.35,.446,.526,.582],uo=20,Vc=new zf,Qh=new Lt;let Gc=null,Wc=0,$c=0,Xc=!1;const co=(1+Math.sqrt(5))/2,Ko=1/co,td=[new P(-co,Ko,0),new P(co,Ko,0),new P(-Ko,0,co),new P(Ko,0,co),new P(0,co,-Ko),new P(0,co,Ko),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Px=new P;class ed{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,o=100,s={}){const{size:r=256,position:a=Px}=s;Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,o,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Gc,Wc,$c),this._renderer.xr.enabled=Xc,t.scissorTest=!1,na(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ys||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:vr,format:zn,colorSpace:vs,depthBuffer:!1},o=nd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nd(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lx(s)),this._blurMaterial=Nx(s,t,e)}return o}_compileMaterial(t){const e=new Qe(this._lodPlanes[0],t);this._renderer.compile(e,Vc)}_sceneToCubeUV(t,e,i,o,s){const c=new Tn(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Qh),d.toneMapping=zi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(o),d.clearDepth(),d.setRenderTarget(null));const _=new _o({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new Qe(new Mr,_);let p=!1;const y=t.background;y?y.isColor&&(_.color.copy(y),t.background=null,p=!0):(_.color.copy(Qh),p=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[M],s.y,s.z)):x===1?(c.up.set(0,0,l[M]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[M],s.z)):(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[M]));const T=this._cubeSize;na(o,x*T,M>2?T:0,T,T),d.setRenderTarget(o),p&&d.render(g,c),d.render(t,c)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=u,t.background=y}_textureToCubeUV(t,e){const i=this._renderer,o=t.mapping===ys||t.mapping===xs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=od()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=id());const s=o?this._cubemapMaterial:this._equirectMaterial,r=new Qe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;na(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,Vc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const o=this._lodPlanes.length;for(let s=1;s<o;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=td[(o-s-1)%td.length];this._blur(t,s-1,s,r,a)}e.autoClear=i}_blur(t,e,i,o,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,o,"latitudinal",s),this._halfBlur(r,t,i,i,o,"longitudinal",s)}_halfBlur(t,e,i,o,s,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Qe(this._lodPlanes[o],l),u=l.uniforms,f=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*uo-1),_=s/m,g=isFinite(s)?1+Math.floor(h*_):uo;g>uo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${uo}`);const p=[];let y=0;for(let b=0;b<uo;++b){const w=b/_,S=Math.exp(-w*w/2);p.push(S),b===0?y+=S:b<g&&(y+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/y;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:M}=this;u.dTheta.value=m,u.mipInt.value=M-i;const x=this._sizeLods[o],T=3*x*(o>M-is?o-M+is:0),v=4*(this._cubeSize-x);na(e,T,v,3*x,2*x),c.setRenderTarget(e),c.render(d,Vc)}}function Lx(n){const t=[],e=[],i=[];let o=n;const s=n-is+1+Jh.length;for(let r=0;r<s;r++){const a=Math.pow(2,o);e.push(a);let c=1/a;r>n-is?c=Jh[r-n+is-1]:r===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,_=3,g=2,p=1,y=new Float32Array(_*m*f),M=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let v=0;v<f;v++){const b=v%3*2/3-1,w=v>2?0:-1,S=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];y.set(S,_*m*v),M.set(u,g*m*v);const C=[v,v,v,v,v,v];x.set(C,p*m*v)}const T=new On;T.setAttribute("position",new Rn(y,_)),T.setAttribute("uv",new Rn(M,g)),T.setAttribute("faceIndex",new Rn(x,p)),t.push(T),o>is&&o--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function nd(n,t,e){const i=new So(n,t,e);return i.texture.mapping=Ya,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function na(n,t,e,i,o){n.viewport.set(t,e,i,o),n.scissor.set(t,e,i,o)}function Nx(n,t,e){const i=new Float32Array(uo),o=new P(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:uo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function id(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function od(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Tu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===pl||c===ml,h=c===ys||c===xs;if(l||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new ed(n)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&o(f)?(e===null&&(e=new ed(n)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function o(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function Fx(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let o;switch(i){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(i)}return t[i]=o,o}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const o=e(i);return o===null&&dr("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function Hx(n,t,e,i){const o={},s=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",r),delete o[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return o[u.id]===!0||(u.addEventListener("dispose",r),o[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)t.update(u[f],n.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,m=d.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let M=0,x=y.length;M<x;M+=3){const T=y[M+0],v=y[M+1],b=y[M+2];u.push(T,v,v,b,b,T)}}else if(m!==void 0){const y=m.array;_=m.version;for(let M=0,x=y.length/3-1;M<x;M+=3){const T=M+0,v=M+1,b=M+2;u.push(T,v,v,b,b,T)}}else return;const g=new(Cf(u)?Rf:wf)(u,1);g.version=_;const p=s.get(d);p&&t.remove(p),s.set(d,g)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Ux(n,t,e){let i;function o(u){i=u}let s,r;function a(u){s=u.type,r=u.bytesPerElement}function c(u,f){n.drawElements(i,f,s,u*r),e.update(f,i,1)}function l(u,f,m){m!==0&&(n.drawElementsInstanced(i,f,s,u*r,m),e.update(f,i,m))}function h(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,u,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,i,1)}function d(u,f,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)l(u[p]/r,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,s,u,0,_,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*_[y];e.update(p,i,1)}}this.setMode=o,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Bx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function o(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:i}}function kx(n,t,e){const i=new WeakMap,o=new Ie;function s(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;f===!0&&(M=1),m===!0&&(M=2),_===!0&&(M=3);let x=a.attributes.position.count*M,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const v=new Float32Array(x*T*4*d),b=new Af(v,x,T,d);b.type=Qn,b.needsUpdate=!0;const w=M*4;for(let C=0;C<d;C++){const R=g[C],L=p[C],B=y[C],k=x*T*4*C;for(let G=0;G<R.count;G++){const U=G*w;f===!0&&(o.fromBufferAttribute(R,G),v[k+U+0]=o.x,v[k+U+1]=o.y,v[k+U+2]=o.z,v[k+U+3]=0),m===!0&&(o.fromBufferAttribute(L,G),v[k+U+4]=o.x,v[k+U+5]=o.y,v[k+U+6]=o.z,v[k+U+7]=0),_===!0&&(o.fromBufferAttribute(B,G),v[k+U+8]=o.x,v[k+U+9]=o.y,v[k+U+10]=o.z,v[k+U+11]=B.itemSize===4?o.w:1)}}u={count:d,texture:b,size:new Ot(x,T)},i.set(a,u),a.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function zx(n,t,e,i){let o=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,d=t.get(c,h);if(o.get(d)!==l&&(t.update(d),o.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),o.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),o.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;o.get(u)!==l&&(u.update(),o.set(u,l))}return d}function r(){o=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:r}}const $f=new tn,sd=new Ff(1,1),Xf=new Af,qf=new c0,jf=new Pf,rd=[],ad=[],cd=new Float32Array(16),ld=new Float32Array(9),ud=new Float32Array(4);function Rs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const o=t*e;let s=rd[o];if(s===void 0&&(s=new Float32Array(o),rd[o]=s),t!==0){i.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(s,a)}return s}function Ge(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function We(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function tc(n,t){let e=ad[t];e===void 0&&(e=new Int32Array(t),ad[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Vx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Gx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2fv(this.addr,t),We(e,t)}}function Wx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;n.uniform3fv(this.addr,t),We(e,t)}}function $x(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4fv(this.addr,t),We(e,t)}}function Xx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,i))return;ud.set(i),n.uniformMatrix2fv(this.addr,!1,ud),We(e,i)}}function qx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,i))return;ld.set(i),n.uniformMatrix3fv(this.addr,!1,ld),We(e,i)}}function jx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,i))return;cd.set(i),n.uniformMatrix4fv(this.addr,!1,cd),We(e,i)}}function Yx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Kx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2iv(this.addr,t),We(e,t)}}function Zx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;n.uniform3iv(this.addr,t),We(e,t)}}function Jx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4iv(this.addr,t),We(e,t)}}function Qx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function tv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2uiv(this.addr,t),We(e,t)}}function ev(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;n.uniform3uiv(this.addr,t),We(e,t)}}function nv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4uiv(this.addr,t),We(e,t)}}function iv(n,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o);let s;this.type===n.SAMPLER_2D_SHADOW?(sd.compareFunction=Ef,s=sd):s=$f,e.setTexture2D(t||s,o)}function ov(n,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),e.setTexture3D(t||qf,o)}function sv(n,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),e.setTextureCube(t||jf,o)}function rv(n,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),e.setTexture2DArray(t||Xf,o)}function av(n){switch(n){case 5126:return Vx;case 35664:return Gx;case 35665:return Wx;case 35666:return $x;case 35674:return Xx;case 35675:return qx;case 35676:return jx;case 5124:case 35670:return Yx;case 35667:case 35671:return Kx;case 35668:case 35672:return Zx;case 35669:case 35673:return Jx;case 5125:return Qx;case 36294:return tv;case 36295:return ev;case 36296:return nv;case 35678:case 36198:case 36298:case 36306:case 35682:return iv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return rv}}function cv(n,t){n.uniform1fv(this.addr,t)}function lv(n,t){const e=Rs(t,this.size,2);n.uniform2fv(this.addr,e)}function uv(n,t){const e=Rs(t,this.size,3);n.uniform3fv(this.addr,e)}function hv(n,t){const e=Rs(t,this.size,4);n.uniform4fv(this.addr,e)}function dv(n,t){const e=Rs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function fv(n,t){const e=Rs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function pv(n,t){const e=Rs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function mv(n,t){n.uniform1iv(this.addr,t)}function gv(n,t){n.uniform2iv(this.addr,t)}function _v(n,t){n.uniform3iv(this.addr,t)}function yv(n,t){n.uniform4iv(this.addr,t)}function xv(n,t){n.uniform1uiv(this.addr,t)}function vv(n,t){n.uniform2uiv(this.addr,t)}function Mv(n,t){n.uniform3uiv(this.addr,t)}function Sv(n,t){n.uniform4uiv(this.addr,t)}function bv(n,t,e){const i=this.cache,o=t.length,s=tc(e,o);Ge(i,s)||(n.uniform1iv(this.addr,s),We(i,s));for(let r=0;r!==o;++r)e.setTexture2D(t[r]||$f,s[r])}function Ev(n,t,e){const i=this.cache,o=t.length,s=tc(e,o);Ge(i,s)||(n.uniform1iv(this.addr,s),We(i,s));for(let r=0;r!==o;++r)e.setTexture3D(t[r]||qf,s[r])}function Cv(n,t,e){const i=this.cache,o=t.length,s=tc(e,o);Ge(i,s)||(n.uniform1iv(this.addr,s),We(i,s));for(let r=0;r!==o;++r)e.setTextureCube(t[r]||jf,s[r])}function Av(n,t,e){const i=this.cache,o=t.length,s=tc(e,o);Ge(i,s)||(n.uniform1iv(this.addr,s),We(i,s));for(let r=0;r!==o;++r)e.setTexture2DArray(t[r]||Xf,s[r])}function Tv(n){switch(n){case 5126:return cv;case 35664:return lv;case 35665:return uv;case 35666:return hv;case 35674:return dv;case 35675:return fv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return gv;case 35668:case 35672:return _v;case 35669:case 35673:return yv;case 5125:return xv;case 36294:return vv;case 36295:return Mv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return bv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return Cv;case 36289:case 36303:case 36311:case 36292:return Av}}class wv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=av(e.type)}}class Rv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tv(e.type)}}class Ov{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const o=this.seq;for(let s=0,r=o.length;s!==r;++s){const a=o[s];a.setValue(t,e[a.id],i)}}}const qc=/(\w+)(\])?(\[|\.)?/g;function hd(n,t){n.seq.push(t),n.map[t.id]=t}function Iv(n,t,e){const i=n.name,o=i.length;for(qc.lastIndex=0;;){const s=qc.exec(i),r=qc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===o){hd(e,l===void 0?new wv(a,n,t):new Rv(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Ov(a),hd(e,d)),e=d}}}class fa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const s=t.getActiveUniform(e,o),r=t.getUniformLocation(e,s.name);Iv(s,r,this)}}setValue(t,e,i,o){const s=this.map[e];s!==void 0&&s.setValue(t,i,o)}setOptional(t,e,i){const o=e[i];o!==void 0&&this.setValue(t,i,o)}static upload(t,e,i,o){for(let s=0,r=e.length;s!==r;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,o)}}static seqWithValue(t,e){const i=[];for(let o=0,s=t.length;o!==s;++o){const r=t[o];r.id in e&&i.push(r)}return i}}function dd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Pv=37297;let Lv=0;function Nv(n,t){const e=n.split(`
`),i=[],o=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=o;r<s;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}const fd=new Wt;function Dv(n){oe._getMatrix(fd,oe.workingColorSpace,n);const t=`mat3( ${fd.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(n)){case Sa:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function pd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Nv(n.getShaderSource(t),a)}else return s}function Fv(n,t){const e=Dv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Hv(n,t){let e;switch(t){case Ng:e="Linear";break;case Dg:e="Reinhard";break;case Fg:e="Cineon";break;case Hg:e="ACESFilmic";break;case Bg:e="AgX";break;case kg:e="Neutral";break;case Ug:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ia=new P;function Uv(){oe.getLuminanceCoefficients(ia);const n=ia.x.toFixed(4),t=ia.y.toFixed(4),e=ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function kv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function zv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const s=n.getActiveAttrib(t,o),r=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[r]={type:s.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function Ys(n){return n!==""}function md(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kl(n){return n.replace(Vv,Wv)}const Gv=new Map;function Wv(n,t){let e=qt[t];if(e===void 0){const i=Gv.get(t);if(i!==void 0)e=qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Kl(e)}const $v=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _d(n){return n.replace($v,Xv)}function Xv(n,t,e,i){let o="";for(let s=parseInt(t);s<parseInt(e);s++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return o}function yd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function qv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===mf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===fg?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hi&&(t="SHADOWMAP_TYPE_VSM"),t}function jv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ys:case xs:t="ENVMAP_TYPE_CUBE";break;case Ya:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Yv(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===xs&&(t="ENVMAP_MODE_REFRACTION"),t}function Kv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ja:t="ENVMAP_BLENDING_MULTIPLY";break;case Pg:t="ENVMAP_BLENDING_MIX";break;case Lg:t="ENVMAP_BLENDING_ADD";break}return t}function Zv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Jv(n,t,e,i){const o=n.getContext(),s=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=qv(e),l=jv(e),h=Yv(e),d=Kv(e),u=Zv(e),f=Bv(e),m=kv(s),_=o.createProgram();let g,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ys).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ys).join(`
`),p.length>0&&(p+=`
`)):(g=[yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),p=[yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zi?"#define TONE_MAPPING":"",e.toneMapping!==zi?qt.tonemapping_pars_fragment:"",e.toneMapping!==zi?Hv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Fv("linearToOutputTexel",e.outputColorSpace),Uv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ys).join(`
`)),r=Kl(r),r=md(r,e),r=gd(r,e),a=Kl(a),a=md(a,e),a=gd(a,e),r=_d(r),a=_d(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+g+r,x=y+p+a,T=dd(o,o.VERTEX_SHADER,M),v=dd(o,o.FRAGMENT_SHADER,x);o.attachShader(_,T),o.attachShader(_,v),e.index0AttributeName!==void 0?o.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(_,0,"position"),o.linkProgram(_);function b(R){if(n.debug.checkShaderErrors){const L=o.getProgramInfoLog(_)||"",B=o.getShaderInfoLog(T)||"",k=o.getShaderInfoLog(v)||"",G=L.trim(),U=B.trim(),K=k.trim();let W=!0,st=!0;if(o.getProgramParameter(_,o.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,_,T,v);else{const rt=pd(o,T,"vertex"),At=pd(o,v,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(_,o.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+rt+`
`+At)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(U===""||K==="")&&(st=!1);st&&(R.diagnostics={runnable:W,programLog:G,vertexShader:{log:U,prefix:g},fragmentShader:{log:K,prefix:p}})}o.deleteShader(T),o.deleteShader(v),w=new fa(o,_),S=zv(o,_)}let w;this.getUniforms=function(){return w===void 0&&b(this),w};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(_,Pv)),C},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=v,this}let Qv=0;class t1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,o=this._getShaderStage(e),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(o)===!1&&(r.add(o),o.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new e1(t),e.set(t,i)),i}}class e1{constructor(t){this.id=Qv++,this.code=t,this.usedTimes=0}}function n1(n,t,e,i,o,s,r){const a=new Eu,c=new t1,l=new Set,h=[],d=o.logarithmicDepthBuffer,u=o.vertexTextures;let f=o.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,C,R,L,B){const k=L.fog,G=B.geometry,U=S.isMeshStandardMaterial?L.environment:null,K=(S.isMeshStandardMaterial?e:t).get(S.envMap||U),W=K&&K.mapping===Ya?K.image.height:null,st=m[S.type];S.precision!==null&&(f=o.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const rt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,At=rt!==void 0?rt.length:0;let kt=0;G.morphAttributes.position!==void 0&&(kt=1),G.morphAttributes.normal!==void 0&&(kt=2),G.morphAttributes.color!==void 0&&(kt=3);let le,ge,Jt,X;if(st){const ae=Kn[st];le=ae.vertexShader,ge=ae.fragmentShader}else le=S.vertexShader,ge=S.fragmentShader,c.update(S),Jt=c.getVertexShaderID(S),X=c.getFragmentShaderID(S);const Q=n.getRenderTarget(),_t=n.state.buffers.depth.getReversed(),Ut=B.isInstancedMesh===!0,wt=B.isBatchedMesh===!0,te=!!S.map,Ke=!!S.matcap,I=!!K,Ce=!!S.aoMap,zt=!!S.lightMap,Dt=!!S.bumpMap,vt=!!S.normalMap,Ae=!!S.displacementMap,Mt=!!S.emissiveMap,Xt=!!S.metalnessMap,$e=!!S.roughnessMap,Le=S.anisotropy>0,O=S.clearcoat>0,E=S.dispersion>0,H=S.iridescence>0,q=S.sheen>0,J=S.transmission>0,$=Le&&!!S.anisotropyMap,Tt=O&&!!S.clearcoatMap,at=O&&!!S.clearcoatNormalMap,St=O&&!!S.clearcoatRoughnessMap,bt=H&&!!S.iridescenceMap,it=H&&!!S.iridescenceThicknessMap,ft=q&&!!S.sheenColorMap,Nt=q&&!!S.sheenRoughnessMap,Et=!!S.specularMap,ht=!!S.specularColorMap,Gt=!!S.specularIntensityMap,N=J&&!!S.transmissionMap,ot=J&&!!S.thicknessMap,ct=!!S.gradientMap,mt=!!S.alphaMap,et=S.alphaTest>0,Z=!!S.alphaHash,xt=!!S.extensions;let Bt=zi;S.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Bt=n.toneMapping);const Se={shaderID:st,shaderType:S.type,shaderName:S.name,vertexShader:le,fragmentShader:ge,defines:S.defines,customVertexShaderID:Jt,customFragmentShaderID:X,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:wt,batchingColor:wt&&B._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&B.instanceColor!==null,instancingMorph:Ut&&B.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:vs,alphaToCoverage:!!S.alphaToCoverage,map:te,matcap:Ke,envMap:I,envMapMode:I&&K.mapping,envMapCubeUVHeight:W,aoMap:Ce,lightMap:zt,bumpMap:Dt,normalMap:vt,displacementMap:u&&Ae,emissiveMap:Mt,normalMapObjectSpace:vt&&S.normalMapType===Wg,normalMapTangentSpace:vt&&S.normalMapType===Su,metalnessMap:Xt,roughnessMap:$e,anisotropy:Le,anisotropyMap:$,clearcoat:O,clearcoatMap:Tt,clearcoatNormalMap:at,clearcoatRoughnessMap:St,dispersion:E,iridescence:H,iridescenceMap:bt,iridescenceThicknessMap:it,sheen:q,sheenColorMap:ft,sheenRoughnessMap:Nt,specularMap:Et,specularColorMap:ht,specularIntensityMap:Gt,transmission:J,transmissionMap:N,thicknessMap:ot,gradientMap:ct,opaque:S.transparent===!1&&S.blending===ls&&S.alphaToCoverage===!1,alphaMap:mt,alphaTest:et,alphaHash:Z,combine:S.combine,mapUv:te&&_(S.map.channel),aoMapUv:Ce&&_(S.aoMap.channel),lightMapUv:zt&&_(S.lightMap.channel),bumpMapUv:Dt&&_(S.bumpMap.channel),normalMapUv:vt&&_(S.normalMap.channel),displacementMapUv:Ae&&_(S.displacementMap.channel),emissiveMapUv:Mt&&_(S.emissiveMap.channel),metalnessMapUv:Xt&&_(S.metalnessMap.channel),roughnessMapUv:$e&&_(S.roughnessMap.channel),anisotropyMapUv:$&&_(S.anisotropyMap.channel),clearcoatMapUv:Tt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:at&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:it&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&_(S.sheenRoughnessMap.channel),specularMapUv:Et&&_(S.specularMap.channel),specularColorMapUv:ht&&_(S.specularColorMap.channel),specularIntensityMapUv:Gt&&_(S.specularIntensityMap.channel),transmissionMapUv:N&&_(S.transmissionMap.channel),thicknessMapUv:ot&&_(S.thicknessMap.channel),alphaMapUv:mt&&_(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(vt||Le),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!G.attributes.uv&&(te||mt),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:B.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:kt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Bt,decodeVideoTexture:te&&S.map.isVideoTexture===!0&&oe.getTransfer(S.map.colorSpace)===de,decodeVideoTextureEmissive:Mt&&S.emissiveMap.isVideoTexture===!0&&oe.getTransfer(S.emissiveMap.colorSpace)===de,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===pi,flipSided:S.side===rn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:xt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&S.extensions.multiDraw===!0||wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function p(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)C.push(R),C.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(y(C,S),M(C,S),C.push(n.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function y(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function M(S,C){a.disableAll(),C.supportsVertexTextures&&a.enable(0),C.instancing&&a.enable(1),C.instancingColor&&a.enable(2),C.instancingMorph&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),C.dispersion&&a.enable(20),C.batchingColor&&a.enable(21),C.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const C=m[S.type];let R;if(C){const L=Kn[C];R=M0.clone(L.uniforms)}else R=S.uniforms;return R}function T(S,C){let R;for(let L=0,B=h.length;L<B;L++){const k=h[L];if(k.cacheKey===C){R=k,++R.usedTimes;break}}return R===void 0&&(R=new Jv(n,C,S,s),h.push(R)),R}function v(S){if(--S.usedTimes===0){const C=h.indexOf(S);h[C]=h[h.length-1],h.pop(),S.destroy()}}function b(S){c.remove(S)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:v,releaseShaderCache:b,programs:h,dispose:w}}function i1(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function o(r,a,c){n.get(r)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:o,dispose:s}}function o1(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function xd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function vd(){const n=[];let t=0;const e=[],i=[],o=[];function s(){t=0,e.length=0,i.length=0,o.length=0}function r(d,u,f,m,_,g){let p=n[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:_,group:g},n[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=_,p.group=g),t++,p}function a(d,u,f,m,_,g){const p=r(d,u,f,m,_,g);f.transmission>0?i.push(p):f.transparent===!0?o.push(p):e.push(p)}function c(d,u,f,m,_,g){const p=r(d,u,f,m,_,g);f.transmission>0?i.unshift(p):f.transparent===!0?o.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||o1),i.length>1&&i.sort(u||xd),o.length>1&&o.sort(u||xd)}function h(){for(let d=t,u=n.length;d<u;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:o,init:s,push:a,unshift:c,finish:h,sort:l}}function s1(){let n=new WeakMap;function t(i,o){const s=n.get(i);let r;return s===void 0?(r=new vd,n.set(i,[r])):o>=s.length?(r=new vd,s.push(r)):r=s[o],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function r1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Lt};break;case"SpotLight":e={position:new P,direction:new P,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function a1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let c1=0;function l1(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function u1(n){const t=new r1,e=a1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);const o=new P,s=new me,r=new me;function a(l){let h=0,d=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,y=0,M=0,x=0,T=0,v=0,b=0;l.sort(l1);for(let S=0,C=l.length;S<C;S++){const R=l[S],L=R.color,B=R.intensity,k=R.distance,G=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=L.r*B,d+=L.g*B,u+=L.b*B;else if(R.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(R.sh.coefficients[U],B);b++}else if(R.isDirectionalLight){const U=t.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,W=e.get(R);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=G,i.directionalShadowMatrix[f]=R.shadow.matrix,y++}i.directional[f]=U,f++}else if(R.isSpotLight){const U=t.get(R);U.position.setFromMatrixPosition(R.matrixWorld),U.color.copy(L).multiplyScalar(B),U.distance=k,U.coneCos=Math.cos(R.angle),U.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),U.decay=R.decay,i.spot[_]=U;const K=R.shadow;if(R.map&&(i.spotLightMap[T]=R.map,T++,K.updateMatrices(R),R.castShadow&&v++),i.spotLightMatrix[_]=K.matrix,R.castShadow){const W=e.get(R);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=G,x++}_++}else if(R.isRectAreaLight){const U=t.get(R);U.color.copy(L).multiplyScalar(B),U.halfWidth.set(R.width*.5,0,0),U.halfHeight.set(0,R.height*.5,0),i.rectArea[g]=U,g++}else if(R.isPointLight){const U=t.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),U.distance=R.distance,U.decay=R.decay,R.castShadow){const K=R.shadow,W=e.get(R);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,i.pointShadow[m]=W,i.pointShadowMap[m]=G,i.pointShadowMatrix[m]=R.shadow.matrix,M++}i.point[m]=U,m++}else if(R.isHemisphereLight){const U=t.get(R);U.skyColor.copy(R.color).multiplyScalar(B),U.groundColor.copy(R.groundColor).multiplyScalar(B),i.hemi[p]=U,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const w=i.hash;(w.directionalLength!==f||w.pointLength!==m||w.spotLength!==_||w.rectAreaLength!==g||w.hemiLength!==p||w.numDirectionalShadows!==y||w.numPointShadows!==M||w.numSpotShadows!==x||w.numSpotMaps!==T||w.numLightProbes!==b)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+T-v,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=v,i.numLightProbes=b,w.directionalLength=f,w.pointLength=m,w.spotLength=_,w.rectAreaLength=g,w.hemiLength=p,w.numDirectionalShadows=y,w.numPointShadows=M,w.numSpotShadows=x,w.numSpotMaps=T,w.numLightProbes=b,i.version=c1++)}function c(l,h){let d=0,u=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const M=l[p];if(M.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(M.matrixWorld),o.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(o),x.direction.transformDirection(g),d++}else if(M.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(M.matrixWorld),o.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(o),x.direction.transformDirection(g),f++}else if(M.isRectAreaLight){const x=i.rectArea[m];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),r.identity(),s.copy(M.matrixWorld),s.premultiply(g),r.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),m++}else if(M.isPointLight){const x=i.point[u];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),u++}else if(M.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:i}}function Md(n){const t=new u1(n),e=[],i=[];function o(h){l.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function r(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:r}}function h1(n){let t=new WeakMap;function e(o,s=0){const r=t.get(o);let a;return r===void 0?(a=new Md(n),t.set(o,[a])):s>=r.length?(a=new Md(n),r.push(a)):a=r[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const d1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function p1(n,t,e){let i=new Au;const o=new Ot,s=new Ot,r=new Ie,a=new F0({depthPacking:Gg}),c=new H0,l={},h=e.maxTextureSize,d={[$i]:rn,[rn]:$i,[pi]:pi},u=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:d1,fragmentShader:f1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const m=new On;m.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Qe(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mf;let p=this.type;this.render=function(v,b,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||v.length===0)return;const S=n.getRenderTarget(),C=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),L=n.state;L.setBlending(ki),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const B=p!==hi&&this.type===hi,k=p===hi&&this.type!==hi;for(let G=0,U=v.length;G<U;G++){const K=v[G],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const st=W.getFrameExtents();if(o.multiply(st),s.copy(W.mapSize),(o.x>h||o.y>h)&&(o.x>h&&(s.x=Math.floor(h/st.x),o.x=s.x*st.x,W.mapSize.x=s.x),o.y>h&&(s.y=Math.floor(h/st.y),o.y=s.y*st.y,W.mapSize.y=s.y)),W.map===null||B===!0||k===!0){const At=this.type!==hi?{minFilter:yn,magFilter:yn}:{};W.map!==null&&W.map.dispose(),W.map=new So(o.x,o.y,At),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const rt=W.getViewportCount();for(let At=0;At<rt;At++){const kt=W.getViewport(At);r.set(s.x*kt.x,s.y*kt.y,s.x*kt.z,s.y*kt.w),L.viewport(r),W.updateMatrices(K,At),i=W.getFrustum(),x(b,w,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===hi&&y(W,w),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(S,C,R)};function y(v,b){const w=t.update(_);u.defines.VSM_SAMPLES!==v.blurSamples&&(u.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new So(o.x,o.y)),u.uniforms.shadow_pass.value=v.map.texture,u.uniforms.resolution.value=v.mapSize,u.uniforms.radius.value=v.radius,n.setRenderTarget(v.mapPass),n.clear(),n.renderBufferDirect(b,null,w,u,_,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,n.setRenderTarget(v.map),n.clear(),n.renderBufferDirect(b,null,w,f,_,null)}function M(v,b,w,S){let C=null;const R=w.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(R!==void 0)C=R;else if(C=w.isPointLight===!0?c:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const L=C.uuid,B=b.uuid;let k=l[L];k===void 0&&(k={},l[L]=k);let G=k[B];G===void 0&&(G=C.clone(),k[B]=G,b.addEventListener("dispose",T)),C=G}if(C.visible=b.visible,C.wireframe=b.wireframe,S===hi?C.side=b.shadowSide!==null?b.shadowSide:b.side:C.side=b.shadowSide!==null?b.shadowSide:d[b.side],C.alphaMap=b.alphaMap,C.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,C.map=b.map,C.clipShadows=b.clipShadows,C.clippingPlanes=b.clippingPlanes,C.clipIntersection=b.clipIntersection,C.displacementMap=b.displacementMap,C.displacementScale=b.displacementScale,C.displacementBias=b.displacementBias,C.wireframeLinewidth=b.wireframeLinewidth,C.linewidth=b.linewidth,w.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const L=n.properties.get(C);L.light=w}return C}function x(v,b,w,S,C){if(v.visible===!1)return;if(v.layers.test(b.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&C===hi)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,v.matrixWorld);const B=t.update(v),k=v.material;if(Array.isArray(k)){const G=B.groups;for(let U=0,K=G.length;U<K;U++){const W=G[U],st=k[W.materialIndex];if(st&&st.visible){const rt=M(v,st,S,C);v.onBeforeShadow(n,v,b,w,B,rt,W),n.renderBufferDirect(w,null,B,rt,v,W),v.onAfterShadow(n,v,b,w,B,rt,W)}}}else if(k.visible){const G=M(v,k,S,C);v.onBeforeShadow(n,v,b,w,B,G,null),n.renderBufferDirect(w,null,B,G,v,null),v.onAfterShadow(n,v,b,w,B,G,null)}}const L=v.children;for(let B=0,k=L.length;B<k;B++)x(L[B],b,w,S,C)}function T(v){v.target.removeEventListener("dispose",T);for(const w in l){const S=l[w],C=v.target.uuid;C in S&&(S[C].dispose(),delete S[C])}}}const m1={[al]:cl,[ll]:dl,[ul]:fl,[_s]:hl,[cl]:al,[dl]:ll,[fl]:ul,[hl]:_s};function g1(n,t){function e(){let N=!1;const ot=new Ie;let ct=null;const mt=new Ie(0,0,0,0);return{setMask:function(et){ct!==et&&!N&&(n.colorMask(et,et,et,et),ct=et)},setLocked:function(et){N=et},setClear:function(et,Z,xt,Bt,Se){Se===!0&&(et*=Bt,Z*=Bt,xt*=Bt),ot.set(et,Z,xt,Bt),mt.equals(ot)===!1&&(n.clearColor(et,Z,xt,Bt),mt.copy(ot))},reset:function(){N=!1,ct=null,mt.set(-1,0,0,0)}}}function i(){let N=!1,ot=!1,ct=null,mt=null,et=null;return{setReversed:function(Z){if(ot!==Z){const xt=t.get("EXT_clip_control");Z?xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.ZERO_TO_ONE_EXT):xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.NEGATIVE_ONE_TO_ONE_EXT),ot=Z;const Bt=et;et=null,this.setClear(Bt)}},getReversed:function(){return ot},setTest:function(Z){Z?Q(n.DEPTH_TEST):_t(n.DEPTH_TEST)},setMask:function(Z){ct!==Z&&!N&&(n.depthMask(Z),ct=Z)},setFunc:function(Z){if(ot&&(Z=m1[Z]),mt!==Z){switch(Z){case al:n.depthFunc(n.NEVER);break;case cl:n.depthFunc(n.ALWAYS);break;case ll:n.depthFunc(n.LESS);break;case _s:n.depthFunc(n.LEQUAL);break;case ul:n.depthFunc(n.EQUAL);break;case hl:n.depthFunc(n.GEQUAL);break;case dl:n.depthFunc(n.GREATER);break;case fl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}mt=Z}},setLocked:function(Z){N=Z},setClear:function(Z){et!==Z&&(ot&&(Z=1-Z),n.clearDepth(Z),et=Z)},reset:function(){N=!1,ct=null,mt=null,et=null,ot=!1}}}function o(){let N=!1,ot=null,ct=null,mt=null,et=null,Z=null,xt=null,Bt=null,Se=null;return{setTest:function(ae){N||(ae?Q(n.STENCIL_TEST):_t(n.STENCIL_TEST))},setMask:function(ae){ot!==ae&&!N&&(n.stencilMask(ae),ot=ae)},setFunc:function(ae,oi,Yn){(ct!==ae||mt!==oi||et!==Yn)&&(n.stencilFunc(ae,oi,Yn),ct=ae,mt=oi,et=Yn)},setOp:function(ae,oi,Yn){(Z!==ae||xt!==oi||Bt!==Yn)&&(n.stencilOp(ae,oi,Yn),Z=ae,xt=oi,Bt=Yn)},setLocked:function(ae){N=ae},setClear:function(ae){Se!==ae&&(n.clearStencil(ae),Se=ae)},reset:function(){N=!1,ot=null,ct=null,mt=null,et=null,Z=null,xt=null,Bt=null,Se=null}}}const s=new e,r=new i,a=new o,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,f=[],m=null,_=!1,g=null,p=null,y=null,M=null,x=null,T=null,v=null,b=new Lt(0,0,0),w=0,S=!1,C=null,R=null,L=null,B=null,k=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,K=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),U=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),U=K>=2);let st=null,rt={};const At=n.getParameter(n.SCISSOR_BOX),kt=n.getParameter(n.VIEWPORT),le=new Ie().fromArray(At),ge=new Ie().fromArray(kt);function Jt(N,ot,ct,mt){const et=new Uint8Array(4),Z=n.createTexture();n.bindTexture(N,Z),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xt=0;xt<ct;xt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ot,0,n.RGBA,1,1,mt,0,n.RGBA,n.UNSIGNED_BYTE,et):n.texImage2D(ot+xt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,et);return Z}const X={};X[n.TEXTURE_2D]=Jt(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=Jt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=Jt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=Jt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Q(n.DEPTH_TEST),r.setFunc(_s),Dt(!1),vt(fh),Q(n.CULL_FACE),Ce(ki);function Q(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function _t(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function Ut(N,ot){return d[N]!==ot?(n.bindFramebuffer(N,ot),d[N]=ot,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ot),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ot),!0):!1}function wt(N,ot){let ct=f,mt=!1;if(N){ct=u.get(ot),ct===void 0&&(ct=[],u.set(ot,ct));const et=N.textures;if(ct.length!==et.length||ct[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,xt=et.length;Z<xt;Z++)ct[Z]=n.COLOR_ATTACHMENT0+Z;ct.length=et.length,mt=!0}}else ct[0]!==n.BACK&&(ct[0]=n.BACK,mt=!0);mt&&n.drawBuffers(ct)}function te(N){return m!==N?(n.useProgram(N),m=N,!0):!1}const Ke={[lo]:n.FUNC_ADD,[mg]:n.FUNC_SUBTRACT,[gg]:n.FUNC_REVERSE_SUBTRACT};Ke[_g]=n.MIN,Ke[yg]=n.MAX;const I={[xg]:n.ZERO,[vg]:n.ONE,[Mg]:n.SRC_COLOR,[sl]:n.SRC_ALPHA,[Tg]:n.SRC_ALPHA_SATURATE,[Cg]:n.DST_COLOR,[bg]:n.DST_ALPHA,[Sg]:n.ONE_MINUS_SRC_COLOR,[rl]:n.ONE_MINUS_SRC_ALPHA,[Ag]:n.ONE_MINUS_DST_COLOR,[Eg]:n.ONE_MINUS_DST_ALPHA,[wg]:n.CONSTANT_COLOR,[Rg]:n.ONE_MINUS_CONSTANT_COLOR,[Og]:n.CONSTANT_ALPHA,[Ig]:n.ONE_MINUS_CONSTANT_ALPHA};function Ce(N,ot,ct,mt,et,Z,xt,Bt,Se,ae){if(N===ki){_===!0&&(_t(n.BLEND),_=!1);return}if(_===!1&&(Q(n.BLEND),_=!0),N!==pg){if(N!==g||ae!==S){if((p!==lo||x!==lo)&&(n.blendEquation(n.FUNC_ADD),p=lo,x=lo),ae)switch(N){case ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ph:n.blendFunc(n.ONE,n.ONE);break;case mh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ph:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case mh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,M=null,T=null,v=null,b.set(0,0,0),w=0,g=N,S=ae}return}et=et||ot,Z=Z||ct,xt=xt||mt,(ot!==p||et!==x)&&(n.blendEquationSeparate(Ke[ot],Ke[et]),p=ot,x=et),(ct!==y||mt!==M||Z!==T||xt!==v)&&(n.blendFuncSeparate(I[ct],I[mt],I[Z],I[xt]),y=ct,M=mt,T=Z,v=xt),(Bt.equals(b)===!1||Se!==w)&&(n.blendColor(Bt.r,Bt.g,Bt.b,Se),b.copy(Bt),w=Se),g=N,S=!1}function zt(N,ot){N.side===pi?_t(n.CULL_FACE):Q(n.CULL_FACE);let ct=N.side===rn;ot&&(ct=!ct),Dt(ct),N.blending===ls&&N.transparent===!1?Ce(ki):Ce(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);const mt=N.stencilWrite;a.setTest(mt),mt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Mt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):_t(n.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(N){C!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),C=N)}function vt(N){N!==hg?(Q(n.CULL_FACE),N!==R&&(N===fh?n.cullFace(n.BACK):N===dg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_t(n.CULL_FACE),R=N}function Ae(N){N!==L&&(U&&n.lineWidth(N),L=N)}function Mt(N,ot,ct){N?(Q(n.POLYGON_OFFSET_FILL),(B!==ot||k!==ct)&&(n.polygonOffset(ot,ct),B=ot,k=ct)):_t(n.POLYGON_OFFSET_FILL)}function Xt(N){N?Q(n.SCISSOR_TEST):_t(n.SCISSOR_TEST)}function $e(N){N===void 0&&(N=n.TEXTURE0+G-1),st!==N&&(n.activeTexture(N),st=N)}function Le(N,ot,ct){ct===void 0&&(st===null?ct=n.TEXTURE0+G-1:ct=st);let mt=rt[ct];mt===void 0&&(mt={type:void 0,texture:void 0},rt[ct]=mt),(mt.type!==N||mt.texture!==ot)&&(st!==ct&&(n.activeTexture(ct),st=ct),n.bindTexture(N,ot||X[N]),mt.type=N,mt.texture=ot)}function O(){const N=rt[st];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function E(){try{n.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{n.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{n.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{n.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{n.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{n.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{n.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{n.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(N){le.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),le.copy(N))}function Nt(N){ge.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ge.copy(N))}function Et(N,ot){let ct=l.get(ot);ct===void 0&&(ct=new WeakMap,l.set(ot,ct));let mt=ct.get(N);mt===void 0&&(mt=n.getUniformBlockIndex(ot,N.name),ct.set(N,mt))}function ht(N,ot){const mt=l.get(ot).get(N);c.get(ot)!==mt&&(n.uniformBlockBinding(ot,mt,N.__bindingPointIndex),c.set(ot,mt))}function Gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},st=null,rt={},d={},u=new WeakMap,f=[],m=null,_=!1,g=null,p=null,y=null,M=null,x=null,T=null,v=null,b=new Lt(0,0,0),w=0,S=!1,C=null,R=null,L=null,B=null,k=null,le.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:Q,disable:_t,bindFramebuffer:Ut,drawBuffers:wt,useProgram:te,setBlending:Ce,setMaterial:zt,setFlipSided:Dt,setCullFace:vt,setLineWidth:Ae,setPolygonOffset:Mt,setScissorTest:Xt,activeTexture:$e,bindTexture:Le,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:H,texImage2D:bt,texImage3D:it,updateUBOMapping:Et,uniformBlockBinding:ht,texStorage2D:at,texStorage3D:St,texSubImage2D:q,texSubImage3D:J,compressedTexSubImage2D:$,compressedTexSubImage3D:Tt,scissor:ft,viewport:Nt,reset:Gt}}function _1(n,t,e,i,o,s,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ot,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(O,E){return f?new OffscreenCanvas(O,E):Ea("canvas")}function _(O,E,H){let q=1;const J=Le(O);if((J.width>H||J.height>H)&&(q=H/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const $=Math.floor(q*J.width),Tt=Math.floor(q*J.height);d===void 0&&(d=m($,Tt));const at=E?m($,Tt):d;return at.width=$,at.height=Tt,at.getContext("2d").drawImage(O,0,0,$,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+Tt+")."),at}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),O;return O}function g(O){return O.generateMipmaps}function p(O){n.generateMipmap(O)}function y(O){return O.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?n.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(O,E,H,q,J=!1){if(O!==null){if(n[O]!==void 0)return n[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let $=E;if(E===n.RED&&(H===n.FLOAT&&($=n.R32F),H===n.HALF_FLOAT&&($=n.R16F),H===n.UNSIGNED_BYTE&&($=n.R8)),E===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.R8UI),H===n.UNSIGNED_SHORT&&($=n.R16UI),H===n.UNSIGNED_INT&&($=n.R32UI),H===n.BYTE&&($=n.R8I),H===n.SHORT&&($=n.R16I),H===n.INT&&($=n.R32I)),E===n.RG&&(H===n.FLOAT&&($=n.RG32F),H===n.HALF_FLOAT&&($=n.RG16F),H===n.UNSIGNED_BYTE&&($=n.RG8)),E===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.RG8UI),H===n.UNSIGNED_SHORT&&($=n.RG16UI),H===n.UNSIGNED_INT&&($=n.RG32UI),H===n.BYTE&&($=n.RG8I),H===n.SHORT&&($=n.RG16I),H===n.INT&&($=n.RG32I)),E===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.RGB8UI),H===n.UNSIGNED_SHORT&&($=n.RGB16UI),H===n.UNSIGNED_INT&&($=n.RGB32UI),H===n.BYTE&&($=n.RGB8I),H===n.SHORT&&($=n.RGB16I),H===n.INT&&($=n.RGB32I)),E===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.RGBA8UI),H===n.UNSIGNED_SHORT&&($=n.RGBA16UI),H===n.UNSIGNED_INT&&($=n.RGBA32UI),H===n.BYTE&&($=n.RGBA8I),H===n.SHORT&&($=n.RGBA16I),H===n.INT&&($=n.RGBA32I)),E===n.RGB&&(H===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),E===n.RGBA){const Tt=J?Sa:oe.getTransfer(q);H===n.FLOAT&&($=n.RGBA32F),H===n.HALF_FLOAT&&($=n.RGBA16F),H===n.UNSIGNED_BYTE&&($=Tt===de?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(O,E){let H;return O?E===null||E===Mo||E===lr?H=n.DEPTH24_STENCIL8:E===Qn?H=n.DEPTH32F_STENCIL8:E===cr&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Mo||E===lr?H=n.DEPTH_COMPONENT24:E===Qn?H=n.DEPTH_COMPONENT32F:E===cr&&(H=n.DEPTH_COMPONENT16),H}function T(O,E){return g(O)===!0||O.isFramebufferTexture&&O.minFilter!==yn&&O.minFilter!==Jn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function v(O){const E=O.target;E.removeEventListener("dispose",v),w(E),E.isVideoTexture&&h.delete(E)}function b(O){const E=O.target;E.removeEventListener("dispose",b),C(E)}function w(O){const E=i.get(O);if(E.__webglInit===void 0)return;const H=O.source,q=u.get(H);if(q){const J=q[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(O),Object.keys(q).length===0&&u.delete(H)}i.remove(O)}function S(O){const E=i.get(O);n.deleteTexture(E.__webglTexture);const H=O.source,q=u.get(H);delete q[E.__cacheKey],r.memory.textures--}function C(O){const E=i.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),i.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(E.__webglFramebuffer[q]))for(let J=0;J<E.__webglFramebuffer[q].length;J++)n.deleteFramebuffer(E.__webglFramebuffer[q][J]);else n.deleteFramebuffer(E.__webglFramebuffer[q]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[q])}else{if(Array.isArray(E.__webglFramebuffer))for(let q=0;q<E.__webglFramebuffer.length;q++)n.deleteFramebuffer(E.__webglFramebuffer[q]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let q=0;q<E.__webglColorRenderbuffer.length;q++)E.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[q]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=O.textures;for(let q=0,J=H.length;q<J;q++){const $=i.get(H[q]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),r.memory.textures--),i.remove(H[q])}i.remove(O)}let R=0;function L(){R=0}function B(){const O=R;return O>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+o.maxTextures),R+=1,O}function k(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function G(O,E){const H=i.get(O);if(O.isVideoTexture&&Xt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&H.__version!==O.version){const q=O.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(H,O,E);return}}else O.isExternalTexture&&(H.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+E)}function U(O,E){const H=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&H.__version!==O.version){X(H,O,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+E)}function K(O,E){const H=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&H.__version!==O.version){X(H,O,E);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+E)}function W(O,E){const H=i.get(O);if(O.version>0&&H.__version!==O.version){Q(H,O,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+E)}const st={[gl]:n.REPEAT,[po]:n.CLAMP_TO_EDGE,[_l]:n.MIRRORED_REPEAT},rt={[yn]:n.NEAREST,[zg]:n.NEAREST_MIPMAP_NEAREST,[Or]:n.NEAREST_MIPMAP_LINEAR,[Jn]:n.LINEAR,[mc]:n.LINEAR_MIPMAP_NEAREST,[mo]:n.LINEAR_MIPMAP_LINEAR},At={[$g]:n.NEVER,[Zg]:n.ALWAYS,[Xg]:n.LESS,[Ef]:n.LEQUAL,[qg]:n.EQUAL,[Kg]:n.GEQUAL,[jg]:n.GREATER,[Yg]:n.NOTEQUAL};function kt(O,E){if(E.type===Qn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Jn||E.magFilter===mc||E.magFilter===Or||E.magFilter===mo||E.minFilter===Jn||E.minFilter===mc||E.minFilter===Or||E.minFilter===mo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(O,n.TEXTURE_WRAP_S,st[E.wrapS]),n.texParameteri(O,n.TEXTURE_WRAP_T,st[E.wrapT]),(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)&&n.texParameteri(O,n.TEXTURE_WRAP_R,st[E.wrapR]),n.texParameteri(O,n.TEXTURE_MAG_FILTER,rt[E.magFilter]),n.texParameteri(O,n.TEXTURE_MIN_FILTER,rt[E.minFilter]),E.compareFunction&&(n.texParameteri(O,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(O,n.TEXTURE_COMPARE_FUNC,At[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===yn||E.minFilter!==Or&&E.minFilter!==mo||E.type===Qn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(O,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function le(O,E){let H=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",v));const q=E.source;let J=u.get(q);J===void 0&&(J={},u.set(q,J));const $=k(E);if($!==O.__cacheKey){J[$]===void 0&&(J[$]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,H=!0),J[$].usedTimes++;const Tt=J[O.__cacheKey];Tt!==void 0&&(J[O.__cacheKey].usedTimes--,Tt.usedTimes===0&&S(E)),O.__cacheKey=$,O.__webglTexture=J[$].texture}return H}function ge(O,E,H){return Math.floor(Math.floor(O/H)/E)}function Jt(O,E,H,q){const $=O.updateRanges;if($.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,H,q,E.data);else{$.sort((it,ft)=>it.start-ft.start);let Tt=0;for(let it=1;it<$.length;it++){const ft=$[Tt],Nt=$[it],Et=ft.start+ft.count,ht=ge(Nt.start,E.width,4),Gt=ge(ft.start,E.width,4);Nt.start<=Et+1&&ht===Gt&&ge(Nt.start+Nt.count-1,E.width,4)===ht?ft.count=Math.max(ft.count,Nt.start+Nt.count-ft.start):(++Tt,$[Tt]=Nt)}$.length=Tt+1;const at=n.getParameter(n.UNPACK_ROW_LENGTH),St=n.getParameter(n.UNPACK_SKIP_PIXELS),bt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let it=0,ft=$.length;it<ft;it++){const Nt=$[it],Et=Math.floor(Nt.start/4),ht=Math.ceil(Nt.count/4),Gt=Et%E.width,N=Math.floor(Et/E.width),ot=ht,ct=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Gt),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),e.texSubImage2D(n.TEXTURE_2D,0,Gt,N,ot,ct,H,q,E.data)}O.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,at),n.pixelStorei(n.UNPACK_SKIP_PIXELS,St),n.pixelStorei(n.UNPACK_SKIP_ROWS,bt)}}function X(O,E,H){let q=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(q=n.TEXTURE_3D);const J=le(O,E),$=E.source;e.bindTexture(q,O.__webglTexture,n.TEXTURE0+H);const Tt=i.get($);if($.version!==Tt.__version||J===!0){e.activeTexture(n.TEXTURE0+H);const at=oe.getPrimaries(oe.workingColorSpace),St=E.colorSpace===Ni?null:oe.getPrimaries(E.colorSpace),bt=E.colorSpace===Ni||at===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let it=_(E.image,!1,o.maxTextureSize);it=$e(E,it);const ft=s.convert(E.format,E.colorSpace),Nt=s.convert(E.type);let Et=M(E.internalFormat,ft,Nt,E.colorSpace,E.isVideoTexture);kt(q,E);let ht;const Gt=E.mipmaps,N=E.isVideoTexture!==!0,ot=Tt.__version===void 0||J===!0,ct=$.dataReady,mt=T(E,it);if(E.isDepthTexture)Et=x(E.format===hr,E.type),ot&&(N?e.texStorage2D(n.TEXTURE_2D,1,Et,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Et,it.width,it.height,0,ft,Nt,null));else if(E.isDataTexture)if(Gt.length>0){N&&ot&&e.texStorage2D(n.TEXTURE_2D,mt,Et,Gt[0].width,Gt[0].height);for(let et=0,Z=Gt.length;et<Z;et++)ht=Gt[et],N?ct&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,ht.width,ht.height,ft,Nt,ht.data):e.texImage2D(n.TEXTURE_2D,et,Et,ht.width,ht.height,0,ft,Nt,ht.data);E.generateMipmaps=!1}else N?(ot&&e.texStorage2D(n.TEXTURE_2D,mt,Et,it.width,it.height),ct&&Jt(E,it,ft,Nt)):e.texImage2D(n.TEXTURE_2D,0,Et,it.width,it.height,0,ft,Nt,it.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){N&&ot&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,Et,Gt[0].width,Gt[0].height,it.depth);for(let et=0,Z=Gt.length;et<Z;et++)if(ht=Gt[et],E.format!==zn)if(ft!==null)if(N){if(ct)if(E.layerUpdates.size>0){const xt=Zh(ht.width,ht.height,E.format,E.type);for(const Bt of E.layerUpdates){const Se=ht.data.subarray(Bt*xt/ht.data.BYTES_PER_ELEMENT,(Bt+1)*xt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,Bt,ht.width,ht.height,1,ft,Se)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,ht.width,ht.height,it.depth,ft,ht.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,Et,ht.width,ht.height,it.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ct&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,ht.width,ht.height,it.depth,ft,Nt,ht.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,Et,ht.width,ht.height,it.depth,0,ft,Nt,ht.data)}else{N&&ot&&e.texStorage2D(n.TEXTURE_2D,mt,Et,Gt[0].width,Gt[0].height);for(let et=0,Z=Gt.length;et<Z;et++)ht=Gt[et],E.format!==zn?ft!==null?N?ct&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,ht.width,ht.height,ft,ht.data):e.compressedTexImage2D(n.TEXTURE_2D,et,Et,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ct&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,ht.width,ht.height,ft,Nt,ht.data):e.texImage2D(n.TEXTURE_2D,et,Et,ht.width,ht.height,0,ft,Nt,ht.data)}else if(E.isDataArrayTexture)if(N){if(ot&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,Et,it.width,it.height,it.depth),ct)if(E.layerUpdates.size>0){const et=Zh(it.width,it.height,E.format,E.type);for(const Z of E.layerUpdates){const xt=it.data.subarray(Z*et/it.data.BYTES_PER_ELEMENT,(Z+1)*et/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,it.width,it.height,1,ft,Nt,xt)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ft,Nt,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Et,it.width,it.height,it.depth,0,ft,Nt,it.data);else if(E.isData3DTexture)N?(ot&&e.texStorage3D(n.TEXTURE_3D,mt,Et,it.width,it.height,it.depth),ct&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ft,Nt,it.data)):e.texImage3D(n.TEXTURE_3D,0,Et,it.width,it.height,it.depth,0,ft,Nt,it.data);else if(E.isFramebufferTexture){if(ot)if(N)e.texStorage2D(n.TEXTURE_2D,mt,Et,it.width,it.height);else{let et=it.width,Z=it.height;for(let xt=0;xt<mt;xt++)e.texImage2D(n.TEXTURE_2D,xt,Et,et,Z,0,ft,Nt,null),et>>=1,Z>>=1}}else if(Gt.length>0){if(N&&ot){const et=Le(Gt[0]);e.texStorage2D(n.TEXTURE_2D,mt,Et,et.width,et.height)}for(let et=0,Z=Gt.length;et<Z;et++)ht=Gt[et],N?ct&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,ft,Nt,ht):e.texImage2D(n.TEXTURE_2D,et,Et,ft,Nt,ht);E.generateMipmaps=!1}else if(N){if(ot){const et=Le(it);e.texStorage2D(n.TEXTURE_2D,mt,Et,et.width,et.height)}ct&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,Nt,it)}else e.texImage2D(n.TEXTURE_2D,0,Et,ft,Nt,it);g(E)&&p(q),Tt.__version=$.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Q(O,E,H){if(E.image.length!==6)return;const q=le(O,E),J=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+H);const $=i.get(J);if(J.version!==$.__version||q===!0){e.activeTexture(n.TEXTURE0+H);const Tt=oe.getPrimaries(oe.workingColorSpace),at=E.colorSpace===Ni?null:oe.getPrimaries(E.colorSpace),St=E.colorSpace===Ni||Tt===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const bt=E.isCompressedTexture||E.image[0].isCompressedTexture,it=E.image[0]&&E.image[0].isDataTexture,ft=[];for(let Z=0;Z<6;Z++)!bt&&!it?ft[Z]=_(E.image[Z],!0,o.maxCubemapSize):ft[Z]=it?E.image[Z].image:E.image[Z],ft[Z]=$e(E,ft[Z]);const Nt=ft[0],Et=s.convert(E.format,E.colorSpace),ht=s.convert(E.type),Gt=M(E.internalFormat,Et,ht,E.colorSpace),N=E.isVideoTexture!==!0,ot=$.__version===void 0||q===!0,ct=J.dataReady;let mt=T(E,Nt);kt(n.TEXTURE_CUBE_MAP,E);let et;if(bt){N&&ot&&e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,Gt,Nt.width,Nt.height);for(let Z=0;Z<6;Z++){et=ft[Z].mipmaps;for(let xt=0;xt<et.length;xt++){const Bt=et[xt];E.format!==zn?Et!==null?N?ct&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt,0,0,Bt.width,Bt.height,Et,Bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt,Gt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt,0,0,Bt.width,Bt.height,Et,ht,Bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt,Gt,Bt.width,Bt.height,0,Et,ht,Bt.data)}}}else{if(et=E.mipmaps,N&&ot){et.length>0&&mt++;const Z=Le(ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,Gt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(it){N?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ft[Z].width,ft[Z].height,Et,ht,ft[Z].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Gt,ft[Z].width,ft[Z].height,0,Et,ht,ft[Z].data);for(let xt=0;xt<et.length;xt++){const Se=et[xt].image[Z].image;N?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt+1,0,0,Se.width,Se.height,Et,ht,Se.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt+1,Gt,Se.width,Se.height,0,Et,ht,Se.data)}}else{N?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Et,ht,ft[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Gt,Et,ht,ft[Z]);for(let xt=0;xt<et.length;xt++){const Bt=et[xt];N?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt+1,0,0,Et,ht,Bt.image[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xt+1,Gt,Et,ht,Bt.image[Z])}}}g(E)&&p(n.TEXTURE_CUBE_MAP),$.__version=J.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function _t(O,E,H,q,J,$){const Tt=s.convert(H.format,H.colorSpace),at=s.convert(H.type),St=M(H.internalFormat,Tt,at,H.colorSpace),bt=i.get(E),it=i.get(H);if(it.__renderTarget=E,!bt.__hasExternalTextures){const ft=Math.max(1,E.width>>$),Nt=Math.max(1,E.height>>$);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,$,St,ft,Nt,E.depth,0,Tt,at,null):e.texImage2D(J,$,St,ft,Nt,0,Tt,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,O),Mt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,J,it.__webglTexture,0,Ae(E)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,J,it.__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ut(O,E,H){if(n.bindRenderbuffer(n.RENDERBUFFER,O),E.depthBuffer){const q=E.depthTexture,J=q&&q.isDepthTexture?q.type:null,$=x(E.stencilBuffer,J),Tt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=Ae(E);Mt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,$,E.width,E.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,$,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,$,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,O)}else{const q=E.textures;for(let J=0;J<q.length;J++){const $=q[J],Tt=s.convert($.format,$.colorSpace),at=s.convert($.type),St=M($.internalFormat,Tt,at,$.colorSpace),bt=Ae(E);H&&Mt(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,bt,St,E.width,E.height):Mt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,bt,St,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,St,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function wt(O,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(E.depthTexture);q.__renderTarget=E,(!q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);const J=q.__webglTexture,$=Ae(E);if(E.depthTexture.format===ur)Mt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(E.depthTexture.format===hr)Mt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function te(O){const E=i.get(O),H=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const q=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),q){const J=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),E.__depthDisposeCallback=J}E.__boundDepthTexture=q}if(O.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const q=O.texture.mipmaps;q&&q.length>0?wt(E.__webglFramebuffer[0],O):wt(E.__webglFramebuffer,O)}else if(H){E.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[q]),E.__webglDepthbuffer[q]===void 0)E.__webglDepthbuffer[q]=n.createRenderbuffer(),Ut(E.__webglDepthbuffer[q],O,!1);else{const J=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,$)}}else{const q=O.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Ut(E.__webglDepthbuffer,O,!1);else{const J=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,$)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(O,E,H){const q=i.get(O);E!==void 0&&_t(q.__webglFramebuffer,O,O.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&te(O)}function I(O){const E=O.texture,H=i.get(O),q=i.get(E);O.addEventListener("dispose",b);const J=O.textures,$=O.isWebGLCubeRenderTarget===!0,Tt=J.length>1;if(Tt||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=E.version,r.memory.textures++),$){H.__webglFramebuffer=[];for(let at=0;at<6;at++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[at]=[];for(let St=0;St<E.mipmaps.length;St++)H.__webglFramebuffer[at][St]=n.createFramebuffer()}else H.__webglFramebuffer[at]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let at=0;at<E.mipmaps.length;at++)H.__webglFramebuffer[at]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let at=0,St=J.length;at<St;at++){const bt=i.get(J[at]);bt.__webglTexture===void 0&&(bt.__webglTexture=n.createTexture(),r.memory.textures++)}if(O.samples>0&&Mt(O)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){const St=J[at];H.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[at]);const bt=s.convert(St.format,St.colorSpace),it=s.convert(St.type),ft=M(St.internalFormat,bt,it,St.colorSpace,O.isXRRenderTarget===!0),Nt=Ae(O);n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,ft,O.width,O.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,H.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),O.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Ut(H.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),kt(n.TEXTURE_CUBE_MAP,E);for(let at=0;at<6;at++)if(E.mipmaps&&E.mipmaps.length>0)for(let St=0;St<E.mipmaps.length;St++)_t(H.__webglFramebuffer[at][St],O,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,St);else _t(H.__webglFramebuffer[at],O,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);g(E)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let at=0,St=J.length;at<St;at++){const bt=J[at],it=i.get(bt);let ft=n.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ft=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,it.__webglTexture),kt(ft,bt),_t(H.__webglFramebuffer,O,bt,n.COLOR_ATTACHMENT0+at,ft,0),g(bt)&&p(ft)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(at=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,q.__webglTexture),kt(at,E),E.mipmaps&&E.mipmaps.length>0)for(let St=0;St<E.mipmaps.length;St++)_t(H.__webglFramebuffer[St],O,E,n.COLOR_ATTACHMENT0,at,St);else _t(H.__webglFramebuffer,O,E,n.COLOR_ATTACHMENT0,at,0);g(E)&&p(at),e.unbindTexture()}O.depthBuffer&&te(O)}function Ce(O){const E=O.textures;for(let H=0,q=E.length;H<q;H++){const J=E[H];if(g(J)){const $=y(O),Tt=i.get(J).__webglTexture;e.bindTexture($,Tt),p($),e.unbindTexture()}}}const zt=[],Dt=[];function vt(O){if(O.samples>0){if(Mt(O)===!1){const E=O.textures,H=O.width,q=O.height;let J=n.COLOR_BUFFER_BIT;const $=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(O),at=E.length>1;if(at)for(let bt=0;bt<E.length;bt++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);const St=O.texture.mipmaps;St&&St.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let bt=0;bt<E.length;bt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[bt]);const it=i.get(E[bt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,it,0)}n.blitFramebuffer(0,0,H,q,0,0,H,q,J,n.NEAREST),c===!0&&(zt.length=0,Dt.length=0,zt.push(n.COLOR_ATTACHMENT0+bt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(zt.push($),Dt.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Dt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,zt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let bt=0;bt<E.length;bt++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[bt]);const it=i.get(E[bt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,it,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&c){const E=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Ae(O){return Math.min(o.maxSamples,O.samples)}function Mt(O){const E=i.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Xt(O){const E=r.render.frame;h.get(O)!==E&&(h.set(O,E),O.update())}function $e(O,E){const H=O.colorSpace,q=O.format,J=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||H!==vs&&H!==Ni&&(oe.getTransfer(H)===de?(q!==zn||J!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function Le(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(l.width=O.naturalWidth||O.width,l.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(l.width=O.displayWidth,l.height=O.displayHeight):(l.width=O.width,l.height=O.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=L,this.setTexture2D=G,this.setTexture2DArray=U,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=Ke,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Mt}function y1(n,t){function e(i,o=Ni){let s;const r=oe.getTransfer(o);if(i===ni)return n.UNSIGNED_BYTE;if(i===gu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_u)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===_f)return n.BYTE;if(i===yf)return n.SHORT;if(i===cr)return n.UNSIGNED_SHORT;if(i===mu)return n.INT;if(i===Mo)return n.UNSIGNED_INT;if(i===Qn)return n.FLOAT;if(i===vr)return n.HALF_FLOAT;if(i===Mf)return n.ALPHA;if(i===Sf)return n.RGB;if(i===zn)return n.RGBA;if(i===ur)return n.DEPTH_COMPONENT;if(i===hr)return n.DEPTH_STENCIL;if(i===yu)return n.RED;if(i===xu)return n.RED_INTEGER;if(i===bf)return n.RG;if(i===vu)return n.RG_INTEGER;if(i===Mu)return n.RGBA_INTEGER;if(i===ca||i===la||i===ua||i===ha)if(r===de)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ca)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ca)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===la)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ha)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yl||i===xl||i===vl||i===Ml)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===yl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ml)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sl||i===bl||i===El)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Sl||i===bl)return r===de?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===El)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cl||i===Al||i===Tl||i===wl||i===Rl||i===Ol||i===Il||i===Pl||i===Ll||i===Nl||i===Dl||i===Fl||i===Hl||i===Ul)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Cl)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Al)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tl)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wl)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rl)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ol)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Il)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pl)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ll)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nl)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dl)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fl)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hl)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ul)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bl||i===kl||i===zl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Bl)return r===de?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vl||i===Gl||i===Wl||i===$l)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Vl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$l)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const x1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class M1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Hf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Xi({vertexShader:x1,fragmentShader:v1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qe(new Qa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class S1 extends To{constructor(t,e){super();const i=this;let o=null,s=1,r=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",g=new M1,p={},y=e.getContextAttributes();let M=null,x=null;const T=[],v=[],b=new Ot;let w=null;const S=new Tn;S.viewport=new Ie;const C=new Tn;C.viewport=new Ie;const R=[S,C],L=new z0;let B=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=T[X];return Q===void 0&&(Q=new Hc,T[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=T[X];return Q===void 0&&(Q=new Hc,T[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=T[X];return Q===void 0&&(Q=new Hc,T[X]=Q),Q.getHandSpace()};function G(X){const Q=v.indexOf(X.inputSource);if(Q===-1)return;const _t=T[Q];_t!==void 0&&(_t.update(X.inputSource,X.frame,l||r),_t.dispatchEvent({type:X.type,data:X.inputSource}))}function U(){o.removeEventListener("select",G),o.removeEventListener("selectstart",G),o.removeEventListener("selectend",G),o.removeEventListener("squeeze",G),o.removeEventListener("squeezestart",G),o.removeEventListener("squeezeend",G),o.removeEventListener("end",U),o.removeEventListener("inputsourceschange",K);for(let X=0;X<T.length;X++){const Q=v[X];Q!==null&&(v[X]=null,T[X].disconnect(Q))}B=null,k=null,g.reset();for(const X in p)delete p[X];t.setRenderTarget(M),f=null,u=null,d=null,o=null,x=null,Jt.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(o,e)),d},this.getFrame=function(){return m},this.getSession=function(){return o},this.setSession=async function(X){if(o=X,o!==null){if(M=t.getRenderTarget(),o.addEventListener("select",G),o.addEventListener("selectstart",G),o.addEventListener("selectend",G),o.addEventListener("squeeze",G),o.addEventListener("squeezestart",G),o.addEventListener("squeezeend",G),o.addEventListener("end",U),o.addEventListener("inputsourceschange",K),y.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(b),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Ut=null,wt=null;y.depth&&(wt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=y.stencil?hr:ur,Ut=y.stencil?lr:Mo);const te={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(te),o.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new So(u.textureWidth,u.textureHeight,{format:zn,type:ni,depthTexture:new Ff(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const _t={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(o,e,_t),o.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new So(f.framebufferWidth,f.framebufferHeight,{format:zn,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await o.requestReferenceSpace(a),Jt.setContext(o),Jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(X){for(let Q=0;Q<X.removed.length;Q++){const _t=X.removed[Q],Ut=v.indexOf(_t);Ut>=0&&(v[Ut]=null,T[Ut].disconnect(_t))}for(let Q=0;Q<X.added.length;Q++){const _t=X.added[Q];let Ut=v.indexOf(_t);if(Ut===-1){for(let te=0;te<T.length;te++)if(te>=v.length){v.push(_t),Ut=te;break}else if(v[te]===null){v[te]=_t,Ut=te;break}if(Ut===-1)break}const wt=T[Ut];wt&&wt.connect(_t)}}const W=new P,st=new P;function rt(X,Q,_t){W.setFromMatrixPosition(Q.matrixWorld),st.setFromMatrixPosition(_t.matrixWorld);const Ut=W.distanceTo(st),wt=Q.projectionMatrix.elements,te=_t.projectionMatrix.elements,Ke=wt[14]/(wt[10]-1),I=wt[14]/(wt[10]+1),Ce=(wt[9]+1)/wt[5],zt=(wt[9]-1)/wt[5],Dt=(wt[8]-1)/wt[0],vt=(te[8]+1)/te[0],Ae=Ke*Dt,Mt=Ke*vt,Xt=Ut/(-Dt+vt),$e=Xt*-Dt;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX($e),X.translateZ(Xt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),wt[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Le=Ke+Xt,O=I+Xt,E=Ae-$e,H=Mt+(Ut-$e),q=Ce*I/O*Le,J=zt*I/O*Le;X.projectionMatrix.makePerspective(E,H,q,J,Le,O),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function At(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(o===null)return;let Q=X.near,_t=X.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(_t=g.depthFar)),L.near=C.near=S.near=Q,L.far=C.far=S.far=_t,(B!==L.near||k!==L.far)&&(o.updateRenderState({depthNear:L.near,depthFar:L.far}),B=L.near,k=L.far),L.layers.mask=X.layers.mask|6,S.layers.mask=L.layers.mask&3,C.layers.mask=L.layers.mask&5;const Ut=X.parent,wt=L.cameras;At(L,Ut);for(let te=0;te<wt.length;te++)At(wt[te],Ut);wt.length===2?rt(L,S,C):L.projectionMatrix.copy(S.projectionMatrix),kt(X,L,Ut)};function kt(X,Q,_t){_t===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(_t.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ql*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(X){c=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(X){return p[X]};let le=null;function ge(X,Q){if(h=Q.getViewerPose(l||r),m=Q,h!==null){const _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Ut=!1;_t.length!==L.cameras.length&&(L.cameras.length=0,Ut=!0);for(let I=0;I<_t.length;I++){const Ce=_t[I];let zt=null;if(f!==null)zt=f.getViewport(Ce);else{const vt=d.getViewSubImage(u,Ce);zt=vt.viewport,I===0&&(t.setRenderTargetTextures(x,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(x))}let Dt=R[I];Dt===void 0&&(Dt=new Tn,Dt.layers.enable(I),Dt.viewport=new Ie,R[I]=Dt),Dt.matrix.fromArray(Ce.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(Ce.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(zt.x,zt.y,zt.width,zt.height),I===0&&(L.matrix.copy(Dt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ut===!0&&L.cameras.push(Dt)}const wt=o.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const I=d.getDepthInformation(_t[0]);I&&I.isValid&&I.texture&&g.init(I,o.renderState)}if(wt&&wt.includes("camera-access")&&_){t.state.unbindTexture(),d=i.getBinding();for(let I=0;I<_t.length;I++){const Ce=_t[I].camera;if(Ce){let zt=p[Ce];zt||(zt=new Hf,p[Ce]=zt);const Dt=d.getCameraImage(Ce);zt.sourceTexture=Dt}}}}for(let _t=0;_t<T.length;_t++){const Ut=v[_t],wt=T[_t];Ut!==null&&wt!==void 0&&wt.update(Ut,Q,l||r)}le&&le(X,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),m=null}const Jt=new Wf;Jt.setAnimationLoop(ge),this.setAnimationLoop=function(X){le=X},this.dispose=function(){}}}const ao=new Xn,b1=new me;function E1(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Of(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function o(g,p,y,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,y,M):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===rn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===rn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=t.get(p),M=y.envMap,x=y.envMapRotation;M&&(g.envMap.value=M,ao.copy(x),ao.x*=-1,ao.y*=-1,ao.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ao.y*=-1,ao.z*=-1),g.envMapRotation.value.setFromMatrix4(b1.makeRotationFromEuler(ao)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=M*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function C1(n,t,e,i){let o={},s={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){const x=M.program;i.uniformBlockBinding(y,x)}function l(y,M){let x=o[y.id];x===void 0&&(m(y),x=h(y),o[y.id]=x,y.addEventListener("dispose",g));const T=M.program;i.updateUBOMapping(y,T);const v=t.render.frame;s[y.id]!==v&&(u(y),s[y.id]=v)}function h(y){const M=d();y.__bindingPointIndex=M;const x=n.createBuffer(),T=y.__size,v=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,T,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,x),x}function d(){for(let y=0;y<a;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const M=o[y.id],x=y.uniforms,T=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let v=0,b=x.length;v<b;v++){const w=Array.isArray(x[v])?x[v]:[x[v]];for(let S=0,C=w.length;S<C;S++){const R=w[S];if(f(R,v,S,T)===!0){const L=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let k=0;for(let G=0;G<B.length;G++){const U=B[G],K=_(U);typeof U=="number"||typeof U=="boolean"?(R.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,L+k,R.__data)):U.isMatrix3?(R.__data[0]=U.elements[0],R.__data[1]=U.elements[1],R.__data[2]=U.elements[2],R.__data[3]=0,R.__data[4]=U.elements[3],R.__data[5]=U.elements[4],R.__data[6]=U.elements[5],R.__data[7]=0,R.__data[8]=U.elements[6],R.__data[9]=U.elements[7],R.__data[10]=U.elements[8],R.__data[11]=0):(U.toArray(R.__data,k),k+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,M,x,T){const v=y.value,b=M+"_"+x;if(T[b]===void 0)return typeof v=="number"||typeof v=="boolean"?T[b]=v:T[b]=v.clone(),!0;{const w=T[b];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return T[b]=v,!0}else if(w.equals(v)===!1)return w.copy(v),!0}return!1}function m(y){const M=y.uniforms;let x=0;const T=16;for(let b=0,w=M.length;b<w;b++){const S=Array.isArray(M[b])?M[b]:[M[b]];for(let C=0,R=S.length;C<R;C++){const L=S[C],B=Array.isArray(L.value)?L.value:[L.value];for(let k=0,G=B.length;k<G;k++){const U=B[k],K=_(U),W=x%T,st=W%K.boundary,rt=W+st;x+=st,rt!==0&&T-rt<K.storage&&(x+=T-rt),L.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=K.storage}}}const v=x%T;return v>0&&(x+=T-v),y.__size=x,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function g(y){const M=y.target;M.removeEventListener("dispose",g);const x=r.indexOf(M.__bindingPointIndex);r.splice(x,1),n.deleteBuffer(o[M.id]),delete o[M.id],delete s[M.id]}function p(){for(const y in o)n.deleteBuffer(o[y]);r=[],o={},s={}}return{bind:c,update:l,dispose:p}}class A1{constructor(t={}){const{canvas:e=e0(),context:i=null,depth:o=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=r;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let T=!1;this._outputColorSpace=An;let v=0,b=0,w=null,S=-1,C=null;const R=new Ie,L=new Ie;let B=null;const k=new Lt(0);let G=0,U=e.width,K=e.height,W=1,st=null,rt=null;const At=new Ie(0,0,U,K),kt=new Ie(0,0,U,K);let le=!1;const ge=new Au;let Jt=!1,X=!1;const Q=new me,_t=new P,Ut=new Ie,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function Ke(){return w===null?W:1}let I=i;function Ce(A,D){return e.getContext(A,D)}try{const A={alpha:!0,depth:o,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pu}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",et,!1),I===null){const D="webgl2";if(I=Ce(D,A),I===null)throw Ce(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let zt,Dt,vt,Ae,Mt,Xt,$e,Le,O,E,H,q,J,$,Tt,at,St,bt,it,ft,Nt,Et,ht,Gt;function N(){zt=new Fx(I),zt.init(),Et=new y1(I,zt),Dt=new Rx(I,zt,t,Et),vt=new g1(I,zt),Dt.reversedDepthBuffer&&u&&vt.buffers.depth.setReversed(!0),Ae=new Bx(I),Mt=new i1,Xt=new _1(I,zt,vt,Mt,Dt,Et,Ae),$e=new Ix(x),Le=new Dx(x),O=new $0(I),ht=new Tx(I,O),E=new Hx(I,O,Ae,ht),H=new zx(I,E,O,Ae),it=new kx(I,Dt,Xt),at=new Ox(Mt),q=new n1(x,$e,Le,zt,Dt,ht,at),J=new E1(x,Mt),$=new s1,Tt=new h1(zt),bt=new Ax(x,$e,Le,vt,H,f,c),St=new p1(x,H,Dt),Gt=new C1(I,Ae,Dt,vt),ft=new wx(I,zt,Ae),Nt=new Ux(I,zt,Ae),Ae.programs=q.programs,x.capabilities=Dt,x.extensions=zt,x.properties=Mt,x.renderLists=$,x.shadowMap=St,x.state=vt,x.info=Ae}N();const ot=new S1(x,I);this.xr=ot,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=zt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=zt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(U,K,!1))},this.getSize=function(A){return A.set(U,K)},this.setSize=function(A,D,z=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,K=D,e.width=Math.floor(A*W),e.height=Math.floor(D*W),z===!0&&(e.style.width=A+"px",e.style.height=D+"px"),this.setViewport(0,0,A,D)},this.getDrawingBufferSize=function(A){return A.set(U*W,K*W).floor()},this.setDrawingBufferSize=function(A,D,z){U=A,K=D,W=z,e.width=Math.floor(A*z),e.height=Math.floor(D*z),this.setViewport(0,0,A,D)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(At)},this.setViewport=function(A,D,z,V){A.isVector4?At.set(A.x,A.y,A.z,A.w):At.set(A,D,z,V),vt.viewport(R.copy(At).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(kt)},this.setScissor=function(A,D,z,V){A.isVector4?kt.set(A.x,A.y,A.z,A.w):kt.set(A,D,z,V),vt.scissor(L.copy(kt).multiplyScalar(W).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(A){vt.setScissorTest(le=A)},this.setOpaqueSort=function(A){st=A},this.setTransparentSort=function(A){rt=A},this.getClearColor=function(A){return A.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(A=!0,D=!0,z=!0){let V=0;if(A){let F=!1;if(w!==null){const nt=w.texture.format;F=nt===Mu||nt===vu||nt===xu}if(F){const nt=w.texture.type,dt=nt===ni||nt===Mo||nt===cr||nt===lr||nt===gu||nt===_u,yt=bt.getClearColor(),pt=bt.getClearAlpha(),Pt=yt.r,Ft=yt.g,Rt=yt.b;dt?(m[0]=Pt,m[1]=Ft,m[2]=Rt,m[3]=pt,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=Pt,_[1]=Ft,_[2]=Rt,_[3]=pt,I.clearBufferiv(I.COLOR,0,_))}else V|=I.COLOR_BUFFER_BIT}D&&(V|=I.DEPTH_BUFFER_BIT),z&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",et,!1),bt.dispose(),$.dispose(),Tt.dispose(),Mt.dispose(),$e.dispose(),Le.dispose(),H.dispose(),ht.dispose(),Gt.dispose(),q.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Yn),ot.removeEventListener("sessionend",ah),to.stop()};function ct(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=Ae.autoReset,D=St.enabled,z=St.autoUpdate,V=St.needsUpdate,F=St.type;N(),Ae.autoReset=A,St.enabled=D,St.autoUpdate=z,St.needsUpdate=V,St.type=F}function et(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Z(A){const D=A.target;D.removeEventListener("dispose",Z),xt(D)}function xt(A){Bt(A),Mt.remove(A)}function Bt(A){const D=Mt.get(A).programs;D!==void 0&&(D.forEach(function(z){q.releaseProgram(z)}),A.isShaderMaterial&&q.releaseShaderCache(A))}this.renderBufferDirect=function(A,D,z,V,F,nt){D===null&&(D=wt);const dt=F.isMesh&&F.matrixWorld.determinant()<0,yt=tg(A,D,z,V,F);vt.setMaterial(V,dt);let pt=z.index,Pt=1;if(V.wireframe===!0){if(pt=E.getWireframeAttribute(z),pt===void 0)return;Pt=2}const Ft=z.drawRange,Rt=z.attributes.position;let Zt=Ft.start*Pt,he=(Ft.start+Ft.count)*Pt;nt!==null&&(Zt=Math.max(Zt,nt.start*Pt),he=Math.min(he,(nt.start+nt.count)*Pt)),pt!==null?(Zt=Math.max(Zt,0),he=Math.min(he,pt.count)):Rt!=null&&(Zt=Math.max(Zt,0),he=Math.min(he,Rt.count));const Oe=he-Zt;if(Oe<0||Oe===1/0)return;ht.setup(F,V,yt,z,pt);let Ee,_e=ft;if(pt!==null&&(Ee=O.get(pt),_e=Nt,_e.setIndex(Ee)),F.isMesh)V.wireframe===!0?(vt.setLineWidth(V.wireframeLinewidth*Ke()),_e.setMode(I.LINES)):_e.setMode(I.TRIANGLES);else if(F.isLine){let It=V.linewidth;It===void 0&&(It=1),vt.setLineWidth(It*Ke()),F.isLineSegments?_e.setMode(I.LINES):F.isLineLoop?_e.setMode(I.LINE_LOOP):_e.setMode(I.LINE_STRIP)}else F.isPoints?_e.setMode(I.POINTS):F.isSprite&&_e.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)dr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))_e.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const It=F._multiDrawStarts,we=F._multiDrawCounts,ie=F._multiDrawCount,fn=pt?O.get(pt).bytesPerElement:1,Io=Mt.get(V).currentProgram.getUniforms();for(let pn=0;pn<ie;pn++)Io.setValue(I,"_gl_DrawID",pn),_e.render(It[pn]/fn,we[pn])}else if(F.isInstancedMesh)_e.renderInstances(Zt,Oe,F.count);else if(z.isInstancedBufferGeometry){const It=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,we=Math.min(z.instanceCount,It);_e.renderInstances(Zt,Oe,we)}else _e.render(Zt,Oe)};function Se(A,D,z){A.transparent===!0&&A.side===pi&&A.forceSinglePass===!1?(A.side=rn,A.needsUpdate=!0,Rr(A,D,z),A.side=$i,A.needsUpdate=!0,Rr(A,D,z),A.side=pi):Rr(A,D,z)}this.compile=function(A,D,z=null){z===null&&(z=A),p=Tt.get(z),p.init(D),M.push(p),z.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),A!==z&&A.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const V=new Set;return A.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const nt=F.material;if(nt)if(Array.isArray(nt))for(let dt=0;dt<nt.length;dt++){const yt=nt[dt];Se(yt,z,F),V.add(yt)}else Se(nt,z,F),V.add(nt)}),p=M.pop(),V},this.compileAsync=function(A,D,z=null){const V=this.compile(A,D,z);return new Promise(F=>{function nt(){if(V.forEach(function(dt){Mt.get(dt).currentProgram.isReady()&&V.delete(dt)}),V.size===0){F(A);return}setTimeout(nt,10)}zt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let ae=null;function oi(A){ae&&ae(A)}function Yn(){to.stop()}function ah(){to.start()}const to=new Wf;to.setAnimationLoop(oi),typeof self<"u"&&to.setContext(self),this.setAnimationLoop=function(A){ae=A,ot.setAnimationLoop(A),A===null?to.stop():to.start()},ot.addEventListener("sessionstart",Yn),ot.addEventListener("sessionend",ah),this.render=function(A,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(D),D=ot.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,D,w),p=Tt.get(A,M.length),p.init(D),M.push(p),Q.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ge.setFromProjectionMatrix(Q,ti,D.reversedDepth),X=this.localClippingEnabled,Jt=at.init(this.clippingPlanes,X),g=$.get(A,y.length),g.init(),y.push(g),ot.enabled===!0&&ot.isPresenting===!0){const nt=x.xr.getDepthSensingMesh();nt!==null&&fc(nt,D,-1/0,x.sortObjects)}fc(A,D,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(st,rt),te=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,te&&bt.addToRenderList(g,A),this.info.render.frame++,Jt===!0&&at.beginShadows();const z=p.state.shadowsArray;St.render(z,A,D),Jt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=g.opaque,F=g.transmissive;if(p.setupLights(),D.isArrayCamera){const nt=D.cameras;if(F.length>0)for(let dt=0,yt=nt.length;dt<yt;dt++){const pt=nt[dt];lh(V,F,A,pt)}te&&bt.render(A);for(let dt=0,yt=nt.length;dt<yt;dt++){const pt=nt[dt];ch(g,A,pt,pt.viewport)}}else F.length>0&&lh(V,F,A,D),te&&bt.render(A),ch(g,A,D);w!==null&&b===0&&(Xt.updateMultisampleRenderTarget(w),Xt.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(x,A,D),ht.resetDefaultState(),S=-1,C=null,M.pop(),M.length>0?(p=M[M.length-1],Jt===!0&&at.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function fc(A,D,z,V){if(A.visible===!1)return;if(A.layers.test(D.layers)){if(A.isGroup)z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(D);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ge.intersectsSprite(A)){V&&Ut.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Q);const dt=H.update(A),yt=A.material;yt.visible&&g.push(A,dt,yt,z,Ut.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ge.intersectsObject(A))){const dt=H.update(A),yt=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ut.copy(A.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Ut.copy(dt.boundingSphere.center)),Ut.applyMatrix4(A.matrixWorld).applyMatrix4(Q)),Array.isArray(yt)){const pt=dt.groups;for(let Pt=0,Ft=pt.length;Pt<Ft;Pt++){const Rt=pt[Pt],Zt=yt[Rt.materialIndex];Zt&&Zt.visible&&g.push(A,dt,Zt,z,Ut.z,Rt)}}else yt.visible&&g.push(A,dt,yt,z,Ut.z,null)}}const nt=A.children;for(let dt=0,yt=nt.length;dt<yt;dt++)fc(nt[dt],D,z,V)}function ch(A,D,z,V){const F=A.opaque,nt=A.transmissive,dt=A.transparent;p.setupLightsView(z),Jt===!0&&at.setGlobalState(x.clippingPlanes,z),V&&vt.viewport(R.copy(V)),F.length>0&&wr(F,D,z),nt.length>0&&wr(nt,D,z),dt.length>0&&wr(dt,D,z),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function lh(A,D,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new So(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?vr:ni,minFilter:mo,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const nt=p.state.transmissionRenderTarget[V.id],dt=V.viewport||R;nt.setSize(dt.z*x.transmissionResolutionScale,dt.w*x.transmissionResolutionScale);const yt=x.getRenderTarget(),pt=x.getActiveCubeFace(),Pt=x.getActiveMipmapLevel();x.setRenderTarget(nt),x.getClearColor(k),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),te&&bt.render(z);const Ft=x.toneMapping;x.toneMapping=zi;const Rt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),Jt===!0&&at.setGlobalState(x.clippingPlanes,V),wr(A,z,V),Xt.updateMultisampleRenderTarget(nt),Xt.updateRenderTargetMipmap(nt),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let he=0,Oe=D.length;he<Oe;he++){const Ee=D[he],_e=Ee.object,It=Ee.geometry,we=Ee.material,ie=Ee.group;if(we.side===pi&&_e.layers.test(V.layers)){const fn=we.side;we.side=rn,we.needsUpdate=!0,uh(_e,z,V,It,we,ie),we.side=fn,we.needsUpdate=!0,Zt=!0}}Zt===!0&&(Xt.updateMultisampleRenderTarget(nt),Xt.updateRenderTargetMipmap(nt))}x.setRenderTarget(yt,pt,Pt),x.setClearColor(k,G),Rt!==void 0&&(V.viewport=Rt),x.toneMapping=Ft}function wr(A,D,z){const V=D.isScene===!0?D.overrideMaterial:null;for(let F=0,nt=A.length;F<nt;F++){const dt=A[F],yt=dt.object,pt=dt.geometry,Pt=dt.group;let Ft=dt.material;Ft.allowOverride===!0&&V!==null&&(Ft=V),yt.layers.test(z.layers)&&uh(yt,D,z,pt,Ft,Pt)}}function uh(A,D,z,V,F,nt){A.onBeforeRender(x,D,z,V,F,nt),A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.onBeforeRender(x,D,z,V,A,nt),F.transparent===!0&&F.side===pi&&F.forceSinglePass===!1?(F.side=rn,F.needsUpdate=!0,x.renderBufferDirect(z,D,V,F,A,nt),F.side=$i,F.needsUpdate=!0,x.renderBufferDirect(z,D,V,F,A,nt),F.side=pi):x.renderBufferDirect(z,D,V,F,A,nt),A.onAfterRender(x,D,z,V,F,nt)}function Rr(A,D,z){D.isScene!==!0&&(D=wt);const V=Mt.get(A),F=p.state.lights,nt=p.state.shadowsArray,dt=F.state.version,yt=q.getParameters(A,F.state,nt,D,z),pt=q.getProgramCacheKey(yt);let Pt=V.programs;V.environment=A.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(A.isMeshStandardMaterial?Le:$e).get(A.envMap||V.environment),V.envMapRotation=V.environment!==null&&A.envMap===null?D.environmentRotation:A.envMapRotation,Pt===void 0&&(A.addEventListener("dispose",Z),Pt=new Map,V.programs=Pt);let Ft=Pt.get(pt);if(Ft!==void 0){if(V.currentProgram===Ft&&V.lightsStateVersion===dt)return dh(A,yt),Ft}else yt.uniforms=q.getUniforms(A),A.onBeforeCompile(yt,x),Ft=q.acquireProgram(yt,pt),Pt.set(pt,Ft),V.uniforms=yt.uniforms;const Rt=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Rt.clippingPlanes=at.uniform),dh(A,yt),V.needsLights=ng(A),V.lightsStateVersion=dt,V.needsLights&&(Rt.ambientLightColor.value=F.state.ambient,Rt.lightProbe.value=F.state.probe,Rt.directionalLights.value=F.state.directional,Rt.directionalLightShadows.value=F.state.directionalShadow,Rt.spotLights.value=F.state.spot,Rt.spotLightShadows.value=F.state.spotShadow,Rt.rectAreaLights.value=F.state.rectArea,Rt.ltc_1.value=F.state.rectAreaLTC1,Rt.ltc_2.value=F.state.rectAreaLTC2,Rt.pointLights.value=F.state.point,Rt.pointLightShadows.value=F.state.pointShadow,Rt.hemisphereLights.value=F.state.hemi,Rt.directionalShadowMap.value=F.state.directionalShadowMap,Rt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Rt.spotShadowMap.value=F.state.spotShadowMap,Rt.spotLightMatrix.value=F.state.spotLightMatrix,Rt.spotLightMap.value=F.state.spotLightMap,Rt.pointShadowMap.value=F.state.pointShadowMap,Rt.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Ft,V.uniformsList=null,Ft}function hh(A){if(A.uniformsList===null){const D=A.currentProgram.getUniforms();A.uniformsList=fa.seqWithValue(D.seq,A.uniforms)}return A.uniformsList}function dh(A,D){const z=Mt.get(A);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function tg(A,D,z,V,F){D.isScene!==!0&&(D=wt),Xt.resetTextureUnits();const nt=D.fog,dt=V.isMeshStandardMaterial?D.environment:null,yt=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:vs,pt=(V.isMeshStandardMaterial?Le:$e).get(V.envMap||dt),Pt=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ft=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Rt=!!z.morphAttributes.position,Zt=!!z.morphAttributes.normal,he=!!z.morphAttributes.color;let Oe=zi;V.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Oe=x.toneMapping);const Ee=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,_e=Ee!==void 0?Ee.length:0,It=Mt.get(V),we=p.state.lights;if(Jt===!0&&(X===!0||A!==C)){const nn=A===C&&V.id===S;at.setState(V,A,nn)}let ie=!1;V.version===It.__version?(It.needsLights&&It.lightsStateVersion!==we.state.version||It.outputColorSpace!==yt||F.isBatchedMesh&&It.batching===!1||!F.isBatchedMesh&&It.batching===!0||F.isBatchedMesh&&It.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&It.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&It.instancing===!1||!F.isInstancedMesh&&It.instancing===!0||F.isSkinnedMesh&&It.skinning===!1||!F.isSkinnedMesh&&It.skinning===!0||F.isInstancedMesh&&It.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&It.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&It.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&It.instancingMorph===!1&&F.morphTexture!==null||It.envMap!==pt||V.fog===!0&&It.fog!==nt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==at.numPlanes||It.numIntersection!==at.numIntersection)||It.vertexAlphas!==Pt||It.vertexTangents!==Ft||It.morphTargets!==Rt||It.morphNormals!==Zt||It.morphColors!==he||It.toneMapping!==Oe||It.morphTargetsCount!==_e)&&(ie=!0):(ie=!0,It.__version=V.version);let fn=It.currentProgram;ie===!0&&(fn=Rr(V,D,F));let Io=!1,pn=!1,Ls=!1;const Re=fn.getUniforms(),xn=It.uniforms;if(vt.useProgram(fn.program)&&(Io=!0,pn=!0,Ls=!0),V.id!==S&&(S=V.id,pn=!0),Io||C!==A){vt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Re.setValue(I,"projectionMatrix",A.projectionMatrix),Re.setValue(I,"viewMatrix",A.matrixWorldInverse);const ln=Re.map.cameraPosition;ln!==void 0&&ln.setValue(I,_t.setFromMatrixPosition(A.matrixWorld)),Dt.logarithmicDepthBuffer&&Re.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Re.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,pn=!0,Ls=!0)}if(F.isSkinnedMesh){Re.setOptional(I,F,"bindMatrix"),Re.setOptional(I,F,"bindMatrixInverse");const nn=F.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Re.setValue(I,"boneTexture",nn.boneTexture,Xt))}F.isBatchedMesh&&(Re.setOptional(I,F,"batchingTexture"),Re.setValue(I,"batchingTexture",F._matricesTexture,Xt),Re.setOptional(I,F,"batchingIdTexture"),Re.setValue(I,"batchingIdTexture",F._indirectTexture,Xt),Re.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&Re.setValue(I,"batchingColorTexture",F._colorsTexture,Xt));const vn=z.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&it.update(F,z,fn),(pn||It.receiveShadow!==F.receiveShadow)&&(It.receiveShadow=F.receiveShadow,Re.setValue(I,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(xn.envMap.value=pt,xn.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&D.environment!==null&&(xn.envMapIntensity.value=D.environmentIntensity),pn&&(Re.setValue(I,"toneMappingExposure",x.toneMappingExposure),It.needsLights&&eg(xn,Ls),nt&&V.fog===!0&&J.refreshFogUniforms(xn,nt),J.refreshMaterialUniforms(xn,V,W,K,p.state.transmissionRenderTarget[A.id]),fa.upload(I,hh(It),xn,Xt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(fa.upload(I,hh(It),xn,Xt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Re.setValue(I,"center",F.center),Re.setValue(I,"modelViewMatrix",F.modelViewMatrix),Re.setValue(I,"normalMatrix",F.normalMatrix),Re.setValue(I,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const nn=V.uniformsGroups;for(let ln=0,pc=nn.length;ln<pc;ln++){const eo=nn[ln];Gt.update(eo,fn),Gt.bind(eo,fn)}}return fn}function eg(A,D){A.ambientLightColor.needsUpdate=D,A.lightProbe.needsUpdate=D,A.directionalLights.needsUpdate=D,A.directionalLightShadows.needsUpdate=D,A.pointLights.needsUpdate=D,A.pointLightShadows.needsUpdate=D,A.spotLights.needsUpdate=D,A.spotLightShadows.needsUpdate=D,A.rectAreaLights.needsUpdate=D,A.hemisphereLights.needsUpdate=D}function ng(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,D,z){const V=Mt.get(A);V.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Mt.get(A.texture).__webglTexture=D,Mt.get(A.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,D){const z=Mt.get(A);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0};const ig=I.createFramebuffer();this.setRenderTarget=function(A,D=0,z=0){w=A,v=D,b=z;let V=!0,F=null,nt=!1,dt=!1;if(A){const pt=Mt.get(A);if(pt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(pt.__webglFramebuffer===void 0)Xt.setupRenderTarget(A);else if(pt.__hasExternalTextures)Xt.rebindTextures(A,Mt.get(A.texture).__webglTexture,Mt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Rt=A.depthTexture;if(pt.__boundDepthTexture!==Rt){if(Rt!==null&&Mt.has(Rt)&&(A.width!==Rt.image.width||A.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Xt.setupDepthRenderbuffer(A)}}const Pt=A.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(dt=!0);const Ft=Mt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ft[D])?F=Ft[D][z]:F=Ft[D],nt=!0):A.samples>0&&Xt.useMultisampledRTT(A)===!1?F=Mt.get(A).__webglMultisampledFramebuffer:Array.isArray(Ft)?F=Ft[z]:F=Ft,R.copy(A.viewport),L.copy(A.scissor),B=A.scissorTest}else R.copy(At).multiplyScalar(W).floor(),L.copy(kt).multiplyScalar(W).floor(),B=le;if(z!==0&&(F=ig),vt.bindFramebuffer(I.FRAMEBUFFER,F)&&V&&vt.drawBuffers(A,F),vt.viewport(R),vt.scissor(L),vt.setScissorTest(B),nt){const pt=Mt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,pt.__webglTexture,z)}else if(dt){const pt=D;for(let Pt=0;Pt<A.textures.length;Pt++){const Ft=Mt.get(A.textures[Pt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Pt,Ft.__webglTexture,z,pt)}}else if(A!==null&&z!==0){const pt=Mt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pt.__webglTexture,z)}S=-1},this.readRenderTargetPixels=function(A,D,z,V,F,nt,dt,yt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=Mt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&dt!==void 0&&(pt=pt[dt]),pt){vt.bindFramebuffer(I.FRAMEBUFFER,pt);try{const Pt=A.textures[yt],Ft=Pt.format,Rt=Pt.type;if(!Dt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=A.width-V&&z>=0&&z<=A.height-F&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+yt),I.readPixels(D,z,V,F,Et.convert(Ft),Et.convert(Rt),nt))}finally{const Pt=w!==null?Mt.get(w).__webglFramebuffer:null;vt.bindFramebuffer(I.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(A,D,z,V,F,nt,dt,yt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=Mt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&dt!==void 0&&(pt=pt[dt]),pt)if(D>=0&&D<=A.width-V&&z>=0&&z<=A.height-F){vt.bindFramebuffer(I.FRAMEBUFFER,pt);const Pt=A.textures[yt],Ft=Pt.format,Rt=Pt.type;if(!Dt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Zt),I.bufferData(I.PIXEL_PACK_BUFFER,nt.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+yt),I.readPixels(D,z,V,F,Et.convert(Ft),Et.convert(Rt),0);const he=w!==null?Mt.get(w).__webglFramebuffer:null;vt.bindFramebuffer(I.FRAMEBUFFER,he);const Oe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await n0(I,Oe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Zt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,nt),I.deleteBuffer(Zt),I.deleteSync(Oe),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,D=null,z=0){const V=Math.pow(2,-z),F=Math.floor(A.image.width*V),nt=Math.floor(A.image.height*V),dt=D!==null?D.x:0,yt=D!==null?D.y:0;Xt.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,dt,yt,F,nt),vt.unbindTexture()};const og=I.createFramebuffer(),sg=I.createFramebuffer();this.copyTextureToTexture=function(A,D,z=null,V=null,F=0,nt=null){nt===null&&(F!==0?(dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=F,F=0):nt=0);let dt,yt,pt,Pt,Ft,Rt,Zt,he,Oe;const Ee=A.isCompressedTexture?A.mipmaps[nt]:A.image;if(z!==null)dt=z.max.x-z.min.x,yt=z.max.y-z.min.y,pt=z.isBox3?z.max.z-z.min.z:1,Pt=z.min.x,Ft=z.min.y,Rt=z.isBox3?z.min.z:0;else{const vn=Math.pow(2,-F);dt=Math.floor(Ee.width*vn),yt=Math.floor(Ee.height*vn),A.isDataArrayTexture?pt=Ee.depth:A.isData3DTexture?pt=Math.floor(Ee.depth*vn):pt=1,Pt=0,Ft=0,Rt=0}V!==null?(Zt=V.x,he=V.y,Oe=V.z):(Zt=0,he=0,Oe=0);const _e=Et.convert(D.format),It=Et.convert(D.type);let we;D.isData3DTexture?(Xt.setTexture3D(D,0),we=I.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Xt.setTexture2DArray(D,0),we=I.TEXTURE_2D_ARRAY):(Xt.setTexture2D(D,0),we=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);const ie=I.getParameter(I.UNPACK_ROW_LENGTH),fn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Io=I.getParameter(I.UNPACK_SKIP_PIXELS),pn=I.getParameter(I.UNPACK_SKIP_ROWS),Ls=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ee.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ee.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Pt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ft),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Rt);const Re=A.isDataArrayTexture||A.isData3DTexture,xn=D.isDataArrayTexture||D.isData3DTexture;if(A.isDepthTexture){const vn=Mt.get(A),nn=Mt.get(D),ln=Mt.get(vn.__renderTarget),pc=Mt.get(nn.__renderTarget);vt.bindFramebuffer(I.READ_FRAMEBUFFER,ln.__webglFramebuffer),vt.bindFramebuffer(I.DRAW_FRAMEBUFFER,pc.__webglFramebuffer);for(let eo=0;eo<pt;eo++)Re&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.get(A).__webglTexture,F,Rt+eo),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.get(D).__webglTexture,nt,Oe+eo)),I.blitFramebuffer(Pt,Ft,dt,yt,Zt,he,dt,yt,I.DEPTH_BUFFER_BIT,I.NEAREST);vt.bindFramebuffer(I.READ_FRAMEBUFFER,null),vt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(F!==0||A.isRenderTargetTexture||Mt.has(A)){const vn=Mt.get(A),nn=Mt.get(D);vt.bindFramebuffer(I.READ_FRAMEBUFFER,og),vt.bindFramebuffer(I.DRAW_FRAMEBUFFER,sg);for(let ln=0;ln<pt;ln++)Re?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,vn.__webglTexture,F,Rt+ln):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,vn.__webglTexture,F),xn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,nn.__webglTexture,nt,Oe+ln):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,nn.__webglTexture,nt),F!==0?I.blitFramebuffer(Pt,Ft,dt,yt,Zt,he,dt,yt,I.COLOR_BUFFER_BIT,I.NEAREST):xn?I.copyTexSubImage3D(we,nt,Zt,he,Oe+ln,Pt,Ft,dt,yt):I.copyTexSubImage2D(we,nt,Zt,he,Pt,Ft,dt,yt);vt.bindFramebuffer(I.READ_FRAMEBUFFER,null),vt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else xn?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(we,nt,Zt,he,Oe,dt,yt,pt,_e,It,Ee.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(we,nt,Zt,he,Oe,dt,yt,pt,_e,Ee.data):I.texSubImage3D(we,nt,Zt,he,Oe,dt,yt,pt,_e,It,Ee):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,nt,Zt,he,dt,yt,_e,It,Ee.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,nt,Zt,he,Ee.width,Ee.height,_e,Ee.data):I.texSubImage2D(I.TEXTURE_2D,nt,Zt,he,dt,yt,_e,It,Ee);I.pixelStorei(I.UNPACK_ROW_LENGTH,ie),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Io),I.pixelStorei(I.UNPACK_SKIP_ROWS,pn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ls),nt===0&&D.generateMipmaps&&I.generateMipmap(we),vt.unbindTexture()},this.initRenderTarget=function(A){Mt.get(A).__webglFramebuffer===void 0&&Xt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Xt.setTextureCube(A,0):A.isData3DTexture?Xt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Xt.setTexture2DArray(A,0):Xt.setTexture2D(A,0),vt.unbindTexture()},this.resetState=function(){v=0,b=0,w=null,vt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}const Sd={type:"change"},wu={type:"start"},Yf={type:"end"},oa=new Ka,bd=new fi,T1=Math.cos(70*t0.DEG2RAD),Ue=new P,un=2*Math.PI,pe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jc=1e-6;class w1 extends G0{constructor(t,e=null){super(t,e),this.state=pe.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cs.ROTATE,MIDDLE:cs.DOLLY,RIGHT:cs.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Si,this._lastTargetPosition=new P,this._quat=new Si().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Kh,this._sphericalDelta=new Kh,this._scale=1,this._panOffset=new P,this._rotateStart=new Ot,this._rotateEnd=new Ot,this._rotateDelta=new Ot,this._panStart=new Ot,this._panEnd=new Ot,this._panDelta=new Ot,this._dollyStart=new Ot,this._dollyEnd=new Ot,this._dollyDelta=new Ot,this._dollyDirection=new P,this._mouse=new Ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=O1.bind(this),this._onPointerDown=R1.bind(this),this._onPointerUp=I1.bind(this),this._onContextMenu=U1.bind(this),this._onMouseWheel=N1.bind(this),this._onKeyDown=D1.bind(this),this._onTouchStart=F1.bind(this),this._onTouchMove=H1.bind(this),this._onMouseDown=P1.bind(this),this._onMouseMove=L1.bind(this),this._interceptControlDown=B1.bind(this),this._interceptControlUp=k1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sd),this.update(),this.state=pe.NONE}update(t=null){const e=this.object.position;Ue.copy(e).sub(this.target),Ue.applyQuaternion(this._quat),this._spherical.setFromVector3(Ue),this.autoRotate&&this.state===pe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(i)&&isFinite(o)&&(i<-Math.PI?i+=un:i>Math.PI&&(i-=un),o<-Math.PI?o+=un:o>Math.PI&&(o-=un),i<=o?this._spherical.theta=Math.max(i,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+o)/2?Math.max(i,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=r!=this._spherical.radius}if(Ue.setFromSpherical(this._spherical),Ue.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ue),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Ue.length();r=this._clampDistance(a*this._scale);const c=a-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=Ue.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(oa.origin.copy(this.object.position),oa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(oa.direction))<T1?this.object.lookAt(this.target):(bd.setFromNormalAndCoplanarPoint(this.object.up,this.target),oa.intersectPlane(bd,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>jc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jc||this._lastTargetPosition.distanceToSquared(this.target)>jc?(this.dispatchEvent(Sd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?un/60*this.autoRotateSpeed*t:un/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ue.setFromMatrixColumn(e,0),Ue.multiplyScalar(-t),this._panOffset.add(Ue)}_panUp(t,e){this.screenSpacePanning===!0?Ue.setFromMatrixColumn(e,1):(Ue.setFromMatrixColumn(e,0),Ue.crossVectors(this.object.up,Ue)),Ue.multiplyScalar(t),this._panOffset.add(Ue)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Ue.copy(o).sub(this.target);let s=Ue.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),o=t-i.left,s=e-i.top,r=i.width,a=i.height;this._mouse.x=o/r*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(un*this._rotateDelta.x/e.clientHeight),this._rotateUp(un*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),o=.5*(t.pageY+e.y);this._rotateStart.set(i,o)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),o=.5*(t.pageY+e.y);this._panStart.set(i,o)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,o=t.pageY-e.y,s=Math.sqrt(i*i+o*o);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),o=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(o,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(un*this._rotateDelta.x/e.clientHeight),this._rotateUp(un*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),o=.5*(t.pageY+e.y);this._panEnd.set(i,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,o=t.pageY-e.y,s=Math.sqrt(i*i+o*o);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ot,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function R1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function O1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function I1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Yf),this.state=pe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function P1(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case cs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=pe.DOLLY;break;case cs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pe.ROTATE}break;case cs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pe.PAN}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(wu)}function L1(n){switch(this.state){case pe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case pe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function N1(n){this.enabled===!1||this.enableZoom===!1||this.state!==pe.NONE||(n.preventDefault(),this.dispatchEvent(wu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Yf))}function D1(n){this.enabled!==!1&&this._handleKeyDown(n)}function F1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ns.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=pe.TOUCH_ROTATE;break;case ns.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=pe.TOUCH_PAN;break;default:this.state=pe.NONE}break;case 2:switch(this.touches.TWO){case ns.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=pe.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=pe.TOUCH_DOLLY_ROTATE;break;default:this.state=pe.NONE}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(wu)}function H1(n){switch(this._trackPointer(n),this.state){case pe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case pe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case pe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case pe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=pe.NONE}}function U1(n){this.enabled!==!1&&n.preventDefault()}function B1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function k1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const z1=[[1,"H","Hydrogen",1.008,"nonmetal",2.2,1,1,null,31,"FFFFFF"],[2,"He","Helium",4.003,"noble",null,0,0,null,28,"D9FFFF"],[3,"Li","Lithium",6.94,"alkali",.98,1,0,[1],128,"CC80FF"],[4,"Be","Beryllium",9.012,"alkaline",1.57,4,0,[2],96,"C2FF00"],[5,"B","Boron",10.81,"metalloid",2.04,4,3,null,84,"FFB5B5"],[6,"C","Carbon",12.011,"nonmetal",2.55,4,4,null,76,"909090"],[7,"N","Nitrogen",14.007,"nonmetal",3.04,4,3,null,71,"3050F8"],[8,"O","Oxygen",15.999,"nonmetal",3.44,3,2,null,66,"FF0D0D"],[9,"F","Fluorine",18.998,"halogen",3.98,1,1,null,57,"90E050"],[10,"Ne","Neon",20.18,"noble",null,0,0,null,58,"B3E3F5"],[11,"Na","Sodium",22.99,"alkali",.93,1,0,[1],166,"AB5CF2"],[12,"Mg","Magnesium",24.305,"alkaline",1.31,2,0,[2],141,"8AFF00"],[13,"Al","Aluminium",26.982,"post",1.61,4,0,[3],121,"BFA6A6"],[14,"Si","Silicon",28.085,"metalloid",1.9,6,4,null,111,"F0C8A0"],[15,"P","Phosphorus",30.974,"nonmetal",2.19,6,3,null,107,"FF8000"],[16,"S","Sulfur",32.06,"nonmetal",2.58,6,2,null,105,"FFFF30"],[17,"Cl","Chlorine",35.45,"halogen",3.16,7,1,null,102,"1FF01F"],[18,"Ar","Argon",39.948,"noble",null,0,0,null,106,"80D1E3"],[19,"K","Potassium",39.098,"alkali",.82,1,0,[1],203,"8F40D4"],[20,"Ca","Calcium",40.078,"alkaline",1,2,0,[2],176,"3DFF00"],[21,"Sc","Scandium",44.956,"transition",1.36,3,0,[3],170,"E6E6E6"],[22,"Ti","Titanium",47.867,"transition",1.54,4,0,[4,3],160,"BFC2C7"],[23,"V","Vanadium",50.942,"transition",1.63,5,0,[5,4,3],153,"A6A6AB"],[24,"Cr","Chromium",51.996,"transition",1.66,6,0,[3,6],139,"8A99C7"],[25,"Mn","Manganese",54.938,"transition",1.55,7,0,[2,7,4],145,"9C7AC7"],[26,"Fe","Iron",55.845,"transition",1.83,6,0,[2,3],140,"E06633"],[27,"Co","Cobalt",58.933,"transition",1.88,5,0,[2,3],126,"F090A0"],[28,"Ni","Nickel",58.693,"transition",1.91,4,0,[2,3],124,"50D050"],[29,"Cu","Copper",63.546,"transition",1.9,4,0,[2,1],132,"C88033"],[30,"Zn","Zinc",65.38,"transition",1.65,2,0,[2],122,"7D80B0"],[31,"Ga","Gallium",69.723,"post",1.81,4,0,[3],122,"C28F8F"],[32,"Ge","Germanium",72.63,"metalloid",2.01,6,4,null,120,"668F8F"],[33,"As","Arsenic",74.922,"metalloid",2.18,6,3,null,119,"BD80E3"],[34,"Se","Selenium",78.971,"nonmetal",2.55,6,2,null,120,"FFA100"],[35,"Br","Bromine",79.904,"halogen",2.96,7,1,null,120,"A62929"],[36,"Kr","Krypton",83.798,"noble",3,2,0,null,116,"5CB8D1"],[37,"Rb","Rubidium",85.468,"alkali",.82,1,0,[1],220,"702EB0"],[38,"Sr","Strontium",87.62,"alkaline",.95,2,0,[2],195,"00FF00"],[39,"Y","Yttrium",88.906,"transition",1.22,3,0,[3],190,"94FFFF"],[40,"Zr","Zirconium",91.224,"transition",1.33,4,0,[4],175,"94E0E0"],[41,"Nb","Niobium",92.906,"transition",1.6,5,0,[5],164,"73C2C9"],[42,"Mo","Molybdenum",95.95,"transition",2.16,6,0,[6,4],154,"54B5B5"],[43,"Tc","Technetium",98,"transition",1.9,7,0,[7],147,"3B9E9E"],[44,"Ru","Ruthenium",101.07,"transition",2.2,8,0,[3,4],146,"248F8F"],[45,"Rh","Rhodium",102.91,"transition",2.28,6,0,[3],142,"0A7D8C"],[46,"Pd","Palladium",106.42,"transition",2.2,4,0,[2,4],139,"006985"],[47,"Ag","Silver",107.87,"transition",1.93,3,0,[1],145,"C0C0C0"],[48,"Cd","Cadmium",112.41,"transition",1.69,2,0,[2],144,"FFD98F"],[49,"In","Indium",114.82,"post",1.78,3,0,[3,1],142,"A67573"],[50,"Sn","Tin",118.71,"post",1.96,4,0,[4,2],139,"668080"],[51,"Sb","Antimony",121.76,"metalloid",2.05,6,3,null,139,"9E63B5"],[52,"Te","Tellurium",127.6,"metalloid",2.1,6,2,null,138,"D47A00"],[53,"I","Iodine",126.9,"halogen",2.66,7,1,null,139,"940094"],[54,"Xe","Xenon",131.29,"noble",2.6,6,0,null,140,"429EB0"],[55,"Cs","Caesium",132.91,"alkali",.79,1,0,[1],244,"57178F"],[56,"Ba","Barium",137.33,"alkaline",.89,2,0,[2],215,"00C900"],[57,"La","Lanthanum",138.91,"lanthanide",1.1,3,0,[3],207,"70D4FF"],[58,"Ce","Cerium",140.12,"lanthanide",1.12,4,0,[3,4],204,"FFFC00"],[59,"Pr","Praseodymium",140.91,"lanthanide",1.13,4,0,[3],203,"D9FFC9"],[60,"Nd","Neodymium",144.24,"lanthanide",1.14,3,0,[3],201,"C7FFC7"],[61,"Pm","Promethium",145,"lanthanide",1.13,3,0,[3],199,"A3FFC7"],[62,"Sm","Samarium",150.36,"lanthanide",1.17,3,0,[3,2],198,"8FFFC7"],[63,"Eu","Europium",151.96,"lanthanide",1.2,3,0,[3,2],198,"61FFC7"],[64,"Gd","Gadolinium",157.25,"lanthanide",1.2,3,0,[3],196,"45FFC7"],[65,"Tb","Terbium",158.93,"lanthanide",1.2,4,0,[3,4],194,"30FFC7"],[66,"Dy","Dysprosium",162.5,"lanthanide",1.22,3,0,[3],192,"1FFFC9"],[67,"Ho","Holmium",164.93,"lanthanide",1.23,3,0,[3],192,"00FFC4"],[68,"Er","Erbium",167.26,"lanthanide",1.24,3,0,[3],189,"00E675"],[69,"Tm","Thulium",168.93,"lanthanide",1.25,3,0,[3,2],190,"00D452"],[70,"Yb","Ytterbium",173.05,"lanthanide",1.1,3,0,[3,2],187,"00BF38"],[71,"Lu","Lutetium",174.97,"lanthanide",1.27,3,0,[3],187,"00AB24"],[72,"Hf","Hafnium",178.49,"transition",1.3,4,0,[4],175,"4DC2FF"],[73,"Ta","Tantalum",180.95,"transition",1.5,5,0,[5],170,"4DA6FF"],[74,"W","Tungsten",183.84,"transition",2.36,6,0,[6,4],162,"2194D6"],[75,"Re","Rhenium",186.21,"transition",1.9,7,0,[7,4],159,"267DAB"],[76,"Os","Osmium",190.23,"transition",2.2,8,0,[8,4],159,"266696"],[77,"Ir","Iridium",192.22,"transition",2.2,6,0,[3,4],141,"175487"],[78,"Pt","Platinum",195.08,"transition",2.28,4,0,[4,2],136,"D0D0E0"],[79,"Au","Gold",196.97,"transition",2.54,5,0,[3,1],136,"FFD123"],[80,"Hg","Mercury",200.59,"transition",2,2,0,[2,1],132,"B8B8D0"],[81,"Tl","Thallium",204.38,"post",1.62,3,0,[1,3],145,"A6544D"],[82,"Pb","Lead",207.2,"post",2.33,4,0,[2,4],146,"575961"],[83,"Bi","Bismuth",208.98,"post",2.02,5,0,[3],148,"9E4B62"],[84,"Po","Polonium",209,"post",2,6,2,[4,2],140,"AB0C00"],[85,"At","Astatine",210,"halogen",2.2,7,1,null,150,"754F45"],[86,"Rn","Radon",222,"noble",2.2,2,0,null,150,"428296"],[87,"Fr","Francium",223,"alkali",.7,1,0,[1],260,"420066"],[88,"Ra","Radium",226,"alkaline",.9,2,0,[2],221,"007D00"],[89,"Ac","Actinium",227,"actinide",1.1,3,0,[3],215,"00ABFF"],[90,"Th","Thorium",232.04,"actinide",1.3,4,0,[4],206,"008AFF"],[91,"Pa","Protactinium",231.04,"actinide",1.5,5,0,[5],200,"00A1FF"],[92,"U","Uranium",238.03,"actinide",1.38,6,0,[6,4],196,"008FFF"],[93,"Np","Neptunium",237,"actinide",1.36,6,0,[5,4],190,"0080FF"],[94,"Pu","Plutonium",244,"actinide",1.28,6,0,[4,6],187,"006BFF"],[95,"Am","Americium",243,"actinide",1.13,6,0,[3,2],180,"545CF2"],[96,"Cm","Curium",247,"actinide",1.28,4,0,[3],169,"785CE3"],[97,"Bk","Berkelium",247,"actinide",1.3,4,0,[3,4],170,"8A4FE3"],[98,"Cf","Californium",251,"actinide",1.3,4,0,[3],190,"A136DA"],[99,"Es","Einsteinium",252,"actinide",1.3,3,0,[3],190,"B31BDA"],[100,"Fm","Fermium",257,"actinide",1.3,3,0,[3],190,"B31BBA"],[101,"Md","Mendelevium",258,"actinide",1.3,3,0,[3],190,"B30DA6"],[102,"No","Nobelium",259,"actinide",1.3,3,0,[2,3],190,"E006A0"],[103,"Lr","Lawrencium",266,"actinide",1.3,3,0,[3],190,"FF00CC"],[104,"Rf","Rutherfordium",267,"transition",null,4,0,[4],160,"CC0080"],[105,"Db","Dubnium",268,"transition",null,5,0,[5],160,"D6004D"],[106,"Sg","Seaborgium",269,"transition",null,6,0,[6],160,"C20000"],[107,"Bh","Bohrium",270,"transition",null,7,0,[7],160,"B60000"],[108,"Hs","Hassium",269,"transition",null,8,0,[8],160,"9E0000"],[109,"Mt","Meitnerium",278,"transition",null,6,0,[6],160,"820000"],[110,"Ds","Darmstadtium",281,"transition",null,6,0,[6],160,"75007D"],[111,"Rg","Roentgenium",282,"transition",null,6,0,[6],160,"660054"],[112,"Cn","Copernicium",285,"transition",null,2,0,[2],160,"5C004A"],[113,"Nh","Nihonium",286,"post",null,3,0,[1],170,"510A44"],[114,"Fl","Flerovium",289,"post",null,4,0,[2],180,"460D3B"],[115,"Mc","Moscovium",290,"post",null,3,0,[1,3],180,"3D1140"],[116,"Lv","Livermorium",293,"post",null,4,0,[2],180,"341244"],[117,"Ts","Tennessine",294,"halogen",null,3,1,null,180,"2A0B29"],[118,"Og","Oganesson",294,"noble",null,0,0,null,180,"1B0419"]],Hn=z1.map(([n,t,e,i,o,s,r,a,c,l,h])=>({z:n,sym:t,name:e,mass:i,cat:o,en:s,maxBonds:r,anionCharge:a,charges:c,radius:l,color:"#"+h,valenceElectrons:V1(n)}));function V1(n){if(n===1)return 1;if(n===2)return 2;const t={3:1,4:2,5:3,6:4,7:5,8:6,9:7,10:8,11:1,12:2,13:3,14:4,15:5,16:6,17:7,18:8};if(t[n])return t[n];const e=Kf(n);return e>=13&&e<=18?e-10:0}function Kf(n){return n===1?1:n===2?18:n>=3&&n<=4?n-2:n>=5&&n<=10?n+8:n>=11&&n<=12?n-10:n>=13&&n<=18?n:n>=19&&n<=20||n>=21&&n<=30||n>=31&&n<=36?n-18:n>=37&&n<=38||n>=39&&n<=48||n>=49&&n<=54?n-36:n>=55&&n<=56?n-54:n>=72&&n<=80||n>=81&&n<=86?n-68:n>=87&&n<=88?n-86:n>=104&&n<=112||n>=113&&n<=118?n-100:3}function G1(n){return n<=2?1:n<=10?2:n<=18?3:n<=36?4:n<=54?5:n<=86?6:7}function W1(n){if(n>=57&&n<=71)return{col:n-57+3,row:9};if(n>=89&&n<=103)return{col:n-89+3,row:10};const t=G1(n);return{col:Kf(n),row:t}}const $1={alkali:"#ff8a80",alkaline:"#ffb74d",transition:"#ffd54f",post:"#aed581",metalloid:"#4db6ac",nonmetal:"#64b5f6",halogen:"#ba68c8",noble:"#f06292",lanthanide:"#f48fb1",actinide:"#ffab91",exotic:"#e040fb"},Zf=n=>["alkali","alkaline","transition","post","lanthanide","actinide"].includes(n),xe=n=>Zf(n.cat),X1=new Set([36,54,86]),Ed=n=>n.cat==="noble"&&!X1.has(n.z),Cd=n=>n.sym==="F"||n.sym==="O";function ut(n){return Hn.find(t=>t.sym===n)}function Mi(n,t,e){return[...t.values()].filter(i=>i.a===e||i.b===e)}function hs(n,t,e){return Mi(n,t,e).filter(i=>!i.ionic).reduce((i,o)=>i+o.order,0)}function Ui(n,t,e){return Mi(n,t,e).filter(i=>i.ionic).reduce((i,o)=>i+o.order,0)}function wa(n,t){return n.a===t?n.b:n.a}function fr(n,t,e){const i=n.valenceElectrons+e-t;return i<0||i%2!==0?"parity":n.z<=10&&t+i/2>4?"octet":null}function Jf(n,t,e){for(let i=e;i<=n.anionCharge;i++)if(!fr(n,t,i))return!0;return!1}function q1(n,t,e,i){const o=n.get(e),s=n.get(i);if(xe(o.el)||xe(s.el))return xe(o.el)&&xe(s.el)?{ok:!1,reason:{key:"chem.metalMetal"}}:{ok:!1,reason:{key:"chem.metalIonic"}};if(Ed(o.el)||Ed(s.el))return{ok:!1,reason:{key:"chem.nobleNoCompound"}};if(o.el.cat==="noble"&&!Cd(s.el)||s.el.cat==="noble"&&!Cd(o.el))return{ok:!1,reason:{key:"chem.nobleOnlyFO"}};const r=a=>a.el.maxBonds-hs(n,t,a.id);if(r(o)<=0)return{ok:!1,reason:{key:"chem.noCapacity",p:{sym:o.el.sym,max:o.el.maxBonds}}};if(r(s)<=0)return{ok:!1,reason:{key:"chem.noCapacity",p:{sym:s.el.sym,max:s.el.maxBonds}}};for(const a of[o,s]){if(xe(a.el))continue;const c=Ui(n,t,a.id);if(!c)continue;const l=fr(a.el,hs(n,t,a.id)+1,c);if(l)return{ok:!1,reason:l==="octet"?{key:"chem.octet",p:{sym:a.el.sym}}:{key:"chem.anionClosedShare",p:{sym:a.el.sym,n:c,s:c>1?"s":""}}}}return{ok:!0,type:"covalent"}}function j1(n,t,e,i){const o=n.get(e),s=n.get(i),r=xe(o.el)?o:xe(s.el)?s:null,a=r?r===o?s:o:null;if(!r)return{ok:!1,reason:{key:"chem.ionicNeedMetal"}};if(a.el.cat==="noble")return{ok:!1,reason:{key:"chem.nobleNoCompound"}};const c=Math.max(...r.el.charges);if(Ui(n,t,r.id)>=c)return{ok:!1,reason:{key:"chem.metalMax",p:{sym:r.el.sym,max:c}}};if(!a.el.anionCharge)return{ok:!1,reason:{key:"chem.noAnion",p:{sym:a.el.sym}}};if(Ui(n,t,a.id)>=a.el.anionCharge)return{ok:!1,reason:{key:"chem.anionMax",p:{sym:a.el.sym,max:a.el.anionCharge}}};const l=hs(n,t,a.id),h=Ui(n,t,a.id)+1;return Jf(a.el,l,h)?{ok:!0,type:"ionic"}:{ok:!1,reason:fr(a.el,l,h)==="octet"?{key:"chem.octet",p:{sym:a.el.sym}}:{key:"chem.noLewisSharing",p:{sym:a.el.sym,n:l,s:l===1?"":"s"}}}}function ec(n,t,e,i){if(e===i)return{ok:!1,reason:{key:"chem.selfBond"}};if(Mi(n,t,e).some(r=>wa(r,e)===i))return{ok:!1,reason:{key:"chem.alreadyBonded"}};const o=q1(n,t,e,i);if(o.ok)return o;const s=j1(n,t,e,i);return s.ok?s:o.reason?.key&&!o.reason.key.startsWith("chem.metal")?o:s}const Ad=new Set(["F","Cl","Br","I","At"]),Td=new Set(["Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr"]);function Y1(n,t){if(Ad.has(n.sym)&&Ad.has(t.sym))return 1;if(n.sym==="O"&&t.sym==="O")return 2;const e=[n.sym,t.sym];return e.includes("O")&&e.includes("F")?1:Td.has(n.sym)&&Td.has(t.sym)?4:3}function Ru(n,t,e){if(e.order>=5)return{ok:!1,reason:{key:e.ionic?"chem.ionicMax4":"chem.quadrupleMax"}};if(e.ionic){const o=n.get(e.a),s=n.get(e.b),r=xe(o.el)?o:s,a=r===o?s:o,c=Math.max(...r.el.charges);if(Ui(n,t,r.id)+1>c)return{ok:!1,reason:{key:"chem.metalTransferMax",p:{sym:r.el.sym,max:c}}};if(Ui(n,t,a.id)+1>a.el.anionCharge)return{ok:!1,reason:{key:"chem.anionAcceptMax",p:{sym:a.el.sym,max:a.el.anionCharge}}};const l=hs(n,t,a.id),h=Ui(n,t,a.id)+1;return Jf(a.el,l,h)?{ok:!0}:{ok:!1,reason:fr(a.el,l,h)==="octet"?{key:"chem.octet",p:{sym:a.el.sym}}:{key:"chem.noLewisSharing",p:{sym:a.el.sym,n:l,s:l===1?"":"s"}}}}const i=Y1(n.get(e.a).el,n.get(e.b).el);if(e.order>i){const o=n.get(e.a).el.sym,s=n.get(e.b).el.sym;return{ok:!1,reason:i===1?{key:"chem.pairCapSingle",p:{a:o,b:s}}:i===2?{key:"chem.pairCapDouble",p:{a:o,b:s}}:{key:"chem.pairCapTriple",p:{a:o,b:s}}}}for(const o of[e.a,e.b]){const s=n.get(o);if(hs(n,t,o)+1>s.el.maxBonds)return{ok:!1,reason:{key:"chem.capacityMax",p:{sym:s.el.sym,max:s.el.maxBonds}}};if(xe(s.el))continue;const r=Ui(n,t,o);if(!r)continue;const a=fr(s.el,hs(n,t,o)+1,r);if(a==="parity")return{ok:!1,reason:{key:"chem.anionClosedShareMore",p:{sym:s.el.sym}}};if(a==="octet")return{ok:!1,reason:{key:"chem.octet",p:{sym:s.el.sym}}}}return{ok:!0}}function nc(n,t){const e=[],i=new Set;for(const o of n.keys()){if(i.has(o))continue;const s={atoms:[],bonds:[]},r=[o];for(i.add(o);r.length;){const a=r.pop();s.atoms.push(a);for(const c of Mi(n,t,a)){s.bonds.push(c);const l=wa(c,a);i.has(l)||(i.add(l),r.push(l))}}s.bonds=[...new Set(s.bonds)],e.push(s)}return e}function yo(n,t,e){return nc(n,t).find(i=>i.atoms.includes(e))}function K1(n,t,e,i=null){const o=new Map,s=[];let r=0,a=0,c=0;for(const m of e){const _=n.get(m),g=Mi(n,t,m),p=g.filter(S=>!S.ionic).reduce((S,C)=>S+C.order,0),y=g.filter(S=>S.ionic).reduce((S,C)=>S+C.order,0),M=g.length>0,x=xe(_.el),T=_.el.valenceElectrons;let v=0,b=0,w=0;if(x)v=0,b=y;else if(M){r+=T,a+=p,c+=y;const S=Math.ceil(Math.max(0,T+y-p)/2);w=_.el.z<=10?Math.max(0,Math.min(4-p,S)):S}else if(v=Math.floor(T/2),b=0,i!=null&&e.length===1){const S=(T-i)/2,C=_.el.z<=10?4:6;if(!Number.isInteger(S)||S<0||S>C)return{feasible:!1,reason:{key:"chem.lewis.charge"},charge:i};v=S,b=i}o.set(m,{lp:v,fc:b,ionU:y,covSum:p,sigma:g.length,cap:w,isMetal:x,bonded:M}),!x&&M&&s.push({id:m,cap:w,V:T,covSum:p,ionU:y,heavy:_.el.z>10,carbon:_.el.z===6,of:_.el.sym==="O"||_.el.sym==="F"})}const l=m=>{s.forEach((_,g)=>{o.get(_.id).lp=m[g],o.get(_.id).fc=_.V-2*m[g]-_.covSum})},h=(m,_)=>{const g=m.V-2*_-m.covSum;let p=Math.abs(g)+.01*_;return(m.heavy||m.carbon)&&_>0&&(p+=3*_),g>0&&m.of&&(p+=3),p},d=m=>{const _=s.length,g=new Map,p=(y,M)=>{if(y===_)return M===0?{score:0,lps:[]}:null;const x=y*4096+M;if(g.has(x))return g.get(x);let T=null;for(let v=0;v<=Math.min(s[y].cap,M);v++){const b=p(y+1,M-v);if(!b)continue;const w=b.score+h(s[y],v);(!T||w<T.score)&&(T={score:w,lps:[v,...b.lps]})}return g.set(x,T),T};return p(0,m)};if(i!=null){if(s.length===0)return[...o.values()].reduce((p,y)=>p+y.fc,0)===i?{feasible:!0,per:o,charge:i}:{feasible:!1,reason:{key:"chem.lewis.charge"},charge:i};const m=r+c-a-i;if(m%2!==0)return{feasible:!1,reason:{key:"chem.lewis.radical"},charge:i};if(m<0)return{feasible:!1,reason:{key:"chem.lewis.electrons"},charge:i};const _=d(m/2);return _?(l(_.lps),{feasible:!0,per:o,charge:i}):{feasible:!1,reason:{key:"chem.lewis.charge"},charge:i}}const u=r+c-a;let f=null;for(let m=0;m<=12&&!(f&&Math.abs(f.charge)<m);m++)for(const _ of m===0?[1]:[1,-1]){const g=u-_*m;if(g<0||g%2!==0)continue;const p=d(g/2);if(!p)continue;const y=[p.score,g/2];(!f||y<f.key)&&(f={sol:p,charge:_*m,key:y})}return f?(l(f.sol.lps),{feasible:!0,per:o,charge:f.charge}):{feasible:!0,per:o,charge:0}}function Z1(n,t,e,i=null){const o=K1(n,t,e.atoms,i),s=Q1(n,t,e.atoms,o.per),r=Qf(n,t,e.atoms);return{...o,formula:s,fingerprint:r}}const J1=new Set(["N"]);function $t(n){const t=new Map;for(const l of n)t.set(l.sym,(t.get(l.sym)||0)+1);const e=[...t.keys()],i=l=>l+(t.get(l)>1?t.get(l):"");if(e.length===1)return i(e[0]);if(t.has("C")){let l=i("C");return t.has("H")&&(l+=i("H")),l+=e.filter(h=>h!=="C"&&h!=="H").sort().map(i).join(""),l}const o=t.get("H")||0,s=t.get("O")||0,r=e.filter(l=>l!=="H"&&l!=="O"),a=new Set(["P","S","N","Cl","Br","I","C","B","Si","Ge","As","Sb","Te","Cr","Mn","V","W","Mo"]);if(o>0&&s>0&&r.length===1&&a.has(r[0]))return i("H")+i(r[0])+i("O");if(o>0&&r.length===1&&J1.has(r[0]))return i(r[0])+(o>1?`H${o}`:"H");if(o>0&&r.length===1&&(r[0]==="Te"||r[0]==="Po"||r[0]==="At"))return(o>1?`H${o}`:"H")+i(r[0]);if(o===1&&s===1&&e.length===2)return"OH";const c=l=>ut(l)?.en??0;return[...e].sort((l,h)=>c(l)-c(h)||(l<h?-1:1)).map(i).join("")}function Q1(n,t,e,i=new Map){const o=new Set(e),s=new Map(e.map(f=>[f,f])),r=f=>{let m=f;for(;s.get(m)!==m;)m=s.get(m);for(;s.get(f)!==m;){const _=s.get(f);s.set(f,m),f=_}return m};for(const f of t.values())f.ionic||!o.has(f.a)||!o.has(f.b)||s.set(r(f.a),r(f.b));const a=[],c=new Map;for(const f of e){const m=r(f);c.has(m)||(c.set(m,[]),a.push(c.get(m))),c.get(m).push(f)}if(a.length===1)return $t(e.map(f=>n.get(f).el));const l=new Map,h=new Map,d=[];for(const f of a){const m=$t(f.map(g=>n.get(g).el)),_=f.reduce((g,p)=>g+(i.get(p)?.fc??0),0);_>0?l.set(m,(l.get(m)||0)+1):_<0?h.set(m,(h.get(m)||0)+1):d.push(m)}const u=f=>[...f.entries()].map(([m,_])=>_===1?m:(m.match(/[A-Z][a-z]?\d*/g)||[]).length>1&&(/\d$/.test(m)||/H/.test(m))?`(${m})${_}`:m+_).join("");return u(l)+d.join("")+u(h)}function ei(n,t){if(t===0)return n;const e=Math.abs(t),i=String(e===1?"":e)+(t>0?"+":"−"),o={"+":"⁺","-":"⁻","−":"⁻",0:"⁰",1:"¹",2:"²",3:"³",4:"⁴",5:"⁵",6:"⁶",7:"⁷",8:"⁸",9:"⁹"};return n+[...i].map(s=>o[s]||s).join("")}function Qf(n,t,e){const i=e.length;if(i===0)return"";const o=n instanceof Map?e.map(c=>n.get(c)):e.map((c,l)=>({el:{sym:n[l]||c}})),s=Array.from({length:i},()=>[]);for(const c of t){if(c[3])continue;const l=e.indexOf(c[0]),h=e.indexOf(c[1]);l>=0&&h>=0&&(s[l].push({to:h,order:c[2]||1}),s[h].push({to:l,order:c[2]||1}))}let r=o.map((c,l)=>`${e[l]||c.el.sym}_${l}`);for(let c=0;c<3;c++)r=r.map((l,h)=>{const d=[l];for(const{to:u,order:f}of s[h].sort((m,_)=>m.to-_.to))d.push(`${r[u]}_${f}`);return d.join("|")});const a={};for(let c=0;c<i;c++){const h=`${e[c]||o[c].el.sym}:${r[c]}`;a[h]=(a[h]||0)+1}return Object.entries(a).sort(([c],[l])=>c.localeCompare(l)).map(([c,l])=>`${c}×${l}`).join(";")}const tM="₀₁₂₃₄₅₆₇₈₉";function je(n){return typeof n!="string"?(console.warn("[prettyFormula] Expected string, got:",typeof n,n),String(n??"")):[...n].map(t=>t>="0"&&t<="9"?tM[+t]:t).join("")}function Zl(n,t,e){const i=(n.radius+t.radius)/55;return e?i*1.18:i}function bi(n){return .28+n.radius/110}const Ct={add:(n,t)=>({x:n.x+t.x,y:n.y+t.y,z:n.z+t.z}),sub:(n,t)=>({x:n.x-t.x,y:n.y-t.y,z:n.z-t.z}),scale:(n,t)=>({x:n.x*t,y:n.y*t,z:n.z*t}),dot:(n,t)=>n.x*t.x+n.y*t.y+n.z*t.z,cross:(n,t)=>({x:n.y*t.z-n.z*t.y,y:n.z*t.x-n.x*t.z,z:n.x*t.y-n.y*t.x}),len:n=>Math.sqrt(n.x*n.x+n.y*n.y+n.z*n.z),norm(n){const t=this.len(n)||1;return this.scale(n,1/t)}};function Jl(n,t,e=null,i=120){const o=[],s=Math.PI*(3-Math.sqrt(5));for(let r=0;r<n;r++){const a=1-2*r/Math.max(1,n-1),c=Math.sqrt(Math.max(0,1-a*a)),l=s*r;o.push({x:Math.cos(l)*c,y:a,z:Math.sin(l)*c})}e&&(o[0]=Ct.norm(e));for(let r=0;r<i;r++){const a=o.map(()=>({x:0,y:0,z:0}));for(let c=0;c<n;c++)for(let l=c+1;l<n;l++){const h=(t[c]+t[l])/2,d=Ct.dot(o[c],o[l]),u=Ct.norm(Ct.sub(o[l],Ct.scale(o[c],d))),f=h*Math.max(.02,1-d*d);(!e||e!==c)&&(a[c]=Ct.add(a[c],Ct.scale(u,f))),(!e||e!==l)&&(a[l]=Ct.add(a[l],Ct.scale(Ct.neg(u),f)))}for(let c=0;c<n;c++)e!==c&&(o[c]=Ct.norm(Ct.add(o[c],Ct.scale(a[c],.25))))}return o}Ct.neg=n=>Ct.scale(n,-1);function eM(n,t){const e=n+t,i=[...Array(n).fill(1),...Array(t).fill(1.6)],o=Jl(e,i),s=[];for(let r=0;r<e;r++){s.push([]);for(let a=0;a<e;a++)s[r].push(Math.acos(Math.max(-1,Math.min(1,Ct.dot(o[r],o[a])))))}return{M:s,k:e,isLp:r=>r>=n}}function nM(n,t,e,i=null,o=new Map){const s=e;if(s.length===0)return new Map;const r=new Set(s),a=new Map,c=new Map;for(const b of s)a.set(b,Mi(n,t,b).map(w=>wa(w,b)).filter(w=>r.has(w))),c.set(b,o.get(b)?.lp??0);let l=i&&s.includes(i)?i:null;if(!l){let b=-1;for(const w of s){const S=a.get(w).length;(S>b||S===b&&w<l)&&(b=S,l=w)}}const h=new Map;for(const b of s)h.set(b,{...n.get(b).pos});h.set(l,{...n.get(l).pos});const d=new Map,u=new Map,f=new Set([l]),m=[l];for(;m.length;){const b=m.shift(),w=h.get(b),S=a.get(b).filter(k=>!f.has(k)),C=u.get(b)||null,R=S.length+c.get(b);if(R===0)continue;const L=[...S.map(()=>1),...Array(c.get(b)).fill(1.6)],B=Jl(R,L,C);S.forEach((k,G)=>{const U=B[G],K=n.get(b),W=n.get(k),st=Zl(K.el,W.el,Mi(n,t,b).find(rt=>wa(rt,b)===k)?.ionic);h.set(k,Ct.add(w,Ct.scale(U,st))),d.set(k,b),u.set(k,Ct.scale(U,-1)),f.add(k),m.push(k)})}const _=.55,g=new Map,p=new Map;for(const b of s){const w=c.get(b);if(g.set(b,[]),p.set(b,[]),w===0)continue;const S=a.get(b).length,C=u.get(b)||null,R=Jl(S+w,[...Array(S).fill(1),...Array(w).fill(1.6)],C);for(let L=0;L<w;L++)g.get(b).push(Ct.add(h.get(b),Ct.scale(R[S+L],_)))}const y=new Map;for(const b of s){const w=a.get(b).length;y.set(b,eM(w,c.get(b)))}const M=new Map;for(const b of s)M.set(b,{x:0,y:0,z:0});const x=new Map;for(const b of s)x.set(b,bi(n.get(b).el));const T=[];for(const b of s)for(const w of Mi(n,t,b))if(r.has(w.a)&&r.has(w.b)&&w.a===b){const S=n.get(w.a),C=n.get(w.b);T.push({a:w.a,b:w.b,len:Zl(S.el,C.el,w.ionic)})}const v=s.length>60?120:320;for(let b=0;b<v;b++){const w=new Map;for(const R of s)w.set(R,{x:0,y:0,z:0});const S=(R,L)=>{w.set(R,Ct.add(w.get(R),L))};for(const R of T){const L=h.get(R.a),B=h.get(R.b),k=Ct.sub(B,L),G=Ct.len(k)||.001,U=Ct.scale(Ct.norm(k),.5*(G-R.len));S(R.a,U),S(R.b,Ct.neg(U))}for(const R of s){const L=h.get(R),{M:B,k}=y.get(R),G=[];for(const U of a.get(R))G.push(h.get(U));for(const U of g.get(R))G.push(U);if(G.length===k)for(let U=0;U<k;U++)for(let K=U+1;K<k;K++){const W=Ct.norm(Ct.sub(G[U],L)),st=Ct.norm(Ct.sub(G[K],L));let rt=Ct.dot(W,st);rt=Math.max(-1,Math.min(1,rt));const At=Math.acos(rt);let kt=B[U][K]-At;if(kt=Math.max(-.5,Math.min(.5,kt)),Math.abs(kt)<.005)continue;const le=Ct.norm(Ct.sub(st,Ct.scale(W,rt))),ge=Ct.norm(Ct.sub(W,Ct.scale(st,rt))),Jt=.12*kt,X=a.get(R).length;U>=X?g.get(R)[U-X]=Ct.add(g.get(R)[U-X],Ct.scale(le,Jt*2)):S(a.get(R)[U],Ct.scale(le,Jt)),K>=X?g.get(R)[K-X]=Ct.add(g.get(R)[K-X],Ct.scale(ge,Jt*2)):S(a.get(R)[K],Ct.scale(ge,Jt))}}const C=[...s];for(let R=0;R<C.length;R++)for(let L=R+1;L<C.length;L++){const B=C[R],k=C[L];if(T.some(rt=>rt.a===B&&rt.b===k||rt.a===k&&rt.b===B))continue;const G=h.get(B),U=h.get(k),K=(x.get(B)+x.get(k))*1.25,W=Ct.sub(U,G),st=Ct.len(W)||.001;if(st<K){const rt=Ct.scale(Ct.norm(W),.35*(K-st)/K);S(B,Ct.neg(rt)),S(k,rt)}}for(const R of s){if(R===l){M.set(R,{x:0,y:0,z:0});continue}let L=Ct.scale(Ct.add(M.get(R),Ct.scale(w.get(R),.3)),.78);M.set(R,L),h.set(R,Ct.add(h.get(R),L))}for(const R of s){const L=h.get(R);g.set(R,g.get(R).map(B=>Ct.add(L,Ct.scale(Ct.norm(Ct.sub(B,L)),_))))}}return h}function iM(n,t,e,i=[],o=new Set){const s=new Map;return e.forEach((r,a)=>{if(r.bonds.length===0)return;const c=[...o].find(h=>r.atoms.includes(h))||null,l=nM(n,t,r.atoms,c,i[a]?.per??new Map);for(const[h,d]of l)s.set(h,d)}),s}const tp="mol3d.lang",wd={en:{"btn.undo":"Undo","btn.delete":"Delete","btn.duplicate":"Duplicate","btn.clear":"Clear all","btn.fc":"Formal charges","btn.mayhem":"Mayhem","btn.tutorial":"Tutorial","btn.console":"Console","btn.import":"Import","btn.quality":"Quality: {mode}","btn.theme":"Theme: {mode}","btn.quality.title":"Graphics quality — auto adapts when fps drops","btn.theme.title":"Switch between dark and light theme","btn.lang.title":"Switch language","btn.fc.title":"Show formal charge badges","btn.mayhem.title":"Toggle mayhem mode — exotic elements and chaotic reactions","btn.import.title":"Create custom elements (Mayhem mode only)","menu.volume":"Volume","btn.cancel":"Cancel","btn.create":"Create","custom.title":"Create Custom Element","custom.name":"Name","custom.sym":"Symbol","custom.type":"Type","custom.maxBonds":"Max bonds","custom.mass":"Mass","custom.color":"Color","custom.anion":"Can make anion?","custom.anionCharge":"Anion charge","cat.exotic":"Exotic","cat.metal":"Metal","cat.nonmetal":"Nonmetal","cat.metalloid":"Metalloid","cat.halogen":"Halogen","cat.noble":"Noble gas","pool.view.title":"Switch between list and periodic table","theme.dark":"Dark","theme.light":"Light","pool.title":"Element pool","pool.searchPh":"Search 118 elements...","pool.viewList":"List","pool.viewTable":"Table","el.title":"{name} · {cat} · max bonds {max}","pool.hint":"Click an element to place an atom. Metals bond ionically (electron transfer). Noble gases are inert — Kr, Xe and Rn react only with F or O.","ptable.ph":"La–Lu · Ac–Lr below","hint.html":"Click an element in the pool to place your first atom.<br />Drag atoms together to bond them — green ghost means a legal bond, red means forbidden.<br />Click a bond to cycle its order (1→2→3→2→1→delete).<br />Double-click two or more molecules to set up a reaction, then pick a condition.<br />Move around with WASD / arrow keys (Q/E = down/up) or the touch joystick.","rxn.title":"Reaction","rxn.count":"{n} molecule{s} selected","rxn.cancel":"Cancel","sel.title":"Selection","sel.empty":"Click an atom to inspect it.","sel.stats":"{cat} · mass {mass} · EN {en} · max bonds {max}","bohr.toggle":"Bohr Model","bohr.atomic":"Atomic #","bohr.mass":"Mass","bohr.protons":"Protons","bohr.neutrons":"Neutrons","bohr.electrons":"Electrons","bohr.valence":"Valence","bohr.shells":"Shells:","mol.title":"Molecule","mol.empty":"Build a molecule to analyze it.","mol.freeAtom":"Free atom — drag onto another to bond.","mol.unnamed":"Unnamed molecule","mol.stats":"{a} atoms · {b} bonds","mol.chargeLbl":"Ion charge","stoich.title":"Stoichiometry","stoich.empty":"Select an atom or molecule to compute molar mass.","stoich.molar":"Molar mass: {m} g/mol","stoich.el":"Element","stoich.atoms":"Atoms","stoich.atomic":"g/mol","stoich.subtotal":"Subtotal","stoich.pct":"Mass %","stoich.massLbl":"Mass (g)","stoich.molLbl":"Moles","stoich.partLbl":"Particles","stoich.freeAtom":"Single atom — molar mass of the element.","stoich.rxnTitle":"Amounts & yield","stoich.enterAll":"Enter a mass for each reactant.","stoich.limiting":"Limiting","stoich.left":"left over","stoich.yieldLbl":"Yield %","stoich.actual":"actual","iso.more":"Showing the first {n} arrangements — this formula has more.","iso.search":"Search arrangements…","iso.none":"No arrangements match.","chg.minus.title":"Set ion charge one unit lower","chg.auto.title":"Automatic: minimize total formal charge","chg.plus.title":"Set ion charge one unit higher","list.title":"Molecules in scene","list.empty":"No molecules yet.","dex.disc":"Discoveries","dex.discEmpty":"Nothing discovered yet. React or build molecules to fill this log.","btn.saveDisc":"Save discoveries","dex.unknown":"Unknown","dex.notSaved":"Not saved yet","dex.spawn":"Spawn","dex.spawnTitle":"Spawn this molecule into the scene","dex.deleteTitle":"Delete this discovery","dex.chal":"Challenges","btn.reset":"Reset progress","tab.pool":"Pool","tab.info":"Info","tab.dex":"Dex","keys.hint":"WASD/arrows = move camera · drag = move / bond · click bond = cycle order · double-click molecule = select for reaction · Del = remove · Ctrl+Z = undo · Ctrl+D = duplicate","quality.auto":"Auto (adapts to fps)","quality.autoShort":"Auto","quality.low":"Low","quality.med":"Medium","quality.high":"High","cond.rt":"Room temperature","cond.heat":"Heat","cond.spark":"Spark","cond.electricity":"Electricity","cond.catalyst":"Catalyst","cond.uv":"UV light","status.noSelection":"Select an atom in a molecule first.","status.duplicated":"Molecule duplicated. Ctrl+Z to undo.","status.placed":"{name} placed. Drag it onto another atom to bond; double-click molecules to react.","status.cleared":"Scene cleared. Ctrl+Z to restore.","status.nothingUndo":"Nothing to undo.","status.undone":"Undone.","status.ionicBond":"Ionic bond {a}–{b}: electron transferred.","status.covBond":"Covalent bond {a}–{b} formed.","status.orderIonic":"Electron transfer set to {n}.","status.orderCov":"Bond order set to {n}.","status.selectFirst":"Select an atom in a molecule first.","status.chargeLimit":"Ion charge limited to ±6.","status.chargeSet":"Ion charge set to {v}.","status.chargeAuto":"Ion charge: automatic.","status.chalReset":"Challenge progress reset.","status.reactionCancelled":"Reaction cancelled.","status.noReaction":"No known reaction for this combination of molecules.","status.notEnough":"Not enough reactants — add {more} for a {cond} reaction.","status.nothingHappens":"Nothing happens under {cond}.","status.nothingHappensTry":"Nothing happens under {cond}. Try: {valid}.","status.sceneChanged":"Scene changed — the selection no longer matches a reaction.","status.reactionDone":"Reaction ({cond}): {eq}","status.reactionFailed":"Reaction failed: missing template for {product}.","status.mayhemEffect":"{effect} {eq}","status.selCleared":"Reaction selection cleared.","status.selRemoved":"Molecule removed from reaction selection.","status.selAdded":"Molecule added to reaction selection ({n}). Pick a condition below.","status.autoAdjusted":"Graphics auto-adjusted to {tier} ({fps} fps).","status.quality":"Graphics quality: {mode}","status.theme":"Theme: {mode}","status.lang":"Language: English","status.saveFail":"Could not save discoveries (storage unavailable).","toast.saved":"Saved {n} discovered molecule{s}.","toast.newDisc":"New discovery: {f}{name}","toast.spawned":"Spawned {f}","toast.discDeleted":"Deleted {f}","status.spawnFail":"Cannot spawn {f} — no structure available.","toast.challenge":"Challenge complete: {name}!","snap.upgradeTo":"Release to raise bond to order {n}","snap.ionic":"Release to transfer electrons (ionic bond)","snap.bond":"Release to bond","chem.metalMetal":"Metal–metal bonding is metallic, not molecular","chem.metalIonic":"Metals bond ionically here (electron transfer)","chem.nobleNoCompound":"Noble gas does not form compounds","chem.nobleOnlyFO":"Noble gases only bond with F or O","chem.noCapacity":"{sym} has no bonding capacity left (max {max})","chem.anionClosedShare":"{sym} is an anion — it accepted {n} electron{s} and its shell is closed, so it cannot share electrons","chem.ionicNeedMetal":"Ionic bonds need a metal","chem.metalMax":"{sym} has transferred its maximum electrons (max +{max})","chem.noAnion":"{sym} does not form anions","chem.anionMax":"{sym} has accepted its maximum electrons ({max})","chem.octet":"{sym} would exceed its octet (8 electrons)","chem.noLewisSharing":"{sym} cannot accept an electron while sharing {n} bond{s} — no valid Lewis structure","chem.selfBond":"An atom cannot bond to itself","chem.alreadyBonded":"Already bonded — click the bond to increase its order","chem.ionicMax3":"At most 3 electrons can transfer per bond","chem.ionicMax4":"At most 4 electrons can transfer per bond","chem.quadrupleMax":"Quadruple bond is the maximum","chem.metalTransferMax":"{sym} cannot transfer more than {max} electrons","chem.anionAcceptMax":"{sym} cannot accept more than {max} electrons","chem.pairCapSingle":"{a}–{b} bonds are limited to single bonds","chem.pairCapDouble":"{a}–{b} bonds cannot form a triple bond","chem.pairCapTriple":"{a}–{b} bonds cannot form a quadruple bond","chem.noValidBondOrder":"No valid bond order found for this pair","chem.capacityMax":"{sym} would exceed its bonding capacity (max {max})","chem.anionClosedShareMore":"{sym} is an anion — its closed shell cannot share more electrons","chem.lewis.charge":"No valid Lewis structure for that charge.","chem.lewis.radical":"Odd electron count — a radical. Adjust the ion charge.","chem.lewis.electrons":"Not enough electrons for that charge.","chem.partialIonic":"Incomplete ionic transfer: {sym} still holds an unpaired electron. Click the ionic bond to raise its order and complete the electron transfer.","lang.select.title":"Choose your language","lang.select.subtitle":"Select your preferred language to continue","lang.en":"English","lang.vi":"Tiếng Việt","lang.continue":"Continue","tut.skip":"Skip","tut.prev":"Back","tut.next":"Next","tut.finish":"Get started!","tut.welcome.title":"Welcome to Molecule Builder 3D!","tut.welcome.body":"Build molecules, explore reactions, and discover chemistry in 3D. This quick tutorial will show you the basics.","tut.pool.title":"Element Pool","tut.pool.body":"All 118 elements are here. Click any element to place an atom in the scene. Use the search bar or switch to the periodic table view.","tut.bond.title":"Building Molecules","tut.bond.body":"Drag one atom onto another to form a bond. A green ghost means the bond is allowed, red means it's forbidden. Metals bond ionically (electron transfer), nonmetals bond covalently (sharing electrons).","tut.bondOrder.title":"Bond Orders","tut.bondOrder.body":"Click a bond to cycle its order: single → double → triple → quadruple → triple → double → single → delete. Shift+click to go backwards.","tut.info.title":"Info Panel","tut.info.body":"Click any atom to inspect it. This panel shows element properties, molecule analysis (name, formula, mass), and a list of all molecules in the scene.","tut.reaction.title":"Reactions","tut.reaction.body":"Double-click two or more molecules to select them for a reaction. Then pick a condition (room temperature, heat, spark, etc.) to see what happens!","tut.dex.title":"Discovery Dex","tut.dex.body":"Every molecule you build or discover through reactions is logged here. Complete challenges to test your chemistry knowledge!","tut.camera.title":"Camera Controls","tut.camera.body":"Move the camera with WASD or arrow keys. Q/E move up/down. On mobile, use the joystick. Drag empty space to orbit, scroll to zoom.","tut.ready.title":"You're ready!","tut.ready.body":"Start building! Try making water (H₂O), salt (NaCl), or something exotic. You can replay this tutorial anytime from the ☰ menu."},vi:{"btn.undo":"Hoàn tác","btn.delete":"Xóa","btn.duplicate":"Nhân đôi","btn.clear":"Xóa hết","btn.fc":"Điện tích hình thức","btn.mayhem":"Hỗn loạn","btn.tutorial":"Hướng dẫn","btn.console":"Bảng điều khiển","btn.import":"Nhập","btn.quality":"Chất lượng: {mode}","btn.theme":"Giao diện: {mode}","btn.quality.title":"Chất lượng đồ họa — tự điều chỉnh khi fps giảm","btn.theme.title":"Chuyển giữa giao diện tối và sáng","btn.lang.title":"Chuyển ngôn ngữ","btn.fc.title":"Hiện điện tích hình thức","btn.mayhem.title":"Chế độ hỗn loạn — nguyên tố kỳ lạ và phản ứng hỗn loạn","btn.import.title":"Tạo nguyên tố tùy chỉnh (chỉ chế độ Hỗn loạn)","menu.volume":"Âm lượng","btn.cancel":"Hủy","btn.create":"Tạo","custom.title":"Tạo Nguyên Tố Tùy Chỉnh","custom.name":"Tên","custom.sym":"Ký hiệu","custom.type":"Loại","custom.maxBonds":"Liên kết tối đa","custom.mass":"Khối lượng","custom.color":"Màu sắc","custom.anion":"Có thể tạo anion?","custom.anionCharge":"Điện tích anion","cat.exotic":"Kỳ lạ","cat.metal":"Kim loại","cat.nonmetal":"Phi kim","cat.metalloid":"Á kim","cat.halogen":"Halogen","cat.noble":"Khí hiếm","pool.view.title":"Chuyển giữa danh sách và bảng tuần hoàn","theme.dark":"Tối","theme.light":"Sáng","pool.title":"Nguyên tố","pool.searchPh":"Tìm kiếm 118 nguyên tố...","pool.viewList":"Danh sách","pool.viewTable":"Bảng","el.title":"{name} · {cat} · tối đa {max} liên kết","pool.hint":"Bấm vào một nguyên tố để đặt nguyên tử. Kim loại liên kết ion (chuyển electron). Khí hiếm trơ — Kr, Xe và Rn chỉ phản ứng với F hoặc O.","ptable.ph":"La–Lu · Ac–Lr ở dưới","hint.html":"Bấm một nguyên tố trong kho để đặt nguyên tử đầu tiên.<br />Kéo các nguyên tử vào nhau để liên kết — bóng xanh nghĩa là liên kết hợp lệ, đỏ nghĩa là bị cấm.<br />Bấm vào liên kết để xoay bậc (1→2→3→2→1→xóa).<br />Nhấp đôi hai phân tử trở lên để tạo phản ứng, sau đó chọn điều kiện.<br />Di chuyển bằng WASD / phím mũi tên (Q/E = xuống/lên) hoặc joystick cảm ứng.","rxn.title":"Phản ứng","rxn.count":"{n} phân tử đã chọn","rxn.cancel":"Hủy","sel.title":"Lựa chọn","sel.empty":"Bấm vào một nguyên tử để xem chi tiết.","sel.stats":"{cat} · khối lượng {mass} · độ âm điện {en} · tối đa {max} liên kết","bohr.toggle":"Mô hình Bohr","bohr.atomic":"Số hiệu Z","bohr.mass":"Khối lượng","bohr.protons":"Proton","bohr.neutrons":"Nơtron","bohr.electrons":"Electron","bohr.valence":"Hóa trị","bohr.shells":"Lớp:","mol.title":"Phân tử","mol.empty":"Hãy tạo phân tử để phân tích.","mol.freeAtom":"Nguyên tử tự do — kéo vào nguyên tử khác để liên kết.","mol.unnamed":"Phân tử chưa đặt tên","mol.stats":"{a} nguyên tử · {b} liên kết","mol.chargeLbl":"Điện tích ion","stoich.title":"Tính toán mol","stoich.empty":"Chọn một nguyên tử hoặc phân tử để tính khối lượng mol.","stoich.molar":"Khối lượng mol: {m} g/mol","stoich.el":"Nguyên tố","stoich.atoms":"Số nguyên tử","stoich.atomic":"g/mol","stoich.subtotal":"Tổng","stoich.pct":"% khối lượng","stoich.massLbl":"Khối lượng (g)","stoich.molLbl":"Số mol","stoich.partLbl":"Số hạt","stoich.freeAtom":"Nguyên tử đơn lẻ — khối lượng mol của nguyên tố.","stoich.rxnTitle":"Lượng chất & hiệu suất","stoich.enterAll":"Nhập khối lượng cho mỗi chất phản ứng.","stoich.limiting":"Chất hạn chế","stoich.left":"còn dư","stoich.yieldLbl":"Hiệu suất %","stoich.actual":"thực tế","iso.more":"Hiện {n} cách sắp xếp đầu tiên — công thức này còn nhiều hơn nữa.","iso.search":"Tìm cách sắp xếp…","iso.none":"Không có cách sắp xếp nào khớp.","chg.minus.title":"Giảm điện tích ion một đơn vị","chg.auto.title":"Tự động: cực tiểu hóa tổng điện tích hình thức","chg.plus.title":"Tăng điện tích ion một đơn vị","list.title":"Phân tử trong khung cảnh","list.empty":"Chưa có phân tử nào.","dex.disc":"Khám phá","dex.discEmpty":"Chưa có gì được khám phá. Hãy phản ứng hoặc tạo phân tử để lấp đầy sổ này.","btn.saveDisc":"Lưu khám phá","dex.unknown":"Không rõ","dex.notSaved":"Chưa lưu","dex.spawn":"Tạo","dex.spawnTitle":"Tạo phân tử này vào khung cảnh","dex.deleteTitle":"Xóa phát hiện này","dex.chal":"Thử thách","btn.reset":"Đặt lại tiến trình","tab.pool":"Nguyên tố","tab.info":"Thông tin","tab.dex":"Sổ tay","keys.hint":"WASD/phím mũi tên = di chuyển camera · kéo = di chuyển / liên kết · bấm liên kết = xoay bậc · nhấp đôi phân tử = chọn để phản ứng · Del = xóa · Ctrl+Z = hoàn tác · Ctrl+D = nhân đôi","quality.auto":"Tự động (điều chỉnh theo fps)","quality.autoShort":"Tự động","quality.low":"Thấp","quality.med":"Trung bình","quality.high":"Cao","cond.rt":"Nhiệt độ phòng","cond.heat":"Nhiệt","cond.spark":"Tia lửa điện","cond.electricity":"Dòng điện","cond.catalyst":"Chất xúc tác","cond.uv":"Ánh sáng UV","status.noSelection":"Hãy chọn một nguyên tử trong phân tử trước.","status.duplicated":"Đã nhân đôi phân tử. Ctrl+Z để hoàn tác.","status.placed":"Đã đặt {name}. Kéo vào nguyên tử khác để liên kết; nhấp đôi các phân tử để phản ứng.","status.cleared":"Đã xóa khung cảnh. Ctrl+Z để khôi phục.","status.nothingUndo":"Không có gì để hoàn tác.","status.undone":"Đã hoàn tác.","status.ionicBond":"Liên kết ion {a}–{b}: đã chuyển electron.","status.covBond":"Đã tạo liên kết cộng hóa trị {a}–{b}.","status.orderIonic":"Đã đặt mức chuyển electron thành {n}.","status.orderCov":"Đã đặt bậc liên kết thành {n}.","status.selectFirst":"Hãy chọn một nguyên tử trong phân tử trước.","status.chargeLimit":"Điện tích ion giới hạn trong ±6.","status.chargeSet":"Đã đặt điện tích ion thành {v}.","status.chargeAuto":"Điện tích ion: tự động.","status.chalReset":"Đã đặt lại tiến trình thử thách.","status.reactionCancelled":"Đã hủy phản ứng.","status.noReaction":"Không có phản ứng đã biết cho tổ hợp phân tử này.","status.notEnough":"Chưa đủ chất phản ứng — thêm {more} cho phản ứng {cond}.","status.nothingHappens":"Không có gì xảy ra với {cond}.","status.nothingHappensTry":"Không có gì xảy ra với {cond}. Thử: {valid}.","status.sceneChanged":"Khung cảnh đã thay đổi — lựa chọn không còn khớp phản ứng nào.","status.reactionDone":"Phản ứng ({cond}): {eq}","status.reactionFailed":"Phản ứng thất bại: thiếu mẫu cho {product}.","status.mayhemEffect":"{effect} {eq}","status.selCleared":"Đã xóa lựa chọn phản ứng.","status.selRemoved":"Đã bỏ phân tử khỏi lựa chọn phản ứng.","status.selAdded":"Đã thêm phân tử vào lựa chọn phản ứng ({n}). Chọn điều kiện bên dưới.","status.autoAdjusted":"Đã tự động điều chỉnh đồ họa xuống {tier} ({fps} fps).","status.quality":"Chất lượng đồ họa: {mode}","status.theme":"Giao diện: {mode}","status.lang":"Ngôn ngữ: Tiếng Việt","status.saveFail":"Không thể lưu khám phá (bộ nhớ không khả dụng).","toast.saved":"Đã lưu {n} phân tử đã khám phá.","toast.newDisc":"Khám phá mới: {f}{name}","toast.spawned":"Đã tạo {f}","toast.discDeleted":"Đã xóa {f}","status.spawnFail":"Không thể tạo {f} — không có cấu trúc.","toast.challenge":"Hoàn thành thử thách: {name}!","snap.upgradeTo":"Thả để nâng liên kết lên bậc {n}","snap.ionic":"Thả để chuyển electron (liên kết ion)","snap.bond":"Thả để liên kết","chem.metalMetal":"Liên kết kim loại–kim loại là liên kết kim loại, không phải phân tử","chem.metalIonic":"Kim loại liên kết ion tại đây (chuyển electron)","chem.nobleNoCompound":"Khí hiếm không tạo thành hợp chất","chem.nobleOnlyFO":"Khí hiếm chỉ liên kết với F hoặc O","chem.noCapacity":"{sym} không còn khả năng liên kết (tối đa {max})","chem.anionClosedShare":"{sym} là anion — đã nhận {n} electron nên lớp vỏ đã kín, không thể dùng chung electron","chem.ionicNeedMetal":"Liên kết ion cần kim loại","chem.metalMax":"{sym} đã chuyển toàn bộ electron tối đa (tối đa +{max})","chem.noAnion":"{sym} không tạo anion","chem.anionMax":"{sym} đã nhận đủ electron tối đa ({max})","chem.octet":"{sym} sẽ vượt bát tử (8 electron)","chem.noLewisSharing":"{sym} không thể nhận thêm electron khi đang dùng chung {n} liên kết — không có cấu trúc Lewis hợp lệ","chem.selfBond":"Nguyên tử không thể tự liên kết với chính nó","chem.alreadyBonded":"Đã liên kết — bấm vào liên kết để tăng bậc","chem.ionicMax3":"Mỗi liên kết chuyển tối đa 3 electron","chem.ionicMax4":"Mỗi liên kết chuyển tối đa 4 electron","chem.quadrupleMax":"Liên kết bốn là bậc tối đa","chem.metalTransferMax":"{sym} không thể chuyển nhiều hơn {max} electron","chem.anionAcceptMax":"{sym} không thể nhận nhiều hơn {max} electron","chem.pairCapSingle":"Liên kết {a}–{b} chỉ giới hạn ở liên kết đơn","chem.pairCapDouble":"Liên kết {a}–{b} không thể tạo liên kết ba","chem.pairCapTriple":"Liên kết {a}–{b} không thể tạo liên kết bốn","chem.noValidBondOrder":"Không tìm thấy bậc liên kết hợp lệ cho cặp này","chem.capacityMax":"{sym} sẽ vượt quá khả năng liên kết (tối đa {max})","chem.anionClosedShareMore":"{sym} là anion — lớp vỏ kín không thể chia sẻ thêm electron","chem.lewis.charge":"Không có cấu trúc Lewis hợp lệ cho điện tích đó.","chem.lewis.radical":"Số electron lẻ — gốc tự do. Hãy điều chỉnh điện tích ion.","chem.lewis.electrons":"Không đủ electron cho điện tích đó.","chem.partialIonic":"Chuyển electron ion chưa hoàn tất: {sym} còn một electron chưa ghép đôi. Nhấp vào liên kết ion để tăng bậc và hoàn tất chuyển electron.","lang.select.title":"Chọn ngôn ngữ","lang.select.subtitle":"Chọn ngôn ngữ ưa thích để tiếp tục","lang.en":"English","lang.vi":"Tiếng Việt","lang.continue":"Tiếp tục","tut.skip":"Bỏ qua","tut.prev":"Quay lại","tut.next":"Tiếp","tut.finish":"Bắt đầu!","tut.welcome.title":"Chào mừng đến Molecule Builder 3D!","tut.welcome.body":"Xây dựng phân tử, khám phá phản ứng, và tìm hiểu hóa học trong 3D. Hướng dẫn nhanh này sẽ cho bạn biết những điều cơ bản.","tut.pool.title":"Kho nguyên tố","tut.pool.body":"Có đủ 118 nguyên tố ở đây. Bấm vào bất kỳ nguyên tố nào để đặt nguyên tử vào khung cảnh. Dùng thanh tìm kiếm hoặc chuyển sang bảng tuần hoàn.","tut.bond.title":"Tạo phân tử","tut.bond.body":"Kéo nguyên tử này vào nguyên tử khác để tạo liên kết. Bóng xanh nghĩa là liên kết hợp lệ, đỏ nghĩa là bị cấm. Kim loại liên kết ion (chuyển electron), phi kim liên kết cộng hóa trị (dùng chung electron).","tut.bondOrder.title":"Bậc liên kết","tut.bondOrder.body":"Bấm vào liên kết để xoay bậc: đơn → đôi → ba → bốn → ba → đôi → đơn → xóa. Shift+bấm để đi ngược lại.","tut.info.title":"Bảng thông tin","tut.info.body":"Bấm vào bất kỳ nguyên tử nào để xem chi tiết. Bảng này hiển thị tính chất nguyên tố, phân tích phân tử (tên, công thức, khối lượng), và danh sách tất cả phân tử trong khung cảnh.","tut.reaction.title":"Phản ứng","tut.reaction.body":"Nhấp đôi hai phân tử trở lên để chọn chúng cho phản ứng. Sau đó chọn điều kiện (nhiệt độ phòng, nhiệt, tia lửa điện, v.v.) để xem điều gì xảy ra!","tut.dex.title":"Sổ tay khám phá","tut.dex.body":"Mọi phân tử bạn tạo hoặc khám phá qua phản ứng đều được ghi lại ở đây. Hoàn thành các thử thách để kiểm tra kiến thức hóa học của bạn!","tut.camera.title":"Điều khiển camera","tut.camera.body":"Di chuyển camera bằng WASD hoặc phím mũi tên. Q/E di chuyển lên/xuống. Trên di động, dùng joystick. Kéo vùng trống để xoay, cuộn để thu phóng.","tut.ready.title":"Bạn đã sẵn sàng!","tut.ready.body":"Bắt đầu xây dựng! Thử tạo nước (H₂O), muối (NaCl), hoặc thứ gì đó kỳ lạ. Bạn có thể xem lại hướng dẫn này bất cứ lúc nào từ menu ☰."}},oM={1:"Hidro",2:"Heli",3:"Liti",4:"Beryli",5:"Bo",6:"Cacbon",7:"Nitơ",8:"Oxi",9:"Flo",10:"Neon",11:"Natri",12:"Magie",13:"Nhôm",14:"Silic",15:"Phốtpho",16:"Lưu huỳnh",17:"Clo",18:"Argon",19:"Kali",20:"Canxi",21:"Scandium",22:"Titan",23:"Vanadium",24:"Crom",25:"Mangan",26:"Sắt",27:"Coban",28:"Nikel",29:"Đồng",30:"Kẽm",31:"Gallium",32:"Germani",33:"Asen",34:"Selen",35:"Brôm",36:"Krypton",37:"Rubidium",38:"Strontium",39:"Yttrium",40:"Zirconium",41:"Niobi",42:"Molypden",43:"Techneti",44:"Rutheni",45:"Rhodi",46:"Paladi",47:"Bạc",48:"Cadmi",49:"Indi",50:"Thiếc",51:"Antimon",52:"Tellur",53:"Iot",54:"Xenon",55:"Caesi",56:"Bari",57:"Lanthan",58:"Ceri",59:"Praseodymi",60:"Neodymi",61:"Promethi",62:"Samari",63:"Europi",64:"Gadolini",65:"Terbi",66:"Dysprosi",67:"Holmi",68:"Erbi",69:"Thuli",70:"Ytterbi",71:"Luteti",72:"Hafni",73:"Tantali",74:"Vonfram",75:"Rheni",76:"Osmi",77:"Iridi",78:"Platin",79:"Vàng",80:"Thủy ngân",81:"Thali",82:"Chì",83:"Bismut",84:"Poloni",85:"Astatin",86:"Radon",87:"Franci",88:"Radium",89:"Actini",90:"Thori",91:"Protactini",92:"Urani",93:"Neptuni",94:"Plutoni",95:"Americi",96:"Curi",97:"Berkelium",98:"Californium",99:"Einsteinium",100:"Fermium",101:"Mendelevium",102:"Nobelium",103:"Lawrencium",104:"Rutherfordium",105:"Dubnium",106:"Seaborgium",107:"Bohrium",108:"Hassium",109:"Meitnerium",110:"Darmstadtium",111:"Roentgenium",112:"Copernicium",113:"Nihonium",114:"Flerovium",115:"Moscovium",116:"Livermorium",117:"Tennessine",118:"Oganesson"},sM={alkali:"Kim loại kiềm",alkaline:"Kim loại kiềm thổ",transition:"Kim loại chuyển tiếp",post:"Kim loại sau chuyển tiếp",metalloid:"Á kim",nonmetal:"Phi kim",halogen:"Halogen",noble:"Khí hiếm",lanthanide:"Lantanide",actinide:"Actinide",exotic:"Kỳ lạ"},rM={alkali:"Alkali metal",alkaline:"Alkaline earth",transition:"Transition metal",post:"Post-transition metal",metalloid:"Metalloid",nonmetal:"Reactive nonmetal",halogen:"Halogen",noble:"Noble gas",lanthanide:"Lanthanide",actinide:"Actinide",exotic:"Exotic"};let qn="en";function aM(){try{const n=localStorage.getItem(tp);(n==="vi"||n==="en")&&(qn=n)}catch{}document.documentElement.lang=qn}function ep(){return qn}function ee(){return qn==="vi"}function cM(){return qn==="en"?"vi":"en"}function np(n){qn=n==="vi"?"vi":"en";try{localStorage.setItem(tp,qn)}catch{}Ou()}function Y(n,t){let e=wd[qn]?.[n]??wd.en[n]??n;if(t)for(const[i,o]of Object.entries(t))e=e.replaceAll(`{${i}}`,String(o));return e}function Sr(n){return n?typeof n=="string"?n:Y(n.key,n.p):""}function kn(n){if(qn==="vi"){const t=oM[n.z];if(t)return t}return n.name}function pr(n){return(qn==="vi"?sM[n]:rM[n])||n}function Ou(){document.documentElement.lang=qn;for(const n of document.querySelectorAll("[data-i18n]"))n.textContent=Y(n.dataset.i18n);for(const n of document.querySelectorAll("[data-i18n-html]"))n.innerHTML=Y(n.dataset.i18nHtml);for(const n of document.querySelectorAll("[data-i18n-ph]"))n.placeholder=Y(n.dataset.i18nPh);for(const n of document.querySelectorAll("[data-i18n-title]"))n.title=Y(n.dataset.i18nTitle)}const lM={H2O:"Water",CO2:"Carbon dioxide",CO:"Carbon monoxide",CH4:"Methane",NH3:"Ammonia",H2O2:"Hydrogen peroxide",SO2:"Sulfur dioxide",SO3:"Sulfur trioxide",NO:"Nitrogen monoxide",NO2:"Nitrogen dioxide",N2O:"Dinitrogen monoxide (laughing gas)",N2O3:"Dinitrogen trioxide",N2O4:"Dinitrogen tetroxide",N2O5:"Dinitrogen pentoxide",SF6:"Sulfur hexafluoride",PH3:"Phosphine",SiO2:"Silicon dioxide",C2H6:"Ethane",C2H4:"Ethene",C2H2:"Ethyne",C3H8:"Propane",C3H6:"Propene",C3H4:"Propyne",C4H10:"Butane",C5H12:"Pentane",C6H6:"Benzene",C6H12:"Cyclohexane",C6H14:"Hexane",C2H6O:"Ethanol (or dimethyl ether)",CH4O:"Methanol",CH2O:"Methanal (formaldehyde)",CHCl3:"Trichloromethane (chloroform)",CCl4:"Tetrachloromethane (carbon tetrachloride)",CS2:"Carbon disulfide",BF3:"Boron trifluoride",BCl3:"Boron trichloride",BH3:"Borane",NH4Cl:"Ammonium chloride",SiH4:"Silane",GeH4:"Germane",AsH3:"Arsine",H2S:"Hydrogen sulfide",HF:"Hydrogen fluoride",HBr:"Hydrogen bromide",HI:"Hydrogen iodide",HCl:"Hydrogen chloride",H2:"Hydrogen",N2:"Nitrogen",O2:"Dioxygen",O3:"Ozone",F2:"Difluorine",Cl2:"Dichlorine",Br2:"Dibromine",I2:"Diiodine",P4:"Tetraphosphorus",S8:"Cyclo-octasulfur",PCl3:"Phosphorus trichloride",PCl5:"Phosphorus pentachloride",XeF2:"Xenon difluoride",XeF4:"Xenon tetrafluoride",XeF6:"Xenon hexafluoride",XeO3:"Xenon trioxide",XeO4:"Xenon tetroxide",KrF2:"Krypton difluoride",N2H4:"Hydrazine",H2O2:"Hydrogen peroxide",NO2:"Nitrogen dioxide"},uM={"OH-1":"Hydroxide","NH4+1":"Ammonium","H3O+1":"Hydronium","NO3-1":"Nitrate","NO2-1":"Nitrite","CO3-2":"Carbonate","HCO3-1":"Hydrogen carbonate","SO4-2":"Sulfate","SO3-2":"Sulfite","HSO4-1":"Hydrogen sulfate","PO4-3":"Phosphate","PO3-3":"Phosphite","ClO-1":"Hypochlorite","ClO2-1":"Chlorite","ClO3-1":"Chlorate","ClO4-1":"Perchlorate","BrO3-1":"Bromate","IO3-1":"Iodate","MnO4-1":"Permanganate","CrO4-2":"Chromate","Cr2O7-2":"Dichromate","CN-1":"Cyanide","O2-2":"Peroxide","C2O4-2":"Oxalate","CNS-1":"Thiocyanate"},Rd={sulfate:"sulfuric",sulfite:"sulfurous",phosphate:"phosphoric",phosphite:"phosphorous",cyanide:"hydrocyanic"},hM=["mono","di","tri","tetra","penta","hexa","hepta","octa","nona","deca"],ip={O:"oxide",F:"fluoride",Cl:"chloride",Br:"bromide",I:"iodide",At:"astatide",S:"sulfide",Se:"selenide",Te:"telluride",N:"nitride",P:"phosphide",As:"arsenide",Sb:"antimonide",C:"carbide",Si:"silicide",B:"boride",Ge:"germanide",H:"hydride",Po:"polonide",Ts:"tennesside",Lv:"livermoride"},dM=["","I","II","III","IV","V","VI","VII","VIII"],fM={H2O:"Nước",CO2:"Cacbon dioxit",CO:"Cacbon monooxit",CH4:"Metan",NH3:"Amoniac",H2O2:"Hiđro peroxit",SO2:"Lưu huỳnh dioxit",SO3:"Lưu huỳnh trioxit",NO:"Nitơ monooxit",NO2:"Nitơ dioxit",N2O:"Đinitơ monooxit (khí cười)",N2O3:"Đinitơ trioxit",N2O4:"Đinitơ tetraoxit",N2O5:"Đinitơ pentaoxit",SF6:"Lưu huỳnh hexaflorua",PH3:"Photphin",SiO2:"Silic dioxit",C2H6:"Etan",C2H4:"Eten",C2H2:"Etin",C3H8:"Propan",C3H6:"Propen",C3H4:"Propin",C4H10:"Butan",C5H12:"Pentan",C6H6:"Benzên",C6H12:"Cyclohexan",C6H14:"Hexan",C2H6O:"Etanol (hoặc dimetyl ete)",CH4O:"Metanol",CH2O:"Methanal (fomanđehit)",CHCl3:"Triclorometan (cloroform)",CCl4:"Tetraclorometan (cacbon tetraclorua)",CS2:"Cacbon disunfua",BF3:"Bo triflorua",BCl3:"Bo triclorua",BH3:"Boran",NH4Cl:"Amoni clorua",SiH4:"Silan",GeH4:"German",AsH3:"Arsin",H2S:"Hiđro sunfua",HF:"Hiđro florua",HBr:"Hiđro bromua",HI:"Hiđro iodua",HCl:"Hiđro clorua",H2:"Hiđro",N2:"Nitơ",O2:"Đioxi",O3:"Ozôn",F2:"Điflo",Cl2:"Điclo",Br2:"Đibrom",I2:"Điiod",P4:"Tetraphotpho",S8:"Cyclo-octasunfua",PCl3:"Photpho triclorua",PCl5:"Photpho pentaclorua",XeF2:"Xenon diflorua",XeF4:"Xenon tetraflorua",XeF6:"Xenon hexaflorua",XeO3:"Xenon trioxit",XeO4:"Xenon tetraoxit",KrF2:"Krypton diflorua",N2H4:"Hiđrazin"},pM={"OH-1":"Hidroxit","NH4+1":"Amoni","H3O+1":"Hidroni","NO3-1":"Nitrat","NO2-1":"Nitrit","CO3-2":"Cacbonat","HCO3-1":"Hiđrocacbonat","SO4-2":"Sunfat","SO3-2":"Sunfit","HSO4-1":"Hiđrosunfat","PO4-3":"Photphat","PO3-3":"Photphit","ClO-1":"Hypoclorit","ClO2-1":"Clorit","ClO3-1":"Clorat","ClO4-1":"Perclorat","BrO3-1":"Bromat","IO3-1":"Iodat","MnO4-1":"Permanaganat","CrO4-2":"Cromat","Cr2O7-2":"Đicromat","CN-1":"Xianua","O2-2":"Peroxit","C2O4-2":"Oxalat","CNS-1":"Thiocyanat"},op={O:"oxit",F:"florua",Cl:"clorua",Br:"bromua",I:"iodua",At:"astatua",S:"sunfua",Se:"selenua",Te:"telurua",N:"nitrua",P:"photphua",As:"asenua",Sb:"antimonua",C:"cacbua",Si:"silicua",B:"borua",Ge:"germanua",H:"hiđrua",Po:"polonua",Ts:"tennessua",Lv:"livermorua"},mM=["mono","đi","tri","tetra","penta","hexa","hepta","octa","nona","deca"],gM=["meth","eth","prop","but","pent","hex","hept","oct","non","dec"],_M=["met","et","prop","but","pent","hex","hept","oct","non","dec"],yM={C:"cacbon",H:"hiđro",N:"nitơ",O:"oxi",S:"lưu huỳnh",P:"photpho",F:"flo",Cl:"clo",Br:"brôm",I:"iot",Se:"selen",Si:"silic",B:"bo",As:"asen",Te:"tellur"},Od={sunfat:"sunfuric",sunfit:"sunfurơ",nitrat:"nitric",nitrit:"nitrơ",photphat:"photphoric",photphit:"photphơ",hypoclorit:"hypoclorơ",clorit:"clorơ",hiđrosunfat:"sunfuric",xianua:"xianhidric"};function Id(n){return(ee()?mM:hM)[n-1]||`${n}`}function xM(n){const t=n.toLowerCase();return Od[t]?"axit "+Od[t]:t.endsWith("at")?"axit "+t.replace(/at$/,"ic"):t.endsWith("it")?"axit "+t.replace(/it$/,"ơ"):t.endsWith("ua")?"axit "+t.replace(/ua$/,"hidric"):"axit "+t}function vM(n){return yM[n]||n.toLowerCase()}function Yc(n,t,e){const i=ee(),o=i?fM:lM,s=i?pM:uM,r=nr(n);if(t===0&&o[r])return o[r];const a=`${r}${t>0?"+"+t:t}`;if(s[a])return s[a];const c=new Set(n.map(l=>l.el.sym));if(c.size===2&&c.has("C")&&c.has("H")){const l=n.filter(d=>d.el.sym==="C").length,h=n.filter(d=>d.el.sym==="H").length;if(l>=1&&l<=10){const d=(i?_M:gM)[l-1];if(h===2*l+2)return Dn(d+(i?"an":"ane"));if(h===2*l)return e.some(u=>u.order===3)?Dn(d+(i?"in":"yne")):Dn(d+(i?"en":"ene"));if(h===2*l-2)return Dn(e.some(u=>u.order===3)?d+(i?"in":"yne"):d+(i?"ađien":"diene"))}}if(t===0){const l=n.filter(h=>h.el.sym==="H").length;if(l>0){const h=n.filter(f=>f.el.sym!=="H"),u=`${nr(h)}-${l}`;if(s[u]&&h.length>1){if(i)return Dn(xM(s[u]));const f=s[u].toLowerCase();if(Rd[f])return Dn(Rd[f]+" acid");if(f.endsWith("ate"))return Dn(f.replace(/ate$/,"ic")+" acid");if(f.endsWith("ite"))return Dn(f.replace(/ite$/,"ous")+" acid");if(f.endsWith("ide"))return Dn("hydro"+f.replace(/ide$/,"ic")+" acid")}}}if(n.every(l=>!xe(l.el))&&new Set(n.map(l=>l.el.sym)).size===2){const l=new Map;for(const m of n)l.set(m.el.sym,(l.get(m.el.sym)||0)+1);const[h,d]=[...l.keys()].sort((m,_)=>Pd(n,m)-Pd(n,_)),u=[];u.push((l.get(h)===1&&h!=="C"?"":Id(l.get(h)))+(i?vM(h):MM(h)));const f=i?op[d]||d.toLowerCase()+"ua":ip[d]||d.toLowerCase()+"ide";return u.push(Id(l.get(d))+f),Dn(u.join(" "))}return null}function sp(n,t,e,i,o=null){if(!t.some(y=>y.ionic))return Yc(n,i,t);const r=t.filter(y=>!y.ionic),a=new Map(n.map(y=>[y.id,[]]));for(const y of r)a.get(y.a).push({other:y.b,order:y.order}),a.get(y.b).push({other:y.a,order:y.order});const c=[],l=new Set;for(const y of n){if(l.has(y.id))continue;const M=[],x=[y.id];for(l.add(y.id);x.length;){const T=x.pop();M.push(T);for(const{other:v}of a.get(T))l.has(v)||(l.add(v),x.push(v))}c.push(M)}const h=[],d=[];for(const y of c){const M=y.map(b=>n.find(w=>w.id===b)),x=r.filter(b=>y.includes(b.a)&&y.includes(b.b));let T=0;for(const b of M){if(o){T+=o.get(b.id)?.fc??0;continue}const w=t.filter(S=>S.ionic&&(S.a===b.id||S.b===b.id)).reduce((S,C)=>S+C.order,0);if(xe(b.el))T+=w;else{const S=x.filter(L=>L.a===b.id||L.b===b.id).reduce((L,B)=>L+B.order,0),C=b.el.valenceElectrons+w-S,R=Math.max(0,Math.floor(C/2));T+=b.el.valenceElectrons-2*R-S}}const v={atoms:M,bonds:x,charge:T};(T>0?h:d).push(v)}const u=[],f=new Map;for(const y of h)if(y.atoms.length===1&&xe(y.atoms[0].el)){const M=y.atoms[0].el,x=y.charge,T=M.charges&&M.charges.length>1?`(${dM[x]||x})`:"",v="cat:"+M.sym+T;f.set(v,(f.get(v)||0)+1),u.push({key:v,name:kn(M)+T})}else{const M=Yc(y.atoms,y.charge,y.bonds),x="cat:"+(M||nr(y.atoms)+y.charge);f.set(x,(f.get(x)||0)+1),u.push({key:x,name:M?M.toLowerCase():`ion ${nr(y.atoms)}`})}const m=new Map;for(const y of d){let M;if(y.atoms.length===1){const T=y.atoms[0].el;M=ee()?op[T.sym]||T.name.toLowerCase()+"ua":ip[T.sym]||T.name.toLowerCase()+"ide"}else M=Yc(y.atoms,y.charge,y.bonds),M=M?M.toLowerCase():`ion ${nr(y.atoms)}`;const x="an:"+M;m.set(x,(m.get(x)||0)+1)}const _=[...f.entries()].map(([y])=>u.find(M=>M.key===y).name).join(" "),g=[...m.entries()].map(([y])=>y.slice(3)).join(" "),p=Dn(`${_} ${g}`.trim());return i!==0?`${p} (${ee()?"điện tích":"net charge"} ${i>0?"+":""}${i})`:p}function Pd(n,t){return n.find(i=>i.el.sym===t).el.en??0}function MM(n){return{C:"carbon",H:"hydrogen",N:"nitrogen",O:"oxygen",S:"sulfur",P:"phosphorus",F:"fluorine",Cl:"chlorine",Br:"bromine",I:"iodine",Se:"selenium",Si:"silicon",B:"boron",As:"arsenic",Te:"tellurium",H2:"hydrogen"}[n]||n.toLowerCase()}function Dn(n){return n.charAt(0).toUpperCase()+n.slice(1)}function nr(n){return $t(n.map(t=>t.el))}function SM(n){const t=new Map,e=/([A-Z][a-z]?)(\d*)/g;let i;for(;(i=e.exec(n))!==null;){if(!i[1])continue;const o=i[2]?parseInt(i[2]):1;t.set(i[1],(t.get(i[1])||0)+o)}return t}function jn(n,t,e){const i=SM(n),o=[...i.keys()],s=o.some(d=>{const u=ut(d);return u&&xe(u)}),r=i.has("H"),a=i.has("O"),c=i.has("C"),l=i.has("N"),h=i.has("S");if(o.length===1)return{key:"element",label:ee()?"Nguyên tố":"Element"};if(n==="H2O")return{key:"oxide",label:ee()?"Oxit":"Oxide"};if(c&&i.get("H")>0&&o.filter(d=>d!=="C"&&d!=="H").length===0){const d=i.get("C")||1,u=i.get("H")||0;return u===2*d+2?{key:"alkane",label:ee()?"Ankan":"Alkane"}:u===2*d?{key:"alkene",label:ee()?"Anken":"Alkene"}:u===2*d-2?{key:"alkyne",label:ee()?"Ankin":"Alkyne"}:{key:"organic",label:ee()?"Hữu cơ":"Organic"}}if(c&&!s&&!(n==="CO"||n==="CO2"||n==="C3O2")){if(n!=="CS2"){if(n==="HCN"||n==="CHN")return{key:"acid",label:ee()?"Axit":"Acid"};if(!r&&!a&&!h&&l&&o.length===2)return{key:"binary",label:ee()?"Hợp chất nhị nguyên":"Binary compound"};if(!r&&l&&a&&!h&&o.length===3)return{key:"compound",label:ee()?"Hợp chất":"Compound"};if(!r&&l&&h&&!a&&o.length===3)return{key:"compound",label:ee()?"Hợp chất":"Compound"};if(!(c&&!r&&!a&&!l&&!h)){const d=i.get("C")||1,u=i.get("H")||0,f=i.get("O")||0,m=i.get("N")||0,_=o.filter(p=>p==="F"||p==="Cl"||p==="Br"||p==="I"),g=o.filter(p=>p!=="C"&&p!=="H"&&p!=="O"&&p!=="N"&&p!=="F"&&p!=="Cl"&&p!=="Br"&&p!=="I");if(a&&g.length===0){if(f===1&&u===2*d+2&&!l)return{key:"alcohol",label:ee()?"Ancol":"Alcohol"};if(f===1&&u===2*d&&!l)return d<3?{key:"aldehyde",label:ee()?"Anđehit":"Aldehyde"}:{key:"ketone",label:ee()?"Xeton":"Ketone"};if(f===2&&u===2*d&&!l)return{key:"carboxylicAcid",label:ee()?"Axit cacboxylic":"Carboxylic acid"}}if(l&&!a&&g.length===0&&m===1&&u===2*d+3)return{key:"amine",label:ee()?"Amin":"Amine"};if(_.length>0&&g.length===0&&!a&&!l)return{key:"haloalkane",label:ee()?"Dẫn xuất halogen":"Haloalkane"};if(!(a&&o.length===2))return{key:"organic",label:ee()?"Hữu cơ":"Organic"}}}}if(s&&a&&r)return{key:"base",label:ee()?"Bazơ":"Base"};if(r&&o.length>=2&&!s){const d=o.filter(u=>u!=="H");if(d.length===1&&(d[0]==="F"||d[0]==="Cl"||d[0]==="Br"||d[0]==="I"))return{key:"acid",label:ee()?"Axit":"Acid"};if(d.some(u=>u==="S"||u==="N"||u==="P"))return{key:"acid",label:ee()?"Axit":"Acid"}}if(a&&o.length===2){const d=o.find(f=>f!=="O"),u=ut(d);return u&&xe(u)?{key:"basicOxide",label:ee()?"Oxit bazơ":"Basic oxide"}:{key:"acidicOxide",label:ee()?"Oxit axit":"Acidic oxide"}}return a&&r&&!s?{key:"acid",label:ee()?"Axit":"Acid"}:s&&a&&!r?{key:"basicOxide",label:ee()?"Oxit bazơ":"Basic oxide"}:s?{key:"salt",label:ee()?"Muối":"Salt"}:o.length===2&&!s?{key:"binary",label:ee()?"Hợp chất nhị nguyên":"Binary compound"}:{key:"compound",label:ee()?"Hợp chất":"Compound"}}const Ql=[{tier:1,formula:"H2O",charge:0,name:"Water",vi:"Nước"},{tier:1,formula:"CO2",charge:0,name:"Carbon dioxide",vi:"Cacbon dioxit"},{tier:1,formula:"CH4",charge:0,name:"Methane",vi:"Metan"},{tier:1,formula:"NH3",charge:0,name:"Ammonia",vi:"Amoniac"},{tier:1,formula:"O2",charge:0,name:"Dioxygen",vi:"Đioxi"},{tier:1,formula:"N2",charge:0,name:"Dinitrogen",vi:"Nitơ"},{tier:1,formula:"NaCl",charge:0,name:"Sodium chloride",vi:"Natri clorua"},{tier:1,formula:"HCl",charge:0,name:"Hydrogen chloride",vi:"Hiđro clorua"},{tier:1,formula:"CO",charge:0,name:"Carbon monoxide",vi:"Cacbon monoxit"},{tier:1,formula:"H2",charge:0,name:"Dihydrogen",vi:"Hiđro"},{tier:2,formula:"C2H6",charge:0,name:"Ethane",vi:"Etan"},{tier:2,formula:"C2H4",charge:0,name:"Ethene",vi:"Eten"},{tier:2,formula:"C2H2",charge:0,name:"Ethyne",vi:"Etin"},{tier:2,formula:"H2O2",charge:0,name:"Hydrogen peroxide",vi:"Hiđro peroxit"},{tier:2,formula:"SO2",charge:0,name:"Sulfur dioxide",vi:"Lưu huỳnh dioxit"},{tier:2,formula:"MgO",charge:0,name:"Magnesium oxide",vi:"Magie oxit"},{tier:2,formula:"CaCl2",charge:0,name:"Calcium chloride",vi:"Canxi clorua"},{tier:2,formula:"NaOH",charge:0,name:"Sodium hydroxide",vi:"Natri hidroxit"},{tier:2,formula:"O3",charge:0,name:"Ozone",vi:"Ozon"},{tier:2,formula:"HCN",charge:0,name:"Hydrogen cyanide",vi:"Axit xianhiđric"},{tier:3,formula:"OH-1",charge:-1,name:"Hydroxide ion",vi:"Ion hidroxit"},{tier:3,formula:"NH4+1",charge:1,name:"Ammonium ion",vi:"Ion amoni"},{tier:3,formula:"H3O+1",charge:1,name:"Hydronium ion",vi:"Ion hidroni"},{tier:3,formula:"H2SO4",charge:0,name:"Sulfuric acid",vi:"Axit sunfuric"},{tier:3,formula:"CaCO3",charge:0,name:"Calcium carbonate",vi:"Canxi cacbonat"},{tier:3,formula:"NO3-1",charge:-1,name:"Nitrate ion",vi:"Ion nitrat"},{tier:3,formula:"SO4-2",charge:-2,name:"Sulfate ion",vi:"Ion sunfat"},{tier:3,formula:"SF6",charge:0,name:"Sulfur hexafluoride",vi:"Lưu huỳnh hexaflorua"},{tier:3,formula:"C6H6",charge:0,name:"Benzene",vi:"Benzên"},{tier:3,formula:"XeF4",charge:0,name:"Xenon tetrafluoride",vi:"Xenon tetraflorua"},{tier:3,formula:"CH4O",charge:0,name:"Methanol",vi:"Metanol"},{tier:3,formula:"C2H4O2",charge:0,name:"Acetic acid",vi:"Axit axetic"},{tier:4,formula:"PO4-3",charge:-3,name:"Phosphate ion",vi:"Ion photphat"},{tier:4,formula:"CO3-2",charge:-2,name:"Carbonate ion",vi:"Ion cacbonat"},{tier:4,formula:"C3H8",charge:0,name:"Propane",vi:"Propan"},{tier:4,formula:"C4H10",charge:0,name:"Butane",vi:"Butan"},{tier:4,formula:"C3H6O",charge:0,name:"Acetone",vi:"Axeton"},{tier:4,formula:"C2H6O",charge:0,name:"Ethanol",vi:"Etanol"},{tier:4,formula:"PF5",charge:0,name:"Phosphorus pentafluoride",vi:"Photpho pentaflorua"},{tier:4,formula:"MnO4-1",charge:-1,name:"Permanganate ion",vi:"Ion pemanganat"},{tier:4,formula:"HNO3",charge:0,name:"Nitric acid",vi:"Axit nitric"},{tier:4,formula:"H3PO4",charge:0,name:"Phosphoric acid",vi:"Axit photphoric"},{tier:5,formula:"C6H12O6",charge:0,name:"Glucose",vi:"Glucozơ"},{tier:5,formula:"C8H18",charge:0,name:"Octane",vi:"Octan"},{tier:5,formula:"Cr2O7-2",charge:-2,name:"Dichromate ion",vi:"Ion đicromat"},{tier:5,formula:"UF6",charge:0,name:"Uranium hexafluoride",vi:"Urani hexaflorua"},{tier:5,formula:"CCl4",charge:0,name:"Carbon tetrachloride",vi:"Cacbon tetraclorua"},{tier:5,formula:"CH2Cl2",charge:0,name:"Dichloromethane",vi:"Điclometan"},{tier:5,formula:"CHO3-1",charge:-1,name:"Bicarbonate ion",vi:"Ion bicacbonat"},{tier:5,formula:"HSO4-1",charge:-1,name:"Bisulfate ion",vi:"Ion bisunfat"},{tier:6,formula:"C5H12",charge:0,name:"Pentane",vi:"Pentan"},{tier:6,formula:"C6H14",charge:0,name:"Hexane",vi:"Hекsan"},{tier:6,formula:"C2H4O2",charge:0,name:"Methyl formate",vi:"Metyl fomat"},{tier:6,formula:"C3H6O2",charge:0,name:"Methyl acetate",vi:"Metyl axetat"},{tier:6,formula:"C2H5ClO",charge:0,name:"Hypochlorous ethylic ester",vi:"Etyl hipoclorit"},{tier:6,formula:"C6H6O",charge:0,name:"Phenol",vi:"Phenol"},{tier:6,formula:"C2O4-2",charge:-2,name:"Oxalate ion",vi:"Ion oxalat"},{tier:6,formula:"ClO4-1",charge:-1,name:"Perchlorate ion",vi:"Ion perclorat"},{tier:7,formula:"C12H22O11",charge:0,name:"Sucrose",vi:"Saccarozơ"},{tier:7,formula:"C5H10O5",charge:0,name:"Ribose",vi:"Ribozơ"},{tier:7,formula:"C3H5N3O9",charge:0,name:"Nitroglycerin",vi:"Nitroglycerin"},{tier:7,formula:"C2H5NO2",charge:0,name:"Glycine",vi:"Glyxin"},{tier:7,formula:"C6H5NO2",charge:0,name:"Nicotinic acid (Niacin)",vi:"Axit nicotinic"},{tier:7,formula:"Fe(CN)6-3",charge:-3,name:"Ferricyanide ion",vi:"Ion ferricyanua"},{tier:8,formula:"C7H8O",charge:0,name:"Benzyl alcohol",vi:"Benzyl alcol"},{tier:8,formula:"C7H6O2",charge:0,name:"Benzoic acid",vi:"Axit benzoic"},{tier:8,formula:"C8H10N4O2",charge:0,name:"Caffeine",vi:"Caffeine"},{tier:8,formula:"C6H8O6",charge:0,name:"Ascorbic acid (Vitamin C)",vi:"Axit ascorbic"},{tier:8,formula:"C3H8O3",charge:0,name:"Glycerol",vi:"Glicerol"},{tier:8,formula:"Fe(CN)6-4",charge:-4,name:"Ferrocyanide ion",vi:"Ion ferrocyanua"},{tier:9,formula:"C10H14N2O",charge:0,name:"Nicotine",vi:"Nicotin"},{tier:9,formula:"C9H8O4",charge:0,name:"Aspirin",vi:"Aspirin"},{tier:9,formula:"C6H13NO2",charge:0,name:"Leucine",vi:"Leuxin"},{tier:9,formula:"C4H6O6",charge:0,name:"Tartaric acid",vi:"Axit tartaric"},{tier:9,formula:"PtCl4-2",charge:-2,name:"Tetrachloroplatinate ion",vi:"Ion tetracloroplatinat"},{tier:10,formula:"C16H18N2O4S",charge:0,name:"Penicillin G",vi:"Penicillin G"},{tier:10,formula:"C20H25N3O",charge:0,name:"LSD",vi:"LSD"},{tier:10,formula:"C17H19NO3",charge:0,name:"Morphine",vi:"Moocphin"},{tier:10,formula:"Co(NH3)6+3",charge:3,name:"Hexaamminecobalt(III) ion",vi:"Ion hexaamminecoban(III)"},{tier:11,formula:"Fe2O3",charge:0,name:"Iron(III) oxide",vi:"Sắt(III) oxit"},{tier:11,formula:"NO2",charge:0,name:"Nitrogen dioxide",vi:"Nitơ dioxit"},{tier:11,formula:"HNO3",charge:0,name:"Nitric acid",vi:"Axit nitric"},{tier:11,formula:"NaNO3",charge:0,name:"Sodium nitrate",vi:"Natri nitrat"},{tier:11,formula:"KNO3",charge:0,name:"Potassium nitrate",vi:"Kali nitrat"},{tier:11,formula:"CaSO4",charge:0,name:"Calcium sulfate",vi:"Canxi sulfat"},{tier:11,formula:"ZnSO4",charge:0,name:"Zinc sulfate",vi:"Kẽm sulfat"},{tier:11,formula:"AgNO3",charge:0,name:"Silver nitrate",vi:"Bạc nitrat"},{tier:11,formula:"CuSO4",charge:0,name:"Copper(II) sulfate",vi:"Đồng(II) sulfat"},{tier:11,formula:"CH4N2O",charge:0,name:"Urea",vi:"Urê"},{tier:12,formula:"C3H7NO2",charge:0,name:"Alanine",vi:"Alanin"},{tier:12,formula:"C5H11NO2",charge:0,name:"Valine",vi:"Valin"},{tier:12,formula:"C3H7NO3",charge:0,name:"Serine",vi:"Serin"},{tier:12,formula:"CuH12N4",charge:2,name:"Tetraamminecopper(II) ion",vi:"Ion tetraamminedong(II)"},{tier:12,formula:"AgH6N2",charge:1,name:"Diamminesilver(I) ion",vi:"Ion diamminebac(I)"}],rp=[{z:200,sym:"An",name:"Antimatter",mass:0,cat:"exotic",en:null,maxBonds:1,anionCharge:0,charges:null,radius:100,color:"#ff00ff"},{z:201,sym:"Dm",name:"Dark Matter",mass:999,cat:"exotic",en:null,maxBonds:0,anionCharge:0,charges:null,radius:150,color:"#1a1a2e"},{z:202,sym:"Ub",name:"Unobtainium",mass:500,cat:"exotic",en:null,maxBonds:10,anionCharge:0,charges:[10],radius:200,color:"#ffd700"},{z:203,sym:"Vb",name:"Vibranium",mass:300,cat:"exotic",en:10,maxBonds:12,anionCharge:0,charges:[6,4,2],radius:180,color:"#7b2cbf"},{z:204,sym:"Ad",name:"Adamantium",mass:800,cat:"exotic",en:null,maxBonds:8,anionCharge:0,charges:[4],radius:220,color:"#c0c0c0"},{z:205,sym:"My",name:"Mystery Element",mass:NaN,cat:"exotic",en:null,maxBonds:7,anionCharge:7,charges:null,radius:160,color:"#00ff9f"},{z:206,sym:"Ex",name:"Explosium",mass:50,cat:"exotic",en:.1,maxBonds:1,anionCharge:0,charges:[1],radius:120,color:"#ff0000"},{z:207,sym:"Nc",name:"Necrosium",mass:666,cat:"exotic",en:null,maxBonds:6,anionCharge:0,charges:[3],radius:170,color:"#000000"},{z:208,sym:"Qt",name:"Quantumite",mass:.001,cat:"exotic",en:null,maxBonds:20,anionCharge:0,charges:null,radius:80,color:"#00f0ff"},{z:209,sym:"Pl",name:"Plasma",mass:10,cat:"exotic",en:null,maxBonds:0,anionCharge:0,charges:null,radius:140,color:"#ff6b6b"}],ap=[{reactants:{An:1,H:1},condition:"rt",products:[],equation:"An + H -> ANNIHILATION!",effect:"annihilate",dynamic:!0},{reactants:{Ex:2},condition:"spark",products:[],equation:"2Ex -> BOOM!",effect:"explode",dynamic:!0},{reactants:{Ub:1,Vb:1},condition:"rt",products:[],equation:"Ub + Vb -> ULTIMATE ALLOY!",effect:"merge",dynamic:!0},{reactants:{Qt:1},condition:"rt",products:[],equation:"Qt -> SUPERPOSITION!",effect:"quantum",dynamic:!0},{reactants:{Nc:1,H2O:1},condition:"rt",products:[],equation:"Nc + H2O -> DECAY!",effect:"decay",dynamic:!0},{reactants:{Pl:1,O2:1},condition:"heat",products:[],equation:"Pl + O2 -> PLASMA STORM!",effect:"plasma",dynamic:!0}];function bM(n){return rp.find(t=>t.sym===n)}const cp={low:{key:"low",label:"Low",sphereSeg:[10,8],cylSeg:6,pixelRatio:1,drift:!1},med:{key:"med",label:"Medium",sphereSeg:[16,12],cylSeg:10,pixelRatio:1.5,drift:!0},high:{key:"high",label:"High",sphereSeg:[26,18],cylSeg:14,pixelRatio:2,drift:!0}},Ro=["low","med","high"];class EM{constructor({downFps:t=30,upFps:e=55,downMs:i=2e3,upMs:o=4e3}={}){this.downFps=t,this.upFps=e,this.downMs=i,this.upMs=o,this.lowSince=null,this.highSince=null}update(t,e,i=Ro.length-1){const o=performance.now();if(t<this.downFps){if(this.lowSince??=o,o-this.lowSince>=this.downMs&&e>0)return this.reset(),e-1}else this.lowSince=null;if(t>this.upFps){if(this.highSince??=o,o-this.highSince>=this.upMs&&e<i)return this.reset(),e+1}else this.highSince=null;return e}reset(){this.lowSince=null,this.highSince=null}}class CM{constructor(t=1e3){this.windowMs=t,this.frames=[]}frame(t){this.frames.push(t);const e=t-this.windowMs;for(;this.frames.length>2&&this.frames[0]<e;)this.frames.shift()}get fps(){if(this.frames.length<2)return 60;const t=this.frames[this.frames.length-1]-this.frames[0];return t>0?(this.frames.length-1)*1e3/t:60}}function AM({camera:n,controls:t}){const a=new Set,c={x:0,y:0};let l=0;const h=()=>{const p=document.activeElement;return p instanceof HTMLInputElement||p instanceof HTMLTextAreaElement},d=new Set(["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"]);window.addEventListener("keydown",p=>{if(p.key==="Shift"){a.add("shift");return}if(h())return;const y=p.key.toLowerCase();d.has(y)&&(p.preventDefault(),a.add(y))}),window.addEventListener("keyup",p=>{a.delete(p.key.toLowerCase()),p.key==="Shift"&&a.delete("shift")}),window.addEventListener("blur",()=>a.clear());const u=new P,f=new P,m=new P,_=new P(0,1,0);function g(p){let y=c.x,M=c.y,x=l;if((a.has("w")||a.has("arrowup"))&&(M+=1),(a.has("s")||a.has("arrowdown"))&&(M-=1),(a.has("a")||a.has("arrowleft"))&&(y-=1),(a.has("d")||a.has("arrowright"))&&(y+=1),a.has("e")&&(x+=1),a.has("q")&&(x-=1),!y&&!M&&!x)return!1;n.getWorldDirection(u),u.y=0,u.lengthSq()<1e-6&&u.set(0,0,-1),u.normalize(),f.crossVectors(u,_);const T=6*(a.has("shift")?2.25:1)*p;if(m.set(0,0,0).addScaledVector(u,M).addScaledVector(f,y),m.y+=x,m.lengthSq()===0)return!1;m.normalize().multiplyScalar(T),t.target.add(m),n.position.add(m),t.target.y=Math.max(-1.4,Math.min(9,t.target.y));const v=Math.hypot(t.target.x,t.target.z);if(v>45){const b=45/v;t.target.x*=b,t.target.z*=b}return!0}return{update:g,setStick:(p,y)=>{c.x=p,c.y=y},setVertical:p=>{l=p}}}const bo={H:{states:[1,-1],en:2.2},O:{states:[-2,-1],en:3.44},F:{states:[-1],en:3.98},Li:{states:[1],en:.98},Na:{states:[1],en:.93},K:{states:[1],en:.82},Rb:{states:[1],en:.82},Cs:{states:[1],en:.79},Be:{states:[2],en:1.57},Mg:{states:[2],en:1.31},Ca:{states:[2],en:1},Sr:{states:[2],en:.95},Ba:{states:[2],en:.95},Al:{states:[3],en:1.61},Zn:{states:[2],en:1.65},Ag:{states:[1],en:1.93},Cu:{states:[2,1],en:1.9},Fe:{states:[3,2],en:1.83},Mn:{states:[7,4,3,2],en:1.55},Cr:{states:[6,3,2],en:1.66},Ni:{states:[2],en:1.91},Co:{states:[3,2],en:1.88},Pb:{states:[2,4],en:2.33},Sn:{states:[2,4],en:1.96},Cl:{states:[-1,1,3,5,7],en:3.16},Br:{states:[-1,1,3,5],en:2.96},I:{states:[-1,1,3,5,7],en:2.66},S:{states:[-2,4,6],en:2.58},N:{states:[-3,-2,-1,1,2,3,4,5],en:3.04},P:{states:[-3,3,5],en:2.19},C:{states:[4,2,-4],en:2.55},W:{states:[6],en:2.36},Mo:{states:[6,5,4,3,2],en:2.16},V:{states:[5,4,3,2],en:1.63},Ti:{states:[4,3,2],en:1.54},Au:{states:[3,1],en:2.54},Pt:{states:[4,2],en:2.28},Pd:{states:[4,2],en:2.2},Hg:{states:[2,1],en:2},Cd:{states:[2],en:1.69},As:{states:[-3,3,5],en:2.18},Sb:{states:[-3,3,5],en:2.05},Bi:{states:[3,5],en:2.02},Se:{states:[-2,4,6],en:2.55},Te:{states:[-2,4,6],en:2.1},B:{states:[3],en:2.04},Si:{states:[4],en:1.9},Ge:{states:[4,2],en:2.01}},TM=new Set(["Li","Na","K","Rb","Cs","Be","Mg","Ca","Sr","Ba","Al","Zn","Ag","Cu","Fe","Mn","Cr","Ni","Co","Pb","Sn","W","Mo","V","Ti","Au","Pt","Pd","Hg","Cd","Bi","Sb"]);function qi(n){return TM.has(n)}function gi(n,t){const e=typeof t=="string"?wM(t):t;if(!e||!e.has(n))return 0;const i=bo[n];if(!i)return 0;if(n==="F")return-1;if(n==="O"){const a=e.get("O");if(e.size===2&&e.has("H")&&e.get("H")===a&&a>=2)return-1;for(const c of["Na","K","Rb","Cs"])if(e.has(c)){const l=e.get(c);if(a===l&&a>=2)return-1;if(a===2*l&&l>=1)return-.5}return-2}if(n==="H")return[...e.keys()].some(c=>c!=="H"&&c!=="O"&&qi(c))&&!e.has("O")?-1:1;const o=e.get(n);let s=0,r=0;for(const[a,c]of e){if(a===n)continue;const l=bo[a];if(!l){r+=c;continue}let h;a==="F"?h=-1:a==="O"?h=-2:a==="H"?h=qi(n)?-1:1:l.en>i.en?h=l.states.find(u=>u<0)??l.states[0]:h=l.states.find(u=>u>0)??l.states[0],s+=h*c}if(r>0&&o>0){const c=-s/o;return i.states.reduce((h,d)=>Math.abs(d-c)<Math.abs(h-c)?d:h)}if(o>0){const c=-s/o,l=i.states.find(d=>Math.abs(d-c)<.01);return l!==void 0?l:i.states.reduce((d,u)=>Math.abs(u-c)<Math.abs(d-c)?u:d)}return i.states[0]}function wM(n){const t=new Map,e=/([A-Z][a-z]?)(\d*)/g;let i;for(;(i=e.exec(n))!==null;){if(!i[1])continue;const o=i[2]?parseInt(i[2]):1;t.set(i[1],(t.get(i[1])||0)+o)}return t.size>0?t:null}const ne={ALCOHOL:"alcohol",PHENOL:"phenol",ALDEHYDE:"aldehyde",KETONE:"ketone",CARBOXYL:"carboxyl",ESTER:"ester",ETHER:"ether",AMINE_PRIMARY:"amine_1",AMINE_SECONDARY:"amine_2",AMINE_TERTIARY:"amine_3",AMIDE:"amide",ALKENE:"alkene",ALKYNE:"alkyne",ARYL:"aryl",HALIDE:"halide",NITRILE:"nitrile",NITRO:"nitro",THIOL:"thiol",ACYL_CHLORIDE:"acyl_chloride",EPOXIDE:"epoxide"};function ji(n,t){const e=n.map(()=>[]);for(let i=0;i<t.length;i++){const[o,s,r]=t[i];o>=n.length||s>=n.length||(e[o].push({j:s,order:r||1,bondIdx:i}),e[s].push({i:o,order:r||1,bondIdx:i}))}return e}function Zo(n,t,e,i){let o=0;for(const s of n[e]){const r=s.j!==void 0?s.j:s.i;t[r]===i&&o++}return o}function Di(n,t){return n[t].map(e=>e.j!==void 0?e.j:e.i)}function ui(n,t,e){return n[t].filter(i=>i.order===e)}function sa(n,t,e){if(t[e]!=="C")return!1;const i=lp(n,t,e,6,["C"]);if(!i)return!1;let o=0;for(let s=0;s<i.length;s++){const r=i[s],a=i[(s+1)%i.length],c=n[r].find(l=>l.j===a||l.i===a);c&&c.order>=2&&o++,c&&Math.abs(c.order-1.5)<.1&&(o+=.5)}return o>=2.5}function lp(n,t,e,i,o){const s=o?new Set(o):null,r=[e],a=new Set([e]);function c(l,h){if(h===i)return n[l].some(u=>(u.j!==void 0?u.j:u.i)===e&&r.length===i)?[...r]:null;for(const d of n[l]){const u=d.j!==void 0?d.j:d.i;if(a.has(u)||s&&!s.has(t[u])||h<i-1&&!up(n,u,e,a,i-h-1))continue;a.add(u),r.push(u);const f=c(u,h+1);if(f)return f;r.pop(),a.delete(u)}return null}return c(e,1)}function up(n,t,e,i,o){if(o<=0)return!1;for(const s of n[t]){const r=s.j!==void 0?s.j:s.i;if(r===e)return!0;if(!i.has(r)&&up(n,r,e,i,o-1))return!0}return!1}function Yi(n){if(!n||!n.atoms||!n.bonds)return[];const{atoms:t,bonds:e}=n,i=ji(t,e),o=[],s=new Set;function r(c,l){const h=c+":"+l.sort().join(",");s.has(h)||(s.add(h),o.push({group:c,atomIndices:l}))}for(let c=0;c<t.length;c++){const l=t[c],h=Di(i,c);if(l==="O"&&Zo(i,t,c,"H")===1){const d=h.filter(u=>t[u]==="C");if(d.length===1){const u=d[0];if(sa(i,t,u))r(ne.PHENOL,[u,c,...h.filter(f=>t[f]==="H")]);else{const f=h.filter(m=>t[m]==="H");r(ne.ALCOHOL,[u,c,...f])}}}if(l==="C"){const d=ui(i,c,2).filter(f=>{const m=f.j!==void 0?f.j:f.i;return t[m]==="O"});if(d.length===1){const f=d[0].j!==void 0?d[0].j:d[0].i,m=Di(i,c).filter(y=>t[y]==="C"&&y!==f),_=Di(i,c).filter(y=>t[y]==="H");_.length>=1&&m.length<=1?r(ne.ALDEHYDE,[c,f,..._.slice(0,1)]):m.length>=2&&r(ne.KETONE,[c,f,...m.slice(0,2)]);const g=ui(i,c,1).filter(y=>{const M=y.j!==void 0?y.j:y.i;return t[M]==="O"});for(const y of g){const M=y.j!==void 0?y.j:y.i;if(Zo(i,t,M,"H")===1){r(ne.CARBOXYL,[c,f,M]);break}}for(const y of g){const M=y.j!==void 0?y.j:y.i;if(Zo(i,t,M,"H")===0&&Zo(i,t,M,"C")>=1){r(ne.ESTER,[c,f,M]);break}}const p=Di(i,c).filter(y=>t[y]==="Cl");p.length>=1&&r(ne.ACYL_CHLORIDE,[c,f,p[0]])}const u=ui(i,c,3).filter(f=>{const m=f.j!==void 0?f.j:f.i;return t[m]==="N"});if(u.length===1){const f=u[0].j!==void 0?u[0].j:u[0].i;r(ne.NITRILE,[c,f])}}if(l==="O"&&Zo(i,t,c,"H")===0){const d=h.filter(u=>t[u]==="C");d.length===2&&(d.some(f=>ui(i,f,2).some(m=>{const _=m.j!==void 0?m.j:m.i;return t[_]==="O"}))||r(ne.ETHER,[d[0],c,d[1]]))}if(l==="N"){const d=h.filter(f=>t[f]==="C"),u=h.filter(f=>t[f]==="H");d.length===1&&u.length>=1?r(ne.AMINE_PRIMARY,[c,d[0],...u]):d.length===2?r(ne.AMINE_SECONDARY,[c,...d]):d.length>=3&&r(ne.AMINE_TERTIARY,[c,...d.slice(0,3)])}if(l==="N"){const d=h.filter(u=>t[u]==="C");for(const u of d)if(ui(i,u,2).some(m=>{const _=m.j!==void 0?m.j:m.i;return t[_]==="O"})){r(ne.AMIDE,[u,...Di(i,u).filter(m=>t[m]==="O"),c]);break}}if(l==="C"){const d=ui(i,c,2).filter(u=>{const f=u.j!==void 0?u.j:u.i;return t[f]==="C"});for(const u of d){const f=u.j!==void 0?u.j:u.i;f>c&&!sa(i,t,c)&&!sa(i,t,f)&&r(ne.ALKENE,[c,f])}}if(l==="C"){const d=ui(i,c,3).filter(u=>{const f=u.j!==void 0?u.j:u.i;return t[f]==="C"});for(const u of d){const f=u.j!==void 0?u.j:u.i;f>c&&r(ne.ALKYNE,[c,f])}}if(l==="C")for(const d of h)["F","Cl","Br","I"].includes(t[d])&&r(ne.HALIDE,[c,d]);if(l==="S"&&Zo(i,t,c,"H")>=1){const d=h.filter(u=>t[u]==="C");d.length>=1&&r(ne.THIOL,[d[0],c])}if(l==="N"){const d=ui(i,c,2).filter(f=>{const m=f.j!==void 0?f.j:f.i;return t[m]==="O"}),u=ui(i,c,1).filter(f=>{const m=f.j!==void 0?f.j:f.i;return t[m]==="O"});if(d.length>=1&&u.length>=1){const f=h.filter(m=>t[m]==="C");f.length>=1&&r(ne.NITRO,[c,...f.slice(0,1)])}}if(l==="O"){const d=h.filter(u=>t[u]==="C");if(d.length===2){const[u,f]=d;i[u].some(_=>(_.j!==void 0?_.j:_.i)===f)&&r(ne.EPOXIDE,[u,c,f])}}}const a=new Set;for(let c=0;c<t.length;c++)if(t[c]==="C"&&sa(i,t,c)){const l=lp(i,t,c,6,["C"]);if(l){const h=l.slice().sort().join(",");a.has(h)||(a.add(h),r(ne.ARYL,l))}}return o}function RM(n,t){if(!t||t.group!==ne.ALCOHOL)return null;const e=ji(n.atoms,n.bonds),i=t.atomIndices.find(r=>n.atoms[r]==="O"),o=Di(e,i).find(r=>n.atoms[r]==="C");if(o===void 0)return null;const s=Di(e,o).filter(r=>n.atoms[r]==="C");return s.length===0?"methyl":s.length===1?"primary":s.length===2?"secondary":"tertiary"}function hp(n,t){if(!t||t.group!==ne.HALIDE)return null;const e=ji(n.atoms,n.bonds),i=t.atomIndices.find(s=>n.atoms[s]==="C");if(i===void 0)return null;const o=Di(e,i).filter(s=>n.atoms[s]==="C");return o.length===0?"methyl":o.length===1?"primary":o.length===2?"secondary":"tertiary"}const OM=[{id:"carbonate",match:n=>{const t=n.get("C")||0,e=n.get("O")||0;return Be(n).length>0&&t>=1&&e>=3&&e/t>=3},products:n=>{const t=Be(n);return[Ws(t),"CO2"]}},{id:"hydrogenCarbonate",match:n=>{const t=n.get("H")||0,e=n.get("C")||0,i=n.get("O")||0;return Be(n).length>0&&t>0&&e>=1&&i>=3},products:n=>{const t=Be(n);return[NM(t),"CO2","H2O"]}},{id:"hydroxide",match:n=>{const t=n.get("H")||0,e=n.get("O")||0,i=Be(n);if(i.length===0||t===0||e===0)return!1;const o=i[0];return!["Li","Na","K","Rb","Cs"].includes(o)},products:n=>{const t=Be(n);return[Ws(t),"H2O"]}},{id:"nitrate",match:n=>{const t=n.get("N")||0,e=n.get("O")||0;return Be(n).length>0&&t>=1&&e>=3&&e/t>=3},products:n=>{const t=Be(n),e=t[0];return["Li","Na","K","Rb","Cs","Ca","Ba","Sr"].includes(e)?[PM(t),"O2"]:[Ws(t),"NO2","O2"]}},{id:"chlorate",match:n=>{const t=n.get("Cl")||0,e=n.get("O")||0;return Be(n).length>0&&t>=1&&e===3},products:n=>{const t=Be(n);return[LM(t),"O2"]}},{id:"permanganate",match:n=>{const t=n.get("K")||0,e=n.get("Mn")||0,i=n.get("O")||0;return t>0&&e>0&&i===4},products:()=>["K2MnO4","MnO2","O2"]},{id:"ammoniumSalt",match:n=>{const t=n.get("N")||0,e=n.get("H")||0;return t>=1&&e>=4&&e/t===4&&!Be(n).length},products:n=>{const t=n.get("Cl")||0,e=(n.get("N")||0)>=2&&(n.get("O")||0)>=3;return t>0?["NH3","HCl"]:e?["NH3","HNO3"]:(n.get("S")||0)>0?["NH3","H2SO4"]:["NH3"]}},{id:"peroxide",match:n=>{const t=n.get("O")||0,e=Be(n);if(e.length===0)return!1;const i=e[0],o=n.get(i)||1;return t/o>=1&&t/o<=1.5},products:n=>{const t=Be(n);return[Ws(t),"O2"]}},{id:"hydrate",match:n=>{const t=n.get("H")||0,e=n.get("O")||0;if(Be(n).length===0)return!1;const o=DM(n);return t>=2&&e>o&&t%2===0},products:n=>{const t=Be(n);return[FM(n,t),"H2O"]}},{id:"nobleOxide",match:n=>{const t=Be(n);if(t.length===0)return!1;const e=t[0];return["Ag","Hg","Au"].includes(e)},products:n=>[Be(n)[0],"O2"]},{id:"sulfate",match:n=>{const t=n.get("S")||0,e=n.get("O")||0,i=Be(n);if(i.length===0||t===0)return!1;const o=i[0];return!["Na","K","Li"].includes(o)&&e/t>=4},products:n=>{const t=Be(n);return[Ws(t),"SO3"]}}],IM=new Set(["Li","Na","K","Rb","Cs","Be","Mg","Ca","Sr","Ba","Al","Zn","Ag","Cu","Fe","Mn","Cr","Ni","Co","Pb","Sn","W","Mo","V","Ti","Au","Pt","Pd","Hg","Cd","Cd","Bi"]);function Be(n){const t=[];for(const e of n.keys())IM.has(e)&&t.push(e);return t}function Ws(n){if(n.length===0)return"O2";const t=n[0],i={Li:1,Na:1,K:1,Rb:1,Cs:1,Be:2,Mg:2,Ca:2,Sr:2,Ba:2,Al:3,Zn:2,Ag:1,Cu:2,Fe:3,Mn:2,Cr:3,Ni:2,Co:2,Pb:2,Sn:2,W:6,Mo:6,V:5,Ti:4,Au:3,Pt:4,Pd:2,Hg:2,Cd:2,Bi:3,Fe2:2}[t]||2;return i===2?`${t}O`:i===1?`${t}2O`:`${t}2O${i}`}function PM(n){const t=n[0],i={Li:1,Na:1,K:1,Rb:1,Cs:1,Ca:2,Ba:2,Sr:2}[t]||1;return i===1?`${t}NO2`:`${t}(NO2)${i}`}function LM(n){const t=n[0],i={Li:1,Na:1,K:1,Rb:1,Cs:1,Be:2,Mg:2,Ca:2,Sr:2,Ba:2,Al:3,Zn:2,Ag:1,Cu:2,Fe:3,Mn:2,Cr:3,Ni:2,Co:2,Pb:2,Sn:2}[t]||2;return i===1?`${t}Cl`:i===2?`${t}Cl2`:`${t}Cl${i}`}function NM(n){const t=n[0],i={Li:1,Na:1,K:1,Rb:1,Cs:1,Ca:2,Ba:2,Sr:2,Mg:2,Zn:2,Cu:2,Fe:3,Al:3}[t]||2;return i===1?`${t}HCO3`:i===2?`${t}CO3`:`${t}2(CO3)${i}`}function DM(n,t){const i=(n.get("H")||0)/2;return(n.get("O")||0)-i}function FM(n,t){const i=(n.get("H")||0)/2,o=t[0],s=n.get(o)||1,a=(n.get("O")||0)-i;let c=o;s>1&&(c+=s);const l=[...n.keys()].filter(h=>h!=="H"&&h!=="O"&&h!==o);for(const h of l)c+=h+(n.get(h)||"");return a>0&&(c+="O"+(a>1?a:"")),c}const mr={CuSO4:{water:5,name:"copper(II) sulfate pentahydrate",color:"blue"},CaSO4:{water:2,name:"calcium sulfate dihydrate (gypsum)",color:"white"},Na2CO3:{water:10,name:"sodium carbonate decahydrate",color:"white"},CoCl2:{water:6,name:"cobalt(II) chloride hexahydrate",color:"pink"},NiCl2:{water:6,name:"nickel(II) chloride hexahydrate",color:"green"},FeCl3:{water:6,name:"iron(III) chloride hexahydrate",color:"yellow-brown"},FeSO4:{water:7,name:"iron(II) sulfate heptahydrate",color:"green"},MgSO4:{water:7,name:"magnesium sulfate heptahydrate",color:"white"},ZnSO4:{water:7,name:"zinc sulfate heptahydrate",color:"white"},MnSO4:{water:7,name:"manganese(II) sulfate heptahydrate",color:"pink"},AlCl3:{water:6,name:"aluminum chloride hexahydrate",color:"white"},CrCl3:{water:6,name:"chromium(III) chloride hexahydrate",color:"violet"},Na2SO4:{water:10,name:"sodium sulfate decahydrate",color:"white"},CaCl2:{water:6,name:"calcium chloride hexahydrate",color:"white"},MgCl2:{water:6,name:"magnesium chloride hexahydrate",color:"white"},BaCl2:{water:2,name:"barium chloride dihydrate",color:"white"},SrCl2:{water:6,name:"strontium chloride hexahydrate",color:"white"},LiCl:{water:2,name:"lithium chloride dihydrate",color:"white"},K2Cr2O7:{water:0,name:"potassium dichromate (anhydrous)",color:"orange"},KMnO4:{water:0,name:"potassium permanganate (anhydrous)",color:"purple"}},HM={Cu2:6,Cu:4,Zn:6,Fe2:6,Fe:6,Co:6,Ni:6,Mn:6,Cr:6,Al:6,Ag:2,Pt:4,Pd:4,Au:4,Ca:6,Mg:6,Ba:8,Sr:6,Na:6,K:6,Li:4,Sn:6,Pb:6,Cd:6,Hg:4,Ti:6,V:6,W:6,Mo:6};function UM(n,t){if(mr[n])return mr[n].water;const e=dp(t);if(e.length===0)return 0;const i=e[0];return HM[i]||6}function BM(n){if(mr[n])return mr[n].water>0;const t=GM(n);return t?dp(t).length>0:!1}function kM(n,t){return t===0?n:t===1?`${n}.H2O`:`${n}.${t}H2O`}function zM(n,t){if(!n||t<=0)return n;const e=[...n.atoms],i=[...n.bonds.map(s=>[...s])],o=VM(e);if(o<0)return n;for(let s=0;s<t;s++){const r=e.length;e.push("O");const a=e.length;e.push("H");const c=e.length;e.push("H"),i.push([o,r,1,!0]),i.push([r,a,1]),i.push([r,c,1])}return{atoms:e,bonds:i}}function dp(n){const t=new Set(["Cu","Zn","Fe","Co","Ni","Mn","Cr","Ag","Pt","Pd","Au","Ti","V","W","Mo","Cd","Hg","Sn","Pb"]),e=[];for(const i of n.keys())t.has(i)&&e.push(i);return e}function VM(n){const t=new Set(["Cu","Zn","Fe","Co","Ni","Mn","Cr","Ag","Pt","Pd","Au","Ti","V","W","Mo","Cd","Hg","Sn","Pb","Ca","Mg","Ba","Sr","Al"]);for(let e=0;e<n.length;e++)if(t.has(n[e]))return e;return-1}function GM(n){const t=new Map,e=/([A-Z][a-z]?)(\d*)/g;let i;for(;(i=e.exec(n))!==null;){if(!i[1])continue;const o=i[2]?parseInt(i[2]):1;t.set(i[1],(t.get(i[1])||0)+o)}return t.size>0?t:null}const ds={Li:{sym:"Li",charge:1,group:1},Na:{sym:"Na",charge:1,group:1},K:{sym:"K",charge:1,group:1},Rb:{sym:"Rb",charge:1,group:1},Cs:{sym:"Cs",charge:1,group:1},NH4:{sym:"NH4",charge:1,group:-1},Ag:{sym:"Ag",charge:1,group:-2},Pb:{sym:"Pb",charge:2,group:-2},Hg2:{sym:"Hg2",charge:2,group:-2},Ba:{sym:"Ba",charge:2,group:2},Sr:{sym:"Sr",charge:2,group:2},Ca:{sym:"Ca",charge:2,group:2},Mg:{sym:"Mg",charge:2,group:2},Fe:{sym:"Fe",charge:3,group:-3},Fe2:{sym:"Fe",charge:2,group:-3},Cu:{sym:"Cu",charge:2,group:-3},Cu1:{sym:"Cu",charge:1,group:-3},Zn:{sym:"Zn",charge:2,group:-3},Al:{sym:"Al",charge:3,group:-3},Cr:{sym:"Cr",charge:3,group:-3},Ni:{sym:"Ni",charge:2,group:-3},Co:{sym:"Co",charge:2,group:-3},Mn:{sym:"Mn",charge:2,group:-3}},WM={NO3:{sym:"NO3",charge:-1,type:"nitrate"},NO2:{sym:"NO2",charge:-1,type:"nitrite"},C2H3O2:{sym:"C2H3O2",charge:-1,type:"acetate"},Cl:{sym:"Cl",charge:-1,type:"halide"},Br:{sym:"Br",charge:-1,type:"halide"},I:{sym:"I",charge:-1,type:"halide"},SO4:{sym:"SO4",charge:-2,type:"sulfate"},SO3:{sym:"SO3",charge:-2,type:"sulfite"},HSO4:{sym:"HSO4",charge:-1,type:"hydrogenSulfate"},HCO3:{sym:"HCO3",charge:-1,type:"hydrogenCarbonate"},H2PO4:{sym:"H2PO4",charge:-1,type:"dihydrogenPhosphate"},OH:{sym:"OH",charge:-1,type:"hydroxide"},S:{sym:"S",charge:-2,type:"sulfide"},CO3:{sym:"CO3",charge:-2,type:"carbonate"},PO4:{sym:"PO4",charge:-3,type:"phosphate"},CrO4:{sym:"CrO4",charge:-2,type:"chromate"},SiO3:{sym:"SiO3",charge:-2,type:"silicate"},ClO:{sym:"ClO",charge:-1,type:"hypochlorite"},ClO2:{sym:"ClO2",charge:-1,type:"chlorite"},ClO3:{sym:"ClO3",charge:-1,type:"chlorate"},ClO4:{sym:"ClO4",charge:-1,type:"perchlorate"},MnO4:{sym:"MnO4",charge:-1,type:"permanganate"},AlO2:{sym:"AlO2",charge:-1,type:"metalate"},ZnO2:{sym:"ZnO2",charge:-2,type:"metalate"},CN:{sym:"CN",charge:-1,type:"cyanide"}};function tu(n,t){return!n||!t||n.group===1||n.sym==="NH4"||t.type==="nitrate"||t.type==="acetate"?!0:t.type==="halide"?!(n.sym==="Ag"||n.sym==="Pb"||n.sym==="Hg2"):t.type==="sulfate"?!(n.sym==="Ba"||n.sym==="Sr"||n.sym==="Pb"):t.type==="hydrogenCarbonate"||t.type==="hydrogenSulfate"||t.type==="dihydrogenPhosphate"||t.type==="metalate"||t.type==="permanganate"||t.type==="chlorate"||t.type==="perchlorate"||t.type==="hypochlorite"||t.type==="chlorite"||t.type==="nitrite"?!0:t.type==="cyanide"?!(n.sym==="Ag"||n.sym==="Pb"):!(t.type==="hydroxide"||t.type==="sulfide"||t.type==="carbonate"||t.type==="phosphate"||t.type==="chromate"||t.type==="sulfite"||t.type==="silicate")}const tt={H2O:{atoms:["O","H","H"],bonds:[[0,1,1],[0,2,1]]},HCl:{atoms:["H","Cl"],bonds:[[0,1,1]]},NH3:{atoms:["N","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1]]},MgO:{atoms:["Mg","O"],bonds:[[0,1,2,!0]]},NaCl:{atoms:["Na","Cl"],bonds:[[0,1,1,!0]]},CaO:{atoms:["Ca","O"],bonds:[[0,1,2,!0]]},CaOH2:{atoms:["Ca","O","O","H","H"],bonds:[[0,1,1,!0],[0,2,1,!0],[1,3,1],[2,4,1]]},CaCO3:{atoms:["Ca","C","O","O","O"],bonds:[[0,2,1,!0],[0,3,1,!0],[1,2,1],[1,3,1],[1,4,2]]},NaOH:{atoms:["Na","O","H"],bonds:[[0,1,1,!0],[1,2,1]]},KOH:{atoms:["K","O","H"],bonds:[[0,1,1,!0],[1,2,1]]},MgCl2:{atoms:["Mg","Cl","Cl"],bonds:[[0,1,1,!0],[0,2,1,!0]]},AlCl3:{atoms:["Al","Cl","Cl","Cl"],bonds:[[0,1,1,!0],[0,2,1,!0],[0,3,1,!0]]},CO2:{atoms:["C","O","O"],bonds:[[0,1,2],[0,2,2]]},O2:{atoms:["O","O"],bonds:[[0,1,2]]},O3:{atoms:["O","O","O"],bonds:[[0,1,1],[1,2,2]]},NO:{atoms:["N","O"],bonds:[[0,1,2]]},H2:{atoms:["H","H"],bonds:[[0,1,1]]},SO2:{atoms:["S","O","O"],bonds:[[0,1,2],[0,2,2]]},SO3:{atoms:["S","O","O","O"],bonds:[[0,1,2],[0,2,2],[0,3,2]]},H2SO4:{atoms:["S","O","O","O","O","H","H"],bonds:[[0,1,2],[0,2,2],[0,3,1],[0,4,1],[3,5,1],[4,6,1]]},HNO3:{atoms:["H","O","N","O","O"],bonds:[[0,1,1],[1,2,1],[2,3,2],[2,4,2]]},NH4:{atoms:["N","H","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]],charge:1},ClI:{atoms:["Cl"],bonds:[],charge:-1},MnO2:{atoms:["Mn","O","O"],bonds:[[0,1,2,!0],[0,2,2,!0]]},MnCl2:{atoms:["Mn","Cl","Cl"],bonds:[[0,1,1,!0],[0,2,1,!0]]},Cl2:{atoms:["Cl","Cl"],bonds:[[0,1,1]]},KCl:{atoms:["K","Cl"],bonds:[[0,1,1,!0]]},Na2SO4:{atoms:["Na","Na","S","O","O","O","O"],bonds:[[0,5,1,!0],[1,6,1,!0],[2,3,2],[2,4,2],[2,5,1],[2,6,1]]},K2SO4:{atoms:["K","K","S","O","O","O","O"],bonds:[[0,5,1,!0],[1,6,1,!0],[2,3,2],[2,4,2],[2,5,1],[2,6,1]]},CaCl2:{atoms:["Ca","Cl","Cl"],bonds:[[0,1,1,!0],[0,2,1,!0]]},Al2O3:{atoms:["Al","Al","O","O","O"],bonds:[[0,2,2,!0],[0,3,2,!0],[0,4,2,!0],[1,2,2,!0],[1,3,2,!0],[1,4,2,!0]]},Fe:{atoms:["Fe"],bonds:[]},Cu:{atoms:["Cu"],bonds:[]},Ag:{atoms:["Ag"],bonds:[]},Zn:{atoms:["Zn"],bonds:[]},Na:{atoms:["Na"],bonds:[]},Al:{atoms:["Al"],bonds:[]},K:{atoms:["K"],bonds:[]},Ca:{atoms:["Ca"],bonds:[]},Mg:{atoms:["Mg"],bonds:[]},CH4:{atoms:["C","H","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]]},C2H6:{atoms:["C","C","H","H","H","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1],[1,5,1],[1,6,1],[1,7,1]]},C3H8:{atoms:["C","C","C","H","H","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[0,3,1],[0,4,1],[0,5,1],[1,6,1],[1,7,1],[2,8,1],[2,9,1],[2,10,1]]},C2H4:{atoms:["C","C","H","H","H","H"],bonds:[[0,1,2],[0,2,1],[0,3,1],[1,4,1],[1,5,1]]},C3H6:{atoms:["C","C","C","H","H","H","H","H","H"],bonds:[[0,1,2],[1,2,1],[0,3,1],[0,4,1],[1,5,1],[2,6,1],[2,7,1],[2,8,1]]},C2H2:{atoms:["C","C","H","H"],bonds:[[0,1,3],[0,2,1],[1,3,1]]},C6H6:{atoms:["C","C","C","C","C","C","H","H","H","H","H","H"],bonds:[[0,1,2],[1,2,1],[2,3,2],[3,4,1],[4,5,2],[5,0,1],[0,6,1],[1,7,1],[2,8,1],[3,9,1],[4,10,1],[5,11,1]]},CH4O:{atoms:["C","O","H","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1],[1,5,1]]},C2H6O:{atoms:["C","C","O","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[0,3,1],[0,4,1],[0,5,1],[1,6,1],[1,7,1],[2,8,1]]},CH2O:{atoms:["C","O","H","H"],bonds:[[0,1,2],[0,2,1],[0,3,1]]},C2H4O:{atoms:["C","C","O","H","H","H","H"],bonds:[[0,1,1],[1,2,2],[0,3,1],[0,4,1],[0,5,1],[1,6,1]]},C3H6O:{atoms:["C","C","C","O","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[1,3,2],[0,4,1],[0,5,1],[0,6,1],[2,7,1],[2,8,1],[2,9,1]]},CH2O2:{atoms:["C","O","O","H","H"],bonds:[[0,1,2],[0,2,1],[0,3,1],[2,4,1]]},C2H4O2:{atoms:["C","C","O","O","H","H","H","H"],bonds:[[0,1,1],[1,2,2],[1,3,1],[0,4,1],[0,5,1],[0,6,1],[3,7,1]]},C3H6O2:{atoms:["C","C","O","O","C","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,2],[1,3,1],[3,4,1],[0,5,1],[0,6,1],[0,7,1],[4,8,1],[4,9,1],[4,10,1]]},C4H8O2:{atoms:["C","C","O","O","C","C","H","H","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,2],[1,3,1],[3,4,1],[4,5,1],[0,6,1],[0,7,1],[0,8,1],[4,9,1],[4,10,1],[5,11,1],[5,12,1],[5,13,1]]},CH5N:{atoms:["C","N","H","H","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1],[1,5,1],[1,6,1]]},C2H7N:{atoms:["C","C","N","H","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[0,3,1],[0,4,1],[0,5,1],[1,6,1],[1,7,1],[2,8,1],[2,9,1]]},CH3Cl:{atoms:["C","Cl","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]]},CH2Cl2:{atoms:["C","Cl","Cl","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]]},CHCl3:{atoms:["C","Cl","Cl","Cl","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]]},CCl4:{atoms:["C","Cl","Cl","Cl","Cl"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]]},C2H5Cl:{atoms:["C","C","Cl","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[0,3,1],[0,4,1],[0,5,1],[1,6,1],[1,7,1]]},HBr:{atoms:["H","Br"],bonds:[[0,1,1]]},HI:{atoms:["H","I"],bonds:[[0,1,1]]},HF:{atoms:["H","F"],bonds:[[0,1,1]]},Br2:{atoms:["Br","Br"],bonds:[[0,1,1]]},F2:{atoms:["F","F"],bonds:[[0,1,1]]},I2:{atoms:["I","I"],bonds:[[0,1,1]]},Na2O:{atoms:["Na","Na","O"],bonds:[[0,2,1,!0],[1,2,1,!0]]},K2O:{atoms:["K","K","O"],bonds:[[0,2,1,!0],[1,2,1,!0]]},N2:{atoms:["N","N"],bonds:[[0,1,3]]},C2H5NO2:{atoms:["C","C","N","O","O","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[0,3,2],[1,4,1],[0,5,1],[1,6,1],[2,7,1],[2,8,1],[4,9,1]]},C3H7NO2:{atoms:["C","C","C","N","O","O","H","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[2,3,1],[1,4,2],[2,5,1],[0,6,1],[0,7,1],[1,8,1],[2,9,1],[3,10,1],[3,11,1],[5,12,1]]},C5H11NO2:{atoms:["C","C","C","C","C","N","O","O","H","H","H","H","H","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[2,3,1],[3,4,1],[4,5,1],[3,6,2],[4,7,1],[0,8,1],[0,9,1],[1,10,1],[2,11,1],[3,12,1],[4,13,1],[5,14,1],[5,15,1],[6,16,1],[7,17,1],[5,18,1]]},C3H7NO3:{atoms:["C","C","C","N","O","O","O","H","H","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[2,3,1],[1,4,2],[2,5,1],[2,6,1],[0,7,1],[0,8,1],[1,9,1],[2,10,1],[3,11,1],[3,12,1],[4,13,1],[6,14,1]]},CH4N2O:{atoms:["C","O","N","N","H","H","H","H"],bonds:[[0,1,2],[0,2,1],[0,3,1],[2,4,1],[2,5,1],[3,6,1],[3,7,1]]},CuH12N4:{atoms:["Cu","N","N","N","N","H","H","H","H","H","H","H","H","H","H","H","H"],bonds:[[0,1,1,!0],[0,2,1,!0],[0,3,1,!0],[0,4,1,!0],[1,5,1],[1,6,1],[1,7,1],[2,8,1],[2,9,1],[2,10,1],[3,11,1],[3,12,1],[3,13,1],[4,14,1],[4,15,1],[4,16,1]],charge:2},AgH6N2:{atoms:["Ag","N","N","H","H","H","H","H","H"],bonds:[[0,1,1,!0],[0,2,1,!0],[1,3,1],[1,4,1],[1,5,1],[2,6,1],[2,7,1],[2,8,1]],charge:1},Fe2O3:{atoms:["Fe","Fe","O","O","O"],bonds:[[0,2,2,!0],[0,3,2,!0],[1,3,2,!0],[1,4,2,!0],[0,4,2,!0],[1,2,2,!0]]},NO2:{atoms:["N","O","O"],bonds:[[0,1,2],[0,2,1]]},NaNO3:{atoms:["Na","N","O","O","O"],bonds:[[0,1,1,!0],[1,2,1,!0],[1,3,1,!0],[2,3,2],[2,4,1],[3,4,1]]},KNO3:{atoms:["K","N","O","O","O"],bonds:[[0,1,1,!0],[1,2,1,!0],[1,3,1,!0],[2,3,2],[2,4,1],[3,4,1]]},CaSO4:{atoms:["Ca","S","O","O","O","O"],bonds:[[0,1,1,!0],[0,2,1,!0],[1,2,2],[1,3,2],[1,4,1,!0],[1,5,1,!0],[2,4,1],[3,5,1]]},ZnSO4:{atoms:["Zn","S","O","O","O","O"],bonds:[[0,1,1,!0],[0,2,1,!0],[1,2,2],[1,3,2],[1,4,1,!0],[1,5,1,!0],[2,4,1],[3,5,1]]},AgNO3:{atoms:["Ag","N","O","O","O"],bonds:[[0,1,1,!0],[1,2,1,!0],[1,3,1,!0],[2,3,2],[2,4,1],[3,4,1]]},CuSO4:{atoms:["Cu","S","O","O","O","O"],bonds:[[0,1,1,!0],[0,2,1,!0],[1,2,2],[1,3,2],[1,4,1,!0],[1,5,1,!0],[2,4,1],[3,5,1]]},CuNO32:{atoms:["Cu","N","N","O","O","O","O","O","O"],bonds:[[0,1,1,!0],[0,2,1,!0],[1,3,1,!0],[1,4,1,!0],[2,5,1,!0],[2,6,1,!0],[3,4,2],[3,7,1],[4,7,1],[5,6,2],[5,8,1],[6,8,1]]}},ir={};function br(n,t,e,i){ir[n]||(ir[n]=[]),ir[n].push({key:t,tpl:e,displayFormula:$M(e.atoms),displayName:i||t.split("_").pop()}),tt[t]=e}function $M(n){const t=new Map;for(const o of n)t.set(o,(t.get(o)||0)+1);let e="";const i=new Set;for(const o of n){if(i.has(o))continue;i.add(o);const s=t.get(o);e+=o+(s>1?s:"")}return e}br("C2H6O","C2H6O_ethanol",{atoms:["C","C","O","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[0,3,1],[0,4,1],[0,5,1],[1,6,1],[1,7,1],[2,8,1]]},"Ethanol");br("C2H6O","C2H6O_ether",{atoms:["C","O","C","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[0,3,1],[0,4,1],[0,5,1],[2,6,1],[2,7,1],[2,8,1]]},"Dimethyl ether");br("C3H6O","C3H6O_acetone",{atoms:["C","C","C","O","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[1,3,2],[0,4,1],[0,5,1],[0,6,1],[2,7,1],[2,8,1],[2,9,1]]},"Acetone");br("C3H6O","C3H6O_propanal",{atoms:["C","C","C","O","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[2,3,2],[0,4,1],[0,5,1],[0,6,1],[1,7,1],[1,8,1],[2,9,1]]},"Propanal");const Ld=new Map;function Iu(n){const t=Ld.get(n);if(t)return t;const e=ir[n]||[],i=KM(n,new Set(e.map(s=>s.displayFormula))),o=e.concat(i);return i.truncated&&(o.truncated=!0),Ld.set(n,o),o}const XM=200,qM=12e3,jM=5e3;function YM(n){let t=1,e=0;for(const i of n){for(let o=1;o<=i;o++)t=t*(e+o)/o;e+=i}return Math.round(t)}function eu(n,t){const e=n.length,i=Array.from({length:e},()=>[]);for(const[s,r,a]of t)i[s].push([r,a]),i[r].push([s,a]);let o=n.map((s,r)=>`${s}:${i[r].length}:${i[r].map(a=>a[1]).sort((a,c)=>a-c).join(",")}`);for(let s=0;s<6;s++){const r=o.map((a,c)=>a+"#"+i[c].map(([l,h])=>h+":"+o[l]).sort().join(";"));if(r.join()===o.join())break;o=r}return o.slice().sort().join("|")}function KM(n,t){const e=Ht(n),i=[],o=[];for(const[_,g]of e)ut(_)&&(i.push(_),o.push(g));const s=o.reduce((_,g)=>_+g,0);if(s===0)return[];const r=[],a=new Set;let c=0,l=!1;function h(_,g){const p=Qi(_);if(t&&t.has(p))return!0;const M=eu(_,g)+"|"+p;return a.has(M)?!0:(a.add(M),r.push({atoms:[..._],bonds:g,text:p}),r.length>=XM?(l=!0,!1):!0)}function d(_){if(c>=qM)return l=!0,!1;c++;const g=Nd(_,"chain");let p=!1;if(g&&Kc(_,g)){if(!h(_,g))return!1;p=!0}const y=Nd(_,"tree");if(y&&Kc(_,y)){if(!h(_,y))return!1;p=!0}if(!p){const M=JM(_);if(M&&Kc(_,M)&&!h(_,M))return!1}return!0}const u=new Array(s);function f(_,g){if(_===s)return d(u);for(let p=0;p<g.length;p++){const y=g[p];if(!o[y])continue;o[y]--,u[_]=i[y];const M=f(_+1,g);if(o[y]++,!M)return!1}return!0}if(YM(o)<=jM)f(0,i.map((_,g)=>g));else{const _=[];for(let w=0;w<i.length;w++)i[w]!=="H"&&_.push(w);const g=[];for(const w of _)for(let S=0;S<o[w];S++)g.push(i[w]);g.sort();const p=g.length,y=new Array(p),M=new Array(s),x=new Set,T=[];for(let w=0;w<i.length;w++)for(let S=0;S<o[w];S++)T.push(i[w]);d(T)||(l=!0);let v=l;const b=new Array(p).fill(!1);(function w(S){if(v)return;if(S===p){const R=y.join("\0");if(x.has(R))return;x.add(R);for(let L=0;L<p;L++)M[L]=y[L];for(let L=p;L<s;L++)M[L]="H";d(M)||(v=!0);return}let C=null;for(let R=0;R<p;R++)b[R]||g[R]===C||(C=g[R],b[R]=!0,y[S]=g[R],w(S+1),b[R]=!1)})(0)}const m=r.map((_,g)=>{const p=ZM(_.atoms,_.bonds,n);return{key:`${n}_${p.replace(/\s+/g,"_").toLowerCase()}_${g}`,tpl:{atoms:_.atoms,bonds:_.bonds},displayFormula:_.text,displayName:p}});return m.truncated=l,m}function ZM(n,t,e){try{const i=new Map;n.forEach((r,a)=>{const c=ut(r);c&&i.set(a,{id:a,el:c})});const o=new Map;t.forEach((r,a)=>{o.set(a,{id:a,a:r[0],b:r[1],order:r[2]||1,ionic:!1})});const s=sp(n.map((r,a)=>i.get(a)),[...o.values()],e,0,new Map);if(s)return s}catch{}return Qi(n)}function Qi(n){const t=new Map;for(const o of n)t.set(o,(t.get(o)||0)+1);let e="";const i=new Set;for(const o of n){if(i.has(o))continue;i.add(o);const s=t.get(o);e+=o+(s>1?s:"")}return e}function Nd(n,t="chain"){const e=n.length,i=n.map(v=>ut(v));if(i.some(v=>!v))return null;if(e===2&&n[0]==="H"&&n[1]==="H")return[[0,1,1]];const o=v=>{const b=i[v];return b.cat==="Noble gas"&&b.sym!=="Xe"&&b.sym!=="Kr"?0:n[v]==="C"?4:n[v]==="N"?Math.min(b.maxBonds,3):n[v]==="O"?2:b.maxBonds??2},s=new Array(e).fill(0),r=new Map,a=[],c=v=>o(v)-s[v],l=(v,b)=>v<b?v*e+b:b*e+v,h=v=>n[v]!=="H"&&o(v)>0;function d(v,b,w){if(v===b||w<=0||c(v)<w||c(b)<w)return!1;const S=l(v,b);return(r.get(S)||0)+w>3?!1:(r.set(S,(r.get(S)||0)+w),a.push([Math.min(v,b),Math.max(v,b),w]),s[v]+=w,s[b]+=w,!0)}function u(v){const b=Math.floor(v/e),w=v%e,S=r.get(v)||0;if(S===0||S>=3||c(b)<=0||c(w)<=0)return!1;r.set(v,S+1),s[b]++,s[w]++;const C=a.find(R=>l(R[0],R[1])===v);return C&&C[2]++,!0}const f=()=>{let v=0;for(let b=0;b<e;b++)n[b]==="H"&&c(b)>0&&v++;return v},m=()=>{let v=0;for(let b=0;b<e;b++)h(b)&&(v+=c(b));return v-f()};if(t==="chain")for(let v=0;v+1<e;v++)h(v)&&h(v+1)&&d(v,v+1,1);else{let v=!0;for(let b=0;b<e;b++){if(!h(b))continue;if(v){v=!1;continue}let w=-1,S=-1;for(let C=0;C<b;C++)!h(C)||c(C)<=0||o(C)>S&&(w=C,S=o(C));w!==-1&&d(w,b,1)}}const _=Array.from({length:e},(v,b)=>b),g=v=>{for(;_[v]!==v;)_[v]=_[_[v]],v=_[v];return v};for(const v of r.keys()){const b=g(Math.floor(v/e)),w=g(v%e);b!==w&&(_[b]=w)}const p=()=>{const v=new Map;for(let b=0;b<e;b++)h(b)&&v.set(g(b),!0);return v};let y=p();for(;y.size>1;){let v=null;for(let b=0;b<e;b++)if(!(!h(b)||c(b)<=0))for(let w=b+1;w<e;w++){if(!h(w)||c(w)<=0||g(b)===g(w))continue;const S=w-b;(!v||S<v.dist)&&(v={i:b,j:w,dist:S})}if(!v||!d(v.i,v.j,1))break;_[g(v.i)]=g(v.j),y=p()}let M=0;for(;m()>0&&M++<4*e;){let v=!1;for(const b of[...r.keys()]){if(m()<=0)break;u(b)&&(v=!0)}for(let b=0;b<e&&m()>0;b++)if(!(!h(b)||c(b)<=0)){for(let w=1;w<e&&m()>0&&c(b)>0;w++)for(const S of[(b+w)%e,(b-w+e)%e])if(!(!h(S)||c(S)<=0||(r.get(l(b,S))||0)>0)&&d(b,S,1)){v=!0;break}}if(!v)break}const x=[];for(let v=0;v<e;v++)n[v]==="H"&&c(v)>0&&x.push(v);let T=!0;for(;T&&x.length;){T=!1;for(let v=0;v<e&&x.length;v++){if(!h(v)||c(v)<=0)continue;const b=x.findIndex(w=>c(w)>0);if(b===-1)break;d(x[b],v,1)&&(x.splice(b,1),T=!0)}}return a.length>0?a:null}function JM(n){const t=n.length,e=[],i=new Array(t).fill(0);for(let o=0;o<t-1;o++){const s=Dd(n[o],n[o+1],i[o],i[o+1]);s>0&&(e.push([o,o+1,s]),i[o]+=s,i[o+1]+=s)}for(let o=0;o<t;o++){const s=ut(n[o]);if(!s)continue;const r=n[o]==="C"?4:s.maxBonds;if(i[o]<r){for(let c=o+2;c<t;c++)if(i[c]<ut(n[c])?.maxBonds){const l=Dd(n[o],n[c],i[o],i[c]);if(l>0&&(e.push([o,c,l]),i[o]+=l,i[c]+=l,i[o]>=r))break}}}return e.length>0?e:null}function Dd(n,t,e,i){const o=ut(n),s=ut(t);if(!o||!s||o.cat==="Noble gas"&&o.sym!=="Xe"&&o.sym!=="Kr"||s.cat==="Noble gas"&&s.sym!=="Xe"&&s.sym!=="Kr")return 0;const r=(u,f)=>u==="C"?4:u==="N"?Math.min(f.maxBonds,3):u==="O"?2:f.maxBonds,a=r(n,o),c=r(t,s),l=a-e,h=c-i;if(l<=0||h<=0)return 0;if(n==="H"||t==="H")return 1;const d=Math.min(l,h,3);return d>0?d:0}function Kc(n,t){const e=new Map;for(let i=0;i<n.length;i++)e.set(i,0);for(const[i,o,s]of t)e.set(i,e.get(i)+s),e.set(o,e.get(o)+s);for(let i=0;i<n.length;i++){const o=ut(n[i]);if(!o)return!1;const s=e.get(i);if(n[i]==="H"&&s!==1||s>o.maxBonds||n[i]==="C"&&s!==4)return!1}return QM(n.length,t)}function QM(n,t){if(n===0)return!0;const e=Array.from({length:n},(r,a)=>a);function i(r){for(;e[r]!==r;)e[r]=e[e[r]],r=e[r];return r}function o(r,a){const c=i(r),l=i(a);c!==l&&(e[c]=l)}for(const[r,a]of t)o(r,a);const s=i(0);for(let r=1;r<n;r++)if(i(r)!==s)return!1;return!0}const Pu=[{key:"rt",label:"Room temp"},{key:"heat",label:"Heat"},{key:"spark",label:"Spark"},{key:"electricity",label:"Electricity"},{key:"catalyst",label:"Catalyst"},{key:"uv",label:"UV light"}];Object.fromEntries(Pu.map(n=>[n.key,n.label]));function ic(n){const t=jn(n);return t.key==="acid"||t.key==="carboxylicAcid"}function Lu(n){return jn(n).key==="base"}function Nu(n){return Ht(n).get("H")||0}function tS(n){const t=n.match(/\(OH\)(\d+)$/);if(t)return parseInt(t[1]);if(/OH$/.test(n))return 1;const e=n.match(/^([A-Z][a-z]?)H(\d*)O(\d*)$/);if(e){const i=e[2]?parseInt(e[2]):1,o=e[3]?parseInt(e[3]):1;if(i===o&&i>0)return i}return 0}function Ra(n){const t=n.match(/^([A-Z][a-z]?)\(OH\)(\d+)$/);if(t)return{sym:t[1],charge:parseInt(t[2])};const e=n.match(/^([A-Z][a-z]?)OH$/);if(e)return{sym:e[1],charge:1};const i=n.match(/^([A-Z][a-z]?)H(\d*)O(\d*)$/);if(i){const o=i[2]?parseInt(i[2]):1,s=i[3]?parseInt(i[3]):1;if(o===s&&o>0)return{sym:i[1],charge:o}}return null}function gr(n){const t=Ht(n),e=t.get("H")||0;if(e===0)return null;const i=new Map(t);i.delete("H");const o=[...i.entries()];if(o.length===0)return null;if(o.length===1){const[c,l]=o[0];return{sym:l===1?c:`${c}${l}`,charge:-e}}const s=o.find(([c])=>c!=="O");if(!s)return null;const r=i.get("O")||0;return r===0?{sym:o.sort(([h],[d])=>h.localeCompare(d)).map(([h,d])=>d===1?h:`${h}${d}`).join(""),charge:-e}:{sym:r>1?`${s[0]}O${r}`:r===1?`${s[0]}O`:s[0],charge:-e}}function Vn(n,t){const e=Math.abs(n.charge),i=Math.abs(t.charge),o=e*i/Te(e,i),s=o/e,r=o/i,a=[];for(let f=0;f<s;f++)a.push(n.sym);const c=[],l=fS(t.sym,i);if(l){const f=[];for(let _=0;_<r;_++){const g=a.length;a.push(l.central);const p=[];for(let y=0;y<l.o;y++)a.push("O"),p.push(g+1+y);for(let y=0;y<l.d;y++)c.push([g,p[y],2]);for(let y=l.d;y<l.o;y++)c.push([g,p[y],1]);for(let y=l.d;y<l.d+l.x;y++)a.push("H"),c.push([p[y],a.length-1,1]);for(let y=l.d+l.x;y<l.o;y++)f.push(p[y])}const m=i*r;for(let _=0;_<m;_++)c.push([_%s,f[_%f.length],1,!0]);return{atoms:a,bonds:c}}const h=_p(t.sym);for(let f=0;f<r;f++)for(const m of h)a.push(m);const d=[];for(let f=0;f<s;f++)d.push(f);const u=s;for(let f=0;f<r;f++){const m=u+f*h.length,_=nS(h,m);for(const g of d)c.push([g,_,1,!0])}for(let f=0;f<r;f++){const m=u+f*h.length,_=iS(t.sym,m);c.push(..._)}return{atoms:a,bonds:c}}function Te(n,t){return t===0?n:Te(t,n%t)}function fp(n){const t=[],e=[];for(let o=0;o<n;o++)t.push("C");for(let o=0;o<n-1;o++)e.push([o,o+1,1]);let i=t.length;for(let o=0;o<n;o++){const s=n===1?4:o===0||o===n-1?3:2;for(let r=0;r<s;r++)t.push("H"),e.push([o,i++,1])}return{atoms:t,bonds:e}}function pp(n){if(n<2)return fp(1);const t=[],e=[];for(let o=0;o<n;o++)t.push("C");e.push([0,1,2]);for(let o=1;o<n-1;o++)e.push([o,o+1,1]);let i=t.length;for(let o=0;o<n;o++){let s;o===0?s=2:o===1?s=n===2?2:1:o===n-1?s=3:s=2;for(let r=0;r<s;r++)t.push("H"),e.push([o,i++,1])}return{atoms:t,bonds:e}}function mp(n){const t=[],e=[];for(let r=0;r<n;r++)t.push("C");const i=t.length;t.push("O");for(let r=0;r<n-1;r++)e.push([r,r+1,1]);e.push([n-1,i,1]);const o=t.length;t.push("H"),e.push([i,o,1]);let s=o+1;for(let r=0;r<n;r++){let a;n===1?a=3:r===n-1?a=2:r===0?a=3:a=2;for(let c=0;c<a;c++)t.push("H"),e.push([r,s++,1])}return{atoms:t,bonds:e}}function eS(n,t){const e=n-1,i=t,o=[],s=[];for(let d=0;d<e;d++)o.push("C");const r=o.length;o.push("C");const a=o.length;o.push("O");const c=o.length;o.push("O");const l=o.length;for(let d=0;d<i;d++)o.push("C");if(e>0){for(let d=0;d<e-1;d++)s.push([d,d+1,1]);s.push([e-1,r,1])}s.push([r,a,2]),s.push([r,c,1]),s.push([c,l,1]);for(let d=0;d<i-1;d++)s.push([l+d,l+d+1,1]);let h=o.length;for(let d=0;d<e;d++){const u=e===1||d===0?3:2;for(let f=0;f<u;f++)o.push("H"),s.push([d,h++,1])}for(let d=0;d<i;d++){const u=i===1?3:d===0?2:d===i-1?3:2;for(let f=0;f<u;f++)o.push("H"),s.push([l+d,h++,1])}return{atoms:o,bonds:s}}function gp(n,t){const e=[],i=[];for(let r=0;r<n;r++)e.push("C");for(let r=0;r<n-1;r++)i.push([r,r+1,1]);const o=e.length;e.push(t),i.push([n-1,o,1]);let s=e.length;for(let r=0;r<n;r++){let a;n===1?a=3:r===n-1?a=2:r===0?a=3:a=2;for(let c=0;c<a;c++)e.push("H"),i.push([r,s++,1])}return{atoms:e,bonds:i}}function Eo(n,t,e,i){let o="";return n===1?o+="C":o+=`C${n}`,t===1?o+="H":t>0&&(o+=`H${t}`),e&&e>0&&(e===1?o+="O":o+=`O${e}`),o}function _p(n){const t=Ht(n),e=[];for(const[i,o]of t)for(let s=0;s<o;s++)e.push(i);return e}function nS(n,t){for(let e=0;e<n.length;e++)if(n[e]!=="O")return t+e;return t}function iS(n,t){const e=_p(n);if(e.length<=1)return[];const i=[];let o=0;for(let s=0;s<e.length;s++)if(e[s]!=="O"){o=s;break}for(let s=0;s<e.length;s++)s!==o&&i.push([t+o,t+s,1]);return i}function yp(n){const t=n.filter(v=>ic(v)),e=n.filter(v=>Lu(v));if(t.length===0||e.length===0)return null;const i=t[0],o=e[0],s=Nu(i),r=tS(o);if(s===0||r===0)return null;const a=Ra(o),c=gr(i);if(!a||!c)return null;const l=r,h=s,d=Te(l,h),u=l/d,f=h/d,m=s*r/d,_=Vn(a,c),g=Gn(a,c),p=g;tt[p]=_;const y=u===1?i:`${u}${i}`,M=f===1?o:`${f}${o}`,x=m===1?"H2O":`${m}H2O`,T=`${y} + ${M} -> ${g} + ${x}`;return{reactants:{[i]:u,[o]:f},condition:"rt",products:[[p,1],["H2O",m]],equation:T,dynamic:!0}}function Gn(n,t){const e=Math.abs(n.charge),i=Math.abs(t.charge),o=e*i/Te(e,i),s=o/e,r=o/i,c=Ht(t.sym).size>1;let l=n.sym;return s>1&&(l+=s),r>1&&c?l+=`(${t.sym})${r}`:(l+=t.sym,r>1&&(l+=r)),l}function Ht(n){const t=new Map,e=[t],i=/([A-Z][a-z]?)(\d*)|(\()|(\))(\d*)/g;let o;for(;(o=i.exec(n))!==null;)if(o[1]){const s=o[2]?parseInt(o[2]):1,r=e[e.length-1];r.set(o[1],(r.get(o[1])||0)+s)}else if(o[3]){const s=new Map;e.push(s)}else if(o[4]){const s=e.pop(),r=o[5]?parseInt(o[5]):1,a=e[e.length-1];for(const[c,l]of s)a.set(c,(a.get(c)||0)+l*r)}return t}function oS(n){if(n==="O2"||n==="H2")return!1;const t=jn(n);if(["alkane","alkene","alkyne","organic"].includes(t.key))return!0;const e=Ht(n);return e.has("C")&&e.has("H")}function nu(n){const t=In(n),e=[...t.keys()].filter(y=>oS(y));if(e.length===0||!t.has("O2")||t.size!==2)return null;const i=e[0],o=Ht(i),s=o.get("C")||0,r=o.get("H")||0,a=o.get("O")||0;let c=4,l=4*s+r-2*a,h=4*s,d=2*r;if(l<=0)return null;const u=Te(Te(c,l),Te(h,d));c/=u,l/=u,h/=u,d/=u;const f={[i]:c,O2:l},m=c===1?i:`${c}${i}`,_=l===1?"O2":`${l}O2`,g=h===1?"CO2":`${h}CO2`,p=d===1?"H2O":`${d}H2O`;return{reactants:f,condition:"spark",products:[["CO2",h],["H2O",d]],equation:`${m} + ${_} -> ${g} + ${p}`,dynamic:!0}}function sS(n){const t=ut(n);return t&&xe(t)}function rS(n){const t=ut(n);return!t||!t.charges||t.charges.length===0?null:t.charges[0]}function xp(n){const t=In(n);if(t.size!==2)return null;const e=[...t.keys()].filter(L=>sS(L)),i=[...t.keys()].filter(L=>ic(L));if(e.length===0||i.length===0)return null;const o=e[0],s=i[0],r=rS(o),a=gr(s);if(!r||!a)return null;const c={sym:o,charge:r},l=Gn(c,a),h=Vn(c,a);tt[l]=h;const d=Math.abs(a.charge),u=Te(r,d),f=d/u,m=r/u,_=Nu(s);if(_===0)return null;let g=f,p=m,y=1,M=p*_,x=2;const T=Te(M,x);let v=M/T;const b=x/T;b!==1&&(g*=b,p*=b,y*=b);const w=g===1?o:`${g}${o}`,S=p===1?s:`${p}${s}`,C=y===1?l:`${y}${l}`,R=v===1?"H2":`${v}H2`;return{reactants:{[o]:g,[s]:p},condition:"rt",products:[[l,y],["H2",v]],equation:`${w} + ${S} -> ${C} + ${R}`,dynamic:!0}}function vp(n){const t=In(n);if(t.size!==2||!t.has("H2O"))return null;const e=[...t.keys()].find(g=>g!=="H2O");if(!e)return null;const i=ut(e);if(!i||!xe(i)||!i.charges||i.charges.length===0)return null;const o=i.charges[0],s=i.cat==="alkali",r=i.cat==="alkaline";if(!s&&!r)return null;const a={sym:e,charge:o},c=Mp(a),l=Sp(a);tt[c]=l;let h,d,u,f;o===1?(h=2,d=2,u=2,f=1):(h=1,d=2,u=1,f=1);const m=h===1?e:`${h}${e}`,_=u===1?c:`${u}${c}`;return{reactants:{[e]:h,H2O:d},condition:"rt",products:[[c,u],["H2",f]],equation:`${m} + ${d}H2O -> ${_} + ${f===1?"H2":f+"H2"}`,dynamic:!0}}function Mp(n){const t=n.charge;return t===1?`${n.sym}OH`:`${n.sym}(OH)${t}`}function Sp(n){const t=n.charge,e=[n.sym];for(let o=0;o<t;o++)e.push("O","H");const i=[];for(let o=0;o<t;o++){const s=1+o*2,r=2+o*2;i.push([0,s,1,!0]),i.push([s,r,1])}return{atoms:e,bonds:i}}function Fd(n){const t=Ht(n),e=t.get("C")||0,i=t.get("O")||0;if(e===0||i!==e*3)return null;const o=[...t.keys()].filter(h=>{if(h==="C"||h==="O")return!1;const d=ut(h);return d&&xe(d)});if(o.length!==1)return null;const s=o[0],r=t.get(s)||1,a=ut(s);if(!a||!a.charges||a.charges.length===0)return null;const c=e*2,l=Math.round(c/r);return a.charges.includes(l)?{sym:s,charge:l}:null}function bp(n){const t=In(n);if(t.size!==2)return null;const e=[...t.keys()].filter(R=>Fd(R)),i=[...t.keys()].filter(R=>ic(R));if(e.length===0||i.length===0)return null;const o=e[0],s=i[0],r=Fd(o),a=gr(s);if(!r||!a)return null;const c=Gn(r,a),l=Vn(r,a);tt[c]=l;const h=Nu(s);if(h===0)return null;const d=Te(2,h),u=h/d,f=2/d,m=u,_=f*h/2,p=Ht(o).get(r.sym)||1,y=u*p,x=Ht(c).get(r.sym)||1,T=y/x,v=u===1?o:`${u}${o}`,b=f===1?s:`${f}${s}`,w=T===1?c:`${T}${c}`,S=m===1?"CO2":`${m}CO2`,C=_===1?"H2O":`${_}H2O`;return{reactants:{[o]:u,[s]:f},condition:"rt",products:[[c,T],["CO2",m],["H2O",_]],equation:`${v} + ${b} -> ${w} + ${S} + ${C}`,dynamic:!0}}const Oa={Fr:1,Cs:2,Rb:3,K:4,Na:5,Li:6,Ba:7,Sr:8,Ca:9,Mg:10,Al:11,Mn:12,Zn:13,Cr:14,Fe:15,Cd:16,Co:17,Ni:18,Sn:19,Pb:20,Cu:21,Ag:22,Hg:23,Pt:24,Au:25};function Du(n){if(jn(n).key!=="basicOxide")return null;const e=Ht(n),i=[...e.keys()],o=i.filter(c=>{const l=ut(c);return l&&xe(l)});if(o.length!==1||i.length!==2||!e.has("O"))return null;const s=o[0],r=e.get(s),a=e.get("O");return a*2%r!==0?null:{metalSym:s,oCount:a,oxidationState:a*2/r}}function Ep(n,t){return t===2?`${n}O`:t%2===0?`${n}O${t/2}`:`${n}2O${t}`}function aS(n,t){const e=Ep(n,t),i=Ht(e),o=[];for(const[c,l]of i)for(let h=0;h<l;h++)o.push(c);const s=[],r=[],a=[];for(let c=0;c<o.length;c++)o[c]==="O"?a.push(c):r.push(c);for(const c of r)for(const l of a)s.push([c,l,2,!0]);return{atoms:o,bonds:s}}function Fu(n){return{atoms:[n],bonds:[]}}function Cp(n){const t=In(n);if(t.size!==2)return null;const e=[...t.keys()];let i=null,o=null,s=null;for(const G of e){const U=Du(G);if(U)i=G,o=U;else{const K=ut(G);K&&xe(K)&&K.charges&&K.charges.length>0&&(s=G)}}if(!i||!o||!s)return null;const r=Oa[s],a=Oa[o.metalSym];if(r==null||a==null||r>=a)return null;const c=ut(s).charges[0],l=o.oxidationState,d=Ht(i).get(o.metalSym)||1,u=Te(c,l),f=c*l/u;let m=f/l,_=f*d/c;const g=Ep(s,c),y=Ht(g).get("O")||1,M=m*o.oCount/y,x=m*(Ht(i).get(o.metalSym)||1),T=[m,_,M,x];let v=T[0];for(let G=1;G<4;G++)v=Te(v,T[G]);const[b,w,S,C]=T.map(G=>G/v);tt[g]||(tt[g]=aS(s,c)),tt[o.metalSym]||(tt[o.metalSym]=Fu(o.metalSym));const R=b===1?i:`${b}${i}`,L=w===1?s:`${w}${s}`,B=S===1?g:`${S}${g}`,k=C===1?o.metalSym:`${C}${o.metalSym}`;return{reactants:{[i]:b,[s]:w},condition:"heat",products:[[g,S],[o.metalSym,C]],equation:`${R} + ${L} -> ${B} + ${k}`,dynamic:!0}}function cS(n,t,e){const i=ut(t);if(!i||!i.charges||i.charges.length===0)return null;const s=i.charges[0]*e,r=[...n.keys()].filter(l=>{if(l===t)return!1;const h=ut(l);return h&&!xe(h)}),a=n.has("O"),c=r.filter(l=>l!=="O");if(c.length===1&&a){const l=c[0],h=n.get(l)||1,d=n.get("O")||0,u=d===0?l:d===1?`${l}O`:`${l}O${d}`,f=-Math.round(s/h);return{sym:u,count:h,chargePerUnit:f}}if(c.length===1&&!a){const l=c[0],h=n.get(l)||1,d=-Math.round(s/h);return{sym:l,count:h,chargePerUnit:d}}if(c.length===0&&a){const l=n.get("O")||1,h=-Math.round(s/l);return{sym:"O",count:l,chargePerUnit:h}}return null}function Ap(n){const t=In(n);if(t.size!==2)return null;const e=[...t.keys()];let i=null,o=null;for(const U of e){const K=ut(U);K&&xe(K)&&K.charges&&K.charges.length>0?i=U:o=U}if(!i||!o)return null;const s=Ht(o),a=[...s.keys()].filter(U=>{const K=ut(U);return K&&xe(K)});if(a.length!==1)return null;const c=a[0],l=Oa[i],h=Oa[c];if(l==null||h==null||l>=h)return null;const d=ut(i).charges[0],u=ut(c).charges[0],f=s.get(c),m=cS(s,c,f);if(!m)return null;const _=Gn({sym:i,charge:d},{sym:m.sym,charge:m.chargePerUnit}),g=Vn({sym:i,charge:d},{sym:m.sym,charge:m.chargePerUnit});tt[_]||(tt[_]=g),tt[c]||(tt[c]=Fu(c));const y=Ht(_).get(i)||1;let M=1,x=y,T=x*d/(f*u),v=T*f;const b=Te(Te(x,T),Te(M,v)),[w,S,C,R]=[x,T,M,v].map(U=>U/b),L=w===1?i:`${w}${i}`,B=S===1?o:`${S}${o}`,k=C===1?_:`${C}${_}`,G=R===1?c:`${R}${c}`;return{reactants:{[i]:w,[o]:S},condition:"rt",products:[[_,C],[c,R]],equation:`${L} + ${B} -> ${k} + ${G}`,dynamic:!0}}function Tp(n){const t=In(n);if(t.size!==2)return null;const e=[...t.keys()];let i=null,o=null;for(const M of e){const x=ut(M);x&&xe(x)&&x.charges&&x.charges.length>0?i=M:(M==="Cl2"||M==="Br2"||M==="F2"||M==="I2")&&(o=M)}if(!i||!o)return null;const s=ut(i).charges[0],r=o.replace("2",""),a=Gn({sym:i,charge:s},{sym:r,charge:-1}),c=Vn({sym:i,charge:s},{sym:r,charge:-1});tt[a]||(tt[a]=c);const l=Ht(a),h=l.get(i)||1,d=l.get(r)||1;let u=h,f=d/2,m=1;f!==Math.floor(f)&&(u*=2,f*=2,m*=2);const _=Te(Te(u,f),m);u/=_,f/=_,m/=_;const g=u===1?i:`${u}${i}`,p=f===1?o:`${f}${o}`,y=m===1?a:`${m}${a}`;return{reactants:{[i]:u,[o]:f},condition:"heat",products:[[a,m]],equation:`${g} + ${p} -> ${y}`,dynamic:!0}}function lS(n){const t=In(n);if(t.size!==1)return null;const i=[...t.keys()][0],o=t.get(i);if(o<2)return null;const s=ut(i);if(!s||!xe(s)||!new Set(["Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg"]).has(i))return null;const a=`${i}2`,c={atoms:[i,i],bonds:[[0,1,4]]};tt[a]||(tt[a]=c);const l=Math.floor(o/2);if(l<1)return null;const h=o===2?i:`${o}${i}`,d=l===1?a:`${l}${a}`;return{reactants:{[i]:o},condition:"heat",products:[[a,l]],equation:`${h} -> ${d}`,dynamic:!0}}function uS(n){const t=In(n);if(t.size!==1)return null;const i=[...t.keys()][0],o=i.match(/^([A-Z][a-z]?)2$/);if(!o)return null;const s=o[1],r=ut(s);if(!r||!xe(r)||!new Set(["Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg"]).has(s))return null;const c=t.get(i),l=c*2,h=l===1?s:`${l}${s}`,d=c===1?i:`${c}${i}`;return{reactants:{[i]:c},condition:"heat",products:[[s,l]],equation:`${d} -> ${h}`,dynamic:!0}}function Hd(n){return jn(n).key==="alkane"}function Ss(n){return jn(n).key==="alkene"}function Ud(n){return jn(n).key==="alkyne"}function iu(n){return jn(n).key==="alcohol"}function Bd(n){return jn(n).key==="carboxylicAcid"}function wp(n){if(n.length!==2)return null;const[t,e]=n;let i=null,o=null;if(Bd(t)&&iu(e)?(i=t,o=e):Bd(e)&&iu(t)&&(i=e,o=t),!i||!o)return null;const s=Ht(i),r=Ht(o),a=s.get("C"),c=r.get("C"),l=a+c,h=2*l,d=Eo(l,h,2);tt[d]||(tt[d]=eS(a,c));const u=i,f=o,m=d;return{reactants:{[i]:1,[o]:1},condition:"catalyst",products:[[m,1],["H2O",1]],equation:`${u} + ${f} -> ${m} + H2O`,dynamic:!0}}function Rp(n){if(n.length!==2)return null;const[t,e]=n;let i=null;if(t==="H2"&&(Ss(e)||Ud(e))?i=e:e==="H2"&&(Ss(t)||Ud(t))&&(i=t),!i)return null;const o=Ht(i),s=o.get("C"),r=o.get("H");if(r===2*s){const a=Eo(s,2*s+2,0);return tt[a]||(tt[a]=fp(s)),{reactants:{[i]:1,H2:1},condition:"catalyst",products:[[a,1]],equation:`${i} + H2 -> ${a}`,dynamic:!0}}if(r===2*s-2){const a=Eo(s,2*s,0);return tt[a]||(tt[a]=pp(s)),{reactants:{[i]:1,H2:1},condition:"catalyst",products:[[a,1]],equation:`${i} + H2 -> ${a}`,dynamic:!0}}return null}function Op(n){if(n.length!==2)return null;const[t,e]=n;let i=null,o=null;const s={Cl2:"Cl",Br2:"Br",F2:"F",I2:"I"};if(Hd(t)&&s[e]?(i=t,o=s[e]):Hd(e)&&s[t]&&(i=e,o=s[t]),!i||!o)return null;const a=Ht(i).get("C"),c=Ip(a,o),l=`H${o}`;tt[c]||(tt[c]=gp(a,o));const h=Object.keys(s).find(d=>s[d]===o);return{reactants:{[i]:1,[h]:1},condition:"uv",products:[[c,1],[l,1]],equation:`${i} + ${h} -> ${c} + ${l}`,dynamic:!0}}function Ip(n,t){const e=2*n+2-1;let i="";return n===1?i+="C":i+=`C${n}`,e===1?i+="H":i+=`H${e}`,i+=t,i}function kd(n){const t=Ht(n);if(!t.has("C")||!t.has("H")||!t.has("O")||t.size!==3)return!1;const e=t.get("C"),i=t.get("H");return t.get("O")===2&&i===2*e}function Pp(n){if(n.length!==1)return null;const t=n[0];if(!iu(t))return null;const i=Ht(t).get("C");if(i<2)return null;const o=Eo(i,2*i,0);return tt[o]||(tt[o]=pp(i)),{reactants:{[t]:1},condition:"heat",products:[[o,1],["H2O",1]],equation:`${t} -> ${o} + H2O`,dynamic:!0}}function Lp(n){if(n.length!==2)return null;const[t,e]=n;let i=null,o=null,s=null;const r={HCl:"Cl",HBr:"Br",HF:"F",HI:"I"};if(Ss(t)&&r[e]?(i=t,o=e,s=r[e]):Ss(e)&&r[t]&&(i=e,o=t,s=r[t]),!i||!s)return null;const c=Ht(i).get("C"),l=Ip(c,s);return tt[l]||(tt[l]=gp(c,s)),{reactants:{[i]:1,[o]:1},condition:"rt",products:[[l,1]],equation:`${i} + ${o} -> ${l}`,dynamic:!0}}function Np(n){if(n.length!==2)return null;const[t,e]=n;let i=null;if(t==="H2O"&&Ss(e)?i=e:e==="H2O"&&Ss(t)&&(i=t),!i)return null;const s=Ht(i).get("C"),r=Eo(s,2*s+2,1);return tt[r]||(tt[r]=mp(s)),{reactants:{[i]:1,H2O:1},condition:"catalyst",products:[[r,1]],equation:`${i} + H2O -> ${r}`,dynamic:!0}}function Dp(n){if(n.length!==2)return null;const[t,e]=n;let i=null;if(t==="H2O"&&kd(e)?i=e:e==="H2O"&&kd(t)&&(i=t),!i)return null;const s=Ht(i).get("C");for(let r=1;r<s;r++){const a=s-r,c=Eo(r,2*r,2),l=Eo(a,2*a+2,1);return tt[c]||(tt[c]=hS(r)),tt[l]||(tt[l]=mp(a)),{reactants:{[i]:1,H2O:1},condition:"catalyst",products:[[c,1],[l,1]],equation:`${i} + H2O -> ${c} + ${l}`,dynamic:!0}}return null}function hS(n){const t=[];for(let s=0;s<n;s++)t.push("C");t.push("O"),t.push("O");const e=2*n-1;for(let s=0;s<e;s++)t.push("H");const i=[];for(let s=0;s<n-1;s++)i.push([s,s+1,1]);i.push([n-1,n,2]),i.push([n-1,n+1,1]);let o=n+2;for(let s=0;s<n-1;s++)for(let r=0;r<2&&o<t.length;r++)i.push([s,o++,1]);return o<t.length&&i.push([n+1,o++,1]),{atoms:t,bonds:i}}const Fp={C:{4:[2,3]},N:{3:[1,2],5:[1,3]},P:{3:[3,3],5:[3,4]},As:{3:[3,3],5:[3,4]},Sb:{3:[3,3],5:[3,4]},S:{4:[2,3],6:[2,4]},Se:{4:[2,3],6:[2,4]},Te:{4:[2,3],6:[2,4]},Cl:{1:[1,1],3:[1,2],5:[1,3],7:[1,4]},Br:{1:[1,1],3:[1,2],5:[1,3]},I:{1:[1,1],3:[1,2],5:[1,3],7:[1,4]},B:{3:[3,3]},Si:{4:[2,3]},Ge:{4:[2,3]},Cr:{6:[2,4]},Mn:{7:[1,4]},V:{5:[3,4]},W:{6:[2,4]},Mo:{6:[2,4]}},pa=new Set(["Al","Zn","Pb","Sn","Be","Cr"]),dS=new Set(["Si","Ge"]);function hn(n,t,e=12){const i=[...n,...t];if(i.length>5)return null;const o=i.map(u=>Ht(u));for(const u of o)if(!u.size)return null;const s=new Set;for(const u of o)for(const f of u.keys())s.add(f);const r=n.length,a=i.length,c=[...s].map(u=>o.map(f=>f.get(u)||0)),l=new Array(a).fill(1);function h(u){if(u===a){for(const f of c){let m=0,_=0;for(let g=0;g<a;g++)g<r?m+=f[g]*l[g]:_+=f[g]*l[g];if(m!==_)return!1}return!0}for(let f=1;f<=e;f++)if(l[u]=f,h(u+1))return!0;return!1}if(!h(0))return null;const d=l.reduce((u,f)=>Te(u,f));return l.map(u=>u/d)}function _n(n,t,e,i={}){const o=(s,r)=>s.map((a,c)=>`${e[r+c]===1?"":e[r+c]}${a}${i[a]||""}`).join(" + ");return`${o(n,0)} -> ${o(t,n.length)}`}function Hp(n){return n.length>1?$t(n.map(t=>ut(t))):n[0]}function ma(n,t,e){const i=[n];for(let o=0;o<e;o++)i.push("O");for(let o=0;o<t;o++)i.push("H");return Hp(i)}function fS(n,t){const e=Ht(n),i=[...e.keys()];if(i.length<2||!e.has("O"))return null;const o=i.find(h=>h!=="O"&&h!=="H");if(!o||!ut(o))return null;const s=e.get("H")||0,r=e.get("O");if(i.length!==(s>0?3:2))return null;const a=Math.abs(t);let c=r-s-a;if(c<0)return null;const l=ut(o).maxBonds;return Number.isFinite(l)&&(c=Math.max(0,Math.min(c,l-r))),{central:o,o:r,x:s,m:a,d:c}}function pS(n,t,e){const i=[n],o=[];for(let c=0;c<e;c++)i.push("O"),o.push(i.length-1);const s=ut(n)?.maxBonds,r=Math.max(0,Math.min(e-t,Number.isFinite(s)?s-e:e-t)),a=[];for(let c=0;c<r;c++)a.push([0,o[c],2]);for(let c=r;c<e-t;c++)a.push([0,o[c],1]);for(let c=e-t;c<e;c++)a.push([0,o[c],1]),i.push("H"),a.push([o[c],i.length-1,1]);return{atoms:i,bonds:a}}function Up(n){const t=Ht(n);if(t.size!==2||!t.has("O"))return null;const e=[...t.keys()].find(c=>c!=="O");if(!e||e==="H")return null;const i=Fp[e];if(!i)return null;const o=t.get(e),s=t.get("O");if(!o)return null;const r=2*s/o;if(!Number.isInteger(r))return null;const a=i[r];return a?{central:e,xCount:o,yCount:s,v:r,acidH:a[0],acidO:a[1]}:null}function os(n){const t=La(n);return t?tu(t.cation,t.anion)?"(aq)":"(s)":""}function Bp(n,t){const e=[],i=[...t.keys()],o=i.map(a=>({f:a,ox:Up(a)})).filter(a=>a.ox);if(!o.length)return e;const s=i.filter(a=>Lu(a)).map(a=>({f:a,cat:Ra(a)})).filter(a=>a.cat&&a.cat.charge<=2&&!pa.has(a.cat.sym)),r=i.map(a=>({f:a,mo:Du(a)})).filter(a=>a.mo&&!pa.has(a.mo.metalSym)&&!Fp[a.mo.metalSym]);for(const{f:a,ox:c}of o){const h={sym:ma(c.central,0,c.acidO),charge:-c.acidH};for(const{f:d,cat:u}of s){const f=Gn(u,h),m=hn([d,a],[f,"H2O"]);if(!m)continue;tt[f]||(tt[f]=Vn(u,h));const _={[f]:os(f)};e.push({reactants:{[d]:m[0],[a]:m[1]},condition:"rt",products:[[f,m[2]],["H2O",m[3]]],equation:_n([d,a],[f,"H2O"],m,_),dynamic:!0})}if(c.acidH>=2){const d={sym:ma(c.central,c.acidH-1,c.acidO),charge:-1};for(const{f:u,cat:f}of s){const m=Gn(f,d),_=hn([u,a],[m]);if(!_)continue;tt[m]||(tt[m]=Vn(f,d));const g={[m]:os(m)};e.push({reactants:{[u]:_[0],[a]:_[1]},condition:"rt",products:[[m,_[2]]],equation:_n([u,a],[m],_,g),dynamic:!0})}}for(const{f:d,mo:u}of r){const f={sym:u.metalSym,charge:u.oxidationState},m=Gn(f,h),_=hn([d,a],[m]);if(!_)continue;tt[m]||(tt[m]=Vn(f,h));const g={[m]:os(m)};e.push({reactants:{[d]:_[0],[a]:_[1]},condition:"rt",products:[[m,_[2]]],equation:_n([d,a],[m],_,g),dynamic:!0})}}if(t.has("CO2")&&t.has("H2O"))for(const a of i){const c=La(a);if(!c||c.anion.sym!=="CO3"||pa.has(c.cation.sym))continue;const l={sym:ma("C",1,3),charge:-1},h=Gn(c.cation,l),d=hn([a,"CO2","H2O"],[h]);if(!d)continue;tt[h]||(tt[h]=Vn(c.cation,l));const u={[h]:os(h)};e.push({reactants:{[a]:d[0],CO2:d[1],H2O:d[2]},condition:"rt",products:[[h,d[3]]],equation:_n([a,"CO2","H2O"],[h],d,u),dynamic:!0})}return e}function kp(n,t){if(t.size!==2||!t.has("H2O"))return[];const e=[],i=[...t.keys()].filter(o=>o!=="H2O");for(const o of i){const s=Du(o);if(s){const h=ut(s.metalSym);if(h&&(h.cat==="alkali"||h.cat==="alkaline")&&s.metalSym!=="Be"){const d={sym:s.metalSym,charge:s.oxidationState},u=Mp(d),f=hn([o,"H2O"],[u]);if(f){tt[u]||(tt[u]=Sp(d)),e.push({reactants:{[o]:f[0],H2O:f[1]},condition:"rt",products:[[u,f[2]]],equation:_n([o,"H2O"],[u],f),dynamic:!0});continue}}}const r=Up(o);if(!r||dS.has(r.central))continue;const a=pS(r.central,r.acidH,r.acidO),c=$t(a.atoms.map(h=>ut(h))),l=hn([o,"H2O"],[c]);l&&(tt[c]||(tt[c]=a),e.push({reactants:{[o]:l[0],H2O:l[1]},condition:"rt",products:[[c,l[2]]],equation:_n([o,"H2O"],[c],l),dynamic:!0}))}return e}function zp(n,t){if(t.size!==2)return[];const e=[];for(const i of t.keys()){const o=Ra(i);if(!o||!pa.has(o.sym))continue;const s=[...t.keys()].find(u=>u!==i);if(!s)continue;const r=Ra(s);if(!r||r.charge!==1)continue;const a=ut(r.sym);if(!a||a.cat!=="alkali")continue;const c={sym:ma(o.sym,0,2),charge:o.charge-4},l=Gn(r,c),h=hn([i,s],[l,"H2O"]);if(!h)continue;tt[l]||(tt[l]=Vn(r,c));const d={[l]:os(l)};e.push({reactants:{[i]:h[0],[s]:h[1]},condition:"rt",products:[[l,h[2]],["H2O",h[3]]],equation:_n([i,s],[l,"H2O"],h,d),dynamic:!0})}return e}function Oo(n){const t=n.atoms.map(()=>[]);for(const e of n.bonds)t[e[0]].push({n:e[1],o:e[2],ionic:!!e[3]}),t[e[1]].push({n:e[0],o:e[2],ionic:!!e[3]});return t}function ga(n){const t=Oo(n);for(let e=0;e<n.atoms.length;e++){if(n.atoms[e]!=="C"||!t[e].some(o=>!o.ionic&&o.o===2&&n.atoms[o.n]==="O"))continue;const i=[];for(const o of t[e]){if(o.ionic||o.o!==1||n.atoms[o.n]!=="O")continue;const s=t[o.n].find(r=>!r.ionic&&r.o===1&&n.atoms[r.n]==="H");s&&i.push({o:o.n,h:s.n})}if(i.length)return{c:e,ohs:i}}return null}function mS(n){const t=Oo(n);for(let e=0;e<n.atoms.length;e++){if(n.atoms[e]!=="O")continue;const i=t[e].filter(s=>!s.ionic&&s.o===1&&n.atoms[s.n]==="C"),o=t[e].filter(s=>!s.ionic&&s.o===1&&n.atoms[s.n]==="H");if(i.length===1&&o.length===1)return e}return null}function zd(n){const t=Oo(n);for(let e=0;e<n.atoms.length;e++)if(n.atoms[e]==="C"&&t[e].some(i=>!i.ionic&&i.o===2&&n.atoms[i.n]==="O"))for(const i of t[e]){if(i.ionic||i.o!==1||n.atoms[i.n]!=="O")continue;const o=t[i.n].find(s=>!s.ionic&&s.o===1&&n.atoms[s.n]==="C"&&s.n!==e);if(o)return{c:e,o:i.n,c2:o.n}}return null}function Ia(n){for(const t of n.bonds)if(!t[3]&&t[2]===2&&n.atoms[t[0]]==="C"&&n.atoms[t[1]]==="C")return[t[0],t[1]];return null}function gS(n){const t=Oo(n),e=new Map;for(const r of n.bonds)if(r[3])for(const[a,c]of[[r[0],r[1]],[r[1],r[0]]]){const l=ut(n.atoms[a]);l&&xe(l)&&e.set(a,(e.get(a)||0)+r[2])}if(!e.size)return null;let i=0;for(let r=0;r<n.atoms.length;r++){if(n.atoms[r]!=="O")continue;const a=t[r].some(l=>!l.ionic&&l.o===1&&n.atoms[l.n]==="H"),c=t[r].some(l=>l.ionic&&e.has(l.n));a&&c&&i++}if(!i)return null;const[o,s]=[...e.entries()][0];return{count:i,cation:{sym:n.atoms[o],charge:s}}}function Ki(n,t){const e=$t(n.atoms.map(o=>ut(o))),i=ce(e);for(const o of t.keys())if(ce(o)===i)return o;return e}function bs(n,t){const e=eu(t.atoms,t.bonds),i=ir[n]||[];for(const s of i)if(s.tpl&&eu(s.tpl.atoms,s.tpl.bonds)===e)return tt[s.key]=t,s.key;const o=`${n}_g_${i.length}`;return br(n,o,t),o}function _S(n,t){if(n.length<2)return[];const e=[],i=[];for(const s of n){const r=ga(s);if(r){e.push({comp:s,ac:r});continue}const a=gS(s);a&&i.push({comp:s,bo:a})}if(!e.length||!i.length)return[];const o=[];for(const{comp:s,ac:r}of e)for(const{comp:a,bo:c}of i)for(let l=1;l<=r.ohs.length&&l<=c.count;l++){const h=Ht($t(s.atoms.map(y=>ut(y))));if(h.set("H",(h.get("H")||0)-l),(h.get("H")||0)<0)continue;const d=[];for(const[y,M]of h)for(let x=0;x<M;x++)d.push(y);const u={sym:Hp(d),charge:-l},f=Gn(c.cation,u),m=Ki(s,t),_=Ki(a,t),g=hn([m,_],[f,"H2O"]);if(!g)continue;tt[f]||(tt[f]=Vn(c.cation,u));const p={[f]:os(f)};o.push({reactants:{[m]:g[0],[_]:g[1]},condition:"rt",products:[[f,g[2]],["H2O",g[3]]],equation:_n([m,_],[f,"H2O"],g,p),dynamic:!0})}return o}function yS(n,t){if(n.length!==2)return[];let e=n[0],i=n[1];!ga(e)&&ga(i)&&(e=n[1],i=n[0]);const o=ga(e);if(!o||o.ohs.length!==1)return[];const s=mS(i);if(s==null)return[];const r=Oo(i)[s].find(p=>!p.ionic&&p.o===1&&i.atoms[p.n]==="H");if(!r)return[];const a=[],c=[],l=new Map,h=new Map,d=new Set([o.ohs[0].o,o.ohs[0].h]);for(let p=0;p<e.atoms.length;p++)d.has(p)||(l.set(p,a.length),a.push(e.atoms[p]));for(const p of e.bonds)l.has(p[0])&&l.has(p[1])&&c.push([l.get(p[0]),l.get(p[1]),p[2],p[3]||0]);const u=new Set([r.n]);for(let p=0;p<i.atoms.length;p++)u.has(p)||(h.set(p,a.length),a.push(i.atoms[p]));for(const p of i.bonds)h.has(p[0])&&h.has(p[1])&&c.push([h.get(p[0]),h.get(p[1]),p[2],p[3]||0]);c.push([l.get(o.c),h.get(s),1,0]);const f=$t(a.map(p=>ut(p))),m=bs(f,{atoms:a,bonds:c}),_=Ki(e,t),g=Ki(i,t);return[{reactants:{[_]:1,[g]:1},condition:"catalyst",products:[[m,1],["H2O",1]],equation:`${_} + ${g} ⇌ ${f} + H2O`,dynamic:!0}]}function xS(n,t){if(!t.has("H2O"))return[];const e=n.find(x=>zd(x));if(!e)return[];const i=e,o=zd(i);if(!o)return[];const s=Oo(i),r=`${Math.min(o.c,o.o)}-${Math.max(o.c,o.o)}`,a=new Set([o.c]),c=[o.c];for(;c.length;){const x=c.pop();for(const T of s[x]){const v=`${Math.min(x,T.n)}-${Math.max(x,T.n)}`;r===v||a.has(T.n)||(a.add(T.n),c.push(T.n))}}if(a.size===i.atoms.length)return[];const l=[],h=[],d=new Map;for(let x=0;x<i.atoms.length;x++)a.has(x)&&(d.set(x,l.length),l.push(i.atoms[x]));for(const x of i.bonds)d.has(x[0])&&d.has(x[1])&&h.push([d.get(x[0]),d.get(x[1]),x[2],x[3]||0]);l.push("O","H"),h.push([d.get(o.c),l.length-2,1,0],[l.length-2,l.length-1,1,0]);const u=[],f=[],m=new Map;for(let x=0;x<i.atoms.length;x++)a.has(x)||(m.set(x,u.length),u.push(i.atoms[x]));for(const x of i.bonds)m.has(x[0])&&m.has(x[1])&&f.push([m.get(x[0]),m.get(x[1]),x[2],x[3]||0]);u.push("H"),f.push([m.get(o.o),u.length-1,1,0]);const _=$t(l.map(x=>ut(x))),g=$t(u.map(x=>ut(x))),p=bs(_,{atoms:l,bonds:h}),y=bs(g,{atoms:u,bonds:f}),M=Ki(e,t);return[{reactants:{[M]:1,H2O:1},condition:"catalyst",products:[[p,1],[y,1]],equation:`${M} + H2O ⇌ ${_} + ${g}`,dynamic:!0}]}function vS(n,t){const e={Cl2:"Cl",Br2:"Br",F2:"F",I2:"I"},i=Object.keys(e).find(f=>t.has(f));if(!i)return[];const o=n.find(f=>Ia(f));if(!o)return[];const s=Ia(o);if(!s)return[];const r=o.atoms.slice();r.push(e[i],e[i]);const a=o.bonds.map(f=>[...f]);for(const f of a)(f[0]===s[0]&&f[1]===s[1]||f[0]===s[1]&&f[1]===s[0])&&(f[2]=1);const c=o.atoms.length,l=c+1;a.push([s[0],c,1,0],[s[1],l,1,0]);const h=$t(r.map(f=>ut(f))),d=bs(h,{atoms:r,bonds:a}),u=Ki(o,t);return[{reactants:{[u]:1,[i]:1},condition:"rt",products:[[d,1]],equation:`${u} + ${i} -> ${h}`,dynamic:!0}]}function Vp(n){const t=n.find(l=>Ia(l));if(!t)return null;const e=Ia(t),i=Oo(t),o=l=>i[l].filter(h=>!h.ionic&&t.atoms[h.n]==="H").length,[s,r]=e,a=o(s)<=o(r)?s:r;return{tpl:t,bond:e,cSub:a,cOther:a===s?r:s}}function MS(n,t){if(!t.has("H2O"))return[];const e=Vp(n);if(!e)return[];const{tpl:i,bond:o,cSub:s,cOther:r}=e,a=i.atoms.slice();a.push("O","H","H");const c=i.bonds.map(_=>[..._]);for(const _ of c)(_[0]===o[0]&&_[1]===o[1]||_[0]===o[1]&&_[1]===o[0])&&(_[2]=1);const l=i.atoms.length,h=l+1,d=l+2;c.push([s,l,1,0],[l,h,1,0],[r,d,1,0]);const u=$t(a.map(_=>ut(_))),f=bs(u,{atoms:a,bonds:c}),m=Ki(i,t);return[{reactants:{[m]:1,H2O:1},condition:"catalyst",products:[[f,1]],equation:`${m} + H2O -> ${u}`,dynamic:!0}]}function SS(n,t){const e=[["HCl","Cl"],["HBr","Br"],["HF","F"],["HI","I"]].find(([_])=>t.has(_));if(!e)return[];const i=Vp(n);if(!i)return[];const{tpl:o,bond:s,cSub:r,cOther:a}=i,c=o.atoms.slice();c.push(e[1],"H");const l=o.bonds.map(_=>[..._]);for(const _ of l)(_[0]===s[0]&&_[1]===s[1]||_[0]===s[1]&&_[1]===s[0])&&(_[2]=1);const h=o.atoms.length,d=h+1;l.push([r,h,1,0],[a,d,1,0]);const u=$t(c.map(_=>ut(_))),f=bs(u,{atoms:c,bonds:l}),m=Ki(o,t);return[{reactants:{[m]:1,[e[0]]:1},condition:"rt",products:[[f,1]],equation:`${m} + ${e[0]} -> ${u}`,dynamic:!0}]}function bS(n,t){if(n.length<2)return null;for(let e=0;e<n.length;e++){const o=Yi(n[e]).find(r=>r.group===ne.HALIDE);if(!o)continue;const s=hp(n[e],o);if(!(!s||s==="aryl"))for(let r=0;r<n.length;r++){if(e===r||!(Yi(n[r]).some(y=>y.group===ne.ALCOHOL||y.group===ne.AMINE_PRIMARY||y.group===ne.AMINE_SECONDARY)||ce($t(n[r].atoms.map(y=>ut(y))))==="NaOH"||ce($t(n[r].atoms.map(y=>ut(y))))==="KOH"||ce($t(n[r].atoms.map(y=>ut(y))))==="NaCN"))continue;const l=s==="tertiary"?"SN1":"SN2",h=o.atomIndices.find(y=>n[e].atoms[y]==="C"),d=o.atomIndices.find(y=>n[e].atoms[y]!=="C"),u=n[e].atoms[d],f=[...n[e].atoms];f[d]="O";const m=f.length;f.push("H");const _=n[e].bonds.filter(y=>y[0]!==d&&y[1]!==d);_.push([h,d,1]),_.push([d,m,1]);const g=Qi(f),p=`H${u}`;return tt[g]||(tt[g]={atoms:f,bonds:_}),tt[p]||(tt[p]={atoms:["H",u],bonds:[[0,1,1]]}),{reactants:Object.fromEntries([[$t(n[e].atoms.map(y=>ut(y))),1],[$t(n[r].atoms.map(y=>ut(y))),1]]),condition:"rt",products:[[g,1],[p,1]],equation:`${$t(n[e].atoms.map(y=>ut(y)))} + ${$t(n[r].atoms.map(y=>ut(y)))} -> ${g} + H${u}`,dynamic:!0,mechanism:l,organic:!0}}}return null}function ES(n,t){if(n.length<2)return null;for(let e=0;e<n.length;e++){const o=Yi(n[e]).find(r=>r.group===ne.HALIDE);if(!o)continue;const s=hp(n[e],o);if(!(!s||s==="methyl"))for(let r=0;r<n.length;r++){if(e===r)continue;const a=ce($t(n[r].atoms.map(v=>ut(v))));if(!(a==="NaOH"||a==="KOH"||a==="NaOEt"))continue;const l=o.atomIndices.find(v=>n[e].atoms[v]==="C"),h=o.atomIndices.find(v=>n[e].atoms[v]!=="C"),d=n[e].atoms[h],m=ji(n[e].atoms,n[e].bonds)[l].map(v=>v.j!==void 0?v.j:v.i).find(v=>n[e].atoms[v]==="C"&&v!==h);if(m===void 0)continue;const _=[...n[e].atoms],g=n[e].bonds.map(v=>[...v]),p=g.find(v=>v[0]===l&&v[1]===m||v[0]===m&&v[1]===l);p?p[2]=Math.min((p[2]||1)+1,3):g.push([l,m,2]);const y=Qi(_);tt[y]||(tt[y]={atoms:_,bonds:g});const M=s==="tertiary"?"E1":"E2",x=a.startsWith("K")?"K":"Na",T=`${x}${d}`;return tt[T]||(tt[T]={atoms:[x,d],bonds:[[0,1,1,!0]]}),{reactants:Object.fromEntries([[$t(n[e].atoms.map(v=>ut(v))),1],[$t(n[r].atoms.map(v=>ut(v))),1]]),condition:"heat",products:[[y,1],[T,1],["H2O",1]],equation:`${$t(n[e].atoms.map(v=>ut(v)))} + ${$t(n[r].atoms.map(v=>ut(v)))} -> ${y} + ${T} + H2O`,dynamic:!0,mechanism:M,organic:!0}}}return null}function CS(n,t){if(n.length<2)return null;const e=new Set(["KMnO4","K2Cr2O7","CrO3","MnO2"]);for(let i=0;i<n.length;i++){const s=Yi(n[i]).find(a=>a.group===ne.ALCOHOL);if(!s)continue;const r=RM(n[i],s);if(!(!r||r==="tertiary"))for(let a=0;a<n.length;a++){if(i===a)continue;const c=ce($t(n[a].atoms.map(p=>ut(p))));if(!e.has(c))continue;const l=ji(n[i].atoms,n[i].bonds),h=s.atomIndices.find(p=>n[i].atoms[p]==="O"),d=l[h].find(p=>{const y=p.j!==void 0?p.j:p.i;return n[i].atoms[y]==="C"}),u=d?d.j!==void 0?d.j:d.i:void 0;if(u===void 0)continue;const f=[...n[i].atoms],m=n[i].bonds.map(p=>[...p]);if(r==="primary"){const p=m.find(M=>M[0]===u&&M[1]===h||M[0]===h&&M[1]===u);p?p[2]=2:m.push([u,h,2]);const y=l[u].filter(M=>{const x=M.j!==void 0?M.j:M.i;return n[i].atoms[x]==="H"});y.length>0&&(f[y[0].j!==void 0?y[0].j:y[0].i]="O",m.push([u,y[0].j!==void 0?y[0].j:y[0].i,2]))}else{const p=m.find(y=>y[0]===u&&y[1]===h||y[0]===h&&y[1]===u);p?p[2]=2:m.push([u,h,2])}const _=Qi(f);tt[_]||(tt[_]={atoms:f,bonds:m});const g=r==="primary"?"carboxylic acid":"ketone";return{reactants:Object.fromEntries([[$t(n[i].atoms.map(p=>ut(p))),1],[$t(n[a].atoms.map(p=>ut(p))),1]]),condition:"catalyst",products:[[_,1]],equation:`${$t(n[i].atoms.map(p=>ut(p)))} + ${c} -> ${_} (oxidation: ${g})`,dynamic:!0,organic:!0,oxidation:!0}}}return null}function AS(n,t){if(n.length<2)return null;for(let e=0;e<n.length;e++){const o=Yi(n[e]).find(s=>s.group===ne.CARBOXYL);if(o)for(let s=0;s<n.length;s++){if(e===s)continue;const a=Yi(n[s]).find(m=>m.group===ne.AMINE_PRIMARY||m.group===ne.AMINE_SECONDARY);if(!a)continue;const c=o.atomIndices.find(m=>n[e].atoms[m]==="C"),l=a.atomIndices.find(m=>n[s].atoms[m]==="N"),h=[...n[e].atoms,...n[s].atoms],d=[...n[e].bonds.map(m=>[...m])],u=n[e].atoms.length;for(const m of n[s].bonds)d.push([m[0]+u,m[1]+u,m[2]||1,m[3]]);d.push([c,l+u,1]);const f=Qi(h);return tt[f]||(tt[f]={atoms:h,bonds:d}),{reactants:Object.fromEntries([[$t(n[e].atoms.map(m=>ut(m))),1],[$t(n[s].atoms.map(m=>ut(m))),1]]),condition:"heat",products:[[f,1],["H2O",1]],equation:`${$t(n[e].atoms.map(m=>ut(m)))} + ${$t(n[s].atoms.map(m=>ut(m)))} -> amide + H2O`,dynamic:!0,organic:!0,condensation:!0}}}return null}function Gp(n){return Yi(n).find(e=>e.group===ne.ARYL)||null}function TS(n,t){if(n.length<2)return null;for(let e=0;e<n.length;e++){const i=Gp(n[e]);if(i)for(let o=0;o<n.length;o++){if(e===o||ce($t(n[o].atoms.map(c=>ut(c))))!=="HNO3")continue;const r=[...n[e].atoms],a=i.atomIndices.find(c=>ji(n[e].atoms,n[e].bonds)[c].some(h=>{const d=h.j!==void 0?h.j:h.i;return n[e].atoms[d]==="H"}));if(a!==void 0){const l=ji(n[e].atoms,n[e].bonds)[a].find(h=>{const d=h.j!==void 0?h.j:h.i;return n[e].atoms[d]==="H"});if(l){const h=l.j!==void 0?l.j:l.i;r[h]="N";const d=r.length,u=r.length+1;r.push("O","O");const f=[...n[e].bonds];f.push([a,h,1]),f.push([h,d,2]),f.push([h,u,1]);const m=Qi(r);return tt[m]||(tt[m]={atoms:r,bonds:f}),{reactants:Object.fromEntries([[$t(n[e].atoms.map(_=>ut(_))),1],["HNO3",1]]),condition:"heat",products:[[m,1],["H2O",1]],equation:`${$t(n[e].atoms.map(_=>ut(_)))} + HNO3 -> nitro${$t(n[e].atoms.map(_=>ut(_)))} + H2O`,dynamic:!0,organic:!0,aromatic:!0,substitution:"nitration"}}}}}return null}function wS(n,t){if(n.length<2)return null;for(let e=0;e<n.length;e++){const i=Gp(n[e]);if(i)for(let o=0;o<n.length;o++){if(e===o)continue;const r=Yi(n[o]).find(x=>x.group===ne.HALIDE);if(!r)continue;const a=r.atomIndices.find(x=>n[o].atoms[x]==="C"),c=r.atomIndices.find(x=>n[o].atoms[x]!=="C");if(a===void 0||c===void 0)continue;const l=n[o].atoms[c],h=ji(n[e].atoms,n[e].bonds),d=i.atomIndices.find(x=>h[x].some(T=>{const v=T.j!==void 0?T.j:T.i;return n[e].atoms[v]==="H"}));if(d===void 0)continue;const u=h[d].find(x=>{const T=x.j!==void 0?x.j:x.i;return n[e].atoms[T]==="H"});if(!u)continue;const f=u.j!==void 0?u.j:u.i,m=[...n[o].atoms];m.splice(c,1);const _=[...n[e].atoms];_[f]=m[0];for(let x=1;x<m.length;x++)_.push(m[x]);const g=[...n[e].bonds],p=n[e].atoms.length;for(let x=0;x<m.length-1;x++)g.push([p+x,p+x+1,1]);g.push([d,p,1]);const y=Qi(_);tt[y]||(tt[y]={atoms:_,bonds:g});const M=`H${l}`;return tt[M]||(tt[M]={atoms:["H",l],bonds:[[0,1,1]]}),{reactants:Object.fromEntries([[$t(n[e].atoms.map(x=>ut(x))),1],[$t(n[o].atoms.map(x=>ut(x))),1]]),condition:"catalyst",products:[[y,1],[M,1]],equation:`${$t(n[e].atoms.map(x=>ut(x)))} + ${$t(n[o].atoms.map(x=>ut(x)))} -> alkylated + H${l}`,dynamic:!0,organic:!0,aromatic:!0,substitution:"friedel-crafts"}}}return null}const Wp={rt:[_S,vS,SS,bS,CS],catalyst:[yS,xS,MS,wS,AS],heat:[TS,ES]};function Pa(n){return n?Array.isArray(n)?n.filter(Boolean):[n]:[]}function Vd(n,t){if(ou(n,t))return n;if(Object.keys(n.reactants).length!==t.size)return null;let i=0;for(const[c,l]of Object.entries(n.reactants)){const h=ce(c);let d=0;for(const[f,m]of t)ce(f)===h&&(d=m);if(d===0||d%l!==0)return null;const u=d/l;if(i!==0&&i!==u)return null;i=u}if(i<=1)return null;const o={};for(const[c,l]of Object.entries(n.reactants))o[c]=l*i;const s=n.products.map(([c,l])=>[c,l*i]),r=([c,l])=>`${l===1?"":l}${c}${n.phases&&n.phases[c]||""}`,a=`${Object.entries(o).map(([c,l])=>r([c,l])).join(" + ")} -> ${s.map(r).join(" + ")}`;return{...n,reactants:o,products:s,equation:a}}function La(n){const t=ce(n);for(const[e,i]of Object.entries(ds))for(const[o,s]of Object.entries(WM)){const r=Math.abs(i.charge),a=Math.abs(s.charge),c=r*a/Te(r,a),l=c/r,h=c/a;let d=e;if(l>1&&(d+=l),h>1&&o.length>1?d+=`(${o})${h}`:(d+=o,h>1&&(d+=h)),ce(d)===t)return{cation:i,anion:s,catCount:l,anCount:h}}return null}function Es(n,t){const e=Math.abs(n.charge),i=Math.abs(t.charge),o=e*i/Te(e,i),s=o/e,r=o/i;let a=n.sym;return s>1&&(a+=s),r>1&&t.sym.length>1?a+=`(${t.sym})${r}`:(a+=t.sym,r>1&&(a+=r)),a}function $p(n){if(n.length!==2)return null;const[t,e]=n,i=La(t),o=La(e);if(!i||!o)return null;const s=Es(i.cation,o.anion),r=Es(o.cation,i.anion),a=tu(i.cation,o.anion),c=tu(o.cation,i.anion);if(a&&c||s===t&&r===e||s===r)return null;const l=Math.abs(i.cation.charge),h=Math.abs(o.anion.charge),d=l*h/Te(l,h);Math.abs(o.cation.charge),Math.abs(i.anion.charge),d/Math.abs(i.cation.charge)*Math.abs(i.anion.charge)/Te(Math.abs(i.anion.charge),Math.abs(o.cation.charge));const u=a?"(aq)":"(s)",f=c?"(aq)":"(s)",m=`${t}(aq) + ${e}(aq) -> ${s}${u} + ${r}${f}`;return tt[s]||(tt[s]={atoms:[],bonds:[]}),tt[r]||(tt[r]={atoms:[],bonds:[]}),{reactants:{[t]:1,[e]:1},condition:"rt",products:[[s,1],[r,1]],equation:m,dynamic:!0,phases:{[s]:u,[r]:f}}}function Xp(n){if(n.length!==1)return null;const t=n[0];Ht(t);const e=t.match(/^(.+?)\(NO3\)(\d*)$/);if(e){const o=e[1],s=e[2]?parseInt(e[2]):1,r=ds[o]||ds[o+"2"];if(r)if(r.group===1){const a=o+"NO2";return tt[a]||(tt[a]={atoms:[],bonds:[]}),{reactants:{[t]:2},condition:"heat",products:[[a,2],["O2",1]],equation:`2${t} -> 2${a} + O2`,dynamic:!0}}else{const a=Es(r,{sym:"O",charge:-2});return tt[a]||(tt[a]={atoms:[],bonds:[]}),{reactants:{[t]:2},condition:"heat",products:[[a,1],["NO2",s*2],["O2",1]],equation:`2${t} -> ${a} + ${s*2}NO2 + O2`,dynamic:!0}}}const i=t.match(/^(.+?)ClO3(\d*)$/);if(i){const o=i[1],s=ds[o];if(s){const r=Es(s,{sym:"Cl",charge:-1});return tt[r]||(tt[r]={atoms:[],bonds:[]}),{reactants:{[t]:2},condition:"heat",products:[[r,2],["O2",3]],equation:`2${t} -> 2${r} + 3O2`,dynamic:!0}}}return t==="NH4Cl"?{reactants:{NH4Cl:1},condition:"heat",products:[["NH3",1],["HCl",1]],equation:"NH4Cl -> NH3 + HCl",dynamic:!0}:null}function qp(n){if(n.length!==1)return null;const t=n[0],e=Ht(t);if(!e||e.size===0)return null;for(const i of OM)if(i.match(e,e)){const o=i.products(e,e);if(!o||o.length<2)continue;const s=o.filter(a=>{const c=Ht(a);return c&&c.size>0});if(s.length<2)continue;const r=hn([t],s);if(!r)continue;for(const a of s)tt[a]||(tt[a]=Fu(a.split(/(?=[A-Z])/)[0])||{atoms:[],bonds:[]});return{reactants:{[t]:1},condition:"heat",products:s.map((a,c)=>[a,r[1+c]]),equation:_n([t],s,r),dynamic:!0,decompositionRule:i.id}}return null}function jp(n){if(n.length!==2)return null;let t=null,e=0;for(const h of n)ce(h)==="H2O"?e=n.filter(d=>ce(d)==="H2O").length:t=h;if(!t||e===0)return null;const i=ce(t);if(!BM(i))return null;const o=UM(i,Ht(t));if(o<=0)return null;const s=kM(i,o),r=mr[i],a=tt[i]||tt[t],c=a?zM(a,o):{atoms:[],bonds:[]};tt[s]||(tt[s]=c);const l=hn([t,"H2O"],[s]);return l?{reactants:{[t]:1,H2O:1},condition:"rt",products:[[s,l[2]]],equation:`${l[0]>1?l[0]:""}${t} + ${l[1]>1?l[1]:""}H2O -> ${l[2]>1?l[2]:""}${s}`,dynamic:!0,hydrate:!0,hydrateName:r?r.name:null}:null}function Yp(n){if(n.length!==2)return null;for(let o=0;o<2;o++){const s=n[1-o],r=Ht(n[o]),a=r.get("H")||0,c=r.get("N")||0;if(r.has("N")&&!r.has("C")&&a>0&&a%4===0&&(a===4*c||r.size>2)&&Lu(s))return{reactants:{[n[o]]:1,[s]:1},condition:"rt",products:[["NH3",1],["H2O",1]],equation:`${n[o]} + ${s} -> NH3(g) + H2O + ...`,dynamic:!0,gas:"NH3"}}let t=null,e=null;for(const o of n)ic(o)?t=o:e=o;if(!t||!e)return null;const i=Ht(e);if(i.has("S")&&i.get("S")===1&&!i.has("O")){const o=[...i.entries()].filter(([s])=>s!=="S");if(o.length===1){const s=o[0][0],r=ds[s]||ds[s+"2"];if(r)return r.charge===2||r.charge,{reactants:{[e]:1,[t]:1},condition:"rt",products:[["H2S",1],[Es(r,gr(t)),1]],equation:`${e} + ${t} -> H2S(g) + ${Es(r,gr(t))}`,dynamic:!0,gas:"H2S"}}}if(i.has("S")&&i.has("O")){const o=i.get("S");if(i.get("O")/o===3)return{reactants:{[e]:1,[t]:1},condition:"rt",products:[["SO2",1],["H2O",1]],equation:`${e} + ${t} -> SO2(g) + H2O + ...`,dynamic:!0,gas:"SO2"}}if(i.has("N")&&i.has("O")){const o=i.get("N");if(i.get("O")/o===2)return{reactants:{[e]:1,[t]:1},condition:"rt",products:[["NO",1],["H2O",1]],equation:`${e} + ${t} -> NO(g) + H2O + ...`,dynamic:!0,gas:"NO"}}return null}function Kp(n){if(n.length<2)return null;const t=new Map;for(const a of n){const c=ce(a);t.set(c,(t.get(c)||0)+1)}const e=n.map(a=>({formula:a,parsed:Ht(a)})),i=new Set;for(const{parsed:a}of e)if(a)for(const c of a.keys())c!=="H"&&c!=="O"&&i.add(c);const o=[];for(const a of i){const c=new Set;for(const{parsed:l}of e)l&&l.has(a)&&c.add(gi(a,l));c.size>0&&o.push({sym:a,states:[...c]})}let s=null,r=null;for(const a of o){const c=bo[a.sym],l=c?Array.isArray(c)?c:c.states||[]:[],h=a.states[0],d=l.some(f=>f>h),u=l.some(f=>f<h);if(d&&!s&&(s={sym:a.sym,from:h}),u&&!r&&(r={sym:a.sym,from:h}),s&&r)break}return!s||!r||s.sym===r.sym?null:RS(n,t,s,r)}function RS(n,t,e,i){const o=n.map(s=>({formula:s,parsed:Ht(s)}));for(const s of o){const{formula:r,parsed:a}=s,c=[...a.keys()].filter(l=>qi(l));if(c.length>0&&(r.includes("O")||r.includes("Cl")||r.includes("Br"))){const l=c[0];if(gi(l,a)>0&&OS(r,l)){const f=n.filter(m=>ce(m)!==ce(r))[0];if(f){const m=Gd(r,f,e,i);if(m){const _=n.slice(),g=hn(_,m.map(p=>p.formula));if(g){const p={};for(const y of _)p[y]=1;return{reactants:p,condition:"heat",products:m.map((y,M)=>[y.formula,g[_.length+M]]),equation:_n(_,m.map(y=>y.formula),g),dynamic:!0,redox:!0}}}}}}}if(i.sym===e.sym)return null;for(const s of n)for(const r of n){if(ce(s)===ce(r))continue;const a=Gd(s,r,e,i);if(!a)continue;const c=[s,r],l=hn(c,a.map(d=>d.formula));if(!l)continue;const h={};for(const d of c)h[d]=1;return{reactants:h,condition:"heat",products:a.map((d,u)=>[d.formula,l[c.length+u]]),equation:_n(c,a.map(d=>d.formula),l),dynamic:!0,redox:!0}}return null}function OS(n,t){const i=[...Ht(n).keys()].find(o=>o!==t&&o!=="O"&&o!=="H");return i?{formula:`${t}${i}`,metal:t}:{formula:t,metal:t}}function Gd(n,t,e,i){const o=Ht(n),s=Ht(t);if(!o||!s)return null;const r=new Set([...o.keys(),...s.keys()]),a=[...r].filter(u=>qi(u)),c=[...r].filter(u=>!qi(u)&&u!=="H"&&u!=="O");if(a.length===0&&c.length===0)return null;const l=[],h=i.sym,d=e.sym;if(o.has(h)||!o.has(d)&&s.has(h)){o.has(h);const u=o.has(h)?o:s;gi(h,u)>0&&l.push({formula:h})}if(o.has(d)){const u=gi(d,o),f=Math.max(...s.has(d)?[u,gi(d,s)]:[u]),m=Wd(d,f,o,s);m&&l.push(m)}else if(s.has(d)){const u=gi(d,s),f=Wd(d,u,s,o);f&&l.push(f)}if(l.length===0)return null;if(o.has("O")||s.has("O")){const u=a.find(f=>f!==h);if(u){const f=$d(u),m=Te(f,2),_=2/m,g=f/m,p=`${_===1?u:u+_}${g===1?"O":"O"+g}`;l.some(y=>y.formula===p)||l.push({formula:p})}else!l.some(f=>f.formula==="CO2")&&o.has("C")?l.push({formula:"CO2"}):l.some(f=>f.formula==="H2O")||l.push({formula:"H2O"})}if((o.has("Cl")||s.has("Cl"))&&!l.some(u=>u.formula.includes("Cl"))){const u=a.find(f=>f!==h)||a[0];if(u){const f=$d(u);l.push({formula:f===1?`${u}Cl`:`${u}Cl${f}`})}}return l.length>=2?l:null}function Wd(n,t,e,i){const o=bo[n];if(!o)return null;const r=(Array.isArray(o)?o:o.states||[]).filter(c=>c>t);if(r.length===0)return null;const a=r[0];if(n==="Cl")return a===1?{formula:"HClO"}:a===3?{formula:"HClO2"}:a===5?{formula:"HClO3"}:a===7?{formula:"HClO4"}:{formula:"Cl2"};if(n==="S"){if(a===4)return{formula:"SO2"};if(a===6)return{formula:"SO3"}}if(n==="N"){if(a===2)return{formula:"NO"};if(a===4)return{formula:"NO2"};if(a===5)return{formula:"HNO3"}}if(n==="C")return{formula:"CO2"};if(n==="Fe"&&a===3)return{formula:"Fe2O3"};if(n==="Mn"){if(a===4)return{formula:"MnO2"};if(a===7)return{formula:"KMnO4"}}if(n==="Cr"){if(a===3)return{formula:"Cr2O3"};if(a===6)return{formula:"CrO3"}}if(a>t&&(e.has("O")||i.has("O"))){const c=Te(Math.abs(a),2),l=2/c,h=Math.abs(a)/c,d=l===1?n:`${n}${l}`,u=h===1?"O":`O${h}`;return{formula:`${d}${u}`}}return null}function $d(n){return{Li:1,Na:1,K:1,Rb:1,Cs:1,Be:2,Mg:2,Ca:2,Sr:2,Ba:2,Al:3,Zn:2,Ag:1,Cu:2,Fe:3,Mn:2,Cr:3,Ni:2,Co:2,Pb:2,Sn:2,W:6,Mo:6,V:5,Ti:4,Au:3,Pt:4,Pd:2,Hg:2,Cd:2,Bi:3}[n]||2}function Zp(n){if(n.length!==1)return null;const t=n[0],e=Ht(t);if(!e)return null;for(const i of e.keys()){if(i==="H"||i==="O")continue;const o=gi(i,e),s=bo[i],r=s?Array.isArray(s)?s:s.states||[]:[],a=r.filter(l=>l<o),c=r.filter(l=>l>o);if(a.length>0&&c.length>0){const l=IS(i,t,e,a[0],c[0]);if(l){const h=hn([t],l.map(d=>d.formula));if(h)return{reactants:{[t]:1},condition:"heat",products:l.map((d,u)=>[d.formula,h[1+u]]),equation:_n([t],l.map(d=>d.formula),h),dynamic:!0,redox:!0,disproportionation:!0}}}}return null}function IS(n,t,e,i,o){const s=[];if(i<=0)s.push({formula:n==="Cl"?"Cl":n});else{const r=[...e.keys()].find(a=>qi(a));if(r){const a=i;s.push({formula:a===1?`${r}${n}`:`${r}${n}${a}`})}}if(o>0&&e.has("O")){const r=Math.ceil(o);s.push({formula:`${n}O${r>1?r:""}`})}else o>0&&s.push({formula:`${n}2O${o}`});return s.length>=2?s:null}function Jp(n){if(n.length!==2)return null;const[t,e]=n,i=Ht(t),o=Ht(e);if(!i||!o)return null;const s=new Set([...i.keys(),...o.keys()]);for(const r of s){if(r==="H"||r==="O"||!i.has(r)||!o.has(r))continue;const a=gi(r,i),c=gi(r,o);if(a===c)continue;const l=Math.max(a,c),h=Math.min(a,c),d=(l+h)/2,u=bo[r];if((u?Array.isArray(u)?u:u.states||[]:[]).includes(d)||Number.isInteger(d)){const m=PS(r,d,i,o);if(m){const _=hn([t,e],[m.formula]);if(_)return{reactants:{[t]:1,[e]:1},condition:"rt",products:[[m.formula,_[2]]],equation:_n([t,e],[m.formula],_),dynamic:!0,redox:!0,comproportionation:!0}}}}return null}function PS(n,t,e,i){if(t===0)return{formula:n};const o=[...e.keys()].filter(a=>qi(a)),s=[...i.keys()].filter(a=>qi(a));if(new Set([...o,...s]).size>0&&(e.has("O")||i.has("O"))){const a=o[0]||s[0],c=Math.abs(t);return c===2?{formula:`${a}O`}:c===1?{formula:`${a}2O`}:{formula:`${a}2O${c}`}}if(e.has("Cl")||i.has("Cl")){const a=o[0]||s[0];if(a){const c=Math.abs(t);return{formula:c===1?`${a}Cl`:`${a}Cl${c}`}}}return t>0&&e.has("O")?{formula:`${n}O${Math.ceil(t/2)}`}:{formula:n}}const LS={2:"linear",4:["tetrahedral","square planar"],6:"octahedral"},Xd={H2O:{name:"aqua",charge:0,denticity:1},NH3:{name:"ammine",charge:0,denticity:1},Cl:{name:"chloro",charge:-1,denticity:1},Br:{name:"bromo",charge:-1,denticity:1},I:{name:"iodo",charge:-1,denticity:1},OH:{name:"hydroxo",charge:-1,denticity:1},CN:{name:"cyano",charge:-1,denticity:1},CO:{name:"carbonyl",charge:0,denticity:1},NO2:{name:"nitro",charge:-1,denticity:1},en:{name:"ethylenediamine",charge:0,denticity:2},ox:{name:"oxalato",charge:-2,denticity:2}};function Qp(n){if(n.length<2)return null;const t=["Fe","Cu","Co","Ni","Zn","Cr","Mn","Pt","Pd","Ag"];let e=null,i=[];for(const d of n){const u=Ht(d);let f=!1;for(const m of u.keys())if(t.includes(m)){e={sym:m,formula:d},f=!0;break}!f&&Xd[d]&&i.push({formula:d,...Xd[d]})}if(!e||i.length===0)return null;const o=i.reduce((d,u)=>d+u.charge,0),s=bo[e.sym];if(!s||!s.states||s.states.length===0)return null;const a=s.states[0]+o,c=i.reduce((d,u)=>d+u.denticity,0);if(![2,4,6].includes(c))return null;`${i.map(d=>d.name).join("-")}${e.sym.toLowerCase()}`;let h=`[${e.formula}`;for(const d of i)h+=d.formula;return h+="]",a!==0&&(h+=a>0?`+${a}`:`${a}`),tt[h]||(tt[h]={atoms:[],bonds:[]}),{reactants:{[e.formula]:1,...i.reduce((d,u)=>(d[u.formula]=(d[u.formula]||0)+1,d),{})},condition:"rt",products:[[h,1]],equation:`${e.formula} + ${i.map(d=>d.formula).join(" + ")} -> ${h}`,dynamic:!0,coordination:!0,geometry:LS[c],coordinationNumber:c}}function Na(n){if(n.length<2)return null;const t=e=>n.some(i=>ce(i)===ce(e));return t("CO2")&&t("H2O")?(tt.HCO3||(tt.HCO3={atoms:[],bonds:[]}),{reactants:{CO2:1,H2O:1},condition:"rt",products:[["HCO3",1]],equation:"CO2 + H2O ⇌ HCO3- + H+ (carbonic anhydrase)",dynamic:!0,biochemical:!0,enzyme:"carbonic anhydrase"}):t("ATP")&&t("H2O")?(tt.ADP||(tt.ADP={atoms:[],bonds:[]}),tt.HPO4||(tt.HPO4={atoms:[],bonds:[]}),{reactants:{ATP:1,H2O:1},condition:"rt",products:[["ADP",1],["HPO4",1]],equation:"ATP4- + H2O → ADP3- + HPO42- + H+ (ΔG° ≈ -30.5 kJ/mol)",dynamic:!0,biochemical:!0,enzyme:"ATPase"}):t("N2")&&t("H2")?{reactants:{N2:1,H2:3},condition:"catalyst",products:[["NH3",2]],equation:"N2 + 3H2 → 2NH3 (nitrogenase)",dynamic:!0,biochemical:!0,enzyme:"nitrogenase"}:null}const Hu=[{reactants:{H2:2,O2:1},condition:"spark",products:[["H2O",2]],equation:"2H2 + O2 -> 2H2O"},{reactants:{H2:1,Cl2:1},condition:"spark",products:[["HCl",2]],equation:"H2 + Cl2 -> 2HCl"},{reactants:{N2:1,H2:3},condition:"catalyst",products:[["NH3",2]],equation:"N2 + 3H2 -> 2NH3"},{reactants:{Mg:2,O2:1},condition:"heat",products:[["MgO",2]],equation:"2Mg + O2 -> 2MgO"},{reactants:{Na:2,Cl2:1},condition:"spark",products:[["NaCl",2]],equation:"2Na + Cl2 -> 2NaCl"},{reactants:{CaCO3:1},condition:"heat",products:[["CaO",1],["CO2",1]],equation:"CaCO3 -> CaO + CO2"},{reactants:{HCl:1,NaOH:1},condition:"rt",products:[["NaCl",1],["H2O",1]],equation:"HCl + NaOH -> NaCl + H2O"},{reactants:{H2O2:2},condition:"catalyst",products:[["H2O",2],["O2",1]],equation:"2H2O2 -> 2H2O + O2"},{reactants:{CH4:1,O2:2},condition:"spark",products:[["CO2",1],["H2O",2]],equation:"CH4 + 2O2 -> CO2 + 2H2O"},{reactants:{C:1,O2:1},condition:"heat",products:[["CO2",1]],equation:"C + O2 -> CO2"},{reactants:{N2:1,O2:1},condition:"spark",products:[["NO",2]],equation:"N2 + O2 -> 2NO"},{reactants:{SO2:2,O2:1},condition:"catalyst",products:[["SO3",2]],equation:"2SO2 + O2 -> 2SO3"},{reactants:{H2O:2},condition:"electricity",products:[["H2",2],["O2",1]],equation:"2H2O -> 2H2 + O2"},{reactants:{NH3:1,HCl:1},condition:"rt",products:[["NH4",1],["ClI",1]],equation:"NH3 + HCl -> NH4+ + Cl-"},{reactants:{Na:2,H2O:2},condition:"rt",products:[["NaOH",2],["H2",1]],equation:"2Na + 2H2O -> 2NaOH + H2"},{reactants:{K:2,H2O:2},condition:"rt",products:[["KOH",2],["H2",1]],equation:"2K + 2H2O -> 2KOH + H2"},{reactants:{Al:2,Cl2:3},condition:"heat",products:[["AlCl3",2]],equation:"2Al + 3Cl2 -> 2AlCl3"},{reactants:{Mg:1,HCl:2},condition:"rt",products:[["MgCl2",1],["H2",1]],equation:"Mg + 2HCl -> MgCl2 + H2"},{reactants:{O2:3},condition:"uv",products:[["O3",2]],equation:"3O2 -> 2O3"},{reactants:{MnO2:1,HCl:4},condition:"heat",products:[["MnCl2",1],["Cl2",1],["H2O",2]],equation:"MnO2 + 4HCl -> MnCl2 + Cl2 + 2H2O"},{reactants:{HCl:1,KOH:1},condition:"rt",products:[["KCl",1],["H2O",1]],equation:"HCl + KOH -> KCl + H2O"},{reactants:{H2SO4:1,NaOH:2},condition:"rt",products:[["Na2SO4",1],["H2O",2]],equation:"H2SO4 + 2NaOH -> Na2SO4 + 2H2O"},{reactants:{H2SO4:1,KOH:2},condition:"rt",products:[["K2SO4",1],["H2O",2]],equation:"H2SO4 + 2KOH -> K2SO4 + 2H2O"},{reactants:{HCl:2,CaOH2:1},condition:"rt",products:[["CaCl2",1],["H2O",2]],equation:"2HCl + Ca(OH)2 -> CaCl2 + 2H2O"},{reactants:{NH3:4,O2:5},condition:"catalyst",products:[["NO",4],["H2O",6]],equation:"4NH3 + 5O2 -> 4NO + 6H2O"},{reactants:{NO:2,O2:1},condition:"rt",products:[["NO2",2]],equation:"2NO + O2 -> 2NO2"},{reactants:{NO2:3,H2O:1},condition:"rt",products:[["HNO3",2],["NO",1]],equation:"3NO2 + H2O -> 2HNO3 + NO"},{reactants:{Fe:2,O2:3},condition:"heat",products:[["Fe2O3",1]],equation:"2Fe + 3O2 -> Fe2O3"},{reactants:{Cu:1,AgNO3:2},condition:"rt",products:[["CuNO32",1],["Ag",2]],equation:"Cu + 2AgNO3 -> Cu(NO3)2 + 2Ag"},{reactants:{Zn:1,CuSO4:1},condition:"rt",products:[["ZnSO4",1],["Cu",1]],equation:"Zn + CuSO4 -> ZnSO4 + Cu"},{reactants:{HNO3:1,NaOH:1},condition:"rt",products:[["NaNO3",1],["H2O",1]],equation:"HNO3 + NaOH -> NaNO3 + H2O"},{reactants:{HNO3:1,KOH:1},condition:"rt",products:[["KNO3",1],["H2O",1]],equation:"HNO3 + KOH -> KNO3 + H2O"},{reactants:{H2SO4:1,CaOH2:1},condition:"rt",products:[["CaSO4",1],["H2O",2]],equation:"H2SO4 + Ca(OH)2 -> CaSO4 + 2H2O"},{reactants:{C2H6:2,O2:7},condition:"spark",products:[["CO2",4],["H2O",6]],equation:"2C2H6 + 7O2 -> 4CO2 + 6H2O"},{reactants:{C3H8:1,O2:5},condition:"spark",products:[["CO2",3],["H2O",4]],equation:"C3H8 + 5O2 -> 3CO2 + 4H2O"},{reactants:{C2H4:1,O2:3},condition:"spark",products:[["CO2",2],["H2O",2]],equation:"C2H4 + 3O2 -> 2CO2 + 2H2O"},{reactants:{NaCl:2},condition:"electricity",products:[["Na",2],["Cl2",1]],equation:"2NaCl -> 2Na + Cl2"},{reactants:{Al2O3:2},condition:"electricity",products:[["Al",4],["O2",3]],equation:"2Al2O3 -> 4Al + 3O2"},{reactants:{KCl:2},condition:"electricity",products:[["K",2],["Cl2",1]],equation:"2KCl -> 2K + Cl2"},{reactants:{CaCl2:1},condition:"electricity",products:[["Ca",1],["Cl2",1]],equation:"CaCl2 -> Ca + Cl2"},{reactants:{MgCl2:1},condition:"electricity",products:[["Mg",1],["Cl2",1]],equation:"MgCl2 -> Mg + Cl2"}];function In(n){const t=new Map;for(const e of n)t.set(e,(t.get(e)||0)+1);return t}function ce(n){return[...Ht(n).entries()].sort(([e],[i])=>e.localeCompare(i)).map(([e,i])=>`${e}${i}`).join("")}function ou(n,t){const e=Object.entries(n.reactants);if(e.length!==t.size)return!1;const i=new Map;for(const[o,s]of t){const r=ce(o);i.set(r,(i.get(r)||0)+s)}for(const[o,s]of e){const r=ce(o);if(i.get(r)!==s)return!1}return!0}function oc(n,t,e=null){const i=In(n);if(Array.isArray(e)&&e.length>0&&e.every(a=>a&&Array.isArray(a.atoms)))for(const a of Wp[t]||[])for(const c of Pa(a(e,i))){const l=Vd(c,i);if(l)return l}for(const a of Hu)if(a.condition===t&&ou(a,i))return a;for(const a of ap)if(a.condition===t&&ou(a,i))return a;const r={rt:[yp,xp,vp,bp,Bp,kp,zp,Ap,Lp,$p,Yp,Kp,Jp,jp,Qp,Na],spark:[nu],heat:[nu,Cp,Tp,lS,uS,Pp,Xp,qp,Zp],catalyst:[wp,Rp,Np,Dp,Na],uv:[Op]}[t]||[];for(const a of r)for(const c of Pa(a([...i.keys()],i))){const l=Vd(c,i);if(l)return l}return null}function tm(n,t=null){const e=In(n),i=new Set,o=a=>{for(const[c,l]of e){const h=ce(c);let d=0;for(const[u,f]of Object.entries(a))ce(u)===h&&(d=f);if(d<l)return!1}return!0};if(Array.isArray(t)&&t.length>0&&t.every(a=>a&&Array.isArray(a.atoms)))for(const[a,c]of Object.entries(Wp))for(const l of c){let h=!1;for(const d of Pa(l(t,e)))if(o(d.reactants)){h=!0;break}if(h){i.add(a);break}}for(const a of Hu)o(a.reactants)&&i.add(a.condition);for(const a of ap)o(a.reactants)&&i.add(a.condition);const r=[{fn:yp,cond:"rt"},{fn:xp,cond:"rt"},{fn:vp,cond:"rt"},{fn:bp,cond:"rt"},{fn:Bp,cond:"rt"},{fn:kp,cond:"rt"},{fn:zp,cond:"rt"},{fn:nu,cond:"spark"},{fn:Cp,cond:"heat"},{fn:Ap,cond:"rt"},{fn:Tp,cond:"heat"},{fn:wp,cond:"catalyst"},{fn:Rp,cond:"catalyst"},{fn:Op,cond:"uv"},{fn:Pp,cond:"heat"},{fn:Lp,cond:"rt"},{fn:Np,cond:"catalyst"},{fn:Dp,cond:"catalyst"},{fn:$p,cond:"rt"},{fn:Yp,cond:"rt"},{fn:Kp,cond:"rt"},{fn:Jp,cond:"rt"},{fn:jp,cond:"rt"},{fn:Zp,cond:"heat"},{fn:qp,cond:"heat"},{fn:Xp,cond:"heat"},{fn:Qp,cond:"rt"},{fn:Na,cond:"rt"},{fn:Na,cond:"catalyst"}];for(const{fn:a,cond:c}of r){let l=!1;for(const h of Pa(a([...e.keys()],e)))if(o(h.reactants)){l=!0;break}l&&i.add(c)}return i}function NS(n,t){const e=In(n),i=[];for(const o of Hu){if(o.condition!==t)continue;let s=!0;for(const[a,c]of e){const l=ce(a);let h=0;for(const[d,u]of Object.entries(o.reactants))ce(d)===l&&(h=u);if(h<c){s=!1;break}}if(!s)continue;const r=[];for(const[a,c]of Object.entries(o.reactants)){const l=ce(a);let h=0;for(const[u,f]of e)ce(u)===l&&(h=f);const d=c-h;d>0&&r.push(d===1?a:`${d}${a}`)}r.length&&i.push(r.join(" + "))}return i.length?[...new Set(i)].join(" or "):null}function Ks(n,t){return tt[n]}const em="mol3d.tutorial-seen",nm="mol3d.lang-selected";let se=null,Wn=0,Fn=null;const or=[{titleKey:"tut.welcome.title",bodyKey:"tut.welcome.body",icon:"🧪"},{titleKey:"tut.pool.title",bodyKey:"tut.pool.body",icon:"⚛️",highlight:'[data-tab="left"]',cardPos:"above"},{titleKey:"tut.bond.title",bodyKey:"tut.bond.body",icon:"🔗"},{titleKey:"tut.bondOrder.title",bodyKey:"tut.bondOrder.body",icon:"🔄"},{titleKey:"tut.info.title",bodyKey:"tut.info.body",icon:"📋",highlight:'[data-tab="tab-info"]',cardPos:"above"},{titleKey:"tut.reaction.title",bodyKey:"tut.reaction.body",icon:"⚗️"},{titleKey:"tut.dex.title",bodyKey:"tut.dex.body",icon:"📖",highlight:'[data-tab="tab-dex"]',cardPos:"above"},{titleKey:"tut.camera.title",bodyKey:"tut.camera.body",icon:"🎥"},{titleKey:"tut.ready.title",bodyKey:"tut.ready.body",icon:"🚀"}];function DS(){try{return localStorage.getItem(em)==="1"}catch{return!1}}function FS(){try{return localStorage.getItem(nm)!==null}catch{return!1}}function HS(){try{localStorage.setItem(em,"1")}catch{}}function US(){try{localStorage.setItem(nm,"1")}catch{}}function BS(n){const t=document.querySelector(n);if(!t)return null;const e=t.getBoundingClientRect();return{top:e.top,left:e.left,width:e.width,height:e.height}}function kS(n,t,e){const i=n.getBoundingClientRect(),o=24;let s,r;e==="right"?(s=t.top+(t.height-i.height)/2,r=t.left+t.width+o):e==="left"?(s=t.top+(t.height-i.height)/2,r=t.left-i.width-o):e==="above"?(s=t.top-i.height-o,r=t.left+(t.width-i.width)/2):(s=(window.innerHeight-i.height)/2,r=(window.innerWidth-i.width)/2),s=Math.max(16,Math.min(s,window.innerHeight-i.height-16)),r=Math.max(16,Math.min(r,window.innerWidth-i.width-16)),n.style.top=`${s}px`,n.style.left=`${r}px`}function zS(n,t,e){const i=n.getBoundingClientRect();let o,s,r,a;return t?(r=t.left+t.width/2,a=t.top+t.height/2,e==="above"?(o=i.left+i.width/2,s=i.top+i.height):e==="right"?(o=i.left,s=i.top+i.height/2):e==="left"?(o=i.left+i.width,s=i.top+i.height/2):(o=i.left+i.width/2,s=i.top+i.height),{cx:o,cy:s,sx:r,sy:a}):null}function VS(n,t,e){if(!Fn)return;const i=zS(n,t,e);if(!i){Fn.style.display="none";return}const{cx:o,cy:s,sx:r,sy:a}=i,c=40,l=Math.min(o,r)-c,h=Math.min(s,a)-c,d=Math.max(o,r)+c,u=Math.max(s,a)+c;Fn.style.display="block",Fn.style.left=`${l}px`,Fn.style.top=`${h}px`,Fn.style.width=`${d-l}px`,Fn.style.height=`${u-h}px`,Fn.setAttribute("viewBox",`0 0 ${d-l} ${u-h}`);const f=o-l,m=s-h,_=r-l,g=a-h;Fn.innerHTML=`
    <line x1="${f}" y1="${m}" x2="${_}" y2="${g}"
      stroke="var(--accent)" stroke-width="2" stroke-dasharray="6 4" opacity="0.6" />
    <circle cx="${_}" cy="${g}" r="4" fill="var(--accent)" opacity="0.8" />
  `}function GS(n){const t=se.querySelector(".tut-spotlight");if(!n){t.style.display="none";return}t.style.display="block",t.style.top=`${n.top}px`,t.style.left=`${n.left}px`,t.style.width=`${n.width}px`,t.style.height=`${n.height}px`,se.style.setProperty("--spotlight-top",`${n.top}px`),se.style.setProperty("--spotlight-left",`${n.left}px`),se.style.setProperty("--spotlight-width",`${n.width}px`),se.style.setProperty("--spotlight-height",`${n.height}px`)}function WS(){let n='<div class="tut-timeline">';for(let t=0;t<or.length;t++){const e=t<Wn?"done":t===Wn?"active":"";n+=`<div class="tut-tl-seg ${e}"><div class="tut-tl-fill"></div></div>`}return n+="</div>",n}function sc(){if(!se)return;const n=or[Wn],t=se.querySelector(".tut-content"),e=se.querySelector(".tut-card");t.innerHTML=`
    <div class="tut-step-header">
      <div class="tut-icon-badge">${n.icon}</div>
      <div class="tut-step-text">
        <div class="tut-step-label">Step ${Wn+1} of ${or.length}</div>
        <h2 class="tut-title">${Y(n.titleKey)}</h2>
      </div>
    </div>
    <p class="tut-body">${Y(n.bodyKey)}</p>
    ${WS()}
    <div class="tut-kbd-hint">
      <span>← →</span> navigate &nbsp;·&nbsp; <span>Esc</span> skip
    </div>
  `;const i=n.highlight?BS(n.highlight):null;GS(i),requestAnimationFrame(()=>{kS(e,i,n.cardPos),requestAnimationFrame(()=>{VS(e,i,n.cardPos)})});const o=se.querySelector(".tut-prev"),s=se.querySelector(".tut-next");o.disabled=Wn===0,s.textContent=Wn===or.length-1?Y("tut.finish"):Y("tut.next"),e.classList.remove("tut-card-enter"),e.offsetWidth,e.classList.add("tut-card-enter")}function Uu(){se&&(se.remove(),se=null,Fn=null,document.removeEventListener("keydown",im),window.removeEventListener("resize",om),HS())}function im(n){se&&(n.key==="Escape"&&Uu(),(n.key==="ArrowRight"||n.key==="Enter")&&sm(),n.key==="ArrowLeft"&&rm())}function om(){se&&sc()}function sm(){Wn<or.length-1?(Wn++,sc()):Uu()}function rm(){Wn>0&&(Wn--,sc())}function $S(){se||(se=document.createElement("div"),se.className="lang-overlay",se.innerHTML=`
    <div class="lang-card">
      <h1 class="lang-title">${Y("lang.select.title")}</h1>
      <p class="lang-subtitle">${Y("lang.select.subtitle")}</p>
      <div class="lang-options">
        <button class="lang-btn" data-lang="en">
          <span class="lang-flag">🇺🇸</span>
          <span class="lang-name">${Y("lang.en")}</span>
        </button>
        <button class="lang-btn" data-lang="vi">
          <span class="lang-flag">🇻🇳</span>
          <span class="lang-name">${Y("lang.vi")}</span>
        </button>
      </div>
    </div>
  `,document.body.appendChild(se),se.querySelectorAll(".lang-btn").forEach(n=>{n.addEventListener("click",()=>{const t=n.dataset.lang;np(t),US(),se.remove(),se=null,setTimeout(Bu,300)})}))}function Bu(){se||(se=document.createElement("div"),se.className="tut-overlay",se.innerHTML=`
    <div class="tut-spotlight"></div>
    <svg class="tut-callout" style="display:none;"></svg>
    <div class="tut-card">
      <button class="tut-skip" aria-label="Skip tutorial">${Y("tut.skip")}</button>
      <div class="tut-content"></div>
      <div class="tut-nav">
        <button class="tut-prev">${Y("tut.prev")}</button>
        <button class="tut-next">${Y("tut.next")}</button>
      </div>
    </div>
  `,document.body.appendChild(se),Fn=se.querySelector(".tut-callout"),se.querySelector(".tut-skip").addEventListener("click",Uu),se.querySelector(".tut-prev").addEventListener("click",rm),se.querySelector(".tut-next").addEventListener("click",sm),document.addEventListener("keydown",im),window.addEventListener("resize",om),Wn=0,sc())}function XS(){FS()?DS()||setTimeout(Bu,800):setTimeout($S,500)}const _a=602214076e15;let ku=n=>ut(n);function qS(n){ku=n}function su(n){const t=new Map;if(typeof n!="string"||!n)return t;let e=0;const i=()=>{const o=new Map,s=(r,a)=>o.set(r,(o.get(r)||0)+a);for(;e<n.length;){const r=n[e];if(r===")"||r==="]")return e++,o;if(r==="("||r==="["){e++;const h=i(),d=/^(\d+)/.exec(n.slice(e));let u=1;d&&(u=parseInt(d[1],10),e+=d[1].length);for(const[f,m]of h)s(f,m*u);continue}const a=/^[A-Z][a-z]?/.exec(n.slice(e));if(!a){e++;continue}e+=a[0].length;const c=/^(\d+)/.exec(n.slice(e));let l=1;c&&(l=parseInt(c[1],10),e+=c[1].length),s(a[0],l)}return o};for(const[o,s]of i())t.set(o,s);return t}function fs(n){let t=0;for(const[e,i]of su(n)){const o=ku(e);if(!o||typeof o.mass!="number")return null;t+=o.mass*i}return su(n).size?t:null}function jS(n){const t=su(n);if(!t.size)return null;const e=[];for(const[o,s]of t){const r=ku(o);if(!r||typeof r.mass!="number")return null;e.push({sym:o,name:r.name,z:r.z,count:s,atomicMass:r.mass,subtotal:r.mass*s})}const i=e.reduce((o,s)=>o+s.subtotal,0);for(const o of e)o.pct=i>0?o.subtotal/i*100:0;return e.sort((o,s)=>s.subtotal-o.subtotal),{rows:e,total:i}}function YS(n,t){const e=[];for(const[r,a]of Object.entries(n.reactants)){const c=t.get(r);if(typeof c!="number"||!isFinite(c)||c<0)return null;e.push({formula:r,coeff:a,moles:c,extent:c/a})}if(!e.length)return null;const i=e.reduce((r,a)=>a.extent<r.extent?a:r),o=[];for(const[r,a]of n.products){const c=i.extent*a,l=fs(r);o.push({formula:r,count:a,moles:c,mass:l===null?null:c*l})}const s=e.filter(r=>r!==i&&i.extent*r.coeff<r.moles).map(r=>({formula:r.formula,moles:r.moles-i.extent*r.coeff}));return{limiting:{formula:i.formula,extent:i.extent},reactants:e,products:o,leftovers:s}}function Fe(n,t=4){if(typeof n!="number"||!isFinite(n))return"—";if(n===0)return"0";const e=Math.abs(n);if(e>=1e6||e<1e-4)return n.toExponential(Math.max(t-1,0)).replace(/\.?0+e/,"e");const i=Math.max(0,t-1-Math.floor(Math.log10(e)));return n.toFixed(Math.min(i,6)).replace(/(\.\d*?)0+$/,"$1").replace(/\.$/,"")}const KS=8.314,ZS=298.15;function JS(n,t,e){return n*Math.exp(-t/(KS*e))}class am extends Error{constructor(t){super(`kinetics: ${t}`),this.name="KineticsError"}}function ye(n,t){if(!n)throw new am(t)}function cm(n,t,e){ye(typeof n=="string"&&n.trim().length>0,`${e}: expression must be a non-empty string`);let i=0;const o=n.length,s=p=>{throw new am(`${e}: ${p} (at position ${i})`)},r=()=>{for(;i<o&&/\s/.test(n[i]);)i++},a=()=>(r(),i<o?n[i]:""),c=p=>a()===p?(i++,!0):!1,l=p=>{c(p)||s(`expected "${p}"`)};function h(){r();const p=/^(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?/.exec(n.slice(i));p||s("expected a number"),i+=p[0].length;const y=parseFloat(p[0]);return()=>y}function d(){if(c("(")){const y=_();return l(")"),y}const p=a();if(p==="["){i++;const y=n.indexOf("]",i);y<0&&s('unclosed "["');const M=n.slice(i,y).trim();i=y+1;const x=t.get(M);return x==null&&s(`unknown species "${M}"`),T=>T[x]>0?T[x]:0}return p==="k"&&!/[\w.]/.test(n[i+1]??"")?(i++,(y,M)=>M):(/[A-Za-z_]/.test(p)&&s("unexpected identifier — species must be written as [Name]"),h())}function u(){if(c("-")){const p=u();return(y,M)=>-p(y,M)}return c("+")?u():f()}function f(){const p=d();if(c("^")){const y=f();return(M,x)=>Math.pow(p(M,x),y(M,x))}return p}function m(){let p=u();for(;;)if(c("*")){const y=u(),M=p;p=(x,T)=>M(x,T)*y(x,T)}else if(c("/")){const y=u(),M=p;p=(x,T)=>M(x,T)/y(x,T)}else return p}function _(){let p=m();for(;;)if(c("+")){const y=m(),M=p;p=(x,T)=>M(x,T)+y(x,T)}else if(c("-")){const y=m(),M=p;p=(x,T)=>M(x,T)-y(x,T)}else return p}const g=_();return r(),i<o&&s("unexpected trailing input"),g}function Zc(n,t,e){if(n==null)return[];ye(Array.isArray(n),`${t}: "${e}" must be an array`);const i=[];for(const o of n){if(typeof o=="string"){i.push({speciesId:o,stoichiometry:1});continue}ye(o&&typeof o=="object"&&!Array.isArray(o),`${t}: "${e}" entries must be { speciesId, stoichiometry } or strings`),ye(typeof o.speciesId=="string"&&o.speciesId.length>0,`${t}: "${e}" entry is missing speciesId`);const s=o.stoichiometry??1;ye(Number.isFinite(s)&&s>0,`${t}: "${e}" stoichiometry for "${o.speciesId}" must be a positive number`),i.push({speciesId:o.speciesId,stoichiometry:s})}return i}function lm(n){ye(n&&typeof n=="object"&&!Array.isArray(n),"network must be an object"),ye(Array.isArray(n.reactions)&&n.reactions.length>0,"network.reactions must be a non-empty array");const t=n.temperature??ZS;ye(Number.isFinite(t)&&t>0,"network.temperature must be a finite positive number (Kelvin)");const e=new Set;for(const[d,u]of n.reactions.entries()){ye(u&&typeof u=="object"&&!Array.isArray(u),`reactions[${d}] must be an object`);for(const f of["reactants","products"])for(const m of Zc(u[f],`reactions[${d}]`,f))e.add(m.speciesId)}let i;if(n.species!=null){ye(Array.isArray(n.species)&&n.species.every(u=>typeof u=="string"&&u.length>0),"network.species must be an array of non-empty strings"),i=[...n.species];const d=new Set(i);ye(d.size===i.length,"network.species contains duplicate ids");for(const u of e)ye(d.has(u),`species "${u}" is referenced by reactions but missing from network.species`)}else i=[...e];const o=i.length,s=new Map(i.map((d,u)=>[d,u])),r=new Float64Array(o);if(n.initialConcentrations!=null){ye(typeof n.initialConcentrations=="object"&&!Array.isArray(n.initialConcentrations),"initialConcentrations must be an object mapping speciesId -> number");for(const[d,u]of Object.entries(n.initialConcentrations))ye(s.has(d),`initialConcentrations: unknown species "${d}"`),ye(Number.isFinite(u)&&u>=0,`initialConcentrations["${d}"] must be a finite non-negative number`),r[s.get(d)]=u}const a=d=>u=>{const f=s.get(u);return f==null?void 0:d[f]},c=n.reactions.map((d,u)=>{const f=`reactions[${u}]`,m=Zc(d.reactants,f,"reactants"),_=Zc(d.products,f,"products");ye(m.length+_.length>0,`${f}: must have at least one reactant or product`);const g=d.temperature??t;ye(Number.isFinite(g)&&g>0,`${f}: temperature must be a finite positive number (Kelvin)`);let p;if(d.arrhenius!=null){ye(typeof d.arrhenius=="object"&&!Array.isArray(d.arrhenius),`${f}: arrhenius must be { A, Ea }`);const{A:T,Ea:v}=d.arrhenius;ye(Number.isFinite(T)&&T>=0,`${f}: arrhenius.A must be a finite non-negative number`),ye(Number.isFinite(v)&&v>=0,`${f}: arrhenius.Ea must be a finite non-negative number (J/mol)`),p=JS(T,v,g)}else p=d.rateConstant,ye(Number.isFinite(p)&&p>=0,`${f}: rateConstant must be a finite non-negative number`);let y;if(d.customRateExpr!=null){const T=typeof d.customRateExpr=="function"?(v,b,w)=>d.customRateExpr(v,{k:b,time:w,conc:a(v)}):cm(d.customRateExpr,s,`${f}.customRateExpr`);y=(v,b)=>{const w=T(v,p,b);return ye(Number.isFinite(w),`${f}: custom rate expression produced a non-finite value`),w}}else{const T=m.map(v=>[s.get(v.speciesId),v.stoichiometry]);y=v=>{if(p===0)return 0;let b=p;for(const[w,S]of T){const C=v[w]>0?v[w]:0;b*=S===1?C:Math.pow(C,S)}return ye(Number.isFinite(b),`${f}: mass-action rate overflowed`),b}}const M=new Map;for(const T of m){const v=s.get(T.speciesId);M.set(v,(M.get(v)??0)-T.stoichiometry)}for(const T of _){const v=s.get(T.speciesId);M.set(v,(M.get(v)??0)+T.stoichiometry)}const x=[...M.entries()].filter(([,T])=>T!==0);return{label:f,k:p,rate:y,net:x}}),l=(d,u)=>{const f=new Float64Array(o);for(const m of c){const _=m.rate(d,u);if(_!==0)for(const[g,p]of m.net)f[g]+=p*_}return f},h=Array.from({length:o},()=>new Array(c.length).fill(0));return c.forEach((d,u)=>{for(const[f,m]of d.net)h[f][u]=m}),{species:i,index:s,initial:r,reactions:c,derivative:l,stoichMatrix:h}}function um(n,t,e){const i=t.length,o=n(t),s=new Float64Array(i),r=new Float64Array(i),a=new Float64Array(i);for(let u=0;u<i;u++)s[u]=t[u]+e/2*o[u];const c=n(s);for(let u=0;u<i;u++)r[u]=t[u]+e/2*c[u];const l=n(r);for(let u=0;u<i;u++)a[u]=t[u]+e*l[u];const h=n(a),d=new Float64Array(i);for(let u=0;u<i;u++){const f=t[u]+e/6*(o[u]+2*c[u]+2*l[u]+h[u]);d[u]=f>0?f:0}return d}function QS(n){const{species:t,index:e,initial:i,reactions:o,derivative:s,stoichMatrix:r}=lm(n);let a=i.slice(),c=0;const l={species:t.slice(),get time(){return c},get C(){return a.slice()},stoichMatrix:()=>r.map(h=>h.slice()),concentration(h){const d=e.get(h);return ye(d!=null,`unknown species "${h}"`),a[d]},concentrations:()=>Object.fromEntries(t.map((h,d)=>[h,a[d]])),rates:()=>o.map(h=>h.rate(a,c)),dCdt(){const h=s(a,c);return Object.fromEntries(t.map((d,u)=>[d,h[u]]))},step(h){return ye(Number.isFinite(h)&&h>=0,"dt must be a finite non-negative number"),h>0&&(a=um(s,a,h),c+=h),l.concentrations()},advance(h,{maxStep:d=.01}={}){if(ye(Number.isFinite(h)&&h>=0,"T must be a finite non-negative number"),ye(Number.isFinite(d)&&d>0,"maxStep must be a finite positive number"),h===0)return{steps:0,time:c};const u=Math.max(1,Math.ceil(h/d)),f=h/u;for(let m=0;m<u;m++)l.step(f);return{steps:u,time:c}},reset(){a=i.slice(),c=0}};return l}function Co(n){return ut(n)||bM(n)||Wi.find(t=>t.sym===n)}qS(Co);const ru=Ql.filter(n=>n&&typeof n.formula=="string"&&n.formula.trim()?!0:(console.warn("challenges.js: skipping malformed entry",n),!1));aM();const j=new Map,gt=new Map,Yt=new Map,an=new Map;let ve=1,ue=null,Ao=null,ya=!0,es=!1;const Wi=[],Ei=new Set,sr=[];let Fi=new Map;const au=new Map;let ze=[],re=[];const Cs=new Map,Ci=new Map;let jt=null,zu=null,Vu=!1,Bi=null,hm="mouse";const qe=new Set,Da=new Set,Pe=[],Fa=new Set;let rc=!1;const Ha="mol3d.discoveries.v1",_i=document.getElementById("scene-wrap"),en=new A1({antialias:!0,powerPreference:"low-power"});en.setPixelRatio(Math.min(1.5,window.devicePixelRatio||1));en.setSize(_i.clientWidth,_i.clientHeight);_i.appendChild(en.domElement);const Me=new T0;Me.background=new Lt(856343);Me.fog=new Cu(856343,34,80);const He=new Tn(50,_i.clientWidth/_i.clientHeight,.1,200);He.position.set(0,4.2,10.5);Me.add(new U0(16777215,3358799,1.05));const dm=new Vf(16777215,1.5);dm.position.set(6,10,8);Me.add(dm);const fm=new Vf(8956671,.4);fm.position.set(-6,4,-6);Me.add(fm);let ho=new Gf(60,60,3159613,1909546);ho.position.y=-1.7;Me.add(ho);en.domElement.addEventListener("pointerdown",Vb);const dn=new w1(He,en.domElement);dn.enableDamping=!0;dn.dampingFactor=.08;dn.target.set(0,1.6,0);dn.minDistance=2.5;dn.maxDistance=45;dn.maxPolarAngle=Math.PI*.55;dn.addEventListener("change",cn);const ss=AM({camera:He,controls:dn});window.addEventListener("pointermove",Gb);window.addEventListener("pointerup",Zu);window.addEventListener("pointercancel",Zu);window.addEventListener("pointerleave",Zu);window.addEventListener("resize",()=>{He.aspect=_i.clientWidth/_i.clientHeight,He.updateProjectionMatrix(),en.setSize(_i.clientWidth,_i.clientHeight),cn()});let Ua=new Gi(1,16,12),_r=new Ja(1,1,1,10,1,!0);const Gu=320,Ba=1280,tb=new Si;new Lt(16777215);const eb=new Lt(10135475),nb=new Lt(15774761),qd=new Lt(5809919),ib=new Lt(4176208),ob=new Lt(16273737),sb=new Lt(15774761),rb=[0],ab=[-.12,.12],cb=[-.18,0,.18],lb=[-.22,-.07,.07,.22],ub=new Uf({color:16777215,shininess:70,specular:5592405}),hb=new Uf({color:16777215,shininess:20,specular:1579032}),db=new Bf({color:16777215}),fb=new Bf({color:16777215,transparent:!0,opacity:.9}),Un=new Za(Ua,ub,Gu),Bn=new Za(Ua,hb,Gu),bn=new Za(_r,db,Ba),En=new Za(_r,fb,Ba);for(const n of[Un,Bn,bn,En])n.frustumCulled=!1,n.instanceMatrix.setUsage(Jg),Me.add(n);const pm=[],mm=[],gm=[],_m=[];Un.userData.ids=pm;Bn.userData.ids=mm;bn.userData.ids=gm;En.userData.ids=_m;const Zs=new Map,xa=new Map,$s=new me,Cn=new P,ps=new P,ka=new P,ra=new P,go=new P,Xs=new P,Jc=new P,jd=new P,rr=new Si,ar=new P,ym=new P(0,1,0),Yd=new Lt,xm=new _o({color:4176208,transparent:!0,opacity:.55}),mi=new Qe(_r,xm);mi.visible=!1;Me.add(mi);const Qc=["auto","low","med","high"];let Er="auto",As=1;const vm=new CM,Mm=new EM;let Kd=0;const za=document.getElementById("fps-chip"),cu=document.getElementById("btn-quality");function pb(){return cp[Ro[As]]}function Sm(n){As=n;const t=cp[Ro[n]];en.setPixelRatio(Math.min(t.pixelRatio,window.devicePixelRatio||1));const e=new Gi(1,t.sphereSeg[0],t.sphereSeg[1]),i=new Ja(1,1,1,t.cylSeg,1,!0);for(const o of[Un,Bn])o.geometry=e;for(const o of[bn,En,mi])o.geometry=i;Ua.dispose(),_r.dispose(),Ua=e,_r=i,ac(),cn()}function Zd(){return Y(`quality.${Ro[As]}`)}function Va(){return Er==="auto"?`${Y("quality.autoShort")} (${Zd()})`:Zd()}function ac(){cu&&(cu.textContent=Y("btn.quality",{mode:Va()})),za&&(za.textContent=`-- fps · ${Va()}`)}function bm(n){Er=n,Mm.reset(),n!=="auto"&&Sm(Ro.indexOf(n)),ac()}function mb(n){if(n-Kd<500)return;Kd=n;const t=vm.fps;if(Er==="auto"){const e=Mm.update(t,As);e!==As&&(Sm(e),Vt(Y("status.autoAdjusted",{tier:Y(`quality.${Ro[e]}`),fps:Math.round(t)})))}za&&(za.textContent=`${Math.round(t)} fps · ${Va()}`)}const tl=new Map;function gb(n){if(tl.has(n))return tl.get(n);const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.font='bold 68px "Segoe UI", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle",e.lineWidth=10,e.lineJoin="round",e.strokeStyle="rgba(8,12,18,0.9)",e.strokeText(n,64,68),e.fillStyle="#f4f8ff",e.fillText(n,64,68);const i=new Df(t);return tl.set(n,i),i}const el=new Map;function _b(n){if(el.has(n))return el.get(n);const t=document.createElement("canvas");t.width=128,t.height=64;const e=t.getContext("2d");e.font='bold 46px "Segoe UI", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle";const i=n>0?`${n}+`:`${-n}−`;e.lineWidth=8,e.lineJoin="round",e.strokeStyle="rgba(8,12,18,0.95)",e.strokeText(i,64,34),e.fillStyle=n>0?"#7ee787":"#ff9d96",e.fillText(i,64,34);const o=new Df(t);return el.set(n,o),o}function yb(){for(const[n,t]of j)if(!Zs.has(n)){const i=.42+bi(t.el)*.55,o=new Uh(new jl({map:gb(t.el.sym),transparent:!0,depthWrite:!1}));o.scale.set(i,i,1),Zs.set(n,o),Me.add(o);const s=new Uh(new jl({transparent:!0,depthWrite:!1}));s.scale.set(.62,.31,1),s.visible=!1,xa.set(n,s),Me.add(s)}for(const[n,t]of Zs)j.has(n)||(Me.remove(t),t.material.dispose(),Zs.delete(n));for(const[n,t]of xa)j.has(n)||(Me.remove(t),t.material.dispose(),xa.delete(n))}const xb=n=>1+2.70158*Math.pow(n-1,3)+1.70158*Math.pow(n-1,2);function vb(n,t){const e=Cs.get(n);if(e===void 0)return 1;const i=(t-e)/380;return i>=1?(Cs.delete(n),1):Math.max(.001,xb(Math.max(0,i)))}function Mb(n,t){const e=j.get(n);t.set(e.el.color),Da.has(n)&&t.lerp(sb,.5),n===zu?t.lerp(Vu?ib:ob,.55):n===ue?t.lerp(qd,.45):n===Ao&&t.lerp(qd,.18)}function cc(){const n=performance.now();let t=0,e=0;for(const[s,r]of j){const a=Zf(r.el.cat),c=a?Un:Bn,l=a?t++:e++;if(l>=Gu)continue;const h=bi(r.el)*vb(s,n);Cn.set(r.pos.x,r.pos.y,r.pos.z),ra.setScalar(h),$s.compose(Cn,tb,ra),c.setMatrixAt(l,$s),Mb(s,Yd),c.setColorAt(l,Yd),(a?pm:mm)[l]=s}Un.count=t,Bn.count=e,Un.instanceMatrix.needsUpdate=!0,Bn.instanceMatrix.needsUpdate=!0,Un.instanceColor&&(Un.instanceColor.needsUpdate=!0),Bn.instanceColor&&(Bn.instanceColor.needsUpdate=!0),Un.boundingSphere=null,Bn.boundingSphere=null,t>0&&Un.computeBoundingSphere(),e>0&&Bn.computeBoundingSphere();let i=0,o=0;for(const s of gt.values()){const r=j.get(s.a),a=j.get(s.b);if(!r||!a)continue;ps.set(r.pos.x,r.pos.y,r.pos.z),ka.set(a.pos.x,a.pos.y,a.pos.z),go.subVectors(ka,ps);const c=go.length()||1e-4;Xs.copy(go).divideScalar(c),Jc.set(0,1,0),Math.abs(Xs.y)>.9&&Jc.set(1,0,0),jd.crossVectors(Xs,Jc).normalize();const l=s.order===1?rb:s.order===2?ab:s.order===3?cb:lb,h=s.ionic?.06:.075;rr.setFromUnitVectors(ym,Xs);for(let d=0;d<s.order;d++)if(Cn.copy(ps).addScaledVector(Xs,c/2).addScaledVector(jd,l[d]),ra.set(h,c,h),$s.compose(Cn,rr,ra),s.ionic){if(o>=Ba)break;En.setMatrixAt(o,$s),En.setColorAt(o,nb),_m[o]=s.id,o++}else{if(i>=Ba)break;bn.setMatrixAt(i,$s),bn.setColorAt(i,eb),gm[i]=s.id,i++}}bn.count=i,En.count=o,bn.instanceMatrix.needsUpdate=!0,En.instanceMatrix.needsUpdate=!0,bn.instanceColor&&(bn.instanceColor.needsUpdate=!0),En.instanceColor&&(En.instanceColor.needsUpdate=!0),bn.boundingSphere=null,En.boundingSphere=null,i>0&&bn.computeBoundingSphere(),o>0&&En.computeBoundingSphere()}function Em(){He.getWorldDirection(ar);for(const[n,t]of Zs){const e=j.get(n);if(!e)continue;const i=bi(e.el);t.position.set(e.pos.x,e.pos.y,e.pos.z).addScaledVector(ar,-(i+.1))}for(const[n,t]of xa){const e=j.get(n);if(!e)continue;const i=au.get(n),o=ya&&i!==void 0;if(t.visible=o,!o)continue;t.userData.fc!==i&&(t.material.map=_b(i),t.material.needsUpdate=!0,t.userData.fc=i);const s=bi(e.el);t.position.set(e.pos.x,e.pos.y,e.pos.z).addScaledVector(ar,-(s+.48))}}function be(n){return[...n.atoms].sort((t,e)=>t-e).join(",")}function Qt(n=new Set){re=nc(j,gt);const t=new Set(re.map(be));for(const i of[...Yt.keys()])t.has(i)||Yt.delete(i);for(const i of[...an.keys()])t.has(i)||an.delete(i);for(const i of[...qe])t.has(i)||qe.delete(i);ju(),Ar(),ze=re.map(i=>Z1(j,gt,i,Yt.has(be(i))?Yt.get(be(i)):null));for(let i=0;i<re.length;i++){const o=an.get(be(re[i]));o&&(ze[i].displayFormula=o)}const e=iM(j,gt,re,ze,n);Fi=new Map;for(const[i,o]of e)Fi.set(i,{x:o.x,y:o.y,z:o.z});for(const i of j.keys())if(!Fi.has(i)){const o=j.get(i).pos;Fi.set(i,{x:o.x,y:o.y,z:o.z})}if(jt){const i=j.get(jt.id).pos;Fi.set(jt.id,{x:i.x,y:i.y,z:i.z})}for(const i of[...Ci.keys()])t.has(i)||Ci.delete(i);return Sb(),bb(),Qu(),nh(),rE(),ih(),yb(),document.getElementById("hint").style.display=j.size?"none":"flex",cn(),re}function Sb(){au.clear();for(const n of ze)if(n.feasible)for(const[t,e]of n.per)e.fc!==0&&au.set(t,e.fc)}function Ga(n,t){return`${n}|${t}`}function Wu(n,t){if(!t.feasible)return null;try{return sp(n.atoms.map(e=>j.get(e)),n.bonds,t.formula,t.charge,t.per)||null}catch{return null}}function $u(n,t){const e=new Map(n.atoms.map((s,r)=>[s,r])),i=be(n);return{tpl:{atoms:n.atoms.map(s=>j.get(s).el.sym),bonds:n.bonds.map(s=>[e.get(s.a),e.get(s.b),s.order,s.ionic?1:0]),charge:Yt.get(i)||0},cKey:i}}function bb(){for(let n=0;n<re.length;n++){const t=re[n],e=ze[n];if(!e||!e.feasible||!e.formula||typeof e.formula!="string"||t.bonds.length===0||t.atoms.length<2)continue;const i=Ga(e.formula,e.charge),{tpl:o,cKey:s}=$u(t);if(Fa.has(i)){const l=Pe.find(h=>Ga(h.formula,h.charge??0)===i);if(l&&JSON.stringify(l.tpl)!==JSON.stringify(o)){l.tpl=o;const h=an.get(s);h?l.displayFormula=h:delete l.displayFormula,l.saved&&Cm()}continue}Fa.add(i);const r=Wu(t,e),a={formula:e.formula,charge:e.charge,name:r,t:Date.now(),saved:!1,tpl:o},c=an.get(s);c&&(a.displayFormula=c),Pe.push(a),rc=!0,Is(Y("toast.newDisc",{f:je(e.formula)+ei("",e.charge),name:r?` — ${r}`:""}))}Os()}function Eb(){try{const n=JSON.parse(localStorage.getItem(Ha)||"[]");for(const t of n)!t||!t.formula||(t.saved=!0,Pe.push(t),Fa.add(Ga(t.formula,t.charge??0)))}catch{}}function lu(){if(Pe.length)try{localStorage.setItem(Ha,JSON.stringify(Pe));for(const n of Pe)n.saved=!0;rc=!1,Os(),Is(Y("toast.saved",{n:Pe.length,s:Pe.length>1?"s":""}))}catch{Vt(Y("status.saveFail"),"err")}}function Cm(){try{const n=Pe.filter(t=>t.saved);n.length?localStorage.setItem(Ha,JSON.stringify(n)):localStorage.removeItem(Ha)}catch{}}function Cb(n){const t=Pe.indexOf(n);t!==-1&&(Pe.splice(t,1),Fa.delete(Ga(n.formula,n.charge??0)),Cm(),rc=Pe.some(e=>!e.saved),Os(),Is(Y("toast.discDeleted",{f:je(n.formula)+ei("",n.charge??0)})))}function Ab(){const n=re.map(i=>{let o=0,s=0,r=0;for(const c of i.atoms){const l=j.get(c).pos;o+=l.x,s+=l.y,r+=l.z}const a=i.atoms.length;return{x:o/a,y:s/a,z:r/a}});let t={x:0,y:1.8,z:0},e=-1;for(let i=0;i<10;i++){const o=Math.random()*Math.PI*2,s=i===0?0:2.2+i*.9+Math.random(),r={x:Math.cos(o)*s,y:1.2+Math.random()*1.4,z:Math.sin(o)*s};let a=99;for(const c of n)a=Math.min(a,Math.hypot(c.x-r.x,c.y-r.y,c.z-r.z));a>e&&(e=a,t=r)}return t}function Tb(n){const t=n.tpl||Ks(n.formula)||(Iu(n.formula)[0]||{}).tpl;if(!t||!t.atoms||!t.atoms.length){Vt(Y("status.spawnFail",{f:je(n.formula)+ei("",n.charge??0)}),"err");return}const e=Ab();ii({type:"snapshot",atoms:[...j.values()].map(Cr),bonds:[...gt.values()].map(s=>({...s})),overrides:[...Yt],iso:[...an],nextId:ve});const{ids:i}=Wm(t,e.x,e.y,e.z);if(!i.length){Vt(Y("status.spawnFail",{f:je(n.formula)+ei("",n.charge??0)}),"err");return}const o=be({atoms:i});t.charge&&Yt.set(o,t.charge),n.displayFormula&&an.set(o,n.displayFormula),Qt(new Set(i)),Is(Y("toast.spawned",{f:je(n.formula)+ei("",n.charge??0)}))}function Os(){const n=document.getElementById("disc-list"),t=document.getElementById("disc-count"),e=document.getElementById("btn-save-disc");if(n){if(t.textContent=Pe.length?String(Pe.length):"",!Pe.length){n.textContent=Y("dex.discEmpty"),e.disabled=!0;return}n.textContent="";for(const i of Pe){const o=document.createElement("div");o.className="disc-row";const s=document.createElement("span");s.className="d-f",s.textContent=je(i.formula)+ei("",i.charge??0);const r=document.createElement("span");if(r.className="d-n",r.textContent=i.name||Y("dex.unknown"),r.title=i.name||"",o.append(s,r),!i.saved){const l=document.createElement("span");l.className="d-dot",l.title=Y("dex.notSaved"),o.appendChild(l)}const a=document.createElement("button");a.className="d-btn d-spawn",a.textContent=Y("dex.spawn"),a.title=Y("dex.spawnTitle"),a.addEventListener("click",l=>{l.stopPropagation(),Tb(i)});const c=document.createElement("button");c.className="d-btn d-del",c.textContent="✕",c.title=Y("dex.deleteTitle"),c.setAttribute("aria-label",`${Y("dex.deleteTitle")} ${i.name||i.formula}`),c.addEventListener("click",l=>{l.stopPropagation(),Cb(i)}),o.append(a,c),n.appendChild(o)}e.disabled=!rc}}const Cr=n=>({id:n.id,el:n.el,pos:{x:n.pos.x,y:n.pos.y,z:n.pos.z}});function ii(n){sr.push(n),sr.length>200&&sr.shift(),sh()}function Am(n,t){const e=ec(j,gt,n,t);if(!e.ok&&!window.__mol3d?._godMode)return Vt(Sr(e.reason),"err"),!1;const i=yo(j,gt,n),o=yo(j,gt,t),s=i!==o,r=s?be(i):null,a=s?be(o):null,c=s?Yt.get(r):void 0,l=s?Yt.get(a):void 0;s&&(Yt.delete(r),Yt.delete(a));const h=ve++;gt.set(h,{id:h,a:n,b:t,order:1,ionic:e.type==="ionic"}),s&&c!==void 0!=(l!==void 0)&&Yt.set(be(yo(j,gt,n)),c!==void 0?c:l),ii({type:"bond",bondId:h}),Qt(),ih(!0);const d=j.get(n).el.sym,u=j.get(t).el.sym;return Vt(e.type==="ionic"?Y("status.ionicBond",{a:d,b:u}):Y("status.covBond",{a:d,b:u}),"ok"),!0}function Tm(n,t=!0){const e=gt.get(n);if(!e)return;const i=yo(j,gt,e.a),o=be(i),s=Yt.get(o);if(gt.delete(n),s!==void 0){const r=nc(j,gt).filter(c=>c.atoms.some(l=>i.atoms.includes(l))&&c.bonds.length>0),a=r.find(c=>c.atoms.includes(e.a))||r.find(c=>c.atoms.includes(e.b))||r[0];a&&Yt.set(be(a),s)}t&&ii({type:"delBond",snap:{...e}}),Qt()}function Xu(n,t=!0){const e=j.get(n);if(!e)return;const i=yo(j,gt,n),o=be(i),s=Yt.get(o),r=Mi(j,gt,n).map(a=>({...a}));for(const a of r)gt.delete(a.id);if(j.delete(n),ue===n&&(ue=null,rh()),Ao===n&&(Ao=null),s!==void 0){const a=nc(j,gt).filter(c=>c.atoms.some(l=>i.atoms.includes(l))&&c.bonds.length>0).sort((c,l)=>l.atoms.length-c.atoms.length);a[0]&&Yt.set(be(a[0]),s)}t&&ii({type:"delAtom",atom:Cr(e),bonds:r}),Qt()}function wm(n,t){const e=gt.get(n);e&&(ii({type:"order",bondId:n,prev:e.order}),e.order=t,Qt(),Vt(e.ionic?Y("status.orderIonic",{n:t}):Y("status.orderCov",{n:t}),"ok"))}const nl=new Map;function wb(n){const t=gt.get(n);if(!t)return;let e=nl.get(n)||1,i=t.order+e,o=0;const s=8;for(;o<s;){if(i>4){e=-1,i=3;continue}if(i<1){Tm(n),nl.delete(n);return}const r={...t,order:i};if(Ru(j,gt,r).ok||window.__mol3d?._godMode){nl.set(n,e),wm(n,i);return}i+=e,o++}Vt(Sr({key:"chem.noValidBondOrder"}),"err")}function Rm(n){const t=gt.get(n);if(!t)return;const e=Ru(j,gt,t);if(!e.ok&&!window.__mol3d?._godMode){Vt(Sr(e.reason),"err");return}wm(n,t.order+1)}function fo(n){const t=typeof n=="string"?Co(n):n;if(!t)return;let e=null;for(let o=0;o<60;o++){const s=Math.random()*Math.PI*2,r=1.2+Math.random()*3.4,a={x:Math.cos(s)*r,y:1.6+(Math.random()-.5)*2.6,z:Math.sin(s)*r};let c=!0;for(const[,l]of j)if(Math.hypot(l.pos.x-a.x,l.pos.y-a.y,l.pos.z-a.z)<bi(l.el)+bi(t)+.5){c=!1;break}if(c){e=a;break}}e||(e={x:ve%7*1.5-4.5,y:6,z:0});const i=ve++;return j.set(i,{id:i,el:t,pos:e}),Cs.set(i,performance.now()),ii({type:"add",id:i}),Ps(i),Qt(),Vt(Y("status.placed",{name:kn(t)}),"info"),i}function Om(){if(ue===null||!j.has(ue)){Vt(Y("status.noSelection"),"err");return}const n=re.find(s=>s.atoms.includes(ue));if(!n)return;const t=new Map,e=[];n.atoms.reduce((s,r)=>s+j.get(r).pos.x,0)/n.atoms.length,n.atoms.reduce((s,r)=>s+j.get(r).pos.y,0)/n.atoms.length,n.atoms.reduce((s,r)=>s+j.get(r).pos.z,0)/n.atoms.length;for(const s of n.atoms){const r=j.get(s),a=ve++;t.set(s,a),e.push({id:a,el:r.el,pos:{x:r.pos.x+2.5,y:r.pos.y,z:r.pos.z}})}ii({type:"duplicate",originalIds:[...n.atoms],newIds:[...t.values()]});for(const s of e)j.set(s.id,s),Cs.set(s.id,performance.now());for(const s of n.bonds){const r=t.get(s.a),a=t.get(s.b);r!==void 0&&a!==void 0&&(gt.set(ve,{id:ve,a:r,b:a,order:s.order,ionic:s.ionic}),ve++)}const i=be(n),o=[...t.values()].sort((s,r)=>s-r).join(",");Yt.has(i)&&Yt.set(o,Yt.get(i)),Ps([...t.values()][0]),Qt(),Vt(Y("status.duplicated"),"info")}function Js(){if(!(!j.size&&!gt.size&&!Yt.size)){ii({type:"clear",atoms:[...j.values()].map(Cr),bonds:[...gt.values()].map(n=>({...n})),overrides:[...Yt],nextId:ve});for(const n of[...gt.keys()])gt.delete(n);for(const n of[...j.keys()])j.delete(n);j.clear(),gt.clear(),Yt.clear(),an.clear(),Ci.clear(),ue=null,Ao=null,$n(),Qt(),Vt(Y("status.cleared"),"info")}}function qu(){const n=sr.pop();if(sh(),!n){Vt(Y("status.nothingUndo"));return}switch(n.type){case"add":Xu(n.id,!1);break;case"bond":Tm(n.bondId,!1);break;case"delBond":{const t=n.snap;gt.set(t.id,{...t}),Qt();break}case"order":{const t=gt.get(n.bondId);t&&(t.order=n.prev),Qt();break}case"delAtom":{const t=n.atom;j.set(t.id,t);for(const e of n.bonds)gt.set(e.id,{...e});Qt();break}case"clear":{for(const t of n.atoms)j.set(t.id,t);for(const t of n.bonds)gt.set(t.id,{...t});for(const[t,e]of n.overrides)Yt.set(t,e);ve=Math.max(ve,n.nextId),Qt();break}case"duplicate":{for(const t of n.newIds)j.delete(t),Cs.delete(t);for(const t of[...gt.values()])(n.newIds.includes(t.a)||n.newIds.includes(t.b))&&gt.delete(t.id);Qt();break}case"snapshot":{j.clear(),gt.clear(),Yt.clear(),an.clear(),Ci.clear();for(const t of n.atoms)j.set(t.id,t);for(const t of n.bonds)gt.set(t.id,{...t});for(const[t,e]of n.overrides)Yt.set(t,e);for(const[t,e]of n.iso||[])an.set(t,e);ve=Math.max(ve,n.nextId),ue=null,Ao=null,$n(),Qt();break}}Vt(Y("status.undone"))}const Jo=.4,Rb=10.5,Ob=-.2,Ib=4.6;function Wa(){return new P(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize()}function Im(n){if(!pb().drift||jt||re.length===0)return!1;let t=!1;for(const e of re){const i=be(e);let o=Ci.get(i);o||(o={v:Wa().multiplyScalar(Jo*(.7+Math.random()*.6)),axis:Wa(),rate:.08+Math.random()*.18},Ci.set(i,o));const s=o.v.length()||1e-4;s>Jo*1.001?o.v.multiplyScalar(Math.max(Jo,s-n*2.2)/s):s<Jo*.999&&o.v.setLength(Math.min(Jo,s+n*.4));const r=new P;for(const c of e.atoms){const l=j.get(c).pos;r.x+=l.x,r.y+=l.y,r.z+=l.z}r.divideScalar(e.atoms.length),(Math.hypot(r.x,r.z)>Rb||r.y<Ob||r.y>Ib)&&(ar.set(-r.x,1.9-r.y,-r.z).normalize(),o.v.lerp(ar,Math.min(1,n*1.6)).setLength(Jo)),rr.setFromAxisAngle(o.axis,o.rate*n);for(const c of e.atoms){const l=j.get(c);Cn.set(l.pos.x,l.pos.y,l.pos.z).sub(r).applyQuaternion(rr).add(r).addScaledVector(o.v,n),l.pos.x=Cn.x,l.pos.y=Cn.y,l.pos.z=Cn.z;const h=Fi.get(c);h&&(Cn.set(h.x,h.y,h.z).sub(r).applyQuaternion(rr).add(r).addScaledVector(o.v,n),h.x=Cn.x,h.y=Cn.y,h.z=Cn.z)}t=!0}return t}const il=document.getElementById("rxn-panel"),Pb=document.getElementById("rxn-count"),Jd=document.getElementById("rxn-conds"),yi=n=>Y(`cond.${n}`);function ju(){Da.clear();for(const n of re)if(qe.has(be(n)))for(const t of n.atoms)Da.add(t)}function $n(){qe.size&&(qe.clear(),Da.clear(),Ar(),cn())}function Ar(){if(il){if(Qd(),qe.size===0){il.style.display="none";return}il.style.display="flex",Pb.textContent=Y("rxn.count",{n:qe.size,s:qe.size>1?"s":""}),Qd()}}const Qo=document.getElementById("rxn-stoich");function Qd(){if(!Qo||(Qo.innerHTML="",Qo.style.display="none",qe.size===0))return;const n=Yu(),t=new Set,e=[];for(const o of Pu){const s=oc(n,o.key,yr());if(!s||s.effect)continue;const r=`${s.equation}|${s.condition}`;t.has(r)||(t.add(r),e.push(s))}if(!e.length)return;Qo.style.display="flex";const i=document.createElement("div");i.className="rxn-stoich-title",i.textContent=Y("stoich.rxnTitle"),Qo.appendChild(i);for(const o of e)Qo.appendChild(Lb(o))}function Lb(n){const t=document.createElement("div");t.className="rxn-stoich-block";const e=document.createElement("div");e.className="rxn-stoich-eq",e.innerHTML=`${Tr(n.equation)} <span class="cond-chip">${yi(n.condition)}</span>`,t.appendChild(e);const i=Object.entries(n.reactants),o=[];for(const[d,u]of i){const f=document.createElement("div");f.className="rxn-stoich-row";const m=document.createElement("span");m.className="rxn-stoich-f",m.innerHTML=`${je(d)}${u>1?` <span class="muted">&times;${u}</span>`:""}`;const _=document.createElement("input");_.type="number",_.min="0",_.step="any",_.placeholder="g",_.setAttribute("aria-label",`${Y("stoich.massLbl")} ${d}`);const g=document.createElement("span");g.className="rxn-stoich-mol",f.append(m,_,g),t.appendChild(f),o.push({f:d,coeff:u,inp:_,molSpan:g})}const s=document.createElement("div");s.className="rxn-stoich-out",t.appendChild(s);const r=document.createElement("div");r.className="rxn-stoich-row";const a=document.createElement("span");a.className="rxn-stoich-f",a.textContent=Y("stoich.yieldLbl");const c=document.createElement("input");c.type="number",c.min="0",c.max="100",c.step="any",c.value="100",r.append(a,c),t.appendChild(r);const l=d=>{const u=parseFloat(d.value);return isFinite(u)&&u>=0?u:null},h=()=>{const d=new Map;let u=!1,f=!0;for(const p of o){const y=l(p.inp),M=fs(p.f);y===null||M===null?(p.molSpan.textContent="",f=!1,y!==null&&(u=!0)):(p.molSpan.textContent=`${Fe(y/M)} mol`,d.set(p.f,y/M),u=!0)}if(!u){s.textContent="";return}const m=f?YS(n,d):null;if(!m){s.textContent=Y("stoich.enterAll");return}const _=l(c),g=[];g.push(`${Y("stoich.limiting")}: <b>${je(m.limiting.formula)}</b> — ${Fe(m.limiting.extent)} mol`);for(const p of m.leftovers)g.push(`${je(p.formula)}: +${Fe(p.moles)} mol ${Y("stoich.left")}`);for(const p of m.products){const y=p.mass!==null?` · ${Fe(p.mass)} g`:"";if(g.push(`&rarr; ${je(p.formula)}: ${Fe(p.moles)} mol${y}`),_!==null&&_!==100){const M=p.mass!==null?` · ${Fe(p.mass*_/100)} g`:"";g.push(`&nbsp;&nbsp;${Y("stoich.actual")} (${Fe(_)}%): ${Fe(p.moles*_/100)} mol${M}`)}}s.innerHTML=g.map(p=>`<div>${p}</div>`).join("")};for(const d of o)d.inp.addEventListener("input",h);return c.addEventListener("input",h),t}function Yu(){const n=[];for(let t=0;t<re.length;t++)if(qe.has(be(re[t]))){const e=ze[t];n.push(e?e.displayFormula||e.formula:"")}return n}function yr(){const n=[];for(let t=0;t<re.length;t++)!qe.has(be(re[t]))||!ze[t]||n.push($u(re[t]).tpl);return n}function Tr(n){const t="₀₁₂₃₄₅₆₇₈₉";return n.replace(/->/g,"→").replace(new RegExp("(?<=[A-Za-z)\\]])\\d+","g"),e=>[...e].map(i=>t[+i]).join(""))}function Nb(){if(Jd){for(const n of Pu){const t=document.createElement("button");t.textContent=yi(n.key),t.dataset.cond=n.key,t.addEventListener("click",()=>Db(n.key)),Jd.appendChild(t)}document.getElementById("rxn-cancel").addEventListener("click",()=>{$n(),Vt(Y("status.reactionCancelled"))})}}function Db(n){const t=Yu(),e=oc(t,n,yr());if(e){Lm(e);return}const i=tm(t,yr());if(!i.size){Vt(Y("status.noReaction"),"err");return}if(i.has(n)){const o=NS(t,n);Vt(o?Y("status.notEnough",{more:Tr(o),cond:yi(n).toLowerCase()}):Y("status.nothingHappens",{cond:yi(n)}),"err");return}Vt(Y("status.nothingHappensTry",{cond:yi(n),valid:[...i].map(o=>yi(o)).join(", ")}),"err")}let ol=null;function Pm(n){const t=document.getElementById("rxn-overlay"),e=t.querySelector(".rxn-condition"),i=t.querySelector(".rxn-equation");e.textContent=yi(n.condition),i.innerHTML=Tr(n.equation),t.classList.add("show"),t.setAttribute("aria-hidden","false"),ol&&clearTimeout(ol),ol=setTimeout(()=>{t.classList.remove("show"),t.setAttribute("aria-hidden","true")},3e3)}function Lm(n){const t=re.filter(u=>qe.has(be(u)));if(!t.length)return;const e=t.map(u=>{const f=ze[re.indexOf(u)];return f?f.displayFormula||f.formula:""}),i=t.map(u=>$u(u,ze[re.indexOf(u)]).tpl);if(!oc(e,n.condition,i)){Vt(Y("status.sceneChanged"),"err"),$n();return}const o=[];for(const u of t)for(const f of u.atoms)o.push(f);const s=new Set(o),r=new P;for(const u of o){const f=j.get(u).pos;r.x+=f.x,r.y+=f.y,r.z+=f.z}r.divideScalar(o.length),ii({type:"snapshot",atoms:[...j.values()].map(Cr),bonds:[...gt.values()].map(u=>({...u})),overrides:[...Yt],iso:[...an],nextId:ve});for(const u of[...gt.values()])(s.has(u.a)||s.has(u.b))&&gt.delete(u.id);if(n.effect){Fb(n,o,r);return}const a=[];for(const[u,f]of n.products)for(let m=0;m<f;m++)a.push(u);for(const u of a)if(!Ks(u)){Vt(Y("status.reactionFailed",{product:u}),"err"),$n();return}const c=new Map;for(const u of o){const f=j.get(u).el.sym;c.has(f)||c.set(f,[]),c.get(f).push(u)}let l=0;for(let u=1;u<a.length;u++)Ks(a[u]).atoms.length>Ks(a[l]).atoms.length&&(l=u);const h=Math.PI*(3-Math.sqrt(5)),d=[];for(let u=0;u<a.length;u++){const f=Ks(a[u]);let m=r;if(u!==l){const y=Math.random()*Math.PI*2,M=3.2+Math.random()*1.8+u*.9;m=new P(r.x+Math.cos(y)*M,Math.max(.8,Math.min(4.2,r.y+(Math.random()-.5)*1.6)),r.z+Math.sin(y)*M)}const _=[],g=f.atoms.length;for(let y=0;y<g;y++){const M=f.atoms[y];let x=c.get(M)?.pop();if(x===void 0){const w=Co(M);if(!w){Vt(Y("status.reactionFailed",{product:a[u]}),"err"),$n();return}x=ve++,j.set(x,{id:x,el:w,pos:{x:m.x,y:m.y,z:m.z}})}const T=g===1?0:1-2*y/(g-1),v=Math.sqrt(Math.max(0,1-T*T)),b=h*y;j.get(x).pos={x:m.x+Math.cos(b)*v*.85,y:Math.max(-.4,Math.min(5.2,m.y+T*.85)),z:m.z+Math.sin(b)*v*.85},_.push(x)}for(const[y,M,x,T]of f.bonds)gt.set(ve,{id:ve,a:_[y],b:_[M],order:x,ionic:!!T}),ve++;const p=[..._].sort((y,M)=>y-M).join(",");f.charge&&Yt.set(p,f.charge),d.push({key:p,center:m,i:u})}for(const[,u]of c)for(const f of u)j.delete(f);$n(),ue=null,Qt();for(const{key:u,center:f,i:m}of d){if(m===l){Ci.delete(u);continue}const _=new P(f.x-r.x,f.y-r.y,f.z-r.z).normalize();Ci.set(u,{v:_.multiplyScalar(2.6+Math.random()*1.4).add(new P(0,.7,0)),axis:Wa(),rate:.1+Math.random()*.2})}Vt(Y("status.reactionDone",{cond:yi(n.condition),eq:Tr(n.equation)}),"ok"),Pm(n)}const xo=[];function Fb(n,t,e){for(const a of t)j.delete(a);$n(),ue=null,Qt();const o={annihilate:16777215,explode:16729088,merge:16766720,quantum:61695,decay:65344,plasma:13387007}[n.effect]||16777215,s=n.effect==="explode"?60:n.effect==="plasma"?50:30;for(let a=0;a<s;a++){const c=new Gi(.08+Math.random()*.12,6,4),l=new _o({color:o,transparent:!0,opacity:1}),h=new Qe(c,l);h.position.copy(e);const d=Wa(),u=1.5+Math.random()*4;Me.add(h),xo.push({mesh:h,geo:c,mat:l,v:d.multiplyScalar(u),life:1,decay:.4+Math.random()*.8})}if(n.effect==="explode"&&Bb(.4,600),n.effect==="annihilate"&&tf(16777215,500),n.effect==="plasma"&&tf(8913151,300),n.effect==="merge"){const a=new Gi(.5,16,12),c=new _o({color:16766720,transparent:!0,opacity:.9}),l=new Qe(a,c);l.position.copy(e),Me.add(l),xo.push({mesh:l,geo:a,mat:c,v:new P(0,0,0),life:1,decay:.3,grow:!0})}if(n.effect==="quantum")for(let a=0;a<8;a++){const c=new Gi(.15,8,6),l=new _o({color:61695,transparent:!0,opacity:.7}),h=new Qe(c,l),d=Math.random()*Math.PI*2,u=.5+Math.random()*1.5;h.position.set(e.x+Math.cos(d)*u,e.y+(Math.random()-.5)*2,e.z+Math.sin(d)*u),Me.add(h),xo.push({mesh:h,geo:c,mat:l,v:new P(0,0,0),life:1,decay:.5+Math.random()*.5,flicker:!0})}const r={annihilate:"ANNIHILATION!",explode:"BOOM!",merge:"ULTIMATE ALLOY!",quantum:"SUPERPOSITION!",decay:"DECAY!",plasma:"PLASMA STORM!"};Is(r[n.effect]||n.effect),Vt(Y("status.mayhemEffect",{effect:r[n.effect],eq:Tr(n.equation)}),"ok"),Pm(n)}function Hb(n){for(let t=xo.length-1;t>=0;t--){const e=xo[t];if(e.life-=n*e.decay,e.life<=0){Me.remove(e.mesh),e.geo.dispose(),e.mat.dispose(),xo.splice(t,1);continue}if(e.mesh.position.addScaledVector(e.v,n),e.v.multiplyScalar(1-n*2),e.mat.opacity=e.life,e.grow){const i=.5+(1-e.life)*3;e.mesh.scale.setScalar(i)}e.flicker&&(e.mesh.visible=Math.random()>.3,e.mesh.position.x+=(Math.random()-.5)*.1,e.mesh.position.y+=(Math.random()-.5)*.1,e.mesh.position.z+=(Math.random()-.5)*.1)}}let Nm=0,rs=0,Dm=0;const qs=new P,Ub=new P;function Bb(n,t){Nm=n,rs=t,Dm=performance.now(),Ub.copy(He.position)}function kb(n){if(!rs)return;const t=n-Dm;if(t>rs){rs=0,He.position.sub(qs),qs.set(0,0,0);return}const e=1-t/rs,i=Nm*e,o=(Math.random()-.5)*2*i,s=(Math.random()-.5)*2*i,r=(Math.random()-.5)*2*i;He.position.sub(qs),qs.set(o,s,r),He.position.add(qs)}let Sn=null;function tf(n,t){Sn&&(Me.remove(Sn),Sn.geometry.dispose(),Sn.material.dispose());const e=new Gi(50,8,6),i=new _o({color:n,transparent:!0,opacity:.6,side:rn});Sn=new Qe(e,i),Sn.position.copy(He.position),Me.add(Sn);const o=performance.now();function s(){const a=(performance.now()-o)/t;if(a>=1){Me.remove(Sn),Sn.geometry.dispose(),Sn.material.dispose(),Sn=null;return}Sn.material.opacity=.6*(1-a),requestAnimationFrame(s)}requestAnimationFrame(s)}const Zi=new V0,Ts=new Ot;function lc(n){const t=en.domElement.getBoundingClientRect();Ts.x=(n.clientX-t.left)/t.width*2-1,Ts.y=-((n.clientY-t.top)/t.height)*2+1}function Ku(){cc(),Zi.setFromCamera(Ts,He);let n=null,t=1/0;for(const e of[Un,Bn])for(const i of Zi.intersectObject(e)){if(i.instanceId===void 0)continue;const o=e.userData.ids[i.instanceId];o!==void 0&&i.distance<t&&(t=i.distance,n=o)}return n}function zb(){cc(),Zi.setFromCamera(Ts,He);let n=null,t=1/0;for(const e of[bn,En])for(const i of Zi.intersectObject(e))i.instanceId!==void 0&&i.distance<t&&(t=i.distance,n=e.userData.ids[i.instanceId]);return n}function Vb(n){if(hm=n.pointerType||"mouse",n.button!==0)return;lc(n);const t=Ku();if(Bi={x:n.clientX,y:n.clientY,atomId:t},t!=null&&j.has(t)){n.stopImmediatePropagation(),dn.enabled=!1,Ps(t);const e=j.get(t),i=He.getWorldDirection(new P).negate(),o=new fi().setFromNormalAndCoplanarPoint(i,new P(e.pos.x,e.pos.y,e.pos.z));Zi.setFromCamera(Ts,He);const s=new P,a=Zi.ray.intersectPlane(o,s)?s.sub(new P(e.pos.x,e.pos.y,e.pos.z)):new P;jt={id:t,plane:o,grabOffset:a,moved:!1,snapId:null,snapLegal:!1,snapMsg:"",snapUpgrade:!1},cn()}}function Gb(n){if(lc(n),jt){if(!jt.moved&&Bi&&Math.hypot(n.clientX-Bi.x,n.clientY-Bi.y)>4&&(jt.moved=!0),!jt.moved)return;Zi.setFromCamera(Ts,He);const e=new P;if(!Zi.ray.intersectPlane(jt.plane,e))return;e.sub(jt.grabOffset);const i=j.get(jt.id);i.pos.x=e.x,i.pos.y=Math.max(-.4,Math.min(5.4,e.y)),i.pos.z=e.z,Fi.set(jt.id,{x:i.pos.x,y:i.pos.y,z:i.pos.z});let o=null,s=1/0;for(const[r,a]of j){if(r===jt.id)continue;const c=Math.hypot(a.pos.x-i.pos.x,a.pos.y-i.pos.y,a.pos.z-i.pos.z),l=(bi(i.el)+bi(a.el))*1.45+.25;c<l&&c<s&&(s=c,o=r)}if(jt.snapId=o,o===null)jt.snapLegal=!1,jt.snapMsg="",jt.snapUpgrade=!1;else{const r=[...gt.values()].find(a=>a.a===jt.id&&a.b===o||a.b===jt.id&&a.a===o);if(r){const a=Ru(j,gt,r),c=a.ok||window.__mol3d?._godMode;jt.snapUpgrade=c,jt.snapLegal=c,jt.snapMsg=c?Y("snap.upgradeTo",{n:r.order+1}):a.reason}else{const a=ec(j,gt,jt.id,o),c=a.ok||window.__mol3d?._godMode;jt.snapLegal=c,jt.snapMsg=c?a.type==="ionic"?Y("snap.ionic"):Y("snap.bond"):a.reason}}zu=jt.snapId,Vu=jt.snapLegal,jt.snapMsg,Wb(),cn();return}if(n.target!==en.domElement)return;const t=Ku();t!==Ao&&(Ao=t,en.domElement.style.cursor=t!==null?"grab":"",cn())}function Wb(){if(!jt||jt.snapId===null){mi.visible=!1;return}const n=j.get(jt.id),t=j.get(jt.snapId);ps.set(n.pos.x,n.pos.y,n.pos.z),ka.set(t.pos.x,t.pos.y,t.pos.z),go.subVectors(ka,ps);const e=go.length()||1e-4;mi.position.copy(ps).addScaledVector(go,.5),mi.quaternion.setFromUnitVectors(ym,go.divideScalar(e)),mi.scale.set(.16,e,.16),xm.color.setHex(Vu?4176208:16273737),mi.visible=!0}function Zu(n){if($b(n),jt){const t=jt;jt=null,zu=null,mi.visible=!1;try{if(t.moved){if(t.snapId!==null){const e=[...gt.values()].find(i=>i.a===t.id&&i.b===t.snapId||i.b===t.id&&i.a===t.snapId);e?t.snapUpgrade?Rm(e.id):Vt(Sr(t.snapMsg),"err"):Am(t.id,t.snapId)}Qt(new Set([t.id]))}}finally{dn.enabled=!0,cn()}return}if(Bi&&Math.hypot(n.clientX-Bi.x,n.clientY-Bi.y)<4&&Bi.atomId===null){lc(n);const t=zb();t!==null&&wb(t)}}let aa=0,ef=0,nf=0;function $b(n){if((n.pointerType||"mouse")!=="touch"||n.target!==en.domElement)return;const t=performance.now();aa&&t-aa<350&&Math.hypot(n.clientX-ef,n.clientY-nf)<32?(aa=0,Fm(n)):(aa=t,ef=n.clientX,nf=n.clientY)}en.domElement.addEventListener("dblclick",n=>{hm!=="touch"&&Fm(n)});function Fm(n){lc(n);const t=Ku();if(t===null){$n(),Vt(Y("status.selCleared"));return}const e=yo(j,gt,t),i=be(e);qe.has(i)?(qe.delete(i),Vt(Y("status.selRemoved"))):(qe.add(i),Vt(Y("status.selAdded",{n:qe.size}),"info")),ju(),Ar(),cn()}function Xb(){const n=document.getElementById("ptable");n.innerHTML="";for(let e=1;e<=118;e++){const i=Hn.find(r=>r.z===e),o=W1(e),s=document.createElement("button");s.className="el",s.style.gridColumn=o.col,s.style.gridRow=o.row,s.style.borderColor=i.color,s.dataset.sym=i.sym,s.title=Y("el.title",{name:kn(i),cat:pr(i.cat),max:i.maxBonds}),s.innerHTML=`<span class="z">${e}</span><span class="s">${i.sym}</span>`,s.addEventListener("click",()=>fo(i)),n.appendChild(s)}const t=document.createElement("div");t.className="el ph",t.style.gridColumn="3 / 13",t.style.gridRow="8",t.textContent=Y("ptable.ph"),n.appendChild(t)}function Hm(){const n=document.getElementById("legend");n.innerHTML="";for(const[t,e]of Object.entries($1)){const i=document.createElement("span");i.className="lg",i.innerHTML=`<i style="background:${e}"></i>${pr(t)}`,n.appendChild(i)}}const of=n=>n.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D");function Um(){for(const n of document.querySelectorAll("#pool-list .el-chip")){const t=Co(n.dataset.sym);t&&(n.dataset.search=`${t.sym} ${t.name} ${t.z} ${kn(t)} ${of(t.name)} ${of(kn(t))}`.toLowerCase(),n.title=Y("el.title",{name:kn(t),cat:pr(t.cat),max:t.maxBonds}),n.querySelector(".n").textContent=kn(t))}for(const n of document.querySelectorAll("#ptable .el[data-sym]")){const t=Co(n.dataset.sym);t&&(n.title=Y("el.title",{name:kn(t),cat:pr(t.cat),max:t.maxBonds}))}}function $a(){Xb();const n=document.getElementById("pool-list"),t=[...Hn];es&&t.push(...rp),t.push(...Wi);for(const e of t){const i=document.createElement("button");i.className="el-chip",i.dataset.sym=e.sym,i.dataset.search=`${e.sym} ${e.name} ${e.z}`.toLowerCase(),i.title=`${e.name} · ${e.cat} · max bonds ${e.maxBonds}`;const o=document.createElement("i");o.style.background=e.color;const s=document.createElement("span");s.className="s",s.textContent=e.sym;const r=document.createElement("span");if(r.className="n",r.textContent=e.name,i.append(o,s,r),Wi.includes(e)){const c=document.createElement("span");c.className="el-delete",c.textContent="×",c.title="Delete custom element",c.addEventListener("click",l=>{l.stopPropagation(),lE(e.sym)}),i.appendChild(c),i.classList.add("custom-element")}i.addEventListener("click",()=>jb(e)),n.appendChild(i)}if(Um(),!$a._listenersAttached){$a._listenersAttached=!0;const e=document.getElementById("pool-search");e.addEventListener("input",qb),e.addEventListener("keydown",o=>{if(o.key!=="Enter")return;const s=[...n.children].find(r=>r.style.display!=="none");s&&s.click()});const i=document.getElementById("pool-view");i.addEventListener("click",()=>{const o=!n.hidden;n.hidden=o,document.getElementById("ptable").hidden=!o,i.textContent=Y(o?"pool.viewList":"pool.viewTable")})}}function Ju(){const n=document.getElementById("pool-list");n.innerHTML="",$a()}function qb(){const n=document.getElementById("pool-search").value.trim().toLowerCase();for(const t of document.querySelectorAll("#pool-list .el-chip"))t.style.display=!n||t.dataset.search.includes(n)?"":"none"}function jb(n){fo(n),document.body.classList.contains("mobile")&&qa()}function Yb(n){return n>0?`+${n}`:`${n}`}function uc(){if(ue===null||!j.has(ue))return null;const n=re.find(t=>t.atoms.includes(ue));return n?{comp:n,an:ze[re.indexOf(n)]}:null}function Qu(){tE();const n=document.getElementById("sel-info"),t=document.getElementById("mol-info"),e=document.getElementById("mol-warn"),i=document.getElementById("bohr-toggle"),o=document.getElementById("bohr-container"),s=uc();if(!s){n.innerHTML=`<span class="muted">${Y("sel.empty")}</span>`,t.innerHTML=`<span class="muted">${Y("mol.empty")}</span>`,e.style.display="none",i.hidden=!0,o.hidden=!0,xi=!1,i.classList.remove("active"),xr&&cancelAnimationFrame(xr);return}const r=j.get(ue);n.innerHTML=`<b>${r.el.sym}</b> — ${kn(r.el)}<br />
    <span class="muted">${Y("sel.stats",{cat:pr(r.el.cat),mass:r.el.mass,en:r.el.en??"?",max:r.el.maxBonds})}</span>`,i.hidden=!1,o.hidden=!xi,xi&&(th(r.el),eh(r.el));const{comp:a,an:c}=s;if(a.bonds.length===0){t.innerHTML=`<span class="muted">${Y("mol.freeAtom")}</span>`,e.style.display="none";return}const l=Wu(a,c),h=jn(c.formula,c.charge),d=`${je(c.displayFormula||c.formula)}<span class="muted">${ei("",c.charge)}</span>`;if(t.innerHTML=`<div class="mol-formula">${d}</div><div id="mol-name">${l||Y("mol.unnamed")}<span class="mol-type">${h.label}</span></div>
    <span class="muted">${Y("mol.stats",{a:a.atoms.length,b:a.bonds.length})}</span>`,!c.feasible)e.style.display="block",e.textContent=Sr(c.reason)||Y("chem.lewis.charge");else{const u=a.atoms.find(f=>{const m=c.per.get(f);return!m||m.isMetal||!m.bonded||!m.ionU?!1:(j.get(f).el.valenceElectrons+m.ionU-m.covSum)%2!==0});u?(e.style.display="block",e.textContent=Y("chem.partialIonic",{sym:kn(j.get(u).el)})):e.style.display="none"}}const sf=document.getElementById("stoich-body"),rf=document.getElementById("stoich-empty"),Kb=document.getElementById("stoich-formula"),Zb=document.getElementById("stoich-molar"),Jb=document.getElementById("stoich-comp"),Qb=document.getElementById("stoich-note"),Qs=document.getElementById("stoich-g"),tr=document.getElementById("stoich-mol"),er=document.getElementById("stoich-n");let ms=null;function tE(){const n=uc();if(!n){ms=null,sf.hidden=!0,rf.style.display="";return}const t=j.get(ue);let e,i,o="";if(n.comp.bonds.length===0)e=t.el.sym,i=je(e),o=Y("stoich.freeAtom");else{const{an:c}=n;e=c.formula,i=`${je(c.displayFormula||c.formula)}<span class="muted">${ei("",c.charge)}</span>`}const s=e!==ms;ms=e;const r=fs(e);rf.style.display="none",sf.hidden=!1,Kb.innerHTML=i,Zb.textContent=r===null?"—":Y("stoich.molar",{m:Fe(r)});const a=jS(e);Jb.innerHTML=(a?a.rows:[]).map(c=>`<tr><td><b>${c.sym}</b> ${kn(c)}</td><td>${c.count}</td><td>${Fe(c.atomicMass)}</td><td>${Fe(c.subtotal)}</td><td>${Fe(c.pct)}%</td></tr>`).join(""),Qb.textContent=o,s&&r!==null&&(tr.value="1",Qs.value=Fe(r),er.value=Fe(_a))}function eE(){const n=t=>{const e=parseFloat(t.value);return isFinite(e)&&e>=0?e:null};tr.addEventListener("input",()=>{const t=fs(ms),e=n(tr);t===null||e===null||(Qs.value=Fe(e*t),er.value=Fe(e*_a))}),Qs.addEventListener("input",()=>{const t=fs(ms),e=n(Qs);if(t===null||e===null)return;const i=e/t;tr.value=Fe(i),er.value=Fe(i*_a)}),er.addEventListener("input",()=>{const t=fs(ms),e=n(er);if(t===null||e===null)return;const i=e/_a;tr.value=Fe(i),Qs.value=Fe(i*t)})}const Bm=["K","L","M","N","O","P","Q"],af=[2,8,18,32,32,18,8];function km(n){const t=[];let e=n;for(let i=0;i<af.length&&e>0;i++){const o=Math.min(e,af[i]);t.push(o),e-=o}return t}let xi=!1,xr=null,zm=0;function th(n){const t=document.getElementById("bohr-canvas"),e=t.getContext("2d"),i=t.width,o=t.height,s=i/2,r=o/2;e.clearRect(0,0,i,o);const a=km(n.z),c=Math.round(n.mass)-n.z,l=Math.min(s,r)-20,h=a.map((f,m)=>30+m*(l-30)/Math.max(a.length-1,1));e.strokeStyle="rgba(88, 166, 255, 0.15)",e.lineWidth=1;for(const f of h)e.beginPath(),e.arc(s,r,f,0,Math.PI*2),e.stroke();const d=16,u=e.createRadialGradient(s-3,r-3,2,s,r,d);u.addColorStop(0,"#ff6b6b"),u.addColorStop(.5,"#ee5a24"),u.addColorStop(1,"#c0392b"),e.fillStyle=u,e.beginPath(),e.arc(s,r,d,0,Math.PI*2),e.fill(),e.fillStyle="#fff",e.font="bold 10px system-ui",e.textAlign="center",e.textBaseline="middle",e.fillText(`${n.z}p`,s,r-5),e.font="9px system-ui",e.fillText(`${c}n`,s,r+6);for(let f=0;f<a.length;f++){const m=a[f],_=h[f],g=(.3+f*.15)*(f%2===0?1:-1);for(let p=0;p<m;p++){const y=zm*g+p*Math.PI*2/m,M=s+Math.cos(y)*_,x=r+Math.sin(y)*_,T=e.createRadialGradient(M,x,0,M,x,6);T.addColorStop(0,"rgba(88, 166, 255, 0.8)"),T.addColorStop(1,"rgba(88, 166, 255, 0)"),e.fillStyle=T,e.beginPath(),e.arc(M,x,6,0,Math.PI*2),e.fill(),e.fillStyle="#58a6ff",e.beginPath(),e.arc(M,x,3,0,Math.PI*2),e.fill()}}e.fillStyle="rgba(139, 148, 158, 0.6)",e.font="9px system-ui",e.textAlign="left";for(let f=0;f<a.length;f++)e.fillText(`${Bm[f]}: ${a[f]}`,s+h[f]+4,r-4)}function Vm(){if(!xi)return;zm+=.02;const n=j.get(ue);n&&th(n.el),xr=requestAnimationFrame(Vm)}function eh(n){const t=document.getElementById("bohr-stats"),e=km(n.z),i=Math.round(n.mass)-n.z;let o=e.map((s,r)=>`<span class="shell-badge">${Bm[r]}: ${s}e⁻</span>`).join("");t.innerHTML=`
    <div><span class="stat-label">${Y("bohr.atomic")}</span><br><span class="stat-value">${n.z}</span></div>
    <div><span class="stat-label">${Y("bohr.mass")}</span><br><span class="stat-value">${n.mass}</span></div>
    <div><span class="stat-label">${Y("bohr.protons")}</span><br><span class="stat-value">${n.z}</span></div>
    <div><span class="stat-label">${Y("bohr.neutrons")}</span><br><span class="stat-value">${i}</span></div>
    <div><span class="stat-label">${Y("bohr.electrons")}</span><br><span class="stat-value">${n.z}</span></div>
    <div><span class="stat-label">${Y("bohr.valence")}</span><br><span class="stat-value">${n.valenceElectrons}</span></div>
    <div class="shell-row"><span class="stat-label">${Y("bohr.shells")}</span> ${o}</div>
  `}function nE(){xi=!xi;const n=document.getElementById("bohr-toggle"),t=document.getElementById("bohr-container");if(n.classList.toggle("active",xi),xi){t.hidden=!1;const e=j.get(ue);e&&(th(e.el),eh(e.el),Vm())}else t.hidden=!0,xr&&cancelAnimationFrame(xr)}document.getElementById("bohr-toggle").addEventListener("click",nE);function nh(){const n=document.getElementById("mol-list");if(n.textContent="",!re.length){n.textContent=Y("list.empty");return}let t=0;re.forEach((e,i)=>{if(e.bonds.length===0)return;t++;const o=ze[i],s=document.createElement("div");s.className="mol-row"+(ue!==null&&e.atoms.includes(ue)?" active":"");const r=document.createElement("span");r.className="m-name",r.textContent=Wu(e,o)||je(o.formula);const a=document.createElement("span");if(a.className="m-f",a.textContent=je(o.displayFormula||o.formula)+ei("",o.charge),s.append(r,a),s.addEventListener("click",()=>Ps(e.atoms[0])),Iu(o.formula).length>0){const l=document.createElement("button");l.className="isomer-btn",l.textContent=ee()?"Đồng phân":"Isomers",l.addEventListener("click",h=>{h.stopPropagation(),iE(i)}),s.appendChild(l)}n.appendChild(s)}),t||(n.textContent=Y("list.empty"))}function iE(n){const t=ze[n],e=document.getElementById("isomer-drawer"),i=document.getElementById("isomer-drawer-title"),o=document.getElementById("isomer-drawer-list");i.textContent=(ee()?"Đồng phân của ":"Isomers of ")+je(t.displayFormula||t.formula),o.textContent="";const s=Iu(t.formula),r=t.fingerprint,a=t.displayFormula||t.formula,c=s.map(u=>Qf(u.tpl.atoms,u.tpl.bonds,u.tpl.atoms.map((f,m)=>m))),l=s.findIndex((u,f)=>c[f]===r&&(u.displayFormula||t.formula)===a),h=new Set(l>=0?[l]:s.map((u,f)=>c[f]===r?f:-1).filter(u=>u>=0));for(let u=0;u<s.length;u++){const f=s[u],m=document.createElement("div");m.className="isomer-item",h.has(u)&&m.classList.add("active");const _=document.createElement("div");_.className="isomer-item-info";const g=document.createElement("div");g.className="isomer-item-name",g.textContent=f.displayName||f.key;const p=document.createElement("div");p.className="isomer-item-formula",p.textContent=f.displayFormula||t.formula,_.append(g,p);const y=jn(t.formula,f.tpl.charge||0),M=document.createElement("span");M.className="isomer-badge "+(y.key||""),M.textContent=y.label,m.append(_,M),m.addEventListener("click",()=>oE(n,f)),o.appendChild(m)}if(s.truncated){const u=document.createElement("div");u.className="isomer-more-note",u.textContent=Y("iso.more",{n:s.length}),o.appendChild(u)}e.classList.add("open"),e.setAttribute("aria-hidden","false");const d=document.getElementById("isomer-search");d.value="",$m("")}function Gm(){const n=document.getElementById("isomer-drawer");n.classList.remove("open"),n.setAttribute("aria-hidden","true")}function Wm(n,t,e,i){const o=new Map,s=[],r=[];for(let u=0;u<n.atoms.length;u++){const f=n.atoms[u],m=Co(f);if(!m)continue;const _=ve++;o.set(u,_),s.push({id:_,el:m,idx:u}),r.push(_)}if(!s.length)return{ids:[]};const a=new Map;for(const u of s)a.set(u.id,[]);for(const u of n.bonds){const[f,m,_,g]=u,p=o.get(f),y=o.get(m);p==null||y==null||(a.get(p).push({neighbor:y,order:_}),a.get(y).push({neighbor:p,order:_}))}const c=new Map,l=new Set,h=s[0].id;c.set(h,{x:t,y:e,z:i}),l.add(h);const d=[{id:h,parentDir:null}];for(;d.length;){const{id:u,parentDir:f}=d.shift(),m=a.get(u);if(!m||m.length===0)continue;const _=m.filter(y=>!l.has(y.neighbor)).length;if(_===0)continue;const g=sE(_,f);let p=0;for(const{neighbor:y}of m){if(l.has(y))continue;const M=s.find(w=>w.id===u),x=s.find(w=>w.id===y),T=Zl(M.el,x.el,!1),v=g[p++],b=c.get(u);c.set(y,{x:b.x+v.x*T,y:b.y+v.y*T,z:b.z+v.z*T}),l.add(y),d.push({id:y,parentDir:{x:-v.x,y:-v.y,z:-v.z}})}}for(const u of s){const f=c.get(u.id)||{x:t,y:e,z:i};j.set(u.id,{id:u.id,el:u.el,pos:f})}for(const u of n.bonds){const[f,m,_,g]=u,p=o.get(f),y=o.get(m);if(p==null||y==null)continue;const M=ve++;gt.set(M,{id:M,a:p,b:y,order:_||1,ionic:!!g})}return{ids:r}}function oE(n,t){const e=re[n];if(!e)return;let i=0,o=0,s=0;for(const h of e.atoms){const d=j.get(h);i+=d.pos.x,o+=d.pos.y,s+=d.pos.z}const r=e.atoms.length;i/=r,o/=r,s/=r;for(const h of e.atoms){j.delete(h);for(const[d,u]of gt)(u.a===h||u.b===h)&&gt.delete(d)}const{ids:a}=Wm(t.tpl,i,o,s),c=be({atoms:a}),l=be(e);t.tpl.charge?Yt.set(c,t.tpl.charge):Yt.has(l)&&Yt.set(c,Yt.get(l)),t.displayFormula&&an.set(c,t.displayFormula),Gm(),Qt(new Set(a))}function sE(n,t){const e=[];if(n===1)t?e.push({x:-t.x,y:-t.y,z:-t.z}):e.push({x:1,y:0,z:0});else if(n===2)if(t){const i=cf(t);e.push(i),e.push({x:-i.x,y:-i.y,z:-i.z})}else e.push({x:1,y:0,z:0}),e.push({x:-1,y:0,z:0});else if(n===3)if(t){const i=cf(t),o=uu(t,i);for(let s=0;s<3;s++){const r=s/3*Math.PI*2;e.push({x:i.x*Math.cos(r)+o.x*Math.sin(r),y:i.y*Math.cos(r)+o.y*Math.sin(r),z:i.z*Math.cos(r)+o.z*Math.sin(r)})}}else for(let i=0;i<3;i++){const o=i/3*Math.PI*2;e.push({x:Math.cos(o),y:Math.sin(o),z:0})}else if(n===4){const i=[{x:1,y:1,z:1},{x:1,y:-1,z:-1},{x:-1,y:1,z:-1},{x:-1,y:-1,z:1}];for(const o of i){const s=Math.sqrt(o.x*o.x+o.y*o.y+o.z*o.z);e.push({x:o.x/s,y:o.y/s,z:o.z/s})}}else for(let i=0;i<n;i++){const o=Math.acos(1-2*(i+.5)/n),s=Math.PI*(1+Math.sqrt(5))*i;e.push({x:Math.sin(o)*Math.cos(s),y:Math.sin(o)*Math.sin(s),z:Math.cos(o)})}return e}function cf(n){return Math.abs(n.x)<.9?lf(uu(n,{x:1,y:0,z:0})):lf(uu(n,{x:0,y:1,z:0}))}function uu(n,t){return{x:n.y*t.z-n.z*t.y,y:n.z*t.x-n.x*t.z,z:n.x*t.y-n.y*t.x}}function lf(n){const t=Math.sqrt(n.x*n.x+n.y*n.y+n.z*n.z);return t===0?{x:0,y:0,z:0}:{x:n.x/t,y:n.y/t,z:n.z/t}}document.getElementById("isomer-drawer-close").addEventListener("click",Gm);document.getElementById("isomer-search").addEventListener("input",n=>$m(n.target.value));function $m(n){const t=document.getElementById("isomer-drawer-list");if(!t)return;const e=n.trim().toLowerCase();let i=0;for(const r of t.children){if(!r.classList.contains("isomer-item"))continue;const a=!e||r.textContent.toLowerCase().includes(e);r.style.display=a?"":"none",a&&i++}const o=t.querySelector(".isomer-more-note");o&&(o.style.display=e?"none":"");let s=document.getElementById("isomer-no-match");s||(s=document.createElement("div"),s.id="isomer-no-match",s.className="isomer-more-note",t.appendChild(s)),s.textContent=Y("iso.none"),s.style.display=i===0&&t.querySelector(".isomer-item")?"":"none"}function Xm(n){return je(n.formula)+ei("",n.charge??0)}function qm(n){return ee()&&n.vi?n.vi:n.name||Xm(n)}function hc(){const n=document.getElementById("ch-list"),t=document.getElementById("ch-progress");t.textContent=`${Ei.size} / ${ru.length}`,n.textContent="";for(const e of ru){const i=document.createElement("div");i.className="ch"+(Ei.has(`${e.formula}|${e.charge??0}`)?" done":"");const o=document.createElement("span");o.className="ch-f",o.textContent=Xm(e);const s=document.createElement("span");s.className="ch-n",s.textContent=qm(e),i.append(o,s),n.appendChild(i)}}function rE(){for(const n of ru){const t=`${n.formula}|${n.charge??0}`;if(Ei.has(t))continue;re.some((i,o)=>ze[o].feasible&&(ze[o].displayFormula===n.formula||ze[o].formula===n.formula)&&(ze[o].charge??0)===(n.charge??0))&&(Ei.add(t),Is(Y("toast.challenge",{name:qm(n)})),hc())}}let uf=null;function Vt(n,t="info"){const e=document.getElementById("status-text");e.textContent=n,e.className=t,clearTimeout(uf),uf=setTimeout(()=>{e.textContent=""},6e3)}let hf=null;function Is(n){const t=document.getElementById("toast");t.textContent=n,t.classList.add("show"),clearTimeout(hf),hf=setTimeout(()=>t.classList.remove("show"),3200)}function Ps(n){ue=n,Qu(),nh(),rh(),cn()}function jm(n){const t=uc();if(!t||t.comp.bonds.length===0){Vt(Y("status.selectFirst"));return}const e=be(t.comp),i=(Yt.has(e)?Yt.get(e):t.an.charge)+n;if(Math.abs(i)>6){Vt(Y("status.chargeLimit"),"err");return}Yt.set(e,i),ii({type:"snapshot",atoms:[...j.values()].map(Cr),bonds:[...gt.values()].map(o=>({...o})),overrides:[...Yt],iso:[...an],nextId:ve}),Qt(),Vt(Y("status.chargeSet",{v:Yb(i)}),"ok")}let df=null;function ih(n=!1){clearTimeout(df);const t=()=>{try{localStorage.setItem("mol3d.v1",JSON.stringify({atoms:[...j.values()].map(e=>({id:e.id,z:e.el.z,pos:e.pos})),bonds:[...gt.values()].map(e=>({id:e.id,a:e.a,b:e.b,order:e.order,ionic:e.ionic})),nextId:ve,overrides:[...Yt],isoF:[...an],fc:[...Ei]}))}catch{}};n?t():df=setTimeout(t,300)}function aE(){let n;try{n=JSON.parse(localStorage.getItem("mol3d.v1")||"null")}catch{n=null}if(!(!n||!Array.isArray(n.atoms))){console.log("[LOAD] Loading",n.atoms.length,"atoms and",(n.bonds||[]).length,"bonds");for(const t of n.atoms){if(!t||!Number.isInteger(t.id)||!t.pos)continue;const e=Hn.find(i=>i.z===t.z);e&&j.set(t.id,{id:t.id,el:e,pos:{x:+t.pos.x||0,y:+t.pos.y||0,z:+t.pos.z||0}})}for(const t of Array.isArray(n.bonds)?n.bonds:[])t&&Number.isInteger(t.id)&&j.has(t.a)&&j.has(t.b)?(gt.set(t.id,{...t}),console.log("[LOAD] Restored bond",t.id,"between atoms",t.a,"and",t.b,"order:",t.order)):console.warn("[LOAD] Failed to restore bond",t,"- atoms exist?",j.has(t?.a),j.has(t?.b));console.log("[LOAD] After load:",j.size,"atoms,",gt.size,"bonds");for(const[t,e]of Array.isArray(n.overrides)?n.overrides:[])typeof t=="string"&&Number.isInteger(e)&&Yt.set(t,e);for(const[t,e]of Array.isArray(n.isoF)?n.isoF:[])typeof t=="string"&&typeof e=="string"&&an.set(t,e);for(const t of Array.isArray(n.fc)?n.fc:[])typeof t=="string"&&Ei.add(t);ve=Number.isInteger(n.nextId)&&n.nextId>0?n.nextId:Math.max(0,...j.keys(),...gt.keys())+1}}document.getElementById("btn-undo").addEventListener("click",qu);document.getElementById("btn-delete").addEventListener("click",()=>{ue!==null&&Xu(ue)});document.getElementById("btn-duplicate").addEventListener("click",Om);document.getElementById("btn-clear").addEventListener("click",Js);const gs=document.getElementById("btn-menu"),Xa=document.getElementById("menu-dropdown");gs.addEventListener("click",n=>{n.stopPropagation();const t=gs.getAttribute("aria-expanded")==="true";gs.setAttribute("aria-expanded",!t),Xa.hidden=t});document.addEventListener("click",n=>{!gs.contains(n.target)&&!Xa.contains(n.target)&&(gs.setAttribute("aria-expanded","false"),Xa.hidden=!0)});const va=document.getElementById("mobile-console"),Ma=document.getElementById("console-output"),ke=document.getElementById("console-input"),as=[];let Pi=-1,Li=-1;const De=document.createElement("div");De.className="console-suggestions";De.hidden=!0;ke.parentElement.style.position="relative";ke.parentElement.insertBefore(De,ke);const cE=["__mol3d.hacks.godMode()","__mol3d.hacks.mortalMode()","__mol3d.hacks.chaos(","__mol3d.hacks.party()","__mol3d.hacks.matrix()","__mol3d.hacks.rainbow()","__mol3d.hacks.disco()","__mol3d.hacks.giant()","__mol3d.hacks.tiny()","__mol3d.hacks.explosion(","__mol3d.hacks.implode()","__mol3d.hacks.clone(","__mol3d.hacks.dna(","__mol3d.hacks.firework(","__mol3d.hacks.blackHole()","__mol3d.hacks.antiGravity()","__mol3d.hacks.quantum()","__mol3d.hacks.unlockAll()","__mol3d.hacks.spawnMolecule(","__mol3d.hacks.mirror()","__mol3d.hacks.slowmo()","__mol3d.hacks.fastforward()","__mol3d.hacks.normalSpeed()","__mol3d.spawnAtom(","__mol3d.clearAll()","__mol3d.undo()","__mol3d.discoveries()"];function hu(n){if(!n.trim()){De.hidden=!0;return}const t=cE.filter(e=>e.toLowerCase().includes(n.toLowerCase()));if(t.length===0){De.hidden=!0;return}De.innerHTML="",t.slice(0,5).forEach((e,i)=>{const o=document.createElement("div");o.className="suggestion-item"+(i===Li?" active":""),o.textContent=e,o.addEventListener("click",()=>{ke.value=e,De.hidden=!0,ke.focus()}),De.appendChild(o)}),De.hidden=!1}const dc={log:console.log.bind(console),error:console.error.bind(console),warn:console.warn.bind(console),info:console.info.bind(console)};function vo(n,t){const e=document.createElement("div");e.className=`log-entry ${n}`;const i=Array.from(t).map(o=>{if(typeof o=="object")try{return JSON.stringify(o,null,2)}catch{return String(o)}return String(o)}).join(" ");e.textContent=i,Ma.appendChild(e),Ma.scrollTop=Ma.scrollHeight}console.log=function(...n){dc.log(...n),vo("log",n)};console.error=function(...n){dc.error(...n),vo("error",n)};console.warn=function(...n){dc.warn(...n),vo("warn",n)};console.info=function(...n){dc.info(...n),vo("info",n)};function Ym(n){if(n.trim()){as.push(n),Pi=as.length,vo("info",[`> ${n}`]);try{const e=new Function("return "+n)();e!==void 0&&vo("result",[e])}catch(t){vo("error",[t.message])}}}document.getElementById("btn-console").addEventListener("click",()=>{va.hidden=!va.hidden,va.hidden||(ke.focus(),gs.setAttribute("aria-expanded","false"),Xa.hidden=!0)});document.getElementById("console-close").addEventListener("click",()=>{va.hidden=!0});document.getElementById("console-clear").addEventListener("click",()=>{Ma.innerHTML=""});document.getElementById("console-run").addEventListener("click",()=>{Ym(ke.value),ke.value=""});ke.addEventListener("input",()=>{Li=-1,hu(ke.value)});ke.addEventListener("keydown",n=>{if(n.key==="Enter")Ym(ke.value),ke.value="",De.hidden=!0;else if(n.key==="ArrowUp")n.preventDefault(),!De.hidden&&De.children.length>0?(Li=Math.max(0,Li-1),hu(ke.value)):Pi>0&&(Pi--,ke.value=as[Pi]);else if(n.key==="ArrowDown")n.preventDefault(),!De.hidden&&De.children.length>0?(Li=Math.min(De.children.length-1,Li+1),hu(ke.value)):Pi<as.length-1?(Pi++,ke.value=as[Pi]):(Pi=as.length,ke.value="");else if(n.key==="Tab"){if(n.preventDefault(),!De.hidden&&De.children.length>0){const t=Li>=0?Li:0;ke.value=De.children[t].textContent,De.hidden=!0}}else n.key==="Escape"&&(De.hidden=!0)});document.getElementById("btn-fc").addEventListener("click",()=>{ya=!ya,document.getElementById("btn-fc").classList.toggle("on",ya),cn()});document.getElementById("btn-mayhem").addEventListener("click",()=>{es=!es,document.getElementById("btn-mayhem").classList.toggle("on",es),document.getElementById("btn-import").hidden=!es,Ju(),Vt(es?"Mayhem mode ON — exotic elements unlocked!":"Mayhem mode OFF")});document.getElementById("btn-tutorial").addEventListener("click",()=>{Bu(),document.getElementById("menu-dropdown").hidden=!0,document.getElementById("btn-menu").setAttribute("aria-expanded","false")});document.getElementById("btn-import").addEventListener("click",()=>{document.getElementById("custom-element-modal").hidden=!1,document.getElementById("custom-name").focus()});document.getElementById("custom-close").addEventListener("click",()=>{document.getElementById("custom-element-modal").hidden=!0});document.getElementById("custom-cancel").addEventListener("click",()=>{document.getElementById("custom-element-modal").hidden=!0});document.getElementById("custom-anion").addEventListener("change",n=>{document.getElementById("anion-charge-row").hidden=!n.target.checked});document.getElementById("custom-element-form").addEventListener("submit",n=>{n.preventDefault();const t=document.getElementById("custom-name").value.trim(),e=document.getElementById("custom-sym").value.trim(),i=document.getElementById("custom-cat").value,o=parseInt(document.getElementById("custom-maxbonds").value)||4,s=parseFloat(document.getElementById("custom-mass").value)||100,r=document.getElementById("custom-color").value,a=document.getElementById("custom-anion").checked,c=a?parseInt(document.getElementById("custom-anion-charge").value)||1:0;if(!t||!e){Vt("Name and symbol are required");return}if(Co(e)){Vt(`Element "${e}" already exists`);return}const l=300+Wi.length;Wi.push({z:l,sym:e,name:t,mass:s,cat:i,en:null,maxBonds:o,anionCharge:c,charges:a?[c]:null,radius:150,color:r}),Ju(),document.getElementById("custom-element-modal").hidden=!0,document.getElementById("custom-element-form").reset(),document.getElementById("anion-charge-row").hidden=!0,Vt(`Created custom element: ${t} (${e})`)});function lE(n){const t=Wi.findIndex(i=>i.sym===n);if(t===-1)return;const e=Wi[t];Wi.splice(t,1),Ju(),Vt(`Deleted custom element: ${e.name} (${n})`)}cu.addEventListener("click",()=>{const n=Qc.indexOf(Er);bm(Qc[(n+1)%Qc.length]),Vt(Y("status.quality",{mode:Va()}))});document.getElementById("btn-save-disc").addEventListener("click",lu);document.getElementById("chg-minus").addEventListener("click",()=>jm(-1));document.getElementById("chg-plus").addEventListener("click",()=>jm(1));document.getElementById("chg-auto").addEventListener("click",()=>{const n=uc();if(!n||n.comp.bonds.length===0){Vt(Y("status.selectFirst"));return}Yt.delete(be(n.comp)),Qt(),Vt(Y("status.chargeAuto"))});document.getElementById("ch-reset").addEventListener("click",()=>{Ei.clear(),hc(),ih(),Vt(Y("status.chalReset"))});window.addEventListener("keydown",n=>{n.target instanceof HTMLInputElement||((n.ctrlKey||n.metaKey)&&n.key.toLowerCase()==="z"?(n.preventDefault(),qu()):(n.ctrlKey||n.metaKey)&&n.key.toLowerCase()==="d"?(n.preventDefault(),Om()):n.key==="Delete"||n.key==="Backspace"?ue!==null&&Xu(ue):n.key==="Escape"&&(qa(),$n(),Ps(null)))});document.getElementById("btn-fc").classList.add("on");const Km="mol3d.theme",ff={dark:{bg:856343,gridA:3159613,gridB:1909546,meta:"#0d1117"},light:{bg:16185594,gridA:13226457,gridB:14541801,meta:"#f6f8fa"}},oh=document.getElementById("btn-theme");function Zm(n){const t=ff[n]||ff.dark;document.documentElement.dataset.theme=n==="light"?"light":"dark",Me.background.set(t.bg),Me.fog&&Me.fog.color.set(t.bg),Me.remove(ho),ho.geometry.dispose(),ho=new Gf(60,60,t.gridA,t.gridB),ho.position.y=-1.7,Me.add(ho),document.querySelector('meta[name="theme-color"]')?.setAttribute("content",t.meta),oh.textContent=Y("btn.theme",{mode:Y(n==="light"?"theme.light":"theme.dark")})}let Hi="dark";try{const n=localStorage.getItem(Km);(n==="light"||n==="dark")&&(Hi=n)}catch{}Zm(Hi);oh.addEventListener("click",()=>{Hi=Hi==="dark"?"light":"dark";try{localStorage.setItem(Km,Hi)}catch{}Zm(Hi),cn(),Vt(Y("status.theme",{mode:Y(Hi==="light"?"theme.light":"theme.dark")}))});const du=document.getElementById("btn-lang");du.textContent=ep()==="en"?"VI":"EN";du.addEventListener("click",()=>{np(cM()),du.textContent=ep()==="en"?"VI":"EN",uE(),Vt(Y("status.lang"))});function uE(){Ou(),ac(),oh.textContent=Y("btn.theme",{mode:Y(Hi==="light"?"theme.light":"theme.dark")});const n=document.getElementById("pool-list");document.getElementById("pool-view").textContent=n.hidden?Y("pool.viewList"):Y("pool.viewTable");const t=document.querySelector("#ptable .el.ph");t&&(t.textContent=Y("ptable.ph")),Hm(),Um();for(const e of document.querySelectorAll("#rxn-conds button"))e.textContent=yi(e.dataset.cond);if(Ar(),Qu(),nh(),Os(),hc(),xi){const e=j.get(ue);e&&eh(e.el)}cn()}const hE=["left","tab-info","tab-dex"];function qa(){for(const n of hE)document.getElementById(n)?.classList.remove("open");document.querySelectorAll("#mtabs button.on").forEach(n=>n.classList.remove("on"))}{const n=document.getElementById("mtabs"),t=window.matchMedia("(max-width: 860px)"),e=()=>{document.body.classList.toggle("mobile",t.matches),t.matches||qa()};e(),t.addEventListener("change",e),n.addEventListener("click",i=>{const o=i.target.closest("button[data-tab]");if(!o)return;const s=document.getElementById(o.dataset.tab),r=s.classList.contains("open");qa(),r||(s.classList.add("open"),o.classList.add("on"))})}{const n=()=>document.body.classList.add("joy");window.matchMedia("(pointer: coarse)").matches&&n(),window.addEventListener("pointerdown",r=>{r.pointerType==="touch"&&n()});const t=document.getElementById("joy-stick"),e=document.getElementById("joy-knob");let i=null;const o=r=>{const a=t.getBoundingClientRect();let c=r.clientX-(a.left+a.width/2),l=r.clientY-(a.top+a.height/2);const h=a.width/2,d=Math.hypot(c,l);d>h&&(c=c/d*h,l=l/d*h),e.style.transform=`translate(${c}px, ${l}px)`,ss.setStick(c/h,-l/h)};t.addEventListener("pointerdown",r=>{i=r.pointerId;try{t.setPointerCapture(r.pointerId)}catch{}o(r)}),t.addEventListener("pointermove",r=>{r.pointerId===i&&o(r)});const s=r=>{r.pointerId===i&&(i=null,e.style.transform="",ss.setStick(0,0))};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s);for(const[r,a]of[["joy-up",1],["joy-down",-1]]){const c=document.getElementById(r);c.addEventListener("pointerdown",l=>{l.preventDefault(),ss.setVertical(a)});for(const l of["pointerup","pointercancel","pointerleave"])c.addEventListener(l,()=>ss.setVertical(0))}}let fu=!0;function cn(){fu=!0}function Jm(n){const t=1-Math.exp(-n*9);let e=!1;for(const[i,o]of j){if(jt&&jt.id===i)continue;const s=Fi.get(i);if(!s)continue;const r=s.x-o.pos.x,a=s.y-o.pos.y,c=s.z-o.pos.z;r*r+a*a+c*c<1e-6||(o.pos.x+=r*t,o.pos.y+=a*t,o.pos.z+=c*t,e=!0)}return e}let pf=performance.now();function Qm(n){requestAnimationFrame(Qm);const t=Math.min(.05,(n-pf)/1e3);pf=n,vm.frame(n),!jt&&!dn.enabled&&(dn.enabled=!0),dn.update();let e=!1;e=ss.update(t)||e,e=Im(t)||e,e=Jm(t)||e,Hb(t),kb(n),xo.length&&(e=!0),rs&&(e=!0),Cs.size&&(e=!0),jt&&(e=!0),mb(n),(fu||e)&&(fu=!1,cc(),Em(),en.render(Me,He))}function dE(n){const t=[],e=n.length;if(e===1)t.push({x:0,y:0,z:0});else if(e===2)t.push({x:-.75,y:0,z:0}),t.push({x:.75,y:0,z:0});else{const i=Math.PI*(3-Math.sqrt(5)),o=Math.max(1.2,e*.25);for(let s=0;s<e;s++){const r=1-s/(e-1)*2,a=Math.sqrt(1-r*r),c=i*s;t.push({x:Math.cos(c)*a*o,y:r*o,z:Math.sin(c)*a*o})}}return t}function fE(n){let e=!0;for(;e;){e=!1;for(let i=0;i<n.length&&!e;i++)for(let o=i+1;o<n.length&&!e;o++){const s=n[i],r=n[o],a=j.get(s),c=j.get(r);if(!a||!c||[...gt.values()].some(u=>u.a===s&&u.b===r||u.a===r&&u.b===s)||Math.hypot(a.pos.x-c.pos.x,a.pos.y-c.pos.y,a.pos.z-c.pos.z)>2.5)continue;const d=ec(j,gt,s,r);if(d.ok||window.__mol3d?._godMode){const u=ve++;gt.set(u,{id:u,a:s,b:r,order:1,ionic:d.type==="ionic"}),e=!0}}}}window.__mol3d={atoms:j,bonds:gt,overrides:Yt,movement:ss,camera:He,controls:dn,kinetics:{createSimulation:QS,compileNetwork:lm,parseRateExpr:cm,rk4Step:um},analyses:()=>ze,comps:()=>re,spawnAtom:fo,reanalyze:Qt,selectAtom:Ps,undo:qu,clearAll:Js,help:()=>(console.log("%c🧪 Mol3D Console API","color: #4CAF50; font-weight: bold; font-size: 14px;"),console.log("%cCore:","color: #2196F3; font-weight: bold;"),console.log('  __mol3d.spawnAtom(el) — Spawn an atom (e.g., "C", "O", "H")'),console.log("  __mol3d.clearAll() — Clear all atoms"),console.log("  __mol3d.undo() — Undo last action"),console.log("  __mol3d.selectAtom(id) — Select atom by ID"),console.log("  __mol3d.reanalyze() — Re-analyze molecules"),console.log("  __mol3d.discoveries() — List discoveries"),console.log("  __mol3d.analyses() — Get current analyses"),console.log("%cHacks:","color: #ff9800; font-weight: bold;"),console.log("  __mol3d.hacks.chaos(count) — Spawn random atoms"),console.log('  __mol3d.hacks.spawnMolecule(formula) — Spawn by formula (e.g., "C2H6O")'),console.log("  __mol3d.hacks.dna(length) — Create DNA helix"),console.log("  __mol3d.hacks.firework(count) — Explosion pattern"),console.log("  __mol3d.hacks.party() — Dancing atoms"),console.log("  __mol3d.hacks.godMode() / mortalMode() — Toggle validation"),console.log("  __mol3d.hacks.explosion(force) / implode() — Position effects"),console.log("  __mol3d.hacks.giant() / tiny() — Scale atoms"),console.log("  __mol3d.hacks.matrix() / rainbow() / disco() — Visual effects"),console.log("  __mol3d.hacks.blackHole() / antiGravity() / quantum() — Physics"),console.log("  __mol3d.hacks.clone(times) — Clone selected atom"),console.log("  __mol3d.hacks.mirror() — Mirror all atoms"),console.log("  __mol3d.hacks.unlockAll() — Unlock all discoveries"),console.log("  __mol3d.hacks.slowmo() / fastforward() / normalSpeed() — Time control"),"API listed above"),screenPosOf:n=>{const t=j.get(n);if(!t)return null;const e=new P(t.pos.x,t.pos.y,t.pos.z).project(He),i=en.domElement.getBoundingClientRect();return{x:(e.x+1)/2*i.width+i.left,y:(-e.y+1)/2*i.height+i.top}},devBond:(n,t)=>Am(n,t),devUpgrade:n=>Rm(n),reaction:{selectByFormula:n=>{for(const t of re){const e=be(t);if(qe.has(e))continue;const i=re.indexOf(t);if(ze[i]?.displayFormula===n||ze[i]?.formula===n)return qe.add(e),ju(),Ar(),cn(),!0}return!1},pick:n=>{const t=Yu(),e=oc(t,n,yr());if(e)return Lm(e),e.equation;const i=tm(t,yr());return i.size?`wrong-condition:${[...i].join(",")}`:"none"},clear:$n},setQuality:bm,quality:()=>Er,tierKey:()=>Ro[As],discoveries:()=>[...Pe],saveDiscoveries:lu,driftVelocity:n=>{const t=yo(j,gt,n);if(!t)return null;const e=Ci.get(be(t));return e?{x:e.v.x,y:e.v.y,z:e.v.z}:null},stepAnim:n=>{const t=Im(n),e=Jm(n);return cc(),Em(),en.render(Me,He),{drift:t,lerp:e}},hacks:{unlimitedBonds:()=>(window.__mol3d._godMode=!0,console.log("%c🔓 UNLIMITED BONDS ENABLED! Chemistry rules no longer apply.","color: #ff9800; font-weight: bold; font-size: 14px;"),console.log("Warning: Molecules may become impossible. Use at your own risk!"),"God mode activated"),godMode:()=>(window.__mol3d._godMode=!0,console.log("%c⚡ GOD MODE ACTIVATED!","color: #ff0000; font-weight: bold; font-size: 16px; text-shadow: 2px 2px #000;"),console.log("All validation disabled. Spawn impossible molecules!"),"God mode on"),mortalMode:()=>(window.__mol3d._godMode=!1,console.log("%c✓ Back to normal chemistry rules","color: #4CAF50; font-weight: bold;"),"God mode off"),clearScene:()=>(Js(),console.log("%c Scene cleared","color: #2196F3; font-weight: bold;"),"Scene cleared"),chaos:(n=20)=>{console.log(`%c🌪 CHAOS MODE! Spawning ${n} random atoms...`,"color: #9c27b0; font-weight: bold; font-size: 14px;");for(let t=0;t<n;t++){const e=Hn[Math.floor(Math.random()*Hn.length)];fo(e)}return`Spawned ${n} random atoms`},party:()=>{console.log("%c🎉 PARTY MODE! Let's dance!","color: #e91e63; font-weight: bold; font-size: 16px;");let n=0;const t=setInterval(()=>{for(const[e,i]of j)i.pos.x+=Math.sin(n+e)*.1,i.pos.y+=Math.cos(n+e)*.1;n+=.2,Qt()},50);return setTimeout(()=>clearInterval(t),5e3),"Party for 5 seconds!"},matrix:()=>(console.log("%c💚 MATRIX MODE - Welcome to the Matrix, Neo...","color: #00ff00; font-weight: bold; font-size: 14px; font-family: monospace;"),document.body.style.filter="hue-rotate(90deg) saturate(3) brightness(0.8)",setTimeout(()=>document.body.style.filter="",1e4),"Matrix mode for 10 seconds"),rainbow:()=>{console.log("%c🌈 RAINBOW MODE!","color: #ff0000; font-weight: bold; font-size: 16px; text-shadow: 1px 1px #ff0, -1px -1px #0f0, 1px -1px #00f;");let n=0;const t=setInterval(()=>{document.body.style.filter=`hue-rotate(${n}deg)`,n=(n+10)%360},100);return setTimeout(()=>{clearInterval(t),document.body.style.filter=""},1e4),"Rainbow for 10 seconds"},giant:()=>{console.log("%c🦣 GIANT MODE!","color: #795548; font-weight: bold; font-size: 16px;");for(const[n,t]of j)t.pos.x*=3,t.pos.y*=3,t.pos.z*=3;return Qt(),"Atoms scaled 3x"},tiny:()=>{console.log("%c🔬 TINY MODE!","color: #2196f3; font-weight: bold; font-size: 16px;");for(const[n,t]of j)t.pos.x/=3,t.pos.y/=3,t.pos.z/=3;return Qt(),"Atoms scaled 1/3x"},explosion:(n=5)=>{console.log(`%c💥 EXPLOSION! Force: ${n}`,"color: #ff5722; font-weight: bold; font-size: 16px;");for(const[t,e]of j){const i=e.pos.x||.1,o=e.pos.y||.1,s=e.pos.z||.1,r=Math.sqrt(i*i+o*o+s*s)||1;e.pos.x+=i/r*n,e.pos.y+=o/r*n,e.pos.z+=s/r*n}return Qt(),"BOOM!"},implode:()=>{console.log("%c🕳️ IMPLODE! All atoms to center!","color: #000000; font-weight: bold; font-size: 16px; background: #fff;");for(const[n,t]of j)t.pos.x*=.1,t.pos.y*=.1,t.pos.z*=.1;return Qt(),"Collapsed to center"},clone:(n=5)=>{if(ue===null)return console.error("No atom selected! Select an atom first."),"Error: no selection";console.log(`%c👯 CLONING atom ${ue} x${n}!`,"color: #00bcd4; font-weight: bold; font-size: 14px;");const t=j.get(ue);for(let e=0;e<n;e++){const i=fo(t.el),o=j.get(i);o.pos.x=t.pos.x+(Math.random()-.5)*2,o.pos.y=t.pos.y+(Math.random()-.5)*2,o.pos.z=t.pos.z+(Math.random()-.5)*2}return Qt(),`Cloned ${n} times`},dna:(n=20)=>{console.log(`%c🧬 DNA MODE! Creating helix with ${n} atoms...`,"color: #3f51b5; font-weight: bold; font-size: 14px;"),Js();const t=[];for(let e=0;e<n;e++){const i=e/n*Math.PI*4,o=e%2===0?Hn.find(a=>a.sym==="C"):Hn.find(a=>a.sym==="O"),s=ve++,r={x:Math.cos(i)*2,y:e*.5,z:Math.sin(i)*2};j.set(s,{id:s,el:o,pos:r}),t.push(s)}for(let e=0;e<t.length-1;e++){const i=t[e],o=t[e+1],s=ec(j,gt,i,o);if(s.ok||window.__mol3d?._godMode){const r=ve++;gt.set(r,{id:r,a:i,b:o,order:1,ionic:s.type==="ionic"})}}return Qt(),`DNA helix created with ${t.length} atoms and bonds`},firework:(n=30)=>{console.log(`%c🎆 FIREWORK! Spawning ${n} atoms in explosion pattern...`,"color: #ff9800; font-weight: bold; font-size: 14px;");const t={x:0,y:0,z:0};for(let e=0;e<n;e++){const i=Hn[Math.floor(Math.random()*5)],o=fo(i),s=j.get(o),r=Math.random()*Math.PI*2,a=Math.random()*Math.PI,c=2+Math.random()*3;s.pos.x=t.x+c*Math.sin(a)*Math.cos(r),s.pos.y=t.y+c*Math.sin(a)*Math.sin(r),s.pos.z=t.z+c*Math.cos(a)}return Qt(),"Firework!"},blackHole:()=>{console.log("%c🕳️ BLACK HOLE! All atoms attracted to center...","color: #000; font-weight: bold; font-size: 16px; background: linear-gradient(45deg, #000, #333); padding: 5px;");let n=0;const t=setInterval(()=>{for(const[e,i]of j)i.pos.x*=.95,i.pos.y*=.95,i.pos.z*=.95;Qt(),n++,n>50&&clearInterval(t)},100);return"Black hole active for 5 seconds"},antiGravity:()=>{console.log("%c🚀 ANTI-GRAVITY! Atoms float upward!","color: #00bcd4; font-weight: bold; font-size: 14px;");let n=0;const t=setInterval(()=>{for(const[e,i]of j)i.pos.y+=.2;Qt(),n++,n>50&&clearInterval(t)},100);return"Anti-gravity for 5 seconds"},quantum:()=>{console.log("%c⚛️ QUANTUM MODE! Atoms teleport randomly!","color: #9c27b0; font-weight: bold; font-size: 14px;");let n=0;const t=setInterval(()=>{for(const[e,i]of j)Math.random()<.3&&(i.pos.x+=(Math.random()-.5)*2,i.pos.y+=(Math.random()-.5)*2,i.pos.z+=(Math.random()-.5)*2);Qt(),n++,n>30&&clearInterval(t)},200);return"Quantum teleportation for 6 seconds"},unlockAll:()=>{console.log("%c🔓 UNLOCKING ALL DISCOVERIES!","color: #ffd700; font-weight: bold; font-size: 16px;");for(const n of Ql)Ei.has(n.formula)||(Ei.add(n.formula),Pe.push({formula:n.formula,charge:0,saved:!0}));return Os(),lu(),`Unlocked ${Ql.length} discoveries!`},spawnMolecule:n=>{console.log(`%c🧪 Spawning molecule: ${n}`,"color: #4CAF50; font-weight: bold; font-size: 14px;"),Js();const t=[],e=/([A-Z][a-z]?)(\d*)/g;let i;for(;(i=e.exec(n))!==null;){if(!i[1])continue;const a=i[1],c=i[2]?parseInt(i[2]):1;for(let l=0;l<c;l++)t.push(a)}if(t.length===0)return console.error(`Could not parse formula: ${n}`),"Parse error";const o=[],s=dE(t);for(let a=0;a<t.length;a++){const c=t[a],l=Hn.find(u=>u.sym===c);if(!l){console.warn(`Element ${c} not found, skipping`);continue}const h=ve++,d=s[a]||{x:a%5*1.5-3,y:0,z:Math.floor(a/5)*1.5};j.set(h,{id:h,el:l,pos:d}),o.push(h)}fE(o),Qt();const r=[...gt.values()].filter(a=>o.includes(a.a)&&o.includes(a.b)).length;return`Spawned ${n} with ${o.length} atoms and ${r} bonds`},mirror:()=>{if(j.size===0)return console.error("No atoms to mirror!"),"Error: empty";console.log("%c🪞 MIRROR MODE! Creating mirror copy...","color: #607d8b; font-weight: bold; font-size: 14px;");const n=[...j.values()];for(const t of n){const e=fo(t.el),i=j.get(e);i.pos.x=-t.pos.x,i.pos.y=t.pos.y,i.pos.z=t.pos.z}return Qt(),"Mirror created (X-axis flip)"},disco:()=>{console.log("%c🕺 DISCO MODE! Flashing colors!","color: #ff00ff; font-weight: bold; font-size: 16px;");const n=["#ff0000","#00ff00","#0000ff","#ffff00","#ff00ff","#00ffff"];let t=0;const e=setInterval(()=>{document.body.style.backgroundColor=n[t%n.length],t++},200);return setTimeout(()=>{clearInterval(e),document.body.style.backgroundColor=""},5e3),"Disco for 5 seconds!"},slowmo:()=>(console.log("%c🐌 SLOW-MO MODE!","color: #2196f3; font-weight: bold; font-size: 14px;"),window.__mol3d._timeScale=.2,"Time scale: 0.2x"),fastforward:()=>(console.log("%c⚡ FAST-FORWARD MODE!","color: #ff9800; font-weight: bold; font-size: 14px;"),window.__mol3d._timeScale=3,"Time scale: 3x"),normalSpeed:()=>(window.__mol3d._timeScale=1,console.log("%c✓ Normal speed restored","color: #4CAF50; font-weight: bold;"),"Time scale: 1x")},scene:Me,renderer:en,ELEMENTS:Hn};console.log("%c🧪 Mol3D loaded! Type %c__mol3d.help()%c for console API","color: #4CAF50; font-weight: bold;","color: #2196F3; font-weight: bold;","color: #4CAF50;");Ou();aE();Eb();$a();Hm();Nb();eE();hc();Os();sh();rh();ac();Qt();requestAnimationFrame(Qm);XS();function sh(){document.getElementById("btn-undo").disabled=sr.length===0}function rh(){const n=ue!==null;document.getElementById("btn-delete").disabled=!n,document.getElementById("btn-duplicate").disabled=!n}const pE=Object.assign({"./assets/music/Fragments by @AERØHEAD 🇺🇸.mp3":rg,"./assets/music/IN MEMORIAM by Onycs 🇫🇷.mp3":ag,"./assets/music/Imphenzia - Discovery Of Planet X.mp3":cg,"./assets/music/No.10 A New Beginning.mp3":lg,"./assets/music/Travis Fitzsimmons - Painting The Solar System.mp3":ug}),ts=Object.entries(pE).map(([n,t])=>{const e=n.split("/").pop().replace(/\.[^.]+$/,"");return{path:t,name:e}}).sort((n,t)=>n.name.localeCompare(t.name));let js=0;const di=new Audio;di.style.display="none";document.body.appendChild(di);function mE(){if(ts.length===0)return;const n=document.getElementById("volume-slider"),t=document.getElementById("now-playing"),e=(()=>{try{return localStorage.getItem("mol3d.volume")}catch{return null}})(),i=e!==null?Number(e):50;di.volume=i/100,n&&(n.value=i),n&&n.addEventListener("input",()=>{di.volume=n.value/100;try{localStorage.setItem("mol3d.volume",n.value)}catch{}});function o(){t&&ts[js]&&(t.textContent=`"${ts[js].name}"`)}di.src=ts[0].path,o(),di.addEventListener("ended",()=>{js=(js+1)%ts.length,di.src=ts[js].path,o(),di.play().catch(()=>{})});const s=()=>{di.play().catch(()=>{}),document.removeEventListener("click",s),document.removeEventListener("keydown",s),document.removeEventListener("touchstart",s)};document.addEventListener("click",s),document.addEventListener("keydown",s),document.addEventListener("touchstart",s)}(function(){const t=document.getElementById("btn-quest"),e=document.getElementById("quest-panel"),i=document.getElementById("quest-messages"),o=document.getElementById("quest-input"),s=document.getElementById("quest-send"),r=document.getElementById("quest-clear"),a=document.getElementById("quest-close");if(!t||!e)return;const c=[];t.addEventListener("click",async()=>{if(typeof puter>"u"||!puter.auth){l("system","❌ Puter.js not loaded. Please refresh the page."),e.hidden=!1,t.classList.add("active");return}if(!await puter.auth.isSignedIn()){e.hidden=!1,t.classList.add("active"),i.innerHTML="",l("system","🔐 Sign in required to use AI Quest Guide"),l("system","Click the button below to sign in with your Puter account (free):");const _=document.createElement("button");_.className="quest-signin-btn",_.textContent="🔑 Sign in with Puter",_.style.cssText="background: var(--accent); color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 14px; margin: 16px auto; display: block;",_.onclick=async()=>{try{await puter.auth.signIn(),await puter.auth.isSignedIn()&&(i.innerHTML="",l("system","✅ Signed in successfully! AI Quest Guide is now available."),l("system",' Ask me about chemistry, molecules, or reactions. Try: "Build water" or "Create methane"'))}catch(g){l("system","❌ Sign-in failed: "+(g.message||"Unknown error"))}},i.appendChild(_);return}e.hidden=!e.hidden,t.classList.toggle("active",!e.hidden),!e.hidden&&i.children.length===0&&l("system",'🧪 AI Quest Guide activated! I can answer chemistry questions AND build molecules for you. Try: "Build water" or "Create methane"')}),a.addEventListener("click",()=>{e.hidden=!0,t.classList.remove("active")}),r.addEventListener("click",()=>{i.innerHTML="",c.length=0,l("system","Chat cleared.")}),s.addEventListener("click",f),o.addEventListener("keydown",m=>{m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),f())});function l(m,_){const g=document.createElement("div");return g.className=`quest-msg ${m}`,g.textContent=_,i.appendChild(g),i.scrollTop=i.scrollHeight,g}function h(){const m={totalAtoms:j.size,totalBonds:gt.size,discoveries:Pe.length,recentDiscoveries:Pe.slice(-5).map(_=>_.formula||_.name)};return Pe.length>0&&(m.currentMolecules=Pe.slice(-3).map(_=>({formula:_.formula,name:_.name,charge:_.charge||0}))),m}function d(m){try{const{command:_,args:g}=m;switch(_){case"spawnAtom":if(window.__mol3d?.spawnAtom)return window.__mol3d.spawnAtom(g.element),`✓ Spawned ${g.element} atom`;break;case"spawnMolecule":if(window.__mol3d?.hacks?.spawnMolecule)return window.__mol3d.hacks.spawnMolecule(g.formula),`✓ Built ${g.formula} molecule`;break;case"clearScene":if(window.__mol3d?.hacks?.clearScene)return window.__mol3d.hacks.clearScene(),"✓ Cleared the scene";break;case"godMode":if(window.__mol3d?.hacks?.godMode)return window.__mol3d.hacks.godMode(),"⚡ God mode activated - no validation limits";break;case"mortalMode":if(window.__mol3d?.hacks?.mortalMode)return window.__mol3d.hacks.mortalMode(),"✓ Back to normal chemistry rules";break}return`⚠ Unknown action: ${_}`}catch(_){return`❌ Action failed: ${_.message}`}}function u(m){const _=/\[ACTION:(\w+):([^\]]+)\]/g;let g;const p=[];for(;(g=_.exec(m))!==null;){const[,y,M]=g,x={};M.split(",").forEach(v=>{const[b,w]=v.split("=").map(S=>S.trim());b&&w&&(x[b]=w)});const T=d({command:y,args:x});p.push(T)}return p}async function f(){const m=o.value.trim();if(!m)return;o.value="",l("user",m),c.push({role:"user",content:m});const _=l("typing","Thinking...");s.disabled=!0;try{const g=h(),y=[{role:"system",content:`You are an AI chemistry guide for a 3D molecule builder app. You can BOTH answer questions AND take actions to build molecules.

Current scene:
- Atoms: ${g.totalAtoms}
- Bonds: ${g.totalBonds}
- Discoveries: ${g.discoveries}
${g.currentMolecules?`- Molecules: ${g.currentMolecules.map(v=>v.formula).join(", ")}`:""}

AVAILABLE ACTIONS (use when user asks you to build/create something):
- [ACTION:spawnMolecule:formula=H2O] - Build a complete molecule
- [ACTION:spawnAtom:element=O] - Add a single atom
- [ACTION:clearScene] - Clear all atoms
- [ACTION:godMode] - Disable validation (for impossible molecules)
- [ACTION:mortalMode] - Re-enable validation

RULES:
1. When asked to build/create a molecule, use [ACTION:spawnMolecule:formula=...] 
2. Explain what you're building and why
3. Keep responses under 3 sentences
4. Use actions when appropriate, but also explain the chemistry
5. If a molecule violates chemistry rules, warn the user and offer godMode

Examples:
User: "Build water"
You: "I'll create H₂O for you - oxygen forms 2 bonds with hydrogen.[ACTION:spawnMolecule:formula=H2O]"

User: "What's methane?"
You: "Methane (CH₄) is the simplest hydrocarbon - carbon bonded to 4 hydrogens in a tetrahedral shape. Want me to build it?[ACTION:spawnMolecule:formula=CH4]"`},...c.slice(-10)],M=await puter.ai.chat(y,{model:"claude-3-haiku"});_.remove();const x=M?.message?.content||M?.toString()||"I could not process that request.",T=u(x);l("ai",x.replace(/\[ACTION:[^\]]+\]/g,"").trim()),T.length>0&&T.forEach(v=>{l("system",v)}),c.push({role:"assistant",content:x})}catch(g){_.remove(),console.error("Quest AI error:",g),l("ai","❌ Error: "+(g.message||"Could not connect to AI service."))}finally{s.disabled=!1,o.focus()}}})();mE();
