(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const mp=""+new URL("Fragments by @AERØHEAD 🇺🇸-CH6-KLJc.mp3",import.meta.url).href,gp=""+new URL("IN MEMORIAM by Onycs 🇫🇷-D1XmzUWE.mp3",import.meta.url).href,_p=""+new URL("Imphenzia - Discovery Of Planet X-D4ILWVv0.mp3",import.meta.url).href,yp=""+new URL("No.10 A New Beginning-CKeYDUKG.mp3",import.meta.url).href,xp=""+new URL("Travis Fitzsimmons - Painting The Solar System-Icomd7I4.mp3",import.meta.url).href;const nc="180",Rs={ROTATE:0,DOLLY:1,PAN:2},Cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vp=0,Zc=1,Mp=2,Gh=1,Sp=2,Kn=3,Ci=0,Ye=1,Jn=2,vi=0,Ps=1,Jc=2,Qc=3,tu=4,bp=5,Hi=100,Ep=101,Cp=102,Tp=103,Ap=104,wp=200,Rp=201,Pp=202,Ip=203,Za=204,Ja=205,Lp=206,Op=207,Dp=208,Np=209,Up=210,Fp=211,Hp=212,Bp=213,kp=214,Qa=0,tl=1,el=2,Ds=3,nl=4,il=5,sl=6,rl=7,ko=0,zp=1,Vp=2,Mi=0,Gp=1,Wp=2,Xp=3,qp=4,$p=5,Yp=6,Kp=7,Wh=300,Ns=301,Us=302,ol=303,al=304,zo=306,ll=1e3,zi=1001,cl=1002,sn=1003,jp=1004,Nr=1005,Bn=1006,aa=1007,Vi=1008,Vn=1009,Xh=1010,qh=1011,gr=1012,ic=1013,$i=1014,kn=1015,Cr=1016,sc=1017,rc=1018,_r=1020,$h=35902,Yh=35899,Kh=1021,jh=1022,Tn=1023,yr=1026,xr=1027,oc=1028,ac=1029,Zh=1030,lc=1031,cc=1033,po=33776,mo=33777,go=33778,_o=33779,ul=35840,hl=35841,dl=35842,fl=35843,pl=36196,ml=37492,gl=37496,_l=37808,yl=37809,xl=37810,vl=37811,Ml=37812,Sl=37813,bl=37814,El=37815,Cl=37816,Tl=37817,Al=37818,wl=37819,Rl=37820,Pl=37821,Il=36492,Ll=36494,Ol=36495,Dl=36283,Nl=36284,Ul=36285,Fl=36286,Zp=3200,Jp=3201,uc=0,Qp=1,pi="",un="srgb",Fs="srgb-linear",bo="linear",re="srgb",is=7680,eu=519,tm=512,em=513,nm=514,Jh=515,im=516,sm=517,rm=518,om=519,Hl=35044,am=35048,nu="300 es",zn=2e3,Eo=2001;class Qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yo=Math.PI/180,Bl=180/Math.PI;function Si(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]).toLowerCase()}function Xt(n,t,e){return Math.max(t,Math.min(e,n))}function lm(n,t){return(n%t+t)%t}function la(n,t,e){return(1-e)*n+e*t}function Fn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function oe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const cm={DEG2RAD:yo};class wt{constructor(t=0,e=0){wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class si{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==f||l!==p||u!==g){let m=1-a;const d=c*f+l*p+u*g+h*_,b=d>=0?1:-1,C=1-d*d;if(C>Number.EPSILON){const R=Math.sqrt(C),v=Math.atan2(R,d*b);m=Math.sin(m*v)/R,a=Math.sin(a*v)/R}const M=a*b;if(c=c*m+f*M,l=l*m+p*M,u=u*m+g*M,h=h*m+_*M,m===1-a){const R=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=R,l*=R,u*=R,h*=R}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*p-l*f,t[e+1]=c*g+u*f+l*h-a*p,t[e+2]=l*g+u*p+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),f=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(iu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(iu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ca.copy(this).projectOnVector(t),this.sub(ca)}reflect(t){return this.sub(ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ca=new L,iu=new si;class kt{constructor(t,e,i,s,r,o,a,c,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],_=s[0],m=s[3],d=s[6],b=s[1],C=s[4],M=s[7],R=s[2],v=s[5],x=s[8];return r[0]=o*_+a*b+c*R,r[3]=o*m+a*C+c*v,r[6]=o*d+a*M+c*x,r[1]=l*_+u*b+h*R,r[4]=l*m+u*C+h*v,r[7]=l*d+u*M+h*x,r[2]=f*_+p*b+g*R,r[5]=f*m+p*C+g*v,r[8]=f*d+p*M+g*x,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,p=l*r-o*c,g=e*h+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*l-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*c-l*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ua.makeScale(t,e)),this}rotate(t){return this.premultiply(ua.makeRotation(-t)),this}translate(t,e){return this.premultiply(ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ua=new kt;function Qh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Co(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function um(){const n=Co("canvas");return n.style.display="block",n}const su={};function vr(n){n in su||(su[n]=!0,console.warn(n))}function hm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const ru=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ou=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dm(){const n={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===re&&(s.r=ni(s.r),s.g=ni(s.g),s.b=ni(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===re&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pi?bo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return vr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return vr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Fs]:{primaries:t,whitePoint:i,transfer:bo,toXYZ:ru,fromXYZ:ou,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:t,whitePoint:i,transfer:re,toXYZ:ru,fromXYZ:ou,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),n}const Qt=dm();function ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ss;class fm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ss===void 0&&(ss=Co("canvas")),ss.width=t.width,ss.height=t.height;const s=ss.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ss}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Co("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ni(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ni(e[i]/255)*255):e[i]=ni(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pm=0;class hc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=Si(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ha(s[o].image)):r.push(ha(s[o]))}else r=ha(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function ha(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mm=0;const da=new L;class We extends Qi{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,i=zi,s=zi,r=Bn,o=Vi,a=Tn,c=Vn,l=We.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=Si(),this.name="",this.source=new hc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(da).x}get height(){return this.source.getSize(da).y}get depth(){return this.source.getSize(da).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ll:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case cl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ll:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case cl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Wh;We.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,i=0,s=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const C=(l+1)/2,M=(p+1)/2,R=(d+1)/2,v=(u+f)/4,x=(h+_)/4,A=(g+m)/4;return C>M&&C>R?C<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(C),s=v/i,r=x/i):M>R?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=v/s,r=A/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=x/r,s=A/r),this.set(i,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-_)/b,this.z=(f-u)/b,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gm extends Qi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new We(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new hc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends gm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class td extends We{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _m extends We{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ur.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ur.copy(i.boundingBox)),Ur.applyMatrix4(t.matrixWorld),this.union(Ur)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),Fr.subVectors(this.max,Ys),rs.subVectors(t.a,Ys),os.subVectors(t.b,Ys),as.subVectors(t.c,Ys),li.subVectors(os,rs),ci.subVectors(as,os),Ii.subVectors(rs,as);let e=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Ii.z,Ii.y,li.z,0,-li.x,ci.z,0,-ci.x,Ii.z,0,-Ii.x,-li.y,li.x,0,-ci.y,ci.x,0,-Ii.y,Ii.x,0];return!fa(e,rs,os,as,Fr)||(e=[1,0,0,0,1,0,0,0,1],!fa(e,rs,os,as,Fr))?!1:(Hr.crossVectors(li,ci),e=[Hr.x,Hr.y,Hr.z],fa(e,rs,os,as,Fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Wn=[new L,new L,new L,new L,new L,new L,new L,new L],xn=new L,Ur=new ts,rs=new L,os=new L,as=new L,li=new L,ci=new L,Ii=new L,Ys=new L,Fr=new L,Hr=new L,Li=new L;function fa(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Li.fromArray(n,r);const a=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),c=t.dot(Li),l=e.dot(Li),u=i.dot(Li);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const ym=new ts,Ks=new L,pa=new L;class Ws{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):ym.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);const e=Ks.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ks,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(pa)),this.expandByPoint(Ks.copy(t.center).sub(pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Xn=new L,ma=new L,Br=new L,ui=new L,ga=new L,kr=new L,_a=new L;class Vo{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ma.copy(t).add(e).multiplyScalar(.5),Br.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(ma);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Br),a=ui.dot(this.direction),c=-ui.dot(Br),l=ui.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ma).addScaledVector(Br,f),p}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);const i=Xn.dot(this.direction),s=Xn.dot(Xn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,i,s,r){ga.subVectors(e,t),kr.subVectors(i,t),_a.crossVectors(ga,kr);let o=this.direction.dot(_a),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ui.subVectors(this.origin,t);const c=a*this.direction.dot(kr.crossVectors(ui,kr));if(c<0)return null;const l=a*this.direction.dot(ga.cross(ui));if(l<0||c+l>o)return null;const u=-a*ui.dot(_a);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,i,s,r,o,a,c,l,u,h,f,p,g,_,m){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,h,f,p,g,_,m)}set(t,e,i,s,r,o,a,c,l,u,h,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ls.setFromMatrixColumn(t,0).length(),r=1/ls.setFromMatrixColumn(t,1).length(),o=1/ls.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,p=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,p=c*h,g=l*u,_=l*h;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,p=c*h,g=l*u,_=l*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,p=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=g*l-p,e[8]=f*l+_,e[1]=c*h,e[5]=_*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-f*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+_,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xm,t,vm)}lookAt(t,e,i){const s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),hi.crossVectors(i,en),hi.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),hi.crossVectors(i,en)),hi.normalize(),zr.crossVectors(en,hi),s[0]=hi.x,s[4]=zr.x,s[8]=en.x,s[1]=hi.y,s[5]=zr.y,s[9]=en.y,s[2]=hi.z,s[6]=zr.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],b=i[3],C=i[7],M=i[11],R=i[15],v=s[0],x=s[4],A=s[8],y=s[12],E=s[1],w=s[5],O=s[9],H=s[13],k=s[2],G=s[6],B=s[10],Y=s[14],W=s[3],st=s[7],rt=s[11],bt=s[15];return r[0]=o*v+a*E+c*k+l*W,r[4]=o*x+a*w+c*G+l*st,r[8]=o*A+a*O+c*B+l*rt,r[12]=o*y+a*H+c*Y+l*bt,r[1]=u*v+h*E+f*k+p*W,r[5]=u*x+h*w+f*G+p*st,r[9]=u*A+h*O+f*B+p*rt,r[13]=u*y+h*H+f*Y+p*bt,r[2]=g*v+_*E+m*k+d*W,r[6]=g*x+_*w+m*G+d*st,r[10]=g*A+_*O+m*B+d*rt,r[14]=g*y+_*H+m*Y+d*bt,r[3]=b*v+C*E+M*k+R*W,r[7]=b*x+C*w+M*G+R*st,r[11]=b*A+C*O+M*B+R*rt,r[15]=b*y+C*H+M*Y+R*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*c*h-s*l*h-r*a*f+i*l*f+s*a*p-i*c*p)+_*(+e*c*p-e*l*f+r*o*f-s*o*p+s*l*u-r*c*u)+m*(+e*l*h-e*a*p-r*o*h+i*o*p+r*a*u-i*l*u)+d*(-s*a*u-e*c*h+e*a*f+s*o*h-i*o*f+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],b=h*m*l-_*f*l+_*c*p-a*m*p-h*c*d+a*f*d,C=g*f*l-u*m*l-g*c*p+o*m*p+u*c*d-o*f*d,M=u*_*l-g*h*l+g*a*p-o*_*p-u*a*d+o*h*d,R=g*h*c-u*_*c-g*a*f+o*_*f+u*a*m-o*h*m,v=e*b+i*C+s*M+r*R;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=b*x,t[1]=(_*f*r-h*m*r-_*s*p+i*m*p+h*s*d-i*f*d)*x,t[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*d+i*c*d)*x,t[3]=(h*c*r-a*f*r-h*s*l+i*f*l+a*s*p-i*c*p)*x,t[4]=C*x,t[5]=(u*m*r-g*f*r+g*s*p-e*m*p-u*s*d+e*f*d)*x,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*d-e*c*d)*x,t[7]=(o*f*r-u*c*r+u*s*l-e*f*l-o*s*p+e*c*p)*x,t[8]=M*x,t[9]=(g*h*r-u*_*r-g*i*p+e*_*p+u*i*d-e*h*d)*x,t[10]=(o*_*r-g*a*r+g*i*l-e*_*l-o*i*d+e*a*d)*x,t[11]=(u*a*r-o*h*r-u*i*l+e*h*l+o*i*p-e*a*p)*x,t[12]=R*x,t[13]=(u*_*s-g*h*s+g*i*f-e*_*f-u*i*m+e*h*m)*x,t[14]=(g*a*s-o*_*s-g*i*c+e*_*c+o*i*m-e*a*m)*x,t[15]=(o*h*s-u*a*s+u*i*c-e*h*c-o*i*f+e*a*f)*x,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,p=r*u,g=r*h,_=o*u,m=o*h,d=a*h,b=c*l,C=c*u,M=c*h,R=i.x,v=i.y,x=i.z;return s[0]=(1-(_+d))*R,s[1]=(p+M)*R,s[2]=(g-C)*R,s[3]=0,s[4]=(p-M)*v,s[5]=(1-(f+d))*v,s[6]=(m+b)*v,s[7]=0,s[8]=(g+C)*x,s[9]=(m-b)*x,s[10]=(1-(f+_))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=ls.set(s[0],s[1],s[2]).length();const o=ls.set(s[4],s[5],s[6]).length(),a=ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],vn.copy(this);const l=1/r,u=1/o,h=1/a;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,e.setFromRotationMatrix(vn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=zn,c=!1){const l=this.elements,u=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),p=(i+s)/(i-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===zn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Eo)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=zn,c=!1){const l=this.elements,u=2/(e-t),h=2/(i-s),f=-(e+t)/(e-t),p=-(i+s)/(i-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===zn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Eo)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ls=new L,vn=new le,xm=new L(0,0,0),vm=new L(1,1,1),hi=new L,zr=new L,en=new L,au=new le,lu=new si;class Pn{constructor(t=0,e=0,i=0,s=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return au.makeRotationFromQuaternion(t),this.setFromRotationMatrix(au,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lu.setFromEuler(this),this.setFromQuaternion(lu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class dc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Mm=0;const cu=new L,cs=new si,qn=new le,Vr=new L,js=new L,Sm=new L,bm=new si,uu=new L(1,0,0),hu=new L(0,1,0),du=new L(0,0,1),fu={type:"added"},Em={type:"removed"},us={type:"childadded",child:null},ya={type:"childremoved",child:null};class Ie extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new L,e=new Pn,i=new si,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new kt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(uu,t)}rotateY(t){return this.rotateOnAxis(hu,t)}rotateZ(t){return this.rotateOnAxis(du,t)}translateOnAxis(t,e){return cu.copy(t).applyQuaternion(this.quaternion),this.position.add(cu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uu,t)}translateY(t){return this.translateOnAxis(hu,t)}translateZ(t){return this.translateOnAxis(du,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Vr.copy(t):Vr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(js,Vr,this.up):qn.lookAt(Vr,js,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),cs.setFromRotationMatrix(qn),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fu),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Em),ya.child=t,this.dispatchEvent(ya),ya.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fu),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,t,Sm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,bm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ie.DEFAULT_UP=new L(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new L,$n=new L,xa=new L,Yn=new L,hs=new L,ds=new L,pu=new L,va=new L,Ma=new L,Sa=new L,ba=new Ee,Ea=new Ee,Ca=new Ee;class fn{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Mn.subVectors(t,e),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Mn.subVectors(s,e),$n.subVectors(i,e),xa.subVectors(t,e);const o=Mn.dot(Mn),a=Mn.dot($n),c=Mn.dot(xa),l=$n.dot($n),u=$n.dot(xa),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Yn.x),c.addScaledVector(o,Yn.y),c.addScaledVector(a,Yn.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return ba.setScalar(0),Ea.setScalar(0),Ca.setScalar(0),ba.fromBufferAttribute(t,e),Ea.fromBufferAttribute(t,i),Ca.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ba,r.x),o.addScaledVector(Ea,r.y),o.addScaledVector(Ca,r.z),o}static isFrontFacing(t,e,i,s){return Mn.subVectors(i,e),$n.subVectors(t,e),Mn.cross($n).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Mn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return fn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;hs.subVectors(s,i),ds.subVectors(r,i),va.subVectors(t,i);const c=hs.dot(va),l=ds.dot(va);if(c<=0&&l<=0)return e.copy(i);Ma.subVectors(t,s);const u=hs.dot(Ma),h=ds.dot(Ma);if(u>=0&&h<=u)return e.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(hs,o);Sa.subVectors(t,r);const p=hs.dot(Sa),g=ds.dot(Sa);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(ds,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return pu.subVectors(r,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(pu,a);const d=1/(m+_+f);return o=_*d,a=f*d,e.copy(i).addScaledVector(hs,o).addScaledVector(ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function Ta(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class It{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Qt.workingColorSpace){if(t=lm(t,1),e=Xt(e,0,1),i=Xt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ta(o,r,t+1/3),this.g=Ta(o,r,t),this.b=Ta(o,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=un){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=un){const i=ed[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=un){return Qt.workingToColorSpace(ze.copy(this),t),Math.round(Xt(ze.r*255,0,255))*65536+Math.round(Xt(ze.g*255,0,255))*256+Math.round(Xt(ze.b*255,0,255))}getHexString(t=un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(ze.copy(this),e);const i=ze.r,s=ze.g,r=ze.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=un){Qt.workingToColorSpace(ze.copy(this),t);const e=ze.r,i=ze.g,s=ze.b;return t!==un?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(Gr);const i=la(di.h,Gr.h,e),s=la(di.s,Gr.s,e),r=la(di.l,Gr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new It;It.NAMES=ed;let Cm=0;class wi extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=Ps,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=Ja,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Za&&(i.blendSrc=this.blendSrc),this.blendDst!==Ja&&(i.blendDst=this.blendDst),this.blendEquation!==Hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Wi extends wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new L,Wr=new wt;let Tm=0;class mn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Hl,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Wr.fromBufferAttribute(this,e),Wr.applyMatrix3(t),this.setXY(e,Wr.x,Wr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Fn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=oe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),s=oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),s=oe(s,this.array),r=oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hl&&(t.usage=this.usage),t}}class nd extends mn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class id extends mn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Fe extends mn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Am=0;const an=new le,Aa=new Ie,fs=new L,nn=new ts,Zs=new ts,Ne=new L;class gn extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qh(t)?id:nd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,i){return an.makeTranslation(t,e,i),this.applyMatrix4(an),this}scale(t,e,i){return an.makeScale(t,e,i),this.applyMatrix4(an),this}lookAt(t){return Aa.lookAt(t),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Fe(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(nn.min,Zs.min),nn.expandByPoint(Ne),Ne.addVectors(nn.max,Zs.max),nn.expandByPoint(Ne)):(nn.expandByPoint(Zs.min),nn.expandByPoint(Zs.max))}nn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ne.fromBufferAttribute(a,l),c&&(fs.fromBufferAttribute(t,l),Ne.add(fs)),s=Math.max(s,i.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<i.count;A++)a[A]=new L,c[A]=new L;const l=new L,u=new L,h=new L,f=new wt,p=new wt,g=new wt,_=new L,m=new L;function d(A,y,E){l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,E),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,E),u.sub(l),h.sub(l),p.sub(f),g.sub(f);const w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(w),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(w),a[A].add(_),a[y].add(_),a[E].add(_),c[A].add(m),c[y].add(m),c[E].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let A=0,y=b.length;A<y;++A){const E=b[A],w=E.start,O=E.count;for(let H=w,k=w+O;H<k;H+=3)d(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const C=new L,M=new L,R=new L,v=new L;function x(A){R.fromBufferAttribute(s,A),v.copy(R);const y=a[A];C.copy(y),C.sub(R.multiplyScalar(R.dot(y))).normalize(),M.crossVectors(v,y);const w=M.dot(c[A])<0?-1:1;o.setXYZW(A,C.x,C.y,C.z,w)}for(let A=0,y=b.length;A<y;++A){const E=b[A],w=E.start,O=E.count;for(let H=w,k=w+O;H<k;H+=3)x(t.getX(H+0)),x(t.getX(H+1)),x(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,u=new L,h=new L;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let d=0;d<u;d++)f[g++]=l[p++]}return new mn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new gn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=t(f,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mu=new le,Oi=new Vo,Xr=new Ws,gu=new L,qr=new L,$r=new L,Yr=new L,wa=new L,Kr=new L,_u=new L,jr=new L;class Ve extends Ie{constructor(t=new gn,e=new Wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Kr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(wa.fromBufferAttribute(h,t),o?Kr.addScaledVector(wa,u):Kr.addScaledVector(wa.sub(e),u))}e.add(Kr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(r),Oi.copy(t.ray).recast(t.near),!(Xr.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Xr,gu)===null||Oi.origin.distanceToSquared(gu)>(t.far-t.near)**2))&&(mu.copy(r).invert(),Oi.copy(t.ray).applyMatrix4(mu),!(i.boundingBox!==null&&Oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Oi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),C=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=b,R=C;M<R;M+=3){const v=a.getX(M),x=a.getX(M+1),A=a.getX(M+2);s=Zr(this,d,t,i,l,u,h,v,x,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const b=a.getX(m),C=a.getX(m+1),M=a.getX(m+2);s=Zr(this,o,t,i,l,u,h,b,C,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),C=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=b,R=C;M<R;M+=3){const v=M,x=M+1,A=M+2;s=Zr(this,d,t,i,l,u,h,v,x,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const b=m,C=m+1,M=m+2;s=Zr(this,o,t,i,l,u,h,b,C,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function wm(n,t,e,i,s,r,o,a){let c;if(t.side===Ye?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===Ci,a),c===null)return null;jr.copy(a),jr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(jr);return l<e.near||l>e.far?null:{distance:l,point:jr.clone(),object:n}}function Zr(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,qr),n.getVertexPosition(c,$r),n.getVertexPosition(l,Yr);const u=wm(n,t,e,i,qr,$r,Yr,_u);if(u){const h=new L;fn.getBarycoord(_u,qr,$r,Yr,h),s&&(u.uv=fn.getInterpolatedAttribute(s,a,c,l,h,new wt)),r&&(u.uv1=fn.getInterpolatedAttribute(r,a,c,l,h,new wt)),o&&(u.normal=fn.getInterpolatedAttribute(o,a,c,l,h,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new L,materialIndex:0};fn.getNormal(qr,$r,Yr,f.normal),u.face=f,u.barycoord=h}return u}class Tr extends gn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Fe(l,3)),this.setAttribute("normal",new Fe(u,3)),this.setAttribute("uv",new Fe(h,2));function g(_,m,d,b,C,M,R,v,x,A,y){const E=M/x,w=R/A,O=M/2,H=R/2,k=v/2,G=x+1,B=A+1;let Y=0,W=0;const st=new L;for(let rt=0;rt<B;rt++){const bt=rt*w-H;for(let Ft=0;Ft<G;Ft++){const ie=Ft*E-O;st[_]=ie*b,st[m]=bt*C,st[d]=k,l.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[d]=v>0?1:-1,u.push(st.x,st.y,st.z),h.push(Ft/x),h.push(1-rt/A),Y+=1}}for(let rt=0;rt<A;rt++)for(let bt=0;bt<x;bt++){const Ft=f+bt+G*rt,ie=f+bt+G*(rt+1),ue=f+(bt+1)+G*(rt+1),Kt=f+(bt+1)+G*rt;c.push(Ft,ie,Kt),c.push(ie,ue,Kt),W+=6}a.addGroup(p,W,y),p+=W,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function $e(n){const t={};for(let e=0;e<n.length;e++){const i=Hs(n[e]);for(const s in i)t[s]=i[s]}return t}function Rm(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function sd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Pm={clone:Hs,merge:$e};var Im=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Im,this.fragmentShader=Lm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hs(t.uniforms),this.uniformsGroups=Rm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class rd extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new L,yu=new wt,xu=new wt;class hn extends rd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Bl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bl*2*Math.atan(Math.tan(yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,yu,xu),e.subVectors(xu,yu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(yo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ps=-90,ms=1;class Om extends Ie{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(ps,ms,t,e);s.layers=this.layers,this.add(s);const r=new hn(ps,ms,t,e);r.layers=this.layers,this.add(r);const o=new hn(ps,ms,t,e);o.layers=this.layers,this.add(o);const a=new hn(ps,ms,t,e);a.layers=this.layers,this.add(a);const c=new hn(ps,ms,t,e);c.layers=this.layers,this.add(c);const l=new hn(ps,ms,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class od extends We{constructor(t=[],e=Ns,i,s,r,o,a,c,l,u){super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dm extends Yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new od(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tr(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ye,blending:vi});r.uniforms.tEquirect.value=e;const o=new Ve(s,r),a=e.minFilter;return e.minFilter===Vi&&(e.minFilter=Bn),new Om(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}class Jr extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nm={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Jr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class fc{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=i}clone(){return new fc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Um extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Fm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Hl,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qe=new L;class To{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Fn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=oe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Fn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),s=oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),s=oe(s,this.array),r=oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new mn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new To(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class kl extends wi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let gs;const Js=new L,_s=new L,ys=new L,xs=new wt,Qs=new wt,ad=new le,Qr=new L,tr=new L,to=new L,vu=new wt,Pa=new wt,Mu=new wt;class Su extends Ie{constructor(t=new kl){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new gn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Fm(e,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new To(i,3,0,!1)),gs.setAttribute("uv",new To(i,2,3,!1))}this.geometry=gs,this.material=t,this.center=new wt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),ad.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-ys.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;eo(Qr.set(-.5,-.5,0),ys,o,_s,s,r),eo(tr.set(.5,-.5,0),ys,o,_s,s,r),eo(to.set(.5,.5,0),ys,o,_s,s,r),vu.set(0,0),Pa.set(1,0),Mu.set(1,1);let a=t.ray.intersectTriangle(Qr,tr,to,!1,Js);if(a===null&&(eo(tr.set(-.5,.5,0),ys,o,_s,s,r),Pa.set(0,1),a=t.ray.intersectTriangle(Qr,to,tr,!1,Js),a===null))return;const c=t.ray.origin.distanceTo(Js);c<t.near||c>t.far||e.push({distance:c,point:Js.clone(),uv:fn.getInterpolation(Js,Qr,tr,to,vu,Pa,Mu,new wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function eo(n,t,e,i,s,r){xs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Qs.x=r*xs.x-s*xs.y,Qs.y=s*xs.x+r*xs.y):Qs.copy(xs),n.copy(t),n.x+=Qs.x,n.y+=Qs.y,n.applyMatrix4(ad)}class Hm extends We{constructor(t=null,e=1,i=1,s,r,o,a,c,l=sn,u=sn,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bu extends mn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const vs=new le,Eu=new le,no=[],Cu=new ts,Bm=new le,er=new Ve,nr=new Ws;class Go extends Ve{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new bu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Bm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ts),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,vs),Cu.copy(t.boundingBox).applyMatrix4(vs),this.boundingBox.union(Cu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ws),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,vs),nr.copy(t.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(nr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(i),t.ray.intersectsSphere(nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vs),Eu.multiplyMatrices(i,vs),er.matrixWorld=Eu,er.raycast(t,no);for(let o=0,a=no.length;o<a;o++){const c=no[o];c.instanceId=r,c.object=this,e.push(c)}no.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new bu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Hm(new Float32Array(s*this.count),s,this.count,oc,kn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ia=new L,km=new L,zm=new kt;class Zn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ia.subVectors(i,e).cross(km.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ia),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||zm.getNormalMatrix(t),s=this.coplanarPoint(Ia).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Ws,Vm=new wt(.5,.5),io=new L;class pc{constructor(t=new Zn,e=new Zn,i=new Zn,s=new Zn,r=new Zn,o=new Zn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=zn,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],p=r[7],g=r[8],_=r[9],m=r[10],d=r[11],b=r[12],C=r[13],M=r[14],R=r[15];if(s[0].setComponents(l-o,p-u,d-g,R-b).normalize(),s[1].setComponents(l+o,p+u,d+g,R+b).normalize(),s[2].setComponents(l+a,p+h,d+_,R+C).normalize(),s[3].setComponents(l-a,p-h,d-_,R-C).normalize(),i)s[4].setComponents(c,f,m,M).normalize(),s[5].setComponents(l-c,p-f,d-m,R-M).normalize();else if(s[4].setComponents(l-c,p-f,d-m,R-M).normalize(),e===zn)s[5].setComponents(l+c,p+f,d+m,R+M).normalize();else if(e===Eo)s[5].setComponents(c,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){Di.center.set(0,0,0);const e=Vm.distanceTo(t.center);return Di.radius=.7071067811865476+e,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(io.x=s.normal.x>0?t.max.x:t.min.x,io.y=s.normal.y>0?t.max.y:t.min.y,io.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(io)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ld extends wi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ao=new L,wo=new L,Tu=new le,ir=new Vo,so=new Ws,La=new L,Au=new L;class Gm extends Ie{constructor(t=new gn,e=new ld){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ao.fromBufferAttribute(e,s-1),wo.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ao.distanceTo(wo);t.setAttribute("lineDistance",new Fe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(s),so.radius+=r,t.ray.intersectsSphere(so)===!1)return;Tu.copy(s).invert(),ir.copy(t.ray).applyMatrix4(Tu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const d=u.getX(_),b=u.getX(_+1),C=ro(this,t,ir,c,d,b,_);C&&e.push(C)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),d=ro(this,t,ir,c,_,m,g-1);d&&e.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const d=ro(this,t,ir,c,_,_+1,_);d&&e.push(d)}if(this.isLineLoop){const _=ro(this,t,ir,c,g-1,p,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ro(n,t,e,i,s,r,o){const a=n.geometry.attributes.position;if(Ao.fromBufferAttribute(a,s),wo.fromBufferAttribute(a,r),e.distanceSqToSegment(Ao,wo,La,Au)>i)return;La.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(La);if(!(l<t.near||l>t.far))return{distance:l,point:Au.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const wu=new L,Ru=new L;class Wm extends Gm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)wu.fromBufferAttribute(e,s),Ru.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+wu.distanceTo(Ru);t.setAttribute("lineDistance",new Fe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cd extends We{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ud extends We{constructor(t,e,i=$i,s,r,o,a=sn,c=sn,l,u=yr,h=1){if(u!==yr&&u!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class hd extends We{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Wo extends gn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],p=[];let g=0;const _=[],m=i/2;let d=0;b(),o===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(u),this.setAttribute("position",new Fe(h,3)),this.setAttribute("normal",new Fe(f,3)),this.setAttribute("uv",new Fe(p,2));function b(){const M=new L,R=new L;let v=0;const x=(e-t)/i;for(let A=0;A<=r;A++){const y=[],E=A/r,w=E*(e-t)+t;for(let O=0;O<=s;O++){const H=O/s,k=H*c+a,G=Math.sin(k),B=Math.cos(k);R.x=w*G,R.y=-E*i+m,R.z=w*B,h.push(R.x,R.y,R.z),M.set(G,x,B).normalize(),f.push(M.x,M.y,M.z),p.push(H,1-E),y.push(g++)}_.push(y)}for(let A=0;A<s;A++)for(let y=0;y<r;y++){const E=_[y][A],w=_[y+1][A],O=_[y+1][A+1],H=_[y][A+1];(t>0||y!==0)&&(u.push(E,w,H),v+=3),(e>0||y!==r-1)&&(u.push(w,O,H),v+=3)}l.addGroup(d,v,0),d+=v}function C(M){const R=g,v=new wt,x=new L;let A=0;const y=M===!0?t:e,E=M===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,m*E,0),f.push(0,E,0),p.push(.5,.5),g++;const w=g;for(let O=0;O<=s;O++){const k=O/s*c+a,G=Math.cos(k),B=Math.sin(k);x.x=y*B,x.y=m*E,x.z=y*G,h.push(x.x,x.y,x.z),f.push(0,E,0),v.x=G*.5+.5,v.y=B*.5*E+.5,p.push(v.x,v.y),g++}for(let O=0;O<s;O++){const H=R+O,k=w+O;M===!0?u.push(k,k+1,H):u.push(k+1,k,H),A+=3}l.addGroup(d,A,M===!0?1:2),d+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xo extends gn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=t/a,f=e/c,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const b=d*f-o;for(let C=0;C<l;C++){const M=C*h-r;g.push(M,-b,0),_.push(0,0,1),m.push(C/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<a;b++){const C=b+l*d,M=b+l*(d+1),R=b+1+l*(d+1),v=b+1+l*d;p.push(C,M,v),p.push(M,R,v)}this.setIndex(p),this.setAttribute("position",new Fe(g,3)),this.setAttribute("normal",new Fe(_,3)),this.setAttribute("uv",new Fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xo(t.width,t.height,t.widthSegments,t.heightSegments)}}class bi extends gn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new L,f=new L,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const b=[],C=d/i;let M=0;d===0&&o===0?M=.5/e:d===i&&c===Math.PI&&(M=-.5/e);for(let R=0;R<=e;R++){const v=R/e;h.x=-t*Math.cos(s+v*r)*Math.sin(o+C*a),h.y=t*Math.cos(o+C*a),h.z=t*Math.sin(s+v*r)*Math.sin(o+C*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(v+M,1-C),b.push(l++)}u.push(b)}for(let d=0;d<i;d++)for(let b=0;b<e;b++){const C=u[d][b+1],M=u[d][b],R=u[d+1][b],v=u[d+1][b+1];(d!==0||o>0)&&p.push(C,M,v),(d!==i-1||c<Math.PI)&&p.push(M,R,v)}this.setIndex(p),this.setAttribute("position",new Fe(g,3)),this.setAttribute("normal",new Fe(_,3)),this.setAttribute("uv",new Fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class dd extends wi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new It(16777215),this.specular=new It(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fd extends wi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xm extends wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qm extends wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class pd extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class $m extends pd{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Oa=new le,Pu=new L,Iu=new L;class Ym{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pc,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Pu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pu),Iu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Iu),e.updateMatrixWorld(),Oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Oa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class md extends rd{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Km extends Ym{constructor(){super(new md(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gd extends pd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Km}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class jm extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Lu=new le;class Zm{constructor(t,e,i=0,s=1/0){this.ray=new Vo(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new dc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Lu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lu),this}intersectObject(t,e=!0,i=[]){return zl(t,this,i,e),i.sort(Ou),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)zl(t[s],this,i,e);return i.sort(Ou),i}}function Ou(n,t){return n.distance-t.distance}function zl(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)zl(r[o],t,e,!0)}}class Du{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Xt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class _d extends Wm{constructor(t=10,e=10,i=4473924,s=8947848){i=new It(i),s=new It(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let f=0,p=0,g=-a;f<=e;f++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=f===r?i:s;_.toArray(l,p),p+=3,_.toArray(l,p),p+=3,_.toArray(l,p),p+=3,_.toArray(l,p),p+=3}const u=new gn;u.setAttribute("position",new Fe(c,3)),u.setAttribute("color",new Fe(l,3));const h=new ld({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Jm extends Qi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Nu(n,t,e,i){const s=Qm(i);switch(e){case Kh:return n*t;case oc:return n*t/s.components*s.byteLength;case ac:return n*t/s.components*s.byteLength;case Zh:return n*t*2/s.components*s.byteLength;case lc:return n*t*2/s.components*s.byteLength;case jh:return n*t*3/s.components*s.byteLength;case Tn:return n*t*4/s.components*s.byteLength;case cc:return n*t*4/s.components*s.byteLength;case po:case mo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case go:case _o:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case hl:case fl:return Math.max(n,16)*Math.max(t,8)/4;case ul:case dl:return Math.max(n,8)*Math.max(t,8)/2;case pl:case ml:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _l:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case yl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case xl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case vl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case bl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case El:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Al:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case wl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Rl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Pl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Il:case Ll:case Ol:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Dl:case Nl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ul:case Fl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qm(n){switch(n){case Vn:case Xh:return{byteLength:1,components:1};case gr:case qh:case Cr:return{byteLength:2,components:1};case sc:case rc:return{byteLength:2,components:4};case $i:case ic:case kn:return{byteLength:4,components:1};case $h:case Yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nc);function yd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function tg(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var eg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ng=`#ifdef USE_ALPHAHASH
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
#endif`,ig=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,og=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ag=`#ifdef USE_AOMAP
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
#endif`,lg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cg=`#ifdef USE_BATCHING
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
#endif`,ug=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pg=`#ifdef USE_IRIDESCENCE
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
#endif`,mg=`#ifdef USE_BUMPMAP
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
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Eg=`#define PI 3.141592653589793
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
} // validated`,Cg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tg=`vec3 transformedNormal = objectNormal;
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
#endif`,Ag=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ig="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Og=`#ifdef USE_ENVMAP
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
#endif`,Dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ng=`#ifdef USE_ENVMAP
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
#endif`,Ug=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vg=`#ifdef USE_GRADIENTMAP
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
}`,Gg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qg=`uniform bool receiveShadow;
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
#endif`,$g=`#ifdef USE_ENVMAP
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
#endif`,Yg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jg=`PhysicalMaterial material;
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
#endif`,Qg=`struct PhysicalMaterial {
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
}`,t0=`
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
#endif`,e0=`#if defined( RE_IndirectDiffuse )
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
#endif`,n0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,u0=`#if defined( USE_POINTS_UV )
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
#endif`,h0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g0=`#ifdef USE_MORPHTARGETS
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
#endif`,_0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,b0=`#ifdef USE_NORMALMAP
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
#endif`,E0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,P0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,B0=`float getShadowMask() {
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
}`,k0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z0=`#ifdef USE_SKINNING
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
#endif`,V0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G0=`#ifdef USE_SKINNING
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
#endif`,W0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y0=`#ifdef USE_TRANSMISSION
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
#endif`,K0=`#ifdef USE_TRANSMISSION
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const t_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e_=`uniform sampler2D t2D;
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
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`#include <common>
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
}`,a_=`#if DEPTH_PACKING == 3200
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
}`,l_=`#define DISTANCE
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
}`,c_=`#define DISTANCE
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
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d_=`uniform float scale;
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
}`,f_=`uniform vec3 diffuse;
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
}`,p_=`#include <common>
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
}`,m_=`uniform vec3 diffuse;
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
}`,g_=`#define LAMBERT
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
}`,__=`#define LAMBERT
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
}`,y_=`#define MATCAP
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
}`,x_=`#define MATCAP
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
}`,v_=`#define NORMAL
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
}`,M_=`#define NORMAL
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
}`,S_=`#define PHONG
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
}`,b_=`#define PHONG
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
}`,E_=`#define STANDARD
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
}`,C_=`#define STANDARD
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
}`,T_=`#define TOON
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
}`,A_=`#define TOON
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
}`,w_=`uniform float size;
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
}`,R_=`uniform vec3 diffuse;
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
}`,P_=`#include <common>
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
}`,I_=`uniform vec3 color;
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
}`,L_=`uniform float rotation;
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
}`,O_=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:eg,alphahash_pars_fragment:ng,alphamap_fragment:ig,alphamap_pars_fragment:sg,alphatest_fragment:rg,alphatest_pars_fragment:og,aomap_fragment:ag,aomap_pars_fragment:lg,batching_pars_vertex:cg,batching_vertex:ug,begin_vertex:hg,beginnormal_vertex:dg,bsdfs:fg,iridescence_fragment:pg,bumpmap_pars_fragment:mg,clipping_planes_fragment:gg,clipping_planes_pars_fragment:_g,clipping_planes_pars_vertex:yg,clipping_planes_vertex:xg,color_fragment:vg,color_pars_fragment:Mg,color_pars_vertex:Sg,color_vertex:bg,common:Eg,cube_uv_reflection_fragment:Cg,defaultnormal_vertex:Tg,displacementmap_pars_vertex:Ag,displacementmap_vertex:wg,emissivemap_fragment:Rg,emissivemap_pars_fragment:Pg,colorspace_fragment:Ig,colorspace_pars_fragment:Lg,envmap_fragment:Og,envmap_common_pars_fragment:Dg,envmap_pars_fragment:Ng,envmap_pars_vertex:Ug,envmap_physical_pars_fragment:$g,envmap_vertex:Fg,fog_vertex:Hg,fog_pars_vertex:Bg,fog_fragment:kg,fog_pars_fragment:zg,gradientmap_pars_fragment:Vg,lightmap_pars_fragment:Gg,lights_lambert_fragment:Wg,lights_lambert_pars_fragment:Xg,lights_pars_begin:qg,lights_toon_fragment:Yg,lights_toon_pars_fragment:Kg,lights_phong_fragment:jg,lights_phong_pars_fragment:Zg,lights_physical_fragment:Jg,lights_physical_pars_fragment:Qg,lights_fragment_begin:t0,lights_fragment_maps:e0,lights_fragment_end:n0,logdepthbuf_fragment:i0,logdepthbuf_pars_fragment:s0,logdepthbuf_pars_vertex:r0,logdepthbuf_vertex:o0,map_fragment:a0,map_pars_fragment:l0,map_particle_fragment:c0,map_particle_pars_fragment:u0,metalnessmap_fragment:h0,metalnessmap_pars_fragment:d0,morphinstance_vertex:f0,morphcolor_vertex:p0,morphnormal_vertex:m0,morphtarget_pars_vertex:g0,morphtarget_vertex:_0,normal_fragment_begin:y0,normal_fragment_maps:x0,normal_pars_fragment:v0,normal_pars_vertex:M0,normal_vertex:S0,normalmap_pars_fragment:b0,clearcoat_normal_fragment_begin:E0,clearcoat_normal_fragment_maps:C0,clearcoat_pars_fragment:T0,iridescence_pars_fragment:A0,opaque_fragment:w0,packing:R0,premultiplied_alpha_fragment:P0,project_vertex:I0,dithering_fragment:L0,dithering_pars_fragment:O0,roughnessmap_fragment:D0,roughnessmap_pars_fragment:N0,shadowmap_pars_fragment:U0,shadowmap_pars_vertex:F0,shadowmap_vertex:H0,shadowmask_pars_fragment:B0,skinbase_vertex:k0,skinning_pars_vertex:z0,skinning_vertex:V0,skinnormal_vertex:G0,specularmap_fragment:W0,specularmap_pars_fragment:X0,tonemapping_fragment:q0,tonemapping_pars_fragment:$0,transmission_fragment:Y0,transmission_pars_fragment:K0,uv_pars_fragment:j0,uv_pars_vertex:Z0,uv_vertex:J0,worldpos_vertex:Q0,background_vert:t_,background_frag:e_,backgroundCube_vert:n_,backgroundCube_frag:i_,cube_vert:s_,cube_frag:r_,depth_vert:o_,depth_frag:a_,distanceRGBA_vert:l_,distanceRGBA_frag:c_,equirect_vert:u_,equirect_frag:h_,linedashed_vert:d_,linedashed_frag:f_,meshbasic_vert:p_,meshbasic_frag:m_,meshlambert_vert:g_,meshlambert_frag:__,meshmatcap_vert:y_,meshmatcap_frag:x_,meshnormal_vert:v_,meshnormal_frag:M_,meshphong_vert:S_,meshphong_frag:b_,meshphysical_vert:E_,meshphysical_frag:C_,meshtoon_vert:T_,meshtoon_frag:A_,points_vert:w_,points_frag:R_,shadow_vert:P_,shadow_frag:I_,sprite_vert:L_,sprite_frag:O_},lt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Dn={basic:{uniforms:$e([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:$e([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new It(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:$e([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:$e([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:$e([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new It(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:$e([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:$e([lt.points,lt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:$e([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:$e([lt.common,lt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:$e([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:$e([lt.sprite,lt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:$e([lt.common,lt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:$e([lt.lights,lt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Dn.physical={uniforms:$e([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const oo={r:0,b:0,g:0},Ni=new Pn,D_=new le;function N_(n,t,e,i,s,r,o){const a=new It(0);let c=r===!0?0:1,l,u,h=null,f=0,p=null;function g(C){let M=C.isScene===!0?C.background:null;return M&&M.isTexture&&(M=(C.backgroundBlurriness>0?e:t).get(M)),M}function _(C){let M=!1;const R=g(C);R===null?d(a,c):R&&R.isColor&&(d(R,1),M=!0);const v=n.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(C,M){const R=g(M);R&&(R.isCubeTexture||R.mapping===zo)?(u===void 0&&(u=new Ve(new Tr(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:Hs(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(v,x,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ni.copy(M.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(D_.makeRotationFromEuler(Ni)),u.material.toneMapped=Qt.getTransfer(R.colorSpace)!==re,(h!==R||f!==R.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=R,f=R.version,p=n.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Ve(new Xo(2,2),new Ti({name:"BackgroundMaterial",uniforms:Hs(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(R.colorSpace)!==re,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||f!==R.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=R,f=R.version,p=n.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function d(C,M){C.getRGB(oo,sd(n)),i.buffers.color.setClear(oo.r,oo.g,oo.b,M,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(C,M=1){a.set(C),c=M,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(C){c=C,d(a,c)},render:_,addToRenderList:m,dispose:b}}function U_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(E,w,O,H,k){let G=!1;const B=h(H,O,w);r!==B&&(r=B,l(r.object)),G=p(E,H,O,k),G&&g(E,H,O,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,M(E,w,O,H),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return n.createVertexArray()}function l(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function h(E,w,O){const H=O.wireframe===!0;let k=i[E.id];k===void 0&&(k={},i[E.id]=k);let G=k[w.id];G===void 0&&(G={},k[w.id]=G);let B=G[H];return B===void 0&&(B=f(c()),G[H]=B),B}function f(E){const w=[],O=[],H=[];for(let k=0;k<e;k++)w[k]=0,O[k]=0,H[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:H,object:E,attributes:{},index:null}}function p(E,w,O,H){const k=r.attributes,G=w.attributes;let B=0;const Y=O.getAttributes();for(const W in Y)if(Y[W].location>=0){const rt=k[W];let bt=G[W];if(bt===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(bt=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(bt=E.instanceColor)),rt===void 0||rt.attribute!==bt||bt&&rt.data!==bt.data)return!0;B++}return r.attributesNum!==B||r.index!==H}function g(E,w,O,H){const k={},G=w.attributes;let B=0;const Y=O.getAttributes();for(const W in Y)if(Y[W].location>=0){let rt=G[W];rt===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(rt=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(rt=E.instanceColor));const bt={};bt.attribute=rt,rt&&rt.data&&(bt.data=rt.data),k[W]=bt,B++}r.attributes=k,r.attributesNum=B,r.index=H}function _(){const E=r.newAttributes;for(let w=0,O=E.length;w<O;w++)E[w]=0}function m(E){d(E,0)}function d(E,w){const O=r.newAttributes,H=r.enabledAttributes,k=r.attributeDivisors;O[E]=1,H[E]===0&&(n.enableVertexAttribArray(E),H[E]=1),k[E]!==w&&(n.vertexAttribDivisor(E,w),k[E]=w)}function b(){const E=r.newAttributes,w=r.enabledAttributes;for(let O=0,H=w.length;O<H;O++)w[O]!==E[O]&&(n.disableVertexAttribArray(O),w[O]=0)}function C(E,w,O,H,k,G,B){B===!0?n.vertexAttribIPointer(E,w,O,k,G):n.vertexAttribPointer(E,w,O,H,k,G)}function M(E,w,O,H){_();const k=H.attributes,G=O.getAttributes(),B=w.defaultAttributeValues;for(const Y in G){const W=G[Y];if(W.location>=0){let st=k[Y];if(st===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(st=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(st=E.instanceColor)),st!==void 0){const rt=st.normalized,bt=st.itemSize,Ft=t.get(st);if(Ft===void 0)continue;const ie=Ft.buffer,ue=Ft.type,Kt=Ft.bytesPerElement,q=ue===n.INT||ue===n.UNSIGNED_INT||st.gpuType===ic;if(st.isInterleavedBufferAttribute){const J=st.data,pt=J.stride,Nt=st.offset;if(J.isInstancedInterleavedBuffer){for(let Ct=0;Ct<W.locationSize;Ct++)d(W.location+Ct,J.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ct=0;Ct<W.locationSize;Ct++)m(W.location+Ct);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let Ct=0;Ct<W.locationSize;Ct++)C(W.location+Ct,bt/W.locationSize,ue,rt,pt*Kt,(Nt+bt/W.locationSize*Ct)*Kt,q)}else{if(st.isInstancedBufferAttribute){for(let J=0;J<W.locationSize;J++)d(W.location+J,st.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let J=0;J<W.locationSize;J++)m(W.location+J);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let J=0;J<W.locationSize;J++)C(W.location+J,bt/W.locationSize,ue,rt,bt*Kt,bt/W.locationSize*J*Kt,q)}}else if(B!==void 0){const rt=B[Y];if(rt!==void 0)switch(rt.length){case 2:n.vertexAttrib2fv(W.location,rt);break;case 3:n.vertexAttrib3fv(W.location,rt);break;case 4:n.vertexAttrib4fv(W.location,rt);break;default:n.vertexAttrib1fv(W.location,rt)}}}}b()}function R(){A();for(const E in i){const w=i[E];for(const O in w){const H=w[O];for(const k in H)u(H[k].object),delete H[k];delete w[O]}delete i[E]}}function v(E){if(i[E.id]===void 0)return;const w=i[E.id];for(const O in w){const H=w[O];for(const k in H)u(H[k].object),delete H[k];delete w[O]}delete i[E.id]}function x(E){for(const w in i){const O=i[w];if(O[E.id]===void 0)continue;const H=O[E.id];for(const k in H)u(H[k].object),delete H[k];delete O[E.id]}}function A(){y(),o=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:v,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function F_(n,t,e){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,i,1)}function c(l,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function H_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Tn&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){const A=x===Cr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==Vn&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&x!==kn&&!A)}function c(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,v=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:C,maxFragmentUniforms:M,vertexTextures:R,maxSamples:v}}function B_(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Zn,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const b=r?0:i,C=b*4;let M=d.clippingState||null;c.value=M,M=u(g,f,C,p);for(let R=0;R!==C;++R)M[R]=e[R];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=p+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let C=0,M=p;C!==_;++C,M+=4)o.copy(h[C]).applyMatrix4(b,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function k_(n){let t=new WeakMap;function e(o,a){return a===ol?o.mapping=Ns:a===al&&(o.mapping=Us),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ol||a===al)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Dm(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const Ts=4,Uu=[.125,.215,.35,.446,.526,.582],Bi=20,Da=new md,Fu=new It;let Na=null,Ua=0,Fa=0,Ha=!1;const Fi=(1+Math.sqrt(5))/2,Ms=1/Fi,Hu=[new L(-Fi,Ms,0),new L(Fi,Ms,0),new L(-Ms,0,Fi),new L(Ms,0,Fi),new L(0,Fi,-Ms),new L(0,Fi,Ms),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],z_=new L;class Bu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=z_}=r;Na=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Na,Ua,Fa),this._renderer.xr.enabled=Ha,t.scissorTest=!1,ao(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ns||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Na=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Cr,format:Tn,colorSpace:Fs,depthBuffer:!1},s=ku(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ku(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=V_(r)),this._blurMaterial=G_(r,t,e)}return s}_compileMaterial(t){const e=new Ve(this._lodPlanes[0],t);this._renderer.compile(e,Da)}_sceneToCubeUV(t,e,i,s,r){const c=new hn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Fu),h.toneMapping=Mi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const _=new Wi({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),m=new Ve(new Tr,_);let d=!1;const b=t.background;b?b.isColor&&(_.color.copy(b),t.background=null,d=!0):(_.color.copy(Fu),d=!0);for(let C=0;C<6;C++){const M=C%3;M===0?(c.up.set(0,l[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[C],r.y,r.z)):M===1?(c.up.set(0,0,l[C]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[C],r.z)):(c.up.set(0,l[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[C]));const R=this._cubeSize;ao(s,M*R,C>2?R:0,R,R),h.setRenderTarget(s),d&&h.render(m,c),h.render(t,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=b}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ns||t.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ve(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ao(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Da)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hu[(s-r-1)%Hu.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ve(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Bi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Bi;m>Bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bi}`);const d=[];let b=0;for(let x=0;x<Bi;++x){const A=x/_,y=Math.exp(-A*A/2);d.push(y),x===0?b+=y:x<m&&(b+=2*y)}for(let x=0;x<d.length;x++)d[x]=d[x]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:C}=this;f.dTheta.value=g,f.mipInt.value=C-i;const M=this._sizeLods[s],R=3*M*(s>C-Ts?s-C+Ts:0),v=4*(this._cubeSize-M);ao(e,R,v,3*M,2*M),c.setRenderTarget(e),c.render(h,Da)}}function V_(n){const t=[],e=[],i=[];let s=n;const r=n-Ts+1+Uu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-Ts?c=Uu[o-n+Ts-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,b=new Float32Array(_*g*p),C=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let v=0;v<p;v++){const x=v%3*2/3-1,A=v>2?0:-1,y=[x,A,0,x+2/3,A,0,x+2/3,A+1,0,x,A,0,x+2/3,A+1,0,x,A+1,0];b.set(y,_*g*v),C.set(f,m*g*v);const E=[v,v,v,v,v,v];M.set(E,d*g*v)}const R=new gn;R.setAttribute("position",new mn(b,_)),R.setAttribute("uv",new mn(C,m)),R.setAttribute("faceIndex",new mn(M,d)),t.push(R),s>Ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ku(n,t,e){const i=new Yi(n,t,e);return i.texture.mapping=zo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ao(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function G_(n,t,e){const i=new Float32Array(Bi),s=new L(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function zu(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Vu(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function mc(){return`

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
	`}function W_(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===ol||c===al,u=c===Ns||c===Us;if(l||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Bu(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Bu(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function X_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&vr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function q_(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const p in f)t.update(f[p],n.ARRAY_BUFFER)}function l(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const b=p.array;_=p.version;for(let C=0,M=b.length;C<M;C+=3){const R=b[C+0],v=b[C+1],x=b[C+2];f.push(R,v,v,x,x,R)}}else if(g!==void 0){const b=g.array;_=g.version;for(let C=0,M=b.length/3-1;C<M;C+=3){const R=C+0,v=C+1,x=C+2;f.push(R,v,v,x,x,R)}}else return;const m=new(Qh(f)?id:nd)(f,1);m.version=_;const d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function $_(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(i,p,r,f*o),e.update(p,i,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),e.update(p,i,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,i,1)}function h(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,_,0,g);let d=0;for(let b=0;b<g;b++)d+=p[b]*_[b];e.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Y_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function K_(n,t,e){const i=new WeakMap,s=new Ee;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let y=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let C=0;p===!0&&(C=1),g===!0&&(C=2),_===!0&&(C=3);let M=a.attributes.position.count*C,R=1;M>t.maxTextureSize&&(R=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const v=new Float32Array(M*R*4*h),x=new td(v,M,R,h);x.type=kn,x.needsUpdate=!0;const A=C*4;for(let E=0;E<h;E++){const w=m[E],O=d[E],H=b[E],k=M*R*4*E;for(let G=0;G<w.count;G++){const B=G*A;p===!0&&(s.fromBufferAttribute(w,G),v[k+B+0]=s.x,v[k+B+1]=s.y,v[k+B+2]=s.z,v[k+B+3]=0),g===!0&&(s.fromBufferAttribute(O,G),v[k+B+4]=s.x,v[k+B+5]=s.y,v[k+B+6]=s.z,v[k+B+7]=0),_===!0&&(s.fromBufferAttribute(H,G),v[k+B+8]=s.x,v[k+B+9]=s.y,v[k+B+10]=s.z,v[k+B+11]=H.itemSize===4?s.w:1)}}f={count:h,texture:x,size:new wt(M,R)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];const g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function j_(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const xd=new We,Gu=new ud(1,1),vd=new td,Md=new _m,Sd=new od,Wu=[],Xu=[],qu=new Float32Array(16),$u=new Float32Array(9),Yu=new Float32Array(4);function Xs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Wu[s];if(r===void 0&&(r=new Float32Array(s),Wu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Le(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Oe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function qo(n,t){let e=Xu[t];e===void 0&&(e=new Int32Array(t),Xu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Z_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function J_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2fv(this.addr,t),Oe(e,t)}}function Q_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;n.uniform3fv(this.addr,t),Oe(e,t)}}function ty(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4fv(this.addr,t),Oe(e,t)}}function ey(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Le(e,i))return;Yu.set(i),n.uniformMatrix2fv(this.addr,!1,Yu),Oe(e,i)}}function ny(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Le(e,i))return;$u.set(i),n.uniformMatrix3fv(this.addr,!1,$u),Oe(e,i)}}function iy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Le(e,i))return;qu.set(i),n.uniformMatrix4fv(this.addr,!1,qu),Oe(e,i)}}function sy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ry(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2iv(this.addr,t),Oe(e,t)}}function oy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3iv(this.addr,t),Oe(e,t)}}function ay(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4iv(this.addr,t),Oe(e,t)}}function ly(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function cy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2uiv(this.addr,t),Oe(e,t)}}function uy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3uiv(this.addr,t),Oe(e,t)}}function hy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4uiv(this.addr,t),Oe(e,t)}}function dy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Gu.compareFunction=Jh,r=Gu):r=xd,e.setTexture2D(t||r,s)}function fy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Md,s)}function py(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Sd,s)}function my(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||vd,s)}function gy(n){switch(n){case 5126:return Z_;case 35664:return J_;case 35665:return Q_;case 35666:return ty;case 35674:return ey;case 35675:return ny;case 35676:return iy;case 5124:case 35670:return sy;case 35667:case 35671:return ry;case 35668:case 35672:return oy;case 35669:case 35673:return ay;case 5125:return ly;case 36294:return cy;case 36295:return uy;case 36296:return hy;case 35678:case 36198:case 36298:case 36306:case 35682:return dy;case 35679:case 36299:case 36307:return fy;case 35680:case 36300:case 36308:case 36293:return py;case 36289:case 36303:case 36311:case 36292:return my}}function _y(n,t){n.uniform1fv(this.addr,t)}function yy(n,t){const e=Xs(t,this.size,2);n.uniform2fv(this.addr,e)}function xy(n,t){const e=Xs(t,this.size,3);n.uniform3fv(this.addr,e)}function vy(n,t){const e=Xs(t,this.size,4);n.uniform4fv(this.addr,e)}function My(n,t){const e=Xs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Sy(n,t){const e=Xs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function by(n,t){const e=Xs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ey(n,t){n.uniform1iv(this.addr,t)}function Cy(n,t){n.uniform2iv(this.addr,t)}function Ty(n,t){n.uniform3iv(this.addr,t)}function Ay(n,t){n.uniform4iv(this.addr,t)}function wy(n,t){n.uniform1uiv(this.addr,t)}function Ry(n,t){n.uniform2uiv(this.addr,t)}function Py(n,t){n.uniform3uiv(this.addr,t)}function Iy(n,t){n.uniform4uiv(this.addr,t)}function Ly(n,t,e){const i=this.cache,s=t.length,r=qo(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||xd,r[o])}function Oy(n,t,e){const i=this.cache,s=t.length,r=qo(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Md,r[o])}function Dy(n,t,e){const i=this.cache,s=t.length,r=qo(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Sd,r[o])}function Ny(n,t,e){const i=this.cache,s=t.length,r=qo(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||vd,r[o])}function Uy(n){switch(n){case 5126:return _y;case 35664:return yy;case 35665:return xy;case 35666:return vy;case 35674:return My;case 35675:return Sy;case 35676:return by;case 5124:case 35670:return Ey;case 35667:case 35671:return Cy;case 35668:case 35672:return Ty;case 35669:case 35673:return Ay;case 5125:return wy;case 36294:return Ry;case 36295:return Py;case 36296:return Iy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ly;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return Dy;case 36289:case 36303:case 36311:case 36292:return Ny}}class Fy{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=gy(e.type)}}class Hy{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Uy(e.type)}}class By{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Ba=/(\w+)(\])?(\[|\.)?/g;function Ku(n,t){n.seq.push(t),n.map[t.id]=t}function ky(n,t,e){const i=n.name,s=i.length;for(Ba.lastIndex=0;;){const r=Ba.exec(i),o=Ba.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ku(e,l===void 0?new Fy(a,n,t):new Hy(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new By(a),Ku(e,h)),e=h}}}class xo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);ky(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function ju(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const zy=37297;let Vy=0;function Gy(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Zu=new kt;function Wy(n){Qt._getMatrix(Zu,Qt.workingColorSpace,n);const t=`mat3( ${Zu.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case bo:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ju(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Gy(n.getShaderSource(t),a)}else return r}function Xy(n,t){const e=Wy(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function qy(n,t){let e;switch(t){case Gp:e="Linear";break;case Wp:e="Reinhard";break;case Xp:e="Cineon";break;case qp:e="ACESFilmic";break;case Yp:e="AgX";break;case Kp:e="Neutral";break;case $p:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const lo=new L;function $y(){Qt.getLuminanceCoefficients(lo);const n=lo.x.toFixed(4),t=lo.y.toFixed(4),e=lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function Ky(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function jy(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function lr(n){return n!==""}function Qu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function th(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(n){return n.replace(Zy,Qy)}const Jy=new Map;function Qy(n,t){let e=Vt[t];if(e===void 0){const i=Jy.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Vl(e)}const tx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eh(n){return n.replace(tx,ex)}function ex(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function nx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Gh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Sp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function ix(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ns:case Us:t="ENVMAP_TYPE_CUBE";break;case zo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sx(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Us&&(t="ENVMAP_MODE_REFRACTION"),t}function rx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ko:t="ENVMAP_BLENDING_MULTIPLY";break;case zp:t="ENVMAP_BLENDING_MIX";break;case Vp:t="ENVMAP_BLENDING_ADD";break}return t}function ox(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ax(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=nx(e),l=ix(e),u=sx(e),h=rx(e),f=ox(e),p=Yy(e),g=Ky(r),_=s.createProgram();let m,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(lr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(lr).join(`
`),d.length>0&&(d+=`
`)):(m=[nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),d=[nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mi?"#define TONE_MAPPING":"",e.toneMapping!==Mi?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Mi?qy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Xy("linearToOutputTexel",e.outputColorSpace),$y(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(lr).join(`
`)),o=Vl(o),o=Qu(o,e),o=th(o,e),a=Vl(a),a=Qu(a,e),a=th(a,e),o=eh(o),a=eh(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const C=b+m+o,M=b+d+a,R=ju(s,s.VERTEX_SHADER,C),v=ju(s,s.FRAGMENT_SHADER,M);s.attachShader(_,R),s.attachShader(_,v),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function x(w){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(R)||"",k=s.getShaderInfoLog(v)||"",G=O.trim(),B=H.trim(),Y=k.trim();let W=!0,st=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,R,v);else{const rt=Ju(s,R,"vertex"),bt=Ju(s,v,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+G+`
`+rt+`
`+bt)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||Y==="")&&(st=!1);st&&(w.diagnostics={runnable:W,programLog:G,vertexShader:{log:B,prefix:m},fragmentShader:{log:Y,prefix:d}})}s.deleteShader(R),s.deleteShader(v),A=new xo(s,_),y=jy(s,_)}let A;this.getUniforms=function(){return A===void 0&&x(this),A};let y;this.getAttributes=function(){return y===void 0&&x(this),y};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,zy)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vy++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=v,this}let lx=0;class cx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new ux(t),e.set(t,i)),i}}class ux{constructor(t){this.id=lx++,this.code=t,this.usedTimes=0}}function hx(n,t,e,i,s,r,o){const a=new dc,c=new cx,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,E,w,O,H){const k=O.fog,G=H.geometry,B=y.isMeshStandardMaterial?O.environment:null,Y=(y.isMeshStandardMaterial?e:t).get(y.envMap||B),W=Y&&Y.mapping===zo?Y.image.height:null,st=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const rt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,bt=rt!==void 0?rt.length:0;let Ft=0;G.morphAttributes.position!==void 0&&(Ft=1),G.morphAttributes.normal!==void 0&&(Ft=2),G.morphAttributes.color!==void 0&&(Ft=3);let ie,ue,Kt,q;if(st){const ee=Dn[st];ie=ee.vertexShader,ue=ee.fragmentShader}else ie=y.vertexShader,ue=y.fragmentShader,c.update(y),Kt=c.getVertexShaderID(y),q=c.getFragmentShaderID(y);const J=n.getRenderTarget(),pt=n.state.buffers.depth.getReversed(),Nt=H.isInstancedMesh===!0,Ct=H.isBatchedMesh===!0,jt=!!y.map,Be=!!y.matcap,I=!!Y,ye=!!y.aoMap,Ht=!!y.lightMap,Ot=!!y.bumpMap,_t=!!y.normalMap,xe=!!y.displacementMap,yt=!!y.emissiveMap,zt=!!y.metalnessMap,De=!!y.roughnessMap,Te=y.anisotropy>0,P=y.clearcoat>0,S=y.dispersion>0,F=y.iridescence>0,$=y.sheen>0,j=y.transmission>0,X=Te&&!!y.anisotropyMap,Et=P&&!!y.clearcoatMap,ot=P&&!!y.clearcoatNormalMap,xt=P&&!!y.clearcoatRoughnessMap,vt=F&&!!y.iridescenceMap,et=F&&!!y.iridescenceThicknessMap,ht=$&&!!y.sheenColorMap,Lt=$&&!!y.sheenRoughnessMap,Mt=!!y.specularMap,ct=!!y.specularColorMap,Bt=!!y.specularIntensityMap,D=j&&!!y.transmissionMap,nt=j&&!!y.thicknessMap,at=!!y.gradientMap,ft=!!y.alphaMap,Q=y.alphaTest>0,K=!!y.alphaHash,gt=!!y.extensions;let Ut=Mi;y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ut=n.toneMapping);const de={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:ie,fragmentShader:ue,defines:y.defines,customVertexShaderID:Kt,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ct,batchingColor:Ct&&H._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&H.instanceColor!==null,instancingMorph:Nt&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Fs,alphaToCoverage:!!y.alphaToCoverage,map:jt,matcap:Be,envMap:I,envMapMode:I&&Y.mapping,envMapCubeUVHeight:W,aoMap:ye,lightMap:Ht,bumpMap:Ot,normalMap:_t,displacementMap:f&&xe,emissiveMap:yt,normalMapObjectSpace:_t&&y.normalMapType===Qp,normalMapTangentSpace:_t&&y.normalMapType===uc,metalnessMap:zt,roughnessMap:De,anisotropy:Te,anisotropyMap:X,clearcoat:P,clearcoatMap:Et,clearcoatNormalMap:ot,clearcoatRoughnessMap:xt,dispersion:S,iridescence:F,iridescenceMap:vt,iridescenceThicknessMap:et,sheen:$,sheenColorMap:ht,sheenRoughnessMap:Lt,specularMap:Mt,specularColorMap:ct,specularIntensityMap:Bt,transmission:j,transmissionMap:D,thicknessMap:nt,gradientMap:at,opaque:y.transparent===!1&&y.blending===Ps&&y.alphaToCoverage===!1,alphaMap:ft,alphaTest:Q,alphaHash:K,combine:y.combine,mapUv:jt&&_(y.map.channel),aoMapUv:ye&&_(y.aoMap.channel),lightMapUv:Ht&&_(y.lightMap.channel),bumpMapUv:Ot&&_(y.bumpMap.channel),normalMapUv:_t&&_(y.normalMap.channel),displacementMapUv:xe&&_(y.displacementMap.channel),emissiveMapUv:yt&&_(y.emissiveMap.channel),metalnessMapUv:zt&&_(y.metalnessMap.channel),roughnessMapUv:De&&_(y.roughnessMap.channel),anisotropyMapUv:X&&_(y.anisotropyMap.channel),clearcoatMapUv:Et&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ot&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:et&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&_(y.sheenRoughnessMap.channel),specularMapUv:Mt&&_(y.specularMap.channel),specularColorMapUv:ct&&_(y.specularColorMap.channel),specularIntensityMapUv:Bt&&_(y.specularIntensityMap.channel),transmissionMapUv:D&&_(y.transmissionMap.channel),thicknessMapUv:nt&&_(y.thicknessMap.channel),alphaMapUv:ft&&_(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(_t||Te),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!G.attributes.uv&&(jt||ft),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pt,skinning:H.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Ft,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ut,decodeVideoTexture:jt&&y.map.isVideoTexture===!0&&Qt.getTransfer(y.map.colorSpace)===re,decodeVideoTextureEmissive:yt&&y.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(y.emissiveMap.colorSpace)===re,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Jn,flipSided:y.side===Ye,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:gt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&y.extensions.multiDraw===!0||Ct)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return de.vertexUv1s=l.has(1),de.vertexUv2s=l.has(2),de.vertexUv3s=l.has(3),l.clear(),de}function d(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const w in y.defines)E.push(w),E.push(y.defines[w]);return y.isRawShaderMaterial===!1&&(b(E,y),C(E,y),E.push(n.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function b(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function C(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const E=g[y.type];let w;if(E){const O=Dn[E];w=Pm.clone(O.uniforms)}else w=y.uniforms;return w}function R(y,E){let w;for(let O=0,H=u.length;O<H;O++){const k=u[O];if(k.cacheKey===E){w=k,++w.usedTimes;break}}return w===void 0&&(w=new ax(n,E,y,r),u.push(w)),w}function v(y){if(--y.usedTimes===0){const E=u.indexOf(y);u[E]=u[u.length-1],u.pop(),y.destroy()}}function x(y){c.remove(y)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:R,releaseProgram:v,releaseShaderCache:x,programs:u,dispose:A}}function dx(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function fx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function ih(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function sh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,p,g,_,m){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),t++,d}function a(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(h,f){e.length>1&&e.sort(h||fx),i.length>1&&i.sort(f||ih),s.length>1&&s.sort(f||ih)}function u(){for(let h=t,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function px(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new sh,n.set(i,[o])):s>=r.length?(o=new sh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function mx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new It};break;case"SpotLight":e={position:new L,direction:new L,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function gx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let _x=0;function yx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function xx(n){const t=new mx,e=gx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);const s=new L,r=new le,o=new le;function a(l){let u=0,h=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,b=0,C=0,M=0,R=0,v=0,x=0;l.sort(yx);for(let y=0,E=l.length;y<E;y++){const w=l[y],O=w.color,H=w.intensity,k=w.distance,G=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=O.r*H,h+=O.g*H,f+=O.b*H;else if(w.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(w.sh.coefficients[B],H);x++}else if(w.isDirectionalLight){const B=t.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Y=w.shadow,W=e.get(w);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=G,i.directionalShadowMatrix[p]=w.shadow.matrix,b++}i.directional[p]=B,p++}else if(w.isSpotLight){const B=t.get(w);B.position.setFromMatrixPosition(w.matrixWorld),B.color.copy(O).multiplyScalar(H),B.distance=k,B.coneCos=Math.cos(w.angle),B.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),B.decay=w.decay,i.spot[_]=B;const Y=w.shadow;if(w.map&&(i.spotLightMap[R]=w.map,R++,Y.updateMatrices(w),w.castShadow&&v++),i.spotLightMatrix[_]=Y.matrix,w.castShadow){const W=e.get(w);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=G,M++}_++}else if(w.isRectAreaLight){const B=t.get(w);B.color.copy(O).multiplyScalar(H),B.halfWidth.set(w.width*.5,0,0),B.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=B,m++}else if(w.isPointLight){const B=t.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),B.distance=w.distance,B.decay=w.decay,w.castShadow){const Y=w.shadow,W=e.get(w);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=w.shadow.matrix,C++}i.point[g]=B,g++}else if(w.isHemisphereLight){const B=t.get(w);B.skyColor.copy(w.color).multiplyScalar(H),B.groundColor.copy(w.groundColor).multiplyScalar(H),i.hemi[d]=B,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const A=i.hash;(A.directionalLength!==p||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==d||A.numDirectionalShadows!==b||A.numPointShadows!==C||A.numSpotShadows!==M||A.numSpotMaps!==R||A.numLightProbes!==x)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=M+R-v,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=v,i.numLightProbes=x,A.directionalLength=p,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=d,A.numDirectionalShadows=b,A.numPointShadows=C,A.numSpotShadows=M,A.numSpotMaps=R,A.numLightProbes=x,i.version=_x++)}function c(l,u){let h=0,f=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,b=l.length;d<b;d++){const C=l[d];if(C.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(C.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(C.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(C.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(C.width*.5,0,0),M.halfHeight.set(0,C.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(C.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(m),f++}else if(C.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(C.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function rh(n){const t=new xx(n),e=[],i=[];function s(u){l.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function vx(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new rh(n),t.set(s,[a])):r>=o.length?(a=new rh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const Mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sx=`uniform sampler2D shadow_pass;
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
}`;function bx(n,t,e){let i=new pc;const s=new wt,r=new wt,o=new Ee,a=new Xm({depthPacking:Jp}),c=new qm,l={},u=e.maxTextureSize,h={[Ci]:Ye,[Ye]:Ci,[Jn]:Jn},f=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:Mx,fragmentShader:Sx}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new gn;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ve(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gh;let d=this.type;this.render=function(v,x,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const y=n.getRenderTarget(),E=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),O=n.state;O.setBlending(vi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const H=d!==Kn&&this.type===Kn,k=d===Kn&&this.type!==Kn;for(let G=0,B=v.length;G<B;G++){const Y=v[G],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const st=W.getFrameExtents();if(s.multiply(st),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/st.x),s.x=r.x*st.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/st.y),s.y=r.y*st.y,W.mapSize.y=r.y)),W.map===null||H===!0||k===!0){const bt=this.type!==Kn?{minFilter:sn,magFilter:sn}:{};W.map!==null&&W.map.dispose(),W.map=new Yi(s.x,s.y,bt),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const rt=W.getViewportCount();for(let bt=0;bt<rt;bt++){const Ft=W.getViewport(bt);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),O.viewport(o),W.updateMatrices(Y,bt),i=W.getFrustum(),M(x,A,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Kn&&b(W,A),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(y,E,w)};function b(v,x){const A=t.update(_);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Yi(s.x,s.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,n.setRenderTarget(v.mapPass),n.clear(),n.renderBufferDirect(x,null,A,f,_,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,n.setRenderTarget(v.map),n.clear(),n.renderBufferDirect(x,null,A,p,_,null)}function C(v,x,A,y){let E=null;const w=A.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(w!==void 0)E=w;else if(E=A.isPointLight===!0?c:a,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const O=E.uuid,H=x.uuid;let k=l[O];k===void 0&&(k={},l[O]=k);let G=k[H];G===void 0&&(G=E.clone(),k[H]=G,x.addEventListener("dispose",R)),E=G}if(E.visible=x.visible,E.wireframe=x.wireframe,y===Kn?E.side=x.shadowSide!==null?x.shadowSide:x.side:E.side=x.shadowSide!==null?x.shadowSide:h[x.side],E.alphaMap=x.alphaMap,E.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,E.map=x.map,E.clipShadows=x.clipShadows,E.clippingPlanes=x.clippingPlanes,E.clipIntersection=x.clipIntersection,E.displacementMap=x.displacementMap,E.displacementScale=x.displacementScale,E.displacementBias=x.displacementBias,E.wireframeLinewidth=x.wireframeLinewidth,E.linewidth=x.linewidth,A.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const O=n.properties.get(E);O.light=A}return E}function M(v,x,A,y,E){if(v.visible===!1)return;if(v.layers.test(x.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&E===Kn)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,v.matrixWorld);const H=t.update(v),k=v.material;if(Array.isArray(k)){const G=H.groups;for(let B=0,Y=G.length;B<Y;B++){const W=G[B],st=k[W.materialIndex];if(st&&st.visible){const rt=C(v,st,y,E);v.onBeforeShadow(n,v,x,A,H,rt,W),n.renderBufferDirect(A,null,H,rt,v,W),v.onAfterShadow(n,v,x,A,H,rt,W)}}}else if(k.visible){const G=C(v,k,y,E);v.onBeforeShadow(n,v,x,A,H,G,null),n.renderBufferDirect(A,null,H,G,v,null),v.onAfterShadow(n,v,x,A,H,G,null)}}const O=v.children;for(let H=0,k=O.length;H<k;H++)M(O[H],x,A,y,E)}function R(v){v.target.removeEventListener("dispose",R);for(const A in l){const y=l[A],E=v.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}const Ex={[Qa]:tl,[el]:sl,[nl]:rl,[Ds]:il,[tl]:Qa,[sl]:el,[rl]:nl,[il]:Ds};function Cx(n,t){function e(){let D=!1;const nt=new Ee;let at=null;const ft=new Ee(0,0,0,0);return{setMask:function(Q){at!==Q&&!D&&(n.colorMask(Q,Q,Q,Q),at=Q)},setLocked:function(Q){D=Q},setClear:function(Q,K,gt,Ut,de){de===!0&&(Q*=Ut,K*=Ut,gt*=Ut),nt.set(Q,K,gt,Ut),ft.equals(nt)===!1&&(n.clearColor(Q,K,gt,Ut),ft.copy(nt))},reset:function(){D=!1,at=null,ft.set(-1,0,0,0)}}}function i(){let D=!1,nt=!1,at=null,ft=null,Q=null;return{setReversed:function(K){if(nt!==K){const gt=t.get("EXT_clip_control");K?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),nt=K;const Ut=Q;Q=null,this.setClear(Ut)}},getReversed:function(){return nt},setTest:function(K){K?J(n.DEPTH_TEST):pt(n.DEPTH_TEST)},setMask:function(K){at!==K&&!D&&(n.depthMask(K),at=K)},setFunc:function(K){if(nt&&(K=Ex[K]),ft!==K){switch(K){case Qa:n.depthFunc(n.NEVER);break;case tl:n.depthFunc(n.ALWAYS);break;case el:n.depthFunc(n.LESS);break;case Ds:n.depthFunc(n.LEQUAL);break;case nl:n.depthFunc(n.EQUAL);break;case il:n.depthFunc(n.GEQUAL);break;case sl:n.depthFunc(n.GREATER);break;case rl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=K}},setLocked:function(K){D=K},setClear:function(K){Q!==K&&(nt&&(K=1-K),n.clearDepth(K),Q=K)},reset:function(){D=!1,at=null,ft=null,Q=null,nt=!1}}}function s(){let D=!1,nt=null,at=null,ft=null,Q=null,K=null,gt=null,Ut=null,de=null;return{setTest:function(ee){D||(ee?J(n.STENCIL_TEST):pt(n.STENCIL_TEST))},setMask:function(ee){nt!==ee&&!D&&(n.stencilMask(ee),nt=ee)},setFunc:function(ee,Gn,On){(at!==ee||ft!==Gn||Q!==On)&&(n.stencilFunc(ee,Gn,On),at=ee,ft=Gn,Q=On)},setOp:function(ee,Gn,On){(K!==ee||gt!==Gn||Ut!==On)&&(n.stencilOp(ee,Gn,On),K=ee,gt=Gn,Ut=On)},setLocked:function(ee){D=ee},setClear:function(ee){de!==ee&&(n.clearStencil(ee),de=ee)},reset:function(){D=!1,nt=null,at=null,ft=null,Q=null,K=null,gt=null,Ut=null,de=null}}}const r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,b=null,C=null,M=null,R=null,v=null,x=new It(0,0,0),A=0,y=!1,E=null,w=null,O=null,H=null,k=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Y=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=Y>=2);let st=null,rt={};const bt=n.getParameter(n.SCISSOR_BOX),Ft=n.getParameter(n.VIEWPORT),ie=new Ee().fromArray(bt),ue=new Ee().fromArray(Ft);function Kt(D,nt,at,ft){const Q=new Uint8Array(4),K=n.createTexture();n.bindTexture(D,K),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let gt=0;gt<at;gt++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(nt,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(nt+gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return K}const q={};q[n.TEXTURE_2D]=Kt(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Kt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Kt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Kt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(n.DEPTH_TEST),o.setFunc(Ds),Ot(!1),_t(Zc),J(n.CULL_FACE),ye(vi);function J(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function pt(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Nt(D,nt){return h[D]!==nt?(n.bindFramebuffer(D,nt),h[D]=nt,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=nt),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=nt),!0):!1}function Ct(D,nt){let at=p,ft=!1;if(D){at=f.get(nt),at===void 0&&(at=[],f.set(nt,at));const Q=D.textures;if(at.length!==Q.length||at[0]!==n.COLOR_ATTACHMENT0){for(let K=0,gt=Q.length;K<gt;K++)at[K]=n.COLOR_ATTACHMENT0+K;at.length=Q.length,ft=!0}}else at[0]!==n.BACK&&(at[0]=n.BACK,ft=!0);ft&&n.drawBuffers(at)}function jt(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const Be={[Hi]:n.FUNC_ADD,[Ep]:n.FUNC_SUBTRACT,[Cp]:n.FUNC_REVERSE_SUBTRACT};Be[Tp]=n.MIN,Be[Ap]=n.MAX;const I={[wp]:n.ZERO,[Rp]:n.ONE,[Pp]:n.SRC_COLOR,[Za]:n.SRC_ALPHA,[Up]:n.SRC_ALPHA_SATURATE,[Dp]:n.DST_COLOR,[Lp]:n.DST_ALPHA,[Ip]:n.ONE_MINUS_SRC_COLOR,[Ja]:n.ONE_MINUS_SRC_ALPHA,[Np]:n.ONE_MINUS_DST_COLOR,[Op]:n.ONE_MINUS_DST_ALPHA,[Fp]:n.CONSTANT_COLOR,[Hp]:n.ONE_MINUS_CONSTANT_COLOR,[Bp]:n.CONSTANT_ALPHA,[kp]:n.ONE_MINUS_CONSTANT_ALPHA};function ye(D,nt,at,ft,Q,K,gt,Ut,de,ee){if(D===vi){_===!0&&(pt(n.BLEND),_=!1);return}if(_===!1&&(J(n.BLEND),_=!0),D!==bp){if(D!==m||ee!==y){if((d!==Hi||M!==Hi)&&(n.blendEquation(n.FUNC_ADD),d=Hi,M=Hi),ee)switch(D){case Ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jc:n.blendFunc(n.ONE,n.ONE);break;case Qc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Qc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,C=null,R=null,v=null,x.set(0,0,0),A=0,m=D,y=ee}return}Q=Q||nt,K=K||at,gt=gt||ft,(nt!==d||Q!==M)&&(n.blendEquationSeparate(Be[nt],Be[Q]),d=nt,M=Q),(at!==b||ft!==C||K!==R||gt!==v)&&(n.blendFuncSeparate(I[at],I[ft],I[K],I[gt]),b=at,C=ft,R=K,v=gt),(Ut.equals(x)===!1||de!==A)&&(n.blendColor(Ut.r,Ut.g,Ut.b,de),x.copy(Ut),A=de),m=D,y=!1}function Ht(D,nt){D.side===Jn?pt(n.CULL_FACE):J(n.CULL_FACE);let at=D.side===Ye;nt&&(at=!at),Ot(at),D.blending===Ps&&D.transparent===!1?ye(vi):ye(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const ft=D.stencilWrite;a.setTest(ft),ft&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),yt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(D){E!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),E=D)}function _t(D){D!==vp?(J(n.CULL_FACE),D!==w&&(D===Zc?n.cullFace(n.BACK):D===Mp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pt(n.CULL_FACE),w=D}function xe(D){D!==O&&(B&&n.lineWidth(D),O=D)}function yt(D,nt,at){D?(J(n.POLYGON_OFFSET_FILL),(H!==nt||k!==at)&&(n.polygonOffset(nt,at),H=nt,k=at)):pt(n.POLYGON_OFFSET_FILL)}function zt(D){D?J(n.SCISSOR_TEST):pt(n.SCISSOR_TEST)}function De(D){D===void 0&&(D=n.TEXTURE0+G-1),st!==D&&(n.activeTexture(D),st=D)}function Te(D,nt,at){at===void 0&&(st===null?at=n.TEXTURE0+G-1:at=st);let ft=rt[at];ft===void 0&&(ft={type:void 0,texture:void 0},rt[at]=ft),(ft.type!==D||ft.texture!==nt)&&(st!==at&&(n.activeTexture(at),st=at),n.bindTexture(D,nt||q[D]),ft.type=D,ft.texture=nt)}function P(){const D=rt[st];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{n.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{n.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{n.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{n.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{n.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{n.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{n.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(D){ie.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ie.copy(D))}function Lt(D){ue.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ue.copy(D))}function Mt(D,nt){let at=l.get(nt);at===void 0&&(at=new WeakMap,l.set(nt,at));let ft=at.get(D);ft===void 0&&(ft=n.getUniformBlockIndex(nt,D.name),at.set(D,ft))}function ct(D,nt){const ft=l.get(nt).get(D);c.get(nt)!==ft&&(n.uniformBlockBinding(nt,ft,D.__bindingPointIndex),c.set(nt,ft))}function Bt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},st=null,rt={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,b=null,C=null,M=null,R=null,v=null,x=new It(0,0,0),A=0,y=!1,E=null,w=null,O=null,H=null,k=null,ie.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:pt,bindFramebuffer:Nt,drawBuffers:Ct,useProgram:jt,setBlending:ye,setMaterial:Ht,setFlipSided:Ot,setCullFace:_t,setLineWidth:xe,setPolygonOffset:yt,setScissorTest:zt,activeTexture:De,bindTexture:Te,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:F,texImage2D:vt,texImage3D:et,updateUBOMapping:Mt,uniformBlockBinding:ct,texStorage2D:ot,texStorage3D:xt,texSubImage2D:$,texSubImage3D:j,compressedTexSubImage2D:X,compressedTexSubImage3D:Et,scissor:ht,viewport:Lt,reset:Bt}}function Tx(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new wt,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return p?new OffscreenCanvas(P,S):Co("canvas")}function _(P,S,F){let $=1;const j=Te(P);if((j.width>F||j.height>F)&&($=F/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const X=Math.floor($*j.width),Et=Math.floor($*j.height);h===void 0&&(h=g(X,Et));const ot=S?g(X,Et):h;return ot.width=X,ot.height=Et,ot.getContext("2d").drawImage(P,0,0,X,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+Et+")."),ot}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),P;return P}function m(P){return P.generateMipmaps}function d(P){n.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(P,S,F,$,j=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let X=S;if(S===n.RED&&(F===n.FLOAT&&(X=n.R32F),F===n.HALF_FLOAT&&(X=n.R16F),F===n.UNSIGNED_BYTE&&(X=n.R8)),S===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.R8UI),F===n.UNSIGNED_SHORT&&(X=n.R16UI),F===n.UNSIGNED_INT&&(X=n.R32UI),F===n.BYTE&&(X=n.R8I),F===n.SHORT&&(X=n.R16I),F===n.INT&&(X=n.R32I)),S===n.RG&&(F===n.FLOAT&&(X=n.RG32F),F===n.HALF_FLOAT&&(X=n.RG16F),F===n.UNSIGNED_BYTE&&(X=n.RG8)),S===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RG8UI),F===n.UNSIGNED_SHORT&&(X=n.RG16UI),F===n.UNSIGNED_INT&&(X=n.RG32UI),F===n.BYTE&&(X=n.RG8I),F===n.SHORT&&(X=n.RG16I),F===n.INT&&(X=n.RG32I)),S===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGB8UI),F===n.UNSIGNED_SHORT&&(X=n.RGB16UI),F===n.UNSIGNED_INT&&(X=n.RGB32UI),F===n.BYTE&&(X=n.RGB8I),F===n.SHORT&&(X=n.RGB16I),F===n.INT&&(X=n.RGB32I)),S===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),F===n.UNSIGNED_INT&&(X=n.RGBA32UI),F===n.BYTE&&(X=n.RGBA8I),F===n.SHORT&&(X=n.RGBA16I),F===n.INT&&(X=n.RGBA32I)),S===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),S===n.RGBA){const Et=j?bo:Qt.getTransfer($);F===n.FLOAT&&(X=n.RGBA32F),F===n.HALF_FLOAT&&(X=n.RGBA16F),F===n.UNSIGNED_BYTE&&(X=Et===re?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function M(P,S){let F;return P?S===null||S===$i||S===_r?F=n.DEPTH24_STENCIL8:S===kn?F=n.DEPTH32F_STENCIL8:S===gr&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===$i||S===_r?F=n.DEPTH_COMPONENT24:S===kn?F=n.DEPTH_COMPONENT32F:S===gr&&(F=n.DEPTH_COMPONENT16),F}function R(P,S){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==sn&&P.minFilter!==Bn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function v(P){const S=P.target;S.removeEventListener("dispose",v),A(S),S.isVideoTexture&&u.delete(S)}function x(P){const S=P.target;S.removeEventListener("dispose",x),E(S)}function A(P){const S=i.get(P);if(S.__webglInit===void 0)return;const F=P.source,$=f.get(F);if($){const j=$[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(P),Object.keys($).length===0&&f.delete(F)}i.remove(P)}function y(P){const S=i.get(P);n.deleteTexture(S.__webglTexture);const F=P.source,$=f.get(F);delete $[S.__cacheKey],o.memory.textures--}function E(P){const S=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let j=0;j<S.__webglFramebuffer[$].length;j++)n.deleteFramebuffer(S.__webglFramebuffer[$][j]);else n.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)n.deleteFramebuffer(S.__webglFramebuffer[$]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const F=P.textures;for(let $=0,j=F.length;$<j;$++){const X=i.get(F[$]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(F[$])}i.remove(P)}let w=0;function O(){w=0}function H(){const P=w;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),w+=1,P}function k(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function G(P,S){const F=i.get(P);if(P.isVideoTexture&&zt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&F.__version!==P.version){const $=P.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,P,S);return}}else P.isExternalTexture&&(F.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+S)}function B(P,S){const F=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&F.__version!==P.version){q(F,P,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+S)}function Y(P,S){const F=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&F.__version!==P.version){q(F,P,S);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+S)}function W(P,S){const F=i.get(P);if(P.version>0&&F.__version!==P.version){J(F,P,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+S)}const st={[ll]:n.REPEAT,[zi]:n.CLAMP_TO_EDGE,[cl]:n.MIRRORED_REPEAT},rt={[sn]:n.NEAREST,[jp]:n.NEAREST_MIPMAP_NEAREST,[Nr]:n.NEAREST_MIPMAP_LINEAR,[Bn]:n.LINEAR,[aa]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},bt={[tm]:n.NEVER,[om]:n.ALWAYS,[em]:n.LESS,[Jh]:n.LEQUAL,[nm]:n.EQUAL,[rm]:n.GEQUAL,[im]:n.GREATER,[sm]:n.NOTEQUAL};function Ft(P,S){if(S.type===kn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Bn||S.magFilter===aa||S.magFilter===Nr||S.magFilter===Vi||S.minFilter===Bn||S.minFilter===aa||S.minFilter===Nr||S.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,st[S.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,st[S.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,st[S.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,rt[S.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,rt[S.minFilter]),S.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,bt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===sn||S.minFilter!==Nr&&S.minFilter!==Vi||S.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ie(P,S){let F=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",v));const $=S.source;let j=f.get($);j===void 0&&(j={},f.set($,j));const X=k(S);if(X!==P.__cacheKey){j[X]===void 0&&(j[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),j[X].usedTimes++;const Et=j[P.__cacheKey];Et!==void 0&&(j[P.__cacheKey].usedTimes--,Et.usedTimes===0&&y(S)),P.__cacheKey=X,P.__webglTexture=j[X].texture}return F}function ue(P,S,F){return Math.floor(Math.floor(P/F)/S)}function Kt(P,S,F,$){const X=P.updateRanges;if(X.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,F,$,S.data);else{X.sort((et,ht)=>et.start-ht.start);let Et=0;for(let et=1;et<X.length;et++){const ht=X[Et],Lt=X[et],Mt=ht.start+ht.count,ct=ue(Lt.start,S.width,4),Bt=ue(ht.start,S.width,4);Lt.start<=Mt+1&&ct===Bt&&ue(Lt.start+Lt.count-1,S.width,4)===ct?ht.count=Math.max(ht.count,Lt.start+Lt.count-ht.start):(++Et,X[Et]=Lt)}X.length=Et+1;const ot=n.getParameter(n.UNPACK_ROW_LENGTH),xt=n.getParameter(n.UNPACK_SKIP_PIXELS),vt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let et=0,ht=X.length;et<ht;et++){const Lt=X[et],Mt=Math.floor(Lt.start/4),ct=Math.ceil(Lt.count/4),Bt=Mt%S.width,D=Math.floor(Mt/S.width),nt=ct,at=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Bt),n.pixelStorei(n.UNPACK_SKIP_ROWS,D),e.texSubImage2D(n.TEXTURE_2D,0,Bt,D,nt,at,F,$,S.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ot),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xt),n.pixelStorei(n.UNPACK_SKIP_ROWS,vt)}}function q(P,S,F){let $=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=n.TEXTURE_3D);const j=ie(P,S),X=S.source;e.bindTexture($,P.__webglTexture,n.TEXTURE0+F);const Et=i.get(X);if(X.version!==Et.__version||j===!0){e.activeTexture(n.TEXTURE0+F);const ot=Qt.getPrimaries(Qt.workingColorSpace),xt=S.colorSpace===pi?null:Qt.getPrimaries(S.colorSpace),vt=S.colorSpace===pi||ot===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let et=_(S.image,!1,s.maxTextureSize);et=De(S,et);const ht=r.convert(S.format,S.colorSpace),Lt=r.convert(S.type);let Mt=C(S.internalFormat,ht,Lt,S.colorSpace,S.isVideoTexture);Ft($,S);let ct;const Bt=S.mipmaps,D=S.isVideoTexture!==!0,nt=Et.__version===void 0||j===!0,at=X.dataReady,ft=R(S,et);if(S.isDepthTexture)Mt=M(S.format===xr,S.type),nt&&(D?e.texStorage2D(n.TEXTURE_2D,1,Mt,et.width,et.height):e.texImage2D(n.TEXTURE_2D,0,Mt,et.width,et.height,0,ht,Lt,null));else if(S.isDataTexture)if(Bt.length>0){D&&nt&&e.texStorage2D(n.TEXTURE_2D,ft,Mt,Bt[0].width,Bt[0].height);for(let Q=0,K=Bt.length;Q<K;Q++)ct=Bt[Q],D?at&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,ct.width,ct.height,ht,Lt,ct.data):e.texImage2D(n.TEXTURE_2D,Q,Mt,ct.width,ct.height,0,ht,Lt,ct.data);S.generateMipmaps=!1}else D?(nt&&e.texStorage2D(n.TEXTURE_2D,ft,Mt,et.width,et.height),at&&Kt(S,et,ht,Lt)):e.texImage2D(n.TEXTURE_2D,0,Mt,et.width,et.height,0,ht,Lt,et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){D&&nt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,Mt,Bt[0].width,Bt[0].height,et.depth);for(let Q=0,K=Bt.length;Q<K;Q++)if(ct=Bt[Q],S.format!==Tn)if(ht!==null)if(D){if(at)if(S.layerUpdates.size>0){const gt=Nu(ct.width,ct.height,S.format,S.type);for(const Ut of S.layerUpdates){const de=ct.data.subarray(Ut*gt/ct.data.BYTES_PER_ELEMENT,(Ut+1)*gt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Ut,ct.width,ct.height,1,ht,de)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ct.width,ct.height,et.depth,ht,ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Mt,ct.width,ct.height,et.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?at&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ct.width,ct.height,et.depth,ht,Lt,ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,Mt,ct.width,ct.height,et.depth,0,ht,Lt,ct.data)}else{D&&nt&&e.texStorage2D(n.TEXTURE_2D,ft,Mt,Bt[0].width,Bt[0].height);for(let Q=0,K=Bt.length;Q<K;Q++)ct=Bt[Q],S.format!==Tn?ht!==null?D?at&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,ct.width,ct.height,ht,ct.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,Mt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?at&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,ct.width,ct.height,ht,Lt,ct.data):e.texImage2D(n.TEXTURE_2D,Q,Mt,ct.width,ct.height,0,ht,Lt,ct.data)}else if(S.isDataArrayTexture)if(D){if(nt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,Mt,et.width,et.height,et.depth),at)if(S.layerUpdates.size>0){const Q=Nu(et.width,et.height,S.format,S.type);for(const K of S.layerUpdates){const gt=et.data.subarray(K*Q/et.data.BYTES_PER_ELEMENT,(K+1)*Q/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,ht,Lt,gt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ht,Lt,et.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Mt,et.width,et.height,et.depth,0,ht,Lt,et.data);else if(S.isData3DTexture)D?(nt&&e.texStorage3D(n.TEXTURE_3D,ft,Mt,et.width,et.height,et.depth),at&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ht,Lt,et.data)):e.texImage3D(n.TEXTURE_3D,0,Mt,et.width,et.height,et.depth,0,ht,Lt,et.data);else if(S.isFramebufferTexture){if(nt)if(D)e.texStorage2D(n.TEXTURE_2D,ft,Mt,et.width,et.height);else{let Q=et.width,K=et.height;for(let gt=0;gt<ft;gt++)e.texImage2D(n.TEXTURE_2D,gt,Mt,Q,K,0,ht,Lt,null),Q>>=1,K>>=1}}else if(Bt.length>0){if(D&&nt){const Q=Te(Bt[0]);e.texStorage2D(n.TEXTURE_2D,ft,Mt,Q.width,Q.height)}for(let Q=0,K=Bt.length;Q<K;Q++)ct=Bt[Q],D?at&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,ht,Lt,ct):e.texImage2D(n.TEXTURE_2D,Q,Mt,ht,Lt,ct);S.generateMipmaps=!1}else if(D){if(nt){const Q=Te(et);e.texStorage2D(n.TEXTURE_2D,ft,Mt,Q.width,Q.height)}at&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht,Lt,et)}else e.texImage2D(n.TEXTURE_2D,0,Mt,ht,Lt,et);m(S)&&d($),Et.__version=X.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function J(P,S,F){if(S.image.length!==6)return;const $=ie(P,S),j=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+F);const X=i.get(j);if(j.version!==X.__version||$===!0){e.activeTexture(n.TEXTURE0+F);const Et=Qt.getPrimaries(Qt.workingColorSpace),ot=S.colorSpace===pi?null:Qt.getPrimaries(S.colorSpace),xt=S.colorSpace===pi||Et===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const vt=S.isCompressedTexture||S.image[0].isCompressedTexture,et=S.image[0]&&S.image[0].isDataTexture,ht=[];for(let K=0;K<6;K++)!vt&&!et?ht[K]=_(S.image[K],!0,s.maxCubemapSize):ht[K]=et?S.image[K].image:S.image[K],ht[K]=De(S,ht[K]);const Lt=ht[0],Mt=r.convert(S.format,S.colorSpace),ct=r.convert(S.type),Bt=C(S.internalFormat,Mt,ct,S.colorSpace),D=S.isVideoTexture!==!0,nt=X.__version===void 0||$===!0,at=j.dataReady;let ft=R(S,Lt);Ft(n.TEXTURE_CUBE_MAP,S);let Q;if(vt){D&&nt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Bt,Lt.width,Lt.height);for(let K=0;K<6;K++){Q=ht[K].mipmaps;for(let gt=0;gt<Q.length;gt++){const Ut=Q[gt];S.format!==Tn?Mt!==null?D?at&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,Ut.width,Ut.height,Mt,Ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,Bt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,Ut.width,Ut.height,Mt,ct,Ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,Bt,Ut.width,Ut.height,0,Mt,ct,Ut.data)}}}else{if(Q=S.mipmaps,D&&nt){Q.length>0&&ft++;const K=Te(ht[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Bt,K.width,K.height)}for(let K=0;K<6;K++)if(et){D?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ht[K].width,ht[K].height,Mt,ct,ht[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Bt,ht[K].width,ht[K].height,0,Mt,ct,ht[K].data);for(let gt=0;gt<Q.length;gt++){const de=Q[gt].image[K].image;D?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,de.width,de.height,Mt,ct,de.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,Bt,de.width,de.height,0,Mt,ct,de.data)}}else{D?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Mt,ct,ht[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Bt,Mt,ct,ht[K]);for(let gt=0;gt<Q.length;gt++){const Ut=Q[gt];D?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,Mt,ct,Ut.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,Bt,Mt,ct,Ut.image[K])}}}m(S)&&d(n.TEXTURE_CUBE_MAP),X.__version=j.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function pt(P,S,F,$,j,X){const Et=r.convert(F.format,F.colorSpace),ot=r.convert(F.type),xt=C(F.internalFormat,Et,ot,F.colorSpace),vt=i.get(S),et=i.get(F);if(et.__renderTarget=S,!vt.__hasExternalTextures){const ht=Math.max(1,S.width>>X),Lt=Math.max(1,S.height>>X);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,X,xt,ht,Lt,S.depth,0,Et,ot,null):e.texImage2D(j,X,xt,ht,Lt,0,Et,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),yt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,j,et.__webglTexture,0,xe(S)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,j,et.__webglTexture,X),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(P,S,F){if(n.bindRenderbuffer(n.RENDERBUFFER,P),S.depthBuffer){const $=S.depthTexture,j=$&&$.isDepthTexture?$.type:null,X=M(S.stencilBuffer,j),Et=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=xe(S);yt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,X,S.width,S.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,X,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,X,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Et,n.RENDERBUFFER,P)}else{const $=S.textures;for(let j=0;j<$.length;j++){const X=$[j],Et=r.convert(X.format,X.colorSpace),ot=r.convert(X.type),xt=C(X.internalFormat,Et,ot,X.colorSpace),vt=xe(S);F&&yt(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt,xt,S.width,S.height):yt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt,xt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,xt,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ct(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);const j=$.__webglTexture,X=xe(S);if(S.depthTexture.format===yr)yt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(S.depthTexture.format===xr)yt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function jt(P){const S=i.get(P),F=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const $=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=$}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const $=P.texture.mipmaps;$&&$.length>0?Ct(S.__webglFramebuffer[0],P):Ct(S.__webglFramebuffer,P)}else if(F){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=n.createRenderbuffer(),Nt(S.__webglDepthbuffer[$],P,!1);else{const j=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,X)}}else{const $=P.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Nt(S.__webglDepthbuffer,P,!1);else{const j=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,X)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(P,S,F){const $=i.get(P);S!==void 0&&pt($.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&jt(P)}function I(P){const S=P.texture,F=i.get(P),$=i.get(S);P.addEventListener("dispose",x);const j=P.textures,X=P.isWebGLCubeRenderTarget===!0,Et=j.length>1;if(Et||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=S.version,o.memory.textures++),X){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let xt=0;xt<S.mipmaps.length;xt++)F.__webglFramebuffer[ot][xt]=n.createFramebuffer()}else F.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)F.__webglFramebuffer[ot]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Et)for(let ot=0,xt=j.length;ot<xt;ot++){const vt=i.get(j[ot]);vt.__webglTexture===void 0&&(vt.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&yt(P)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ot=0;ot<j.length;ot++){const xt=j[ot];F.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ot]);const vt=r.convert(xt.format,xt.colorSpace),et=r.convert(xt.type),ht=C(xt.internalFormat,vt,et,xt.colorSpace,P.isXRRenderTarget===!0),Lt=xe(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,ht,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,F.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Nt(F.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Ft(n.TEXTURE_CUBE_MAP,S);for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)pt(F.__webglFramebuffer[ot][xt],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt);else pt(F.__webglFramebuffer[ot],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(S)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ot=0,xt=j.length;ot<xt;ot++){const vt=j[ot],et=i.get(vt);let ht=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ht=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,et.__webglTexture),Ft(ht,vt),pt(F.__webglFramebuffer,P,vt,n.COLOR_ATTACHMENT0+ot,ht,0),m(vt)&&d(ht)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ot=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,$.__webglTexture),Ft(ot,S),S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)pt(F.__webglFramebuffer[xt],P,S,n.COLOR_ATTACHMENT0,ot,xt);else pt(F.__webglFramebuffer,P,S,n.COLOR_ATTACHMENT0,ot,0);m(S)&&d(ot),e.unbindTexture()}P.depthBuffer&&jt(P)}function ye(P){const S=P.textures;for(let F=0,$=S.length;F<$;F++){const j=S[F];if(m(j)){const X=b(P),Et=i.get(j).__webglTexture;e.bindTexture(X,Et),d(X),e.unbindTexture()}}}const Ht=[],Ot=[];function _t(P){if(P.samples>0){if(yt(P)===!1){const S=P.textures,F=P.width,$=P.height;let j=n.COLOR_BUFFER_BIT;const X=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=i.get(P),ot=S.length>1;if(ot)for(let vt=0;vt<S.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);const xt=P.texture.mipmaps;xt&&xt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let vt=0;vt<S.length;vt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Et.__webglColorRenderbuffer[vt]);const et=i.get(S[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,et,0)}n.blitFramebuffer(0,0,F,$,0,0,F,$,j,n.NEAREST),c===!0&&(Ht.length=0,Ot.length=0,Ht.push(n.COLOR_ATTACHMENT0+vt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ht.push(X),Ot.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ot)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let vt=0;vt<S.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,Et.__webglColorRenderbuffer[vt]);const et=i.get(S[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,et,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const S=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function xe(P){return Math.min(s.maxSamples,P.samples)}function yt(P){const S=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function zt(P){const S=o.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function De(P,S){const F=P.colorSpace,$=P.format,j=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||F!==Fs&&F!==pi&&(Qt.getTransfer(F)===re?($!==Tn||j!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}function Te(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=O,this.setTexture2D=G,this.setTexture2DArray=B,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=Be,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=yt}function Ax(n,t){function e(i,s=pi){let r;const o=Qt.getTransfer(s);if(i===Vn)return n.UNSIGNED_BYTE;if(i===sc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===rc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$h)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xh)return n.BYTE;if(i===qh)return n.SHORT;if(i===gr)return n.UNSIGNED_SHORT;if(i===ic)return n.INT;if(i===$i)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===Cr)return n.HALF_FLOAT;if(i===Kh)return n.ALPHA;if(i===jh)return n.RGB;if(i===Tn)return n.RGBA;if(i===yr)return n.DEPTH_COMPONENT;if(i===xr)return n.DEPTH_STENCIL;if(i===oc)return n.RED;if(i===ac)return n.RED_INTEGER;if(i===Zh)return n.RG;if(i===lc)return n.RG_INTEGER;if(i===cc)return n.RGBA_INTEGER;if(i===po||i===mo||i===go||i===_o)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ul||i===hl||i===dl||i===fl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pl||i===ml||i===gl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===pl||i===ml)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===gl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===_l||i===yl||i===xl||i===vl||i===Ml||i===Sl||i===bl||i===El||i===Cl||i===Tl||i===Al||i===wl||i===Rl||i===Pl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===_l)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ml)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===El)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Al)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Il||i===Ll||i===Ol)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Il)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dl||i===Nl||i===Ul||i===Fl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Dl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ul)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rx=`
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

}`;class Px{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new hd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ti({vertexShader:wx,fragmentShader:Rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ve(new Xo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ix extends Qi{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Px,d={},b=e.getContextAttributes();let C=null,M=null;const R=[],v=[],x=new wt;let A=null;const y=new hn;y.viewport=new Ee;const E=new hn;E.viewport=new Ee;const w=[y,E],O=new jm;let H=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=R[q];return J===void 0&&(J=new Ra,R[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=R[q];return J===void 0&&(J=new Ra,R[q]=J),J.getGripSpace()},this.getHand=function(q){let J=R[q];return J===void 0&&(J=new Ra,R[q]=J),J.getHandSpace()};function G(q){const J=v.indexOf(q.inputSource);if(J===-1)return;const pt=R[J];pt!==void 0&&(pt.update(q.inputSource,q.frame,l||o),pt.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Y);for(let q=0;q<R.length;q++){const J=v[q];J!==null&&(v[q]=null,R[q].disconnect(J))}H=null,k=null,m.reset();for(const q in d)delete d[q];t.setRenderTarget(C),p=null,f=null,h=null,s=null,M=null,Kt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Y),b.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Nt=null,Ct=null;b.depth&&(Ct=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=b.stencil?xr:yr,Nt=b.stencil?_r:$i);const jt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(jt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Yi(f.textureWidth,f.textureHeight,{format:Tn,type:Vn,depthTexture:new ud(f.textureWidth,f.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const pt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Yi(p.framebufferWidth,p.framebufferHeight,{format:Tn,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Kt.setContext(s),Kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(q){for(let J=0;J<q.removed.length;J++){const pt=q.removed[J],Nt=v.indexOf(pt);Nt>=0&&(v[Nt]=null,R[Nt].disconnect(pt))}for(let J=0;J<q.added.length;J++){const pt=q.added[J];let Nt=v.indexOf(pt);if(Nt===-1){for(let jt=0;jt<R.length;jt++)if(jt>=v.length){v.push(pt),Nt=jt;break}else if(v[jt]===null){v[jt]=pt,Nt=jt;break}if(Nt===-1)break}const Ct=R[Nt];Ct&&Ct.connect(pt)}}const W=new L,st=new L;function rt(q,J,pt){W.setFromMatrixPosition(J.matrixWorld),st.setFromMatrixPosition(pt.matrixWorld);const Nt=W.distanceTo(st),Ct=J.projectionMatrix.elements,jt=pt.projectionMatrix.elements,Be=Ct[14]/(Ct[10]-1),I=Ct[14]/(Ct[10]+1),ye=(Ct[9]+1)/Ct[5],Ht=(Ct[9]-1)/Ct[5],Ot=(Ct[8]-1)/Ct[0],_t=(jt[8]+1)/jt[0],xe=Be*Ot,yt=Be*_t,zt=Nt/(-Ot+_t),De=zt*-Ot;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(De),q.translateZ(zt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ct[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Te=Be+zt,P=I+zt,S=xe-De,F=yt+(Nt-De),$=ye*I/P*Te,j=Ht*I/P*Te;q.projectionMatrix.makePerspective(S,F,$,j,Te,P),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function bt(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let J=q.near,pt=q.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),O.near=E.near=y.near=J,O.far=E.far=y.far=pt,(H!==O.near||k!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),H=O.near,k=O.far),O.layers.mask=q.layers.mask|6,y.layers.mask=O.layers.mask&3,E.layers.mask=O.layers.mask&5;const Nt=q.parent,Ct=O.cameras;bt(O,Nt);for(let jt=0;jt<Ct.length;jt++)bt(Ct[jt],Nt);Ct.length===2?rt(O,y,E):O.projectionMatrix.copy(y.projectionMatrix),Ft(q,O,Nt)};function Ft(q,J,pt){pt===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(pt.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Bl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(q){return d[q]};let ie=null;function ue(q,J){if(u=J.getViewerPose(l||o),g=J,u!==null){const pt=u.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let Nt=!1;pt.length!==O.cameras.length&&(O.cameras.length=0,Nt=!0);for(let I=0;I<pt.length;I++){const ye=pt[I];let Ht=null;if(p!==null)Ht=p.getViewport(ye);else{const _t=h.getViewSubImage(f,ye);Ht=_t.viewport,I===0&&(t.setRenderTargetTextures(M,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(M))}let Ot=w[I];Ot===void 0&&(Ot=new hn,Ot.layers.enable(I),Ot.viewport=new Ee,w[I]=Ot),Ot.matrix.fromArray(ye.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(ye.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),I===0&&(O.matrix.copy(Ot.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Nt===!0&&O.cameras.push(Ot)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const I=h.getDepthInformation(pt[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(Ct&&Ct.includes("camera-access")&&_){t.state.unbindTexture(),h=i.getBinding();for(let I=0;I<pt.length;I++){const ye=pt[I].camera;if(ye){let Ht=d[ye];Ht||(Ht=new hd,d[ye]=Ht);const Ot=h.getCameraImage(ye);Ht.sourceTexture=Ot}}}}for(let pt=0;pt<R.length;pt++){const Nt=v[pt],Ct=R[pt];Nt!==null&&Ct!==void 0&&Ct.update(Nt,J,l||o)}ie&&ie(q,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const Kt=new yd;Kt.setAnimationLoop(ue),this.setAnimationLoop=function(q){ie=q},this.dispose=function(){}}}const Ui=new Pn,Lx=new le;function Ox(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,sd(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,b,C,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,b,C):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ye&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ye&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const b=t.get(d),C=b.envMap,M=b.envMapRotation;C&&(m.envMap.value=C,Ui.copy(M),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(Lx.makeRotationFromEuler(Ui)),m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,b,C){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=C*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ye&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const b=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Dx(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,C){const M=C.program;i.uniformBlockBinding(b,M)}function l(b,C){let M=s[b.id];M===void 0&&(g(b),M=u(b),s[b.id]=M,b.addEventListener("dispose",m));const R=C.program;i.updateUBOMapping(b,R);const v=t.render.frame;r[b.id]!==v&&(f(b),r[b.id]=v)}function u(b){const C=h();b.__bindingPointIndex=C;const M=n.createBuffer(),R=b.__size,v=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,R,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,C,M),M}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const C=s[b.id],M=b.uniforms,R=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let v=0,x=M.length;v<x;v++){const A=Array.isArray(M[v])?M[v]:[M[v]];for(let y=0,E=A.length;y<E;y++){const w=A[y];if(p(w,v,y,R)===!0){const O=w.__offset,H=Array.isArray(w.value)?w.value:[w.value];let k=0;for(let G=0;G<H.length;G++){const B=H[G],Y=_(B);typeof B=="number"||typeof B=="boolean"?(w.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,O+k,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=0,w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=0,w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=0):(B.toArray(w.__data,k),k+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,C,M,R){const v=b.value,x=C+"_"+M;if(R[x]===void 0)return typeof v=="number"||typeof v=="boolean"?R[x]=v:R[x]=v.clone(),!0;{const A=R[x];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return R[x]=v,!0}else if(A.equals(v)===!1)return A.copy(v),!0}return!1}function g(b){const C=b.uniforms;let M=0;const R=16;for(let x=0,A=C.length;x<A;x++){const y=Array.isArray(C[x])?C[x]:[C[x]];for(let E=0,w=y.length;E<w;E++){const O=y[E],H=Array.isArray(O.value)?O.value:[O.value];for(let k=0,G=H.length;k<G;k++){const B=H[k],Y=_(B),W=M%R,st=W%Y.boundary,rt=W+st;M+=st,rt!==0&&R-rt<Y.storage&&(M+=R-rt),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=Y.storage}}}const v=M%R;return v>0&&(M+=R-v),b.__size=M,b.__cache={},this}function _(b){const C={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(C.boundary=4,C.storage=4):b.isVector2?(C.boundary=8,C.storage=8):b.isVector3||b.isColor?(C.boundary=16,C.storage=12):b.isVector4?(C.boundary=16,C.storage=16):b.isMatrix3?(C.boundary=48,C.storage=48):b.isMatrix4?(C.boundary=64,C.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),C}function m(b){const C=b.target;C.removeEventListener("dispose",m);const M=o.indexOf(C.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function d(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}class Nx{constructor(t={}){const{canvas:e=um(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const b=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let R=!1;this._outputColorSpace=un;let v=0,x=0,A=null,y=-1,E=null;const w=new Ee,O=new Ee;let H=null;const k=new It(0);let G=0,B=e.width,Y=e.height,W=1,st=null,rt=null;const bt=new Ee(0,0,B,Y),Ft=new Ee(0,0,B,Y);let ie=!1;const ue=new pc;let Kt=!1,q=!1;const J=new le,pt=new L,Nt=new Ee,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function Be(){return A===null?W:1}let I=i;function ye(T,N){return e.getContext(T,N)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nc}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",Q,!1),I===null){const N="webgl2";if(I=ye(N,T),I===null)throw ye(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ht,Ot,_t,xe,yt,zt,De,Te,P,S,F,$,j,X,Et,ot,xt,vt,et,ht,Lt,Mt,ct,Bt;function D(){Ht=new X_(I),Ht.init(),Mt=new Ax(I,Ht),Ot=new H_(I,Ht,t,Mt),_t=new Cx(I,Ht),Ot.reversedDepthBuffer&&f&&_t.buffers.depth.setReversed(!0),xe=new Y_(I),yt=new dx,zt=new Tx(I,Ht,_t,yt,Ot,Mt,xe),De=new k_(M),Te=new W_(M),P=new tg(I),ct=new U_(I,P),S=new q_(I,P,xe,ct),F=new j_(I,S,P,xe),et=new K_(I,Ot,zt),ot=new B_(yt),$=new hx(M,De,Te,Ht,Ot,ct,ot),j=new Ox(M,yt),X=new px,Et=new vx(Ht),vt=new N_(M,De,Te,_t,F,p,c),xt=new bx(M,F,Ot),Bt=new Dx(I,xe,Ot,_t),ht=new F_(I,Ht,xe),Lt=new $_(I,Ht,xe),xe.programs=$.programs,M.capabilities=Ot,M.extensions=Ht,M.properties=yt,M.renderLists=X,M.shadowMap=xt,M.state=_t,M.info=xe}D();const nt=new Ix(M,I);this.xr=nt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=Ht.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ht.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(B,Y,!1))},this.getSize=function(T){return T.set(B,Y)},this.setSize=function(T,N,z=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,Y=N,e.width=Math.floor(T*W),e.height=Math.floor(N*W),z===!0&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(B*W,Y*W).floor()},this.setDrawingBufferSize=function(T,N,z){B=T,Y=N,W=z,e.width=Math.floor(T*z),e.height=Math.floor(N*z),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(bt)},this.setViewport=function(T,N,z,V){T.isVector4?bt.set(T.x,T.y,T.z,T.w):bt.set(T,N,z,V),_t.viewport(w.copy(bt).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(Ft)},this.setScissor=function(T,N,z,V){T.isVector4?Ft.set(T.x,T.y,T.z,T.w):Ft.set(T,N,z,V),_t.scissor(O.copy(Ft).multiplyScalar(W).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(T){_t.setScissorTest(ie=T)},this.setOpaqueSort=function(T){st=T},this.setTransparentSort=function(T){rt=T},this.getClearColor=function(T){return T.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor(...arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha(...arguments)},this.clear=function(T=!0,N=!0,z=!0){let V=0;if(T){let U=!1;if(A!==null){const tt=A.texture.format;U=tt===cc||tt===lc||tt===ac}if(U){const tt=A.texture.type,ut=tt===Vn||tt===$i||tt===gr||tt===_r||tt===sc||tt===rc,mt=vt.getClearColor(),dt=vt.getClearAlpha(),Pt=mt.r,Dt=mt.g,At=mt.b;ut?(g[0]=Pt,g[1]=Dt,g[2]=At,g[3]=dt,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Pt,_[1]=Dt,_[2]=At,_[3]=dt,I.clearBufferiv(I.COLOR,0,_))}else V|=I.COLOR_BUFFER_BIT}N&&(V|=I.DEPTH_BUFFER_BIT),z&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),vt.dispose(),X.dispose(),Et.dispose(),yt.dispose(),De.dispose(),Te.dispose(),F.dispose(),ct.dispose(),Bt.dispose(),$.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",On),nt.removeEventListener("sessionend",Xc),Ri.stop()};function at(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const T=xe.autoReset,N=xt.enabled,z=xt.autoUpdate,V=xt.needsUpdate,U=xt.type;D(),xe.autoReset=T,xt.enabled=N,xt.autoUpdate=z,xt.needsUpdate=V,xt.type=U}function Q(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function K(T){const N=T.target;N.removeEventListener("dispose",K),gt(N)}function gt(T){Ut(T),yt.remove(T)}function Ut(T){const N=yt.get(T).programs;N!==void 0&&(N.forEach(function(z){$.releaseProgram(z)}),T.isShaderMaterial&&$.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,z,V,U,tt){N===null&&(N=Ct);const ut=U.isMesh&&U.matrixWorld.determinant()<0,mt=cp(T,N,z,V,U);_t.setMaterial(V,ut);let dt=z.index,Pt=1;if(V.wireframe===!0){if(dt=S.getWireframeAttribute(z),dt===void 0)return;Pt=2}const Dt=z.drawRange,At=z.attributes.position;let qt=Dt.start*Pt,se=(Dt.start+Dt.count)*Pt;tt!==null&&(qt=Math.max(qt,tt.start*Pt),se=Math.min(se,(tt.start+tt.count)*Pt)),dt!==null?(qt=Math.max(qt,0),se=Math.min(se,dt.count)):At!=null&&(qt=Math.max(qt,0),se=Math.min(se,At.count));const be=se-qt;if(be<0||be===1/0)return;ct.setup(U,V,mt,z,dt);let ge,he=ht;if(dt!==null&&(ge=P.get(dt),he=Lt,he.setIndex(ge)),U.isMesh)V.wireframe===!0?(_t.setLineWidth(V.wireframeLinewidth*Be()),he.setMode(I.LINES)):he.setMode(I.TRIANGLES);else if(U.isLine){let Rt=V.linewidth;Rt===void 0&&(Rt=1),_t.setLineWidth(Rt*Be()),U.isLineSegments?he.setMode(I.LINES):U.isLineLoop?he.setMode(I.LINE_LOOP):he.setMode(I.LINE_STRIP)}else U.isPoints?he.setMode(I.POINTS):U.isSprite&&he.setMode(I.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)vr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))he.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Rt=U._multiDrawStarts,ve=U._multiDrawCounts,Jt=U._multiDrawCount,Qe=dt?P.get(dt).bytesPerElement:1,ns=yt.get(V).currentProgram.getUniforms();for(let tn=0;tn<Jt;tn++)ns.setValue(I,"_gl_DrawID",tn),he.render(Rt[tn]/Qe,ve[tn])}else if(U.isInstancedMesh)he.renderInstances(qt,be,U.count);else if(z.isInstancedBufferGeometry){const Rt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ve=Math.min(z.instanceCount,Rt);he.renderInstances(qt,be,ve)}else he.render(qt,be)};function de(T,N,z){T.transparent===!0&&T.side===Jn&&T.forceSinglePass===!1?(T.side=Ye,T.needsUpdate=!0,Dr(T,N,z),T.side=Ci,T.needsUpdate=!0,Dr(T,N,z),T.side=Jn):Dr(T,N,z)}this.compile=function(T,N,z=null){z===null&&(z=T),d=Et.get(z),d.init(N),C.push(d),z.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),T!==z&&T.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const V=new Set;return T.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const tt=U.material;if(tt)if(Array.isArray(tt))for(let ut=0;ut<tt.length;ut++){const mt=tt[ut];de(mt,z,U),V.add(mt)}else de(tt,z,U),V.add(tt)}),d=C.pop(),V},this.compileAsync=function(T,N,z=null){const V=this.compile(T,N,z);return new Promise(U=>{function tt(){if(V.forEach(function(ut){yt.get(ut).currentProgram.isReady()&&V.delete(ut)}),V.size===0){U(T);return}setTimeout(tt,10)}Ht.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let ee=null;function Gn(T){ee&&ee(T)}function On(){Ri.stop()}function Xc(){Ri.start()}const Ri=new yd;Ri.setAnimationLoop(Gn),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(T){ee=T,nt.setAnimationLoop(T),T===null?Ri.stop():Ri.start()},nt.addEventListener("sessionstart",On),nt.addEventListener("sessionend",Xc),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(N),N=nt.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,N,A),d=Et.get(T,C.length),d.init(N),C.push(d),J.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ue.setFromProjectionMatrix(J,zn,N.reversedDepth),q=this.localClippingEnabled,Kt=ot.init(this.clippingPlanes,q),m=X.get(T,b.length),m.init(),b.push(m),nt.enabled===!0&&nt.isPresenting===!0){const tt=M.xr.getDepthSensingMesh();tt!==null&&ra(tt,N,-1/0,M.sortObjects)}ra(T,N,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(st,rt),jt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,jt&&vt.addToRenderList(m,T),this.info.render.frame++,Kt===!0&&ot.beginShadows();const z=d.state.shadowsArray;xt.render(z,T,N),Kt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,U=m.transmissive;if(d.setupLights(),N.isArrayCamera){const tt=N.cameras;if(U.length>0)for(let ut=0,mt=tt.length;ut<mt;ut++){const dt=tt[ut];$c(V,U,T,dt)}jt&&vt.render(T);for(let ut=0,mt=tt.length;ut<mt;ut++){const dt=tt[ut];qc(m,T,dt,dt.viewport)}}else U.length>0&&$c(V,U,T,N),jt&&vt.render(T),qc(m,T,N);A!==null&&x===0&&(zt.updateMultisampleRenderTarget(A),zt.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(M,T,N),ct.resetDefaultState(),y=-1,E=null,C.pop(),C.length>0?(d=C[C.length-1],Kt===!0&&ot.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function ra(T,N,z,V){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ue.intersectsSprite(T)){V&&Nt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(J);const ut=F.update(T),mt=T.material;mt.visible&&m.push(T,ut,mt,z,Nt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ue.intersectsObject(T))){const ut=F.update(T),mt=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Nt.copy(T.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Nt.copy(ut.boundingSphere.center)),Nt.applyMatrix4(T.matrixWorld).applyMatrix4(J)),Array.isArray(mt)){const dt=ut.groups;for(let Pt=0,Dt=dt.length;Pt<Dt;Pt++){const At=dt[Pt],qt=mt[At.materialIndex];qt&&qt.visible&&m.push(T,ut,qt,z,Nt.z,At)}}else mt.visible&&m.push(T,ut,mt,z,Nt.z,null)}}const tt=T.children;for(let ut=0,mt=tt.length;ut<mt;ut++)ra(tt[ut],N,z,V)}function qc(T,N,z,V){const U=T.opaque,tt=T.transmissive,ut=T.transparent;d.setupLightsView(z),Kt===!0&&ot.setGlobalState(M.clippingPlanes,z),V&&_t.viewport(w.copy(V)),U.length>0&&Or(U,N,z),tt.length>0&&Or(tt,N,z),ut.length>0&&Or(ut,N,z),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function $c(T,N,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new Yi(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?Cr:Vn,minFilter:Vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const tt=d.state.transmissionRenderTarget[V.id],ut=V.viewport||w;tt.setSize(ut.z*M.transmissionResolutionScale,ut.w*M.transmissionResolutionScale);const mt=M.getRenderTarget(),dt=M.getActiveCubeFace(),Pt=M.getActiveMipmapLevel();M.setRenderTarget(tt),M.getClearColor(k),G=M.getClearAlpha(),G<1&&M.setClearColor(16777215,.5),M.clear(),jt&&vt.render(z);const Dt=M.toneMapping;M.toneMapping=Mi;const At=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),Kt===!0&&ot.setGlobalState(M.clippingPlanes,V),Or(T,z,V),zt.updateMultisampleRenderTarget(tt),zt.updateRenderTargetMipmap(tt),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let se=0,be=N.length;se<be;se++){const ge=N[se],he=ge.object,Rt=ge.geometry,ve=ge.material,Jt=ge.group;if(ve.side===Jn&&he.layers.test(V.layers)){const Qe=ve.side;ve.side=Ye,ve.needsUpdate=!0,Yc(he,z,V,Rt,ve,Jt),ve.side=Qe,ve.needsUpdate=!0,qt=!0}}qt===!0&&(zt.updateMultisampleRenderTarget(tt),zt.updateRenderTargetMipmap(tt))}M.setRenderTarget(mt,dt,Pt),M.setClearColor(k,G),At!==void 0&&(V.viewport=At),M.toneMapping=Dt}function Or(T,N,z){const V=N.isScene===!0?N.overrideMaterial:null;for(let U=0,tt=T.length;U<tt;U++){const ut=T[U],mt=ut.object,dt=ut.geometry,Pt=ut.group;let Dt=ut.material;Dt.allowOverride===!0&&V!==null&&(Dt=V),mt.layers.test(z.layers)&&Yc(mt,N,z,dt,Dt,Pt)}}function Yc(T,N,z,V,U,tt){T.onBeforeRender(M,N,z,V,U,tt),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),U.onBeforeRender(M,N,z,V,T,tt),U.transparent===!0&&U.side===Jn&&U.forceSinglePass===!1?(U.side=Ye,U.needsUpdate=!0,M.renderBufferDirect(z,N,V,U,T,tt),U.side=Ci,U.needsUpdate=!0,M.renderBufferDirect(z,N,V,U,T,tt),U.side=Jn):M.renderBufferDirect(z,N,V,U,T,tt),T.onAfterRender(M,N,z,V,U,tt)}function Dr(T,N,z){N.isScene!==!0&&(N=Ct);const V=yt.get(T),U=d.state.lights,tt=d.state.shadowsArray,ut=U.state.version,mt=$.getParameters(T,U.state,tt,N,z),dt=$.getProgramCacheKey(mt);let Pt=V.programs;V.environment=T.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(T.isMeshStandardMaterial?Te:De).get(T.envMap||V.environment),V.envMapRotation=V.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Pt===void 0&&(T.addEventListener("dispose",K),Pt=new Map,V.programs=Pt);let Dt=Pt.get(dt);if(Dt!==void 0){if(V.currentProgram===Dt&&V.lightsStateVersion===ut)return jc(T,mt),Dt}else mt.uniforms=$.getUniforms(T),T.onBeforeCompile(mt,M),Dt=$.acquireProgram(mt,dt),Pt.set(dt,Dt),V.uniforms=mt.uniforms;const At=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(At.clippingPlanes=ot.uniform),jc(T,mt),V.needsLights=hp(T),V.lightsStateVersion=ut,V.needsLights&&(At.ambientLightColor.value=U.state.ambient,At.lightProbe.value=U.state.probe,At.directionalLights.value=U.state.directional,At.directionalLightShadows.value=U.state.directionalShadow,At.spotLights.value=U.state.spot,At.spotLightShadows.value=U.state.spotShadow,At.rectAreaLights.value=U.state.rectArea,At.ltc_1.value=U.state.rectAreaLTC1,At.ltc_2.value=U.state.rectAreaLTC2,At.pointLights.value=U.state.point,At.pointLightShadows.value=U.state.pointShadow,At.hemisphereLights.value=U.state.hemi,At.directionalShadowMap.value=U.state.directionalShadowMap,At.directionalShadowMatrix.value=U.state.directionalShadowMatrix,At.spotShadowMap.value=U.state.spotShadowMap,At.spotLightMatrix.value=U.state.spotLightMatrix,At.spotLightMap.value=U.state.spotLightMap,At.pointShadowMap.value=U.state.pointShadowMap,At.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Dt,V.uniformsList=null,Dt}function Kc(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=xo.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function jc(T,N){const z=yt.get(T);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function cp(T,N,z,V,U){N.isScene!==!0&&(N=Ct),zt.resetTextureUnits();const tt=N.fog,ut=V.isMeshStandardMaterial?N.environment:null,mt=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Fs,dt=(V.isMeshStandardMaterial?Te:De).get(V.envMap||ut),Pt=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Dt=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),At=!!z.morphAttributes.position,qt=!!z.morphAttributes.normal,se=!!z.morphAttributes.color;let be=Mi;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(be=M.toneMapping);const ge=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,he=ge!==void 0?ge.length:0,Rt=yt.get(V),ve=d.state.lights;if(Kt===!0&&(q===!0||T!==E)){const Xe=T===E&&V.id===y;ot.setState(V,T,Xe)}let Jt=!1;V.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==ve.state.version||Rt.outputColorSpace!==mt||U.isBatchedMesh&&Rt.batching===!1||!U.isBatchedMesh&&Rt.batching===!0||U.isBatchedMesh&&Rt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Rt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Rt.instancing===!1||!U.isInstancedMesh&&Rt.instancing===!0||U.isSkinnedMesh&&Rt.skinning===!1||!U.isSkinnedMesh&&Rt.skinning===!0||U.isInstancedMesh&&Rt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Rt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Rt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Rt.instancingMorph===!1&&U.morphTexture!==null||Rt.envMap!==dt||V.fog===!0&&Rt.fog!==tt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==ot.numPlanes||Rt.numIntersection!==ot.numIntersection)||Rt.vertexAlphas!==Pt||Rt.vertexTangents!==Dt||Rt.morphTargets!==At||Rt.morphNormals!==qt||Rt.morphColors!==se||Rt.toneMapping!==be||Rt.morphTargetsCount!==he)&&(Jt=!0):(Jt=!0,Rt.__version=V.version);let Qe=Rt.currentProgram;Jt===!0&&(Qe=Dr(V,N,U));let ns=!1,tn=!1,$s=!1;const Me=Qe.getUniforms(),rn=Rt.uniforms;if(_t.useProgram(Qe.program)&&(ns=!0,tn=!0,$s=!0),V.id!==y&&(y=V.id,tn=!0),ns||E!==T){_t.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Me.setValue(I,"projectionMatrix",T.projectionMatrix),Me.setValue(I,"viewMatrix",T.matrixWorldInverse);const Ze=Me.map.cameraPosition;Ze!==void 0&&Ze.setValue(I,pt.setFromMatrixPosition(T.matrixWorld)),Ot.logarithmicDepthBuffer&&Me.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Me.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,tn=!0,$s=!0)}if(U.isSkinnedMesh){Me.setOptional(I,U,"bindMatrix"),Me.setOptional(I,U,"bindMatrixInverse");const Xe=U.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),Me.setValue(I,"boneTexture",Xe.boneTexture,zt))}U.isBatchedMesh&&(Me.setOptional(I,U,"batchingTexture"),Me.setValue(I,"batchingTexture",U._matricesTexture,zt),Me.setOptional(I,U,"batchingIdTexture"),Me.setValue(I,"batchingIdTexture",U._indirectTexture,zt),Me.setOptional(I,U,"batchingColorTexture"),U._colorsTexture!==null&&Me.setValue(I,"batchingColorTexture",U._colorsTexture,zt));const on=z.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&et.update(U,z,Qe),(tn||Rt.receiveShadow!==U.receiveShadow)&&(Rt.receiveShadow=U.receiveShadow,Me.setValue(I,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(rn.envMap.value=dt,rn.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(rn.envMapIntensity.value=N.environmentIntensity),tn&&(Me.setValue(I,"toneMappingExposure",M.toneMappingExposure),Rt.needsLights&&up(rn,$s),tt&&V.fog===!0&&j.refreshFogUniforms(rn,tt),j.refreshMaterialUniforms(rn,V,W,Y,d.state.transmissionRenderTarget[T.id]),xo.upload(I,Kc(Rt),rn,zt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(xo.upload(I,Kc(Rt),rn,zt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Me.setValue(I,"center",U.center),Me.setValue(I,"modelViewMatrix",U.modelViewMatrix),Me.setValue(I,"normalMatrix",U.normalMatrix),Me.setValue(I,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Xe=V.uniformsGroups;for(let Ze=0,oa=Xe.length;Ze<oa;Ze++){const Pi=Xe[Ze];Bt.update(Pi,Qe),Bt.bind(Pi,Qe)}}return Qe}function up(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function hp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,N,z){const V=yt.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),yt.get(T.texture).__webglTexture=N,yt.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,N){const z=yt.get(T);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0};const dp=I.createFramebuffer();this.setRenderTarget=function(T,N=0,z=0){A=T,v=N,x=z;let V=!0,U=null,tt=!1,ut=!1;if(T){const dt=yt.get(T);if(dt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(dt.__webglFramebuffer===void 0)zt.setupRenderTarget(T);else if(dt.__hasExternalTextures)zt.rebindTextures(T,yt.get(T.texture).__webglTexture,yt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const At=T.depthTexture;if(dt.__boundDepthTexture!==At){if(At!==null&&yt.has(At)&&(T.width!==At.image.width||T.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(T)}}const Pt=T.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ut=!0);const Dt=yt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Dt[N])?U=Dt[N][z]:U=Dt[N],tt=!0):T.samples>0&&zt.useMultisampledRTT(T)===!1?U=yt.get(T).__webglMultisampledFramebuffer:Array.isArray(Dt)?U=Dt[z]:U=Dt,w.copy(T.viewport),O.copy(T.scissor),H=T.scissorTest}else w.copy(bt).multiplyScalar(W).floor(),O.copy(Ft).multiplyScalar(W).floor(),H=ie;if(z!==0&&(U=dp),_t.bindFramebuffer(I.FRAMEBUFFER,U)&&V&&_t.drawBuffers(T,U),_t.viewport(w),_t.scissor(O),_t.setScissorTest(H),tt){const dt=yt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt.__webglTexture,z)}else if(ut){const dt=N;for(let Pt=0;Pt<T.textures.length;Pt++){const Dt=yt.get(T.textures[Pt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Pt,Dt.__webglTexture,z,dt)}}else if(T!==null&&z!==0){const dt=yt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,dt.__webglTexture,z)}y=-1},this.readRenderTargetPixels=function(T,N,z,V,U,tt,ut,mt=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ut!==void 0&&(dt=dt[ut]),dt){_t.bindFramebuffer(I.FRAMEBUFFER,dt);try{const Pt=T.textures[mt],Dt=Pt.format,At=Pt.type;if(!Ot.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-V&&z>=0&&z<=T.height-U&&(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+mt),I.readPixels(N,z,V,U,Mt.convert(Dt),Mt.convert(At),tt))}finally{const Pt=A!==null?yt.get(A).__webglFramebuffer:null;_t.bindFramebuffer(I.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(T,N,z,V,U,tt,ut,mt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ut!==void 0&&(dt=dt[ut]),dt)if(N>=0&&N<=T.width-V&&z>=0&&z<=T.height-U){_t.bindFramebuffer(I.FRAMEBUFFER,dt);const Pt=T.textures[mt],Dt=Pt.format,At=Pt.type;if(!Ot.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,qt),I.bufferData(I.PIXEL_PACK_BUFFER,tt.byteLength,I.STREAM_READ),T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+mt),I.readPixels(N,z,V,U,Mt.convert(Dt),Mt.convert(At),0);const se=A!==null?yt.get(A).__webglFramebuffer:null;_t.bindFramebuffer(I.FRAMEBUFFER,se);const be=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await hm(I,be,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,qt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,tt),I.deleteBuffer(qt),I.deleteSync(be),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,N=null,z=0){const V=Math.pow(2,-z),U=Math.floor(T.image.width*V),tt=Math.floor(T.image.height*V),ut=N!==null?N.x:0,mt=N!==null?N.y:0;zt.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,ut,mt,U,tt),_t.unbindTexture()};const fp=I.createFramebuffer(),pp=I.createFramebuffer();this.copyTextureToTexture=function(T,N,z=null,V=null,U=0,tt=null){tt===null&&(U!==0?(vr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=U,U=0):tt=0);let ut,mt,dt,Pt,Dt,At,qt,se,be;const ge=T.isCompressedTexture?T.mipmaps[tt]:T.image;if(z!==null)ut=z.max.x-z.min.x,mt=z.max.y-z.min.y,dt=z.isBox3?z.max.z-z.min.z:1,Pt=z.min.x,Dt=z.min.y,At=z.isBox3?z.min.z:0;else{const on=Math.pow(2,-U);ut=Math.floor(ge.width*on),mt=Math.floor(ge.height*on),T.isDataArrayTexture?dt=ge.depth:T.isData3DTexture?dt=Math.floor(ge.depth*on):dt=1,Pt=0,Dt=0,At=0}V!==null?(qt=V.x,se=V.y,be=V.z):(qt=0,se=0,be=0);const he=Mt.convert(N.format),Rt=Mt.convert(N.type);let ve;N.isData3DTexture?(zt.setTexture3D(N,0),ve=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(zt.setTexture2DArray(N,0),ve=I.TEXTURE_2D_ARRAY):(zt.setTexture2D(N,0),ve=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const Jt=I.getParameter(I.UNPACK_ROW_LENGTH),Qe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ns=I.getParameter(I.UNPACK_SKIP_PIXELS),tn=I.getParameter(I.UNPACK_SKIP_ROWS),$s=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ge.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ge.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Pt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Dt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,At);const Me=T.isDataArrayTexture||T.isData3DTexture,rn=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){const on=yt.get(T),Xe=yt.get(N),Ze=yt.get(on.__renderTarget),oa=yt.get(Xe.__renderTarget);_t.bindFramebuffer(I.READ_FRAMEBUFFER,Ze.__webglFramebuffer),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,oa.__webglFramebuffer);for(let Pi=0;Pi<dt;Pi++)Me&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.get(T).__webglTexture,U,At+Pi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.get(N).__webglTexture,tt,be+Pi)),I.blitFramebuffer(Pt,Dt,ut,mt,qt,se,ut,mt,I.DEPTH_BUFFER_BIT,I.NEAREST);_t.bindFramebuffer(I.READ_FRAMEBUFFER,null),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(U!==0||T.isRenderTargetTexture||yt.has(T)){const on=yt.get(T),Xe=yt.get(N);_t.bindFramebuffer(I.READ_FRAMEBUFFER,fp),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,pp);for(let Ze=0;Ze<dt;Ze++)Me?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,on.__webglTexture,U,At+Ze):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,on.__webglTexture,U),rn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xe.__webglTexture,tt,be+Ze):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Xe.__webglTexture,tt),U!==0?I.blitFramebuffer(Pt,Dt,ut,mt,qt,se,ut,mt,I.COLOR_BUFFER_BIT,I.NEAREST):rn?I.copyTexSubImage3D(ve,tt,qt,se,be+Ze,Pt,Dt,ut,mt):I.copyTexSubImage2D(ve,tt,qt,se,Pt,Dt,ut,mt);_t.bindFramebuffer(I.READ_FRAMEBUFFER,null),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else rn?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(ve,tt,qt,se,be,ut,mt,dt,he,Rt,ge.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(ve,tt,qt,se,be,ut,mt,dt,he,ge.data):I.texSubImage3D(ve,tt,qt,se,be,ut,mt,dt,he,Rt,ge):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,tt,qt,se,ut,mt,he,Rt,ge.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,tt,qt,se,ge.width,ge.height,he,ge.data):I.texSubImage2D(I.TEXTURE_2D,tt,qt,se,ut,mt,he,Rt,ge);I.pixelStorei(I.UNPACK_ROW_LENGTH,Jt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ns),I.pixelStorei(I.UNPACK_SKIP_ROWS,tn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$s),tt===0&&N.generateMipmaps&&I.generateMipmap(ve),_t.unbindTexture()},this.initRenderTarget=function(T){yt.get(T).__webglFramebuffer===void 0&&zt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?zt.setTextureCube(T,0):T.isData3DTexture?zt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?zt.setTexture2DArray(T,0):zt.setTexture2D(T,0),_t.unbindTexture()},this.resetState=function(){v=0,x=0,A=null,_t.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}const oh={type:"change"},gc={type:"start"},bd={type:"end"},co=new Vo,ah=new Zn,Ux=Math.cos(70*cm.DEG2RAD),Pe=new L,Je=2*Math.PI,ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ka=1e-6;class Fx extends Jm{constructor(t,e=null){super(t,e),this.state=ae.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rs.ROTATE,MIDDLE:Rs.DOLLY,RIGHT:Rs.PAN},this.touches={ONE:Cs.ROTATE,TWO:Cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new si,this._lastTargetPosition=new L,this._quat=new si().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Du,this._sphericalDelta=new Du,this._scale=1,this._panOffset=new L,this._rotateStart=new wt,this._rotateEnd=new wt,this._rotateDelta=new wt,this._panStart=new wt,this._panEnd=new wt,this._panDelta=new wt,this._dollyStart=new wt,this._dollyEnd=new wt,this._dollyDelta=new wt,this._dollyDirection=new L,this._mouse=new wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Bx.bind(this),this._onPointerDown=Hx.bind(this),this._onPointerUp=kx.bind(this),this._onContextMenu=$x.bind(this),this._onMouseWheel=Gx.bind(this),this._onKeyDown=Wx.bind(this),this._onTouchStart=Xx.bind(this),this._onTouchMove=qx.bind(this),this._onMouseDown=zx.bind(this),this._onMouseMove=Vx.bind(this),this._interceptControlDown=Yx.bind(this),this._interceptControlUp=Kx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(oh),this.update(),this.state=ae.NONE}update(t=null){const e=this.object.position;Pe.copy(e).sub(this.target),Pe.applyQuaternion(this._quat),this._spherical.setFromVector3(Pe),this.autoRotate&&this.state===ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Je:i>Math.PI&&(i-=Je),s<-Math.PI?s+=Je:s>Math.PI&&(s-=Je),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Pe.setFromSpherical(this._spherical),Pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Pe.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(co.origin.copy(this.object.position),co.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(co.direction))<Ux?this.object.lookAt(this.target):(ah.setFromNormalAndCoplanarPoint(this.object.up,this.target),co.intersectPlane(ah,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ka||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ka||this._lastTargetPosition.distanceToSquared(this.target)>ka?(this.dispatchEvent(oh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Je/60*this.autoRotateSpeed*t:Je/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Pe.setFromMatrixColumn(e,0),Pe.multiplyScalar(-t),this._panOffset.add(Pe)}_panUp(t,e){this.screenSpacePanning===!0?Pe.setFromMatrixColumn(e,1):(Pe.setFromMatrixColumn(e,0),Pe.crossVectors(this.object.up,Pe)),Pe.multiplyScalar(t),this._panOffset.add(Pe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Pe.copy(s).sub(this.target);let r=Pe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Je*this._rotateDelta.x/e.clientHeight),this._rotateUp(Je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Je*this._rotateDelta.x/e.clientHeight),this._rotateUp(Je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new wt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Hx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Bx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function kx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bd),this.state=ae.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function zx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Rs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ae.DOLLY;break;case Rs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ae.ROTATE}break;case Rs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ae.PAN}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(gc)}function Vx(n){switch(this.state){case ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Gx(n){this.enabled===!1||this.enableZoom===!1||this.state!==ae.NONE||(n.preventDefault(),this.dispatchEvent(gc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(bd))}function Wx(n){this.enabled!==!1&&this._handleKeyDown(n)}function Xx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Cs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ae.TOUCH_ROTATE;break;case Cs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ae.TOUCH_PAN;break;default:this.state=ae.NONE}break;case 2:switch(this.touches.TWO){case Cs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ae.TOUCH_DOLLY_PAN;break;case Cs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ae.TOUCH_DOLLY_ROTATE;break;default:this.state=ae.NONE}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(gc)}function qx(n){switch(this._trackPointer(n),this.state){case ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ae.NONE}}function $x(n){this.enabled!==!1&&n.preventDefault()}function Yx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Kx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const jx=[[1,"H","Hydrogen",1.008,"nonmetal",2.2,1,1,null,31,"FFFFFF"],[2,"He","Helium",4.003,"noble",null,0,0,null,28,"D9FFFF"],[3,"Li","Lithium",6.94,"alkali",.98,1,0,[1],128,"CC80FF"],[4,"Be","Beryllium",9.012,"alkaline",1.57,4,0,[2],96,"C2FF00"],[5,"B","Boron",10.81,"metalloid",2.04,4,3,null,84,"FFB5B5"],[6,"C","Carbon",12.011,"nonmetal",2.55,4,4,null,76,"909090"],[7,"N","Nitrogen",14.007,"nonmetal",3.04,4,3,null,71,"3050F8"],[8,"O","Oxygen",15.999,"nonmetal",3.44,3,2,null,66,"FF0D0D"],[9,"F","Fluorine",18.998,"halogen",3.98,1,1,null,57,"90E050"],[10,"Ne","Neon",20.18,"noble",null,0,0,null,58,"B3E3F5"],[11,"Na","Sodium",22.99,"alkali",.93,1,0,[1],166,"AB5CF2"],[12,"Mg","Magnesium",24.305,"alkaline",1.31,2,0,[2],141,"8AFF00"],[13,"Al","Aluminium",26.982,"post",1.61,4,0,[3],121,"BFA6A6"],[14,"Si","Silicon",28.085,"metalloid",1.9,6,4,null,111,"F0C8A0"],[15,"P","Phosphorus",30.974,"nonmetal",2.19,6,3,null,107,"FF8000"],[16,"S","Sulfur",32.06,"nonmetal",2.58,6,2,null,105,"FFFF30"],[17,"Cl","Chlorine",35.45,"halogen",3.16,7,1,null,102,"1FF01F"],[18,"Ar","Argon",39.948,"noble",null,0,0,null,106,"80D1E3"],[19,"K","Potassium",39.098,"alkali",.82,1,0,[1],203,"8F40D4"],[20,"Ca","Calcium",40.078,"alkaline",1,2,0,[2],176,"3DFF00"],[21,"Sc","Scandium",44.956,"transition",1.36,3,0,[3],170,"E6E6E6"],[22,"Ti","Titanium",47.867,"transition",1.54,4,0,[4,3],160,"BFC2C7"],[23,"V","Vanadium",50.942,"transition",1.63,5,0,[5,4,3],153,"A6A6AB"],[24,"Cr","Chromium",51.996,"transition",1.66,6,0,[3,6],139,"8A99C7"],[25,"Mn","Manganese",54.938,"transition",1.55,7,0,[2,7,4],145,"9C7AC7"],[26,"Fe","Iron",55.845,"transition",1.83,6,0,[2,3],140,"E06633"],[27,"Co","Cobalt",58.933,"transition",1.88,5,0,[2,3],126,"F090A0"],[28,"Ni","Nickel",58.693,"transition",1.91,4,0,[2,3],124,"50D050"],[29,"Cu","Copper",63.546,"transition",1.9,4,0,[2,1],132,"C88033"],[30,"Zn","Zinc",65.38,"transition",1.65,2,0,[2],122,"7D80B0"],[31,"Ga","Gallium",69.723,"post",1.81,4,0,[3],122,"C28F8F"],[32,"Ge","Germanium",72.63,"metalloid",2.01,6,4,null,120,"668F8F"],[33,"As","Arsenic",74.922,"metalloid",2.18,6,3,null,119,"BD80E3"],[34,"Se","Selenium",78.971,"nonmetal",2.55,6,2,null,120,"FFA100"],[35,"Br","Bromine",79.904,"halogen",2.96,7,1,null,120,"A62929"],[36,"Kr","Krypton",83.798,"noble",3,2,0,null,116,"5CB8D1"],[37,"Rb","Rubidium",85.468,"alkali",.82,1,0,[1],220,"702EB0"],[38,"Sr","Strontium",87.62,"alkaline",.95,2,0,[2],195,"00FF00"],[39,"Y","Yttrium",88.906,"transition",1.22,3,0,[3],190,"94FFFF"],[40,"Zr","Zirconium",91.224,"transition",1.33,4,0,[4],175,"94E0E0"],[41,"Nb","Niobium",92.906,"transition",1.6,5,0,[5],164,"73C2C9"],[42,"Mo","Molybdenum",95.95,"transition",2.16,6,0,[6,4],154,"54B5B5"],[43,"Tc","Technetium",98,"transition",1.9,7,0,[7],147,"3B9E9E"],[44,"Ru","Ruthenium",101.07,"transition",2.2,8,0,[3,4],146,"248F8F"],[45,"Rh","Rhodium",102.91,"transition",2.28,6,0,[3],142,"0A7D8C"],[46,"Pd","Palladium",106.42,"transition",2.2,4,0,[2,4],139,"006985"],[47,"Ag","Silver",107.87,"transition",1.93,3,0,[1],145,"C0C0C0"],[48,"Cd","Cadmium",112.41,"transition",1.69,2,0,[2],144,"FFD98F"],[49,"In","Indium",114.82,"post",1.78,3,0,[3,1],142,"A67573"],[50,"Sn","Tin",118.71,"post",1.96,4,0,[4,2],139,"668080"],[51,"Sb","Antimony",121.76,"metalloid",2.05,6,3,null,139,"9E63B5"],[52,"Te","Tellurium",127.6,"metalloid",2.1,6,2,null,138,"D47A00"],[53,"I","Iodine",126.9,"halogen",2.66,7,1,null,139,"940094"],[54,"Xe","Xenon",131.29,"noble",2.6,6,0,null,140,"429EB0"],[55,"Cs","Caesium",132.91,"alkali",.79,1,0,[1],244,"57178F"],[56,"Ba","Barium",137.33,"alkaline",.89,2,0,[2],215,"00C900"],[57,"La","Lanthanum",138.91,"lanthanide",1.1,3,0,[3],207,"70D4FF"],[58,"Ce","Cerium",140.12,"lanthanide",1.12,4,0,[3,4],204,"FFFC00"],[59,"Pr","Praseodymium",140.91,"lanthanide",1.13,4,0,[3],203,"D9FFC9"],[60,"Nd","Neodymium",144.24,"lanthanide",1.14,3,0,[3],201,"C7FFC7"],[61,"Pm","Promethium",145,"lanthanide",1.13,3,0,[3],199,"A3FFC7"],[62,"Sm","Samarium",150.36,"lanthanide",1.17,3,0,[3,2],198,"8FFFC7"],[63,"Eu","Europium",151.96,"lanthanide",1.2,3,0,[3,2],198,"61FFC7"],[64,"Gd","Gadolinium",157.25,"lanthanide",1.2,3,0,[3],196,"45FFC7"],[65,"Tb","Terbium",158.93,"lanthanide",1.2,4,0,[3,4],194,"30FFC7"],[66,"Dy","Dysprosium",162.5,"lanthanide",1.22,3,0,[3],192,"1FFFC9"],[67,"Ho","Holmium",164.93,"lanthanide",1.23,3,0,[3],192,"00FFC4"],[68,"Er","Erbium",167.26,"lanthanide",1.24,3,0,[3],189,"00E675"],[69,"Tm","Thulium",168.93,"lanthanide",1.25,3,0,[3,2],190,"00D452"],[70,"Yb","Ytterbium",173.05,"lanthanide",1.1,3,0,[3,2],187,"00BF38"],[71,"Lu","Lutetium",174.97,"lanthanide",1.27,3,0,[3],187,"00AB24"],[72,"Hf","Hafnium",178.49,"transition",1.3,4,0,[4],175,"4DC2FF"],[73,"Ta","Tantalum",180.95,"transition",1.5,5,0,[5],170,"4DA6FF"],[74,"W","Tungsten",183.84,"transition",2.36,6,0,[6,4],162,"2194D6"],[75,"Re","Rhenium",186.21,"transition",1.9,7,0,[7,4],159,"267DAB"],[76,"Os","Osmium",190.23,"transition",2.2,8,0,[8,4],159,"266696"],[77,"Ir","Iridium",192.22,"transition",2.2,6,0,[3,4],141,"175487"],[78,"Pt","Platinum",195.08,"transition",2.28,4,0,[4,2],136,"D0D0E0"],[79,"Au","Gold",196.97,"transition",2.54,5,0,[3,1],136,"FFD123"],[80,"Hg","Mercury",200.59,"transition",2,2,0,[2,1],132,"B8B8D0"],[81,"Tl","Thallium",204.38,"post",1.62,3,0,[1,3],145,"A6544D"],[82,"Pb","Lead",207.2,"post",2.33,4,0,[2,4],146,"575961"],[83,"Bi","Bismuth",208.98,"post",2.02,5,0,[3],148,"9E4B62"],[84,"Po","Polonium",209,"post",2,6,2,[4,2],140,"AB0C00"],[85,"At","Astatine",210,"halogen",2.2,7,1,null,150,"754F45"],[86,"Rn","Radon",222,"noble",2.2,2,0,null,150,"428296"],[87,"Fr","Francium",223,"alkali",.7,1,0,[1],260,"420066"],[88,"Ra","Radium",226,"alkaline",.9,2,0,[2],221,"007D00"],[89,"Ac","Actinium",227,"actinide",1.1,3,0,[3],215,"00ABFF"],[90,"Th","Thorium",232.04,"actinide",1.3,4,0,[4],206,"008AFF"],[91,"Pa","Protactinium",231.04,"actinide",1.5,5,0,[5],200,"00A1FF"],[92,"U","Uranium",238.03,"actinide",1.38,6,0,[6,4],196,"008FFF"],[93,"Np","Neptunium",237,"actinide",1.36,6,0,[5,4],190,"0080FF"],[94,"Pu","Plutonium",244,"actinide",1.28,6,0,[4,6],187,"006BFF"],[95,"Am","Americium",243,"actinide",1.13,6,0,[3,2],180,"545CF2"],[96,"Cm","Curium",247,"actinide",1.28,4,0,[3],169,"785CE3"],[97,"Bk","Berkelium",247,"actinide",1.3,4,0,[3,4],170,"8A4FE3"],[98,"Cf","Californium",251,"actinide",1.3,4,0,[3],190,"A136DA"],[99,"Es","Einsteinium",252,"actinide",1.3,3,0,[3],190,"B31BDA"],[100,"Fm","Fermium",257,"actinide",1.3,3,0,[3],190,"B31BBA"],[101,"Md","Mendelevium",258,"actinide",1.3,3,0,[3],190,"B30DA6"],[102,"No","Nobelium",259,"actinide",1.3,3,0,[2,3],190,"E006A0"],[103,"Lr","Lawrencium",266,"actinide",1.3,3,0,[3],190,"FF00CC"],[104,"Rf","Rutherfordium",267,"transition",null,4,0,[4],160,"CC0080"],[105,"Db","Dubnium",268,"transition",null,5,0,[5],160,"D6004D"],[106,"Sg","Seaborgium",269,"transition",null,6,0,[6],160,"C20000"],[107,"Bh","Bohrium",270,"transition",null,7,0,[7],160,"B60000"],[108,"Hs","Hassium",269,"transition",null,8,0,[8],160,"9E0000"],[109,"Mt","Meitnerium",278,"transition",null,6,0,[6],160,"820000"],[110,"Ds","Darmstadtium",281,"transition",null,6,0,[6],160,"75007D"],[111,"Rg","Roentgenium",282,"transition",null,6,0,[6],160,"660054"],[112,"Cn","Copernicium",285,"transition",null,2,0,[2],160,"5C004A"],[113,"Nh","Nihonium",286,"post",null,3,0,[1],170,"510A44"],[114,"Fl","Flerovium",289,"post",null,4,0,[2],180,"460D3B"],[115,"Mc","Moscovium",290,"post",null,3,0,[1,3],180,"3D1140"],[116,"Lv","Livermorium",293,"post",null,4,0,[2],180,"341244"],[117,"Ts","Tennessine",294,"halogen",null,3,1,null,180,"2A0B29"],[118,"Og","Oganesson",294,"noble",null,0,0,null,180,"1B0419"]],$o=jx.map(([n,t,e,i,s,r,o,a,c,l,u])=>({z:n,sym:t,name:e,mass:i,cat:s,en:r,maxBonds:o,anionCharge:a,charges:c,radius:l,color:"#"+u,valenceElectrons:Zx(n)}));function Zx(n){if(n===1)return 1;if(n===2)return 2;const t={3:1,4:2,5:3,6:4,7:5,8:6,9:7,10:8,11:1,12:2,13:3,14:4,15:5,16:6,17:7,18:8};if(t[n])return t[n];const e=Ed(n);return e>=13&&e<=18?e-10:0}function Ed(n){return n===1?1:n===2?18:n>=3&&n<=4?n-2:n>=5&&n<=10?n+8:n>=11&&n<=12?n-10:n>=13&&n<=18?n:n>=19&&n<=20||n>=21&&n<=30||n>=31&&n<=36?n-18:n>=37&&n<=38||n>=39&&n<=48||n>=49&&n<=54?n-36:n>=55&&n<=56?n-54:n>=72&&n<=80||n>=81&&n<=86?n-68:n>=87&&n<=88?n-86:n>=104&&n<=112||n>=113&&n<=118?n-100:3}function Jx(n){return n<=2?1:n<=10?2:n<=18?3:n<=36?4:n<=54?5:n<=86?6:7}function Qx(n){if(n>=57&&n<=71)return{col:n-57+3,row:9};if(n>=89&&n<=103)return{col:n-89+3,row:10};const t=Jx(n);return{col:Ed(n),row:t}}const tv={alkali:"#ff8a80",alkaline:"#ffb74d",transition:"#ffd54f",post:"#aed581",metalloid:"#4db6ac",nonmetal:"#64b5f6",halogen:"#ba68c8",noble:"#f06292",lanthanide:"#f48fb1",actinide:"#ffab91",exotic:"#e040fb"},Cd=n=>["alkali","alkaline","transition","post","lanthanide","actinide"].includes(n),pe=n=>Cd(n.cat),ev=new Set([36,54,86]),lh=n=>n.cat==="noble"&&!ev.has(n.z),ch=n=>n.sym==="F"||n.sym==="O";function ne(n){return $o.find(t=>t.sym===n)}function ii(n,t,e){return[...t.values()].filter(i=>i.a===e||i.b===e)}function Ls(n,t,e){return ii(n,t,e).filter(i=>!i.ionic).reduce((i,s)=>i+s.order,0)}function _i(n,t,e){return ii(n,t,e).filter(i=>i.ionic).reduce((i,s)=>i+s.order,0)}function Ro(n,t){return n.a===t?n.b:n.a}function Mr(n,t,e){const i=n.valenceElectrons+e-t;return i<0||i%2!==0?"parity":n.z<=10&&t+i/2>4?"octet":null}function Td(n,t,e){for(let i=e;i<=n.anionCharge;i++)if(!Mr(n,t,i))return!0;return!1}function nv(n,t,e,i){const s=n.get(e),r=n.get(i);if(pe(s.el)||pe(r.el))return pe(s.el)&&pe(r.el)?{ok:!1,reason:{key:"chem.metalMetal"}}:{ok:!1,reason:{key:"chem.metalIonic"}};if(lh(s.el)||lh(r.el))return{ok:!1,reason:{key:"chem.nobleNoCompound"}};if(s.el.cat==="noble"&&!ch(r.el)||r.el.cat==="noble"&&!ch(s.el))return{ok:!1,reason:{key:"chem.nobleOnlyFO"}};const o=a=>a.el.maxBonds-Ls(n,t,a.id);if(o(s)<=0)return{ok:!1,reason:{key:"chem.noCapacity",p:{sym:s.el.sym,max:s.el.maxBonds}}};if(o(r)<=0)return{ok:!1,reason:{key:"chem.noCapacity",p:{sym:r.el.sym,max:r.el.maxBonds}}};for(const a of[s,r]){if(pe(a.el))continue;const c=_i(n,t,a.id);if(!c)continue;const l=Mr(a.el,Ls(n,t,a.id)+1,c);if(l)return{ok:!1,reason:l==="octet"?{key:"chem.octet",p:{sym:a.el.sym}}:{key:"chem.anionClosedShare",p:{sym:a.el.sym,n:c,s:c>1?"s":""}}}}return{ok:!0,type:"covalent"}}function iv(n,t,e,i){const s=n.get(e),r=n.get(i),o=pe(s.el)?s:pe(r.el)?r:null,a=o?o===s?r:s:null;if(!o)return{ok:!1,reason:{key:"chem.ionicNeedMetal"}};if(a.el.cat==="noble")return{ok:!1,reason:{key:"chem.nobleNoCompound"}};const c=Math.max(...o.el.charges);if(_i(n,t,o.id)>=c)return{ok:!1,reason:{key:"chem.metalMax",p:{sym:o.el.sym,max:c}}};if(!a.el.anionCharge)return{ok:!1,reason:{key:"chem.noAnion",p:{sym:a.el.sym}}};if(_i(n,t,a.id)>=a.el.anionCharge)return{ok:!1,reason:{key:"chem.anionMax",p:{sym:a.el.sym,max:a.el.anionCharge}}};const l=Ls(n,t,a.id),u=_i(n,t,a.id)+1;return Td(a.el,l,u)?{ok:!0,type:"ionic"}:{ok:!1,reason:Mr(a.el,l,u)==="octet"?{key:"chem.octet",p:{sym:a.el.sym}}:{key:"chem.noLewisSharing",p:{sym:a.el.sym,n:l,s:l===1?"":"s"}}}}function Ad(n,t,e,i){if(e===i)return{ok:!1,reason:{key:"chem.selfBond"}};if(ii(n,t,e).some(o=>Ro(o,e)===i))return{ok:!1,reason:{key:"chem.alreadyBonded"}};const s=nv(n,t,e,i);if(s.ok)return s;const r=iv(n,t,e,i);return r.ok?r:s.reason?.key&&!s.reason.key.startsWith("chem.metal")?s:r}const uh=new Set(["F","Cl","Br","I","At"]),hh=new Set(["Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr"]);function sv(n,t){if(uh.has(n.sym)&&uh.has(t.sym))return 1;if(n.sym==="O"&&t.sym==="O")return 2;const e=[n.sym,t.sym];return e.includes("O")&&e.includes("F")?1:hh.has(n.sym)&&hh.has(t.sym)?4:3}function _c(n,t,e){if(e.order>=5)return{ok:!1,reason:{key:e.ionic?"chem.ionicMax4":"chem.quadrupleMax"}};if(e.ionic){const s=n.get(e.a),r=n.get(e.b),o=pe(s.el)?s:r,a=o===s?r:s,c=Math.max(...o.el.charges);if(_i(n,t,o.id)+1>c)return{ok:!1,reason:{key:"chem.metalTransferMax",p:{sym:o.el.sym,max:c}}};if(_i(n,t,a.id)+1>a.el.anionCharge)return{ok:!1,reason:{key:"chem.anionAcceptMax",p:{sym:a.el.sym,max:a.el.anionCharge}}};const l=Ls(n,t,a.id),u=_i(n,t,a.id)+1;return Td(a.el,l,u)?{ok:!0}:{ok:!1,reason:Mr(a.el,l,u)==="octet"?{key:"chem.octet",p:{sym:a.el.sym}}:{key:"chem.noLewisSharing",p:{sym:a.el.sym,n:l,s:l===1?"":"s"}}}}const i=sv(n.get(e.a).el,n.get(e.b).el);if(e.order+1>i){const s=n.get(e.a).el.sym,r=n.get(e.b).el.sym;return{ok:!1,reason:i===1?{key:"chem.pairCapSingle",p:{a:s,b:r}}:i===2?{key:"chem.pairCapDouble",p:{a:s,b:r}}:{key:"chem.pairCapTriple",p:{a:s,b:r}}}}for(const s of[e.a,e.b]){const r=n.get(s);if(Ls(n,t,s)+1>r.el.maxBonds)return{ok:!1,reason:{key:"chem.capacityMax",p:{sym:r.el.sym,max:r.el.maxBonds}}};if(pe(r.el))continue;const o=_i(n,t,s);if(!o)continue;const a=Mr(r.el,Ls(n,t,s)+1,o);if(a==="parity")return{ok:!1,reason:{key:"chem.anionClosedShareMore",p:{sym:r.el.sym}}};if(a==="octet")return{ok:!1,reason:{key:"chem.octet",p:{sym:r.el.sym}}}}return{ok:!0}}function Yo(n,t){const e=[],i=new Set;for(const s of n.keys()){if(i.has(s))continue;const r={atoms:[],bonds:[]},o=[s];for(i.add(s);o.length;){const a=o.pop();r.atoms.push(a);for(const c of ii(n,t,a)){r.bonds.push(c);const l=Ro(c,a);i.has(l)||(i.add(l),o.push(l))}}r.bonds=[...new Set(r.bonds)],e.push(r)}return e}function Xi(n,t,e){return Yo(n,t).find(i=>i.atoms.includes(e))}function rv(n,t,e,i=null){const s=new Map,r=[];let o=0,a=0,c=0;for(const g of e){const _=n.get(g),m=ii(n,t,g),d=m.filter(y=>!y.ionic).reduce((y,E)=>y+E.order,0),b=m.filter(y=>y.ionic).reduce((y,E)=>y+E.order,0),C=m.length>0,M=pe(_.el),R=_.el.valenceElectrons;let v=0,x=0,A=0;if(M)v=0,x=b;else if(C){o+=R,a+=d,c+=b;const y=Math.ceil(Math.max(0,R+b-d)/2);A=_.el.z<=10?Math.max(0,Math.min(4-d,y)):y}else if(v=Math.floor(R/2),x=0,i!=null&&e.length===1){const y=(R-i)/2,E=_.el.z<=10?4:6;if(!Number.isInteger(y)||y<0||y>E)return{feasible:!1,reason:{key:"chem.lewis.charge"},charge:i};v=y,x=i}s.set(g,{lp:v,fc:x,ionU:b,covSum:d,sigma:m.length,cap:A,isMetal:M,bonded:C}),!M&&C&&r.push({id:g,cap:A,V:R,covSum:d,ionU:b,heavy:_.el.z>10,carbon:_.el.z===6,of:_.el.sym==="O"||_.el.sym==="F"})}const l=g=>{r.forEach((_,m)=>{s.get(_.id).lp=g[m],s.get(_.id).fc=_.V-2*g[m]-_.covSum})},u=(g,_)=>{const m=g.V-2*_-g.covSum;let d=Math.abs(m)+.01*_;return(g.heavy||g.carbon)&&_>0&&(d+=3*_),m>0&&g.of&&(d+=3),d},h=g=>{const _=r.length,m=new Map,d=(b,C)=>{if(b===_)return C===0?{score:0,lps:[]}:null;const M=b*4096+C;if(m.has(M))return m.get(M);let R=null;for(let v=0;v<=Math.min(r[b].cap,C);v++){const x=d(b+1,C-v);if(!x)continue;const A=x.score+u(r[b],v);(!R||A<R.score)&&(R={score:A,lps:[v,...x.lps]})}return m.set(M,R),R};return d(0,g)};if(i!=null){if(r.length===0)return[...s.values()].reduce((d,b)=>d+b.fc,0)===i?{feasible:!0,per:s,charge:i}:{feasible:!1,reason:{key:"chem.lewis.charge"},charge:i};const g=o+c-a-i;if(g%2!==0)return{feasible:!1,reason:{key:"chem.lewis.radical"},charge:i};if(g<0)return{feasible:!1,reason:{key:"chem.lewis.electrons"},charge:i};const _=h(g/2);return _?(l(_.lps),{feasible:!0,per:s,charge:i}):{feasible:!1,reason:{key:"chem.lewis.charge"},charge:i}}const f=o+c-a;let p=null;for(let g=0;g<=12&&!(p&&Math.abs(p.charge)<g);g++)for(const _ of g===0?[1]:[1,-1]){const m=f-_*g;if(m<0||m%2!==0)continue;const d=h(m/2);if(!d)continue;const b=[d.score,m/2];(!p||b<p.key)&&(p={sol:d,charge:_*g,key:b})}return p?(l(p.sol.lps),{feasible:!0,per:s,charge:p.charge}):{feasible:!0,per:s,charge:0}}function ov(n,t,e,i=null){const s=rv(n,t,e.atoms,i),r=lv(n,t,e.atoms,s.per),o=wd(n,t,e.atoms);return{...s,formula:r,fingerprint:o}}const av=new Set(["N"]);function Gl(n){const t=new Map;for(const l of n)t.set(l.sym,(t.get(l.sym)||0)+1);const e=[...t.keys()],i=l=>l+(t.get(l)>1?t.get(l):"");if(e.length===1)return i(e[0]);if(t.has("C")){let l=i("C");return t.has("H")&&(l+=i("H")),l+=e.filter(u=>u!=="C"&&u!=="H").sort().map(i).join(""),l}const s=t.get("H")||0,r=t.get("O")||0,o=e.filter(l=>l!=="H"&&l!=="O"),a=new Set(["P","S","N","Cl","Br","I","C"]);if(s>0&&r>0&&o.length===1&&a.has(o[0]))return i("H")+i(o[0])+i("O");if(s>0&&o.length===1&&av.has(o[0]))return i(o[0])+(s>1?`H${s}`:"H");if(s>0&&o.length===1&&(o[0]==="Te"||o[0]==="Po"||o[0]==="At"))return(s>1?`H${s}`:"H")+i(o[0]);if(s===1&&r===1&&e.length===2)return"OH";const c=l=>ne(l)?.en??0;return[...e].sort((l,u)=>c(l)-c(u)||(l<u?-1:1)).map(i).join("")}function lv(n,t,e,i=new Map){const s=new Set(e),r=new Map(e.map(p=>[p,p])),o=p=>{let g=p;for(;r.get(g)!==g;)g=r.get(g);for(;r.get(p)!==g;){const _=r.get(p);r.set(p,g),p=_}return g};for(const p of t.values())p.ionic||!s.has(p.a)||!s.has(p.b)||r.set(o(p.a),o(p.b));const a=[],c=new Map;for(const p of e){const g=o(p);c.has(g)||(c.set(g,[]),a.push(c.get(g))),c.get(g).push(p)}if(a.length===1)return Gl(e.map(p=>n.get(p).el));const l=new Map,u=new Map,h=[];for(const p of a){const g=Gl(p.map(m=>n.get(m).el)),_=p.reduce((m,d)=>m+(i.get(d)?.fc??0),0);_>0?l.set(g,(l.get(g)||0)+1):_<0?u.set(g,(u.get(g)||0)+1):h.push(g)}const f=p=>[...p.entries()].map(([g,_])=>_===1?g:(g.match(/[A-Z][a-z]?\d*/g)||[]).length>1&&(/\d$/.test(g)||/H/.test(g))?`(${g})${_}`:g+_).join("");return f(l)+h.join("")+f(u)}function Ar(n,t){if(t===0)return n;const e=Math.abs(t),i=String(e===1?"":e)+(t>0?"+":"−"),s={"+":"⁺","-":"⁻","−":"⁻",0:"⁰",1:"¹",2:"²",3:"³",4:"⁴",5:"⁵",6:"⁶",7:"⁷",8:"⁸",9:"⁹"};return n+[...i].map(r=>s[r]||r).join("")}function wd(n,t,e){const i=e.length;if(i===0)return"";const s=n instanceof Map?e.map(c=>n.get(c)):e.map((c,l)=>({el:{sym:n[l]||c}})),r=Array.from({length:i},()=>[]);for(const c of t){if(c[3])continue;const l=e.indexOf(c[0]),u=e.indexOf(c[1]);l>=0&&u>=0&&(r[l].push({to:u,order:c[2]||1}),r[u].push({to:l,order:c[2]||1}))}let o=s.map((c,l)=>`${e[l]||c.el.sym}_${l}`);for(let c=0;c<3;c++)o=o.map((l,u)=>{const h=[l];for(const{to:f,order:p}of r[u].sort((g,_)=>g.to-_.to))h.push(`${o[f]}_${p}`);return h.join("|")});const a={};for(let c=0;c<i;c++){const u=`${e[c]||s[c].el.sym}:${o[c]}`;a[u]=(a[u]||0)+1}return Object.entries(a).sort(([c],[l])=>c.localeCompare(l)).map(([c,l])=>`${c}×${l}`).join(";")}const cv="₀₁₂₃₄₅₆₇₈₉";function Ki(n){return[...n].map(t=>t>="0"&&t<="9"?cv[+t]:t).join("")}function Wl(n,t,e){const i=(n.radius+t.radius)/55;return e?i*1.18:i}function ri(n){return .28+n.radius/110}const St={add:(n,t)=>({x:n.x+t.x,y:n.y+t.y,z:n.z+t.z}),sub:(n,t)=>({x:n.x-t.x,y:n.y-t.y,z:n.z-t.z}),scale:(n,t)=>({x:n.x*t,y:n.y*t,z:n.z*t}),dot:(n,t)=>n.x*t.x+n.y*t.y+n.z*t.z,cross:(n,t)=>({x:n.y*t.z-n.z*t.y,y:n.z*t.x-n.x*t.z,z:n.x*t.y-n.y*t.x}),len:n=>Math.sqrt(n.x*n.x+n.y*n.y+n.z*n.z),norm(n){const t=this.len(n)||1;return this.scale(n,1/t)}};function Xl(n,t,e=null,i=120){const s=[],r=Math.PI*(3-Math.sqrt(5));for(let o=0;o<n;o++){const a=1-2*o/Math.max(1,n-1),c=Math.sqrt(Math.max(0,1-a*a)),l=r*o;s.push({x:Math.cos(l)*c,y:a,z:Math.sin(l)*c})}e&&(s[0]=St.norm(e));for(let o=0;o<i;o++){const a=s.map(()=>({x:0,y:0,z:0}));for(let c=0;c<n;c++)for(let l=c+1;l<n;l++){const u=(t[c]+t[l])/2,h=St.dot(s[c],s[l]),f=St.norm(St.sub(s[l],St.scale(s[c],h))),p=u*Math.max(.02,1-h*h);(!e||e!==c)&&(a[c]=St.add(a[c],St.scale(f,p))),(!e||e!==l)&&(a[l]=St.add(a[l],St.scale(St.neg(f),p)))}for(let c=0;c<n;c++)e!==c&&(s[c]=St.norm(St.add(s[c],St.scale(a[c],.25))))}return s}St.neg=n=>St.scale(n,-1);function uv(n,t){const e=n+t,i=[...Array(n).fill(1),...Array(t).fill(1.6)],s=Xl(e,i),r=[];for(let o=0;o<e;o++){r.push([]);for(let a=0;a<e;a++)r[o].push(Math.acos(Math.max(-1,Math.min(1,St.dot(s[o],s[a])))))}return{M:r,k:e,isLp:o=>o>=n}}function hv(n,t,e,i=null,s=new Map){const r=e;if(r.length===0)return new Map;const o=new Set(r),a=new Map,c=new Map;for(const x of r)a.set(x,ii(n,t,x).map(A=>Ro(A,x)).filter(A=>o.has(A))),c.set(x,s.get(x)?.lp??0);let l=i&&r.includes(i)?i:null;if(!l){let x=-1;for(const A of r){const y=a.get(A).length;(y>x||y===x&&A<l)&&(x=y,l=A)}}const u=new Map;for(const x of r)u.set(x,{...n.get(x).pos});u.set(l,{...n.get(l).pos});const h=new Map,f=new Map,p=new Set([l]),g=[l];for(;g.length;){const x=g.shift(),A=u.get(x),y=a.get(x).filter(k=>!p.has(k)),E=f.get(x)||null,w=y.length+c.get(x);if(w===0)continue;const O=[...y.map(()=>1),...Array(c.get(x)).fill(1.6)],H=Xl(w,O,E);y.forEach((k,G)=>{const B=H[G],Y=n.get(x),W=n.get(k),st=Wl(Y.el,W.el,ii(n,t,x).find(rt=>Ro(rt,x)===k)?.ionic);u.set(k,St.add(A,St.scale(B,st))),h.set(k,x),f.set(k,St.scale(B,-1)),p.add(k),g.push(k)})}const _=.55,m=new Map,d=new Map;for(const x of r){const A=c.get(x);if(m.set(x,[]),d.set(x,[]),A===0)continue;const y=a.get(x).length,E=f.get(x)||null,w=Xl(y+A,[...Array(y).fill(1),...Array(A).fill(1.6)],E);for(let O=0;O<A;O++)m.get(x).push(St.add(u.get(x),St.scale(w[y+O],_)))}const b=new Map;for(const x of r){const A=a.get(x).length;b.set(x,uv(A,c.get(x)))}const C=new Map;for(const x of r)C.set(x,{x:0,y:0,z:0});const M=new Map;for(const x of r)M.set(x,ri(n.get(x).el));const R=[];for(const x of r)for(const A of ii(n,t,x))if(o.has(A.a)&&o.has(A.b)&&A.a===x){const y=n.get(A.a),E=n.get(A.b);R.push({a:A.a,b:A.b,len:Wl(y.el,E.el,A.ionic)})}const v=r.length>60?120:320;for(let x=0;x<v;x++){const A=new Map;for(const w of r)A.set(w,{x:0,y:0,z:0});const y=(w,O)=>{A.set(w,St.add(A.get(w),O))};for(const w of R){const O=u.get(w.a),H=u.get(w.b),k=St.sub(H,O),G=St.len(k)||.001,B=St.scale(St.norm(k),.5*(G-w.len));y(w.a,B),y(w.b,St.neg(B))}for(const w of r){const O=u.get(w),{M:H,k}=b.get(w),G=[];for(const B of a.get(w))G.push(u.get(B));for(const B of m.get(w))G.push(B);if(G.length===k)for(let B=0;B<k;B++)for(let Y=B+1;Y<k;Y++){const W=St.norm(St.sub(G[B],O)),st=St.norm(St.sub(G[Y],O));let rt=St.dot(W,st);rt=Math.max(-1,Math.min(1,rt));const bt=Math.acos(rt);let Ft=H[B][Y]-bt;if(Ft=Math.max(-.5,Math.min(.5,Ft)),Math.abs(Ft)<.005)continue;const ie=St.norm(St.sub(st,St.scale(W,rt))),ue=St.norm(St.sub(W,St.scale(st,rt))),Kt=.12*Ft,q=a.get(w).length;B>=q?m.get(w)[B-q]=St.add(m.get(w)[B-q],St.scale(ie,Kt*2)):y(a.get(w)[B],St.scale(ie,Kt)),Y>=q?m.get(w)[Y-q]=St.add(m.get(w)[Y-q],St.scale(ue,Kt*2)):y(a.get(w)[Y],St.scale(ue,Kt))}}const E=[...r];for(let w=0;w<E.length;w++)for(let O=w+1;O<E.length;O++){const H=E[w],k=E[O];if(R.some(rt=>rt.a===H&&rt.b===k||rt.a===k&&rt.b===H))continue;const G=u.get(H),B=u.get(k),Y=(M.get(H)+M.get(k))*1.25,W=St.sub(B,G),st=St.len(W)||.001;if(st<Y){const rt=St.scale(St.norm(W),.35*(Y-st)/Y);y(H,St.neg(rt)),y(k,rt)}}for(const w of r){if(w===l){C.set(w,{x:0,y:0,z:0});continue}let O=St.scale(St.add(C.get(w),St.scale(A.get(w),.3)),.78);C.set(w,O),u.set(w,St.add(u.get(w),O))}for(const w of r){const O=u.get(w);m.set(w,m.get(w).map(H=>St.add(O,St.scale(St.norm(St.sub(H,O)),_))))}}return u}function dv(n,t,e,i=[],s=new Set){const r=new Map;return e.forEach((o,a)=>{if(o.bonds.length===0)return;const c=[...s].find(u=>o.atoms.includes(u))||null,l=hv(n,t,o.atoms,c,i[a]?.per??new Map);for(const[u,h]of l)r.set(u,h)}),r}const Rd="mol3d.lang",dh={en:{"btn.undo":"Undo","btn.delete":"Delete","btn.duplicate":"Duplicate","btn.clear":"Clear all","btn.fc":"Formal charges","btn.mayhem":"Mayhem","btn.tutorial":"Tutorial","btn.import":"Import","btn.quality":"Quality: {mode}","btn.theme":"Theme: {mode}","btn.quality.title":"Graphics quality — auto adapts when fps drops","btn.theme.title":"Switch between dark and light theme","btn.lang.title":"Switch language","btn.fc.title":"Show formal charge badges","btn.mayhem.title":"Toggle mayhem mode — exotic elements and chaotic reactions","btn.import.title":"Create custom elements (Mayhem mode only)","menu.volume":"Volume","btn.cancel":"Cancel","btn.create":"Create","custom.title":"Create Custom Element","custom.name":"Name","custom.sym":"Symbol","custom.type":"Type","custom.maxBonds":"Max bonds","custom.mass":"Mass","custom.color":"Color","custom.anion":"Can make anion?","custom.anionCharge":"Anion charge","cat.exotic":"Exotic","cat.metal":"Metal","cat.nonmetal":"Nonmetal","cat.metalloid":"Metalloid","cat.halogen":"Halogen","cat.noble":"Noble gas","pool.view.title":"Switch between list and periodic table","theme.dark":"Dark","theme.light":"Light","pool.title":"Element pool","pool.searchPh":"Search 118 elements...","pool.viewList":"List","pool.viewTable":"Table","el.title":"{name} · {cat} · max bonds {max}","pool.hint":"Click an element to place an atom. Metals bond ionically (electron transfer). Noble gases are inert — Kr, Xe and Rn react only with F or O.","ptable.ph":"La–Lu · Ac–Lr below","hint.html":"Click an element in the pool to place your first atom.<br />Drag atoms together to bond them — green ghost means a legal bond, red means forbidden.<br />Click a bond to cycle its order (1→2→3→2→1→delete).<br />Double-click two or more molecules to set up a reaction, then pick a condition.<br />Move around with WASD / arrow keys (Q/E = down/up) or the touch joystick.","rxn.title":"Reaction","rxn.count":"{n} molecule{s} selected","rxn.cancel":"Cancel","sel.title":"Selection","sel.empty":"Click an atom to inspect it.","sel.stats":"{cat} · mass {mass} · EN {en} · max bonds {max}","bohr.toggle":"Bohr Model","bohr.atomic":"Atomic #","bohr.mass":"Mass","bohr.protons":"Protons","bohr.neutrons":"Neutrons","bohr.electrons":"Electrons","bohr.valence":"Valence","bohr.shells":"Shells:","mol.title":"Molecule","mol.empty":"Build a molecule to analyze it.","mol.freeAtom":"Free atom — drag onto another to bond.","mol.unnamed":"Unnamed molecule","mol.stats":"{a} atoms · {b} bonds","mol.chargeLbl":"Ion charge","iso.more":"Showing the first {n} arrangements — this formula has more.","iso.search":"Search arrangements…","iso.none":"No arrangements match.","chg.minus.title":"Set ion charge one unit lower","chg.auto.title":"Automatic: minimize total formal charge","chg.plus.title":"Set ion charge one unit higher","list.title":"Molecules in scene","list.empty":"No molecules yet.","dex.disc":"Discoveries","dex.discEmpty":"Nothing discovered yet. React or build molecules to fill this log.","btn.saveDisc":"Save discoveries","dex.unknown":"Unknown","dex.notSaved":"Not saved yet","dex.chal":"Challenges","btn.reset":"Reset progress","tab.pool":"Pool","tab.info":"Info","tab.dex":"Dex","keys.hint":"WASD/arrows = move camera · drag = move / bond · click bond = cycle order · double-click molecule = select for reaction · Del = remove · Ctrl+Z = undo · Ctrl+D = duplicate","quality.auto":"Auto (adapts to fps)","quality.autoShort":"Auto","quality.low":"Low","quality.med":"Medium","quality.high":"High","cond.rt":"Room temperature","cond.heat":"Heat","cond.spark":"Spark","cond.electricity":"Electricity","cond.catalyst":"Catalyst","cond.uv":"UV light","status.noSelection":"Select an atom in a molecule first.","status.duplicated":"Molecule duplicated. Ctrl+Z to undo.","status.placed":"{name} placed. Drag it onto another atom to bond; double-click molecules to react.","status.cleared":"Scene cleared. Ctrl+Z to restore.","status.nothingUndo":"Nothing to undo.","status.undone":"Undone.","status.ionicBond":"Ionic bond {a}–{b}: electron transferred.","status.covBond":"Covalent bond {a}–{b} formed.","status.orderIonic":"Electron transfer set to {n}.","status.orderCov":"Bond order set to {n}.","status.selectFirst":"Select an atom in a molecule first.","status.chargeLimit":"Ion charge limited to ±6.","status.chargeSet":"Ion charge set to {v}.","status.chargeAuto":"Ion charge: automatic.","status.chalReset":"Challenge progress reset.","status.reactionCancelled":"Reaction cancelled.","status.noReaction":"No known reaction for this combination of molecules.","status.notEnough":"Not enough reactants — add {more} for a {cond} reaction.","status.nothingHappens":"Nothing happens under {cond}.","status.nothingHappensTry":"Nothing happens under {cond}. Try: {valid}.","status.sceneChanged":"Scene changed — the selection no longer matches a reaction.","status.reactionDone":"Reaction ({cond}): {eq}","status.reactionFailed":"Reaction failed: missing template for {product}.","status.mayhemEffect":"{effect} {eq}","status.selCleared":"Reaction selection cleared.","status.selRemoved":"Molecule removed from reaction selection.","status.selAdded":"Molecule added to reaction selection ({n}). Pick a condition below.","status.autoAdjusted":"Graphics auto-adjusted to {tier} ({fps} fps).","status.quality":"Graphics quality: {mode}","status.theme":"Theme: {mode}","status.lang":"Language: English","status.saveFail":"Could not save discoveries (storage unavailable).","toast.saved":"Saved {n} discovered molecule{s}.","toast.newDisc":"New discovery: {f}{name}","toast.challenge":"Challenge complete: {name}!","snap.upgradeTo":"Release to raise bond to order {n}","snap.ionic":"Release to transfer electrons (ionic bond)","snap.bond":"Release to bond","chem.metalMetal":"Metal–metal bonding is metallic, not molecular","chem.metalIonic":"Metals bond ionically here (electron transfer)","chem.nobleNoCompound":"Noble gas does not form compounds","chem.nobleOnlyFO":"Noble gases only bond with F or O","chem.noCapacity":"{sym} has no bonding capacity left (max {max})","chem.anionClosedShare":"{sym} is an anion — it accepted {n} electron{s} and its shell is closed, so it cannot share electrons","chem.ionicNeedMetal":"Ionic bonds need a metal","chem.metalMax":"{sym} has transferred its maximum electrons (max +{max})","chem.noAnion":"{sym} does not form anions","chem.anionMax":"{sym} has accepted its maximum electrons ({max})","chem.octet":"{sym} would exceed its octet (8 electrons)","chem.noLewisSharing":"{sym} cannot accept an electron while sharing {n} bond{s} — no valid Lewis structure","chem.selfBond":"An atom cannot bond to itself","chem.alreadyBonded":"Already bonded — click the bond to increase its order","chem.ionicMax3":"At most 3 electrons can transfer per bond","chem.ionicMax4":"At most 4 electrons can transfer per bond","chem.quadrupleMax":"Quadruple bond is the maximum","chem.metalTransferMax":"{sym} cannot transfer more than {max} electrons","chem.anionAcceptMax":"{sym} cannot accept more than {max} electrons","chem.pairCapSingle":"{a}–{b} bonds are limited to single bonds","chem.pairCapDouble":"{a}–{b} bonds cannot form a triple bond","chem.pairCapTriple":"{a}–{b} bonds cannot form a quadruple bond","chem.noValidBondOrder":"No valid bond order found for this pair","chem.capacityMax":"{sym} would exceed its bonding capacity (max {max})","chem.anionClosedShareMore":"{sym} is an anion — its closed shell cannot share more electrons","chem.lewis.charge":"No valid Lewis structure for that charge.","chem.lewis.radical":"Odd electron count — a radical. Adjust the ion charge.","chem.lewis.electrons":"Not enough electrons for that charge.","chem.partialIonic":"Incomplete ionic transfer: {sym} still holds an unpaired electron. Click the ionic bond to raise its order and complete the electron transfer.","lang.select.title":"Choose your language","lang.select.subtitle":"Select your preferred language to continue","lang.en":"English","lang.vi":"Tiếng Việt","lang.continue":"Continue","tut.skip":"Skip","tut.prev":"Back","tut.next":"Next","tut.finish":"Get started!","tut.welcome.title":"Welcome to Molecule Builder 3D!","tut.welcome.body":"Build molecules, explore reactions, and discover chemistry in 3D. This quick tutorial will show you the basics.","tut.pool.title":"Element Pool","tut.pool.body":"All 118 elements are here. Click any element to place an atom in the scene. Use the search bar or switch to the periodic table view.","tut.bond.title":"Building Molecules","tut.bond.body":"Drag one atom onto another to form a bond. A green ghost means the bond is allowed, red means it's forbidden. Metals bond ionically (electron transfer), nonmetals bond covalently (sharing electrons).","tut.bondOrder.title":"Bond Orders","tut.bondOrder.body":"Click a bond to cycle its order: single → double → triple → quadruple → triple → double → single → delete. Shift+click to go backwards.","tut.info.title":"Info Panel","tut.info.body":"Click any atom to inspect it. This panel shows element properties, molecule analysis (name, formula, mass), and a list of all molecules in the scene.","tut.reaction.title":"Reactions","tut.reaction.body":"Double-click two or more molecules to select them for a reaction. Then pick a condition (room temperature, heat, spark, etc.) to see what happens!","tut.dex.title":"Discovery Dex","tut.dex.body":"Every molecule you build or discover through reactions is logged here. Complete challenges to test your chemistry knowledge!","tut.camera.title":"Camera Controls","tut.camera.body":"Move the camera with WASD or arrow keys. Q/E move up/down. On mobile, use the joystick. Drag empty space to orbit, scroll to zoom.","tut.ready.title":"You're ready!","tut.ready.body":"Start building! Try making water (H₂O), salt (NaCl), or something exotic. You can replay this tutorial anytime from the ☰ menu."},vi:{"btn.undo":"Hoàn tác","btn.delete":"Xóa","btn.duplicate":"Nhân đôi","btn.clear":"Xóa hết","btn.fc":"Điện tích hình thức","btn.mayhem":"Hỗn loạn","btn.tutorial":"Hướng dẫn","btn.import":"Nhập","btn.quality":"Chất lượng: {mode}","btn.theme":"Giao diện: {mode}","btn.quality.title":"Chất lượng đồ họa — tự điều chỉnh khi fps giảm","btn.theme.title":"Chuyển giữa giao diện tối và sáng","btn.lang.title":"Chuyển ngôn ngữ","btn.fc.title":"Hiện điện tích hình thức","btn.mayhem.title":"Chế độ hỗn loạn — nguyên tố kỳ lạ và phản ứng hỗn loạn","btn.import.title":"Tạo nguyên tố tùy chỉnh (chỉ chế độ Hỗn loạn)","menu.volume":"Âm lượng","btn.cancel":"Hủy","btn.create":"Tạo","custom.title":"Tạo Nguyên Tố Tùy Chỉnh","custom.name":"Tên","custom.sym":"Ký hiệu","custom.type":"Loại","custom.maxBonds":"Liên kết tối đa","custom.mass":"Khối lượng","custom.color":"Màu sắc","custom.anion":"Có thể tạo anion?","custom.anionCharge":"Điện tích anion","cat.exotic":"Kỳ lạ","cat.metal":"Kim loại","cat.nonmetal":"Phi kim","cat.metalloid":"Á kim","cat.halogen":"Halogen","cat.noble":"Khí hiếm","pool.view.title":"Chuyển giữa danh sách và bảng tuần hoàn","theme.dark":"Tối","theme.light":"Sáng","pool.title":"Nguyên tố","pool.searchPh":"Tìm kiếm 118 nguyên tố...","pool.viewList":"Danh sách","pool.viewTable":"Bảng","el.title":"{name} · {cat} · tối đa {max} liên kết","pool.hint":"Bấm vào một nguyên tố để đặt nguyên tử. Kim loại liên kết ion (chuyển electron). Khí hiếm trơ — Kr, Xe và Rn chỉ phản ứng với F hoặc O.","ptable.ph":"La–Lu · Ac–Lr ở dưới","hint.html":"Bấm một nguyên tố trong kho để đặt nguyên tử đầu tiên.<br />Kéo các nguyên tử vào nhau để liên kết — bóng xanh nghĩa là liên kết hợp lệ, đỏ nghĩa là bị cấm.<br />Bấm vào liên kết để xoay bậc (1→2→3→2→1→xóa).<br />Nhấp đôi hai phân tử trở lên để tạo phản ứng, sau đó chọn điều kiện.<br />Di chuyển bằng WASD / phím mũi tên (Q/E = xuống/lên) hoặc joystick cảm ứng.","rxn.title":"Phản ứng","rxn.count":"{n} phân tử đã chọn","rxn.cancel":"Hủy","sel.title":"Lựa chọn","sel.empty":"Bấm vào một nguyên tử để xem chi tiết.","sel.stats":"{cat} · khối lượng {mass} · độ âm điện {en} · tối đa {max} liên kết","bohr.toggle":"Mô hình Bohr","bohr.atomic":"Số hiệu Z","bohr.mass":"Khối lượng","bohr.protons":"Proton","bohr.neutrons":"Nơtron","bohr.electrons":"Electron","bohr.valence":"Hóa trị","bohr.shells":"Lớp:","mol.title":"Phân tử","mol.empty":"Hãy tạo phân tử để phân tích.","mol.freeAtom":"Nguyên tử tự do — kéo vào nguyên tử khác để liên kết.","mol.unnamed":"Phân tử chưa đặt tên","mol.stats":"{a} nguyên tử · {b} liên kết","mol.chargeLbl":"Điện tích ion","iso.more":"Hiện {n} cách sắp xếp đầu tiên — công thức này còn nhiều hơn nữa.","iso.search":"Tìm cách sắp xếp…","iso.none":"Không có cách sắp xếp nào khớp.","chg.minus.title":"Giảm điện tích ion một đơn vị","chg.auto.title":"Tự động: cực tiểu hóa tổng điện tích hình thức","chg.plus.title":"Tăng điện tích ion một đơn vị","list.title":"Phân tử trong khung cảnh","list.empty":"Chưa có phân tử nào.","dex.disc":"Khám phá","dex.discEmpty":"Chưa có gì được khám phá. Hãy phản ứng hoặc tạo phân tử để lấp đầy sổ này.","btn.saveDisc":"Lưu khám phá","dex.unknown":"Không rõ","dex.notSaved":"Chưa lưu","dex.chal":"Thử thách","btn.reset":"Đặt lại tiến trình","tab.pool":"Nguyên tố","tab.info":"Thông tin","tab.dex":"Sổ tay","keys.hint":"WASD/phím mũi tên = di chuyển camera · kéo = di chuyển / liên kết · bấm liên kết = xoay bậc · nhấp đôi phân tử = chọn để phản ứng · Del = xóa · Ctrl+Z = hoàn tác · Ctrl+D = nhân đôi","quality.auto":"Tự động (điều chỉnh theo fps)","quality.autoShort":"Tự động","quality.low":"Thấp","quality.med":"Trung bình","quality.high":"Cao","cond.rt":"Nhiệt độ phòng","cond.heat":"Nhiệt","cond.spark":"Tia lửa điện","cond.electricity":"Dòng điện","cond.catalyst":"Chất xúc tác","cond.uv":"Ánh sáng UV","status.noSelection":"Hãy chọn một nguyên tử trong phân tử trước.","status.duplicated":"Đã nhân đôi phân tử. Ctrl+Z để hoàn tác.","status.placed":"Đã đặt {name}. Kéo vào nguyên tử khác để liên kết; nhấp đôi các phân tử để phản ứng.","status.cleared":"Đã xóa khung cảnh. Ctrl+Z để khôi phục.","status.nothingUndo":"Không có gì để hoàn tác.","status.undone":"Đã hoàn tác.","status.ionicBond":"Liên kết ion {a}–{b}: đã chuyển electron.","status.covBond":"Đã tạo liên kết cộng hóa trị {a}–{b}.","status.orderIonic":"Đã đặt mức chuyển electron thành {n}.","status.orderCov":"Đã đặt bậc liên kết thành {n}.","status.selectFirst":"Hãy chọn một nguyên tử trong phân tử trước.","status.chargeLimit":"Điện tích ion giới hạn trong ±6.","status.chargeSet":"Đã đặt điện tích ion thành {v}.","status.chargeAuto":"Điện tích ion: tự động.","status.chalReset":"Đã đặt lại tiến trình thử thách.","status.reactionCancelled":"Đã hủy phản ứng.","status.noReaction":"Không có phản ứng đã biết cho tổ hợp phân tử này.","status.notEnough":"Chưa đủ chất phản ứng — thêm {more} cho phản ứng {cond}.","status.nothingHappens":"Không có gì xảy ra với {cond}.","status.nothingHappensTry":"Không có gì xảy ra với {cond}. Thử: {valid}.","status.sceneChanged":"Khung cảnh đã thay đổi — lựa chọn không còn khớp phản ứng nào.","status.reactionDone":"Phản ứng ({cond}): {eq}","status.reactionFailed":"Phản ứng thất bại: thiếu mẫu cho {product}.","status.mayhemEffect":"{effect} {eq}","status.selCleared":"Đã xóa lựa chọn phản ứng.","status.selRemoved":"Đã bỏ phân tử khỏi lựa chọn phản ứng.","status.selAdded":"Đã thêm phân tử vào lựa chọn phản ứng ({n}). Chọn điều kiện bên dưới.","status.autoAdjusted":"Đã tự động điều chỉnh đồ họa xuống {tier} ({fps} fps).","status.quality":"Chất lượng đồ họa: {mode}","status.theme":"Giao diện: {mode}","status.lang":"Ngôn ngữ: Tiếng Việt","status.saveFail":"Không thể lưu khám phá (bộ nhớ không khả dụng).","toast.saved":"Đã lưu {n} phân tử đã khám phá.","toast.newDisc":"Khám phá mới: {f}{name}","toast.challenge":"Hoàn thành thử thách: {name}!","snap.upgradeTo":"Thả để nâng liên kết lên bậc {n}","snap.ionic":"Thả để chuyển electron (liên kết ion)","snap.bond":"Thả để liên kết","chem.metalMetal":"Liên kết kim loại–kim loại là liên kết kim loại, không phải phân tử","chem.metalIonic":"Kim loại liên kết ion tại đây (chuyển electron)","chem.nobleNoCompound":"Khí hiếm không tạo thành hợp chất","chem.nobleOnlyFO":"Khí hiếm chỉ liên kết với F hoặc O","chem.noCapacity":"{sym} không còn khả năng liên kết (tối đa {max})","chem.anionClosedShare":"{sym} là anion — đã nhận {n} electron nên lớp vỏ đã kín, không thể dùng chung electron","chem.ionicNeedMetal":"Liên kết ion cần kim loại","chem.metalMax":"{sym} đã chuyển toàn bộ electron tối đa (tối đa +{max})","chem.noAnion":"{sym} không tạo anion","chem.anionMax":"{sym} đã nhận đủ electron tối đa ({max})","chem.octet":"{sym} sẽ vượt bát tử (8 electron)","chem.noLewisSharing":"{sym} không thể nhận thêm electron khi đang dùng chung {n} liên kết — không có cấu trúc Lewis hợp lệ","chem.selfBond":"Nguyên tử không thể tự liên kết với chính nó","chem.alreadyBonded":"Đã liên kết — bấm vào liên kết để tăng bậc","chem.ionicMax3":"Mỗi liên kết chuyển tối đa 3 electron","chem.ionicMax4":"Mỗi liên kết chuyển tối đa 4 electron","chem.quadrupleMax":"Liên kết bốn là bậc tối đa","chem.metalTransferMax":"{sym} không thể chuyển nhiều hơn {max} electron","chem.anionAcceptMax":"{sym} không thể nhận nhiều hơn {max} electron","chem.pairCapSingle":"Liên kết {a}–{b} chỉ giới hạn ở liên kết đơn","chem.pairCapDouble":"Liên kết {a}–{b} không thể tạo liên kết ba","chem.pairCapTriple":"Liên kết {a}–{b} không thể tạo liên kết bốn","chem.noValidBondOrder":"Không tìm thấy bậc liên kết hợp lệ cho cặp này","chem.capacityMax":"{sym} sẽ vượt quá khả năng liên kết (tối đa {max})","chem.anionClosedShareMore":"{sym} là anion — lớp vỏ kín không thể chia sẻ thêm electron","chem.lewis.charge":"Không có cấu trúc Lewis hợp lệ cho điện tích đó.","chem.lewis.radical":"Số electron lẻ — gốc tự do. Hãy điều chỉnh điện tích ion.","chem.lewis.electrons":"Không đủ electron cho điện tích đó.","chem.partialIonic":"Chuyển electron ion chưa hoàn tất: {sym} còn một electron chưa ghép đôi. Nhấp vào liên kết ion để tăng bậc và hoàn tất chuyển electron.","lang.select.title":"Chọn ngôn ngữ","lang.select.subtitle":"Chọn ngôn ngữ ưa thích để tiếp tục","lang.en":"English","lang.vi":"Tiếng Việt","lang.continue":"Tiếp tục","tut.skip":"Bỏ qua","tut.prev":"Quay lại","tut.next":"Tiếp","tut.finish":"Bắt đầu!","tut.welcome.title":"Chào mừng đến Molecule Builder 3D!","tut.welcome.body":"Xây dựng phân tử, khám phá phản ứng, và tìm hiểu hóa học trong 3D. Hướng dẫn nhanh này sẽ cho bạn biết những điều cơ bản.","tut.pool.title":"Kho nguyên tố","tut.pool.body":"Có đủ 118 nguyên tố ở đây. Bấm vào bất kỳ nguyên tố nào để đặt nguyên tử vào khung cảnh. Dùng thanh tìm kiếm hoặc chuyển sang bảng tuần hoàn.","tut.bond.title":"Tạo phân tử","tut.bond.body":"Kéo nguyên tử này vào nguyên tử khác để tạo liên kết. Bóng xanh nghĩa là liên kết hợp lệ, đỏ nghĩa là bị cấm. Kim loại liên kết ion (chuyển electron), phi kim liên kết cộng hóa trị (dùng chung electron).","tut.bondOrder.title":"Bậc liên kết","tut.bondOrder.body":"Bấm vào liên kết để xoay bậc: đơn → đôi → ba → bốn → ba → đôi → đơn → xóa. Shift+bấm để đi ngược lại.","tut.info.title":"Bảng thông tin","tut.info.body":"Bấm vào bất kỳ nguyên tử nào để xem chi tiết. Bảng này hiển thị tính chất nguyên tố, phân tích phân tử (tên, công thức, khối lượng), và danh sách tất cả phân tử trong khung cảnh.","tut.reaction.title":"Phản ứng","tut.reaction.body":"Nhấp đôi hai phân tử trở lên để chọn chúng cho phản ứng. Sau đó chọn điều kiện (nhiệt độ phòng, nhiệt, tia lửa điện, v.v.) để xem điều gì xảy ra!","tut.dex.title":"Sổ tay khám phá","tut.dex.body":"Mọi phân tử bạn tạo hoặc khám phá qua phản ứng đều được ghi lại ở đây. Hoàn thành các thử thách để kiểm tra kiến thức hóa học của bạn!","tut.camera.title":"Điều khiển camera","tut.camera.body":"Di chuyển camera bằng WASD hoặc phím mũi tên. Q/E di chuyển lên/xuống. Trên di động, dùng joystick. Kéo vùng trống để xoay, cuộn để thu phóng.","tut.ready.title":"Bạn đã sẵn sàng!","tut.ready.body":"Bắt đầu xây dựng! Thử tạo nước (H₂O), muối (NaCl), hoặc thứ gì đó kỳ lạ. Bạn có thể xem lại hướng dẫn này bất cứ lúc nào từ menu ☰."}},fv={1:"Hidro",2:"Heli",3:"Liti",4:"Beryli",5:"Bo",6:"Cacbon",7:"Nitơ",8:"Oxi",9:"Flo",10:"Neon",11:"Natri",12:"Magie",13:"Nhôm",14:"Silic",15:"Phốtpho",16:"Lưu huỳnh",17:"Clo",18:"Argon",19:"Kali",20:"Canxi",21:"Scandium",22:"Titan",23:"Vanadium",24:"Crom",25:"Mangan",26:"Sắt",27:"Coban",28:"Nikel",29:"Đồng",30:"Kẽm",31:"Gallium",32:"Germani",33:"Asen",34:"Selen",35:"Brôm",36:"Krypton",37:"Rubidium",38:"Strontium",39:"Yttrium",40:"Zirconium",41:"Niobi",42:"Molypden",43:"Techneti",44:"Rutheni",45:"Rhodi",46:"Paladi",47:"Bạc",48:"Cadmi",49:"Indi",50:"Thiếc",51:"Antimon",52:"Tellur",53:"Iot",54:"Xenon",55:"Caesi",56:"Bari",57:"Lanthan",58:"Ceri",59:"Praseodymi",60:"Neodymi",61:"Promethi",62:"Samari",63:"Europi",64:"Gadolini",65:"Terbi",66:"Dysprosi",67:"Holmi",68:"Erbi",69:"Thuli",70:"Ytterbi",71:"Luteti",72:"Hafni",73:"Tantali",74:"Vonfram",75:"Rheni",76:"Osmi",77:"Iridi",78:"Platin",79:"Vàng",80:"Thủy ngân",81:"Thali",82:"Chì",83:"Bismut",84:"Poloni",85:"Astatin",86:"Radon",87:"Franci",88:"Radium",89:"Actini",90:"Thori",91:"Protactini",92:"Urani",93:"Neptuni",94:"Plutoni",95:"Americi",96:"Curi",97:"Berkelium",98:"Californium",99:"Einsteinium",100:"Fermium",101:"Mendelevium",102:"Nobelium",103:"Lawrencium",104:"Rutherfordium",105:"Dubnium",106:"Seaborgium",107:"Bohrium",108:"Hassium",109:"Meitnerium",110:"Darmstadtium",111:"Roentgenium",112:"Copernicium",113:"Nihonium",114:"Flerovium",115:"Moscovium",116:"Livermorium",117:"Tennessine",118:"Oganesson"},pv={alkali:"Kim loại kiềm",alkaline:"Kim loại kiềm thổ",transition:"Kim loại chuyển tiếp",post:"Kim loại sau chuyển tiếp",metalloid:"Á kim",nonmetal:"Phi kim",halogen:"Halogen",noble:"Khí hiếm",lanthanide:"Lantanide",actinide:"Actinide",exotic:"Kỳ lạ"},mv={alkali:"Alkali metal",alkaline:"Alkaline earth",transition:"Transition metal",post:"Post-transition metal",metalloid:"Metalloid",nonmetal:"Reactive nonmetal",halogen:"Halogen",noble:"Noble gas",lanthanide:"Lanthanide",actinide:"Actinide",exotic:"Exotic"};let In="en";function gv(){try{const n=localStorage.getItem(Rd);(n==="vi"||n==="en")&&(In=n)}catch{}document.documentElement.lang=In}function Pd(){return In}function Zt(){return In==="vi"}function _v(){return In==="en"?"vi":"en"}function Id(n){In=n==="vi"?"vi":"en";try{localStorage.setItem(Rd,In)}catch{}yc()}function Z(n,t){let e=dh[In]?.[n]??dh.en[n]??n;if(t)for(const[i,s]of Object.entries(t))e=e.replaceAll(`{${i}}`,String(s));return e}function wr(n){return n?typeof n=="string"?n:Z(n.key,n.p):""}function Hn(n){if(In==="vi"){const t=fv[n.z];if(t)return t}return n.name}function Sr(n){return(In==="vi"?pv[n]:mv[n])||n}function yc(){document.documentElement.lang=In;for(const n of document.querySelectorAll("[data-i18n]"))n.textContent=Z(n.dataset.i18n);for(const n of document.querySelectorAll("[data-i18n-html]"))n.innerHTML=Z(n.dataset.i18nHtml);for(const n of document.querySelectorAll("[data-i18n-ph]"))n.placeholder=Z(n.dataset.i18nPh);for(const n of document.querySelectorAll("[data-i18n-title]"))n.title=Z(n.dataset.i18nTitle)}const yv={H2O:"Water",CO2:"Carbon dioxide",CO:"Carbon monoxide",CH4:"Methane",NH3:"Ammonia",H2O2:"Hydrogen peroxide",SO2:"Sulfur dioxide",SO3:"Sulfur trioxide",NO:"Nitrogen monoxide",NO2:"Nitrogen dioxide",N2O:"Dinitrogen monoxide (laughing gas)",N2O3:"Dinitrogen trioxide",N2O4:"Dinitrogen tetroxide",N2O5:"Dinitrogen pentoxide",SF6:"Sulfur hexafluoride",PH3:"Phosphine",SiO2:"Silicon dioxide",C2H6:"Ethane",C2H4:"Ethene",C2H2:"Ethyne",C3H8:"Propane",C3H6:"Propene",C3H4:"Propyne",C4H10:"Butane",C5H12:"Pentane",C6H6:"Benzene",C6H12:"Cyclohexane",C6H14:"Hexane",C2H6O:"Ethanol (or dimethyl ether)",CH4O:"Methanol",CH2O:"Methanal (formaldehyde)",CHCl3:"Trichloromethane (chloroform)",CCl4:"Tetrachloromethane (carbon tetrachloride)",CS2:"Carbon disulfide",BF3:"Boron trifluoride",BCl3:"Boron trichloride",BH3:"Borane",NH4Cl:"Ammonium chloride",SiH4:"Silane",GeH4:"Germane",AsH3:"Arsine",H2S:"Hydrogen sulfide",HF:"Hydrogen fluoride",HBr:"Hydrogen bromide",HI:"Hydrogen iodide",HCl:"Hydrogen chloride",H2:"Hydrogen",N2:"Nitrogen",O2:"Dioxygen",O3:"Ozone",F2:"Difluorine",Cl2:"Dichlorine",Br2:"Dibromine",I2:"Diiodine",P4:"Tetraphosphorus",S8:"Cyclo-octasulfur",PCl3:"Phosphorus trichloride",PCl5:"Phosphorus pentachloride",XeF2:"Xenon difluoride",XeF4:"Xenon tetrafluoride",XeF6:"Xenon hexafluoride",XeO3:"Xenon trioxide",XeO4:"Xenon tetroxide",KrF2:"Krypton difluoride",N2H4:"Hydrazine",H2O2:"Hydrogen peroxide",NO2:"Nitrogen dioxide"},xv={"OH-1":"Hydroxide","NH4+1":"Ammonium","H3O+1":"Hydronium","NO3-1":"Nitrate","NO2-1":"Nitrite","CO3-2":"Carbonate","HCO3-1":"Hydrogen carbonate","SO4-2":"Sulfate","SO3-2":"Sulfite","HSO4-1":"Hydrogen sulfate","PO4-3":"Phosphate","PO3-3":"Phosphite","ClO-1":"Hypochlorite","ClO2-1":"Chlorite","ClO3-1":"Chlorate","ClO4-1":"Perchlorate","BrO3-1":"Bromate","IO3-1":"Iodate","MnO4-1":"Permanganate","CrO4-2":"Chromate","Cr2O7-2":"Dichromate","CN-1":"Cyanide","O2-2":"Peroxide","C2O4-2":"Oxalate","CNS-1":"Thiocyanate"},fh={sulfate:"sulfuric",sulfite:"sulfurous",phosphate:"phosphoric",phosphite:"phosphorous",cyanide:"hydrocyanic"},vv=["mono","di","tri","tetra","penta","hexa","hepta","octa","nona","deca"],Ld={O:"oxide",F:"fluoride",Cl:"chloride",Br:"bromide",I:"iodide",At:"astatide",S:"sulfide",Se:"selenide",Te:"telluride",N:"nitride",P:"phosphide",As:"arsenide",Sb:"antimonide",C:"carbide",Si:"silicide",B:"boride",Ge:"germanide",H:"hydride",Po:"polonide",Ts:"tennesside",Lv:"livermoride"},Mv=["","I","II","III","IV","V","VI","VII","VIII"],Sv={H2O:"Nước",CO2:"Cacbon dioxit",CO:"Cacbon monooxit",CH4:"Metan",NH3:"Amoniac",H2O2:"Hiđro peroxit",SO2:"Lưu huỳnh dioxit",SO3:"Lưu huỳnh trioxit",NO:"Nitơ monooxit",NO2:"Nitơ dioxit",N2O:"Đinitơ monooxit (khí cười)",N2O3:"Đinitơ trioxit",N2O4:"Đinitơ tetraoxit",N2O5:"Đinitơ pentaoxit",SF6:"Lưu huỳnh hexaflorua",PH3:"Photphin",SiO2:"Silic dioxit",C2H6:"Etan",C2H4:"Eten",C2H2:"Etin",C3H8:"Propan",C3H6:"Propen",C3H4:"Propin",C4H10:"Butan",C5H12:"Pentan",C6H6:"Benzên",C6H12:"Cyclohexan",C6H14:"Hexan",C2H6O:"Etanol (hoặc dimetyl ete)",CH4O:"Metanol",CH2O:"Methanal (fomanđehit)",CHCl3:"Triclorometan (cloroform)",CCl4:"Tetraclorometan (cacbon tetraclorua)",CS2:"Cacbon disunfua",BF3:"Bo triflorua",BCl3:"Bo triclorua",BH3:"Boran",NH4Cl:"Amoni clorua",SiH4:"Silan",GeH4:"German",AsH3:"Arsin",H2S:"Hiđro sunfua",HF:"Hiđro florua",HBr:"Hiđro bromua",HI:"Hiđro iodua",HCl:"Hiđro clorua",H2:"Hiđro",N2:"Nitơ",O2:"Đioxi",O3:"Ozôn",F2:"Điflo",Cl2:"Điclo",Br2:"Đibrom",I2:"Điiod",P4:"Tetraphotpho",S8:"Cyclo-octasunfua",PCl3:"Photpho triclorua",PCl5:"Photpho pentaclorua",XeF2:"Xenon diflorua",XeF4:"Xenon tetraflorua",XeF6:"Xenon hexaflorua",XeO3:"Xenon trioxit",XeO4:"Xenon tetraoxit",KrF2:"Krypton diflorua",N2H4:"Hiđrazin"},bv={"OH-1":"Hidroxit","NH4+1":"Amoni","H3O+1":"Hidroni","NO3-1":"Nitrat","NO2-1":"Nitrit","CO3-2":"Cacbonat","HCO3-1":"Hiđrocacbonat","SO4-2":"Sunfat","SO3-2":"Sunfit","HSO4-1":"Hiđrosunfat","PO4-3":"Photphat","PO3-3":"Photphit","ClO-1":"Hypoclorit","ClO2-1":"Clorit","ClO3-1":"Clorat","ClO4-1":"Perclorat","BrO3-1":"Bromat","IO3-1":"Iodat","MnO4-1":"Permanaganat","CrO4-2":"Cromat","Cr2O7-2":"Đicromat","CN-1":"Xianua","O2-2":"Peroxit","C2O4-2":"Oxalat","CNS-1":"Thiocyanat"},Od={O:"oxit",F:"florua",Cl:"clorua",Br:"bromua",I:"iodua",At:"astatua",S:"sunfua",Se:"selenua",Te:"telurua",N:"nitrua",P:"photphua",As:"asenua",Sb:"antimonua",C:"cacbua",Si:"silicua",B:"borua",Ge:"germanua",H:"hiđrua",Po:"polonua",Ts:"tennessua",Lv:"livermorua"},Ev=["mono","đi","tri","tetra","penta","hexa","hepta","octa","nona","deca"],Cv=["meth","eth","prop","but","pent","hex","hept","oct","non","dec"],Tv=["met","et","prop","but","pent","hex","hept","oct","non","dec"],Av={C:"cacbon",H:"hiđro",N:"nitơ",O:"oxi",S:"lưu huỳnh",P:"photpho",F:"flo",Cl:"clo",Br:"brôm",I:"iot",Se:"selen",Si:"silic",B:"bo",As:"asen",Te:"tellur"},ph={sunfat:"sunfuric",sunfit:"sunfurơ",nitrat:"nitric",nitrit:"nitrơ",photphat:"photphoric",photphit:"photphơ",hypoclorit:"hypoclorơ",clorit:"clorơ",hiđrosunfat:"sunfuric",xianua:"xianhidric"};function mh(n){return(Zt()?Ev:vv)[n-1]||`${n}`}function wv(n){const t=n.toLowerCase();return ph[t]?"axit "+ph[t]:t.endsWith("at")?"axit "+t.replace(/at$/,"ic"):t.endsWith("it")?"axit "+t.replace(/it$/,"ơ"):t.endsWith("ua")?"axit "+t.replace(/ua$/,"hidric"):"axit "+t}function Rv(n){return Av[n]||n.toLowerCase()}function za(n,t,e){const i=Zt(),s=i?Sv:yv,r=i?bv:xv,o=ur(n);if(t===0&&s[o])return s[o];const a=`${o}${t>0?"+"+t:t}`;if(r[a])return r[a];const c=new Set(n.map(l=>l.el.sym));if(c.size===2&&c.has("C")&&c.has("H")){const l=n.filter(h=>h.el.sym==="C").length,u=n.filter(h=>h.el.sym==="H").length;if(l>=1&&l<=10){const h=(i?Tv:Cv)[l-1];if(u===2*l+2)return Sn(h+(i?"an":"ane"));if(u===2*l)return e.some(f=>f.order===3)?Sn(h+(i?"in":"yne")):Sn(h+(i?"en":"ene"));if(u===2*l-2)return Sn(e.some(f=>f.order===3)?h+(i?"in":"yne"):h+(i?"ađien":"diene"))}}if(t===0){const l=n.filter(u=>u.el.sym==="H").length;if(l>0){const u=n.filter(p=>p.el.sym!=="H"),f=`${ur(u)}-${l}`;if(r[f]&&u.length>1){if(i)return Sn(wv(r[f]));const p=r[f].toLowerCase();if(fh[p])return Sn(fh[p]+" acid");if(p.endsWith("ate"))return Sn(p.replace(/ate$/,"ic")+" acid");if(p.endsWith("ite"))return Sn(p.replace(/ite$/,"ous")+" acid");if(p.endsWith("ide"))return Sn("hydro"+p.replace(/ide$/,"ic")+" acid")}}}if(n.every(l=>!pe(l.el))&&new Set(n.map(l=>l.el.sym)).size===2){const l=new Map;for(const g of n)l.set(g.el.sym,(l.get(g.el.sym)||0)+1);const[u,h]=[...l.keys()].sort((g,_)=>gh(n,g)-gh(n,_)),f=[];f.push((l.get(u)===1&&u!=="C"?"":mh(l.get(u)))+(i?Rv(u):Pv(u)));const p=i?Od[h]||h.toLowerCase()+"ua":Ld[h]||h.toLowerCase()+"ide";return f.push(mh(l.get(h))+p),Sn(f.join(" "))}return null}function Dd(n,t,e,i,s=null){if(!t.some(b=>b.ionic))return za(n,i,t);const o=t.filter(b=>!b.ionic),a=new Map(n.map(b=>[b.id,[]]));for(const b of o)a.get(b.a).push({other:b.b,order:b.order}),a.get(b.b).push({other:b.a,order:b.order});const c=[],l=new Set;for(const b of n){if(l.has(b.id))continue;const C=[],M=[b.id];for(l.add(b.id);M.length;){const R=M.pop();C.push(R);for(const{other:v}of a.get(R))l.has(v)||(l.add(v),M.push(v))}c.push(C)}const u=[],h=[];for(const b of c){const C=b.map(x=>n.find(A=>A.id===x)),M=o.filter(x=>b.includes(x.a)&&b.includes(x.b));let R=0;for(const x of C){if(s){R+=s.get(x.id)?.fc??0;continue}const A=t.filter(y=>y.ionic&&(y.a===x.id||y.b===x.id)).reduce((y,E)=>y+E.order,0);if(pe(x.el))R+=A;else{const y=M.filter(O=>O.a===x.id||O.b===x.id).reduce((O,H)=>O+H.order,0),E=x.el.valenceElectrons+A-y,w=Math.max(0,Math.floor(E/2));R+=x.el.valenceElectrons-2*w-y}}const v={atoms:C,bonds:M,charge:R};(R>0?u:h).push(v)}const f=[],p=new Map;for(const b of u)if(b.atoms.length===1&&pe(b.atoms[0].el)){const C=b.atoms[0].el,M=b.charge,R=C.charges&&C.charges.length>1?`(${Mv[M]||M})`:"",v="cat:"+C.sym+R;p.set(v,(p.get(v)||0)+1),f.push({key:v,name:Hn(C)+R})}else{const C=za(b.atoms,b.charge,b.bonds),M="cat:"+(C||ur(b.atoms)+b.charge);p.set(M,(p.get(M)||0)+1),f.push({key:M,name:C?C.toLowerCase():`ion ${ur(b.atoms)}`})}const g=new Map;for(const b of h){let C;if(b.atoms.length===1){const R=b.atoms[0].el;C=Zt()?Od[R.sym]||R.name.toLowerCase()+"ua":Ld[R.sym]||R.name.toLowerCase()+"ide"}else C=za(b.atoms,b.charge,b.bonds),C=C?C.toLowerCase():`ion ${ur(b.atoms)}`;const M="an:"+C;g.set(M,(g.get(M)||0)+1)}const _=[...p.entries()].map(([b])=>f.find(C=>C.key===b).name).join(" "),m=[...g.entries()].map(([b])=>b.slice(3)).join(" "),d=Sn(`${_} ${m}`.trim());return i!==0?`${d} (${Zt()?"điện tích":"net charge"} ${i>0?"+":""}${i})`:d}function gh(n,t){return n.find(i=>i.el.sym===t).el.en??0}function Pv(n){return{C:"carbon",H:"hydrogen",N:"nitrogen",O:"oxygen",S:"sulfur",P:"phosphorus",F:"fluorine",Cl:"chlorine",Br:"bromine",I:"iodine",Se:"selenium",Si:"silicon",B:"boron",As:"arsenic",Te:"tellurium",H2:"hydrogen"}[n]||n.toLowerCase()}function Sn(n){return n.charAt(0).toUpperCase()+n.slice(1)}function ur(n){return Gl(n.map(t=>t.el))}function Iv(n){const t=new Map,e=/([A-Z][a-z]?)(\d*)/g;let i;for(;(i=e.exec(n))!==null;){if(!i[1])continue;const s=i[2]?parseInt(i[2]):1;t.set(i[1],(t.get(i[1])||0)+s)}return t}function Ln(n,t,e){const i=Iv(n),s=[...i.keys()],r=s.some(u=>{const h=ne(u);return h&&pe(h)}),o=i.has("H"),a=i.has("O"),c=i.has("C"),l=i.has("N");if(s.length===1)return{key:"element",label:Zt()?"Nguyên tố":"Element"};if(n==="H2O")return{key:"oxide",label:Zt()?"Oxit":"Oxide"};if(c&&i.get("H")>0&&s.filter(u=>u!=="C"&&u!=="H").length===0){const u=i.get("C")||1,h=i.get("H")||0;return h===2*u+2?{key:"alkane",label:Zt()?"Ankan":"Alkane"}:h===2*u?{key:"alkene",label:Zt()?"Anken":"Alkene"}:h===2*u-2?{key:"alkyne",label:Zt()?"Ankin":"Alkyne"}:{key:"organic",label:Zt()?"Hữu cơ":"Organic"}}if(c&&!r&&!(n==="CO"||n==="CO2"||n==="C3O2")){if(n!=="CS2"){if(n==="HCN"||n==="CHN")return{key:"acid",label:Zt()?"Axit":"Acid"};if(!o&&!a&&!hasS&&l&&s.length===2)return{key:"binary",label:Zt()?"Hợp chất nhị nguyên":"Binary compound"};if(!o&&l&&a&&!hasS&&s.length===3)return{key:"compound",label:Zt()?"Hợp chất":"Compound"};if(!o&&l&&hasS&&!a&&s.length===3)return{key:"compound",label:Zt()?"Hợp chất":"Compound"};if(!(c&&!o&&!a&&!l&&!hasS)){const u=i.get("C")||1,h=i.get("H")||0,f=i.get("O")||0,p=i.get("N")||0,g=s.filter(m=>m==="F"||m==="Cl"||m==="Br"||m==="I"),_=s.filter(m=>m!=="C"&&m!=="H"&&m!=="O"&&m!=="N"&&m!=="F"&&m!=="Cl"&&m!=="Br"&&m!=="I");if(a&&_.length===0){if(f===1&&h===2*u+2&&!l)return{key:"alcohol",label:Zt()?"Ancol":"Alcohol"};if(f===1&&h===2*u&&!l)return u<3?{key:"aldehyde",label:Zt()?"Anđehit":"Aldehyde"}:{key:"ketone",label:Zt()?"Xeton":"Ketone"};if(f===2&&h===2*u&&!l)return{key:"carboxylicAcid",label:Zt()?"Axit cacboxylic":"Carboxylic acid"}}if(l&&!a&&_.length===0&&p===1&&h===2*u+3)return{key:"amine",label:Zt()?"Amin":"Amine"};if(g.length>0&&_.length===0&&!a&&!l)return{key:"haloalkane",label:Zt()?"Dẫn xuất halogen":"Haloalkane"};if(!(a&&s.length===2))return{key:"organic",label:Zt()?"Hữu cơ":"Organic"}}}}if(r&&a&&o)return{key:"base",label:Zt()?"Bazơ":"Base"};if(o&&s.length>=2&&!r){const u=s.filter(h=>h!=="H");if(u.length===1&&(u[0]==="F"||u[0]==="Cl"||u[0]==="Br"||u[0]==="I"))return{key:"acid",label:Zt()?"Axit":"Acid"};if(u.some(h=>h==="S"||h==="N"||h==="P"))return{key:"acid",label:Zt()?"Axit":"Acid"}}if(a&&s.length===2){const u=s.find(f=>f!=="O"),h=ne(u);return h&&pe(h)?{key:"basicOxide",label:Zt()?"Oxit bazơ":"Basic oxide"}:{key:"acidicOxide",label:Zt()?"Oxit axit":"Acidic oxide"}}return a&&o&&!r?{key:"acid",label:Zt()?"Axit":"Acid"}:r&&a&&!o?{key:"basicOxide",label:Zt()?"Oxit bazơ":"Basic oxide"}:r?{key:"salt",label:Zt()?"Muối":"Salt"}:s.length===2&&!r?{key:"binary",label:Zt()?"Hợp chất nhị nguyên":"Binary compound"}:{key:"compound",label:Zt()?"Hợp chất":"Compound"}}const Lv=[{tier:1,formula:"H2O",charge:0,name:"Water",vi:"Nước"},{tier:1,formula:"CO2",charge:0,name:"Carbon dioxide",vi:"Cacbon dioxit"},{tier:1,formula:"CH4",charge:0,name:"Methane",vi:"Metan"},{tier:1,formula:"NH3",charge:0,name:"Ammonia",vi:"Amoniac"},{tier:1,formula:"O2",charge:0,name:"Dioxygen",vi:"Đioxi"},{tier:1,formula:"N2",charge:0,name:"Dinitrogen",vi:"Nitơ"},{tier:1,formula:"NaCl",charge:0,name:"Sodium chloride",vi:"Natri clorua"},{tier:1,formula:"HCl",charge:0,name:"Hydrogen chloride",vi:"Hiđro clorua"},{tier:1,formula:"CO",charge:0,name:"Carbon monoxide",vi:"Cacbon monoxit"},{tier:1,formula:"H2",charge:0,name:"Dihydrogen",vi:"Hiđro"},{tier:2,formula:"C2H6",charge:0,name:"Ethane",vi:"Etan"},{tier:2,formula:"C2H4",charge:0,name:"Ethene",vi:"Eten"},{tier:2,formula:"C2H2",charge:0,name:"Ethyne",vi:"Etin"},{tier:2,formula:"H2O2",charge:0,name:"Hydrogen peroxide",vi:"Hiđro peroxit"},{tier:2,formula:"SO2",charge:0,name:"Sulfur dioxide",vi:"Lưu huỳnh dioxit"},{tier:2,formula:"MgO",charge:0,name:"Magnesium oxide",vi:"Magie oxit"},{tier:2,formula:"CaCl2",charge:0,name:"Calcium chloride",vi:"Canxi clorua"},{tier:2,formula:"NaOH",charge:0,name:"Sodium hydroxide",vi:"Natri hidroxit"},{tier:2,formula:"O3",charge:0,name:"Ozone",vi:"Ozon"},{tier:2,formula:"HCN",charge:0,name:"Hydrogen cyanide",vi:"Axit xianhiđric"},{tier:3,formula:"OH-1",charge:-1,name:"Hydroxide ion",vi:"Ion hidroxit"},{tier:3,formula:"NH4+1",charge:1,name:"Ammonium ion",vi:"Ion amoni"},{tier:3,formula:"H3O+1",charge:1,name:"Hydronium ion",vi:"Ion hidroni"},{tier:3,formula:"H2SO4",charge:0,name:"Sulfuric acid",vi:"Axit sunfuric"},{tier:3,formula:"CaCO3",charge:0,name:"Calcium carbonate",vi:"Canxi cacbonat"},{tier:3,formula:"NO3-1",charge:-1,name:"Nitrate ion",vi:"Ion nitrat"},{tier:3,formula:"SO4-2",charge:-2,name:"Sulfate ion",vi:"Ion sunfat"},{tier:3,formula:"SF6",charge:0,name:"Sulfur hexafluoride",vi:"Lưu huỳnh hexaflorua"},{tier:3,formula:"C6H6",charge:0,name:"Benzene",vi:"Benzên"},{tier:3,formula:"XeF4",charge:0,name:"Xenon tetrafluoride",vi:"Xenon tetraflorua"},{tier:3,formula:"CH4O",charge:0,name:"Methanol",vi:"Metanol"},{tier:3,formula:"C2H4O2",charge:0,name:"Acetic acid",vi:"Axit axetic"},{tier:4,formula:"PO4-3",charge:-3,name:"Phosphate ion",vi:"Ion photphat"},{tier:4,formula:"CO3-2",charge:-2,name:"Carbonate ion",vi:"Ion cacbonat"},{tier:4,formula:"C3H8",charge:0,name:"Propane",vi:"Propan"},{tier:4,formula:"C4H10",charge:0,name:"Butane",vi:"Butan"},{tier:4,formula:"C3H6O",charge:0,name:"Acetone",vi:"Axeton"},{tier:4,formula:"C2H6O",charge:0,name:"Ethanol",vi:"Etanol"},{tier:4,formula:"PF5",charge:0,name:"Phosphorus pentafluoride",vi:"Photpho pentaflorua"},{tier:4,formula:"MnO4-1",charge:-1,name:"Permanganate ion",vi:"Ion pemanganat"},{tier:4,formula:"HNO3",charge:0,name:"Nitric acid",vi:"Axit nitric"},{tier:4,formula:"H3PO4",charge:0,name:"Phosphoric acid",vi:"Axit photphoric"},{tier:5,formula:"C6H12O6",charge:0,name:"Glucose",vi:"Glucozơ"},{tier:5,formula:"C8H18",charge:0,name:"Octane",vi:"Octan"},{tier:5,formula:"Cr2O7-2",charge:-2,name:"Dichromate ion",vi:"Ion đicromat"},{tier:5,formula:"UF6",charge:0,name:"Uranium hexafluoride",vi:"Urani hexaflorua"},{tier:5,formula:"CCl4",charge:0,name:"Carbon tetrachloride",vi:"Cacbon tetraclorua"},{tier:5,formula:"CH2Cl2",charge:0,name:"Dichloromethane",vi:"Điclometan"},{tier:5,formula:"CHO3-1",charge:-1,name:"Bicarbonate ion",vi:"Ion bicacbonat"},{tier:5,formula:"HSO4-1",charge:-1,name:"Bisulfate ion",vi:"Ion bisunfat"},{tier:6,formula:"C5H12",charge:0,name:"Pentane",vi:"Pentan"},{tier:6,formula:"C6H14",charge:0,name:"Hexane",vi:"Hекsan"},{tier:6,formula:"C2H4O2",charge:0,name:"Methyl formate",vi:"Metyl fomat"},{tier:6,formula:"C3H6O2",charge:0,name:"Methyl acetate",vi:"Metyl axetat"},{tier:6,formula:"C2H5ClO",charge:0,name:"Hypochlorous ethylic ester",vi:"Etyl hipoclorit"},{tier:6,formula:"C6H6O",charge:0,name:"Phenol",vi:"Phenol"},{tier:6,formula:"C2O4-2",charge:-2,name:"Oxalate ion",vi:"Ion oxalat"},{tier:6,formula:"ClO4-1",charge:-1,name:"Perchlorate ion",vi:"Ion perclorat"},{tier:7,formula:"C12H22O11",charge:0,name:"Sucrose",vi:"Saccarozơ"},{tier:7,formula:"C5H10O5",charge:0,name:"Ribose",vi:"Ribozơ"},{tier:7,formula:"C3H5N3O9",charge:0,name:"Nitroglycerin",vi:"Nitroglycerin"},{tier:7,formula:"C2H5NO2",charge:0,name:"Glycine",vi:"Glyxin"},{tier:7,formula:"C6H5NO2",charge:0,name:"Nicotinic acid (Niacin)",vi:"Axit nicotinic"},{tier:7,formula:"Fe(CN)6-3",charge:-3,name:"Ferricyanide ion",vi:"Ion ferricyanua"},{tier:8,formula:"C7H8O",charge:0,name:"Benzyl alcohol",vi:"Benzyl alcol"},{tier:8,formula:"C7H6O2",charge:0,name:"Benzoic acid",vi:"Axit benzoic"},{tier:8,formula:"C8H10N4O2",charge:0,name:"Caffeine",vi:"Caffeine"},{tier:8,formula:"C6H8O6",charge:0,name:"Ascorbic acid (Vitamin C)",vi:"Axit ascorbic"},{tier:8,formula:"C3H8O3",charge:0,name:"Glycerol",vi:"Glicerol"},{tier:8,formula:"Fe(CN)6-4",charge:-4,name:"Ferrocyanide ion",vi:"Ion ferrocyanua"},{tier:9,formula:"C10H14N2O",charge:0,name:"Nicotine",vi:"Nicotin"},{tier:9,formula:"C9H8O4",charge:0,name:"Aspirin",vi:"Aspirin"},{tier:9,formula:"C6H13NO2",charge:0,name:"Leucine",vi:"Leuxin"},{tier:9,formula:"C4H6O6",charge:0,name:"Tartaric acid",vi:"Axit tartaric"},{tier:9,formula:"PtCl4-2",charge:-2,name:"Tetrachloroplatinate ion",vi:"Ion tetracloroplatinat"},{tier:10,formula:"C16H18N2O4S",charge:0,name:"Penicillin G",vi:"Penicillin G"},{tier:10,formula:"C20H25N3O",charge:0,name:"LSD",vi:"LSD"},{tier:10,formula:"C17H19NO3",charge:0,name:"Morphine",vi:"Moocphin"},{tier:10,formula:"Co(NH3)6+3",charge:3,name:"Hexaamminecobalt(III) ion",vi:"Ion hexaamminecoban(III)"},{tier:11,formula:"Fe2O3",charge:0,name:"Iron(III) oxide",vi:"Sắt(III) oxit"},{tier:11,formula:"NO2",charge:0,name:"Nitrogen dioxide",vi:"Nitơ dioxit"},{tier:11,formula:"HNO3",charge:0,name:"Nitric acid",vi:"Axit nitric"},{tier:11,formula:"NaNO3",charge:0,name:"Sodium nitrate",vi:"Natri nitrat"},{tier:11,formula:"KNO3",charge:0,name:"Potassium nitrate",vi:"Kali nitrat"},{tier:11,formula:"CaSO4",charge:0,name:"Calcium sulfate",vi:"Canxi sulfat"},{tier:11,formula:"ZnSO4",charge:0,name:"Zinc sulfate",vi:"Kẽm sulfat"},{tier:11,formula:"AgNO3",charge:0,name:"Silver nitrate",vi:"Bạc nitrat"},{tier:11,formula:"CuSO4",charge:0,name:"Copper(II) sulfate",vi:"Đồng(II) sulfat"},{tier:11,formula:"CH4N2O",charge:0,name:"Urea",vi:"Urê"},{tier:12,formula:"C3H7NO2",charge:0,name:"Alanine",vi:"Alanin"},{tier:12,formula:"C5H11NO2",charge:0,name:"Valine",vi:"Valin"},{tier:12,formula:"C3H7NO3",charge:0,name:"Serine",vi:"Serin"},{tier:12,formula:"CuH12N4",charge:2,name:"Tetraamminecopper(II) ion",vi:"Ion tetraamminedong(II)"},{tier:12,formula:"AgH6N2",charge:1,name:"Diamminesilver(I) ion",vi:"Ion diamminebac(I)"}],Nd=[{z:200,sym:"An",name:"Antimatter",mass:0,cat:"exotic",en:null,maxBonds:1,anionCharge:0,charges:null,radius:100,color:"#ff00ff"},{z:201,sym:"Dm",name:"Dark Matter",mass:999,cat:"exotic",en:null,maxBonds:0,anionCharge:0,charges:null,radius:150,color:"#1a1a2e"},{z:202,sym:"Ub",name:"Unobtainium",mass:500,cat:"exotic",en:null,maxBonds:10,anionCharge:0,charges:[10],radius:200,color:"#ffd700"},{z:203,sym:"Vb",name:"Vibranium",mass:300,cat:"exotic",en:10,maxBonds:12,anionCharge:0,charges:[6,4,2],radius:180,color:"#7b2cbf"},{z:204,sym:"Ad",name:"Adamantium",mass:800,cat:"exotic",en:null,maxBonds:8,anionCharge:0,charges:[4],radius:220,color:"#c0c0c0"},{z:205,sym:"My",name:"Mystery Element",mass:NaN,cat:"exotic",en:null,maxBonds:7,anionCharge:7,charges:null,radius:160,color:"#00ff9f"},{z:206,sym:"Ex",name:"Explosium",mass:50,cat:"exotic",en:.1,maxBonds:1,anionCharge:0,charges:[1],radius:120,color:"#ff0000"},{z:207,sym:"Nc",name:"Necrosium",mass:666,cat:"exotic",en:null,maxBonds:6,anionCharge:0,charges:[3],radius:170,color:"#000000"},{z:208,sym:"Qt",name:"Quantumite",mass:.001,cat:"exotic",en:null,maxBonds:20,anionCharge:0,charges:null,radius:80,color:"#00f0ff"},{z:209,sym:"Pl",name:"Plasma",mass:10,cat:"exotic",en:null,maxBonds:0,anionCharge:0,charges:null,radius:140,color:"#ff6b6b"}],Ud=[{reactants:{An:1,H:1},condition:"rt",products:[],equation:"An + H -> ANNIHILATION!",effect:"annihilate",dynamic:!0},{reactants:{Ex:2},condition:"spark",products:[],equation:"2Ex -> BOOM!",effect:"explode",dynamic:!0},{reactants:{Ub:1,Vb:1},condition:"rt",products:[],equation:"Ub + Vb -> ULTIMATE ALLOY!",effect:"merge",dynamic:!0},{reactants:{Qt:1},condition:"rt",products:[],equation:"Qt -> SUPERPOSITION!",effect:"quantum",dynamic:!0},{reactants:{Nc:1,H2O:1},condition:"rt",products:[],equation:"Nc + H2O -> DECAY!",effect:"decay",dynamic:!0},{reactants:{Pl:1,O2:1},condition:"heat",products:[],equation:"Pl + O2 -> PLASMA STORM!",effect:"plasma",dynamic:!0}];function Ov(n){return Nd.find(t=>t.sym===n)}const Fd={low:{key:"low",label:"Low",sphereSeg:[10,8],cylSeg:6,pixelRatio:1,drift:!1},med:{key:"med",label:"Medium",sphereSeg:[16,12],cylSeg:10,pixelRatio:1.5,drift:!0},high:{key:"high",label:"High",sphereSeg:[26,18],cylSeg:14,pixelRatio:2,drift:!0}},es=["low","med","high"];class Dv{constructor({downFps:t=30,upFps:e=55,downMs:i=2e3,upMs:s=4e3}={}){this.downFps=t,this.upFps=e,this.downMs=i,this.upMs=s,this.lowSince=null,this.highSince=null}update(t,e,i=es.length-1){const s=performance.now();if(t<this.downFps){if(this.lowSince??=s,s-this.lowSince>=this.downMs&&e>0)return this.reset(),e-1}else this.lowSince=null;if(t>this.upFps){if(this.highSince??=s,s-this.highSince>=this.upMs&&e<i)return this.reset(),e+1}else this.highSince=null;return e}reset(){this.lowSince=null,this.highSince=null}}class Nv{constructor(t=1e3){this.windowMs=t,this.frames=[]}frame(t){this.frames.push(t);const e=t-this.windowMs;for(;this.frames.length>2&&this.frames[0]<e;)this.frames.shift()}get fps(){if(this.frames.length<2)return 60;const t=this.frames[this.frames.length-1]-this.frames[0];return t>0?(this.frames.length-1)*1e3/t:60}}function Uv({camera:n,controls:t}){const a=new Set,c={x:0,y:0};let l=0;const u=()=>{const d=document.activeElement;return d instanceof HTMLInputElement||d instanceof HTMLTextAreaElement},h=new Set(["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"]);window.addEventListener("keydown",d=>{if(d.key==="Shift"){a.add("shift");return}if(u())return;const b=d.key.toLowerCase();h.has(b)&&(d.preventDefault(),a.add(b))}),window.addEventListener("keyup",d=>{a.delete(d.key.toLowerCase()),d.key==="Shift"&&a.delete("shift")}),window.addEventListener("blur",()=>a.clear());const f=new L,p=new L,g=new L,_=new L(0,1,0);function m(d){let b=c.x,C=c.y,M=l;if((a.has("w")||a.has("arrowup"))&&(C+=1),(a.has("s")||a.has("arrowdown"))&&(C-=1),(a.has("a")||a.has("arrowleft"))&&(b-=1),(a.has("d")||a.has("arrowright"))&&(b+=1),a.has("e")&&(M+=1),a.has("q")&&(M-=1),!b&&!C&&!M)return!1;n.getWorldDirection(f),f.y=0,f.lengthSq()<1e-6&&f.set(0,0,-1),f.normalize(),p.crossVectors(f,_);const R=6*(a.has("shift")?2.25:1)*d;if(g.set(0,0,0).addScaledVector(f,C).addScaledVector(p,b),g.y+=M,g.lengthSq()===0)return!1;g.normalize().multiplyScalar(R),t.target.add(g),n.position.add(g),t.target.y=Math.max(-1.4,Math.min(9,t.target.y));const v=Math.hypot(t.target.x,t.target.z);if(v>45){const x=45/v;t.target.x*=x,t.target.z*=x}return!0}return{update:m,setStick:(d,b)=>{c.x=d,c.y=b},setVertical:d=>{l=d}}}const Yt={H2O:{atoms:["O","H","H"],bonds:[[0,1,1],[0,2,1]]},HCl:{atoms:["H","Cl"],bonds:[[0,1,1]]},NH3:{atoms:["N","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1]]},MgO:{atoms:["Mg","O"],bonds:[[0,1,2,!0]]},NaCl:{atoms:["Na","Cl"],bonds:[[0,1,1,!0]]},CaO:{atoms:["Ca","O"],bonds:[[0,1,2,!0]]},CaOH2:{atoms:["Ca","O","O","H","H"],bonds:[[0,1,1,!0],[0,2,1,!0],[1,3,1],[2,4,1]]},CaCO3:{atoms:["Ca","C","O","O","O"],bonds:[[0,2,1,!0],[0,3,1,!0],[1,2,1],[1,3,1],[1,4,2]]},NaOH:{atoms:["Na","O","H"],bonds:[[0,1,1,!0],[1,2,1]]},KOH:{atoms:["K","O","H"],bonds:[[0,1,1,!0],[1,2,1]]},MgCl2:{atoms:["Mg","Cl","Cl"],bonds:[[0,1,1,!0],[0,2,1,!0]]},AlCl3:{atoms:["Al","Cl","Cl","Cl"],bonds:[[0,1,1,!0],[0,2,1,!0],[0,3,1,!0]]},CO2:{atoms:["C","O","O"],bonds:[[0,1,2],[0,2,2]]},O2:{atoms:["O","O"],bonds:[[0,1,2]]},O3:{atoms:["O","O","O"],bonds:[[0,1,1],[1,2,2]]},NO:{atoms:["N","O"],bonds:[[0,1,2]]},H2:{atoms:["H","H"],bonds:[[0,1,1]]},SO2:{atoms:["S","O","O"],bonds:[[0,1,2],[0,2,2]]},SO3:{atoms:["S","O","O","O"],bonds:[[0,1,2],[0,2,2],[0,3,2]]},H2SO4:{atoms:["S","O","O","O","O","H","H"],bonds:[[0,1,2],[0,2,2],[0,3,1],[0,4,1],[3,5,1],[4,6,1]]},HNO3:{atoms:["H","O","N","O","O"],bonds:[[0,1,1],[1,2,1],[2,3,2],[2,4,2]]},NH4:{atoms:["N","H","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]],charge:1},ClI:{atoms:["Cl"],bonds:[],charge:-1},MnO2:{atoms:["Mn","O","O"],bonds:[[0,1,2,!0],[0,2,2,!0]]},MnCl2:{atoms:["Mn","Cl","Cl"],bonds:[[0,1,1,!0],[0,2,1,!0]]},Cl2:{atoms:["Cl","Cl"],bonds:[[0,1,1]]},KCl:{atoms:["K","Cl"],bonds:[[0,1,1,!0]]},Na2SO4:{atoms:["Na","Na","S","O","O","O","O"],bonds:[[0,2,1,!0],[1,2,1,!0],[2,3,2],[2,4,2],[2,5,1],[2,6,1]]},K2SO4:{atoms:["K","K","S","O","O","O","O"],bonds:[[0,2,1,!0],[1,2,1,!0],[2,3,2],[2,4,2],[2,5,1],[2,6,1]]},CaCl2:{atoms:["Ca","Cl","Cl"],bonds:[[0,1,1,!0],[0,2,1,!0]]},Al2O3:{atoms:["Al","Al","O","O","O"],bonds:[[0,2,2,!0],[0,3,2,!0],[0,4,2,!0],[1,2,2,!0],[1,3,2,!0],[1,4,2,!0]]},Fe:{atoms:["Fe"],bonds:[]},Cu:{atoms:["Cu"],bonds:[]},Ag:{atoms:["Ag"],bonds:[]},Zn:{atoms:["Zn"],bonds:[]},Na:{atoms:["Na"],bonds:[]},Al:{atoms:["Al"],bonds:[]},K:{atoms:["K"],bonds:[]},Ca:{atoms:["Ca"],bonds:[]},Mg:{atoms:["Mg"],bonds:[]},CH4:{atoms:["C","H","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]]},C2H6:{atoms:["C","C","H","H","H","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1],[1,5,1],[1,6,1],[1,7,1]]},C3H8:{atoms:["C","C","C","H","H","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[0,3,1],[0,4,1],[0,5,1],[1,6,1],[1,7,1],[2,8,1],[2,9,1],[2,10,1]]},C2H4:{atoms:["C","C","H","H","H","H"],bonds:[[0,1,2],[0,2,1],[0,3,1],[1,4,1],[1,5,1]]},C3H6:{atoms:["C","C","C","H","H","H","H","H","H"],bonds:[[0,1,2],[1,2,1],[0,3,1],[0,4,1],[1,5,1],[2,6,1],[2,7,1],[2,8,1]]},C2H2:{atoms:["C","C","H","H"],bonds:[[0,1,3],[0,2,1],[1,3,1]]},C6H6:{atoms:["C","C","C","C","C","C","H","H","H","H","H","H"],bonds:[[0,1,2],[1,2,1],[2,3,2],[3,4,1],[4,5,2],[5,0,1],[0,6,1],[1,7,1],[2,8,1],[3,9,1],[4,10,1],[5,11,1]]},CH4O:{atoms:["C","O","H","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1],[1,5,1]]},C2H6O:{atoms:["C","C","O","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[0,3,1],[0,4,1],[0,5,1],[1,6,1],[1,7,1],[2,8,1]]},CH2O:{atoms:["C","O","H","H"],bonds:[[0,1,2],[0,2,1],[0,3,1]]},C2H4O:{atoms:["C","C","O","H","H","H","H"],bonds:[[0,1,1],[1,2,2],[0,3,1],[0,4,1],[0,5,1],[1,6,1]]},C3H6O:{atoms:["C","C","C","O","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[1,3,2],[0,4,1],[0,5,1],[0,6,1],[2,7,1],[2,8,1],[2,9,1]]},CH2O2:{atoms:["C","O","O","H","H"],bonds:[[0,1,2],[0,2,1],[0,3,1],[2,4,1]]},C2H4O2:{atoms:["C","C","O","O","H","H","H","H"],bonds:[[0,1,1],[1,2,2],[1,3,1],[0,4,1],[0,5,1],[0,6,1],[3,7,1]]},C3H6O2:{atoms:["C","C","O","O","C","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,2],[1,3,1],[3,4,1],[0,5,1],[0,6,1],[0,7,1],[4,8,1],[4,9,1],[4,10,1]]},C4H8O2:{atoms:["C","C","O","O","C","C","H","H","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,2],[1,3,1],[3,4,1],[4,5,1],[0,6,1],[0,7,1],[0,8,1],[4,9,1],[4,10,1],[5,11,1],[5,12,1],[5,13,1]]},CH5N:{atoms:["C","N","H","H","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1],[1,5,1],[1,6,1]]},C2H7N:{atoms:["C","C","N","H","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[0,3,1],[0,4,1],[0,5,1],[1,6,1],[1,7,1],[2,8,1],[2,9,1]]},CH3Cl:{atoms:["C","Cl","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]]},CH2Cl2:{atoms:["C","Cl","Cl","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]]},CHCl3:{atoms:["C","Cl","Cl","Cl","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]]},CCl4:{atoms:["C","Cl","Cl","Cl","Cl"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]]},C2H5Cl:{atoms:["C","C","Cl","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[0,3,1],[0,4,1],[0,5,1],[1,6,1],[1,7,1]]},HBr:{atoms:["H","Br"],bonds:[[0,1,1]]},HI:{atoms:["H","I"],bonds:[[0,1,1]]},HF:{atoms:["H","F"],bonds:[[0,1,1]]},Br2:{atoms:["Br","Br"],bonds:[[0,1,1]]},F2:{atoms:["F","F"],bonds:[[0,1,1]]},I2:{atoms:["I","I"],bonds:[[0,1,1]]},Na2O:{atoms:["Na","Na","O"],bonds:[[0,2,1,!0],[1,2,1,!0]]},K2O:{atoms:["K","K","O"],bonds:[[0,2,1,!0],[1,2,1,!0]]},N2:{atoms:["N","N"],bonds:[[0,1,3]]},C2H5NO2:{atoms:["C","C","N","O","O","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[0,3,2],[1,4,1],[0,5,1],[1,6,1],[2,7,1],[2,8,1],[4,9,1]]},C3H7NO2:{atoms:["C","C","C","N","O","O","H","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[2,3,1],[1,4,2],[2,5,1],[0,6,1],[0,7,1],[1,8,1],[2,9,1],[3,10,1],[3,11,1],[5,12,1]]},C5H11NO2:{atoms:["C","C","C","C","C","N","O","O","H","H","H","H","H","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[2,3,1],[3,4,1],[4,5,1],[3,6,2],[4,7,1],[0,8,1],[0,9,1],[1,10,1],[2,11,1],[3,12,1],[4,13,1],[5,14,1],[5,15,1],[6,16,1],[7,17,1],[5,18,1]]},C3H7NO3:{atoms:["C","C","C","N","O","O","O","H","H","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[2,3,1],[1,4,2],[2,5,1],[2,6,1],[0,7,1],[0,8,1],[1,9,1],[2,10,1],[3,11,1],[3,12,1],[4,13,1],[6,14,1]]},CH4N2O:{atoms:["C","O","N","N","H","H","H","H"],bonds:[[0,1,2],[0,2,1],[0,3,1],[2,4,1],[2,5,1],[3,6,1],[3,7,1]]},CuH12N4:{atoms:["Cu","N","N","N","N","H","H","H","H","H","H","H","H","H","H","H","H"],bonds:[[0,1,1,!0],[0,2,1,!0],[0,3,1,!0],[0,4,1,!0],[1,5,1],[1,6,1],[1,7,1],[2,8,1],[2,9,1],[2,10,1],[3,11,1],[3,12,1],[3,13,1],[4,14,1],[4,15,1],[4,16,1]],charge:2},AgH6N2:{atoms:["Ag","N","N","H","H","H","H","H","H"],bonds:[[0,1,1,!0],[0,2,1,!0],[1,3,1],[1,4,1],[1,5,1],[2,6,1],[2,7,1],[2,8,1]],charge:1},Fe2O3:{atoms:["Fe","Fe","O","O","O"],bonds:[[0,2,2,!0],[0,3,2,!0],[1,3,2,!0],[1,4,2,!0],[0,4,2,!0],[1,2,2,!0]]},NO2:{atoms:["N","O","O"],bonds:[[0,1,2],[0,2,1]]},NaNO3:{atoms:["Na","N","O","O","O"],bonds:[[0,1,1,!0],[1,2,1,!0],[1,3,1,!0],[2,3,2],[2,4,1],[3,4,1]]},KNO3:{atoms:["K","N","O","O","O"],bonds:[[0,1,1,!0],[1,2,1,!0],[1,3,1,!0],[2,3,2],[2,4,1],[3,4,1]]},CaSO4:{atoms:["Ca","S","O","O","O","O"],bonds:[[0,1,1,!0],[0,2,1,!0],[1,2,2],[1,3,2],[1,4,1,!0],[1,5,1,!0],[2,4,1],[3,5,1]]},ZnSO4:{atoms:["Zn","S","O","O","O","O"],bonds:[[0,1,1,!0],[0,2,1,!0],[1,2,2],[1,3,2],[1,4,1,!0],[1,5,1,!0],[2,4,1],[3,5,1]]},AgNO3:{atoms:["Ag","N","O","O","O"],bonds:[[0,1,1,!0],[1,2,1,!0],[1,3,1,!0],[2,3,2],[2,4,1],[3,4,1]]},CuSO4:{atoms:["Cu","S","O","O","O","O"],bonds:[[0,1,1,!0],[0,2,1,!0],[1,2,2],[1,3,2],[1,4,1,!0],[1,5,1,!0],[2,4,1],[3,5,1]]},CuNO32:{atoms:["Cu","N","N","O","O","O","O","O","O"],bonds:[[0,1,1,!0],[0,2,1,!0],[1,3,1,!0],[1,4,1,!0],[2,5,1,!0],[2,6,1,!0],[3,4,2],[3,7,1],[4,7,1],[5,6,2],[5,8,1],[6,8,1]]}},vo={};function Ko(n,t,e,i){vo[n]||(vo[n]=[]),vo[n].push({key:t,tpl:e,displayFormula:Fv(e.atoms),displayName:i||t.split("_").pop()}),Yt[t]=e}function Fv(n){const t=new Map;for(const s of n)t.set(s,(t.get(s)||0)+1);let e="";const i=new Set;for(const s of n){if(i.has(s))continue;i.add(s);const r=t.get(s);e+=s+(r>1?r:"")}return e}Ko("C2H6O","C2H6O_ethanol",{atoms:["C","C","O","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[0,3,1],[0,4,1],[0,5,1],[1,6,1],[1,7,1],[2,8,1]]},"Ethanol");Ko("C2H6O","C2H6O_ether",{atoms:["C","O","C","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[0,3,1],[0,4,1],[0,5,1],[2,6,1],[2,7,1],[2,8,1]]},"Dimethyl ether");Ko("C3H6O","C3H6O_acetone",{atoms:["C","C","C","O","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[1,3,2],[0,4,1],[0,5,1],[0,6,1],[2,7,1],[2,8,1],[2,9,1]]},"Acetone");Ko("C3H6O","C3H6O_propanal",{atoms:["C","C","C","O","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[2,3,2],[0,4,1],[0,5,1],[0,6,1],[1,7,1],[1,8,1],[2,9,1]]},"Propanal");const _h=new Map;function Hd(n){const t=_h.get(n);if(t)return t;const e=vo[n]||[],i=Gv(n,new Set(e.map(r=>r.displayFormula))),s=e.concat(i);return i.truncated&&(s.truncated=!0),_h.set(n,s),s}const Hv=200,Bv=12e3,kv=5e3;function zv(n){let t=1,e=0;for(const i of n){for(let s=1;s<=i;s++)t=t*(e+s)/s;e+=i}return Math.round(t)}function Vv(n,t){const e=n.length,i=Array.from({length:e},()=>[]);for(const[r,o,a]of t)i[r].push([o,a]),i[o].push([r,a]);let s=n.map((r,o)=>`${r}:${i[o].length}:${i[o].map(a=>a[1]).sort((a,c)=>a-c).join(",")}`);for(let r=0;r<6;r++){const o=s.map((a,c)=>a+"#"+i[c].map(([l,u])=>u+":"+s[l]).sort().join(";"));if(o.join()===s.join())break;s=o}return s.slice().sort().join("|")}function Gv(n,t){const e=ce(n),i=[],s=[];for(const[_,m]of e)ne(_)&&(i.push(_),s.push(m));const r=s.reduce((_,m)=>_+m,0);if(r===0)return[];const o=[],a=new Set;let c=0,l=!1;function u(_,m){const d=Bd(_);if(t&&t.has(d))return!0;const C=Vv(_,m)+"|"+d;return a.has(C)?!0:(a.add(C),o.push({atoms:[..._],bonds:m,text:d}),o.length>=Hv?(l=!0,!1):!0)}function h(_){if(c>=Bv)return l=!0,!1;c++;const m=yh(_,"chain");let d=!1;if(m&&Va(_,m)){if(!u(_,m))return!1;d=!0}const b=yh(_,"tree");if(b&&Va(_,b)){if(!u(_,b))return!1;d=!0}if(!d){const C=Xv(_);if(C&&Va(_,C)&&!u(_,C))return!1}return!0}const f=new Array(r);function p(_,m){if(_===r)return h(f);for(let d=0;d<m.length;d++){const b=m[d];if(!s[b])continue;s[b]--,f[_]=i[b];const C=p(_+1,m);if(s[b]++,!C)return!1}return!0}if(zv(s)<=kv)p(0,i.map((_,m)=>m));else{const _=[];for(let A=0;A<i.length;A++)i[A]!=="H"&&_.push(A);const m=[];for(const A of _)for(let y=0;y<s[A];y++)m.push(i[A]);m.sort();const d=m.length,b=new Array(d),C=new Array(r),M=new Set,R=[];for(let A=0;A<i.length;A++)for(let y=0;y<s[A];y++)R.push(i[A]);h(R)||(l=!0);let v=l;const x=new Array(d).fill(!1);(function A(y){if(v)return;if(y===d){const w=b.join("\0");if(M.has(w))return;M.add(w);for(let O=0;O<d;O++)C[O]=b[O];for(let O=d;O<r;O++)C[O]="H";h(C)||(v=!0);return}let E=null;for(let w=0;w<d;w++)x[w]||m[w]===E||(E=m[w],x[w]=!0,b[y]=m[w],A(y+1),x[w]=!1)})(0)}const g=o.map((_,m)=>{const d=Wv(_.atoms,_.bonds,n);return{key:`${n}_${d.replace(/\s+/g,"_").toLowerCase()}_${m}`,tpl:{atoms:_.atoms,bonds:_.bonds},displayFormula:_.text,displayName:d}});return g.truncated=l,g}function Wv(n,t,e){try{const i=new Map;n.forEach((o,a)=>{const c=ne(o);c&&i.set(a,{id:a,el:c})});const s=new Map;t.forEach((o,a)=>{s.set(a,{id:a,a:o[0],b:o[1],order:o[2]||1,ionic:!1})});const r=Dd(n.map((o,a)=>i.get(a)),[...s.values()],e,0,new Map);if(r)return r}catch{}return Bd(n)}function Bd(n){const t=new Map;for(const s of n)t.set(s,(t.get(s)||0)+1);let e="";const i=new Set;for(const s of n){if(i.has(s))continue;i.add(s);const r=t.get(s);e+=s+(r>1?r:"")}return e}function yh(n,t="chain"){const e=n.length,i=n.map(v=>ne(v));if(i.some(v=>!v))return null;if(e===2&&n[0]==="H"&&n[1]==="H")return[[0,1,1]];const s=v=>{const x=i[v];return x.cat==="Noble gas"&&x.sym!=="Xe"&&x.sym!=="Kr"?0:n[v]==="C"?4:n[v]==="N"?Math.min(x.maxBonds,3):n[v]==="O"?2:x.maxBonds??2},r=new Array(e).fill(0),o=new Map,a=[],c=v=>s(v)-r[v],l=(v,x)=>v<x?v*e+x:x*e+v,u=v=>n[v]!=="H"&&s(v)>0;function h(v,x,A){if(v===x||A<=0||c(v)<A||c(x)<A)return!1;const y=l(v,x);return(o.get(y)||0)+A>3?!1:(o.set(y,(o.get(y)||0)+A),a.push([Math.min(v,x),Math.max(v,x),A]),r[v]+=A,r[x]+=A,!0)}function f(v){const x=Math.floor(v/e),A=v%e,y=o.get(v)||0;if(y===0||y>=3||c(x)<=0||c(A)<=0)return!1;o.set(v,y+1),r[x]++,r[A]++;const E=a.find(w=>l(w[0],w[1])===v);return E&&E[2]++,!0}const p=()=>{let v=0;for(let x=0;x<e;x++)n[x]==="H"&&c(x)>0&&v++;return v},g=()=>{let v=0;for(let x=0;x<e;x++)u(x)&&(v+=c(x));return v-p()};if(t==="chain")for(let v=0;v+1<e;v++)u(v)&&u(v+1)&&h(v,v+1,1);else{let v=!0;for(let x=0;x<e;x++){if(!u(x))continue;if(v){v=!1;continue}let A=-1,y=-1;for(let E=0;E<x;E++)!u(E)||c(E)<=0||s(E)>y&&(A=E,y=s(E));A!==-1&&h(A,x,1)}}const _=Array.from({length:e},(v,x)=>x),m=v=>{for(;_[v]!==v;)_[v]=_[_[v]],v=_[v];return v};for(const v of o.keys()){const x=m(Math.floor(v/e)),A=m(v%e);x!==A&&(_[x]=A)}const d=()=>{const v=new Map;for(let x=0;x<e;x++)u(x)&&v.set(m(x),!0);return v};let b=d();for(;b.size>1;){let v=null;for(let x=0;x<e;x++)if(!(!u(x)||c(x)<=0))for(let A=x+1;A<e;A++){if(!u(A)||c(A)<=0||m(x)===m(A))continue;const y=A-x;(!v||y<v.dist)&&(v={i:x,j:A,dist:y})}if(!v||!h(v.i,v.j,1))break;_[m(v.i)]=m(v.j),b=d()}let C=0;for(;g()>0&&C++<4*e;){let v=!1;for(const x of[...o.keys()]){if(g()<=0)break;f(x)&&(v=!0)}for(let x=0;x<e&&g()>0;x++)if(!(!u(x)||c(x)<=0)){for(let A=1;A<e&&g()>0&&c(x)>0;A++)for(const y of[(x+A)%e,(x-A+e)%e])if(!(!u(y)||c(y)<=0||(o.get(l(x,y))||0)>0)&&h(x,y,1)){v=!0;break}}if(!v)break}const M=[];for(let v=0;v<e;v++)n[v]==="H"&&c(v)>0&&M.push(v);let R=!0;for(;R&&M.length;){R=!1;for(let v=0;v<e&&M.length;v++){if(!u(v)||c(v)<=0)continue;const x=M.findIndex(A=>c(A)>0);if(x===-1)break;h(M[x],v,1)&&(M.splice(x,1),R=!0)}}return a.length>0?a:null}function Xv(n){const t=n.length,e=[],i=new Array(t).fill(0);for(let s=0;s<t-1;s++){const r=xh(n[s],n[s+1],i[s],i[s+1]);r>0&&(e.push([s,s+1,r]),i[s]+=r,i[s+1]+=r)}for(let s=0;s<t;s++){const r=ne(n[s]);if(!r)continue;const o=n[s]==="C"?4:r.maxBonds;if(i[s]<o){for(let c=s+2;c<t;c++)if(i[c]<ne(n[c])?.maxBonds){const l=xh(n[s],n[c],i[s],i[c]);if(l>0&&(e.push([s,c,l]),i[s]+=l,i[c]+=l,i[s]>=o))break}}}return e.length>0?e:null}function xh(n,t,e,i){const s=ne(n),r=ne(t);if(!s||!r||s.cat==="Noble gas"&&s.sym!=="Xe"&&s.sym!=="Kr"||r.cat==="Noble gas"&&r.sym!=="Xe"&&r.sym!=="Kr")return 0;const o=(f,p)=>f==="C"?4:f==="N"?Math.min(p.maxBonds,3):f==="O"?2:p.maxBonds,a=o(n,s),c=o(t,r),l=a-e,u=c-i;if(l<=0||u<=0)return 0;if(n==="H"||t==="H")return 1;const h=Math.min(l,u,3);return h>0?h:0}function Va(n,t){const e=new Map;for(let i=0;i<n.length;i++)e.set(i,0);for(const[i,s,r]of t)e.set(i,e.get(i)+r),e.set(s,e.get(s)+r);for(let i=0;i<n.length;i++){const s=ne(n[i]);if(!s)return!1;const r=e.get(i);if(n[i]==="H"&&r!==1||r>s.maxBonds||n[i]==="C"&&r!==4)return!1}return qv(n.length,t)}function qv(n,t){if(n===0)return!0;const e=Array.from({length:n},(o,a)=>a);function i(o){for(;e[o]!==o;)e[o]=e[e[o]],o=e[o];return o}function s(o,a){const c=i(o),l=i(a);c!==l&&(e[c]=l)}for(const[o,a]of t)s(o,a);const r=i(0);for(let o=1;o<n;o++)if(i(o)!==r)return!1;return!0}const kd=[{key:"rt",label:"Room temp"},{key:"heat",label:"Heat"},{key:"spark",label:"Spark"},{key:"electricity",label:"Electricity"},{key:"catalyst",label:"Catalyst"},{key:"uv",label:"UV light"}];Object.fromEntries(kd.map(n=>[n.key,n.label]));function xc(n){const t=Ln(n);return t.key==="acid"||t.key==="carboxylicAcid"}function $v(n){return Ln(n).key==="base"}function vc(n){return ce(n).get("H")||0}function Yv(n){const t=n.match(/\(OH\)(\d+)$/);if(t)return parseInt(t[1]);if(/OH$/.test(n))return 1;const e=n.match(/^([A-Z][a-z]?)H(\d*)O(\d*)$/);if(e){const i=e[2]?parseInt(e[2]):1,s=e[3]?parseInt(e[3]):1;if(i===s&&i>0)return i}return 0}function Kv(n){const t=n.match(/^([A-Z][a-z]?)\(OH\)(\d+)$/);if(t)return{sym:t[1],charge:parseInt(t[2])};const e=n.match(/^([A-Z][a-z]?)OH$/);if(e)return{sym:e[1],charge:1};const i=n.match(/^([A-Z][a-z]?)H(\d*)O(\d*)$/);if(i){const s=i[2]?parseInt(i[2]):1,r=i[3]?parseInt(i[3]):1;if(s===r&&s>0)return{sym:i[1],charge:s}}return null}function Mc(n){const t=ce(n),e=t.get("H")||0;if(e===0)return null;const i=new Map(t);i.delete("H");const s=[...i.entries()];if(s.length===0)return null;if(s.length===1){const[c,l]=s[0];return{sym:l===1?c:`${c}${l}`,charge:-e}}const r=s.find(([c])=>c!=="O");if(!r)return null;const o=i.get("O")||0;return o===0?{sym:s.sort(([u],[h])=>u.localeCompare(h)).map(([u,h])=>h===1?u:`${u}${h}`).join(""),charge:-e}:{sym:o>1?`${r[0]}O${o}`:o===1?`${r[0]}O`:r[0],charge:-e}}function Rr(n,t){const e=Math.abs(n.charge),i=Math.abs(t.charge),s=e*i/He(e,i),r=s/e,o=s/i,a=[];for(let f=0;f<r;f++)a.push(n.sym);const c=Xd(t.sym);for(let f=0;f<o;f++)for(const p of c)a.push(p);const l=[],u=[];for(let f=0;f<r;f++)u.push(f);const h=r;for(let f=0;f<o;f++){const p=h+f*c.length,g=Zv(c,p);for(const _ of u)l.push([_,g,1,!0])}for(let f=0;f<o;f++){const p=h+f*c.length,g=Jv(t.sym,p);l.push(...g)}return{atoms:a,bonds:l}}function He(n,t){return t===0?n:He(t,n%t)}function zd(n){const t=[],e=[];for(let s=0;s<n;s++)t.push("C");for(let s=0;s<n-1;s++)e.push([s,s+1,1]);let i=t.length;for(let s=0;s<n;s++){const r=n===1?4:s===0||s===n-1?3:2;for(let o=0;o<r;o++)t.push("H"),e.push([s,i++,1])}return{atoms:t,bonds:e}}function Vd(n){if(n<2)return zd(1);const t=[],e=[];for(let s=0;s<n;s++)t.push("C");e.push([0,1,2]);for(let s=1;s<n-1;s++)e.push([s,s+1,1]);let i=t.length;for(let s=0;s<n;s++){let r;s===0?r=2:s===1?r=n===2?2:1:s===n-1?r=3:r=2;for(let o=0;o<r;o++)t.push("H"),e.push([s,i++,1])}return{atoms:t,bonds:e}}function Gd(n){const t=[],e=[];for(let o=0;o<n;o++)t.push("C");const i=t.length;t.push("O");for(let o=0;o<n-1;o++)e.push([o,o+1,1]);e.push([n-1,i,1]);const s=t.length;t.push("H"),e.push([i,s,1]);let r=s+1;for(let o=0;o<n;o++){let a;n===1?a=3:o===n-1?a=2:o===0?a=3:a=2;for(let c=0;c<a;c++)t.push("H"),e.push([o,r++,1])}return{atoms:t,bonds:e}}function jv(n,t){const e=n-1,i=t,s=[],r=[];for(let h=0;h<e;h++)s.push("C");const o=s.length;s.push("C");const a=s.length;s.push("O");const c=s.length;s.push("O");const l=s.length;for(let h=0;h<i;h++)s.push("C");if(e>0){for(let h=0;h<e-1;h++)r.push([h,h+1,1]);r.push([e-1,o,1])}r.push([o,a,2]),r.push([o,c,1]),r.push([c,l,1]);for(let h=0;h<i-1;h++)r.push([l+h,l+h+1,1]);let u=s.length;for(let h=0;h<e;h++){const f=e===1||h===0?3:2;for(let p=0;p<f;p++)s.push("H"),r.push([h,u++,1])}for(let h=0;h<i;h++){const f=i===1?3:h===0?2:h===i-1?3:2;for(let p=0;p<f;p++)s.push("H"),r.push([l+h,u++,1])}return{atoms:s,bonds:r}}function Wd(n,t){const e=[],i=[];for(let o=0;o<n;o++)e.push("C");for(let o=0;o<n-1;o++)i.push([o,o+1,1]);const s=e.length;e.push(t),i.push([n-1,s,1]);let r=e.length;for(let o=0;o<n;o++){let a;n===1?a=3:o===n-1?a=2:o===0?a=3:a=2;for(let c=0;c<a;c++)e.push("H"),i.push([o,r++,1])}return{atoms:e,bonds:i}}function ji(n,t,e,i){let s="";return n===1?s+="C":s+=`C${n}`,t===1?s+="H":t>0&&(s+=`H${t}`),e&&e>0&&(e===1?s+="O":s+=`O${e}`),s}function Xd(n){const t=ce(n),e=[];for(const[i,s]of t)for(let r=0;r<s;r++)e.push(i);return e}function Zv(n,t){for(let e=0;e<n.length;e++)if(n[e]!=="O")return t+e;return t}function Jv(n,t){const e=Xd(n);if(e.length<=1)return[];const i=[];let s=0;for(let r=0;r<e.length;r++)if(e[r]!=="O"){s=r;break}for(let r=0;r<e.length;r++)r!==s&&i.push([t+s,t+r,1]);return i}function qd(n){const t=n.filter(v=>xc(v)),e=n.filter(v=>$v(v));if(t.length===0||e.length===0)return null;const i=t[0],s=e[0],r=vc(i),o=Yv(s);if(r===0||o===0)return null;const a=Kv(s),c=Mc(i);if(!a||!c)return null;const l=o,u=r,h=He(l,u),f=l/h,p=u/h,g=r*o/h,_=Rr(a,c),m=Pr(a,c),d=m;Yt[d]=_;const b=f===1?i:`${f}${i}`,C=p===1?s:`${p}${s}`,M=g===1?"H2O":`${g}H2O`,R=`${b} + ${C} -> ${m} + ${M}`;return{reactants:{[i]:f,[s]:p},condition:"rt",products:[[d,1],["H2O",g]],equation:R,dynamic:!0}}function Pr(n,t){const e=Math.abs(n.charge),i=Math.abs(t.charge),s=e*i/He(e,i),r=s/e,o=s/i,c=ce(t.sym).size>1;let l=n.sym;return r>1&&(l+=r),o>1&&c?l+=`(${t.sym})${o}`:(l+=t.sym,o>1&&(l+=o)),l}function ce(n){const t=new Map,e=[t],i=/([A-Z][a-z]?)(\d*)|(\()|(\))(\d*)/g;let s;for(;(s=i.exec(n))!==null;)if(s[1]){const r=s[2]?parseInt(s[2]):1,o=e[e.length-1];o.set(s[1],(o.get(s[1])||0)+r)}else if(s[3]){const r=new Map;e.push(r)}else if(s[4]){const r=e.pop(),o=s[5]?parseInt(s[5]):1,a=e[e.length-1];for(const[c,l]of r)a.set(c,(a.get(c)||0)+l*o)}return t}function Qv(n){if(n==="O2"||n==="H2")return!1;const t=Ln(n);if(["alkane","alkene","alkyne","organic"].includes(t.key))return!0;const e=ce(n);return e.has("C")&&e.has("H")}function ql(n){const t=_n(n),e=[...t.keys()].filter(b=>Qv(b));if(e.length===0||!t.has("O2")||t.size!==2)return null;const i=e[0],s=ce(i),r=s.get("C")||0,o=s.get("H")||0,a=s.get("O")||0;let c=4,l=4*r+o-2*a,u=4*r,h=2*o;if(l<=0)return null;const f=He(He(c,l),He(u,h));c/=f,l/=f,u/=f,h/=f;const p={[i]:c,O2:l},g=c===1?i:`${c}${i}`,_=l===1?"O2":`${l}O2`,m=u===1?"CO2":`${u}CO2`,d=h===1?"H2O":`${h}H2O`;return{reactants:p,condition:"spark",products:[["CO2",u],["H2O",h]],equation:`${g} + ${_} -> ${m} + ${d}`,dynamic:!0}}function tM(n){const t=ne(n);return t&&pe(t)}function eM(n){const t=ne(n);return!t||!t.charges||t.charges.length===0?null:t.charges[0]}function $d(n){const t=_n(n);if(t.size!==2)return null;const e=[...t.keys()].filter(O=>tM(O)),i=[...t.keys()].filter(O=>xc(O));if(e.length===0||i.length===0)return null;const s=e[0],r=i[0],o=eM(s),a=Mc(r);if(!o||!a)return null;const c={sym:s,charge:o},l=Pr(c,a),u=Rr(c,a);Yt[l]=u;const h=Math.abs(a.charge),f=He(o,h),p=h/f,g=o/f,_=vc(r);if(_===0)return null;let m=p,d=g,b=1,C=d*_,M=2;const R=He(C,M);let v=C/R;const x=M/R;x!==1&&(m*=x,d*=x,b*=x);const A=m===1?s:`${m}${s}`,y=d===1?r:`${d}${r}`,E=b===1?l:`${b}${l}`,w=v===1?"H2":`${v}H2`;return{reactants:{[s]:m,[r]:d},condition:"rt",products:[[l,b],["H2",v]],equation:`${A} + ${y} -> ${E} + ${w}`,dynamic:!0}}function Yd(n){const t=_n(n);if(t.size!==2||!t.has("H2O"))return null;const e=[...t.keys()].find(m=>m!=="H2O");if(!e)return null;const i=ne(e);if(!i||!pe(i)||!i.charges||i.charges.length===0)return null;const s=i.charges[0],r=i.cat==="alkali",o=i.cat==="alkaline";if(!r&&!o)return null;const a={sym:e,charge:s},c=nM(a),l=iM(a);Yt[c]=l;let u,h,f,p;s===1?(u=2,h=2,f=2,p=1):(u=1,h=2,f=1,p=1);const g=u===1?e:`${u}${e}`,_=f===1?c:`${f}${c}`;return{reactants:{[e]:u,H2O:h},condition:"rt",products:[[c,f],["H2",p]],equation:`${g} + ${h}H2O -> ${_} + ${p===1?"H2":p+"H2"}`,dynamic:!0}}function nM(n){const t=n.charge;return t===1?`${n.sym}OH`:`${n.sym}(OH)${t}`}function iM(n){const t=n.charge,e=[n.sym];for(let s=0;s<t;s++)e.push("O","H");const i=[];for(let s=0;s<t;s++){const r=1+s*2,o=2+s*2;i.push([0,r,1,!0]),i.push([r,o,1])}return{atoms:e,bonds:i}}function vh(n){const t=ce(n),e=t.get("C")||0,i=t.get("O")||0;if(e===0||i!==e*3)return null;const s=[...t.keys()].filter(u=>{if(u==="C"||u==="O")return!1;const h=ne(u);return h&&pe(h)});if(s.length!==1)return null;const r=s[0],o=t.get(r)||1,a=ne(r);if(!a||!a.charges||a.charges.length===0)return null;const c=e*2,l=Math.round(c/o);return a.charges.includes(l)?{sym:r,charge:l}:null}function Kd(n){const t=_n(n);if(t.size!==2)return null;const e=[...t.keys()].filter(w=>vh(w)),i=[...t.keys()].filter(w=>xc(w));if(e.length===0||i.length===0)return null;const s=e[0],r=i[0],o=vh(s),a=Mc(r);if(!o||!a)return null;const c=Pr(o,a),l=Rr(o,a);Yt[c]=l;const u=vc(r);if(u===0)return null;const h=He(2,u),f=u/h,p=2/h,g=f,_=p*u/2,d=ce(s).get(o.sym)||1,b=f*d,M=ce(c).get(o.sym)||1,R=b/M,v=f===1?s:`${f}${s}`,x=p===1?r:`${p}${r}`,A=R===1?c:`${R}${c}`,y=g===1?"CO2":`${g}CO2`,E=_===1?"H2O":`${_}H2O`;return{reactants:{[s]:f,[r]:p},condition:"rt",products:[[c,R],["CO2",g],["H2O",_]],equation:`${v} + ${x} -> ${A} + ${y} + ${E}`,dynamic:!0}}const Po={Fr:1,Cs:2,Rb:3,K:4,Na:5,Li:6,Ba:7,Sr:8,Ca:9,Mg:10,Al:11,Mn:12,Zn:13,Cr:14,Fe:15,Cd:16,Co:17,Ni:18,Sn:19,Pb:20,Cu:21,Ag:22,Hg:23,Pt:24,Au:25};function sM(n){if(Ln(n).key!=="basicOxide")return null;const e=ce(n),i=[...e.keys()],s=i.filter(c=>{const l=ne(c);return l&&pe(l)});if(s.length!==1||i.length!==2||!e.has("O"))return null;const r=s[0],o=e.get(r),a=e.get("O");return a*2%o!==0?null:{metalSym:r,oCount:a,oxidationState:a*2/o}}function jd(n,t){return t===2?`${n}O`:t%2===0?`${n}O${t/2}`:`${n}2O${t}`}function rM(n,t){const e=jd(n,t),i=ce(e),s=[];for(const[c,l]of i)for(let u=0;u<l;u++)s.push(c);const r=[],o=[],a=[];for(let c=0;c<s.length;c++)s[c]==="O"?a.push(c):o.push(c);for(const c of o)for(const l of a)r.push([c,l,2,!0]);return{atoms:s,bonds:r}}function Zd(n){return{atoms:[n],bonds:[]}}function Jd(n){const t=_n(n);if(t.size!==2)return null;const e=[...t.keys()];let i=null,s=null,r=null;for(const G of e){const B=sM(G);if(B)i=G,s=B;else{const Y=ne(G);Y&&pe(Y)&&Y.charges&&Y.charges.length>0&&(r=G)}}if(!i||!s||!r)return null;const o=Po[r],a=Po[s.metalSym];if(o==null||a==null||o>=a)return null;const c=ne(r).charges[0],l=s.oxidationState,h=ce(i).get(s.metalSym)||1,f=He(c,l),p=c*l/f;let g=p/l,_=p*h/c;const m=jd(r,c),b=ce(m).get("O")||1,C=g*s.oCount/b,M=g*(ce(i).get(s.metalSym)||1),R=[g,_,C,M];let v=R[0];for(let G=1;G<4;G++)v=He(v,R[G]);const[x,A,y,E]=R.map(G=>G/v);Yt[m]||(Yt[m]=rM(r,c)),Yt[s.metalSym]||(Yt[s.metalSym]=Zd(s.metalSym));const w=x===1?i:`${x}${i}`,O=A===1?r:`${A}${r}`,H=y===1?m:`${y}${m}`,k=E===1?s.metalSym:`${E}${s.metalSym}`;return{reactants:{[i]:x,[r]:A},condition:"heat",products:[[m,y],[s.metalSym,E]],equation:`${w} + ${O} -> ${H} + ${k}`,dynamic:!0}}function oM(n,t,e){const i=ne(t);if(!i||!i.charges||i.charges.length===0)return null;const r=i.charges[0]*e,o=[...n.keys()].filter(l=>{if(l===t)return!1;const u=ne(l);return u&&!pe(u)}),a=n.has("O"),c=o.filter(l=>l!=="O");if(c.length===1&&a){const l=c[0],u=n.get(l)||1,h=n.get("O")||0,f=h===0?l:h===1?`${l}O`:`${l}O${h}`,p=-Math.round(r/u);return{sym:f,count:u,chargePerUnit:p}}if(c.length===1&&!a){const l=c[0],u=n.get(l)||1,h=-Math.round(r/u);return{sym:l,count:u,chargePerUnit:h}}if(c.length===0&&a){const l=n.get("O")||1,u=-Math.round(r/l);return{sym:"O",count:l,chargePerUnit:u}}return null}function Qd(n){const t=_n(n);if(t.size!==2)return null;const e=[...t.keys()];let i=null,s=null;for(const B of e){const Y=ne(B);Y&&pe(Y)&&Y.charges&&Y.charges.length>0?i=B:s=B}if(!i||!s)return null;const r=ce(s),a=[...r.keys()].filter(B=>{const Y=ne(B);return Y&&pe(Y)});if(a.length!==1)return null;const c=a[0],l=Po[i],u=Po[c];if(l==null||u==null||l>=u)return null;const h=ne(i).charges[0],f=ne(c).charges[0],p=r.get(c),g=oM(r,c,p);if(!g)return null;const _=Pr({sym:i,charge:h},{sym:g.sym,charge:g.chargePerUnit}),m=Rr({sym:i,charge:h},{sym:g.sym,charge:g.chargePerUnit});Yt[_]||(Yt[_]=m),Yt[c]||(Yt[c]=Zd(c));const b=ce(_).get(i)||1;let C=1,M=b,R=M*h/(p*f),v=R*p;const x=He(He(M,R),He(C,v)),[A,y,E,w]=[M,R,C,v].map(B=>B/x),O=A===1?i:`${A}${i}`,H=y===1?s:`${y}${s}`,k=E===1?_:`${E}${_}`,G=w===1?c:`${w}${c}`;return{reactants:{[i]:A,[s]:y},condition:"rt",products:[[_,E],[c,w]],equation:`${O} + ${H} -> ${k} + ${G}`,dynamic:!0}}function tf(n){const t=_n(n);if(t.size!==2)return null;const e=[...t.keys()];let i=null,s=null;for(const C of e){const M=ne(C);M&&pe(M)&&M.charges&&M.charges.length>0?i=C:(C==="Cl2"||C==="Br2"||C==="F2"||C==="I2")&&(s=C)}if(!i||!s)return null;const r=ne(i).charges[0],o=s.replace("2",""),a=Pr({sym:i,charge:r},{sym:o,charge:-1}),c=Rr({sym:i,charge:r},{sym:o,charge:-1});Yt[a]||(Yt[a]=c);const l=ce(a),u=l.get(i)||1,h=l.get(o)||1;let f=u,p=h/2,g=1;p!==Math.floor(p)&&(f*=2,p*=2,g*=2);const _=He(He(f,p),g);f/=_,p/=_,g/=_;const m=f===1?i:`${f}${i}`,d=p===1?s:`${p}${s}`,b=g===1?a:`${g}${a}`;return{reactants:{[i]:f,[s]:p},condition:"heat",products:[[a,g]],equation:`${m} + ${d} -> ${b}`,dynamic:!0}}function aM(n){const t=_n(n);if(t.size!==1)return null;const i=[...t.keys()][0],s=t.get(i);if(s<2)return null;const r=ne(i);if(!r||!pe(r)||!new Set(["Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg"]).has(i))return null;const a=`${i}2`,c={atoms:[i,i],bonds:[[0,1,4]]};Yt[a]||(Yt[a]=c);const l=Math.floor(s/2);if(l<1)return null;const u=s===2?i:`${s}${i}`,h=l===1?a:`${l}${a}`;return{reactants:{[i]:s},condition:"heat",products:[[a,l]],equation:`${u} -> ${h}`,dynamic:!0}}function lM(n){const t=_n(n);if(t.size!==1)return null;const i=[...t.keys()][0],s=i.match(/^([A-Z][a-z]?)2$/);if(!s)return null;const r=s[1],o=ne(r);if(!o||!pe(o)||!new Set(["Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg"]).has(r))return null;const c=t.get(i),l=c*2,u=l===1?r:`${l}${r}`,h=c===1?i:`${c}${i}`;return{reactants:{[i]:c},condition:"heat",products:[[r,l]],equation:`${h} -> ${u}`,dynamic:!0}}function Mh(n){return Ln(n).key==="alkane"}function Bs(n){return Ln(n).key==="alkene"}function Sh(n){return Ln(n).key==="alkyne"}function $l(n){return Ln(n).key==="alcohol"}function bh(n){return Ln(n).key==="carboxylicAcid"}function ef(n){if(n.length!==2)return null;const[t,e]=n;let i=null,s=null;if(bh(t)&&$l(e)?(i=t,s=e):bh(e)&&$l(t)&&(i=e,s=t),!i||!s)return null;const r=ce(i),o=ce(s),a=r.get("C"),c=o.get("C"),l=a+c,u=2*l,h=ji(l,u,2);Yt[h]||(Yt[h]=jv(a,c));const f=i,p=s,g=h;return{reactants:{[i]:1,[s]:1},condition:"catalyst",products:[[g,1],["H2O",1]],equation:`${f} + ${p} -> ${g} + H2O`,dynamic:!0}}function nf(n){if(n.length!==2)return null;const[t,e]=n;let i=null;if(t==="H2"&&(Bs(e)||Sh(e))?i=e:e==="H2"&&(Bs(t)||Sh(t))&&(i=t),!i)return null;const s=ce(i),r=s.get("C"),o=s.get("H");if(o===2*r){const a=ji(r,2*r+2,0);return Yt[a]||(Yt[a]=zd(r)),{reactants:{[i]:1,H2:1},condition:"catalyst",products:[[a,1]],equation:`${i} + H2 -> ${a}`,dynamic:!0}}if(o===2*r-2){const a=ji(r,2*r,0);return Yt[a]||(Yt[a]=Vd(r)),{reactants:{[i]:1,H2:1},condition:"catalyst",products:[[a,1]],equation:`${i} + H2 -> ${a}`,dynamic:!0}}return null}function sf(n){if(n.length!==2)return null;const[t,e]=n;let i=null,s=null;const r={Cl2:"Cl",Br2:"Br",F2:"F",I2:"I"};if(Mh(t)&&r[e]?(i=t,s=r[e]):Mh(e)&&r[t]&&(i=e,s=r[t]),!i||!s)return null;const a=ce(i).get("C"),c=rf(a,s),l=`H${s}`;Yt[c]||(Yt[c]=Wd(a,s));const u=Object.keys(r).find(h=>r[h]===s);return{reactants:{[i]:1,[u]:1},condition:"uv",products:[[c,1],[l,1]],equation:`${i} + ${u} -> ${c} + ${l}`,dynamic:!0}}function rf(n,t){const e=2*n+2-1;let i="";return n===1?i+="C":i+=`C${n}`,e===1?i+="H":i+=`H${e}`,i+=t,i}function Eh(n){const t=ce(n);if(!t.has("C")||!t.has("H")||!t.has("O")||t.size!==3)return!1;const e=t.get("C"),i=t.get("H");return t.get("O")===2&&i===2*e}function of(n){if(n.length!==1)return null;const t=n[0];if(!$l(t))return null;const i=ce(t).get("C");if(i<2)return null;const s=ji(i,2*i,0);return Yt[s]||(Yt[s]=Vd(i)),{reactants:{[t]:1},condition:"heat",products:[[s,1],["H2O",1]],equation:`${t} -> ${s} + H2O`,dynamic:!0}}function af(n){if(n.length!==2)return null;const[t,e]=n;let i=null,s=null,r=null;const o={HCl:"Cl",HBr:"Br",HF:"F",HI:"I"};if(Bs(t)&&o[e]?(i=t,s=e,r=o[e]):Bs(e)&&o[t]&&(i=e,s=t,r=o[t]),!i||!r)return null;const c=ce(i).get("C"),l=rf(c,r);return Yt[l]||(Yt[l]=Wd(c,r)),{reactants:{[i]:1,[s]:1},condition:"rt",products:[[l,1]],equation:`${i} + ${s} -> ${l}`,dynamic:!0}}function lf(n){if(n.length!==2)return null;const[t,e]=n;let i=null;if(t==="H2O"&&Bs(e)?i=e:e==="H2O"&&Bs(t)&&(i=t),!i)return null;const r=ce(i).get("C"),o=ji(r,2*r+2,1);return Yt[o]||(Yt[o]=Gd(r)),{reactants:{[i]:1,H2O:1},condition:"catalyst",products:[[o,1]],equation:`${i} + H2O -> ${o}`,dynamic:!0}}function cf(n){if(n.length!==2)return null;const[t,e]=n;let i=null;if(t==="H2O"&&Eh(e)?i=e:e==="H2O"&&Eh(t)&&(i=t),!i)return null;const r=ce(i).get("C");for(let o=1;o<r;o++){const a=r-o,c=ji(o,2*o,2),l=ji(a,2*a+2,1);return Yt[c]||(Yt[c]=cM(o)),Yt[l]||(Yt[l]=Gd(a)),{reactants:{[i]:1,H2O:1},condition:"catalyst",products:[[c,1],[l,1]],equation:`${i} + H2O -> ${c} + ${l}`,dynamic:!0}}return null}function cM(n){const t=[];for(let r=0;r<n;r++)t.push("C");t.push("O"),t.push("O");const e=2*n-1;for(let r=0;r<e;r++)t.push("H");const i=[];for(let r=0;r<n-1;r++)i.push([r,r+1,1]);i.push([n-1,n,2]),i.push([n-1,n+1,1]);let s=n+2;for(let r=0;r<n-1;r++)for(let o=0;o<2&&s<t.length;o++)i.push([r,s++,1]);return s<t.length&&i.push([n+1,s++,1]),{atoms:t,bonds:i}}const Sc=[{reactants:{H2:2,O2:1},condition:"spark",products:[["H2O",2]],equation:"2H2 + O2 -> 2H2O"},{reactants:{H2:1,Cl2:1},condition:"spark",products:[["HCl",2]],equation:"H2 + Cl2 -> 2HCl"},{reactants:{N2:1,H2:3},condition:"catalyst",products:[["NH3",2]],equation:"N2 + 3H2 -> 2NH3"},{reactants:{Mg:2,O2:1},condition:"heat",products:[["MgO",2]],equation:"2Mg + O2 -> 2MgO"},{reactants:{Na:2,Cl2:1},condition:"spark",products:[["NaCl",2]],equation:"2Na + Cl2 -> 2NaCl"},{reactants:{CaO:1,H2O:1},condition:"rt",products:[["CaOH2",1]],equation:"CaO + H2O -> Ca(OH)2"},{reactants:{CaO:1,CO2:1},condition:"rt",products:[["CaCO3",1]],equation:"CaO + CO2 -> CaCO3"},{reactants:{CaCO3:1},condition:"heat",products:[["CaO",1],["CO2",1]],equation:"CaCO3 -> CaO + CO2"},{reactants:{CaOH2:1,CO2:1},condition:"rt",products:[["CaCO3",1],["H2O",1]],equation:"Ca(OH)2 + CO2 -> CaCO3 + H2O"},{reactants:{HCl:1,NaOH:1},condition:"rt",products:[["NaCl",1],["H2O",1]],equation:"HCl + NaOH -> NaCl + H2O"},{reactants:{H2O2:2},condition:"catalyst",products:[["H2O",2],["O2",1]],equation:"2H2O2 -> 2H2O + O2"},{reactants:{CH4:1,O2:2},condition:"spark",products:[["CO2",1],["H2O",2]],equation:"CH4 + 2O2 -> CO2 + 2H2O"},{reactants:{C:1,O2:1},condition:"heat",products:[["CO2",1]],equation:"C + O2 -> CO2"},{reactants:{N2:1,O2:1},condition:"spark",products:[["NO",2]],equation:"N2 + O2 -> 2NO"},{reactants:{SO2:2,O2:1},condition:"catalyst",products:[["SO3",2]],equation:"2SO2 + O2 -> 2SO3"},{reactants:{SO3:1,H2O:1},condition:"rt",products:[["H2SO4",1]],equation:"SO3 + H2O -> H2SO4"},{reactants:{H2O:2},condition:"electricity",products:[["H2",2],["O2",1]],equation:"2H2O -> 2H2 + O2"},{reactants:{NH3:1,HCl:1},condition:"rt",products:[["NH4",1],["ClI",1]],equation:"NH3 + HCl -> NH4+ + Cl-"},{reactants:{Na:2,H2O:2},condition:"rt",products:[["NaOH",2],["H2",1]],equation:"2Na + 2H2O -> 2NaOH + H2"},{reactants:{K:2,H2O:2},condition:"rt",products:[["KOH",2],["H2",1]],equation:"2K + 2H2O -> 2KOH + H2"},{reactants:{Al:2,Cl2:3},condition:"heat",products:[["AlCl3",2]],equation:"2Al + 3Cl2 -> 2AlCl3"},{reactants:{Mg:1,HCl:2},condition:"rt",products:[["MgCl2",1],["H2",1]],equation:"Mg + 2HCl -> MgCl2 + H2"},{reactants:{O2:3},condition:"uv",products:[["O3",2]],equation:"3O2 -> 2O3"},{reactants:{MnO2:1,HCl:4},condition:"heat",products:[["MnCl2",1],["Cl2",1],["H2O",2]],equation:"MnO2 + 4HCl -> MnCl2 + Cl2 + 2H2O"},{reactants:{HCl:1,KOH:1},condition:"rt",products:[["KCl",1],["H2O",1]],equation:"HCl + KOH -> KCl + H2O"},{reactants:{H2SO4:1,NaOH:2},condition:"rt",products:[["Na2SO4",1],["H2O",2]],equation:"H2SO4 + 2NaOH -> Na2SO4 + 2H2O"},{reactants:{H2SO4:1,KOH:2},condition:"rt",products:[["K2SO4",1],["H2O",2]],equation:"H2SO4 + 2KOH -> K2SO4 + 2H2O"},{reactants:{HCl:2,CaOH2:1},condition:"rt",products:[["CaCl2",1],["H2O",2]],equation:"2HCl + Ca(OH)2 -> CaCl2 + 2H2O"},{reactants:{NH3:4,O2:5},condition:"catalyst",products:[["NO",4],["H2O",6]],equation:"4NH3 + 5O2 -> 4NO + 6H2O"},{reactants:{NO:2,O2:1},condition:"rt",products:[["NO2",2]],equation:"2NO + O2 -> 2NO2"},{reactants:{NO2:3,H2O:1},condition:"rt",products:[["HNO3",2],["NO",1]],equation:"3NO2 + H2O -> 2HNO3 + NO"},{reactants:{Fe:2,O2:3},condition:"heat",products:[["Fe2O3",1]],equation:"2Fe + 3O2 -> Fe2O3"},{reactants:{Cu:1,AgNO3:2},condition:"rt",products:[["CuNO32",1],["Ag",2]],equation:"Cu + 2AgNO3 -> Cu(NO3)2 + 2Ag"},{reactants:{Zn:1,CuSO4:1},condition:"rt",products:[["ZnSO4",1],["Cu",1]],equation:"Zn + CuSO4 -> ZnSO4 + Cu"},{reactants:{HNO3:1,NaOH:1},condition:"rt",products:[["NaNO3",1],["H2O",1]],equation:"HNO3 + NaOH -> NaNO3 + H2O"},{reactants:{HNO3:1,KOH:1},condition:"rt",products:[["KNO3",1],["H2O",1]],equation:"HNO3 + KOH -> KNO3 + H2O"},{reactants:{H2SO4:1,CaOH2:1},condition:"rt",products:[["CaSO4",1],["H2O",2]],equation:"H2SO4 + Ca(OH)2 -> CaSO4 + 2H2O"},{reactants:{C2H6:2,O2:7},condition:"spark",products:[["CO2",4],["H2O",6]],equation:"2C2H6 + 7O2 -> 4CO2 + 6H2O"},{reactants:{C3H8:1,O2:5},condition:"spark",products:[["CO2",3],["H2O",4]],equation:"C3H8 + 5O2 -> 3CO2 + 4H2O"},{reactants:{C2H4:1,O2:3},condition:"spark",products:[["CO2",2],["H2O",2]],equation:"C2H4 + 3O2 -> 2CO2 + 2H2O"},{reactants:{NaCl:2},condition:"electricity",products:[["Na",2],["Cl2",1]],equation:"2NaCl -> 2Na + Cl2"},{reactants:{Al2O3:2},condition:"electricity",products:[["Al",4],["O2",3]],equation:"2Al2O3 -> 4Al + 3O2"},{reactants:{KCl:2},condition:"electricity",products:[["K",2],["Cl2",1]],equation:"2KCl -> 2K + Cl2"},{reactants:{CaCl2:1},condition:"electricity",products:[["Ca",1],["Cl2",1]],equation:"CaCl2 -> Ca + Cl2"},{reactants:{MgCl2:1},condition:"electricity",products:[["Mg",1],["Cl2",1]],equation:"MgCl2 -> Mg + Cl2"}];function _n(n){const t=new Map;for(const e of n)t.set(e,(t.get(e)||0)+1);return t}function dn(n){return[...ce(n).entries()].sort(([e],[i])=>e.localeCompare(i)).map(([e,i])=>`${e}${i}`).join("")}function Ga(n,t){const e=Object.entries(n.reactants);if(e.length!==t.size)return!1;const i=new Map;for(const[s,r]of t){const o=dn(s);i.set(o,(i.get(o)||0)+r)}for(const[s,r]of e){const o=dn(s);if(i.get(o)!==r)return!1}return!0}function bc(n,t){const e=_n(n);for(const r of Sc)if(r.condition===t&&Ga(r,e))return r;for(const r of Ud)if(r.condition===t&&Ga(r,e))return r;const s={rt:[qd,$d,Yd,Kd,Qd,af],spark:[ql],heat:[ql,Jd,tf,aM,lM,of],catalyst:[ef,nf,lf,cf],uv:[sf]}[t]||[];for(const r of s){const o=r([...e.keys()]);if(o&&Ga(o,e))return o}return null}function uf(n){const t=_n(n),e=new Set;for(const s of Sc){let r=!0;for(const[o,a]of t){const c=dn(o);let l=0;for(const[u,h]of Object.entries(s.reactants))dn(u)===c&&(l=h);if(l<a){r=!1;break}}r&&e.add(s.condition)}for(const s of Ud){let r=!0;for(const[o,a]of t){const c=dn(o);let l=0;for(const[u,h]of Object.entries(s.reactants))dn(u)===c&&(l=h);if(l<a){r=!1;break}}r&&e.add(s.condition)}const i=[{fn:qd,cond:"rt"},{fn:$d,cond:"rt"},{fn:Yd,cond:"rt"},{fn:Kd,cond:"rt"},{fn:ql,cond:"spark"},{fn:Jd,cond:"heat"},{fn:Qd,cond:"rt"},{fn:tf,cond:"heat"},{fn:ef,cond:"catalyst"},{fn:nf,cond:"catalyst"},{fn:sf,cond:"uv"},{fn:of,cond:"heat"},{fn:af,cond:"rt"},{fn:lf,cond:"catalyst"},{fn:cf,cond:"catalyst"}];for(const{fn:s,cond:r}of i){const o=s([...t.keys()]);if(o){let a=!0;for(const[c,l]of t){const u=dn(c);let h=0;for(const[f,p]of Object.entries(o.reactants))dn(f)===u&&(h=p);if(h<l){a=!1;break}}a&&e.add(r)}}return e}function uM(n,t){const e=_n(n),i=[];for(const s of Sc){if(s.condition!==t)continue;let r=!0;for(const[a,c]of e){const l=dn(a);let u=0;for(const[h,f]of Object.entries(s.reactants))dn(h)===l&&(u=f);if(u<c){r=!1;break}}if(!r)continue;const o=[];for(const[a,c]of Object.entries(s.reactants)){const l=dn(a);let u=0;for(const[f,p]of e)dn(f)===l&&(u=p);const h=c-u;h>0&&o.push(h===1?a:`${h}${a}`)}o.length&&i.push(o.join(" + "))}return i.length?[...new Set(i)].join(" or "):null}function uo(n,t){return Yt[n]}const hf="mol3d.tutorial-seen",df="mol3d.lang-selected";let te=null,An=0,bn=null;const hr=[{titleKey:"tut.welcome.title",bodyKey:"tut.welcome.body",icon:"🧪"},{titleKey:"tut.pool.title",bodyKey:"tut.pool.body",icon:"⚛️",highlight:'[data-tab="left"]',cardPos:"above"},{titleKey:"tut.bond.title",bodyKey:"tut.bond.body",icon:"🔗"},{titleKey:"tut.bondOrder.title",bodyKey:"tut.bondOrder.body",icon:"🔄"},{titleKey:"tut.info.title",bodyKey:"tut.info.body",icon:"📋",highlight:'[data-tab="tab-info"]',cardPos:"above"},{titleKey:"tut.reaction.title",bodyKey:"tut.reaction.body",icon:"⚗️"},{titleKey:"tut.dex.title",bodyKey:"tut.dex.body",icon:"📖",highlight:'[data-tab="tab-dex"]',cardPos:"above"},{titleKey:"tut.camera.title",bodyKey:"tut.camera.body",icon:"🎥"},{titleKey:"tut.ready.title",bodyKey:"tut.ready.body",icon:"🚀"}];function hM(){try{return localStorage.getItem(hf)==="1"}catch{return!1}}function dM(){try{return localStorage.getItem(df)!==null}catch{return!1}}function fM(){try{localStorage.setItem(hf,"1")}catch{}}function pM(){try{localStorage.setItem(df,"1")}catch{}}function mM(n){const t=document.querySelector(n);if(!t)return null;const e=t.getBoundingClientRect();return{top:e.top,left:e.left,width:e.width,height:e.height}}function gM(n,t,e){const i=n.getBoundingClientRect(),s=24;let r,o;e==="right"?(r=t.top+(t.height-i.height)/2,o=t.left+t.width+s):e==="left"?(r=t.top+(t.height-i.height)/2,o=t.left-i.width-s):e==="above"?(r=t.top-i.height-s,o=t.left+(t.width-i.width)/2):(r=(window.innerHeight-i.height)/2,o=(window.innerWidth-i.width)/2),r=Math.max(16,Math.min(r,window.innerHeight-i.height-16)),o=Math.max(16,Math.min(o,window.innerWidth-i.width-16)),n.style.top=`${r}px`,n.style.left=`${o}px`}function _M(n,t,e){const i=n.getBoundingClientRect();let s,r,o,a;return t?(o=t.left+t.width/2,a=t.top+t.height/2,e==="above"?(s=i.left+i.width/2,r=i.top+i.height):e==="right"?(s=i.left,r=i.top+i.height/2):e==="left"?(s=i.left+i.width,r=i.top+i.height/2):(s=i.left+i.width/2,r=i.top+i.height),{cx:s,cy:r,sx:o,sy:a}):null}function yM(n,t,e){if(!bn)return;const i=_M(n,t,e);if(!i){bn.style.display="none";return}const{cx:s,cy:r,sx:o,sy:a}=i,c=40,l=Math.min(s,o)-c,u=Math.min(r,a)-c,h=Math.max(s,o)+c,f=Math.max(r,a)+c;bn.style.display="block",bn.style.left=`${l}px`,bn.style.top=`${u}px`,bn.style.width=`${h-l}px`,bn.style.height=`${f-u}px`,bn.setAttribute("viewBox",`0 0 ${h-l} ${f-u}`);const p=s-l,g=r-u,_=o-l,m=a-u;bn.innerHTML=`
    <line x1="${p}" y1="${g}" x2="${_}" y2="${m}"
      stroke="var(--accent)" stroke-width="2" stroke-dasharray="6 4" opacity="0.6" />
    <circle cx="${_}" cy="${m}" r="4" fill="var(--accent)" opacity="0.8" />
  `}function xM(n){const t=te.querySelector(".tut-spotlight");if(!n){t.style.display="none";return}t.style.display="block",t.style.top=`${n.top}px`,t.style.left=`${n.left}px`,t.style.width=`${n.width}px`,t.style.height=`${n.height}px`,te.style.setProperty("--spotlight-top",`${n.top}px`),te.style.setProperty("--spotlight-left",`${n.left}px`),te.style.setProperty("--spotlight-width",`${n.width}px`),te.style.setProperty("--spotlight-height",`${n.height}px`)}function vM(){let n='<div class="tut-timeline">';for(let t=0;t<hr.length;t++){const e=t<An?"done":t===An?"active":"";n+=`<div class="tut-tl-seg ${e}"><div class="tut-tl-fill"></div></div>`}return n+="</div>",n}function jo(){if(!te)return;const n=hr[An],t=te.querySelector(".tut-content"),e=te.querySelector(".tut-card");t.innerHTML=`
    <div class="tut-step-header">
      <div class="tut-icon-badge">${n.icon}</div>
      <div class="tut-step-text">
        <div class="tut-step-label">Step ${An+1} of ${hr.length}</div>
        <h2 class="tut-title">${Z(n.titleKey)}</h2>
      </div>
    </div>
    <p class="tut-body">${Z(n.bodyKey)}</p>
    ${vM()}
    <div class="tut-kbd-hint">
      <span>← →</span> navigate &nbsp;·&nbsp; <span>Esc</span> skip
    </div>
  `;const i=n.highlight?mM(n.highlight):null;xM(i),requestAnimationFrame(()=>{gM(e,i,n.cardPos),requestAnimationFrame(()=>{yM(e,i,n.cardPos)})});const s=te.querySelector(".tut-prev"),r=te.querySelector(".tut-next");s.disabled=An===0,r.textContent=An===hr.length-1?Z("tut.finish"):Z("tut.next"),e.classList.remove("tut-card-enter"),e.offsetWidth,e.classList.add("tut-card-enter")}function Ec(){te&&(te.remove(),te=null,bn=null,document.removeEventListener("keydown",ff),window.removeEventListener("resize",pf),fM())}function ff(n){te&&(n.key==="Escape"&&Ec(),(n.key==="ArrowRight"||n.key==="Enter")&&mf(),n.key==="ArrowLeft"&&gf())}function pf(){te&&jo()}function mf(){An<hr.length-1?(An++,jo()):Ec()}function gf(){An>0&&(An--,jo())}function MM(){te||(te=document.createElement("div"),te.className="lang-overlay",te.innerHTML=`
    <div class="lang-card">
      <h1 class="lang-title">${Z("lang.select.title")}</h1>
      <p class="lang-subtitle">${Z("lang.select.subtitle")}</p>
      <div class="lang-options">
        <button class="lang-btn" data-lang="en">
          <span class="lang-flag">🇺🇸</span>
          <span class="lang-name">${Z("lang.en")}</span>
        </button>
        <button class="lang-btn" data-lang="vi">
          <span class="lang-flag">🇻🇳</span>
          <span class="lang-name">${Z("lang.vi")}</span>
        </button>
      </div>
    </div>
  `,document.body.appendChild(te),te.querySelectorAll(".lang-btn").forEach(n=>{n.addEventListener("click",()=>{const t=n.dataset.lang;Id(t),pM(),te.remove(),te=null,setTimeout(Cc,300)})}))}function Cc(){te||(te=document.createElement("div"),te.className="tut-overlay",te.innerHTML=`
    <div class="tut-spotlight"></div>
    <svg class="tut-callout" style="display:none;"></svg>
    <div class="tut-card">
      <button class="tut-skip" aria-label="Skip tutorial">${Z("tut.skip")}</button>
      <div class="tut-content"></div>
      <div class="tut-nav">
        <button class="tut-prev">${Z("tut.prev")}</button>
        <button class="tut-next">${Z("tut.next")}</button>
      </div>
    </div>
  `,document.body.appendChild(te),bn=te.querySelector(".tut-callout"),te.querySelector(".tut-skip").addEventListener("click",Ec),te.querySelector(".tut-prev").addEventListener("click",gf),te.querySelector(".tut-next").addEventListener("click",mf),document.addEventListener("keydown",ff),window.addEventListener("resize",pf),An=0,jo())}function SM(){dM()?hM()||setTimeout(Cc,800):setTimeout(MM,500)}function ks(n){return ne(n)||Ov(n)||Ei.find(t=>t.sym===n)}const Yl=Lv.filter(n=>n&&typeof n.formula=="string"&&n.formula.trim()?!0:(console.warn("challenges.js: skipping malformed entry",n),!1));gv();const it=new Map,Tt=new Map,$t=new Map,Rn=new Map;let Ce=1,_e=null,Zi=null,Mo=!0,Es=!1;const Ei=[],Ji=new Set,dr=[];let mi=new Map;const Kl=new Map;let Ue=[],fe=[];const zs=new Map,oi=new Map;let Wt=null,Tc=null,Ac=!1,yi=null,_f="mouse";const Ge=new Set,Io=new Set,pn=[],jl=new Set;let wc=!1;const yf="mol3d.discoveries.v1",ti=document.getElementById("scene-wrap"),Ke=new Nx({antialias:!0,powerPreference:"low-power"});Ke.setPixelRatio(Math.min(1.5,window.devicePixelRatio||1));Ke.setSize(ti.clientWidth,ti.clientHeight);ti.appendChild(Ke.domElement);const me=new Um;me.background=new It(856343);me.fog=new fc(856343,34,80);const Re=new hn(50,ti.clientWidth/ti.clientHeight,.1,200);Re.position.set(0,4.2,10.5);me.add(new $m(16777215,3358799,1.05));const xf=new gd(16777215,1.5);xf.position.set(6,10,8);me.add(xf);const vf=new gd(8956671,.4);vf.position.set(-6,4,-6);me.add(vf);let ki=new _d(60,60,3159613,1909546);ki.position.y=-1.7;me.add(ki);Ke.domElement.addEventListener("pointerdown",a1);const yn=new Fx(Re,Ke.domElement);yn.enableDamping=!0;yn.dampingFactor=.08;yn.target.set(0,1.6,0);yn.minDistance=2.5;yn.maxDistance=45;yn.maxPolarAngle=Math.PI*.55;yn.addEventListener("change",je);const As=Uv({camera:Re,controls:yn});window.addEventListener("pointermove",l1);window.addEventListener("pointerup",u1);window.addEventListener("resize",()=>{Re.aspect=ti.clientWidth/ti.clientHeight,Re.updateProjectionMatrix(),Ke.setSize(ti.clientWidth,ti.clientHeight),je()});let Lo=new bi(1,16,12),br=new Wo(1,1,1,10,1,!0);const Rc=320,Oo=1280,bM=new si;new It(16777215);const EM=new It(10135475),CM=new It(15774761),Ch=new It(5809919),TM=new It(4176208),AM=new It(16273737),wM=new It(15774761),RM=[0],PM=[-.12,.12],IM=[-.18,0,.18],LM=[-.22,-.07,.07,.22],OM=new dd({color:16777215,shininess:70,specular:5592405}),DM=new dd({color:16777215,shininess:20,specular:1579032}),NM=new fd({color:16777215}),UM=new fd({color:16777215,transparent:!0,opacity:.9}),Nn=new Go(Lo,OM,Rc),Un=new Go(Lo,DM,Rc),En=new Go(br,NM,Oo),Cn=new Go(br,UM,Oo);for(const n of[Nn,Un,En,Cn])n.frustumCulled=!1,n.instanceMatrix.setUsage(am),me.add(n);const Mf=[],Sf=[],bf=[],Ef=[];Nn.userData.ids=Mf;Un.userData.ids=Sf;En.userData.ids=bf;Cn.userData.ids=Ef;const cr=new Map,So=new Map,sr=new le,cn=new L,Os=new L,Do=new L,ho=new L,Gi=new L,rr=new L,Wa=new L,Th=new L,fr=new si,pr=new L,Cf=new L(0,1,0),Ah=new It,Tf=new Wi({color:4176208,transparent:!0,opacity:.55}),Qn=new Ve(br,Tf);Qn.visible=!1;me.add(Qn);const Xa=["auto","low","med","high"];let Ir="auto",Vs=1;const Af=new Nv,wf=new Dv;let wh=0;const No=document.getElementById("fps-chip"),Zl=document.getElementById("btn-quality");function FM(){return Fd[es[Vs]]}function Rf(n){Vs=n;const t=Fd[es[n]];Ke.setPixelRatio(Math.min(t.pixelRatio,window.devicePixelRatio||1));const e=new bi(1,t.sphereSeg[0],t.sphereSeg[1]),i=new Wo(1,1,1,t.cylSeg,1,!0);for(const s of[Nn,Un])s.geometry=e;for(const s of[En,Cn,Qn])s.geometry=i;Lo.dispose(),br.dispose(),Lo=e,br=i,Zo(),je()}function Rh(){return Z(`quality.${es[Vs]}`)}function Uo(){return Ir==="auto"?`${Z("quality.autoShort")} (${Rh()})`:Rh()}function Zo(){Zl&&(Zl.textContent=Z("btn.quality",{mode:Uo()})),No&&(No.textContent=`-- fps · ${Uo()}`)}function Pf(n){Ir=n,wf.reset(),n!=="auto"&&Rf(es.indexOf(n)),Zo()}function HM(n){if(n-wh<500)return;wh=n;const t=Af.fps;if(Ir==="auto"){const e=wf.update(t,Vs);e!==Vs&&(Rf(e),Gt(Z("status.autoAdjusted",{tier:Z(`quality.${es[e]}`),fps:Math.round(t)})))}No&&(No.textContent=`${Math.round(t)} fps · ${Uo()}`)}const qa=new Map;function BM(n){if(qa.has(n))return qa.get(n);const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.font='bold 68px "Segoe UI", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle",e.lineWidth=10,e.lineJoin="round",e.strokeStyle="rgba(8,12,18,0.9)",e.strokeText(n,64,68),e.fillStyle="#f4f8ff",e.fillText(n,64,68);const i=new cd(t);return qa.set(n,i),i}const $a=new Map;function kM(n){if($a.has(n))return $a.get(n);const t=document.createElement("canvas");t.width=128,t.height=64;const e=t.getContext("2d");e.font='bold 46px "Segoe UI", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle";const i=n>0?`${n}+`:`${-n}−`;e.lineWidth=8,e.lineJoin="round",e.strokeStyle="rgba(8,12,18,0.95)",e.strokeText(i,64,34),e.fillStyle=n>0?"#7ee787":"#ff9d96",e.fillText(i,64,34);const s=new cd(t);return $a.set(n,s),s}function zM(){for(const[n,t]of it)if(!cr.has(n)){const i=.42+ri(t.el)*.55,s=new Su(new kl({map:BM(t.el.sym),transparent:!0,depthWrite:!1}));s.scale.set(i,i,1),cr.set(n,s),me.add(s);const r=new Su(new kl({transparent:!0,depthWrite:!1}));r.scale.set(.62,.31,1),r.visible=!1,So.set(n,r),me.add(r)}for(const[n,t]of cr)it.has(n)||(me.remove(t),t.material.dispose(),cr.delete(n));for(const[n,t]of So)it.has(n)||(me.remove(t),t.material.dispose(),So.delete(n))}const VM=n=>1+2.70158*Math.pow(n-1,3)+1.70158*Math.pow(n-1,2);function GM(n,t){const e=zs.get(n);if(e===void 0)return 1;const i=(t-e)/380;return i>=1?(zs.delete(n),1):Math.max(.001,VM(Math.max(0,i)))}function WM(n,t){const e=it.get(n);t.set(e.el.color),Io.has(n)&&t.lerp(wM,.5),n===Tc?t.lerp(Ac?TM:AM,.55):n===_e?t.lerp(Ch,.45):n===Zi&&t.lerp(Ch,.18)}function Jo(){const n=performance.now();let t=0,e=0;for(const[r,o]of it){const a=Cd(o.el.cat),c=a?Nn:Un,l=a?t++:e++;if(l>=Rc)continue;const u=ri(o.el)*GM(r,n);cn.set(o.pos.x,o.pos.y,o.pos.z),ho.setScalar(u),sr.compose(cn,bM,ho),c.setMatrixAt(l,sr),WM(r,Ah),c.setColorAt(l,Ah),(a?Mf:Sf)[l]=r}Nn.count=t,Un.count=e,Nn.instanceMatrix.needsUpdate=!0,Un.instanceMatrix.needsUpdate=!0,Nn.instanceColor&&(Nn.instanceColor.needsUpdate=!0),Un.instanceColor&&(Un.instanceColor.needsUpdate=!0),Nn.boundingSphere=null,Un.boundingSphere=null;let i=0,s=0;for(const r of Tt.values()){const o=it.get(r.a),a=it.get(r.b);if(!o||!a)continue;Os.set(o.pos.x,o.pos.y,o.pos.z),Do.set(a.pos.x,a.pos.y,a.pos.z),Gi.subVectors(Do,Os);const c=Gi.length()||1e-4;rr.copy(Gi).divideScalar(c),Wa.set(0,1,0),Math.abs(rr.y)>.9&&Wa.set(1,0,0),Th.crossVectors(rr,Wa).normalize();const l=r.order===1?RM:r.order===2?PM:r.order===3?IM:LM,u=r.ionic?.06:.075;fr.setFromUnitVectors(Cf,rr);for(let h=0;h<r.order;h++)if(cn.copy(Os).addScaledVector(rr,c/2).addScaledVector(Th,l[h]),ho.set(u,c,u),sr.compose(cn,fr,ho),r.ionic){if(s>=Oo)break;Cn.setMatrixAt(s,sr),Cn.setColorAt(s,CM),Ef[s]=r.id,s++}else{if(i>=Oo)break;En.setMatrixAt(i,sr),En.setColorAt(i,EM),bf[i]=r.id,i++}}En.count=i,Cn.count=s,En.instanceMatrix.needsUpdate=!0,Cn.instanceMatrix.needsUpdate=!0,En.instanceColor&&(En.instanceColor.needsUpdate=!0),Cn.instanceColor&&(Cn.instanceColor.needsUpdate=!0),En.boundingSphere=null,Cn.boundingSphere=null}function If(){Re.getWorldDirection(pr);for(const[n,t]of cr){const e=it.get(n);if(!e)continue;const i=ri(e.el);t.position.set(e.pos.x,e.pos.y,e.pos.z).addScaledVector(pr,-(i+.1))}for(const[n,t]of So){const e=it.get(n);if(!e)continue;const i=Kl.get(n),s=Mo&&i!==void 0;if(t.visible=s,!s)continue;t.userData.fc!==i&&(t.material.map=kM(i),t.material.needsUpdate=!0,t.userData.fc=i);const r=ri(e.el);t.position.set(e.pos.x,e.pos.y,e.pos.z).addScaledVector(pr,-(r+.48))}}function Se(n){return[...n.atoms].sort((t,e)=>t-e).join(",")}function Ae(n=new Set){fe=Yo(it,Tt);const t=new Set(fe.map(Se));for(const i of[...$t.keys()])t.has(i)||$t.delete(i);for(const i of[...Rn.keys()])t.has(i)||Rn.delete(i);for(const i of[...Ge])t.has(i)||Ge.delete(i);Dc(),Lr(),Ue=fe.map(i=>ov(it,Tt,i,$t.has(Se(i))?$t.get(Se(i)):null));for(let i=0;i<fe.length;i++){const s=Rn.get(Se(fe[i]));s&&(Ue[i].displayFormula=s)}const e=dv(it,Tt,fe,Ue,n);mi=new Map;for(const[i,s]of e)mi.set(i,{x:s.x,y:s.y,z:s.z});for(const i of it.keys())if(!mi.has(i)){const s=it.get(i).pos;mi.set(i,{x:s.x,y:s.y,z:s.z})}if(Wt){const i=it.get(Wt.id).pos;mi.set(Wt.id,{x:i.x,y:i.y,z:i.z})}for(const i of[...oi.keys()])t.has(i)||oi.delete(i);return XM(),qM(),Hc(),zc(),v1(),sp(),zM(),document.getElementById("hint").style.display=it.size?"none":"flex",je(),fe}function XM(){Kl.clear();for(const n of Ue)if(n.feasible)for(const[t,e]of n.per)e.fc!==0&&Kl.set(t,e.fc)}function Lf(n,t){return`${n}|${t}`}function Pc(n,t){if(!t.feasible)return null;try{return Dd(n.atoms.map(e=>it.get(e)),n.bonds,t.formula,t.charge,t.per)||null}catch{return null}}function qM(){for(let n=0;n<fe.length;n++){const t=fe[n],e=Ue[n];if(!e||!e.feasible||t.bonds.length===0||t.atoms.length<2)continue;const i=Lf(e.formula,e.charge);if(jl.has(i))continue;jl.add(i);const s=Pc(t,e);pn.push({formula:e.formula,charge:e.charge,name:s,t:Date.now(),saved:!1}),wc=!0,sa(Z("toast.newDisc",{f:Ki(e.formula)+Ar("",e.charge),name:s?` — ${s}`:""}))}Qo()}function $M(){try{const n=JSON.parse(localStorage.getItem(yf)||"[]");for(const t of n)!t||!t.formula||(t.saved=!0,pn.push(t),jl.add(Lf(t.formula,t.charge??0)))}catch{}}function Of(){if(pn.length)try{localStorage.setItem(yf,JSON.stringify(pn));for(const n of pn)n.saved=!0;wc=!1,Qo(),sa(Z("toast.saved",{n:pn.length,s:pn.length>1?"s":""}))}catch{Gt(Z("status.saveFail"),"err")}}function Qo(){const n=document.getElementById("disc-list"),t=document.getElementById("disc-count"),e=document.getElementById("btn-save-disc");if(n){if(t.textContent=pn.length?String(pn.length):"",!pn.length){n.textContent=Z("dex.discEmpty"),e.disabled=!0;return}n.textContent="";for(const i of pn){const s=document.createElement("div");s.className="disc-row";const r=document.createElement("span");r.className="d-f",r.textContent=Ki(i.formula)+Ar("",i.charge??0);const o=document.createElement("span");if(o.className="d-n",o.textContent=i.name||Z("dex.unknown"),o.title=i.name||"",s.append(r,o),!i.saved){const a=document.createElement("span");a.className="d-dot",a.title=Z("dex.notSaved"),s.appendChild(a)}n.appendChild(s)}e.disabled=!wc}}const ta=n=>({id:n.id,el:n.el,pos:{x:n.pos.x,y:n.pos.y,z:n.pos.z}});function ai(n){dr.push(n),dr.length>200&&dr.shift(),Gc()}function Df(n,t){const e=Ad(it,Tt,n,t);if(!e.ok)return Gt(wr(e.reason),"err"),!1;const i=Xi(it,Tt,n),s=Xi(it,Tt,t),r=i!==s,o=r?Se(i):null,a=r?Se(s):null,c=r?$t.get(o):void 0,l=r?$t.get(a):void 0;r&&($t.delete(o),$t.delete(a));const u=Ce++;Tt.set(u,{id:u,a:n,b:t,order:1,ionic:e.type==="ionic"}),r&&c!==void 0!=(l!==void 0)&&$t.set(Se(Xi(it,Tt,n)),c!==void 0?c:l),ai({type:"bond",bondId:u}),Ae();const h=it.get(n).el.sym,f=it.get(t).el.sym;return Gt(e.type==="ionic"?Z("status.ionicBond",{a:h,b:f}):Z("status.covBond",{a:h,b:f}),"ok"),!0}function Nf(n,t=!0){const e=Tt.get(n);if(!e)return;const i=Xi(it,Tt,e.a),s=Se(i),r=$t.get(s);if(Tt.delete(n),r!==void 0){const o=Yo(it,Tt).filter(c=>c.atoms.some(l=>i.atoms.includes(l))&&c.bonds.length>0),a=o.find(c=>c.atoms.includes(e.a))||o.find(c=>c.atoms.includes(e.b))||o[0];a&&$t.set(Se(a),r)}t&&ai({type:"delBond",snap:{...e}}),Ae()}function Ic(n,t=!0){const e=it.get(n);if(!e)return;const i=Xi(it,Tt,n),s=Se(i),r=$t.get(s),o=ii(it,Tt,n).map(a=>({...a}));for(const a of o)Tt.delete(a.id);if(it.delete(n),_e===n&&(_e=null,Wc()),Zi===n&&(Zi=null),r!==void 0){const a=Yo(it,Tt).filter(c=>c.atoms.some(l=>i.atoms.includes(l))&&c.bonds.length>0).sort((c,l)=>l.atoms.length-c.atoms.length);a[0]&&$t.set(Se(a[0]),r)}t&&ai({type:"delAtom",atom:ta(e),bonds:o}),Ae()}function Uf(n,t){const e=Tt.get(n);e&&(ai({type:"order",bondId:n,prev:e.order}),e.order=t,Ae(),Gt(e.ionic?Z("status.orderIonic",{n:t}):Z("status.orderCov",{n:t}),"ok"))}const Ya=new Map;function YM(n){const t=Tt.get(n);if(!t)return;let e=Ya.get(n)||1,i=t.order+e,s=0;const r=8;for(;s<r;){if(i>4){e=-1,i=3;continue}if(i<1){Nf(n),Ya.delete(n);return}const o={...t,order:i};if(_c(it,Tt,o).ok){Ya.set(n,e),Uf(n,i);return}i+=e,s++}Gt(wr({key:"chem.noValidBondOrder"}),"err")}function Ff(n){const t=Tt.get(n);if(!t)return;const e=_c(it,Tt,t);if(!e.ok){Gt(wr(e.reason),"err");return}Uf(n,t.order+1)}function Lc(n){const t=typeof n=="string"?ks(n):n;if(!t)return;let e=null;for(let s=0;s<60;s++){const r=Math.random()*Math.PI*2,o=1.2+Math.random()*3.4,a={x:Math.cos(r)*o,y:1.6+(Math.random()-.5)*2.6,z:Math.sin(r)*o};let c=!0;for(const[,l]of it)if(Math.hypot(l.pos.x-a.x,l.pos.y-a.y,l.pos.z-a.z)<ri(l.el)+ri(t)+.5){c=!1;break}if(c){e=a;break}}e||(e={x:Ce%7*1.5-4.5,y:6,z:0});const i=Ce++;return it.set(i,{id:i,el:t,pos:e}),zs.set(i,performance.now()),ai({type:"add",id:i}),qs(i),Ae(),Gt(Z("status.placed",{name:Hn(t)}),"info"),i}function Hf(){if(_e===null||!it.has(_e)){Gt(Z("status.noSelection"),"err");return}const n=fe.find(r=>r.atoms.includes(_e));if(!n)return;const t=new Map,e=[];n.atoms.reduce((r,o)=>r+it.get(o).pos.x,0)/n.atoms.length,n.atoms.reduce((r,o)=>r+it.get(o).pos.y,0)/n.atoms.length,n.atoms.reduce((r,o)=>r+it.get(o).pos.z,0)/n.atoms.length;for(const r of n.atoms){const o=it.get(r),a=Ce++;t.set(r,a),e.push({id:a,el:o.el,pos:{x:o.pos.x+2.5,y:o.pos.y,z:o.pos.z}})}ai({type:"duplicate",originalIds:[...n.atoms],newIds:[...t.values()]});for(const r of e)it.set(r.id,r),zs.set(r.id,performance.now());for(const r of n.bonds){const o=t.get(r.a),a=t.get(r.b);o!==void 0&&a!==void 0&&(Tt.set(Ce,{id:Ce,a:o,b:a,order:r.order,ionic:r.ionic}),Ce++)}const i=Se(n),s=[...t.values()].sort((r,o)=>r-o).join(",");$t.has(i)&&$t.set(s,$t.get(i)),qs([...t.values()][0]),Ae(),Gt(Z("status.duplicated"),"info")}function Bf(){if(!(!it.size&&!Tt.size&&!$t.size)){ai({type:"clear",atoms:[...it.values()].map(ta),bonds:[...Tt.values()].map(n=>({...n})),overrides:[...$t],nextId:Ce});for(const n of[...Tt.keys()])Tt.delete(n);for(const n of[...it.keys()])it.delete(n);it.clear(),Tt.clear(),$t.clear(),Rn.clear(),oi.clear(),_e=null,Zi=null,wn(),Ae(),Gt(Z("status.cleared"),"info")}}function Oc(){const n=dr.pop();if(Gc(),!n){Gt(Z("status.nothingUndo"));return}switch(n.type){case"add":Ic(n.id,!1);break;case"bond":Nf(n.bondId,!1);break;case"delBond":{const t=n.snap;Tt.set(t.id,{...t}),Ae();break}case"order":{const t=Tt.get(n.bondId);t&&(t.order=n.prev),Ae();break}case"delAtom":{const t=n.atom;it.set(t.id,t);for(const e of n.bonds)Tt.set(e.id,{...e});Ae();break}case"clear":{for(const t of n.atoms)it.set(t.id,t);for(const t of n.bonds)Tt.set(t.id,{...t});for(const[t,e]of n.overrides)$t.set(t,e);Ce=Math.max(Ce,n.nextId),Ae();break}case"duplicate":{for(const t of n.newIds)it.delete(t),zs.delete(t);for(const t of[...Tt.values()])(n.newIds.includes(t.a)||n.newIds.includes(t.b))&&Tt.delete(t.id);Ae();break}case"snapshot":{it.clear(),Tt.clear(),$t.clear(),Rn.clear(),oi.clear();for(const t of n.atoms)it.set(t.id,t);for(const t of n.bonds)Tt.set(t.id,{...t});for(const[t,e]of n.overrides)$t.set(t,e);for(const[t,e]of n.iso||[])Rn.set(t,e);Ce=Math.max(Ce,n.nextId),_e=null,Zi=null,wn(),Ae();break}}Gt(Z("status.undone"))}const Ss=.4,KM=10.5,jM=-.2,ZM=4.6;function Fo(){return new L(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize()}function kf(n){if(!FM().drift||Wt||fe.length===0)return!1;let t=!1;for(const e of fe){const i=Se(e);let s=oi.get(i);s||(s={v:Fo().multiplyScalar(Ss*(.7+Math.random()*.6)),axis:Fo(),rate:.08+Math.random()*.18},oi.set(i,s));const r=s.v.length()||1e-4;r>Ss*1.001?s.v.multiplyScalar(Math.max(Ss,r-n*2.2)/r):r<Ss*.999&&s.v.setLength(Math.min(Ss,r+n*.4));const o=new L;for(const c of e.atoms){const l=it.get(c).pos;o.x+=l.x,o.y+=l.y,o.z+=l.z}o.divideScalar(e.atoms.length),(Math.hypot(o.x,o.z)>KM||o.y<jM||o.y>ZM)&&(pr.set(-o.x,1.9-o.y,-o.z).normalize(),s.v.lerp(pr,Math.min(1,n*1.6)).setLength(Ss)),fr.setFromAxisAngle(s.axis,s.rate*n);for(const c of e.atoms){const l=it.get(c);cn.set(l.pos.x,l.pos.y,l.pos.z).sub(o).applyQuaternion(fr).add(o).addScaledVector(s.v,n),l.pos.x=cn.x,l.pos.y=cn.y,l.pos.z=cn.z;const u=mi.get(c);u&&(cn.set(u.x,u.y,u.z).sub(o).applyQuaternion(fr).add(o).addScaledVector(s.v,n),u.x=cn.x,u.y=cn.y,u.z=cn.z)}t=!0}return t}const Ka=document.getElementById("rxn-panel"),JM=document.getElementById("rxn-count"),Ph=document.getElementById("rxn-conds"),xi=n=>Z(`cond.${n}`);function Dc(){Io.clear();for(const n of fe)if(Ge.has(Se(n)))for(const t of n.atoms)Io.add(t)}function wn(){Ge.size&&(Ge.clear(),Io.clear(),Lr(),je())}function Lr(){if(Ka){if(Ge.size===0){Ka.style.display="none";return}Ka.style.display="flex",JM.textContent=Z("rxn.count",{n:Ge.size,s:Ge.size>1?"s":""})}}function zf(){const n=[];for(let t=0;t<fe.length;t++)if(Ge.has(Se(fe[t]))){const e=Ue[t];n.push(e?e.displayFormula||e.formula:"")}return n}function ea(n){const t="₀₁₂₃₄₅₆₇₈₉";return n.replace(/->/g,"→").replace(new RegExp("(?<=[A-Za-z)\\]])\\d+","g"),e=>[...e].map(i=>t[+i]).join(""))}function QM(){if(Ph){for(const n of kd){const t=document.createElement("button");t.textContent=xi(n.key),t.dataset.cond=n.key,t.addEventListener("click",()=>t1(n.key)),Ph.appendChild(t)}document.getElementById("rxn-cancel").addEventListener("click",()=>{wn(),Gt(Z("status.reactionCancelled"))})}}function t1(n){const t=zf(),e=bc(t,n);if(e){Gf(e);return}const i=uf(t);if(!i.size){Gt(Z("status.noReaction"),"err");return}if(i.has(n)){const s=uM(t,n);Gt(s?Z("status.notEnough",{more:ea(s),cond:xi(n).toLowerCase()}):Z("status.nothingHappens",{cond:xi(n)}),"err");return}Gt(Z("status.nothingHappensTry",{cond:xi(n),valid:[...i].map(s=>xi(s)).join(", ")}),"err")}let ja=null;function Vf(n){const t=document.getElementById("rxn-overlay"),e=t.querySelector(".rxn-condition"),i=t.querySelector(".rxn-equation");e.textContent=xi(n.condition),i.innerHTML=ea(n.equation),t.classList.add("show"),t.setAttribute("aria-hidden","false"),ja&&clearTimeout(ja),ja=setTimeout(()=>{t.classList.remove("show"),t.setAttribute("aria-hidden","true")},3e3)}function Gf(n){const t=fe.filter(h=>Ge.has(Se(h)));if(!t.length)return;const e=t.map(h=>{const f=Ue[fe.indexOf(h)];return f?f.displayFormula||f.formula:""});if(!bc(e,n.condition)){Gt(Z("status.sceneChanged"),"err"),wn();return}const i=[];for(const h of t)for(const f of h.atoms)i.push(f);const s=new Set(i),r=new L;for(const h of i){const f=it.get(h).pos;r.x+=f.x,r.y+=f.y,r.z+=f.z}r.divideScalar(i.length),ai({type:"snapshot",atoms:[...it.values()].map(ta),bonds:[...Tt.values()].map(h=>({...h})),overrides:[...$t],iso:[...Rn],nextId:Ce});for(const h of[...Tt.values()])(s.has(h.a)||s.has(h.b))&&Tt.delete(h.id);if(n.effect){e1(n,i,r);return}const o=[];for(const[h,f]of n.products)for(let p=0;p<f;p++)o.push(h);for(const h of o)if(!uo(h)){Gt(Z("status.reactionFailed",{product:h}),"err"),wn();return}const a=new Map;for(const h of i){const f=it.get(h).el.sym;a.has(f)||a.set(f,[]),a.get(f).push(h)}let c=0;for(let h=1;h<o.length;h++)uo(o[h]).atoms.length>uo(o[c]).atoms.length&&(c=h);const l=Math.PI*(3-Math.sqrt(5)),u=[];for(let h=0;h<o.length;h++){const f=uo(o[h]);let p=r;if(h!==c){const d=Math.random()*Math.PI*2,b=3.2+Math.random()*1.8+h*.9;p=new L(r.x+Math.cos(d)*b,Math.max(.8,Math.min(4.2,r.y+(Math.random()-.5)*1.6)),r.z+Math.sin(d)*b)}const g=[],_=f.atoms.length;for(let d=0;d<_;d++){const b=f.atoms[d];let C=a.get(b)?.pop();if(C===void 0){const x=ks(b);if(!x){Gt(Z("status.reactionFailed",{product:o[h]}),"err"),wn();return}C=Ce++,it.set(C,{id:C,el:x,pos:{x:p.x,y:p.y,z:p.z}})}const M=_===1?0:1-2*d/(_-1),R=Math.sqrt(Math.max(0,1-M*M)),v=l*d;it.get(C).pos={x:p.x+Math.cos(v)*R*.85,y:Math.max(-.4,Math.min(5.2,p.y+M*.85)),z:p.z+Math.sin(v)*R*.85},g.push(C)}for(const[d,b,C,M]of f.bonds)Tt.set(Ce,{id:Ce,a:g[d],b:g[b],order:C,ionic:!!M}),Ce++;const m=[...g].sort((d,b)=>d-b).join(",");f.charge&&$t.set(m,f.charge),u.push({key:m,center:p,i:h})}for(const[,h]of a)for(const f of h)it.delete(f);wn(),_e=null,Ae();for(const{key:h,center:f,i:p}of u){if(p===c){oi.delete(h);continue}const g=new L(f.x-r.x,f.y-r.y,f.z-r.z).normalize();oi.set(h,{v:g.multiplyScalar(2.6+Math.random()*1.4).add(new L(0,.7,0)),axis:Fo(),rate:.1+Math.random()*.2})}Gt(Z("status.reactionDone",{cond:xi(n.condition),eq:ea(n.equation)}),"ok"),Vf(n)}const qi=[];function e1(n,t,e){for(const a of t)it.delete(a);wn(),_e=null,Ae();const s={annihilate:16777215,explode:16729088,merge:16766720,quantum:61695,decay:65344,plasma:13387007}[n.effect]||16777215,r=n.effect==="explode"?60:n.effect==="plasma"?50:30;for(let a=0;a<r;a++){const c=new bi(.08+Math.random()*.12,6,4),l=new Wi({color:s,transparent:!0,opacity:1}),u=new Ve(c,l);u.position.copy(e);const h=Fo(),f=1.5+Math.random()*4;me.add(u),qi.push({mesh:u,geo:c,mat:l,v:h.multiplyScalar(f),life:1,decay:.4+Math.random()*.8})}if(n.effect==="explode"&&s1(.4,600),n.effect==="annihilate"&&Ih(16777215,500),n.effect==="plasma"&&Ih(8913151,300),n.effect==="merge"){const a=new bi(.5,16,12),c=new Wi({color:16766720,transparent:!0,opacity:.9}),l=new Ve(a,c);l.position.copy(e),me.add(l),qi.push({mesh:l,geo:a,mat:c,v:new L(0,0,0),life:1,decay:.3,grow:!0})}if(n.effect==="quantum")for(let a=0;a<8;a++){const c=new bi(.15,8,6),l=new Wi({color:61695,transparent:!0,opacity:.7}),u=new Ve(c,l),h=Math.random()*Math.PI*2,f=.5+Math.random()*1.5;u.position.set(e.x+Math.cos(h)*f,e.y+(Math.random()-.5)*2,e.z+Math.sin(h)*f),me.add(u),qi.push({mesh:u,geo:c,mat:l,v:new L(0,0,0),life:1,decay:.5+Math.random()*.5,flicker:!0})}const o={annihilate:"ANNIHILATION!",explode:"BOOM!",merge:"ULTIMATE ALLOY!",quantum:"SUPERPOSITION!",decay:"DECAY!",plasma:"PLASMA STORM!"};sa(o[n.effect]||n.effect),Gt(Z("status.mayhemEffect",{effect:o[n.effect],eq:ea(n.equation)}),"ok"),Vf(n)}function n1(n){for(let t=qi.length-1;t>=0;t--){const e=qi[t];if(e.life-=n*e.decay,e.life<=0){me.remove(e.mesh),e.geo.dispose(),e.mat.dispose(),qi.splice(t,1);continue}if(e.mesh.position.addScaledVector(e.v,n),e.v.multiplyScalar(1-n*2),e.mat.opacity=e.life,e.grow){const i=.5+(1-e.life)*3;e.mesh.scale.setScalar(i)}e.flicker&&(e.mesh.visible=Math.random()>.3,e.mesh.position.x+=(Math.random()-.5)*.1,e.mesh.position.y+=(Math.random()-.5)*.1,e.mesh.position.z+=(Math.random()-.5)*.1)}}let Wf=0,ws=0,Xf=0;const or=new L,i1=new L;function s1(n,t){Wf=n,ws=t,Xf=performance.now(),i1.copy(Re.position)}function r1(n){if(!ws)return;const t=n-Xf;if(t>ws){ws=0,Re.position.sub(or),or.set(0,0,0);return}const e=1-t/ws,i=Wf*e,s=(Math.random()-.5)*2*i,r=(Math.random()-.5)*2*i,o=(Math.random()-.5)*2*i;Re.position.sub(or),or.set(s,r,o),Re.position.add(or)}let ln=null;function Ih(n,t){ln&&(me.remove(ln),ln.geometry.dispose(),ln.material.dispose());const e=new bi(50,8,6),i=new Wi({color:n,transparent:!0,opacity:.6,side:Ye});ln=new Ve(e,i),ln.position.copy(Re.position),me.add(ln);const s=performance.now();function r(){const a=(performance.now()-s)/t;if(a>=1){me.remove(ln),ln.geometry.dispose(),ln.material.dispose(),ln=null;return}ln.material.opacity=.6*(1-a),requestAnimationFrame(r)}requestAnimationFrame(r)}const Ai=new Zm,Gs=new wt;function na(n){const t=Ke.domElement.getBoundingClientRect();Gs.x=(n.clientX-t.left)/t.width*2-1,Gs.y=-((n.clientY-t.top)/t.height)*2+1}function Nc(){Jo(),Ai.setFromCamera(Gs,Re);let n=null,t=1/0;for(const e of[Nn,Un])for(const i of Ai.intersectObject(e))i.instanceId!==void 0&&i.distance<t&&(t=i.distance,n=e.userData.ids[i.instanceId]);return n}function o1(){Jo(),Ai.setFromCamera(Gs,Re);let n=null,t=1/0;for(const e of[En,Cn])for(const i of Ai.intersectObject(e))i.instanceId!==void 0&&i.distance<t&&(t=i.distance,n=e.userData.ids[i.instanceId]);return n}function a1(n){if(_f=n.pointerType||"mouse",n.button!==0)return;na(n);const t=Nc();if(yi={x:n.clientX,y:n.clientY,atomId:t},t!==null){n.stopImmediatePropagation(),yn.enabled=!1,qs(t);const e=it.get(t),i=Re.getWorldDirection(new L).negate(),s=new Zn().setFromNormalAndCoplanarPoint(i,new L(e.pos.x,e.pos.y,e.pos.z));Ai.setFromCamera(Gs,Re);const r=new L,a=Ai.ray.intersectPlane(s,r)?r.sub(new L(e.pos.x,e.pos.y,e.pos.z)):new L;Wt={id:t,plane:s,grabOffset:a,moved:!1,snapId:null,snapLegal:!1,snapMsg:"",snapUpgrade:!1},je()}}function l1(n){if(na(n),Wt){if(!Wt.moved&&yi&&Math.hypot(n.clientX-yi.x,n.clientY-yi.y)>4&&(Wt.moved=!0),!Wt.moved)return;Ai.setFromCamera(Gs,Re);const e=new L;if(!Ai.ray.intersectPlane(Wt.plane,e))return;e.sub(Wt.grabOffset);const i=it.get(Wt.id);i.pos.x=e.x,i.pos.y=Math.max(-.4,Math.min(5.4,e.y)),i.pos.z=e.z,mi.set(Wt.id,{x:i.pos.x,y:i.pos.y,z:i.pos.z});let s=null,r=1/0;for(const[o,a]of it){if(o===Wt.id)continue;const c=Math.hypot(a.pos.x-i.pos.x,a.pos.y-i.pos.y,a.pos.z-i.pos.z),l=(ri(i.el)+ri(a.el))*1.45+.25;c<l&&c<r&&(r=c,s=o)}if(Wt.snapId=s,s===null)Wt.snapLegal=!1,Wt.snapMsg="",Wt.snapUpgrade=!1;else{const o=[...Tt.values()].find(a=>a.a===Wt.id&&a.b===s||a.b===Wt.id&&a.a===s);if(o){const a=_c(it,Tt,o);Wt.snapUpgrade=a.ok,Wt.snapLegal=a.ok,Wt.snapMsg=a.ok?Z("snap.upgradeTo",{n:o.order+1}):a.reason}else{const a=Ad(it,Tt,Wt.id,s);Wt.snapLegal=a.ok,Wt.snapMsg=a.ok?a.type==="ionic"?Z("snap.ionic"):Z("snap.bond"):a.reason}}Tc=Wt.snapId,Ac=Wt.snapLegal,Wt.snapMsg,c1(),je();return}if(n.target!==Ke.domElement)return;const t=Nc();t!==Zi&&(Zi=t,Ke.domElement.style.cursor=t!==null?"grab":"",je())}function c1(){if(!Wt||Wt.snapId===null){Qn.visible=!1;return}const n=it.get(Wt.id),t=it.get(Wt.snapId);Os.set(n.pos.x,n.pos.y,n.pos.z),Do.set(t.pos.x,t.pos.y,t.pos.z),Gi.subVectors(Do,Os);const e=Gi.length()||1e-4;Qn.position.copy(Os).addScaledVector(Gi,.5),Qn.quaternion.setFromUnitVectors(Cf,Gi.divideScalar(e)),Qn.scale.set(.16,e,.16),Tf.color.setHex(Ac?4176208:16273737),Qn.visible=!0}function u1(n){if(h1(n),Wt){yn.enabled=!0;const t=Wt;if(Wt=null,Tc=null,Qn.visible=!1,t.moved){if(t.snapId!==null){const e=[...Tt.values()].find(i=>i.a===t.id&&i.b===t.snapId||i.b===t.id&&i.a===t.snapId);e?t.snapUpgrade?Ff(e.id):Gt(wr(t.snapMsg),"err"):Df(t.id,t.snapId)}Ae(new Set([t.id]))}je();return}if(yi&&Math.hypot(n.clientX-yi.x,n.clientY-yi.y)<4&&yi.atomId===null){na(n);const t=o1();t!==null&&YM(t)}}let fo=0,Lh=0,Oh=0;function h1(n){if((n.pointerType||"mouse")!=="touch"||n.target!==Ke.domElement)return;const t=performance.now();fo&&t-fo<350&&Math.hypot(n.clientX-Lh,n.clientY-Oh)<32?(fo=0,qf(n)):(fo=t,Lh=n.clientX,Oh=n.clientY)}Ke.domElement.addEventListener("dblclick",n=>{_f!=="touch"&&qf(n)});function qf(n){na(n);const t=Nc();if(t===null){wn(),Gt(Z("status.selCleared"));return}const e=Xi(it,Tt,t),i=Se(e);Ge.has(i)?(Ge.delete(i),Gt(Z("status.selRemoved"))):(Ge.add(i),Gt(Z("status.selAdded",{n:Ge.size}),"info")),Dc(),Lr(),je()}function d1(){const n=document.getElementById("ptable");n.innerHTML="";for(let e=1;e<=118;e++){const i=$o.find(o=>o.z===e),s=Qx(e),r=document.createElement("button");r.className="el",r.style.gridColumn=s.col,r.style.gridRow=s.row,r.style.borderColor=i.color,r.dataset.sym=i.sym,r.title=Z("el.title",{name:Hn(i),cat:Sr(i.cat),max:i.maxBonds}),r.innerHTML=`<span class="z">${e}</span><span class="s">${i.sym}</span>`,r.addEventListener("click",()=>Lc(i)),n.appendChild(r)}const t=document.createElement("div");t.className="el ph",t.style.gridColumn="3 / 13",t.style.gridRow="8",t.textContent=Z("ptable.ph"),n.appendChild(t)}function $f(){const n=document.getElementById("legend");n.innerHTML="";for(const[t,e]of Object.entries(tv)){const i=document.createElement("span");i.className="lg",i.innerHTML=`<i style="background:${e}"></i>${Sr(t)}`,n.appendChild(i)}}const Dh=n=>n.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D");function Yf(){for(const n of document.querySelectorAll("#pool-list .el-chip")){const t=ks(n.dataset.sym);t&&(n.dataset.search=`${t.sym} ${t.name} ${t.z} ${Hn(t)} ${Dh(t.name)} ${Dh(Hn(t))}`.toLowerCase(),n.title=Z("el.title",{name:Hn(t),cat:Sr(t.cat),max:t.maxBonds}),n.querySelector(".n").textContent=Hn(t))}for(const n of document.querySelectorAll("#ptable .el[data-sym]")){const t=ks(n.dataset.sym);t&&(n.title=Z("el.title",{name:Hn(t),cat:Sr(t.cat),max:t.maxBonds}))}}function Ho(){d1();const n=document.getElementById("pool-list"),t=[...$o];Es&&t.push(...Nd),t.push(...Ei);for(const e of t){const i=document.createElement("button");i.className="el-chip",i.dataset.sym=e.sym,i.dataset.search=`${e.sym} ${e.name} ${e.z}`.toLowerCase(),i.title=`${e.name} · ${e.cat} · max bonds ${e.maxBonds}`;const s=document.createElement("i");s.style.background=e.color;const r=document.createElement("span");r.className="s",r.textContent=e.sym;const o=document.createElement("span");if(o.className="n",o.textContent=e.name,i.append(s,r,o),Ei.includes(e)){const c=document.createElement("span");c.className="el-delete",c.textContent="×",c.title="Delete custom element",c.addEventListener("click",l=>{l.stopPropagation(),S1(e.sym)}),i.appendChild(c),i.classList.add("custom-element")}i.addEventListener("click",()=>p1(e)),n.appendChild(i)}if(Yf(),!Ho._listenersAttached){Ho._listenersAttached=!0;const e=document.getElementById("pool-search");e.addEventListener("input",f1),e.addEventListener("keydown",s=>{if(s.key!=="Enter")return;const r=[...n.children].find(o=>o.style.display!=="none");r&&r.click()});const i=document.getElementById("pool-view");i.addEventListener("click",()=>{const s=!n.hidden;n.hidden=s,document.getElementById("ptable").hidden=!s,i.textContent=Z(s?"pool.viewList":"pool.viewTable")})}}function Uc(){const n=document.getElementById("pool-list");n.innerHTML="",Ho()}function f1(){const n=document.getElementById("pool-search").value.trim().toLowerCase();for(const t of document.querySelectorAll("#pool-list .el-chip"))t.style.display=!n||t.dataset.search.includes(n)?"":"none"}function p1(n){Lc(n),document.body.classList.contains("mobile")&&Bo()}function m1(n){return n>0?`+${n}`:`${n}`}function Fc(){if(_e===null||!it.has(_e))return null;const n=fe.find(t=>t.atoms.includes(_e));return n?{comp:n,an:Ue[fe.indexOf(n)]}:null}function Hc(){const n=document.getElementById("sel-info"),t=document.getElementById("mol-info"),e=document.getElementById("mol-warn"),i=document.getElementById("bohr-toggle"),s=document.getElementById("bohr-container"),r=Fc();if(!r){n.innerHTML=`<span class="muted">${Z("sel.empty")}</span>`,t.innerHTML=`<span class="muted">${Z("mol.empty")}</span>`,e.style.display="none",i.hidden=!0,s.hidden=!0,ei=!1,i.classList.remove("active"),Er&&cancelAnimationFrame(Er);return}const o=it.get(_e);n.innerHTML=`<b>${o.el.sym}</b> — ${Hn(o.el)}<br />
    <span class="muted">${Z("sel.stats",{cat:Sr(o.el.cat),mass:o.el.mass,en:o.el.en??"?",max:o.el.maxBonds})}</span>`,i.hidden=!1,s.hidden=!ei,ei&&(Bc(o.el),kc(o.el));const{comp:a,an:c}=r;if(a.bonds.length===0){t.innerHTML=`<span class="muted">${Z("mol.freeAtom")}</span>`,e.style.display="none";return}const l=Pc(a,c),u=Ln(c.formula,c.charge),h=`${Ki(c.displayFormula||c.formula)}<span class="muted">${Ar("",c.charge)}</span>`;if(t.innerHTML=`<div class="mol-formula">${h}</div><div id="mol-name">${l||Z("mol.unnamed")}<span class="mol-type">${u.label}</span></div>
    <span class="muted">${Z("mol.stats",{a:a.atoms.length,b:a.bonds.length})}</span>`,!c.feasible)e.style.display="block",e.textContent=wr(c.reason)||Z("chem.lewis.charge");else{const f=a.atoms.find(p=>{const g=c.per.get(p);return!g||g.isMetal||!g.bonded||!g.ionU?!1:(it.get(p).el.valenceElectrons+g.ionU-g.covSum)%2!==0});f?(e.style.display="block",e.textContent=Z("chem.partialIonic",{sym:Hn(it.get(f).el)})):e.style.display="none"}}const Kf=["K","L","M","N","O","P","Q"],Nh=[2,8,18,32,32,18,8];function jf(n){const t=[];let e=n;for(let i=0;i<Nh.length&&e>0;i++){const s=Math.min(e,Nh[i]);t.push(s),e-=s}return t}let ei=!1,Er=null,Zf=0;function Bc(n){const t=document.getElementById("bohr-canvas"),e=t.getContext("2d"),i=t.width,s=t.height,r=i/2,o=s/2;e.clearRect(0,0,i,s);const a=jf(n.z),c=Math.round(n.mass)-n.z,l=Math.min(r,o)-20,u=a.map((p,g)=>30+g*(l-30)/Math.max(a.length-1,1));e.strokeStyle="rgba(88, 166, 255, 0.15)",e.lineWidth=1;for(const p of u)e.beginPath(),e.arc(r,o,p,0,Math.PI*2),e.stroke();const h=16,f=e.createRadialGradient(r-3,o-3,2,r,o,h);f.addColorStop(0,"#ff6b6b"),f.addColorStop(.5,"#ee5a24"),f.addColorStop(1,"#c0392b"),e.fillStyle=f,e.beginPath(),e.arc(r,o,h,0,Math.PI*2),e.fill(),e.fillStyle="#fff",e.font="bold 10px system-ui",e.textAlign="center",e.textBaseline="middle",e.fillText(`${n.z}p`,r,o-5),e.font="9px system-ui",e.fillText(`${c}n`,r,o+6);for(let p=0;p<a.length;p++){const g=a[p],_=u[p],m=(.3+p*.15)*(p%2===0?1:-1);for(let d=0;d<g;d++){const b=Zf*m+d*Math.PI*2/g,C=r+Math.cos(b)*_,M=o+Math.sin(b)*_,R=e.createRadialGradient(C,M,0,C,M,6);R.addColorStop(0,"rgba(88, 166, 255, 0.8)"),R.addColorStop(1,"rgba(88, 166, 255, 0)"),e.fillStyle=R,e.beginPath(),e.arc(C,M,6,0,Math.PI*2),e.fill(),e.fillStyle="#58a6ff",e.beginPath(),e.arc(C,M,3,0,Math.PI*2),e.fill()}}e.fillStyle="rgba(139, 148, 158, 0.6)",e.font="9px system-ui",e.textAlign="left";for(let p=0;p<a.length;p++)e.fillText(`${Kf[p]}: ${a[p]}`,r+u[p]+4,o-4)}function Jf(){if(!ei)return;Zf+=.02;const n=it.get(_e);n&&Bc(n.el),Er=requestAnimationFrame(Jf)}function kc(n){const t=document.getElementById("bohr-stats"),e=jf(n.z),i=Math.round(n.mass)-n.z;let s=e.map((r,o)=>`<span class="shell-badge">${Kf[o]}: ${r}e⁻</span>`).join("");t.innerHTML=`
    <div><span class="stat-label">${Z("bohr.atomic")}</span><br><span class="stat-value">${n.z}</span></div>
    <div><span class="stat-label">${Z("bohr.mass")}</span><br><span class="stat-value">${n.mass}</span></div>
    <div><span class="stat-label">${Z("bohr.protons")}</span><br><span class="stat-value">${n.z}</span></div>
    <div><span class="stat-label">${Z("bohr.neutrons")}</span><br><span class="stat-value">${i}</span></div>
    <div><span class="stat-label">${Z("bohr.electrons")}</span><br><span class="stat-value">${n.z}</span></div>
    <div><span class="stat-label">${Z("bohr.valence")}</span><br><span class="stat-value">${n.valenceElectrons}</span></div>
    <div class="shell-row"><span class="stat-label">${Z("bohr.shells")}</span> ${s}</div>
  `}function g1(){ei=!ei;const n=document.getElementById("bohr-toggle"),t=document.getElementById("bohr-container");if(n.classList.toggle("active",ei),ei){t.hidden=!1;const e=it.get(_e);e&&(Bc(e.el),kc(e.el),Jf())}else t.hidden=!0,Er&&cancelAnimationFrame(Er)}document.getElementById("bohr-toggle").addEventListener("click",g1);function zc(){const n=document.getElementById("mol-list");if(n.textContent="",!fe.length){n.textContent=Z("list.empty");return}let t=0;fe.forEach((e,i)=>{if(e.bonds.length===0)return;t++;const s=Ue[i],r=document.createElement("div");r.className="mol-row"+(_e!==null&&e.atoms.includes(_e)?" active":"");const o=document.createElement("span");o.className="m-name",o.textContent=Pc(e,s)||Ki(s.formula);const a=document.createElement("span");if(a.className="m-f",a.textContent=Ki(s.displayFormula||s.formula)+Ar("",s.charge),r.append(o,a),r.addEventListener("click",()=>qs(e.atoms[0])),Hd(s.formula).length>0){const l=document.createElement("button");l.className="isomer-btn",l.textContent=Zt()?"Đồng phân":"Isomers",l.addEventListener("click",u=>{u.stopPropagation(),_1(i)}),r.appendChild(l)}n.appendChild(r)}),t||(n.textContent=Z("list.empty"))}function _1(n){const t=Ue[n],e=document.getElementById("isomer-drawer"),i=document.getElementById("isomer-drawer-title"),s=document.getElementById("isomer-drawer-list");i.textContent=(Zt()?"Đồng phân của ":"Isomers of ")+Ki(t.displayFormula||t.formula),s.textContent="";const r=Hd(t.formula),o=t.fingerprint,a=t.displayFormula||t.formula,c=r.map(f=>wd(f.tpl.atoms,f.tpl.bonds,f.tpl.atoms.map((p,g)=>g))),l=r.findIndex((f,p)=>c[p]===o&&(f.displayFormula||t.formula)===a),u=new Set(l>=0?[l]:r.map((f,p)=>c[p]===o?p:-1).filter(f=>f>=0));for(let f=0;f<r.length;f++){const p=r[f],g=document.createElement("div");g.className="isomer-item",u.has(f)&&g.classList.add("active");const _=document.createElement("div");_.className="isomer-item-info";const m=document.createElement("div");m.className="isomer-item-name",m.textContent=p.displayName||p.key;const d=document.createElement("div");d.className="isomer-item-formula",d.textContent=p.displayFormula||t.formula,_.append(m,d);const b=Ln(t.formula,p.tpl.charge||0),C=document.createElement("span");C.className="isomer-badge "+(b.key||""),C.textContent=b.label,g.append(_,C),g.addEventListener("click",()=>y1(n,p)),s.appendChild(g)}if(r.truncated){const f=document.createElement("div");f.className="isomer-more-note",f.textContent=Z("iso.more",{n:r.length}),s.appendChild(f)}e.classList.add("open"),e.setAttribute("aria-hidden","false");const h=document.getElementById("isomer-search");h.value="",tp("")}function Qf(){const n=document.getElementById("isomer-drawer");n.classList.remove("open"),n.setAttribute("aria-hidden","true")}function y1(n,t){const e=fe[n];if(!e)return;let i=0,s=0,r=0;for(const d of e.atoms){const b=it.get(d);i+=b.pos.x,s+=b.pos.y,r+=b.pos.z}const o=e.atoms.length;i/=o,s/=o,r/=o;for(const d of e.atoms){it.delete(d);for(const[b,C]of Tt)(C.a===d||C.b===d)&&Tt.delete(b)}const a=new Map,c=[],l=[];for(let d=0;d<t.tpl.atoms.length;d++){const b=t.tpl.atoms[d],C=ks(b);if(!C)continue;const M=Ce++;a.set(d,M),l.push({id:M,el:C,idx:d}),c.push(M)}const u=new Map;for(const d of l)u.set(d.id,[]);for(const d of t.tpl.bonds){const[b,C,M,R]=d,v=a.get(b),x=a.get(C);v==null||x==null||(u.get(v).push({neighbor:x,order:M}),u.get(x).push({neighbor:v,order:M}))}const h=new Map,f=new Set,p=l[0].id;h.set(p,{x:i,y:s,z:r}),f.add(p);const g=[{id:p,parentDir:null}];for(;g.length;){const{id:d,parentDir:b}=g.shift(),C=u.get(d);if(!C||C.length===0)continue;const M=C.filter(x=>!f.has(x.neighbor)).length;if(M===0)continue;const R=x1(M,b);let v=0;for(const{neighbor:x}of C){if(f.has(x))continue;const A=l.find(H=>H.id===d),y=l.find(H=>H.id===x),E=Wl(A.el,y.el,!1),w=R[v++],O=h.get(d);h.set(x,{x:O.x+w.x*E,y:O.y+w.y*E,z:O.z+w.z*E}),f.add(x),g.push({id:x,parentDir:{x:-w.x,y:-w.y,z:-w.z}})}}for(const d of l){const b=h.get(d.id)||{x:i,y:s,z:r};it.set(d.id,{id:d.id,el:d.el,pos:b})}for(const d of t.tpl.bonds){const[b,C,M,R]=d,v=a.get(b),x=a.get(C);if(v==null||x==null)continue;const A=Ce++;Tt.set(A,{id:A,a:v,b:x,order:M||1,ionic:!!R})}const _=Se({atoms:c}),m=Se(e);t.tpl.charge?$t.set(_,t.tpl.charge):$t.has(m)&&$t.set(_,$t.get(m)),t.displayFormula&&Rn.set(_,t.displayFormula),Qf(),Ae(new Set(c))}function x1(n,t){const e=[];if(n===1)t?e.push({x:-t.x,y:-t.y,z:-t.z}):e.push({x:1,y:0,z:0});else if(n===2)if(t){const i=Uh(t);e.push(i),e.push({x:-i.x,y:-i.y,z:-i.z})}else e.push({x:1,y:0,z:0}),e.push({x:-1,y:0,z:0});else if(n===3)if(t){const i=Uh(t),s=Jl(t,i);for(let r=0;r<3;r++){const o=r/3*Math.PI*2;e.push({x:i.x*Math.cos(o)+s.x*Math.sin(o),y:i.y*Math.cos(o)+s.y*Math.sin(o),z:i.z*Math.cos(o)+s.z*Math.sin(o)})}}else for(let i=0;i<3;i++){const s=i/3*Math.PI*2;e.push({x:Math.cos(s),y:Math.sin(s),z:0})}else if(n===4){const i=[{x:1,y:1,z:1},{x:1,y:-1,z:-1},{x:-1,y:1,z:-1},{x:-1,y:-1,z:1}];for(const s of i){const r=Math.sqrt(s.x*s.x+s.y*s.y+s.z*s.z);e.push({x:s.x/r,y:s.y/r,z:s.z/r})}}else for(let i=0;i<n;i++){const s=Math.acos(1-2*(i+.5)/n),r=Math.PI*(1+Math.sqrt(5))*i;e.push({x:Math.sin(s)*Math.cos(r),y:Math.sin(s)*Math.sin(r),z:Math.cos(s)})}return e}function Uh(n){return Math.abs(n.x)<.9?Fh(Jl(n,{x:1,y:0,z:0})):Fh(Jl(n,{x:0,y:1,z:0}))}function Jl(n,t){return{x:n.y*t.z-n.z*t.y,y:n.z*t.x-n.x*t.z,z:n.x*t.y-n.y*t.x}}function Fh(n){const t=Math.sqrt(n.x*n.x+n.y*n.y+n.z*n.z);return t===0?{x:0,y:0,z:0}:{x:n.x/t,y:n.y/t,z:n.z/t}}document.getElementById("isomer-drawer-close").addEventListener("click",Qf);document.getElementById("isomer-search").addEventListener("input",n=>tp(n.target.value));function tp(n){const t=document.getElementById("isomer-drawer-list");if(!t)return;const e=n.trim().toLowerCase();let i=0;for(const o of t.children){if(!o.classList.contains("isomer-item"))continue;const a=!e||o.textContent.toLowerCase().includes(e);o.style.display=a?"":"none",a&&i++}const s=t.querySelector(".isomer-more-note");s&&(s.style.display=e?"none":"");let r=document.getElementById("isomer-no-match");r||(r=document.createElement("div"),r.id="isomer-no-match",r.className="isomer-more-note",t.appendChild(r)),r.textContent=Z("iso.none"),r.style.display=i===0&&t.querySelector(".isomer-item")?"":"none"}function ep(n){return Ki(n.formula)+Ar("",n.charge??0)}function np(n){return Zt()&&n.vi?n.vi:n.name||ep(n)}function ia(){const n=document.getElementById("ch-list"),t=document.getElementById("ch-progress");t.textContent=`${Ji.size} / ${Yl.length}`,n.textContent="";for(const e of Yl){const i=document.createElement("div");i.className="ch"+(Ji.has(`${e.formula}|${e.charge??0}`)?" done":"");const s=document.createElement("span");s.className="ch-f",s.textContent=ep(e);const r=document.createElement("span");r.className="ch-n",r.textContent=np(e),i.append(s,r),n.appendChild(i)}}function v1(){for(const n of Yl){const t=`${n.formula}|${n.charge??0}`;if(Ji.has(t))continue;fe.some((i,s)=>Ue[s].feasible&&(Ue[s].displayFormula===n.formula||Ue[s].formula===n.formula)&&(Ue[s].charge??0)===(n.charge??0))&&(Ji.add(t),sa(Z("toast.challenge",{name:np(n)})),ia())}}let Hh=null;function Gt(n,t="info"){const e=document.getElementById("status-text");e.textContent=n,e.className=t,clearTimeout(Hh),Hh=setTimeout(()=>{e.textContent=""},6e3)}let Bh=null;function sa(n){const t=document.getElementById("toast");t.textContent=n,t.classList.add("show"),clearTimeout(Bh),Bh=setTimeout(()=>t.classList.remove("show"),3200)}function qs(n){_e=n,Hc(),zc(),Wc(),je()}function ip(n){const t=Fc();if(!t||t.comp.bonds.length===0){Gt(Z("status.selectFirst"));return}const e=Se(t.comp),i=($t.has(e)?$t.get(e):t.an.charge)+n;if(Math.abs(i)>6){Gt(Z("status.chargeLimit"),"err");return}$t.set(e,i),ai({type:"snapshot",atoms:[...it.values()].map(ta),bonds:[...Tt.values()].map(s=>({...s})),overrides:[...$t],iso:[...Rn],nextId:Ce}),Ae(),Gt(Z("status.chargeSet",{v:m1(i)}),"ok")}let kh=null;function sp(){clearTimeout(kh),kh=setTimeout(()=>{try{localStorage.setItem("mol3d.v1",JSON.stringify({atoms:[...it.values()].map(n=>({id:n.id,z:n.el.z,pos:n.pos})),bonds:[...Tt.values()].map(n=>({id:n.id,a:n.a,b:n.b,order:n.order,ionic:n.ionic})),nextId:Ce,overrides:[...$t],isoF:[...Rn],fc:[...Ji]}))}catch{}},300)}function M1(){let n;try{n=JSON.parse(localStorage.getItem("mol3d.v1")||"null")}catch{n=null}if(!(!n||!Array.isArray(n.atoms))){for(const t of n.atoms){if(!t||!Number.isInteger(t.id)||!t.pos)continue;const e=$o.find(i=>i.z===t.z);e&&it.set(t.id,{id:t.id,el:e,pos:{x:+t.pos.x||0,y:+t.pos.y||0,z:+t.pos.z||0}})}for(const t of Array.isArray(n.bonds)?n.bonds:[])t&&Number.isInteger(t.id)&&it.has(t.a)&&it.has(t.b)&&Tt.set(t.id,{...t});for(const[t,e]of Array.isArray(n.overrides)?n.overrides:[])typeof t=="string"&&Number.isInteger(e)&&$t.set(t,e);for(const[t,e]of Array.isArray(n.isoF)?n.isoF:[])typeof t=="string"&&typeof e=="string"&&Rn.set(t,e);for(const t of Array.isArray(n.fc)?n.fc:[])typeof t=="string"&&Ji.add(t);Ce=Number.isInteger(n.nextId)&&n.nextId>0?n.nextId:Math.max(0,...it.keys(),...Tt.keys())+1}}document.getElementById("btn-undo").addEventListener("click",Oc);document.getElementById("btn-delete").addEventListener("click",()=>{_e!==null&&Ic(_e)});document.getElementById("btn-duplicate").addEventListener("click",Hf);document.getElementById("btn-clear").addEventListener("click",Bf);const mr=document.getElementById("btn-menu"),Ql=document.getElementById("menu-dropdown");mr.addEventListener("click",n=>{n.stopPropagation();const t=mr.getAttribute("aria-expanded")==="true";mr.setAttribute("aria-expanded",!t),Ql.hidden=t});document.addEventListener("click",n=>{!mr.contains(n.target)&&!Ql.contains(n.target)&&(mr.setAttribute("aria-expanded","false"),Ql.hidden=!0)});document.getElementById("btn-fc").addEventListener("click",()=>{Mo=!Mo,document.getElementById("btn-fc").classList.toggle("on",Mo),je()});document.getElementById("btn-mayhem").addEventListener("click",()=>{Es=!Es,document.getElementById("btn-mayhem").classList.toggle("on",Es),document.getElementById("btn-import").hidden=!Es,Uc(),Gt(Es?"Mayhem mode ON — exotic elements unlocked!":"Mayhem mode OFF")});document.getElementById("btn-tutorial").addEventListener("click",()=>{Cc(),document.getElementById("menu-dropdown").hidden=!0,document.getElementById("btn-menu").setAttribute("aria-expanded","false")});document.getElementById("btn-import").addEventListener("click",()=>{document.getElementById("custom-element-modal").hidden=!1,document.getElementById("custom-name").focus()});document.getElementById("custom-close").addEventListener("click",()=>{document.getElementById("custom-element-modal").hidden=!0});document.getElementById("custom-cancel").addEventListener("click",()=>{document.getElementById("custom-element-modal").hidden=!0});document.getElementById("custom-anion").addEventListener("change",n=>{document.getElementById("anion-charge-row").hidden=!n.target.checked});document.getElementById("custom-element-form").addEventListener("submit",n=>{n.preventDefault();const t=document.getElementById("custom-name").value.trim(),e=document.getElementById("custom-sym").value.trim(),i=document.getElementById("custom-cat").value,s=parseInt(document.getElementById("custom-maxbonds").value)||4,r=parseFloat(document.getElementById("custom-mass").value)||100,o=document.getElementById("custom-color").value,a=document.getElementById("custom-anion").checked,c=a?parseInt(document.getElementById("custom-anion-charge").value)||1:0;if(!t||!e){Gt("Name and symbol are required");return}if(ks(e)){Gt(`Element "${e}" already exists`);return}const l=300+Ei.length;Ei.push({z:l,sym:e,name:t,mass:r,cat:i,en:null,maxBonds:s,anionCharge:c,charges:a?[c]:null,radius:150,color:o}),Uc(),document.getElementById("custom-element-modal").hidden=!0,document.getElementById("custom-element-form").reset(),document.getElementById("anion-charge-row").hidden=!0,Gt(`Created custom element: ${t} (${e})`)});function S1(n){const t=Ei.findIndex(i=>i.sym===n);if(t===-1)return;const e=Ei[t];Ei.splice(t,1),Uc(),Gt(`Deleted custom element: ${e.name} (${n})`)}Zl.addEventListener("click",()=>{const n=Xa.indexOf(Ir);Pf(Xa[(n+1)%Xa.length]),Gt(Z("status.quality",{mode:Uo()}))});document.getElementById("btn-save-disc").addEventListener("click",Of);document.getElementById("chg-minus").addEventListener("click",()=>ip(-1));document.getElementById("chg-plus").addEventListener("click",()=>ip(1));document.getElementById("chg-auto").addEventListener("click",()=>{const n=Fc();if(!n||n.comp.bonds.length===0){Gt(Z("status.selectFirst"));return}$t.delete(Se(n.comp)),Ae(),Gt(Z("status.chargeAuto"))});document.getElementById("ch-reset").addEventListener("click",()=>{Ji.clear(),ia(),sp(),Gt(Z("status.chalReset"))});window.addEventListener("keydown",n=>{n.target instanceof HTMLInputElement||((n.ctrlKey||n.metaKey)&&n.key.toLowerCase()==="z"?(n.preventDefault(),Oc()):(n.ctrlKey||n.metaKey)&&n.key.toLowerCase()==="d"?(n.preventDefault(),Hf()):n.key==="Delete"||n.key==="Backspace"?_e!==null&&Ic(_e):n.key==="Escape"&&(Bo(),wn(),qs(null)))});document.getElementById("btn-fc").classList.add("on");const rp="mol3d.theme",zh={dark:{bg:856343,gridA:3159613,gridB:1909546,meta:"#0d1117"},light:{bg:16185594,gridA:13226457,gridB:14541801,meta:"#f6f8fa"}},Vc=document.getElementById("btn-theme");function op(n){const t=zh[n]||zh.dark;document.documentElement.dataset.theme=n==="light"?"light":"dark",me.background.set(t.bg),me.fog&&me.fog.color.set(t.bg),me.remove(ki),ki.geometry.dispose(),ki=new _d(60,60,t.gridA,t.gridB),ki.position.y=-1.7,me.add(ki),document.querySelector('meta[name="theme-color"]')?.setAttribute("content",t.meta),Vc.textContent=Z("btn.theme",{mode:Z(n==="light"?"theme.light":"theme.dark")})}let gi="dark";try{const n=localStorage.getItem(rp);(n==="light"||n==="dark")&&(gi=n)}catch{}op(gi);Vc.addEventListener("click",()=>{gi=gi==="dark"?"light":"dark";try{localStorage.setItem(rp,gi)}catch{}op(gi),je(),Gt(Z("status.theme",{mode:Z(gi==="light"?"theme.light":"theme.dark")}))});const tc=document.getElementById("btn-lang");tc.textContent=Pd()==="en"?"VI":"EN";tc.addEventListener("click",()=>{Id(_v()),tc.textContent=Pd()==="en"?"VI":"EN",b1(),Gt(Z("status.lang"))});function b1(){yc(),Zo(),Vc.textContent=Z("btn.theme",{mode:Z(gi==="light"?"theme.light":"theme.dark")});const n=document.getElementById("pool-list");document.getElementById("pool-view").textContent=n.hidden?Z("pool.viewList"):Z("pool.viewTable");const t=document.querySelector("#ptable .el.ph");t&&(t.textContent=Z("ptable.ph")),$f(),Yf();for(const e of document.querySelectorAll("#rxn-conds button"))e.textContent=xi(e.dataset.cond);if(Lr(),Hc(),zc(),Qo(),ia(),ei){const e=it.get(_e);e&&kc(e.el)}je()}const E1=["left","tab-info","tab-dex"];function Bo(){for(const n of E1)document.getElementById(n)?.classList.remove("open");document.querySelectorAll("#mtabs button.on").forEach(n=>n.classList.remove("on"))}{const n=document.getElementById("mtabs"),t=window.matchMedia("(max-width: 860px)"),e=()=>{document.body.classList.toggle("mobile",t.matches),t.matches||Bo()};e(),t.addEventListener("change",e),n.addEventListener("click",i=>{const s=i.target.closest("button[data-tab]");if(!s)return;const r=document.getElementById(s.dataset.tab),o=r.classList.contains("open");Bo(),o||(r.classList.add("open"),s.classList.add("on"))})}{const n=()=>document.body.classList.add("joy");window.matchMedia("(pointer: coarse)").matches&&n(),window.addEventListener("pointerdown",o=>{o.pointerType==="touch"&&n()});const t=document.getElementById("joy-stick"),e=document.getElementById("joy-knob");let i=null;const s=o=>{const a=t.getBoundingClientRect();let c=o.clientX-(a.left+a.width/2),l=o.clientY-(a.top+a.height/2);const u=a.width/2,h=Math.hypot(c,l);h>u&&(c=c/h*u,l=l/h*u),e.style.transform=`translate(${c}px, ${l}px)`,As.setStick(c/u,-l/u)};t.addEventListener("pointerdown",o=>{i=o.pointerId;try{t.setPointerCapture(o.pointerId)}catch{}s(o)}),t.addEventListener("pointermove",o=>{o.pointerId===i&&s(o)});const r=o=>{o.pointerId===i&&(i=null,e.style.transform="",As.setStick(0,0))};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r);for(const[o,a]of[["joy-up",1],["joy-down",-1]]){const c=document.getElementById(o);c.addEventListener("pointerdown",l=>{l.preventDefault(),As.setVertical(a)});for(const l of["pointerup","pointercancel","pointerleave"])c.addEventListener(l,()=>As.setVertical(0))}}let ec=!0;function je(){ec=!0}function ap(n){const t=1-Math.exp(-n*9);let e=!1;for(const[i,s]of it){const r=mi.get(i);if(!r)continue;const o=r.x-s.pos.x,a=r.y-s.pos.y,c=r.z-s.pos.z;o*o+a*a+c*c<1e-6||(s.pos.x+=o*t,s.pos.y+=a*t,s.pos.z+=c*t,e=!0)}return e}let Vh=performance.now();function lp(n){requestAnimationFrame(lp);const t=Math.min(.05,(n-Vh)/1e3);Vh=n,Af.frame(n),yn.update();let e=!1;e=As.update(t)||e,e=kf(t)||e,e=ap(t)||e,n1(t),r1(n),qi.length&&(e=!0),ws&&(e=!0),zs.size&&(e=!0),Wt&&(e=!0),HM(n),(ec||e)&&(ec=!1,Jo(),If(),Ke.render(me,Re))}window.__mol3d={atoms:it,bonds:Tt,overrides:$t,movement:As,camera:Re,controls:yn,analyses:()=>Ue,comps:()=>fe,spawnAtom:Lc,reanalyze:Ae,selectAtom:qs,undo:Oc,clearAll:Bf,screenPosOf:n=>{const t=it.get(n);if(!t)return null;const e=new L(t.pos.x,t.pos.y,t.pos.z).project(Re),i=Ke.domElement.getBoundingClientRect();return{x:(e.x+1)/2*i.width+i.left,y:(-e.y+1)/2*i.height+i.top}},devBond:(n,t)=>Df(n,t),devUpgrade:n=>Ff(n),reaction:{selectByFormula:n=>{for(const t of fe){const e=Se(t);if(Ge.has(e))continue;const i=fe.indexOf(t);if(Ue[i]?.displayFormula===n||Ue[i]?.formula===n)return Ge.add(e),Dc(),Lr(),je(),!0}return!1},pick:n=>{const t=zf(),e=bc(t,n);if(e)return Gf(e),e.equation;const i=uf(t);return i.size?`wrong-condition:${[...i].join(",")}`:"none"},clear:wn},setQuality:Pf,quality:()=>Ir,tierKey:()=>es[Vs],discoveries:()=>[...pn],saveDiscoveries:Of,driftVelocity:n=>{const t=Xi(it,Tt,n);if(!t)return null;const e=oi.get(Se(t));return e?{x:e.v.x,y:e.v.y,z:e.v.z}:null},stepAnim:n=>{const t=kf(n),e=ap(n);return Jo(),If(),Ke.render(me,Re),{drift:t,lerp:e}}};yc();M1();$M();Ho();$f();QM();ia();Qo();Gc();Wc();Zo();Ae();requestAnimationFrame(lp);SM();function Gc(){document.getElementById("btn-undo").disabled=dr.length===0}function Wc(){const n=_e!==null;document.getElementById("btn-delete").disabled=!n,document.getElementById("btn-duplicate").disabled=!n}const C1=Object.assign({"./assets/music/Fragments by @AERØHEAD 🇺🇸.mp3":mp,"./assets/music/IN MEMORIAM by Onycs 🇫🇷.mp3":gp,"./assets/music/Imphenzia - Discovery Of Planet X.mp3":_p,"./assets/music/No.10 A New Beginning.mp3":yp,"./assets/music/Travis Fitzsimmons - Painting The Solar System.mp3":xp}),bs=Object.entries(C1).map(([n,t])=>{const e=n.split("/").pop().replace(/\.[^.]+$/,"");return{path:t,name:e}}).sort((n,t)=>n.name.localeCompare(t.name));let ar=0;const jn=new Audio;jn.style.display="none";document.body.appendChild(jn);function T1(){if(bs.length===0)return;const n=document.getElementById("volume-slider"),t=document.getElementById("now-playing"),e=(()=>{try{return localStorage.getItem("mol3d.volume")}catch{return null}})(),i=e!==null?Number(e):50;jn.volume=i/100,n&&(n.value=i),n&&n.addEventListener("input",()=>{jn.volume=n.value/100;try{localStorage.setItem("mol3d.volume",n.value)}catch{}});function s(){t&&bs[ar]&&(t.textContent=`"${bs[ar].name}"`)}jn.src=bs[0].path,s(),jn.addEventListener("ended",()=>{ar=(ar+1)%bs.length,jn.src=bs[ar].path,s(),jn.play().catch(()=>{})});const r=()=>{jn.play().catch(()=>{}),document.removeEventListener("click",r),document.removeEventListener("keydown",r),document.removeEventListener("touchstart",r)};document.addEventListener("click",r),document.addEventListener("keydown",r),document.addEventListener("touchstart",r)}T1();
