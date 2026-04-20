// ── INTRO SEQUENCE ──
(function() {
  const screen  = document.getElementById('intro-screen');
  const eyebrow = screen.querySelector('.is-eyebrow');
  const lines   = screen.querySelectorAll('.is-line');
  const role    = screen.querySelector('.is-role');
  const bar     = screen.querySelector('.is-progress');

  // Masquer le hero pendant l'intro
  document.getElementById('hero').style.opacity = '0';

  setTimeout(() => eyebrow.classList.add('vis'), 200);
  setTimeout(() => lines[0].classList.add('vis'), 500);
  if (lines[1]) setTimeout(() => lines[1].classList.add('vis'), 680);
  setTimeout(() => {
    screen.querySelectorAll('.is-text').forEach(t => t.classList.add('shimmer'));
  }, 1400);
  setTimeout(() => role.classList.add('vis'), 950);
  setTimeout(() => {
    bar.classList.add('vis');
    requestAnimationFrame(() => bar.classList.add('go'));
  }, 1100);

  // Exit
  setTimeout(() => {
    screen.classList.add('exit');
    document.getElementById('hero').style.transition = 'opacity 0.8s ease';
    document.getElementById('hero').style.opacity = '1';
    setTimeout(() => screen.remove(), 1000);
  }, 3200);
})();


// ── CUSTOM CURSOR ──
const dot  = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

(function animCursor() {
  rx += (mx - rx) * 0.18;
  ry += (my - ry) * 0.18;
  dot.style.left  = mx + 'px'; dot.style.top  = my + 'px';
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(animCursor);
})();

document.querySelectorAll('a, button, .proj-row, .skill-chip').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
});


// ── LIQUID FLUID SIMULATION (LiquidEther) ──
(function() {
  const COLORS = ['#1e0a5e', '#6d28d9', '#8b5cf6', '#0ea5e9', '#67e8f9'];
  const container = document.getElementById('fluid-bg');

  function makePalette(stops) {
    const w = stops.length;
    const data = new Uint8Array(w * 4);
    stops.forEach((s, i) => {
      const c = new THREE.Color(s);
      data[i*4]   = Math.round(c.r * 255);
      data[i*4+1] = Math.round(c.g * 255);
      data[i*4+2] = Math.round(c.b * 255);
      data[i*4+3] = 255;
    });
    const t = new THREE.DataTexture(data, w, 1, THREE.RGBAFormat);
    t.magFilter = t.minFilter = THREE.LinearFilter;
    t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
    t.generateMipmaps = false;
    t.needsUpdate = true;
    return t;
  }

  const paletteTex = makePalette(COLORS);
  const bgVec4 = new THREE.Vector4(0,0,0,0);

  // ─ Common ─
  const Common = {
    width:0, height:0, pixelRatio:1,
    renderer:null, clock:null, delta:0, time:0,
    init(el) {
      this.pixelRatio = Math.min(window.devicePixelRatio||1, 2);
      this.resize(el);
      this.renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
      this.renderer.autoClear = false;
      this.renderer.setClearColor(0x000000, 0);
      this.renderer.setPixelRatio(this.pixelRatio);
      this.renderer.setSize(this.width, this.height);
      this.renderer.domElement.style.cssText = 'width:100%;height:100%;display:block;';
      this.clock = new THREE.Clock(); this.clock.start();
    },
    resize(el) {
      const r = el.getBoundingClientRect();
      this.width  = Math.max(1, Math.floor(r.width));
      this.height = Math.max(1, Math.floor(r.height));
      if(this.renderer) this.renderer.setSize(this.width, this.height, false);
    },
    update() { this.delta = this.clock.getDelta(); this.time += this.delta; }
  };

  // ─ Mouse ─
  const Mouse = {
    coords: new THREE.Vector2(), coords_old: new THREE.Vector2(),
    diff: new THREE.Vector2(), mouseMoved: false, timer: null,
    isAutoActive: false, autoIntensity: 2.5,
    takeoverActive: false, takeoverStartTime: 0, takeoverDuration: 0.25,
    takeoverFrom: new THREE.Vector2(), takeoverTo: new THREE.Vector2(),
    hasUserControl: false, isHoverInside: false, onInteract: null,
    init() {
      window.addEventListener('mousemove', e => {
        const r = container.getBoundingClientRect();
        this.isHoverInside = e.clientX>=r.left && e.clientX<=r.right && e.clientY>=r.top && e.clientY<=r.bottom;
        if(this.onInteract) this.onInteract();
        if(this.isAutoActive && !this.hasUserControl && !this.takeoverActive) {
          const nx=(e.clientX-r.left)/r.width, ny=(e.clientY-r.top)/r.height;
          this.takeoverFrom.copy(this.coords);
          this.takeoverTo.set(nx*2-1, -(ny*2-1));
          this.takeoverStartTime = performance.now();
          this.takeoverActive = true; this.hasUserControl = true; this.isAutoActive = false;
          return;
        }
        if(r.width>0 && r.height>0) {
          const nx=(e.clientX-r.left)/r.width, ny=(e.clientY-r.top)/r.height;
          this.coords.set(nx*2-1, -(ny*2-1));
          this.mouseMoved = true;
          if(this.timer) clearTimeout(this.timer);
          this.timer = setTimeout(()=>this.mouseMoved=false, 100);
        }
        this.hasUserControl = true;
      });
      window.addEventListener('touchmove', e => {
        if(e.touches.length!==1) return;
        const t=e.touches[0], r=container.getBoundingClientRect();
        if(r.width>0 && r.height>0) {
          this.coords.set((t.clientX-r.left)/r.width*2-1, -((t.clientY-r.top)/r.height*2-1));
          this.mouseMoved = true;
        }
      }, {passive:true});
    },
    update() {
      if(this.takeoverActive) {
        const t=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1000);
        if(t>=1) { this.takeoverActive=false; this.coords.copy(this.takeoverTo); this.coords_old.copy(this.coords); this.diff.set(0,0); }
        else { const k=t*t*(3-2*t); this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,k); }
      }
      this.diff.subVectors(this.coords, this.coords_old);
      this.coords_old.copy(this.coords);
      if(this.coords_old.x===0 && this.coords_old.y===0) this.diff.set(0,0);
      if(this.isAutoActive && !this.takeoverActive) this.diff.multiplyScalar(this.autoIntensity);
    }
  };

  // ─ AutoDriver ─
  class AutoDriver {
    constructor() {
      this.speed = 0.4; this.resumeDelay = 2000; this.rampMs = 600;
      this.active = false; this.current = new THREE.Vector2();
      this.target = new THREE.Vector2(); this.lastTime = performance.now();
      this.activationTime = 0; this.margin = 0.2;
      this._dir = new THREE.Vector2();
      this.lastUserInteraction = performance.now();
      this.pickTarget();
    }
    pickTarget() {
      const r=Math.random;
      this.target.set((r()*2-1)*(1-this.margin),(r()*2-1)*(1-this.margin));
    }
    stop() { this.active=false; Mouse.isAutoActive=false; }
    update() {
      const now=performance.now();
      if(now-this.lastUserInteraction < this.resumeDelay) { if(this.active) this.stop(); return; }
      if(Mouse.isHoverInside) { if(this.active) this.stop(); return; }
      if(!this.active) { this.active=true; this.current.copy(Mouse.coords); this.lastTime=now; this.activationTime=now; }
      Mouse.isAutoActive=true;
      let dt=(now-this.lastTime)/1000; this.lastTime=now;
      if(dt>0.2) dt=0.016;
      const dir=this._dir.subVectors(this.target,this.current);
      const dist=dir.length();
      if(dist<0.01){ this.pickTarget(); return; }
      dir.normalize();
      const ramp=this.rampMs>0?((t=>t*t*(3-2*t))(Math.min(1,(now-this.activationTime)/this.rampMs))):1;
      this.current.addScaledVector(dir, Math.min(this.speed*dt*ramp, dist));
      Mouse.coords.copy(this.current);
      Mouse.mouseMoved=true;
    }
  }

  // ─ Shaders GLSL ─
  const face_vert        = `attribute vec3 position;uniform vec2 px;uniform vec2 boundarySpace;varying vec2 uv;precision highp float;void main(){vec3 pos=position;vec2 scale=1.0-boundarySpace*2.0;pos.xy=pos.xy*scale;uv=vec2(0.5)+pos.xy*0.5;gl_Position=vec4(pos,1.0);}`;
  const line_vert        = `attribute vec3 position;uniform vec2 px;precision highp float;varying vec2 uv;void main(){vec3 pos=position;uv=0.5+pos.xy*0.5;vec2 n=sign(pos.xy);pos.xy=abs(pos.xy)-px*1.0;pos.xy*=n;gl_Position=vec4(pos,1.0);}`;
  const mouse_vert       = `precision highp float;attribute vec3 position;attribute vec2 uv;uniform vec2 center;uniform vec2 scale;uniform vec2 px;varying vec2 vUv;void main(){vec2 pos=position.xy*scale*2.0*px+center;vUv=uv;gl_Position=vec4(pos,0.0,1.0);}`;
  const advection_frag   = `precision highp float;uniform sampler2D velocity;uniform float dt;uniform bool isBFECC;uniform vec2 fboSize;uniform vec2 px;varying vec2 uv;void main(){vec2 ratio=max(fboSize.x,fboSize.y)/fboSize;if(!isBFECC){vec2 vel=texture2D(velocity,uv).xy;vec2 uv2=uv-vel*dt*ratio;gl_FragColor=vec4(texture2D(velocity,uv2).xy,0.0,0.0);}else{vec2 vel_old=texture2D(velocity,uv).xy;vec2 spot_old=uv-vel_old*dt*ratio;vec2 vel_new1=texture2D(velocity,spot_old).xy;vec2 spot_new2=spot_old+vel_new1*dt*ratio;vec2 error=spot_new2-uv;vec2 spot_new3=uv-error/2.0;vec2 vel_2=texture2D(velocity,spot_new3).xy;vec2 spot_old2=spot_new3-vel_2*dt*ratio;gl_FragColor=vec4(texture2D(velocity,spot_old2).xy,0.0,0.0);}}`;
  const color_frag       = `precision highp float;uniform sampler2D velocity;uniform sampler2D palette;uniform vec4 bgColor;varying vec2 uv;void main(){vec2 vel=texture2D(velocity,uv).xy;float lenv=clamp(length(vel),0.0,1.0);vec3 c=texture2D(palette,vec2(lenv,0.5)).rgb;gl_FragColor=vec4(mix(bgColor.rgb,c,lenv),mix(bgColor.a,1.0,lenv));}`;
  const divergence_frag  = `precision highp float;uniform sampler2D velocity;uniform float dt;uniform vec2 px;varying vec2 uv;void main(){float x0=texture2D(velocity,uv-vec2(px.x,0.0)).x;float x1=texture2D(velocity,uv+vec2(px.x,0.0)).x;float y0=texture2D(velocity,uv-vec2(0.0,px.y)).y;float y1=texture2D(velocity,uv+vec2(0.0,px.y)).y;gl_FragColor=vec4((x1-x0+y1-y0)/2.0/dt);}`;
  const externalForce_frag=`precision highp float;uniform vec2 force;uniform vec2 center;uniform vec2 scale;uniform vec2 px;varying vec2 vUv;void main(){vec2 circle=(vUv-0.5)*2.0;float d=1.0-min(length(circle),1.0);d*=d;gl_FragColor=vec4(force*d,0.0,1.0);}`;
  const poisson_frag     = `precision highp float;uniform sampler2D pressure;uniform sampler2D divergence;uniform vec2 px;varying vec2 uv;void main(){float p0=texture2D(pressure,uv+vec2(px.x*2.0,0.0)).r;float p1=texture2D(pressure,uv-vec2(px.x*2.0,0.0)).r;float p2=texture2D(pressure,uv+vec2(0.0,px.y*2.0)).r;float p3=texture2D(pressure,uv-vec2(0.0,px.y*2.0)).r;float div=texture2D(divergence,uv).r;gl_FragColor=vec4((p0+p1+p2+p3)/4.0-div);}`;
  const pressure_frag    = `precision highp float;uniform sampler2D pressure;uniform sampler2D velocity;uniform vec2 px;uniform float dt;varying vec2 uv;void main(){float p0=texture2D(pressure,uv+vec2(px.x,0.0)).r;float p1=texture2D(pressure,uv-vec2(px.x,0.0)).r;float p2=texture2D(pressure,uv+vec2(0.0,px.y)).r;float p3=texture2D(pressure,uv-vec2(0.0,px.y)).r;vec2 v=texture2D(velocity,uv).xy;gl_FragColor=vec4(v-vec2(p0-p1,p2-p3)*0.5*dt,0.0,1.0);}`;

  // ─ FBO helper ─
  function makeFBO(w,h) {
    const isIOS=/(iPad|iPhone|iPod)/i.test(navigator.userAgent);
    return new THREE.WebGLRenderTarget(w,h,{
      type: isIOS ? THREE.HalfFloatType : THREE.FloatType,
      depthBuffer:false, stencilBuffer:false,
      minFilter:THREE.LinearFilter, magFilter:THREE.LinearFilter,
      wrapS:THREE.ClampToEdgeWrapping, wrapT:THREE.ClampToEdgeWrapping
    });
  }

  // ─ Simulation ─
  class Simulation {
    constructor() {
      this.dt=0.014; this.BFECC=true; this.mouseForce=25;
      this.cursorSize=110; this.resolution=0.5; this.poissonIter=32;
      this.cellScale=new THREE.Vector2(); this.fboSize=new THREE.Vector2();
      this.boundary=new THREE.Vector2();
      this.calcSize(); this.createFBOs(); this.createPasses();
    }
    calcSize() {
      const w=Math.max(1,Math.round(this.resolution*Common.width));
      const h=Math.max(1,Math.round(this.resolution*Common.height));
      this.cellScale.set(1/w,1/h); this.fboSize.set(w,h);
    }
    createFBOs() {
      const [w,h]=[this.fboSize.x,this.fboSize.y];
      this.vel0=makeFBO(w,h); this.vel1=makeFBO(w,h);
      this.div=makeFBO(w,h); this.p0=makeFBO(w,h); this.p1=makeFBO(w,h);
    }
    makePass(vs,fs,uniforms) {
      const scene=new THREE.Scene(), cam=new THREE.Camera();
      const mat=new THREE.RawShaderMaterial({vertexShader:vs,fragmentShader:fs,uniforms});
      scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2,2),mat));
      return {scene,cam,mat,uniforms,render(fbo){
        Common.renderer.setRenderTarget(fbo||null);
        Common.renderer.render(scene,cam);
        Common.renderer.setRenderTarget(null);
      }};
    }
    createPasses() {
      // Advection
      this.advPass = this.makePass(face_vert, advection_frag, {
        boundarySpace:{value:this.cellScale}, px:{value:this.cellScale},
        fboSize:{value:this.fboSize}, velocity:{value:this.vel0.texture},
        dt:{value:this.dt}, isBFECC:{value:true}
      });
      const bg=new THREE.BufferGeometry();
      bg.setAttribute('position',new THREE.BufferAttribute(new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]),3));
      this.advPass.scene.add(new THREE.LineSegments(bg, new THREE.RawShaderMaterial({vertexShader:line_vert,fragmentShader:advection_frag,uniforms:this.advPass.uniforms})));

      // External force
      const fscene=new THREE.Scene(), fcam=new THREE.Camera();
      const fmat=new THREE.RawShaderMaterial({vertexShader:mouse_vert,fragmentShader:externalForce_frag,blending:THREE.AdditiveBlending,depthWrite:false,uniforms:{
        px:{value:this.cellScale}, force:{value:new THREE.Vector2()},
        center:{value:new THREE.Vector2()}, scale:{value:new THREE.Vector2(this.cursorSize,this.cursorSize)}
      }});
      fscene.add(new THREE.Mesh(new THREE.PlaneGeometry(1,1),fmat));
      this.forcePass={scene:fscene,cam:fcam,mat:fmat,uniforms:fmat.uniforms,render(fbo){
        Common.renderer.setRenderTarget(fbo||null);
        Common.renderer.render(fscene,fcam);
        Common.renderer.setRenderTarget(null);
      }};

      // Divergence
      this.divPass = this.makePass(face_vert, divergence_frag, {
        boundarySpace:{value:this.boundary}, velocity:{value:this.vel1.texture},
        px:{value:this.cellScale}, dt:{value:this.dt}
      });

      // Poisson
      this.poisPass = this.makePass(face_vert, poisson_frag, {
        boundarySpace:{value:this.boundary}, pressure:{value:this.p0.texture},
        divergence:{value:this.div.texture}, px:{value:this.cellScale}
      });

      // Pressure
      this.presPass = this.makePass(face_vert, pressure_frag, {
        boundarySpace:{value:this.boundary}, pressure:{value:this.p0.texture},
        velocity:{value:this.vel1.texture}, px:{value:this.cellScale}, dt:{value:this.dt}
      });
    }
    resize() {
      this.calcSize();
      [this.vel0,this.vel1,this.div,this.p0,this.p1].forEach(f=>f.setSize(this.fboSize.x,this.fboSize.y));
    }
    update() {
      this.boundary.copy(this.cellScale);
      this.advPass.uniforms.velocity.value=this.vel0.texture;
      this.advPass.uniforms.dt.value=this.dt;
      this.advPass.uniforms.isBFECC.value=this.BFECC;
      this.advPass.render(this.vel1);

      const fx=(Mouse.diff.x/2)*this.mouseForce, fy=(Mouse.diff.y/2)*this.mouseForce;
      const csx=this.cursorSize*this.cellScale.x, csy=this.cursorSize*this.cellScale.y;
      const cx=Math.min(Math.max(Mouse.coords.x,-1+csx+this.cellScale.x*2),1-csx-this.cellScale.x*2);
      const cy=Math.min(Math.max(Mouse.coords.y,-1+csy+this.cellScale.y*2),1-csy-this.cellScale.y*2);
      this.forcePass.uniforms.force.value.set(fx,fy);
      this.forcePass.uniforms.center.value.set(cx,cy);
      this.forcePass.uniforms.scale.value.set(this.cursorSize,this.cursorSize);
      this.forcePass.render(this.vel1);

      this.divPass.uniforms.velocity.value=this.vel1.texture;
      this.divPass.render(this.div);

      let pin=this.p0, pout=this.p1;
      for(let i=0;i<this.poissonIter;i++){
        this.poisPass.uniforms.pressure.value=pin.texture;
        this.poisPass.render(pout);
        [pin,pout]=[pout,pin];
      }
      this.presPass.uniforms.velocity.value=this.vel1.texture;
      this.presPass.uniforms.pressure.value=pin.texture;
      this.presPass.render(this.vel0);
    }
  }

  // ─ Output ─
  class Output {
    constructor(sim) {
      this.sim=sim;
      this.scene=new THREE.Scene(); this.cam=new THREE.Camera();
      const mat=new THREE.RawShaderMaterial({
        vertexShader:face_vert, fragmentShader:color_frag,
        transparent:true, depthWrite:false,
        uniforms:{
          velocity:{value:sim.vel0.texture},
          boundarySpace:{value:new THREE.Vector2()},
          palette:{value:paletteTex},
          bgColor:{value:bgVec4}
        }
      });
      this.scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2,2),mat));
      this.mat=mat;
    }
    render() {
      this.mat.uniforms.velocity.value=this.sim.vel0.texture;
      Common.renderer.setRenderTarget(null);
      Common.renderer.render(this.scene,this.cam);
    }
  }

  // ─ Init ─
  Common.init(container);
  container.prepend(Common.renderer.domElement);
  Mouse.init();

  const auto = new AutoDriver();
  Mouse.onInteract = () => { auto.lastUserInteraction = performance.now(); auto.stop(); };

  const sim    = new Simulation();
  const output = new Output(sim);

  function loop() {
    auto.update(); Mouse.update(); Common.update();
    sim.update(); output.render();
    requestAnimationFrame(loop);
  }
  loop();

  window.addEventListener('resize', () => {
    Common.resize(container); sim.resize();
  });
})();


// ── SCROLL REVEAL ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .ex-item, .edu-item').forEach(el => observer.observe(el));


// ── PARALLAXE HERO ──
window.addEventListener('scroll', () => {
  const sy       = window.scrollY;
  const heroName = document.querySelector('.hero-name');
  const heroSub  = document.querySelector('.hero-sub');
  if (heroName) heroName.style.transform = `translateY(${sy * 0.15}px)`;
  if (heroSub)  heroSub.style.transform  = `translateY(${sy * 0.08}px)`;

  // Fade du fluid au scroll
  const heroH = document.getElementById('hero').offsetHeight;
  const op    = Math.max(0.12, 1 - (sy / heroH) * 0.88);
  document.getElementById('fluid-bg').style.opacity = op;
});
