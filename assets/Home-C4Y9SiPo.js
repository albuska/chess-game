import{u as l,j as t,r as f,R as b,a as S,I as P,S as w}from"./index-By-giUWn.js";import{H as E,A as B,a as I,b as A,c as O,d as L}from"./heroSection.styles-BA-NED3e.js";const D=l.aside`
  writing-mode: vertical-lr;
  right: 10px;
  position: fixed;
  bottom: 14vh;
  user-select: text;
  transition: all 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  z-index: 100;
`,H=l.p`
  font-weight: 300;
  line-height: 1.2;
  font-size: 1.2rem;
  color: rgba(4, 4, 4, 0.4);
`,M=()=>t.jsx(D,{children:t.jsx(H,{className:"dark:text-[#ffffff66]",children:"albuska2013@gmail.com"})});function g(){return g=Object.assign?Object.assign.bind():function(r){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&(r[e]=s[e])}return r},g.apply(this,arguments)}var F={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(r){},onComplete:function(r){},preStringTyped:function(r,a){},onStringTyped:function(r,a){},onLastStringBackspaced:function(r){},onTypingPaused:function(r,a){},onTypingResumed:function(r,a){},onReset:function(r){},onStop:function(r,a){},onStart:function(r,a){},onDestroy:function(r){}},q=new(function(){function r(){}var a=r.prototype;return a.load=function(s,e,n){if(s.el=typeof n=="string"?document.querySelector(n):n,s.options=g({},F,e),s.isInput=s.el.tagName.toLowerCase()==="input",s.attr=s.options.attr,s.bindInputFocusEvents=s.options.bindInputFocusEvents,s.showCursor=!s.isInput&&s.options.showCursor,s.cursorChar=s.options.cursorChar,s.cursorBlinking=!0,s.elContent=s.attr?s.el.getAttribute(s.attr):s.el.textContent,s.contentType=s.options.contentType,s.typeSpeed=s.options.typeSpeed,s.startDelay=s.options.startDelay,s.backSpeed=s.options.backSpeed,s.smartBackspace=s.options.smartBackspace,s.backDelay=s.options.backDelay,s.fadeOut=s.options.fadeOut,s.fadeOutClass=s.options.fadeOutClass,s.fadeOutDelay=s.options.fadeOutDelay,s.isPaused=!1,s.strings=s.options.strings.map(function(h){return h.trim()}),s.stringsElement=typeof s.options.stringsElement=="string"?document.querySelector(s.options.stringsElement):s.options.stringsElement,s.stringsElement){s.strings=[],s.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var o=Array.prototype.slice.apply(s.stringsElement.children),i=o.length;if(i)for(var p=0;p<i;p+=1)s.strings.push(o[p].innerHTML.trim())}for(var u in s.strPos=0,s.currentElContent=this.getCurrentElContent(s),s.currentElContent&&s.currentElContent.length>0&&(s.strPos=s.currentElContent.length-1,s.strings.unshift(s.currentElContent)),s.sequence=[],s.strings)s.sequence[u]=u;s.arrayPos=0,s.stopNum=0,s.loop=s.options.loop,s.loopCount=s.options.loopCount,s.curLoop=0,s.shuffle=s.options.shuffle,s.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},s.typingComplete=!1,s.autoInsertCss=s.options.autoInsertCss,s.autoInsertCss&&(this.appendCursorAnimationCss(s),this.appendFadeOutAnimationCss(s))},a.getCurrentElContent=function(s){return s.attr?s.el.getAttribute(s.attr):s.isInput?s.el.value:s.contentType==="html"?s.el.innerHTML:s.el.textContent},a.appendCursorAnimationCss=function(s){var e="data-typed-js-cursor-css";if(s.showCursor&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.setAttribute(e,"true"),n.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(n)}},a.appendFadeOutAnimationCss=function(s){var e="data-typed-fadeout-js-css";if(s.fadeOut&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.setAttribute(e,"true"),n.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(n)}},r}()),j=new(function(){function r(){}var a=r.prototype;return a.typeHtmlChars=function(s,e,n){if(n.contentType!=="html")return e;var o=s.substring(e).charAt(0);if(o==="<"||o==="&"){var i;for(i=o==="<"?">":";";s.substring(e+1).charAt(0)!==i&&!(1+ ++e>s.length););e++}return e},a.backSpaceHtmlChars=function(s,e,n){if(n.contentType!=="html")return e;var o=s.substring(e).charAt(0);if(o===">"||o===";"){var i;for(i=o===">"?"<":"&";s.substring(e-1).charAt(0)!==i&&!(--e<0););e--}return e},r}()),z=function(){function r(s,e){q.load(this,e,s),this.begin()}var a=r.prototype;return a.toggle=function(){this.pause.status?this.start():this.stop()},a.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},a.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},a.destroy=function(){this.reset(!1),this.options.onDestroy(this)},a.reset=function(s){s===void 0&&(s=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,s&&(this.insertCursor(),this.options.onReset(this),this.begin())},a.begin=function(){var s=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){s.strPos===0?s.typewrite(s.strings[s.sequence[s.arrayPos]],s.strPos):s.backspace(s.strings[s.sequence[s.arrayPos]],s.strPos)},this.startDelay)},a.typewrite=function(s,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var o=this.humanizer(this.typeSpeed),i=1;this.pause.status!==!0?this.timeout=setTimeout(function(){e=j.typeHtmlChars(s,e,n);var p=0,u=s.substring(e);if(u.charAt(0)==="^"&&/^\^\d+/.test(u)){var h=1;h+=(u=/\d+/.exec(u)[0]).length,p=parseInt(u),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),s=s.substring(0,e)+s.substring(e+h),n.toggleBlinking(!0)}if(u.charAt(0)==="`"){for(;s.substring(e+i).charAt(0)!=="`"&&(i++,!(e+i>s.length)););var m=s.substring(0,e),d=s.substring(m.length+1,e+i),c=s.substring(e+i+1);s=m+d+c,i--}n.timeout=setTimeout(function(){n.toggleBlinking(!1),e>=s.length?n.doneTyping(s,e):n.keepTyping(s,e,i),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))},p)},o):this.setPauseStatus(s,e,!0)},a.keepTyping=function(s,e,n){e===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var o=s.substring(0,e+=n);this.replaceText(o),this.typewrite(s,e)},a.doneTyping=function(s,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){n.backspace(s,e)},this.backDelay))},a.backspace=function(s,e){var n=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var o=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=j.backSpaceHtmlChars(s,e,n);var i=s.substring(0,e);if(n.replaceText(i),n.smartBackspace){var p=n.strings[n.arrayPos+1];n.stopNum=p&&i===p.substring(0,e)?e:0}e>n.stopNum?(e--,n.backspace(s,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))},o)}else this.setPauseStatus(s,e,!1)},a.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},a.setPauseStatus=function(s,e,n){this.pause.typewrite=n,this.pause.curString=s,this.pause.curStrPos=e},a.toggleBlinking=function(s){this.cursor&&(this.pause.status||this.cursorBlinking!==s&&(this.cursorBlinking=s,s?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},a.humanizer=function(s){return Math.round(Math.random()*s/2)+s},a.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},a.initFadeOut=function(){var s=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){s.arrayPos++,s.replaceText(""),s.strings.length>s.arrayPos?s.typewrite(s.strings[s.sequence[s.arrayPos]],0):(s.typewrite(s.strings[0],0),s.arrayPos=0)},this.fadeOutDelay)},a.replaceText=function(s){this.attr?this.el.setAttribute(this.attr,s):this.isInput?this.el.value=s:this.contentType==="html"?this.el.innerHTML=s:this.el.textContent=s},a.bindFocusEvents=function(){var s=this;this.isInput&&(this.el.addEventListener("focus",function(e){s.stop()}),this.el.addEventListener("blur",function(e){s.el.value&&s.el.value.length!==0||s.start()}))},a.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},r}();const R=f.memo(({style:r,className:a,typedRef:s,parseRef:e,stopped:n,children:o,startWhenVisible:i,...p})=>{const u=f.useRef(null),h=f.useMemo(()=>{var d;return[...Object.values(p).filter(c=>typeof c=="boolean"||typeof c=="number"||typeof c=="string"),(d=p.strings)==null?void 0:d.join(",")]},[p]);f.useEffect(()=>{const d=e&&e(u)||u.current,c=new z(d,{...p});if((n||i)&&(c==null||c.stop()),i){const y=new IntersectionObserver(([T])=>{T.isIntersecting&&(c==null||c.start(),y.disconnect())});y.observe(d)}return s&&c&&s(c),()=>{c.destroy()}},h);const m=o?b.cloneElement(o,{ref:u}):b.createElement("span",{style:r,ref:u});return b.createElement("span",{style:r,className:a,"data-testid":"react-typed"},m)}),U=l.div`
  position: relative;
  padding-bottom: 100px;
`,N=l.div`
  width: 400px;
  height: 422px;
  border-radius: 4px;
  border: 1px solid #cccccc;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`,k=l.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 12px;
  background-color: #f0f0f0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`,x=l.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #dddddd;
`,v=l.div`
  background-color: #ffffff;
  padding: 10px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  height: 100%;
`,C=l.p`
  font-size: 13px;
  /* line-height: 1.2; */
  line-height: 1.4;
  color: #444444;
`,_=l(N)`
  position: absolute;
  top: 120px;
  left: -30px;
  /* border-color: transparent; */
  /* height: 422px; */
`,Y=l(x)`
  background-color: #fd5e59;
`,$=l(x)`
  background-color: #ffbb3b;
`,G=l(x)`
  background-color: #34c748;
`,J=()=>t.jsxs(U,{children:[t.jsxs(N,{className:"dark:border-[#000000]",children:[t.jsxs(k,{className:"dark:bg-[#3b3b3b] dark:border-b-[#000000] dark:border-b-[1px] dark:border-solid",children:[t.jsx(x,{className:"dark:bg-[#606060]"}),t.jsx(x,{className:"dark:bg-[#606060]"}),t.jsx(x,{className:"dark:bg-[#606060]"})]}),t.jsx(v,{className:"dark:bg-[#2b2b2b]",children:t.jsxs(C,{className:"dark:text-[#ffffff]",children:[t.jsx("span",{className:"text-[#444444] dark:text-[#999999]",children:"@"}),t.jsx("span",{className:"text-[#c5504a]",children:"mixin"}),t.jsx("span",{className:"text-[#57a249]",children:" header"})," ","{",t.jsx("br",{}),t.jsx("span",{className:"text-[#57a249] pl-[15px]",children:"header"})," ","{",t.jsx("br",{}),t.jsx("span",{className:"pl-[30px]",children:"font-size:"})," ",t.jsx("span",{className:"text-[#9951d4]",children:"18"}),t.jsx("span",{className:"text-[#c5504a]",children:"px"}),";",t.jsx("br",{})," ",t.jsx("span",{className:"text-[#444444] dark:text-[#999999] pl-[30px]",children:"@"}),t.jsx("span",{className:"text-[#c5504a]",children:"include"}),t.jsx("span",{className:"text-[#57a249]",children:" flex-spaced-between"}),";",t.jsx("br",{}),t.jsx("span",{className:"pl-[30px]",children:"top:"})," ",t.jsx("span",{className:"text-[#9951d4]",children:"0"}),";",t.jsx("br",{}),t.jsx("span",{className:"pl-[30px]",children:"padding:"})," ",t.jsx("span",{className:"text-[#9951d4]",children:"10"}),t.jsx("span",{className:"text-[#c5504a]",children:"px"}),t.jsx("span",{className:"text-[#9951d4]",children:" 20"}),t.jsx("span",{className:"text-[#c5504a]",children:"px"}),t.jsx("span",{className:"text-[#9951d4]",children:" 10"}),t.jsx("span",{className:"text-[#c5504a]",children:"px"}),t.jsx("span",{className:"text-[#9951d4]",children:" 10"}),t.jsx("span",{className:"text-[#c5504a]",children:"px"}),";",t.jsx("br",{}),t.jsx("span",{className:"pl-[30px]",children:"height:"})," ",t.jsx("span",{className:"text-[#9951d4]",children:" 50"}),t.jsx("span",{className:"text-[#c5504a]",children:"px"}),";",t.jsx("br",{}),t.jsx("span",{className:"pl-[30px]",children:"transition:"}),t.jsx("span",{className:"text-[#c5504a]",children:" all "}),t.jsx("span",{className:"text-[#9951d4]",children:" 0.2"}),t.jsx("span",{className:"text-[#c5504a]",children:"s"}),t.jsx("span",{className:"text-[#04b2de]",children:" ease"}),";",t.jsx("br",{}),t.jsx("span",{className:"pl-[30px]",children:"overflow:"})," ",t.jsx("span",{className:"text-[#04b2de]",children:" hidden"}),";",t.jsx("br",{}),t.jsxs("p",{className:"pt-[20px]",children:[t.jsx("span",{className:"text-[#57a249] pl-[30px]",children:". logo__container"})," ","{",t.jsx("br",{}),t.jsx("span",{className:"text-[#c5504a] pl-[40px]",children:"h2"})," ","{",t.jsx("br",{}),t.jsx("span",{className:"pl-[50px]",children:"font-family:"}),' "',t.jsx("span",{className:"text-[#cabf6a]",children:"Inter"}),'",',t.jsx("span",{className:"text-[#04b2de]",children:" sans-serif"}),";",t.jsx("br",{}),t.jsx("span",{className:"pl-[50px]",children:"font-size:"})," ",t.jsx("span",{className:"text-[#9951d4]",children:" 2"}),t.jsx("span",{className:"text-[#c5504a]",children:"rem"}),";",t.jsx("br",{}),t.jsx("span",{className:"pl-[50px]",children:" span"})," ","{",t.jsx("br",{}),t.jsx("span",{className:"pl-[65px]",children:"color:"}),t.jsx("span",{className:"text-[#ed8804]",children:" $accent-color"}),";",t.jsx("br",{})]}),t.jsxs("span",{className:"pl-[50px]",children:[" ","}"]}),t.jsx("br",{}),t.jsxs("span",{className:"pl-[40px]",children:[" ","}"]}),t.jsx("br",{}),t.jsx("span",{className:"pl-[30px]",children:"}"}),t.jsx("br",{}),t.jsxs("span",{className:"pl-[15px]",children:[" ","}"]})]})})]}),t.jsxs(_,{className:"dark:border-[transparent]",children:[t.jsxs(k,{className:"dark:bg-[#3b3b3b] dark:border-b-[#000000] dark:border-b-[1px] dark:border-solid",children:[t.jsx(Y,{}),t.jsx($,{}),t.jsx(G,{})]}),t.jsx(v,{className:"dark:bg-[#2b2b2b]",children:t.jsx(C,{className:"dark:text-[var(--main-dark-theme-color)]",children:t.jsx(R,{strings:['<span class="text-[#c5504a]">import</span> Developer <span class="text-[#c5504a]">from</span> "<span class="text-[#cabf6a]">./Developer</span>"; <br/><span class="text-[#04b2de]">class AlbinaAnistratenko <span class="text-[#c5504a]">extends</span> Developer </span>{<br/><span class="text-[#04b2de] pl-[10px]">constructor</span>( ) {<br/><span class="text-[#999999] pl-[25px]">super</span><span class="text-[#cabf6a]">( )</span>;<br/><span class="text-[#999999] pl-[25px]">this.</span>age <span class="text-[#c5504a]">=</span> <span class="text-[#c5504a]"> new</span> <span class="text-[#57a249]"> Date</span> ( ).<span class="text-[#57a249]"> getFullYear</span>( ) <span class="text-[#c5504a]"> -</span> <span class="text-[#9951d4]">1995</span>;<br/><span class="text-[#999999] pl-[25px]">this.</span>favSkills <span class="text-[#c5504a]">=</span> {<br/><span class="pl-[35px]">teamOriented:</span> <span class="text-[#9951d4]">10</span>,<br/><span class="pl-[35px]">determination:</span> <span class="text-[#9951d4]">10</span>,<br/><span class="pl-[35px]">persistence:</span> <span class="text-[#9951d4]">10</span>,<br/><span class="pl-[25px]">};</span><br/><span class="text-[#999999] pl-[25px]">this.</span>hasPassion <span class="text-[#c5504a]">=</span> <span class="text-[#9951d4]">true</span>;<br/><span class="pl-[25px]">#givesUp</span> <span class="text-[#c5504a]"> = </span> <span class="text-[#9951d4]">null</span>;<br/><span class="pl-[25px]">lovesTraveling</span> <span class="text-[#c5504a]"> = </span> <span class="text-[#9951d4]">true</span>;<br/><span class="text-[#57a249] pl-[25px]">code</span><span class="text-[#ed8804]">(hrs)</span> { . . .<br/><span class="pl-[25px]">}</span><br/><span class="text-[#57a249] pl-[25px]">drinkCoffee</span><span class="text-[#ed8804]">(cups)</span> { . . .<br/><span class="pl-[25px]">}</span><br/>};<br/><span class="text-[#c5504a]">export default new</span><span class="text-[#57a249]"> AlbinaAnistratenko</span><span class="text-[#c5504a]">()</span>;'],typeSpeed:100})})})]})]}),K=()=>{const{t:r}=S();return t.jsxs(E,{children:[t.jsxs(B,{children:[t.jsx(I,{className:"font-konnect dark:text-[var(--accent-dark-theme-color)]",children:r("hero.secondTitle")}),t.jsx(A,{className:"font-gravity dark:text-[var(--accent-dark-theme-color)]",children:r("hero.title")}),t.jsx(O,{className:"font-konnect dark:text-[var(--main-dark-theme-color)]",children:r("hero.text")}),t.jsx(L,{to:"/main",className:"font-gravity dark:text-[var(--accent-dark-theme-color)] dark:border-[var(--accent-dark-theme-color)] dark:hover:bg-[#64FFDB33]",children:r("hero.goPlayBoardBtn")})]}),t.jsx(J,{})]})},Q=l.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: fixed;
  bottom: 14vh;
  left: 10px;
  transition: all 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  z-index: 100;
`,X=l.li`
  &:hover {
    .socials-icon {
      transform: scale(1.7);
      transform-origin: left;
    }
  }
`,Z=l(P)`
  width: 24px;
  height: 24px;
  color: var(--accent-light-theme-color);
  transition: transform 0.2s ease-in-out;
`,V=()=>t.jsx(Q,{children:w.map(r=>t.jsx(X,{children:t.jsx("a",{href:r.link,target:"_blank",rel:"noreferrer",children:t.jsx(Z,{name:r.icon,size:"0px",className:"dark:text-[var(--accent-dark-theme-color)] socials-icon"})})},r.id))}),ts=()=>t.jsxs(t.Fragment,{children:[t.jsx(K,{}),t.jsx(V,{}),t.jsx(M,{})]});export{ts as default};
