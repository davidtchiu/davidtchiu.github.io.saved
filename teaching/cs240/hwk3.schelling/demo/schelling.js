function f(){this.l=!1;this.i=null;this.u=void 0;this.h=1;this.s=this.v=0;this.j=null}function l(a){if(a.l)throw new TypeError("Generator is already running");a.l=!0}f.prototype.m=function(a){this.u=a};f.prototype.o=function(a){this.j={A:a,B:!0};this.h=this.v||this.s};f.prototype["return"]=function(a){this.j={"return":a};this.h=this.s};function p(a,b){a.h=4;return{value:b}}function q(a){this.g=new f;this.C=a}
q.prototype.m=function(a){l(this.g);if(this.g.i)return t(this,this.g.i.next,a,this.g.m);this.g.m(a);return u(this)};function v(a,b){l(a.g);var g=a.g.i;if(g)return t(a,"return"in g?g["return"]:function(e){return{value:e,done:!0}},b,a.g["return"]);a.g["return"](b);return u(a)}q.prototype.o=function(a){l(this.g);if(this.g.i)return t(this,this.g.i["throw"],a,this.g.m);this.g.o(a);return u(this)};
function t(a,b,g,e){try{var d=b.call(a.g.i,g);if(!(d instanceof Object))throw new TypeError("Iterator result "+d+" is not an object");if(!d.done)return a.g.l=!1,d;var c=d.value}catch(h){return a.g.i=null,a.g.o(h),u(a)}a.g.i=null;e.call(a.g,c);return u(a)}function u(a){for(;a.g.h;)try{var b=a.C(a.g);if(b)return a.g.l=!1,{value:b.value,done:!1}}catch(g){a.g.u=void 0,a.g.o(g)}a.g.l=!1;if(a.g.j){b=a.g.j;a.g.j=null;if(b.B)throw b.A;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function w(a){this.next=function(b){return a.m(b)};this["throw"]=function(b){return a.o(b)};this["return"]=function(b){return v(a,b)};this[Symbol.iterator]=function(){return this}}function x(a){function b(e){return a.next(e)}function g(e){return a["throw"](e)}new Promise(function(e,d){function c(h){h.done?e(h.value):Promise.resolve(h.value).then(b,g).then(c,d)}c(a.next())})}var y,z=[],A=!0,D=C("dimension"),E=C("vacantRatio"),F=C("popRatio"),G=C("threshold"),H=C("popXcolor"),M=C("popYcolor");N();O();
function N(){y=[];for(var a=0;a<D;a++){y[a]=[];for(var b=0;b<D;b++)y[a][b]=-1}P();Q()}function P(){z=[];for(var a=0;a<y.length;a++)for(var b=0;b<y.length;b++)Math.random()<E?(z.push({x:a,y:b}),y[a][b]=-1):y[a][b]=Math.random()<F?0:1}function C(a){a.startsWith("#")||(a="#"+a);return document.querySelector(a).value}
function O(){var a=document.querySelectorAll('input[type="color"]');a[0].addEventListener("input",function(){H=a[0].value;Q()});a[1].addEventListener("input",function(){M=a[1].value;Q()});var b=document.querySelector("#dimension");b.addEventListener("input",function(){D=b.value;N()});var g=document.querySelector("#threshold");g.addEventListener("input",function(){G=g.value});var e=document.querySelector("#vacantRatio");e.addEventListener("input",function(){E=e.value;P();Q()});var d=document.querySelector("#popRatio");
d.addEventListener("input",function(){F=d.value;P();Q()});document.querySelector("#randomize").addEventListener("click",function(){P();Q()});var c=document.querySelector("#runstop");c.addEventListener("click",function(){"true"==c.value?(c.innerHTML="Stop!",c.value="false",A=!0,R()):(c.innerHTML="Run",c.value="true",A=!1)})}
function R(){function a(k,r,S){for(var I=0,J=0,m=-1;2>m;m++)for(var n=-1;2>n;n++)(0!=m||0!=n)&&0<=k+m&&k+m<y.length&&0<=r+n&&r+n<y.length&&(y[k+m][r+n]==S&&J++,-1!=y[k+m][r+n]&&I++);return J/I}var b,g,e,d,c,h,B,K,L;x(new w(new q(function(k){switch(k.h){case 1:b=document.querySelector("p"),g=0,e=!0;case 2:if(!A||!e){k.h=3;break}e=!1;g++;for(d=0;d<y.length;d++)for(c=0;c<y.length;c++)-1!=y[d][c]&&(h=a(d,c,y[d][c]),h<G&&0<z.length&&(B=z.splice(Math.floor(Math.random()*z.length),1),K=B[0].x,L=B[0].y,y[K][L]=
y[d][c],y[d][c]=-1,z.push({x:d,y:c}),e=!0));return p(k,new Promise(function(r){return setTimeout(r,100)}));case 4:b.innerHTML="Generations: "+g;Q();k.h=2;break;case 3:button=document.querySelector("#runstop"),button.innerHTML="Run!",button.value="true",k.h=0}})))}
function Q(){var a=document.querySelector("#board");a.firstElementChild&&a.removeChild(a.firstElementChild);for(var b=a.appendChild,g=document.createElement("table"),e=0;e<y.length;e++){for(var d=document.createElement("tr"),c=0;c<y.length;c++){var h=document.createElement("td");h.style.backgroundColor=0==y[e][c]?H:1==y[e][c]?M:"#ffffff";d.appendChild(h)}g.appendChild(d)}b.call(a,g)};
