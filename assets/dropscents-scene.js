/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Ja = "169";
const Hn = "", on = "srgb", Qn = "srgb-linear", $a = "display-p3", Ds = "display-p3-linear", vs = "linear", se = "srgb", xs = "rec709", Ss = "p3";
const Po = "300 es";
class nr {
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e);
  }
  hasEventListener(t, e) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[t] !== void 0 && n[t].indexOf(e) !== -1;
  }
  removeEventListener(t, e) {
    if (this._listeners === void 0) return;
    const i = this._listeners[t];
    if (i !== void 0) {
      const s = i.indexOf(e);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(t) {
    if (this._listeners === void 0) return;
    const n = this._listeners[t.type];
    if (n !== void 0) {
      t.target = this;
      const i = n.slice(0);
      for (let s = 0, a = i.length; s < a; s++)
        i[s].call(this, t);
      t.target = null;
    }
  }
}
const De = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Gs = Math.PI / 180, Pa = 180 / Math.PI;
function ir() {
  const r = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (De[r & 255] + De[r >> 8 & 255] + De[r >> 16 & 255] + De[r >> 24 & 255] + "-" + De[t & 255] + De[t >> 8 & 255] + "-" + De[t >> 16 & 15 | 64] + De[t >> 24 & 255] + "-" + De[e & 63 | 128] + De[e >> 8 & 255] + "-" + De[e >> 16 & 255] + De[e >> 24 & 255] + De[n & 255] + De[n >> 8 & 255] + De[n >> 16 & 255] + De[n >> 24 & 255]).toLowerCase();
}
function Ee(r, t, e) {
  return Math.max(t, Math.min(e, r));
}
function Eu(r, t) {
  return (r % t + t) % t;
}
function ks(r, t, e) {
  return (1 - e) * r + e * t;
}
function ar(r, t) {
  switch (t.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return r / 4294967295;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int32Array:
      return Math.max(r / 2147483647, -1);
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Oe(r, t) {
  switch (t.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return Math.round(r * 4294967295);
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int32Array:
      return Math.round(r * 2147483647);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class ot {
  constructor(t = 0, e = 0) {
    ot.prototype.isVector2 = !0, this.x = t, this.y = e;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return this.x = t, this.y = e, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, i = t.elements;
    return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(Ee(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y;
    return e * e + n * n;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this;
  }
  rotateAround(t, e) {
    const n = Math.cos(e), i = Math.sin(e), s = this.x - t.x, a = this.y - t.y;
    return this.x = s * n - a * i + t.x, this.y = s * i + a * n + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class kt {
  constructor(t, e, n, i, s, a, o, l, c) {
    kt.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, e, n, i, s, a, o, l, c);
  }
  set(t, e, n, i, s, a, o, l, c) {
    const u = this.elements;
    return u[0] = t, u[1] = i, u[2] = o, u[3] = e, u[4] = s, u[5] = l, u[6] = n, u[7] = a, u[8] = c, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t) {
    const e = t.elements;
    return this.set(
      e[0],
      e[4],
      e[8],
      e[1],
      e[5],
      e[9],
      e[2],
      e[6],
      e[10]
    ), this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, i = e.elements, s = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], u = n[4], h = n[7], f = n[2], d = n[5], g = n[8], _ = i[0], p = i[3], m = i[6], y = i[1], x = i[4], S = i[7], C = i[2], b = i[5], A = i[8];
    return s[0] = a * _ + o * y + l * C, s[3] = a * p + o * x + l * b, s[6] = a * m + o * S + l * A, s[1] = c * _ + u * y + h * C, s[4] = c * p + u * x + h * b, s[7] = c * m + u * S + h * A, s[2] = f * _ + d * y + g * C, s[5] = f * p + d * x + g * b, s[8] = f * m + d * S + g * A, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[1], i = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], u = t[8];
    return e * a * u - e * o * c - n * s * u + n * o * l + i * s * c - i * a * l;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], i = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], u = t[8], h = u * a - o * c, f = o * l - u * s, d = c * s - a * l, g = e * h + n * f + i * d;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return t[0] = h * _, t[1] = (i * c - u * n) * _, t[2] = (o * n - i * a) * _, t[3] = f * _, t[4] = (u * e - i * l) * _, t[5] = (i * s - o * e) * _, t[6] = d * _, t[7] = (n * l - c * e) * _, t[8] = (a * e - n * s) * _, this;
  }
  transpose() {
    let t;
    const e = this.elements;
    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const e = this.elements;
    return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
  }
  setUvTransform(t, e, n, i, s, a, o) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(
      n * l,
      n * c,
      -n * (l * a + c * o) + a + t,
      -i * c,
      i * l,
      -i * (-c * a + l * o) + o + e,
      0,
      0,
      1
    ), this;
  }
  //
  scale(t, e) {
    return this.premultiply(Vs.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply(Vs.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply(Vs.makeTranslation(t, e)), this;
  }
  // for 2D Transforms
  makeTranslation(t, e) {
    return t.isVector2 ? this.set(
      1,
      0,
      t.x,
      0,
      1,
      t.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      t,
      0,
      1,
      e,
      0,
      0,
      1
    ), this;
  }
  makeRotation(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      -n,
      0,
      n,
      e,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(t, e) {
    return this.set(
      t,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let i = 0; i < 9; i++)
      if (e[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Vs = /* @__PURE__ */ new kt();
function Zl(r) {
  for (let t = r.length - 1; t >= 0; --t)
    if (r[t] >= 65535) return !0;
  return !1;
}
function Ms(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
function Au() {
  const r = Ms("canvas");
  return r.style.display = "block", r;
}
const Do = {};
function ds(r) {
  r in Do || (Do[r] = !0, console.warn(r));
}
function bu(r, t, e) {
  return new Promise(function(n, i) {
    function s() {
      switch (r.clientWaitSync(t, r.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case r.WAIT_FAILED:
          i();
          break;
        case r.TIMEOUT_EXPIRED:
          setTimeout(s, e);
          break;
        default:
          n();
      }
    }
    setTimeout(s, e);
  });
}
function wu(r) {
  const t = r.elements;
  t[2] = 0.5 * t[2] + 0.5 * t[3], t[6] = 0.5 * t[6] + 0.5 * t[7], t[10] = 0.5 * t[10] + 0.5 * t[11], t[14] = 0.5 * t[14] + 0.5 * t[15];
}
function Ru(r) {
  const t = r.elements;
  t[11] === -1 ? (t[10] = -t[10] - 1, t[14] = -t[14]) : (t[10] = -t[10], t[14] = -t[14] + 1);
}
const Lo = /* @__PURE__ */ new kt().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), Io = /* @__PURE__ */ new kt().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), or = {
  [Qn]: {
    transfer: vs,
    primaries: xs,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (r) => r,
    fromReference: (r) => r
  },
  [on]: {
    transfer: se,
    primaries: xs,
    luminanceCoefficients: [0.2126, 0.7152, 0.0722],
    toReference: (r) => r.convertSRGBToLinear(),
    fromReference: (r) => r.convertLinearToSRGB()
  },
  [Ds]: {
    transfer: vs,
    primaries: Ss,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (r) => r.applyMatrix3(Io),
    fromReference: (r) => r.applyMatrix3(Lo)
  },
  [$a]: {
    transfer: se,
    primaries: Ss,
    luminanceCoefficients: [0.2289, 0.6917, 0.0793],
    toReference: (r) => r.convertSRGBToLinear().applyMatrix3(Io),
    fromReference: (r) => r.applyMatrix3(Lo).convertLinearToSRGB()
  }
}, Cu = /* @__PURE__ */ new Set([Qn, Ds]), jt = {
  enabled: !0,
  _workingColorSpace: Qn,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(r) {
    if (!Cu.has(r))
      throw new Error(`Unsupported working color space, "${r}".`);
    this._workingColorSpace = r;
  },
  convert: function(r, t, e) {
    if (this.enabled === !1 || t === e || !t || !e)
      return r;
    const n = or[t].toReference, i = or[e].fromReference;
    return i(n(r));
  },
  fromWorkingColorSpace: function(r, t) {
    return this.convert(r, this._workingColorSpace, t);
  },
  toWorkingColorSpace: function(r, t) {
    return this.convert(r, t, this._workingColorSpace);
  },
  getPrimaries: function(r) {
    return or[r].primaries;
  },
  getTransfer: function(r) {
    return r === Hn ? vs : or[r].transfer;
  },
  getLuminanceCoefficients: function(r, t = this._workingColorSpace) {
    return r.fromArray(or[t].luminanceCoefficients);
  }
};
function qi(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function Hs(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
let bi;
class Pu {
  static getDataURL(t) {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u")
      return t.src;
    let e;
    if (t instanceof HTMLCanvasElement)
      e = t;
    else {
      bi === void 0 && (bi = Ms("canvas")), bi.width = t.width, bi.height = t.height;
      const n = bi.getContext("2d");
      t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = bi;
    }
    return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", 0.6)) : e.toDataURL("image/png");
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const e = Ms("canvas");
      e.width = t.width, e.height = t.height;
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const i = n.getImageData(0, 0, t.width, t.height), s = i.data;
      for (let a = 0; a < s.length; a++)
        s[a] = qi(s[a] / 255) * 255;
      return n.putImageData(i, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let n = 0; n < e.length; n++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(qi(e[n] / 255) * 255) : e[n] = qi(e[n]);
      return {
        data: e,
        width: t.width,
        height: t.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let Du = 0;
class Jl {
  constructor(t = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Du++ }), this.uuid = ir(), this.data = t, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.images[this.uuid] !== void 0)
      return t.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let a = 0, o = i.length; a < o; a++)
          i[a].isDataTexture ? s.push(Ws(i[a].image)) : s.push(Ws(i[a]));
      } else
        s = Ws(i);
      n.url = s;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function Ws(r) {
  return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? Pu.getDataURL(r) : r.data ? {
    data: Array.from(r.data),
    width: r.width,
    height: r.height,
    type: r.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Lu = 0;
class Ue extends nr {
  constructor(t = Ue.DEFAULT_IMAGE, e = Ue.DEFAULT_MAPPING, n = 1001, i = 1001, s = 1006, a = 1008, o = 1023, l = 1009, c = Ue.DEFAULT_ANISOTROPY, u = Hn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Lu++ }), this.uuid = ir(), this.name = "", this.source = new Jl(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new ot(0, 0), this.repeat = new ot(1, 1), this.center = new ot(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new kt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.textures[this.uuid] !== void 0)
      return t.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(t).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== 300) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
      switch (this.wrapS) {
        case 1e3:
          t.x = t.x - Math.floor(t.x);
          break;
        case 1001:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case 1e3:
          t.y = t.y - Math.floor(t.y);
          break;
        case 1001:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
          break;
      }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(t) {
    t === !0 && this.pmremVersion++;
  }
}
Ue.DEFAULT_IMAGE = null;
Ue.DEFAULT_MAPPING = 300;
Ue.DEFAULT_ANISOTROPY = 1;
class te {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    te.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, n, i) {
    return this.x = t, this.y = e, this.z = n, this.w = i, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setW(t) {
    return this.w = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, i = this.z, s = this.w, a = t.elements;
    return this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * s, this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * s, this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * s, this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * s, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const e = Math.sqrt(1 - t.w * t.w);
    return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
  }
  setAxisAngleFromRotationMatrix(t) {
    let e, n, i, s;
    const l = t.elements, c = l[0], u = l[4], h = l[8], f = l[1], d = l[5], g = l[9], _ = l[2], p = l[6], m = l[10];
    if (Math.abs(u - f) < 0.01 && Math.abs(h - _) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(u + f) < 0.1 && Math.abs(h + _) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(c + d + m - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const x = (c + 1) / 2, S = (d + 1) / 2, C = (m + 1) / 2, b = (u + f) / 4, A = (h + _) / 4, P = (g + p) / 4;
      return x > S && x > C ? x < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(x), i = b / n, s = A / n) : S > C ? S < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(S), n = b / i, s = P / i) : C < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(C), n = A / s, i = P / s), this.set(n, i, s, e), this;
    }
    let y = Math.sqrt((p - g) * (p - g) + (h - _) * (h - _) + (f - u) * (f - u));
    return Math.abs(y) < 1e-3 && (y = 1), this.x = (p - g) / y, this.y = (h - _) / y, this.z = (f - u) / y, this.w = Math.acos((c + d + m - 1) / 2), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Iu extends nr {
  constructor(t = 1, e = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new te(0, 0, t, e), this.scissorTest = !1, this.viewport = new te(0, 0, t, e);
    const i = { width: t, height: e, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: 1006,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, n);
    const s = new Ue(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    s.flipY = !1, s.generateMipmaps = n.generateMipmaps, s.internalFormat = n.internalFormat, this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++)
      this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = !0;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(t) {
    this.textures[0] = t;
  }
  setSize(t, e, n = 1) {
    if (this.width !== t || this.height !== e || this.depth !== n) {
      this.width = t, this.height = e, this.depth = n;
      for (let i = 0, s = this.textures.length; i < s; i++)
        this.textures[i].image.width = t, this.textures[i].image.height = e, this.textures[i].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.textures.length = 0;
    for (let n = 0, i = t.textures.length; n < i; n++)
      this.textures[n] = t.textures[n].clone(), this.textures[n].isRenderTargetTexture = !0;
    const e = Object.assign({}, t.texture.image);
    return this.texture.source = new Jl(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class vi extends Iu {
  constructor(t = 1, e = 1, n = {}) {
    super(t, e, n), this.isWebGLRenderTarget = !0;
  }
}
class $l extends Ue {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: t, width: e, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Uu extends Ue {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: t, width: e, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class rr {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = t, this._y = e, this._z = n, this._w = i;
  }
  static slerpFlat(t, e, n, i, s, a, o) {
    let l = n[i + 0], c = n[i + 1], u = n[i + 2], h = n[i + 3];
    const f = s[a + 0], d = s[a + 1], g = s[a + 2], _ = s[a + 3];
    if (o === 0) {
      t[e + 0] = l, t[e + 1] = c, t[e + 2] = u, t[e + 3] = h;
      return;
    }
    if (o === 1) {
      t[e + 0] = f, t[e + 1] = d, t[e + 2] = g, t[e + 3] = _;
      return;
    }
    if (h !== _ || l !== f || c !== d || u !== g) {
      let p = 1 - o;
      const m = l * f + c * d + u * g + h * _, y = m >= 0 ? 1 : -1, x = 1 - m * m;
      if (x > Number.EPSILON) {
        const C = Math.sqrt(x), b = Math.atan2(C, m * y);
        p = Math.sin(p * b) / C, o = Math.sin(o * b) / C;
      }
      const S = o * y;
      if (l = l * p + f * S, c = c * p + d * S, u = u * p + g * S, h = h * p + _ * S, p === 1 - o) {
        const C = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
        l *= C, c *= C, u *= C, h *= C;
      }
    }
    t[e] = l, t[e + 1] = c, t[e + 2] = u, t[e + 3] = h;
  }
  static multiplyQuaternionsFlat(t, e, n, i, s, a) {
    const o = n[i], l = n[i + 1], c = n[i + 2], u = n[i + 3], h = s[a], f = s[a + 1], d = s[a + 2], g = s[a + 3];
    return t[e] = o * g + u * h + l * d - c * f, t[e + 1] = l * g + u * f + c * h - o * d, t[e + 2] = c * g + u * d + o * f - l * h, t[e + 3] = u * g - o * h - l * f - c * d, t;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  set(t, e, n, i) {
    return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  setFromEuler(t, e = !0) {
    const n = t._x, i = t._y, s = t._z, a = t._order, o = Math.cos, l = Math.sin, c = o(n / 2), u = o(i / 2), h = o(s / 2), f = l(n / 2), d = l(i / 2), g = l(s / 2);
    switch (a) {
      case "XYZ":
        this._x = f * u * h + c * d * g, this._y = c * d * h - f * u * g, this._z = c * u * g + f * d * h, this._w = c * u * h - f * d * g;
        break;
      case "YXZ":
        this._x = f * u * h + c * d * g, this._y = c * d * h - f * u * g, this._z = c * u * g - f * d * h, this._w = c * u * h + f * d * g;
        break;
      case "ZXY":
        this._x = f * u * h - c * d * g, this._y = c * d * h + f * u * g, this._z = c * u * g + f * d * h, this._w = c * u * h - f * d * g;
        break;
      case "ZYX":
        this._x = f * u * h - c * d * g, this._y = c * d * h + f * u * g, this._z = c * u * g - f * d * h, this._w = c * u * h + f * d * g;
        break;
      case "YZX":
        this._x = f * u * h + c * d * g, this._y = c * d * h + f * u * g, this._z = c * u * g - f * d * h, this._w = c * u * h - f * d * g;
        break;
      case "XZY":
        this._x = f * u * h - c * d * g, this._y = c * d * h - f * u * g, this._z = c * u * g + f * d * h, this._w = c * u * h + f * d * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return e === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    const n = e / 2, i = Math.sin(n);
    return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t) {
    const e = t.elements, n = e[0], i = e[4], s = e[8], a = e[1], o = e[5], l = e[9], c = e[2], u = e[6], h = e[10], f = n + o + h;
    if (f > 0) {
      const d = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / d, this._x = (u - l) * d, this._y = (s - c) * d, this._z = (a - i) * d;
    } else if (n > o && n > h) {
      const d = 2 * Math.sqrt(1 + n - o - h);
      this._w = (u - l) / d, this._x = 0.25 * d, this._y = (i + a) / d, this._z = (s + c) / d;
    } else if (o > h) {
      const d = 2 * Math.sqrt(1 + o - n - h);
      this._w = (s - c) / d, this._x = (i + a) / d, this._y = 0.25 * d, this._z = (l + u) / d;
    } else {
      const d = 2 * Math.sqrt(1 + h - n - o);
      this._w = (a - i) / d, this._x = (s + c) / d, this._y = (l + u) / d, this._z = 0.25 * d;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let n = t.dot(e) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(Ee(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const n = this.angleTo(t);
    if (n === 0) return this;
    const i = Math.min(1, e / n);
    return this.slerp(t, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let t = this.length();
    return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const n = t._x, i = t._y, s = t._z, a = t._w, o = e._x, l = e._y, c = e._z, u = e._w;
    return this._x = n * u + a * o + i * c - s * l, this._y = i * u + a * l + s * o - n * c, this._z = s * u + a * c + n * l - i * o, this._w = a * u - n * o - i * l - s * c, this._onChangeCallback(), this;
  }
  slerp(t, e) {
    if (e === 0) return this;
    if (e === 1) return this.copy(t);
    const n = this._x, i = this._y, s = this._z, a = this._w;
    let o = a * t._w + n * t._x + i * t._y + s * t._z;
    if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1)
      return this._w = a, this._x = n, this._y = i, this._z = s, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const d = 1 - e;
      return this._w = d * a + e * this._w, this._x = d * n + e * this._x, this._y = d * i + e * this._y, this._z = d * s + e * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), u = Math.atan2(c, o), h = Math.sin((1 - e) * u) / c, f = Math.sin(e * u) / c;
    return this._w = a * h + this._w * f, this._x = n * h + this._x * f, this._y = i * h + this._y * f, this._z = s * h + this._z * f, this._onChangeCallback(), this;
  }
  slerpQuaternions(t, e, n) {
    return this.copy(t).slerp(e, n);
  }
  random() {
    const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), s = Math.sqrt(n);
    return this.set(
      i * Math.sin(t),
      i * Math.cos(t),
      s * Math.sin(e),
      s * Math.cos(e)
    );
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  fromArray(t, e = 0) {
    return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
  }
  fromBufferAttribute(t, e) {
    return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class D {
  constructor(t = 0, e = 0, n = 0) {
    D.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = n;
  }
  set(t, e, n) {
    return n === void 0 && (n = this.z), this.x = t, this.y = e, this.z = n, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, e) {
    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion(Uo.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(Uo.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, i = this.z, s = t.elements;
    return this.x = s[0] * e + s[3] * n + s[6] * i, this.y = s[1] * e + s[4] * n + s[7] * i, this.z = s[2] * e + s[5] * n + s[8] * i, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, i = this.z, s = t.elements, a = 1 / (s[3] * e + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * e + s[4] * n + s[8] * i + s[12]) * a, this.y = (s[1] * e + s[5] * n + s[9] * i + s[13]) * a, this.z = (s[2] * e + s[6] * n + s[10] * i + s[14]) * a, this;
  }
  applyQuaternion(t) {
    const e = this.x, n = this.y, i = this.z, s = t.x, a = t.y, o = t.z, l = t.w, c = 2 * (a * i - o * n), u = 2 * (o * e - s * i), h = 2 * (s * n - a * e);
    return this.x = e + l * c + a * h - o * u, this.y = n + l * u + o * c - s * h, this.z = i + l * h + s * u - a * c, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const e = this.x, n = this.y, i = this.z, s = t.elements;
    return this.x = s[0] * e + s[4] * n + s[8] * i, this.y = s[1] * e + s[5] * n + s[9] * i, this.z = s[2] * e + s[6] * n + s[10] * i, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const n = t.x, i = t.y, s = t.z, a = e.x, o = e.y, l = e.z;
    return this.x = i * l - s * o, this.y = s * a - n * l, this.z = n * o - i * a, this;
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    const n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n);
  }
  projectOnPlane(t) {
    return Xs.copy(this).projectOnVector(t), this.sub(Xs);
  }
  reflect(t) {
    return this.sub(Xs.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(Ee(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y, i = this.z - t.z;
    return e * e + n * n + i * i;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, n) {
    const i = Math.sin(e) * t;
    return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, n) {
    return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this;
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), i = this.setFromMatrixColumn(t, 2).length();
    return this.x = e, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, e * 4);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, e * 3);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  setFromColor(t) {
    return this.x = t.r, this.y = t.g, this.z = t.b, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, n = Math.sqrt(1 - e * e);
    return this.x = n * Math.cos(t), this.y = e, this.z = n * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Xs = /* @__PURE__ */ new D(), Uo = /* @__PURE__ */ new rr();
class Si {
  constructor(t = new D(1 / 0, 1 / 0, 1 / 0), e = new D(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = t, this.max = e;
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e += 3)
      this.expandByPoint(fn.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, n = t.count; e < n; e++)
      this.expandByPoint(fn.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++)
      this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const n = fn.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
  }
  setFromObject(t, e = !1) {
    return this.makeEmpty(), this.expandByObject(t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t, e = !1) {
    t.updateWorldMatrix(!1, !1);
    const n = t.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (e === !0 && s !== void 0 && t.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          t.isMesh === !0 ? t.getVertexPosition(a, fn) : fn.fromBufferAttribute(s, a), fn.applyMatrix4(t.matrixWorld), this.expandByPoint(fn);
      else
        t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), Vr.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Vr.copy(n.boundingBox)), Vr.applyMatrix4(t.matrixWorld), this.union(Vr);
    }
    const i = t.children;
    for (let s = 0, a = i.length; s < a; s++)
      this.expandByObject(i[s], e);
    return this;
  }
  containsPoint(t) {
    return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z;
  }
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
  }
  getParameter(t, e) {
    return e.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y),
      (t.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(t) {
    return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z;
  }
  intersectsSphere(t) {
    return this.clampPoint(t.center, fn), fn.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let e, n;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty())
      return !1;
    this.getCenter(lr), Hr.subVectors(this.max, lr), wi.subVectors(t.a, lr), Ri.subVectors(t.b, lr), Ci.subVectors(t.c, lr), On.subVectors(Ri, wi), Bn.subVectors(Ci, Ri), ei.subVectors(wi, Ci);
    let e = [
      0,
      -On.z,
      On.y,
      0,
      -Bn.z,
      Bn.y,
      0,
      -ei.z,
      ei.y,
      On.z,
      0,
      -On.x,
      Bn.z,
      0,
      -Bn.x,
      ei.z,
      0,
      -ei.x,
      -On.y,
      On.x,
      0,
      -Bn.y,
      Bn.x,
      0,
      -ei.y,
      ei.x,
      0
    ];
    return !qs(e, wi, Ri, Ci, Hr) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !qs(e, wi, Ri, Ci, Hr)) ? !1 : (Wr.crossVectors(On, Bn), e = [Wr.x, Wr.y, Wr.z], qs(e, wi, Ri, Ci, Hr));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, fn).distanceTo(t);
  }
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(fn).length() * 0.5), t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() ? this : (bn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), bn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), bn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), bn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), bn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), bn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), bn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), bn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(bn), this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const bn = [
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D()
], fn = /* @__PURE__ */ new D(), Vr = /* @__PURE__ */ new Si(), wi = /* @__PURE__ */ new D(), Ri = /* @__PURE__ */ new D(), Ci = /* @__PURE__ */ new D(), On = /* @__PURE__ */ new D(), Bn = /* @__PURE__ */ new D(), ei = /* @__PURE__ */ new D(), lr = /* @__PURE__ */ new D(), Hr = /* @__PURE__ */ new D(), Wr = /* @__PURE__ */ new D(), ni = /* @__PURE__ */ new D();
function qs(r, t, e, n, i) {
  for (let s = 0, a = r.length - 3; s <= a; s += 3) {
    ni.fromArray(r, s);
    const o = i.x * Math.abs(ni.x) + i.y * Math.abs(ni.y) + i.z * Math.abs(ni.z), l = t.dot(ni), c = e.dot(ni), u = n.dot(ni);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o)
      return !1;
  }
  return !0;
}
const Nu = /* @__PURE__ */ new Si(), cr = /* @__PURE__ */ new D(), Ys = /* @__PURE__ */ new D();
class Fr {
  constructor(t = new D(), e = -1) {
    this.isSphere = !0, this.center = t, this.radius = e;
  }
  set(t, e) {
    return this.center.copy(t), this.radius = e, this;
  }
  setFromPoints(t, e) {
    const n = this.center;
    e !== void 0 ? n.copy(e) : Nu.setFromPoints(t).getCenter(n);
    let i = 0;
    for (let s = 0, a = t.length; s < a; s++)
      i = Math.max(i, n.distanceToSquared(t[s]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(t) {
    return this.center.copy(t.center), this.radius = t.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, e) {
    const n = this.center.distanceToSquared(t);
    return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
  }
  getBoundingBox(t) {
    return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
  }
  translate(t) {
    return this.center.add(t), this;
  }
  expandByPoint(t) {
    if (this.isEmpty())
      return this.center.copy(t), this.radius = 0, this;
    cr.subVectors(t, this.center);
    const e = cr.lengthSq();
    if (e > this.radius * this.radius) {
      const n = Math.sqrt(e), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(cr, i / n), this.radius += i;
    }
    return this;
  }
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (Ys.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(cr.copy(t.center).add(Ys)), this.expandByPoint(cr.copy(t.center).sub(Ys))), this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const wn = /* @__PURE__ */ new D(), Ks = /* @__PURE__ */ new D(), Xr = /* @__PURE__ */ new D(), zn = /* @__PURE__ */ new D(), Zs = /* @__PURE__ */ new D(), qr = /* @__PURE__ */ new D(), Js = /* @__PURE__ */ new D();
class Fu {
  constructor(t = new D(), e = new D(0, 0, -1)) {
    this.origin = t, this.direction = e;
  }
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, e) {
    return e.copy(this.origin).addScaledVector(this.direction, t);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, wn)), this;
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const n = e.dot(this.direction);
    return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const e = wn.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (wn.copy(this.origin).addScaledVector(this.direction, e), wn.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, n, i) {
    Ks.copy(t).add(e).multiplyScalar(0.5), Xr.copy(e).sub(t).normalize(), zn.copy(this.origin).sub(Ks);
    const s = t.distanceTo(e) * 0.5, a = -this.direction.dot(Xr), o = zn.dot(this.direction), l = -zn.dot(Xr), c = zn.lengthSq(), u = Math.abs(1 - a * a);
    let h, f, d, g;
    if (u > 0)
      if (h = a * l - o, f = a * o - l, g = s * u, h >= 0)
        if (f >= -g)
          if (f <= g) {
            const _ = 1 / u;
            h *= _, f *= _, d = h * (h + a * f + 2 * o) + f * (a * h + f + 2 * l) + c;
          } else
            f = s, h = Math.max(0, -(a * f + o)), d = -h * h + f * (f + 2 * l) + c;
        else
          f = -s, h = Math.max(0, -(a * f + o)), d = -h * h + f * (f + 2 * l) + c;
      else
        f <= -g ? (h = Math.max(0, -(-a * s + o)), f = h > 0 ? -s : Math.min(Math.max(-s, -l), s), d = -h * h + f * (f + 2 * l) + c) : f <= g ? (h = 0, f = Math.min(Math.max(-s, -l), s), d = f * (f + 2 * l) + c) : (h = Math.max(0, -(a * s + o)), f = h > 0 ? s : Math.min(Math.max(-s, -l), s), d = -h * h + f * (f + 2 * l) + c);
    else
      f = a > 0 ? -s : s, h = Math.max(0, -(a * f + o)), d = -h * h + f * (f + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, h), i && i.copy(Ks).addScaledVector(Xr, f), d;
  }
  intersectSphere(t, e) {
    wn.subVectors(t.center, this.origin);
    const n = wn.dot(this.direction), i = wn.dot(wn) - n * n, s = t.radius * t.radius;
    if (i > s) return null;
    const a = Math.sqrt(s - i), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, e) : this.at(o, e);
  }
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (e === 0)
      return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(t.normal) + t.constant) / e;
    return n >= 0 ? n : null;
  }
  intersectPlane(t, e) {
    const n = this.distanceToPlane(t);
    return n === null ? null : this.at(n, e);
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    return e === 0 || t.normal.dot(this.direction) * e < 0;
  }
  intersectBox(t, e) {
    let n, i, s, a, o, l;
    const c = 1 / this.direction.x, u = 1 / this.direction.y, h = 1 / this.direction.z, f = this.origin;
    return c >= 0 ? (n = (t.min.x - f.x) * c, i = (t.max.x - f.x) * c) : (n = (t.max.x - f.x) * c, i = (t.min.x - f.x) * c), u >= 0 ? (s = (t.min.y - f.y) * u, a = (t.max.y - f.y) * u) : (s = (t.max.y - f.y) * u, a = (t.min.y - f.y) * u), n > a || s > i || ((s > n || isNaN(n)) && (n = s), (a < i || isNaN(i)) && (i = a), h >= 0 ? (o = (t.min.z - f.z) * h, l = (t.max.z - f.z) * h) : (o = (t.max.z - f.z) * h, l = (t.min.z - f.z) * h), n > l || o > i) || ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, e);
  }
  intersectsBox(t) {
    return this.intersectBox(t, wn) !== null;
  }
  intersectTriangle(t, e, n, i, s) {
    Zs.subVectors(e, t), qr.subVectors(n, t), Js.crossVectors(Zs, qr);
    let a = this.direction.dot(Js), o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    zn.subVectors(this.origin, t);
    const l = o * this.direction.dot(qr.crossVectors(zn, qr));
    if (l < 0)
      return null;
    const c = o * this.direction.dot(Zs.cross(zn));
    if (c < 0 || l + c > a)
      return null;
    const u = -o * zn.dot(Js);
    return u < 0 ? null : this.at(u / a, s);
  }
  applyMatrix4(t) {
    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ee {
  constructor(t, e, n, i, s, a, o, l, c, u, h, f, d, g, _, p) {
    ee.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, e, n, i, s, a, o, l, c, u, h, f, d, g, _, p);
  }
  set(t, e, n, i, s, a, o, l, c, u, h, f, d, g, _, p) {
    const m = this.elements;
    return m[0] = t, m[4] = e, m[8] = n, m[12] = i, m[1] = s, m[5] = a, m[9] = o, m[13] = l, m[2] = c, m[6] = u, m[10] = h, m[14] = f, m[3] = d, m[7] = g, m[11] = _, m[15] = p, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new ee().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
  }
  copyPosition(t) {
    const e = this.elements, n = t.elements;
    return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
  }
  setFromMatrix3(t) {
    const e = t.elements;
    return this.set(
      e[0],
      e[3],
      e[6],
      0,
      e[1],
      e[4],
      e[7],
      0,
      e[2],
      e[5],
      e[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(t, e, n) {
    return this.set(
      t.x,
      e.x,
      n.x,
      0,
      t.y,
      e.y,
      n.y,
      0,
      t.z,
      e.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(t) {
    const e = this.elements, n = t.elements, i = 1 / Pi.setFromMatrixColumn(t, 0).length(), s = 1 / Pi.setFromMatrixColumn(t, 1).length(), a = 1 / Pi.setFromMatrixColumn(t, 2).length();
    return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * s, e[5] = n[5] * s, e[6] = n[6] * s, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const e = this.elements, n = t.x, i = t.y, s = t.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(i), c = Math.sin(i), u = Math.cos(s), h = Math.sin(s);
    if (t.order === "XYZ") {
      const f = a * u, d = a * h, g = o * u, _ = o * h;
      e[0] = l * u, e[4] = -l * h, e[8] = c, e[1] = d + g * c, e[5] = f - _ * c, e[9] = -o * l, e[2] = _ - f * c, e[6] = g + d * c, e[10] = a * l;
    } else if (t.order === "YXZ") {
      const f = l * u, d = l * h, g = c * u, _ = c * h;
      e[0] = f + _ * o, e[4] = g * o - d, e[8] = a * c, e[1] = a * h, e[5] = a * u, e[9] = -o, e[2] = d * o - g, e[6] = _ + f * o, e[10] = a * l;
    } else if (t.order === "ZXY") {
      const f = l * u, d = l * h, g = c * u, _ = c * h;
      e[0] = f - _ * o, e[4] = -a * h, e[8] = g + d * o, e[1] = d + g * o, e[5] = a * u, e[9] = _ - f * o, e[2] = -a * c, e[6] = o, e[10] = a * l;
    } else if (t.order === "ZYX") {
      const f = a * u, d = a * h, g = o * u, _ = o * h;
      e[0] = l * u, e[4] = g * c - d, e[8] = f * c + _, e[1] = l * h, e[5] = _ * c + f, e[9] = d * c - g, e[2] = -c, e[6] = o * l, e[10] = a * l;
    } else if (t.order === "YZX") {
      const f = a * l, d = a * c, g = o * l, _ = o * c;
      e[0] = l * u, e[4] = _ - f * h, e[8] = g * h + d, e[1] = h, e[5] = a * u, e[9] = -o * u, e[2] = -c * u, e[6] = d * h + g, e[10] = f - _ * h;
    } else if (t.order === "XZY") {
      const f = a * l, d = a * c, g = o * l, _ = o * c;
      e[0] = l * u, e[4] = -h, e[8] = c * u, e[1] = f * h + _, e[5] = a * u, e[9] = d * h - g, e[2] = g * h - d, e[6] = o * u, e[10] = _ * h + f;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Ou, t, Bu);
  }
  lookAt(t, e, n) {
    const i = this.elements;
    return qe.subVectors(t, e), qe.lengthSq() === 0 && (qe.z = 1), qe.normalize(), Gn.crossVectors(n, qe), Gn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? qe.x += 1e-4 : qe.z += 1e-4, qe.normalize(), Gn.crossVectors(n, qe)), Gn.normalize(), Yr.crossVectors(qe, Gn), i[0] = Gn.x, i[4] = Yr.x, i[8] = qe.x, i[1] = Gn.y, i[5] = Yr.y, i[9] = qe.y, i[2] = Gn.z, i[6] = Yr.z, i[10] = qe.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, i = e.elements, s = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], u = n[1], h = n[5], f = n[9], d = n[13], g = n[2], _ = n[6], p = n[10], m = n[14], y = n[3], x = n[7], S = n[11], C = n[15], b = i[0], A = i[4], P = i[8], L = i[12], v = i[1], T = i[5], G = i[9], F = i[13], B = i[2], q = i[6], O = i[10], Z = i[14], W = i[3], lt = i[7], rt = i[11], ht = i[15];
    return s[0] = a * b + o * v + l * B + c * W, s[4] = a * A + o * T + l * q + c * lt, s[8] = a * P + o * G + l * O + c * rt, s[12] = a * L + o * F + l * Z + c * ht, s[1] = u * b + h * v + f * B + d * W, s[5] = u * A + h * T + f * q + d * lt, s[9] = u * P + h * G + f * O + d * rt, s[13] = u * L + h * F + f * Z + d * ht, s[2] = g * b + _ * v + p * B + m * W, s[6] = g * A + _ * T + p * q + m * lt, s[10] = g * P + _ * G + p * O + m * rt, s[14] = g * L + _ * F + p * Z + m * ht, s[3] = y * b + x * v + S * B + C * W, s[7] = y * A + x * T + S * q + C * lt, s[11] = y * P + x * G + S * O + C * rt, s[15] = y * L + x * F + S * Z + C * ht, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[4], i = t[8], s = t[12], a = t[1], o = t[5], l = t[9], c = t[13], u = t[2], h = t[6], f = t[10], d = t[14], g = t[3], _ = t[7], p = t[11], m = t[15];
    return g * (+s * l * h - i * c * h - s * o * f + n * c * f + i * o * d - n * l * d) + _ * (+e * l * d - e * c * f + s * a * f - i * a * d + i * c * u - s * l * u) + p * (+e * c * h - e * o * d - s * a * h + n * a * d + s * o * u - n * c * u) + m * (-i * o * u - e * l * h + e * o * f + i * a * h - n * a * f + n * l * u);
  }
  transpose() {
    const t = this.elements;
    let e;
    return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
  }
  setPosition(t, e, n) {
    const i = this.elements;
    return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], i = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], u = t[8], h = t[9], f = t[10], d = t[11], g = t[12], _ = t[13], p = t[14], m = t[15], y = h * p * c - _ * f * c + _ * l * d - o * p * d - h * l * m + o * f * m, x = g * f * c - u * p * c - g * l * d + a * p * d + u * l * m - a * f * m, S = u * _ * c - g * h * c + g * o * d - a * _ * d - u * o * m + a * h * m, C = g * h * l - u * _ * l - g * o * f + a * _ * f + u * o * p - a * h * p, b = e * y + n * x + i * S + s * C;
    if (b === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const A = 1 / b;
    return t[0] = y * A, t[1] = (_ * f * s - h * p * s - _ * i * d + n * p * d + h * i * m - n * f * m) * A, t[2] = (o * p * s - _ * l * s + _ * i * c - n * p * c - o * i * m + n * l * m) * A, t[3] = (h * l * s - o * f * s - h * i * c + n * f * c + o * i * d - n * l * d) * A, t[4] = x * A, t[5] = (u * p * s - g * f * s + g * i * d - e * p * d - u * i * m + e * f * m) * A, t[6] = (g * l * s - a * p * s - g * i * c + e * p * c + a * i * m - e * l * m) * A, t[7] = (a * f * s - u * l * s + u * i * c - e * f * c - a * i * d + e * l * d) * A, t[8] = S * A, t[9] = (g * h * s - u * _ * s - g * n * d + e * _ * d + u * n * m - e * h * m) * A, t[10] = (a * _ * s - g * o * s + g * n * c - e * _ * c - a * n * m + e * o * m) * A, t[11] = (u * o * s - a * h * s - u * n * c + e * h * c + a * n * d - e * o * d) * A, t[12] = C * A, t[13] = (u * _ * i - g * h * i + g * n * f - e * _ * f - u * n * p + e * h * p) * A, t[14] = (g * o * i - a * _ * i - g * n * l + e * _ * l + a * n * p - e * o * p) * A, t[15] = (a * h * i - u * o * i + u * n * l - e * h * l - a * n * f + e * o * f) * A, this;
  }
  scale(t) {
    const e = this.elements, n = t.x, i = t.y, s = t.z;
    return e[0] *= n, e[4] *= i, e[8] *= s, e[1] *= n, e[5] *= i, e[9] *= s, e[2] *= n, e[6] *= i, e[10] *= s, e[3] *= n, e[7] *= i, e[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, n, i));
  }
  makeTranslation(t, e, n) {
    return t.isVector3 ? this.set(
      1,
      0,
      0,
      t.x,
      0,
      1,
      0,
      t.y,
      0,
      0,
      1,
      t.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      t,
      0,
      1,
      0,
      e,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      e,
      -n,
      0,
      0,
      n,
      e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      -n,
      0,
      0,
      n,
      e,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(t, e) {
    const n = Math.cos(e), i = Math.sin(e), s = 1 - n, a = t.x, o = t.y, l = t.z, c = s * a, u = s * o;
    return this.set(
      c * a + n,
      c * o - i * l,
      c * l + i * o,
      0,
      c * o + i * l,
      u * o + n,
      u * l - i * a,
      0,
      c * l - i * o,
      u * l + i * a,
      s * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(t, e, n) {
    return this.set(
      t,
      0,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(t, e, n, i, s, a) {
    return this.set(
      1,
      n,
      s,
      0,
      t,
      1,
      a,
      0,
      e,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(t, e, n) {
    const i = this.elements, s = e._x, a = e._y, o = e._z, l = e._w, c = s + s, u = a + a, h = o + o, f = s * c, d = s * u, g = s * h, _ = a * u, p = a * h, m = o * h, y = l * c, x = l * u, S = l * h, C = n.x, b = n.y, A = n.z;
    return i[0] = (1 - (_ + m)) * C, i[1] = (d + S) * C, i[2] = (g - x) * C, i[3] = 0, i[4] = (d - S) * b, i[5] = (1 - (f + m)) * b, i[6] = (p + y) * b, i[7] = 0, i[8] = (g + x) * A, i[9] = (p - y) * A, i[10] = (1 - (f + _)) * A, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this;
  }
  decompose(t, e, n) {
    const i = this.elements;
    let s = Pi.set(i[0], i[1], i[2]).length();
    const a = Pi.set(i[4], i[5], i[6]).length(), o = Pi.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), t.x = i[12], t.y = i[13], t.z = i[14], dn.copy(this);
    const c = 1 / s, u = 1 / a, h = 1 / o;
    return dn.elements[0] *= c, dn.elements[1] *= c, dn.elements[2] *= c, dn.elements[4] *= u, dn.elements[5] *= u, dn.elements[6] *= u, dn.elements[8] *= h, dn.elements[9] *= h, dn.elements[10] *= h, e.setFromRotationMatrix(dn), n.x = s, n.y = a, n.z = o, this;
  }
  makePerspective(t, e, n, i, s, a, o = 2e3) {
    const l = this.elements, c = 2 * s / (e - t), u = 2 * s / (n - i), h = (e + t) / (e - t), f = (n + i) / (n - i);
    let d, g;
    if (o === 2e3)
      d = -(a + s) / (a - s), g = -2 * a * s / (a - s);
    else if (o === 2001)
      d = -a / (a - s), g = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = h, l[12] = 0, l[1] = 0, l[5] = u, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = d, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(t, e, n, i, s, a, o = 2e3) {
    const l = this.elements, c = 1 / (e - t), u = 1 / (n - i), h = 1 / (a - s), f = (e + t) * c, d = (n + i) * u;
    let g, _;
    if (o === 2e3)
      g = (a + s) * h, _ = -2 * h;
    else if (o === 2001)
      g = s * h, _ = -1 * h;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -f, l[1] = 0, l[5] = 2 * u, l[9] = 0, l[13] = -d, l[2] = 0, l[6] = 0, l[10] = _, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let i = 0; i < 16; i++)
      if (e[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
  }
}
const Pi = /* @__PURE__ */ new D(), dn = /* @__PURE__ */ new ee(), Ou = /* @__PURE__ */ new D(0, 0, 0), Bu = /* @__PURE__ */ new D(1, 1, 1), Gn = /* @__PURE__ */ new D(), Yr = /* @__PURE__ */ new D(), qe = /* @__PURE__ */ new D(), No = /* @__PURE__ */ new ee(), Fo = /* @__PURE__ */ new rr();
class yn {
  constructor(t = 0, e = 0, n = 0, i = yn.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = t, this._y = e, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  set(t, e, n, i = this._order) {
    return this._x = t, this._y = e, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, e = this._order, n = !0) {
    const i = t.elements, s = i[0], a = i[4], o = i[8], l = i[1], c = i[5], u = i[9], h = i[2], f = i[6], d = i[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(Ee(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-u, d), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(f, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ee(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(o, d), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ee(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-Ee(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(f, d), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(Ee(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-h, s)) : (this._x = 0, this._y = Math.atan2(o, d));
        break;
      case "XZY":
        this._z = Math.asin(-Ee(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-u, d), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    }
    return this._order = e, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, n) {
    return No.makeRotationFromQuaternion(t), this.setFromRotationMatrix(No, e, n);
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return Fo.setFromEuler(this), this.setFromQuaternion(Fo, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
yn.DEFAULT_ORDER = "XYZ";
class jl {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = (1 << t | 0) >>> 0;
  }
  enable(t) {
    this.mask |= 1 << t | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= 1 << t | 0;
  }
  disable(t) {
    this.mask &= ~(1 << t | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  isEnabled(t) {
    return (this.mask & (1 << t | 0)) !== 0;
  }
}
let zu = 0;
const Oo = /* @__PURE__ */ new D(), Di = /* @__PURE__ */ new rr(), Rn = /* @__PURE__ */ new ee(), Kr = /* @__PURE__ */ new D(), ur = /* @__PURE__ */ new D(), Gu = /* @__PURE__ */ new D(), ku = /* @__PURE__ */ new rr(), Bo = /* @__PURE__ */ new D(1, 0, 0), zo = /* @__PURE__ */ new D(0, 1, 0), Go = /* @__PURE__ */ new D(0, 0, 1), ko = { type: "added" }, Vu = { type: "removed" }, Li = { type: "childadded", child: null }, $s = { type: "childremoved", child: null };
class Ce extends nr {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: zu++ }), this.uuid = ir(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Ce.DEFAULT_UP.clone();
    const t = new D(), e = new yn(), n = new rr(), i = new D(1, 1, 1);
    function s() {
      n.setFromEuler(e, !1);
    }
    function a() {
      e.setFromQuaternion(n, void 0, !1);
    }
    e._onChange(s), n._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new ee()
      },
      normalMatrix: {
        value: new kt()
      }
    }), this.matrix = new ee(), this.matrixWorld = new ee(), this.matrixAutoUpdate = Ce.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new jl(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return Di.setFromAxisAngle(t, e), this.quaternion.multiply(Di), this;
  }
  rotateOnWorldAxis(t, e) {
    return Di.setFromAxisAngle(t, e), this.quaternion.premultiply(Di), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(Bo, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(zo, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(Go, t);
  }
  translateOnAxis(t, e) {
    return Oo.copy(t).applyQuaternion(this.quaternion), this.position.add(Oo.multiplyScalar(e)), this;
  }
  translateX(t) {
    return this.translateOnAxis(Bo, t);
  }
  translateY(t) {
    return this.translateOnAxis(zo, t);
  }
  translateZ(t) {
    return this.translateOnAxis(Go, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(Rn.copy(this.matrixWorld).invert());
  }
  lookAt(t, e, n) {
    t.isVector3 ? Kr.copy(t) : Kr.set(t, e, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), ur.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Rn.lookAt(ur, Kr, this.up) : Rn.lookAt(Kr, ur, this.up), this.quaternion.setFromRotationMatrix(Rn), i && (Rn.extractRotation(i.matrixWorld), Di.setFromRotationMatrix(Rn), this.quaternion.premultiply(Di.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++)
        this.add(arguments[e]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(ko), Li.child = t, this.dispatchEvent(Li), Li.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const e = this.children.indexOf(t);
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Vu), $s.child = t, this.dispatchEvent($s), $s.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(!0, !1), Rn.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), Rn.multiply(t.parent.matrixWorld)), t.applyMatrix4(Rn), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(ko), Li.child = t, this.dispatchEvent(Li), Li.child = null, this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(t, e);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(t, e, n = []) {
    this[t] === e && n.push(this);
    const i = this.children;
    for (let s = 0, a = i.length; s < a; s++)
      i[s].getObjectsByProperty(t, e, n);
    return n;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ur, t, Gu), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ur, ku, t), t;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {
  }
  traverse(t) {
    t(this);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++)
      e[n].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === !1) return;
    t(this);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++)
      e[n].traverseVisible(t);
  }
  traverseAncestors(t) {
    const e = this.parent;
    e !== null && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, t = !0);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++)
      e[n].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, e) {
    const n = this.parent;
    if (t === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), e === !0) {
      const i = this.children;
      for (let s = 0, a = i.length; s < a; s++)
        i[s].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string", n = {};
    e && (t = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((o) => ({
      boxInitialized: o.boxInitialized,
      boxMin: o.box.min.toArray(),
      boxMax: o.box.max.toArray(),
      sphereInitialized: o.sphereInitialized,
      sphereRadius: o.sphere.radius,
      sphereCenter: o.sphere.center.toArray()
    })), i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(t), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (i.boundingSphere = {
      center: i.boundingSphere.center.toArray(),
      radius: i.boundingSphere.radius
    }), this.boundingBox !== null && (i.boundingBox = {
      min: i.boundingBox.min.toArray(),
      max: i.boundingBox.max.toArray()
    }));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(t)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(t.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const h = l[c];
            s(t.shapes, h);
          }
        else
          s(t.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(t.materials, this.material[l]));
        i.material = o;
      } else
        i.material = s(t.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        i.animations.push(s(t.animations, l));
      }
    }
    if (e) {
      const o = a(t.geometries), l = a(t.materials), c = a(t.textures), u = a(t.images), h = a(t.shapes), f = a(t.skeletons), d = a(t.animations), g = a(t.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), h.length > 0 && (n.shapes = h), f.length > 0 && (n.skeletons = f), d.length > 0 && (n.animations = d), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const u = o[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = !0) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === !0)
      for (let n = 0; n < t.children.length; n++) {
        const i = t.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
Ce.DEFAULT_UP = /* @__PURE__ */ new D(0, 1, 0);
Ce.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const pn = /* @__PURE__ */ new D(), Cn = /* @__PURE__ */ new D(), js = /* @__PURE__ */ new D(), Pn = /* @__PURE__ */ new D(), Ii = /* @__PURE__ */ new D(), Ui = /* @__PURE__ */ new D(), Vo = /* @__PURE__ */ new D(), Qs = /* @__PURE__ */ new D(), ta = /* @__PURE__ */ new D(), ea = /* @__PURE__ */ new D(), na = /* @__PURE__ */ new te(), ia = /* @__PURE__ */ new te(), ra = /* @__PURE__ */ new te();
class mn {
  constructor(t = new D(), e = new D(), n = new D()) {
    this.a = t, this.b = e, this.c = n;
  }
  static getNormal(t, e, n, i) {
    i.subVectors(n, e), pn.subVectors(t, e), i.cross(pn);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(t, e, n, i, s) {
    pn.subVectors(i, e), Cn.subVectors(n, e), js.subVectors(t, e);
    const a = pn.dot(pn), o = pn.dot(Cn), l = pn.dot(js), c = Cn.dot(Cn), u = Cn.dot(js), h = a * c - o * o;
    if (h === 0)
      return s.set(0, 0, 0), null;
    const f = 1 / h, d = (c * l - o * u) * f, g = (a * u - o * l) * f;
    return s.set(1 - d - g, g, d);
  }
  static containsPoint(t, e, n, i) {
    return this.getBarycoord(t, e, n, i, Pn) === null ? !1 : Pn.x >= 0 && Pn.y >= 0 && Pn.x + Pn.y <= 1;
  }
  static getInterpolation(t, e, n, i, s, a, o, l) {
    return this.getBarycoord(t, e, n, i, Pn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, Pn.x), l.addScaledVector(a, Pn.y), l.addScaledVector(o, Pn.z), l);
  }
  static getInterpolatedAttribute(t, e, n, i, s, a) {
    return na.setScalar(0), ia.setScalar(0), ra.setScalar(0), na.fromBufferAttribute(t, e), ia.fromBufferAttribute(t, n), ra.fromBufferAttribute(t, i), a.setScalar(0), a.addScaledVector(na, s.x), a.addScaledVector(ia, s.y), a.addScaledVector(ra, s.z), a;
  }
  static isFrontFacing(t, e, n, i) {
    return pn.subVectors(n, e), Cn.subVectors(t, e), pn.cross(Cn).dot(i) < 0;
  }
  set(t, e, n) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
  }
  setFromPointsAndIndices(t, e, n, i) {
    return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
  }
  setFromAttributeAndIndices(t, e, n, i) {
    return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return pn.subVectors(this.c, this.b), Cn.subVectors(this.a, this.b), pn.cross(Cn).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return mn.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return mn.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getInterpolation(t, e, n, i, s) {
    return mn.getInterpolation(t, this.a, this.b, this.c, e, n, i, s);
  }
  containsPoint(t) {
    return mn.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return mn.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const n = this.a, i = this.b, s = this.c;
    let a, o;
    Ii.subVectors(i, n), Ui.subVectors(s, n), Qs.subVectors(t, n);
    const l = Ii.dot(Qs), c = Ui.dot(Qs);
    if (l <= 0 && c <= 0)
      return e.copy(n);
    ta.subVectors(t, i);
    const u = Ii.dot(ta), h = Ui.dot(ta);
    if (u >= 0 && h <= u)
      return e.copy(i);
    const f = l * h - u * c;
    if (f <= 0 && l >= 0 && u <= 0)
      return a = l / (l - u), e.copy(n).addScaledVector(Ii, a);
    ea.subVectors(t, s);
    const d = Ii.dot(ea), g = Ui.dot(ea);
    if (g >= 0 && d <= g)
      return e.copy(s);
    const _ = d * c - l * g;
    if (_ <= 0 && c >= 0 && g <= 0)
      return o = c / (c - g), e.copy(n).addScaledVector(Ui, o);
    const p = u * g - d * h;
    if (p <= 0 && h - u >= 0 && d - g >= 0)
      return Vo.subVectors(s, i), o = (h - u) / (h - u + (d - g)), e.copy(i).addScaledVector(Vo, o);
    const m = 1 / (p + _ + f);
    return a = _ * m, o = f * m, e.copy(n).addScaledVector(Ii, a).addScaledVector(Ui, o);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
const Ql = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, kn = { h: 0, s: 0, l: 0 }, Zr = { h: 0, s: 0, l: 0 };
function sa(r, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? r + (t - r) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? r + (t - r) * 6 * (2 / 3 - e) : r;
}
class Xt {
  constructor(t, e, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, n);
  }
  set(t, e, n) {
    if (e === void 0 && n === void 0) {
      const i = t;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else
      this.setRGB(t, e, n);
    return this;
  }
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  setHex(t, e = on) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, jt.toWorkingColorSpace(this, e), this;
  }
  setRGB(t, e, n, i = jt.workingColorSpace) {
    return this.r = t, this.g = e, this.b = n, jt.toWorkingColorSpace(this, i), this;
  }
  setHSL(t, e, n, i = jt.workingColorSpace) {
    if (t = Eu(t, 1), e = Ee(e, 0, 1), n = Ee(n, 0, 1), e === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + e) : n + e - n * e, a = 2 * n - s;
      this.r = sa(a, s, t + 1 / 3), this.g = sa(a, s, t), this.b = sa(a, s, t - 1 / 3);
    }
    return jt.toWorkingColorSpace(this, i), this;
  }
  setStyle(t, e = on) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(t)) {
      let s;
      const a = i[1], o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              e
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              e
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              e
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + t);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      const s = i[1], a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          e
        );
      if (a === 6)
        return this.setHex(parseInt(s, 16), e);
      console.warn("THREE.Color: Invalid hex color " + t);
    } else if (t && t.length > 0)
      return this.setColorName(t, e);
    return this;
  }
  setColorName(t, e = on) {
    const n = Ql[t.toLowerCase()];
    return n !== void 0 ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = qi(t.r), this.g = qi(t.g), this.b = qi(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = Hs(t.r), this.g = Hs(t.g), this.b = Hs(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = on) {
    return jt.fromWorkingColorSpace(Le.copy(this), t), Math.round(Ee(Le.r * 255, 0, 255)) * 65536 + Math.round(Ee(Le.g * 255, 0, 255)) * 256 + Math.round(Ee(Le.b * 255, 0, 255));
  }
  getHexString(t = on) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = jt.workingColorSpace) {
    jt.fromWorkingColorSpace(Le.copy(this), e);
    const n = Le.r, i = Le.g, s = Le.b, a = Math.max(n, i, s), o = Math.min(n, i, s);
    let l, c;
    const u = (o + a) / 2;
    if (o === a)
      l = 0, c = 0;
    else {
      const h = a - o;
      switch (c = u <= 0.5 ? h / (a + o) : h / (2 - a - o), a) {
        case n:
          l = (i - s) / h + (i < s ? 6 : 0);
          break;
        case i:
          l = (s - n) / h + 2;
          break;
        case s:
          l = (n - i) / h + 4;
          break;
      }
      l /= 6;
    }
    return t.h = l, t.s = c, t.l = u, t;
  }
  getRGB(t, e = jt.workingColorSpace) {
    return jt.fromWorkingColorSpace(Le.copy(this), e), t.r = Le.r, t.g = Le.g, t.b = Le.b, t;
  }
  getStyle(t = on) {
    jt.fromWorkingColorSpace(Le.copy(this), t);
    const e = Le.r, n = Le.g, i = Le.b;
    return t !== on ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(t, e, n) {
    return this.getHSL(kn), this.setHSL(kn.h + t, kn.s + e, kn.l + n);
  }
  add(t) {
    return this.r += t.r, this.g += t.g, this.b += t.b, this;
  }
  addColors(t, e) {
    return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
  }
  addScalar(t) {
    return this.r += t, this.g += t, this.b += t, this;
  }
  sub(t) {
    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
  }
  multiply(t) {
    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
  }
  multiplyScalar(t) {
    return this.r *= t, this.g *= t, this.b *= t, this;
  }
  lerp(t, e) {
    return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
  }
  lerpColors(t, e, n) {
    return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this;
  }
  lerpHSL(t, e) {
    this.getHSL(kn), t.getHSL(Zr);
    const n = ks(kn.h, Zr.h, e), i = ks(kn.s, Zr.s, e), s = ks(kn.l, Zr.l, e);
    return this.setHSL(n, i, s), this;
  }
  setFromVector3(t) {
    return this.r = t.x, this.g = t.y, this.b = t.z, this;
  }
  applyMatrix3(t) {
    const e = this.r, n = this.g, i = this.b, s = t.elements;
    return this.r = s[0] * e + s[3] * n + s[6] * i, this.g = s[1] * e + s[4] * n + s[7] * i, this.b = s[2] * e + s[5] * n + s[8] * i, this;
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, e = 0) {
    return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
  }
  fromBufferAttribute(t, e) {
    return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Le = /* @__PURE__ */ new Xt();
Xt.NAMES = Ql;
let Hu = 0;
class Or extends nr {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Hu++ }), this.uuid = ir(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Xt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
  }
  // onBeforeRender and onBeforeCompile only supported in WebGLRenderer
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(t) {
    if (t !== void 0)
      for (const e in t) {
        const n = t[e];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
          continue;
        }
        const i = this[e];
        if (i === void 0) {
          console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n;
      }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    e && (t = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== 204 && (n.blendSrc = this.blendSrc), this.blendDst !== 205 && (n.blendDst = this.blendDst), this.blendEquation !== 100 && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (n.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const a = [];
      for (const o in s) {
        const l = s[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (e) {
      const s = i(t.textures), a = i(t.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
    const e = t.clippingPlanes;
    let n = null;
    if (e !== null) {
      const i = e.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s)
        n[s] = e[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class ja extends Or {
  constructor(t) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Xt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new yn(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const ve = /* @__PURE__ */ new D(), Jr = /* @__PURE__ */ new ot();
class Qe {
  constructor(t, e, n = !1) {
    if (Array.isArray(t))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = 35044, this.updateRanges = [], this.gpuType = 1015, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this;
  }
  copyAt(t, e, n) {
    t *= this.itemSize, n *= e.itemSize;
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[t + i] = e.array[n + i];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (this.itemSize === 2)
      for (let e = 0, n = this.count; e < n; e++)
        Jr.fromBufferAttribute(this, e), Jr.applyMatrix3(t), this.setXY(e, Jr.x, Jr.y);
    else if (this.itemSize === 3)
      for (let e = 0, n = this.count; e < n; e++)
        ve.fromBufferAttribute(this, e), ve.applyMatrix3(t), this.setXYZ(e, ve.x, ve.y, ve.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.count; e < n; e++)
      ve.fromBufferAttribute(this, e), ve.applyMatrix4(t), this.setXYZ(e, ve.x, ve.y, ve.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      ve.fromBufferAttribute(this, e), ve.applyNormalMatrix(t), this.setXYZ(e, ve.x, ve.y, ve.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      ve.fromBufferAttribute(this, e), ve.transformDirection(t), this.setXYZ(e, ve.x, ve.y, ve.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.itemSize + e];
    return this.normalized && (n = ar(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return this.normalized && (n = Oe(n, this.array)), this.array[t * this.itemSize + e] = n, this;
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = ar(e, this.array)), e;
  }
  setX(t, e) {
    return this.normalized && (e = Oe(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = ar(e, this.array)), e;
  }
  setY(t, e) {
    return this.normalized && (e = Oe(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = ar(e, this.array)), e;
  }
  setZ(t, e) {
    return this.normalized && (e = Oe(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = ar(e, this.array)), e;
  }
  setW(t, e) {
    return this.normalized && (e = Oe(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
  }
  setXY(t, e, n) {
    return t *= this.itemSize, this.normalized && (e = Oe(e, this.array), n = Oe(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, i) {
    return t *= this.itemSize, this.normalized && (e = Oe(e, this.array), n = Oe(n, this.array), i = Oe(i, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this;
  }
  setXYZW(t, e, n, i, s) {
    return t *= this.itemSize, this.normalized && (e = Oe(e, this.array), n = Oe(n, this.array), i = Oe(i, this.array), s = Oe(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = s, this;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (t.name = this.name), this.usage !== 35044 && (t.usage = this.usage), t;
  }
}
class tc extends Qe {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
class ec extends Qe {
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
}
class ge extends Qe {
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
}
let Wu = 0;
const sn = /* @__PURE__ */ new ee(), aa = /* @__PURE__ */ new Ce(), Ni = /* @__PURE__ */ new D(), Ye = /* @__PURE__ */ new Si(), hr = /* @__PURE__ */ new Si(), Te = /* @__PURE__ */ new D();
class un extends nr {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Wu++ }), this.uuid = ir(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (Zl(t) ? ec : tc)(t, 1) : this.index = t, this;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return this.attributes[t] = e, this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, e, n = 0) {
    this.groups.push({
      start: t,
      count: e,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    this.drawRange.start = t, this.drawRange.count = e;
  }
  applyMatrix4(t) {
    const e = this.attributes.position;
    e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new kt().getNormalMatrix(t);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(t), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(t) {
    return sn.makeRotationFromQuaternion(t), this.applyMatrix4(sn), this;
  }
  rotateX(t) {
    return sn.makeRotationX(t), this.applyMatrix4(sn), this;
  }
  rotateY(t) {
    return sn.makeRotationY(t), this.applyMatrix4(sn), this;
  }
  rotateZ(t) {
    return sn.makeRotationZ(t), this.applyMatrix4(sn), this;
  }
  translate(t, e, n) {
    return sn.makeTranslation(t, e, n), this.applyMatrix4(sn), this;
  }
  scale(t, e, n) {
    return sn.makeScale(t, e, n), this.applyMatrix4(sn), this;
  }
  lookAt(t) {
    return aa.lookAt(t), aa.updateMatrix(), this.applyMatrix4(aa.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Ni).negate(), this.translate(Ni.x, Ni.y, Ni.z), this;
  }
  setFromPoints(t) {
    const e = [];
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      e.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new ge(e, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Si());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new D(-1 / 0, -1 / 0, -1 / 0),
        new D(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), e)
        for (let n = 0, i = e.length; n < i; n++) {
          const s = e[n];
          Ye.setFromBufferAttribute(s), this.morphTargetsRelative ? (Te.addVectors(this.boundingBox.min, Ye.min), this.boundingBox.expandByPoint(Te), Te.addVectors(this.boundingBox.max, Ye.max), this.boundingBox.expandByPoint(Te)) : (this.boundingBox.expandByPoint(Ye.min), this.boundingBox.expandByPoint(Ye.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Fr());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new D(), 1 / 0);
      return;
    }
    if (t) {
      const n = this.boundingSphere.center;
      if (Ye.setFromBufferAttribute(t), e)
        for (let s = 0, a = e.length; s < a; s++) {
          const o = e[s];
          hr.setFromBufferAttribute(o), this.morphTargetsRelative ? (Te.addVectors(Ye.min, hr.min), Ye.expandByPoint(Te), Te.addVectors(Ye.max, hr.max), Ye.expandByPoint(Te)) : (Ye.expandByPoint(hr.min), Ye.expandByPoint(hr.max));
        }
      Ye.getCenter(n);
      let i = 0;
      for (let s = 0, a = t.count; s < a; s++)
        Te.fromBufferAttribute(t, s), i = Math.max(i, n.distanceToSquared(Te));
      if (e)
        for (let s = 0, a = e.length; s < a; s++) {
          const o = e[s], l = this.morphTargetsRelative;
          for (let c = 0, u = o.count; c < u; c++)
            Te.fromBufferAttribute(o, c), l && (Ni.fromBufferAttribute(t, c), Te.add(Ni)), i = Math.max(i, n.distanceToSquared(Te));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const t = this.index, e = this.attributes;
    if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.position, i = e.normal, s = e.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Qe(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let P = 0; P < n.count; P++)
      o[P] = new D(), l[P] = new D();
    const c = new D(), u = new D(), h = new D(), f = new ot(), d = new ot(), g = new ot(), _ = new D(), p = new D();
    function m(P, L, v) {
      c.fromBufferAttribute(n, P), u.fromBufferAttribute(n, L), h.fromBufferAttribute(n, v), f.fromBufferAttribute(s, P), d.fromBufferAttribute(s, L), g.fromBufferAttribute(s, v), u.sub(c), h.sub(c), d.sub(f), g.sub(f);
      const T = 1 / (d.x * g.y - g.x * d.y);
      isFinite(T) && (_.copy(u).multiplyScalar(g.y).addScaledVector(h, -d.y).multiplyScalar(T), p.copy(h).multiplyScalar(d.x).addScaledVector(u, -g.x).multiplyScalar(T), o[P].add(_), o[L].add(_), o[v].add(_), l[P].add(p), l[L].add(p), l[v].add(p));
    }
    let y = this.groups;
    y.length === 0 && (y = [{
      start: 0,
      count: t.count
    }]);
    for (let P = 0, L = y.length; P < L; ++P) {
      const v = y[P], T = v.start, G = v.count;
      for (let F = T, B = T + G; F < B; F += 3)
        m(
          t.getX(F + 0),
          t.getX(F + 1),
          t.getX(F + 2)
        );
    }
    const x = new D(), S = new D(), C = new D(), b = new D();
    function A(P) {
      C.fromBufferAttribute(i, P), b.copy(C);
      const L = o[P];
      x.copy(L), x.sub(C.multiplyScalar(C.dot(L))).normalize(), S.crossVectors(b, L);
      const T = S.dot(l[P]) < 0 ? -1 : 1;
      a.setXYZW(P, x.x, x.y, x.z, T);
    }
    for (let P = 0, L = y.length; P < L; ++P) {
      const v = y[P], T = v.start, G = v.count;
      for (let F = T, B = T + G; F < B; F += 3)
        A(t.getX(F + 0)), A(t.getX(F + 1)), A(t.getX(F + 2));
    }
  }
  computeVertexNormals() {
    const t = this.index, e = this.getAttribute("position");
    if (e !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Qe(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let f = 0, d = n.count; f < d; f++)
          n.setXYZ(f, 0, 0, 0);
      const i = new D(), s = new D(), a = new D(), o = new D(), l = new D(), c = new D(), u = new D(), h = new D();
      if (t)
        for (let f = 0, d = t.count; f < d; f += 3) {
          const g = t.getX(f + 0), _ = t.getX(f + 1), p = t.getX(f + 2);
          i.fromBufferAttribute(e, g), s.fromBufferAttribute(e, _), a.fromBufferAttribute(e, p), u.subVectors(a, s), h.subVectors(i, s), u.cross(h), o.fromBufferAttribute(n, g), l.fromBufferAttribute(n, _), c.fromBufferAttribute(n, p), o.add(u), l.add(u), c.add(u), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(_, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let f = 0, d = e.count; f < d; f += 3)
          i.fromBufferAttribute(e, f + 0), s.fromBufferAttribute(e, f + 1), a.fromBufferAttribute(e, f + 2), u.subVectors(a, s), h.subVectors(i, s), u.cross(h), n.setXYZ(f + 0, u.x, u.y, u.z), n.setXYZ(f + 1, u.x, u.y, u.z), n.setXYZ(f + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, n = t.count; e < n; e++)
      Te.fromBufferAttribute(t, e), Te.normalize(), t.setXYZ(e, Te.x, Te.y, Te.z);
  }
  toNonIndexed() {
    function t(o, l) {
      const c = o.array, u = o.itemSize, h = o.normalized, f = new c.constructor(l.length * u);
      let d = 0, g = 0;
      for (let _ = 0, p = l.length; _ < p; _++) {
        o.isInterleavedBufferAttribute ? d = l[_] * o.data.stride + o.offset : d = l[_] * u;
        for (let m = 0; m < u; m++)
          f[g++] = c[d++];
      }
      return new Qe(f, u, h);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new un(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const l = i[o], c = t(l, n);
      e.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let u = 0, h = c.length; u < h; u++) {
        const f = c[u], d = t(f, n);
        l.push(d);
      }
      e.morphAttributes[o] = l;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      e.addGroup(c.start, c.count, c.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (t[c] = l[c]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null && (t.data.index = {
      type: e.array.constructor.name,
      array: Array.prototype.slice.call(e.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      t.data.attributes[l] = c.toJSON(t.data);
    }
    const i = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], u = [];
      for (let h = 0, f = c.length; h < f; h++) {
        const d = c[h];
        u.push(d.toJSON(t.data));
      }
      u.length > 0 && (i[l] = u, s = !0);
    }
    s && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (t.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), t;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const e = {};
    this.name = t.name;
    const n = t.index;
    n !== null && this.setIndex(n.clone(e));
    const i = t.attributes;
    for (const c in i) {
      const u = i[c];
      this.setAttribute(c, u.clone(e));
    }
    const s = t.morphAttributes;
    for (const c in s) {
      const u = [], h = s[c];
      for (let f = 0, d = h.length; f < d; f++)
        u.push(h[f].clone(e));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const a = t.groups;
    for (let c = 0, u = a.length; c < u; c++) {
      const h = a[c];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const o = t.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = t.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Ho = /* @__PURE__ */ new ee(), ii = /* @__PURE__ */ new Fu(), $r = /* @__PURE__ */ new Fr(), Wo = /* @__PURE__ */ new D(), jr = /* @__PURE__ */ new D(), Qr = /* @__PURE__ */ new D(), ts = /* @__PURE__ */ new D(), oa = /* @__PURE__ */ new D(), es = /* @__PURE__ */ new D(), Xo = /* @__PURE__ */ new D(), ns = /* @__PURE__ */ new D();
class ae extends Ce {
  constructor(t = new un(), e = new ja()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const i = e[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  getVertexPosition(t, e) {
    const n = this.geometry, i = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    e.fromBufferAttribute(i, t);
    const o = this.morphTargetInfluences;
    if (s && o) {
      es.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = o[l], h = s[l];
        u !== 0 && (oa.fromBufferAttribute(h, t), a ? es.addScaledVector(oa, u) : es.addScaledVector(oa.sub(e), u));
      }
      e.add(es);
    }
    return e;
  }
  raycast(t, e) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), $r.copy(n.boundingSphere), $r.applyMatrix4(s), ii.copy(t.ray).recast(t.near), !($r.containsPoint(ii.origin) === !1 && (ii.intersectSphere($r, Wo) === null || ii.origin.distanceToSquared(Wo) > (t.far - t.near) ** 2)) && (Ho.copy(s).invert(), ii.copy(t.ray).applyMatrix4(Ho), !(n.boundingBox !== null && ii.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(t, e, ii)));
  }
  _computeIntersections(t, e, n) {
    let i;
    const s = this.geometry, a = this.material, o = s.index, l = s.attributes.position, c = s.attributes.uv, u = s.attributes.uv1, h = s.attributes.normal, f = s.groups, d = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, _ = f.length; g < _; g++) {
          const p = f[g], m = a[p.materialIndex], y = Math.max(p.start, d.start), x = Math.min(o.count, Math.min(p.start + p.count, d.start + d.count));
          for (let S = y, C = x; S < C; S += 3) {
            const b = o.getX(S), A = o.getX(S + 1), P = o.getX(S + 2);
            i = is(this, m, t, n, c, u, h, b, A, P), i && (i.faceIndex = Math.floor(S / 3), i.face.materialIndex = p.materialIndex, e.push(i));
          }
        }
      else {
        const g = Math.max(0, d.start), _ = Math.min(o.count, d.start + d.count);
        for (let p = g, m = _; p < m; p += 3) {
          const y = o.getX(p), x = o.getX(p + 1), S = o.getX(p + 2);
          i = is(this, a, t, n, c, u, h, y, x, S), i && (i.faceIndex = Math.floor(p / 3), e.push(i));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let g = 0, _ = f.length; g < _; g++) {
          const p = f[g], m = a[p.materialIndex], y = Math.max(p.start, d.start), x = Math.min(l.count, Math.min(p.start + p.count, d.start + d.count));
          for (let S = y, C = x; S < C; S += 3) {
            const b = S, A = S + 1, P = S + 2;
            i = is(this, m, t, n, c, u, h, b, A, P), i && (i.faceIndex = Math.floor(S / 3), i.face.materialIndex = p.materialIndex, e.push(i));
          }
        }
      else {
        const g = Math.max(0, d.start), _ = Math.min(l.count, d.start + d.count);
        for (let p = g, m = _; p < m; p += 3) {
          const y = p, x = p + 1, S = p + 2;
          i = is(this, a, t, n, c, u, h, y, x, S), i && (i.faceIndex = Math.floor(p / 3), e.push(i));
        }
      }
  }
}
function Xu(r, t, e, n, i, s, a, o) {
  let l;
  if (t.side === 1 ? l = n.intersectTriangle(a, s, i, !0, o) : l = n.intersectTriangle(i, s, a, t.side === 0, o), l === null) return null;
  ns.copy(o), ns.applyMatrix4(r.matrixWorld);
  const c = e.ray.origin.distanceTo(ns);
  return c < e.near || c > e.far ? null : {
    distance: c,
    point: ns.clone(),
    object: r
  };
}
function is(r, t, e, n, i, s, a, o, l, c) {
  r.getVertexPosition(o, jr), r.getVertexPosition(l, Qr), r.getVertexPosition(c, ts);
  const u = Xu(r, t, e, n, jr, Qr, ts, Xo);
  if (u) {
    const h = new D();
    mn.getBarycoord(Xo, jr, Qr, ts, h), i && (u.uv = mn.getInterpolatedAttribute(i, o, l, c, h, new ot())), s && (u.uv1 = mn.getInterpolatedAttribute(s, o, l, c, h, new ot())), a && (u.normal = mn.getInterpolatedAttribute(a, o, l, c, h, new D()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const f = {
      a: o,
      b: l,
      c,
      normal: new D(),
      materialIndex: 0
    };
    mn.getNormal(jr, Qr, ts, f.normal), u.face = f, u.barycoord = h;
  }
  return u;
}
class Br extends un {
  constructor(t = 1, e = 1, n = 1, i = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: t,
      height: e,
      depth: n,
      widthSegments: i,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    i = Math.floor(i), s = Math.floor(s), a = Math.floor(a);
    const l = [], c = [], u = [], h = [];
    let f = 0, d = 0;
    g("z", "y", "x", -1, -1, n, e, t, a, s, 0), g("z", "y", "x", 1, -1, n, e, -t, a, s, 1), g("x", "z", "y", 1, 1, t, n, e, i, a, 2), g("x", "z", "y", 1, -1, t, n, -e, i, a, 3), g("x", "y", "z", 1, -1, t, e, n, i, s, 4), g("x", "y", "z", -1, -1, t, e, -n, i, s, 5), this.setIndex(l), this.setAttribute("position", new ge(c, 3)), this.setAttribute("normal", new ge(u, 3)), this.setAttribute("uv", new ge(h, 2));
    function g(_, p, m, y, x, S, C, b, A, P, L) {
      const v = S / A, T = C / P, G = S / 2, F = C / 2, B = b / 2, q = A + 1, O = P + 1;
      let Z = 0, W = 0;
      const lt = new D();
      for (let rt = 0; rt < O; rt++) {
        const ht = rt * T - F;
        for (let Ft = 0; Ft < q; Ft++) {
          const Ht = Ft * v - G;
          lt[_] = Ht * y, lt[p] = ht * x, lt[m] = B, c.push(lt.x, lt.y, lt.z), lt[_] = 0, lt[p] = 0, lt[m] = b > 0 ? 1 : -1, u.push(lt.x, lt.y, lt.z), h.push(Ft / A), h.push(1 - rt / P), Z += 1;
        }
      }
      for (let rt = 0; rt < P; rt++)
        for (let ht = 0; ht < A; ht++) {
          const Ft = f + ht + q * rt, Ht = f + ht + q * (rt + 1), V = f + (ht + 1) + q * (rt + 1), Q = f + (ht + 1) + q * rt;
          l.push(Ft, Ht, Q), l.push(Ht, V, Q), W += 6;
        }
      o.addGroup(d, W, L), d += W, f += Z;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Br(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
function Ji(r) {
  const t = {};
  for (const e in r) {
    t[e] = {};
    for (const n in r[e]) {
      const i = r[e][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][n] = null) : t[e][n] = i.clone() : Array.isArray(i) ? t[e][n] = i.slice() : t[e][n] = i;
    }
  }
  return t;
}
function Fe(r) {
  const t = {};
  for (let e = 0; e < r.length; e++) {
    const n = Ji(r[e]);
    for (const i in n)
      t[i] = n[i];
  }
  return t;
}
function qu(r) {
  const t = [];
  for (let e = 0; e < r.length; e++)
    t.push(r[e].clone());
  return t;
}
function nc(r) {
  const t = r.getRenderTarget();
  return t === null ? r.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : jt.workingColorSpace;
}
const Yu = { clone: Ji, merge: Fe };
var Ku = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Zu = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Zn extends Or {
  constructor(t) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Ku, this.fragmentShader = Zu, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, t !== void 0 && this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Ji(t.uniforms), this.uniformsGroups = qu(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    e.glslVersion = this.glslVersion, e.uniforms = {};
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture ? e.uniforms[i] = {
        type: "t",
        value: a.toJSON(t).uuid
      } : a && a.isColor ? e.uniforms[i] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? e.uniforms[i] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? e.uniforms[i] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? e.uniforms[i] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? e.uniforms[i] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? e.uniforms[i] = {
        type: "m4",
        value: a.toArray()
      } : e.uniforms[i] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (e.extensions = n), e;
  }
}
class ic extends Ce {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ee(), this.projectionMatrix = new ee(), this.projectionMatrixInverse = new ee(), this.coordinateSystem = 2e3;
  }
  copy(t, e) {
    return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this;
  }
  getWorldDirection(t) {
    return super.getWorldDirection(t).negate();
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(t, e) {
    super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Vn = /* @__PURE__ */ new D(), qo = /* @__PURE__ */ new ot(), Yo = /* @__PURE__ */ new ot();
class Ze extends ic {
  constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(t) {
    const e = 0.5 * this.getFilmHeight() / t;
    this.fov = Pa * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const t = Math.tan(Gs * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  getEffectiveFOV() {
    return Pa * 2 * Math.atan(
      Math.tan(Gs * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   */
  getViewBounds(t, e, n) {
    Vn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(Vn.x, Vn.y).multiplyScalar(-t / Vn.z), Vn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Vn.x, Vn.y).multiplyScalar(-t / Vn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(t, e) {
    return this.getViewBounds(t, qo, Yo), e.subVectors(Yo, qo);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(t, e, n, i, s, a) {
    this.aspect = t / e, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = this.near;
    let e = t * Math.tan(Gs * 0.5 * this.fov) / this.zoom, n = 2 * e, i = this.aspect * n, s = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      s += a.offsetX * i / l, e -= a.offsetY * n / c, i *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (s += t * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, e, e - n, t, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
  }
}
const Fi = -90, Oi = 1;
class Ju extends Ce {
  constructor(t, e, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new Ze(Fi, Oi, t, e);
    i.layers = this.layers, this.add(i);
    const s = new Ze(Fi, Oi, t, e);
    s.layers = this.layers, this.add(s);
    const a = new Ze(Fi, Oi, t, e);
    a.layers = this.layers, this.add(a);
    const o = new Ze(Fi, Oi, t, e);
    o.layers = this.layers, this.add(o);
    const l = new Ze(Fi, Oi, t, e);
    l.layers = this.layers, this.add(l);
    const c = new Ze(Fi, Oi, t, e);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const t = this.coordinateSystem, e = this.children.concat(), [n, i, s, a, o, l] = e;
    for (const c of e) this.remove(c);
    if (t === 2e3)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (t === 2001)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
    for (const c of e)
      this.add(c), c.updateMatrixWorld();
  }
  update(t, e) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, l, c, u] = this.children, h = t.getRenderTarget(), f = t.getActiveCubeFace(), d = t.getActiveMipmapLevel(), g = t.xr.enabled;
    t.xr.enabled = !1;
    const _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0, i), t.render(e, s), t.setRenderTarget(n, 1, i), t.render(e, a), t.setRenderTarget(n, 2, i), t.render(e, o), t.setRenderTarget(n, 3, i), t.render(e, l), t.setRenderTarget(n, 4, i), t.render(e, c), n.texture.generateMipmaps = _, t.setRenderTarget(n, 5, i), t.render(e, u), t.setRenderTarget(h, f, d), t.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class rc extends Ue {
  constructor(t, e, n, i, s, a, o, l, c, u) {
    t = t !== void 0 ? t : [], e = e !== void 0 ? e : 301, super(t, e, n, i, s, a, o, l, c, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class $u extends vi {
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = !0;
    const n = { width: t, height: t, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new rc(i, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : !1, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : 1006;
  }
  fromEquirectangularTexture(t, e) {
    this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, i = new Br(5, 5, 5), s = new Zn({
      name: "CubemapFromEquirect",
      uniforms: Ji(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    s.uniforms.tEquirect.value = e;
    const a = new ae(i, s), o = e.minFilter;
    return e.minFilter === 1008 && (e.minFilter = 1006), new Ju(1, 10, this).update(t, a), e.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(t, e, n, i) {
    const s = t.getRenderTarget();
    for (let a = 0; a < 6; a++)
      t.setRenderTarget(this, a), t.clear(e, n, i);
    t.setRenderTarget(s);
  }
}
const la = /* @__PURE__ */ new D(), ju = /* @__PURE__ */ new D(), Qu = /* @__PURE__ */ new kt();
class ci {
  constructor(t = new D(1, 0, 0), e = 0) {
    this.isPlane = !0, this.normal = t, this.constant = e;
  }
  set(t, e) {
    return this.normal.copy(t), this.constant = e, this;
  }
  setComponents(t, e, n, i) {
    return this.normal.set(t, e, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
  }
  setFromCoplanarPoints(t, e, n) {
    const i = la.subVectors(n, e).cross(ju.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, t), this;
  }
  copy(t) {
    return this.normal.copy(t.normal), this.constant = t.constant, this;
  }
  normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), this.constant *= t, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  projectPoint(t, e) {
    return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
  }
  intersectLine(t, e) {
    const n = t.delta(la), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
    const s = -(t.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : e.copy(t.start).addScaledVector(n, s);
  }
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end);
    return e < 0 && n > 0 || n < 0 && e > 0;
  }
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t, e) {
    const n = e || Qu.getNormalMatrix(t), i = this.coplanarPoint(la).applyMatrix4(t), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(s), this;
  }
  translate(t) {
    return this.constant -= t.dot(this.normal), this;
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ri = /* @__PURE__ */ new Fr(), rs = /* @__PURE__ */ new D();
class Qa {
  constructor(t = new ci(), e = new ci(), n = new ci(), i = new ci(), s = new ci(), a = new ci()) {
    this.planes = [t, e, n, i, s, a];
  }
  set(t, e, n, i, s, a) {
    const o = this.planes;
    return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(i), o[4].copy(s), o[5].copy(a), this;
  }
  copy(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++)
      e[n].copy(t.planes[n]);
    return this;
  }
  setFromProjectionMatrix(t, e = 2e3) {
    const n = this.planes, i = t.elements, s = i[0], a = i[1], o = i[2], l = i[3], c = i[4], u = i[5], h = i[6], f = i[7], d = i[8], g = i[9], _ = i[10], p = i[11], m = i[12], y = i[13], x = i[14], S = i[15];
    if (n[0].setComponents(l - s, f - c, p - d, S - m).normalize(), n[1].setComponents(l + s, f + c, p + d, S + m).normalize(), n[2].setComponents(l + a, f + u, p + g, S + y).normalize(), n[3].setComponents(l - a, f - u, p - g, S - y).normalize(), n[4].setComponents(l - o, f - h, p - _, S - x).normalize(), e === 2e3)
      n[5].setComponents(l + o, f + h, p + _, S + x).normalize();
    else if (e === 2001)
      n[5].setComponents(o, h, _, x).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
    return this;
  }
  intersectsObject(t) {
    if (t.boundingSphere !== void 0)
      t.boundingSphere === null && t.computeBoundingSphere(), ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(), ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(ri);
  }
  intersectsSprite(t) {
    return ri.center.set(0, 0, 0), ri.radius = 0.7071067811865476, ri.applyMatrix4(t.matrixWorld), this.intersectsSphere(ri);
  }
  intersectsSphere(t) {
    const e = this.planes, n = t.center, i = -t.radius;
    for (let s = 0; s < 6; s++)
      if (e[s].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = e[n];
      if (rs.x = i.normal.x > 0 ? t.max.x : t.min.x, rs.y = i.normal.y > 0 ? t.max.y : t.min.y, rs.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint(rs) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++)
      if (e[n].distanceToPoint(t) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function sc() {
  let r = null, t = !1, e = null, n = null;
  function i(s, a) {
    e(s, a), n = r.requestAnimationFrame(i);
  }
  return {
    start: function() {
      t !== !0 && e !== null && (n = r.requestAnimationFrame(i), t = !0);
    },
    stop: function() {
      r.cancelAnimationFrame(n), t = !1;
    },
    setAnimationLoop: function(s) {
      e = s;
    },
    setContext: function(s) {
      r = s;
    }
  };
}
function th(r) {
  const t = /* @__PURE__ */ new WeakMap();
  function e(o, l) {
    const c = o.array, u = o.usage, h = c.byteLength, f = r.createBuffer();
    r.bindBuffer(l, f), r.bufferData(l, c, u), o.onUploadCallback();
    let d;
    if (c instanceof Float32Array)
      d = r.FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? d = r.HALF_FLOAT : d = r.UNSIGNED_SHORT;
    else if (c instanceof Int16Array)
      d = r.SHORT;
    else if (c instanceof Uint32Array)
      d = r.UNSIGNED_INT;
    else if (c instanceof Int32Array)
      d = r.INT;
    else if (c instanceof Int8Array)
      d = r.BYTE;
    else if (c instanceof Uint8Array)
      d = r.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray)
      d = r.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: f,
      type: d,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: h
    };
  }
  function n(o, l, c) {
    const u = l.array, h = l.updateRanges;
    if (r.bindBuffer(c, o), h.length === 0)
      r.bufferSubData(c, 0, u);
    else {
      h.sort((d, g) => d.start - g.start);
      let f = 0;
      for (let d = 1; d < h.length; d++) {
        const g = h[f], _ = h[d];
        _.start <= g.start + g.count + 1 ? g.count = Math.max(
          g.count,
          _.start + _.count - g.start
        ) : (++f, h[f] = _);
      }
      h.length = f + 1;
      for (let d = 0, g = h.length; d < g; d++) {
        const _ = h[d];
        r.bufferSubData(
          c,
          _.start * u.BYTES_PER_ELEMENT,
          u,
          _.start,
          _.count
        );
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function i(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), t.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = t.get(o);
    l && (r.deleteBuffer(l.buffer), t.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const u = t.get(o);
      (!u || u.version < o.version) && t.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const c = t.get(o);
    if (c === void 0)
      t.set(o, e(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return {
    get: i,
    remove: s,
    update: a
  };
}
class zr extends un {
  constructor(t = 1, e = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: t,
      height: e,
      widthSegments: n,
      heightSegments: i
    };
    const s = t / 2, a = e / 2, o = Math.floor(n), l = Math.floor(i), c = o + 1, u = l + 1, h = t / o, f = e / l, d = [], g = [], _ = [], p = [];
    for (let m = 0; m < u; m++) {
      const y = m * f - a;
      for (let x = 0; x < c; x++) {
        const S = x * h - s;
        g.push(S, -y, 0), _.push(0, 0, 1), p.push(x / o), p.push(1 - m / l);
      }
    }
    for (let m = 0; m < l; m++)
      for (let y = 0; y < o; y++) {
        const x = y + c * m, S = y + c * (m + 1), C = y + 1 + c * (m + 1), b = y + 1 + c * m;
        d.push(x, S, b), d.push(S, C, b);
      }
    this.setIndex(d), this.setAttribute("position", new ge(g, 3)), this.setAttribute("normal", new ge(_, 3)), this.setAttribute("uv", new ge(p, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new zr(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
var eh = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, nh = `#ifdef USE_ALPHAHASH
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
#endif`, ih = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, rh = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, sh = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, ah = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, oh = `#ifdef USE_AOMAP
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
#endif`, lh = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, ch = `#ifdef USE_BATCHING
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
#endif`, uh = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, hh = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, fh = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, dh = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, ph = `#ifdef USE_IRIDESCENCE
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
#endif`, mh = `#ifdef USE_BUMPMAP
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
#endif`, _h = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, gh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, vh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, xh = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Sh = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Mh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, yh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Th = `#if defined( USE_COLOR_ALPHA )
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
#endif`, Eh = `#define PI 3.141592653589793
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
} // validated`, Ah = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, bh = `vec3 transformedNormal = objectNormal;
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
#endif`, wh = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Rh = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Ch = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Ph = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Dh = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Lh = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Ih = `#ifdef USE_ENVMAP
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
#endif`, Uh = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Nh = `#ifdef USE_ENVMAP
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
#endif`, Fh = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Oh = `#ifdef USE_ENVMAP
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
#endif`, Bh = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, zh = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Gh = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, kh = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Vh = `#ifdef USE_GRADIENTMAP
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
}`, Hh = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Wh = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Xh = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, qh = `uniform bool receiveShadow;
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
#endif`, Yh = `#ifdef USE_ENVMAP
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
#endif`, Kh = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Zh = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Jh = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, $h = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, jh = `PhysicalMaterial material;
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
#endif`, Qh = `struct PhysicalMaterial {
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
}`, tf = `
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
#endif`, ef = `#if defined( RE_IndirectDiffuse )
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
#endif`, nf = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, rf = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, sf = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, af = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, of = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, lf = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, cf = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, uf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, hf = `#if defined( USE_POINTS_UV )
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
#endif`, ff = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, df = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, pf = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, mf = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, _f = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, gf = `#ifdef USE_MORPHTARGETS
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
#endif`, vf = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, xf = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, Sf = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, Mf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, yf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Tf = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Ef = `#ifdef USE_NORMALMAP
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
#endif`, Af = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, bf = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, wf = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Rf = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Cf = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Pf = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, Df = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Lf = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, If = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Uf = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Nf = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Ff = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Of = `#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`, Bf = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, zf = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, Gf = `float getShadowMask() {
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
}`, kf = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Vf = `#ifdef USE_SKINNING
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
#endif`, Hf = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Wf = `#ifdef USE_SKINNING
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
#endif`, Xf = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, qf = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Yf = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Kf = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, Zf = `#ifdef USE_TRANSMISSION
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
#endif`, Jf = `#ifdef USE_TRANSMISSION
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
#endif`, $f = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, jf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Qf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, td = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const ed = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, nd = `uniform sampler2D t2D;
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
}`, id = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, rd = `#ifdef ENVMAP_TYPE_CUBE
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
}`, sd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, ad = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, od = `#include <common>
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
}`, ld = `#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, cd = `#define DISTANCE
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
}`, ud = `#define DISTANCE
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
}`, hd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, fd = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, dd = `uniform float scale;
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
}`, pd = `uniform vec3 diffuse;
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
}`, md = `#include <common>
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
}`, _d = `uniform vec3 diffuse;
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
}`, gd = `#define LAMBERT
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
}`, vd = `#define LAMBERT
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
}`, xd = `#define MATCAP
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
}`, Sd = `#define MATCAP
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
}`, Md = `#define NORMAL
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
}`, yd = `#define NORMAL
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
}`, Td = `#define PHONG
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
}`, Ed = `#define PHONG
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
}`, Ad = `#define STANDARD
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
}`, bd = `#define STANDARD
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
}`, wd = `#define TOON
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
}`, Rd = `#define TOON
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
}`, Cd = `uniform float size;
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
}`, Pd = `uniform vec3 diffuse;
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
}`, Dd = `#include <common>
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
}`, Ld = `uniform vec3 color;
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
}`, Id = `uniform float rotation;
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
}`, Ud = `uniform vec3 diffuse;
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
}`, Gt = {
  alphahash_fragment: eh,
  alphahash_pars_fragment: nh,
  alphamap_fragment: ih,
  alphamap_pars_fragment: rh,
  alphatest_fragment: sh,
  alphatest_pars_fragment: ah,
  aomap_fragment: oh,
  aomap_pars_fragment: lh,
  batching_pars_vertex: ch,
  batching_vertex: uh,
  begin_vertex: hh,
  beginnormal_vertex: fh,
  bsdfs: dh,
  iridescence_fragment: ph,
  bumpmap_pars_fragment: mh,
  clipping_planes_fragment: _h,
  clipping_planes_pars_fragment: gh,
  clipping_planes_pars_vertex: vh,
  clipping_planes_vertex: xh,
  color_fragment: Sh,
  color_pars_fragment: Mh,
  color_pars_vertex: yh,
  color_vertex: Th,
  common: Eh,
  cube_uv_reflection_fragment: Ah,
  defaultnormal_vertex: bh,
  displacementmap_pars_vertex: wh,
  displacementmap_vertex: Rh,
  emissivemap_fragment: Ch,
  emissivemap_pars_fragment: Ph,
  colorspace_fragment: Dh,
  colorspace_pars_fragment: Lh,
  envmap_fragment: Ih,
  envmap_common_pars_fragment: Uh,
  envmap_pars_fragment: Nh,
  envmap_pars_vertex: Fh,
  envmap_physical_pars_fragment: Yh,
  envmap_vertex: Oh,
  fog_vertex: Bh,
  fog_pars_vertex: zh,
  fog_fragment: Gh,
  fog_pars_fragment: kh,
  gradientmap_pars_fragment: Vh,
  lightmap_pars_fragment: Hh,
  lights_lambert_fragment: Wh,
  lights_lambert_pars_fragment: Xh,
  lights_pars_begin: qh,
  lights_toon_fragment: Kh,
  lights_toon_pars_fragment: Zh,
  lights_phong_fragment: Jh,
  lights_phong_pars_fragment: $h,
  lights_physical_fragment: jh,
  lights_physical_pars_fragment: Qh,
  lights_fragment_begin: tf,
  lights_fragment_maps: ef,
  lights_fragment_end: nf,
  logdepthbuf_fragment: rf,
  logdepthbuf_pars_fragment: sf,
  logdepthbuf_pars_vertex: af,
  logdepthbuf_vertex: of,
  map_fragment: lf,
  map_pars_fragment: cf,
  map_particle_fragment: uf,
  map_particle_pars_fragment: hf,
  metalnessmap_fragment: ff,
  metalnessmap_pars_fragment: df,
  morphinstance_vertex: pf,
  morphcolor_vertex: mf,
  morphnormal_vertex: _f,
  morphtarget_pars_vertex: gf,
  morphtarget_vertex: vf,
  normal_fragment_begin: xf,
  normal_fragment_maps: Sf,
  normal_pars_fragment: Mf,
  normal_pars_vertex: yf,
  normal_vertex: Tf,
  normalmap_pars_fragment: Ef,
  clearcoat_normal_fragment_begin: Af,
  clearcoat_normal_fragment_maps: bf,
  clearcoat_pars_fragment: wf,
  iridescence_pars_fragment: Rf,
  opaque_fragment: Cf,
  packing: Pf,
  premultiplied_alpha_fragment: Df,
  project_vertex: Lf,
  dithering_fragment: If,
  dithering_pars_fragment: Uf,
  roughnessmap_fragment: Nf,
  roughnessmap_pars_fragment: Ff,
  shadowmap_pars_fragment: Of,
  shadowmap_pars_vertex: Bf,
  shadowmap_vertex: zf,
  shadowmask_pars_fragment: Gf,
  skinbase_vertex: kf,
  skinning_pars_vertex: Vf,
  skinning_vertex: Hf,
  skinnormal_vertex: Wf,
  specularmap_fragment: Xf,
  specularmap_pars_fragment: qf,
  tonemapping_fragment: Yf,
  tonemapping_pars_fragment: Kf,
  transmission_fragment: Zf,
  transmission_pars_fragment: Jf,
  uv_pars_fragment: $f,
  uv_pars_vertex: jf,
  uv_vertex: Qf,
  worldpos_vertex: td,
  background_vert: ed,
  background_frag: nd,
  backgroundCube_vert: id,
  backgroundCube_frag: rd,
  cube_vert: sd,
  cube_frag: ad,
  depth_vert: od,
  depth_frag: ld,
  distanceRGBA_vert: cd,
  distanceRGBA_frag: ud,
  equirect_vert: hd,
  equirect_frag: fd,
  linedashed_vert: dd,
  linedashed_frag: pd,
  meshbasic_vert: md,
  meshbasic_frag: _d,
  meshlambert_vert: gd,
  meshlambert_frag: vd,
  meshmatcap_vert: xd,
  meshmatcap_frag: Sd,
  meshnormal_vert: Md,
  meshnormal_frag: yd,
  meshphong_vert: Td,
  meshphong_frag: Ed,
  meshphysical_vert: Ad,
  meshphysical_frag: bd,
  meshtoon_vert: wd,
  meshtoon_frag: Rd,
  points_vert: Cd,
  points_frag: Pd,
  shadow_vert: Dd,
  shadow_frag: Ld,
  sprite_vert: Id,
  sprite_frag: Ud
}, ft = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Xt(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new kt() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new kt() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new kt() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new kt() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new kt() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new kt() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new kt() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new kt() },
    normalScale: { value: /* @__PURE__ */ new ot(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new kt() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new kt() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new kt() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new kt() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Xt(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Xt(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new kt() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new kt() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Xt(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new ot(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new kt() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new kt() },
    alphaTest: { value: 0 }
  }
}, vn = {
  basic: {
    uniforms: /* @__PURE__ */ Fe([
      ft.common,
      ft.specularmap,
      ft.envmap,
      ft.aomap,
      ft.lightmap,
      ft.fog
    ]),
    vertexShader: Gt.meshbasic_vert,
    fragmentShader: Gt.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Fe([
      ft.common,
      ft.specularmap,
      ft.envmap,
      ft.aomap,
      ft.lightmap,
      ft.emissivemap,
      ft.bumpmap,
      ft.normalmap,
      ft.displacementmap,
      ft.fog,
      ft.lights,
      {
        emissive: { value: /* @__PURE__ */ new Xt(0) }
      }
    ]),
    vertexShader: Gt.meshlambert_vert,
    fragmentShader: Gt.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Fe([
      ft.common,
      ft.specularmap,
      ft.envmap,
      ft.aomap,
      ft.lightmap,
      ft.emissivemap,
      ft.bumpmap,
      ft.normalmap,
      ft.displacementmap,
      ft.fog,
      ft.lights,
      {
        emissive: { value: /* @__PURE__ */ new Xt(0) },
        specular: { value: /* @__PURE__ */ new Xt(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Gt.meshphong_vert,
    fragmentShader: Gt.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Fe([
      ft.common,
      ft.envmap,
      ft.aomap,
      ft.lightmap,
      ft.emissivemap,
      ft.bumpmap,
      ft.normalmap,
      ft.displacementmap,
      ft.roughnessmap,
      ft.metalnessmap,
      ft.fog,
      ft.lights,
      {
        emissive: { value: /* @__PURE__ */ new Xt(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Gt.meshphysical_vert,
    fragmentShader: Gt.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Fe([
      ft.common,
      ft.aomap,
      ft.lightmap,
      ft.emissivemap,
      ft.bumpmap,
      ft.normalmap,
      ft.displacementmap,
      ft.gradientmap,
      ft.fog,
      ft.lights,
      {
        emissive: { value: /* @__PURE__ */ new Xt(0) }
      }
    ]),
    vertexShader: Gt.meshtoon_vert,
    fragmentShader: Gt.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Fe([
      ft.common,
      ft.bumpmap,
      ft.normalmap,
      ft.displacementmap,
      ft.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Gt.meshmatcap_vert,
    fragmentShader: Gt.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Fe([
      ft.points,
      ft.fog
    ]),
    vertexShader: Gt.points_vert,
    fragmentShader: Gt.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Fe([
      ft.common,
      ft.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Gt.linedashed_vert,
    fragmentShader: Gt.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Fe([
      ft.common,
      ft.displacementmap
    ]),
    vertexShader: Gt.depth_vert,
    fragmentShader: Gt.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Fe([
      ft.common,
      ft.bumpmap,
      ft.normalmap,
      ft.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Gt.meshnormal_vert,
    fragmentShader: Gt.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Fe([
      ft.sprite,
      ft.fog
    ]),
    vertexShader: Gt.sprite_vert,
    fragmentShader: Gt.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new kt() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Gt.background_vert,
    fragmentShader: Gt.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new kt() }
    },
    vertexShader: Gt.backgroundCube_vert,
    fragmentShader: Gt.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Gt.cube_vert,
    fragmentShader: Gt.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Gt.equirect_vert,
    fragmentShader: Gt.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Fe([
      ft.common,
      ft.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new D() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Gt.distanceRGBA_vert,
    fragmentShader: Gt.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Fe([
      ft.lights,
      ft.fog,
      {
        color: { value: /* @__PURE__ */ new Xt(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Gt.shadow_vert,
    fragmentShader: Gt.shadow_frag
  }
};
vn.physical = {
  uniforms: /* @__PURE__ */ Fe([
    vn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new kt() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new kt() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new ot(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new kt() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new kt() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new kt() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Xt(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new kt() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new kt() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new kt() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new ot() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new kt() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Xt(0) },
      specularColor: { value: /* @__PURE__ */ new Xt(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new kt() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new kt() },
      anisotropyVector: { value: /* @__PURE__ */ new ot() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new kt() }
    }
  ]),
  vertexShader: Gt.meshphysical_vert,
  fragmentShader: Gt.meshphysical_frag
};
const ss = { r: 0, b: 0, g: 0 }, si = /* @__PURE__ */ new yn(), Nd = /* @__PURE__ */ new ee();
function Fd(r, t, e, n, i, s, a) {
  const o = new Xt(0);
  let l = s === !0 ? 0 : 1, c, u, h = null, f = 0, d = null;
  function g(y) {
    let x = y.isScene === !0 ? y.background : null;
    return x && x.isTexture && (x = (y.backgroundBlurriness > 0 ? e : t).get(x)), x;
  }
  function _(y) {
    let x = !1;
    const S = g(y);
    S === null ? m(o, l) : S && S.isColor && (m(S, 1), x = !0);
    const C = r.xr.getEnvironmentBlendMode();
    C === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : C === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (r.autoClear || x) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil));
  }
  function p(y, x) {
    const S = g(x);
    S && (S.isCubeTexture || S.mapping === 306) ? (u === void 0 && (u = new ae(
      new Br(1, 1, 1),
      new Zn({
        name: "BackgroundCubeMaterial",
        uniforms: Ji(vn.backgroundCube.uniforms),
        vertexShader: vn.backgroundCube.vertexShader,
        fragmentShader: vn.backgroundCube.fragmentShader,
        side: 1,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(C, b, A) {
      this.matrixWorld.copyPosition(A.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(u)), si.copy(x.backgroundRotation), si.x *= -1, si.y *= -1, si.z *= -1, S.isCubeTexture && S.isRenderTargetTexture === !1 && (si.y *= -1, si.z *= -1), u.material.uniforms.envMap.value = S, u.material.uniforms.flipEnvMap.value = S.isCubeTexture && S.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = x.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(Nd.makeRotationFromEuler(si)), u.material.toneMapped = jt.getTransfer(S.colorSpace) !== se, (h !== S || f !== S.version || d !== r.toneMapping) && (u.material.needsUpdate = !0, h = S, f = S.version, d = r.toneMapping), u.layers.enableAll(), y.unshift(u, u.geometry, u.material, 0, 0, null)) : S && S.isTexture && (c === void 0 && (c = new ae(
      new zr(2, 2),
      new Zn({
        name: "BackgroundMaterial",
        uniforms: Ji(vn.background.uniforms),
        vertexShader: vn.background.vertexShader,
        fragmentShader: vn.background.fragmentShader,
        side: 0,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(c)), c.material.uniforms.t2D.value = S, c.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, c.material.toneMapped = jt.getTransfer(S.colorSpace) !== se, S.matrixAutoUpdate === !0 && S.updateMatrix(), c.material.uniforms.uvTransform.value.copy(S.matrix), (h !== S || f !== S.version || d !== r.toneMapping) && (c.material.needsUpdate = !0, h = S, f = S.version, d = r.toneMapping), c.layers.enableAll(), y.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function m(y, x) {
    y.getRGB(ss, nc(r)), n.buffers.color.setClear(ss.r, ss.g, ss.b, x, a);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(y, x = 1) {
      o.set(y), l = x, m(o, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(y) {
      l = y, m(o, l);
    },
    render: _,
    addToRenderList: p
  };
}
function Od(r, t) {
  const e = r.getParameter(r.MAX_VERTEX_ATTRIBS), n = {}, i = f(null);
  let s = i, a = !1;
  function o(v, T, G, F, B) {
    let q = !1;
    const O = h(F, G, T);
    s !== O && (s = O, c(s.object)), q = d(v, F, G, B), q && g(v, F, G, B), B !== null && t.update(B, r.ELEMENT_ARRAY_BUFFER), (q || a) && (a = !1, S(v, T, G, F), B !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t.get(B).buffer));
  }
  function l() {
    return r.createVertexArray();
  }
  function c(v) {
    return r.bindVertexArray(v);
  }
  function u(v) {
    return r.deleteVertexArray(v);
  }
  function h(v, T, G) {
    const F = G.wireframe === !0;
    let B = n[v.id];
    B === void 0 && (B = {}, n[v.id] = B);
    let q = B[T.id];
    q === void 0 && (q = {}, B[T.id] = q);
    let O = q[F];
    return O === void 0 && (O = f(l()), q[F] = O), O;
  }
  function f(v) {
    const T = [], G = [], F = [];
    for (let B = 0; B < e; B++)
      T[B] = 0, G[B] = 0, F[B] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: T,
      enabledAttributes: G,
      attributeDivisors: F,
      object: v,
      attributes: {},
      index: null
    };
  }
  function d(v, T, G, F) {
    const B = s.attributes, q = T.attributes;
    let O = 0;
    const Z = G.getAttributes();
    for (const W in Z)
      if (Z[W].location >= 0) {
        const rt = B[W];
        let ht = q[W];
        if (ht === void 0 && (W === "instanceMatrix" && v.instanceMatrix && (ht = v.instanceMatrix), W === "instanceColor" && v.instanceColor && (ht = v.instanceColor)), rt === void 0 || rt.attribute !== ht || ht && rt.data !== ht.data) return !0;
        O++;
      }
    return s.attributesNum !== O || s.index !== F;
  }
  function g(v, T, G, F) {
    const B = {}, q = T.attributes;
    let O = 0;
    const Z = G.getAttributes();
    for (const W in Z)
      if (Z[W].location >= 0) {
        let rt = q[W];
        rt === void 0 && (W === "instanceMatrix" && v.instanceMatrix && (rt = v.instanceMatrix), W === "instanceColor" && v.instanceColor && (rt = v.instanceColor));
        const ht = {};
        ht.attribute = rt, rt && rt.data && (ht.data = rt.data), B[W] = ht, O++;
      }
    s.attributes = B, s.attributesNum = O, s.index = F;
  }
  function _() {
    const v = s.newAttributes;
    for (let T = 0, G = v.length; T < G; T++)
      v[T] = 0;
  }
  function p(v) {
    m(v, 0);
  }
  function m(v, T) {
    const G = s.newAttributes, F = s.enabledAttributes, B = s.attributeDivisors;
    G[v] = 1, F[v] === 0 && (r.enableVertexAttribArray(v), F[v] = 1), B[v] !== T && (r.vertexAttribDivisor(v, T), B[v] = T);
  }
  function y() {
    const v = s.newAttributes, T = s.enabledAttributes;
    for (let G = 0, F = T.length; G < F; G++)
      T[G] !== v[G] && (r.disableVertexAttribArray(G), T[G] = 0);
  }
  function x(v, T, G, F, B, q, O) {
    O === !0 ? r.vertexAttribIPointer(v, T, G, B, q) : r.vertexAttribPointer(v, T, G, F, B, q);
  }
  function S(v, T, G, F) {
    _();
    const B = F.attributes, q = G.getAttributes(), O = T.defaultAttributeValues;
    for (const Z in q) {
      const W = q[Z];
      if (W.location >= 0) {
        let lt = B[Z];
        if (lt === void 0 && (Z === "instanceMatrix" && v.instanceMatrix && (lt = v.instanceMatrix), Z === "instanceColor" && v.instanceColor && (lt = v.instanceColor)), lt !== void 0) {
          const rt = lt.normalized, ht = lt.itemSize, Ft = t.get(lt);
          if (Ft === void 0) continue;
          const Ht = Ft.buffer, V = Ft.type, Q = Ft.bytesPerElement, Mt = V === r.INT || V === r.UNSIGNED_INT || lt.gpuType === 1013;
          if (lt.isInterleavedBufferAttribute) {
            const ut = lt.data, Dt = ut.stride, Pt = lt.offset;
            if (ut.isInstancedInterleavedBuffer) {
              for (let Lt = 0; Lt < W.locationSize; Lt++)
                m(W.location + Lt, ut.meshPerAttribute);
              v.isInstancedMesh !== !0 && F._maxInstanceCount === void 0 && (F._maxInstanceCount = ut.meshPerAttribute * ut.count);
            } else
              for (let Lt = 0; Lt < W.locationSize; Lt++)
                p(W.location + Lt);
            r.bindBuffer(r.ARRAY_BUFFER, Ht);
            for (let Lt = 0; Lt < W.locationSize; Lt++)
              x(
                W.location + Lt,
                ht / W.locationSize,
                V,
                rt,
                Dt * Q,
                (Pt + ht / W.locationSize * Lt) * Q,
                Mt
              );
          } else {
            if (lt.isInstancedBufferAttribute) {
              for (let ut = 0; ut < W.locationSize; ut++)
                m(W.location + ut, lt.meshPerAttribute);
              v.isInstancedMesh !== !0 && F._maxInstanceCount === void 0 && (F._maxInstanceCount = lt.meshPerAttribute * lt.count);
            } else
              for (let ut = 0; ut < W.locationSize; ut++)
                p(W.location + ut);
            r.bindBuffer(r.ARRAY_BUFFER, Ht);
            for (let ut = 0; ut < W.locationSize; ut++)
              x(
                W.location + ut,
                ht / W.locationSize,
                V,
                rt,
                ht * Q,
                ht / W.locationSize * ut * Q,
                Mt
              );
          }
        } else if (O !== void 0) {
          const rt = O[Z];
          if (rt !== void 0)
            switch (rt.length) {
              case 2:
                r.vertexAttrib2fv(W.location, rt);
                break;
              case 3:
                r.vertexAttrib3fv(W.location, rt);
                break;
              case 4:
                r.vertexAttrib4fv(W.location, rt);
                break;
              default:
                r.vertexAttrib1fv(W.location, rt);
            }
        }
      }
    }
    y();
  }
  function C() {
    P();
    for (const v in n) {
      const T = n[v];
      for (const G in T) {
        const F = T[G];
        for (const B in F)
          u(F[B].object), delete F[B];
        delete T[G];
      }
      delete n[v];
    }
  }
  function b(v) {
    if (n[v.id] === void 0) return;
    const T = n[v.id];
    for (const G in T) {
      const F = T[G];
      for (const B in F)
        u(F[B].object), delete F[B];
      delete T[G];
    }
    delete n[v.id];
  }
  function A(v) {
    for (const T in n) {
      const G = n[T];
      if (G[v.id] === void 0) continue;
      const F = G[v.id];
      for (const B in F)
        u(F[B].object), delete F[B];
      delete G[v.id];
    }
  }
  function P() {
    L(), a = !0, s !== i && (s = i, c(s.object));
  }
  function L() {
    i.geometry = null, i.program = null, i.wireframe = !1;
  }
  return {
    setup: o,
    reset: P,
    resetDefaultState: L,
    dispose: C,
    releaseStatesOfGeometry: b,
    releaseStatesOfProgram: A,
    initAttributes: _,
    enableAttribute: p,
    disableUnusedAttributes: y
  };
}
function Bd(r, t, e) {
  let n;
  function i(c) {
    n = c;
  }
  function s(c, u) {
    r.drawArrays(n, c, u), e.update(u, n, 1);
  }
  function a(c, u, h) {
    h !== 0 && (r.drawArraysInstanced(n, c, u, h), e.update(u, n, h));
  }
  function o(c, u, h) {
    if (h === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, u, 0, h);
    let d = 0;
    for (let g = 0; g < h; g++)
      d += u[g];
    e.update(d, n, 1);
  }
  function l(c, u, h, f) {
    if (h === 0) return;
    const d = t.get("WEBGL_multi_draw");
    if (d === null)
      for (let g = 0; g < c.length; g++)
        a(c[g], u[g], f[g]);
    else {
      d.multiDrawArraysInstancedWEBGL(n, c, 0, u, 0, f, 0, h);
      let g = 0;
      for (let _ = 0; _ < h; _++)
        g += u[_];
      for (let _ = 0; _ < f.length; _++)
        e.update(g, n, f[_]);
    }
  }
  this.setMode = i, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function zd(r, t, e, n) {
  let i;
  function s() {
    if (i !== void 0) return i;
    if (t.has("EXT_texture_filter_anisotropic") === !0) {
      const A = t.get("EXT_texture_filter_anisotropic");
      i = r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      i = 0;
    return i;
  }
  function a(A) {
    return !(A !== 1023 && n.convert(A) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(A) {
    const P = A === 1016 && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(A !== 1009 && n.convert(A) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    A !== 1015 && !P);
  }
  function l(A) {
    if (A === "highp") {
      if (r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0)
        return "highp";
      A = "mediump";
    }
    return A === "mediump" && r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = e.precision !== void 0 ? e.precision : "highp";
  const u = l(c);
  u !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", u, "instead."), c = u);
  const h = e.logarithmicDepthBuffer === !0, f = e.reverseDepthBuffer === !0 && t.has("EXT_clip_control");
  if (f === !0) {
    const A = t.get("EXT_clip_control");
    A.clipControlEXT(A.LOWER_LEFT_EXT, A.ZERO_TO_ONE_EXT);
  }
  const d = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), g = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = r.getParameter(r.MAX_TEXTURE_SIZE), p = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE), m = r.getParameter(r.MAX_VERTEX_ATTRIBS), y = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS), x = r.getParameter(r.MAX_VARYING_VECTORS), S = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS), C = g > 0, b = r.getParameter(r.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: s,
    getMaxPrecision: l,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: h,
    reverseDepthBuffer: f,
    maxTextures: d,
    maxVertexTextures: g,
    maxTextureSize: _,
    maxCubemapSize: p,
    maxAttributes: m,
    maxVertexUniforms: y,
    maxVaryings: x,
    maxFragmentUniforms: S,
    vertexTextures: C,
    maxSamples: b
  };
}
function Gd(r) {
  const t = this;
  let e = null, n = 0, i = !1, s = !1;
  const a = new ci(), o = new kt(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, f) {
    const d = h.length !== 0 || f || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = f, n = h.length, d;
  }, this.beginShadows = function() {
    s = !0, u(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(h, f) {
    e = u(h, f, 0);
  }, this.setState = function(h, f, d) {
    const g = h.clippingPlanes, _ = h.clipIntersection, p = h.clipShadows, m = r.get(h);
    if (!i || g === null || g.length === 0 || s && !p)
      s ? u(null) : c();
    else {
      const y = s ? 0 : n, x = y * 4;
      let S = m.clippingState || null;
      l.value = S, S = u(g, f, x, d);
      for (let C = 0; C !== x; ++C)
        S[C] = e[C];
      m.clippingState = S, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += y;
    }
  };
  function c() {
    l.value !== e && (l.value = e, l.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
  }
  function u(h, f, d, g) {
    const _ = h !== null ? h.length : 0;
    let p = null;
    if (_ !== 0) {
      if (p = l.value, g !== !0 || p === null) {
        const m = d + _ * 4, y = f.matrixWorldInverse;
        o.getNormalMatrix(y), (p === null || p.length < m) && (p = new Float32Array(m));
        for (let x = 0, S = d; x !== _; ++x, S += 4)
          a.copy(h[x]).applyMatrix4(y, o), a.normal.toArray(p, S), p[S + 3] = a.constant;
      }
      l.value = p, l.needsUpdate = !0;
    }
    return t.numPlanes = _, t.numIntersection = 0, p;
  }
}
function kd(r) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(a, o) {
    return o === 303 ? a.mapping = 301 : o === 304 && (a.mapping = 302), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === 303 || o === 304)
        if (t.has(a)) {
          const l = t.get(a).texture;
          return e(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new $u(l.height);
            return c.fromEquirectangularTexture(r, a), t.set(a, c), a.addEventListener("dispose", i), e(c.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const l = t.get(o);
    l !== void 0 && (t.delete(o), l.dispose());
  }
  function s() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class ac extends ic {
  constructor(t = -1, e = 1, n = 1, i = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = i, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this;
  }
  setViewOffset(t, e, n, i, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let s = n - t, a = n + t, o = i + e, l = i - e;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, a = s + c * this.view.width, o -= u * this.view.offsetY, l = o - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}
const Vi = 4, Ko = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], fi = 20, ca = /* @__PURE__ */ new ac(), Zo = /* @__PURE__ */ new Xt();
let ua = null, ha = 0, fa = 0, da = !1;
const ui = (1 + Math.sqrt(5)) / 2, Bi = 1 / ui, Jo = [
  /* @__PURE__ */ new D(-ui, Bi, 0),
  /* @__PURE__ */ new D(ui, Bi, 0),
  /* @__PURE__ */ new D(-Bi, 0, ui),
  /* @__PURE__ */ new D(Bi, 0, ui),
  /* @__PURE__ */ new D(0, ui, -Bi),
  /* @__PURE__ */ new D(0, ui, Bi),
  /* @__PURE__ */ new D(-1, 1, -1),
  /* @__PURE__ */ new D(1, 1, -1),
  /* @__PURE__ */ new D(-1, 1, 1),
  /* @__PURE__ */ new D(1, 1, 1)
];
class Da {
  constructor(t) {
    this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(t, e = 0, n = 0.1, i = 100) {
    ua = this._renderer.getRenderTarget(), ha = this._renderer.getActiveCubeFace(), fa = this._renderer.getActiveMipmapLevel(), da = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(t, n, i, s), e > 0 && this._blur(s, 0, 0, e), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported equirectangular image size is 64 x 32.
   */
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported cube size is 16 x 16.
   */
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Qo(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = jo(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(t) {
    this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let t = 0; t < this._lodPlanes.length; t++)
      this._lodPlanes[t].dispose();
  }
  _cleanup(t) {
    this._renderer.setRenderTarget(ua, ha, fa), this._renderer.xr.enabled = da, t.scissorTest = !1, as(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === 301 || t.mapping === 302 ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), ua = this._renderer.getRenderTarget(), ha = this._renderer.getActiveCubeFace(), fa = this._renderer.getActiveMipmapLevel(), da = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = e || this._allocateTargets();
    return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = {
      magFilter: 1006,
      minFilter: 1006,
      generateMipmaps: !1,
      type: 1016,
      format: 1023,
      colorSpace: Qn,
      depthBuffer: !1
    }, i = $o(t, e, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = $o(t, e, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Vd(s)), this._blurMaterial = Hd(s, t, e);
    }
    return i;
  }
  _compileMaterial(t) {
    const e = new ae(this._lodPlanes[0], t);
    this._renderer.compile(e, ca);
  }
  _sceneToCubeUV(t, e, n, i) {
    const o = new Ze(90, 1, e, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], u = this._renderer, h = u.autoClear, f = u.toneMapping;
    u.getClearColor(Zo), u.toneMapping = 0, u.autoClear = !1;
    const d = new ja({
      name: "PMREM.Background",
      side: 1,
      depthWrite: !1,
      depthTest: !1
    }), g = new ae(new Br(), d);
    let _ = !1;
    const p = t.background;
    p ? p.isColor && (d.color.copy(p), t.background = null, _ = !0) : (d.color.copy(Zo), _ = !0);
    for (let m = 0; m < 6; m++) {
      const y = m % 3;
      y === 0 ? (o.up.set(0, l[m], 0), o.lookAt(c[m], 0, 0)) : y === 1 ? (o.up.set(0, 0, l[m]), o.lookAt(0, c[m], 0)) : (o.up.set(0, l[m], 0), o.lookAt(0, 0, c[m]));
      const x = this._cubeSize;
      as(i, y * x, m > 2 ? x : 0, x, x), u.setRenderTarget(i), _ && u.render(g, o), u.render(t, o);
    }
    g.geometry.dispose(), g.material.dispose(), u.toneMapping = f, u.autoClear = h, t.background = p;
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer, i = t.mapping === 301 || t.mapping === 302;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Qo()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = jo());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, a = new ae(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = t;
    const l = this._cubeSize;
    as(e, 0, 0, 3 * l, 2 * l), n.setRenderTarget(e), n.render(a, ca);
  }
  _applyPMREM(t) {
    const e = this._renderer, n = e.autoClear;
    e.autoClear = !1;
    const i = this._lodPlanes.length;
    for (let s = 1; s < i; s++) {
      const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), o = Jo[(i - s - 1) % Jo.length];
      this._blur(t, s - 1, s, a, o);
    }
    e.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(t, e, n, i, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      t,
      a,
      e,
      n,
      i,
      "latitudinal",
      s
    ), this._halfBlur(
      a,
      t,
      n,
      n,
      i,
      "longitudinal",
      s
    );
  }
  _halfBlur(t, e, n, i, s, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const u = 3, h = new ae(this._lodPlanes[i], c), f = c.uniforms, d = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * d) : 2 * Math.PI / (2 * fi - 1), _ = s / g, p = isFinite(s) ? 1 + Math.floor(u * _) : fi;
    p > fi && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fi}`);
    const m = [];
    let y = 0;
    for (let A = 0; A < fi; ++A) {
      const P = A / _, L = Math.exp(-P * P / 2);
      m.push(L), A === 0 ? y += L : A < p && (y += 2 * L);
    }
    for (let A = 0; A < m.length; A++)
      m[A] = m[A] / y;
    f.envMap.value = t.texture, f.samples.value = p, f.weights.value = m, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o);
    const { _lodMax: x } = this;
    f.dTheta.value = g, f.mipInt.value = x - n;
    const S = this._sizeLods[i], C = 3 * S * (i > x - Vi ? i - x + Vi : 0), b = 4 * (this._cubeSize - S);
    as(e, C, b, 3 * S, 2 * S), l.setRenderTarget(e), l.render(h, ca);
  }
}
function Vd(r) {
  const t = [], e = [], n = [];
  let i = r;
  const s = r - Vi + 1 + Ko.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, i);
    e.push(o);
    let l = 1 / o;
    a > r - Vi ? l = Ko[a - r + Vi - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), u = -c, h = 1 + c, f = [u, u, h, u, h, h, u, u, h, h, u, h], d = 6, g = 6, _ = 3, p = 2, m = 1, y = new Float32Array(_ * g * d), x = new Float32Array(p * g * d), S = new Float32Array(m * g * d);
    for (let b = 0; b < d; b++) {
      const A = b % 3 * 2 / 3 - 1, P = b > 2 ? 0 : -1, L = [
        A,
        P,
        0,
        A + 2 / 3,
        P,
        0,
        A + 2 / 3,
        P + 1,
        0,
        A,
        P,
        0,
        A + 2 / 3,
        P + 1,
        0,
        A,
        P + 1,
        0
      ];
      y.set(L, _ * g * b), x.set(f, p * g * b);
      const v = [b, b, b, b, b, b];
      S.set(v, m * g * b);
    }
    const C = new un();
    C.setAttribute("position", new Qe(y, _)), C.setAttribute("uv", new Qe(x, p)), C.setAttribute("faceIndex", new Qe(S, m)), t.push(C), i > Vi && i--;
  }
  return { lodPlanes: t, sizeLods: e, sigmas: n };
}
function $o(r, t, e) {
  const n = new vi(r, t, e);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function as(r, t, e, n, i) {
  r.viewport.set(t, e, n, i), r.scissor.set(t, e, n, i);
}
function Hd(r, t, e) {
  const n = new Float32Array(fi), i = new D(0, 1, 0);
  return new Zn({
    name: "SphericalGaussianBlur",
    defines: {
      n: fi,
      CUBEUV_TEXEL_WIDTH: 1 / t,
      CUBEUV_TEXEL_HEIGHT: 1 / e,
      CUBEUV_MAX_MIP: `${r}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: to(),
    fragmentShader: (
      /* glsl */
      `

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
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function jo() {
  return new Zn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: to(),
    fragmentShader: (
      /* glsl */
      `

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
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Qo() {
  return new Zn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: to(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function to() {
  return (
    /* glsl */
    `

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
	`
  );
}
function Wd(r) {
  let t = /* @__PURE__ */ new WeakMap(), e = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === 303 || l === 304, u = l === 301 || l === 302;
      if (c || u) {
        let h = t.get(o);
        const f = h !== void 0 ? h.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f)
          return e === null && (e = new Da(r)), h = c ? e.fromEquirectangular(o, h) : e.fromCubemap(o, h), h.texture.pmremVersion = o.pmremVersion, t.set(o, h), h.texture;
        if (h !== void 0)
          return h.texture;
        {
          const d = o.image;
          return c && d && d.height > 0 || u && d && i(d) ? (e === null && (e = new Da(r)), h = c ? e.fromEquirectangular(o) : e.fromCubemap(o), h.texture.pmremVersion = o.pmremVersion, t.set(o, h), o.addEventListener("dispose", s), h.texture) : null;
        }
      }
    }
    return o;
  }
  function i(o) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++)
      o[u] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener("dispose", s);
    const c = t.get(l);
    c !== void 0 && (t.delete(l), c.dispose());
  }
  function a() {
    t = /* @__PURE__ */ new WeakMap(), e !== null && (e.dispose(), e = null);
  }
  return {
    get: n,
    dispose: a
  };
}
function Xd(r) {
  const t = {};
  function e(n) {
    if (t[n] !== void 0)
      return t[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = r.getExtension(n);
    }
    return t[n] = i, i;
  }
  return {
    has: function(n) {
      return e(n) !== null;
    },
    init: function() {
      e("EXT_color_buffer_float"), e("WEBGL_clip_cull_distance"), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture"), e("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const i = e(n);
      return i === null && ds("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function qd(r, t, e, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function a(h) {
    const f = h.target;
    f.index !== null && t.remove(f.index);
    for (const g in f.attributes)
      t.remove(f.attributes[g]);
    for (const g in f.morphAttributes) {
      const _ = f.morphAttributes[g];
      for (let p = 0, m = _.length; p < m; p++)
        t.remove(_[p]);
    }
    f.removeEventListener("dispose", a), delete i[f.id];
    const d = s.get(f);
    d && (t.remove(d), s.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, e.memory.geometries--;
  }
  function o(h, f) {
    return i[f.id] === !0 || (f.addEventListener("dispose", a), i[f.id] = !0, e.memory.geometries++), f;
  }
  function l(h) {
    const f = h.attributes;
    for (const g in f)
      t.update(f[g], r.ARRAY_BUFFER);
    const d = h.morphAttributes;
    for (const g in d) {
      const _ = d[g];
      for (let p = 0, m = _.length; p < m; p++)
        t.update(_[p], r.ARRAY_BUFFER);
    }
  }
  function c(h) {
    const f = [], d = h.index, g = h.attributes.position;
    let _ = 0;
    if (d !== null) {
      const y = d.array;
      _ = d.version;
      for (let x = 0, S = y.length; x < S; x += 3) {
        const C = y[x + 0], b = y[x + 1], A = y[x + 2];
        f.push(C, b, b, A, A, C);
      }
    } else if (g !== void 0) {
      const y = g.array;
      _ = g.version;
      for (let x = 0, S = y.length / 3 - 1; x < S; x += 3) {
        const C = x + 0, b = x + 1, A = x + 2;
        f.push(C, b, b, A, A, C);
      }
    } else
      return;
    const p = new (Zl(f) ? ec : tc)(f, 1);
    p.version = _;
    const m = s.get(h);
    m && t.remove(m), s.set(h, p);
  }
  function u(h) {
    const f = s.get(h);
    if (f) {
      const d = h.index;
      d !== null && f.version < d.version && c(h);
    } else
      c(h);
    return s.get(h);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: u
  };
}
function Yd(r, t, e) {
  let n;
  function i(f) {
    n = f;
  }
  let s, a;
  function o(f) {
    s = f.type, a = f.bytesPerElement;
  }
  function l(f, d) {
    r.drawElements(n, d, s, f * a), e.update(d, n, 1);
  }
  function c(f, d, g) {
    g !== 0 && (r.drawElementsInstanced(n, d, s, f * a, g), e.update(d, n, g));
  }
  function u(f, d, g) {
    if (g === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, d, 0, s, f, 0, g);
    let p = 0;
    for (let m = 0; m < g; m++)
      p += d[m];
    e.update(p, n, 1);
  }
  function h(f, d, g, _) {
    if (g === 0) return;
    const p = t.get("WEBGL_multi_draw");
    if (p === null)
      for (let m = 0; m < f.length; m++)
        c(f[m] / a, d[m], _[m]);
    else {
      p.multiDrawElementsInstancedWEBGL(n, d, 0, s, f, 0, _, 0, g);
      let m = 0;
      for (let y = 0; y < g; y++)
        m += d[y];
      for (let y = 0; y < _.length; y++)
        e.update(m, n, _[y]);
    }
  }
  this.setMode = i, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = u, this.renderMultiDrawInstances = h;
}
function Kd(r) {
  const t = {
    geometries: 0,
    textures: 0
  }, e = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, a, o) {
    switch (e.calls++, a) {
      case r.TRIANGLES:
        e.triangles += o * (s / 3);
        break;
      case r.LINES:
        e.lines += o * (s / 2);
        break;
      case r.LINE_STRIP:
        e.lines += o * (s - 1);
        break;
      case r.LINE_LOOP:
        e.lines += o * s;
        break;
      case r.POINTS:
        e.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
  }
  return {
    memory: t,
    render: e,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function Zd(r, t, e) {
  const n = /* @__PURE__ */ new WeakMap(), i = new te();
  function s(a, o, l) {
    const c = a.morphTargetInfluences, u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, h = u !== void 0 ? u.length : 0;
    let f = n.get(o);
    if (f === void 0 || f.count !== h) {
      let L = function() {
        A.dispose(), n.delete(o), o.removeEventListener("dispose", L);
      };
      f !== void 0 && f.texture.dispose();
      const d = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, _ = o.morphAttributes.color !== void 0, p = o.morphAttributes.position || [], m = o.morphAttributes.normal || [], y = o.morphAttributes.color || [];
      let x = 0;
      d === !0 && (x = 1), g === !0 && (x = 2), _ === !0 && (x = 3);
      let S = o.attributes.position.count * x, C = 1;
      S > t.maxTextureSize && (C = Math.ceil(S / t.maxTextureSize), S = t.maxTextureSize);
      const b = new Float32Array(S * C * 4 * h), A = new $l(b, S, C, h);
      A.type = 1015, A.needsUpdate = !0;
      const P = x * 4;
      for (let v = 0; v < h; v++) {
        const T = p[v], G = m[v], F = y[v], B = S * C * 4 * v;
        for (let q = 0; q < T.count; q++) {
          const O = q * P;
          d === !0 && (i.fromBufferAttribute(T, q), b[B + O + 0] = i.x, b[B + O + 1] = i.y, b[B + O + 2] = i.z, b[B + O + 3] = 0), g === !0 && (i.fromBufferAttribute(G, q), b[B + O + 4] = i.x, b[B + O + 5] = i.y, b[B + O + 6] = i.z, b[B + O + 7] = 0), _ === !0 && (i.fromBufferAttribute(F, q), b[B + O + 8] = i.x, b[B + O + 9] = i.y, b[B + O + 10] = i.z, b[B + O + 11] = F.itemSize === 4 ? i.w : 1);
        }
      }
      f = {
        count: h,
        texture: A,
        size: new ot(S, C)
      }, n.set(o, f), o.addEventListener("dispose", L);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      l.getUniforms().setValue(r, "morphTexture", a.morphTexture, e);
    else {
      let d = 0;
      for (let _ = 0; _ < c.length; _++)
        d += c[_];
      const g = o.morphTargetsRelative ? 1 : 1 - d;
      l.getUniforms().setValue(r, "morphTargetBaseInfluence", g), l.getUniforms().setValue(r, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(r, "morphTargetsTexture", f.texture, e), l.getUniforms().setValue(r, "morphTargetsTextureSize", f.size);
  }
  return {
    update: s
  };
}
function Jd(r, t, e, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, u = l.geometry, h = t.get(l, u);
    if (i.get(h) !== c && (t.update(h), i.set(h, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), i.get(l) !== c && (e.update(l.instanceMatrix, r.ARRAY_BUFFER), l.instanceColor !== null && e.update(l.instanceColor, r.ARRAY_BUFFER), i.set(l, c))), l.isSkinnedMesh) {
      const f = l.skeleton;
      i.get(f) !== c && (f.update(), i.set(f, c));
    }
    return h;
  }
  function a() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), e.remove(c.instanceMatrix), c.instanceColor !== null && e.remove(c.instanceColor);
  }
  return {
    update: s,
    dispose: a
  };
}
class oc extends Ue {
  constructor(t, e, n, i, s, a, o, l, c, u = 1026) {
    if (u !== 1026 && u !== 1027)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === 1026 && (n = 1014), n === void 0 && u === 1027 && (n = 1020), super(null, i, s, a, o, l, u, n, c), this.isDepthTexture = !0, this.image = { width: t, height: e }, this.magFilter = o !== void 0 ? o : 1003, this.minFilter = l !== void 0 ? l : 1003, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
}
const lc = /* @__PURE__ */ new Ue(), tl = /* @__PURE__ */ new oc(1, 1), cc = /* @__PURE__ */ new $l(), uc = /* @__PURE__ */ new Uu(), hc = /* @__PURE__ */ new rc(), el = [], nl = [], il = new Float32Array(16), rl = new Float32Array(9), sl = new Float32Array(4);
function sr(r, t, e) {
  const n = r[0];
  if (n <= 0 || n > 0) return r;
  const i = t * e;
  let s = el[i];
  if (s === void 0 && (s = new Float32Array(i), el[i] = s), t !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== t; ++a)
      o += e, r[a].toArray(s, o);
  }
  return s;
}
function Se(r, t) {
  if (r.length !== t.length) return !1;
  for (let e = 0, n = r.length; e < n; e++)
    if (r[e] !== t[e]) return !1;
  return !0;
}
function Me(r, t) {
  for (let e = 0, n = t.length; e < n; e++)
    r[e] = t[e];
}
function Ls(r, t) {
  let e = nl[t];
  e === void 0 && (e = new Int32Array(t), nl[t] = e);
  for (let n = 0; n !== t; ++n)
    e[n] = r.allocateTextureUnit();
  return e;
}
function $d(r, t) {
  const e = this.cache;
  e[0] !== t && (r.uniform1f(this.addr, t), e[0] = t);
}
function jd(r, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (r.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (Se(e, t)) return;
    r.uniform2fv(this.addr, t), Me(e, t);
  }
}
function Qd(r, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (r.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else if (t.r !== void 0)
    (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (r.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
  else {
    if (Se(e, t)) return;
    r.uniform3fv(this.addr, t), Me(e, t);
  }
}
function tp(r, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (r.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (Se(e, t)) return;
    r.uniform4fv(this.addr, t), Me(e, t);
  }
}
function ep(r, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (Se(e, t)) return;
    r.uniformMatrix2fv(this.addr, !1, t), Me(e, t);
  } else {
    if (Se(e, n)) return;
    sl.set(n), r.uniformMatrix2fv(this.addr, !1, sl), Me(e, n);
  }
}
function np(r, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (Se(e, t)) return;
    r.uniformMatrix3fv(this.addr, !1, t), Me(e, t);
  } else {
    if (Se(e, n)) return;
    rl.set(n), r.uniformMatrix3fv(this.addr, !1, rl), Me(e, n);
  }
}
function ip(r, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (Se(e, t)) return;
    r.uniformMatrix4fv(this.addr, !1, t), Me(e, t);
  } else {
    if (Se(e, n)) return;
    il.set(n), r.uniformMatrix4fv(this.addr, !1, il), Me(e, n);
  }
}
function rp(r, t) {
  const e = this.cache;
  e[0] !== t && (r.uniform1i(this.addr, t), e[0] = t);
}
function sp(r, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (r.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (Se(e, t)) return;
    r.uniform2iv(this.addr, t), Me(e, t);
  }
}
function ap(r, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (r.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (Se(e, t)) return;
    r.uniform3iv(this.addr, t), Me(e, t);
  }
}
function op(r, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (r.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (Se(e, t)) return;
    r.uniform4iv(this.addr, t), Me(e, t);
  }
}
function lp(r, t) {
  const e = this.cache;
  e[0] !== t && (r.uniform1ui(this.addr, t), e[0] = t);
}
function cp(r, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (r.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (Se(e, t)) return;
    r.uniform2uiv(this.addr, t), Me(e, t);
  }
}
function up(r, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (r.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (Se(e, t)) return;
    r.uniform3uiv(this.addr, t), Me(e, t);
  }
}
function hp(r, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (r.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (Se(e, t)) return;
    r.uniform4uiv(this.addr, t), Me(e, t);
  }
}
function fp(r, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i);
  let s;
  this.type === r.SAMPLER_2D_SHADOW ? (tl.compareFunction = 515, s = tl) : s = lc, e.setTexture2D(t || s, i);
}
function dp(r, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), e.setTexture3D(t || uc, i);
}
function pp(r, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), e.setTextureCube(t || hc, i);
}
function mp(r, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), e.setTexture2DArray(t || cc, i);
}
function _p(r) {
  switch (r) {
    case 5126:
      return $d;
    case 35664:
      return jd;
    case 35665:
      return Qd;
    case 35666:
      return tp;
    case 35674:
      return ep;
    case 35675:
      return np;
    case 35676:
      return ip;
    case 5124:
    case 35670:
      return rp;
    case 35667:
    case 35671:
      return sp;
    case 35668:
    case 35672:
      return ap;
    case 35669:
    case 35673:
      return op;
    case 5125:
      return lp;
    case 36294:
      return cp;
    case 36295:
      return up;
    case 36296:
      return hp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return fp;
    case 35679:
    case 36299:
    case 36307:
      return dp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return pp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return mp;
  }
}
function gp(r, t) {
  r.uniform1fv(this.addr, t);
}
function vp(r, t) {
  const e = sr(t, this.size, 2);
  r.uniform2fv(this.addr, e);
}
function xp(r, t) {
  const e = sr(t, this.size, 3);
  r.uniform3fv(this.addr, e);
}
function Sp(r, t) {
  const e = sr(t, this.size, 4);
  r.uniform4fv(this.addr, e);
}
function Mp(r, t) {
  const e = sr(t, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, e);
}
function yp(r, t) {
  const e = sr(t, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, e);
}
function Tp(r, t) {
  const e = sr(t, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, e);
}
function Ep(r, t) {
  r.uniform1iv(this.addr, t);
}
function Ap(r, t) {
  r.uniform2iv(this.addr, t);
}
function bp(r, t) {
  r.uniform3iv(this.addr, t);
}
function wp(r, t) {
  r.uniform4iv(this.addr, t);
}
function Rp(r, t) {
  r.uniform1uiv(this.addr, t);
}
function Cp(r, t) {
  r.uniform2uiv(this.addr, t);
}
function Pp(r, t) {
  r.uniform3uiv(this.addr, t);
}
function Dp(r, t) {
  r.uniform4uiv(this.addr, t);
}
function Lp(r, t, e) {
  const n = this.cache, i = t.length, s = Ls(e, i);
  Se(n, s) || (r.uniform1iv(this.addr, s), Me(n, s));
  for (let a = 0; a !== i; ++a)
    e.setTexture2D(t[a] || lc, s[a]);
}
function Ip(r, t, e) {
  const n = this.cache, i = t.length, s = Ls(e, i);
  Se(n, s) || (r.uniform1iv(this.addr, s), Me(n, s));
  for (let a = 0; a !== i; ++a)
    e.setTexture3D(t[a] || uc, s[a]);
}
function Up(r, t, e) {
  const n = this.cache, i = t.length, s = Ls(e, i);
  Se(n, s) || (r.uniform1iv(this.addr, s), Me(n, s));
  for (let a = 0; a !== i; ++a)
    e.setTextureCube(t[a] || hc, s[a]);
}
function Np(r, t, e) {
  const n = this.cache, i = t.length, s = Ls(e, i);
  Se(n, s) || (r.uniform1iv(this.addr, s), Me(n, s));
  for (let a = 0; a !== i; ++a)
    e.setTexture2DArray(t[a] || cc, s[a]);
}
function Fp(r) {
  switch (r) {
    case 5126:
      return gp;
    case 35664:
      return vp;
    case 35665:
      return xp;
    case 35666:
      return Sp;
    case 35674:
      return Mp;
    case 35675:
      return yp;
    case 35676:
      return Tp;
    case 5124:
    case 35670:
      return Ep;
    case 35667:
    case 35671:
      return Ap;
    case 35668:
    case 35672:
      return bp;
    case 35669:
    case 35673:
      return wp;
    case 5125:
      return Rp;
    case 36294:
      return Cp;
    case 36295:
      return Pp;
    case 36296:
      return Dp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Lp;
    case 35679:
    case 36299:
    case 36307:
      return Ip;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Up;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Np;
  }
}
class Op {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = _p(e.type);
  }
}
class Bp {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = Fp(e.type);
  }
}
class zp {
  constructor(t) {
    this.id = t, this.seq = [], this.map = {};
  }
  setValue(t, e, n) {
    const i = this.seq;
    for (let s = 0, a = i.length; s !== a; ++s) {
      const o = i[s];
      o.setValue(t, e[o.id], n);
    }
  }
}
const pa = /(\w+)(\])?(\[|\.)?/g;
function al(r, t) {
  r.seq.push(t), r.map[t.id] = t;
}
function Gp(r, t, e) {
  const n = r.name, i = n.length;
  for (pa.lastIndex = 0; ; ) {
    const s = pa.exec(n), a = pa.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === i) {
      al(e, c === void 0 ? new Op(o, r, t) : new Bp(o, r, t));
      break;
    } else {
      let h = e.map[o];
      h === void 0 && (h = new zp(o), al(e, h)), e = h;
    }
  }
}
class ps {
  constructor(t, e) {
    this.seq = [], this.map = {};
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const s = t.getActiveUniform(e, i), a = t.getUniformLocation(e, s.name);
      Gp(s, a, this);
    }
  }
  setValue(t, e, n, i) {
    const s = this.map[e];
    s !== void 0 && s.setValue(t, n, i);
  }
  setOptional(t, e, n) {
    const i = e[n];
    i !== void 0 && this.setValue(t, n, i);
  }
  static upload(t, e, n, i) {
    for (let s = 0, a = e.length; s !== a; ++s) {
      const o = e[s], l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(t, l.value, i);
    }
  }
  static seqWithValue(t, e) {
    const n = [];
    for (let i = 0, s = t.length; i !== s; ++i) {
      const a = t[i];
      a.id in e && n.push(a);
    }
    return n;
  }
}
function ol(r, t, e) {
  const n = r.createShader(t);
  return r.shaderSource(n, e), r.compileShader(n), n;
}
const kp = 37297;
let Vp = 0;
function Hp(r, t) {
  const e = r.split(`
`), n = [], i = Math.max(t - 6, 0), s = Math.min(t + 6, e.length);
  for (let a = i; a < s; a++) {
    const o = a + 1;
    n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`);
  }
  return n.join(`
`);
}
function Wp(r) {
  const t = jt.getPrimaries(jt.workingColorSpace), e = jt.getPrimaries(r);
  let n;
  switch (t === e ? n = "" : t === Ss && e === xs ? n = "LinearDisplayP3ToLinearSRGB" : t === xs && e === Ss && (n = "LinearSRGBToLinearDisplayP3"), r) {
    case Qn:
    case Ds:
      return [n, "LinearTransferOETF"];
    case on:
    case $a:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", r), [n, "LinearTransferOETF"];
  }
}
function ll(r, t, e) {
  const n = r.getShaderParameter(t, r.COMPILE_STATUS), i = r.getShaderInfoLog(t).trim();
  if (n && i === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const a = parseInt(s[1]);
    return e.toUpperCase() + `

` + i + `

` + Hp(r.getShaderSource(t), a);
  } else
    return i;
}
function Xp(r, t) {
  const e = Wp(t);
  return `vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`;
}
function qp(r, t) {
  let e;
  switch (t) {
    case 1:
      e = "Linear";
      break;
    case 2:
      e = "Reinhard";
      break;
    case 3:
      e = "Cineon";
      break;
    case 4:
      e = "ACESFilmic";
      break;
    case 6:
      e = "AgX";
      break;
    case 7:
      e = "Neutral";
      break;
    case 5:
      e = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
  }
  return "vec3 " + r + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
const os = /* @__PURE__ */ new D();
function Yp() {
  jt.getLuminanceCoefficients(os);
  const r = os.x.toFixed(4), t = os.y.toFixed(4), e = os.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function Kp(r) {
  return [
    r.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    r.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(_r).join(`
`);
}
function Zp(r) {
  const t = [];
  for (const e in r) {
    const n = r[e];
    n !== !1 && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function Jp(r, t) {
  const e = {}, n = r.getProgramParameter(t, r.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const s = r.getActiveAttrib(t, i), a = s.name;
    let o = 1;
    s.type === r.FLOAT_MAT2 && (o = 2), s.type === r.FLOAT_MAT3 && (o = 3), s.type === r.FLOAT_MAT4 && (o = 4), e[a] = {
      type: s.type,
      location: r.getAttribLocation(t, a),
      locationSize: o
    };
  }
  return e;
}
function _r(r) {
  return r !== "";
}
function cl(r, t) {
  const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return r.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function ul(r, t) {
  return r.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const $p = /^[ \t]*#include +<([\w\d./]+)>/gm;
function La(r) {
  return r.replace($p, Qp);
}
const jp = /* @__PURE__ */ new Map();
function Qp(r, t) {
  let e = Gt[t];
  if (e === void 0) {
    const n = jp.get(t);
    if (n !== void 0)
      e = Gt[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
    else
      throw new Error("Can not resolve #include <" + t + ">");
  }
  return La(e);
}
const tm = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function hl(r) {
  return r.replace(tm, em);
}
function em(r, t, e, n) {
  let i = "";
  for (let s = parseInt(t); s < parseInt(e); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function fl(r) {
  let t = `precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;
  return r.precision === "highp" ? t += `
#define HIGH_PRECISION` : r.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
function nm(r) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return r.shadowMapType === 1 ? t = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === 2 ? t = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === 3 && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function im(r) {
  let t = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case 301:
      case 302:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case 306:
        t = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return t;
}
function rm(r) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case 302:
        t = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return t;
}
function sm(r) {
  let t = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case 0:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case 1:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case 2:
        t = "ENVMAP_BLENDING_ADD";
        break;
    }
  return t;
}
function am(r) {
  const t = r.envMapCubeUVHeight;
  if (t === null) return null;
  const e = Math.log2(t) - 2, n = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)), texelHeight: n, maxMip: e };
}
function om(r, t, e, n) {
  const i = r.getContext(), s = e.defines;
  let a = e.vertexShader, o = e.fragmentShader;
  const l = nm(e), c = im(e), u = rm(e), h = sm(e), f = am(e), d = Kp(e), g = Zp(s), _ = i.createProgram();
  let p, m, y = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (p = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    g
  ].filter(_r).join(`
`), p.length > 0 && (p += `
`), m = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    g
  ].filter(_r).join(`
`), m.length > 0 && (m += `
`)) : (p = [
    fl(e),
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    g,
    e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    e.batching ? "#define USE_BATCHING" : "",
    e.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    e.instancing ? "#define USE_INSTANCING" : "",
    e.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    e.useFog && e.fog ? "#define USE_FOG" : "",
    e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
    e.map ? "#define USE_MAP" : "",
    e.envMap ? "#define USE_ENVMAP" : "",
    e.envMap ? "#define " + u : "",
    e.lightMap ? "#define USE_LIGHTMAP" : "",
    e.aoMap ? "#define USE_AOMAP" : "",
    e.bumpMap ? "#define USE_BUMPMAP" : "",
    e.normalMap ? "#define USE_NORMALMAP" : "",
    e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    e.anisotropy ? "#define USE_ANISOTROPY" : "",
    e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    e.specularMap ? "#define USE_SPECULARMAP" : "",
    e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    e.metalnessMap ? "#define USE_METALNESSMAP" : "",
    e.alphaMap ? "#define USE_ALPHAMAP" : "",
    e.alphaHash ? "#define USE_ALPHAHASH" : "",
    e.transmission ? "#define USE_TRANSMISSION" : "",
    e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    e.mapUv ? "#define MAP_UV " + e.mapUv : "",
    e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "",
    e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "",
    e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "",
    e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "",
    e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "",
    e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "",
    e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "",
    e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "",
    e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "",
    e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "",
    e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "",
    e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "",
    e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "",
    e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "",
    e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "",
    e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "",
    e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "",
    e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "",
    e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "",
    e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "",
    e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "",
    e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "",
    //
    e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "",
    e.vertexColors ? "#define USE_COLOR" : "",
    e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    e.vertexUv1s ? "#define USE_UV1" : "",
    e.vertexUv2s ? "#define USE_UV2" : "",
    e.vertexUv3s ? "#define USE_UV3" : "",
    e.pointsUvs ? "#define USE_POINTS_UV" : "",
    e.flatShading ? "#define FLAT_SHADED" : "",
    e.skinning ? "#define USE_SKINNING" : "",
    e.morphTargets ? "#define USE_MORPHTARGETS" : "",
    e.morphNormals && e.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    e.morphColors ? "#define USE_MORPHCOLORS" : "",
    e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "",
    e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "",
    e.doubleSided ? "#define DOUBLE_SIDED" : "",
    e.flipSided ? "#define FLIP_SIDED" : "",
    e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    e.shadowMapEnabled ? "#define " + l : "",
    e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(_r).join(`
`), m = [
    fl(e),
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    g,
    e.useFog && e.fog ? "#define USE_FOG" : "",
    e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
    e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    e.map ? "#define USE_MAP" : "",
    e.matcap ? "#define USE_MATCAP" : "",
    e.envMap ? "#define USE_ENVMAP" : "",
    e.envMap ? "#define " + c : "",
    e.envMap ? "#define " + u : "",
    e.envMap ? "#define " + h : "",
    f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
    f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
    f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
    e.lightMap ? "#define USE_LIGHTMAP" : "",
    e.aoMap ? "#define USE_AOMAP" : "",
    e.bumpMap ? "#define USE_BUMPMAP" : "",
    e.normalMap ? "#define USE_NORMALMAP" : "",
    e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    e.anisotropy ? "#define USE_ANISOTROPY" : "",
    e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    e.clearcoat ? "#define USE_CLEARCOAT" : "",
    e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    e.dispersion ? "#define USE_DISPERSION" : "",
    e.iridescence ? "#define USE_IRIDESCENCE" : "",
    e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    e.specularMap ? "#define USE_SPECULARMAP" : "",
    e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    e.metalnessMap ? "#define USE_METALNESSMAP" : "",
    e.alphaMap ? "#define USE_ALPHAMAP" : "",
    e.alphaTest ? "#define USE_ALPHATEST" : "",
    e.alphaHash ? "#define USE_ALPHAHASH" : "",
    e.sheen ? "#define USE_SHEEN" : "",
    e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    e.transmission ? "#define USE_TRANSMISSION" : "",
    e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "",
    e.vertexColors || e.instancingColor || e.batchingColor ? "#define USE_COLOR" : "",
    e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    e.vertexUv1s ? "#define USE_UV1" : "",
    e.vertexUv2s ? "#define USE_UV2" : "",
    e.vertexUv3s ? "#define USE_UV3" : "",
    e.pointsUvs ? "#define USE_POINTS_UV" : "",
    e.gradientMap ? "#define USE_GRADIENTMAP" : "",
    e.flatShading ? "#define FLAT_SHADED" : "",
    e.doubleSided ? "#define DOUBLE_SIDED" : "",
    e.flipSided ? "#define FLIP_SIDED" : "",
    e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    e.shadowMapEnabled ? "#define " + l : "",
    e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    e.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
    e.toneMapping !== 0 ? Gt.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    e.toneMapping !== 0 ? qp("toneMapping", e.toneMapping) : "",
    e.dithering ? "#define DITHERING" : "",
    e.opaque ? "#define OPAQUE" : "",
    Gt.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Xp("linearToOutputTexel", e.outputColorSpace),
    Yp(),
    e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "",
    `
`
  ].filter(_r).join(`
`)), a = La(a), a = cl(a, e), a = ul(a, e), o = La(o), o = cl(o, e), o = ul(o, e), a = hl(a), o = hl(o), e.isRawShaderMaterial !== !0 && (y = `#version 300 es
`, p = [
    d,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, m = [
    "#define varying in",
    e.glslVersion === Po ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    e.glslVersion === Po ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + m);
  const x = y + p + a, S = y + m + o, C = ol(i, i.VERTEX_SHADER, x), b = ol(i, i.FRAGMENT_SHADER, S);
  i.attachShader(_, C), i.attachShader(_, b), e.index0AttributeName !== void 0 ? i.bindAttribLocation(_, 0, e.index0AttributeName) : e.morphTargets === !0 && i.bindAttribLocation(_, 0, "position"), i.linkProgram(_);
  function A(T) {
    if (r.debug.checkShaderErrors) {
      const G = i.getProgramInfoLog(_).trim(), F = i.getShaderInfoLog(C).trim(), B = i.getShaderInfoLog(b).trim();
      let q = !0, O = !0;
      if (i.getProgramParameter(_, i.LINK_STATUS) === !1)
        if (q = !1, typeof r.debug.onShaderError == "function")
          r.debug.onShaderError(i, _, C, b);
        else {
          const Z = ll(i, C, "vertex"), W = ll(i, b, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(_, i.VALIDATE_STATUS) + `

Material Name: ` + T.name + `
Material Type: ` + T.type + `

Program Info Log: ` + G + `
` + Z + `
` + W
          );
        }
      else G !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", G) : (F === "" || B === "") && (O = !1);
      O && (T.diagnostics = {
        runnable: q,
        programLog: G,
        vertexShader: {
          log: F,
          prefix: p
        },
        fragmentShader: {
          log: B,
          prefix: m
        }
      });
    }
    i.deleteShader(C), i.deleteShader(b), P = new ps(i, _), L = Jp(i, _);
  }
  let P;
  this.getUniforms = function() {
    return P === void 0 && A(this), P;
  };
  let L;
  this.getAttributes = function() {
    return L === void 0 && A(this), L;
  };
  let v = e.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return v === !1 && (v = i.getProgramParameter(_, kp)), v;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(_), this.program = void 0;
  }, this.type = e.shaderType, this.name = e.shaderName, this.id = Vp++, this.cacheKey = t, this.usedTimes = 1, this.program = _, this.vertexShader = C, this.fragmentShader = b, this;
}
let lm = 0;
class cm {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(t) {
    const e = t.vertexShader, n = t.fragmentShader, i = this._getShaderStage(e), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(t);
    return a.has(i) === !1 && (a.add(i), i.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
  }
  remove(t) {
    const e = this.materialCache.get(t);
    for (const n of e)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(t), this;
  }
  getVertexShaderID(t) {
    return this._getShaderStage(t.vertexShader).id;
  }
  getFragmentShaderID(t) {
    return this._getShaderStage(t.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(t) {
    const e = this.materialCache;
    let n = e.get(t);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), e.set(t, n)), n;
  }
  _getShaderStage(t) {
    const e = this.shaderCache;
    let n = e.get(t);
    return n === void 0 && (n = new um(t), e.set(t, n)), n;
  }
}
class um {
  constructor(t) {
    this.id = lm++, this.code = t, this.usedTimes = 0;
  }
}
function hm(r, t, e, n, i, s, a) {
  const o = new jl(), l = new cm(), c = /* @__PURE__ */ new Set(), u = [], h = i.logarithmicDepthBuffer, f = i.reverseDepthBuffer, d = i.vertexTextures;
  let g = i.precision;
  const _ = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function p(v) {
    return c.add(v), v === 0 ? "uv" : `uv${v}`;
  }
  function m(v, T, G, F, B) {
    const q = F.fog, O = B.geometry, Z = v.isMeshStandardMaterial ? F.environment : null, W = (v.isMeshStandardMaterial ? e : t).get(v.envMap || Z), lt = W && W.mapping === 306 ? W.image.height : null, rt = _[v.type];
    v.precision !== null && (g = i.getMaxPrecision(v.precision), g !== v.precision && console.warn("THREE.WebGLProgram.getParameters:", v.precision, "not supported, using", g, "instead."));
    const ht = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, Ft = ht !== void 0 ? ht.length : 0;
    let Ht = 0;
    O.morphAttributes.position !== void 0 && (Ht = 1), O.morphAttributes.normal !== void 0 && (Ht = 2), O.morphAttributes.color !== void 0 && (Ht = 3);
    let V, Q, Mt, ut;
    if (rt) {
      const Tt = vn[rt];
      V = Tt.vertexShader, Q = Tt.fragmentShader;
    } else
      V = v.vertexShader, Q = v.fragmentShader, l.update(v), Mt = l.getVertexShaderID(v), ut = l.getFragmentShaderID(v);
    const Dt = r.getRenderTarget(), Pt = B.isInstancedMesh === !0, Lt = B.isBatchedMesh === !0, zt = !!v.map, J = !!v.matcap, R = !!W, st = !!v.aoMap, nt = !!v.lightMap, et = !!v.bumpMap, at = !!v.normalMap, bt = !!v.displacementMap, _t = !!v.emissiveMap, w = !!v.metalnessMap, M = !!v.roughnessMap, z = v.anisotropy > 0, Y = v.clearcoat > 0, j = v.dispersion > 0, K = v.iridescence > 0, yt = v.sheen > 0, ct = v.transmission > 0, dt = z && !!v.anisotropyMap, Bt = Y && !!v.clearcoatMap, tt = Y && !!v.clearcoatNormalMap, gt = Y && !!v.clearcoatRoughnessMap, wt = K && !!v.iridescenceMap, It = K && !!v.iridescenceThicknessMap, St = yt && !!v.sheenColorMap, Vt = yt && !!v.sheenRoughnessMap, Ut = !!v.specularMap, Zt = !!v.specularColorMap, I = !!v.specularIntensityMap, mt = ct && !!v.transmissionMap, X = ct && !!v.thicknessMap, $ = !!v.gradientMap, pt = !!v.alphaMap, vt = v.alphaTest > 0, Wt = !!v.alphaHash, le = !!v.extensions;
    let be = 0;
    v.toneMapped && (Dt === null || Dt.isXRRenderTarget === !0) && (be = r.toneMapping);
    const Kt = {
      shaderID: rt,
      shaderType: v.type,
      shaderName: v.name,
      vertexShader: V,
      fragmentShader: Q,
      defines: v.defines,
      customVertexShaderID: Mt,
      customFragmentShaderID: ut,
      isRawShaderMaterial: v.isRawShaderMaterial === !0,
      glslVersion: v.glslVersion,
      precision: g,
      batching: Lt,
      batchingColor: Lt && B._colorsTexture !== null,
      instancing: Pt,
      instancingColor: Pt && B.instanceColor !== null,
      instancingMorph: Pt && B.morphTexture !== null,
      supportsVertexTextures: d,
      outputColorSpace: Dt === null ? r.outputColorSpace : Dt.isXRRenderTarget === !0 ? Dt.texture.colorSpace : Qn,
      alphaToCoverage: !!v.alphaToCoverage,
      map: zt,
      matcap: J,
      envMap: R,
      envMapMode: R && W.mapping,
      envMapCubeUVHeight: lt,
      aoMap: st,
      lightMap: nt,
      bumpMap: et,
      normalMap: at,
      displacementMap: d && bt,
      emissiveMap: _t,
      normalMapObjectSpace: at && v.normalMapType === 1,
      normalMapTangentSpace: at && v.normalMapType === 0,
      metalnessMap: w,
      roughnessMap: M,
      anisotropy: z,
      anisotropyMap: dt,
      clearcoat: Y,
      clearcoatMap: Bt,
      clearcoatNormalMap: tt,
      clearcoatRoughnessMap: gt,
      dispersion: j,
      iridescence: K,
      iridescenceMap: wt,
      iridescenceThicknessMap: It,
      sheen: yt,
      sheenColorMap: St,
      sheenRoughnessMap: Vt,
      specularMap: Ut,
      specularColorMap: Zt,
      specularIntensityMap: I,
      transmission: ct,
      transmissionMap: mt,
      thicknessMap: X,
      gradientMap: $,
      opaque: v.transparent === !1 && v.blending === 1 && v.alphaToCoverage === !1,
      alphaMap: pt,
      alphaTest: vt,
      alphaHash: Wt,
      combine: v.combine,
      //
      mapUv: zt && p(v.map.channel),
      aoMapUv: st && p(v.aoMap.channel),
      lightMapUv: nt && p(v.lightMap.channel),
      bumpMapUv: et && p(v.bumpMap.channel),
      normalMapUv: at && p(v.normalMap.channel),
      displacementMapUv: bt && p(v.displacementMap.channel),
      emissiveMapUv: _t && p(v.emissiveMap.channel),
      metalnessMapUv: w && p(v.metalnessMap.channel),
      roughnessMapUv: M && p(v.roughnessMap.channel),
      anisotropyMapUv: dt && p(v.anisotropyMap.channel),
      clearcoatMapUv: Bt && p(v.clearcoatMap.channel),
      clearcoatNormalMapUv: tt && p(v.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: gt && p(v.clearcoatRoughnessMap.channel),
      iridescenceMapUv: wt && p(v.iridescenceMap.channel),
      iridescenceThicknessMapUv: It && p(v.iridescenceThicknessMap.channel),
      sheenColorMapUv: St && p(v.sheenColorMap.channel),
      sheenRoughnessMapUv: Vt && p(v.sheenRoughnessMap.channel),
      specularMapUv: Ut && p(v.specularMap.channel),
      specularColorMapUv: Zt && p(v.specularColorMap.channel),
      specularIntensityMapUv: I && p(v.specularIntensityMap.channel),
      transmissionMapUv: mt && p(v.transmissionMap.channel),
      thicknessMapUv: X && p(v.thicknessMap.channel),
      alphaMapUv: pt && p(v.alphaMap.channel),
      //
      vertexTangents: !!O.attributes.tangent && (at || z),
      vertexColors: v.vertexColors,
      vertexAlphas: v.vertexColors === !0 && !!O.attributes.color && O.attributes.color.itemSize === 4,
      pointsUvs: B.isPoints === !0 && !!O.attributes.uv && (zt || pt),
      fog: !!q,
      useFog: v.fog === !0,
      fogExp2: !!q && q.isFogExp2,
      flatShading: v.flatShading === !0,
      sizeAttenuation: v.sizeAttenuation === !0,
      logarithmicDepthBuffer: h,
      reverseDepthBuffer: f,
      skinning: B.isSkinnedMesh === !0,
      morphTargets: O.morphAttributes.position !== void 0,
      morphNormals: O.morphAttributes.normal !== void 0,
      morphColors: O.morphAttributes.color !== void 0,
      morphTargetsCount: Ft,
      morphTextureStride: Ht,
      numDirLights: T.directional.length,
      numPointLights: T.point.length,
      numSpotLights: T.spot.length,
      numSpotLightMaps: T.spotLightMap.length,
      numRectAreaLights: T.rectArea.length,
      numHemiLights: T.hemi.length,
      numDirLightShadows: T.directionalShadowMap.length,
      numPointLightShadows: T.pointShadowMap.length,
      numSpotLightShadows: T.spotShadowMap.length,
      numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps,
      numLightProbes: T.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: v.dithering,
      shadowMapEnabled: r.shadowMap.enabled && G.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: be,
      decodeVideoTexture: zt && v.map.isVideoTexture === !0 && jt.getTransfer(v.map.colorSpace) === se,
      premultipliedAlpha: v.premultipliedAlpha,
      doubleSided: v.side === 2,
      flipSided: v.side === 1,
      useDepthPacking: v.depthPacking >= 0,
      depthPacking: v.depthPacking || 0,
      index0AttributeName: v.index0AttributeName,
      extensionClipCullDistance: le && v.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (le && v.extensions.multiDraw === !0 || Lt) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: v.customProgramCacheKey()
    };
    return Kt.vertexUv1s = c.has(1), Kt.vertexUv2s = c.has(2), Kt.vertexUv3s = c.has(3), c.clear(), Kt;
  }
  function y(v) {
    const T = [];
    if (v.shaderID ? T.push(v.shaderID) : (T.push(v.customVertexShaderID), T.push(v.customFragmentShaderID)), v.defines !== void 0)
      for (const G in v.defines)
        T.push(G), T.push(v.defines[G]);
    return v.isRawShaderMaterial === !1 && (x(T, v), S(T, v), T.push(r.outputColorSpace)), T.push(v.customProgramCacheKey), T.join();
  }
  function x(v, T) {
    v.push(T.precision), v.push(T.outputColorSpace), v.push(T.envMapMode), v.push(T.envMapCubeUVHeight), v.push(T.mapUv), v.push(T.alphaMapUv), v.push(T.lightMapUv), v.push(T.aoMapUv), v.push(T.bumpMapUv), v.push(T.normalMapUv), v.push(T.displacementMapUv), v.push(T.emissiveMapUv), v.push(T.metalnessMapUv), v.push(T.roughnessMapUv), v.push(T.anisotropyMapUv), v.push(T.clearcoatMapUv), v.push(T.clearcoatNormalMapUv), v.push(T.clearcoatRoughnessMapUv), v.push(T.iridescenceMapUv), v.push(T.iridescenceThicknessMapUv), v.push(T.sheenColorMapUv), v.push(T.sheenRoughnessMapUv), v.push(T.specularMapUv), v.push(T.specularColorMapUv), v.push(T.specularIntensityMapUv), v.push(T.transmissionMapUv), v.push(T.thicknessMapUv), v.push(T.combine), v.push(T.fogExp2), v.push(T.sizeAttenuation), v.push(T.morphTargetsCount), v.push(T.morphAttributeCount), v.push(T.numDirLights), v.push(T.numPointLights), v.push(T.numSpotLights), v.push(T.numSpotLightMaps), v.push(T.numHemiLights), v.push(T.numRectAreaLights), v.push(T.numDirLightShadows), v.push(T.numPointLightShadows), v.push(T.numSpotLightShadows), v.push(T.numSpotLightShadowsWithMaps), v.push(T.numLightProbes), v.push(T.shadowMapType), v.push(T.toneMapping), v.push(T.numClippingPlanes), v.push(T.numClipIntersection), v.push(T.depthPacking);
  }
  function S(v, T) {
    o.disableAll(), T.supportsVertexTextures && o.enable(0), T.instancing && o.enable(1), T.instancingColor && o.enable(2), T.instancingMorph && o.enable(3), T.matcap && o.enable(4), T.envMap && o.enable(5), T.normalMapObjectSpace && o.enable(6), T.normalMapTangentSpace && o.enable(7), T.clearcoat && o.enable(8), T.iridescence && o.enable(9), T.alphaTest && o.enable(10), T.vertexColors && o.enable(11), T.vertexAlphas && o.enable(12), T.vertexUv1s && o.enable(13), T.vertexUv2s && o.enable(14), T.vertexUv3s && o.enable(15), T.vertexTangents && o.enable(16), T.anisotropy && o.enable(17), T.alphaHash && o.enable(18), T.batching && o.enable(19), T.dispersion && o.enable(20), T.batchingColor && o.enable(21), v.push(o.mask), o.disableAll(), T.fog && o.enable(0), T.useFog && o.enable(1), T.flatShading && o.enable(2), T.logarithmicDepthBuffer && o.enable(3), T.reverseDepthBuffer && o.enable(4), T.skinning && o.enable(5), T.morphTargets && o.enable(6), T.morphNormals && o.enable(7), T.morphColors && o.enable(8), T.premultipliedAlpha && o.enable(9), T.shadowMapEnabled && o.enable(10), T.doubleSided && o.enable(11), T.flipSided && o.enable(12), T.useDepthPacking && o.enable(13), T.dithering && o.enable(14), T.transmission && o.enable(15), T.sheen && o.enable(16), T.opaque && o.enable(17), T.pointsUvs && o.enable(18), T.decodeVideoTexture && o.enable(19), T.alphaToCoverage && o.enable(20), v.push(o.mask);
  }
  function C(v) {
    const T = _[v.type];
    let G;
    if (T) {
      const F = vn[T];
      G = Yu.clone(F.uniforms);
    } else
      G = v.uniforms;
    return G;
  }
  function b(v, T) {
    let G;
    for (let F = 0, B = u.length; F < B; F++) {
      const q = u[F];
      if (q.cacheKey === T) {
        G = q, ++G.usedTimes;
        break;
      }
    }
    return G === void 0 && (G = new om(r, T, v, s), u.push(G)), G;
  }
  function A(v) {
    if (--v.usedTimes === 0) {
      const T = u.indexOf(v);
      u[T] = u[u.length - 1], u.pop(), v.destroy();
    }
  }
  function P(v) {
    l.remove(v);
  }
  function L() {
    l.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: y,
    getUniforms: C,
    acquireProgram: b,
    releaseProgram: A,
    releaseShaderCache: P,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: u,
    dispose: L
  };
}
function fm() {
  let r = /* @__PURE__ */ new WeakMap();
  function t(a) {
    return r.has(a);
  }
  function e(a) {
    let o = r.get(a);
    return o === void 0 && (o = {}, r.set(a, o)), o;
  }
  function n(a) {
    r.delete(a);
  }
  function i(a, o, l) {
    r.get(a)[o] = l;
  }
  function s() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: t,
    get: e,
    remove: n,
    update: i,
    dispose: s
  };
}
function dm(r, t) {
  return r.groupOrder !== t.groupOrder ? r.groupOrder - t.groupOrder : r.renderOrder !== t.renderOrder ? r.renderOrder - t.renderOrder : r.material.id !== t.material.id ? r.material.id - t.material.id : r.z !== t.z ? r.z - t.z : r.id - t.id;
}
function dl(r, t) {
  return r.groupOrder !== t.groupOrder ? r.groupOrder - t.groupOrder : r.renderOrder !== t.renderOrder ? r.renderOrder - t.renderOrder : r.z !== t.z ? t.z - r.z : r.id - t.id;
}
function pl() {
  const r = [];
  let t = 0;
  const e = [], n = [], i = [];
  function s() {
    t = 0, e.length = 0, n.length = 0, i.length = 0;
  }
  function a(h, f, d, g, _, p) {
    let m = r[t];
    return m === void 0 ? (m = {
      id: h.id,
      object: h,
      geometry: f,
      material: d,
      groupOrder: g,
      renderOrder: h.renderOrder,
      z: _,
      group: p
    }, r[t] = m) : (m.id = h.id, m.object = h, m.geometry = f, m.material = d, m.groupOrder = g, m.renderOrder = h.renderOrder, m.z = _, m.group = p), t++, m;
  }
  function o(h, f, d, g, _, p) {
    const m = a(h, f, d, g, _, p);
    d.transmission > 0 ? n.push(m) : d.transparent === !0 ? i.push(m) : e.push(m);
  }
  function l(h, f, d, g, _, p) {
    const m = a(h, f, d, g, _, p);
    d.transmission > 0 ? n.unshift(m) : d.transparent === !0 ? i.unshift(m) : e.unshift(m);
  }
  function c(h, f) {
    e.length > 1 && e.sort(h || dm), n.length > 1 && n.sort(f || dl), i.length > 1 && i.sort(f || dl);
  }
  function u() {
    for (let h = t, f = r.length; h < f; h++) {
      const d = r[h];
      if (d.id === null) break;
      d.id = null, d.object = null, d.geometry = null, d.material = null, d.group = null;
    }
  }
  return {
    opaque: e,
    transmissive: n,
    transparent: i,
    init: s,
    push: o,
    unshift: l,
    finish: u,
    sort: c
  };
}
function pm() {
  let r = /* @__PURE__ */ new WeakMap();
  function t(n, i) {
    const s = r.get(n);
    let a;
    return s === void 0 ? (a = new pl(), r.set(n, [a])) : i >= s.length ? (a = new pl(), s.push(a)) : a = s[i], a;
  }
  function e() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: e
  };
}
function mm() {
  const r = {};
  return {
    get: function(t) {
      if (r[t.id] !== void 0)
        return r[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            direction: new D(),
            color: new Xt()
          };
          break;
        case "SpotLight":
          e = {
            position: new D(),
            direction: new D(),
            color: new Xt(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          e = {
            position: new D(),
            color: new Xt(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          e = {
            direction: new D(),
            skyColor: new Xt(),
            groundColor: new Xt()
          };
          break;
        case "RectAreaLight":
          e = {
            color: new Xt(),
            position: new D(),
            halfWidth: new D(),
            halfHeight: new D()
          };
          break;
      }
      return r[t.id] = e, e;
    }
  };
}
function _m() {
  const r = {};
  return {
    get: function(t) {
      if (r[t.id] !== void 0)
        return r[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ot()
          };
          break;
        case "SpotLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ot()
          };
          break;
        case "PointLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ot(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return r[t.id] = e, e;
    }
  };
}
let gm = 0;
function vm(r, t) {
  return (t.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (r.map ? 1 : 0);
}
function xm(r) {
  const t = new mm(), e = _m(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let c = 0; c < 9; c++) n.probe.push(new D());
  const i = new D(), s = new ee(), a = new ee();
  function o(c) {
    let u = 0, h = 0, f = 0;
    for (let L = 0; L < 9; L++) n.probe[L].set(0, 0, 0);
    let d = 0, g = 0, _ = 0, p = 0, m = 0, y = 0, x = 0, S = 0, C = 0, b = 0, A = 0;
    c.sort(vm);
    for (let L = 0, v = c.length; L < v; L++) {
      const T = c[L], G = T.color, F = T.intensity, B = T.distance, q = T.shadow && T.shadow.map ? T.shadow.map.texture : null;
      if (T.isAmbientLight)
        u += G.r * F, h += G.g * F, f += G.b * F;
      else if (T.isLightProbe) {
        for (let O = 0; O < 9; O++)
          n.probe[O].addScaledVector(T.sh.coefficients[O], F);
        A++;
      } else if (T.isDirectionalLight) {
        const O = t.get(T);
        if (O.color.copy(T.color).multiplyScalar(T.intensity), T.castShadow) {
          const Z = T.shadow, W = e.get(T);
          W.shadowIntensity = Z.intensity, W.shadowBias = Z.bias, W.shadowNormalBias = Z.normalBias, W.shadowRadius = Z.radius, W.shadowMapSize = Z.mapSize, n.directionalShadow[d] = W, n.directionalShadowMap[d] = q, n.directionalShadowMatrix[d] = T.shadow.matrix, y++;
        }
        n.directional[d] = O, d++;
      } else if (T.isSpotLight) {
        const O = t.get(T);
        O.position.setFromMatrixPosition(T.matrixWorld), O.color.copy(G).multiplyScalar(F), O.distance = B, O.coneCos = Math.cos(T.angle), O.penumbraCos = Math.cos(T.angle * (1 - T.penumbra)), O.decay = T.decay, n.spot[_] = O;
        const Z = T.shadow;
        if (T.map && (n.spotLightMap[C] = T.map, C++, Z.updateMatrices(T), T.castShadow && b++), n.spotLightMatrix[_] = Z.matrix, T.castShadow) {
          const W = e.get(T);
          W.shadowIntensity = Z.intensity, W.shadowBias = Z.bias, W.shadowNormalBias = Z.normalBias, W.shadowRadius = Z.radius, W.shadowMapSize = Z.mapSize, n.spotShadow[_] = W, n.spotShadowMap[_] = q, S++;
        }
        _++;
      } else if (T.isRectAreaLight) {
        const O = t.get(T);
        O.color.copy(G).multiplyScalar(F), O.halfWidth.set(T.width * 0.5, 0, 0), O.halfHeight.set(0, T.height * 0.5, 0), n.rectArea[p] = O, p++;
      } else if (T.isPointLight) {
        const O = t.get(T);
        if (O.color.copy(T.color).multiplyScalar(T.intensity), O.distance = T.distance, O.decay = T.decay, T.castShadow) {
          const Z = T.shadow, W = e.get(T);
          W.shadowIntensity = Z.intensity, W.shadowBias = Z.bias, W.shadowNormalBias = Z.normalBias, W.shadowRadius = Z.radius, W.shadowMapSize = Z.mapSize, W.shadowCameraNear = Z.camera.near, W.shadowCameraFar = Z.camera.far, n.pointShadow[g] = W, n.pointShadowMap[g] = q, n.pointShadowMatrix[g] = T.shadow.matrix, x++;
        }
        n.point[g] = O, g++;
      } else if (T.isHemisphereLight) {
        const O = t.get(T);
        O.skyColor.copy(T.color).multiplyScalar(F), O.groundColor.copy(T.groundColor).multiplyScalar(F), n.hemi[m] = O, m++;
      }
    }
    p > 0 && (r.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = ft.LTC_FLOAT_1, n.rectAreaLTC2 = ft.LTC_FLOAT_2) : (n.rectAreaLTC1 = ft.LTC_HALF_1, n.rectAreaLTC2 = ft.LTC_HALF_2)), n.ambient[0] = u, n.ambient[1] = h, n.ambient[2] = f;
    const P = n.hash;
    (P.directionalLength !== d || P.pointLength !== g || P.spotLength !== _ || P.rectAreaLength !== p || P.hemiLength !== m || P.numDirectionalShadows !== y || P.numPointShadows !== x || P.numSpotShadows !== S || P.numSpotMaps !== C || P.numLightProbes !== A) && (n.directional.length = d, n.spot.length = _, n.rectArea.length = p, n.point.length = g, n.hemi.length = m, n.directionalShadow.length = y, n.directionalShadowMap.length = y, n.pointShadow.length = x, n.pointShadowMap.length = x, n.spotShadow.length = S, n.spotShadowMap.length = S, n.directionalShadowMatrix.length = y, n.pointShadowMatrix.length = x, n.spotLightMatrix.length = S + C - b, n.spotLightMap.length = C, n.numSpotLightShadowsWithMaps = b, n.numLightProbes = A, P.directionalLength = d, P.pointLength = g, P.spotLength = _, P.rectAreaLength = p, P.hemiLength = m, P.numDirectionalShadows = y, P.numPointShadows = x, P.numSpotShadows = S, P.numSpotMaps = C, P.numLightProbes = A, n.version = gm++);
  }
  function l(c, u) {
    let h = 0, f = 0, d = 0, g = 0, _ = 0;
    const p = u.matrixWorldInverse;
    for (let m = 0, y = c.length; m < y; m++) {
      const x = c[m];
      if (x.isDirectionalLight) {
        const S = n.directional[h];
        S.direction.setFromMatrixPosition(x.matrixWorld), i.setFromMatrixPosition(x.target.matrixWorld), S.direction.sub(i), S.direction.transformDirection(p), h++;
      } else if (x.isSpotLight) {
        const S = n.spot[d];
        S.position.setFromMatrixPosition(x.matrixWorld), S.position.applyMatrix4(p), S.direction.setFromMatrixPosition(x.matrixWorld), i.setFromMatrixPosition(x.target.matrixWorld), S.direction.sub(i), S.direction.transformDirection(p), d++;
      } else if (x.isRectAreaLight) {
        const S = n.rectArea[g];
        S.position.setFromMatrixPosition(x.matrixWorld), S.position.applyMatrix4(p), a.identity(), s.copy(x.matrixWorld), s.premultiply(p), a.extractRotation(s), S.halfWidth.set(x.width * 0.5, 0, 0), S.halfHeight.set(0, x.height * 0.5, 0), S.halfWidth.applyMatrix4(a), S.halfHeight.applyMatrix4(a), g++;
      } else if (x.isPointLight) {
        const S = n.point[f];
        S.position.setFromMatrixPosition(x.matrixWorld), S.position.applyMatrix4(p), f++;
      } else if (x.isHemisphereLight) {
        const S = n.hemi[_];
        S.direction.setFromMatrixPosition(x.matrixWorld), S.direction.transformDirection(p), _++;
      }
    }
  }
  return {
    setup: o,
    setupView: l,
    state: n
  };
}
function ml(r) {
  const t = new xm(r), e = [], n = [];
  function i(u) {
    c.camera = u, e.length = 0, n.length = 0;
  }
  function s(u) {
    e.push(u);
  }
  function a(u) {
    n.push(u);
  }
  function o() {
    t.setup(e);
  }
  function l(u) {
    t.setupView(e, u);
  }
  const c = {
    lightsArray: e,
    shadowsArray: n,
    camera: null,
    lights: t,
    transmissionRenderTarget: {}
  };
  return {
    init: i,
    state: c,
    setupLights: o,
    setupLightsView: l,
    pushLight: s,
    pushShadow: a
  };
}
function Sm(r) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(i, s = 0) {
    const a = t.get(i);
    let o;
    return a === void 0 ? (o = new ml(r), t.set(i, [o])) : s >= a.length ? (o = new ml(r), a.push(o)) : o = a[s], o;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: n
  };
}
class Mm extends Or {
  constructor(t) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class ym extends Or {
  constructor(t) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  }
}
const Tm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Em = `uniform sampler2D shadow_pass;
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
}`;
function Am(r, t, e) {
  let n = new Qa();
  const i = new ot(), s = new ot(), a = new te(), o = new Mm({ depthPacking: 3201 }), l = new ym(), c = {}, u = e.maxTextureSize, h = { 0: 1, 1: 0, 2: 2 }, f = new Zn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new ot() },
      radius: { value: 4 }
    },
    vertexShader: Tm,
    fragmentShader: Em
  }), d = f.clone();
  d.defines.HORIZONTAL_PASS = 1;
  const g = new un();
  g.setAttribute(
    "position",
    new Qe(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const _ = new ae(g, f), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let m = this.type;
  this.render = function(b, A, P) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || b.length === 0) return;
    const L = r.getRenderTarget(), v = r.getActiveCubeFace(), T = r.getActiveMipmapLevel(), G = r.state;
    G.setBlending(0), G.buffers.color.setClear(1, 1, 1, 1), G.buffers.depth.setTest(!0), G.setScissorTest(!1);
    const F = m !== 3 && this.type === 3, B = m === 3 && this.type !== 3;
    for (let q = 0, O = b.length; q < O; q++) {
      const Z = b[q], W = Z.shadow;
      if (W === void 0) {
        console.warn("THREE.WebGLShadowMap:", Z, "has no shadow.");
        continue;
      }
      if (W.autoUpdate === !1 && W.needsUpdate === !1) continue;
      i.copy(W.mapSize);
      const lt = W.getFrameExtents();
      if (i.multiply(lt), s.copy(W.mapSize), (i.x > u || i.y > u) && (i.x > u && (s.x = Math.floor(u / lt.x), i.x = s.x * lt.x, W.mapSize.x = s.x), i.y > u && (s.y = Math.floor(u / lt.y), i.y = s.y * lt.y, W.mapSize.y = s.y)), W.map === null || F === !0 || B === !0) {
        const ht = this.type !== 3 ? { minFilter: 1003, magFilter: 1003 } : {};
        W.map !== null && W.map.dispose(), W.map = new vi(i.x, i.y, ht), W.map.texture.name = Z.name + ".shadowMap", W.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(W.map), r.clear();
      const rt = W.getViewportCount();
      for (let ht = 0; ht < rt; ht++) {
        const Ft = W.getViewport(ht);
        a.set(
          s.x * Ft.x,
          s.y * Ft.y,
          s.x * Ft.z,
          s.y * Ft.w
        ), G.viewport(a), W.updateMatrices(Z, ht), n = W.getFrustum(), S(A, P, W.camera, Z, this.type);
      }
      W.isPointLightShadow !== !0 && this.type === 3 && y(W, P), W.needsUpdate = !1;
    }
    m = this.type, p.needsUpdate = !1, r.setRenderTarget(L, v, T);
  };
  function y(b, A) {
    const P = t.update(_);
    f.defines.VSM_SAMPLES !== b.blurSamples && (f.defines.VSM_SAMPLES = b.blurSamples, d.defines.VSM_SAMPLES = b.blurSamples, f.needsUpdate = !0, d.needsUpdate = !0), b.mapPass === null && (b.mapPass = new vi(i.x, i.y)), f.uniforms.shadow_pass.value = b.map.texture, f.uniforms.resolution.value = b.mapSize, f.uniforms.radius.value = b.radius, r.setRenderTarget(b.mapPass), r.clear(), r.renderBufferDirect(A, null, P, f, _, null), d.uniforms.shadow_pass.value = b.mapPass.texture, d.uniforms.resolution.value = b.mapSize, d.uniforms.radius.value = b.radius, r.setRenderTarget(b.map), r.clear(), r.renderBufferDirect(A, null, P, d, _, null);
  }
  function x(b, A, P, L) {
    let v = null;
    const T = P.isPointLight === !0 ? b.customDistanceMaterial : b.customDepthMaterial;
    if (T !== void 0)
      v = T;
    else if (v = P.isPointLight === !0 ? l : o, r.localClippingEnabled && A.clipShadows === !0 && Array.isArray(A.clippingPlanes) && A.clippingPlanes.length !== 0 || A.displacementMap && A.displacementScale !== 0 || A.alphaMap && A.alphaTest > 0 || A.map && A.alphaTest > 0) {
      const G = v.uuid, F = A.uuid;
      let B = c[G];
      B === void 0 && (B = {}, c[G] = B);
      let q = B[F];
      q === void 0 && (q = v.clone(), B[F] = q, A.addEventListener("dispose", C)), v = q;
    }
    if (v.visible = A.visible, v.wireframe = A.wireframe, L === 3 ? v.side = A.shadowSide !== null ? A.shadowSide : A.side : v.side = A.shadowSide !== null ? A.shadowSide : h[A.side], v.alphaMap = A.alphaMap, v.alphaTest = A.alphaTest, v.map = A.map, v.clipShadows = A.clipShadows, v.clippingPlanes = A.clippingPlanes, v.clipIntersection = A.clipIntersection, v.displacementMap = A.displacementMap, v.displacementScale = A.displacementScale, v.displacementBias = A.displacementBias, v.wireframeLinewidth = A.wireframeLinewidth, v.linewidth = A.linewidth, P.isPointLight === !0 && v.isMeshDistanceMaterial === !0) {
      const G = r.properties.get(v);
      G.light = P;
    }
    return v;
  }
  function S(b, A, P, L, v) {
    if (b.visible === !1) return;
    if (b.layers.test(A.layers) && (b.isMesh || b.isLine || b.isPoints) && (b.castShadow || b.receiveShadow && v === 3) && (!b.frustumCulled || n.intersectsObject(b))) {
      b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse, b.matrixWorld);
      const F = t.update(b), B = b.material;
      if (Array.isArray(B)) {
        const q = F.groups;
        for (let O = 0, Z = q.length; O < Z; O++) {
          const W = q[O], lt = B[W.materialIndex];
          if (lt && lt.visible) {
            const rt = x(b, lt, L, v);
            b.onBeforeShadow(r, b, A, P, F, rt, W), r.renderBufferDirect(P, null, F, rt, b, W), b.onAfterShadow(r, b, A, P, F, rt, W);
          }
        }
      } else if (B.visible) {
        const q = x(b, B, L, v);
        b.onBeforeShadow(r, b, A, P, F, q, null), r.renderBufferDirect(P, null, F, q, b, null), b.onAfterShadow(r, b, A, P, F, q, null);
      }
    }
    const G = b.children;
    for (let F = 0, B = G.length; F < B; F++)
      S(G[F], A, P, L, v);
  }
  function C(b) {
    b.target.removeEventListener("dispose", C);
    for (const P in c) {
      const L = c[P], v = b.target.uuid;
      v in L && (L[v].dispose(), delete L[v]);
    }
  }
}
const bm = {
  0: 1,
  2: 6,
  4: 7,
  3: 5,
  1: 0,
  6: 2,
  7: 4,
  5: 3
};
function wm(r) {
  function t() {
    let I = !1;
    const mt = new te();
    let X = null;
    const $ = new te(0, 0, 0, 0);
    return {
      setMask: function(pt) {
        X !== pt && !I && (r.colorMask(pt, pt, pt, pt), X = pt);
      },
      setLocked: function(pt) {
        I = pt;
      },
      setClear: function(pt, vt, Wt, le, be) {
        be === !0 && (pt *= le, vt *= le, Wt *= le), mt.set(pt, vt, Wt, le), $.equals(mt) === !1 && (r.clearColor(pt, vt, Wt, le), $.copy(mt));
      },
      reset: function() {
        I = !1, X = null, $.set(-1, 0, 0, 0);
      }
    };
  }
  function e() {
    let I = !1, mt = !1, X = null, $ = null, pt = null;
    return {
      setReversed: function(vt) {
        mt = vt;
      },
      setTest: function(vt) {
        vt ? Mt(r.DEPTH_TEST) : ut(r.DEPTH_TEST);
      },
      setMask: function(vt) {
        X !== vt && !I && (r.depthMask(vt), X = vt);
      },
      setFunc: function(vt) {
        if (mt && (vt = bm[vt]), $ !== vt) {
          switch (vt) {
            case 0:
              r.depthFunc(r.NEVER);
              break;
            case 1:
              r.depthFunc(r.ALWAYS);
              break;
            case 2:
              r.depthFunc(r.LESS);
              break;
            case 3:
              r.depthFunc(r.LEQUAL);
              break;
            case 4:
              r.depthFunc(r.EQUAL);
              break;
            case 5:
              r.depthFunc(r.GEQUAL);
              break;
            case 6:
              r.depthFunc(r.GREATER);
              break;
            case 7:
              r.depthFunc(r.NOTEQUAL);
              break;
            default:
              r.depthFunc(r.LEQUAL);
          }
          $ = vt;
        }
      },
      setLocked: function(vt) {
        I = vt;
      },
      setClear: function(vt) {
        pt !== vt && (r.clearDepth(vt), pt = vt);
      },
      reset: function() {
        I = !1, X = null, $ = null, pt = null;
      }
    };
  }
  function n() {
    let I = !1, mt = null, X = null, $ = null, pt = null, vt = null, Wt = null, le = null, be = null;
    return {
      setTest: function(Kt) {
        I || (Kt ? Mt(r.STENCIL_TEST) : ut(r.STENCIL_TEST));
      },
      setMask: function(Kt) {
        mt !== Kt && !I && (r.stencilMask(Kt), mt = Kt);
      },
      setFunc: function(Kt, Tt, Yt) {
        (X !== Kt || $ !== Tt || pt !== Yt) && (r.stencilFunc(Kt, Tt, Yt), X = Kt, $ = Tt, pt = Yt);
      },
      setOp: function(Kt, Tt, Yt) {
        (vt !== Kt || Wt !== Tt || le !== Yt) && (r.stencilOp(Kt, Tt, Yt), vt = Kt, Wt = Tt, le = Yt);
      },
      setLocked: function(Kt) {
        I = Kt;
      },
      setClear: function(Kt) {
        be !== Kt && (r.clearStencil(Kt), be = Kt);
      },
      reset: function() {
        I = !1, mt = null, X = null, $ = null, pt = null, vt = null, Wt = null, le = null, be = null;
      }
    };
  }
  const i = new t(), s = new e(), a = new n(), o = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let c = {}, u = {}, h = /* @__PURE__ */ new WeakMap(), f = [], d = null, g = !1, _ = null, p = null, m = null, y = null, x = null, S = null, C = null, b = new Xt(0, 0, 0), A = 0, P = !1, L = null, v = null, T = null, G = null, F = null;
  const B = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let q = !1, O = 0;
  const Z = r.getParameter(r.VERSION);
  Z.indexOf("WebGL") !== -1 ? (O = parseFloat(/^WebGL (\d)/.exec(Z)[1]), q = O >= 1) : Z.indexOf("OpenGL ES") !== -1 && (O = parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]), q = O >= 2);
  let W = null, lt = {};
  const rt = r.getParameter(r.SCISSOR_BOX), ht = r.getParameter(r.VIEWPORT), Ft = new te().fromArray(rt), Ht = new te().fromArray(ht);
  function V(I, mt, X, $) {
    const pt = new Uint8Array(4), vt = r.createTexture();
    r.bindTexture(I, vt), r.texParameteri(I, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(I, r.TEXTURE_MAG_FILTER, r.NEAREST);
    for (let Wt = 0; Wt < X; Wt++)
      I === r.TEXTURE_3D || I === r.TEXTURE_2D_ARRAY ? r.texImage3D(mt, 0, r.RGBA, 1, 1, $, 0, r.RGBA, r.UNSIGNED_BYTE, pt) : r.texImage2D(mt + Wt, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, pt);
    return vt;
  }
  const Q = {};
  Q[r.TEXTURE_2D] = V(r.TEXTURE_2D, r.TEXTURE_2D, 1), Q[r.TEXTURE_CUBE_MAP] = V(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Q[r.TEXTURE_2D_ARRAY] = V(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1), Q[r.TEXTURE_3D] = V(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1), i.setClear(0, 0, 0, 1), s.setClear(1), a.setClear(0), Mt(r.DEPTH_TEST), s.setFunc(3), nt(!1), et(1), Mt(r.CULL_FACE), R(0);
  function Mt(I) {
    c[I] !== !0 && (r.enable(I), c[I] = !0);
  }
  function ut(I) {
    c[I] !== !1 && (r.disable(I), c[I] = !1);
  }
  function Dt(I, mt) {
    return u[I] !== mt ? (r.bindFramebuffer(I, mt), u[I] = mt, I === r.DRAW_FRAMEBUFFER && (u[r.FRAMEBUFFER] = mt), I === r.FRAMEBUFFER && (u[r.DRAW_FRAMEBUFFER] = mt), !0) : !1;
  }
  function Pt(I, mt) {
    let X = f, $ = !1;
    if (I) {
      X = h.get(mt), X === void 0 && (X = [], h.set(mt, X));
      const pt = I.textures;
      if (X.length !== pt.length || X[0] !== r.COLOR_ATTACHMENT0) {
        for (let vt = 0, Wt = pt.length; vt < Wt; vt++)
          X[vt] = r.COLOR_ATTACHMENT0 + vt;
        X.length = pt.length, $ = !0;
      }
    } else
      X[0] !== r.BACK && (X[0] = r.BACK, $ = !0);
    $ && r.drawBuffers(X);
  }
  function Lt(I) {
    return d !== I ? (r.useProgram(I), d = I, !0) : !1;
  }
  const zt = {
    100: r.FUNC_ADD,
    101: r.FUNC_SUBTRACT,
    102: r.FUNC_REVERSE_SUBTRACT
  };
  zt[103] = r.MIN, zt[104] = r.MAX;
  const J = {
    200: r.ZERO,
    201: r.ONE,
    202: r.SRC_COLOR,
    204: r.SRC_ALPHA,
    210: r.SRC_ALPHA_SATURATE,
    208: r.DST_COLOR,
    206: r.DST_ALPHA,
    203: r.ONE_MINUS_SRC_COLOR,
    205: r.ONE_MINUS_SRC_ALPHA,
    209: r.ONE_MINUS_DST_COLOR,
    207: r.ONE_MINUS_DST_ALPHA,
    211: r.CONSTANT_COLOR,
    212: r.ONE_MINUS_CONSTANT_COLOR,
    213: r.CONSTANT_ALPHA,
    214: r.ONE_MINUS_CONSTANT_ALPHA
  };
  function R(I, mt, X, $, pt, vt, Wt, le, be, Kt) {
    if (I === 0) {
      g === !0 && (ut(r.BLEND), g = !1);
      return;
    }
    if (g === !1 && (Mt(r.BLEND), g = !0), I !== 5) {
      if (I !== _ || Kt !== P) {
        if ((p !== 100 || x !== 100) && (r.blendEquation(r.FUNC_ADD), p = 100, x = 100), Kt)
          switch (I) {
            case 1:
              r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              r.blendFunc(r.ONE, r.ONE);
              break;
            case 3:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case 4:
              r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", I);
              break;
          }
        else
          switch (I) {
            case 1:
              r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              r.blendFunc(r.SRC_ALPHA, r.ONE);
              break;
            case 3:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case 4:
              r.blendFunc(r.ZERO, r.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", I);
              break;
          }
        m = null, y = null, S = null, C = null, b.set(0, 0, 0), A = 0, _ = I, P = Kt;
      }
      return;
    }
    pt = pt || mt, vt = vt || X, Wt = Wt || $, (mt !== p || pt !== x) && (r.blendEquationSeparate(zt[mt], zt[pt]), p = mt, x = pt), (X !== m || $ !== y || vt !== S || Wt !== C) && (r.blendFuncSeparate(J[X], J[$], J[vt], J[Wt]), m = X, y = $, S = vt, C = Wt), (le.equals(b) === !1 || be !== A) && (r.blendColor(le.r, le.g, le.b, be), b.copy(le), A = be), _ = I, P = !1;
  }
  function st(I, mt) {
    I.side === 2 ? ut(r.CULL_FACE) : Mt(r.CULL_FACE);
    let X = I.side === 1;
    mt && (X = !X), nt(X), I.blending === 1 && I.transparent === !1 ? R(0) : R(I.blending, I.blendEquation, I.blendSrc, I.blendDst, I.blendEquationAlpha, I.blendSrcAlpha, I.blendDstAlpha, I.blendColor, I.blendAlpha, I.premultipliedAlpha), s.setFunc(I.depthFunc), s.setTest(I.depthTest), s.setMask(I.depthWrite), i.setMask(I.colorWrite);
    const $ = I.stencilWrite;
    a.setTest($), $ && (a.setMask(I.stencilWriteMask), a.setFunc(I.stencilFunc, I.stencilRef, I.stencilFuncMask), a.setOp(I.stencilFail, I.stencilZFail, I.stencilZPass)), bt(I.polygonOffset, I.polygonOffsetFactor, I.polygonOffsetUnits), I.alphaToCoverage === !0 ? Mt(r.SAMPLE_ALPHA_TO_COVERAGE) : ut(r.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function nt(I) {
    L !== I && (I ? r.frontFace(r.CW) : r.frontFace(r.CCW), L = I);
  }
  function et(I) {
    I !== 0 ? (Mt(r.CULL_FACE), I !== v && (I === 1 ? r.cullFace(r.BACK) : I === 2 ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : ut(r.CULL_FACE), v = I;
  }
  function at(I) {
    I !== T && (q && r.lineWidth(I), T = I);
  }
  function bt(I, mt, X) {
    I ? (Mt(r.POLYGON_OFFSET_FILL), (G !== mt || F !== X) && (r.polygonOffset(mt, X), G = mt, F = X)) : ut(r.POLYGON_OFFSET_FILL);
  }
  function _t(I) {
    I ? Mt(r.SCISSOR_TEST) : ut(r.SCISSOR_TEST);
  }
  function w(I) {
    I === void 0 && (I = r.TEXTURE0 + B - 1), W !== I && (r.activeTexture(I), W = I);
  }
  function M(I, mt, X) {
    X === void 0 && (W === null ? X = r.TEXTURE0 + B - 1 : X = W);
    let $ = lt[X];
    $ === void 0 && ($ = { type: void 0, texture: void 0 }, lt[X] = $), ($.type !== I || $.texture !== mt) && (W !== X && (r.activeTexture(X), W = X), r.bindTexture(I, mt || Q[I]), $.type = I, $.texture = mt);
  }
  function z() {
    const I = lt[W];
    I !== void 0 && I.type !== void 0 && (r.bindTexture(I.type, null), I.type = void 0, I.texture = void 0);
  }
  function Y() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function j() {
    try {
      r.compressedTexImage3D.apply(r, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function K() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function yt() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function ct() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function dt() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function Bt() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function tt() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function gt() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function wt() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function It(I) {
    Ft.equals(I) === !1 && (r.scissor(I.x, I.y, I.z, I.w), Ft.copy(I));
  }
  function St(I) {
    Ht.equals(I) === !1 && (r.viewport(I.x, I.y, I.z, I.w), Ht.copy(I));
  }
  function Vt(I, mt) {
    let X = l.get(mt);
    X === void 0 && (X = /* @__PURE__ */ new WeakMap(), l.set(mt, X));
    let $ = X.get(I);
    $ === void 0 && ($ = r.getUniformBlockIndex(mt, I.name), X.set(I, $));
  }
  function Ut(I, mt) {
    const $ = l.get(mt).get(I);
    o.get(mt) !== $ && (r.uniformBlockBinding(mt, $, I.__bindingPointIndex), o.set(mt, $));
  }
  function Zt() {
    r.disable(r.BLEND), r.disable(r.CULL_FACE), r.disable(r.DEPTH_TEST), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SCISSOR_TEST), r.disable(r.STENCIL_TEST), r.disable(r.SAMPLE_ALPHA_TO_COVERAGE), r.blendEquation(r.FUNC_ADD), r.blendFunc(r.ONE, r.ZERO), r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO), r.blendColor(0, 0, 0, 0), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(r.LESS), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(r.ALWAYS, 0, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), r.clearStencil(0), r.cullFace(r.BACK), r.frontFace(r.CCW), r.polygonOffset(0, 0), r.activeTexture(r.TEXTURE0), r.bindFramebuffer(r.FRAMEBUFFER, null), r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), c = {}, W = null, lt = {}, u = {}, h = /* @__PURE__ */ new WeakMap(), f = [], d = null, g = !1, _ = null, p = null, m = null, y = null, x = null, S = null, C = null, b = new Xt(0, 0, 0), A = 0, P = !1, L = null, v = null, T = null, G = null, F = null, Ft.set(0, 0, r.canvas.width, r.canvas.height), Ht.set(0, 0, r.canvas.width, r.canvas.height), i.reset(), s.reset(), a.reset();
  }
  return {
    buffers: {
      color: i,
      depth: s,
      stencil: a
    },
    enable: Mt,
    disable: ut,
    bindFramebuffer: Dt,
    drawBuffers: Pt,
    useProgram: Lt,
    setBlending: R,
    setMaterial: st,
    setFlipSided: nt,
    setCullFace: et,
    setLineWidth: at,
    setPolygonOffset: bt,
    setScissorTest: _t,
    activeTexture: w,
    bindTexture: M,
    unbindTexture: z,
    compressedTexImage2D: Y,
    compressedTexImage3D: j,
    texImage2D: gt,
    texImage3D: wt,
    updateUBOMapping: Vt,
    uniformBlockBinding: Ut,
    texStorage2D: Bt,
    texStorage3D: tt,
    texSubImage2D: K,
    texSubImage3D: yt,
    compressedTexSubImage2D: ct,
    compressedTexSubImage3D: dt,
    scissor: It,
    viewport: St,
    reset: Zt
  };
}
function _l(r, t, e, n) {
  const i = Rm(n);
  switch (e) {
    case 1021:
      return r * t;
    case 1024:
      return r * t;
    case 1025:
      return r * t * 2;
    case 1028:
      return r * t / i.components * i.byteLength;
    case 1029:
      return r * t / i.components * i.byteLength;
    case 1030:
      return r * t * 2 / i.components * i.byteLength;
    case 1031:
      return r * t * 2 / i.components * i.byteLength;
    case 1022:
      return r * t * 3 / i.components * i.byteLength;
    case 1023:
      return r * t * 4 / i.components * i.byteLength;
    case 1033:
      return r * t * 4 / i.components * i.byteLength;
    case 33776:
    case 33777:
      return Math.floor((r + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case 33778:
    case 33779:
      return Math.floor((r + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case 35841:
    case 35843:
      return Math.max(r, 16) * Math.max(t, 8) / 4;
    case 35840:
    case 35842:
      return Math.max(r, 8) * Math.max(t, 8) / 2;
    case 36196:
    case 37492:
      return Math.floor((r + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case 37496:
      return Math.floor((r + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case 37808:
      return Math.floor((r + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case 37809:
      return Math.floor((r + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case 37810:
      return Math.floor((r + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case 37811:
      return Math.floor((r + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case 37812:
      return Math.floor((r + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case 37813:
      return Math.floor((r + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case 37814:
      return Math.floor((r + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case 37815:
      return Math.floor((r + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case 37816:
      return Math.floor((r + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case 37817:
      return Math.floor((r + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case 37818:
      return Math.floor((r + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case 37819:
      return Math.floor((r + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case 37820:
      return Math.floor((r + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case 37821:
      return Math.floor((r + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case 36492:
    case 36494:
    case 36495:
      return Math.ceil(r / 4) * Math.ceil(t / 4) * 16;
    case 36283:
    case 36284:
      return Math.ceil(r / 4) * Math.ceil(t / 4) * 8;
    case 36285:
    case 36286:
      return Math.ceil(r / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${e} format.`
  );
}
function Rm(r) {
  switch (r) {
    case 1009:
    case 1010:
      return { byteLength: 1, components: 1 };
    case 1012:
    case 1011:
    case 1016:
      return { byteLength: 2, components: 1 };
    case 1017:
    case 1018:
      return { byteLength: 2, components: 4 };
    case 1014:
    case 1013:
    case 1015:
      return { byteLength: 4, components: 1 };
    case 35902:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${r}.`);
}
function Cm(r, t, e, n, i, s, a) {
  const o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new ot(), u = /* @__PURE__ */ new WeakMap();
  let h;
  const f = /* @__PURE__ */ new WeakMap();
  let d = !1;
  try {
    d = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(w, M) {
    return d ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(w, M)
    ) : Ms("canvas");
  }
  function _(w, M, z) {
    let Y = 1;
    const j = _t(w);
    if ((j.width > z || j.height > z) && (Y = z / Math.max(j.width, j.height)), Y < 1)
      if (typeof HTMLImageElement < "u" && w instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && w instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && w instanceof ImageBitmap || typeof VideoFrame < "u" && w instanceof VideoFrame) {
        const K = Math.floor(Y * j.width), yt = Math.floor(Y * j.height);
        h === void 0 && (h = g(K, yt));
        const ct = M ? g(K, yt) : h;
        return ct.width = K, ct.height = yt, ct.getContext("2d").drawImage(w, 0, 0, K, yt), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + j.width + "x" + j.height + ") to (" + K + "x" + yt + ")."), ct;
      } else
        return "data" in w && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + j.width + "x" + j.height + ")."), w;
    return w;
  }
  function p(w) {
    return w.generateMipmaps && w.minFilter !== 1003 && w.minFilter !== 1006;
  }
  function m(w) {
    r.generateMipmap(w);
  }
  function y(w, M, z, Y, j = !1) {
    if (w !== null) {
      if (r[w] !== void 0) return r[w];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + w + "'");
    }
    let K = M;
    if (M === r.RED && (z === r.FLOAT && (K = r.R32F), z === r.HALF_FLOAT && (K = r.R16F), z === r.UNSIGNED_BYTE && (K = r.R8)), M === r.RED_INTEGER && (z === r.UNSIGNED_BYTE && (K = r.R8UI), z === r.UNSIGNED_SHORT && (K = r.R16UI), z === r.UNSIGNED_INT && (K = r.R32UI), z === r.BYTE && (K = r.R8I), z === r.SHORT && (K = r.R16I), z === r.INT && (K = r.R32I)), M === r.RG && (z === r.FLOAT && (K = r.RG32F), z === r.HALF_FLOAT && (K = r.RG16F), z === r.UNSIGNED_BYTE && (K = r.RG8)), M === r.RG_INTEGER && (z === r.UNSIGNED_BYTE && (K = r.RG8UI), z === r.UNSIGNED_SHORT && (K = r.RG16UI), z === r.UNSIGNED_INT && (K = r.RG32UI), z === r.BYTE && (K = r.RG8I), z === r.SHORT && (K = r.RG16I), z === r.INT && (K = r.RG32I)), M === r.RGB_INTEGER && (z === r.UNSIGNED_BYTE && (K = r.RGB8UI), z === r.UNSIGNED_SHORT && (K = r.RGB16UI), z === r.UNSIGNED_INT && (K = r.RGB32UI), z === r.BYTE && (K = r.RGB8I), z === r.SHORT && (K = r.RGB16I), z === r.INT && (K = r.RGB32I)), M === r.RGBA_INTEGER && (z === r.UNSIGNED_BYTE && (K = r.RGBA8UI), z === r.UNSIGNED_SHORT && (K = r.RGBA16UI), z === r.UNSIGNED_INT && (K = r.RGBA32UI), z === r.BYTE && (K = r.RGBA8I), z === r.SHORT && (K = r.RGBA16I), z === r.INT && (K = r.RGBA32I)), M === r.RGB && z === r.UNSIGNED_INT_5_9_9_9_REV && (K = r.RGB9_E5), M === r.RGBA) {
      const yt = j ? vs : jt.getTransfer(Y);
      z === r.FLOAT && (K = r.RGBA32F), z === r.HALF_FLOAT && (K = r.RGBA16F), z === r.UNSIGNED_BYTE && (K = yt === se ? r.SRGB8_ALPHA8 : r.RGBA8), z === r.UNSIGNED_SHORT_4_4_4_4 && (K = r.RGBA4), z === r.UNSIGNED_SHORT_5_5_5_1 && (K = r.RGB5_A1);
    }
    return (K === r.R16F || K === r.R32F || K === r.RG16F || K === r.RG32F || K === r.RGBA16F || K === r.RGBA32F) && t.get("EXT_color_buffer_float"), K;
  }
  function x(w, M) {
    let z;
    return w ? M === null || M === 1014 || M === 1020 ? z = r.DEPTH24_STENCIL8 : M === 1015 ? z = r.DEPTH32F_STENCIL8 : M === 1012 && (z = r.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : M === null || M === 1014 || M === 1020 ? z = r.DEPTH_COMPONENT24 : M === 1015 ? z = r.DEPTH_COMPONENT32F : M === 1012 && (z = r.DEPTH_COMPONENT16), z;
  }
  function S(w, M) {
    return p(w) === !0 || w.isFramebufferTexture && w.minFilter !== 1003 && w.minFilter !== 1006 ? Math.log2(Math.max(M.width, M.height)) + 1 : w.mipmaps !== void 0 && w.mipmaps.length > 0 ? w.mipmaps.length : w.isCompressedTexture && Array.isArray(w.image) ? M.mipmaps.length : 1;
  }
  function C(w) {
    const M = w.target;
    M.removeEventListener("dispose", C), A(M), M.isVideoTexture && u.delete(M);
  }
  function b(w) {
    const M = w.target;
    M.removeEventListener("dispose", b), L(M);
  }
  function A(w) {
    const M = n.get(w);
    if (M.__webglInit === void 0) return;
    const z = w.source, Y = f.get(z);
    if (Y) {
      const j = Y[M.__cacheKey];
      j.usedTimes--, j.usedTimes === 0 && P(w), Object.keys(Y).length === 0 && f.delete(z);
    }
    n.remove(w);
  }
  function P(w) {
    const M = n.get(w);
    r.deleteTexture(M.__webglTexture);
    const z = w.source, Y = f.get(z);
    delete Y[M.__cacheKey], a.memory.textures--;
  }
  function L(w) {
    const M = n.get(w);
    if (w.depthTexture && w.depthTexture.dispose(), w.isWebGLCubeRenderTarget)
      for (let Y = 0; Y < 6; Y++) {
        if (Array.isArray(M.__webglFramebuffer[Y]))
          for (let j = 0; j < M.__webglFramebuffer[Y].length; j++) r.deleteFramebuffer(M.__webglFramebuffer[Y][j]);
        else
          r.deleteFramebuffer(M.__webglFramebuffer[Y]);
        M.__webglDepthbuffer && r.deleteRenderbuffer(M.__webglDepthbuffer[Y]);
      }
    else {
      if (Array.isArray(M.__webglFramebuffer))
        for (let Y = 0; Y < M.__webglFramebuffer.length; Y++) r.deleteFramebuffer(M.__webglFramebuffer[Y]);
      else
        r.deleteFramebuffer(M.__webglFramebuffer);
      if (M.__webglDepthbuffer && r.deleteRenderbuffer(M.__webglDepthbuffer), M.__webglMultisampledFramebuffer && r.deleteFramebuffer(M.__webglMultisampledFramebuffer), M.__webglColorRenderbuffer)
        for (let Y = 0; Y < M.__webglColorRenderbuffer.length; Y++)
          M.__webglColorRenderbuffer[Y] && r.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);
      M.__webglDepthRenderbuffer && r.deleteRenderbuffer(M.__webglDepthRenderbuffer);
    }
    const z = w.textures;
    for (let Y = 0, j = z.length; Y < j; Y++) {
      const K = n.get(z[Y]);
      K.__webglTexture && (r.deleteTexture(K.__webglTexture), a.memory.textures--), n.remove(z[Y]);
    }
    n.remove(w);
  }
  let v = 0;
  function T() {
    v = 0;
  }
  function G() {
    const w = v;
    return w >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + w + " texture units while this GPU supports only " + i.maxTextures), v += 1, w;
  }
  function F(w) {
    const M = [];
    return M.push(w.wrapS), M.push(w.wrapT), M.push(w.wrapR || 0), M.push(w.magFilter), M.push(w.minFilter), M.push(w.anisotropy), M.push(w.internalFormat), M.push(w.format), M.push(w.type), M.push(w.generateMipmaps), M.push(w.premultiplyAlpha), M.push(w.flipY), M.push(w.unpackAlignment), M.push(w.colorSpace), M.join();
  }
  function B(w, M) {
    const z = n.get(w);
    if (w.isVideoTexture && at(w), w.isRenderTargetTexture === !1 && w.version > 0 && z.__version !== w.version) {
      const Y = w.image;
      if (Y === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (Y.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Ht(z, w, M);
        return;
      }
    }
    e.bindTexture(r.TEXTURE_2D, z.__webglTexture, r.TEXTURE0 + M);
  }
  function q(w, M) {
    const z = n.get(w);
    if (w.version > 0 && z.__version !== w.version) {
      Ht(z, w, M);
      return;
    }
    e.bindTexture(r.TEXTURE_2D_ARRAY, z.__webglTexture, r.TEXTURE0 + M);
  }
  function O(w, M) {
    const z = n.get(w);
    if (w.version > 0 && z.__version !== w.version) {
      Ht(z, w, M);
      return;
    }
    e.bindTexture(r.TEXTURE_3D, z.__webglTexture, r.TEXTURE0 + M);
  }
  function Z(w, M) {
    const z = n.get(w);
    if (w.version > 0 && z.__version !== w.version) {
      V(z, w, M);
      return;
    }
    e.bindTexture(r.TEXTURE_CUBE_MAP, z.__webglTexture, r.TEXTURE0 + M);
  }
  const W = {
    1e3: r.REPEAT,
    1001: r.CLAMP_TO_EDGE,
    1002: r.MIRRORED_REPEAT
  }, lt = {
    1003: r.NEAREST,
    1004: r.NEAREST_MIPMAP_NEAREST,
    1005: r.NEAREST_MIPMAP_LINEAR,
    1006: r.LINEAR,
    1007: r.LINEAR_MIPMAP_NEAREST,
    1008: r.LINEAR_MIPMAP_LINEAR
  }, rt = {
    512: r.NEVER,
    519: r.ALWAYS,
    513: r.LESS,
    515: r.LEQUAL,
    514: r.EQUAL,
    518: r.GEQUAL,
    516: r.GREATER,
    517: r.NOTEQUAL
  };
  function ht(w, M) {
    if (M.type === 1015 && t.has("OES_texture_float_linear") === !1 && (M.magFilter === 1006 || M.magFilter === 1007 || M.magFilter === 1005 || M.magFilter === 1008 || M.minFilter === 1006 || M.minFilter === 1007 || M.minFilter === 1005 || M.minFilter === 1008) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), r.texParameteri(w, r.TEXTURE_WRAP_S, W[M.wrapS]), r.texParameteri(w, r.TEXTURE_WRAP_T, W[M.wrapT]), (w === r.TEXTURE_3D || w === r.TEXTURE_2D_ARRAY) && r.texParameteri(w, r.TEXTURE_WRAP_R, W[M.wrapR]), r.texParameteri(w, r.TEXTURE_MAG_FILTER, lt[M.magFilter]), r.texParameteri(w, r.TEXTURE_MIN_FILTER, lt[M.minFilter]), M.compareFunction && (r.texParameteri(w, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE), r.texParameteri(w, r.TEXTURE_COMPARE_FUNC, rt[M.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
      if (M.magFilter === 1003 || M.minFilter !== 1005 && M.minFilter !== 1008 || M.type === 1015 && t.has("OES_texture_float_linear") === !1) return;
      if (M.anisotropy > 1 || n.get(M).__currentAnisotropy) {
        const z = t.get("EXT_texture_filter_anisotropic");
        r.texParameterf(w, z.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(M.anisotropy, i.getMaxAnisotropy())), n.get(M).__currentAnisotropy = M.anisotropy;
      }
    }
  }
  function Ft(w, M) {
    let z = !1;
    w.__webglInit === void 0 && (w.__webglInit = !0, M.addEventListener("dispose", C));
    const Y = M.source;
    let j = f.get(Y);
    j === void 0 && (j = {}, f.set(Y, j));
    const K = F(M);
    if (K !== w.__cacheKey) {
      j[K] === void 0 && (j[K] = {
        texture: r.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, z = !0), j[K].usedTimes++;
      const yt = j[w.__cacheKey];
      yt !== void 0 && (j[w.__cacheKey].usedTimes--, yt.usedTimes === 0 && P(M)), w.__cacheKey = K, w.__webglTexture = j[K].texture;
    }
    return z;
  }
  function Ht(w, M, z) {
    let Y = r.TEXTURE_2D;
    (M.isDataArrayTexture || M.isCompressedArrayTexture) && (Y = r.TEXTURE_2D_ARRAY), M.isData3DTexture && (Y = r.TEXTURE_3D);
    const j = Ft(w, M), K = M.source;
    e.bindTexture(Y, w.__webglTexture, r.TEXTURE0 + z);
    const yt = n.get(K);
    if (K.version !== yt.__version || j === !0) {
      e.activeTexture(r.TEXTURE0 + z);
      const ct = jt.getPrimaries(jt.workingColorSpace), dt = M.colorSpace === Hn ? null : jt.getPrimaries(M.colorSpace), Bt = M.colorSpace === Hn || ct === dt ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, M.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, M.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, Bt);
      let tt = _(M.image, !1, i.maxTextureSize);
      tt = bt(M, tt);
      const gt = s.convert(M.format, M.colorSpace), wt = s.convert(M.type);
      let It = y(M.internalFormat, gt, wt, M.colorSpace, M.isVideoTexture);
      ht(Y, M);
      let St;
      const Vt = M.mipmaps, Ut = M.isVideoTexture !== !0, Zt = yt.__version === void 0 || j === !0, I = K.dataReady, mt = S(M, tt);
      if (M.isDepthTexture)
        It = x(M.format === 1027, M.type), Zt && (Ut ? e.texStorage2D(r.TEXTURE_2D, 1, It, tt.width, tt.height) : e.texImage2D(r.TEXTURE_2D, 0, It, tt.width, tt.height, 0, gt, wt, null));
      else if (M.isDataTexture)
        if (Vt.length > 0) {
          Ut && Zt && e.texStorage2D(r.TEXTURE_2D, mt, It, Vt[0].width, Vt[0].height);
          for (let X = 0, $ = Vt.length; X < $; X++)
            St = Vt[X], Ut ? I && e.texSubImage2D(r.TEXTURE_2D, X, 0, 0, St.width, St.height, gt, wt, St.data) : e.texImage2D(r.TEXTURE_2D, X, It, St.width, St.height, 0, gt, wt, St.data);
          M.generateMipmaps = !1;
        } else
          Ut ? (Zt && e.texStorage2D(r.TEXTURE_2D, mt, It, tt.width, tt.height), I && e.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, tt.width, tt.height, gt, wt, tt.data)) : e.texImage2D(r.TEXTURE_2D, 0, It, tt.width, tt.height, 0, gt, wt, tt.data);
      else if (M.isCompressedTexture)
        if (M.isCompressedArrayTexture) {
          Ut && Zt && e.texStorage3D(r.TEXTURE_2D_ARRAY, mt, It, Vt[0].width, Vt[0].height, tt.depth);
          for (let X = 0, $ = Vt.length; X < $; X++)
            if (St = Vt[X], M.format !== 1023)
              if (gt !== null)
                if (Ut) {
                  if (I)
                    if (M.layerUpdates.size > 0) {
                      const pt = _l(St.width, St.height, M.format, M.type);
                      for (const vt of M.layerUpdates) {
                        const Wt = St.data.subarray(
                          vt * pt / St.data.BYTES_PER_ELEMENT,
                          (vt + 1) * pt / St.data.BYTES_PER_ELEMENT
                        );
                        e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, X, 0, 0, vt, St.width, St.height, 1, gt, Wt, 0, 0);
                      }
                      M.clearLayerUpdates();
                    } else
                      e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, X, 0, 0, 0, St.width, St.height, tt.depth, gt, St.data, 0, 0);
                } else
                  e.compressedTexImage3D(r.TEXTURE_2D_ARRAY, X, It, St.width, St.height, tt.depth, 0, St.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              Ut ? I && e.texSubImage3D(r.TEXTURE_2D_ARRAY, X, 0, 0, 0, St.width, St.height, tt.depth, gt, wt, St.data) : e.texImage3D(r.TEXTURE_2D_ARRAY, X, It, St.width, St.height, tt.depth, 0, gt, wt, St.data);
        } else {
          Ut && Zt && e.texStorage2D(r.TEXTURE_2D, mt, It, Vt[0].width, Vt[0].height);
          for (let X = 0, $ = Vt.length; X < $; X++)
            St = Vt[X], M.format !== 1023 ? gt !== null ? Ut ? I && e.compressedTexSubImage2D(r.TEXTURE_2D, X, 0, 0, St.width, St.height, gt, St.data) : e.compressedTexImage2D(r.TEXTURE_2D, X, It, St.width, St.height, 0, St.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ut ? I && e.texSubImage2D(r.TEXTURE_2D, X, 0, 0, St.width, St.height, gt, wt, St.data) : e.texImage2D(r.TEXTURE_2D, X, It, St.width, St.height, 0, gt, wt, St.data);
        }
      else if (M.isDataArrayTexture)
        if (Ut) {
          if (Zt && e.texStorage3D(r.TEXTURE_2D_ARRAY, mt, It, tt.width, tt.height, tt.depth), I)
            if (M.layerUpdates.size > 0) {
              const X = _l(tt.width, tt.height, M.format, M.type);
              for (const $ of M.layerUpdates) {
                const pt = tt.data.subarray(
                  $ * X / tt.data.BYTES_PER_ELEMENT,
                  ($ + 1) * X / tt.data.BYTES_PER_ELEMENT
                );
                e.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, $, tt.width, tt.height, 1, gt, wt, pt);
              }
              M.clearLayerUpdates();
            } else
              e.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, tt.width, tt.height, tt.depth, gt, wt, tt.data);
        } else
          e.texImage3D(r.TEXTURE_2D_ARRAY, 0, It, tt.width, tt.height, tt.depth, 0, gt, wt, tt.data);
      else if (M.isData3DTexture)
        Ut ? (Zt && e.texStorage3D(r.TEXTURE_3D, mt, It, tt.width, tt.height, tt.depth), I && e.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, tt.width, tt.height, tt.depth, gt, wt, tt.data)) : e.texImage3D(r.TEXTURE_3D, 0, It, tt.width, tt.height, tt.depth, 0, gt, wt, tt.data);
      else if (M.isFramebufferTexture) {
        if (Zt)
          if (Ut)
            e.texStorage2D(r.TEXTURE_2D, mt, It, tt.width, tt.height);
          else {
            let X = tt.width, $ = tt.height;
            for (let pt = 0; pt < mt; pt++)
              e.texImage2D(r.TEXTURE_2D, pt, It, X, $, 0, gt, wt, null), X >>= 1, $ >>= 1;
          }
      } else if (Vt.length > 0) {
        if (Ut && Zt) {
          const X = _t(Vt[0]);
          e.texStorage2D(r.TEXTURE_2D, mt, It, X.width, X.height);
        }
        for (let X = 0, $ = Vt.length; X < $; X++)
          St = Vt[X], Ut ? I && e.texSubImage2D(r.TEXTURE_2D, X, 0, 0, gt, wt, St) : e.texImage2D(r.TEXTURE_2D, X, It, gt, wt, St);
        M.generateMipmaps = !1;
      } else if (Ut) {
        if (Zt) {
          const X = _t(tt);
          e.texStorage2D(r.TEXTURE_2D, mt, It, X.width, X.height);
        }
        I && e.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, gt, wt, tt);
      } else
        e.texImage2D(r.TEXTURE_2D, 0, It, gt, wt, tt);
      p(M) && m(Y), yt.__version = K.version, M.onUpdate && M.onUpdate(M);
    }
    w.__version = M.version;
  }
  function V(w, M, z) {
    if (M.image.length !== 6) return;
    const Y = Ft(w, M), j = M.source;
    e.bindTexture(r.TEXTURE_CUBE_MAP, w.__webglTexture, r.TEXTURE0 + z);
    const K = n.get(j);
    if (j.version !== K.__version || Y === !0) {
      e.activeTexture(r.TEXTURE0 + z);
      const yt = jt.getPrimaries(jt.workingColorSpace), ct = M.colorSpace === Hn ? null : jt.getPrimaries(M.colorSpace), dt = M.colorSpace === Hn || yt === ct ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, M.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, M.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, dt);
      const Bt = M.isCompressedTexture || M.image[0].isCompressedTexture, tt = M.image[0] && M.image[0].isDataTexture, gt = [];
      for (let $ = 0; $ < 6; $++)
        !Bt && !tt ? gt[$] = _(M.image[$], !0, i.maxCubemapSize) : gt[$] = tt ? M.image[$].image : M.image[$], gt[$] = bt(M, gt[$]);
      const wt = gt[0], It = s.convert(M.format, M.colorSpace), St = s.convert(M.type), Vt = y(M.internalFormat, It, St, M.colorSpace), Ut = M.isVideoTexture !== !0, Zt = K.__version === void 0 || Y === !0, I = j.dataReady;
      let mt = S(M, wt);
      ht(r.TEXTURE_CUBE_MAP, M);
      let X;
      if (Bt) {
        Ut && Zt && e.texStorage2D(r.TEXTURE_CUBE_MAP, mt, Vt, wt.width, wt.height);
        for (let $ = 0; $ < 6; $++) {
          X = gt[$].mipmaps;
          for (let pt = 0; pt < X.length; pt++) {
            const vt = X[pt];
            M.format !== 1023 ? It !== null ? Ut ? I && e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + $, pt, 0, 0, vt.width, vt.height, It, vt.data) : e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + $, pt, Vt, vt.width, vt.height, 0, vt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ut ? I && e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + $, pt, 0, 0, vt.width, vt.height, It, St, vt.data) : e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + $, pt, Vt, vt.width, vt.height, 0, It, St, vt.data);
          }
        }
      } else {
        if (X = M.mipmaps, Ut && Zt) {
          X.length > 0 && mt++;
          const $ = _t(gt[0]);
          e.texStorage2D(r.TEXTURE_CUBE_MAP, mt, Vt, $.width, $.height);
        }
        for (let $ = 0; $ < 6; $++)
          if (tt) {
            Ut ? I && e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, 0, 0, gt[$].width, gt[$].height, It, St, gt[$].data) : e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, Vt, gt[$].width, gt[$].height, 0, It, St, gt[$].data);
            for (let pt = 0; pt < X.length; pt++) {
              const Wt = X[pt].image[$].image;
              Ut ? I && e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + $, pt + 1, 0, 0, Wt.width, Wt.height, It, St, Wt.data) : e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + $, pt + 1, Vt, Wt.width, Wt.height, 0, It, St, Wt.data);
            }
          } else {
            Ut ? I && e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, 0, 0, It, St, gt[$]) : e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + $, 0, Vt, It, St, gt[$]);
            for (let pt = 0; pt < X.length; pt++) {
              const vt = X[pt];
              Ut ? I && e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + $, pt + 1, 0, 0, It, St, vt.image[$]) : e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + $, pt + 1, Vt, It, St, vt.image[$]);
            }
          }
      }
      p(M) && m(r.TEXTURE_CUBE_MAP), K.__version = j.version, M.onUpdate && M.onUpdate(M);
    }
    w.__version = M.version;
  }
  function Q(w, M, z, Y, j, K) {
    const yt = s.convert(z.format, z.colorSpace), ct = s.convert(z.type), dt = y(z.internalFormat, yt, ct, z.colorSpace);
    if (!n.get(M).__hasExternalTextures) {
      const tt = Math.max(1, M.width >> K), gt = Math.max(1, M.height >> K);
      j === r.TEXTURE_3D || j === r.TEXTURE_2D_ARRAY ? e.texImage3D(j, K, dt, tt, gt, M.depth, 0, yt, ct, null) : e.texImage2D(j, K, dt, tt, gt, 0, yt, ct, null);
    }
    e.bindFramebuffer(r.FRAMEBUFFER, w), et(M) ? o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, Y, j, n.get(z).__webglTexture, 0, nt(M)) : (j === r.TEXTURE_2D || j >= r.TEXTURE_CUBE_MAP_POSITIVE_X && j <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, Y, j, n.get(z).__webglTexture, K), e.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function Mt(w, M, z) {
    if (r.bindRenderbuffer(r.RENDERBUFFER, w), M.depthBuffer) {
      const Y = M.depthTexture, j = Y && Y.isDepthTexture ? Y.type : null, K = x(M.stencilBuffer, j), yt = M.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, ct = nt(M);
      et(M) ? o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, ct, K, M.width, M.height) : z ? r.renderbufferStorageMultisample(r.RENDERBUFFER, ct, K, M.width, M.height) : r.renderbufferStorage(r.RENDERBUFFER, K, M.width, M.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, yt, r.RENDERBUFFER, w);
    } else {
      const Y = M.textures;
      for (let j = 0; j < Y.length; j++) {
        const K = Y[j], yt = s.convert(K.format, K.colorSpace), ct = s.convert(K.type), dt = y(K.internalFormat, yt, ct, K.colorSpace), Bt = nt(M);
        z && et(M) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, Bt, dt, M.width, M.height) : et(M) ? o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, Bt, dt, M.width, M.height) : r.renderbufferStorage(r.RENDERBUFFER, dt, M.width, M.height);
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null);
  }
  function ut(w, M) {
    if (M && M.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(r.FRAMEBUFFER, w), !(M.depthTexture && M.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(M.depthTexture).__webglTexture || M.depthTexture.image.width !== M.width || M.depthTexture.image.height !== M.height) && (M.depthTexture.image.width = M.width, M.depthTexture.image.height = M.height, M.depthTexture.needsUpdate = !0), B(M.depthTexture, 0);
    const Y = n.get(M.depthTexture).__webglTexture, j = nt(M);
    if (M.depthTexture.format === 1026)
      et(M) ? o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, Y, 0, j) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, Y, 0);
    else if (M.depthTexture.format === 1027)
      et(M) ? o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, Y, 0, j) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, Y, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Dt(w) {
    const M = n.get(w), z = w.isWebGLCubeRenderTarget === !0;
    if (M.__boundDepthTexture !== w.depthTexture) {
      const Y = w.depthTexture;
      if (M.__depthDisposeCallback && M.__depthDisposeCallback(), Y) {
        const j = () => {
          delete M.__boundDepthTexture, delete M.__depthDisposeCallback, Y.removeEventListener("dispose", j);
        };
        Y.addEventListener("dispose", j), M.__depthDisposeCallback = j;
      }
      M.__boundDepthTexture = Y;
    }
    if (w.depthTexture && !M.__autoAllocateDepthBuffer) {
      if (z) throw new Error("target.depthTexture not supported in Cube render targets");
      ut(M.__webglFramebuffer, w);
    } else if (z) {
      M.__webglDepthbuffer = [];
      for (let Y = 0; Y < 6; Y++)
        if (e.bindFramebuffer(r.FRAMEBUFFER, M.__webglFramebuffer[Y]), M.__webglDepthbuffer[Y] === void 0)
          M.__webglDepthbuffer[Y] = r.createRenderbuffer(), Mt(M.__webglDepthbuffer[Y], w, !1);
        else {
          const j = w.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, K = M.__webglDepthbuffer[Y];
          r.bindRenderbuffer(r.RENDERBUFFER, K), r.framebufferRenderbuffer(r.FRAMEBUFFER, j, r.RENDERBUFFER, K);
        }
    } else if (e.bindFramebuffer(r.FRAMEBUFFER, M.__webglFramebuffer), M.__webglDepthbuffer === void 0)
      M.__webglDepthbuffer = r.createRenderbuffer(), Mt(M.__webglDepthbuffer, w, !1);
    else {
      const Y = w.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, j = M.__webglDepthbuffer;
      r.bindRenderbuffer(r.RENDERBUFFER, j), r.framebufferRenderbuffer(r.FRAMEBUFFER, Y, r.RENDERBUFFER, j);
    }
    e.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function Pt(w, M, z) {
    const Y = n.get(w);
    M !== void 0 && Q(Y.__webglFramebuffer, w, w.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, 0), z !== void 0 && Dt(w);
  }
  function Lt(w) {
    const M = w.texture, z = n.get(w), Y = n.get(M);
    w.addEventListener("dispose", b);
    const j = w.textures, K = w.isWebGLCubeRenderTarget === !0, yt = j.length > 1;
    if (yt || (Y.__webglTexture === void 0 && (Y.__webglTexture = r.createTexture()), Y.__version = M.version, a.memory.textures++), K) {
      z.__webglFramebuffer = [];
      for (let ct = 0; ct < 6; ct++)
        if (M.mipmaps && M.mipmaps.length > 0) {
          z.__webglFramebuffer[ct] = [];
          for (let dt = 0; dt < M.mipmaps.length; dt++)
            z.__webglFramebuffer[ct][dt] = r.createFramebuffer();
        } else
          z.__webglFramebuffer[ct] = r.createFramebuffer();
    } else {
      if (M.mipmaps && M.mipmaps.length > 0) {
        z.__webglFramebuffer = [];
        for (let ct = 0; ct < M.mipmaps.length; ct++)
          z.__webglFramebuffer[ct] = r.createFramebuffer();
      } else
        z.__webglFramebuffer = r.createFramebuffer();
      if (yt)
        for (let ct = 0, dt = j.length; ct < dt; ct++) {
          const Bt = n.get(j[ct]);
          Bt.__webglTexture === void 0 && (Bt.__webglTexture = r.createTexture(), a.memory.textures++);
        }
      if (w.samples > 0 && et(w) === !1) {
        z.__webglMultisampledFramebuffer = r.createFramebuffer(), z.__webglColorRenderbuffer = [], e.bindFramebuffer(r.FRAMEBUFFER, z.__webglMultisampledFramebuffer);
        for (let ct = 0; ct < j.length; ct++) {
          const dt = j[ct];
          z.__webglColorRenderbuffer[ct] = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, z.__webglColorRenderbuffer[ct]);
          const Bt = s.convert(dt.format, dt.colorSpace), tt = s.convert(dt.type), gt = y(dt.internalFormat, Bt, tt, dt.colorSpace, w.isXRRenderTarget === !0), wt = nt(w);
          r.renderbufferStorageMultisample(r.RENDERBUFFER, wt, gt, w.width, w.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ct, r.RENDERBUFFER, z.__webglColorRenderbuffer[ct]);
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null), w.depthBuffer && (z.__webglDepthRenderbuffer = r.createRenderbuffer(), Mt(z.__webglDepthRenderbuffer, w, !0)), e.bindFramebuffer(r.FRAMEBUFFER, null);
      }
    }
    if (K) {
      e.bindTexture(r.TEXTURE_CUBE_MAP, Y.__webglTexture), ht(r.TEXTURE_CUBE_MAP, M);
      for (let ct = 0; ct < 6; ct++)
        if (M.mipmaps && M.mipmaps.length > 0)
          for (let dt = 0; dt < M.mipmaps.length; dt++)
            Q(z.__webglFramebuffer[ct][dt], w, M, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + ct, dt);
        else
          Q(z.__webglFramebuffer[ct], w, M, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + ct, 0);
      p(M) && m(r.TEXTURE_CUBE_MAP), e.unbindTexture();
    } else if (yt) {
      for (let ct = 0, dt = j.length; ct < dt; ct++) {
        const Bt = j[ct], tt = n.get(Bt);
        e.bindTexture(r.TEXTURE_2D, tt.__webglTexture), ht(r.TEXTURE_2D, Bt), Q(z.__webglFramebuffer, w, Bt, r.COLOR_ATTACHMENT0 + ct, r.TEXTURE_2D, 0), p(Bt) && m(r.TEXTURE_2D);
      }
      e.unbindTexture();
    } else {
      let ct = r.TEXTURE_2D;
      if ((w.isWebGL3DRenderTarget || w.isWebGLArrayRenderTarget) && (ct = w.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY), e.bindTexture(ct, Y.__webglTexture), ht(ct, M), M.mipmaps && M.mipmaps.length > 0)
        for (let dt = 0; dt < M.mipmaps.length; dt++)
          Q(z.__webglFramebuffer[dt], w, M, r.COLOR_ATTACHMENT0, ct, dt);
      else
        Q(z.__webglFramebuffer, w, M, r.COLOR_ATTACHMENT0, ct, 0);
      p(M) && m(ct), e.unbindTexture();
    }
    w.depthBuffer && Dt(w);
  }
  function zt(w) {
    const M = w.textures;
    for (let z = 0, Y = M.length; z < Y; z++) {
      const j = M[z];
      if (p(j)) {
        const K = w.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D, yt = n.get(j).__webglTexture;
        e.bindTexture(K, yt), m(K), e.unbindTexture();
      }
    }
  }
  const J = [], R = [];
  function st(w) {
    if (w.samples > 0) {
      if (et(w) === !1) {
        const M = w.textures, z = w.width, Y = w.height;
        let j = r.COLOR_BUFFER_BIT;
        const K = w.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, yt = n.get(w), ct = M.length > 1;
        if (ct)
          for (let dt = 0; dt < M.length; dt++)
            e.bindFramebuffer(r.FRAMEBUFFER, yt.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + dt, r.RENDERBUFFER, null), e.bindFramebuffer(r.FRAMEBUFFER, yt.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + dt, r.TEXTURE_2D, null, 0);
        e.bindFramebuffer(r.READ_FRAMEBUFFER, yt.__webglMultisampledFramebuffer), e.bindFramebuffer(r.DRAW_FRAMEBUFFER, yt.__webglFramebuffer);
        for (let dt = 0; dt < M.length; dt++) {
          if (w.resolveDepthBuffer && (w.depthBuffer && (j |= r.DEPTH_BUFFER_BIT), w.stencilBuffer && w.resolveStencilBuffer && (j |= r.STENCIL_BUFFER_BIT)), ct) {
            r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, yt.__webglColorRenderbuffer[dt]);
            const Bt = n.get(M[dt]).__webglTexture;
            r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, Bt, 0);
          }
          r.blitFramebuffer(0, 0, z, Y, 0, 0, z, Y, j, r.NEAREST), l === !0 && (J.length = 0, R.length = 0, J.push(r.COLOR_ATTACHMENT0 + dt), w.depthBuffer && w.resolveDepthBuffer === !1 && (J.push(K), R.push(K), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, R)), r.invalidateFramebuffer(r.READ_FRAMEBUFFER, J));
        }
        if (e.bindFramebuffer(r.READ_FRAMEBUFFER, null), e.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), ct)
          for (let dt = 0; dt < M.length; dt++) {
            e.bindFramebuffer(r.FRAMEBUFFER, yt.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + dt, r.RENDERBUFFER, yt.__webglColorRenderbuffer[dt]);
            const Bt = n.get(M[dt]).__webglTexture;
            e.bindFramebuffer(r.FRAMEBUFFER, yt.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + dt, r.TEXTURE_2D, Bt, 0);
          }
        e.bindFramebuffer(r.DRAW_FRAMEBUFFER, yt.__webglMultisampledFramebuffer);
      } else if (w.depthBuffer && w.resolveDepthBuffer === !1 && l) {
        const M = w.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT;
        r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [M]);
      }
    }
  }
  function nt(w) {
    return Math.min(i.maxSamples, w.samples);
  }
  function et(w) {
    const M = n.get(w);
    return w.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && M.__useRenderToTexture !== !1;
  }
  function at(w) {
    const M = a.render.frame;
    u.get(w) !== M && (u.set(w, M), w.update());
  }
  function bt(w, M) {
    const z = w.colorSpace, Y = w.format, j = w.type;
    return w.isCompressedTexture === !0 || w.isVideoTexture === !0 || z !== Qn && z !== Hn && (jt.getTransfer(z) === se ? (Y !== 1023 || j !== 1009) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", z)), M;
  }
  function _t(w) {
    return typeof HTMLImageElement < "u" && w instanceof HTMLImageElement ? (c.width = w.naturalWidth || w.width, c.height = w.naturalHeight || w.height) : typeof VideoFrame < "u" && w instanceof VideoFrame ? (c.width = w.displayWidth, c.height = w.displayHeight) : (c.width = w.width, c.height = w.height), c;
  }
  this.allocateTextureUnit = G, this.resetTextureUnits = T, this.setTexture2D = B, this.setTexture2DArray = q, this.setTexture3D = O, this.setTextureCube = Z, this.rebindTextures = Pt, this.setupRenderTarget = Lt, this.updateRenderTargetMipmap = zt, this.updateMultisampleRenderTarget = st, this.setupDepthRenderbuffer = Dt, this.setupFrameBufferTexture = Q, this.useMultisampledRTT = et;
}
function Pm(r, t) {
  function e(n, i = Hn) {
    let s;
    const a = jt.getTransfer(i);
    if (n === 1009) return r.UNSIGNED_BYTE;
    if (n === 1017) return r.UNSIGNED_SHORT_4_4_4_4;
    if (n === 1018) return r.UNSIGNED_SHORT_5_5_5_1;
    if (n === 35902) return r.UNSIGNED_INT_5_9_9_9_REV;
    if (n === 1010) return r.BYTE;
    if (n === 1011) return r.SHORT;
    if (n === 1012) return r.UNSIGNED_SHORT;
    if (n === 1013) return r.INT;
    if (n === 1014) return r.UNSIGNED_INT;
    if (n === 1015) return r.FLOAT;
    if (n === 1016) return r.HALF_FLOAT;
    if (n === 1021) return r.ALPHA;
    if (n === 1022) return r.RGB;
    if (n === 1023) return r.RGBA;
    if (n === 1024) return r.LUMINANCE;
    if (n === 1025) return r.LUMINANCE_ALPHA;
    if (n === 1026) return r.DEPTH_COMPONENT;
    if (n === 1027) return r.DEPTH_STENCIL;
    if (n === 1028) return r.RED;
    if (n === 1029) return r.RED_INTEGER;
    if (n === 1030) return r.RG;
    if (n === 1031) return r.RG_INTEGER;
    if (n === 1033) return r.RGBA_INTEGER;
    if (n === 33776 || n === 33777 || n === 33778 || n === 33779)
      if (a === se)
        if (s = t.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (n === 33776) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === 33777) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === 33778) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === 33779) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (s = t.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (n === 33776) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === 33777) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === 33778) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === 33779) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === 35840 || n === 35841 || n === 35842 || n === 35843)
      if (s = t.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (n === 35840) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === 35841) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === 35842) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === 35843) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === 36196 || n === 37492 || n === 37496)
      if (s = t.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (n === 36196 || n === 37492) return a === se ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === 37496) return a === se ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821)
      if (s = t.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (n === 37808) return a === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === 37809) return a === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === 37810) return a === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === 37811) return a === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === 37812) return a === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === 37813) return a === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === 37814) return a === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === 37815) return a === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === 37816) return a === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === 37817) return a === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === 37818) return a === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === 37819) return a === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === 37820) return a === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === 37821) return a === se ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === 36492 || n === 36494 || n === 36495)
      if (s = t.get("EXT_texture_compression_bptc"), s !== null) {
        if (n === 36492) return a === se ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === 36494) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === 36495) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === 36283 || n === 36284 || n === 36285 || n === 36286)
      if (s = t.get("EXT_texture_compression_rgtc"), s !== null) {
        if (n === 36492) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === 36284) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === 36285) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === 36286) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === 1020 ? r.UNSIGNED_INT_24_8 : r[n] !== void 0 ? r[n] : null;
  }
  return { convert: e };
}
class Dm extends Ze {
  constructor(t = []) {
    super(), this.isArrayCamera = !0, this.cameras = t;
  }
}
class xn extends Ce {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Lm = { type: "move" };
class ma {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new xn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new xn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new D(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new D()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new xn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new D(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new D()), this._grip;
  }
  dispatchEvent(t) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this;
  }
  connect(t) {
    if (t && t.hand) {
      const e = this._hand;
      if (e)
        for (const n of t.hand.values())
          this._getHandJoint(e, n);
    }
    return this.dispatchEvent({ type: "connected", data: t }), this;
  }
  disconnect(t) {
    return this.dispatchEvent({ type: "disconnected", data: t }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(t, e, n) {
    let i = null, s = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (t && e.session.visibilityState !== "visible-blurred") {
      if (c && t.hand) {
        a = !0;
        for (const _ of t.hand.values()) {
          const p = e.getJointPose(_, n), m = this._getHandJoint(c, _);
          p !== null && (m.matrix.fromArray(p.transform.matrix), m.matrix.decompose(m.position, m.rotation, m.scale), m.matrixWorldNeedsUpdate = !0, m.jointRadius = p.radius), m.visible = p !== null;
        }
        const u = c.joints["index-finger-tip"], h = c.joints["thumb-tip"], f = u.position.distanceTo(h.position), d = 0.02, g = 5e-3;
        c.inputState.pinching && f > d + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: t.handedness,
          target: this
        })) : !c.inputState.pinching && f <= d - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: t.handedness,
          target: this
        }));
      } else
        l !== null && t.gripSpace && (s = e.getPose(t.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
      o !== null && (i = e.getPose(t.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Lm)));
    }
    return o !== null && (o.visible = i !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = a !== null), this;
  }
  // private method
  _getHandJoint(t, e) {
    if (t.joints[e.jointName] === void 0) {
      const n = new xn();
      n.matrixAutoUpdate = !1, n.visible = !1, t.joints[e.jointName] = n, t.add(n);
    }
    return t.joints[e.jointName];
  }
}
const Im = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Um = `
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

}`;
class Nm {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(t, e, n) {
    if (this.texture === null) {
      const i = new Ue(), s = t.properties.get(i);
      s.__webglTexture = e.texture, (e.depthNear != n.depthNear || e.depthFar != n.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = i;
    }
  }
  getMesh(t) {
    if (this.texture !== null && this.mesh === null) {
      const e = t.cameras[0].viewport, n = new Zn({
        vertexShader: Im,
        fragmentShader: Um,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: e.z },
          depthHeight: { value: e.w }
        }
      });
      this.mesh = new ae(new zr(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class Fm extends nr {
  constructor(t, e) {
    super();
    const n = this;
    let i = null, s = 1, a = null, o = "local-floor", l = 1, c = null, u = null, h = null, f = null, d = null, g = null;
    const _ = new Nm(), p = e.getContextAttributes();
    let m = null, y = null;
    const x = [], S = [], C = new ot();
    let b = null;
    const A = new Ze();
    A.layers.enable(1), A.viewport = new te();
    const P = new Ze();
    P.layers.enable(2), P.viewport = new te();
    const L = [A, P], v = new Dm();
    v.layers.enable(1), v.layers.enable(2);
    let T = null, G = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(V) {
      let Q = x[V];
      return Q === void 0 && (Q = new ma(), x[V] = Q), Q.getTargetRaySpace();
    }, this.getControllerGrip = function(V) {
      let Q = x[V];
      return Q === void 0 && (Q = new ma(), x[V] = Q), Q.getGripSpace();
    }, this.getHand = function(V) {
      let Q = x[V];
      return Q === void 0 && (Q = new ma(), x[V] = Q), Q.getHandSpace();
    };
    function F(V) {
      const Q = S.indexOf(V.inputSource);
      if (Q === -1)
        return;
      const Mt = x[Q];
      Mt !== void 0 && (Mt.update(V.inputSource, V.frame, c || a), Mt.dispatchEvent({ type: V.type, data: V.inputSource }));
    }
    function B() {
      i.removeEventListener("select", F), i.removeEventListener("selectstart", F), i.removeEventListener("selectend", F), i.removeEventListener("squeeze", F), i.removeEventListener("squeezestart", F), i.removeEventListener("squeezeend", F), i.removeEventListener("end", B), i.removeEventListener("inputsourceschange", q);
      for (let V = 0; V < x.length; V++) {
        const Q = S[V];
        Q !== null && (S[V] = null, x[V].disconnect(Q));
      }
      T = null, G = null, _.reset(), t.setRenderTarget(m), d = null, f = null, h = null, i = null, y = null, Ht.stop(), n.isPresenting = !1, t.setPixelRatio(b), t.setSize(C.width, C.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(V) {
      s = V, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(V) {
      o = V, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(V) {
      c = V;
    }, this.getBaseLayer = function() {
      return f !== null ? f : d;
    }, this.getBinding = function() {
      return h;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(V) {
      if (i = V, i !== null) {
        if (m = t.getRenderTarget(), i.addEventListener("select", F), i.addEventListener("selectstart", F), i.addEventListener("selectend", F), i.addEventListener("squeeze", F), i.addEventListener("squeezestart", F), i.addEventListener("squeezeend", F), i.addEventListener("end", B), i.addEventListener("inputsourceschange", q), p.xrCompatible !== !0 && await e.makeXRCompatible(), b = t.getPixelRatio(), t.getSize(C), i.renderState.layers === void 0) {
          const Q = {
            antialias: p.antialias,
            alpha: !0,
            depth: p.depth,
            stencil: p.stencil,
            framebufferScaleFactor: s
          };
          d = new XRWebGLLayer(i, e, Q), i.updateRenderState({ baseLayer: d }), t.setPixelRatio(1), t.setSize(d.framebufferWidth, d.framebufferHeight, !1), y = new vi(
            d.framebufferWidth,
            d.framebufferHeight,
            {
              format: 1023,
              type: 1009,
              colorSpace: t.outputColorSpace,
              stencilBuffer: p.stencil
            }
          );
        } else {
          let Q = null, Mt = null, ut = null;
          p.depth && (ut = p.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, Q = p.stencil ? 1027 : 1026, Mt = p.stencil ? 1020 : 1014);
          const Dt = {
            colorFormat: e.RGBA8,
            depthFormat: ut,
            scaleFactor: s
          };
          h = new XRWebGLBinding(i, e), f = h.createProjectionLayer(Dt), i.updateRenderState({ layers: [f] }), t.setPixelRatio(1), t.setSize(f.textureWidth, f.textureHeight, !1), y = new vi(
            f.textureWidth,
            f.textureHeight,
            {
              format: 1023,
              type: 1009,
              depthTexture: new oc(f.textureWidth, f.textureHeight, Mt, void 0, void 0, void 0, void 0, void 0, void 0, Q),
              stencilBuffer: p.stencil,
              colorSpace: t.outputColorSpace,
              samples: p.antialias ? 4 : 0,
              resolveDepthBuffer: f.ignoreDepthValues === !1
            }
          );
        }
        y.isXRRenderTarget = !0, this.setFoveation(l), c = null, a = await i.requestReferenceSpace(o), Ht.setContext(i), Ht.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return _.getDepthTexture();
    };
    function q(V) {
      for (let Q = 0; Q < V.removed.length; Q++) {
        const Mt = V.removed[Q], ut = S.indexOf(Mt);
        ut >= 0 && (S[ut] = null, x[ut].disconnect(Mt));
      }
      for (let Q = 0; Q < V.added.length; Q++) {
        const Mt = V.added[Q];
        let ut = S.indexOf(Mt);
        if (ut === -1) {
          for (let Pt = 0; Pt < x.length; Pt++)
            if (Pt >= S.length) {
              S.push(Mt), ut = Pt;
              break;
            } else if (S[Pt] === null) {
              S[Pt] = Mt, ut = Pt;
              break;
            }
          if (ut === -1) break;
        }
        const Dt = x[ut];
        Dt && Dt.connect(Mt);
      }
    }
    const O = new D(), Z = new D();
    function W(V, Q, Mt) {
      O.setFromMatrixPosition(Q.matrixWorld), Z.setFromMatrixPosition(Mt.matrixWorld);
      const ut = O.distanceTo(Z), Dt = Q.projectionMatrix.elements, Pt = Mt.projectionMatrix.elements, Lt = Dt[14] / (Dt[10] - 1), zt = Dt[14] / (Dt[10] + 1), J = (Dt[9] + 1) / Dt[5], R = (Dt[9] - 1) / Dt[5], st = (Dt[8] - 1) / Dt[0], nt = (Pt[8] + 1) / Pt[0], et = Lt * st, at = Lt * nt, bt = ut / (-st + nt), _t = bt * -st;
      if (Q.matrixWorld.decompose(V.position, V.quaternion, V.scale), V.translateX(_t), V.translateZ(bt), V.matrixWorld.compose(V.position, V.quaternion, V.scale), V.matrixWorldInverse.copy(V.matrixWorld).invert(), Dt[10] === -1)
        V.projectionMatrix.copy(Q.projectionMatrix), V.projectionMatrixInverse.copy(Q.projectionMatrixInverse);
      else {
        const w = Lt + bt, M = zt + bt, z = et - _t, Y = at + (ut - _t), j = J * zt / M * w, K = R * zt / M * w;
        V.projectionMatrix.makePerspective(z, Y, j, K, w, M), V.projectionMatrixInverse.copy(V.projectionMatrix).invert();
      }
    }
    function lt(V, Q) {
      Q === null ? V.matrixWorld.copy(V.matrix) : V.matrixWorld.multiplyMatrices(Q.matrixWorld, V.matrix), V.matrixWorldInverse.copy(V.matrixWorld).invert();
    }
    this.updateCamera = function(V) {
      if (i === null) return;
      let Q = V.near, Mt = V.far;
      _.texture !== null && (_.depthNear > 0 && (Q = _.depthNear), _.depthFar > 0 && (Mt = _.depthFar)), v.near = P.near = A.near = Q, v.far = P.far = A.far = Mt, (T !== v.near || G !== v.far) && (i.updateRenderState({
        depthNear: v.near,
        depthFar: v.far
      }), T = v.near, G = v.far);
      const ut = V.parent, Dt = v.cameras;
      lt(v, ut);
      for (let Pt = 0; Pt < Dt.length; Pt++)
        lt(Dt[Pt], ut);
      Dt.length === 2 ? W(v, A, P) : v.projectionMatrix.copy(A.projectionMatrix), rt(V, v, ut);
    };
    function rt(V, Q, Mt) {
      Mt === null ? V.matrix.copy(Q.matrixWorld) : (V.matrix.copy(Mt.matrixWorld), V.matrix.invert(), V.matrix.multiply(Q.matrixWorld)), V.matrix.decompose(V.position, V.quaternion, V.scale), V.updateMatrixWorld(!0), V.projectionMatrix.copy(Q.projectionMatrix), V.projectionMatrixInverse.copy(Q.projectionMatrixInverse), V.isPerspectiveCamera && (V.fov = Pa * 2 * Math.atan(1 / V.projectionMatrix.elements[5]), V.zoom = 1);
    }
    this.getCamera = function() {
      return v;
    }, this.getFoveation = function() {
      if (!(f === null && d === null))
        return l;
    }, this.setFoveation = function(V) {
      l = V, f !== null && (f.fixedFoveation = V), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = V);
    }, this.hasDepthSensing = function() {
      return _.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return _.getMesh(v);
    };
    let ht = null;
    function Ft(V, Q) {
      if (u = Q.getViewerPose(c || a), g = Q, u !== null) {
        const Mt = u.views;
        d !== null && (t.setRenderTargetFramebuffer(y, d.framebuffer), t.setRenderTarget(y));
        let ut = !1;
        Mt.length !== v.cameras.length && (v.cameras.length = 0, ut = !0);
        for (let Pt = 0; Pt < Mt.length; Pt++) {
          const Lt = Mt[Pt];
          let zt = null;
          if (d !== null)
            zt = d.getViewport(Lt);
          else {
            const R = h.getViewSubImage(f, Lt);
            zt = R.viewport, Pt === 0 && (t.setRenderTargetTextures(
              y,
              R.colorTexture,
              f.ignoreDepthValues ? void 0 : R.depthStencilTexture
            ), t.setRenderTarget(y));
          }
          let J = L[Pt];
          J === void 0 && (J = new Ze(), J.layers.enable(Pt), J.viewport = new te(), L[Pt] = J), J.matrix.fromArray(Lt.transform.matrix), J.matrix.decompose(J.position, J.quaternion, J.scale), J.projectionMatrix.fromArray(Lt.projectionMatrix), J.projectionMatrixInverse.copy(J.projectionMatrix).invert(), J.viewport.set(zt.x, zt.y, zt.width, zt.height), Pt === 0 && (v.matrix.copy(J.matrix), v.matrix.decompose(v.position, v.quaternion, v.scale)), ut === !0 && v.cameras.push(J);
        }
        const Dt = i.enabledFeatures;
        if (Dt && Dt.includes("depth-sensing")) {
          const Pt = h.getDepthInformation(Mt[0]);
          Pt && Pt.isValid && Pt.texture && _.init(t, Pt, i.renderState);
        }
      }
      for (let Mt = 0; Mt < x.length; Mt++) {
        const ut = S[Mt], Dt = x[Mt];
        ut !== null && Dt !== void 0 && Dt.update(ut, Q, c || a);
      }
      ht && ht(V, Q), Q.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: Q }), g = null;
    }
    const Ht = new sc();
    Ht.setAnimationLoop(Ft), this.setAnimationLoop = function(V) {
      ht = V;
    }, this.dispose = function() {
    };
  }
}
const ai = /* @__PURE__ */ new yn(), Om = /* @__PURE__ */ new ee();
function Bm(r, t) {
  function e(p, m) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), m.value.copy(p.matrix);
  }
  function n(p, m) {
    m.color.getRGB(p.fogColor.value, nc(r)), m.isFog ? (p.fogNear.value = m.near, p.fogFar.value = m.far) : m.isFogExp2 && (p.fogDensity.value = m.density);
  }
  function i(p, m, y, x, S) {
    m.isMeshBasicMaterial || m.isMeshLambertMaterial ? s(p, m) : m.isMeshToonMaterial ? (s(p, m), h(p, m)) : m.isMeshPhongMaterial ? (s(p, m), u(p, m)) : m.isMeshStandardMaterial ? (s(p, m), f(p, m), m.isMeshPhysicalMaterial && d(p, m, S)) : m.isMeshMatcapMaterial ? (s(p, m), g(p, m)) : m.isMeshDepthMaterial ? s(p, m) : m.isMeshDistanceMaterial ? (s(p, m), _(p, m)) : m.isMeshNormalMaterial ? s(p, m) : m.isLineBasicMaterial ? (a(p, m), m.isLineDashedMaterial && o(p, m)) : m.isPointsMaterial ? l(p, m, y, x) : m.isSpriteMaterial ? c(p, m) : m.isShadowMaterial ? (p.color.value.copy(m.color), p.opacity.value = m.opacity) : m.isShaderMaterial && (m.uniformsNeedUpdate = !1);
  }
  function s(p, m) {
    p.opacity.value = m.opacity, m.color && p.diffuse.value.copy(m.color), m.emissive && p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity), m.map && (p.map.value = m.map, e(m.map, p.mapTransform)), m.alphaMap && (p.alphaMap.value = m.alphaMap, e(m.alphaMap, p.alphaMapTransform)), m.bumpMap && (p.bumpMap.value = m.bumpMap, e(m.bumpMap, p.bumpMapTransform), p.bumpScale.value = m.bumpScale, m.side === 1 && (p.bumpScale.value *= -1)), m.normalMap && (p.normalMap.value = m.normalMap, e(m.normalMap, p.normalMapTransform), p.normalScale.value.copy(m.normalScale), m.side === 1 && p.normalScale.value.negate()), m.displacementMap && (p.displacementMap.value = m.displacementMap, e(m.displacementMap, p.displacementMapTransform), p.displacementScale.value = m.displacementScale, p.displacementBias.value = m.displacementBias), m.emissiveMap && (p.emissiveMap.value = m.emissiveMap, e(m.emissiveMap, p.emissiveMapTransform)), m.specularMap && (p.specularMap.value = m.specularMap, e(m.specularMap, p.specularMapTransform)), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
    const y = t.get(m), x = y.envMap, S = y.envMapRotation;
    x && (p.envMap.value = x, ai.copy(S), ai.x *= -1, ai.y *= -1, ai.z *= -1, x.isCubeTexture && x.isRenderTargetTexture === !1 && (ai.y *= -1, ai.z *= -1), p.envMapRotation.value.setFromMatrix4(Om.makeRotationFromEuler(ai)), p.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = m.reflectivity, p.ior.value = m.ior, p.refractionRatio.value = m.refractionRatio), m.lightMap && (p.lightMap.value = m.lightMap, p.lightMapIntensity.value = m.lightMapIntensity, e(m.lightMap, p.lightMapTransform)), m.aoMap && (p.aoMap.value = m.aoMap, p.aoMapIntensity.value = m.aoMapIntensity, e(m.aoMap, p.aoMapTransform));
  }
  function a(p, m) {
    p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, m.map && (p.map.value = m.map, e(m.map, p.mapTransform));
  }
  function o(p, m) {
    p.dashSize.value = m.dashSize, p.totalSize.value = m.dashSize + m.gapSize, p.scale.value = m.scale;
  }
  function l(p, m, y, x) {
    p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, p.size.value = m.size * y, p.scale.value = x * 0.5, m.map && (p.map.value = m.map, e(m.map, p.uvTransform)), m.alphaMap && (p.alphaMap.value = m.alphaMap, e(m.alphaMap, p.alphaMapTransform)), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
  }
  function c(p, m) {
    p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, p.rotation.value = m.rotation, m.map && (p.map.value = m.map, e(m.map, p.mapTransform)), m.alphaMap && (p.alphaMap.value = m.alphaMap, e(m.alphaMap, p.alphaMapTransform)), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
  }
  function u(p, m) {
    p.specular.value.copy(m.specular), p.shininess.value = Math.max(m.shininess, 1e-4);
  }
  function h(p, m) {
    m.gradientMap && (p.gradientMap.value = m.gradientMap);
  }
  function f(p, m) {
    p.metalness.value = m.metalness, m.metalnessMap && (p.metalnessMap.value = m.metalnessMap, e(m.metalnessMap, p.metalnessMapTransform)), p.roughness.value = m.roughness, m.roughnessMap && (p.roughnessMap.value = m.roughnessMap, e(m.roughnessMap, p.roughnessMapTransform)), m.envMap && (p.envMapIntensity.value = m.envMapIntensity);
  }
  function d(p, m, y) {
    p.ior.value = m.ior, m.sheen > 0 && (p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen), p.sheenRoughness.value = m.sheenRoughness, m.sheenColorMap && (p.sheenColorMap.value = m.sheenColorMap, e(m.sheenColorMap, p.sheenColorMapTransform)), m.sheenRoughnessMap && (p.sheenRoughnessMap.value = m.sheenRoughnessMap, e(m.sheenRoughnessMap, p.sheenRoughnessMapTransform))), m.clearcoat > 0 && (p.clearcoat.value = m.clearcoat, p.clearcoatRoughness.value = m.clearcoatRoughness, m.clearcoatMap && (p.clearcoatMap.value = m.clearcoatMap, e(m.clearcoatMap, p.clearcoatMapTransform)), m.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap, e(m.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), m.clearcoatNormalMap && (p.clearcoatNormalMap.value = m.clearcoatNormalMap, e(m.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale), m.side === 1 && p.clearcoatNormalScale.value.negate())), m.dispersion > 0 && (p.dispersion.value = m.dispersion), m.iridescence > 0 && (p.iridescence.value = m.iridescence, p.iridescenceIOR.value = m.iridescenceIOR, p.iridescenceThicknessMinimum.value = m.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = m.iridescenceThicknessRange[1], m.iridescenceMap && (p.iridescenceMap.value = m.iridescenceMap, e(m.iridescenceMap, p.iridescenceMapTransform)), m.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = m.iridescenceThicknessMap, e(m.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), m.transmission > 0 && (p.transmission.value = m.transmission, p.transmissionSamplerMap.value = y.texture, p.transmissionSamplerSize.value.set(y.width, y.height), m.transmissionMap && (p.transmissionMap.value = m.transmissionMap, e(m.transmissionMap, p.transmissionMapTransform)), p.thickness.value = m.thickness, m.thicknessMap && (p.thicknessMap.value = m.thicknessMap, e(m.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = m.attenuationDistance, p.attenuationColor.value.copy(m.attenuationColor)), m.anisotropy > 0 && (p.anisotropyVector.value.set(m.anisotropy * Math.cos(m.anisotropyRotation), m.anisotropy * Math.sin(m.anisotropyRotation)), m.anisotropyMap && (p.anisotropyMap.value = m.anisotropyMap, e(m.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = m.specularIntensity, p.specularColor.value.copy(m.specularColor), m.specularColorMap && (p.specularColorMap.value = m.specularColorMap, e(m.specularColorMap, p.specularColorMapTransform)), m.specularIntensityMap && (p.specularIntensityMap.value = m.specularIntensityMap, e(m.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, m) {
    m.matcap && (p.matcap.value = m.matcap);
  }
  function _(p, m) {
    const y = t.get(m).light;
    p.referencePosition.value.setFromMatrixPosition(y.matrixWorld), p.nearDistance.value = y.shadow.camera.near, p.farDistance.value = y.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function zm(r, t, e, n) {
  let i = {}, s = {}, a = [];
  const o = r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(y, x) {
    const S = x.program;
    n.uniformBlockBinding(y, S);
  }
  function c(y, x) {
    let S = i[y.id];
    S === void 0 && (g(y), S = u(y), i[y.id] = S, y.addEventListener("dispose", p));
    const C = x.program;
    n.updateUBOMapping(y, C);
    const b = t.render.frame;
    s[y.id] !== b && (f(y), s[y.id] = b);
  }
  function u(y) {
    const x = h();
    y.__bindingPointIndex = x;
    const S = r.createBuffer(), C = y.__size, b = y.usage;
    return r.bindBuffer(r.UNIFORM_BUFFER, S), r.bufferData(r.UNIFORM_BUFFER, C, b), r.bindBuffer(r.UNIFORM_BUFFER, null), r.bindBufferBase(r.UNIFORM_BUFFER, x, S), S;
  }
  function h() {
    for (let y = 0; y < o; y++)
      if (a.indexOf(y) === -1)
        return a.push(y), y;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(y) {
    const x = i[y.id], S = y.uniforms, C = y.__cache;
    r.bindBuffer(r.UNIFORM_BUFFER, x);
    for (let b = 0, A = S.length; b < A; b++) {
      const P = Array.isArray(S[b]) ? S[b] : [S[b]];
      for (let L = 0, v = P.length; L < v; L++) {
        const T = P[L];
        if (d(T, b, L, C) === !0) {
          const G = T.__offset, F = Array.isArray(T.value) ? T.value : [T.value];
          let B = 0;
          for (let q = 0; q < F.length; q++) {
            const O = F[q], Z = _(O);
            typeof O == "number" || typeof O == "boolean" ? (T.__data[0] = O, r.bufferSubData(r.UNIFORM_BUFFER, G + B, T.__data)) : O.isMatrix3 ? (T.__data[0] = O.elements[0], T.__data[1] = O.elements[1], T.__data[2] = O.elements[2], T.__data[3] = 0, T.__data[4] = O.elements[3], T.__data[5] = O.elements[4], T.__data[6] = O.elements[5], T.__data[7] = 0, T.__data[8] = O.elements[6], T.__data[9] = O.elements[7], T.__data[10] = O.elements[8], T.__data[11] = 0) : (O.toArray(T.__data, B), B += Z.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          r.bufferSubData(r.UNIFORM_BUFFER, G, T.__data);
        }
      }
    }
    r.bindBuffer(r.UNIFORM_BUFFER, null);
  }
  function d(y, x, S, C) {
    const b = y.value, A = x + "_" + S;
    if (C[A] === void 0)
      return typeof b == "number" || typeof b == "boolean" ? C[A] = b : C[A] = b.clone(), !0;
    {
      const P = C[A];
      if (typeof b == "number" || typeof b == "boolean") {
        if (P !== b)
          return C[A] = b, !0;
      } else if (P.equals(b) === !1)
        return P.copy(b), !0;
    }
    return !1;
  }
  function g(y) {
    const x = y.uniforms;
    let S = 0;
    const C = 16;
    for (let A = 0, P = x.length; A < P; A++) {
      const L = Array.isArray(x[A]) ? x[A] : [x[A]];
      for (let v = 0, T = L.length; v < T; v++) {
        const G = L[v], F = Array.isArray(G.value) ? G.value : [G.value];
        for (let B = 0, q = F.length; B < q; B++) {
          const O = F[B], Z = _(O), W = S % C, lt = W % Z.boundary, rt = W + lt;
          S += lt, rt !== 0 && C - rt < Z.storage && (S += C - rt), G.__data = new Float32Array(Z.storage / Float32Array.BYTES_PER_ELEMENT), G.__offset = S, S += Z.storage;
        }
      }
    }
    const b = S % C;
    return b > 0 && (S += C - b), y.__size = S, y.__cache = {}, this;
  }
  function _(y) {
    const x = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof y == "number" || typeof y == "boolean" ? (x.boundary = 4, x.storage = 4) : y.isVector2 ? (x.boundary = 8, x.storage = 8) : y.isVector3 || y.isColor ? (x.boundary = 16, x.storage = 12) : y.isVector4 ? (x.boundary = 16, x.storage = 16) : y.isMatrix3 ? (x.boundary = 48, x.storage = 48) : y.isMatrix4 ? (x.boundary = 64, x.storage = 64) : y.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", y), x;
  }
  function p(y) {
    const x = y.target;
    x.removeEventListener("dispose", p);
    const S = a.indexOf(x.__bindingPointIndex);
    a.splice(S, 1), r.deleteBuffer(i[x.id]), delete i[x.id], delete s[x.id];
  }
  function m() {
    for (const y in i)
      r.deleteBuffer(i[y]);
    a = [], i = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: m
  };
}
class Gm {
  constructor(t = {}) {
    const {
      canvas: e = Au(),
      context: n = null,
      depth: i = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: h = !1
    } = t;
    this.isWebGLRenderer = !0;
    let f;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      f = n.getContextAttributes().alpha;
    } else
      f = a;
    const d = new Uint32Array(4), g = new Int32Array(4);
    let _ = null, p = null;
    const m = [], y = [];
    this.domElement = e, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = on, this.toneMapping = 0, this.toneMappingExposure = 1;
    const x = this;
    let S = !1, C = 0, b = 0, A = null, P = -1, L = null;
    const v = new te(), T = new te();
    let G = null;
    const F = new Xt(0);
    let B = 0, q = e.width, O = e.height, Z = 1, W = null, lt = null;
    const rt = new te(0, 0, q, O), ht = new te(0, 0, q, O);
    let Ft = !1;
    const Ht = new Qa();
    let V = !1, Q = !1;
    const Mt = new ee(), ut = new ee(), Dt = new D(), Pt = new te(), Lt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let zt = !1;
    function J() {
      return A === null ? Z : 1;
    }
    let R = n;
    function st(E, U) {
      return e.getContext(E, U);
    }
    try {
      const E = {
        alpha: !0,
        depth: i,
        stencil: s,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: h
      };
      if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Ja}`), e.addEventListener("webglcontextlost", $, !1), e.addEventListener("webglcontextrestored", pt, !1), e.addEventListener("webglcontextcreationerror", vt, !1), R === null) {
        const U = "webgl2";
        if (R = st(U, E), R === null)
          throw st(U) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (E) {
      throw console.error("THREE.WebGLRenderer: " + E.message), E;
    }
    let nt, et, at, bt, _t, w, M, z, Y, j, K, yt, ct, dt, Bt, tt, gt, wt, It, St, Vt, Ut, Zt, I;
    function mt() {
      nt = new Xd(R), nt.init(), Ut = new Pm(R, nt), et = new zd(R, nt, t, Ut), at = new wm(R), et.reverseDepthBuffer && at.buffers.depth.setReversed(!0), bt = new Kd(R), _t = new fm(), w = new Cm(R, nt, at, _t, et, Ut, bt), M = new kd(x), z = new Wd(x), Y = new th(R), Zt = new Od(R, Y), j = new qd(R, Y, bt, Zt), K = new Jd(R, j, Y, bt), It = new Zd(R, et, w), tt = new Gd(_t), yt = new hm(x, M, z, nt, et, Zt, tt), ct = new Bm(x, _t), dt = new pm(), Bt = new Sm(nt), wt = new Fd(x, M, z, at, K, f, l), gt = new Am(x, K, et), I = new zm(R, bt, et, at), St = new Bd(R, nt, bt), Vt = new Yd(R, nt, bt), bt.programs = yt.programs, x.capabilities = et, x.extensions = nt, x.properties = _t, x.renderLists = dt, x.shadowMap = gt, x.state = at, x.info = bt;
    }
    mt();
    const X = new Fm(x, R);
    this.xr = X, this.getContext = function() {
      return R;
    }, this.getContextAttributes = function() {
      return R.getContextAttributes();
    }, this.forceContextLoss = function() {
      const E = nt.get("WEBGL_lose_context");
      E && E.loseContext();
    }, this.forceContextRestore = function() {
      const E = nt.get("WEBGL_lose_context");
      E && E.restoreContext();
    }, this.getPixelRatio = function() {
      return Z;
    }, this.setPixelRatio = function(E) {
      E !== void 0 && (Z = E, this.setSize(q, O, !1));
    }, this.getSize = function(E) {
      return E.set(q, O);
    }, this.setSize = function(E, U, k = !0) {
      if (X.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      q = E, O = U, e.width = Math.floor(E * Z), e.height = Math.floor(U * Z), k === !0 && (e.style.width = E + "px", e.style.height = U + "px"), this.setViewport(0, 0, E, U);
    }, this.getDrawingBufferSize = function(E) {
      return E.set(q * Z, O * Z).floor();
    }, this.setDrawingBufferSize = function(E, U, k) {
      q = E, O = U, Z = k, e.width = Math.floor(E * k), e.height = Math.floor(U * k), this.setViewport(0, 0, E, U);
    }, this.getCurrentViewport = function(E) {
      return E.copy(v);
    }, this.getViewport = function(E) {
      return E.copy(rt);
    }, this.setViewport = function(E, U, k, H) {
      E.isVector4 ? rt.set(E.x, E.y, E.z, E.w) : rt.set(E, U, k, H), at.viewport(v.copy(rt).multiplyScalar(Z).round());
    }, this.getScissor = function(E) {
      return E.copy(ht);
    }, this.setScissor = function(E, U, k, H) {
      E.isVector4 ? ht.set(E.x, E.y, E.z, E.w) : ht.set(E, U, k, H), at.scissor(T.copy(ht).multiplyScalar(Z).round());
    }, this.getScissorTest = function() {
      return Ft;
    }, this.setScissorTest = function(E) {
      at.setScissorTest(Ft = E);
    }, this.setOpaqueSort = function(E) {
      W = E;
    }, this.setTransparentSort = function(E) {
      lt = E;
    }, this.getClearColor = function(E) {
      return E.copy(wt.getClearColor());
    }, this.setClearColor = function() {
      wt.setClearColor.apply(wt, arguments);
    }, this.getClearAlpha = function() {
      return wt.getClearAlpha();
    }, this.setClearAlpha = function() {
      wt.setClearAlpha.apply(wt, arguments);
    }, this.clear = function(E = !0, U = !0, k = !0) {
      let H = 0;
      if (E) {
        let N = !1;
        if (A !== null) {
          const it = A.texture.format;
          N = it === 1033 || it === 1031 || it === 1029;
        }
        if (N) {
          const it = A.texture.type, xt = it === 1009 || it === 1014 || it === 1012 || it === 1020 || it === 1017 || it === 1018, Et = wt.getClearColor(), At = wt.getClearAlpha(), Nt = Et.r, Ot = Et.g, Rt = Et.b;
          xt ? (d[0] = Nt, d[1] = Ot, d[2] = Rt, d[3] = At, R.clearBufferuiv(R.COLOR, 0, d)) : (g[0] = Nt, g[1] = Ot, g[2] = Rt, g[3] = At, R.clearBufferiv(R.COLOR, 0, g));
        } else
          H |= R.COLOR_BUFFER_BIT;
      }
      U && (H |= R.DEPTH_BUFFER_BIT, R.clearDepth(this.capabilities.reverseDepthBuffer ? 0 : 1)), k && (H |= R.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), R.clear(H);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      e.removeEventListener("webglcontextlost", $, !1), e.removeEventListener("webglcontextrestored", pt, !1), e.removeEventListener("webglcontextcreationerror", vt, !1), dt.dispose(), Bt.dispose(), _t.dispose(), M.dispose(), z.dispose(), K.dispose(), Zt.dispose(), I.dispose(), yt.dispose(), X.dispose(), X.removeEventListener("sessionstart", we), X.removeEventListener("sessionend", _n), ye.stop();
    };
    function $(E) {
      E.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), S = !0;
    }
    function pt() {
      console.log("THREE.WebGLRenderer: Context Restored."), S = !1;
      const E = bt.autoReset, U = gt.enabled, k = gt.autoUpdate, H = gt.needsUpdate, N = gt.type;
      mt(), bt.autoReset = E, gt.enabled = U, gt.autoUpdate = k, gt.needsUpdate = H, gt.type = N;
    }
    function vt(E) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", E.statusMessage);
    }
    function Wt(E) {
      const U = E.target;
      U.removeEventListener("dispose", Wt), le(U);
    }
    function le(E) {
      be(E), _t.remove(E);
    }
    function be(E) {
      const U = _t.get(E).programs;
      U !== void 0 && (U.forEach(function(k) {
        yt.releaseProgram(k);
      }), E.isShaderMaterial && yt.releaseShaderCache(E));
    }
    this.renderBufferDirect = function(E, U, k, H, N, it) {
      U === null && (U = Lt);
      const xt = N.isMesh && N.matrixWorld.determinant() < 0, Et = Su(E, U, k, H, N);
      at.setMaterial(H, xt);
      let At = k.index, Nt = 1;
      if (H.wireframe === !0) {
        if (At = j.getWireframeAttribute(k), At === void 0) return;
        Nt = 2;
      }
      const Ot = k.drawRange, Rt = k.attributes.position;
      let Qt = Ot.start * Nt, re = (Ot.start + Ot.count) * Nt;
      it !== null && (Qt = Math.max(Qt, it.start * Nt), re = Math.min(re, (it.start + it.count) * Nt)), At !== null ? (Qt = Math.max(Qt, 0), re = Math.min(re, At.count)) : Rt != null && (Qt = Math.max(Qt, 0), re = Math.min(re, Rt.count));
      const de = re - Qt;
      if (de < 0 || de === 1 / 0) return;
      Zt.setup(N, H, Et, k, At);
      let We, Jt = St;
      if (At !== null && (We = Y.get(At), Jt = Vt, Jt.setIndex(We)), N.isMesh)
        H.wireframe === !0 ? (at.setLineWidth(H.wireframeLinewidth * J()), Jt.setMode(R.LINES)) : Jt.setMode(R.TRIANGLES);
      else if (N.isLine) {
        let Ct = H.linewidth;
        Ct === void 0 && (Ct = 1), at.setLineWidth(Ct * J()), N.isLineSegments ? Jt.setMode(R.LINES) : N.isLineLoop ? Jt.setMode(R.LINE_LOOP) : Jt.setMode(R.LINE_STRIP);
      } else N.isPoints ? Jt.setMode(R.POINTS) : N.isSprite && Jt.setMode(R.TRIANGLES);
      if (N.isBatchedMesh)
        if (N._multiDrawInstances !== null)
          Jt.renderMultiDrawInstances(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount, N._multiDrawInstances);
        else if (nt.get("WEBGL_multi_draw"))
          Jt.renderMultiDraw(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount);
        else {
          const Ct = N._multiDrawStarts, Re = N._multiDrawCounts, $t = N._multiDrawCount, hn = At ? Y.get(At).bytesPerElement : 1, Ai = _t.get(H).currentProgram.getUniforms();
          for (let Xe = 0; Xe < $t; Xe++)
            Ai.setValue(R, "_gl_DrawID", Xe), Jt.render(Ct[Xe] / hn, Re[Xe]);
        }
      else if (N.isInstancedMesh)
        Jt.renderInstances(Qt, de, N.count);
      else if (k.isInstancedBufferGeometry) {
        const Ct = k._maxInstanceCount !== void 0 ? k._maxInstanceCount : 1 / 0, Re = Math.min(k.instanceCount, Ct);
        Jt.renderInstances(Qt, de, Re);
      } else
        Jt.render(Qt, de);
    };
    function Kt(E, U, k) {
      E.transparent === !0 && E.side === 2 && E.forceSinglePass === !1 ? (E.side = 1, E.needsUpdate = !0, kr(E, U, k), E.side = 0, E.needsUpdate = !0, kr(E, U, k), E.side = 2) : kr(E, U, k);
    }
    this.compile = function(E, U, k = null) {
      k === null && (k = E), p = Bt.get(k), p.init(U), y.push(p), k.traverseVisible(function(N) {
        N.isLight && N.layers.test(U.layers) && (p.pushLight(N), N.castShadow && p.pushShadow(N));
      }), E !== k && E.traverseVisible(function(N) {
        N.isLight && N.layers.test(U.layers) && (p.pushLight(N), N.castShadow && p.pushShadow(N));
      }), p.setupLights();
      const H = /* @__PURE__ */ new Set();
      return E.traverse(function(N) {
        if (!(N.isMesh || N.isPoints || N.isLine || N.isSprite))
          return;
        const it = N.material;
        if (it)
          if (Array.isArray(it))
            for (let xt = 0; xt < it.length; xt++) {
              const Et = it[xt];
              Kt(Et, k, N), H.add(Et);
            }
          else
            Kt(it, k, N), H.add(it);
      }), y.pop(), p = null, H;
    }, this.compileAsync = function(E, U, k = null) {
      const H = this.compile(E, U, k);
      return new Promise((N) => {
        function it() {
          if (H.forEach(function(xt) {
            _t.get(xt).currentProgram.isReady() && H.delete(xt);
          }), H.size === 0) {
            N(E);
            return;
          }
          setTimeout(it, 10);
        }
        nt.get("KHR_parallel_shader_compile") !== null ? it() : setTimeout(it, 10);
      });
    };
    let Tt = null;
    function Yt(E) {
      Tt && Tt(E);
    }
    function we() {
      ye.stop();
    }
    function _n() {
      ye.start();
    }
    const ye = new sc();
    ye.setAnimationLoop(Yt), typeof self < "u" && ye.setContext(self), this.setAnimationLoop = function(E) {
      Tt = E, X.setAnimationLoop(E), E === null ? ye.stop() : ye.start();
    }, X.addEventListener("sessionstart", we), X.addEventListener("sessionend", _n), this.render = function(E, U) {
      if (U !== void 0 && U.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (S === !0) return;
      if (E.matrixWorldAutoUpdate === !0 && E.updateMatrixWorld(), U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(), X.enabled === !0 && X.isPresenting === !0 && (X.cameraAutoUpdate === !0 && X.updateCamera(U), U = X.getCamera()), E.isScene === !0 && E.onBeforeRender(x, E, U, A), p = Bt.get(E, y.length), p.init(U), y.push(p), ut.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse), Ht.setFromProjectionMatrix(ut), Q = this.localClippingEnabled, V = tt.init(this.clippingPlanes, Q), _ = dt.get(E, m.length), _.init(), m.push(_), X.enabled === !0 && X.isPresenting === !0) {
        const it = x.xr.getDepthSensingMesh();
        it !== null && yi(it, U, -1 / 0, x.sortObjects);
      }
      yi(E, U, 0, x.sortObjects), _.finish(), x.sortObjects === !0 && _.sort(W, lt), zt = X.enabled === !1 || X.isPresenting === !1 || X.hasDepthSensing() === !1, zt && wt.addToRenderList(_, E), this.info.render.frame++, V === !0 && tt.beginShadows();
      const k = p.state.shadowsArray;
      gt.render(k, E, U), V === !0 && tt.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const H = _.opaque, N = _.transmissive;
      if (p.setupLights(), U.isArrayCamera) {
        const it = U.cameras;
        if (N.length > 0)
          for (let xt = 0, Et = it.length; xt < Et; xt++) {
            const At = it[xt];
            Ei(H, N, E, At);
          }
        zt && wt.render(E);
        for (let xt = 0, Et = it.length; xt < Et; xt++) {
          const At = it[xt];
          Ti(_, E, At, At.viewport);
        }
      } else
        N.length > 0 && Ei(H, N, E, U), zt && wt.render(E), Ti(_, E, U);
      A !== null && (w.updateMultisampleRenderTarget(A), w.updateRenderTargetMipmap(A)), E.isScene === !0 && E.onAfterRender(x, E, U), Zt.resetDefaultState(), P = -1, L = null, y.pop(), y.length > 0 ? (p = y[y.length - 1], V === !0 && tt.setGlobalState(x.clippingPlanes, p.state.camera)) : p = null, m.pop(), m.length > 0 ? _ = m[m.length - 1] : _ = null;
    };
    function yi(E, U, k, H) {
      if (E.visible === !1) return;
      if (E.layers.test(U.layers)) {
        if (E.isGroup)
          k = E.renderOrder;
        else if (E.isLOD)
          E.autoUpdate === !0 && E.update(U);
        else if (E.isLight)
          p.pushLight(E), E.castShadow && p.pushShadow(E);
        else if (E.isSprite) {
          if (!E.frustumCulled || Ht.intersectsSprite(E)) {
            H && Pt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ut);
            const xt = K.update(E), Et = E.material;
            Et.visible && _.push(E, xt, Et, k, Pt.z, null);
          }
        } else if ((E.isMesh || E.isLine || E.isPoints) && (!E.frustumCulled || Ht.intersectsObject(E))) {
          const xt = K.update(E), Et = E.material;
          if (H && (E.boundingSphere !== void 0 ? (E.boundingSphere === null && E.computeBoundingSphere(), Pt.copy(E.boundingSphere.center)) : (xt.boundingSphere === null && xt.computeBoundingSphere(), Pt.copy(xt.boundingSphere.center)), Pt.applyMatrix4(E.matrixWorld).applyMatrix4(ut)), Array.isArray(Et)) {
            const At = xt.groups;
            for (let Nt = 0, Ot = At.length; Nt < Ot; Nt++) {
              const Rt = At[Nt], Qt = Et[Rt.materialIndex];
              Qt && Qt.visible && _.push(E, xt, Qt, k, Pt.z, Rt);
            }
          } else Et.visible && _.push(E, xt, Et, k, Pt.z, null);
        }
      }
      const it = E.children;
      for (let xt = 0, Et = it.length; xt < Et; xt++)
        yi(it[xt], U, k, H);
    }
    function Ti(E, U, k, H) {
      const N = E.opaque, it = E.transmissive, xt = E.transparent;
      p.setupLightsView(k), V === !0 && tt.setGlobalState(x.clippingPlanes, k), H && at.viewport(v.copy(H)), N.length > 0 && An(N, U, k), it.length > 0 && An(it, U, k), xt.length > 0 && An(xt, U, k), at.buffers.depth.setTest(!0), at.buffers.depth.setMask(!0), at.buffers.color.setMask(!0), at.setPolygonOffset(!1);
    }
    function Ei(E, U, k, H) {
      if ((k.isScene === !0 ? k.overrideMaterial : null) !== null)
        return;
      p.state.transmissionRenderTarget[H.id] === void 0 && (p.state.transmissionRenderTarget[H.id] = new vi(1, 1, {
        generateMipmaps: !0,
        type: nt.has("EXT_color_buffer_half_float") || nt.has("EXT_color_buffer_float") ? 1016 : 1009,
        minFilter: 1008,
        samples: 4,
        stencilBuffer: s,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: jt.workingColorSpace
      }));
      const it = p.state.transmissionRenderTarget[H.id], xt = H.viewport || v;
      it.setSize(xt.z, xt.w);
      const Et = x.getRenderTarget();
      x.setRenderTarget(it), x.getClearColor(F), B = x.getClearAlpha(), B < 1 && x.setClearColor(16777215, 0.5), x.clear(), zt && wt.render(k);
      const At = x.toneMapping;
      x.toneMapping = 0;
      const Nt = H.viewport;
      if (H.viewport !== void 0 && (H.viewport = void 0), p.setupLightsView(H), V === !0 && tt.setGlobalState(x.clippingPlanes, H), An(E, k, H), w.updateMultisampleRenderTarget(it), w.updateRenderTargetMipmap(it), nt.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Ot = !1;
        for (let Rt = 0, Qt = U.length; Rt < Qt; Rt++) {
          const re = U[Rt], de = re.object, We = re.geometry, Jt = re.material, Ct = re.group;
          if (Jt.side === 2 && de.layers.test(H.layers)) {
            const Re = Jt.side;
            Jt.side = 1, Jt.needsUpdate = !0, bo(de, k, H, We, Jt, Ct), Jt.side = Re, Jt.needsUpdate = !0, Ot = !0;
          }
        }
        Ot === !0 && (w.updateMultisampleRenderTarget(it), w.updateRenderTargetMipmap(it));
      }
      x.setRenderTarget(Et), x.setClearColor(F, B), Nt !== void 0 && (H.viewport = Nt), x.toneMapping = At;
    }
    function An(E, U, k) {
      const H = U.isScene === !0 ? U.overrideMaterial : null;
      for (let N = 0, it = E.length; N < it; N++) {
        const xt = E[N], Et = xt.object, At = xt.geometry, Nt = H === null ? xt.material : H, Ot = xt.group;
        Et.layers.test(k.layers) && bo(Et, U, k, At, Nt, Ot);
      }
    }
    function bo(E, U, k, H, N, it) {
      E.onBeforeRender(x, U, k, H, N, it), E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse, E.matrixWorld), E.normalMatrix.getNormalMatrix(E.modelViewMatrix), N.onBeforeRender(x, U, k, H, E, it), N.transparent === !0 && N.side === 2 && N.forceSinglePass === !1 ? (N.side = 1, N.needsUpdate = !0, x.renderBufferDirect(k, U, H, N, E, it), N.side = 0, N.needsUpdate = !0, x.renderBufferDirect(k, U, H, N, E, it), N.side = 2) : x.renderBufferDirect(k, U, H, N, E, it), E.onAfterRender(x, U, k, H, N, it);
    }
    function kr(E, U, k) {
      U.isScene !== !0 && (U = Lt);
      const H = _t.get(E), N = p.state.lights, it = p.state.shadowsArray, xt = N.state.version, Et = yt.getParameters(E, N.state, it, U, k), At = yt.getProgramCacheKey(Et);
      let Nt = H.programs;
      H.environment = E.isMeshStandardMaterial ? U.environment : null, H.fog = U.fog, H.envMap = (E.isMeshStandardMaterial ? z : M).get(E.envMap || H.environment), H.envMapRotation = H.environment !== null && E.envMap === null ? U.environmentRotation : E.envMapRotation, Nt === void 0 && (E.addEventListener("dispose", Wt), Nt = /* @__PURE__ */ new Map(), H.programs = Nt);
      let Ot = Nt.get(At);
      if (Ot !== void 0) {
        if (H.currentProgram === Ot && H.lightsStateVersion === xt)
          return Ro(E, Et), Ot;
      } else
        Et.uniforms = yt.getUniforms(E), E.onBeforeCompile(Et, x), Ot = yt.acquireProgram(Et, At), Nt.set(At, Ot), H.uniforms = Et.uniforms;
      const Rt = H.uniforms;
      return (!E.isShaderMaterial && !E.isRawShaderMaterial || E.clipping === !0) && (Rt.clippingPlanes = tt.uniform), Ro(E, Et), H.needsLights = yu(E), H.lightsStateVersion = xt, H.needsLights && (Rt.ambientLightColor.value = N.state.ambient, Rt.lightProbe.value = N.state.probe, Rt.directionalLights.value = N.state.directional, Rt.directionalLightShadows.value = N.state.directionalShadow, Rt.spotLights.value = N.state.spot, Rt.spotLightShadows.value = N.state.spotShadow, Rt.rectAreaLights.value = N.state.rectArea, Rt.ltc_1.value = N.state.rectAreaLTC1, Rt.ltc_2.value = N.state.rectAreaLTC2, Rt.pointLights.value = N.state.point, Rt.pointLightShadows.value = N.state.pointShadow, Rt.hemisphereLights.value = N.state.hemi, Rt.directionalShadowMap.value = N.state.directionalShadowMap, Rt.directionalShadowMatrix.value = N.state.directionalShadowMatrix, Rt.spotShadowMap.value = N.state.spotShadowMap, Rt.spotLightMatrix.value = N.state.spotLightMatrix, Rt.spotLightMap.value = N.state.spotLightMap, Rt.pointShadowMap.value = N.state.pointShadowMap, Rt.pointShadowMatrix.value = N.state.pointShadowMatrix), H.currentProgram = Ot, H.uniformsList = null, Ot;
    }
    function wo(E) {
      if (E.uniformsList === null) {
        const U = E.currentProgram.getUniforms();
        E.uniformsList = ps.seqWithValue(U.seq, E.uniforms);
      }
      return E.uniformsList;
    }
    function Ro(E, U) {
      const k = _t.get(E);
      k.outputColorSpace = U.outputColorSpace, k.batching = U.batching, k.batchingColor = U.batchingColor, k.instancing = U.instancing, k.instancingColor = U.instancingColor, k.instancingMorph = U.instancingMorph, k.skinning = U.skinning, k.morphTargets = U.morphTargets, k.morphNormals = U.morphNormals, k.morphColors = U.morphColors, k.morphTargetsCount = U.morphTargetsCount, k.numClippingPlanes = U.numClippingPlanes, k.numIntersection = U.numClipIntersection, k.vertexAlphas = U.vertexAlphas, k.vertexTangents = U.vertexTangents, k.toneMapping = U.toneMapping;
    }
    function Su(E, U, k, H, N) {
      U.isScene !== !0 && (U = Lt), w.resetTextureUnits();
      const it = U.fog, xt = H.isMeshStandardMaterial ? U.environment : null, Et = A === null ? x.outputColorSpace : A.isXRRenderTarget === !0 ? A.texture.colorSpace : Qn, At = (H.isMeshStandardMaterial ? z : M).get(H.envMap || xt), Nt = H.vertexColors === !0 && !!k.attributes.color && k.attributes.color.itemSize === 4, Ot = !!k.attributes.tangent && (!!H.normalMap || H.anisotropy > 0), Rt = !!k.morphAttributes.position, Qt = !!k.morphAttributes.normal, re = !!k.morphAttributes.color;
      let de = 0;
      H.toneMapped && (A === null || A.isXRRenderTarget === !0) && (de = x.toneMapping);
      const We = k.morphAttributes.position || k.morphAttributes.normal || k.morphAttributes.color, Jt = We !== void 0 ? We.length : 0, Ct = _t.get(H), Re = p.state.lights;
      if (V === !0 && (Q === !0 || E !== L)) {
        const rn = E === L && H.id === P;
        tt.setState(H, E, rn);
      }
      let $t = !1;
      H.version === Ct.__version ? (Ct.needsLights && Ct.lightsStateVersion !== Re.state.version || Ct.outputColorSpace !== Et || N.isBatchedMesh && Ct.batching === !1 || !N.isBatchedMesh && Ct.batching === !0 || N.isBatchedMesh && Ct.batchingColor === !0 && N.colorTexture === null || N.isBatchedMesh && Ct.batchingColor === !1 && N.colorTexture !== null || N.isInstancedMesh && Ct.instancing === !1 || !N.isInstancedMesh && Ct.instancing === !0 || N.isSkinnedMesh && Ct.skinning === !1 || !N.isSkinnedMesh && Ct.skinning === !0 || N.isInstancedMesh && Ct.instancingColor === !0 && N.instanceColor === null || N.isInstancedMesh && Ct.instancingColor === !1 && N.instanceColor !== null || N.isInstancedMesh && Ct.instancingMorph === !0 && N.morphTexture === null || N.isInstancedMesh && Ct.instancingMorph === !1 && N.morphTexture !== null || Ct.envMap !== At || H.fog === !0 && Ct.fog !== it || Ct.numClippingPlanes !== void 0 && (Ct.numClippingPlanes !== tt.numPlanes || Ct.numIntersection !== tt.numIntersection) || Ct.vertexAlphas !== Nt || Ct.vertexTangents !== Ot || Ct.morphTargets !== Rt || Ct.morphNormals !== Qt || Ct.morphColors !== re || Ct.toneMapping !== de || Ct.morphTargetsCount !== Jt) && ($t = !0) : ($t = !0, Ct.__version = H.version);
      let hn = Ct.currentProgram;
      $t === !0 && (hn = kr(H, U, N));
      let Ai = !1, Xe = !1, Os = !1;
      const me = hn.getUniforms(), Fn = Ct.uniforms;
      if (at.useProgram(hn.program) && (Ai = !0, Xe = !0, Os = !0), H.id !== P && (P = H.id, Xe = !0), Ai || L !== E) {
        et.reverseDepthBuffer ? (Mt.copy(E.projectionMatrix), wu(Mt), Ru(Mt), me.setValue(R, "projectionMatrix", Mt)) : me.setValue(R, "projectionMatrix", E.projectionMatrix), me.setValue(R, "viewMatrix", E.matrixWorldInverse);
        const rn = me.map.cameraPosition;
        rn !== void 0 && rn.setValue(R, Dt.setFromMatrixPosition(E.matrixWorld)), et.logarithmicDepthBuffer && me.setValue(
          R,
          "logDepthBufFC",
          2 / (Math.log(E.far + 1) / Math.LN2)
        ), (H.isMeshPhongMaterial || H.isMeshToonMaterial || H.isMeshLambertMaterial || H.isMeshBasicMaterial || H.isMeshStandardMaterial || H.isShaderMaterial) && me.setValue(R, "isOrthographic", E.isOrthographicCamera === !0), L !== E && (L = E, Xe = !0, Os = !0);
      }
      if (N.isSkinnedMesh) {
        me.setOptional(R, N, "bindMatrix"), me.setOptional(R, N, "bindMatrixInverse");
        const rn = N.skeleton;
        rn && (rn.boneTexture === null && rn.computeBoneTexture(), me.setValue(R, "boneTexture", rn.boneTexture, w));
      }
      N.isBatchedMesh && (me.setOptional(R, N, "batchingTexture"), me.setValue(R, "batchingTexture", N._matricesTexture, w), me.setOptional(R, N, "batchingIdTexture"), me.setValue(R, "batchingIdTexture", N._indirectTexture, w), me.setOptional(R, N, "batchingColorTexture"), N._colorsTexture !== null && me.setValue(R, "batchingColorTexture", N._colorsTexture, w));
      const Bs = k.morphAttributes;
      if ((Bs.position !== void 0 || Bs.normal !== void 0 || Bs.color !== void 0) && It.update(N, k, hn), (Xe || Ct.receiveShadow !== N.receiveShadow) && (Ct.receiveShadow = N.receiveShadow, me.setValue(R, "receiveShadow", N.receiveShadow)), H.isMeshGouraudMaterial && H.envMap !== null && (Fn.envMap.value = At, Fn.flipEnvMap.value = At.isCubeTexture && At.isRenderTargetTexture === !1 ? -1 : 1), H.isMeshStandardMaterial && H.envMap === null && U.environment !== null && (Fn.envMapIntensity.value = U.environmentIntensity), Xe && (me.setValue(R, "toneMappingExposure", x.toneMappingExposure), Ct.needsLights && Mu(Fn, Os), it && H.fog === !0 && ct.refreshFogUniforms(Fn, it), ct.refreshMaterialUniforms(Fn, H, Z, O, p.state.transmissionRenderTarget[E.id]), ps.upload(R, wo(Ct), Fn, w)), H.isShaderMaterial && H.uniformsNeedUpdate === !0 && (ps.upload(R, wo(Ct), Fn, w), H.uniformsNeedUpdate = !1), H.isSpriteMaterial && me.setValue(R, "center", N.center), me.setValue(R, "modelViewMatrix", N.modelViewMatrix), me.setValue(R, "normalMatrix", N.normalMatrix), me.setValue(R, "modelMatrix", N.matrixWorld), H.isShaderMaterial || H.isRawShaderMaterial) {
        const rn = H.uniformsGroups;
        for (let zs = 0, Tu = rn.length; zs < Tu; zs++) {
          const Co = rn[zs];
          I.update(Co, hn), I.bind(Co, hn);
        }
      }
      return hn;
    }
    function Mu(E, U) {
      E.ambientLightColor.needsUpdate = U, E.lightProbe.needsUpdate = U, E.directionalLights.needsUpdate = U, E.directionalLightShadows.needsUpdate = U, E.pointLights.needsUpdate = U, E.pointLightShadows.needsUpdate = U, E.spotLights.needsUpdate = U, E.spotLightShadows.needsUpdate = U, E.rectAreaLights.needsUpdate = U, E.hemisphereLights.needsUpdate = U;
    }
    function yu(E) {
      return E.isMeshLambertMaterial || E.isMeshToonMaterial || E.isMeshPhongMaterial || E.isMeshStandardMaterial || E.isShadowMaterial || E.isShaderMaterial && E.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return C;
    }, this.getActiveMipmapLevel = function() {
      return b;
    }, this.getRenderTarget = function() {
      return A;
    }, this.setRenderTargetTextures = function(E, U, k) {
      _t.get(E.texture).__webglTexture = U, _t.get(E.depthTexture).__webglTexture = k;
      const H = _t.get(E);
      H.__hasExternalTextures = !0, H.__autoAllocateDepthBuffer = k === void 0, H.__autoAllocateDepthBuffer || nt.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), H.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(E, U) {
      const k = _t.get(E);
      k.__webglFramebuffer = U, k.__useDefaultFramebuffer = U === void 0;
    }, this.setRenderTarget = function(E, U = 0, k = 0) {
      A = E, C = U, b = k;
      let H = !0, N = null, it = !1, xt = !1;
      if (E) {
        const At = _t.get(E);
        if (At.__useDefaultFramebuffer !== void 0)
          at.bindFramebuffer(R.FRAMEBUFFER, null), H = !1;
        else if (At.__webglFramebuffer === void 0)
          w.setupRenderTarget(E);
        else if (At.__hasExternalTextures)
          w.rebindTextures(E, _t.get(E.texture).__webglTexture, _t.get(E.depthTexture).__webglTexture);
        else if (E.depthBuffer) {
          const Rt = E.depthTexture;
          if (At.__boundDepthTexture !== Rt) {
            if (Rt !== null && _t.has(Rt) && (E.width !== Rt.image.width || E.height !== Rt.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            w.setupDepthRenderbuffer(E);
          }
        }
        const Nt = E.texture;
        (Nt.isData3DTexture || Nt.isDataArrayTexture || Nt.isCompressedArrayTexture) && (xt = !0);
        const Ot = _t.get(E).__webglFramebuffer;
        E.isWebGLCubeRenderTarget ? (Array.isArray(Ot[U]) ? N = Ot[U][k] : N = Ot[U], it = !0) : E.samples > 0 && w.useMultisampledRTT(E) === !1 ? N = _t.get(E).__webglMultisampledFramebuffer : Array.isArray(Ot) ? N = Ot[k] : N = Ot, v.copy(E.viewport), T.copy(E.scissor), G = E.scissorTest;
      } else
        v.copy(rt).multiplyScalar(Z).floor(), T.copy(ht).multiplyScalar(Z).floor(), G = Ft;
      if (at.bindFramebuffer(R.FRAMEBUFFER, N) && H && at.drawBuffers(E, N), at.viewport(v), at.scissor(T), at.setScissorTest(G), it) {
        const At = _t.get(E.texture);
        R.framebufferTexture2D(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_CUBE_MAP_POSITIVE_X + U, At.__webglTexture, k);
      } else if (xt) {
        const At = _t.get(E.texture), Nt = U || 0;
        R.framebufferTextureLayer(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, At.__webglTexture, k || 0, Nt);
      }
      P = -1;
    }, this.readRenderTargetPixels = function(E, U, k, H, N, it, xt) {
      if (!(E && E.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Et = _t.get(E).__webglFramebuffer;
      if (E.isWebGLCubeRenderTarget && xt !== void 0 && (Et = Et[xt]), Et) {
        at.bindFramebuffer(R.FRAMEBUFFER, Et);
        try {
          const At = E.texture, Nt = At.format, Ot = At.type;
          if (!et.textureFormatReadable(Nt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!et.textureTypeReadable(Ot)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          U >= 0 && U <= E.width - H && k >= 0 && k <= E.height - N && R.readPixels(U, k, H, N, Ut.convert(Nt), Ut.convert(Ot), it);
        } finally {
          const At = A !== null ? _t.get(A).__webglFramebuffer : null;
          at.bindFramebuffer(R.FRAMEBUFFER, At);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(E, U, k, H, N, it, xt) {
      if (!(E && E.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let Et = _t.get(E).__webglFramebuffer;
      if (E.isWebGLCubeRenderTarget && xt !== void 0 && (Et = Et[xt]), Et) {
        const At = E.texture, Nt = At.format, Ot = At.type;
        if (!et.textureFormatReadable(Nt))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!et.textureTypeReadable(Ot))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (U >= 0 && U <= E.width - H && k >= 0 && k <= E.height - N) {
          at.bindFramebuffer(R.FRAMEBUFFER, Et);
          const Rt = R.createBuffer();
          R.bindBuffer(R.PIXEL_PACK_BUFFER, Rt), R.bufferData(R.PIXEL_PACK_BUFFER, it.byteLength, R.STREAM_READ), R.readPixels(U, k, H, N, Ut.convert(Nt), Ut.convert(Ot), 0);
          const Qt = A !== null ? _t.get(A).__webglFramebuffer : null;
          at.bindFramebuffer(R.FRAMEBUFFER, Qt);
          const re = R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return R.flush(), await bu(R, re, 4), R.bindBuffer(R.PIXEL_PACK_BUFFER, Rt), R.getBufferSubData(R.PIXEL_PACK_BUFFER, 0, it), R.deleteBuffer(Rt), R.deleteSync(re), it;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(E, U = null, k = 0) {
      E.isTexture !== !0 && (ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."), U = arguments[0] || null, E = arguments[1]);
      const H = Math.pow(2, -k), N = Math.floor(E.image.width * H), it = Math.floor(E.image.height * H), xt = U !== null ? U.x : 0, Et = U !== null ? U.y : 0;
      w.setTexture2D(E, 0), R.copyTexSubImage2D(R.TEXTURE_2D, k, 0, 0, xt, Et, N, it), at.unbindTexture();
    }, this.copyTextureToTexture = function(E, U, k = null, H = null, N = 0) {
      E.isTexture !== !0 && (ds("WebGLRenderer: copyTextureToTexture function signature has changed."), H = arguments[0] || null, E = arguments[1], U = arguments[2], N = arguments[3] || 0, k = null);
      let it, xt, Et, At, Nt, Ot;
      k !== null ? (it = k.max.x - k.min.x, xt = k.max.y - k.min.y, Et = k.min.x, At = k.min.y) : (it = E.image.width, xt = E.image.height, Et = 0, At = 0), H !== null ? (Nt = H.x, Ot = H.y) : (Nt = 0, Ot = 0);
      const Rt = Ut.convert(U.format), Qt = Ut.convert(U.type);
      w.setTexture2D(U, 0), R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, U.flipY), R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, U.premultiplyAlpha), R.pixelStorei(R.UNPACK_ALIGNMENT, U.unpackAlignment);
      const re = R.getParameter(R.UNPACK_ROW_LENGTH), de = R.getParameter(R.UNPACK_IMAGE_HEIGHT), We = R.getParameter(R.UNPACK_SKIP_PIXELS), Jt = R.getParameter(R.UNPACK_SKIP_ROWS), Ct = R.getParameter(R.UNPACK_SKIP_IMAGES), Re = E.isCompressedTexture ? E.mipmaps[N] : E.image;
      R.pixelStorei(R.UNPACK_ROW_LENGTH, Re.width), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, Re.height), R.pixelStorei(R.UNPACK_SKIP_PIXELS, Et), R.pixelStorei(R.UNPACK_SKIP_ROWS, At), E.isDataTexture ? R.texSubImage2D(R.TEXTURE_2D, N, Nt, Ot, it, xt, Rt, Qt, Re.data) : E.isCompressedTexture ? R.compressedTexSubImage2D(R.TEXTURE_2D, N, Nt, Ot, Re.width, Re.height, Rt, Re.data) : R.texSubImage2D(R.TEXTURE_2D, N, Nt, Ot, it, xt, Rt, Qt, Re), R.pixelStorei(R.UNPACK_ROW_LENGTH, re), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, de), R.pixelStorei(R.UNPACK_SKIP_PIXELS, We), R.pixelStorei(R.UNPACK_SKIP_ROWS, Jt), R.pixelStorei(R.UNPACK_SKIP_IMAGES, Ct), N === 0 && U.generateMipmaps && R.generateMipmap(R.TEXTURE_2D), at.unbindTexture();
    }, this.copyTextureToTexture3D = function(E, U, k = null, H = null, N = 0) {
      E.isTexture !== !0 && (ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."), k = arguments[0] || null, H = arguments[1] || null, E = arguments[2], U = arguments[3], N = arguments[4] || 0);
      let it, xt, Et, At, Nt, Ot, Rt, Qt, re;
      const de = E.isCompressedTexture ? E.mipmaps[N] : E.image;
      k !== null ? (it = k.max.x - k.min.x, xt = k.max.y - k.min.y, Et = k.max.z - k.min.z, At = k.min.x, Nt = k.min.y, Ot = k.min.z) : (it = de.width, xt = de.height, Et = de.depth, At = 0, Nt = 0, Ot = 0), H !== null ? (Rt = H.x, Qt = H.y, re = H.z) : (Rt = 0, Qt = 0, re = 0);
      const We = Ut.convert(U.format), Jt = Ut.convert(U.type);
      let Ct;
      if (U.isData3DTexture)
        w.setTexture3D(U, 0), Ct = R.TEXTURE_3D;
      else if (U.isDataArrayTexture || U.isCompressedArrayTexture)
        w.setTexture2DArray(U, 0), Ct = R.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, U.flipY), R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, U.premultiplyAlpha), R.pixelStorei(R.UNPACK_ALIGNMENT, U.unpackAlignment);
      const Re = R.getParameter(R.UNPACK_ROW_LENGTH), $t = R.getParameter(R.UNPACK_IMAGE_HEIGHT), hn = R.getParameter(R.UNPACK_SKIP_PIXELS), Ai = R.getParameter(R.UNPACK_SKIP_ROWS), Xe = R.getParameter(R.UNPACK_SKIP_IMAGES);
      R.pixelStorei(R.UNPACK_ROW_LENGTH, de.width), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, de.height), R.pixelStorei(R.UNPACK_SKIP_PIXELS, At), R.pixelStorei(R.UNPACK_SKIP_ROWS, Nt), R.pixelStorei(R.UNPACK_SKIP_IMAGES, Ot), E.isDataTexture || E.isData3DTexture ? R.texSubImage3D(Ct, N, Rt, Qt, re, it, xt, Et, We, Jt, de.data) : U.isCompressedArrayTexture ? R.compressedTexSubImage3D(Ct, N, Rt, Qt, re, it, xt, Et, We, de.data) : R.texSubImage3D(Ct, N, Rt, Qt, re, it, xt, Et, We, Jt, de), R.pixelStorei(R.UNPACK_ROW_LENGTH, Re), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, $t), R.pixelStorei(R.UNPACK_SKIP_PIXELS, hn), R.pixelStorei(R.UNPACK_SKIP_ROWS, Ai), R.pixelStorei(R.UNPACK_SKIP_IMAGES, Xe), N === 0 && U.generateMipmaps && R.generateMipmap(Ct), at.unbindTexture();
    }, this.initRenderTarget = function(E) {
      _t.get(E).__webglFramebuffer === void 0 && w.setupRenderTarget(E);
    }, this.initTexture = function(E) {
      E.isCubeTexture ? w.setTextureCube(E, 0) : E.isData3DTexture ? w.setTexture3D(E, 0) : E.isDataArrayTexture || E.isCompressedArrayTexture ? w.setTexture2DArray(E, 0) : w.setTexture2D(E, 0), at.unbindTexture();
    }, this.resetState = function() {
      C = 0, b = 0, A = null, at.reset(), Zt.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return 2e3;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    const e = this.getContext();
    e.drawingBufferColorSpace = t === $a ? "display-p3" : "srgb", e.unpackColorSpace = jt.workingColorSpace === Ds ? "display-p3" : "srgb";
  }
}
class km extends Ce {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new yn(), this.environmentIntensity = 1, this.environmentRotation = new yn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}
class Vm extends Ue {
  constructor(t = null, e = 1, n = 1, i, s, a, o, l, c = 1003, u = 1003, h, f) {
    super(null, a, o, l, c, u, i, s, h, f), this.isDataTexture = !0, this.image = { data: t, width: e, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class gl extends Qe {
  constructor(t, e, n, i = 1) {
    super(t, e, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
  }
  copy(t) {
    return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t;
  }
}
const zi = /* @__PURE__ */ new ee(), vl = /* @__PURE__ */ new ee(), ls = [], xl = /* @__PURE__ */ new Si(), Hm = /* @__PURE__ */ new ee(), fr = /* @__PURE__ */ new ae(), dr = /* @__PURE__ */ new Fr();
class Wm extends ae {
  constructor(t, e, n) {
    super(t, e), this.isInstancedMesh = !0, this.instanceMatrix = new gl(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, Hm);
  }
  computeBoundingBox() {
    const t = this.geometry, e = this.count;
    this.boundingBox === null && (this.boundingBox = new Si()), t.boundingBox === null && t.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < e; n++)
      this.getMatrixAt(n, zi), xl.copy(t.boundingBox).applyMatrix4(zi), this.boundingBox.union(xl);
  }
  computeBoundingSphere() {
    const t = this.geometry, e = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Fr()), t.boundingSphere === null && t.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < e; n++)
      this.getMatrixAt(n, zi), dr.copy(t.boundingSphere).applyMatrix4(zi), this.boundingSphere.union(dr);
  }
  copy(t, e) {
    return super.copy(t, e), this.instanceMatrix.copy(t.instanceMatrix), t.morphTexture !== null && (this.morphTexture = t.morphTexture.clone()), t.instanceColor !== null && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone()), t.boundingSphere !== null && (this.boundingSphere = t.boundingSphere.clone()), this;
  }
  getColorAt(t, e) {
    e.fromArray(this.instanceColor.array, t * 3);
  }
  getMatrixAt(t, e) {
    e.fromArray(this.instanceMatrix.array, t * 16);
  }
  getMorphAt(t, e) {
    const n = e.morphTargetInfluences, i = this.morphTexture.source.data.data, s = n.length + 1, a = t * s + 1;
    for (let o = 0; o < n.length; o++)
      n[o] = i[a + o];
  }
  raycast(t, e) {
    const n = this.matrixWorld, i = this.count;
    if (fr.geometry = this.geometry, fr.material = this.material, fr.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), dr.copy(this.boundingSphere), dr.applyMatrix4(n), t.ray.intersectsSphere(dr) !== !1))
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, zi), vl.multiplyMatrices(n, zi), fr.matrixWorld = vl, fr.raycast(t, ls);
        for (let a = 0, o = ls.length; a < o; a++) {
          const l = ls[a];
          l.instanceId = s, l.object = this, e.push(l);
        }
        ls.length = 0;
      }
  }
  setColorAt(t, e) {
    this.instanceColor === null && (this.instanceColor = new gl(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), e.toArray(this.instanceColor.array, t * 3);
  }
  setMatrixAt(t, e) {
    e.toArray(this.instanceMatrix.array, t * 16);
  }
  setMorphAt(t, e) {
    const n = e.morphTargetInfluences, i = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new Vm(new Float32Array(i * this.count), i, this.count, 1028, 1015));
    const s = this.morphTexture.source.data.data;
    let a = 0;
    for (let c = 0; c < n.length; c++)
      a += n[c];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a, l = i * t;
    s[l] = o, s.set(n, l + 1);
  }
  updateMorphTargets() {
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null), this;
  }
}
class fc extends Ue {
  constructor(t, e, n, i, s, a, o, l, c) {
    super(t, e, n, i, s, a, o, l, c), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class En {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }
  // Virtual base class method to overwrite and implement in subclasses
  //	- t [0 .. 1]
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  // Get point at relative position in curve according to arc length
  // - u [0 .. 1]
  getPointAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getPoint(n, e);
  }
  // Get sequence of points using getPoint( t )
  getPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPoint(n / t));
    return e;
  }
  // Get sequence of points using getPointAt( u )
  getSpacedPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPointAt(n / t));
    return e;
  }
  // Get total curve arc length
  getLength() {
    const t = this.getLengths();
    return t[t.length - 1];
  }
  // Get list of cumulative segment lengths
  getLengths(t = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const e = [];
    let n, i = this.getPoint(0), s = 0;
    e.push(0);
    for (let a = 1; a <= t; a++)
      n = this.getPoint(a / t), s += n.distanceTo(i), e.push(s), i = n;
    return this.cacheArcLengths = e, e;
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.getLengths();
  }
  // Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
  getUtoTmapping(t, e) {
    const n = this.getLengths();
    let i = 0;
    const s = n.length;
    let a;
    e ? a = e : a = t * n[s - 1];
    let o = 0, l = s - 1, c;
    for (; o <= l; )
      if (i = Math.floor(o + (l - o) / 2), c = n[i] - a, c < 0)
        o = i + 1;
      else if (c > 0)
        l = i - 1;
      else {
        l = i;
        break;
      }
    if (i = l, n[i] === a)
      return i / (s - 1);
    const u = n[i], f = n[i + 1] - u, d = (a - u) / f;
    return (i + d) / (s - 1);
  }
  // Returns a unit vector tangent at t
  // In case any sub curve does not implement its tangent derivation,
  // 2 points a small delta apart will be used to find its gradient
  // which seems to give a reasonable approximation
  getTangent(t, e) {
    let i = t - 1e-4, s = t + 1e-4;
    i < 0 && (i = 0), s > 1 && (s = 1);
    const a = this.getPoint(i), o = this.getPoint(s), l = e || (a.isVector2 ? new ot() : new D());
    return l.copy(o).sub(a).normalize(), l;
  }
  getTangentAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getTangent(n, e);
  }
  computeFrenetFrames(t, e) {
    const n = new D(), i = [], s = [], a = [], o = new D(), l = new ee();
    for (let d = 0; d <= t; d++) {
      const g = d / t;
      i[d] = this.getTangentAt(g, new D());
    }
    s[0] = new D(), a[0] = new D();
    let c = Number.MAX_VALUE;
    const u = Math.abs(i[0].x), h = Math.abs(i[0].y), f = Math.abs(i[0].z);
    u <= c && (c = u, n.set(1, 0, 0)), h <= c && (c = h, n.set(0, 1, 0)), f <= c && n.set(0, 0, 1), o.crossVectors(i[0], n).normalize(), s[0].crossVectors(i[0], o), a[0].crossVectors(i[0], s[0]);
    for (let d = 1; d <= t; d++) {
      if (s[d] = s[d - 1].clone(), a[d] = a[d - 1].clone(), o.crossVectors(i[d - 1], i[d]), o.length() > Number.EPSILON) {
        o.normalize();
        const g = Math.acos(Ee(i[d - 1].dot(i[d]), -1, 1));
        s[d].applyMatrix4(l.makeRotationAxis(o, g));
      }
      a[d].crossVectors(i[d], s[d]);
    }
    if (e === !0) {
      let d = Math.acos(Ee(s[0].dot(s[t]), -1, 1));
      d /= t, i[0].dot(o.crossVectors(s[0], s[t])) > 0 && (d = -d);
      for (let g = 1; g <= t; g++)
        s[g].applyMatrix4(l.makeRotationAxis(i[g], d * g)), a[g].crossVectors(i[g], s[g]);
    }
    return {
      tangents: i,
      normals: s,
      binormals: a
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t;
  }
  fromJSON(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
}
class eo extends En {
  constructor(t = 0, e = 0, n = 1, i = 1, s = 0, a = Math.PI * 2, o = !1, l = 0) {
    super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = n, this.yRadius = i, this.aStartAngle = s, this.aEndAngle = a, this.aClockwise = o, this.aRotation = l;
  }
  getPoint(t, e = new ot()) {
    const n = e, i = Math.PI * 2;
    let s = this.aEndAngle - this.aStartAngle;
    const a = Math.abs(s) < Number.EPSILON;
    for (; s < 0; ) s += i;
    for (; s > i; ) s -= i;
    s < Number.EPSILON && (a ? s = 0 : s = i), this.aClockwise === !0 && !a && (s === i ? s = -i : s = s - i);
    const o = this.aStartAngle + t * s;
    let l = this.aX + this.xRadius * Math.cos(o), c = this.aY + this.yRadius * Math.sin(o);
    if (this.aRotation !== 0) {
      const u = Math.cos(this.aRotation), h = Math.sin(this.aRotation), f = l - this.aX, d = c - this.aY;
      l = f * u - d * h + this.aX, c = f * h + d * u + this.aY;
    }
    return n.set(l, c);
  }
  copy(t) {
    return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
  }
}
class Xm extends eo {
  constructor(t, e, n, i, s, a) {
    super(t, e, n, n, i, s, a), this.isArcCurve = !0, this.type = "ArcCurve";
  }
}
function no() {
  let r = 0, t = 0, e = 0, n = 0;
  function i(s, a, o, l) {
    r = s, t = o, e = -3 * s + 3 * a - 2 * o - l, n = 2 * s - 2 * a + o + l;
  }
  return {
    initCatmullRom: function(s, a, o, l, c) {
      i(a, o, c * (o - s), c * (l - a));
    },
    initNonuniformCatmullRom: function(s, a, o, l, c, u, h) {
      let f = (a - s) / c - (o - s) / (c + u) + (o - a) / u, d = (o - a) / u - (l - a) / (u + h) + (l - o) / h;
      f *= u, d *= u, i(a, o, f, d);
    },
    calc: function(s) {
      const a = s * s, o = a * s;
      return r + t * s + e * a + n * o;
    }
  };
}
const cs = /* @__PURE__ */ new D(), _a = /* @__PURE__ */ new no(), ga = /* @__PURE__ */ new no(), va = /* @__PURE__ */ new no();
class dc extends En {
  constructor(t = [], e = !1, n = "centripetal", i = 0.5) {
    super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = n, this.tension = i;
  }
  getPoint(t, e = new D()) {
    const n = e, i = this.points, s = i.length, a = (s - (this.closed ? 0 : 1)) * t;
    let o = Math.floor(a), l = a - o;
    this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / s) + 1) * s : l === 0 && o === s - 1 && (o = s - 2, l = 1);
    let c, u;
    this.closed || o > 0 ? c = i[(o - 1) % s] : (cs.subVectors(i[0], i[1]).add(i[0]), c = cs);
    const h = i[o % s], f = i[(o + 1) % s];
    if (this.closed || o + 2 < s ? u = i[(o + 2) % s] : (cs.subVectors(i[s - 1], i[s - 2]).add(i[s - 1]), u = cs), this.curveType === "centripetal" || this.curveType === "chordal") {
      const d = this.curveType === "chordal" ? 0.5 : 0.25;
      let g = Math.pow(c.distanceToSquared(h), d), _ = Math.pow(h.distanceToSquared(f), d), p = Math.pow(f.distanceToSquared(u), d);
      _ < 1e-4 && (_ = 1), g < 1e-4 && (g = _), p < 1e-4 && (p = _), _a.initNonuniformCatmullRom(c.x, h.x, f.x, u.x, g, _, p), ga.initNonuniformCatmullRom(c.y, h.y, f.y, u.y, g, _, p), va.initNonuniformCatmullRom(c.z, h.z, f.z, u.z, g, _, p);
    } else this.curveType === "catmullrom" && (_a.initCatmullRom(c.x, h.x, f.x, u.x, this.tension), ga.initCatmullRom(c.y, h.y, f.y, u.y, this.tension), va.initCatmullRom(c.z, h.z, f.z, u.z, this.tension));
    return n.set(
      _a.calc(l),
      ga.calc(l),
      va.calc(l)
    ), n;
  }
  copy(t) {
    super.copy(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e];
      this.points.push(i.clone());
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      const i = this.points[e];
      t.points.push(i.toArray());
    }
    return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e];
      this.points.push(new D().fromArray(i));
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
  }
}
function Sl(r, t, e, n, i) {
  const s = (n - t) * 0.5, a = (i - e) * 0.5, o = r * r, l = r * o;
  return (2 * e - 2 * n + s + a) * l + (-3 * e + 3 * n - 2 * s - a) * o + s * r + e;
}
function qm(r, t) {
  const e = 1 - r;
  return e * e * t;
}
function Ym(r, t) {
  return 2 * (1 - r) * r * t;
}
function Km(r, t) {
  return r * r * t;
}
function xr(r, t, e, n) {
  return qm(r, t) + Ym(r, e) + Km(r, n);
}
function Zm(r, t) {
  const e = 1 - r;
  return e * e * e * t;
}
function Jm(r, t) {
  const e = 1 - r;
  return 3 * e * e * r * t;
}
function $m(r, t) {
  return 3 * (1 - r) * r * r * t;
}
function jm(r, t) {
  return r * r * r * t;
}
function Sr(r, t, e, n, i) {
  return Zm(r, t) + Jm(r, e) + $m(r, n) + jm(r, i);
}
class pc extends En {
  constructor(t = new ot(), e = new ot(), n = new ot(), i = new ot()) {
    super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i;
  }
  getPoint(t, e = new ot()) {
    const n = e, i = this.v0, s = this.v1, a = this.v2, o = this.v3;
    return n.set(
      Sr(t, i.x, s.x, a.x, o.x),
      Sr(t, i.y, s.y, a.y, o.y)
    ), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
  }
}
class Qm extends En {
  constructor(t = new D(), e = new D(), n = new D(), i = new D()) {
    super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i;
  }
  getPoint(t, e = new D()) {
    const n = e, i = this.v0, s = this.v1, a = this.v2, o = this.v3;
    return n.set(
      Sr(t, i.x, s.x, a.x, o.x),
      Sr(t, i.y, s.y, a.y, o.y),
      Sr(t, i.z, s.z, a.z, o.z)
    ), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
  }
}
class mc extends En {
  constructor(t = new ot(), e = new ot()) {
    super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = t, this.v2 = e;
  }
  getPoint(t, e = new ot()) {
    const n = e;
    return t === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new ot()) {
    return e.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(t, e) {
    return this.getTangent(t, e);
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class t_ extends En {
  constructor(t = new D(), e = new D()) {
    super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = t, this.v2 = e;
  }
  getPoint(t, e = new D()) {
    const n = e;
    return t === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new D()) {
    return e.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(t, e) {
    return this.getTangent(t, e);
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class _c extends En {
  constructor(t = new ot(), e = new ot(), n = new ot()) {
    super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n;
  }
  getPoint(t, e = new ot()) {
    const n = e, i = this.v0, s = this.v1, a = this.v2;
    return n.set(
      xr(t, i.x, s.x, a.x),
      xr(t, i.y, s.y, a.y)
    ), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class gc extends En {
  constructor(t = new D(), e = new D(), n = new D()) {
    super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n;
  }
  getPoint(t, e = new D()) {
    const n = e, i = this.v0, s = this.v1, a = this.v2;
    return n.set(
      xr(t, i.x, s.x, a.x),
      xr(t, i.y, s.y, a.y),
      xr(t, i.z, s.z, a.z)
    ), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class vc extends En {
  constructor(t = []) {
    super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = t;
  }
  getPoint(t, e = new ot()) {
    const n = e, i = this.points, s = (i.length - 1) * t, a = Math.floor(s), o = s - a, l = i[a === 0 ? a : a - 1], c = i[a], u = i[a > i.length - 2 ? i.length - 1 : a + 1], h = i[a > i.length - 3 ? i.length - 1 : a + 2];
    return n.set(
      Sl(o, l.x, c.x, u.x, h.x),
      Sl(o, l.y, c.y, u.y, h.y)
    ), n;
  }
  copy(t) {
    super.copy(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e];
      this.points.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      const i = this.points[e];
      t.points.push(i.toArray());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e];
      this.points.push(new ot().fromArray(i));
    }
    return this;
  }
}
var ys = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: Xm,
  CatmullRomCurve3: dc,
  CubicBezierCurve: pc,
  CubicBezierCurve3: Qm,
  EllipseCurve: eo,
  LineCurve: mc,
  LineCurve3: t_,
  QuadraticBezierCurve: _c,
  QuadraticBezierCurve3: gc,
  SplineCurve: vc
});
class e_ extends En {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
  }
  add(t) {
    this.curves.push(t);
  }
  closePath() {
    const t = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
    if (!t.equals(e)) {
      const n = t.isVector2 === !0 ? "LineCurve" : "LineCurve3";
      this.curves.push(new ys[n](e, t));
    }
    return this;
  }
  // To get accurate point with reference to
  // entire path distance at time t,
  // following has to be done:
  // 1. Length of each sub path have to be known
  // 2. Locate and identify type of curve
  // 3. Get t for the curve
  // 4. Return curve.getPointAt(t')
  getPoint(t, e) {
    const n = t * this.getLength(), i = this.getCurveLengths();
    let s = 0;
    for (; s < i.length; ) {
      if (i[s] >= n) {
        const a = i[s] - n, o = this.curves[s], l = o.getLength(), c = l === 0 ? 0 : 1 - a / l;
        return o.getPointAt(c, e);
      }
      s++;
    }
    return null;
  }
  // We cannot use the default THREE.Curve getPoint() with getLength() because in
  // THREE.Curve, getLength() depends on getPoint() but in THREE.CurvePath
  // getPoint() depends on getLength
  getLength() {
    const t = this.getCurveLengths();
    return t[t.length - 1];
  }
  // cacheLengths must be recalculated.
  updateArcLengths() {
    this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
  }
  // Compute lengths and cache them
  // We cannot overwrite getLengths() because UtoT mapping uses it.
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const t = [];
    let e = 0;
    for (let n = 0, i = this.curves.length; n < i; n++)
      e += this.curves[n].getLength(), t.push(e);
    return this.cacheLengths = t, t;
  }
  getSpacedPoints(t = 40) {
    const e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPoint(n / t));
    return this.autoClose && e.push(e[0]), e;
  }
  getPoints(t = 12) {
    const e = [];
    let n;
    for (let i = 0, s = this.curves; i < s.length; i++) {
      const a = s[i], o = a.isEllipseCurve ? t * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? t * a.points.length : t, l = a.getPoints(o);
      for (let c = 0; c < l.length; c++) {
        const u = l[c];
        n && n.equals(u) || (e.push(u), n = u);
      }
    }
    return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
  }
  copy(t) {
    super.copy(t), this.curves = [];
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const i = t.curves[e];
      this.curves.push(i.clone());
    }
    return this.autoClose = t.autoClose, this;
  }
  toJSON() {
    const t = super.toJSON();
    t.autoClose = this.autoClose, t.curves = [];
    for (let e = 0, n = this.curves.length; e < n; e++) {
      const i = this.curves[e];
      t.curves.push(i.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.autoClose = t.autoClose, this.curves = [];
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const i = t.curves[e];
      this.curves.push(new ys[i.type]().fromJSON(i));
    }
    return this;
  }
}
class Ml extends e_ {
  constructor(t) {
    super(), this.type = "Path", this.currentPoint = new ot(), t && this.setFromPoints(t);
  }
  setFromPoints(t) {
    this.moveTo(t[0].x, t[0].y);
    for (let e = 1, n = t.length; e < n; e++)
      this.lineTo(t[e].x, t[e].y);
    return this;
  }
  moveTo(t, e) {
    return this.currentPoint.set(t, e), this;
  }
  lineTo(t, e) {
    const n = new mc(this.currentPoint.clone(), new ot(t, e));
    return this.curves.push(n), this.currentPoint.set(t, e), this;
  }
  quadraticCurveTo(t, e, n, i) {
    const s = new _c(
      this.currentPoint.clone(),
      new ot(t, e),
      new ot(n, i)
    );
    return this.curves.push(s), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(t, e, n, i, s, a) {
    const o = new pc(
      this.currentPoint.clone(),
      new ot(t, e),
      new ot(n, i),
      new ot(s, a)
    );
    return this.curves.push(o), this.currentPoint.set(s, a), this;
  }
  splineThru(t) {
    const e = [this.currentPoint.clone()].concat(t), n = new vc(e);
    return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this;
  }
  arc(t, e, n, i, s, a) {
    const o = this.currentPoint.x, l = this.currentPoint.y;
    return this.absarc(
      t + o,
      e + l,
      n,
      i,
      s,
      a
    ), this;
  }
  absarc(t, e, n, i, s, a) {
    return this.absellipse(t, e, n, n, i, s, a), this;
  }
  ellipse(t, e, n, i, s, a, o, l) {
    const c = this.currentPoint.x, u = this.currentPoint.y;
    return this.absellipse(t + c, e + u, n, i, s, a, o, l), this;
  }
  absellipse(t, e, n, i, s, a, o, l) {
    const c = new eo(t, e, n, i, s, a, o, l);
    if (this.curves.length > 0) {
      const h = c.getPoint(0);
      h.equals(this.currentPoint) || this.lineTo(h.x, h.y);
    }
    this.curves.push(c);
    const u = c.getPoint(1);
    return this.currentPoint.copy(u), this;
  }
  copy(t) {
    return super.copy(t), this.currentPoint.copy(t.currentPoint), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.currentPoint = this.currentPoint.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this;
  }
}
class io extends un {
  constructor(t = [new ot(0, -0.5), new ot(0.5, 0), new ot(0, 0.5)], e = 12, n = 0, i = Math.PI * 2) {
    super(), this.type = "LatheGeometry", this.parameters = {
      points: t,
      segments: e,
      phiStart: n,
      phiLength: i
    }, e = Math.floor(e), i = Ee(i, 0, Math.PI * 2);
    const s = [], a = [], o = [], l = [], c = [], u = 1 / e, h = new D(), f = new ot(), d = new D(), g = new D(), _ = new D();
    let p = 0, m = 0;
    for (let y = 0; y <= t.length - 1; y++)
      switch (y) {
        case 0:
          p = t[y + 1].x - t[y].x, m = t[y + 1].y - t[y].y, d.x = m * 1, d.y = -p, d.z = m * 0, _.copy(d), d.normalize(), l.push(d.x, d.y, d.z);
          break;
        case t.length - 1:
          l.push(_.x, _.y, _.z);
          break;
        default:
          p = t[y + 1].x - t[y].x, m = t[y + 1].y - t[y].y, d.x = m * 1, d.y = -p, d.z = m * 0, g.copy(d), d.x += _.x, d.y += _.y, d.z += _.z, d.normalize(), l.push(d.x, d.y, d.z), _.copy(g);
      }
    for (let y = 0; y <= e; y++) {
      const x = n + y * u * i, S = Math.sin(x), C = Math.cos(x);
      for (let b = 0; b <= t.length - 1; b++) {
        h.x = t[b].x * S, h.y = t[b].y, h.z = t[b].x * C, a.push(h.x, h.y, h.z), f.x = y / e, f.y = b / (t.length - 1), o.push(f.x, f.y);
        const A = l[3 * b + 0] * S, P = l[3 * b + 1], L = l[3 * b + 0] * C;
        c.push(A, P, L);
      }
    }
    for (let y = 0; y < e; y++)
      for (let x = 0; x < t.length - 1; x++) {
        const S = x + y * t.length, C = S, b = S + t.length, A = S + t.length + 1, P = S + 1;
        s.push(C, b, P), s.push(A, P, b);
      }
    this.setIndex(s), this.setAttribute("position", new ge(a, 3)), this.setAttribute("uv", new ge(o, 2)), this.setAttribute("normal", new ge(c, 3));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new io(t.points, t.segments, t.phiStart, t.phiLength);
  }
}
class Dn extends un {
  constructor(t = 1, e = 1, n = 1, i = 32, s = 1, a = !1, o = 0, l = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: t,
      radiusBottom: e,
      height: n,
      radialSegments: i,
      heightSegments: s,
      openEnded: a,
      thetaStart: o,
      thetaLength: l
    };
    const c = this;
    i = Math.floor(i), s = Math.floor(s);
    const u = [], h = [], f = [], d = [];
    let g = 0;
    const _ = [], p = n / 2;
    let m = 0;
    y(), a === !1 && (t > 0 && x(!0), e > 0 && x(!1)), this.setIndex(u), this.setAttribute("position", new ge(h, 3)), this.setAttribute("normal", new ge(f, 3)), this.setAttribute("uv", new ge(d, 2));
    function y() {
      const S = new D(), C = new D();
      let b = 0;
      const A = (e - t) / n;
      for (let P = 0; P <= s; P++) {
        const L = [], v = P / s, T = v * (e - t) + t;
        for (let G = 0; G <= i; G++) {
          const F = G / i, B = F * l + o, q = Math.sin(B), O = Math.cos(B);
          C.x = T * q, C.y = -v * n + p, C.z = T * O, h.push(C.x, C.y, C.z), S.set(q, A, O).normalize(), f.push(S.x, S.y, S.z), d.push(F, 1 - v), L.push(g++);
        }
        _.push(L);
      }
      for (let P = 0; P < i; P++)
        for (let L = 0; L < s; L++) {
          const v = _[L][P], T = _[L + 1][P], G = _[L + 1][P + 1], F = _[L][P + 1];
          t > 0 && (u.push(v, T, F), b += 3), e > 0 && (u.push(T, G, F), b += 3);
        }
      c.addGroup(m, b, 0), m += b;
    }
    function x(S) {
      const C = g, b = new ot(), A = new D();
      let P = 0;
      const L = S === !0 ? t : e, v = S === !0 ? 1 : -1;
      for (let G = 1; G <= i; G++)
        h.push(0, p * v, 0), f.push(0, v, 0), d.push(0.5, 0.5), g++;
      const T = g;
      for (let G = 0; G <= i; G++) {
        const B = G / i * l + o, q = Math.cos(B), O = Math.sin(B);
        A.x = L * O, A.y = p * v, A.z = L * q, h.push(A.x, A.y, A.z), f.push(0, v, 0), b.x = q * 0.5 + 0.5, b.y = O * 0.5 * v + 0.5, d.push(b.x, b.y), g++;
      }
      for (let G = 0; G < i; G++) {
        const F = C + G, B = T + G;
        S === !0 ? u.push(B, B + 1, F) : u.push(B + 1, B, F), P += 3;
      }
      c.addGroup(m, P, S === !0 ? 1 : 2), m += P;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Dn(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
class ro extends Ml {
  constructor(t) {
    super(t), this.uuid = ir(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(t) {
    const e = [];
    for (let n = 0, i = this.holes.length; n < i; n++)
      e[n] = this.holes[n].getPoints(t);
    return e;
  }
  // get points of shape and holes (keypoints based on segments parameter)
  extractPoints(t) {
    return {
      shape: this.getPoints(t),
      holes: this.getPointsHoles(t)
    };
  }
  copy(t) {
    super.copy(t), this.holes = [];
    for (let e = 0, n = t.holes.length; e < n; e++) {
      const i = t.holes[e];
      this.holes.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    t.uuid = this.uuid, t.holes = [];
    for (let e = 0, n = this.holes.length; e < n; e++) {
      const i = this.holes[e];
      t.holes.push(i.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.uuid = t.uuid, this.holes = [];
    for (let e = 0, n = t.holes.length; e < n; e++) {
      const i = t.holes[e];
      this.holes.push(new Ml().fromJSON(i));
    }
    return this;
  }
}
const n_ = {
  triangulate: function(r, t, e = 2) {
    const n = t && t.length, i = n ? t[0] * e : r.length;
    let s = xc(r, 0, i, e, !0);
    const a = [];
    if (!s || s.next === s.prev) return a;
    let o, l, c, u, h, f, d;
    if (n && (s = o_(r, t, s, e)), r.length > 80 * e) {
      o = c = r[0], l = u = r[1];
      for (let g = e; g < i; g += e)
        h = r[g], f = r[g + 1], h < o && (o = h), f < l && (l = f), h > c && (c = h), f > u && (u = f);
      d = Math.max(c - o, u - l), d = d !== 0 ? 32767 / d : 0;
    }
    return Ar(s, a, e, o, l, d, 0), a;
  }
};
function xc(r, t, e, n, i) {
  let s, a;
  if (i === v_(r, t, e, n) > 0)
    for (s = t; s < e; s += n) a = yl(s, r[s], r[s + 1], a);
  else
    for (s = e - n; s >= t; s -= n) a = yl(s, r[s], r[s + 1], a);
  return a && Is(a, a.next) && (wr(a), a = a.next), a;
}
function xi(r, t) {
  if (!r) return r;
  t || (t = r);
  let e = r, n;
  do
    if (n = !1, !e.steiner && (Is(e, e.next) || he(e.prev, e, e.next) === 0)) {
      if (wr(e), e = t = e.prev, e === e.next) break;
      n = !0;
    } else
      e = e.next;
  while (n || e !== t);
  return t;
}
function Ar(r, t, e, n, i, s, a) {
  if (!r) return;
  !a && s && f_(r, n, i, s);
  let o = r, l, c;
  for (; r.prev !== r.next; ) {
    if (l = r.prev, c = r.next, s ? r_(r, n, i, s) : i_(r)) {
      t.push(l.i / e | 0), t.push(r.i / e | 0), t.push(c.i / e | 0), wr(r), r = c.next, o = c.next;
      continue;
    }
    if (r = c, r === o) {
      a ? a === 1 ? (r = s_(xi(r), t, e), Ar(r, t, e, n, i, s, 2)) : a === 2 && a_(r, t, e, n, i, s) : Ar(xi(r), t, e, n, i, s, 1);
      break;
    }
  }
}
function i_(r) {
  const t = r.prev, e = r, n = r.next;
  if (he(t, e, n) >= 0) return !1;
  const i = t.x, s = e.x, a = n.x, o = t.y, l = e.y, c = n.y, u = i < s ? i < a ? i : a : s < a ? s : a, h = o < l ? o < c ? o : c : l < c ? l : c, f = i > s ? i > a ? i : a : s > a ? s : a, d = o > l ? o > c ? o : c : l > c ? l : c;
  let g = n.next;
  for (; g !== t; ) {
    if (g.x >= u && g.x <= f && g.y >= h && g.y <= d && Hi(i, o, s, l, a, c, g.x, g.y) && he(g.prev, g, g.next) >= 0) return !1;
    g = g.next;
  }
  return !0;
}
function r_(r, t, e, n) {
  const i = r.prev, s = r, a = r.next;
  if (he(i, s, a) >= 0) return !1;
  const o = i.x, l = s.x, c = a.x, u = i.y, h = s.y, f = a.y, d = o < l ? o < c ? o : c : l < c ? l : c, g = u < h ? u < f ? u : f : h < f ? h : f, _ = o > l ? o > c ? o : c : l > c ? l : c, p = u > h ? u > f ? u : f : h > f ? h : f, m = Ia(d, g, t, e, n), y = Ia(_, p, t, e, n);
  let x = r.prevZ, S = r.nextZ;
  for (; x && x.z >= m && S && S.z <= y; ) {
    if (x.x >= d && x.x <= _ && x.y >= g && x.y <= p && x !== i && x !== a && Hi(o, u, l, h, c, f, x.x, x.y) && he(x.prev, x, x.next) >= 0 || (x = x.prevZ, S.x >= d && S.x <= _ && S.y >= g && S.y <= p && S !== i && S !== a && Hi(o, u, l, h, c, f, S.x, S.y) && he(S.prev, S, S.next) >= 0)) return !1;
    S = S.nextZ;
  }
  for (; x && x.z >= m; ) {
    if (x.x >= d && x.x <= _ && x.y >= g && x.y <= p && x !== i && x !== a && Hi(o, u, l, h, c, f, x.x, x.y) && he(x.prev, x, x.next) >= 0) return !1;
    x = x.prevZ;
  }
  for (; S && S.z <= y; ) {
    if (S.x >= d && S.x <= _ && S.y >= g && S.y <= p && S !== i && S !== a && Hi(o, u, l, h, c, f, S.x, S.y) && he(S.prev, S, S.next) >= 0) return !1;
    S = S.nextZ;
  }
  return !0;
}
function s_(r, t, e) {
  let n = r;
  do {
    const i = n.prev, s = n.next.next;
    !Is(i, s) && Sc(i, n, n.next, s) && br(i, s) && br(s, i) && (t.push(i.i / e | 0), t.push(n.i / e | 0), t.push(s.i / e | 0), wr(n), wr(n.next), n = r = s), n = n.next;
  } while (n !== r);
  return xi(n);
}
function a_(r, t, e, n, i, s) {
  let a = r;
  do {
    let o = a.next.next;
    for (; o !== a.prev; ) {
      if (a.i !== o.i && m_(a, o)) {
        let l = Mc(a, o);
        a = xi(a, a.next), l = xi(l, l.next), Ar(a, t, e, n, i, s, 0), Ar(l, t, e, n, i, s, 0);
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== r);
}
function o_(r, t, e, n) {
  const i = [];
  let s, a, o, l, c;
  for (s = 0, a = t.length; s < a; s++)
    o = t[s] * n, l = s < a - 1 ? t[s + 1] * n : r.length, c = xc(r, o, l, n, !1), c === c.next && (c.steiner = !0), i.push(p_(c));
  for (i.sort(l_), s = 0; s < i.length; s++)
    e = c_(i[s], e);
  return e;
}
function l_(r, t) {
  return r.x - t.x;
}
function c_(r, t) {
  const e = u_(r, t);
  if (!e)
    return t;
  const n = Mc(e, r);
  return xi(n, n.next), xi(e, e.next);
}
function u_(r, t) {
  let e = t, n = -1 / 0, i;
  const s = r.x, a = r.y;
  do {
    if (a <= e.y && a >= e.next.y && e.next.y !== e.y) {
      const f = e.x + (a - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
      if (f <= s && f > n && (n = f, i = e.x < e.next.x ? e : e.next, f === s))
        return i;
    }
    e = e.next;
  } while (e !== t);
  if (!i) return null;
  const o = i, l = i.x, c = i.y;
  let u = 1 / 0, h;
  e = i;
  do
    s >= e.x && e.x >= l && s !== e.x && Hi(a < c ? s : n, a, l, c, a < c ? n : s, a, e.x, e.y) && (h = Math.abs(a - e.y) / (s - e.x), br(e, r) && (h < u || h === u && (e.x > i.x || e.x === i.x && h_(i, e))) && (i = e, u = h)), e = e.next;
  while (e !== o);
  return i;
}
function h_(r, t) {
  return he(r.prev, r, t.prev) < 0 && he(t.next, r, r.next) < 0;
}
function f_(r, t, e, n) {
  let i = r;
  do
    i.z === 0 && (i.z = Ia(i.x, i.y, t, e, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
  while (i !== r);
  i.prevZ.nextZ = null, i.prevZ = null, d_(i);
}
function d_(r) {
  let t, e, n, i, s, a, o, l, c = 1;
  do {
    for (e = r, r = null, s = null, a = 0; e; ) {
      for (a++, n = e, o = 0, t = 0; t < c && (o++, n = n.nextZ, !!n); t++)
        ;
      for (l = c; o > 0 || l > 0 && n; )
        o !== 0 && (l === 0 || !n || e.z <= n.z) ? (i = e, e = e.nextZ, o--) : (i = n, n = n.nextZ, l--), s ? s.nextZ = i : r = i, i.prevZ = s, s = i;
      e = n;
    }
    s.nextZ = null, c *= 2;
  } while (a > 1);
  return r;
}
function Ia(r, t, e, n, i) {
  return r = (r - e) * i | 0, t = (t - n) * i | 0, r = (r | r << 8) & 16711935, r = (r | r << 4) & 252645135, r = (r | r << 2) & 858993459, r = (r | r << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, r | t << 1;
}
function p_(r) {
  let t = r, e = r;
  do
    (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t), t = t.next;
  while (t !== r);
  return e;
}
function Hi(r, t, e, n, i, s, a, o) {
  return (i - a) * (t - o) >= (r - a) * (s - o) && (r - a) * (n - o) >= (e - a) * (t - o) && (e - a) * (s - o) >= (i - a) * (n - o);
}
function m_(r, t) {
  return r.next.i !== t.i && r.prev.i !== t.i && !__(r, t) && // dones't intersect other edges
  (br(r, t) && br(t, r) && g_(r, t) && // locally visible
  (he(r.prev, r, t.prev) || he(r, t.prev, t)) || // does not create opposite-facing sectors
  Is(r, t) && he(r.prev, r, r.next) > 0 && he(t.prev, t, t.next) > 0);
}
function he(r, t, e) {
  return (t.y - r.y) * (e.x - t.x) - (t.x - r.x) * (e.y - t.y);
}
function Is(r, t) {
  return r.x === t.x && r.y === t.y;
}
function Sc(r, t, e, n) {
  const i = hs(he(r, t, e)), s = hs(he(r, t, n)), a = hs(he(e, n, r)), o = hs(he(e, n, t));
  return !!(i !== s && a !== o || i === 0 && us(r, e, t) || s === 0 && us(r, n, t) || a === 0 && us(e, r, n) || o === 0 && us(e, t, n));
}
function us(r, t, e) {
  return t.x <= Math.max(r.x, e.x) && t.x >= Math.min(r.x, e.x) && t.y <= Math.max(r.y, e.y) && t.y >= Math.min(r.y, e.y);
}
function hs(r) {
  return r > 0 ? 1 : r < 0 ? -1 : 0;
}
function __(r, t) {
  let e = r;
  do {
    if (e.i !== r.i && e.next.i !== r.i && e.i !== t.i && e.next.i !== t.i && Sc(e, e.next, r, t)) return !0;
    e = e.next;
  } while (e !== r);
  return !1;
}
function br(r, t) {
  return he(r.prev, r, r.next) < 0 ? he(r, t, r.next) >= 0 && he(r, r.prev, t) >= 0 : he(r, t, r.prev) < 0 || he(r, r.next, t) < 0;
}
function g_(r, t) {
  let e = r, n = !1;
  const i = (r.x + t.x) / 2, s = (r.y + t.y) / 2;
  do
    e.y > s != e.next.y > s && e.next.y !== e.y && i < (e.next.x - e.x) * (s - e.y) / (e.next.y - e.y) + e.x && (n = !n), e = e.next;
  while (e !== r);
  return n;
}
function Mc(r, t) {
  const e = new Ua(r.i, r.x, r.y), n = new Ua(t.i, t.x, t.y), i = r.next, s = t.prev;
  return r.next = t, t.prev = r, e.next = i, i.prev = e, n.next = e, e.prev = n, s.next = n, n.prev = s, n;
}
function yl(r, t, e, n) {
  const i = new Ua(r, t, e);
  return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
}
function wr(r) {
  r.next.prev = r.prev, r.prev.next = r.next, r.prevZ && (r.prevZ.nextZ = r.nextZ), r.nextZ && (r.nextZ.prevZ = r.prevZ);
}
function Ua(r, t, e) {
  this.i = r, this.x = t, this.y = e, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function v_(r, t, e, n) {
  let i = 0;
  for (let s = t, a = e - n; s < e; s += n)
    i += (r[a] - r[s]) * (r[s + 1] + r[a + 1]), a = s;
  return i;
}
class Mr {
  // calculate area of the contour polygon
  static area(t) {
    const e = t.length;
    let n = 0;
    for (let i = e - 1, s = 0; s < e; i = s++)
      n += t[i].x * t[s].y - t[s].x * t[i].y;
    return n * 0.5;
  }
  static isClockWise(t) {
    return Mr.area(t) < 0;
  }
  static triangulateShape(t, e) {
    const n = [], i = [], s = [];
    Tl(t), El(n, t);
    let a = t.length;
    e.forEach(Tl);
    for (let l = 0; l < e.length; l++)
      i.push(a), a += e[l].length, El(n, e[l]);
    const o = n_.triangulate(n, i);
    for (let l = 0; l < o.length; l += 3)
      s.push(o.slice(l, l + 3));
    return s;
  }
}
function Tl(r) {
  const t = r.length;
  t > 2 && r[t - 1].equals(r[0]) && r.pop();
}
function El(r, t) {
  for (let e = 0; e < t.length; e++)
    r.push(t[e].x), r.push(t[e].y);
}
class Ts extends un {
  constructor(t = new ro([new ot(0.5, 0.5), new ot(-0.5, 0.5), new ot(-0.5, -0.5), new ot(0.5, -0.5)]), e = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = {
      shapes: t,
      options: e
    }, t = Array.isArray(t) ? t : [t];
    const n = this, i = [], s = [];
    for (let o = 0, l = t.length; o < l; o++) {
      const c = t[o];
      a(c);
    }
    this.setAttribute("position", new ge(i, 3)), this.setAttribute("uv", new ge(s, 2)), this.computeVertexNormals();
    function a(o) {
      const l = [], c = e.curveSegments !== void 0 ? e.curveSegments : 12, u = e.steps !== void 0 ? e.steps : 1, h = e.depth !== void 0 ? e.depth : 1;
      let f = e.bevelEnabled !== void 0 ? e.bevelEnabled : !0, d = e.bevelThickness !== void 0 ? e.bevelThickness : 0.2, g = e.bevelSize !== void 0 ? e.bevelSize : d - 0.1, _ = e.bevelOffset !== void 0 ? e.bevelOffset : 0, p = e.bevelSegments !== void 0 ? e.bevelSegments : 3;
      const m = e.extrudePath, y = e.UVGenerator !== void 0 ? e.UVGenerator : x_;
      let x, S = !1, C, b, A, P;
      m && (x = m.getSpacedPoints(u), S = !0, f = !1, C = m.computeFrenetFrames(u, !1), b = new D(), A = new D(), P = new D()), f || (p = 0, d = 0, g = 0, _ = 0);
      const L = o.extractPoints(c);
      let v = L.shape;
      const T = L.holes;
      if (!Mr.isClockWise(v)) {
        v = v.reverse();
        for (let J = 0, R = T.length; J < R; J++) {
          const st = T[J];
          Mr.isClockWise(st) && (T[J] = st.reverse());
        }
      }
      const F = Mr.triangulateShape(v, T), B = v;
      for (let J = 0, R = T.length; J < R; J++) {
        const st = T[J];
        v = v.concat(st);
      }
      function q(J, R, st) {
        return R || console.error("THREE.ExtrudeGeometry: vec does not exist"), J.clone().addScaledVector(R, st);
      }
      const O = v.length, Z = F.length;
      function W(J, R, st) {
        let nt, et, at;
        const bt = J.x - R.x, _t = J.y - R.y, w = st.x - J.x, M = st.y - J.y, z = bt * bt + _t * _t, Y = bt * M - _t * w;
        if (Math.abs(Y) > Number.EPSILON) {
          const j = Math.sqrt(z), K = Math.sqrt(w * w + M * M), yt = R.x - _t / j, ct = R.y + bt / j, dt = st.x - M / K, Bt = st.y + w / K, tt = ((dt - yt) * M - (Bt - ct) * w) / (bt * M - _t * w);
          nt = yt + bt * tt - J.x, et = ct + _t * tt - J.y;
          const gt = nt * nt + et * et;
          if (gt <= 2)
            return new ot(nt, et);
          at = Math.sqrt(gt / 2);
        } else {
          let j = !1;
          bt > Number.EPSILON ? w > Number.EPSILON && (j = !0) : bt < -Number.EPSILON ? w < -Number.EPSILON && (j = !0) : Math.sign(_t) === Math.sign(M) && (j = !0), j ? (nt = -_t, et = bt, at = Math.sqrt(z)) : (nt = bt, et = _t, at = Math.sqrt(z / 2));
        }
        return new ot(nt / at, et / at);
      }
      const lt = [];
      for (let J = 0, R = B.length, st = R - 1, nt = J + 1; J < R; J++, st++, nt++)
        st === R && (st = 0), nt === R && (nt = 0), lt[J] = W(B[J], B[st], B[nt]);
      const rt = [];
      let ht, Ft = lt.concat();
      for (let J = 0, R = T.length; J < R; J++) {
        const st = T[J];
        ht = [];
        for (let nt = 0, et = st.length, at = et - 1, bt = nt + 1; nt < et; nt++, at++, bt++)
          at === et && (at = 0), bt === et && (bt = 0), ht[nt] = W(st[nt], st[at], st[bt]);
        rt.push(ht), Ft = Ft.concat(ht);
      }
      for (let J = 0; J < p; J++) {
        const R = J / p, st = d * Math.cos(R * Math.PI / 2), nt = g * Math.sin(R * Math.PI / 2) + _;
        for (let et = 0, at = B.length; et < at; et++) {
          const bt = q(B[et], lt[et], nt);
          ut(bt.x, bt.y, -st);
        }
        for (let et = 0, at = T.length; et < at; et++) {
          const bt = T[et];
          ht = rt[et];
          for (let _t = 0, w = bt.length; _t < w; _t++) {
            const M = q(bt[_t], ht[_t], nt);
            ut(M.x, M.y, -st);
          }
        }
      }
      const Ht = g + _;
      for (let J = 0; J < O; J++) {
        const R = f ? q(v[J], Ft[J], Ht) : v[J];
        S ? (A.copy(C.normals[0]).multiplyScalar(R.x), b.copy(C.binormals[0]).multiplyScalar(R.y), P.copy(x[0]).add(A).add(b), ut(P.x, P.y, P.z)) : ut(R.x, R.y, 0);
      }
      for (let J = 1; J <= u; J++)
        for (let R = 0; R < O; R++) {
          const st = f ? q(v[R], Ft[R], Ht) : v[R];
          S ? (A.copy(C.normals[J]).multiplyScalar(st.x), b.copy(C.binormals[J]).multiplyScalar(st.y), P.copy(x[J]).add(A).add(b), ut(P.x, P.y, P.z)) : ut(st.x, st.y, h / u * J);
        }
      for (let J = p - 1; J >= 0; J--) {
        const R = J / p, st = d * Math.cos(R * Math.PI / 2), nt = g * Math.sin(R * Math.PI / 2) + _;
        for (let et = 0, at = B.length; et < at; et++) {
          const bt = q(B[et], lt[et], nt);
          ut(bt.x, bt.y, h + st);
        }
        for (let et = 0, at = T.length; et < at; et++) {
          const bt = T[et];
          ht = rt[et];
          for (let _t = 0, w = bt.length; _t < w; _t++) {
            const M = q(bt[_t], ht[_t], nt);
            S ? ut(M.x, M.y + x[u - 1].y, x[u - 1].x + st) : ut(M.x, M.y, h + st);
          }
        }
      }
      V(), Q();
      function V() {
        const J = i.length / 3;
        if (f) {
          let R = 0, st = O * R;
          for (let nt = 0; nt < Z; nt++) {
            const et = F[nt];
            Dt(et[2] + st, et[1] + st, et[0] + st);
          }
          R = u + p * 2, st = O * R;
          for (let nt = 0; nt < Z; nt++) {
            const et = F[nt];
            Dt(et[0] + st, et[1] + st, et[2] + st);
          }
        } else {
          for (let R = 0; R < Z; R++) {
            const st = F[R];
            Dt(st[2], st[1], st[0]);
          }
          for (let R = 0; R < Z; R++) {
            const st = F[R];
            Dt(st[0] + O * u, st[1] + O * u, st[2] + O * u);
          }
        }
        n.addGroup(J, i.length / 3 - J, 0);
      }
      function Q() {
        const J = i.length / 3;
        let R = 0;
        Mt(B, R), R += B.length;
        for (let st = 0, nt = T.length; st < nt; st++) {
          const et = T[st];
          Mt(et, R), R += et.length;
        }
        n.addGroup(J, i.length / 3 - J, 1);
      }
      function Mt(J, R) {
        let st = J.length;
        for (; --st >= 0; ) {
          const nt = st;
          let et = st - 1;
          et < 0 && (et = J.length - 1);
          for (let at = 0, bt = u + p * 2; at < bt; at++) {
            const _t = O * at, w = O * (at + 1), M = R + nt + _t, z = R + et + _t, Y = R + et + w, j = R + nt + w;
            Pt(M, z, Y, j);
          }
        }
      }
      function ut(J, R, st) {
        l.push(J), l.push(R), l.push(st);
      }
      function Dt(J, R, st) {
        Lt(J), Lt(R), Lt(st);
        const nt = i.length / 3, et = y.generateTopUV(n, i, nt - 3, nt - 2, nt - 1);
        zt(et[0]), zt(et[1]), zt(et[2]);
      }
      function Pt(J, R, st, nt) {
        Lt(J), Lt(R), Lt(nt), Lt(R), Lt(st), Lt(nt);
        const et = i.length / 3, at = y.generateSideWallUV(n, i, et - 6, et - 3, et - 2, et - 1);
        zt(at[0]), zt(at[1]), zt(at[3]), zt(at[1]), zt(at[2]), zt(at[3]);
      }
      function Lt(J) {
        i.push(l[J * 3 + 0]), i.push(l[J * 3 + 1]), i.push(l[J * 3 + 2]);
      }
      function zt(J) {
        s.push(J.x), s.push(J.y);
      }
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  toJSON() {
    const t = super.toJSON(), e = this.parameters.shapes, n = this.parameters.options;
    return S_(e, n, t);
  }
  static fromJSON(t, e) {
    const n = [];
    for (let s = 0, a = t.shapes.length; s < a; s++) {
      const o = e[t.shapes[s]];
      n.push(o);
    }
    const i = t.options.extrudePath;
    return i !== void 0 && (t.options.extrudePath = new ys[i.type]().fromJSON(i)), new Ts(n, t.options);
  }
}
const x_ = {
  generateTopUV: function(r, t, e, n, i) {
    const s = t[e * 3], a = t[e * 3 + 1], o = t[n * 3], l = t[n * 3 + 1], c = t[i * 3], u = t[i * 3 + 1];
    return [
      new ot(s, a),
      new ot(o, l),
      new ot(c, u)
    ];
  },
  generateSideWallUV: function(r, t, e, n, i, s) {
    const a = t[e * 3], o = t[e * 3 + 1], l = t[e * 3 + 2], c = t[n * 3], u = t[n * 3 + 1], h = t[n * 3 + 2], f = t[i * 3], d = t[i * 3 + 1], g = t[i * 3 + 2], _ = t[s * 3], p = t[s * 3 + 1], m = t[s * 3 + 2];
    return Math.abs(o - u) < Math.abs(a - c) ? [
      new ot(a, 1 - l),
      new ot(c, 1 - h),
      new ot(f, 1 - g),
      new ot(_, 1 - m)
    ] : [
      new ot(o, 1 - l),
      new ot(u, 1 - h),
      new ot(d, 1 - g),
      new ot(p, 1 - m)
    ];
  }
};
function S_(r, t, e) {
  if (e.shapes = [], Array.isArray(r))
    for (let n = 0, i = r.length; n < i; n++) {
      const s = r[n];
      e.shapes.push(s.uuid);
    }
  else
    e.shapes.push(r.uuid);
  return e.options = Object.assign({}, t), t.extrudePath !== void 0 && (e.options.extrudePath = t.extrudePath.toJSON()), e;
}
class so extends un {
  constructor(t = 1, e = 32, n = 16, i = 0, s = Math.PI * 2, a = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: t,
      widthSegments: e,
      heightSegments: n,
      phiStart: i,
      phiLength: s,
      thetaStart: a,
      thetaLength: o
    }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
    const l = Math.min(a + o, Math.PI);
    let c = 0;
    const u = [], h = new D(), f = new D(), d = [], g = [], _ = [], p = [];
    for (let m = 0; m <= n; m++) {
      const y = [], x = m / n;
      let S = 0;
      m === 0 && a === 0 ? S = 0.5 / e : m === n && l === Math.PI && (S = -0.5 / e);
      for (let C = 0; C <= e; C++) {
        const b = C / e;
        h.x = -t * Math.cos(i + b * s) * Math.sin(a + x * o), h.y = t * Math.cos(a + x * o), h.z = t * Math.sin(i + b * s) * Math.sin(a + x * o), g.push(h.x, h.y, h.z), f.copy(h).normalize(), _.push(f.x, f.y, f.z), p.push(b + S, 1 - x), y.push(c++);
      }
      u.push(y);
    }
    for (let m = 0; m < n; m++)
      for (let y = 0; y < e; y++) {
        const x = u[m][y + 1], S = u[m][y], C = u[m + 1][y], b = u[m + 1][y + 1];
        (m !== 0 || a > 0) && d.push(x, S, b), (m !== n - 1 || l < Math.PI) && d.push(S, C, b);
      }
    this.setIndex(d), this.setAttribute("position", new ge(g, 3)), this.setAttribute("normal", new ge(_, 3)), this.setAttribute("uv", new ge(p, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new so(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
  }
}
class ao extends un {
  constructor(t = new gc(new D(-1, -1, 0), new D(-1, 1, 0), new D(1, 1, 0)), e = 64, n = 1, i = 8, s = !1) {
    super(), this.type = "TubeGeometry", this.parameters = {
      path: t,
      tubularSegments: e,
      radius: n,
      radialSegments: i,
      closed: s
    };
    const a = t.computeFrenetFrames(e, s);
    this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
    const o = new D(), l = new D(), c = new ot();
    let u = new D();
    const h = [], f = [], d = [], g = [];
    _(), this.setIndex(g), this.setAttribute("position", new ge(h, 3)), this.setAttribute("normal", new ge(f, 3)), this.setAttribute("uv", new ge(d, 2));
    function _() {
      for (let x = 0; x < e; x++)
        p(x);
      p(s === !1 ? e : 0), y(), m();
    }
    function p(x) {
      u = t.getPointAt(x / e, u);
      const S = a.normals[x], C = a.binormals[x];
      for (let b = 0; b <= i; b++) {
        const A = b / i * Math.PI * 2, P = Math.sin(A), L = -Math.cos(A);
        l.x = L * S.x + P * C.x, l.y = L * S.y + P * C.y, l.z = L * S.z + P * C.z, l.normalize(), f.push(l.x, l.y, l.z), o.x = u.x + n * l.x, o.y = u.y + n * l.y, o.z = u.z + n * l.z, h.push(o.x, o.y, o.z);
      }
    }
    function m() {
      for (let x = 1; x <= e; x++)
        for (let S = 1; S <= i; S++) {
          const C = (i + 1) * (x - 1) + (S - 1), b = (i + 1) * x + (S - 1), A = (i + 1) * x + S, P = (i + 1) * (x - 1) + S;
          g.push(C, b, P), g.push(b, A, P);
        }
    }
    function y() {
      for (let x = 0; x <= e; x++)
        for (let S = 0; S <= i; S++)
          c.x = x / e, c.y = S / i, d.push(c.x, c.y);
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.path = this.parameters.path.toJSON(), t;
  }
  static fromJSON(t) {
    return new ao(
      new ys[t.path.type]().fromJSON(t.path),
      t.tubularSegments,
      t.radius,
      t.radialSegments,
      t.closed
    );
  }
}
class M_ extends Or {
  constructor(t) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Xt(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Xt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new ot(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new yn(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.defines = { STANDARD: "" }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class Gi extends M_ {
  constructor(t) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new ot(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return Ee(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(e) {
        this.ior = (1 + 0.4 * e) / (1 - 0.4 * e);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Xt(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Xt(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Xt(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(t);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(t) {
    this._anisotropy > 0 != t > 0 && this.version++, this._anisotropy = t;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(t) {
    this._clearcoat > 0 != t > 0 && this.version++, this._clearcoat = t;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(t) {
    this._iridescence > 0 != t > 0 && this.version++, this._iridescence = t;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(t) {
    this._dispersion > 0 != t > 0 && this.version++, this._dispersion = t;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(t) {
    this._sheen > 0 != t > 0 && this.version++, this._sheen = t;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(t) {
    this._transmission > 0 != t > 0 && this.version++, this._transmission = t;
  }
  copy(t) {
    return super.copy(t), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = t.anisotropy, this.anisotropyRotation = t.anisotropyRotation, this.anisotropyMap = t.anisotropyMap, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.dispersion = t.dispersion, this.ior = t.ior, this.iridescence = t.iridescence, this.iridescenceMap = t.iridescenceMap, this.iridescenceIOR = t.iridescenceIOR, this.iridescenceThicknessRange = [...t.iridescenceThicknessRange], this.iridescenceThicknessMap = t.iridescenceThicknessMap, this.sheen = t.sheen, this.sheenColor.copy(t.sheenColor), this.sheenColorMap = t.sheenColorMap, this.sheenRoughness = t.sheenRoughness, this.sheenRoughnessMap = t.sheenRoughnessMap, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this.thickness = t.thickness, this.thicknessMap = t.thicknessMap, this.attenuationDistance = t.attenuationDistance, this.attenuationColor.copy(t.attenuationColor), this.specularIntensity = t.specularIntensity, this.specularIntensityMap = t.specularIntensityMap, this.specularColor.copy(t.specularColor), this.specularColorMap = t.specularColorMap, this;
  }
}
class yc extends Ce {
  constructor(t, e = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Xt(t), this.intensity = e;
  }
  dispose() {
  }
  copy(t, e) {
    return super.copy(t, e), this.color.copy(t.color), this.intensity = t.intensity, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, this.groundColor !== void 0 && (e.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (e.object.distance = this.distance), this.angle !== void 0 && (e.object.angle = this.angle), this.decay !== void 0 && (e.object.decay = this.decay), this.penumbra !== void 0 && (e.object.penumbra = this.penumbra), this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (e.object.target = this.target.uuid), e;
  }
}
const xa = /* @__PURE__ */ new ee(), Al = /* @__PURE__ */ new D(), bl = /* @__PURE__ */ new D();
class Tc {
  constructor(t) {
    this.camera = t, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ot(512, 512), this.map = null, this.mapPass = null, this.matrix = new ee(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Qa(), this._frameExtents = new ot(1, 1), this._viewportCount = 1, this._viewports = [
      new te(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(t) {
    const e = this.camera, n = this.matrix;
    Al.setFromMatrixPosition(t.matrixWorld), e.position.copy(Al), bl.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(bl), e.updateMatrixWorld(), xa.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(xa), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(xa);
  }
  getViewport(t) {
    return this._viewports[t];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(t) {
    return this.camera = t.camera.clone(), this.intensity = t.intensity, this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const t = {};
    return this.intensity !== 1 && (t.intensity = this.intensity), this.bias !== 0 && (t.bias = this.bias), this.normalBias !== 0 && (t.normalBias = this.normalBias), this.radius !== 1 && (t.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t;
  }
}
const wl = /* @__PURE__ */ new ee(), pr = /* @__PURE__ */ new D(), Sa = /* @__PURE__ */ new D();
class y_ extends Tc {
  constructor() {
    super(new Ze(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new ot(4, 2), this._viewportCount = 6, this._viewports = [
      // These viewports map a cube-map onto a 2D texture with the
      // following orientation:
      //
      //  xzXZ
      //   y Y
      //
      // X - Positive x direction
      // x - Negative x direction
      // Y - Positive y direction
      // y - Negative y direction
      // Z - Positive z direction
      // z - Negative z direction
      // positive X
      new te(2, 1, 1, 1),
      // negative X
      new te(0, 1, 1, 1),
      // positive Z
      new te(3, 1, 1, 1),
      // negative Z
      new te(1, 1, 1, 1),
      // positive Y
      new te(3, 0, 1, 1),
      // negative Y
      new te(1, 0, 1, 1)
    ], this._cubeDirections = [
      new D(1, 0, 0),
      new D(-1, 0, 0),
      new D(0, 0, 1),
      new D(0, 0, -1),
      new D(0, 1, 0),
      new D(0, -1, 0)
    ], this._cubeUps = [
      new D(0, 1, 0),
      new D(0, 1, 0),
      new D(0, 1, 0),
      new D(0, 1, 0),
      new D(0, 0, 1),
      new D(0, 0, -1)
    ];
  }
  updateMatrices(t, e = 0) {
    const n = this.camera, i = this.matrix, s = t.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), pr.setFromMatrixPosition(t.matrixWorld), n.position.copy(pr), Sa.copy(n.position), Sa.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(Sa), n.updateMatrixWorld(), i.makeTranslation(-pr.x, -pr.y, -pr.z), wl.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(wl);
  }
}
class Rl extends yc {
  constructor(t, e, n = 0, i = 2) {
    super(t, e), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new y_();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(t) {
    this.intensity = t / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t, e) {
    return super.copy(t, e), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this;
  }
}
class T_ extends Tc {
  constructor() {
    super(new ac(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class E_ extends yc {
  constructor(t, e) {
    super(t, e), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(Ce.DEFAULT_UP), this.updateMatrix(), this.target = new Ce(), this.shadow = new T_();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
  }
}
class A_ {
  constructor(t = !0) {
    this.autoStart = t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = Cl(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let t = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const e = Cl();
      t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t;
    }
    return t;
  }
}
function Cl() {
  return performance.now();
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Ja
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ja);
function Ln(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Ec(r, t) {
  r.prototype = Object.create(t.prototype), r.prototype.constructor = r, r.__proto__ = t;
}
/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var tn = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Rr = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, oo, Pe, oe, ln = 1e8, ie = 1 / ln, Na = Math.PI * 2, b_ = Na / 4, w_ = 0, Ac = Math.sqrt, R_ = Math.cos, C_ = Math.sin, Ae = function(t) {
  return typeof t == "string";
}, pe = function(t) {
  return typeof t == "function";
}, Un = function(t) {
  return typeof t == "number";
}, lo = function(t) {
  return typeof t > "u";
}, Tn = function(t) {
  return typeof t == "object";
}, ze = function(t) {
  return t !== !1;
}, co = function() {
  return typeof window < "u";
}, fs = function(t) {
  return pe(t) || Ae(t);
}, bc = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Ne = Array.isArray, P_ = /random\([^)]+\)/g, D_ = /,\s*/g, Pl = /(?:-?\.?\d|\.)+/gi, wc = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Wi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Ma = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Rc = /[+-]=-?[.\d]+/, L_ = /[^,'"\[\]\s]+/gi, I_ = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ue, gn, Fa, uo, en = {}, Es = {}, Cc, Pc = function(t) {
  return (Es = $i(t, en)) && He;
}, ho = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, Cr = function(t, e) {
  return !e && console.warn(t);
}, Dc = function(t, e) {
  return t && (en[t] = e) && Es && (Es[t] = e) || en;
}, Pr = function() {
  return 0;
}, U_ = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, ms = {
  suppressEvents: !0,
  kill: !1
}, N_ = {
  suppressEvents: !0
}, fo = {}, Yn = [], Oa = {}, Lc, Ke = {}, ya = {}, Dl = 30, _s = [], po = "", mo = function(t) {
  var e = t[0], n, i;
  if (Tn(e) || pe(e) || (t = [t]), !(n = (e._gsap || {}).harness)) {
    for (i = _s.length; i-- && !_s[i].targetTest(e); )
      ;
    n = _s[i];
  }
  for (i = t.length; i--; )
    t[i] && (t[i]._gsap || (t[i]._gsap = new tu(t[i], n))) || t.splice(i, 1);
  return t;
}, pi = function(t) {
  return t._gsap || mo(cn(t))[0]._gsap;
}, Ic = function(t, e, n) {
  return (n = t[e]) && pe(n) ? t[e]() : lo(n) && t.getAttribute && t.getAttribute(e) || n;
}, Ge = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, _e = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, ce = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, Yi = function(t, e) {
  var n = e.charAt(0), i = parseFloat(e.substr(2));
  return t = parseFloat(t), n === "+" ? t + i : n === "-" ? t - i : n === "*" ? t * i : t / i;
}, F_ = function(t, e) {
  for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n; )
    ;
  return i < n;
}, As = function() {
  var t = Yn.length, e = Yn.slice(0), n, i;
  for (Oa = {}, Yn.length = 0, n = 0; n < t; n++)
    i = e[n], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, _o = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, Uc = function(t, e, n, i) {
  Yn.length && !Pe && As(), t.render(e, n, !!(Pe && e < 0 && _o(t))), Yn.length && !Pe && As();
}, Nc = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(L_).length < 2 ? e : Ae(t) ? t.trim() : t;
}, Fc = function(t) {
  return t;
}, nn = function(t, e) {
  for (var n in e)
    n in t || (t[n] = e[n]);
  return t;
}, O_ = function(t) {
  return function(e, n) {
    for (var i in n)
      i in e || i === "duration" && t || i === "ease" || (e[i] = n[i]);
  };
}, $i = function(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}, Ll = function r(t, e) {
  for (var n in e)
    n !== "__proto__" && n !== "constructor" && n !== "prototype" && (t[n] = Tn(e[n]) ? r(t[n] || (t[n] = {}), e[n]) : e[n]);
  return t;
}, bs = function(t, e) {
  var n = {}, i;
  for (i in t)
    i in e || (n[i] = t[i]);
  return n;
}, yr = function(t) {
  var e = t.parent || ue, n = t.keyframes ? O_(Ne(t.keyframes)) : nn;
  if (ze(t.inherit))
    for (; e; )
      n(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, B_ = function(t, e) {
  for (var n = t.length, i = n === e.length; i && n-- && t[n] === e[n]; )
    ;
  return n < 0;
}, Oc = function(t, e, n, i, s) {
  var a = t[i], o;
  if (s)
    for (o = e[s]; a && a[s] > o; )
      a = a._prev;
  return a ? (e._next = a._next, a._next = e) : (e._next = t[n], t[n] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = a, e.parent = e._dp = t, e;
}, Us = function(t, e, n, i) {
  n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
  var s = e._prev, a = e._next;
  s ? s._next = a : t[n] === e && (t[n] = a), a ? a._prev = s : t[i] === e && (t[i] = s), e._next = e._prev = e.parent = null;
}, Jn = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, mi = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var n = t; n; )
      n._dirty = 1, n = n.parent;
  return t;
}, z_ = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, Ba = function(t, e, n, i) {
  return t._startAt && (Pe ? t._startAt.revert(ms) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i));
}, G_ = function r(t) {
  return !t || t._ts && r(t.parent);
}, Il = function(t) {
  return t._repeat ? ji(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, ji = function(t, e) {
  var n = Math.floor(t = ce(t / e));
  return t && n === t ? n - 1 : n;
}, ws = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, Ns = function(t) {
  return t._end = ce(t._start + (t._tDur / Math.abs(t._ts || t._rts || ie) || 0));
}, Fs = function(t, e) {
  var n = t._dp;
  return n && n.smoothChildTiming && t._ts && (t._start = ce(n._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ns(t), n._dirty || mi(n, t)), t;
}, Bc = function(t, e) {
  var n;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (n = ws(t.rawTime(), e), (!e._dur || Gr(0, e.totalDuration(), n) - e._tTime > ie) && e.render(n, !0)), mi(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (n = t; n._dp; )
        n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
    t._zTime = -ie;
  }
}, Sn = function(t, e, n, i) {
  return e.parent && Jn(e), e._start = ce((Un(n) ? n : n || t !== ue ? an(t, n, e) : t._time) + e._delay), e._end = ce(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Oc(t, e, "_first", "_last", t._sort ? "_start" : 0), za(e) || (t._recent = e), i || Bc(t, e), t._ts < 0 && Fs(t, t._tTime), t;
}, zc = function(t, e) {
  return (en.ScrollTrigger || ho("scrollTrigger", e)) && en.ScrollTrigger.create(e, t);
}, Gc = function(t, e, n, i, s) {
  if (vo(t, e, s), !t._initted)
    return 1;
  if (!n && t._pt && !Pe && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Lc !== Je.frame)
    return Yn.push(t), t._lazy = [s, i], 1;
}, k_ = function r(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || r(e));
}, za = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, V_ = function(t, e, n, i) {
  var s = t.ratio, a = e < 0 || !e && (!t._start && k_(t) && !(!t._initted && za(t)) || (t._ts < 0 || t._dp._ts < 0) && !za(t)) ? 0 : 1, o = t._rDelay, l = 0, c, u, h;
  if (o && t._repeat && (l = Gr(0, t._tDur, e), u = ji(l, o), t._yoyo && u & 1 && (a = 1 - a), u !== ji(t._tTime, o) && (s = 1 - a, t.vars.repeatRefresh && t._initted && t.invalidate())), a !== s || Pe || i || t._zTime === ie || !e && t._zTime) {
    if (!t._initted && Gc(t, e, i, n, l))
      return;
    for (h = t._zTime, t._zTime = e || (n ? ie : 0), n || (n = e && !h), t.ratio = a, t._from && (a = 1 - a), t._time = 0, t._tTime = l, c = t._pt; c; )
      c.r(a, c.d), c = c._next;
    e < 0 && Ba(t, e, n, !0), t._onUpdate && !n && $e(t, "onUpdate"), l && t._repeat && !n && t.parent && $e(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === a && (a && Jn(t, 1), !n && !Pe && ($e(t, a ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = e);
}, H_ = function(t, e, n) {
  var i;
  if (n > e)
    for (i = t._first; i && i._start <= n; ) {
      if (i.data === "isPause" && i._start > e)
        return i;
      i = i._next;
    }
  else
    for (i = t._last; i && i._start >= n; ) {
      if (i.data === "isPause" && i._start < e)
        return i;
      i = i._prev;
    }
}, Qi = function(t, e, n, i) {
  var s = t._repeat, a = ce(e) || 0, o = t._tTime / t._tDur;
  return o && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = s ? s < 0 ? 1e10 : ce(a * (s + 1) + t._rDelay * s) : a, o > 0 && !i && Fs(t, t._tTime = t._tDur * o), t.parent && Ns(t), n || mi(t.parent, t), t;
}, Ul = function(t) {
  return t instanceof Be ? mi(t) : Qi(t, t._dur);
}, W_ = {
  _start: 0,
  endTime: Pr,
  totalDuration: Pr
}, an = function r(t, e, n) {
  var i = t.labels, s = t._recent || W_, a = t.duration() >= ln ? s.endTime(!1) : t._dur, o, l, c;
  return Ae(e) && (isNaN(e) || e in i) ? (l = e.charAt(0), c = e.substr(-1) === "%", o = e.indexOf("="), l === "<" || l === ">" ? (o >= 0 && (e = e.replace(/=/, "")), (l === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (c ? (o < 0 ? s : n).totalDuration() / 100 : 1)) : o < 0 ? (e in i || (i[e] = a), i[e]) : (l = parseFloat(e.charAt(o - 1) + e.substr(o + 1)), c && n && (l = l / 100 * (Ne(n) ? n[0] : n).totalDuration()), o > 1 ? r(t, e.substr(0, o - 1), n) + l : a + l)) : e == null ? a : +e;
}, Tr = function(t, e, n) {
  var i = Un(e[1]), s = (i ? 2 : 1) + (t < 2 ? 0 : 1), a = e[s], o, l;
  if (i && (a.duration = e[1]), a.parent = n, t) {
    for (o = a, l = n; l && !("immediateRender" in o); )
      o = l.vars.defaults || {}, l = ze(l.vars.inherit) && l.parent;
    a.immediateRender = ze(o.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[s - 1];
  }
  return new xe(e[0], a, e[s + 1]);
}, ti = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, Gr = function(t, e, n) {
  return n < t ? t : n > e ? e : n;
}, Ie = function(t, e) {
  return !Ae(t) || !(e = I_.exec(t)) ? "" : e[1];
}, X_ = function(t, e, n) {
  return ti(n, function(i) {
    return Gr(t, e, i);
  });
}, Ga = [].slice, kc = function(t, e) {
  return t && Tn(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Tn(t[0])) && !t.nodeType && t !== gn;
}, q_ = function(t, e, n) {
  return n === void 0 && (n = []), t.forEach(function(i) {
    var s;
    return Ae(i) && !e || kc(i, 1) ? (s = n).push.apply(s, cn(i)) : n.push(i);
  }) || n;
}, cn = function(t, e, n) {
  return oe && !e && oe.selector ? oe.selector(t) : Ae(t) && !n && (Fa || !tr()) ? Ga.call((e || uo).querySelectorAll(t), 0) : Ne(t) ? q_(t, n) : kc(t) ? Ga.call(t, 0) : t ? [t] : [];
}, ka = function(t) {
  return t = cn(t)[0] || Cr("Invalid scope") || {}, function(e) {
    var n = t.current || t.nativeElement || t;
    return cn(e, n.querySelectorAll ? n : n === t ? Cr("Invalid scope") || uo.createElement("div") : t);
  };
}, Vc = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, Hc = function(t) {
  if (pe(t))
    return t;
  var e = Tn(t) ? t : {
    each: t
  }, n = _i(e.ease), i = e.from || 0, s = parseFloat(e.base) || 0, a = {}, o = i > 0 && i < 1, l = isNaN(i) || o, c = e.axis, u = i, h = i;
  return Ae(i) ? u = h = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !o && l && (u = i[0], h = i[1]), function(f, d, g) {
    var _ = (g || e).length, p = a[_], m, y, x, S, C, b, A, P, L;
    if (!p) {
      if (L = e.grid === "auto" ? 0 : (e.grid || [1, ln])[1], !L) {
        for (A = -ln; A < (A = g[L++].getBoundingClientRect().left) && L < _; )
          ;
        L < _ && L--;
      }
      for (p = a[_] = [], m = l ? Math.min(L, _) * u - 0.5 : i % L, y = L === ln ? 0 : l ? _ * h / L - 0.5 : i / L | 0, A = 0, P = ln, b = 0; b < _; b++)
        x = b % L - m, S = y - (b / L | 0), p[b] = C = c ? Math.abs(c === "y" ? S : x) : Ac(x * x + S * S), C > A && (A = C), C < P && (P = C);
      i === "random" && Vc(p), p.max = A - P, p.min = P, p.v = _ = (parseFloat(e.amount) || parseFloat(e.each) * (L > _ ? _ - 1 : c ? c === "y" ? _ / L : L : Math.max(L, _ / L)) || 0) * (i === "edges" ? -1 : 1), p.b = _ < 0 ? s - _ : s, p.u = Ie(e.amount || e.each) || 0, n = n && _ < 0 ? sg(n) : n;
    }
    return _ = (p[f] - p.min) / p.max || 0, ce(p.b + (n ? n(_) : _) * p.v) + p.u;
  };
}, Va = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(n) {
    var i = ce(Math.round(parseFloat(n) / t) * t * e);
    return (i - i % 1) / e + (Un(n) ? 0 : Ie(n));
  };
}, Wc = function(t, e) {
  var n = Ne(t), i, s;
  return !n && Tn(t) && (i = n = t.radius || ln, t.values ? (t = cn(t.values), (s = !Un(t[0])) && (i *= i)) : t = Va(t.increment)), ti(e, n ? pe(t) ? function(a) {
    return s = t(a), Math.abs(s - a) <= i ? s : a;
  } : function(a) {
    for (var o = parseFloat(s ? a.x : a), l = parseFloat(s ? a.y : 0), c = ln, u = 0, h = t.length, f, d; h--; )
      s ? (f = t[h].x - o, d = t[h].y - l, f = f * f + d * d) : f = Math.abs(t[h] - o), f < c && (c = f, u = h);
    return u = !i || c <= i ? t[u] : a, s || u === a || Un(a) ? u : u + Ie(a);
  } : Va(t));
}, Xc = function(t, e, n, i) {
  return ti(Ne(t) ? !e : n === !0 ? !!(n = 0) : !i, function() {
    return Ne(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + n * 0.99)) / n) * n * i) / i;
  });
}, Y_ = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return function(i) {
    return e.reduce(function(s, a) {
      return a(s);
    }, i);
  };
}, K_ = function(t, e) {
  return function(n) {
    return t(parseFloat(n)) + (e || Ie(n));
  };
}, Z_ = function(t, e, n) {
  return Yc(t, e, 0, 1, n);
}, qc = function(t, e, n) {
  return ti(n, function(i) {
    return t[~~e(i)];
  });
}, J_ = function r(t, e, n) {
  var i = e - t;
  return Ne(t) ? qc(t, r(0, t.length), e) : ti(n, function(s) {
    return (i + (s - t) % i) % i + t;
  });
}, $_ = function r(t, e, n) {
  var i = e - t, s = i * 2;
  return Ne(t) ? qc(t, r(0, t.length - 1), e) : ti(n, function(a) {
    return a = (s + (a - t) % s) % s || 0, t + (a > i ? s - a : a);
  });
}, Dr = function(t) {
  return t.replace(P_, function(e) {
    var n = e.indexOf("[") + 1, i = e.substring(n || 7, n ? e.indexOf("]") : e.length - 1).split(D_);
    return Xc(n ? i : +i[0], n ? 0 : +i[1], +i[2] || 1e-5);
  });
}, Yc = function(t, e, n, i, s) {
  var a = e - t, o = i - n;
  return ti(s, function(l) {
    return n + ((l - t) / a * o || 0);
  });
}, j_ = function r(t, e, n, i) {
  var s = isNaN(t + e) ? 0 : function(d) {
    return (1 - d) * t + d * e;
  };
  if (!s) {
    var a = Ae(t), o = {}, l, c, u, h, f;
    if (n === !0 && (i = 1) && (n = null), a)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (Ne(t) && !Ne(e)) {
      for (u = [], h = t.length, f = h - 2, c = 1; c < h; c++)
        u.push(r(t[c - 1], t[c]));
      h--, s = function(g) {
        g *= h;
        var _ = Math.min(f, ~~g);
        return u[_](g - _);
      }, n = e;
    } else i || (t = $i(Ne(t) ? [] : {}, t));
    if (!u) {
      for (l in e)
        go.call(o, t, l, "get", e[l]);
      s = function(g) {
        return Mo(g, o) || (a ? t.p : t);
      };
    }
  }
  return ti(n, s);
}, Nl = function(t, e, n) {
  var i = t.labels, s = ln, a, o, l;
  for (a in i)
    o = i[a] - e, o < 0 == !!n && o && s > (o = Math.abs(o)) && (l = a, s = o);
  return l;
}, $e = function(t, e, n) {
  var i = t.vars, s = i[e], a = oe, o = t._ctx, l, c, u;
  if (s)
    return l = i[e + "Params"], c = i.callbackScope || t, n && Yn.length && As(), o && (oe = o), u = l ? s.apply(c, l) : s.call(c), oe = a, u;
}, gr = function(t) {
  return Jn(t), t.scrollTrigger && t.scrollTrigger.kill(!!Pe), t.progress() < 1 && $e(t, "onInterrupt"), t;
}, Xi, Kc = [], Zc = function(t) {
  if (t)
    if (t = !t.name && t.default || t, co() || t.headless) {
      var e = t.name, n = pe(t), i = e && !n && t.init ? function() {
        this._props = [];
      } : t, s = {
        init: Pr,
        render: Mo,
        add: go,
        kill: mg,
        modifier: pg,
        rawVars: 0
      }, a = {
        targetTest: 0,
        get: 0,
        getSetter: So,
        aliases: {},
        register: 0
      };
      if (tr(), t !== i) {
        if (Ke[e])
          return;
        nn(i, nn(bs(t, s), a)), $i(i.prototype, $i(s, bs(t, a))), Ke[i.prop = e] = i, t.targetTest && (_s.push(i), fo[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      Dc(e, i), t.register && t.register(He, i, ke);
    } else
      Kc.push(t);
}, ne = 255, vr = {
  aqua: [0, ne, ne],
  lime: [0, ne, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, ne],
  navy: [0, 0, 128],
  white: [ne, ne, ne],
  olive: [128, 128, 0],
  yellow: [ne, ne, 0],
  orange: [ne, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [ne, 0, 0],
  pink: [ne, 192, 203],
  cyan: [0, ne, ne],
  transparent: [ne, ne, ne, 0]
}, Ta = function(t, e, n) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (n - e) * t * 6 : t < 0.5 ? n : t * 3 < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * ne + 0.5 | 0;
}, Jc = function(t, e, n) {
  var i = t ? Un(t) ? [t >> 16, t >> 8 & ne, t & ne] : 0 : vr.black, s, a, o, l, c, u, h, f, d, g;
  if (!i) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), vr[t])
      i = vr[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (s = t.charAt(1), a = t.charAt(2), o = t.charAt(3), t = "#" + s + s + a + a + o + o + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return i = parseInt(t.substr(1, 6), 16), [i >> 16, i >> 8 & ne, i & ne, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & ne, t & ne];
    } else if (t.substr(0, 3) === "hsl") {
      if (i = g = t.match(Pl), !e)
        l = +i[0] % 360 / 360, c = +i[1] / 100, u = +i[2] / 100, a = u <= 0.5 ? u * (c + 1) : u + c - u * c, s = u * 2 - a, i.length > 3 && (i[3] *= 1), i[0] = Ta(l + 1 / 3, s, a), i[1] = Ta(l, s, a), i[2] = Ta(l - 1 / 3, s, a);
      else if (~t.indexOf("="))
        return i = t.match(wc), n && i.length < 4 && (i[3] = 1), i;
    } else
      i = t.match(Pl) || vr.transparent;
    i = i.map(Number);
  }
  return e && !g && (s = i[0] / ne, a = i[1] / ne, o = i[2] / ne, h = Math.max(s, a, o), f = Math.min(s, a, o), u = (h + f) / 2, h === f ? l = c = 0 : (d = h - f, c = u > 0.5 ? d / (2 - h - f) : d / (h + f), l = h === s ? (a - o) / d + (a < o ? 6 : 0) : h === a ? (o - s) / d + 2 : (s - a) / d + 4, l *= 60), i[0] = ~~(l + 0.5), i[1] = ~~(c * 100 + 0.5), i[2] = ~~(u * 100 + 0.5)), n && i.length < 4 && (i[3] = 1), i;
}, $c = function(t) {
  var e = [], n = [], i = -1;
  return t.split(Kn).forEach(function(s) {
    var a = s.match(Wi) || [];
    e.push.apply(e, a), n.push(i += a.length + 1);
  }), e.c = n, e;
}, Fl = function(t, e, n) {
  var i = "", s = (t + i).match(Kn), a = e ? "hsla(" : "rgba(", o = 0, l, c, u, h;
  if (!s)
    return t;
  if (s = s.map(function(f) {
    return (f = Jc(f, e, 1)) && a + (e ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")";
  }), n && (u = $c(t), l = n.c, l.join(i) !== u.c.join(i)))
    for (c = t.replace(Kn, "1").split(Wi), h = c.length - 1; o < h; o++)
      i += c[o] + (~l.indexOf(o) ? s.shift() || a + "0,0,0,0)" : (u.length ? u : s.length ? s : n).shift());
  if (!c)
    for (c = t.split(Kn), h = c.length - 1; o < h; o++)
      i += c[o] + s[o];
  return i + c[h];
}, Kn = function() {
  var r = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in vr)
    r += "|" + t + "\\b";
  return new RegExp(r + ")", "gi");
}(), Q_ = /hsl[a]?\(/, jc = function(t) {
  var e = t.join(" "), n;
  if (Kn.lastIndex = 0, Kn.test(e))
    return n = Q_.test(e), t[1] = Fl(t[1], n), t[0] = Fl(t[0], n, $c(t[1])), !0;
}, Lr, Je = function() {
  var r = Date.now, t = 500, e = 33, n = r(), i = n, s = 1e3 / 240, a = s, o = [], l, c, u, h, f, d, g = function _(p) {
    var m = r() - i, y = p === !0, x, S, C, b;
    if ((m > t || m < 0) && (n += m - e), i += m, C = i - n, x = C - a, (x > 0 || y) && (b = ++h.frame, f = C - h.time * 1e3, h.time = C = C / 1e3, a += x + (x >= s ? 4 : s - x), S = 1), y || (l = c(_)), S)
      for (d = 0; d < o.length; d++)
        o[d](C, f, b, p);
  };
  return h = {
    time: 0,
    frame: 0,
    tick: function() {
      g(!0);
    },
    deltaRatio: function(p) {
      return f / (1e3 / (p || 60));
    },
    wake: function() {
      Cc && (!Fa && co() && (gn = Fa = window, uo = gn.document || {}, en.gsap = He, (gn.gsapVersions || (gn.gsapVersions = [])).push(He.version), Pc(Es || gn.GreenSockGlobals || !gn.gsap && gn || {}), Kc.forEach(Zc)), u = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && h.sleep(), c = u || function(p) {
        return setTimeout(p, a - h.time * 1e3 + 1 | 0);
      }, Lr = 1, g(2));
    },
    sleep: function() {
      (u ? cancelAnimationFrame : clearTimeout)(l), Lr = 0, c = Pr;
    },
    lagSmoothing: function(p, m) {
      t = p || 1 / 0, e = Math.min(m || 33, t);
    },
    fps: function(p) {
      s = 1e3 / (p || 240), a = h.time * 1e3 + s;
    },
    add: function(p, m, y) {
      var x = m ? function(S, C, b, A) {
        p(S, C, b, A), h.remove(x);
      } : p;
      return h.remove(p), o[y ? "unshift" : "push"](x), tr(), x;
    },
    remove: function(p, m) {
      ~(m = o.indexOf(p)) && o.splice(m, 1) && d >= m && d--;
    },
    _listeners: o
  }, h;
}(), tr = function() {
  return !Lr && Je.wake();
}, qt = {}, tg = /^[\d.\-M][\d.\-,\s]/, eg = /["']/g, ng = function(t) {
  for (var e = {}, n = t.substr(1, t.length - 3).split(":"), i = n[0], s = 1, a = n.length, o, l, c; s < a; s++)
    l = n[s], o = s !== a - 1 ? l.lastIndexOf(",") : l.length, c = l.substr(0, o), e[i] = isNaN(c) ? c.replace(eg, "").trim() : +c, i = l.substr(o + 1).trim();
  return e;
}, ig = function(t) {
  var e = t.indexOf("(") + 1, n = t.indexOf(")"), i = t.indexOf("(", e);
  return t.substring(e, ~i && i < n ? t.indexOf(")", n + 1) : n);
}, rg = function(t) {
  var e = (t + "").split("("), n = qt[e[0]];
  return n && e.length > 1 && n.config ? n.config.apply(null, ~t.indexOf("{") ? [ng(e[1])] : ig(t).split(",").map(Nc)) : qt._CE && tg.test(t) ? qt._CE("", t) : n;
}, sg = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, _i = function(t, e) {
  return t && (pe(t) ? t : qt[t] || rg(t)) || e;
}, Mi = function(t, e, n, i) {
  n === void 0 && (n = function(l) {
    return 1 - e(1 - l);
  }), i === void 0 && (i = function(l) {
    return l < 0.5 ? e(l * 2) / 2 : 1 - e((1 - l) * 2) / 2;
  });
  var s = {
    easeIn: e,
    easeOut: n,
    easeInOut: i
  }, a;
  return Ge(t, function(o) {
    qt[o] = en[o] = s, qt[a = o.toLowerCase()] = n;
    for (var l in s)
      qt[a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = qt[o + "." + l] = s[l];
  }), s;
}, Qc = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, Ea = function r(t, e, n) {
  var i = e >= 1 ? e : 1, s = (n || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), a = s / Na * (Math.asin(1 / i) || 0), o = function(u) {
    return u === 1 ? 1 : i * Math.pow(2, -10 * u) * C_((u - a) * s) + 1;
  }, l = t === "out" ? o : t === "in" ? function(c) {
    return 1 - o(1 - c);
  } : Qc(o);
  return s = Na / s, l.config = function(c, u) {
    return r(t, c, u);
  }, l;
}, Aa = function r(t, e) {
  e === void 0 && (e = 1.70158);
  var n = function(a) {
    return a ? --a * a * ((e + 1) * a + e) + 1 : 0;
  }, i = t === "out" ? n : t === "in" ? function(s) {
    return 1 - n(1 - s);
  } : Qc(n);
  return i.config = function(s) {
    return r(t, s);
  }, i;
};
Ge("Linear,Quad,Cubic,Quart,Quint,Strong", function(r, t) {
  var e = t < 5 ? t + 1 : t;
  Mi(r + ",Power" + (e - 1), t ? function(n) {
    return Math.pow(n, e);
  } : function(n) {
    return n;
  }, function(n) {
    return 1 - Math.pow(1 - n, e);
  }, function(n) {
    return n < 0.5 ? Math.pow(n * 2, e) / 2 : 1 - Math.pow((1 - n) * 2, e) / 2;
  });
});
qt.Linear.easeNone = qt.none = qt.Linear.easeIn;
Mi("Elastic", Ea("in"), Ea("out"), Ea());
(function(r, t) {
  var e = 1 / t, n = 2 * e, i = 2.5 * e, s = function(o) {
    return o < e ? r * o * o : o < n ? r * Math.pow(o - 1.5 / t, 2) + 0.75 : o < i ? r * (o -= 2.25 / t) * o + 0.9375 : r * Math.pow(o - 2.625 / t, 2) + 0.984375;
  };
  Mi("Bounce", function(a) {
    return 1 - s(1 - a);
  }, s);
})(7.5625, 2.75);
Mi("Expo", function(r) {
  return Math.pow(2, 10 * (r - 1)) * r + r * r * r * r * r * r * (1 - r);
});
Mi("Circ", function(r) {
  return -(Ac(1 - r * r) - 1);
});
Mi("Sine", function(r) {
  return r === 1 ? 1 : -R_(r * b_) + 1;
});
Mi("Back", Aa("in"), Aa("out"), Aa());
qt.SteppedEase = qt.steps = en.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var n = 1 / t, i = t + (e ? 0 : 1), s = e ? 1 : 0, a = 1 - ie;
    return function(o) {
      return ((i * Gr(0, a, o) | 0) + s) * n;
    };
  }
};
Rr.ease = qt["quad.out"];
Ge("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(r) {
  return po += r + "," + r + "Params,";
});
var tu = function(t, e) {
  this.id = w_++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Ic, this.set = e ? e.getSetter : So;
}, Ir = /* @__PURE__ */ function() {
  function r(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Qi(this, +e.duration, 1, 1), this.data = e.data, oe && (this._ctx = oe, oe.data.push(this)), Lr || Je.wake();
  }
  var t = r.prototype;
  return t.delay = function(n) {
    return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay), this._delay = n, this) : this._delay;
  }, t.duration = function(n) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(n) {
    return arguments.length ? (this._dirty = 0, Qi(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(n, i) {
    if (tr(), !arguments.length)
      return this._tTime;
    var s = this._dp;
    if (s && s.smoothChildTiming && this._ts) {
      for (Fs(this, n), !s._dp || s.parent || Bc(s, this); s && s.parent; )
        s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && Sn(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== n || !this._dur && !i || this._initted && Math.abs(this._zTime) === ie || !this._initted && this._dur && n || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n), Uc(this, n, i)), this;
  }, t.time = function(n, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + Il(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), i) : this._time;
  }, t.totalProgress = function(n, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * n, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(n, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + Il(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(n, i) {
    var s = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (n - 1) * s, i) : this._repeat ? ji(this._tTime, s) + 1 : 1;
  }, t.timeScale = function(n, i) {
    if (!arguments.length)
      return this._rts === -ie ? 0 : this._rts;
    if (this._rts === n)
      return this;
    var s = this.parent && this._ts ? ws(this.parent._time, this) : this._tTime;
    return this._rts = +n || 0, this._ts = this._ps || n === -ie ? 0 : this._rts, this.totalTime(Gr(-Math.abs(this._delay), this.totalDuration(), s), i !== !1), Ns(this), z_(this);
  }, t.paused = function(n) {
    return arguments.length ? (this._ps !== n && (this._ps = n, n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (tr(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ie && (this._tTime -= ie)))), this) : this._ps;
  }, t.startTime = function(n) {
    if (arguments.length) {
      this._start = ce(n);
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && Sn(i, this, this._start - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(n) {
    return this._start + (ze(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(n) {
    var i = this.parent || this._dp;
    return i ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ws(i.rawTime(n), this) : this._tTime : this._tTime;
  }, t.revert = function(n) {
    n === void 0 && (n = N_);
    var i = Pe;
    return Pe = n, _o(this) && (this.timeline && this.timeline.revert(n), this.totalTime(-0.01, n.suppressEvents)), this.data !== "nested" && n.kill !== !1 && this.kill(), Pe = i, this;
  }, t.globalTime = function(n) {
    for (var i = this, s = arguments.length ? n : i.rawTime(); i; )
      s = i._start + s / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(n) : s;
  }, t.repeat = function(n) {
    return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n, Ul(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(n) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = n, Ul(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(n) {
    return arguments.length ? (this._yoyo = n, this) : this._yoyo;
  }, t.seek = function(n, i) {
    return this.totalTime(an(this, n), ze(i));
  }, t.restart = function(n, i) {
    return this.play().totalTime(n ? -this._delay : 0, ze(i)), this._dur || (this._zTime = -ie), this;
  }, t.play = function(n, i) {
    return n != null && this.seek(n, i), this.reversed(!1).paused(!1);
  }, t.reverse = function(n, i) {
    return n != null && this.seek(n || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, t.pause = function(n, i) {
    return n != null && this.seek(n, i), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(n) {
    return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -ie : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -ie, this;
  }, t.isActive = function() {
    var n = this.parent || this._dp, i = this._start, s;
    return !!(!n || this._ts && this._initted && n.isActive() && (s = n.rawTime(!0)) >= i && s < this.endTime(!0) - ie);
  }, t.eventCallback = function(n, i, s) {
    var a = this.vars;
    return arguments.length > 1 ? (i ? (a[n] = i, s && (a[n + "Params"] = s), n === "onUpdate" && (this._onUpdate = i)) : delete a[n], this) : a[n];
  }, t.then = function(n) {
    var i = this, s = i._prom;
    return new Promise(function(a) {
      var o = pe(n) ? n : Fc, l = function() {
        var u = i.then;
        i.then = null, s && s(), pe(o) && (o = o(i)) && (o.then || o === i) && (i.then = u), a(o), i.then = u;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? l() : i._prom = l;
    });
  }, t.kill = function() {
    gr(this);
  }, r;
}();
nn(Ir.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -ie,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Be = /* @__PURE__ */ function(r) {
  Ec(t, r);
  function t(n, i) {
    var s;
    return n === void 0 && (n = {}), s = r.call(this, n) || this, s.labels = {}, s.smoothChildTiming = !!n.smoothChildTiming, s.autoRemoveChildren = !!n.autoRemoveChildren, s._sort = ze(n.sortChildren), ue && Sn(n.parent || ue, Ln(s), i), n.reversed && s.reverse(), n.paused && s.paused(!0), n.scrollTrigger && zc(Ln(s), n.scrollTrigger), s;
  }
  var e = t.prototype;
  return e.to = function(i, s, a) {
    return Tr(0, arguments, this), this;
  }, e.from = function(i, s, a) {
    return Tr(1, arguments, this), this;
  }, e.fromTo = function(i, s, a, o) {
    return Tr(2, arguments, this), this;
  }, e.set = function(i, s, a) {
    return s.duration = 0, s.parent = this, yr(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new xe(i, s, an(this, a), 1), this;
  }, e.call = function(i, s, a) {
    return Sn(this, xe.delayedCall(0, i, s), a);
  }, e.staggerTo = function(i, s, a, o, l, c, u) {
    return a.duration = s, a.stagger = a.stagger || o, a.onComplete = c, a.onCompleteParams = u, a.parent = this, new xe(i, a, an(this, l)), this;
  }, e.staggerFrom = function(i, s, a, o, l, c, u) {
    return a.runBackwards = 1, yr(a).immediateRender = ze(a.immediateRender), this.staggerTo(i, s, a, o, l, c, u);
  }, e.staggerFromTo = function(i, s, a, o, l, c, u, h) {
    return o.startAt = a, yr(o).immediateRender = ze(o.immediateRender), this.staggerTo(i, s, o, l, c, u, h);
  }, e.render = function(i, s, a) {
    var o = this._time, l = this._dirty ? this.totalDuration() : this._tDur, c = this._dur, u = i <= 0 ? 0 : ce(i), h = this._zTime < 0 != i < 0 && (this._initted || !c), f, d, g, _, p, m, y, x, S, C, b, A;
    if (this !== ue && u > l && i >= 0 && (u = l), u !== this._tTime || a || h) {
      if (o !== this._time && c && (u += this._time - o, i += this._time - o), f = u, S = this._start, x = this._ts, m = !x, h && (c || (o = this._zTime), (i || !s) && (this._zTime = i)), this._repeat) {
        if (b = this._yoyo, p = c + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(p * 100 + i, s, a);
        if (f = ce(u % p), u === l ? (_ = this._repeat, f = c) : (C = ce(u / p), _ = ~~C, _ && _ === C && (f = c, _--), f > c && (f = c)), C = ji(this._tTime, p), !o && this._tTime && C !== _ && this._tTime - C * p - this._dur <= 0 && (C = _), b && _ & 1 && (f = c - f, A = 1), _ !== C && !this._lock) {
          var P = b && C & 1, L = P === (b && _ & 1);
          if (_ < C && (P = !P), o = P ? 0 : u % c ? c : u, this._lock = 1, this.render(o || (A ? 0 : ce(_ * p)), s, !c)._lock = 0, this._tTime = u, !s && this.parent && $e(this, "onRepeat"), this.vars.repeatRefresh && !A && (this.invalidate()._lock = 1, C = _), o && o !== this._time || m !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (c = this._dur, l = this._tDur, L && (this._lock = 2, o = P ? c : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !A && this.invalidate()), this._lock = 0, !this._ts && !m)
            return this;
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = H_(this, ce(o), ce(f)), y && (u -= f - (f = y._start))), this._tTime = u, this._time = f, this._act = !!x, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, o = 0), !o && u && c && !s && !C && ($e(this, "onStart"), this._tTime !== u))
        return this;
      if (f >= o && i >= 0)
        for (d = this._first; d; ) {
          if (g = d._next, (d._act || f >= d._start) && d._ts && y !== d) {
            if (d.parent !== this)
              return this.render(i, s, a);
            if (d.render(d._ts > 0 ? (f - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (f - d._start) * d._ts, s, a), f !== this._time || !this._ts && !m) {
              y = 0, g && (u += this._zTime = -ie);
              break;
            }
          }
          d = g;
        }
      else {
        d = this._last;
        for (var v = i < 0 ? i : f; d; ) {
          if (g = d._prev, (d._act || v <= d._end) && d._ts && y !== d) {
            if (d.parent !== this)
              return this.render(i, s, a);
            if (d.render(d._ts > 0 ? (v - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (v - d._start) * d._ts, s, a || Pe && _o(d)), f !== this._time || !this._ts && !m) {
              y = 0, g && (u += this._zTime = v ? -ie : ie);
              break;
            }
          }
          d = g;
        }
      }
      if (y && !s && (this.pause(), y.render(f >= o ? 0 : -ie)._zTime = f >= o ? 1 : -1, this._ts))
        return this._start = S, Ns(this), this.render(i, s, a);
      this._onUpdate && !s && $e(this, "onUpdate", !0), (u === l && this._tTime >= this.totalDuration() || !u && o) && (S === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((i || !c) && (u === l && this._ts > 0 || !u && this._ts < 0) && Jn(this, 1), !s && !(i < 0 && !o) && (u || o || !l) && ($e(this, u === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(i, s) {
    var a = this;
    if (Un(s) || (s = an(this, s, i)), !(i instanceof Ir)) {
      if (Ne(i))
        return i.forEach(function(o) {
          return a.add(o, s);
        }), this;
      if (Ae(i))
        return this.addLabel(i, s);
      if (pe(i))
        i = xe.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? Sn(this, i, s) : this;
  }, e.getChildren = function(i, s, a, o) {
    i === void 0 && (i = !0), s === void 0 && (s = !0), a === void 0 && (a = !0), o === void 0 && (o = -ln);
    for (var l = [], c = this._first; c; )
      c._start >= o && (c instanceof xe ? s && l.push(c) : (a && l.push(c), i && l.push.apply(l, c.getChildren(!0, s, a)))), c = c._next;
    return l;
  }, e.getById = function(i) {
    for (var s = this.getChildren(1, 1, 1), a = s.length; a--; )
      if (s[a].vars.id === i)
        return s[a];
  }, e.remove = function(i) {
    return Ae(i) ? this.removeLabel(i) : pe(i) ? this.killTweensOf(i) : (i.parent === this && Us(this, i), i === this._recent && (this._recent = this._last), mi(this));
  }, e.totalTime = function(i, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ce(Je.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), r.prototype.totalTime.call(this, i, s), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(i, s) {
    return this.labels[i] = an(this, s), this;
  }, e.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, e.addPause = function(i, s, a) {
    var o = xe.delayedCall(0, s || Pr, a);
    return o.data = "isPause", this._hasPause = 1, Sn(this, o, an(this, i));
  }, e.removePause = function(i) {
    var s = this._first;
    for (i = an(this, i); s; )
      s._start === i && s.data === "isPause" && Jn(s), s = s._next;
  }, e.killTweensOf = function(i, s, a) {
    for (var o = this.getTweensOf(i, a), l = o.length; l--; )
      Wn !== o[l] && o[l].kill(i, s);
    return this;
  }, e.getTweensOf = function(i, s) {
    for (var a = [], o = cn(i), l = this._first, c = Un(s), u; l; )
      l instanceof xe ? F_(l._targets, o) && (c ? (!Wn || l._initted && l._ts) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && a.push(l) : (u = l.getTweensOf(o, s)).length && a.push.apply(a, u), l = l._next;
    return a;
  }, e.tweenTo = function(i, s) {
    s = s || {};
    var a = this, o = an(a, i), l = s, c = l.startAt, u = l.onStart, h = l.onStartParams, f = l.immediateRender, d, g = xe.to(a, nn({
      ease: s.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: s.duration || Math.abs((o - (c && "time" in c ? c.time : a._time)) / a.timeScale()) || ie,
      onStart: function() {
        if (a.pause(), !d) {
          var p = s.duration || Math.abs((o - (c && "time" in c ? c.time : a._time)) / a.timeScale());
          g._dur !== p && Qi(g, p, 0, 1).render(g._time, !0, !0), d = 1;
        }
        u && u.apply(g, h || []);
      }
    }, s));
    return f ? g.render(0) : g;
  }, e.tweenFromTo = function(i, s, a) {
    return this.tweenTo(s, nn({
      startAt: {
        time: an(this, i)
      }
    }, a));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(i) {
    return i === void 0 && (i = this._time), Nl(this, an(this, i));
  }, e.previousLabel = function(i) {
    return i === void 0 && (i = this._time), Nl(this, an(this, i), 1);
  }, e.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + ie);
  }, e.shiftChildren = function(i, s, a) {
    a === void 0 && (a = 0);
    var o = this._first, l = this.labels, c;
    for (i = ce(i); o; )
      o._start >= a && (o._start += i, o._end += i), o = o._next;
    if (s)
      for (c in l)
        l[c] >= a && (l[c] += i);
    return mi(this);
  }, e.invalidate = function(i) {
    var s = this._first;
    for (this._lock = 0; s; )
      s.invalidate(i), s = s._next;
    return r.prototype.invalidate.call(this, i);
  }, e.clear = function(i) {
    i === void 0 && (i = !0);
    for (var s = this._first, a; s; )
      a = s._next, this.remove(s), s = a;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), mi(this);
  }, e.totalDuration = function(i) {
    var s = 0, a = this, o = a._last, l = ln, c, u, h;
    if (arguments.length)
      return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -i : i));
    if (a._dirty) {
      for (h = a.parent; o; )
        c = o._prev, o._dirty && o.totalDuration(), u = o._start, u > l && a._sort && o._ts && !a._lock ? (a._lock = 1, Sn(a, o, u - o._delay, 1)._lock = 0) : l = u, u < 0 && o._ts && (s -= u, (!h && !a._dp || h && h.smoothChildTiming) && (a._start += ce(u / a._ts), a._time -= u, a._tTime -= u), a.shiftChildren(-u, !1, -1 / 0), l = 0), o._end > s && o._ts && (s = o._end), o = c;
      Qi(a, a === ue && a._time > s ? a._time : s, 1, 1), a._dirty = 0;
    }
    return a._tDur;
  }, t.updateRoot = function(i) {
    if (ue._ts && (Uc(ue, ws(i, ue)), Lc = Je.frame), Je.frame >= Dl) {
      Dl += tn.autoSleep || 120;
      var s = ue._first;
      if ((!s || !s._ts) && tn.autoSleep && Je._listeners.length < 2) {
        for (; s && !s._ts; )
          s = s._next;
        s || Je.sleep();
      }
    }
  }, t;
}(Ir);
nn(Be.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var ag = function(t, e, n, i, s, a, o) {
  var l = new ke(this._pt, t, e, 0, 1, au, null, s), c = 0, u = 0, h, f, d, g, _, p, m, y;
  for (l.b = n, l.e = i, n += "", i += "", (m = ~i.indexOf("random(")) && (i = Dr(i)), a && (y = [n, i], a(y, t, e), n = y[0], i = y[1]), f = n.match(Ma) || []; h = Ma.exec(i); )
    g = h[0], _ = i.substring(c, h.index), d ? d = (d + 1) % 5 : _.substr(-5) === "rgba(" && (d = 1), g !== f[u++] && (p = parseFloat(f[u - 1]) || 0, l._pt = {
      _next: l._pt,
      p: _ || u === 1 ? _ : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: p,
      c: g.charAt(1) === "=" ? Yi(p, g) - p : parseFloat(g) - p,
      m: d && d < 4 ? Math.round : 0
    }, c = Ma.lastIndex);
  return l.c = c < i.length ? i.substring(c, i.length) : "", l.fp = o, (Rc.test(i) || m) && (l.e = 0), this._pt = l, l;
}, go = function(t, e, n, i, s, a, o, l, c, u) {
  pe(i) && (i = i(s || 0, t, a));
  var h = t[e], f = n !== "get" ? n : pe(h) ? c ? t[e.indexOf("set") || !pe(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](c) : t[e]() : h, d = pe(h) ? c ? hg : ru : xo, g;
  if (Ae(i) && (~i.indexOf("random(") && (i = Dr(i)), i.charAt(1) === "=" && (g = Yi(f, i) + (Ie(f) || 0), (g || g === 0) && (i = g))), !u || f !== i || Ha)
    return !isNaN(f * i) && i !== "" ? (g = new ke(this._pt, t, e, +f || 0, i - (f || 0), typeof h == "boolean" ? dg : su, 0, d), c && (g.fp = c), o && g.modifier(o, this, t), this._pt = g) : (!h && !(e in t) && ho(e, i), ag.call(this, t, e, f, i, d, l || tn.stringFilter, c));
}, og = function(t, e, n, i, s) {
  if (pe(t) && (t = Er(t, s, e, n, i)), !Tn(t) || t.style && t.nodeType || Ne(t) || bc(t))
    return Ae(t) ? Er(t, s, e, n, i) : t;
  var a = {}, o;
  for (o in t)
    a[o] = Er(t[o], s, e, n, i);
  return a;
}, eu = function(t, e, n, i, s, a) {
  var o, l, c, u;
  if (Ke[t] && (o = new Ke[t]()).init(s, o.rawVars ? e[t] : og(e[t], i, s, a, n), n, i, a) !== !1 && (n._pt = l = new ke(n._pt, s, t, 0, 1, o.render, o, 0, o.priority), n !== Xi))
    for (c = n._ptLookup[n._targets.indexOf(s)], u = o._props.length; u--; )
      c[o._props[u]] = l;
  return o;
}, Wn, Ha, vo = function r(t, e, n) {
  var i = t.vars, s = i.ease, a = i.startAt, o = i.immediateRender, l = i.lazy, c = i.onUpdate, u = i.runBackwards, h = i.yoyoEase, f = i.keyframes, d = i.autoRevert, g = t._dur, _ = t._startAt, p = t._targets, m = t.parent, y = m && m.data === "nested" ? m.vars.targets : p, x = t._overwrite === "auto" && !oo, S = t.timeline, C = i.easeReverse || h, b, A, P, L, v, T, G, F, B, q, O, Z, W;
  if (S && (!f || !s) && (s = "none"), t._ease = _i(s, Rr.ease), t._rEase = C && (_i(C) || t._ease), t._from = !S && !!i.runBackwards, t._from && (t.ratio = 1), !S || f && !i.stagger) {
    if (F = p[0] ? pi(p[0]).harness : 0, Z = F && i[F.prop], b = bs(i, fo), _ && (_._zTime < 0 && _.progress(1), e < 0 && u && o && !d ? _.render(-1, !0) : _.revert(u && g ? ms : U_), _._lazy = 0), a) {
      if (Jn(t._startAt = xe.set(p, nn({
        data: "isStart",
        overwrite: !1,
        parent: m,
        immediateRender: !0,
        lazy: !_ && ze(l),
        startAt: null,
        delay: 0,
        onUpdate: c && function() {
          return $e(t, "onUpdate");
        },
        stagger: 0
      }, a))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Pe || !o && !d) && t._startAt.revert(ms), o && g && e <= 0 && n <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (u && g && !_) {
      if (e && (o = !1), P = nn({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && !_ && ze(l),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: m
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, b), Z && (P[F.prop] = Z), Jn(t._startAt = xe.set(p, P)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Pe ? t._startAt.revert(ms) : t._startAt.render(-1, !0)), t._zTime = e, !o)
        r(t._startAt, ie, ie);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, l = g && ze(l) || l && !g, A = 0; A < p.length; A++) {
      if (v = p[A], G = v._gsap || mo(p)[A]._gsap, t._ptLookup[A] = q = {}, Oa[G.id] && Yn.length && As(), O = y === p ? A : y.indexOf(v), F && (B = new F()).init(v, Z || b, t, O, y) !== !1 && (t._pt = L = new ke(t._pt, v, B.name, 0, 1, B.render, B, 0, B.priority), B._props.forEach(function(lt) {
        q[lt] = L;
      }), B.priority && (T = 1)), !F || Z)
        for (P in b)
          Ke[P] && (B = eu(P, b, t, O, v, y)) ? B.priority && (T = 1) : q[P] = L = go.call(t, v, P, "get", b[P], O, y, 0, i.stringFilter);
      t._op && t._op[A] && t.kill(v, t._op[A]), x && t._pt && (Wn = t, ue.killTweensOf(v, q, t.globalTime(e)), W = !t.parent, Wn = 0), t._pt && l && (Oa[G.id] = 1);
    }
    T && ou(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = c, t._initted = (!t._op || t._pt) && !W, f && e <= 0 && S.render(ln, !0, !0);
}, lg = function(t, e, n, i, s, a, o, l) {
  var c = (t._pt && t._ptCache || (t._ptCache = {}))[e], u, h, f, d;
  if (!c)
    for (c = t._ptCache[e] = [], f = t._ptLookup, d = t._targets.length; d--; ) {
      if (u = f[d][e], u && u.d && u.d._pt)
        for (u = u.d._pt; u && u.p !== e && u.fp !== e; )
          u = u._next;
      if (!u)
        return Ha = 1, t.vars[e] = "+=0", vo(t, o), Ha = 0, l ? Cr(e + " not eligible for reset. Try splitting into individual properties") : 1;
      c.push(u);
    }
  for (d = c.length; d--; )
    h = c[d], u = h._pt || h, u.s = (i || i === 0) && !s ? i : u.s + (i || 0) + a * u.c, u.c = n - u.s, h.e && (h.e = _e(n) + Ie(h.e)), h.b && (h.b = u.s + Ie(h.b));
}, cg = function(t, e) {
  var n = t[0] ? pi(t[0]).harness : 0, i = n && n.aliases, s, a, o, l;
  if (!i)
    return e;
  s = $i({}, e);
  for (a in i)
    if (a in s)
      for (l = i[a].split(","), o = l.length; o--; )
        s[l[o]] = s[a];
  return s;
}, ug = function(t, e, n, i) {
  var s = e.ease || i || "power1.inOut", a, o;
  if (Ne(e))
    o = n[t] || (n[t] = []), e.forEach(function(l, c) {
      return o.push({
        t: c / (e.length - 1) * 100,
        v: l,
        e: s
      });
    });
  else
    for (a in e)
      o = n[a] || (n[a] = []), a === "ease" || o.push({
        t: parseFloat(t),
        v: e[a],
        e: s
      });
}, Er = function(t, e, n, i, s) {
  return pe(t) ? t.call(e, n, i, s) : Ae(t) && ~t.indexOf("random(") ? Dr(t) : t;
}, nu = po + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", iu = {};
Ge(nu + ",id,stagger,delay,duration,paused,scrollTrigger", function(r) {
  return iu[r] = 1;
});
var xe = /* @__PURE__ */ function(r) {
  Ec(t, r);
  function t(n, i, s, a) {
    var o;
    typeof i == "number" && (s.duration = i, i = s, s = null), o = r.call(this, a ? i : yr(i)) || this;
    var l = o.vars, c = l.duration, u = l.delay, h = l.immediateRender, f = l.stagger, d = l.overwrite, g = l.keyframes, _ = l.defaults, p = l.scrollTrigger, m = i.parent || ue, y = (Ne(n) || bc(n) ? Un(n[0]) : "length" in i) ? [n] : cn(n), x, S, C, b, A, P, L, v;
    if (o._targets = y.length ? mo(y) : Cr("GSAP target " + n + " not found. https://gsap.com", !tn.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = d, g || f || fs(c) || fs(u)) {
      i = o.vars;
      var T = i.easeReverse || i.yoyoEase;
      if (x = o.timeline = new Be({
        data: "nested",
        defaults: _ || {},
        targets: m && m.data === "nested" ? m.vars.targets : y
      }), x.kill(), x.parent = x._dp = Ln(o), x._start = 0, f || fs(c) || fs(u)) {
        if (b = y.length, L = f && Hc(f), Tn(f))
          for (A in f)
            ~nu.indexOf(A) && (v || (v = {}), v[A] = f[A]);
        for (S = 0; S < b; S++)
          C = bs(i, iu), C.stagger = 0, T && (C.easeReverse = T), v && $i(C, v), P = y[S], C.duration = +Er(c, Ln(o), S, P, y), C.delay = (+Er(u, Ln(o), S, P, y) || 0) - o._delay, !f && b === 1 && C.delay && (o._delay = u = C.delay, o._start += u, C.delay = 0), x.to(P, C, L ? L(S, P, y) : 0), x._ease = qt.none;
        x.duration() ? c = u = 0 : o.timeline = 0;
      } else if (g) {
        yr(nn(x.vars.defaults, {
          ease: "none"
        })), x._ease = _i(g.ease || i.ease || "none");
        var G = 0, F, B, q;
        if (Ne(g))
          g.forEach(function(O) {
            return x.to(y, O, ">");
          }), x.duration();
        else {
          C = {};
          for (A in g)
            A === "ease" || A === "easeEach" || ug(A, g[A], C, g.easeEach);
          for (A in C)
            for (F = C[A].sort(function(O, Z) {
              return O.t - Z.t;
            }), G = 0, S = 0; S < F.length; S++)
              B = F[S], q = {
                ease: B.e,
                duration: (B.t - (S ? F[S - 1].t : 0)) / 100 * c
              }, q[A] = B.v, x.to(y, q, G), G += q.duration;
          x.duration() < c && x.to({}, {
            duration: c - x.duration()
          });
        }
      }
      c || o.duration(c = x.duration());
    } else
      o.timeline = 0;
    return d === !0 && !oo && (Wn = Ln(o), ue.killTweensOf(y), Wn = 0), Sn(m, Ln(o), s), i.reversed && o.reverse(), i.paused && o.paused(!0), (h || !c && !g && o._start === ce(m._time) && ze(h) && G_(Ln(o)) && m.data !== "nested") && (o._tTime = -ie, o.render(Math.max(0, -u) || 0)), p && zc(Ln(o), p), o;
  }
  var e = t.prototype;
  return e.render = function(i, s, a) {
    var o = this._time, l = this._tDur, c = this._dur, u = i < 0, h = i > l - ie && !u ? l : i < ie ? 0 : i, f, d, g, _, p, m, y, x;
    if (!c)
      V_(this, i, s, a);
    else if (h !== this._tTime || !i || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u || this._lazy) {
      if (f = h, x = this.timeline, this._repeat) {
        if (_ = c + this._rDelay, this._repeat < -1 && u)
          return this.totalTime(_ * 100 + i, s, a);
        if (f = ce(h % _), h === l ? (g = this._repeat, f = c) : (p = ce(h / _), g = ~~p, g && g === p ? (f = c, g--) : f > c && (f = c)), m = this._yoyo && g & 1, m && (f = c - f), p = ji(this._tTime, _), f === o && !a && this._initted && g === p)
          return this._tTime = h, this;
        g !== p && this.vars.repeatRefresh && !m && !this._lock && f !== _ && this._initted && (this._lock = a = 1, this.render(ce(_ * g), !0).invalidate()._lock = 0);
      }
      if (!this._initted) {
        if (Gc(this, u ? i : f, a, s, h))
          return this._tTime = 0, this;
        if (o !== this._time && !(a && this.vars.repeatRefresh && g !== p))
          return this;
        if (c !== this._dur)
          return this.render(i, s, a);
      }
      if (this._rEase) {
        var S = f < o;
        if (S !== this._inv) {
          var C = S ? o : c - o;
          this._inv = S, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = o, this._invRecip = C ? (S ? -1 : 1) / C : 0, this._invScale = S ? -this.ratio : 1 - this.ratio, this._invEase = S ? this._rEase : this._ease;
        }
        this.ratio = y = this._invRatio + this._invScale * this._invEase((f - this._invTime) * this._invRecip);
      } else
        this.ratio = y = this._ease(f / c);
      if (this._from && (this.ratio = y = 1 - y), this._tTime = h, this._time = f, !this._act && this._ts && (this._act = 1, this._lazy = 0), !o && h && !s && !p && ($e(this, "onStart"), this._tTime !== h))
        return this;
      for (d = this._pt; d; )
        d.r(y, d.d), d = d._next;
      x && x.render(i < 0 ? i : x._dur * x._ease(f / this._dur), s, a) || this._startAt && (this._zTime = i), this._onUpdate && !s && (u && Ba(this, i, s, a), $e(this, "onUpdate")), this._repeat && g !== p && this.vars.onRepeat && !s && this.parent && $e(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (u && !this._onUpdate && Ba(this, i, !0, !0), (i || !c) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && Jn(this, 1), !s && !(u && !o) && (h || o || m) && ($e(this, h === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), r.prototype.invalidate.call(this, i);
  }, e.resetTo = function(i, s, a, o, l) {
    Lr || Je.wake(), this._ts || this.play();
    var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
    return this._initted || vo(this, c), u = this._ease(c / this._dur), lg(this, i, s, a, o, u, c, l) ? this.resetTo(i, s, a, o, 1) : (Fs(this, 0), this.parent || Oc(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(i, s) {
    if (s === void 0 && (s = "all"), !i && (!s || s === "all"))
      return this._lazy = this._pt = 0, this.parent ? gr(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Pe), this;
    if (this.timeline) {
      var a = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, s, Wn && Wn.vars.overwrite !== !0)._first || gr(this), this.parent && a !== this.timeline.totalDuration() && Qi(this, this._dur * this.timeline._tDur / a, 0, 1), this;
    }
    var o = this._targets, l = i ? cn(i) : o, c = this._ptLookup, u = this._pt, h, f, d, g, _, p, m;
    if ((!s || s === "all") && B_(o, l))
      return s === "all" && (this._pt = 0), gr(this);
    for (h = this._op = this._op || [], s !== "all" && (Ae(s) && (_ = {}, Ge(s, function(y) {
      return _[y] = 1;
    }), s = _), s = cg(o, s)), m = o.length; m--; )
      if (~l.indexOf(o[m])) {
        f = c[m], s === "all" ? (h[m] = s, g = f, d = {}) : (d = h[m] = h[m] || {}, g = s);
        for (_ in g)
          p = f && f[_], p && ((!("kill" in p.d) || p.d.kill(_) === !0) && Us(this, p, "_pt"), delete f[_]), d !== "all" && (d[_] = 1);
      }
    return this._initted && !this._pt && u && gr(this), this;
  }, t.to = function(i, s) {
    return new t(i, s, arguments[2]);
  }, t.from = function(i, s) {
    return Tr(1, arguments);
  }, t.delayedCall = function(i, s, a, o) {
    return new t(s, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: s,
      onReverseComplete: s,
      onCompleteParams: a,
      onReverseCompleteParams: a,
      callbackScope: o
    });
  }, t.fromTo = function(i, s, a) {
    return Tr(2, arguments);
  }, t.set = function(i, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new t(i, s);
  }, t.killTweensOf = function(i, s, a) {
    return ue.killTweensOf(i, s, a);
  }, t;
}(Ir);
nn(xe.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Ge("staggerTo,staggerFrom,staggerFromTo", function(r) {
  xe[r] = function() {
    var t = new Be(), e = Ga.call(arguments, 0);
    return e.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), t[r].apply(t, e);
  };
});
var xo = function(t, e, n) {
  return t[e] = n;
}, ru = function(t, e, n) {
  return t[e](n);
}, hg = function(t, e, n, i) {
  return t[e](i.fp, n);
}, fg = function(t, e, n) {
  return t.setAttribute(e, n);
}, So = function(t, e) {
  return pe(t[e]) ? ru : lo(t[e]) && t.setAttribute ? fg : xo;
}, su = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, dg = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, au = function(t, e) {
  var n = e._pt, i = "";
  if (!t && e.b)
    i = e.b;
  else if (t === 1 && e.e)
    i = e.e;
  else {
    for (; n; )
      i = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round((n.s + n.c * t) * 1e4) / 1e4) + i, n = n._next;
    i += e.c;
  }
  e.set(e.t, e.p, i, e);
}, Mo = function(t, e) {
  for (var n = e._pt; n; )
    n.r(t, n.d), n = n._next;
}, pg = function(t, e, n, i) {
  for (var s = this._pt, a; s; )
    a = s._next, s.p === i && s.modifier(t, e, n), s = a;
}, mg = function(t) {
  for (var e = this._pt, n, i; e; )
    i = e._next, e.p === t && !e.op || e.op === t ? Us(this, e, "_pt") : e.dep || (n = 1), e = i;
  return !n;
}, _g = function(t, e, n, i) {
  i.mSet(t, e, i.m.call(i.tween, n, i.mt), i);
}, ou = function(t) {
  for (var e = t._pt, n, i, s, a; e; ) {
    for (n = e._next, i = s; i && i.pr > e.pr; )
      i = i._next;
    (e._prev = i ? i._prev : a) ? e._prev._next = e : s = e, (e._next = i) ? i._prev = e : a = e, e = n;
  }
  t._pt = s;
}, ke = /* @__PURE__ */ function() {
  function r(e, n, i, s, a, o, l, c, u) {
    this.t = n, this.s = s, this.c = a, this.p = i, this.r = o || su, this.d = l || this, this.set = c || xo, this.pr = u || 0, this._next = e, e && (e._prev = this);
  }
  var t = r.prototype;
  return t.modifier = function(n, i, s) {
    this.mSet = this.mSet || this.set, this.set = _g, this.m = n, this.mt = s, this.tween = i;
  }, r;
}();
Ge(po + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(r) {
  return fo[r] = 1;
});
en.TweenMax = en.TweenLite = xe;
en.TimelineLite = en.TimelineMax = Be;
ue = new Be({
  sortChildren: !1,
  defaults: Rr,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
tn.stringFilter = jc;
var gi = [], gs = {}, gg = [], Ol = 0, vg = 0, ba = function(t) {
  return (gs[t] || gg).map(function(e) {
    return e();
  });
}, Wa = function() {
  var t = Date.now(), e = [];
  t - Ol > 2 && (ba("matchMediaInit"), gi.forEach(function(n) {
    var i = n.queries, s = n.conditions, a, o, l, c;
    for (o in i)
      a = gn.matchMedia(i[o]).matches, a && (l = 1), a !== s[o] && (s[o] = a, c = 1);
    c && (n.revert(), l && e.push(n));
  }), ba("matchMediaRevert"), e.forEach(function(n) {
    return n.onMatch(n, function(i) {
      return n.add(null, i);
    });
  }), Ol = t, ba("matchMedia"));
}, lu = /* @__PURE__ */ function() {
  function r(e, n) {
    this.selector = n && ka(n), this.data = [], this._r = [], this.isReverted = !1, this.id = vg++, e && this.add(e);
  }
  var t = r.prototype;
  return t.add = function(n, i, s) {
    pe(n) && (s = i, i = n, n = pe);
    var a = this, o = function() {
      var c = oe, u = a.selector, h;
      return c && c !== a && c.data.push(a), s && (a.selector = ka(s)), oe = a, h = i.apply(a, arguments), pe(h) && a._r.push(h), oe = c, a.selector = u, a.isReverted = !1, h;
    };
    return a.last = o, n === pe ? o(a, function(l) {
      return a.add(null, l);
    }) : n ? a[n] = o : o;
  }, t.ignore = function(n) {
    var i = oe;
    oe = null, n(this), oe = i;
  }, t.getTweens = function() {
    var n = [];
    return this.data.forEach(function(i) {
      return i instanceof r ? n.push.apply(n, i.getTweens()) : i instanceof xe && !(i.parent && i.parent.data === "nested") && n.push(i);
    }), n;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(n, i) {
    var s = this;
    if (n ? function() {
      for (var o = s.getTweens(), l = s.data.length, c; l--; )
        c = s.data[l], c.data === "isFlip" && (c.revert(), c.getChildren(!0, !0, !1).forEach(function(u) {
          return o.splice(o.indexOf(u), 1);
        }));
      for (o.map(function(u) {
        return {
          g: u._dur || u._delay || u._sat && !u._sat.vars.immediateRender ? u.globalTime(0) : -1 / 0,
          t: u
        };
      }).sort(function(u, h) {
        return h.g - u.g || -1 / 0;
      }).forEach(function(u) {
        return u.t.revert(n);
      }), l = s.data.length; l--; )
        c = s.data[l], c instanceof Be ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(), c.kill()) : !(c instanceof xe) && c.revert && c.revert(n);
      s._r.forEach(function(u) {
        return u(n, s);
      }), s.isReverted = !0;
    }() : this.data.forEach(function(o) {
      return o.kill && o.kill();
    }), this.clear(), i)
      for (var a = gi.length; a--; )
        gi[a].id === this.id && gi.splice(a, 1);
  }, t.revert = function(n) {
    this.kill(n || {});
  }, r;
}(), xg = /* @__PURE__ */ function() {
  function r(e) {
    this.contexts = [], this.scope = e, oe && oe.data.push(this);
  }
  var t = r.prototype;
  return t.add = function(n, i, s) {
    Tn(n) || (n = {
      matches: n
    });
    var a = new lu(0, s || this.scope), o = a.conditions = {}, l, c, u;
    oe && !a.selector && (a.selector = oe.selector), this.contexts.push(a), i = a.add("onMatch", i), a.queries = n;
    for (c in n)
      c === "all" ? u = 1 : (l = gn.matchMedia(n[c]), l && (gi.indexOf(a) < 0 && gi.push(a), (o[c] = l.matches) && (u = 1), l.addListener ? l.addListener(Wa) : l.addEventListener("change", Wa)));
    return u && i(a, function(h) {
      return a.add(null, h);
    }), this;
  }, t.revert = function(n) {
    this.kill(n || {});
  }, t.kill = function(n) {
    this.contexts.forEach(function(i) {
      return i.kill(n, !0);
    });
  }, r;
}(), Rs = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    e.forEach(function(i) {
      return Zc(i);
    });
  },
  timeline: function(t) {
    return new Be(t);
  },
  getTweensOf: function(t, e) {
    return ue.getTweensOf(t, e);
  },
  getProperty: function(t, e, n, i) {
    Ae(t) && (t = cn(t)[0]);
    var s = pi(t || {}).get, a = n ? Fc : Nc;
    return n === "native" && (n = ""), t && (e ? a((Ke[e] && Ke[e].get || s)(t, e, n, i)) : function(o, l, c) {
      return a((Ke[o] && Ke[o].get || s)(t, o, l, c));
    });
  },
  quickSetter: function(t, e, n) {
    if (t = cn(t), t.length > 1) {
      var i = t.map(function(u) {
        return He.quickSetter(u, e, n);
      }), s = i.length;
      return function(u) {
        for (var h = s; h--; )
          i[h](u);
      };
    }
    t = t[0] || {};
    var a = Ke[e], o = pi(t), l = o.harness && (o.harness.aliases || {})[e] || e, c = a ? function(u) {
      var h = new a();
      Xi._pt = 0, h.init(t, n ? u + n : u, Xi, 0, [t]), h.render(1, h), Xi._pt && Mo(1, Xi);
    } : o.set(t, l);
    return a ? c : function(u) {
      return c(t, l, n ? u + n : u, o, 1);
    };
  },
  quickTo: function(t, e, n) {
    var i, s = He.to(t, nn((i = {}, i[e] = "+=0.1", i.paused = !0, i.stagger = 0, i), n || {})), a = function(l, c, u) {
      return s.resetTo(e, l, c, u);
    };
    return a.tween = s, a;
  },
  isTweening: function(t) {
    return ue.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = _i(t.ease, Rr.ease)), Ll(Rr, t || {});
  },
  config: function(t) {
    return Ll(tn, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, n = t.effect, i = t.plugins, s = t.defaults, a = t.extendTimeline;
    (i || "").split(",").forEach(function(o) {
      return o && !Ke[o] && !en[o] && Cr(e + " effect requires " + o + " plugin.");
    }), ya[e] = function(o, l, c) {
      return n(cn(o), nn(l || {}, s), c);
    }, a && (Be.prototype[e] = function(o, l, c) {
      return this.add(ya[e](o, Tn(l) ? l : (c = l) && {}, this), c);
    });
  },
  registerEase: function(t, e) {
    qt[t] = _i(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? _i(t, e) : qt;
  },
  getById: function(t) {
    return ue.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var n = new Be(t), i, s;
    for (n.smoothChildTiming = ze(t.smoothChildTiming), ue.remove(n), n._dp = 0, n._time = n._tTime = ue._time, i = ue._first; i; )
      s = i._next, (e || !(!i._dur && i instanceof xe && i.vars.onComplete === i._targets[0])) && Sn(n, i, i._start - i._delay), i = s;
    return Sn(ue, n, 0), n;
  },
  context: function(t, e) {
    return t ? new lu(t, e) : oe;
  },
  matchMedia: function(t) {
    return new xg(t);
  },
  matchMediaRefresh: function() {
    return gi.forEach(function(t) {
      var e = t.conditions, n, i;
      for (i in e)
        e[i] && (e[i] = !1, n = 1);
      n && t.revert();
    }) || Wa();
  },
  addEventListener: function(t, e) {
    var n = gs[t] || (gs[t] = []);
    ~n.indexOf(e) || n.push(e);
  },
  removeEventListener: function(t, e) {
    var n = gs[t], i = n && n.indexOf(e);
    i >= 0 && n.splice(i, 1);
  },
  utils: {
    wrap: J_,
    wrapYoyo: $_,
    distribute: Hc,
    random: Xc,
    snap: Wc,
    normalize: Z_,
    getUnit: Ie,
    clamp: X_,
    splitColor: Jc,
    toArray: cn,
    selector: ka,
    mapRange: Yc,
    pipe: Y_,
    unitize: K_,
    interpolate: j_,
    shuffle: Vc
  },
  install: Pc,
  effects: ya,
  ticker: Je,
  updateRoot: Be.updateRoot,
  plugins: Ke,
  globalTimeline: ue,
  core: {
    PropTween: ke,
    globals: Dc,
    Tween: xe,
    Timeline: Be,
    Animation: Ir,
    getCache: pi,
    _removeLinkedListItem: Us,
    reverting: function() {
      return Pe;
    },
    context: function(t) {
      return t && oe && (oe.data.push(t), t._ctx = oe), oe;
    },
    suppressOverwrites: function(t) {
      return oo = t;
    }
  }
};
Ge("to,from,fromTo,delayedCall,set,killTweensOf", function(r) {
  return Rs[r] = xe[r];
});
Je.add(Be.updateRoot);
Xi = Rs.to({}, {
  duration: 0
});
var Sg = function(t, e) {
  for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
    n = n._next;
  return n;
}, Mg = function(t, e) {
  var n = t._targets, i, s, a;
  for (i in e)
    for (s = n.length; s--; )
      a = t._ptLookup[s][i], a && (a = a.d) && (a._pt && (a = Sg(a, i)), a && a.modifier && a.modifier(e[i], t, n[s], i));
}, wa = function(t, e) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, s, a) {
      a._onInit = function(o) {
        var l, c;
        if (Ae(s) && (l = {}, Ge(s, function(u) {
          return l[u] = 1;
        }), s = l), e) {
          l = {};
          for (c in s)
            l[c] = e(s[c]);
          s = l;
        }
        Mg(o, s);
      };
    }
  };
}, He = Rs.registerPlugin({
  name: "attr",
  init: function(t, e, n, i, s) {
    var a, o, l;
    this.tween = n;
    for (a in e)
      l = t.getAttribute(a) || "", o = this.add(t, "setAttribute", (l || 0) + "", e[a], i, s, 0, 0, a), o.op = a, o.b = l, this._props.push(a);
  },
  render: function(t, e) {
    for (var n = e._pt; n; )
      Pe ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), n = n._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(t, e) {
    for (var n = e.length; n--; )
      this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1);
  }
}, wa("roundProps", Va), wa("modifiers"), wa("snap", Wc)) || Rs;
xe.version = Be.version = He.version = "3.15.0";
Cc = 1;
co() && tr();
qt.Power0;
qt.Power1;
qt.Power2;
qt.Power3;
qt.Power4;
qt.Linear;
qt.Quad;
qt.Cubic;
qt.Quart;
qt.Quint;
qt.Strong;
qt.Elastic;
qt.Back;
qt.SteppedEase;
qt.Bounce;
qt.Sine;
qt.Expo;
qt.Circ;
/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Bl, Xn, Ki, yo, di, zl, To, yg = function() {
  return typeof window < "u";
}, Nn = {}, hi = 180 / Math.PI, Zi = Math.PI / 180, ki = Math.atan2, Gl = 1e8, Eo = /([A-Z])/g, Tg = /(left|right|width|margin|padding|x)/i, Eg = /[\s,\(]\S/, Mn = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Xa = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Ag = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, bg = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, wg = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Rg = function(t, e) {
  var n = e.s + e.c * t;
  e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
}, cu = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, uu = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, Cg = function(t, e, n) {
  return t.style[e] = n;
}, Pg = function(t, e, n) {
  return t.style.setProperty(e, n);
}, Dg = function(t, e, n) {
  return t._gsap[e] = n;
}, Lg = function(t, e, n) {
  return t._gsap.scaleX = t._gsap.scaleY = n;
}, Ig = function(t, e, n, i, s) {
  var a = t._gsap;
  a.scaleX = a.scaleY = n, a.renderTransform(s, a);
}, Ug = function(t, e, n, i, s) {
  var a = t._gsap;
  a[e] = n, a.renderTransform(s, a);
}, fe = "transform", Ve = fe + "Origin", Ng = function r(t, e) {
  var n = this, i = this.target, s = i.style, a = i._gsap;
  if (t in Nn && s) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = Mn[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(o) {
        return n.tfm[o] = In(i, o);
      }) : this.tfm[t] = a.x ? a[t] : In(i, t), t === Ve && (this.tfm.zOrigin = a.zOrigin);
    else
      return Mn.transform.split(",").forEach(function(o) {
        return r.call(n, o, e);
      });
    if (this.props.indexOf(fe) >= 0)
      return;
    a.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(Ve, e, "")), t = fe;
  }
  (s || e) && this.props.push(t, e, s[t]);
}, hu = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, Fg = function() {
  var t = this.props, e = this.target, n = e.style, i = e._gsap, s, a;
  for (s = 0; s < t.length; s += 3)
    t[s + 1] ? t[s + 1] === 2 ? e[t[s]](t[s + 2]) : e[t[s]] = t[s + 2] : t[s + 2] ? n[t[s]] = t[s + 2] : n.removeProperty(t[s].substr(0, 2) === "--" ? t[s] : t[s].replace(Eo, "-$1").toLowerCase());
  if (this.tfm) {
    for (a in this.tfm)
      i[a] = this.tfm[a];
    i.svg && (i.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), s = To(), (!s || !s.isStart) && !n[fe] && (hu(n), i.zOrigin && n[Ve] && (n[Ve] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, fu = function(t, e) {
  var n = {
    target: t,
    props: [],
    revert: Fg,
    save: Ng
  };
  return t._gsap || He.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(i) {
    return n.save(i);
  }), n;
}, du, qa = function(t, e) {
  var n = Xn.createElementNS ? Xn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Xn.createElement(t);
  return n && n.style ? n : Xn.createElement(t);
}, je = function r(t, e, n) {
  var i = getComputedStyle(t);
  return i[e] || i.getPropertyValue(e.replace(Eo, "-$1").toLowerCase()) || i.getPropertyValue(e) || !n && r(t, er(e) || e, 1) || "";
}, kl = "O,Moz,ms,Ms,Webkit".split(","), er = function(t, e, n) {
  var i = e || di, s = i.style, a = 5;
  if (t in s && !n)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); a-- && !(kl[a] + t in s); )
    ;
  return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? kl[a] : "") + t;
}, Ya = function() {
  yg() && window.document && (Bl = window, Xn = Bl.document, Ki = Xn.documentElement, di = qa("div") || {
    style: {}
  }, qa("div"), fe = er(fe), Ve = fe + "Origin", di.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", du = !!er("perspective"), To = He.core.reverting, yo = 1);
}, Vl = function(t) {
  var e = t.ownerSVGElement, n = qa("svg", e && e.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = t.cloneNode(!0), s;
  i.style.display = "block", n.appendChild(i), Ki.appendChild(n);
  try {
    s = i.getBBox();
  } catch {
  }
  return n.removeChild(i), Ki.removeChild(n), s;
}, Hl = function(t, e) {
  for (var n = e.length; n--; )
    if (t.hasAttribute(e[n]))
      return t.getAttribute(e[n]);
}, pu = function(t) {
  var e, n;
  try {
    e = t.getBBox();
  } catch {
    e = Vl(t), n = 1;
  }
  return e && (e.width || e.height) || n || (e = Vl(t)), e && !e.width && !e.x && !e.y ? {
    x: +Hl(t, ["x", "cx", "x1"]) || 0,
    y: +Hl(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, mu = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && pu(t));
}, $n = function(t, e) {
  if (e) {
    var n = t.style, i;
    e in Nn && e !== Ve && (e = fe), n.removeProperty ? (i = e.substr(0, 2), (i === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), n.removeProperty(i === "--" ? e : e.replace(Eo, "-$1").toLowerCase())) : n.removeAttribute(e);
  }
}, qn = function(t, e, n, i, s, a) {
  var o = new ke(t._pt, e, n, 0, 1, a ? uu : cu);
  return t._pt = o, o.b = i, o.e = s, t._props.push(n), o;
}, Wl = {
  deg: 1,
  rad: 1,
  turn: 1
}, Og = {
  grid: 1,
  flex: 1
}, jn = function r(t, e, n, i) {
  var s = parseFloat(n) || 0, a = (n + "").trim().substr((s + "").length) || "px", o = di.style, l = Tg.test(e), c = t.tagName.toLowerCase() === "svg", u = (c ? "client" : "offset") + (l ? "Width" : "Height"), h = 100, f = i === "px", d = i === "%", g, _, p, m;
  if (i === a || !s || Wl[i] || Wl[a])
    return s;
  if (a !== "px" && !f && (s = r(t, e, n, "px")), m = t.getCTM && mu(t), (d || a === "%") && (Nn[e] || ~e.indexOf("adius")))
    return g = m ? t.getBBox()[l ? "width" : "height"] : t[u], _e(d ? s / g * h : s / 100 * g);
  if (o[l ? "width" : "height"] = h + (f ? a : i), _ = i !== "rem" && ~e.indexOf("adius") || i === "em" && t.appendChild && !c ? t : t.parentNode, m && (_ = (t.ownerSVGElement || {}).parentNode), (!_ || _ === Xn || !_.appendChild) && (_ = Xn.body), p = _._gsap, p && d && p.width && l && p.time === Je.time && !p.uncache)
    return _e(s / p.width * h);
  if (d && (e === "height" || e === "width")) {
    var y = t.style[e];
    t.style[e] = h + i, g = t[u], y ? t.style[e] = y : $n(t, e);
  } else
    (d || a === "%") && !Og[je(_, "display")] && (o.position = je(t, "position")), _ === t && (o.position = "static"), _.appendChild(di), g = di[u], _.removeChild(di), o.position = "absolute";
  return l && d && (p = pi(_), p.time = Je.time, p.width = _[u]), _e(f ? g * s / h : g && s ? h / g * s : 0);
}, In = function(t, e, n, i) {
  var s;
  return yo || Ya(), e in Mn && e !== "transform" && (e = Mn[e], ~e.indexOf(",") && (e = e.split(",")[0])), Nn[e] && e !== "transform" ? (s = Nr(t, i), s = e !== "transformOrigin" ? s[e] : s.svg ? s.origin : Ps(je(t, Ve)) + " " + s.zOrigin + "px") : (s = t.style[e], (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) && (s = Cs[e] && Cs[e](t, e, n) || je(t, e) || Ic(t, e) || (e === "opacity" ? 1 : 0))), n && !~(s + "").trim().indexOf(" ") ? jn(t, e, s, n) + n : s;
}, Bg = function(t, e, n, i) {
  if (!n || n === "none") {
    var s = er(e, t, 1), a = s && je(t, s, 1);
    a && a !== n ? (e = s, n = a) : e === "borderColor" && (n = je(t, "borderTopColor"));
  }
  var o = new ke(this._pt, t.style, e, 0, 1, au), l = 0, c = 0, u, h, f, d, g, _, p, m, y, x, S, C;
  if (o.b = n, o.e = i, n += "", i += "", i.substring(0, 6) === "var(--" && (i = je(t, i.substring(4, i.indexOf(")")))), i === "auto" && (_ = t.style[e], t.style[e] = i, i = je(t, e) || i, _ ? t.style[e] = _ : $n(t, e)), u = [n, i], jc(u), n = u[0], i = u[1], f = n.match(Wi) || [], C = i.match(Wi) || [], C.length) {
    for (; h = Wi.exec(i); )
      p = h[0], y = i.substring(l, h.index), g ? g = (g + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (g = 1), p !== (_ = f[c++] || "") && (d = parseFloat(_) || 0, S = _.substr((d + "").length), p.charAt(1) === "=" && (p = Yi(d, p) + S), m = parseFloat(p), x = p.substr((m + "").length), l = Wi.lastIndex - x.length, x || (x = x || tn.units[e] || S, l === i.length && (i += x, o.e += x)), S !== x && (d = jn(t, e, _, x) || 0), o._pt = {
        _next: o._pt,
        p: y || c === 1 ? y : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: d,
        c: m - d,
        m: g && g < 4 || e === "zIndex" ? Math.round : 0
      });
    o.c = l < i.length ? i.substring(l, i.length) : "";
  } else
    o.r = e === "display" && i === "none" ? uu : cu;
  return Rc.test(i) && (o.e = 0), this._pt = o, o;
}, Xl = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, zg = function(t) {
  var e = t.split(" "), n = e[0], i = e[1] || "50%";
  return (n === "top" || n === "bottom" || i === "left" || i === "right") && (t = n, n = i, i = t), e[0] = Xl[n] || n, e[1] = Xl[i] || i, e.join(" ");
}, Gg = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var n = e.t, i = n.style, s = e.u, a = n._gsap, o, l, c;
    if (s === "all" || s === !0)
      i.cssText = "", l = 1;
    else
      for (s = s.split(","), c = s.length; --c > -1; )
        o = s[c], Nn[o] && (l = 1, o = o === "transformOrigin" ? Ve : fe), $n(n, o);
    l && ($n(n, fe), a && (a.svg && n.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", Nr(n, 1), a.uncache = 1, hu(i)));
  }
}, Cs = {
  clearProps: function(t, e, n, i, s) {
    if (s.data !== "isFromStart") {
      var a = t._pt = new ke(t._pt, e, n, 0, 0, Gg);
      return a.u = i, a.pr = -10, a.tween = s, t._props.push(n), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, Ur = [1, 0, 0, 1, 0, 0], _u = {}, gu = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, ql = function(t) {
  var e = je(t, fe);
  return gu(e) ? Ur : e.substr(7).match(wc).map(_e);
}, Ao = function(t, e) {
  var n = t._gsap || pi(t), i = t.style, s = ql(t), a, o, l, c;
  return n.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix, s = [l.a, l.b, l.c, l.d, l.e, l.f], s.join(",") === "1,0,0,1,0,0" ? Ur : s) : (s === Ur && !t.offsetParent && t !== Ki && !n.svg && (l = i.display, i.display = "block", a = t.parentNode, (!a || !t.offsetParent && !t.getBoundingClientRect().width) && (c = 1, o = t.nextElementSibling, Ki.appendChild(t)), s = ql(t), l ? i.display = l : $n(t, "display"), c && (o ? a.insertBefore(t, o) : a ? a.appendChild(t) : Ki.removeChild(t))), e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
}, Ka = function(t, e, n, i, s, a) {
  var o = t._gsap, l = s || Ao(t, !0), c = o.xOrigin || 0, u = o.yOrigin || 0, h = o.xOffset || 0, f = o.yOffset || 0, d = l[0], g = l[1], _ = l[2], p = l[3], m = l[4], y = l[5], x = e.split(" "), S = parseFloat(x[0]) || 0, C = parseFloat(x[1]) || 0, b, A, P, L;
  n ? l !== Ur && (A = d * p - g * _) && (P = S * (p / A) + C * (-_ / A) + (_ * y - p * m) / A, L = S * (-g / A) + C * (d / A) - (d * y - g * m) / A, S = P, C = L) : (b = pu(t), S = b.x + (~x[0].indexOf("%") ? S / 100 * b.width : S), C = b.y + (~(x[1] || x[0]).indexOf("%") ? C / 100 * b.height : C)), i || i !== !1 && o.smooth ? (m = S - c, y = C - u, o.xOffset = h + (m * d + y * _) - m, o.yOffset = f + (m * g + y * p) - y) : o.xOffset = o.yOffset = 0, o.xOrigin = S, o.yOrigin = C, o.smooth = !!i, o.origin = e, o.originIsAbsolute = !!n, t.style[Ve] = "0px 0px", a && (qn(a, o, "xOrigin", c, S), qn(a, o, "yOrigin", u, C), qn(a, o, "xOffset", h, o.xOffset), qn(a, o, "yOffset", f, o.yOffset)), t.setAttribute("data-svg-origin", S + " " + C);
}, Nr = function(t, e) {
  var n = t._gsap || new tu(t);
  if ("x" in n && !e && !n.uncache)
    return n;
  var i = t.style, s = n.scaleX < 0, a = "px", o = "deg", l = getComputedStyle(t), c = je(t, Ve) || "0", u, h, f, d, g, _, p, m, y, x, S, C, b, A, P, L, v, T, G, F, B, q, O, Z, W, lt, rt, ht, Ft, Ht, V, Q;
  return u = h = f = _ = p = m = y = x = S = 0, d = g = 1, n.svg = !!(t.getCTM && mu(t)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[fe] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[fe] !== "none" ? l[fe] : "")), i.scale = i.rotate = i.translate = "none"), A = Ao(t, n.svg), n.svg && (n.uncache ? (W = t.getBBox(), c = n.xOrigin - W.x + "px " + (n.yOrigin - W.y) + "px", Z = "") : Z = !e && t.getAttribute("data-svg-origin"), Ka(t, Z || c, !!Z || n.originIsAbsolute, n.smooth !== !1, A)), C = n.xOrigin || 0, b = n.yOrigin || 0, A !== Ur && (T = A[0], G = A[1], F = A[2], B = A[3], u = q = A[4], h = O = A[5], A.length === 6 ? (d = Math.sqrt(T * T + G * G), g = Math.sqrt(B * B + F * F), _ = T || G ? ki(G, T) * hi : 0, y = F || B ? ki(F, B) * hi + _ : 0, y && (g *= Math.abs(Math.cos(y * Zi))), n.svg && (u -= C - (C * T + b * F), h -= b - (C * G + b * B))) : (Q = A[6], Ht = A[7], rt = A[8], ht = A[9], Ft = A[10], V = A[11], u = A[12], h = A[13], f = A[14], P = ki(Q, Ft), p = P * hi, P && (L = Math.cos(-P), v = Math.sin(-P), Z = q * L + rt * v, W = O * L + ht * v, lt = Q * L + Ft * v, rt = q * -v + rt * L, ht = O * -v + ht * L, Ft = Q * -v + Ft * L, V = Ht * -v + V * L, q = Z, O = W, Q = lt), P = ki(-F, Ft), m = P * hi, P && (L = Math.cos(-P), v = Math.sin(-P), Z = T * L - rt * v, W = G * L - ht * v, lt = F * L - Ft * v, V = B * v + V * L, T = Z, G = W, F = lt), P = ki(G, T), _ = P * hi, P && (L = Math.cos(P), v = Math.sin(P), Z = T * L + G * v, W = q * L + O * v, G = G * L - T * v, O = O * L - q * v, T = Z, q = W), p && Math.abs(p) + Math.abs(_) > 359.9 && (p = _ = 0, m = 180 - m), d = _e(Math.sqrt(T * T + G * G + F * F)), g = _e(Math.sqrt(O * O + Q * Q)), P = ki(q, O), y = Math.abs(P) > 2e-4 ? P * hi : 0, S = V ? 1 / (V < 0 ? -V : V) : 0), n.svg && (Z = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !gu(je(t, fe)), Z && t.setAttribute("transform", Z))), Math.abs(y) > 90 && Math.abs(y) < 270 && (s ? (d *= -1, y += _ <= 0 ? 180 : -180, _ += _ <= 0 ? 180 : -180) : (g *= -1, y += y <= 0 ? 180 : -180)), e = e || n.uncache, n.x = u - ((n.xPercent = u && (!e && n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + a, n.y = h - ((n.yPercent = h && (!e && n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + a, n.z = f + a, n.scaleX = _e(d), n.scaleY = _e(g), n.rotation = _e(_) + o, n.rotationX = _e(p) + o, n.rotationY = _e(m) + o, n.skewX = y + o, n.skewY = x + o, n.transformPerspective = S + a, (n.zOrigin = parseFloat(c.split(" ")[2]) || !e && n.zOrigin || 0) && (i[Ve] = Ps(c)), n.xOffset = n.yOffset = 0, n.force3D = tn.force3D, n.renderTransform = n.svg ? Vg : du ? vu : kg, n.uncache = 0, n;
}, Ps = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, Ra = function(t, e, n) {
  var i = Ie(e);
  return _e(parseFloat(e) + parseFloat(jn(t, "x", n + "px", i))) + i;
}, kg = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, vu(t, e);
}, oi = "0deg", mr = "0px", li = ") ", vu = function(t, e) {
  var n = e || this, i = n.xPercent, s = n.yPercent, a = n.x, o = n.y, l = n.z, c = n.rotation, u = n.rotationY, h = n.rotationX, f = n.skewX, d = n.skewY, g = n.scaleX, _ = n.scaleY, p = n.transformPerspective, m = n.force3D, y = n.target, x = n.zOrigin, S = "", C = m === "auto" && t && t !== 1 || m === !0;
  if (x && (h !== oi || u !== oi)) {
    var b = parseFloat(u) * Zi, A = Math.sin(b), P = Math.cos(b), L;
    b = parseFloat(h) * Zi, L = Math.cos(b), a = Ra(y, a, A * L * -x), o = Ra(y, o, -Math.sin(b) * -x), l = Ra(y, l, P * L * -x + x);
  }
  p !== mr && (S += "perspective(" + p + li), (i || s) && (S += "translate(" + i + "%, " + s + "%) "), (C || a !== mr || o !== mr || l !== mr) && (S += l !== mr || C ? "translate3d(" + a + ", " + o + ", " + l + ") " : "translate(" + a + ", " + o + li), c !== oi && (S += "rotate(" + c + li), u !== oi && (S += "rotateY(" + u + li), h !== oi && (S += "rotateX(" + h + li), (f !== oi || d !== oi) && (S += "skew(" + f + ", " + d + li), (g !== 1 || _ !== 1) && (S += "scale(" + g + ", " + _ + li), y.style[fe] = S || "translate(0, 0)";
}, Vg = function(t, e) {
  var n = e || this, i = n.xPercent, s = n.yPercent, a = n.x, o = n.y, l = n.rotation, c = n.skewX, u = n.skewY, h = n.scaleX, f = n.scaleY, d = n.target, g = n.xOrigin, _ = n.yOrigin, p = n.xOffset, m = n.yOffset, y = n.forceCSS, x = parseFloat(a), S = parseFloat(o), C, b, A, P, L;
  l = parseFloat(l), c = parseFloat(c), u = parseFloat(u), u && (u = parseFloat(u), c += u, l += u), l || c ? (l *= Zi, c *= Zi, C = Math.cos(l) * h, b = Math.sin(l) * h, A = Math.sin(l - c) * -f, P = Math.cos(l - c) * f, c && (u *= Zi, L = Math.tan(c - u), L = Math.sqrt(1 + L * L), A *= L, P *= L, u && (L = Math.tan(u), L = Math.sqrt(1 + L * L), C *= L, b *= L)), C = _e(C), b = _e(b), A = _e(A), P = _e(P)) : (C = h, P = f, b = A = 0), (x && !~(a + "").indexOf("px") || S && !~(o + "").indexOf("px")) && (x = jn(d, "x", a, "px"), S = jn(d, "y", o, "px")), (g || _ || p || m) && (x = _e(x + g - (g * C + _ * A) + p), S = _e(S + _ - (g * b + _ * P) + m)), (i || s) && (L = d.getBBox(), x = _e(x + i / 100 * L.width), S = _e(S + s / 100 * L.height)), L = "matrix(" + C + "," + b + "," + A + "," + P + "," + x + "," + S + ")", d.setAttribute("transform", L), y && (d.style[fe] = L);
}, Hg = function(t, e, n, i, s) {
  var a = 360, o = Ae(s), l = parseFloat(s) * (o && ~s.indexOf("rad") ? hi : 1), c = l - i, u = i + c + "deg", h, f;
  return o && (h = s.split("_")[1], h === "short" && (c %= a, c !== c % (a / 2) && (c += c < 0 ? a : -a)), h === "cw" && c < 0 ? c = (c + a * Gl) % a - ~~(c / a) * a : h === "ccw" && c > 0 && (c = (c - a * Gl) % a - ~~(c / a) * a)), t._pt = f = new ke(t._pt, e, n, i, c, Ag), f.e = u, f.u = "deg", t._props.push(n), f;
}, Yl = function(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}, Wg = function(t, e, n) {
  var i = Yl({}, n._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", a = n.style, o, l, c, u, h, f, d, g;
  i.svg ? (c = n.getAttribute("transform"), n.setAttribute("transform", ""), a[fe] = e, o = Nr(n, 1), $n(n, fe), n.setAttribute("transform", c)) : (c = getComputedStyle(n)[fe], a[fe] = e, o = Nr(n, 1), a[fe] = c);
  for (l in Nn)
    c = i[l], u = o[l], c !== u && s.indexOf(l) < 0 && (d = Ie(c), g = Ie(u), h = d !== g ? jn(n, l, c, g) : parseFloat(c), f = parseFloat(u), t._pt = new ke(t._pt, o, l, h, f - h, Xa), t._pt.u = g || 0, t._props.push(l));
  Yl(o, i);
};
Ge("padding,margin,Width,Radius", function(r, t) {
  var e = "Top", n = "Right", i = "Bottom", s = "Left", a = (t < 3 ? [e, n, i, s] : [e + s, e + n, i + n, i + s]).map(function(o) {
    return t < 2 ? r + o : "border" + o + r;
  });
  Cs[t > 1 ? "border" + r : r] = function(o, l, c, u, h) {
    var f, d;
    if (arguments.length < 4)
      return f = a.map(function(g) {
        return In(o, g, c);
      }), d = f.join(" "), d.split(f[0]).length === 5 ? f[0] : d;
    f = (u + "").split(" "), d = {}, a.forEach(function(g, _) {
      return d[g] = f[_] = f[_] || f[(_ - 1) / 2 | 0];
    }), o.init(l, d, h);
  };
});
var xu = {
  name: "css",
  register: Ya,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, n, i, s) {
    var a = this._props, o = t.style, l = n.vars.startAt, c, u, h, f, d, g, _, p, m, y, x, S, C, b, A, P, L;
    yo || Ya(), this.styles = this.styles || fu(t), P = this.styles.props, this.tween = n;
    for (_ in e)
      if (_ !== "autoRound" && (u = e[_], !(Ke[_] && eu(_, e, n, i, t, s)))) {
        if (d = typeof u, g = Cs[_], d === "function" && (u = u.call(n, i, t, s), d = typeof u), d === "string" && ~u.indexOf("random(") && (u = Dr(u)), g)
          g(this, t, _, u, n) && (A = 1);
        else if (_.substr(0, 2) === "--")
          c = (getComputedStyle(t).getPropertyValue(_) + "").trim(), u += "", Kn.lastIndex = 0, Kn.test(c) || (p = Ie(c), m = Ie(u), m ? p !== m && (c = jn(t, _, c, m) + m) : p && (u += p)), this.add(o, "setProperty", c, u, i, s, 0, 0, _), a.push(_), P.push(_, 0, o[_]);
        else if (d !== "undefined") {
          if (l && _ in l ? (c = typeof l[_] == "function" ? l[_].call(n, i, t, s) : l[_], Ae(c) && ~c.indexOf("random(") && (c = Dr(c)), Ie(c + "") || c === "auto" || (c += tn.units[_] || Ie(In(t, _)) || ""), (c + "").charAt(1) === "=" && (c = In(t, _))) : c = In(t, _), f = parseFloat(c), y = d === "string" && u.charAt(1) === "=" && u.substr(0, 2), y && (u = u.substr(2)), h = parseFloat(u), _ in Mn && (_ === "autoAlpha" && (f === 1 && In(t, "visibility") === "hidden" && h && (f = 0), P.push("visibility", 0, o.visibility), qn(this, o, "visibility", f ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), _ !== "scale" && _ !== "transform" && (_ = Mn[_], ~_.indexOf(",") && (_ = _.split(",")[0]))), x = _ in Nn, x) {
            if (this.styles.save(_), L = u, d === "string" && u.substring(0, 6) === "var(--") {
              if (u = je(t, u.substring(4, u.indexOf(")"))), u.substring(0, 5) === "calc(") {
                var v = t.style.perspective;
                t.style.perspective = u, u = je(t, "perspective"), v ? t.style.perspective = v : $n(t, "perspective");
              }
              h = parseFloat(u);
            }
            if (S || (C = t._gsap, C.renderTransform && !e.parseTransform || Nr(t, e.parseTransform), b = e.smoothOrigin !== !1 && C.smooth, S = this._pt = new ke(this._pt, o, fe, 0, 1, C.renderTransform, C, 0, -1), S.dep = 1), _ === "scale")
              this._pt = new ke(this._pt, C, "scaleY", C.scaleY, (y ? Yi(C.scaleY, y + h) : h) - C.scaleY || 0, Xa), this._pt.u = 0, a.push("scaleY", _), _ += "X";
            else if (_ === "transformOrigin") {
              P.push(Ve, 0, o[Ve]), u = zg(u), C.svg ? Ka(t, u, 0, b, 0, this) : (m = parseFloat(u.split(" ")[2]) || 0, m !== C.zOrigin && qn(this, C, "zOrigin", C.zOrigin, m), qn(this, o, _, Ps(c), Ps(u)));
              continue;
            } else if (_ === "svgOrigin") {
              Ka(t, u, 1, b, 0, this);
              continue;
            } else if (_ in _u) {
              Hg(this, C, _, f, y ? Yi(f, y + u) : u);
              continue;
            } else if (_ === "smoothOrigin") {
              qn(this, C, "smooth", C.smooth, u);
              continue;
            } else if (_ === "force3D") {
              C[_] = u;
              continue;
            } else if (_ === "transform") {
              Wg(this, u, t);
              continue;
            }
          } else _ in o || (_ = er(_) || _);
          if (x || (h || h === 0) && (f || f === 0) && !Eg.test(u) && _ in o)
            p = (c + "").substr((f + "").length), h || (h = 0), m = Ie(u) || (_ in tn.units ? tn.units[_] : p), p !== m && (f = jn(t, _, c, m)), this._pt = new ke(this._pt, x ? C : o, _, f, (y ? Yi(f, y + h) : h) - f, !x && (m === "px" || _ === "zIndex") && e.autoRound !== !1 ? Rg : Xa), this._pt.u = m || 0, x && L !== u ? (this._pt.b = c, this._pt.e = L, this._pt.r = wg) : p !== m && m !== "%" && (this._pt.b = c, this._pt.r = bg);
          else if (_ in o)
            Bg.call(this, t, _, c, y ? y + u : u);
          else if (_ in t)
            this.add(t, _, c || t[_], y ? y + u : u, i, s);
          else if (_ !== "parseTransform") {
            ho(_, u);
            continue;
          }
          x || (_ in o ? P.push(_, 0, o[_]) : typeof t[_] == "function" ? P.push(_, 2, t[_]()) : P.push(_, 1, c || t[_])), a.push(_);
        }
      }
    A && ou(this);
  },
  render: function(t, e) {
    if (e.tween._time || !To())
      for (var n = e._pt; n; )
        n.r(t, n.d), n = n._next;
    else
      e.styles.revert();
  },
  get: In,
  aliases: Mn,
  getSetter: function(t, e, n) {
    var i = Mn[e];
    return i && i.indexOf(",") < 0 && (e = i), e in Nn && e !== Ve && (t._gsap.x || In(t, "x")) ? n && zl === n ? e === "scale" ? Lg : Dg : (zl = n || {}) && (e === "scale" ? Ig : Ug) : t.style && !lo(t.style[e]) ? Cg : ~e.indexOf("-") ? Pg : So(t, e);
  },
  core: {
    _removeProperty: $n,
    _getMatrix: Ao
  }
};
He.utils.checkPrefix = er;
He.core.getStyleSaver = fu;
(function(r, t, e, n) {
  var i = Ge(r + "," + t + "," + e, function(s) {
    Nn[s] = 1;
  });
  Ge(t, function(s) {
    tn.units[s] = "deg", _u[s] = 1;
  }), Mn[i[13]] = r + "," + t, Ge(n, function(s) {
    var a = s.split(":");
    Mn[a[1]] = i[a[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Ge("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(r) {
  tn.units[r] = "px";
});
He.registerPlugin(xu);
var Za = He.registerPlugin(xu) || He;
Za.core.Tween;
const Ca = (r, t, e) => Math.min(e, Math.max(t, r));
function Xg(r, t, e, n) {
  const i = new ro(), s = r / 2, a = t / 2;
  return i.moveTo(-s + e, -a), i.lineTo(s - e, -a), i.quadraticCurveTo(s, -a, s, -a + e), i.lineTo(s, a - n), i.lineTo(s * 0.42, a), i.lineTo(-s * 0.42, a), i.lineTo(-s, a - n), i.lineTo(-s, -a + e), i.quadraticCurveTo(-s, -a, -s + e, -a), i;
}
function qg(r, t, e) {
  const n = new ro(), i = r / 2, s = t / 2;
  return n.moveTo(-i + e, -s), n.lineTo(i - e, -s), n.quadraticCurveTo(i, -s, i, -s + e), n.lineTo(i, s - e), n.quadraticCurveTo(i, s, i - e, s), n.lineTo(-i + e, s), n.quadraticCurveTo(-i, s, -i, s - e), n.lineTo(-i, -s + e), n.quadraticCurveTo(-i, -s, -i + e, -s), n;
}
function Yg(r, t = 16, e = 0.02) {
  const n = r.attributes.position, i = new D();
  for (let s = 0; s < n.count; s++) {
    if (i.fromBufferAttribute(n, s), Math.hypot(i.x, i.z) < 1e-4) continue;
    const o = 1 + e * Math.cos(Math.atan2(i.z, i.x) * t);
    n.setXYZ(s, i.x * o, i.y, i.z * o);
  }
  n.needsUpdate = !0, r.computeVertexNormals();
}
function Kg() {
  const r = document.createElement("canvas");
  r.width = 512, r.height = 256;
  const t = r.getContext("2d"), e = t.createLinearGradient(0, 0, 0, 256);
  e.addColorStop(0, "#ffffff"), e.addColorStop(0.3, "#EDF5FC"), e.addColorStop(0.58, "#F0EBFA"), e.addColorStop(0.84, "#FBEAF0"), e.addColorStop(1, "#F2E4EA"), t.fillStyle = e, t.fillRect(0, 0, 512, 256);
  const n = t.createLinearGradient(0, 0, 0, 110);
  n.addColorStop(0, "rgba(255,255,255,1)"), n.addColorStop(1, "rgba(255,255,255,0)"), t.fillStyle = n, t.fillRect(150, 0, 150, 110);
  const i = [
    [70, 190, 90, "rgba(255, 170, 200, .55)"],
    [400, 150, 110, "rgba(165, 185, 255, .5)"],
    [255, 235, 120, "rgba(255, 255, 255, .9)"]
  ];
  for (const [a, o, l, c] of i) {
    const u = t.createRadialGradient(a, o, 0, a, o, l);
    u.addColorStop(0, c), u.addColorStop(1, "rgba(255,255,255,0)"), t.fillStyle = u, t.fillRect(a - l, o - l, l * 2, l * 2);
  }
  const s = new fc(r);
  return s.mapping = 303, s.colorSpace = on, s;
}
function Kl(r) {
  r.computeBoundingBox();
  const { min: t, max: e } = r.boundingBox, n = Math.max(1e-5, e.y - t.y), i = r.attributes.position, s = new Float32Array(i.count);
  for (let a = 0; a < i.count; a++) s[a] = (i.getY(a) - t.y) / n;
  r.setAttribute("aFill", new Qe(s, 1));
}
function Zg() {
  const r = document.createElement("canvas");
  r.width = r.height = 128;
  const t = r.getContext("2d"), e = t.createRadialGradient(64, 64, 0, 64, 64, 64);
  e.addColorStop(0, "rgba(43,15,51,.4)"), e.addColorStop(0.55, "rgba(43,15,51,.13)"), e.addColorStop(1, "rgba(43,15,51,0)"), t.fillStyle = e, t.fillRect(0, 0, 128, 128);
  const n = new fc(r);
  return n.colorSpace = on, n;
}
function Jg(r, { reducedMotion: t = !1 } = {}) {
  const e = new Gm({
    canvas: r,
    antialias: !0,
    alpha: !0,
    powerPreference: "high-performance"
  });
  e.setClearAlpha(0), e.toneMapping = 4, e.toneMappingExposure = 1.12;
  const n = new km(), i = new Ze(34, 1, 0.1, 60);
  i.position.set(0, 0.2, 8.8);
  const s = new Da(e), a = Kg(), o = s.fromEquirectangular(a);
  n.environment = o.texture, a.dispose(), s.dispose();
  const l = new E_(16777215, 2.2);
  l.position.set(-3.2, 5, 4), n.add(l);
  const c = new Rl(16754884, 12, 20, 2);
  c.position.set(4.2, -1.6, 3.2), n.add(c);
  const u = new Rl(11061503, 12, 18, 2);
  u.position.set(-3, 1.5, -2.5), n.add(u);
  const h = new xn(), f = new xn(), d = new xn();
  f.add(d), h.add(f), n.add(h);
  const g = new Gi({
    color: 15722998,
    metalness: 0,
    roughness: 0.03,
    clearcoat: 1,
    clearcoatRoughness: 0.03,
    iridescence: 0.5,
    iridescenceIOR: 1.35,
    envMapIntensity: 2.4,
    reflectivity: 0.7,
    sheen: 0.45,
    sheenColor: new Xt(16777215),
    sheenRoughness: 0.35,
    transparent: !0,
    opacity: 0.42,
    depthWrite: !1
  }), _ = (Tt) => {
    Tt.fragmentShader = Tt.fragmentShader.replace(
      "#include <opaque_fragment>",
      `float fres = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 2.2);
       diffuseColor.a = mix(diffuseColor.a * 0.34, 1.0, fres);
       #include <opaque_fragment>`
    );
  };
  g.onBeforeCompile = _;
  const p = g.clone();
  p.side = 1, p.opacity = 0.24;
  const m = new Gi({
    color: 16777215,
    metalness: 0,
    roughness: 0.16,
    clearcoat: 0.3,
    clearcoatRoughness: 0.3,
    envMapIntensity: 1.1,
    transparent: !0,
    opacity: 0.9,
    depthWrite: !1
  }), y = new Xt(11812712).convertSRGBToLinear(), x = new Xt(4721700).convertSRGBToLinear();
  m.onBeforeCompile = (Tt) => {
    Tt.uniforms.uTop = { value: y }, Tt.uniforms.uBot = { value: x }, Tt.vertexShader = Tt.vertexShader.replace("#include <common>", `#include <common>
attribute float aFill;
varying float vFill;`).replace("#include <begin_vertex>", `#include <begin_vertex>
vFill = aFill;`), Tt.fragmentShader = Tt.fragmentShader.replace("#include <common>", `#include <common>
varying float vFill;
uniform vec3 uTop;
uniform vec3 uBot;`).replace("#include <color_fragment>", `#include <color_fragment>
diffuseColor.rgb = mix(uBot, uTop, clamp(vFill, 0.0, 1.0));`);
  };
  const S = new Gi({
    color: 2364456,
    metalness: 0.55,
    roughness: 0.34,
    clearcoat: 0.8,
    clearcoatRoughness: 0.25,
    envMapIntensity: 1.3
  }), C = new Gi({
    color: 10260382,
    metalness: 1,
    roughness: 0.22,
    envMapIntensity: 1.6
  }), b = new Gi({
    color: 10234448,
    metalness: 0,
    roughness: 0.1,
    clearcoat: 1,
    envMapIntensity: 1.8,
    transparent: !0,
    opacity: 0.94,
    depthWrite: !1
  }), A = new xn();
  A.position.set(0, -0.5, 0), d.add(A);
  const P = 1.8, L = 1.9, v = 0.6, T = new Ts(Xg(P, L, 0.14, 0.5), {
    depth: v,
    bevelEnabled: !0,
    bevelThickness: 0.08,
    bevelSize: 0.08,
    bevelSegments: 5,
    curveSegments: 26
  });
  T.translate(0, 0, -v / 2), T.computeVertexNormals();
  const G = new ae(T, p);
  G.renderOrder = 0, A.add(G);
  const F = new ae(T, g);
  F.renderOrder = 3, A.add(F);
  const B = new Ts(qg(P - 0.16, L - 0.16, 0.09), {
    depth: v - 0.16,
    bevelEnabled: !0,
    bevelThickness: 0.04,
    bevelSize: 0.04,
    bevelSegments: 3,
    curveSegments: 20
  });
  B.translate(0, (L - 0.16) / 2, -0.43999999999999995 / 2), Kl(B);
  const q = new ae(B, m);
  q.position.y = -1.74 / 2, q.scale.y = 1e-3, q.renderOrder = 1, A.add(q);
  const O = new ae(new Dn(0.2, 0.24, 0.24, 30), g);
  O.position.y = L / 2 + 0.08, O.renderOrder = 3, A.add(O);
  const Z = new ae(new Dn(0.26, 0.26, 0.05, 30), C);
  Z.position.y = L / 2 + 0.02, A.add(Z);
  const W = new Dn(0.43, 0.42, 0.42, 64, 1);
  Yg(W, 18, 0.022);
  const lt = L / 2 + 0.15, rt = new xn();
  rt.position.y = lt, rt.add(new ae(W, S));
  const ht = new ae(new Dn(0.425, 0.425, 0.045, 48), C);
  ht.position.y = -0.185, rt.add(ht), A.add(rt);
  const Ft = new D(0, -0.5 + L / 2 + 0.26, 0), Ht = new D(-1.75, 1.3, 0.25), V = new xn();
  V.position.copy(Ht), V.scale.setScalar(0.78), d.add(V);
  const Q = [
    [0, -0.52],
    [0.3, -0.52],
    [0.32, -0.5],
    [0.32, 0.28],
    [0.3, 0.36],
    [0.2, 0.44],
    [0.15, 0.48],
    [0.15, 0.6],
    [0, 0.6]
  ].map(([Tt, Yt]) => new ot(Tt, Yt)), Mt = new io(Q, 40), ut = new ae(Mt, p);
  ut.renderOrder = 0, V.add(ut);
  const Dt = new ae(Mt, g);
  Dt.renderOrder = 3, V.add(Dt);
  const Pt = new Dn(0.265, 0.265, 0.86, 28);
  Pt.translate(0, 0.43, 0), Kl(Pt);
  const Lt = new ae(Pt, m);
  Lt.position.y = -0.48, Lt.renderOrder = 1, V.add(Lt);
  const zt = new ae(new Dn(0.17, 0.17, 0.26, 26), S);
  zt.position.y = 0.7, V.add(zt);
  const J = new ae(new Dn(0.055, 0.07, 0.14, 16), S);
  J.position.y = 0.88, V.add(J);
  const R = new Ce();
  R.position.set(0, 0.95, 0), V.add(R);
  const st = { uHead: { value: 0 }, uTail: { value: 0 } };
  b.onBeforeCompile = (Tt) => {
    Tt.uniforms.uHead = st.uHead, Tt.uniforms.uTail = st.uTail, Tt.vertexShader = Tt.vertexShader.replace("#include <common>", `#include <common>
attribute float aProg;
varying float vProg;`).replace("#include <begin_vertex>", `#include <begin_vertex>
vProg = aProg;`), Tt.fragmentShader = Tt.fragmentShader.replace("#include <common>", `#include <common>
varying float vProg;
uniform float uHead;
uniform float uTail;`).replace(
      "#include <clipping_planes_fragment>",
      `#include <clipping_planes_fragment>
if (vProg > uHead || vProg < uTail) discard;`
    );
  };
  let nt = null;
  function et() {
    nt && (nt.geometry.dispose(), d.remove(nt)), V.updateWorldMatrix(!0, !0);
    const Tt = R.getWorldPosition(new D());
    d.worldToLocal(Tt);
    const Yt = Ft.clone(), we = Tt.clone().lerp(Yt, 0.45);
    we.x -= 0.08, we.y += 0.1;
    const _n = new dc([
      Tt,
      Tt.clone().lerp(Yt, 0.16).add(new D(-0.05, 0.05, 0)),
      we,
      Tt.clone().lerp(Yt, 0.78).add(new D(0.02, -0.04, 0)),
      Yt.clone().add(new D(0, 0.06, 0))
    ], !1, "catmullrom", 0.4), ye = 90, yi = 8, Ti = new ao(_n, ye, 0.038, yi, !1), Ei = new Float32Array(Ti.attributes.position.count);
    for (let An = 0; An < Ei.length; An++) Ei[An] = Math.floor(An / (yi + 1)) / ye;
    Ti.setAttribute("aProg", new Qe(Ei, 1)), nt = new ae(Ti, b), nt.renderOrder = 2, d.add(nt);
  }
  const at = 16, bt = new Gi({
    color: 9315657,
    roughness: 0.1,
    clearcoat: 1,
    envMapIntensity: 2,
    transparent: !0,
    opacity: 0.92,
    depthWrite: !1
  }), _t = new so(0.022, 10, 8), w = new Wm(_t, bt, at);
  w.instanceMatrix.setUsage(35048), w.frustumCulled = !1, w.visible = !1, d.add(w);
  const M = Array.from({ length: at }, (Tt, Yt) => ({
    off: Yt / at,
    sway: Math.sin(Yt * 12.9898) * 43758.5453 % 1,
    scale: 0.5 + Yt * 7 % 5 / 6
  })), z = { t: 0, amount: 0 }, Y = new ee(), j = new D(), K = new rr(), yt = new D(), ct = Zg(), dt = new ae(
    new zr(3.6, 3.6),
    new ja({ map: ct, transparent: !0, depthWrite: !1, opacity: 0.5 })
  );
  dt.rotation.x = -Math.PI / 2, dt.position.set(0, -1.42, 0.05), dt.renderOrder = -1, d.add(dt);
  const Bt = { rot: -2, x: -0.82, y: 1.96, z: 0.05 };
  V.rotation.z = Bt.rot, V.position.set(Bt.x, Bt.y, Bt.z), et(), V.rotation.z = 0, V.position.copy(Ht);
  const tt = Za.timeline({ paused: !0, defaults: { ease: "none" } });
  tt.to(V.position, { x: Bt.x, y: Bt.y, z: Bt.z, duration: 0.2, ease: "power2.inOut" }, 0).to(V.rotation, { z: Bt.rot, duration: 0.2, ease: "power2.inOut" }, 0).to(rt.position, { y: L / 2 + 1.85, x: 0.78, duration: 0.16, ease: "power2.out" }, 0.02).to(rt.rotation, { y: Math.PI * 0.6, z: 0.22, duration: 0.2 }, 0.02).to(st.uHead, { value: 1, duration: 0.09, ease: "power1.in" }, 0.2).to(Lt.scale, { y: 0.06, duration: 0.34, ease: "power1.inOut" }, 0.21).to(q.scale, { y: 0.74, duration: 0.36, ease: "power1.inOut" }, 0.23).to(z, { amount: 1, duration: 0.06 }, 0.22).to(z, { amount: 0, duration: 0.06 }, 0.56).to(st.uTail, { value: 1.02, duration: 0.1, ease: "power2.in" }, 0.57).to(V.rotation, { z: -0.12, duration: 0.14, ease: "power2.inOut" }, 0.6).to(V.position, { x: -1.9, y: 1.6, z: -0.4, duration: 0.16, ease: "power2.inOut" }, 0.6).to(rt.position, { y: lt, x: 0, duration: 0.13, ease: "power2.in" }, 0.72).to(rt.rotation, { y: Math.PI * 1.2, z: 0, duration: 0.16 }, 0.72).to(A.position, { x: -0.45, y: -0.32, duration: 0.28, ease: "power2.inOut" }, 0.72).to(A.rotation, { y: Math.PI * 0.2, duration: 0.28, ease: "power2.inOut" }, 0.72).to(dt.position, { x: -0.45, duration: 0.28, ease: "power2.inOut" }, 0.72).to(V.position, { x: -3.2, y: 2.4, duration: 0.2, ease: "power2.in" }, 0.74).to(i.position, { z: 8.2, y: 0.1, duration: 0.28, ease: "power2.inOut" }, 0.72), h.position.y = -0.5, h.scale.setScalar(0.86);
  const gt = Za.timeline({ paused: !0 }).to(h.position, { y: 0, duration: 1.5, ease: "expo.out" }, 0).to(h.scale, { x: 1, y: 1, z: 1, duration: 1.6, ease: "expo.out" }, 0).fromTo(h.rotation, { y: -0.35 }, { y: 0, duration: 1.8, ease: "expo.out" }, 0), wt = { x: 0, y: 0, tx: 0, ty: 0 };
  function It(Tt) {
    wt.tx = Tt.clientX / window.innerWidth * 2 - 1, wt.ty = Tt.clientY / window.innerHeight * 2 - 1;
  }
  t || window.addEventListener("pointermove", It, { passive: !0 });
  let St = !1, Vt = 2.2, Ut = 0.1, Zt = -1.15, I = 0;
  function mt() {
    const Tt = r.getBoundingClientRect(), Yt = Math.max(1, Tt.width), we = Math.max(1, Tt.height);
    St = Yt < 1e3, i.aspect = Yt / we, i.fov = St ? 42 : 34, i.updateProjectionMatrix();
    const ye = 2 * Math.tan(i.fov * Math.PI / 360) * i.position.z * i.aspect;
    St ? (Vt = 0.15, Ut = 2, Zt = -0.35, I = -1.9, f.scale.setScalar(0.46)) : (Vt = ye / 4, Ut = 0.25, Zt = -ye / 6, I = 0, f.scale.setScalar(Ca(ye / 2 * 0.8 / 3.9, 0.46, 0.72))), f.position.set(Vt, Ut, 0), e.setPixelRatio(Math.min(window.devicePixelRatio, St ? 1.75 : 2)), e.setSize(Yt, we, !1);
  }
  mt();
  let X = !0;
  const $ = new IntersectionObserver(([Tt]) => {
    X = Tt.isIntersecting;
  }, { threshold: 0 });
  $.observe(r);
  const pt = new A_();
  function vt() {
    const Tt = z.amount > 0.02 && nt;
    if (w.visible = Tt, !!Tt) {
      for (let Yt = 0; Yt < at; Yt++) {
        const we = M[Yt], _n = 0.45 + (z.t * 0.7 + we.off) % 1 * 0.55, ye = nt.geometry.parameters.path.getPointAt(Ca(_n, 0, 0.999), j);
        K.identity(), yt.setScalar(we.scale * z.amount * (0.4 + (_n - 0.45) * 1.6)), ye.x += Math.sin((_n + we.sway) * 9) * 0.075, ye.z += Math.cos((_n + we.sway) * 7) * 0.075, Y.compose(ye, K, yt), w.setMatrixAt(Yt, Y);
      }
      w.instanceMatrix.needsUpdate = !0;
    }
  }
  function Wt() {
    z.t += pt.getDelta();
    const Tt = Ca((tt.progress() - 0.05) / 0.35, 0, 1), Yt = Tt * Tt * (3 - 2 * Tt);
    if (f.position.x = Vt + Zt * Yt, f.position.y = Ut + I * Yt, !t) {
      wt.x += (wt.tx - wt.x) * 0.045, wt.y += (wt.ty - wt.y) * 0.045;
      const we = pt.elapsedTime;
      d.rotation.y = wt.x * 0.16 + Math.sin(we * 0.35) * 0.02, d.rotation.x = wt.y * 0.07 + Math.cos(we * 0.28) * 0.012, h.position.x = wt.x * 0.08;
    }
    vt(), e.render(n, i);
  }
  let le = 0;
  function be() {
    le = requestAnimationFrame(be), X && Wt();
  }
  t ? (tt.progress(0.78), Wt()) : (be(), gt.play());
  function Kt() {
    cancelAnimationFrame(le), $.disconnect(), window.removeEventListener("pointermove", It), tt.kill(), gt.kill(), n.traverse((Tt) => {
      Tt.geometry && Tt.geometry.dispose(), Tt.material && (Array.isArray(Tt.material) ? Tt.material : [Tt.material]).forEach((Yt) => Yt.dispose());
    }), o.dispose(), ct.dispose(), e.dispose();
  }
  return { timeline: tt, resize: mt, dispose: Kt, render: Wt, reducedMotion: t };
}
export {
  Jg as createScene
};
