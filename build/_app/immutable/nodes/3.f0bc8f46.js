import{s as ee,d as De,y as Z,n as J,c as ne,r as Ve,f as Ee,z as Ie}from"../chunks/scheduler.bc1c5b92.js";import{S as te,i as le,e as q,s as S,t as N,c as D,a as E,d as y,f as z,b as U,n as o,g as G,h as g,j as P,z as ae,A as se,B as X,o as K,v as re,w as ie,x as ce,k as j,q as de,l as R,y as oe,C as ge,D as qe,r as me}from"../chunks/index.6e88b1af.js";import{s as Ae,a as O}from"../chunks/index.0138d34d.js";import{p as ue}from"../chunks/stores.d73eb7d8.js";import{b as W}from"../chunks/singletons.76c06b9f.js";function $(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Be(t){let e,l,a,r,u,s,n,_,h,v,i=t[0].es+"",I,V,w,m,A=t[0].en+"",x,L,C,p,M=t[0].title+"",T,k,F,c=t[0].subtitle+"",d;return{c(){e=q("header"),l=q("div"),a=q("a"),r=q("img"),n=S(),_=q("div"),h=q("div"),v=q("a"),I=N(i),w=S(),m=q("a"),x=N(A),C=S(),p=q("h1"),T=N(M),k=S(),F=q("h2"),d=N(c),this.h()},l(b){e=D(b,"HEADER",{class:!0});var f=E(e);l=D(f,"DIV",{class:!0});var H=E(l);a=D(H,"A",{href:!0,class:!0,target:!0});var Q=E(a);r=D(Q,"IMG",{src:!0,height:!0,width:!0,alt:!0,class:!0}),Q.forEach(y),H.forEach(y),n=z(f),_=D(f,"DIV",{class:!0});var B=E(_);h=D(B,"DIV",{class:!0});var Y=E(h);v=D(Y,"A",{href:!0,class:!0});var fe=E(v);I=U(fe,i),fe.forEach(y),w=z(Y),m=D(Y,"A",{href:!0,class:!0});var he=E(m);x=U(he,A),he.forEach(y),Y.forEach(y),C=z(B),p=D(B,"H1",{class:!0});var _e=E(p);T=U(_e,M),_e.forEach(y),k=z(B),F=D(B,"H2",{class:!0});var ve=E(F);d=U(ve,c),ve.forEach(y),B.forEach(y),f.forEach(y),this.h()},h(){De(r.src,u=W+"/NewberryLogo.png")||o(r,"src",u),o(r,"height","64"),o(r,"width","317"),o(r,"alt",s=t[0].logoalt),o(r,"class","svelte-ibt78f"),o(a,"href","https://www.newberry.org/"),o(a,"class","center nolines svelte-ibt78f"),o(a,"target","_blank"),o(l,"class","header-left svelte-ibt78f"),o(v,"href",W+"/es"),o(v,"class",V=Z(t[1].params.lang==="es"?"active":"")+" svelte-ibt78f"),o(m,"href",W+"/"),o(m,"class",L=Z(t[1].params.lang!=="es"?"active":"")+" svelte-ibt78f"),o(h,"class","change-lang svelte-ibt78f"),o(p,"class","svelte-ibt78f"),o(F,"class","svelte-ibt78f"),o(_,"class","header-right svelte-ibt78f"),o(e,"class","svelte-ibt78f")},m(b,f){G(b,e,f),g(e,l),g(l,a),g(a,r),g(e,n),g(e,_),g(_,h),g(h,v),g(v,I),g(h,w),g(h,m),g(m,x),g(_,C),g(_,p),g(p,T),g(_,k),g(_,F),g(F,d)},p(b,[f]){f&1&&s!==(s=b[0].logoalt)&&o(r,"alt",s),f&1&&i!==(i=b[0].es+"")&&P(I,i),f&2&&V!==(V=Z(b[1].params.lang==="es"?"active":"")+" svelte-ibt78f")&&o(v,"class",V),f&1&&A!==(A=b[0].en+"")&&P(x,A),f&2&&L!==(L=Z(b[1].params.lang!=="es"?"active":"")+" svelte-ibt78f")&&o(m,"class",L),f&1&&M!==(M=b[0].title+"")&&P(T,M),f&1&&c!==(c=b[0].subtitle+"")&&P(d,c)},i:J,o:J,d(b){b&&y(e)}}}function Te(t,e,l){let a;ne(t,ue,u=>l(1,a=u));let{content:r}=e;return t.$$set=u=>{"content"in u&&l(0,r=u.content)},[r,a]}class Ce extends te{constructor(e){super(),le(this,e,Te,Be,ee,{content:0})}}function He(t){let e,l,a,r,u,s,n,_=t[1]+1+"",h,v,i,I;return{c(){e=q("div"),l=ae("svg"),a=ae("circle"),n=ae("text"),h=N(_),this.h()},l(V){e=D(V,"DIV",{class:!0});var w=E(e);l=se(w,"svg",{xmlns:!0,"xmlns:xlink":!0,viewBox:!0,class:!0});var m=E(l);a=se(m,"circle",{r:!0,cx:!0,cy:!0,fill:!0,role:!0,"aria-label":!0,class:!0}),E(a).forEach(y),n=se(m,"text",{x:!0,y:!0,"text-anchor":!0,stroke:!0,"stroke-width":!0,"font-size":!0});var A=E(n);h=U(A,_),A.forEach(y),m.forEach(y),w.forEach(y),this.h()},h(){o(a,"r","25"),o(a,"cx",r=t[0].x),o(a,"cy",u=t[0].y),o(a,"fill",s="#"+t[0].color),o(a,"role","navigation"),o(a,"aria-label","show navigation"),o(a,"class","svelte-of7hu0"),o(n,"x",v=t[0].x),o(n,"y",t[4]),o(n,"text-anchor","middle"),o(n,"stroke","rgb(var(--midnight))"),o(n,"stroke-width","2px"),o(n,"font-size","37px"),o(l,"xmlns","http://www.w3.org/2000/svg"),o(l,"xmlns:xlink","http://www.w3.org/1999/xlink"),o(l,"viewBox","0 0 1452 1056"),o(l,"class","svelte-of7hu0"),o(e,"class","circle-wrap svelte-of7hu0")},m(V,w){G(V,e,w),g(e,l),g(l,a),g(l,n),g(n,h),i||(I=[X(a,"click",t[6]),X(a,"keyup",t[7])],i=!0)},p(V,[w]){w&1&&r!==(r=V[0].x)&&o(a,"cx",r),w&1&&u!==(u=V[0].y)&&o(a,"cy",u),w&1&&s!==(s="#"+V[0].color)&&o(a,"fill",s),w&2&&_!==(_=V[1]+1+"")&&P(h,_),w&1&&v!==(v=V[0].x)&&o(n,"x",v)},i:J,o:J,d(V){V&&y(e),i=!1,Ve(I)}}}function Se(t,e,l){let{activeValue:a,circe:r,idx:u}=e;function s(i){l(5,a=a==i?99:i)}function n(i,I){(i.key==="Enter"||i.key==="Space")&&l(5,a=a==I?99:I)}const _=parseInt(r.y)+12,h=()=>s(u),v=()=>n(u);return t.$$set=i=>{"activeValue"in i&&l(5,a=i.activeValue),"circe"in i&&l(0,r=i.circe),"idx"in i&&l(1,u=i.idx)},[r,u,s,n,_,a,h,v]}class ze extends te{constructor(e){super(),le(this,e,Se,He,ee,{activeValue:5,circe:0,idx:1})}}function pe(t){let e,l=t[0].text+"",a,r;return{c(){e=q("a"),a=N(l),this.h()},l(u){e=D(u,"A",{class:!0,href:!0,style:!0});var s=E(e);a=U(s,l),s.forEach(y),this.h()},h(){o(e,"class","card-content svelte-fxd62d"),o(e,"href",r=""+(W+t[3])),K(e,"background-image","linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://collections.newberry.org/IIIF3/Image/"+t[0].image+"/"+t[7]+"/0/default.jpg;")},m(u,s){G(u,e,s),g(e,a)},p(u,s){s&1&&l!==(l=u[0].text+"")&&P(a,l),s&8&&r!==(r=""+(W+u[3]))&&o(e,"href",r),s&1&&K(e,"background-image","linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://collections.newberry.org/IIIF3/Image/"+u[0].image+"/"+u[7]+"/0/default.jpg;")},d(u){u&&y(e)}}}function Ne(t){let e,l,a=t[0][t[4]]+"",r,u,s,n,_,h=t[2]&&pe(t);return{c(){e=q("div"),l=q("button"),r=N(a),u=S(),h&&h.c(),this.h()},l(v){e=D(v,"DIV",{class:!0,style:!0});var i=E(e);l=D(i,"BUTTON",{class:!0,style:!0});var I=E(l);r=U(I,a),I.forEach(y),u=z(i),h&&h.l(i),i.forEach(y),this.h()},h(){o(l,"class","header svelte-fxd62d"),K(l,"background-color","#"+t[0].color),o(e,"class",s="card "+(t[2]?"active":"inactive")+" svelte-fxd62d"),K(e,"left",t[1]*20+"vw"),K(e,"right",t[1]*20+20+"vw")},m(v,i){G(v,e,i),g(e,l),g(l,r),g(e,u),h&&h.m(e,null),n||(_=[X(l,"click",t[10]),X(l,"keyup",t[11])],n=!0)},p(v,[i]){i&17&&a!==(a=v[0][v[4]]+"")&&P(r,a),i&1&&K(l,"background-color","#"+v[0].color),v[2]?h?h.p(v,i):(h=pe(v),h.c(),h.m(e,null)):h&&(h.d(1),h=null),i&4&&s!==(s="card "+(v[2]?"active":"inactive")+" svelte-fxd62d")&&o(e,"class",s),i&2&&K(e,"left",v[1]*20+"vw"),i&2&&K(e,"right",v[1]*20+20+"vw")},i:J,o:J,d(v){v&&y(e),h&&h.d(),n=!1,Ve(_)}}}function Ue(t,e,l){let a,r,u,s;ne(t,ue,m=>l(9,s=m));let{tile:n,activeValue:_,idx:h}=e;function v(m){l(8,_=_==m?99:m)}function i(m,A){(m.key==="Enter"||m.key==="Space")&&l(8,_=_==A?99:A)}const I=n.imagexy?n.imagexy+"/max":"full/,300",V=()=>v(h),w=()=>i(h);return t.$$set=m=>{"tile"in m&&l(0,n=m.tile),"activeValue"in m&&l(8,_=m.activeValue),"idx"in m&&l(1,h=m.idx)},t.$$.update=()=>{t.$$.dirty&512&&l(4,a="country"+(s.params.lang==="es"?"es":"en")),t.$$.dirty&513&&l(3,r=`/${s.params.lang.replaceAll("/","")||"en"}/storymap/${Ae(n.countryen)}`),t.$$.dirty&258&&l(2,u=_===h)},[n,h,u,r,a,v,i,I,_,s,V,w]}class je extends te{constructor(e){super(),le(this,e,Ue,Ne,ee,{tile:0,activeValue:8,idx:1})}}function be(t,e,l){const a=t.slice();return a[8]=e[l],a[10]=l,a}function ye(t,e,l){const a=t.slice();return a[11]=e[l],a[10]=l,a}function ke(t){let e,l,a,r;function u(n){t[6](n)}let s={tile:t[11],idx:t[10]};return t[0]!==void 0&&(s.activeValue=t[0]),e=new je({props:s}),Ee.push(()=>qe(e,"activeValue",u)),{c(){re(e.$$.fragment),a=N(";")},l(n){ie(e.$$.fragment,n),a=U(n,";")},m(n,_){ce(e,n,_),G(n,a,_),r=!0},p(n,_){const h={};!l&&_&1&&(l=!0,h.activeValue=n[0],Ie(()=>l=!1)),e.$set(h)},i(n){r||(j(e.$$.fragment,n),r=!0)},o(n){R(e.$$.fragment,n),r=!1},d(n){n&&y(a),oe(e,n)}}}function we(t){let e,l,a;function r(s){t[7](s)}let u={circe:t[8],idx:t[10]};return t[0]!==void 0&&(u.activeValue=t[0]),e=new ze({props:u}),Ee.push(()=>qe(e,"activeValue",r)),{c(){re(e.$$.fragment)},l(s){ie(e.$$.fragment,s)},m(s,n){ce(e,s,n),a=!0},p(s,n){const _={};!l&&n&1&&(l=!0,_.activeValue=s[0],Ie(()=>l=!1)),e.$set(_)},i(s){a||(j(e.$$.fragment,s),a=!0)},o(s){R(e.$$.fragment,s),a=!1},d(s){oe(e,s)}}}function Pe(t){let e,l,a,r,u,s,n=t[1].hero.header+"",_,h,v,i=t[1].hero.subtitle+"",I,V,w,m,A,x,L;l=new Ce({props:{content:t[1]}});let C=$(O.tiles),p=[];for(let c=0;c<C.length;c+=1)p[c]=ke(ye(t,C,c));const M=c=>R(p[c],1,1,()=>{p[c]=null});let T=$(O.tiles),k=[];for(let c=0;c<T.length;c+=1)k[c]=we(be(t,T,c));const F=c=>R(k[c],1,1,()=>{k[c]=null});return{c(){e=S(),re(l.$$.fragment),a=S(),r=q("div"),u=q("div"),s=q("h3"),_=N(n),h=S(),v=q("p"),I=N(i),V=S(),w=q("div");for(let c=0;c<p.length;c+=1)p[c].c();m=S();for(let c=0;c<k.length;c+=1)k[c].c();this.h()},l(c){e=z(c),ie(l.$$.fragment,c),a=z(c),r=D(c,"DIV",{class:!0});var d=E(r);u=D(d,"DIV",{class:!0});var b=E(u);s=D(b,"H3",{class:!0});var f=E(s);_=U(f,n),f.forEach(y),h=z(b),v=D(b,"P",{class:!0});var H=E(v);I=U(H,i),H.forEach(y),b.forEach(y),V=z(d),w=D(d,"DIV",{class:!0});var Q=E(w);for(let B=0;B<p.length;B+=1)p[B].l(Q);Q.forEach(y),m=z(d);for(let B=0;B<k.length;B+=1)k[B].l(d);d.forEach(y),this.h()},h(){o(s,"class","svelte-10pyedi"),o(v,"class","svelte-10pyedi"),o(u,"class","content-text svelte-10pyedi"),o(w,"class","tiles"),o(r,"class","content svelte-10pyedi")},m(c,d){G(c,e,d),ce(l,c,d),G(c,a,d),G(c,r,d),g(r,u),g(u,s),g(s,_),g(u,h),g(u,v),g(v,I),g(r,V),g(r,w);for(let b=0;b<p.length;b+=1)p[b]&&p[b].m(w,null);g(r,m);for(let b=0;b<k.length;b+=1)k[b]&&k[b].m(r,null);A=!0,x||(L=X(document.body,"click",t[5]),x=!0)},p(c,[d]){const b={};if(d&2&&(b.content=c[1]),l.$set(b),(!A||d&2)&&n!==(n=c[1].hero.header+"")&&P(_,n),(!A||d&2)&&i!==(i=c[1].hero.subtitle+"")&&P(I,i),d&1){C=$(O.tiles);let f;for(f=0;f<C.length;f+=1){const H=ye(c,C,f);p[f]?(p[f].p(H,d),j(p[f],1)):(p[f]=ke(H),p[f].c(),j(p[f],1),p[f].m(w,null))}for(me(),f=C.length;f<p.length;f+=1)M(f);de()}if(d&1){T=$(O.tiles);let f;for(f=0;f<T.length;f+=1){const H=be(c,T,f);k[f]?(k[f].p(H,d),j(k[f],1)):(k[f]=we(H),k[f].c(),j(k[f],1),k[f].m(r,null))}for(me(),f=T.length;f<k.length;f+=1)F(f);de()}},i(c){if(!A){j(l.$$.fragment,c);for(let d=0;d<C.length;d+=1)j(p[d]);for(let d=0;d<T.length;d+=1)j(k[d]);A=!0}},o(c){R(l.$$.fragment,c),p=p.filter(Boolean);for(let d=0;d<p.length;d+=1)R(p[d]);k=k.filter(Boolean);for(let d=0;d<k.length;d+=1)R(k[d]);A=!1},d(c){c&&(y(e),y(a),y(r)),oe(l,c),ge(p,c),ge(k,c),x=!1,L()}}}function xe(t,e,l){let a,r,u;ne(t,ue,i=>l(4,u=i));let s=99;function n(i){["A","BUTTON","circle"].includes(i.target.nodeName)||l(0,s=99)}const _=i=>n(i);function h(i){s=i,l(0,s)}function v(i){s=i,l(0,s)}return t.$$.update=()=>{t.$$.dirty&16&&l(3,a=u.params.lang||"en"),t.$$.dirty&8&&l(1,r=a in O?O[a]:O.en),t.$$.dirty&8&&console.log("lang in all content",a in O)},[s,r,n,a,u,_,h,v]}class Me extends te{constructor(e){super(),le(this,e,xe,Pe,ee,{})}}export{Me as component};
