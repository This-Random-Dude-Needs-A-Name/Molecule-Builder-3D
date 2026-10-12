(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Rl="180",ps={ROTATE:0,DOLLY:1,PAN:2},us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$d=0,Mc=1,Kd=2,ih=1,jd=2,Fn=3,hi=0,Ve=1,Hn=2,ai=0,ms=1,Sc=2,Ec=3,bc=4,Zd=5,Ti=100,Jd=101,Qd=102,tf=103,ef=104,nf=200,sf=201,rf=202,of=203,Ca=204,wa=205,af=206,lf=207,cf=208,uf=209,hf=210,df=211,ff=212,pf=213,mf=214,Ra=0,Pa=1,La=2,vs=3,Da=4,Ia=5,Oa=6,Na=7,xo=0,gf=1,_f=2,li=0,xf=1,vf=2,yf=3,Mf=4,Sf=5,Ef=6,bf=7,sh=300,ys=301,Ms=302,Ua=303,Fa=304,vo=306,Ba=1e3,wi=1001,Ha=1002,Je=1003,Tf=1004,pr=1005,Cn=1006,Bo=1007,Ri=1008,Pn=1009,rh=1010,oh=1011,js=1012,Pl=1013,Oi=1014,wn=1015,rr=1016,Ll=1017,Dl=1018,Zs=1020,ah=35902,lh=35899,ch=1021,uh=1022,xn=1023,Js=1026,Qs=1027,Il=1028,Ol=1029,hh=1030,Nl=1031,Ul=1033,Xr=33776,qr=33777,Yr=33778,$r=33779,ka=35840,za=35841,Va=35842,Ga=35843,Wa=36196,Xa=37492,qa=37496,Ya=37808,$a=37809,Ka=37810,ja=37811,Za=37812,Ja=37813,Qa=37814,tl=37815,el=37816,nl=37817,il=37818,sl=37819,rl=37820,ol=37821,al=36492,ll=36494,cl=36495,ul=36283,hl=36284,dl=36285,fl=36286,Af=3200,Cf=3201,Fl=0,wf=1,ei="",rn="srgb",Ss="srgb-linear",Qr="linear",ee="srgb",Wi=7680,Tc=519,Rf=512,Pf=513,Lf=514,dh=515,Df=516,If=517,Of=518,Nf=519,pl=35044,Uf=35048,Ac="300 es",Rn=2e3,to=2001;class Hi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kr=Math.PI/180,ml=180/Math.PI;function ci(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]).toLowerCase()}function Wt(n,t,e){return Math.max(t,Math.min(e,n))}function Ff(n,t){return(n%t+t)%t}function Ho(n,t,e){return(1-e)*n+e*t}function Tn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ne(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Bf={DEG2RAD:Kr};class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==f||l!==p||u!==g){let m=1-a;const d=c*f+l*p+u*g+h*_,E=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const w=Math.sqrt(b),R=Math.atan2(w,d*E);m=Math.sin(m*R)/w,a=Math.sin(a*R)/w}const S=a*E;if(c=c*m+f*S,l=l*m+p*S,u=u*m+g*S,h=h*m+_*S,m===1-a){const w=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=w,l*=w,u*=w,h*=w}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*p-l*f,t[e+1]=c*g+u*f+l*h-a*p,t[e+2]=l*g+u*p+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),f=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ko.copy(this).projectOnVector(t),this.sub(ko)}reflect(t){return this.sub(ko.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ko=new D,Cc=new Xn;class kt{constructor(t,e,i,s,r,o,a,c,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],_=s[0],m=s[3],d=s[6],E=s[1],b=s[4],S=s[7],w=s[2],R=s[5],T=s[8];return r[0]=o*_+a*E+c*w,r[3]=o*m+a*b+c*R,r[6]=o*d+a*S+c*T,r[1]=l*_+u*E+h*w,r[4]=l*m+u*b+h*R,r[7]=l*d+u*S+h*T,r[2]=f*_+p*E+g*w,r[5]=f*m+p*b+g*R,r[8]=f*d+p*S+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,p=l*r-o*c,g=e*h+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*l-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*c-l*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(zo.makeScale(t,e)),this}rotate(t){return this.premultiply(zo.makeRotation(-t)),this}translate(t,e){return this.premultiply(zo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zo=new kt;function fh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function eo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hf(){const n=eo("canvas");return n.style.display="block",n}const wc={};function tr(n){n in wc||(wc[n]=!0,console.warn(n))}function kf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Rc=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pc=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zf(){const n={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ee&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ee&&(s.r=gs(s.r),s.g=gs(s.g),s.b=gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?Qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return tr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return tr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ss]:{primaries:t,whitePoint:i,transfer:Qr,toXYZ:Rc,fromXYZ:Pc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:i,transfer:ee,toXYZ:Rc,fromXYZ:Pc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}const jt=zf();function Vn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function gs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Xi;class Vf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Xi===void 0&&(Xi=eo("canvas")),Xi.width=t.width,Xi.height=t.height;const s=Xi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Xi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=eo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Vn(e[i]/255)*255):e[i]=Vn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gf=0;class Bl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=ci(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Vo(s[o].image)):r.push(Vo(s[o]))}else r=Vo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Vo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wf=0;const Go=new D;class Be extends Hi{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,i=wi,s=wi,r=Cn,o=Ri,a=xn,c=Pn,l=Be.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=ci(),this.name="",this.source=new Bl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Go).x}get height(){return this.source.getSize(Go).y}get depth(){return this.source.getSize(Go).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ba:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case Ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ba:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case Ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=sh;Be.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,i=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,S=(p+1)/2,w=(d+1)/2,R=(u+f)/4,T=(h+_)/4,L=(g+m)/4;return b>S&&b>w?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=R/i,r=T/i):S>w?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=R/s,r=L/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=T/r,s=L/r),this.set(i,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-_)/E,this.z=(f-u)/E,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xf extends Hi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new Be(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Bl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends Xf{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ph extends Be{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qf extends Be{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ki{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mr.copy(i.boundingBox)),mr.applyMatrix4(t.matrixWorld),this.union(mr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),gr.subVectors(this.max,Ps),qi.subVectors(t.a,Ps),Yi.subVectors(t.b,Ps),$i.subVectors(t.c,Ps),Kn.subVectors(Yi,qi),jn.subVectors($i,Yi),xi.subVectors(qi,$i);let e=[0,-Kn.z,Kn.y,0,-jn.z,jn.y,0,-xi.z,xi.y,Kn.z,0,-Kn.x,jn.z,0,-jn.x,xi.z,0,-xi.x,-Kn.y,Kn.x,0,-jn.y,jn.x,0,-xi.y,xi.x,0];return!Wo(e,qi,Yi,$i,gr)||(e=[1,0,0,0,1,0,0,0,1],!Wo(e,qi,Yi,$i,gr))?!1:(_r.crossVectors(Kn,jn),e=[_r.x,_r.y,_r.z],Wo(e,qi,Yi,$i,gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Dn=[new D,new D,new D,new D,new D,new D,new D,new D],dn=new D,mr=new ki,qi=new D,Yi=new D,$i=new D,Kn=new D,jn=new D,xi=new D,Ps=new D,gr=new D,_r=new D,vi=new D;function Wo(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){vi.fromArray(n,r);const a=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),c=t.dot(vi),l=e.dot(vi),u=i.dot(vi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Yf=new ki,Ls=new D,Xo=new D;class Cs{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Yf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);const e=Ls.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ls,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(Xo)),this.expandByPoint(Ls.copy(t.center).sub(Xo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const In=new D,qo=new D,xr=new D,Zn=new D,Yo=new D,vr=new D,$o=new D;class yo{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){qo.copy(t).add(e).multiplyScalar(.5),xr.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(qo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(xr),a=Zn.dot(this.direction),c=-Zn.dot(xr),l=Zn.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(qo).addScaledVector(xr,f),p}intersectSphere(t,e){In.subVectors(t.center,this.origin);const i=In.dot(this.direction),s=In.dot(In)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,i,s,r){Yo.subVectors(e,t),vr.subVectors(i,t),$o.crossVectors(Yo,vr);let o=this.direction.dot($o),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,t);const c=a*this.direction.dot(vr.crossVectors(Zn,vr));if(c<0)return null;const l=a*this.direction.dot(Yo.cross(Zn));if(l<0||c+l>o)return null;const u=-a*Zn.dot($o);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,i,s,r,o,a,c,l,u,h,f,p,g,_,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,h,f,p,g,_,m)}set(t,e,i,s,r,o,a,c,l,u,h,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ki.setFromMatrixColumn(t,0).length(),r=1/Ki.setFromMatrixColumn(t,1).length(),o=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,p=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,p=c*h,g=l*u,_=l*h;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,p=c*h,g=l*u,_=l*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,p=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=g*l-p,e[8]=f*l+_,e[1]=c*h,e[5]=_*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-f*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+_,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($f,t,Kf)}lookAt(t,e,i){const s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Jn.crossVectors(i,je),Jn.lengthSq()===0&&(Math.abs(i.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Jn.crossVectors(i,je)),Jn.normalize(),yr.crossVectors(je,Jn),s[0]=Jn.x,s[4]=yr.x,s[8]=je.x,s[1]=Jn.y,s[5]=yr.y,s[9]=je.y,s[2]=Jn.z,s[6]=yr.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],E=i[3],b=i[7],S=i[11],w=i[15],R=s[0],T=s[4],L=s[8],v=s[12],M=s[1],C=s[5],O=s[9],B=s[13],V=s[2],W=s[6],z=s[10],$=s[14],G=s[3],nt=s[7],it=s[11],Et=s[15];return r[0]=o*R+a*M+c*V+l*G,r[4]=o*T+a*C+c*W+l*nt,r[8]=o*L+a*O+c*z+l*it,r[12]=o*v+a*B+c*$+l*Et,r[1]=u*R+h*M+f*V+p*G,r[5]=u*T+h*C+f*W+p*nt,r[9]=u*L+h*O+f*z+p*it,r[13]=u*v+h*B+f*$+p*Et,r[2]=g*R+_*M+m*V+d*G,r[6]=g*T+_*C+m*W+d*nt,r[10]=g*L+_*O+m*z+d*it,r[14]=g*v+_*B+m*$+d*Et,r[3]=E*R+b*M+S*V+w*G,r[7]=E*T+b*C+S*W+w*nt,r[11]=E*L+b*O+S*z+w*it,r[15]=E*v+b*B+S*$+w*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*c*h-s*l*h-r*a*f+i*l*f+s*a*p-i*c*p)+_*(+e*c*p-e*l*f+r*o*f-s*o*p+s*l*u-r*c*u)+m*(+e*l*h-e*a*p-r*o*h+i*o*p+r*a*u-i*l*u)+d*(-s*a*u-e*c*h+e*a*f+s*o*h-i*o*f+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],E=h*m*l-_*f*l+_*c*p-a*m*p-h*c*d+a*f*d,b=g*f*l-u*m*l-g*c*p+o*m*p+u*c*d-o*f*d,S=u*_*l-g*h*l+g*a*p-o*_*p-u*a*d+o*h*d,w=g*h*c-u*_*c-g*a*f+o*_*f+u*a*m-o*h*m,R=e*E+i*b+s*S+r*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return t[0]=E*T,t[1]=(_*f*r-h*m*r-_*s*p+i*m*p+h*s*d-i*f*d)*T,t[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*d+i*c*d)*T,t[3]=(h*c*r-a*f*r-h*s*l+i*f*l+a*s*p-i*c*p)*T,t[4]=b*T,t[5]=(u*m*r-g*f*r+g*s*p-e*m*p-u*s*d+e*f*d)*T,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*d-e*c*d)*T,t[7]=(o*f*r-u*c*r+u*s*l-e*f*l-o*s*p+e*c*p)*T,t[8]=S*T,t[9]=(g*h*r-u*_*r-g*i*p+e*_*p+u*i*d-e*h*d)*T,t[10]=(o*_*r-g*a*r+g*i*l-e*_*l-o*i*d+e*a*d)*T,t[11]=(u*a*r-o*h*r-u*i*l+e*h*l+o*i*p-e*a*p)*T,t[12]=w*T,t[13]=(u*_*s-g*h*s+g*i*f-e*_*f-u*i*m+e*h*m)*T,t[14]=(g*a*s-o*_*s-g*i*c+e*_*c+o*i*m-e*a*m)*T,t[15]=(o*h*s-u*a*s+u*i*c-e*h*c-o*i*f+e*a*f)*T,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,p=r*u,g=r*h,_=o*u,m=o*h,d=a*h,E=c*l,b=c*u,S=c*h,w=i.x,R=i.y,T=i.z;return s[0]=(1-(_+d))*w,s[1]=(p+S)*w,s[2]=(g-b)*w,s[3]=0,s[4]=(p-S)*R,s[5]=(1-(f+d))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(g+b)*T,s[9]=(m-E)*T,s[10]=(1-(f+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ki.set(s[0],s[1],s[2]).length();const o=Ki.set(s[4],s[5],s[6]).length(),a=Ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],fn.copy(this);const l=1/r,u=1/o,h=1/a;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=h,fn.elements[9]*=h,fn.elements[10]*=h,e.setFromRotationMatrix(fn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Rn,c=!1){const l=this.elements,u=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),p=(i+s)/(i-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===Rn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===to)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Rn,c=!1){const l=this.elements,u=2/(e-t),h=2/(i-s),f=-(e+t)/(e-t),p=-(i+s)/(i-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===Rn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===to)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ki=new D,fn=new se,$f=new D(0,0,0),Kf=new D(1,1,1),Jn=new D,yr=new D,je=new D,Lc=new se,Dc=new Xn;class vn{constructor(t=0,e=0,i=0,s=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Lc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dc.setFromEuler(this),this.setFromQuaternion(Dc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class Hl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jf=0;const Ic=new D,ji=new Xn,On=new se,Mr=new D,Ds=new D,Zf=new D,Jf=new Xn,Oc=new D(1,0,0),Nc=new D(0,1,0),Uc=new D(0,0,1),Fc={type:"added"},Qf={type:"removed"},Zi={type:"childadded",child:null},Ko={type:"childremoved",child:null};class Se extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new D,e=new vn,i=new Xn,s=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new kt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(Oc,t)}rotateY(t){return this.rotateOnAxis(Nc,t)}rotateZ(t){return this.rotateOnAxis(Uc,t)}translateOnAxis(t,e){return Ic.copy(t).applyQuaternion(this.quaternion),this.position.add(Ic.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oc,t)}translateY(t){return this.translateOnAxis(Nc,t)}translateZ(t){return this.translateOnAxis(Uc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Mr.copy(t):Mr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Ds,Mr,this.up):On.lookAt(Mr,Ds,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(On),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fc),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qf),Ko.child=t,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fc),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,Zf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,Jf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Se.DEFAULT_UP=new D(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new D,Nn=new D,jo=new D,Un=new D,Ji=new D,Qi=new D,Bc=new D,Zo=new D,Jo=new D,Qo=new D,ta=new ge,ea=new ge,na=new ge;class an{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),pn.subVectors(t,e),s.cross(pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){pn.subVectors(s,e),Nn.subVectors(i,e),jo.subVectors(t,e);const o=pn.dot(pn),a=pn.dot(Nn),c=pn.dot(jo),l=Nn.dot(Nn),u=Nn.dot(jo),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Un.x),c.addScaledVector(o,Un.y),c.addScaledVector(a,Un.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return ta.setScalar(0),ea.setScalar(0),na.setScalar(0),ta.fromBufferAttribute(t,e),ea.fromBufferAttribute(t,i),na.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ta,r.x),o.addScaledVector(ea,r.y),o.addScaledVector(na,r.z),o}static isFrontFacing(t,e,i,s){return pn.subVectors(i,e),Nn.subVectors(t,e),pn.cross(Nn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),pn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return an.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ji.subVectors(s,i),Qi.subVectors(r,i),Zo.subVectors(t,i);const c=Ji.dot(Zo),l=Qi.dot(Zo);if(c<=0&&l<=0)return e.copy(i);Jo.subVectors(t,s);const u=Ji.dot(Jo),h=Qi.dot(Jo);if(u>=0&&h<=u)return e.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Ji,o);Qo.subVectors(t,r);const p=Ji.dot(Qo),g=Qi.dot(Qo);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(Qi,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Bc.subVectors(r,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(Bc,a);const d=1/(m+_+f);return o=_*d,a=f*d,e.copy(i).addScaledVector(Ji,o).addScaledVector(Qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function ia(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Pt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=jt.workingColorSpace){if(t=Ff(t,1),e=Wt(e,0,1),i=Wt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ia(o,r,t+1/3),this.g=ia(o,r,t),this.b=ia(o,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=rn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const i=mh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return jt.workingToColorSpace(Oe.copy(this),t),Math.round(Wt(Oe.r*255,0,255))*65536+Math.round(Wt(Oe.g*255,0,255))*256+Math.round(Wt(Oe.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(Oe.copy(this),e);const i=Oe.r,s=Oe.g,r=Oe.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=rn){jt.workingToColorSpace(Oe.copy(this),t);const e=Oe.r,i=Oe.g,s=Oe.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(Sr);const i=Ho(Qn.h,Sr.h,e),s=Ho(Qn.s,Sr.s,e),r=Ho(Qn.l,Sr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new Pt;Pt.NAMES=mh;let tp=0;class pi extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=ms,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=wa,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(i.blending=this.blending),this.side!==hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ca&&(i.blendSrc=this.blendSrc),this.blendDst!==wa&&(i.blendDst=this.blendDst),this.blendEquation!==Ti&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Li extends pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new D,Er=new Ct;let ep=0;class cn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ep++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=pl,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Er.fromBufferAttribute(this,e),Er.applyMatrix3(t),this.setXY(e,Er.x,Er.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Tn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ne(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Tn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Tn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Tn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Tn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),s=ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==pl&&(t.usage=this.usage),t}}class gh extends cn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class _h extends cn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Le extends cn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let np=0;const en=new se,sa=new Se,ts=new D,Ze=new ki,Is=new ki,we=new D;class un extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fh(t)?_h:gh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,i){return en.makeTranslation(t,e,i),this.applyMatrix4(en),this}scale(t,e,i){return en.makeScale(t,e,i),this.applyMatrix4(en),this}lookAt(t){return sa.lookAt(t),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Le(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(Ze.min,Is.min),Ze.expandByPoint(we),we.addVectors(Ze.max,Is.max),Ze.expandByPoint(we)):(Ze.expandByPoint(Is.min),Ze.expandByPoint(Is.max))}Ze.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)we.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(we));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)we.fromBufferAttribute(a,l),c&&(ts.fromBufferAttribute(t,l),we.add(ts)),s=Math.max(s,i.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<i.count;L++)a[L]=new D,c[L]=new D;const l=new D,u=new D,h=new D,f=new Ct,p=new Ct,g=new Ct,_=new D,m=new D;function d(L,v,M){l.fromBufferAttribute(i,L),u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,M),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,v),g.fromBufferAttribute(r,M),u.sub(l),h.sub(l),p.sub(f),g.sub(f);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),a[L].add(_),a[v].add(_),a[M].add(_),c[L].add(m),c[v].add(m),c[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let L=0,v=E.length;L<v;++L){const M=E[L],C=M.start,O=M.count;for(let B=C,V=C+O;B<V;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const b=new D,S=new D,w=new D,R=new D;function T(L){w.fromBufferAttribute(s,L),R.copy(w);const v=a[L];b.copy(v),b.sub(w.multiplyScalar(w.dot(v))).normalize(),S.crossVectors(R,v);const C=S.dot(c[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,C)}for(let L=0,v=E.length;L<v;++L){const M=E[L],C=M.start,O=M.count;for(let B=C,V=C+O;B<V;B+=3)T(t.getX(B+0)),T(t.getX(B+1)),T(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,u=new D,h=new D;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let d=0;d<u;d++)f[g++]=l[p++]}return new cn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new un,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=t(f,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hc=new se,yi=new yo,br=new Cs,kc=new D,Tr=new D,Ar=new D,Cr=new D,ra=new D,wr=new D,zc=new D,Rr=new D;class Ue extends Se{constructor(t=new un,e=new Li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){wr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(ra.fromBufferAttribute(h,t),o?wr.addScaledVector(ra,u):wr.addScaledVector(ra.sub(e),u))}e.add(wr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere),br.applyMatrix4(r),yi.copy(t.ray).recast(t.near),!(br.containsPoint(yi.origin)===!1&&(yi.intersectSphere(br,kc)===null||yi.origin.distanceToSquared(kc)>(t.far-t.near)**2))&&(Hc.copy(r).invert(),yi.copy(t.ray).applyMatrix4(Hc),!(i.boundingBox!==null&&yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,w=b;S<w;S+=3){const R=a.getX(S),T=a.getX(S+1),L=a.getX(S+2);s=Pr(this,d,t,i,l,u,h,R,T,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const E=a.getX(m),b=a.getX(m+1),S=a.getX(m+2);s=Pr(this,o,t,i,l,u,h,E,b,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,w=b;S<w;S+=3){const R=S,T=S+1,L=S+2;s=Pr(this,d,t,i,l,u,h,R,T,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const E=m,b=m+1,S=m+2;s=Pr(this,o,t,i,l,u,h,E,b,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function ip(n,t,e,i,s,r,o,a){let c;if(t.side===Ve?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===hi,a),c===null)return null;Rr.copy(a),Rr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Rr);return l<e.near||l>e.far?null:{distance:l,point:Rr.clone(),object:n}}function Pr(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,Tr),n.getVertexPosition(c,Ar),n.getVertexPosition(l,Cr);const u=ip(n,t,e,i,Tr,Ar,Cr,zc);if(u){const h=new D;an.getBarycoord(zc,Tr,Ar,Cr,h),s&&(u.uv=an.getInterpolatedAttribute(s,a,c,l,h,new Ct)),r&&(u.uv1=an.getInterpolatedAttribute(r,a,c,l,h,new Ct)),o&&(u.normal=an.getInterpolatedAttribute(o,a,c,l,h,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new D,materialIndex:0};an.getNormal(Tr,Ar,Cr,f.normal),u.face=f,u.barycoord=h}return u}class or extends un{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(h,2));function g(_,m,d,E,b,S,w,R,T,L,v){const M=S/T,C=w/L,O=S/2,B=w/2,V=R/2,W=T+1,z=L+1;let $=0,G=0;const nt=new D;for(let it=0;it<z;it++){const Et=it*C-B;for(let Ft=0;Ft<W;Ft++){const Jt=Ft*M-O;nt[_]=Jt*E,nt[m]=Et*b,nt[d]=V,l.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[d]=R>0?1:-1,u.push(nt.x,nt.y,nt.z),h.push(Ft/T),h.push(1-it/L),$+=1}}for(let it=0;it<L;it++)for(let Et=0;Et<T;Et++){const Ft=f+Et+W*it,Jt=f+Et+W*(it+1),re=f+(Et+1)+W*(it+1),qt=f+(Et+1)+W*it;c.push(Ft,Jt,qt),c.push(Jt,re,qt),G+=6}a.addGroup(p,G,v),p+=G,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new or(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Es(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function ze(n){const t={};for(let e=0;e<n.length;e++){const i=Es(n[e]);for(const s in i)t[s]=i[s]}return t}function sp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function xh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const rp={clone:Es,merge:ze};var op=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=op,this.fragmentShader=ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=sp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class vh extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new D,Vc=new Ct,Gc=new Ct;class on extends vh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ml*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ml*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,Vc,Gc),e.subVectors(Gc,Vc)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Kr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const es=-90,ns=1;class lp extends Se{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(es,ns,t,e);s.layers=this.layers,this.add(s);const r=new on(es,ns,t,e);r.layers=this.layers,this.add(r);const o=new on(es,ns,t,e);o.layers=this.layers,this.add(o);const a=new on(es,ns,t,e);a.layers=this.layers,this.add(a);const c=new on(es,ns,t,e);c.layers=this.layers,this.add(c);const l=new on(es,ns,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===to)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class yh extends Be{constructor(t=[],e=ys,i,s,r,o,a,c,l,u){super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cp extends Ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new yh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new or(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ve,blending:ai});r.uniforms.tEquirect.value=e;const o=new Ue(s,r),a=e.minFilter;return e.minFilter===Ri&&(e.minFilter=Cn),new lp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}class Lr extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const up={type:"move"};class oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(up)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Lr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class kl{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Pt(t),this.near=e,this.far=i}clone(){return new kl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hp extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class dp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=pl,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ke=new D;class no{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Tn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ne(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Tn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Tn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Tn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Tn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),s=ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new cn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new no(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class gl extends pi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let is;const Os=new D,ss=new D,rs=new D,os=new Ct,Ns=new Ct,Mh=new se,Dr=new D,Us=new D,Ir=new D,Wc=new Ct,aa=new Ct,Xc=new Ct;class qc extends Se{constructor(t=new gl){if(super(),this.isSprite=!0,this.type="Sprite",is===void 0){is=new un;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new dp(e,5);is.setIndex([0,1,2,0,2,3]),is.setAttribute("position",new no(i,3,0,!1)),is.setAttribute("uv",new no(i,2,3,!1))}this.geometry=is,this.material=t,this.center=new Ct(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),Mh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),rs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-rs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Or(Dr.set(-.5,-.5,0),rs,o,ss,s,r),Or(Us.set(.5,-.5,0),rs,o,ss,s,r),Or(Ir.set(.5,.5,0),rs,o,ss,s,r),Wc.set(0,0),aa.set(1,0),Xc.set(1,1);let a=t.ray.intersectTriangle(Dr,Us,Ir,!1,Os);if(a===null&&(Or(Us.set(-.5,.5,0),rs,o,ss,s,r),aa.set(0,1),a=t.ray.intersectTriangle(Dr,Ir,Us,!1,Os),a===null))return;const c=t.ray.origin.distanceTo(Os);c<t.near||c>t.far||e.push({distance:c,point:Os.clone(),uv:an.getInterpolation(Os,Dr,Us,Ir,Wc,aa,Xc,new Ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Or(n,t,e,i,s,r){os.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Ns.x=r*os.x-s*os.y,Ns.y=s*os.x+r*os.y):Ns.copy(os),n.copy(t),n.x+=Ns.x,n.y+=Ns.y,n.applyMatrix4(Mh)}class fp extends Be{constructor(t=null,e=1,i=1,s,r,o,a,c,l=Je,u=Je,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yc extends cn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const as=new se,$c=new se,Nr=[],Kc=new ki,pp=new se,Fs=new Ue,Bs=new Cs;class Mo extends Ue{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,pp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ki),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,as),Kc.copy(t.boundingBox).applyMatrix4(as),this.boundingBox.union(Kc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,as),Bs.copy(t.boundingSphere).applyMatrix4(as),this.boundingSphere.union(Bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(i),t.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,as),$c.multiplyMatrices(i,as),Fs.matrixWorld=$c,Fs.raycast(t,Nr);for(let o=0,a=Nr.length;o<a;o++){const c=Nr[o];c.instanceId=r,c.object=this,e.push(c)}Nr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Yc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new fp(new Float32Array(s*this.count),s,this.count,Il,wn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const la=new D,mp=new D,gp=new kt;class Bn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=la.subVectors(i,e).cross(mp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(la),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||gp.getNormalMatrix(t),s=this.coplanarPoint(la).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new Cs,_p=new Ct(.5,.5),Ur=new D;class zl{constructor(t=new Bn,e=new Bn,i=new Bn,s=new Bn,r=new Bn,o=new Bn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Rn,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],p=r[7],g=r[8],_=r[9],m=r[10],d=r[11],E=r[12],b=r[13],S=r[14],w=r[15];if(s[0].setComponents(l-o,p-u,d-g,w-E).normalize(),s[1].setComponents(l+o,p+u,d+g,w+E).normalize(),s[2].setComponents(l+a,p+h,d+_,w+b).normalize(),s[3].setComponents(l-a,p-h,d-_,w-b).normalize(),i)s[4].setComponents(c,f,m,S).normalize(),s[5].setComponents(l-c,p-f,d-m,w-S).normalize();else if(s[4].setComponents(l-c,p-f,d-m,w-S).normalize(),e===Rn)s[5].setComponents(l+c,p+f,d+m,w+S).normalize();else if(e===to)s[5].setComponents(c,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){Mi.center.set(0,0,0);const e=_p.distanceTo(t.center);return Mi.radius=.7071067811865476+e,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Ur.x=s.normal.x>0?t.max.x:t.min.x,Ur.y=s.normal.y>0?t.max.y:t.min.y,Ur.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sh extends pi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const io=new D,so=new D,jc=new se,Hs=new yo,Fr=new Cs,ca=new D,Zc=new D;class xp extends Se{constructor(t=new un,e=new Sh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)io.fromBufferAttribute(e,s-1),so.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=io.distanceTo(so);t.setAttribute("lineDistance",new Le(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(s),Fr.radius+=r,t.ray.intersectsSphere(Fr)===!1)return;jc.copy(s).invert(),Hs.copy(t.ray).applyMatrix4(jc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const d=u.getX(_),E=u.getX(_+1),b=Br(this,t,Hs,c,d,E,_);b&&e.push(b)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),d=Br(this,t,Hs,c,_,m,g-1);d&&e.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const d=Br(this,t,Hs,c,_,_+1,_);d&&e.push(d)}if(this.isLineLoop){const _=Br(this,t,Hs,c,g-1,p,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Br(n,t,e,i,s,r,o){const a=n.geometry.attributes.position;if(io.fromBufferAttribute(a,s),so.fromBufferAttribute(a,r),e.distanceSqToSegment(io,so,ca,Zc)>i)return;ca.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ca);if(!(l<t.near||l>t.far))return{distance:l,point:Zc.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Jc=new D,Qc=new D;class vp extends xp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Jc.fromBufferAttribute(e,s),Qc.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Jc.distanceTo(Qc);t.setAttribute("lineDistance",new Le(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Eh extends Be{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bh extends Be{constructor(t,e,i=Oi,s,r,o,a=Je,c=Je,l,u=Js,h=1){if(u!==Js&&u!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Th extends Be{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class So extends un{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],p=[];let g=0;const _=[],m=i/2;let d=0;E(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Le(h,3)),this.setAttribute("normal",new Le(f,3)),this.setAttribute("uv",new Le(p,2));function E(){const S=new D,w=new D;let R=0;const T=(e-t)/i;for(let L=0;L<=r;L++){const v=[],M=L/r,C=M*(e-t)+t;for(let O=0;O<=s;O++){const B=O/s,V=B*c+a,W=Math.sin(V),z=Math.cos(V);w.x=C*W,w.y=-M*i+m,w.z=C*z,h.push(w.x,w.y,w.z),S.set(W,T,z).normalize(),f.push(S.x,S.y,S.z),p.push(B,1-M),v.push(g++)}_.push(v)}for(let L=0;L<s;L++)for(let v=0;v<r;v++){const M=_[v][L],C=_[v+1][L],O=_[v+1][L+1],B=_[v][L+1];(t>0||v!==0)&&(u.push(M,C,B),R+=3),(e>0||v!==r-1)&&(u.push(C,O,B),R+=3)}l.addGroup(d,R,0),d+=R}function b(S){const w=g,R=new Ct,T=new D;let L=0;const v=S===!0?t:e,M=S===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const C=g;for(let O=0;O<=s;O++){const V=O/s*c+a,W=Math.cos(V),z=Math.sin(V);T.x=v*z,T.y=m*M,T.z=v*W,h.push(T.x,T.y,T.z),f.push(0,M,0),R.x=W*.5+.5,R.y=z*.5*M+.5,p.push(R.x,R.y),g++}for(let O=0;O<s;O++){const B=w+O,V=C+O;S===!0?u.push(V,V+1,B):u.push(V+1,V,B),L+=3}l.addGroup(d,L,S===!0?1:2),d+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new So(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Eo extends un{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=t/a,f=e/c,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const E=d*f-o;for(let b=0;b<l;b++){const S=b*h-r;g.push(S,-E,0),_.push(0,0,1),m.push(b/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let E=0;E<a;E++){const b=E+l*d,S=E+l*(d+1),w=E+1+l*(d+1),R=E+1+l*d;p.push(b,S,R),p.push(S,w,R)}this.setIndex(p),this.setAttribute("position",new Le(g,3)),this.setAttribute("normal",new Le(_,3)),this.setAttribute("uv",new Le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eo(t.width,t.height,t.widthSegments,t.heightSegments)}}class ui extends un{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new D,f=new D,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const E=[],b=d/i;let S=0;d===0&&o===0?S=.5/e:d===i&&c===Math.PI&&(S=-.5/e);for(let w=0;w<=e;w++){const R=w/e;h.x=-t*Math.cos(s+R*r)*Math.sin(o+b*a),h.y=t*Math.cos(o+b*a),h.z=t*Math.sin(s+R*r)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(R+S,1-b),E.push(l++)}u.push(E)}for(let d=0;d<i;d++)for(let E=0;E<e;E++){const b=u[d][E+1],S=u[d][E],w=u[d+1][E],R=u[d+1][E+1];(d!==0||o>0)&&p.push(b,S,R),(d!==i-1||c<Math.PI)&&p.push(S,w,R)}this.setIndex(p),this.setAttribute("position",new Le(g,3)),this.setAttribute("normal",new Le(_,3)),this.setAttribute("uv",new Le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ui(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ah extends pi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Pt(16777215),this.specular=new Pt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fl,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ch extends pi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fl,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yp extends pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Mp extends pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class wh extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Sp extends wh{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ua=new se,tu=new D,eu=new D;class Ep{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zl,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;tu.setFromMatrixPosition(t.matrixWorld),e.position.copy(tu),eu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(eu),e.updateMatrixWorld(),ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ua,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Rh extends vh{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class bp extends Ep{constructor(){super(new Rh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ph extends wh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new bp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Tp extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const nu=new se;class Ap{constructor(t,e,i=0,s=1/0){this.ray=new yo(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Hl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nu),this}intersectObject(t,e=!0,i=[]){return _l(t,this,i,e),i.sort(iu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)_l(t[s],this,i,e);return i.sort(iu),i}}function iu(n,t){return n.distance-t.distance}function _l(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)_l(r[o],t,e,!0)}}class su{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Wt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Lh extends vp{constructor(t=10,e=10,i=4473924,s=8947848){i=new Pt(i),s=new Pt(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let f=0,p=0,g=-a;f<=e;f++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=f===r?i:s;_.toArray(l,p),p+=3,_.toArray(l,p),p+=3,_.toArray(l,p),p+=3,_.toArray(l,p),p+=3}const u=new un;u.setAttribute("position",new Le(c,3)),u.setAttribute("color",new Le(l,3));const h=new Sh({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Cp extends Hi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ru(n,t,e,i){const s=wp(i);switch(e){case ch:return n*t;case Il:return n*t/s.components*s.byteLength;case Ol:return n*t/s.components*s.byteLength;case hh:return n*t*2/s.components*s.byteLength;case Nl:return n*t*2/s.components*s.byteLength;case uh:return n*t*3/s.components*s.byteLength;case xn:return n*t*4/s.components*s.byteLength;case Ul:return n*t*4/s.components*s.byteLength;case Xr:case qr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Yr:case $r:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case za:case Ga:return Math.max(n,16)*Math.max(t,8)/4;case ka:case Va:return Math.max(n,8)*Math.max(t,8)/2;case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ja:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Za:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case tl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case el:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case nl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case il:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case sl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case rl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ol:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case al:case ll:case cl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ul:case hl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case dl:case fl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wp(n){switch(n){case Pn:case rh:return{byteLength:1,components:1};case js:case oh:case rr:return{byteLength:2,components:1};case Ll:case Dl:return{byteLength:2,components:4};case Oi:case Pl:case wn:return{byteLength:4,components:1};case ah:case lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rl);function Dh(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Rp(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lp=`#ifdef USE_ALPHAHASH
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
#endif`,Dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Op=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Up=`#ifdef USE_AOMAP
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
#endif`,Fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bp=`#ifdef USE_BATCHING
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
#endif`,Hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gp=`#ifdef USE_IRIDESCENCE
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
#endif`,Wp=`#ifdef USE_BUMPMAP
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
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qp=`#define PI 3.141592653589793
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
} // validated`,tm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,em=`vec3 transformedNormal = objectNormal;
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
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,om="gl_FragColor = linearToOutputTexel( gl_FragColor );",am=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
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
#endif`,fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_m=`#ifdef USE_GRADIENTMAP
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
}`,xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mm=`uniform bool receiveShadow;
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
#endif`,Sm=`#ifdef USE_ENVMAP
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
#endif`,Em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cm=`PhysicalMaterial material;
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
#endif`,wm=`struct PhysicalMaterial {
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
}`,Rm=`
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
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hm=`#if defined( USE_POINTS_UV )
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
#endif`,km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xm=`#ifdef USE_MORPHTARGETS
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
#endif`,qm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$m=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jm=`#ifdef USE_NORMALMAP
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
#endif`,Qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pg=`float getShadowMask() {
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
}`,mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gg=`#ifdef USE_SKINNING
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
#endif`,_g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xg=`#ifdef USE_SKINNING
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
#endif`,vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eg=`#ifdef USE_TRANSMISSION
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
#endif`,bg=`#ifdef USE_TRANSMISSION
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pg=`uniform sampler2D t2D;
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
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`#include <common>
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
}`,Ug=`#if DEPTH_PACKING == 3200
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
}`,Fg=`#define DISTANCE
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
}`,Bg=`#define DISTANCE
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
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`uniform float scale;
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
}`,Vg=`uniform vec3 diffuse;
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
}`,Gg=`#include <common>
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
}`,Wg=`uniform vec3 diffuse;
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
}`,Xg=`#define LAMBERT
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
}`,qg=`#define LAMBERT
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
}`,Yg=`#define MATCAP
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
}`,$g=`#define MATCAP
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
}`,Kg=`#define NORMAL
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
}`,jg=`#define NORMAL
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
}`,Zg=`#define PHONG
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
}`,Jg=`#define PHONG
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
}`,Qg=`#define STANDARD
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
}`,t_=`#define STANDARD
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
}`,e_=`#define TOON
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
}`,n_=`#define TOON
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
}`,i_=`uniform float size;
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
}`,s_=`uniform vec3 diffuse;
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
}`,r_=`#include <common>
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
}`,o_=`uniform vec3 color;
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
}`,a_=`uniform float rotation;
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
}`,l_=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Pp,alphahash_pars_fragment:Lp,alphamap_fragment:Dp,alphamap_pars_fragment:Ip,alphatest_fragment:Op,alphatest_pars_fragment:Np,aomap_fragment:Up,aomap_pars_fragment:Fp,batching_pars_vertex:Bp,batching_vertex:Hp,begin_vertex:kp,beginnormal_vertex:zp,bsdfs:Vp,iridescence_fragment:Gp,bumpmap_pars_fragment:Wp,clipping_planes_fragment:Xp,clipping_planes_pars_fragment:qp,clipping_planes_pars_vertex:Yp,clipping_planes_vertex:$p,color_fragment:Kp,color_pars_fragment:jp,color_pars_vertex:Zp,color_vertex:Jp,common:Qp,cube_uv_reflection_fragment:tm,defaultnormal_vertex:em,displacementmap_pars_vertex:nm,displacementmap_vertex:im,emissivemap_fragment:sm,emissivemap_pars_fragment:rm,colorspace_fragment:om,colorspace_pars_fragment:am,envmap_fragment:lm,envmap_common_pars_fragment:cm,envmap_pars_fragment:um,envmap_pars_vertex:hm,envmap_physical_pars_fragment:Sm,envmap_vertex:dm,fog_vertex:fm,fog_pars_vertex:pm,fog_fragment:mm,fog_pars_fragment:gm,gradientmap_pars_fragment:_m,lightmap_pars_fragment:xm,lights_lambert_fragment:vm,lights_lambert_pars_fragment:ym,lights_pars_begin:Mm,lights_toon_fragment:Em,lights_toon_pars_fragment:bm,lights_phong_fragment:Tm,lights_phong_pars_fragment:Am,lights_physical_fragment:Cm,lights_physical_pars_fragment:wm,lights_fragment_begin:Rm,lights_fragment_maps:Pm,lights_fragment_end:Lm,logdepthbuf_fragment:Dm,logdepthbuf_pars_fragment:Im,logdepthbuf_pars_vertex:Om,logdepthbuf_vertex:Nm,map_fragment:Um,map_pars_fragment:Fm,map_particle_fragment:Bm,map_particle_pars_fragment:Hm,metalnessmap_fragment:km,metalnessmap_pars_fragment:zm,morphinstance_vertex:Vm,morphcolor_vertex:Gm,morphnormal_vertex:Wm,morphtarget_pars_vertex:Xm,morphtarget_vertex:qm,normal_fragment_begin:Ym,normal_fragment_maps:$m,normal_pars_fragment:Km,normal_pars_vertex:jm,normal_vertex:Zm,normalmap_pars_fragment:Jm,clearcoat_normal_fragment_begin:Qm,clearcoat_normal_fragment_maps:tg,clearcoat_pars_fragment:eg,iridescence_pars_fragment:ng,opaque_fragment:ig,packing:sg,premultiplied_alpha_fragment:rg,project_vertex:og,dithering_fragment:ag,dithering_pars_fragment:lg,roughnessmap_fragment:cg,roughnessmap_pars_fragment:ug,shadowmap_pars_fragment:hg,shadowmap_pars_vertex:dg,shadowmap_vertex:fg,shadowmask_pars_fragment:pg,skinbase_vertex:mg,skinning_pars_vertex:gg,skinning_vertex:_g,skinnormal_vertex:xg,specularmap_fragment:vg,specularmap_pars_fragment:yg,tonemapping_fragment:Mg,tonemapping_pars_fragment:Sg,transmission_fragment:Eg,transmission_pars_fragment:bg,uv_pars_fragment:Tg,uv_pars_vertex:Ag,uv_vertex:Cg,worldpos_vertex:wg,background_vert:Rg,background_frag:Pg,backgroundCube_vert:Lg,backgroundCube_frag:Dg,cube_vert:Ig,cube_frag:Og,depth_vert:Ng,depth_frag:Ug,distanceRGBA_vert:Fg,distanceRGBA_frag:Bg,equirect_vert:Hg,equirect_frag:kg,linedashed_vert:zg,linedashed_frag:Vg,meshbasic_vert:Gg,meshbasic_frag:Wg,meshlambert_vert:Xg,meshlambert_frag:qg,meshmatcap_vert:Yg,meshmatcap_frag:$g,meshnormal_vert:Kg,meshnormal_frag:jg,meshphong_vert:Zg,meshphong_frag:Jg,meshphysical_vert:Qg,meshphysical_frag:t_,meshtoon_vert:e_,meshtoon_frag:n_,points_vert:i_,points_frag:s_,shadow_vert:r_,shadow_frag:o_,sprite_vert:a_,sprite_frag:l_},ot={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Sn={basic:{uniforms:ze([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:ze([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:ze([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:ze([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:ze([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:ze([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:ze([ot.points,ot.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:ze([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:ze([ot.common,ot.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:ze([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:ze([ot.sprite,ot.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:ze([ot.common,ot.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:ze([ot.lights,ot.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Sn.physical={uniforms:ze([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Hr={r:0,b:0,g:0},Si=new vn,c_=new se;function u_(n,t,e,i,s,r,o){const a=new Pt(0);let c=r===!0?0:1,l,u,h=null,f=0,p=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function _(b){let S=!1;const w=g(b);w===null?d(a,c):w&&w.isColor&&(d(w,1),S=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,S){const w=g(S);w&&(w.isCubeTexture||w.mapping===vo)?(u===void 0&&(u=new Ue(new or(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Es(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Si.copy(S.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(c_.makeRotationFromEuler(Si)),u.material.toneMapped=jt.getTransfer(w.colorSpace)!==ee,(h!==w||f!==w.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Ue(new Eo(2,2),new di({name:"BackgroundMaterial",uniforms:Es(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=jt.getTransfer(w.colorSpace)!==ee,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=w,f=w.version,p=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function d(b,S){b.getRGB(Hr,xh(n)),i.buffers.color.setClear(Hr.r,Hr.g,Hr.b,S,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),c=S,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,d(a,c)},render:_,addToRenderList:m,dispose:E}}function h_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(M,C,O,B,V){let W=!1;const z=h(B,O,C);r!==z&&(r=z,l(r.object)),W=p(M,B,O,V),W&&g(M,B,O,V),V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,S(M,C,O,B),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,C,O){const B=O.wireframe===!0;let V=i[M.id];V===void 0&&(V={},i[M.id]=V);let W=V[C.id];W===void 0&&(W={},V[C.id]=W);let z=W[B];return z===void 0&&(z=f(c()),W[B]=z),z}function f(M){const C=[],O=[],B=[];for(let V=0;V<e;V++)C[V]=0,O[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:O,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,C,O,B){const V=r.attributes,W=C.attributes;let z=0;const $=O.getAttributes();for(const G in $)if($[G].location>=0){const it=V[G];let Et=W[G];if(Et===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Et=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Et=M.instanceColor)),it===void 0||it.attribute!==Et||Et&&it.data!==Et.data)return!0;z++}return r.attributesNum!==z||r.index!==B}function g(M,C,O,B){const V={},W=C.attributes;let z=0;const $=O.getAttributes();for(const G in $)if($[G].location>=0){let it=W[G];it===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(it=M.instanceColor));const Et={};Et.attribute=it,it&&it.data&&(Et.data=it.data),V[G]=Et,z++}r.attributes=V,r.attributesNum=z,r.index=B}function _(){const M=r.newAttributes;for(let C=0,O=M.length;C<O;C++)M[C]=0}function m(M){d(M,0)}function d(M,C){const O=r.newAttributes,B=r.enabledAttributes,V=r.attributeDivisors;O[M]=1,B[M]===0&&(n.enableVertexAttribArray(M),B[M]=1),V[M]!==C&&(n.vertexAttribDivisor(M,C),V[M]=C)}function E(){const M=r.newAttributes,C=r.enabledAttributes;for(let O=0,B=C.length;O<B;O++)C[O]!==M[O]&&(n.disableVertexAttribArray(O),C[O]=0)}function b(M,C,O,B,V,W,z){z===!0?n.vertexAttribIPointer(M,C,O,V,W):n.vertexAttribPointer(M,C,O,B,V,W)}function S(M,C,O,B){_();const V=B.attributes,W=O.getAttributes(),z=C.defaultAttributeValues;for(const $ in W){const G=W[$];if(G.location>=0){let nt=V[$];if(nt===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor)),nt!==void 0){const it=nt.normalized,Et=nt.itemSize,Ft=t.get(nt);if(Ft===void 0)continue;const Jt=Ft.buffer,re=Ft.type,qt=Ft.bytesPerElement,q=re===n.INT||re===n.UNSIGNED_INT||nt.gpuType===Pl;if(nt.isInterleavedBufferAttribute){const Z=nt.data,pt=Z.stride,Nt=nt.offset;if(Z.isInstancedInterleavedBuffer){for(let Tt=0;Tt<G.locationSize;Tt++)d(G.location+Tt,Z.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Tt=0;Tt<G.locationSize;Tt++)m(G.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let Tt=0;Tt<G.locationSize;Tt++)b(G.location+Tt,Et/G.locationSize,re,it,pt*qt,(Nt+Et/G.locationSize*Tt)*qt,q)}else{if(nt.isInstancedBufferAttribute){for(let Z=0;Z<G.locationSize;Z++)d(G.location+Z,nt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Z=0;Z<G.locationSize;Z++)m(G.location+Z);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let Z=0;Z<G.locationSize;Z++)b(G.location+Z,Et/G.locationSize,re,it,Et*qt,Et/G.locationSize*Z*qt,q)}}else if(z!==void 0){const it=z[$];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(G.location,it);break;case 3:n.vertexAttrib3fv(G.location,it);break;case 4:n.vertexAttrib4fv(G.location,it);break;default:n.vertexAttrib1fv(G.location,it)}}}}E()}function w(){L();for(const M in i){const C=i[M];for(const O in C){const B=C[O];for(const V in B)u(B[V].object),delete B[V];delete C[O]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const C=i[M.id];for(const O in C){const B=C[O];for(const V in B)u(B[V].object),delete B[V];delete C[O]}delete i[M.id]}function T(M){for(const C in i){const O=i[C];if(O[M.id]===void 0)continue;const B=O[M.id];for(const V in B)u(B[V].object),delete B[V];delete O[M.id]}}function L(){v(),o=!0,r!==s&&(r=s,l(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:v,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function d_(n,t,e){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,i,1)}function c(l,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function f_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==xn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const L=T===rr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Pn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==wn&&!L)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:w,maxSamples:R}}function p_(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Bn,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const E=r?0:i,b=E*4;let S=d.clippingState||null;c.value=S,S=u(g,f,b,p);for(let w=0;w!==b;++w)S[w]=e[w];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=p+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,S=p;b!==_;++b,S+=4)o.copy(h[b]).applyMatrix4(E,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function m_(n){let t=new WeakMap;function e(o,a){return a===Ua?o.mapping=ys:a===Fa&&(o.mapping=Ms),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ua||a===Fa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new cp(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const hs=4,ou=[.125,.215,.35,.446,.526,.582],Ai=20,ha=new Rh,au=new Pt;let da=null,fa=0,pa=0,ma=!1;const bi=(1+Math.sqrt(5))/2,ls=1/bi,lu=[new D(-bi,ls,0),new D(bi,ls,0),new D(-ls,0,bi),new D(ls,0,bi),new D(0,bi,-ls),new D(0,bi,ls),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],g_=new D;class cu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=g_}=r;da=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),pa=this._renderer.getActiveMipmapLevel(),ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(da,fa,pa),this._renderer.xr.enabled=ma,t.scissorTest=!1,kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ys||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),da=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),pa=this._renderer.getActiveMipmapLevel(),ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:rr,format:xn,colorSpace:Ss,depthBuffer:!1},s=uu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uu(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=__(r)),this._blurMaterial=x_(r,t,e)}return s}_compileMaterial(t){const e=new Ue(this._lodPlanes[0],t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,i,s,r){const c=new on(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(au),h.toneMapping=li,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const _=new Li({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),m=new Ue(new or,_);let d=!1;const E=t.background;E?E.isColor&&(_.color.copy(E),t.background=null,d=!0):(_.color.copy(au),d=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[b],r.y,r.z)):S===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[b]));const w=this._cubeSize;kr(s,S*w,b>2?w:0,w,w),h.setRenderTarget(s),d&&h.render(m,c),h.render(t,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=E}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ys||t.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ue(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;kr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,ha)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=lu[(s-r-1)%lu.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ue(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ai-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Ai;m>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);const d=[];let E=0;for(let T=0;T<Ai;++T){const L=T/_,v=Math.exp(-L*L/2);d.push(v),T===0?E+=v:T<m&&(E+=2*v)}for(let T=0;T<d.length;T++)d[T]=d[T]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;const S=this._sizeLods[s],w=3*S*(s>b-hs?s-b+hs:0),R=4*(this._cubeSize-S);kr(e,w,R,3*S,2*S),c.setRenderTarget(e),c.render(h,ha)}}function __(n){const t=[],e=[],i=[];let s=n;const r=n-hs+1+ou.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-hs?c=ou[o-n+hs-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,E=new Float32Array(_*g*p),b=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let R=0;R<p;R++){const T=R%3*2/3-1,L=R>2?0:-1,v=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];E.set(v,_*g*R),b.set(f,m*g*R);const M=[R,R,R,R,R,R];S.set(M,d*g*R)}const w=new un;w.setAttribute("position",new cn(E,_)),w.setAttribute("uv",new cn(b,m)),w.setAttribute("faceIndex",new cn(S,d)),t.push(w),s>hs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function uu(n,t,e){const i=new Ni(n,t,e);return i.texture.mapping=vo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function x_(n,t,e){const i=new Float32Array(Ai),s=new D(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function hu(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function du(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Vl(){return`

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
	`}function v_(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ua||c===Fa,u=c===ys||c===Ms;if(l||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new cu(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new cu(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function y_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&tr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function M_(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const p in f)t.update(f[p],n.ARRAY_BUFFER)}function l(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let b=0,S=E.length;b<S;b+=3){const w=E[b+0],R=E[b+1],T=E[b+2];f.push(w,R,R,T,T,w)}}else if(g!==void 0){const E=g.array;_=g.version;for(let b=0,S=E.length/3-1;b<S;b+=3){const w=b+0,R=b+1,T=b+2;f.push(w,R,R,T,T,w)}}else return;const m=new(fh(f)?_h:gh)(f,1);m.version=_;const d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function S_(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(i,p,r,f*o),e.update(p,i,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),e.update(p,i,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,i,1)}function h(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,_,0,g);let d=0;for(let E=0;E<g;E++)d+=p[E]*_[E];e.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function E_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function b_(n,t,e){const i=new WeakMap,s=new ge;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let M=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let w=a.attributes.position.count*S,R=1;w>t.maxTextureSize&&(R=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const T=new Float32Array(w*R*4*h),L=new ph(T,w,R,h);L.type=wn,L.needsUpdate=!0;const v=S*4;for(let C=0;C<h;C++){const O=d[C],B=E[C],V=b[C],W=w*R*4*C;for(let z=0;z<O.count;z++){const $=z*v;g===!0&&(s.fromBufferAttribute(O,z),T[W+$+0]=s.x,T[W+$+1]=s.y,T[W+$+2]=s.z,T[W+$+3]=0),_===!0&&(s.fromBufferAttribute(B,z),T[W+$+4]=s.x,T[W+$+5]=s.y,T[W+$+6]=s.z,T[W+$+7]=0),m===!0&&(s.fromBufferAttribute(V,z),T[W+$+8]=s.x,T[W+$+9]=s.y,T[W+$+10]=s.z,T[W+$+11]=V.itemSize===4?s.w:1)}}f={count:h,texture:L,size:new Ct(w,R)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function T_(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const Ih=new Be,fu=new bh(1,1),Oh=new ph,Nh=new qf,Uh=new yh,pu=[],mu=[],gu=new Float32Array(16),_u=new Float32Array(9),xu=new Float32Array(4);function ws(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=pu[s];if(r===void 0&&(r=new Float32Array(s),pu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Te(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ae(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function bo(n,t){let e=mu[t];e===void 0&&(e=new Int32Array(t),mu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function A_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function C_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2fv(this.addr,t),Ae(e,t)}}function w_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;n.uniform3fv(this.addr,t),Ae(e,t)}}function R_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4fv(this.addr,t),Ae(e,t)}}function P_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;xu.set(i),n.uniformMatrix2fv(this.addr,!1,xu),Ae(e,i)}}function L_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;_u.set(i),n.uniformMatrix3fv(this.addr,!1,_u),Ae(e,i)}}function D_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,i))return;gu.set(i),n.uniformMatrix4fv(this.addr,!1,gu),Ae(e,i)}}function I_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function O_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2iv(this.addr,t),Ae(e,t)}}function N_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3iv(this.addr,t),Ae(e,t)}}function U_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4iv(this.addr,t),Ae(e,t)}}function F_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function B_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2uiv(this.addr,t),Ae(e,t)}}function H_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3uiv(this.addr,t),Ae(e,t)}}function k_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4uiv(this.addr,t),Ae(e,t)}}function z_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(fu.compareFunction=dh,r=fu):r=Ih,e.setTexture2D(t||r,s)}function V_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Nh,s)}function G_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Uh,s)}function W_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Oh,s)}function X_(n){switch(n){case 5126:return A_;case 35664:return C_;case 35665:return w_;case 35666:return R_;case 35674:return P_;case 35675:return L_;case 35676:return D_;case 5124:case 35670:return I_;case 35667:case 35671:return O_;case 35668:case 35672:return N_;case 35669:case 35673:return U_;case 5125:return F_;case 36294:return B_;case 36295:return H_;case 36296:return k_;case 35678:case 36198:case 36298:case 36306:case 35682:return z_;case 35679:case 36299:case 36307:return V_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return W_}}function q_(n,t){n.uniform1fv(this.addr,t)}function Y_(n,t){const e=ws(t,this.size,2);n.uniform2fv(this.addr,e)}function $_(n,t){const e=ws(t,this.size,3);n.uniform3fv(this.addr,e)}function K_(n,t){const e=ws(t,this.size,4);n.uniform4fv(this.addr,e)}function j_(n,t){const e=ws(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Z_(n,t){const e=ws(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function J_(n,t){const e=ws(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Q_(n,t){n.uniform1iv(this.addr,t)}function t0(n,t){n.uniform2iv(this.addr,t)}function e0(n,t){n.uniform3iv(this.addr,t)}function n0(n,t){n.uniform4iv(this.addr,t)}function i0(n,t){n.uniform1uiv(this.addr,t)}function s0(n,t){n.uniform2uiv(this.addr,t)}function r0(n,t){n.uniform3uiv(this.addr,t)}function o0(n,t){n.uniform4uiv(this.addr,t)}function a0(n,t,e){const i=this.cache,s=t.length,r=bo(e,s);Te(i,r)||(n.uniform1iv(this.addr,r),Ae(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ih,r[o])}function l0(n,t,e){const i=this.cache,s=t.length,r=bo(e,s);Te(i,r)||(n.uniform1iv(this.addr,r),Ae(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Nh,r[o])}function c0(n,t,e){const i=this.cache,s=t.length,r=bo(e,s);Te(i,r)||(n.uniform1iv(this.addr,r),Ae(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Uh,r[o])}function u0(n,t,e){const i=this.cache,s=t.length,r=bo(e,s);Te(i,r)||(n.uniform1iv(this.addr,r),Ae(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Oh,r[o])}function h0(n){switch(n){case 5126:return q_;case 35664:return Y_;case 35665:return $_;case 35666:return K_;case 35674:return j_;case 35675:return Z_;case 35676:return J_;case 5124:case 35670:return Q_;case 35667:case 35671:return t0;case 35668:case 35672:return e0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return s0;case 36295:return r0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return u0}}class d0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=X_(e.type)}}class f0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=h0(e.type)}}class p0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const ga=/(\w+)(\])?(\[|\.)?/g;function vu(n,t){n.seq.push(t),n.map[t.id]=t}function m0(n,t,e){const i=n.name,s=i.length;for(ga.lastIndex=0;;){const r=ga.exec(i),o=ga.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){vu(e,l===void 0?new d0(a,n,t):new f0(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new p0(a),vu(e,h)),e=h}}}class jr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);m0(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function yu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const g0=37297;let _0=0;function x0(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Mu=new kt;function v0(n){jt._getMatrix(Mu,jt.workingColorSpace,n);const t=`mat3( ${Mu.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(n)){case Qr:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Su(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+x0(n.getShaderSource(t),a)}else return r}function y0(n,t){const e=v0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function M0(n,t){let e;switch(t){case xf:e="Linear";break;case vf:e="Reinhard";break;case yf:e="Cineon";break;case Mf:e="ACESFilmic";break;case Ef:e="AgX";break;case bf:e="Neutral";break;case Sf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zr=new D;function S0(){jt.getLuminanceCoefficients(zr);const n=zr.x.toFixed(4),t=zr.y.toFixed(4),e=zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function b0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function T0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Gs(n){return n!==""}function Eu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const A0=/^[ \t]*#include +<([\w\d./]+)>/gm;function xl(n){return n.replace(A0,w0)}const C0=new Map;function w0(n,t){let e=Vt[t];if(e===void 0){const i=C0.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return xl(e)}const R0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tu(n){return n.replace(R0,P0)}function P0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Au(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function L0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ih?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===jd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function D0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ys:case Ms:t="ENVMAP_TYPE_CUBE";break;case vo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function I0(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Ms&&(t="ENVMAP_MODE_REFRACTION"),t}function O0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case xo:t="ENVMAP_BLENDING_MULTIPLY";break;case gf:t="ENVMAP_BLENDING_MIX";break;case _f:t="ENVMAP_BLENDING_ADD";break}return t}function N0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function U0(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=L0(e),l=D0(e),u=I0(e),h=O0(e),f=N0(e),p=E0(e),g=b0(r),_=s.createProgram();let m,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gs).join(`
`),d.length>0&&(d+=`
`)):(m=[Au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),d=[Au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?Vt.tonemapping_pars_fragment:"",e.toneMapping!==li?M0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,y0("linearToOutputTexel",e.outputColorSpace),S0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),o=xl(o),o=Eu(o,e),o=bu(o,e),a=xl(a),a=Eu(a,e),a=bu(a,e),o=Tu(o),a=Tu(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=E+m+o,S=E+d+a,w=yu(s,s.VERTEX_SHADER,b),R=yu(s,s.FRAGMENT_SHADER,S);s.attachShader(_,w),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(C){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(_)||"",B=s.getShaderInfoLog(w)||"",V=s.getShaderInfoLog(R)||"",W=O.trim(),z=B.trim(),$=V.trim();let G=!0,nt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,w,R);else{const it=Su(s,w,"vertex"),Et=Su(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+W+`
`+it+`
`+Et)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(z===""||$==="")&&(nt=!1);nt&&(C.diagnostics={runnable:G,programLog:W,vertexShader:{log:z,prefix:m},fragmentShader:{log:$,prefix:d}})}s.deleteShader(w),s.deleteShader(R),L=new jr(s,_),v=T0(s,_)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,g0)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=R,this}let F0=0;class B0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new H0(t),e.set(t,i)),i}}class H0{constructor(t){this.id=F0++,this.code=t,this.usedTimes=0}}function k0(n,t,e,i,s,r,o){const a=new Hl,c=new B0,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,M,C,O,B){const V=O.fog,W=B.geometry,z=v.isMeshStandardMaterial?O.environment:null,$=(v.isMeshStandardMaterial?e:t).get(v.envMap||z),G=$&&$.mapping===vo?$.image.height:null,nt=g[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const it=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Et=it!==void 0?it.length:0;let Ft=0;W.morphAttributes.position!==void 0&&(Ft=1),W.morphAttributes.normal!==void 0&&(Ft=2),W.morphAttributes.color!==void 0&&(Ft=3);let Jt,re,qt,q;if(nt){const Zt=Sn[nt];Jt=Zt.vertexShader,re=Zt.fragmentShader}else Jt=v.vertexShader,re=v.fragmentShader,c.update(v),qt=c.getVertexShaderID(v),q=c.getFragmentShaderID(v);const Z=n.getRenderTarget(),pt=n.state.buffers.depth.getReversed(),Nt=B.isInstancedMesh===!0,Tt=B.isBatchedMesh===!0,Yt=!!v.map,De=!!v.matcap,P=!!$,ue=!!v.aoMap,Bt=!!v.lightMap,Dt=!!v.bumpMap,_t=!!v.normalMap,he=!!v.displacementMap,xt=!!v.emissiveMap,zt=!!v.metalnessMap,Ce=!!v.roughnessMap,xe=v.anisotropy>0,A=v.clearcoat>0,x=v.dispersion>0,F=v.iridescence>0,Y=v.sheen>0,j=v.transmission>0,X=xe&&!!v.anisotropyMap,bt=A&&!!v.clearcoatMap,st=A&&!!v.clearcoatNormalMap,vt=A&&!!v.clearcoatRoughnessMap,yt=F&&!!v.iridescenceMap,tt=F&&!!v.iridescenceThicknessMap,ht=Y&&!!v.sheenColorMap,Lt=Y&&!!v.sheenRoughnessMap,Mt=!!v.specularMap,lt=!!v.specularColorMap,Ht=!!v.specularIntensityMap,I=j&&!!v.transmissionMap,et=j&&!!v.thicknessMap,rt=!!v.gradientMap,ft=!!v.alphaMap,J=v.alphaTest>0,K=!!v.alphaHash,gt=!!v.extensions;let Ut=li;v.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ut=n.toneMapping);const ae={shaderID:nt,shaderType:v.type,shaderName:v.name,vertexShader:Jt,fragmentShader:re,defines:v.defines,customVertexShaderID:qt,customFragmentShaderID:q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Tt,batchingColor:Tt&&B._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&B.instanceColor!==null,instancingMorph:Nt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ss,alphaToCoverage:!!v.alphaToCoverage,map:Yt,matcap:De,envMap:P,envMapMode:P&&$.mapping,envMapCubeUVHeight:G,aoMap:ue,lightMap:Bt,bumpMap:Dt,normalMap:_t,displacementMap:f&&he,emissiveMap:xt,normalMapObjectSpace:_t&&v.normalMapType===wf,normalMapTangentSpace:_t&&v.normalMapType===Fl,metalnessMap:zt,roughnessMap:Ce,anisotropy:xe,anisotropyMap:X,clearcoat:A,clearcoatMap:bt,clearcoatNormalMap:st,clearcoatRoughnessMap:vt,dispersion:x,iridescence:F,iridescenceMap:yt,iridescenceThicknessMap:tt,sheen:Y,sheenColorMap:ht,sheenRoughnessMap:Lt,specularMap:Mt,specularColorMap:lt,specularIntensityMap:Ht,transmission:j,transmissionMap:I,thicknessMap:et,gradientMap:rt,opaque:v.transparent===!1&&v.blending===ms&&v.alphaToCoverage===!1,alphaMap:ft,alphaTest:J,alphaHash:K,combine:v.combine,mapUv:Yt&&_(v.map.channel),aoMapUv:ue&&_(v.aoMap.channel),lightMapUv:Bt&&_(v.lightMap.channel),bumpMapUv:Dt&&_(v.bumpMap.channel),normalMapUv:_t&&_(v.normalMap.channel),displacementMapUv:he&&_(v.displacementMap.channel),emissiveMapUv:xt&&_(v.emissiveMap.channel),metalnessMapUv:zt&&_(v.metalnessMap.channel),roughnessMapUv:Ce&&_(v.roughnessMap.channel),anisotropyMapUv:X&&_(v.anisotropyMap.channel),clearcoatMapUv:bt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:st&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&_(v.sheenRoughnessMap.channel),specularMapUv:Mt&&_(v.specularMap.channel),specularColorMapUv:lt&&_(v.specularColorMap.channel),specularIntensityMapUv:Ht&&_(v.specularIntensityMap.channel),transmissionMapUv:I&&_(v.transmissionMap.channel),thicknessMapUv:et&&_(v.thicknessMap.channel),alphaMapUv:ft&&_(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(_t||xe),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(Yt||ft),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pt,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Ft,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Yt&&v.map.isVideoTexture===!0&&jt.getTransfer(v.map.colorSpace)===ee,decodeVideoTextureEmissive:xt&&v.emissiveMap.isVideoTexture===!0&&jt.getTransfer(v.emissiveMap.colorSpace)===ee,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Hn,flipSided:v.side===Ve,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:gt&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&v.extensions.multiDraw===!0||Tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function d(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)M.push(C),M.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(E(M,v),b(M,v),M.push(n.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function E(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function b(v,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),v.push(a.mask)}function S(v){const M=g[v.type];let C;if(M){const O=Sn[M];C=rp.clone(O.uniforms)}else C=v.uniforms;return C}function w(v,M){let C;for(let O=0,B=u.length;O<B;O++){const V=u[O];if(V.cacheKey===M){C=V,++C.usedTimes;break}}return C===void 0&&(C=new U0(n,M,v,r),u.push(C)),C}function R(v){if(--v.usedTimes===0){const M=u.indexOf(v);u[M]=u[u.length-1],u.pop(),v.destroy()}}function T(v){c.remove(v)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:w,releaseProgram:R,releaseShaderCache:T,programs:u,dispose:L}}function z0(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function V0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Cu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function wu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,p,g,_,m){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),t++,d}function a(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(h,f){e.length>1&&e.sort(h||V0),i.length>1&&i.sort(f||Cu),s.length>1&&s.sort(f||Cu)}function u(){for(let h=t,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function G0(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new wu,n.set(i,[o])):s>=r.length?(o=new wu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function W0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Pt};break;case"SpotLight":e={position:new D,direction:new D,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function X0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let q0=0;function Y0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function $0(n){const t=new W0,e=X0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new D);const s=new D,r=new se,o=new se;function a(l){let u=0,h=0,f=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,E=0,b=0,S=0,w=0,R=0,T=0;l.sort(Y0);for(let v=0,M=l.length;v<M;v++){const C=l[v],O=C.color,B=C.intensity,V=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=O.r*B,h+=O.g*B,f+=O.b*B;else if(C.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(C.sh.coefficients[z],B);T++}else if(C.isDirectionalLight){const z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const $=C.shadow,G=e.get(C);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=C.shadow.matrix,E++}i.directional[p]=z,p++}else if(C.isSpotLight){const z=t.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(O).multiplyScalar(B),z.distance=V,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,i.spot[_]=z;const $=C.shadow;if(C.map&&(i.spotLightMap[w]=C.map,w++,$.updateMatrices(C),C.castShadow&&R++),i.spotLightMatrix[_]=$.matrix,C.castShadow){const G=e.get(C);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=W,S++}_++}else if(C.isRectAreaLight){const z=t.get(C);z.color.copy(O).multiplyScalar(B),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=z,m++}else if(C.isPointLight){const z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const $=C.shadow,G=e.get(C);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=C.shadow.matrix,b++}i.point[g]=z,g++}else if(C.isHemisphereLight){const z=t.get(C);z.skyColor.copy(C.color).multiplyScalar(B),z.groundColor.copy(C.groundColor).multiplyScalar(B),i.hemi[d]=z,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==E||L.numPointShadows!==b||L.numSpotShadows!==S||L.numSpotMaps!==w||L.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=S+w-R,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=T,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=E,L.numPointShadows=b,L.numSpotShadows=S,L.numSpotMaps=w,L.numLightProbes=T,i.version=q0++)}function c(l,u){let h=0,f=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,E=l.length;d<E;d++){const b=l[d];if(b.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(b.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function Ru(n){const t=new $0(n),e=[],i=[];function s(u){l.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function K0(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ru(n),t.set(s,[a])):r>=o.length?(a=new Ru(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const j0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z0=`uniform sampler2D shadow_pass;
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
}`;function J0(n,t,e){let i=new zl;const s=new Ct,r=new Ct,o=new ge,a=new yp({depthPacking:Cf}),c=new Mp,l={},u=e.maxTextureSize,h={[hi]:Ve,[Ve]:hi,[Hn]:Hn},f=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:j0,fragmentShader:Z0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new un;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ue(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ih;let d=this.type;this.render=function(R,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const v=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),O=n.state;O.setBlending(ai),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=d!==Fn&&this.type===Fn,V=d===Fn&&this.type!==Fn;for(let W=0,z=R.length;W<z;W++){const $=R[W],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const nt=G.getFrameExtents();if(s.multiply(nt),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/nt.x),s.x=r.x*nt.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/nt.y),s.y=r.y*nt.y,G.mapSize.y=r.y)),G.map===null||B===!0||V===!0){const Et=this.type!==Fn?{minFilter:Je,magFilter:Je}:{};G.map!==null&&G.map.dispose(),G.map=new Ni(s.x,s.y,Et),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const it=G.getViewportCount();for(let Et=0;Et<it;Et++){const Ft=G.getViewport(Et);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),O.viewport(o),G.updateMatrices($,Et),i=G.getFrustum(),S(T,L,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===Fn&&E(G,L),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(v,M,C)};function E(R,T){const L=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ni(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(T,null,L,f,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(T,null,L,p,_,null)}function b(R,T,L,v){let M=null;const C=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)M=C;else if(M=L.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const O=M.uuid,B=T.uuid;let V=l[O];V===void 0&&(V={},l[O]=V);let W=V[B];W===void 0&&(W=M.clone(),V[B]=W,T.addEventListener("dispose",w)),M=W}if(M.visible=T.visible,M.wireframe=T.wireframe,v===Fn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:h[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=n.properties.get(M);O.light=L}return M}function S(R,T,L,v,M){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Fn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const B=t.update(R),V=R.material;if(Array.isArray(V)){const W=B.groups;for(let z=0,$=W.length;z<$;z++){const G=W[z],nt=V[G.materialIndex];if(nt&&nt.visible){const it=b(R,nt,v,M);R.onBeforeShadow(n,R,T,L,B,it,G),n.renderBufferDirect(L,null,B,it,R,G),R.onAfterShadow(n,R,T,L,B,it,G)}}}else if(V.visible){const W=b(R,V,v,M);R.onBeforeShadow(n,R,T,L,B,W,null),n.renderBufferDirect(L,null,B,W,R,null),R.onAfterShadow(n,R,T,L,B,W,null)}}const O=R.children;for(let B=0,V=O.length;B<V;B++)S(O[B],T,L,v,M)}function w(R){R.target.removeEventListener("dispose",w);for(const L in l){const v=l[L],M=R.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}const Q0={[Ra]:Pa,[La]:Oa,[Da]:Na,[vs]:Ia,[Pa]:Ra,[Oa]:La,[Na]:Da,[Ia]:vs};function tx(n,t){function e(){let I=!1;const et=new ge;let rt=null;const ft=new ge(0,0,0,0);return{setMask:function(J){rt!==J&&!I&&(n.colorMask(J,J,J,J),rt=J)},setLocked:function(J){I=J},setClear:function(J,K,gt,Ut,ae){ae===!0&&(J*=Ut,K*=Ut,gt*=Ut),et.set(J,K,gt,Ut),ft.equals(et)===!1&&(n.clearColor(J,K,gt,Ut),ft.copy(et))},reset:function(){I=!1,rt=null,ft.set(-1,0,0,0)}}}function i(){let I=!1,et=!1,rt=null,ft=null,J=null;return{setReversed:function(K){if(et!==K){const gt=t.get("EXT_clip_control");K?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),et=K;const Ut=J;J=null,this.setClear(Ut)}},getReversed:function(){return et},setTest:function(K){K?Z(n.DEPTH_TEST):pt(n.DEPTH_TEST)},setMask:function(K){rt!==K&&!I&&(n.depthMask(K),rt=K)},setFunc:function(K){if(et&&(K=Q0[K]),ft!==K){switch(K){case Ra:n.depthFunc(n.NEVER);break;case Pa:n.depthFunc(n.ALWAYS);break;case La:n.depthFunc(n.LESS);break;case vs:n.depthFunc(n.LEQUAL);break;case Da:n.depthFunc(n.EQUAL);break;case Ia:n.depthFunc(n.GEQUAL);break;case Oa:n.depthFunc(n.GREATER);break;case Na:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=K}},setLocked:function(K){I=K},setClear:function(K){J!==K&&(et&&(K=1-K),n.clearDepth(K),J=K)},reset:function(){I=!1,rt=null,ft=null,J=null,et=!1}}}function s(){let I=!1,et=null,rt=null,ft=null,J=null,K=null,gt=null,Ut=null,ae=null;return{setTest:function(Zt){I||(Zt?Z(n.STENCIL_TEST):pt(n.STENCIL_TEST))},setMask:function(Zt){et!==Zt&&!I&&(n.stencilMask(Zt),et=Zt)},setFunc:function(Zt,Ln,Mn){(rt!==Zt||ft!==Ln||J!==Mn)&&(n.stencilFunc(Zt,Ln,Mn),rt=Zt,ft=Ln,J=Mn)},setOp:function(Zt,Ln,Mn){(K!==Zt||gt!==Ln||Ut!==Mn)&&(n.stencilOp(Zt,Ln,Mn),K=Zt,gt=Ln,Ut=Mn)},setLocked:function(Zt){I=Zt},setClear:function(Zt){ae!==Zt&&(n.clearStencil(Zt),ae=Zt)},reset:function(){I=!1,et=null,rt=null,ft=null,J=null,K=null,gt=null,Ut=null,ae=null}}}const r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,E=null,b=null,S=null,w=null,R=null,T=new Pt(0,0,0),L=0,v=!1,M=null,C=null,O=null,B=null,V=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,$=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=$>=2);let nt=null,it={};const Et=n.getParameter(n.SCISSOR_BOX),Ft=n.getParameter(n.VIEWPORT),Jt=new ge().fromArray(Et),re=new ge().fromArray(Ft);function qt(I,et,rt,ft){const J=new Uint8Array(4),K=n.createTexture();n.bindTexture(I,K),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let gt=0;gt<rt;gt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(et,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(et+gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return K}const q={};q[n.TEXTURE_2D]=qt(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=qt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=qt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=qt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(n.DEPTH_TEST),o.setFunc(vs),Dt(!1),_t(Mc),Z(n.CULL_FACE),ue(ai);function Z(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function pt(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Nt(I,et){return h[I]!==et?(n.bindFramebuffer(I,et),h[I]=et,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=et),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=et),!0):!1}function Tt(I,et){let rt=p,ft=!1;if(I){rt=f.get(et),rt===void 0&&(rt=[],f.set(et,rt));const J=I.textures;if(rt.length!==J.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let K=0,gt=J.length;K<gt;K++)rt[K]=n.COLOR_ATTACHMENT0+K;rt.length=J.length,ft=!0}}else rt[0]!==n.BACK&&(rt[0]=n.BACK,ft=!0);ft&&n.drawBuffers(rt)}function Yt(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const De={[Ti]:n.FUNC_ADD,[Jd]:n.FUNC_SUBTRACT,[Qd]:n.FUNC_REVERSE_SUBTRACT};De[tf]=n.MIN,De[ef]=n.MAX;const P={[nf]:n.ZERO,[sf]:n.ONE,[rf]:n.SRC_COLOR,[Ca]:n.SRC_ALPHA,[hf]:n.SRC_ALPHA_SATURATE,[cf]:n.DST_COLOR,[af]:n.DST_ALPHA,[of]:n.ONE_MINUS_SRC_COLOR,[wa]:n.ONE_MINUS_SRC_ALPHA,[uf]:n.ONE_MINUS_DST_COLOR,[lf]:n.ONE_MINUS_DST_ALPHA,[df]:n.CONSTANT_COLOR,[ff]:n.ONE_MINUS_CONSTANT_COLOR,[pf]:n.CONSTANT_ALPHA,[mf]:n.ONE_MINUS_CONSTANT_ALPHA};function ue(I,et,rt,ft,J,K,gt,Ut,ae,Zt){if(I===ai){_===!0&&(pt(n.BLEND),_=!1);return}if(_===!1&&(Z(n.BLEND),_=!0),I!==Zd){if(I!==m||Zt!==v){if((d!==Ti||S!==Ti)&&(n.blendEquation(n.FUNC_ADD),d=Ti,S=Ti),Zt)switch(I){case ms:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sc:n.blendFunc(n.ONE,n.ONE);break;case Ec:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ms:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ec:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,b=null,w=null,R=null,T.set(0,0,0),L=0,m=I,v=Zt}return}J=J||et,K=K||rt,gt=gt||ft,(et!==d||J!==S)&&(n.blendEquationSeparate(De[et],De[J]),d=et,S=J),(rt!==E||ft!==b||K!==w||gt!==R)&&(n.blendFuncSeparate(P[rt],P[ft],P[K],P[gt]),E=rt,b=ft,w=K,R=gt),(Ut.equals(T)===!1||ae!==L)&&(n.blendColor(Ut.r,Ut.g,Ut.b,ae),T.copy(Ut),L=ae),m=I,v=!1}function Bt(I,et){I.side===Hn?pt(n.CULL_FACE):Z(n.CULL_FACE);let rt=I.side===Ve;et&&(rt=!rt),Dt(rt),I.blending===ms&&I.transparent===!1?ue(ai):ue(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const ft=I.stencilWrite;a.setTest(ft),ft&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),xt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(I){M!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),M=I)}function _t(I){I!==$d?(Z(n.CULL_FACE),I!==C&&(I===Mc?n.cullFace(n.BACK):I===Kd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pt(n.CULL_FACE),C=I}function he(I){I!==O&&(z&&n.lineWidth(I),O=I)}function xt(I,et,rt){I?(Z(n.POLYGON_OFFSET_FILL),(B!==et||V!==rt)&&(n.polygonOffset(et,rt),B=et,V=rt)):pt(n.POLYGON_OFFSET_FILL)}function zt(I){I?Z(n.SCISSOR_TEST):pt(n.SCISSOR_TEST)}function Ce(I){I===void 0&&(I=n.TEXTURE0+W-1),nt!==I&&(n.activeTexture(I),nt=I)}function xe(I,et,rt){rt===void 0&&(nt===null?rt=n.TEXTURE0+W-1:rt=nt);let ft=it[rt];ft===void 0&&(ft={type:void 0,texture:void 0},it[rt]=ft),(ft.type!==I||ft.texture!==et)&&(nt!==rt&&(n.activeTexture(rt),nt=rt),n.bindTexture(I,et||q[I]),ft.type=I,ft.texture=et)}function A(){const I=it[nt];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(I){Jt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Jt.copy(I))}function Lt(I){re.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),re.copy(I))}function Mt(I,et){let rt=l.get(et);rt===void 0&&(rt=new WeakMap,l.set(et,rt));let ft=rt.get(I);ft===void 0&&(ft=n.getUniformBlockIndex(et,I.name),rt.set(I,ft))}function lt(I,et){const ft=l.get(et).get(I);c.get(et)!==ft&&(n.uniformBlockBinding(et,ft,I.__bindingPointIndex),c.set(et,ft))}function Ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},nt=null,it={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,E=null,b=null,S=null,w=null,R=null,T=new Pt(0,0,0),L=0,v=!1,M=null,C=null,O=null,B=null,V=null,Jt.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:pt,bindFramebuffer:Nt,drawBuffers:Tt,useProgram:Yt,setBlending:ue,setMaterial:Bt,setFlipSided:Dt,setCullFace:_t,setLineWidth:he,setPolygonOffset:xt,setScissorTest:zt,activeTexture:Ce,bindTexture:xe,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:yt,texImage3D:tt,updateUBOMapping:Mt,uniformBlockBinding:lt,texStorage2D:st,texStorage3D:vt,texSubImage2D:Y,texSubImage3D:j,compressedTexSubImage2D:X,compressedTexSubImage3D:bt,scissor:ht,viewport:Lt,reset:Ht}}function ex(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ct,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return p?new OffscreenCanvas(A,x):eo("canvas")}function _(A,x,F){let Y=1;const j=xe(A);if((j.width>F||j.height>F)&&(Y=F/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(Y*j.width),bt=Math.floor(Y*j.height);h===void 0&&(h=g(X,bt));const st=x?g(X,bt):h;return st.width=X,st.height=bt,st.getContext("2d").drawImage(A,0,0,X,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+bt+")."),st}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){n.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(A,x,F,Y,j=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=x;if(x===n.RED&&(F===n.FLOAT&&(X=n.R32F),F===n.HALF_FLOAT&&(X=n.R16F),F===n.UNSIGNED_BYTE&&(X=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.R8UI),F===n.UNSIGNED_SHORT&&(X=n.R16UI),F===n.UNSIGNED_INT&&(X=n.R32UI),F===n.BYTE&&(X=n.R8I),F===n.SHORT&&(X=n.R16I),F===n.INT&&(X=n.R32I)),x===n.RG&&(F===n.FLOAT&&(X=n.RG32F),F===n.HALF_FLOAT&&(X=n.RG16F),F===n.UNSIGNED_BYTE&&(X=n.RG8)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RG8UI),F===n.UNSIGNED_SHORT&&(X=n.RG16UI),F===n.UNSIGNED_INT&&(X=n.RG32UI),F===n.BYTE&&(X=n.RG8I),F===n.SHORT&&(X=n.RG16I),F===n.INT&&(X=n.RG32I)),x===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGB8UI),F===n.UNSIGNED_SHORT&&(X=n.RGB16UI),F===n.UNSIGNED_INT&&(X=n.RGB32UI),F===n.BYTE&&(X=n.RGB8I),F===n.SHORT&&(X=n.RGB16I),F===n.INT&&(X=n.RGB32I)),x===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),F===n.UNSIGNED_INT&&(X=n.RGBA32UI),F===n.BYTE&&(X=n.RGBA8I),F===n.SHORT&&(X=n.RGBA16I),F===n.INT&&(X=n.RGBA32I)),x===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),x===n.RGBA){const bt=j?Qr:jt.getTransfer(Y);F===n.FLOAT&&(X=n.RGBA32F),F===n.HALF_FLOAT&&(X=n.RGBA16F),F===n.UNSIGNED_BYTE&&(X=bt===ee?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function S(A,x){let F;return A?x===null||x===Oi||x===Zs?F=n.DEPTH24_STENCIL8:x===wn?F=n.DEPTH32F_STENCIL8:x===js&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Oi||x===Zs?F=n.DEPTH_COMPONENT24:x===wn?F=n.DEPTH_COMPONENT32F:x===js&&(F=n.DEPTH_COMPONENT16),F}function w(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Je&&A.minFilter!==Cn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){const x=A.target;x.removeEventListener("dispose",R),L(x),x.isVideoTexture&&u.delete(x)}function T(A){const x=A.target;x.removeEventListener("dispose",T),M(x)}function L(A){const x=i.get(A);if(x.__webglInit===void 0)return;const F=A.source,Y=f.get(F);if(Y){const j=Y[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&v(A),Object.keys(Y).length===0&&f.delete(F)}i.remove(A)}function v(A){const x=i.get(A);n.deleteTexture(x.__webglTexture);const F=A.source,Y=f.get(F);delete Y[x.__cacheKey],o.memory.textures--}function M(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let j=0;j<x.__webglFramebuffer[Y].length;j++)n.deleteFramebuffer(x.__webglFramebuffer[Y][j]);else n.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)n.deleteFramebuffer(x.__webglFramebuffer[Y]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=A.textures;for(let Y=0,j=F.length;Y<j;Y++){const X=i.get(F[Y]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(F[Y])}i.remove(A)}let C=0;function O(){C=0}function B(){const A=C;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),C+=1,A}function V(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function W(A,x){const F=i.get(A);if(A.isVideoTexture&&zt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,A,x);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function z(A,x){const F=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){q(F,A,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function $(A,x){const F=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){q(F,A,x);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function G(A,x){const F=i.get(A);if(A.version>0&&F.__version!==A.version){Z(F,A,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}const nt={[Ba]:n.REPEAT,[wi]:n.CLAMP_TO_EDGE,[Ha]:n.MIRRORED_REPEAT},it={[Je]:n.NEAREST,[Tf]:n.NEAREST_MIPMAP_NEAREST,[pr]:n.NEAREST_MIPMAP_LINEAR,[Cn]:n.LINEAR,[Bo]:n.LINEAR_MIPMAP_NEAREST,[Ri]:n.LINEAR_MIPMAP_LINEAR},Et={[Rf]:n.NEVER,[Nf]:n.ALWAYS,[Pf]:n.LESS,[dh]:n.LEQUAL,[Lf]:n.EQUAL,[Of]:n.GEQUAL,[Df]:n.GREATER,[If]:n.NOTEQUAL};function Ft(A,x){if(x.type===wn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Cn||x.magFilter===Bo||x.magFilter===pr||x.magFilter===Ri||x.minFilter===Cn||x.minFilter===Bo||x.minFilter===pr||x.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,nt[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,nt[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,nt[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,it[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,it[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Et[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Je||x.minFilter!==pr&&x.minFilter!==Ri||x.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Jt(A,x){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));const Y=x.source;let j=f.get(Y);j===void 0&&(j={},f.set(Y,j));const X=V(x);if(X!==A.__cacheKey){j[X]===void 0&&(j[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),j[X].usedTimes++;const bt=j[A.__cacheKey];bt!==void 0&&(j[A.__cacheKey].usedTimes--,bt.usedTimes===0&&v(x)),A.__cacheKey=X,A.__webglTexture=j[X].texture}return F}function re(A,x,F){return Math.floor(Math.floor(A/F)/x)}function qt(A,x,F,Y){const X=A.updateRanges;if(X.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,F,Y,x.data);else{X.sort((tt,ht)=>tt.start-ht.start);let bt=0;for(let tt=1;tt<X.length;tt++){const ht=X[bt],Lt=X[tt],Mt=ht.start+ht.count,lt=re(Lt.start,x.width,4),Ht=re(ht.start,x.width,4);Lt.start<=Mt+1&&lt===Ht&&re(Lt.start+Lt.count-1,x.width,4)===lt?ht.count=Math.max(ht.count,Lt.start+Lt.count-ht.start):(++bt,X[bt]=Lt)}X.length=bt+1;const st=n.getParameter(n.UNPACK_ROW_LENGTH),vt=n.getParameter(n.UNPACK_SKIP_PIXELS),yt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let tt=0,ht=X.length;tt<ht;tt++){const Lt=X[tt],Mt=Math.floor(Lt.start/4),lt=Math.ceil(Lt.count/4),Ht=Mt%x.width,I=Math.floor(Mt/x.width),et=lt,rt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ht),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),e.texSubImage2D(n.TEXTURE_2D,0,Ht,I,et,rt,F,Y,x.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,st),n.pixelStorei(n.UNPACK_SKIP_PIXELS,vt),n.pixelStorei(n.UNPACK_SKIP_ROWS,yt)}}function q(A,x,F){let Y=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=n.TEXTURE_3D);const j=Jt(A,x),X=x.source;e.bindTexture(Y,A.__webglTexture,n.TEXTURE0+F);const bt=i.get(X);if(X.version!==bt.__version||j===!0){e.activeTexture(n.TEXTURE0+F);const st=jt.getPrimaries(jt.workingColorSpace),vt=x.colorSpace===ei?null:jt.getPrimaries(x.colorSpace),yt=x.colorSpace===ei||st===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let tt=_(x.image,!1,s.maxTextureSize);tt=Ce(x,tt);const ht=r.convert(x.format,x.colorSpace),Lt=r.convert(x.type);let Mt=b(x.internalFormat,ht,Lt,x.colorSpace,x.isVideoTexture);Ft(Y,x);let lt;const Ht=x.mipmaps,I=x.isVideoTexture!==!0,et=bt.__version===void 0||j===!0,rt=X.dataReady,ft=w(x,tt);if(x.isDepthTexture)Mt=S(x.format===Qs,x.type),et&&(I?e.texStorage2D(n.TEXTURE_2D,1,Mt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,Mt,tt.width,tt.height,0,ht,Lt,null));else if(x.isDataTexture)if(Ht.length>0){I&&et&&e.texStorage2D(n.TEXTURE_2D,ft,Mt,Ht[0].width,Ht[0].height);for(let J=0,K=Ht.length;J<K;J++)lt=Ht[J],I?rt&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,lt.width,lt.height,ht,Lt,lt.data):e.texImage2D(n.TEXTURE_2D,J,Mt,lt.width,lt.height,0,ht,Lt,lt.data);x.generateMipmaps=!1}else I?(et&&e.texStorage2D(n.TEXTURE_2D,ft,Mt,tt.width,tt.height),rt&&qt(x,tt,ht,Lt)):e.texImage2D(n.TEXTURE_2D,0,Mt,tt.width,tt.height,0,ht,Lt,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&et&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,Mt,Ht[0].width,Ht[0].height,tt.depth);for(let J=0,K=Ht.length;J<K;J++)if(lt=Ht[J],x.format!==xn)if(ht!==null)if(I){if(rt)if(x.layerUpdates.size>0){const gt=ru(lt.width,lt.height,x.format,x.type);for(const Ut of x.layerUpdates){const ae=lt.data.subarray(Ut*gt/lt.data.BYTES_PER_ELEMENT,(Ut+1)*gt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Ut,lt.width,lt.height,1,ht,ae)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,lt.width,lt.height,tt.depth,ht,lt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Mt,lt.width,lt.height,tt.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?rt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,lt.width,lt.height,tt.depth,ht,Lt,lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,Mt,lt.width,lt.height,tt.depth,0,ht,Lt,lt.data)}else{I&&et&&e.texStorage2D(n.TEXTURE_2D,ft,Mt,Ht[0].width,Ht[0].height);for(let J=0,K=Ht.length;J<K;J++)lt=Ht[J],x.format!==xn?ht!==null?I?rt&&e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,lt.width,lt.height,ht,lt.data):e.compressedTexImage2D(n.TEXTURE_2D,J,Mt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?rt&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,lt.width,lt.height,ht,Lt,lt.data):e.texImage2D(n.TEXTURE_2D,J,Mt,lt.width,lt.height,0,ht,Lt,lt.data)}else if(x.isDataArrayTexture)if(I){if(et&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,Mt,tt.width,tt.height,tt.depth),rt)if(x.layerUpdates.size>0){const J=ru(tt.width,tt.height,x.format,x.type);for(const K of x.layerUpdates){const gt=tt.data.subarray(K*J/tt.data.BYTES_PER_ELEMENT,(K+1)*J/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,ht,Lt,gt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ht,Lt,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Mt,tt.width,tt.height,tt.depth,0,ht,Lt,tt.data);else if(x.isData3DTexture)I?(et&&e.texStorage3D(n.TEXTURE_3D,ft,Mt,tt.width,tt.height,tt.depth),rt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ht,Lt,tt.data)):e.texImage3D(n.TEXTURE_3D,0,Mt,tt.width,tt.height,tt.depth,0,ht,Lt,tt.data);else if(x.isFramebufferTexture){if(et)if(I)e.texStorage2D(n.TEXTURE_2D,ft,Mt,tt.width,tt.height);else{let J=tt.width,K=tt.height;for(let gt=0;gt<ft;gt++)e.texImage2D(n.TEXTURE_2D,gt,Mt,J,K,0,ht,Lt,null),J>>=1,K>>=1}}else if(Ht.length>0){if(I&&et){const J=xe(Ht[0]);e.texStorage2D(n.TEXTURE_2D,ft,Mt,J.width,J.height)}for(let J=0,K=Ht.length;J<K;J++)lt=Ht[J],I?rt&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,ht,Lt,lt):e.texImage2D(n.TEXTURE_2D,J,Mt,ht,Lt,lt);x.generateMipmaps=!1}else if(I){if(et){const J=xe(tt);e.texStorage2D(n.TEXTURE_2D,ft,Mt,J.width,J.height)}rt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht,Lt,tt)}else e.texImage2D(n.TEXTURE_2D,0,Mt,ht,Lt,tt);m(x)&&d(Y),bt.__version=X.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Z(A,x,F){if(x.image.length!==6)return;const Y=Jt(A,x),j=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+F);const X=i.get(j);if(j.version!==X.__version||Y===!0){e.activeTexture(n.TEXTURE0+F);const bt=jt.getPrimaries(jt.workingColorSpace),st=x.colorSpace===ei?null:jt.getPrimaries(x.colorSpace),vt=x.colorSpace===ei||bt===st?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const yt=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,ht=[];for(let K=0;K<6;K++)!yt&&!tt?ht[K]=_(x.image[K],!0,s.maxCubemapSize):ht[K]=tt?x.image[K].image:x.image[K],ht[K]=Ce(x,ht[K]);const Lt=ht[0],Mt=r.convert(x.format,x.colorSpace),lt=r.convert(x.type),Ht=b(x.internalFormat,Mt,lt,x.colorSpace),I=x.isVideoTexture!==!0,et=X.__version===void 0||Y===!0,rt=j.dataReady;let ft=w(x,Lt);Ft(n.TEXTURE_CUBE_MAP,x);let J;if(yt){I&&et&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Ht,Lt.width,Lt.height);for(let K=0;K<6;K++){J=ht[K].mipmaps;for(let gt=0;gt<J.length;gt++){const Ut=J[gt];x.format!==xn?Mt!==null?I?rt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,Ut.width,Ut.height,Mt,Ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,Ht,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,Ut.width,Ut.height,Mt,lt,Ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,Ht,Ut.width,Ut.height,0,Mt,lt,Ut.data)}}}else{if(J=x.mipmaps,I&&et){J.length>0&&ft++;const K=xe(ht[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Ht,K.width,K.height)}for(let K=0;K<6;K++)if(tt){I?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ht[K].width,ht[K].height,Mt,lt,ht[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,ht[K].width,ht[K].height,0,Mt,lt,ht[K].data);for(let gt=0;gt<J.length;gt++){const ae=J[gt].image[K].image;I?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,ae.width,ae.height,Mt,lt,ae.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,Ht,ae.width,ae.height,0,Mt,lt,ae.data)}}else{I?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Mt,lt,ht[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,Mt,lt,ht[K]);for(let gt=0;gt<J.length;gt++){const Ut=J[gt];I?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,Mt,lt,Ut.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,Ht,Mt,lt,Ut.image[K])}}}m(x)&&d(n.TEXTURE_CUBE_MAP),X.__version=j.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function pt(A,x,F,Y,j,X){const bt=r.convert(F.format,F.colorSpace),st=r.convert(F.type),vt=b(F.internalFormat,bt,st,F.colorSpace),yt=i.get(x),tt=i.get(F);if(tt.__renderTarget=x,!yt.__hasExternalTextures){const ht=Math.max(1,x.width>>X),Lt=Math.max(1,x.height>>X);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,X,vt,ht,Lt,x.depth,0,bt,st,null):e.texImage2D(j,X,vt,ht,Lt,0,bt,st,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),xt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,j,tt.__webglTexture,0,he(x)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,j,tt.__webglTexture,X),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(A,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){const Y=x.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,X=S(x.stencilBuffer,j),bt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=he(x);xt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st,X,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,st,X,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,X,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,A)}else{const Y=x.textures;for(let j=0;j<Y.length;j++){const X=Y[j],bt=r.convert(X.format,X.colorSpace),st=r.convert(X.type),vt=b(X.internalFormat,bt,st,X.colorSpace),yt=he(x);F&&xt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt,vt,x.width,x.height):xt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt,vt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,vt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Tt(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const j=Y.__webglTexture,X=he(x);if(x.depthTexture.format===Js)xt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(x.depthTexture.format===Qs)xt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Yt(A){const x=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=Y}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const Y=A.texture.mipmaps;Y&&Y.length>0?Tt(x.__webglFramebuffer[0],A):Tt(x.__webglFramebuffer,A)}else if(F){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=n.createRenderbuffer(),Nt(x.__webglDepthbuffer[Y],A,!1);else{const j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,X)}}else{const Y=A.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Nt(x.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,X)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function De(A,x,F){const Y=i.get(A);x!==void 0&&pt(Y.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Yt(A)}function P(A){const x=A.texture,F=i.get(A),Y=i.get(x);A.addEventListener("dispose",T);const j=A.textures,X=A.isWebGLCubeRenderTarget===!0,bt=j.length>1;if(bt||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=x.version,o.memory.textures++),X){F.__webglFramebuffer=[];for(let st=0;st<6;st++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[st]=[];for(let vt=0;vt<x.mipmaps.length;vt++)F.__webglFramebuffer[st][vt]=n.createFramebuffer()}else F.__webglFramebuffer[st]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let st=0;st<x.mipmaps.length;st++)F.__webglFramebuffer[st]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(bt)for(let st=0,vt=j.length;st<vt;st++){const yt=i.get(j[st]);yt.__webglTexture===void 0&&(yt.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&xt(A)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let st=0;st<j.length;st++){const vt=j[st];F.__webglColorRenderbuffer[st]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[st]);const yt=r.convert(vt.format,vt.colorSpace),tt=r.convert(vt.type),ht=b(vt.internalFormat,yt,tt,vt.colorSpace,A.isXRRenderTarget===!0),Lt=he(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,ht,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,F.__webglColorRenderbuffer[st])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Nt(F.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Ft(n.TEXTURE_CUBE_MAP,x);for(let st=0;st<6;st++)if(x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)pt(F.__webglFramebuffer[st][vt],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt);else pt(F.__webglFramebuffer[st],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(x)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let st=0,vt=j.length;st<vt;st++){const yt=j[st],tt=i.get(yt);let ht=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ht=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,tt.__webglTexture),Ft(ht,yt),pt(F.__webglFramebuffer,A,yt,n.COLOR_ATTACHMENT0+st,ht,0),m(yt)&&d(ht)}e.unbindTexture()}else{let st=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(st=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,Y.__webglTexture),Ft(st,x),x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)pt(F.__webglFramebuffer[vt],A,x,n.COLOR_ATTACHMENT0,st,vt);else pt(F.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,st,0);m(x)&&d(st),e.unbindTexture()}A.depthBuffer&&Yt(A)}function ue(A){const x=A.textures;for(let F=0,Y=x.length;F<Y;F++){const j=x[F];if(m(j)){const X=E(A),bt=i.get(j).__webglTexture;e.bindTexture(X,bt),d(X),e.unbindTexture()}}}const Bt=[],Dt=[];function _t(A){if(A.samples>0){if(xt(A)===!1){const x=A.textures,F=A.width,Y=A.height;let j=n.COLOR_BUFFER_BIT;const X=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(A),st=x.length>1;if(st)for(let yt=0;yt<x.length;yt++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const vt=A.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let yt=0;yt<x.length;yt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),st){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[yt]);const tt=i.get(x[yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,tt,0)}n.blitFramebuffer(0,0,F,Y,0,0,F,Y,j,n.NEAREST),c===!0&&(Bt.length=0,Dt.length=0,Bt.push(n.COLOR_ATTACHMENT0+yt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Bt.push(X),Dt.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Dt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),st)for(let yt=0;yt<x.length;yt++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,bt.__webglColorRenderbuffer[yt]);const tt=i.get(x[yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function he(A){return Math.min(s.maxSamples,A.samples)}function xt(A){const x=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function zt(A){const x=o.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function Ce(A,x){const F=A.colorSpace,Y=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Ss&&F!==ei&&(jt.getTransfer(F)===ee?(Y!==xn||j!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function xe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=W,this.setTexture2DArray=z,this.setTexture3D=$,this.setTextureCube=G,this.rebindTextures=De,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=xt}function nx(n,t){function e(i,s=ei){let r;const o=jt.getTransfer(s);if(i===Pn)return n.UNSIGNED_BYTE;if(i===Ll)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ah)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===lh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===rh)return n.BYTE;if(i===oh)return n.SHORT;if(i===js)return n.UNSIGNED_SHORT;if(i===Pl)return n.INT;if(i===Oi)return n.UNSIGNED_INT;if(i===wn)return n.FLOAT;if(i===rr)return n.HALF_FLOAT;if(i===ch)return n.ALPHA;if(i===uh)return n.RGB;if(i===xn)return n.RGBA;if(i===Js)return n.DEPTH_COMPONENT;if(i===Qs)return n.DEPTH_STENCIL;if(i===Il)return n.RED;if(i===Ol)return n.RED_INTEGER;if(i===hh)return n.RG;if(i===Nl)return n.RG_INTEGER;if(i===Ul)return n.RGBA_INTEGER;if(i===Xr||i===qr||i===Yr||i===$r)if(o===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ka||i===za||i===Va||i===Ga)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wa||i===Xa||i===qa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Wa||i===Xa)return o===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===qa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ya||i===$a||i===Ka||i===ja||i===Za||i===Ja||i===Qa||i===tl||i===el||i===nl||i===il||i===sl||i===rl||i===ol)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ya)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$a)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ka)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ja)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Za)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ja)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tl)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===el)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nl)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===il)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sl)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rl)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ol)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===al||i===ll||i===cl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===al)return o===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ul||i===hl||i===dl||i===fl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ul)return r.COMPRESSED_RED_RGTC1_EXT;if(i===hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const ix=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sx=`
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

}`;class rx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Th(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new di({vertexShader:ix,fragmentShader:sx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ue(new Eo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ox extends Hi{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new rx,d={},E=e.getContextAttributes();let b=null,S=null;const w=[],R=[],T=new Ct;let L=null;const v=new on;v.viewport=new ge;const M=new on;M.viewport=new ge;const C=[v,M],O=new Tp;let B=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=w[q];return Z===void 0&&(Z=new oa,w[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=w[q];return Z===void 0&&(Z=new oa,w[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=w[q];return Z===void 0&&(Z=new oa,w[q]=Z),Z.getHandSpace()};function W(q){const Z=R.indexOf(q.inputSource);if(Z===-1)return;const pt=w[Z];pt!==void 0&&(pt.update(q.inputSource,q.frame,l||o),pt.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",$);for(let q=0;q<w.length;q++){const Z=R[q];Z!==null&&(R[q]=null,w[q].disconnect(Z))}B=null,V=null,m.reset();for(const q in d)delete d[q];t.setRenderTarget(b),p=null,f=null,h=null,s=null,S=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",z),s.addEventListener("inputsourceschange",$),E.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Nt=null,Tt=null;E.depth&&(Tt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=E.stencil?Qs:Js,Nt=E.stencil?Zs:Oi);const Yt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Yt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Ni(f.textureWidth,f.textureHeight,{format:xn,type:Pn,depthTexture:new bh(f.textureWidth,f.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const pt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ni(p.framebufferWidth,p.framebufferHeight,{format:xn,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),qt.setContext(s),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(q){for(let Z=0;Z<q.removed.length;Z++){const pt=q.removed[Z],Nt=R.indexOf(pt);Nt>=0&&(R[Nt]=null,w[Nt].disconnect(pt))}for(let Z=0;Z<q.added.length;Z++){const pt=q.added[Z];let Nt=R.indexOf(pt);if(Nt===-1){for(let Yt=0;Yt<w.length;Yt++)if(Yt>=R.length){R.push(pt),Nt=Yt;break}else if(R[Yt]===null){R[Yt]=pt,Nt=Yt;break}if(Nt===-1)break}const Tt=w[Nt];Tt&&Tt.connect(pt)}}const G=new D,nt=new D;function it(q,Z,pt){G.setFromMatrixPosition(Z.matrixWorld),nt.setFromMatrixPosition(pt.matrixWorld);const Nt=G.distanceTo(nt),Tt=Z.projectionMatrix.elements,Yt=pt.projectionMatrix.elements,De=Tt[14]/(Tt[10]-1),P=Tt[14]/(Tt[10]+1),ue=(Tt[9]+1)/Tt[5],Bt=(Tt[9]-1)/Tt[5],Dt=(Tt[8]-1)/Tt[0],_t=(Yt[8]+1)/Yt[0],he=De*Dt,xt=De*_t,zt=Nt/(-Dt+_t),Ce=zt*-Dt;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ce),q.translateZ(zt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Tt[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const xe=De+zt,A=P+zt,x=he-Ce,F=xt+(Nt-Ce),Y=ue*P/A*xe,j=Bt*P/A*xe;q.projectionMatrix.makePerspective(x,F,Y,j,xe,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Et(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Z=q.near,pt=q.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),O.near=M.near=v.near=Z,O.far=M.far=v.far=pt,(B!==O.near||V!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,V=O.far),O.layers.mask=q.layers.mask|6,v.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;const Nt=q.parent,Tt=O.cameras;Et(O,Nt);for(let Yt=0;Yt<Tt.length;Yt++)Et(Tt[Yt],Nt);Tt.length===2?it(O,v,M):O.projectionMatrix.copy(v.projectionMatrix),Ft(q,O,Nt)};function Ft(q,Z,pt){pt===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(pt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ml*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(q){return d[q]};let Jt=null;function re(q,Z){if(u=Z.getViewerPose(l||o),g=Z,u!==null){const pt=u.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let Nt=!1;pt.length!==O.cameras.length&&(O.cameras.length=0,Nt=!0);for(let P=0;P<pt.length;P++){const ue=pt[P];let Bt=null;if(p!==null)Bt=p.getViewport(ue);else{const _t=h.getViewSubImage(f,ue);Bt=_t.viewport,P===0&&(t.setRenderTargetTextures(S,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(S))}let Dt=C[P];Dt===void 0&&(Dt=new on,Dt.layers.enable(P),Dt.viewport=new ge,C[P]=Dt),Dt.matrix.fromArray(ue.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(ue.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),P===0&&(O.matrix.copy(Dt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Nt===!0&&O.cameras.push(Dt)}const Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const P=h.getDepthInformation(pt[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(Tt&&Tt.includes("camera-access")&&_){t.state.unbindTexture(),h=i.getBinding();for(let P=0;P<pt.length;P++){const ue=pt[P].camera;if(ue){let Bt=d[ue];Bt||(Bt=new Th,d[ue]=Bt);const Dt=h.getCameraImage(ue);Bt.sourceTexture=Dt}}}}for(let pt=0;pt<w.length;pt++){const Nt=R[pt],Tt=w[pt];Nt!==null&&Tt!==void 0&&Tt.update(Nt,Z,l||o)}Jt&&Jt(q,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const qt=new Dh;qt.setAnimationLoop(re),this.setAnimationLoop=function(q){Jt=q},this.dispose=function(){}}}const Ei=new vn,ax=new se;function lx(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,xh(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,b,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,E,b):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ve&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ve&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=t.get(d),b=E.envMap,S=E.envMapRotation;b&&(m.envMap.value=b,Ei.copy(S),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),m.envMapRotation.value.setFromMatrix4(ax.makeRotationFromEuler(Ei)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,E,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=b*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ve&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function cx(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,b){const S=b.program;i.uniformBlockBinding(E,S)}function l(E,b){let S=s[E.id];S===void 0&&(g(E),S=u(E),s[E.id]=S,E.addEventListener("dispose",m));const w=b.program;i.updateUBOMapping(E,w);const R=t.render.frame;r[E.id]!==R&&(f(E),r[E.id]=R)}function u(E){const b=h();E.__bindingPointIndex=b;const S=n.createBuffer(),w=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const b=s[E.id],S=E.uniforms,w=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,T=S.length;R<T;R++){const L=Array.isArray(S[R])?S[R]:[S[R]];for(let v=0,M=L.length;v<M;v++){const C=L[v];if(p(C,R,v,w)===!0){const O=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let V=0;for(let W=0;W<B.length;W++){const z=B[W],$=_(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,O+V,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,V),V+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,b,S,w){const R=E.value,T=b+"_"+S;if(w[T]===void 0)return typeof R=="number"||typeof R=="boolean"?w[T]=R:w[T]=R.clone(),!0;{const L=w[T];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return w[T]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(E){const b=E.uniforms;let S=0;const w=16;for(let T=0,L=b.length;T<L;T++){const v=Array.isArray(b[T])?b[T]:[b[T]];for(let M=0,C=v.length;M<C;M++){const O=v[M],B=Array.isArray(O.value)?O.value:[O.value];for(let V=0,W=B.length;V<W;V++){const z=B[V],$=_(z),G=S%w,nt=G%$.boundary,it=G+nt;S+=nt,it!==0&&w-it<$.storage&&(S+=w-it),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=$.storage}}}const R=S%w;return R>0&&(S+=w-R),E.__size=S,E.__cache={},this}function _(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(const E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}class ux{constructor(t={}){const{canvas:e=Hf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let w=!1;this._outputColorSpace=rn;let R=0,T=0,L=null,v=-1,M=null;const C=new ge,O=new ge;let B=null;const V=new Pt(0);let W=0,z=e.width,$=e.height,G=1,nt=null,it=null;const Et=new ge(0,0,z,$),Ft=new ge(0,0,z,$);let Jt=!1;const re=new zl;let qt=!1,q=!1;const Z=new se,pt=new D,Nt=new ge,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function De(){return L===null?G:1}let P=i;function ue(y,N){return e.getContext(y,N)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rl}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",J,!1),P===null){const N="webgl2";if(P=ue(N,y),P===null)throw ue(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Bt,Dt,_t,he,xt,zt,Ce,xe,A,x,F,Y,j,X,bt,st,vt,yt,tt,ht,Lt,Mt,lt,Ht;function I(){Bt=new y_(P),Bt.init(),Mt=new nx(P,Bt),Dt=new f_(P,Bt,t,Mt),_t=new tx(P,Bt),Dt.reversedDepthBuffer&&f&&_t.buffers.depth.setReversed(!0),he=new E_(P),xt=new z0,zt=new ex(P,Bt,_t,xt,Dt,Mt,he),Ce=new m_(S),xe=new v_(S),A=new Rp(P),lt=new h_(P,A),x=new M_(P,A,he,lt),F=new T_(P,x,A,he),tt=new b_(P,Dt,zt),st=new p_(xt),Y=new k0(S,Ce,xe,Bt,Dt,lt,st),j=new lx(S,xt),X=new G0,bt=new K0(Bt),yt=new u_(S,Ce,xe,_t,F,p,c),vt=new J0(S,F,Dt),Ht=new cx(P,he,Dt,_t),ht=new d_(P,Bt,he),Lt=new S_(P,Bt,he),he.programs=Y.programs,S.capabilities=Dt,S.extensions=Bt,S.properties=xt,S.renderLists=X,S.shadowMap=vt,S.state=_t,S.info=he}I();const et=new ox(S,P);this.xr=et,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=Bt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Bt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(z,$,!1))},this.getSize=function(y){return y.set(z,$)},this.setSize=function(y,N,H=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=y,$=N,e.width=Math.floor(y*G),e.height=Math.floor(N*G),H===!0&&(e.style.width=y+"px",e.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(z*G,$*G).floor()},this.setDrawingBufferSize=function(y,N,H){z=y,$=N,G=H,e.width=Math.floor(y*H),e.height=Math.floor(N*H),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(Et)},this.setViewport=function(y,N,H,k){y.isVector4?Et.set(y.x,y.y,y.z,y.w):Et.set(y,N,H,k),_t.viewport(C.copy(Et).multiplyScalar(G).round())},this.getScissor=function(y){return y.copy(Ft)},this.setScissor=function(y,N,H,k){y.isVector4?Ft.set(y.x,y.y,y.z,y.w):Ft.set(y,N,H,k),_t.scissor(O.copy(Ft).multiplyScalar(G).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(y){_t.setScissorTest(Jt=y)},this.setOpaqueSort=function(y){nt=y},this.setTransparentSort=function(y){it=y},this.getClearColor=function(y){return y.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,H=!0){let k=0;if(y){let U=!1;if(L!==null){const Q=L.texture.format;U=Q===Ul||Q===Nl||Q===Ol}if(U){const Q=L.texture.type,ut=Q===Pn||Q===Oi||Q===js||Q===Zs||Q===Ll||Q===Dl,mt=yt.getClearColor(),dt=yt.getClearAlpha(),Rt=mt.r,It=mt.g,At=mt.b;ut?(g[0]=Rt,g[1]=It,g[2]=At,g[3]=dt,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Rt,_[1]=It,_[2]=At,_[3]=dt,P.clearBufferiv(P.COLOR,0,_))}else k|=P.COLOR_BUFFER_BIT}N&&(k|=P.DEPTH_BUFFER_BIT),H&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",J,!1),yt.dispose(),X.dispose(),bt.dispose(),xt.dispose(),Ce.dispose(),xe.dispose(),F.dispose(),lt.dispose(),Ht.dispose(),Y.dispose(),et.dispose(),et.removeEventListener("sessionstart",Mn),et.removeEventListener("sessionend",mc),gi.stop()};function rt(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const y=he.autoReset,N=vt.enabled,H=vt.autoUpdate,k=vt.needsUpdate,U=vt.type;I(),he.autoReset=y,vt.enabled=N,vt.autoUpdate=H,vt.needsUpdate=k,vt.type=U}function J(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function K(y){const N=y.target;N.removeEventListener("dispose",K),gt(N)}function gt(y){Ut(y),xt.remove(y)}function Ut(y){const N=xt.get(y).programs;N!==void 0&&(N.forEach(function(H){Y.releaseProgram(H)}),y.isShaderMaterial&&Y.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,H,k,U,Q){N===null&&(N=Tt);const ut=U.isMesh&&U.matrixWorld.determinant()<0,mt=Vd(y,N,H,k,U);_t.setMaterial(k,ut);let dt=H.index,Rt=1;if(k.wireframe===!0){if(dt=x.getWireframeAttribute(H),dt===void 0)return;Rt=2}const It=H.drawRange,At=H.attributes.position;let Xt=It.start*Rt,te=(It.start+It.count)*Rt;Q!==null&&(Xt=Math.max(Xt,Q.start*Rt),te=Math.min(te,(Q.start+Q.count)*Rt)),dt!==null?(Xt=Math.max(Xt,0),te=Math.min(te,dt.count)):At!=null&&(Xt=Math.max(Xt,0),te=Math.min(te,At.count));const pe=te-Xt;if(pe<0||pe===1/0)return;lt.setup(U,k,mt,H,dt);let ce,oe=ht;if(dt!==null&&(ce=A.get(dt),oe=Lt,oe.setIndex(ce)),U.isMesh)k.wireframe===!0?(_t.setLineWidth(k.wireframeLinewidth*De()),oe.setMode(P.LINES)):oe.setMode(P.TRIANGLES);else if(U.isLine){let wt=k.linewidth;wt===void 0&&(wt=1),_t.setLineWidth(wt*De()),U.isLineSegments?oe.setMode(P.LINES):U.isLineLoop?oe.setMode(P.LINE_LOOP):oe.setMode(P.LINE_STRIP)}else U.isPoints?oe.setMode(P.POINTS):U.isSprite&&oe.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)tr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))oe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const wt=U._multiDrawStarts,de=U._multiDrawCounts,Kt=U._multiDrawCount,$e=dt?A.get(dt).bytesPerElement:1,Gi=xt.get(k).currentProgram.getUniforms();for(let Ke=0;Ke<Kt;Ke++)Gi.setValue(P,"_gl_DrawID",Ke),oe.render(wt[Ke]/$e,de[Ke])}else if(U.isInstancedMesh)oe.renderInstances(Xt,pe,U.count);else if(H.isInstancedBufferGeometry){const wt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,de=Math.min(H.instanceCount,wt);oe.renderInstances(Xt,pe,de)}else oe.render(Xt,pe)};function ae(y,N,H){y.transparent===!0&&y.side===Hn&&y.forceSinglePass===!1?(y.side=Ve,y.needsUpdate=!0,fr(y,N,H),y.side=hi,y.needsUpdate=!0,fr(y,N,H),y.side=Hn):fr(y,N,H)}this.compile=function(y,N,H=null){H===null&&(H=y),d=bt.get(H),d.init(N),b.push(d),H.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),y!==H&&y.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const k=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let ut=0;ut<Q.length;ut++){const mt=Q[ut];ae(mt,H,U),k.add(mt)}else ae(Q,H,U),k.add(Q)}),d=b.pop(),k},this.compileAsync=function(y,N,H=null){const k=this.compile(y,N,H);return new Promise(U=>{function Q(){if(k.forEach(function(ut){xt.get(ut).currentProgram.isReady()&&k.delete(ut)}),k.size===0){U(y);return}setTimeout(Q,10)}Bt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Zt=null;function Ln(y){Zt&&Zt(y)}function Mn(){gi.stop()}function mc(){gi.start()}const gi=new Dh;gi.setAnimationLoop(Ln),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(y){Zt=y,et.setAnimationLoop(y),y===null?gi.stop():gi.start()},et.addEventListener("sessionstart",Mn),et.addEventListener("sessionend",mc),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(N),N=et.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,N,L),d=bt.get(y,b.length),d.init(N),b.push(d),Z.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),re.setFromProjectionMatrix(Z,Rn,N.reversedDepth),q=this.localClippingEnabled,qt=st.init(this.clippingPlanes,q),m=X.get(y,E.length),m.init(),E.push(m),et.enabled===!0&&et.isPresenting===!0){const Q=S.xr.getDepthSensingMesh();Q!==null&&Uo(Q,N,-1/0,S.sortObjects)}Uo(y,N,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(nt,it),Yt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Yt&&yt.addToRenderList(m,y),this.info.render.frame++,qt===!0&&st.beginShadows();const H=d.state.shadowsArray;vt.render(H,y,N),qt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,U=m.transmissive;if(d.setupLights(),N.isArrayCamera){const Q=N.cameras;if(U.length>0)for(let ut=0,mt=Q.length;ut<mt;ut++){const dt=Q[ut];_c(k,U,y,dt)}Yt&&yt.render(y);for(let ut=0,mt=Q.length;ut<mt;ut++){const dt=Q[ut];gc(m,y,dt,dt.viewport)}}else U.length>0&&_c(k,U,y,N),Yt&&yt.render(y),gc(m,y,N);L!==null&&T===0&&(zt.updateMultisampleRenderTarget(L),zt.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(S,y,N),lt.resetDefaultState(),v=-1,M=null,b.pop(),b.length>0?(d=b[b.length-1],qt===!0&&st.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Uo(y,N,H,k){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||re.intersectsSprite(y)){k&&Nt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Z);const ut=F.update(y),mt=y.material;mt.visible&&m.push(y,ut,mt,H,Nt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||re.intersectsObject(y))){const ut=F.update(y),mt=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Nt.copy(y.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Nt.copy(ut.boundingSphere.center)),Nt.applyMatrix4(y.matrixWorld).applyMatrix4(Z)),Array.isArray(mt)){const dt=ut.groups;for(let Rt=0,It=dt.length;Rt<It;Rt++){const At=dt[Rt],Xt=mt[At.materialIndex];Xt&&Xt.visible&&m.push(y,ut,Xt,H,Nt.z,At)}}else mt.visible&&m.push(y,ut,mt,H,Nt.z,null)}}const Q=y.children;for(let ut=0,mt=Q.length;ut<mt;ut++)Uo(Q[ut],N,H,k)}function gc(y,N,H,k){const U=y.opaque,Q=y.transmissive,ut=y.transparent;d.setupLightsView(H),qt===!0&&st.setGlobalState(S.clippingPlanes,H),k&&_t.viewport(C.copy(k)),U.length>0&&dr(U,N,H),Q.length>0&&dr(Q,N,H),ut.length>0&&dr(ut,N,H),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function _c(y,N,H,k){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[k.id]===void 0&&(d.state.transmissionRenderTarget[k.id]=new Ni(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?rr:Pn,minFilter:Ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const Q=d.state.transmissionRenderTarget[k.id],ut=k.viewport||C;Q.setSize(ut.z*S.transmissionResolutionScale,ut.w*S.transmissionResolutionScale);const mt=S.getRenderTarget(),dt=S.getActiveCubeFace(),Rt=S.getActiveMipmapLevel();S.setRenderTarget(Q),S.getClearColor(V),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),S.clear(),Yt&&yt.render(H);const It=S.toneMapping;S.toneMapping=li;const At=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),d.setupLightsView(k),qt===!0&&st.setGlobalState(S.clippingPlanes,k),dr(y,H,k),zt.updateMultisampleRenderTarget(Q),zt.updateRenderTargetMipmap(Q),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let te=0,pe=N.length;te<pe;te++){const ce=N[te],oe=ce.object,wt=ce.geometry,de=ce.material,Kt=ce.group;if(de.side===Hn&&oe.layers.test(k.layers)){const $e=de.side;de.side=Ve,de.needsUpdate=!0,xc(oe,H,k,wt,de,Kt),de.side=$e,de.needsUpdate=!0,Xt=!0}}Xt===!0&&(zt.updateMultisampleRenderTarget(Q),zt.updateRenderTargetMipmap(Q))}S.setRenderTarget(mt,dt,Rt),S.setClearColor(V,W),At!==void 0&&(k.viewport=At),S.toneMapping=It}function dr(y,N,H){const k=N.isScene===!0?N.overrideMaterial:null;for(let U=0,Q=y.length;U<Q;U++){const ut=y[U],mt=ut.object,dt=ut.geometry,Rt=ut.group;let It=ut.material;It.allowOverride===!0&&k!==null&&(It=k),mt.layers.test(H.layers)&&xc(mt,N,H,dt,It,Rt)}}function xc(y,N,H,k,U,Q){y.onBeforeRender(S,N,H,k,U,Q),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(S,N,H,k,y,Q),U.transparent===!0&&U.side===Hn&&U.forceSinglePass===!1?(U.side=Ve,U.needsUpdate=!0,S.renderBufferDirect(H,N,k,U,y,Q),U.side=hi,U.needsUpdate=!0,S.renderBufferDirect(H,N,k,U,y,Q),U.side=Hn):S.renderBufferDirect(H,N,k,U,y,Q),y.onAfterRender(S,N,H,k,U,Q)}function fr(y,N,H){N.isScene!==!0&&(N=Tt);const k=xt.get(y),U=d.state.lights,Q=d.state.shadowsArray,ut=U.state.version,mt=Y.getParameters(y,U.state,Q,N,H),dt=Y.getProgramCacheKey(mt);let Rt=k.programs;k.environment=y.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(y.isMeshStandardMaterial?xe:Ce).get(y.envMap||k.environment),k.envMapRotation=k.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Rt===void 0&&(y.addEventListener("dispose",K),Rt=new Map,k.programs=Rt);let It=Rt.get(dt);if(It!==void 0){if(k.currentProgram===It&&k.lightsStateVersion===ut)return yc(y,mt),It}else mt.uniforms=Y.getUniforms(y),y.onBeforeCompile(mt,S),It=Y.acquireProgram(mt,dt),Rt.set(dt,It),k.uniforms=mt.uniforms;const At=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(At.clippingPlanes=st.uniform),yc(y,mt),k.needsLights=Wd(y),k.lightsStateVersion=ut,k.needsLights&&(At.ambientLightColor.value=U.state.ambient,At.lightProbe.value=U.state.probe,At.directionalLights.value=U.state.directional,At.directionalLightShadows.value=U.state.directionalShadow,At.spotLights.value=U.state.spot,At.spotLightShadows.value=U.state.spotShadow,At.rectAreaLights.value=U.state.rectArea,At.ltc_1.value=U.state.rectAreaLTC1,At.ltc_2.value=U.state.rectAreaLTC2,At.pointLights.value=U.state.point,At.pointLightShadows.value=U.state.pointShadow,At.hemisphereLights.value=U.state.hemi,At.directionalShadowMap.value=U.state.directionalShadowMap,At.directionalShadowMatrix.value=U.state.directionalShadowMatrix,At.spotShadowMap.value=U.state.spotShadowMap,At.spotLightMatrix.value=U.state.spotLightMatrix,At.spotLightMap.value=U.state.spotLightMap,At.pointShadowMap.value=U.state.pointShadowMap,At.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=It,k.uniformsList=null,It}function vc(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=jr.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function yc(y,N){const H=xt.get(y);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Vd(y,N,H,k,U){N.isScene!==!0&&(N=Tt),zt.resetTextureUnits();const Q=N.fog,ut=k.isMeshStandardMaterial?N.environment:null,mt=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ss,dt=(k.isMeshStandardMaterial?xe:Ce).get(k.envMap||ut),Rt=k.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,It=!!H.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),At=!!H.morphAttributes.position,Xt=!!H.morphAttributes.normal,te=!!H.morphAttributes.color;let pe=li;k.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(pe=S.toneMapping);const ce=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,oe=ce!==void 0?ce.length:0,wt=xt.get(k),de=d.state.lights;if(qt===!0&&(q===!0||y!==M)){const He=y===M&&k.id===v;st.setState(k,y,He)}let Kt=!1;k.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==de.state.version||wt.outputColorSpace!==mt||U.isBatchedMesh&&wt.batching===!1||!U.isBatchedMesh&&wt.batching===!0||U.isBatchedMesh&&wt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&wt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&wt.instancing===!1||!U.isInstancedMesh&&wt.instancing===!0||U.isSkinnedMesh&&wt.skinning===!1||!U.isSkinnedMesh&&wt.skinning===!0||U.isInstancedMesh&&wt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&wt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&wt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&wt.instancingMorph===!1&&U.morphTexture!==null||wt.envMap!==dt||k.fog===!0&&wt.fog!==Q||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==st.numPlanes||wt.numIntersection!==st.numIntersection)||wt.vertexAlphas!==Rt||wt.vertexTangents!==It||wt.morphTargets!==At||wt.morphNormals!==Xt||wt.morphColors!==te||wt.toneMapping!==pe||wt.morphTargetsCount!==oe)&&(Kt=!0):(Kt=!0,wt.__version=k.version);let $e=wt.currentProgram;Kt===!0&&($e=fr(k,N,U));let Gi=!1,Ke=!1,Rs=!1;const fe=$e.getUniforms(),Qe=wt.uniforms;if(_t.useProgram($e.program)&&(Gi=!0,Ke=!0,Rs=!0),k.id!==v&&(v=k.id,Ke=!0),Gi||M!==y){_t.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),fe.setValue(P,"projectionMatrix",y.projectionMatrix),fe.setValue(P,"viewMatrix",y.matrixWorldInverse);const Xe=fe.map.cameraPosition;Xe!==void 0&&Xe.setValue(P,pt.setFromMatrixPosition(y.matrixWorld)),Dt.logarithmicDepthBuffer&&fe.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&fe.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Ke=!0,Rs=!0)}if(U.isSkinnedMesh){fe.setOptional(P,U,"bindMatrix"),fe.setOptional(P,U,"bindMatrixInverse");const He=U.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),fe.setValue(P,"boneTexture",He.boneTexture,zt))}U.isBatchedMesh&&(fe.setOptional(P,U,"batchingTexture"),fe.setValue(P,"batchingTexture",U._matricesTexture,zt),fe.setOptional(P,U,"batchingIdTexture"),fe.setValue(P,"batchingIdTexture",U._indirectTexture,zt),fe.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&fe.setValue(P,"batchingColorTexture",U._colorsTexture,zt));const tn=H.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&tt.update(U,H,$e),(Ke||wt.receiveShadow!==U.receiveShadow)&&(wt.receiveShadow=U.receiveShadow,fe.setValue(P,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Qe.envMap.value=dt,Qe.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(Qe.envMapIntensity.value=N.environmentIntensity),Ke&&(fe.setValue(P,"toneMappingExposure",S.toneMappingExposure),wt.needsLights&&Gd(Qe,Rs),Q&&k.fog===!0&&j.refreshFogUniforms(Qe,Q),j.refreshMaterialUniforms(Qe,k,G,$,d.state.transmissionRenderTarget[y.id]),jr.upload(P,vc(wt),Qe,zt)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(jr.upload(P,vc(wt),Qe,zt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&fe.setValue(P,"center",U.center),fe.setValue(P,"modelViewMatrix",U.modelViewMatrix),fe.setValue(P,"normalMatrix",U.normalMatrix),fe.setValue(P,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const He=k.uniformsGroups;for(let Xe=0,Fo=He.length;Xe<Fo;Xe++){const _i=He[Xe];Ht.update(_i,$e),Ht.bind(_i,$e)}}return $e}function Gd(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Wd(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,N,H){const k=xt.get(y);k.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),xt.get(y.texture).__webglTexture=N,xt.get(y.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:H,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const H=xt.get(y);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};const Xd=P.createFramebuffer();this.setRenderTarget=function(y,N=0,H=0){L=y,R=N,T=H;let k=!0,U=null,Q=!1,ut=!1;if(y){const dt=xt.get(y);if(dt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(P.FRAMEBUFFER,null),k=!1;else if(dt.__webglFramebuffer===void 0)zt.setupRenderTarget(y);else if(dt.__hasExternalTextures)zt.rebindTextures(y,xt.get(y.texture).__webglTexture,xt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const At=y.depthTexture;if(dt.__boundDepthTexture!==At){if(At!==null&&xt.has(At)&&(y.width!==At.image.width||y.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(y)}}const Rt=y.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ut=!0);const It=xt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(It[N])?U=It[N][H]:U=It[N],Q=!0):y.samples>0&&zt.useMultisampledRTT(y)===!1?U=xt.get(y).__webglMultisampledFramebuffer:Array.isArray(It)?U=It[H]:U=It,C.copy(y.viewport),O.copy(y.scissor),B=y.scissorTest}else C.copy(Et).multiplyScalar(G).floor(),O.copy(Ft).multiplyScalar(G).floor(),B=Jt;if(H!==0&&(U=Xd),_t.bindFramebuffer(P.FRAMEBUFFER,U)&&k&&_t.drawBuffers(y,U),_t.viewport(C),_t.scissor(O),_t.setScissorTest(B),Q){const dt=xt.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt.__webglTexture,H)}else if(ut){const dt=N;for(let Rt=0;Rt<y.textures.length;Rt++){const It=xt.get(y.textures[Rt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Rt,It.__webglTexture,H,dt)}}else if(y!==null&&H!==0){const dt=xt.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,dt.__webglTexture,H)}v=-1},this.readRenderTargetPixels=function(y,N,H,k,U,Q,ut,mt=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=xt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ut!==void 0&&(dt=dt[ut]),dt){_t.bindFramebuffer(P.FRAMEBUFFER,dt);try{const Rt=y.textures[mt],It=Rt.format,At=Rt.type;if(!Dt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-k&&H>=0&&H<=y.height-U&&(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+mt),P.readPixels(N,H,k,U,Mt.convert(It),Mt.convert(At),Q))}finally{const Rt=L!==null?xt.get(L).__webglFramebuffer:null;_t.bindFramebuffer(P.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(y,N,H,k,U,Q,ut,mt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=xt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ut!==void 0&&(dt=dt[ut]),dt)if(N>=0&&N<=y.width-k&&H>=0&&H<=y.height-U){_t.bindFramebuffer(P.FRAMEBUFFER,dt);const Rt=y.textures[mt],It=Rt.format,At=Rt.type;if(!Dt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Xt),P.bufferData(P.PIXEL_PACK_BUFFER,Q.byteLength,P.STREAM_READ),y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+mt),P.readPixels(N,H,k,U,Mt.convert(It),Mt.convert(At),0);const te=L!==null?xt.get(L).__webglFramebuffer:null;_t.bindFramebuffer(P.FRAMEBUFFER,te);const pe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await kf(P,pe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Xt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Q),P.deleteBuffer(Xt),P.deleteSync(pe),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,H=0){const k=Math.pow(2,-H),U=Math.floor(y.image.width*k),Q=Math.floor(y.image.height*k),ut=N!==null?N.x:0,mt=N!==null?N.y:0;zt.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,ut,mt,U,Q),_t.unbindTexture()};const qd=P.createFramebuffer(),Yd=P.createFramebuffer();this.copyTextureToTexture=function(y,N,H=null,k=null,U=0,Q=null){Q===null&&(U!==0?(tr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=U,U=0):Q=0);let ut,mt,dt,Rt,It,At,Xt,te,pe;const ce=y.isCompressedTexture?y.mipmaps[Q]:y.image;if(H!==null)ut=H.max.x-H.min.x,mt=H.max.y-H.min.y,dt=H.isBox3?H.max.z-H.min.z:1,Rt=H.min.x,It=H.min.y,At=H.isBox3?H.min.z:0;else{const tn=Math.pow(2,-U);ut=Math.floor(ce.width*tn),mt=Math.floor(ce.height*tn),y.isDataArrayTexture?dt=ce.depth:y.isData3DTexture?dt=Math.floor(ce.depth*tn):dt=1,Rt=0,It=0,At=0}k!==null?(Xt=k.x,te=k.y,pe=k.z):(Xt=0,te=0,pe=0);const oe=Mt.convert(N.format),wt=Mt.convert(N.type);let de;N.isData3DTexture?(zt.setTexture3D(N,0),de=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(zt.setTexture2DArray(N,0),de=P.TEXTURE_2D_ARRAY):(zt.setTexture2D(N,0),de=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const Kt=P.getParameter(P.UNPACK_ROW_LENGTH),$e=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Gi=P.getParameter(P.UNPACK_SKIP_PIXELS),Ke=P.getParameter(P.UNPACK_SKIP_ROWS),Rs=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ce.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ce.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Rt),P.pixelStorei(P.UNPACK_SKIP_ROWS,It),P.pixelStorei(P.UNPACK_SKIP_IMAGES,At);const fe=y.isDataArrayTexture||y.isData3DTexture,Qe=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const tn=xt.get(y),He=xt.get(N),Xe=xt.get(tn.__renderTarget),Fo=xt.get(He.__renderTarget);_t.bindFramebuffer(P.READ_FRAMEBUFFER,Xe.__webglFramebuffer),_t.bindFramebuffer(P.DRAW_FRAMEBUFFER,Fo.__webglFramebuffer);for(let _i=0;_i<dt;_i++)fe&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xt.get(y).__webglTexture,U,At+_i),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xt.get(N).__webglTexture,Q,pe+_i)),P.blitFramebuffer(Rt,It,ut,mt,Xt,te,ut,mt,P.DEPTH_BUFFER_BIT,P.NEAREST);_t.bindFramebuffer(P.READ_FRAMEBUFFER,null),_t.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||xt.has(y)){const tn=xt.get(y),He=xt.get(N);_t.bindFramebuffer(P.READ_FRAMEBUFFER,qd),_t.bindFramebuffer(P.DRAW_FRAMEBUFFER,Yd);for(let Xe=0;Xe<dt;Xe++)fe?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,tn.__webglTexture,U,At+Xe):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,tn.__webglTexture,U),Qe?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,He.__webglTexture,Q,pe+Xe):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,He.__webglTexture,Q),U!==0?P.blitFramebuffer(Rt,It,ut,mt,Xt,te,ut,mt,P.COLOR_BUFFER_BIT,P.NEAREST):Qe?P.copyTexSubImage3D(de,Q,Xt,te,pe+Xe,Rt,It,ut,mt):P.copyTexSubImage2D(de,Q,Xt,te,Rt,It,ut,mt);_t.bindFramebuffer(P.READ_FRAMEBUFFER,null),_t.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Qe?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(de,Q,Xt,te,pe,ut,mt,dt,oe,wt,ce.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(de,Q,Xt,te,pe,ut,mt,dt,oe,ce.data):P.texSubImage3D(de,Q,Xt,te,pe,ut,mt,dt,oe,wt,ce):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Q,Xt,te,ut,mt,oe,wt,ce.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Q,Xt,te,ce.width,ce.height,oe,ce.data):P.texSubImage2D(P.TEXTURE_2D,Q,Xt,te,ut,mt,oe,wt,ce);P.pixelStorei(P.UNPACK_ROW_LENGTH,Kt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,$e),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Gi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ke),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Rs),Q===0&&N.generateMipmaps&&P.generateMipmap(de),_t.unbindTexture()},this.initRenderTarget=function(y){xt.get(y).__webglFramebuffer===void 0&&zt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?zt.setTextureCube(y,0):y.isData3DTexture?zt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?zt.setTexture2DArray(y,0):zt.setTexture2D(y,0),_t.unbindTexture()},this.resetState=function(){R=0,T=0,L=null,_t.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const Pu={type:"change"},Gl={type:"start"},Fh={type:"end"},Vr=new yo,Lu=new Bn,hx=Math.cos(70*Bf.DEG2RAD),Me=new D,qe=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_a=1e-6;class dx extends Cp{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ps.ROTATE,MIDDLE:ps.DOLLY,RIGHT:ps.PAN},this.touches={ONE:us.ROTATE,TWO:us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Xn,this._lastTargetPosition=new D,this._quat=new Xn().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new su,this._sphericalDelta=new su,this._scale=1,this._panOffset=new D,this._rotateStart=new Ct,this._rotateEnd=new Ct,this._rotateDelta=new Ct,this._panStart=new Ct,this._panEnd=new Ct,this._panDelta=new Ct,this._dollyStart=new Ct,this._dollyEnd=new Ct,this._dollyDelta=new Ct,this._dollyDirection=new D,this._mouse=new Ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=px.bind(this),this._onPointerDown=fx.bind(this),this._onPointerUp=mx.bind(this),this._onContextMenu=Sx.bind(this),this._onMouseWheel=xx.bind(this),this._onKeyDown=vx.bind(this),this._onTouchStart=yx.bind(this),this._onTouchMove=Mx.bind(this),this._onMouseDown=gx.bind(this),this._onMouseMove=_x.bind(this),this._interceptControlDown=Ex.bind(this),this._interceptControlUp=bx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pu),this.update(),this.state=ie.NONE}update(t=null){const e=this.object.position;Me.copy(e).sub(this.target),Me.applyQuaternion(this._quat),this._spherical.setFromVector3(Me),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=qe:i>Math.PI&&(i-=qe),s<-Math.PI?s+=qe:s>Math.PI&&(s-=qe),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Me.setFromSpherical(this._spherical),Me.applyQuaternion(this._quatInverse),e.copy(this.target).add(Me),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Me.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Me.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Vr.origin.copy(this.object.position),Vr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vr.direction))<hx?this.object.lookAt(this.target):(Lu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vr.intersectPlane(Lu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>_a||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_a||this._lastTargetPosition.distanceToSquared(this.target)>_a?(this.dispatchEvent(Pu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qe/60*this.autoRotateSpeed*t:qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Me.setFromMatrixColumn(e,0),Me.multiplyScalar(-t),this._panOffset.add(Me)}_panUp(t,e){this.screenSpacePanning===!0?Me.setFromMatrixColumn(e,1):(Me.setFromMatrixColumn(e,0),Me.crossVectors(this.object.up,Me)),Me.multiplyScalar(t),this._panOffset.add(Me)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Me.copy(s).sub(this.target);let r=Me.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function fx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function px(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function mx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fh),this.state=ie.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function gx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ps.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ie.DOLLY;break;case ps.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ie.ROTATE}break;case ps.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Gl)}function _x(n){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function xx(n){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(n.preventDefault(),this.dispatchEvent(Gl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Fh))}function vx(n){this.enabled!==!1&&this._handleKeyDown(n)}function yx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case us.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ie.TOUCH_ROTATE;break;case us.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case us.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ie.TOUCH_DOLLY_PAN;break;case us.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Gl)}function Mx(n){switch(this._trackPointer(n),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ie.NONE}}function Sx(n){this.enabled!==!1&&n.preventDefault()}function Ex(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Tx=[[1,"H","Hydrogen",1.008,"nonmetal",2.2,1,1,null,31,"FFFFFF"],[2,"He","Helium",4.003,"noble",null,0,0,null,28,"D9FFFF"],[3,"Li","Lithium",6.94,"alkali",.98,1,0,[1],128,"CC80FF"],[4,"Be","Beryllium",9.012,"alkaline",1.57,4,0,[2],96,"C2FF00"],[5,"B","Boron",10.81,"metalloid",2.04,4,3,null,84,"FFB5B5"],[6,"C","Carbon",12.011,"nonmetal",2.55,4,4,null,76,"909090"],[7,"N","Nitrogen",14.007,"nonmetal",3.04,4,3,null,71,"3050F8"],[8,"O","Oxygen",15.999,"nonmetal",3.44,3,2,null,66,"FF0D0D"],[9,"F","Fluorine",18.998,"halogen",3.98,1,1,null,57,"90E050"],[10,"Ne","Neon",20.18,"noble",null,0,0,null,58,"B3E3F5"],[11,"Na","Sodium",22.99,"alkali",.93,1,0,[1],166,"AB5CF2"],[12,"Mg","Magnesium",24.305,"alkaline",1.31,2,0,[2],141,"8AFF00"],[13,"Al","Aluminium",26.982,"post",1.61,4,0,[3],121,"BFA6A6"],[14,"Si","Silicon",28.085,"metalloid",1.9,6,4,null,111,"F0C8A0"],[15,"P","Phosphorus",30.974,"nonmetal",2.19,6,3,null,107,"FF8000"],[16,"S","Sulfur",32.06,"nonmetal",2.58,6,2,null,105,"FFFF30"],[17,"Cl","Chlorine",35.45,"halogen",3.16,7,1,null,102,"1FF01F"],[18,"Ar","Argon",39.948,"noble",null,0,0,null,106,"80D1E3"],[19,"K","Potassium",39.098,"alkali",.82,1,0,[1],203,"8F40D4"],[20,"Ca","Calcium",40.078,"alkaline",1,2,0,[2],176,"3DFF00"],[21,"Sc","Scandium",44.956,"transition",1.36,3,0,[3],170,"E6E6E6"],[22,"Ti","Titanium",47.867,"transition",1.54,4,0,[4,3],160,"BFC2C7"],[23,"V","Vanadium",50.942,"transition",1.63,5,0,[5,4,3],153,"A6A6AB"],[24,"Cr","Chromium",51.996,"transition",1.66,6,0,[3,6],139,"8A99C7"],[25,"Mn","Manganese",54.938,"transition",1.55,7,0,[2,7,4],145,"9C7AC7"],[26,"Fe","Iron",55.845,"transition",1.83,6,0,[2,3],140,"E06633"],[27,"Co","Cobalt",58.933,"transition",1.88,5,0,[2,3],126,"F090A0"],[28,"Ni","Nickel",58.693,"transition",1.91,4,0,[2,3],124,"50D050"],[29,"Cu","Copper",63.546,"transition",1.9,4,0,[2,1],132,"C88033"],[30,"Zn","Zinc",65.38,"transition",1.65,2,0,[2],122,"7D80B0"],[31,"Ga","Gallium",69.723,"post",1.81,4,0,[3],122,"C28F8F"],[32,"Ge","Germanium",72.63,"metalloid",2.01,6,4,null,120,"668F8F"],[33,"As","Arsenic",74.922,"metalloid",2.18,6,3,null,119,"BD80E3"],[34,"Se","Selenium",78.971,"nonmetal",2.55,6,2,null,120,"FFA100"],[35,"Br","Bromine",79.904,"halogen",2.96,7,1,null,120,"A62929"],[36,"Kr","Krypton",83.798,"noble",3,2,0,null,116,"5CB8D1"],[37,"Rb","Rubidium",85.468,"alkali",.82,1,0,[1],220,"702EB0"],[38,"Sr","Strontium",87.62,"alkaline",.95,2,0,[2],195,"00FF00"],[39,"Y","Yttrium",88.906,"transition",1.22,3,0,[3],190,"94FFFF"],[40,"Zr","Zirconium",91.224,"transition",1.33,4,0,[4],175,"94E0E0"],[41,"Nb","Niobium",92.906,"transition",1.6,5,0,[5],164,"73C2C9"],[42,"Mo","Molybdenum",95.95,"transition",2.16,6,0,[6,4],154,"54B5B5"],[43,"Tc","Technetium",98,"transition",1.9,7,0,[7],147,"3B9E9E"],[44,"Ru","Ruthenium",101.07,"transition",2.2,8,0,[3,4],146,"248F8F"],[45,"Rh","Rhodium",102.91,"transition",2.28,6,0,[3],142,"0A7D8C"],[46,"Pd","Palladium",106.42,"transition",2.2,4,0,[2,4],139,"006985"],[47,"Ag","Silver",107.87,"transition",1.93,3,0,[1],145,"C0C0C0"],[48,"Cd","Cadmium",112.41,"transition",1.69,2,0,[2],144,"FFD98F"],[49,"In","Indium",114.82,"post",1.78,3,0,[3,1],142,"A67573"],[50,"Sn","Tin",118.71,"post",1.96,4,0,[4,2],139,"668080"],[51,"Sb","Antimony",121.76,"metalloid",2.05,6,3,null,139,"9E63B5"],[52,"Te","Tellurium",127.6,"metalloid",2.1,6,2,null,138,"D47A00"],[53,"I","Iodine",126.9,"halogen",2.66,7,1,null,139,"940094"],[54,"Xe","Xenon",131.29,"noble",2.6,6,0,null,140,"429EB0"],[55,"Cs","Caesium",132.91,"alkali",.79,1,0,[1],244,"57178F"],[56,"Ba","Barium",137.33,"alkaline",.89,2,0,[2],215,"00C900"],[57,"La","Lanthanum",138.91,"lanthanide",1.1,3,0,[3],207,"70D4FF"],[58,"Ce","Cerium",140.12,"lanthanide",1.12,4,0,[3,4],204,"FFFC00"],[59,"Pr","Praseodymium",140.91,"lanthanide",1.13,4,0,[3],203,"D9FFC9"],[60,"Nd","Neodymium",144.24,"lanthanide",1.14,3,0,[3],201,"C7FFC7"],[61,"Pm","Promethium",145,"lanthanide",1.13,3,0,[3],199,"A3FFC7"],[62,"Sm","Samarium",150.36,"lanthanide",1.17,3,0,[3,2],198,"8FFFC7"],[63,"Eu","Europium",151.96,"lanthanide",1.2,3,0,[3,2],198,"61FFC7"],[64,"Gd","Gadolinium",157.25,"lanthanide",1.2,3,0,[3],196,"45FFC7"],[65,"Tb","Terbium",158.93,"lanthanide",1.2,4,0,[3,4],194,"30FFC7"],[66,"Dy","Dysprosium",162.5,"lanthanide",1.22,3,0,[3],192,"1FFFC9"],[67,"Ho","Holmium",164.93,"lanthanide",1.23,3,0,[3],192,"00FFC4"],[68,"Er","Erbium",167.26,"lanthanide",1.24,3,0,[3],189,"00E675"],[69,"Tm","Thulium",168.93,"lanthanide",1.25,3,0,[3,2],190,"00D452"],[70,"Yb","Ytterbium",173.05,"lanthanide",1.1,3,0,[3,2],187,"00BF38"],[71,"Lu","Lutetium",174.97,"lanthanide",1.27,3,0,[3],187,"00AB24"],[72,"Hf","Hafnium",178.49,"transition",1.3,4,0,[4],175,"4DC2FF"],[73,"Ta","Tantalum",180.95,"transition",1.5,5,0,[5],170,"4DA6FF"],[74,"W","Tungsten",183.84,"transition",2.36,6,0,[6,4],162,"2194D6"],[75,"Re","Rhenium",186.21,"transition",1.9,7,0,[7,4],159,"267DAB"],[76,"Os","Osmium",190.23,"transition",2.2,8,0,[8,4],159,"266696"],[77,"Ir","Iridium",192.22,"transition",2.2,6,0,[3,4],141,"175487"],[78,"Pt","Platinum",195.08,"transition",2.28,4,0,[4,2],136,"D0D0E0"],[79,"Au","Gold",196.97,"transition",2.54,5,0,[3,1],136,"FFD123"],[80,"Hg","Mercury",200.59,"transition",2,2,0,[2,1],132,"B8B8D0"],[81,"Tl","Thallium",204.38,"post",1.62,3,0,[1,3],145,"A6544D"],[82,"Pb","Lead",207.2,"post",2.33,4,0,[2,4],146,"575961"],[83,"Bi","Bismuth",208.98,"post",2.02,5,0,[3],148,"9E4B62"],[84,"Po","Polonium",209,"post",2,6,2,[4,2],140,"AB0C00"],[85,"At","Astatine",210,"halogen",2.2,7,1,null,150,"754F45"],[86,"Rn","Radon",222,"noble",2.2,2,0,null,150,"428296"],[87,"Fr","Francium",223,"alkali",.7,1,0,[1],260,"420066"],[88,"Ra","Radium",226,"alkaline",.9,2,0,[2],221,"007D00"],[89,"Ac","Actinium",227,"actinide",1.1,3,0,[3],215,"00ABFF"],[90,"Th","Thorium",232.04,"actinide",1.3,4,0,[4],206,"008AFF"],[91,"Pa","Protactinium",231.04,"actinide",1.5,5,0,[5],200,"00A1FF"],[92,"U","Uranium",238.03,"actinide",1.38,6,0,[6,4],196,"008FFF"],[93,"Np","Neptunium",237,"actinide",1.36,6,0,[5,4],190,"0080FF"],[94,"Pu","Plutonium",244,"actinide",1.28,6,0,[4,6],187,"006BFF"],[95,"Am","Americium",243,"actinide",1.13,6,0,[3,2],180,"545CF2"],[96,"Cm","Curium",247,"actinide",1.28,4,0,[3],169,"785CE3"],[97,"Bk","Berkelium",247,"actinide",1.3,4,0,[3,4],170,"8A4FE3"],[98,"Cf","Californium",251,"actinide",1.3,4,0,[3],190,"A136DA"],[99,"Es","Einsteinium",252,"actinide",1.3,3,0,[3],190,"B31BDA"],[100,"Fm","Fermium",257,"actinide",1.3,3,0,[3],190,"B31BBA"],[101,"Md","Mendelevium",258,"actinide",1.3,3,0,[3],190,"B30DA6"],[102,"No","Nobelium",259,"actinide",1.3,3,0,[2,3],190,"E006A0"],[103,"Lr","Lawrencium",266,"actinide",1.3,3,0,[3],190,"FF00CC"],[104,"Rf","Rutherfordium",267,"transition",null,4,0,[4],160,"CC0080"],[105,"Db","Dubnium",268,"transition",null,5,0,[5],160,"D6004D"],[106,"Sg","Seaborgium",269,"transition",null,6,0,[6],160,"C20000"],[107,"Bh","Bohrium",270,"transition",null,7,0,[7],160,"B60000"],[108,"Hs","Hassium",269,"transition",null,8,0,[8],160,"9E0000"],[109,"Mt","Meitnerium",278,"transition",null,6,0,[6],160,"820000"],[110,"Ds","Darmstadtium",281,"transition",null,6,0,[6],160,"75007D"],[111,"Rg","Roentgenium",282,"transition",null,6,0,[6],160,"660054"],[112,"Cn","Copernicium",285,"transition",null,2,0,[2],160,"5C004A"],[113,"Nh","Nihonium",286,"post",null,3,0,[1],170,"510A44"],[114,"Fl","Flerovium",289,"post",null,4,0,[2],180,"460D3B"],[115,"Mc","Moscovium",290,"post",null,3,0,[1,3],180,"3D1140"],[116,"Lv","Livermorium",293,"post",null,4,0,[2],180,"341244"],[117,"Ts","Tennessine",294,"halogen",null,3,1,null,180,"2A0B29"],[118,"Og","Oganesson",294,"noble",null,0,0,null,180,"1B0419"]],To=Tx.map(([n,t,e,i,s,r,o,a,c,l,u])=>({z:n,sym:t,name:e,mass:i,cat:s,en:r,maxBonds:o,anionCharge:a,charges:c,radius:l,color:"#"+u,valenceElectrons:Ax(n)}));function Ax(n){if(n===1)return 1;if(n===2)return 2;const t={3:1,4:2,5:3,6:4,7:5,8:6,9:7,10:8,11:1,12:2,13:3,14:4,15:5,16:6,17:7,18:8};if(t[n])return t[n];const e=Bh(n);return e>=13&&e<=18?e-10:0}function Bh(n){return n===1?1:n===2?18:n>=3&&n<=4?n-2:n>=5&&n<=10?n+8:n>=11&&n<=12?n-10:n>=13&&n<=18?n:n>=19&&n<=20||n>=21&&n<=30||n>=31&&n<=36?n-18:n>=37&&n<=38||n>=39&&n<=48||n>=49&&n<=54?n-36:n>=55&&n<=56?n-54:n>=72&&n<=80||n>=81&&n<=86?n-68:n>=87&&n<=88?n-86:n>=104&&n<=112||n>=113&&n<=118?n-100:3}function Cx(n){return n<=2?1:n<=10?2:n<=18?3:n<=36?4:n<=54?5:n<=86?6:7}function wx(n){if(n>=57&&n<=71)return{col:n-57+3,row:9};if(n>=89&&n<=103)return{col:n-89+3,row:10};const t=Cx(n);return{col:Bh(n),row:t}}const Rx={alkali:"#ff8a80",alkaline:"#ffb74d",transition:"#ffd54f",post:"#aed581",metalloid:"#4db6ac",nonmetal:"#64b5f6",halogen:"#ba68c8",noble:"#f06292",lanthanide:"#f48fb1",actinide:"#ffab91",exotic:"#e040fb"},Hh=n=>["alkali","alkaline","transition","post","lanthanide","actinide"].includes(n),Pe=n=>Hh(n.cat),Px=new Set([36,54,86]),Du=n=>n.cat==="noble"&&!Px.has(n.z),Iu=n=>n.sym==="F"||n.sym==="O";function Ui(n){return To.find(t=>t.sym===n)}function Gn(n,t,e){return[...t.values()].filter(i=>i.a===e||i.b===e)}function _s(n,t,e){return Gn(n,t,e).filter(i=>!i.ionic).reduce((i,s)=>i+s.order,0)}function si(n,t,e){return Gn(n,t,e).filter(i=>i.ionic).reduce((i,s)=>i+s.order,0)}function ro(n,t){return n.a===t?n.b:n.a}function er(n,t,e){const i=n.valenceElectrons+e-t;return i<0||i%2!==0?"parity":n.z<=10&&t+i/2>4?"octet":null}function kh(n,t,e){for(let i=e;i<=n.anionCharge;i++)if(!er(n,t,i))return!0;return!1}function Lx(n,t,e,i){const s=n.get(e),r=n.get(i);if(Pe(s.el)||Pe(r.el))return Pe(s.el)&&Pe(r.el)?{ok:!1,reason:{key:"chem.metalMetal"}}:{ok:!1,reason:{key:"chem.metalIonic"}};if(Du(s.el)||Du(r.el))return{ok:!1,reason:{key:"chem.nobleNoCompound"}};if(s.el.cat==="noble"&&!Iu(r.el)||r.el.cat==="noble"&&!Iu(s.el))return{ok:!1,reason:{key:"chem.nobleOnlyFO"}};const o=a=>a.el.maxBonds-_s(n,t,a.id);if(o(s)<=0)return{ok:!1,reason:{key:"chem.noCapacity",p:{sym:s.el.sym,max:s.el.maxBonds}}};if(o(r)<=0)return{ok:!1,reason:{key:"chem.noCapacity",p:{sym:r.el.sym,max:r.el.maxBonds}}};for(const a of[s,r]){if(Pe(a.el))continue;const c=si(n,t,a.id);if(!c)continue;const l=er(a.el,_s(n,t,a.id)+1,c);if(l)return{ok:!1,reason:l==="octet"?{key:"chem.octet",p:{sym:a.el.sym}}:{key:"chem.anionClosedShare",p:{sym:a.el.sym,n:c,s:c>1?"s":""}}}}return{ok:!0,type:"covalent"}}function Dx(n,t,e,i){const s=n.get(e),r=n.get(i),o=Pe(s.el)?s:Pe(r.el)?r:null,a=o?o===s?r:s:null;if(!o)return{ok:!1,reason:{key:"chem.ionicNeedMetal"}};if(a.el.cat==="noble")return{ok:!1,reason:{key:"chem.nobleNoCompound"}};const c=Math.max(...o.el.charges);if(si(n,t,o.id)>=c)return{ok:!1,reason:{key:"chem.metalMax",p:{sym:o.el.sym,max:c}}};if(!a.el.anionCharge)return{ok:!1,reason:{key:"chem.noAnion",p:{sym:a.el.sym}}};if(si(n,t,a.id)>=a.el.anionCharge)return{ok:!1,reason:{key:"chem.anionMax",p:{sym:a.el.sym,max:a.el.anionCharge}}};const l=_s(n,t,a.id),u=si(n,t,a.id)+1;return kh(a.el,l,u)?{ok:!0,type:"ionic"}:{ok:!1,reason:er(a.el,l,u)==="octet"?{key:"chem.octet",p:{sym:a.el.sym}}:{key:"chem.noLewisSharing",p:{sym:a.el.sym,n:l,s:l===1?"":"s"}}}}function zh(n,t,e,i){if(e===i)return{ok:!1,reason:{key:"chem.selfBond"}};if(Gn(n,t,e).some(o=>ro(o,e)===i))return{ok:!1,reason:{key:"chem.alreadyBonded"}};const s=Lx(n,t,e,i);if(s.ok)return s;const r=Dx(n,t,e,i);return r.ok?r:s.reason?.key&&!s.reason.key.startsWith("chem.metal")?s:r}const Ou=new Set(["F","Cl","Br","I","At"]);function Ix(n,t){if(Ou.has(n.sym)&&Ou.has(t.sym))return 1;if(n.sym==="O"&&t.sym==="O")return 2;const e=[n.sym,t.sym];return e.includes("O")&&e.includes("F")?1:3}function Vh(n,t,e){if(e.order>=3)return{ok:!1,reason:{key:e.ionic?"chem.ionicMax3":"chem.tripleMax"}};if(e.ionic){const s=n.get(e.a),r=n.get(e.b),o=Pe(s.el)?s:r,a=o===s?r:s,c=Math.max(...o.el.charges);if(si(n,t,o.id)+1>c)return{ok:!1,reason:{key:"chem.metalTransferMax",p:{sym:o.el.sym,max:c}}};if(si(n,t,a.id)+1>a.el.anionCharge)return{ok:!1,reason:{key:"chem.anionAcceptMax",p:{sym:a.el.sym,max:a.el.anionCharge}}};const l=_s(n,t,a.id),u=si(n,t,a.id)+1;return kh(a.el,l,u)?{ok:!0}:{ok:!1,reason:er(a.el,l,u)==="octet"?{key:"chem.octet",p:{sym:a.el.sym}}:{key:"chem.noLewisSharing",p:{sym:a.el.sym,n:l,s:l===1?"":"s"}}}}const i=Ix(n.get(e.a).el,n.get(e.b).el);if(e.order+1>i){const s=n.get(e.a).el.sym,r=n.get(e.b).el.sym;return{ok:!1,reason:i===2?{key:"chem.pairCapTriple",p:{a:s,b:r}}:{key:"chem.pairCapSingle",p:{a:s,b:r}}}}for(const s of[e.a,e.b]){const r=n.get(s);if(_s(n,t,s)+1>r.el.maxBonds)return{ok:!1,reason:{key:"chem.capacityMax",p:{sym:r.el.sym,max:r.el.maxBonds}}};if(Pe(r.el))continue;const o=si(n,t,s);if(!o)continue;const a=er(r.el,_s(n,t,s)+1,o);if(a==="parity")return{ok:!1,reason:{key:"chem.anionClosedShareMore",p:{sym:r.el.sym}}};if(a==="octet")return{ok:!1,reason:{key:"chem.octet",p:{sym:r.el.sym}}}}return{ok:!0}}function Ao(n,t){const e=[],i=new Set;for(const s of n.keys()){if(i.has(s))continue;const r={atoms:[],bonds:[]},o=[s];for(i.add(s);o.length;){const a=o.pop();r.atoms.push(a);for(const c of Gn(n,t,a)){r.bonds.push(c);const l=ro(c,a);i.has(l)||(i.add(l),o.push(l))}}r.bonds=[...new Set(r.bonds)],e.push(r)}return e}function Di(n,t,e){return Ao(n,t).find(i=>i.atoms.includes(e))}function Ox(n,t,e,i=null){const s=new Map,r=[];let o=0,a=0,c=0;for(const g of e){const _=n.get(g),m=Gn(n,t,g),d=m.filter(v=>!v.ionic).reduce((v,M)=>v+M.order,0),E=m.filter(v=>v.ionic).reduce((v,M)=>v+M.order,0),b=m.length>0,S=Pe(_.el),w=_.el.valenceElectrons;let R=0,T=0,L=0;if(S)R=0,T=E;else if(b){o+=w,a+=d,c+=E;const v=Math.ceil(Math.max(0,w+E-d)/2);L=_.el.z<=10?Math.max(0,Math.min(4-d,v)):v}else if(R=Math.floor(w/2),T=0,i!=null&&e.length===1){const v=(w-i)/2,M=_.el.z<=10?4:6;if(!Number.isInteger(v)||v<0||v>M)return{feasible:!1,reason:{key:"chem.lewis.charge"},charge:i};R=v,T=i}s.set(g,{lp:R,fc:T,ionU:E,covSum:d,sigma:m.length,cap:L,isMetal:S,bonded:b}),!S&&b&&r.push({id:g,cap:L,V:w,covSum:d,ionU:E,heavy:_.el.z>10,carbon:_.el.z===6,of:_.el.sym==="O"||_.el.sym==="F"})}const l=g=>{r.forEach((_,m)=>{s.get(_.id).lp=g[m],s.get(_.id).fc=_.V-2*g[m]-_.covSum})},u=(g,_)=>{const m=g.V-2*_-g.covSum;let d=Math.abs(m)+.01*_;return(g.heavy||g.carbon)&&_>0&&(d+=3*_),m>0&&g.of&&(d+=3),d},h=g=>{const _=r.length,m=new Map,d=(E,b)=>{if(E===_)return b===0?{score:0,lps:[]}:null;const S=E*4096+b;if(m.has(S))return m.get(S);let w=null;for(let R=0;R<=Math.min(r[E].cap,b);R++){const T=d(E+1,b-R);if(!T)continue;const L=T.score+u(r[E],R);(!w||L<w.score)&&(w={score:L,lps:[R,...T.lps]})}return m.set(S,w),w};return d(0,g)};if(i!=null){if(r.length===0)return[...s.values()].reduce((d,E)=>d+E.fc,0)===i?{feasible:!0,per:s,charge:i}:{feasible:!1,reason:{key:"chem.lewis.charge"},charge:i};const g=o+c-a-i;if(g%2!==0)return{feasible:!1,reason:{key:"chem.lewis.radical"},charge:i};if(g<0)return{feasible:!1,reason:{key:"chem.lewis.electrons"},charge:i};const _=h(g/2);return _?(l(_.lps),{feasible:!0,per:s,charge:i}):{feasible:!1,reason:{key:"chem.lewis.charge"},charge:i}}const f=o+c-a;let p=null;for(let g=0;g<=12&&!(p&&Math.abs(p.charge)<g);g++)for(const _ of g===0?[1]:[1,-1]){const m=f-_*g;if(m<0||m%2!==0)continue;const d=h(m/2);if(!d)continue;const E=[d.score,m/2];(!p||E<p.key)&&(p={sol:d,charge:_*g,key:E})}return p?(l(p.sol.lps),{feasible:!0,per:s,charge:p.charge}):{feasible:!0,per:s,charge:0}}function Nx(n,t,e,i=null){const s=Ox(n,t,e.atoms,i);return{...s,formula:Fx(n,t,e.atoms,s.per)}}const Ux=new Set(["N"]);function vl(n){const t=new Map;for(const a of n)t.set(a.sym,(t.get(a.sym)||0)+1);const e=[...t.keys()],i=a=>a+(t.get(a)>1?t.get(a):"");if(e.length===1)return i(e[0]);if(t.has("C")){let a=i("C");return t.has("H")&&(a+=i("H")),a+=e.filter(c=>c!=="C"&&c!=="H").sort().map(i).join(""),a}const s=t.get("H")||0,r=e.filter(a=>a!=="H");if(s>0&&r.length===1&&Ux.has(r[0]))return i(r[0])+(s>1?`H${s}`:"H");if(s>0&&r.length===1&&(r[0]==="Te"||r[0]==="Po"||r[0]==="At"))return(s>1?`H${s}`:"H")+i(r[0]);if(s===1&&r.length===1&&r[0]==="O"&&t.get("O")===1)return"OH";const o=a=>Ui(a)?.en??0;return[...e].sort((a,c)=>o(a)-o(c)||(a<c?-1:1)).map(i).join("")}function Fx(n,t,e,i=new Map){const s=new Set(e),r=new Map(e.map(p=>[p,p])),o=p=>{let g=p;for(;r.get(g)!==g;)g=r.get(g);for(;r.get(p)!==g;){const _=r.get(p);r.set(p,g),p=_}return g};for(const p of t.values())p.ionic||!s.has(p.a)||!s.has(p.b)||r.set(o(p.a),o(p.b));const a=[],c=new Map;for(const p of e){const g=o(p);c.has(g)||(c.set(g,[]),a.push(c.get(g))),c.get(g).push(p)}if(a.length===1)return vl(e.map(p=>n.get(p).el));const l=new Map,u=new Map,h=[];for(const p of a){const g=vl(p.map(m=>n.get(m).el)),_=p.reduce((m,d)=>m+(i.get(d)?.fc??0),0);_>0?l.set(g,(l.get(g)||0)+1):_<0?u.set(g,(u.get(g)||0)+1):h.push(g)}const f=p=>[...p.entries()].map(([g,_])=>_===1?g:(g.match(/[A-Z][a-z]?\d*/g)||[]).length>1&&(/\d$/.test(g)||/H/.test(g))?`(${g})${_}`:g+_).join("");return f(l)+h.join("")+f(u)}function ar(n,t){if(t===0)return n;const e=Math.abs(t),i=String(e===1?"":e)+(t>0?"+":"−"),s={"+":"⁺","-":"⁻","−":"⁻",0:"⁰",1:"¹",2:"²",3:"³",4:"⁴",5:"⁵",6:"⁶",7:"⁷",8:"⁸",9:"⁹"};return n+[...i].map(r=>s[r]||r).join("")}const Bx="₀₁₂₃₄₅₆₇₈₉";function bs(n){return[...n].map(t=>t>="0"&&t<="9"?Bx[+t]:t).join("")}function Nu(n,t,e){const i=(n.radius+t.radius)/55;return e?i*1.18:i}function qn(n){return .28+n.radius/110}const St={add:(n,t)=>({x:n.x+t.x,y:n.y+t.y,z:n.z+t.z}),sub:(n,t)=>({x:n.x-t.x,y:n.y-t.y,z:n.z-t.z}),scale:(n,t)=>({x:n.x*t,y:n.y*t,z:n.z*t}),dot:(n,t)=>n.x*t.x+n.y*t.y+n.z*t.z,cross:(n,t)=>({x:n.y*t.z-n.z*t.y,y:n.z*t.x-n.x*t.z,z:n.x*t.y-n.y*t.x}),len:n=>Math.sqrt(n.x*n.x+n.y*n.y+n.z*n.z),norm(n){const t=this.len(n)||1;return this.scale(n,1/t)}};function yl(n,t,e=null,i=120){const s=[],r=Math.PI*(3-Math.sqrt(5));for(let o=0;o<n;o++){const a=1-2*o/Math.max(1,n-1),c=Math.sqrt(Math.max(0,1-a*a)),l=r*o;s.push({x:Math.cos(l)*c,y:a,z:Math.sin(l)*c})}e&&(s[0]=St.norm(e));for(let o=0;o<i;o++){const a=s.map(()=>({x:0,y:0,z:0}));for(let c=0;c<n;c++)for(let l=c+1;l<n;l++){const u=(t[c]+t[l])/2,h=St.dot(s[c],s[l]),f=St.norm(St.sub(s[l],St.scale(s[c],h))),p=u*Math.max(.02,1-h*h);(!e||e!==c)&&(a[c]=St.add(a[c],St.scale(f,p))),(!e||e!==l)&&(a[l]=St.add(a[l],St.scale(St.neg(f),p)))}for(let c=0;c<n;c++)e!==c&&(s[c]=St.norm(St.add(s[c],St.scale(a[c],.25))))}return s}St.neg=n=>St.scale(n,-1);function Hx(n,t){const e=n+t,i=[...Array(n).fill(1),...Array(t).fill(1.6)],s=yl(e,i),r=[];for(let o=0;o<e;o++){r.push([]);for(let a=0;a<e;a++)r[o].push(Math.acos(Math.max(-1,Math.min(1,St.dot(s[o],s[a])))))}return{M:r,k:e,isLp:o=>o>=n}}function kx(n,t,e,i=null,s=new Map){const r=e;if(r.length===0)return new Map;const o=new Set(r),a=new Map,c=new Map;for(const T of r)a.set(T,Gn(n,t,T).map(L=>ro(L,T)).filter(L=>o.has(L))),c.set(T,s.get(T)?.lp??0);let l=i&&r.includes(i)?i:null;if(!l){let T=-1;for(const L of r){const v=a.get(L).length;(v>T||v===T&&L<l)&&(T=v,l=L)}}const u=new Map;for(const T of r)u.set(T,{...n.get(T).pos});u.set(l,{...n.get(l).pos});const h=new Map,f=new Map,p=new Set([l]),g=[l];for(;g.length;){const T=g.shift(),L=u.get(T),v=a.get(T).filter(V=>!p.has(V)),M=f.get(T)||null,C=v.length+c.get(T);if(C===0)continue;const O=[...v.map(()=>1),...Array(c.get(T)).fill(1.6)],B=yl(C,O,M);v.forEach((V,W)=>{const z=B[W],$=n.get(T),G=n.get(V),nt=Nu($.el,G.el,Gn(n,t,T).find(it=>ro(it,T)===V)?.ionic);u.set(V,St.add(L,St.scale(z,nt))),h.set(V,T),f.set(V,St.scale(z,-1)),p.add(V),g.push(V)})}const _=.55,m=new Map,d=new Map;for(const T of r){const L=c.get(T);if(m.set(T,[]),d.set(T,[]),L===0)continue;const v=a.get(T).length,M=f.get(T)||null,C=yl(v+L,[...Array(v).fill(1),...Array(L).fill(1.6)],M);for(let O=0;O<L;O++)m.get(T).push(St.add(u.get(T),St.scale(C[v+O],_)))}const E=new Map;for(const T of r){const L=a.get(T).length;E.set(T,Hx(L,c.get(T)))}const b=new Map;for(const T of r)b.set(T,{x:0,y:0,z:0});const S=new Map;for(const T of r)S.set(T,qn(n.get(T).el));const w=[];for(const T of r)for(const L of Gn(n,t,T))if(o.has(L.a)&&o.has(L.b)&&L.a===T){const v=n.get(L.a),M=n.get(L.b);w.push({a:L.a,b:L.b,len:Nu(v.el,M.el,L.ionic)})}const R=r.length>60?120:320;for(let T=0;T<R;T++){const L=new Map;for(const C of r)L.set(C,{x:0,y:0,z:0});const v=(C,O)=>{L.set(C,St.add(L.get(C),O))};for(const C of w){const O=u.get(C.a),B=u.get(C.b),V=St.sub(B,O),W=St.len(V)||.001,z=St.scale(St.norm(V),.5*(W-C.len));v(C.a,z),v(C.b,St.neg(z))}for(const C of r){const O=u.get(C),{M:B,k:V}=E.get(C),W=[];for(const z of a.get(C))W.push(u.get(z));for(const z of m.get(C))W.push(z);if(W.length===V)for(let z=0;z<V;z++)for(let $=z+1;$<V;$++){const G=St.norm(St.sub(W[z],O)),nt=St.norm(St.sub(W[$],O));let it=St.dot(G,nt);it=Math.max(-1,Math.min(1,it));const Et=Math.acos(it);let Ft=B[z][$]-Et;if(Ft=Math.max(-.5,Math.min(.5,Ft)),Math.abs(Ft)<.005)continue;const Jt=St.norm(St.sub(nt,St.scale(G,it))),re=St.norm(St.sub(G,St.scale(nt,it))),qt=.12*Ft,q=a.get(C).length;z>=q?m.get(C)[z-q]=St.add(m.get(C)[z-q],St.scale(Jt,qt*2)):v(a.get(C)[z],St.scale(Jt,qt)),$>=q?m.get(C)[$-q]=St.add(m.get(C)[$-q],St.scale(re,qt*2)):v(a.get(C)[$],St.scale(re,qt))}}const M=[...r];for(let C=0;C<M.length;C++)for(let O=C+1;O<M.length;O++){const B=M[C],V=M[O];if(w.some(it=>it.a===B&&it.b===V||it.a===V&&it.b===B))continue;const W=u.get(B),z=u.get(V),$=(S.get(B)+S.get(V))*1.25,G=St.sub(z,W),nt=St.len(G)||.001;if(nt<$){const it=St.scale(St.norm(G),.35*($-nt)/$);v(B,St.neg(it)),v(V,it)}}for(const C of r){if(C===l){b.set(C,{x:0,y:0,z:0});continue}let O=St.scale(St.add(b.get(C),St.scale(L.get(C),.3)),.78);b.set(C,O),u.set(C,St.add(u.get(C),O))}for(const C of r){const O=u.get(C);m.set(C,m.get(C).map(B=>St.add(O,St.scale(St.norm(St.sub(B,O)),_))))}}return u}function zx(n,t,e,i=[],s=new Set){const r=new Map;return e.forEach((o,a)=>{if(o.bonds.length===0)return;const c=[...s].find(u=>o.atoms.includes(u))||null,l=kx(n,t,o.atoms,c,i[a]?.per??new Map);for(const[u,h]of l)r.set(u,h)}),r}const Gh="mol3d.lang",Uu={en:{"btn.undo":"Undo","btn.delete":"Delete","btn.clear":"Clear all","btn.fc":"Formal charges","btn.mayhem":"Mayhem","btn.import":"Import","btn.quality":"Quality: {mode}","btn.theme":"Theme: {mode}","btn.quality.title":"Graphics quality — auto adapts when fps drops","btn.theme.title":"Switch between dark and light theme","btn.lang.title":"Switch language","btn.fc.title":"Show formal charge badges","btn.mayhem.title":"Toggle mayhem mode — exotic elements and chaotic reactions","btn.import.title":"Import custom elements from JSON file","pool.view.title":"Switch between list and periodic table","theme.dark":"Dark","theme.light":"Light","pool.title":"Element pool","pool.searchPh":"Search 118 elements...","pool.viewList":"List","pool.viewTable":"Table","el.title":"{name} · {cat} · max bonds {max}","pool.hint":"Click an element to place an atom. Metals bond ionically (electron transfer). Noble gases are inert — Kr, Xe and Rn react only with F or O.","ptable.ph":"La–Lu · Ac–Lr below","hint.html":"Click an element in the pool to place your first atom.<br />Drag atoms together to bond them — green ghost means a legal bond, red means forbidden.<br />Click a bond to raise its order; Shift+click lowers it.<br />Double-click two or more molecules to set up a reaction, then pick a condition.<br />Move around with WASD / arrow keys (Q/E = down/up) or the touch joystick.","rxn.title":"Reaction","rxn.count":"{n} molecule{s} selected","rxn.cancel":"Cancel","sel.title":"Selection","sel.empty":"Click an atom to inspect it.","sel.stats":"{cat} · mass {mass} · EN {en} · max bonds {max}","mol.title":"Molecule","mol.empty":"Build a molecule to analyze it.","mol.freeAtom":"Free atom — drag onto another to bond.","mol.unnamed":"Unnamed molecule","mol.stats":"{a} atoms · {b} bonds","mol.chargeLbl":"Ion charge","chg.minus.title":"Set ion charge one unit lower","chg.auto.title":"Automatic: minimize total formal charge","chg.plus.title":"Set ion charge one unit higher","list.title":"Molecules in scene","list.empty":"No molecules yet.","dex.disc":"Discoveries","dex.discEmpty":"Nothing discovered yet. React or build molecules to fill this log.","btn.saveDisc":"Save discoveries","dex.unknown":"Unknown","dex.notSaved":"Not saved yet","dex.chal":"Challenges","btn.reset":"Reset progress","tab.pool":"Pool","tab.info":"Info","tab.dex":"Dex","keys.hint":"WASD/arrows = move camera · drag = move / bond · click bond = raise order · Shift+click = lower · double-click molecule = select for reaction · Del = remove · Ctrl+Z = undo","quality.auto":"Auto (adapts to fps)","quality.autoShort":"Auto","quality.low":"Low","quality.med":"Medium","quality.high":"High","cond.rt":"Room temperature","cond.heat":"Heat","cond.spark":"Spark","cond.electricity":"Electricity","cond.catalyst":"Catalyst","cond.uv":"UV light","status.placed":"{name} placed. Drag it onto another atom to bond; double-click molecules to react.","status.cleared":"Scene cleared. Ctrl+Z to restore.","status.nothingUndo":"Nothing to undo.","status.undone":"Undone.","status.ionicBond":"Ionic bond {a}–{b}: electron transferred.","status.covBond":"Covalent bond {a}–{b} formed.","status.orderIonic":"Electron transfer set to {n}.","status.orderCov":"Bond order set to {n}.","status.selectFirst":"Select an atom in a molecule first.","status.chargeLimit":"Ion charge limited to ±6.","status.chargeSet":"Ion charge set to {v}.","status.chargeAuto":"Ion charge: automatic.","status.chalReset":"Challenge progress reset.","status.reactionCancelled":"Reaction cancelled.","status.noReaction":"No known reaction for this combination of molecules.","status.notEnough":"Not enough reactants — add {more} for a {cond} reaction.","status.nothingHappens":"Nothing happens under {cond}.","status.nothingHappensTry":"Nothing happens under {cond}. Try: {valid}.","status.sceneChanged":"Scene changed — the selection no longer matches a reaction.","status.reactionDone":"Reaction ({cond}): {eq}","status.mayhemEffect":"{effect} {eq}","status.selCleared":"Reaction selection cleared.","status.selRemoved":"Molecule removed from reaction selection.","status.selAdded":"Molecule added to reaction selection ({n}). Pick a condition below.","status.autoAdjusted":"Graphics auto-adjusted to {tier} ({fps} fps).","status.quality":"Graphics quality: {mode}","status.theme":"Theme: {mode}","status.lang":"Language: English","status.saveFail":"Could not save discoveries (storage unavailable).","toast.saved":"Saved {n} discovered molecule{s}.","toast.newDisc":"New discovery: {f}{name}","toast.challenge":"Challenge complete: {name}!","snap.upgradeTo":"Release to raise bond to order {n}","snap.ionic":"Release to transfer electrons (ionic bond)","snap.bond":"Release to bond","chem.metalMetal":"Metal–metal bonding is metallic, not molecular","chem.metalIonic":"Metals bond ionically here (electron transfer)","chem.nobleNoCompound":"Noble gas does not form compounds","chem.nobleOnlyFO":"Noble gases only bond with F or O","chem.noCapacity":"{sym} has no bonding capacity left (max {max})","chem.anionClosedShare":"{sym} is an anion — it accepted {n} electron{s} and its shell is closed, so it cannot share electrons","chem.ionicNeedMetal":"Ionic bonds need a metal","chem.metalMax":"{sym} has transferred its maximum electrons (max +{max})","chem.noAnion":"{sym} does not form anions","chem.anionMax":"{sym} has accepted its maximum electrons ({max})","chem.octet":"{sym} would exceed its octet (8 electrons)","chem.noLewisSharing":"{sym} cannot accept an electron while sharing {n} bond{s} — no valid Lewis structure","chem.selfBond":"An atom cannot bond to itself","chem.alreadyBonded":"Already bonded — click the bond to increase its order","chem.ionicMax3":"At most 3 electrons can transfer per bond","chem.tripleMax":"Triple bond is the maximum","chem.metalTransferMax":"{sym} cannot transfer more than {max} electrons","chem.anionAcceptMax":"{sym} cannot accept more than {max} electrons","chem.pairCapTriple":"{a}–{b} bonds cannot form a triple bond","chem.pairCapSingle":"{a}–{b} bonds are limited to single bonds","chem.capacityMax":"{sym} would exceed its bonding capacity (max {max})","chem.anionClosedShareMore":"{sym} is an anion — its closed shell cannot share more electrons","chem.lewis.charge":"No valid Lewis structure for that charge.","chem.lewis.radical":"Odd electron count — a radical. Adjust the ion charge.","chem.lewis.electrons":"Not enough electrons for that charge.","chem.partialIonic":"Incomplete ionic transfer: {sym} still holds an unpaired electron. Click the ionic bond to raise its order and complete the electron transfer."},vi:{"btn.undo":"Hoàn tác","btn.delete":"Xóa","btn.clear":"Xóa hết","btn.fc":"Điện tích hình thức","btn.mayhem":"Hỗn loạn","btn.import":"Nhập","btn.quality":"Chất lượng: {mode}","btn.theme":"Giao diện: {mode}","btn.quality.title":"Chất lượng đồ họa — tự điều chỉnh khi fps giảm","btn.theme.title":"Chuyển giữa giao diện tối và sáng","btn.lang.title":"Chuyển ngôn ngữ","btn.fc.title":"Hiện điện tích hình thức","btn.mayhem.title":"Chế độ hỗn loạn — nguyên tố kỳ lạ và phản ứng hỗn loạn","btn.import.title":"Nhập nguyên tố tùy chỉnh từ file JSON","pool.view.title":"Chuyển giữa danh sách và bảng tuần hoàn","theme.dark":"Tối","theme.light":"Sáng","pool.title":"Nguyên tố","pool.searchPh":"Tìm kiếm 118 nguyên tố...","pool.viewList":"Danh sách","pool.viewTable":"Bảng","el.title":"{name} · {cat} · tối đa {max} liên kết","pool.hint":"Bấm vào một nguyên tố để đặt nguyên tử. Kim loại liên kết ion (chuyển electron). Khí hiếm trơ — Kr, Xe và Rn chỉ phản ứng với F hoặc O.","ptable.ph":"La–Lu · Ac–Lr ở dưới","hint.html":"Bấm một nguyên tố trong kho để đặt nguyên tử đầu tiên.<br />Kéo các nguyên tử vào nhau để liên kết — bóng xanh nghĩa là liên kết hợp lệ, đỏ nghĩa là bị cấm.<br />Bấm vào liên kết để tăng bậc; Shift+bấm để giảm.<br />Nhấp đôi hai phân tử trở lên để tạo phản ứng, sau đó chọn điều kiện.<br />Di chuyển bằng WASD / phím mũi tên (Q/E = xuống/lên) hoặc joystick cảm ứng.","rxn.title":"Phản ứng","rxn.count":"{n} phân tử đã chọn","rxn.cancel":"Hủy","sel.title":"Lựa chọn","sel.empty":"Bấm vào một nguyên tử để xem chi tiết.","sel.stats":"{cat} · khối lượng {mass} · độ âm điện {en} · tối đa {max} liên kết","mol.title":"Phân tử","mol.empty":"Hãy tạo phân tử để phân tích.","mol.freeAtom":"Nguyên tử tự do — kéo vào nguyên tử khác để liên kết.","mol.unnamed":"Phân tử chưa đặt tên","mol.stats":"{a} nguyên tử · {b} liên kết","mol.chargeLbl":"Điện tích ion","chg.minus.title":"Giảm điện tích ion một đơn vị","chg.auto.title":"Tự động: cực tiểu hóa tổng điện tích hình thức","chg.plus.title":"Tăng điện tích ion một đơn vị","list.title":"Phân tử trong khung cảnh","list.empty":"Chưa có phân tử nào.","dex.disc":"Khám phá","dex.discEmpty":"Chưa có gì được khám phá. Hãy phản ứng hoặc tạo phân tử để lấp đầy sổ này.","btn.saveDisc":"Lưu khám phá","dex.unknown":"Không rõ","dex.notSaved":"Chưa lưu","dex.chal":"Thử thách","btn.reset":"Đặt lại tiến trình","tab.pool":"Nguyên tố","tab.info":"Thông tin","tab.dex":"Sổ tay","keys.hint":"WASD/phím mũi tên = di chuyển camera · kéo = di chuyển / liên kết · bấm liên kết = tăng bậc · Shift+bấm = giảm · nhấp đôi phân tử = chọn để phản ứng · Del = xóa · Ctrl+Z = hoàn tác","quality.auto":"Tự động (điều chỉnh theo fps)","quality.autoShort":"Tự động","quality.low":"Thấp","quality.med":"Trung bình","quality.high":"Cao","cond.rt":"Nhiệt độ phòng","cond.heat":"Nhiệt","cond.spark":"Tia lửa điện","cond.electricity":"Dòng điện","cond.catalyst":"Chất xúc tác","cond.uv":"Ánh sáng UV","status.placed":"Đã đặt {name}. Kéo vào nguyên tử khác để liên kết; nhấp đôi các phân tử để phản ứng.","status.cleared":"Đã xóa khung cảnh. Ctrl+Z để khôi phục.","status.nothingUndo":"Không có gì để hoàn tác.","status.undone":"Đã hoàn tác.","status.ionicBond":"Liên kết ion {a}–{b}: đã chuyển electron.","status.covBond":"Đã tạo liên kết cộng hóa trị {a}–{b}.","status.orderIonic":"Đã đặt mức chuyển electron thành {n}.","status.orderCov":"Đã đặt bậc liên kết thành {n}.","status.selectFirst":"Hãy chọn một nguyên tử trong phân tử trước.","status.chargeLimit":"Điện tích ion giới hạn trong ±6.","status.chargeSet":"Đã đặt điện tích ion thành {v}.","status.chargeAuto":"Điện tích ion: tự động.","status.chalReset":"Đã đặt lại tiến trình thử thách.","status.reactionCancelled":"Đã hủy phản ứng.","status.noReaction":"Không có phản ứng đã biết cho tổ hợp phân tử này.","status.notEnough":"Chưa đủ chất phản ứng — thêm {more} cho phản ứng {cond}.","status.nothingHappens":"Không có gì xảy ra với {cond}.","status.nothingHappensTry":"Không có gì xảy ra với {cond}. Thử: {valid}.","status.sceneChanged":"Khung cảnh đã thay đổi — lựa chọn không còn khớp phản ứng nào.","status.reactionDone":"Phản ứng ({cond}): {eq}","status.mayhemEffect":"{effect} {eq}","status.selCleared":"Đã xóa lựa chọn phản ứng.","status.selRemoved":"Đã bỏ phân tử khỏi lựa chọn phản ứng.","status.selAdded":"Đã thêm phân tử vào lựa chọn phản ứng ({n}). Chọn điều kiện bên dưới.","status.autoAdjusted":"Đã tự động điều chỉnh đồ họa xuống {tier} ({fps} fps).","status.quality":"Chất lượng đồ họa: {mode}","status.theme":"Giao diện: {mode}","status.lang":"Ngôn ngữ: Tiếng Việt","status.saveFail":"Không thể lưu khám phá (bộ nhớ không khả dụng).","toast.saved":"Đã lưu {n} phân tử đã khám phá.","toast.newDisc":"Khám phá mới: {f}{name}","toast.challenge":"Hoàn thành thử thách: {name}!","snap.upgradeTo":"Thả để nâng liên kết lên bậc {n}","snap.ionic":"Thả để chuyển electron (liên kết ion)","snap.bond":"Thả để liên kết","chem.metalMetal":"Liên kết kim loại–kim loại là liên kết kim loại, không phải phân tử","chem.metalIonic":"Kim loại liên kết ion tại đây (chuyển electron)","chem.nobleNoCompound":"Khí hiếm không tạo thành hợp chất","chem.nobleOnlyFO":"Khí hiếm chỉ liên kết với F hoặc O","chem.noCapacity":"{sym} không còn khả năng liên kết (tối đa {max})","chem.anionClosedShare":"{sym} là anion — đã nhận {n} electron nên lớp vỏ đã kín, không thể dùng chung electron","chem.ionicNeedMetal":"Liên kết ion cần kim loại","chem.metalMax":"{sym} đã chuyển toàn bộ electron tối đa (tối đa +{max})","chem.noAnion":"{sym} không tạo anion","chem.anionMax":"{sym} đã nhận đủ electron tối đa ({max})","chem.octet":"{sym} sẽ vượt bát tử (8 electron)","chem.noLewisSharing":"{sym} không thể nhận thêm electron khi đang dùng chung {n} liên kết — không có cấu trúc Lewis hợp lệ","chem.selfBond":"Nguyên tử không thể tự liên kết với chính nó","chem.alreadyBonded":"Đã liên kết — bấm vào liên kết để tăng bậc","chem.ionicMax3":"Mỗi liên kết chuyển tối đa 3 electron","chem.tripleMax":"Liên kết ba là bậc tối đa","chem.metalTransferMax":"{sym} không thể chuyển nhiều hơn {max} electron","chem.anionAcceptMax":"{sym} không thể nhận nhiều hơn {max} electron","chem.pairCapTriple":"Liên kết {a}–{b} không thể tạo liên kết ba","chem.pairCapSingle":"Liên kết {a}–{b} chỉ giới hạn ở liên kết đơn","chem.capacityMax":"{sym} sẽ vượt quá khả năng liên kết (tối đa {max})","chem.anionClosedShareMore":"{sym} là anion — lớp vỏ kín không thể chia sẻ thêm electron","chem.lewis.charge":"Không có cấu trúc Lewis hợp lệ cho điện tích đó.","chem.lewis.radical":"Số electron lẻ — gốc tự do. Hãy điều chỉnh điện tích ion.","chem.lewis.electrons":"Không đủ electron cho điện tích đó.","chem.partialIonic":"Chuyển electron ion chưa hoàn tất: {sym} còn một electron chưa ghép đôi. Nhấp vào liên kết ion để tăng bậc và hoàn tất chuyển electron."}},Vx={1:"Hidro",2:"Heli",3:"Liti",4:"Beryli",5:"Bo",6:"Cacbon",7:"Nitơ",8:"Oxi",9:"Flo",10:"Neon",11:"Natri",12:"Magie",13:"Nhôm",14:"Silic",15:"Phốtpho",16:"Lưu huỳnh",17:"Clo",18:"Argon",19:"Kali",20:"Canxi",21:"Scandium",22:"Titan",23:"Vanadium",24:"Crom",25:"Mangan",26:"Sắt",27:"Coban",28:"Nikel",29:"Đồng",30:"Kẽm",31:"Gallium",32:"Germani",33:"Asen",34:"Selen",35:"Brôm",36:"Krypton",37:"Rubidium",38:"Strontium",39:"Yttrium",40:"Zirconium",41:"Niobi",42:"Molypden",43:"Techneti",44:"Rutheni",45:"Rhodi",46:"Paladi",47:"Bạc",48:"Cadmi",49:"Indi",50:"Thiếc",51:"Antimon",52:"Tellur",53:"Iot",54:"Xenon",55:"Caesi",56:"Bari",57:"Lanthan",58:"Ceri",59:"Praseodymi",60:"Neodymi",61:"Promethi",62:"Samari",63:"Europi",64:"Gadolini",65:"Terbi",66:"Dysprosi",67:"Holmi",68:"Erbi",69:"Thuli",70:"Ytterbi",71:"Luteti",72:"Hafni",73:"Tantali",74:"Vonfram",75:"Rheni",76:"Osmi",77:"Iridi",78:"Platin",79:"Vàng",80:"Thủy ngân",81:"Thali",82:"Chì",83:"Bismut",84:"Poloni",85:"Astatin",86:"Radon",87:"Franci",88:"Radium",89:"Actini",90:"Thori",91:"Protactini",92:"Urani",93:"Neptuni",94:"Plutoni",95:"Americi",96:"Curi",97:"Berkelium",98:"Californium",99:"Einsteinium",100:"Fermium",101:"Mendelevium",102:"Nobelium",103:"Lawrencium",104:"Rutherfordium",105:"Dubnium",106:"Seaborgium",107:"Bohrium",108:"Hassium",109:"Meitnerium",110:"Darmstadtium",111:"Roentgenium",112:"Copernicium",113:"Nihonium",114:"Flerovium",115:"Moscovium",116:"Livermorium",117:"Tennessine",118:"Oganesson"},Gx={alkali:"Kim loại kiềm",alkaline:"Kim loại kiềm thổ",transition:"Kim loại chuyển tiếp",post:"Kim loại sau chuyển tiếp",metalloid:"Á kim",nonmetal:"Phi kim",halogen:"Halogen",noble:"Khí hiếm",lanthanide:"Lantanide",actinide:"Actinide",exotic:"Kỳ lạ"},Wx={alkali:"Alkali metal",alkaline:"Alkaline earth",transition:"Transition metal",post:"Post-transition metal",metalloid:"Metalloid",nonmetal:"Reactive nonmetal",halogen:"Halogen",noble:"Noble gas",lanthanide:"Lanthanide",actinide:"Actinide",exotic:"Exotic"};let yn="en";function Xx(){try{const n=localStorage.getItem(Gh);(n==="vi"||n==="en")&&(yn=n)}catch{}document.documentElement.lang=yn}function Wh(){return yn}function me(){return yn==="vi"}function qx(){return yn==="en"?"vi":"en"}function Yx(n){yn=n==="vi"?"vi":"en";try{localStorage.setItem(Gh,yn)}catch{}Wl()}function at(n,t){let e=Uu[yn]?.[n]??Uu.en[n]??n;if(t)for(const[i,s]of Object.entries(t))e=e.replaceAll(`{${i}}`,String(s));return e}function Co(n){return n?typeof n=="string"?n:at(n.key,n.p):""}function An(n){if(yn==="vi"){const t=Vx[n.z];if(t)return t}return n.name}function nr(n){return(yn==="vi"?Gx[n]:Wx[n])||n}function Wl(){document.documentElement.lang=yn;for(const n of document.querySelectorAll("[data-i18n]"))n.textContent=at(n.dataset.i18n);for(const n of document.querySelectorAll("[data-i18n-html]"))n.innerHTML=at(n.dataset.i18nHtml);for(const n of document.querySelectorAll("[data-i18n-ph]"))n.placeholder=at(n.dataset.i18nPh);for(const n of document.querySelectorAll("[data-i18n-title]"))n.title=at(n.dataset.i18nTitle)}const $x={H2O:"Water",CO2:"Carbon dioxide",CO:"Carbon monoxide",CH4:"Methane",NH3:"Ammonia",H2O2:"Hydrogen peroxide",SO2:"Sulfur dioxide",SO3:"Sulfur trioxide",NO:"Nitrogen monoxide",NO2:"Nitrogen dioxide",N2O:"Dinitrogen monoxide (laughing gas)",N2O3:"Dinitrogen trioxide",N2O4:"Dinitrogen tetroxide",N2O5:"Dinitrogen pentoxide",SF6:"Sulfur hexafluoride",PH3:"Phosphine",SiO2:"Silicon dioxide",C2H6:"Ethane",C2H4:"Ethene",C2H2:"Ethyne",C3H8:"Propane",C3H6:"Propene",C3H4:"Propyne",C4H10:"Butane",C5H12:"Pentane",C6H6:"Benzene",C6H12:"Cyclohexane",C6H14:"Hexane",C2H6O:"Ethanol (or dimethyl ether)",CH4O:"Methanol",CH2O:"Methanal (formaldehyde)",CHCl3:"Trichloromethane (chloroform)",CCl4:"Tetrachloromethane (carbon tetrachloride)",CS2:"Carbon disulfide",BF3:"Boron trifluoride",BCl3:"Boron trichloride",BH3:"Borane",NH4Cl:"Ammonium chloride",SiH4:"Silane",GeH4:"Germane",AsH3:"Arsine",H2S:"Hydrogen sulfide",HF:"Hydrogen fluoride",HBr:"Hydrogen bromide",HI:"Hydrogen iodide",HCl:"Hydrogen chloride",H2:"Hydrogen",N2:"Nitrogen",O2:"Dioxygen",O3:"Ozone",F2:"Difluorine",Cl2:"Dichlorine",Br2:"Dibromine",I2:"Diiodine",P4:"Tetraphosphorus",S8:"Cyclo-octasulfur",PCl3:"Phosphorus trichloride",PCl5:"Phosphorus pentachloride",XeF2:"Xenon difluoride",XeF4:"Xenon tetrafluoride",XeF6:"Xenon hexafluoride",XeO3:"Xenon trioxide",XeO4:"Xenon tetroxide",KrF2:"Krypton difluoride",N2H4:"Hydrazine",H2O2:"Hydrogen peroxide",NO2:"Nitrogen dioxide"},Kx={"OH-1":"Hydroxide","NH4+1":"Ammonium","H3O+1":"Hydronium","NO3-1":"Nitrate","NO2-1":"Nitrite","CO3-2":"Carbonate","HCO3-1":"Hydrogen carbonate","SO4-2":"Sulfate","SO3-2":"Sulfite","HSO4-1":"Hydrogen sulfate","PO4-3":"Phosphate","PO3-3":"Phosphite","ClO-1":"Hypochlorite","ClO2-1":"Chlorite","ClO3-1":"Chlorate","ClO4-1":"Perchlorate","BrO3-1":"Bromate","IO3-1":"Iodate","MnO4-1":"Permanganate","CrO4-2":"Chromate","Cr2O7-2":"Dichromate","CN-1":"Cyanide","O2-2":"Peroxide","C2O4-2":"Oxalate","CNS-1":"Thiocyanate"},Fu={sulfate:"sulfuric",sulfite:"sulfurous",phosphate:"phosphoric",phosphite:"phosphorous",cyanide:"hydrocyanic"},jx=["mono","di","tri","tetra","penta","hexa","hepta","octa","nona","deca"],Xh={O:"oxide",F:"fluoride",Cl:"chloride",Br:"bromide",I:"iodide",At:"astatide",S:"sulfide",Se:"selenide",Te:"telluride",N:"nitride",P:"phosphide",As:"arsenide",Sb:"antimonide",C:"carbide",Si:"silicide",B:"boride",Ge:"germanide",H:"hydride",Po:"polonide",Ts:"tennesside",Lv:"livermoride"},Zx=["","I","II","III","IV","V","VI","VII","VIII"],Jx={H2O:"Nước",CO2:"Cacbon dioxit",CO:"Cacbon monooxit",CH4:"Metan",NH3:"Amoniac",H2O2:"Hiđro peroxit",SO2:"Lưu huỳnh dioxit",SO3:"Lưu huỳnh trioxit",NO:"Nitơ monooxit",NO2:"Nitơ dioxit",N2O:"Đinitơ monooxit (khí cười)",N2O3:"Đinitơ trioxit",N2O4:"Đinitơ tetraoxit",N2O5:"Đinitơ pentaoxit",SF6:"Lưu huỳnh hexaflorua",PH3:"Photphin",SiO2:"Silic dioxit",C2H6:"Etan",C2H4:"Eten",C2H2:"Etin",C3H8:"Propan",C3H6:"Propen",C3H4:"Propin",C4H10:"Butan",C5H12:"Pentan",C6H6:"Benzên",C6H12:"Cyclohexan",C6H14:"Hexan",C2H6O:"Etanol (hoặc dimetyl ete)",CH4O:"Metanol",CH2O:"Methanal (fomanđehit)",CHCl3:"Triclorometan (cloroform)",CCl4:"Tetraclorometan (cacbon tetraclorua)",CS2:"Cacbon disunfua",BF3:"Bo triflorua",BCl3:"Bo triclorua",BH3:"Boran",NH4Cl:"Amoni clorua",SiH4:"Silan",GeH4:"German",AsH3:"Arsin",H2S:"Hiđro sunfua",HF:"Hiđro florua",HBr:"Hiđro bromua",HI:"Hiđro iodua",HCl:"Hiđro clorua",H2:"Hiđro",N2:"Nitơ",O2:"Đioxi",O3:"Ozôn",F2:"Điflo",Cl2:"Điclo",Br2:"Đibrom",I2:"Điiod",P4:"Tetraphotpho",S8:"Cyclo-octasunfua",PCl3:"Photpho triclorua",PCl5:"Photpho pentaclorua",XeF2:"Xenon diflorua",XeF4:"Xenon tetraflorua",XeF6:"Xenon hexaflorua",XeO3:"Xenon trioxit",XeO4:"Xenon tetraoxit",KrF2:"Krypton diflorua",N2H4:"Hiđrazin"},Qx={"OH-1":"Hidroxit","NH4+1":"Amoni","H3O+1":"Hidroni","NO3-1":"Nitrat","NO2-1":"Nitrit","CO3-2":"Cacbonat","HCO3-1":"Hiđrocacbonat","SO4-2":"Sunfat","SO3-2":"Sunfit","HSO4-1":"Hiđrosunfat","PO4-3":"Photphat","PO3-3":"Photphit","ClO-1":"Hypoclorit","ClO2-1":"Clorit","ClO3-1":"Clorat","ClO4-1":"Perclorat","BrO3-1":"Bromat","IO3-1":"Iodat","MnO4-1":"Permanaganat","CrO4-2":"Cromat","Cr2O7-2":"Đicromat","CN-1":"Xianua","O2-2":"Peroxit","C2O4-2":"Oxalat","CNS-1":"Thiocyanat"},qh={O:"oxit",F:"florua",Cl:"clorua",Br:"bromua",I:"iodua",At:"astatua",S:"sunfua",Se:"selenua",Te:"telurua",N:"nitrua",P:"photphua",As:"asenua",Sb:"antimonua",C:"cacbua",Si:"silicua",B:"borua",Ge:"germanua",H:"hiđrua",Po:"polonua",Ts:"tennessua",Lv:"livermorua"},tv=["mono","đi","tri","tetra","penta","hexa","hepta","octa","nona","deca"],ev=["meth","eth","prop","but","pent","hex","hept","oct","non","dec"],nv=["met","et","prop","but","pent","hex","hept","oct","non","dec"],iv={C:"cacbon",H:"hiđro",N:"nitơ",O:"oxi",S:"lưu huỳnh",P:"photpho",F:"flo",Cl:"clo",Br:"brôm",I:"iot",Se:"selen",Si:"silic",B:"bo",As:"asen",Te:"tellur"},Bu={sunfat:"sunfuric",sunfit:"sunfurơ",nitrat:"nitric",nitrit:"nitrơ",photphat:"photphoric",photphit:"photphơ",hypoclorit:"hypoclorơ",clorit:"clorơ",hiđrosunfat:"sunfuric",xianua:"xianhidric"};function Hu(n){return(me()?tv:jx)[n-1]||`${n}`}function sv(n){const t=n.toLowerCase();return Bu[t]?"axit "+Bu[t]:t.endsWith("at")?"axit "+t.replace(/at$/,"ic"):t.endsWith("it")?"axit "+t.replace(/it$/,"ơ"):t.endsWith("ua")?"axit "+t.replace(/ua$/,"hidric"):"axit "+t}function rv(n){return iv[n]||n.toLowerCase()}function xa(n,t,e){const i=me(),s=i?Jx:$x,r=i?Qx:Kx,o=qs(n);if(t===0&&s[o])return s[o];const a=`${o}${t>0?"+"+t:t}`;if(r[a])return r[a];const c=new Set(n.map(l=>l.el.sym));if(c.size===2&&c.has("C")&&c.has("H")){const l=n.filter(h=>h.el.sym==="C").length,u=n.filter(h=>h.el.sym==="H").length;if(l>=1&&l<=10){const h=(i?nv:ev)[l-1];if(u===2*l+2)return mn(h+(i?"an":"ane"));if(u===2*l)return e.some(f=>f.order===3)?mn(h+(i?"in":"yne")):mn(h+(i?"en":"ene"));if(u===2*l-2)return mn(e.some(f=>f.order===3)?h+(i?"in":"yne"):h+(i?"ađien":"diene"))}}if(t===0){const l=n.filter(u=>u.el.sym==="H").length;if(l>0){const u=n.filter(p=>p.el.sym!=="H"),f=`${qs(u)}-${l}`;if(r[f]&&u.length>1){if(i)return mn(sv(r[f]));const p=r[f].toLowerCase();if(Fu[p])return mn(Fu[p]+" acid");if(p.endsWith("ate"))return mn(p.replace(/ate$/,"ic")+" acid");if(p.endsWith("ite"))return mn(p.replace(/ite$/,"ous")+" acid");if(p.endsWith("ide"))return mn("hydro"+p.replace(/ide$/,"ic")+" acid")}}}if(n.every(l=>!Pe(l.el))&&new Set(n.map(l=>l.el.sym)).size===2){const l=new Map;for(const g of n)l.set(g.el.sym,(l.get(g.el.sym)||0)+1);const[u,h]=[...l.keys()].sort((g,_)=>ku(n,g)-ku(n,_)),f=[];f.push((l.get(u)===1&&u!=="C"?"":Hu(l.get(u)))+(i?rv(u):av(u)));const p=i?qh[h]||h.toLowerCase()+"ua":Xh[h]||h.toLowerCase()+"ide";return f.push(Hu(l.get(h))+p),mn(f.join(" "))}return null}function ov(n,t,e,i,s=null){if(!t.some(E=>E.ionic))return xa(n,i,t);const o=t.filter(E=>!E.ionic),a=new Map(n.map(E=>[E.id,[]]));for(const E of o)a.get(E.a).push({other:E.b,order:E.order}),a.get(E.b).push({other:E.a,order:E.order});const c=[],l=new Set;for(const E of n){if(l.has(E.id))continue;const b=[],S=[E.id];for(l.add(E.id);S.length;){const w=S.pop();b.push(w);for(const{other:R}of a.get(w))l.has(R)||(l.add(R),S.push(R))}c.push(b)}const u=[],h=[];for(const E of c){const b=E.map(T=>n.find(L=>L.id===T)),S=o.filter(T=>E.includes(T.a)&&E.includes(T.b));let w=0;for(const T of b){if(s){w+=s.get(T.id)?.fc??0;continue}const L=t.filter(v=>v.ionic&&(v.a===T.id||v.b===T.id)).reduce((v,M)=>v+M.order,0);if(Pe(T.el))w+=L;else{const v=S.filter(O=>O.a===T.id||O.b===T.id).reduce((O,B)=>O+B.order,0),M=T.el.valenceElectrons+L-v,C=Math.max(0,Math.floor(M/2));w+=T.el.valenceElectrons-2*C-v}}const R={atoms:b,bonds:S,charge:w};(w>0?u:h).push(R)}const f=[],p=new Map;for(const E of u)if(E.atoms.length===1&&Pe(E.atoms[0].el)){const b=E.atoms[0].el,S=E.charge,w=b.charges&&b.charges.length>1?`(${Zx[S]||S})`:"",R="cat:"+b.sym+w;p.set(R,(p.get(R)||0)+1),f.push({key:R,name:An(b)+w})}else{const b=xa(E.atoms,E.charge,E.bonds),S="cat:"+(b||qs(E.atoms)+E.charge);p.set(S,(p.get(S)||0)+1),f.push({key:S,name:b?b.toLowerCase():`ion ${qs(E.atoms)}`})}const g=new Map;for(const E of h){let b;if(E.atoms.length===1){const w=E.atoms[0].el;b=me()?qh[w.sym]||w.name.toLowerCase()+"ua":Xh[w.sym]||w.name.toLowerCase()+"ide"}else b=xa(E.atoms,E.charge,E.bonds),b=b?b.toLowerCase():`ion ${qs(E.atoms)}`;const S="an:"+b;g.set(S,(g.get(S)||0)+1)}const _=[...p.entries()].map(([E])=>f.find(b=>b.key===E).name).join(" "),m=[...g.entries()].map(([E])=>E.slice(3)).join(" "),d=mn(`${_} ${m}`.trim());return i!==0?`${d} (${me()?"điện tích":"net charge"} ${i>0?"+":""}${i})`:d}function ku(n,t){return n.find(i=>i.el.sym===t).el.en??0}function av(n){return{C:"carbon",H:"hydrogen",N:"nitrogen",O:"oxygen",S:"sulfur",P:"phosphorus",F:"fluorine",Cl:"chlorine",Br:"bromine",I:"iodine",Se:"selenium",Si:"silicon",B:"boron",As:"arsenic",Te:"tellurium",H2:"hydrogen"}[n]||n.toLowerCase()}function mn(n){return n.charAt(0).toUpperCase()+n.slice(1)}function qs(n){return vl(n.map(t=>t.el))}function lv(n){const t=new Map,e=/([A-Z][a-z]?)(\d*)/g;let i;for(;(i=e.exec(n))!==null;){if(!i[1])continue;const s=i[2]?parseInt(i[2]):1;t.set(i[1],(t.get(i[1])||0)+s)}return t}function cv(n,t,e){const i=lv(n),s=[...i.keys()],r=s.some(l=>{const u=Ui(l);return u&&Pe(u)}),o=i.has("H"),a=i.has("O"),c=i.has("C");if(i.has("N"),s.length===1)return{key:"element",label:me()?"Nguyên tố":"Element"};if(n==="H2O")return{key:"oxide",label:me()?"Oxit":"Oxide"};if(c&&i.get("H")>0&&s.filter(l=>l!=="C"&&l!=="H").length===0){const l=i.get("C")||1,u=i.get("H")||0;return u===2*l+2?{key:"alkane",label:me()?"Ankan":"Alkane"}:u===2*l?{key:"alkene",label:me()?"Anken":"Alkene"}:u===2*l-2?{key:"alkyne",label:me()?"Ankin":"Alkyne"}:{key:"organic",label:me()?"Hữu cơ":"Organic"}}if(c&&!(a&&s.length===2))return{key:"organic",label:me()?"Hữu cơ":"Organic"};if(r&&a&&o)return{key:"base",label:me()?"Bazơ":"Base"};if(o&&s.length>=2&&!r){const l=s.filter(u=>u!=="H");if(l.length===1&&(l[0]==="F"||l[0]==="Cl"||l[0]==="Br"||l[0]==="I"))return{key:"acid",label:me()?"Axit":"Acid"};if(l.some(u=>u==="S"||u==="N"||u==="P"))return{key:"acid",label:me()?"Axit":"Acid"}}if(a&&s.length===2){const l=s.find(h=>h!=="O"),u=Ui(l);return u&&Pe(u)?{key:"basicOxide",label:me()?"Oxit bazơ":"Basic oxide"}:{key:"acidicOxide",label:me()?"Oxit axit":"Acidic oxide"}}return a&&o&&!r?{key:"acid",label:me()?"Axit":"Acid"}:r&&a&&!o?{key:"basicOxide",label:me()?"Oxit bazơ":"Basic oxide"}:r?{key:"salt",label:me()?"Muối":"Salt"}:s.length===2&&!r?{key:"binary",label:me()?"Hợp chất nhị nguyên":"Binary compound"}:{key:"compound",label:me()?"Hợp chất":"Compound"}}const uv=[{tier:1,formula:"H2O",charge:0,name:"Water",vi:"Nước"},{tier:1,formula:"CO2",charge:0,name:"Carbon dioxide",vi:"Cacbon dioxit"},{tier:1,formula:"CH4",charge:0,name:"Methane",vi:"Metan"},{tier:1,formula:"NH3",charge:0,name:"Ammonia",vi:"Amoniac"},{tier:1,formula:"O2",charge:0,name:"Dioxygen",vi:"Đioxi"},{tier:1,formula:"N2",charge:0,name:"Dinitrogen",vi:"Nitơ"},{tier:1,formula:"NaCl",charge:0,name:"Sodium chloride",vi:"Natri clorua"},{tier:1,formula:"HCl",charge:0,name:"Hydrogen chloride",vi:"Hiđro clorua"},{tier:2,formula:"C2H6",charge:0,name:"Ethane",vi:"Etan"},{tier:2,formula:"C2H4",charge:0,name:"Ethene",vi:"Eten"},{tier:2,formula:"C2H2",charge:0,name:"Ethyne",vi:"Etin"},{tier:2,formula:"H2O2",charge:0,name:"Hydrogen peroxide",vi:"Hiđro peroxit"},{tier:2,formula:"SO2",charge:0,name:"Sulfur dioxide",vi:"Lưu huỳnh dioxit"},{tier:2,formula:"MgO",charge:0,name:"Magnesium oxide",vi:"Magie oxit"},{tier:2,formula:"CaCl2",charge:0,name:"Calcium chloride",vi:"Canxi clorua"},{tier:2,formula:"NaOH",charge:0,name:"Sodium hydroxide",vi:"Natri hidroxit"},{tier:3,formula:"OH-1",charge:-1,name:"Hydroxide ion",vi:"Ion hidroxit"},{tier:3,formula:"NH4+1",charge:1,name:"Ammonium ion",vi:"Ion amoni"},{tier:3,formula:"H3O+1",charge:1,name:"Hydronium ion",vi:"Ion hidroni"},{tier:3,formula:"H2SO4",charge:0,name:"Sulfuric acid",vi:"Axit sunfuric"},{tier:3,formula:"CaCO3",charge:0,name:"Calcium carbonate",vi:"Canxi cacbonat"},{tier:3,formula:"NO3-1",charge:-1,name:"Nitrate ion",vi:"Ion nitrat"},{tier:3,formula:"SO4-2",charge:-2,name:"Sulfate ion",vi:"Ion sunfat"},{tier:3,formula:"SF6",charge:0,name:"Sulfur hexafluoride",vi:"Lưu huỳnh hexaflorua"},{tier:3,formula:"C6H6",charge:0,name:"Benzene",vi:"Benzên"},{tier:3,formula:"XeF4",charge:0,name:"Xenon tetrafluoride",vi:"Xenon tetraflorua"}],Yh=[{z:200,sym:"An",name:"Antimatter",mass:0,cat:"exotic",en:null,maxBonds:1,anionCharge:0,charges:null,radius:100,color:"#ff00ff"},{z:201,sym:"Dm",name:"Dark Matter",mass:999,cat:"exotic",en:null,maxBonds:0,anionCharge:0,charges:null,radius:150,color:"#1a1a2e"},{z:202,sym:"Ub",name:"Unobtainium",mass:500,cat:"exotic",en:null,maxBonds:10,anionCharge:0,charges:[10],radius:200,color:"#ffd700"},{z:203,sym:"Vb",name:"Vibranium",mass:300,cat:"exotic",en:10,maxBonds:12,anionCharge:0,charges:[6,4,2],radius:180,color:"#7b2cbf"},{z:204,sym:"Ad",name:"Adamantium",mass:800,cat:"exotic",en:null,maxBonds:8,anionCharge:0,charges:[4],radius:220,color:"#c0c0c0"},{z:205,sym:"My",name:"Mystery Element",mass:NaN,cat:"exotic",en:null,maxBonds:7,anionCharge:7,charges:null,radius:160,color:"#00ff9f"},{z:206,sym:"Ex",name:"Explosium",mass:50,cat:"exotic",en:.1,maxBonds:1,anionCharge:0,charges:[1],radius:120,color:"#ff0000"},{z:207,sym:"Nc",name:"Necrosium",mass:666,cat:"exotic",en:null,maxBonds:6,anionCharge:0,charges:[3],radius:170,color:"#000000"},{z:208,sym:"Qt",name:"Quantumite",mass:.001,cat:"exotic",en:null,maxBonds:20,anionCharge:0,charges:null,radius:80,color:"#00f0ff"},{z:209,sym:"Pl",name:"Plasma",mass:10,cat:"exotic",en:null,maxBonds:0,anionCharge:0,charges:null,radius:140,color:"#ff6b6b"}],$h=[{reactants:{An:1,H:1},condition:"rt",products:[],equation:"An + H -> ANNIHILATION!",effect:"annihilate",dynamic:!0},{reactants:{Ex:2},condition:"spark",products:[],equation:"2Ex -> BOOM!",effect:"explode",dynamic:!0},{reactants:{Ub:1,Vb:1},condition:"rt",products:[],equation:"Ub + Vb -> ULTIMATE ALLOY!",effect:"merge",dynamic:!0},{reactants:{Qt:1},condition:"rt",products:[],equation:"Qt -> SUPERPOSITION!",effect:"quantum",dynamic:!0},{reactants:{Nc:1,H2O:1},condition:"rt",products:[],equation:"Nc + H2O -> DECAY!",effect:"decay",dynamic:!0},{reactants:{Pl:1,O2:1},condition:"heat",products:[],equation:"Pl + O2 -> PLASMA STORM!",effect:"plasma",dynamic:!0}];function hv(n){return Yh.find(t=>t.sym===n)}const Kh={low:{key:"low",label:"Low",sphereSeg:[10,8],cylSeg:6,pixelRatio:1,drift:!1},med:{key:"med",label:"Medium",sphereSeg:[16,12],cylSeg:10,pixelRatio:1.5,drift:!0},high:{key:"high",label:"High",sphereSeg:[26,18],cylSeg:14,pixelRatio:2,drift:!0}},zi=["low","med","high"];class dv{constructor({downFps:t=30,upFps:e=55,downMs:i=2e3,upMs:s=4e3}={}){this.downFps=t,this.upFps=e,this.downMs=i,this.upMs=s,this.lowSince=null,this.highSince=null}update(t,e,i=zi.length-1){const s=performance.now();if(t<this.downFps){if(this.lowSince??=s,s-this.lowSince>=this.downMs&&e>0)return this.reset(),e-1}else this.lowSince=null;if(t>this.upFps){if(this.highSince??=s,s-this.highSince>=this.upMs&&e<i)return this.reset(),e+1}else this.highSince=null;return e}reset(){this.lowSince=null,this.highSince=null}}class fv{constructor(t=1e3){this.windowMs=t,this.frames=[]}frame(t){this.frames.push(t);const e=t-this.windowMs;for(;this.frames.length>2&&this.frames[0]<e;)this.frames.shift()}get fps(){if(this.frames.length<2)return 60;const t=this.frames[this.frames.length-1]-this.frames[0];return t>0?(this.frames.length-1)*1e3/t:60}}function pv({camera:n,controls:t}){const a=new Set,c={x:0,y:0};let l=0;const u=()=>{const d=document.activeElement;return d instanceof HTMLInputElement||d instanceof HTMLTextAreaElement},h=new Set(["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"]);window.addEventListener("keydown",d=>{if(d.key==="Shift"){a.add("shift");return}if(u())return;const E=d.key.toLowerCase();h.has(E)&&(d.preventDefault(),a.add(E))}),window.addEventListener("keyup",d=>{a.delete(d.key.toLowerCase()),d.key==="Shift"&&a.delete("shift")}),window.addEventListener("blur",()=>a.clear());const f=new D,p=new D,g=new D,_=new D(0,1,0);function m(d){let E=c.x,b=c.y,S=l;if((a.has("w")||a.has("arrowup"))&&(b+=1),(a.has("s")||a.has("arrowdown"))&&(b-=1),(a.has("a")||a.has("arrowleft"))&&(E-=1),(a.has("d")||a.has("arrowright"))&&(E+=1),a.has("e")&&(S+=1),a.has("q")&&(S-=1),!E&&!b&&!S)return!1;n.getWorldDirection(f),f.y=0,f.lengthSq()<1e-6&&f.set(0,0,-1),f.normalize(),p.crossVectors(f,_);const w=6*(a.has("shift")?2.25:1)*d;if(g.set(0,0,0).addScaledVector(f,b).addScaledVector(p,E),g.y+=S,g.lengthSq()===0)return!1;g.normalize().multiplyScalar(w),t.target.add(g),n.position.add(g),t.target.y=Math.max(-1.4,Math.min(9,t.target.y));const R=Math.hypot(t.target.x,t.target.z);if(R>45){const T=45/R;t.target.x*=T,t.target.z*=T}return!0}return{update:m,setStick:(d,E)=>{c.x=d,c.y=E},setVertical:d=>{l=d}}}const lr={H2O:{atoms:["O","H","H"],bonds:[[0,1,1],[0,2,1]]},HCl:{atoms:["H","Cl"],bonds:[[0,1,1]]},NH3:{atoms:["N","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1]]},MgO:{atoms:["Mg","O"],bonds:[[0,1,2,!0]]},NaCl:{atoms:["Na","Cl"],bonds:[[0,1,1,!0]]},CaO:{atoms:["Ca","O"],bonds:[[0,1,2,!0]]},CaOH2:{atoms:["Ca","O","O","H","H"],bonds:[[0,1,1,!0],[0,2,1,!0],[1,3,1],[2,4,1]]},CaCO3:{atoms:["Ca","C","O","O","O"],bonds:[[0,2,1,!0],[0,3,1,!0],[1,2,1],[1,3,1],[1,4,2]]},NaOH:{atoms:["Na","O","H"],bonds:[[0,1,1,!0],[1,2,1]]},KOH:{atoms:["K","O","H"],bonds:[[0,1,1,!0],[1,2,1]]},MgCl2:{atoms:["Mg","Cl","Cl"],bonds:[[0,1,1,!0],[0,2,1,!0]]},AlCl3:{atoms:["Al","Cl","Cl","Cl"],bonds:[[0,1,1,!0],[0,2,1,!0],[0,3,1,!0]]},CO2:{atoms:["C","O","O"],bonds:[[0,1,2],[0,2,2]]},O2:{atoms:["O","O"],bonds:[[0,1,2]]},O3:{atoms:["O","O","O"],bonds:[[0,1,1],[1,2,2]]},NO:{atoms:["N","O"],bonds:[[0,1,2]]},H2:{atoms:["H","H"],bonds:[[0,1,1]]},SO2:{atoms:["S","O","O"],bonds:[[0,1,2],[0,2,2]]},SO3:{atoms:["S","O","O","O"],bonds:[[0,1,2],[0,2,2],[0,3,2]]},H2SO4:{atoms:["S","O","O","O","O","H","H"],bonds:[[0,1,2],[0,2,2],[0,3,1],[0,4,1],[3,5,1],[4,6,1]]},NH4:{atoms:["N","H","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]],charge:1},ClI:{atoms:["Cl"],bonds:[],charge:-1},MnO2:{atoms:["Mn","O","O"],bonds:[[0,1,2,!0],[0,2,2,!0]]},MnCl2:{atoms:["Mn","Cl","Cl"],bonds:[[0,1,1,!0],[0,2,1,!0]]},Cl2:{atoms:["Cl","Cl"],bonds:[[0,1,1]]},KCl:{atoms:["K","Cl"],bonds:[[0,1,1,!0]]},Na2SO4:{atoms:["Na","Na","S","O","O","O","O"],bonds:[[0,2,1,!0],[1,2,1,!0],[2,3,2],[2,4,2],[2,5,1],[2,6,1]]},K2SO4:{atoms:["K","K","S","O","O","O","O"],bonds:[[0,2,1,!0],[1,2,1,!0],[2,3,2],[2,4,2],[2,5,1],[2,6,1]]},CaCl2:{atoms:["Ca","Cl","Cl"],bonds:[[0,1,1,!0],[0,2,1,!0]]}},jh=[{key:"rt",label:"Room temp"},{key:"heat",label:"Heat"},{key:"spark",label:"Spark"},{key:"electricity",label:"Electricity"},{key:"catalyst",label:"Catalyst"},{key:"uv",label:"UV light"}];Object.fromEntries(jh.map(n=>[n.key,n.label]));const Zh=[{regex:/^H([A-Z][a-z]?)$/,hCount:1},{regex:/^H2([A-Z][a-z]?)$/,hCount:2},{regex:/^H2SO4$/,hCount:2},{regex:/^HNO3$/,hCount:1},{regex:/^H3PO4$/,hCount:3},{regex:/^H2CO3$/,hCount:2}],mv=[{regex:/^([A-Z][a-z]?)OH$/,ohCount:1},{regex:/^([A-Z][a-z]?)\(OH\)(\d)$/,ohCount:null}];function Xl(n){for(const t of Zh)if(t.regex.test(n))return!0;return!1}function gv(n){for(const t of mv)if(t.regex.test(n))return!0;return!1}function ql(n){for(const t of Zh)if(n.match(t.regex))return t.hCount;return 0}function _v(n){if(n.match(/^([A-Z][a-z]?)OH$/))return 1;const e=n.match(/^([A-Z][a-z]?)\(OH\)(\d)$/);return e?parseInt(e[2]):0}function xv(n){const t=n.match(/^([A-Z][a-z]?)OH$/);if(t)return{sym:t[1],charge:1};const e=n.match(/^([A-Z][a-z]?)\(OH\)(\d)$/);if(e){const i=parseInt(e[2]);return{sym:e[1],charge:i}}return null}function Yl(n){return n==="HCl"?{sym:"Cl",charge:-1}:n==="H2SO4"?{sym:"SO4",charge:-2}:n==="HNO3"?{sym:"NO3",charge:-1}:n==="H3PO4"?{sym:"PO4",charge:-3}:n==="H2CO3"?{sym:"CO3",charge:-2}:n==="H2S"?{sym:"S",charge:-2}:null}function $l(n,t){const e=Math.abs(n.charge),i=Math.abs(t.charge),s=e*i/Wn(e,i),r=s/e,o=s/i,a=[];for(let f=0;f<r;f++)a.push(n.sym);const c=vv(t.sym);for(let f=0;f<o;f++)for(const p of c)a.push(p);const l=[],u=[];for(let f=0;f<r;f++)u.push(f);const h=r;for(let f=0;f<o;f++){const p=h+f*c.length,g=yv(c,p);for(const _ of u)l.push([_,g,1,!0])}for(let f=0;f<o;f++){const p=h+f*c.length,g=Mv(t.sym,p);l.push(...g)}return{atoms:a,bonds:l}}function Wn(n,t){return t===0?n:Wn(t,n%t)}function vv(n){return n==="Cl"?["Cl"]:n==="S"?["S"]:n==="SO4"?["S","O","O","O","O"]:n==="NO3"?["N","O","O","O"]:n==="PO4"?["P","O","O","O","O"]:n==="CO3"?["C","O","O","O"]:[n]}function yv(n,t){for(let e=0;e<n.length;e++)if(n[e]!=="O")return t+e;return t}function Mv(n,t){const e=[];return n==="Cl"||n==="S"||(n==="SO4"?(e.push([t,t+1,2]),e.push([t,t+2,2]),e.push([t,t+3,1]),e.push([t,t+4,1])):n==="NO3"?(e.push([t,t+1,2]),e.push([t,t+2,1]),e.push([t,t+3,1])):n==="PO4"?(e.push([t,t+1,1]),e.push([t,t+2,1]),e.push([t,t+3,1]),e.push([t,t+4,2])):n==="CO3"&&(e.push([t,t+1,2]),e.push([t,t+2,1]),e.push([t,t+3,1]))),e}function Jh(n){const t=n.filter(b=>Xl(b)),e=n.filter(b=>gv(b));if(t.length===0||e.length===0)return null;const i=t[0],s=e[0],r=ql(i),o=_v(s);if(r===0||o===0)return null;const a=xv(s),c=Yl(i);if(!a||!c)return null;const l=o,u=r,h=r*o,f=$l(a,c),p=Kl(a,c),g=p;lr[g]=f;const _=l===1?i:`${l}${i}`,m=u===1?s:`${u}${s}`,d=h===1?"H2O":`${h}H2O`,E=`${_} + ${m} -> ${p} + ${d}`;return{reactants:{[i]:l,[s]:u},condition:"rt",products:[[g,1],["H2O",h]],equation:E,dynamic:!0}}function Kl(n,t){const e=Math.abs(n.charge),i=Math.abs(t.charge),s=e*i/Wn(e,i),r=s/e,o=s/i,a=t.sym.length>2||/[0-9]/.test(t.sym);let c=n.sym;return r>1&&(c+=r),o>1&&a?c+=`(${t.sym})${o}`:(c+=t.sym,o>1&&(c+=o)),c}function oo(n){const t=new Map,e=[t],i=/([A-Z][a-z]?)(\d*)|(\()|(\))(\d*)/g;let s;for(;(s=i.exec(n))!==null;)if(s[1]){const r=s[2]?parseInt(s[2]):1,o=e[e.length-1];o.set(s[1],(o.get(s[1])||0)+r)}else if(s[3]){const r=new Map;e.push(r)}else if(s[4]){const r=e.pop(),o=s[5]?parseInt(s[5]):1,a=e[e.length-1];for(const[c,l]of r)a.set(c,(a.get(c)||0)+l*o)}return t}function Sv(n){if(n==="O2"||n==="H2")return!1;const t=oo(n);return t.has("C")&&t.has("H")}function Ml(n){const t=Vi(n),e=[...t.keys()].filter(E=>Sv(E));if(e.length===0||!t.has("O2")||t.size!==2)return null;const i=e[0],s=oo(i),r=s.get("C")||0,o=s.get("H")||0,a=s.get("O")||0;let c=4,l=4*r+o-2*a,u=4*r,h=2*o;if(l<=0)return null;const f=Wn(Wn(c,l),Wn(u,h));c/=f,l/=f,u/=f,h/=f;const p={[i]:c,O2:l},g=c===1?i:`${c}${i}`,_=l===1?"O2":`${l}O2`,m=u===1?"CO2":`${u}CO2`,d=h===1?"H2O":`${h}H2O`;return{reactants:p,condition:"spark",products:[["CO2",u],["H2O",h]],equation:`${g} + ${_} -> ${m} + ${d}`,dynamic:!0}}function Ev(n){const t=Ui(n);return t&&Pe(t)}function bv(n){const t=Ui(n);return!t||!t.charges||t.charges.length===0?null:t.charges[0]}function Qh(n){const t=Vi(n);if(t.size!==2)return null;const e=[...t.keys()].filter(O=>Ev(O)),i=[...t.keys()].filter(O=>Xl(O));if(e.length===0||i.length===0)return null;const s=e[0],r=i[0],o=bv(s),a=Yl(r);if(!o||!a)return null;const c={sym:s,charge:o},l=Kl(c,a),u=$l(c,a);lr[l]=u;const h=Math.abs(a.charge),f=Wn(o,h),p=h/f,g=o/f,_=ql(r);if(_===0)return null;let m=p,d=g,E=1,b=d*_,S=2;const w=Wn(b,S);let R=b/w;const T=S/w;T!==1&&(m*=T,d*=T,E*=T);const L=m===1?s:`${m}${s}`,v=d===1?r:`${d}${r}`,M=E===1?l:`${E}${l}`,C=R===1?"H2":`${R}H2`;return{reactants:{[s]:m,[r]:d},condition:"rt",products:[[l,E],["H2",R]],equation:`${L} + ${v} -> ${M} + ${C}`,dynamic:!0}}function td(n){const t=Vi(n);if(t.size!==2||!t.has("H2O"))return null;const e=[...t.keys()].find(m=>m!=="H2O");if(!e)return null;const i=Ui(e);if(!i||!Pe(i)||!i.charges||i.charges.length===0)return null;const s=i.charges[0],r=i.cat==="alkali",o=i.cat==="alkaline";if(!r&&!o)return null;const a={sym:e,charge:s},c=Tv(a),l=Av(a);lr[c]=l;let u,h,f,p;s===1?(u=2,h=2,f=2,p=1):(u=1,h=2,f=1,p=1);const g=u===1?e:`${u}${e}`,_=f===1?c:`${f}${c}`;return{reactants:{[e]:u,H2O:h},condition:"rt",products:[[c,f],["H2",p]],equation:`${g} + ${h}H2O -> ${_} + ${p===1?"H2":p+"H2"}`,dynamic:!0}}function Tv(n){const t=n.charge;return t===1?`${n.sym}OH`:`${n.sym}(OH)${t}`}function Av(n){const t=n.charge,e=[n.sym];for(let s=0;s<t;s++)e.push("O","H");const i=[];for(let s=0;s<t;s++){const r=1+s*2,o=2+s*2;i.push([0,r,1,!0]),i.push([r,o,1])}return{atoms:e,bonds:i}}function zu(n){return{CaCO3:{sym:"Ca",charge:2},Na2CO3:{sym:"Na",charge:1},K2CO3:{sym:"K",charge:1},MgCO3:{sym:"Mg",charge:2},FeCO3:{sym:"Fe",charge:2},BaCO3:{sym:"Ba",charge:2}}[n]||null}function ed(n){const t=Vi(n);if(t.size!==2)return null;const e=[...t.keys()].filter(C=>zu(C)),i=[...t.keys()].filter(C=>Xl(C));if(e.length===0||i.length===0)return null;const s=e[0],r=i[0],o=zu(s),a=Yl(r);if(!o||!a)return null;const c=Kl(o,a),l=$l(o,a);lr[c]=l;const u=ql(r);if(u===0)return null;const h=Wn(2,u),f=u/h,p=2/h,g=f,_=p*u/2,d=oo(s).get(o.sym)||1,E=f*d,S=oo(c).get(o.sym)||1,w=E/S,R=f===1?s:`${f}${s}`,T=p===1?r:`${p}${r}`,L=w===1?c:`${w}${c}`,v=g===1?"CO2":`${g}CO2`,M=_===1?"H2O":`${_}H2O`;return{reactants:{[s]:f,[r]:p},condition:"rt",products:[[c,w],["CO2",g],["H2O",_]],equation:`${R} + ${T} -> ${L} + ${v} + ${M}`,dynamic:!0}}const jl=[{reactants:{H2:2,O2:1},condition:"spark",products:[["H2O",2]],equation:"2H2 + O2 -> 2H2O"},{reactants:{H2:1,Cl2:1},condition:"spark",products:[["HCl",2]],equation:"H2 + Cl2 -> 2HCl"},{reactants:{N2:1,H2:3},condition:"catalyst",products:[["NH3",2]],equation:"N2 + 3H2 -> 2NH3"},{reactants:{Mg:2,O2:1},condition:"heat",products:[["MgO",2]],equation:"2Mg + O2 -> 2MgO"},{reactants:{Na:2,Cl2:1},condition:"spark",products:[["NaCl",2]],equation:"2Na + Cl2 -> 2NaCl"},{reactants:{CaO:1,H2O:1},condition:"rt",products:[["CaOH2",1]],equation:"CaO + H2O -> Ca(OH)2"},{reactants:{CaO:1,CO2:1},condition:"rt",products:[["CaCO3",1]],equation:"CaO + CO2 -> CaCO3"},{reactants:{CaCO3:1},condition:"heat",products:[["CaO",1],["CO2",1]],equation:"CaCO3 -> CaO + CO2"},{reactants:{CaOH2:1,CO2:1},condition:"rt",products:[["CaCO3",1],["H2O",1]],equation:"Ca(OH)2 + CO2 -> CaCO3 + H2O"},{reactants:{HCl:1,NaOH:1},condition:"rt",products:[["NaCl",1],["H2O",1]],equation:"HCl + NaOH -> NaCl + H2O"},{reactants:{H2O2:2},condition:"catalyst",products:[["H2O",2],["O2",1]],equation:"2H2O2 -> 2H2O + O2"},{reactants:{CH4:1,O2:2},condition:"spark",products:[["CO2",1],["H2O",2]],equation:"CH4 + 2O2 -> CO2 + 2H2O"},{reactants:{C:1,O2:1},condition:"heat",products:[["CO2",1]],equation:"C + O2 -> CO2"},{reactants:{N2:1,O2:1},condition:"spark",products:[["NO",2]],equation:"N2 + O2 -> 2NO"},{reactants:{SO2:2,O2:1},condition:"catalyst",products:[["SO3",2]],equation:"2SO2 + O2 -> 2SO3"},{reactants:{SO3:1,H2O:1},condition:"rt",products:[["H2SO4",1]],equation:"SO3 + H2O -> H2SO4"},{reactants:{H2O:2},condition:"electricity",products:[["H2",2],["O2",1]],equation:"2H2O -> 2H2 + O2"},{reactants:{NH3:1,HCl:1},condition:"rt",products:[["NH4",1],["ClI",1]],equation:"NH3 + HCl -> NH4+ + Cl-"},{reactants:{Na:2,H2O:2},condition:"rt",products:[["NaOH",2],["H2",1]],equation:"2Na + 2H2O -> 2NaOH + H2"},{reactants:{K:2,H2O:2},condition:"rt",products:[["KOH",2],["H2",1]],equation:"2K + 2H2O -> 2KOH + H2"},{reactants:{Al:2,Cl2:3},condition:"heat",products:[["AlCl3",2]],equation:"2Al + 3Cl2 -> 2AlCl3"},{reactants:{Mg:1,HCl:2},condition:"rt",products:[["MgCl2",1],["H2",1]],equation:"Mg + 2HCl -> MgCl2 + H2"},{reactants:{O2:3},condition:"uv",products:[["O3",2]],equation:"3O2 -> 2O3"},{reactants:{MnO2:1,HCl:4},condition:"heat",products:[["MnCl2",1],["Cl2",1],["H2O",2]],equation:"MnO2 + 4HCl -> MnCl2 + Cl2 + 2H2O"},{reactants:{HCl:1,KOH:1},condition:"rt",products:[["KCl",1],["H2O",1]],equation:"HCl + KOH -> KCl + H2O"},{reactants:{H2SO4:1,NaOH:2},condition:"rt",products:[["Na2SO4",1],["H2O",2]],equation:"H2SO4 + 2NaOH -> Na2SO4 + 2H2O"},{reactants:{H2SO4:1,KOH:2},condition:"rt",products:[["K2SO4",1],["H2O",2]],equation:"H2SO4 + 2KOH -> K2SO4 + 2H2O"},{reactants:{HCl:2,CaOH2:1},condition:"rt",products:[["CaCl2",1],["H2O",2]],equation:"2HCl + Ca(OH)2 -> CaCl2 + 2H2O"}];function Vi(n){const t=new Map;for(const e of n)t.set(e,(t.get(e)||0)+1);return t}function va(n,t){const e=Object.entries(n.reactants);if(e.length!==t.size)return!1;for(const[i,s]of e)if(t.get(i)!==s)return!1;return!0}function Zl(n,t){const e=Vi(n);for(const r of jl)if(r.condition===t&&va(r,e))return r;for(const r of $h)if(r.condition===t&&va(r,e))return r;const s={rt:[Jh,Qh,td,ed],spark:[Ml],heat:[Ml]}[t]||[];for(const r of s){const o=r([...e.keys()]);if(o&&va(o,e))return o}return null}function nd(n){const t=Vi(n),e=new Set;for(const s of jl){let r=!0;for(const[o,a]of t)if(!s.reactants[o]||s.reactants[o]<a){r=!1;break}r&&e.add(s.condition)}for(const s of $h){let r=!0;for(const[o,a]of t)if(!s.reactants[o]||s.reactants[o]<a){r=!1;break}r&&e.add(s.condition)}const i=[{fn:Jh,cond:"rt"},{fn:Qh,cond:"rt"},{fn:td,cond:"rt"},{fn:ed,cond:"rt"},{fn:Ml,cond:"spark"}];for(const{fn:s,cond:r}of i){const o=s([...t.keys()]);if(o){let a=!0;for(const[c,l]of t)if(!o.reactants[c]||o.reactants[c]<l){a=!1;break}a&&e.add(r)}}return e}function Cv(n,t){const e=Vi(n),i=[];for(const s of jl){if(s.condition!==t)continue;let r=!0;for(const[a,c]of e)if(!s.reactants[a]||s.reactants[a]<c){r=!1;break}if(!r)continue;const o=[];for(const[a,c]of Object.entries(s.reactants)){const l=c-(e.get(a)||0);l>0&&o.push(l===1?a:`${l}${a}`)}o.length&&i.push(o.join(" + "))}return i.length?[...new Set(i)].join(" or "):null}function ya(n){return lr[n]}function ir(n){return Ui(n)||hv(n)||Jl.find(t=>t.sym===n)}const Sl=uv.filter(n=>n&&typeof n.formula=="string"&&n.formula.trim()?!0:(console.warn("challenges.js: skipping malformed entry",n),!1));Xx();const ct=new Map,Ot=new Map,Qt=new Map;let Ne=1,Ee=null,Fi=null,Zr=!0,Ws=!1;const Jl=[],Bi=new Set,Ys=[];let ni=new Map;const El=new Map;let Ye=[],_e=[];const ao=new Map,Yn=new Map;let Gt=null,Ql=null,tc=!1,ri=null,id="mouse";const Fe=new Set,lo=new Set,ln=[],bl=new Set;let ec=!1;const sd="mol3d.discoveries.v1",zn=document.getElementById("scene-wrap"),Ge=new ux({antialias:!0,powerPreference:"low-power"});Ge.setPixelRatio(Math.min(1.5,window.devicePixelRatio||1));Ge.setSize(zn.clientWidth,zn.clientHeight);zn.appendChild(Ge.domElement);const le=new hp;le.background=new Pt(856343);le.fog=new kl(856343,34,80);const ye=new on(50,zn.clientWidth/zn.clientHeight,.1,200);ye.position.set(0,4.2,10.5);le.add(new Sp(16777215,3358799,1.05));const rd=new Ph(16777215,1.5);rd.position.set(6,10,8);le.add(rd);const od=new Ph(8956671,.4);od.position.set(-6,4,-6);le.add(od);let Ci=new Lh(60,60,3159613,1909546);Ci.position.y=-1.7;le.add(Ci);Ge.domElement.addEventListener("pointerdown",hy);const hn=new dx(ye,Ge.domElement);hn.enableDamping=!0;hn.dampingFactor=.08;hn.target.set(0,1.6,0);hn.minDistance=2.5;hn.maxDistance=45;hn.maxPolarAngle=Math.PI*.55;hn.addEventListener("change",We);const ds=pv({camera:ye,controls:hn});window.addEventListener("pointermove",dy);window.addEventListener("pointerup",py);window.addEventListener("resize",()=>{ye.aspect=zn.clientWidth/zn.clientHeight,ye.updateProjectionMatrix(),Ge.setSize(zn.clientWidth,zn.clientHeight),We()});let co=new ui(1,16,12),sr=new So(1,1,1,10,1,!0);const nc=320,uo=1280,wv=new Xn;new Pt(16777215);const Rv=new Pt(10135475),Pv=new Pt(15774761),Vu=new Pt(5809919),Lv=new Pt(4176208),Dv=new Pt(16273737),Iv=new Pt(15774761),Ov=[0],Nv=[-.12,.12],Uv=[-.18,0,.18],Fv=new Ah({color:16777215,shininess:70,specular:5592405}),Bv=new Ah({color:16777215,shininess:20,specular:1579032}),Hv=new Ch({color:16777215}),kv=new Ch({color:16777215,transparent:!0,opacity:.9}),En=new Mo(co,Fv,nc),bn=new Mo(co,Bv,nc),gn=new Mo(sr,Hv,uo),_n=new Mo(sr,kv,uo);for(const n of[En,bn,gn,_n])n.frustumCulled=!1,n.instanceMatrix.setUsage(Uf),le.add(n);const ad=[],ld=[],cd=[],ud=[];En.userData.ids=ad;bn.userData.ids=ld;gn.userData.ids=cd;_n.userData.ids=ud;const Xs=new Map,Jr=new Map,ks=new se,sn=new D,xs=new D,ho=new D,Gr=new D,Pi=new D,zs=new D,Ma=new D,Gu=new D,$s=new Xn,Ks=new D,hd=new D(0,1,0),Wu=new Pt,dd=new Li({color:4176208,transparent:!0,opacity:.55}),kn=new Ue(sr,dd);kn.visible=!1;le.add(kn);const Sa=["auto","low","med","high"];let cr="auto",Ts=1;const fd=new fv,pd=new dv;let Xu=0;const fo=document.getElementById("fps-chip"),Tl=document.getElementById("btn-quality");function zv(){return Kh[zi[Ts]]}function md(n){Ts=n;const t=Kh[zi[n]];Ge.setPixelRatio(Math.min(t.pixelRatio,window.devicePixelRatio||1));const e=new ui(1,t.sphereSeg[0],t.sphereSeg[1]),i=new So(1,1,1,t.cylSeg,1,!0);for(const s of[En,bn])s.geometry=e;for(const s of[gn,_n,kn])s.geometry=i;co.dispose(),sr.dispose(),co=e,sr=i,wo(),We()}function qu(){return at(`quality.${zi[Ts]}`)}function po(){return cr==="auto"?`${at("quality.autoShort")} (${qu()})`:qu()}function wo(){Tl&&(Tl.textContent=at("btn.quality",{mode:po()})),fo&&(fo.textContent=`-- fps · ${po()}`)}function gd(n){cr=n,pd.reset(),n!=="auto"&&md(zi.indexOf(n)),wo()}function Vv(n){if(n-Xu<500)return;Xu=n;const t=fd.fps;if(cr==="auto"){const e=pd.update(t,Ts);e!==Ts&&(md(e),$t(at("status.autoAdjusted",{tier:at(`quality.${zi[e]}`),fps:Math.round(t)})))}fo&&(fo.textContent=`${Math.round(t)} fps · ${po()}`)}const Ea=new Map;function Gv(n){if(Ea.has(n))return Ea.get(n);const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.font='bold 68px "Segoe UI", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle",e.lineWidth=10,e.lineJoin="round",e.strokeStyle="rgba(8,12,18,0.9)",e.strokeText(n,64,68),e.fillStyle="#f4f8ff",e.fillText(n,64,68);const i=new Eh(t);return Ea.set(n,i),i}const ba=new Map;function Wv(n){if(ba.has(n))return ba.get(n);const t=document.createElement("canvas");t.width=128,t.height=64;const e=t.getContext("2d");e.font='bold 46px "Segoe UI", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle";const i=n>0?`${n}+`:`${-n}−`;e.lineWidth=8,e.lineJoin="round",e.strokeStyle="rgba(8,12,18,0.95)",e.strokeText(i,64,34),e.fillStyle=n>0?"#7ee787":"#ff9d96",e.fillText(i,64,34);const s=new Eh(t);return ba.set(n,s),s}function Xv(){for(const[n,t]of ct)if(!Xs.has(n)){const i=.42+qn(t.el)*.55,s=new qc(new gl({map:Gv(t.el.sym),transparent:!0,depthWrite:!1}));s.scale.set(i,i,1),Xs.set(n,s),le.add(s);const r=new qc(new gl({transparent:!0,depthWrite:!1}));r.scale.set(.62,.31,1),r.visible=!1,Jr.set(n,r),le.add(r)}for(const[n,t]of Xs)ct.has(n)||(le.remove(t),t.material.dispose(),Xs.delete(n));for(const[n,t]of Jr)ct.has(n)||(le.remove(t),t.material.dispose(),Jr.delete(n))}const qv=n=>1+2.70158*Math.pow(n-1,3)+1.70158*Math.pow(n-1,2);function Yv(n,t){const e=ao.get(n);if(e===void 0)return 1;const i=(t-e)/380;return i>=1?(ao.delete(n),1):Math.max(.001,qv(Math.max(0,i)))}function $v(n,t){const e=ct.get(n);t.set(e.el.color),lo.has(n)&&t.lerp(Iv,.5),n===Ql?t.lerp(tc?Lv:Dv,.55):n===Ee?t.lerp(Vu,.45):n===Fi&&t.lerp(Vu,.18)}function Ro(){const n=performance.now();let t=0,e=0;for(const[r,o]of ct){const a=Hh(o.el.cat),c=a?En:bn,l=a?t++:e++;if(l>=nc)continue;const u=qn(o.el)*Yv(r,n);sn.set(o.pos.x,o.pos.y,o.pos.z),Gr.setScalar(u),ks.compose(sn,wv,Gr),c.setMatrixAt(l,ks),$v(r,Wu),c.setColorAt(l,Wu),(a?ad:ld)[l]=r}En.count=t,bn.count=e,En.instanceMatrix.needsUpdate=!0,bn.instanceMatrix.needsUpdate=!0,En.instanceColor&&(En.instanceColor.needsUpdate=!0),bn.instanceColor&&(bn.instanceColor.needsUpdate=!0),En.boundingSphere=null,bn.boundingSphere=null;let i=0,s=0;for(const r of Ot.values()){const o=ct.get(r.a),a=ct.get(r.b);if(!o||!a)continue;xs.set(o.pos.x,o.pos.y,o.pos.z),ho.set(a.pos.x,a.pos.y,a.pos.z),Pi.subVectors(ho,xs);const c=Pi.length()||1e-4;zs.copy(Pi).divideScalar(c),Ma.set(0,1,0),Math.abs(zs.y)>.9&&Ma.set(1,0,0),Gu.crossVectors(zs,Ma).normalize();const l=r.order===1?Ov:r.order===2?Nv:Uv,u=r.ionic?.06:.075;$s.setFromUnitVectors(hd,zs);for(let h=0;h<r.order;h++)if(sn.copy(xs).addScaledVector(zs,c/2).addScaledVector(Gu,l[h]),Gr.set(u,c,u),ks.compose(sn,$s,Gr),r.ionic){if(s>=uo)break;_n.setMatrixAt(s,ks),_n.setColorAt(s,Pv),ud[s]=r.id,s++}else{if(i>=uo)break;gn.setMatrixAt(i,ks),gn.setColorAt(i,Rv),cd[i]=r.id,i++}}gn.count=i,_n.count=s,gn.instanceMatrix.needsUpdate=!0,_n.instanceMatrix.needsUpdate=!0,gn.instanceColor&&(gn.instanceColor.needsUpdate=!0),_n.instanceColor&&(_n.instanceColor.needsUpdate=!0),gn.boundingSphere=null,_n.boundingSphere=null}function _d(){ye.getWorldDirection(Ks);for(const[n,t]of Xs){const e=ct.get(n);if(!e)continue;const i=qn(e.el);t.position.set(e.pos.x,e.pos.y,e.pos.z).addScaledVector(Ks,-(i+.1))}for(const[n,t]of Jr){const e=ct.get(n);if(!e)continue;const i=El.get(n),s=Zr&&i!==void 0;if(t.visible=s,!s)continue;t.userData.fc!==i&&(t.material.map=Wv(i),t.material.needsUpdate=!0,t.userData.fc=i);const r=qn(e.el);t.position.set(e.pos.x,e.pos.y,e.pos.z).addScaledVector(Ks,-(r+.48))}}function be(n){return[...n.atoms].sort((t,e)=>t-e).join(",")}function Re(n=new Set){_e=Ao(ct,Ot);const t=new Set(_e.map(be));for(const i of[...Qt.keys()])t.has(i)||Qt.delete(i);for(const i of[...Fe])t.has(i)||Fe.delete(i);ac(),ur(),Ye=_e.map(i=>Nx(ct,Ot,i,Qt.has(be(i))?Qt.get(be(i)):null));const e=zx(ct,Ot,_e,Ye,n);ni=new Map;for(const[i,s]of e)ni.set(i,{x:s.x,y:s.y,z:s.z});for(const i of ct.keys())if(!ni.has(i)){const s=ct.get(i).pos;ni.set(i,{x:s.x,y:s.y,z:s.z})}if(Gt){const i=ct.get(Gt.id).pos;ni.set(Gt.id,{x:i.x,y:i.y,z:i.z})}for(const i of[...Yn.keys()])t.has(i)||Yn.delete(i);return Kv(),jv(),uc(),hc(),My(),Fd(),Xv(),document.getElementById("hint").style.display=ct.size?"none":"flex",We(),_e}function Kv(){El.clear();for(const n of Ye)if(n.feasible)for(const[t,e]of n.per)e.fc!==0&&El.set(t,e.fc)}function xd(n,t){return`${n}|${t}`}function ic(n,t){if(!t.feasible)return null;try{return ov(n.atoms.map(e=>ct.get(e)),n.bonds,t.formula,t.charge,t.per)||null}catch{return null}}function jv(){for(let n=0;n<_e.length;n++){const t=_e[n],e=Ye[n];if(!e||!e.feasible||t.bonds.length===0||t.atoms.length<2)continue;const i=xd(e.formula,e.charge);if(bl.has(i))continue;bl.add(i);const s=ic(t,e);ln.push({formula:e.formula,charge:e.charge,name:s,t:Date.now(),saved:!1}),ec=!0,No(at("toast.newDisc",{f:bs(e.formula)+ar("",e.charge),name:s?` — ${s}`:""}))}Po()}function Zv(){try{const n=JSON.parse(localStorage.getItem(sd)||"[]");for(const t of n)!t||!t.formula||(t.saved=!0,ln.push(t),bl.add(xd(t.formula,t.charge??0)))}catch{}}function vd(){if(ln.length)try{localStorage.setItem(sd,JSON.stringify(ln));for(const n of ln)n.saved=!0;ec=!1,Po(),No(at("toast.saved",{n:ln.length,s:ln.length>1?"s":""}))}catch{$t(at("status.saveFail"),"err")}}function Po(){const n=document.getElementById("disc-list"),t=document.getElementById("disc-count"),e=document.getElementById("btn-save-disc");if(n){if(t.textContent=ln.length?String(ln.length):"",!ln.length){n.textContent=at("dex.discEmpty"),e.disabled=!0;return}n.textContent="";for(const i of ln){const s=document.createElement("div");s.className="disc-row";const r=document.createElement("span");r.className="d-f",r.textContent=bs(i.formula)+ar("",i.charge??0);const o=document.createElement("span");if(o.className="d-n",o.textContent=i.name||at("dex.unknown"),o.title=i.name||"",s.append(r,o),!i.saved){const a=document.createElement("span");a.className="d-dot",a.title=at("dex.notSaved"),s.appendChild(a)}n.appendChild(s)}e.disabled=!ec}}const Lo=n=>({id:n.id,el:n.el,pos:{x:n.pos.x,y:n.pos.y,z:n.pos.z}});function mi(n){Ys.push(n),Ys.length>200&&Ys.shift(),fc()}function yd(n,t){const e=zh(ct,Ot,n,t);if(!e.ok)return $t(Co(e.reason),"err"),!1;const i=Di(ct,Ot,n),s=Di(ct,Ot,t),r=i!==s,o=r?be(i):null,a=r?be(s):null,c=r?Qt.get(o):void 0,l=r?Qt.get(a):void 0;r&&(Qt.delete(o),Qt.delete(a));const u=Ne++;Ot.set(u,{id:u,a:n,b:t,order:1,ionic:e.type==="ionic"}),r&&c!==void 0!=(l!==void 0)&&Qt.set(be(Di(ct,Ot,n)),c!==void 0?c:l),mi({type:"bond",bondId:u}),Re();const h=ct.get(n).el.sym,f=ct.get(t).el.sym;return $t(e.type==="ionic"?at("status.ionicBond",{a:h,b:f}):at("status.covBond",{a:h,b:f}),"ok"),!0}function Md(n,t=!0){const e=Ot.get(n);if(!e)return;const i=Di(ct,Ot,e.a),s=be(i),r=Qt.get(s);if(Ot.delete(n),r!==void 0){const o=Ao(ct,Ot).filter(c=>c.atoms.some(l=>i.atoms.includes(l))&&c.bonds.length>0),a=o.find(c=>c.atoms.includes(e.a))||o.find(c=>c.atoms.includes(e.b))||o[0];a&&Qt.set(be(a),r)}t&&mi({type:"delBond",snap:{...e}}),Re()}function sc(n,t=!0){const e=ct.get(n);if(!e)return;const i=Di(ct,Ot,n),s=be(i),r=Qt.get(s),o=Gn(ct,Ot,n).map(a=>({...a}));for(const a of o)Ot.delete(a.id);if(ct.delete(n),Ee===n&&(Ee=null,pc()),Fi===n&&(Fi=null),r!==void 0){const a=Ao(ct,Ot).filter(c=>c.atoms.some(l=>i.atoms.includes(l))&&c.bonds.length>0).sort((c,l)=>l.atoms.length-c.atoms.length);a[0]&&Qt.set(be(a[0]),r)}t&&mi({type:"delAtom",atom:Lo(e),bonds:o}),Re()}function Sd(n,t){const e=Ot.get(n);e&&(mi({type:"order",bondId:n,prev:e.order}),e.order=t,Re(),$t(e.ionic?at("status.orderIonic",{n:t}):at("status.orderCov",{n:t}),"ok"))}function Al(n){const t=Ot.get(n);if(!t)return;const e=Vh(ct,Ot,t);if(!e.ok){$t(Co(e.reason),"err");return}Sd(n,t.order+1)}function Jv(n){const t=Ot.get(n);t&&(t.order>1?Sd(n,t.order-1):Md(n))}function rc(n){const t=typeof n=="string"?ir(n):n;if(!t)return;let e=null;for(let s=0;s<60;s++){const r=Math.random()*Math.PI*2,o=1.2+Math.random()*3.4,a={x:Math.cos(r)*o,y:1.6+(Math.random()-.5)*2.6,z:Math.sin(r)*o};let c=!0;for(const[,l]of ct)if(Math.hypot(l.pos.x-a.x,l.pos.y-a.y,l.pos.z-a.z)<qn(l.el)+qn(t)+.5){c=!1;break}if(c){e=a;break}}e||(e={x:Ne%7*1.5-4.5,y:6,z:0});const i=Ne++;return ct.set(i,{id:i,el:t,pos:e}),ao.set(i,performance.now()),mi({type:"add",id:i}),hr(i),Re(),$t(at("status.placed",{name:An(t)}),"info"),i}function Ed(){if(!(!ct.size&&!Ot.size&&!Qt.size)){mi({type:"clear",atoms:[...ct.values()].map(Lo),bonds:[...Ot.values()].map(n=>({...n})),overrides:[...Qt],nextId:Ne});for(const n of[...Ot.keys()])Ot.delete(n);for(const n of[...ct.keys()])ct.delete(n);ct.clear(),Ot.clear(),Qt.clear(),Yn.clear(),Ee=null,Fi=null,$n(),Re(),$t(at("status.cleared"),"info")}}function oc(){const n=Ys.pop();if(fc(),!n){$t(at("status.nothingUndo"));return}switch(n.type){case"add":sc(n.id,!1);break;case"bond":Md(n.bondId,!1);break;case"delBond":{const t=n.snap;Ot.set(t.id,{...t}),Re();break}case"order":{const t=Ot.get(n.bondId);t&&(t.order=n.prev),Re();break}case"delAtom":{const t=n.atom;ct.set(t.id,t);for(const e of n.bonds)Ot.set(e.id,{...e});Re();break}case"clear":{for(const t of n.atoms)ct.set(t.id,t);for(const t of n.bonds)Ot.set(t.id,{...t});for(const[t,e]of n.overrides)Qt.set(t,e);Ne=Math.max(Ne,n.nextId),Re();break}case"snapshot":{ct.clear(),Ot.clear(),Qt.clear(),Yn.clear();for(const t of n.atoms)ct.set(t.id,t);for(const t of n.bonds)Ot.set(t.id,{...t});for(const[t,e]of n.overrides)Qt.set(t,e);Ne=Math.max(Ne,n.nextId),Ee=null,Fi=null,$n(),Re();break}}$t(at("status.undone"))}const cs=.4,Qv=10.5,ty=-.2,ey=4.6;function mo(){return new D(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize()}function bd(n){if(!zv().drift||Gt||_e.length===0)return!1;let t=!1;for(const e of _e){const i=be(e);let s=Yn.get(i);s||(s={v:mo().multiplyScalar(cs*(.7+Math.random()*.6)),axis:mo(),rate:.08+Math.random()*.18},Yn.set(i,s));const r=s.v.length()||1e-4;r>cs*1.001?s.v.multiplyScalar(Math.max(cs,r-n*2.2)/r):r<cs*.999&&s.v.setLength(Math.min(cs,r+n*.4));const o=new D;for(const c of e.atoms){const l=ct.get(c).pos;o.x+=l.x,o.y+=l.y,o.z+=l.z}o.divideScalar(e.atoms.length),(Math.hypot(o.x,o.z)>Qv||o.y<ty||o.y>ey)&&(Ks.set(-o.x,1.9-o.y,-o.z).normalize(),s.v.lerp(Ks,Math.min(1,n*1.6)).setLength(cs)),$s.setFromAxisAngle(s.axis,s.rate*n);for(const c of e.atoms){const l=ct.get(c);sn.set(l.pos.x,l.pos.y,l.pos.z).sub(o).applyQuaternion($s).add(o).addScaledVector(s.v,n),l.pos.x=sn.x,l.pos.y=sn.y,l.pos.z=sn.z;const u=ni.get(c);u&&(sn.set(u.x,u.y,u.z).sub(o).applyQuaternion($s).add(o).addScaledVector(s.v,n),u.x=sn.x,u.y=sn.y,u.z=sn.z)}t=!0}return t}const Ta=document.getElementById("rxn-panel"),ny=document.getElementById("rxn-count"),Yu=document.getElementById("rxn-conds"),oi=n=>at(`cond.${n}`);function ac(){lo.clear();for(const n of _e)if(Fe.has(be(n)))for(const t of n.atoms)lo.add(t)}function $n(){Fe.size&&(Fe.clear(),lo.clear(),ur(),We())}function ur(){if(Ta){if(Fe.size===0){Ta.style.display="none";return}Ta.style.display="flex",ny.textContent=at("rxn.count",{n:Fe.size,s:Fe.size>1?"s":""})}}function Td(){const n=[];for(let t=0;t<_e.length;t++)Fe.has(be(_e[t]))&&n.push(Ye[t]?Ye[t].formula:"");return n}function Do(n){const t="₀₁₂₃₄₅₆₇₈₉";return n.replace(/->/g,"→").replace(new RegExp("(?<=[A-Za-z)\\]])\\d+","g"),e=>[...e].map(i=>t[+i]).join(""))}function iy(){if(Yu){for(const n of jh){const t=document.createElement("button");t.textContent=oi(n.key),t.dataset.cond=n.key,t.addEventListener("click",()=>sy(n.key)),Yu.appendChild(t)}document.getElementById("rxn-cancel").addEventListener("click",()=>{$n(),$t(at("status.reactionCancelled"))})}}function sy(n){const t=Td(),e=Zl(t,n);if(e){Cd(e);return}const i=nd(t);if(!i.size){$t(at("status.noReaction"),"err");return}if(i.has(n)){const s=Cv(t,n);$t(s?at("status.notEnough",{more:Do(s),cond:oi(n).toLowerCase()}):at("status.nothingHappens",{cond:oi(n)}),"err");return}$t(at("status.nothingHappensTry",{cond:oi(n),valid:[...i].map(s=>oi(s)).join(", ")}),"err")}let Aa=null;function Ad(n){const t=document.getElementById("rxn-overlay"),e=t.querySelector(".rxn-condition"),i=t.querySelector(".rxn-equation");e.textContent=oi(n.condition),i.innerHTML=Do(n.equation),t.classList.add("show"),t.setAttribute("aria-hidden","false"),Aa&&clearTimeout(Aa),Aa=setTimeout(()=>{t.classList.remove("show"),t.setAttribute("aria-hidden","true")},3e3)}function Cd(n){const t=_e.filter(h=>Fe.has(be(h)));if(!t.length)return;const e=t.map(h=>Ye[_e.indexOf(h)]?.formula??"");if(!Zl(e,n.condition)){$t(at("status.sceneChanged"),"err"),$n();return}const i=[];for(const h of t)for(const f of h.atoms)i.push(f);const s=new Set(i),r=new D;for(const h of i){const f=ct.get(h).pos;r.x+=f.x,r.y+=f.y,r.z+=f.z}r.divideScalar(i.length),mi({type:"snapshot",atoms:[...ct.values()].map(Lo),bonds:[...Ot.values()].map(h=>({...h})),overrides:[...Qt],nextId:Ne});for(const h of[...Ot.values()])(s.has(h.a)||s.has(h.b))&&Ot.delete(h.id);if(n.effect){ry(n,i,r);return}const o=new Map;for(const h of i){const f=ct.get(h).el.sym;o.has(f)||o.set(f,[]),o.get(f).push(h)}const a=[];for(const[h,f]of n.products)for(let p=0;p<f;p++)a.push(h);let c=0;for(let h=1;h<a.length;h++)ya(a[h]).atoms.length>ya(a[c]).atoms.length&&(c=h);const l=Math.PI*(3-Math.sqrt(5)),u=[];for(let h=0;h<a.length;h++){const f=ya(a[h]);let p=r;if(h!==c){const d=Math.random()*Math.PI*2,E=3.2+Math.random()*1.8+h*.9;p=new D(r.x+Math.cos(d)*E,Math.max(.8,Math.min(4.2,r.y+(Math.random()-.5)*1.6)),r.z+Math.sin(d)*E)}const g=[],_=f.atoms.length;for(let d=0;d<_;d++){const E=f.atoms[d];let b=o.get(E)?.pop();b===void 0&&(b=Ne++,ct.set(b,{id:b,el:ir(E),pos:{x:p.x,y:p.y,z:p.z}}));const S=_===1?0:1-2*d/(_-1),w=Math.sqrt(Math.max(0,1-S*S)),R=l*d;ct.get(b).pos={x:p.x+Math.cos(R)*w*.85,y:Math.max(-.4,Math.min(5.2,p.y+S*.85)),z:p.z+Math.sin(R)*w*.85},g.push(b)}for(const[d,E,b,S]of f.bonds)Ot.set(Ne,{id:Ne,a:g[d],b:g[E],order:b,ionic:!!S}),Ne++;const m=[...g].sort((d,E)=>d-E).join(",");f.charge&&Qt.set(m,f.charge),u.push({key:m,center:p,i:h})}for(const[,h]of o)for(const f of h)ct.delete(f);$n(),Ee=null,Re();for(const{key:h,center:f,i:p}of u){if(p===c){Yn.delete(h);continue}const g=new D(f.x-r.x,f.y-r.y,f.z-r.z).normalize();Yn.set(h,{v:g.multiplyScalar(2.6+Math.random()*1.4).add(new D(0,.7,0)),axis:mo(),rate:.1+Math.random()*.2})}$t(at("status.reactionDone",{cond:oi(n.condition),eq:Do(n.equation)}),"ok"),Ad(n)}const Ii=[];function ry(n,t,e){for(const a of t)ct.delete(a);$n(),Ee=null,Re();const s={annihilate:16777215,explode:16729088,merge:16766720,quantum:61695,decay:65344,plasma:13387007}[n.effect]||16777215,r=n.effect==="explode"?60:n.effect==="plasma"?50:30;for(let a=0;a<r;a++){const c=new ui(.08+Math.random()*.12,6,4),l=new Li({color:s,transparent:!0,opacity:1}),u=new Ue(c,l);u.position.copy(e);const h=mo(),f=1.5+Math.random()*4;le.add(u),Ii.push({mesh:u,geo:c,mat:l,v:h.multiplyScalar(f),life:1,decay:.4+Math.random()*.8})}if(n.effect==="explode"&&ly(.4,600),n.effect==="annihilate"&&$u(16777215,500),n.effect==="plasma"&&$u(8913151,300),n.effect==="merge"){const a=new ui(.5,16,12),c=new Li({color:16766720,transparent:!0,opacity:.9}),l=new Ue(a,c);l.position.copy(e),le.add(l),Ii.push({mesh:l,geo:a,mat:c,v:new D(0,0,0),life:1,decay:.3,grow:!0})}if(n.effect==="quantum")for(let a=0;a<8;a++){const c=new ui(.15,8,6),l=new Li({color:61695,transparent:!0,opacity:.7}),u=new Ue(c,l),h=Math.random()*Math.PI*2,f=.5+Math.random()*1.5;u.position.set(e.x+Math.cos(h)*f,e.y+(Math.random()-.5)*2,e.z+Math.sin(h)*f),le.add(u),Ii.push({mesh:u,geo:c,mat:l,v:new D(0,0,0),life:1,decay:.5+Math.random()*.5,flicker:!0})}const o={annihilate:"ANNIHILATION!",explode:"BOOM!",merge:"ULTIMATE ALLOY!",quantum:"SUPERPOSITION!",decay:"DECAY!",plasma:"PLASMA STORM!"};No(o[n.effect]||n.effect),$t(at("status.mayhemEffect",{effect:o[n.effect],eq:Do(n.equation)}),"ok"),Ad(n)}function oy(n){for(let t=Ii.length-1;t>=0;t--){const e=Ii[t];if(e.life-=n*e.decay,e.life<=0){le.remove(e.mesh),e.geo.dispose(),e.mat.dispose(),Ii.splice(t,1);continue}if(e.mesh.position.addScaledVector(e.v,n),e.v.multiplyScalar(1-n*2),e.mat.opacity=e.life,e.grow){const i=.5+(1-e.life)*3;e.mesh.scale.setScalar(i)}e.flicker&&(e.mesh.visible=Math.random()>.3,e.mesh.position.x+=(Math.random()-.5)*.1,e.mesh.position.y+=(Math.random()-.5)*.1,e.mesh.position.z+=(Math.random()-.5)*.1)}}let wd=0,fs=0,Rd=0;const Vs=new D,ay=new D;function ly(n,t){wd=n,fs=t,Rd=performance.now(),ay.copy(ye.position)}function cy(n){if(!fs)return;const t=n-Rd;if(t>fs){fs=0,ye.position.sub(Vs),Vs.set(0,0,0);return}const e=1-t/fs,i=wd*e,s=(Math.random()-.5)*2*i,r=(Math.random()-.5)*2*i,o=(Math.random()-.5)*2*i;ye.position.sub(Vs),Vs.set(s,r,o),ye.position.add(Vs)}let nn=null;function $u(n,t){nn&&(le.remove(nn),nn.geometry.dispose(),nn.material.dispose());const e=new ui(50,8,6),i=new Li({color:n,transparent:!0,opacity:.6,side:Ve});nn=new Ue(e,i),nn.position.copy(ye.position),le.add(nn);const s=performance.now();function r(){const a=(performance.now()-s)/t;if(a>=1){le.remove(nn),nn.geometry.dispose(),nn.material.dispose(),nn=null;return}nn.material.opacity=.6*(1-a),requestAnimationFrame(r)}requestAnimationFrame(r)}const fi=new Ap,As=new Ct;function Io(n){const t=Ge.domElement.getBoundingClientRect();As.x=(n.clientX-t.left)/t.width*2-1,As.y=-((n.clientY-t.top)/t.height)*2+1}function lc(){Ro(),fi.setFromCamera(As,ye);let n=null,t=1/0;for(const e of[En,bn])for(const i of fi.intersectObject(e))i.instanceId!==void 0&&i.distance<t&&(t=i.distance,n=e.userData.ids[i.instanceId]);return n}function uy(){Ro(),fi.setFromCamera(As,ye);let n=null,t=1/0;for(const e of[gn,_n])for(const i of fi.intersectObject(e))i.instanceId!==void 0&&i.distance<t&&(t=i.distance,n=e.userData.ids[i.instanceId]);return n}function hy(n){if(id=n.pointerType||"mouse",n.button!==0)return;Io(n);const t=lc();if(ri={x:n.clientX,y:n.clientY,atomId:t},t!==null){n.stopImmediatePropagation(),hn.enabled=!1,hr(t);const e=ct.get(t),i=ye.getWorldDirection(new D).negate(),s=new Bn().setFromNormalAndCoplanarPoint(i,new D(e.pos.x,e.pos.y,e.pos.z));fi.setFromCamera(As,ye);const r=new D,a=fi.ray.intersectPlane(s,r)?r.sub(new D(e.pos.x,e.pos.y,e.pos.z)):new D;Gt={id:t,plane:s,grabOffset:a,moved:!1,snapId:null,snapLegal:!1,snapMsg:"",snapUpgrade:!1},We()}}function dy(n){if(Io(n),Gt){if(!Gt.moved&&ri&&Math.hypot(n.clientX-ri.x,n.clientY-ri.y)>4&&(Gt.moved=!0),!Gt.moved)return;fi.setFromCamera(As,ye);const e=new D;if(!fi.ray.intersectPlane(Gt.plane,e))return;e.sub(Gt.grabOffset);const i=ct.get(Gt.id);i.pos.x=e.x,i.pos.y=Math.max(-.4,Math.min(5.4,e.y)),i.pos.z=e.z,ni.set(Gt.id,{x:i.pos.x,y:i.pos.y,z:i.pos.z});let s=null,r=1/0;for(const[o,a]of ct){if(o===Gt.id)continue;const c=Math.hypot(a.pos.x-i.pos.x,a.pos.y-i.pos.y,a.pos.z-i.pos.z),l=(qn(i.el)+qn(a.el))*1.45+.25;c<l&&c<r&&(r=c,s=o)}if(Gt.snapId=s,s===null)Gt.snapLegal=!1,Gt.snapMsg="",Gt.snapUpgrade=!1;else{const o=[...Ot.values()].find(a=>a.a===Gt.id&&a.b===s||a.b===Gt.id&&a.a===s);if(o){const a=Vh(ct,Ot,o);Gt.snapUpgrade=a.ok,Gt.snapLegal=a.ok,Gt.snapMsg=a.ok?at("snap.upgradeTo",{n:o.order+1}):a.reason}else{const a=zh(ct,Ot,Gt.id,s);Gt.snapLegal=a.ok,Gt.snapMsg=a.ok?a.type==="ionic"?at("snap.ionic"):at("snap.bond"):a.reason}}Ql=Gt.snapId,tc=Gt.snapLegal,Gt.snapMsg,fy(),We();return}if(n.target!==Ge.domElement)return;const t=lc();t!==Fi&&(Fi=t,Ge.domElement.style.cursor=t!==null?"grab":"",We())}function fy(){if(!Gt||Gt.snapId===null){kn.visible=!1;return}const n=ct.get(Gt.id),t=ct.get(Gt.snapId);xs.set(n.pos.x,n.pos.y,n.pos.z),ho.set(t.pos.x,t.pos.y,t.pos.z),Pi.subVectors(ho,xs);const e=Pi.length()||1e-4;kn.position.copy(xs).addScaledVector(Pi,.5),kn.quaternion.setFromUnitVectors(hd,Pi.divideScalar(e)),kn.scale.set(.16,e,.16),dd.color.setHex(tc?4176208:16273737),kn.visible=!0}function py(n){if(my(n),Gt){hn.enabled=!0;const t=Gt;if(Gt=null,Ql=null,kn.visible=!1,t.moved){if(t.snapId!==null){const e=[...Ot.values()].find(i=>i.a===t.id&&i.b===t.snapId||i.b===t.id&&i.a===t.snapId);e?t.snapUpgrade?Al(e.id):$t(Co(t.snapMsg),"err"):yd(t.id,t.snapId)}Re(new Set([t.id]))}We();return}if(ri&&Math.hypot(n.clientX-ri.x,n.clientY-ri.y)<4&&ri.atomId===null){Io(n);const t=uy();t!==null&&(n.shiftKey?Jv(t):Al(t))}}let Wr=0,Ku=0,ju=0;function my(n){if((n.pointerType||"mouse")!=="touch"||n.target!==Ge.domElement)return;const t=performance.now();Wr&&t-Wr<350&&Math.hypot(n.clientX-Ku,n.clientY-ju)<32?(Wr=0,Pd(n)):(Wr=t,Ku=n.clientX,ju=n.clientY)}Ge.domElement.addEventListener("dblclick",n=>{id!=="touch"&&Pd(n)});function Pd(n){Io(n);const t=lc();if(t===null){$n(),$t(at("status.selCleared"));return}const e=Di(ct,Ot,t),i=be(e);Fe.has(i)?(Fe.delete(i),$t(at("status.selRemoved"))):(Fe.add(i),$t(at("status.selAdded",{n:Fe.size}),"info")),ac(),ur(),We()}function gy(){const n=document.getElementById("ptable");n.innerHTML="";for(let e=1;e<=118;e++){const i=To.find(o=>o.z===e),s=wx(e),r=document.createElement("button");r.className="el",r.style.gridColumn=s.col,r.style.gridRow=s.row,r.style.borderColor=i.color,r.dataset.sym=i.sym,r.title=at("el.title",{name:An(i),cat:nr(i.cat),max:i.maxBonds}),r.innerHTML=`<span class="z">${e}</span><span class="s">${i.sym}</span>`,r.addEventListener("click",()=>rc(i)),n.appendChild(r)}const t=document.createElement("div");t.className="el ph",t.style.gridColumn="3 / 13",t.style.gridRow="8",t.textContent=at("ptable.ph"),n.appendChild(t)}function Ld(){const n=document.getElementById("legend");n.innerHTML="";for(const[t,e]of Object.entries(Rx)){const i=document.createElement("span");i.className="lg",i.innerHTML=`<i style="background:${e}"></i>${nr(t)}`,n.appendChild(i)}}const Zu=n=>n.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D");function Dd(){for(const n of document.querySelectorAll("#pool-list .el-chip")){const t=ir(n.dataset.sym);t&&(n.dataset.search=`${t.sym} ${t.name} ${t.z} ${An(t)} ${Zu(t.name)} ${Zu(An(t))}`.toLowerCase(),n.title=at("el.title",{name:An(t),cat:nr(t.cat),max:t.maxBonds}),n.querySelector(".n").textContent=An(t))}for(const n of document.querySelectorAll("#ptable .el[data-sym]")){const t=ir(n.dataset.sym);t&&(n.title=at("el.title",{name:An(t),cat:nr(t.cat),max:t.maxBonds}))}}function go(){gy();const n=document.getElementById("pool-list"),t=[...To];Ws&&t.push(...Yh),t.push(...Jl);for(const e of t){const i=document.createElement("button");i.className="el-chip",i.dataset.sym=e.sym,i.dataset.search=`${e.sym} ${e.name} ${e.z}`.toLowerCase(),i.title=`${e.name} · ${e.cat} · max bonds ${e.maxBonds}`;const s=document.createElement("i");s.style.background=e.color;const r=document.createElement("span");r.className="s",r.textContent=e.sym;const o=document.createElement("span");o.className="n",o.textContent=e.name,i.append(s,r,o),i.addEventListener("click",()=>vy(e)),n.appendChild(i)}if(Dd(),!go._listenersAttached){go._listenersAttached=!0;const e=document.getElementById("pool-search");e.addEventListener("input",xy),e.addEventListener("keydown",s=>{if(s.key!=="Enter")return;const r=[...n.children].find(o=>o.style.display!=="none");r&&r.click()});const i=document.getElementById("pool-view");i.addEventListener("click",()=>{const s=!n.hidden;n.hidden=s,document.getElementById("ptable").hidden=!s,i.textContent=at(s?"pool.viewList":"pool.viewTable")})}}function Id(){const n=document.getElementById("pool-list");n.innerHTML="",go()}function _y(n){const t=n.target.files[0];if(!t)return;const e=new FileReader;e.onload=i=>{try{const s=JSON.parse(i.target.result);if(!Array.isArray(s))throw new Error("Expected array of elements");let r=0;for(const o of s)!o.sym||!o.name||ir(o.sym)||(Jl.push({z:o.z||300+r,sym:o.sym,name:o.name,mass:o.mass||100,cat:o.cat||"exotic",en:o.en??null,maxBonds:o.maxBonds??4,anionCharge:o.anionCharge||0,charges:o.charges||null,radius:o.radius||150,color:o.color||"#ff00ff"}),r++);Id(),$t(`Imported ${r} custom element${r!==1?"s":""}`)}catch(s){$t("Import failed: "+s.message)}n.target.value=""},e.readAsText(t)}function xy(){const n=document.getElementById("pool-search").value.trim().toLowerCase();for(const t of document.querySelectorAll("#pool-list .el-chip"))t.style.display=!n||t.dataset.search.includes(n)?"":"none"}function vy(n){rc(n),document.body.classList.contains("mobile")&&_o()}function yy(n){return n>0?`+${n}`:`${n}`}function cc(){if(Ee===null||!ct.has(Ee))return null;const n=_e.find(t=>t.atoms.includes(Ee));return n?{comp:n,an:Ye[_e.indexOf(n)]}:null}function uc(){const n=document.getElementById("sel-info"),t=document.getElementById("mol-info"),e=document.getElementById("mol-warn"),i=cc();if(!i){n.innerHTML=`<span class="muted">${at("sel.empty")}</span>`,t.innerHTML=`<span class="muted">${at("mol.empty")}</span>`,e.style.display="none";return}const s=ct.get(Ee);n.innerHTML=`<b>${s.el.sym}</b> — ${An(s.el)}<br />
    <span class="muted">${at("sel.stats",{cat:nr(s.el.cat),mass:s.el.mass,en:s.el.en??"?",max:s.el.maxBonds})}</span>`;const{comp:r,an:o}=i;if(r.bonds.length===0){t.innerHTML=`<span class="muted">${at("mol.freeAtom")}</span>`,e.style.display="none";return}const a=ic(r,o),c=cv(o.formula,o.charge),l=`${bs(o.formula)}<span class="muted">${ar("",o.charge)}</span>`;if(t.innerHTML=`<div class="mol-formula">${l}</div><div id="mol-name">${a||at("mol.unnamed")}<span class="mol-type">${c.label}</span></div>
    <span class="muted">${at("mol.stats",{a:r.atoms.length,b:r.bonds.length})}</span>`,!o.feasible)e.style.display="block",e.textContent=Co(o.reason)||at("chem.lewis.charge");else{const u=r.atoms.find(h=>{const f=o.per.get(h);return!f||f.isMetal||!f.bonded||!f.ionU?!1:(ct.get(h).el.valenceElectrons+f.ionU-f.covSum)%2!==0});u?(e.style.display="block",e.textContent=at("chem.partialIonic",{sym:An(ct.get(u).el)})):e.style.display="none"}}function hc(){const n=document.getElementById("mol-list");if(n.textContent="",!_e.length){n.textContent=at("list.empty");return}let t=0;_e.forEach((e,i)=>{if(e.bonds.length===0)return;t++;const s=Ye[i],r=document.createElement("div");r.className="mol-row"+(Ee!==null&&e.atoms.includes(Ee)?" active":"");const o=document.createElement("span");o.className="m-name",o.textContent=ic(e,s)||bs(s.formula);const a=document.createElement("span");a.className="m-f",a.textContent=bs(s.formula)+ar("",s.charge),r.append(o,a),r.addEventListener("click",()=>hr(e.atoms[0])),n.appendChild(r)}),t||(n.textContent=at("list.empty"))}function Od(n){return bs(n.formula)+ar("",n.charge??0)}function Nd(n){return me()&&n.vi?n.vi:n.name||Od(n)}function Oo(){const n=document.getElementById("ch-list"),t=document.getElementById("ch-progress");t.textContent=`${Bi.size} / ${Sl.length}`,n.textContent="";let e=null;for(const i of Sl){const s=i.tier??1;if(s!==e){e=s;const c=document.createElement("div");c.className="tier",c.textContent=s,n.appendChild(c)}const r=document.createElement("div");r.className="ch"+(Bi.has(`${i.formula}|${i.charge??0}`)?" done":"");const o=document.createElement("span");o.className="ch-f",o.textContent=Od(i);const a=document.createElement("span");a.className="ch-n",a.textContent=Nd(i),r.append(o,a),n.appendChild(r)}}function My(){for(const n of Sl){const t=`${n.formula}|${n.charge??0}`;if(Bi.has(t))continue;_e.some((i,s)=>Ye[s].feasible&&Ye[s].formula===n.formula&&(Ye[s].charge??0)===(n.charge??0))&&(Bi.add(t),No(at("toast.challenge",{name:Nd(n)})),Oo())}}let Ju=null;function $t(n,t="info"){const e=document.getElementById("status-text");e.textContent=n,e.className=t,clearTimeout(Ju),Ju=setTimeout(()=>{e.textContent=""},6e3)}let Qu=null;function No(n){const t=document.getElementById("toast");t.textContent=n,t.classList.add("show"),clearTimeout(Qu),Qu=setTimeout(()=>t.classList.remove("show"),3200)}function hr(n){Ee=n,uc(),hc(),pc(),We()}function Ud(n){const t=cc();if(!t||t.comp.bonds.length===0){$t(at("status.selectFirst"));return}const e=be(t.comp),i=(Qt.has(e)?Qt.get(e):t.an.charge)+n;if(Math.abs(i)>6){$t(at("status.chargeLimit"),"err");return}Qt.set(e,i),mi({type:"snapshot",atoms:[...ct.values()].map(Lo),bonds:[...Ot.values()].map(s=>({...s})),overrides:[...Qt],nextId:Ne}),Re(),$t(at("status.chargeSet",{v:yy(i)}),"ok")}let th=null;function Fd(){clearTimeout(th),th=setTimeout(()=>{try{localStorage.setItem("mol3d.v1",JSON.stringify({atoms:[...ct.values()].map(n=>({id:n.id,z:n.el.z,pos:n.pos})),bonds:[...Ot.values()].map(n=>({id:n.id,a:n.a,b:n.b,order:n.order,ionic:n.ionic})),nextId:Ne,overrides:[...Qt],fc:[...Bi]}))}catch{}},300)}function Sy(){let n;try{n=JSON.parse(localStorage.getItem("mol3d.v1")||"null")}catch{n=null}if(!(!n||!Array.isArray(n.atoms))){for(const t of n.atoms){if(!t||!Number.isInteger(t.id)||!t.pos)continue;const e=To.find(i=>i.z===t.z);e&&ct.set(t.id,{id:t.id,el:e,pos:{x:+t.pos.x||0,y:+t.pos.y||0,z:+t.pos.z||0}})}for(const t of Array.isArray(n.bonds)?n.bonds:[])t&&Number.isInteger(t.id)&&ct.has(t.a)&&ct.has(t.b)&&Ot.set(t.id,{...t});for(const[t,e]of Array.isArray(n.overrides)?n.overrides:[])typeof t=="string"&&Number.isInteger(e)&&Qt.set(t,e);for(const t of Array.isArray(n.fc)?n.fc:[])typeof t=="string"&&Bi.add(t);Ne=Number.isInteger(n.nextId)&&n.nextId>0?n.nextId:Math.max(0,...ct.keys(),...Ot.keys())+1}}document.getElementById("btn-undo").addEventListener("click",oc);document.getElementById("btn-delete").addEventListener("click",()=>{Ee!==null&&sc(Ee)});document.getElementById("btn-clear").addEventListener("click",Ed);document.getElementById("btn-fc").addEventListener("click",()=>{Zr=!Zr,document.getElementById("btn-fc").classList.toggle("on",Zr),We()});document.getElementById("btn-mayhem").addEventListener("click",()=>{Ws=!Ws,document.getElementById("btn-mayhem").classList.toggle("on",Ws),Id(),$t(Ws?"Mayhem mode ON — exotic elements unlocked!":"Mayhem mode OFF")});document.getElementById("btn-import").addEventListener("click",()=>{document.getElementById("import-file").click()});document.getElementById("import-file").addEventListener("change",_y);Tl.addEventListener("click",()=>{const n=Sa.indexOf(cr);gd(Sa[(n+1)%Sa.length]),$t(at("status.quality",{mode:po()}))});document.getElementById("btn-save-disc").addEventListener("click",vd);document.getElementById("chg-minus").addEventListener("click",()=>Ud(-1));document.getElementById("chg-plus").addEventListener("click",()=>Ud(1));document.getElementById("chg-auto").addEventListener("click",()=>{const n=cc();if(!n||n.comp.bonds.length===0){$t(at("status.selectFirst"));return}Qt.delete(be(n.comp)),Re(),$t(at("status.chargeAuto"))});document.getElementById("ch-reset").addEventListener("click",()=>{Bi.clear(),Oo(),Fd(),$t(at("status.chalReset"))});window.addEventListener("keydown",n=>{n.target instanceof HTMLInputElement||((n.ctrlKey||n.metaKey)&&n.key.toLowerCase()==="z"?(n.preventDefault(),oc()):n.key==="Delete"||n.key==="Backspace"?Ee!==null&&sc(Ee):n.key==="Escape"&&(_o(),$n(),hr(null)))});document.getElementById("btn-fc").classList.add("on");const Bd="mol3d.theme",eh={dark:{bg:856343,gridA:3159613,gridB:1909546,meta:"#0d1117"},light:{bg:16185594,gridA:13226457,gridB:14541801,meta:"#f6f8fa"}},dc=document.getElementById("btn-theme");function Hd(n){const t=eh[n]||eh.dark;document.documentElement.dataset.theme=n==="light"?"light":"dark",le.background.set(t.bg),le.fog&&le.fog.color.set(t.bg),le.remove(Ci),Ci.geometry.dispose(),Ci=new Lh(60,60,t.gridA,t.gridB),Ci.position.y=-1.7,le.add(Ci),document.querySelector('meta[name="theme-color"]')?.setAttribute("content",t.meta),dc.textContent=at("btn.theme",{mode:at(n==="light"?"theme.light":"theme.dark")})}let ii="dark";try{const n=localStorage.getItem(Bd);(n==="light"||n==="dark")&&(ii=n)}catch{}Hd(ii);dc.addEventListener("click",()=>{ii=ii==="dark"?"light":"dark";try{localStorage.setItem(Bd,ii)}catch{}Hd(ii),We(),$t(at("status.theme",{mode:at(ii==="light"?"theme.light":"theme.dark")}))});const Cl=document.getElementById("btn-lang");Cl.textContent=Wh()==="en"?"VI":"EN";Cl.addEventListener("click",()=>{Yx(qx()),Cl.textContent=Wh()==="en"?"VI":"EN",Ey(),$t(at("status.lang"))});function Ey(){Wl(),wo(),dc.textContent=at("btn.theme",{mode:at(ii==="light"?"theme.light":"theme.dark")});const n=document.getElementById("pool-list");document.getElementById("pool-view").textContent=n.hidden?at("pool.viewList"):at("pool.viewTable");const t=document.querySelector("#ptable .el.ph");t&&(t.textContent=at("ptable.ph")),Ld(),Dd();for(const e of document.querySelectorAll("#rxn-conds button"))e.textContent=oi(e.dataset.cond);ur(),uc(),hc(),Po(),Oo(),We()}const by=["left","tab-info","tab-dex"];function _o(){for(const n of by)document.getElementById(n)?.classList.remove("open");document.querySelectorAll("#mtabs button.on").forEach(n=>n.classList.remove("on"))}{const n=document.getElementById("mtabs"),t=window.matchMedia("(max-width: 860px)"),e=()=>{document.body.classList.toggle("mobile",t.matches),t.matches||_o()};e(),t.addEventListener("change",e),n.addEventListener("click",i=>{const s=i.target.closest("button[data-tab]");if(!s)return;const r=document.getElementById(s.dataset.tab),o=r.classList.contains("open");_o(),o||(r.classList.add("open"),s.classList.add("on"))})}{const n=()=>document.body.classList.add("joy");window.matchMedia("(pointer: coarse)").matches&&n(),window.addEventListener("pointerdown",o=>{o.pointerType==="touch"&&n()});const t=document.getElementById("joy-stick"),e=document.getElementById("joy-knob");let i=null;const s=o=>{const a=t.getBoundingClientRect();let c=o.clientX-(a.left+a.width/2),l=o.clientY-(a.top+a.height/2);const u=a.width/2,h=Math.hypot(c,l);h>u&&(c=c/h*u,l=l/h*u),e.style.transform=`translate(${c}px, ${l}px)`,ds.setStick(c/u,-l/u)};t.addEventListener("pointerdown",o=>{i=o.pointerId;try{t.setPointerCapture(o.pointerId)}catch{}s(o)}),t.addEventListener("pointermove",o=>{o.pointerId===i&&s(o)});const r=o=>{o.pointerId===i&&(i=null,e.style.transform="",ds.setStick(0,0))};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r);for(const[o,a]of[["joy-up",1],["joy-down",-1]]){const c=document.getElementById(o);c.addEventListener("pointerdown",l=>{l.preventDefault(),ds.setVertical(a)});for(const l of["pointerup","pointercancel","pointerleave"])c.addEventListener(l,()=>ds.setVertical(0))}}let wl=!0;function We(){wl=!0}function kd(n){const t=1-Math.exp(-n*9);let e=!1;for(const[i,s]of ct){const r=ni.get(i);if(!r)continue;const o=r.x-s.pos.x,a=r.y-s.pos.y,c=r.z-s.pos.z;o*o+a*a+c*c<1e-6||(s.pos.x+=o*t,s.pos.y+=a*t,s.pos.z+=c*t,e=!0)}return e}let nh=performance.now();function zd(n){requestAnimationFrame(zd);const t=Math.min(.05,(n-nh)/1e3);nh=n,fd.frame(n),hn.update();let e=!1;e=ds.update(t)||e,e=bd(t)||e,e=kd(t)||e,oy(t),cy(n),Ii.length&&(e=!0),fs&&(e=!0),ao.size&&(e=!0),Gt&&(e=!0),Vv(n),(wl||e)&&(wl=!1,Ro(),_d(),Ge.render(le,ye))}window.__mol3d={atoms:ct,bonds:Ot,overrides:Qt,movement:ds,camera:ye,controls:hn,analyses:()=>Ye,comps:()=>_e,spawnAtom:rc,reanalyze:Re,selectAtom:hr,undo:oc,clearAll:Ed,screenPosOf:n=>{const t=ct.get(n);if(!t)return null;const e=new D(t.pos.x,t.pos.y,t.pos.z).project(ye),i=Ge.domElement.getBoundingClientRect();return{x:(e.x+1)/2*i.width+i.left,y:(-e.y+1)/2*i.height+i.top}},devBond:(n,t)=>yd(n,t),devUpgrade:n=>Al(n),reaction:{selectByFormula:n=>{for(const t of _e){const e=be(t);if(Fe.has(e))continue;const i=_e.indexOf(t);if(Ye[i]?.formula===n)return Fe.add(e),ac(),ur(),We(),!0}return!1},pick:n=>{const t=Td(),e=Zl(t,n);if(e)return Cd(e),e.equation;const i=nd(t);return i.size?`wrong-condition:${[...i].join(",")}`:"none"},clear:$n},setQuality:gd,quality:()=>cr,tierKey:()=>zi[Ts],discoveries:()=>[...ln],saveDiscoveries:vd,driftVelocity:n=>{const t=Di(ct,Ot,n);if(!t)return null;const e=Yn.get(be(t));return e?{x:e.v.x,y:e.v.y,z:e.v.z}:null},stepAnim:n=>{const t=bd(n),e=kd(n);return Ro(),_d(),Ge.render(le,ye),{drift:t,lerp:e}}};Wl();Sy();Zv();go();Ld();iy();Oo();Po();fc();pc();wo();Re();requestAnimationFrame(zd);function fc(){document.getElementById("btn-undo").disabled=Ys.length===0}function pc(){document.getElementById("btn-delete").disabled=Ee===null}
