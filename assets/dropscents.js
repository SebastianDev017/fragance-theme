var Nl = Object.defineProperty;
var Fl = (s, t, e) => t in s ? Nl(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var R = (s, t, e) => Fl(s, typeof t != "symbol" ? t + "" : t, e);
function or(s) {
  if (s === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function ua(s, t) {
  s.prototype = Object.create(t.prototype), s.prototype.constructor = s, s.__proto__ = t;
}
/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var ke = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, nn = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Xs, Bt, lt, ze = 1e8, st = 1 / ze, gs = Math.PI * 2, Il = gs / 4, Yl = 0, ca = Math.sqrt, Bl = Math.cos, Wl = Math.sin, zt = function(t) {
  return typeof t == "string";
}, mt = function(t) {
  return typeof t == "function";
}, fr = function(t) {
  return typeof t == "number";
}, Hs = function(t) {
  return typeof t > "u";
}, tr = function(t) {
  return typeof t == "object";
}, ce = function(t) {
  return t !== !1;
}, Us = function() {
  return typeof window < "u";
}, vn = function(t) {
  return mt(t) || zt(t);
}, fa = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Qt = Array.isArray, Xl = /random\([^)]+\)/g, Hl = /,\s*/g, mo = /(?:-?\.?\d|\.)+/gi, ha = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, di = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, rs = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, da = /[+-]=-?[.\d]+/, Ul = /[^,'"\[\]\s]+/gi, Vl = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ft, Ge, ms, Vs, Pe = {}, Bn = {}, pa, _a = function(t) {
  return (Bn = Si(t, Pe)) && _e;
}, $s = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, sn = function(t, e) {
  return !e && console.warn(t);
}, ga = function(t, e) {
  return t && (Pe[t] = e) && Bn && (Bn[t] = e) || Pe;
}, on = function() {
  return 0;
}, $l = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Dn = {
  suppressEvents: !0,
  kill: !1
}, ql = {
  suppressEvents: !0
}, qs = {}, Cr = [], vs = {}, ma, xe = {}, is = {}, vo = 30, Rn = [], Gs = "", Ks = function(t) {
  var e = t[0], r, i;
  if (tr(e) || mt(e) || (t = [t]), !(r = (e._gsap || {}).harness)) {
    for (i = Rn.length; i-- && !Rn[i].targetTest(e); )
      ;
    r = Rn[i];
  }
  for (i = t.length; i--; )
    t[i] && (t[i]._gsap || (t[i]._gsap = new Ya(t[i], r))) || t.splice(i, 1);
  return t;
}, $r = function(t) {
  return t._gsap || Ks(Ne(t))[0]._gsap;
}, va = function(t, e, r) {
  return (r = t[e]) && mt(r) ? t[e]() : Hs(r) && t.getAttribute && t.getAttribute(e) || r;
}, fe = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, xt = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, ct = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, gi = function(t, e) {
  var r = e.charAt(0), i = parseFloat(e.substr(2));
  return t = parseFloat(t), r === "+" ? t + i : r === "-" ? t - i : r === "*" ? t * i : t / i;
}, Gl = function(t, e) {
  for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; )
    ;
  return i < r;
}, Wn = function() {
  var t = Cr.length, e = Cr.slice(0), r, i;
  for (vs = {}, Cr.length = 0, r = 0; r < t; r++)
    i = e[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Qs = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, ya = function(t, e, r, i) {
  Cr.length && !Bt && Wn(), t.render(e, r, !!(Bt && e < 0 && Qs(t))), Cr.length && !Bt && Wn();
}, wa = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(Ul).length < 2 ? e : zt(t) ? t.trim() : t;
}, xa = function(t) {
  return t;
}, Me = function(t, e) {
  for (var r in e)
    r in t || (t[r] = e[r]);
  return t;
}, Kl = function(t) {
  return function(e, r) {
    for (var i in r)
      i in e || i === "duration" && t || i === "ease" || (e[i] = r[i]);
  };
}, Si = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, yo = function s(t, e) {
  for (var r in e)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = tr(e[r]) ? s(t[r] || (t[r] = {}), e[r]) : e[r]);
  return t;
}, Xn = function(t, e) {
  var r = {}, i;
  for (i in t)
    i in e || (r[i] = t[i]);
  return r;
}, Vi = function(t) {
  var e = t.parent || ft, r = t.keyframes ? Kl(Qt(t.keyframes)) : Me;
  if (ce(t.inherit))
    for (; e; )
      r(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, Ql = function(t, e) {
  for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; )
    ;
  return r < 0;
}, ba = function(t, e, r, i, n) {
  var o = t[i], a;
  if (n)
    for (a = e[n]; o && o[n] > a; )
      o = o._prev;
  return o ? (e._next = o._next, o._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = o, e.parent = e._dp = t, e;
}, Zn = function(t, e, r, i) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var n = e._prev, o = e._next;
  n ? n._next = o : t[r] === e && (t[r] = o), o ? o._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null;
}, Mr = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, qr = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var r = t; r; )
      r._dirty = 1, r = r.parent;
  return t;
}, Zl = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, ys = function(t, e, r, i) {
  return t._startAt && (Bt ? t._startAt.revert(Dn) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i));
}, Jl = function s(t) {
  return !t || t._ts && s(t.parent);
}, wo = function(t) {
  return t._repeat ? Ei(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, Ei = function(t, e) {
  var r = Math.floor(t = ct(t / e));
  return t && r === t ? r - 1 : r;
}, Hn = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, Jn = function(t) {
  return t._end = ct(t._start + (t._tDur / Math.abs(t._ts || t._rts || st) || 0));
}, jn = function(t, e) {
  var r = t._dp;
  return r && r.smoothChildTiming && t._ts && (t._start = ct(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Jn(t), r._dirty || qr(r, t)), t;
}, Ta = function(t, e) {
  var r;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = Hn(t.rawTime(), e), (!e._dur || pn(0, e.totalDuration(), r) - e._tTime > st) && e.render(r, !0)), qr(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (r = t; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    t._zTime = -st;
  }
}, Qe = function(t, e, r, i) {
  return e.parent && Mr(e), e._start = ct((fr(r) ? r : r || t !== ft ? De(t, r, e) : t._time) + e._delay), e._end = ct(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), ba(t, e, "_first", "_last", t._sort ? "_start" : 0), ws(e) || (t._recent = e), i || Ta(t, e), t._ts < 0 && jn(t, t._tTime), t;
}, Sa = function(t, e) {
  return (Pe.ScrollTrigger || $s("scrollTrigger", e)) && Pe.ScrollTrigger.create(e, t);
}, Ea = function(t, e, r, i, n) {
  if (Js(t, e, n), !t._initted)
    return 1;
  if (!r && t._pt && !Bt && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && ma !== Te.frame)
    return Cr.push(t), t._lazy = [n, i], 1;
}, jl = function s(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || s(e));
}, ws = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, tu = function(t, e, r, i) {
  var n = t.ratio, o = e < 0 || !e && (!t._start && jl(t) && !(!t._initted && ws(t)) || (t._ts < 0 || t._dp._ts < 0) && !ws(t)) ? 0 : 1, a = t._rDelay, l = 0, u, c, d;
  if (a && t._repeat && (l = pn(0, t._tDur, e), c = Ei(l, a), t._yoyo && c & 1 && (o = 1 - o), c !== Ei(t._tTime, a) && (n = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== n || Bt || i || t._zTime === st || !e && t._zTime) {
    if (!t._initted && Ea(t, e, i, r, l))
      return;
    for (d = t._zTime, t._zTime = e || (r ? st : 0), r || (r = e && !d), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = l, u = t._pt; u; )
      u.r(o, u.d), u = u._next;
    e < 0 && ys(t, e, r, !0), t._onUpdate && !r && Ee(t, "onUpdate"), l && t._repeat && !r && t.parent && Ee(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && Mr(t, 1), !r && !Bt && (Ee(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = e);
}, eu = function(t, e, r) {
  var i;
  if (r > e)
    for (i = t._first; i && i._start <= r; ) {
      if (i.data === "isPause" && i._start > e)
        return i;
      i = i._next;
    }
  else
    for (i = t._last; i && i._start >= r; ) {
      if (i.data === "isPause" && i._start < e)
        return i;
      i = i._prev;
    }
}, Ci = function(t, e, r, i) {
  var n = t._repeat, o = ct(e) || 0, a = t._tTime / t._tDur;
  return a && !i && (t._time *= o / t._dur), t._dur = o, t._tDur = n ? n < 0 ? 1e10 : ct(o * (n + 1) + t._rDelay * n) : o, a > 0 && !i && jn(t, t._tTime = t._tDur * a), t.parent && Jn(t), r || qr(t.parent, t), t;
}, xo = function(t) {
  return t instanceof ue ? qr(t) : Ci(t, t._dur);
}, ru = {
  _start: 0,
  endTime: on,
  totalDuration: on
}, De = function s(t, e, r) {
  var i = t.labels, n = t._recent || ru, o = t.duration() >= ze ? n.endTime(!1) : t._dur, a, l, u;
  return zt(e) && (isNaN(e) || e in i) ? (l = e.charAt(0), u = e.substr(-1) === "%", a = e.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (e = e.replace(/=/, "")), (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (u ? (a < 0 ? n : r).totalDuration() / 100 : 1)) : a < 0 ? (e in i || (i[e] = o), i[e]) : (l = parseFloat(e.charAt(a - 1) + e.substr(a + 1)), u && r && (l = l / 100 * (Qt(r) ? r[0] : r).totalDuration()), a > 1 ? s(t, e.substr(0, a - 1), r) + l : o + l)) : e == null ? o : +e;
}, $i = function(t, e, r) {
  var i = fr(e[1]), n = (i ? 2 : 1) + (t < 2 ? 0 : 1), o = e[n], a, l;
  if (i && (o.duration = e[1]), o.parent = r, t) {
    for (a = o, l = r; l && !("immediateRender" in a); )
      a = l.vars.defaults || {}, l = ce(l.vars.inherit) && l.parent;
    o.immediateRender = ce(a.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[n - 1];
  }
  return new Ct(e[0], o, e[n + 1]);
}, Ar = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, pn = function(t, e, r) {
  return r < t ? t : r > e ? e : r;
}, Gt = function(t, e) {
  return !zt(t) || !(e = Vl.exec(t)) ? "" : e[1];
}, iu = function(t, e, r) {
  return Ar(r, function(i) {
    return pn(t, e, i);
  });
}, xs = [].slice, Ca = function(t, e) {
  return t && tr(t) && "length" in t && (!e && !t.length || t.length - 1 in t && tr(t[0])) && !t.nodeType && t !== Ge;
}, nu = function(t, e, r) {
  return r === void 0 && (r = []), t.forEach(function(i) {
    var n;
    return zt(i) && !e || Ca(i, 1) ? (n = r).push.apply(n, Ne(i)) : r.push(i);
  }) || r;
}, Ne = function(t, e, r) {
  return lt && !e && lt.selector ? lt.selector(t) : zt(t) && !r && (ms || !ki()) ? xs.call((e || Vs).querySelectorAll(t), 0) : Qt(t) ? nu(t, r) : Ca(t) ? xs.call(t, 0) : t ? [t] : [];
}, bs = function(t) {
  return t = Ne(t)[0] || sn("Invalid scope") || {}, function(e) {
    var r = t.current || t.nativeElement || t;
    return Ne(e, r.querySelectorAll ? r : r === t ? sn("Invalid scope") || Vs.createElement("div") : t);
  };
}, ka = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, Pa = function(t) {
  if (mt(t))
    return t;
  var e = tr(t) ? t : {
    each: t
  }, r = Gr(e.ease), i = e.from || 0, n = parseFloat(e.base) || 0, o = {}, a = i > 0 && i < 1, l = isNaN(i) || a, u = e.axis, c = i, d = i;
  return zt(i) ? c = d = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !a && l && (c = i[0], d = i[1]), function(h, f, _) {
    var p = (_ || e).length, m = o[p], b, w, S, v, T, k, x, P, C;
    if (!m) {
      if (C = e.grid === "auto" ? 0 : (e.grid || [1, ze])[1], !C) {
        for (x = -ze; x < (x = _[C++].getBoundingClientRect().left) && C < p; )
          ;
        C < p && C--;
      }
      for (m = o[p] = [], b = l ? Math.min(C, p) * c - 0.5 : i % C, w = C === ze ? 0 : l ? p * d / C - 0.5 : i / C | 0, x = 0, P = ze, k = 0; k < p; k++)
        S = k % C - b, v = w - (k / C | 0), m[k] = T = u ? Math.abs(u === "y" ? v : S) : ca(S * S + v * v), T > x && (x = T), T < P && (P = T);
      i === "random" && ka(m), m.max = x - P, m.min = P, m.v = p = (parseFloat(e.amount) || parseFloat(e.each) * (C > p ? p - 1 : u ? u === "y" ? p / C : C : Math.max(C, p / C)) || 0) * (i === "edges" ? -1 : 1), m.b = p < 0 ? n - p : n, m.u = Gt(e.amount || e.each) || 0, r = r && p < 0 ? mu(r) : r;
    }
    return p = (m[h] - m.min) / m.max || 0, ct(m.b + (r ? r(p) : p) * m.v) + m.u;
  };
}, Ts = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(r) {
    var i = ct(Math.round(parseFloat(r) / t) * t * e);
    return (i - i % 1) / e + (fr(r) ? 0 : Gt(r));
  };
}, Ma = function(t, e) {
  var r = Qt(t), i, n;
  return !r && tr(t) && (i = r = t.radius || ze, t.values ? (t = Ne(t.values), (n = !fr(t[0])) && (i *= i)) : t = Ts(t.increment)), Ar(e, r ? mt(t) ? function(o) {
    return n = t(o), Math.abs(n - o) <= i ? n : o;
  } : function(o) {
    for (var a = parseFloat(n ? o.x : o), l = parseFloat(n ? o.y : 0), u = ze, c = 0, d = t.length, h, f; d--; )
      n ? (h = t[d].x - a, f = t[d].y - l, h = h * h + f * f) : h = Math.abs(t[d] - a), h < u && (u = h, c = d);
    return c = !i || u <= i ? t[c] : o, n || c === o || fr(o) ? c : c + Gt(o);
  } : Ts(t));
}, Oa = function(t, e, r, i) {
  return Ar(Qt(t) ? !e : r === !0 ? !!(r = 0) : !i, function() {
    return Qt(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + r * 0.99)) / r) * r * i) / i;
  });
}, su = function() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return function(i) {
    return e.reduce(function(n, o) {
      return o(n);
    }, i);
  };
}, ou = function(t, e) {
  return function(r) {
    return t(parseFloat(r)) + (e || Gt(r));
  };
}, au = function(t, e, r) {
  return Ra(t, e, 0, 1, r);
}, Da = function(t, e, r) {
  return Ar(r, function(i) {
    return t[~~e(i)];
  });
}, lu = function s(t, e, r) {
  var i = e - t;
  return Qt(t) ? Da(t, s(0, t.length), e) : Ar(r, function(n) {
    return (i + (n - t) % i) % i + t;
  });
}, uu = function s(t, e, r) {
  var i = e - t, n = i * 2;
  return Qt(t) ? Da(t, s(0, t.length - 1), e) : Ar(r, function(o) {
    return o = (n + (o - t) % n) % n || 0, t + (o > i ? n - o : o);
  });
}, an = function(t) {
  return t.replace(Xl, function(e) {
    var r = e.indexOf("[") + 1, i = e.substring(r || 7, r ? e.indexOf("]") : e.length - 1).split(Hl);
    return Oa(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5);
  });
}, Ra = function(t, e, r, i, n) {
  var o = e - t, a = i - r;
  return Ar(n, function(l) {
    return r + ((l - t) / o * a || 0);
  });
}, cu = function s(t, e, r, i) {
  var n = isNaN(t + e) ? 0 : function(f) {
    return (1 - f) * t + f * e;
  };
  if (!n) {
    var o = zt(t), a = {}, l, u, c, d, h;
    if (r === !0 && (i = 1) && (r = null), o)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (Qt(t) && !Qt(e)) {
      for (c = [], d = t.length, h = d - 2, u = 1; u < d; u++)
        c.push(s(t[u - 1], t[u]));
      d--, n = function(_) {
        _ *= d;
        var p = Math.min(h, ~~_);
        return c[p](_ - p);
      }, r = e;
    } else i || (t = Si(Qt(t) ? [] : {}, t));
    if (!c) {
      for (l in e)
        Zs.call(a, t, l, "get", e[l]);
      n = function(_) {
        return eo(_, a) || (o ? t.p : t);
      };
    }
  }
  return Ar(r, n);
}, bo = function(t, e, r) {
  var i = t.labels, n = ze, o, a, l;
  for (o in i)
    a = i[o] - e, a < 0 == !!r && a && n > (a = Math.abs(a)) && (l = o, n = a);
  return l;
}, Ee = function(t, e, r) {
  var i = t.vars, n = i[e], o = lt, a = t._ctx, l, u, c;
  if (n)
    return l = i[e + "Params"], u = i.callbackScope || t, r && Cr.length && Wn(), a && (lt = a), c = l ? n.apply(u, l) : n.call(u), lt = o, c;
}, Ii = function(t) {
  return Mr(t), t.scrollTrigger && t.scrollTrigger.kill(!!Bt), t.progress() < 1 && Ee(t, "onInterrupt"), t;
}, pi, Aa = [], La = function(t) {
  if (t)
    if (t = !t.name && t.default || t, Us() || t.headless) {
      var e = t.name, r = mt(t), i = e && !r && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: on,
        render: eo,
        add: Zs,
        kill: ku,
        modifier: Cu,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: to,
        aliases: {},
        register: 0
      };
      if (ki(), t !== i) {
        if (xe[e])
          return;
        Me(i, Me(Xn(t, n), o)), Si(i.prototype, Si(n, Xn(t, o))), xe[i.prop = e] = i, t.targetTest && (Rn.push(i), qs[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      ga(e, i), t.register && t.register(_e, i, he);
    } else
      Aa.push(t);
}, nt = 255, Yi = {
  aqua: [0, nt, nt],
  lime: [0, nt, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, nt],
  navy: [0, 0, 128],
  white: [nt, nt, nt],
  olive: [128, 128, 0],
  yellow: [nt, nt, 0],
  orange: [nt, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [nt, 0, 0],
  pink: [nt, 192, 203],
  cyan: [0, nt, nt],
  transparent: [nt, nt, nt, 0]
}, ns = function(t, e, r) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : t * 3 < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * nt + 0.5 | 0;
}, za = function(t, e, r) {
  var i = t ? fr(t) ? [t >> 16, t >> 8 & nt, t & nt] : 0 : Yi.black, n, o, a, l, u, c, d, h, f, _;
  if (!i) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Yi[t])
      i = Yi[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), o = t.charAt(2), a = t.charAt(3), t = "#" + n + n + o + o + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return i = parseInt(t.substr(1, 6), 16), [i >> 16, i >> 8 & nt, i & nt, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & nt, t & nt];
    } else if (t.substr(0, 3) === "hsl") {
      if (i = _ = t.match(mo), !e)
        l = +i[0] % 360 / 360, u = +i[1] / 100, c = +i[2] / 100, o = c <= 0.5 ? c * (u + 1) : c + u - c * u, n = c * 2 - o, i.length > 3 && (i[3] *= 1), i[0] = ns(l + 1 / 3, n, o), i[1] = ns(l, n, o), i[2] = ns(l - 1 / 3, n, o);
      else if (~t.indexOf("="))
        return i = t.match(ha), r && i.length < 4 && (i[3] = 1), i;
    } else
      i = t.match(mo) || Yi.transparent;
    i = i.map(Number);
  }
  return e && !_ && (n = i[0] / nt, o = i[1] / nt, a = i[2] / nt, d = Math.max(n, o, a), h = Math.min(n, o, a), c = (d + h) / 2, d === h ? l = u = 0 : (f = d - h, u = c > 0.5 ? f / (2 - d - h) : f / (d + h), l = d === n ? (o - a) / f + (o < a ? 6 : 0) : d === o ? (a - n) / f + 2 : (n - o) / f + 4, l *= 60), i[0] = ~~(l + 0.5), i[1] = ~~(u * 100 + 0.5), i[2] = ~~(c * 100 + 0.5)), r && i.length < 4 && (i[3] = 1), i;
}, Na = function(t) {
  var e = [], r = [], i = -1;
  return t.split(kr).forEach(function(n) {
    var o = n.match(di) || [];
    e.push.apply(e, o), r.push(i += o.length + 1);
  }), e.c = r, e;
}, To = function(t, e, r) {
  var i = "", n = (t + i).match(kr), o = e ? "hsla(" : "rgba(", a = 0, l, u, c, d;
  if (!n)
    return t;
  if (n = n.map(function(h) {
    return (h = za(h, e, 1)) && o + (e ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")";
  }), r && (c = Na(t), l = r.c, l.join(i) !== c.c.join(i)))
    for (u = t.replace(kr, "1").split(di), d = u.length - 1; a < d; a++)
      i += u[a] + (~l.indexOf(a) ? n.shift() || o + "0,0,0,0)" : (c.length ? c : n.length ? n : r).shift());
  if (!u)
    for (u = t.split(kr), d = u.length - 1; a < d; a++)
      i += u[a] + n[a];
  return i + u[d];
}, kr = function() {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Yi)
    s += "|" + t + "\\b";
  return new RegExp(s + ")", "gi");
}(), fu = /hsl[a]?\(/, Fa = function(t) {
  var e = t.join(" "), r;
  if (kr.lastIndex = 0, kr.test(e))
    return r = fu.test(e), t[1] = To(t[1], r), t[0] = To(t[0], r, Na(t[1])), !0;
}, ln, Te = function() {
  var s = Date.now, t = 500, e = 33, r = s(), i = r, n = 1e3 / 240, o = n, a = [], l, u, c, d, h, f, _ = function p(m) {
    var b = s() - i, w = m === !0, S, v, T, k;
    if ((b > t || b < 0) && (r += b - e), i += b, T = i - r, S = T - o, (S > 0 || w) && (k = ++d.frame, h = T - d.time * 1e3, d.time = T = T / 1e3, o += S + (S >= n ? 4 : n - S), v = 1), w || (l = u(p)), v)
      for (f = 0; f < a.length; f++)
        a[f](T, h, k, m);
  };
  return d = {
    time: 0,
    frame: 0,
    tick: function() {
      _(!0);
    },
    deltaRatio: function(m) {
      return h / (1e3 / (m || 60));
    },
    wake: function() {
      pa && (!ms && Us() && (Ge = ms = window, Vs = Ge.document || {}, Pe.gsap = _e, (Ge.gsapVersions || (Ge.gsapVersions = [])).push(_e.version), _a(Bn || Ge.GreenSockGlobals || !Ge.gsap && Ge || {}), Aa.forEach(La)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && d.sleep(), u = c || function(m) {
        return setTimeout(m, o - d.time * 1e3 + 1 | 0);
      }, ln = 1, _(2));
    },
    sleep: function() {
      (c ? cancelAnimationFrame : clearTimeout)(l), ln = 0, u = on;
    },
    lagSmoothing: function(m, b) {
      t = m || 1 / 0, e = Math.min(b || 33, t);
    },
    fps: function(m) {
      n = 1e3 / (m || 240), o = d.time * 1e3 + n;
    },
    add: function(m, b, w) {
      var S = b ? function(v, T, k, x) {
        m(v, T, k, x), d.remove(S);
      } : m;
      return d.remove(m), a[w ? "unshift" : "push"](S), ki(), S;
    },
    remove: function(m, b) {
      ~(b = a.indexOf(m)) && a.splice(b, 1) && f >= b && f--;
    },
    _listeners: a
  }, d;
}(), ki = function() {
  return !ln && Te.wake();
}, G = {}, hu = /^[\d.\-M][\d.\-,\s]/, du = /["']/g, pu = function(t) {
  for (var e = {}, r = t.substr(1, t.length - 3).split(":"), i = r[0], n = 1, o = r.length, a, l, u; n < o; n++)
    l = r[n], a = n !== o - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, a), e[i] = isNaN(u) ? u.replace(du, "").trim() : +u, i = l.substr(a + 1).trim();
  return e;
}, _u = function(t) {
  var e = t.indexOf("(") + 1, r = t.indexOf(")"), i = t.indexOf("(", e);
  return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
}, gu = function(t) {
  var e = (t + "").split("("), r = G[e[0]];
  return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [pu(e[1])] : _u(t).split(",").map(wa)) : G._CE && hu.test(t) ? G._CE("", t) : r;
}, mu = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, Gr = function(t, e) {
  return t && (mt(t) ? t : G[t] || gu(t)) || e;
}, ri = function(t, e, r, i) {
  r === void 0 && (r = function(l) {
    return 1 - e(1 - l);
  }), i === void 0 && (i = function(l) {
    return l < 0.5 ? e(l * 2) / 2 : 1 - e((1 - l) * 2) / 2;
  });
  var n = {
    easeIn: e,
    easeOut: r,
    easeInOut: i
  }, o;
  return fe(t, function(a) {
    G[a] = Pe[a] = n, G[o = a.toLowerCase()] = r;
    for (var l in n)
      G[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = G[a + "." + l] = n[l];
  }), n;
}, Ia = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, ss = function s(t, e, r) {
  var i = e >= 1 ? e : 1, n = (r || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), o = n / gs * (Math.asin(1 / i) || 0), a = function(c) {
    return c === 1 ? 1 : i * Math.pow(2, -10 * c) * Wl((c - o) * n) + 1;
  }, l = t === "out" ? a : t === "in" ? function(u) {
    return 1 - a(1 - u);
  } : Ia(a);
  return n = gs / n, l.config = function(u, c) {
    return s(t, u, c);
  }, l;
}, os = function s(t, e) {
  e === void 0 && (e = 1.70158);
  var r = function(o) {
    return o ? --o * o * ((e + 1) * o + e) + 1 : 0;
  }, i = t === "out" ? r : t === "in" ? function(n) {
    return 1 - r(1 - n);
  } : Ia(r);
  return i.config = function(n) {
    return s(t, n);
  }, i;
};
fe("Linear,Quad,Cubic,Quart,Quint,Strong", function(s, t) {
  var e = t < 5 ? t + 1 : t;
  ri(s + ",Power" + (e - 1), t ? function(r) {
    return Math.pow(r, e);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, e);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, e) / 2 : 1 - Math.pow((1 - r) * 2, e) / 2;
  });
});
G.Linear.easeNone = G.none = G.Linear.easeIn;
ri("Elastic", ss("in"), ss("out"), ss());
(function(s, t) {
  var e = 1 / t, r = 2 * e, i = 2.5 * e, n = function(a) {
    return a < e ? s * a * a : a < r ? s * Math.pow(a - 1.5 / t, 2) + 0.75 : a < i ? s * (a -= 2.25 / t) * a + 0.9375 : s * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  ri("Bounce", function(o) {
    return 1 - n(1 - o);
  }, n);
})(7.5625, 2.75);
ri("Expo", function(s) {
  return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
});
ri("Circ", function(s) {
  return -(ca(1 - s * s) - 1);
});
ri("Sine", function(s) {
  return s === 1 ? 1 : -Bl(s * Il) + 1;
});
ri("Back", os("in"), os("out"), os());
G.SteppedEase = G.steps = Pe.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var r = 1 / t, i = t + (e ? 0 : 1), n = e ? 1 : 0, o = 1 - st;
    return function(a) {
      return ((i * pn(0, o, a) | 0) + n) * r;
    };
  }
};
nn.ease = G["quad.out"];
fe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(s) {
  return Gs += s + "," + s + "Params,";
});
var Ya = function(t, e) {
  this.id = Yl++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : va, this.set = e ? e.getSetter : to;
}, un = /* @__PURE__ */ function() {
  function s(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Ci(this, +e.duration, 1, 1), this.data = e.data, lt && (this._ctx = lt, lt.data.push(this)), ln || Te.wake();
  }
  var t = s.prototype;
  return t.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, t.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, Ci(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(r, i) {
    if (ki(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (jn(this, r), !n._dp || n.parent || Ta(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && Qe(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === st || !this._initted && this._dur && r || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), ya(this, r, i)), this;
  }, t.time = function(r, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + wo(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time;
  }, t.totalProgress = function(r, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(r, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + wo(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(r, i) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * n, i) : this._repeat ? Ei(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(r, i) {
    if (!arguments.length)
      return this._rts === -st ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var n = this.parent && this._ts ? Hn(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -st ? 0 : this._rts, this.totalTime(pn(-Math.abs(this._delay), this.totalDuration(), n), i !== !1), Jn(this), Zl(this);
  }, t.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ki(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== st && (this._tTime -= st)))), this) : this._ps;
  }, t.startTime = function(r) {
    if (arguments.length) {
      this._start = ct(r);
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && Qe(i, this, this._start - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(r) {
    return this._start + (ce(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(r) {
    var i = this.parent || this._dp;
    return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Hn(i.rawTime(r), this) : this._tTime : this._tTime;
  }, t.revert = function(r) {
    r === void 0 && (r = ql);
    var i = Bt;
    return Bt = r, Qs(this) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), Bt = i, this;
  }, t.globalTime = function(r) {
    for (var i = this, n = arguments.length ? r : i.rawTime(); i; )
      n = i._start + n / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(r) : n;
  }, t.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, xo(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(r) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = r, xo(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, t.seek = function(r, i) {
    return this.totalTime(De(this, r), ce(i));
  }, t.restart = function(r, i) {
    return this.play().totalTime(r ? -this._delay : 0, ce(i)), this._dur || (this._zTime = -st), this;
  }, t.play = function(r, i) {
    return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
  }, t.reverse = function(r, i) {
    return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, t.pause = function(r, i) {
    return r != null && this.seek(r, i), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -st : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -st, this;
  }, t.isActive = function() {
    var r = this.parent || this._dp, i = this._start, n;
    return !!(!r || this._ts && this._initted && r.isActive() && (n = r.rawTime(!0)) >= i && n < this.endTime(!0) - st);
  }, t.eventCallback = function(r, i, n) {
    var o = this.vars;
    return arguments.length > 1 ? (i ? (o[r] = i, n && (o[r + "Params"] = n), r === "onUpdate" && (this._onUpdate = i)) : delete o[r], this) : o[r];
  }, t.then = function(r) {
    var i = this, n = i._prom;
    return new Promise(function(o) {
      var a = mt(r) ? r : xa, l = function() {
        var c = i.then;
        i.then = null, n && n(), mt(a) && (a = a(i)) && (a.then || a === i) && (i.then = c), o(a), i.then = c;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? l() : i._prom = l;
    });
  }, t.kill = function() {
    Ii(this);
  }, s;
}();
Me(un.prototype, {
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
  _zTime: -st,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var ue = /* @__PURE__ */ function(s) {
  ua(t, s);
  function t(r, i) {
    var n;
    return r === void 0 && (r = {}), n = s.call(this, r) || this, n.labels = {}, n.smoothChildTiming = !!r.smoothChildTiming, n.autoRemoveChildren = !!r.autoRemoveChildren, n._sort = ce(r.sortChildren), ft && Qe(r.parent || ft, or(n), i), r.reversed && n.reverse(), r.paused && n.paused(!0), r.scrollTrigger && Sa(or(n), r.scrollTrigger), n;
  }
  var e = t.prototype;
  return e.to = function(i, n, o) {
    return $i(0, arguments, this), this;
  }, e.from = function(i, n, o) {
    return $i(1, arguments, this), this;
  }, e.fromTo = function(i, n, o, a) {
    return $i(2, arguments, this), this;
  }, e.set = function(i, n, o) {
    return n.duration = 0, n.parent = this, Vi(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new Ct(i, n, De(this, o), 1), this;
  }, e.call = function(i, n, o) {
    return Qe(this, Ct.delayedCall(0, i, n), o);
  }, e.staggerTo = function(i, n, o, a, l, u, c) {
    return o.duration = n, o.stagger = o.stagger || a, o.onComplete = u, o.onCompleteParams = c, o.parent = this, new Ct(i, o, De(this, l)), this;
  }, e.staggerFrom = function(i, n, o, a, l, u, c) {
    return o.runBackwards = 1, Vi(o).immediateRender = ce(o.immediateRender), this.staggerTo(i, n, o, a, l, u, c);
  }, e.staggerFromTo = function(i, n, o, a, l, u, c, d) {
    return a.startAt = o, Vi(a).immediateRender = ce(a.immediateRender), this.staggerTo(i, n, a, l, u, c, d);
  }, e.render = function(i, n, o) {
    var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = i <= 0 ? 0 : ct(i), d = this._zTime < 0 != i < 0 && (this._initted || !u), h, f, _, p, m, b, w, S, v, T, k, x;
    if (this !== ft && c > l && i >= 0 && (c = l), c !== this._tTime || o || d) {
      if (a !== this._time && u && (c += this._time - a, i += this._time - a), h = c, v = this._start, S = this._ts, b = !S, d && (u || (a = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
        if (k = this._yoyo, m = u + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(m * 100 + i, n, o);
        if (h = ct(c % m), c === l ? (p = this._repeat, h = u) : (T = ct(c / m), p = ~~T, p && p === T && (h = u, p--), h > u && (h = u)), T = Ei(this._tTime, m), !a && this._tTime && T !== p && this._tTime - T * m - this._dur <= 0 && (T = p), k && p & 1 && (h = u - h, x = 1), p !== T && !this._lock) {
          var P = k && T & 1, C = P === (k && p & 1);
          if (p < T && (P = !P), a = P ? 0 : c % u ? u : c, this._lock = 1, this.render(a || (x ? 0 : ct(p * m)), n, !u)._lock = 0, this._tTime = c, !n && this.parent && Ee(this, "onRepeat"), this.vars.repeatRefresh && !x && (this.invalidate()._lock = 1, T = p), a && a !== this._time || b !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, l = this._tDur, C && (this._lock = 2, a = P ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !x && this.invalidate()), this._lock = 0, !this._ts && !b)
            return this;
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (w = eu(this, ct(a), ct(h)), w && (c -= h - (h = w._start))), this._tTime = c, this._time = h, this._act = !!S, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && c && u && !n && !T && (Ee(this, "onStart"), this._tTime !== c))
        return this;
      if (h >= a && i >= 0)
        for (f = this._first; f; ) {
          if (_ = f._next, (f._act || h >= f._start) && f._ts && w !== f) {
            if (f.parent !== this)
              return this.render(i, n, o);
            if (f.render(f._ts > 0 ? (h - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (h - f._start) * f._ts, n, o), h !== this._time || !this._ts && !b) {
              w = 0, _ && (c += this._zTime = -st);
              break;
            }
          }
          f = _;
        }
      else {
        f = this._last;
        for (var E = i < 0 ? i : h; f; ) {
          if (_ = f._prev, (f._act || E <= f._end) && f._ts && w !== f) {
            if (f.parent !== this)
              return this.render(i, n, o);
            if (f.render(f._ts > 0 ? (E - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (E - f._start) * f._ts, n, o || Bt && Qs(f)), h !== this._time || !this._ts && !b) {
              w = 0, _ && (c += this._zTime = E ? -st : st);
              break;
            }
          }
          f = _;
        }
      }
      if (w && !n && (this.pause(), w.render(h >= a ? 0 : -st)._zTime = h >= a ? 1 : -1, this._ts))
        return this._start = v, Jn(this), this.render(i, n, o);
      this._onUpdate && !n && Ee(this, "onUpdate", !0), (c === l && this._tTime >= this.totalDuration() || !c && a) && (v === this._start || Math.abs(S) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (c === l && this._ts > 0 || !c && this._ts < 0) && Mr(this, 1), !n && !(i < 0 && !a) && (c || a || !l) && (Ee(this, c === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(i, n) {
    var o = this;
    if (fr(n) || (n = De(this, n, i)), !(i instanceof un)) {
      if (Qt(i))
        return i.forEach(function(a) {
          return o.add(a, n);
        }), this;
      if (zt(i))
        return this.addLabel(i, n);
      if (mt(i))
        i = Ct.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? Qe(this, i, n) : this;
  }, e.getChildren = function(i, n, o, a) {
    i === void 0 && (i = !0), n === void 0 && (n = !0), o === void 0 && (o = !0), a === void 0 && (a = -ze);
    for (var l = [], u = this._first; u; )
      u._start >= a && (u instanceof Ct ? n && l.push(u) : (o && l.push(u), i && l.push.apply(l, u.getChildren(!0, n, o)))), u = u._next;
    return l;
  }, e.getById = function(i) {
    for (var n = this.getChildren(1, 1, 1), o = n.length; o--; )
      if (n[o].vars.id === i)
        return n[o];
  }, e.remove = function(i) {
    return zt(i) ? this.removeLabel(i) : mt(i) ? this.killTweensOf(i) : (i.parent === this && Zn(this, i), i === this._recent && (this._recent = this._last), qr(this));
  }, e.totalTime = function(i, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ct(Te.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), s.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(i, n) {
    return this.labels[i] = De(this, n), this;
  }, e.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, e.addPause = function(i, n, o) {
    var a = Ct.delayedCall(0, n || on, o);
    return a.data = "isPause", this._hasPause = 1, Qe(this, a, De(this, i));
  }, e.removePause = function(i) {
    var n = this._first;
    for (i = De(this, i); n; )
      n._start === i && n.data === "isPause" && Mr(n), n = n._next;
  }, e.killTweensOf = function(i, n, o) {
    for (var a = this.getTweensOf(i, o), l = a.length; l--; )
      xr !== a[l] && a[l].kill(i, n);
    return this;
  }, e.getTweensOf = function(i, n) {
    for (var o = [], a = Ne(i), l = this._first, u = fr(n), c; l; )
      l instanceof Ct ? Gl(l._targets, a) && (u ? (!xr || l._initted && l._ts) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) && o.push(l) : (c = l.getTweensOf(a, n)).length && o.push.apply(o, c), l = l._next;
    return o;
  }, e.tweenTo = function(i, n) {
    n = n || {};
    var o = this, a = De(o, i), l = n, u = l.startAt, c = l.onStart, d = l.onStartParams, h = l.immediateRender, f, _ = Ct.to(o, Me({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: n.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || st,
      onStart: function() {
        if (o.pause(), !f) {
          var m = n.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale());
          _._dur !== m && Ci(_, m, 0, 1).render(_._time, !0, !0), f = 1;
        }
        c && c.apply(_, d || []);
      }
    }, n));
    return h ? _.render(0) : _;
  }, e.tweenFromTo = function(i, n, o) {
    return this.tweenTo(n, Me({
      startAt: {
        time: De(this, i)
      }
    }, o));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(i) {
    return i === void 0 && (i = this._time), bo(this, De(this, i));
  }, e.previousLabel = function(i) {
    return i === void 0 && (i = this._time), bo(this, De(this, i), 1);
  }, e.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + st);
  }, e.shiftChildren = function(i, n, o) {
    o === void 0 && (o = 0);
    var a = this._first, l = this.labels, u;
    for (i = ct(i); a; )
      a._start >= o && (a._start += i, a._end += i), a = a._next;
    if (n)
      for (u in l)
        l[u] >= o && (l[u] += i);
    return qr(this);
  }, e.invalidate = function(i) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(i), n = n._next;
    return s.prototype.invalidate.call(this, i);
  }, e.clear = function(i) {
    i === void 0 && (i = !0);
    for (var n = this._first, o; n; )
      o = n._next, this.remove(n), n = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), qr(this);
  }, e.totalDuration = function(i) {
    var n = 0, o = this, a = o._last, l = ze, u, c, d;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
    if (o._dirty) {
      for (d = o.parent; a; )
        u = a._prev, a._dirty && a.totalDuration(), c = a._start, c > l && o._sort && a._ts && !o._lock ? (o._lock = 1, Qe(o, a, c - a._delay, 1)._lock = 0) : l = c, c < 0 && a._ts && (n -= c, (!d && !o._dp || d && d.smoothChildTiming) && (o._start += ct(c / o._ts), o._time -= c, o._tTime -= c), o.shiftChildren(-c, !1, -1 / 0), l = 0), a._end > n && a._ts && (n = a._end), a = u;
      Ci(o, o === ft && o._time > n ? o._time : n, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, t.updateRoot = function(i) {
    if (ft._ts && (ya(ft, Hn(i, ft)), ma = Te.frame), Te.frame >= vo) {
      vo += ke.autoSleep || 120;
      var n = ft._first;
      if ((!n || !n._ts) && ke.autoSleep && Te._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || Te.sleep();
      }
    }
  }, t;
}(un);
Me(ue.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var vu = function(t, e, r, i, n, o, a) {
  var l = new he(this._pt, t, e, 0, 1, Va, null, n), u = 0, c = 0, d, h, f, _, p, m, b, w;
  for (l.b = r, l.e = i, r += "", i += "", (b = ~i.indexOf("random(")) && (i = an(i)), o && (w = [r, i], o(w, t, e), r = w[0], i = w[1]), h = r.match(rs) || []; d = rs.exec(i); )
    _ = d[0], p = i.substring(u, d.index), f ? f = (f + 1) % 5 : p.substr(-5) === "rgba(" && (f = 1), _ !== h[c++] && (m = parseFloat(h[c - 1]) || 0, l._pt = {
      _next: l._pt,
      p: p || c === 1 ? p : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: _.charAt(1) === "=" ? gi(m, _) - m : parseFloat(_) - m,
      m: f && f < 4 ? Math.round : 0
    }, u = rs.lastIndex);
  return l.c = u < i.length ? i.substring(u, i.length) : "", l.fp = a, (da.test(i) || b) && (l.e = 0), this._pt = l, l;
}, Zs = function(t, e, r, i, n, o, a, l, u, c) {
  mt(i) && (i = i(n || 0, t, o));
  var d = t[e], h = r !== "get" ? r : mt(d) ? u ? t[e.indexOf("set") || !mt(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : d, f = mt(d) ? u ? Tu : Ha : js, _;
  if (zt(i) && (~i.indexOf("random(") && (i = an(i)), i.charAt(1) === "=" && (_ = gi(h, i) + (Gt(h) || 0), (_ || _ === 0) && (i = _))), !c || h !== i || Ss)
    return !isNaN(h * i) && i !== "" ? (_ = new he(this._pt, t, e, +h || 0, i - (h || 0), typeof d == "boolean" ? Eu : Ua, 0, f), u && (_.fp = u), a && _.modifier(a, this, t), this._pt = _) : (!d && !(e in t) && $s(e, i), vu.call(this, t, e, h, i, f, l || ke.stringFilter, u));
}, yu = function(t, e, r, i, n) {
  if (mt(t) && (t = qi(t, n, e, r, i)), !tr(t) || t.style && t.nodeType || Qt(t) || fa(t))
    return zt(t) ? qi(t, n, e, r, i) : t;
  var o = {}, a;
  for (a in t)
    o[a] = qi(t[a], n, e, r, i);
  return o;
}, Ba = function(t, e, r, i, n, o) {
  var a, l, u, c;
  if (xe[t] && (a = new xe[t]()).init(n, a.rawVars ? e[t] : yu(e[t], i, n, o, r), r, i, o) !== !1 && (r._pt = l = new he(r._pt, n, t, 0, 1, a.render, a, 0, a.priority), r !== pi))
    for (u = r._ptLookup[r._targets.indexOf(n)], c = a._props.length; c--; )
      u[a._props[c]] = l;
  return a;
}, xr, Ss, Js = function s(t, e, r) {
  var i = t.vars, n = i.ease, o = i.startAt, a = i.immediateRender, l = i.lazy, u = i.onUpdate, c = i.runBackwards, d = i.yoyoEase, h = i.keyframes, f = i.autoRevert, _ = t._dur, p = t._startAt, m = t._targets, b = t.parent, w = b && b.data === "nested" ? b.vars.targets : m, S = t._overwrite === "auto" && !Xs, v = t.timeline, T = i.easeReverse || d, k, x, P, C, E, W, O, K, Y, Q, $, L, Z;
  if (v && (!h || !n) && (n = "none"), t._ease = Gr(n, nn.ease), t._rEase = T && (Gr(T) || t._ease), t._from = !v && !!i.runBackwards, t._from && (t.ratio = 1), !v || h && !i.stagger) {
    if (K = m[0] ? $r(m[0]).harness : 0, L = K && i[K.prop], k = Xn(i, qs), p && (p._zTime < 0 && p.progress(1), e < 0 && c && a && !f ? p.render(-1, !0) : p.revert(c && _ ? Dn : $l), p._lazy = 0), o) {
      if (Mr(t._startAt = Ct.set(m, Me({
        data: "isStart",
        overwrite: !1,
        parent: b,
        immediateRender: !0,
        lazy: !p && ce(l),
        startAt: null,
        delay: 0,
        onUpdate: u && function() {
          return Ee(t, "onUpdate");
        },
        stagger: 0
      }, o))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Bt || !a && !f) && t._startAt.revert(Dn), a && _ && e <= 0 && r <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (c && _ && !p) {
      if (e && (a = !1), P = Me({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !p && ce(l),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: b
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, k), L && (P[K.prop] = L), Mr(t._startAt = Ct.set(m, P)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Bt ? t._startAt.revert(Dn) : t._startAt.render(-1, !0)), t._zTime = e, !a)
        s(t._startAt, st, st);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, l = _ && ce(l) || l && !_, x = 0; x < m.length; x++) {
      if (E = m[x], O = E._gsap || Ks(m)[x]._gsap, t._ptLookup[x] = Q = {}, vs[O.id] && Cr.length && Wn(), $ = w === m ? x : w.indexOf(E), K && (Y = new K()).init(E, L || k, t, $, w) !== !1 && (t._pt = C = new he(t._pt, E, Y.name, 0, 1, Y.render, Y, 0, Y.priority), Y._props.forEach(function(rt) {
        Q[rt] = C;
      }), Y.priority && (W = 1)), !K || L)
        for (P in k)
          xe[P] && (Y = Ba(P, k, t, $, E, w)) ? Y.priority && (W = 1) : Q[P] = C = Zs.call(t, E, P, "get", k[P], $, w, 0, i.stringFilter);
      t._op && t._op[x] && t.kill(E, t._op[x]), S && t._pt && (xr = t, ft.killTweensOf(E, Q, t.globalTime(e)), Z = !t.parent, xr = 0), t._pt && l && (vs[O.id] = 1);
    }
    W && $a(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = u, t._initted = (!t._op || t._pt) && !Z, h && e <= 0 && v.render(ze, !0, !0);
}, wu = function(t, e, r, i, n, o, a, l) {
  var u = (t._pt && t._ptCache || (t._ptCache = {}))[e], c, d, h, f;
  if (!u)
    for (u = t._ptCache[e] = [], h = t._ptLookup, f = t._targets.length; f--; ) {
      if (c = h[f][e], c && c.d && c.d._pt)
        for (c = c.d._pt; c && c.p !== e && c.fp !== e; )
          c = c._next;
      if (!c)
        return Ss = 1, t.vars[e] = "+=0", Js(t, a), Ss = 0, l ? sn(e + " not eligible for reset. Try splitting into individual properties") : 1;
      u.push(c);
    }
  for (f = u.length; f--; )
    d = u[f], c = d._pt || d, c.s = (i || i === 0) && !n ? i : c.s + (i || 0) + o * c.c, c.c = r - c.s, d.e && (d.e = xt(r) + Gt(d.e)), d.b && (d.b = c.s + Gt(d.b));
}, xu = function(t, e) {
  var r = t[0] ? $r(t[0]).harness : 0, i = r && r.aliases, n, o, a, l;
  if (!i)
    return e;
  n = Si({}, e);
  for (o in i)
    if (o in n)
      for (l = i[o].split(","), a = l.length; a--; )
        n[l[a]] = n[o];
  return n;
}, bu = function(t, e, r, i) {
  var n = e.ease || i || "power1.inOut", o, a;
  if (Qt(e))
    a = r[t] || (r[t] = []), e.forEach(function(l, u) {
      return a.push({
        t: u / (e.length - 1) * 100,
        v: l,
        e: n
      });
    });
  else
    for (o in e)
      a = r[o] || (r[o] = []), o === "ease" || a.push({
        t: parseFloat(t),
        v: e[o],
        e: n
      });
}, qi = function(t, e, r, i, n) {
  return mt(t) ? t.call(e, r, i, n) : zt(t) && ~t.indexOf("random(") ? an(t) : t;
}, Wa = Gs + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", Xa = {};
fe(Wa + ",id,stagger,delay,duration,paused,scrollTrigger", function(s) {
  return Xa[s] = 1;
});
var Ct = /* @__PURE__ */ function(s) {
  ua(t, s);
  function t(r, i, n, o) {
    var a;
    typeof i == "number" && (n.duration = i, i = n, n = null), a = s.call(this, o ? i : Vi(i)) || this;
    var l = a.vars, u = l.duration, c = l.delay, d = l.immediateRender, h = l.stagger, f = l.overwrite, _ = l.keyframes, p = l.defaults, m = l.scrollTrigger, b = i.parent || ft, w = (Qt(r) || fa(r) ? fr(r[0]) : "length" in i) ? [r] : Ne(r), S, v, T, k, x, P, C, E;
    if (a._targets = w.length ? Ks(w) : sn("GSAP target " + r + " not found. https://gsap.com", !ke.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = f, _ || h || vn(u) || vn(c)) {
      i = a.vars;
      var W = i.easeReverse || i.yoyoEase;
      if (S = a.timeline = new ue({
        data: "nested",
        defaults: p || {},
        targets: b && b.data === "nested" ? b.vars.targets : w
      }), S.kill(), S.parent = S._dp = or(a), S._start = 0, h || vn(u) || vn(c)) {
        if (k = w.length, C = h && Pa(h), tr(h))
          for (x in h)
            ~Wa.indexOf(x) && (E || (E = {}), E[x] = h[x]);
        for (v = 0; v < k; v++)
          T = Xn(i, Xa), T.stagger = 0, W && (T.easeReverse = W), E && Si(T, E), P = w[v], T.duration = +qi(u, or(a), v, P, w), T.delay = (+qi(c, or(a), v, P, w) || 0) - a._delay, !h && k === 1 && T.delay && (a._delay = c = T.delay, a._start += c, T.delay = 0), S.to(P, T, C ? C(v, P, w) : 0), S._ease = G.none;
        S.duration() ? u = c = 0 : a.timeline = 0;
      } else if (_) {
        Vi(Me(S.vars.defaults, {
          ease: "none"
        })), S._ease = Gr(_.ease || i.ease || "none");
        var O = 0, K, Y, Q;
        if (Qt(_))
          _.forEach(function($) {
            return S.to(w, $, ">");
          }), S.duration();
        else {
          T = {};
          for (x in _)
            x === "ease" || x === "easeEach" || bu(x, _[x], T, _.easeEach);
          for (x in T)
            for (K = T[x].sort(function($, L) {
              return $.t - L.t;
            }), O = 0, v = 0; v < K.length; v++)
              Y = K[v], Q = {
                ease: Y.e,
                duration: (Y.t - (v ? K[v - 1].t : 0)) / 100 * u
              }, Q[x] = Y.v, S.to(w, Q, O), O += Q.duration;
          S.duration() < u && S.to({}, {
            duration: u - S.duration()
          });
        }
      }
      u || a.duration(u = S.duration());
    } else
      a.timeline = 0;
    return f === !0 && !Xs && (xr = or(a), ft.killTweensOf(w), xr = 0), Qe(b, or(a), n), i.reversed && a.reverse(), i.paused && a.paused(!0), (d || !u && !_ && a._start === ct(b._time) && ce(d) && Jl(or(a)) && b.data !== "nested") && (a._tTime = -st, a.render(Math.max(0, -c) || 0)), m && Sa(or(a), m), a;
  }
  var e = t.prototype;
  return e.render = function(i, n, o) {
    var a = this._time, l = this._tDur, u = this._dur, c = i < 0, d = i > l - st && !c ? l : i < st ? 0 : i, h, f, _, p, m, b, w, S;
    if (!u)
      tu(this, i, n, o);
    else if (d !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
      if (h = d, S = this.timeline, this._repeat) {
        if (p = u + this._rDelay, this._repeat < -1 && c)
          return this.totalTime(p * 100 + i, n, o);
        if (h = ct(d % p), d === l ? (_ = this._repeat, h = u) : (m = ct(d / p), _ = ~~m, _ && _ === m ? (h = u, _--) : h > u && (h = u)), b = this._yoyo && _ & 1, b && (h = u - h), m = Ei(this._tTime, p), h === a && !o && this._initted && _ === m)
          return this._tTime = d, this;
        _ !== m && this.vars.repeatRefresh && !b && !this._lock && h !== p && this._initted && (this._lock = o = 1, this.render(ct(p * _), !0).invalidate()._lock = 0);
      }
      if (!this._initted) {
        if (Ea(this, c ? i : h, o, n, d))
          return this._tTime = 0, this;
        if (a !== this._time && !(o && this.vars.repeatRefresh && _ !== m))
          return this;
        if (u !== this._dur)
          return this.render(i, n, o);
      }
      if (this._rEase) {
        var v = h < a;
        if (v !== this._inv) {
          var T = v ? a : u - a;
          this._inv = v, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = a, this._invRecip = T ? (v ? -1 : 1) / T : 0, this._invScale = v ? -this.ratio : 1 - this.ratio, this._invEase = v ? this._rEase : this._ease;
        }
        this.ratio = w = this._invRatio + this._invScale * this._invEase((h - this._invTime) * this._invRecip);
      } else
        this.ratio = w = this._ease(h / u);
      if (this._from && (this.ratio = w = 1 - w), this._tTime = d, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), !a && d && !n && !m && (Ee(this, "onStart"), this._tTime !== d))
        return this;
      for (f = this._pt; f; )
        f.r(w, f.d), f = f._next;
      S && S.render(i < 0 ? i : S._dur * S._ease(h / this._dur), n, o) || this._startAt && (this._zTime = i), this._onUpdate && !n && (c && ys(this, i, n, o), Ee(this, "onUpdate")), this._repeat && _ !== m && this.vars.onRepeat && !n && this.parent && Ee(this, "onRepeat"), (d === this._tDur || !d) && this._tTime === d && (c && !this._onUpdate && ys(this, i, !0, !0), (i || !u) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && Mr(this, 1), !n && !(c && !a) && (d || a || b) && (Ee(this, d === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), s.prototype.invalidate.call(this, i);
  }, e.resetTo = function(i, n, o, a, l) {
    ln || Te.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || Js(this, u), c = this._ease(u / this._dur), wu(this, i, n, o, a, c, u, l) ? this.resetTo(i, n, o, a, 1) : (jn(this, 0), this.parent || ba(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(i, n) {
    if (n === void 0 && (n = "all"), !i && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Ii(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Bt), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, n, xr && xr.vars.overwrite !== !0)._first || Ii(this), this.parent && o !== this.timeline.totalDuration() && Ci(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, l = i ? Ne(i) : a, u = this._ptLookup, c = this._pt, d, h, f, _, p, m, b;
    if ((!n || n === "all") && Ql(a, l))
      return n === "all" && (this._pt = 0), Ii(this);
    for (d = this._op = this._op || [], n !== "all" && (zt(n) && (p = {}, fe(n, function(w) {
      return p[w] = 1;
    }), n = p), n = xu(a, n)), b = a.length; b--; )
      if (~l.indexOf(a[b])) {
        h = u[b], n === "all" ? (d[b] = n, _ = h, f = {}) : (f = d[b] = d[b] || {}, _ = n);
        for (p in _)
          m = h && h[p], m && ((!("kill" in m.d) || m.d.kill(p) === !0) && Zn(this, m, "_pt"), delete h[p]), f !== "all" && (f[p] = 1);
      }
    return this._initted && !this._pt && c && Ii(this), this;
  }, t.to = function(i, n) {
    return new t(i, n, arguments[2]);
  }, t.from = function(i, n) {
    return $i(1, arguments);
  }, t.delayedCall = function(i, n, o, a) {
    return new t(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: o,
      onReverseCompleteParams: o,
      callbackScope: a
    });
  }, t.fromTo = function(i, n, o) {
    return $i(2, arguments);
  }, t.set = function(i, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(i, n);
  }, t.killTweensOf = function(i, n, o) {
    return ft.killTweensOf(i, n, o);
  }, t;
}(un);
Me(Ct.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
fe("staggerTo,staggerFrom,staggerFromTo", function(s) {
  Ct[s] = function() {
    var t = new ue(), e = xs.call(arguments, 0);
    return e.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), t[s].apply(t, e);
  };
});
var js = function(t, e, r) {
  return t[e] = r;
}, Ha = function(t, e, r) {
  return t[e](r);
}, Tu = function(t, e, r, i) {
  return t[e](i.fp, r);
}, Su = function(t, e, r) {
  return t.setAttribute(e, r);
}, to = function(t, e) {
  return mt(t[e]) ? Ha : Hs(t[e]) && t.setAttribute ? Su : js;
}, Ua = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, Eu = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, Va = function(t, e) {
  var r = e._pt, i = "";
  if (!t && e.b)
    i = e.b;
  else if (t === 1 && e.e)
    i = e.e;
  else {
    for (; r; )
      i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) + i, r = r._next;
    i += e.c;
  }
  e.set(e.t, e.p, i, e);
}, eo = function(t, e) {
  for (var r = e._pt; r; )
    r.r(t, r.d), r = r._next;
}, Cu = function(t, e, r, i) {
  for (var n = this._pt, o; n; )
    o = n._next, n.p === i && n.modifier(t, e, r), n = o;
}, ku = function(t) {
  for (var e = this._pt, r, i; e; )
    i = e._next, e.p === t && !e.op || e.op === t ? Zn(this, e, "_pt") : e.dep || (r = 1), e = i;
  return !r;
}, Pu = function(t, e, r, i) {
  i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
}, $a = function(t) {
  for (var e = t._pt, r, i, n, o; e; ) {
    for (r = e._next, i = n; i && i.pr > e.pr; )
      i = i._next;
    (e._prev = i ? i._prev : o) ? e._prev._next = e : n = e, (e._next = i) ? i._prev = e : o = e, e = r;
  }
  t._pt = n;
}, he = /* @__PURE__ */ function() {
  function s(e, r, i, n, o, a, l, u, c) {
    this.t = r, this.s = n, this.c = o, this.p = i, this.r = a || Ua, this.d = l || this, this.set = u || js, this.pr = c || 0, this._next = e, e && (e._prev = this);
  }
  var t = s.prototype;
  return t.modifier = function(r, i, n) {
    this.mSet = this.mSet || this.set, this.set = Pu, this.m = r, this.mt = n, this.tween = i;
  }, s;
}();
fe(Gs + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(s) {
  return qs[s] = 1;
});
Pe.TweenMax = Pe.TweenLite = Ct;
Pe.TimelineLite = Pe.TimelineMax = ue;
ft = new ue({
  sortChildren: !1,
  defaults: nn,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
ke.stringFilter = Fa;
var Kr = [], An = {}, Mu = [], So = 0, Ou = 0, as = function(t) {
  return (An[t] || Mu).map(function(e) {
    return e();
  });
}, Es = function() {
  var t = Date.now(), e = [];
  t - So > 2 && (as("matchMediaInit"), Kr.forEach(function(r) {
    var i = r.queries, n = r.conditions, o, a, l, u;
    for (a in i)
      o = Ge.matchMedia(i[a]).matches, o && (l = 1), o !== n[a] && (n[a] = o, u = 1);
    u && (r.revert(), l && e.push(r));
  }), as("matchMediaRevert"), e.forEach(function(r) {
    return r.onMatch(r, function(i) {
      return r.add(null, i);
    });
  }), So = t, as("matchMedia"));
}, qa = /* @__PURE__ */ function() {
  function s(e, r) {
    this.selector = r && bs(r), this.data = [], this._r = [], this.isReverted = !1, this.id = Ou++, e && this.add(e);
  }
  var t = s.prototype;
  return t.add = function(r, i, n) {
    mt(r) && (n = i, i = r, r = mt);
    var o = this, a = function() {
      var u = lt, c = o.selector, d;
      return u && u !== o && u.data.push(o), n && (o.selector = bs(n)), lt = o, d = i.apply(o, arguments), mt(d) && o._r.push(d), lt = u, o.selector = c, o.isReverted = !1, d;
    };
    return o.last = a, r === mt ? a(o, function(l) {
      return o.add(null, l);
    }) : r ? o[r] = a : a;
  }, t.ignore = function(r) {
    var i = lt;
    lt = null, r(this), lt = i;
  }, t.getTweens = function() {
    var r = [];
    return this.data.forEach(function(i) {
      return i instanceof s ? r.push.apply(r, i.getTweens()) : i instanceof Ct && !(i.parent && i.parent.data === "nested") && r.push(i);
    }), r;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(r, i) {
    var n = this;
    if (r ? function() {
      for (var a = n.getTweens(), l = n.data.length, u; l--; )
        u = n.data[l], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(c) {
          return a.splice(a.indexOf(c), 1);
        }));
      for (a.map(function(c) {
        return {
          g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
          t: c
        };
      }).sort(function(c, d) {
        return d.g - c.g || -1 / 0;
      }).forEach(function(c) {
        return c.t.revert(r);
      }), l = n.data.length; l--; )
        u = n.data[l], u instanceof ue ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof Ct) && u.revert && u.revert(r);
      n._r.forEach(function(c) {
        return c(r, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), i)
      for (var o = Kr.length; o--; )
        Kr[o].id === this.id && Kr.splice(o, 1);
  }, t.revert = function(r) {
    this.kill(r || {});
  }, s;
}(), Du = /* @__PURE__ */ function() {
  function s(e) {
    this.contexts = [], this.scope = e, lt && lt.data.push(this);
  }
  var t = s.prototype;
  return t.add = function(r, i, n) {
    tr(r) || (r = {
      matches: r
    });
    var o = new qa(0, n || this.scope), a = o.conditions = {}, l, u, c;
    lt && !o.selector && (o.selector = lt.selector), this.contexts.push(o), i = o.add("onMatch", i), o.queries = r;
    for (u in r)
      u === "all" ? c = 1 : (l = Ge.matchMedia(r[u]), l && (Kr.indexOf(o) < 0 && Kr.push(o), (a[u] = l.matches) && (c = 1), l.addListener ? l.addListener(Es) : l.addEventListener("change", Es)));
    return c && i(o, function(d) {
      return o.add(null, d);
    }), this;
  }, t.revert = function(r) {
    this.kill(r || {});
  }, t.kill = function(r) {
    this.contexts.forEach(function(i) {
      return i.kill(r, !0);
    });
  }, s;
}(), Un = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    e.forEach(function(i) {
      return La(i);
    });
  },
  timeline: function(t) {
    return new ue(t);
  },
  getTweensOf: function(t, e) {
    return ft.getTweensOf(t, e);
  },
  getProperty: function(t, e, r, i) {
    zt(t) && (t = Ne(t)[0]);
    var n = $r(t || {}).get, o = r ? xa : wa;
    return r === "native" && (r = ""), t && (e ? o((xe[e] && xe[e].get || n)(t, e, r, i)) : function(a, l, u) {
      return o((xe[a] && xe[a].get || n)(t, a, l, u));
    });
  },
  quickSetter: function(t, e, r) {
    if (t = Ne(t), t.length > 1) {
      var i = t.map(function(c) {
        return _e.quickSetter(c, e, r);
      }), n = i.length;
      return function(c) {
        for (var d = n; d--; )
          i[d](c);
      };
    }
    t = t[0] || {};
    var o = xe[e], a = $r(t), l = a.harness && (a.harness.aliases || {})[e] || e, u = o ? function(c) {
      var d = new o();
      pi._pt = 0, d.init(t, r ? c + r : c, pi, 0, [t]), d.render(1, d), pi._pt && eo(1, pi);
    } : a.set(t, l);
    return o ? u : function(c) {
      return u(t, l, r ? c + r : c, a, 1);
    };
  },
  quickTo: function(t, e, r) {
    var i, n = _e.to(t, Me((i = {}, i[e] = "+=0.1", i.paused = !0, i.stagger = 0, i), r || {})), o = function(l, u, c) {
      return n.resetTo(e, l, u, c);
    };
    return o.tween = n, o;
  },
  isTweening: function(t) {
    return ft.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = Gr(t.ease, nn.ease)), yo(nn, t || {});
  },
  config: function(t) {
    return yo(ke, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, r = t.effect, i = t.plugins, n = t.defaults, o = t.extendTimeline;
    (i || "").split(",").forEach(function(a) {
      return a && !xe[a] && !Pe[a] && sn(e + " effect requires " + a + " plugin.");
    }), is[e] = function(a, l, u) {
      return r(Ne(a), Me(l || {}, n), u);
    }, o && (ue.prototype[e] = function(a, l, u) {
      return this.add(is[e](a, tr(l) ? l : (u = l) && {}, this), u);
    });
  },
  registerEase: function(t, e) {
    G[t] = Gr(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? Gr(t, e) : G;
  },
  getById: function(t) {
    return ft.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var r = new ue(t), i, n;
    for (r.smoothChildTiming = ce(t.smoothChildTiming), ft.remove(r), r._dp = 0, r._time = r._tTime = ft._time, i = ft._first; i; )
      n = i._next, (e || !(!i._dur && i instanceof Ct && i.vars.onComplete === i._targets[0])) && Qe(r, i, i._start - i._delay), i = n;
    return Qe(ft, r, 0), r;
  },
  context: function(t, e) {
    return t ? new qa(t, e) : lt;
  },
  matchMedia: function(t) {
    return new Du(t);
  },
  matchMediaRefresh: function() {
    return Kr.forEach(function(t) {
      var e = t.conditions, r, i;
      for (i in e)
        e[i] && (e[i] = !1, r = 1);
      r && t.revert();
    }) || Es();
  },
  addEventListener: function(t, e) {
    var r = An[t] || (An[t] = []);
    ~r.indexOf(e) || r.push(e);
  },
  removeEventListener: function(t, e) {
    var r = An[t], i = r && r.indexOf(e);
    i >= 0 && r.splice(i, 1);
  },
  utils: {
    wrap: lu,
    wrapYoyo: uu,
    distribute: Pa,
    random: Oa,
    snap: Ma,
    normalize: au,
    getUnit: Gt,
    clamp: iu,
    splitColor: za,
    toArray: Ne,
    selector: bs,
    mapRange: Ra,
    pipe: su,
    unitize: ou,
    interpolate: cu,
    shuffle: ka
  },
  install: _a,
  effects: is,
  ticker: Te,
  updateRoot: ue.updateRoot,
  plugins: xe,
  globalTimeline: ft,
  core: {
    PropTween: he,
    globals: ga,
    Tween: Ct,
    Timeline: ue,
    Animation: un,
    getCache: $r,
    _removeLinkedListItem: Zn,
    reverting: function() {
      return Bt;
    },
    context: function(t) {
      return t && lt && (lt.data.push(t), t._ctx = lt), lt;
    },
    suppressOverwrites: function(t) {
      return Xs = t;
    }
  }
};
fe("to,from,fromTo,delayedCall,set,killTweensOf", function(s) {
  return Un[s] = Ct[s];
});
Te.add(ue.updateRoot);
pi = Un.to({}, {
  duration: 0
});
var Ru = function(t, e) {
  for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
    r = r._next;
  return r;
}, Au = function(t, e) {
  var r = t._targets, i, n, o;
  for (i in e)
    for (n = r.length; n--; )
      o = t._ptLookup[n][i], o && (o = o.d) && (o._pt && (o = Ru(o, i)), o && o.modifier && o.modifier(e[i], t, r[n], i));
}, ls = function(t, e) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, n, o) {
      o._onInit = function(a) {
        var l, u;
        if (zt(n) && (l = {}, fe(n, function(c) {
          return l[c] = 1;
        }), n = l), e) {
          l = {};
          for (u in n)
            l[u] = e(n[u]);
          n = l;
        }
        Au(a, n);
      };
    }
  };
}, _e = Un.registerPlugin({
  name: "attr",
  init: function(t, e, r, i, n) {
    var o, a, l;
    this.tween = r;
    for (o in e)
      l = t.getAttribute(o) || "", a = this.add(t, "setAttribute", (l || 0) + "", e[o], i, n, 0, 0, o), a.op = o, a.b = l, this._props.push(o);
  },
  render: function(t, e) {
    for (var r = e._pt; r; )
      Bt ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(t, e) {
    for (var r = e.length; r--; )
      this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
  }
}, ls("roundProps", Ts), ls("modifiers"), ls("snap", Ma)) || Un;
Ct.version = ue.version = _e.version = "3.15.0";
pa = 1;
Us() && ki();
G.Power0;
G.Power1;
G.Power2;
G.Power3;
G.Power4;
G.Linear;
G.Quad;
G.Cubic;
G.Quart;
G.Quint;
G.Strong;
G.Elastic;
G.Back;
G.SteppedEase;
G.Bounce;
G.Sine;
G.Expo;
G.Circ;
/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Eo, br, mi, ro, Ur, Co, io, Lu = function() {
  return typeof window < "u";
}, hr = {}, Wr = 180 / Math.PI, vi = Math.PI / 180, oi = Math.atan2, ko = 1e8, no = /([A-Z])/g, zu = /(left|right|width|margin|padding|x)/i, Nu = /[\s,\(]\S/, Ze = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Cs = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Fu = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Iu = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Yu = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Bu = function(t, e) {
  var r = e.s + e.c * t;
  e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
}, Ga = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, Ka = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, Wu = function(t, e, r) {
  return t.style[e] = r;
}, Xu = function(t, e, r) {
  return t.style.setProperty(e, r);
}, Hu = function(t, e, r) {
  return t._gsap[e] = r;
}, Uu = function(t, e, r) {
  return t._gsap.scaleX = t._gsap.scaleY = r;
}, Vu = function(t, e, r, i, n) {
  var o = t._gsap;
  o.scaleX = o.scaleY = r, o.renderTransform(n, o);
}, $u = function(t, e, r, i, n) {
  var o = t._gsap;
  o[e] = r, o.renderTransform(n, o);
}, ht = "transform", de = ht + "Origin", qu = function s(t, e) {
  var r = this, i = this.target, n = i.style, o = i._gsap;
  if (t in hr && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = Ze[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(a) {
        return r.tfm[a] = ar(i, a);
      }) : this.tfm[t] = o.x ? o[t] : ar(i, t), t === de && (this.tfm.zOrigin = o.zOrigin);
    else
      return Ze.transform.split(",").forEach(function(a) {
        return s.call(r, a, e);
      });
    if (this.props.indexOf(ht) >= 0)
      return;
    o.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(de, e, "")), t = ht;
  }
  (n || e) && this.props.push(t, e, n[t]);
}, Qa = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, Gu = function() {
  var t = this.props, e = this.target, r = e.style, i = e._gsap, n, o;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? t[n + 1] === 2 ? e[t[n]](t[n + 2]) : e[t[n]] = t[n + 2] : t[n + 2] ? r[t[n]] = t[n + 2] : r.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(no, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      i[o] = this.tfm[o];
    i.svg && (i.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = io(), (!n || !n.isStart) && !r[ht] && (Qa(r), i.zOrigin && r[de] && (r[de] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, Za = function(t, e) {
  var r = {
    target: t,
    props: [],
    revert: Gu,
    save: qu
  };
  return t._gsap || _e.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(i) {
    return r.save(i);
  }), r;
}, Ja, ks = function(t, e) {
  var r = br.createElementNS ? br.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : br.createElement(t);
  return r && r.style ? r : br.createElement(t);
}, Ce = function s(t, e, r) {
  var i = getComputedStyle(t);
  return i[e] || i.getPropertyValue(e.replace(no, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && s(t, Pi(e) || e, 1) || "";
}, Po = "O,Moz,ms,Ms,Webkit".split(","), Pi = function(t, e, r) {
  var i = e || Ur, n = i.style, o = 5;
  if (t in n && !r)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(Po[o] + t in n); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Po[o] : "") + t;
}, Ps = function() {
  Lu() && window.document && (Eo = window, br = Eo.document, mi = br.documentElement, Ur = ks("div") || {
    style: {}
  }, ks("div"), ht = Pi(ht), de = ht + "Origin", Ur.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ja = !!Pi("perspective"), io = _e.core.reverting, ro = 1);
}, Mo = function(t) {
  var e = t.ownerSVGElement, r = ks("svg", e && e.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = t.cloneNode(!0), n;
  i.style.display = "block", r.appendChild(i), mi.appendChild(r);
  try {
    n = i.getBBox();
  } catch {
  }
  return r.removeChild(i), mi.removeChild(r), n;
}, Oo = function(t, e) {
  for (var r = e.length; r--; )
    if (t.hasAttribute(e[r]))
      return t.getAttribute(e[r]);
}, ja = function(t) {
  var e, r;
  try {
    e = t.getBBox();
  } catch {
    e = Mo(t), r = 1;
  }
  return e && (e.width || e.height) || r || (e = Mo(t)), e && !e.width && !e.x && !e.y ? {
    x: +Oo(t, ["x", "cx", "x1"]) || 0,
    y: +Oo(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, tl = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && ja(t));
}, Or = function(t, e) {
  if (e) {
    var r = t.style, i;
    e in hr && e !== de && (e = ht), r.removeProperty ? (i = e.substr(0, 2), (i === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), r.removeProperty(i === "--" ? e : e.replace(no, "-$1").toLowerCase())) : r.removeAttribute(e);
  }
}, Tr = function(t, e, r, i, n, o) {
  var a = new he(t._pt, e, r, 0, 1, o ? Ka : Ga);
  return t._pt = a, a.b = i, a.e = n, t._props.push(r), a;
}, Do = {
  deg: 1,
  rad: 1,
  turn: 1
}, Ku = {
  grid: 1,
  flex: 1
}, Dr = function s(t, e, r, i) {
  var n = parseFloat(r) || 0, o = (r + "").trim().substr((n + "").length) || "px", a = Ur.style, l = zu.test(e), u = t.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (l ? "Width" : "Height"), d = 100, h = i === "px", f = i === "%", _, p, m, b;
  if (i === o || !n || Do[i] || Do[o])
    return n;
  if (o !== "px" && !h && (n = s(t, e, r, "px")), b = t.getCTM && tl(t), (f || o === "%") && (hr[e] || ~e.indexOf("adius")))
    return _ = b ? t.getBBox()[l ? "width" : "height"] : t[c], xt(f ? n / _ * d : n / 100 * _);
  if (a[l ? "width" : "height"] = d + (h ? o : i), p = i !== "rem" && ~e.indexOf("adius") || i === "em" && t.appendChild && !u ? t : t.parentNode, b && (p = (t.ownerSVGElement || {}).parentNode), (!p || p === br || !p.appendChild) && (p = br.body), m = p._gsap, m && f && m.width && l && m.time === Te.time && !m.uncache)
    return xt(n / m.width * d);
  if (f && (e === "height" || e === "width")) {
    var w = t.style[e];
    t.style[e] = d + i, _ = t[c], w ? t.style[e] = w : Or(t, e);
  } else
    (f || o === "%") && !Ku[Ce(p, "display")] && (a.position = Ce(t, "position")), p === t && (a.position = "static"), p.appendChild(Ur), _ = Ur[c], p.removeChild(Ur), a.position = "absolute";
  return l && f && (m = $r(p), m.time = Te.time, m.width = p[c]), xt(h ? _ * n / d : _ && n ? d / _ * n : 0);
}, ar = function(t, e, r, i) {
  var n;
  return ro || Ps(), e in Ze && e !== "transform" && (e = Ze[e], ~e.indexOf(",") && (e = e.split(",")[0])), hr[e] && e !== "transform" ? (n = fn(t, i), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : $n(Ce(t, de)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = Vn[e] && Vn[e](t, e, r) || Ce(t, e) || va(t, e) || (e === "opacity" ? 1 : 0))), r && !~(n + "").trim().indexOf(" ") ? Dr(t, e, n, r) + r : n;
}, Qu = function(t, e, r, i) {
  if (!r || r === "none") {
    var n = Pi(e, t, 1), o = n && Ce(t, n, 1);
    o && o !== r ? (e = n, r = o) : e === "borderColor" && (r = Ce(t, "borderTopColor"));
  }
  var a = new he(this._pt, t.style, e, 0, 1, Va), l = 0, u = 0, c, d, h, f, _, p, m, b, w, S, v, T;
  if (a.b = r, a.e = i, r += "", i += "", i.substring(0, 6) === "var(--" && (i = Ce(t, i.substring(4, i.indexOf(")")))), i === "auto" && (p = t.style[e], t.style[e] = i, i = Ce(t, e) || i, p ? t.style[e] = p : Or(t, e)), c = [r, i], Fa(c), r = c[0], i = c[1], h = r.match(di) || [], T = i.match(di) || [], T.length) {
    for (; d = di.exec(i); )
      m = d[0], w = i.substring(l, d.index), _ ? _ = (_ + 1) % 5 : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") && (_ = 1), m !== (p = h[u++] || "") && (f = parseFloat(p) || 0, v = p.substr((f + "").length), m.charAt(1) === "=" && (m = gi(f, m) + v), b = parseFloat(m), S = m.substr((b + "").length), l = di.lastIndex - S.length, S || (S = S || ke.units[e] || v, l === i.length && (i += S, a.e += S)), v !== S && (f = Dr(t, e, p, S) || 0), a._pt = {
        _next: a._pt,
        p: w || u === 1 ? w : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: f,
        c: b - f,
        m: _ && _ < 4 || e === "zIndex" ? Math.round : 0
      });
    a.c = l < i.length ? i.substring(l, i.length) : "";
  } else
    a.r = e === "display" && i === "none" ? Ka : Ga;
  return da.test(i) && (a.e = 0), this._pt = a, a;
}, Ro = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Zu = function(t) {
  var e = t.split(" "), r = e[0], i = e[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (t = r, r = i, i = t), e[0] = Ro[r] || r, e[1] = Ro[i] || i, e.join(" ");
}, Ju = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var r = e.t, i = r.style, n = e.u, o = r._gsap, a, l, u;
    if (n === "all" || n === !0)
      i.cssText = "", l = 1;
    else
      for (n = n.split(","), u = n.length; --u > -1; )
        a = n[u], hr[a] && (l = 1, a = a === "transformOrigin" ? de : ht), Or(r, a);
    l && (Or(r, ht), o && (o.svg && r.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", fn(r, 1), o.uncache = 1, Qa(i)));
  }
}, Vn = {
  clearProps: function(t, e, r, i, n) {
    if (n.data !== "isFromStart") {
      var o = t._pt = new he(t._pt, e, r, 0, 0, Ju);
      return o.u = i, o.pr = -10, o.tween = n, t._props.push(r), 1;
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
}, cn = [1, 0, 0, 1, 0, 0], el = {}, rl = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, Ao = function(t) {
  var e = Ce(t, ht);
  return rl(e) ? cn : e.substr(7).match(ha).map(xt);
}, so = function(t, e) {
  var r = t._gsap || $r(t), i = t.style, n = Ao(t), o, a, l, u;
  return r.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix, n = [l.a, l.b, l.c, l.d, l.e, l.f], n.join(",") === "1,0,0,1,0,0" ? cn : n) : (n === cn && !t.offsetParent && t !== mi && !r.svg && (l = i.display, i.display = "block", o = t.parentNode, (!o || !t.offsetParent && !t.getBoundingClientRect().width) && (u = 1, a = t.nextElementSibling, mi.appendChild(t)), n = Ao(t), l ? i.display = l : Or(t, "display"), u && (a ? o.insertBefore(t, a) : o ? o.appendChild(t) : mi.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, Ms = function(t, e, r, i, n, o) {
  var a = t._gsap, l = n || so(t, !0), u = a.xOrigin || 0, c = a.yOrigin || 0, d = a.xOffset || 0, h = a.yOffset || 0, f = l[0], _ = l[1], p = l[2], m = l[3], b = l[4], w = l[5], S = e.split(" "), v = parseFloat(S[0]) || 0, T = parseFloat(S[1]) || 0, k, x, P, C;
  r ? l !== cn && (x = f * m - _ * p) && (P = v * (m / x) + T * (-p / x) + (p * w - m * b) / x, C = v * (-_ / x) + T * (f / x) - (f * w - _ * b) / x, v = P, T = C) : (k = ja(t), v = k.x + (~S[0].indexOf("%") ? v / 100 * k.width : v), T = k.y + (~(S[1] || S[0]).indexOf("%") ? T / 100 * k.height : T)), i || i !== !1 && a.smooth ? (b = v - u, w = T - c, a.xOffset = d + (b * f + w * p) - b, a.yOffset = h + (b * _ + w * m) - w) : a.xOffset = a.yOffset = 0, a.xOrigin = v, a.yOrigin = T, a.smooth = !!i, a.origin = e, a.originIsAbsolute = !!r, t.style[de] = "0px 0px", o && (Tr(o, a, "xOrigin", u, v), Tr(o, a, "yOrigin", c, T), Tr(o, a, "xOffset", d, a.xOffset), Tr(o, a, "yOffset", h, a.yOffset)), t.setAttribute("data-svg-origin", v + " " + T);
}, fn = function(t, e) {
  var r = t._gsap || new Ya(t);
  if ("x" in r && !e && !r.uncache)
    return r;
  var i = t.style, n = r.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(t), u = Ce(t, de) || "0", c, d, h, f, _, p, m, b, w, S, v, T, k, x, P, C, E, W, O, K, Y, Q, $, L, Z, rt, g, ot, Zt, Ie, dt, Nt;
  return c = d = h = p = m = b = w = S = v = 0, f = _ = 1, r.svg = !!(t.getCTM && tl(t)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[ht] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[ht] !== "none" ? l[ht] : "")), i.scale = i.rotate = i.translate = "none"), x = so(t, r.svg), r.svg && (r.uncache ? (Z = t.getBBox(), u = r.xOrigin - Z.x + "px " + (r.yOrigin - Z.y) + "px", L = "") : L = !e && t.getAttribute("data-svg-origin"), Ms(t, L || u, !!L || r.originIsAbsolute, r.smooth !== !1, x)), T = r.xOrigin || 0, k = r.yOrigin || 0, x !== cn && (W = x[0], O = x[1], K = x[2], Y = x[3], c = Q = x[4], d = $ = x[5], x.length === 6 ? (f = Math.sqrt(W * W + O * O), _ = Math.sqrt(Y * Y + K * K), p = W || O ? oi(O, W) * Wr : 0, w = K || Y ? oi(K, Y) * Wr + p : 0, w && (_ *= Math.abs(Math.cos(w * vi))), r.svg && (c -= T - (T * W + k * K), d -= k - (T * O + k * Y))) : (Nt = x[6], Ie = x[7], g = x[8], ot = x[9], Zt = x[10], dt = x[11], c = x[12], d = x[13], h = x[14], P = oi(Nt, Zt), m = P * Wr, P && (C = Math.cos(-P), E = Math.sin(-P), L = Q * C + g * E, Z = $ * C + ot * E, rt = Nt * C + Zt * E, g = Q * -E + g * C, ot = $ * -E + ot * C, Zt = Nt * -E + Zt * C, dt = Ie * -E + dt * C, Q = L, $ = Z, Nt = rt), P = oi(-K, Zt), b = P * Wr, P && (C = Math.cos(-P), E = Math.sin(-P), L = W * C - g * E, Z = O * C - ot * E, rt = K * C - Zt * E, dt = Y * E + dt * C, W = L, O = Z, K = rt), P = oi(O, W), p = P * Wr, P && (C = Math.cos(P), E = Math.sin(P), L = W * C + O * E, Z = Q * C + $ * E, O = O * C - W * E, $ = $ * C - Q * E, W = L, Q = Z), m && Math.abs(m) + Math.abs(p) > 359.9 && (m = p = 0, b = 180 - b), f = xt(Math.sqrt(W * W + O * O + K * K)), _ = xt(Math.sqrt($ * $ + Nt * Nt)), P = oi(Q, $), w = Math.abs(P) > 2e-4 ? P * Wr : 0, v = dt ? 1 / (dt < 0 ? -dt : dt) : 0), r.svg && (L = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !rl(Ce(t, ht)), L && t.setAttribute("transform", L))), Math.abs(w) > 90 && Math.abs(w) < 270 && (n ? (f *= -1, w += p <= 0 ? 180 : -180, p += p <= 0 ? 180 : -180) : (_ *= -1, w += w <= 0 ? 180 : -180)), e = e || r.uncache, r.x = c - ((r.xPercent = c && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + o, r.y = d - ((r.yPercent = d && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-d) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + o, r.z = h + o, r.scaleX = xt(f), r.scaleY = xt(_), r.rotation = xt(p) + a, r.rotationX = xt(m) + a, r.rotationY = xt(b) + a, r.skewX = w + a, r.skewY = S + a, r.transformPerspective = v + o, (r.zOrigin = parseFloat(u.split(" ")[2]) || !e && r.zOrigin || 0) && (i[de] = $n(u)), r.xOffset = r.yOffset = 0, r.force3D = ke.force3D, r.renderTransform = r.svg ? tc : Ja ? il : ju, r.uncache = 0, r;
}, $n = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, us = function(t, e, r) {
  var i = Gt(e);
  return xt(parseFloat(e) + parseFloat(Dr(t, "x", r + "px", i))) + i;
}, ju = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, il(t, e);
}, Yr = "0deg", zi = "0px", Br = ") ", il = function(t, e) {
  var r = e || this, i = r.xPercent, n = r.yPercent, o = r.x, a = r.y, l = r.z, u = r.rotation, c = r.rotationY, d = r.rotationX, h = r.skewX, f = r.skewY, _ = r.scaleX, p = r.scaleY, m = r.transformPerspective, b = r.force3D, w = r.target, S = r.zOrigin, v = "", T = b === "auto" && t && t !== 1 || b === !0;
  if (S && (d !== Yr || c !== Yr)) {
    var k = parseFloat(c) * vi, x = Math.sin(k), P = Math.cos(k), C;
    k = parseFloat(d) * vi, C = Math.cos(k), o = us(w, o, x * C * -S), a = us(w, a, -Math.sin(k) * -S), l = us(w, l, P * C * -S + S);
  }
  m !== zi && (v += "perspective(" + m + Br), (i || n) && (v += "translate(" + i + "%, " + n + "%) "), (T || o !== zi || a !== zi || l !== zi) && (v += l !== zi || T ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Br), u !== Yr && (v += "rotate(" + u + Br), c !== Yr && (v += "rotateY(" + c + Br), d !== Yr && (v += "rotateX(" + d + Br), (h !== Yr || f !== Yr) && (v += "skew(" + h + ", " + f + Br), (_ !== 1 || p !== 1) && (v += "scale(" + _ + ", " + p + Br), w.style[ht] = v || "translate(0, 0)";
}, tc = function(t, e) {
  var r = e || this, i = r.xPercent, n = r.yPercent, o = r.x, a = r.y, l = r.rotation, u = r.skewX, c = r.skewY, d = r.scaleX, h = r.scaleY, f = r.target, _ = r.xOrigin, p = r.yOrigin, m = r.xOffset, b = r.yOffset, w = r.forceCSS, S = parseFloat(o), v = parseFloat(a), T, k, x, P, C;
  l = parseFloat(l), u = parseFloat(u), c = parseFloat(c), c && (c = parseFloat(c), u += c, l += c), l || u ? (l *= vi, u *= vi, T = Math.cos(l) * d, k = Math.sin(l) * d, x = Math.sin(l - u) * -h, P = Math.cos(l - u) * h, u && (c *= vi, C = Math.tan(u - c), C = Math.sqrt(1 + C * C), x *= C, P *= C, c && (C = Math.tan(c), C = Math.sqrt(1 + C * C), T *= C, k *= C)), T = xt(T), k = xt(k), x = xt(x), P = xt(P)) : (T = d, P = h, k = x = 0), (S && !~(o + "").indexOf("px") || v && !~(a + "").indexOf("px")) && (S = Dr(f, "x", o, "px"), v = Dr(f, "y", a, "px")), (_ || p || m || b) && (S = xt(S + _ - (_ * T + p * x) + m), v = xt(v + p - (_ * k + p * P) + b)), (i || n) && (C = f.getBBox(), S = xt(S + i / 100 * C.width), v = xt(v + n / 100 * C.height)), C = "matrix(" + T + "," + k + "," + x + "," + P + "," + S + "," + v + ")", f.setAttribute("transform", C), w && (f.style[ht] = C);
}, ec = function(t, e, r, i, n) {
  var o = 360, a = zt(n), l = parseFloat(n) * (a && ~n.indexOf("rad") ? Wr : 1), u = l - i, c = i + u + "deg", d, h;
  return a && (d = n.split("_")[1], d === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -o)), d === "cw" && u < 0 ? u = (u + o * ko) % o - ~~(u / o) * o : d === "ccw" && u > 0 && (u = (u - o * ko) % o - ~~(u / o) * o)), t._pt = h = new he(t._pt, e, r, i, u, Fu), h.e = c, h.u = "deg", t._props.push(r), h;
}, Lo = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, rc = function(t, e, r) {
  var i = Lo({}, r._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", o = r.style, a, l, u, c, d, h, f, _;
  i.svg ? (u = r.getAttribute("transform"), r.setAttribute("transform", ""), o[ht] = e, a = fn(r, 1), Or(r, ht), r.setAttribute("transform", u)) : (u = getComputedStyle(r)[ht], o[ht] = e, a = fn(r, 1), o[ht] = u);
  for (l in hr)
    u = i[l], c = a[l], u !== c && n.indexOf(l) < 0 && (f = Gt(u), _ = Gt(c), d = f !== _ ? Dr(r, l, u, _) : parseFloat(u), h = parseFloat(c), t._pt = new he(t._pt, a, l, d, h - d, Cs), t._pt.u = _ || 0, t._props.push(l));
  Lo(a, i);
};
fe("padding,margin,Width,Radius", function(s, t) {
  var e = "Top", r = "Right", i = "Bottom", n = "Left", o = (t < 3 ? [e, r, i, n] : [e + n, e + r, i + r, i + n]).map(function(a) {
    return t < 2 ? s + a : "border" + a + s;
  });
  Vn[t > 1 ? "border" + s : s] = function(a, l, u, c, d) {
    var h, f;
    if (arguments.length < 4)
      return h = o.map(function(_) {
        return ar(a, _, u);
      }), f = h.join(" "), f.split(h[0]).length === 5 ? h[0] : f;
    h = (c + "").split(" "), f = {}, o.forEach(function(_, p) {
      return f[_] = h[p] = h[p] || h[(p - 1) / 2 | 0];
    }), a.init(l, f, d);
  };
});
var nl = {
  name: "css",
  register: Ps,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, r, i, n) {
    var o = this._props, a = t.style, l = r.vars.startAt, u, c, d, h, f, _, p, m, b, w, S, v, T, k, x, P, C;
    ro || Ps(), this.styles = this.styles || Za(t), P = this.styles.props, this.tween = r;
    for (p in e)
      if (p !== "autoRound" && (c = e[p], !(xe[p] && Ba(p, e, r, i, t, n)))) {
        if (f = typeof c, _ = Vn[p], f === "function" && (c = c.call(r, i, t, n), f = typeof c), f === "string" && ~c.indexOf("random(") && (c = an(c)), _)
          _(this, t, p, c, r) && (x = 1);
        else if (p.substr(0, 2) === "--")
          u = (getComputedStyle(t).getPropertyValue(p) + "").trim(), c += "", kr.lastIndex = 0, kr.test(u) || (m = Gt(u), b = Gt(c), b ? m !== b && (u = Dr(t, p, u, b) + b) : m && (c += m)), this.add(a, "setProperty", u, c, i, n, 0, 0, p), o.push(p), P.push(p, 0, a[p]);
        else if (f !== "undefined") {
          if (l && p in l ? (u = typeof l[p] == "function" ? l[p].call(r, i, t, n) : l[p], zt(u) && ~u.indexOf("random(") && (u = an(u)), Gt(u + "") || u === "auto" || (u += ke.units[p] || Gt(ar(t, p)) || ""), (u + "").charAt(1) === "=" && (u = ar(t, p))) : u = ar(t, p), h = parseFloat(u), w = f === "string" && c.charAt(1) === "=" && c.substr(0, 2), w && (c = c.substr(2)), d = parseFloat(c), p in Ze && (p === "autoAlpha" && (h === 1 && ar(t, "visibility") === "hidden" && d && (h = 0), P.push("visibility", 0, a.visibility), Tr(this, a, "visibility", h ? "inherit" : "hidden", d ? "inherit" : "hidden", !d)), p !== "scale" && p !== "transform" && (p = Ze[p], ~p.indexOf(",") && (p = p.split(",")[0]))), S = p in hr, S) {
            if (this.styles.save(p), C = c, f === "string" && c.substring(0, 6) === "var(--") {
              if (c = Ce(t, c.substring(4, c.indexOf(")"))), c.substring(0, 5) === "calc(") {
                var E = t.style.perspective;
                t.style.perspective = c, c = Ce(t, "perspective"), E ? t.style.perspective = E : Or(t, "perspective");
              }
              d = parseFloat(c);
            }
            if (v || (T = t._gsap, T.renderTransform && !e.parseTransform || fn(t, e.parseTransform), k = e.smoothOrigin !== !1 && T.smooth, v = this._pt = new he(this._pt, a, ht, 0, 1, T.renderTransform, T, 0, -1), v.dep = 1), p === "scale")
              this._pt = new he(this._pt, T, "scaleY", T.scaleY, (w ? gi(T.scaleY, w + d) : d) - T.scaleY || 0, Cs), this._pt.u = 0, o.push("scaleY", p), p += "X";
            else if (p === "transformOrigin") {
              P.push(de, 0, a[de]), c = Zu(c), T.svg ? Ms(t, c, 0, k, 0, this) : (b = parseFloat(c.split(" ")[2]) || 0, b !== T.zOrigin && Tr(this, T, "zOrigin", T.zOrigin, b), Tr(this, a, p, $n(u), $n(c)));
              continue;
            } else if (p === "svgOrigin") {
              Ms(t, c, 1, k, 0, this);
              continue;
            } else if (p in el) {
              ec(this, T, p, h, w ? gi(h, w + c) : c);
              continue;
            } else if (p === "smoothOrigin") {
              Tr(this, T, "smooth", T.smooth, c);
              continue;
            } else if (p === "force3D") {
              T[p] = c;
              continue;
            } else if (p === "transform") {
              rc(this, c, t);
              continue;
            }
          } else p in a || (p = Pi(p) || p);
          if (S || (d || d === 0) && (h || h === 0) && !Nu.test(c) && p in a)
            m = (u + "").substr((h + "").length), d || (d = 0), b = Gt(c) || (p in ke.units ? ke.units[p] : m), m !== b && (h = Dr(t, p, u, b)), this._pt = new he(this._pt, S ? T : a, p, h, (w ? gi(h, w + d) : d) - h, !S && (b === "px" || p === "zIndex") && e.autoRound !== !1 ? Bu : Cs), this._pt.u = b || 0, S && C !== c ? (this._pt.b = u, this._pt.e = C, this._pt.r = Yu) : m !== b && b !== "%" && (this._pt.b = u, this._pt.r = Iu);
          else if (p in a)
            Qu.call(this, t, p, u, w ? w + c : c);
          else if (p in t)
            this.add(t, p, u || t[p], w ? w + c : c, i, n);
          else if (p !== "parseTransform") {
            $s(p, c);
            continue;
          }
          S || (p in a ? P.push(p, 0, a[p]) : typeof t[p] == "function" ? P.push(p, 2, t[p]()) : P.push(p, 1, u || t[p])), o.push(p);
        }
      }
    x && $a(this);
  },
  render: function(t, e) {
    if (e.tween._time || !io())
      for (var r = e._pt; r; )
        r.r(t, r.d), r = r._next;
    else
      e.styles.revert();
  },
  get: ar,
  aliases: Ze,
  getSetter: function(t, e, r) {
    var i = Ze[e];
    return i && i.indexOf(",") < 0 && (e = i), e in hr && e !== de && (t._gsap.x || ar(t, "x")) ? r && Co === r ? e === "scale" ? Uu : Hu : (Co = r || {}) && (e === "scale" ? Vu : $u) : t.style && !Hs(t.style[e]) ? Wu : ~e.indexOf("-") ? Xu : to(t, e);
  },
  core: {
    _removeProperty: Or,
    _getMatrix: so
  }
};
_e.utils.checkPrefix = Pi;
_e.core.getStyleSaver = Za;
(function(s, t, e, r) {
  var i = fe(s + "," + t + "," + e, function(n) {
    hr[n] = 1;
  });
  fe(t, function(n) {
    ke.units[n] = "deg", el[n] = 1;
  }), Ze[i[13]] = s + "," + t, fe(r, function(n) {
    var o = n.split(":");
    Ze[o[1]] = i[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
fe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s) {
  ke.units[s] = "px";
});
_e.registerPlugin(nl);
var gt = _e.registerPlugin(nl) || _e;
gt.core.Tween;
function ic(s, t) {
  for (var e = 0; e < t.length; e++) {
    var r = t[e];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(s, r.key, r);
  }
}
function nc(s, t, e) {
  return t && ic(s.prototype, t), s;
}
/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Yt, Ln, Se, Sr, Er, yi, sl, Xr, wi, ol, ur, Ue, al, ll = function() {
  return Yt || typeof window < "u" && (Yt = window.gsap) && Yt.registerPlugin && Yt;
}, ul = 1, _i = [], U = [], je = [], Gi = Date.now, Os = function(t, e) {
  return e;
}, sc = function() {
  var t = wi.core, e = t.bridge || {}, r = t._scrollers, i = t._proxies;
  r.push.apply(r, U), i.push.apply(i, je), U = r, je = i, Os = function(o, a) {
    return e[o](a);
  };
}, Pr = function(t, e) {
  return ~je.indexOf(t) && je[je.indexOf(t) + 1][e];
}, Ki = function(t) {
  return !!~ol.indexOf(t);
}, re = function(t, e, r, i, n) {
  return t.addEventListener(e, r, {
    passive: i !== !1,
    capture: !!n
  });
}, ee = function(t, e, r, i) {
  return t.removeEventListener(e, r, !!i);
}, yn = "scrollLeft", wn = "scrollTop", Ds = function() {
  return ur && ur.isPressed || U.cache++;
}, qn = function(t, e) {
  var r = function i(n) {
    if (n || n === 0) {
      ul && (Se.history.scrollRestoration = "manual");
      var o = ur && ur.isPressed;
      n = i.v = Math.round(n) || (ur && ur.iOS ? 1 : 0), t(n), i.cacheID = U.cache, o && Os("ss", n);
    } else (e || U.cache !== i.cacheID || Os("ref")) && (i.cacheID = U.cache, i.v = t());
    return i.v + i.offset;
  };
  return r.offset = 0, t && r;
}, oe = {
  s: yn,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: qn(function(s) {
    return arguments.length ? Se.scrollTo(s, Mt.sc()) : Se.pageXOffset || Sr[yn] || Er[yn] || yi[yn] || 0;
  })
}, Mt = {
  s: wn,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: oe,
  sc: qn(function(s) {
    return arguments.length ? Se.scrollTo(oe.sc(), s) : Se.pageYOffset || Sr[wn] || Er[wn] || yi[wn] || 0;
  })
}, le = function(t, e) {
  return (e && e._ctx && e._ctx.selector || Yt.utils.toArray)(t)[0] || (typeof t == "string" && Yt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", t) : null);
}, oc = function(t, e) {
  for (var r = e.length; r--; )
    if (e[r] === t || e[r].contains(t))
      return !0;
  return !1;
}, Rr = function(t, e) {
  var r = e.s, i = e.sc;
  Ki(t) && (t = Sr.scrollingElement || Er);
  var n = U.indexOf(t), o = i === Mt.sc ? 1 : 2;
  !~n && (n = U.push(t) - 1), U[n + o] || re(t, "scroll", Ds);
  var a = U[n + o], l = a || (U[n + o] = qn(Pr(t, r), !0) || (Ki(t) ? i : qn(function(u) {
    return arguments.length ? t[r] = u : t[r];
  })));
  return l.target = t, a || (l.smooth = Yt.getProperty(t, "scrollBehavior") === "smooth"), l;
}, Rs = function(t, e, r) {
  var i = t, n = t, o = Gi(), a = o, l = e || 50, u = Math.max(500, l * 3), c = function(_, p) {
    var m = Gi();
    p || m - o > l ? (n = i, i = _, a = o, o = m) : r ? i += _ : i = n + (_ - n) / (m - a) * (o - a);
  }, d = function() {
    n = i = r ? 0 : i, a = o = 0;
  }, h = function(_) {
    var p = a, m = n, b = Gi();
    return (_ || _ === 0) && _ !== i && c(_), o === a || b - a > u ? 0 : (i + (r ? m : -m)) / ((r ? b : o) - p) * 1e3;
  };
  return {
    update: c,
    reset: d,
    getVelocity: h
  };
}, Ni = function(t, e) {
  return e && !t._gsapAllow && t.cancelable !== !1 && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t;
}, zo = function(t) {
  var e = Math.max.apply(Math, t), r = Math.min.apply(Math, t);
  return Math.abs(e) >= Math.abs(r) ? e : r;
}, cl = function() {
  wi = Yt.core.globals().ScrollTrigger, wi && wi.core && sc();
}, fl = function(t) {
  return Yt = t || ll(), !Ln && Yt && typeof document < "u" && document.body && (Se = window, Sr = document, Er = Sr.documentElement, yi = Sr.body, ol = [Se, Sr, Er, yi], Yt.utils.clamp, al = Yt.core.context || function() {
  }, Xr = "onpointerenter" in yi ? "pointer" : "mouse", sl = bt.isTouch = Se.matchMedia && Se.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Se || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Ue = bt.eventTypes = ("ontouchstart" in Er ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Er ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return ul = 0;
  }, 500), Ln = 1), wi || cl(), Ln;
};
oe.op = Mt;
U.cache = 0;
var bt = /* @__PURE__ */ function() {
  function s(e) {
    this.init(e);
  }
  var t = s.prototype;
  return t.init = function(r) {
    Ln || fl(Yt) || console.warn("Please gsap.registerPlugin(Observer)"), wi || cl();
    var i = r.tolerance, n = r.dragMinimum, o = r.type, a = r.target, l = r.lineHeight, u = r.debounce, c = r.preventDefault, d = r.onStop, h = r.onStopDelay, f = r.ignore, _ = r.wheelSpeed, p = r.event, m = r.onDragStart, b = r.onDragEnd, w = r.onDrag, S = r.onPress, v = r.onRelease, T = r.onRight, k = r.onLeft, x = r.onUp, P = r.onDown, C = r.onChangeX, E = r.onChangeY, W = r.onChange, O = r.onToggleX, K = r.onToggleY, Y = r.onHover, Q = r.onHoverEnd, $ = r.onMove, L = r.ignoreCheck, Z = r.isNormalizer, rt = r.onGestureStart, g = r.onGestureEnd, ot = r.onWheel, Zt = r.onEnable, Ie = r.onDisable, dt = r.onClick, Nt = r.scrollSpeed, Wt = r.capture, Tt = r.allowClicks, Jt = r.lockAxis, Xt = r.onLockAxis;
    this.target = a = le(a) || Er, this.vars = r, f && (f = Yt.utils.toArray(f)), i = i || 1e-9, n = n || 0, _ = _ || 1, Nt = Nt || 1, o = o || "wheel,touch,pointer", u = u !== !1, l || (l = parseFloat(Se.getComputedStyle(yi).lineHeight) || 22);
    var dr, jt, te, J, vt, ae, ge, y = this, me = 0, er = 0, pr = r.passive || !c && r.passive !== !1, pt = Rr(a, oe), rr = Rr(a, Mt), _r = pt(), Lr = rr(), Ot = ~o.indexOf("touch") && !~o.indexOf("pointer") && Ue[0] === "pointerdown", gr = Ki(a), yt = a.ownerDocument || Sr, Ye = [0, 0, 0], Oe = [0, 0, 0], ir = 0, Di = function() {
      return ir = Gi();
    }, St = function(z, j) {
      return (y.event = z) && f && oc(z.target, f) || j && Ot && z.pointerType !== "touch" || L && L(z, j);
    }, _n = function() {
      y._vx.reset(), y._vy.reset(), jt.pause(), d && d(y);
    }, nr = function() {
      var z = y.deltaX = zo(Ye), j = y.deltaY = zo(Oe), M = Math.abs(z) >= i, F = Math.abs(j) >= i;
      W && (M || F) && W(y, z, j, Ye, Oe), M && (T && y.deltaX > 0 && T(y), k && y.deltaX < 0 && k(y), C && C(y), O && y.deltaX < 0 != me < 0 && O(y), me = y.deltaX, Ye[0] = Ye[1] = Ye[2] = 0), F && (P && y.deltaY > 0 && P(y), x && y.deltaY < 0 && x(y), E && E(y), K && y.deltaY < 0 != er < 0 && K(y), er = y.deltaY, Oe[0] = Oe[1] = Oe[2] = 0), (J || te) && ($ && $(y), te && (m && te === 1 && m(y), w && w(y), te = 0), J = !1), ae && !(ae = !1) && Xt && Xt(y), vt && (ot(y), vt = !1), dr = 0;
    }, ii = function(z, j, M) {
      Ye[M] += z, Oe[M] += j, y._vx.update(z), y._vy.update(j), u ? dr || (dr = requestAnimationFrame(nr)) : nr();
    }, ni = function(z, j) {
      Jt && !ge && (y.axis = ge = Math.abs(z) > Math.abs(j) ? "x" : "y", ae = !0), ge !== "y" && (Ye[2] += z, y._vx.update(z, !0)), ge !== "x" && (Oe[2] += j, y._vy.update(j, !0)), u ? dr || (dr = requestAnimationFrame(nr)) : nr();
    }, mr = function(z) {
      if (!St(z, 1)) {
        z = Ni(z, c);
        var j = z.clientX, M = z.clientY, F = j - y.x, A = M - y.y, I = y.isDragging;
        y.x = j, y.y = M, (I || (F || A) && (Math.abs(y.startX - j) >= n || Math.abs(y.startY - M) >= n)) && (te || (te = I ? 2 : 1), I || (y.isDragging = !0), ni(F, A));
      }
    }, zr = y.onPress = function(B) {
      St(B, 1) || B && B.button || (y.axis = ge = null, jt.pause(), y.isPressed = !0, B = Ni(B), me = er = 0, y.startX = y.x = B.clientX, y.startY = y.y = B.clientY, y._vx.reset(), y._vy.reset(), re(Z ? a : yt, Ue[1], mr, pr, !0), y.deltaX = y.deltaY = 0, S && S(y));
    }, V = y.onRelease = function(B) {
      if (!St(B, 1)) {
        ee(Z ? a : yt, Ue[1], mr, !0);
        var z = !isNaN(y.y - y.startY), j = y.isDragging, M = j && (Math.abs(y.x - y.startX) > 3 || Math.abs(y.y - y.startY) > 3), F = Ni(B);
        !M && z && (y._vx.reset(), y._vy.reset(), c && Tt && Yt.delayedCall(0.08, function() {
          if (Gi() - ir > 300 && !B.defaultPrevented) {
            if (B.target.click)
              B.target.click();
            else if (yt.createEvent) {
              var A = yt.createEvent("MouseEvents");
              A.initMouseEvent("click", !0, !0, Se, 1, F.screenX, F.screenY, F.clientX, F.clientY, !1, !1, !1, !1, 0, null), B.target.dispatchEvent(A);
            }
          }
        })), y.isDragging = y.isGesturing = y.isPressed = !1, d && j && !Z && jt.restart(!0), te && nr(), b && j && b(y), v && v(y, M);
      }
    }, Nr = function(z) {
      return z.touches && z.touches.length > 1 && (y.isGesturing = !0) && rt(z, y.isDragging);
    }, Be = function() {
      return (y.isGesturing = !1) || g(y);
    }, We = function(z) {
      if (!St(z)) {
        var j = pt(), M = rr();
        ii((j - _r) * Nt, (M - Lr) * Nt, 1), _r = j, Lr = M, d && jt.restart(!0);
      }
    }, Xe = function(z) {
      if (!St(z)) {
        z = Ni(z, c), ot && (vt = !0);
        var j = (z.deltaMode === 1 ? l : z.deltaMode === 2 ? Se.innerHeight : 1) * _;
        ii(z.deltaX * j, z.deltaY * j, 0), d && !Z && jt.restart(!0);
      }
    }, Fr = function(z) {
      if (!St(z)) {
        var j = z.clientX, M = z.clientY, F = j - y.x, A = M - y.y;
        y.x = j, y.y = M, J = !0, d && jt.restart(!0), (F || A) && ni(F, A);
      }
    }, si = function(z) {
      y.event = z, Y(y);
    }, sr = function(z) {
      y.event = z, Q(y);
    }, Ri = function(z) {
      return St(z) || Ni(z, c) && dt(y);
    };
    jt = y._dc = Yt.delayedCall(h || 0.25, _n).pause(), y.deltaX = y.deltaY = 0, y._vx = Rs(0, 50, !0), y._vy = Rs(0, 50, !0), y.scrollX = pt, y.scrollY = rr, y.isDragging = y.isGesturing = y.isPressed = !1, al(this), y.enable = function(B) {
      return y.isEnabled || (re(gr ? yt : a, "scroll", Ds), o.indexOf("scroll") >= 0 && re(gr ? yt : a, "scroll", We, pr, Wt), o.indexOf("wheel") >= 0 && re(a, "wheel", Xe, pr, Wt), (o.indexOf("touch") >= 0 && sl || o.indexOf("pointer") >= 0) && (re(a, Ue[0], zr, pr, Wt), re(yt, Ue[2], V), re(yt, Ue[3], V), Tt && re(a, "click", Di, !0, !0), dt && re(a, "click", Ri), rt && re(yt, "gesturestart", Nr), g && re(yt, "gestureend", Be), Y && re(a, Xr + "enter", si), Q && re(a, Xr + "leave", sr), $ && re(a, Xr + "move", Fr)), y.isEnabled = !0, y.isDragging = y.isGesturing = y.isPressed = J = te = !1, y._vx.reset(), y._vy.reset(), _r = pt(), Lr = rr(), B && B.type && zr(B), Zt && Zt(y)), y;
    }, y.disable = function() {
      y.isEnabled && (_i.filter(function(B) {
        return B !== y && Ki(B.target);
      }).length || ee(gr ? yt : a, "scroll", Ds), y.isPressed && (y._vx.reset(), y._vy.reset(), ee(Z ? a : yt, Ue[1], mr, !0)), ee(gr ? yt : a, "scroll", We, Wt), ee(a, "wheel", Xe, Wt), ee(a, Ue[0], zr, Wt), ee(yt, Ue[2], V), ee(yt, Ue[3], V), ee(a, "click", Di, !0), ee(a, "click", Ri), ee(yt, "gesturestart", Nr), ee(yt, "gestureend", Be), ee(a, Xr + "enter", si), ee(a, Xr + "leave", sr), ee(a, Xr + "move", Fr), y.isEnabled = y.isPressed = y.isDragging = !1, Ie && Ie(y));
    }, y.kill = y.revert = function() {
      y.disable();
      var B = _i.indexOf(y);
      B >= 0 && _i.splice(B, 1), ur === y && (ur = 0);
    }, _i.push(y), Z && Ki(a) && (ur = y), y.enable(p);
  }, nc(s, [{
    key: "velocityX",
    get: function() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function() {
      return this._vy.getVelocity();
    }
  }]), s;
}();
bt.version = "3.15.0";
bt.create = function(s) {
  return new bt(s);
};
bt.register = fl;
bt.getAll = function() {
  return _i.slice();
};
bt.getById = function(s) {
  return _i.filter(function(t) {
    return t.vars.id === s;
  })[0];
};
ll() && Yt.registerPlugin(bt);
/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var D, fi, H, et, be, tt, oo, Gn, hn, Qi, Bi, xn, $t, ts, As, ne, No, Fo, hi, hl, cs, dl, ie, Ls, pl, _l, wr, zs, ao, xi, lo, Zi, Ns, fs, bn = 1, qt = Date.now, hs = qt(), Fe = 0, Wi = 0, Io = function(t, e, r) {
  var i = we(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
  return r["_" + e + "Clamp"] = i, i ? t.substr(6, t.length - 7) : t;
}, Yo = function(t, e) {
  return e && (!we(t) || t.substr(0, 6) !== "clamp(") ? "clamp(" + t + ")" : t;
}, ac = function s() {
  return Wi && requestAnimationFrame(s);
}, Bo = function() {
  return ts = 1;
}, Wo = function() {
  return ts = 0;
}, Ke = function(t) {
  return t;
}, Xi = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, gl = function() {
  return typeof window < "u";
}, ml = function() {
  return D || gl() && (D = window.gsap) && D.registerPlugin && D;
}, jr = function(t) {
  return !!~oo.indexOf(t);
}, vl = function(t) {
  return (t === "Height" ? lo : H["inner" + t]) || be["client" + t] || tt["client" + t];
}, yl = function(t) {
  return Pr(t, "getBoundingClientRect") || (jr(t) ? function() {
    return Yn.width = H.innerWidth, Yn.height = lo, Yn;
  } : function() {
    return lr(t);
  });
}, lc = function(t, e, r) {
  var i = r.d, n = r.d2, o = r.a;
  return (o = Pr(t, "getBoundingClientRect")) ? function() {
    return o()[i];
  } : function() {
    return (e ? vl(n) : t["client" + n]) || 0;
  };
}, uc = function(t, e) {
  return !e || ~je.indexOf(t) ? yl(t) : function() {
    return Yn;
  };
}, Je = function(t, e) {
  var r = e.s, i = e.d2, n = e.d, o = e.a;
  return Math.max(0, (r = "scroll" + i) && (o = Pr(t, r)) ? o() - yl(t)()[n] : jr(t) ? (be[r] || tt[r]) - vl(i) : t[r] - t["offset" + i]);
}, Tn = function(t, e) {
  for (var r = 0; r < hi.length; r += 3)
    (!e || ~e.indexOf(hi[r + 1])) && t(hi[r], hi[r + 1], hi[r + 2]);
}, we = function(t) {
  return typeof t == "string";
}, Kt = function(t) {
  return typeof t == "function";
}, Hi = function(t) {
  return typeof t == "number";
}, Hr = function(t) {
  return typeof t == "object";
}, Fi = function(t, e, r) {
  return t && t.progress(e ? 0 : 1) && r && t.pause();
}, ai = function(t, e, r) {
  if (t.enabled) {
    var i = t._ctx ? t._ctx.add(function() {
      return e(t, r);
    }) : e(t, r);
    i && i.totalTime && (t.callbackAnimation = i);
  }
}, li = Math.abs, wl = "left", xl = "top", uo = "right", co = "bottom", Qr = "width", Zr = "height", Ji = "Right", ji = "Left", tn = "Top", en = "Bottom", Et = "padding", Ae = "margin", Mi = "Width", fo = "Height", Pt = "px", Le = function(t) {
  return H.getComputedStyle(t.nodeType === Node.DOCUMENT_NODE ? t.scrollingElement : t);
}, cc = function(t) {
  var e = Le(t).position;
  t.style.position = e === "absolute" || e === "fixed" ? e : "relative";
}, Xo = function(t, e) {
  for (var r in e)
    r in t || (t[r] = e[r]);
  return t;
}, lr = function(t, e) {
  var r = e && Le(t)[As] !== "matrix(1, 0, 0, 1, 0, 0)" && D.to(t, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1), i = t.getBoundingClientRect ? t.getBoundingClientRect() : t.scrollingElement.getBoundingClientRect();
  return r && r.progress(0).kill(), i;
}, Kn = function(t, e) {
  var r = e.d2;
  return t["offset" + r] || t["client" + r] || 0;
}, bl = function(t) {
  var e = [], r = t.labels, i = t.duration(), n;
  for (n in r)
    e.push(r[n] / i);
  return e;
}, fc = function(t) {
  return function(e) {
    return D.utils.snap(bl(t), e);
  };
}, ho = function(t) {
  var e = D.utils.snap(t), r = Array.isArray(t) && t.slice(0).sort(function(i, n) {
    return i - n;
  });
  return r ? function(i, n, o) {
    o === void 0 && (o = 1e-3);
    var a;
    if (!n)
      return e(i);
    if (n > 0) {
      for (i -= o, a = 0; a < r.length; a++)
        if (r[a] >= i)
          return r[a];
      return r[a - 1];
    } else
      for (a = r.length, i += o; a--; )
        if (r[a] <= i)
          return r[a];
    return r[0];
  } : function(i, n, o) {
    o === void 0 && (o = 1e-3);
    var a = e(i);
    return !n || Math.abs(a - i) < o || a - i < 0 == n < 0 ? a : e(n < 0 ? i - t : i + t);
  };
}, hc = function(t) {
  return function(e, r) {
    return ho(bl(t))(e, r.direction);
  };
}, Sn = function(t, e, r, i) {
  return r.split(",").forEach(function(n) {
    return t(e, n, i);
  });
}, At = function(t, e, r, i, n) {
  return t.addEventListener(e, r, {
    passive: !i,
    capture: !!n
  });
}, Rt = function(t, e, r, i) {
  return t.removeEventListener(e, r, !!i);
}, En = function(t, e, r) {
  r = r && r.wheelHandler, r && (t(e, "wheel", r), t(e, "touchmove", r));
}, Ho = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, Cn = {
  toggleActions: "play",
  anticipatePin: 0
}, Qn = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, zn = function(t, e) {
  if (we(t)) {
    var r = t.indexOf("="), i = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
    ~r && (t.indexOf("%") > r && (i *= e / 100), t = t.substr(0, r - 1)), t = i + (t in Qn ? Qn[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0);
  }
  return t;
}, kn = function(t, e, r, i, n, o, a, l) {
  var u = n.startColor, c = n.endColor, d = n.fontSize, h = n.indent, f = n.fontWeight, _ = et.createElement("div"), p = jr(r) || Pr(r, "pinType") === "fixed", m = t.indexOf("scroller") !== -1, b = p ? tt : r.tagName === "IFRAME" ? r.contentDocument.body : r, w = t.indexOf("start") !== -1, S = w ? u : c, v = "border-color:" + S + ";font-size:" + d + ";color:" + S + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return v += "position:" + ((m || l) && p ? "fixed;" : "absolute;"), (m || l || !p) && (v += (i === Mt ? uo : co) + ":" + (o + parseFloat(h)) + "px;"), a && (v += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), _._isStart = w, _.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), _.style.cssText = v, _.innerText = e || e === 0 ? t + "-" + e : t, b.children[0] ? b.insertBefore(_, b.children[0]) : b.appendChild(_), _._offset = _["offset" + i.op.d2], Nn(_, 0, i, w), _;
}, Nn = function(t, e, r, i) {
  var n = {
    display: "block"
  }, o = r[i ? "os2" : "p2"], a = r[i ? "p2" : "os2"];
  t._isFlipped = i, n[r.a + "Percent"] = i ? -100 : 0, n[r.a] = i ? "1px" : 0, n["border" + o + Mi] = 1, n["border" + a + Mi] = 0, n[r.p] = e + "px", D.set(t, n);
}, X = [], Fs = {}, dn, Uo = function() {
  return qt() - Fe > 34 && (dn || (dn = requestAnimationFrame(cr)));
}, ui = function() {
  (!ie || !ie.isPressed || ie.startX > tt.clientWidth) && (U.cache++, ie ? dn || (dn = requestAnimationFrame(cr)) : cr(), Fe || ei("scrollStart"), Fe = qt());
}, ds = function() {
  _l = H.innerWidth, pl = H.innerHeight;
}, Ui = function(t) {
  U.cache++, (t === !0 || !$t && !dl && !et.fullscreenElement && !et.webkitFullscreenElement && (!Ls || _l !== H.innerWidth || Math.abs(H.innerHeight - pl) > H.innerHeight * 0.25)) && Gn.restart(!0);
}, ti = {}, dc = [], Tl = function s() {
  return Rt(N, "scrollEnd", s) || Vr(!0);
}, ei = function(t) {
  return ti[t] && ti[t].map(function(e) {
    return e();
  }) || dc;
}, ye = [], Sl = function(t) {
  for (var e = 0; e < ye.length; e += 5)
    (!t || ye[e + 4] && ye[e + 4].query === t) && (ye[e].style.cssText = ye[e + 1], ye[e].getBBox && ye[e].setAttribute("transform", ye[e + 2] || ""), ye[e + 3].uncache = 1);
}, El = function() {
  return U.forEach(function(t) {
    return Kt(t) && ++t.cacheID && (t.rec = t());
  });
}, po = function(t, e) {
  var r;
  for (ne = 0; ne < X.length; ne++)
    r = X[ne], r && (!e || r._ctx === e) && (t ? r.kill(1) : r.revert(!0, !0));
  Zi = !0, e && Sl(e), e || ei("revert");
}, Cl = function(t, e) {
  U.cache++, (e || !se) && U.forEach(function(r) {
    return Kt(r) && r.cacheID++ && (r.rec = 0);
  }), we(t) && (H.history.scrollRestoration = ao = t);
}, se, Jr = 0, Vo, pc = function() {
  if (Vo !== Jr) {
    var t = Vo = Jr;
    requestAnimationFrame(function() {
      return t === Jr && Vr(!0);
    });
  }
}, kl = function() {
  tt.appendChild(xi), lo = !ie && xi.offsetHeight || H.innerHeight, tt.removeChild(xi);
}, $o = function(t) {
  return hn(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e) {
    return e.style.display = t ? "none" : "block";
  });
}, Vr = function(t, e) {
  if (be = et.documentElement, tt = et.body, oo = [H, et, be, tt], Fe && !t && !Zi) {
    At(N, "scrollEnd", Tl);
    return;
  }
  kl(), se = N.isRefreshing = !0, Zi || El();
  var r = ei("refreshInit");
  hl && N.sort(), e || po(), U.forEach(function(i) {
    Kt(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
  }), X.slice(0).forEach(function(i) {
    return i.refresh();
  }), Zi = !1, X.forEach(function(i) {
    if (i._subPinOffset && i.pin) {
      var n = i.vars.horizontal ? "offsetWidth" : "offsetHeight", o = i.pin[n];
      i.revert(!0, 1), i.adjustPinSpacing(i.pin[n] - o), i.refresh();
    }
  }), Ns = 1, $o(!0), X.forEach(function(i) {
    var n = Je(i.scroller, i._dir), o = i.vars.end === "max" || i._endClamp && i.end > n, a = i._startClamp && i.start >= n;
    (o || a) && i.setPositions(a ? n - 1 : i.start, o ? Math.max(a ? n : i.start + 1, n) : i.end, !0);
  }), $o(!1), Ns = 0, r.forEach(function(i) {
    return i && i.render && i.render(-1);
  }), U.forEach(function(i) {
    Kt(i) && (i.smooth && requestAnimationFrame(function() {
      return i.target.style.scrollBehavior = "smooth";
    }), i.rec && i(i.rec));
  }), Cl(ao, 1), Gn.pause(), Jr++, se = 2, cr(2), X.forEach(function(i) {
    return Kt(i.vars.onRefresh) && i.vars.onRefresh(i);
  }), se = N.isRefreshing = !1, ei("refresh");
}, Is = 0, Fn = 1, rn, cr = function(t) {
  if (t === 2 || !se && !Zi) {
    N.isUpdating = !0, rn && rn.update(0);
    var e = X.length, r = qt(), i = r - hs >= 50, n = e && X[0].scroll();
    if (Fn = Is > n ? -1 : 1, se || (Is = n), i && (Fe && !ts && r - Fe > 200 && (Fe = 0, ei("scrollEnd")), Bi = hs, hs = r), Fn < 0) {
      for (ne = e; ne-- > 0; )
        X[ne] && X[ne].update(0, i);
      Fn = 1;
    } else
      for (ne = 0; ne < e; ne++)
        X[ne] && X[ne].update(0, i);
    N.isUpdating = !1;
  }
  dn = 0;
}, Ys = [wl, xl, co, uo, Ae + en, Ae + Ji, Ae + tn, Ae + ji, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], In = Ys.concat([Qr, Zr, "boxSizing", "max" + Mi, "max" + fo, "position", Ae, Et, Et + tn, Et + Ji, Et + en, Et + ji]), _c = function(t, e, r) {
  bi(r);
  var i = t._gsap;
  if (i.spacerIsNative)
    bi(i.spacerState);
  else if (t._gsap.swappedIn) {
    var n = e.parentNode;
    n && (n.insertBefore(t, e), n.removeChild(e));
  }
  t._gsap.swappedIn = !1;
}, ps = function(t, e, r, i) {
  if (!t._gsap.swappedIn) {
    for (var n = Ys.length, o = e.style, a = t.style, l; n--; )
      l = Ys[n], o[l] = r[l];
    o.position = r.position === "absolute" ? "absolute" : "relative", r.display === "inline" && (o.display = "inline-block"), a[co] = a[uo] = "auto", o.flexBasis = r.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[Qr] = Kn(t, oe) + Pt, o[Zr] = Kn(t, Mt) + Pt, o[Et] = a[Ae] = a[xl] = a[wl] = "0", bi(i), a[Qr] = a["max" + Mi] = r[Qr], a[Zr] = a["max" + fo] = r[Zr], a[Et] = r[Et], t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)), t._gsap.swappedIn = !0;
  }
}, gc = /([A-Z])/g, bi = function(t) {
  if (t) {
    var e = t.t.style, r = t.length, i = 0, n, o;
    for ((t.t._gsap || D.core.getCache(t.t)).uncache = 1; i < r; i += 2)
      o = t[i + 1], n = t[i], o ? e[n] = o : e[n] && e.removeProperty(n.replace(gc, "-$1").toLowerCase());
  }
}, Pn = function(t) {
  for (var e = In.length, r = t.style, i = [], n = 0; n < e; n++)
    i.push(In[n], r[In[n]]);
  return i.t = t, i;
}, mc = function(t, e, r) {
  for (var i = [], n = t.length, o = r ? 8 : 0, a; o < n; o += 2)
    a = t[o], i.push(a, a in e ? e[a] : t[o + 1]);
  return i.t = t.t, i;
}, Yn = {
  left: 0,
  top: 0
}, qo = function(t, e, r, i, n, o, a, l, u, c, d, h, f, _) {
  Kt(t) && (t = t(l)), we(t) && t.substr(0, 3) === "max" && (t = h + (t.charAt(4) === "=" ? zn("0" + t.substr(3), r) : 0));
  var p = f ? f.time() : 0, m, b, w;
  if (f && f.seek(0), isNaN(t) || (t = +t), Hi(t))
    f && (t = D.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, h, t)), a && Nn(a, r, i, !0);
  else {
    Kt(e) && (e = e(l));
    var S = (t || "0").split(" "), v, T, k, x;
    w = le(e, l) || tt, v = lr(w) || {}, (!v || !v.left && !v.top) && Le(w).display === "none" && (x = w.style.display, w.style.display = "block", v = lr(w), x ? w.style.display = x : w.style.removeProperty("display")), T = zn(S[0], v[i.d]), k = zn(S[1] || "0", r), t = v[i.p] - u[i.p] - c + T + n - k, a && Nn(a, k, i, r - k < 20 || a._isStart && k > 20), r -= r - k;
  }
  if (_ && (l[_] = t || -1e-3, t < 0 && (t = 0)), o) {
    var P = t + r, C = o._isStart;
    m = "scroll" + i.d2, Nn(o, P, i, C && P > 20 || !C && (d ? Math.max(tt[m], be[m]) : o.parentNode[m]) <= P + 1), d && (u = lr(a), d && (o.style[i.op.p] = u[i.op.p] - i.op.m - o._offset + Pt));
  }
  return f && w && (m = lr(w), f.seek(h), b = lr(w), f._caScrollDist = m[i.p] - b[i.p], t = t / f._caScrollDist * h), f && f.seek(p), f ? t : Math.round(t);
}, vc = /(webkit|moz|length|cssText|inset)/i, Go = function(t, e, r, i) {
  if (t.parentNode !== e) {
    var n = t.style, o, a;
    if (e === tt) {
      t._stOrig = n.cssText, a = Le(t);
      for (o in a)
        !+o && !vc.test(o) && a[o] && typeof n[o] == "string" && o !== "0" && (n[o] = a[o]);
      n.top = r, n.left = i;
    } else
      n.cssText = t._stOrig;
    D.core.getCache(t).uncache = 1, e.appendChild(t);
  }
}, Pl = function(t, e, r) {
  var i = e, n = i;
  return function(o) {
    var a = Math.round(t());
    return a !== i && a !== n && Math.abs(a - i) > 3 && Math.abs(a - n) > 3 && (o = a, r && r()), n = i, i = Math.round(o), i;
  };
}, Mn = function(t, e, r) {
  var i = {};
  i[e.p] = "+=" + r, D.set(t, i);
}, Ko = function(t, e) {
  var r = Rr(t, e), i = "_scroll" + e.p2, n = function o(a, l, u, c, d) {
    var h = o.tween, f = l.onComplete, _ = {};
    u = u || r();
    var p = Pl(r, u, function() {
      h.kill(), o.tween = 0;
    });
    return d = c && d || 0, c = c || a - u, h && h.kill(), l[i] = a, l.inherit = !1, l.modifiers = _, _[i] = function() {
      return p(u + c * h.ratio + d * h.ratio * h.ratio);
    }, l.onUpdate = function() {
      U.cache++, o.tween && cr();
    }, l.onComplete = function() {
      o.tween = 0, f && f.call(h);
    }, h = o.tween = D.to(t, l), h;
  };
  return t[i] = r, r.wheelHandler = function() {
    return n.tween && n.tween.kill() && (n.tween = 0);
  }, At(t, "wheel", r.wheelHandler), N.isTouch && At(t, "touchmove", r.wheelHandler), n;
}, N = /* @__PURE__ */ function() {
  function s(e, r) {
    fi || s.register(D) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), zs(this), this.init(e, r);
  }
  var t = s.prototype;
  return t.init = function(r, i) {
    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Wi) {
      this.update = this.refresh = this.kill = Ke;
      return;
    }
    r = Xo(we(r) || Hi(r) || r.nodeType ? {
      trigger: r
    } : r, Cn);
    var n = r, o = n.onUpdate, a = n.toggleClass, l = n.id, u = n.onToggle, c = n.onRefresh, d = n.scrub, h = n.trigger, f = n.pin, _ = n.pinSpacing, p = n.invalidateOnRefresh, m = n.anticipatePin, b = n.onScrubComplete, w = n.onSnapComplete, S = n.once, v = n.snap, T = n.pinReparent, k = n.pinSpacer, x = n.containerAnimation, P = n.fastScrollEnd, C = n.preventOverlaps, E = r.horizontal || r.containerAnimation && r.horizontal !== !1 ? oe : Mt, W = !d && d !== 0, O = le(r.scroller || H), K = D.core.getCache(O), Y = jr(O), Q = ("pinType" in r ? r.pinType : Pr(O, "pinType") || Y && "fixed") === "fixed", $ = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack], L = W && r.toggleActions.split(" "), Z = "markers" in r ? r.markers : Cn.markers, rt = Y ? 0 : parseFloat(Le(O)["border" + E.p2 + Mi]) || 0, g = this, ot = r.onRefreshInit && function() {
      return r.onRefreshInit(g);
    }, Zt = lc(O, Y, E), Ie = uc(O, Y), dt = 0, Nt = 0, Wt = 0, Tt = Rr(O, E), Jt, Xt, dr, jt, te, J, vt, ae, ge, y, me, er, pr, pt, rr, _r, Lr, Ot, gr, yt, Ye, Oe, ir, Di, St, _n, nr, ii, ni, mr, zr, V, Nr, Be, We, Xe, Fr, si, sr;
    if (g._startClamp = g._endClamp = !1, g._dir = E, m *= 45, g.scroller = O, g.scroll = x ? x.time.bind(x) : Tt, jt = Tt(), g.vars = r, i = i || r.animation, "refreshPriority" in r && (hl = 1, r.refreshPriority === -9999 && (rn = g)), K.tweenScroll = K.tweenScroll || {
      top: Ko(O, Mt),
      left: Ko(O, oe)
    }, g.tweenTo = Jt = K.tweenScroll[E.p], g.scrubDuration = function(M) {
      Nr = Hi(M) && M, Nr ? V ? V.duration(M) : V = D.to(i, {
        ease: "expo",
        totalProgress: "+=0",
        inherit: !1,
        duration: Nr,
        paused: !0,
        onComplete: function() {
          return b && b(g);
        }
      }) : (V && V.progress(1).kill(), V = 0);
    }, i && (i.vars.lazy = !1, i._initted && !g.isReverted || i.vars.immediateRender !== !1 && r.immediateRender !== !1 && i.duration() && i.render(0, !0, !0), g.animation = i.pause(), i.scrollTrigger = g, g.scrubDuration(d), mr = 0, l || (l = i.vars.id)), v && ((!Hr(v) || v.push) && (v = {
      snapTo: v
    }), "scrollBehavior" in tt.style && D.set(Y ? [tt, be] : O, {
      scrollBehavior: "auto"
    }), U.forEach(function(M) {
      return Kt(M) && M.target === (Y ? et.scrollingElement || be : O) && (M.smooth = !1);
    }), dr = Kt(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? fc(i) : v.snapTo === "labelsDirectional" ? hc(i) : v.directional !== !1 ? function(M, F) {
      return ho(v.snapTo)(M, qt() - Nt < 500 ? 0 : F.direction);
    } : D.utils.snap(v.snapTo), Be = v.duration || {
      min: 0.1,
      max: 2
    }, Be = Hr(Be) ? Qi(Be.min, Be.max) : Qi(Be, Be), We = D.delayedCall(v.delay || Nr / 2 || 0.1, function() {
      var M = Tt(), F = qt() - Nt < 500, A = Jt.tween;
      if ((F || Math.abs(g.getVelocity()) < 10) && !A && !ts && dt !== M) {
        var I = (M - J) / pt, Dt = i && !W ? i.totalProgress() : I, q = F ? 0 : (Dt - zr) / (qt() - Bi) * 1e3 || 0, wt = D.utils.clamp(-I, 1 - I, li(q / 2) * q / 0.185), Ht = I + (v.inertia === !1 ? 0 : wt), _t, at, it = v, He = it.onStart, ut = it.onInterrupt, ve = it.onComplete;
        if (_t = dr(Ht, g), Hi(_t) || (_t = Ht), at = Math.max(0, Math.round(J + _t * pt)), M <= vt && M >= J && at !== M) {
          if (A && !A._initted && A.data <= li(at - M))
            return;
          v.inertia === !1 && (wt = _t - I), Jt(at, {
            duration: Be(li(Math.max(li(Ht - Dt), li(_t - Dt)) * 0.185 / q / 0.05 || 0)),
            ease: v.ease || "power3",
            data: li(at - M),
            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
            onInterrupt: function() {
              return We.restart(!0) && ut && ai(g, ut);
            },
            onComplete: function() {
              g.update(), dt = Tt(), i && !W && (V ? V.resetTo("totalProgress", _t, i._tTime / i._tDur) : i.progress(_t)), mr = zr = i && !W ? i.totalProgress() : g.progress, w && w(g), ve && ai(g, ve);
            }
          }, M, wt * pt, at - M - wt * pt), He && ai(g, He, Jt.tween);
        }
      } else g.isActive && dt !== M && We.restart(!0);
    }).pause()), l && (Fs[l] = g), h = g.trigger = le(h || f !== !0 && f), sr = h && h._gsap && h._gsap.stRevert, sr && (sr = sr(g)), f = f === !0 ? h : le(f), we(a) && (a = {
      targets: h,
      className: a
    }), f && (_ === !1 || _ === Ae || (_ = !_ && f.parentNode && f.parentNode.style && Le(f.parentNode).display === "flex" ? !1 : Et), g.pin = f, Xt = D.core.getCache(f), Xt.spacer ? rr = Xt.pinState : (k && (k = le(k), k && !k.nodeType && (k = k.current || k.nativeElement), Xt.spacerIsNative = !!k, k && (Xt.spacerState = Pn(k))), Xt.spacer = Ot = k || et.createElement("div"), Ot.classList.add("pin-spacer"), l && Ot.classList.add("pin-spacer-" + l), Xt.pinState = rr = Pn(f)), r.force3D !== !1 && D.set(f, {
      force3D: !0
    }), g.spacer = Ot = Xt.spacer, ni = Le(f), Di = ni[_ + E.os2], yt = D.getProperty(f), Ye = D.quickSetter(f, E.a, Pt), ps(f, Ot, ni), Lr = Pn(f)), Z) {
      er = Hr(Z) ? Xo(Z, Ho) : Ho, y = kn("scroller-start", l, O, E, er, 0), me = kn("scroller-end", l, O, E, er, 0, y), gr = y["offset" + E.op.d2];
      var Ri = le(Pr(O, "content") || O);
      ae = this.markerStart = kn("start", l, Ri, E, er, gr, 0, x), ge = this.markerEnd = kn("end", l, Ri, E, er, gr, 0, x), x && (si = D.quickSetter([ae, ge], E.a, Pt)), !Q && !(je.length && Pr(O, "fixedMarkers") === !0) && (cc(Y ? tt : O), D.set([y, me], {
        force3D: !0
      }), _n = D.quickSetter(y, E.a, Pt), ii = D.quickSetter(me, E.a, Pt));
    }
    if (x) {
      var B = x.vars.onUpdate, z = x.vars.onUpdateParams;
      x.eventCallback("onUpdate", function() {
        g.update(0, 0, 1), B && B.apply(x, z || []);
      });
    }
    if (g.previous = function() {
      return X[X.indexOf(g) - 1];
    }, g.next = function() {
      return X[X.indexOf(g) + 1];
    }, g.revert = function(M, F) {
      if (!F)
        return g.kill(!0);
      var A = M !== !1 || !g.enabled, I = $t;
      A !== g.isReverted && (A && (Xe = Math.max(Tt(), g.scroll.rec || 0), Wt = g.progress, Fr = i && i.progress()), ae && [ae, ge, y, me].forEach(function(Dt) {
        return Dt.style.display = A ? "none" : "block";
      }), A && ($t = g, g.update(A)), f && (!T || !g.isActive) && (A ? _c(f, Ot, rr) : ps(f, Ot, Le(f), St)), A || g.update(A), $t = I, g.isReverted = A);
    }, g.refresh = function(M, F, A, I) {
      if (!(($t || !g.enabled) && !F)) {
        if (f && M && Fe) {
          At(s, "scrollEnd", Tl);
          return;
        }
        !se && ot && ot(g), $t = g, Jt.tween && !A && (Jt.tween.kill(), Jt.tween = 0), V && V.pause(), p && i && (i.revert({
          kill: !1
        }).invalidate(), i.getChildren ? i.getChildren(!0, !0, !1).forEach(function(vr) {
          return vr.vars.immediateRender && vr.render(0, !0, !0);
        }) : i.vars.immediateRender && i.render(0, !0, !0)), g.isReverted || g.revert(!0, !0), g._subPinOffset = !1;
        var Dt = Zt(), q = Ie(), wt = x ? x.duration() : Je(O, E), Ht = pt <= 0.01 || !pt, _t = 0, at = I || 0, it = Hr(A) ? A.end : r.end, He = r.endTrigger || h, ut = Hr(A) ? A.start : r.start || (r.start === 0 || !h ? 0 : f ? "0 0" : "0 100%"), ve = g.pinnedContainer = r.pinnedContainer && le(r.pinnedContainer, g), Ve = h && Math.max(0, X.indexOf(g)) || 0, Ft = Ve, It, Ut, Ir, gn, Vt, kt, $e, es, go, Ai, qe, Li, mn;
        for (Z && Hr(A) && (Li = D.getProperty(y, E.p), mn = D.getProperty(me, E.p)); Ft-- > 0; )
          kt = X[Ft], kt.end || kt.refresh(0, 1) || ($t = g), $e = kt.pin, $e && ($e === h || $e === f || $e === ve) && !kt.isReverted && (Ai || (Ai = []), Ai.unshift(kt), kt.revert(!0, !0)), kt !== X[Ft] && (Ve--, Ft--);
        for (Kt(ut) && (ut = ut(g)), ut = Io(ut, "start", g), J = qo(ut, h, Dt, E, Tt(), ae, y, g, q, rt, Q, wt, x, g._startClamp && "_startClamp") || (f ? -1e-3 : 0), Kt(it) && (it = it(g)), we(it) && !it.indexOf("+=") && (~it.indexOf(" ") ? it = (we(ut) ? ut.split(" ")[0] : "") + it : (_t = zn(it.substr(2), Dt), it = we(ut) ? ut : (x ? D.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, J) : J) + _t, He = h)), it = Io(it, "end", g), vt = Math.max(J, qo(it || (He ? "100% 0" : wt), He, Dt, E, Tt() + _t, ge, me, g, q, rt, Q, wt, x, g._endClamp && "_endClamp")) || -1e-3, _t = 0, Ft = Ve; Ft--; )
          kt = X[Ft] || {}, $e = kt.pin, $e && kt.start - kt._pinPush <= J && !x && kt.end > 0 && (It = kt.end - (g._startClamp ? Math.max(0, kt.start) : kt.start), ($e === h && kt.start - kt._pinPush < J || $e === ve) && isNaN(ut) && (_t += It * (1 - kt.progress)), $e === f && (at += It));
        if (J += _t, vt += _t, g._startClamp && (g._startClamp += _t), g._endClamp && !se && (g._endClamp = vt || -1e-3, vt = Math.min(vt, Je(O, E))), pt = vt - J || (J -= 0.01) && 1e-3, Ht && (Wt = D.utils.clamp(0, 1, D.utils.normalize(J, vt, Xe))), g._pinPush = at, ae && _t && (It = {}, It[E.a] = "+=" + _t, ve && (It[E.p] = "-=" + Tt()), D.set([ae, ge], It)), f && !(Ns && g.end >= Je(O, E)))
          It = Le(f), gn = E === Mt, Ir = Tt(), Oe = parseFloat(yt(E.a)) + at, !wt && vt > 1 && (qe = (Y ? et.scrollingElement || be : O).style, qe = {
            style: qe,
            value: qe["overflow" + E.a.toUpperCase()]
          }, Y && Le(tt)["overflow" + E.a.toUpperCase()] !== "scroll" && (qe.style["overflow" + E.a.toUpperCase()] = "scroll")), ps(f, Ot, It), Lr = Pn(f), Ut = lr(f, !0), es = Q && Rr(O, gn ? oe : Mt)(), _ ? (St = [_ + E.os2, pt + at + Pt], St.t = Ot, Ft = _ === Et ? Kn(f, E) + pt + at : 0, Ft && (St.push(E.d, Ft + Pt), Ot.style.flexBasis !== "auto" && (Ot.style.flexBasis = Ft + Pt)), bi(St), ve && X.forEach(function(vr) {
            vr.pin === ve && vr.vars.pinSpacing !== !1 && (vr._subPinOffset = !0);
          }), Q && Tt(Xe)) : (Ft = Kn(f, E), Ft && Ot.style.flexBasis !== "auto" && (Ot.style.flexBasis = Ft + Pt)), Q && (Vt = {
            top: Ut.top + (gn ? Ir - J : es) + Pt,
            left: Ut.left + (gn ? es : Ir - J) + Pt,
            boxSizing: "border-box",
            position: "fixed"
          }, Vt[Qr] = Vt["max" + Mi] = Math.ceil(Ut.width) + Pt, Vt[Zr] = Vt["max" + fo] = Math.ceil(Ut.height) + Pt, Vt[Ae] = Vt[Ae + tn] = Vt[Ae + Ji] = Vt[Ae + en] = Vt[Ae + ji] = "0", Vt[Et] = It[Et], Vt[Et + tn] = It[Et + tn], Vt[Et + Ji] = It[Et + Ji], Vt[Et + en] = It[Et + en], Vt[Et + ji] = It[Et + ji], _r = mc(rr, Vt, T), se && Tt(0)), i ? (go = i._initted, cs(1), i.render(i.duration(), !0, !0), ir = yt(E.a) - Oe + pt + at, nr = Math.abs(pt - ir) > 1, Q && nr && _r.splice(_r.length - 2, 2), i.render(0, !0, !0), go || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), cs(0)) : ir = pt, qe && (qe.value ? qe.style["overflow" + E.a.toUpperCase()] = qe.value : qe.style.removeProperty("overflow-" + E.a));
        else if (h && Tt() && !x)
          for (Ut = h.parentNode; Ut && Ut !== tt; )
            Ut._pinOffset && (J -= Ut._pinOffset, vt -= Ut._pinOffset), Ut = Ut.parentNode;
        Ai && Ai.forEach(function(vr) {
          return vr.revert(!1, !0);
        }), g.start = J, g.end = vt, jt = te = se ? Xe : Tt(), !x && !se && (jt < Xe && Tt(Xe), g.scroll.rec = 0), g.revert(!1, !0), Nt = qt(), We && (dt = -1, We.restart(!0)), $t = 0, i && W && (i._initted || Fr) && i.progress() !== Fr && i.progress(Fr || 0, !0).render(i.time(), !0, !0), (Ht || Wt !== g.progress || x || p || i && !i._initted) && (i && !W && (i._initted || Wt || i.vars.immediateRender !== !1) && i.totalProgress(x && J < -1e-3 && !Wt ? D.utils.normalize(J, vt, 0) : Wt, !0), g.progress = Ht || (jt - J) / pt === Wt ? 0 : Wt), f && _ && (Ot._pinOffset = Math.round(g.progress * ir)), V && V.invalidate(), isNaN(Li) || (Li -= D.getProperty(y, E.p), mn -= D.getProperty(me, E.p), Mn(y, E, Li), Mn(ae, E, Li - (I || 0)), Mn(me, E, mn), Mn(ge, E, mn - (I || 0))), Ht && !se && g.update(), c && !se && !pr && (pr = !0, c(g), pr = !1);
      }
    }, g.getVelocity = function() {
      return (Tt() - te) / (qt() - Bi) * 1e3 || 0;
    }, g.endAnimation = function() {
      Fi(g.callbackAnimation), i && (V ? V.progress(1) : i.paused() ? W || Fi(i, g.direction < 0, 1) : Fi(i, i.reversed()));
    }, g.labelToScroll = function(M) {
      return i && i.labels && (J || g.refresh() || J) + i.labels[M] / i.duration() * pt || 0;
    }, g.getTrailing = function(M) {
      var F = X.indexOf(g), A = g.direction > 0 ? X.slice(0, F).reverse() : X.slice(F + 1);
      return (we(M) ? A.filter(function(I) {
        return I.vars.preventOverlaps === M;
      }) : A).filter(function(I) {
        return g.direction > 0 ? I.end <= J : I.start >= vt;
      });
    }, g.update = function(M, F, A) {
      if (!(x && !A && !M)) {
        var I = se === !0 ? Xe : g.scroll(), Dt = M ? 0 : (I - J) / pt, q = Dt < 0 ? 0 : Dt > 1 ? 1 : Dt || 0, wt = g.progress, Ht, _t, at, it, He, ut, ve, Ve;
        if (F && (te = jt, jt = x ? Tt() : I, v && (zr = mr, mr = i && !W ? i.totalProgress() : q)), m && f && !$t && !bn && Fe && (!q && J < I + (I - te) / (qt() - Bi) * m ? q = 1e-4 : q === 1 && vt > I + (I - te) / (qt() - Bi) * m && (q = 0.9999)), q !== wt && g.enabled) {
          if (Ht = g.isActive = !!q && q < 1, _t = !!wt && wt < 1, ut = Ht !== _t, He = ut || !!q != !!wt, g.direction = q > wt ? 1 : -1, g.progress = q, He && !$t && (at = q && !wt ? 0 : q === 1 ? 1 : wt === 1 ? 2 : 3, W && (it = !ut && L[at + 1] !== "none" && L[at + 1] || L[at], Ve = i && (it === "complete" || it === "reset" || it in i))), C && (ut || Ve) && (Ve || d || !i) && (Kt(C) ? C(g) : g.getTrailing(C).forEach(function(Ir) {
            return Ir.endAnimation();
          })), W || (V && !$t && !bn ? (V._dp._time - V._start !== V._time && V.render(V._dp._time - V._start), V.resetTo ? V.resetTo("totalProgress", q, i._tTime / i._tDur) : (V.vars.totalProgress = q, V.invalidate().restart())) : i && i.totalProgress(q, !!($t && (Nt || M)))), f) {
            if (M && _ && (Ot.style[_ + E.os2] = Di), !Q)
              Ye(Xi(Oe + ir * q));
            else if (He) {
              if (ve = !M && q > wt && vt + 1 > I && I + 1 >= Je(O, E), T)
                if (!M && (Ht || ve)) {
                  var Ft = lr(f, !0), It = I - J;
                  Go(f, tt, Ft.top + (E === Mt ? It : 0) + Pt, Ft.left + (E === Mt ? 0 : It) + Pt);
                } else
                  Go(f, Ot);
              bi(Ht || ve ? _r : Lr), nr && q < 1 && Ht || Ye(Oe + (q === 1 && !ve ? ir : 0));
            }
          }
          v && !Jt.tween && !$t && !bn && We.restart(!0), a && (ut || S && q && (q < 1 || !fs)) && hn(a.targets).forEach(function(Ir) {
            return Ir.classList[Ht || S ? "add" : "remove"](a.className);
          }), o && !W && !M && o(g), He && !$t ? (W && (Ve && (it === "complete" ? i.pause().totalProgress(1) : it === "reset" ? i.restart(!0).pause() : it === "restart" ? i.restart(!0) : i[it]()), o && o(g)), (ut || !fs) && (u && ut && ai(g, u), $[at] && ai(g, $[at]), S && (q === 1 ? g.kill(!1, 1) : $[at] = 0), ut || (at = q === 1 ? 1 : 3, $[at] && ai(g, $[at]))), P && !Ht && Math.abs(g.getVelocity()) > (Hi(P) ? P : 2500) && (Fi(g.callbackAnimation), V ? V.progress(1) : Fi(i, it === "reverse" ? 1 : !q, 1))) : W && o && !$t && o(g);
        }
        if (ii) {
          var Ut = x ? I / x.duration() * (x._caScrollDist || 0) : I;
          _n(Ut + (y._isFlipped ? 1 : 0)), ii(Ut);
        }
        si && si(-I / x.duration() * (x._caScrollDist || 0));
      }
    }, g.enable = function(M, F) {
      g.enabled || (g.enabled = !0, At(O, "resize", Ui), Y || At(O, "scroll", ui), ot && At(s, "refreshInit", ot), M !== !1 && (g.progress = Wt = 0, jt = te = dt = Tt()), F !== !1 && g.refresh());
    }, g.getTween = function(M) {
      return M && Jt ? Jt.tween : V;
    }, g.setPositions = function(M, F, A, I) {
      if (x) {
        var Dt = x.scrollTrigger, q = x.duration(), wt = Dt.end - Dt.start;
        M = Dt.start + wt * M / q, F = Dt.start + wt * F / q;
      }
      g.refresh(!1, !1, {
        start: Yo(M, A && !!g._startClamp),
        end: Yo(F, A && !!g._endClamp)
      }, I), g.update();
    }, g.adjustPinSpacing = function(M) {
      if (St && M) {
        var F = St.indexOf(E.d) + 1;
        St[F] = parseFloat(St[F]) + M + Pt, St[1] = parseFloat(St[1]) + M + Pt, bi(St);
      }
    }, g.disable = function(M, F) {
      if (M !== !1 && g.revert(!0, !0), g.enabled && (g.enabled = g.isActive = !1, F || V && V.pause(), Xe = 0, Xt && (Xt.uncache = 1), ot && Rt(s, "refreshInit", ot), We && (We.pause(), Jt.tween && Jt.tween.kill() && (Jt.tween = 0)), !Y)) {
        for (var A = X.length; A--; )
          if (X[A].scroller === O && X[A] !== g)
            return;
        Rt(O, "resize", Ui), Y || Rt(O, "scroll", ui);
      }
    }, g.kill = function(M, F) {
      g.disable(M, F), V && !F && V.kill(), l && delete Fs[l];
      var A = X.indexOf(g);
      A >= 0 && X.splice(A, 1), A === ne && Fn > 0 && ne--, A = 0, X.forEach(function(I) {
        return I.scroller === g.scroller && (A = 1);
      }), A || se || (g.scroll.rec = 0), i && (i.scrollTrigger = null, M && i.revert({
        kill: !1
      }), F || i.kill()), ae && [ae, ge, y, me].forEach(function(I) {
        return I.parentNode && I.parentNode.removeChild(I);
      }), rn === g && (rn = 0), f && (Xt && (Xt.uncache = 1), A = 0, X.forEach(function(I) {
        return I.pin === f && A++;
      }), A || (Xt.spacer = 0)), r.onKill && r.onKill(g);
    }, X.push(g), g.enable(!1, !1), sr && sr(g), i && i.add && !pt) {
      var j = g.update;
      g.update = function() {
        g.update = j, U.cache++, J || vt || g.refresh();
      }, D.delayedCall(0.01, g.update), pt = 0.01, J = vt = 0;
    } else
      g.refresh();
    f && pc();
  }, s.register = function(r) {
    return fi || (D = r || ml(), gl() && window.document && s.enable(), fi = Wi), fi;
  }, s.defaults = function(r) {
    if (r)
      for (var i in r)
        Cn[i] = r[i];
    return Cn;
  }, s.disable = function(r, i) {
    Wi = 0, X.forEach(function(o) {
      return o[i ? "kill" : "disable"](r);
    }), Rt(H, "wheel", ui), Rt(et, "scroll", ui), clearInterval(xn), Rt(et, "touchcancel", Ke), Rt(tt, "touchstart", Ke), Sn(Rt, et, "pointerdown,touchstart,mousedown", Bo), Sn(Rt, et, "pointerup,touchend,mouseup", Wo), Gn.kill(), Tn(Rt);
    for (var n = 0; n < U.length; n += 3)
      En(Rt, U[n], U[n + 1]), En(Rt, U[n], U[n + 2]);
  }, s.enable = function() {
    if (H = window, et = document, be = et.documentElement, tt = et.body, D) {
      if (hn = D.utils.toArray, Qi = D.utils.clamp, zs = D.core.context || Ke, cs = D.core.suppressOverwrites || Ke, ao = H.history.scrollRestoration || "auto", Is = H.pageYOffset || 0, D.core.globals("ScrollTrigger", s), tt) {
        Wi = 1, xi = document.createElement("div"), xi.style.height = "100vh", xi.style.position = "absolute", kl(), ac(), bt.register(D), s.isTouch = bt.isTouch, wr = bt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Ls = bt.isTouch === 1, At(H, "wheel", ui), oo = [H, et, be, tt], D.matchMedia ? (s.matchMedia = function(c) {
          var d = D.matchMedia(), h;
          for (h in c)
            d.add(h, c[h]);
          return d;
        }, D.addEventListener("matchMediaInit", function() {
          El(), po();
        }), D.addEventListener("matchMediaRevert", function() {
          return Sl();
        }), D.addEventListener("matchMedia", function() {
          Vr(0, 1), ei("matchMedia");
        }), D.matchMedia().add("(orientation: portrait)", function() {
          return ds(), ds;
        })) : console.warn("Requires GSAP 3.11.0 or later"), ds(), At(et, "scroll", ui);
        var r = tt.hasAttribute("style"), i = tt.style, n = i.borderTopStyle, o = D.core.Animation.prototype, a, l;
        for (o.revert || Object.defineProperty(o, "revert", {
          value: function() {
            return this.time(-0.01, !0);
          }
        }), i.borderTopStyle = "solid", a = lr(tt), Mt.m = Math.round(a.top + Mt.sc()) || 0, oe.m = Math.round(a.left + oe.sc()) || 0, n ? i.borderTopStyle = n : i.removeProperty("border-top-style"), r || (tt.setAttribute("style", ""), tt.removeAttribute("style")), xn = setInterval(Uo, 250), D.delayedCall(0.5, function() {
          return bn = 0;
        }), At(et, "touchcancel", Ke), At(tt, "touchstart", Ke), Sn(At, et, "pointerdown,touchstart,mousedown", Bo), Sn(At, et, "pointerup,touchend,mouseup", Wo), As = D.utils.checkPrefix("transform"), In.push(As), fi = qt(), Gn = D.delayedCall(0.2, Vr).pause(), hi = [et, "visibilitychange", function() {
          var c = H.innerWidth, d = H.innerHeight;
          et.hidden ? (No = c, Fo = d) : (No !== c || Fo !== d) && Ui();
        }, et, "DOMContentLoaded", Vr, H, "load", Vr, H, "resize", Ui], Tn(At), X.forEach(function(c) {
          return c.enable(0, 1);
        }), l = 0; l < U.length; l += 3)
          En(Rt, U[l], U[l + 1]), En(Rt, U[l], U[l + 2]);
      } else if (et) {
        var u = function c() {
          s.enable(), et.removeEventListener("DOMContentLoaded", c);
        };
        et.addEventListener("DOMContentLoaded", u);
      }
    }
  }, s.config = function(r) {
    "limitCallbacks" in r && (fs = !!r.limitCallbacks);
    var i = r.syncInterval;
    i && clearInterval(xn) || (xn = i) && setInterval(Uo, i), "ignoreMobileResize" in r && (Ls = s.isTouch === 1 && r.ignoreMobileResize), "autoRefreshEvents" in r && (Tn(Rt) || Tn(At, r.autoRefreshEvents || "none"), dl = (r.autoRefreshEvents + "").indexOf("resize") === -1);
  }, s.scrollerProxy = function(r, i) {
    var n = le(r), o = U.indexOf(n), a = jr(n);
    ~o && U.splice(o, a ? 6 : 2), i && (a ? je.unshift(H, i, tt, i, be, i) : je.unshift(n, i));
  }, s.clearMatchMedia = function(r) {
    X.forEach(function(i) {
      return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
    });
  }, s.isInViewport = function(r, i, n) {
    var o = (we(r) ? le(r) : r).getBoundingClientRect(), a = o[n ? Qr : Zr] * i || 0;
    return n ? o.right - a > 0 && o.left + a < H.innerWidth : o.bottom - a > 0 && o.top + a < H.innerHeight;
  }, s.positionInViewport = function(r, i, n) {
    we(r) && (r = le(r));
    var o = r.getBoundingClientRect(), a = o[n ? Qr : Zr], l = i == null ? a / 2 : i in Qn ? Qn[i] * a : ~i.indexOf("%") ? parseFloat(i) * a / 100 : parseFloat(i) || 0;
    return n ? (o.left + l) / H.innerWidth : (o.top + l) / H.innerHeight;
  }, s.killAll = function(r) {
    if (X.slice(0).forEach(function(n) {
      return n.vars.id !== "ScrollSmoother" && n.kill();
    }), r !== !0) {
      var i = ti.killAll || [];
      ti = {}, i.forEach(function(n) {
        return n();
      });
    }
  }, s;
}();
N.version = "3.15.0";
N.saveStyles = function(s) {
  return s ? hn(s).forEach(function(t) {
    if (t && t.style) {
      var e = ye.indexOf(t);
      e >= 0 && ye.splice(e, 5), ye.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), D.core.getCache(t), zs());
    }
  }) : ye;
};
N.revert = function(s, t) {
  return po(!s, t);
};
N.create = function(s, t) {
  return new N(s, t);
};
N.refresh = function(s) {
  return s ? Ui(!0) : (fi || N.register()) && Vr(!0);
};
N.update = function(s) {
  return ++U.cache && cr(s === !0 ? 2 : 0);
};
N.clearScrollMemory = Cl;
N.maxScroll = function(s, t) {
  return Je(s, t ? oe : Mt);
};
N.getScrollFunc = function(s, t) {
  return Rr(le(s), t ? oe : Mt);
};
N.getById = function(s) {
  return Fs[s];
};
N.getAll = function() {
  return X.filter(function(s) {
    return s.vars.id !== "ScrollSmoother";
  });
};
N.isScrolling = function() {
  return !!Fe;
};
N.snapDirectional = ho;
N.addEventListener = function(s, t) {
  var e = ti[s] || (ti[s] = []);
  ~e.indexOf(t) || e.push(t);
};
N.removeEventListener = function(s, t) {
  var e = ti[s], r = e && e.indexOf(t);
  r >= 0 && e.splice(r, 1);
};
N.batch = function(s, t) {
  var e = [], r = {}, i = t.interval || 0.016, n = t.batchMax || 1e9, o = function(u, c) {
    var d = [], h = [], f = D.delayedCall(i, function() {
      c(d, h), d = [], h = [];
    }).pause();
    return function(_) {
      d.length || f.restart(!0), d.push(_.trigger), h.push(_), n <= d.length && f.progress(1);
    };
  }, a;
  for (a in t)
    r[a] = a.substr(0, 2) === "on" && Kt(t[a]) && a !== "onRefreshInit" ? o(a, t[a]) : t[a];
  return Kt(n) && (n = n(), At(N, "refresh", function() {
    return n = t.batchMax();
  })), hn(s).forEach(function(l) {
    var u = {};
    for (a in r)
      u[a] = r[a];
    u.trigger = l, e.push(N.create(u));
  }), e;
};
var Qo = function(t, e, r, i) {
  return e > i ? t(i) : e < 0 && t(0), r > i ? (i - e) / (r - e) : r < 0 ? e / (e - r) : 1;
}, _s = function s(t, e) {
  e === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = e === !0 ? "auto" : e ? "pan-" + e + (bt.isTouch ? " pinch-zoom" : "") : "none", t === be && s(tt, e);
}, On = {
  auto: 1,
  scroll: 1
}, yc = function(t) {
  var e = t.event, r = t.target, i = t.axis, n = (e.changedTouches ? e.changedTouches[0] : e).target, o = n._gsap || D.core.getCache(n), a = qt(), l;
  if (!o._isScrollT || a - o._isScrollT > 2e3) {
    for (; n && n !== tt && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(On[(l = Le(n)).overflowY] || On[l.overflowX])); )
      n = n.parentNode;
    o._isScroll = n && n !== r && !jr(n) && (On[(l = Le(n)).overflowY] || On[l.overflowX]), o._isScrollT = a;
  }
  (o._isScroll || i === "x") && (e.stopPropagation(), e._gsapAllow = !0);
}, Ml = function(t, e, r, i) {
  return bt.create({
    target: t,
    capture: !0,
    debounce: !1,
    lockAxis: !0,
    type: e,
    onWheel: i = i && yc,
    onPress: i,
    onDrag: i,
    onScroll: i,
    onEnable: function() {
      return r && At(et, bt.eventTypes[0], Jo, !1, !0);
    },
    onDisable: function() {
      return Rt(et, bt.eventTypes[0], Jo, !0);
    }
  });
}, wc = /(input|label|select|textarea)/i, Zo, Jo = function(t) {
  var e = wc.test(t.target.tagName);
  (e || Zo) && (t._gsapAllow = !0, Zo = e);
}, xc = function(t) {
  Hr(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
  var e = t, r = e.normalizeScrollX, i = e.momentum, n = e.allowNestedScroll, o = e.onRelease, a, l, u = le(t.target) || be, c = D.core.globals().ScrollSmoother, d = c && c.get(), h = wr && (t.content && le(t.content) || d && t.content !== !1 && !d.smooth() && d.content()), f = Rr(u, Mt), _ = Rr(u, oe), p = 1, m = (bt.isTouch && H.visualViewport ? H.visualViewport.scale * H.visualViewport.width : H.outerWidth) / H.innerWidth, b = 0, w = Kt(i) ? function() {
    return i(a);
  } : function() {
    return i || 2.8;
  }, S, v, T = Ml(u, t.type, !0, n), k = function() {
    return v = !1;
  }, x = Ke, P = Ke, C = function() {
    l = Je(u, Mt), P = Qi(wr ? 1 : 0, l), r && (x = Qi(0, Je(u, oe))), S = Jr;
  }, E = function() {
    h._gsap.y = Xi(parseFloat(h._gsap.y) + f.offset) + "px", h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0;
  }, W = function() {
    if (v) {
      requestAnimationFrame(k);
      var Z = Xi(a.deltaY / 2), rt = P(f.v - Z);
      if (h && rt !== f.v + f.offset) {
        f.offset = rt - f.v;
        var g = Xi((parseFloat(h && h._gsap.y) || 0) - f.offset);
        h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + g + ", 0, 1)", h._gsap.y = g + "px", f.cacheID = U.cache, cr();
      }
      return !0;
    }
    f.offset && E(), v = !0;
  }, O, K, Y, Q, $ = function() {
    C(), O.isActive() && O.vars.scrollY > l && (f() > l ? O.progress(1) && f(l) : O.resetTo("scrollY", l));
  };
  return h && D.set(h, {
    y: "+=0"
  }), t.ignoreCheck = function(L) {
    return wr && L.type === "touchmove" && W() || p > 1.05 && L.type !== "touchstart" || a.isGesturing || L.touches && L.touches.length > 1;
  }, t.onPress = function() {
    v = !1;
    var L = p;
    p = Xi((H.visualViewport && H.visualViewport.scale || 1) / m), O.pause(), L !== p && _s(u, p > 1.01 ? !0 : r ? !1 : "x"), K = _(), Y = f(), C(), S = Jr;
  }, t.onRelease = t.onGestureStart = function(L, Z) {
    if (f.offset && E(), !Z)
      Q.restart(!0);
    else {
      U.cache++;
      var rt = w(), g, ot;
      r && (g = _(), ot = g + rt * 0.05 * -L.velocityX / 0.227, rt *= Qo(_, g, ot, Je(u, oe)), O.vars.scrollX = x(ot)), g = f(), ot = g + rt * 0.05 * -L.velocityY / 0.227, rt *= Qo(f, g, ot, Je(u, Mt)), O.vars.scrollY = P(ot), O.invalidate().duration(rt).play(0.01), (wr && O.vars.scrollY >= l || g >= l - 1) && D.to({}, {
        onUpdate: $,
        duration: rt
      });
    }
    o && o(L);
  }, t.onWheel = function() {
    O._ts && O.pause(), qt() - b > 1e3 && (S = 0, b = qt());
  }, t.onChange = function(L, Z, rt, g, ot) {
    if (Jr !== S && C(), Z && r && _(x(g[2] === Z ? K + (L.startX - L.x) : _() + Z - g[1])), rt) {
      f.offset && E();
      var Zt = ot[2] === rt, Ie = Zt ? Y + L.startY - L.y : f() + rt - ot[1], dt = P(Ie);
      Zt && Ie !== dt && (Y += dt - Ie), f(dt);
    }
    (rt || Z) && cr();
  }, t.onEnable = function() {
    _s(u, r ? !1 : "x"), N.addEventListener("refresh", $), At(H, "resize", $), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = _.smooth = !1), T.enable();
  }, t.onDisable = function() {
    _s(u, !0), Rt(H, "resize", $), N.removeEventListener("refresh", $), T.kill();
  }, t.lockAxis = t.lockAxis !== !1, a = new bt(t), a.iOS = wr, wr && !f() && f(1), wr && D.ticker.add(Ke), Q = a._dc, O = D.to(a, {
    ease: "power4",
    paused: !0,
    inherit: !1,
    scrollX: r ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: Pl(f, f(), function() {
        return O.pause();
      })
    },
    onUpdate: cr,
    onComplete: Q.vars.onComplete
  }), a;
};
N.sort = function(s) {
  if (Kt(s))
    return X.sort(s);
  var t = H.pageYOffset || 0;
  return N.getAll().forEach(function(e) {
    return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + H.innerHeight;
  }), X.sort(s || function(e, r) {
    return (e.vars.refreshPriority || 0) * -1e6 + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((r.vars.containerAnimation ? 1e6 : r._sortY) + (r.vars.refreshPriority || 0) * -1e6);
  });
};
N.observe = function(s) {
  return new bt(s);
};
N.normalizeScroll = function(s) {
  if (typeof s > "u")
    return ie;
  if (s === !0 && ie)
    return ie.enable();
  if (s === !1) {
    ie && ie.kill(), ie = s;
    return;
  }
  var t = s instanceof bt ? s : xc(s);
  return ie && ie.target === t.target && ie.kill(), jr(t.target) && (ie = t), t;
};
N.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: Rs,
  _inputObserver: Ml,
  _scrollers: U,
  _proxies: je,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function() {
      Fe || ei("scrollStart"), Fe = qt();
    },
    // a way to get the _refreshing value in Observer
    ref: function() {
      return $t;
    }
  }
};
ml() && D.registerPlugin(N);
var jo = "1.3.26";
function Ol(s, t, e) {
  return Math.max(s, Math.min(t, e));
}
function bc(s, t, e) {
  return (1 - e) * s + e * t;
}
function Tc(s, t, e, r) {
  return bc(s, t, 1 - Math.exp(-e * r));
}
function Sc(s, t) {
  return (s % t + t) % t;
}
var Ec = class {
  constructor() {
    R(this, "isRunning", !1);
    R(this, "value", 0);
    R(this, "from", 0);
    R(this, "to", 0);
    R(this, "currentTime", 0);
    R(this, "lerp");
    R(this, "duration");
    R(this, "easing");
    R(this, "onUpdate");
  }
  /**
  * Advance the animation by the given delta time
  *
  * @param deltaTime - The time in seconds to advance the animation
  */
  advance(s) {
    if (!this.isRunning) return;
    let t = !1;
    if (this.duration && this.easing) {
      this.currentTime += s;
      const e = Ol(0, this.currentTime / this.duration, 1);
      t = e >= 1;
      const r = t ? 1 : this.easing(e);
      this.value = this.from + (this.to - this.from) * r;
    } else this.lerp ? (this.value = Tc(this.value, this.to, this.lerp * 60, s), Math.round(this.value) === Math.round(this.to) && (this.value = this.to, t = !0)) : (this.value = this.to, t = !0);
    t && this.stop(), this.onUpdate?.(this.value, t);
  }
  /** Stop the animation */
  stop() {
    this.isRunning = !1;
  }
  /**
  * Set up the animation from a starting value to an ending value
  * with optional parameters for lerping, duration, easing, and onUpdate callback
  *
  * @param from - The starting value
  * @param to - The ending value
  * @param options - Options for the animation
  */
  fromTo(s, t, { lerp: e, duration: r, easing: i, onStart: n, onUpdate: o }) {
    this.from = this.value = s, this.to = t, this.lerp = e, this.duration = r, this.easing = i, this.currentTime = 0, this.isRunning = !0, n?.(), this.onUpdate = o;
  }
};
function Cc(s, t) {
  let e;
  return function(...r) {
    clearTimeout(e), e = setTimeout(() => {
      e = void 0, s.apply(this, r);
    }, t);
  };
}
var kc = class {
  constructor(s, t, { autoResize: e = !0, debounce: r = 250 } = {}) {
    R(this, "width", 0);
    R(this, "height", 0);
    R(this, "scrollHeight", 0);
    R(this, "scrollWidth", 0);
    R(this, "debouncedResize");
    R(this, "wrapperResizeObserver");
    R(this, "contentResizeObserver");
    R(this, "resize", () => {
      this.onWrapperResize(), this.onContentResize();
    });
    R(this, "onWrapperResize", () => {
      this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
    });
    R(this, "onContentResize", () => {
      this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth);
    });
    this.wrapper = s, this.content = t, e && (this.debouncedResize = Cc(this.resize, r), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
  }
  destroy() {
    this.wrapperResizeObserver?.disconnect(), this.contentResizeObserver?.disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize);
  }
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height
    };
  }
}, Dl = class {
  constructor() {
    R(this, "events", {});
  }
  /**
  * Emit an event with the given data
  * @param event Event name
  * @param args Data to pass to the event handlers
  */
  emit(s, ...t) {
    const e = this.events[s] || [];
    for (let r = 0, i = e.length; r < i; r++) e[r]?.(...t);
  }
  /**
  * Add a callback to the event
  * @param event Event name
  * @param cb Callback function
  * @returns Unsubscribe function
  */
  on(s, t) {
    return this.events[s] ? this.events[s].push(t) : this.events[s] = [t], () => {
      this.events[s] = this.events[s]?.filter((e) => t !== e);
    };
  }
  /**
  * Remove a callback from the event
  * @param event Event name
  * @param callback Callback function
  */
  off(s, t) {
    this.events[s] = this.events[s]?.filter((e) => t !== e);
  }
  /**
  * Remove all event listeners and clean up
  */
  destroy() {
    this.events = {};
  }
};
const Pc = 100 / 6, yr = { passive: !1 };
function ta(s, t) {
  return s === 1 ? Pc : s === 2 ? t : 1;
}
var Mc = class {
  constructor(s, t = {
    wheelMultiplier: 1,
    touchMultiplier: 1
  }) {
    R(this, "touchStart", {
      x: 0,
      y: 0
    });
    R(this, "lastDelta", {
      x: 0,
      y: 0
    });
    R(this, "window", {
      width: 0,
      height: 0
    });
    R(this, "emitter", new Dl());
    /**
    * Event handler for 'touchstart' event
    *
    * @param event Touch event
    */
    R(this, "onTouchStart", (s) => {
      const { clientX: t, clientY: e } = s.targetTouches ? s.targetTouches[0] : s;
      this.touchStart.x = t, this.touchStart.y = e, this.lastDelta = {
        x: 0,
        y: 0
      }, this.emitter.emit("scroll", {
        deltaX: 0,
        deltaY: 0,
        event: s
      });
    });
    /** Event handler for 'touchmove' event */
    R(this, "onTouchMove", (s) => {
      const { clientX: t, clientY: e } = s.targetTouches ? s.targetTouches[0] : s, r = -(t - this.touchStart.x) * this.options.touchMultiplier, i = -(e - this.touchStart.y) * this.options.touchMultiplier;
      this.touchStart.x = t, this.touchStart.y = e, this.lastDelta = {
        x: r,
        y: i
      }, this.emitter.emit("scroll", {
        deltaX: r,
        deltaY: i,
        event: s
      });
    });
    R(this, "onTouchEnd", (s) => {
      this.emitter.emit("scroll", {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event: s
      });
    });
    /** Event handler for 'wheel' event */
    R(this, "onWheel", (s) => {
      let { deltaX: t, deltaY: e, deltaMode: r } = s;
      const i = ta(r, this.window.width), n = ta(r, this.window.height);
      t *= i, e *= n, t *= this.options.wheelMultiplier, e *= this.options.wheelMultiplier, this.emitter.emit("scroll", {
        deltaX: t,
        deltaY: e,
        event: s
      });
    });
    R(this, "onWindowResize", () => {
      this.window = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    });
    this.element = s, this.options = t, window.addEventListener("resize", this.onWindowResize), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, yr), this.element.addEventListener("touchstart", this.onTouchStart, yr), this.element.addEventListener("touchmove", this.onTouchMove, yr), this.element.addEventListener("touchend", this.onTouchEnd, yr);
  }
  /**
  * Add an event listener for the given event and callback
  *
  * @param event Event name
  * @param callback Callback function
  */
  on(s, t) {
    return this.emitter.on(s, t);
  }
  /** Remove all event listeners and clean up */
  destroy() {
    this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize), this.element.removeEventListener("wheel", this.onWheel, yr), this.element.removeEventListener("touchstart", this.onTouchStart, yr), this.element.removeEventListener("touchmove", this.onTouchMove, yr), this.element.removeEventListener("touchend", this.onTouchEnd, yr);
  }
};
const ea = (s) => Math.min(1, 1.001 - 2 ** (-10 * s));
var Oc = class {
  constructor({ wrapper: s = window, content: t = document.documentElement, eventsTarget: e = s, smoothWheel: r = !0, syncTouch: i = !1, syncTouchLerp: n = 0.075, touchInertiaExponent: o = 1.7, duration: a, easing: l, lerp: u = 0.1, infinite: c = !1, orientation: d = "vertical", gestureOrientation: h = d === "horizontal" ? "both" : "vertical", touchMultiplier: f = 1, wheelMultiplier: _ = 1, autoResize: p = !0, prevent: m, virtualScroll: b, overscroll: w = !0, autoRaf: S = !1, anchors: v = !1, autoToggle: T = !1, allowNestedScroll: k = !1, __experimental__naiveDimensions: x = !1, naiveDimensions: P = x, stopInertiaOnNavigate: C = !1, respectReducedMotion: E = !0 } = {}) {
    R(this, "_isScrolling", !1);
    R(this, "_isStopped", !1);
    R(this, "_isLocked", !1);
    R(this, "_preventNextNativeScrollEvent", !1);
    R(this, "_resetVelocityTimeout", null);
    R(this, "_rafId", null);
    R(this, "_isDraggingSelection", !1);
    R(this, "reducedMotionMediaQuery", window.matchMedia("(prefers-reduced-motion: reduce)"));
    /**
    * Whether or not the user is touching the screen
    */
    R(this, "isTouching");
    /**
    * Whether or not the device is running iOS
    */
    R(this, "isIos");
    /**
    * The time in ms since the lenis instance was created
    */
    R(this, "time", 0);
    /**
    * User data that will be forwarded through the scroll event
    *
    * @example
    * lenis.scrollTo(100, {
    *   userData: {
    *     foo: 'bar'
    *   }
    * })
    */
    R(this, "userData", {});
    /**
    * The last velocity of the scroll
    */
    R(this, "lastVelocity", 0);
    /**
    * The current velocity of the scroll
    */
    R(this, "velocity", 0);
    /**
    * The direction of the scroll
    */
    R(this, "direction", 0);
    /**
    * The options passed to the lenis instance
    */
    R(this, "options");
    /**
    * The target scroll value
    */
    R(this, "targetScroll");
    /**
    * The animated scroll value
    */
    R(this, "animatedScroll");
    R(this, "animate", new Ec());
    R(this, "emitter", new Dl());
    R(this, "dimensions");
    R(this, "virtualScroll");
    R(this, "onScrollEnd", (s) => {
      s instanceof CustomEvent || (this.isScrolling === "smooth" || this.isScrolling === !1) && s.stopPropagation();
    });
    R(this, "dispatchScrollendEvent", () => {
      this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
        bubbles: this.options.wrapper === window,
        detail: { lenisScrollEnd: !0 }
      }));
    });
    R(this, "onTransitionEnd", (s) => {
      s.propertyName?.includes("overflow") && s.target === this.rootElement && this.checkOverflow();
    });
    R(this, "onClick", (s) => {
      const t = s.composedPath().filter((r) => r instanceof HTMLAnchorElement && r.href).map((r) => new URL(r.href)), e = new URL(window.location.href);
      if (this.options.anchors) {
        const r = t.find((i) => e.host === i.host && e.pathname === i.pathname && i.hash);
        if (r) {
          const i = typeof this.options.anchors == "object" && this.options.anchors ? this.options.anchors : void 0, n = decodeURIComponent(r.hash);
          this.scrollTo(n, i);
          return;
        }
      }
      if (this.options.stopInertiaOnNavigate && t.some((r) => e.host === r.host && e.pathname !== r.pathname)) {
        this.reset();
        return;
      }
    });
    R(this, "onPointerDown", (s) => {
      s.button === 1 && this.reset();
    });
    R(this, "onVirtualScroll", (s) => {
      if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(s) === !1) return;
      const { deltaX: t, deltaY: e, event: r } = s;
      if (this.emitter.emit("virtual-scroll", {
        deltaX: t,
        deltaY: e,
        event: r
      }), r.ctrlKey || r.lenisStopPropagation) return;
      const i = r.type.includes("touch"), n = r.type.includes("wheel");
      if (i && this.isIos && (r.type === "touchstart" && (this._isDraggingSelection = this.isTouchOnSelectionHandle(r)), this._isDraggingSelection)) {
        r.type === "touchend" && (this._isDraggingSelection = !1);
        return;
      }
      this.isTouching = r.type === "touchstart" || r.type === "touchmove";
      const o = t === 0 && e === 0;
      if (this.options.syncTouch && i && r.type === "touchstart" && o && !this.isStopped && !this.isLocked) {
        this.reset();
        return;
      }
      const a = this.options.gestureOrientation === "vertical" && e === 0 || this.options.gestureOrientation === "horizontal" && t === 0;
      if (o || a) return;
      let l = r.composedPath();
      l = l.slice(0, l.indexOf(this.rootElement));
      const u = this.options.prevent, c = Math.abs(t) >= Math.abs(e) ? "horizontal" : "vertical";
      if (l.find((_) => _ instanceof HTMLElement && (typeof u == "function" && u?.(_) || _.hasAttribute?.("data-lenis-prevent") || c === "vertical" && _.hasAttribute?.("data-lenis-prevent-vertical") || c === "horizontal" && _.hasAttribute?.("data-lenis-prevent-horizontal") || i && _.hasAttribute?.("data-lenis-prevent-touch") || n && _.hasAttribute?.("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.hasNestedScroll(_, {
        deltaX: t,
        deltaY: e
      })))) return;
      if (this.isStopped || this.isLocked) {
        r.cancelable && r.preventDefault();
        return;
      }
      if (!(this.options.syncTouch && i || this.options.smoothWheel && n)) {
        this.isScrolling = "native", this.animate.stop(), r.lenisStopPropagation = !0;
        return;
      }
      let d = e;
      this.options.gestureOrientation === "both" ? d = Math.abs(e) > Math.abs(t) ? e : t : this.options.gestureOrientation === "horizontal" && (d = t), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && e > 0 || this.animatedScroll === this.limit && e < 0)) && (r.lenisStopPropagation = !0), r.cancelable && r.preventDefault();
      const h = i && this.options.syncTouch, f = i && r.type === "touchend";
      f && (d = Math.sign(d) * Math.abs(this.velocity) ** this.options.touchInertiaExponent), this.scrollTo(this.targetScroll + d, {
        programmatic: !1,
        ...h ? { lerp: f ? this.options.syncTouchLerp : 1 } : {
          lerp: this.options.lerp,
          duration: this.options.duration,
          easing: this.options.easing
        }
      });
    });
    R(this, "onNativeScroll", () => {
      if (this._resetVelocityTimeout !== null && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) {
        this._preventNextNativeScrollEvent = !1;
        return;
      }
      if (this.isScrolling === !1 || this.isScrolling === "native") {
        const s = this.animatedScroll;
        this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - s, this.direction = Math.sign(this.animatedScroll - s), this.isStopped || (this.isScrolling = "native"), this.emit(), this.velocity !== 0 && (this._resetVelocityTimeout = setTimeout(() => {
          this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit();
        }, 400));
      }
    });
    /**
    * RequestAnimationFrame for lenis
    *
    * @param time The time in ms from an external clock like `requestAnimationFrame` or Tempus
    */
    R(this, "raf", (s) => {
      const t = s - (this.time || s);
      this.time = s, this.animate.advance(t * 1e-3), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf));
    });
    window.lenisVersion = jo, window.lenis || (window.lenis = {}), window.lenis.version = jo, d === "horizontal" && (window.lenis.horizontal = !0), i === !0 && (window.lenis.touch = !0), this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent), (!s || s === document.documentElement) && (s = window), typeof a == "number" && typeof l != "function" ? l = ea : typeof l == "function" && typeof a != "number" && (a = 1), this.options = {
      wrapper: s,
      content: t,
      eventsTarget: e,
      smoothWheel: r,
      syncTouch: i,
      syncTouchLerp: n,
      touchInertiaExponent: o,
      duration: a,
      easing: l,
      lerp: u,
      infinite: c,
      gestureOrientation: h,
      orientation: d,
      touchMultiplier: f,
      wheelMultiplier: _,
      autoResize: p,
      prevent: m,
      virtualScroll: b,
      overscroll: w,
      autoRaf: S,
      anchors: v,
      autoToggle: T,
      allowNestedScroll: k,
      naiveDimensions: P,
      stopInertiaOnNavigate: C,
      respectReducedMotion: E
    }, this.dimensions = new kc(s, t, { autoResize: p }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, { capture: !0 }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener("click", this.onClick), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown), this.virtualScroll = new Mc(e, {
      touchMultiplier: f,
      wheelMultiplier: _
    }), this.virtualScroll.on("scroll", this.onVirtualScroll), this.options.autoToggle && (this.checkOverflow(), this.rootElement.addEventListener("transitionend", this.onTransitionEnd)), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf));
  }
  /**
  * Destroy the lenis instance, remove all event listeners and clean up the class name
  */
  destroy() {
    this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll), this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, { capture: !0 }), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.removeEventListener("click", this.onClick), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName(), this._rafId && cancelAnimationFrame(this._rafId);
  }
  on(s, t) {
    return this.emitter.on(s, t);
  }
  off(s, t) {
    return this.emitter.off(s, t);
  }
  get overflow() {
    const s = this.isHorizontal ? "overflow-x" : "overflow-y";
    return getComputedStyle(this.rootElement)[s];
  }
  checkOverflow() {
    ["hidden", "clip"].includes(this.overflow) ? this.internalStop() : this.internalStart();
  }
  setScroll(s) {
    this.isHorizontal ? this.options.wrapper.scrollTo({
      left: s,
      behavior: "instant"
    }) : this.options.wrapper.scrollTo({
      top: s,
      behavior: "instant"
    });
  }
  isTouchOnSelectionHandle(s) {
    const t = window.getSelection();
    if (!t || t.isCollapsed || t.rangeCount === 0) return !1;
    const e = s.targetTouches[0] ?? s.changedTouches[0];
    if (!e) return !1;
    const r = t.getRangeAt(0).getClientRects();
    if (r.length === 0) return !1;
    const i = r[0], n = r[r.length - 1], o = 40, a = Math.hypot(e.clientX - i.left, e.clientY - i.top) <= o, l = Math.hypot(e.clientX - n.right, e.clientY - n.bottom) <= o;
    return a || l;
  }
  /**
  * Force lenis to recalculate the dimensions
  */
  resize() {
    this.dimensions.resize(), this.animatedScroll = this.targetScroll = this.actualScroll, this.emit();
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  reset() {
    this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop();
  }
  /**
  * Start lenis scroll after it has been stopped
  */
  start() {
    if (this.isStopped) {
      if (this.options.autoToggle) {
        this.rootElement.style.removeProperty("overflow");
        return;
      }
      this.internalStart();
    }
  }
  internalStart() {
    this.isStopped && (this.reset(), this.isStopped = !1, this.emit());
  }
  /**
  * Stop lenis scroll
  */
  stop() {
    if (!this.isStopped) {
      if (this.options.autoToggle) {
        this.rootElement.style.setProperty("overflow", "clip");
        return;
      }
      this.internalStop();
    }
  }
  internalStop() {
    this.isStopped || (this.reset(), this.isStopped = !0, this.emit());
  }
  /**
  * Scroll to a target value
  *
  * @param target The target value to scroll to
  * @param options The options for the scroll
  *
  * @example
  * lenis.scrollTo(100, {
  *   offset: 100,
  *   duration: 1,
  *   easing: (t) => 1 - Math.cos((t * Math.PI) / 2),
  *   lerp: 0.1,
  *   onStart: () => {
  *     console.log('onStart')
  *   },
  *   onComplete: () => {
  *     console.log('onComplete')
  *   },
  * })
  */
  scrollTo(s, { offset: t = 0, immediate: e = !1, lock: r = !1, programmatic: i = !0, lerp: n = i ? this.options.lerp : void 0, duration: o = i ? this.options.duration : void 0, easing: a = i ? this.options.easing : void 0, onStart: l, onComplete: u, force: c = !1, userData: d } = {}) {
    if (this.prefersReducedMotion && (i ? e = !0 : (n = 1, o = void 0, a = void 0)), (this.isStopped || this.isLocked) && !c) return;
    let h = s, f = t;
    if (typeof h == "string" && [
      "top",
      "left",
      "start",
      "#"
    ].includes(h)) h = 0;
    else if (typeof h == "string" && [
      "bottom",
      "right",
      "end"
    ].includes(h)) h = this.limit;
    else {
      let _ = null;
      if (typeof h == "string" ? (_ = h.startsWith("#") ? document.getElementById(h.slice(1)) : document.querySelector(h), _ || (h === "#top" ? h = 0 : console.warn("Lenis: Target not found", h))) : h instanceof HTMLElement && h?.nodeType && (_ = h), _) {
        if (this.options.wrapper !== window) {
          const v = this.rootElement.getBoundingClientRect();
          f -= this.isHorizontal ? v.left : v.top;
        }
        const p = _.getBoundingClientRect(), m = getComputedStyle(_), b = this.isHorizontal ? Number.parseFloat(m.scrollMarginLeft) : Number.parseFloat(m.scrollMarginTop), w = getComputedStyle(this.rootElement), S = this.isHorizontal ? Number.parseFloat(w.scrollPaddingLeft) : Number.parseFloat(w.scrollPaddingTop);
        h = (this.isHorizontal ? p.left : p.top) + this.animatedScroll - (Number.isNaN(b) ? 0 : b) - (Number.isNaN(S) ? 0 : S);
      }
    }
    if (typeof h == "number") {
      if (h += f, this.options.infinite) {
        if (i) {
          this.targetScroll = this.animatedScroll = this.scroll;
          const _ = h - this.animatedScroll;
          _ > this.limit / 2 ? h -= this.limit : _ < -this.limit / 2 && (h += this.limit);
        }
      } else h = Ol(0, h, this.limit);
      if (h === this.targetScroll) {
        l?.(this), u?.(this);
        return;
      }
      if (this.userData = d ?? {}, e) {
        this.animatedScroll = this.targetScroll = h, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), u?.(this), this.userData = {}, requestAnimationFrame(() => {
          this.dispatchScrollendEvent();
        });
        return;
      }
      i || (this.targetScroll = h), typeof o == "number" && typeof a != "function" ? a = ea : typeof a == "function" && typeof o != "number" && (o = 1), this.animate.fromTo(this.animatedScroll, h, {
        duration: o,
        easing: a,
        lerp: n,
        onStart: () => {
          r && (this.isLocked = !0), this.isScrolling = "smooth", l?.(this);
        },
        onUpdate: (_, p) => {
          this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = _ - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = _, this.setScroll(this.scroll), i && (this.targetScroll = _), p || this.emit(), p && (this.reset(), this.emit(), u?.(this), this.userData = {}, requestAnimationFrame(() => {
            this.dispatchScrollendEvent();
          }), this.preventNextNativeScrollEvent());
        }
      });
    }
  }
  preventNextNativeScrollEvent() {
    this._preventNextNativeScrollEvent = !0, requestAnimationFrame(() => {
      this._preventNextNativeScrollEvent = !1;
    });
  }
  hasNestedScroll(s, { deltaX: t, deltaY: e }) {
    const r = Date.now();
    s._lenis || (s._lenis = {});
    const i = s._lenis;
    let n, o, a, l, u, c, d, h, f, _;
    if (r - (i.time ?? 0) > 2e3) {
      i.time = Date.now();
      const k = window.getComputedStyle(s);
      if (i.computedStyle = k, n = [
        "auto",
        "overlay",
        "scroll"
      ].includes(k.overflowX), o = [
        "auto",
        "overlay",
        "scroll"
      ].includes(k.overflowY), u = ["auto"].includes(k.overscrollBehaviorX), c = ["auto"].includes(k.overscrollBehaviorY), i.hasOverflowX = n, i.hasOverflowY = o, !(n || o)) return !1;
      d = s.scrollWidth, h = s.scrollHeight, f = s.clientWidth, _ = s.clientHeight, a = d > f, l = h > _, i.isScrollableX = a, i.isScrollableY = l, i.scrollWidth = d, i.scrollHeight = h, i.clientWidth = f, i.clientHeight = _, i.hasOverscrollBehaviorX = u, i.hasOverscrollBehaviorY = c;
    } else
      a = i.isScrollableX, l = i.isScrollableY, n = i.hasOverflowX, o = i.hasOverflowY, d = i.scrollWidth, h = i.scrollHeight, f = i.clientWidth, _ = i.clientHeight, u = i.hasOverscrollBehaviorX, c = i.hasOverscrollBehaviorY;
    if (!(n && a || o && l)) return !1;
    const p = Math.abs(t) >= Math.abs(e) ? "horizontal" : "vertical";
    let m, b, w, S, v, T;
    if (p === "horizontal")
      m = Math.round(s.scrollLeft), b = d - f, w = t, S = n, v = a, T = u;
    else if (p === "vertical")
      m = Math.round(s.scrollTop), b = h - _, w = e, S = o, v = l, T = c;
    else return !1;
    return !T && (m >= b || m <= 0) ? !0 : (w > 0 ? m < b : m > 0) && S && v;
  }
  /**
  * The root element on which lenis is instanced
  */
  get rootElement() {
    return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
  }
  /**
  * The limit which is the maximum scroll value
  */
  get limit() {
    return this.options.naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
  }
  /**
  * Whether or not the scroll is horizontal
  */
  get isHorizontal() {
    return this.options.orientation === "horizontal";
  }
  /**
  * The actual scroll value
  */
  get actualScroll() {
    const s = this.options.wrapper;
    return this.isHorizontal ? s.scrollX ?? s.scrollLeft : s.scrollY ?? s.scrollTop;
  }
  /**
  * The current scroll value
  */
  get scroll() {
    return this.options.infinite ? Sc(this.animatedScroll, this.limit) : this.animatedScroll;
  }
  /**
  * The progress of the scroll relative to the limit
  */
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit;
  }
  /**
  * Current scroll state
  */
  get isScrolling() {
    return this._isScrolling;
  }
  set isScrolling(s) {
    this._isScrolling !== s && (this._isScrolling = s, this.updateClassName());
  }
  /**
  * Check if lenis is stopped
  */
  get isStopped() {
    return this._isStopped;
  }
  set isStopped(s) {
    this._isStopped !== s && (this._isStopped = s, this.updateClassName());
  }
  /**
  * Check if lenis is locked
  */
  get isLocked() {
    return this._isLocked;
  }
  set isLocked(s) {
    this._isLocked !== s && (this._isLocked = s, this.updateClassName());
  }
  /**
  * Check if lenis is smooth scrolling
  */
  get isSmooth() {
    return this.isScrolling === "smooth";
  }
  /**
  * Whether the user prefers reduced motion and lenis is honoring it (see `respectReducedMotion` option)
  */
  get prefersReducedMotion() {
    return this.options.respectReducedMotion && this.reducedMotionMediaQuery.matches;
  }
  /**
  * The class name applied to the wrapper element
  */
  get className() {
    let s = "lenis";
    return this.options.autoToggle && (s += " lenis-autoToggle"), this.isStopped && (s += " lenis-stopped"), this.isLocked && (s += " lenis-locked"), this.isScrolling && (s += " lenis-scrolling"), this.isScrolling === "smooth" && (s += " lenis-smooth"), s;
  }
  updateClassName() {
    this.cleanUpClassName(), this.className.split(" ").forEach((s) => {
      this.rootElement.classList.add(s);
    });
  }
  cleanUpClassName() {
    for (const s of Array.from(this.rootElement.classList)) (s === "lenis" || s.startsWith("lenis-")) && this.rootElement.classList.remove(s);
  }
};
const _o = window.matchMedia("(prefers-reduced-motion: reduce)").matches, pe = (s, t = document) => t.querySelector(s), Lt = (s, t = document) => [...t.querySelectorAll(s)], Dc = '[data-chatty-widget="trigger"], #Avada-FAQ_WidgetTrigger', Rc = ".Avada-Faqs_Button.opened, .Avada-Faqs_Button--opened";
function ra() {
  if (pe(Rc)) return !0;
  const s = pe(Dc);
  return s ? (s.click(), !0) : typeof window.ChattyJS?.openWidget == "function" ? (window.ChattyJS.openWidget(), !0) : typeof window.avadaFaqTrigger == "function" ? (window.avadaFaqTrigger(), !0) : !1;
}
function ia() {
  return typeof window.DropScentsChat == "function" ? (window.DropScentsChat(), !0) : window.$crisp ? (window.$crisp.push(["do", "chat:open"]), !0) : window.Tawk_API?.maximize ? (window.Tawk_API.maximize(), !0) : window.tidioChatApi?.open ? (window.tidioChatApi.open(), !0) : window.Intercom ? (window.Intercom("show"), !0) : window.zE ? (window.zE("messenger", "open"), !0) : window.Shopify?.chat?.open ? (window.Shopify.chat.open(), !0) : !1;
}
function Ac() {
  if (typeof window.DropScentsChat == "function") {
    window.DropScentsChat();
    return;
  }
  if (ra() || ia()) return;
  let s = 0;
  const t = setInterval(() => {
    s += 1, (ra() || ia() || s > 24) && (clearInterval(t), s > 24 && Lc());
  }, 250);
}
let na = 0;
function Lc() {
  const s = window.DropScentsTextos || {};
  let t = pe(".toast");
  if (!t) {
    t = document.createElement("div"), t.className = "toast", t.setAttribute("role", "status");
    const e = document.documentElement.dataset.instagram;
    if (t.textContent = s.chatFallo || "El chat no está respondiendo ahora mismo.", e) {
      const r = document.createElement("a");
      r.href = e, r.target = "_blank", r.rel = "noopener", r.textContent = s.chatInstagram || "Escríbenos por Instagram", t.append(" ", r);
    }
    document.body.appendChild(t);
  }
  requestAnimationFrame(() => t.classList.add("is-on")), clearTimeout(na), na = setTimeout(() => t.classList.remove("is-on"), 6e3);
}
function zc() {
  document.addEventListener("click", (s) => {
    s.target.closest("[data-chat]") && (s.preventDefault(), pe("#menu-lateral:not([hidden]) [data-drawer-cerrar]")?.click(), Ac());
  });
}
function Nc(s = document) {
  Lt("[data-galeria]", s).forEach((t) => {
    const e = Lt(".card__slide", t), r = Lt(".card__punto", t);
    if (e.length < 2) return;
    let i = 0;
    const n = (o) => {
      i = (o + e.length) % e.length, e.forEach((a, l) => a.classList.toggle("is-on", l === i)), r.forEach((a, l) => a.classList.toggle("is-on", l === i));
    };
    Lt("[data-galeria-paso]", t).forEach((o) => {
      o.addEventListener("click", (a) => {
        a.preventDefault(), a.stopPropagation(), n(i + Number(o.dataset.galeriaPaso));
      });
    });
  });
}
function Fc() {
  const s = pe("#menu-lateral");
  if (!s) return;
  const t = pe(".drawer__panel", s), e = pe("[data-drawer-abrir]");
  let r = null;
  const i = () => Lt('a[href], button:not([disabled]), select, input, [tabindex]:not([tabindex="-1"])', t).filter((a) => a.offsetParent !== null);
  function n() {
    r = document.activeElement, s.hidden = !1, requestAnimationFrame(() => s.classList.add("is-on")), e?.setAttribute("aria-expanded", "true"), document.documentElement.style.overflow = "hidden", window.DropScentsLenis?.stop(), i()[0]?.focus();
  }
  function o() {
    s.classList.remove("is-on"), e?.setAttribute("aria-expanded", "false"), document.documentElement.style.overflow = "", window.DropScentsLenis?.start();
    const a = () => {
      s.hidden = !0;
    };
    _o ? a() : setTimeout(a, 420), r?.focus();
  }
  e?.addEventListener("click", n), Lt("[data-drawer-cerrar]", s).forEach((a) => a.addEventListener("click", o)), Lt("a", t).forEach((a) => a.addEventListener("click", o)), document.addEventListener("keydown", (a) => {
    if (s.hidden) return;
    if (a.key === "Escape") {
      o();
      return;
    }
    if (a.key !== "Tab") return;
    const l = i();
    if (!l.length) return;
    const u = l[0], c = l[l.length - 1];
    a.shiftKey && document.activeElement === u ? (a.preventDefault(), c.focus()) : !a.shiftKey && document.activeElement === c && (a.preventDefault(), u.focus());
  });
}
function Ic(s = document) {
  Lt("[data-carrusel]", s).forEach((t) => {
    const e = pe("[data-carrusel-pista]", t);
    if (!e) return;
    const r = Lt("[data-carrusel-paso]", t), i = pe("[data-carrusel-progreso]", t), n = () => {
      const a = e.firstElementChild;
      if (!a) return e.clientWidth;
      const l = parseFloat(getComputedStyle(e).columnGap) || 0;
      return a.getBoundingClientRect().width + l;
    };
    r.forEach((a) => {
      a.addEventListener("click", () => {
        e.scrollBy({
          left: n() * Number(a.dataset.carruselPaso),
          behavior: _o ? "auto" : "smooth"
        });
      });
    });
    function o() {
      const a = e.scrollWidth - e.clientWidth, l = e.scrollLeft;
      if (r.forEach((u) => {
        const c = Number(u.dataset.carruselPaso);
        u.disabled = c < 0 ? l <= 2 : l >= a - 2;
      }), i && a > 0) {
        const u = e.clientWidth / e.scrollWidth;
        i.style.width = `${Math.max(u * 100, 8)}%`, i.style.transform = `translateX(${l / a * (100 / Math.max(u, 0.08) - 100)}%)`;
      }
    }
    e.addEventListener("scroll", o, { passive: !0 }), window.addEventListener("resize", o), o();
  });
}
function Yc(s = document) {
  _o || window.matchMedia("(hover: hover) and (pointer: fine)").matches && Lt("[data-indice]", s).forEach((t) => {
    const e = pe("[data-indice-vista]", t), r = Lt("[data-indice-fila]", t);
    if (!e || !r.length) return;
    const i = Lt(".indice__vista-img", e), n = e.parentElement, o = gt.quickTo(e, "x", { duration: 0.5, ease: "power3.out" }), a = gt.quickTo(e, "y", { duration: 0.5, ease: "power3.out" }), l = (u) => {
      const c = n.getBoundingClientRect(), d = u.clientX - c.left - e.offsetWidth / 2, h = u.clientY - c.top - e.offsetHeight / 2;
      o(Math.min(Math.max(d, 0), c.width - e.offsetWidth)), a(Math.min(Math.max(h, 0), c.height - e.offsetHeight));
    };
    r.forEach((u) => {
      u.addEventListener("pointerenter", (c) => {
        const d = Number(u.dataset.i);
        i.forEach((h, f) => h.classList.toggle("is-on", f === d)), e.classList.add("is-on"), l(c);
      }), u.addEventListener("pointermove", l);
    }), t.addEventListener("pointerleave", () => e.classList.remove("is-on"));
  });
}
function Bc(s = document) {
  const t = pe("[data-pdp]", s);
  if (!t) return;
  const e = Lt(".pdp__img", t), r = Lt("[data-pdp-mini]", t), i = pe("[data-pdp-precio]", t), n = pe("[data-pdp-antes]", t), o = window.DropScentsTextos?.formatoDinero || "";
  function a(l) {
    l < 0 || l >= e.length || (e.forEach((u, c) => u.classList.toggle("is-on", c === l)), r.forEach((u, c) => u.classList.toggle("is-on", c === l)));
  }
  r.forEach((l) => l.addEventListener("click", () => a(Number(l.dataset.pdpMini)))), Lt(".pres input", t).forEach((l) => {
    l.addEventListener("change", () => {
      if (i && l.dataset.precio && (i.textContent = sa(Number(l.dataset.precio), o)), n) {
        const c = Number(l.dataset.antes || 0), d = Number(l.dataset.precio || 0);
        c > d ? (n.textContent = sa(c, o), n.hidden = !1) : n.hidden = !0;
      }
      const u = Number(l.dataset.imagen);
      !Number.isNaN(u) && u >= 0 && a(u);
    });
  });
}
function sa(s, t) {
  const e = Number(s) / 100, r = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), i = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
  return t ? t.replace(/\{\{\s*(\w+)\s*\}\}/g, (n, o) => o.includes("no_decimals") ? i.format(Math.round(e)) : r.format(e)) : `$${r.format(e)}`;
}
function Wc(s = document) {
  Lt(".cantidad", s).forEach((t) => {
    const e = pe(".cantidad__i", t);
    e && Lt("[data-cantidad]", t).forEach((r) => {
      r.addEventListener("click", () => {
        const i = Number(e.min || 0), n = Math.max(i, (Number(e.value) || 0) + Number(r.dataset.cantidad));
        e.value = String(n), e.dispatchEvent(new Event("change", { bubbles: !0 }));
      });
    });
  });
}
function Xc(s = document) {
  Lt("[data-envia-al-cambiar]", s).forEach((t) => {
    t.addEventListener("change", () => t.form?.submit());
  });
}
function Rl(s = document) {
  Nc(s), Ic(s), Yc(s), Bc(s), Wc(s), Xc(s);
}
gt.registerPlugin(N);
const Ti = window.matchMedia("(prefers-reduced-motion: reduce)").matches, Re = (s, t = document) => t.querySelector(s), Oi = (s, t = document) => [...t.querySelectorAll(s)], oa = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }), Hc = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
function aa(s, t) {
  const e = Number(s) / 100;
  return t ? t.replace(/\{\{\s*(\w+)\s*\}\}/g, (r, i) => {
    switch (i) {
      case "amount":
      case "amount_with_comma_separator":
        return Hc.format(e);
      case "amount_no_decimals":
      case "amount_no_decimals_with_comma_separator":
      default:
        return oa.format(Math.round(e));
    }
  }) : `$${oa.format(Math.round(e))}`;
}
function Al() {
  const s = Re(".picker"), t = Re("#compare");
  if (!s || !t) return;
  const e = t.dataset.moneyFormat || "", r = Number(t.dataset.envioAfuera || 0), i = {};
  Oi("[data-f]", t).forEach((u) => {
    i[u.dataset.f] = u;
  });
  function n(u, c, d) {
    if (!u) return;
    const h = Number(u.dataset.centimos ?? c);
    if (u.dataset.centimos = c, !d || Ti || h === c) {
      u.textContent = aa(c, e);
      return;
    }
    const f = { v: h };
    gt.to(f, {
      v: c,
      duration: 0.55,
      ease: "power2.out",
      onUpdate: () => {
        u.textContent = aa(f.v, e);
      }
    });
  }
  function o(u, c = !0) {
    const d = u.dataset, h = Number(d.full || 0), f = Number(d.envio || 0) || r;
    i.name && (i.name.textContent = d.nombre || ""), i.name2 && (i.name2.textContent = d.nombre || ""), n(i.d5, Number(d.d5 || 0), c), n(i.d10, Number(d.d10 || 0), c), n(i.full, h, c), n(i.full2, h, c), n(i.ship, f, c), n(i.totalUs, h, c), n(i.totalThem, h + f, c), i.link && (i.link.href = d.url || "#");
  }
  const a = Oi(".chip", s);
  a.forEach((u) => {
    u.addEventListener("click", () => {
      a.forEach((c) => c.setAttribute("aria-pressed", String(c === u))), o(u);
    });
  });
  const l = a.find((u) => u.getAttribute("aria-pressed") === "true") || a[0];
  l && o(l, !1);
}
function Ll() {
  Oi(".card__slide, .mini__shot img, .pdp__img").forEach((s) => {
    const t = () => {
      if (s.parentElement.querySelector(".card__sinfoto")) return;
      const e = document.createElement("span");
      e.className = "card__sinfoto", e.setAttribute("aria-hidden", "true"), s.parentElement.appendChild(e), s.style.display = "none";
    };
    s.addEventListener("error", t), s.complete && s.naturalWidth === 0 && t();
  });
}
let ci = null;
function Uc() {
  Ti || (ci = new Oc({ lerp: 0.11, wheelMultiplier: 1, touchMultiplier: 1.6 }), ci.on("scroll", N.update), gt.ticker.add((s) => ci.raf(s * 1e3)), gt.ticker.lagSmoothing(0), window.DropScentsLenis = ci), Oi('a[href^="#"]').forEach((s) => {
    s.addEventListener("click", (t) => {
      const e = s.getAttribute("href");
      if (!e || e === "#") return;
      const r = e === "#top" ? 0 : Re(e);
      !r && r !== 0 || (t.preventDefault(), ci ? ci.scrollTo(r, { offset: -72, duration: 1.15 }) : window.scrollTo({ top: r === 0 ? 0 : r.offsetTop - 72 }));
    });
  });
}
function Vc() {
  Ti || (Re("[data-hero-in]") && (gt.set("[data-hero-in]", { opacity: 0, y: 26 }), gt.timeline({ delay: 0.15 }).to("[data-hero-in]", {
    opacity: 1,
    y: 0,
    duration: 1.05,
    ease: "expo.out",
    stagger: 0.055
  })), Re(".step") && gt.matchMedia().add(
    { ancho: "(min-width: 900px)", angosto: "(max-width: 899px)" },
    (s) => {
      const t = s.conditions.ancho ? 50 : 0;
      Oi(".step").forEach((e, r) => {
        gt.from(e, {
          opacity: 0,
          y: 70,
          x: r === 1 ? t : -t,
          rotate: t ? r === 1 ? 1.6 : -1.6 : 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: { trigger: e, start: "top 88%" }
        }), gt.to(e, {
          yPercent: -6 - r * 5,
          ease: "none",
          scrollTrigger: { trigger: ".steps", start: "top bottom", end: "bottom top", scrub: 1 }
        });
      });
    }
  ), Re(".compare") && (gt.from(".compare__col--us", {
    opacity: 0,
    xPercent: 4,
    scale: 0.97,
    duration: 1,
    ease: "expo.out",
    scrollTrigger: { trigger: ".compare", start: "top 82%" }
  }), gt.from(".compare__col--them", {
    opacity: 0,
    xPercent: -4,
    scale: 0.97,
    duration: 1,
    ease: "expo.out",
    delay: 0.08,
    scrollTrigger: { trigger: ".compare", start: "top 82%" }
  }), gt.from(".chip", {
    opacity: 0,
    y: 14,
    duration: 0.6,
    ease: "power3.out",
    stagger: 0.045,
    scrollTrigger: { trigger: ".picker", start: "top 90%" }
  })), Re("[data-reveal-card]") && N.batch("[data-reveal-card]", {
    start: "top 92%",
    onEnter: (s) => gt.from(s, {
      opacity: 0,
      y: 46,
      scale: 0.97,
      duration: 0.85,
      ease: "expo.out",
      stagger: 0.07,
      overwrite: !0
    })
  }), Oi(".qa__item").forEach((s, t) => {
    gt.from(s, {
      opacity: 0,
      x: -24,
      duration: 0.7,
      ease: "power3.out",
      delay: t * 0.03,
      scrollTrigger: { trigger: s, start: "top 92%" }
    });
  }), Re(".bubble") && gt.from(".bubble", {
    opacity: 0,
    y: 26,
    scale: 0.92,
    transformOrigin: "bottom center",
    duration: 0.6,
    ease: "back.out(1.6)",
    stagger: 0.13,
    scrollTrigger: { trigger: ".chat", start: "top 82%" }
  }), Re(".cierre__card") && gt.from(".cierre__card", {
    opacity: 0,
    scale: 0.96,
    y: 40,
    duration: 1.1,
    ease: "expo.out",
    scrollTrigger: { trigger: ".cierre", start: "top 85%" }
  }), Re(".field__blob--lav") && (gt.to(".field__blob--lav", {
    yPercent: -18,
    ease: "none",
    scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 2 }
  }), gt.to(".field__blob--sky", {
    yPercent: -30,
    ease: "none",
    scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 2 }
  })));
}
function $c() {
  const s = Re("#nav");
  s && N.create({
    start: "top -60",
    end: 99999,
    onToggle: (t) => s.classList.toggle("is-stuck", t.isActive)
  });
}
let Bs = null;
async function zl() {
  const s = Re("#scene");
  if (!s || !Bs) return;
  const { createScene: t } = await Bs(), e = t(s, { reducedMotion: Ti });
  return window.addEventListener("resize", () => {
    e.resize(), Ti && e.render();
  }), Ti || gt.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "+=185%",
      pin: !0,
      scrub: 1,
      onUpdate: (i) => e.timeline.progress(i.progress),
      invalidateOnRefresh: !0,
      // se crea después de los demás por el import dinámico, pero está
      // primero en la página: sin esto el pin recalcularía fuera de orden
      refreshPriority: -1
    }
  }).fromTo(
    ".hero__lead",
    { opacity: 1, y: 0, filter: "blur(0px)" },
    { opacity: 0, y: -70, filter: "blur(8px)", duration: 0.22, ease: "power2.in", immediateRender: !1 },
    0.06
  ).fromTo(
    ".hero__scroll",
    { opacity: 1 },
    { opacity: 0, duration: 0.08, immediateRender: !1 },
    0.02
  ).fromTo(
    ".hero__final",
    { opacity: 0, y: 50, filter: "blur(10px)" },
    { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.16, ease: "power2.out" },
    0.74
  ).to({}, { duration: 0.01 }, 0.99), N.refresh(), e;
}
let Ws = null;
function qc(s = {}) {
  Bs = s.cargarEscena || null, "scrollRestoration" in history && (history.scrollRestoration = "manual"), window.scrollTo(0, 0), window.addEventListener("pageshow", () => window.scrollTo(0, 0)), zc(), Fc(), Al(), Ll(), Uc(), Rl(), Vc(), $c(), document.fonts?.ready && document.fonts.ready.then(() => N.refresh()), zl().then((t) => {
    Ws = t;
  });
}
function Gc() {
  window.Shopify?.designMode && (document.addEventListener("shopify:section:load", (s) => {
    s.target.querySelector("#scene") && (Ws?.dispose(), zl().then((t) => {
      Ws = t;
    })), Rl(s.target), Al(), Ll(), N.refresh();
  }), document.addEventListener("shopify:section:unload", () => N.refresh()));
}
const la = window.DropScentsAssets?.scene;
qc({ cargarEscena: la ? () => import(
  /* @vite-ignore */
  la
) : null });
Gc();
