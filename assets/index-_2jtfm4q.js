(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const dl="180",rs={ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},md=0,Ql=1,gd=2,Ih=1,_d=2,Nn=3,ri=0,Ge=1,On=2,ni=0,os=1,tc=2,ec=3,nc=4,xd=5,Mi=100,vd=101,Md=102,yd=103,Sd=104,Ed=200,bd=201,Td=202,Ad=203,ha=204,ua=205,wd=206,Cd=207,Rd=208,Pd=209,Dd=210,Ld=211,Id=212,Ud=213,Nd=214,da=0,fa=1,pa=2,hs=3,ma=4,ga=5,_a=6,xa=7,io=0,Fd=1,Od=2,ii=0,Bd=1,Hd=2,kd=3,zd=4,Vd=5,Gd=6,Wd=7,Uh=300,us=301,ds=302,va=303,Ma=304,so=306,ya=1e3,Ei=1001,Sa=1002,$e=1003,Xd=1004,ir=1005,Tn=1006,Eo=1007,bi=1008,Cn=1009,Nh=1010,Fh=1011,Hs=1012,fl=1013,Ci=1014,An=1015,js=1016,pl=1017,ml=1018,ks=1020,Oh=35902,Bh=35899,Hh=1021,kh=1022,gn=1023,zs=1026,Vs=1027,gl=1028,_l=1029,zh=1030,xl=1031,vl=1033,Ur=33776,Nr=33777,Fr=33778,Or=33779,Ea=35840,ba=35841,Ta=35842,Aa=35843,wa=36196,Ca=37492,Ra=37496,Pa=37808,Da=37809,La=37810,Ia=37811,Ua=37812,Na=37813,Fa=37814,Oa=37815,Ba=37816,Ha=37817,ka=37818,za=37819,Va=37820,Ga=37821,Wa=36492,Xa=36494,qa=36495,Ya=36283,Ka=36284,ja=36285,$a=36286,qd=3200,Yd=3201,Ml=0,Kd=1,Zn="",en="srgb",fs="srgb-linear",Vr="linear",ee="srgb",Fi=7680,ic=519,jd=512,$d=513,Zd=514,Vh=515,Jd=516,Qd=517,tf=518,ef=519,Za=35044,nf=35048,sc="300 es",wn=2e3,Gr=2001;class Li{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Br=Math.PI/180,Ja=180/Math.PI;function si(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]).toLowerCase()}function Wt(n,t,e){return Math.max(t,Math.min(e,n))}function sf(n,t){return(n%t+t)%t}function bo(n,t,e){return(1-e)*n+e*t}function En(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ne(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const rf={DEG2RAD:Br};class wt{constructor(t=0,e=0){wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(d!==x||c!==f||l!==p||u!==g){let m=1-a;const h=c*f+l*p+u*g+d*x,E=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const C=Math.sqrt(b),R=Math.atan2(C,h*E);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}const S=a*E;if(c=c*m+f*S,l=l*m+p*S,u=u*m+g*S,d=d*m+x*S,m===1-a){const C=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=C,l*=C,u*=C,d*=C}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*d+c*p-l*f,t[e+1]=c*g+u*f+l*d-a*p,t[e+2]=l*g+u*p+a*f-c*d,t[e+3]=u*g-a*d-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(r/2),f=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"YZX":this._x=f*u*d+l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d-f*p*g;break;case"XZY":this._x=f*u*d-l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+c*l+o*d-a*u,this.y=i+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return To.copy(this).projectOnVector(t),this.sub(To)}reflect(t){return this.sub(To.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const To=new L,rc=new Vn;class kt{constructor(t,e,i,s,r,o,a,c,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],x=s[0],m=s[3],h=s[6],E=s[1],b=s[4],S=s[7],C=s[2],R=s[5],T=s[8];return r[0]=o*x+a*E+c*C,r[3]=o*m+a*b+c*R,r[6]=o*h+a*S+c*T,r[1]=l*x+u*E+d*C,r[4]=l*m+u*b+d*R,r[7]=l*h+u*S+d*T,r[2]=f*x+p*E+g*C,r[5]=f*m+p*b+g*R,r[8]=f*h+p*S+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,f=a*c-u*r,p=l*r-o*c,g=e*d+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(s*l-u*i)*x,t[2]=(a*i-s*o)*x,t[3]=f*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(i*c-l*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ao.makeScale(t,e)),this}rotate(t){return this.premultiply(Ao.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ao.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ao=new kt;function Gh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Wr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function of(){const n=Wr("canvas");return n.style.display="block",n}const oc={};function Gs(n){n in oc||(oc[n]=!0,console.warn(n))}function af(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const ac=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lc=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lf(){const n={enabled:!0,workingColorSpace:fs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ee&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ee&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zn?Vr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Gs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Gs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[fs]:{primaries:t,whitePoint:i,transfer:Vr,toXYZ:ac,fromXYZ:lc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:t,whitePoint:i,transfer:ee,toXYZ:ac,fromXYZ:lc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),n}const jt=lf();function kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function as(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Oi;class cf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Oi===void 0&&(Oi=Wr("canvas")),Oi.width=t.width,Oi.height=t.height;const s=Oi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Oi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Wr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=kn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(kn(e[i]/255)*255):e[i]=kn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hf=0;class yl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=si(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(wo(s[o].image)):r.push(wo(s[o]))}else r=wo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function wo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uf=0;const Co=new L;class Ie extends Li{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,i=Ei,s=Ei,r=Tn,o=bi,a=gn,c=Cn,l=Ie.DEFAULT_ANISOTROPY,u=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=si(),this.name="",this.source=new yl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Co).x}get height(){return this.source.getSize(Co).y}get depth(){return this.source.getSize(Co).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ya:t.x=t.x-Math.floor(t.x);break;case Ei:t.x=t.x<0?0:1;break;case Sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ya:t.y=t.y-Math.floor(t.y);break;case Ei:t.y=t.y<0?0:1;break;case Sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=Uh;Ie.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,i=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],d=c[8],f=c[1],p=c[5],g=c[9],x=c[2],m=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,S=(p+1)/2,C=(h+1)/2,R=(u+f)/4,T=(d+x)/4,D=(g+m)/4;return b>S&&b>C?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=R/i,r=T/i):S>C?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=R/s,r=D/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=T/r,s=D/r),this.set(i,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-x)/E,this.z=(f-u)/E,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class df extends Li{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new Ie(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new yl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends df{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Wh extends Ie{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ff extends Ie{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sr.copy(i.boundingBox)),sr.applyMatrix4(t.matrixWorld),this.union(sr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),rr.subVectors(this.max,ys),Bi.subVectors(t.a,ys),Hi.subVectors(t.b,ys),ki.subVectors(t.c,ys),Xn.subVectors(Hi,Bi),qn.subVectors(ki,Hi),fi.subVectors(Bi,ki);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-fi.z,fi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,fi.z,0,-fi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-fi.y,fi.x,0];return!Ro(e,Bi,Hi,ki,rr)||(e=[1,0,0,0,1,0,0,0,1],!Ro(e,Bi,Hi,ki,rr))?!1:(or.crossVectors(Xn,qn),e=[or.x,or.y,or.z],Ro(e,Bi,Hi,ki,rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Pn=[new L,new L,new L,new L,new L,new L,new L,new L],hn=new L,sr=new Ii,Bi=new L,Hi=new L,ki=new L,Xn=new L,qn=new L,fi=new L,ys=new L,rr=new L,or=new L,pi=new L;function Ro(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){pi.fromArray(n,r);const a=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),c=t.dot(pi),l=e.dot(pi),u=i.dot(pi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const pf=new Ii,Ss=new L,Po=new L;class xs{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):pf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ss.subVectors(t,this.center);const e=Ss.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ss,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ss.copy(t.center).add(Po)),this.expandByPoint(Ss.copy(t.center).sub(Po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Dn=new L,Do=new L,ar=new L,Yn=new L,Lo=new L,lr=new L,Io=new L;class ro{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Do.copy(t).add(e).multiplyScalar(.5),ar.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(Do);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ar),a=Yn.dot(this.direction),c=-Yn.dot(ar),l=Yn.lengthSq(),u=Math.abs(1-o*o);let d,f,p,g;if(u>0)if(d=o*c-a,f=o*a-c,g=r*u,d>=0)if(f>=-g)if(f<=g){const x=1/u;d*=x,f*=x,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Do).addScaledVector(ar,f),p}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const i=Dn.dot(this.direction),s=Dn.dot(Dn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,i,s,r){Lo.subVectors(e,t),lr.subVectors(i,t),Io.crossVectors(Lo,lr);let o=this.direction.dot(Io),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,t);const c=a*this.direction.dot(lr.crossVectors(Yn,lr));if(c<0)return null;const l=a*this.direction.dot(Lo.cross(Yn));if(l<0||c+l>o)return null;const u=-a*Yn.dot(Io);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,i,s,r,o,a,c,l,u,d,f,p,g,x,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,d,f,p,g,x,m)}set(t,e,i,s,r,o,a,c,l,u,d,f,p,g,x,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),o=1/zi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*u,p=o*d,g=a*u,x=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,p=c*d,g=l*u,x=l*d;e[0]=f+x*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,p=c*d,g=l*u,x=l*d;e[0]=f-x*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,p=o*d,g=a*u,x=a*d;e[0]=c*u,e[4]=g*l-p,e[8]=f*l+x,e[1]=c*d,e[5]=x*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-f*d,e[8]=g*d+p,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*d+g,e[10]=f-x*d}else if(t.order==="XZY"){const f=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=f*d+x,e[5]=o*u,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*u,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mf,t,gf)}lookAt(t,e,i){const s=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Kn.crossVectors(i,Ye),Kn.lengthSq()===0&&(Math.abs(i.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Kn.crossVectors(i,Ye)),Kn.normalize(),cr.crossVectors(Ye,Kn),s[0]=Kn.x,s[4]=cr.x,s[8]=Ye.x,s[1]=Kn.y,s[5]=cr.y,s[9]=Ye.y,s[2]=Kn.z,s[6]=cr.z,s[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],x=i[6],m=i[10],h=i[14],E=i[3],b=i[7],S=i[11],C=i[15],R=s[0],T=s[4],D=s[8],v=s[12],y=s[1],w=s[5],U=s[9],B=s[13],V=s[2],W=s[6],z=s[10],K=s[14],G=s[3],nt=s[7],it=s[11],Et=s[15];return r[0]=o*R+a*y+c*V+l*G,r[4]=o*T+a*w+c*W+l*nt,r[8]=o*D+a*U+c*z+l*it,r[12]=o*v+a*B+c*K+l*Et,r[1]=u*R+d*y+f*V+p*G,r[5]=u*T+d*w+f*W+p*nt,r[9]=u*D+d*U+f*z+p*it,r[13]=u*v+d*B+f*K+p*Et,r[2]=g*R+x*y+m*V+h*G,r[6]=g*T+x*w+m*W+h*nt,r[10]=g*D+x*U+m*z+h*it,r[14]=g*v+x*B+m*K+h*Et,r[3]=E*R+b*y+S*V+C*G,r[7]=E*T+b*w+S*W+C*nt,r[11]=E*D+b*U+S*z+C*it,r[15]=E*v+b*B+S*K+C*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],f=t[10],p=t[14],g=t[3],x=t[7],m=t[11],h=t[15];return g*(+r*c*d-s*l*d-r*a*f+i*l*f+s*a*p-i*c*p)+x*(+e*c*p-e*l*f+r*o*f-s*o*p+s*l*u-r*c*u)+m*(+e*l*d-e*a*p-r*o*d+i*o*p+r*a*u-i*l*u)+h*(-s*a*u-e*c*d+e*a*f+s*o*d-i*o*f+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],p=t[11],g=t[12],x=t[13],m=t[14],h=t[15],E=d*m*l-x*f*l+x*c*p-a*m*p-d*c*h+a*f*h,b=g*f*l-u*m*l-g*c*p+o*m*p+u*c*h-o*f*h,S=u*x*l-g*d*l+g*a*p-o*x*p-u*a*h+o*d*h,C=g*d*c-u*x*c-g*a*f+o*x*f+u*a*m-o*d*m,R=e*E+i*b+s*S+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return t[0]=E*T,t[1]=(x*f*r-d*m*r-x*s*p+i*m*p+d*s*h-i*f*h)*T,t[2]=(a*m*r-x*c*r+x*s*l-i*m*l-a*s*h+i*c*h)*T,t[3]=(d*c*r-a*f*r-d*s*l+i*f*l+a*s*p-i*c*p)*T,t[4]=b*T,t[5]=(u*m*r-g*f*r+g*s*p-e*m*p-u*s*h+e*f*h)*T,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*h-e*c*h)*T,t[7]=(o*f*r-u*c*r+u*s*l-e*f*l-o*s*p+e*c*p)*T,t[8]=S*T,t[9]=(g*d*r-u*x*r-g*i*p+e*x*p+u*i*h-e*d*h)*T,t[10]=(o*x*r-g*a*r+g*i*l-e*x*l-o*i*h+e*a*h)*T,t[11]=(u*a*r-o*d*r-u*i*l+e*d*l+o*i*p-e*a*p)*T,t[12]=C*T,t[13]=(u*x*s-g*d*s+g*i*f-e*x*f-u*i*m+e*d*m)*T,t[14]=(g*a*s-o*x*s-g*i*c+e*x*c+o*i*m-e*a*m)*T,t[15]=(o*d*s-u*a*s+u*i*c-e*d*c-o*i*f+e*a*f)*T,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,f=r*l,p=r*u,g=r*d,x=o*u,m=o*d,h=a*d,E=c*l,b=c*u,S=c*d,C=i.x,R=i.y,T=i.z;return s[0]=(1-(x+h))*C,s[1]=(p+S)*C,s[2]=(g-b)*C,s[3]=0,s[4]=(p-S)*R,s[5]=(1-(f+h))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(g+b)*T,s[9]=(m-E)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=zi.set(s[0],s[1],s[2]).length();const o=zi.set(s[4],s[5],s[6]).length(),a=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],un.copy(this);const l=1/r,u=1/o,d=1/a;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=d,un.elements[9]*=d,un.elements[10]*=d,e.setFromRotationMatrix(un),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=wn,c=!1){const l=this.elements,u=2*r/(e-t),d=2*r/(i-s),f=(e+t)/(e-t),p=(i+s)/(i-s);let g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===wn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Gr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=wn,c=!1){const l=this.elements,u=2/(e-t),d=2/(i-s),f=-(e+t)/(e-t),p=-(i+s)/(i-s);let g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===wn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Gr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const zi=new L,un=new se,mf=new L(0,0,0),gf=new L(1,1,1),Kn=new L,cr=new L,Ye=new L,cc=new se,hc=new Vn;class _n{constructor(t=0,e=0,i=0,s=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return cc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hc.setFromEuler(this),this.setFromQuaternion(hc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class Sl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _f=0;const uc=new L,Vi=new Vn,Ln=new se,hr=new L,Es=new L,xf=new L,vf=new Vn,dc=new L(1,0,0),fc=new L(0,1,0),pc=new L(0,0,1),mc={type:"added"},Mf={type:"removed"},Gi={type:"childadded",child:null},Uo={type:"childremoved",child:null};class Me extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new L,e=new _n,i=new Vn,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new kt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(dc,t)}rotateY(t){return this.rotateOnAxis(fc,t)}rotateZ(t){return this.rotateOnAxis(pc,t)}translateOnAxis(t,e){return uc.copy(t).applyQuaternion(this.quaternion),this.position.add(uc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dc,t)}translateY(t){return this.translateOnAxis(fc,t)}translateZ(t){return this.translateOnAxis(pc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?hr.copy(t):hr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Es,hr,this.up):Ln.lookAt(hr,Es,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mf),Uo.child=t,this.dispatchEvent(Uo),Uo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,t,xf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,vf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Me.DEFAULT_UP=new L(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new L,In=new L,No=new L,Un=new L,Wi=new L,Xi=new L,gc=new L,Fo=new L,Oo=new L,Bo=new L,Ho=new pe,ko=new pe,zo=new pe;class sn{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),dn.subVectors(t,e),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){dn.subVectors(s,e),In.subVectors(i,e),No.subVectors(t,e);const o=dn.dot(dn),a=dn.dot(In),c=dn.dot(No),l=In.dot(In),u=In.dot(No),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Un.x),c.addScaledVector(o,Un.y),c.addScaledVector(a,Un.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Ho.setScalar(0),ko.setScalar(0),zo.setScalar(0),Ho.fromBufferAttribute(t,e),ko.fromBufferAttribute(t,i),zo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ho,r.x),o.addScaledVector(ko,r.y),o.addScaledVector(zo,r.z),o}static isFrontFacing(t,e,i,s){return dn.subVectors(i,e),In.subVectors(t,e),dn.cross(In).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),dn.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return sn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Wi.subVectors(s,i),Xi.subVectors(r,i),Fo.subVectors(t,i);const c=Wi.dot(Fo),l=Xi.dot(Fo);if(c<=0&&l<=0)return e.copy(i);Oo.subVectors(t,s);const u=Wi.dot(Oo),d=Xi.dot(Oo);if(u>=0&&d<=u)return e.copy(s);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Wi,o);Bo.subVectors(t,r);const p=Wi.dot(Bo),g=Xi.dot(Bo);if(g>=0&&p<=g)return e.copy(r);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(Xi,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return gc.subVectors(r,s),a=(d-u)/(d-u+(p-g)),e.copy(s).addScaledVector(gc,a);const h=1/(m+x+f);return o=x*h,a=f*h,e.copy(i).addScaledVector(Wi,o).addScaledVector(Xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},ur={h:0,s:0,l:0};function Vo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Pt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=jt.workingColorSpace){if(t=sf(t,1),e=Wt(e,0,1),i=Wt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Vo(o,r,t+1/3),this.g=Vo(o,r,t),this.b=Vo(o,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=en){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){const i=Xh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return jt.workingToColorSpace(Pe.copy(this),t),Math.round(Wt(Pe.r*255,0,255))*65536+Math.round(Wt(Pe.g*255,0,255))*256+Math.round(Wt(Pe.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(Pe.copy(this),e);const i=Pe.r,s=Pe.g,r=Pe.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=en){jt.workingToColorSpace(Pe.copy(this),t);const e=Pe.r,i=Pe.g,s=Pe.b;return t!==en?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(ur);const i=bo(jn.h,ur.h,e),s=bo(jn.s,ur.s,e),r=bo(jn.l,ur.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Pt;Pt.NAMES=Xh;let yf=0;class ci extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=si(),this.name="",this.type="Material",this.blending=os,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ha,this.blendDst=ua,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(i.blending=this.blending),this.side!==ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ha&&(i.blendSrc=this.blendSrc),this.blendDst!==ua&&(i.blendDst=this.blendDst),this.blendEquation!==Mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ic&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class El extends ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new L,dr=new wt;let Sf=0;class an{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Za,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)dr.fromBufferAttribute(this,e),dr.applyMatrix3(t),this.setXY(e,dr.x,dr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=En(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ne(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=En(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=En(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=En(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=En(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),s=ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Za&&(t.usage=this.usage),t}}class qh extends an{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Yh extends an{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class we extends an{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Ef=0;const Qe=new se,Go=new Me,qi=new L,Ke=new Ii,bs=new Ii,Te=new L;class ln extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gh(t)?Yh:qh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,i){return Qe.makeTranslation(t,e,i),this.applyMatrix4(Qe),this}scale(t,e,i){return Qe.makeScale(t,e,i),this.applyMatrix4(Qe),this}lookAt(t){return Go.lookAt(t),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new we(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors(Ke.min,bs.min),Ke.expandByPoint(Te),Te.addVectors(Ke.max,bs.max),Ke.expandByPoint(Te)):(Ke.expandByPoint(bs.min),Ke.expandByPoint(bs.max))}Ke.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Te));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Te.fromBufferAttribute(a,l),c&&(qi.fromBufferAttribute(t,l),Te.add(qi)),s=Math.max(s,i.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<i.count;D++)a[D]=new L,c[D]=new L;const l=new L,u=new L,d=new L,f=new wt,p=new wt,g=new wt,x=new L,m=new L;function h(D,v,y){l.fromBufferAttribute(i,D),u.fromBufferAttribute(i,v),d.fromBufferAttribute(i,y),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,v),g.fromBufferAttribute(r,y),u.sub(l),d.sub(l),p.sub(f),g.sub(f);const w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(w),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(w),a[D].add(x),a[v].add(x),a[y].add(x),c[D].add(m),c[v].add(m),c[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let D=0,v=E.length;D<v;++D){const y=E[D],w=y.start,U=y.count;for(let B=w,V=w+U;B<V;B+=3)h(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const b=new L,S=new L,C=new L,R=new L;function T(D){C.fromBufferAttribute(s,D),R.copy(C);const v=a[D];b.copy(v),b.sub(C.multiplyScalar(C.dot(v))).normalize(),S.crossVectors(R,v);const w=S.dot(c[D])<0?-1:1;o.setXYZW(D,b.x,b.y,b.z,w)}for(let D=0,v=E.length;D<v;++D){const y=E[D],w=y.start,U=y.count;for(let B=w,V=w+U;B<V;B+=3)T(t.getX(B+0)),T(t.getX(B+1)),T(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,u=new L,d=new L;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*u;for(let h=0;h<u;h++)f[g++]=l[p++]}return new an(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ln,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],p=t(f,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const p=l[d];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _c=new se,mi=new ro,fr=new xs,xc=new L,pr=new L,mr=new L,gr=new L,Wo=new L,_r=new L,vc=new L,xr=new L;class on extends Me{constructor(t=new ln,e=new El){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){_r.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(Wo.fromBufferAttribute(d,t),o?_r.addScaledVector(Wo,u):_r.addScaledVector(Wo.sub(e),u))}e.add(_r)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere),fr.applyMatrix4(r),mi.copy(t.ray).recast(t.near),!(fr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(fr,xc)===null||mi.origin.distanceToSquared(xc)>(t.far-t.near)**2))&&(_c.copy(r).invert(),mi.copy(t.ray).applyMatrix4(_c),!(i.boundingBox!==null&&mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],h=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,C=b;S<C;S+=3){const R=a.getX(S),T=a.getX(S+1),D=a.getX(S+2);s=vr(this,h,t,i,l,u,d,R,T,D),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const E=a.getX(m),b=a.getX(m+1),S=a.getX(m+2);s=vr(this,o,t,i,l,u,d,E,b,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],h=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,C=b;S<C;S+=3){const R=S,T=S+1,D=S+2;s=vr(this,h,t,i,l,u,d,R,T,D),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const E=m,b=m+1,S=m+2;s=vr(this,o,t,i,l,u,d,E,b,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function bf(n,t,e,i,s,r,o,a){let c;if(t.side===Ge?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===ri,a),c===null)return null;xr.copy(a),xr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(xr);return l<e.near||l>e.far?null:{distance:l,point:xr.clone(),object:n}}function vr(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,pr),n.getVertexPosition(c,mr),n.getVertexPosition(l,gr);const u=bf(n,t,e,i,pr,mr,gr,vc);if(u){const d=new L;sn.getBarycoord(vc,pr,mr,gr,d),s&&(u.uv=sn.getInterpolatedAttribute(s,a,c,l,d,new wt)),r&&(u.uv1=sn.getInterpolatedAttribute(r,a,c,l,d,new wt)),o&&(u.normal=sn.getInterpolatedAttribute(o,a,c,l,d,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new L,materialIndex:0};sn.getNormal(pr,mr,gr,f.normal),u.face=f,u.barycoord=d}return u}class $s extends ln{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(u,3)),this.setAttribute("uv",new we(d,2));function g(x,m,h,E,b,S,C,R,T,D,v){const y=S/T,w=C/D,U=S/2,B=C/2,V=R/2,W=T+1,z=D+1;let K=0,G=0;const nt=new L;for(let it=0;it<z;it++){const Et=it*w-B;for(let Ot=0;Ot<W;Ot++){const Zt=Ot*y-U;nt[x]=Zt*E,nt[m]=Et*b,nt[h]=V,l.push(nt.x,nt.y,nt.z),nt[x]=0,nt[m]=0,nt[h]=R>0?1:-1,u.push(nt.x,nt.y,nt.z),d.push(Ot/T),d.push(1-it/D),K+=1}}for(let it=0;it<D;it++)for(let Et=0;Et<T;Et++){const Ot=f+Et+W*it,Zt=f+Et+W*(it+1),re=f+(Et+1)+W*(it+1),qt=f+(Et+1)+W*it;c.push(Ot,Zt,qt),c.push(Zt,re,qt),G+=6}a.addGroup(p,G,v),p+=G,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ps(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Fe(n){const t={};for(let e=0;e<n.length;e++){const i=ps(n[e]);for(const s in i)t[s]=i[s]}return t}function Tf(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Kh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const Af={clone:ps,merge:Fe};var wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wf,this.fragmentShader=Cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=Tf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class jh extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new L,Mc=new wt,yc=new wt;class nn extends jh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ja*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,Mc,yc),e.subVectors(yc,Mc)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Br*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Yi=-90,Ki=1;class Rf extends Me{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(Yi,Ki,t,e);s.layers=this.layers,this.add(s);const r=new nn(Yi,Ki,t,e);r.layers=this.layers,this.add(r);const o=new nn(Yi,Ki,t,e);o.layers=this.layers,this.add(o);const a=new nn(Yi,Ki,t,e);a.layers=this.layers,this.add(a);const c=new nn(Yi,Ki,t,e);c.layers=this.layers,this.add(c);const l=new nn(Yi,Ki,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===wn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Gr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(d,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class $h extends Ie{constructor(t=[],e=us,i,s,r,o,a,c,l,u){super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pf extends Ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new $h(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $s(5,5,5),r=new oi({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ge,blending:ni});r.uniforms.tEquirect.value=e;const o=new on(s,r),a=e.minFilter;return e.minFilter===bi&&(e.minFilter=Tn),new Rf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}class Mr extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Df={type:"move"};class Xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),h=this._getHandJoint(l,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Df)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Mr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class bl{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Pt(t),this.near=e,this.far=i}clone(){return new bl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Lf extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class If{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Za,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ne=new L;class Xr{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=En(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ne(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=En(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=En(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=En(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=En(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),s=ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new an(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Xr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Qa extends ci{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ji;const Ts=new L,$i=new L,Zi=new L,Ji=new wt,As=new wt,Zh=new se,yr=new L,ws=new L,Sr=new L,Sc=new wt,qo=new wt,Ec=new wt;class bc extends Me{constructor(t=new Qa){if(super(),this.isSprite=!0,this.type="Sprite",ji===void 0){ji=new ln;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new If(e,5);ji.setIndex([0,1,2,0,2,3]),ji.setAttribute("position",new Xr(i,3,0,!1)),ji.setAttribute("uv",new Xr(i,2,3,!1))}this.geometry=ji,this.material=t,this.center=new wt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$i.setFromMatrixScale(this.matrixWorld),Zh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$i.multiplyScalar(-Zi.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Er(yr.set(-.5,-.5,0),Zi,o,$i,s,r),Er(ws.set(.5,-.5,0),Zi,o,$i,s,r),Er(Sr.set(.5,.5,0),Zi,o,$i,s,r),Sc.set(0,0),qo.set(1,0),Ec.set(1,1);let a=t.ray.intersectTriangle(yr,ws,Sr,!1,Ts);if(a===null&&(Er(ws.set(-.5,.5,0),Zi,o,$i,s,r),qo.set(0,1),a=t.ray.intersectTriangle(yr,Sr,ws,!1,Ts),a===null))return;const c=t.ray.origin.distanceTo(Ts);c<t.near||c>t.far||e.push({distance:c,point:Ts.clone(),uv:sn.getInterpolation(Ts,yr,ws,Sr,Sc,qo,Ec,new wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Er(n,t,e,i,s,r){Ji.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(As.x=r*Ji.x-s*Ji.y,As.y=s*Ji.x+r*Ji.y):As.copy(Ji),n.copy(t),n.x+=As.x,n.y+=As.y,n.applyMatrix4(Zh)}class Uf extends Ie{constructor(t=null,e=1,i=1,s,r,o,a,c,l=$e,u=$e,d,f){super(null,o,a,c,l,u,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tc extends an{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Qi=new se,Ac=new se,br=[],wc=new Ii,Nf=new se,Cs=new on,Rs=new xs;class oo extends on{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Tc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Nf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Qi),wc.copy(t.boundingBox).applyMatrix4(Qi),this.boundingBox.union(wc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Qi),Rs.copy(t.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(Rs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rs.copy(this.boundingSphere),Rs.applyMatrix4(i),t.ray.intersectsSphere(Rs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qi),Ac.multiplyMatrices(i,Qi),Cs.matrixWorld=Ac,Cs.raycast(t,br);for(let o=0,a=br.length;o<a;o++){const c=br[o];c.instanceId=r,c.object=this,e.push(c)}br.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Tc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Uf(new Float32Array(s*this.count),s,this.count,gl,An));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Yo=new L,Ff=new L,Of=new kt;class Fn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Yo.subVectors(i,e).cross(Ff.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Yo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Of.getNormalMatrix(t),s=this.coplanarPoint(Yo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new xs,Bf=new wt(.5,.5),Tr=new L;class Tl{constructor(t=new Fn,e=new Fn,i=new Fn,s=new Fn,r=new Fn,o=new Fn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=wn,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],f=r[6],p=r[7],g=r[8],x=r[9],m=r[10],h=r[11],E=r[12],b=r[13],S=r[14],C=r[15];if(s[0].setComponents(l-o,p-u,h-g,C-E).normalize(),s[1].setComponents(l+o,p+u,h+g,C+E).normalize(),s[2].setComponents(l+a,p+d,h+x,C+b).normalize(),s[3].setComponents(l-a,p-d,h-x,C-b).normalize(),i)s[4].setComponents(c,f,m,S).normalize(),s[5].setComponents(l-c,p-f,h-m,C-S).normalize();else if(s[4].setComponents(l-c,p-f,h-m,C-S).normalize(),e===wn)s[5].setComponents(l+c,p+f,h+m,C+S).normalize();else if(e===Gr)s[5].setComponents(c,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){gi.center.set(0,0,0);const e=Bf.distanceTo(t.center);return gi.radius=.7071067811865476+e,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Tr.x=s.normal.x>0?t.max.x:t.min.x,Tr.y=s.normal.y>0?t.max.y:t.min.y,Tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jh extends ci{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const qr=new L,Yr=new L,Cc=new se,Ps=new ro,Ar=new xs,Ko=new L,Rc=new L;class Hf extends Me{constructor(t=new ln,e=new Jh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)qr.fromBufferAttribute(e,s-1),Yr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=qr.distanceTo(Yr);t.setAttribute("lineDistance",new we(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ar.copy(i.boundingSphere),Ar.applyMatrix4(s),Ar.radius+=r,t.ray.intersectsSphere(Ar)===!1)return;Cc.copy(s).invert(),Ps.copy(t.ray).applyMatrix4(Cc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){const h=u.getX(x),E=u.getX(x+1),b=wr(this,t,Ps,c,h,E,x);b&&e.push(b)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(p),h=wr(this,t,Ps,c,x,m,g-1);h&&e.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){const h=wr(this,t,Ps,c,x,x+1,x);h&&e.push(h)}if(this.isLineLoop){const x=wr(this,t,Ps,c,g-1,p,g-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function wr(n,t,e,i,s,r,o){const a=n.geometry.attributes.position;if(qr.fromBufferAttribute(a,s),Yr.fromBufferAttribute(a,r),e.distanceSqToSegment(qr,Yr,Ko,Rc)>i)return;Ko.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ko);if(!(l<t.near||l>t.far))return{distance:l,point:Rc.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Pc=new L,Dc=new L;class kf extends Hf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Pc.fromBufferAttribute(e,s),Dc.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Pc.distanceTo(Dc);t.setAttribute("lineDistance",new we(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qh extends Ie{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tu extends Ie{constructor(t,e,i=Ci,s,r,o,a=$e,c=$e,l,u=zs,d=1){if(u!==zs&&u!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class eu extends Ie{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ao extends ln{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],p=[];let g=0;const x=[],m=i/2;let h=0;E(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new we(d,3)),this.setAttribute("normal",new we(f,3)),this.setAttribute("uv",new we(p,2));function E(){const S=new L,C=new L;let R=0;const T=(e-t)/i;for(let D=0;D<=r;D++){const v=[],y=D/r,w=y*(e-t)+t;for(let U=0;U<=s;U++){const B=U/s,V=B*c+a,W=Math.sin(V),z=Math.cos(V);C.x=w*W,C.y=-y*i+m,C.z=w*z,d.push(C.x,C.y,C.z),S.set(W,T,z).normalize(),f.push(S.x,S.y,S.z),p.push(B,1-y),v.push(g++)}x.push(v)}for(let D=0;D<s;D++)for(let v=0;v<r;v++){const y=x[v][D],w=x[v+1][D],U=x[v+1][D+1],B=x[v][D+1];(t>0||v!==0)&&(u.push(y,w,B),R+=3),(e>0||v!==r-1)&&(u.push(w,U,B),R+=3)}l.addGroup(h,R,0),h+=R}function b(S){const C=g,R=new wt,T=new L;let D=0;const v=S===!0?t:e,y=S===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),g++;const w=g;for(let U=0;U<=s;U++){const V=U/s*c+a,W=Math.cos(V),z=Math.sin(V);T.x=v*z,T.y=m*y,T.z=v*W,d.push(T.x,T.y,T.z),f.push(0,y,0),R.x=W*.5+.5,R.y=z*.5*y+.5,p.push(R.x,R.y),g++}for(let U=0;U<s;U++){const B=C+U,V=w+U;S===!0?u.push(V,V+1,B):u.push(V+1,V,B),D+=3}l.addGroup(h,D,S===!0?1:2),h+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ao(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class lo extends ln{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=t/a,f=e/c,p=[],g=[],x=[],m=[];for(let h=0;h<u;h++){const E=h*f-o;for(let b=0;b<l;b++){const S=b*d-r;g.push(S,-E,0),x.push(0,0,1),m.push(b/a),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let E=0;E<a;E++){const b=E+l*h,S=E+l*(h+1),C=E+1+l*(h+1),R=E+1+l*h;p.push(b,S,R),p.push(S,C,R)}this.setIndex(p),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(x,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lo(t.width,t.height,t.widthSegments,t.heightSegments)}}class co extends ln{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new L,f=new L,p=[],g=[],x=[],m=[];for(let h=0;h<=i;h++){const E=[],b=h/i;let S=0;h===0&&o===0?S=.5/e:h===i&&c===Math.PI&&(S=-.5/e);for(let C=0;C<=e;C++){const R=C/e;d.x=-t*Math.cos(s+R*r)*Math.sin(o+b*a),d.y=t*Math.cos(o+b*a),d.z=t*Math.sin(s+R*r)*Math.sin(o+b*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(R+S,1-b),E.push(l++)}u.push(E)}for(let h=0;h<i;h++)for(let E=0;E<e;E++){const b=u[h][E+1],S=u[h][E],C=u[h+1][E],R=u[h+1][E+1];(h!==0||o>0)&&p.push(b,S,R),(h!==i-1||c<Math.PI)&&p.push(S,C,R)}this.setIndex(p),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(x,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new co(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class nu extends ci{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Pt(16777215),this.specular=new Pt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class iu extends ci{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zf extends ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vf extends ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class su extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Gf extends su{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const jo=new se,Lc=new L,Ic=new L;class Wf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tl,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Lc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Lc),Ic.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ic),e.updateMatrixWorld(),jo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ru extends jh{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Xf extends Wf{constructor(){super(new ru(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ou extends su{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new Xf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class qf extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Uc=new se;class Yf{constructor(t,e,i=0,s=1/0){this.ray=new ro(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Sl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Uc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uc),this}intersectObject(t,e=!0,i=[]){return tl(t,this,i,e),i.sort(Nc),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)tl(t[s],this,i,e);return i.sort(Nc),i}}function Nc(n,t){return n.distance-t.distance}function tl(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)tl(r[o],t,e,!0)}}class Fc{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Wt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class au extends kf{constructor(t=10,e=10,i=4473924,s=8947848){i=new Pt(i),s=new Pt(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let f=0,p=0,g=-a;f<=e;f++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const x=f===r?i:s;x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3}const u=new ln;u.setAttribute("position",new we(c,3)),u.setAttribute("color",new we(l,3));const d=new Jh({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Kf extends Li{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Oc(n,t,e,i){const s=jf(i);switch(e){case Hh:return n*t;case gl:return n*t/s.components*s.byteLength;case _l:return n*t/s.components*s.byteLength;case zh:return n*t*2/s.components*s.byteLength;case xl:return n*t*2/s.components*s.byteLength;case kh:return n*t*3/s.components*s.byteLength;case gn:return n*t*4/s.components*s.byteLength;case vl:return n*t*4/s.components*s.byteLength;case Ur:case Nr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Fr:case Or:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ba:case Aa:return Math.max(n,16)*Math.max(t,8)/4;case Ea:case Ta:return Math.max(n,8)*Math.max(t,8)/2;case wa:case Ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ra:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case La:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Na:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ba:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ka:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case za:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Va:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ga:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Wa:case Xa:case qa:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ya:case Ka:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ja:case $a:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jf(n){switch(n){case Cn:case Nh:return{byteLength:1,components:1};case Hs:case Fh:case js:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case Ci:case fl:case An:return{byteLength:4,components:1};case Oh:case Bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dl);function lu(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function $f(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const x=d[p];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jf=`#ifdef USE_ALPHAHASH
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
#endif`,Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ip=`#ifdef USE_AOMAP
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
#endif`,sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rp=`#ifdef USE_BATCHING
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
#endif`,op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hp=`#ifdef USE_IRIDESCENCE
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
#endif`,up=`#ifdef USE_BUMPMAP
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mp=`#define PI 3.141592653589793
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
} // validated`,yp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bp=`#ifdef USE_GRADIENTMAP
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
}`,Hp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vp=`uniform bool receiveShadow;
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
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kp=`PhysicalMaterial material;
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
#endif`,jp=`struct PhysicalMaterial {
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
}`,$p=`
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
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,om=`#if defined( USE_POINTS_UV )
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
#endif`,am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`#ifdef USE_MORPHTARGETS
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
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vm=`#ifdef USE_NORMALMAP
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
#endif`,Mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nm=`float getShadowMask() {
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
}`,Fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,Bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hm=`#ifdef USE_SKINNING
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
#endif`,km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#ifdef USE_TRANSMISSION
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zm=`uniform sampler2D t2D;
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
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
}`,ig=`#if DEPTH_PACKING == 3200
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
}`,sg=`#define DISTANCE
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
}`,rg=`#define DISTANCE
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`uniform float scale;
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,ug=`uniform vec3 diffuse;
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
}`,dg=`#define LAMBERT
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
}`,fg=`#define LAMBERT
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
}`,pg=`#define MATCAP
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
}`,mg=`#define MATCAP
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
}`,gg=`#define NORMAL
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
}`,_g=`#define NORMAL
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
}`,xg=`#define PHONG
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
}`,vg=`#define PHONG
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
}`,Mg=`#define STANDARD
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
}`,yg=`#define STANDARD
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
}`,Sg=`#define TOON
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
}`,Eg=`#define TOON
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
}`,bg=`uniform float size;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Ag=`#include <common>
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
}`,wg=`uniform vec3 color;
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
}`,Cg=`uniform float rotation;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Zf,alphahash_pars_fragment:Jf,alphamap_fragment:Qf,alphamap_pars_fragment:tp,alphatest_fragment:ep,alphatest_pars_fragment:np,aomap_fragment:ip,aomap_pars_fragment:sp,batching_pars_vertex:rp,batching_vertex:op,begin_vertex:ap,beginnormal_vertex:lp,bsdfs:cp,iridescence_fragment:hp,bumpmap_pars_fragment:up,clipping_planes_fragment:dp,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:pp,clipping_planes_vertex:mp,color_fragment:gp,color_pars_fragment:_p,color_pars_vertex:xp,color_vertex:vp,common:Mp,cube_uv_reflection_fragment:yp,defaultnormal_vertex:Sp,displacementmap_pars_vertex:Ep,displacementmap_vertex:bp,emissivemap_fragment:Tp,emissivemap_pars_fragment:Ap,colorspace_fragment:wp,colorspace_pars_fragment:Cp,envmap_fragment:Rp,envmap_common_pars_fragment:Pp,envmap_pars_fragment:Dp,envmap_pars_vertex:Lp,envmap_physical_pars_fragment:Gp,envmap_vertex:Ip,fog_vertex:Up,fog_pars_vertex:Np,fog_fragment:Fp,fog_pars_fragment:Op,gradientmap_pars_fragment:Bp,lightmap_pars_fragment:Hp,lights_lambert_fragment:kp,lights_lambert_pars_fragment:zp,lights_pars_begin:Vp,lights_toon_fragment:Wp,lights_toon_pars_fragment:Xp,lights_phong_fragment:qp,lights_phong_pars_fragment:Yp,lights_physical_fragment:Kp,lights_physical_pars_fragment:jp,lights_fragment_begin:$p,lights_fragment_maps:Zp,lights_fragment_end:Jp,logdepthbuf_fragment:Qp,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:em,logdepthbuf_vertex:nm,map_fragment:im,map_pars_fragment:sm,map_particle_fragment:rm,map_particle_pars_fragment:om,metalnessmap_fragment:am,metalnessmap_pars_fragment:lm,morphinstance_vertex:cm,morphcolor_vertex:hm,morphnormal_vertex:um,morphtarget_pars_vertex:dm,morphtarget_vertex:fm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:gm,normal_pars_vertex:_m,normal_vertex:xm,normalmap_pars_fragment:vm,clearcoat_normal_fragment_begin:Mm,clearcoat_normal_fragment_maps:ym,clearcoat_pars_fragment:Sm,iridescence_pars_fragment:Em,opaque_fragment:bm,packing:Tm,premultiplied_alpha_fragment:Am,project_vertex:wm,dithering_fragment:Cm,dithering_pars_fragment:Rm,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Dm,shadowmap_pars_fragment:Lm,shadowmap_pars_vertex:Im,shadowmap_vertex:Um,shadowmask_pars_fragment:Nm,skinbase_vertex:Fm,skinning_pars_vertex:Om,skinning_vertex:Bm,skinnormal_vertex:Hm,specularmap_fragment:km,specularmap_pars_fragment:zm,tonemapping_fragment:Vm,tonemapping_pars_fragment:Gm,transmission_fragment:Wm,transmission_pars_fragment:Xm,uv_pars_fragment:qm,uv_pars_vertex:Ym,uv_vertex:Km,worldpos_vertex:jm,background_vert:$m,background_frag:Zm,backgroundCube_vert:Jm,backgroundCube_frag:Qm,cube_vert:tg,cube_frag:eg,depth_vert:ng,depth_frag:ig,distanceRGBA_vert:sg,distanceRGBA_frag:rg,equirect_vert:og,equirect_frag:ag,linedashed_vert:lg,linedashed_frag:cg,meshbasic_vert:hg,meshbasic_frag:ug,meshlambert_vert:dg,meshlambert_frag:fg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:_g,meshphong_vert:xg,meshphong_frag:vg,meshphysical_vert:Mg,meshphysical_frag:yg,meshtoon_vert:Sg,meshtoon_frag:Eg,points_vert:bg,points_frag:Tg,shadow_vert:Ag,shadow_frag:wg,sprite_vert:Cg,sprite_frag:Rg},ot={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Mn={basic:{uniforms:Fe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Fe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Fe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Fe([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Fe([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Fe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Fe([ot.points,ot.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Fe([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Fe([ot.common,ot.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Fe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Fe([ot.sprite,ot.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Fe([ot.common,ot.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Fe([ot.lights,ot.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Mn.physical={uniforms:Fe([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Cr={r:0,b:0,g:0},_i=new _n,Pg=new se;function Dg(n,t,e,i,s,r,o){const a=new Pt(0);let c=r===!0?0:1,l,u,d=null,f=0,p=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function x(b){let S=!1;const C=g(b);C===null?h(a,c):C&&C.isColor&&(h(C,1),S=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,S){const C=g(S);C&&(C.isCubeTexture||C.mapping===so)?(u===void 0&&(u=new on(new $s(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:ps(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),_i.copy(S.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(_i)),u.material.toneMapped=jt.getTransfer(C.colorSpace)!==ee,(d!==C||f!==C.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=C,f=C.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new on(new lo(2,2),new oi({name:"BackgroundMaterial",uniforms:ps(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=jt.getTransfer(C.colorSpace)!==ee,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=C,f=C.version,p=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function h(b,S){b.getRGB(Cr,Kh(n)),i.buffers.color.setClear(Cr.r,Cr.g,Cr.b,S,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),c=S,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,h(a,c)},render:x,addToRenderList:m,dispose:E}}function Lg(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(y,w,U,B,V){let W=!1;const z=d(B,U,w);r!==z&&(r=z,l(r.object)),W=p(y,B,U,V),W&&g(y,B,U,V),V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,S(y,w,U,B),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function d(y,w,U){const B=U.wireframe===!0;let V=i[y.id];V===void 0&&(V={},i[y.id]=V);let W=V[w.id];W===void 0&&(W={},V[w.id]=W);let z=W[B];return z===void 0&&(z=f(c()),W[B]=z),z}function f(y){const w=[],U=[],B=[];for(let V=0;V<e;V++)w[V]=0,U[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:U,attributeDivisors:B,object:y,attributes:{},index:null}}function p(y,w,U,B){const V=r.attributes,W=w.attributes;let z=0;const K=U.getAttributes();for(const G in K)if(K[G].location>=0){const it=V[G];let Et=W[G];if(Et===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(Et=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(Et=y.instanceColor)),it===void 0||it.attribute!==Et||Et&&it.data!==Et.data)return!0;z++}return r.attributesNum!==z||r.index!==B}function g(y,w,U,B){const V={},W=w.attributes;let z=0;const K=U.getAttributes();for(const G in K)if(K[G].location>=0){let it=W[G];it===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(it=y.instanceColor));const Et={};Et.attribute=it,it&&it.data&&(Et.data=it.data),V[G]=Et,z++}r.attributes=V,r.attributesNum=z,r.index=B}function x(){const y=r.newAttributes;for(let w=0,U=y.length;w<U;w++)y[w]=0}function m(y){h(y,0)}function h(y,w){const U=r.newAttributes,B=r.enabledAttributes,V=r.attributeDivisors;U[y]=1,B[y]===0&&(n.enableVertexAttribArray(y),B[y]=1),V[y]!==w&&(n.vertexAttribDivisor(y,w),V[y]=w)}function E(){const y=r.newAttributes,w=r.enabledAttributes;for(let U=0,B=w.length;U<B;U++)w[U]!==y[U]&&(n.disableVertexAttribArray(U),w[U]=0)}function b(y,w,U,B,V,W,z){z===!0?n.vertexAttribIPointer(y,w,U,V,W):n.vertexAttribPointer(y,w,U,B,V,W)}function S(y,w,U,B){x();const V=B.attributes,W=U.getAttributes(),z=w.defaultAttributeValues;for(const K in W){const G=W[K];if(G.location>=0){let nt=V[K];if(nt===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor)),nt!==void 0){const it=nt.normalized,Et=nt.itemSize,Ot=t.get(nt);if(Ot===void 0)continue;const Zt=Ot.buffer,re=Ot.type,qt=Ot.bytesPerElement,q=re===n.INT||re===n.UNSIGNED_INT||nt.gpuType===fl;if(nt.isInterleavedBufferAttribute){const Z=nt.data,pt=Z.stride,Nt=nt.offset;if(Z.isInstancedInterleavedBuffer){for(let Tt=0;Tt<G.locationSize;Tt++)h(G.location+Tt,Z.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Tt=0;Tt<G.locationSize;Tt++)m(G.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,Zt);for(let Tt=0;Tt<G.locationSize;Tt++)b(G.location+Tt,Et/G.locationSize,re,it,pt*qt,(Nt+Et/G.locationSize*Tt)*qt,q)}else{if(nt.isInstancedBufferAttribute){for(let Z=0;Z<G.locationSize;Z++)h(G.location+Z,nt.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Z=0;Z<G.locationSize;Z++)m(G.location+Z);n.bindBuffer(n.ARRAY_BUFFER,Zt);for(let Z=0;Z<G.locationSize;Z++)b(G.location+Z,Et/G.locationSize,re,it,Et*qt,Et/G.locationSize*Z*qt,q)}}else if(z!==void 0){const it=z[K];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(G.location,it);break;case 3:n.vertexAttrib3fv(G.location,it);break;case 4:n.vertexAttrib4fv(G.location,it);break;default:n.vertexAttrib1fv(G.location,it)}}}}E()}function C(){D();for(const y in i){const w=i[y];for(const U in w){const B=w[U];for(const V in B)u(B[V].object),delete B[V];delete w[U]}delete i[y]}}function R(y){if(i[y.id]===void 0)return;const w=i[y.id];for(const U in w){const B=w[U];for(const V in B)u(B[V].object),delete B[V];delete w[U]}delete i[y.id]}function T(y){for(const w in i){const U=i[w];if(U[y.id]===void 0)continue;const B=U[y.id];for(const V in B)u(B[V].object),delete B[V];delete U[y.id]}}function D(){v(),o=!0,r!==s&&(r=s,l(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:v,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function Ig(n,t,e){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),e.update(u,i,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];e.update(p,i,1)}function c(l,u,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*f[x];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Ug(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==gn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const D=T===js&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Cn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==An&&!D)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:C,maxSamples:R}}function Ng(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Fn,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const E=r?0:i,b=E*4;let S=h.clippingState||null;c.value=S,S=u(g,f,b,p);for(let C=0;C!==b;++C)S[C]=e[C];h.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,p,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const h=p+x*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<h)&&(m=new Float32Array(h));for(let b=0,S=p;b!==x;++b,S+=4)o.copy(d[b]).applyMatrix4(E,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Fg(n){let t=new WeakMap;function e(o,a){return a===va?o.mapping=us:a===Ma&&(o.mapping=ds),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===va||a===Ma)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Pf(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const is=4,Bc=[.125,.215,.35,.446,.526,.582],yi=20,$o=new ru,Hc=new Pt;let Zo=null,Jo=0,Qo=0,ta=!1;const vi=(1+Math.sqrt(5))/2,ts=1/vi,kc=[new L(-vi,ts,0),new L(vi,ts,0),new L(-ts,0,vi),new L(ts,0,vi),new L(0,vi,-ts),new L(0,vi,ts),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Og=new L;class zc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=Og}=r;Zo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zo,Jo,Qo),this._renderer.xr.enabled=ta,t.scissorTest=!1,Rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===us||t.mapping===ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:js,format:gn,colorSpace:fs,depthBuffer:!1},s=Vc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vc(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bg(r)),this._blurMaterial=Hg(r,t,e)}return s}_compileMaterial(t){const e=new on(this._lodPlanes[0],t);this._renderer.compile(e,$o)}_sceneToCubeUV(t,e,i,s,r){const c=new nn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Hc),d.toneMapping=ii,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const x=new El({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),m=new on(new $s,x);let h=!1;const E=t.background;E?E.isColor&&(x.color.copy(E),t.background=null,h=!0):(x.color.copy(Hc),h=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[b],r.y,r.z)):S===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[b]));const C=this._cubeSize;Rr(s,S*C,b>2?C:0,C,C),d.setRenderTarget(s),h&&d.render(m,c),d.render(t,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=E}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===us||t.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new on(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Rr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,$o)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=kc[(s-r-1)%kc.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new on(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*yi-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):yi;m>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yi}`);const h=[];let E=0;for(let T=0;T<yi;++T){const D=T/x,v=Math.exp(-D*D/2);h.push(v),T===0?E+=v:T<m&&(E+=2*v)}for(let T=0;T<h.length;T++)h[T]=h[T]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;const S=this._sizeLods[s],C=3*S*(s>b-is?s-b+is:0),R=4*(this._cubeSize-S);Rr(e,C,R,3*S,2*S),c.setRenderTarget(e),c.render(d,$o)}}function Bg(n){const t=[],e=[],i=[];let s=n;const r=n-is+1+Bc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-is?c=Bc[o-n+is-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,x=3,m=2,h=1,E=new Float32Array(x*g*p),b=new Float32Array(m*g*p),S=new Float32Array(h*g*p);for(let R=0;R<p;R++){const T=R%3*2/3-1,D=R>2?0:-1,v=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];E.set(v,x*g*R),b.set(f,m*g*R);const y=[R,R,R,R,R,R];S.set(y,h*g*R)}const C=new ln;C.setAttribute("position",new an(E,x)),C.setAttribute("uv",new an(b,m)),C.setAttribute("faceIndex",new an(S,h)),t.push(C),s>is&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Vc(n,t,e){const i=new Ri(n,t,e);return i.texture.mapping=so,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Hg(n,t,e){const i=new Float32Array(yi),s=new L(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Al(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Gc(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Wc(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Al(){return`

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
	`}function kg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===va||c===Ma,u=c===us||c===ds;if(l||u){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new zc(n)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new zc(n)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function zg(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Gs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Vg(n,t,e,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const p in f)t.update(f[p],n.ARRAY_BUFFER)}function l(d){const f=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const E=p.array;x=p.version;for(let b=0,S=E.length;b<S;b+=3){const C=E[b+0],R=E[b+1],T=E[b+2];f.push(C,R,R,T,T,C)}}else if(g!==void 0){const E=g.array;x=g.version;for(let b=0,S=E.length/3-1;b<S;b+=3){const C=b+0,R=b+1,T=b+2;f.push(C,R,R,T,T,C)}}else return;const m=new(Gh(f)?Yh:qh)(f,1);m.version=x;const h=r.get(d);h&&t.remove(h),r.set(d,m)}function u(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Gg(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(i,p,r,f*o),e.update(p,i,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),e.update(p,i,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];e.update(m,i,1)}function d(f,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)l(f[h]/o,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,x,0,g);let h=0;for(let E=0;E<g;E++)h+=p[E]*x[E];e.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Wg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Xg(n,t,e){const i=new WeakMap,s=new pe;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let y=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let C=a.attributes.position.count*S,R=1;C>t.maxTextureSize&&(R=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const T=new Float32Array(C*R*4*d),D=new Wh(T,C,R,d);D.type=An,D.needsUpdate=!0;const v=S*4;for(let w=0;w<d;w++){const U=h[w],B=E[w],V=b[w],W=C*R*4*w;for(let z=0;z<U.count;z++){const K=z*v;g===!0&&(s.fromBufferAttribute(U,z),T[W+K+0]=s.x,T[W+K+1]=s.y,T[W+K+2]=s.z,T[W+K+3]=0),x===!0&&(s.fromBufferAttribute(B,z),T[W+K+4]=s.x,T[W+K+5]=s.y,T[W+K+6]=s.z,T[W+K+7]=0),m===!0&&(s.fromBufferAttribute(V,z),T[W+K+8]=s.x,T[W+K+9]=s.y,T[W+K+10]=s.z,T[W+K+11]=V.itemSize===4?s.w:1)}}f={count:d,texture:D,size:new wt(C,R)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function qg(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const cu=new Ie,Xc=new tu(1,1),hu=new Wh,uu=new ff,du=new $h,qc=[],Yc=[],Kc=new Float32Array(16),jc=new Float32Array(9),$c=new Float32Array(4);function vs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=qc[s];if(r===void 0&&(r=new Float32Array(s),qc[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Se(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ee(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ho(n,t){let e=Yc[t];e===void 0&&(e=new Int32Array(t),Yc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Yg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Kg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2fv(this.addr,t),Ee(e,t)}}function jg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;n.uniform3fv(this.addr,t),Ee(e,t)}}function $g(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4fv(this.addr,t),Ee(e,t)}}function Zg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,i))return;$c.set(i),n.uniformMatrix2fv(this.addr,!1,$c),Ee(e,i)}}function Jg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,i))return;jc.set(i),n.uniformMatrix3fv(this.addr,!1,jc),Ee(e,i)}}function Qg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,i))return;Kc.set(i),n.uniformMatrix4fv(this.addr,!1,Kc),Ee(e,i)}}function t_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function e_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2iv(this.addr,t),Ee(e,t)}}function n_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3iv(this.addr,t),Ee(e,t)}}function i_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4iv(this.addr,t),Ee(e,t)}}function s_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function r_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2uiv(this.addr,t),Ee(e,t)}}function o_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3uiv(this.addr,t),Ee(e,t)}}function a_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4uiv(this.addr,t),Ee(e,t)}}function l_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Xc.compareFunction=Vh,r=Xc):r=cu,e.setTexture2D(t||r,s)}function c_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||uu,s)}function h_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||du,s)}function u_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||hu,s)}function d_(n){switch(n){case 5126:return Yg;case 35664:return Kg;case 35665:return jg;case 35666:return $g;case 35674:return Zg;case 35675:return Jg;case 35676:return Qg;case 5124:case 35670:return t_;case 35667:case 35671:return e_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return r_;case 36295:return o_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return u_}}function f_(n,t){n.uniform1fv(this.addr,t)}function p_(n,t){const e=vs(t,this.size,2);n.uniform2fv(this.addr,e)}function m_(n,t){const e=vs(t,this.size,3);n.uniform3fv(this.addr,e)}function g_(n,t){const e=vs(t,this.size,4);n.uniform4fv(this.addr,e)}function __(n,t){const e=vs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function x_(n,t){const e=vs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function v_(n,t){const e=vs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function M_(n,t){n.uniform1iv(this.addr,t)}function y_(n,t){n.uniform2iv(this.addr,t)}function S_(n,t){n.uniform3iv(this.addr,t)}function E_(n,t){n.uniform4iv(this.addr,t)}function b_(n,t){n.uniform1uiv(this.addr,t)}function T_(n,t){n.uniform2uiv(this.addr,t)}function A_(n,t){n.uniform3uiv(this.addr,t)}function w_(n,t){n.uniform4uiv(this.addr,t)}function C_(n,t,e){const i=this.cache,s=t.length,r=ho(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||cu,r[o])}function R_(n,t,e){const i=this.cache,s=t.length,r=ho(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||uu,r[o])}function P_(n,t,e){const i=this.cache,s=t.length,r=ho(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||du,r[o])}function D_(n,t,e){const i=this.cache,s=t.length,r=ho(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||hu,r[o])}function L_(n){switch(n){case 5126:return f_;case 35664:return p_;case 35665:return m_;case 35666:return g_;case 35674:return __;case 35675:return x_;case 35676:return v_;case 5124:case 35670:return M_;case 35667:case 35671:return y_;case 35668:case 35672:return S_;case 35669:case 35673:return E_;case 5125:return b_;case 36294:return T_;case 36295:return A_;case 36296:return w_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return P_;case 36289:case 36303:case 36311:case 36292:return D_}}class I_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=d_(e.type)}}class U_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=L_(e.type)}}class N_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function Zc(n,t){n.seq.push(t),n.map[t.id]=t}function F_(n,t,e){const i=n.name,s=i.length;for(ea.lastIndex=0;;){const r=ea.exec(i),o=ea.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Zc(e,l===void 0?new I_(a,n,t):new U_(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new N_(a),Zc(e,d)),e=d}}}class Hr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);F_(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Jc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const O_=37297;let B_=0;function H_(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Qc=new kt;function k_(n){jt._getMatrix(Qc,jt.workingColorSpace,n);const t=`mat3( ${Qc.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(n)){case Vr:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function th(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+H_(n.getShaderSource(t),a)}else return r}function z_(n,t){const e=k_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function V_(n,t){let e;switch(t){case Bd:e="Linear";break;case Hd:e="Reinhard";break;case kd:e="Cineon";break;case zd:e="ACESFilmic";break;case Gd:e="AgX";break;case Wd:e="Neutral";break;case Vd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Pr=new L;function G_(){jt.getLuminanceCoefficients(Pr);const n=Pr.x.toFixed(4),t=Pr.y.toFixed(4),e=Pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function X_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function q_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Is(n){return n!==""}function eh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(n){return n.replace(Y_,j_)}const K_=new Map;function j_(n,t){let e=Vt[t];if(e===void 0){const i=K_.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return el(e)}const $_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ih(n){return n.replace($_,Z_)}function Z_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function J_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ih?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===_d?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function Q_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case us:case ds:t="ENVMAP_TYPE_CUBE";break;case so:t="ENVMAP_TYPE_CUBE_UV";break}return t}function t0(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ds&&(t="ENVMAP_MODE_REFRACTION"),t}function e0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case io:t="ENVMAP_BLENDING_MULTIPLY";break;case Fd:t="ENVMAP_BLENDING_MIX";break;case Od:t="ENVMAP_BLENDING_ADD";break}return t}function n0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function i0(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=J_(e),l=Q_(e),u=t0(e),d=e0(e),f=n0(e),p=W_(e),g=X_(r),x=s.createProgram();let m,h,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Is).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Is).join(`
`),h.length>0&&(h+=`
`)):(m=[sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),h=[sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?Vt.tonemapping_pars_fragment:"",e.toneMapping!==ii?V_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,z_("linearToOutputTexel",e.outputColorSpace),G_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Is).join(`
`)),o=el(o),o=eh(o,e),o=nh(o,e),a=el(a),a=eh(a,e),a=nh(a,e),o=ih(o),a=ih(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=E+m+o,S=E+h+a,C=Jc(s,s.VERTEX_SHADER,b),R=Jc(s,s.FRAGMENT_SHADER,S);s.attachShader(x,C),s.attachShader(x,R),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(w){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(C)||"",V=s.getShaderInfoLog(R)||"",W=U.trim(),z=B.trim(),K=V.trim();let G=!0,nt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,C,R);else{const it=th(s,C,"vertex"),Et=th(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+W+`
`+it+`
`+Et)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(z===""||K==="")&&(nt=!1);nt&&(w.diagnostics={runnable:G,programLog:W,vertexShader:{log:z,prefix:m},fragmentShader:{log:K,prefix:h}})}s.deleteShader(C),s.deleteShader(R),D=new Hr(s,x),v=q_(s,x)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,O_)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=B_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=R,this}let s0=0;class r0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new o0(t),e.set(t,i)),i}}class o0{constructor(t){this.id=s0++,this.code=t,this.usedTimes=0}}function a0(n,t,e,i,s,r,o){const a=new Sl,c=new r0,l=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,y,w,U,B){const V=U.fog,W=B.geometry,z=v.isMeshStandardMaterial?U.environment:null,K=(v.isMeshStandardMaterial?e:t).get(v.envMap||z),G=K&&K.mapping===so?K.image.height:null,nt=g[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const it=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Et=it!==void 0?it.length:0;let Ot=0;W.morphAttributes.position!==void 0&&(Ot=1),W.morphAttributes.normal!==void 0&&(Ot=2),W.morphAttributes.color!==void 0&&(Ot=3);let Zt,re,qt,q;if(nt){const $t=Mn[nt];Zt=$t.vertexShader,re=$t.fragmentShader}else Zt=v.vertexShader,re=v.fragmentShader,c.update(v),qt=c.getVertexShaderID(v),q=c.getFragmentShaderID(v);const Z=n.getRenderTarget(),pt=n.state.buffers.depth.getReversed(),Nt=B.isInstancedMesh===!0,Tt=B.isBatchedMesh===!0,Yt=!!v.map,Ce=!!v.matcap,P=!!K,ce=!!v.aoMap,Bt=!!v.lightMap,Lt=!!v.bumpMap,_t=!!v.normalMap,he=!!v.displacementMap,xt=!!v.emissiveMap,zt=!!v.metalnessMap,be=!!v.roughnessMap,ge=v.anisotropy>0,A=v.clearcoat>0,_=v.dispersion>0,O=v.iridescence>0,Y=v.sheen>0,$=v.transmission>0,X=ge&&!!v.anisotropyMap,bt=A&&!!v.clearcoatMap,st=A&&!!v.clearcoatNormalMap,vt=A&&!!v.clearcoatRoughnessMap,Mt=O&&!!v.iridescenceMap,tt=O&&!!v.iridescenceThicknessMap,ut=Y&&!!v.sheenColorMap,Dt=Y&&!!v.sheenRoughnessMap,yt=!!v.specularMap,at=!!v.specularColorMap,Ht=!!v.specularIntensityMap,I=$&&!!v.transmissionMap,et=$&&!!v.thicknessMap,rt=!!v.gradientMap,ft=!!v.alphaMap,J=v.alphaTest>0,j=!!v.alphaHash,gt=!!v.extensions;let Ft=ii;v.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ft=n.toneMapping);const ae={shaderID:nt,shaderType:v.type,shaderName:v.name,vertexShader:Zt,fragmentShader:re,defines:v.defines,customVertexShaderID:qt,customFragmentShaderID:q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Tt,batchingColor:Tt&&B._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&B.instanceColor!==null,instancingMorph:Nt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:fs,alphaToCoverage:!!v.alphaToCoverage,map:Yt,matcap:Ce,envMap:P,envMapMode:P&&K.mapping,envMapCubeUVHeight:G,aoMap:ce,lightMap:Bt,bumpMap:Lt,normalMap:_t,displacementMap:f&&he,emissiveMap:xt,normalMapObjectSpace:_t&&v.normalMapType===Kd,normalMapTangentSpace:_t&&v.normalMapType===Ml,metalnessMap:zt,roughnessMap:be,anisotropy:ge,anisotropyMap:X,clearcoat:A,clearcoatMap:bt,clearcoatNormalMap:st,clearcoatRoughnessMap:vt,dispersion:_,iridescence:O,iridescenceMap:Mt,iridescenceThicknessMap:tt,sheen:Y,sheenColorMap:ut,sheenRoughnessMap:Dt,specularMap:yt,specularColorMap:at,specularIntensityMap:Ht,transmission:$,transmissionMap:I,thicknessMap:et,gradientMap:rt,opaque:v.transparent===!1&&v.blending===os&&v.alphaToCoverage===!1,alphaMap:ft,alphaTest:J,alphaHash:j,combine:v.combine,mapUv:Yt&&x(v.map.channel),aoMapUv:ce&&x(v.aoMap.channel),lightMapUv:Bt&&x(v.lightMap.channel),bumpMapUv:Lt&&x(v.bumpMap.channel),normalMapUv:_t&&x(v.normalMap.channel),displacementMapUv:he&&x(v.displacementMap.channel),emissiveMapUv:xt&&x(v.emissiveMap.channel),metalnessMapUv:zt&&x(v.metalnessMap.channel),roughnessMapUv:be&&x(v.roughnessMap.channel),anisotropyMapUv:X&&x(v.anisotropyMap.channel),clearcoatMapUv:bt&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:st&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&x(v.sheenRoughnessMap.channel),specularMapUv:yt&&x(v.specularMap.channel),specularColorMapUv:at&&x(v.specularColorMap.channel),specularIntensityMapUv:Ht&&x(v.specularIntensityMap.channel),transmissionMapUv:I&&x(v.transmissionMap.channel),thicknessMapUv:et&&x(v.thicknessMap.channel),alphaMapUv:ft&&x(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(_t||ge),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(Yt||ft),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Ot,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Yt&&v.map.isVideoTexture===!0&&jt.getTransfer(v.map.colorSpace)===ee,decodeVideoTextureEmissive:xt&&v.emissiveMap.isVideoTexture===!0&&jt.getTransfer(v.emissiveMap.colorSpace)===ee,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===On,flipSided:v.side===Ge,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:gt&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&v.extensions.multiDraw===!0||Tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function h(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const w in v.defines)y.push(w),y.push(v.defines[w]);return v.isRawShaderMaterial===!1&&(E(y,v),b(y,v),y.push(n.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function E(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function b(v,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),v.push(a.mask)}function S(v){const y=g[v.type];let w;if(y){const U=Mn[y];w=Af.clone(U.uniforms)}else w=v.uniforms;return w}function C(v,y){let w;for(let U=0,B=u.length;U<B;U++){const V=u[U];if(V.cacheKey===y){w=V,++w.usedTimes;break}}return w===void 0&&(w=new i0(n,y,v,r),u.push(w)),w}function R(v){if(--v.usedTimes===0){const y=u.indexOf(v);u[y]=u[u.length-1],u.pop(),v.destroy()}}function T(v){c.remove(v)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:C,releaseProgram:R,releaseShaderCache:T,programs:u,dispose:D}}function l0(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function c0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function rh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function oh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,f,p,g,x,m){let h=n[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},n[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=x,h.group=m),t++,h}function a(d,f,p,g,x,m){const h=o(d,f,p,g,x,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):e.push(h)}function c(d,f,p,g,x,m){const h=o(d,f,p,g,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function l(d,f){e.length>1&&e.sort(d||c0),i.length>1&&i.sort(f||rh),s.length>1&&s.sort(f||rh)}function u(){for(let d=t,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function h0(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new oh,n.set(i,[o])):s>=r.length?(o=new oh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function u0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Pt};break;case"SpotLight":e={position:new L,direction:new L,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function d0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let f0=0;function p0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function m0(n){const t=new u0,e=d0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);const s=new L,r=new se,o=new se;function a(l){let u=0,d=0,f=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let p=0,g=0,x=0,m=0,h=0,E=0,b=0,S=0,C=0,R=0,T=0;l.sort(p0);for(let v=0,y=l.length;v<y;v++){const w=l[v],U=w.color,B=w.intensity,V=w.distance,W=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=U.r*B,d+=U.g*B,f+=U.b*B;else if(w.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(w.sh.coefficients[z],B);T++}else if(w.isDirectionalLight){const z=t.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const K=w.shadow,G=e.get(w);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=w.shadow.matrix,E++}i.directional[p]=z,p++}else if(w.isSpotLight){const z=t.get(w);z.position.setFromMatrixPosition(w.matrixWorld),z.color.copy(U).multiplyScalar(B),z.distance=V,z.coneCos=Math.cos(w.angle),z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),z.decay=w.decay,i.spot[x]=z;const K=w.shadow;if(w.map&&(i.spotLightMap[C]=w.map,C++,K.updateMatrices(w),w.castShadow&&R++),i.spotLightMatrix[x]=K.matrix,w.castShadow){const G=e.get(w);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,i.spotShadow[x]=G,i.spotShadowMap[x]=W,S++}x++}else if(w.isRectAreaLight){const z=t.get(w);z.color.copy(U).multiplyScalar(B),z.halfWidth.set(w.width*.5,0,0),z.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=z,m++}else if(w.isPointLight){const z=t.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),z.distance=w.distance,z.decay=w.decay,w.castShadow){const K=w.shadow,G=e.get(w);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=w.shadow.matrix,b++}i.point[g]=z,g++}else if(w.isHemisphereLight){const z=t.get(w);z.skyColor.copy(w.color).multiplyScalar(B),z.groundColor.copy(w.groundColor).multiplyScalar(B),i.hemi[h]=z,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==h||D.numDirectionalShadows!==E||D.numPointShadows!==b||D.numSpotShadows!==S||D.numSpotMaps!==C||D.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=S+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=T,D.directionalLength=p,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=h,D.numDirectionalShadows=E,D.numPointShadows=b,D.numSpotShadows=S,D.numSpotMaps=C,D.numLightProbes=T,i.version=f0++)}function c(l,u){let d=0,f=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let h=0,E=l.length;h<E;h++){const b=l[h];if(b.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(b.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function ah(n){const t=new m0(n),e=[],i=[];function s(u){l.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function g0(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ah(n),t.set(s,[a])):r>=o.length?(a=new ah(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const _0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x0=`uniform sampler2D shadow_pass;
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
}`;function v0(n,t,e){let i=new Tl;const s=new wt,r=new wt,o=new pe,a=new zf({depthPacking:Yd}),c=new Vf,l={},u=e.maxTextureSize,d={[ri]:Ge,[Ge]:ri,[On]:On},f=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:_0,fragmentShader:x0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new ln;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new on(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ih;let h=this.type;this.render=function(R,T,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const v=n.getRenderTarget(),y=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),U=n.state;U.setBlending(ni),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const B=h!==Nn&&this.type===Nn,V=h===Nn&&this.type!==Nn;for(let W=0,z=R.length;W<z;W++){const K=R[W],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const nt=G.getFrameExtents();if(s.multiply(nt),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/nt.x),s.x=r.x*nt.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/nt.y),s.y=r.y*nt.y,G.mapSize.y=r.y)),G.map===null||B===!0||V===!0){const Et=this.type!==Nn?{minFilter:$e,magFilter:$e}:{};G.map!==null&&G.map.dispose(),G.map=new Ri(s.x,s.y,Et),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const it=G.getViewportCount();for(let Et=0;Et<it;Et++){const Ot=G.getViewport(Et);o.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),U.viewport(o),G.updateMatrices(K,Et),i=G.getFrustum(),S(T,D,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===Nn&&E(G,D),G.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(v,y,w)};function E(R,T){const D=t.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ri(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(T,null,D,f,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(T,null,D,p,x,null)}function b(R,T,D,v){let y=null;const w=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)y=w;else if(y=D.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const U=y.uuid,B=T.uuid;let V=l[U];V===void 0&&(V={},l[U]=V);let W=V[B];W===void 0&&(W=y.clone(),V[B]=W,T.addEventListener("dispose",C)),y=W}if(y.visible=T.visible,y.wireframe=T.wireframe,v===Nn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=n.properties.get(y);U.light=D}return y}function S(R,T,D,v,y){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Nn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const B=t.update(R),V=R.material;if(Array.isArray(V)){const W=B.groups;for(let z=0,K=W.length;z<K;z++){const G=W[z],nt=V[G.materialIndex];if(nt&&nt.visible){const it=b(R,nt,v,y);R.onBeforeShadow(n,R,T,D,B,it,G),n.renderBufferDirect(D,null,B,it,R,G),R.onAfterShadow(n,R,T,D,B,it,G)}}}else if(V.visible){const W=b(R,V,v,y);R.onBeforeShadow(n,R,T,D,B,W,null),n.renderBufferDirect(D,null,B,W,R,null),R.onAfterShadow(n,R,T,D,B,W,null)}}const U=R.children;for(let B=0,V=U.length;B<V;B++)S(U[B],T,D,v,y)}function C(R){R.target.removeEventListener("dispose",C);for(const D in l){const v=l[D],y=R.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}const M0={[da]:fa,[pa]:_a,[ma]:xa,[hs]:ga,[fa]:da,[_a]:pa,[xa]:ma,[ga]:hs};function y0(n,t){function e(){let I=!1;const et=new pe;let rt=null;const ft=new pe(0,0,0,0);return{setMask:function(J){rt!==J&&!I&&(n.colorMask(J,J,J,J),rt=J)},setLocked:function(J){I=J},setClear:function(J,j,gt,Ft,ae){ae===!0&&(J*=Ft,j*=Ft,gt*=Ft),et.set(J,j,gt,Ft),ft.equals(et)===!1&&(n.clearColor(J,j,gt,Ft),ft.copy(et))},reset:function(){I=!1,rt=null,ft.set(-1,0,0,0)}}}function i(){let I=!1,et=!1,rt=null,ft=null,J=null;return{setReversed:function(j){if(et!==j){const gt=t.get("EXT_clip_control");j?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),et=j;const Ft=J;J=null,this.setClear(Ft)}},getReversed:function(){return et},setTest:function(j){j?Z(n.DEPTH_TEST):pt(n.DEPTH_TEST)},setMask:function(j){rt!==j&&!I&&(n.depthMask(j),rt=j)},setFunc:function(j){if(et&&(j=M0[j]),ft!==j){switch(j){case da:n.depthFunc(n.NEVER);break;case fa:n.depthFunc(n.ALWAYS);break;case pa:n.depthFunc(n.LESS);break;case hs:n.depthFunc(n.LEQUAL);break;case ma:n.depthFunc(n.EQUAL);break;case ga:n.depthFunc(n.GEQUAL);break;case _a:n.depthFunc(n.GREATER);break;case xa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=j}},setLocked:function(j){I=j},setClear:function(j){J!==j&&(et&&(j=1-j),n.clearDepth(j),J=j)},reset:function(){I=!1,rt=null,ft=null,J=null,et=!1}}}function s(){let I=!1,et=null,rt=null,ft=null,J=null,j=null,gt=null,Ft=null,ae=null;return{setTest:function($t){I||($t?Z(n.STENCIL_TEST):pt(n.STENCIL_TEST))},setMask:function($t){et!==$t&&!I&&(n.stencilMask($t),et=$t)},setFunc:function($t,Rn,vn){(rt!==$t||ft!==Rn||J!==vn)&&(n.stencilFunc($t,Rn,vn),rt=$t,ft=Rn,J=vn)},setOp:function($t,Rn,vn){(j!==$t||gt!==Rn||Ft!==vn)&&(n.stencilOp($t,Rn,vn),j=$t,gt=Rn,Ft=vn)},setLocked:function($t){I=$t},setClear:function($t){ae!==$t&&(n.clearStencil($t),ae=$t)},reset:function(){I=!1,et=null,rt=null,ft=null,J=null,j=null,gt=null,Ft=null,ae=null}}}const r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,h=null,E=null,b=null,S=null,C=null,R=null,T=new Pt(0,0,0),D=0,v=!1,y=null,w=null,U=null,B=null,V=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=K>=2);let nt=null,it={};const Et=n.getParameter(n.SCISSOR_BOX),Ot=n.getParameter(n.VIEWPORT),Zt=new pe().fromArray(Et),re=new pe().fromArray(Ot);function qt(I,et,rt,ft){const J=new Uint8Array(4),j=n.createTexture();n.bindTexture(I,j),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let gt=0;gt<rt;gt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(et,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(et+gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return j}const q={};q[n.TEXTURE_2D]=qt(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=qt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=qt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=qt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(n.DEPTH_TEST),o.setFunc(hs),Lt(!1),_t(Ql),Z(n.CULL_FACE),ce(ni);function Z(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function pt(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Nt(I,et){return d[I]!==et?(n.bindFramebuffer(I,et),d[I]=et,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=et),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=et),!0):!1}function Tt(I,et){let rt=p,ft=!1;if(I){rt=f.get(et),rt===void 0&&(rt=[],f.set(et,rt));const J=I.textures;if(rt.length!==J.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let j=0,gt=J.length;j<gt;j++)rt[j]=n.COLOR_ATTACHMENT0+j;rt.length=J.length,ft=!0}}else rt[0]!==n.BACK&&(rt[0]=n.BACK,ft=!0);ft&&n.drawBuffers(rt)}function Yt(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const Ce={[Mi]:n.FUNC_ADD,[vd]:n.FUNC_SUBTRACT,[Md]:n.FUNC_REVERSE_SUBTRACT};Ce[yd]=n.MIN,Ce[Sd]=n.MAX;const P={[Ed]:n.ZERO,[bd]:n.ONE,[Td]:n.SRC_COLOR,[ha]:n.SRC_ALPHA,[Dd]:n.SRC_ALPHA_SATURATE,[Rd]:n.DST_COLOR,[wd]:n.DST_ALPHA,[Ad]:n.ONE_MINUS_SRC_COLOR,[ua]:n.ONE_MINUS_SRC_ALPHA,[Pd]:n.ONE_MINUS_DST_COLOR,[Cd]:n.ONE_MINUS_DST_ALPHA,[Ld]:n.CONSTANT_COLOR,[Id]:n.ONE_MINUS_CONSTANT_COLOR,[Ud]:n.CONSTANT_ALPHA,[Nd]:n.ONE_MINUS_CONSTANT_ALPHA};function ce(I,et,rt,ft,J,j,gt,Ft,ae,$t){if(I===ni){x===!0&&(pt(n.BLEND),x=!1);return}if(x===!1&&(Z(n.BLEND),x=!0),I!==xd){if(I!==m||$t!==v){if((h!==Mi||S!==Mi)&&(n.blendEquation(n.FUNC_ADD),h=Mi,S=Mi),$t)switch(I){case os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tc:n.blendFunc(n.ONE,n.ONE);break;case ec:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ec:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,b=null,C=null,R=null,T.set(0,0,0),D=0,m=I,v=$t}return}J=J||et,j=j||rt,gt=gt||ft,(et!==h||J!==S)&&(n.blendEquationSeparate(Ce[et],Ce[J]),h=et,S=J),(rt!==E||ft!==b||j!==C||gt!==R)&&(n.blendFuncSeparate(P[rt],P[ft],P[j],P[gt]),E=rt,b=ft,C=j,R=gt),(Ft.equals(T)===!1||ae!==D)&&(n.blendColor(Ft.r,Ft.g,Ft.b,ae),T.copy(Ft),D=ae),m=I,v=!1}function Bt(I,et){I.side===On?pt(n.CULL_FACE):Z(n.CULL_FACE);let rt=I.side===Ge;et&&(rt=!rt),Lt(rt),I.blending===os&&I.transparent===!1?ce(ni):ce(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const ft=I.stencilWrite;a.setTest(ft),ft&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),xt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(I){y!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),y=I)}function _t(I){I!==md?(Z(n.CULL_FACE),I!==w&&(I===Ql?n.cullFace(n.BACK):I===gd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pt(n.CULL_FACE),w=I}function he(I){I!==U&&(z&&n.lineWidth(I),U=I)}function xt(I,et,rt){I?(Z(n.POLYGON_OFFSET_FILL),(B!==et||V!==rt)&&(n.polygonOffset(et,rt),B=et,V=rt)):pt(n.POLYGON_OFFSET_FILL)}function zt(I){I?Z(n.SCISSOR_TEST):pt(n.SCISSOR_TEST)}function be(I){I===void 0&&(I=n.TEXTURE0+W-1),nt!==I&&(n.activeTexture(I),nt=I)}function ge(I,et,rt){rt===void 0&&(nt===null?rt=n.TEXTURE0+W-1:rt=nt);let ft=it[rt];ft===void 0&&(ft={type:void 0,texture:void 0},it[rt]=ft),(ft.type!==I||ft.texture!==et)&&(nt!==rt&&(n.activeTexture(rt),nt=rt),n.bindTexture(I,et||q[I]),ft.type=I,ft.texture=et)}function A(){const I=it[nt];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(I){Zt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Zt.copy(I))}function Dt(I){re.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),re.copy(I))}function yt(I,et){let rt=l.get(et);rt===void 0&&(rt=new WeakMap,l.set(et,rt));let ft=rt.get(I);ft===void 0&&(ft=n.getUniformBlockIndex(et,I.name),rt.set(I,ft))}function at(I,et){const ft=l.get(et).get(I);c.get(et)!==ft&&(n.uniformBlockBinding(et,ft,I.__bindingPointIndex),c.set(et,ft))}function Ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},nt=null,it={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,h=null,E=null,b=null,S=null,C=null,R=null,T=new Pt(0,0,0),D=0,v=!1,y=null,w=null,U=null,B=null,V=null,Zt.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:pt,bindFramebuffer:Nt,drawBuffers:Tt,useProgram:Yt,setBlending:ce,setMaterial:Bt,setFlipSided:Lt,setCullFace:_t,setLineWidth:he,setPolygonOffset:xt,setScissorTest:zt,activeTexture:be,bindTexture:ge,unbindTexture:A,compressedTexImage2D:_,compressedTexImage3D:O,texImage2D:Mt,texImage3D:tt,updateUBOMapping:yt,uniformBlockBinding:at,texStorage2D:st,texStorage3D:vt,texSubImage2D:Y,texSubImage3D:$,compressedTexSubImage2D:X,compressedTexSubImage3D:bt,scissor:ut,viewport:Dt,reset:Ht}}function S0(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new wt,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,_){return p?new OffscreenCanvas(A,_):Wr("canvas")}function x(A,_,O){let Y=1;const $=ge(A);if(($.width>O||$.height>O)&&(Y=O/Math.max($.width,$.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(Y*$.width),bt=Math.floor(Y*$.height);d===void 0&&(d=g(X,bt));const st=_?g(X,bt):d;return st.width=X,st.height=bt,st.getContext("2d").drawImage(A,0,0,X,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+X+"x"+bt+")."),st}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function m(A){return A.generateMipmaps}function h(A){n.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(A,_,O,Y,$=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=_;if(_===n.RED&&(O===n.FLOAT&&(X=n.R32F),O===n.HALF_FLOAT&&(X=n.R16F),O===n.UNSIGNED_BYTE&&(X=n.R8)),_===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.R8UI),O===n.UNSIGNED_SHORT&&(X=n.R16UI),O===n.UNSIGNED_INT&&(X=n.R32UI),O===n.BYTE&&(X=n.R8I),O===n.SHORT&&(X=n.R16I),O===n.INT&&(X=n.R32I)),_===n.RG&&(O===n.FLOAT&&(X=n.RG32F),O===n.HALF_FLOAT&&(X=n.RG16F),O===n.UNSIGNED_BYTE&&(X=n.RG8)),_===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.RG8UI),O===n.UNSIGNED_SHORT&&(X=n.RG16UI),O===n.UNSIGNED_INT&&(X=n.RG32UI),O===n.BYTE&&(X=n.RG8I),O===n.SHORT&&(X=n.RG16I),O===n.INT&&(X=n.RG32I)),_===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.RGB8UI),O===n.UNSIGNED_SHORT&&(X=n.RGB16UI),O===n.UNSIGNED_INT&&(X=n.RGB32UI),O===n.BYTE&&(X=n.RGB8I),O===n.SHORT&&(X=n.RGB16I),O===n.INT&&(X=n.RGB32I)),_===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),O===n.UNSIGNED_INT&&(X=n.RGBA32UI),O===n.BYTE&&(X=n.RGBA8I),O===n.SHORT&&(X=n.RGBA16I),O===n.INT&&(X=n.RGBA32I)),_===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),_===n.RGBA){const bt=$?Vr:jt.getTransfer(Y);O===n.FLOAT&&(X=n.RGBA32F),O===n.HALF_FLOAT&&(X=n.RGBA16F),O===n.UNSIGNED_BYTE&&(X=bt===ee?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function S(A,_){let O;return A?_===null||_===Ci||_===ks?O=n.DEPTH24_STENCIL8:_===An?O=n.DEPTH32F_STENCIL8:_===Hs&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ci||_===ks?O=n.DEPTH_COMPONENT24:_===An?O=n.DEPTH_COMPONENT32F:_===Hs&&(O=n.DEPTH_COMPONENT16),O}function C(A,_){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==$e&&A.minFilter!==Tn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){const _=A.target;_.removeEventListener("dispose",R),D(_),_.isVideoTexture&&u.delete(_)}function T(A){const _=A.target;_.removeEventListener("dispose",T),y(_)}function D(A){const _=i.get(A);if(_.__webglInit===void 0)return;const O=A.source,Y=f.get(O);if(Y){const $=Y[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&v(A),Object.keys(Y).length===0&&f.delete(O)}i.remove(A)}function v(A){const _=i.get(A);n.deleteTexture(_.__webglTexture);const O=A.source,Y=f.get(O);delete Y[_.__cacheKey],o.memory.textures--}function y(A){const _=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let $=0;$<_.__webglFramebuffer[Y].length;$++)n.deleteFramebuffer(_.__webglFramebuffer[Y][$]);else n.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)n.deleteFramebuffer(_.__webglFramebuffer[Y]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=A.textures;for(let Y=0,$=O.length;Y<$;Y++){const X=i.get(O[Y]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(O[Y])}i.remove(A)}let w=0;function U(){w=0}function B(){const A=w;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),w+=1,A}function V(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function W(A,_){const O=i.get(A);if(A.isVideoTexture&&zt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,A,_);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+_)}function z(A,_){const O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){q(O,A,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+_)}function K(A,_){const O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){q(O,A,_);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+_)}function G(A,_){const O=i.get(A);if(A.version>0&&O.__version!==A.version){Z(O,A,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+_)}const nt={[ya]:n.REPEAT,[Ei]:n.CLAMP_TO_EDGE,[Sa]:n.MIRRORED_REPEAT},it={[$e]:n.NEAREST,[Xd]:n.NEAREST_MIPMAP_NEAREST,[ir]:n.NEAREST_MIPMAP_LINEAR,[Tn]:n.LINEAR,[Eo]:n.LINEAR_MIPMAP_NEAREST,[bi]:n.LINEAR_MIPMAP_LINEAR},Et={[jd]:n.NEVER,[ef]:n.ALWAYS,[$d]:n.LESS,[Vh]:n.LEQUAL,[Zd]:n.EQUAL,[tf]:n.GEQUAL,[Jd]:n.GREATER,[Qd]:n.NOTEQUAL};function Ot(A,_){if(_.type===An&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Tn||_.magFilter===Eo||_.magFilter===ir||_.magFilter===bi||_.minFilter===Tn||_.minFilter===Eo||_.minFilter===ir||_.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,nt[_.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,nt[_.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,nt[_.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,it[_.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,it[_.minFilter]),_.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Et[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===$e||_.minFilter!==ir&&_.minFilter!==bi||_.type===An&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Zt(A,_){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));const Y=_.source;let $=f.get(Y);$===void 0&&($={},f.set(Y,$));const X=V(_);if(X!==A.__cacheKey){$[X]===void 0&&($[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),$[X].usedTimes++;const bt=$[A.__cacheKey];bt!==void 0&&($[A.__cacheKey].usedTimes--,bt.usedTimes===0&&v(_)),A.__cacheKey=X,A.__webglTexture=$[X].texture}return O}function re(A,_,O){return Math.floor(Math.floor(A/O)/_)}function qt(A,_,O,Y){const X=A.updateRanges;if(X.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,O,Y,_.data);else{X.sort((tt,ut)=>tt.start-ut.start);let bt=0;for(let tt=1;tt<X.length;tt++){const ut=X[bt],Dt=X[tt],yt=ut.start+ut.count,at=re(Dt.start,_.width,4),Ht=re(ut.start,_.width,4);Dt.start<=yt+1&&at===Ht&&re(Dt.start+Dt.count-1,_.width,4)===at?ut.count=Math.max(ut.count,Dt.start+Dt.count-ut.start):(++bt,X[bt]=Dt)}X.length=bt+1;const st=n.getParameter(n.UNPACK_ROW_LENGTH),vt=n.getParameter(n.UNPACK_SKIP_PIXELS),Mt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let tt=0,ut=X.length;tt<ut;tt++){const Dt=X[tt],yt=Math.floor(Dt.start/4),at=Math.ceil(Dt.count/4),Ht=yt%_.width,I=Math.floor(yt/_.width),et=at,rt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ht),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),e.texSubImage2D(n.TEXTURE_2D,0,Ht,I,et,rt,O,Y,_.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,st),n.pixelStorei(n.UNPACK_SKIP_PIXELS,vt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Mt)}}function q(A,_,O){let Y=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=n.TEXTURE_3D);const $=Zt(A,_),X=_.source;e.bindTexture(Y,A.__webglTexture,n.TEXTURE0+O);const bt=i.get(X);if(X.version!==bt.__version||$===!0){e.activeTexture(n.TEXTURE0+O);const st=jt.getPrimaries(jt.workingColorSpace),vt=_.colorSpace===Zn?null:jt.getPrimaries(_.colorSpace),Mt=_.colorSpace===Zn||st===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let tt=x(_.image,!1,s.maxTextureSize);tt=be(_,tt);const ut=r.convert(_.format,_.colorSpace),Dt=r.convert(_.type);let yt=b(_.internalFormat,ut,Dt,_.colorSpace,_.isVideoTexture);Ot(Y,_);let at;const Ht=_.mipmaps,I=_.isVideoTexture!==!0,et=bt.__version===void 0||$===!0,rt=X.dataReady,ft=C(_,tt);if(_.isDepthTexture)yt=S(_.format===Vs,_.type),et&&(I?e.texStorage2D(n.TEXTURE_2D,1,yt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,yt,tt.width,tt.height,0,ut,Dt,null));else if(_.isDataTexture)if(Ht.length>0){I&&et&&e.texStorage2D(n.TEXTURE_2D,ft,yt,Ht[0].width,Ht[0].height);for(let J=0,j=Ht.length;J<j;J++)at=Ht[J],I?rt&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,at.width,at.height,ut,Dt,at.data):e.texImage2D(n.TEXTURE_2D,J,yt,at.width,at.height,0,ut,Dt,at.data);_.generateMipmaps=!1}else I?(et&&e.texStorage2D(n.TEXTURE_2D,ft,yt,tt.width,tt.height),rt&&qt(_,tt,ut,Dt)):e.texImage2D(n.TEXTURE_2D,0,yt,tt.width,tt.height,0,ut,Dt,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&et&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,yt,Ht[0].width,Ht[0].height,tt.depth);for(let J=0,j=Ht.length;J<j;J++)if(at=Ht[J],_.format!==gn)if(ut!==null)if(I){if(rt)if(_.layerUpdates.size>0){const gt=Oc(at.width,at.height,_.format,_.type);for(const Ft of _.layerUpdates){const ae=at.data.subarray(Ft*gt/at.data.BYTES_PER_ELEMENT,(Ft+1)*gt/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Ft,at.width,at.height,1,ut,ae)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,at.width,at.height,tt.depth,ut,at.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,yt,at.width,at.height,tt.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?rt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,at.width,at.height,tt.depth,ut,Dt,at.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,yt,at.width,at.height,tt.depth,0,ut,Dt,at.data)}else{I&&et&&e.texStorage2D(n.TEXTURE_2D,ft,yt,Ht[0].width,Ht[0].height);for(let J=0,j=Ht.length;J<j;J++)at=Ht[J],_.format!==gn?ut!==null?I?rt&&e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,at.width,at.height,ut,at.data):e.compressedTexImage2D(n.TEXTURE_2D,J,yt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?rt&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,at.width,at.height,ut,Dt,at.data):e.texImage2D(n.TEXTURE_2D,J,yt,at.width,at.height,0,ut,Dt,at.data)}else if(_.isDataArrayTexture)if(I){if(et&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,yt,tt.width,tt.height,tt.depth),rt)if(_.layerUpdates.size>0){const J=Oc(tt.width,tt.height,_.format,_.type);for(const j of _.layerUpdates){const gt=tt.data.subarray(j*J/tt.data.BYTES_PER_ELEMENT,(j+1)*J/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,tt.width,tt.height,1,ut,Dt,gt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ut,Dt,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,yt,tt.width,tt.height,tt.depth,0,ut,Dt,tt.data);else if(_.isData3DTexture)I?(et&&e.texStorage3D(n.TEXTURE_3D,ft,yt,tt.width,tt.height,tt.depth),rt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ut,Dt,tt.data)):e.texImage3D(n.TEXTURE_3D,0,yt,tt.width,tt.height,tt.depth,0,ut,Dt,tt.data);else if(_.isFramebufferTexture){if(et)if(I)e.texStorage2D(n.TEXTURE_2D,ft,yt,tt.width,tt.height);else{let J=tt.width,j=tt.height;for(let gt=0;gt<ft;gt++)e.texImage2D(n.TEXTURE_2D,gt,yt,J,j,0,ut,Dt,null),J>>=1,j>>=1}}else if(Ht.length>0){if(I&&et){const J=ge(Ht[0]);e.texStorage2D(n.TEXTURE_2D,ft,yt,J.width,J.height)}for(let J=0,j=Ht.length;J<j;J++)at=Ht[J],I?rt&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,ut,Dt,at):e.texImage2D(n.TEXTURE_2D,J,yt,ut,Dt,at);_.generateMipmaps=!1}else if(I){if(et){const J=ge(tt);e.texStorage2D(n.TEXTURE_2D,ft,yt,J.width,J.height)}rt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,Dt,tt)}else e.texImage2D(n.TEXTURE_2D,0,yt,ut,Dt,tt);m(_)&&h(Y),bt.__version=X.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Z(A,_,O){if(_.image.length!==6)return;const Y=Zt(A,_),$=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+O);const X=i.get($);if($.version!==X.__version||Y===!0){e.activeTexture(n.TEXTURE0+O);const bt=jt.getPrimaries(jt.workingColorSpace),st=_.colorSpace===Zn?null:jt.getPrimaries(_.colorSpace),vt=_.colorSpace===Zn||bt===st?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Mt=_.isCompressedTexture||_.image[0].isCompressedTexture,tt=_.image[0]&&_.image[0].isDataTexture,ut=[];for(let j=0;j<6;j++)!Mt&&!tt?ut[j]=x(_.image[j],!0,s.maxCubemapSize):ut[j]=tt?_.image[j].image:_.image[j],ut[j]=be(_,ut[j]);const Dt=ut[0],yt=r.convert(_.format,_.colorSpace),at=r.convert(_.type),Ht=b(_.internalFormat,yt,at,_.colorSpace),I=_.isVideoTexture!==!0,et=X.__version===void 0||Y===!0,rt=$.dataReady;let ft=C(_,Dt);Ot(n.TEXTURE_CUBE_MAP,_);let J;if(Mt){I&&et&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Ht,Dt.width,Dt.height);for(let j=0;j<6;j++){J=ut[j].mipmaps;for(let gt=0;gt<J.length;gt++){const Ft=J[gt];_.format!==gn?yt!==null?I?rt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,0,0,Ft.width,Ft.height,yt,Ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,Ht,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,0,0,Ft.width,Ft.height,yt,at,Ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,Ht,Ft.width,Ft.height,0,yt,at,Ft.data)}}}else{if(J=_.mipmaps,I&&et){J.length>0&&ft++;const j=ge(ut[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Ht,j.width,j.height)}for(let j=0;j<6;j++)if(tt){I?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ut[j].width,ut[j].height,yt,at,ut[j].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,ut[j].width,ut[j].height,0,yt,at,ut[j].data);for(let gt=0;gt<J.length;gt++){const ae=J[gt].image[j].image;I?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,0,0,ae.width,ae.height,yt,at,ae.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,Ht,ae.width,ae.height,0,yt,at,ae.data)}}else{I?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,yt,at,ut[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,yt,at,ut[j]);for(let gt=0;gt<J.length;gt++){const Ft=J[gt];I?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,0,0,yt,at,Ft.image[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,Ht,yt,at,Ft.image[j])}}}m(_)&&h(n.TEXTURE_CUBE_MAP),X.__version=$.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function pt(A,_,O,Y,$,X){const bt=r.convert(O.format,O.colorSpace),st=r.convert(O.type),vt=b(O.internalFormat,bt,st,O.colorSpace),Mt=i.get(_),tt=i.get(O);if(tt.__renderTarget=_,!Mt.__hasExternalTextures){const ut=Math.max(1,_.width>>X),Dt=Math.max(1,_.height>>X);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?e.texImage3D($,X,vt,ut,Dt,_.depth,0,bt,st,null):e.texImage2D($,X,vt,ut,Dt,0,bt,st,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),xt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,$,tt.__webglTexture,0,he(_)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,$,tt.__webglTexture,X),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(A,_,O){if(n.bindRenderbuffer(n.RENDERBUFFER,A),_.depthBuffer){const Y=_.depthTexture,$=Y&&Y.isDepthTexture?Y.type:null,X=S(_.stencilBuffer,$),bt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=he(_);xt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st,X,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,st,X,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,X,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,A)}else{const Y=_.textures;for(let $=0;$<Y.length;$++){const X=Y[$],bt=r.convert(X.format,X.colorSpace),st=r.convert(X.type),vt=b(X.internalFormat,bt,st,X.colorSpace),Mt=he(_);O&&xt(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,vt,_.width,_.height):xt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt,vt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,vt,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Tt(A,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W(_.depthTexture,0);const $=Y.__webglTexture,X=he(_);if(_.depthTexture.format===zs)xt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(_.depthTexture.format===Vs)xt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Yt(A){const _=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",$)};Y.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=Y}if(A.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const Y=A.texture.mipmaps;Y&&Y.length>0?Tt(_.__webglFramebuffer[0],A):Tt(_.__webglFramebuffer,A)}else if(O){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=n.createRenderbuffer(),Nt(_.__webglDepthbuffer[Y],A,!1);else{const $=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,X)}}else{const Y=A.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Nt(_.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,X)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(A,_,O){const Y=i.get(A);_!==void 0&&pt(Y.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Yt(A)}function P(A){const _=A.texture,O=i.get(A),Y=i.get(_);A.addEventListener("dispose",T);const $=A.textures,X=A.isWebGLCubeRenderTarget===!0,bt=$.length>1;if(bt||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=_.version,o.memory.textures++),X){O.__webglFramebuffer=[];for(let st=0;st<6;st++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[st]=[];for(let vt=0;vt<_.mipmaps.length;vt++)O.__webglFramebuffer[st][vt]=n.createFramebuffer()}else O.__webglFramebuffer[st]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let st=0;st<_.mipmaps.length;st++)O.__webglFramebuffer[st]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(bt)for(let st=0,vt=$.length;st<vt;st++){const Mt=i.get($[st]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&xt(A)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let st=0;st<$.length;st++){const vt=$[st];O.__webglColorRenderbuffer[st]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[st]);const Mt=r.convert(vt.format,vt.colorSpace),tt=r.convert(vt.type),ut=b(vt.internalFormat,Mt,tt,vt.colorSpace,A.isXRRenderTarget===!0),Dt=he(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt,ut,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,O.__webglColorRenderbuffer[st])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Nt(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Ot(n.TEXTURE_CUBE_MAP,_);for(let st=0;st<6;st++)if(_.mipmaps&&_.mipmaps.length>0)for(let vt=0;vt<_.mipmaps.length;vt++)pt(O.__webglFramebuffer[st][vt],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt);else pt(O.__webglFramebuffer[st],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(_)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let st=0,vt=$.length;st<vt;st++){const Mt=$[st],tt=i.get(Mt);let ut=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ut=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,tt.__webglTexture),Ot(ut,Mt),pt(O.__webglFramebuffer,A,Mt,n.COLOR_ATTACHMENT0+st,ut,0),m(Mt)&&h(ut)}e.unbindTexture()}else{let st=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(st=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,Y.__webglTexture),Ot(st,_),_.mipmaps&&_.mipmaps.length>0)for(let vt=0;vt<_.mipmaps.length;vt++)pt(O.__webglFramebuffer[vt],A,_,n.COLOR_ATTACHMENT0,st,vt);else pt(O.__webglFramebuffer,A,_,n.COLOR_ATTACHMENT0,st,0);m(_)&&h(st),e.unbindTexture()}A.depthBuffer&&Yt(A)}function ce(A){const _=A.textures;for(let O=0,Y=_.length;O<Y;O++){const $=_[O];if(m($)){const X=E(A),bt=i.get($).__webglTexture;e.bindTexture(X,bt),h(X),e.unbindTexture()}}}const Bt=[],Lt=[];function _t(A){if(A.samples>0){if(xt(A)===!1){const _=A.textures,O=A.width,Y=A.height;let $=n.COLOR_BUFFER_BIT;const X=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(A),st=_.length>1;if(st)for(let Mt=0;Mt<_.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const vt=A.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Mt=0;Mt<_.length;Mt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),st){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[Mt]);const tt=i.get(_[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,tt,0)}n.blitFramebuffer(0,0,O,Y,0,0,O,Y,$,n.NEAREST),c===!0&&(Bt.length=0,Lt.length=0,Bt.push(n.COLOR_ATTACHMENT0+Mt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Bt.push(X),Lt.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Lt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),st)for(let Mt=0;Mt<_.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,bt.__webglColorRenderbuffer[Mt]);const tt=i.get(_[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const _=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function he(A){return Math.min(s.maxSamples,A.samples)}function xt(A){const _=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function zt(A){const _=o.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function be(A,_){const O=A.colorSpace,Y=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==fs&&O!==Zn&&(jt.getTransfer(O)===ee?(Y!==gn||$!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function ge(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=U,this.setTexture2D=W,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=G,this.rebindTextures=Ce,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=xt}function E0(n,t){function e(i,s=Zn){let r;const o=jt.getTransfer(s);if(i===Cn)return n.UNSIGNED_BYTE;if(i===pl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ml)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Oh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Bh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nh)return n.BYTE;if(i===Fh)return n.SHORT;if(i===Hs)return n.UNSIGNED_SHORT;if(i===fl)return n.INT;if(i===Ci)return n.UNSIGNED_INT;if(i===An)return n.FLOAT;if(i===js)return n.HALF_FLOAT;if(i===Hh)return n.ALPHA;if(i===kh)return n.RGB;if(i===gn)return n.RGBA;if(i===zs)return n.DEPTH_COMPONENT;if(i===Vs)return n.DEPTH_STENCIL;if(i===gl)return n.RED;if(i===_l)return n.RED_INTEGER;if(i===zh)return n.RG;if(i===xl)return n.RG_INTEGER;if(i===vl)return n.RGBA_INTEGER;if(i===Ur||i===Nr||i===Fr||i===Or)if(o===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ea||i===ba||i===Ta||i===Aa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wa||i===Ca||i===Ra)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===wa||i===Ca)return o===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ra)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pa||i===Da||i===La||i===Ia||i===Ua||i===Na||i===Fa||i===Oa||i===Ba||i===Ha||i===ka||i===za||i===Va||i===Ga)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Pa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Da)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===La)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ia)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ua)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Na)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ba)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ha)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ka)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===za)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Va)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ga)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wa||i===Xa||i===qa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Wa)return o===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ya||i===Ka||i===ja||i===$a)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ya)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$a)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const b0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T0=`
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

}`;class A0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new eu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new oi({vertexShader:b0,fragmentShader:T0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new on(new lo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class w0 extends Li{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new A0,h={},E=e.getContextAttributes();let b=null,S=null;const C=[],R=[],T=new wt;let D=null;const v=new nn;v.viewport=new pe;const y=new nn;y.viewport=new pe;const w=[v,y],U=new qf;let B=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=C[q];return Z===void 0&&(Z=new Xo,C[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=C[q];return Z===void 0&&(Z=new Xo,C[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=C[q];return Z===void 0&&(Z=new Xo,C[q]=Z),Z.getHandSpace()};function W(q){const Z=R.indexOf(q.inputSource);if(Z===-1)return;const pt=C[Z];pt!==void 0&&(pt.update(q.inputSource,q.frame,l||o),pt.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",K);for(let q=0;q<C.length;q++){const Z=R[q];Z!==null&&(R[q]=null,C[q].disconnect(Z))}B=null,V=null,m.reset();for(const q in h)delete h[q];t.setRenderTarget(b),p=null,f=null,d=null,s=null,S=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",z),s.addEventListener("inputsourceschange",K),E.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Nt=null,Tt=null;E.depth&&(Tt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=E.stencil?Vs:zs,Nt=E.stencil?ks:Ci);const Yt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Yt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Ri(f.textureWidth,f.textureHeight,{format:gn,type:Cn,depthTexture:new tu(f.textureWidth,f.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const pt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ri(p.framebufferWidth,p.framebufferHeight,{format:gn,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),qt.setContext(s),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(q){for(let Z=0;Z<q.removed.length;Z++){const pt=q.removed[Z],Nt=R.indexOf(pt);Nt>=0&&(R[Nt]=null,C[Nt].disconnect(pt))}for(let Z=0;Z<q.added.length;Z++){const pt=q.added[Z];let Nt=R.indexOf(pt);if(Nt===-1){for(let Yt=0;Yt<C.length;Yt++)if(Yt>=R.length){R.push(pt),Nt=Yt;break}else if(R[Yt]===null){R[Yt]=pt,Nt=Yt;break}if(Nt===-1)break}const Tt=C[Nt];Tt&&Tt.connect(pt)}}const G=new L,nt=new L;function it(q,Z,pt){G.setFromMatrixPosition(Z.matrixWorld),nt.setFromMatrixPosition(pt.matrixWorld);const Nt=G.distanceTo(nt),Tt=Z.projectionMatrix.elements,Yt=pt.projectionMatrix.elements,Ce=Tt[14]/(Tt[10]-1),P=Tt[14]/(Tt[10]+1),ce=(Tt[9]+1)/Tt[5],Bt=(Tt[9]-1)/Tt[5],Lt=(Tt[8]-1)/Tt[0],_t=(Yt[8]+1)/Yt[0],he=Ce*Lt,xt=Ce*_t,zt=Nt/(-Lt+_t),be=zt*-Lt;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(be),q.translateZ(zt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Tt[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const ge=Ce+zt,A=P+zt,_=he-be,O=xt+(Nt-be),Y=ce*P/A*ge,$=Bt*P/A*ge;q.projectionMatrix.makePerspective(_,O,Y,$,ge,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Et(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Z=q.near,pt=q.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),U.near=y.near=v.near=Z,U.far=y.far=v.far=pt,(B!==U.near||V!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),B=U.near,V=U.far),U.layers.mask=q.layers.mask|6,v.layers.mask=U.layers.mask&3,y.layers.mask=U.layers.mask&5;const Nt=q.parent,Tt=U.cameras;Et(U,Nt);for(let Yt=0;Yt<Tt.length;Yt++)Et(Tt[Yt],Nt);Tt.length===2?it(U,v,y):U.projectionMatrix.copy(v.projectionMatrix),Ot(q,U,Nt)};function Ot(q,Z,pt){pt===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(pt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ja*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(q){return h[q]};let Zt=null;function re(q,Z){if(u=Z.getViewerPose(l||o),g=Z,u!==null){const pt=u.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let Nt=!1;pt.length!==U.cameras.length&&(U.cameras.length=0,Nt=!0);for(let P=0;P<pt.length;P++){const ce=pt[P];let Bt=null;if(p!==null)Bt=p.getViewport(ce);else{const _t=d.getViewSubImage(f,ce);Bt=_t.viewport,P===0&&(t.setRenderTargetTextures(S,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(S))}let Lt=w[P];Lt===void 0&&(Lt=new nn,Lt.layers.enable(P),Lt.viewport=new pe,w[P]=Lt),Lt.matrix.fromArray(ce.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(ce.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),P===0&&(U.matrix.copy(Lt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Nt===!0&&U.cameras.push(Lt)}const Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();const P=d.getDepthInformation(pt[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(Tt&&Tt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let P=0;P<pt.length;P++){const ce=pt[P].camera;if(ce){let Bt=h[ce];Bt||(Bt=new eu,h[ce]=Bt);const Lt=d.getCameraImage(ce);Bt.sourceTexture=Lt}}}}for(let pt=0;pt<C.length;pt++){const Nt=R[pt],Tt=C[pt];Nt!==null&&Tt!==void 0&&Tt.update(Nt,Z,l||o)}Zt&&Zt(q,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const qt=new lu;qt.setAnimationLoop(re),this.setAnimationLoop=function(q){Zt=q},this.dispose=function(){}}}const xi=new _n,C0=new se;function R0(n,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Kh(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,E,b,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),d(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),x(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?c(m,h,E,b):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ge&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ge&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const E=t.get(h),b=E.envMap,S=E.envMapRotation;b&&(m.envMap.value=b,xi.copy(S),xi.x*=-1,xi.y*=-1,xi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(C0.makeRotationFromEuler(xi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,E,b){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*E,m.scale.value=b*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,E){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ge&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const E=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function P0(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,b){const S=b.program;i.uniformBlockBinding(E,S)}function l(E,b){let S=s[E.id];S===void 0&&(g(E),S=u(E),s[E.id]=S,E.addEventListener("dispose",m));const C=b.program;i.updateUBOMapping(E,C);const R=t.render.frame;r[E.id]!==R&&(f(E),r[E.id]=R)}function u(E){const b=d();E.__bindingPointIndex=b;const S=n.createBuffer(),C=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const b=s[E.id],S=E.uniforms,C=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,T=S.length;R<T;R++){const D=Array.isArray(S[R])?S[R]:[S[R]];for(let v=0,y=D.length;v<y;v++){const w=D[v];if(p(w,R,v,C)===!0){const U=w.__offset,B=Array.isArray(w.value)?w.value:[w.value];let V=0;for(let W=0;W<B.length;W++){const z=B[W],K=x(z);typeof z=="number"||typeof z=="boolean"?(w.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,U+V,w.__data)):z.isMatrix3?(w.__data[0]=z.elements[0],w.__data[1]=z.elements[1],w.__data[2]=z.elements[2],w.__data[3]=0,w.__data[4]=z.elements[3],w.__data[5]=z.elements[4],w.__data[6]=z.elements[5],w.__data[7]=0,w.__data[8]=z.elements[6],w.__data[9]=z.elements[7],w.__data[10]=z.elements[8],w.__data[11]=0):(z.toArray(w.__data,V),V+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,b,S,C){const R=E.value,T=b+"_"+S;if(C[T]===void 0)return typeof R=="number"||typeof R=="boolean"?C[T]=R:C[T]=R.clone(),!0;{const D=C[T];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return C[T]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(E){const b=E.uniforms;let S=0;const C=16;for(let T=0,D=b.length;T<D;T++){const v=Array.isArray(b[T])?b[T]:[b[T]];for(let y=0,w=v.length;y<w;y++){const U=v[y],B=Array.isArray(U.value)?U.value:[U.value];for(let V=0,W=B.length;V<W;V++){const z=B[V],K=x(z),G=S%C,nt=G%K.boundary,it=G+nt;S+=nt,it!==0&&C-it<K.storage&&(S+=C-it),U.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=K.storage}}}const R=S%C;return R>0&&(S+=C-R),E.__size=S,E.__cache={},this}function x(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function h(){for(const E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:h}}class D0{constructor(t={}){const{canvas:e=of(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,h=null;const E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let C=!1;this._outputColorSpace=en;let R=0,T=0,D=null,v=-1,y=null;const w=new pe,U=new pe;let B=null;const V=new Pt(0);let W=0,z=e.width,K=e.height,G=1,nt=null,it=null;const Et=new pe(0,0,z,K),Ot=new pe(0,0,z,K);let Zt=!1;const re=new Tl;let qt=!1,q=!1;const Z=new se,pt=new L,Nt=new pe,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function Ce(){return D===null?G:1}let P=i;function ce(M,N){return e.getContext(M,N)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${dl}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",J,!1),P===null){const N="webgl2";if(P=ce(N,M),P===null)throw ce(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Bt,Lt,_t,he,xt,zt,be,ge,A,_,O,Y,$,X,bt,st,vt,Mt,tt,ut,Dt,yt,at,Ht;function I(){Bt=new zg(P),Bt.init(),yt=new E0(P,Bt),Lt=new Ug(P,Bt,t,yt),_t=new y0(P,Bt),Lt.reversedDepthBuffer&&f&&_t.buffers.depth.setReversed(!0),he=new Wg(P),xt=new l0,zt=new S0(P,Bt,_t,xt,Lt,yt,he),be=new Fg(S),ge=new kg(S),A=new $f(P),at=new Lg(P,A),_=new Vg(P,A,he,at),O=new qg(P,_,A,he),tt=new Xg(P,Lt,zt),st=new Ng(xt),Y=new a0(S,be,ge,Bt,Lt,at,st),$=new R0(S,xt),X=new h0,bt=new g0(Bt),Mt=new Dg(S,be,ge,_t,O,p,c),vt=new v0(S,O,Lt),Ht=new P0(P,he,Lt,_t),ut=new Ig(P,Bt,he),Dt=new Gg(P,Bt,he),he.programs=Y.programs,S.capabilities=Lt,S.extensions=Bt,S.properties=xt,S.renderLists=X,S.shadowMap=vt,S.state=_t,S.info=he}I();const et=new w0(S,P);this.xr=et,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=Bt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Bt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(M){M!==void 0&&(G=M,this.setSize(z,K,!1))},this.getSize=function(M){return M.set(z,K)},this.setSize=function(M,N,H=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=M,K=N,e.width=Math.floor(M*G),e.height=Math.floor(N*G),H===!0&&(e.style.width=M+"px",e.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(z*G,K*G).floor()},this.setDrawingBufferSize=function(M,N,H){z=M,K=N,G=H,e.width=Math.floor(M*H),e.height=Math.floor(N*H),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(w)},this.getViewport=function(M){return M.copy(Et)},this.setViewport=function(M,N,H,k){M.isVector4?Et.set(M.x,M.y,M.z,M.w):Et.set(M,N,H,k),_t.viewport(w.copy(Et).multiplyScalar(G).round())},this.getScissor=function(M){return M.copy(Ot)},this.setScissor=function(M,N,H,k){M.isVector4?Ot.set(M.x,M.y,M.z,M.w):Ot.set(M,N,H,k),_t.scissor(U.copy(Ot).multiplyScalar(G).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(M){_t.setScissorTest(Zt=M)},this.setOpaqueSort=function(M){nt=M},this.setTransparentSort=function(M){it=M},this.getClearColor=function(M){return M.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,H=!0){let k=0;if(M){let F=!1;if(D!==null){const Q=D.texture.format;F=Q===vl||Q===xl||Q===_l}if(F){const Q=D.texture.type,ct=Q===Cn||Q===Ci||Q===Hs||Q===ks||Q===pl||Q===ml,mt=Mt.getClearColor(),dt=Mt.getClearAlpha(),Rt=mt.r,It=mt.g,At=mt.b;ct?(g[0]=Rt,g[1]=It,g[2]=At,g[3]=dt,P.clearBufferuiv(P.COLOR,0,g)):(x[0]=Rt,x[1]=It,x[2]=At,x[3]=dt,P.clearBufferiv(P.COLOR,0,x))}else k|=P.COLOR_BUFFER_BIT}N&&(k|=P.DEPTH_BUFFER_BIT),H&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",J,!1),Mt.dispose(),X.dispose(),bt.dispose(),xt.dispose(),be.dispose(),ge.dispose(),O.dispose(),at.dispose(),Ht.dispose(),Y.dispose(),et.dispose(),et.removeEventListener("sessionstart",vn),et.removeEventListener("sessionend",Yl),ui.stop()};function rt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const M=he.autoReset,N=vt.enabled,H=vt.autoUpdate,k=vt.needsUpdate,F=vt.type;I(),he.autoReset=M,vt.enabled=N,vt.autoUpdate=H,vt.needsUpdate=k,vt.type=F}function J(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function j(M){const N=M.target;N.removeEventListener("dispose",j),gt(N)}function gt(M){Ft(M),xt.remove(M)}function Ft(M){const N=xt.get(M).programs;N!==void 0&&(N.forEach(function(H){Y.releaseProgram(H)}),M.isShaderMaterial&&Y.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,H,k,F,Q){N===null&&(N=Tt);const ct=F.isMesh&&F.matrixWorld.determinant()<0,mt=cd(M,N,H,k,F);_t.setMaterial(k,ct);let dt=H.index,Rt=1;if(k.wireframe===!0){if(dt=_.getWireframeAttribute(H),dt===void 0)return;Rt=2}const It=H.drawRange,At=H.attributes.position;let Xt=It.start*Rt,te=(It.start+It.count)*Rt;Q!==null&&(Xt=Math.max(Xt,Q.start*Rt),te=Math.min(te,(Q.start+Q.count)*Rt)),dt!==null?(Xt=Math.max(Xt,0),te=Math.min(te,dt.count)):At!=null&&(Xt=Math.max(Xt,0),te=Math.min(te,At.count));const fe=te-Xt;if(fe<0||fe===1/0)return;at.setup(F,k,mt,H,dt);let le,oe=ut;if(dt!==null&&(le=A.get(dt),oe=Dt,oe.setIndex(le)),F.isMesh)k.wireframe===!0?(_t.setLineWidth(k.wireframeLinewidth*Ce()),oe.setMode(P.LINES)):oe.setMode(P.TRIANGLES);else if(F.isLine){let Ct=k.linewidth;Ct===void 0&&(Ct=1),_t.setLineWidth(Ct*Ce()),F.isLineSegments?oe.setMode(P.LINES):F.isLineLoop?oe.setMode(P.LINE_LOOP):oe.setMode(P.LINE_STRIP)}else F.isPoints?oe.setMode(P.POINTS):F.isSprite&&oe.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Gs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))oe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ct=F._multiDrawStarts,ue=F._multiDrawCounts,Kt=F._multiDrawCount,Xe=dt?A.get(dt).bytesPerElement:1,Ni=xt.get(k).currentProgram.getUniforms();for(let qe=0;qe<Kt;qe++)Ni.setValue(P,"_gl_DrawID",qe),oe.render(Ct[qe]/Xe,ue[qe])}else if(F.isInstancedMesh)oe.renderInstances(Xt,fe,F.count);else if(H.isInstancedBufferGeometry){const Ct=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ue=Math.min(H.instanceCount,Ct);oe.renderInstances(Xt,fe,ue)}else oe.render(Xt,fe)};function ae(M,N,H){M.transparent===!0&&M.side===On&&M.forceSinglePass===!1?(M.side=Ge,M.needsUpdate=!0,nr(M,N,H),M.side=ri,M.needsUpdate=!0,nr(M,N,H),M.side=On):nr(M,N,H)}this.compile=function(M,N,H=null){H===null&&(H=M),h=bt.get(H),h.init(N),b.push(h),H.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),M!==H&&M.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights();const k=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const Q=F.material;if(Q)if(Array.isArray(Q))for(let ct=0;ct<Q.length;ct++){const mt=Q[ct];ae(mt,H,F),k.add(mt)}else ae(Q,H,F),k.add(Q)}),h=b.pop(),k},this.compileAsync=function(M,N,H=null){const k=this.compile(M,N,H);return new Promise(F=>{function Q(){if(k.forEach(function(ct){xt.get(ct).currentProgram.isReady()&&k.delete(ct)}),k.size===0){F(M);return}setTimeout(Q,10)}Bt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let $t=null;function Rn(M){$t&&$t(M)}function vn(){ui.stop()}function Yl(){ui.start()}const ui=new lu;ui.setAnimationLoop(Rn),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(M){$t=M,et.setAnimationLoop(M),M===null?ui.stop():ui.start()},et.addEventListener("sessionstart",vn),et.addEventListener("sessionend",Yl),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(N),N=et.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,N,D),h=bt.get(M,b.length),h.init(N),b.push(h),Z.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),re.setFromProjectionMatrix(Z,wn,N.reversedDepth),q=this.localClippingEnabled,qt=st.init(this.clippingPlanes,q),m=X.get(M,E.length),m.init(),E.push(m),et.enabled===!0&&et.isPresenting===!0){const Q=S.xr.getDepthSensingMesh();Q!==null&&yo(Q,N,-1/0,S.sortObjects)}yo(M,N,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(nt,it),Yt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Yt&&Mt.addToRenderList(m,M),this.info.render.frame++,qt===!0&&st.beginShadows();const H=h.state.shadowsArray;vt.render(H,M,N),qt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,F=m.transmissive;if(h.setupLights(),N.isArrayCamera){const Q=N.cameras;if(F.length>0)for(let ct=0,mt=Q.length;ct<mt;ct++){const dt=Q[ct];jl(k,F,M,dt)}Yt&&Mt.render(M);for(let ct=0,mt=Q.length;ct<mt;ct++){const dt=Q[ct];Kl(m,M,dt,dt.viewport)}}else F.length>0&&jl(k,F,M,N),Yt&&Mt.render(M),Kl(m,M,N);D!==null&&T===0&&(zt.updateMultisampleRenderTarget(D),zt.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(S,M,N),at.resetDefaultState(),v=-1,y=null,b.pop(),b.length>0?(h=b[b.length-1],qt===!0&&st.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function yo(M,N,H,k){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)h.pushLight(M),M.castShadow&&h.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||re.intersectsSprite(M)){k&&Nt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Z);const ct=O.update(M),mt=M.material;mt.visible&&m.push(M,ct,mt,H,Nt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||re.intersectsObject(M))){const ct=O.update(M),mt=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Nt.copy(M.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Nt.copy(ct.boundingSphere.center)),Nt.applyMatrix4(M.matrixWorld).applyMatrix4(Z)),Array.isArray(mt)){const dt=ct.groups;for(let Rt=0,It=dt.length;Rt<It;Rt++){const At=dt[Rt],Xt=mt[At.materialIndex];Xt&&Xt.visible&&m.push(M,ct,Xt,H,Nt.z,At)}}else mt.visible&&m.push(M,ct,mt,H,Nt.z,null)}}const Q=M.children;for(let ct=0,mt=Q.length;ct<mt;ct++)yo(Q[ct],N,H,k)}function Kl(M,N,H,k){const F=M.opaque,Q=M.transmissive,ct=M.transparent;h.setupLightsView(H),qt===!0&&st.setGlobalState(S.clippingPlanes,H),k&&_t.viewport(w.copy(k)),F.length>0&&er(F,N,H),Q.length>0&&er(Q,N,H),ct.length>0&&er(ct,N,H),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function jl(M,N,H,k){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[k.id]===void 0&&(h.state.transmissionRenderTarget[k.id]=new Ri(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?js:Cn,minFilter:bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const Q=h.state.transmissionRenderTarget[k.id],ct=k.viewport||w;Q.setSize(ct.z*S.transmissionResolutionScale,ct.w*S.transmissionResolutionScale);const mt=S.getRenderTarget(),dt=S.getActiveCubeFace(),Rt=S.getActiveMipmapLevel();S.setRenderTarget(Q),S.getClearColor(V),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),S.clear(),Yt&&Mt.render(H);const It=S.toneMapping;S.toneMapping=ii;const At=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),h.setupLightsView(k),qt===!0&&st.setGlobalState(S.clippingPlanes,k),er(M,H,k),zt.updateMultisampleRenderTarget(Q),zt.updateRenderTargetMipmap(Q),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let te=0,fe=N.length;te<fe;te++){const le=N[te],oe=le.object,Ct=le.geometry,ue=le.material,Kt=le.group;if(ue.side===On&&oe.layers.test(k.layers)){const Xe=ue.side;ue.side=Ge,ue.needsUpdate=!0,$l(oe,H,k,Ct,ue,Kt),ue.side=Xe,ue.needsUpdate=!0,Xt=!0}}Xt===!0&&(zt.updateMultisampleRenderTarget(Q),zt.updateRenderTargetMipmap(Q))}S.setRenderTarget(mt,dt,Rt),S.setClearColor(V,W),At!==void 0&&(k.viewport=At),S.toneMapping=It}function er(M,N,H){const k=N.isScene===!0?N.overrideMaterial:null;for(let F=0,Q=M.length;F<Q;F++){const ct=M[F],mt=ct.object,dt=ct.geometry,Rt=ct.group;let It=ct.material;It.allowOverride===!0&&k!==null&&(It=k),mt.layers.test(H.layers)&&$l(mt,N,H,dt,It,Rt)}}function $l(M,N,H,k,F,Q){M.onBeforeRender(S,N,H,k,F,Q),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(S,N,H,k,M,Q),F.transparent===!0&&F.side===On&&F.forceSinglePass===!1?(F.side=Ge,F.needsUpdate=!0,S.renderBufferDirect(H,N,k,F,M,Q),F.side=ri,F.needsUpdate=!0,S.renderBufferDirect(H,N,k,F,M,Q),F.side=On):S.renderBufferDirect(H,N,k,F,M,Q),M.onAfterRender(S,N,H,k,F,Q)}function nr(M,N,H){N.isScene!==!0&&(N=Tt);const k=xt.get(M),F=h.state.lights,Q=h.state.shadowsArray,ct=F.state.version,mt=Y.getParameters(M,F.state,Q,N,H),dt=Y.getProgramCacheKey(mt);let Rt=k.programs;k.environment=M.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(M.isMeshStandardMaterial?ge:be).get(M.envMap||k.environment),k.envMapRotation=k.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Rt===void 0&&(M.addEventListener("dispose",j),Rt=new Map,k.programs=Rt);let It=Rt.get(dt);if(It!==void 0){if(k.currentProgram===It&&k.lightsStateVersion===ct)return Jl(M,mt),It}else mt.uniforms=Y.getUniforms(M),M.onBeforeCompile(mt,S),It=Y.acquireProgram(mt,dt),Rt.set(dt,It),k.uniforms=mt.uniforms;const At=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(At.clippingPlanes=st.uniform),Jl(M,mt),k.needsLights=ud(M),k.lightsStateVersion=ct,k.needsLights&&(At.ambientLightColor.value=F.state.ambient,At.lightProbe.value=F.state.probe,At.directionalLights.value=F.state.directional,At.directionalLightShadows.value=F.state.directionalShadow,At.spotLights.value=F.state.spot,At.spotLightShadows.value=F.state.spotShadow,At.rectAreaLights.value=F.state.rectArea,At.ltc_1.value=F.state.rectAreaLTC1,At.ltc_2.value=F.state.rectAreaLTC2,At.pointLights.value=F.state.point,At.pointLightShadows.value=F.state.pointShadow,At.hemisphereLights.value=F.state.hemi,At.directionalShadowMap.value=F.state.directionalShadowMap,At.directionalShadowMatrix.value=F.state.directionalShadowMatrix,At.spotShadowMap.value=F.state.spotShadowMap,At.spotLightMatrix.value=F.state.spotLightMatrix,At.spotLightMap.value=F.state.spotLightMap,At.pointShadowMap.value=F.state.pointShadowMap,At.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=It,k.uniformsList=null,It}function Zl(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=Hr.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Jl(M,N){const H=xt.get(M);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function cd(M,N,H,k,F){N.isScene!==!0&&(N=Tt),zt.resetTextureUnits();const Q=N.fog,ct=k.isMeshStandardMaterial?N.environment:null,mt=D===null?S.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:fs,dt=(k.isMeshStandardMaterial?ge:be).get(k.envMap||ct),Rt=k.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,It=!!H.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),At=!!H.morphAttributes.position,Xt=!!H.morphAttributes.normal,te=!!H.morphAttributes.color;let fe=ii;k.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(fe=S.toneMapping);const le=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,oe=le!==void 0?le.length:0,Ct=xt.get(k),ue=h.state.lights;if(qt===!0&&(q===!0||M!==y)){const Ue=M===y&&k.id===v;st.setState(k,M,Ue)}let Kt=!1;k.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==ue.state.version||Ct.outputColorSpace!==mt||F.isBatchedMesh&&Ct.batching===!1||!F.isBatchedMesh&&Ct.batching===!0||F.isBatchedMesh&&Ct.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ct.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ct.instancing===!1||!F.isInstancedMesh&&Ct.instancing===!0||F.isSkinnedMesh&&Ct.skinning===!1||!F.isSkinnedMesh&&Ct.skinning===!0||F.isInstancedMesh&&Ct.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ct.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ct.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ct.instancingMorph===!1&&F.morphTexture!==null||Ct.envMap!==dt||k.fog===!0&&Ct.fog!==Q||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==st.numPlanes||Ct.numIntersection!==st.numIntersection)||Ct.vertexAlphas!==Rt||Ct.vertexTangents!==It||Ct.morphTargets!==At||Ct.morphNormals!==Xt||Ct.morphColors!==te||Ct.toneMapping!==fe||Ct.morphTargetsCount!==oe)&&(Kt=!0):(Kt=!0,Ct.__version=k.version);let Xe=Ct.currentProgram;Kt===!0&&(Xe=nr(k,N,F));let Ni=!1,qe=!1,Ms=!1;const de=Xe.getUniforms(),Ze=Ct.uniforms;if(_t.useProgram(Xe.program)&&(Ni=!0,qe=!0,Ms=!0),k.id!==v&&(v=k.id,qe=!0),Ni||y!==M){_t.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),de.setValue(P,"projectionMatrix",M.projectionMatrix),de.setValue(P,"viewMatrix",M.matrixWorldInverse);const ze=de.map.cameraPosition;ze!==void 0&&ze.setValue(P,pt.setFromMatrixPosition(M.matrixWorld)),Lt.logarithmicDepthBuffer&&de.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&de.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,qe=!0,Ms=!0)}if(F.isSkinnedMesh){de.setOptional(P,F,"bindMatrix"),de.setOptional(P,F,"bindMatrixInverse");const Ue=F.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),de.setValue(P,"boneTexture",Ue.boneTexture,zt))}F.isBatchedMesh&&(de.setOptional(P,F,"batchingTexture"),de.setValue(P,"batchingTexture",F._matricesTexture,zt),de.setOptional(P,F,"batchingIdTexture"),de.setValue(P,"batchingIdTexture",F._indirectTexture,zt),de.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&de.setValue(P,"batchingColorTexture",F._colorsTexture,zt));const Je=H.morphAttributes;if((Je.position!==void 0||Je.normal!==void 0||Je.color!==void 0)&&tt.update(F,H,Xe),(qe||Ct.receiveShadow!==F.receiveShadow)&&(Ct.receiveShadow=F.receiveShadow,de.setValue(P,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ze.envMap.value=dt,Ze.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(Ze.envMapIntensity.value=N.environmentIntensity),qe&&(de.setValue(P,"toneMappingExposure",S.toneMappingExposure),Ct.needsLights&&hd(Ze,Ms),Q&&k.fog===!0&&$.refreshFogUniforms(Ze,Q),$.refreshMaterialUniforms(Ze,k,G,K,h.state.transmissionRenderTarget[M.id]),Hr.upload(P,Zl(Ct),Ze,zt)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Hr.upload(P,Zl(Ct),Ze,zt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&de.setValue(P,"center",F.center),de.setValue(P,"modelViewMatrix",F.modelViewMatrix),de.setValue(P,"normalMatrix",F.normalMatrix),de.setValue(P,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ue=k.uniformsGroups;for(let ze=0,So=Ue.length;ze<So;ze++){const di=Ue[ze];Ht.update(di,Xe),Ht.bind(di,Xe)}}return Xe}function hd(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function ud(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,N,H){const k=xt.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),xt.get(M.texture).__webglTexture=N,xt.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:H,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const H=xt.get(M);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};const dd=P.createFramebuffer();this.setRenderTarget=function(M,N=0,H=0){D=M,R=N,T=H;let k=!0,F=null,Q=!1,ct=!1;if(M){const dt=xt.get(M);if(dt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(P.FRAMEBUFFER,null),k=!1;else if(dt.__webglFramebuffer===void 0)zt.setupRenderTarget(M);else if(dt.__hasExternalTextures)zt.rebindTextures(M,xt.get(M.texture).__webglTexture,xt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const At=M.depthTexture;if(dt.__boundDepthTexture!==At){if(At!==null&&xt.has(At)&&(M.width!==At.image.width||M.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(M)}}const Rt=M.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ct=!0);const It=xt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(It[N])?F=It[N][H]:F=It[N],Q=!0):M.samples>0&&zt.useMultisampledRTT(M)===!1?F=xt.get(M).__webglMultisampledFramebuffer:Array.isArray(It)?F=It[H]:F=It,w.copy(M.viewport),U.copy(M.scissor),B=M.scissorTest}else w.copy(Et).multiplyScalar(G).floor(),U.copy(Ot).multiplyScalar(G).floor(),B=Zt;if(H!==0&&(F=dd),_t.bindFramebuffer(P.FRAMEBUFFER,F)&&k&&_t.drawBuffers(M,F),_t.viewport(w),_t.scissor(U),_t.setScissorTest(B),Q){const dt=xt.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt.__webglTexture,H)}else if(ct){const dt=N;for(let Rt=0;Rt<M.textures.length;Rt++){const It=xt.get(M.textures[Rt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Rt,It.__webglTexture,H,dt)}}else if(M!==null&&H!==0){const dt=xt.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,dt.__webglTexture,H)}v=-1},this.readRenderTargetPixels=function(M,N,H,k,F,Q,ct,mt=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=xt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ct!==void 0&&(dt=dt[ct]),dt){_t.bindFramebuffer(P.FRAMEBUFFER,dt);try{const Rt=M.textures[mt],It=Rt.format,At=Rt.type;if(!Lt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-k&&H>=0&&H<=M.height-F&&(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+mt),P.readPixels(N,H,k,F,yt.convert(It),yt.convert(At),Q))}finally{const Rt=D!==null?xt.get(D).__webglFramebuffer:null;_t.bindFramebuffer(P.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(M,N,H,k,F,Q,ct,mt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=xt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ct!==void 0&&(dt=dt[ct]),dt)if(N>=0&&N<=M.width-k&&H>=0&&H<=M.height-F){_t.bindFramebuffer(P.FRAMEBUFFER,dt);const Rt=M.textures[mt],It=Rt.format,At=Rt.type;if(!Lt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Xt),P.bufferData(P.PIXEL_PACK_BUFFER,Q.byteLength,P.STREAM_READ),M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+mt),P.readPixels(N,H,k,F,yt.convert(It),yt.convert(At),0);const te=D!==null?xt.get(D).__webglFramebuffer:null;_t.bindFramebuffer(P.FRAMEBUFFER,te);const fe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await af(P,fe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Xt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Q),P.deleteBuffer(Xt),P.deleteSync(fe),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,H=0){const k=Math.pow(2,-H),F=Math.floor(M.image.width*k),Q=Math.floor(M.image.height*k),ct=N!==null?N.x:0,mt=N!==null?N.y:0;zt.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,ct,mt,F,Q),_t.unbindTexture()};const fd=P.createFramebuffer(),pd=P.createFramebuffer();this.copyTextureToTexture=function(M,N,H=null,k=null,F=0,Q=null){Q===null&&(F!==0?(Gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=F,F=0):Q=0);let ct,mt,dt,Rt,It,At,Xt,te,fe;const le=M.isCompressedTexture?M.mipmaps[Q]:M.image;if(H!==null)ct=H.max.x-H.min.x,mt=H.max.y-H.min.y,dt=H.isBox3?H.max.z-H.min.z:1,Rt=H.min.x,It=H.min.y,At=H.isBox3?H.min.z:0;else{const Je=Math.pow(2,-F);ct=Math.floor(le.width*Je),mt=Math.floor(le.height*Je),M.isDataArrayTexture?dt=le.depth:M.isData3DTexture?dt=Math.floor(le.depth*Je):dt=1,Rt=0,It=0,At=0}k!==null?(Xt=k.x,te=k.y,fe=k.z):(Xt=0,te=0,fe=0);const oe=yt.convert(N.format),Ct=yt.convert(N.type);let ue;N.isData3DTexture?(zt.setTexture3D(N,0),ue=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(zt.setTexture2DArray(N,0),ue=P.TEXTURE_2D_ARRAY):(zt.setTexture2D(N,0),ue=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const Kt=P.getParameter(P.UNPACK_ROW_LENGTH),Xe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ni=P.getParameter(P.UNPACK_SKIP_PIXELS),qe=P.getParameter(P.UNPACK_SKIP_ROWS),Ms=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,le.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,le.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Rt),P.pixelStorei(P.UNPACK_SKIP_ROWS,It),P.pixelStorei(P.UNPACK_SKIP_IMAGES,At);const de=M.isDataArrayTexture||M.isData3DTexture,Ze=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const Je=xt.get(M),Ue=xt.get(N),ze=xt.get(Je.__renderTarget),So=xt.get(Ue.__renderTarget);_t.bindFramebuffer(P.READ_FRAMEBUFFER,ze.__webglFramebuffer),_t.bindFramebuffer(P.DRAW_FRAMEBUFFER,So.__webglFramebuffer);for(let di=0;di<dt;di++)de&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xt.get(M).__webglTexture,F,At+di),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xt.get(N).__webglTexture,Q,fe+di)),P.blitFramebuffer(Rt,It,ct,mt,Xt,te,ct,mt,P.DEPTH_BUFFER_BIT,P.NEAREST);_t.bindFramebuffer(P.READ_FRAMEBUFFER,null),_t.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||xt.has(M)){const Je=xt.get(M),Ue=xt.get(N);_t.bindFramebuffer(P.READ_FRAMEBUFFER,fd),_t.bindFramebuffer(P.DRAW_FRAMEBUFFER,pd);for(let ze=0;ze<dt;ze++)de?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Je.__webglTexture,F,At+ze):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Je.__webglTexture,F),Ze?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ue.__webglTexture,Q,fe+ze):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ue.__webglTexture,Q),F!==0?P.blitFramebuffer(Rt,It,ct,mt,Xt,te,ct,mt,P.COLOR_BUFFER_BIT,P.NEAREST):Ze?P.copyTexSubImage3D(ue,Q,Xt,te,fe+ze,Rt,It,ct,mt):P.copyTexSubImage2D(ue,Q,Xt,te,Rt,It,ct,mt);_t.bindFramebuffer(P.READ_FRAMEBUFFER,null),_t.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ze?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(ue,Q,Xt,te,fe,ct,mt,dt,oe,Ct,le.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(ue,Q,Xt,te,fe,ct,mt,dt,oe,le.data):P.texSubImage3D(ue,Q,Xt,te,fe,ct,mt,dt,oe,Ct,le):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Q,Xt,te,ct,mt,oe,Ct,le.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Q,Xt,te,le.width,le.height,oe,le.data):P.texSubImage2D(P.TEXTURE_2D,Q,Xt,te,ct,mt,oe,Ct,le);P.pixelStorei(P.UNPACK_ROW_LENGTH,Kt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Xe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ni),P.pixelStorei(P.UNPACK_SKIP_ROWS,qe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ms),Q===0&&N.generateMipmaps&&P.generateMipmap(ue),_t.unbindTexture()},this.initRenderTarget=function(M){xt.get(M).__webglFramebuffer===void 0&&zt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?zt.setTextureCube(M,0):M.isData3DTexture?zt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?zt.setTexture2DArray(M,0):zt.setTexture2D(M,0),_t.unbindTexture()},this.resetState=function(){R=0,T=0,D=null,_t.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const lh={type:"change"},wl={type:"start"},fu={type:"end"},Dr=new ro,ch=new Fn,L0=Math.cos(70*rf.DEG2RAD),xe=new L,Ve=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},na=1e-6;class I0 extends Kf{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:rs.ROTATE,MIDDLE:rs.DOLLY,RIGHT:rs.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Vn,this._lastTargetPosition=new L,this._quat=new Vn().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fc,this._sphericalDelta=new Fc,this._scale=1,this._panOffset=new L,this._rotateStart=new wt,this._rotateEnd=new wt,this._rotateDelta=new wt,this._panStart=new wt,this._panEnd=new wt,this._panDelta=new wt,this._dollyStart=new wt,this._dollyEnd=new wt,this._dollyDelta=new wt,this._dollyDirection=new L,this._mouse=new wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=N0.bind(this),this._onPointerDown=U0.bind(this),this._onPointerUp=F0.bind(this),this._onContextMenu=G0.bind(this),this._onMouseWheel=H0.bind(this),this._onKeyDown=k0.bind(this),this._onTouchStart=z0.bind(this),this._onTouchMove=V0.bind(this),this._onMouseDown=O0.bind(this),this._onMouseMove=B0.bind(this),this._interceptControlDown=W0.bind(this),this._interceptControlUp=X0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lh),this.update(),this.state=ie.NONE}update(t=null){const e=this.object.position;xe.copy(e).sub(this.target),xe.applyQuaternion(this._quat),this._spherical.setFromVector3(xe),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ve:i>Math.PI&&(i-=Ve),s<-Math.PI?s+=Ve:s>Math.PI&&(s-=Ve),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(xe.setFromSpherical(this._spherical),xe.applyQuaternion(this._quatInverse),e.copy(this.target).add(xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=xe.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Dr.origin.copy(this.object.position),Dr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Dr.direction))<L0?this.object.lookAt(this.target):(ch.setFromNormalAndCoplanarPoint(this.object.up,this.target),Dr.intersectPlane(ch,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>na||8*(1-this._lastQuaternion.dot(this.object.quaternion))>na||this._lastTargetPosition.distanceToSquared(this.target)>na?(this.dispatchEvent(lh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ve/60*this.autoRotateSpeed*t:Ve/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){xe.setFromMatrixColumn(e,0),xe.multiplyScalar(-t),this._panOffset.add(xe)}_panUp(t,e){this.screenSpacePanning===!0?xe.setFromMatrixColumn(e,1):(xe.setFromMatrixColumn(e,0),xe.crossVectors(this.object.up,xe)),xe.multiplyScalar(t),this._panOffset.add(xe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;xe.copy(s).sub(this.target);let r=xe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new wt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function U0(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function N0(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function F0(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fu),this.state=ie.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function O0(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case rs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ie.DOLLY;break;case rs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ie.ROTATE}break;case rs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(wl)}function B0(n){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function H0(n){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(n.preventDefault(),this.dispatchEvent(wl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(fu))}function k0(n){this.enabled!==!1&&this._handleKeyDown(n)}function z0(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ns.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ie.TOUCH_ROTATE;break;case ns.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case ns.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ie.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(wl)}function V0(n){switch(this._trackPointer(n),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ie.NONE}}function G0(n){this.enabled!==!1&&n.preventDefault()}function W0(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function X0(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const q0=[[1,"H","Hydrogen",1.008,"nonmetal",2.2,1,1,null,31,"FFFFFF"],[2,"He","Helium",4.003,"noble",null,0,0,null,28,"D9FFFF"],[3,"Li","Lithium",6.94,"alkali",.98,1,0,[1],128,"CC80FF"],[4,"Be","Beryllium",9.012,"alkaline",1.57,4,0,[2],96,"C2FF00"],[5,"B","Boron",10.81,"metalloid",2.04,4,3,null,84,"FFB5B5"],[6,"C","Carbon",12.011,"nonmetal",2.55,4,4,null,76,"909090"],[7,"N","Nitrogen",14.007,"nonmetal",3.04,4,3,null,71,"3050F8"],[8,"O","Oxygen",15.999,"nonmetal",3.44,3,2,null,66,"FF0D0D"],[9,"F","Fluorine",18.998,"halogen",3.98,1,1,null,57,"90E050"],[10,"Ne","Neon",20.18,"noble",null,0,0,null,58,"B3E3F5"],[11,"Na","Sodium",22.99,"alkali",.93,1,0,[1],166,"AB5CF2"],[12,"Mg","Magnesium",24.305,"alkaline",1.31,2,0,[2],141,"8AFF00"],[13,"Al","Aluminium",26.982,"post",1.61,4,0,[3],121,"BFA6A6"],[14,"Si","Silicon",28.085,"metalloid",1.9,6,4,null,111,"F0C8A0"],[15,"P","Phosphorus",30.974,"nonmetal",2.19,6,3,null,107,"FF8000"],[16,"S","Sulfur",32.06,"nonmetal",2.58,6,2,null,105,"FFFF30"],[17,"Cl","Chlorine",35.45,"halogen",3.16,7,1,null,102,"1FF01F"],[18,"Ar","Argon",39.948,"noble",null,0,0,null,106,"80D1E3"],[19,"K","Potassium",39.098,"alkali",.82,1,0,[1],203,"8F40D4"],[20,"Ca","Calcium",40.078,"alkaline",1,2,0,[2],176,"3DFF00"],[21,"Sc","Scandium",44.956,"transition",1.36,3,0,[3],170,"E6E6E6"],[22,"Ti","Titanium",47.867,"transition",1.54,4,0,[4,3],160,"BFC2C7"],[23,"V","Vanadium",50.942,"transition",1.63,5,0,[5,4,3],153,"A6A6AB"],[24,"Cr","Chromium",51.996,"transition",1.66,6,0,[3,6],139,"8A99C7"],[25,"Mn","Manganese",54.938,"transition",1.55,7,0,[2,7,4],145,"9C7AC7"],[26,"Fe","Iron",55.845,"transition",1.83,6,0,[2,3],140,"E06633"],[27,"Co","Cobalt",58.933,"transition",1.88,5,0,[2,3],126,"F090A0"],[28,"Ni","Nickel",58.693,"transition",1.91,4,0,[2,3],124,"50D050"],[29,"Cu","Copper",63.546,"transition",1.9,4,0,[2,1],132,"C88033"],[30,"Zn","Zinc",65.38,"transition",1.65,2,0,[2],122,"7D80B0"],[31,"Ga","Gallium",69.723,"post",1.81,4,0,[3],122,"C28F8F"],[32,"Ge","Germanium",72.63,"metalloid",2.01,6,4,null,120,"668F8F"],[33,"As","Arsenic",74.922,"metalloid",2.18,6,3,null,119,"BD80E3"],[34,"Se","Selenium",78.971,"nonmetal",2.55,6,2,null,120,"FFA100"],[35,"Br","Bromine",79.904,"halogen",2.96,7,1,null,120,"A62929"],[36,"Kr","Krypton",83.798,"noble",3,2,0,null,116,"5CB8D1"],[37,"Rb","Rubidium",85.468,"alkali",.82,1,0,[1],220,"702EB0"],[38,"Sr","Strontium",87.62,"alkaline",.95,2,0,[2],195,"00FF00"],[39,"Y","Yttrium",88.906,"transition",1.22,3,0,[3],190,"94FFFF"],[40,"Zr","Zirconium",91.224,"transition",1.33,4,0,[4],175,"94E0E0"],[41,"Nb","Niobium",92.906,"transition",1.6,5,0,[5],164,"73C2C9"],[42,"Mo","Molybdenum",95.95,"transition",2.16,6,0,[6,4],154,"54B5B5"],[43,"Tc","Technetium",98,"transition",1.9,7,0,[7],147,"3B9E9E"],[44,"Ru","Ruthenium",101.07,"transition",2.2,8,0,[3,4],146,"248F8F"],[45,"Rh","Rhodium",102.91,"transition",2.28,6,0,[3],142,"0A7D8C"],[46,"Pd","Palladium",106.42,"transition",2.2,4,0,[2,4],139,"006985"],[47,"Ag","Silver",107.87,"transition",1.93,3,0,[1],145,"C0C0C0"],[48,"Cd","Cadmium",112.41,"transition",1.69,2,0,[2],144,"FFD98F"],[49,"In","Indium",114.82,"post",1.78,3,0,[3,1],142,"A67573"],[50,"Sn","Tin",118.71,"post",1.96,4,0,[4,2],139,"668080"],[51,"Sb","Antimony",121.76,"metalloid",2.05,6,3,null,139,"9E63B5"],[52,"Te","Tellurium",127.6,"metalloid",2.1,6,2,null,138,"D47A00"],[53,"I","Iodine",126.9,"halogen",2.66,7,1,null,139,"940094"],[54,"Xe","Xenon",131.29,"noble",2.6,6,0,null,140,"429EB0"],[55,"Cs","Caesium",132.91,"alkali",.79,1,0,[1],244,"57178F"],[56,"Ba","Barium",137.33,"alkaline",.89,2,0,[2],215,"00C900"],[57,"La","Lanthanum",138.91,"lanthanide",1.1,3,0,[3],207,"70D4FF"],[58,"Ce","Cerium",140.12,"lanthanide",1.12,4,0,[3,4],204,"FFFC00"],[59,"Pr","Praseodymium",140.91,"lanthanide",1.13,4,0,[3],203,"D9FFC9"],[60,"Nd","Neodymium",144.24,"lanthanide",1.14,3,0,[3],201,"C7FFC7"],[61,"Pm","Promethium",145,"lanthanide",1.13,3,0,[3],199,"A3FFC7"],[62,"Sm","Samarium",150.36,"lanthanide",1.17,3,0,[3,2],198,"8FFFC7"],[63,"Eu","Europium",151.96,"lanthanide",1.2,3,0,[3,2],198,"61FFC7"],[64,"Gd","Gadolinium",157.25,"lanthanide",1.2,3,0,[3],196,"45FFC7"],[65,"Tb","Terbium",158.93,"lanthanide",1.2,4,0,[3,4],194,"30FFC7"],[66,"Dy","Dysprosium",162.5,"lanthanide",1.22,3,0,[3],192,"1FFFC9"],[67,"Ho","Holmium",164.93,"lanthanide",1.23,3,0,[3],192,"00FFC4"],[68,"Er","Erbium",167.26,"lanthanide",1.24,3,0,[3],189,"00E675"],[69,"Tm","Thulium",168.93,"lanthanide",1.25,3,0,[3,2],190,"00D452"],[70,"Yb","Ytterbium",173.05,"lanthanide",1.1,3,0,[3,2],187,"00BF38"],[71,"Lu","Lutetium",174.97,"lanthanide",1.27,3,0,[3],187,"00AB24"],[72,"Hf","Hafnium",178.49,"transition",1.3,4,0,[4],175,"4DC2FF"],[73,"Ta","Tantalum",180.95,"transition",1.5,5,0,[5],170,"4DA6FF"],[74,"W","Tungsten",183.84,"transition",2.36,6,0,[6,4],162,"2194D6"],[75,"Re","Rhenium",186.21,"transition",1.9,7,0,[7,4],159,"267DAB"],[76,"Os","Osmium",190.23,"transition",2.2,8,0,[8,4],159,"266696"],[77,"Ir","Iridium",192.22,"transition",2.2,6,0,[3,4],141,"175487"],[78,"Pt","Platinum",195.08,"transition",2.28,4,0,[4,2],136,"D0D0E0"],[79,"Au","Gold",196.97,"transition",2.54,5,0,[3,1],136,"FFD123"],[80,"Hg","Mercury",200.59,"transition",2,2,0,[2,1],132,"B8B8D0"],[81,"Tl","Thallium",204.38,"post",1.62,3,0,[1,3],145,"A6544D"],[82,"Pb","Lead",207.2,"post",2.33,4,0,[2,4],146,"575961"],[83,"Bi","Bismuth",208.98,"post",2.02,5,0,[3],148,"9E4B62"],[84,"Po","Polonium",209,"post",2,6,2,[4,2],140,"AB0C00"],[85,"At","Astatine",210,"halogen",2.2,7,1,null,150,"754F45"],[86,"Rn","Radon",222,"noble",2.2,2,0,null,150,"428296"],[87,"Fr","Francium",223,"alkali",.7,1,0,[1],260,"420066"],[88,"Ra","Radium",226,"alkaline",.9,2,0,[2],221,"007D00"],[89,"Ac","Actinium",227,"actinide",1.1,3,0,[3],215,"00ABFF"],[90,"Th","Thorium",232.04,"actinide",1.3,4,0,[4],206,"008AFF"],[91,"Pa","Protactinium",231.04,"actinide",1.5,5,0,[5],200,"00A1FF"],[92,"U","Uranium",238.03,"actinide",1.38,6,0,[6,4],196,"008FFF"],[93,"Np","Neptunium",237,"actinide",1.36,6,0,[5,4],190,"0080FF"],[94,"Pu","Plutonium",244,"actinide",1.28,6,0,[4,6],187,"006BFF"],[95,"Am","Americium",243,"actinide",1.13,6,0,[3,2],180,"545CF2"],[96,"Cm","Curium",247,"actinide",1.28,4,0,[3],169,"785CE3"],[97,"Bk","Berkelium",247,"actinide",1.3,4,0,[3,4],170,"8A4FE3"],[98,"Cf","Californium",251,"actinide",1.3,4,0,[3],190,"A136DA"],[99,"Es","Einsteinium",252,"actinide",1.3,3,0,[3],190,"B31BDA"],[100,"Fm","Fermium",257,"actinide",1.3,3,0,[3],190,"B31BBA"],[101,"Md","Mendelevium",258,"actinide",1.3,3,0,[3],190,"B30DA6"],[102,"No","Nobelium",259,"actinide",1.3,3,0,[2,3],190,"E006A0"],[103,"Lr","Lawrencium",266,"actinide",1.3,3,0,[3],190,"FF00CC"],[104,"Rf","Rutherfordium",267,"transition",null,4,0,[4],160,"CC0080"],[105,"Db","Dubnium",268,"transition",null,5,0,[5],160,"D6004D"],[106,"Sg","Seaborgium",269,"transition",null,6,0,[6],160,"C20000"],[107,"Bh","Bohrium",270,"transition",null,7,0,[7],160,"B60000"],[108,"Hs","Hassium",269,"transition",null,8,0,[8],160,"9E0000"],[109,"Mt","Meitnerium",278,"transition",null,6,0,[6],160,"820000"],[110,"Ds","Darmstadtium",281,"transition",null,6,0,[6],160,"75007D"],[111,"Rg","Roentgenium",282,"transition",null,6,0,[6],160,"660054"],[112,"Cn","Copernicium",285,"transition",null,2,0,[2],160,"5C004A"],[113,"Nh","Nihonium",286,"post",null,3,0,[1],170,"510A44"],[114,"Fl","Flerovium",289,"post",null,4,0,[2],180,"460D3B"],[115,"Mc","Moscovium",290,"post",null,3,0,[1,3],180,"3D1140"],[116,"Lv","Livermorium",293,"post",null,4,0,[2],180,"341244"],[117,"Ts","Tennessine",294,"halogen",null,3,1,null,180,"2A0B29"],[118,"Og","Oganesson",294,"noble",null,0,0,null,180,"1B0419"]],uo=q0.map(([n,t,e,i,s,r,o,a,c,l,u])=>({z:n,sym:t,name:e,mass:i,cat:s,en:r,maxBonds:o,anionCharge:a,charges:c,radius:l,color:"#"+u,valenceElectrons:Y0(n)}));function Y0(n){if(n===1)return 1;if(n===2)return 2;const t={3:1,4:2,5:3,6:4,7:5,8:6,9:7,10:8,11:1,12:2,13:3,14:4,15:5,16:6,17:7,18:8};if(t[n])return t[n];const e=pu(n);return e>=13&&e<=18?e-10:0}function pu(n){return n===1?1:n===2?18:n>=3&&n<=4?n-2:n>=5&&n<=10?n+8:n>=11&&n<=12?n-10:n>=13&&n<=18?n:n>=19&&n<=20||n>=21&&n<=30||n>=31&&n<=36?n-18:n>=37&&n<=38||n>=39&&n<=48||n>=49&&n<=54?n-36:n>=55&&n<=56?n-54:n>=72&&n<=80||n>=81&&n<=86?n-68:n>=87&&n<=88?n-86:n>=104&&n<=112||n>=113&&n<=118?n-100:3}function K0(n){return n<=2?1:n<=10?2:n<=18?3:n<=36?4:n<=54?5:n<=86?6:7}function j0(n){if(n>=57&&n<=71)return{col:n-57+3,row:9};if(n>=89&&n<=103)return{col:n-89+3,row:10};const t=K0(n);return{col:pu(n),row:t}}const $0={alkali:"#ff8a80",alkaline:"#ffb74d",transition:"#ffd54f",post:"#aed581",metalloid:"#4db6ac",nonmetal:"#64b5f6",halogen:"#ba68c8",noble:"#f06292",lanthanide:"#f48fb1",actinide:"#ffab91"},mu=n=>["alkali","alkaline","transition","post","lanthanide","actinide"].includes(n),je=n=>mu(n.cat),Z0=new Set([36,54,86]),hh=n=>n.cat==="noble"&&!Z0.has(n.z),uh=n=>n.sym==="F"||n.sym==="O";function Ws(n){return uo.find(t=>t.sym===n)}function zn(n,t,e){return[...t.values()].filter(i=>i.a===e||i.b===e)}function ls(n,t,e){return zn(n,t,e).filter(i=>!i.ionic).reduce((i,s)=>i+s.order,0)}function ti(n,t,e){return zn(n,t,e).filter(i=>i.ionic).reduce((i,s)=>i+s.order,0)}function Kr(n,t){return n.a===t?n.b:n.a}function Xs(n,t,e){const i=n.valenceElectrons+e-t;return i<0||i%2!==0?"parity":n.z<=10&&t+i/2>4?"octet":null}function gu(n,t,e){for(let i=e;i<=n.anionCharge;i++)if(!Xs(n,t,i))return!0;return!1}function J0(n,t,e,i){const s=n.get(e),r=n.get(i);if(je(s.el)||je(r.el))return je(s.el)&&je(r.el)?{ok:!1,reason:{key:"chem.metalMetal"}}:{ok:!1,reason:{key:"chem.metalIonic"}};if(hh(s.el)||hh(r.el))return{ok:!1,reason:{key:"chem.nobleNoCompound"}};if(s.el.cat==="noble"&&!uh(r.el)||r.el.cat==="noble"&&!uh(s.el))return{ok:!1,reason:{key:"chem.nobleOnlyFO"}};const o=a=>a.el.maxBonds-ls(n,t,a.id);if(o(s)<=0)return{ok:!1,reason:{key:"chem.noCapacity",p:{sym:s.el.sym,max:s.el.maxBonds}}};if(o(r)<=0)return{ok:!1,reason:{key:"chem.noCapacity",p:{sym:r.el.sym,max:r.el.maxBonds}}};for(const a of[s,r]){if(je(a.el))continue;const c=ti(n,t,a.id);if(!c)continue;const l=Xs(a.el,ls(n,t,a.id)+1,c);if(l)return{ok:!1,reason:l==="octet"?{key:"chem.octet",p:{sym:a.el.sym}}:{key:"chem.anionClosedShare",p:{sym:a.el.sym,n:c,s:c>1?"s":""}}}}return{ok:!0,type:"covalent"}}function Q0(n,t,e,i){const s=n.get(e),r=n.get(i),o=je(s.el)?s:je(r.el)?r:null,a=o?o===s?r:s:null;if(!o)return{ok:!1,reason:{key:"chem.ionicNeedMetal"}};if(a.el.cat==="noble")return{ok:!1,reason:{key:"chem.nobleNoCompound"}};const c=Math.max(...o.el.charges);if(ti(n,t,o.id)>=c)return{ok:!1,reason:{key:"chem.metalMax",p:{sym:o.el.sym,max:c}}};if(!a.el.anionCharge)return{ok:!1,reason:{key:"chem.noAnion",p:{sym:a.el.sym}}};if(ti(n,t,a.id)>=a.el.anionCharge)return{ok:!1,reason:{key:"chem.anionMax",p:{sym:a.el.sym,max:a.el.anionCharge}}};const l=ls(n,t,a.id),u=ti(n,t,a.id)+1;return gu(a.el,l,u)?{ok:!0,type:"ionic"}:{ok:!1,reason:Xs(a.el,l,u)==="octet"?{key:"chem.octet",p:{sym:a.el.sym}}:{key:"chem.noLewisSharing",p:{sym:a.el.sym,n:l,s:l===1?"":"s"}}}}function _u(n,t,e,i){if(e===i)return{ok:!1,reason:{key:"chem.selfBond"}};if(zn(n,t,e).some(o=>Kr(o,e)===i))return{ok:!1,reason:{key:"chem.alreadyBonded"}};const s=J0(n,t,e,i);if(s.ok)return s;const r=Q0(n,t,e,i);return r.ok?r:s.reason?.key&&!s.reason.key.startsWith("chem.metal")?s:r}const dh=new Set(["F","Cl","Br","I","At"]);function tx(n,t){if(dh.has(n.sym)&&dh.has(t.sym))return 1;if(n.sym==="O"&&t.sym==="O")return 2;const e=[n.sym,t.sym];return e.includes("O")&&e.includes("F")?1:3}function xu(n,t,e){if(e.order>=3)return{ok:!1,reason:{key:e.ionic?"chem.ionicMax3":"chem.tripleMax"}};if(e.ionic){const s=n.get(e.a),r=n.get(e.b),o=je(s.el)?s:r,a=o===s?r:s,c=Math.max(...o.el.charges);if(ti(n,t,o.id)+1>c)return{ok:!1,reason:{key:"chem.metalTransferMax",p:{sym:o.el.sym,max:c}}};if(ti(n,t,a.id)+1>a.el.anionCharge)return{ok:!1,reason:{key:"chem.anionAcceptMax",p:{sym:a.el.sym,max:a.el.anionCharge}}};const l=ls(n,t,a.id),u=ti(n,t,a.id)+1;return gu(a.el,l,u)?{ok:!0}:{ok:!1,reason:Xs(a.el,l,u)==="octet"?{key:"chem.octet",p:{sym:a.el.sym}}:{key:"chem.noLewisSharing",p:{sym:a.el.sym,n:l,s:l===1?"":"s"}}}}const i=tx(n.get(e.a).el,n.get(e.b).el);if(e.order+1>i){const s=n.get(e.a).el.sym,r=n.get(e.b).el.sym;return{ok:!1,reason:i===2?{key:"chem.pairCapTriple",p:{a:s,b:r}}:{key:"chem.pairCapSingle",p:{a:s,b:r}}}}for(const s of[e.a,e.b]){const r=n.get(s);if(ls(n,t,s)+1>r.el.maxBonds)return{ok:!1,reason:{key:"chem.capacityMax",p:{sym:r.el.sym,max:r.el.maxBonds}}};if(je(r.el))continue;const o=ti(n,t,s);if(!o)continue;const a=Xs(r.el,ls(n,t,s)+1,o);if(a==="parity")return{ok:!1,reason:{key:"chem.anionClosedShareMore",p:{sym:r.el.sym}}};if(a==="octet")return{ok:!1,reason:{key:"chem.octet",p:{sym:r.el.sym}}}}return{ok:!0}}function fo(n,t){const e=[],i=new Set;for(const s of n.keys()){if(i.has(s))continue;const r={atoms:[],bonds:[]},o=[s];for(i.add(s);o.length;){const a=o.pop();r.atoms.push(a);for(const c of zn(n,t,a)){r.bonds.push(c);const l=Kr(c,a);i.has(l)||(i.add(l),o.push(l))}}r.bonds=[...new Set(r.bonds)],e.push(r)}return e}function wi(n,t,e){return fo(n,t).find(i=>i.atoms.includes(e))}function ex(n,t,e,i=null){const s=new Map,r=[];let o=0,a=0,c=0;for(const g of e){const x=n.get(g),m=zn(n,t,g),h=m.filter(v=>!v.ionic).reduce((v,y)=>v+y.order,0),E=m.filter(v=>v.ionic).reduce((v,y)=>v+y.order,0),b=m.length>0,S=je(x.el),C=x.el.valenceElectrons;let R=0,T=0,D=0;if(S)R=0,T=E;else if(b){o+=C,a+=h,c+=E;const v=Math.ceil(Math.max(0,C+E-h)/2);D=x.el.z<=10?Math.max(0,Math.min(4-h,v)):v}else if(R=Math.floor(C/2),T=0,i!=null&&e.length===1){const v=(C-i)/2,y=x.el.z<=10?4:6;if(!Number.isInteger(v)||v<0||v>y)return{feasible:!1,reason:{key:"chem.lewis.charge"},charge:i};R=v,T=i}s.set(g,{lp:R,fc:T,ionU:E,covSum:h,sigma:m.length,cap:D,isMetal:S,bonded:b}),!S&&b&&r.push({id:g,cap:D,V:C,covSum:h,ionU:E,heavy:x.el.z>10,carbon:x.el.z===6,of:x.el.sym==="O"||x.el.sym==="F"})}const l=g=>{r.forEach((x,m)=>{s.get(x.id).lp=g[m],s.get(x.id).fc=x.V-2*g[m]-x.covSum})},u=(g,x)=>{const m=g.V-2*x-g.covSum;let h=Math.abs(m)+.01*x;return(g.heavy||g.carbon)&&x>0&&(h+=3*x),m>0&&g.of&&(h+=3),h},d=g=>{const x=r.length,m=new Map,h=(E,b)=>{if(E===x)return b===0?{score:0,lps:[]}:null;const S=E*4096+b;if(m.has(S))return m.get(S);let C=null;for(let R=0;R<=Math.min(r[E].cap,b);R++){const T=h(E+1,b-R);if(!T)continue;const D=T.score+u(r[E],R);(!C||D<C.score)&&(C={score:D,lps:[R,...T.lps]})}return m.set(S,C),C};return h(0,g)};if(i!=null){if(r.length===0)return[...s.values()].reduce((h,E)=>h+E.fc,0)===i?{feasible:!0,per:s,charge:i}:{feasible:!1,reason:{key:"chem.lewis.charge"},charge:i};const g=o+c-a-i;if(g%2!==0)return{feasible:!1,reason:{key:"chem.lewis.radical"},charge:i};if(g<0)return{feasible:!1,reason:{key:"chem.lewis.electrons"},charge:i};const x=d(g/2);return x?(l(x.lps),{feasible:!0,per:s,charge:i}):{feasible:!1,reason:{key:"chem.lewis.charge"},charge:i}}const f=o+c-a;let p=null;for(let g=0;g<=12&&!(p&&Math.abs(p.charge)<g);g++)for(const x of g===0?[1]:[1,-1]){const m=f-x*g;if(m<0||m%2!==0)continue;const h=d(m/2);if(!h)continue;const E=[h.score,m/2];(!p||E<p.key)&&(p={sol:h,charge:x*g,key:E})}return p?(l(p.sol.lps),{feasible:!0,per:s,charge:p.charge}):{feasible:!0,per:s,charge:0}}function nx(n,t,e,i=null){const s=ex(n,t,e.atoms,i);return{...s,formula:sx(n,t,e.atoms,s.per)}}const ix=new Set(["N"]);function nl(n){const t=new Map;for(const a of n)t.set(a.sym,(t.get(a.sym)||0)+1);const e=[...t.keys()],i=a=>a+(t.get(a)>1?t.get(a):"");if(e.length===1)return i(e[0]);if(t.has("C")){let a=i("C");return t.has("H")&&(a+=i("H")),a+=e.filter(c=>c!=="C"&&c!=="H").sort().map(i).join(""),a}const s=t.get("H")||0,r=e.filter(a=>a!=="H");if(s>0&&r.length===1&&ix.has(r[0]))return i(r[0])+(s>1?`H${s}`:"H");if(s>0&&r.length===1&&(r[0]==="Te"||r[0]==="Po"||r[0]==="At"))return(s>1?`H${s}`:"H")+i(r[0]);if(s===1&&r.length===1&&r[0]==="O"&&t.get("O")===1)return"OH";const o=a=>Ws(a)?.en??0;return[...e].sort((a,c)=>o(a)-o(c)||(a<c?-1:1)).map(i).join("")}function sx(n,t,e,i=new Map){const s=new Set(e),r=new Map(e.map(p=>[p,p])),o=p=>{let g=p;for(;r.get(g)!==g;)g=r.get(g);for(;r.get(p)!==g;){const x=r.get(p);r.set(p,g),p=x}return g};for(const p of t.values())p.ionic||!s.has(p.a)||!s.has(p.b)||r.set(o(p.a),o(p.b));const a=[],c=new Map;for(const p of e){const g=o(p);c.has(g)||(c.set(g,[]),a.push(c.get(g))),c.get(g).push(p)}if(a.length===1)return nl(e.map(p=>n.get(p).el));const l=new Map,u=new Map,d=[];for(const p of a){const g=nl(p.map(m=>n.get(m).el)),x=p.reduce((m,h)=>m+(i.get(h)?.fc??0),0);x>0?l.set(g,(l.get(g)||0)+1):x<0?u.set(g,(u.get(g)||0)+1):d.push(g)}const f=p=>[...p.entries()].map(([g,x])=>x===1?g:(g.match(/[A-Z][a-z]?\d*/g)||[]).length>1&&(/\d$/.test(g)||/H/.test(g))?`(${g})${x}`:g+x).join("");return f(l)+d.join("")+f(u)}function Zs(n,t){if(t===0)return n;const e=Math.abs(t),i=String(e===1?"":e)+(t>0?"+":"−"),s={"+":"⁺","-":"⁻","−":"⁻",0:"⁰",1:"¹",2:"²",3:"³",4:"⁴",5:"⁵",6:"⁶",7:"⁷",8:"⁸",9:"⁹"};return n+[...i].map(r=>s[r]||r).join("")}const rx="₀₁₂₃₄₅₆₇₈₉";function ms(n){return[...n].map(t=>t>="0"&&t<="9"?rx[+t]:t).join("")}function fh(n,t,e){const i=(n.radius+t.radius)/55;return e?i*1.18:i}function Gn(n){return .28+n.radius/110}const St={add:(n,t)=>({x:n.x+t.x,y:n.y+t.y,z:n.z+t.z}),sub:(n,t)=>({x:n.x-t.x,y:n.y-t.y,z:n.z-t.z}),scale:(n,t)=>({x:n.x*t,y:n.y*t,z:n.z*t}),dot:(n,t)=>n.x*t.x+n.y*t.y+n.z*t.z,cross:(n,t)=>({x:n.y*t.z-n.z*t.y,y:n.z*t.x-n.x*t.z,z:n.x*t.y-n.y*t.x}),len:n=>Math.sqrt(n.x*n.x+n.y*n.y+n.z*n.z),norm(n){const t=this.len(n)||1;return this.scale(n,1/t)}};function il(n,t,e=null,i=120){const s=[],r=Math.PI*(3-Math.sqrt(5));for(let o=0;o<n;o++){const a=1-2*o/Math.max(1,n-1),c=Math.sqrt(Math.max(0,1-a*a)),l=r*o;s.push({x:Math.cos(l)*c,y:a,z:Math.sin(l)*c})}e&&(s[0]=St.norm(e));for(let o=0;o<i;o++){const a=s.map(()=>({x:0,y:0,z:0}));for(let c=0;c<n;c++)for(let l=c+1;l<n;l++){const u=(t[c]+t[l])/2,d=St.dot(s[c],s[l]),f=St.norm(St.sub(s[l],St.scale(s[c],d))),p=u*Math.max(.02,1-d*d);(!e||e!==c)&&(a[c]=St.add(a[c],St.scale(f,p))),(!e||e!==l)&&(a[l]=St.add(a[l],St.scale(St.neg(f),p)))}for(let c=0;c<n;c++)e!==c&&(s[c]=St.norm(St.add(s[c],St.scale(a[c],.25))))}return s}St.neg=n=>St.scale(n,-1);function ox(n,t){const e=n+t,i=[...Array(n).fill(1),...Array(t).fill(1.6)],s=il(e,i),r=[];for(let o=0;o<e;o++){r.push([]);for(let a=0;a<e;a++)r[o].push(Math.acos(Math.max(-1,Math.min(1,St.dot(s[o],s[a])))))}return{M:r,k:e,isLp:o=>o>=n}}function ax(n,t,e,i=null,s=new Map){const r=e;if(r.length===0)return new Map;const o=new Set(r),a=new Map,c=new Map;for(const T of r)a.set(T,zn(n,t,T).map(D=>Kr(D,T)).filter(D=>o.has(D))),c.set(T,s.get(T)?.lp??0);let l=i&&r.includes(i)?i:null;if(!l){let T=-1;for(const D of r){const v=a.get(D).length;(v>T||v===T&&D<l)&&(T=v,l=D)}}const u=new Map;for(const T of r)u.set(T,{...n.get(T).pos});u.set(l,{...n.get(l).pos});const d=new Map,f=new Map,p=new Set([l]),g=[l];for(;g.length;){const T=g.shift(),D=u.get(T),v=a.get(T).filter(V=>!p.has(V)),y=f.get(T)||null,w=v.length+c.get(T);if(w===0)continue;const U=[...v.map(()=>1),...Array(c.get(T)).fill(1.6)],B=il(w,U,y);v.forEach((V,W)=>{const z=B[W],K=n.get(T),G=n.get(V),nt=fh(K.el,G.el,zn(n,t,T).find(it=>Kr(it,T)===V)?.ionic);u.set(V,St.add(D,St.scale(z,nt))),d.set(V,T),f.set(V,St.scale(z,-1)),p.add(V),g.push(V)})}const x=.55,m=new Map,h=new Map;for(const T of r){const D=c.get(T);if(m.set(T,[]),h.set(T,[]),D===0)continue;const v=a.get(T).length,y=f.get(T)||null,w=il(v+D,[...Array(v).fill(1),...Array(D).fill(1.6)],y);for(let U=0;U<D;U++)m.get(T).push(St.add(u.get(T),St.scale(w[v+U],x)))}const E=new Map;for(const T of r){const D=a.get(T).length;E.set(T,ox(D,c.get(T)))}const b=new Map;for(const T of r)b.set(T,{x:0,y:0,z:0});const S=new Map;for(const T of r)S.set(T,Gn(n.get(T).el));const C=[];for(const T of r)for(const D of zn(n,t,T))if(o.has(D.a)&&o.has(D.b)&&D.a===T){const v=n.get(D.a),y=n.get(D.b);C.push({a:D.a,b:D.b,len:fh(v.el,y.el,D.ionic)})}const R=r.length>60?120:320;for(let T=0;T<R;T++){const D=new Map;for(const w of r)D.set(w,{x:0,y:0,z:0});const v=(w,U)=>{D.set(w,St.add(D.get(w),U))};for(const w of C){const U=u.get(w.a),B=u.get(w.b),V=St.sub(B,U),W=St.len(V)||.001,z=St.scale(St.norm(V),.5*(W-w.len));v(w.a,z),v(w.b,St.neg(z))}for(const w of r){const U=u.get(w),{M:B,k:V}=E.get(w),W=[];for(const z of a.get(w))W.push(u.get(z));for(const z of m.get(w))W.push(z);if(W.length===V)for(let z=0;z<V;z++)for(let K=z+1;K<V;K++){const G=St.norm(St.sub(W[z],U)),nt=St.norm(St.sub(W[K],U));let it=St.dot(G,nt);it=Math.max(-1,Math.min(1,it));const Et=Math.acos(it);let Ot=B[z][K]-Et;if(Ot=Math.max(-.5,Math.min(.5,Ot)),Math.abs(Ot)<.005)continue;const Zt=St.norm(St.sub(nt,St.scale(G,it))),re=St.norm(St.sub(G,St.scale(nt,it))),qt=.12*Ot,q=a.get(w).length;z>=q?m.get(w)[z-q]=St.add(m.get(w)[z-q],St.scale(Zt,qt*2)):v(a.get(w)[z],St.scale(Zt,qt)),K>=q?m.get(w)[K-q]=St.add(m.get(w)[K-q],St.scale(re,qt*2)):v(a.get(w)[K],St.scale(re,qt))}}const y=[...r];for(let w=0;w<y.length;w++)for(let U=w+1;U<y.length;U++){const B=y[w],V=y[U];if(C.some(it=>it.a===B&&it.b===V||it.a===V&&it.b===B))continue;const W=u.get(B),z=u.get(V),K=(S.get(B)+S.get(V))*1.25,G=St.sub(z,W),nt=St.len(G)||.001;if(nt<K){const it=St.scale(St.norm(G),.35*(K-nt)/K);v(B,St.neg(it)),v(V,it)}}for(const w of r){if(w===l){b.set(w,{x:0,y:0,z:0});continue}let U=St.scale(St.add(b.get(w),St.scale(D.get(w),.3)),.78);b.set(w,U),u.set(w,St.add(u.get(w),U))}for(const w of r){const U=u.get(w);m.set(w,m.get(w).map(B=>St.add(U,St.scale(St.norm(St.sub(B,U)),x))))}}return u}function lx(n,t,e,i=[],s=new Set){const r=new Map;return e.forEach((o,a)=>{if(o.bonds.length===0)return;const c=[...s].find(u=>o.atoms.includes(u))||null,l=ax(n,t,o.atoms,c,i[a]?.per??new Map);for(const[u,d]of l)r.set(u,d)}),r}const vu="mol3d.lang",ph={en:{"btn.undo":"Undo","btn.clear":"Clear all","btn.fc":"Formal charges","btn.quality":"Quality: {mode}","btn.theme":"Theme: {mode}","btn.quality.title":"Graphics quality — auto adapts when fps drops","btn.theme.title":"Switch between dark and light theme","btn.lang.title":"Switch language","btn.fc.title":"Show formal charge badges","pool.view.title":"Switch between list and periodic table","theme.dark":"Dark","theme.light":"Light","pool.title":"Element pool","pool.searchPh":"Search 118 elements...","pool.viewList":"List","pool.viewTable":"Table","el.title":"{name} · {cat} · max bonds {max}","pool.hint":"Click an element to place an atom. Metals bond ionically (electron transfer). Noble gases are inert — Kr, Xe and Rn react only with F or O.","ptable.ph":"La–Lu · Ac–Lr below","hint.html":"Click an element in the pool to place your first atom.<br />Drag atoms together to bond them — green ghost means a legal bond, red means forbidden.<br />Click a bond to raise its order; Shift+click lowers it.<br />Double-click two or more molecules to set up a reaction, then pick a condition.<br />Move around with WASD / arrow keys (Q/E = down/up) or the touch joystick.","rxn.title":"Reaction","rxn.count":"{n} molecule{s} selected","rxn.cancel":"Cancel","sel.title":"Selection","sel.empty":"Click an atom to inspect it.","sel.stats":"{cat} · mass {mass} · EN {en} · max bonds {max}","mol.title":"Molecule","mol.empty":"Build a molecule to analyze it.","mol.freeAtom":"Free atom — drag onto another to bond.","mol.unnamed":"Unnamed molecule","mol.stats":"{a} atoms · {b} bonds","mol.chargeLbl":"Ion charge","chg.minus.title":"Set ion charge one unit lower","chg.auto.title":"Automatic: minimize total formal charge","chg.plus.title":"Set ion charge one unit higher","list.title":"Molecules in scene","list.empty":"No molecules yet.","dex.disc":"Discoveries","dex.discEmpty":"Nothing discovered yet. React or build molecules to fill this log.","btn.saveDisc":"Save discoveries","dex.unknown":"Unknown","dex.notSaved":"Not saved yet","dex.chal":"Challenges","btn.reset":"Reset progress","tab.pool":"Pool","tab.info":"Info","tab.dex":"Dex","keys.hint":"WASD/arrows = move camera · drag = move / bond · click bond = raise order · Shift+click = lower · double-click molecule = select for reaction · Del = remove · Ctrl+Z = undo","quality.auto":"Auto (adapts to fps)","quality.autoShort":"Auto","quality.low":"Low","quality.med":"Medium","quality.high":"High","cond.rt":"Room temperature","cond.heat":"Heat","cond.spark":"Spark","cond.electricity":"Electricity","cond.catalyst":"Catalyst","cond.uv":"UV light","status.placed":"{name} placed. Drag it onto another atom to bond; double-click molecules to react.","status.cleared":"Scene cleared. Ctrl+Z to restore.","status.nothingUndo":"Nothing to undo.","status.undone":"Undone.","status.ionicBond":"Ionic bond {a}–{b}: electron transferred.","status.covBond":"Covalent bond {a}–{b} formed.","status.orderIonic":"Electron transfer set to {n}.","status.orderCov":"Bond order set to {n}.","status.selectFirst":"Select an atom in a molecule first.","status.chargeLimit":"Ion charge limited to ±6.","status.chargeSet":"Ion charge set to {v}.","status.chargeAuto":"Ion charge: automatic.","status.chalReset":"Challenge progress reset.","status.reactionCancelled":"Reaction cancelled.","status.noReaction":"No known reaction for this combination of molecules.","status.notEnough":"Not enough reactants — add {more} for a {cond} reaction.","status.nothingHappens":"Nothing happens under {cond}.","status.nothingHappensTry":"Nothing happens under {cond}. Try: {valid}.","status.sceneChanged":"Scene changed — the selection no longer matches a reaction.","status.reactionDone":"Reaction ({cond}): {eq}","status.selCleared":"Reaction selection cleared.","status.selRemoved":"Molecule removed from reaction selection.","status.selAdded":"Molecule added to reaction selection ({n}). Pick a condition below.","status.autoAdjusted":"Graphics auto-adjusted to {tier} ({fps} fps).","status.quality":"Graphics quality: {mode}","status.theme":"Theme: {mode}","status.lang":"Language: English","status.saveFail":"Could not save discoveries (storage unavailable).","toast.saved":"Saved {n} discovered molecule{s}.","toast.newDisc":"New discovery: {f}{name}","toast.challenge":"Challenge complete: {name}!","snap.upgradeTo":"Release to raise bond to order {n}","snap.ionic":"Release to transfer electrons (ionic bond)","snap.bond":"Release to bond","chem.metalMetal":"Metal–metal bonding is metallic, not molecular","chem.metalIonic":"Metals bond ionically here (electron transfer)","chem.nobleNoCompound":"Noble gas does not form compounds","chem.nobleOnlyFO":"Noble gases only bond with F or O","chem.noCapacity":"{sym} has no bonding capacity left (max {max})","chem.anionClosedShare":"{sym} is an anion — it accepted {n} electron{s} and its shell is closed, so it cannot share electrons","chem.ionicNeedMetal":"Ionic bonds need a metal","chem.metalMax":"{sym} has transferred its maximum electrons (max +{max})","chem.noAnion":"{sym} does not form anions","chem.anionMax":"{sym} has accepted its maximum electrons ({max})","chem.octet":"{sym} would exceed its octet (8 electrons)","chem.noLewisSharing":"{sym} cannot accept an electron while sharing {n} bond{s} — no valid Lewis structure","chem.selfBond":"An atom cannot bond to itself","chem.alreadyBonded":"Already bonded — click the bond to increase its order","chem.ionicMax3":"At most 3 electrons can transfer per bond","chem.tripleMax":"Triple bond is the maximum","chem.metalTransferMax":"{sym} cannot transfer more than {max} electrons","chem.anionAcceptMax":"{sym} cannot accept more than {max} electrons","chem.pairCapTriple":"{a}–{b} bonds cannot form a triple bond","chem.pairCapSingle":"{a}–{b} bonds are limited to single bonds","chem.capacityMax":"{sym} would exceed its bonding capacity (max {max})","chem.anionClosedShareMore":"{sym} is an anion — its closed shell cannot share more electrons","chem.lewis.charge":"No valid Lewis structure for that charge.","chem.lewis.radical":"Odd electron count — a radical. Adjust the ion charge.","chem.lewis.electrons":"Not enough electrons for that charge.","chem.partialIonic":"Incomplete ionic transfer: {sym} still holds an unpaired electron. Click the ionic bond to raise its order and complete the electron transfer."},vi:{"btn.undo":"Hoàn tác","btn.clear":"Xóa hết","btn.fc":"Điện tích hình thức","btn.quality":"Chất lượng: {mode}","btn.theme":"Giao diện: {mode}","btn.quality.title":"Chất lượng đồ họa — tự điều chỉnh khi fps giảm","btn.theme.title":"Chuyển giữa giao diện tối và sáng","btn.lang.title":"Chuyển ngôn ngữ","btn.fc.title":"Hiện điện tích hình thức","pool.view.title":"Chuyển giữa danh sách và bảng tuần hoàn","theme.dark":"Tối","theme.light":"Sáng","pool.title":"Nguyên tố","pool.searchPh":"Tìm kiếm 118 nguyên tố...","pool.viewList":"Danh sách","pool.viewTable":"Bảng","el.title":"{name} · {cat} · tối đa {max} liên kết","pool.hint":"Bấm vào một nguyên tố để đặt nguyên tử. Kim loại liên kết ion (chuyển electron). Khí hiếm trơ — Kr, Xe và Rn chỉ phản ứng với F hoặc O.","ptable.ph":"La–Lu · Ac–Lr ở dưới","hint.html":"Bấm một nguyên tố trong kho để đặt nguyên tử đầu tiên.<br />Kéo các nguyên tử vào nhau để liên kết — bóng xanh nghĩa là liên kết hợp lệ, đỏ nghĩa là bị cấm.<br />Bấm vào liên kết để tăng bậc; Shift+bấm để giảm.<br />Nhấp đôi hai phân tử trở lên để tạo phản ứng, sau đó chọn điều kiện.<br />Di chuyển bằng WASD / phím mũi tên (Q/E = xuống/lên) hoặc joystick cảm ứng.","rxn.title":"Phản ứng","rxn.count":"{n} phân tử đã chọn","rxn.cancel":"Hủy","sel.title":"Lựa chọn","sel.empty":"Bấm vào một nguyên tử để xem chi tiết.","sel.stats":"{cat} · khối lượng {mass} · độ âm điện {en} · tối đa {max} liên kết","mol.title":"Phân tử","mol.empty":"Hãy tạo phân tử để phân tích.","mol.freeAtom":"Nguyên tử tự do — kéo vào nguyên tử khác để liên kết.","mol.unnamed":"Phân tử chưa đặt tên","mol.stats":"{a} nguyên tử · {b} liên kết","mol.chargeLbl":"Điện tích ion","chg.minus.title":"Giảm điện tích ion một đơn vị","chg.auto.title":"Tự động: cực tiểu hóa tổng điện tích hình thức","chg.plus.title":"Tăng điện tích ion một đơn vị","list.title":"Phân tử trong khung cảnh","list.empty":"Chưa có phân tử nào.","dex.disc":"Khám phá","dex.discEmpty":"Chưa có gì được khám phá. Hãy phản ứng hoặc tạo phân tử để lấp đầy sổ này.","btn.saveDisc":"Lưu khám phá","dex.unknown":"Không rõ","dex.notSaved":"Chưa lưu","dex.chal":"Thử thách","btn.reset":"Đặt lại tiến trình","tab.pool":"Nguyên tố","tab.info":"Thông tin","tab.dex":"Sổ tay","keys.hint":"WASD/phím mũi tên = di chuyển camera · kéo = di chuyển / liên kết · bấm liên kết = tăng bậc · Shift+bấm = giảm · nhấp đôi phân tử = chọn để phản ứng · Del = xóa · Ctrl+Z = hoàn tác","quality.auto":"Tự động (điều chỉnh theo fps)","quality.autoShort":"Tự động","quality.low":"Thấp","quality.med":"Trung bình","quality.high":"Cao","cond.rt":"Nhiệt độ phòng","cond.heat":"Nhiệt","cond.spark":"Tia lửa điện","cond.electricity":"Dòng điện","cond.catalyst":"Chất xúc tác","cond.uv":"Ánh sáng UV","status.placed":"Đã đặt {name}. Kéo vào nguyên tử khác để liên kết; nhấp đôi các phân tử để phản ứng.","status.cleared":"Đã xóa khung cảnh. Ctrl+Z để khôi phục.","status.nothingUndo":"Không có gì để hoàn tác.","status.undone":"Đã hoàn tác.","status.ionicBond":"Liên kết ion {a}–{b}: đã chuyển electron.","status.covBond":"Đã tạo liên kết cộng hóa trị {a}–{b}.","status.orderIonic":"Đã đặt mức chuyển electron thành {n}.","status.orderCov":"Đã đặt bậc liên kết thành {n}.","status.selectFirst":"Hãy chọn một nguyên tử trong phân tử trước.","status.chargeLimit":"Điện tích ion giới hạn trong ±6.","status.chargeSet":"Đã đặt điện tích ion thành {v}.","status.chargeAuto":"Điện tích ion: tự động.","status.chalReset":"Đã đặt lại tiến trình thử thách.","status.reactionCancelled":"Đã hủy phản ứng.","status.noReaction":"Không có phản ứng đã biết cho tổ hợp phân tử này.","status.notEnough":"Chưa đủ chất phản ứng — thêm {more} cho phản ứng {cond}.","status.nothingHappens":"Không có gì xảy ra với {cond}.","status.nothingHappensTry":"Không có gì xảy ra với {cond}. Thử: {valid}.","status.sceneChanged":"Khung cảnh đã thay đổi — lựa chọn không còn khớp phản ứng nào.","status.reactionDone":"Phản ứng ({cond}): {eq}","status.selCleared":"Đã xóa lựa chọn phản ứng.","status.selRemoved":"Đã bỏ phân tử khỏi lựa chọn phản ứng.","status.selAdded":"Đã thêm phân tử vào lựa chọn phản ứng ({n}). Chọn điều kiện bên dưới.","status.autoAdjusted":"Đã tự động điều chỉnh đồ họa xuống {tier} ({fps} fps).","status.quality":"Chất lượng đồ họa: {mode}","status.theme":"Giao diện: {mode}","status.lang":"Ngôn ngữ: Tiếng Việt","status.saveFail":"Không thể lưu khám phá (bộ nhớ không khả dụng).","toast.saved":"Đã lưu {n} phân tử đã khám phá.","toast.newDisc":"Khám phá mới: {f}{name}","toast.challenge":"Hoàn thành thử thách: {name}!","snap.upgradeTo":"Thả để nâng liên kết lên bậc {n}","snap.ionic":"Thả để chuyển electron (liên kết ion)","snap.bond":"Thả để liên kết","chem.metalMetal":"Liên kết kim loại–kim loại là liên kết kim loại, không phải phân tử","chem.metalIonic":"Kim loại liên kết ion tại đây (chuyển electron)","chem.nobleNoCompound":"Khí hiếm không tạo thành hợp chất","chem.nobleOnlyFO":"Khí hiếm chỉ liên kết với F hoặc O","chem.noCapacity":"{sym} không còn khả năng liên kết (tối đa {max})","chem.anionClosedShare":"{sym} là anion — đã nhận {n} electron nên lớp vỏ đã kín, không thể dùng chung electron","chem.ionicNeedMetal":"Liên kết ion cần kim loại","chem.metalMax":"{sym} đã chuyển toàn bộ electron tối đa (tối đa +{max})","chem.noAnion":"{sym} không tạo anion","chem.anionMax":"{sym} đã nhận đủ electron tối đa ({max})","chem.octet":"{sym} sẽ vượt bát tử (8 electron)","chem.noLewisSharing":"{sym} không thể nhận thêm electron khi đang dùng chung {n} liên kết — không có cấu trúc Lewis hợp lệ","chem.selfBond":"Nguyên tử không thể tự liên kết với chính nó","chem.alreadyBonded":"Đã liên kết — bấm vào liên kết để tăng bậc","chem.ionicMax3":"Mỗi liên kết chuyển tối đa 3 electron","chem.tripleMax":"Liên kết ba là bậc tối đa","chem.metalTransferMax":"{sym} không thể chuyển nhiều hơn {max} electron","chem.anionAcceptMax":"{sym} không thể nhận nhiều hơn {max} electron","chem.pairCapTriple":"Liên kết {a}–{b} không thể tạo liên kết ba","chem.pairCapSingle":"Liên kết {a}–{b} chỉ giới hạn ở liên kết đơn","chem.capacityMax":"{sym} sẽ vượt quá khả năng liên kết (tối đa {max})","chem.anionClosedShareMore":"{sym} là anion — lớp vỏ kín không thể chia sẻ thêm electron","chem.lewis.charge":"Không có cấu trúc Lewis hợp lệ cho điện tích đó.","chem.lewis.radical":"Số electron lẻ — gốc tự do. Hãy điều chỉnh điện tích ion.","chem.lewis.electrons":"Không đủ electron cho điện tích đó.","chem.partialIonic":"Chuyển electron ion chưa hoàn tất: {sym} còn một electron chưa ghép đôi. Nhấp vào liên kết ion để tăng bậc và hoàn tất chuyển electron."}},cx={1:"Hidro",2:"Heli",3:"Liti",4:"Beryli",5:"Bo",6:"Cacbon",7:"Nitơ",8:"Oxi",9:"Flo",10:"Neon",11:"Natri",12:"Magie",13:"Nhôm",14:"Silic",15:"Phốtpho",16:"Lưu huỳnh",17:"Clo",18:"Argon",19:"Kali",20:"Canxi",21:"Scandium",22:"Titan",23:"Vanadium",24:"Crom",25:"Mangan",26:"Sắt",27:"Coban",28:"Nikel",29:"Đồng",30:"Kẽm",31:"Gallium",32:"Germani",33:"Asen",34:"Selen",35:"Brôm",36:"Krypton",37:"Rubidium",38:"Strontium",39:"Yttrium",40:"Zirconium",41:"Niobi",42:"Molypden",43:"Techneti",44:"Rutheni",45:"Rhodi",46:"Paladi",47:"Bạc",48:"Cadmi",49:"Indi",50:"Thiếc",51:"Antimon",52:"Tellur",53:"Iot",54:"Xenon",55:"Caesi",56:"Bari",57:"Lanthan",58:"Ceri",59:"Praseodymi",60:"Neodymi",61:"Promethi",62:"Samari",63:"Europi",64:"Gadolini",65:"Terbi",66:"Dysprosi",67:"Holmi",68:"Erbi",69:"Thuli",70:"Ytterbi",71:"Luteti",72:"Hafni",73:"Tantali",74:"Vonfram",75:"Rheni",76:"Osmi",77:"Iridi",78:"Platin",79:"Vàng",80:"Thủy ngân",81:"Thali",82:"Chì",83:"Bismut",84:"Poloni",85:"Astatin",86:"Radon",87:"Franci",88:"Radium",89:"Actini",90:"Thori",91:"Protactini",92:"Urani",93:"Neptuni",94:"Plutoni",95:"Americi",96:"Curi",97:"Berkelium",98:"Californium",99:"Einsteinium",100:"Fermium",101:"Mendelevium",102:"Nobelium",103:"Lawrencium",104:"Rutherfordium",105:"Dubnium",106:"Seaborgium",107:"Bohrium",108:"Hassium",109:"Meitnerium",110:"Darmstadtium",111:"Roentgenium",112:"Copernicium",113:"Nihonium",114:"Flerovium",115:"Moscovium",116:"Livermorium",117:"Tennessine",118:"Oganesson"},hx={alkali:"Kim loại kiềm",alkaline:"Kim loại kiềm thổ",transition:"Kim loại chuyển tiếp",post:"Kim loại sau chuyển tiếp",metalloid:"Á kim",nonmetal:"Phi kim",halogen:"Halogen",noble:"Khí hiếm",lanthanide:"Lantanide",actinide:"Actinide"},ux={alkali:"Alkali metal",alkaline:"Alkaline earth",transition:"Transition metal",post:"Post-transition metal",metalloid:"Metalloid",nonmetal:"Reactive nonmetal",halogen:"Halogen",noble:"Noble gas",lanthanide:"Lanthanide",actinide:"Actinide"};let xn="en";function dx(){try{const n=localStorage.getItem(vu);(n==="vi"||n==="en")&&(xn=n)}catch{}document.documentElement.lang=xn}function Mu(){return xn}function qs(){return xn==="vi"}function fx(){return xn==="en"?"vi":"en"}function px(n){xn=n==="vi"?"vi":"en";try{localStorage.setItem(vu,xn)}catch{}Cl()}function lt(n,t){let e=ph[xn]?.[n]??ph.en[n]??n;if(t)for(const[i,s]of Object.entries(t))e=e.replaceAll(`{${i}}`,String(s));return e}function po(n){return n?typeof n=="string"?n:lt(n.key,n.p):""}function bn(n){if(xn==="vi"){const t=cx[n.z];if(t)return t}return n.name}function Ys(n){return(xn==="vi"?hx[n]:ux[n])||n}function Cl(){document.documentElement.lang=xn;for(const n of document.querySelectorAll("[data-i18n]"))n.textContent=lt(n.dataset.i18n);for(const n of document.querySelectorAll("[data-i18n-html]"))n.innerHTML=lt(n.dataset.i18nHtml);for(const n of document.querySelectorAll("[data-i18n-ph]"))n.placeholder=lt(n.dataset.i18nPh);for(const n of document.querySelectorAll("[data-i18n-title]"))n.title=lt(n.dataset.i18nTitle)}const mx={H2O:"Water",CO2:"Carbon dioxide",CO:"Carbon monoxide",CH4:"Methane",NH3:"Ammonia",H2O2:"Hydrogen peroxide",SO2:"Sulfur dioxide",SO3:"Sulfur trioxide",NO:"Nitrogen monoxide",NO2:"Nitrogen dioxide",N2O:"Dinitrogen monoxide (laughing gas)",N2O3:"Dinitrogen trioxide",N2O4:"Dinitrogen tetroxide",N2O5:"Dinitrogen pentoxide",SF6:"Sulfur hexafluoride",PH3:"Phosphine",SiO2:"Silicon dioxide",C2H6:"Ethane",C2H4:"Ethene",C2H2:"Ethyne",C3H8:"Propane",C3H6:"Propene",C3H4:"Propyne",C4H10:"Butane",C5H12:"Pentane",C6H6:"Benzene",C6H12:"Cyclohexane",C6H14:"Hexane",C2H6O:"Ethanol (or dimethyl ether)",CH4O:"Methanol",CH2O:"Methanal (formaldehyde)",CHCl3:"Trichloromethane (chloroform)",CCl4:"Tetrachloromethane (carbon tetrachloride)",CS2:"Carbon disulfide",BF3:"Boron trifluoride",BCl3:"Boron trichloride",BH3:"Borane",NH4Cl:"Ammonium chloride",SiH4:"Silane",GeH4:"Germane",AsH3:"Arsine",H2S:"Hydrogen sulfide",HF:"Hydrogen fluoride",HBr:"Hydrogen bromide",HI:"Hydrogen iodide",HCl:"Hydrogen chloride",H2:"Hydrogen",N2:"Nitrogen",O2:"Dioxygen",O3:"Ozone",F2:"Difluorine",Cl2:"Dichlorine",Br2:"Dibromine",I2:"Diiodine",P4:"Tetraphosphorus",S8:"Cyclo-octasulfur",PCl3:"Phosphorus trichloride",PCl5:"Phosphorus pentachloride",XeF2:"Xenon difluoride",XeF4:"Xenon tetrafluoride",XeF6:"Xenon hexafluoride",XeO3:"Xenon trioxide",XeO4:"Xenon tetroxide",KrF2:"Krypton difluoride",N2H4:"Hydrazine",H2O2:"Hydrogen peroxide",NO2:"Nitrogen dioxide"},gx={"OH-1":"Hydroxide","NH4+1":"Ammonium","H3O+1":"Hydronium","NO3-1":"Nitrate","NO2-1":"Nitrite","CO3-2":"Carbonate","HCO3-1":"Hydrogen carbonate","SO4-2":"Sulfate","SO3-2":"Sulfite","HSO4-1":"Hydrogen sulfate","PO4-3":"Phosphate","PO3-3":"Phosphite","ClO-1":"Hypochlorite","ClO2-1":"Chlorite","ClO3-1":"Chlorate","ClO4-1":"Perchlorate","BrO3-1":"Bromate","IO3-1":"Iodate","MnO4-1":"Permanganate","CrO4-2":"Chromate","Cr2O7-2":"Dichromate","CN-1":"Cyanide","O2-2":"Peroxide","C2O4-2":"Oxalate","CNS-1":"Thiocyanate"},mh={sulfate:"sulfuric",sulfite:"sulfurous",phosphate:"phosphoric",phosphite:"phosphorous",cyanide:"hydrocyanic"},_x=["mono","di","tri","tetra","penta","hexa","hepta","octa","nona","deca"],yu={O:"oxide",F:"fluoride",Cl:"chloride",Br:"bromide",I:"iodide",At:"astatide",S:"sulfide",Se:"selenide",Te:"telluride",N:"nitride",P:"phosphide",As:"arsenide",Sb:"antimonide",C:"carbide",Si:"silicide",B:"boride",Ge:"germanide",H:"hydride",Po:"polonide",Ts:"tennesside",Lv:"livermoride"},xx=["","I","II","III","IV","V","VI","VII","VIII"],vx={H2O:"Nước",CO2:"Cacbon dioxit",CO:"Cacbon monooxit",CH4:"Metan",NH3:"Amoniac",H2O2:"Hiđro peroxit",SO2:"Lưu huỳnh dioxit",SO3:"Lưu huỳnh trioxit",NO:"Nitơ monooxit",NO2:"Nitơ dioxit",N2O:"Đinitơ monooxit (khí cười)",N2O3:"Đinitơ trioxit",N2O4:"Đinitơ tetraoxit",N2O5:"Đinitơ pentaoxit",SF6:"Lưu huỳnh hexaflorua",PH3:"Photphin",SiO2:"Silic dioxit",C2H6:"Etan",C2H4:"Eten",C2H2:"Etin",C3H8:"Propan",C3H6:"Propen",C3H4:"Propin",C4H10:"Butan",C5H12:"Pentan",C6H6:"Benzên",C6H12:"Cyclohexan",C6H14:"Hexan",C2H6O:"Etanol (hoặc dimetyl ete)",CH4O:"Metanol",CH2O:"Methanal (fomanđehit)",CHCl3:"Triclorometan (cloroform)",CCl4:"Tetraclorometan (cacbon tetraclorua)",CS2:"Cacbon disunfua",BF3:"Bo triflorua",BCl3:"Bo triclorua",BH3:"Boran",NH4Cl:"Amoni clorua",SiH4:"Silan",GeH4:"German",AsH3:"Arsin",H2S:"Hiđro sunfua",HF:"Hiđro florua",HBr:"Hiđro bromua",HI:"Hiđro iodua",HCl:"Hiđro clorua",H2:"Hiđro",N2:"Nitơ",O2:"Đioxi",O3:"Ozôn",F2:"Điflo",Cl2:"Điclo",Br2:"Đibrom",I2:"Điiod",P4:"Tetraphotpho",S8:"Cyclo-octasunfua",PCl3:"Photpho triclorua",PCl5:"Photpho pentaclorua",XeF2:"Xenon diflorua",XeF4:"Xenon tetraflorua",XeF6:"Xenon hexaflorua",XeO3:"Xenon trioxit",XeO4:"Xenon tetraoxit",KrF2:"Krypton diflorua",N2H4:"Hiđrazin"},Mx={"OH-1":"Hidroxit","NH4+1":"Amoni","H3O+1":"Hidroni","NO3-1":"Nitrat","NO2-1":"Nitrit","CO3-2":"Cacbonat","HCO3-1":"Hiđrocacbonat","SO4-2":"Sunfat","SO3-2":"Sunfit","HSO4-1":"Hiđrosunfat","PO4-3":"Photphat","PO3-3":"Photphit","ClO-1":"Hypoclorit","ClO2-1":"Clorit","ClO3-1":"Clorat","ClO4-1":"Perclorat","BrO3-1":"Bromat","IO3-1":"Iodat","MnO4-1":"Permanaganat","CrO4-2":"Cromat","Cr2O7-2":"Đicromat","CN-1":"Xianua","O2-2":"Peroxit","C2O4-2":"Oxalat","CNS-1":"Thiocyanat"},Su={O:"oxit",F:"florua",Cl:"clorua",Br:"bromua",I:"iodua",At:"astatua",S:"sunfua",Se:"selenua",Te:"telurua",N:"nitrua",P:"photphua",As:"asenua",Sb:"antimonua",C:"cacbua",Si:"silicua",B:"borua",Ge:"germanua",H:"hiđrua",Po:"polonua",Ts:"tennessua",Lv:"livermorua"},yx=["mono","đi","tri","tetra","penta","hexa","hepta","octa","nona","deca"],Sx=["meth","eth","prop","but","pent","hex","hept","oct","non","dec"],Ex=["met","et","prop","but","pent","hex","hept","oct","non","dec"],bx={C:"cacbon",H:"hiđro",N:"nitơ",O:"oxi",S:"lưu huỳnh",P:"photpho",F:"flo",Cl:"clo",Br:"brôm",I:"iot",Se:"selen",Si:"silic",B:"bo",As:"asen",Te:"tellur"},gh={sunfat:"sunfuric",sunfit:"sunfurơ",nitrat:"nitric",nitrit:"nitrơ",photphat:"photphoric",photphit:"photphơ",hypoclorit:"hypoclorơ",clorit:"clorơ",hiđrosunfat:"sunfuric",xianua:"xianhidric"};function _h(n){return(qs()?yx:_x)[n-1]||`${n}`}function Tx(n){const t=n.toLowerCase();return gh[t]?"axit "+gh[t]:t.endsWith("at")?"axit "+t.replace(/at$/,"ic"):t.endsWith("it")?"axit "+t.replace(/it$/,"ơ"):t.endsWith("ua")?"axit "+t.replace(/ua$/,"hidric"):"axit "+t}function Ax(n){return bx[n]||n.toLowerCase()}function ia(n,t,e){const i=qs(),s=i?vx:mx,r=i?Mx:gx,o=Ns(n);if(t===0&&s[o])return s[o];const a=`${o}${t>0?"+"+t:t}`;if(r[a])return r[a];const c=new Set(n.map(l=>l.el.sym));if(c.size===2&&c.has("C")&&c.has("H")){const l=n.filter(d=>d.el.sym==="C").length,u=n.filter(d=>d.el.sym==="H").length;if(l>=1&&l<=10){const d=(i?Ex:Sx)[l-1];if(u===2*l+2)return fn(d+(i?"an":"ane"));if(u===2*l)return e.some(f=>f.order===3)?fn(d+(i?"in":"yne")):fn(d+(i?"en":"ene"));if(u===2*l-2)return fn(e.some(f=>f.order===3)?d+(i?"in":"yne"):d+(i?"ađien":"diene"))}}if(t===0){const l=n.filter(u=>u.el.sym==="H").length;if(l>0){const u=n.filter(p=>p.el.sym!=="H"),f=`${Ns(u)}-${l}`;if(r[f]&&u.length>1){if(i)return fn(Tx(r[f]));const p=r[f].toLowerCase();if(mh[p])return fn(mh[p]+" acid");if(p.endsWith("ate"))return fn(p.replace(/ate$/,"ic")+" acid");if(p.endsWith("ite"))return fn(p.replace(/ite$/,"ous")+" acid");if(p.endsWith("ide"))return fn("hydro"+p.replace(/ide$/,"ic")+" acid")}}}if(n.every(l=>!je(l.el))&&new Set(n.map(l=>l.el.sym)).size===2){const l=new Map;for(const g of n)l.set(g.el.sym,(l.get(g.el.sym)||0)+1);const[u,d]=[...l.keys()].sort((g,x)=>xh(n,g)-xh(n,x)),f=[];f.push((l.get(u)===1&&u!=="C"?"":_h(l.get(u)))+(i?Ax(u):Cx(u)));const p=i?Su[d]||d.toLowerCase()+"ua":yu[d]||d.toLowerCase()+"ide";return f.push(_h(l.get(d))+p),fn(f.join(" "))}return null}function wx(n,t,e,i,s=null){if(!t.some(E=>E.ionic))return ia(n,i,t);const o=t.filter(E=>!E.ionic),a=new Map(n.map(E=>[E.id,[]]));for(const E of o)a.get(E.a).push({other:E.b,order:E.order}),a.get(E.b).push({other:E.a,order:E.order});const c=[],l=new Set;for(const E of n){if(l.has(E.id))continue;const b=[],S=[E.id];for(l.add(E.id);S.length;){const C=S.pop();b.push(C);for(const{other:R}of a.get(C))l.has(R)||(l.add(R),S.push(R))}c.push(b)}const u=[],d=[];for(const E of c){const b=E.map(T=>n.find(D=>D.id===T)),S=o.filter(T=>E.includes(T.a)&&E.includes(T.b));let C=0;for(const T of b){if(s){C+=s.get(T.id)?.fc??0;continue}const D=t.filter(v=>v.ionic&&(v.a===T.id||v.b===T.id)).reduce((v,y)=>v+y.order,0);if(je(T.el))C+=D;else{const v=S.filter(U=>U.a===T.id||U.b===T.id).reduce((U,B)=>U+B.order,0),y=T.el.valenceElectrons+D-v,w=Math.max(0,Math.floor(y/2));C+=T.el.valenceElectrons-2*w-v}}const R={atoms:b,bonds:S,charge:C};(C>0?u:d).push(R)}const f=[],p=new Map;for(const E of u)if(E.atoms.length===1&&je(E.atoms[0].el)){const b=E.atoms[0].el,S=E.charge,C=b.charges&&b.charges.length>1?`(${xx[S]||S})`:"",R="cat:"+b.sym+C;p.set(R,(p.get(R)||0)+1),f.push({key:R,name:bn(b)+C})}else{const b=ia(E.atoms,E.charge,E.bonds),S="cat:"+(b||Ns(E.atoms)+E.charge);p.set(S,(p.get(S)||0)+1),f.push({key:S,name:b?b.toLowerCase():`ion ${Ns(E.atoms)}`})}const g=new Map;for(const E of d){let b;if(E.atoms.length===1){const C=E.atoms[0].el;b=qs()?Su[C.sym]||C.name.toLowerCase()+"ua":yu[C.sym]||C.name.toLowerCase()+"ide"}else b=ia(E.atoms,E.charge,E.bonds),b=b?b.toLowerCase():`ion ${Ns(E.atoms)}`;const S="an:"+b;g.set(S,(g.get(S)||0)+1)}const x=[...p.entries()].map(([E])=>f.find(b=>b.key===E).name).join(" "),m=[...g.entries()].map(([E])=>E.slice(3)).join(" "),h=fn(`${x} ${m}`.trim());return i!==0?`${h} (${qs()?"điện tích":"net charge"} ${i>0?"+":""}${i})`:h}function xh(n,t){return n.find(i=>i.el.sym===t).el.en??0}function Cx(n){return{C:"carbon",H:"hydrogen",N:"nitrogen",O:"oxygen",S:"sulfur",P:"phosphorus",F:"fluorine",Cl:"chlorine",Br:"bromine",I:"iodine",Se:"selenium",Si:"silicon",B:"boron",As:"arsenic",Te:"tellurium",H2:"hydrogen"}[n]||n.toLowerCase()}function fn(n){return n.charAt(0).toUpperCase()+n.slice(1)}function Ns(n){return nl(n.map(t=>t.el))}const Rx=[{tier:1,formula:"H2O",charge:0,name:"Water",vi:"Nước"},{tier:1,formula:"CO2",charge:0,name:"Carbon dioxide",vi:"Cacbon dioxit"},{tier:1,formula:"CH4",charge:0,name:"Methane",vi:"Metan"},{tier:1,formula:"NH3",charge:0,name:"Ammonia",vi:"Amoniac"},{tier:1,formula:"O2",charge:0,name:"Dioxygen",vi:"Đioxi"},{tier:1,formula:"N2",charge:0,name:"Dinitrogen",vi:"Nitơ"},{tier:1,formula:"NaCl",charge:0,name:"Sodium chloride",vi:"Natri clorua"},{tier:1,formula:"HCl",charge:0,name:"Hydrogen chloride",vi:"Hiđro clorua"},{tier:2,formula:"C2H6",charge:0,name:"Ethane",vi:"Etan"},{tier:2,formula:"C2H4",charge:0,name:"Ethene",vi:"Eten"},{tier:2,formula:"C2H2",charge:0,name:"Ethyne",vi:"Etin"},{tier:2,formula:"H2O2",charge:0,name:"Hydrogen peroxide",vi:"Hiđro peroxit"},{tier:2,formula:"SO2",charge:0,name:"Sulfur dioxide",vi:"Lưu huỳnh dioxit"},{tier:2,formula:"MgO",charge:0,name:"Magnesium oxide",vi:"Magie oxit"},{tier:2,formula:"CaCl2",charge:0,name:"Calcium chloride",vi:"Canxi clorua"},{tier:2,formula:"NaOH",charge:0,name:"Sodium hydroxide",vi:"Natri hidroxit"},{tier:3,formula:"OH-1",charge:-1,name:"Hydroxide ion",vi:"Ion hidroxit"},{tier:3,formula:"NH4+1",charge:1,name:"Ammonium ion",vi:"Ion amoni"},{tier:3,formula:"H3O+1",charge:1,name:"Hydronium ion",vi:"Ion hidroni"},{tier:3,formula:"H2SO4",charge:0,name:"Sulfuric acid",vi:"Axit sunfuric"},{tier:3,formula:"CaCO3",charge:0,name:"Calcium carbonate",vi:"Canxi cacbonat"},{tier:3,formula:"NO3-1",charge:-1,name:"Nitrate ion",vi:"Ion nitrat"},{tier:3,formula:"SO4-2",charge:-2,name:"Sulfate ion",vi:"Ion sunfat"},{tier:3,formula:"SF6",charge:0,name:"Sulfur hexafluoride",vi:"Lưu huỳnh hexaflorua"},{tier:3,formula:"C6H6",charge:0,name:"Benzene",vi:"Benzên"},{tier:3,formula:"XeF4",charge:0,name:"Xenon tetrafluoride",vi:"Xenon tetraflorua"}],Eu={low:{key:"low",label:"Low",sphereSeg:[10,8],cylSeg:6,pixelRatio:1,drift:!1},med:{key:"med",label:"Medium",sphereSeg:[16,12],cylSeg:10,pixelRatio:1.5,drift:!0},high:{key:"high",label:"High",sphereSeg:[26,18],cylSeg:14,pixelRatio:2,drift:!0}},Ui=["low","med","high"];class Px{constructor({downFps:t=30,upFps:e=55,downMs:i=2e3,upMs:s=4e3}={}){this.downFps=t,this.upFps=e,this.downMs=i,this.upMs=s,this.lowSince=null,this.highSince=null}update(t,e,i=Ui.length-1){const s=performance.now();if(t<this.downFps){if(this.lowSince??=s,s-this.lowSince>=this.downMs&&e>0)return this.reset(),e-1}else this.lowSince=null;if(t>this.upFps){if(this.highSince??=s,s-this.highSince>=this.upMs&&e<i)return this.reset(),e+1}else this.highSince=null;return e}reset(){this.lowSince=null,this.highSince=null}}class Dx{constructor(t=1e3){this.windowMs=t,this.frames=[]}frame(t){this.frames.push(t);const e=t-this.windowMs;for(;this.frames.length>2&&this.frames[0]<e;)this.frames.shift()}get fps(){if(this.frames.length<2)return 60;const t=this.frames[this.frames.length-1]-this.frames[0];return t>0?(this.frames.length-1)*1e3/t:60}}function Lx({camera:n,controls:t}){const a=new Set,c={x:0,y:0};let l=0;const u=()=>{const h=document.activeElement;return h instanceof HTMLInputElement||h instanceof HTMLTextAreaElement},d=new Set(["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"]);window.addEventListener("keydown",h=>{if(h.key==="Shift"){a.add("shift");return}if(u())return;const E=h.key.toLowerCase();d.has(E)&&(h.preventDefault(),a.add(E))}),window.addEventListener("keyup",h=>{a.delete(h.key.toLowerCase()),h.key==="Shift"&&a.delete("shift")}),window.addEventListener("blur",()=>a.clear());const f=new L,p=new L,g=new L,x=new L(0,1,0);function m(h){let E=c.x,b=c.y,S=l;if((a.has("w")||a.has("arrowup"))&&(b+=1),(a.has("s")||a.has("arrowdown"))&&(b-=1),(a.has("a")||a.has("arrowleft"))&&(E-=1),(a.has("d")||a.has("arrowright"))&&(E+=1),a.has("e")&&(S+=1),a.has("q")&&(S-=1),!E&&!b&&!S)return!1;n.getWorldDirection(f),f.y=0,f.lengthSq()<1e-6&&f.set(0,0,-1),f.normalize(),p.crossVectors(f,x);const C=6*(a.has("shift")?2.25:1)*h;if(g.set(0,0,0).addScaledVector(f,b).addScaledVector(p,E),g.y+=S,g.lengthSq()===0)return!1;g.normalize().multiplyScalar(C),t.target.add(g),n.position.add(g),t.target.y=Math.max(-1.4,Math.min(9,t.target.y));const R=Math.hypot(t.target.x,t.target.z);if(R>45){const T=45/R;t.target.x*=T,t.target.z*=T}return!0}return{update:m,setStick:(h,E)=>{c.x=h,c.y=E},setVertical:h=>{l=h}}}const Ix={H2O:{atoms:["O","H","H"],bonds:[[0,1,1],[0,2,1]]},HCl:{atoms:["H","Cl"],bonds:[[0,1,1]]},NH3:{atoms:["N","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1]]},MgO:{atoms:["Mg","O"],bonds:[[0,1,2,!0]]},NaCl:{atoms:["Na","Cl"],bonds:[[0,1,1,!0]]},CaO:{atoms:["Ca","O"],bonds:[[0,1,2,!0]]},CaOH2:{atoms:["Ca","O","O","H","H"],bonds:[[0,1,1,!0],[0,2,1,!0],[1,3,1],[2,4,1]]},CaCO3:{atoms:["Ca","C","O","O","O"],bonds:[[0,2,1,!0],[0,3,1,!0],[1,2,1],[1,3,1],[1,4,2]]},NaOH:{atoms:["Na","O","H"],bonds:[[0,1,1,!0],[1,2,1]]},KOH:{atoms:["K","O","H"],bonds:[[0,1,1,!0],[1,2,1]]},MgCl2:{atoms:["Mg","Cl","Cl"],bonds:[[0,1,1,!0],[0,2,1,!0]]},AlCl3:{atoms:["Al","Cl","Cl","Cl"],bonds:[[0,1,1,!0],[0,2,1,!0],[0,3,1,!0]]},CO2:{atoms:["C","O","O"],bonds:[[0,1,2],[0,2,2]]},O2:{atoms:["O","O"],bonds:[[0,1,2]]},O3:{atoms:["O","O","O"],bonds:[[0,1,1],[1,2,2]]},NO:{atoms:["N","O"],bonds:[[0,1,2]]},H2:{atoms:["H","H"],bonds:[[0,1,1]]},SO2:{atoms:["S","O","O"],bonds:[[0,1,2],[0,2,2]]},SO3:{atoms:["S","O","O","O"],bonds:[[0,1,2],[0,2,2],[0,3,2]]},H2SO4:{atoms:["S","O","O","O","O","H","H"],bonds:[[0,1,2],[0,2,2],[0,3,1],[0,4,1],[3,5,1],[4,6,1]]},NH4:{atoms:["N","H","H","H","H"],bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]],charge:1},ClI:{atoms:["Cl"],bonds:[],charge:-1}},bu=[{key:"rt",label:"Room temp"},{key:"heat",label:"Heat"},{key:"spark",label:"Spark"},{key:"electricity",label:"Electricity"},{key:"catalyst",label:"Catalyst"},{key:"uv",label:"UV light"}];Object.fromEntries(bu.map(n=>[n.key,n.label]));const Rl=[{reactants:{H2:2,O2:1},condition:"spark",products:[["H2O",2]],equation:"2H2 + O2 -> 2H2O"},{reactants:{H2:1,Cl2:1},condition:"spark",products:[["HCl",2]],equation:"H2 + Cl2 -> 2HCl"},{reactants:{N2:1,H2:3},condition:"catalyst",products:[["NH3",2]],equation:"N2 + 3H2 -> 2NH3"},{reactants:{Mg:2,O2:1},condition:"heat",products:[["MgO",2]],equation:"2Mg + O2 -> 2MgO"},{reactants:{Na:2,Cl2:1},condition:"spark",products:[["NaCl",2]],equation:"2Na + Cl2 -> 2NaCl"},{reactants:{CaO:1,H2O:1},condition:"rt",products:[["CaOH2",1]],equation:"CaO + H2O -> Ca(OH)2"},{reactants:{CaO:1,CO2:1},condition:"rt",products:[["CaCO3",1]],equation:"CaO + CO2 -> CaCO3"},{reactants:{CaCO3:1},condition:"heat",products:[["CaO",1],["CO2",1]],equation:"CaCO3 -> CaO + CO2"},{reactants:{CaOH2:1,CO2:1},condition:"rt",products:[["CaCO3",1],["H2O",1]],equation:"Ca(OH)2 + CO2 -> CaCO3 + H2O"},{reactants:{HCl:1,NaOH:1},condition:"rt",products:[["NaCl",1],["H2O",1]],equation:"HCl + NaOH -> NaCl + H2O"},{reactants:{H2O2:2},condition:"catalyst",products:[["H2O",2],["O2",1]],equation:"2H2O2 -> 2H2O + O2"},{reactants:{CH4:1,O2:2},condition:"spark",products:[["CO2",1],["H2O",2]],equation:"CH4 + 2O2 -> CO2 + 2H2O"},{reactants:{C:1,O2:1},condition:"heat",products:[["CO2",1]],equation:"C + O2 -> CO2"},{reactants:{N2:1,O2:1},condition:"spark",products:[["NO",2]],equation:"N2 + O2 -> 2NO"},{reactants:{SO2:2,O2:1},condition:"catalyst",products:[["SO3",2]],equation:"2SO2 + O2 -> 2SO3"},{reactants:{SO3:1,H2O:1},condition:"rt",products:[["H2SO4",1]],equation:"SO3 + H2O -> H2SO4"},{reactants:{H2O:2},condition:"electricity",products:[["H2",2],["O2",1]],equation:"2H2O -> 2H2 + O2"},{reactants:{NH3:1,HCl:1},condition:"rt",products:[["NH4",1],["ClI",1]],equation:"NH3 + HCl -> NH4+ + Cl-"},{reactants:{Na:2,H2O:2},condition:"rt",products:[["NaOH",2],["H2",1]],equation:"2Na + 2H2O -> 2NaOH + H2"},{reactants:{K:2,H2O:2},condition:"rt",products:[["KOH",2],["H2",1]],equation:"2K + 2H2O -> 2KOH + H2"},{reactants:{Al:2,Cl2:3},condition:"heat",products:[["AlCl3",2]],equation:"2Al + 3Cl2 -> 2AlCl3"},{reactants:{Mg:1,HCl:2},condition:"rt",products:[["MgCl2",1],["H2",1]],equation:"Mg + 2HCl -> MgCl2 + H2"},{reactants:{O2:3},condition:"uv",products:[["O3",2]],equation:"3O2 -> 2O3"}];function Pl(n){const t=new Map;for(const e of n)t.set(e,(t.get(e)||0)+1);return t}function Ux(n,t){const e=Object.entries(n.reactants);if(e.length!==t.size)return!1;for(const[i,s]of e)if(t.get(i)!==s)return!1;return!0}function Dl(n,t){const e=Pl(n);for(const i of Rl)if(i.condition===t&&Ux(i,e))return i;return null}function Tu(n){const t=Pl(n),e=new Set;for(const i of Rl){let s=!0;for(const[r,o]of t)if(!i.reactants[r]||i.reactants[r]<o){s=!1;break}s&&e.add(i.condition)}return e}function Nx(n,t){const e=Pl(n),i=[];for(const s of Rl){if(s.condition!==t)continue;let r=!0;for(const[a,c]of e)if(!s.reactants[a]||s.reactants[a]<c){r=!1;break}if(!r)continue;const o=[];for(const[a,c]of Object.entries(s.reactants)){const l=c-(e.get(a)||0);l>0&&o.push(l===1?a:`${l}${a}`)}o.length&&i.push(o.join(" + "))}return i.length?[...new Set(i)].join(" or "):null}function sa(n){return Ix[n]}const sl=Rx.filter(n=>n&&typeof n.formula=="string"&&n.formula.trim()?!0:(console.warn("challenges.js: skipping malformed entry",n),!1));dx();const ht=new Map,Ut=new Map,Jt=new Map;let De=1,Oe=null,Pi=null,kr=!0;const Di=new Set,Fs=[];let Jn=new Map;const rl=new Map;let We=[],me=[];const jr=new Map,Wn=new Map;let Gt=null,Ll=null,Il=!1,ei=null,Au="mouse";const Le=new Set,$r=new Set,rn=[],ol=new Set;let Ul=!1;const wu="mol3d.discoveries.v1",Hn=document.getElementById("scene-wrap"),He=new D0({antialias:!0,powerPreference:"low-power"});He.setPixelRatio(Math.min(1.5,window.devicePixelRatio||1));He.setSize(Hn.clientWidth,Hn.clientHeight);Hn.appendChild(He.domElement);const ve=new Lf;ve.background=new Pt(856343);ve.fog=new bl(856343,34,80);const Be=new nn(50,Hn.clientWidth/Hn.clientHeight,.1,200);Be.position.set(0,4.2,10.5);ve.add(new Gf(16777215,3358799,1.05));const Cu=new ou(16777215,1.5);Cu.position.set(6,10,8);ve.add(Cu);const Ru=new ou(8956671,.4);Ru.position.set(-6,4,-6);ve.add(Ru);let Si=new au(60,60,3159613,1909546);Si.position.y=-1.7;ve.add(Si);He.domElement.addEventListener("pointerdown",pv);const cn=new I0(Be,He.domElement);cn.enableDamping=!0;cn.dampingFactor=.08;cn.target.set(0,1.6,0);cn.minDistance=2.5;cn.maxDistance=45;cn.maxPolarAngle=Math.PI*.55;cn.addEventListener("change",ke);const ss=Lx({camera:Be,controls:cn});window.addEventListener("pointermove",mv);window.addEventListener("pointerup",_v);window.addEventListener("resize",()=>{Be.aspect=Hn.clientWidth/Hn.clientHeight,Be.updateProjectionMatrix(),He.setSize(Hn.clientWidth,Hn.clientHeight),ke()});let Zr=new co(1,16,12),Ks=new ao(1,1,1,10,1,!0);const Nl=320,Jr=1280,Fx=new Vn;new Pt(16777215);const Ox=new Pt(10135475),Bx=new Pt(15774761),vh=new Pt(5809919),Hx=new Pt(4176208),kx=new Pt(16273737),zx=new Pt(15774761),Vx=[0],Gx=[-.12,.12],Wx=[-.18,0,.18],Xx=new nu({color:16777215,shininess:70,specular:5592405}),qx=new nu({color:16777215,shininess:20,specular:1579032}),Yx=new iu({color:16777215}),Kx=new iu({color:16777215,transparent:!0,opacity:.9}),yn=new oo(Zr,Xx,Nl),Sn=new oo(Zr,qx,Nl),pn=new oo(Ks,Yx,Jr),mn=new oo(Ks,Kx,Jr);for(const n of[yn,Sn,pn,mn])n.frustumCulled=!1,n.instanceMatrix.setUsage(nf),ve.add(n);const Pu=[],Du=[],Lu=[],Iu=[];yn.userData.ids=Pu;Sn.userData.ids=Du;pn.userData.ids=Lu;mn.userData.ids=Iu;const Us=new Map,zr=new Map,Ds=new se,tn=new L,cs=new L,Qr=new L,Lr=new L,Ti=new L,Ls=new L,ra=new L,Mh=new L,Os=new Vn,Bs=new L,Uu=new L(0,1,0),yh=new Pt,Nu=new El({color:4176208,transparent:!0,opacity:.55}),Bn=new on(Ks,Nu);Bn.visible=!1;ve.add(Bn);const oa=["auto","low","med","high"];let Js="auto",gs=1;const Fu=new Dx,Ou=new Px;let Sh=0;const to=document.getElementById("fps-chip"),al=document.getElementById("btn-quality");function jx(){return Eu[Ui[gs]]}function Bu(n){gs=n;const t=Eu[Ui[n]];He.setPixelRatio(Math.min(t.pixelRatio,window.devicePixelRatio||1));const e=new co(1,t.sphereSeg[0],t.sphereSeg[1]),i=new ao(1,1,1,t.cylSeg,1,!0);for(const s of[yn,Sn])s.geometry=e;for(const s of[pn,mn,Bn])s.geometry=i;Zr.dispose(),Ks.dispose(),Zr=e,Ks=i,mo(),ke()}function Eh(){return lt(`quality.${Ui[gs]}`)}function eo(){return Js==="auto"?`${lt("quality.autoShort")} (${Eh()})`:Eh()}function mo(){al&&(al.textContent=lt("btn.quality",{mode:eo()})),to&&(to.textContent=`-- fps · ${eo()}`)}function Hu(n){Js=n,Ou.reset(),n!=="auto"&&Bu(Ui.indexOf(n)),mo()}function $x(n){if(n-Sh<500)return;Sh=n;const t=Fu.fps;if(Js==="auto"){const e=Ou.update(t,gs);e!==gs&&(Bu(e),Qt(lt("status.autoAdjusted",{tier:lt(`quality.${Ui[e]}`),fps:Math.round(t)})))}to&&(to.textContent=`${Math.round(t)} fps · ${eo()}`)}const aa=new Map;function Zx(n){if(aa.has(n))return aa.get(n);const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.font='bold 68px "Segoe UI", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle",e.lineWidth=10,e.lineJoin="round",e.strokeStyle="rgba(8,12,18,0.9)",e.strokeText(n,64,68),e.fillStyle="#f4f8ff",e.fillText(n,64,68);const i=new Qh(t);return aa.set(n,i),i}const la=new Map;function Jx(n){if(la.has(n))return la.get(n);const t=document.createElement("canvas");t.width=128,t.height=64;const e=t.getContext("2d");e.font='bold 46px "Segoe UI", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle";const i=n>0?`${n}+`:`${-n}−`;e.lineWidth=8,e.lineJoin="round",e.strokeStyle="rgba(8,12,18,0.95)",e.strokeText(i,64,34),e.fillStyle=n>0?"#7ee787":"#ff9d96",e.fillText(i,64,34);const s=new Qh(t);return la.set(n,s),s}function Qx(){for(const[n,t]of ht)if(!Us.has(n)){const i=.42+Gn(t.el)*.55,s=new bc(new Qa({map:Zx(t.el.sym),transparent:!0,depthWrite:!1}));s.scale.set(i,i,1),Us.set(n,s),ve.add(s);const r=new bc(new Qa({transparent:!0,depthWrite:!1}));r.scale.set(.62,.31,1),r.visible=!1,zr.set(n,r),ve.add(r)}for(const[n,t]of Us)ht.has(n)||(ve.remove(t),t.material.dispose(),Us.delete(n));for(const[n,t]of zr)ht.has(n)||(ve.remove(t),t.material.dispose(),zr.delete(n))}const tv=n=>1+2.70158*Math.pow(n-1,3)+1.70158*Math.pow(n-1,2);function ev(n,t){const e=jr.get(n);if(e===void 0)return 1;const i=(t-e)/380;return i>=1?(jr.delete(n),1):Math.max(.001,tv(Math.max(0,i)))}function nv(n,t){const e=ht.get(n);t.set(e.el.color),$r.has(n)&&t.lerp(zx,.5),n===Ll?t.lerp(Il?Hx:kx,.55):n===Oe?t.lerp(vh,.45):n===Pi&&t.lerp(vh,.18)}function go(){const n=performance.now();let t=0,e=0;for(const[r,o]of ht){const a=mu(o.el.cat),c=a?yn:Sn,l=a?t++:e++;if(l>=Nl)continue;const u=Gn(o.el)*ev(r,n);tn.set(o.pos.x,o.pos.y,o.pos.z),Lr.setScalar(u),Ds.compose(tn,Fx,Lr),c.setMatrixAt(l,Ds),nv(r,yh),c.setColorAt(l,yh),(a?Pu:Du)[l]=r}yn.count=t,Sn.count=e,yn.instanceMatrix.needsUpdate=!0,Sn.instanceMatrix.needsUpdate=!0,yn.instanceColor&&(yn.instanceColor.needsUpdate=!0),Sn.instanceColor&&(Sn.instanceColor.needsUpdate=!0),yn.boundingSphere=null,Sn.boundingSphere=null;let i=0,s=0;for(const r of Ut.values()){const o=ht.get(r.a),a=ht.get(r.b);if(!o||!a)continue;cs.set(o.pos.x,o.pos.y,o.pos.z),Qr.set(a.pos.x,a.pos.y,a.pos.z),Ti.subVectors(Qr,cs);const c=Ti.length()||1e-4;Ls.copy(Ti).divideScalar(c),ra.set(0,1,0),Math.abs(Ls.y)>.9&&ra.set(1,0,0),Mh.crossVectors(Ls,ra).normalize();const l=r.order===1?Vx:r.order===2?Gx:Wx,u=r.ionic?.06:.075;Os.setFromUnitVectors(Uu,Ls);for(let d=0;d<r.order;d++)if(tn.copy(cs).addScaledVector(Ls,c/2).addScaledVector(Mh,l[d]),Lr.set(u,c,u),Ds.compose(tn,Os,Lr),r.ionic){if(s>=Jr)break;mn.setMatrixAt(s,Ds),mn.setColorAt(s,Bx),Iu[s]=r.id,s++}else{if(i>=Jr)break;pn.setMatrixAt(i,Ds),pn.setColorAt(i,Ox),Lu[i]=r.id,i++}}pn.count=i,mn.count=s,pn.instanceMatrix.needsUpdate=!0,mn.instanceMatrix.needsUpdate=!0,pn.instanceColor&&(pn.instanceColor.needsUpdate=!0),mn.instanceColor&&(mn.instanceColor.needsUpdate=!0),pn.boundingSphere=null,mn.boundingSphere=null}function ku(){Be.getWorldDirection(Bs);for(const[n,t]of Us){const e=ht.get(n);if(!e)continue;const i=Gn(e.el);t.position.set(e.pos.x,e.pos.y,e.pos.z).addScaledVector(Bs,-(i+.1))}for(const[n,t]of zr){const e=ht.get(n);if(!e)continue;const i=rl.get(n),s=kr&&i!==void 0;if(t.visible=s,!s)continue;t.userData.fc!==i&&(t.material.map=Jx(i),t.material.needsUpdate=!0,t.userData.fc=i);const r=Gn(e.el);t.position.set(e.pos.x,e.pos.y,e.pos.z).addScaledVector(Bs,-(r+.48))}}function ye(n){return[...n.atoms].sort((t,e)=>t-e).join(",")}function Ae(n=new Set){me=fo(ht,Ut);const t=new Set(me.map(ye));for(const i of[...Jt.keys()])t.has(i)||Jt.delete(i);for(const i of[...Le])t.has(i)||Le.delete(i);Hl(),Qs(),We=me.map(i=>nx(ht,Ut,i,Jt.has(ye(i))?Jt.get(ye(i)):null));const e=lx(ht,Ut,me,We,n);Jn=new Map;for(const[i,s]of e)Jn.set(i,{x:s.x,y:s.y,z:s.z});for(const i of ht.keys())if(!Jn.has(i)){const s=ht.get(i).pos;Jn.set(i,{x:s.x,y:s.y,z:s.z})}if(Gt){const i=ht.get(Gt.id).pos;Jn.set(Gt.id,{x:i.x,y:i.y,z:i.z})}for(const i of[...Wn.keys()])t.has(i)||Wn.delete(i);return iv(),sv(),Vl(),Gl(),bv(),sd(),Qx(),document.getElementById("hint").style.display=ht.size?"none":"flex",ke(),me}function iv(){rl.clear();for(const n of We)if(n.feasible)for(const[t,e]of n.per)e.fc!==0&&rl.set(t,e.fc)}function zu(n,t){return`${n}|${t}`}function Fl(n,t){if(!t.feasible)return null;try{return wx(n.atoms.map(e=>ht.get(e)),n.bonds,t.formula,t.charge,t.per)||null}catch{return null}}function sv(){for(let n=0;n<me.length;n++){const t=me[n],e=We[n];if(!e||!e.feasible||t.bonds.length===0||t.atoms.length<2)continue;const i=zu(e.formula,e.charge);if(ol.has(i))continue;ol.add(i);const s=Fl(t,e);rn.push({formula:e.formula,charge:e.charge,name:s,t:Date.now(),saved:!1}),Ul=!0,Wl(lt("toast.newDisc",{f:ms(e.formula)+Zs("",e.charge),name:s?` — ${s}`:""}))}_o()}function rv(){try{const n=JSON.parse(localStorage.getItem(wu)||"[]");for(const t of n)!t||!t.formula||(t.saved=!0,rn.push(t),ol.add(zu(t.formula,t.charge??0)))}catch{}}function Vu(){if(rn.length)try{localStorage.setItem(wu,JSON.stringify(rn));for(const n of rn)n.saved=!0;Ul=!1,_o(),Wl(lt("toast.saved",{n:rn.length,s:rn.length>1?"s":""}))}catch{Qt(lt("status.saveFail"),"err")}}function _o(){const n=document.getElementById("disc-list"),t=document.getElementById("disc-count"),e=document.getElementById("btn-save-disc");if(n){if(t.textContent=rn.length?String(rn.length):"",!rn.length){n.textContent=lt("dex.discEmpty"),e.disabled=!0;return}n.textContent="";for(const i of rn){const s=document.createElement("div");s.className="disc-row";const r=document.createElement("span");r.className="d-f",r.textContent=ms(i.formula)+Zs("",i.charge??0);const o=document.createElement("span");if(o.className="d-n",o.textContent=i.name||lt("dex.unknown"),o.title=i.name||"",s.append(r,o),!i.saved){const a=document.createElement("span");a.className="d-dot",a.title=lt("dex.notSaved"),s.appendChild(a)}n.appendChild(s)}e.disabled=!Ul}}const xo=n=>({id:n.id,el:n.el,pos:{x:n.pos.x,y:n.pos.y,z:n.pos.z}});function hi(n){Fs.push(n),Fs.length>200&&Fs.shift(),ql()}function Gu(n,t){const e=_u(ht,Ut,n,t);if(!e.ok)return Qt(po(e.reason),"err"),!1;const i=wi(ht,Ut,n),s=wi(ht,Ut,t),r=i!==s,o=r?ye(i):null,a=r?ye(s):null,c=r?Jt.get(o):void 0,l=r?Jt.get(a):void 0;r&&(Jt.delete(o),Jt.delete(a));const u=De++;Ut.set(u,{id:u,a:n,b:t,order:1,ionic:e.type==="ionic"}),r&&c!==void 0!=(l!==void 0)&&Jt.set(ye(wi(ht,Ut,n)),c!==void 0?c:l),hi({type:"bond",bondId:u}),Ae();const d=ht.get(n).el.sym,f=ht.get(t).el.sym;return Qt(e.type==="ionic"?lt("status.ionicBond",{a:d,b:f}):lt("status.covBond",{a:d,b:f}),"ok"),!0}function Wu(n,t=!0){const e=Ut.get(n);if(!e)return;const i=wi(ht,Ut,e.a),s=ye(i),r=Jt.get(s);if(Ut.delete(n),r!==void 0){const o=fo(ht,Ut).filter(c=>c.atoms.some(l=>i.atoms.includes(l))&&c.bonds.length>0),a=o.find(c=>c.atoms.includes(e.a))||o.find(c=>c.atoms.includes(e.b))||o[0];a&&Jt.set(ye(a),r)}t&&hi({type:"delBond",snap:{...e}}),Ae()}function Xu(n,t=!0){const e=ht.get(n);if(!e)return;const i=wi(ht,Ut,n),s=ye(i),r=Jt.get(s),o=zn(ht,Ut,n).map(a=>({...a}));for(const a of o)Ut.delete(a.id);if(ht.delete(n),Oe===n&&(Oe=null),Pi===n&&(Pi=null),r!==void 0){const a=fo(ht,Ut).filter(c=>c.atoms.some(l=>i.atoms.includes(l))&&c.bonds.length>0).sort((c,l)=>l.atoms.length-c.atoms.length);a[0]&&Jt.set(ye(a[0]),r)}t&&hi({type:"delAtom",atom:xo(e),bonds:o}),Ae()}function qu(n,t){const e=Ut.get(n);e&&(hi({type:"order",bondId:n,prev:e.order}),e.order=t,Ae(),Qt(e.ionic?lt("status.orderIonic",{n:t}):lt("status.orderCov",{n:t}),"ok"))}function ll(n){const t=Ut.get(n);if(!t)return;const e=xu(ht,Ut,t);if(!e.ok){Qt(po(e.reason),"err");return}qu(n,t.order+1)}function ov(n){const t=Ut.get(n);t&&(t.order>1?qu(n,t.order-1):Wu(n))}function Ol(n){const t=typeof n=="string"?Ws(n):n;if(!t)return;let e=null;for(let s=0;s<60;s++){const r=Math.random()*Math.PI*2,o=1.2+Math.random()*3.4,a={x:Math.cos(r)*o,y:1.6+(Math.random()-.5)*2.6,z:Math.sin(r)*o};let c=!0;for(const[,l]of ht)if(Math.hypot(l.pos.x-a.x,l.pos.y-a.y,l.pos.z-a.z)<Gn(l.el)+Gn(t)+.5){c=!1;break}if(c){e=a;break}}e||(e={x:De%7*1.5-4.5,y:6,z:0});const i=De++;return ht.set(i,{id:i,el:t,pos:e}),jr.set(i,performance.now()),hi({type:"add",id:i}),tr(i),Ae(),Qt(lt("status.placed",{name:bn(t)}),"info"),i}function Yu(){if(!(!ht.size&&!Ut.size&&!Jt.size)){hi({type:"clear",atoms:[...ht.values()].map(xo),bonds:[...Ut.values()].map(n=>({...n})),overrides:[...Jt],nextId:De});for(const n of[...Ut.keys()])Ut.delete(n);for(const n of[...ht.keys()])ht.delete(n);ht.clear(),Ut.clear(),Jt.clear(),Wn.clear(),Oe=null,Pi=null,ai(),Ae(),Qt(lt("status.cleared"),"info")}}function Bl(){const n=Fs.pop();if(ql(),!n){Qt(lt("status.nothingUndo"));return}switch(n.type){case"add":Xu(n.id,!1);break;case"bond":Wu(n.bondId,!1);break;case"delBond":{const t=n.snap;Ut.set(t.id,{...t}),Ae();break}case"order":{const t=Ut.get(n.bondId);t&&(t.order=n.prev),Ae();break}case"delAtom":{const t=n.atom;ht.set(t.id,t);for(const e of n.bonds)Ut.set(e.id,{...e});Ae();break}case"clear":{for(const t of n.atoms)ht.set(t.id,t);for(const t of n.bonds)Ut.set(t.id,{...t});for(const[t,e]of n.overrides)Jt.set(t,e);De=Math.max(De,n.nextId),Ae();break}case"snapshot":{ht.clear(),Ut.clear(),Jt.clear(),Wn.clear();for(const t of n.atoms)ht.set(t.id,t);for(const t of n.bonds)Ut.set(t.id,{...t});for(const[t,e]of n.overrides)Jt.set(t,e);De=Math.max(De,n.nextId),Oe=null,Pi=null,ai(),Ae();break}}Qt(lt("status.undone"))}const es=.4,av=10.5,lv=-.2,cv=4.6;function cl(){return new L(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize()}function Ku(n){if(!jx().drift||Gt||me.length===0)return!1;let t=!1;for(const e of me){const i=ye(e);let s=Wn.get(i);s||(s={v:cl().multiplyScalar(es*(.7+Math.random()*.6)),axis:cl(),rate:.08+Math.random()*.18},Wn.set(i,s));const r=s.v.length()||1e-4;r>es*1.001?s.v.multiplyScalar(Math.max(es,r-n*2.2)/r):r<es*.999&&s.v.setLength(Math.min(es,r+n*.4));const o=new L;for(const c of e.atoms){const l=ht.get(c).pos;o.x+=l.x,o.y+=l.y,o.z+=l.z}o.divideScalar(e.atoms.length),(Math.hypot(o.x,o.z)>av||o.y<lv||o.y>cv)&&(Bs.set(-o.x,1.9-o.y,-o.z).normalize(),s.v.lerp(Bs,Math.min(1,n*1.6)).setLength(es)),Os.setFromAxisAngle(s.axis,s.rate*n);for(const c of e.atoms){const l=ht.get(c);tn.set(l.pos.x,l.pos.y,l.pos.z).sub(o).applyQuaternion(Os).add(o).addScaledVector(s.v,n),l.pos.x=tn.x,l.pos.y=tn.y,l.pos.z=tn.z;const u=Jn.get(c);u&&(tn.set(u.x,u.y,u.z).sub(o).applyQuaternion(Os).add(o).addScaledVector(s.v,n),u.x=tn.x,u.y=tn.y,u.z=tn.z)}t=!0}return t}const ca=document.getElementById("rxn-panel"),hv=document.getElementById("rxn-count"),bh=document.getElementById("rxn-conds"),Ai=n=>lt(`cond.${n}`);function Hl(){$r.clear();for(const n of me)if(Le.has(ye(n)))for(const t of n.atoms)$r.add(t)}function ai(){Le.size&&(Le.clear(),$r.clear(),Qs(),ke())}function Qs(){if(ca){if(Le.size===0){ca.style.display="none";return}ca.style.display="flex",hv.textContent=lt("rxn.count",{n:Le.size,s:Le.size>1?"s":""})}}function ju(){const n=[];for(let t=0;t<me.length;t++)Le.has(ye(me[t]))&&n.push(We[t]?We[t].formula:"");return n}function $u(n){const t="₀₁₂₃₄₅₆₇₈₉";return n.replace(/->/g,"→").replace(new RegExp("(?<=[A-Za-z)\\]])\\d+","g"),e=>[...e].map(i=>t[+i]).join(""))}function uv(){if(bh){for(const n of bu){const t=document.createElement("button");t.textContent=Ai(n.key),t.dataset.cond=n.key,t.addEventListener("click",()=>dv(n.key)),bh.appendChild(t)}document.getElementById("rxn-cancel").addEventListener("click",()=>{ai(),Qt(lt("status.reactionCancelled"))})}}function dv(n){const t=ju(),e=Dl(t,n);if(e){Zu(e);return}const i=Tu(t);if(!i.size){Qt(lt("status.noReaction"),"err");return}if(i.has(n)){const s=Nx(t,n);Qt(s?lt("status.notEnough",{more:$u(s),cond:Ai(n).toLowerCase()}):lt("status.nothingHappens",{cond:Ai(n)}),"err");return}Qt(lt("status.nothingHappensTry",{cond:Ai(n),valid:[...i].map(s=>Ai(s)).join(", ")}),"err")}function Zu(n){const t=me.filter(d=>Le.has(ye(d)));if(!t.length)return;const e=t.map(d=>We[me.indexOf(d)]?.formula??"");if(!Dl(e,n.condition)){Qt(lt("status.sceneChanged"),"err"),ai();return}const i=[];for(const d of t)for(const f of d.atoms)i.push(f);const s=new Set(i),r=new L;for(const d of i){const f=ht.get(d).pos;r.x+=f.x,r.y+=f.y,r.z+=f.z}r.divideScalar(i.length),hi({type:"snapshot",atoms:[...ht.values()].map(xo),bonds:[...Ut.values()].map(d=>({...d})),overrides:[...Jt],nextId:De});for(const d of[...Ut.values()])(s.has(d.a)||s.has(d.b))&&Ut.delete(d.id);const o=new Map;for(const d of i){const f=ht.get(d).el.sym;o.has(f)||o.set(f,[]),o.get(f).push(d)}const a=[];for(const[d,f]of n.products)for(let p=0;p<f;p++)a.push(d);let c=0;for(let d=1;d<a.length;d++)sa(a[d]).atoms.length>sa(a[c]).atoms.length&&(c=d);const l=Math.PI*(3-Math.sqrt(5)),u=[];for(let d=0;d<a.length;d++){const f=sa(a[d]);let p=r;if(d!==c){const h=Math.random()*Math.PI*2,E=3.2+Math.random()*1.8+d*.9;p=new L(r.x+Math.cos(h)*E,Math.max(.8,Math.min(4.2,r.y+(Math.random()-.5)*1.6)),r.z+Math.sin(h)*E)}const g=[],x=f.atoms.length;for(let h=0;h<x;h++){const E=f.atoms[h];let b=o.get(E)?.pop();b===void 0&&(b=De++,ht.set(b,{id:b,el:Ws(E),pos:{x:p.x,y:p.y,z:p.z}}));const S=x===1?0:1-2*h/(x-1),C=Math.sqrt(Math.max(0,1-S*S)),R=l*h;ht.get(b).pos={x:p.x+Math.cos(R)*C*.85,y:Math.max(-.4,Math.min(5.2,p.y+S*.85)),z:p.z+Math.sin(R)*C*.85},g.push(b)}for(const[h,E,b,S]of f.bonds)Ut.set(De,{id:De,a:g[h],b:g[E],order:b,ionic:!!S}),De++;const m=[...g].sort((h,E)=>h-E).join(",");f.charge&&Jt.set(m,f.charge),u.push({key:m,center:p,i:d})}for(const[,d]of o)for(const f of d)ht.delete(f);ai(),Oe=null,Ae();for(const{key:d,center:f,i:p}of u){if(p===c){Wn.delete(d);continue}const g=new L(f.x-r.x,f.y-r.y,f.z-r.z).normalize();Wn.set(d,{v:g.multiplyScalar(2.6+Math.random()*1.4).add(new L(0,.7,0)),axis:cl(),rate:.1+Math.random()*.2})}Qt(lt("status.reactionDone",{cond:Ai(n.condition),eq:$u(n.equation)}),"ok")}const li=new Yf,_s=new wt;function vo(n){const t=He.domElement.getBoundingClientRect();_s.x=(n.clientX-t.left)/t.width*2-1,_s.y=-((n.clientY-t.top)/t.height)*2+1}function kl(){go(),li.setFromCamera(_s,Be);let n=null,t=1/0;for(const e of[yn,Sn])for(const i of li.intersectObject(e))i.instanceId!==void 0&&i.distance<t&&(t=i.distance,n=e.userData.ids[i.instanceId]);return n}function fv(){go(),li.setFromCamera(_s,Be);let n=null,t=1/0;for(const e of[pn,mn])for(const i of li.intersectObject(e))i.instanceId!==void 0&&i.distance<t&&(t=i.distance,n=e.userData.ids[i.instanceId]);return n}function pv(n){if(Au=n.pointerType||"mouse",n.button!==0)return;vo(n);const t=kl();if(ei={x:n.clientX,y:n.clientY,atomId:t},t!==null){n.stopImmediatePropagation(),cn.enabled=!1,tr(t);const e=ht.get(t),i=Be.getWorldDirection(new L).negate(),s=new Fn().setFromNormalAndCoplanarPoint(i,new L(e.pos.x,e.pos.y,e.pos.z));li.setFromCamera(_s,Be);const r=new L,a=li.ray.intersectPlane(s,r)?r.sub(new L(e.pos.x,e.pos.y,e.pos.z)):new L;Gt={id:t,plane:s,grabOffset:a,moved:!1,snapId:null,snapLegal:!1,snapMsg:"",snapUpgrade:!1},ke()}}function mv(n){if(vo(n),Gt){if(!Gt.moved&&ei&&Math.hypot(n.clientX-ei.x,n.clientY-ei.y)>4&&(Gt.moved=!0),!Gt.moved)return;li.setFromCamera(_s,Be);const e=new L;if(!li.ray.intersectPlane(Gt.plane,e))return;e.sub(Gt.grabOffset);const i=ht.get(Gt.id);i.pos.x=e.x,i.pos.y=Math.max(-.4,Math.min(5.4,e.y)),i.pos.z=e.z,Jn.set(Gt.id,{x:i.pos.x,y:i.pos.y,z:i.pos.z});let s=null,r=1/0;for(const[o,a]of ht){if(o===Gt.id)continue;const c=Math.hypot(a.pos.x-i.pos.x,a.pos.y-i.pos.y,a.pos.z-i.pos.z),l=(Gn(i.el)+Gn(a.el))*1.45+.25;c<l&&c<r&&(r=c,s=o)}if(Gt.snapId=s,s===null)Gt.snapLegal=!1,Gt.snapMsg="",Gt.snapUpgrade=!1;else{const o=[...Ut.values()].find(a=>a.a===Gt.id&&a.b===s||a.b===Gt.id&&a.a===s);if(o){const a=xu(ht,Ut,o);Gt.snapUpgrade=a.ok,Gt.snapLegal=a.ok,Gt.snapMsg=a.ok?lt("snap.upgradeTo",{n:o.order+1}):a.reason}else{const a=_u(ht,Ut,Gt.id,s);Gt.snapLegal=a.ok,Gt.snapMsg=a.ok?a.type==="ionic"?lt("snap.ionic"):lt("snap.bond"):a.reason}}Ll=Gt.snapId,Il=Gt.snapLegal,Gt.snapMsg,gv(),ke();return}if(n.target!==He.domElement)return;const t=kl();t!==Pi&&(Pi=t,He.domElement.style.cursor=t!==null?"grab":"",ke())}function gv(){if(!Gt||Gt.snapId===null){Bn.visible=!1;return}const n=ht.get(Gt.id),t=ht.get(Gt.snapId);cs.set(n.pos.x,n.pos.y,n.pos.z),Qr.set(t.pos.x,t.pos.y,t.pos.z),Ti.subVectors(Qr,cs);const e=Ti.length()||1e-4;Bn.position.copy(cs).addScaledVector(Ti,.5),Bn.quaternion.setFromUnitVectors(Uu,Ti.divideScalar(e)),Bn.scale.set(.16,e,.16),Nu.color.setHex(Il?4176208:16273737),Bn.visible=!0}function _v(n){if(xv(n),Gt){cn.enabled=!0;const t=Gt;if(Gt=null,Ll=null,Bn.visible=!1,t.moved){if(t.snapId!==null){const e=[...Ut.values()].find(i=>i.a===t.id&&i.b===t.snapId||i.b===t.id&&i.a===t.snapId);e?t.snapUpgrade?ll(e.id):Qt(po(t.snapMsg),"err"):Gu(t.id,t.snapId)}Ae(new Set([t.id]))}ke();return}if(ei&&Math.hypot(n.clientX-ei.x,n.clientY-ei.y)<4&&ei.atomId===null){vo(n);const t=fv();t!==null&&(n.shiftKey?ov(t):ll(t))}}let Ir=0,Th=0,Ah=0;function xv(n){if((n.pointerType||"mouse")!=="touch"||n.target!==He.domElement)return;const t=performance.now();Ir&&t-Ir<350&&Math.hypot(n.clientX-Th,n.clientY-Ah)<32?(Ir=0,Ju(n)):(Ir=t,Th=n.clientX,Ah=n.clientY)}He.domElement.addEventListener("dblclick",n=>{Au!=="touch"&&Ju(n)});function Ju(n){vo(n);const t=kl();if(t===null){ai(),Qt(lt("status.selCleared"));return}const e=wi(ht,Ut,t),i=ye(e);Le.has(i)?(Le.delete(i),Qt(lt("status.selRemoved"))):(Le.add(i),Qt(lt("status.selAdded",{n:Le.size}),"info")),Hl(),Qs(),ke()}function vv(){const n=document.getElementById("ptable");for(let e=1;e<=118;e++){const i=uo.find(o=>o.z===e),s=j0(e),r=document.createElement("button");r.className="el",r.style.gridColumn=s.col,r.style.gridRow=s.row,r.style.borderColor=i.color,r.dataset.sym=i.sym,r.title=lt("el.title",{name:bn(i),cat:Ys(i.cat),max:i.maxBonds}),r.innerHTML=`<span class="z">${e}</span><span class="s">${i.sym}</span>`,r.addEventListener("click",()=>Ol(i)),n.appendChild(r)}const t=document.createElement("div");t.className="el ph",t.style.gridColumn="3 / 13",t.style.gridRow="8",t.textContent=lt("ptable.ph"),n.appendChild(t)}function Qu(){const n=document.getElementById("legend");n.innerHTML="";for(const[t,e]of Object.entries($0)){const i=document.createElement("span");i.className="lg",i.innerHTML=`<i style="background:${e}"></i>${Ys(t)}`,n.appendChild(i)}}const wh=n=>n.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D");function td(){for(const n of document.querySelectorAll("#pool-list .el-chip")){const t=Ws(n.dataset.sym);t&&(n.dataset.search=`${t.sym} ${t.name} ${t.z} ${bn(t)} ${wh(t.name)} ${wh(bn(t))}`.toLowerCase(),n.title=lt("el.title",{name:bn(t),cat:Ys(t.cat),max:t.maxBonds}),n.querySelector(".n").textContent=bn(t))}for(const n of document.querySelectorAll("#ptable .el[data-sym]")){const t=Ws(n.dataset.sym);t&&(n.title=lt("el.title",{name:bn(t),cat:Ys(t.cat),max:t.maxBonds}))}}function Mv(){vv();const n=document.getElementById("pool-list");for(const i of uo){const s=document.createElement("button");s.className="el-chip",s.dataset.sym=i.sym,s.dataset.search=`${i.sym} ${i.name} ${i.z}`.toLowerCase(),s.title=`${i.name} · ${i.cat} · max bonds ${i.maxBonds}`;const r=document.createElement("i");r.style.background=i.color;const o=document.createElement("span");o.className="s",o.textContent=i.sym;const a=document.createElement("span");a.className="n",a.textContent=i.name,s.append(r,o,a),s.addEventListener("click",()=>Sv(i)),n.appendChild(s)}td();const t=document.getElementById("pool-search");t.addEventListener("input",yv),t.addEventListener("keydown",i=>{if(i.key!=="Enter")return;const s=[...n.children].find(r=>r.style.display!=="none");s&&s.click()});const e=document.getElementById("pool-view");e.addEventListener("click",()=>{const i=!n.hidden;n.hidden=i,document.getElementById("ptable").hidden=!i,e.textContent=lt(i?"pool.viewList":"pool.viewTable")})}function yv(){const n=document.getElementById("pool-search").value.trim().toLowerCase();for(const t of document.querySelectorAll("#pool-list .el-chip"))t.style.display=!n||t.dataset.search.includes(n)?"":"none"}function Sv(n){Ol(n),document.body.classList.contains("mobile")&&no()}function Ev(n){return n>0?`+${n}`:`${n}`}function zl(){if(Oe===null||!ht.has(Oe))return null;const n=me.find(t=>t.atoms.includes(Oe));return n?{comp:n,an:We[me.indexOf(n)]}:null}function Vl(){const n=document.getElementById("sel-info"),t=document.getElementById("mol-info"),e=document.getElementById("mol-warn"),i=zl();if(!i){n.innerHTML=`<span class="muted">${lt("sel.empty")}</span>`,t.innerHTML=`<span class="muted">${lt("mol.empty")}</span>`,e.style.display="none";return}const s=ht.get(Oe);n.innerHTML=`<b>${s.el.sym}</b> — ${bn(s.el)}<br />
    <span class="muted">${lt("sel.stats",{cat:Ys(s.el.cat),mass:s.el.mass,en:s.el.en??"?",max:s.el.maxBonds})}</span>`;const{comp:r,an:o}=i;if(r.bonds.length===0){t.innerHTML=`<span class="muted">${lt("mol.freeAtom")}</span>`,e.style.display="none";return}const a=Fl(r,o),c=`${ms(o.formula)}<span class="muted">${Zs("",o.charge)}</span>`;if(t.innerHTML=`<div class="mol-formula">${c}</div><div id="mol-name">${a||lt("mol.unnamed")}</div>
    <span class="muted">${lt("mol.stats",{a:r.atoms.length,b:r.bonds.length})}</span>`,!o.feasible)e.style.display="block",e.textContent=po(o.reason)||lt("chem.lewis.charge");else{const l=r.atoms.find(u=>{const d=o.per.get(u);return!d||d.isMetal||!d.bonded||!d.ionU?!1:(ht.get(u).el.valenceElectrons+d.ionU-d.covSum)%2!==0});l?(e.style.display="block",e.textContent=lt("chem.partialIonic",{sym:bn(ht.get(l).el)})):e.style.display="none"}}function Gl(){const n=document.getElementById("mol-list");if(n.textContent="",!me.length){n.textContent=lt("list.empty");return}let t=0;me.forEach((e,i)=>{if(e.bonds.length===0)return;t++;const s=We[i],r=document.createElement("div");r.className="mol-row"+(Oe!==null&&e.atoms.includes(Oe)?" active":"");const o=document.createElement("span");o.className="m-name",o.textContent=Fl(e,s)||ms(s.formula);const a=document.createElement("span");a.className="m-f",a.textContent=ms(s.formula)+Zs("",s.charge),r.append(o,a),r.addEventListener("click",()=>tr(e.atoms[0])),n.appendChild(r)}),t||(n.textContent=lt("list.empty"))}function ed(n){return ms(n.formula)+Zs("",n.charge??0)}function nd(n){return qs()&&n.vi?n.vi:n.name||ed(n)}function Mo(){const n=document.getElementById("ch-list"),t=document.getElementById("ch-progress");t.textContent=`${Di.size} / ${sl.length}`,n.textContent="";let e=null;for(const i of sl){const s=i.tier??1;if(s!==e){e=s;const c=document.createElement("div");c.className="tier",c.textContent=s,n.appendChild(c)}const r=document.createElement("div");r.className="ch"+(Di.has(`${i.formula}|${i.charge??0}`)?" done":"");const o=document.createElement("span");o.className="ch-f",o.textContent=ed(i);const a=document.createElement("span");a.className="ch-n",a.textContent=nd(i),r.append(o,a),n.appendChild(r)}}function bv(){for(const n of sl){const t=`${n.formula}|${n.charge??0}`;if(Di.has(t))continue;me.some((i,s)=>We[s].feasible&&We[s].formula===n.formula&&(We[s].charge??0)===(n.charge??0))&&(Di.add(t),Wl(lt("toast.challenge",{name:nd(n)})),Mo())}}let Ch=null;function Qt(n,t="info"){const e=document.getElementById("status-text");e.textContent=n,e.className=t,clearTimeout(Ch),Ch=setTimeout(()=>{e.textContent=""},6e3)}let Rh=null;function Wl(n){const t=document.getElementById("toast");t.textContent=n,t.classList.add("show"),clearTimeout(Rh),Rh=setTimeout(()=>t.classList.remove("show"),3200)}function tr(n){Oe=n,Vl(),Gl(),ke()}function id(n){const t=zl();if(!t||t.comp.bonds.length===0){Qt(lt("status.selectFirst"));return}const e=ye(t.comp),i=(Jt.has(e)?Jt.get(e):t.an.charge)+n;if(Math.abs(i)>6){Qt(lt("status.chargeLimit"),"err");return}Jt.set(e,i),hi({type:"snapshot",atoms:[...ht.values()].map(xo),bonds:[...Ut.values()].map(s=>({...s})),overrides:[...Jt],nextId:De}),Ae(),Qt(lt("status.chargeSet",{v:Ev(i)}),"ok")}let Ph=null;function sd(){clearTimeout(Ph),Ph=setTimeout(()=>{try{localStorage.setItem("mol3d.v1",JSON.stringify({atoms:[...ht.values()].map(n=>({id:n.id,z:n.el.z,pos:n.pos})),bonds:[...Ut.values()].map(n=>({id:n.id,a:n.a,b:n.b,order:n.order,ionic:n.ionic})),nextId:De,overrides:[...Jt],fc:[...Di]}))}catch{}},300)}function Tv(){let n;try{n=JSON.parse(localStorage.getItem("mol3d.v1")||"null")}catch{n=null}if(!(!n||!Array.isArray(n.atoms))){for(const t of n.atoms){if(!t||!Number.isInteger(t.id)||!t.pos)continue;const e=uo.find(i=>i.z===t.z);e&&ht.set(t.id,{id:t.id,el:e,pos:{x:+t.pos.x||0,y:+t.pos.y||0,z:+t.pos.z||0}})}for(const t of Array.isArray(n.bonds)?n.bonds:[])t&&Number.isInteger(t.id)&&ht.has(t.a)&&ht.has(t.b)&&Ut.set(t.id,{...t});for(const[t,e]of Array.isArray(n.overrides)?n.overrides:[])typeof t=="string"&&Number.isInteger(e)&&Jt.set(t,e);for(const t of Array.isArray(n.fc)?n.fc:[])typeof t=="string"&&Di.add(t);De=Number.isInteger(n.nextId)&&n.nextId>0?n.nextId:Math.max(0,...ht.keys(),...Ut.keys())+1}}document.getElementById("btn-undo").addEventListener("click",Bl);document.getElementById("btn-clear").addEventListener("click",Yu);document.getElementById("btn-fc").addEventListener("click",()=>{kr=!kr,document.getElementById("btn-fc").classList.toggle("on",kr),ke()});al.addEventListener("click",()=>{const n=oa.indexOf(Js);Hu(oa[(n+1)%oa.length]),Qt(lt("status.quality",{mode:eo()}))});document.getElementById("btn-save-disc").addEventListener("click",Vu);document.getElementById("chg-minus").addEventListener("click",()=>id(-1));document.getElementById("chg-plus").addEventListener("click",()=>id(1));document.getElementById("chg-auto").addEventListener("click",()=>{const n=zl();if(!n||n.comp.bonds.length===0){Qt(lt("status.selectFirst"));return}Jt.delete(ye(n.comp)),Ae(),Qt(lt("status.chargeAuto"))});document.getElementById("ch-reset").addEventListener("click",()=>{Di.clear(),Mo(),sd(),Qt(lt("status.chalReset"))});window.addEventListener("keydown",n=>{n.target instanceof HTMLInputElement||((n.ctrlKey||n.metaKey)&&n.key.toLowerCase()==="z"?(n.preventDefault(),Bl()):n.key==="Delete"||n.key==="Backspace"?Oe!==null&&Xu(Oe):n.key==="Escape"&&(no(),ai(),tr(null)))});document.getElementById("btn-fc").classList.add("on");const rd="mol3d.theme",Dh={dark:{bg:856343,gridA:3159613,gridB:1909546,meta:"#0d1117"},light:{bg:16185594,gridA:13226457,gridB:14541801,meta:"#f6f8fa"}},Xl=document.getElementById("btn-theme");function od(n){const t=Dh[n]||Dh.dark;document.documentElement.dataset.theme=n==="light"?"light":"dark",ve.background.set(t.bg),ve.fog&&ve.fog.color.set(t.bg),ve.remove(Si),Si.geometry.dispose(),Si=new au(60,60,t.gridA,t.gridB),Si.position.y=-1.7,ve.add(Si),document.querySelector('meta[name="theme-color"]')?.setAttribute("content",t.meta),Xl.textContent=lt("btn.theme",{mode:lt(n==="light"?"theme.light":"theme.dark")})}let Qn="dark";try{const n=localStorage.getItem(rd);(n==="light"||n==="dark")&&(Qn=n)}catch{}od(Qn);Xl.addEventListener("click",()=>{Qn=Qn==="dark"?"light":"dark";try{localStorage.setItem(rd,Qn)}catch{}od(Qn),ke(),Qt(lt("status.theme",{mode:lt(Qn==="light"?"theme.light":"theme.dark")}))});const hl=document.getElementById("btn-lang");hl.textContent=Mu()==="en"?"VI":"EN";hl.addEventListener("click",()=>{px(fx()),hl.textContent=Mu()==="en"?"VI":"EN",Av(),Qt(lt("status.lang"))});function Av(){Cl(),mo(),Xl.textContent=lt("btn.theme",{mode:lt(Qn==="light"?"theme.light":"theme.dark")});const n=document.getElementById("pool-list");document.getElementById("pool-view").textContent=n.hidden?lt("pool.viewList"):lt("pool.viewTable");const t=document.querySelector("#ptable .el.ph");t&&(t.textContent=lt("ptable.ph")),Qu(),td();for(const e of document.querySelectorAll("#rxn-conds button"))e.textContent=Ai(e.dataset.cond);Qs(),Vl(),Gl(),_o(),Mo(),ke()}const wv=["left","tab-info","tab-dex"];function no(){for(const n of wv)document.getElementById(n)?.classList.remove("open");document.querySelectorAll("#mtabs button.on").forEach(n=>n.classList.remove("on"))}{const n=document.getElementById("mtabs"),t=window.matchMedia("(max-width: 860px)"),e=()=>{document.body.classList.toggle("mobile",t.matches),t.matches||no()};e(),t.addEventListener("change",e),n.addEventListener("click",i=>{const s=i.target.closest("button[data-tab]");if(!s)return;const r=document.getElementById(s.dataset.tab),o=r.classList.contains("open");no(),o||(r.classList.add("open"),s.classList.add("on"))})}{const n=()=>document.body.classList.add("joy");window.matchMedia("(pointer: coarse)").matches&&n(),window.addEventListener("pointerdown",o=>{o.pointerType==="touch"&&n()});const t=document.getElementById("joy-stick"),e=document.getElementById("joy-knob");let i=null;const s=o=>{const a=t.getBoundingClientRect();let c=o.clientX-(a.left+a.width/2),l=o.clientY-(a.top+a.height/2);const u=a.width/2,d=Math.hypot(c,l);d>u&&(c=c/d*u,l=l/d*u),e.style.transform=`translate(${c}px, ${l}px)`,ss.setStick(c/u,-l/u)};t.addEventListener("pointerdown",o=>{i=o.pointerId;try{t.setPointerCapture(o.pointerId)}catch{}s(o)}),t.addEventListener("pointermove",o=>{o.pointerId===i&&s(o)});const r=o=>{o.pointerId===i&&(i=null,e.style.transform="",ss.setStick(0,0))};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r);for(const[o,a]of[["joy-up",1],["joy-down",-1]]){const c=document.getElementById(o);c.addEventListener("pointerdown",l=>{l.preventDefault(),ss.setVertical(a)});for(const l of["pointerup","pointercancel","pointerleave"])c.addEventListener(l,()=>ss.setVertical(0))}}let ul=!0;function ke(){ul=!0}function ad(n){const t=1-Math.exp(-n*9);let e=!1;for(const[i,s]of ht){const r=Jn.get(i);if(!r)continue;const o=r.x-s.pos.x,a=r.y-s.pos.y,c=r.z-s.pos.z;o*o+a*a+c*c<1e-6||(s.pos.x+=o*t,s.pos.y+=a*t,s.pos.z+=c*t,e=!0)}return e}let Lh=performance.now();function ld(n){requestAnimationFrame(ld);const t=Math.min(.05,(n-Lh)/1e3);Lh=n,Fu.frame(n),cn.update();let e=!1;e=ss.update(t)||e,e=Ku(t)||e,e=ad(t)||e,jr.size&&(e=!0),Gt&&(e=!0),$x(n),(ul||e)&&(ul=!1,go(),ku(),He.render(ve,Be))}window.__mol3d={atoms:ht,bonds:Ut,overrides:Jt,movement:ss,camera:Be,controls:cn,analyses:()=>We,comps:()=>me,spawnAtom:Ol,reanalyze:Ae,selectAtom:tr,undo:Bl,clearAll:Yu,screenPosOf:n=>{const t=ht.get(n);if(!t)return null;const e=new L(t.pos.x,t.pos.y,t.pos.z).project(Be),i=He.domElement.getBoundingClientRect();return{x:(e.x+1)/2*i.width+i.left,y:(-e.y+1)/2*i.height+i.top}},devBond:(n,t)=>Gu(n,t),devUpgrade:n=>ll(n),reaction:{selectByFormula:n=>{for(const t of me){const e=ye(t);if(Le.has(e))continue;const i=me.indexOf(t);if(We[i]?.formula===n)return Le.add(e),Hl(),Qs(),ke(),!0}return!1},pick:n=>{const t=ju(),e=Dl(t,n);if(e)return Zu(e),e.equation;const i=Tu(t);return i.size?`wrong-condition:${[...i].join(",")}`:"none"},clear:ai},setQuality:Hu,quality:()=>Js,tierKey:()=>Ui[gs],discoveries:()=>[...rn],saveDiscoveries:Vu,driftVelocity:n=>{const t=wi(ht,Ut,n);if(!t)return null;const e=Wn.get(ye(t));return e?{x:e.v.x,y:e.v.y,z:e.v.z}:null},stepAnim:n=>{const t=Ku(n),e=ad(n);return go(),ku(),He.render(ve,Be),{drift:t,lerp:e}}};Cl();Tv();rv();Mv();Qu();uv();Mo();_o();ql();mo();Ae();requestAnimationFrame(ld);function ql(){document.getElementById("btn-undo").disabled=Fs.length===0}
