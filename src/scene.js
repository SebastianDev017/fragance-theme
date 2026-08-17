/* ---------------------------------------------------------------------------
   DropScents — escena 3D del hero.

   El decant de 5 ml se inclina, sirve un chorro y el frasco completo se llena.
   Es literalmente la promesa de la marca: primero la gota, después el frasco.

   El frasco está modelado con la silueta de un Sauvage Elixir: cuerpo recto,
   hombro en chaflán y un tapón bajo y acanalado que sobresale del cuello. El
   jugo es borgoña, no rosa: además de ser el color real del elixir, baja
   muchísimo el ruido cromático de la página.

   El canvas es transparente: el campo de color lo pinta el CSS, así que el
   hero y el resto de la página son el mismo fondo.
--------------------------------------------------------------------------- */

import * as THREE from 'three';
import { gsap } from 'gsap';

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

/* --------------------------- helpers de geometría -------------------------- */

/** Silueta del frasco: cuerpo recto y hombro en CHAFLÁN RECTO hacia el cuello.
 *  El chaflán es lo que define este tipo de flacón — con una curva bezier el
 *  perfil se acampana y termina pareciendo un tarro de crema. */
export function flaconShape(w, h, r, sh) {
  const s = new THREE.Shape();
  const x = w / 2, y = h / 2;
  s.moveTo(-x + r, -y);
  s.lineTo(x - r, -y);
  s.quadraticCurveTo(x, -y, x, -y + r);
  s.lineTo(x, y - sh);
  s.lineTo(x * 0.42, y);
  s.lineTo(-x * 0.42, y);
  s.lineTo(-x, y - sh);
  s.lineTo(-x, -y + r);
  s.quadraticCurveTo(-x, -y, -x + r, -y);
  return s;
}

/** rectángulo redondeado, centrado — la silueta del LÍQUIDO.
 *  El líquido no copia el hombro del frasco: su superficie es plana. */
export function roundedRect(w, h, r) {
  const s = new THREE.Shape();
  const x = w / 2, y = h / 2;
  s.moveTo(-x + r, -y);
  s.lineTo(x - r, -y);
  s.quadraticCurveTo(x, -y, x, -y + r);
  s.lineTo(x, y - r);
  s.quadraticCurveTo(x, y, x - r, y);
  s.lineTo(-x + r, y);
  s.quadraticCurveTo(-x, y, -x, y - r);
  s.lineTo(-x, -y + r);
  s.quadraticCurveTo(-x, -y, -x + r, -y);
  return s;
}

/** acanala un cilindro: es lo que hace que el tapón lea a metal moldeado */
export function flute(geo, ribs = 16, depth = 0.02) {
  const pos = geo.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const r = Math.hypot(v.x, v.z);
    if (r < 1e-4) continue;
    const k = 1 + depth * Math.cos(Math.atan2(v.z, v.x) * ribs);
    pos.setXYZ(i, v.x * k, v.y, v.z * k);
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
}

/** panorámica equirectangular pintada a mano: da los reflejos de marca */
export function brandEnvTexture() {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 256;
  const g = c.getContext('2d');

  const sky = g.createLinearGradient(0, 0, 0, 256);
  sky.addColorStop(0.00, '#ffffff');
  sky.addColorStop(0.30, '#EDF5FC');
  sky.addColorStop(0.58, '#F0EBFA');
  sky.addColorStop(0.84, '#FBEAF0');
  sky.addColorStop(1.00, '#F2E4EA');
  g.fillStyle = sky;
  g.fillRect(0, 0, 512, 256);

  // ventana de estudio: la franja que hace el brillo largo del vidrio
  const win = g.createLinearGradient(0, 0, 0, 110);
  win.addColorStop(0, 'rgba(255,255,255,1)');
  win.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = win;
  g.fillRect(150, 0, 150, 110);

  // rebotes de color, contenidos: el vidrio no debe salir gris, pero tampoco
  // convertirse en la cosa más colorida de la pantalla
  const blobs = [
    [70, 190, 90, 'rgba(255, 170, 200, .55)'],
    [400, 150, 110, 'rgba(165, 185, 255, .5)'],
    [255, 235, 120, 'rgba(255, 255, 255, .9)'],
  ];
  for (const [x, y, r, col] of blobs) {
    const rg = g.createRadialGradient(x, y, 0, x, y, r);
    rg.addColorStop(0, col);
    rg.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = rg;
    g.fillRect(x - r, y - r, r * 2, r * 2);
  }

  const tex = new THREE.CanvasTexture(c);
  tex.mapping = THREE.EquirectangularReflectionMapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** aFill = 0 en la base de la geometría y 1 arriba; sobrevive al escalado en Y,
 *  así el degradado del líquido acompaña al nivel en vez de estirarse. */
export function addFillAttribute(geo) {
  geo.computeBoundingBox();
  const { min, max } = geo.boundingBox;
  const h = Math.max(1e-5, max.y - min.y);
  const pos = geo.attributes.position;
  const a = new Float32Array(pos.count);
  for (let i = 0; i < pos.count; i++) a[i] = (pos.getY(i) - min.y) / h;
  geo.setAttribute('aFill', new THREE.BufferAttribute(a, 1));
}

/** sombra de contacto falsa: un disco con degradado radial */
function contactShadowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const rg = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  rg.addColorStop(0, 'rgba(43,15,51,.4)');
  rg.addColorStop(0.55, 'rgba(43,15,51,.13)');
  rg.addColorStop(1, 'rgba(43,15,51,0)');
  g.fillStyle = rg;
  g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/* ============================================================================
   escena
   ========================================================================== */
export function createScene(canvas, { reducedMotion = false } = {}) {
  const renderer = new THREE.WebGLRenderer({
    canvas, antialias: true, alpha: true, powerPreference: 'high-performance',
  });
  renderer.setClearAlpha(0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 60);
  camera.position.set(0, 0.2, 8.8);

  /* entorno */
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envSrc = brandEnvTexture();
  const envRT = pmrem.fromEquirectangular(envSrc);
  scene.environment = envRT.texture;
  envSrc.dispose();
  pmrem.dispose();

  const key = new THREE.DirectionalLight(0xffffff, 2.2);
  key.position.set(-3.2, 5, 4);
  scene.add(key);
  const rim = new THREE.PointLight(0xffa8c4, 12, 20, 2);
  rim.position.set(4.2, -1.6, 3.2);
  scene.add(rim);
  const fill = new THREE.PointLight(0xa8c8ff, 12, 18, 2);
  fill.position.set(-3, 1.5, -2.5);
  scene.add(fill);

  /* ---------------------------------------------------------------- grupos */
  const world = new THREE.Group();          // intro + parallax del puntero
  const layout = new THREE.Group();         // dónde vive la escena según el ancho
  const rig = new THREE.Group();            // los objetos
  layout.add(rig);
  world.add(layout);
  scene.add(world);

  /* ------------------------------------------------------------ materiales */
  // El vidrio NO usa `transmission`: sobre un canvas transparente no tiene nada
  // que refractar y sale lechoso. Transparencia real + sheen + reflejos del
  // entorno sí componen sobre el fondo de la página.
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0xefe9f6, metalness: 0, roughness: 0.03,
    clearcoat: 1, clearcoatRoughness: 0.03,
    iridescence: 0.5, iridescenceIOR: 1.35,
    envMapIntensity: 2.4, reflectivity: 0.7,
    sheen: 0.45, sheenColor: new THREE.Color(0xffffff), sheenRoughness: 0.35,
    transparent: true, opacity: 0.42, depthWrite: false,
  });

  // FRESNEL: sin esto el frasco es una mancha blanca uniforme. El vidrio real
  // es casi invisible de frente y opaco en los cantos, así que la alfa se sube
  // en los ángulos rasantes — eso es lo que dibuja la silueta y el fondo del
  // frasco sobre un fondo claro.
  const glassFresnel = (sh) => {
    sh.fragmentShader = sh.fragmentShader.replace(
      '#include <opaque_fragment>',
      `float fres = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 2.2);
       diffuseColor.a = mix(diffuseColor.a * 0.34, 1.0, fres);
       #include <opaque_fragment>`
    );
  };
  glass.onBeforeCompile = glassFresnel;

  // caras traseras: duplicar el vidrio por dentro es lo que le da volumen
  const glassBack = glass.clone();
  glassBack.side = THREE.BackSide;
  glassBack.opacity = 0.24;

  const juice = new THREE.MeshPhysicalMaterial({
    color: 0xffffff, metalness: 0, roughness: 0.16,
    clearcoat: 0.3, clearcoatRoughness: 0.3,
    envMapIntensity: 1.1,
    transparent: true, opacity: 0.9, depthWrite: false,
  });

  // borgoña del elixir: claro arriba, casi negro en el fondo. El degradado es
  // lo que lo hace leer como líquido y no como una calcomanía.
  const juiceTop = new THREE.Color(0xB43F68).convertSRGBToLinear();
  const juiceBot = new THREE.Color(0x480C24).convertSRGBToLinear();
  juice.onBeforeCompile = (sh) => {
    sh.uniforms.uTop = { value: juiceTop };
    sh.uniforms.uBot = { value: juiceBot };
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float aFill;\nvarying float vFill;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvFill = aFill;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying float vFill;\nuniform vec3 uTop;\nuniform vec3 uBot;')
      .replace('#include <color_fragment>', '#include <color_fragment>\ndiffuseColor.rgb = mix(uBot, uTop, clamp(vFill, 0.0, 1.0));');
  };

  const capMat = new THREE.MeshPhysicalMaterial({
    color: 0x241428, metalness: 0.55, roughness: 0.34,
    clearcoat: 0.8, clearcoatRoughness: 0.25, envMapIntensity: 1.3,
  });
  const ringMat = new THREE.MeshPhysicalMaterial({
    color: 0x9c8f9e, metalness: 1, roughness: 0.22, envMapIntensity: 1.6,
  });

  const streamMat = new THREE.MeshPhysicalMaterial({
    color: 0x9c2a50, metalness: 0, roughness: 0.1,
    clearcoat: 1, envMapIntensity: 1.8,
    transparent: true, opacity: 0.94, depthWrite: false,
  });

  /* ============================= FRASCO COMPLETO ========================= */
  const bottle = new THREE.Group();
  bottle.position.set(0, -0.5, 0);
  rig.add(bottle);

  const BW = 1.8, BH = 1.9, BD = 0.6;
  const bodyGeo = new THREE.ExtrudeGeometry(flaconShape(BW, BH, 0.14, 0.5), {
    depth: BD, bevelEnabled: true, bevelThickness: 0.08,
    bevelSize: 0.08, bevelSegments: 5, curveSegments: 26,
  });
  bodyGeo.translate(0, 0, -BD / 2);
  bodyGeo.computeVertexNormals();
  const bodyBack = new THREE.Mesh(bodyGeo, glassBack);
  bodyBack.renderOrder = 0;
  bottle.add(bodyBack);
  const body = new THREE.Mesh(bodyGeo, glass);
  body.renderOrder = 3;   // el vidrio siempre encima del líquido que contiene
  bottle.add(body);

  // el jugo: la misma silueta un poco más chica, anclada al fondo del frasco
  const juiceGeo = new THREE.ExtrudeGeometry(roundedRect(BW - 0.16, BH - 0.16, 0.09), {
    depth: BD - 0.16, bevelEnabled: true, bevelThickness: 0.04,
    bevelSize: 0.04, bevelSegments: 3, curveSegments: 20,
  });
  juiceGeo.translate(0, (BH - 0.16) / 2, -(BD - 0.16) / 2);   // base en y = 0
  addFillAttribute(juiceGeo);
  const bottleJuice = new THREE.Mesh(juiceGeo, juice);
  bottleJuice.position.y = -(BH - 0.16) / 2;
  bottleJuice.scale.y = 0.001;
  bottleJuice.renderOrder = 1;
  bottle.add(bottleJuice);

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.24, 0.24, 30), glass);
  neck.position.y = BH / 2 + 0.08;
  neck.renderOrder = 3;
  bottle.add(neck);

  const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.05, 30), ringMat);
  collar.position.y = BH / 2 + 0.02;
  bottle.add(collar);

  // tapón bajo y ancho, acanalado: la firma del frasco
  const capGeo = new THREE.CylinderGeometry(0.43, 0.42, 0.42, 64, 1);
  flute(capGeo, 18, 0.022);
  const CAP_REST = BH / 2 + 0.15;
  const bottleCap = new THREE.Group();
  bottleCap.position.y = CAP_REST;
  bottleCap.add(new THREE.Mesh(capGeo, capMat));
  const capRing = new THREE.Mesh(new THREE.CylinderGeometry(0.425, 0.425, 0.045, 48), ringMat);
  capRing.position.y = -0.185;
  bottleCap.add(capRing);
  bottle.add(bottleCap);

  const BOTTLE_MOUTH = new THREE.Vector3(0, -0.5 + BH / 2 + 0.26, 0);

  /* ================================ DECANT 5 ml ========================== */
  // 5 ml al lado de un frasco completo: el contraste de tamaño ES el mensaje
  const DEC_HOME = new THREE.Vector3(-1.75, 1.3, 0.25);
  const decant = new THREE.Group();
  decant.position.copy(DEC_HOME);
  decant.scale.setScalar(0.78);
  rig.add(decant);

  const prof = [
    [0.00, -0.52], [0.30, -0.52], [0.32, -0.50], [0.32, 0.28],
    [0.30, 0.36], [0.20, 0.44], [0.15, 0.48], [0.15, 0.60], [0.00, 0.60],
  ].map(([x, y]) => new THREE.Vector2(x, y));
  const vialGeo = new THREE.LatheGeometry(prof, 40);
  const vialBack = new THREE.Mesh(vialGeo, glassBack);
  vialBack.renderOrder = 0;
  decant.add(vialBack);
  const vial = new THREE.Mesh(vialGeo, glass);
  vial.renderOrder = 3;
  decant.add(vial);

  const decJuiceGeo = new THREE.CylinderGeometry(0.265, 0.265, 0.86, 28);
  decJuiceGeo.translate(0, 0.43, 0);   // base en y = 0
  addFillAttribute(decJuiceGeo);
  const decantJuice = new THREE.Mesh(decJuiceGeo, juice);
  decantJuice.position.y = -0.48;
  decantJuice.renderOrder = 1;
  decant.add(decantJuice);

  const sprayer = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.26, 26), capMat);
  sprayer.position.y = 0.7;
  decant.add(sprayer);
  const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.07, 0.14, 16), capMat);
  nozzle.position.y = 0.88;
  decant.add(nozzle);

  // punto exacto de salida del líquido, en coordenadas del decant
  const spout = new THREE.Object3D();
  spout.position.set(0, 0.95, 0);
  decant.add(spout);

  /* ================================= CHORRO ============================== */
  // Se construye una sola vez con la pose de vertido y se revela por shader
  // (uHead/uTail sobre una progresión guardada en un atributo propio).
  const streamUniforms = { uHead: { value: 0 }, uTail: { value: 0 } };
  streamMat.onBeforeCompile = (sh) => {
    sh.uniforms.uHead = streamUniforms.uHead;
    sh.uniforms.uTail = streamUniforms.uTail;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float aProg;\nvarying float vProg;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvProg = aProg;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying float vProg;\nuniform float uHead;\nuniform float uTail;')
      .replace(
        '#include <clipping_planes_fragment>',
        '#include <clipping_planes_fragment>\nif (vProg > uHead || vProg < uTail) discard;'
      );
  };

  let stream = null;
  function buildStream() {
    if (stream) { stream.geometry.dispose(); rig.remove(stream); }

    decant.updateWorldMatrix(true, true);
    const from = spout.getWorldPosition(new THREE.Vector3());
    rig.worldToLocal(from);
    const to = BOTTLE_MOUTH.clone();

    const mid = from.clone().lerp(to, 0.45);
    mid.x -= 0.08;
    mid.y += 0.1;
    const curve = new THREE.CatmullRomCurve3([
      from,
      from.clone().lerp(to, 0.16).add(new THREE.Vector3(-0.05, 0.05, 0)),
      mid,
      from.clone().lerp(to, 0.78).add(new THREE.Vector3(0.02, -0.04, 0)),
      to.clone().add(new THREE.Vector3(0, 0.06, 0)),
    ], false, 'catmullrom', 0.4);

    const SEG = 90, RAD = 8;
    const geo = new THREE.TubeGeometry(curve, SEG, 0.038, RAD, false);
    // aProg = avance a lo largo del tubo (0 en la boquilla, 1 en el frasco)
    const prog = new Float32Array(geo.attributes.position.count);
    for (let i = 0; i < prog.length; i++) prog[i] = Math.floor(i / (RAD + 1)) / SEG;
    geo.setAttribute('aProg', new THREE.BufferAttribute(prog, 1));
    stream = new THREE.Mesh(geo, streamMat);
    stream.renderOrder = 2;
    rig.add(stream);
  }

  /* ================================ GOTAS ================================ */
  const DROPS = 16;
  const dropMat = new THREE.MeshPhysicalMaterial({
    color: 0x8e2549, roughness: 0.1, clearcoat: 1,
    envMapIntensity: 2, transparent: true, opacity: 0.92, depthWrite: false,
  });
  const dropGeo = new THREE.SphereGeometry(0.022, 10, 8);
  const drops = new THREE.InstancedMesh(dropGeo, dropMat, DROPS);
  drops.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  drops.frustumCulled = false;
  drops.visible = false;
  rig.add(drops);
  const dropSeed = Array.from({ length: DROPS }, (_, i) => ({
    off: i / DROPS,
    sway: (Math.sin(i * 12.9898) * 43758.5453) % 1,
    scale: 0.5 + ((i * 7) % 5) / 6,
  }));
  const dropState = { t: 0, amount: 0 };
  const _m = new THREE.Matrix4();
  const _v = new THREE.Vector3();
  const _q = new THREE.Quaternion();
  const _s = new THREE.Vector3();

  /* ============================ sombra de contacto ======================= */
  const shadowTex = contactShadowTexture();
  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(3.6, 3.6),
    new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false, opacity: 0.5 })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.set(0, -1.42, 0.05);
  shadow.renderOrder = -1;
  rig.add(shadow);

  /* ======================================================================
     coreografía
     ====================================================================== */
  // Pose de vertido: la boquilla queda arriba y ligeramente a la izquierda de
  // la boca del frasco, para que el chorro caiga en diagonal y se lea.
  const POUR = { rot: -2.0, x: -0.82, y: 1.96, z: 0.05 };

  // el chorro se construye con esa pose exacta y después el decant vuelve a su
  // sitio: la geometría del chorro ya no se recalcula nunca más
  decant.rotation.z = POUR.rot;
  decant.position.set(POUR.x, POUR.y, POUR.z);
  buildStream();
  decant.rotation.z = 0;
  decant.position.copy(DEC_HOME);

  const pour = gsap.timeline({ paused: true, defaults: { ease: 'none' } });

  // 0 → .18  el decant entra en escena y se acerca al frasco
  pour.to(decant.position, { x: POUR.x, y: POUR.y, z: POUR.z, duration: 0.2, ease: 'power2.inOut' }, 0)
      .to(decant.rotation, { z: POUR.rot, duration: 0.2, ease: 'power2.inOut' }, 0)
      .to(bottleCap.position, { y: BH / 2 + 1.85, x: 0.78, duration: 0.16, ease: 'power2.out' }, 0.02)
      .to(bottleCap.rotation, { y: Math.PI * 0.6, z: 0.22, duration: 0.2 }, 0.02)

  // .20 → .58  sirve: el chorro crece, el decant se vacía, el frasco se llena
      .to(streamUniforms.uHead, { value: 1, duration: 0.09, ease: 'power1.in' }, 0.2)
      .to(decantJuice.scale, { y: 0.06, duration: 0.34, ease: 'power1.inOut' }, 0.21)
      .to(bottleJuice.scale, { y: 0.74, duration: 0.36, ease: 'power1.inOut' }, 0.23)
      .to(dropState, { amount: 1, duration: 0.06 }, 0.22)

  // .58 → .72  corta el chorro y el decant se retira
      .to(dropState, { amount: 0, duration: 0.06 }, 0.56)
      .to(streamUniforms.uTail, { value: 1.02, duration: 0.1, ease: 'power2.in' }, 0.57)
      .to(decant.rotation, { z: -0.12, duration: 0.14, ease: 'power2.inOut' }, 0.6)
      .to(decant.position, { x: -1.9, y: 1.6, z: -0.4, duration: 0.16, ease: 'power2.inOut' }, 0.6)

  // .72 → 1   el frasco queda solo, tapado y de frente
      .to(bottleCap.position, { y: CAP_REST, x: 0, duration: 0.13, ease: 'power2.in' }, 0.72)
      .to(bottleCap.rotation, { y: Math.PI * 1.2, z: 0, duration: 0.16 }, 0.72)
      .to(bottle.position, { x: -0.45, y: -0.32, duration: 0.28, ease: 'power2.inOut' }, 0.72)
      .to(bottle.rotation, { y: Math.PI * 0.2, duration: 0.28, ease: 'power2.inOut' }, 0.72)
      .to(shadow.position, { x: -0.45, duration: 0.28, ease: 'power2.inOut' }, 0.72)
      .to(decant.position, { x: -3.2, y: 2.4, duration: 0.2, ease: 'power2.in' }, 0.74)
      .to(camera.position, { z: 8.2, y: 0.1, duration: 0.28, ease: 'power2.inOut' }, 0.72);

  /* intro: sólo toca `world`, para no pelear con la línea de tiempo del scroll */
  world.position.y = -0.5;
  world.scale.setScalar(0.86);
  const intro = gsap.timeline({ paused: true })
    .to(world.position, { y: 0, duration: 1.5, ease: 'expo.out' }, 0)
    .to(world.scale, { x: 1, y: 1, z: 1, duration: 1.6, ease: 'expo.out' }, 0)
    .fromTo(world.rotation, { y: -0.35 }, { y: 0, duration: 1.8, ease: 'expo.out' }, 0);

  /* ======================================================================
     puntero, resize y bucle
     ====================================================================== */
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  function onPointer(e) {
    pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
  }
  if (!reducedMotion) window.addEventListener('pointermove', onPointer, { passive: true });

  let isPortrait = false;
  let baseX = 2.2, baseY = 0.1, driftX = -1.15, driftY = 0;

  function resize() {
    const r = canvas.getBoundingClientRect();
    const width = Math.max(1, r.width);
    const height = Math.max(1, r.height);
    isPortrait = width < 1000;

    camera.aspect = width / height;
    camera.fov = isPortrait ? 42 : 34;
    camera.updateProjectionMatrix();

    // ancho visible del mundo a la altura z = 0
    const vh = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
    const vw = vh * camera.aspect;

    if (isPortrait) {
      // el titular ocupa la mitad inferior: la escena se va arriba y se achica
      baseX = 0.15; baseY = 2.0;
      driftX = -0.35; driftY = -1.9;
      layout.scale.setScalar(0.46);
    } else {
      // reparto 50/50 exacto: el texto vive en la mitad izquierda del ancho de
      // página y la escena se centra en la mitad derecha (vw/4)
      baseX = vw / 4; baseY = 0.25;
      driftX = -vw / 6; driftY = 0;       // al servir, se acerca al centro
      layout.scale.setScalar(clamp((vw / 2) * 0.8 / 3.9, 0.46, 0.72));
    }
    layout.position.set(baseX, baseY, 0);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isPortrait ? 1.75 : 2));
    renderer.setSize(width, height, false);
  }
  resize();

  let visible = true;
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 });
  io.observe(canvas);

  const clock = new THREE.Clock();

  function updateDrops() {
    const on = dropState.amount > 0.02 && stream;
    drops.visible = on;
    if (!on) return;
    for (let i = 0; i < DROPS; i++) {
      const d = dropSeed[i];
      // las gotas viven en el último tramo del chorro, que es donde salpica
      const p = 0.45 + ((dropState.t * 0.7 + d.off) % 1) * 0.55;
      const pt = stream.geometry.parameters.path.getPointAt(clamp(p, 0, 0.999), _v);
      _q.identity();
      _s.setScalar(d.scale * dropState.amount * (0.4 + (p - 0.45) * 1.6));
      pt.x += Math.sin((p + d.sway) * 9.0) * 0.075;
      pt.z += Math.cos((p + d.sway) * 7.0) * 0.075;
      _m.compose(pt, _q, _s);
      drops.setMatrixAt(i, _m);
    }
    drops.instanceMatrix.needsUpdate = true;
  }

  function render() {
    dropState.t += clock.getDelta();

    // mientras sirve, la escena deriva hacia el centro: el titular ya se fue y
    // dejarla pegada a un lado deja media pantalla vacía. Se calcula aquí y no
    // en la línea de tiempo porque el desplazamiento depende del ancho.
    const p = clamp((pour.progress() - 0.05) / 0.35, 0, 1);
    const s = p * p * (3 - 2 * p);
    layout.position.x = baseX + driftX * s;
    layout.position.y = baseY + driftY * s;

    if (!reducedMotion) {
      pointer.x += (pointer.tx - pointer.x) * 0.045;
      pointer.y += (pointer.ty - pointer.y) * 0.045;
      const idle = clock.elapsedTime;
      rig.rotation.y = pointer.x * 0.16 + Math.sin(idle * 0.35) * 0.02;
      rig.rotation.x = pointer.y * 0.07 + Math.cos(idle * 0.28) * 0.012;
      world.position.x = pointer.x * 0.08;
    }
    updateDrops();
    renderer.render(scene, camera);
  }

  let rafId = 0;
  function tick() {
    rafId = requestAnimationFrame(tick);
    if (!visible) return;
    render();
  }

  if (reducedMotion) {
    pour.progress(0.78);   // pose final: el frasco lleno, ya sin decant encima
    render();
  } else {
    tick();
    intro.play();
  }

  function dispose() {
    cancelAnimationFrame(rafId);
    io.disconnect();
    window.removeEventListener('pointermove', onPointer);
    pour.kill(); intro.kill();
    scene.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => m.dispose());
    });
    envRT.dispose();
    shadowTex.dispose();
    renderer.dispose();
  }

  return { timeline: pour, resize, dispose, render, reducedMotion };
}
