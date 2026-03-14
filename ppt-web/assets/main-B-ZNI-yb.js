(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();class x{constructor(){this.currentIndex=0,this.slides=[],this.totalSlides=0,this.viewport=document.getElementById("ppt-viewport"),this.prevBtn=document.getElementById("prevBtn"),this.nextBtn=document.getElementById("nextBtn"),this.progressBarFill=document.getElementById("progressBarFill"),this.pageIndicator=document.getElementById("pageIndicator"),this.init(),this.initWindowMessage()}init(){this.loadSlides(),this.bindEvents(),this.initializePage(),this.updateUI(),this.updateViewportScale()}initWindowMessage(){window.addEventListener("message",e=>{if(!e.data||typeof e.data!="object")return;const{type:s,data:l}=e.data;s==="childrenstart"?(this.prevBtn.style.visibility="hidden",this.nextBtn.style.visibility="hidden",this.progressBarFill.style.visibility="hidden",this.pageIndicator.style.visibility="hidden"):s==="childrenstop"&&(this.prevBtn.style.visibility="visible",this.nextBtn.style.visibility="visible",this.progressBarFill.style.visibility="visible",this.pageIndicator.style.visibility="visible")})}initializePage(){const e=new URLSearchParams(window.location.search);let s=e.get("page");if(!s){s="1",e.set("page","1");const a=`${window.location.pathname}?${e.toString()}`;window.history.replaceState({},"",a)}const l=parseInt(s,10),t=l-1;if(!isNaN(l)&&t>=0&&t<this.totalSlides)this.slides[0]&&this.slides[0].classList.remove("active"),this.currentIndex=t,this.slides[t]&&this.slides[t].classList.add("active");else{e.set("page","1");const a=`${window.location.pathname}?${e.toString()}`;window.history.replaceState({},"",a)}}loadSlides(){if(typeof window.slideDataMap>"u"){console.error("未找到 slideDataMap");return}const e=Array.from(window.slideDataMap.keys()).sort((s,l)=>s-l);if(this.totalSlides=e.length,this.totalSlides===0){console.warn("slideDataMap 为空，没有幻灯片可加载");return}e.forEach((s,l)=>{const t=document.createElement("div");t.className="slide",l===0&&t.classList.add("active");const a=window.slideDataMap.get(s);if(!a||typeof a!="string"){this.totalSlides--,console.error(`未找到页码 ${s} 的内容`);return}const d=document.createElement("div");d.innerHTML=a.trim(),t.appendChild(d),this.viewport.appendChild(t),this.slides.push(t)})}bindEvents(){this.prevBtn.addEventListener("click",()=>this.prevSlide()),this.nextBtn.addEventListener("click",()=>this.nextSlide()),document.addEventListener("keydown",s=>{s.key==="ArrowLeft"?this.prevSlide():s.key==="ArrowRight"||s.key===" "?(s.preventDefault(),this.nextSlide()):s.key==="Home"?this.goToSlide(0):s.key==="End"&&this.goToSlide(this.totalSlides-1)});let e=0;this.viewport.addEventListener("touchstart",s=>{e=s.touches[0].clientX}),this.viewport.addEventListener("touchend",s=>{const l=s.changedTouches[0].clientX,t=e-l;Math.abs(t)>50&&(t>0?this.nextSlide():this.prevSlide())}),window.addEventListener("resize",()=>this.updateViewportScale())}prevSlide(){this.currentIndex>0&&this.goToSlide(this.currentIndex-1)}nextSlide(){this.currentIndex<this.totalSlides-1&&this.goToSlide(this.currentIndex+1)}goToSlide(e){e<0||e>=this.totalSlides||(this.slides[this.currentIndex].classList.remove("active"),this.currentIndex=e,this.slides[this.currentIndex].classList.add("active"),this.updateUrlPage(e+1),this.updateUI())}updateUrlPage(e){const s=new URLSearchParams(window.location.search);s.set("page",e.toString());const l=`${window.location.pathname}?${s.toString()}`;window.history.replaceState({},"",l)}updateUI(){if(this.totalSlides===0){this.prevBtn.disabled=!0,this.nextBtn.disabled=!0,this.progressBarFill.style.width="0%",this.pageIndicator.textContent="制作中";return}this.prevBtn.disabled=this.currentIndex===0,this.nextBtn.disabled=this.currentIndex===this.totalSlides-1;const e=(this.currentIndex+1)/this.totalSlides*100;this.progressBarFill.style.width=`${e}%`,this.pageIndicator.textContent=`${this.currentIndex+1} / ${this.totalSlides}`}updateViewportScale(){const t=window.innerWidth-40,a=window.innerHeight-40,d=t/1440,r=a/810,n=Math.min(d,r,1);this.viewport.style.transform=`scale(${n})`}}class o{constructor(){this.validRoutes=["/","/index.html"],this.checkRoute()}checkRoute(){const e=window.location.pathname;if(e.includes("404.html"))return;this.validRoutes.some(l=>l==="/"?e==="/"||e==="/index.html":e===l)||(console.warn(`Invalid route detected: ${e}, redirecting to 404`),window.location.href="/404.html")}addRoute(e){this.validRoutes.includes(e)||this.validRoutes.push(e)}isValidRoute(e){return this.validRoutes.includes(e)}}window.addEventListener("DOMContentLoaded",()=>{new o,new x});window.slideDataMap.set(1,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg" style="background: linear-gradient(135deg, #0d1b3e 0%, #0a2463 50%, #0d1b3e 100%); background-image: linear-gradient(rgba(62, 146, 204, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(62, 146, 204, 0.08) 1px, transparent 1px); background-size: 50px 50px;">
  <!-- 网格背景 -->
  <div class="absolute inset-0" style="background-image: linear-gradient(rgba(62, 146, 204, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(62, 146, 204, 0.08) 1px, transparent 1px); background-size: 50px 50px;"></div>
  <!-- 装饰圆环 -->
  <div class="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full border border-cyan-500/20"></div>
  <div class="absolute top-[-40px] right-[-40px] w-[300px] h-[300px] rounded-full border border-cyan-500/10"></div>
  <div class="absolute bottom-[-60px] left-[-60px] w-[320px] h-[320px] rounded-full border border-blue-400/15"></div>
  <!-- 顶部装饰线 -->
  <div class="absolute top-0 left-0 w-full h-1" style="background: linear-gradient(to right, transparent, #3E92CC, #F4B942, #3E92CC, transparent);"></div>

  <div class="relative z-10 w-full h-full flex flex-col items-center justify-center">
    <!-- 系统标识 -->
    <div class="flex items-center gap-2 mb-6 px-5 py-2 border border-cyan-500/40 bg-cyan-500/10 rounded-full">
      <div class="w-2 h-2 bg-cyan-400 rounded-full" style="animation: pulse 1.5s infinite;"></div>
      <span class="text-cyan-400 font-mono text-sm tracking-widest">SWIM TRAINING SYSTEM v2.0</span>
    </div>

    <!-- 主标题 -->
    <h1 class="text-[72px] font-bold text-white mb-4 text-center leading-tight" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif; text-shadow: 0 0 40px rgba(62,146,204,0.4);">
      自由泳提速训练方案
    </h1>

    <!-- 分割线 -->
    <div class="flex items-center gap-4 mb-6">
      <div class="w-24 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
      <div class="w-3 h-3 bg-amber-400 rotate-45"></div>
      <div class="w-24 h-px bg-gradient-to-l from-transparent to-cyan-400"></div>
    </div>

    <!-- 副标题 -->
    <p class="text-[24px] text-cyan-300 mb-10 text-center" style="font-family: 'Noto Sans SC', sans-serif;">
      69岁男性 · 2000米 · 从70分钟到60分钟以内
    </p>

    <!-- 三个标签 -->
    <div class="flex gap-6">
      <div class="flex items-center gap-2 px-5 py-2 bg-blue-900/50 border border-blue-500/40 rounded-lg">
        <span class="text-amber-400 text-lg">⏱</span>
        <span class="text-white text-[15px]" style="font-family: 'Noto Sans SC', sans-serif;">12周科学训练</span>
      </div>
      <div class="flex items-center gap-2 px-5 py-2 bg-blue-900/50 border border-cyan-500/40 rounded-lg">
        <span class="text-cyan-400 text-lg">🏊</span>
        <span class="text-white text-[15px]" style="font-family: 'Noto Sans SC', sans-serif;">三大工具辅助</span>
      </div>
      <div class="flex items-center gap-2 px-5 py-2 bg-blue-900/50 border border-blue-500/40 rounded-lg">
        <span class="text-emerald-400 text-lg">📈</span>
        <span class="text-white text-[15px]" style="font-family: 'Noto Sans SC', sans-serif;">技术+体能双提升</span>
      </div>
    </div>
  </div>

  <!-- 底部装饰线 -->
  <div class="absolute bottom-0 left-0 w-full h-1" style="background: linear-gradient(to right, transparent, #3E92CC, transparent);"></div>
</div>
`);window.slideDataMap.set(2,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden" style="background: linear-gradient(135deg, #1a0a2e 0%, #0f0520 100%);">
  <div class="w-[1350px] h-[720px] mx-auto my-[45px] relative">
    <!-- 故障效果背景 -->
    <div style="position: absolute; inset: 0; opacity: 0.07; background: repeating-linear-gradient(0deg, rgba(255, 0, 255, 0.3) 0px, transparent 2px, transparent 4px);"></div>
    <!-- 霓虹灯条 -->
    <div style="position: absolute; top: 10%; left: 0; width: 100%; height: 2px; background: linear-gradient(to right, transparent, #ff00ff, #00ffff, transparent); opacity: 0.5;"></div>
    <div style="position: absolute; bottom: 10%; left: 0; width: 100%; height: 2px; background: linear-gradient(to right, transparent, #00ffff, #ff00ff, transparent); opacity: 0.5;"></div>

    <div class="flex items-center h-full">
      <!-- 左侧标题区 -->
      <div style="width: 30%; padding-right: 40px; flex-shrink: 0;">
        <div class="text-cyan-400 font-mono text-sm tracking-widest mb-3">CONTENTS</div>
        <h1 class="text-[52px] font-bold mb-5 leading-tight" style="background: linear-gradient(90deg, #ff00ff, #00ffff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: 'Montserrat', sans-serif;">
          训练<br/>目录
        </h1>
        <div class="space-y-1">
          <div class="w-full h-1 bg-gradient-to-r from-fuchsia-500 to-transparent"></div>
          <div class="w-3/4 h-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
          <div class="w-1/2 h-1 bg-gradient-to-r from-fuchsia-500 to-transparent"></div>
        </div>
        <p class="text-cyan-300 text-[14px] mt-4 font-mono opacity-70">SWIM TRAINING PLAN</p>
      </div>

      <!-- 右侧内容区 -->
      <div style="flex: 1;" class="space-y-3">

        <!-- 第1章 -->
        <div style="position: relative; padding: 14px 20px; background: linear-gradient(135deg, rgba(255,0,255,0.08) 0%, rgba(0,255,255,0.04) 100%); border: 1px solid rgba(62,146,204,0.4); clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));">
          <div class="flex items-center gap-4">
            <div style="width: 42px; height: 42px; background: linear-gradient(135deg, rgba(255,0,255,0.3), rgba(0,255,255,0.3)); border: 2px solid #ff00ff; clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px)); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <span class="text-base font-bold text-fuchsia-400">01</span>
            </div>
            <div>
              <h3 class="text-[16px] font-bold" style="background: linear-gradient(90deg, #ff00ff, #00ffff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: 'Noto Sans SC', sans-serif;">现状分析与目标设定</h3>
              <p class="text-cyan-300 text-[13px] opacity-80 font-mono">当前3:30/百米 → 目标3:00/百米</p>
            </div>
          </div>
          <div style="position: absolute; top: 0; right: 0; width: 10px; height: 10px; background: #ff00ff; clip-path: polygon(100% 0, 100% 100%, 0 100%);"></div>
        </div>

        <!-- 第2章 -->
        <div style="position: relative; padding: 14px 20px; background: linear-gradient(135deg, rgba(0,255,255,0.08) 0%, rgba(255,0,255,0.04) 100%); border: 1px solid rgba(0,255,255,0.4); clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));">
          <div class="flex items-center gap-4">
            <div style="width: 42px; height: 42px; background: linear-gradient(135deg, rgba(0,255,255,0.3), rgba(255,0,255,0.3)); border: 2px solid #00ffff; clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px)); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <span class="text-base font-bold text-cyan-400">02</span>
            </div>
            <div>
              <h3 class="text-[16px] font-bold" style="background: linear-gradient(90deg, #00ffff, #ff00ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: 'Noto Sans SC', sans-serif;">三大训练工具详解</h3>
              <p class="text-cyan-300 text-[13px] opacity-80 font-mono">呼吸管 · 夹腿浮标 · 手蹼</p>
            </div>
          </div>
          <div style="position: absolute; top: 0; right: 0; width: 10px; height: 10px; background: #00ffff; clip-path: polygon(100% 0, 100% 100%, 0 100%);"></div>
        </div>

        <!-- 第3章 -->
        <div style="position: relative; padding: 14px 20px; background: linear-gradient(135deg, rgba(255,0,255,0.08) 0%, rgba(0,255,255,0.04) 100%); border: 1px solid rgba(62,146,204,0.4); clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));">
          <div class="flex items-center gap-4">
            <div style="width: 42px; height: 42px; background: linear-gradient(135deg, rgba(255,0,255,0.3), rgba(0,255,255,0.3)); border: 2px solid #ff00ff; clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px)); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <span class="text-base font-bold text-fuchsia-400">03</span>
            </div>
            <div>
              <h3 class="text-[16px] font-bold" style="background: linear-gradient(90deg, #ff00ff, #00ffff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: 'Noto Sans SC', sans-serif;">12周分阶段训练计划</h3>
              <p class="text-cyan-300 text-[13px] opacity-80 font-mono">技术重建 → 效率提升 → 速度积累</p>
            </div>
          </div>
          <div style="position: absolute; top: 0; right: 0; width: 10px; height: 10px; background: #ff00ff; clip-path: polygon(100% 0, 100% 100%, 0 100%);"></div>
        </div>

        <!-- 第4章 -->
        <div style="position: relative; padding: 14px 20px; background: linear-gradient(135deg, rgba(0,255,255,0.08) 0%, rgba(255,0,255,0.04) 100%); border: 1px solid rgba(0,255,255,0.4); clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));">
          <div class="flex items-center gap-4">
            <div style="width: 42px; height: 42px; background: linear-gradient(135deg, rgba(0,255,255,0.3), rgba(255,0,255,0.3)); border: 2px solid #00ffff; clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px)); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <span class="text-base font-bold text-cyan-400">04</span>
            </div>
            <div>
              <h3 class="text-[16px] font-bold" style="background: linear-gradient(90deg, #00ffff, #ff00ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: 'Noto Sans SC', sans-serif;">老年人训练安全指南</h3>
              <p class="text-cyan-300 text-[13px] opacity-80 font-mono">心率控制 · 关节保护 · 循序渐进</p>
            </div>
          </div>
          <div style="position: absolute; top: 0; right: 0; width: 10px; height: 10px; background: #00ffff; clip-path: polygon(100% 0, 100% 100%, 0 100%);"></div>
        </div>

        <!-- 第5章 -->
        <div style="position: relative; padding: 14px 20px; background: linear-gradient(135deg, rgba(255,0,255,0.08) 0%, rgba(0,255,255,0.04) 100%); border: 1px solid rgba(62,146,204,0.4); clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));">
          <div class="flex items-center gap-4">
            <div style="width: 42px; height: 42px; background: linear-gradient(135deg, rgba(255,0,255,0.3), rgba(0,255,255,0.3)); border: 2px solid #ff00ff; clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px)); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <span class="text-base font-bold text-fuchsia-400">05</span>
            </div>
            <div>
              <h3 class="text-[16px] font-bold" style="background: linear-gradient(90deg, #ff00ff, #00ffff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: 'Noto Sans SC', sans-serif;">12周进步里程碑</h3>
              <p class="text-cyan-300 text-[13px] opacity-80 font-mono">目标：12周突破60分钟</p>
            </div>
          </div>
          <div style="position: absolute; top: 0; right: 0; width: 10px; height: 10px; background: #ff00ff; clip-path: polygon(100% 0, 100% 100%, 0 100%);"></div>
        </div>

      </div>
    </div>
  </div>
</div>
`);window.slideDataMap.set(3,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
  <div class="absolute inset-0" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59,130,246,0.04) 2px, rgba(59,130,246,0.04) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(59,130,246,0.04) 2px, rgba(59,130,246,0.04) 4px);"></div>
  
  <div class="w-[1350px] h-[720px] mx-auto my-[45px] p-8 relative z-10 flex flex-col">
    
    <!-- 标题区 -->
    <div class="bg-slate-800/80 backdrop-blur p-5 rounded-lg shadow-lg shadow-blue-500/20 mb-5">
      <h2 class="text-[32px] font-bold text-blue-400 mb-2 flex items-center gap-3" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">
        <div class="w-9 h-9 bg-blue-500 flex items-center justify-center text-white font-mono text-[16px]">&lt;/&gt;</div>
        你的现状与目标
      </h2>
      <div class="flex gap-8">
        <div class="flex items-center gap-3">
          <span class="text-cyan-400 font-mono text-[14px]">当前成绩：</span>
          <span class="text-white font-bold text-[20px]">2000米 / 70分钟</span>
          <span class="text-gray-400 text-[14px]">≈ 3:30/百米</span>
        </div>
        <div class="w-px h-6 bg-slate-600"></div>
        <div class="flex items-center gap-3">
          <span class="text-amber-400 font-mono text-[14px]">目标成绩：</span>
          <span class="text-amber-300 font-bold text-[20px]">2000米 &lt; 60分钟</span>
          <span class="text-gray-400 text-[14px]">≈ 3:00/百米</span>
        </div>
        <div class="w-px h-6 bg-slate-600"></div>
        <div class="flex items-center gap-3">
          <span class="text-emerald-400 font-mono text-[14px]">需要提升：</span>
          <span class="text-emerald-300 font-bold text-[20px]">约14%</span>
          <span class="text-gray-400 text-[14px]">配速</span>
        </div>
      </div>
    </div>

    <!-- 四大问题 -->
    <div class="grid grid-cols-2 gap-4 flex-1">

      <!-- 问题1 -->
      <div class="bg-gradient-to-br from-red-900/40 to-red-800/20 border border-red-500/40 p-5 rounded-lg">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-9 h-9 bg-red-500 text-white flex items-center justify-center font-mono text-[13px] rounded">01</div>
          <h4 class="text-[20px] font-bold text-red-300" style="font-family: 'Noto Sans SC', sans-serif;">划水效率低</h4>
          <span class="ml-auto px-2 py-1 bg-red-500/20 text-red-400 text-[11px] font-mono rounded">影响极大 ⭐⭐⭐⭐⭐</span>
        </div>
        <p class="text-gray-300 text-[15px] leading-relaxed">手臂划水"漏水"、路径错误是速度慢的首要原因。高肘抱水（High Elbow Catch）技术可减少15-25%水阻。建议每100米划手次数从85次优化至68-72次。</p>
      </div>

      <!-- 问题2 -->
      <div class="bg-gradient-to-br from-orange-900/40 to-orange-800/20 border border-orange-500/40 p-5 rounded-lg">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-9 h-9 bg-orange-500 text-white flex items-center justify-center font-mono text-[13px] rounded">02</div>
          <h4 class="text-[20px] font-bold text-orange-300" style="font-family: 'Noto Sans SC', sans-serif;">腿部下沉</h4>
          <span class="ml-auto px-2 py-1 bg-orange-500/20 text-orange-400 text-[11px] font-mono rounded">影响较大 ⭐⭐⭐⭐</span>
        </div>
        <p class="text-gray-300 text-[15px] leading-relaxed">腿部下沉增大水阻，迫使身体消耗更多体能来维持速度。需通过侧踢腿练习和夹腿浮标训练，建立水平流线型体位，降低阻力约20%。</p>
      </div>

      <!-- 问题3 -->
      <div class="bg-gradient-to-br from-yellow-900/40 to-yellow-800/20 border border-yellow-500/40 p-5 rounded-lg">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-9 h-9 bg-yellow-500 text-white flex items-center justify-center font-mono text-[13px] rounded">03</div>
          <h4 class="text-[20px] font-bold text-yellow-300" style="font-family: 'Noto Sans SC', sans-serif;">呼吸节奏乱</h4>
          <span class="ml-auto px-2 py-1 bg-yellow-500/20 text-yellow-400 text-[11px] font-mono rounded">影响中等 ⭐⭐⭐</span>
        </div>
        <p class="text-gray-300 text-[15px] leading-relaxed">频繁换气破坏身体流线位置，每次转头都造成速度损失。呼吸管训练能消除换气动作干扰，专注划水技术提升，建议每3次划手换气一次。</p>
      </div>

      <!-- 问题4 -->
      <div class="bg-gradient-to-br from-blue-900/40 to-blue-800/20 border border-blue-500/40 p-5 rounded-lg">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-9 h-9 bg-blue-500 text-white flex items-center justify-center font-mono text-[13px] rounded">04</div>
          <h4 class="text-[20px] font-bold text-blue-300" style="font-family: 'Noto Sans SC', sans-serif;">转身蹬壁低效</h4>
          <span class="ml-auto px-2 py-1 bg-blue-500/20 text-blue-400 text-[11px] font-mono rounded">影响较小 ⭐⭐</span>
        </div>
        <p class="text-gray-300 text-[15px] leading-relaxed">2000米共20次触壁转身，每次低效转身浪费2-3秒。优化转身动作可节省约40-60秒总时间。但对老年人，技术和效率优化回报更高。</p>
      </div>

    </div>

    <!-- 底部结论 -->
    <div class="mt-4 p-3 bg-cyan-900/30 border border-cyan-500/40 rounded-lg">
      <p class="text-cyan-300 text-[15px] font-mono text-center">
        // KEY INSIGHT: 对69岁游泳者，<span class="text-white font-bold">技术改善的收益远大于体能训练</span>。一次技术纠正可提升速度20%以上。
      </p>
    </div>

  </div>
</div>
`);window.slideDataMap.set(4,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-950">
  <div class="absolute inset-0 opacity-20">
    <div class="absolute top-1/4 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
    <div class="absolute top-1/4 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
    <div class="absolute top-1/4 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
  </div>

  <div class="w-[1350px] h-[720px] mx-auto my-[45px] p-8 relative z-10 flex flex-col">
    
    <!-- 标题 -->
    <div class="text-center mb-6">
      <div class="inline-flex items-center gap-2 bg-cyan-500/20 px-5 py-2 rounded-full mb-3">
        <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
        <span class="text-cyan-400 font-mono text-[13px] tracking-wider">TRAINING TOOLS</span>
      </div>
      <h2 class="text-[38px] font-bold text-white mb-1" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">三大核心训练工具</h2>
      <p class="text-gray-400 text-[15px] font-mono">技术放大镜 · 隔离强化 · 感知加速</p>
    </div>

    <!-- 三大工具卡片 -->
    <div class="grid grid-cols-3 gap-5 flex-1">
      
      <!-- 呼吸管 -->
      <div class="bg-slate-900/80 border border-cyan-500/40 rounded-xl p-5 flex flex-col">
        <div class="text-center mb-4">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/20 border-2 border-cyan-400 mb-3">
            <span class="text-3xl">🤿</span>
          </div>
          <h3 class="text-[22px] font-bold text-cyan-300 mb-1" style="font-family: 'Noto Sans SC', sans-serif;">呼吸管</h3>
          <p class="text-gray-400 text-[13px] font-mono">Snorkel</p>
        </div>
        <div class="bg-cyan-900/30 rounded-lg p-3 mb-3">
          <p class="text-cyan-200 text-[14px] font-semibold mb-1">核心作用</p>
          <p class="text-gray-300 text-[13px] leading-relaxed">消除换气动作，大脑100%专注划水技术和身体平衡位置</p>
        </div>
        <div class="space-y-2 flex-1">
          <div class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></div>
            <p class="text-gray-300 text-[13px]">针对：身体位置、划水效率</p>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></div>
            <p class="text-gray-300 text-[13px]">建议占训练量：<span class="text-cyan-400 font-bold">30%</span></p>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0"></div>
            <p class="text-gray-300 text-[13px]">注意：初用先适应5分钟</p>
          </div>
        </div>
        <div class="mt-3 pt-3 border-t border-cyan-500/20">
          <p class="text-cyan-400 text-[12px] font-mono">// 单独使用，专攻技术感知</p>
        </div>
      </div>

      <!-- 夹腿浮标 -->
      <div class="bg-slate-900/80 border border-amber-500/40 rounded-xl p-5 flex flex-col">
        <div class="text-center mb-4">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400 mb-3">
            <span class="text-3xl">🏊</span>
          </div>
          <h3 class="text-[22px] font-bold text-amber-300 mb-1" style="font-family: 'Noto Sans SC', sans-serif;">夹腿浮标</h3>
          <p class="text-gray-400 text-[13px] font-mono">Pull Buoy</p>
        </div>
        <div class="bg-amber-900/30 rounded-lg p-3 mb-3">
          <p class="text-amber-200 text-[14px] font-semibold mb-1">核心作用</p>
          <p class="text-gray-300 text-[13px] leading-relaxed">托起下半身，双腿静止，100%精力集中手臂划水训练</p>
        </div>
        <div class="space-y-2 flex-1">
          <div class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0"></div>
            <p class="text-gray-300 text-[13px]">针对：划水力量、节奏感</p>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0"></div>
            <p class="text-gray-300 text-[13px]">建议占训练量：<span class="text-amber-400 font-bold">40%</span></p>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0"></div>
            <p class="text-gray-300 text-[13px]">注意：夹在大腿中上部</p>
          </div>
        </div>
        <div class="mt-3 pt-3 border-t border-amber-500/20">
          <p class="text-amber-400 text-[12px] font-mono">// 每次训练都可使用</p>
        </div>
      </div>

      <!-- 手蹼 -->
      <div class="bg-slate-900/80 border border-emerald-500/40 rounded-xl p-5 flex flex-col">
        <div class="text-center mb-4">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 mb-3">
            <span class="text-3xl">🖐️</span>
          </div>
          <h3 class="text-[22px] font-bold text-emerald-300 mb-1" style="font-family: 'Noto Sans SC', sans-serif;">手蹼</h3>
          <p class="text-gray-400 text-[13px] font-mono">Paddle</p>
        </div>
        <div class="bg-emerald-900/30 rounded-lg p-3 mb-3">
          <p class="text-emerald-200 text-[14px] font-semibold mb-1">核心作用</p>
          <p class="text-gray-300 text-[13px] leading-relaxed">放大划水面积，强化高肘感知，错误动作立即被水阻惩罚</p>
        </div>
        <div class="space-y-2 flex-1">
          <div class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></div>
            <p class="text-gray-300 text-[13px]">针对：抱水技术、推水力量</p>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></div>
            <p class="text-gray-300 text-[13px]">建议占训练量：<span class="text-emerald-400 font-bold">20%</span></p>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></div>
            <p class="text-gray-300 text-[13px]">注意：选中小号，保护肩关节</p>
          </div>
        </div>
        <div class="mt-3 pt-3 border-t border-emerald-500/20">
          <p class="text-emerald-400 text-[12px] font-mono">// 隔天使用，避免劳损</p>
        </div>
      </div>

    </div>

    <!-- 黄金组合说明 -->
    <div class="mt-4 p-3 bg-purple-900/40 border border-purple-500/40 rounded-xl">
      <div class="flex items-center gap-6 justify-center">
        <div class="flex items-center gap-2">
          <span class="text-amber-400 font-bold text-[15px]">浮标 + 手蹼</span>
          <span class="text-gray-400 text-[14px]">= 最经典划水强化组合 ⭐⭐⭐</span>
        </div>
        <div class="w-px h-5 bg-purple-500/40"></div>
        <div class="flex items-center gap-2">
          <span class="text-cyan-400 font-bold text-[15px]">浮标 + 呼吸管</span>
          <span class="text-gray-400 text-[14px]">= 双工具组合，技术感知最强 ⭐⭐</span>
        </div>
        <div class="w-px h-5 bg-purple-500/40"></div>
        <div class="flex items-center gap-2">
          <span class="text-white font-bold text-[15px]">无工具裸泳</span>
          <span class="text-gray-400 text-[14px]">= 检验技术转化效果 10%</span>
        </div>
      </div>
    </div>

  </div>
</div>
`);window.slideDataMap.set(5,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden bg-slate-50">
  <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col">
    
    <!-- 主标题 -->
    <div class="mb-5">
      <div class="flex items-center gap-3 mb-1">
        <div class="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center text-white text-[16px]">🤿</div>
        <h2 class="text-[36px] font-bold text-slate-700" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">呼吸管：技术放大镜</h2>
        <span class="ml-3 px-3 py-1 bg-cyan-100 text-cyan-700 text-[13px] rounded-full font-semibold">占训练量30%</span>
      </div>
      <p class="text-[15px] text-slate-500 ml-13">原理：呼吸外包给管子，大脑100%专注水感和身体位置，是技术改善效率最高的工具</p>
    </div>

    <!-- 阶梯递进布局 -->
    <div class="flex gap-5 flex-1">
      
      <!-- 练习1 -->
      <div class="flex-1 flex flex-col">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center text-[16px] font-bold text-white">1</div>
          <h3 class="text-[19px] font-bold text-slate-700">呼吸管+正常游</h3>
        </div>
        <p class="text-[13px] leading-relaxed text-slate-500 mb-3">50米×6组，感受头部不转动时身体是否水平。注意：头微低，眼睛看池底45°方向。组间休息20秒。</p>
        <div class="bg-cyan-50 border-l-4 border-cyan-500 p-3 rounded-r-lg mt-auto">
          <p class="text-cyan-700 text-[12px] font-semibold">目标配速</p>
          <p class="text-cyan-800 text-[16px] font-bold">维持当前速度</p>
        </div>
      </div>

      <!-- 练习2 -->
      <div class="flex-1 flex flex-col pt-6">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center text-[16px] font-bold text-white">2</div>
          <h3 class="text-[19px] font-bold text-slate-700">呼吸管+单臂划水 ⭐</h3>
        </div>
        <p class="text-[13px] leading-relaxed text-slate-500 mb-3">一臂前伸，另一臂做完整划水，感受入水到推水全程高肘抱水。50米×4组，换手再做4组。</p>
        <div class="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg mt-auto">
          <p class="text-blue-700 text-[12px] font-semibold">训练重点</p>
          <p class="text-blue-800 text-[16px] font-bold">感受高肘抱水</p>
        </div>
      </div>

      <!-- 练习3 -->
      <div class="flex-1 flex flex-col pt-12">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 bg-slate-600 rounded-xl flex items-center justify-center text-[16px] font-bold text-white">3</div>
          <h3 class="text-[19px] font-bold text-slate-700">呼吸管+慢动作游</h3>
        </div>
        <p class="text-[13px] leading-relaxed text-slate-500 mb-3">有意识放慢每一个动作，感受高肘抱水的"抓水感"和推水的阻力反馈。100米×4组。</p>
        <div class="bg-slate-100 border-l-4 border-slate-500 p-3 rounded-r-lg mt-auto">
          <p class="text-slate-600 text-[12px] font-semibold">训练效果</p>
          <p class="text-slate-700 text-[16px] font-bold">动作精准感知</p>
        </div>
      </div>

      <!-- 练习4 -->
      <div class="flex-1 flex flex-col pt-18">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-[16px] font-bold text-white">4</div>
          <h3 class="text-[19px] font-bold text-slate-700">计划划手次数</h3>
        </div>
        <p class="text-[13px] leading-relaxed text-slate-500 mb-3">每50米目标控制在32-35次划手。超过目标次数即说明划水效率低。这是量化进步最直接的指标。</p>
        <div class="bg-indigo-50 border-l-4 border-indigo-500 p-3 rounded-r-lg mt-auto">
          <p class="text-indigo-700 text-[12px] font-semibold">量化目标</p>
          <p class="text-indigo-800 text-[16px] font-bold">≤35次/50米</p>
        </div>
      </div>

    </div>

    <!-- 底部注意事项 -->
    <div class="mt-4 grid grid-cols-3 gap-4">
      <div class="flex items-center gap-2 p-2 bg-amber-50 border border-amber-200 rounded-lg">
        <span class="text-amber-500 text-lg">⚠️</span>
        <p class="text-[13px] text-amber-700">初用时先在浅水区适应5分钟</p>
      </div>
      <div class="flex items-center gap-2 p-2 bg-blue-50 border border-blue-200 rounded-lg">
        <span class="text-blue-500 text-lg">💡</span>
        <p class="text-[13px] text-blue-700">保持头部自然中立位，不要抬头</p>
      </div>
      <div class="flex items-center gap-2 p-2 bg-green-50 border border-green-200 rounded-lg">
        <span class="text-green-500 text-lg">✅</span>
        <p class="text-[13px] text-green-700">技术感知改善效果最佳工具</p>
      </div>
    </div>

  </div>
</div>
`);window.slideDataMap.set(6,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
  <div class="w-[1350px] h-[720px] mx-auto my-[45px] relative">
    <!-- 网格背景 -->
    <div class="absolute inset-0 opacity-20" style="background-image: linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px); background-size: 40px 40px;"></div>
    <!-- 扫描线效果 -->
    <div class="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
    <div class="absolute top-1/2 left-0 right-0 h-20" style="background: linear-gradient(to bottom, rgba(0,255,255,0.1), transparent, rgba(0,255,255,0.1)); transform: translateY(-50%);"></div>
    
    <div class="relative z-10 flex items-center justify-center h-full">
      <div class="text-center">
        <div class="text-[44px] font-bold text-cyan-500 mb-4 font-mono">
          <span class="inline-block border-2 border-cyan-500 px-6 py-3">&lt; 02 /&gt;</span>
        </div>
        <h1 class="text-[52px] font-bold text-white mb-3" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">三大工具详解</h1>
        <p class="text-[22px] text-cyan-400" style="font-family: 'Noto Sans SC', sans-serif;">浮标 · 呼吸管 · 手蹼</p>
        <div class="flex items-center justify-center gap-3 mt-6">
          <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
          <div class="w-2 h-2 bg-amber-400 rounded-full"></div>
          <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
</div>
`);window.slideDataMap.set(7,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden bg-slate-50">
  <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col">
    
    <!-- 主标题 -->
    <div class="flex items-center gap-3 mb-5">
      <div class="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-white text-[16px]">🏊</div>
      <h2 class="text-[36px] font-bold text-slate-700" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">夹腿浮标：划水专项强化</h2>
      <span class="ml-3 px-3 py-1 bg-amber-100 text-amber-700 text-[13px] rounded-full font-semibold">占训练量40%</span>
    </div>

    <!-- 六宫格布局 -->
    <div class="grid grid-cols-3 grid-rows-2 gap-4 flex-1">
      
      <!-- 左上: 原理 -->
      <div class="flex flex-col bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
        <div class="flex items-center gap-2 mb-2">
          <div class="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center text-white text-[13px] font-bold">原</div>
          <h3 class="text-[18px] font-bold text-slate-700">工作原理</h3>
        </div>
        <p class="text-[13px] leading-relaxed text-slate-500 flex-1">下半身浮起，双腿完全静止，100%精力用在手臂。像有支架托着你游泳，让你真实感受到"纯手臂游泳"的节奏与力量。</p>
        <div class="mt-2 text-center">
          <span class="text-amber-600 text-[12px] font-semibold">每次训练都可使用</span>
        </div>
      </div>

      <!-- 中上: 练习1 -->
      <div class="flex flex-col bg-white rounded-xl p-4 border border-amber-200 shadow-sm">
        <div class="flex items-center gap-2 mb-2">
          <div class="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-white font-bold">1</div>
          <h3 class="text-[18px] font-bold text-slate-700">基准测试</h3>
        </div>
        <p class="text-[13px] leading-relaxed text-slate-500 flex-1">100米×4组，计时并记录划手次数。建立个人基准数据，每周对比进步。这是量化训练效果最直接的方法。</p>
        <div class="bg-amber-50 px-3 py-2 rounded-lg border-l-3 border-amber-500 mt-2">
          <span class="text-amber-700 text-[13px] font-bold">目标：每100米划手次数逐周减少</span>
        </div>
      </div>

      <!-- 右上: 练习2 -->
      <div class="flex flex-col bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
        <div class="flex items-center gap-2 mb-2">
          <div class="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center text-white font-bold">2</div>
          <h3 class="text-[18px] font-bold text-slate-700">划距优先</h3>
        </div>
        <p class="text-[13px] leading-relaxed text-slate-500 flex-1">每次划水尽量"推到底"，手划过大腿根才出水，感受充分推水。200米×3组，组间休息45秒。</p>
        <div class="bg-slate-100 px-3 py-2 rounded-lg mt-2">
          <span class="text-slate-600 text-[13px] font-bold">平均交付周期：4周见效</span>
        </div>
      </div>

      <!-- 左下: 练习3 -->
      <div class="flex flex-col bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
        <div class="flex items-center gap-2 mb-2">
          <div class="w-8 h-8 bg-slate-500 rounded-lg flex items-center justify-center text-white font-bold">3</div>
          <h3 class="text-[18px] font-bold text-slate-700">节奏变化</h3>
        </div>
        <p class="text-[13px] leading-relaxed text-slate-500 flex-1">前50米慢频率大划距（感受控制），后50米适当提频但不牺牲划距。100米×6组，训练划频与划距的平衡。</p>
        <div class="bg-white px-3 py-2 rounded-lg border-l-3 border-slate-400 mt-2">
          <span class="text-slate-700 text-[13px] font-bold">响应时间：身体感知提升明显</span>
        </div>
      </div>

      <!-- 中下: 双工具组合 ⭐⭐⭐ -->
      <div class="flex flex-col bg-gradient-to-br from-amber-50 to-cyan-50 rounded-xl p-4 border-2 border-amber-400 shadow-sm">
        <div class="flex items-center gap-2 mb-2">
          <div class="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-white font-bold">4</div>
          <h3 class="text-[18px] font-bold text-slate-700">双工具组合 ⭐⭐⭐</h3>
        </div>
        <p class="text-[13px] leading-relaxed text-slate-600 flex-1">浮标+呼吸管同时使用！清楚感受划水是否"漏水"。100米×6组，是感知最强的练习组合，强烈推荐。</p>
        <div class="flex gap-3 mt-2">
          <div class="text-center">
            <div class="text-[11px] text-slate-500 mb-0.5">续推率</div>
            <div class="text-[15px] text-amber-700 font-bold">最高</div>
          </div>
          <div class="text-center">
            <div class="text-[11px] text-slate-500 mb-0.5">感知</div>
            <div class="text-[15px] text-amber-700 font-bold">极强</div>
          </div>
        </div>
      </div>

      <!-- 右下: 注意事项 -->
      <div class="flex flex-col bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
        <div class="flex items-center gap-2 mb-2">
          <div class="w-8 h-8 bg-red-400 rounded-lg flex items-center justify-center">
            <span class="text-white text-[14px]">⚠️</span>
          </div>
          <h3 class="text-[18px] font-bold text-slate-700">使用注意</h3>
        </div>
        <p class="text-[13px] leading-relaxed text-slate-500 flex-1">浮标夹在大腿<strong>中上部</strong>（不要夹太低）。位置过低会造成腰椎压力，影响身体流线型。游泳后注意腰部拉伸。</p>
        <div class="flex gap-2 flex-wrap mt-2">
          <span class="px-2 py-1 text-slate-500 text-[11px] bg-slate-100 rounded">大腿中上部</span>
          <span class="px-2 py-1 text-slate-500 text-[11px] bg-slate-100 rounded">保护腰椎</span>
        </div>
      </div>

    </div>

  </div>
</div>
`);window.slideDataMap.set(8,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden bg-white">
  <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col">
    
    <!-- 标题区 -->
    <div class="mb-6 flex items-center gap-3">
      <div class="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white text-[16px]">🖐️</div>
      <div>
        <h2 class="text-[36px] font-bold text-slate-800" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">手蹼：力量感知加速器</h2>
        <p class="text-slate-500 text-[14px]">增大划水面积20-50%，错误动作被水阻惩罚，正确动作推力倍增 · 占训练量20%</p>
      </div>
      <div class="ml-auto bg-amber-50 border border-amber-300 rounded-lg px-4 py-2">
        <p class="text-amber-700 text-[12px] font-semibold">69岁推荐</p>
        <p class="text-amber-800 text-[15px] font-bold">中小号手蹼</p>
      </div>
    </div>
    
    <!-- 网格布局 -->
    <div class="grid grid-cols-2 gap-8 flex-1">
      
      <!-- 左上: 适应期 -->
      <div class="flex flex-col">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-9 h-9 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">1</div>
          <h3 class="text-[21px] font-semibold text-slate-800">适应期练习（前2周）</h3>
          <span class="px-2 py-0.5 bg-red-100 text-red-600 text-[11px] rounded font-semibold">必须遵守</span>
        </div>
        <p class="text-slate-600 text-[15px] leading-relaxed mb-4">每次仅用10-15分钟！50米×4组，感受入水角度变化，拇指先入水。肩关节还未适应手蹼阻力，强行延长会导致肩袖损伤。</p>
        <div class="grid grid-cols-2 gap-3 mt-auto">
          <div class="text-center py-3 bg-emerald-50 rounded-lg border border-emerald-200">
            <div class="text-[22px] font-bold text-emerald-700">10-15</div>
            <div class="text-[12px] text-slate-400 mt-0.5">分钟/次</div>
          </div>
          <div class="text-center py-3 bg-emerald-50 rounded-lg border border-emerald-200">
            <div class="text-[22px] font-bold text-emerald-700">2周</div>
            <div class="text-[12px] text-slate-400 mt-0.5">适应时间</div>
          </div>
        </div>
      </div>
      
      <!-- 右上: 单臂练习 -->
      <div class="flex flex-col">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">2</div>
          <h3 class="text-[21px] font-semibold text-slate-800">单臂对比练习</h3>
        </div>
        <p class="text-slate-600 text-[15px] leading-relaxed mb-4">单手戴蹼，另一手正常，感受两只手推水力量的巨大差距。50米×4组，两手交替进行，这种对比感知最强烈。</p>
        <div class="flex gap-3 flex-wrap mt-auto">
          <span class="px-3 py-2 text-slate-600 text-[13px] bg-blue-50 rounded-lg border border-blue-200">感受力量差异</span>
          <span class="px-3 py-2 text-slate-600 text-[13px] bg-blue-50 rounded-lg border border-blue-200">两手交替</span>
          <span class="px-3 py-2 text-slate-600 text-[13px] bg-blue-50 rounded-lg border border-blue-200">50米×4组</span>
        </div>
      </div>
      
      <!-- 左下: 经典组合 ⭐⭐⭐ -->
      <div class="flex flex-col bg-emerald-50 border border-emerald-300 rounded-xl p-4">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-9 h-9 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">3</div>
          <h3 class="text-[21px] font-semibold text-slate-800">手蹼+浮标经典组合 ⭐⭐⭐</h3>
        </div>
        <p class="text-slate-600 text-[15px] leading-relaxed mb-4">最常用的划水强化训练方式！200米×4组，休息60秒。目标：比不用工具快15-20秒/200米。</p>
        <div class="flex items-center gap-4">
          <div class="text-center">
            <div class="text-[11px] text-slate-500 mb-0.5">提速目标</div>
            <div class="text-[18px] text-emerald-700 font-bold">+15~20秒</div>
          </div>
          <div class="w-px h-8 bg-emerald-300"></div>
          <div class="text-center">
            <div class="text-[11px] text-slate-500 mb-0.5">组数</div>
            <div class="text-[18px] text-emerald-700 font-bold">4×200米</div>
          </div>
        </div>
      </div>
      
      <!-- 右下: 脱摘对比 -->
      <div class="flex flex-col">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-9 h-9 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold">4</div>
          <h3 class="text-[21px] font-semibold text-slate-800">脱摘对比训练 ⭐</h3>
          <span class="px-2 py-0.5 bg-amber-100 text-amber-600 text-[11px] rounded font-semibold">技术迁移关键</span>
        </div>
        <p class="text-slate-600 text-[15px] leading-relaxed mb-4">100米戴蹼 → 立刻100米不戴蹼。不戴蹼时努力"记住"戴蹼的感觉。这是将工具训练效果迁移到裸泳的唯一方法！</p>
        <div class="flex gap-3 flex-wrap mt-auto">
          <span class="px-3 py-2 text-slate-600 text-[13px] bg-amber-50 rounded-lg border border-amber-200">100米戴蹼</span>
          <span class="text-amber-500 text-[20px] self-center">→</span>
          <span class="px-3 py-2 text-slate-600 text-[13px] bg-amber-50 rounded-lg border border-amber-200">100米裸泳</span>
        </div>
      </div>
      
    </div>
  </div>
</div>
`);window.slideDataMap.set(9,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
  <div class="w-[1350px] h-[720px] mx-auto my-[45px] relative">
    <div class="absolute inset-0 opacity-20" style="background-image: linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px); background-size: 40px 40px;"></div>
    <div class="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
    <div class="absolute top-1/2 left-0 right-0 h-20" style="background: linear-gradient(to bottom, rgba(0,255,255,0.1), transparent, rgba(0,255,255,0.1)); transform: translateY(-50%);"></div>
    
    <div class="relative z-10 flex items-center justify-center h-full">
      <div class="text-center">
        <div class="text-[44px] font-bold text-cyan-500 mb-4 font-mono">
          <span class="inline-block border-2 border-cyan-500 px-6 py-3">&lt; 03 /&gt;</span>
        </div>
        <h1 class="text-[52px] font-bold text-white mb-3" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">12周科学训练计划</h1>
        <p class="text-[22px] text-cyan-400" style="font-family: 'Noto Sans SC', sans-serif;">三阶段 · 循序渐进 · 技术 → 效率 → 速度</p>
        <div class="flex items-center justify-center gap-4 mt-8">
          <div class="px-4 py-2 border border-blue-400/60 text-blue-300 text-[15px] rounded-lg">第1-4周：技术重建</div>
          <span class="text-cyan-500 text-2xl">→</span>
          <div class="px-4 py-2 border border-cyan-400/60 text-cyan-300 text-[15px] rounded-lg">第5-8周：效率提升</div>
          <span class="text-cyan-500 text-2xl">→</span>
          <div class="px-4 py-2 border border-amber-400/60 text-amber-300 text-[15px] rounded-lg">第9-12周：速度积累</div>
        </div>
      </div>
    </div>
  </div>
</div>
`);window.slideDataMap.set(10,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden bg-white">
  <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col">
    
    <!-- 标题 -->
    <div class="flex items-center gap-4 mb-6">
      <div class="px-4 py-1 bg-blue-700 text-white text-[14px] rounded font-semibold">第一阶段</div>
      <h2 class="text-[38px] font-bold text-slate-800" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">技术重建（第1-4周）</h2>
      <div class="ml-auto flex gap-4">
        <div class="text-center px-4 py-1 bg-slate-100 rounded-lg">
          <span class="text-[13px] text-slate-500">每周</span><span class="text-[18px] font-bold text-slate-700 ml-1">3次</span>
        </div>
        <div class="text-center px-4 py-1 bg-slate-100 rounded-lg">
          <span class="text-[13px] text-slate-500">每次</span><span class="text-[18px] font-bold text-slate-700 ml-1">45-60分钟</span>
        </div>
      </div>
    </div>
    
    <!-- 左右布局 -->
    <div class="flex gap-10 flex-1">
      
      <!-- 左侧: 四项核心练习 -->
      <div class="flex-1 flex flex-col gap-5">
        
        <!-- 练习1 -->
        <div class="flex gap-4 items-start">
          <div class="w-[90px] flex-shrink-0">
            <div class="px-2 py-1 bg-blue-600 text-white text-[11px] rounded font-semibold inline-block">呼吸管</div>
            <div class="text-[12px] text-slate-400 mt-1">周一主练</div>
          </div>
          <div class="flex-1">
            <h3 class="text-[19px] font-semibold text-slate-800 mb-1">单臂划水练习</h3>
            <p class="text-slate-600 text-[13px] leading-relaxed">感受高肘抱水技术，一臂前伸一臂划，入水时肘部先弯曲，手掌向后推水。每组50米×4组，换手再做4组。是技术改善最快的练习。</p>
          </div>
        </div>
        
        <!-- 练习2 -->
        <div class="flex gap-4 items-start">
          <div class="w-[90px] flex-shrink-0">
            <div class="px-2 py-1 bg-slate-600 text-white text-[11px] rounded font-semibold inline-block">侧踢腿</div>
            <div class="text-[12px] text-slate-400 mt-1">解决下沉</div>
          </div>
          <div class="flex-1">
            <h3 class="text-[19px] font-semibold text-slate-800 mb-1">侧踢腿练习</h3>
            <p class="text-slate-600 text-[13px] leading-relaxed">侧身水平位打腿前进，是解决腿部下沉最有效的基础练习。每组25米×6组，建立流线型身体姿势。</p>
          </div>
        </div>
        
        <!-- 练习3 -->
        <div class="flex gap-4 items-start">
          <div class="w-[90px] flex-shrink-0">
            <div class="px-2 py-1 bg-amber-600 text-white text-[11px] rounded font-semibold inline-block">浮标</div>
            <div class="text-[12px] text-slate-400 mt-1">周三主练</div>
          </div>
          <div class="flex-1">
            <h3 class="text-[19px] font-semibold text-slate-800 mb-1">浮标基础划水（基准建立）</h3>
            <p class="text-slate-600 text-[13px] leading-relaxed">100米×4组，计时并记录每100米划手次数。建立基准数据，每周对比进步，目标是逐步减少划手次数。</p>
          </div>
        </div>
        
        <!-- 练习4 -->
        <div class="flex gap-4 items-start">
          <div class="w-[90px] flex-shrink-0">
            <div class="px-2 py-1 bg-cyan-600 text-white text-[11px] rounded font-semibold inline-block">指尖拖水</div>
            <div class="text-[12px] text-slate-400 mt-1">恢复练习</div>
          </div>
          <div class="flex-1">
            <h3 class="text-[19px] font-semibold text-slate-800 mb-1">指尖拖水恢复练习</h3>
            <p class="text-slate-600 text-[13px] leading-relaxed">手指贴着水面从髋部拖回到头部，改善手臂出水节奏，避免手臂恢复时过高抬肘浪费能量。50米×4组。</p>
          </div>
        </div>
        
      </div>
      
      <!-- 右侧: 每周安排+预期成果 -->
      <div class="w-[360px] flex flex-col">
        <h3 class="text-[20px] font-semibold text-slate-800 mb-5">每周训练结构</h3>
        <div class="flex flex-col gap-4 flex-1">
          <div class="flex justify-between items-center pb-3 border-b border-slate-100">
            <div>
              <span class="text-[14px] text-slate-500">周一</span>
              <div class="text-[15px] font-semibold text-slate-700">呼吸管技术课</div>
            </div>
            <span class="text-[16px] font-bold text-blue-600">800-1000米</span>
          </div>
          <div class="flex justify-between items-center pb-3 border-b border-slate-100">
            <div>
              <span class="text-[14px] text-slate-500">周三</span>
              <div class="text-[15px] font-semibold text-slate-700">浮标划水课</div>
            </div>
            <span class="text-[16px] font-bold text-amber-600">1000-1200米</span>
          </div>
          <div class="flex justify-between items-center pb-3 border-b border-slate-100">
            <div>
              <span class="text-[14px] text-slate-500">周五</span>
              <div class="text-[15px] font-semibold text-slate-700">双工具组合</div>
            </div>
            <span class="text-[16px] font-bold text-cyan-600">1000米</span>
          </div>
        </div>
        
        <!-- 预期成果 -->
        <div class="mt-5 bg-blue-50 border-2 border-blue-300 rounded-xl p-4">
          <p class="text-blue-700 text-[14px] font-semibold mb-2">第4周末预期成果</p>
          <div class="text-[30px] font-bold text-blue-800">66-68分钟</div>
          <p class="text-blue-600 text-[13px] mt-1">技术改善，节省5-8秒/百米</p>
        </div>
        
        <div class="flex gap-2 mt-3 flex-wrap">
          <span class="px-2 py-1 text-slate-400 text-[11px] bg-slate-50 border border-slate-200 rounded">技术优先</span>
          <span class="px-2 py-1 text-slate-400 text-[11px] bg-slate-50 border border-slate-200 rounded">低强度</span>
          <span class="px-2 py-1 text-slate-400 text-[11px] bg-slate-50 border border-slate-200 rounded">呼吸管为主</span>
        </div>
      </div>
      
    </div>
  </div>
</div>
`);window.slideDataMap.set(11,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden bg-white">
  <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col">
    
    <!-- 标题 -->
    <div class="flex items-center gap-4 mb-6">
      <div class="px-4 py-1 bg-cyan-600 text-white text-[14px] rounded font-semibold">第二阶段</div>
      <h2 class="text-[38px] font-bold text-slate-800" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">效率提升（第5-8周）</h2>
      <div class="ml-auto flex gap-4">
        <div class="text-center px-4 py-1 bg-slate-100 rounded-lg">
          <span class="text-[13px] text-slate-500">每周</span><span class="text-[18px] font-bold text-slate-700 ml-1">3-4次</span>
        </div>
        <div class="text-center px-4 py-1 bg-slate-100 rounded-lg">
          <span class="text-[13px] text-slate-500">每次</span><span class="text-[18px] font-bold text-slate-700 ml-1">60分钟</span>
        </div>
      </div>
    </div>
    
    <!-- 三行布局 -->
    <div class="flex flex-col gap-5 flex-1">
      
      <!-- 第一行: 核心练习 -->
      <div class="flex items-center gap-8">
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-2">
            <span class="flex-shrink-0 w-9 h-9 rounded-lg bg-cyan-600 text-white text-[15px] flex items-center justify-center font-semibold">1</span>
            <h3 class="text-[20px] font-semibold text-slate-800">划手计数训练（效率核心）</h3>
          </div>
          <p class="text-slate-600 text-[15px] leading-relaxed">每游50米记录划手次数，目标每次练习少划1-2次但保持速度。目标50米控制在35次以内（当前可能85次/100米）。这是效率提升最直接的量化训练。</p>
        </div>
        <div class="w-[340px] flex flex-col gap-2">
          <div class="flex items-center justify-between py-2 border-b border-slate-100">
            <span class="text-slate-500 text-[13px]">当前划手次数（估）</span>
            <span class="text-slate-800 text-[18px] font-bold">80-90次/100米</span>
          </div>
          <div class="flex items-center justify-between py-2 border-b border-slate-100">
            <span class="text-slate-500 text-[13px]">阶段目标</span>
            <span class="text-cyan-700 text-[18px] font-bold">68-72次/100米</span>
          </div>
        </div>
      </div>
      
      <!-- 第二行: 间歇训练 -->
      <div class="flex items-center gap-8">
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-2">
            <span class="flex-shrink-0 w-9 h-9 rounded-lg bg-blue-600 text-white text-[15px] flex items-center justify-center font-semibold">2</span>
            <h3 class="text-[20px] font-semibold text-slate-800">手蹼+浮标间歇训练</h3>
          </div>
          <p class="text-slate-600 text-[15px] leading-relaxed">经典划水强化组合，5×300米，目标每300米配速3:15/百米，组间休息60秒。配合金字塔间歇：100→200→300→200→100米。</p>
        </div>
        <div class="w-[340px] flex flex-col gap-2">
          <div class="flex items-center justify-between py-2 border-b border-slate-100">
            <span class="text-slate-500 text-[13px]">间歇组数</span>
            <span class="text-slate-800 text-[18px] font-bold">5×300米</span>
          </div>
          <div class="flex items-center justify-between py-2 border-b border-slate-100">
            <span class="text-slate-500 text-[13px]">目标配速</span>
            <span class="text-blue-700 text-[18px] font-bold">3:15/百米</span>
          </div>
        </div>
      </div>
      
      <!-- 第三行: 呼吸节奏 -->
      <div class="flex items-center gap-8">
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-2">
            <span class="flex-shrink-0 w-9 h-9 rounded-lg bg-slate-600 text-white text-[15px] flex items-center justify-center font-semibold">3</span>
            <h3 class="text-[20px] font-semibold text-slate-800">呼吸节奏专项训练</h3>
          </div>
          <p class="text-slate-600 text-[15px] leading-relaxed">练习两侧换气（每3次划手换气1次）；同时加入5次划手换气训练增强肺活量。每次训练加入200米控制呼吸游。</p>
        </div>
        <div class="w-[340px] flex flex-col gap-2">
          <div class="flex items-center justify-between py-2 border-b border-slate-100">
            <span class="text-slate-500 text-[13px]">换气节律目标</span>
            <span class="text-slate-800 text-[18px] font-bold">每3划换气1次</span>
          </div>
          <div class="flex items-center justify-between py-2 border-b border-slate-100">
            <span class="text-slate-500 text-[13px]">呼吸控制练习</span>
            <span class="text-slate-700 text-[18px] font-bold">200米/次</span>
          </div>
        </div>
      </div>
      
    </div>
    
    <!-- 底部统计和预期 -->
    <div class="flex items-center justify-between pt-5 border-t border-slate-100 mt-auto">
      <div class="flex items-center gap-12">
        <div class="text-center">
          <div class="text-[26px] font-bold text-slate-800">周一</div>
          <div class="text-[13px] text-slate-400 mt-0.5">呼吸管·1200米</div>
        </div>
        <div class="w-px h-10 bg-slate-200"></div>
        <div class="text-center">
          <div class="text-[26px] font-bold text-slate-800">周三</div>
          <div class="text-[13px] text-slate-400 mt-0.5">手蹼+浮标·1500米</div>
        </div>
        <div class="w-px h-10 bg-slate-200"></div>
        <div class="text-center">
          <div class="text-[26px] font-bold text-slate-800">周五</div>
          <div class="text-[13px] text-slate-400 mt-0.5">无工具·2000米计时</div>
        </div>
        <div class="w-px h-10 bg-slate-200"></div>
        <div class="text-center">
          <div class="text-[26px] font-bold text-slate-800">周六</div>
          <div class="text-[13px] text-slate-400 mt-0.5">手蹼脱摘·800米</div>
        </div>
      </div>
      <!-- 预期成果 -->
      <div class="bg-cyan-50 border-2 border-cyan-300 rounded-xl px-6 py-3 text-center">
        <p class="text-cyan-700 text-[13px] font-semibold">第8周末预期成果</p>
        <div class="text-[28px] font-bold text-cyan-800">62-64分钟</div>
        <p class="text-cyan-600 text-[12px]">节省10-15秒/百米</p>
      </div>
    </div>
    
  </div>
</div>
`);window.slideDataMap.set(12,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden bg-slate-50">
  <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col">
    
    <!-- 主标题 -->
    <div class="flex items-center gap-4 mb-5">
      <div class="px-4 py-1 bg-amber-600 text-white text-[14px] rounded font-semibold">第三阶段</div>
      <h2 class="text-[36px] font-bold text-slate-700" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">速度积累（第9-12周）</h2>
      <div class="ml-auto flex gap-4">
        <div class="text-center px-4 py-1 bg-white rounded-lg border border-slate-200">
          <span class="text-[13px] text-slate-500">每周</span><span class="text-[18px] font-bold text-slate-700 ml-1">4次</span>
        </div>
        <div class="text-center px-4 py-1 bg-white rounded-lg border border-slate-200">
          <span class="text-[13px] text-slate-500">每次</span><span class="text-[18px] font-bold text-slate-700 ml-1">60-75分钟</span>
        </div>
      </div>
    </div>

    <!-- 主内容区 -->
    <div class="flex gap-8 flex-1">
      
      <!-- 左侧核心练习 -->
      <div class="flex-1 flex flex-col gap-5">
        <div>
          <h3 class="text-[20px] font-bold text-slate-700 mb-2 flex items-center gap-2">
            <span class="w-7 h-7 bg-amber-500 text-white rounded flex items-center justify-center text-[13px] font-bold">1</span>
            5×400米间歇训练
          </h3>
          <p class="text-[15px] leading-relaxed text-slate-500">目标每400米在7分30秒以内（折合3:07/百米），组间休息60秒。这是模拟全程2000米配速的核心训练，逐步适应目标配速的身体感觉。</p>
        </div>

        <div>
          <h3 class="text-[20px] font-bold text-slate-700 mb-2 flex items-center gap-2">
            <span class="w-7 h-7 bg-blue-500 text-white rounded flex items-center justify-center text-[13px] font-bold">2</span>
            10×200米间歇训练
          </h3>
          <p class="text-[15px] leading-relaxed text-slate-500">目标每200米在3分30秒以内（折合3:00/百米），组间休息45秒。短距离高强度间歇，帮助突破速度极限，建立速度感知系统。</p>
        </div>

        <div>
          <h3 class="text-[20px] font-bold text-slate-700 mb-2 flex items-center gap-2">
            <span class="w-7 h-7 bg-slate-500 text-white rounded flex items-center justify-center text-[13px] font-bold">3</span>
            模拟比赛配速训练
          </h3>
          <p class="text-[15px] leading-relaxed text-slate-500">前1000米严格按目标配速（3:00/百米）完成，后1000米全力维持。每次训练前记录心率，全程不超过140次/分钟。</p>
        </div>

        <div class="mt-auto">
          <div class="flex gap-6">
            <div class="text-center">
              <div class="text-[11px] text-slate-400 mb-0.5">每周一</div>
              <div class="text-[15px] text-slate-700 font-bold">手蹼+浮标间歇</div>
            </div>
            <div class="text-center">
              <div class="text-[11px] text-slate-400 mb-0.5">每周三</div>
              <div class="text-[15px] text-slate-700 font-bold">呼吸管技术保持</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧图片区替换为数据展示 -->
      <div class="w-[460px] flex flex-col gap-5">
        <!-- 每周训练结构 -->
        <div class="bg-white rounded-xl p-5 border border-slate-200 flex-1">
          <h3 class="text-[20px] font-bold text-slate-700 mb-4">每周四天训练结构</h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between py-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span class="text-[14px] text-slate-600">周一</span>
              </div>
              <span class="text-[15px] font-semibold text-slate-700">手蹼+浮标间歇 1500米</span>
            </div>
            <div class="flex items-center justify-between py-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span class="text-[14px] text-slate-600">周三</span>
              </div>
              <span class="text-[15px] font-semibold text-slate-700">呼吸管技术保持 1000米</span>
            </div>
            <div class="flex items-center justify-between py-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                <span class="text-[14px] text-slate-600">周五</span>
              </div>
              <span class="text-[15px] font-semibold text-red-600">全力2000米计时测试</span>
            </div>
            <div class="flex items-center justify-between py-2">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span class="text-[14px] text-slate-600">周日</span>
              </div>
              <span class="text-[15px] font-semibold text-slate-700">浮标轻松恢复 800米</span>
            </div>
          </div>
        </div>
        
        <!-- 最终目标 -->
        <div class="bg-amber-500 rounded-xl p-5 text-center">
          <p class="text-amber-100 text-[14px] font-semibold mb-2">第12周末最终目标</p>
          <div class="text-[40px] font-bold text-white">58-62分钟</div>
          <p class="text-amber-100 text-[14px] mt-1">60分钟以内，目标可达 ✓</p>
        </div>
      </div>

    </div>

  </div>
</div>
`);window.slideDataMap.set(13,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden bg-slate-50">
  <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col">
    
    <div class="mb-5">
      <h2 class="text-[36px] font-bold text-slate-700 mb-1" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">老年人训练安全指南</h2>
      <p class="text-slate-500 text-[16px]">安全是提速的前提，所有训练进步都建立在无伤的基础上</p>
    </div>
    
    <div class="flex gap-8 flex-1">
      
      <!-- 左侧大区域 - 应该做 -->
      <div class="w-[440px] flex flex-col">
        <div class="flex items-center gap-2 mb-4">
          <div class="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white text-[16px]">✅</div>
          <h3 class="text-[22px] font-bold text-emerald-700">应该做的6件事</h3>
        </div>
        <div class="flex-1 space-y-3">
          <div class="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
            <span class="text-emerald-500 text-[16px] mt-0.5 flex-shrink-0">1.</span>
            <div>
              <p class="text-[14px] font-semibold text-slate-700">充分热身：下水前活动肩关节、颈部5-10分钟</p>
              <p class="text-[12px] text-slate-500 mt-0.5">肩关节是游泳最常见损伤部位</p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
            <span class="text-emerald-500 text-[16px] mt-0.5 flex-shrink-0">2.</span>
            <div>
              <p class="text-[14px] font-semibold text-slate-700">心率监控：训练中保持110-130次/分，不超过140</p>
              <p class="text-[12px] text-slate-500 mt-0.5">简单测试：能说话但说不了完整句子为合适强度</p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
            <span class="text-emerald-500 text-[16px] mt-0.5 flex-shrink-0">3.</span>
            <div>
              <p class="text-[14px] font-semibold text-slate-700">循序渐进：每周训练量增加不超过10%</p>
              <p class="text-[12px] text-slate-500 mt-0.5">老年人恢复期约48-72小时，切勿急于求成</p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
            <span class="text-emerald-500 text-[16px] mt-0.5 flex-shrink-0">4.</span>
            <div>
              <p class="text-[14px] font-semibold text-slate-700">充分休息：高强度训练间隔至少48小时</p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
            <span class="text-emerald-500 text-[16px] mt-0.5 flex-shrink-0">5.</span>
            <div>
              <p class="text-[14px] font-semibold text-slate-700">补充水分：每次训练补水500ml以上</p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
            <span class="text-emerald-500 text-[16px] mt-0.5 flex-shrink-0">6.</span>
            <div>
              <p class="text-[14px] font-semibold text-slate-700">工具适量：手蹼从中小号开始，浮标夹大腿中上部</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 右侧内容 -->
      <div class="flex-1 flex flex-col gap-5">
        
        <!-- 避免的4件事 -->
        <div>
          <div class="flex items-center gap-2 mb-3">
            <div class="w-7 h-7 bg-red-500 rounded-lg flex items-center justify-center text-white text-[13px]">❌</div>
            <h3 class="text-[20px] font-bold text-red-700">应该避免的4件事</h3>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div class="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
              <span class="text-red-500 flex-shrink-0">✗</span>
              <p class="text-[13px] text-slate-700">忽视关节疼痛（尤其肩部）</p>
            </div>
            <div class="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
              <span class="text-red-500 flex-shrink-0">✗</span>
              <p class="text-[13px] text-slate-700">连续多天高强度训练</p>
            </div>
            <div class="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
              <span class="text-red-500 flex-shrink-0">✗</span>
              <p class="text-[13px] text-slate-700">追求速度忽视技术</p>
            </div>
            <div class="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
              <span class="text-red-500 flex-shrink-0">✗</span>
              <p class="text-[13px] text-slate-700">空腹进行高强度训练</p>
            </div>
          </div>
        </div>
        
        <!-- 工具风险提示 -->
        <div>
          <div class="flex items-center gap-2 mb-3">
            <div class="w-7 h-7 bg-amber-500 rounded-lg flex items-center justify-center text-white text-[13px]">⚠</div>
            <h3 class="text-[20px] font-bold text-amber-700">工具特别风险提示</h3>
          </div>
          <div class="space-y-2">
            <div class="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
              <span class="text-amber-500 font-bold text-[13px] flex-shrink-0">手蹼：</span>
              <p class="text-[13px] text-slate-600">大号手蹼肩袖损伤风险高。<strong>69岁选中小号</strong>，首次使用每次不超过15分钟，感觉肩痛立即停止。</p>
            </div>
            <div class="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
              <span class="text-amber-500 font-bold text-[13px] flex-shrink-0">呼吸管：</span>
              <p class="text-[13px] text-slate-600">颈椎不适风险。<strong>保持头部自然中立位</strong>，不要抬头，使用前浅水区适应。颈椎病患者需医生评估。</p>
            </div>
            <div class="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
              <span class="text-amber-500 font-bold text-[13px] flex-shrink-0">浮标：</span>
              <p class="text-[13px] text-slate-600">腰椎压力风险。<strong>夹在大腿中上部</strong>（不要夹太低），游泳后做腰部拉伸，腰椎间盘突出患者谨慎使用。</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
  </div>
</div>
`);window.slideDataMap.set(14,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden" style="background: #0A2463;">

  <!-- 背景网格 -->
  <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(rgba(62,146,204,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(62,146,204,0.4) 1px, transparent 1px); background-size: 60px 60px;"></div>

  <!-- 顶部标题栏 -->
  <div class="absolute top-0 left-0 right-0 h-[70px] flex items-center px-[60px]" style="background: rgba(62,146,204,0.15); border-bottom: 1px solid rgba(62,146,204,0.3);">
    <span class="text-[13px] font-mono text-cyan-400 mr-4">// PHASE_04</span>
    <h2 class="text-[28px] font-bold text-white" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">12周进步里程碑</h2>
    <span class="ml-4 text-[13px] text-cyan-300 opacity-70">从 70 分钟 → 60 分钟以内的完整路径</span>
  </div>

  <!-- 主体内容区 -->
  <div class="absolute top-[90px] left-0 right-0 bottom-[20px] flex items-center justify-center">

    <!-- 中心目标圆 -->
    <div class="absolute z-10 flex flex-col items-center justify-center rounded-full border-4 shadow-2xl"
         style="width: 240px; height: 240px; background: radial-gradient(circle, #F4B942 0%, #e09830 100%); border-color: #F4B942; box-shadow: 0 0 60px rgba(244,185,66,0.5);">
      <div class="text-[13px] font-bold text-amber-900 mb-1 tracking-widest">最终目标</div>
      <div class="text-[56px] font-black text-white leading-none" style="font-family: 'Montserrat', sans-serif;">&lt;60</div>
      <div class="text-[18px] font-bold text-amber-100 mt-1">分钟</div>
      <div class="text-[12px] text-amber-200 mt-1">2000米自由泳</div>
    </div>

    <!-- 四条射线 -->
    <!-- 左上 → 中心 -->
    <div class="absolute" style="width: 2px; height: 180px; background: linear-gradient(to bottom, rgba(62,146,204,0.8), rgba(62,146,204,0.1)); top: 90px; left: calc(50% - 200px); transform: rotate(45deg); transform-origin: bottom center;"></div>
    <!-- 右上 → 中心 -->
    <div class="absolute" style="width: 2px; height: 180px; background: linear-gradient(to bottom, rgba(62,146,204,0.8), rgba(62,146,204,0.1)); top: 90px; right: calc(50% - 200px); transform: rotate(-45deg); transform-origin: bottom center;"></div>
    <!-- 左下 → 中心 -->
    <div class="absolute" style="width: 2px; height: 180px; background: linear-gradient(to top, rgba(62,146,204,0.8), rgba(62,146,204,0.1)); bottom: 80px; left: calc(50% - 200px); transform: rotate(-45deg); transform-origin: top center;"></div>
    <!-- 右下 → 中心 -->
    <div class="absolute" style="width: 2px; height: 180px; background: linear-gradient(to top, rgba(62,146,204,0.8), rgba(62,146,204,0.1)); bottom: 80px; right: calc(50% - 200px); transform: rotate(45deg); transform-origin: top center;"></div>

    <!-- 左上卡片：当前成绩 -->
    <div class="absolute rounded-xl p-5 border" style="width: 280px; top: 50px; left: 100px; background: rgba(10,36,99,0.8); border-color: rgba(62,146,204,0.5); backdrop-filter: blur(10px);">
      <div class="flex items-center gap-2 mb-3">
        <div class="w-8 h-8 rounded-lg flex items-center justify-center text-[13px] font-bold" style="background: rgba(100,116,139,0.4); color: #94a3b8;">NOW</div>
        <span class="text-[16px] font-bold text-slate-300">当前基准</span>
      </div>
      <div class="text-[40px] font-black leading-none mb-2" style="color: #94a3b8; font-family: 'Montserrat', sans-serif;">70<span class="text-[20px] font-bold ml-1">分钟</span></div>
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0"></span>
          <span class="text-[13px] text-slate-400">配速 3:30/百米</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0"></span>
          <span class="text-[13px] text-slate-400">动作效率待提升</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0"></span>
          <span class="text-[13px] text-slate-400">呼吸节奏待优化</span>
        </div>
      </div>
    </div>

    <!-- 右上卡片：第4周末 -->
    <div class="absolute rounded-xl p-5 border" style="width: 280px; top: 50px; right: 100px; background: rgba(10,36,99,0.8); border-color: rgba(62,146,204,0.6); backdrop-filter: blur(10px);">
      <div class="flex items-center gap-2 mb-3">
        <div class="w-8 h-8 rounded-lg flex items-center justify-center text-[13px] font-bold" style="background: rgba(62,146,204,0.3); color: #3E92CC;">W4</div>
        <span class="text-[16px] font-bold text-cyan-300">第一阶段结束</span>
      </div>
      <div class="text-[40px] font-black leading-none mb-2" style="color: #3E92CC; font-family: 'Montserrat', sans-serif;">66-68<span class="text-[20px] font-bold ml-1">分</span></div>
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></span>
          <span class="text-[13px] text-cyan-300/80">节省 2-4 分钟</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></span>
          <span class="text-[13px] text-cyan-300/80">动作规范性明显改善</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></span>
          <span class="text-[13px] text-cyan-300/80">三大工具熟悉上手</span>
        </div>
      </div>
    </div>

    <!-- 左下卡片：第8周末 -->
    <div class="absolute rounded-xl p-5 border" style="width: 280px; bottom: 60px; left: 100px; background: rgba(10,36,99,0.8); border-color: rgba(52,211,153,0.5); backdrop-filter: blur(10px);">
      <div class="flex items-center gap-2 mb-3">
        <div class="w-8 h-8 rounded-lg flex items-center justify-center text-[13px] font-bold" style="background: rgba(52,211,153,0.2); color: #34d399;">W8</div>
        <span class="text-[16px] font-bold text-emerald-300">第二阶段结束</span>
      </div>
      <div class="text-[40px] font-black leading-none mb-2" style="color: #34d399; font-family: 'Montserrat', sans-serif;">62-64<span class="text-[20px] font-bold ml-1">分</span></div>
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
          <span class="text-[13px] text-emerald-300/80">节省 6-8 分钟</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
          <span class="text-[13px] text-emerald-300/80">配速 3:05-3:12/百米</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
          <span class="text-[13px] text-emerald-300/80">有氧基础显著增强</span>
        </div>
      </div>
    </div>

    <!-- 右下卡片：第12周末 -->
    <div class="absolute rounded-xl p-5 border-2" style="width: 280px; bottom: 60px; right: 100px; background: rgba(244,185,66,0.12); border-color: #F4B942; backdrop-filter: blur(10px); box-shadow: 0 0 30px rgba(244,185,66,0.2);">
      <div class="flex items-center gap-2 mb-3">
        <div class="w-8 h-8 rounded-lg flex items-center justify-center text-[13px] font-bold" style="background: rgba(244,185,66,0.3); color: #F4B942;">W12</div>
        <span class="text-[16px] font-bold text-amber-300">目标达成!</span>
      </div>
      <div class="text-[40px] font-black leading-none mb-2" style="color: #F4B942; font-family: 'Montserrat', sans-serif;">58-62<span class="text-[20px] font-bold ml-1">分</span></div>
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
          <span class="text-[13px] text-amber-300/90">节省 8-12 分钟</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
          <span class="text-[13px] text-amber-300/90">配速 &lt;3:00/百米</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
          <span class="text-[13px] text-amber-300/90">全面突破目标</span>
        </div>
      </div>
    </div>

  </div>

  <!-- 底部进度条 -->
  <div class="absolute bottom-[18px] left-[60px] right-[60px] h-[6px] rounded-full" style="background: rgba(255,255,255,0.1);">
    <div class="h-full rounded-full relative" style="background: linear-gradient(to right, #94a3b8 0%, #3E92CC 33%, #34d399 66%, #F4B942 100%);">
      <!-- 节点标记 -->
      <div class="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white" style="left: 0%; background: #94a3b8;"></div>
      <div class="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white" style="left: 33%; background: #3E92CC;"></div>
      <div class="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white" style="left: 66%; background: #34d399;"></div>
      <div class="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white" style="left: 100%; background: #F4B942;"></div>
    </div>
  </div>

  <!-- 页码 -->
  <div class="absolute bottom-[8px] right-[60px] text-[11px] font-mono" style="color: rgba(62,146,204,0.5);">14 / 15</div>

</div>
`);window.slideDataMap.set(15,`
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden" style="background: #0A2463;">

  <!-- 背景：深色渐变 + 射线光效 -->
  <div class="absolute inset-0" style="background: radial-gradient(ellipse at 50% 40%, rgba(62,146,204,0.25) 0%, rgba(10,36,99,0.0) 65%);"></div>
  <div class="absolute inset-0 opacity-8" style="background-image: linear-gradient(rgba(62,146,204,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(62,146,204,0.3) 1px, transparent 1px); background-size: 60px 60px;"></div>

  <!-- 顶部装饰线 -->
  <div class="absolute top-0 left-0 right-0 h-1" style="background: linear-gradient(to right, transparent, #3E92CC, #F4B942, #3E92CC, transparent);"></div>

  <!-- 中央内容 -->
  <div class="absolute inset-0 flex flex-col items-center justify-center">

    <!-- 主标语 -->
    <div class="text-center mb-10">
      <div class="text-[15px] font-mono tracking-[0.3em] mb-4" style="color: #3E92CC;">// MISSION_ACCOMPLISHED</div>
      <h1 class="text-[64px] font-black leading-tight mb-3" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif; background: linear-gradient(135deg, #ffffff 0%, #F4B942 50%, #3E92CC 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">60分钟以内</h1>
      <h2 class="text-[32px] font-bold text-white/90" style="font-family: 'Noto Sans SC', sans-serif;">完全可期！</h2>
      <p class="text-[16px] mt-4 max-w-[600px] text-center leading-relaxed" style="color: rgba(255,255,255,0.6);">69岁、每天坚持、科学训练 —— 这三个条件组合在一起，本身就是最强大的优势</p>
    </div>

    <!-- 三大工具总结横排 -->
    <div class="flex gap-6 mb-10">
      <!-- 呼吸管 -->
      <div class="rounded-xl px-6 py-4 flex items-center gap-4 border" style="background: rgba(62,146,204,0.12); border-color: rgba(62,146,204,0.4); min-width: 260px;">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background: rgba(62,146,204,0.25);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3E92CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V8"/><path d="M5 12H2a10 10 0 0020 0h-3"/><circle cx="12" cy="5" r="3"/></svg>
        </div>
        <div>
          <div class="text-[15px] font-bold text-cyan-300">呼吸管</div>
          <div class="text-[12px] text-slate-400 mt-0.5">解放呼吸、提升入水角度</div>
        </div>
      </div>
      <!-- 浮标 -->
      <div class="rounded-xl px-6 py-4 flex items-center gap-4 border" style="background: rgba(62,146,204,0.12); border-color: rgba(62,146,204,0.4); min-width: 260px;">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background: rgba(62,146,204,0.25);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3E92CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="10" ry="4"/><path d="M2 12c0 4 4.5 8 10 8s10-4 10-8"/></svg>
        </div>
        <div>
          <div class="text-[15px] font-bold text-cyan-300">夹腿浮标</div>
          <div class="text-[12px] text-slate-400 mt-0.5">专注上肢、增强划水效率</div>
        </div>
      </div>
      <!-- 手蹼 -->
      <div class="rounded-xl px-6 py-4 flex items-center gap-4 border" style="background: rgba(62,146,204,0.12); border-color: rgba(62,146,204,0.4); min-width: 260px;">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background: rgba(62,146,204,0.25);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3E92CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 00-2-2v0a2 2 0 00-2 2v0"/><path d="M14 10V4a2 2 0 00-2-2v0a2 2 0 00-2 2v2"/><path d="M10 10.5V6a2 2 0 00-2-2v0a2 2 0 00-2 2v8"/><path d="M18 8a2 2 0 114 0v6a8 8 0 01-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 012.83-2.82L7 15"/></svg>
        </div>
        <div>
          <div class="text-[15px] font-bold text-cyan-300">手蹼</div>
          <div class="text-[12px] text-slate-400 mt-0.5">强化高肘、感知水阻</div>
        </div>
      </div>
    </div>

    <!-- 核心理念横幅 -->
    <div class="flex items-center gap-8 px-10 py-4 rounded-2xl" style="background: rgba(244,185,66,0.1); border: 1px solid rgba(244,185,66,0.3);">
      <div class="text-center px-6 border-r" style="border-color: rgba(244,185,66,0.3);">
        <div class="text-[28px] font-black" style="color: #F4B942; font-family: 'Montserrat', sans-serif;">技术</div>
        <div class="text-[12px] text-amber-300/70 mt-0.5">动作效率优先</div>
      </div>
      <div class="text-[20px]" style="color: rgba(244,185,66,0.5);">+</div>
      <div class="text-center px-6 border-r" style="border-color: rgba(244,185,66,0.3);">
        <div class="text-[28px] font-black" style="color: #F4B942; font-family: 'Montserrat', sans-serif;">工具</div>
        <div class="text-[12px] text-amber-300/70 mt-0.5">辅助强化薄弱环节</div>
      </div>
      <div class="text-[20px]" style="color: rgba(244,185,66,0.5);">+</div>
      <div class="text-center px-6 border-r" style="border-color: rgba(244,185,66,0.3);">
        <div class="text-[28px] font-black" style="color: #F4B942; font-family: 'Montserrat', sans-serif;">间歇</div>
        <div class="text-[12px] text-amber-300/70 mt-0.5">12周阶段性训练</div>
      </div>
      <div class="text-[20px]" style="color: rgba(244,185,66,0.5);">+</div>
      <div class="text-center px-6">
        <div class="text-[28px] font-black" style="color: #F4B942; font-family: 'Montserrat', sans-serif;">安全</div>
        <div class="text-[12px] text-amber-300/70 mt-0.5">无伤是进步的前提</div>
      </div>
    </div>

  </div>

  <!-- 底部装饰 -->
  <div class="absolute bottom-0 left-0 right-0 h-1" style="background: linear-gradient(to right, transparent, #F4B942, #3E92CC, transparent);"></div>

  <!-- 页码 -->
  <div class="absolute bottom-[10px] right-[60px] text-[11px] font-mono" style="color: rgba(62,146,204,0.5);">15 / 15</div>

</div>
`);
