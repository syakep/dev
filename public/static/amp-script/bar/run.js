!function(){var e,n,t,_,o,r,l={},u=[],i=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function c(e,n){for(var t in n)e[t]=n[t];return e}function f(e){var n=e.parentNode;n&&n.removeChild(e)}function s(e,n,t){var _,o=arguments,r={};for(_ in n)"key"!==_&&"ref"!==_&&(r[_]=n[_]);if(arguments.length>3)for(t=[t],_=3;_<arguments.length;_++)t.push(o[_]);if(null!=t&&(r.children=t),"function"==typeof e&&null!=e.defaultProps)for(_ in e.defaultProps)void 0===r[_]&&(r[_]=e.defaultProps[_]);return a(e,r,n&&n.key,n&&n.ref,null)}function a(n,t,_,o,r){var l={type:n,props:t,key:_,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r};return null==r&&(l.__v=l),e.vnode&&e.vnode(l),l}function p(e){return e.children}function h(e,n){this.props=e,this.context=n}function d(e,n){if(null==n)return e.__?d(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?d(e):null}function v(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return v(e)}}function y(r){(!r.__d&&(r.__d=!0)&&n.push(r)&&!t++||o!==e.debounceRendering)&&((o=e.debounceRendering)||_)(m)}function m(){for(var e;t=n.length;)e=n.sort((function(e,n){return e.__v.__b-n.__v.__b})),n=[],e.some((function(e){var n,t,_,o,r,l,u;e.__d&&(l=(r=(n=e).__v).__e,(u=n.__P)&&(t=[],(_=c({},r)).__v=_,o=x(u,r,_,n.__n,void 0!==u.ownerSVGElement,null,t,null==l?d(r):l),E(t,r),o!=l&&v(r)))}))}function k(e,n,t,_,o,r,i,c,s){var a,p,h,v,y,m,k,b=t&&t.__k||u,w=b.length;if(c==l&&(c=null!=r?r[0]:w?d(t,0):null),a=0,n.__k=g(n.__k,(function(t){if(null!=t){if(t.__=n,t.__b=n.__b+1,null===(h=b[a])||h&&t.key==h.key&&t.type===h.type)b[a]=void 0;else for(p=0;p<w;p++){if((h=b[p])&&t.key==h.key&&t.type===h.type){b[p]=void 0;break}h=null}if(v=x(e,t,h=h||l,_,o,r,i,c,s),(p=t.ref)&&h.ref!=p&&(k||(k=[]),h.ref&&k.push(h.ref,null,t),k.push(p,t.__c||v,t)),null!=v){var u;if(null==m&&(m=v),void 0!==t.__d)u=t.__d,t.__d=void 0;else if(r==h||v!=c||null==v.parentNode){e:if(null==c||c.parentNode!==e)e.appendChild(v),u=null;else{for(y=c,p=0;(y=y.nextSibling)&&p<w;p+=2)if(y==v)break e;e.insertBefore(v,c),u=c}"option"==n.type&&(e.value="")}c=void 0!==u?u:v.nextSibling,"function"==typeof n.type&&(n.__d=c)}else c&&h.__e==c&&c.parentNode!=e&&(c=d(h))}return a++,t})),n.__e=m,null!=r&&"function"!=typeof n.type)for(a=r.length;a--;)null!=r[a]&&f(r[a]);for(a=w;a--;)null!=b[a]&&H(b[a],b[a]);if(k)for(a=0;a<k.length;a++)C(k[a],k[++a],k[++a])}function g(e,n,t){if(null==t&&(t=[]),null==e||"boolean"==typeof e)n&&t.push(n(null));else if(Array.isArray(e))for(var _=0;_<e.length;_++)g(e[_],n,t);else t.push(n?n("string"==typeof e||"number"==typeof e?a(null,e,null,null,e):null!=e.__e||null!=e.__c?a(e.type,e.props,e.key,null,e.__v):e):e);return t}function b(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]="number"==typeof t&&!1===i.test(n)?t+"px":null==t?"":t}function w(e,n,t,_,o){var r,l,u,i,c;if(o?"className"===n&&(n="class"):"class"===n&&(n="className"),"style"===n)if(r=e.style,"string"==typeof t)r.cssText=t;else{if("string"==typeof _&&(r.cssText="",_=null),_)for(i in _)t&&i in t||b(r,i,"");if(t)for(c in t)_&&t[c]===_[c]||b(r,c,t[c])}else"o"===n[0]&&"n"===n[1]?(l=n!==(n=n.replace(/Capture$/,"")),u=n.toLowerCase(),n=(u in e?u:n).slice(2),t?(_||e.addEventListener(n,S,l),(e.l||(e.l={}))[n]=t):e.removeEventListener(n,S,l)):"list"!==n&&"tagName"!==n&&"form"!==n&&"type"!==n&&"size"!==n&&!o&&n in e?e[n]=null==t?"":t:"function"!=typeof t&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/^xlink:?/,""))?null==t||!1===t?e.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),t):null==t||!1===t&&!/^ar/.test(n)?e.removeAttribute(n):e.setAttribute(n,t))}function S(n){this.l[n.type](e.event?e.event(n):n)}function x(n,t,_,o,r,l,u,i,f){var s,a,d,v,y,m,g,b,w,S,x=t.type;if(void 0!==t.constructor)return null;(s=e.__b)&&s(t);try{e:if("function"==typeof x){if(b=t.props,w=(s=x.contextType)&&o[s.__c],S=s?w?w.props.value:s.__:o,_.__c?g=(a=t.__c=_.__c).__=a.__E:("prototype"in x&&x.prototype.render?t.__c=a=new x(b,S):(t.__c=a=new h(b,S),a.constructor=x,a.render=N),w&&w.sub(a),a.props=b,a.state||(a.state={}),a.context=S,a.__n=o,d=a.__d=!0,a.__h=[]),null==a.__s&&(a.__s=a.state),null!=x.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=c({},a.__s)),c(a.__s,x.getDerivedStateFromProps(b,a.__s))),v=a.props,y=a.state,d)null==x.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==x.getDerivedStateFromProps&&b!==v&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(b,S),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(b,a.__s,S)||t.__v===_.__v&&!a.__){for(a.props=b,a.state=a.__s,t.__v!==_.__v&&(a.__d=!1),a.__v=t,t.__e=_.__e,t.__k=_.__k,a.__h.length&&u.push(a),s=0;s<t.__k.length;s++)t.__k[s]&&(t.__k[s].__=t);break e}null!=a.componentWillUpdate&&a.componentWillUpdate(b,a.__s,S),null!=a.componentDidUpdate&&a.__h.push((function(){a.componentDidUpdate(v,y,m)}))}a.context=S,a.props=b,a.state=a.__s,(s=e.__r)&&s(t),a.__d=!1,a.__v=t,a.__P=n,s=a.render(a.props,a.state,a.context),t.__k=null!=s&&s.type==p&&null==s.key?s.props.children:Array.isArray(s)?s:[s],null!=a.getChildContext&&(o=c(c({},o),a.getChildContext())),d||null==a.getSnapshotBeforeUpdate||(m=a.getSnapshotBeforeUpdate(v,y)),k(n,t,_,o,r,l,u,i,f),a.base=t.__e,a.__h.length&&u.push(a),g&&(a.__E=a.__=null),a.__e=!1}else null==l&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=P(_.__e,t,_,o,r,l,u,f);(s=e.diffed)&&s(t)}catch(n){t.__v=null,e.__e(n,t,_)}return t.__e}function E(n,t){e.__c&&e.__c(t,n),n.some((function(t){try{n=t.__h,t.__h=[],n.some((function(e){e.call(t)}))}catch(n){e.__e(n,t.__v)}}))}function P(e,n,t,_,o,r,i,c){var f,s,a,p,h,d=t.props,v=n.props;if(o="svg"===n.type||o,null!=r)for(f=0;f<r.length;f++)if(null!=(s=r[f])&&((null===n.type?3===s.nodeType:s.localName===n.type)||e==s)){e=s,r[f]=null;break}if(null==e){if(null===n.type)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type,v.is&&{is:v.is}),r=null,c=!1}if(null===n.type)d!==v&&e.data!=v&&(e.data=v);else{if(null!=r&&(r=u.slice.call(e.childNodes)),a=(d=t.props||l).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!c){if(d===l)for(d={},h=0;h<e.attributes.length;h++)d[e.attributes[h].name]=e.attributes[h].value;(p||a)&&(p&&a&&p.__html==a.__html||(e.innerHTML=p&&p.__html||""))}(function(e,n,t,_,o){var r;for(r in t)"children"===r||"key"===r||r in n||w(e,r,null,t[r],_);for(r in n)o&&"function"!=typeof n[r]||"children"===r||"key"===r||"value"===r||"checked"===r||t[r]===n[r]||w(e,r,n[r],t[r],_)})(e,v,d,o,c),p?n.__k=[]:(n.__k=n.props.children,k(e,n,t,_,"foreignObject"!==n.type&&o,r,i,l,c)),c||("value"in v&&void 0!==(f=v.value)&&f!==e.value&&w(e,"value",f,d.value,!1),"checked"in v&&void 0!==(f=v.checked)&&f!==e.checked&&w(e,"checked",f,d.checked,!1))}return e}function C(n,t,_){try{"function"==typeof n?n(t):n.current=t}catch(n){e.__e(n,_)}}function H(n,t,_){var o,r,l;if(e.unmount&&e.unmount(n),(o=n.ref)&&(o.current&&o.current!==n.__e||C(o,null,t)),_||"function"==typeof n.type||(_=null!=(r=n.__e)),n.__e=n.__d=void 0,null!=(o=n.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(n){e.__e(n,t)}o.base=o.__P=null}if(o=n.__k)for(l=0;l<o.length;l++)o[l]&&H(o[l],t,_);null!=r&&f(r)}function N(e,n,t){return this.constructor(e,t)}e={__e:function(e,n){for(var t,_;n=n.__;)if((t=n.__c)&&!t.__)try{if(t.constructor&&null!=t.constructor.getDerivedStateFromError&&(_=!0,t.setState(t.constructor.getDerivedStateFromError(e))),null!=t.componentDidCatch&&(_=!0,t.componentDidCatch(e)),_)return y(t.__E=t)}catch(n){e=n}throw e}},h.prototype.setState=function(e,n){var t;t=this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(t,this.props)),e&&c(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),y(this))},h.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),y(this))},h.prototype.render=p,n=[],t=0,_="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,r=l;var T,A,D,U=0,F=[],L=e.__r,M=e.diffed,W=e.__c,V=e.unmount;function q(n,t){e.__h&&e.__h(A,n,U||t),U=0;var _=A.__H||(A.__H={__:[],__h:[]});return n>=_.__.length&&_.__.push({}),_.__[n]}function R(e){return U=1,function(e,n,t){var _=q(T++,2);return _.__c||(_.__c=A,_.__=[t?t(n):z(void 0,n),function(n){var t=e(_.__[0],n);_.__[0]!==t&&(_.__[0]=t,_.__c.setState({}))}]),_.__}(z,e)}function B(){F.some((function(n){if(n.__P)try{n.__H.__h.forEach(I),n.__H.__h.forEach(O),n.__H.__h=[]}catch(t){return n.__H.__h=[],e.__e(t,n.__v),!0}})),F=[]}function I(e){e.t&&e.t()}function O(e){var n=e.__();"function"==typeof n&&(e.t=n)}function z(e,n){return"function"==typeof n?n(e):n}function G(e){const[n,t]=R(e.initialValue);return s("button",{onClick:()=>t(e=>e+1)},String(n))}e.__r=function(e){L&&L(e),T=0,(A=e.__c).__H&&(A.__H.__h.forEach(I),A.__H.__h.forEach(O),A.__H.__h=[])},e.diffed=function(n){M&&M(n);var t=n.__c;if(t){var _=t.__H;_&&_.__h.length&&(1!==F.push(t)&&D===e.requestAnimationFrame||((D=e.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(_),cancelAnimationFrame(n),setTimeout(e)},_=setTimeout(t,100);"undefined"!=typeof window&&(n=requestAnimationFrame(t))})(B))}},e.__c=function(n,t){t.some((function(n){try{n.__h.forEach(I),n.__h=n.__h.filter((function(e){return!e.__||O(e)}))}catch(_){t.some((function(e){e.__h&&(e.__h=[])})),t=[],e.__e(_,n.__v)}})),W&&W(n,t)},e.unmount=function(n){V&&V(n);var t=n.__c;if(t){var _=t.__H;if(_)try{_.__.forEach((function(e){return e.t&&e.t()}))}catch(n){e.__e(n,t.__v)}}};const $=document.querySelector(".root");console.log("root",$.id);const j=$.id;!function(n,t,_){var o,i,c;e.__&&e.__(n,t),i=(o=_===r)?null:_&&_.__k||t.__k,n=s(p,null,[n]),c=[],x(t,(o?t:_||t).__k=n,i||l,l,void 0!==t.ownerSVGElement,_&&!o?[_]:i?null:u.slice.call(t.childNodes),c,_||l,o),E(c,n)}(s((function(e){const[n,t]=R(!1);return s(p,null,s("button",{onClick:()=>{t(!0)}},"clickme"),n&&s("div",null,s(G,{initialValue:e.initialValue})))}),j?JSON.parse(atob(j)):{}),$)}();
