(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[265],{1319:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/controller",function(){return o(6289)}])},6289:function(t,e,o){"use strict";o.r(e);var r=o(5893),i=o(24),n=o(7294),s=o(2642),a=o(5371),c=o(8239),p=o(1290),l=o(1985),u=o.n(l);let d=()=>{let t=(0,n.useRef)(null);console.log(t);let[e]=(0,i.KO)(a.L),[o,l]=(0,n.useState)(0),[d,h]=(0,n.useState)(null),f=(0,n.useRef)({x:0,y:0}),_=()=>{if(null!==t.current){let e=t.current.offsetWidth;l(e)}};if((0,n.useEffect)(()=>{let t=setInterval(_,100);return()=>{console.log("AAAAAAAAAAAAAAAAAAAAAA"),clearInterval(t)}},[]),!e)return(0,r.jsx)(c.g,{visible:!0});let v=async()=>{await p.x.rooms.control.$post({body:f.current}),console.log("move",f.current)},y=()=>{let t=setInterval(v,50);h(t)},b=()=>{null!==d&&clearInterval(d)},g=t=>{var e,o;let r={x:Math.round(null!==(e=t.x)&&void 0!==e?e:0),y:-Math.round(null!==(o=t.y)&&void 0!==o?o:0)};f.current=r};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:u().container,children:(0,r.jsxs)("div",{className:u().board,children:[(0,r.jsx)("div",{ref:t,className:u().joystick,children:(0,r.jsx)(s.Tj,{size:o,stickSize:o/2.5,baseColor:"gray",stickColor:"black",baseShape:s.aR.Square,move:g,stop:b,start:y})}),(0,r.jsx)("button",{className:u().shoot})]})})})};e.default=d},1985:function(t){t.exports={container:"controller_container__cQDFp",board:"controller_board__cEojV",joystick:"controller_joystick__Y1wVn",shoot:"controller_shoot__Rrg9w"}},7783:function(t,e,o){"use strict";var r,i,n,s,a,c=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),p=this&&this.__assign||function(){return(p=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.Joystick=void 0;var l=o(7294),u=o(7950),d=o(704),h=o(4459);(r=s||(s={})).PointerDown="pointerdown",r.PointerMove="pointermove",r.PointerUp="pointerup",(i=a||(a={}))[i.TopRight=2.35619449]="TopRight",i[i.TopLeft=-2.35619449]="TopLeft",i[i.BottomRight=.785398163]="BottomRight",i[i.BottomLeft=-.785398163]="BottomLeft";var f=function(t){function e(e){var o,r=t.call(this,e)||this;return r._stickRef=l.createRef(),r._baseRef=l.createRef(),r.frameId=null,r._pointerId=null,r._mounted=!1,r._pointerMove=function(t){if(t.preventDefault(),r.state.dragging&&(r.props.followCursor||t.pointerId===r._pointerId)){var e=t.clientX,o=t.clientY,i=e-r._parentRect.left-r._radius,n=o-r._parentRect.top-r._radius,s=r._distance(i,n),a=(0,h.shapeBoundsFactory)(r.props.controlPlaneShape||r.props.baseShape,e,o,i,n,s,r._radius,r._baseSize,r._parentRect);i=a.relativeX,n=a.relativeY;var c=Math.atan2(i,n);r._updatePos({relativeX:i,relativeY:n,distance:r._distanceToPercentile(s),direction:r._getDirection(c),axisX:e-r._parentRect.left,axisY:o-r._parentRect.top})}},r._pointerUp=function(t){if(t.pointerId===r._pointerId){var e={dragging:!1};r.props.sticky||(e.coordinates=void 0),r.frameId=window.requestAnimationFrame(function(){r._mounted&&r.setState(e)}),window.removeEventListener(s.PointerUp,r._pointerUp),window.removeEventListener(s.PointerMove,r._pointerMove),r._pointerId=null,r.props.stop&&r.props.stop({type:"stop",x:r.props.sticky?2*r.state.coordinates.relativeX/r._baseSize:null,y:r.props.sticky?2*r.state.coordinates.relativeY/r._baseSize:null,direction:r.props.sticky?r.state.coordinates.direction:null,distance:r.props.sticky?r.state.coordinates.distance:null})}},r.state={dragging:!1},r._throttleMoveCallback=(o=0,function(t){var e=new Date().getTime();if(!(e-o<(r.props.throttle||0))&&(o=e,r.props.move))return r.props.move(t)}),r}return c(e,t),e.prototype.componentWillUnmount=function(){var t=this;this._mounted=!1,this.props.followCursor&&window.removeEventListener(s.PointerMove,function(e){return t._pointerMove(e)}),null!==this.frameId&&window.cancelAnimationFrame(this.frameId)},e.prototype.componentDidMount=function(){var t=this;this._mounted=!0,this.props.followCursor&&(this._parentRect=this._baseRef.current.getBoundingClientRect(),this.setState({dragging:!0}),window.addEventListener(s.PointerMove,function(e){return t._pointerMove(e)}),this.props.start&&this.props.start({type:"start",x:null,y:null,distance:null,direction:null}))},e.prototype._updatePos=function(t){var e=this;this.frameId=window.requestAnimationFrame(function(){e._mounted&&e.setState({coordinates:t})}),"number"==typeof this.props.minDistance&&t.distance<this.props.minDistance||this._throttleMoveCallback({type:"move",x:2*t.relativeX/this._baseSize,y:-(2*t.relativeY/this._baseSize),direction:t.direction,distance:t.distance})},e.prototype._pointerDown=function(t){this.props.disabled||this.props.followCursor||(this._parentRect=this._baseRef.current.getBoundingClientRect(),this.setState({dragging:!0}),window.addEventListener(s.PointerUp,this._pointerUp),window.addEventListener(s.PointerMove,this._pointerMove),this._pointerId=t.pointerId,this._stickRef.current.setPointerCapture(t.pointerId),this.props.start&&this.props.start({type:"start",x:null,y:null,distance:null,direction:null}))},e.prototype._getDirection=function(t){return t>a.TopRight||t<a.TopLeft?"FORWARD":t<a.TopRight&&t>a.BottomRight?"RIGHT":t<a.BottomLeft?"LEFT":"BACKWARD"},e.prototype._distance=function(t,e){return Math.hypot(t,e)},e.prototype._distanceToPercentile=function(t){var e=t/(this._baseSize/2)*100;return e>100?100:e},e.prototype.getBaseShapeStyle=function(){var t=this.props.baseShape||u.JoystickShape.Circle;return(0,d.shapeFactory)(t,this._baseSize)},e.prototype.getStickShapeStyle=function(){var t=this.props.stickShape||u.JoystickShape.Circle;return(0,d.shapeFactory)(t,this._baseSize)},e.prototype._getBaseStyle=function(){var t=void 0!==this.props.baseColor?this.props.baseColor:"#000033",e="".concat(this._baseSize,"px"),o=p(p({},this.getBaseShapeStyle()),{height:e,width:e,background:t,display:"flex",justifyContent:"center",alignItems:"center"});return this.props.baseImage&&(o.background="url(".concat(this.props.baseImage,")"),o.backgroundSize="100%"),o},e.prototype._getStickStyle=function(){var t=void 0!==this.props.stickColor?this.props.stickColor:"#3D59AB",e=this._stickSize?"".concat(this._stickSize,"px"):"".concat(this._baseSize/1.5,"px"),o=p(p({},this.getStickShapeStyle()),{background:t,cursor:"move",height:e,width:e,border:"none",flexShrink:0,touchAction:"none"});return this.props.stickImage&&(o.background="url(".concat(this.props.stickImage,")"),o.backgroundSize="100%"),this.props.pos&&(o=Object.assign({},o,{position:"absolute",transform:"translate3d(".concat(this.props.pos.x*this._baseSize/2,"px, ").concat(-(this.props.pos.y*this._baseSize)/2,"px, 0)")})),void 0!==this.state.coordinates&&(o=Object.assign({},o,{position:"absolute",transform:"translate3d(".concat(this.state.coordinates.relativeX,"px, ").concat(this.state.coordinates.relativeY,"px, 0)")})),o},e.prototype.render=function(){var t=this;this._baseSize=this.props.size||100,this._stickSize=this.props.stickSize,this._radius=this._baseSize/2;var e=this._getBaseStyle(),o=this._getStickStyle();return l.createElement("div",{"data-testid":"joystick-base",className:this.props.disabled?"joystick-base-disabled":"",ref:this._baseRef,style:e},l.createElement("button",{ref:this._stickRef,disabled:this.props.disabled,onPointerDown:function(e){return t._pointerDown(e)},className:this.props.disabled?"joystick-disabled":"",style:o}))},e}(l.Component);e.Joystick=f},7950:function(t,e){"use strict";var o;Object.defineProperty(e,"__esModule",{value:!0}),e.JoystickShape=void 0,(o=e.JoystickShape||(e.JoystickShape={})).Circle="circle",o.Square="square",o.AxisY="axisY",o.AxisX="axisX"},2642:function(t,e,o){"use strict";e.aR=e.Tj=void 0;var r=o(7783);Object.defineProperty(e,"Tj",{enumerable:!0,get:function(){return r.Joystick}});var i=o(7950);Object.defineProperty(e,"aR",{enumerable:!0,get:function(){return i.JoystickShape}})},4459:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.shapeBoundsFactory=void 0;var r=o(7950);e.shapeBoundsFactory=function(t,e,o,n,s,a,c,p,l){switch(t){case r.JoystickShape.Square:return{relativeX:n=i(e-l.left-p/2,p),relativeY:s=i(o-l.top-p/2,p)};case r.JoystickShape.AxisX:return{relativeX:n=i(e-l.left-p/2,p),relativeY:s=0};case r.JoystickShape.AxisY:return{relativeX:n=0,relativeY:s=i(o-l.top-p/2,p)};default:return a>c&&(n*=c/a,s*=c/a),{relativeX:n,relativeY:s}}};var i=function(t,e){var o=e/2;return t>o?o:t<-o?-1*o:t}},704:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.shapeFactory=void 0;var r=o(7950);e.shapeFactory=function(t,e){switch(t){case r.JoystickShape.Square:return{borderRadius:Math.sqrt(e)};case r.JoystickShape.Circle:default:return{borderRadius:e}}}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=1319)}),_N_E=t.O()}]);