!function(o,t){function r(o){return""===n?o:(o=o.charAt(0).toUpperCase()+o.substr(1),n+o)}var e=Math,l=t.createElement("div").style,n=function(){for(var o,t="t,webkitT,MozT,msT,OT".split(","),r=0,e=t.length;e>r;r++)if(o=t[r]+"ransform",o in l)return t[r].substr(0,t[r].length-1);return!1}(),s=n?"-"+n.toLowerCase()+"-":"",i=r("transform"),a=r("transitionProperty"),c=r("transitionDuration"),p=r("transformOrigin"),m=r("transitionTimingFunction"),h=r("transitionDelay"),u=/android/gi.test(navigator.appVersion),S=/iphone|ipad/gi.test(navigator.appVersion),d=/hp-tablet/gi.test(navigator.appVersion),b=r("perspective")in l,f="ontouchstart"in o&&!d,x=n!==!1,g=r("transition")in l,y="onorientationchange"in o?"orientationchange":"resize",v=f?"touchstart":"mousedown",Y=f?"touchmove":"mousemove",T=f?"touchend":"mouseup",X=f?"touchcancel":"mouseup",w=function(){if(n===!1)return!1;var o={"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"otransitionend",ms:"MSTransitionEnd"};return o[n]}(),_=function(){return o.requestAnimationFrame||o.webkitRequestAnimationFrame||o.mozRequestAnimationFrame||o.oRequestAnimationFrame||o.msRequestAnimationFrame||function(o){return setTimeout(o,1)}}(),z=function(){return o.cancelRequestAnimationFrame||o.webkitCancelAnimationFrame||o.webkitCancelRequestAnimationFrame||o.mozCancelRequestAnimationFrame||o.oCancelRequestAnimationFrame||o.msCancelRequestAnimationFrame||clearTimeout}(),M=b?" translateZ(0)":"",E=function(r,e){var l,n=this;n.wrapper="object"==typeof r?r:t.getElementById(r),n.wrapper.style.overflow="hidden",n.scroller=n.wrapper.children[0],n.options={hScroll:!0,vScroll:!0,x:0,y:0,bounce:!0,bounceLock:!1,momentum:!0,lockDirection:!0,useTransform:!0,useTransition:!1,topOffset:0,checkDOMChanges:!1,handleClick:!0,hScrollbar:!0,vScrollbar:!0,fixedScrollbar:u,hideScrollbar:S,fadeScrollbar:S&&b,scrollbarClass:"",zoom:!1,zoomMin:1,zoomMax:4,doubleTapZoom:2,wheelAction:"scroll",snap:!1,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(o){o.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null};for(l in e)n.options[l]=e[l];n.x=n.options.x,n.y=n.options.y,n.options.useTransform=x&&n.options.useTransform,n.options.hScrollbar=n.options.hScroll&&n.options.hScrollbar,n.options.vScrollbar=n.options.vScroll&&n.options.vScrollbar,n.options.zoom=n.options.useTransform&&n.options.zoom,n.options.useTransition=g&&n.options.useTransition,n.options.zoom&&u&&(M=""),n.scroller.style[a]=n.options.useTransform?s+"transform":"top left",n.scroller.style[c]="0",n.scroller.style[p]="0 0",n.options.useTransition&&(n.scroller.style[m]="cubic-bezier(0.33,0.66,0.66,1)"),n.options.useTransform?n.scroller.style[i]="translate("+n.x+"px,"+n.y+"px)"+M:n.scroller.style.cssText+=";position:absolute;top:"+n.y+"px;left:"+n.x+"px",n.options.useTransition&&(n.options.fixedScrollbar=!0),n.refresh(),n._bind(y,o),n._bind(v),f||"none"!=n.options.wheelAction&&(n._bind("DOMMouseScroll"),n._bind("mousewheel")),n.options.checkDOMChanges&&(n.checkDOMTime=setInterval(function(){n._checkDOMChanges()},500))};E.prototype={enabled:!0,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(o){var t=this;switch(o.type){case v:if(!f&&0!==o.button)return;t._start(o);break;case Y:t._move(o);break;case T:case X:t._end(o);break;case y:t._resize();break;case"DOMMouseScroll":case"mousewheel":t._wheel(o);break;case w:t._transitionEnd(o)}},_checkDOMChanges:function(){this.moved||this.zoomed||this.animating||this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale||this.refresh()},_scrollbar:function(o){var r,l=this;return l[o+"Scrollbar"]?(l[o+"ScrollbarWrapper"]||(r=t.createElement("div"),l.options.scrollbarClass?r.className=l.options.scrollbarClass+o.toUpperCase():r.style.cssText="position:absolute;z-index:100;"+("h"==o?"height:7px;bottom:1px;left:2px;right:"+(l.vScrollbar?"7":"2")+"px":"width:7px;bottom:"+(l.hScrollbar?"7":"2")+"px;top:2px;right:1px"),r.style.cssText+=";pointer-events:none;"+s+"transition-property:opacity;"+s+"transition-duration:"+(l.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(l.options.hideScrollbar?"0":"1"),l.wrapper.appendChild(r),l[o+"ScrollbarWrapper"]=r,r=t.createElement("div"),l.options.scrollbarClass||(r.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);"+s+"background-clip:padding-box;"+s+"box-sizing:border-box;"+("h"==o?"height:100%":"width:100%")+";"+s+"border-radius:3px;border-radius:3px"),r.style.cssText+=";pointer-events:none;"+s+"transition-property:"+s+"transform;"+s+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);"+s+"transition-duration:0;"+s+"transform: translate(0,0)"+M,l.options.useTransition&&(r.style.cssText+=";"+s+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),l[o+"ScrollbarWrapper"].appendChild(r),l[o+"ScrollbarIndicator"]=r),"h"==o?(l.hScrollbarSize=l.hScrollbarWrapper.clientWidth,l.hScrollbarIndicatorSize=e.max(e.round(l.hScrollbarSize*l.hScrollbarSize/l.scrollerW),8),l.hScrollbarIndicator.style.width=l.hScrollbarIndicatorSize+"px",l.hScrollbarMaxScroll=l.hScrollbarSize-l.hScrollbarIndicatorSize,l.hScrollbarProp=l.hScrollbarMaxScroll/l.maxScrollX):(l.vScrollbarSize=l.vScrollbarWrapper.clientHeight,l.vScrollbarIndicatorSize=e.max(e.round(l.vScrollbarSize*l.vScrollbarSize/l.scrollerH),8),l.vScrollbarIndicator.style.height=l.vScrollbarIndicatorSize+"px",l.vScrollbarMaxScroll=l.vScrollbarSize-l.vScrollbarIndicatorSize,l.vScrollbarProp=l.vScrollbarMaxScroll/l.maxScrollY),void l._scrollbarPos(o,!0)):void(l[o+"ScrollbarWrapper"]&&(x&&(l[o+"ScrollbarIndicator"].style[i]=""),l[o+"ScrollbarWrapper"].parentNode.removeChild(l[o+"ScrollbarWrapper"]),l[o+"ScrollbarWrapper"]=null,l[o+"ScrollbarIndicator"]=null))},_resize:function(){var o=this;setTimeout(function(){o.refresh()},u?200:0)},_pos:function(o,t){this.zoomed||(o=this.hScroll?o:0,t=this.vScroll?t:0,this.options.useTransform?this.scroller.style[i]="translate("+o+"px,"+t+"px) scale("+this.scale+")"+M:(o=e.round(o),t=e.round(t),this.scroller.style.left=o+"px",this.scroller.style.top=t+"px"),this.x=o,this.y=t,this._scrollbarPos("h"),this._scrollbarPos("v"))},_scrollbarPos:function(o,t){var r,l=this,n="h"==o?l.x:l.y;l[o+"Scrollbar"]&&(n=l[o+"ScrollbarProp"]*n,0>n?(l.options.fixedScrollbar||(r=l[o+"ScrollbarIndicatorSize"]+e.round(3*n),8>r&&(r=8),l[o+"ScrollbarIndicator"].style["h"==o?"width":"height"]=r+"px"),n=0):n>l[o+"ScrollbarMaxScroll"]&&(l.options.fixedScrollbar?n=l[o+"ScrollbarMaxScroll"]:(r=l[o+"ScrollbarIndicatorSize"]-e.round(3*(n-l[o+"ScrollbarMaxScroll"])),8>r&&(r=8),l[o+"ScrollbarIndicator"].style["h"==o?"width":"height"]=r+"px",n=l[o+"ScrollbarMaxScroll"]+(l[o+"ScrollbarIndicatorSize"]-r))),l[o+"ScrollbarWrapper"].style[h]="0",l[o+"ScrollbarWrapper"].style.opacity=t&&l.options.hideScrollbar?"0":"1",l[o+"ScrollbarIndicator"].style[i]="translate("+("h"==o?n+"px,0)":"0,"+n+"px)")+M)},_start:function(t){var r,l,n,s,a,c=this,p=f?t.touches[0]:t;c.enabled&&(c.options.onBeforeScrollStart&&c.options.onBeforeScrollStart.call(c,t),(c.options.useTransition||c.options.zoom)&&c._transitionTime(0),c.moved=!1,c.animating=!1,c.zoomed=!1,c.distX=0,c.distY=0,c.absDistX=0,c.absDistY=0,c.dirX=0,c.dirY=0,c.options.zoom&&f&&t.touches.length>1&&(s=e.abs(t.touches[0].pageX-t.touches[1].pageX),a=e.abs(t.touches[0].pageY-t.touches[1].pageY),c.touchesDistStart=e.sqrt(s*s+a*a),c.originX=e.abs(t.touches[0].pageX+t.touches[1].pageX-2*c.wrapperOffsetLeft)/2-c.x,c.originY=e.abs(t.touches[0].pageY+t.touches[1].pageY-2*c.wrapperOffsetTop)/2-c.y,c.options.onZoomStart&&c.options.onZoomStart.call(c,t)),c.options.momentum&&(c.options.useTransform?(r=getComputedStyle(c.scroller,null)[i].replace(/[^0-9\-.,]/g,"").split(","),l=+(r[12]||r[4]),n=+(r[13]||r[5])):(l=+getComputedStyle(c.scroller,null).left.replace(/[^0-9-]/g,""),n=+getComputedStyle(c.scroller,null).top.replace(/[^0-9-]/g,"")),(l!=c.x||n!=c.y)&&(c.options.useTransition?c._unbind(w):z(c.aniTime),c.steps=[],c._pos(l,n),c.options.onScrollEnd&&c.options.onScrollEnd.call(c))),c.absStartX=c.x,c.absStartY=c.y,c.startX=c.x,c.startY=c.y,c.pointX=p.pageX,c.pointY=p.pageY,c.startTime=t.timeStamp||Date.now(),c.options.onScrollStart&&c.options.onScrollStart.call(c,t),c._bind(Y,o),c._bind(T,o),c._bind(X,o))},_move:function(o){var t,r,l,n=this,s=f?o.touches[0]:o,a=s.pageX-n.pointX,c=s.pageY-n.pointY,p=n.x+a,m=n.y+c,h=o.timeStamp||Date.now();return n.options.onBeforeScrollMove&&n.options.onBeforeScrollMove.call(n,o),n.options.zoom&&f&&o.touches.length>1?(t=e.abs(o.touches[0].pageX-o.touches[1].pageX),r=e.abs(o.touches[0].pageY-o.touches[1].pageY),n.touchesDist=e.sqrt(t*t+r*r),n.zoomed=!0,l=1/n.touchesDistStart*n.touchesDist*this.scale,l<n.options.zoomMin?l=.5*n.options.zoomMin*Math.pow(2,l/n.options.zoomMin):l>n.options.zoomMax&&(l=2*n.options.zoomMax*Math.pow(.5,n.options.zoomMax/l)),n.lastScale=l/this.scale,p=this.originX-this.originX*n.lastScale+this.x,m=this.originY-this.originY*n.lastScale+this.y,this.scroller.style[i]="translate("+p+"px,"+m+"px) scale("+l+")"+M,void(n.options.onZoom&&n.options.onZoom.call(n,o))):(n.pointX=s.pageX,n.pointY=s.pageY,(p>0||p<n.maxScrollX)&&(p=n.options.bounce?n.x+a/2:p>=0||n.maxScrollX>=0?0:n.maxScrollX),(m>n.minScrollY||m<n.maxScrollY)&&(m=n.options.bounce?n.y+c/2:m>=n.minScrollY||n.maxScrollY>=0?n.minScrollY:n.maxScrollY),n.distX+=a,n.distY+=c,n.absDistX=e.abs(n.distX),n.absDistY=e.abs(n.distY),void(n.absDistX<6&&n.absDistY<6||(n.options.lockDirection&&(n.absDistX>n.absDistY+5?(m=n.y,c=0):n.absDistY>n.absDistX+5&&(p=n.x,a=0)),n.moved=!0,n._pos(p,m),n.dirX=a>0?-1:0>a?1:0,n.dirY=c>0?-1:0>c?1:0,h-n.startTime>300&&(n.startTime=h,n.startX=n.x,n.startY=n.y),n.options.onScrollMove&&n.options.onScrollMove.call(n,o))))},_end:function(r){if(!f||0===r.touches.length){var l,n,s,a,p,m,h,u=this,S=f?r.changedTouches[0]:r,d={dist:0,time:0},b={dist:0,time:0},x=(r.timeStamp||Date.now())-u.startTime,g=u.x,y=u.y;if(u._unbind(Y,o),u._unbind(T,o),u._unbind(X,o),u.options.onBeforeScrollEnd&&u.options.onBeforeScrollEnd.call(u,r),u.zoomed)return h=u.scale*u.lastScale,h=Math.max(u.options.zoomMin,h),h=Math.min(u.options.zoomMax,h),u.lastScale=h/u.scale,u.scale=h,u.x=u.originX-u.originX*u.lastScale+u.x,u.y=u.originY-u.originY*u.lastScale+u.y,u.scroller.style[c]="200ms",u.scroller.style[i]="translate("+u.x+"px,"+u.y+"px) scale("+u.scale+")"+M,u.zoomed=!1,u.refresh(),void(u.options.onZoomEnd&&u.options.onZoomEnd.call(u,r));if(!u.moved)return f&&(u.doubleTapTimer&&u.options.zoom?(clearTimeout(u.doubleTapTimer),u.doubleTapTimer=null,u.options.onZoomStart&&u.options.onZoomStart.call(u,r),u.zoom(u.pointX,u.pointY,1==u.scale?u.options.doubleTapZoom:1),u.options.onZoomEnd&&setTimeout(function(){u.options.onZoomEnd.call(u,r)},200)):this.options.handleClick&&(u.doubleTapTimer=setTimeout(function(){for(u.doubleTapTimer=null,l=S.target;1!=l.nodeType;)l=l.parentNode;"SELECT"!=l.tagName&&"INPUT"!=l.tagName&&"TEXTAREA"!=l.tagName&&(n=t.createEvent("MouseEvents"),n.initMouseEvent("click",!0,!0,r.view,1,S.screenX,S.screenY,S.clientX,S.clientY,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,0,null),n._fake=!0,l.dispatchEvent(n))},u.options.zoom?250:0))),u._resetPos(400),void(u.options.onTouchEnd&&u.options.onTouchEnd.call(u,r));if(300>x&&u.options.momentum&&(d=g?u._momentum(g-u.startX,x,-u.x,u.scrollerW-u.wrapperW+u.x,u.options.bounce?u.wrapperW:0):d,b=y?u._momentum(y-u.startY,x,-u.y,u.maxScrollY<0?u.scrollerH-u.wrapperH+u.y-u.minScrollY:0,u.options.bounce?u.wrapperH:0):b,g=u.x+d.dist,y=u.y+b.dist,(u.x>0&&g>0||u.x<u.maxScrollX&&g<u.maxScrollX)&&(d={dist:0,time:0}),(u.y>u.minScrollY&&y>u.minScrollY||u.y<u.maxScrollY&&y<u.maxScrollY)&&(b={dist:0,time:0})),d.dist||b.dist)return p=e.max(e.max(d.time,b.time),10),u.options.snap&&(s=g-u.absStartX,a=y-u.absStartY,e.abs(s)<u.options.snapThreshold&&e.abs(a)<u.options.snapThreshold?u.scrollTo(u.absStartX,u.absStartY,200):(m=u._snap(g,y),g=m.x,y=m.y,p=e.max(m.time,p))),u.scrollTo(e.round(g),e.round(y),p),void(u.options.onTouchEnd&&u.options.onTouchEnd.call(u,r));if(u.options.snap)return s=g-u.absStartX,a=y-u.absStartY,e.abs(s)<u.options.snapThreshold&&e.abs(a)<u.options.snapThreshold?u.scrollTo(u.absStartX,u.absStartY,200):(m=u._snap(u.x,u.y),(m.x!=u.x||m.y!=u.y)&&u.scrollTo(m.x,m.y,m.time)),void(u.options.onTouchEnd&&u.options.onTouchEnd.call(u,r));u._resetPos(200),u.options.onTouchEnd&&u.options.onTouchEnd.call(u,r)}},_resetPos:function(o){var t=this,r=t.x>=0?0:t.x<t.maxScrollX?t.maxScrollX:t.x,e=t.y>=t.minScrollY||t.maxScrollY>0?t.minScrollY:t.y<t.maxScrollY?t.maxScrollY:t.y;return r==t.x&&e==t.y?(t.moved&&(t.moved=!1,t.options.onScrollEnd&&t.options.onScrollEnd.call(t)),t.hScrollbar&&t.options.hideScrollbar&&("webkit"==n&&(t.hScrollbarWrapper.style[h]="300ms"),t.hScrollbarWrapper.style.opacity="0"),void(t.vScrollbar&&t.options.hideScrollbar&&("webkit"==n&&(t.vScrollbarWrapper.style[h]="300ms"),t.vScrollbarWrapper.style.opacity="0"))):void t.scrollTo(r,e,o||0)},_wheel:function(o){var t,r,e,l,n,s=this;if("wheelDeltaX"in o)t=o.wheelDeltaX/12,r=o.wheelDeltaY/12;else if("wheelDelta"in o)t=r=o.wheelDelta/12;else{if(!("detail"in o))return;t=r=3*-o.detail}return"zoom"==s.options.wheelAction?(n=s.scale*Math.pow(2,1/3*(r?r/Math.abs(r):0)),n<s.options.zoomMin&&(n=s.options.zoomMin),n>s.options.zoomMax&&(n=s.options.zoomMax),void(n!=s.scale&&(!s.wheelZoomCount&&s.options.onZoomStart&&s.options.onZoomStart.call(s,o),s.wheelZoomCount++,s.zoom(o.pageX,o.pageY,n,400),setTimeout(function(){s.wheelZoomCount--,!s.wheelZoomCount&&s.options.onZoomEnd&&s.options.onZoomEnd.call(s,o)},400)))):(e=s.x+t,l=s.y+r,e>0?e=0:e<s.maxScrollX&&(e=s.maxScrollX),l>s.minScrollY?l=s.minScrollY:l<s.maxScrollY&&(l=s.maxScrollY),void(s.maxScrollY<0&&s.scrollTo(e,l,0)))},_transitionEnd:function(o){var t=this;o.target==t.scroller&&(t._unbind(w),t._startAni())},_startAni:function(){var o,t,r,l=this,n=l.x,s=l.y,i=Date.now();if(!l.animating){if(!l.steps.length)return void l._resetPos(400);if(o=l.steps.shift(),o.x==n&&o.y==s&&(o.time=0),l.animating=!0,l.moved=!0,l.options.useTransition)return l._transitionTime(o.time),l._pos(o.x,o.y),l.animating=!1,void(o.time?l._bind(w):l._resetPos(0));r=function(){var a,c,p=Date.now();return p>=i+o.time?(l._pos(o.x,o.y),l.animating=!1,l.options.onAnimationEnd&&l.options.onAnimationEnd.call(l),void l._startAni()):(p=(p-i)/o.time-1,t=e.sqrt(1-p*p),a=(o.x-n)*t+n,c=(o.y-s)*t+s,l._pos(a,c),void(l.animating&&(l.aniTime=_(r))))},r()}},_transitionTime:function(o){o+="ms",this.scroller.style[c]=o,this.hScrollbar&&(this.hScrollbarIndicator.style[c]=o),this.vScrollbar&&(this.vScrollbarIndicator.style[c]=o)},_momentum:function(o,t,r,l,n){var s=6e-4,i=e.abs(o)/t,a=i*i/(2*s),c=0,p=0;return o>0&&a>r?(p=n/(6/(a/i*s)),r+=p,i=i*r/a,a=r):0>o&&a>l&&(p=n/(6/(a/i*s)),l+=p,i=i*l/a,a=l),a*=0>o?-1:1,c=i/s,{dist:a,time:e.round(c)}},_offset:function(o){for(var t=-o.offsetLeft,r=-o.offsetTop;o=o.offsetParent;)t-=o.offsetLeft,r-=o.offsetTop;return o!=this.wrapper&&(t*=this.scale,r*=this.scale),{left:t,top:r}},_snap:function(o,t){var r,l,n,s,i,a,c=this;for(n=c.pagesX.length-1,r=0,l=c.pagesX.length;l>r;r++)if(o>=c.pagesX[r]){n=r;break}for(n==c.currPageX&&n>0&&c.dirX<0&&n--,o=c.pagesX[n],i=e.abs(o-c.pagesX[c.currPageX]),i=i?e.abs(c.x-o)/i*500:0,c.currPageX=n,n=c.pagesY.length-1,r=0;n>r;r++)if(t>=c.pagesY[r]){n=r;break}return n==c.currPageY&&n>0&&c.dirY<0&&n--,t=c.pagesY[n],a=e.abs(t-c.pagesY[c.currPageY]),a=a?e.abs(c.y-t)/a*500:0,c.currPageY=n,s=e.round(e.max(i,a))||200,{x:o,y:t,time:s}},_bind:function(o,t,r){(t||this.scroller).addEventListener(o,this,!!r)},_unbind:function(o,t,r){(t||this.scroller).removeEventListener(o,this,!!r)},destroy:function(){var t=this;t.scroller.style[i]="",t.hScrollbar=!1,t.vScrollbar=!1,t._scrollbar("h"),t._scrollbar("v"),t._unbind(y,o),t._unbind(v),t._unbind(Y,o),t._unbind(T,o),t._unbind(X,o),t.options.hasTouch||(t._unbind("DOMMouseScroll"),t._unbind("mousewheel")),t.options.useTransition&&t._unbind(w),t.options.checkDOMChanges&&clearInterval(t.checkDOMTime),t.options.onDestroy&&t.options.onDestroy.call(t)},refresh:function(){var o,t,r,l,n=this,s=0,i=0;if(n.scale<n.options.zoomMin&&(n.scale=n.options.zoomMin),n.wrapperW=n.wrapper.clientWidth||1,n.wrapperH=n.wrapper.clientHeight||1,n.minScrollY=-n.options.topOffset||0,n.scrollerW=e.round(n.scroller.offsetWidth*n.scale),n.scrollerH=e.round((n.scroller.offsetHeight+n.minScrollY)*n.scale),n.maxScrollX=n.wrapperW-n.scrollerW,n.maxScrollY=n.wrapperH-n.scrollerH+n.minScrollY,n.dirX=0,n.dirY=0,n.options.onRefresh&&n.options.onRefresh.call(n),n.hScroll=n.options.hScroll&&n.maxScrollX<0,n.vScroll=n.options.vScroll&&(!n.options.bounceLock&&!n.hScroll||n.scrollerH>n.wrapperH),n.hScrollbar=n.hScroll&&n.options.hScrollbar,n.vScrollbar=n.vScroll&&n.options.vScrollbar&&n.scrollerH>n.wrapperH,o=n._offset(n.wrapper),n.wrapperOffsetLeft=-o.left,n.wrapperOffsetTop=-o.top,"string"==typeof n.options.snap)for(n.pagesX=[],n.pagesY=[],l=n.scroller.querySelectorAll(n.options.snap),t=0,r=l.length;r>t;t++)s=n._offset(l[t]),s.left+=n.wrapperOffsetLeft,s.top+=n.wrapperOffsetTop,n.pagesX[t]=s.left<n.maxScrollX?n.maxScrollX:s.left*n.scale,n.pagesY[t]=s.top<n.maxScrollY?n.maxScrollY:s.top*n.scale;else if(n.options.snap){for(n.pagesX=[];s>=n.maxScrollX;)n.pagesX[i]=s,s-=n.wrapperW,i++;for(n.maxScrollX%n.wrapperW&&(n.pagesX[n.pagesX.length]=n.maxScrollX-n.pagesX[n.pagesX.length-1]+n.pagesX[n.pagesX.length-1]),s=0,i=0,n.pagesY=[];s>=n.maxScrollY;)n.pagesY[i]=s,s-=n.wrapperH,i++;n.maxScrollY%n.wrapperH&&(n.pagesY[n.pagesY.length]=n.maxScrollY-n.pagesY[n.pagesY.length-1]+n.pagesY[n.pagesY.length-1])}n._scrollbar("h"),n._scrollbar("v"),n.zoomed||(n.scroller.style[c]="0",n._resetPos(400))},scrollTo:function(o,t,r,e){var l,n,s=this,i=o;for(s.stop(),i.length||(i=[{x:o,y:t,time:r,relative:e}]),l=0,n=i.length;n>l;l++)i[l].relative&&(i[l].x=s.x-i[l].x,i[l].y=s.y-i[l].y),s.steps.push({x:i[l].x,y:i[l].y,time:i[l].time||0});s._startAni()},scrollToElement:function(o,t){var r,l=this;o=o.nodeType?o:l.scroller.querySelector(o),o&&(r=l._offset(o),r.left+=l.wrapperOffsetLeft,r.top+=l.wrapperOffsetTop,r.left=r.left>0?0:r.left<l.maxScrollX?l.maxScrollX:r.left,r.top=r.top>l.minScrollY?l.minScrollY:r.top<l.maxScrollY?l.maxScrollY:r.top,t=void 0===t?e.max(2*e.abs(r.left),2*e.abs(r.top)):t,l.scrollTo(r.left,r.top,t))},scrollToPage:function(o,t,r){var e,l,n=this;r=void 0===r?400:r,n.options.onScrollStart&&n.options.onScrollStart.call(n),n.options.snap?(o="next"==o?n.currPageX+1:"prev"==o?n.currPageX-1:o,t="next"==t?n.currPageY+1:"prev"==t?n.currPageY-1:t,o=0>o?0:o>n.pagesX.length-1?n.pagesX.length-1:o,t=0>t?0:t>n.pagesY.length-1?n.pagesY.length-1:t,n.currPageX=o,n.currPageY=t,e=n.pagesX[o],l=n.pagesY[t]):(e=-n.wrapperW*o,l=-n.wrapperH*t,e<n.maxScrollX&&(e=n.maxScrollX),l<n.maxScrollY&&(l=n.maxScrollY)),n.scrollTo(e,l,r)},disable:function(){this.stop(),this._resetPos(0),this.enabled=!1,this._unbind(Y,o),this._unbind(T,o),this._unbind(X,o)},enable:function(){this.enabled=!0},stop:function(){this.options.useTransition?this._unbind(w):z(this.aniTime),this.steps=[],this.moved=!1,this.animating=!1},zoom:function(o,t,r,e){var l=this,n=r/l.scale;l.options.useTransform&&(l.zoomed=!0,e=void 0===e?200:e,o=o-l.wrapperOffsetLeft-l.x,t=t-l.wrapperOffsetTop-l.y,l.x=o-o*n+l.x,l.y=t-t*n+l.y,l.scale=r,l.refresh(),l.x=l.x>0?0:l.x<l.maxScrollX?l.maxScrollX:l.x,l.y=l.y>l.minScrollY?l.minScrollY:l.y<l.maxScrollY?l.maxScrollY:l.y,l.scroller.style[c]=e+"ms",l.scroller.style[i]="translate("+l.x+"px,"+l.y+"px) scale("+r+")"+M,l.zoomed=!1)},isReady:function(){return!this.moved&&!this.zoomed&&!this.animating}},l=null,"undefined"!=typeof exports?exports.iScroll=E:o.iScroll=E}(window,document);


;(function(){

	document.addEventListener('AlipayJSBridgeReady', function () {
	  
		AlipayJSBridge.call('setOptionMenu', {//搜索按钮
		    icon : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAA2pJREFUaAXtl89LlEEYx10hI1Aj7JBRQglWtyBU9LAERealugtdvXerixeD8BT0DwTSPe1ikAcPgZRdxWORaaBWiGT2w+3zyA4++7A77+y8u+4e3ge+zDzzPs/3eZ6Z2dmZlpZMshnIZiCbgUbOQC5t8EKh0A3HHXAL9ICz4DTYAmvgM3gDZnK53CptcwiJ58EC2Aeh8hbDGw2tgAQugNnQjCvYzTHed+SFEPQ62KyQlBuW7ytgA/hW5wffR46sCILdB7+BlW8MPAM3wXGdEHobkKKfAinIyl8GxrVPXfoEkSRs8qJPgVMhQbHrBJPgF9DyD2U0hCPKBnLZ83bbyGzmYwjxGwTrQItsp0sxfIk+EL/SkehL8r2Jjh4D/HvAGtAy73GJ+wR7XkegL9smauZtBvAMgF2g5ba1S6XDLOe8lqlUhMYZ4glNTn/JmMSrkHUDfQzKaRP0gw2NCl87+Aq0XAz1F7tWj7FcD/RV4wVXge8e+6o/wbeD03PjeM/oXtVXgNxttLzUSg37M4bLxjWfA1XW9L1eV/olf1KBNIlm8LYC/R+znOikDHwrILdKJ1ss955TatnCuw/fuuLUcdVw+a6vALkSO9l0nTq1mv8kK3IsNI6vALnPO+lynTq1mn+XVfkTGsdXgDxGnHQxK21OqWULr5x08ihysuE6Ia2vAHlJOZEgw06pcdsPn56clWr4fQXIM1BLVeezdkzo3zXfF4wep7K054AWucR1xrGV94LvBPiig9C/Vt46YhQyecNqmYygqegC8UNNTv9dReOYDxDKK0uLPEYGY7isDzxXwY4mpz9m7VLrkL42QeQefz4NMf5nwCfDK6ut715pQhz6QtoH5MWkRYoYOLQK7+EnM2+TF+6hcJYqLSEfAfIA1yKPkQnQHkKHnfxgZc/bbcPQgcgKdIRwRdlAPg7kAW5F7vNPwBAoOZbRc6AfPAarIEnqXsQoGdjtpJOSW6Vsjw/gI9gD1Urdi7hMRvPVZmXsJclhIG05qW8RsgeJKquxVC66Z0zeGGPg4LSh7QCNK6JYSC9JPABzYBm4LfaTvmwnOYYfgbL/sIw3vgh7KpBU8H2+OAnNV4QtKklPWInpJP+m+O4pYrspEgxJokIRiyG+TWNTLGKadhssgitNk1yWSDYD2QxkM1AyA/8Bzz8HBbyV9X4AAAAASUVORK5CYII=',
		});


	}, false);

	document.addEventListener('optionMenu', function () {
    	AlipayJSBridge.call('pushWindow', {
		  	url: 'http://www.baidu.com/',
			param: {
			    readTitle: true,
			    showToolBar: false
			}
		});
	}, false);

	var $wap = $('#warpBox'),
		myScrollP = null,
		myScrollC = null,
		myScrollA = null,
		_pageSize = 0,
		pullDownEl = document.getElementById('pullDown'),
        pullDownOffset = pullDownEl.offsetHeight,
        pullUpEl = document.getElementById('pullUp'),
        pullUpOffset = pullUpEl.offsetHeight,
		$washCarList = $('#washCarList'),
		NoData = false,
		ajaxLoading = false,
		_obj = {
			init : function(){
				var _me = this;
				document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
				$washCarList.html(_me.renderTpl([
                	{
                		comment : 4.3,
						openTime : "10:00",
						closeTime : "14:30",
						timeStemp : new Date().valueOf(),
						isUsed : true
                	},
                	{
                		comment : 3,
                		openTime : "10:00",
						closeTime : "23:00",
						timeStemp : new Date().valueOf()
                	},
                	{
                		comment : 3.3,
                		openTime : "0:00",
						closeTime : "23:59",
						timeStemp : new Date().valueOf()
                	},
                	{
                		comment : 4,
                		openTime : "10:00",
						closeTime : "18:30",
						timeStemp : new Date().valueOf()
                	},
                	{
                		comment : 5,
                		openTime : "10:00",
						closeTime : "15:30",
						timeStemp : new Date().valueOf()
                	},
                	{
                		comment : 3,
                		openTime : "10:00",
						closeTime : "19:30",
						timeStemp : new Date().valueOf()
                	},
                	{
                		comment : 4,
                		openTime : "10:00",
						closeTime : "21:30",
						timeStemp : new Date().valueOf()
                	},
                	{
                		comment : 1,
                		openTime : "10:00",
						closeTime : "16:30",
						timeStemp : new Date().valueOf()
                	},
                	{
                		comment : 2,
                		openTime : "10:00",
						closeTime : "12:30",
						timeStemp : new Date().valueOf()
                	},
                	{
                		comment : 1,
                		openTime : "10:00",
						closeTime : "14:30",
						timeStemp : new Date().valueOf()
                	},
                	{
                		comment : 4,
                		openTime : "10:00",
						closeTime : "15:30",
						timeStemp : new Date().valueOf()
                	},
                	{
                		comment : 5,
                		openTime : "10:00",
						closeTime : "20:30",
						timeStemp : new Date().valueOf()
                	}
                ]));
				myScrollA = new iScroll('wrapperA', {
					click: true ,
					scrollbarClass: 'myScrollbar',
		            useTransition: false,
		            topOffset: pullDownOffset,
		            onRefresh: function() {
		                if (pullDownEl.className.match('loading')) {
		                    pullDownEl.className = '';
		                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';
		                    if(NoData){
		                    	pullUpEl.querySelector('.pullUpLabel').innerHTML = '';
		                    }else{
		                    	pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多';
		                    }
		                } else if (pullUpEl.className.match('loading')) {
		                    pullUpEl.className = '';
		                    if(NoData){
		                    	pullUpEl.querySelector('.pullUpLabel').innerHTML = '';
		                    }else{
		                    	pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多';
		                    }
		                }else{
		                	if(NoData){
		                    	pullUpEl.querySelector('.pullUpLabel').innerHTML = '';
		                    }else{
		                    	pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多';
		                    }
		                }
		            },
		            onScrollMove: function() {
		                if (this.y > 5 && !pullDownEl.className.match('flip')) {
		                    pullDownEl.className = 'flip';
		                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '释放即可刷新';
		                    this.minScrollY = 0;
		                } else if (this.y < 5 && pullDownEl.className.match('flip')) {
		                    pullDownEl.className = '';
		                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';
		                    this.minScrollY = -pullDownOffset;
		                } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
		                    pullUpEl.className = 'flip';
		                    if(NoData){
		                    	pullUpEl.querySelector('.pullUpLabel').innerHTML = '';
		                    }else{
		                    	pullUpEl.querySelector('.pullUpLabel').innerHTML = '释放即可刷新';
		                    }
		                    this.maxScrollY = this.maxScrollY;
		                } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
		                    pullUpEl.className = '';
		                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多';
		                    this.maxScrollY = pullUpOffset;
		                }
		            },
		            onScrollEnd: function() {
		            	$(window).trigger('scroll');
		                if (pullDownEl.className.match('flip')) {
		                    pullDownEl.className = 'loading';
		                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';
		                    _me.pullDownAction();
		                } else if (pullUpEl.className.match('flip')) {
		                    if(NoData){
		                    	pullUpEl.className = '';
		                    	setTimeout(function(){
						    		_me.refresh();
						    	},1000);
		                    }else{
		                    	pullUpEl.className = 'loading';
		                    	pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
		                    	_me.pullUpAction();
		                    }
		                }
		            }
				});
				_me.lazyload().bindEvent().renderCity();
				QccrCom._hideLoading();
			},
			pullDownAction : function() {
				var _me = this;
				_pageSize = 1;
		        setTimeout(function(){
		        	_me.washServiceEmpty().refresh();
		    	},3000);
		    },
		    washServiceEmpty : function(){
		    	$washCarList.html('<p class="noDate">暂时没有洗车服务商家</p>');
		        this.setNoDate();
		        return this;
		    },
		    setNoDate : function(type){
		    	if(typeof type == 'undefined'){
		    		type = true;
		    	}
		    	if(type){
		    		NoData = true;
		    		$('#pullUp').css({
		    			display : "none"
		    		});
		    	}else{
		    		NoData = false;
		    		$('#pullUp').css({
		    			display : "block"
		    		});
		    	}
		    	return this;
		    },
		    netWorkErr : function(){
		    	QccrCom.setMsg('<span class="networkerrbox">网络不给力</span>');
		    	return this;
		    },
		    pullUpAction : function() {
		    	var _me = this;
		    	_pageSize++;
		    	setTimeout(function(){
		    		$washCarList.append(_me.renderTpl([
	                	{
	                		comment : 4.3,
							openTime : "10:00",
							closeTime : "14:30",
							timeStemp : new Date().valueOf(),
							isUsed : true
	                	},
	                	{
	                		comment : 3,
	                		openTime : "10:00",
							closeTime : "23:00",
							timeStemp : new Date().valueOf()
	                	},
	                	{
	                		comment : 3.3,
	                		openTime : "0:00",
							closeTime : "23:59",
							timeStemp : new Date().valueOf()
	                	},
	                	{
	                		comment : 4,
	                		openTime : "10:00",
							closeTime : "18:30",
							timeStemp : new Date().valueOf()
	                	},
	                	{
	                		comment : 5,
	                		openTime : "10:00",
							closeTime : "15:30",
							timeStemp : new Date().valueOf()
	                	},
	                	{
	                		comment : 3,
	                		openTime : "10:00",
							closeTime : "19:30",
							timeStemp : new Date().valueOf()
	                	},
	                	{
	                		comment : 4,
	                		openTime : "10:00",
							closeTime : "21:30",
							timeStemp : new Date().valueOf()
	                	},
	                	{
	                		comment : 1,
	                		openTime : "10:00",
							closeTime : "16:30",
							timeStemp : new Date().valueOf()
	                	},
	                	{
	                		comment : 2,
	                		openTime : "10:00",
							closeTime : "12:30",
							timeStemp : new Date().valueOf()
	                	},
	                	{
	                		comment : 1,
	                		openTime : "10:00",
							closeTime : "14:30",
							timeStemp : new Date().valueOf()
	                	},
	                	{
	                		comment : 4,
	                		openTime : "10:00",
							closeTime : "15:30",
							timeStemp : new Date().valueOf()
	                	},
	                	{
	                		comment : 5,
	                		openTime : "10:00",
							closeTime : "20:30",
							timeStemp : new Date().valueOf()
	                	}
	                ]));
		    		_me.setNoDate().lazyload().refresh();		    		
		    	},3000);
		    },
			renderCity:function(){
				var _me = this;
				var _data = [
				        {
				        	name : '浙江',
				        	id : 22,
				        	city : [
				        	     {
				        	    	 name : '杭州',
					        	     id : 221
				        	     },
				        	     {
				        	    	 name : '宁波',
					        	     id : 222
				        	     },
				        	     {
				        	    	 name : '舟山',
					        	     id : 223
				        	     },
				        	     {
				        	    	 name : '杭州',
					        	     id : 221
				        	     },
				        	     {
				        	    	 name : '宁波',
					        	     id : 222
				        	     },
				        	     {
				        	    	 name : '舟山',
					        	     id : 223
				        	     },{
				        	    	 name : '杭州',
					        	     id : 221
				        	     },
				        	     {
				        	    	 name : '宁波',
					        	     id : 222
				        	     },
				        	     {
				        	    	 name : '舟山',
					        	     id : 223
				        	     },
				        	     {
				        	    	 name : '杭州',
					        	     id : 221
				        	     },
				        	     {
				        	    	 name : '宁波',
					        	     id : 222
				        	     },
				        	     {
				        	    	 name : '舟山',
					        	     id : 223
				        	     },{
				        	    	 name : '杭州',
					        	     id : 221
				        	     },
				        	     {
				        	    	 name : '宁波',
					        	     id : 222
				        	     },
				        	     {
				        	    	 name : '舟山',
					        	     id : 223
				        	     },{
				        	    	 name : '杭州',
					        	     id : 221
				        	     },
				        	     {
				        	    	 name : '宁波',
					        	     id : 222
				        	     },
				        	     {
				        	    	 name : '舟山',
					        	     id : 223
				        	     },{
				        	    	 name : '杭州',
					        	     id : 221
				        	     },
				        	     {
				        	    	 name : '宁波',
					        	     id : 222
				        	     },
				        	     {
				        	    	 name : '舟山',
					        	     id : 223
				        	     },{
				        	    	 name : '杭州',
					        	     id : 221
				        	     },
				        	     {
				        	    	 name : '宁波',
					        	     id : 222
				        	     },
				        	     {
				        	    	 name : '舟山',
					        	     id : 223
				        	     }
				        	]
				        },
				        {
				        	name : '上海',
				        	id : 23,
				        	city : [
				        	     {
				        	    	 name : '上海',
					        	     id : 231
				        	     }
				        	]
				        },
				        {
				        	name : '浙江',
				        	id : 22,
				        	city : [
				        	     {
				        	    	 name : '杭州',
					        	     id : 221
				        	     },
				        	     {
				        	    	 name : '宁波',
					        	     id : 222
				        	     },
				        	     {
				        	    	 name : '舟山',
					        	     id : 223
				        	     }
				        	]
				        },
				        {
				        	name : '上海',
				        	id : 23,
				        	city : [
				        	     {
				        	    	 name : '上海',
					        	     id : 231
				        	     }
				        	]
				        },
				        {
				        	name : '浙江',
				        	id : 22,
				        	city : [
				        	     {
				        	    	 name : '杭州',
					        	     id : 221
				        	     },
				        	     {
				        	    	 name : '宁波',
					        	     id : 222
				        	     },
				        	     {
				        	    	 name : '舟山',
					        	     id : 223
				        	     }
				        	]
				        },
				        {
				        	name : '上海',
				        	id : 23,
				        	city : [
				        	     {
				        	    	 name : '上海',
					        	     id : 231
				        	     }
				        	]
				        },
				        {
				        	name : '浙江',
				        	id : 22,
				        	city : [
				        	     {
				        	    	 name : '杭州',
					        	     id : 221
				        	     },
				        	     {
				        	    	 name : '宁波',
					        	     id : 222
				        	     },
				        	     {
				        	    	 name : '舟山',
					        	     id : 223
				        	     }
				        	]
				        },
				        {
				        	name : '上海',
				        	id : 23,
				        	city : [
				        	     {
				        	    	 name : '上海',
					        	     id : 231
				        	     }
				        	]
				        },
				        {
				        	name : '浙江',
				        	id : 22,
				        	city : [
				        	     {
				        	    	 name : '杭州',
					        	     id : 221
				        	     },
				        	     {
				        	    	 name : '宁波',
					        	     id : 222
				        	     },
				        	     {
				        	    	 name : '舟山',
					        	     id : 223
				        	     }
				        	]
				        },
				        {
				        	name : '上海',
				        	id : 23,
				        	city : [
				        	     {
				        	    	 name : '上海',
					        	     id : 231
				        	     }
				        	]
				        },
				        {
				        	name : '浙江',
				        	id : 22,
				        	city : [
				        	     {
				        	    	 name : '杭州',
					        	     id : 221
				        	     },
				        	     {
				        	    	 name : '宁波',
					        	     id : 222
				        	     },
				        	     {
				        	    	 name : '舟山',
					        	     id : 223
				        	     }
				        	]
				        },
				        {
				        	name : '上海',
				        	id : 23,
				        	city : [
				        	     {
				        	    	 name : '上海',
					        	     id : 231
				        	     }
				        	]
				        },
				        {
				        	name : '浙江',
				        	id : 22,
				        	city : [
				        	     {
				        	    	 name : '杭州',
					        	     id : 221
				        	     },
				        	     {
				        	    	 name : '宁波',
					        	     id : 222
				        	     },
				        	     {
				        	    	 name : '舟山',
					        	     id : 223
				        	     }
				        	]
				        },
				        {
				        	name : '上海',
				        	id : 23,
				        	city : [
				        	     {
				        	    	 name : '上海',
					        	     id : 231
				        	     }
				        	]
				        },
				        {
				        	name : '浙江',
				        	id : 22,
				        	city : [
				        	     {
				        	    	 name : '杭州',
					        	     id : 221
				        	     },
				        	     {
				        	    	 name : '宁波',
					        	     id : 222
				        	     },
				        	     {
				        	    	 name : '舟山',
					        	     id : 223
				        	     }
				        	]
				        },
				        {
				        	name : '上海',
				        	id : 23,
				        	city : [
				        	     {
				        	    	 name : '上海',
					        	     id : 231
				        	     }
				        	]
				        }
				    ];
				    
				$('#cityList').html(_me.renderCityTpl(_data));
				myScrollP = new iScroll('wrapperP', { click: true });
				myScrollC = new iScroll('wrapperC', { click: true });
			},
			refresh : function(index){
				if(typeof index == 'undefined'){
					myScrollA.refresh();
				}else{
					if(index == 0){
						myScrollP.refresh();
					}else{
						myScrollC.refresh();
					}
				}
				return this;
			},
			renderCityTpl : function(data){
				data = data || [];
				var _len = data.length,
					_html = '';
					if(_len > 0){
						var _pre = '<div class="aro-two-one head_select_box_porvince" id="wrapperP"><div class="scrollBox"><ul>';
						var _cit = '<div class="aro-two-two head_select_box_city" id="wrapperC"><div class="scrollBox">';
						for(var i = 0 ; i < _len ; i++){
							var _city = data[i].city || [],
								len = _city.length;
							_pre += '<li data-id="'+data[i].id+'" '+(i==0 ? "class=\"active\"" : "")+'>'+data[i].name+'</li>';
							_cit += '<div class="items'+(i!=0 ? " hide" : "")+'"><ul>';
							for(var s = 0 ; s < len; s++){
								_cit += '<li id="'+_city[s].id+'">'+_city[s].name+'</li>'
							}
							_cit += '</ul></div>';
						}
						_pre += '</ul></div></div>';
						_cit += '</div></div>';
						_html = _pre + _cit;
					}
				return _html;
			},
			lazyload: function() {
                $('#washCarList .layImg').picLazyLoad({
                    threshold: 100
                });
                return this;
            },
			_showSelect : function(index){	//显示下拉
				$('#selectBox').removeClass('hide');
				if(index == 0){
					this.refresh(0).refresh(1);
				}
				return this;
			},
			renderTpl : function (data){
				data = data || [];
				var _len = data.length,
					_html = '';
					for(var i = 0;i < _len;i++){
						var _isSleep = QccrCom.isSleep(data[i].timeStemp,data[i].openTime,data[i].closeTime);
						_html += '<dd data-openTime="'+data[i].openTime+'" data-closeTime="'+data[i].closeTime+'">'
									+'<div class="layImg" data-original="images/d.png"></div>'
									+'<div class="mainInfo">'
										+'<div class="_left">'
											+'<div class="_title">'
												+'<span class=\"_tit '+ (_isSleep ? "disabled" : "") +'\">车友之家</span>'
												+(data[i].isUsed==true ? '<span class="_tip t_c '+(_isSleep ? "disabled" : "")+'">上次使用</span>':'')
											+'</div>'
											+'<div class="_comment" data-comment="'+data[i].comment+'">'+QccrCom.score(data[i].comment)+'</div>'
											+'<div class="_position">0.31km 朝阳区呼家楼街道旺座中心</div>'
										+'</div>'
										+'<div class="_right t_r">'
											+'<em>￥86</em>'
											+'<s>￥98</s>'
											+(_isSleep ? "<span class='sleep'>休息中</span>" : "")
										+'</div>'
									+'</div>'
								+'</dd>';
					}
				return _html;
			},
			ajaxLoadData : function(callback){
				QccrCom._showLoading();

				$.ajax({
					url: 'http://192.168.6.30/car/data.php',
					type: 'GET',
					dataType: 'json',
					data: {
						pageSize: _pageSize
					},
					success : function(resp){
						QccrCom._hideLoading();
					},
					error : function(){
						QccrCom._hideLoading().netWorkErr();
					}
				})
			},
			_hideSelect : function(){	//隐藏下拉
				$('#selectBtn dd').removeClass('active');
				$('#selectBox').addClass('hide');
				return this;
			},
			showIndex: function(type) {
                var _el = $('#loadingMore p');
                type = type || '';
                if (type == "noData") {
                    _el.eq(1).show().siblings('p').hide();
                } else if (type == "showMore") {
                    _el.eq(0).show().siblings('p').hide();
                } else {
                    _el.eq(-1).show().siblings('p').hide();
                }
                return this;
            },
			bindEvent : function(){
				var _me = this;
				/*
					条件选择开始
				 */
				$wap.on({
					click : function(){
						var _index = $(this).index(),
							_box = $('#selectBox');
							if($(this).hasClass('active')){
								$(this).removeClass('active');
								_me._hideSelect();
							}else{
								$(this).addClass('active');
								_box.find('.item').eq(_index).removeClass('hide').siblings('.item').addClass('hide');
								_me._showSelect(_index);
							}
							$(this).siblings('dd').removeClass('active');
					}
				},'.head_select_list dd')
				.on({
					click : function(){
						var _index = $(this).index(),
							_list = $wap.find('.head_select_box_city .items');
							$(this).addClass('active').siblings().removeClass('active');
							_list.eq(_index).removeClass('hide').siblings().addClass('hide');
							_me.refresh(1);
					}
				},'.head_select_box_porvince li')
				.on({
					click : function(){
						$('#selectBtn .text').eq(0).html(this.innerHTML);
						_me._hideSelect();
					}
				},'.head_select_box_city li')
				.on({
					click : function(){
						var _active = $(this).hasClass('active');
						$(this).addClass('active').siblings().removeClass('active');
						$('#selectBtn .text').eq(1).html(this.innerHTML);
						_me._hideSelect()
						if(!_active){
							_me.ajaxLoadData();
						}
					}
				},'.head_select_box .othChoice li')
				.on({
					click : function(){
						var _active = $(this).hasClass('active');
						$(this).addClass('active').siblings().removeClass('active');
						$('#selectBtn .text').eq(2).html(this.innerHTML);
						_me._hideSelect();
						if(!_active){
							_me.ajaxLoadData();
						}
					}
				},'.head_select_box .serChoice li')
				/*
					条件选择结束
				 */

				return this;
			}
		};
		_obj.init();
}());


