(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Gl="180",ys={ROTATE:0,DOLLY:1,PAN:2},gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},If=0,Nc=1,Of=2,Eh=1,Nf=2,qn=3,yi=0,$e=1,Yn=2,gi=0,Ms=1,Uc=2,Fc=3,Hc=4,Uf=5,Ii=100,Ff=101,Hf=102,Bf=103,kf=104,zf=200,Vf=201,Gf=202,Wf=203,ka=204,za=205,Xf=206,qf=207,$f=208,Yf=209,Kf=210,jf=211,Zf=212,Jf=213,Qf=214,Va=0,Ga=1,Wa=2,Ts=3,Xa=4,qa=5,$a=6,Ya=7,Ao=0,tp=1,ep=2,_i=0,np=1,ip=2,sp=3,rp=4,op=5,ap=6,lp=7,bh=300,Cs=301,As=302,Ka=303,ja=304,wo=306,Za=1e3,Ui=1001,Ja=1002,sn=1003,cp=1004,br=1005,Un=1006,Ko=1007,Fi=1008,Bn=1009,Th=1010,Ch=1011,or=1012,Wl=1013,Vi=1014,Fn=1015,mr=1016,Xl=1017,ql=1018,ar=1020,Ah=35902,wh=35899,Rh=1021,Ph=1022,Cn=1023,lr=1026,cr=1027,$l=1028,Yl=1029,Lh=1030,Kl=1031,jl=1033,eo=33776,no=33777,io=33778,so=33779,Qa=35840,tl=35841,el=35842,nl=35843,il=36196,sl=37492,rl=37496,ol=37808,al=37809,ll=37810,cl=37811,ul=37812,hl=37813,dl=37814,fl=37815,pl=37816,ml=37817,gl=37818,_l=37819,xl=37820,vl=37821,yl=36492,Ml=36494,Sl=36495,El=36283,bl=36284,Tl=36285,Cl=36286,up=3200,hp=3201,Zl=0,dp=1,ui="",un="srgb",ws="srgb-linear",co="linear",ie="srgb",ji=7680,Bc=519,fp=512,pp=513,mp=514,Dh=515,gp=516,_p=517,xp=518,vp=519,Al=35044,yp=35048,kc="300 es",Hn=2e3,uo=2001;class qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ro=Math.PI/180,wl=180/Math.PI;function xi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]).toLowerCase()}function Wt(n,t,e){return Math.max(t,Math.min(e,n))}function Mp(n,t){return(n%t+t)%t}function jo(n,t,e){return(1-e)*n+e*t}function On(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function se(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Sp={DEG2RAD:ro};class At{constructor(t=0,e=0){At.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==d||l!==p||u!==g){let m=1-a;const f=c*d+l*p+u*g+h*_,E=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const w=Math.sqrt(b),R=Math.atan2(w,f*E);m=Math.sin(m*R)/w,a=Math.sin(a*R)/w}const y=a*E;if(c=c*m+d*y,l=l*m+p*y,u=u*m+g*y,h=h*m+_*y,m===1-a){const w=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=w,l*=w,u*=w,h*=w}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*p-l*d,t[e+1]=c*g+u*d+l*h-a*p,t[e+2]=l*g+u*p+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),d=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Zo.copy(this).projectOnVector(t),this.sub(Zo)}reflect(t){return this.sub(Zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zo=new D,zc=new Qn;class kt{constructor(t,e,i,s,r,o,a,c,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],_=s[0],m=s[3],f=s[6],E=s[1],b=s[4],y=s[7],w=s[2],R=s[5],T=s[8];return r[0]=o*_+a*E+c*w,r[3]=o*m+a*b+c*R,r[6]=o*f+a*y+c*T,r[1]=l*_+u*E+h*w,r[4]=l*m+u*b+h*R,r[7]=l*f+u*y+h*T,r[2]=d*_+p*E+g*w,r[5]=d*m+p*b+g*R,r[8]=d*f+p*y+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*r,p=l*r-o*c,g=e*h+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*l-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*c-l*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Jo.makeScale(t,e)),this}rotate(t){return this.premultiply(Jo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jo=new kt;function Ih(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ho(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ep(){const n=ho("canvas");return n.style.display="block",n}const Vc={};function ur(n){n in Vc||(Vc[n]=!0,console.warn(n))}function bp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Gc=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wc=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tp(){const n={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ie&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ie&&(s.r=Ss(s.r),s.g=Ss(s.g),s.b=Ss(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?co:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ur("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ur("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ws]:{primaries:t,whitePoint:i,transfer:co,toXYZ:Gc,fromXYZ:Wc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:t,whitePoint:i,transfer:ie,toXYZ:Gc,fromXYZ:Wc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),n}const jt=Tp();function Zn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ss(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zi;class Cp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Zi===void 0&&(Zi=ho("canvas")),Zi.width=t.width,Zi.height=t.height;const s=Zi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Zi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ho("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Zn(e[i]/255)*255):e[i]=Zn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ap=0;class Jl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=xi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qo(s[o].image)):r.push(Qo(s[o]))}else r=Qo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Qo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Cp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wp=0;const ta=new D;class Ge extends qi{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,i=Ui,s=Ui,r=Un,o=Fi,a=Cn,c=Bn,l=Ge.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=xi(),this.name="",this.source=new Jl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ta).x}get height(){return this.source.getSize(ta).y}get depth(){return this.source.getSize(ta).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Za:t.x=t.x-Math.floor(t.x);break;case Ui:t.x=t.x<0?0:1;break;case Ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Za:t.y=t.y-Math.floor(t.y);break;case Ui:t.y=t.y<0?0:1;break;case Ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=bh;Ge.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,i=0,s=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,y=(p+1)/2,w=(f+1)/2,R=(u+d)/4,T=(h+_)/4,P=(g+m)/4;return b>y&&b>w?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=R/i,r=T/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=R/s,r=P/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=T/r,s=P/r),this.set(i,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-_)/E,this.z=(d-u)/E,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rp extends qi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new Ge(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Jl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends Rp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Oh extends Ge{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pp extends Ge{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $i{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tr.copy(i.boundingBox)),Tr.applyMatrix4(t.matrixWorld),this.union(Tr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),Cr.subVectors(this.max,Hs),Ji.subVectors(t.a,Hs),Qi.subVectors(t.b,Hs),ts.subVectors(t.c,Hs),si.subVectors(Qi,Ji),ri.subVectors(ts,Qi),Ci.subVectors(Ji,ts);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Ci.z,Ci.y,si.z,0,-si.x,ri.z,0,-ri.x,Ci.z,0,-Ci.x,-si.y,si.x,0,-ri.y,ri.x,0,-Ci.y,Ci.x,0];return!ea(e,Ji,Qi,ts,Cr)||(e=[1,0,0,0,1,0,0,0,1],!ea(e,Ji,Qi,ts,Cr))?!1:(Ar.crossVectors(si,ri),e=[Ar.x,Ar.y,Ar.z],ea(e,Ji,Qi,ts,Cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const zn=[new D,new D,new D,new D,new D,new D,new D,new D],vn=new D,Tr=new $i,Ji=new D,Qi=new D,ts=new D,si=new D,ri=new D,Ci=new D,Hs=new D,Cr=new D,Ar=new D,Ai=new D;function ea(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ai.fromArray(n,r);const a=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),c=t.dot(Ai),l=e.dot(Ai),u=i.dot(Ai);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Lp=new $i,Bs=new D,na=new D;class Os{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Lp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);const e=Bs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Bs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(na)),this.expandByPoint(Bs.copy(t.center).sub(na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Vn=new D,ia=new D,wr=new D,oi=new D,sa=new D,Rr=new D,ra=new D;class Ro{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ia.copy(t).add(e).multiplyScalar(.5),wr.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(ia);const r=t.distanceTo(e)*.5,o=-this.direction.dot(wr),a=oi.dot(this.direction),c=-oi.dot(wr),l=oi.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ia).addScaledVector(wr,d),p}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);const i=Vn.dot(this.direction),s=Vn.dot(Vn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,i,s,r){sa.subVectors(e,t),Rr.subVectors(i,t),ra.crossVectors(sa,Rr);let o=this.direction.dot(ra),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,t);const c=a*this.direction.dot(Rr.crossVectors(oi,Rr));if(c<0)return null;const l=a*this.direction.dot(sa.cross(oi));if(l<0||c+l>o)return null;const u=-a*oi.dot(ra);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,i,s,r,o,a,c,l,u,h,d,p,g,_,m){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,h,d,p,g,_,m)}set(t,e,i,s,r,o,a,c,l,u,h,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/es.setFromMatrixColumn(t,0).length(),r=1/es.setFromMatrixColumn(t,1).length(),o=1/es.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,p=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,p=c*h,g=l*u,_=l*h;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,p=c*h,g=l*u,_=l*h;e[0]=d-_*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,p=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=g*l-p,e[8]=d*l+_,e[1]=c*h,e[5]=_*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-d*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+_,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dp,t,Ip)}lookAt(t,e,i){const s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),ai.crossVectors(i,en),ai.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ai.crossVectors(i,en)),ai.normalize(),Pr.crossVectors(en,ai),s[0]=ai.x,s[4]=Pr.x,s[8]=en.x,s[1]=ai.y,s[5]=Pr.y,s[9]=en.y,s[2]=ai.z,s[6]=Pr.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],E=i[3],b=i[7],y=i[11],w=i[15],R=s[0],T=s[4],P=s[8],v=s[12],S=s[1],A=s[5],O=s[9],H=s[13],V=s[2],k=s[6],B=s[10],X=s[14],W=s[3],it=s[7],st=s[11],Et=s[15];return r[0]=o*R+a*S+c*V+l*W,r[4]=o*T+a*A+c*k+l*it,r[8]=o*P+a*O+c*B+l*st,r[12]=o*v+a*H+c*X+l*Et,r[1]=u*R+h*S+d*V+p*W,r[5]=u*T+h*A+d*k+p*it,r[9]=u*P+h*O+d*B+p*st,r[13]=u*v+h*H+d*X+p*Et,r[2]=g*R+_*S+m*V+f*W,r[6]=g*T+_*A+m*k+f*it,r[10]=g*P+_*O+m*B+f*st,r[14]=g*v+_*H+m*X+f*Et,r[3]=E*R+b*S+y*V+w*W,r[7]=E*T+b*A+y*k+w*it,r[11]=E*P+b*O+y*B+w*st,r[15]=E*v+b*H+y*X+w*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*c*h-s*l*h-r*a*d+i*l*d+s*a*p-i*c*p)+_*(+e*c*p-e*l*d+r*o*d-s*o*p+s*l*u-r*c*u)+m*(+e*l*h-e*a*p-r*o*h+i*o*p+r*a*u-i*l*u)+f*(-s*a*u-e*c*h+e*a*d+s*o*h-i*o*d+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],E=h*m*l-_*d*l+_*c*p-a*m*p-h*c*f+a*d*f,b=g*d*l-u*m*l-g*c*p+o*m*p+u*c*f-o*d*f,y=u*_*l-g*h*l+g*a*p-o*_*p-u*a*f+o*h*f,w=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,R=e*E+i*b+s*y+r*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return t[0]=E*T,t[1]=(_*d*r-h*m*r-_*s*p+i*m*p+h*s*f-i*d*f)*T,t[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*f+i*c*f)*T,t[3]=(h*c*r-a*d*r-h*s*l+i*d*l+a*s*p-i*c*p)*T,t[4]=b*T,t[5]=(u*m*r-g*d*r+g*s*p-e*m*p-u*s*f+e*d*f)*T,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*f-e*c*f)*T,t[7]=(o*d*r-u*c*r+u*s*l-e*d*l-o*s*p+e*c*p)*T,t[8]=y*T,t[9]=(g*h*r-u*_*r-g*i*p+e*_*p+u*i*f-e*h*f)*T,t[10]=(o*_*r-g*a*r+g*i*l-e*_*l-o*i*f+e*a*f)*T,t[11]=(u*a*r-o*h*r-u*i*l+e*h*l+o*i*p-e*a*p)*T,t[12]=w*T,t[13]=(u*_*s-g*h*s+g*i*d-e*_*d-u*i*m+e*h*m)*T,t[14]=(g*a*s-o*_*s-g*i*c+e*_*c+o*i*m-e*a*m)*T,t[15]=(o*h*s-u*a*s+u*i*c-e*h*c-o*i*d+e*a*d)*T,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,d=r*l,p=r*u,g=r*h,_=o*u,m=o*h,f=a*h,E=c*l,b=c*u,y=c*h,w=i.x,R=i.y,T=i.z;return s[0]=(1-(_+f))*w,s[1]=(p+y)*w,s[2]=(g-b)*w,s[3]=0,s[4]=(p-y)*R,s[5]=(1-(d+f))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(g+b)*T,s[9]=(m-E)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=es.set(s[0],s[1],s[2]).length();const o=es.set(s[4],s[5],s[6]).length(),a=es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],yn.copy(this);const l=1/r,u=1/o,h=1/a;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,e.setFromRotationMatrix(yn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Hn,c=!1){const l=this.elements,u=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),p=(i+s)/(i-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===Hn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===uo)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Hn,c=!1){const l=this.elements,u=2/(e-t),h=2/(i-s),d=-(e+t)/(e-t),p=-(i+s)/(i-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===Hn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===uo)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const es=new D,yn=new oe,Dp=new D(0,0,0),Ip=new D(1,1,1),ai=new D,Pr=new D,en=new D,Xc=new oe,qc=new Qn;class wn{constructor(t=0,e=0,i=0,s=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Xc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qc.setFromEuler(this),this.setFromQuaternion(qc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Ql{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Op=0;const $c=new D,ns=new Qn,Gn=new oe,Lr=new D,ks=new D,Np=new D,Up=new Qn,Yc=new D(1,0,0),Kc=new D(0,1,0),jc=new D(0,0,1),Zc={type:"added"},Fp={type:"removed"},is={type:"childadded",child:null},oa={type:"childremoved",child:null};class Le extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new D,e=new wn,i=new Qn,s=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new kt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(Yc,t)}rotateY(t){return this.rotateOnAxis(Kc,t)}rotateZ(t){return this.rotateOnAxis(jc,t)}translateOnAxis(t,e){return $c.copy(t).applyQuaternion(this.quaternion),this.position.add($c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yc,t)}translateY(t){return this.translateOnAxis(Kc,t)}translateZ(t){return this.translateOnAxis(jc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Lr.copy(t):Lr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(ks,Lr,this.up):Gn.lookAt(Lr,ks,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(Gn),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zc),is.child=t,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fp),oa.child=t,this.dispatchEvent(oa),oa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zc),is.child=t,this.dispatchEvent(is),is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,t,Np),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,Up,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Le.DEFAULT_UP=new D(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new D,Wn=new D,aa=new D,Xn=new D,ss=new D,rs=new D,Jc=new D,la=new D,ca=new D,ua=new D,ha=new Me,da=new Me,fa=new Me;class fn{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Mn.subVectors(t,e),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Mn.subVectors(s,e),Wn.subVectors(i,e),aa.subVectors(t,e);const o=Mn.dot(Mn),a=Mn.dot(Wn),c=Mn.dot(aa),l=Wn.dot(Wn),u=Wn.dot(aa),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xn.x),c.addScaledVector(o,Xn.y),c.addScaledVector(a,Xn.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return ha.setScalar(0),da.setScalar(0),fa.setScalar(0),ha.fromBufferAttribute(t,e),da.fromBufferAttribute(t,i),fa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ha,r.x),o.addScaledVector(da,r.y),o.addScaledVector(fa,r.z),o}static isFrontFacing(t,e,i,s){return Mn.subVectors(i,e),Wn.subVectors(t,e),Mn.cross(Wn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),Mn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return fn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;ss.subVectors(s,i),rs.subVectors(r,i),la.subVectors(t,i);const c=ss.dot(la),l=rs.dot(la);if(c<=0&&l<=0)return e.copy(i);ca.subVectors(t,s);const u=ss.dot(ca),h=rs.dot(ca);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(ss,o);ua.subVectors(t,r);const p=ss.dot(ua),g=rs.dot(ua);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(rs,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Jc.subVectors(r,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(Jc,a);const f=1/(m+_+d);return o=_*f,a=d*f,e.copy(i).addScaledVector(ss,o).addScaledVector(rs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function pa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Lt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=jt.workingColorSpace){if(t=Mp(t,1),e=Wt(e,0,1),i=Wt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=pa(o,r,t+1/3),this.g=pa(o,r,t),this.b=pa(o,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=un){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=un){const i=Nh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=un){return jt.workingToColorSpace(ke.copy(this),t),Math.round(Wt(ke.r*255,0,255))*65536+Math.round(Wt(ke.g*255,0,255))*256+Math.round(Wt(ke.b*255,0,255))}getHexString(t=un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(ke.copy(this),e);const i=ke.r,s=ke.g,r=ke.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=un){jt.workingToColorSpace(ke.copy(this),t);const e=ke.r,i=ke.g,s=ke.b;return t!==un?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(Dr);const i=jo(li.h,Dr.h,e),s=jo(li.s,Dr.s,e),r=jo(li.l,Dr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new Lt;Lt.NAMES=Nh;let Hp=0;class Ei extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=Ms,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=za,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(i.blending=this.blending),this.side!==yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ka&&(i.blendSrc=this.blendSrc),this.blendDst!==za&&(i.blendDst=this.blendDst),this.blendEquation!==Ii&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Bi extends Ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new D,Ir=new At;let Bp=0;class mn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Al,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ir.fromBufferAttribute(this,e),Ir.applyMatrix3(t),this.setXY(e,Ir.x,Ir.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=On(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=se(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=On(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=On(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=On(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=On(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),i=se(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),i=se(i,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),i=se(i,this.array),s=se(s,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Al&&(t.usage=this.usage),t}}class Uh extends mn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Fh extends mn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ue extends mn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let kp=0;const an=new oe,ma=new Le,os=new D,nn=new $i,zs=new $i,Ne=new D;class gn extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ih(t)?Fh:Uh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,i){return an.makeTranslation(t,e,i),this.applyMatrix4(an),this}scale(t,e,i){return an.makeScale(t,e,i),this.applyMatrix4(an),this}lookAt(t){return ma.lookAt(t),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ue(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(nn.min,zs.min),nn.expandByPoint(Ne),Ne.addVectors(nn.max,zs.max),nn.expandByPoint(Ne)):(nn.expandByPoint(zs.min),nn.expandByPoint(zs.max))}nn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ne.fromBufferAttribute(a,l),c&&(os.fromBufferAttribute(t,l),Ne.add(os)),s=Math.max(s,i.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<i.count;P++)a[P]=new D,c[P]=new D;const l=new D,u=new D,h=new D,d=new At,p=new At,g=new At,_=new D,m=new D;function f(P,v,S){l.fromBufferAttribute(i,P),u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,S),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,v),g.fromBufferAttribute(r,S),u.sub(l),h.sub(l),p.sub(d),g.sub(d);const A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(A),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(A),a[P].add(_),a[v].add(_),a[S].add(_),c[P].add(m),c[v].add(m),c[S].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,v=E.length;P<v;++P){const S=E[P],A=S.start,O=S.count;for(let H=A,V=A+O;H<V;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const b=new D,y=new D,w=new D,R=new D;function T(P){w.fromBufferAttribute(s,P),R.copy(w);const v=a[P];b.copy(v),b.sub(w.multiplyScalar(w.dot(v))).normalize(),y.crossVectors(R,v);const A=y.dot(c[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,A)}for(let P=0,v=E.length;P<v;++P){const S=E[P],A=S.start,O=S.count;for(let H=A,V=A+O;H<V;H+=3)T(t.getX(H+0)),T(t.getX(H+1)),T(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,u=new D,h=new D;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new mn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new gn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=t(d,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qc=new oe,wi=new Ro,Or=new Os,tu=new D,Nr=new D,Ur=new D,Fr=new D,ga=new D,Hr=new D,eu=new D,Br=new D;class ze extends Le{constructor(t=new gn,e=new Bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Hr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(ga.fromBufferAttribute(h,t),o?Hr.addScaledVector(ga,u):Hr.addScaledVector(ga.sub(e),u))}e.add(Hr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere),Or.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(Or.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Or,tu)===null||wi.origin.distanceToSquared(tu)>(t.far-t.near)**2))&&(Qc.copy(r).invert(),wi.copy(t.ray).applyMatrix4(Qc),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,w=b;y<w;y+=3){const R=a.getX(y),T=a.getX(y+1),P=a.getX(y+2);s=kr(this,f,t,i,l,u,h,R,T,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);s=kr(this,o,t,i,l,u,h,E,b,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,w=b;y<w;y+=3){const R=y,T=y+1,P=y+2;s=kr(this,f,t,i,l,u,h,R,T,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=m,b=m+1,y=m+2;s=kr(this,o,t,i,l,u,h,E,b,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function zp(n,t,e,i,s,r,o,a){let c;if(t.side===$e?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===yi,a),c===null)return null;Br.copy(a),Br.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Br);return l<e.near||l>e.far?null:{distance:l,point:Br.clone(),object:n}}function kr(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,Nr),n.getVertexPosition(c,Ur),n.getVertexPosition(l,Fr);const u=zp(n,t,e,i,Nr,Ur,Fr,eu);if(u){const h=new D;fn.getBarycoord(eu,Nr,Ur,Fr,h),s&&(u.uv=fn.getInterpolatedAttribute(s,a,c,l,h,new At)),r&&(u.uv1=fn.getInterpolatedAttribute(r,a,c,l,h,new At)),o&&(u.normal=fn.getInterpolatedAttribute(o,a,c,l,h,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new D,materialIndex:0};fn.getNormal(Nr,Ur,Fr,d.normal),u.face=d,u.barycoord=h}return u}class gr extends gn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(u,3)),this.setAttribute("uv",new Ue(h,2));function g(_,m,f,E,b,y,w,R,T,P,v){const S=y/T,A=w/P,O=y/2,H=w/2,V=R/2,k=T+1,B=P+1;let X=0,W=0;const it=new D;for(let st=0;st<B;st++){const Et=st*A-H;for(let Ft=0;Ft<k;Ft++){const te=Ft*S-O;it[_]=te*E,it[m]=Et*b,it[f]=V,l.push(it.x,it.y,it.z),it[_]=0,it[m]=0,it[f]=R>0?1:-1,u.push(it.x,it.y,it.z),h.push(Ft/T),h.push(1-st/P),X+=1}}for(let st=0;st<P;st++)for(let Et=0;Et<T;Et++){const Ft=d+Et+k*st,te=d+Et+k*(st+1),ae=d+(Et+1)+k*(st+1),qt=d+(Et+1)+k*st;c.push(Ft,te,qt),c.push(te,ae,qt),W+=6}a.addGroup(p,W,v),p+=W,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function qe(n){const t={};for(let e=0;e<n.length;e++){const i=Rs(n[e]);for(const s in i)t[s]=i[s]}return t}function Vp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Hh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const Gp={clone:Rs,merge:qe};var Wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends Ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wp,this.fragmentShader=Xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=Vp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Bh extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new D,nu=new At,iu=new At;class hn extends Bh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=wl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ro*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wl*2*Math.atan(Math.tan(ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,nu,iu),e.subVectors(iu,nu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ro*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const as=-90,ls=1;class qp extends Le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(as,ls,t,e);s.layers=this.layers,this.add(s);const r=new hn(as,ls,t,e);r.layers=this.layers,this.add(r);const o=new hn(as,ls,t,e);o.layers=this.layers,this.add(o);const a=new hn(as,ls,t,e);a.layers=this.layers,this.add(a);const c=new hn(as,ls,t,e);c.layers=this.layers,this.add(c);const l=new hn(as,ls,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===uo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class kh extends Ge{constructor(t=[],e=Cs,i,s,r,o,a,c,l,u){super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $p extends Gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new kh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gr(5,5,5),r=new Mi({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$e,blending:gi});r.uniforms.tEquirect.value=e;const o=new ze(s,r),a=e.minFilter;return e.minFilter===Fi&&(e.minFilter=Un),new qp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}class zr extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yp={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new zr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class tc{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=i}clone(){return new tc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Kp extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class jp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Al,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xe=new D;class fo{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=On(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=se(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=On(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=On(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=On(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=On(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),i=se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),i=se(i,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),i=se(i,this.array),s=se(s,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new mn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new fo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Rl extends Ei{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let cs;const Vs=new D,us=new D,hs=new D,ds=new At,Gs=new At,zh=new oe,Vr=new D,Ws=new D,Gr=new D,su=new At,xa=new At,ru=new At;class ou extends Le{constructor(t=new Rl){if(super(),this.isSprite=!0,this.type="Sprite",cs===void 0){cs=new gn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new jp(e,5);cs.setIndex([0,1,2,0,2,3]),cs.setAttribute("position",new fo(i,3,0,!1)),cs.setAttribute("uv",new fo(i,2,3,!1))}this.geometry=cs,this.material=t,this.center=new At(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),zh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),hs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-hs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Wr(Vr.set(-.5,-.5,0),hs,o,us,s,r),Wr(Ws.set(.5,-.5,0),hs,o,us,s,r),Wr(Gr.set(.5,.5,0),hs,o,us,s,r),su.set(0,0),xa.set(1,0),ru.set(1,1);let a=t.ray.intersectTriangle(Vr,Ws,Gr,!1,Vs);if(a===null&&(Wr(Ws.set(-.5,.5,0),hs,o,us,s,r),xa.set(0,1),a=t.ray.intersectTriangle(Vr,Gr,Ws,!1,Vs),a===null))return;const c=t.ray.origin.distanceTo(Vs);c<t.near||c>t.far||e.push({distance:c,point:Vs.clone(),uv:fn.getInterpolation(Vs,Vr,Ws,Gr,su,xa,ru,new At),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Wr(n,t,e,i,s,r){ds.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Gs.x=r*ds.x-s*ds.y,Gs.y=s*ds.x+r*ds.y):Gs.copy(ds),n.copy(t),n.x+=Gs.x,n.y+=Gs.y,n.applyMatrix4(zh)}class Zp extends Ge{constructor(t=null,e=1,i=1,s,r,o,a,c,l=sn,u=sn,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class au extends mn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const fs=new oe,lu=new oe,Xr=[],cu=new $i,Jp=new oe,Xs=new ze,qs=new Os;class Po extends ze{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new au(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Jp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,fs),cu.copy(t.boundingBox).applyMatrix4(fs),this.boundingBox.union(cu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Os),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,fs),qs.copy(t.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(i),t.ray.intersectsSphere(qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fs),lu.multiplyMatrices(i,fs),Xs.matrixWorld=lu,Xs.raycast(t,Xr);for(let o=0,a=Xr.length;o<a;o++){const c=Xr[o];c.instanceId=r,c.object=this,e.push(c)}Xr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new au(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Zp(new Float32Array(s*this.count),s,this.count,$l,Fn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const va=new D,Qp=new D,tm=new kt;class $n{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=va.subVectors(i,e).cross(Qp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(va),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||tm.getNormalMatrix(t),s=this.coplanarPoint(va).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Os,em=new At(.5,.5),qr=new D;class ec{constructor(t=new $n,e=new $n,i=new $n,s=new $n,r=new $n,o=new $n){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Hn,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],E=r[12],b=r[13],y=r[14],w=r[15];if(s[0].setComponents(l-o,p-u,f-g,w-E).normalize(),s[1].setComponents(l+o,p+u,f+g,w+E).normalize(),s[2].setComponents(l+a,p+h,f+_,w+b).normalize(),s[3].setComponents(l-a,p-h,f-_,w-b).normalize(),i)s[4].setComponents(c,d,m,y).normalize(),s[5].setComponents(l-c,p-d,f-m,w-y).normalize();else if(s[4].setComponents(l-c,p-d,f-m,w-y).normalize(),e===Hn)s[5].setComponents(l+c,p+d,f+m,w+y).normalize();else if(e===uo)s[5].setComponents(c,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){Ri.center.set(0,0,0);const e=em.distanceTo(t.center);return Ri.radius=.7071067811865476+e,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(qr.x=s.normal.x>0?t.max.x:t.min.x,qr.y=s.normal.y>0?t.max.y:t.min.y,qr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vh extends Ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const po=new D,mo=new D,uu=new oe,$s=new Ro,$r=new Os,ya=new D,hu=new D;class nm extends Le{constructor(t=new gn,e=new Vh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)po.fromBufferAttribute(e,s-1),mo.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=po.distanceTo(mo);t.setAttribute("lineDistance",new Ue(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,t.ray.intersectsSphere($r)===!1)return;uu.copy(s).invert(),$s.copy(t.ray).applyMatrix4(uu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=u.getX(_),E=u.getX(_+1),b=Yr(this,t,$s,c,f,E,_);b&&e.push(b)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),f=Yr(this,t,$s,c,_,m,g-1);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=Yr(this,t,$s,c,_,_+1,_);f&&e.push(f)}if(this.isLineLoop){const _=Yr(this,t,$s,c,g-1,p,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Yr(n,t,e,i,s,r,o){const a=n.geometry.attributes.position;if(po.fromBufferAttribute(a,s),mo.fromBufferAttribute(a,r),e.distanceSqToSegment(po,mo,ya,hu)>i)return;ya.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ya);if(!(l<t.near||l>t.far))return{distance:l,point:hu.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const du=new D,fu=new D;class im extends nm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)du.fromBufferAttribute(e,s),fu.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+du.distanceTo(fu);t.setAttribute("lineDistance",new Ue(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gh extends Ge{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wh extends Ge{constructor(t,e,i=Vi,s,r,o,a=sn,c=sn,l,u=lr,h=1){if(u!==lr&&u!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:h};super(d,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Jl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Xh extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Lo extends gn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let g=0;const _=[],m=i/2;let f=0;E(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Ue(h,3)),this.setAttribute("normal",new Ue(d,3)),this.setAttribute("uv",new Ue(p,2));function E(){const y=new D,w=new D;let R=0;const T=(e-t)/i;for(let P=0;P<=r;P++){const v=[],S=P/r,A=S*(e-t)+t;for(let O=0;O<=s;O++){const H=O/s,V=H*c+a,k=Math.sin(V),B=Math.cos(V);w.x=A*k,w.y=-S*i+m,w.z=A*B,h.push(w.x,w.y,w.z),y.set(k,T,B).normalize(),d.push(y.x,y.y,y.z),p.push(H,1-S),v.push(g++)}_.push(v)}for(let P=0;P<s;P++)for(let v=0;v<r;v++){const S=_[v][P],A=_[v+1][P],O=_[v+1][P+1],H=_[v][P+1];(t>0||v!==0)&&(u.push(S,A,H),R+=3),(e>0||v!==r-1)&&(u.push(A,O,H),R+=3)}l.addGroup(f,R,0),f+=R}function b(y){const w=g,R=new At,T=new D;let P=0;const v=y===!0?t:e,S=y===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;const A=g;for(let O=0;O<=s;O++){const V=O/s*c+a,k=Math.cos(V),B=Math.sin(V);T.x=v*B,T.y=m*S,T.z=v*k,h.push(T.x,T.y,T.z),d.push(0,S,0),R.x=k*.5+.5,R.y=B*.5*S+.5,p.push(R.x,R.y),g++}for(let O=0;O<s;O++){const H=w+O,V=A+O;y===!0?u.push(V,V+1,H):u.push(V+1,V,H),P+=3}l.addGroup(f,P,y===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Do extends gn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=t/a,d=e/c,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const E=f*d-o;for(let b=0;b<l;b++){const y=b*h-r;g.push(y,-E,0),_.push(0,0,1),m.push(b/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<a;E++){const b=E+l*f,y=E+l*(f+1),w=E+1+l*(f+1),R=E+1+l*f;p.push(b,y,R),p.push(y,w,R)}this.setIndex(p),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(_,3)),this.setAttribute("uv",new Ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.width,t.height,t.widthSegments,t.heightSegments)}}class vi extends gn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new D,d=new D,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){const E=[],b=f/i;let y=0;f===0&&o===0?y=.5/e:f===i&&c===Math.PI&&(y=-.5/e);for(let w=0;w<=e;w++){const R=w/e;h.x=-t*Math.cos(s+R*r)*Math.sin(o+b*a),h.y=t*Math.cos(o+b*a),h.z=t*Math.sin(s+R*r)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(R+y,1-b),E.push(l++)}u.push(E)}for(let f=0;f<i;f++)for(let E=0;E<e;E++){const b=u[f][E+1],y=u[f][E],w=u[f+1][E],R=u[f+1][E+1];(f!==0||o>0)&&p.push(b,y,R),(f!==i-1||c<Math.PI)&&p.push(y,w,R)}this.setIndex(p),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(_,3)),this.setAttribute("uv",new Ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class qh extends Ei{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Lt(16777215),this.specular=new Lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $h extends Ei{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sm extends Ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=up,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rm extends Ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Yh extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class om extends Yh{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ma=new oe,pu=new D,mu=new D;class am{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ec,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;pu.setFromMatrixPosition(t.matrixWorld),e.position.copy(pu),mu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mu),e.updateMatrixWorld(),Ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Kh extends Bh{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class lm extends am{constructor(){super(new Kh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jh extends Yh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new lm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cm extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const gu=new oe;class um{constructor(t,e,i=0,s=1/0){this.ray=new Ro(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ql,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gu),this}intersectObject(t,e=!0,i=[]){return Pl(t,this,i,e),i.sort(_u),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Pl(t[s],this,i,e);return i.sort(_u),i}}function _u(n,t){return n.distance-t.distance}function Pl(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Pl(r[o],t,e,!0)}}class xu{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Wt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Zh extends im{constructor(t=10,e=10,i=4473924,s=8947848){i=new Lt(i),s=new Lt(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let d=0,p=0,g=-a;d<=e;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=d===r?i:s;_.toArray(l,p),p+=3,_.toArray(l,p),p+=3,_.toArray(l,p),p+=3,_.toArray(l,p),p+=3}const u=new gn;u.setAttribute("position",new Ue(c,3)),u.setAttribute("color",new Ue(l,3));const h=new Vh({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class hm extends qi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function vu(n,t,e,i){const s=dm(i);switch(e){case Rh:return n*t;case $l:return n*t/s.components*s.byteLength;case Yl:return n*t/s.components*s.byteLength;case Lh:return n*t*2/s.components*s.byteLength;case Kl:return n*t*2/s.components*s.byteLength;case Ph:return n*t*3/s.components*s.byteLength;case Cn:return n*t*4/s.components*s.byteLength;case jl:return n*t*4/s.components*s.byteLength;case eo:case no:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case io:case so:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case tl:case nl:return Math.max(n,16)*Math.max(t,8)/4;case Qa:case el:return Math.max(n,8)*Math.max(t,8)/2;case il:case sl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case rl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ol:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case al:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ll:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case cl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ul:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case hl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case dl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case fl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case pl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ml:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case gl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case _l:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case xl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case vl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case yl:case Ml:case Sl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case El:case bl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Tl:case Cl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dm(n){switch(n){case Bn:case Th:return{byteLength:1,components:1};case or:case Ch:case mr:return{byteLength:2,components:1};case Xl:case ql:return{byteLength:2,components:4};case Vi:case Wl:case Fn:return{byteLength:4,components:1};case Ah:case wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gl);function Jh(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function fm(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mm=`#ifdef USE_ALPHAHASH
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
#endif`,gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ym=`#ifdef USE_AOMAP
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
#endif`,Mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sm=`#ifdef USE_BATCHING
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
#endif`,Em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Am=`#ifdef USE_IRIDESCENCE
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
#endif`,wm=`#ifdef USE_BUMPMAP
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
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fm=`#define PI 3.141592653589793
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
} // validated`,Hm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bm=`vec3 transformedNormal = objectNormal;
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
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qm=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ym=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
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
#endif`,Zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eg=`#ifdef USE_GRADIENTMAP
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
}`,ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rg=`uniform bool receiveShadow;
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
#endif`,og=`#ifdef USE_ENVMAP
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
#endif`,ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hg=`PhysicalMaterial material;
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
#endif`,dg=`struct PhysicalMaterial {
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
}`,fg=`
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
#endif`,pg=`#if defined( RE_IndirectDiffuse )
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
#endif`,mg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_g=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Eg=`#if defined( USE_POINTS_UV )
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
#endif`,bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ag=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rg=`#ifdef USE_MORPHTARGETS
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
#endif`,Pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ng=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ug=`#ifdef USE_NORMALMAP
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
#endif`,Fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$g=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jg=`float getShadowMask() {
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
}`,Qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t_=`#ifdef USE_SKINNING
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
#endif`,e_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n_=`#ifdef USE_SKINNING
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
#endif`,i_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,a_=`#ifdef USE_TRANSMISSION
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
#endif`,l_=`#ifdef USE_TRANSMISSION
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
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const f_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p_=`uniform sampler2D t2D;
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
}`,m_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v_=`#include <common>
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
}`,y_=`#if DEPTH_PACKING == 3200
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
}`,M_=`#define DISTANCE
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
}`,S_=`#define DISTANCE
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T_=`uniform float scale;
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
}`,C_=`uniform vec3 diffuse;
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
}`,A_=`#include <common>
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
}`,w_=`uniform vec3 diffuse;
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
}`,R_=`#define LAMBERT
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
}`,P_=`#define LAMBERT
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
}`,L_=`#define MATCAP
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
}`,D_=`#define MATCAP
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
}`,I_=`#define NORMAL
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
}`,O_=`#define NORMAL
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
}`,N_=`#define PHONG
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
}`,U_=`#define PHONG
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
}`,F_=`#define STANDARD
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
}`,H_=`#define STANDARD
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
}`,B_=`#define TOON
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
}`,k_=`#define TOON
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
}`,z_=`uniform float size;
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
}`,V_=`uniform vec3 diffuse;
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
}`,G_=`#include <common>
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
}`,W_=`uniform vec3 color;
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
}`,X_=`uniform float rotation;
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
}`,q_=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:pm,alphahash_pars_fragment:mm,alphamap_fragment:gm,alphamap_pars_fragment:_m,alphatest_fragment:xm,alphatest_pars_fragment:vm,aomap_fragment:ym,aomap_pars_fragment:Mm,batching_pars_vertex:Sm,batching_vertex:Em,begin_vertex:bm,beginnormal_vertex:Tm,bsdfs:Cm,iridescence_fragment:Am,bumpmap_pars_fragment:wm,clipping_planes_fragment:Rm,clipping_planes_pars_fragment:Pm,clipping_planes_pars_vertex:Lm,clipping_planes_vertex:Dm,color_fragment:Im,color_pars_fragment:Om,color_pars_vertex:Nm,color_vertex:Um,common:Fm,cube_uv_reflection_fragment:Hm,defaultnormal_vertex:Bm,displacementmap_pars_vertex:km,displacementmap_vertex:zm,emissivemap_fragment:Vm,emissivemap_pars_fragment:Gm,colorspace_fragment:Wm,colorspace_pars_fragment:Xm,envmap_fragment:qm,envmap_common_pars_fragment:$m,envmap_pars_fragment:Ym,envmap_pars_vertex:Km,envmap_physical_pars_fragment:og,envmap_vertex:jm,fog_vertex:Zm,fog_pars_vertex:Jm,fog_fragment:Qm,fog_pars_fragment:tg,gradientmap_pars_fragment:eg,lightmap_pars_fragment:ng,lights_lambert_fragment:ig,lights_lambert_pars_fragment:sg,lights_pars_begin:rg,lights_toon_fragment:ag,lights_toon_pars_fragment:lg,lights_phong_fragment:cg,lights_phong_pars_fragment:ug,lights_physical_fragment:hg,lights_physical_pars_fragment:dg,lights_fragment_begin:fg,lights_fragment_maps:pg,lights_fragment_end:mg,logdepthbuf_fragment:gg,logdepthbuf_pars_fragment:_g,logdepthbuf_pars_vertex:xg,logdepthbuf_vertex:vg,map_fragment:yg,map_pars_fragment:Mg,map_particle_fragment:Sg,map_particle_pars_fragment:Eg,metalnessmap_fragment:bg,metalnessmap_pars_fragment:Tg,morphinstance_vertex:Cg,morphcolor_vertex:Ag,morphnormal_vertex:wg,morphtarget_pars_vertex:Rg,morphtarget_vertex:Pg,normal_fragment_begin:Lg,normal_fragment_maps:Dg,normal_pars_fragment:Ig,normal_pars_vertex:Og,normal_vertex:Ng,normalmap_pars_fragment:Ug,clearcoat_normal_fragment_begin:Fg,clearcoat_normal_fragment_maps:Hg,clearcoat_pars_fragment:Bg,iridescence_pars_fragment:kg,opaque_fragment:zg,packing:Vg,premultiplied_alpha_fragment:Gg,project_vertex:Wg,dithering_fragment:Xg,dithering_pars_fragment:qg,roughnessmap_fragment:$g,roughnessmap_pars_fragment:Yg,shadowmap_pars_fragment:Kg,shadowmap_pars_vertex:jg,shadowmap_vertex:Zg,shadowmask_pars_fragment:Jg,skinbase_vertex:Qg,skinning_pars_vertex:t_,skinning_vertex:e_,skinnormal_vertex:n_,specularmap_fragment:i_,specularmap_pars_fragment:s_,tonemapping_fragment:r_,tonemapping_pars_fragment:o_,transmission_fragment:a_,transmission_pars_fragment:l_,uv_pars_fragment:c_,uv_pars_vertex:u_,uv_vertex:h_,worldpos_vertex:d_,background_vert:f_,background_frag:p_,backgroundCube_vert:m_,backgroundCube_frag:g_,cube_vert:__,cube_frag:x_,depth_vert:v_,depth_frag:y_,distanceRGBA_vert:M_,distanceRGBA_frag:S_,equirect_vert:E_,equirect_frag:b_,linedashed_vert:T_,linedashed_frag:C_,meshbasic_vert:A_,meshbasic_frag:w_,meshlambert_vert:R_,meshlambert_frag:P_,meshmatcap_vert:L_,meshmatcap_frag:D_,meshnormal_vert:I_,meshnormal_frag:O_,meshphong_vert:N_,meshphong_frag:U_,meshphysical_vert:F_,meshphysical_frag:H_,meshtoon_vert:B_,meshtoon_frag:k_,points_vert:z_,points_frag:V_,shadow_vert:G_,shadow_frag:W_,sprite_vert:X_,sprite_frag:q_},lt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Ln={basic:{uniforms:qe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:qe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:qe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:qe([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:qe([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:qe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:qe([lt.points,lt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:qe([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:qe([lt.common,lt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:qe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:qe([lt.sprite,lt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:qe([lt.common,lt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:qe([lt.lights,lt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Ln.physical={uniforms:qe([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Kr={r:0,b:0,g:0},Pi=new wn,$_=new oe;function Y_(n,t,e,i,s,r,o){const a=new Lt(0);let c=r===!0?0:1,l,u,h=null,d=0,p=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function _(b){let y=!1;const w=g(b);w===null?f(a,c):w&&w.isColor&&(f(w,1),y=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,y){const w=g(y);w&&(w.isCubeTexture||w.mapping===wo)?(u===void 0&&(u=new ze(new gr(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Rs(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Pi.copy(y.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($_.makeRotationFromEuler(Pi)),u.material.toneMapped=jt.getTransfer(w.colorSpace)!==ie,(h!==w||d!==w.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=w,d=w.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new ze(new Do(2,2),new Mi({name:"BackgroundMaterial",uniforms:Rs(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=jt.getTransfer(w.colorSpace)!==ie,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=w,d=w.version,p=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,y){b.getRGB(Kr,Hh(n)),i.buffers.color.setClear(Kr.r,Kr.g,Kr.b,y,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),c=y,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,f(a,c)},render:_,addToRenderList:m,dispose:E}}function K_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(S,A,O,H,V){let k=!1;const B=h(H,O,A);r!==B&&(r=B,l(r.object)),k=p(S,H,O,V),k&&g(S,H,O,V),V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,y(S,A,O,H),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,A,O){const H=O.wireframe===!0;let V=i[S.id];V===void 0&&(V={},i[S.id]=V);let k=V[A.id];k===void 0&&(k={},V[A.id]=k);let B=k[H];return B===void 0&&(B=d(c()),k[H]=B),B}function d(S){const A=[],O=[],H=[];for(let V=0;V<e;V++)A[V]=0,O[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:O,attributeDivisors:H,object:S,attributes:{},index:null}}function p(S,A,O,H){const V=r.attributes,k=A.attributes;let B=0;const X=O.getAttributes();for(const W in X)if(X[W].location>=0){const st=V[W];let Et=k[W];if(Et===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(Et=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(Et=S.instanceColor)),st===void 0||st.attribute!==Et||Et&&st.data!==Et.data)return!0;B++}return r.attributesNum!==B||r.index!==H}function g(S,A,O,H){const V={},k=A.attributes;let B=0;const X=O.getAttributes();for(const W in X)if(X[W].location>=0){let st=k[W];st===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(st=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(st=S.instanceColor));const Et={};Et.attribute=st,st&&st.data&&(Et.data=st.data),V[W]=Et,B++}r.attributes=V,r.attributesNum=B,r.index=H}function _(){const S=r.newAttributes;for(let A=0,O=S.length;A<O;A++)S[A]=0}function m(S){f(S,0)}function f(S,A){const O=r.newAttributes,H=r.enabledAttributes,V=r.attributeDivisors;O[S]=1,H[S]===0&&(n.enableVertexAttribArray(S),H[S]=1),V[S]!==A&&(n.vertexAttribDivisor(S,A),V[S]=A)}function E(){const S=r.newAttributes,A=r.enabledAttributes;for(let O=0,H=A.length;O<H;O++)A[O]!==S[O]&&(n.disableVertexAttribArray(O),A[O]=0)}function b(S,A,O,H,V,k,B){B===!0?n.vertexAttribIPointer(S,A,O,V,k):n.vertexAttribPointer(S,A,O,H,V,k)}function y(S,A,O,H){_();const V=H.attributes,k=O.getAttributes(),B=A.defaultAttributeValues;for(const X in k){const W=k[X];if(W.location>=0){let it=V[X];if(it===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(it=S.instanceColor)),it!==void 0){const st=it.normalized,Et=it.itemSize,Ft=t.get(it);if(Ft===void 0)continue;const te=Ft.buffer,ae=Ft.type,qt=Ft.bytesPerElement,$=ae===n.INT||ae===n.UNSIGNED_INT||it.gpuType===Wl;if(it.isInterleavedBufferAttribute){const Z=it.data,pt=Z.stride,Nt=it.offset;if(Z.isInstancedInterleavedBuffer){for(let Tt=0;Tt<W.locationSize;Tt++)f(W.location+Tt,Z.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Tt=0;Tt<W.locationSize;Tt++)m(W.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,te);for(let Tt=0;Tt<W.locationSize;Tt++)b(W.location+Tt,Et/W.locationSize,ae,st,pt*qt,(Nt+Et/W.locationSize*Tt)*qt,$)}else{if(it.isInstancedBufferAttribute){for(let Z=0;Z<W.locationSize;Z++)f(W.location+Z,it.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Z=0;Z<W.locationSize;Z++)m(W.location+Z);n.bindBuffer(n.ARRAY_BUFFER,te);for(let Z=0;Z<W.locationSize;Z++)b(W.location+Z,Et/W.locationSize,ae,st,Et*qt,Et/W.locationSize*Z*qt,$)}}else if(B!==void 0){const st=B[X];if(st!==void 0)switch(st.length){case 2:n.vertexAttrib2fv(W.location,st);break;case 3:n.vertexAttrib3fv(W.location,st);break;case 4:n.vertexAttrib4fv(W.location,st);break;default:n.vertexAttrib1fv(W.location,st)}}}}E()}function w(){P();for(const S in i){const A=i[S];for(const O in A){const H=A[O];for(const V in H)u(H[V].object),delete H[V];delete A[O]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const A=i[S.id];for(const O in A){const H=A[O];for(const V in H)u(H[V].object),delete H[V];delete A[O]}delete i[S.id]}function T(S){for(const A in i){const O=i[A];if(O[S.id]===void 0)continue;const H=O[S.id];for(const V in H)u(H[V].object),delete H[V];delete O[S.id]}}function P(){v(),o=!0,r!==s&&(r=s,l(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:v,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function j_(n,t,e){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,i,1)}function c(l,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Z_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Cn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===mr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Bn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Fn&&!P)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:w,maxSamples:R}}function J_(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new $n,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const E=r?0:i,b=E*4;let y=f.clippingState||null;c.value=y,y=u(g,d,b,p);for(let w=0;w!==b;++w)y[w]=e[w];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,y=p;b!==_;++b,y+=4)o.copy(h[b]).applyMatrix4(E,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Q_(n){let t=new WeakMap;function e(o,a){return a===Ka?o.mapping=Cs:a===ja&&(o.mapping=As),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ka||a===ja)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new $p(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const _s=4,yu=[.125,.215,.35,.446,.526,.582],Oi=20,Sa=new Kh,Mu=new Lt;let Ea=null,ba=0,Ta=0,Ca=!1;const Di=(1+Math.sqrt(5))/2,ps=1/Di,Su=[new D(-Di,ps,0),new D(Di,ps,0),new D(-ps,0,Di),new D(ps,0,Di),new D(0,Di,-ps),new D(0,Di,ps),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],t0=new D;class Eu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=t0}=r;Ea=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ea,ba,Ta),this._renderer.xr.enabled=Ca,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cs||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ea=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:mr,format:Cn,colorSpace:ws,depthBuffer:!1},s=bu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e0(r)),this._blurMaterial=n0(r,t,e)}return s}_compileMaterial(t){const e=new ze(this._lodPlanes[0],t);this._renderer.compile(e,Sa)}_sceneToCubeUV(t,e,i,s,r){const c=new hn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Mu),h.toneMapping=_i,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const _=new Bi({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),m=new ze(new gr,_);let f=!1;const E=t.background;E?E.isColor&&(_.color.copy(E),t.background=null,f=!0):(_.color.copy(Mu),f=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[b],r.y,r.z)):y===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[b]));const w=this._cubeSize;jr(s,y*w,b>2?w:0,w,w),h.setRenderTarget(s),f&&h.render(m,c),h.render(t,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=E}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Cs||t.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ze(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;jr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Sa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Su[(s-r-1)%Su.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ze(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Oi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Oi;m>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const f=[];let E=0;for(let T=0;T<Oi;++T){const P=T/_,v=Math.exp(-P*P/2);f.push(v),T===0?E+=v:T<m&&(E+=2*v)}for(let T=0;T<f.length;T++)f[T]=f[T]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;const y=this._sizeLods[s],w=3*y*(s>b-_s?s-b+_s:0),R=4*(this._cubeSize-y);jr(e,w,R,3*y,2*y),c.setRenderTarget(e),c.render(h,Sa)}}function e0(n){const t=[],e=[],i=[];let s=n;const r=n-_s+1+yu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-_s?c=yu[o-n+_s-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),b=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let R=0;R<p;R++){const T=R%3*2/3-1,P=R>2?0:-1,v=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];E.set(v,_*g*R),b.set(d,m*g*R);const S=[R,R,R,R,R,R];y.set(S,f*g*R)}const w=new gn;w.setAttribute("position",new mn(E,_)),w.setAttribute("uv",new mn(b,m)),w.setAttribute("faceIndex",new mn(y,f)),t.push(w),s>_s&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function bu(n,t,e){const i=new Gi(n,t,e);return i.texture.mapping=wo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function n0(n,t,e){const i=new Float32Array(Oi),s=new D(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Tu(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Cu(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function nc(){return`

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
	`}function i0(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ka||c===ja,u=c===Cs||c===As;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Eu(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Eu(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function s0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ur("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function r0(n,t,e,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)t.update(d[p],n.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let b=0,y=E.length;b<y;b+=3){const w=E[b+0],R=E[b+1],T=E[b+2];d.push(w,R,R,T,T,w)}}else if(g!==void 0){const E=g.array;_=g.version;for(let b=0,y=E.length/3-1;b<y;b+=3){const w=b+0,R=b+1,T=b+2;d.push(w,R,R,T,T,w)}}else return;const m=new(Ih(d)?Fh:Uh)(d,1);m.version=_;const f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function o0(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){n.drawElements(i,p,r,d*o),e.update(p,i,1)}function l(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*o,g),e.update(p,i,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function h(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E]*_[E];e.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function a0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function l0(n,t,e){const i=new WeakMap,s=new Me;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let w=a.attributes.position.count*y,R=1;w>t.maxTextureSize&&(R=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const T=new Float32Array(w*R*4*h),P=new Oh(T,w,R,h);P.type=Fn,P.needsUpdate=!0;const v=y*4;for(let A=0;A<h;A++){const O=f[A],H=E[A],V=b[A],k=w*R*4*A;for(let B=0;B<O.count;B++){const X=B*v;g===!0&&(s.fromBufferAttribute(O,B),T[k+X+0]=s.x,T[k+X+1]=s.y,T[k+X+2]=s.z,T[k+X+3]=0),_===!0&&(s.fromBufferAttribute(H,B),T[k+X+4]=s.x,T[k+X+5]=s.y,T[k+X+6]=s.z,T[k+X+7]=0),m===!0&&(s.fromBufferAttribute(V,B),T[k+X+8]=s.x,T[k+X+9]=s.y,T[k+X+10]=s.z,T[k+X+11]=V.itemSize===4?s.w:1)}}d={count:h,texture:P,size:new At(w,R)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function c0(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const Qh=new Ge,Au=new Wh(1,1),td=new Oh,ed=new Pp,nd=new kh,wu=[],Ru=[],Pu=new Float32Array(16),Lu=new Float32Array(9),Du=new Float32Array(4);function Ns(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=wu[s];if(r===void 0&&(r=new Float32Array(s),wu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function De(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ie(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Io(n,t){let e=Ru[t];e===void 0&&(e=new Int32Array(t),Ru[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function u0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function h0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2fv(this.addr,t),Ie(e,t)}}function d0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;n.uniform3fv(this.addr,t),Ie(e,t)}}function f0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4fv(this.addr,t),Ie(e,t)}}function p0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,i))return;Du.set(i),n.uniformMatrix2fv(this.addr,!1,Du),Ie(e,i)}}function m0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,i))return;Lu.set(i),n.uniformMatrix3fv(this.addr,!1,Lu),Ie(e,i)}}function g0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,i))return;Pu.set(i),n.uniformMatrix4fv(this.addr,!1,Pu),Ie(e,i)}}function _0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function x0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2iv(this.addr,t),Ie(e,t)}}function v0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3iv(this.addr,t),Ie(e,t)}}function y0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4iv(this.addr,t),Ie(e,t)}}function M0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function S0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2uiv(this.addr,t),Ie(e,t)}}function E0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3uiv(this.addr,t),Ie(e,t)}}function b0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4uiv(this.addr,t),Ie(e,t)}}function T0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Au.compareFunction=Dh,r=Au):r=Qh,e.setTexture2D(t||r,s)}function C0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ed,s)}function A0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||nd,s)}function w0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||td,s)}function R0(n){switch(n){case 5126:return u0;case 35664:return h0;case 35665:return d0;case 35666:return f0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return _0;case 35667:case 35671:return x0;case 35668:case 35672:return v0;case 35669:case 35673:return y0;case 5125:return M0;case 36294:return S0;case 36295:return E0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return w0}}function P0(n,t){n.uniform1fv(this.addr,t)}function L0(n,t){const e=Ns(t,this.size,2);n.uniform2fv(this.addr,e)}function D0(n,t){const e=Ns(t,this.size,3);n.uniform3fv(this.addr,e)}function I0(n,t){const e=Ns(t,this.size,4);n.uniform4fv(this.addr,e)}function O0(n,t){const e=Ns(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function N0(n,t){const e=Ns(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function U0(n,t){const e=Ns(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function F0(n,t){n.uniform1iv(this.addr,t)}function H0(n,t){n.uniform2iv(this.addr,t)}function B0(n,t){n.uniform3iv(this.addr,t)}function k0(n,t){n.uniform4iv(this.addr,t)}function z0(n,t){n.uniform1uiv(this.addr,t)}function V0(n,t){n.uniform2uiv(this.addr,t)}function G0(n,t){n.uniform3uiv(this.addr,t)}function W0(n,t){n.uniform4uiv(this.addr,t)}function X0(n,t,e){const i=this.cache,s=t.length,r=Io(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Qh,r[o])}function q0(n,t,e){const i=this.cache,s=t.length,r=Io(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ed,r[o])}function $0(n,t,e){const i=this.cache,s=t.length,r=Io(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||nd,r[o])}function Y0(n,t,e){const i=this.cache,s=t.length,r=Io(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||td,r[o])}function K0(n){switch(n){case 5126:return P0;case 35664:return L0;case 35665:return D0;case 35666:return I0;case 35674:return O0;case 35675:return N0;case 35676:return U0;case 5124:case 35670:return F0;case 35667:case 35671:return H0;case 35668:case 35672:return B0;case 35669:case 35673:return k0;case 5125:return z0;case 36294:return V0;case 36295:return G0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return Y0}}class j0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=R0(e.type)}}class Z0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=K0(e.type)}}class J0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Aa=/(\w+)(\])?(\[|\.)?/g;function Iu(n,t){n.seq.push(t),n.map[t.id]=t}function Q0(n,t,e){const i=n.name,s=i.length;for(Aa.lastIndex=0;;){const r=Aa.exec(i),o=Aa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Iu(e,l===void 0?new j0(a,n,t):new Z0(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new J0(a),Iu(e,h)),e=h}}}class oo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Q0(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Ou(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const tx=37297;let ex=0;function nx(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Nu=new kt;function ix(n){jt._getMatrix(Nu,jt.workingColorSpace,n);const t=`mat3( ${Nu.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(n)){case co:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Uu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+nx(n.getShaderSource(t),a)}else return r}function sx(n,t){const e=ix(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function rx(n,t){let e;switch(t){case np:e="Linear";break;case ip:e="Reinhard";break;case sp:e="Cineon";break;case rp:e="ACESFilmic";break;case ap:e="AgX";break;case lp:e="Neutral";break;case op:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Zr=new D;function ox(){jt.getLuminanceCoefficients(Zr);const n=Zr.x.toFixed(4),t=Zr.y.toFixed(4),e=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ax(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function lx(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function cx(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Zs(n){return n!==""}function Fu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ll(n){return n.replace(ux,dx)}const hx=new Map;function dx(n,t){let e=Vt[t];if(e===void 0){const i=hx.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ll(e)}const fx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(n){return n.replace(fx,px)}function px(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ku(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function mx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Eh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Nf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function gx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Cs:case As:t="ENVMAP_TYPE_CUBE";break;case wo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _x(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===As&&(t="ENVMAP_MODE_REFRACTION"),t}function xx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ao:t="ENVMAP_BLENDING_MULTIPLY";break;case tp:t="ENVMAP_BLENDING_MIX";break;case ep:t="ENVMAP_BLENDING_ADD";break}return t}function vx(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function yx(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=mx(e),l=gx(e),u=_x(e),h=xx(e),d=vx(e),p=ax(e),g=lx(r),_=s.createProgram();let m,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zs).join(`
`),f.length>0&&(f+=`
`)):(m=[ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),f=[ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?Vt.tonemapping_pars_fragment:"",e.toneMapping!==_i?rx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,sx("linearToOutputTexel",e.outputColorSpace),ox(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zs).join(`
`)),o=Ll(o),o=Fu(o,e),o=Hu(o,e),a=Ll(a),a=Fu(a,e),a=Hu(a,e),o=Bu(o),a=Bu(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=E+m+o,y=E+f+a,w=Ou(s,s.VERTEX_SHADER,b),R=Ou(s,s.FRAGMENT_SHADER,y);s.attachShader(_,w),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(A){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(w)||"",V=s.getShaderInfoLog(R)||"",k=O.trim(),B=H.trim(),X=V.trim();let W=!0,it=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,w,R);else{const st=Uu(s,w,"vertex"),Et=Uu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+k+`
`+st+`
`+Et)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||X==="")&&(it=!1);it&&(A.diagnostics={runnable:W,programLog:k,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:f}})}s.deleteShader(w),s.deleteShader(R),P=new oo(s,_),v=cx(s,_)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,tx)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ex++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=R,this}let Mx=0;class Sx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Ex(t),e.set(t,i)),i}}class Ex{constructor(t){this.id=Mx++,this.code=t,this.usedTimes=0}}function bx(n,t,e,i,s,r,o){const a=new Ql,c=new Sx,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,S,A,O,H){const V=O.fog,k=H.geometry,B=v.isMeshStandardMaterial?O.environment:null,X=(v.isMeshStandardMaterial?e:t).get(v.envMap||B),W=X&&X.mapping===wo?X.image.height:null,it=g[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const st=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Et=st!==void 0?st.length:0;let Ft=0;k.morphAttributes.position!==void 0&&(Ft=1),k.morphAttributes.normal!==void 0&&(Ft=2),k.morphAttributes.color!==void 0&&(Ft=3);let te,ae,qt,$;if(it){const Qt=Ln[it];te=Qt.vertexShader,ae=Qt.fragmentShader}else te=v.vertexShader,ae=v.fragmentShader,c.update(v),qt=c.getVertexShaderID(v),$=c.getFragmentShaderID(v);const Z=n.getRenderTarget(),pt=n.state.buffers.depth.getReversed(),Nt=H.isInstancedMesh===!0,Tt=H.isBatchedMesh===!0,Yt=!!v.map,He=!!v.matcap,L=!!X,me=!!v.aoMap,Ht=!!v.lightMap,It=!!v.bumpMap,_t=!!v.normalMap,ge=!!v.displacementMap,xt=!!v.emissiveMap,zt=!!v.metalnessMap,Oe=!!v.roughnessMap,be=v.anisotropy>0,C=v.clearcoat>0,x=v.dispersion>0,F=v.iridescence>0,Y=v.sheen>0,j=v.transmission>0,q=be&&!!v.anisotropyMap,bt=C&&!!v.clearcoatMap,rt=C&&!!v.clearcoatNormalMap,vt=C&&!!v.clearcoatRoughnessMap,yt=F&&!!v.iridescenceMap,tt=F&&!!v.iridescenceThicknessMap,ht=Y&&!!v.sheenColorMap,Dt=Y&&!!v.sheenRoughnessMap,Mt=!!v.specularMap,ct=!!v.specularColorMap,Bt=!!v.specularIntensityMap,I=j&&!!v.transmissionMap,et=j&&!!v.thicknessMap,at=!!v.gradientMap,ft=!!v.alphaMap,J=v.alphaTest>0,K=!!v.alphaHash,gt=!!v.extensions;let Ut=_i;v.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ut=n.toneMapping);const ce={shaderID:it,shaderType:v.type,shaderName:v.name,vertexShader:te,fragmentShader:ae,defines:v.defines,customVertexShaderID:qt,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Tt,batchingColor:Tt&&H._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&H.instanceColor!==null,instancingMorph:Nt&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ws,alphaToCoverage:!!v.alphaToCoverage,map:Yt,matcap:He,envMap:L,envMapMode:L&&X.mapping,envMapCubeUVHeight:W,aoMap:me,lightMap:Ht,bumpMap:It,normalMap:_t,displacementMap:d&&ge,emissiveMap:xt,normalMapObjectSpace:_t&&v.normalMapType===dp,normalMapTangentSpace:_t&&v.normalMapType===Zl,metalnessMap:zt,roughnessMap:Oe,anisotropy:be,anisotropyMap:q,clearcoat:C,clearcoatMap:bt,clearcoatNormalMap:rt,clearcoatRoughnessMap:vt,dispersion:x,iridescence:F,iridescenceMap:yt,iridescenceThicknessMap:tt,sheen:Y,sheenColorMap:ht,sheenRoughnessMap:Dt,specularMap:Mt,specularColorMap:ct,specularIntensityMap:Bt,transmission:j,transmissionMap:I,thicknessMap:et,gradientMap:at,opaque:v.transparent===!1&&v.blending===Ms&&v.alphaToCoverage===!1,alphaMap:ft,alphaTest:J,alphaHash:K,combine:v.combine,mapUv:Yt&&_(v.map.channel),aoMapUv:me&&_(v.aoMap.channel),lightMapUv:Ht&&_(v.lightMap.channel),bumpMapUv:It&&_(v.bumpMap.channel),normalMapUv:_t&&_(v.normalMap.channel),displacementMapUv:ge&&_(v.displacementMap.channel),emissiveMapUv:xt&&_(v.emissiveMap.channel),metalnessMapUv:zt&&_(v.metalnessMap.channel),roughnessMapUv:Oe&&_(v.roughnessMap.channel),anisotropyMapUv:q&&_(v.anisotropyMap.channel),clearcoatMapUv:bt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:rt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&_(v.sheenRoughnessMap.channel),specularMapUv:Mt&&_(v.specularMap.channel),specularColorMapUv:ct&&_(v.specularColorMap.channel),specularIntensityMapUv:Bt&&_(v.specularIntensityMap.channel),transmissionMapUv:I&&_(v.transmissionMap.channel),thicknessMapUv:et&&_(v.thicknessMap.channel),alphaMapUv:ft&&_(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(_t||be),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!k.attributes.uv&&(Yt||ft),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pt,skinning:H.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Ft,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Yt&&v.map.isVideoTexture===!0&&jt.getTransfer(v.map.colorSpace)===ie,decodeVideoTextureEmissive:xt&&v.emissiveMap.isVideoTexture===!0&&jt.getTransfer(v.emissiveMap.colorSpace)===ie,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Yn,flipSided:v.side===$e,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:gt&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&v.extensions.multiDraw===!0||Tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ce.vertexUv1s=l.has(1),ce.vertexUv2s=l.has(2),ce.vertexUv3s=l.has(3),l.clear(),ce}function f(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const A in v.defines)S.push(A),S.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(E(S,v),b(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function E(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function b(v,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),v.push(a.mask)}function y(v){const S=g[v.type];let A;if(S){const O=Ln[S];A=Gp.clone(O.uniforms)}else A=v.uniforms;return A}function w(v,S){let A;for(let O=0,H=u.length;O<H;O++){const V=u[O];if(V.cacheKey===S){A=V,++A.usedTimes;break}}return A===void 0&&(A=new yx(n,S,v,r),u.push(A)),A}function R(v){if(--v.usedTimes===0){const S=u.indexOf(v);u[S]=u[u.length-1],u.pop(),v.destroy()}}function T(v){c.remove(v)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:w,releaseProgram:R,releaseShaderCache:T,programs:u,dispose:P}}function Tx(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Cx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function zu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Vu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,d,p,g,_,m){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),t++,f}function a(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(h,d){e.length>1&&e.sort(h||Cx),i.length>1&&i.sort(d||zu),s.length>1&&s.sort(d||zu)}function u(){for(let h=t,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Ax(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Vu,n.set(i,[o])):s>=r.length?(o=new Vu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function wx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Lt};break;case"SpotLight":e={position:new D,direction:new D,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function Rx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Px=0;function Lx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Dx(n){const t=new wx,e=Rx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new D);const s=new D,r=new oe,o=new oe;function a(l){let u=0,h=0,d=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,E=0,b=0,y=0,w=0,R=0,T=0;l.sort(Lx);for(let v=0,S=l.length;v<S;v++){const A=l[v],O=A.color,H=A.intensity,V=A.distance,k=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=O.r*H,h+=O.g*H,d+=O.b*H;else if(A.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(A.sh.coefficients[B],H);T++}else if(A.isDirectionalLight){const B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const X=A.shadow,W=e.get(A);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=A.shadow.matrix,E++}i.directional[p]=B,p++}else if(A.isSpotLight){const B=t.get(A);B.position.setFromMatrixPosition(A.matrixWorld),B.color.copy(O).multiplyScalar(H),B.distance=V,B.coneCos=Math.cos(A.angle),B.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),B.decay=A.decay,i.spot[_]=B;const X=A.shadow;if(A.map&&(i.spotLightMap[w]=A.map,w++,X.updateMatrices(A),A.castShadow&&R++),i.spotLightMatrix[_]=X.matrix,A.castShadow){const W=e.get(A);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=k,y++}_++}else if(A.isRectAreaLight){const B=t.get(A);B.color.copy(O).multiplyScalar(H),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=B,m++}else if(A.isPointLight){const B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),B.distance=A.distance,B.decay=A.decay,A.castShadow){const X=A.shadow,W=e.get(A);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,W.shadowCameraNear=X.camera.near,W.shadowCameraFar=X.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=A.shadow.matrix,b++}i.point[g]=B,g++}else if(A.isHemisphereLight){const B=t.get(A);B.skyColor.copy(A.color).multiplyScalar(H),B.groundColor.copy(A.groundColor).multiplyScalar(H),i.hemi[f]=B,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==E||P.numPointShadows!==b||P.numSpotShadows!==y||P.numSpotMaps!==w||P.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+w-R,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=T,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=E,P.numPointShadows=b,P.numSpotShadows=y,P.numSpotMaps=w,P.numLightProbes=T,i.version=Px++)}function c(l,u){let h=0,d=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){const b=l[f];if(b.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(b.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function Gu(n){const t=new Dx(n),e=[],i=[];function s(u){l.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Ix(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Gu(n),t.set(s,[a])):r>=o.length?(a=new Gu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const Ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nx=`uniform sampler2D shadow_pass;
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
}`;function Ux(n,t,e){let i=new ec;const s=new At,r=new At,o=new Me,a=new sm({depthPacking:hp}),c=new rm,l={},u=e.maxTextureSize,h={[yi]:$e,[$e]:yi,[Yn]:Yn},d=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:Ox,fragmentShader:Nx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new gn;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ze(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eh;let f=this.type;this.render=function(R,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const v=n.getRenderTarget(),S=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),O=n.state;O.setBlending(gi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const H=f!==qn&&this.type===qn,V=f===qn&&this.type!==qn;for(let k=0,B=R.length;k<B;k++){const X=R[k],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const it=W.getFrameExtents();if(s.multiply(it),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/it.x),s.x=r.x*it.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/it.y),s.y=r.y*it.y,W.mapSize.y=r.y)),W.map===null||H===!0||V===!0){const Et=this.type!==qn?{minFilter:sn,magFilter:sn}:{};W.map!==null&&W.map.dispose(),W.map=new Gi(s.x,s.y,Et),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const st=W.getViewportCount();for(let Et=0;Et<st;Et++){const Ft=W.getViewport(Et);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),O.viewport(o),W.updateMatrices(X,Et),i=W.getFrustum(),y(T,P,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===qn&&E(W,P),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(v,S,A)};function E(R,T){const P=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Gi(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(T,null,P,d,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(T,null,P,p,_,null)}function b(R,T,P,v){let S=null;const A=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)S=A;else if(S=P.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const O=S.uuid,H=T.uuid;let V=l[O];V===void 0&&(V={},l[O]=V);let k=V[H];k===void 0&&(k=S.clone(),V[H]=k,T.addEventListener("dispose",w)),S=k}if(S.visible=T.visible,S.wireframe=T.wireframe,v===qn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:h[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=n.properties.get(S);O.light=P}return S}function y(R,T,P,v,S){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===qn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const H=t.update(R),V=R.material;if(Array.isArray(V)){const k=H.groups;for(let B=0,X=k.length;B<X;B++){const W=k[B],it=V[W.materialIndex];if(it&&it.visible){const st=b(R,it,v,S);R.onBeforeShadow(n,R,T,P,H,st,W),n.renderBufferDirect(P,null,H,st,R,W),R.onAfterShadow(n,R,T,P,H,st,W)}}}else if(V.visible){const k=b(R,V,v,S);R.onBeforeShadow(n,R,T,P,H,k,null),n.renderBufferDirect(P,null,H,k,R,null),R.onAfterShadow(n,R,T,P,H,k,null)}}const O=R.children;for(let H=0,V=O.length;H<V;H++)y(O[H],T,P,v,S)}function w(R){R.target.removeEventListener("dispose",w);for(const P in l){const v=l[P],S=R.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const Fx={[Va]:Ga,[Wa]:$a,[Xa]:Ya,[Ts]:qa,[Ga]:Va,[$a]:Wa,[Ya]:Xa,[qa]:Ts};function Hx(n,t){function e(){let I=!1;const et=new Me;let at=null;const ft=new Me(0,0,0,0);return{setMask:function(J){at!==J&&!I&&(n.colorMask(J,J,J,J),at=J)},setLocked:function(J){I=J},setClear:function(J,K,gt,Ut,ce){ce===!0&&(J*=Ut,K*=Ut,gt*=Ut),et.set(J,K,gt,Ut),ft.equals(et)===!1&&(n.clearColor(J,K,gt,Ut),ft.copy(et))},reset:function(){I=!1,at=null,ft.set(-1,0,0,0)}}}function i(){let I=!1,et=!1,at=null,ft=null,J=null;return{setReversed:function(K){if(et!==K){const gt=t.get("EXT_clip_control");K?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),et=K;const Ut=J;J=null,this.setClear(Ut)}},getReversed:function(){return et},setTest:function(K){K?Z(n.DEPTH_TEST):pt(n.DEPTH_TEST)},setMask:function(K){at!==K&&!I&&(n.depthMask(K),at=K)},setFunc:function(K){if(et&&(K=Fx[K]),ft!==K){switch(K){case Va:n.depthFunc(n.NEVER);break;case Ga:n.depthFunc(n.ALWAYS);break;case Wa:n.depthFunc(n.LESS);break;case Ts:n.depthFunc(n.LEQUAL);break;case Xa:n.depthFunc(n.EQUAL);break;case qa:n.depthFunc(n.GEQUAL);break;case $a:n.depthFunc(n.GREATER);break;case Ya:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=K}},setLocked:function(K){I=K},setClear:function(K){J!==K&&(et&&(K=1-K),n.clearDepth(K),J=K)},reset:function(){I=!1,at=null,ft=null,J=null,et=!1}}}function s(){let I=!1,et=null,at=null,ft=null,J=null,K=null,gt=null,Ut=null,ce=null;return{setTest:function(Qt){I||(Qt?Z(n.STENCIL_TEST):pt(n.STENCIL_TEST))},setMask:function(Qt){et!==Qt&&!I&&(n.stencilMask(Qt),et=Qt)},setFunc:function(Qt,kn,Pn){(at!==Qt||ft!==kn||J!==Pn)&&(n.stencilFunc(Qt,kn,Pn),at=Qt,ft=kn,J=Pn)},setOp:function(Qt,kn,Pn){(K!==Qt||gt!==kn||Ut!==Pn)&&(n.stencilOp(Qt,kn,Pn),K=Qt,gt=kn,Ut=Pn)},setLocked:function(Qt){I=Qt},setClear:function(Qt){ce!==Qt&&(n.clearStencil(Qt),ce=Qt)},reset:function(){I=!1,et=null,at=null,ft=null,J=null,K=null,gt=null,Ut=null,ce=null}}}const r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,b=null,y=null,w=null,R=null,T=new Lt(0,0,0),P=0,v=!1,S=null,A=null,O=null,H=null,V=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,X=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=X>=1):W.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=X>=2);let it=null,st={};const Et=n.getParameter(n.SCISSOR_BOX),Ft=n.getParameter(n.VIEWPORT),te=new Me().fromArray(Et),ae=new Me().fromArray(Ft);function qt(I,et,at,ft){const J=new Uint8Array(4),K=n.createTexture();n.bindTexture(I,K),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let gt=0;gt<at;gt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(et,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(et+gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return K}const $={};$[n.TEXTURE_2D]=qt(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=qt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=qt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=qt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(n.DEPTH_TEST),o.setFunc(Ts),It(!1),_t(Nc),Z(n.CULL_FACE),me(gi);function Z(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function pt(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Nt(I,et){return h[I]!==et?(n.bindFramebuffer(I,et),h[I]=et,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=et),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=et),!0):!1}function Tt(I,et){let at=p,ft=!1;if(I){at=d.get(et),at===void 0&&(at=[],d.set(et,at));const J=I.textures;if(at.length!==J.length||at[0]!==n.COLOR_ATTACHMENT0){for(let K=0,gt=J.length;K<gt;K++)at[K]=n.COLOR_ATTACHMENT0+K;at.length=J.length,ft=!0}}else at[0]!==n.BACK&&(at[0]=n.BACK,ft=!0);ft&&n.drawBuffers(at)}function Yt(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const He={[Ii]:n.FUNC_ADD,[Ff]:n.FUNC_SUBTRACT,[Hf]:n.FUNC_REVERSE_SUBTRACT};He[Bf]=n.MIN,He[kf]=n.MAX;const L={[zf]:n.ZERO,[Vf]:n.ONE,[Gf]:n.SRC_COLOR,[ka]:n.SRC_ALPHA,[Kf]:n.SRC_ALPHA_SATURATE,[$f]:n.DST_COLOR,[Xf]:n.DST_ALPHA,[Wf]:n.ONE_MINUS_SRC_COLOR,[za]:n.ONE_MINUS_SRC_ALPHA,[Yf]:n.ONE_MINUS_DST_COLOR,[qf]:n.ONE_MINUS_DST_ALPHA,[jf]:n.CONSTANT_COLOR,[Zf]:n.ONE_MINUS_CONSTANT_COLOR,[Jf]:n.CONSTANT_ALPHA,[Qf]:n.ONE_MINUS_CONSTANT_ALPHA};function me(I,et,at,ft,J,K,gt,Ut,ce,Qt){if(I===gi){_===!0&&(pt(n.BLEND),_=!1);return}if(_===!1&&(Z(n.BLEND),_=!0),I!==Uf){if(I!==m||Qt!==v){if((f!==Ii||y!==Ii)&&(n.blendEquation(n.FUNC_ADD),f=Ii,y=Ii),Qt)switch(I){case Ms:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uc:n.blendFunc(n.ONE,n.ONE);break;case Fc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ms:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Uc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Fc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,b=null,w=null,R=null,T.set(0,0,0),P=0,m=I,v=Qt}return}J=J||et,K=K||at,gt=gt||ft,(et!==f||J!==y)&&(n.blendEquationSeparate(He[et],He[J]),f=et,y=J),(at!==E||ft!==b||K!==w||gt!==R)&&(n.blendFuncSeparate(L[at],L[ft],L[K],L[gt]),E=at,b=ft,w=K,R=gt),(Ut.equals(T)===!1||ce!==P)&&(n.blendColor(Ut.r,Ut.g,Ut.b,ce),T.copy(Ut),P=ce),m=I,v=!1}function Ht(I,et){I.side===Yn?pt(n.CULL_FACE):Z(n.CULL_FACE);let at=I.side===$e;et&&(at=!at),It(at),I.blending===Ms&&I.transparent===!1?me(gi):me(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const ft=I.stencilWrite;a.setTest(ft),ft&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),xt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function It(I){S!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),S=I)}function _t(I){I!==If?(Z(n.CULL_FACE),I!==A&&(I===Nc?n.cullFace(n.BACK):I===Of?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pt(n.CULL_FACE),A=I}function ge(I){I!==O&&(B&&n.lineWidth(I),O=I)}function xt(I,et,at){I?(Z(n.POLYGON_OFFSET_FILL),(H!==et||V!==at)&&(n.polygonOffset(et,at),H=et,V=at)):pt(n.POLYGON_OFFSET_FILL)}function zt(I){I?Z(n.SCISSOR_TEST):pt(n.SCISSOR_TEST)}function Oe(I){I===void 0&&(I=n.TEXTURE0+k-1),it!==I&&(n.activeTexture(I),it=I)}function be(I,et,at){at===void 0&&(it===null?at=n.TEXTURE0+k-1:at=it);let ft=st[at];ft===void 0&&(ft={type:void 0,texture:void 0},st[at]=ft),(ft.type!==I||ft.texture!==et)&&(it!==at&&(n.activeTexture(at),it=at),n.bindTexture(I,et||$[I]),ft.type=I,ft.texture=et)}function C(){const I=st[it];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(I){te.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),te.copy(I))}function Dt(I){ae.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ae.copy(I))}function Mt(I,et){let at=l.get(et);at===void 0&&(at=new WeakMap,l.set(et,at));let ft=at.get(I);ft===void 0&&(ft=n.getUniformBlockIndex(et,I.name),at.set(I,ft))}function ct(I,et){const ft=l.get(et).get(I);c.get(et)!==ft&&(n.uniformBlockBinding(et,ft,I.__bindingPointIndex),c.set(et,ft))}function Bt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},it=null,st={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,b=null,y=null,w=null,R=null,T=new Lt(0,0,0),P=0,v=!1,S=null,A=null,O=null,H=null,V=null,te.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:pt,bindFramebuffer:Nt,drawBuffers:Tt,useProgram:Yt,setBlending:me,setMaterial:Ht,setFlipSided:It,setCullFace:_t,setLineWidth:ge,setPolygonOffset:xt,setScissorTest:zt,activeTexture:Oe,bindTexture:be,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:yt,texImage3D:tt,updateUBOMapping:Mt,uniformBlockBinding:ct,texStorage2D:rt,texStorage3D:vt,texSubImage2D:Y,texSubImage3D:j,compressedTexSubImage2D:q,compressedTexSubImage3D:bt,scissor:ht,viewport:Dt,reset:Bt}}function Bx(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new At,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,x){return p?new OffscreenCanvas(C,x):ho("canvas")}function _(C,x,F){let Y=1;const j=be(C);if((j.width>F||j.height>F)&&(Y=F/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor(Y*j.width),bt=Math.floor(Y*j.height);h===void 0&&(h=g(q,bt));const rt=x?g(q,bt):h;return rt.width=q,rt.height=bt,rt.getContext("2d").drawImage(C,0,0,q,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+bt+")."),rt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){n.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(C,x,F,Y,j=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=x;if(x===n.RED&&(F===n.FLOAT&&(q=n.R32F),F===n.HALF_FLOAT&&(q=n.R16F),F===n.UNSIGNED_BYTE&&(q=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.R8UI),F===n.UNSIGNED_SHORT&&(q=n.R16UI),F===n.UNSIGNED_INT&&(q=n.R32UI),F===n.BYTE&&(q=n.R8I),F===n.SHORT&&(q=n.R16I),F===n.INT&&(q=n.R32I)),x===n.RG&&(F===n.FLOAT&&(q=n.RG32F),F===n.HALF_FLOAT&&(q=n.RG16F),F===n.UNSIGNED_BYTE&&(q=n.RG8)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.RG8UI),F===n.UNSIGNED_SHORT&&(q=n.RG16UI),F===n.UNSIGNED_INT&&(q=n.RG32UI),F===n.BYTE&&(q=n.RG8I),F===n.SHORT&&(q=n.RG16I),F===n.INT&&(q=n.RG32I)),x===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.RGB8UI),F===n.UNSIGNED_SHORT&&(q=n.RGB16UI),F===n.UNSIGNED_INT&&(q=n.RGB32UI),F===n.BYTE&&(q=n.RGB8I),F===n.SHORT&&(q=n.RGB16I),F===n.INT&&(q=n.RGB32I)),x===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),F===n.UNSIGNED_INT&&(q=n.RGBA32UI),F===n.BYTE&&(q=n.RGBA8I),F===n.SHORT&&(q=n.RGBA16I),F===n.INT&&(q=n.RGBA32I)),x===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),x===n.RGBA){const bt=j?co:jt.getTransfer(Y);F===n.FLOAT&&(q=n.RGBA32F),F===n.HALF_FLOAT&&(q=n.RGBA16F),F===n.UNSIGNED_BYTE&&(q=bt===ie?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function y(C,x){let F;return C?x===null||x===Vi||x===ar?F=n.DEPTH24_STENCIL8:x===Fn?F=n.DEPTH32F_STENCIL8:x===or&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Vi||x===ar?F=n.DEPTH_COMPONENT24:x===Fn?F=n.DEPTH_COMPONENT32F:x===or&&(F=n.DEPTH_COMPONENT16),F}function w(C,x){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==sn&&C.minFilter!==Un?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function R(C){const x=C.target;x.removeEventListener("dispose",R),P(x),x.isVideoTexture&&u.delete(x)}function T(C){const x=C.target;x.removeEventListener("dispose",T),S(x)}function P(C){const x=i.get(C);if(x.__webglInit===void 0)return;const F=C.source,Y=d.get(F);if(Y){const j=Y[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&v(C),Object.keys(Y).length===0&&d.delete(F)}i.remove(C)}function v(C){const x=i.get(C);n.deleteTexture(x.__webglTexture);const F=C.source,Y=d.get(F);delete Y[x.__cacheKey],o.memory.textures--}function S(C){const x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let j=0;j<x.__webglFramebuffer[Y].length;j++)n.deleteFramebuffer(x.__webglFramebuffer[Y][j]);else n.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)n.deleteFramebuffer(x.__webglFramebuffer[Y]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=C.textures;for(let Y=0,j=F.length;Y<j;Y++){const q=i.get(F[Y]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(F[Y])}i.remove(C)}let A=0;function O(){A=0}function H(){const C=A;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),A+=1,C}function V(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function k(C,x){const F=i.get(C);if(C.isVideoTexture&&zt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&F.__version!==C.version){const Y=C.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(F,C,x);return}}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function B(C,x){const F=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){$(F,C,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function X(C,x){const F=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){$(F,C,x);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function W(C,x){const F=i.get(C);if(C.version>0&&F.__version!==C.version){Z(F,C,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}const it={[Za]:n.REPEAT,[Ui]:n.CLAMP_TO_EDGE,[Ja]:n.MIRRORED_REPEAT},st={[sn]:n.NEAREST,[cp]:n.NEAREST_MIPMAP_NEAREST,[br]:n.NEAREST_MIPMAP_LINEAR,[Un]:n.LINEAR,[Ko]:n.LINEAR_MIPMAP_NEAREST,[Fi]:n.LINEAR_MIPMAP_LINEAR},Et={[fp]:n.NEVER,[vp]:n.ALWAYS,[pp]:n.LESS,[Dh]:n.LEQUAL,[mp]:n.EQUAL,[xp]:n.GEQUAL,[gp]:n.GREATER,[_p]:n.NOTEQUAL};function Ft(C,x){if(x.type===Fn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Un||x.magFilter===Ko||x.magFilter===br||x.magFilter===Fi||x.minFilter===Un||x.minFilter===Ko||x.minFilter===br||x.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,it[x.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,it[x.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,it[x.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,st[x.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,st[x.minFilter]),x.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Et[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===sn||x.minFilter!==br&&x.minFilter!==Fi||x.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function te(C,x){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",R));const Y=x.source;let j=d.get(Y);j===void 0&&(j={},d.set(Y,j));const q=V(x);if(q!==C.__cacheKey){j[q]===void 0&&(j[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),j[q].usedTimes++;const bt=j[C.__cacheKey];bt!==void 0&&(j[C.__cacheKey].usedTimes--,bt.usedTimes===0&&v(x)),C.__cacheKey=q,C.__webglTexture=j[q].texture}return F}function ae(C,x,F){return Math.floor(Math.floor(C/F)/x)}function qt(C,x,F,Y){const q=C.updateRanges;if(q.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,F,Y,x.data);else{q.sort((tt,ht)=>tt.start-ht.start);let bt=0;for(let tt=1;tt<q.length;tt++){const ht=q[bt],Dt=q[tt],Mt=ht.start+ht.count,ct=ae(Dt.start,x.width,4),Bt=ae(ht.start,x.width,4);Dt.start<=Mt+1&&ct===Bt&&ae(Dt.start+Dt.count-1,x.width,4)===ct?ht.count=Math.max(ht.count,Dt.start+Dt.count-ht.start):(++bt,q[bt]=Dt)}q.length=bt+1;const rt=n.getParameter(n.UNPACK_ROW_LENGTH),vt=n.getParameter(n.UNPACK_SKIP_PIXELS),yt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let tt=0,ht=q.length;tt<ht;tt++){const Dt=q[tt],Mt=Math.floor(Dt.start/4),ct=Math.ceil(Dt.count/4),Bt=Mt%x.width,I=Math.floor(Mt/x.width),et=ct,at=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Bt),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),e.texSubImage2D(n.TEXTURE_2D,0,Bt,I,et,at,F,Y,x.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,rt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,vt),n.pixelStorei(n.UNPACK_SKIP_ROWS,yt)}}function $(C,x,F){let Y=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=n.TEXTURE_3D);const j=te(C,x),q=x.source;e.bindTexture(Y,C.__webglTexture,n.TEXTURE0+F);const bt=i.get(q);if(q.version!==bt.__version||j===!0){e.activeTexture(n.TEXTURE0+F);const rt=jt.getPrimaries(jt.workingColorSpace),vt=x.colorSpace===ui?null:jt.getPrimaries(x.colorSpace),yt=x.colorSpace===ui||rt===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let tt=_(x.image,!1,s.maxTextureSize);tt=Oe(x,tt);const ht=r.convert(x.format,x.colorSpace),Dt=r.convert(x.type);let Mt=b(x.internalFormat,ht,Dt,x.colorSpace,x.isVideoTexture);Ft(Y,x);let ct;const Bt=x.mipmaps,I=x.isVideoTexture!==!0,et=bt.__version===void 0||j===!0,at=q.dataReady,ft=w(x,tt);if(x.isDepthTexture)Mt=y(x.format===cr,x.type),et&&(I?e.texStorage2D(n.TEXTURE_2D,1,Mt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,Mt,tt.width,tt.height,0,ht,Dt,null));else if(x.isDataTexture)if(Bt.length>0){I&&et&&e.texStorage2D(n.TEXTURE_2D,ft,Mt,Bt[0].width,Bt[0].height);for(let J=0,K=Bt.length;J<K;J++)ct=Bt[J],I?at&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,ct.width,ct.height,ht,Dt,ct.data):e.texImage2D(n.TEXTURE_2D,J,Mt,ct.width,ct.height,0,ht,Dt,ct.data);x.generateMipmaps=!1}else I?(et&&e.texStorage2D(n.TEXTURE_2D,ft,Mt,tt.width,tt.height),at&&qt(x,tt,ht,Dt)):e.texImage2D(n.TEXTURE_2D,0,Mt,tt.width,tt.height,0,ht,Dt,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&et&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,Mt,Bt[0].width,Bt[0].height,tt.depth);for(let J=0,K=Bt.length;J<K;J++)if(ct=Bt[J],x.format!==Cn)if(ht!==null)if(I){if(at)if(x.layerUpdates.size>0){const gt=vu(ct.width,ct.height,x.format,x.type);for(const Ut of x.layerUpdates){const ce=ct.data.subarray(Ut*gt/ct.data.BYTES_PER_ELEMENT,(Ut+1)*gt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Ut,ct.width,ct.height,1,ht,ce)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ct.width,ct.height,tt.depth,ht,ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Mt,ct.width,ct.height,tt.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?at&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ct.width,ct.height,tt.depth,ht,Dt,ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,Mt,ct.width,ct.height,tt.depth,0,ht,Dt,ct.data)}else{I&&et&&e.texStorage2D(n.TEXTURE_2D,ft,Mt,Bt[0].width,Bt[0].height);for(let J=0,K=Bt.length;J<K;J++)ct=Bt[J],x.format!==Cn?ht!==null?I?at&&e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ct.width,ct.height,ht,ct.data):e.compressedTexImage2D(n.TEXTURE_2D,J,Mt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?at&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,ct.width,ct.height,ht,Dt,ct.data):e.texImage2D(n.TEXTURE_2D,J,Mt,ct.width,ct.height,0,ht,Dt,ct.data)}else if(x.isDataArrayTexture)if(I){if(et&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,Mt,tt.width,tt.height,tt.depth),at)if(x.layerUpdates.size>0){const J=vu(tt.width,tt.height,x.format,x.type);for(const K of x.layerUpdates){const gt=tt.data.subarray(K*J/tt.data.BYTES_PER_ELEMENT,(K+1)*J/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,ht,Dt,gt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ht,Dt,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Mt,tt.width,tt.height,tt.depth,0,ht,Dt,tt.data);else if(x.isData3DTexture)I?(et&&e.texStorage3D(n.TEXTURE_3D,ft,Mt,tt.width,tt.height,tt.depth),at&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ht,Dt,tt.data)):e.texImage3D(n.TEXTURE_3D,0,Mt,tt.width,tt.height,tt.depth,0,ht,Dt,tt.data);else if(x.isFramebufferTexture){if(et)if(I)e.texStorage2D(n.TEXTURE_2D,ft,Mt,tt.width,tt.height);else{let J=tt.width,K=tt.height;for(let gt=0;gt<ft;gt++)e.texImage2D(n.TEXTURE_2D,gt,Mt,J,K,0,ht,Dt,null),J>>=1,K>>=1}}else if(Bt.length>0){if(I&&et){const J=be(Bt[0]);e.texStorage2D(n.TEXTURE_2D,ft,Mt,J.width,J.height)}for(let J=0,K=Bt.length;J<K;J++)ct=Bt[J],I?at&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,ht,Dt,ct):e.texImage2D(n.TEXTURE_2D,J,Mt,ht,Dt,ct);x.generateMipmaps=!1}else if(I){if(et){const J=be(tt);e.texStorage2D(n.TEXTURE_2D,ft,Mt,J.width,J.height)}at&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht,Dt,tt)}else e.texImage2D(n.TEXTURE_2D,0,Mt,ht,Dt,tt);m(x)&&f(Y),bt.__version=q.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Z(C,x,F){if(x.image.length!==6)return;const Y=te(C,x),j=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+F);const q=i.get(j);if(j.version!==q.__version||Y===!0){e.activeTexture(n.TEXTURE0+F);const bt=jt.getPrimaries(jt.workingColorSpace),rt=x.colorSpace===ui?null:jt.getPrimaries(x.colorSpace),vt=x.colorSpace===ui||bt===rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const yt=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,ht=[];for(let K=0;K<6;K++)!yt&&!tt?ht[K]=_(x.image[K],!0,s.maxCubemapSize):ht[K]=tt?x.image[K].image:x.image[K],ht[K]=Oe(x,ht[K]);const Dt=ht[0],Mt=r.convert(x.format,x.colorSpace),ct=r.convert(x.type),Bt=b(x.internalFormat,Mt,ct,x.colorSpace),I=x.isVideoTexture!==!0,et=q.__version===void 0||Y===!0,at=j.dataReady;let ft=w(x,Dt);Ft(n.TEXTURE_CUBE_MAP,x);let J;if(yt){I&&et&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Bt,Dt.width,Dt.height);for(let K=0;K<6;K++){J=ht[K].mipmaps;for(let gt=0;gt<J.length;gt++){const Ut=J[gt];x.format!==Cn?Mt!==null?I?at&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,Ut.width,Ut.height,Mt,Ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,Bt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,Ut.width,Ut.height,Mt,ct,Ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,Bt,Ut.width,Ut.height,0,Mt,ct,Ut.data)}}}else{if(J=x.mipmaps,I&&et){J.length>0&&ft++;const K=be(ht[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Bt,K.width,K.height)}for(let K=0;K<6;K++)if(tt){I?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ht[K].width,ht[K].height,Mt,ct,ht[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Bt,ht[K].width,ht[K].height,0,Mt,ct,ht[K].data);for(let gt=0;gt<J.length;gt++){const ce=J[gt].image[K].image;I?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,ce.width,ce.height,Mt,ct,ce.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,Bt,ce.width,ce.height,0,Mt,ct,ce.data)}}else{I?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Mt,ct,ht[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Bt,Mt,ct,ht[K]);for(let gt=0;gt<J.length;gt++){const Ut=J[gt];I?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,Mt,ct,Ut.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,Bt,Mt,ct,Ut.image[K])}}}m(x)&&f(n.TEXTURE_CUBE_MAP),q.__version=j.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function pt(C,x,F,Y,j,q){const bt=r.convert(F.format,F.colorSpace),rt=r.convert(F.type),vt=b(F.internalFormat,bt,rt,F.colorSpace),yt=i.get(x),tt=i.get(F);if(tt.__renderTarget=x,!yt.__hasExternalTextures){const ht=Math.max(1,x.width>>q),Dt=Math.max(1,x.height>>q);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,q,vt,ht,Dt,x.depth,0,bt,rt,null):e.texImage2D(j,q,vt,ht,Dt,0,bt,rt,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),xt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,j,tt.__webglTexture,0,ge(x)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,j,tt.__webglTexture,q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(C,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,C),x.depthBuffer){const Y=x.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,q=y(x.stencilBuffer,j),bt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=ge(x);xt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt,q,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,q,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,q,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,C)}else{const Y=x.textures;for(let j=0;j<Y.length;j++){const q=Y[j],bt=r.convert(q.format,q.colorSpace),rt=r.convert(q.type),vt=b(q.internalFormat,bt,rt,q.colorSpace),yt=ge(x);F&&xt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt,vt,x.width,x.height):xt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt,vt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,vt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Tt(C,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),k(x.depthTexture,0);const j=Y.__webglTexture,q=ge(x);if(x.depthTexture.format===lr)xt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(x.depthTexture.format===cr)xt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Yt(C){const x=i.get(C),F=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=Y}if(C.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const Y=C.texture.mipmaps;Y&&Y.length>0?Tt(x.__webglFramebuffer[0],C):Tt(x.__webglFramebuffer,C)}else if(F){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=n.createRenderbuffer(),Nt(x.__webglDepthbuffer[Y],C,!1);else{const j=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,q)}}else{const Y=C.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Nt(x.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,q)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function He(C,x,F){const Y=i.get(C);x!==void 0&&pt(Y.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Yt(C)}function L(C){const x=C.texture,F=i.get(C),Y=i.get(x);C.addEventListener("dispose",T);const j=C.textures,q=C.isWebGLCubeRenderTarget===!0,bt=j.length>1;if(bt||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=x.version,o.memory.textures++),q){F.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[rt]=[];for(let vt=0;vt<x.mipmaps.length;vt++)F.__webglFramebuffer[rt][vt]=n.createFramebuffer()}else F.__webglFramebuffer[rt]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let rt=0;rt<x.mipmaps.length;rt++)F.__webglFramebuffer[rt]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(bt)for(let rt=0,vt=j.length;rt<vt;rt++){const yt=i.get(j[rt]);yt.__webglTexture===void 0&&(yt.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&xt(C)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let rt=0;rt<j.length;rt++){const vt=j[rt];F.__webglColorRenderbuffer[rt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[rt]);const yt=r.convert(vt.format,vt.colorSpace),tt=r.convert(vt.type),ht=b(vt.internalFormat,yt,tt,vt.colorSpace,C.isXRRenderTarget===!0),Dt=ge(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt,ht,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,F.__webglColorRenderbuffer[rt])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Nt(F.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Ft(n.TEXTURE_CUBE_MAP,x);for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)pt(F.__webglFramebuffer[rt][vt],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt);else pt(F.__webglFramebuffer[rt],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(x)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let rt=0,vt=j.length;rt<vt;rt++){const yt=j[rt],tt=i.get(yt);let ht=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ht=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,tt.__webglTexture),Ft(ht,yt),pt(F.__webglFramebuffer,C,yt,n.COLOR_ATTACHMENT0+rt,ht,0),m(yt)&&f(ht)}e.unbindTexture()}else{let rt=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(rt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,Y.__webglTexture),Ft(rt,x),x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)pt(F.__webglFramebuffer[vt],C,x,n.COLOR_ATTACHMENT0,rt,vt);else pt(F.__webglFramebuffer,C,x,n.COLOR_ATTACHMENT0,rt,0);m(x)&&f(rt),e.unbindTexture()}C.depthBuffer&&Yt(C)}function me(C){const x=C.textures;for(let F=0,Y=x.length;F<Y;F++){const j=x[F];if(m(j)){const q=E(C),bt=i.get(j).__webglTexture;e.bindTexture(q,bt),f(q),e.unbindTexture()}}}const Ht=[],It=[];function _t(C){if(C.samples>0){if(xt(C)===!1){const x=C.textures,F=C.width,Y=C.height;let j=n.COLOR_BUFFER_BIT;const q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(C),rt=x.length>1;if(rt)for(let yt=0;yt<x.length;yt++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const vt=C.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let yt=0;yt<x.length;yt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),rt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[yt]);const tt=i.get(x[yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,tt,0)}n.blitFramebuffer(0,0,F,Y,0,0,F,Y,j,n.NEAREST),c===!0&&(Ht.length=0,It.length=0,Ht.push(n.COLOR_ATTACHMENT0+yt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ht.push(q),It.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,It)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),rt)for(let yt=0;yt<x.length;yt++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,bt.__webglColorRenderbuffer[yt]);const tt=i.get(x[yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const x=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ge(C){return Math.min(s.maxSamples,C.samples)}function xt(C){const x=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function zt(C){const x=o.render.frame;u.get(C)!==x&&(u.set(C,x),C.update())}function Oe(C,x){const F=C.colorSpace,Y=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==ws&&F!==ui&&(jt.getTransfer(F)===ie?(Y!==Cn||j!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function be(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=O,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=He,this.setupRenderTarget=L,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=xt}function kx(n,t){function e(i,s=ui){let r;const o=jt.getTransfer(s);if(i===Bn)return n.UNSIGNED_BYTE;if(i===Xl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ql)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ah)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===wh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Th)return n.BYTE;if(i===Ch)return n.SHORT;if(i===or)return n.UNSIGNED_SHORT;if(i===Wl)return n.INT;if(i===Vi)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===mr)return n.HALF_FLOAT;if(i===Rh)return n.ALPHA;if(i===Ph)return n.RGB;if(i===Cn)return n.RGBA;if(i===lr)return n.DEPTH_COMPONENT;if(i===cr)return n.DEPTH_STENCIL;if(i===$l)return n.RED;if(i===Yl)return n.RED_INTEGER;if(i===Lh)return n.RG;if(i===Kl)return n.RG_INTEGER;if(i===jl)return n.RGBA_INTEGER;if(i===eo||i===no||i===io||i===so)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===no)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===so)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qa||i===tl||i===el||i===nl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===el)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===il||i===sl||i===rl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===il||i===sl)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===rl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ol||i===al||i===ll||i===cl||i===ul||i===hl||i===dl||i===fl||i===pl||i===ml||i===gl||i===_l||i===xl||i===vl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ol)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===al)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ll)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ul)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ml)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_l)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vl)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yl||i===Ml||i===Sl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===yl)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===El||i===bl||i===Tl||i===Cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===El)return r.COMPRESSED_RED_RGTC1_EXT;if(i===bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vx=`
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

}`;class Gx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Xh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Mi({vertexShader:zx,fragmentShader:Vx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ze(new Do(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wx extends qi{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Gx,f={},E=e.getContextAttributes();let b=null,y=null;const w=[],R=[],T=new At;let P=null;const v=new hn;v.viewport=new Me;const S=new hn;S.viewport=new Me;const A=[v,S],O=new cm;let H=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Z=w[$];return Z===void 0&&(Z=new _a,w[$]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function($){let Z=w[$];return Z===void 0&&(Z=new _a,w[$]=Z),Z.getGripSpace()},this.getHand=function($){let Z=w[$];return Z===void 0&&(Z=new _a,w[$]=Z),Z.getHandSpace()};function k($){const Z=R.indexOf($.inputSource);if(Z===-1)return;const pt=w[Z];pt!==void 0&&(pt.update($.inputSource,$.frame,l||o),pt.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",X);for(let $=0;$<w.length;$++){const Z=R[$];Z!==null&&(R[$]=null,w[$].disconnect(Z))}H=null,V=null,m.reset();for(const $ in f)delete f[$];t.setRenderTarget(b),p=null,d=null,h=null,s=null,y=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",B),s.addEventListener("inputsourceschange",X),E.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Nt=null,Tt=null;E.depth&&(Tt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=E.stencil?cr:lr,Nt=E.stencil?ar:Vi);const Yt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Yt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Gi(d.textureWidth,d.textureHeight,{format:Cn,type:Bn,depthTexture:new Wh(d.textureWidth,d.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const pt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Gi(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),qt.setContext(s),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X($){for(let Z=0;Z<$.removed.length;Z++){const pt=$.removed[Z],Nt=R.indexOf(pt);Nt>=0&&(R[Nt]=null,w[Nt].disconnect(pt))}for(let Z=0;Z<$.added.length;Z++){const pt=$.added[Z];let Nt=R.indexOf(pt);if(Nt===-1){for(let Yt=0;Yt<w.length;Yt++)if(Yt>=R.length){R.push(pt),Nt=Yt;break}else if(R[Yt]===null){R[Yt]=pt,Nt=Yt;break}if(Nt===-1)break}const Tt=w[Nt];Tt&&Tt.connect(pt)}}const W=new D,it=new D;function st($,Z,pt){W.setFromMatrixPosition(Z.matrixWorld),it.setFromMatrixPosition(pt.matrixWorld);const Nt=W.distanceTo(it),Tt=Z.projectionMatrix.elements,Yt=pt.projectionMatrix.elements,He=Tt[14]/(Tt[10]-1),L=Tt[14]/(Tt[10]+1),me=(Tt[9]+1)/Tt[5],Ht=(Tt[9]-1)/Tt[5],It=(Tt[8]-1)/Tt[0],_t=(Yt[8]+1)/Yt[0],ge=He*It,xt=He*_t,zt=Nt/(-It+_t),Oe=zt*-It;if(Z.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Oe),$.translateZ(zt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Tt[10]===-1)$.projectionMatrix.copy(Z.projectionMatrix),$.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const be=He+zt,C=L+zt,x=ge-Oe,F=xt+(Nt-Oe),Y=me*L/C*be,j=Ht*L/C*be;$.projectionMatrix.makePerspective(x,F,Y,j,be,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Et($,Z){Z===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Z.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let Z=$.near,pt=$.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),O.near=S.near=v.near=Z,O.far=S.far=v.far=pt,(H!==O.near||V!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),H=O.near,V=O.far),O.layers.mask=$.layers.mask|6,v.layers.mask=O.layers.mask&3,S.layers.mask=O.layers.mask&5;const Nt=$.parent,Tt=O.cameras;Et(O,Nt);for(let Yt=0;Yt<Tt.length;Yt++)Et(Tt[Yt],Nt);Tt.length===2?st(O,v,S):O.projectionMatrix.copy(v.projectionMatrix),Ft($,O,Nt)};function Ft($,Z,pt){pt===null?$.matrix.copy(Z.matrixWorld):($.matrix.copy(pt.matrixWorld),$.matrix.invert(),$.matrix.multiply(Z.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Z.projectionMatrix),$.projectionMatrixInverse.copy(Z.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=wl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function($){return f[$]};let te=null;function ae($,Z){if(u=Z.getViewerPose(l||o),g=Z,u!==null){const pt=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Nt=!1;pt.length!==O.cameras.length&&(O.cameras.length=0,Nt=!0);for(let L=0;L<pt.length;L++){const me=pt[L];let Ht=null;if(p!==null)Ht=p.getViewport(me);else{const _t=h.getViewSubImage(d,me);Ht=_t.viewport,L===0&&(t.setRenderTargetTextures(y,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(y))}let It=A[L];It===void 0&&(It=new hn,It.layers.enable(L),It.viewport=new Me,A[L]=It),It.matrix.fromArray(me.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(me.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),L===0&&(O.matrix.copy(It.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Nt===!0&&O.cameras.push(It)}const Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const L=h.getDepthInformation(pt[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(Tt&&Tt.includes("camera-access")&&_){t.state.unbindTexture(),h=i.getBinding();for(let L=0;L<pt.length;L++){const me=pt[L].camera;if(me){let Ht=f[me];Ht||(Ht=new Xh,f[me]=Ht);const It=h.getCameraImage(me);Ht.sourceTexture=It}}}}for(let pt=0;pt<w.length;pt++){const Nt=R[pt],Tt=w[pt];Nt!==null&&Tt!==void 0&&Tt.update(Nt,Z,l||o)}te&&te($,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const qt=new Jh;qt.setAnimationLoop(ae),this.setAnimationLoop=function($){te=$},this.dispose=function(){}}}const Li=new wn,Xx=new oe;function qx(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Hh(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,b,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,E,b):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===$e&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===$e&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=t.get(f),b=E.envMap,y=E.envMapRotation;b&&(m.envMap.value=b,Li.copy(y),Li.x*=-1,Li.y*=-1,Li.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),m.envMapRotation.value.setFromMatrix4(Xx.makeRotationFromEuler(Li)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,E,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=b*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===$e&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const E=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function $x(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,b){const y=b.program;i.uniformBlockBinding(E,y)}function l(E,b){let y=s[E.id];y===void 0&&(g(E),y=u(E),s[E.id]=y,E.addEventListener("dispose",m));const w=b.program;i.updateUBOMapping(E,w);const R=t.render.frame;r[E.id]!==R&&(d(E),r[E.id]=R)}function u(E){const b=h();E.__bindingPointIndex=b;const y=n.createBuffer(),w=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,w,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,y),y}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const b=s[E.id],y=E.uniforms,w=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,T=y.length;R<T;R++){const P=Array.isArray(y[R])?y[R]:[y[R]];for(let v=0,S=P.length;v<S;v++){const A=P[v];if(p(A,R,v,w)===!0){const O=A.__offset,H=Array.isArray(A.value)?A.value:[A.value];let V=0;for(let k=0;k<H.length;k++){const B=H[k],X=_(B);typeof B=="number"||typeof B=="boolean"?(A.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,O+V,A.__data)):B.isMatrix3?(A.__data[0]=B.elements[0],A.__data[1]=B.elements[1],A.__data[2]=B.elements[2],A.__data[3]=0,A.__data[4]=B.elements[3],A.__data[5]=B.elements[4],A.__data[6]=B.elements[5],A.__data[7]=0,A.__data[8]=B.elements[6],A.__data[9]=B.elements[7],A.__data[10]=B.elements[8],A.__data[11]=0):(B.toArray(A.__data,V),V+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,b,y,w){const R=E.value,T=b+"_"+y;if(w[T]===void 0)return typeof R=="number"||typeof R=="boolean"?w[T]=R:w[T]=R.clone(),!0;{const P=w[T];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return w[T]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(E){const b=E.uniforms;let y=0;const w=16;for(let T=0,P=b.length;T<P;T++){const v=Array.isArray(b[T])?b[T]:[b[T]];for(let S=0,A=v.length;S<A;S++){const O=v[S],H=Array.isArray(O.value)?O.value:[O.value];for(let V=0,k=H.length;V<k;V++){const B=H[V],X=_(B),W=y%w,it=W%X.boundary,st=W+it;y+=it,st!==0&&w-st<X.storage&&(y+=w-st),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=X.storage}}}const R=y%w;return R>0&&(y+=w-R),E.__size=y,E.__cache={},this}function _(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class Yx{constructor(t={}){const{canvas:e=Ep(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let w=!1;this._outputColorSpace=un;let R=0,T=0,P=null,v=-1,S=null;const A=new Me,O=new Me;let H=null;const V=new Lt(0);let k=0,B=e.width,X=e.height,W=1,it=null,st=null;const Et=new Me(0,0,B,X),Ft=new Me(0,0,B,X);let te=!1;const ae=new ec;let qt=!1,$=!1;const Z=new oe,pt=new D,Nt=new Me,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function He(){return P===null?W:1}let L=i;function me(M,N){return e.getContext(M,N)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gl}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",J,!1),L===null){const N="webgl2";if(L=me(N,M),L===null)throw me(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ht,It,_t,ge,xt,zt,Oe,be,C,x,F,Y,j,q,bt,rt,vt,yt,tt,ht,Dt,Mt,ct,Bt;function I(){Ht=new s0(L),Ht.init(),Mt=new kx(L,Ht),It=new Z_(L,Ht,t,Mt),_t=new Hx(L,Ht),It.reversedDepthBuffer&&d&&_t.buffers.depth.setReversed(!0),ge=new a0(L),xt=new Tx,zt=new Bx(L,Ht,_t,xt,It,Mt,ge),Oe=new Q_(y),be=new i0(y),C=new fm(L),ct=new K_(L,C),x=new r0(L,C,ge,ct),F=new c0(L,x,C,ge),tt=new l0(L,It,zt),rt=new J_(xt),Y=new bx(y,Oe,be,Ht,It,ct,rt),j=new qx(y,xt),q=new Ax,bt=new Ix(Ht),yt=new Y_(y,Oe,be,_t,F,p,c),vt=new Ux(y,F,It),Bt=new $x(L,ge,It,_t),ht=new j_(L,Ht,ge),Dt=new o0(L,Ht,ge),ge.programs=Y.programs,y.capabilities=It,y.extensions=Ht,y.properties=xt,y.renderLists=q,y.shadowMap=vt,y.state=_t,y.info=ge}I();const et=new Wx(y,L);this.xr=et,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=Ht.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ht.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(M){M!==void 0&&(W=M,this.setSize(B,X,!1))},this.getSize=function(M){return M.set(B,X)},this.setSize=function(M,N,z=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=M,X=N,e.width=Math.floor(M*W),e.height=Math.floor(N*W),z===!0&&(e.style.width=M+"px",e.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(B*W,X*W).floor()},this.setDrawingBufferSize=function(M,N,z){B=M,X=N,W=z,e.width=Math.floor(M*z),e.height=Math.floor(N*z),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(A)},this.getViewport=function(M){return M.copy(Et)},this.setViewport=function(M,N,z,G){M.isVector4?Et.set(M.x,M.y,M.z,M.w):Et.set(M,N,z,G),_t.viewport(A.copy(Et).multiplyScalar(W).round())},this.getScissor=function(M){return M.copy(Ft)},this.setScissor=function(M,N,z,G){M.isVector4?Ft.set(M.x,M.y,M.z,M.w):Ft.set(M,N,z,G),_t.scissor(O.copy(Ft).multiplyScalar(W).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(M){_t.setScissorTest(te=M)},this.setOpaqueSort=function(M){it=M},this.setTransparentSort=function(M){st=M},this.getClearColor=function(M){return M.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,z=!0){let G=0;if(M){let U=!1;if(P!==null){const Q=P.texture.format;U=Q===jl||Q===Kl||Q===Yl}if(U){const Q=P.texture.type,ut=Q===Bn||Q===Vi||Q===or||Q===ar||Q===Xl||Q===ql,mt=yt.getClearColor(),dt=yt.getClearAlpha(),Pt=mt.r,Ot=mt.g,Ct=mt.b;ut?(g[0]=Pt,g[1]=Ot,g[2]=Ct,g[3]=dt,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Pt,_[1]=Ot,_[2]=Ct,_[3]=dt,L.clearBufferiv(L.COLOR,0,_))}else G|=L.COLOR_BUFFER_BIT}N&&(G|=L.DEPTH_BUFFER_BIT),z&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",J,!1),yt.dispose(),q.dispose(),bt.dispose(),xt.dispose(),Oe.dispose(),be.dispose(),F.dispose(),ct.dispose(),Bt.dispose(),Y.dispose(),et.dispose(),et.removeEventListener("sessionstart",Pn),et.removeEventListener("sessionend",Rc),bi.stop()};function at(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const M=ge.autoReset,N=vt.enabled,z=vt.autoUpdate,G=vt.needsUpdate,U=vt.type;I(),ge.autoReset=M,vt.enabled=N,vt.autoUpdate=z,vt.needsUpdate=G,vt.type=U}function J(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function K(M){const N=M.target;N.removeEventListener("dispose",K),gt(N)}function gt(M){Ut(M),xt.remove(M)}function Ut(M){const N=xt.get(M).programs;N!==void 0&&(N.forEach(function(z){Y.releaseProgram(z)}),M.isShaderMaterial&&Y.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,z,G,U,Q){N===null&&(N=Tt);const ut=U.isMesh&&U.matrixWorld.determinant()<0,mt=Af(M,N,z,G,U);_t.setMaterial(G,ut);let dt=z.index,Pt=1;if(G.wireframe===!0){if(dt=x.getWireframeAttribute(z),dt===void 0)return;Pt=2}const Ot=z.drawRange,Ct=z.attributes.position;let Xt=Ot.start*Pt,ee=(Ot.start+Ot.count)*Pt;Q!==null&&(Xt=Math.max(Xt,Q.start*Pt),ee=Math.min(ee,(Q.start+Q.count)*Pt)),dt!==null?(Xt=Math.max(Xt,0),ee=Math.min(ee,dt.count)):Ct!=null&&(Xt=Math.max(Xt,0),ee=Math.min(ee,Ct.count));const ye=ee-Xt;if(ye<0||ye===1/0)return;ct.setup(U,G,mt,z,dt);let pe,le=ht;if(dt!==null&&(pe=C.get(dt),le=Dt,le.setIndex(pe)),U.isMesh)G.wireframe===!0?(_t.setLineWidth(G.wireframeLinewidth*He()),le.setMode(L.LINES)):le.setMode(L.TRIANGLES);else if(U.isLine){let wt=G.linewidth;wt===void 0&&(wt=1),_t.setLineWidth(wt*He()),U.isLineSegments?le.setMode(L.LINES):U.isLineLoop?le.setMode(L.LINE_LOOP):le.setMode(L.LINE_STRIP)}else U.isPoints?le.setMode(L.POINTS):U.isSprite&&le.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ur("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))le.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const wt=U._multiDrawStarts,_e=U._multiDrawCounts,Kt=U._multiDrawCount,Qe=dt?C.get(dt).bytesPerElement:1,Ki=xt.get(G).currentProgram.getUniforms();for(let tn=0;tn<Kt;tn++)Ki.setValue(L,"_gl_DrawID",tn),le.render(wt[tn]/Qe,_e[tn])}else if(U.isInstancedMesh)le.renderInstances(Xt,ye,U.count);else if(z.isInstancedBufferGeometry){const wt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,_e=Math.min(z.instanceCount,wt);le.renderInstances(Xt,ye,_e)}else le.render(Xt,ye)};function ce(M,N,z){M.transparent===!0&&M.side===Yn&&M.forceSinglePass===!1?(M.side=$e,M.needsUpdate=!0,Er(M,N,z),M.side=yi,M.needsUpdate=!0,Er(M,N,z),M.side=Yn):Er(M,N,z)}this.compile=function(M,N,z=null){z===null&&(z=M),f=bt.get(z),f.init(N),b.push(f),z.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),M!==z&&M.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const G=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let ut=0;ut<Q.length;ut++){const mt=Q[ut];ce(mt,z,U),G.add(mt)}else ce(Q,z,U),G.add(Q)}),f=b.pop(),G},this.compileAsync=function(M,N,z=null){const G=this.compile(M,N,z);return new Promise(U=>{function Q(){if(G.forEach(function(ut){xt.get(ut).currentProgram.isReady()&&G.delete(ut)}),G.size===0){U(M);return}setTimeout(Q,10)}Ht.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Qt=null;function kn(M){Qt&&Qt(M)}function Pn(){bi.stop()}function Rc(){bi.start()}const bi=new Jh;bi.setAnimationLoop(kn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(M){Qt=M,et.setAnimationLoop(M),M===null?bi.stop():bi.start()},et.addEventListener("sessionstart",Pn),et.addEventListener("sessionend",Rc),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(N),N=et.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,N,P),f=bt.get(M,b.length),f.init(N),b.push(f),Z.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ae.setFromProjectionMatrix(Z,Hn,N.reversedDepth),$=this.localClippingEnabled,qt=rt.init(this.clippingPlanes,$),m=q.get(M,E.length),m.init(),E.push(m),et.enabled===!0&&et.isPresenting===!0){const Q=y.xr.getDepthSensingMesh();Q!==null&&$o(Q,N,-1/0,y.sortObjects)}$o(M,N,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(it,st),Yt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Yt&&yt.addToRenderList(m,M),this.info.render.frame++,qt===!0&&rt.beginShadows();const z=f.state.shadowsArray;vt.render(z,M,N),qt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,U=m.transmissive;if(f.setupLights(),N.isArrayCamera){const Q=N.cameras;if(U.length>0)for(let ut=0,mt=Q.length;ut<mt;ut++){const dt=Q[ut];Lc(G,U,M,dt)}Yt&&yt.render(M);for(let ut=0,mt=Q.length;ut<mt;ut++){const dt=Q[ut];Pc(m,M,dt,dt.viewport)}}else U.length>0&&Lc(G,U,M,N),Yt&&yt.render(M),Pc(m,M,N);P!==null&&T===0&&(zt.updateMultisampleRenderTarget(P),zt.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(y,M,N),ct.resetDefaultState(),v=-1,S=null,b.pop(),b.length>0?(f=b[b.length-1],qt===!0&&rt.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function $o(M,N,z,G){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ae.intersectsSprite(M)){G&&Nt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Z);const ut=F.update(M),mt=M.material;mt.visible&&m.push(M,ut,mt,z,Nt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ae.intersectsObject(M))){const ut=F.update(M),mt=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Nt.copy(M.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Nt.copy(ut.boundingSphere.center)),Nt.applyMatrix4(M.matrixWorld).applyMatrix4(Z)),Array.isArray(mt)){const dt=ut.groups;for(let Pt=0,Ot=dt.length;Pt<Ot;Pt++){const Ct=dt[Pt],Xt=mt[Ct.materialIndex];Xt&&Xt.visible&&m.push(M,ut,Xt,z,Nt.z,Ct)}}else mt.visible&&m.push(M,ut,mt,z,Nt.z,null)}}const Q=M.children;for(let ut=0,mt=Q.length;ut<mt;ut++)$o(Q[ut],N,z,G)}function Pc(M,N,z,G){const U=M.opaque,Q=M.transmissive,ut=M.transparent;f.setupLightsView(z),qt===!0&&rt.setGlobalState(y.clippingPlanes,z),G&&_t.viewport(A.copy(G)),U.length>0&&Sr(U,N,z),Q.length>0&&Sr(Q,N,z),ut.length>0&&Sr(ut,N,z),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Lc(M,N,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new Gi(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?mr:Bn,minFilter:Fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const Q=f.state.transmissionRenderTarget[G.id],ut=G.viewport||A;Q.setSize(ut.z*y.transmissionResolutionScale,ut.w*y.transmissionResolutionScale);const mt=y.getRenderTarget(),dt=y.getActiveCubeFace(),Pt=y.getActiveMipmapLevel();y.setRenderTarget(Q),y.getClearColor(V),k=y.getClearAlpha(),k<1&&y.setClearColor(16777215,.5),y.clear(),Yt&&yt.render(z);const Ot=y.toneMapping;y.toneMapping=_i;const Ct=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),qt===!0&&rt.setGlobalState(y.clippingPlanes,G),Sr(M,z,G),zt.updateMultisampleRenderTarget(Q),zt.updateRenderTargetMipmap(Q),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let ee=0,ye=N.length;ee<ye;ee++){const pe=N[ee],le=pe.object,wt=pe.geometry,_e=pe.material,Kt=pe.group;if(_e.side===Yn&&le.layers.test(G.layers)){const Qe=_e.side;_e.side=$e,_e.needsUpdate=!0,Dc(le,z,G,wt,_e,Kt),_e.side=Qe,_e.needsUpdate=!0,Xt=!0}}Xt===!0&&(zt.updateMultisampleRenderTarget(Q),zt.updateRenderTargetMipmap(Q))}y.setRenderTarget(mt,dt,Pt),y.setClearColor(V,k),Ct!==void 0&&(G.viewport=Ct),y.toneMapping=Ot}function Sr(M,N,z){const G=N.isScene===!0?N.overrideMaterial:null;for(let U=0,Q=M.length;U<Q;U++){const ut=M[U],mt=ut.object,dt=ut.geometry,Pt=ut.group;let Ot=ut.material;Ot.allowOverride===!0&&G!==null&&(Ot=G),mt.layers.test(z.layers)&&Dc(mt,N,z,dt,Ot,Pt)}}function Dc(M,N,z,G,U,Q){M.onBeforeRender(y,N,z,G,U,Q),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(y,N,z,G,M,Q),U.transparent===!0&&U.side===Yn&&U.forceSinglePass===!1?(U.side=$e,U.needsUpdate=!0,y.renderBufferDirect(z,N,G,U,M,Q),U.side=yi,U.needsUpdate=!0,y.renderBufferDirect(z,N,G,U,M,Q),U.side=Yn):y.renderBufferDirect(z,N,G,U,M,Q),M.onAfterRender(y,N,z,G,U,Q)}function Er(M,N,z){N.isScene!==!0&&(N=Tt);const G=xt.get(M),U=f.state.lights,Q=f.state.shadowsArray,ut=U.state.version,mt=Y.getParameters(M,U.state,Q,N,z),dt=Y.getProgramCacheKey(mt);let Pt=G.programs;G.environment=M.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(M.isMeshStandardMaterial?be:Oe).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Pt===void 0&&(M.addEventListener("dispose",K),Pt=new Map,G.programs=Pt);let Ot=Pt.get(dt);if(Ot!==void 0){if(G.currentProgram===Ot&&G.lightsStateVersion===ut)return Oc(M,mt),Ot}else mt.uniforms=Y.getUniforms(M),M.onBeforeCompile(mt,y),Ot=Y.acquireProgram(mt,dt),Pt.set(dt,Ot),G.uniforms=mt.uniforms;const Ct=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ct.clippingPlanes=rt.uniform),Oc(M,mt),G.needsLights=Rf(M),G.lightsStateVersion=ut,G.needsLights&&(Ct.ambientLightColor.value=U.state.ambient,Ct.lightProbe.value=U.state.probe,Ct.directionalLights.value=U.state.directional,Ct.directionalLightShadows.value=U.state.directionalShadow,Ct.spotLights.value=U.state.spot,Ct.spotLightShadows.value=U.state.spotShadow,Ct.rectAreaLights.value=U.state.rectArea,Ct.ltc_1.value=U.state.rectAreaLTC1,Ct.ltc_2.value=U.state.rectAreaLTC2,Ct.pointLights.value=U.state.point,Ct.pointLightShadows.value=U.state.pointShadow,Ct.hemisphereLights.value=U.state.hemi,Ct.directionalShadowMap.value=U.state.directionalShadowMap,Ct.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ct.spotShadowMap.value=U.state.spotShadowMap,Ct.spotLightMatrix.value=U.state.spotLightMatrix,Ct.spotLightMap.value=U.state.spotLightMap,Ct.pointShadowMap.value=U.state.pointShadowMap,Ct.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=Ot,G.uniformsList=null,Ot}function Ic(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=oo.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Oc(M,N){const z=xt.get(M);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function Af(M,N,z,G,U){N.isScene!==!0&&(N=Tt),zt.resetTextureUnits();const Q=N.fog,ut=G.isMeshStandardMaterial?N.environment:null,mt=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ws,dt=(G.isMeshStandardMaterial?be:Oe).get(G.envMap||ut),Pt=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ot=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ct=!!z.morphAttributes.position,Xt=!!z.morphAttributes.normal,ee=!!z.morphAttributes.color;let ye=_i;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ye=y.toneMapping);const pe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,le=pe!==void 0?pe.length:0,wt=xt.get(G),_e=f.state.lights;if(qt===!0&&($===!0||M!==S)){const We=M===S&&G.id===v;rt.setState(G,M,We)}let Kt=!1;G.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==_e.state.version||wt.outputColorSpace!==mt||U.isBatchedMesh&&wt.batching===!1||!U.isBatchedMesh&&wt.batching===!0||U.isBatchedMesh&&wt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&wt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&wt.instancing===!1||!U.isInstancedMesh&&wt.instancing===!0||U.isSkinnedMesh&&wt.skinning===!1||!U.isSkinnedMesh&&wt.skinning===!0||U.isInstancedMesh&&wt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&wt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&wt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&wt.instancingMorph===!1&&U.morphTexture!==null||wt.envMap!==dt||G.fog===!0&&wt.fog!==Q||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==rt.numPlanes||wt.numIntersection!==rt.numIntersection)||wt.vertexAlphas!==Pt||wt.vertexTangents!==Ot||wt.morphTargets!==Ct||wt.morphNormals!==Xt||wt.morphColors!==ee||wt.toneMapping!==ye||wt.morphTargetsCount!==le)&&(Kt=!0):(Kt=!0,wt.__version=G.version);let Qe=wt.currentProgram;Kt===!0&&(Qe=Er(G,N,U));let Ki=!1,tn=!1,Fs=!1;const xe=Qe.getUniforms(),rn=wt.uniforms;if(_t.useProgram(Qe.program)&&(Ki=!0,tn=!0,Fs=!0),G.id!==v&&(v=G.id,tn=!0),Ki||S!==M){_t.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),xe.setValue(L,"projectionMatrix",M.projectionMatrix),xe.setValue(L,"viewMatrix",M.matrixWorldInverse);const je=xe.map.cameraPosition;je!==void 0&&je.setValue(L,pt.setFromMatrixPosition(M.matrixWorld)),It.logarithmicDepthBuffer&&xe.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xe.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,tn=!0,Fs=!0)}if(U.isSkinnedMesh){xe.setOptional(L,U,"bindMatrix"),xe.setOptional(L,U,"bindMatrixInverse");const We=U.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),xe.setValue(L,"boneTexture",We.boneTexture,zt))}U.isBatchedMesh&&(xe.setOptional(L,U,"batchingTexture"),xe.setValue(L,"batchingTexture",U._matricesTexture,zt),xe.setOptional(L,U,"batchingIdTexture"),xe.setValue(L,"batchingIdTexture",U._indirectTexture,zt),xe.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&xe.setValue(L,"batchingColorTexture",U._colorsTexture,zt));const on=z.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&tt.update(U,z,Qe),(tn||wt.receiveShadow!==U.receiveShadow)&&(wt.receiveShadow=U.receiveShadow,xe.setValue(L,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(rn.envMap.value=dt,rn.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(rn.envMapIntensity.value=N.environmentIntensity),tn&&(xe.setValue(L,"toneMappingExposure",y.toneMappingExposure),wt.needsLights&&wf(rn,Fs),Q&&G.fog===!0&&j.refreshFogUniforms(rn,Q),j.refreshMaterialUniforms(rn,G,W,X,f.state.transmissionRenderTarget[M.id]),oo.upload(L,Ic(wt),rn,zt)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(oo.upload(L,Ic(wt),rn,zt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xe.setValue(L,"center",U.center),xe.setValue(L,"modelViewMatrix",U.modelViewMatrix),xe.setValue(L,"normalMatrix",U.normalMatrix),xe.setValue(L,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const We=G.uniformsGroups;for(let je=0,Yo=We.length;je<Yo;je++){const Ti=We[je];Bt.update(Ti,Qe),Bt.bind(Ti,Qe)}}return Qe}function wf(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Rf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,N,z){const G=xt.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),xt.get(M.texture).__webglTexture=N,xt.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const z=xt.get(M);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0};const Pf=L.createFramebuffer();this.setRenderTarget=function(M,N=0,z=0){P=M,R=N,T=z;let G=!0,U=null,Q=!1,ut=!1;if(M){const dt=xt.get(M);if(dt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(dt.__webglFramebuffer===void 0)zt.setupRenderTarget(M);else if(dt.__hasExternalTextures)zt.rebindTextures(M,xt.get(M.texture).__webglTexture,xt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ct=M.depthTexture;if(dt.__boundDepthTexture!==Ct){if(Ct!==null&&xt.has(Ct)&&(M.width!==Ct.image.width||M.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(M)}}const Pt=M.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ut=!0);const Ot=xt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ot[N])?U=Ot[N][z]:U=Ot[N],Q=!0):M.samples>0&&zt.useMultisampledRTT(M)===!1?U=xt.get(M).__webglMultisampledFramebuffer:Array.isArray(Ot)?U=Ot[z]:U=Ot,A.copy(M.viewport),O.copy(M.scissor),H=M.scissorTest}else A.copy(Et).multiplyScalar(W).floor(),O.copy(Ft).multiplyScalar(W).floor(),H=te;if(z!==0&&(U=Pf),_t.bindFramebuffer(L.FRAMEBUFFER,U)&&G&&_t.drawBuffers(M,U),_t.viewport(A),_t.scissor(O),_t.setScissorTest(H),Q){const dt=xt.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt.__webglTexture,z)}else if(ut){const dt=N;for(let Pt=0;Pt<M.textures.length;Pt++){const Ot=xt.get(M.textures[Pt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Pt,Ot.__webglTexture,z,dt)}}else if(M!==null&&z!==0){const dt=xt.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,dt.__webglTexture,z)}v=-1},this.readRenderTargetPixels=function(M,N,z,G,U,Q,ut,mt=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=xt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ut!==void 0&&(dt=dt[ut]),dt){_t.bindFramebuffer(L.FRAMEBUFFER,dt);try{const Pt=M.textures[mt],Ot=Pt.format,Ct=Pt.type;if(!It.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-G&&z>=0&&z<=M.height-U&&(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+mt),L.readPixels(N,z,G,U,Mt.convert(Ot),Mt.convert(Ct),Q))}finally{const Pt=P!==null?xt.get(P).__webglFramebuffer:null;_t.bindFramebuffer(L.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(M,N,z,G,U,Q,ut,mt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=xt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ut!==void 0&&(dt=dt[ut]),dt)if(N>=0&&N<=M.width-G&&z>=0&&z<=M.height-U){_t.bindFramebuffer(L.FRAMEBUFFER,dt);const Pt=M.textures[mt],Ot=Pt.format,Ct=Pt.type;if(!It.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Xt),L.bufferData(L.PIXEL_PACK_BUFFER,Q.byteLength,L.STREAM_READ),M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+mt),L.readPixels(N,z,G,U,Mt.convert(Ot),Mt.convert(Ct),0);const ee=P!==null?xt.get(P).__webglFramebuffer:null;_t.bindFramebuffer(L.FRAMEBUFFER,ee);const ye=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await bp(L,ye,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Xt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Q),L.deleteBuffer(Xt),L.deleteSync(ye),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,z=0){const G=Math.pow(2,-z),U=Math.floor(M.image.width*G),Q=Math.floor(M.image.height*G),ut=N!==null?N.x:0,mt=N!==null?N.y:0;zt.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,ut,mt,U,Q),_t.unbindTexture()};const Lf=L.createFramebuffer(),Df=L.createFramebuffer();this.copyTextureToTexture=function(M,N,z=null,G=null,U=0,Q=null){Q===null&&(U!==0?(ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=U,U=0):Q=0);let ut,mt,dt,Pt,Ot,Ct,Xt,ee,ye;const pe=M.isCompressedTexture?M.mipmaps[Q]:M.image;if(z!==null)ut=z.max.x-z.min.x,mt=z.max.y-z.min.y,dt=z.isBox3?z.max.z-z.min.z:1,Pt=z.min.x,Ot=z.min.y,Ct=z.isBox3?z.min.z:0;else{const on=Math.pow(2,-U);ut=Math.floor(pe.width*on),mt=Math.floor(pe.height*on),M.isDataArrayTexture?dt=pe.depth:M.isData3DTexture?dt=Math.floor(pe.depth*on):dt=1,Pt=0,Ot=0,Ct=0}G!==null?(Xt=G.x,ee=G.y,ye=G.z):(Xt=0,ee=0,ye=0);const le=Mt.convert(N.format),wt=Mt.convert(N.type);let _e;N.isData3DTexture?(zt.setTexture3D(N,0),_e=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(zt.setTexture2DArray(N,0),_e=L.TEXTURE_2D_ARRAY):(zt.setTexture2D(N,0),_e=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const Kt=L.getParameter(L.UNPACK_ROW_LENGTH),Qe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ki=L.getParameter(L.UNPACK_SKIP_PIXELS),tn=L.getParameter(L.UNPACK_SKIP_ROWS),Fs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,pe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Pt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ot),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ct);const xe=M.isDataArrayTexture||M.isData3DTexture,rn=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const on=xt.get(M),We=xt.get(N),je=xt.get(on.__renderTarget),Yo=xt.get(We.__renderTarget);_t.bindFramebuffer(L.READ_FRAMEBUFFER,je.__webglFramebuffer),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,Yo.__webglFramebuffer);for(let Ti=0;Ti<dt;Ti++)xe&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xt.get(M).__webglTexture,U,Ct+Ti),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xt.get(N).__webglTexture,Q,ye+Ti)),L.blitFramebuffer(Pt,Ot,ut,mt,Xt,ee,ut,mt,L.DEPTH_BUFFER_BIT,L.NEAREST);_t.bindFramebuffer(L.READ_FRAMEBUFFER,null),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(U!==0||M.isRenderTargetTexture||xt.has(M)){const on=xt.get(M),We=xt.get(N);_t.bindFramebuffer(L.READ_FRAMEBUFFER,Lf),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,Df);for(let je=0;je<dt;je++)xe?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,on.__webglTexture,U,Ct+je):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,on.__webglTexture,U),rn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,We.__webglTexture,Q,ye+je):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,We.__webglTexture,Q),U!==0?L.blitFramebuffer(Pt,Ot,ut,mt,Xt,ee,ut,mt,L.COLOR_BUFFER_BIT,L.NEAREST):rn?L.copyTexSubImage3D(_e,Q,Xt,ee,ye+je,Pt,Ot,ut,mt):L.copyTexSubImage2D(_e,Q,Xt,ee,Pt,Ot,ut,mt);_t.bindFramebuffer(L.READ_FRAMEBUFFER,null),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else rn?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(_e,Q,Xt,ee,ye,ut,mt,dt,le,wt,pe.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(_e,Q,Xt,ee,ye,ut,mt,dt,le,pe.data):L.texSubImage3D(_e,Q,Xt,ee,ye,ut,mt,dt,le,wt,pe):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Q,Xt,ee,ut,mt,le,wt,pe.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Q,Xt,ee,pe.width,pe.height,le,pe.data):L.texSubImage2D(L.TEXTURE_2D,Q,Xt,ee,ut,mt,le,wt,pe);L.pixelStorei(L.UNPACK_ROW_LENGTH,Kt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ki),L.pixelStorei(L.UNPACK_SKIP_ROWS,tn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Fs),Q===0&&N.generateMipmaps&&L.generateMipmap(_e),_t.unbindTexture()},this.initRenderTarget=function(M){xt.get(M).__webglFramebuffer===void 0&&zt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?zt.setTextureCube(M,0):M.isData3DTexture?zt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?zt.setTexture2DArray(M,0):zt.setTexture2D(M,0),_t.unbindTexture()},this.resetState=function(){R=0,T=0,P=null,_t.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const Wu={type:"change"},ic={type:"start"},id={type:"end"},Jr=new Ro,Xu=new $n,Kx=Math.cos(70*Sp.DEG2RAD),Pe=new D,Ze=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wa=1e-6;class jx extends hm{constructor(t,e=null){super(t,e),this.state=re.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ys.ROTATE,MIDDLE:ys.DOLLY,RIGHT:ys.PAN},this.touches={ONE:gs.ROTATE,TWO:gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Qn,this._lastTargetPosition=new D,this._quat=new Qn().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xu,this._sphericalDelta=new xu,this._scale=1,this._panOffset=new D,this._rotateStart=new At,this._rotateEnd=new At,this._rotateDelta=new At,this._panStart=new At,this._panEnd=new At,this._panDelta=new At,this._dollyStart=new At,this._dollyEnd=new At,this._dollyDelta=new At,this._dollyDirection=new D,this._mouse=new At,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Jx.bind(this),this._onPointerDown=Zx.bind(this),this._onPointerUp=Qx.bind(this),this._onContextMenu=ov.bind(this),this._onMouseWheel=nv.bind(this),this._onKeyDown=iv.bind(this),this._onTouchStart=sv.bind(this),this._onTouchMove=rv.bind(this),this._onMouseDown=tv.bind(this),this._onMouseMove=ev.bind(this),this._interceptControlDown=av.bind(this),this._interceptControlUp=lv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Wu),this.update(),this.state=re.NONE}update(t=null){const e=this.object.position;Pe.copy(e).sub(this.target),Pe.applyQuaternion(this._quat),this._spherical.setFromVector3(Pe),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ze:i>Math.PI&&(i-=Ze),s<-Math.PI?s+=Ze:s>Math.PI&&(s-=Ze),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Pe.setFromSpherical(this._spherical),Pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Pe.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Jr.origin.copy(this.object.position),Jr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Jr.direction))<Kx?this.object.lookAt(this.target):(Xu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Jr.intersectPlane(Xu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>wa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wa||this._lastTargetPosition.distanceToSquared(this.target)>wa?(this.dispatchEvent(Wu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ze/60*this.autoRotateSpeed*t:Ze/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Pe.setFromMatrixColumn(e,0),Pe.multiplyScalar(-t),this._panOffset.add(Pe)}_panUp(t,e){this.screenSpacePanning===!0?Pe.setFromMatrixColumn(e,1):(Pe.setFromMatrixColumn(e,0),Pe.crossVectors(this.object.up,Pe)),Pe.multiplyScalar(t),this._panOffset.add(Pe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Pe.copy(s).sub(this.target);let r=Pe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new At,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Zx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Jx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Qx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(id),this.state=re.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function tv(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ys.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=re.DOLLY;break;case ys.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=re.ROTATE}break;case ys.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(ic)}function ev(n){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function nv(n){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(n.preventDefault(),this.dispatchEvent(ic),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(id))}function iv(n){this.enabled!==!1&&this._handleKeyDown(n)}function sv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case gs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=re.TOUCH_ROTATE;break;case gs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case gs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=re.TOUCH_DOLLY_PAN;break;case gs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(ic)}function rv(n){switch(this._trackPointer(n),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=re.NONE}}function ov(n){this.enabled!==!1&&n.preventDefault()}function av(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function lv(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const cv=[[1,"H","Hydrogen",1.008,"nonmetal",2.2,1,1,null,31,"FFFFFF"],[2,"He","Helium",4.003,"noble",null,0,0,null,28,"D9FFFF"],[3,"Li","Lithium",6.94,"alkali",.98,1,0,[1],128,"CC80FF"],[4,"Be","Beryllium",9.012,"alkaline",1.57,4,0,[2],96,"C2FF00"],[5,"B","Boron",10.81,"metalloid",2.04,4,3,null,84,"FFB5B5"],[6,"C","Carbon",12.011,"nonmetal",2.55,4,4,null,76,"909090"],[7,"N","Nitrogen",14.007,"nonmetal",3.04,4,3,null,71,"3050F8"],[8,"O","Oxygen",15.999,"nonmetal",3.44,3,2,null,66,"FF0D0D"],[9,"F","Fluorine",18.998,"halogen",3.98,1,1,null,57,"90E050"],[10,"Ne","Neon",20.18,"noble",null,0,0,null,58,"B3E3F5"],[11,"Na","Sodium",22.99,"alkali",.93,1,0,[1],166,"AB5CF2"],[12,"Mg","Magnesium",24.305,"alkaline",1.31,2,0,[2],141,"8AFF00"],[13,"Al","Aluminium",26.982,"post",1.61,4,0,[3],121,"BFA6A6"],[14,"Si","Silicon",28.085,"metalloid",1.9,6,4,null,111,"F0C8A0"],[15,"P","Phosphorus",30.974,"nonmetal",2.19,6,3,null,107,"FF8000"],[16,"S","Sulfur",32.06,"nonmetal",2.58,6,2,null,105,"FFFF30"],[17,"Cl","Chlorine",35.45,"halogen",3.16,7,1,null,102,"1FF01F"],[18,"Ar","Argon",39.948,"noble",null,0,0,null,106,"80D1E3"],[19,"K","Potassium",39.098,"alkali",.82,1,0,[1],203,"8F40D4"],[20,"Ca","Calcium",40.078,"alkaline",1,2,0,[2],176,"3DFF00"],[21,"Sc","Scandium",44.956,"transition",1.36,3,0,[3],170,"E6E6E6"],[22,"Ti","Titanium",47.867,"transition",1.54,4,0,[4,3],160,"BFC2C7"],[23,"V","Vanadium",50.942,"transition",1.63,5,0,[5,4,3],153,"A6A6AB"],[24,"Cr","Chromium",51.996,"transition",1.66,6,0,[3,6],139,"8A99C7"],[25,"Mn","Manganese",54.938,"transition",1.55,7,0,[2,7,4],145,"9C7AC7"],[26,"Fe","Iron",55.845,"transition",1.83,6,0,[2,3],140,"E06633"],[27,"Co","Cobalt",58.933,"transition",1.88,5,0,[2,3],126,"F090A0"],[28,"Ni","Nickel",58.693,"transition",1.91,4,0,[2,3],124,"50D050"],[29,"Cu","Copper",63.546,"transition",1.9,4,0,[2,1],132,"C88033"],[30,"Zn","Zinc",65.38,"transition",1.65,2,0,[2],122,"7D80B0"],[31,"Ga","Gallium",69.723,"post",1.81,4,0,[3],122,"C28F8F"],[32,"Ge","Germanium",72.63,"metalloid",2.01,6,4,null,120,"668F8F"],[33,"As","Arsenic",74.922,"metalloid",2.18,6,3,null,119,"BD80E3"],[34,"Se","Selenium",78.971,"nonmetal",2.55,6,2,null,120,"FFA100"],[35,"Br","Bromine",79.904,"halogen",2.96,7,1,null,120,"A62929"],[36,"Kr","Krypton",83.798,"noble",3,2,0,null,116,"5CB8D1"],[37,"Rb","Rubidium",85.468,"alkali",.82,1,0,[1],220,"702EB0"],[38,"Sr","Strontium",87.62,"alkaline",.95,2,0,[2],195,"00FF00"],[39,"Y","Yttrium",88.906,"transition",1.22,3,0,[3],190,"94FFFF"],[40,"Zr","Zirconium",91.224,"transition",1.33,4,0,[4],175,"94E0E0"],[41,"Nb","Niobium",92.906,"transition",1.6,5,0,[5],164,"73C2C9"],[42,"Mo","Molybdenum",95.95,"transition",2.16,6,0,[6,4],154,"54B5B5"],[43,"Tc","Technetium",98,"transition",1.9,7,0,[7],147,"3B9E9E"],[44,"Ru","Ruthenium",101.07,"transition",2.2,8,0,[3,4],146,"248F8F"],[45,"Rh","Rhodium",102.91,"transition",2.28,6,0,[3],142,"0A7D8C"],[46,"Pd","Palladium",106.42,"transition",2.2,4,0,[2,4],139,"006985"],[47,"Ag","Silver",107.87,"transition",1.93,3,0,[1],145,"C0C0C0"],[48,"Cd","Cadmium",112.41,"transition",1.69,2,0,[2],144,"FFD98F"],[49,"In","Indium",114.82,"post",1.78,3,0,[3,1],142,"A67573"],[50,"Sn","Tin",118.71,"post",1.96,4,0,[4,2],139,"668080"],[51,"Sb","Antimony",121.76,"metalloid",2.05,6,3,null,139,"9E63B5"],[52,"Te","Tellurium",127.6,"metalloid",2.1,6,2,null,138,"D47A00"],[53,"I","Iodine",126.9,"halogen",2.66,7,1,null,139,"940094"],[54,"Xe","Xenon",131.29,"noble",2.6,6,0,null,140,"429EB0"],[55,"Cs","Caesium",132.91,"alkali",.79,1,0,[1],244,"57178F"],[56,"Ba","Barium",137.33,"alkaline",.89,2,0,[2],215,"00C900"],[57,"La","Lanthanum",138.91,"lanthanide",1.1,3,0,[3],207,"70D4FF"],[58,"Ce","Cerium",140.12,"lanthanide",1.12,4,0,[3,4],204,"FFFC00"],[59,"Pr","Praseodymium",140.91,"lanthanide",1.13,4,0,[3],203,"D9FFC9"],[60,"Nd","Neodymium",144.24,"lanthanide",1.14,3,0,[3],201,"C7FFC7"],[61,"Pm","Promethium",145,"lanthanide",1.13,3,0,[3],199,"A3FFC7"],[62,"Sm","Samarium",150.36,"lanthanide",1.17,3,0,[3,2],198,"8FFFC7"],[63,"Eu","Europium",151.96,"lanthanide",1.2,3,0,[3,2],198,"61FFC7"],[64,"Gd","Gadolinium",157.25,"lanthanide",1.2,3,0,[3],196,"45FFC7"],[65,"Tb","Terbium",158.93,"lanthanide",1.2,4,0,[3,4],194,"30FFC7"],[66,"Dy","Dysprosium",162.5,"lanthanide",1.22,3,0,[3],192,"1FFFC9"],[67,"Ho","Holmium",164.93,"lanthanide",1.23,3,0,[3],192,"00FFC4"],[68,"Er","Erbium",167.26,"lanthanide",1.24,3,0,[3],189,"00E675"],[69,"Tm","Thulium",168.93,"lanthanide",1.25,3,0,[3,2],190,"00D452"],[70,"Yb","Ytterbium",173.05,"lanthanide",1.1,3,0,[3,2],187,"00BF38"],[71,"Lu","Lutetium",174.97,"lanthanide",1.27,3,0,[3],187,"00AB24"],[72,"Hf","Hafnium",178.49,"transition",1.3,4,0,[4],175,"4DC2FF"],[73,"Ta","Tantalum",180.95,"transition",1.5,5,0,[5],170,"4DA6FF"],[74,"W","Tungsten",183.84,"transition",2.36,6,0,[6,4],162,"2194D6"],[75,"Re","Rhenium",186.21,"transition",1.9,7,0,[7,4],159,"267DAB"],[76,"Os","Osmium",190.23,"transition",2.2,8,0,[8,4],159,"266696"],[77,"Ir","Iridium",192.22,"transition",2.2,6,0,[3,4],141,"175487"],[78,"Pt","Platinum",195.08,"transition",2.28,4,0,[4,2],136,"D0D0E0"],[79,"Au","Gold",196.97,"transition",2.54,5,0,[3,1],136,"FFD123"],[80,"Hg","Mercury",200.59,"transition",2,2,0,[2,1],132,"B8B8D0"],[81,"Tl","Thallium",204.38,"post",1.62,3,0,[1,3],145,"A6544D"],[82,"Pb","Lead",207.2,"post",2.33,4,0,[2,4],146,"575961"],[83,"Bi","Bismuth",208.98,"post",2.02,5,0,[3],148,"9E4B62"],[84,"Po","Polonium",209,"post",2,6,2,[4,2],140,"AB0C00"],[85,"At","Astatine",210,"halogen",2.2,7,1,null,150,"754F45"],[86,"Rn","Radon",222,"noble",2.2,2,0,null,150,"428296"],[87,"Fr","Francium",223,"alkali",.7,1,0,[1],260,"420066"],[88,"Ra","Radium",226,"alkaline",.9,2,0,[2],221,"007D00"],[89,"Ac","Actinium",227,"actinide",1.1,3,0,[3],215,"00ABFF"],[90,"Th","Thorium",232.04,"actinide",1.3,4,0,[4],206,"008AFF"],[91,"Pa","Protactinium",231.04,"actinide",1.5,5,0,[5],200,"00A1FF"],[92,"U","Uranium",238.03,"actinide",1.38,6,0,[6,4],196,"008FFF"],[93,"Np","Neptunium",237,"actinide",1.36,6,0,[5,4],190,"0080FF"],[94,"Pu","Plutonium",244,"actinide",1.28,6,0,[4,6],187,"006BFF"],[95,"Am","Americium",243,"actinide",1.13,6,0,[3,2],180,"545CF2"],[96,"Cm","Curium",247,"actinide",1.28,4,0,[3],169,"785CE3"],[97,"Bk","Berkelium",247,"actinide",1.3,4,0,[3,4],170,"8A4FE3"],[98,"Cf","Californium",251,"actinide",1.3,4,0,[3],190,"A136DA"],[99,"Es","Einsteinium",252,"actinide",1.3,3,0,[3],190,"B31BDA"],[100,"Fm","Fermium",257,"actinide",1.3,3,0,[3],190,"B31BBA"],[101,"Md","Mendelevium",258,"actinide",1.3,3,0,[3],190,"B30DA6"],[102,"No","Nobelium",259,"actinide",1.3,3,0,[2,3],190,"E006A0"],[103,"Lr","Lawrencium",266,"actinide",1.3,3,0,[3],190,"FF00CC"],[104,"Rf","Rutherfordium",267,"transition",null,4,0,[4],160,"CC0080"],[105,"Db","Dubnium",268,"transition",null,5,0,[5],160,"D6004D"],[106,"Sg","Seaborgium",269,"transition",null,6,0,[6],160,"C20000"],[107,"Bh","Bohrium",270,"transition",null,7,0,[7],160,"B60000"],[108,"Hs","Hassium",269,"transition",null,8,0,[8],160,"9E0000"],[109,"Mt","Meitnerium",278,"transition",null,6,0,[6],160,"820000"],[110,"Ds","Darmstadtium",281,"transition",null,6,0,[6],160,"75007D"],[111,"Rg","Roentgenium",282,"transition",null,6,0,[6],160,"660054"],[112,"Cn","Copernicium",285,"transition",null,2,0,[2],160,"5C004A"],[113,"Nh","Nihonium",286,"post",null,3,0,[1],170,"510A44"],[114,"Fl","Flerovium",289,"post",null,4,0,[2],180,"460D3B"],[115,"Mc","Moscovium",290,"post",null,3,0,[1,3],180,"3D1140"],[116,"Lv","Livermorium",293,"post",null,4,0,[2],180,"341244"],[117,"Ts","Tennessine",294,"halogen",null,3,1,null,180,"2A0B29"],[118,"Og","Oganesson",294,"noble",null,0,0,null,180,"1B0419"]],Oo=cv.map(([n,t,e,i,s,r,o,a,c,l,u])=>({z:n,sym:t,name:e,mass:i,cat:s,en:r,maxBonds:o,anionCharge:a,charges:c,radius:l,color:"#"+u,valenceElectrons:uv(n)}));function uv(n){if(n===1)return 1;if(n===2)return 2;const t={3:1,4:2,5:3,6:4,7:5,8:6,9:7,10:8,11:1,12:2,13:3,14:4,15:5,16:6,17:7,18:8};if(t[n])return t[n];const e=sd(n);return e>=13&&e<=18?e-10:0}function sd(n){return n===1?1:n===2?18:n>=3&&n<=4?n-2:n>=5&&n<=10?n+8:n>=11&&n<=12?n-10:n>=13&&n<=18?n:n>=19&&n<=20||n>=21&&n<=30||n>=31&&n<=36?n-18:n>=37&&n<=38||n>=39&&n<=48||n>=49&&n<=54?n-36:n>=55&&n<=56?n-54:n>=72&&n<=80||n>=81&&n<=86?n-68:n>=87&&n<=88?n-86:n>=104&&n<=112||n>=113&&n<=118?n-100:3}function hv(n){return n<=2?1:n<=10?2:n<=18?3:n<=36?4:n<=54?5:n<=86?6:7}function dv(n){if(n>=57&&n<=71)return{col:n-57+3,row:9};if(n>=89&&n<=103)return{col:n-89+3,row:10};const t=hv(n);return{col:sd(n),row:t}}const fv={alkali:"#ff8a80",alkaline:"#ffb74d",transition:"#ffd54f",post:"#aed581",metalloid:"#4db6ac",nonmetal:"#64b5f6",halogen:"#ba68c8",noble:"#f06292",lanthanide:"#f48fb1",actinide:"#ffab91",exotic:"#e040fb"},rd=n=>["alkali","alkaline","transition","post","lanthanide","actinide"].includes(n),ue=n=>rd(n.cat),pv=new Set([36,54,86]),qu=n=>n.cat==="noble"&&!pv.has(n.z),$u=n=>n.sym==="F"||n.sym==="O";function Se(n){return Oo.find(t=>t.sym===n)}function Jn(n,t,e){return[...t.values()].filter(i=>i.a===e||i.b===e)}function Es(n,t,e){return Jn(n,t,e).filter(i=>!i.ionic).reduce((i,s)=>i+s.order,0)}function fi(n,t,e){return Jn(n,t,e).filter(i=>i.ionic).reduce((i,s)=>i+s.order,0)}function go(n,t){return n.a===t?n.b:n.a}function hr(n,t,e){const i=n.valenceElectrons+e-t;return i<0||i%2!==0?"parity":n.z<=10&&t+i/2>4?"octet":null}function od(n,t,e){for(let i=e;i<=n.anionCharge;i++)if(!hr(n,t,i))return!0;return!1}function mv(n,t,e,i){const s=n.get(e),r=n.get(i);if(ue(s.el)||ue(r.el))return ue(s.el)&&ue(r.el)?{ok:!1,reason:{key:"chem.metalMetal"}}:{ok:!1,reason:{key:"chem.metalIonic"}};if(qu(s.el)||qu(r.el))return{ok:!1,reason:{key:"chem.nobleNoCompound"}};if(s.el.cat==="noble"&&!$u(r.el)||r.el.cat==="noble"&&!$u(s.el))return{ok:!1,reason:{key:"chem.nobleOnlyFO"}};const o=a=>a.el.maxBonds-Es(n,t,a.id);if(o(s)<=0)return{ok:!1,reason:{key:"chem.noCapacity",p:{sym:s.el.sym,max:s.el.maxBonds}}};if(o(r)<=0)return{ok:!1,reason:{key:"chem.noCapacity",p:{sym:r.el.sym,max:r.el.maxBonds}}};for(const a of[s,r]){if(ue(a.el))continue;const c=fi(n,t,a.id);if(!c)continue;const l=hr(a.el,Es(n,t,a.id)+1,c);if(l)return{ok:!1,reason:l==="octet"?{key:"chem.octet",p:{sym:a.el.sym}}:{key:"chem.anionClosedShare",p:{sym:a.el.sym,n:c,s:c>1?"s":""}}}}return{ok:!0,type:"covalent"}}function gv(n,t,e,i){const s=n.get(e),r=n.get(i),o=ue(s.el)?s:ue(r.el)?r:null,a=o?o===s?r:s:null;if(!o)return{ok:!1,reason:{key:"chem.ionicNeedMetal"}};if(a.el.cat==="noble")return{ok:!1,reason:{key:"chem.nobleNoCompound"}};const c=Math.max(...o.el.charges);if(fi(n,t,o.id)>=c)return{ok:!1,reason:{key:"chem.metalMax",p:{sym:o.el.sym,max:c}}};if(!a.el.anionCharge)return{ok:!1,reason:{key:"chem.noAnion",p:{sym:a.el.sym}}};if(fi(n,t,a.id)>=a.el.anionCharge)return{ok:!1,reason:{key:"chem.anionMax",p:{sym:a.el.sym,max:a.el.anionCharge}}};const l=Es(n,t,a.id),u=fi(n,t,a.id)+1;return od(a.el,l,u)?{ok:!0,type:"ionic"}:{ok:!1,reason:hr(a.el,l,u)==="octet"?{key:"chem.octet",p:{sym:a.el.sym}}:{key:"chem.noLewisSharing",p:{sym:a.el.sym,n:l,s:l===1?"":"s"}}}}function ad(n,t,e,i){if(e===i)return{ok:!1,reason:{key:"chem.selfBond"}};if(Jn(n,t,e).some(o=>go(o,e)===i))return{ok:!1,reason:{key:"chem.alreadyBonded"}};const s=mv(n,t,e,i);if(s.ok)return s;const r=gv(n,t,e,i);return r.ok?r:s.reason?.key&&!s.reason.key.startsWith("chem.metal")?s:r}const Yu=new Set(["F","Cl","Br","I","At"]),Ku=new Set(["Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr"]);function _v(n,t){if(Yu.has(n.sym)&&Yu.has(t.sym))return 1;if(n.sym==="O"&&t.sym==="O")return 2;const e=[n.sym,t.sym];return e.includes("O")&&e.includes("F")?1:Ku.has(n.sym)&&Ku.has(t.sym)?4:3}function ld(n,t,e){if(e.order>=4)return{ok:!1,reason:{key:e.ionic?"chem.ionicMax4":"chem.quadrupleMax"}};if(e.ionic){const s=n.get(e.a),r=n.get(e.b),o=ue(s.el)?s:r,a=o===s?r:s,c=Math.max(...o.el.charges);if(fi(n,t,o.id)+1>c)return{ok:!1,reason:{key:"chem.metalTransferMax",p:{sym:o.el.sym,max:c}}};if(fi(n,t,a.id)+1>a.el.anionCharge)return{ok:!1,reason:{key:"chem.anionAcceptMax",p:{sym:a.el.sym,max:a.el.anionCharge}}};const l=Es(n,t,a.id),u=fi(n,t,a.id)+1;return od(a.el,l,u)?{ok:!0}:{ok:!1,reason:hr(a.el,l,u)==="octet"?{key:"chem.octet",p:{sym:a.el.sym}}:{key:"chem.noLewisSharing",p:{sym:a.el.sym,n:l,s:l===1?"":"s"}}}}const i=_v(n.get(e.a).el,n.get(e.b).el);if(e.order+1>i){const s=n.get(e.a).el.sym,r=n.get(e.b).el.sym;return{ok:!1,reason:i===2?{key:"chem.pairCapTriple",p:{a:s,b:r}}:{key:"chem.pairCapSingle",p:{a:s,b:r}}}}for(const s of[e.a,e.b]){const r=n.get(s);if(Es(n,t,s)+1>r.el.maxBonds)return{ok:!1,reason:{key:"chem.capacityMax",p:{sym:r.el.sym,max:r.el.maxBonds}}};if(ue(r.el))continue;const o=fi(n,t,s);if(!o)continue;const a=hr(r.el,Es(n,t,s)+1,o);if(a==="parity")return{ok:!1,reason:{key:"chem.anionClosedShareMore",p:{sym:r.el.sym}}};if(a==="octet")return{ok:!1,reason:{key:"chem.octet",p:{sym:r.el.sym}}}}return{ok:!0}}function No(n,t){const e=[],i=new Set;for(const s of n.keys()){if(i.has(s))continue;const r={atoms:[],bonds:[]},o=[s];for(i.add(s);o.length;){const a=o.pop();r.atoms.push(a);for(const c of Jn(n,t,a)){r.bonds.push(c);const l=go(c,a);i.has(l)||(i.add(l),o.push(l))}}r.bonds=[...new Set(r.bonds)],e.push(r)}return e}function ki(n,t,e){return No(n,t).find(i=>i.atoms.includes(e))}function xv(n,t,e,i=null){const s=new Map,r=[];let o=0,a=0,c=0;for(const g of e){const _=n.get(g),m=Jn(n,t,g),f=m.filter(v=>!v.ionic).reduce((v,S)=>v+S.order,0),E=m.filter(v=>v.ionic).reduce((v,S)=>v+S.order,0),b=m.length>0,y=ue(_.el),w=_.el.valenceElectrons;let R=0,T=0,P=0;if(y)R=0,T=E;else if(b){o+=w,a+=f,c+=E;const v=Math.ceil(Math.max(0,w+E-f)/2);P=_.el.z<=10?Math.max(0,Math.min(4-f,v)):v}else if(R=Math.floor(w/2),T=0,i!=null&&e.length===1){const v=(w-i)/2,S=_.el.z<=10?4:6;if(!Number.isInteger(v)||v<0||v>S)return{feasible:!1,reason:{key:"chem.lewis.charge"},charge:i};R=v,T=i}s.set(g,{lp:R,fc:T,ionU:E,covSum:f,sigma:m.length,cap:P,isMetal:y,bonded:b}),!y&&b&&r.push({id:g,cap:P,V:w,covSum:f,ionU:E,heavy:_.el.z>10,carbon:_.el.z===6,of:_.el.sym==="O"||_.el.sym==="F"})}const l=g=>{r.forEach((_,m)=>{s.get(_.id).lp=g[m],s.get(_.id).fc=_.V-2*g[m]-_.covSum})},u=(g,_)=>{const m=g.V-2*_-g.covSum;let f=Math.abs(m)+.01*_;return(g.heavy||g.carbon)&&_>0&&(f+=3*_),m>0&&g.of&&(f+=3),f},h=g=>{const _=r.length,m=new Map,f=(E,b)=>{if(E===_)return b===0?{score:0,lps:[]}:null;const y=E*4096+b;if(m.has(y))return m.get(y);let w=null;for(let R=0;R<=Math.min(r[E].cap,b);R++){const T=f(E+1,b-R);if(!T)continue;const P=T.score+u(r[E],R);(!w||P<w.score)&&(w={score:P,lps:[R,...T.lps]})}return m.set(y,w),w};return f(0,g)};if(i!=null){if(r.length===0)return[...s.values()].reduce((f,E)=>f+E.fc,0)===i?{feasible:!0,per:s,charge:i}:{feasible:!1,reason:{key:"chem.lewis.charge"},charge:i};const g=o+c-a-i;if(g%2!==0)return{feasible:!1,reason:{key:"chem.lewis.radical"},charge:i};if(g<0)return{feasible:!1,reason:{key:"chem.lewis.electrons"},charge:i};const _=h(g/2);return _?(l(_.lps),{feasible:!0,per:s,charge:i}):{feasible:!1,reason:{key:"chem.lewis.charge"},charge:i}}const d=o+c-a;let p=null;for(let g=0;g<=12&&!(p&&Math.abs(p.charge)<g);g++)for(const _ of g===0?[1]:[1,-1]){const m=d-_*g;if(m<0||m%2!==0)continue;const f=h(m/2);if(!f)continue;const E=[f.score,m/2];(!p||E<p.key)&&(p={sol:f,charge:_*g,key:E})}return p?(l(p.sol.lps),{feasible:!0,per:s,charge:p.charge}):{feasible:!0,per:s,charge:0}}function vv(n,t,e,i=null){const s=xv(n,t,e.atoms,i),r=Mv(n,t,e.atoms,s.per),o=Sv(n,t,e.atoms);return{...s,formula:r,fingerprint:o}}const yv=new Set(["N"]);function Dl(n){const t=new Map;for(const l of n)t.set(l.sym,(t.get(l.sym)||0)+1);const e=[...t.keys()],i=l=>l+(t.get(l)>1?t.get(l):"");if(e.length===1)return i(e[0]);if(t.has("C")){let l=i("C");return t.has("H")&&(l+=i("H")),l+=e.filter(u=>u!=="C"&&u!=="H").sort().map(i).join(""),l}const s=t.get("H")||0,r=t.get("O")||0,o=e.filter(l=>l!=="H"&&l!=="O"),a=new Set(["P","S","N","Cl","Br","I","C"]);if(s>0&&r>0&&o.length===1&&a.has(o[0]))return i("H")+i(o[0])+i("O");if(s>0&&o.length===1&&yv.has(o[0]))return i(o[0])+(s>1?`H${s}`:"H");if(s>0&&o.length===1&&(o[0]==="Te"||o[0]==="Po"||o[0]==="At"))return(s>1?`H${s}`:"H")+i(o[0]);if(s===1&&r===1&&e.length===2)return"OH";const c=l=>Se(l)?.en??0;return[...e].sort((l,u)=>c(l)-c(u)||(l<u?-1:1)).map(i).join("")}function Mv(n,t,e,i=new Map){const s=new Set(e),r=new Map(e.map(p=>[p,p])),o=p=>{let g=p;for(;r.get(g)!==g;)g=r.get(g);for(;r.get(p)!==g;){const _=r.get(p);r.set(p,g),p=_}return g};for(const p of t.values())p.ionic||!s.has(p.a)||!s.has(p.b)||r.set(o(p.a),o(p.b));const a=[],c=new Map;for(const p of e){const g=o(p);c.has(g)||(c.set(g,[]),a.push(c.get(g))),c.get(g).push(p)}if(a.length===1)return Dl(e.map(p=>n.get(p).el));const l=new Map,u=new Map,h=[];for(const p of a){const g=Dl(p.map(m=>n.get(m).el)),_=p.reduce((m,f)=>m+(i.get(f)?.fc??0),0);_>0?l.set(g,(l.get(g)||0)+1):_<0?u.set(g,(u.get(g)||0)+1):h.push(g)}const d=p=>[...p.entries()].map(([g,_])=>_===1?g:(g.match(/[A-Z][a-z]?\d*/g)||[]).length>1&&(/\d$/.test(g)||/H/.test(g))?`(${g})${_}`:g+_).join("");return d(l)+h.join("")+d(u)}function _r(n,t){if(t===0)return n;const e=Math.abs(t),i=String(e===1?"":e)+(t>0?"+":"−"),s={"+":"⁺","-":"⁻","−":"⁻",0:"⁰",1:"¹",2:"²",3:"³",4:"⁴",5:"⁵",6:"⁶",7:"⁷",8:"⁸",9:"⁹"};return n+[...i].map(r=>s[r]||r).join("")}function Sv(n,t,e){const i=n.length;if(i===0)return"";const s=Array.from({length:i},()=>[]);for(const a of t){if(a[3])continue;const c=e.indexOf(a[0]),l=e.indexOf(a[1]);c>=0&&l>=0&&(s[c].push({to:l,order:a[2]||1}),s[l].push({to:c,order:a[2]||1}))}let r=n.map((a,c)=>`${e[c]||a}_${c}`);for(let a=0;a<3;a++)r=r.map((c,l)=>{const u=[c];for(const{to:h,order:d}of s[l].sort((p,g)=>p.to-g.to))u.push(`${r[h]}_${d}`);return u.join("|")});const o={};for(let a=0;a<i;a++){const l=`${e[a]||n[a]}:${r[a]}`;o[l]=(o[l]||0)+1}return Object.entries(o).sort(([a],[c])=>a.localeCompare(c)).map(([a,c])=>`${a}×${c}`).join(";")}const Ev="₀₁₂₃₄₅₆₇₈₉";function Ps(n){return[...n].map(t=>t>="0"&&t<="9"?Ev[+t]:t).join("")}function ju(n,t,e){const i=(n.radius+t.radius)/55;return e?i*1.18:i}function ti(n){return .28+n.radius/110}const St={add:(n,t)=>({x:n.x+t.x,y:n.y+t.y,z:n.z+t.z}),sub:(n,t)=>({x:n.x-t.x,y:n.y-t.y,z:n.z-t.z}),scale:(n,t)=>({x:n.x*t,y:n.y*t,z:n.z*t}),dot:(n,t)=>n.x*t.x+n.y*t.y+n.z*t.z,cross:(n,t)=>({x:n.y*t.z-n.z*t.y,y:n.z*t.x-n.x*t.z,z:n.x*t.y-n.y*t.x}),len:n=>Math.sqrt(n.x*n.x+n.y*n.y+n.z*n.z),norm(n){const t=this.len(n)||1;return this.scale(n,1/t)}};function Il(n,t,e=null,i=120){const s=[],r=Math.PI*(3-Math.sqrt(5));for(let o=0;o<n;o++){const a=1-2*o/Math.max(1,n-1),c=Math.sqrt(Math.max(0,1-a*a)),l=r*o;s.push({x:Math.cos(l)*c,y:a,z:Math.sin(l)*c})}e&&(s[0]=St.norm(e));for(let o=0;o<i;o++){const a=s.map(()=>({x:0,y:0,z:0}));for(let c=0;c<n;c++)for(let l=c+1;l<n;l++){const u=(t[c]+t[l])/2,h=St.dot(s[c],s[l]),d=St.norm(St.sub(s[l],St.scale(s[c],h))),p=u*Math.max(.02,1-h*h);(!e||e!==c)&&(a[c]=St.add(a[c],St.scale(d,p))),(!e||e!==l)&&(a[l]=St.add(a[l],St.scale(St.neg(d),p)))}for(let c=0;c<n;c++)e!==c&&(s[c]=St.norm(St.add(s[c],St.scale(a[c],.25))))}return s}St.neg=n=>St.scale(n,-1);function bv(n,t){const e=n+t,i=[...Array(n).fill(1),...Array(t).fill(1.6)],s=Il(e,i),r=[];for(let o=0;o<e;o++){r.push([]);for(let a=0;a<e;a++)r[o].push(Math.acos(Math.max(-1,Math.min(1,St.dot(s[o],s[a])))))}return{M:r,k:e,isLp:o=>o>=n}}function Tv(n,t,e,i=null,s=new Map){const r=e;if(r.length===0)return new Map;const o=new Set(r),a=new Map,c=new Map;for(const T of r)a.set(T,Jn(n,t,T).map(P=>go(P,T)).filter(P=>o.has(P))),c.set(T,s.get(T)?.lp??0);let l=i&&r.includes(i)?i:null;if(!l){let T=-1;for(const P of r){const v=a.get(P).length;(v>T||v===T&&P<l)&&(T=v,l=P)}}const u=new Map;for(const T of r)u.set(T,{...n.get(T).pos});u.set(l,{...n.get(l).pos});const h=new Map,d=new Map,p=new Set([l]),g=[l];for(;g.length;){const T=g.shift(),P=u.get(T),v=a.get(T).filter(V=>!p.has(V)),S=d.get(T)||null,A=v.length+c.get(T);if(A===0)continue;const O=[...v.map(()=>1),...Array(c.get(T)).fill(1.6)],H=Il(A,O,S);v.forEach((V,k)=>{const B=H[k],X=n.get(T),W=n.get(V),it=ju(X.el,W.el,Jn(n,t,T).find(st=>go(st,T)===V)?.ionic);u.set(V,St.add(P,St.scale(B,it))),h.set(V,T),d.set(V,St.scale(B,-1)),p.add(V),g.push(V)})}const _=.55,m=new Map,f=new Map;for(const T of r){const P=c.get(T);if(m.set(T,[]),f.set(T,[]),P===0)continue;const v=a.get(T).length,S=d.get(T)||null,A=Il(v+P,[...Array(v).fill(1),...Array(P).fill(1.6)],S);for(let O=0;O<P;O++)m.get(T).push(St.add(u.get(T),St.scale(A[v+O],_)))}const E=new Map;for(const T of r){const P=a.get(T).length;E.set(T,bv(P,c.get(T)))}const b=new Map;for(const T of r)b.set(T,{x:0,y:0,z:0});const y=new Map;for(const T of r)y.set(T,ti(n.get(T).el));const w=[];for(const T of r)for(const P of Jn(n,t,T))if(o.has(P.a)&&o.has(P.b)&&P.a===T){const v=n.get(P.a),S=n.get(P.b);w.push({a:P.a,b:P.b,len:ju(v.el,S.el,P.ionic)})}const R=r.length>60?120:320;for(let T=0;T<R;T++){const P=new Map;for(const A of r)P.set(A,{x:0,y:0,z:0});const v=(A,O)=>{P.set(A,St.add(P.get(A),O))};for(const A of w){const O=u.get(A.a),H=u.get(A.b),V=St.sub(H,O),k=St.len(V)||.001,B=St.scale(St.norm(V),.5*(k-A.len));v(A.a,B),v(A.b,St.neg(B))}for(const A of r){const O=u.get(A),{M:H,k:V}=E.get(A),k=[];for(const B of a.get(A))k.push(u.get(B));for(const B of m.get(A))k.push(B);if(k.length===V)for(let B=0;B<V;B++)for(let X=B+1;X<V;X++){const W=St.norm(St.sub(k[B],O)),it=St.norm(St.sub(k[X],O));let st=St.dot(W,it);st=Math.max(-1,Math.min(1,st));const Et=Math.acos(st);let Ft=H[B][X]-Et;if(Ft=Math.max(-.5,Math.min(.5,Ft)),Math.abs(Ft)<.005)continue;const te=St.norm(St.sub(it,St.scale(W,st))),ae=St.norm(St.sub(W,St.scale(it,st))),qt=.12*Ft,$=a.get(A).length;B>=$?m.get(A)[B-$]=St.add(m.get(A)[B-$],St.scale(te,qt*2)):v(a.get(A)[B],St.scale(te,qt)),X>=$?m.get(A)[X-$]=St.add(m.get(A)[X-$],St.scale(ae,qt*2)):v(a.get(A)[X],St.scale(ae,qt))}}const S=[...r];for(let A=0;A<S.length;A++)for(let O=A+1;O<S.length;O++){const H=S[A],V=S[O];if(w.some(st=>st.a===H&&st.b===V||st.a===V&&st.b===H))continue;const k=u.get(H),B=u.get(V),X=(y.get(H)+y.get(V))*1.25,W=St.sub(B,k),it=St.len(W)||.001;if(it<X){const st=St.scale(St.norm(W),.35*(X-it)/X);v(H,St.neg(st)),v(V,st)}}for(const A of r){if(A===l){b.set(A,{x:0,y:0,z:0});continue}let O=St.scale(St.add(b.get(A),St.scale(P.get(A),.3)),.78);b.set(A,O),u.set(A,St.add(u.get(A),O))}for(const A of r){const O=u.get(A);m.set(A,m.get(A).map(H=>St.add(O,St.scale(St.norm(St.sub(H,O)),_))))}}return u}function Cv(n,t,e,i=[],s=new Set){const r=new Map;return e.forEach((o,a)=>{if(o.bonds.length===0)return;const c=[...s].find(u=>o.atoms.includes(u))||null,l=Tv(n,t,o.atoms,c,i[a]?.per??new Map);for(const[u,h]of l)r.set(u,h)}),r}const cd="mol3d.lang",Zu={en:{"btn.undo":"Undo","btn.delete":"Delete","btn.duplicate":"Duplicate","btn.clear":"Clear all","btn.fc":"Formal charges","btn.mayhem":"Mayhem","btn.tutorial":"Tutorial","btn.import":"Import","btn.quality":"Quality: {mode}","btn.theme":"Theme: {mode}","btn.quality.title":"Graphics quality — auto adapts when fps drops","btn.theme.title":"Switch between dark and light theme","btn.lang.title":"Switch language","btn.fc.title":"Show formal charge badges","btn.mayhem.title":"Toggle mayhem mode — exotic elements and chaotic reactions","btn.import.title":"Import custom elements from JSON file","pool.view.title":"Switch between list and periodic table","theme.dark":"Dark","theme.light":"Light","pool.title":"Element pool","pool.searchPh":"Search 118 elements...","pool.viewList":"List","pool.viewTable":"Table","el.title":"{name} · {cat} · max bonds {max}","pool.hint":"Click an element to place an atom. Metals bond ionically (electron transfer). Noble gases are inert — Kr, Xe and Rn react only with F or O.","ptable.ph":"La–Lu · Ac–Lr below","hint.html":"Click an element in the pool to place your first atom.<br />Drag atoms together to bond them — green ghost means a legal bond, red means forbidden.<br />Click a bond to cycle its order (1→2→3→2→1→delete).<br />Double-click two or more molecules to set up a reaction, then pick a condition.<br />Move around with WASD / arrow keys (Q/E = down/up) or the touch joystick.","rxn.title":"Reaction","rxn.count":"{n} molecule{s} selected","rxn.cancel":"Cancel","sel.title":"Selection","sel.empty":"Click an atom to inspect it.","sel.stats":"{cat} · mass {mass} · EN {en} · max bonds {max}","mol.title":"Molecule","mol.empty":"Build a molecule to analyze it.","mol.freeAtom":"Free atom — drag onto another to bond.","mol.unnamed":"Unnamed molecule","mol.stats":"{a} atoms · {b} bonds","mol.chargeLbl":"Ion charge","chg.minus.title":"Set ion charge one unit lower","chg.auto.title":"Automatic: minimize total formal charge","chg.plus.title":"Set ion charge one unit higher","list.title":"Molecules in scene","list.empty":"No molecules yet.","dex.disc":"Discoveries","dex.discEmpty":"Nothing discovered yet. React or build molecules to fill this log.","btn.saveDisc":"Save discoveries","dex.unknown":"Unknown","dex.notSaved":"Not saved yet","dex.chal":"Challenges","btn.reset":"Reset progress","tab.pool":"Pool","tab.info":"Info","tab.dex":"Dex","keys.hint":"WASD/arrows = move camera · drag = move / bond · click bond = cycle order · double-click molecule = select for reaction · Del = remove · Ctrl+Z = undo · Ctrl+D = duplicate","quality.auto":"Auto (adapts to fps)","quality.autoShort":"Auto","quality.low":"Low","quality.med":"Medium","quality.high":"High","cond.rt":"Room temperature","cond.heat":"Heat","cond.spark":"Spark","cond.electricity":"Electricity","cond.catalyst":"Catalyst","cond.uv":"UV light","status.noSelection":"Select an atom in a molecule first.","status.duplicated":"Molecule duplicated. Ctrl+Z to undo.","status.placed":"{name} placed. Drag it onto another atom to bond; double-click molecules to react.","status.cleared":"Scene cleared. Ctrl+Z to restore.","status.nothingUndo":"Nothing to undo.","status.undone":"Undone.","status.ionicBond":"Ionic bond {a}–{b}: electron transferred.","status.covBond":"Covalent bond {a}–{b} formed.","status.orderIonic":"Electron transfer set to {n}.","status.orderCov":"Bond order set to {n}.","status.selectFirst":"Select an atom in a molecule first.","status.chargeLimit":"Ion charge limited to ±6.","status.chargeSet":"Ion charge set to {v}.","status.chargeAuto":"Ion charge: automatic.","status.chalReset":"Challenge progress reset.","status.reactionCancelled":"Reaction cancelled.","status.noReaction":"No known reaction for this combination of molecules.","status.notEnough":"Not enough reactants — add {more} for a {cond} reaction.","status.nothingHappens":"Nothing happens under {cond}.","status.nothingHappensTry":"Nothing happens under {cond}. Try: {valid}.","status.sceneChanged":"Scene changed — the selection no longer matches a reaction.","status.reactionDone":"Reaction ({cond}): {eq}","status.mayhemEffect":"{effect} {eq}","status.selCleared":"Reaction selection cleared.","status.selRemoved":"Molecule removed from reaction selection.","status.selAdded":"Molecule added to reaction selection ({n}). Pick a condition below.","status.autoAdjusted":"Graphics auto-adjusted to {tier} ({fps} fps).","status.quality":"Graphics quality: {mode}","status.theme":"Theme: {mode}","status.lang":"Language: English","status.saveFail":"Could not save discoveries (storage unavailable).","toast.saved":"Saved {n} discovered molecule{s}.","toast.newDisc":"New discovery: {f}{name}","toast.challenge":"Challenge complete: {name}!","snap.upgradeTo":"Release to raise bond to order {n}","snap.ionic":"Release to transfer electrons (ionic bond)","snap.bond":"Release to bond","chem.metalMetal":"Metal–metal bonding is metallic, not molecular","chem.metalIonic":"Metals bond ionically here (electron transfer)","chem.nobleNoCompound":"Noble gas does not form compounds","chem.nobleOnlyFO":"Noble gases only bond with F or O","chem.noCapacity":"{sym} has no bonding capacity left (max {max})","chem.anionClosedShare":"{sym} is an anion — it accepted {n} electron{s} and its shell is closed, so it cannot share electrons","chem.ionicNeedMetal":"Ionic bonds need a metal","chem.metalMax":"{sym} has transferred its maximum electrons (max +{max})","chem.noAnion":"{sym} does not form anions","chem.anionMax":"{sym} has accepted its maximum electrons ({max})","chem.octet":"{sym} would exceed its octet (8 electrons)","chem.noLewisSharing":"{sym} cannot accept an electron while sharing {n} bond{s} — no valid Lewis structure","chem.selfBond":"An atom cannot bond to itself","chem.alreadyBonded":"Already bonded — click the bond to increase its order","chem.ionicMax3":"At most 3 electrons can transfer per bond","chem.ionicMax4":"At most 4 electrons can transfer per bond","chem.quadrupleMax":"Quadruple bond is the maximum","chem.metalTransferMax":"{sym} cannot transfer more than {max} electrons","chem.anionAcceptMax":"{sym} cannot accept more than {max} electrons","chem.pairCapTriple":"{a}–{b} bonds cannot form a triple bond","chem.pairCapSingle":"{a}–{b} bonds are limited to single bonds","chem.capacityMax":"{sym} would exceed its bonding capacity (max {max})","chem.anionClosedShareMore":"{sym} is an anion — its closed shell cannot share more electrons","chem.lewis.charge":"No valid Lewis structure for that charge.","chem.lewis.radical":"Odd electron count — a radical. Adjust the ion charge.","chem.lewis.electrons":"Not enough electrons for that charge.","chem.partialIonic":"Incomplete ionic transfer: {sym} still holds an unpaired electron. Click the ionic bond to raise its order and complete the electron transfer.","lang.select.title":"Choose your language","lang.select.subtitle":"Select your preferred language to continue","lang.en":"English","lang.vi":"Tiếng Việt","lang.continue":"Continue","tut.skip":"Skip","tut.prev":"Back","tut.next":"Next","tut.finish":"Get started!","tut.welcome.title":"Welcome to Molecule Builder 3D!","tut.welcome.body":"Build molecules, explore reactions, and discover chemistry in 3D. This quick tutorial will show you the basics.","tut.pool.title":"Element Pool","tut.pool.body":"All 118 elements are here. Click any element to place an atom in the scene. Use the search bar or switch to the periodic table view.","tut.bond.title":"Building Molecules","tut.bond.body":"Drag one atom onto another to form a bond. A green ghost means the bond is allowed, red means it's forbidden. Metals bond ionically (electron transfer), nonmetals bond covalently (sharing electrons).","tut.bondOrder.title":"Bond Orders","tut.bondOrder.body":"Click a bond to cycle its order: single → double → triple → quadruple → triple → double → single → delete. Shift+click to go backwards.","tut.info.title":"Info Panel","tut.info.body":"Click any atom to inspect it. This panel shows element properties, molecule analysis (name, formula, mass), and a list of all molecules in the scene.","tut.reaction.title":"Reactions","tut.reaction.body":"Double-click two or more molecules to select them for a reaction. Then pick a condition (room temperature, heat, spark, etc.) to see what happens!","tut.dex.title":"Discovery Dex","tut.dex.body":"Every molecule you build or discover through reactions is logged here. Complete challenges to test your chemistry knowledge!","tut.camera.title":"Camera Controls","tut.camera.body":"Move the camera with WASD or arrow keys. Q/E move up/down. On mobile, use the joystick. Drag empty space to orbit, scroll to zoom.","tut.ready.title":"You're ready!","tut.ready.body":"Start building! Try making water (H₂O), salt (NaCl), or something exotic. You can replay this tutorial anytime from the ☰ menu."},vi:{"btn.undo":"Hoàn tác","btn.delete":"Xóa","btn.duplicate":"Nhân đôi","btn.clear":"Xóa hết","btn.fc":"Điện tích hình thức","btn.mayhem":"Hỗn loạn","btn.tutorial":"Hướng dẫn","btn.import":"Nhập","btn.quality":"Chất lượng: {mode}","btn.theme":"Giao diện: {mode}","btn.quality.title":"Chất lượng đồ họa — tự điều chỉnh khi fps giảm","btn.theme.title":"Chuyển giữa giao diện tối và sáng","btn.lang.title":"Chuyển ngôn ngữ","btn.fc.title":"Hiện điện tích hình thức","btn.mayhem.title":"Chế độ hỗn loạn — nguyên tố kỳ lạ và phản ứng hỗn loạn","btn.import.title":"Nhập nguyên tố tùy chỉnh từ file JSON","pool.view.title":"Chuyển giữa danh sách và bảng tuần hoàn","theme.dark":"Tối","theme.light":"Sáng","pool.title":"Nguyên tố","pool.searchPh":"Tìm kiếm 118 nguyên tố...","pool.viewList":"Danh sách","pool.viewTable":"Bảng","el.title":"{name} · {cat} · tối đa {max} liên kết","pool.hint":"Bấm vào một nguyên tố để đặt nguyên tử. Kim loại liên kết ion (chuyển electron). Khí hiếm trơ — Kr, Xe và Rn chỉ phản ứng với F hoặc O.","ptable.ph":"La–Lu · Ac–Lr ở dưới","hint.html":"Bấm một nguyên tố trong kho để đặt nguyên tử đầu tiên.<br />Kéo các nguyên tử vào nhau để liên kết — bóng xanh nghĩa là liên kết hợp lệ, đỏ nghĩa là bị cấm.<br />Bấm vào liên kết để xoay bậc (1→2→3→2→1→xóa).<br />Nhấp đôi hai phân tử trở lên để tạo phản ứng, sau đó chọn điều kiện.<br />Di chuyển bằng WASD / phím mũi tên (Q/E = xuống/lên) hoặc joystick cảm ứng.","rxn.title":"Phản ứng","rxn.count":"{n} phân tử đã chọn","rxn.cancel":"Hủy","sel.title":"Lựa chọn","sel.empty":"Bấm vào một nguyên tử để xem chi tiết.","sel.stats":"{cat} · khối lượng {mass} · độ âm điện {en} · tối đa {max} liên kết","mol.title":"Phân tử","mol.empty":"Hãy tạo phân tử để phân tích.","mol.freeAtom":"Nguyên tử tự do — kéo vào nguyên tử khác để liên kết.","mol.unnamed":"Phân tử chưa đặt tên","mol.stats":"{a} nguyên tử · {b} liên kết","mol.chargeLbl":"Điện tích ion","chg.minus.title":"Giảm điện tích ion một đơn vị","chg.auto.title":"Tự động: cực tiểu hóa tổng điện tích hình thức","chg.plus.title":"Tăng điện tích ion một đơn vị","list.title":"Phân tử trong khung cảnh","list.empty":"Chưa có phân tử nào.","dex.disc":"Khám phá","dex.discEmpty":"Chưa có gì được khám phá. Hãy phản ứng hoặc tạo phân tử để lấp đầy sổ này.","btn.saveDisc":"Lưu khám phá","dex.unknown":"Không rõ","dex.notSaved":"Chưa lưu","dex.chal":"Thử thách","btn.reset":"Đặt lại tiến trình","tab.pool":"Nguyên tố","tab.info":"Thông tin","tab.dex":"Sổ tay","keys.hint":"WASD/phím mũi tên = di chuyển camera · kéo = di chuyển / liên kết · bấm liên kết = xoay bậc · nhấp đôi phân tử = chọn để phản ứng · Del = xóa · Ctrl+Z = hoàn tác · Ctrl+D = nhân đôi","quality.auto":"Tự động (điều chỉnh theo fps)","quality.autoShort":"Tự động","quality.low":"Thấp","quality.med":"Trung bình","quality.high":"Cao","cond.rt":"Nhiệt độ phòng","cond.heat":"Nhiệt","cond.spark":"Tia lửa điện","cond.electricity":"Dòng điện","cond.catalyst":"Chất xúc tác","cond.uv":"Ánh sáng UV","status.noSelection":"Hãy chọn một nguyên tử trong phân tử trước.","status.duplicated":"Đã nhân đôi phân tử. Ctrl+Z để hoàn tác.","status.placed":"Đã đặt {name}. Kéo vào nguyên tử khác để liên kết; nhấp đôi các phân tử để phản ứng.","status.cleared":"Đã xóa khung cảnh. Ctrl+Z để khôi phục.","status.nothingUndo":"Không có gì để hoàn tác.","status.undone":"Đã hoàn tác.","status.ionicBond":"Liên kết ion {a}–{b}: đã chuyển electron.","status.covBond":"Đã tạo liên kết cộng hóa trị {a}–{b}.","status.orderIonic":"Đã đặt mức chuyển electron thành {n}.","status.orderCov":"Đã đặt bậc liên kết thành {n}.","status.selectFirst":"Hãy chọn một nguyên tử trong phân tử trước.","status.chargeLimit":"Điện tích ion giới hạn trong ±6.","status.chargeSet":"Đã đặt điện tích ion thành {v}.","status.chargeAuto":"Điện tích ion: tự động.","status.chalReset":"Đã đặt lại tiến trình thử thách.","status.reactionCancelled":"Đã hủy phản ứng.","status.noReaction":"Không có phản ứng đã biết cho tổ hợp phân tử này.","status.notEnough":"Chưa đủ chất phản ứng — thêm {more} cho phản ứng {cond}.","status.nothingHappens":"Không có gì xảy ra với {cond}.","status.nothingHappensTry":"Không có gì xảy ra với {cond}. Thử: {valid}.","status.sceneChanged":"Khung cảnh đã thay đổi — lựa chọn không còn khớp phản ứng nào.","status.reactionDone":"Phản ứng ({cond}): {eq}","status.mayhemEffect":"{effect} {eq}","status.selCleared":"Đã xóa lựa chọn phản ứng.","status.selRemoved":"Đã bỏ phân tử khỏi lựa chọn phản ứng.","status.selAdded":"Đã thêm phân tử vào lựa chọn phản ứng ({n}). Chọn điều kiện bên dưới.","status.autoAdjusted":"Đã tự động điều chỉnh đồ họa xuống {tier} ({fps} fps).","status.quality":"Chất lượng đồ họa: {mode}","status.theme":"Giao diện: {mode}","status.lang":"Ngôn ngữ: Tiếng Việt","status.saveFail":"Không thể lưu khám phá (bộ nhớ không khả dụng).","toast.saved":"Đã lưu {n} phân tử đã khám phá.","toast.newDisc":"Khám phá mới: {f}{name}","toast.challenge":"Hoàn thành thử thách: {name}!","snap.upgradeTo":"Thả để nâng liên kết lên bậc {n}","snap.ionic":"Thả để chuyển electron (liên kết ion)","snap.bond":"Thả để liên kết","chem.metalMetal":"Liên kết kim loại–kim loại là liên kết kim loại, không phải phân tử","chem.metalIonic":"Kim loại liên kết ion tại đây (chuyển electron)","chem.nobleNoCompound":"Khí hiếm không tạo thành hợp chất","chem.nobleOnlyFO":"Khí hiếm chỉ liên kết với F hoặc O","chem.noCapacity":"{sym} không còn khả năng liên kết (tối đa {max})","chem.anionClosedShare":"{sym} là anion — đã nhận {n} electron nên lớp vỏ đã kín, không thể dùng chung electron","chem.ionicNeedMetal":"Liên kết ion cần kim loại","chem.metalMax":"{sym} đã chuyển toàn bộ electron tối đa (tối đa +{max})","chem.noAnion":"{sym} không tạo anion","chem.anionMax":"{sym} đã nhận đủ electron tối đa ({max})","chem.octet":"{sym} sẽ vượt bát tử (8 electron)","chem.noLewisSharing":"{sym} không thể nhận thêm electron khi đang dùng chung {n} liên kết — không có cấu trúc Lewis hợp lệ","chem.selfBond":"Nguyên tử không thể tự liên kết với chính nó","chem.alreadyBonded":"Đã liên kết — bấm vào liên kết để tăng bậc","chem.ionicMax3":"Mỗi liên kết chuyển tối đa 3 electron","chem.ionicMax4":"Mỗi liên kết chuyển tối đa 4 electron","chem.quadrupleMax":"Liên kết bốn là bậc tối đa","chem.metalTransferMax":"{sym} không thể chuyển nhiều hơn {max} electron","chem.anionAcceptMax":"{sym} không thể nhận nhiều hơn {max} electron","chem.pairCapTriple":"Liên kết {a}–{b} không thể tạo liên kết ba","chem.pairCapSingle":"Liên kết {a}–{b} chỉ giới hạn ở liên kết đơn","chem.capacityMax":"{sym} sẽ vượt quá khả năng liên kết (tối đa {max})","chem.anionClosedShareMore":"{sym} là anion — lớp vỏ kín không thể chia sẻ thêm electron","chem.lewis.charge":"Không có cấu trúc Lewis hợp lệ cho điện tích đó.","chem.lewis.radical":"Số electron lẻ — gốc tự do. Hãy điều chỉnh điện tích ion.","chem.lewis.electrons":"Không đủ electron cho điện tích đó.","chem.partialIonic":"Chuyển electron ion chưa hoàn tất: {sym} còn một electron chưa ghép đôi. Nhấp vào liên kết ion để tăng bậc và hoàn tất chuyển electron.","lang.select.title":"Chọn ngôn ngữ","lang.select.subtitle":"Chọn ngôn ngữ ưa thích để tiếp tục","lang.en":"English","lang.vi":"Tiếng Việt","lang.continue":"Tiếp tục","tut.skip":"Bỏ qua","tut.prev":"Quay lại","tut.next":"Tiếp","tut.finish":"Bắt đầu!","tut.welcome.title":"Chào mừng đến Molecule Builder 3D!","tut.welcome.body":"Xây dựng phân tử, khám phá phản ứng, và tìm hiểu hóa học trong 3D. Hướng dẫn nhanh này sẽ cho bạn biết những điều cơ bản.","tut.pool.title":"Kho nguyên tố","tut.pool.body":"Có đủ 118 nguyên tố ở đây. Bấm vào bất kỳ nguyên tố nào để đặt nguyên tử vào khung cảnh. Dùng thanh tìm kiếm hoặc chuyển sang bảng tuần hoàn.","tut.bond.title":"Tạo phân tử","tut.bond.body":"Kéo nguyên tử này vào nguyên tử khác để tạo liên kết. Bóng xanh nghĩa là liên kết hợp lệ, đỏ nghĩa là bị cấm. Kim loại liên kết ion (chuyển electron), phi kim liên kết cộng hóa trị (dùng chung electron).","tut.bondOrder.title":"Bậc liên kết","tut.bondOrder.body":"Bấm vào liên kết để xoay bậc: đơn → đôi → ba → bốn → ba → đôi → đơn → xóa. Shift+bấm để đi ngược lại.","tut.info.title":"Bảng thông tin","tut.info.body":"Bấm vào bất kỳ nguyên tử nào để xem chi tiết. Bảng này hiển thị tính chất nguyên tố, phân tích phân tử (tên, công thức, khối lượng), và danh sách tất cả phân tử trong khung cảnh.","tut.reaction.title":"Phản ứng","tut.reaction.body":"Nhấp đôi hai phân tử trở lên để chọn chúng cho phản ứng. Sau đó chọn điều kiện (nhiệt độ phòng, nhiệt, tia lửa điện, v.v.) để xem điều gì xảy ra!","tut.dex.title":"Sổ tay khám phá","tut.dex.body":"Mọi phân tử bạn tạo hoặc khám phá qua phản ứng đều được ghi lại ở đây. Hoàn thành các thử thách để kiểm tra kiến thức hóa học của bạn!","tut.camera.title":"Điều khiển camera","tut.camera.body":"Di chuyển camera bằng WASD hoặc phím mũi tên. Q/E di chuyển lên/xuống. Trên di động, dùng joystick. Kéo vùng trống để xoay, cuộn để thu phóng.","tut.ready.title":"Bạn đã sẵn sàng!","tut.ready.body":"Bắt đầu xây dựng! Thử tạo nước (H₂O), muối (NaCl), hoặc thứ gì đó kỳ lạ. Bạn có thể xem lại hướng dẫn này bất cứ lúc nào từ menu ☰."}},Av={1:"Hidro",2:"Heli",3:"Liti",4:"Beryli",5:"Bo",6:"Cacbon",7:"Nitơ",8:"Oxi",9:"Flo",10:"Neon",11:"Natri",12:"Magie",13:"Nhôm",14:"Silic",15:"Phốtpho",16:"Lưu huỳnh",17:"Clo",18:"Argon",19:"Kali",20:"Canxi",21:"Scandium",22:"Titan",23:"Vanadium",24:"Crom",25:"Mangan",26:"Sắt",27:"Coban",28:"Nikel",29:"Đồng",30:"Kẽm",31:"Gallium",32:"Germani",33:"Asen",34:"Selen",35:"Brôm",36:"Krypton",37:"Rubidium",38:"Strontium",39:"Yttrium",40:"Zirconium",41:"Niobi",42:"Molypden",43:"Techneti",44:"Rutheni",45:"Rhodi",46:"Paladi",47:"Bạc",48:"Cadmi",49:"Indi",50:"Thiếc",51:"Antimon",52:"Tellur",53:"Iot",54:"Xenon",55:"Caesi",56:"Bari",57:"Lanthan",58:"Ceri",59:"Praseodymi",60:"Neodymi",61:"Promethi",62:"Samari",63:"Europi",64:"Gadolini",65:"Terbi",66:"Dysprosi",67:"Holmi",68:"Erbi",69:"Thuli",70:"Ytterbi",71:"Luteti",72:"Hafni",73:"Tantali",74:"Vonfram",75:"Rheni",76:"Osmi",77:"Iridi",78:"Platin",79:"Vàng",80:"Thủy ngân",81:"Thali",82:"Chì",83:"Bismut",84:"Poloni",85:"Astatin",86:"Radon",87:"Franci",88:"Radium",89:"Actini",90:"Thori",91:"Protactini",92:"Urani",93:"Neptuni",94:"Plutoni",95:"Americi",96:"Curi",97:"Berkelium",98:"Californium",99:"Einsteinium",100:"Fermium",101:"Mendelevium",102:"Nobelium",103:"Lawrencium",104:"Rutherfordium",105:"Dubnium",106:"Seaborgium",107:"Bohrium",108:"Hassium",109:"Meitnerium",110:"Darmstadtium",111:"Roentgenium",112:"Copernicium",113:"Nihonium",114:"Flerovium",115:"Moscovium",116:"Livermorium",117:"Tennessine",118:"Oganesson"},wv={alkali:"Kim loại kiềm",alkaline:"Kim loại kiềm thổ",transition:"Kim loại chuyển tiếp",post:"Kim loại sau chuyển tiếp",metalloid:"Á kim",nonmetal:"Phi kim",halogen:"Halogen",noble:"Khí hiếm",lanthanide:"Lantanide",actinide:"Actinide",exotic:"Kỳ lạ"},Rv={alkali:"Alkali metal",alkaline:"Alkaline earth",transition:"Transition metal",post:"Post-transition metal",metalloid:"Metalloid",nonmetal:"Reactive nonmetal",halogen:"Halogen",noble:"Noble gas",lanthanide:"Lanthanide",actinide:"Actinide",exotic:"Exotic"};let Rn="en";function Pv(){try{const n=localStorage.getItem(cd);(n==="vi"||n==="en")&&(Rn=n)}catch{}document.documentElement.lang=Rn}function ud(){return Rn}function ne(){return Rn==="vi"}function Lv(){return Rn==="en"?"vi":"en"}function hd(n){Rn=n==="vi"?"vi":"en";try{localStorage.setItem(cd,Rn)}catch{}sc()}function nt(n,t){let e=Zu[Rn]?.[n]??Zu.en[n]??n;if(t)for(const[i,s]of Object.entries(t))e=e.replaceAll(`{${i}}`,String(s));return e}function Uo(n){return n?typeof n=="string"?n:nt(n.key,n.p):""}function Nn(n){if(Rn==="vi"){const t=Av[n.z];if(t)return t}return n.name}function dr(n){return(Rn==="vi"?wv[n]:Rv[n])||n}function sc(){document.documentElement.lang=Rn;for(const n of document.querySelectorAll("[data-i18n]"))n.textContent=nt(n.dataset.i18n);for(const n of document.querySelectorAll("[data-i18n-html]"))n.innerHTML=nt(n.dataset.i18nHtml);for(const n of document.querySelectorAll("[data-i18n-ph]"))n.placeholder=nt(n.dataset.i18nPh);for(const n of document.querySelectorAll("[data-i18n-title]"))n.title=nt(n.dataset.i18nTitle)}const Dv={H2O:"Water",CO2:"Carbon dioxide",CO:"Carbon monoxide",CH4:"Methane",NH3:"Ammonia",H2O2:"Hydrogen peroxide",SO2:"Sulfur dioxide",SO3:"Sulfur trioxide",NO:"Nitrogen monoxide",NO2:"Nitrogen dioxide",N2O:"Dinitrogen monoxide (laughing gas)",N2O3:"Dinitrogen trioxide",N2O4:"Dinitrogen tetroxide",N2O5:"Dinitrogen pentoxide",SF6:"Sulfur hexafluoride",PH3:"Phosphine",SiO2:"Silicon dioxide",C2H6:"Ethane",C2H4:"Ethene",C2H2:"Ethyne",C3H8:"Propane",C3H6:"Propene",C3H4:"Propyne",C4H10:"Butane",C5H12:"Pentane",C6H6:"Benzene",C6H12:"Cyclohexane",C6H14:"Hexane",C2H6O:"Ethanol (or dimethyl ether)",CH4O:"Methanol",CH2O:"Methanal (formaldehyde)",CHCl3:"Trichloromethane (chloroform)",CCl4:"Tetrachloromethane (carbon tetrachloride)",CS2:"Carbon disulfide",BF3:"Boron trifluoride",BCl3:"Boron trichloride",BH3:"Borane",NH4Cl:"Ammonium chloride",SiH4:"Silane",GeH4:"Germane",AsH3:"Arsine",H2S:"Hydrogen sulfide",HF:"Hydrogen fluoride",HBr:"Hydrogen bromide",HI:"Hydrogen iodide",HCl:"Hydrogen chloride",H2:"Hydrogen",N2:"Nitrogen",O2:"Dioxygen",O3:"Ozone",F2:"Difluorine",Cl2:"Dichlorine",Br2:"Dibromine",I2:"Diiodine",P4:"Tetraphosphorus",S8:"Cyclo-octasulfur",PCl3:"Phosphorus trichloride",PCl5:"Phosphorus pentachloride",XeF2:"Xenon difluoride",XeF4:"Xenon tetrafluoride",XeF6:"Xenon hexafluoride",XeO3:"Xenon trioxide",XeO4:"Xenon tetroxide",KrF2:"Krypton difluoride",N2H4:"Hydrazine",H2O2:"Hydrogen peroxide",NO2:"Nitrogen dioxide"},Iv={"OH-1":"Hydroxide","NH4+1":"Ammonium","H3O+1":"Hydronium","NO3-1":"Nitrate","NO2-1":"Nitrite","CO3-2":"Carbonate","HCO3-1":"Hydrogen carbonate","SO4-2":"Sulfate","SO3-2":"Sulfite","HSO4-1":"Hydrogen sulfate","PO4-3":"Phosphate","PO3-3":"Phosphite","ClO-1":"Hypochlorite","ClO2-1":"Chlorite","ClO3-1":"Chlorate","ClO4-1":"Perchlorate","BrO3-1":"Bromate","IO3-1":"Iodate","MnO4-1":"Permanganate","CrO4-2":"Chromate","Cr2O7-2":"Dichromate","CN-1":"Cyanide","O2-2":"Peroxide","C2O4-2":"Oxalate","CNS-1":"Thiocyanate"},Ju={sulfate:"sulfuric",sulfite:"sulfurous",phosphate:"phosphoric",phosphite:"phosphorous",cyanide:"hydrocyanic"},Ov=["mono","di","tri","tetra","penta","hexa","hepta","octa","nona","deca"],dd={O:"oxide",F:"fluoride",Cl:"chloride",Br:"bromide",I:"iodide",At:"astatide",S:"sulfide",Se:"selenide",Te:"telluride",N:"nitride",P:"phosphide",As:"arsenide",Sb:"antimonide",C:"carbide",Si:"silicide",B:"boride",Ge:"germanide",H:"hydride",Po:"polonide",Ts:"tennesside",Lv:"livermoride"},Nv=["","I","II","III","IV","V","VI","VII","VIII"],Uv={H2O:"Nước",CO2:"Cacbon dioxit",CO:"Cacbon monooxit",CH4:"Metan",NH3:"Amoniac",H2O2:"Hiđro peroxit",SO2:"Lưu huỳnh dioxit",SO3:"Lưu huỳnh trioxit",NO:"Nitơ monooxit",NO2:"Nitơ dioxit",N2O:"Đinitơ monooxit (khí cười)",N2O3:"Đinitơ trioxit",N2O4:"Đinitơ tetraoxit",N2O5:"Đinitơ pentaoxit",SF6:"Lưu huỳnh hexaflorua",PH3:"Photphin",SiO2:"Silic dioxit",C2H6:"Etan",C2H4:"Eten",C2H2:"Etin",C3H8:"Propan",C3H6:"Propen",C3H4:"Propin",C4H10:"Butan",C5H12:"Pentan",C6H6:"Benzên",C6H12:"Cyclohexan",C6H14:"Hexan",C2H6O:"Etanol (hoặc dimetyl ete)",CH4O:"Metanol",CH2O:"Methanal (fomanđehit)",CHCl3:"Triclorometan (cloroform)",CCl4:"Tetraclorometan (cacbon tetraclorua)",CS2:"Cacbon disunfua",BF3:"Bo triflorua",BCl3:"Bo triclorua",BH3:"Boran",NH4Cl:"Amoni clorua",SiH4:"Silan",GeH4:"German",AsH3:"Arsin",H2S:"Hiđro sunfua",HF:"Hiđro florua",HBr:"Hiđro bromua",HI:"Hiđro iodua",HCl:"Hiđro clorua",H2:"Hiđro",N2:"Nitơ",O2:"Đioxi",O3:"Ozôn",F2:"Điflo",Cl2:"Điclo",Br2:"Đibrom",I2:"Điiod",P4:"Tetraphotpho",S8:"Cyclo-octasunfua",PCl3:"Photpho triclorua",PCl5:"Photpho pentaclorua",XeF2:"Xenon diflorua",XeF4:"Xenon tetraflorua",XeF6:"Xenon hexaflorua",XeO3:"Xenon trioxit",XeO4:"Xenon tetraoxit",KrF2:"Krypton diflorua",N2H4:"Hiđrazin"},Fv={"OH-1":"Hidroxit","NH4+1":"Amoni","H3O+1":"Hidroni","NO3-1":"Nitrat","NO2-1":"Nitrit","CO3-2":"Cacbonat","HCO3-1":"Hiđrocacbonat","SO4-2":"Sunfat","SO3-2":"Sunfit","HSO4-1":"Hiđrosunfat","PO4-3":"Photphat","PO3-3":"Photphit","ClO-1":"Hypoclorit","ClO2-1":"Clorit","ClO3-1":"Clorat","ClO4-1":"Perclorat","BrO3-1":"Bromat","IO3-1":"Iodat","MnO4-1":"Permanaganat","CrO4-2":"Cromat","Cr2O7-2":"Đicromat","CN-1":"Xianua","O2-2":"Peroxit","C2O4-2":"Oxalat","CNS-1":"Thiocyanat"},fd={O:"oxit",F:"florua",Cl:"clorua",Br:"bromua",I:"iodua",At:"astatua",S:"sunfua",Se:"selenua",Te:"telurua",N:"nitrua",P:"photphua",As:"asenua",Sb:"antimonua",C:"cacbua",Si:"silicua",B:"borua",Ge:"germanua",H:"hiđrua",Po:"polonua",Ts:"tennessua",Lv:"livermorua"},Hv=["mono","đi","tri","tetra","penta","hexa","hepta","octa","nona","deca"],Bv=["meth","eth","prop","but","pent","hex","hept","oct","non","dec"],kv=["met","et","prop","but","pent","hex","hept","oct","non","dec"],zv={C:"cacbon",H:"hiđro",N:"nitơ",O:"oxi",S:"lưu huỳnh",P:"photpho",F:"flo",Cl:"clo",Br:"brôm",I:"iot",Se:"selen",Si:"silic",B:"bo",As:"asen",Te:"tellur"},Qu={sunfat:"sunfuric",sunfit:"sunfurơ",nitrat:"nitric",nitrit:"nitrơ",photphat:"photphoric",photphit:"photphơ",hypoclorit:"hypoclorơ",clorit:"clorơ",hiđrosunfat:"sunfuric",xianua:"xianhidric"};function th(n){return(ne()?Hv:Ov)[n-1]||`${n}`}function Vv(n){const t=n.toLowerCase();return Qu[t]?"axit "+Qu[t]:t.endsWith("at")?"axit "+t.replace(/at$/,"ic"):t.endsWith("it")?"axit "+t.replace(/it$/,"ơ"):t.endsWith("ua")?"axit "+t.replace(/ua$/,"hidric"):"axit "+t}function Gv(n){return zv[n]||n.toLowerCase()}function Ra(n,t,e){const i=ne(),s=i?Uv:Dv,r=i?Fv:Iv,o=tr(n);if(t===0&&s[o])return s[o];const a=`${o}${t>0?"+"+t:t}`;if(r[a])return r[a];const c=new Set(n.map(l=>l.el.sym));if(c.size===2&&c.has("C")&&c.has("H")){const l=n.filter(h=>h.el.sym==="C").length,u=n.filter(h=>h.el.sym==="H").length;if(l>=1&&l<=10){const h=(i?kv:Bv)[l-1];if(u===2*l+2)return Sn(h+(i?"an":"ane"));if(u===2*l)return e.some(d=>d.order===3)?Sn(h+(i?"in":"yne")):Sn(h+(i?"en":"ene"));if(u===2*l-2)return Sn(e.some(d=>d.order===3)?h+(i?"in":"yne"):h+(i?"ađien":"diene"))}}if(t===0){const l=n.filter(u=>u.el.sym==="H").length;if(l>0){const u=n.filter(p=>p.el.sym!=="H"),d=`${tr(u)}-${l}`;if(r[d]&&u.length>1){if(i)return Sn(Vv(r[d]));const p=r[d].toLowerCase();if(Ju[p])return Sn(Ju[p]+" acid");if(p.endsWith("ate"))return Sn(p.replace(/ate$/,"ic")+" acid");if(p.endsWith("ite"))return Sn(p.replace(/ite$/,"ous")+" acid");if(p.endsWith("ide"))return Sn("hydro"+p.replace(/ide$/,"ic")+" acid")}}}if(n.every(l=>!ue(l.el))&&new Set(n.map(l=>l.el.sym)).size===2){const l=new Map;for(const g of n)l.set(g.el.sym,(l.get(g.el.sym)||0)+1);const[u,h]=[...l.keys()].sort((g,_)=>eh(n,g)-eh(n,_)),d=[];d.push((l.get(u)===1&&u!=="C"?"":th(l.get(u)))+(i?Gv(u):Xv(u)));const p=i?fd[h]||h.toLowerCase()+"ua":dd[h]||h.toLowerCase()+"ide";return d.push(th(l.get(h))+p),Sn(d.join(" "))}return null}function Wv(n,t,e,i,s=null){if(!t.some(E=>E.ionic))return Ra(n,i,t);const o=t.filter(E=>!E.ionic),a=new Map(n.map(E=>[E.id,[]]));for(const E of o)a.get(E.a).push({other:E.b,order:E.order}),a.get(E.b).push({other:E.a,order:E.order});const c=[],l=new Set;for(const E of n){if(l.has(E.id))continue;const b=[],y=[E.id];for(l.add(E.id);y.length;){const w=y.pop();b.push(w);for(const{other:R}of a.get(w))l.has(R)||(l.add(R),y.push(R))}c.push(b)}const u=[],h=[];for(const E of c){const b=E.map(T=>n.find(P=>P.id===T)),y=o.filter(T=>E.includes(T.a)&&E.includes(T.b));let w=0;for(const T of b){if(s){w+=s.get(T.id)?.fc??0;continue}const P=t.filter(v=>v.ionic&&(v.a===T.id||v.b===T.id)).reduce((v,S)=>v+S.order,0);if(ue(T.el))w+=P;else{const v=y.filter(O=>O.a===T.id||O.b===T.id).reduce((O,H)=>O+H.order,0),S=T.el.valenceElectrons+P-v,A=Math.max(0,Math.floor(S/2));w+=T.el.valenceElectrons-2*A-v}}const R={atoms:b,bonds:y,charge:w};(w>0?u:h).push(R)}const d=[],p=new Map;for(const E of u)if(E.atoms.length===1&&ue(E.atoms[0].el)){const b=E.atoms[0].el,y=E.charge,w=b.charges&&b.charges.length>1?`(${Nv[y]||y})`:"",R="cat:"+b.sym+w;p.set(R,(p.get(R)||0)+1),d.push({key:R,name:Nn(b)+w})}else{const b=Ra(E.atoms,E.charge,E.bonds),y="cat:"+(b||tr(E.atoms)+E.charge);p.set(y,(p.get(y)||0)+1),d.push({key:y,name:b?b.toLowerCase():`ion ${tr(E.atoms)}`})}const g=new Map;for(const E of h){let b;if(E.atoms.length===1){const w=E.atoms[0].el;b=ne()?fd[w.sym]||w.name.toLowerCase()+"ua":dd[w.sym]||w.name.toLowerCase()+"ide"}else b=Ra(E.atoms,E.charge,E.bonds),b=b?b.toLowerCase():`ion ${tr(E.atoms)}`;const y="an:"+b;g.set(y,(g.get(y)||0)+1)}const _=[...p.entries()].map(([E])=>d.find(b=>b.key===E).name).join(" "),m=[...g.entries()].map(([E])=>E.slice(3)).join(" "),f=Sn(`${_} ${m}`.trim());return i!==0?`${f} (${ne()?"điện tích":"net charge"} ${i>0?"+":""}${i})`:f}function eh(n,t){return n.find(i=>i.el.sym===t).el.en??0}function Xv(n){return{C:"carbon",H:"hydrogen",N:"nitrogen",O:"oxygen",S:"sulfur",P:"phosphorus",F:"fluorine",Cl:"chlorine",Br:"bromine",I:"iodine",Se:"selenium",Si:"silicon",B:"boron",As:"arsenic",Te:"tellurium",H2:"hydrogen"}[n]||n.toLowerCase()}function Sn(n){return n.charAt(0).toUpperCase()+n.slice(1)}function tr(n){return Dl(n.map(t=>t.el))}function qv(n){const t=new Map,e=/([A-Z][a-z]?)(\d*)/g;let i;for(;(i=e.exec(n))!==null;){if(!i[1])continue;const s=i[2]?parseInt(i[2]):1;t.set(i[1],(t.get(i[1])||0)+s)}return t}function $v(n,t,e){const i=qv(n),s=[...i.keys()],r=s.some(u=>{const h=Se(u);return h&&ue(h)}),o=i.has("H"),a=i.has("O"),c=i.has("C"),l=i.has("N");if(s.length===1)return{key:"element",label:ne()?"Nguyên tố":"Element"};if(n==="H2O")return{key:"oxide",label:ne()?"Oxit":"Oxide"};if(c&&i.get("H")>0&&s.filter(u=>u!=="C"&&u!=="H").length===0){const u=i.get("C")||1,h=i.get("H")||0;return h===2*u+2?{key:"alkane",label:ne()?"Ankan":"Alkane"}:h===2*u?{key:"alkene",label:ne()?"Anken":"Alkene"}:h===2*u-2?{key:"alkyne",label:ne()?"Ankin":"Alkyne"}:{key:"organic",label:ne()?"Hữu cơ":"Organic"}}if(c&&!r){const u=i.get("C")||1,h=i.get("H")||0,d=i.get("O")||0,p=i.get("N")||0,g=s.filter(m=>m==="F"||m==="Cl"||m==="Br"||m==="I"),_=s.filter(m=>m!=="C"&&m!=="H"&&m!=="O"&&m!=="N"&&m!=="F"&&m!=="Cl"&&m!=="Br"&&m!=="I");if(a&&_.length===0){if(d===1&&h===2*u+2&&!l)return{key:"alcohol",label:ne()?"Ancol":"Alcohol"};if(d===1&&h===2*u&&!l)return u<3?{key:"aldehyde",label:ne()?"Anđehit":"Aldehyde"}:{key:"ketone",label:ne()?"Xeton":"Ketone"};if(d===2&&h===2*u&&!l)return{key:"carboxylicAcid",label:ne()?"Axit cacboxylic":"Carboxylic acid"}}if(l&&!a&&_.length===0&&p===1&&h===2*u+3)return{key:"amine",label:ne()?"Amin":"Amine"};if(g.length>0&&_.length===0&&!a&&!l)return{key:"haloalkane",label:ne()?"Dẫn xuất halogen":"Haloalkane"};if(!(a&&s.length===2))return{key:"organic",label:ne()?"Hữu cơ":"Organic"}}if(r&&a&&o)return{key:"base",label:ne()?"Bazơ":"Base"};if(o&&s.length>=2&&!r){const u=s.filter(h=>h!=="H");if(u.length===1&&(u[0]==="F"||u[0]==="Cl"||u[0]==="Br"||u[0]==="I"))return{key:"acid",label:ne()?"Axit":"Acid"};if(u.some(h=>h==="S"||h==="N"||h==="P"))return{key:"acid",label:ne()?"Axit":"Acid"}}if(a&&s.length===2){const u=s.find(d=>d!=="O"),h=Se(u);return h&&ue(h)?{key:"basicOxide",label:ne()?"Oxit bazơ":"Basic oxide"}:{key:"acidicOxide",label:ne()?"Oxit axit":"Acidic oxide"}}return a&&o&&!r?{key:"acid",label:ne()?"Axit":"Acid"}:r&&a&&!o?{key:"basicOxide",label:ne()?"Oxit bazơ":"Basic oxide"}:r?{key:"salt",label:ne()?"Muối":"Salt"}:s.length===2&&!r?{key:"binary",label:ne()?"Hợp chất nhị nguyên":"Binary compound"}:{key:"compound",label:ne()?"Hợp chất":"Compound"}}const Yv=[{tier:1,formula:"H2O",charge:0,name:"Water",vi:"Nước"},{tier:1,formula:"CO2",charge:0,name:"Carbon dioxide",vi:"Cacbon dioxit"},{tier:1,formula:"CH4",charge:0,name:"Methane",vi:"Metan"},{tier:1,formula:"NH3",charge:0,name:"Ammonia",vi:"Amoniac"},{tier:1,formula:"O2",charge:0,name:"Dioxygen",vi:"Đioxi"},{tier:1,formula:"N2",charge:0,name:"Dinitrogen",vi:"Nitơ"},{tier:1,formula:"NaCl",charge:0,name:"Sodium chloride",vi:"Natri clorua"},{tier:1,formula:"HCl",charge:0,name:"Hydrogen chloride",vi:"Hiđro clorua"},{tier:1,formula:"CO",charge:0,name:"Carbon monoxide",vi:"Cacbon monoxit"},{tier:1,formula:"H2",charge:0,name:"Dihydrogen",vi:"Hiđro"},{tier:2,formula:"C2H6",charge:0,name:"Ethane",vi:"Etan"},{tier:2,formula:"C2H4",charge:0,name:"Ethene",vi:"Eten"},{tier:2,formula:"C2H2",charge:0,name:"Ethyne",vi:"Etin"},{tier:2,formula:"H2O2",charge:0,name:"Hydrogen peroxide",vi:"Hiđro peroxit"},{tier:2,formula:"SO2",charge:0,name:"Sulfur dioxide",vi:"Lưu huỳnh dioxit"},{tier:2,formula:"MgO",charge:0,name:"Magnesium oxide",vi:"Magie oxit"},{tier:2,formula:"CaCl2",charge:0,name:"Calcium chloride",vi:"Canxi clorua"},{tier:2,formula:"NaOH",charge:0,name:"Sodium hydroxide",vi:"Natri hidroxit"},{tier:2,formula:"O3",charge:0,name:"Ozone",vi:"Ozon"},{tier:2,formula:"HCN",charge:0,name:"Hydrogen cyanide",vi:"Axit xianhiđric"},{tier:3,formula:"OH-1",charge:-1,name:"Hydroxide ion",vi:"Ion hidroxit"},{tier:3,formula:"NH4+1",charge:1,name:"Ammonium ion",vi:"Ion amoni"},{tier:3,formula:"H3O+1",charge:1,name:"Hydronium ion",vi:"Ion hidroni"},{tier:3,formula:"H2SO4",charge:0,name:"Sulfuric acid",vi:"Axit sunfuric"},{tier:3,formula:"CaCO3",charge:0,name:"Calcium carbonate",vi:"Canxi cacbonat"},{tier:3,formula:"NO3-1",charge:-1,name:"Nitrate ion",vi:"Ion nitrat"},{tier:3,formula:"SO4-2",charge:-2,name:"Sulfate ion",vi:"Ion sunfat"},{tier:3,formula:"SF6",charge:0,name:"Sulfur hexafluoride",vi:"Lưu huỳnh hexaflorua"},{tier:3,formula:"C6H6",charge:0,name:"Benzene",vi:"Benzên"},{tier:3,formula:"XeF4",charge:0,name:"Xenon tetrafluoride",vi:"Xenon tetraflorua"},{tier:3,formula:"CH4O",charge:0,name:"Methanol",vi:"Metanol"},{tier:3,formula:"C2H4O2",charge:0,name:"Acetic acid",vi:"Axit axetic"},{tier:4,formula:"PO4-3",charge:-3,name:"Phosphate ion",vi:"Ion photphat"},{tier:4,formula:"CO3-2",charge:-2,name:"Carbonate ion",vi:"Ion cacbonat"},{tier:4,formula:"C3H8",charge:0,name:"Propane",vi:"Propan"},{tier:4,formula:"C4H10",charge:0,name:"Butane",vi:"Butan"},{tier:4,formula:"C3H6O",charge:0,name:"Acetone",vi:"Axeton"},{tier:4,formula:"C2H6O",charge:0,name:"Ethanol",vi:"Etanol"},{tier:4,formula:"PF5",charge:0,name:"Phosphorus pentafluoride",vi:"Photpho pentaflorua"},{tier:4,formula:"MnO4-1",charge:-1,name:"Permanganate ion",vi:"Ion pemanganat"},{tier:4,formula:"HNO3",charge:0,name:"Nitric acid",vi:"Axit nitric"},{tier:4,formula:"H3PO4",charge:0,name:"Phosphoric acid",vi:"Axit photphoric"},{tier:5,formula:"C6H12O6",charge:0,name:"Glucose",vi:"Glucozơ"},{tier:5,formula:"C8H18",charge:0,name:"Octane",vi:"Octan"},{tier:5,formula:"Cr2O7-2",charge:-2,name:"Dichromate ion",vi:"Ion đicromat"},{tier:5,formula:"UF6",charge:0,name:"Uranium hexafluoride",vi:"Urani hexaflorua"},{tier:5,formula:"CCl4",charge:0,name:"Carbon tetrachloride",vi:"Cacbon tetraclorua"},{tier:5,formula:"CH2Cl2",charge:0,name:"Dichloromethane",vi:"Điclometan"},{tier:5,formula:"CHO3-1",charge:-1,name:"Bicarbonate ion",vi:"Ion bicacbonat"},{tier:5,formula:"HSO4-1",charge:-1,name:"Bisulfate ion",vi:"Ion bisunfat"},{tier:6,formula:"C5H12",charge:0,name:"Pentane",vi:"Pentan"},{tier:6,formula:"C6H14",charge:0,name:"Hexane",vi:"Hекsan"},{tier:6,formula:"C2H4O2",charge:0,name:"Methyl formate",vi:"Metyl fomat"},{tier:6,formula:"C3H6O2",charge:0,name:"Methyl acetate",vi:"Metyl axetat"},{tier:6,formula:"C2H5ClO",charge:0,name:"Hypochlorous ethylic ester",vi:"Etyl hipoclorit"},{tier:6,formula:"C6H6O",charge:0,name:"Phenol",vi:"Phenol"},{tier:6,formula:"C2O4-2",charge:-2,name:"Oxalate ion",vi:"Ion oxalat"},{tier:6,formula:"ClO4-1",charge:-1,name:"Perchlorate ion",vi:"Ion perclorat"},{tier:7,formula:"C12H22O11",charge:0,name:"Sucrose",vi:"Saccarozơ"},{tier:7,formula:"C5H10O5",charge:0,name:"Ribose",vi:"Ribozơ"},{tier:7,formula:"C3H5N3O9",charge:0,name:"Nitroglycerin",vi:"Nitroglycerin"},{tier:7,formula:"C2H5NO2",charge:0,name:"Glycine",vi:"Glyxin"},{tier:7,formula:"C6H5NO2",charge:0,name:"Nicotinic acid (Niacin)",vi:"Axit nicotinic"},{tier:7,formula:"Fe(CN)6-3",charge:-3,name:"Ferricyanide ion",vi:"Ion ferricyanua"},{tier:8,formula:"C7H8O",charge:0,name:"Benzyl alcohol",vi:"Benzyl alcol"},{tier:8,formula:"C7H6O2",charge:0,name:"Benzoic acid",vi:"Axit benzoic"},{tier:8,formula:"C8H10N4O2",charge:0,name:"Caffeine",vi:"Caffeine"},{tier:8,formula:"C6H8O6",charge:0,name:"Ascorbic acid (Vitamin C)",vi:"Axit ascorbic"},{tier:8,formula:"C3H8O3",charge:0,name:"Glycerol",vi:"Glicerol"},{tier:8,formula:"Fe(CN)6-4",charge:-4,name:"Ferrocyanide ion",vi:"Ion ferrocyanua"},{tier:9,formula:"C10H14N2O",charge:0,name:"Nicotine",vi:"Nicotin"},{tier:9,formula:"C9H8O4",charge:0,name:"Aspirin",vi:"Aspirin"},{tier:9,formula:"C6H13NO2",charge:0,name:"Leucine",vi:"Leuxin"},{tier:9,formula:"C4H6O6",charge:0,name:"Tartaric acid",vi:"Axit tartaric"},{tier:9,formula:"PtCl4-2",charge:-2,name:"Tetrachloroplatinate ion",vi:"Ion tetracloroplatinat"},{tier:10,formula:"C16H18N2O4S",charge:0,name:"Penicillin G",vi:"Penicillin G"},{tier:10,formula:"C20H25N3O",charge:0,name:"LSD",vi:"LSD"},{tier:10,formula:"C17H19NO3",charge:0,name:"Morphine",vi:"Moocphin"},{tier:10,formula:"Co(NH3)6+3",charge:3,name:"Hexaamminecobalt(III) ion",vi:"Ion hexaamminecoban(III)"}],pd=[{z:200,sym:"An",name:"Antimatter",mass:0,cat:"exotic",en:null,maxBonds:1,anionCharge:0,charges:null,radius:100,color:"#ff00ff"},{z:201,sym:"Dm",name:"Dark Matter",mass:999,cat:"exotic",en:null,maxBonds:0,anionCharge:0,charges:null,radius:150,color:"#1a1a2e"},{z:202,sym:"Ub",name:"Unobtainium",mass:500,cat:"exotic",en:null,maxBonds:10,anionCharge:0,charges:[10],radius:200,color:"#ffd700"},{z:203,sym:"Vb",name:"Vibranium",mass:300,cat:"exotic",en:10,maxBonds:12,anionCharge:0,charges:[6,4,2],radius:180,color:"#7b2cbf"},{z:204,sym:"Ad",name:"Adamantium",mass:800,cat:"exotic",en:null,maxBonds:8,anionCharge:0,charges:[4],radius:220,color:"#c0c0c0"},{z:205,sym:"My",name:"Mystery Element",mass:NaN,cat:"exotic",en:null,maxBonds:7,anionCharge:7,charges:null,radius:160,color:"#00ff9f"},{z:206,sym:"Ex",name:"Explosium",mass:50,cat:"exotic",en:.1,maxBonds:1,anionCharge:0,charges:[1],radius:120,color:"#ff0000"},{z:207,sym:"Nc",name:"Necrosium",mass:666,cat:"exotic",en:null,maxBonds:6,anionCharge:0,charges:[3],radius:170,color:"#000000"},{z:208,sym:"Qt",name:"Quantumite",mass:.001,cat:"exotic",en:null,maxBonds:20,anionCharge:0,charges:null,radius:80,color:"#00f0ff"},{z:209,sym:"Pl",name:"Plasma",mass:10,cat:"exotic",en:null,maxBonds:0,anionCharge:0,charges:null,radius:140,color:"#ff6b6b"}],md=[{reactants:{An:1,H:1},condition:"rt",products:[],equation:"An + H -> ANNIHILATION!",effect:"annihilate",dynamic:!0},{reactants:{Ex:2},condition:"spark",products:[],equation:"2Ex -> BOOM!",effect:"explode",dynamic:!0},{reactants:{Ub:1,Vb:1},condition:"rt",products:[],equation:"Ub + Vb -> ULTIMATE ALLOY!",effect:"merge",dynamic:!0},{reactants:{Qt:1},condition:"rt",products:[],equation:"Qt -> SUPERPOSITION!",effect:"quantum",dynamic:!0},{reactants:{Nc:1,H2O:1},condition:"rt",products:[],equation:"Nc + H2O -> DECAY!",effect:"decay",dynamic:!0},{reactants:{Pl:1,O2:1},condition:"heat",products:[],equation:"Pl + O2 -> PLASMA STORM!",effect:"plasma",dynamic:!0}];function Kv(n){return pd.find(t=>t.sym===n)}const gd={low:{key:"low",label:"Low",sphereSeg:[10,8],cylSeg:6,pixelRatio:1,drift:!1},med:{key:"med",label:"Medium",sphereSeg:[16,12],cylSeg:10,pixelRatio:1.5,drift:!0},high:{key:"high",label:"High",sphereSeg:[26,18],cylSeg:14,pixelRatio:2,drift:!0}},Yi=["low","med","high"];class jv{constructor({downFps:t=30,upFps:e=55,downMs:i=2e3,upMs:s=4e3}={}){this.downFps=t,this.upFps=e,this.downMs=i,this.upMs=s,this.lowSince=null,this.highSince=null}update(t,e,i=Yi.length-1){const s=performance.now();if(t<this.downFps){if(this.lowSince??=s,s-this.lowSince>=this.downMs&&e>0)return this.reset(),e-1}else this.lowSince=null;if(t>this.upFps){if(this.highSince??=s,s-this.highSince>=this.upMs&&e<i)return this.reset(),e+1}else this.highSince=null;return e}reset(){this.lowSince=null,this.highSince=null}}class Zv{constructor(t=1e3){this.windowMs=t,this.frames=[]}frame(t){this.frames.push(t);const e=t-this.windowMs;for(;this.frames.length>2&&this.frames[0]<e;)this.frames.shift()}get fps(){if(this.frames.length<2)return 60;const t=this.frames[this.frames.length-1]-this.frames[0];return t>0?(this.frames.length-1)*1e3/t:60}}function Jv({camera:n,controls:t}){const a=new Set,c={x:0,y:0};let l=0;const u=()=>{const f=document.activeElement;return f instanceof HTMLInputElement||f instanceof HTMLTextAreaElement},h=new Set(["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"]);window.addEventListener("keydown",f=>{if(f.key==="Shift"){a.add("shift");return}if(u())return;const E=f.key.toLowerCase();h.has(E)&&(f.preventDefault(),a.add(E))}),window.addEventListener("keyup",f=>{a.delete(f.key.toLowerCase()),f.key==="Shift"&&a.delete("shift")}),window.addEventListener("blur",()=>a.clear());const d=new D,p=new D,g=new D,_=new D(0,1,0);function m(f){let E=c.x,b=c.y,y=l;if((a.has("w")||a.has("arrowup"))&&(b+=1),(a.has("s")||a.has("arrowdown"))&&(b-=1),(a.has("a")||a.has("arrowleft"))&&(E-=1),(a.has("d")||a.has("arrowright"))&&(E+=1),a.has("e")&&(y+=1),a.has("q")&&(y-=1),!E&&!b&&!y)return!1;n.getWorldDirection(d),d.y=0,d.lengthSq()<1e-6&&d.set(0,0,-1),d.normalize(),p.crossVectors(d,_);const w=6*(a.has("shift")?2.25:1)*f;if(g.set(0,0,0).addScaledVector(d,b).addScaledVector(p,E),g.y+=y,g.lengthSq()===0)return!1;g.normalize().multiplyScalar(w),t.target.add(g),n.position.add(g),t.target.y=Math.max(-1.4,Math.min(9,t.target.y));const R=Math.hypot(t.target.x,t.target.z);if(R>45){const T=45/R;t.target.x*=T,t.target.z*=T}return!0}return{update:m,setStick:(f,E)=>{c.x=f,c.y=E},setVertical:f=>{l=f}}}const de={H2O:{atoms:["O","H","H"],bonds:[[0,1,1],[0,2,1]]},HCl:{atoms:["H","Cl"],bonds:[[0,1,1]]},NH3:{atoms:["N","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1]]},MgO:{atoms:["Mg","O"],bonds:[[0,1,2,!0]]},NaCl:{atoms:["Na","Cl"],bonds:[[0,1,1,!0]]},CaO:{atoms:["Ca","O"],bonds:[[0,1,2,!0]]},CaOH2:{atoms:["Ca","O","O","H","H"],bonds:[[0,1,1,!0],[0,2,1,!0],[1,3,1],[2,4,1]]},CaCO3:{atoms:["Ca","C","O","O","O"],bonds:[[0,2,1,!0],[0,3,1,!0],[1,2,1],[1,3,1],[1,4,2]]},NaOH:{atoms:["Na","O","H"],bonds:[[0,1,1,!0],[1,2,1]]},KOH:{atoms:["K","O","H"],bonds:[[0,1,1,!0],[1,2,1]]},MgCl2:{atoms:["Mg","Cl","Cl"],bonds:[[0,1,1,!0],[0,2,1,!0]]},AlCl3:{atoms:["Al","Cl","Cl","Cl"],bonds:[[0,1,1,!0],[0,2,1,!0],[0,3,1,!0]]},CO2:{atoms:["C","O","O"],bonds:[[0,1,2],[0,2,2]]},O2:{atoms:["O","O"],bonds:[[0,1,2]]},O3:{atoms:["O","O","O"],bonds:[[0,1,1],[1,2,2]]},NO:{atoms:["N","O"],bonds:[[0,1,2]]},H2:{atoms:["H","H"],bonds:[[0,1,1]]},SO2:{atoms:["S","O","O"],bonds:[[0,1,2],[0,2,2]]},SO3:{atoms:["S","O","O","O"],bonds:[[0,1,2],[0,2,2],[0,3,2]]},H2SO4:{atoms:["S","O","O","O","O","H","H"],bonds:[[0,1,2],[0,2,2],[0,3,1],[0,4,1],[3,5,1],[4,6,1]]},NH4:{atoms:["N","H","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]],charge:1},ClI:{atoms:["Cl"],bonds:[],charge:-1},MnO2:{atoms:["Mn","O","O"],bonds:[[0,1,2,!0],[0,2,2,!0]]},MnCl2:{atoms:["Mn","Cl","Cl"],bonds:[[0,1,1,!0],[0,2,1,!0]]},Cl2:{atoms:["Cl","Cl"],bonds:[[0,1,1]]},KCl:{atoms:["K","Cl"],bonds:[[0,1,1,!0]]},Na2SO4:{atoms:["Na","Na","S","O","O","O","O"],bonds:[[0,2,1,!0],[1,2,1,!0],[2,3,2],[2,4,2],[2,5,1],[2,6,1]]},K2SO4:{atoms:["K","K","S","O","O","O","O"],bonds:[[0,2,1,!0],[1,2,1,!0],[2,3,2],[2,4,2],[2,5,1],[2,6,1]]},CaCl2:{atoms:["Ca","Cl","Cl"],bonds:[[0,1,1,!0],[0,2,1,!0]]},Al2O3:{atoms:["Al","Al","O","O","O"],bonds:[[0,2,2,!0],[0,3,2,!0],[0,4,2,!0],[1,2,2,!0],[1,3,2,!0],[1,4,2,!0]]},Fe:{atoms:["Fe"],bonds:[]},CH4:{atoms:["C","H","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]]},C2H6:{atoms:["C","C","H","H","H","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1],[1,5,1],[1,6,1],[1,7,1]]},C3H8:{atoms:["C","C","C","H","H","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[0,3,1],[0,4,1],[0,5,1],[1,6,1],[1,7,1],[2,8,1],[2,9,1],[2,10,1]]},C2H4:{atoms:["C","C","H","H","H","H"],bonds:[[0,1,2],[0,2,1],[0,3,1],[1,4,1],[1,5,1]]},C3H6:{atoms:["C","C","C","H","H","H","H","H","H"],bonds:[[0,1,2],[1,2,1],[0,3,1],[0,4,1],[1,5,1],[2,6,1],[2,7,1],[2,8,1]]},C2H2:{atoms:["C","C","H","H"],bonds:[[0,1,3],[0,2,1],[1,3,1]]},C6H6:{atoms:["C","C","C","C","C","C","H","H","H","H","H","H"],bonds:[[0,1,2],[1,2,1],[2,3,2],[3,4,1],[4,5,2],[5,0,1],[0,6,1],[1,7,1],[2,8,1],[3,9,1],[4,10,1],[5,11,1]]},CH4O:{atoms:["C","O","H","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1],[1,5,1]]},C2H6O:{atoms:["C","C","O","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[0,3,1],[0,4,1],[0,5,1],[1,6,1],[1,7,1],[2,8,1]]},CH2O:{atoms:["C","O","H","H"],bonds:[[0,1,2],[0,2,1],[0,3,1]]},C2H4O:{atoms:["C","C","O","H","H","H","H"],bonds:[[0,1,1],[1,2,2],[0,3,1],[0,4,1],[0,5,1],[1,6,1]]},C3H6O:{atoms:["C","C","C","O","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[1,3,2],[0,4,1],[0,5,1],[0,6,1],[2,7,1],[2,8,1],[2,9,1]]},CH2O2:{atoms:["C","O","O","H","H"],bonds:[[0,1,2],[0,2,1],[0,3,1],[2,4,1]]},C2H4O2:{atoms:["C","C","O","O","H","H","H","H"],bonds:[[0,1,1],[1,2,2],[1,3,1],[0,4,1],[0,5,1],[0,6,1],[3,7,1]]},C3H6O2:{atoms:["C","C","O","O","C","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,2],[1,3,1],[3,4,1],[0,5,1],[0,6,1],[0,7,1],[4,8,1],[4,9,1],[4,10,1]]},C4H8O2:{atoms:["C","C","O","O","C","C","H","H","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,2],[1,3,1],[3,4,1],[4,5,1],[0,6,1],[0,7,1],[0,8,1],[4,9,1],[4,10,1],[5,11,1],[5,12,1],[5,13,1]]},CH5N:{atoms:["C","N","H","H","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1],[1,5,1],[1,6,1]]},C2H7N:{atoms:["C","C","N","H","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[0,3,1],[0,4,1],[0,5,1],[1,6,1],[1,7,1],[2,8,1],[2,9,1]]},CH3Cl:{atoms:["C","Cl","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]]},CH2Cl2:{atoms:["C","Cl","Cl","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]]},CHCl3:{atoms:["C","Cl","Cl","Cl","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]]},CCl4:{atoms:["C","Cl","Cl","Cl","Cl"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]]},C2H5Cl:{atoms:["C","C","Cl","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[0,3,1],[0,4,1],[0,5,1],[1,6,1],[1,7,1]]},HBr:{atoms:["H","Br"],bonds:[[0,1,1]]},HI:{atoms:["H","I"],bonds:[[0,1,1]]},HF:{atoms:["H","F"],bonds:[[0,1,1]]},Br2:{atoms:["Br","Br"],bonds:[[0,1,1]]},F2:{atoms:["F","F"],bonds:[[0,1,1]]},I2:{atoms:["I","I"],bonds:[[0,1,1]]},Na2O:{atoms:["Na","Na","O"],bonds:[[0,2,1,!0],[1,2,1,!0]]},K2O:{atoms:["K","K","O"],bonds:[[0,2,1,!0],[1,2,1,!0]]},N2:{atoms:["N","N"],bonds:[[0,1,3]]}},Pa={};function Fo(n,t,e){Pa[n]||(Pa[n]=[]),Pa[n].push({key:t,tpl:e}),de[t]=e}Fo("C2H6O","C2H6O_ethanol",{atoms:["C","C","O","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[0,3,1],[0,4,1],[0,5,1],[1,6,1],[1,7,1],[2,8,1]]});Fo("C2H6O","C2H6O_ether",{atoms:["C","O","C","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[0,3,1],[0,4,1],[0,5,1],[2,6,1],[2,7,1],[2,8,1]]});Fo("C3H6O","C3H6O_acetone",{atoms:["C","C","C","O","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[1,3,2],[0,4,1],[0,5,1],[0,6,1],[2,7,1],[2,8,1],[2,9,1]]});Fo("C3H6O","C3H6O_propanal",{atoms:["C","C","C","O","H","H","H","H","H","H"],bonds:[[0,1,1],[1,2,1],[2,3,2],[0,4,1],[0,5,1],[0,6,1],[1,7,1],[1,8,1],[2,9,1]]});const _d=[{key:"rt",label:"Room temp"},{key:"heat",label:"Heat"},{key:"spark",label:"Spark"},{key:"electricity",label:"Electricity"},{key:"catalyst",label:"Catalyst"},{key:"uv",label:"UV light"}];Object.fromEntries(_d.map(n=>[n.key,n.label]));function rc(n){return/^H\d*[A-Z]/.test(n)}function Qv(n){if(/[A-Z][a-z]?\(OH\)\d?$|[A-Z][a-z]?OH$/.test(n))return!0;const t=n.match(/^([A-Z][a-z]?)H(\d*)O(\d*)$/);if(t){const e=t[2]?parseInt(t[2]):1,i=t[3]?parseInt(t[3]):1;return e===i&&e>0}return!1}function oc(n){return fe(n).get("H")||0}function ty(n){const t=n.match(/\(OH\)(\d+)$/);if(t)return parseInt(t[1]);if(/OH$/.test(n))return 1;const e=n.match(/^([A-Z][a-z]?)H(\d*)O(\d*)$/);if(e){const i=e[2]?parseInt(e[2]):1,s=e[3]?parseInt(e[3]):1;if(i===s&&i>0)return i}return 0}function ey(n){const t=n.match(/^([A-Z][a-z]?)\(OH\)(\d+)$/);if(t)return{sym:t[1],charge:parseInt(t[2])};const e=n.match(/^([A-Z][a-z]?)OH$/);if(e)return{sym:e[1],charge:1};const i=n.match(/^([A-Z][a-z]?)H(\d*)O(\d*)$/);if(i){const s=i[2]?parseInt(i[2]):1,r=i[3]?parseInt(i[3]):1;if(s===r&&s>0)return{sym:i[1],charge:s}}return null}function ac(n){const t=fe(n),e=t.get("H")||0;if(e===0)return null;const i=new Map(t);i.delete("H");const s=[...i.entries()];if(s.length===0)return null;if(s.length===1){const[c,l]=s[0];return{sym:l===1?c:`${c}${l}`,charge:-e}}const r=s.find(([c])=>c!=="O");if(!r)return null;const o=i.get("O")||0;return{sym:o>1?`${r[0]}O${o}`:o===1?`${r[0]}O`:r[0],charge:-e}}function xr(n,t){const e=Math.abs(n.charge),i=Math.abs(t.charge),s=e*i/Fe(e,i),r=s/e,o=s/i,a=[];for(let d=0;d<r;d++)a.push(n.sym);const c=vd(t.sym);for(let d=0;d<o;d++)for(const p of c)a.push(p);const l=[],u=[];for(let d=0;d<r;d++)u.push(d);const h=r;for(let d=0;d<o;d++){const p=h+d*c.length,g=ry(c,p);for(const _ of u)l.push([_,g,1,!0])}for(let d=0;d<o;d++){const p=h+d*c.length,g=oy(t.sym,p);l.push(...g)}return{atoms:a,bonds:l}}function Fe(n,t){return t===0?n:Fe(t,n%t)}function xd(n){const t=[],e=[];for(let s=0;s<n;s++)t.push("C");for(let s=0;s<n-1;s++)e.push([s,s+1,1]);let i=t.length;for(let s=0;s<n;s++){const r=n===1?4:s===0||s===n-1?3:2;for(let o=0;o<r;o++)t.push("H"),e.push([s,i++,1])}return{atoms:t,bonds:e}}function ny(n){if(n<2)return xd(1);const t=[],e=[];for(let s=0;s<n;s++)t.push("C");e.push([0,1,2]);for(let s=1;s<n-1;s++)e.push([s,s+1,1]);let i=t.length;for(let s=0;s<n;s++){let r;s===0?r=2:s===1?r=n===2?2:1:s===n-1?r=3:r=2;for(let o=0;o<r;o++)t.push("H"),e.push([s,i++,1])}return{atoms:t,bonds:e}}function iy(n,t){const e=n-1,i=t,s=[],r=[];for(let h=0;h<e;h++)s.push("C");const o=s.length;s.push("C");const a=s.length;s.push("O");const c=s.length;s.push("O");const l=s.length;for(let h=0;h<i;h++)s.push("C");if(e>0){for(let h=0;h<e-1;h++)r.push([h,h+1,1]);r.push([e-1,o,1])}r.push([o,a,2]),r.push([o,c,1]),r.push([c,l,1]);for(let h=0;h<i-1;h++)r.push([l+h,l+h+1,1]);let u=s.length;for(let h=0;h<e;h++){const d=e===1||h===0?3:2;for(let p=0;p<d;p++)s.push("H"),r.push([h,u++,1])}for(let h=0;h<i;h++){const d=i===1?3:h===0?2:h===i-1?3:2;for(let p=0;p<d;p++)s.push("H"),r.push([l+h,u++,1])}return{atoms:s,bonds:r}}function sy(n,t){const e=[],i=[];for(let o=0;o<n;o++)e.push("C");for(let o=0;o<n-1;o++)i.push([o,o+1,1]);const s=e.length;e.push(t),i.push([n-1,s,1]);let r=e.length;for(let o=0;o<n;o++){let a;n===1?a=3:o===n-1?a=2:o===0?a=3:a=2;for(let c=0;c<a;c++)e.push("H"),i.push([o,r++,1])}return{atoms:e,bonds:i}}function Ol(n,t,e,i){let s="";return n===1?s+="C":s+=`C${n}`,t===1?s+="H":t>0&&(s+=`H${t}`),e&&e>0&&(e===1?s+="O":s+=`O${e}`),s}function vd(n){const t=fe(n),e=[];for(const[i,s]of t)for(let r=0;r<s;r++)e.push(i);return e}function ry(n,t){for(let e=0;e<n.length;e++)if(n[e]!=="O")return t+e;return t}function oy(n,t){const e=vd(n);if(e.length<=1)return[];const i=[];let s=0;for(let r=0;r<e.length;r++)if(e[r]!=="O"){s=r;break}for(let r=0;r<e.length;r++)r!==s&&i.push([t+s,t+r,1]);return i}function yd(n){const t=n.filter(R=>rc(R)),e=n.filter(R=>Qv(R));if(t.length===0||e.length===0)return null;const i=t[0],s=e[0],r=oc(i),o=ty(s);if(r===0||o===0)return null;const a=ey(s),c=ac(i);if(!a||!c)return null;const l=o,u=r,h=Fe(l,u),d=l/h,p=u/h,g=r*o/h,_=xr(a,c),m=vr(a,c),f=m;de[f]=_;const E=d===1?i:`${d}${i}`,b=p===1?s:`${p}${s}`,y=g===1?"H2O":`${g}H2O`,w=`${E} + ${b} -> ${m} + ${y}`;return{reactants:{[i]:d,[s]:p},condition:"rt",products:[[f,1],["H2O",g]],equation:w,dynamic:!0}}function vr(n,t){const e=Math.abs(n.charge),i=Math.abs(t.charge),s=e*i/Fe(e,i),r=s/e,o=s/i,a=t.sym.length>2||/[0-9]/.test(t.sym);let c=n.sym;return r>1&&(c+=r),o>1&&a?c+=`(${t.sym})${o}`:(c+=t.sym,o>1&&(c+=o)),c}function fe(n){const t=new Map,e=[t],i=/([A-Z][a-z]?)(\d*)|(\()|(\))(\d*)/g;let s;for(;(s=i.exec(n))!==null;)if(s[1]){const r=s[2]?parseInt(s[2]):1,o=e[e.length-1];o.set(s[1],(o.get(s[1])||0)+r)}else if(s[3]){const r=new Map;e.push(r)}else if(s[4]){const r=e.pop(),o=s[5]?parseInt(s[5]):1,a=e[e.length-1];for(const[c,l]of r)a.set(c,(a.get(c)||0)+l*o)}return t}function ay(n){if(n==="O2"||n==="H2")return!1;const t=fe(n);return t.has("C")&&t.has("H")}function Nl(n){const t=_n(n),e=[...t.keys()].filter(E=>ay(E));if(e.length===0||!t.has("O2")||t.size!==2)return null;const i=e[0],s=fe(i),r=s.get("C")||0,o=s.get("H")||0,a=s.get("O")||0;let c=4,l=4*r+o-2*a,u=4*r,h=2*o;if(l<=0)return null;const d=Fe(Fe(c,l),Fe(u,h));c/=d,l/=d,u/=d,h/=d;const p={[i]:c,O2:l},g=c===1?i:`${c}${i}`,_=l===1?"O2":`${l}O2`,m=u===1?"CO2":`${u}CO2`,f=h===1?"H2O":`${h}H2O`;return{reactants:p,condition:"spark",products:[["CO2",u],["H2O",h]],equation:`${g} + ${_} -> ${m} + ${f}`,dynamic:!0}}function ly(n){const t=Se(n);return t&&ue(t)}function cy(n){const t=Se(n);return!t||!t.charges||t.charges.length===0?null:t.charges[0]}function Md(n){const t=_n(n);if(t.size!==2)return null;const e=[...t.keys()].filter(O=>ly(O)),i=[...t.keys()].filter(O=>rc(O));if(e.length===0||i.length===0)return null;const s=e[0],r=i[0],o=cy(s),a=ac(r);if(!o||!a)return null;const c={sym:s,charge:o},l=vr(c,a),u=xr(c,a);de[l]=u;const h=Math.abs(a.charge),d=Fe(o,h),p=h/d,g=o/d,_=oc(r);if(_===0)return null;let m=p,f=g,E=1,b=f*_,y=2;const w=Fe(b,y);let R=b/w;const T=y/w;T!==1&&(m*=T,f*=T,E*=T);const P=m===1?s:`${m}${s}`,v=f===1?r:`${f}${r}`,S=E===1?l:`${E}${l}`,A=R===1?"H2":`${R}H2`;return{reactants:{[s]:m,[r]:f},condition:"rt",products:[[l,E],["H2",R]],equation:`${P} + ${v} -> ${S} + ${A}`,dynamic:!0}}function Sd(n){const t=_n(n);if(t.size!==2||!t.has("H2O"))return null;const e=[...t.keys()].find(m=>m!=="H2O");if(!e)return null;const i=Se(e);if(!i||!ue(i)||!i.charges||i.charges.length===0)return null;const s=i.charges[0],r=i.cat==="alkali",o=i.cat==="alkaline";if(!r&&!o)return null;const a={sym:e,charge:s},c=uy(a),l=hy(a);de[c]=l;let u,h,d,p;s===1?(u=2,h=2,d=2,p=1):(u=1,h=2,d=1,p=1);const g=u===1?e:`${u}${e}`,_=d===1?c:`${d}${c}`;return{reactants:{[e]:u,H2O:h},condition:"rt",products:[[c,d],["H2",p]],equation:`${g} + ${h}H2O -> ${_} + ${p===1?"H2":p+"H2"}`,dynamic:!0}}function uy(n){const t=n.charge;return t===1?`${n.sym}OH`:`${n.sym}(OH)${t}`}function hy(n){const t=n.charge,e=[n.sym];for(let s=0;s<t;s++)e.push("O","H");const i=[];for(let s=0;s<t;s++){const r=1+s*2,o=2+s*2;i.push([0,r,1,!0]),i.push([r,o,1])}return{atoms:e,bonds:i}}function nh(n){const t=fe(n),e=t.get("C")||0,i=t.get("O")||0;if(e===0||i!==e*3)return null;const s=[...t.keys()].filter(u=>{if(u==="C"||u==="O")return!1;const h=Se(u);return h&&ue(h)});if(s.length!==1)return null;const r=s[0],o=t.get(r)||1,a=Se(r);if(!a||!a.charges||a.charges.length===0)return null;const c=e*2,l=Math.round(c/o);return a.charges.includes(l)?{sym:r,charge:l}:null}function Ed(n){const t=_n(n);if(t.size!==2)return null;const e=[...t.keys()].filter(A=>nh(A)),i=[...t.keys()].filter(A=>rc(A));if(e.length===0||i.length===0)return null;const s=e[0],r=i[0],o=nh(s),a=ac(r);if(!o||!a)return null;const c=vr(o,a),l=xr(o,a);de[c]=l;const u=oc(r);if(u===0)return null;const h=Fe(2,u),d=u/h,p=2/h,g=d,_=p*u/2,f=fe(s).get(o.sym)||1,E=d*f,y=fe(c).get(o.sym)||1,w=E/y,R=d===1?s:`${d}${s}`,T=p===1?r:`${p}${r}`,P=w===1?c:`${w}${c}`,v=g===1?"CO2":`${g}CO2`,S=_===1?"H2O":`${_}H2O`;return{reactants:{[s]:d,[r]:p},condition:"rt",products:[[c,w],["CO2",g],["H2O",_]],equation:`${R} + ${T} -> ${P} + ${v} + ${S}`,dynamic:!0}}const _o={Fr:1,Cs:2,Rb:3,K:4,Na:5,Li:6,Ba:7,Sr:8,Ca:9,Mg:10,Al:11,Mn:12,Zn:13,Cr:14,Fe:15,Cd:16,Co:17,Ni:18,Sn:19,Pb:20,Cu:21,Ag:22,Hg:23,Pt:24,Au:25};function dy(n){const t=fe(n),e=[...t.keys()],i=e.filter(a=>{const c=Se(a);return c&&ue(c)});if(i.length!==1||e.length!==2||!t.has("O"))return null;const s=i[0],r=t.get(s),o=t.get("O");return o*2%r!==0?null:{metalSym:s,oCount:o,oxidationState:o*2/r}}function bd(n,t){return t===2?`${n}O`:t%2===0?`${n}O${t/2}`:`${n}2O${t}`}function fy(n,t){const e=bd(n,t),i=fe(e),s=[];for(const[c,l]of i)for(let u=0;u<l;u++)s.push(c);const r=[],o=[],a=[];for(let c=0;c<s.length;c++)s[c]==="O"?a.push(c):o.push(c);for(const c of o)for(const l of a)r.push([c,l,2,!0]);return{atoms:s,bonds:r}}function Td(n){return{atoms:[n],bonds:[]}}function Cd(n){const t=_n(n);if(t.size!==2)return null;const e=[...t.keys()];let i=null,s=null,r=null;for(const k of e){const B=dy(k);if(B)i=k,s=B;else{const X=Se(k);X&&ue(X)&&X.charges&&X.charges.length>0&&(r=k)}}if(!i||!s||!r)return null;const o=_o[r],a=_o[s.metalSym];if(o==null||a==null||o>=a)return null;const c=Se(r).charges[0],l=s.oxidationState,h=fe(i).get(s.metalSym)||1,d=Fe(c,l),p=c*l/d;let g=p/l,_=p*h/c;const m=bd(r,c),E=fe(m).get("O")||1,b=g*s.oCount/E,y=g*(fe(i).get(s.metalSym)||1),w=[g,_,b,y];let R=w[0];for(let k=1;k<4;k++)R=Fe(R,w[k]);const[T,P,v,S]=w.map(k=>k/R);de[m]||(de[m]=fy(r,c)),de[s.metalSym]||(de[s.metalSym]=Td(s.metalSym));const A=T===1?i:`${T}${i}`,O=P===1?r:`${P}${r}`,H=v===1?m:`${v}${m}`,V=S===1?s.metalSym:`${S}${s.metalSym}`;return{reactants:{[i]:T,[r]:P},condition:"heat",products:[[m,v],[s.metalSym,S]],equation:`${A} + ${O} -> ${H} + ${V}`,dynamic:!0}}function py(n,t,e){const i=Se(t);if(!i||!i.charges||i.charges.length===0)return null;const r=i.charges[0]*e,o=[...n.keys()].filter(l=>{if(l===t)return!1;const u=Se(l);return u&&!ue(u)}),a=n.has("O"),c=o.filter(l=>l!=="O");if(c.length===1&&a){const l=c[0],u=n.get(l)||1,h=n.get("O")||0,d=h===0?l:h===1?`${l}O`:`${l}O${h}`,p=-Math.round(r/u);return{sym:d,count:u,chargePerUnit:p}}if(c.length===1&&!a){const l=c[0],u=n.get(l)||1,h=-Math.round(r/u);return{sym:l,count:u,chargePerUnit:h}}if(c.length===0&&a){const l=n.get("O")||1,u=-Math.round(r/l);return{sym:"O",count:l,chargePerUnit:u}}return null}function Ad(n){const t=_n(n);if(t.size!==2)return null;const e=[...t.keys()];let i=null,s=null;for(const B of e){const X=Se(B);X&&ue(X)&&X.charges&&X.charges.length>0?i=B:s=B}if(!i||!s)return null;const r=fe(s),a=[...r.keys()].filter(B=>{const X=Se(B);return X&&ue(X)});if(a.length!==1)return null;const c=a[0],l=_o[i],u=_o[c];if(l==null||u==null||l>=u)return null;const h=Se(i).charges[0],d=Se(c).charges[0],p=r.get(c),g=py(r,c,p);if(!g)return null;const _=vr({sym:i,charge:h},{sym:g.sym,charge:g.chargePerUnit}),m=xr({sym:i,charge:h},{sym:g.sym,charge:g.chargePerUnit});de[_]||(de[_]=m),de[c]||(de[c]=Td(c));const E=fe(_).get(i)||1;let b=1,y=E,w=y*h/(p*d),R=w*p;const T=Fe(Fe(y,w),Fe(b,R)),[P,v,S,A]=[y,w,b,R].map(B=>B/T),O=P===1?i:`${P}${i}`,H=v===1?s:`${v}${s}`,V=S===1?_:`${S}${_}`,k=A===1?c:`${A}${c}`;return{reactants:{[i]:P,[s]:v},condition:"rt",products:[[_,S],[c,A]],equation:`${O} + ${H} -> ${V} + ${k}`,dynamic:!0}}function wd(n){const t=_n(n);if(t.size!==2)return null;const e=[...t.keys()];let i=null,s=null;for(const b of e){const y=Se(b);y&&ue(y)&&y.charges&&y.charges.length>0?i=b:(b==="Cl2"||b==="Br2"||b==="F2"||b==="I2")&&(s=b)}if(!i||!s)return null;const r=Se(i).charges[0],o=s.replace("2",""),a=vr({sym:i,charge:r},{sym:o,charge:-1}),c=xr({sym:i,charge:r},{sym:o,charge:-1});de[a]||(de[a]=c);const l=fe(a),u=l.get(i)||1,h=l.get(o)||1;let d=u,p=h/2,g=1;p!==Math.floor(p)&&(d*=2,p*=2,g*=2);const _=Fe(Fe(d,p),g);d/=_,p/=_,g/=_;const m=d===1?i:`${d}${i}`,f=p===1?s:`${p}${s}`,E=g===1?a:`${g}${a}`;return{reactants:{[i]:d,[s]:p},condition:"heat",products:[[a,g]],equation:`${m} + ${f} -> ${E}`,dynamic:!0}}function my(n){const t=_n(n);if(t.size!==1)return null;const i=[...t.keys()][0],s=t.get(i);if(s<2)return null;const r=Se(i);if(!r||!ue(r)||!new Set(["Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg"]).has(i))return null;const a=`${i}2`,c={atoms:[i,i],bonds:[[0,1,4]]};de[a]||(de[a]=c);const l=Math.floor(s/2);if(l<1)return null;const u=s===2?i:`${s}${i}`,h=l===1?a:`${l}${a}`;return{reactants:{[i]:s},condition:"heat",products:[[a,l]],equation:`${u} -> ${h}`,dynamic:!0}}function gy(n){const t=_n(n);if(t.size!==1)return null;const i=[...t.keys()][0],s=i.match(/^([A-Z][a-z]?)2$/);if(!s)return null;const r=s[1],o=Se(r);if(!o||!ue(o)||!new Set(["Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg"]).has(r))return null;const c=t.get(i),l=c*2,u=l===1?r:`${l}${r}`,h=c===1?i:`${c}${i}`;return{reactants:{[i]:c},condition:"heat",products:[[r,l]],equation:`${h} -> ${u}`,dynamic:!0}}function ih(n){const t=fe(n);if(t.size!==2||!t.has("C")||!t.has("H"))return!1;const e=t.get("C");return t.get("H")===2*e+2}function sh(n){const t=fe(n);if(t.size!==2||!t.has("C")||!t.has("H"))return!1;const e=t.get("C"),i=t.get("H");return e>=2&&i===2*e}function rh(n){const t=fe(n);if(t.size!==2||!t.has("C")||!t.has("H"))return!1;const e=t.get("C"),i=t.get("H");return e>=2&&i===2*e-2}function oh(n){const t=fe(n);if(!t.has("C")||!t.has("H")||!t.has("O")||t.size!==3)return!1;const e=t.get("C"),i=t.get("H");return t.get("O")===1&&i===2*e+2}function ah(n){const t=fe(n);if(!t.has("C")||!t.has("H")||!t.has("O")||t.size!==3)return!1;const e=t.get("C"),i=t.get("H");return t.get("O")===2&&i===2*e}function Rd(n){if(n.length!==2)return null;const[t,e]=n;let i=null,s=null;if(ah(t)&&oh(e)?(i=t,s=e):ah(e)&&oh(t)&&(i=e,s=t),!i||!s)return null;const r=fe(i),o=fe(s),a=r.get("C"),c=o.get("C"),l=a+c,u=2*l,h=Ol(l,u,2);de[h]||(de[h]=iy(a,c));const d=i,p=s,g=h;return{reactants:{[i]:1,[s]:1},condition:"catalyst",products:[[g,1],["H2O",1]],equation:`${d} + ${p} -> ${g} + H2O`,dynamic:!0}}function Pd(n){if(n.length!==2)return null;const[t,e]=n;let i=null;if(t==="H2"&&(sh(e)||rh(e))?i=e:e==="H2"&&(sh(t)||rh(t))&&(i=t),!i)return null;const s=fe(i),r=s.get("C"),o=s.get("H");if(o===2*r){const a=Ol(r,2*r+2,0);return de[a]||(de[a]=xd(r)),{reactants:{[i]:1,H2:1},condition:"catalyst",products:[[a,1]],equation:`${i} + H2 -> ${a}`,dynamic:!0}}if(o===2*r-2){const a=Ol(r,2*r,0);return de[a]||(de[a]=ny(r)),{reactants:{[i]:1,H2:1},condition:"catalyst",products:[[a,1]],equation:`${i} + H2 -> ${a}`,dynamic:!0}}return null}function Ld(n){if(n.length!==2)return null;const[t,e]=n;let i=null,s=null;const r={Cl2:"Cl",Br2:"Br",F2:"F",I2:"I"};if(ih(t)&&r[e]?(i=t,s=r[e]):ih(e)&&r[t]&&(i=e,s=r[t]),!i||!s)return null;const a=fe(i).get("C"),c=_y(a,s),l=`H${s}`;de[c]||(de[c]=sy(a,s));const u=Object.keys(r).find(h=>r[h]===s);return{reactants:{[i]:1,[u]:1},condition:"uv",products:[[c,1],[l,1]],equation:`${i} + ${u} -> ${c} + ${l}`,dynamic:!0}}function _y(n,t){const e=2*n+2-1;let i="";return n===1?i+="C":i+=`C${n}`,e===1?i+="H":i+=`H${e}`,i+=t,i}const lc=[{reactants:{H2:2,O2:1},condition:"spark",products:[["H2O",2]],equation:"2H2 + O2 -> 2H2O"},{reactants:{H2:1,Cl2:1},condition:"spark",products:[["HCl",2]],equation:"H2 + Cl2 -> 2HCl"},{reactants:{N2:1,H2:3},condition:"catalyst",products:[["NH3",2]],equation:"N2 + 3H2 -> 2NH3"},{reactants:{Mg:2,O2:1},condition:"heat",products:[["MgO",2]],equation:"2Mg + O2 -> 2MgO"},{reactants:{Na:2,Cl2:1},condition:"spark",products:[["NaCl",2]],equation:"2Na + Cl2 -> 2NaCl"},{reactants:{CaO:1,H2O:1},condition:"rt",products:[["CaOH2",1]],equation:"CaO + H2O -> Ca(OH)2"},{reactants:{CaO:1,CO2:1},condition:"rt",products:[["CaCO3",1]],equation:"CaO + CO2 -> CaCO3"},{reactants:{CaCO3:1},condition:"heat",products:[["CaO",1],["CO2",1]],equation:"CaCO3 -> CaO + CO2"},{reactants:{CaOH2:1,CO2:1},condition:"rt",products:[["CaCO3",1],["H2O",1]],equation:"Ca(OH)2 + CO2 -> CaCO3 + H2O"},{reactants:{HCl:1,NaOH:1},condition:"rt",products:[["NaCl",1],["H2O",1]],equation:"HCl + NaOH -> NaCl + H2O"},{reactants:{H2O2:2},condition:"catalyst",products:[["H2O",2],["O2",1]],equation:"2H2O2 -> 2H2O + O2"},{reactants:{CH4:1,O2:2},condition:"spark",products:[["CO2",1],["H2O",2]],equation:"CH4 + 2O2 -> CO2 + 2H2O"},{reactants:{C:1,O2:1},condition:"heat",products:[["CO2",1]],equation:"C + O2 -> CO2"},{reactants:{N2:1,O2:1},condition:"spark",products:[["NO",2]],equation:"N2 + O2 -> 2NO"},{reactants:{SO2:2,O2:1},condition:"catalyst",products:[["SO3",2]],equation:"2SO2 + O2 -> 2SO3"},{reactants:{SO3:1,H2O:1},condition:"rt",products:[["H2SO4",1]],equation:"SO3 + H2O -> H2SO4"},{reactants:{H2O:2},condition:"electricity",products:[["H2",2],["O2",1]],equation:"2H2O -> 2H2 + O2"},{reactants:{NH3:1,HCl:1},condition:"rt",products:[["NH4",1],["ClI",1]],equation:"NH3 + HCl -> NH4+ + Cl-"},{reactants:{Na:2,H2O:2},condition:"rt",products:[["NaOH",2],["H2",1]],equation:"2Na + 2H2O -> 2NaOH + H2"},{reactants:{K:2,H2O:2},condition:"rt",products:[["KOH",2],["H2",1]],equation:"2K + 2H2O -> 2KOH + H2"},{reactants:{Al:2,Cl2:3},condition:"heat",products:[["AlCl3",2]],equation:"2Al + 3Cl2 -> 2AlCl3"},{reactants:{Mg:1,HCl:2},condition:"rt",products:[["MgCl2",1],["H2",1]],equation:"Mg + 2HCl -> MgCl2 + H2"},{reactants:{O2:3},condition:"uv",products:[["O3",2]],equation:"3O2 -> 2O3"},{reactants:{MnO2:1,HCl:4},condition:"heat",products:[["MnCl2",1],["Cl2",1],["H2O",2]],equation:"MnO2 + 4HCl -> MnCl2 + Cl2 + 2H2O"},{reactants:{HCl:1,KOH:1},condition:"rt",products:[["KCl",1],["H2O",1]],equation:"HCl + KOH -> KCl + H2O"},{reactants:{H2SO4:1,NaOH:2},condition:"rt",products:[["Na2SO4",1],["H2O",2]],equation:"H2SO4 + 2NaOH -> Na2SO4 + 2H2O"},{reactants:{H2SO4:1,KOH:2},condition:"rt",products:[["K2SO4",1],["H2O",2]],equation:"H2SO4 + 2KOH -> K2SO4 + 2H2O"},{reactants:{HCl:2,CaOH2:1},condition:"rt",products:[["CaCl2",1],["H2O",2]],equation:"2HCl + Ca(OH)2 -> CaCl2 + 2H2O"}];function _n(n){const t=new Map;for(const e of n)t.set(e,(t.get(e)||0)+1);return t}function dn(n){return[...fe(n).entries()].sort(([e],[i])=>e.localeCompare(i)).map(([e,i])=>`${e}${i}`).join("")}function La(n,t){const e=Object.entries(n.reactants);if(e.length!==t.size)return!1;const i=new Map;for(const[s,r]of t){const o=dn(s);i.set(o,(i.get(o)||0)+r)}for(const[s,r]of e){const o=dn(s);if(i.get(o)!==r)return!1}return!0}function cc(n,t){const e=_n(n);for(const r of lc)if(r.condition===t&&La(r,e))return r;for(const r of md)if(r.condition===t&&La(r,e))return r;const s={rt:[yd,Md,Sd,Ed,Ad],spark:[Nl],heat:[Nl,Cd,wd,my,gy],catalyst:[Rd,Pd],uv:[Ld]}[t]||[];for(const r of s){const o=r([...e.keys()]);if(o&&La(o,e))return o}return null}function Dd(n){const t=_n(n),e=new Set;for(const s of lc){let r=!0;for(const[o,a]of t){const c=dn(o);let l=0;for(const[u,h]of Object.entries(s.reactants))dn(u)===c&&(l=h);if(l<a){r=!1;break}}r&&e.add(s.condition)}for(const s of md){let r=!0;for(const[o,a]of t){const c=dn(o);let l=0;for(const[u,h]of Object.entries(s.reactants))dn(u)===c&&(l=h);if(l<a){r=!1;break}}r&&e.add(s.condition)}const i=[{fn:yd,cond:"rt"},{fn:Md,cond:"rt"},{fn:Sd,cond:"rt"},{fn:Ed,cond:"rt"},{fn:Nl,cond:"spark"},{fn:Cd,cond:"heat"},{fn:Ad,cond:"rt"},{fn:wd,cond:"heat"},{fn:Rd,cond:"catalyst"},{fn:Pd,cond:"catalyst"},{fn:Ld,cond:"uv"}];for(const{fn:s,cond:r}of i){const o=s([...t.keys()]);if(o){let a=!0;for(const[c,l]of t){const u=dn(c);let h=0;for(const[d,p]of Object.entries(o.reactants))dn(d)===u&&(h=p);if(h<l){a=!1;break}}a&&e.add(r)}}return e}function xy(n,t){const e=_n(n),i=[];for(const s of lc){if(s.condition!==t)continue;let r=!0;for(const[a,c]of e){const l=dn(a);let u=0;for(const[h,d]of Object.entries(s.reactants))dn(h)===l&&(u=d);if(u<c){r=!1;break}}if(!r)continue;const o=[];for(const[a,c]of Object.entries(s.reactants)){const l=dn(a);let u=0;for(const[d,p]of e)dn(d)===l&&(u=p);const h=c-u;h>0&&o.push(h===1?a:`${h}${a}`)}o.length&&i.push(o.join(" + "))}return i.length?[...new Set(i)].join(" or "):null}function Da(n,t){return de[n]}const Id="mol3d.tutorial-seen",Od="mol3d.lang-selected";let Zt=null,An=0,En=null;const er=[{titleKey:"tut.welcome.title",bodyKey:"tut.welcome.body",icon:"🧪"},{titleKey:"tut.pool.title",bodyKey:"tut.pool.body",icon:"⚛️",highlight:'[data-tab="left"]',cardPos:"above"},{titleKey:"tut.bond.title",bodyKey:"tut.bond.body",icon:"🔗"},{titleKey:"tut.bondOrder.title",bodyKey:"tut.bondOrder.body",icon:"🔄"},{titleKey:"tut.info.title",bodyKey:"tut.info.body",icon:"📋",highlight:'[data-tab="tab-info"]',cardPos:"above"},{titleKey:"tut.reaction.title",bodyKey:"tut.reaction.body",icon:"⚗️"},{titleKey:"tut.dex.title",bodyKey:"tut.dex.body",icon:"📖",highlight:'[data-tab="tab-dex"]',cardPos:"above"},{titleKey:"tut.camera.title",bodyKey:"tut.camera.body",icon:"🎥"},{titleKey:"tut.ready.title",bodyKey:"tut.ready.body",icon:"🚀"}];function vy(){try{return localStorage.getItem(Id)==="1"}catch{return!1}}function yy(){try{return localStorage.getItem(Od)!==null}catch{return!1}}function My(){try{localStorage.setItem(Id,"1")}catch{}}function Sy(){try{localStorage.setItem(Od,"1")}catch{}}function Ey(n){const t=document.querySelector(n);if(!t)return null;const e=t.getBoundingClientRect();return{top:e.top,left:e.left,width:e.width,height:e.height}}function by(n,t,e){const i=n.getBoundingClientRect(),s=24;let r,o;e==="right"?(r=t.top+(t.height-i.height)/2,o=t.left+t.width+s):e==="left"?(r=t.top+(t.height-i.height)/2,o=t.left-i.width-s):e==="above"?(r=t.top-i.height-s,o=t.left+(t.width-i.width)/2):(r=(window.innerHeight-i.height)/2,o=(window.innerWidth-i.width)/2),r=Math.max(16,Math.min(r,window.innerHeight-i.height-16)),o=Math.max(16,Math.min(o,window.innerWidth-i.width-16)),n.style.top=`${r}px`,n.style.left=`${o}px`}function Ty(n,t,e){const i=n.getBoundingClientRect();let s,r,o,a;return t?(o=t.left+t.width/2,a=t.top+t.height/2,e==="above"?(s=i.left+i.width/2,r=i.top+i.height):e==="right"?(s=i.left,r=i.top+i.height/2):e==="left"?(s=i.left+i.width,r=i.top+i.height/2):(s=i.left+i.width/2,r=i.top+i.height),{cx:s,cy:r,sx:o,sy:a}):null}function Cy(n,t,e){if(!En)return;const i=Ty(n,t,e);if(!i){En.style.display="none";return}const{cx:s,cy:r,sx:o,sy:a}=i,c=40,l=Math.min(s,o)-c,u=Math.min(r,a)-c,h=Math.max(s,o)+c,d=Math.max(r,a)+c;En.style.display="block",En.style.left=`${l}px`,En.style.top=`${u}px`,En.style.width=`${h-l}px`,En.style.height=`${d-u}px`,En.setAttribute("viewBox",`0 0 ${h-l} ${d-u}`);const p=s-l,g=r-u,_=o-l,m=a-u;En.innerHTML=`
    <line x1="${p}" y1="${g}" x2="${_}" y2="${m}"
      stroke="var(--accent)" stroke-width="2" stroke-dasharray="6 4" opacity="0.6" />
    <circle cx="${_}" cy="${m}" r="4" fill="var(--accent)" opacity="0.8" />
  `}function Ay(n){const t=Zt.querySelector(".tut-spotlight");if(!n){t.style.display="none";return}t.style.display="block",t.style.top=`${n.top}px`,t.style.left=`${n.left}px`,t.style.width=`${n.width}px`,t.style.height=`${n.height}px`,Zt.style.setProperty("--spotlight-top",`${n.top}px`),Zt.style.setProperty("--spotlight-left",`${n.left}px`),Zt.style.setProperty("--spotlight-width",`${n.width}px`),Zt.style.setProperty("--spotlight-height",`${n.height}px`)}function wy(){let n='<div class="tut-timeline">';for(let t=0;t<er.length;t++){const e=t<An?"done":t===An?"active":"";n+=`<div class="tut-tl-seg ${e}"><div class="tut-tl-fill"></div></div>`}return n+="</div>",n}function Ho(){if(!Zt)return;const n=er[An],t=Zt.querySelector(".tut-content"),e=Zt.querySelector(".tut-card");t.innerHTML=`
    <div class="tut-step-header">
      <div class="tut-icon-badge">${n.icon}</div>
      <div class="tut-step-text">
        <div class="tut-step-label">Step ${An+1} of ${er.length}</div>
        <h2 class="tut-title">${nt(n.titleKey)}</h2>
      </div>
    </div>
    <p class="tut-body">${nt(n.bodyKey)}</p>
    ${wy()}
    <div class="tut-kbd-hint">
      <span>← →</span> navigate &nbsp;·&nbsp; <span>Esc</span> skip
    </div>
  `;const i=n.highlight?Ey(n.highlight):null;Ay(i),requestAnimationFrame(()=>{by(e,i,n.cardPos),requestAnimationFrame(()=>{Cy(e,i,n.cardPos)})});const s=Zt.querySelector(".tut-prev"),r=Zt.querySelector(".tut-next");s.disabled=An===0,r.textContent=An===er.length-1?nt("tut.finish"):nt("tut.next"),e.classList.remove("tut-card-enter"),e.offsetWidth,e.classList.add("tut-card-enter")}function uc(){Zt&&(Zt.remove(),Zt=null,En=null,document.removeEventListener("keydown",Nd),window.removeEventListener("resize",Ud),My())}function Nd(n){Zt&&(n.key==="Escape"&&uc(),(n.key==="ArrowRight"||n.key==="Enter")&&Fd(),n.key==="ArrowLeft"&&Hd())}function Ud(){Zt&&Ho()}function Fd(){An<er.length-1?(An++,Ho()):uc()}function Hd(){An>0&&(An--,Ho())}function Ry(){Zt||(Zt=document.createElement("div"),Zt.className="lang-overlay",Zt.innerHTML=`
    <div class="lang-card">
      <h1 class="lang-title">${nt("lang.select.title")}</h1>
      <p class="lang-subtitle">${nt("lang.select.subtitle")}</p>
      <div class="lang-options">
        <button class="lang-btn" data-lang="en">
          <span class="lang-flag">🇺🇸</span>
          <span class="lang-name">${nt("lang.en")}</span>
        </button>
        <button class="lang-btn" data-lang="vi">
          <span class="lang-flag">🇻🇳</span>
          <span class="lang-name">${nt("lang.vi")}</span>
        </button>
      </div>
    </div>
  `,document.body.appendChild(Zt),Zt.querySelectorAll(".lang-btn").forEach(n=>{n.addEventListener("click",()=>{const t=n.dataset.lang;hd(t),Sy(),Zt.remove(),Zt=null,setTimeout(hc,300)})}))}function hc(){Zt||(Zt=document.createElement("div"),Zt.className="tut-overlay",Zt.innerHTML=`
    <div class="tut-spotlight"></div>
    <svg class="tut-callout" style="display:none;"></svg>
    <div class="tut-card">
      <button class="tut-skip" aria-label="Skip tutorial">${nt("tut.skip")}</button>
      <div class="tut-content"></div>
      <div class="tut-nav">
        <button class="tut-prev">${nt("tut.prev")}</button>
        <button class="tut-next">${nt("tut.next")}</button>
      </div>
    </div>
  `,document.body.appendChild(Zt),En=Zt.querySelector(".tut-callout"),Zt.querySelector(".tut-skip").addEventListener("click",uc),Zt.querySelector(".tut-prev").addEventListener("click",Hd),Zt.querySelector(".tut-next").addEventListener("click",Fd),document.addEventListener("keydown",Nd),window.addEventListener("resize",Ud),An=0,Ho())}function Py(){yy()?vy()||setTimeout(hc,800):setTimeout(Ry,500)}function fr(n){return Se(n)||Kv(n)||dc.find(t=>t.sym===n)}const Ul=Yv.filter(n=>n&&typeof n.formula=="string"&&n.formula.trim()?!0:(console.warn("challenges.js: skipping malformed entry",n),!1));Pv();const ot=new Map,Rt=new Map,Jt=new Map;let Ae=1,Ee=null,Wi=null,ao=!0,Js=!1;const dc=[],Xi=new Set,nr=[];let hi=new Map;const Fl=new Map;let Je=[],ve=[];const Ls=new Map,ei=new Map;let Gt=null,fc=null,pc=!1,pi=null,Bd="mouse";const Ve=new Set,xo=new Set,pn=[],Hl=new Set;let mc=!1;const kd="mol3d.discoveries.v1",jn=document.getElementById("scene-wrap"),Ye=new Yx({antialias:!0,powerPreference:"low-power"});Ye.setPixelRatio(Math.min(1.5,window.devicePixelRatio||1));Ye.setSize(jn.clientWidth,jn.clientHeight);jn.appendChild(Ye.domElement);const he=new Kp;he.background=new Lt(856343);he.fog=new tc(856343,34,80);const we=new hn(50,jn.clientWidth/jn.clientHeight,.1,200);we.position.set(0,4.2,10.5);he.add(new om(16777215,3358799,1.05));const zd=new jh(16777215,1.5);zd.position.set(6,10,8);he.add(zd);const Vd=new jh(8956671,.4);Vd.position.set(-6,4,-6);he.add(Vd);let Ni=new Zh(60,60,3159613,1909546);Ni.position.y=-1.7;he.add(Ni);Ye.domElement.addEventListener("pointerdown",pM);const xn=new jx(we,Ye.domElement);xn.enableDamping=!0;xn.dampingFactor=.08;xn.target.set(0,1.6,0);xn.minDistance=2.5;xn.maxDistance=45;xn.maxPolarAngle=Math.PI*.55;xn.addEventListener("change",Ke);const xs=Jv({camera:we,controls:xn});window.addEventListener("pointermove",mM);window.addEventListener("pointerup",_M);window.addEventListener("resize",()=>{we.aspect=jn.clientWidth/jn.clientHeight,we.updateProjectionMatrix(),Ye.setSize(jn.clientWidth,jn.clientHeight),Ke()});let vo=new vi(1,16,12),pr=new Lo(1,1,1,10,1,!0);const gc=320,yo=1280,Ly=new Qn;new Lt(16777215);const Dy=new Lt(10135475),Iy=new Lt(15774761),lh=new Lt(5809919),Oy=new Lt(4176208),Ny=new Lt(16273737),Uy=new Lt(15774761),Fy=[0],Hy=[-.12,.12],By=[-.18,0,.18],ky=new qh({color:16777215,shininess:70,specular:5592405}),zy=new qh({color:16777215,shininess:20,specular:1579032}),Vy=new $h({color:16777215}),Gy=new $h({color:16777215,transparent:!0,opacity:.9}),Dn=new Po(vo,ky,gc),In=new Po(vo,zy,gc),bn=new Po(pr,Vy,yo),Tn=new Po(pr,Gy,yo);for(const n of[Dn,In,bn,Tn])n.frustumCulled=!1,n.instanceMatrix.setUsage(yp),he.add(n);const Gd=[],Wd=[],Xd=[],qd=[];Dn.userData.ids=Gd;In.userData.ids=Wd;bn.userData.ids=Xd;Tn.userData.ids=qd;const Qs=new Map,lo=new Map,Ys=new oe,cn=new D,bs=new D,Mo=new D,Qr=new D,Hi=new D,Ks=new D,Ia=new D,ch=new D,ir=new Qn,sr=new D,$d=new D(0,1,0),uh=new Lt,Yd=new Bi({color:4176208,transparent:!0,opacity:.55}),Kn=new ze(pr,Yd);Kn.visible=!1;he.add(Kn);const Oa=["auto","low","med","high"];let yr="auto",Ds=1;const Kd=new Zv,jd=new jv;let hh=0;const So=document.getElementById("fps-chip"),Bl=document.getElementById("btn-quality");function Wy(){return gd[Yi[Ds]]}function Zd(n){Ds=n;const t=gd[Yi[n]];Ye.setPixelRatio(Math.min(t.pixelRatio,window.devicePixelRatio||1));const e=new vi(1,t.sphereSeg[0],t.sphereSeg[1]),i=new Lo(1,1,1,t.cylSeg,1,!0);for(const s of[Dn,In])s.geometry=e;for(const s of[bn,Tn,Kn])s.geometry=i;vo.dispose(),pr.dispose(),vo=e,pr=i,Bo(),Ke()}function dh(){return nt(`quality.${Yi[Ds]}`)}function Eo(){return yr==="auto"?`${nt("quality.autoShort")} (${dh()})`:dh()}function Bo(){Bl&&(Bl.textContent=nt("btn.quality",{mode:Eo()})),So&&(So.textContent=`-- fps · ${Eo()}`)}function Jd(n){yr=n,jd.reset(),n!=="auto"&&Zd(Yi.indexOf(n)),Bo()}function Xy(n){if(n-hh<500)return;hh=n;const t=Kd.fps;if(yr==="auto"){const e=jd.update(t,Ds);e!==Ds&&(Zd(e),$t(nt("status.autoAdjusted",{tier:nt(`quality.${Yi[e]}`),fps:Math.round(t)})))}So&&(So.textContent=`${Math.round(t)} fps · ${Eo()}`)}const Na=new Map;function qy(n){if(Na.has(n))return Na.get(n);const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.font='bold 68px "Segoe UI", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle",e.lineWidth=10,e.lineJoin="round",e.strokeStyle="rgba(8,12,18,0.9)",e.strokeText(n,64,68),e.fillStyle="#f4f8ff",e.fillText(n,64,68);const i=new Gh(t);return Na.set(n,i),i}const Ua=new Map;function $y(n){if(Ua.has(n))return Ua.get(n);const t=document.createElement("canvas");t.width=128,t.height=64;const e=t.getContext("2d");e.font='bold 46px "Segoe UI", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle";const i=n>0?`${n}+`:`${-n}−`;e.lineWidth=8,e.lineJoin="round",e.strokeStyle="rgba(8,12,18,0.95)",e.strokeText(i,64,34),e.fillStyle=n>0?"#7ee787":"#ff9d96",e.fillText(i,64,34);const s=new Gh(t);return Ua.set(n,s),s}function Yy(){for(const[n,t]of ot)if(!Qs.has(n)){const i=.42+ti(t.el)*.55,s=new ou(new Rl({map:qy(t.el.sym),transparent:!0,depthWrite:!1}));s.scale.set(i,i,1),Qs.set(n,s),he.add(s);const r=new ou(new Rl({transparent:!0,depthWrite:!1}));r.scale.set(.62,.31,1),r.visible=!1,lo.set(n,r),he.add(r)}for(const[n,t]of Qs)ot.has(n)||(he.remove(t),t.material.dispose(),Qs.delete(n));for(const[n,t]of lo)ot.has(n)||(he.remove(t),t.material.dispose(),lo.delete(n))}const Ky=n=>1+2.70158*Math.pow(n-1,3)+1.70158*Math.pow(n-1,2);function jy(n,t){const e=Ls.get(n);if(e===void 0)return 1;const i=(t-e)/380;return i>=1?(Ls.delete(n),1):Math.max(.001,Ky(Math.max(0,i)))}function Zy(n,t){const e=ot.get(n);t.set(e.el.color),xo.has(n)&&t.lerp(Uy,.5),n===fc?t.lerp(pc?Oy:Ny,.55):n===Ee?t.lerp(lh,.45):n===Wi&&t.lerp(lh,.18)}function ko(){const n=performance.now();let t=0,e=0;for(const[r,o]of ot){const a=rd(o.el.cat),c=a?Dn:In,l=a?t++:e++;if(l>=gc)continue;const u=ti(o.el)*jy(r,n);cn.set(o.pos.x,o.pos.y,o.pos.z),Qr.setScalar(u),Ys.compose(cn,Ly,Qr),c.setMatrixAt(l,Ys),Zy(r,uh),c.setColorAt(l,uh),(a?Gd:Wd)[l]=r}Dn.count=t,In.count=e,Dn.instanceMatrix.needsUpdate=!0,In.instanceMatrix.needsUpdate=!0,Dn.instanceColor&&(Dn.instanceColor.needsUpdate=!0),In.instanceColor&&(In.instanceColor.needsUpdate=!0),Dn.boundingSphere=null,In.boundingSphere=null;let i=0,s=0;for(const r of Rt.values()){const o=ot.get(r.a),a=ot.get(r.b);if(!o||!a)continue;bs.set(o.pos.x,o.pos.y,o.pos.z),Mo.set(a.pos.x,a.pos.y,a.pos.z),Hi.subVectors(Mo,bs);const c=Hi.length()||1e-4;Ks.copy(Hi).divideScalar(c),Ia.set(0,1,0),Math.abs(Ks.y)>.9&&Ia.set(1,0,0),ch.crossVectors(Ks,Ia).normalize();const l=r.order===1?Fy:r.order===2?Hy:By,u=r.ionic?.06:.075;ir.setFromUnitVectors($d,Ks);for(let h=0;h<r.order;h++)if(cn.copy(bs).addScaledVector(Ks,c/2).addScaledVector(ch,l[h]),Qr.set(u,c,u),Ys.compose(cn,ir,Qr),r.ionic){if(s>=yo)break;Tn.setMatrixAt(s,Ys),Tn.setColorAt(s,Iy),qd[s]=r.id,s++}else{if(i>=yo)break;bn.setMatrixAt(i,Ys),bn.setColorAt(i,Dy),Xd[i]=r.id,i++}}bn.count=i,Tn.count=s,bn.instanceMatrix.needsUpdate=!0,Tn.instanceMatrix.needsUpdate=!0,bn.instanceColor&&(bn.instanceColor.needsUpdate=!0),Tn.instanceColor&&(Tn.instanceColor.needsUpdate=!0),bn.boundingSphere=null,Tn.boundingSphere=null}function Qd(){we.getWorldDirection(sr);for(const[n,t]of Qs){const e=ot.get(n);if(!e)continue;const i=ti(e.el);t.position.set(e.pos.x,e.pos.y,e.pos.z).addScaledVector(sr,-(i+.1))}for(const[n,t]of lo){const e=ot.get(n);if(!e)continue;const i=Fl.get(n),s=ao&&i!==void 0;if(t.visible=s,!s)continue;t.userData.fc!==i&&(t.material.map=$y(i),t.material.needsUpdate=!0,t.userData.fc=i);const r=ti(e.el);t.position.set(e.pos.x,e.pos.y,e.pos.z).addScaledVector(sr,-(r+.48))}}function Re(n){return[...n.atoms].sort((t,e)=>t-e).join(",")}function Ce(n=new Set){ve=No(ot,Rt);const t=new Set(ve.map(Re));for(const i of[...Jt.keys()])t.has(i)||Jt.delete(i);for(const i of[...Ve])t.has(i)||Ve.delete(i);Mc(),Mr(),Je=ve.map(i=>vv(ot,Rt,i,Jt.has(Re(i))?Jt.get(Re(i)):null));const e=Cv(ot,Rt,ve,Je,n);hi=new Map;for(const[i,s]of e)hi.set(i,{x:s.x,y:s.y,z:s.z});for(const i of ot.keys())if(!hi.has(i)){const s=ot.get(i).pos;hi.set(i,{x:s.x,y:s.y,z:s.z})}if(Gt){const i=ot.get(Gt.id).pos;hi.set(Gt.id,{x:i.x,y:i.y,z:i.z})}for(const i of[...ei.keys()])t.has(i)||ei.delete(i);return Jy(),Qy(),bc(),Tc(),bM(),Sf(),Yy(),document.getElementById("hint").style.display=ot.size?"none":"flex",Ke(),ve}function Jy(){Fl.clear();for(const n of Je)if(n.feasible)for(const[t,e]of n.per)e.fc!==0&&Fl.set(t,e.fc)}function tf(n,t){return`${n}|${t}`}function _c(n,t){if(!t.feasible)return null;try{return Wv(n.atoms.map(e=>ot.get(e)),n.bonds,t.formula,t.charge,t.per)||null}catch{return null}}function Qy(){for(let n=0;n<ve.length;n++){const t=ve[n],e=Je[n];if(!e||!e.feasible||t.bonds.length===0||t.atoms.length<2)continue;const i=tf(e.formula,e.charge);if(Hl.has(i))continue;Hl.add(i);const s=_c(t,e);pn.push({formula:e.formula,charge:e.charge,name:s,t:Date.now(),saved:!1}),mc=!0,qo(nt("toast.newDisc",{f:Ps(e.formula)+_r("",e.charge),name:s?` — ${s}`:""}))}zo()}function tM(){try{const n=JSON.parse(localStorage.getItem(kd)||"[]");for(const t of n)!t||!t.formula||(t.saved=!0,pn.push(t),Hl.add(tf(t.formula,t.charge??0)))}catch{}}function ef(){if(pn.length)try{localStorage.setItem(kd,JSON.stringify(pn));for(const n of pn)n.saved=!0;mc=!1,zo(),qo(nt("toast.saved",{n:pn.length,s:pn.length>1?"s":""}))}catch{$t(nt("status.saveFail"),"err")}}function zo(){const n=document.getElementById("disc-list"),t=document.getElementById("disc-count"),e=document.getElementById("btn-save-disc");if(n){if(t.textContent=pn.length?String(pn.length):"",!pn.length){n.textContent=nt("dex.discEmpty"),e.disabled=!0;return}n.textContent="";for(const i of pn){const s=document.createElement("div");s.className="disc-row";const r=document.createElement("span");r.className="d-f",r.textContent=Ps(i.formula)+_r("",i.charge??0);const o=document.createElement("span");if(o.className="d-n",o.textContent=i.name||nt("dex.unknown"),o.title=i.name||"",s.append(r,o),!i.saved){const a=document.createElement("span");a.className="d-dot",a.title=nt("dex.notSaved"),s.appendChild(a)}n.appendChild(s)}e.disabled=!mc}}const Vo=n=>({id:n.id,el:n.el,pos:{x:n.pos.x,y:n.pos.y,z:n.pos.z}});function ii(n){nr.push(n),nr.length>200&&nr.shift(),Ac()}function nf(n,t){const e=ad(ot,Rt,n,t);if(!e.ok)return $t(Uo(e.reason),"err"),!1;const i=ki(ot,Rt,n),s=ki(ot,Rt,t),r=i!==s,o=r?Re(i):null,a=r?Re(s):null,c=r?Jt.get(o):void 0,l=r?Jt.get(a):void 0;r&&(Jt.delete(o),Jt.delete(a));const u=Ae++;Rt.set(u,{id:u,a:n,b:t,order:1,ionic:e.type==="ionic"}),r&&c!==void 0!=(l!==void 0)&&Jt.set(Re(ki(ot,Rt,n)),c!==void 0?c:l),ii({type:"bond",bondId:u}),Ce();const h=ot.get(n).el.sym,d=ot.get(t).el.sym;return $t(e.type==="ionic"?nt("status.ionicBond",{a:h,b:d}):nt("status.covBond",{a:h,b:d}),"ok"),!0}function sf(n,t=!0){const e=Rt.get(n);if(!e)return;const i=ki(ot,Rt,e.a),s=Re(i),r=Jt.get(s);if(Rt.delete(n),r!==void 0){const o=No(ot,Rt).filter(c=>c.atoms.some(l=>i.atoms.includes(l))&&c.bonds.length>0),a=o.find(c=>c.atoms.includes(e.a))||o.find(c=>c.atoms.includes(e.b))||o[0];a&&Jt.set(Re(a),r)}t&&ii({type:"delBond",snap:{...e}}),Ce()}function xc(n,t=!0){const e=ot.get(n);if(!e)return;const i=ki(ot,Rt,n),s=Re(i),r=Jt.get(s),o=Jn(ot,Rt,n).map(a=>({...a}));for(const a of o)Rt.delete(a.id);if(ot.delete(n),Ee===n&&(Ee=null,wc()),Wi===n&&(Wi=null),r!==void 0){const a=No(ot,Rt).filter(c=>c.atoms.some(l=>i.atoms.includes(l))&&c.bonds.length>0).sort((c,l)=>l.atoms.length-c.atoms.length);a[0]&&Jt.set(Re(a[0]),r)}t&&ii({type:"delAtom",atom:Vo(e),bonds:o}),Ce()}function rf(n,t){const e=Rt.get(n);e&&(ii({type:"order",bondId:n,prev:e.order}),e.order=t,Ce(),$t(e.ionic?nt("status.orderIonic",{n:t}):nt("status.orderCov",{n:t}),"ok"))}const Fa=new Map;function eM(n){const t=Rt.get(n);if(!t)return;let e=Fa.get(n)||1,i=t.order+e;if(i>4)i=3,e=-1;else if(i<1){sf(n),Fa.delete(n);return}Fa.set(n,e),rf(n,i)}function of(n){const t=Rt.get(n);if(!t)return;const e=ld(ot,Rt,t);if(!e.ok){$t(Uo(e.reason),"err");return}rf(n,t.order+1)}function vc(n){const t=typeof n=="string"?fr(n):n;if(!t)return;let e=null;for(let s=0;s<60;s++){const r=Math.random()*Math.PI*2,o=1.2+Math.random()*3.4,a={x:Math.cos(r)*o,y:1.6+(Math.random()-.5)*2.6,z:Math.sin(r)*o};let c=!0;for(const[,l]of ot)if(Math.hypot(l.pos.x-a.x,l.pos.y-a.y,l.pos.z-a.z)<ti(l.el)+ti(t)+.5){c=!1;break}if(c){e=a;break}}e||(e={x:Ae%7*1.5-4.5,y:6,z:0});const i=Ae++;return ot.set(i,{id:i,el:t,pos:e}),Ls.set(i,performance.now()),ii({type:"add",id:i}),Us(i),Ce(),$t(nt("status.placed",{name:Nn(t)}),"info"),i}function af(){if(Ee===null||!ot.has(Ee)){$t(nt("status.noSelection"),"err");return}const n=ve.find(r=>r.atoms.includes(Ee));if(!n)return;const t=new Map,e=[];n.atoms.reduce((r,o)=>r+ot.get(o).pos.x,0)/n.atoms.length,n.atoms.reduce((r,o)=>r+ot.get(o).pos.y,0)/n.atoms.length,n.atoms.reduce((r,o)=>r+ot.get(o).pos.z,0)/n.atoms.length;for(const r of n.atoms){const o=ot.get(r),a=Ae++;t.set(r,a),e.push({id:a,el:o.el,pos:{x:o.pos.x+2.5,y:o.pos.y,z:o.pos.z}})}ii({type:"duplicate",originalIds:[...n.atoms],newIds:[...t.values()]});for(const r of e)ot.set(r.id,r),Ls.set(r.id,performance.now());for(const r of n.bonds){const o=t.get(r.a),a=t.get(r.b);o!==void 0&&a!==void 0&&(Rt.set(Ae,{id:Ae,a:o,b:a,order:r.order,ionic:r.ionic}),Ae++)}const i=Re(n),s=[...t.values()].sort((r,o)=>r-o).join(",");Jt.has(i)&&Jt.set(s,Jt.get(i)),Us([...t.values()][0]),Ce(),$t(nt("status.duplicated"),"info")}function lf(){if(!(!ot.size&&!Rt.size&&!Jt.size)){ii({type:"clear",atoms:[...ot.values()].map(Vo),bonds:[...Rt.values()].map(n=>({...n})),overrides:[...Jt],nextId:Ae});for(const n of[...Rt.keys()])Rt.delete(n);for(const n of[...ot.keys()])ot.delete(n);ot.clear(),Rt.clear(),Jt.clear(),ei.clear(),Ee=null,Wi=null,ni(),Ce(),$t(nt("status.cleared"),"info")}}function yc(){const n=nr.pop();if(Ac(),!n){$t(nt("status.nothingUndo"));return}switch(n.type){case"add":xc(n.id,!1);break;case"bond":sf(n.bondId,!1);break;case"delBond":{const t=n.snap;Rt.set(t.id,{...t}),Ce();break}case"order":{const t=Rt.get(n.bondId);t&&(t.order=n.prev),Ce();break}case"delAtom":{const t=n.atom;ot.set(t.id,t);for(const e of n.bonds)Rt.set(e.id,{...e});Ce();break}case"clear":{for(const t of n.atoms)ot.set(t.id,t);for(const t of n.bonds)Rt.set(t.id,{...t});for(const[t,e]of n.overrides)Jt.set(t,e);Ae=Math.max(Ae,n.nextId),Ce();break}case"duplicate":{for(const t of n.newIds)ot.delete(t),Ls.delete(t);for(const t of[...Rt.values()])(n.newIds.includes(t.a)||n.newIds.includes(t.b))&&Rt.delete(t.id);Ce();break}case"snapshot":{ot.clear(),Rt.clear(),Jt.clear(),ei.clear();for(const t of n.atoms)ot.set(t.id,t);for(const t of n.bonds)Rt.set(t.id,{...t});for(const[t,e]of n.overrides)Jt.set(t,e);Ae=Math.max(Ae,n.nextId),Ee=null,Wi=null,ni(),Ce();break}}$t(nt("status.undone"))}const ms=.4,nM=10.5,iM=-.2,sM=4.6;function bo(){return new D(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize()}function cf(n){if(!Wy().drift||Gt||ve.length===0)return!1;let t=!1;for(const e of ve){const i=Re(e);let s=ei.get(i);s||(s={v:bo().multiplyScalar(ms*(.7+Math.random()*.6)),axis:bo(),rate:.08+Math.random()*.18},ei.set(i,s));const r=s.v.length()||1e-4;r>ms*1.001?s.v.multiplyScalar(Math.max(ms,r-n*2.2)/r):r<ms*.999&&s.v.setLength(Math.min(ms,r+n*.4));const o=new D;for(const c of e.atoms){const l=ot.get(c).pos;o.x+=l.x,o.y+=l.y,o.z+=l.z}o.divideScalar(e.atoms.length),(Math.hypot(o.x,o.z)>nM||o.y<iM||o.y>sM)&&(sr.set(-o.x,1.9-o.y,-o.z).normalize(),s.v.lerp(sr,Math.min(1,n*1.6)).setLength(ms)),ir.setFromAxisAngle(s.axis,s.rate*n);for(const c of e.atoms){const l=ot.get(c);cn.set(l.pos.x,l.pos.y,l.pos.z).sub(o).applyQuaternion(ir).add(o).addScaledVector(s.v,n),l.pos.x=cn.x,l.pos.y=cn.y,l.pos.z=cn.z;const u=hi.get(c);u&&(cn.set(u.x,u.y,u.z).sub(o).applyQuaternion(ir).add(o).addScaledVector(s.v,n),u.x=cn.x,u.y=cn.y,u.z=cn.z)}t=!0}return t}const Ha=document.getElementById("rxn-panel"),rM=document.getElementById("rxn-count"),fh=document.getElementById("rxn-conds"),mi=n=>nt(`cond.${n}`);function Mc(){xo.clear();for(const n of ve)if(Ve.has(Re(n)))for(const t of n.atoms)xo.add(t)}function ni(){Ve.size&&(Ve.clear(),xo.clear(),Mr(),Ke())}function Mr(){if(Ha){if(Ve.size===0){Ha.style.display="none";return}Ha.style.display="flex",rM.textContent=nt("rxn.count",{n:Ve.size,s:Ve.size>1?"s":""})}}function uf(){const n=[];for(let t=0;t<ve.length;t++)Ve.has(Re(ve[t]))&&n.push(Je[t]?Je[t].formula:"");return n}function Go(n){const t="₀₁₂₃₄₅₆₇₈₉";return n.replace(/->/g,"→").replace(new RegExp("(?<=[A-Za-z)\\]])\\d+","g"),e=>[...e].map(i=>t[+i]).join(""))}function oM(){if(fh){for(const n of _d){const t=document.createElement("button");t.textContent=mi(n.key),t.dataset.cond=n.key,t.addEventListener("click",()=>aM(n.key)),fh.appendChild(t)}document.getElementById("rxn-cancel").addEventListener("click",()=>{ni(),$t(nt("status.reactionCancelled"))})}}function aM(n){const t=uf(),e=cc(t,n);if(e){df(e);return}const i=Dd(t);if(!i.size){$t(nt("status.noReaction"),"err");return}if(i.has(n)){const s=xy(t,n);$t(s?nt("status.notEnough",{more:Go(s),cond:mi(n).toLowerCase()}):nt("status.nothingHappens",{cond:mi(n)}),"err");return}$t(nt("status.nothingHappensTry",{cond:mi(n),valid:[...i].map(s=>mi(s)).join(", ")}),"err")}let Ba=null;function hf(n){const t=document.getElementById("rxn-overlay"),e=t.querySelector(".rxn-condition"),i=t.querySelector(".rxn-equation");e.textContent=mi(n.condition),i.innerHTML=Go(n.equation),t.classList.add("show"),t.setAttribute("aria-hidden","false"),Ba&&clearTimeout(Ba),Ba=setTimeout(()=>{t.classList.remove("show"),t.setAttribute("aria-hidden","true")},3e3)}function df(n){const t=ve.filter(h=>Ve.has(Re(h)));if(!t.length)return;const e=t.map(h=>Je[ve.indexOf(h)]?.formula??"");if(!cc(e,n.condition)){$t(nt("status.sceneChanged"),"err"),ni();return}const i=[];for(const h of t)for(const d of h.atoms)i.push(d);const s=new Set(i),r=new D;for(const h of i){const d=ot.get(h).pos;r.x+=d.x,r.y+=d.y,r.z+=d.z}r.divideScalar(i.length),ii({type:"snapshot",atoms:[...ot.values()].map(Vo),bonds:[...Rt.values()].map(h=>({...h})),overrides:[...Jt],nextId:Ae});for(const h of[...Rt.values()])(s.has(h.a)||s.has(h.b))&&Rt.delete(h.id);if(n.effect){lM(n,i,r);return}const o=new Map;for(const h of i){const d=ot.get(h).el.sym;o.has(d)||o.set(d,[]),o.get(d).push(h)}const a=[];for(const[h,d]of n.products)for(let p=0;p<d;p++)a.push(h);let c=0;for(let h=1;h<a.length;h++)Da(a[h]).atoms.length>Da(a[c]).atoms.length&&(c=h);const l=Math.PI*(3-Math.sqrt(5)),u=[];for(let h=0;h<a.length;h++){const d=Da(a[h]);let p=r;if(h!==c){const f=Math.random()*Math.PI*2,E=3.2+Math.random()*1.8+h*.9;p=new D(r.x+Math.cos(f)*E,Math.max(.8,Math.min(4.2,r.y+(Math.random()-.5)*1.6)),r.z+Math.sin(f)*E)}const g=[],_=d.atoms.length;for(let f=0;f<_;f++){const E=d.atoms[f];let b=o.get(E)?.pop();b===void 0&&(b=Ae++,ot.set(b,{id:b,el:fr(E),pos:{x:p.x,y:p.y,z:p.z}}));const y=_===1?0:1-2*f/(_-1),w=Math.sqrt(Math.max(0,1-y*y)),R=l*f;ot.get(b).pos={x:p.x+Math.cos(R)*w*.85,y:Math.max(-.4,Math.min(5.2,p.y+y*.85)),z:p.z+Math.sin(R)*w*.85},g.push(b)}for(const[f,E,b,y]of d.bonds)Rt.set(Ae,{id:Ae,a:g[f],b:g[E],order:b,ionic:!!y}),Ae++;const m=[...g].sort((f,E)=>f-E).join(",");d.charge&&Jt.set(m,d.charge),u.push({key:m,center:p,i:h})}for(const[,h]of o)for(const d of h)ot.delete(d);ni(),Ee=null,Ce();for(const{key:h,center:d,i:p}of u){if(p===c){ei.delete(h);continue}const g=new D(d.x-r.x,d.y-r.y,d.z-r.z).normalize();ei.set(h,{v:g.multiplyScalar(2.6+Math.random()*1.4).add(new D(0,.7,0)),axis:bo(),rate:.1+Math.random()*.2})}$t(nt("status.reactionDone",{cond:mi(n.condition),eq:Go(n.equation)}),"ok"),hf(n)}const zi=[];function lM(n,t,e){for(const a of t)ot.delete(a);ni(),Ee=null,Ce();const s={annihilate:16777215,explode:16729088,merge:16766720,quantum:61695,decay:65344,plasma:13387007}[n.effect]||16777215,r=n.effect==="explode"?60:n.effect==="plasma"?50:30;for(let a=0;a<r;a++){const c=new vi(.08+Math.random()*.12,6,4),l=new Bi({color:s,transparent:!0,opacity:1}),u=new ze(c,l);u.position.copy(e);const h=bo(),d=1.5+Math.random()*4;he.add(u),zi.push({mesh:u,geo:c,mat:l,v:h.multiplyScalar(d),life:1,decay:.4+Math.random()*.8})}if(n.effect==="explode"&&hM(.4,600),n.effect==="annihilate"&&ph(16777215,500),n.effect==="plasma"&&ph(8913151,300),n.effect==="merge"){const a=new vi(.5,16,12),c=new Bi({color:16766720,transparent:!0,opacity:.9}),l=new ze(a,c);l.position.copy(e),he.add(l),zi.push({mesh:l,geo:a,mat:c,v:new D(0,0,0),life:1,decay:.3,grow:!0})}if(n.effect==="quantum")for(let a=0;a<8;a++){const c=new vi(.15,8,6),l=new Bi({color:61695,transparent:!0,opacity:.7}),u=new ze(c,l),h=Math.random()*Math.PI*2,d=.5+Math.random()*1.5;u.position.set(e.x+Math.cos(h)*d,e.y+(Math.random()-.5)*2,e.z+Math.sin(h)*d),he.add(u),zi.push({mesh:u,geo:c,mat:l,v:new D(0,0,0),life:1,decay:.5+Math.random()*.5,flicker:!0})}const o={annihilate:"ANNIHILATION!",explode:"BOOM!",merge:"ULTIMATE ALLOY!",quantum:"SUPERPOSITION!",decay:"DECAY!",plasma:"PLASMA STORM!"};qo(o[n.effect]||n.effect),$t(nt("status.mayhemEffect",{effect:o[n.effect],eq:Go(n.equation)}),"ok"),hf(n)}function cM(n){for(let t=zi.length-1;t>=0;t--){const e=zi[t];if(e.life-=n*e.decay,e.life<=0){he.remove(e.mesh),e.geo.dispose(),e.mat.dispose(),zi.splice(t,1);continue}if(e.mesh.position.addScaledVector(e.v,n),e.v.multiplyScalar(1-n*2),e.mat.opacity=e.life,e.grow){const i=.5+(1-e.life)*3;e.mesh.scale.setScalar(i)}e.flicker&&(e.mesh.visible=Math.random()>.3,e.mesh.position.x+=(Math.random()-.5)*.1,e.mesh.position.y+=(Math.random()-.5)*.1,e.mesh.position.z+=(Math.random()-.5)*.1)}}let ff=0,vs=0,pf=0;const js=new D,uM=new D;function hM(n,t){ff=n,vs=t,pf=performance.now(),uM.copy(we.position)}function dM(n){if(!vs)return;const t=n-pf;if(t>vs){vs=0,we.position.sub(js),js.set(0,0,0);return}const e=1-t/vs,i=ff*e,s=(Math.random()-.5)*2*i,r=(Math.random()-.5)*2*i,o=(Math.random()-.5)*2*i;we.position.sub(js),js.set(s,r,o),we.position.add(js)}let ln=null;function ph(n,t){ln&&(he.remove(ln),ln.geometry.dispose(),ln.material.dispose());const e=new vi(50,8,6),i=new Bi({color:n,transparent:!0,opacity:.6,side:$e});ln=new ze(e,i),ln.position.copy(we.position),he.add(ln);const s=performance.now();function r(){const a=(performance.now()-s)/t;if(a>=1){he.remove(ln),ln.geometry.dispose(),ln.material.dispose(),ln=null;return}ln.material.opacity=.6*(1-a),requestAnimationFrame(r)}requestAnimationFrame(r)}const Si=new um,Is=new At;function Wo(n){const t=Ye.domElement.getBoundingClientRect();Is.x=(n.clientX-t.left)/t.width*2-1,Is.y=-((n.clientY-t.top)/t.height)*2+1}function Sc(){ko(),Si.setFromCamera(Is,we);let n=null,t=1/0;for(const e of[Dn,In])for(const i of Si.intersectObject(e))i.instanceId!==void 0&&i.distance<t&&(t=i.distance,n=e.userData.ids[i.instanceId]);return n}function fM(){ko(),Si.setFromCamera(Is,we);let n=null,t=1/0;for(const e of[bn,Tn])for(const i of Si.intersectObject(e))i.instanceId!==void 0&&i.distance<t&&(t=i.distance,n=e.userData.ids[i.instanceId]);return n}function pM(n){if(Bd=n.pointerType||"mouse",n.button!==0)return;Wo(n);const t=Sc();if(pi={x:n.clientX,y:n.clientY,atomId:t},t!==null){n.stopImmediatePropagation(),xn.enabled=!1,Us(t);const e=ot.get(t),i=we.getWorldDirection(new D).negate(),s=new $n().setFromNormalAndCoplanarPoint(i,new D(e.pos.x,e.pos.y,e.pos.z));Si.setFromCamera(Is,we);const r=new D,a=Si.ray.intersectPlane(s,r)?r.sub(new D(e.pos.x,e.pos.y,e.pos.z)):new D;Gt={id:t,plane:s,grabOffset:a,moved:!1,snapId:null,snapLegal:!1,snapMsg:"",snapUpgrade:!1},Ke()}}function mM(n){if(Wo(n),Gt){if(!Gt.moved&&pi&&Math.hypot(n.clientX-pi.x,n.clientY-pi.y)>4&&(Gt.moved=!0),!Gt.moved)return;Si.setFromCamera(Is,we);const e=new D;if(!Si.ray.intersectPlane(Gt.plane,e))return;e.sub(Gt.grabOffset);const i=ot.get(Gt.id);i.pos.x=e.x,i.pos.y=Math.max(-.4,Math.min(5.4,e.y)),i.pos.z=e.z,hi.set(Gt.id,{x:i.pos.x,y:i.pos.y,z:i.pos.z});let s=null,r=1/0;for(const[o,a]of ot){if(o===Gt.id)continue;const c=Math.hypot(a.pos.x-i.pos.x,a.pos.y-i.pos.y,a.pos.z-i.pos.z),l=(ti(i.el)+ti(a.el))*1.45+.25;c<l&&c<r&&(r=c,s=o)}if(Gt.snapId=s,s===null)Gt.snapLegal=!1,Gt.snapMsg="",Gt.snapUpgrade=!1;else{const o=[...Rt.values()].find(a=>a.a===Gt.id&&a.b===s||a.b===Gt.id&&a.a===s);if(o){const a=ld(ot,Rt,o);Gt.snapUpgrade=a.ok,Gt.snapLegal=a.ok,Gt.snapMsg=a.ok?nt("snap.upgradeTo",{n:o.order+1}):a.reason}else{const a=ad(ot,Rt,Gt.id,s);Gt.snapLegal=a.ok,Gt.snapMsg=a.ok?a.type==="ionic"?nt("snap.ionic"):nt("snap.bond"):a.reason}}fc=Gt.snapId,pc=Gt.snapLegal,Gt.snapMsg,gM(),Ke();return}if(n.target!==Ye.domElement)return;const t=Sc();t!==Wi&&(Wi=t,Ye.domElement.style.cursor=t!==null?"grab":"",Ke())}function gM(){if(!Gt||Gt.snapId===null){Kn.visible=!1;return}const n=ot.get(Gt.id),t=ot.get(Gt.snapId);bs.set(n.pos.x,n.pos.y,n.pos.z),Mo.set(t.pos.x,t.pos.y,t.pos.z),Hi.subVectors(Mo,bs);const e=Hi.length()||1e-4;Kn.position.copy(bs).addScaledVector(Hi,.5),Kn.quaternion.setFromUnitVectors($d,Hi.divideScalar(e)),Kn.scale.set(.16,e,.16),Yd.color.setHex(pc?4176208:16273737),Kn.visible=!0}function _M(n){if(xM(n),Gt){xn.enabled=!0;const t=Gt;if(Gt=null,fc=null,Kn.visible=!1,t.moved){if(t.snapId!==null){const e=[...Rt.values()].find(i=>i.a===t.id&&i.b===t.snapId||i.b===t.id&&i.a===t.snapId);e?t.snapUpgrade?of(e.id):$t(Uo(t.snapMsg),"err"):nf(t.id,t.snapId)}Ce(new Set([t.id]))}Ke();return}if(pi&&Math.hypot(n.clientX-pi.x,n.clientY-pi.y)<4&&pi.atomId===null){Wo(n);const t=fM();t!==null&&eM(t)}}let to=0,mh=0,gh=0;function xM(n){if((n.pointerType||"mouse")!=="touch"||n.target!==Ye.domElement)return;const t=performance.now();to&&t-to<350&&Math.hypot(n.clientX-mh,n.clientY-gh)<32?(to=0,mf(n)):(to=t,mh=n.clientX,gh=n.clientY)}Ye.domElement.addEventListener("dblclick",n=>{Bd!=="touch"&&mf(n)});function mf(n){Wo(n);const t=Sc();if(t===null){ni(),$t(nt("status.selCleared"));return}const e=ki(ot,Rt,t),i=Re(e);Ve.has(i)?(Ve.delete(i),$t(nt("status.selRemoved"))):(Ve.add(i),$t(nt("status.selAdded",{n:Ve.size}),"info")),Mc(),Mr(),Ke()}function vM(){const n=document.getElementById("ptable");n.innerHTML="";for(let e=1;e<=118;e++){const i=Oo.find(o=>o.z===e),s=dv(e),r=document.createElement("button");r.className="el",r.style.gridColumn=s.col,r.style.gridRow=s.row,r.style.borderColor=i.color,r.dataset.sym=i.sym,r.title=nt("el.title",{name:Nn(i),cat:dr(i.cat),max:i.maxBonds}),r.innerHTML=`<span class="z">${e}</span><span class="s">${i.sym}</span>`,r.addEventListener("click",()=>vc(i)),n.appendChild(r)}const t=document.createElement("div");t.className="el ph",t.style.gridColumn="3 / 13",t.style.gridRow="8",t.textContent=nt("ptable.ph"),n.appendChild(t)}function gf(){const n=document.getElementById("legend");n.innerHTML="";for(const[t,e]of Object.entries(fv)){const i=document.createElement("span");i.className="lg",i.innerHTML=`<i style="background:${e}"></i>${dr(t)}`,n.appendChild(i)}}const _h=n=>n.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D");function _f(){for(const n of document.querySelectorAll("#pool-list .el-chip")){const t=fr(n.dataset.sym);t&&(n.dataset.search=`${t.sym} ${t.name} ${t.z} ${Nn(t)} ${_h(t.name)} ${_h(Nn(t))}`.toLowerCase(),n.title=nt("el.title",{name:Nn(t),cat:dr(t.cat),max:t.maxBonds}),n.querySelector(".n").textContent=Nn(t))}for(const n of document.querySelectorAll("#ptable .el[data-sym]")){const t=fr(n.dataset.sym);t&&(n.title=nt("el.title",{name:Nn(t),cat:dr(t.cat),max:t.maxBonds}))}}function To(){vM();const n=document.getElementById("pool-list"),t=[...Oo];Js&&t.push(...pd),t.push(...dc);for(const e of t){const i=document.createElement("button");i.className="el-chip",i.dataset.sym=e.sym,i.dataset.search=`${e.sym} ${e.name} ${e.z}`.toLowerCase(),i.title=`${e.name} · ${e.cat} · max bonds ${e.maxBonds}`;const s=document.createElement("i");s.style.background=e.color;const r=document.createElement("span");r.className="s",r.textContent=e.sym;const o=document.createElement("span");o.className="n",o.textContent=e.name,i.append(s,r,o),i.addEventListener("click",()=>SM(e)),n.appendChild(i)}if(_f(),!To._listenersAttached){To._listenersAttached=!0;const e=document.getElementById("pool-search");e.addEventListener("input",MM),e.addEventListener("keydown",s=>{if(s.key!=="Enter")return;const r=[...n.children].find(o=>o.style.display!=="none");r&&r.click()});const i=document.getElementById("pool-view");i.addEventListener("click",()=>{const s=!n.hidden;n.hidden=s,document.getElementById("ptable").hidden=!s,i.textContent=nt(s?"pool.viewList":"pool.viewTable")})}}function xf(){const n=document.getElementById("pool-list");n.innerHTML="",To()}function yM(n){const t=n.target.files[0];if(!t)return;const e=new FileReader;e.onload=i=>{try{const s=JSON.parse(i.target.result);if(!Array.isArray(s))throw new Error("Expected array of elements");let r=0;for(const o of s)!o.sym||!o.name||fr(o.sym)||(dc.push({z:o.z||300+r,sym:o.sym,name:o.name,mass:o.mass||100,cat:o.cat||"exotic",en:o.en??null,maxBonds:o.maxBonds??4,anionCharge:o.anionCharge||0,charges:o.charges||null,radius:o.radius||150,color:o.color||"#ff00ff"}),r++);xf(),$t(`Imported ${r} custom element${r!==1?"s":""}`)}catch(s){$t("Import failed: "+s.message)}n.target.value=""},e.readAsText(t)}function MM(){const n=document.getElementById("pool-search").value.trim().toLowerCase();for(const t of document.querySelectorAll("#pool-list .el-chip"))t.style.display=!n||t.dataset.search.includes(n)?"":"none"}function SM(n){vc(n),document.body.classList.contains("mobile")&&Co()}function EM(n){return n>0?`+${n}`:`${n}`}function Ec(){if(Ee===null||!ot.has(Ee))return null;const n=ve.find(t=>t.atoms.includes(Ee));return n?{comp:n,an:Je[ve.indexOf(n)]}:null}function bc(){const n=document.getElementById("sel-info"),t=document.getElementById("mol-info"),e=document.getElementById("mol-warn"),i=Ec();if(!i){n.innerHTML=`<span class="muted">${nt("sel.empty")}</span>`,t.innerHTML=`<span class="muted">${nt("mol.empty")}</span>`,e.style.display="none";return}const s=ot.get(Ee);n.innerHTML=`<b>${s.el.sym}</b> — ${Nn(s.el)}<br />
    <span class="muted">${nt("sel.stats",{cat:dr(s.el.cat),mass:s.el.mass,en:s.el.en??"?",max:s.el.maxBonds})}</span>`;const{comp:r,an:o}=i;if(r.bonds.length===0){t.innerHTML=`<span class="muted">${nt("mol.freeAtom")}</span>`,e.style.display="none";return}const a=_c(r,o),c=$v(o.formula,o.charge),l=`${Ps(o.formula)}<span class="muted">${_r("",o.charge)}</span>`;if(t.innerHTML=`<div class="mol-formula">${l}</div><div id="mol-name">${a||nt("mol.unnamed")}<span class="mol-type">${c.label}</span></div>
    <span class="muted">${nt("mol.stats",{a:r.atoms.length,b:r.bonds.length})}</span>`,!o.feasible)e.style.display="block",e.textContent=Uo(o.reason)||nt("chem.lewis.charge");else{const u=r.atoms.find(h=>{const d=o.per.get(h);return!d||d.isMetal||!d.bonded||!d.ionU?!1:(ot.get(h).el.valenceElectrons+d.ionU-d.covSum)%2!==0});u?(e.style.display="block",e.textContent=nt("chem.partialIonic",{sym:Nn(ot.get(u).el)})):e.style.display="none"}}function Tc(){const n=document.getElementById("mol-list");if(n.textContent="",!ve.length){n.textContent=nt("list.empty");return}let t=0;ve.forEach((e,i)=>{if(e.bonds.length===0)return;t++;const s=Je[i],r=document.createElement("div");r.className="mol-row"+(Ee!==null&&e.atoms.includes(Ee)?" active":"");const o=document.createElement("span");o.className="m-name",o.textContent=_c(e,s)||Ps(s.formula);const a=document.createElement("span");a.className="m-f",a.textContent=Ps(s.formula)+_r("",s.charge),r.append(o,a),r.addEventListener("click",()=>Us(e.atoms[0])),n.appendChild(r)}),t||(n.textContent=nt("list.empty"))}function vf(n){return Ps(n.formula)+_r("",n.charge??0)}function yf(n){return ne()&&n.vi?n.vi:n.name||vf(n)}function Xo(){const n=document.getElementById("ch-list"),t=document.getElementById("ch-progress");t.textContent=`${Xi.size} / ${Ul.length}`,n.textContent="";let e=null;for(const i of Ul){const s=i.tier??1;if(s!==e){e=s;const c=document.createElement("div");c.className="tier",c.textContent=s,n.appendChild(c)}const r=document.createElement("div");r.className="ch"+(Xi.has(`${i.formula}|${i.charge??0}`)?" done":"");const o=document.createElement("span");o.className="ch-f",o.textContent=vf(i);const a=document.createElement("span");a.className="ch-n",a.textContent=yf(i),r.append(o,a),n.appendChild(r)}}function bM(){for(const n of Ul){const t=`${n.formula}|${n.charge??0}`;if(Xi.has(t))continue;ve.some((i,s)=>Je[s].feasible&&Je[s].formula===n.formula&&(Je[s].charge??0)===(n.charge??0))&&(Xi.add(t),qo(nt("toast.challenge",{name:yf(n)})),Xo())}}let xh=null;function $t(n,t="info"){const e=document.getElementById("status-text");e.textContent=n,e.className=t,clearTimeout(xh),xh=setTimeout(()=>{e.textContent=""},6e3)}let vh=null;function qo(n){const t=document.getElementById("toast");t.textContent=n,t.classList.add("show"),clearTimeout(vh),vh=setTimeout(()=>t.classList.remove("show"),3200)}function Us(n){Ee=n,bc(),Tc(),wc(),Ke()}function Mf(n){const t=Ec();if(!t||t.comp.bonds.length===0){$t(nt("status.selectFirst"));return}const e=Re(t.comp),i=(Jt.has(e)?Jt.get(e):t.an.charge)+n;if(Math.abs(i)>6){$t(nt("status.chargeLimit"),"err");return}Jt.set(e,i),ii({type:"snapshot",atoms:[...ot.values()].map(Vo),bonds:[...Rt.values()].map(s=>({...s})),overrides:[...Jt],nextId:Ae}),Ce(),$t(nt("status.chargeSet",{v:EM(i)}),"ok")}let yh=null;function Sf(){clearTimeout(yh),yh=setTimeout(()=>{try{localStorage.setItem("mol3d.v1",JSON.stringify({atoms:[...ot.values()].map(n=>({id:n.id,z:n.el.z,pos:n.pos})),bonds:[...Rt.values()].map(n=>({id:n.id,a:n.a,b:n.b,order:n.order,ionic:n.ionic})),nextId:Ae,overrides:[...Jt],fc:[...Xi]}))}catch{}},300)}function TM(){let n;try{n=JSON.parse(localStorage.getItem("mol3d.v1")||"null")}catch{n=null}if(!(!n||!Array.isArray(n.atoms))){for(const t of n.atoms){if(!t||!Number.isInteger(t.id)||!t.pos)continue;const e=Oo.find(i=>i.z===t.z);e&&ot.set(t.id,{id:t.id,el:e,pos:{x:+t.pos.x||0,y:+t.pos.y||0,z:+t.pos.z||0}})}for(const t of Array.isArray(n.bonds)?n.bonds:[])t&&Number.isInteger(t.id)&&ot.has(t.a)&&ot.has(t.b)&&Rt.set(t.id,{...t});for(const[t,e]of Array.isArray(n.overrides)?n.overrides:[])typeof t=="string"&&Number.isInteger(e)&&Jt.set(t,e);for(const t of Array.isArray(n.fc)?n.fc:[])typeof t=="string"&&Xi.add(t);Ae=Number.isInteger(n.nextId)&&n.nextId>0?n.nextId:Math.max(0,...ot.keys(),...Rt.keys())+1}}document.getElementById("btn-undo").addEventListener("click",yc);document.getElementById("btn-delete").addEventListener("click",()=>{Ee!==null&&xc(Ee)});document.getElementById("btn-duplicate").addEventListener("click",af);document.getElementById("btn-clear").addEventListener("click",lf);const rr=document.getElementById("btn-menu"),kl=document.getElementById("menu-dropdown");rr.addEventListener("click",n=>{n.stopPropagation();const t=rr.getAttribute("aria-expanded")==="true";rr.setAttribute("aria-expanded",!t),kl.hidden=t});document.addEventListener("click",n=>{!rr.contains(n.target)&&!kl.contains(n.target)&&(rr.setAttribute("aria-expanded","false"),kl.hidden=!0)});document.getElementById("btn-fc").addEventListener("click",()=>{ao=!ao,document.getElementById("btn-fc").classList.toggle("on",ao),Ke()});document.getElementById("btn-mayhem").addEventListener("click",()=>{Js=!Js,document.getElementById("btn-mayhem").classList.toggle("on",Js),xf(),$t(Js?"Mayhem mode ON — exotic elements unlocked!":"Mayhem mode OFF")});document.getElementById("btn-tutorial").addEventListener("click",()=>{hc(),document.getElementById("menu-dropdown").hidden=!0,document.getElementById("btn-menu").setAttribute("aria-expanded","false")});document.getElementById("btn-import").addEventListener("click",()=>{document.getElementById("import-file").click()});document.getElementById("import-file").addEventListener("change",yM);Bl.addEventListener("click",()=>{const n=Oa.indexOf(yr);Jd(Oa[(n+1)%Oa.length]),$t(nt("status.quality",{mode:Eo()}))});document.getElementById("btn-save-disc").addEventListener("click",ef);document.getElementById("chg-minus").addEventListener("click",()=>Mf(-1));document.getElementById("chg-plus").addEventListener("click",()=>Mf(1));document.getElementById("chg-auto").addEventListener("click",()=>{const n=Ec();if(!n||n.comp.bonds.length===0){$t(nt("status.selectFirst"));return}Jt.delete(Re(n.comp)),Ce(),$t(nt("status.chargeAuto"))});document.getElementById("ch-reset").addEventListener("click",()=>{Xi.clear(),Xo(),Sf(),$t(nt("status.chalReset"))});window.addEventListener("keydown",n=>{n.target instanceof HTMLInputElement||((n.ctrlKey||n.metaKey)&&n.key.toLowerCase()==="z"?(n.preventDefault(),yc()):(n.ctrlKey||n.metaKey)&&n.key.toLowerCase()==="d"?(n.preventDefault(),af()):n.key==="Delete"||n.key==="Backspace"?Ee!==null&&xc(Ee):n.key==="Escape"&&(Co(),ni(),Us(null)))});document.getElementById("btn-fc").classList.add("on");const Ef="mol3d.theme",Mh={dark:{bg:856343,gridA:3159613,gridB:1909546,meta:"#0d1117"},light:{bg:16185594,gridA:13226457,gridB:14541801,meta:"#f6f8fa"}},Cc=document.getElementById("btn-theme");function bf(n){const t=Mh[n]||Mh.dark;document.documentElement.dataset.theme=n==="light"?"light":"dark",he.background.set(t.bg),he.fog&&he.fog.color.set(t.bg),he.remove(Ni),Ni.geometry.dispose(),Ni=new Zh(60,60,t.gridA,t.gridB),Ni.position.y=-1.7,he.add(Ni),document.querySelector('meta[name="theme-color"]')?.setAttribute("content",t.meta),Cc.textContent=nt("btn.theme",{mode:nt(n==="light"?"theme.light":"theme.dark")})}let di="dark";try{const n=localStorage.getItem(Ef);(n==="light"||n==="dark")&&(di=n)}catch{}bf(di);Cc.addEventListener("click",()=>{di=di==="dark"?"light":"dark";try{localStorage.setItem(Ef,di)}catch{}bf(di),Ke(),$t(nt("status.theme",{mode:nt(di==="light"?"theme.light":"theme.dark")}))});const zl=document.getElementById("btn-lang");zl.textContent=ud()==="en"?"VI":"EN";zl.addEventListener("click",()=>{hd(Lv()),zl.textContent=ud()==="en"?"VI":"EN",CM(),$t(nt("status.lang"))});function CM(){sc(),Bo(),Cc.textContent=nt("btn.theme",{mode:nt(di==="light"?"theme.light":"theme.dark")});const n=document.getElementById("pool-list");document.getElementById("pool-view").textContent=n.hidden?nt("pool.viewList"):nt("pool.viewTable");const t=document.querySelector("#ptable .el.ph");t&&(t.textContent=nt("ptable.ph")),gf(),_f();for(const e of document.querySelectorAll("#rxn-conds button"))e.textContent=mi(e.dataset.cond);Mr(),bc(),Tc(),zo(),Xo(),Ke()}const AM=["left","tab-info","tab-dex"];function Co(){for(const n of AM)document.getElementById(n)?.classList.remove("open");document.querySelectorAll("#mtabs button.on").forEach(n=>n.classList.remove("on"))}{const n=document.getElementById("mtabs"),t=window.matchMedia("(max-width: 860px)"),e=()=>{document.body.classList.toggle("mobile",t.matches),t.matches||Co()};e(),t.addEventListener("change",e),n.addEventListener("click",i=>{const s=i.target.closest("button[data-tab]");if(!s)return;const r=document.getElementById(s.dataset.tab),o=r.classList.contains("open");Co(),o||(r.classList.add("open"),s.classList.add("on"))})}{const n=()=>document.body.classList.add("joy");window.matchMedia("(pointer: coarse)").matches&&n(),window.addEventListener("pointerdown",o=>{o.pointerType==="touch"&&n()});const t=document.getElementById("joy-stick"),e=document.getElementById("joy-knob");let i=null;const s=o=>{const a=t.getBoundingClientRect();let c=o.clientX-(a.left+a.width/2),l=o.clientY-(a.top+a.height/2);const u=a.width/2,h=Math.hypot(c,l);h>u&&(c=c/h*u,l=l/h*u),e.style.transform=`translate(${c}px, ${l}px)`,xs.setStick(c/u,-l/u)};t.addEventListener("pointerdown",o=>{i=o.pointerId;try{t.setPointerCapture(o.pointerId)}catch{}s(o)}),t.addEventListener("pointermove",o=>{o.pointerId===i&&s(o)});const r=o=>{o.pointerId===i&&(i=null,e.style.transform="",xs.setStick(0,0))};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r);for(const[o,a]of[["joy-up",1],["joy-down",-1]]){const c=document.getElementById(o);c.addEventListener("pointerdown",l=>{l.preventDefault(),xs.setVertical(a)});for(const l of["pointerup","pointercancel","pointerleave"])c.addEventListener(l,()=>xs.setVertical(0))}}let Vl=!0;function Ke(){Vl=!0}function Tf(n){const t=1-Math.exp(-n*9);let e=!1;for(const[i,s]of ot){const r=hi.get(i);if(!r)continue;const o=r.x-s.pos.x,a=r.y-s.pos.y,c=r.z-s.pos.z;o*o+a*a+c*c<1e-6||(s.pos.x+=o*t,s.pos.y+=a*t,s.pos.z+=c*t,e=!0)}return e}let Sh=performance.now();function Cf(n){requestAnimationFrame(Cf);const t=Math.min(.05,(n-Sh)/1e3);Sh=n,Kd.frame(n),xn.update();let e=!1;e=xs.update(t)||e,e=cf(t)||e,e=Tf(t)||e,cM(t),dM(n),zi.length&&(e=!0),vs&&(e=!0),Ls.size&&(e=!0),Gt&&(e=!0),Xy(n),(Vl||e)&&(Vl=!1,ko(),Qd(),Ye.render(he,we))}window.__mol3d={atoms:ot,bonds:Rt,overrides:Jt,movement:xs,camera:we,controls:xn,analyses:()=>Je,comps:()=>ve,spawnAtom:vc,reanalyze:Ce,selectAtom:Us,undo:yc,clearAll:lf,screenPosOf:n=>{const t=ot.get(n);if(!t)return null;const e=new D(t.pos.x,t.pos.y,t.pos.z).project(we),i=Ye.domElement.getBoundingClientRect();return{x:(e.x+1)/2*i.width+i.left,y:(-e.y+1)/2*i.height+i.top}},devBond:(n,t)=>nf(n,t),devUpgrade:n=>of(n),reaction:{selectByFormula:n=>{for(const t of ve){const e=Re(t);if(Ve.has(e))continue;const i=ve.indexOf(t);if(Je[i]?.formula===n)return Ve.add(e),Mc(),Mr(),Ke(),!0}return!1},pick:n=>{const t=uf(),e=cc(t,n);if(e)return df(e),e.equation;const i=Dd(t);return i.size?`wrong-condition:${[...i].join(",")}`:"none"},clear:ni},setQuality:Jd,quality:()=>yr,tierKey:()=>Yi[Ds],discoveries:()=>[...pn],saveDiscoveries:ef,driftVelocity:n=>{const t=ki(ot,Rt,n);if(!t)return null;const e=ei.get(Re(t));return e?{x:e.v.x,y:e.v.y,z:e.v.z}:null},stepAnim:n=>{const t=cf(n),e=Tf(n);return ko(),Qd(),Ye.render(he,we),{drift:t,lerp:e}}};sc();TM();tM();To();gf();oM();Xo();zo();Ac();wc();Bo();Ce();requestAnimationFrame(Cf);Py();function Ac(){document.getElementById("btn-undo").disabled=nr.length===0}function wc(){const n=Ee!==null;document.getElementById("btn-delete").disabled=!n,document.getElementById("btn-duplicate").disabled=!n}
