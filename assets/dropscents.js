var Vl = Object.defineProperty;
var Gl = (s, t, e) => t in s ? Vl(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var R = (s, t, e) => Gl(s, typeof t != "symbol" ? t + "" : t, e);
function lr(s) {
  if (s === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function ma(s, t) {
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
var Pe = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, sn = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Vs, Bt, lt, Ne = 1e8, st = 1 / Ne, xs = Math.PI * 2, Kl = xs / 4, Ql = 0, va = Math.sqrt, Zl = Math.cos, jl = Math.sin, Nt = function(t) {
  return typeof t == "string";
}, gt = function(t) {
  return typeof t == "function";
}, dr = function(t) {
  return typeof t == "number";
}, Gs = function(t) {
  return typeof t > "u";
}, rr = function(t) {
  return typeof t == "object";
}, fe = function(t) {
  return t !== !1;
}, Ks = function() {
  return typeof window < "u";
}, yn = function(t) {
  return gt(t) || Nt(t);
}, wa = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Zt = Array.isArray, Jl = /random\([^)]+\)/g, tc = /,\s*/g, So = /(?:-?\.?\d|\.)+/gi, ya = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _i = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ss = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, ba = /[+-]=-?[.\d]+/, ec = /[^,'"\[\]\s]+/gi, rc = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ft, Ke, Ss, Qs, Me = {}, $n = {}, xa, Sa = function(t) {
  return ($n = Ei(t, Me)) && ge;
}, Zs = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, on = function(t, e) {
  return !e && console.warn(t);
}, Ta = function(t, e) {
  return t && (Me[t] = e) && $n && ($n[t] = e) || Me;
}, an = function() {
  return 0;
}, ic = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Ln = {
  suppressEvents: !0,
  kill: !1
}, nc = {
  suppressEvents: !0
}, js = {}, Pr = [], Ts = {}, Ea, xe = {}, os = {}, To = 30, An = [], Js = "", to = function(t) {
  var e = t[0], r, i;
  if (rr(e) || gt(e) || (t = [t]), !(r = (e._gsap || {}).harness)) {
    for (i = An.length; i-- && !An[i].targetTest(e); )
      ;
    r = An[i];
  }
  for (i = t.length; i--; )
    t[i] && (t[i]._gsap || (t[i]._gsap = new Va(t[i], r))) || t.splice(i, 1);
  return t;
}, Gr = function(t) {
  return t._gsap || to(Fe(t))[0]._gsap;
}, Ca = function(t, e, r) {
  return (r = t[e]) && gt(r) ? t[e]() : Gs(r) && t.getAttribute && t.getAttribute(e) || r;
}, he = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, yt = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, ut = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, vi = function(t, e) {
  var r = e.charAt(0), i = parseFloat(e.substr(2));
  return t = parseFloat(t), r === "+" ? t + i : r === "-" ? t - i : r === "*" ? t * i : t / i;
}, sc = function(t, e) {
  for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; )
    ;
  return i < r;
}, Hn = function() {
  var t = Pr.length, e = Pr.slice(0), r, i;
  for (Ts = {}, Pr.length = 0, r = 0; r < t; r++)
    i = e[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, eo = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, ka = function(t, e, r, i) {
  Pr.length && !Bt && Hn(), t.render(e, r, !!(Bt && e < 0 && eo(t))), Pr.length && !Bt && Hn();
}, Pa = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(ec).length < 2 ? e : Nt(t) ? t.trim() : t;
}, Ma = function(t) {
  return t;
}, Oe = function(t, e) {
  for (var r in e)
    r in t || (t[r] = e[r]);
  return t;
}, oc = function(t) {
  return function(e, r) {
    for (var i in r)
      i in e || i === "duration" && t || i === "ease" || (e[i] = r[i]);
  };
}, Ei = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, Eo = function s(t, e) {
  for (var r in e)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = rr(e[r]) ? s(t[r] || (t[r] = {}), e[r]) : e[r]);
  return t;
}, Un = function(t, e) {
  var r = {}, i;
  for (i in t)
    i in e || (r[i] = t[i]);
  return r;
}, qi = function(t) {
  var e = t.parent || ft, r = t.keyframes ? oc(Zt(t.keyframes)) : Oe;
  if (fe(t.inherit))
    for (; e; )
      r(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, ac = function(t, e) {
  for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; )
    ;
  return r < 0;
}, Oa = function(t, e, r, i, n) {
  var o = t[i], a;
  if (n)
    for (a = e[n]; o && o[n] > a; )
      o = o._prev;
  return o ? (e._next = o._next, o._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = o, e.parent = e._dp = t, e;
}, ts = function(t, e, r, i) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var n = e._prev, o = e._next;
  n ? n._next = o : t[r] === e && (t[r] = o), o ? o._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null;
}, Dr = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, Kr = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var r = t; r; )
      r._dirty = 1, r = r.parent;
  return t;
}, lc = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, Es = function(t, e, r, i) {
  return t._startAt && (Bt ? t._startAt.revert(Ln) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i));
}, cc = function s(t) {
  return !t || t._ts && s(t.parent);
}, Co = function(t) {
  return t._repeat ? Ci(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, Ci = function(t, e) {
  var r = Math.floor(t = ut(t / e));
  return t && r === t ? r - 1 : r;
}, qn = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, es = function(t) {
  return t._end = ut(t._start + (t._tDur / Math.abs(t._ts || t._rts || st) || 0));
}, rs = function(t, e) {
  var r = t._dp;
  return r && r.smoothChildTiming && t._ts && (t._start = ut(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), es(t), r._dirty || Kr(r, t)), t;
}, Da = function(t, e) {
  var r;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = qn(t.rawTime(), e), (!e._dur || _n(0, e.totalDuration(), r) - e._tTime > st) && e.render(r, !0)), Kr(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (r = t; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    t._zTime = -st;
  }
}, je = function(t, e, r, i) {
  return e.parent && Dr(e), e._start = ut((dr(r) ? r : r || t !== ft ? Re(t, r, e) : t._time) + e._delay), e._end = ut(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Oa(t, e, "_first", "_last", t._sort ? "_start" : 0), Cs(e) || (t._recent = e), i || Da(t, e), t._ts < 0 && rs(t, t._tTime), t;
}, Ra = function(t, e) {
  return (Me.ScrollTrigger || Zs("scrollTrigger", e)) && Me.ScrollTrigger.create(e, t);
}, La = function(t, e, r, i, n) {
  if (io(t, e, n), !t._initted)
    return 1;
  if (!r && t._pt && !Bt && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Ea !== Te.frame)
    return Pr.push(t), t._lazy = [n, i], 1;
}, uc = function s(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || s(e));
}, Cs = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, fc = function(t, e, r, i) {
  var n = t.ratio, o = e < 0 || !e && (!t._start && uc(t) && !(!t._initted && Cs(t)) || (t._ts < 0 || t._dp._ts < 0) && !Cs(t)) ? 0 : 1, a = t._rDelay, l = 0, c, u, d;
  if (a && t._repeat && (l = _n(0, t._tDur, e), u = Ci(l, a), t._yoyo && u & 1 && (o = 1 - o), u !== Ci(t._tTime, a) && (n = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== n || Bt || i || t._zTime === st || !e && t._zTime) {
    if (!t._initted && La(t, e, i, r, l))
      return;
    for (d = t._zTime, t._zTime = e || (r ? st : 0), r || (r = e && !d), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = l, c = t._pt; c; )
      c.r(o, c.d), c = c._next;
    e < 0 && Es(t, e, r, !0), t._onUpdate && !r && Ce(t, "onUpdate"), l && t._repeat && !r && t.parent && Ce(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && Dr(t, 1), !r && !Bt && (Ce(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = e);
}, hc = function(t, e, r) {
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
}, ki = function(t, e, r, i) {
  var n = t._repeat, o = ut(e) || 0, a = t._tTime / t._tDur;
  return a && !i && (t._time *= o / t._dur), t._dur = o, t._tDur = n ? n < 0 ? 1e10 : ut(o * (n + 1) + t._rDelay * n) : o, a > 0 && !i && rs(t, t._tTime = t._tDur * a), t.parent && es(t), r || Kr(t.parent, t), t;
}, ko = function(t) {
  return t instanceof ue ? Kr(t) : ki(t, t._dur);
}, dc = {
  _start: 0,
  endTime: an,
  totalDuration: an
}, Re = function s(t, e, r) {
  var i = t.labels, n = t._recent || dc, o = t.duration() >= Ne ? n.endTime(!1) : t._dur, a, l, c;
  return Nt(e) && (isNaN(e) || e in i) ? (l = e.charAt(0), c = e.substr(-1) === "%", a = e.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (e = e.replace(/=/, "")), (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (c ? (a < 0 ? n : r).totalDuration() / 100 : 1)) : a < 0 ? (e in i || (i[e] = o), i[e]) : (l = parseFloat(e.charAt(a - 1) + e.substr(a + 1)), c && r && (l = l / 100 * (Zt(r) ? r[0] : r).totalDuration()), a > 1 ? s(t, e.substr(0, a - 1), r) + l : o + l)) : e == null ? o : +e;
}, Vi = function(t, e, r) {
  var i = dr(e[1]), n = (i ? 2 : 1) + (t < 2 ? 0 : 1), o = e[n], a, l;
  if (i && (o.duration = e[1]), o.parent = r, t) {
    for (a = o, l = r; l && !("immediateRender" in a); )
      a = l.vars.defaults || {}, l = fe(l.vars.inherit) && l.parent;
    o.immediateRender = fe(a.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[n - 1];
  }
  return new Ct(e[0], o, e[n + 1]);
}, Nr = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, _n = function(t, e, r) {
  return r < t ? t : r > e ? e : r;
}, Kt = function(t, e) {
  return !Nt(t) || !(e = rc.exec(t)) ? "" : e[1];
}, pc = function(t, e, r) {
  return Nr(r, function(i) {
    return _n(t, e, i);
  });
}, ks = [].slice, Aa = function(t, e) {
  return t && rr(t) && "length" in t && (!e && !t.length || t.length - 1 in t && rr(t[0])) && !t.nodeType && t !== Ke;
}, _c = function(t, e, r) {
  return r === void 0 && (r = []), t.forEach(function(i) {
    var n;
    return Nt(i) && !e || Aa(i, 1) ? (n = r).push.apply(n, Fe(i)) : r.push(i);
  }) || r;
}, Fe = function(t, e, r) {
  return lt && !e && lt.selector ? lt.selector(t) : Nt(t) && !r && (Ss || !Pi()) ? ks.call((e || Qs).querySelectorAll(t), 0) : Zt(t) ? _c(t, r) : Aa(t) ? ks.call(t, 0) : t ? [t] : [];
}, Ps = function(t) {
  return t = Fe(t)[0] || on("Invalid scope") || {}, function(e) {
    var r = t.current || t.nativeElement || t;
    return Fe(e, r.querySelectorAll ? r : r === t ? on("Invalid scope") || Qs.createElement("div") : t);
  };
}, Na = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, Fa = function(t) {
  if (gt(t))
    return t;
  var e = rr(t) ? t : {
    each: t
  }, r = Qr(e.ease), i = e.from || 0, n = parseFloat(e.base) || 0, o = {}, a = i > 0 && i < 1, l = isNaN(i) || a, c = e.axis, u = i, d = i;
  return Nt(i) ? u = d = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !a && l && (u = i[0], d = i[1]), function(h, f, _) {
    var p = (_ || e).length, m = o[p], x, y, T, v, S, k, b, P, C;
    if (!m) {
      if (C = e.grid === "auto" ? 0 : (e.grid || [1, Ne])[1], !C) {
        for (b = -Ne; b < (b = _[C++].getBoundingClientRect().left) && C < p; )
          ;
        C < p && C--;
      }
      for (m = o[p] = [], x = l ? Math.min(C, p) * u - 0.5 : i % C, y = C === Ne ? 0 : l ? p * d / C - 0.5 : i / C | 0, b = 0, P = Ne, k = 0; k < p; k++)
        T = k % C - x, v = y - (k / C | 0), m[k] = S = c ? Math.abs(c === "y" ? v : T) : va(T * T + v * v), S > b && (b = S), S < P && (P = S);
      i === "random" && Na(m), m.max = b - P, m.min = P, m.v = p = (parseFloat(e.amount) || parseFloat(e.each) * (C > p ? p - 1 : c ? c === "y" ? p / C : C : Math.max(C, p / C)) || 0) * (i === "edges" ? -1 : 1), m.b = p < 0 ? n - p : n, m.u = Kt(e.amount || e.each) || 0, r = r && p < 0 ? Pc(r) : r;
    }
    return p = (m[h] - m.min) / m.max || 0, ut(m.b + (r ? r(p) : p) * m.v) + m.u;
  };
}, Ms = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(r) {
    var i = ut(Math.round(parseFloat(r) / t) * t * e);
    return (i - i % 1) / e + (dr(r) ? 0 : Kt(r));
  };
}, za = function(t, e) {
  var r = Zt(t), i, n;
  return !r && rr(t) && (i = r = t.radius || Ne, t.values ? (t = Fe(t.values), (n = !dr(t[0])) && (i *= i)) : t = Ms(t.increment)), Nr(e, r ? gt(t) ? function(o) {
    return n = t(o), Math.abs(n - o) <= i ? n : o;
  } : function(o) {
    for (var a = parseFloat(n ? o.x : o), l = parseFloat(n ? o.y : 0), c = Ne, u = 0, d = t.length, h, f; d--; )
      n ? (h = t[d].x - a, f = t[d].y - l, h = h * h + f * f) : h = Math.abs(t[d] - a), h < c && (c = h, u = d);
    return u = !i || c <= i ? t[u] : o, n || u === o || dr(o) ? u : u + Kt(o);
  } : Ms(t));
}, Ia = function(t, e, r, i) {
  return Nr(Zt(t) ? !e : r === !0 ? !!(r = 0) : !i, function() {
    return Zt(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + r * 0.99)) / r) * r * i) / i;
  });
}, gc = function() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return function(i) {
    return e.reduce(function(n, o) {
      return o(n);
    }, i);
  };
}, mc = function(t, e) {
  return function(r) {
    return t(parseFloat(r)) + (e || Kt(r));
  };
}, vc = function(t, e, r) {
  return Ba(t, e, 0, 1, r);
}, Ya = function(t, e, r) {
  return Nr(r, function(i) {
    return t[~~e(i)];
  });
}, wc = function s(t, e, r) {
  var i = e - t;
  return Zt(t) ? Ya(t, s(0, t.length), e) : Nr(r, function(n) {
    return (i + (n - t) % i) % i + t;
  });
}, yc = function s(t, e, r) {
  var i = e - t, n = i * 2;
  return Zt(t) ? Ya(t, s(0, t.length - 1), e) : Nr(r, function(o) {
    return o = (n + (o - t) % n) % n || 0, t + (o > i ? n - o : o);
  });
}, ln = function(t) {
  return t.replace(Jl, function(e) {
    var r = e.indexOf("[") + 1, i = e.substring(r || 7, r ? e.indexOf("]") : e.length - 1).split(tc);
    return Ia(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5);
  });
}, Ba = function(t, e, r, i, n) {
  var o = e - t, a = i - r;
  return Nr(n, function(l) {
    return r + ((l - t) / o * a || 0);
  });
}, bc = function s(t, e, r, i) {
  var n = isNaN(t + e) ? 0 : function(f) {
    return (1 - f) * t + f * e;
  };
  if (!n) {
    var o = Nt(t), a = {}, l, c, u, d, h;
    if (r === !0 && (i = 1) && (r = null), o)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (Zt(t) && !Zt(e)) {
      for (u = [], d = t.length, h = d - 2, c = 1; c < d; c++)
        u.push(s(t[c - 1], t[c]));
      d--, n = function(_) {
        _ *= d;
        var p = Math.min(h, ~~_);
        return u[p](_ - p);
      }, r = e;
    } else i || (t = Ei(Zt(t) ? [] : {}, t));
    if (!u) {
      for (l in e)
        ro.call(a, t, l, "get", e[l]);
      n = function(_) {
        return oo(_, a) || (o ? t.p : t);
      };
    }
  }
  return Nr(r, n);
}, Po = function(t, e, r) {
  var i = t.labels, n = Ne, o, a, l;
  for (o in i)
    a = i[o] - e, a < 0 == !!r && a && n > (a = Math.abs(a)) && (l = o, n = a);
  return l;
}, Ce = function(t, e, r) {
  var i = t.vars, n = i[e], o = lt, a = t._ctx, l, c, u;
  if (n)
    return l = i[e + "Params"], c = i.callbackScope || t, r && Pr.length && Hn(), a && (lt = a), u = l ? n.apply(c, l) : n.call(c), lt = o, u;
}, Yi = function(t) {
  return Dr(t), t.scrollTrigger && t.scrollTrigger.kill(!!Bt), t.progress() < 1 && Ce(t, "onInterrupt"), t;
}, gi, Wa = [], Xa = function(t) {
  if (t)
    if (t = !t.name && t.default || t, Ks() || t.headless) {
      var e = t.name, r = gt(t), i = e && !r && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: an,
        render: oo,
        add: ro,
        kill: Ic,
        modifier: zc,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: so,
        aliases: {},
        register: 0
      };
      if (Pi(), t !== i) {
        if (xe[e])
          return;
        Oe(i, Oe(Un(t, n), o)), Ei(i.prototype, Ei(n, Un(t, o))), xe[i.prop = e] = i, t.targetTest && (An.push(i), js[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      Ta(e, i), t.register && t.register(ge, i, de);
    } else
      Wa.push(t);
}, nt = 255, Bi = {
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
}, as = function(t, e, r) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : t * 3 < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * nt + 0.5 | 0;
}, $a = function(t, e, r) {
  var i = t ? dr(t) ? [t >> 16, t >> 8 & nt, t & nt] : 0 : Bi.black, n, o, a, l, c, u, d, h, f, _;
  if (!i) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Bi[t])
      i = Bi[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), o = t.charAt(2), a = t.charAt(3), t = "#" + n + n + o + o + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return i = parseInt(t.substr(1, 6), 16), [i >> 16, i >> 8 & nt, i & nt, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & nt, t & nt];
    } else if (t.substr(0, 3) === "hsl") {
      if (i = _ = t.match(So), !e)
        l = +i[0] % 360 / 360, c = +i[1] / 100, u = +i[2] / 100, o = u <= 0.5 ? u * (c + 1) : u + c - u * c, n = u * 2 - o, i.length > 3 && (i[3] *= 1), i[0] = as(l + 1 / 3, n, o), i[1] = as(l, n, o), i[2] = as(l - 1 / 3, n, o);
      else if (~t.indexOf("="))
        return i = t.match(ya), r && i.length < 4 && (i[3] = 1), i;
    } else
      i = t.match(So) || Bi.transparent;
    i = i.map(Number);
  }
  return e && !_ && (n = i[0] / nt, o = i[1] / nt, a = i[2] / nt, d = Math.max(n, o, a), h = Math.min(n, o, a), u = (d + h) / 2, d === h ? l = c = 0 : (f = d - h, c = u > 0.5 ? f / (2 - d - h) : f / (d + h), l = d === n ? (o - a) / f + (o < a ? 6 : 0) : d === o ? (a - n) / f + 2 : (n - o) / f + 4, l *= 60), i[0] = ~~(l + 0.5), i[1] = ~~(c * 100 + 0.5), i[2] = ~~(u * 100 + 0.5)), r && i.length < 4 && (i[3] = 1), i;
}, Ha = function(t) {
  var e = [], r = [], i = -1;
  return t.split(Mr).forEach(function(n) {
    var o = n.match(_i) || [];
    e.push.apply(e, o), r.push(i += o.length + 1);
  }), e.c = r, e;
}, Mo = function(t, e, r) {
  var i = "", n = (t + i).match(Mr), o = e ? "hsla(" : "rgba(", a = 0, l, c, u, d;
  if (!n)
    return t;
  if (n = n.map(function(h) {
    return (h = $a(h, e, 1)) && o + (e ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")";
  }), r && (u = Ha(t), l = r.c, l.join(i) !== u.c.join(i)))
    for (c = t.replace(Mr, "1").split(_i), d = c.length - 1; a < d; a++)
      i += c[a] + (~l.indexOf(a) ? n.shift() || o + "0,0,0,0)" : (u.length ? u : n.length ? n : r).shift());
  if (!c)
    for (c = t.split(Mr), d = c.length - 1; a < d; a++)
      i += c[a] + n[a];
  return i + c[d];
}, Mr = function() {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Bi)
    s += "|" + t + "\\b";
  return new RegExp(s + ")", "gi");
}(), xc = /hsl[a]?\(/, Ua = function(t) {
  var e = t.join(" "), r;
  if (Mr.lastIndex = 0, Mr.test(e))
    return r = xc.test(e), t[1] = Mo(t[1], r), t[0] = Mo(t[0], r, Ha(t[1])), !0;
}, cn, Te = function() {
  var s = Date.now, t = 500, e = 33, r = s(), i = r, n = 1e3 / 240, o = n, a = [], l, c, u, d, h, f, _ = function p(m) {
    var x = s() - i, y = m === !0, T, v, S, k;
    if ((x > t || x < 0) && (r += x - e), i += x, S = i - r, T = S - o, (T > 0 || y) && (k = ++d.frame, h = S - d.time * 1e3, d.time = S = S / 1e3, o += T + (T >= n ? 4 : n - T), v = 1), y || (l = c(p)), v)
      for (f = 0; f < a.length; f++)
        a[f](S, h, k, m);
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
      xa && (!Ss && Ks() && (Ke = Ss = window, Qs = Ke.document || {}, Me.gsap = ge, (Ke.gsapVersions || (Ke.gsapVersions = [])).push(ge.version), Sa($n || Ke.GreenSockGlobals || !Ke.gsap && Ke || {}), Wa.forEach(Xa)), u = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && d.sleep(), c = u || function(m) {
        return setTimeout(m, o - d.time * 1e3 + 1 | 0);
      }, cn = 1, _(2));
    },
    sleep: function() {
      (u ? cancelAnimationFrame : clearTimeout)(l), cn = 0, c = an;
    },
    lagSmoothing: function(m, x) {
      t = m || 1 / 0, e = Math.min(x || 33, t);
    },
    fps: function(m) {
      n = 1e3 / (m || 240), o = d.time * 1e3 + n;
    },
    add: function(m, x, y) {
      var T = x ? function(v, S, k, b) {
        m(v, S, k, b), d.remove(T);
      } : m;
      return d.remove(m), a[y ? "unshift" : "push"](T), Pi(), T;
    },
    remove: function(m, x) {
      ~(x = a.indexOf(m)) && a.splice(x, 1) && f >= x && f--;
    },
    _listeners: a
  }, d;
}(), Pi = function() {
  return !cn && Te.wake();
}, G = {}, Sc = /^[\d.\-M][\d.\-,\s]/, Tc = /["']/g, Ec = function(t) {
  for (var e = {}, r = t.substr(1, t.length - 3).split(":"), i = r[0], n = 1, o = r.length, a, l, c; n < o; n++)
    l = r[n], a = n !== o - 1 ? l.lastIndexOf(",") : l.length, c = l.substr(0, a), e[i] = isNaN(c) ? c.replace(Tc, "").trim() : +c, i = l.substr(a + 1).trim();
  return e;
}, Cc = function(t) {
  var e = t.indexOf("(") + 1, r = t.indexOf(")"), i = t.indexOf("(", e);
  return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
}, kc = function(t) {
  var e = (t + "").split("("), r = G[e[0]];
  return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [Ec(e[1])] : Cc(t).split(",").map(Pa)) : G._CE && Sc.test(t) ? G._CE("", t) : r;
}, Pc = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, Qr = function(t, e) {
  return t && (gt(t) ? t : G[t] || kc(t)) || e;
}, ni = function(t, e, r, i) {
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
  return he(t, function(a) {
    G[a] = Me[a] = n, G[o = a.toLowerCase()] = r;
    for (var l in n)
      G[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = G[a + "." + l] = n[l];
  }), n;
}, qa = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, ls = function s(t, e, r) {
  var i = e >= 1 ? e : 1, n = (r || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), o = n / xs * (Math.asin(1 / i) || 0), a = function(u) {
    return u === 1 ? 1 : i * Math.pow(2, -10 * u) * jl((u - o) * n) + 1;
  }, l = t === "out" ? a : t === "in" ? function(c) {
    return 1 - a(1 - c);
  } : qa(a);
  return n = xs / n, l.config = function(c, u) {
    return s(t, c, u);
  }, l;
}, cs = function s(t, e) {
  e === void 0 && (e = 1.70158);
  var r = function(o) {
    return o ? --o * o * ((e + 1) * o + e) + 1 : 0;
  }, i = t === "out" ? r : t === "in" ? function(n) {
    return 1 - r(1 - n);
  } : qa(r);
  return i.config = function(n) {
    return s(t, n);
  }, i;
};
he("Linear,Quad,Cubic,Quart,Quint,Strong", function(s, t) {
  var e = t < 5 ? t + 1 : t;
  ni(s + ",Power" + (e - 1), t ? function(r) {
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
ni("Elastic", ls("in"), ls("out"), ls());
(function(s, t) {
  var e = 1 / t, r = 2 * e, i = 2.5 * e, n = function(a) {
    return a < e ? s * a * a : a < r ? s * Math.pow(a - 1.5 / t, 2) + 0.75 : a < i ? s * (a -= 2.25 / t) * a + 0.9375 : s * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  ni("Bounce", function(o) {
    return 1 - n(1 - o);
  }, n);
})(7.5625, 2.75);
ni("Expo", function(s) {
  return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
});
ni("Circ", function(s) {
  return -(va(1 - s * s) - 1);
});
ni("Sine", function(s) {
  return s === 1 ? 1 : -Zl(s * Kl) + 1;
});
ni("Back", cs("in"), cs("out"), cs());
G.SteppedEase = G.steps = Me.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var r = 1 / t, i = t + (e ? 0 : 1), n = e ? 1 : 0, o = 1 - st;
    return function(a) {
      return ((i * _n(0, o, a) | 0) + n) * r;
    };
  }
};
sn.ease = G["quad.out"];
he("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(s) {
  return Js += s + "," + s + "Params,";
});
var Va = function(t, e) {
  this.id = Ql++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Ca, this.set = e ? e.getSetter : so;
}, un = /* @__PURE__ */ function() {
  function s(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, ki(this, +e.duration, 1, 1), this.data = e.data, lt && (this._ctx = lt, lt.data.push(this)), cn || Te.wake();
  }
  var t = s.prototype;
  return t.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, t.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, ki(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(r, i) {
    if (Pi(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (rs(this, r), !n._dp || n.parent || Da(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && je(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === st || !this._initted && this._dur && r || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), ka(this, r, i)), this;
  }, t.time = function(r, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + Co(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time;
  }, t.totalProgress = function(r, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(r, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Co(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(r, i) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * n, i) : this._repeat ? Ci(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(r, i) {
    if (!arguments.length)
      return this._rts === -st ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var n = this.parent && this._ts ? qn(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -st ? 0 : this._rts, this.totalTime(_n(-Math.abs(this._delay), this.totalDuration(), n), i !== !1), es(this), lc(this);
  }, t.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Pi(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== st && (this._tTime -= st)))), this) : this._ps;
  }, t.startTime = function(r) {
    if (arguments.length) {
      this._start = ut(r);
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && je(i, this, this._start - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(r) {
    return this._start + (fe(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(r) {
    var i = this.parent || this._dp;
    return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? qn(i.rawTime(r), this) : this._tTime : this._tTime;
  }, t.revert = function(r) {
    r === void 0 && (r = nc);
    var i = Bt;
    return Bt = r, eo(this) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), Bt = i, this;
  }, t.globalTime = function(r) {
    for (var i = this, n = arguments.length ? r : i.rawTime(); i; )
      n = i._start + n / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(r) : n;
  }, t.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, ko(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(r) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = r, ko(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, t.seek = function(r, i) {
    return this.totalTime(Re(this, r), fe(i));
  }, t.restart = function(r, i) {
    return this.play().totalTime(r ? -this._delay : 0, fe(i)), this._dur || (this._zTime = -st), this;
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
      var a = gt(r) ? r : Ma, l = function() {
        var u = i.then;
        i.then = null, n && n(), gt(a) && (a = a(i)) && (a.then || a === i) && (i.then = u), o(a), i.then = u;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? l() : i._prom = l;
    });
  }, t.kill = function() {
    Yi(this);
  }, s;
}();
Oe(un.prototype, {
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
  ma(t, s);
  function t(r, i) {
    var n;
    return r === void 0 && (r = {}), n = s.call(this, r) || this, n.labels = {}, n.smoothChildTiming = !!r.smoothChildTiming, n.autoRemoveChildren = !!r.autoRemoveChildren, n._sort = fe(r.sortChildren), ft && je(r.parent || ft, lr(n), i), r.reversed && n.reverse(), r.paused && n.paused(!0), r.scrollTrigger && Ra(lr(n), r.scrollTrigger), n;
  }
  var e = t.prototype;
  return e.to = function(i, n, o) {
    return Vi(0, arguments, this), this;
  }, e.from = function(i, n, o) {
    return Vi(1, arguments, this), this;
  }, e.fromTo = function(i, n, o, a) {
    return Vi(2, arguments, this), this;
  }, e.set = function(i, n, o) {
    return n.duration = 0, n.parent = this, qi(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new Ct(i, n, Re(this, o), 1), this;
  }, e.call = function(i, n, o) {
    return je(this, Ct.delayedCall(0, i, n), o);
  }, e.staggerTo = function(i, n, o, a, l, c, u) {
    return o.duration = n, o.stagger = o.stagger || a, o.onComplete = c, o.onCompleteParams = u, o.parent = this, new Ct(i, o, Re(this, l)), this;
  }, e.staggerFrom = function(i, n, o, a, l, c, u) {
    return o.runBackwards = 1, qi(o).immediateRender = fe(o.immediateRender), this.staggerTo(i, n, o, a, l, c, u);
  }, e.staggerFromTo = function(i, n, o, a, l, c, u, d) {
    return a.startAt = o, qi(a).immediateRender = fe(a.immediateRender), this.staggerTo(i, n, a, l, c, u, d);
  }, e.render = function(i, n, o) {
    var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, c = this._dur, u = i <= 0 ? 0 : ut(i), d = this._zTime < 0 != i < 0 && (this._initted || !c), h, f, _, p, m, x, y, T, v, S, k, b;
    if (this !== ft && u > l && i >= 0 && (u = l), u !== this._tTime || o || d) {
      if (a !== this._time && c && (u += this._time - a, i += this._time - a), h = u, v = this._start, T = this._ts, x = !T, d && (c || (a = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
        if (k = this._yoyo, m = c + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(m * 100 + i, n, o);
        if (h = ut(u % m), u === l ? (p = this._repeat, h = c) : (S = ut(u / m), p = ~~S, p && p === S && (h = c, p--), h > c && (h = c)), S = Ci(this._tTime, m), !a && this._tTime && S !== p && this._tTime - S * m - this._dur <= 0 && (S = p), k && p & 1 && (h = c - h, b = 1), p !== S && !this._lock) {
          var P = k && S & 1, C = P === (k && p & 1);
          if (p < S && (P = !P), a = P ? 0 : u % c ? c : u, this._lock = 1, this.render(a || (b ? 0 : ut(p * m)), n, !c)._lock = 0, this._tTime = u, !n && this.parent && Ce(this, "onRepeat"), this.vars.repeatRefresh && !b && (this.invalidate()._lock = 1, S = p), a && a !== this._time || x !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (c = this._dur, l = this._tDur, C && (this._lock = 2, a = P ? c : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !b && this.invalidate()), this._lock = 0, !this._ts && !x)
            return this;
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = hc(this, ut(a), ut(h)), y && (u -= h - (h = y._start))), this._tTime = u, this._time = h, this._act = !!T, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && u && c && !n && !S && (Ce(this, "onStart"), this._tTime !== u))
        return this;
      if (h >= a && i >= 0)
        for (f = this._first; f; ) {
          if (_ = f._next, (f._act || h >= f._start) && f._ts && y !== f) {
            if (f.parent !== this)
              return this.render(i, n, o);
            if (f.render(f._ts > 0 ? (h - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (h - f._start) * f._ts, n, o), h !== this._time || !this._ts && !x) {
              y = 0, _ && (u += this._zTime = -st);
              break;
            }
          }
          f = _;
        }
      else {
        f = this._last;
        for (var E = i < 0 ? i : h; f; ) {
          if (_ = f._prev, (f._act || E <= f._end) && f._ts && y !== f) {
            if (f.parent !== this)
              return this.render(i, n, o);
            if (f.render(f._ts > 0 ? (E - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (E - f._start) * f._ts, n, o || Bt && eo(f)), h !== this._time || !this._ts && !x) {
              y = 0, _ && (u += this._zTime = E ? -st : st);
              break;
            }
          }
          f = _;
        }
      }
      if (y && !n && (this.pause(), y.render(h >= a ? 0 : -st)._zTime = h >= a ? 1 : -1, this._ts))
        return this._start = v, es(this), this.render(i, n, o);
      this._onUpdate && !n && Ce(this, "onUpdate", !0), (u === l && this._tTime >= this.totalDuration() || !u && a) && (v === this._start || Math.abs(T) !== Math.abs(this._ts)) && (this._lock || ((i || !c) && (u === l && this._ts > 0 || !u && this._ts < 0) && Dr(this, 1), !n && !(i < 0 && !a) && (u || a || !l) && (Ce(this, u === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(i, n) {
    var o = this;
    if (dr(n) || (n = Re(this, n, i)), !(i instanceof un)) {
      if (Zt(i))
        return i.forEach(function(a) {
          return o.add(a, n);
        }), this;
      if (Nt(i))
        return this.addLabel(i, n);
      if (gt(i))
        i = Ct.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? je(this, i, n) : this;
  }, e.getChildren = function(i, n, o, a) {
    i === void 0 && (i = !0), n === void 0 && (n = !0), o === void 0 && (o = !0), a === void 0 && (a = -Ne);
    for (var l = [], c = this._first; c; )
      c._start >= a && (c instanceof Ct ? n && l.push(c) : (o && l.push(c), i && l.push.apply(l, c.getChildren(!0, n, o)))), c = c._next;
    return l;
  }, e.getById = function(i) {
    for (var n = this.getChildren(1, 1, 1), o = n.length; o--; )
      if (n[o].vars.id === i)
        return n[o];
  }, e.remove = function(i) {
    return Nt(i) ? this.removeLabel(i) : gt(i) ? this.killTweensOf(i) : (i.parent === this && ts(this, i), i === this._recent && (this._recent = this._last), Kr(this));
  }, e.totalTime = function(i, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ut(Te.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), s.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(i, n) {
    return this.labels[i] = Re(this, n), this;
  }, e.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, e.addPause = function(i, n, o) {
    var a = Ct.delayedCall(0, n || an, o);
    return a.data = "isPause", this._hasPause = 1, je(this, a, Re(this, i));
  }, e.removePause = function(i) {
    var n = this._first;
    for (i = Re(this, i); n; )
      n._start === i && n.data === "isPause" && Dr(n), n = n._next;
  }, e.killTweensOf = function(i, n, o) {
    for (var a = this.getTweensOf(i, o), l = a.length; l--; )
      Sr !== a[l] && a[l].kill(i, n);
    return this;
  }, e.getTweensOf = function(i, n) {
    for (var o = [], a = Fe(i), l = this._first, c = dr(n), u; l; )
      l instanceof Ct ? sc(l._targets, a) && (c ? (!Sr || l._initted && l._ts) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) && o.push(l) : (u = l.getTweensOf(a, n)).length && o.push.apply(o, u), l = l._next;
    return o;
  }, e.tweenTo = function(i, n) {
    n = n || {};
    var o = this, a = Re(o, i), l = n, c = l.startAt, u = l.onStart, d = l.onStartParams, h = l.immediateRender, f, _ = Ct.to(o, Oe({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: n.duration || Math.abs((a - (c && "time" in c ? c.time : o._time)) / o.timeScale()) || st,
      onStart: function() {
        if (o.pause(), !f) {
          var m = n.duration || Math.abs((a - (c && "time" in c ? c.time : o._time)) / o.timeScale());
          _._dur !== m && ki(_, m, 0, 1).render(_._time, !0, !0), f = 1;
        }
        u && u.apply(_, d || []);
      }
    }, n));
    return h ? _.render(0) : _;
  }, e.tweenFromTo = function(i, n, o) {
    return this.tweenTo(n, Oe({
      startAt: {
        time: Re(this, i)
      }
    }, o));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(i) {
    return i === void 0 && (i = this._time), Po(this, Re(this, i));
  }, e.previousLabel = function(i) {
    return i === void 0 && (i = this._time), Po(this, Re(this, i), 1);
  }, e.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + st);
  }, e.shiftChildren = function(i, n, o) {
    o === void 0 && (o = 0);
    var a = this._first, l = this.labels, c;
    for (i = ut(i); a; )
      a._start >= o && (a._start += i, a._end += i), a = a._next;
    if (n)
      for (c in l)
        l[c] >= o && (l[c] += i);
    return Kr(this);
  }, e.invalidate = function(i) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(i), n = n._next;
    return s.prototype.invalidate.call(this, i);
  }, e.clear = function(i) {
    i === void 0 && (i = !0);
    for (var n = this._first, o; n; )
      o = n._next, this.remove(n), n = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Kr(this);
  }, e.totalDuration = function(i) {
    var n = 0, o = this, a = o._last, l = Ne, c, u, d;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
    if (o._dirty) {
      for (d = o.parent; a; )
        c = a._prev, a._dirty && a.totalDuration(), u = a._start, u > l && o._sort && a._ts && !o._lock ? (o._lock = 1, je(o, a, u - a._delay, 1)._lock = 0) : l = u, u < 0 && a._ts && (n -= u, (!d && !o._dp || d && d.smoothChildTiming) && (o._start += ut(u / o._ts), o._time -= u, o._tTime -= u), o.shiftChildren(-u, !1, -1 / 0), l = 0), a._end > n && a._ts && (n = a._end), a = c;
      ki(o, o === ft && o._time > n ? o._time : n, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, t.updateRoot = function(i) {
    if (ft._ts && (ka(ft, qn(i, ft)), Ea = Te.frame), Te.frame >= To) {
      To += Pe.autoSleep || 120;
      var n = ft._first;
      if ((!n || !n._ts) && Pe.autoSleep && Te._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || Te.sleep();
      }
    }
  }, t;
}(un);
Oe(ue.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Mc = function(t, e, r, i, n, o, a) {
  var l = new de(this._pt, t, e, 0, 1, Ja, null, n), c = 0, u = 0, d, h, f, _, p, m, x, y;
  for (l.b = r, l.e = i, r += "", i += "", (x = ~i.indexOf("random(")) && (i = ln(i)), o && (y = [r, i], o(y, t, e), r = y[0], i = y[1]), h = r.match(ss) || []; d = ss.exec(i); )
    _ = d[0], p = i.substring(c, d.index), f ? f = (f + 1) % 5 : p.substr(-5) === "rgba(" && (f = 1), _ !== h[u++] && (m = parseFloat(h[u - 1]) || 0, l._pt = {
      _next: l._pt,
      p: p || u === 1 ? p : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: _.charAt(1) === "=" ? vi(m, _) - m : parseFloat(_) - m,
      m: f && f < 4 ? Math.round : 0
    }, c = ss.lastIndex);
  return l.c = c < i.length ? i.substring(c, i.length) : "", l.fp = a, (ba.test(i) || x) && (l.e = 0), this._pt = l, l;
}, ro = function(t, e, r, i, n, o, a, l, c, u) {
  gt(i) && (i = i(n || 0, t, o));
  var d = t[e], h = r !== "get" ? r : gt(d) ? c ? t[e.indexOf("set") || !gt(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](c) : t[e]() : d, f = gt(d) ? c ? Ac : Za : no, _;
  if (Nt(i) && (~i.indexOf("random(") && (i = ln(i)), i.charAt(1) === "=" && (_ = vi(h, i) + (Kt(h) || 0), (_ || _ === 0) && (i = _))), !u || h !== i || Os)
    return !isNaN(h * i) && i !== "" ? (_ = new de(this._pt, t, e, +h || 0, i - (h || 0), typeof d == "boolean" ? Fc : ja, 0, f), c && (_.fp = c), a && _.modifier(a, this, t), this._pt = _) : (!d && !(e in t) && Zs(e, i), Mc.call(this, t, e, h, i, f, l || Pe.stringFilter, c));
}, Oc = function(t, e, r, i, n) {
  if (gt(t) && (t = Gi(t, n, e, r, i)), !rr(t) || t.style && t.nodeType || Zt(t) || wa(t))
    return Nt(t) ? Gi(t, n, e, r, i) : t;
  var o = {}, a;
  for (a in t)
    o[a] = Gi(t[a], n, e, r, i);
  return o;
}, Ga = function(t, e, r, i, n, o) {
  var a, l, c, u;
  if (xe[t] && (a = new xe[t]()).init(n, a.rawVars ? e[t] : Oc(e[t], i, n, o, r), r, i, o) !== !1 && (r._pt = l = new de(r._pt, n, t, 0, 1, a.render, a, 0, a.priority), r !== gi))
    for (c = r._ptLookup[r._targets.indexOf(n)], u = a._props.length; u--; )
      c[a._props[u]] = l;
  return a;
}, Sr, Os, io = function s(t, e, r) {
  var i = t.vars, n = i.ease, o = i.startAt, a = i.immediateRender, l = i.lazy, c = i.onUpdate, u = i.runBackwards, d = i.yoyoEase, h = i.keyframes, f = i.autoRevert, _ = t._dur, p = t._startAt, m = t._targets, x = t.parent, y = x && x.data === "nested" ? x.vars.targets : m, T = t._overwrite === "auto" && !Vs, v = t.timeline, S = i.easeReverse || d, k, b, P, C, E, W, O, K, Y, Q, q, A, Z;
  if (v && (!h || !n) && (n = "none"), t._ease = Qr(n, sn.ease), t._rEase = S && (Qr(S) || t._ease), t._from = !v && !!i.runBackwards, t._from && (t.ratio = 1), !v || h && !i.stagger) {
    if (K = m[0] ? Gr(m[0]).harness : 0, A = K && i[K.prop], k = Un(i, js), p && (p._zTime < 0 && p.progress(1), e < 0 && u && a && !f ? p.render(-1, !0) : p.revert(u && _ ? Ln : ic), p._lazy = 0), o) {
      if (Dr(t._startAt = Ct.set(m, Oe({
        data: "isStart",
        overwrite: !1,
        parent: x,
        immediateRender: !0,
        lazy: !p && fe(l),
        startAt: null,
        delay: 0,
        onUpdate: c && function() {
          return Ce(t, "onUpdate");
        },
        stagger: 0
      }, o))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Bt || !a && !f) && t._startAt.revert(Ln), a && _ && e <= 0 && r <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (u && _ && !p) {
      if (e && (a = !1), P = Oe({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !p && fe(l),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: x
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, k), A && (P[K.prop] = A), Dr(t._startAt = Ct.set(m, P)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Bt ? t._startAt.revert(Ln) : t._startAt.render(-1, !0)), t._zTime = e, !a)
        s(t._startAt, st, st);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, l = _ && fe(l) || l && !_, b = 0; b < m.length; b++) {
      if (E = m[b], O = E._gsap || to(m)[b]._gsap, t._ptLookup[b] = Q = {}, Ts[O.id] && Pr.length && Hn(), q = y === m ? b : y.indexOf(E), K && (Y = new K()).init(E, A || k, t, q, y) !== !1 && (t._pt = C = new de(t._pt, E, Y.name, 0, 1, Y.render, Y, 0, Y.priority), Y._props.forEach(function(rt) {
        Q[rt] = C;
      }), Y.priority && (W = 1)), !K || A)
        for (P in k)
          xe[P] && (Y = Ga(P, k, t, q, E, y)) ? Y.priority && (W = 1) : Q[P] = C = ro.call(t, E, P, "get", k[P], q, y, 0, i.stringFilter);
      t._op && t._op[b] && t.kill(E, t._op[b]), T && t._pt && (Sr = t, ft.killTweensOf(E, Q, t.globalTime(e)), Z = !t.parent, Sr = 0), t._pt && l && (Ts[O.id] = 1);
    }
    W && tl(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = c, t._initted = (!t._op || t._pt) && !Z, h && e <= 0 && v.render(Ne, !0, !0);
}, Dc = function(t, e, r, i, n, o, a, l) {
  var c = (t._pt && t._ptCache || (t._ptCache = {}))[e], u, d, h, f;
  if (!c)
    for (c = t._ptCache[e] = [], h = t._ptLookup, f = t._targets.length; f--; ) {
      if (u = h[f][e], u && u.d && u.d._pt)
        for (u = u.d._pt; u && u.p !== e && u.fp !== e; )
          u = u._next;
      if (!u)
        return Os = 1, t.vars[e] = "+=0", io(t, a), Os = 0, l ? on(e + " not eligible for reset. Try splitting into individual properties") : 1;
      c.push(u);
    }
  for (f = c.length; f--; )
    d = c[f], u = d._pt || d, u.s = (i || i === 0) && !n ? i : u.s + (i || 0) + o * u.c, u.c = r - u.s, d.e && (d.e = yt(r) + Kt(d.e)), d.b && (d.b = u.s + Kt(d.b));
}, Rc = function(t, e) {
  var r = t[0] ? Gr(t[0]).harness : 0, i = r && r.aliases, n, o, a, l;
  if (!i)
    return e;
  n = Ei({}, e);
  for (o in i)
    if (o in n)
      for (l = i[o].split(","), a = l.length; a--; )
        n[l[a]] = n[o];
  return n;
}, Lc = function(t, e, r, i) {
  var n = e.ease || i || "power1.inOut", o, a;
  if (Zt(e))
    a = r[t] || (r[t] = []), e.forEach(function(l, c) {
      return a.push({
        t: c / (e.length - 1) * 100,
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
}, Gi = function(t, e, r, i, n) {
  return gt(t) ? t.call(e, r, i, n) : Nt(t) && ~t.indexOf("random(") ? ln(t) : t;
}, Ka = Js + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", Qa = {};
he(Ka + ",id,stagger,delay,duration,paused,scrollTrigger", function(s) {
  return Qa[s] = 1;
});
var Ct = /* @__PURE__ */ function(s) {
  ma(t, s);
  function t(r, i, n, o) {
    var a;
    typeof i == "number" && (n.duration = i, i = n, n = null), a = s.call(this, o ? i : qi(i)) || this;
    var l = a.vars, c = l.duration, u = l.delay, d = l.immediateRender, h = l.stagger, f = l.overwrite, _ = l.keyframes, p = l.defaults, m = l.scrollTrigger, x = i.parent || ft, y = (Zt(r) || wa(r) ? dr(r[0]) : "length" in i) ? [r] : Fe(r), T, v, S, k, b, P, C, E;
    if (a._targets = y.length ? to(y) : on("GSAP target " + r + " not found. https://gsap.com", !Pe.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = f, _ || h || yn(c) || yn(u)) {
      i = a.vars;
      var W = i.easeReverse || i.yoyoEase;
      if (T = a.timeline = new ue({
        data: "nested",
        defaults: p || {},
        targets: x && x.data === "nested" ? x.vars.targets : y
      }), T.kill(), T.parent = T._dp = lr(a), T._start = 0, h || yn(c) || yn(u)) {
        if (k = y.length, C = h && Fa(h), rr(h))
          for (b in h)
            ~Ka.indexOf(b) && (E || (E = {}), E[b] = h[b]);
        for (v = 0; v < k; v++)
          S = Un(i, Qa), S.stagger = 0, W && (S.easeReverse = W), E && Ei(S, E), P = y[v], S.duration = +Gi(c, lr(a), v, P, y), S.delay = (+Gi(u, lr(a), v, P, y) || 0) - a._delay, !h && k === 1 && S.delay && (a._delay = u = S.delay, a._start += u, S.delay = 0), T.to(P, S, C ? C(v, P, y) : 0), T._ease = G.none;
        T.duration() ? c = u = 0 : a.timeline = 0;
      } else if (_) {
        qi(Oe(T.vars.defaults, {
          ease: "none"
        })), T._ease = Qr(_.ease || i.ease || "none");
        var O = 0, K, Y, Q;
        if (Zt(_))
          _.forEach(function(q) {
            return T.to(y, q, ">");
          }), T.duration();
        else {
          S = {};
          for (b in _)
            b === "ease" || b === "easeEach" || Lc(b, _[b], S, _.easeEach);
          for (b in S)
            for (K = S[b].sort(function(q, A) {
              return q.t - A.t;
            }), O = 0, v = 0; v < K.length; v++)
              Y = K[v], Q = {
                ease: Y.e,
                duration: (Y.t - (v ? K[v - 1].t : 0)) / 100 * c
              }, Q[b] = Y.v, T.to(y, Q, O), O += Q.duration;
          T.duration() < c && T.to({}, {
            duration: c - T.duration()
          });
        }
      }
      c || a.duration(c = T.duration());
    } else
      a.timeline = 0;
    return f === !0 && !Vs && (Sr = lr(a), ft.killTweensOf(y), Sr = 0), je(x, lr(a), n), i.reversed && a.reverse(), i.paused && a.paused(!0), (d || !c && !_ && a._start === ut(x._time) && fe(d) && cc(lr(a)) && x.data !== "nested") && (a._tTime = -st, a.render(Math.max(0, -u) || 0)), m && Ra(lr(a), m), a;
  }
  var e = t.prototype;
  return e.render = function(i, n, o) {
    var a = this._time, l = this._tDur, c = this._dur, u = i < 0, d = i > l - st && !u ? l : i < st ? 0 : i, h, f, _, p, m, x, y, T;
    if (!c)
      fc(this, i, n, o);
    else if (d !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u || this._lazy) {
      if (h = d, T = this.timeline, this._repeat) {
        if (p = c + this._rDelay, this._repeat < -1 && u)
          return this.totalTime(p * 100 + i, n, o);
        if (h = ut(d % p), d === l ? (_ = this._repeat, h = c) : (m = ut(d / p), _ = ~~m, _ && _ === m ? (h = c, _--) : h > c && (h = c)), x = this._yoyo && _ & 1, x && (h = c - h), m = Ci(this._tTime, p), h === a && !o && this._initted && _ === m)
          return this._tTime = d, this;
        _ !== m && this.vars.repeatRefresh && !x && !this._lock && h !== p && this._initted && (this._lock = o = 1, this.render(ut(p * _), !0).invalidate()._lock = 0);
      }
      if (!this._initted) {
        if (La(this, u ? i : h, o, n, d))
          return this._tTime = 0, this;
        if (a !== this._time && !(o && this.vars.repeatRefresh && _ !== m))
          return this;
        if (c !== this._dur)
          return this.render(i, n, o);
      }
      if (this._rEase) {
        var v = h < a;
        if (v !== this._inv) {
          var S = v ? a : c - a;
          this._inv = v, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = a, this._invRecip = S ? (v ? -1 : 1) / S : 0, this._invScale = v ? -this.ratio : 1 - this.ratio, this._invEase = v ? this._rEase : this._ease;
        }
        this.ratio = y = this._invRatio + this._invScale * this._invEase((h - this._invTime) * this._invRecip);
      } else
        this.ratio = y = this._ease(h / c);
      if (this._from && (this.ratio = y = 1 - y), this._tTime = d, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), !a && d && !n && !m && (Ce(this, "onStart"), this._tTime !== d))
        return this;
      for (f = this._pt; f; )
        f.r(y, f.d), f = f._next;
      T && T.render(i < 0 ? i : T._dur * T._ease(h / this._dur), n, o) || this._startAt && (this._zTime = i), this._onUpdate && !n && (u && Es(this, i, n, o), Ce(this, "onUpdate")), this._repeat && _ !== m && this.vars.onRepeat && !n && this.parent && Ce(this, "onRepeat"), (d === this._tDur || !d) && this._tTime === d && (u && !this._onUpdate && Es(this, i, !0, !0), (i || !c) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && Dr(this, 1), !n && !(u && !a) && (d || a || x) && (Ce(this, d === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), s.prototype.invalidate.call(this, i);
  }, e.resetTo = function(i, n, o, a, l) {
    cn || Te.wake(), this._ts || this.play();
    var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
    return this._initted || io(this, c), u = this._ease(c / this._dur), Dc(this, i, n, o, a, u, c, l) ? this.resetTo(i, n, o, a, 1) : (rs(this, 0), this.parent || Oa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(i, n) {
    if (n === void 0 && (n = "all"), !i && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Yi(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Bt), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, n, Sr && Sr.vars.overwrite !== !0)._first || Yi(this), this.parent && o !== this.timeline.totalDuration() && ki(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, l = i ? Fe(i) : a, c = this._ptLookup, u = this._pt, d, h, f, _, p, m, x;
    if ((!n || n === "all") && ac(a, l))
      return n === "all" && (this._pt = 0), Yi(this);
    for (d = this._op = this._op || [], n !== "all" && (Nt(n) && (p = {}, he(n, function(y) {
      return p[y] = 1;
    }), n = p), n = Rc(a, n)), x = a.length; x--; )
      if (~l.indexOf(a[x])) {
        h = c[x], n === "all" ? (d[x] = n, _ = h, f = {}) : (f = d[x] = d[x] || {}, _ = n);
        for (p in _)
          m = h && h[p], m && ((!("kill" in m.d) || m.d.kill(p) === !0) && ts(this, m, "_pt"), delete h[p]), f !== "all" && (f[p] = 1);
      }
    return this._initted && !this._pt && u && Yi(this), this;
  }, t.to = function(i, n) {
    return new t(i, n, arguments[2]);
  }, t.from = function(i, n) {
    return Vi(1, arguments);
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
    return Vi(2, arguments);
  }, t.set = function(i, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(i, n);
  }, t.killTweensOf = function(i, n, o) {
    return ft.killTweensOf(i, n, o);
  }, t;
}(un);
Oe(Ct.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
he("staggerTo,staggerFrom,staggerFromTo", function(s) {
  Ct[s] = function() {
    var t = new ue(), e = ks.call(arguments, 0);
    return e.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), t[s].apply(t, e);
  };
});
var no = function(t, e, r) {
  return t[e] = r;
}, Za = function(t, e, r) {
  return t[e](r);
}, Ac = function(t, e, r, i) {
  return t[e](i.fp, r);
}, Nc = function(t, e, r) {
  return t.setAttribute(e, r);
}, so = function(t, e) {
  return gt(t[e]) ? Za : Gs(t[e]) && t.setAttribute ? Nc : no;
}, ja = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, Fc = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, Ja = function(t, e) {
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
}, oo = function(t, e) {
  for (var r = e._pt; r; )
    r.r(t, r.d), r = r._next;
}, zc = function(t, e, r, i) {
  for (var n = this._pt, o; n; )
    o = n._next, n.p === i && n.modifier(t, e, r), n = o;
}, Ic = function(t) {
  for (var e = this._pt, r, i; e; )
    i = e._next, e.p === t && !e.op || e.op === t ? ts(this, e, "_pt") : e.dep || (r = 1), e = i;
  return !r;
}, Yc = function(t, e, r, i) {
  i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
}, tl = function(t) {
  for (var e = t._pt, r, i, n, o; e; ) {
    for (r = e._next, i = n; i && i.pr > e.pr; )
      i = i._next;
    (e._prev = i ? i._prev : o) ? e._prev._next = e : n = e, (e._next = i) ? i._prev = e : o = e, e = r;
  }
  t._pt = n;
}, de = /* @__PURE__ */ function() {
  function s(e, r, i, n, o, a, l, c, u) {
    this.t = r, this.s = n, this.c = o, this.p = i, this.r = a || ja, this.d = l || this, this.set = c || no, this.pr = u || 0, this._next = e, e && (e._prev = this);
  }
  var t = s.prototype;
  return t.modifier = function(r, i, n) {
    this.mSet = this.mSet || this.set, this.set = Yc, this.m = r, this.mt = n, this.tween = i;
  }, s;
}();
he(Js + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(s) {
  return js[s] = 1;
});
Me.TweenMax = Me.TweenLite = Ct;
Me.TimelineLite = Me.TimelineMax = ue;
ft = new ue({
  sortChildren: !1,
  defaults: sn,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Pe.stringFilter = Ua;
var Zr = [], Nn = {}, Bc = [], Oo = 0, Wc = 0, us = function(t) {
  return (Nn[t] || Bc).map(function(e) {
    return e();
  });
}, Ds = function() {
  var t = Date.now(), e = [];
  t - Oo > 2 && (us("matchMediaInit"), Zr.forEach(function(r) {
    var i = r.queries, n = r.conditions, o, a, l, c;
    for (a in i)
      o = Ke.matchMedia(i[a]).matches, o && (l = 1), o !== n[a] && (n[a] = o, c = 1);
    c && (r.revert(), l && e.push(r));
  }), us("matchMediaRevert"), e.forEach(function(r) {
    return r.onMatch(r, function(i) {
      return r.add(null, i);
    });
  }), Oo = t, us("matchMedia"));
}, el = /* @__PURE__ */ function() {
  function s(e, r) {
    this.selector = r && Ps(r), this.data = [], this._r = [], this.isReverted = !1, this.id = Wc++, e && this.add(e);
  }
  var t = s.prototype;
  return t.add = function(r, i, n) {
    gt(r) && (n = i, i = r, r = gt);
    var o = this, a = function() {
      var c = lt, u = o.selector, d;
      return c && c !== o && c.data.push(o), n && (o.selector = Ps(n)), lt = o, d = i.apply(o, arguments), gt(d) && o._r.push(d), lt = c, o.selector = u, o.isReverted = !1, d;
    };
    return o.last = a, r === gt ? a(o, function(l) {
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
      for (var a = n.getTweens(), l = n.data.length, c; l--; )
        c = n.data[l], c.data === "isFlip" && (c.revert(), c.getChildren(!0, !0, !1).forEach(function(u) {
          return a.splice(a.indexOf(u), 1);
        }));
      for (a.map(function(u) {
        return {
          g: u._dur || u._delay || u._sat && !u._sat.vars.immediateRender ? u.globalTime(0) : -1 / 0,
          t: u
        };
      }).sort(function(u, d) {
        return d.g - u.g || -1 / 0;
      }).forEach(function(u) {
        return u.t.revert(r);
      }), l = n.data.length; l--; )
        c = n.data[l], c instanceof ue ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(), c.kill()) : !(c instanceof Ct) && c.revert && c.revert(r);
      n._r.forEach(function(u) {
        return u(r, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), i)
      for (var o = Zr.length; o--; )
        Zr[o].id === this.id && Zr.splice(o, 1);
  }, t.revert = function(r) {
    this.kill(r || {});
  }, s;
}(), Xc = /* @__PURE__ */ function() {
  function s(e) {
    this.contexts = [], this.scope = e, lt && lt.data.push(this);
  }
  var t = s.prototype;
  return t.add = function(r, i, n) {
    rr(r) || (r = {
      matches: r
    });
    var o = new el(0, n || this.scope), a = o.conditions = {}, l, c, u;
    lt && !o.selector && (o.selector = lt.selector), this.contexts.push(o), i = o.add("onMatch", i), o.queries = r;
    for (c in r)
      c === "all" ? u = 1 : (l = Ke.matchMedia(r[c]), l && (Zr.indexOf(o) < 0 && Zr.push(o), (a[c] = l.matches) && (u = 1), l.addListener ? l.addListener(Ds) : l.addEventListener("change", Ds)));
    return u && i(o, function(d) {
      return o.add(null, d);
    }), this;
  }, t.revert = function(r) {
    this.kill(r || {});
  }, t.kill = function(r) {
    this.contexts.forEach(function(i) {
      return i.kill(r, !0);
    });
  }, s;
}(), Vn = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    e.forEach(function(i) {
      return Xa(i);
    });
  },
  timeline: function(t) {
    return new ue(t);
  },
  getTweensOf: function(t, e) {
    return ft.getTweensOf(t, e);
  },
  getProperty: function(t, e, r, i) {
    Nt(t) && (t = Fe(t)[0]);
    var n = Gr(t || {}).get, o = r ? Ma : Pa;
    return r === "native" && (r = ""), t && (e ? o((xe[e] && xe[e].get || n)(t, e, r, i)) : function(a, l, c) {
      return o((xe[a] && xe[a].get || n)(t, a, l, c));
    });
  },
  quickSetter: function(t, e, r) {
    if (t = Fe(t), t.length > 1) {
      var i = t.map(function(u) {
        return ge.quickSetter(u, e, r);
      }), n = i.length;
      return function(u) {
        for (var d = n; d--; )
          i[d](u);
      };
    }
    t = t[0] || {};
    var o = xe[e], a = Gr(t), l = a.harness && (a.harness.aliases || {})[e] || e, c = o ? function(u) {
      var d = new o();
      gi._pt = 0, d.init(t, r ? u + r : u, gi, 0, [t]), d.render(1, d), gi._pt && oo(1, gi);
    } : a.set(t, l);
    return o ? c : function(u) {
      return c(t, l, r ? u + r : u, a, 1);
    };
  },
  quickTo: function(t, e, r) {
    var i, n = ge.to(t, Oe((i = {}, i[e] = "+=0.1", i.paused = !0, i.stagger = 0, i), r || {})), o = function(l, c, u) {
      return n.resetTo(e, l, c, u);
    };
    return o.tween = n, o;
  },
  isTweening: function(t) {
    return ft.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = Qr(t.ease, sn.ease)), Eo(sn, t || {});
  },
  config: function(t) {
    return Eo(Pe, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, r = t.effect, i = t.plugins, n = t.defaults, o = t.extendTimeline;
    (i || "").split(",").forEach(function(a) {
      return a && !xe[a] && !Me[a] && on(e + " effect requires " + a + " plugin.");
    }), os[e] = function(a, l, c) {
      return r(Fe(a), Oe(l || {}, n), c);
    }, o && (ue.prototype[e] = function(a, l, c) {
      return this.add(os[e](a, rr(l) ? l : (c = l) && {}, this), c);
    });
  },
  registerEase: function(t, e) {
    G[t] = Qr(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? Qr(t, e) : G;
  },
  getById: function(t) {
    return ft.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var r = new ue(t), i, n;
    for (r.smoothChildTiming = fe(t.smoothChildTiming), ft.remove(r), r._dp = 0, r._time = r._tTime = ft._time, i = ft._first; i; )
      n = i._next, (e || !(!i._dur && i instanceof Ct && i.vars.onComplete === i._targets[0])) && je(r, i, i._start - i._delay), i = n;
    return je(ft, r, 0), r;
  },
  context: function(t, e) {
    return t ? new el(t, e) : lt;
  },
  matchMedia: function(t) {
    return new Xc(t);
  },
  matchMediaRefresh: function() {
    return Zr.forEach(function(t) {
      var e = t.conditions, r, i;
      for (i in e)
        e[i] && (e[i] = !1, r = 1);
      r && t.revert();
    }) || Ds();
  },
  addEventListener: function(t, e) {
    var r = Nn[t] || (Nn[t] = []);
    ~r.indexOf(e) || r.push(e);
  },
  removeEventListener: function(t, e) {
    var r = Nn[t], i = r && r.indexOf(e);
    i >= 0 && r.splice(i, 1);
  },
  utils: {
    wrap: wc,
    wrapYoyo: yc,
    distribute: Fa,
    random: Ia,
    snap: za,
    normalize: vc,
    getUnit: Kt,
    clamp: pc,
    splitColor: $a,
    toArray: Fe,
    selector: Ps,
    mapRange: Ba,
    pipe: gc,
    unitize: mc,
    interpolate: bc,
    shuffle: Na
  },
  install: Sa,
  effects: os,
  ticker: Te,
  updateRoot: ue.updateRoot,
  plugins: xe,
  globalTimeline: ft,
  core: {
    PropTween: de,
    globals: Ta,
    Tween: Ct,
    Timeline: ue,
    Animation: un,
    getCache: Gr,
    _removeLinkedListItem: ts,
    reverting: function() {
      return Bt;
    },
    context: function(t) {
      return t && lt && (lt.data.push(t), t._ctx = lt), lt;
    },
    suppressOverwrites: function(t) {
      return Vs = t;
    }
  }
};
he("to,from,fromTo,delayedCall,set,killTweensOf", function(s) {
  return Vn[s] = Ct[s];
});
Te.add(ue.updateRoot);
gi = Vn.to({}, {
  duration: 0
});
var $c = function(t, e) {
  for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
    r = r._next;
  return r;
}, Hc = function(t, e) {
  var r = t._targets, i, n, o;
  for (i in e)
    for (n = r.length; n--; )
      o = t._ptLookup[n][i], o && (o = o.d) && (o._pt && (o = $c(o, i)), o && o.modifier && o.modifier(e[i], t, r[n], i));
}, fs = function(t, e) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, n, o) {
      o._onInit = function(a) {
        var l, c;
        if (Nt(n) && (l = {}, he(n, function(u) {
          return l[u] = 1;
        }), n = l), e) {
          l = {};
          for (c in n)
            l[c] = e(n[c]);
          n = l;
        }
        Hc(a, n);
      };
    }
  };
}, ge = Vn.registerPlugin({
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
}, fs("roundProps", Ms), fs("modifiers"), fs("snap", za)) || Vn;
Ct.version = ue.version = ge.version = "3.15.0";
xa = 1;
Ks() && Pi();
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
var Do, Tr, wi, ao, qr, Ro, lo, Uc = function() {
  return typeof window < "u";
}, pr = {}, $r = 180 / Math.PI, yi = Math.PI / 180, li = Math.atan2, Lo = 1e8, co = /([A-Z])/g, qc = /(left|right|width|margin|padding|x)/i, Vc = /[\s,\(]\S/, Je = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Rs = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Gc = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Kc = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Qc = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Zc = function(t, e) {
  var r = e.s + e.c * t;
  e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
}, rl = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, il = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, jc = function(t, e, r) {
  return t.style[e] = r;
}, Jc = function(t, e, r) {
  return t.style.setProperty(e, r);
}, tu = function(t, e, r) {
  return t._gsap[e] = r;
}, eu = function(t, e, r) {
  return t._gsap.scaleX = t._gsap.scaleY = r;
}, ru = function(t, e, r, i, n) {
  var o = t._gsap;
  o.scaleX = o.scaleY = r, o.renderTransform(n, o);
}, iu = function(t, e, r, i, n) {
  var o = t._gsap;
  o[e] = r, o.renderTransform(n, o);
}, ht = "transform", pe = ht + "Origin", nu = function s(t, e) {
  var r = this, i = this.target, n = i.style, o = i._gsap;
  if (t in pr && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = Je[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(a) {
        return r.tfm[a] = cr(i, a);
      }) : this.tfm[t] = o.x ? o[t] : cr(i, t), t === pe && (this.tfm.zOrigin = o.zOrigin);
    else
      return Je.transform.split(",").forEach(function(a) {
        return s.call(r, a, e);
      });
    if (this.props.indexOf(ht) >= 0)
      return;
    o.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(pe, e, "")), t = ht;
  }
  (n || e) && this.props.push(t, e, n[t]);
}, nl = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, su = function() {
  var t = this.props, e = this.target, r = e.style, i = e._gsap, n, o;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? t[n + 1] === 2 ? e[t[n]](t[n + 2]) : e[t[n]] = t[n + 2] : t[n + 2] ? r[t[n]] = t[n + 2] : r.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(co, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      i[o] = this.tfm[o];
    i.svg && (i.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = lo(), (!n || !n.isStart) && !r[ht] && (nl(r), i.zOrigin && r[pe] && (r[pe] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, sl = function(t, e) {
  var r = {
    target: t,
    props: [],
    revert: su,
    save: nu
  };
  return t._gsap || ge.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(i) {
    return r.save(i);
  }), r;
}, ol, Ls = function(t, e) {
  var r = Tr.createElementNS ? Tr.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Tr.createElement(t);
  return r && r.style ? r : Tr.createElement(t);
}, ke = function s(t, e, r) {
  var i = getComputedStyle(t);
  return i[e] || i.getPropertyValue(e.replace(co, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && s(t, Mi(e) || e, 1) || "";
}, Ao = "O,Moz,ms,Ms,Webkit".split(","), Mi = function(t, e, r) {
  var i = e || qr, n = i.style, o = 5;
  if (t in n && !r)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(Ao[o] + t in n); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Ao[o] : "") + t;
}, As = function() {
  Uc() && window.document && (Do = window, Tr = Do.document, wi = Tr.documentElement, qr = Ls("div") || {
    style: {}
  }, Ls("div"), ht = Mi(ht), pe = ht + "Origin", qr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ol = !!Mi("perspective"), lo = ge.core.reverting, ao = 1);
}, No = function(t) {
  var e = t.ownerSVGElement, r = Ls("svg", e && e.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = t.cloneNode(!0), n;
  i.style.display = "block", r.appendChild(i), wi.appendChild(r);
  try {
    n = i.getBBox();
  } catch {
  }
  return r.removeChild(i), wi.removeChild(r), n;
}, Fo = function(t, e) {
  for (var r = e.length; r--; )
    if (t.hasAttribute(e[r]))
      return t.getAttribute(e[r]);
}, al = function(t) {
  var e, r;
  try {
    e = t.getBBox();
  } catch {
    e = No(t), r = 1;
  }
  return e && (e.width || e.height) || r || (e = No(t)), e && !e.width && !e.x && !e.y ? {
    x: +Fo(t, ["x", "cx", "x1"]) || 0,
    y: +Fo(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, ll = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && al(t));
}, Rr = function(t, e) {
  if (e) {
    var r = t.style, i;
    e in pr && e !== pe && (e = ht), r.removeProperty ? (i = e.substr(0, 2), (i === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), r.removeProperty(i === "--" ? e : e.replace(co, "-$1").toLowerCase())) : r.removeAttribute(e);
  }
}, Er = function(t, e, r, i, n, o) {
  var a = new de(t._pt, e, r, 0, 1, o ? il : rl);
  return t._pt = a, a.b = i, a.e = n, t._props.push(r), a;
}, zo = {
  deg: 1,
  rad: 1,
  turn: 1
}, ou = {
  grid: 1,
  flex: 1
}, Lr = function s(t, e, r, i) {
  var n = parseFloat(r) || 0, o = (r + "").trim().substr((n + "").length) || "px", a = qr.style, l = qc.test(e), c = t.tagName.toLowerCase() === "svg", u = (c ? "client" : "offset") + (l ? "Width" : "Height"), d = 100, h = i === "px", f = i === "%", _, p, m, x;
  if (i === o || !n || zo[i] || zo[o])
    return n;
  if (o !== "px" && !h && (n = s(t, e, r, "px")), x = t.getCTM && ll(t), (f || o === "%") && (pr[e] || ~e.indexOf("adius")))
    return _ = x ? t.getBBox()[l ? "width" : "height"] : t[u], yt(f ? n / _ * d : n / 100 * _);
  if (a[l ? "width" : "height"] = d + (h ? o : i), p = i !== "rem" && ~e.indexOf("adius") || i === "em" && t.appendChild && !c ? t : t.parentNode, x && (p = (t.ownerSVGElement || {}).parentNode), (!p || p === Tr || !p.appendChild) && (p = Tr.body), m = p._gsap, m && f && m.width && l && m.time === Te.time && !m.uncache)
    return yt(n / m.width * d);
  if (f && (e === "height" || e === "width")) {
    var y = t.style[e];
    t.style[e] = d + i, _ = t[u], y ? t.style[e] = y : Rr(t, e);
  } else
    (f || o === "%") && !ou[ke(p, "display")] && (a.position = ke(t, "position")), p === t && (a.position = "static"), p.appendChild(qr), _ = qr[u], p.removeChild(qr), a.position = "absolute";
  return l && f && (m = Gr(p), m.time = Te.time, m.width = p[u]), yt(h ? _ * n / d : _ && n ? d / _ * n : 0);
}, cr = function(t, e, r, i) {
  var n;
  return ao || As(), e in Je && e !== "transform" && (e = Je[e], ~e.indexOf(",") && (e = e.split(",")[0])), pr[e] && e !== "transform" ? (n = hn(t, i), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : Kn(ke(t, pe)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = Gn[e] && Gn[e](t, e, r) || ke(t, e) || Ca(t, e) || (e === "opacity" ? 1 : 0))), r && !~(n + "").trim().indexOf(" ") ? Lr(t, e, n, r) + r : n;
}, au = function(t, e, r, i) {
  if (!r || r === "none") {
    var n = Mi(e, t, 1), o = n && ke(t, n, 1);
    o && o !== r ? (e = n, r = o) : e === "borderColor" && (r = ke(t, "borderTopColor"));
  }
  var a = new de(this._pt, t.style, e, 0, 1, Ja), l = 0, c = 0, u, d, h, f, _, p, m, x, y, T, v, S;
  if (a.b = r, a.e = i, r += "", i += "", i.substring(0, 6) === "var(--" && (i = ke(t, i.substring(4, i.indexOf(")")))), i === "auto" && (p = t.style[e], t.style[e] = i, i = ke(t, e) || i, p ? t.style[e] = p : Rr(t, e)), u = [r, i], Ua(u), r = u[0], i = u[1], h = r.match(_i) || [], S = i.match(_i) || [], S.length) {
    for (; d = _i.exec(i); )
      m = d[0], y = i.substring(l, d.index), _ ? _ = (_ + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (_ = 1), m !== (p = h[c++] || "") && (f = parseFloat(p) || 0, v = p.substr((f + "").length), m.charAt(1) === "=" && (m = vi(f, m) + v), x = parseFloat(m), T = m.substr((x + "").length), l = _i.lastIndex - T.length, T || (T = T || Pe.units[e] || v, l === i.length && (i += T, a.e += T)), v !== T && (f = Lr(t, e, p, T) || 0), a._pt = {
        _next: a._pt,
        p: y || c === 1 ? y : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: f,
        c: x - f,
        m: _ && _ < 4 || e === "zIndex" ? Math.round : 0
      });
    a.c = l < i.length ? i.substring(l, i.length) : "";
  } else
    a.r = e === "display" && i === "none" ? il : rl;
  return ba.test(i) && (a.e = 0), this._pt = a, a;
}, Io = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, lu = function(t) {
  var e = t.split(" "), r = e[0], i = e[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (t = r, r = i, i = t), e[0] = Io[r] || r, e[1] = Io[i] || i, e.join(" ");
}, cu = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var r = e.t, i = r.style, n = e.u, o = r._gsap, a, l, c;
    if (n === "all" || n === !0)
      i.cssText = "", l = 1;
    else
      for (n = n.split(","), c = n.length; --c > -1; )
        a = n[c], pr[a] && (l = 1, a = a === "transformOrigin" ? pe : ht), Rr(r, a);
    l && (Rr(r, ht), o && (o.svg && r.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", hn(r, 1), o.uncache = 1, nl(i)));
  }
}, Gn = {
  clearProps: function(t, e, r, i, n) {
    if (n.data !== "isFromStart") {
      var o = t._pt = new de(t._pt, e, r, 0, 0, cu);
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
}, fn = [1, 0, 0, 1, 0, 0], cl = {}, ul = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, Yo = function(t) {
  var e = ke(t, ht);
  return ul(e) ? fn : e.substr(7).match(ya).map(yt);
}, uo = function(t, e) {
  var r = t._gsap || Gr(t), i = t.style, n = Yo(t), o, a, l, c;
  return r.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix, n = [l.a, l.b, l.c, l.d, l.e, l.f], n.join(",") === "1,0,0,1,0,0" ? fn : n) : (n === fn && !t.offsetParent && t !== wi && !r.svg && (l = i.display, i.display = "block", o = t.parentNode, (!o || !t.offsetParent && !t.getBoundingClientRect().width) && (c = 1, a = t.nextElementSibling, wi.appendChild(t)), n = Yo(t), l ? i.display = l : Rr(t, "display"), c && (a ? o.insertBefore(t, a) : o ? o.appendChild(t) : wi.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, Ns = function(t, e, r, i, n, o) {
  var a = t._gsap, l = n || uo(t, !0), c = a.xOrigin || 0, u = a.yOrigin || 0, d = a.xOffset || 0, h = a.yOffset || 0, f = l[0], _ = l[1], p = l[2], m = l[3], x = l[4], y = l[5], T = e.split(" "), v = parseFloat(T[0]) || 0, S = parseFloat(T[1]) || 0, k, b, P, C;
  r ? l !== fn && (b = f * m - _ * p) && (P = v * (m / b) + S * (-p / b) + (p * y - m * x) / b, C = v * (-_ / b) + S * (f / b) - (f * y - _ * x) / b, v = P, S = C) : (k = al(t), v = k.x + (~T[0].indexOf("%") ? v / 100 * k.width : v), S = k.y + (~(T[1] || T[0]).indexOf("%") ? S / 100 * k.height : S)), i || i !== !1 && a.smooth ? (x = v - c, y = S - u, a.xOffset = d + (x * f + y * p) - x, a.yOffset = h + (x * _ + y * m) - y) : a.xOffset = a.yOffset = 0, a.xOrigin = v, a.yOrigin = S, a.smooth = !!i, a.origin = e, a.originIsAbsolute = !!r, t.style[pe] = "0px 0px", o && (Er(o, a, "xOrigin", c, v), Er(o, a, "yOrigin", u, S), Er(o, a, "xOffset", d, a.xOffset), Er(o, a, "yOffset", h, a.yOffset)), t.setAttribute("data-svg-origin", v + " " + S);
}, hn = function(t, e) {
  var r = t._gsap || new Va(t);
  if ("x" in r && !e && !r.uncache)
    return r;
  var i = t.style, n = r.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(t), c = ke(t, pe) || "0", u, d, h, f, _, p, m, x, y, T, v, S, k, b, P, C, E, W, O, K, Y, Q, q, A, Z, rt, g, ot, jt, Ie, dt, Ft;
  return u = d = h = p = m = x = y = T = v = 0, f = _ = 1, r.svg = !!(t.getCTM && ll(t)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[ht] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[ht] !== "none" ? l[ht] : "")), i.scale = i.rotate = i.translate = "none"), b = uo(t, r.svg), r.svg && (r.uncache ? (Z = t.getBBox(), c = r.xOrigin - Z.x + "px " + (r.yOrigin - Z.y) + "px", A = "") : A = !e && t.getAttribute("data-svg-origin"), Ns(t, A || c, !!A || r.originIsAbsolute, r.smooth !== !1, b)), S = r.xOrigin || 0, k = r.yOrigin || 0, b !== fn && (W = b[0], O = b[1], K = b[2], Y = b[3], u = Q = b[4], d = q = b[5], b.length === 6 ? (f = Math.sqrt(W * W + O * O), _ = Math.sqrt(Y * Y + K * K), p = W || O ? li(O, W) * $r : 0, y = K || Y ? li(K, Y) * $r + p : 0, y && (_ *= Math.abs(Math.cos(y * yi))), r.svg && (u -= S - (S * W + k * K), d -= k - (S * O + k * Y))) : (Ft = b[6], Ie = b[7], g = b[8], ot = b[9], jt = b[10], dt = b[11], u = b[12], d = b[13], h = b[14], P = li(Ft, jt), m = P * $r, P && (C = Math.cos(-P), E = Math.sin(-P), A = Q * C + g * E, Z = q * C + ot * E, rt = Ft * C + jt * E, g = Q * -E + g * C, ot = q * -E + ot * C, jt = Ft * -E + jt * C, dt = Ie * -E + dt * C, Q = A, q = Z, Ft = rt), P = li(-K, jt), x = P * $r, P && (C = Math.cos(-P), E = Math.sin(-P), A = W * C - g * E, Z = O * C - ot * E, rt = K * C - jt * E, dt = Y * E + dt * C, W = A, O = Z, K = rt), P = li(O, W), p = P * $r, P && (C = Math.cos(P), E = Math.sin(P), A = W * C + O * E, Z = Q * C + q * E, O = O * C - W * E, q = q * C - Q * E, W = A, Q = Z), m && Math.abs(m) + Math.abs(p) > 359.9 && (m = p = 0, x = 180 - x), f = yt(Math.sqrt(W * W + O * O + K * K)), _ = yt(Math.sqrt(q * q + Ft * Ft)), P = li(Q, q), y = Math.abs(P) > 2e-4 ? P * $r : 0, v = dt ? 1 / (dt < 0 ? -dt : dt) : 0), r.svg && (A = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !ul(ke(t, ht)), A && t.setAttribute("transform", A))), Math.abs(y) > 90 && Math.abs(y) < 270 && (n ? (f *= -1, y += p <= 0 ? 180 : -180, p += p <= 0 ? 180 : -180) : (_ *= -1, y += y <= 0 ? 180 : -180)), e = e || r.uncache, r.x = u - ((r.xPercent = u && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + o, r.y = d - ((r.yPercent = d && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-d) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + o, r.z = h + o, r.scaleX = yt(f), r.scaleY = yt(_), r.rotation = yt(p) + a, r.rotationX = yt(m) + a, r.rotationY = yt(x) + a, r.skewX = y + a, r.skewY = T + a, r.transformPerspective = v + o, (r.zOrigin = parseFloat(c.split(" ")[2]) || !e && r.zOrigin || 0) && (i[pe] = Kn(c)), r.xOffset = r.yOffset = 0, r.force3D = Pe.force3D, r.renderTransform = r.svg ? fu : ol ? fl : uu, r.uncache = 0, r;
}, Kn = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, hs = function(t, e, r) {
  var i = Kt(e);
  return yt(parseFloat(e) + parseFloat(Lr(t, "x", r + "px", i))) + i;
}, uu = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, fl(t, e);
}, Wr = "0deg", Fi = "0px", Xr = ") ", fl = function(t, e) {
  var r = e || this, i = r.xPercent, n = r.yPercent, o = r.x, a = r.y, l = r.z, c = r.rotation, u = r.rotationY, d = r.rotationX, h = r.skewX, f = r.skewY, _ = r.scaleX, p = r.scaleY, m = r.transformPerspective, x = r.force3D, y = r.target, T = r.zOrigin, v = "", S = x === "auto" && t && t !== 1 || x === !0;
  if (T && (d !== Wr || u !== Wr)) {
    var k = parseFloat(u) * yi, b = Math.sin(k), P = Math.cos(k), C;
    k = parseFloat(d) * yi, C = Math.cos(k), o = hs(y, o, b * C * -T), a = hs(y, a, -Math.sin(k) * -T), l = hs(y, l, P * C * -T + T);
  }
  m !== Fi && (v += "perspective(" + m + Xr), (i || n) && (v += "translate(" + i + "%, " + n + "%) "), (S || o !== Fi || a !== Fi || l !== Fi) && (v += l !== Fi || S ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Xr), c !== Wr && (v += "rotate(" + c + Xr), u !== Wr && (v += "rotateY(" + u + Xr), d !== Wr && (v += "rotateX(" + d + Xr), (h !== Wr || f !== Wr) && (v += "skew(" + h + ", " + f + Xr), (_ !== 1 || p !== 1) && (v += "scale(" + _ + ", " + p + Xr), y.style[ht] = v || "translate(0, 0)";
}, fu = function(t, e) {
  var r = e || this, i = r.xPercent, n = r.yPercent, o = r.x, a = r.y, l = r.rotation, c = r.skewX, u = r.skewY, d = r.scaleX, h = r.scaleY, f = r.target, _ = r.xOrigin, p = r.yOrigin, m = r.xOffset, x = r.yOffset, y = r.forceCSS, T = parseFloat(o), v = parseFloat(a), S, k, b, P, C;
  l = parseFloat(l), c = parseFloat(c), u = parseFloat(u), u && (u = parseFloat(u), c += u, l += u), l || c ? (l *= yi, c *= yi, S = Math.cos(l) * d, k = Math.sin(l) * d, b = Math.sin(l - c) * -h, P = Math.cos(l - c) * h, c && (u *= yi, C = Math.tan(c - u), C = Math.sqrt(1 + C * C), b *= C, P *= C, u && (C = Math.tan(u), C = Math.sqrt(1 + C * C), S *= C, k *= C)), S = yt(S), k = yt(k), b = yt(b), P = yt(P)) : (S = d, P = h, k = b = 0), (T && !~(o + "").indexOf("px") || v && !~(a + "").indexOf("px")) && (T = Lr(f, "x", o, "px"), v = Lr(f, "y", a, "px")), (_ || p || m || x) && (T = yt(T + _ - (_ * S + p * b) + m), v = yt(v + p - (_ * k + p * P) + x)), (i || n) && (C = f.getBBox(), T = yt(T + i / 100 * C.width), v = yt(v + n / 100 * C.height)), C = "matrix(" + S + "," + k + "," + b + "," + P + "," + T + "," + v + ")", f.setAttribute("transform", C), y && (f.style[ht] = C);
}, hu = function(t, e, r, i, n) {
  var o = 360, a = Nt(n), l = parseFloat(n) * (a && ~n.indexOf("rad") ? $r : 1), c = l - i, u = i + c + "deg", d, h;
  return a && (d = n.split("_")[1], d === "short" && (c %= o, c !== c % (o / 2) && (c += c < 0 ? o : -o)), d === "cw" && c < 0 ? c = (c + o * Lo) % o - ~~(c / o) * o : d === "ccw" && c > 0 && (c = (c - o * Lo) % o - ~~(c / o) * o)), t._pt = h = new de(t._pt, e, r, i, c, Gc), h.e = u, h.u = "deg", t._props.push(r), h;
}, Bo = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, du = function(t, e, r) {
  var i = Bo({}, r._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", o = r.style, a, l, c, u, d, h, f, _;
  i.svg ? (c = r.getAttribute("transform"), r.setAttribute("transform", ""), o[ht] = e, a = hn(r, 1), Rr(r, ht), r.setAttribute("transform", c)) : (c = getComputedStyle(r)[ht], o[ht] = e, a = hn(r, 1), o[ht] = c);
  for (l in pr)
    c = i[l], u = a[l], c !== u && n.indexOf(l) < 0 && (f = Kt(c), _ = Kt(u), d = f !== _ ? Lr(r, l, c, _) : parseFloat(c), h = parseFloat(u), t._pt = new de(t._pt, a, l, d, h - d, Rs), t._pt.u = _ || 0, t._props.push(l));
  Bo(a, i);
};
he("padding,margin,Width,Radius", function(s, t) {
  var e = "Top", r = "Right", i = "Bottom", n = "Left", o = (t < 3 ? [e, r, i, n] : [e + n, e + r, i + r, i + n]).map(function(a) {
    return t < 2 ? s + a : "border" + a + s;
  });
  Gn[t > 1 ? "border" + s : s] = function(a, l, c, u, d) {
    var h, f;
    if (arguments.length < 4)
      return h = o.map(function(_) {
        return cr(a, _, c);
      }), f = h.join(" "), f.split(h[0]).length === 5 ? h[0] : f;
    h = (u + "").split(" "), f = {}, o.forEach(function(_, p) {
      return f[_] = h[p] = h[p] || h[(p - 1) / 2 | 0];
    }), a.init(l, f, d);
  };
});
var hl = {
  name: "css",
  register: As,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, r, i, n) {
    var o = this._props, a = t.style, l = r.vars.startAt, c, u, d, h, f, _, p, m, x, y, T, v, S, k, b, P, C;
    ao || As(), this.styles = this.styles || sl(t), P = this.styles.props, this.tween = r;
    for (p in e)
      if (p !== "autoRound" && (u = e[p], !(xe[p] && Ga(p, e, r, i, t, n)))) {
        if (f = typeof u, _ = Gn[p], f === "function" && (u = u.call(r, i, t, n), f = typeof u), f === "string" && ~u.indexOf("random(") && (u = ln(u)), _)
          _(this, t, p, u, r) && (b = 1);
        else if (p.substr(0, 2) === "--")
          c = (getComputedStyle(t).getPropertyValue(p) + "").trim(), u += "", Mr.lastIndex = 0, Mr.test(c) || (m = Kt(c), x = Kt(u), x ? m !== x && (c = Lr(t, p, c, x) + x) : m && (u += m)), this.add(a, "setProperty", c, u, i, n, 0, 0, p), o.push(p), P.push(p, 0, a[p]);
        else if (f !== "undefined") {
          if (l && p in l ? (c = typeof l[p] == "function" ? l[p].call(r, i, t, n) : l[p], Nt(c) && ~c.indexOf("random(") && (c = ln(c)), Kt(c + "") || c === "auto" || (c += Pe.units[p] || Kt(cr(t, p)) || ""), (c + "").charAt(1) === "=" && (c = cr(t, p))) : c = cr(t, p), h = parseFloat(c), y = f === "string" && u.charAt(1) === "=" && u.substr(0, 2), y && (u = u.substr(2)), d = parseFloat(u), p in Je && (p === "autoAlpha" && (h === 1 && cr(t, "visibility") === "hidden" && d && (h = 0), P.push("visibility", 0, a.visibility), Er(this, a, "visibility", h ? "inherit" : "hidden", d ? "inherit" : "hidden", !d)), p !== "scale" && p !== "transform" && (p = Je[p], ~p.indexOf(",") && (p = p.split(",")[0]))), T = p in pr, T) {
            if (this.styles.save(p), C = u, f === "string" && u.substring(0, 6) === "var(--") {
              if (u = ke(t, u.substring(4, u.indexOf(")"))), u.substring(0, 5) === "calc(") {
                var E = t.style.perspective;
                t.style.perspective = u, u = ke(t, "perspective"), E ? t.style.perspective = E : Rr(t, "perspective");
              }
              d = parseFloat(u);
            }
            if (v || (S = t._gsap, S.renderTransform && !e.parseTransform || hn(t, e.parseTransform), k = e.smoothOrigin !== !1 && S.smooth, v = this._pt = new de(this._pt, a, ht, 0, 1, S.renderTransform, S, 0, -1), v.dep = 1), p === "scale")
              this._pt = new de(this._pt, S, "scaleY", S.scaleY, (y ? vi(S.scaleY, y + d) : d) - S.scaleY || 0, Rs), this._pt.u = 0, o.push("scaleY", p), p += "X";
            else if (p === "transformOrigin") {
              P.push(pe, 0, a[pe]), u = lu(u), S.svg ? Ns(t, u, 0, k, 0, this) : (x = parseFloat(u.split(" ")[2]) || 0, x !== S.zOrigin && Er(this, S, "zOrigin", S.zOrigin, x), Er(this, a, p, Kn(c), Kn(u)));
              continue;
            } else if (p === "svgOrigin") {
              Ns(t, u, 1, k, 0, this);
              continue;
            } else if (p in cl) {
              hu(this, S, p, h, y ? vi(h, y + u) : u);
              continue;
            } else if (p === "smoothOrigin") {
              Er(this, S, "smooth", S.smooth, u);
              continue;
            } else if (p === "force3D") {
              S[p] = u;
              continue;
            } else if (p === "transform") {
              du(this, u, t);
              continue;
            }
          } else p in a || (p = Mi(p) || p);
          if (T || (d || d === 0) && (h || h === 0) && !Vc.test(u) && p in a)
            m = (c + "").substr((h + "").length), d || (d = 0), x = Kt(u) || (p in Pe.units ? Pe.units[p] : m), m !== x && (h = Lr(t, p, c, x)), this._pt = new de(this._pt, T ? S : a, p, h, (y ? vi(h, y + d) : d) - h, !T && (x === "px" || p === "zIndex") && e.autoRound !== !1 ? Zc : Rs), this._pt.u = x || 0, T && C !== u ? (this._pt.b = c, this._pt.e = C, this._pt.r = Qc) : m !== x && x !== "%" && (this._pt.b = c, this._pt.r = Kc);
          else if (p in a)
            au.call(this, t, p, c, y ? y + u : u);
          else if (p in t)
            this.add(t, p, c || t[p], y ? y + u : u, i, n);
          else if (p !== "parseTransform") {
            Zs(p, u);
            continue;
          }
          T || (p in a ? P.push(p, 0, a[p]) : typeof t[p] == "function" ? P.push(p, 2, t[p]()) : P.push(p, 1, c || t[p])), o.push(p);
        }
      }
    b && tl(this);
  },
  render: function(t, e) {
    if (e.tween._time || !lo())
      for (var r = e._pt; r; )
        r.r(t, r.d), r = r._next;
    else
      e.styles.revert();
  },
  get: cr,
  aliases: Je,
  getSetter: function(t, e, r) {
    var i = Je[e];
    return i && i.indexOf(",") < 0 && (e = i), e in pr && e !== pe && (t._gsap.x || cr(t, "x")) ? r && Ro === r ? e === "scale" ? eu : tu : (Ro = r || {}) && (e === "scale" ? ru : iu) : t.style && !Gs(t.style[e]) ? jc : ~e.indexOf("-") ? Jc : so(t, e);
  },
  core: {
    _removeProperty: Rr,
    _getMatrix: uo
  }
};
ge.utils.checkPrefix = Mi;
ge.core.getStyleSaver = sl;
(function(s, t, e, r) {
  var i = he(s + "," + t + "," + e, function(n) {
    pr[n] = 1;
  });
  he(t, function(n) {
    Pe.units[n] = "deg", cl[n] = 1;
  }), Je[i[13]] = s + "," + t, he(r, function(n) {
    var o = n.split(":");
    Je[o[1]] = i[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
he("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s) {
  Pe.units[s] = "px";
});
ge.registerPlugin(hl);
var Mt = ge.registerPlugin(hl) || ge;
Mt.core.Tween;
function pu(s, t) {
  for (var e = 0; e < t.length; e++) {
    var r = t[e];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(s, r.key, r);
  }
}
function _u(s, t, e) {
  return t && pu(s.prototype, t), s;
}
/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Yt, Fn, Ee, Cr, kr, bi, dl, Hr, xi, pl, fr, He, _l, gl = function() {
  return Yt || typeof window < "u" && (Yt = window.gsap) && Yt.registerPlugin && Yt;
}, ml = 1, mi = [], H = [], er = [], Ki = Date.now, Fs = function(t, e) {
  return e;
}, gu = function() {
  var t = xi.core, e = t.bridge || {}, r = t._scrollers, i = t._proxies;
  r.push.apply(r, H), i.push.apply(i, er), H = r, er = i, Fs = function(o, a) {
    return e[o](a);
  };
}, Or = function(t, e) {
  return ~er.indexOf(t) && er[er.indexOf(t) + 1][e];
}, Qi = function(t) {
  return !!~pl.indexOf(t);
}, ie = function(t, e, r, i, n) {
  return t.addEventListener(e, r, {
    passive: i !== !1,
    capture: !!n
  });
}, re = function(t, e, r, i) {
  return t.removeEventListener(e, r, !!i);
}, bn = "scrollLeft", xn = "scrollTop", zs = function() {
  return fr && fr.isPressed || H.cache++;
}, Qn = function(t, e) {
  var r = function i(n) {
    if (n || n === 0) {
      ml && (Ee.history.scrollRestoration = "manual");
      var o = fr && fr.isPressed;
      n = i.v = Math.round(n) || (fr && fr.iOS ? 1 : 0), t(n), i.cacheID = H.cache, o && Fs("ss", n);
    } else (e || H.cache !== i.cacheID || Fs("ref")) && (i.cacheID = H.cache, i.v = t());
    return i.v + i.offset;
  };
  return r.offset = 0, t && r;
}, ae = {
  s: bn,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: Qn(function(s) {
    return arguments.length ? Ee.scrollTo(s, Ot.sc()) : Ee.pageXOffset || Cr[bn] || kr[bn] || bi[bn] || 0;
  })
}, Ot = {
  s: xn,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: ae,
  sc: Qn(function(s) {
    return arguments.length ? Ee.scrollTo(ae.sc(), s) : Ee.pageYOffset || Cr[xn] || kr[xn] || bi[xn] || 0;
  })
}, ce = function(t, e) {
  return (e && e._ctx && e._ctx.selector || Yt.utils.toArray)(t)[0] || (typeof t == "string" && Yt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", t) : null);
}, mu = function(t, e) {
  for (var r = e.length; r--; )
    if (e[r] === t || e[r].contains(t))
      return !0;
  return !1;
}, Ar = function(t, e) {
  var r = e.s, i = e.sc;
  Qi(t) && (t = Cr.scrollingElement || kr);
  var n = H.indexOf(t), o = i === Ot.sc ? 1 : 2;
  !~n && (n = H.push(t) - 1), H[n + o] || ie(t, "scroll", zs);
  var a = H[n + o], l = a || (H[n + o] = Qn(Or(t, r), !0) || (Qi(t) ? i : Qn(function(c) {
    return arguments.length ? t[r] = c : t[r];
  })));
  return l.target = t, a || (l.smooth = Yt.getProperty(t, "scrollBehavior") === "smooth"), l;
}, Is = function(t, e, r) {
  var i = t, n = t, o = Ki(), a = o, l = e || 50, c = Math.max(500, l * 3), u = function(_, p) {
    var m = Ki();
    p || m - o > l ? (n = i, i = _, a = o, o = m) : r ? i += _ : i = n + (_ - n) / (m - a) * (o - a);
  }, d = function() {
    n = i = r ? 0 : i, a = o = 0;
  }, h = function(_) {
    var p = a, m = n, x = Ki();
    return (_ || _ === 0) && _ !== i && u(_), o === a || x - a > c ? 0 : (i + (r ? m : -m)) / ((r ? x : o) - p) * 1e3;
  };
  return {
    update: u,
    reset: d,
    getVelocity: h
  };
}, zi = function(t, e) {
  return e && !t._gsapAllow && t.cancelable !== !1 && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t;
}, Wo = function(t) {
  var e = Math.max.apply(Math, t), r = Math.min.apply(Math, t);
  return Math.abs(e) >= Math.abs(r) ? e : r;
}, vl = function() {
  xi = Yt.core.globals().ScrollTrigger, xi && xi.core && gu();
}, wl = function(t) {
  return Yt = t || gl(), !Fn && Yt && typeof document < "u" && document.body && (Ee = window, Cr = document, kr = Cr.documentElement, bi = Cr.body, pl = [Ee, Cr, kr, bi], Yt.utils.clamp, _l = Yt.core.context || function() {
  }, Hr = "onpointerenter" in bi ? "pointer" : "mouse", dl = bt.isTouch = Ee.matchMedia && Ee.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Ee || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, He = bt.eventTypes = ("ontouchstart" in kr ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in kr ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return ml = 0;
  }, 500), Fn = 1), xi || vl(), Fn;
};
ae.op = Ot;
H.cache = 0;
var bt = /* @__PURE__ */ function() {
  function s(e) {
    this.init(e);
  }
  var t = s.prototype;
  return t.init = function(r) {
    Fn || wl(Yt) || console.warn("Please gsap.registerPlugin(Observer)"), xi || vl();
    var i = r.tolerance, n = r.dragMinimum, o = r.type, a = r.target, l = r.lineHeight, c = r.debounce, u = r.preventDefault, d = r.onStop, h = r.onStopDelay, f = r.ignore, _ = r.wheelSpeed, p = r.event, m = r.onDragStart, x = r.onDragEnd, y = r.onDrag, T = r.onPress, v = r.onRelease, S = r.onRight, k = r.onLeft, b = r.onUp, P = r.onDown, C = r.onChangeX, E = r.onChangeY, W = r.onChange, O = r.onToggleX, K = r.onToggleY, Y = r.onHover, Q = r.onHoverEnd, q = r.onMove, A = r.ignoreCheck, Z = r.isNormalizer, rt = r.onGestureStart, g = r.onGestureEnd, ot = r.onWheel, jt = r.onEnable, Ie = r.onDisable, dt = r.onClick, Ft = r.scrollSpeed, Xt = r.capture, St = r.allowClicks, Jt = r.lockAxis, $t = r.onLockAxis;
    this.target = a = ce(a) || kr, this.vars = r, f && (f = Yt.utils.toArray(f)), i = i || 1e-9, n = n || 0, _ = _ || 1, Ft = Ft || 1, o = o || "wheel,touch,pointer", c = c !== !1, l || (l = parseFloat(Ee.getComputedStyle(bi).lineHeight) || 22);
    var _r, te, ee, j, mt, le, me, w = this, ve = 0, ir = 0, gr = r.passive || !u && r.passive !== !1, pt = Ar(a, ae), nr = Ar(a, Ot), mr = pt(), Fr = nr(), Dt = ~o.indexOf("touch") && !~o.indexOf("pointer") && He[0] === "pointerdown", vr = Qi(a), vt = a.ownerDocument || Cr, Ye = [0, 0, 0], De = [0, 0, 0], sr = 0, Ri = function() {
      return sr = Ki();
    }, Tt = function(N, J) {
      return (w.event = N) && f && mu(N.target, f) || J && Dt && N.pointerType !== "touch" || A && A(N, J);
    }, mn = function() {
      w._vx.reset(), w._vy.reset(), te.pause(), d && d(w);
    }, or = function() {
      var N = w.deltaX = Wo(Ye), J = w.deltaY = Wo(De), M = Math.abs(N) >= i, F = Math.abs(J) >= i;
      W && (M || F) && W(w, N, J, Ye, De), M && (S && w.deltaX > 0 && S(w), k && w.deltaX < 0 && k(w), C && C(w), O && w.deltaX < 0 != ve < 0 && O(w), ve = w.deltaX, Ye[0] = Ye[1] = Ye[2] = 0), F && (P && w.deltaY > 0 && P(w), b && w.deltaY < 0 && b(w), E && E(w), K && w.deltaY < 0 != ir < 0 && K(w), ir = w.deltaY, De[0] = De[1] = De[2] = 0), (j || ee) && (q && q(w), ee && (m && ee === 1 && m(w), y && y(w), ee = 0), j = !1), le && !(le = !1) && $t && $t(w), mt && (ot(w), mt = !1), _r = 0;
    }, si = function(N, J, M) {
      Ye[M] += N, De[M] += J, w._vx.update(N), w._vy.update(J), c ? _r || (_r = requestAnimationFrame(or)) : or();
    }, oi = function(N, J) {
      Jt && !me && (w.axis = me = Math.abs(N) > Math.abs(J) ? "x" : "y", le = !0), me !== "y" && (Ye[2] += N, w._vx.update(N, !0)), me !== "x" && (De[2] += J, w._vy.update(J, !0)), c ? _r || (_r = requestAnimationFrame(or)) : or();
    }, wr = function(N) {
      if (!Tt(N, 1)) {
        N = zi(N, u);
        var J = N.clientX, M = N.clientY, F = J - w.x, L = M - w.y, z = w.isDragging;
        w.x = J, w.y = M, (z || (F || L) && (Math.abs(w.startX - J) >= n || Math.abs(w.startY - M) >= n)) && (ee || (ee = z ? 2 : 1), z || (w.isDragging = !0), oi(F, L));
      }
    }, zr = w.onPress = function(B) {
      Tt(B, 1) || B && B.button || (w.axis = me = null, te.pause(), w.isPressed = !0, B = zi(B), ve = ir = 0, w.startX = w.x = B.clientX, w.startY = w.y = B.clientY, w._vx.reset(), w._vy.reset(), ie(Z ? a : vt, He[1], wr, gr, !0), w.deltaX = w.deltaY = 0, T && T(w));
    }, U = w.onRelease = function(B) {
      if (!Tt(B, 1)) {
        re(Z ? a : vt, He[1], wr, !0);
        var N = !isNaN(w.y - w.startY), J = w.isDragging, M = J && (Math.abs(w.x - w.startX) > 3 || Math.abs(w.y - w.startY) > 3), F = zi(B);
        !M && N && (w._vx.reset(), w._vy.reset(), u && St && Yt.delayedCall(0.08, function() {
          if (Ki() - sr > 300 && !B.defaultPrevented) {
            if (B.target.click)
              B.target.click();
            else if (vt.createEvent) {
              var L = vt.createEvent("MouseEvents");
              L.initMouseEvent("click", !0, !0, Ee, 1, F.screenX, F.screenY, F.clientX, F.clientY, !1, !1, !1, !1, 0, null), B.target.dispatchEvent(L);
            }
          }
        })), w.isDragging = w.isGesturing = w.isPressed = !1, d && J && !Z && te.restart(!0), ee && or(), x && J && x(w), v && v(w, M);
      }
    }, Ir = function(N) {
      return N.touches && N.touches.length > 1 && (w.isGesturing = !0) && rt(N, w.isDragging);
    }, Be = function() {
      return (w.isGesturing = !1) || g(w);
    }, We = function(N) {
      if (!Tt(N)) {
        var J = pt(), M = nr();
        si((J - mr) * Ft, (M - Fr) * Ft, 1), mr = J, Fr = M, d && te.restart(!0);
      }
    }, Xe = function(N) {
      if (!Tt(N)) {
        N = zi(N, u), ot && (mt = !0);
        var J = (N.deltaMode === 1 ? l : N.deltaMode === 2 ? Ee.innerHeight : 1) * _;
        si(N.deltaX * J, N.deltaY * J, 0), d && !Z && te.restart(!0);
      }
    }, Yr = function(N) {
      if (!Tt(N)) {
        var J = N.clientX, M = N.clientY, F = J - w.x, L = M - w.y;
        w.x = J, w.y = M, j = !0, d && te.restart(!0), (F || L) && oi(F, L);
      }
    }, ai = function(N) {
      w.event = N, Y(w);
    }, ar = function(N) {
      w.event = N, Q(w);
    }, Li = function(N) {
      return Tt(N) || zi(N, u) && dt(w);
    };
    te = w._dc = Yt.delayedCall(h || 0.25, mn).pause(), w.deltaX = w.deltaY = 0, w._vx = Is(0, 50, !0), w._vy = Is(0, 50, !0), w.scrollX = pt, w.scrollY = nr, w.isDragging = w.isGesturing = w.isPressed = !1, _l(this), w.enable = function(B) {
      return w.isEnabled || (ie(vr ? vt : a, "scroll", zs), o.indexOf("scroll") >= 0 && ie(vr ? vt : a, "scroll", We, gr, Xt), o.indexOf("wheel") >= 0 && ie(a, "wheel", Xe, gr, Xt), (o.indexOf("touch") >= 0 && dl || o.indexOf("pointer") >= 0) && (ie(a, He[0], zr, gr, Xt), ie(vt, He[2], U), ie(vt, He[3], U), St && ie(a, "click", Ri, !0, !0), dt && ie(a, "click", Li), rt && ie(vt, "gesturestart", Ir), g && ie(vt, "gestureend", Be), Y && ie(a, Hr + "enter", ai), Q && ie(a, Hr + "leave", ar), q && ie(a, Hr + "move", Yr)), w.isEnabled = !0, w.isDragging = w.isGesturing = w.isPressed = j = ee = !1, w._vx.reset(), w._vy.reset(), mr = pt(), Fr = nr(), B && B.type && zr(B), jt && jt(w)), w;
    }, w.disable = function() {
      w.isEnabled && (mi.filter(function(B) {
        return B !== w && Qi(B.target);
      }).length || re(vr ? vt : a, "scroll", zs), w.isPressed && (w._vx.reset(), w._vy.reset(), re(Z ? a : vt, He[1], wr, !0)), re(vr ? vt : a, "scroll", We, Xt), re(a, "wheel", Xe, Xt), re(a, He[0], zr, Xt), re(vt, He[2], U), re(vt, He[3], U), re(a, "click", Ri, !0), re(a, "click", Li), re(vt, "gesturestart", Ir), re(vt, "gestureend", Be), re(a, Hr + "enter", ai), re(a, Hr + "leave", ar), re(a, Hr + "move", Yr), w.isEnabled = w.isPressed = w.isDragging = !1, Ie && Ie(w));
    }, w.kill = w.revert = function() {
      w.disable();
      var B = mi.indexOf(w);
      B >= 0 && mi.splice(B, 1), fr === w && (fr = 0);
    }, mi.push(w), Z && Qi(a) && (fr = w), w.enable(p);
  }, _u(s, [{
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
bt.register = wl;
bt.getAll = function() {
  return mi.slice();
};
bt.getById = function(s) {
  return mi.filter(function(t) {
    return t.vars.id === s;
  })[0];
};
gl() && Yt.registerPlugin(bt);
/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var D, di, $, et, Se, tt, fo, Zn, dn, Zi, Wi, Sn, Vt, is, Ys, se, Xo, $o, pi, yl, ds, bl, ne, Bs, xl, Sl, xr, Ws, ho, Si, po, ji, Xs, ps, Tn = 1, Gt = Date.now, _s = Gt(), ze = 0, Xi = 0, Ho = function(t, e, r) {
  var i = be(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
  return r["_" + e + "Clamp"] = i, i ? t.substr(6, t.length - 7) : t;
}, Uo = function(t, e) {
  return e && (!be(t) || t.substr(0, 6) !== "clamp(") ? "clamp(" + t + ")" : t;
}, vu = function s() {
  return Xi && requestAnimationFrame(s);
}, qo = function() {
  return is = 1;
}, Vo = function() {
  return is = 0;
}, Qe = function(t) {
  return t;
}, $i = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, Tl = function() {
  return typeof window < "u";
}, El = function() {
  return D || Tl() && (D = window.gsap) && D.registerPlugin && D;
}, ei = function(t) {
  return !!~fo.indexOf(t);
}, Cl = function(t) {
  return (t === "Height" ? po : $["inner" + t]) || Se["client" + t] || tt["client" + t];
}, kl = function(t) {
  return Or(t, "getBoundingClientRect") || (ei(t) ? function() {
    return Wn.width = $.innerWidth, Wn.height = po, Wn;
  } : function() {
    return ur(t);
  });
}, wu = function(t, e, r) {
  var i = r.d, n = r.d2, o = r.a;
  return (o = Or(t, "getBoundingClientRect")) ? function() {
    return o()[i];
  } : function() {
    return (e ? Cl(n) : t["client" + n]) || 0;
  };
}, yu = function(t, e) {
  return !e || ~er.indexOf(t) ? kl(t) : function() {
    return Wn;
  };
}, tr = function(t, e) {
  var r = e.s, i = e.d2, n = e.d, o = e.a;
  return Math.max(0, (r = "scroll" + i) && (o = Or(t, r)) ? o() - kl(t)()[n] : ei(t) ? (Se[r] || tt[r]) - Cl(i) : t[r] - t["offset" + i]);
}, En = function(t, e) {
  for (var r = 0; r < pi.length; r += 3)
    (!e || ~e.indexOf(pi[r + 1])) && t(pi[r], pi[r + 1], pi[r + 2]);
}, be = function(t) {
  return typeof t == "string";
}, Qt = function(t) {
  return typeof t == "function";
}, Hi = function(t) {
  return typeof t == "number";
}, Ur = function(t) {
  return typeof t == "object";
}, Ii = function(t, e, r) {
  return t && t.progress(e ? 0 : 1) && r && t.pause();
}, ci = function(t, e, r) {
  if (t.enabled) {
    var i = t._ctx ? t._ctx.add(function() {
      return e(t, r);
    }) : e(t, r);
    i && i.totalTime && (t.callbackAnimation = i);
  }
}, ui = Math.abs, Pl = "left", Ml = "top", _o = "right", go = "bottom", jr = "width", Jr = "height", Ji = "Right", tn = "Left", en = "Top", rn = "Bottom", Et = "padding", Le = "margin", Oi = "Width", mo = "Height", Pt = "px", Ae = function(t) {
  return $.getComputedStyle(t.nodeType === Node.DOCUMENT_NODE ? t.scrollingElement : t);
}, bu = function(t) {
  var e = Ae(t).position;
  t.style.position = e === "absolute" || e === "fixed" ? e : "relative";
}, Go = function(t, e) {
  for (var r in e)
    r in t || (t[r] = e[r]);
  return t;
}, ur = function(t, e) {
  var r = e && Ae(t)[Ys] !== "matrix(1, 0, 0, 1, 0, 0)" && D.to(t, {
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
}, jn = function(t, e) {
  var r = e.d2;
  return t["offset" + r] || t["client" + r] || 0;
}, Ol = function(t) {
  var e = [], r = t.labels, i = t.duration(), n;
  for (n in r)
    e.push(r[n] / i);
  return e;
}, xu = function(t) {
  return function(e) {
    return D.utils.snap(Ol(t), e);
  };
}, vo = function(t) {
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
}, Su = function(t) {
  return function(e, r) {
    return vo(Ol(t))(e, r.direction);
  };
}, Cn = function(t, e, r, i) {
  return r.split(",").forEach(function(n) {
    return t(e, n, i);
  });
}, At = function(t, e, r, i, n) {
  return t.addEventListener(e, r, {
    passive: !i,
    capture: !!n
  });
}, Lt = function(t, e, r, i) {
  return t.removeEventListener(e, r, !!i);
}, kn = function(t, e, r) {
  r = r && r.wheelHandler, r && (t(e, "wheel", r), t(e, "touchmove", r));
}, Ko = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, Pn = {
  toggleActions: "play",
  anticipatePin: 0
}, Jn = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, zn = function(t, e) {
  if (be(t)) {
    var r = t.indexOf("="), i = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
    ~r && (t.indexOf("%") > r && (i *= e / 100), t = t.substr(0, r - 1)), t = i + (t in Jn ? Jn[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0);
  }
  return t;
}, Mn = function(t, e, r, i, n, o, a, l) {
  var c = n.startColor, u = n.endColor, d = n.fontSize, h = n.indent, f = n.fontWeight, _ = et.createElement("div"), p = ei(r) || Or(r, "pinType") === "fixed", m = t.indexOf("scroller") !== -1, x = p ? tt : r.tagName === "IFRAME" ? r.contentDocument.body : r, y = t.indexOf("start") !== -1, T = y ? c : u, v = "border-color:" + T + ";font-size:" + d + ";color:" + T + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return v += "position:" + ((m || l) && p ? "fixed;" : "absolute;"), (m || l || !p) && (v += (i === Ot ? _o : go) + ":" + (o + parseFloat(h)) + "px;"), a && (v += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), _._isStart = y, _.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), _.style.cssText = v, _.innerText = e || e === 0 ? t + "-" + e : t, x.children[0] ? x.insertBefore(_, x.children[0]) : x.appendChild(_), _._offset = _["offset" + i.op.d2], In(_, 0, i, y), _;
}, In = function(t, e, r, i) {
  var n = {
    display: "block"
  }, o = r[i ? "os2" : "p2"], a = r[i ? "p2" : "os2"];
  t._isFlipped = i, n[r.a + "Percent"] = i ? -100 : 0, n[r.a] = i ? "1px" : 0, n["border" + o + Oi] = 1, n["border" + a + Oi] = 0, n[r.p] = e + "px", D.set(t, n);
}, X = [], $s = {}, pn, Qo = function() {
  return Gt() - ze > 34 && (pn || (pn = requestAnimationFrame(hr)));
}, fi = function() {
  (!ne || !ne.isPressed || ne.startX > tt.clientWidth) && (H.cache++, ne ? pn || (pn = requestAnimationFrame(hr)) : hr(), ze || ii("scrollStart"), ze = Gt());
}, gs = function() {
  Sl = $.innerWidth, xl = $.innerHeight;
}, Ui = function(t) {
  H.cache++, (t === !0 || !Vt && !bl && !et.fullscreenElement && !et.webkitFullscreenElement && (!Bs || Sl !== $.innerWidth || Math.abs($.innerHeight - xl) > $.innerHeight * 0.25)) && Zn.restart(!0);
}, ri = {}, Tu = [], Dl = function s() {
  return Lt(I, "scrollEnd", s) || Vr(!0);
}, ii = function(t) {
  return ri[t] && ri[t].map(function(e) {
    return e();
  }) || Tu;
}, ye = [], Rl = function(t) {
  for (var e = 0; e < ye.length; e += 5)
    (!t || ye[e + 4] && ye[e + 4].query === t) && (ye[e].style.cssText = ye[e + 1], ye[e].getBBox && ye[e].setAttribute("transform", ye[e + 2] || ""), ye[e + 3].uncache = 1);
}, Ll = function() {
  return H.forEach(function(t) {
    return Qt(t) && ++t.cacheID && (t.rec = t());
  });
}, wo = function(t, e) {
  var r;
  for (se = 0; se < X.length; se++)
    r = X[se], r && (!e || r._ctx === e) && (t ? r.kill(1) : r.revert(!0, !0));
  ji = !0, e && Rl(e), e || ii("revert");
}, Al = function(t, e) {
  H.cache++, (e || !oe) && H.forEach(function(r) {
    return Qt(r) && r.cacheID++ && (r.rec = 0);
  }), be(t) && ($.history.scrollRestoration = ho = t);
}, oe, ti = 0, Zo, Eu = function() {
  if (Zo !== ti) {
    var t = Zo = ti;
    requestAnimationFrame(function() {
      return t === ti && Vr(!0);
    });
  }
}, Nl = function() {
  tt.appendChild(Si), po = !ne && Si.offsetHeight || $.innerHeight, tt.removeChild(Si);
}, jo = function(t) {
  return dn(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e) {
    return e.style.display = t ? "none" : "block";
  });
}, Vr = function(t, e) {
  if (Se = et.documentElement, tt = et.body, fo = [$, et, Se, tt], ze && !t && !ji) {
    At(I, "scrollEnd", Dl);
    return;
  }
  Nl(), oe = I.isRefreshing = !0, ji || Ll();
  var r = ii("refreshInit");
  yl && I.sort(), e || wo(), H.forEach(function(i) {
    Qt(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
  }), X.slice(0).forEach(function(i) {
    return i.refresh();
  }), ji = !1, X.forEach(function(i) {
    if (i._subPinOffset && i.pin) {
      var n = i.vars.horizontal ? "offsetWidth" : "offsetHeight", o = i.pin[n];
      i.revert(!0, 1), i.adjustPinSpacing(i.pin[n] - o), i.refresh();
    }
  }), Xs = 1, jo(!0), X.forEach(function(i) {
    var n = tr(i.scroller, i._dir), o = i.vars.end === "max" || i._endClamp && i.end > n, a = i._startClamp && i.start >= n;
    (o || a) && i.setPositions(a ? n - 1 : i.start, o ? Math.max(a ? n : i.start + 1, n) : i.end, !0);
  }), jo(!1), Xs = 0, r.forEach(function(i) {
    return i && i.render && i.render(-1);
  }), H.forEach(function(i) {
    Qt(i) && (i.smooth && requestAnimationFrame(function() {
      return i.target.style.scrollBehavior = "smooth";
    }), i.rec && i(i.rec));
  }), Al(ho, 1), Zn.pause(), ti++, oe = 2, hr(2), X.forEach(function(i) {
    return Qt(i.vars.onRefresh) && i.vars.onRefresh(i);
  }), oe = I.isRefreshing = !1, ii("refresh");
}, Hs = 0, Yn = 1, nn, hr = function(t) {
  if (t === 2 || !oe && !ji) {
    I.isUpdating = !0, nn && nn.update(0);
    var e = X.length, r = Gt(), i = r - _s >= 50, n = e && X[0].scroll();
    if (Yn = Hs > n ? -1 : 1, oe || (Hs = n), i && (ze && !is && r - ze > 200 && (ze = 0, ii("scrollEnd")), Wi = _s, _s = r), Yn < 0) {
      for (se = e; se-- > 0; )
        X[se] && X[se].update(0, i);
      Yn = 1;
    } else
      for (se = 0; se < e; se++)
        X[se] && X[se].update(0, i);
    I.isUpdating = !1;
  }
  pn = 0;
}, Us = [Pl, Ml, go, _o, Le + rn, Le + Ji, Le + en, Le + tn, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Bn = Us.concat([jr, Jr, "boxSizing", "max" + Oi, "max" + mo, "position", Le, Et, Et + en, Et + Ji, Et + rn, Et + tn]), Cu = function(t, e, r) {
  Ti(r);
  var i = t._gsap;
  if (i.spacerIsNative)
    Ti(i.spacerState);
  else if (t._gsap.swappedIn) {
    var n = e.parentNode;
    n && (n.insertBefore(t, e), n.removeChild(e));
  }
  t._gsap.swappedIn = !1;
}, ms = function(t, e, r, i) {
  if (!t._gsap.swappedIn) {
    for (var n = Us.length, o = e.style, a = t.style, l; n--; )
      l = Us[n], o[l] = r[l];
    o.position = r.position === "absolute" ? "absolute" : "relative", r.display === "inline" && (o.display = "inline-block"), a[go] = a[_o] = "auto", o.flexBasis = r.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[jr] = jn(t, ae) + Pt, o[Jr] = jn(t, Ot) + Pt, o[Et] = a[Le] = a[Ml] = a[Pl] = "0", Ti(i), a[jr] = a["max" + Oi] = r[jr], a[Jr] = a["max" + mo] = r[Jr], a[Et] = r[Et], t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)), t._gsap.swappedIn = !0;
  }
}, ku = /([A-Z])/g, Ti = function(t) {
  if (t) {
    var e = t.t.style, r = t.length, i = 0, n, o;
    for ((t.t._gsap || D.core.getCache(t.t)).uncache = 1; i < r; i += 2)
      o = t[i + 1], n = t[i], o ? e[n] = o : e[n] && e.removeProperty(n.replace(ku, "-$1").toLowerCase());
  }
}, On = function(t) {
  for (var e = Bn.length, r = t.style, i = [], n = 0; n < e; n++)
    i.push(Bn[n], r[Bn[n]]);
  return i.t = t, i;
}, Pu = function(t, e, r) {
  for (var i = [], n = t.length, o = r ? 8 : 0, a; o < n; o += 2)
    a = t[o], i.push(a, a in e ? e[a] : t[o + 1]);
  return i.t = t.t, i;
}, Wn = {
  left: 0,
  top: 0
}, Jo = function(t, e, r, i, n, o, a, l, c, u, d, h, f, _) {
  Qt(t) && (t = t(l)), be(t) && t.substr(0, 3) === "max" && (t = h + (t.charAt(4) === "=" ? zn("0" + t.substr(3), r) : 0));
  var p = f ? f.time() : 0, m, x, y;
  if (f && f.seek(0), isNaN(t) || (t = +t), Hi(t))
    f && (t = D.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, h, t)), a && In(a, r, i, !0);
  else {
    Qt(e) && (e = e(l));
    var T = (t || "0").split(" "), v, S, k, b;
    y = ce(e, l) || tt, v = ur(y) || {}, (!v || !v.left && !v.top) && Ae(y).display === "none" && (b = y.style.display, y.style.display = "block", v = ur(y), b ? y.style.display = b : y.style.removeProperty("display")), S = zn(T[0], v[i.d]), k = zn(T[1] || "0", r), t = v[i.p] - c[i.p] - u + S + n - k, a && In(a, k, i, r - k < 20 || a._isStart && k > 20), r -= r - k;
  }
  if (_ && (l[_] = t || -1e-3, t < 0 && (t = 0)), o) {
    var P = t + r, C = o._isStart;
    m = "scroll" + i.d2, In(o, P, i, C && P > 20 || !C && (d ? Math.max(tt[m], Se[m]) : o.parentNode[m]) <= P + 1), d && (c = ur(a), d && (o.style[i.op.p] = c[i.op.p] - i.op.m - o._offset + Pt));
  }
  return f && y && (m = ur(y), f.seek(h), x = ur(y), f._caScrollDist = m[i.p] - x[i.p], t = t / f._caScrollDist * h), f && f.seek(p), f ? t : Math.round(t);
}, Mu = /(webkit|moz|length|cssText|inset)/i, ta = function(t, e, r, i) {
  if (t.parentNode !== e) {
    var n = t.style, o, a;
    if (e === tt) {
      t._stOrig = n.cssText, a = Ae(t);
      for (o in a)
        !+o && !Mu.test(o) && a[o] && typeof n[o] == "string" && o !== "0" && (n[o] = a[o]);
      n.top = r, n.left = i;
    } else
      n.cssText = t._stOrig;
    D.core.getCache(t).uncache = 1, e.appendChild(t);
  }
}, Fl = function(t, e, r) {
  var i = e, n = i;
  return function(o) {
    var a = Math.round(t());
    return a !== i && a !== n && Math.abs(a - i) > 3 && Math.abs(a - n) > 3 && (o = a, r && r()), n = i, i = Math.round(o), i;
  };
}, Dn = function(t, e, r) {
  var i = {};
  i[e.p] = "+=" + r, D.set(t, i);
}, ea = function(t, e) {
  var r = Ar(t, e), i = "_scroll" + e.p2, n = function o(a, l, c, u, d) {
    var h = o.tween, f = l.onComplete, _ = {};
    c = c || r();
    var p = Fl(r, c, function() {
      h.kill(), o.tween = 0;
    });
    return d = u && d || 0, u = u || a - c, h && h.kill(), l[i] = a, l.inherit = !1, l.modifiers = _, _[i] = function() {
      return p(c + u * h.ratio + d * h.ratio * h.ratio);
    }, l.onUpdate = function() {
      H.cache++, o.tween && hr();
    }, l.onComplete = function() {
      o.tween = 0, f && f.call(h);
    }, h = o.tween = D.to(t, l), h;
  };
  return t[i] = r, r.wheelHandler = function() {
    return n.tween && n.tween.kill() && (n.tween = 0);
  }, At(t, "wheel", r.wheelHandler), I.isTouch && At(t, "touchmove", r.wheelHandler), n;
}, I = /* @__PURE__ */ function() {
  function s(e, r) {
    di || s.register(D) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Ws(this), this.init(e, r);
  }
  var t = s.prototype;
  return t.init = function(r, i) {
    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Xi) {
      this.update = this.refresh = this.kill = Qe;
      return;
    }
    r = Go(be(r) || Hi(r) || r.nodeType ? {
      trigger: r
    } : r, Pn);
    var n = r, o = n.onUpdate, a = n.toggleClass, l = n.id, c = n.onToggle, u = n.onRefresh, d = n.scrub, h = n.trigger, f = n.pin, _ = n.pinSpacing, p = n.invalidateOnRefresh, m = n.anticipatePin, x = n.onScrubComplete, y = n.onSnapComplete, T = n.once, v = n.snap, S = n.pinReparent, k = n.pinSpacer, b = n.containerAnimation, P = n.fastScrollEnd, C = n.preventOverlaps, E = r.horizontal || r.containerAnimation && r.horizontal !== !1 ? ae : Ot, W = !d && d !== 0, O = ce(r.scroller || $), K = D.core.getCache(O), Y = ei(O), Q = ("pinType" in r ? r.pinType : Or(O, "pinType") || Y && "fixed") === "fixed", q = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack], A = W && r.toggleActions.split(" "), Z = "markers" in r ? r.markers : Pn.markers, rt = Y ? 0 : parseFloat(Ae(O)["border" + E.p2 + Oi]) || 0, g = this, ot = r.onRefreshInit && function() {
      return r.onRefreshInit(g);
    }, jt = wu(O, Y, E), Ie = yu(O, Y), dt = 0, Ft = 0, Xt = 0, St = Ar(O, E), Jt, $t, _r, te, ee, j, mt, le, me, w, ve, ir, gr, pt, nr, mr, Fr, Dt, vr, vt, Ye, De, sr, Ri, Tt, mn, or, si, oi, wr, zr, U, Ir, Be, We, Xe, Yr, ai, ar;
    if (g._startClamp = g._endClamp = !1, g._dir = E, m *= 45, g.scroller = O, g.scroll = b ? b.time.bind(b) : St, te = St(), g.vars = r, i = i || r.animation, "refreshPriority" in r && (yl = 1, r.refreshPriority === -9999 && (nn = g)), K.tweenScroll = K.tweenScroll || {
      top: ea(O, Ot),
      left: ea(O, ae)
    }, g.tweenTo = Jt = K.tweenScroll[E.p], g.scrubDuration = function(M) {
      Ir = Hi(M) && M, Ir ? U ? U.duration(M) : U = D.to(i, {
        ease: "expo",
        totalProgress: "+=0",
        inherit: !1,
        duration: Ir,
        paused: !0,
        onComplete: function() {
          return x && x(g);
        }
      }) : (U && U.progress(1).kill(), U = 0);
    }, i && (i.vars.lazy = !1, i._initted && !g.isReverted || i.vars.immediateRender !== !1 && r.immediateRender !== !1 && i.duration() && i.render(0, !0, !0), g.animation = i.pause(), i.scrollTrigger = g, g.scrubDuration(d), wr = 0, l || (l = i.vars.id)), v && ((!Ur(v) || v.push) && (v = {
      snapTo: v
    }), "scrollBehavior" in tt.style && D.set(Y ? [tt, Se] : O, {
      scrollBehavior: "auto"
    }), H.forEach(function(M) {
      return Qt(M) && M.target === (Y ? et.scrollingElement || Se : O) && (M.smooth = !1);
    }), _r = Qt(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? xu(i) : v.snapTo === "labelsDirectional" ? Su(i) : v.directional !== !1 ? function(M, F) {
      return vo(v.snapTo)(M, Gt() - Ft < 500 ? 0 : F.direction);
    } : D.utils.snap(v.snapTo), Be = v.duration || {
      min: 0.1,
      max: 2
    }, Be = Ur(Be) ? Zi(Be.min, Be.max) : Zi(Be, Be), We = D.delayedCall(v.delay || Ir / 2 || 0.1, function() {
      var M = St(), F = Gt() - Ft < 500, L = Jt.tween;
      if ((F || Math.abs(g.getVelocity()) < 10) && !L && !is && dt !== M) {
        var z = (M - j) / pt, Rt = i && !W ? i.totalProgress() : z, V = F ? 0 : (Rt - zr) / (Gt() - Wi) * 1e3 || 0, wt = D.utils.clamp(-z, 1 - z, ui(V / 2) * V / 0.185), Ht = z + (v.inertia === !1 ? 0 : wt), _t, at, it = v, $e = it.onStart, ct = it.onInterrupt, we = it.onComplete;
        if (_t = _r(Ht, g), Hi(_t) || (_t = Ht), at = Math.max(0, Math.round(j + _t * pt)), M <= mt && M >= j && at !== M) {
          if (L && !L._initted && L.data <= ui(at - M))
            return;
          v.inertia === !1 && (wt = _t - z), Jt(at, {
            duration: Be(ui(Math.max(ui(Ht - Rt), ui(_t - Rt)) * 0.185 / V / 0.05 || 0)),
            ease: v.ease || "power3",
            data: ui(at - M),
            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
            onInterrupt: function() {
              return We.restart(!0) && ct && ci(g, ct);
            },
            onComplete: function() {
              g.update(), dt = St(), i && !W && (U ? U.resetTo("totalProgress", _t, i._tTime / i._tDur) : i.progress(_t)), wr = zr = i && !W ? i.totalProgress() : g.progress, y && y(g), we && ci(g, we);
            }
          }, M, wt * pt, at - M - wt * pt), $e && ci(g, $e, Jt.tween);
        }
      } else g.isActive && dt !== M && We.restart(!0);
    }).pause()), l && ($s[l] = g), h = g.trigger = ce(h || f !== !0 && f), ar = h && h._gsap && h._gsap.stRevert, ar && (ar = ar(g)), f = f === !0 ? h : ce(f), be(a) && (a = {
      targets: h,
      className: a
    }), f && (_ === !1 || _ === Le || (_ = !_ && f.parentNode && f.parentNode.style && Ae(f.parentNode).display === "flex" ? !1 : Et), g.pin = f, $t = D.core.getCache(f), $t.spacer ? nr = $t.pinState : (k && (k = ce(k), k && !k.nodeType && (k = k.current || k.nativeElement), $t.spacerIsNative = !!k, k && ($t.spacerState = On(k))), $t.spacer = Dt = k || et.createElement("div"), Dt.classList.add("pin-spacer"), l && Dt.classList.add("pin-spacer-" + l), $t.pinState = nr = On(f)), r.force3D !== !1 && D.set(f, {
      force3D: !0
    }), g.spacer = Dt = $t.spacer, oi = Ae(f), Ri = oi[_ + E.os2], vt = D.getProperty(f), Ye = D.quickSetter(f, E.a, Pt), ms(f, Dt, oi), Fr = On(f)), Z) {
      ir = Ur(Z) ? Go(Z, Ko) : Ko, w = Mn("scroller-start", l, O, E, ir, 0), ve = Mn("scroller-end", l, O, E, ir, 0, w), vr = w["offset" + E.op.d2];
      var Li = ce(Or(O, "content") || O);
      le = this.markerStart = Mn("start", l, Li, E, ir, vr, 0, b), me = this.markerEnd = Mn("end", l, Li, E, ir, vr, 0, b), b && (ai = D.quickSetter([le, me], E.a, Pt)), !Q && !(er.length && Or(O, "fixedMarkers") === !0) && (bu(Y ? tt : O), D.set([w, ve], {
        force3D: !0
      }), mn = D.quickSetter(w, E.a, Pt), si = D.quickSetter(ve, E.a, Pt));
    }
    if (b) {
      var B = b.vars.onUpdate, N = b.vars.onUpdateParams;
      b.eventCallback("onUpdate", function() {
        g.update(0, 0, 1), B && B.apply(b, N || []);
      });
    }
    if (g.previous = function() {
      return X[X.indexOf(g) - 1];
    }, g.next = function() {
      return X[X.indexOf(g) + 1];
    }, g.revert = function(M, F) {
      if (!F)
        return g.kill(!0);
      var L = M !== !1 || !g.enabled, z = Vt;
      L !== g.isReverted && (L && (Xe = Math.max(St(), g.scroll.rec || 0), Xt = g.progress, Yr = i && i.progress()), le && [le, me, w, ve].forEach(function(Rt) {
        return Rt.style.display = L ? "none" : "block";
      }), L && (Vt = g, g.update(L)), f && (!S || !g.isActive) && (L ? Cu(f, Dt, nr) : ms(f, Dt, Ae(f), Tt)), L || g.update(L), Vt = z, g.isReverted = L);
    }, g.refresh = function(M, F, L, z) {
      if (!((Vt || !g.enabled) && !F)) {
        if (f && M && ze) {
          At(s, "scrollEnd", Dl);
          return;
        }
        !oe && ot && ot(g), Vt = g, Jt.tween && !L && (Jt.tween.kill(), Jt.tween = 0), U && U.pause(), p && i && (i.revert({
          kill: !1
        }).invalidate(), i.getChildren ? i.getChildren(!0, !0, !1).forEach(function(yr) {
          return yr.vars.immediateRender && yr.render(0, !0, !0);
        }) : i.vars.immediateRender && i.render(0, !0, !0)), g.isReverted || g.revert(!0, !0), g._subPinOffset = !1;
        var Rt = jt(), V = Ie(), wt = b ? b.duration() : tr(O, E), Ht = pt <= 0.01 || !pt, _t = 0, at = z || 0, it = Ur(L) ? L.end : r.end, $e = r.endTrigger || h, ct = Ur(L) ? L.start : r.start || (r.start === 0 || !h ? 0 : f ? "0 0" : "0 100%"), we = g.pinnedContainer = r.pinnedContainer && ce(r.pinnedContainer, g), qe = h && Math.max(0, X.indexOf(g)) || 0, zt = qe, It, Ut, Br, vn, qt, kt, Ve, ns, xo, Ai, Ge, Ni, wn;
        for (Z && Ur(L) && (Ni = D.getProperty(w, E.p), wn = D.getProperty(ve, E.p)); zt-- > 0; )
          kt = X[zt], kt.end || kt.refresh(0, 1) || (Vt = g), Ve = kt.pin, Ve && (Ve === h || Ve === f || Ve === we) && !kt.isReverted && (Ai || (Ai = []), Ai.unshift(kt), kt.revert(!0, !0)), kt !== X[zt] && (qe--, zt--);
        for (Qt(ct) && (ct = ct(g)), ct = Ho(ct, "start", g), j = Jo(ct, h, Rt, E, St(), le, w, g, V, rt, Q, wt, b, g._startClamp && "_startClamp") || (f ? -1e-3 : 0), Qt(it) && (it = it(g)), be(it) && !it.indexOf("+=") && (~it.indexOf(" ") ? it = (be(ct) ? ct.split(" ")[0] : "") + it : (_t = zn(it.substr(2), Rt), it = be(ct) ? ct : (b ? D.utils.mapRange(0, b.duration(), b.scrollTrigger.start, b.scrollTrigger.end, j) : j) + _t, $e = h)), it = Ho(it, "end", g), mt = Math.max(j, Jo(it || ($e ? "100% 0" : wt), $e, Rt, E, St() + _t, me, ve, g, V, rt, Q, wt, b, g._endClamp && "_endClamp")) || -1e-3, _t = 0, zt = qe; zt--; )
          kt = X[zt] || {}, Ve = kt.pin, Ve && kt.start - kt._pinPush <= j && !b && kt.end > 0 && (It = kt.end - (g._startClamp ? Math.max(0, kt.start) : kt.start), (Ve === h && kt.start - kt._pinPush < j || Ve === we) && isNaN(ct) && (_t += It * (1 - kt.progress)), Ve === f && (at += It));
        if (j += _t, mt += _t, g._startClamp && (g._startClamp += _t), g._endClamp && !oe && (g._endClamp = mt || -1e-3, mt = Math.min(mt, tr(O, E))), pt = mt - j || (j -= 0.01) && 1e-3, Ht && (Xt = D.utils.clamp(0, 1, D.utils.normalize(j, mt, Xe))), g._pinPush = at, le && _t && (It = {}, It[E.a] = "+=" + _t, we && (It[E.p] = "-=" + St()), D.set([le, me], It)), f && !(Xs && g.end >= tr(O, E)))
          It = Ae(f), vn = E === Ot, Br = St(), De = parseFloat(vt(E.a)) + at, !wt && mt > 1 && (Ge = (Y ? et.scrollingElement || Se : O).style, Ge = {
            style: Ge,
            value: Ge["overflow" + E.a.toUpperCase()]
          }, Y && Ae(tt)["overflow" + E.a.toUpperCase()] !== "scroll" && (Ge.style["overflow" + E.a.toUpperCase()] = "scroll")), ms(f, Dt, It), Fr = On(f), Ut = ur(f, !0), ns = Q && Ar(O, vn ? ae : Ot)(), _ ? (Tt = [_ + E.os2, pt + at + Pt], Tt.t = Dt, zt = _ === Et ? jn(f, E) + pt + at : 0, zt && (Tt.push(E.d, zt + Pt), Dt.style.flexBasis !== "auto" && (Dt.style.flexBasis = zt + Pt)), Ti(Tt), we && X.forEach(function(yr) {
            yr.pin === we && yr.vars.pinSpacing !== !1 && (yr._subPinOffset = !0);
          }), Q && St(Xe)) : (zt = jn(f, E), zt && Dt.style.flexBasis !== "auto" && (Dt.style.flexBasis = zt + Pt)), Q && (qt = {
            top: Ut.top + (vn ? Br - j : ns) + Pt,
            left: Ut.left + (vn ? ns : Br - j) + Pt,
            boxSizing: "border-box",
            position: "fixed"
          }, qt[jr] = qt["max" + Oi] = Math.ceil(Ut.width) + Pt, qt[Jr] = qt["max" + mo] = Math.ceil(Ut.height) + Pt, qt[Le] = qt[Le + en] = qt[Le + Ji] = qt[Le + rn] = qt[Le + tn] = "0", qt[Et] = It[Et], qt[Et + en] = It[Et + en], qt[Et + Ji] = It[Et + Ji], qt[Et + rn] = It[Et + rn], qt[Et + tn] = It[Et + tn], mr = Pu(nr, qt, S), oe && St(0)), i ? (xo = i._initted, ds(1), i.render(i.duration(), !0, !0), sr = vt(E.a) - De + pt + at, or = Math.abs(pt - sr) > 1, Q && or && mr.splice(mr.length - 2, 2), i.render(0, !0, !0), xo || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), ds(0)) : sr = pt, Ge && (Ge.value ? Ge.style["overflow" + E.a.toUpperCase()] = Ge.value : Ge.style.removeProperty("overflow-" + E.a));
        else if (h && St() && !b)
          for (Ut = h.parentNode; Ut && Ut !== tt; )
            Ut._pinOffset && (j -= Ut._pinOffset, mt -= Ut._pinOffset), Ut = Ut.parentNode;
        Ai && Ai.forEach(function(yr) {
          return yr.revert(!1, !0);
        }), g.start = j, g.end = mt, te = ee = oe ? Xe : St(), !b && !oe && (te < Xe && St(Xe), g.scroll.rec = 0), g.revert(!1, !0), Ft = Gt(), We && (dt = -1, We.restart(!0)), Vt = 0, i && W && (i._initted || Yr) && i.progress() !== Yr && i.progress(Yr || 0, !0).render(i.time(), !0, !0), (Ht || Xt !== g.progress || b || p || i && !i._initted) && (i && !W && (i._initted || Xt || i.vars.immediateRender !== !1) && i.totalProgress(b && j < -1e-3 && !Xt ? D.utils.normalize(j, mt, 0) : Xt, !0), g.progress = Ht || (te - j) / pt === Xt ? 0 : Xt), f && _ && (Dt._pinOffset = Math.round(g.progress * sr)), U && U.invalidate(), isNaN(Ni) || (Ni -= D.getProperty(w, E.p), wn -= D.getProperty(ve, E.p), Dn(w, E, Ni), Dn(le, E, Ni - (z || 0)), Dn(ve, E, wn), Dn(me, E, wn - (z || 0))), Ht && !oe && g.update(), u && !oe && !gr && (gr = !0, u(g), gr = !1);
      }
    }, g.getVelocity = function() {
      return (St() - ee) / (Gt() - Wi) * 1e3 || 0;
    }, g.endAnimation = function() {
      Ii(g.callbackAnimation), i && (U ? U.progress(1) : i.paused() ? W || Ii(i, g.direction < 0, 1) : Ii(i, i.reversed()));
    }, g.labelToScroll = function(M) {
      return i && i.labels && (j || g.refresh() || j) + i.labels[M] / i.duration() * pt || 0;
    }, g.getTrailing = function(M) {
      var F = X.indexOf(g), L = g.direction > 0 ? X.slice(0, F).reverse() : X.slice(F + 1);
      return (be(M) ? L.filter(function(z) {
        return z.vars.preventOverlaps === M;
      }) : L).filter(function(z) {
        return g.direction > 0 ? z.end <= j : z.start >= mt;
      });
    }, g.update = function(M, F, L) {
      if (!(b && !L && !M)) {
        var z = oe === !0 ? Xe : g.scroll(), Rt = M ? 0 : (z - j) / pt, V = Rt < 0 ? 0 : Rt > 1 ? 1 : Rt || 0, wt = g.progress, Ht, _t, at, it, $e, ct, we, qe;
        if (F && (ee = te, te = b ? St() : z, v && (zr = wr, wr = i && !W ? i.totalProgress() : V)), m && f && !Vt && !Tn && ze && (!V && j < z + (z - ee) / (Gt() - Wi) * m ? V = 1e-4 : V === 1 && mt > z + (z - ee) / (Gt() - Wi) * m && (V = 0.9999)), V !== wt && g.enabled) {
          if (Ht = g.isActive = !!V && V < 1, _t = !!wt && wt < 1, ct = Ht !== _t, $e = ct || !!V != !!wt, g.direction = V > wt ? 1 : -1, g.progress = V, $e && !Vt && (at = V && !wt ? 0 : V === 1 ? 1 : wt === 1 ? 2 : 3, W && (it = !ct && A[at + 1] !== "none" && A[at + 1] || A[at], qe = i && (it === "complete" || it === "reset" || it in i))), C && (ct || qe) && (qe || d || !i) && (Qt(C) ? C(g) : g.getTrailing(C).forEach(function(Br) {
            return Br.endAnimation();
          })), W || (U && !Vt && !Tn ? (U._dp._time - U._start !== U._time && U.render(U._dp._time - U._start), U.resetTo ? U.resetTo("totalProgress", V, i._tTime / i._tDur) : (U.vars.totalProgress = V, U.invalidate().restart())) : i && i.totalProgress(V, !!(Vt && (Ft || M)))), f) {
            if (M && _ && (Dt.style[_ + E.os2] = Ri), !Q)
              Ye($i(De + sr * V));
            else if ($e) {
              if (we = !M && V > wt && mt + 1 > z && z + 1 >= tr(O, E), S)
                if (!M && (Ht || we)) {
                  var zt = ur(f, !0), It = z - j;
                  ta(f, tt, zt.top + (E === Ot ? It : 0) + Pt, zt.left + (E === Ot ? 0 : It) + Pt);
                } else
                  ta(f, Dt);
              Ti(Ht || we ? mr : Fr), or && V < 1 && Ht || Ye(De + (V === 1 && !we ? sr : 0));
            }
          }
          v && !Jt.tween && !Vt && !Tn && We.restart(!0), a && (ct || T && V && (V < 1 || !ps)) && dn(a.targets).forEach(function(Br) {
            return Br.classList[Ht || T ? "add" : "remove"](a.className);
          }), o && !W && !M && o(g), $e && !Vt ? (W && (qe && (it === "complete" ? i.pause().totalProgress(1) : it === "reset" ? i.restart(!0).pause() : it === "restart" ? i.restart(!0) : i[it]()), o && o(g)), (ct || !ps) && (c && ct && ci(g, c), q[at] && ci(g, q[at]), T && (V === 1 ? g.kill(!1, 1) : q[at] = 0), ct || (at = V === 1 ? 1 : 3, q[at] && ci(g, q[at]))), P && !Ht && Math.abs(g.getVelocity()) > (Hi(P) ? P : 2500) && (Ii(g.callbackAnimation), U ? U.progress(1) : Ii(i, it === "reverse" ? 1 : !V, 1))) : W && o && !Vt && o(g);
        }
        if (si) {
          var Ut = b ? z / b.duration() * (b._caScrollDist || 0) : z;
          mn(Ut + (w._isFlipped ? 1 : 0)), si(Ut);
        }
        ai && ai(-z / b.duration() * (b._caScrollDist || 0));
      }
    }, g.enable = function(M, F) {
      g.enabled || (g.enabled = !0, At(O, "resize", Ui), Y || At(O, "scroll", fi), ot && At(s, "refreshInit", ot), M !== !1 && (g.progress = Xt = 0, te = ee = dt = St()), F !== !1 && g.refresh());
    }, g.getTween = function(M) {
      return M && Jt ? Jt.tween : U;
    }, g.setPositions = function(M, F, L, z) {
      if (b) {
        var Rt = b.scrollTrigger, V = b.duration(), wt = Rt.end - Rt.start;
        M = Rt.start + wt * M / V, F = Rt.start + wt * F / V;
      }
      g.refresh(!1, !1, {
        start: Uo(M, L && !!g._startClamp),
        end: Uo(F, L && !!g._endClamp)
      }, z), g.update();
    }, g.adjustPinSpacing = function(M) {
      if (Tt && M) {
        var F = Tt.indexOf(E.d) + 1;
        Tt[F] = parseFloat(Tt[F]) + M + Pt, Tt[1] = parseFloat(Tt[1]) + M + Pt, Ti(Tt);
      }
    }, g.disable = function(M, F) {
      if (M !== !1 && g.revert(!0, !0), g.enabled && (g.enabled = g.isActive = !1, F || U && U.pause(), Xe = 0, $t && ($t.uncache = 1), ot && Lt(s, "refreshInit", ot), We && (We.pause(), Jt.tween && Jt.tween.kill() && (Jt.tween = 0)), !Y)) {
        for (var L = X.length; L--; )
          if (X[L].scroller === O && X[L] !== g)
            return;
        Lt(O, "resize", Ui), Y || Lt(O, "scroll", fi);
      }
    }, g.kill = function(M, F) {
      g.disable(M, F), U && !F && U.kill(), l && delete $s[l];
      var L = X.indexOf(g);
      L >= 0 && X.splice(L, 1), L === se && Yn > 0 && se--, L = 0, X.forEach(function(z) {
        return z.scroller === g.scroller && (L = 1);
      }), L || oe || (g.scroll.rec = 0), i && (i.scrollTrigger = null, M && i.revert({
        kill: !1
      }), F || i.kill()), le && [le, me, w, ve].forEach(function(z) {
        return z.parentNode && z.parentNode.removeChild(z);
      }), nn === g && (nn = 0), f && ($t && ($t.uncache = 1), L = 0, X.forEach(function(z) {
        return z.pin === f && L++;
      }), L || ($t.spacer = 0)), r.onKill && r.onKill(g);
    }, X.push(g), g.enable(!1, !1), ar && ar(g), i && i.add && !pt) {
      var J = g.update;
      g.update = function() {
        g.update = J, H.cache++, j || mt || g.refresh();
      }, D.delayedCall(0.01, g.update), pt = 0.01, j = mt = 0;
    } else
      g.refresh();
    f && Eu();
  }, s.register = function(r) {
    return di || (D = r || El(), Tl() && window.document && s.enable(), di = Xi), di;
  }, s.defaults = function(r) {
    if (r)
      for (var i in r)
        Pn[i] = r[i];
    return Pn;
  }, s.disable = function(r, i) {
    Xi = 0, X.forEach(function(o) {
      return o[i ? "kill" : "disable"](r);
    }), Lt($, "wheel", fi), Lt(et, "scroll", fi), clearInterval(Sn), Lt(et, "touchcancel", Qe), Lt(tt, "touchstart", Qe), Cn(Lt, et, "pointerdown,touchstart,mousedown", qo), Cn(Lt, et, "pointerup,touchend,mouseup", Vo), Zn.kill(), En(Lt);
    for (var n = 0; n < H.length; n += 3)
      kn(Lt, H[n], H[n + 1]), kn(Lt, H[n], H[n + 2]);
  }, s.enable = function() {
    if ($ = window, et = document, Se = et.documentElement, tt = et.body, D) {
      if (dn = D.utils.toArray, Zi = D.utils.clamp, Ws = D.core.context || Qe, ds = D.core.suppressOverwrites || Qe, ho = $.history.scrollRestoration || "auto", Hs = $.pageYOffset || 0, D.core.globals("ScrollTrigger", s), tt) {
        Xi = 1, Si = document.createElement("div"), Si.style.height = "100vh", Si.style.position = "absolute", Nl(), vu(), bt.register(D), s.isTouch = bt.isTouch, xr = bt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Bs = bt.isTouch === 1, At($, "wheel", fi), fo = [$, et, Se, tt], D.matchMedia ? (s.matchMedia = function(u) {
          var d = D.matchMedia(), h;
          for (h in u)
            d.add(h, u[h]);
          return d;
        }, D.addEventListener("matchMediaInit", function() {
          Ll(), wo();
        }), D.addEventListener("matchMediaRevert", function() {
          return Rl();
        }), D.addEventListener("matchMedia", function() {
          Vr(0, 1), ii("matchMedia");
        }), D.matchMedia().add("(orientation: portrait)", function() {
          return gs(), gs;
        })) : console.warn("Requires GSAP 3.11.0 or later"), gs(), At(et, "scroll", fi);
        var r = tt.hasAttribute("style"), i = tt.style, n = i.borderTopStyle, o = D.core.Animation.prototype, a, l;
        for (o.revert || Object.defineProperty(o, "revert", {
          value: function() {
            return this.time(-0.01, !0);
          }
        }), i.borderTopStyle = "solid", a = ur(tt), Ot.m = Math.round(a.top + Ot.sc()) || 0, ae.m = Math.round(a.left + ae.sc()) || 0, n ? i.borderTopStyle = n : i.removeProperty("border-top-style"), r || (tt.setAttribute("style", ""), tt.removeAttribute("style")), Sn = setInterval(Qo, 250), D.delayedCall(0.5, function() {
          return Tn = 0;
        }), At(et, "touchcancel", Qe), At(tt, "touchstart", Qe), Cn(At, et, "pointerdown,touchstart,mousedown", qo), Cn(At, et, "pointerup,touchend,mouseup", Vo), Ys = D.utils.checkPrefix("transform"), Bn.push(Ys), di = Gt(), Zn = D.delayedCall(0.2, Vr).pause(), pi = [et, "visibilitychange", function() {
          var u = $.innerWidth, d = $.innerHeight;
          et.hidden ? (Xo = u, $o = d) : (Xo !== u || $o !== d) && Ui();
        }, et, "DOMContentLoaded", Vr, $, "load", Vr, $, "resize", Ui], En(At), X.forEach(function(u) {
          return u.enable(0, 1);
        }), l = 0; l < H.length; l += 3)
          kn(Lt, H[l], H[l + 1]), kn(Lt, H[l], H[l + 2]);
      } else if (et) {
        var c = function u() {
          s.enable(), et.removeEventListener("DOMContentLoaded", u);
        };
        et.addEventListener("DOMContentLoaded", c);
      }
    }
  }, s.config = function(r) {
    "limitCallbacks" in r && (ps = !!r.limitCallbacks);
    var i = r.syncInterval;
    i && clearInterval(Sn) || (Sn = i) && setInterval(Qo, i), "ignoreMobileResize" in r && (Bs = s.isTouch === 1 && r.ignoreMobileResize), "autoRefreshEvents" in r && (En(Lt) || En(At, r.autoRefreshEvents || "none"), bl = (r.autoRefreshEvents + "").indexOf("resize") === -1);
  }, s.scrollerProxy = function(r, i) {
    var n = ce(r), o = H.indexOf(n), a = ei(n);
    ~o && H.splice(o, a ? 6 : 2), i && (a ? er.unshift($, i, tt, i, Se, i) : er.unshift(n, i));
  }, s.clearMatchMedia = function(r) {
    X.forEach(function(i) {
      return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
    });
  }, s.isInViewport = function(r, i, n) {
    var o = (be(r) ? ce(r) : r).getBoundingClientRect(), a = o[n ? jr : Jr] * i || 0;
    return n ? o.right - a > 0 && o.left + a < $.innerWidth : o.bottom - a > 0 && o.top + a < $.innerHeight;
  }, s.positionInViewport = function(r, i, n) {
    be(r) && (r = ce(r));
    var o = r.getBoundingClientRect(), a = o[n ? jr : Jr], l = i == null ? a / 2 : i in Jn ? Jn[i] * a : ~i.indexOf("%") ? parseFloat(i) * a / 100 : parseFloat(i) || 0;
    return n ? (o.left + l) / $.innerWidth : (o.top + l) / $.innerHeight;
  }, s.killAll = function(r) {
    if (X.slice(0).forEach(function(n) {
      return n.vars.id !== "ScrollSmoother" && n.kill();
    }), r !== !0) {
      var i = ri.killAll || [];
      ri = {}, i.forEach(function(n) {
        return n();
      });
    }
  }, s;
}();
I.version = "3.15.0";
I.saveStyles = function(s) {
  return s ? dn(s).forEach(function(t) {
    if (t && t.style) {
      var e = ye.indexOf(t);
      e >= 0 && ye.splice(e, 5), ye.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), D.core.getCache(t), Ws());
    }
  }) : ye;
};
I.revert = function(s, t) {
  return wo(!s, t);
};
I.create = function(s, t) {
  return new I(s, t);
};
I.refresh = function(s) {
  return s ? Ui(!0) : (di || I.register()) && Vr(!0);
};
I.update = function(s) {
  return ++H.cache && hr(s === !0 ? 2 : 0);
};
I.clearScrollMemory = Al;
I.maxScroll = function(s, t) {
  return tr(s, t ? ae : Ot);
};
I.getScrollFunc = function(s, t) {
  return Ar(ce(s), t ? ae : Ot);
};
I.getById = function(s) {
  return $s[s];
};
I.getAll = function() {
  return X.filter(function(s) {
    return s.vars.id !== "ScrollSmoother";
  });
};
I.isScrolling = function() {
  return !!ze;
};
I.snapDirectional = vo;
I.addEventListener = function(s, t) {
  var e = ri[s] || (ri[s] = []);
  ~e.indexOf(t) || e.push(t);
};
I.removeEventListener = function(s, t) {
  var e = ri[s], r = e && e.indexOf(t);
  r >= 0 && e.splice(r, 1);
};
I.batch = function(s, t) {
  var e = [], r = {}, i = t.interval || 0.016, n = t.batchMax || 1e9, o = function(c, u) {
    var d = [], h = [], f = D.delayedCall(i, function() {
      u(d, h), d = [], h = [];
    }).pause();
    return function(_) {
      d.length || f.restart(!0), d.push(_.trigger), h.push(_), n <= d.length && f.progress(1);
    };
  }, a;
  for (a in t)
    r[a] = a.substr(0, 2) === "on" && Qt(t[a]) && a !== "onRefreshInit" ? o(a, t[a]) : t[a];
  return Qt(n) && (n = n(), At(I, "refresh", function() {
    return n = t.batchMax();
  })), dn(s).forEach(function(l) {
    var c = {};
    for (a in r)
      c[a] = r[a];
    c.trigger = l, e.push(I.create(c));
  }), e;
};
var ra = function(t, e, r, i) {
  return e > i ? t(i) : e < 0 && t(0), r > i ? (i - e) / (r - e) : r < 0 ? e / (e - r) : 1;
}, vs = function s(t, e) {
  e === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = e === !0 ? "auto" : e ? "pan-" + e + (bt.isTouch ? " pinch-zoom" : "") : "none", t === Se && s(tt, e);
}, Rn = {
  auto: 1,
  scroll: 1
}, Ou = function(t) {
  var e = t.event, r = t.target, i = t.axis, n = (e.changedTouches ? e.changedTouches[0] : e).target, o = n._gsap || D.core.getCache(n), a = Gt(), l;
  if (!o._isScrollT || a - o._isScrollT > 2e3) {
    for (; n && n !== tt && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(Rn[(l = Ae(n)).overflowY] || Rn[l.overflowX])); )
      n = n.parentNode;
    o._isScroll = n && n !== r && !ei(n) && (Rn[(l = Ae(n)).overflowY] || Rn[l.overflowX]), o._isScrollT = a;
  }
  (o._isScroll || i === "x") && (e.stopPropagation(), e._gsapAllow = !0);
}, zl = function(t, e, r, i) {
  return bt.create({
    target: t,
    capture: !0,
    debounce: !1,
    lockAxis: !0,
    type: e,
    onWheel: i = i && Ou,
    onPress: i,
    onDrag: i,
    onScroll: i,
    onEnable: function() {
      return r && At(et, bt.eventTypes[0], na, !1, !0);
    },
    onDisable: function() {
      return Lt(et, bt.eventTypes[0], na, !0);
    }
  });
}, Du = /(input|label|select|textarea)/i, ia, na = function(t) {
  var e = Du.test(t.target.tagName);
  (e || ia) && (t._gsapAllow = !0, ia = e);
}, Ru = function(t) {
  Ur(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
  var e = t, r = e.normalizeScrollX, i = e.momentum, n = e.allowNestedScroll, o = e.onRelease, a, l, c = ce(t.target) || Se, u = D.core.globals().ScrollSmoother, d = u && u.get(), h = xr && (t.content && ce(t.content) || d && t.content !== !1 && !d.smooth() && d.content()), f = Ar(c, Ot), _ = Ar(c, ae), p = 1, m = (bt.isTouch && $.visualViewport ? $.visualViewport.scale * $.visualViewport.width : $.outerWidth) / $.innerWidth, x = 0, y = Qt(i) ? function() {
    return i(a);
  } : function() {
    return i || 2.8;
  }, T, v, S = zl(c, t.type, !0, n), k = function() {
    return v = !1;
  }, b = Qe, P = Qe, C = function() {
    l = tr(c, Ot), P = Zi(xr ? 1 : 0, l), r && (b = Zi(0, tr(c, ae))), T = ti;
  }, E = function() {
    h._gsap.y = $i(parseFloat(h._gsap.y) + f.offset) + "px", h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0;
  }, W = function() {
    if (v) {
      requestAnimationFrame(k);
      var Z = $i(a.deltaY / 2), rt = P(f.v - Z);
      if (h && rt !== f.v + f.offset) {
        f.offset = rt - f.v;
        var g = $i((parseFloat(h && h._gsap.y) || 0) - f.offset);
        h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + g + ", 0, 1)", h._gsap.y = g + "px", f.cacheID = H.cache, hr();
      }
      return !0;
    }
    f.offset && E(), v = !0;
  }, O, K, Y, Q, q = function() {
    C(), O.isActive() && O.vars.scrollY > l && (f() > l ? O.progress(1) && f(l) : O.resetTo("scrollY", l));
  };
  return h && D.set(h, {
    y: "+=0"
  }), t.ignoreCheck = function(A) {
    return xr && A.type === "touchmove" && W() || p > 1.05 && A.type !== "touchstart" || a.isGesturing || A.touches && A.touches.length > 1;
  }, t.onPress = function() {
    v = !1;
    var A = p;
    p = $i(($.visualViewport && $.visualViewport.scale || 1) / m), O.pause(), A !== p && vs(c, p > 1.01 ? !0 : r ? !1 : "x"), K = _(), Y = f(), C(), T = ti;
  }, t.onRelease = t.onGestureStart = function(A, Z) {
    if (f.offset && E(), !Z)
      Q.restart(!0);
    else {
      H.cache++;
      var rt = y(), g, ot;
      r && (g = _(), ot = g + rt * 0.05 * -A.velocityX / 0.227, rt *= ra(_, g, ot, tr(c, ae)), O.vars.scrollX = b(ot)), g = f(), ot = g + rt * 0.05 * -A.velocityY / 0.227, rt *= ra(f, g, ot, tr(c, Ot)), O.vars.scrollY = P(ot), O.invalidate().duration(rt).play(0.01), (xr && O.vars.scrollY >= l || g >= l - 1) && D.to({}, {
        onUpdate: q,
        duration: rt
      });
    }
    o && o(A);
  }, t.onWheel = function() {
    O._ts && O.pause(), Gt() - x > 1e3 && (T = 0, x = Gt());
  }, t.onChange = function(A, Z, rt, g, ot) {
    if (ti !== T && C(), Z && r && _(b(g[2] === Z ? K + (A.startX - A.x) : _() + Z - g[1])), rt) {
      f.offset && E();
      var jt = ot[2] === rt, Ie = jt ? Y + A.startY - A.y : f() + rt - ot[1], dt = P(Ie);
      jt && Ie !== dt && (Y += dt - Ie), f(dt);
    }
    (rt || Z) && hr();
  }, t.onEnable = function() {
    vs(c, r ? !1 : "x"), I.addEventListener("refresh", q), At($, "resize", q), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = _.smooth = !1), S.enable();
  }, t.onDisable = function() {
    vs(c, !0), Lt($, "resize", q), I.removeEventListener("refresh", q), S.kill();
  }, t.lockAxis = t.lockAxis !== !1, a = new bt(t), a.iOS = xr, xr && !f() && f(1), xr && D.ticker.add(Qe), Q = a._dc, O = D.to(a, {
    ease: "power4",
    paused: !0,
    inherit: !1,
    scrollX: r ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: Fl(f, f(), function() {
        return O.pause();
      })
    },
    onUpdate: hr,
    onComplete: Q.vars.onComplete
  }), a;
};
I.sort = function(s) {
  if (Qt(s))
    return X.sort(s);
  var t = $.pageYOffset || 0;
  return I.getAll().forEach(function(e) {
    return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + $.innerHeight;
  }), X.sort(s || function(e, r) {
    return (e.vars.refreshPriority || 0) * -1e6 + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((r.vars.containerAnimation ? 1e6 : r._sortY) + (r.vars.refreshPriority || 0) * -1e6);
  });
};
I.observe = function(s) {
  return new bt(s);
};
I.normalizeScroll = function(s) {
  if (typeof s > "u")
    return ne;
  if (s === !0 && ne)
    return ne.enable();
  if (s === !1) {
    ne && ne.kill(), ne = s;
    return;
  }
  var t = s instanceof bt ? s : Ru(s);
  return ne && ne.target === t.target && ne.kill(), ei(t.target) && (ne = t), t;
};
I.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: Is,
  _inputObserver: zl,
  _scrollers: H,
  _proxies: er,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function() {
      ze || ii("scrollStart"), ze = Gt();
    },
    // a way to get the _refreshing value in Observer
    ref: function() {
      return Vt;
    }
  }
};
El() && D.registerPlugin(I);
var sa = "1.3.26";
function Il(s, t, e) {
  return Math.max(s, Math.min(t, e));
}
function Lu(s, t, e) {
  return (1 - e) * s + e * t;
}
function Au(s, t, e, r) {
  return Lu(s, t, 1 - Math.exp(-e * r));
}
function Nu(s, t) {
  return (s % t + t) % t;
}
var Fu = class {
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
      const e = Il(0, this.currentTime / this.duration, 1);
      t = e >= 1;
      const r = t ? 1 : this.easing(e);
      this.value = this.from + (this.to - this.from) * r;
    } else this.lerp ? (this.value = Au(this.value, this.to, this.lerp * 60, s), Math.round(this.value) === Math.round(this.to) && (this.value = this.to, t = !0)) : (this.value = this.to, t = !0);
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
function zu(s, t) {
  let e;
  return function(...r) {
    clearTimeout(e), e = setTimeout(() => {
      e = void 0, s.apply(this, r);
    }, t);
  };
}
var Iu = class {
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
    this.wrapper = s, this.content = t, e && (this.debouncedResize = zu(this.resize, r), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
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
}, Yl = class {
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
const Yu = 100 / 6, br = { passive: !1 };
function oa(s, t) {
  return s === 1 ? Yu : s === 2 ? t : 1;
}
var Bu = class {
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
    R(this, "emitter", new Yl());
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
      const i = oa(r, this.window.width), n = oa(r, this.window.height);
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
    this.element = s, this.options = t, window.addEventListener("resize", this.onWindowResize), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, br), this.element.addEventListener("touchstart", this.onTouchStart, br), this.element.addEventListener("touchmove", this.onTouchMove, br), this.element.addEventListener("touchend", this.onTouchEnd, br);
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
    this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize), this.element.removeEventListener("wheel", this.onWheel, br), this.element.removeEventListener("touchstart", this.onTouchStart, br), this.element.removeEventListener("touchmove", this.onTouchMove, br), this.element.removeEventListener("touchend", this.onTouchEnd, br);
  }
};
const aa = (s) => Math.min(1, 1.001 - 2 ** (-10 * s));
var Wu = class {
  constructor({ wrapper: s = window, content: t = document.documentElement, eventsTarget: e = s, smoothWheel: r = !0, syncTouch: i = !1, syncTouchLerp: n = 0.075, touchInertiaExponent: o = 1.7, duration: a, easing: l, lerp: c = 0.1, infinite: u = !1, orientation: d = "vertical", gestureOrientation: h = d === "horizontal" ? "both" : "vertical", touchMultiplier: f = 1, wheelMultiplier: _ = 1, autoResize: p = !0, prevent: m, virtualScroll: x, overscroll: y = !0, autoRaf: T = !1, anchors: v = !1, autoToggle: S = !1, allowNestedScroll: k = !1, __experimental__naiveDimensions: b = !1, naiveDimensions: P = b, stopInertiaOnNavigate: C = !1, respectReducedMotion: E = !0 } = {}) {
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
    R(this, "animate", new Fu());
    R(this, "emitter", new Yl());
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
      const c = this.options.prevent, u = Math.abs(t) >= Math.abs(e) ? "horizontal" : "vertical";
      if (l.find((_) => _ instanceof HTMLElement && (typeof c == "function" && c?.(_) || _.hasAttribute?.("data-lenis-prevent") || u === "vertical" && _.hasAttribute?.("data-lenis-prevent-vertical") || u === "horizontal" && _.hasAttribute?.("data-lenis-prevent-horizontal") || i && _.hasAttribute?.("data-lenis-prevent-touch") || n && _.hasAttribute?.("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.hasNestedScroll(_, {
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
    window.lenisVersion = sa, window.lenis || (window.lenis = {}), window.lenis.version = sa, d === "horizontal" && (window.lenis.horizontal = !0), i === !0 && (window.lenis.touch = !0), this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent), (!s || s === document.documentElement) && (s = window), typeof a == "number" && typeof l != "function" ? l = aa : typeof l == "function" && typeof a != "number" && (a = 1), this.options = {
      wrapper: s,
      content: t,
      eventsTarget: e,
      smoothWheel: r,
      syncTouch: i,
      syncTouchLerp: n,
      touchInertiaExponent: o,
      duration: a,
      easing: l,
      lerp: c,
      infinite: u,
      gestureOrientation: h,
      orientation: d,
      touchMultiplier: f,
      wheelMultiplier: _,
      autoResize: p,
      prevent: m,
      virtualScroll: x,
      overscroll: y,
      autoRaf: T,
      anchors: v,
      autoToggle: S,
      allowNestedScroll: k,
      naiveDimensions: P,
      stopInertiaOnNavigate: C,
      respectReducedMotion: E
    }, this.dimensions = new Iu(s, t, { autoResize: p }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, { capture: !0 }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener("click", this.onClick), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown), this.virtualScroll = new Bu(e, {
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
  scrollTo(s, { offset: t = 0, immediate: e = !1, lock: r = !1, programmatic: i = !0, lerp: n = i ? this.options.lerp : void 0, duration: o = i ? this.options.duration : void 0, easing: a = i ? this.options.easing : void 0, onStart: l, onComplete: c, force: u = !1, userData: d } = {}) {
    if (this.prefersReducedMotion && (i ? e = !0 : (n = 1, o = void 0, a = void 0)), (this.isStopped || this.isLocked) && !u) return;
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
        const p = _.getBoundingClientRect(), m = getComputedStyle(_), x = this.isHorizontal ? Number.parseFloat(m.scrollMarginLeft) : Number.parseFloat(m.scrollMarginTop), y = getComputedStyle(this.rootElement), T = this.isHorizontal ? Number.parseFloat(y.scrollPaddingLeft) : Number.parseFloat(y.scrollPaddingTop);
        h = (this.isHorizontal ? p.left : p.top) + this.animatedScroll - (Number.isNaN(x) ? 0 : x) - (Number.isNaN(T) ? 0 : T);
      }
    }
    if (typeof h == "number") {
      if (h += f, this.options.infinite) {
        if (i) {
          this.targetScroll = this.animatedScroll = this.scroll;
          const _ = h - this.animatedScroll;
          _ > this.limit / 2 ? h -= this.limit : _ < -this.limit / 2 && (h += this.limit);
        }
      } else h = Il(0, h, this.limit);
      if (h === this.targetScroll) {
        l?.(this), c?.(this);
        return;
      }
      if (this.userData = d ?? {}, e) {
        this.animatedScroll = this.targetScroll = h, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), c?.(this), this.userData = {}, requestAnimationFrame(() => {
          this.dispatchScrollendEvent();
        });
        return;
      }
      i || (this.targetScroll = h), typeof o == "number" && typeof a != "function" ? a = aa : typeof a == "function" && typeof o != "number" && (o = 1), this.animate.fromTo(this.animatedScroll, h, {
        duration: o,
        easing: a,
        lerp: n,
        onStart: () => {
          r && (this.isLocked = !0), this.isScrolling = "smooth", l?.(this);
        },
        onUpdate: (_, p) => {
          this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = _ - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = _, this.setScroll(this.scroll), i && (this.targetScroll = _), p || this.emit(), p && (this.reset(), this.emit(), c?.(this), this.userData = {}, requestAnimationFrame(() => {
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
    let n, o, a, l, c, u, d, h, f, _;
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
      ].includes(k.overflowY), c = ["auto"].includes(k.overscrollBehaviorX), u = ["auto"].includes(k.overscrollBehaviorY), i.hasOverflowX = n, i.hasOverflowY = o, !(n || o)) return !1;
      d = s.scrollWidth, h = s.scrollHeight, f = s.clientWidth, _ = s.clientHeight, a = d > f, l = h > _, i.isScrollableX = a, i.isScrollableY = l, i.scrollWidth = d, i.scrollHeight = h, i.clientWidth = f, i.clientHeight = _, i.hasOverscrollBehaviorX = c, i.hasOverscrollBehaviorY = u;
    } else
      a = i.isScrollableX, l = i.isScrollableY, n = i.hasOverflowX, o = i.hasOverflowY, d = i.scrollWidth, h = i.scrollHeight, f = i.clientWidth, _ = i.clientHeight, c = i.hasOverscrollBehaviorX, u = i.hasOverscrollBehaviorY;
    if (!(n && a || o && l)) return !1;
    const p = Math.abs(t) >= Math.abs(e) ? "horizontal" : "vertical";
    let m, x, y, T, v, S;
    if (p === "horizontal")
      m = Math.round(s.scrollLeft), x = d - f, y = t, T = n, v = a, S = c;
    else if (p === "vertical")
      m = Math.round(s.scrollTop), x = h - _, y = e, T = o, v = l, S = u;
    else return !1;
    return !S && (m >= x || m <= 0) ? !0 : (y > 0 ? m < x : m > 0) && T && v;
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
    return this.options.infinite ? Nu(this.animatedScroll, this.limit) : this.animatedScroll;
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
const xt = (s, t = document) => t.querySelector(s), gn = (s, t = document) => [...t.querySelectorAll(s)], la = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function Xu(s) {
  const t = xt("[data-facetas-panel]", s), e = xt("[data-facetas-abrir]", s);
  if (!t || !e) return;
  let r = null;
  const i = () => {
    r = document.activeElement, t.classList.add("is-on"), e.setAttribute("aria-expanded", "true"), document.documentElement.style.overflow = "hidden", window.DropScentsLenis?.stop(), Bl(s), xt(".faceta > summary", t)?.focus();
  }, n = () => {
    t.classList.remove("is-on"), e.setAttribute("aria-expanded", "false"), document.documentElement.style.overflow = "", window.DropScentsLenis?.start(), r?.focus();
  };
  return e.addEventListener("click", () => {
    t.classList.contains("is-on") ? n() : i();
  }), gn("[data-facetas-cerrar]", t).forEach((o) => o.addEventListener("click", n)), t.__cerrar = n, n;
}
typeof document < "u" && !document.__facetasEsc && (document.__facetasEsc = !0, document.addEventListener("keydown", (s) => {
  if (s.key !== "Escape") return;
  document.querySelector("[data-facetas-panel].is-on")?.__cerrar?.();
}));
function $u(s, t) {
  gn("[data-precio]", s).forEach((e) => {
    const r = xt('[data-precio-rango="min"]', e), i = xt('[data-precio-rango="max"]', e), n = xt('[data-precio-campo="min"]', e), o = xt('[data-precio-campo="max"]', e), a = Number(e.dataset.tope) || 0;
    if (!r || !i) return;
    const l = () => {
      e.style.setProperty("--desde", r.value), e.style.setProperty("--hasta", i.value);
    }, c = (d) => {
      let h = Number(r.value), f = Number(i.value);
      h > f && (d === "min" ? f = h : h = f, r.value = String(h), i.value = String(f)), n && (n.value = h === 0 ? "" : String(h)), o && (o.value = f === a ? "" : String(f)), l();
    };
    r.addEventListener("input", () => c("min")), i.addEventListener("input", () => c("max")), r.addEventListener("change", t), i.addEventListener("change", t);
    const u = () => {
      const d = n.value === "" ? 0 : Math.max(0, Math.min(a, Number(n.value))), h = o.value === "" ? a : Math.max(0, Math.min(a, Number(o.value)));
      r.value = String(Math.min(d, h)), i.value = String(Math.max(d, h)), l();
    };
    [n, o].forEach((d) => {
      d && (d.addEventListener("input", u), d.addEventListener("change", t));
    }), c("init");
  });
}
let ws = 0;
async function Xn(s, t, e) {
  const r = ++ws, i = xt("[data-facetas-resultados]", e);
  if (!i) {
    window.location.href = s;
    return;
  }
  i.classList.add("facetas-cargando");
  try {
    const [n, o] = s.split("#"), a = n.includes("?") ? "&" : "?", l = await fetch(`${n}${a}section_id=${encodeURIComponent(t)}`);
    if (!l.ok) throw new Error(l.status);
    const c = await l.text();
    if (r !== ws) return;
    const u = new DOMParser().parseFromString(c, "text/html").querySelector("[data-facetas-resultados]");
    if (!u) throw new Error("la respuesta no trae resultados");
    const d = Hu(e);
    i.innerHTML = u.innerHTML, history.pushState({ facetas: !0 }, "", s), Wl(e), Uu(e, d), d.abierto && Bl(e);
    const h = xt("[data-facetas-rejilla]", e) || i, f = window.scrollY + h.getBoundingClientRect().top - 140;
    f < window.scrollY && (window.DropScentsLenis ? window.DropScentsLenis.scrollTo(f, { duration: la ? 0 : 0.8 }) : window.scrollTo({ top: f, behavior: la ? "auto" : "smooth" })), o && (location.hash = o);
  } catch {
    window.location.href = s;
  } finally {
    r === ws && i.classList.remove("facetas-cargando");
  }
}
function Hu(s) {
  const t = xt("[data-facetas-panel]", s), e = xt(".panel-filtros__cuerpo", s), r = document.activeElement;
  return {
    abierto: !!t?.classList.contains("is-on"),
    desplegadas: gn(".faceta", s).map((i) => i.open),
    scroll: e ? e.scrollTop : 0,
    /* El foco se devuelve por nombre+valor, no por referencia: el elemento
       que tenia el foco ya no existe despues del reemplazo. */
    foco: r && s.contains(r) && r.name ? { name: r.name, value: r.value } : null
  };
}
function Uu(s, t) {
  if (!t) return;
  const e = xt("[data-facetas-panel]", s);
  t.abierto && e && (e.classList.add("is-on"), xt("[data-facetas-abrir]", s)?.setAttribute("aria-expanded", "true")), gn(".faceta", s).forEach((i, n) => {
    t.desplegadas[n] !== void 0 && (i.open = t.desplegadas[n]);
  });
  const r = xt(".panel-filtros__cuerpo", s);
  r && (r.scrollTop = t.scroll), t.foco && (s.querySelector(
    `[name="${CSS.escape(t.foco.name)}"][value="${CSS.escape(t.foco.value)}"]`
  ) || s.querySelector(`[name="${CSS.escape(t.foco.name)}"]`))?.focus({ preventScroll: !0 });
}
function Bl(s) {
  const t = xt("[data-facetas-cuenta]", s)?.textContent.trim(), e = xt('[data-facetas-form] button[type="submit"]', s);
  t && e && (e.textContent = t);
}
function ys(s) {
  const t = new FormData(s), e = new URLSearchParams();
  for (const [n, o] of t.entries())
    String(o).trim() !== "" && e.append(n, o);
  const r = s.getAttribute("action") || window.location.pathname, i = e.toString();
  return i ? `${r}?${i}` : r;
}
function Wl(s) {
  const t = xt("[data-facetas]", s), e = s.dataset.seccionId || t?.dataset.seccion;
  if (!e) return;
  const r = Xu(s), i = xt("[data-facetas-form]", s), n = () => {
    i && Xn(ys(i), e, s);
  };
  i && (i.addEventListener("change", (a) => {
    a.target.matches('input[type="checkbox"], input[type="number"]') && n();
  }), i.addEventListener("submit", (a) => {
    a.preventDefault(), n(), window.innerWidth < 900 && r?.();
  }), $u(i, n));
  const o = xt("[data-facetas-orden]", s);
  o && (o.addEventListener("change", (a) => {
    a.preventDefault(), Xn(ys(o), e, s);
  }), o.addEventListener("submit", (a) => {
    a.preventDefault(), Xn(ys(o), e, s);
  })), s.addEventListener("click", qu);
}
function qu(s) {
  const t = s.target.closest("[data-facetas-enlace]");
  if (!t || s.metaKey || s.ctrlKey || s.shiftKey || t.target === "_blank") return;
  const e = t.closest("[data-seccion-id]");
  e && (s.preventDefault(), Xn(t.href, e.dataset.seccionId, e));
}
function Vu(s = document) {
  gn("[data-seccion-id]", s).forEach((t) => {
    xt("[data-facetas-resultados]", t) && Wl(t);
  }), window.__facetasPop || (window.__facetasPop = !0, window.addEventListener("popstate", (t) => {
    (t.state?.facetas || xt("[data-facetas-resultados]")) && window.location.reload();
  }));
}
const yo = window.matchMedia("(prefers-reduced-motion: reduce)").matches, _e = (s, t = document) => t.querySelector(s), Wt = (s, t = document) => [...t.querySelectorAll(s)], Gu = '[data-chatty-widget="trigger"], #Avada-FAQ_WidgetTrigger', Ku = ".Avada-Faqs_Button.opened, .Avada-Faqs_Button--opened";
function ca() {
  if (_e(Ku)) return !0;
  const s = _e(Gu);
  return s ? (s.click(), !0) : typeof window.ChattyJS?.openWidget == "function" ? (window.ChattyJS.openWidget(), !0) : typeof window.avadaFaqTrigger == "function" ? (window.avadaFaqTrigger(), !0) : !1;
}
function ua() {
  return typeof window.DropScentsChat == "function" ? (window.DropScentsChat(), !0) : window.$crisp ? (window.$crisp.push(["do", "chat:open"]), !0) : window.Tawk_API?.maximize ? (window.Tawk_API.maximize(), !0) : window.tidioChatApi?.open ? (window.tidioChatApi.open(), !0) : window.Intercom ? (window.Intercom("show"), !0) : window.zE ? (window.zE("messenger", "open"), !0) : window.Shopify?.chat?.open ? (window.Shopify.chat.open(), !0) : !1;
}
function Qu() {
  if (typeof window.DropScentsChat == "function") {
    window.DropScentsChat();
    return;
  }
  if (ca() || ua()) return;
  let s = 0;
  const t = setInterval(() => {
    s += 1, (ca() || ua() || s > 24) && (clearInterval(t), s > 24 && Zu());
  }, 250);
}
let fa = 0;
function Zu() {
  const s = window.DropScentsTextos || {};
  let t = _e(".toast");
  if (!t) {
    t = document.createElement("div"), t.className = "toast", t.setAttribute("role", "status");
    const e = document.documentElement.dataset.instagram;
    if (t.textContent = s.chatFallo || "El chat no está respondiendo ahora mismo.", e) {
      const r = document.createElement("a");
      r.href = e, r.target = "_blank", r.rel = "noopener", r.textContent = s.chatInstagram || "Escríbenos por Instagram", t.append(" ", r);
    }
    document.body.appendChild(t);
  }
  requestAnimationFrame(() => t.classList.add("is-on")), clearTimeout(fa), fa = setTimeout(() => t.classList.remove("is-on"), 6e3);
}
function ju() {
  document.addEventListener("click", (s) => {
    s.target.closest("[data-chat]") && (s.preventDefault(), _e("#menu-lateral:not([hidden]) [data-drawer-cerrar]")?.click(), Qu());
  });
}
function Ju(s = document) {
  Wt("[data-galeria]", s).forEach((t) => {
    const e = Wt(".card__slide", t);
    if (e.length < 2) return;
    let r = 0;
    const i = (n) => {
      r = (n + e.length) % e.length, e.forEach((o, a) => o.classList.toggle("is-on", a === r));
    };
    Wt("[data-galeria-paso]", t).forEach((n) => {
      n.addEventListener("click", (o) => {
        o.preventDefault(), o.stopPropagation(), i(r + Number(n.dataset.galeriaPaso));
      });
    });
  });
}
function tf() {
  const s = _e("#menu-lateral");
  if (!s) return;
  const t = _e(".drawer__panel", s), e = _e("[data-drawer-abrir]");
  let r = null;
  const i = () => Wt('a[href], button:not([disabled]), select, input, [tabindex]:not([tabindex="-1"])', t).filter((a) => a.offsetParent !== null);
  function n() {
    r = document.activeElement, s.hidden = !1, requestAnimationFrame(() => s.classList.add("is-on")), e?.setAttribute("aria-expanded", "true"), document.documentElement.style.overflow = "hidden", window.DropScentsLenis?.stop(), i()[0]?.focus();
  }
  function o() {
    s.classList.remove("is-on"), e?.setAttribute("aria-expanded", "false"), document.documentElement.style.overflow = "", window.DropScentsLenis?.start();
    const a = () => {
      s.hidden = !0;
    };
    yo ? a() : setTimeout(a, 420), r?.focus();
  }
  e?.addEventListener("click", n), Wt("[data-drawer-cerrar]", s).forEach((a) => a.addEventListener("click", o)), Wt("a", t).forEach((a) => a.addEventListener("click", o)), document.addEventListener("keydown", (a) => {
    if (s.hidden) return;
    if (a.key === "Escape") {
      o();
      return;
    }
    if (a.key !== "Tab") return;
    const l = i();
    if (!l.length) return;
    const c = l[0], u = l[l.length - 1];
    a.shiftKey && document.activeElement === c ? (a.preventDefault(), u.focus()) : !a.shiftKey && document.activeElement === u && (a.preventDefault(), c.focus());
  });
}
function ef(s = document) {
  Wt("[data-carrusel]", s).forEach((t) => {
    const e = _e("[data-carrusel-pista]", t);
    if (!e) return;
    const r = Wt("[data-carrusel-paso]", t), i = _e("[data-carrusel-progreso]", t), n = () => {
      const a = e.firstElementChild;
      if (!a) return e.clientWidth;
      const l = parseFloat(getComputedStyle(e).columnGap) || 0;
      return a.getBoundingClientRect().width + l;
    };
    r.forEach((a) => {
      a.addEventListener("click", () => {
        e.scrollBy({
          left: n() * Number(a.dataset.carruselPaso),
          behavior: yo ? "auto" : "smooth"
        });
      });
    });
    function o() {
      const a = e.scrollWidth - e.clientWidth, l = e.scrollLeft;
      if (r.forEach((c) => {
        const u = Number(c.dataset.carruselPaso);
        c.disabled = u < 0 ? l <= 2 : l >= a - 2;
      }), i && a > 0) {
        const c = e.clientWidth / e.scrollWidth;
        i.style.width = `${Math.max(c * 100, 8)}%`, i.style.transform = `translateX(${l / a * (100 / Math.max(c, 0.08) - 100)}%)`;
      }
    }
    e.addEventListener("scroll", o, { passive: !0 }), window.addEventListener("resize", o), o();
  });
}
function rf(s = document) {
  yo || window.matchMedia("(hover: hover) and (pointer: fine)").matches && Wt("[data-indice]", s).forEach((t) => {
    const e = _e("[data-indice-vista]", t), r = Wt("[data-indice-fila]", t);
    if (!e || !r.length) return;
    const i = Wt(".indice__vista-img", e), n = e.parentElement, o = Mt.quickTo(e, "x", { duration: 0.5, ease: "power3.out" }), a = Mt.quickTo(e, "y", { duration: 0.5, ease: "power3.out" }), l = (c) => {
      const u = n.getBoundingClientRect(), d = c.clientX - u.left - e.offsetWidth / 2, h = c.clientY - u.top - e.offsetHeight / 2;
      o(Math.min(Math.max(d, 0), u.width - e.offsetWidth)), a(Math.min(Math.max(h, 0), u.height - e.offsetHeight));
    };
    r.forEach((c) => {
      c.addEventListener("pointerenter", (u) => {
        const d = Number(c.dataset.i);
        i.forEach((h, f) => h.classList.toggle("is-on", f === d)), e.classList.add("is-on"), l(u);
      }), c.addEventListener("pointermove", l);
    }), t.addEventListener("pointerleave", () => e.classList.remove("is-on"));
  });
}
function nf(s = document) {
  const t = _e("[data-pdp]", s);
  if (!t) return;
  const e = Wt(".pdp__img", t), r = Wt("[data-pdp-mini]", t), i = _e("[data-pdp-precio]", t), n = _e("[data-pdp-antes]", t), o = window.DropScentsTextos?.formatoDinero || "";
  function a(l) {
    l < 0 || l >= e.length || (e.forEach((c, u) => c.classList.toggle("is-on", u === l)), r.forEach((c, u) => c.classList.toggle("is-on", u === l)));
  }
  r.forEach((l) => l.addEventListener("click", () => a(Number(l.dataset.pdpMini)))), Wt(".pres input", t).forEach((l) => {
    l.addEventListener("change", () => {
      if (i && l.dataset.precio && (i.textContent = ha(Number(l.dataset.precio), o)), n) {
        const u = Number(l.dataset.antes || 0), d = Number(l.dataset.precio || 0);
        u > d ? (n.textContent = ha(u, o), n.hidden = !1) : n.hidden = !0;
      }
      const c = Number(l.dataset.imagen);
      !Number.isNaN(c) && c >= 0 && a(c);
    });
  });
}
function ha(s, t) {
  const e = Number(s) / 100, r = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), i = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
  return t ? t.replace(/\{\{\s*(\w+)\s*\}\}/g, (n, o) => o.includes("no_decimals") ? i.format(Math.round(e)) : r.format(e)) : `$${r.format(e)}`;
}
function sf(s = document) {
  Wt(".cantidad", s).forEach((t) => {
    const e = _e(".cantidad__i", t);
    e && Wt("[data-cantidad]", t).forEach((r) => {
      r.addEventListener("click", () => {
        const i = Number(e.min || 0), n = Math.max(i, (Number(e.value) || 0) + Number(r.dataset.cantidad));
        e.value = String(n), e.dispatchEvent(new Event("change", { bubbles: !0 }));
      });
    });
  });
}
function of(s = document) {
  Wt("[data-envia-al-cambiar]", s).forEach((t) => {
    t.closest("[data-facetas-orden]") || t.addEventListener("change", () => t.form?.submit());
  });
}
function Xl(s = document) {
  Vu(s), Ju(s), ef(s), rf(s), nf(s), sf(s), of(s);
}
Mt.registerPlugin(I);
const bo = window.matchMedia("(prefers-reduced-motion: reduce)").matches, Ze = (s, t = document) => t.querySelector(s), Di = (s, t = document) => [...t.querySelectorAll(s)], da = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }), af = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
function pa(s, t) {
  const e = Number(s) / 100;
  return t ? t.replace(/\{\{\s*(\w+)\s*\}\}/g, (r, i) => {
    switch (i) {
      case "amount":
      case "amount_with_comma_separator":
        return af.format(e);
      case "amount_no_decimals":
      case "amount_no_decimals_with_comma_separator":
      default:
        return da.format(Math.round(e));
    }
  }) : `$${da.format(Math.round(e))}`;
}
function $l() {
  const s = Ze(".picker"), t = Ze("#compare");
  if (!s || !t) return;
  const e = t.dataset.moneyFormat || "", r = Number(t.dataset.envioAfuera || 0), i = {};
  Di("[data-f]", t).forEach((c) => {
    i[c.dataset.f] = c;
  });
  function n(c, u, d) {
    if (!c) return;
    const h = Number(c.dataset.centimos ?? u);
    if (c.dataset.centimos = u, !d || bo || h === u) {
      c.textContent = pa(u, e);
      return;
    }
    const f = { v: h };
    Mt.to(f, {
      v: u,
      duration: 0.55,
      ease: "power2.out",
      onUpdate: () => {
        c.textContent = pa(f.v, e);
      }
    });
  }
  function o(c, u = !0) {
    const d = c.dataset, h = Number(d.full || 0), f = Number(d.envio || 0) || r;
    i.name && (i.name.textContent = d.nombre || ""), i.name2 && (i.name2.textContent = d.nombre || ""), n(i.d5, Number(d.d5 || 0), u), n(i.d10, Number(d.d10 || 0), u), n(i.full, h, u), n(i.full2, h, u), n(i.ship, f, u), n(i.totalUs, h, u), n(i.totalThem, h + f, u), i.link && (i.link.href = d.url || "#");
  }
  const a = Di(".chip", s);
  a.forEach((c) => {
    c.addEventListener("click", () => {
      a.forEach((u) => u.setAttribute("aria-pressed", String(u === c))), o(c);
    });
  });
  const l = a.find((c) => c.getAttribute("aria-pressed") === "true") || a[0];
  l && o(l, !1);
}
function Hl() {
  Di(".card__slide, .mini__shot img, .pdp__img").forEach((s) => {
    const t = () => {
      if (s.parentElement.querySelector(".card__sinfoto")) return;
      const e = document.createElement("span");
      e.className = "card__sinfoto", e.setAttribute("aria-hidden", "true"), s.parentElement.appendChild(e), s.style.display = "none";
    };
    s.addEventListener("error", t), s.complete && s.naturalWidth === 0 && t();
  });
}
let hi = null;
function lf() {
  bo || (hi = new Wu({ lerp: 0.11, wheelMultiplier: 1, touchMultiplier: 1.6 }), hi.on("scroll", I.update), Mt.ticker.add((s) => hi.raf(s * 1e3)), Mt.ticker.lagSmoothing(0), window.DropScentsLenis = hi), Di('a[href^="#"]').forEach((s) => {
    s.addEventListener("click", (t) => {
      const e = s.getAttribute("href");
      if (!e || e === "#") return;
      const r = e === "#top" ? 0 : Ze(e);
      !r && r !== 0 || (t.preventDefault(), hi ? hi.scrollTo(r, { offset: -72, duration: 1.15 }) : window.scrollTo({ top: r === 0 ? 0 : r.offsetTop - 72 }));
    });
  });
}
function cf() {
  bo || (Ze("[data-hero-in]") && (Mt.set("[data-hero-in]", { opacity: 0, y: 26 }), Mt.timeline({ delay: 0.15 }).to("[data-hero-in]", {
    opacity: 1,
    y: 0,
    duration: 1.05,
    ease: "expo.out",
    stagger: 0.055
  })), Ze(".step") && Mt.matchMedia().add(
    { ancho: "(min-width: 900px)", angosto: "(max-width: 899px)" },
    (s) => {
      const t = s.conditions.ancho ? 50 : 0;
      Di(".step").forEach((e, r) => {
        Mt.from(e, {
          opacity: 0,
          y: 70,
          x: r === 1 ? t : -t,
          rotate: t ? r === 1 ? 1.6 : -1.6 : 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: { trigger: e, start: "top 88%" }
        }), Mt.to(e, {
          yPercent: -6 - r * 5,
          ease: "none",
          scrollTrigger: { trigger: ".steps", start: "top bottom", end: "bottom top", scrub: 1 }
        });
      });
    }
  ), Ze(".compare") && (Mt.from(".compare__col--us", {
    opacity: 0,
    xPercent: 4,
    scale: 0.97,
    duration: 1,
    ease: "expo.out",
    scrollTrigger: { trigger: ".compare", start: "top 82%" }
  }), Mt.from(".compare__col--them", {
    opacity: 0,
    xPercent: -4,
    scale: 0.97,
    duration: 1,
    ease: "expo.out",
    delay: 0.08,
    scrollTrigger: { trigger: ".compare", start: "top 82%" }
  }), Mt.from(".chip", {
    opacity: 0,
    y: 14,
    duration: 0.6,
    ease: "power3.out",
    stagger: 0.045,
    scrollTrigger: { trigger: ".picker", start: "top 90%" }
  })), Ze("[data-reveal-card]") && I.batch("[data-reveal-card]", {
    start: "top 92%",
    onEnter: (s) => Mt.from(s, {
      opacity: 0,
      y: 46,
      scale: 0.97,
      duration: 0.85,
      ease: "expo.out",
      stagger: 0.07,
      overwrite: !0
    })
  }), Di(".qa__item").forEach((s, t) => {
    Mt.from(s, {
      opacity: 0,
      x: -24,
      duration: 0.7,
      ease: "power3.out",
      delay: t * 0.03,
      scrollTrigger: { trigger: s, start: "top 92%" }
    });
  }), Ze(".bubble") && Mt.from(".bubble", {
    opacity: 0,
    y: 26,
    scale: 0.92,
    transformOrigin: "bottom center",
    duration: 0.6,
    ease: "back.out(1.6)",
    stagger: 0.13,
    scrollTrigger: { trigger: ".chat", start: "top 82%" }
  }), Ze(".cierre__card") && Mt.from(".cierre__card", {
    opacity: 0,
    scale: 0.96,
    y: 40,
    duration: 1.1,
    ease: "expo.out",
    scrollTrigger: { trigger: ".cierre", start: "top 85%" }
  }));
}
function uf() {
  const s = Ze("#nav");
  s && I.create({
    start: "top -60",
    end: 99999,
    onToggle: (t) => s.classList.toggle("is-stuck", t.isActive)
  });
}
function ff() {
  "scrollRestoration" in history && (history.scrollRestoration = "manual"), window.scrollTo(0, 0), window.addEventListener("pageshow", () => window.scrollTo(0, 0)), ju(), tf(), $l(), Hl(), lf(), Xl(), cf(), uf(), document.fonts?.ready && document.fonts.ready.then(() => I.refresh());
}
function hf() {
  window.Shopify?.designMode && (document.addEventListener("shopify:section:load", (s) => {
    Xl(s.target), $l(), Hl(), I.refresh();
  }), document.addEventListener("shopify:section:unload", () => I.refresh()));
}
const Ue = (s, t = document) => t.querySelector(s), df = (s, t = document) => Array.from(t.querySelectorAll(s)), pf = "carrito-drawer";
async function Ul() {
  const s = Ue("[data-carrito-drawer]");
  if (!s) return;
  const t = s.classList.contains("is-on"), e = await fetch(`${window.Shopify?.routes?.root || "/"}?section_id=${pf}`);
  if (!e.ok) return;
  const r = await e.text(), i = new DOMParser().parseFromString(r, "text/html").querySelector("[data-carrito-drawer]");
  i && (t && (i.classList.add("is-on"), i.hidden = !1), s.replaceWith(i), ql());
}
function ql() {
  const s = Ue("[data-carrito-drawer] [data-cart-count]"), t = s ? s.textContent.trim() : null;
  t !== null && df("[data-cart-count]").forEach((e) => {
    e.closest("[data-carrito-drawer]") || (e.textContent = t, e.hidden = t === "0");
  });
}
let qs = null;
function _a() {
  const s = Ue("[data-carrito-drawer]");
  return s ? (qs = document.activeElement, s.hidden = !1, requestAnimationFrame(() => s.classList.add("is-on")), document.documentElement.style.overflow = "hidden", window.DropScentsLenis?.stop(), Ue(".drawer__cerrar", s)?.focus(), !0) : !1;
}
function ga() {
  const s = Ue("[data-carrito-drawer]");
  s && (s.classList.remove("is-on"), document.documentElement.style.overflow = "", window.DropScentsLenis?.start(), setTimeout(() => {
    s.hidden = !0;
  }, 320), qs?.focus?.(), qs = null);
}
function _f() {
  Ue("[data-carrito-drawer]") && (document.addEventListener("click", (s) => {
    if (s.target.closest("[data-abrir-carrito]")) {
      if (s.metaKey || s.ctrlKey || s.shiftKey || s.button !== 0) return;
      s.preventDefault(), _a();
      return;
    }
    s.target.closest("[data-drawer-cerrar]") && s.target.closest("[data-carrito-drawer]") && (s.preventDefault(), ga());
  }), document.addEventListener("keydown", (s) => {
    if (s.key !== "Escape") return;
    Ue("[data-carrito-drawer].is-on") && ga();
  }), document.addEventListener("submit", async (s) => {
    const t = s.target.closest('form[action*="/cart/add"]');
    if (!t) return;
    s.preventDefault();
    const e = t.querySelector('[type="submit"]');
    e?.classList.add("is-cargando");
    try {
      if (!(await fetch(`${window.Shopify?.routes?.root || "/"}cart/add.js`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(t)
      })).ok) {
        t.submit();
        return;
      }
      await Ul(), _a();
    } catch {
      t.submit();
    } finally {
      e?.classList.remove("is-cargando");
    }
  }), document.addEventListener("click", async (s) => {
    if (!s.target.closest("[data-carrito-drawer]")) return;
    const e = s.target.closest("[data-quitar]");
    if (e) {
      s.preventDefault();
      const o = e.closest(".dlinea")?.querySelector("[data-linea]")?.dataset.linea;
      o && await bs(Number(o), 0);
      return;
    }
    const r = s.target.closest("[data-cantidad]");
    if (!r) return;
    s.preventDefault();
    const i = r.parentElement.querySelector(".cantidad__i");
    if (!i) return;
    const n = Math.max(0, Number(i.value || 0) + Number(r.dataset.cantidad));
    await bs(Number(i.dataset.linea), n);
  }), document.addEventListener("change", async (s) => {
    const t = s.target.closest("[data-carrito-drawer] .cantidad__i");
    t && await bs(Number(t.dataset.linea), Math.max(0, Number(t.value || 0)));
  }), ql());
}
async function bs(s, t) {
  if (!s) return;
  Ue("[data-carrito-drawer]")?.classList.add("is-ocupado");
  try {
    (await fetch(`${window.Shopify?.routes?.root || "/"}cart/change.js`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ line: s, quantity: t })
    })).ok && await Ul();
  } finally {
    Ue("[data-carrito-drawer]")?.classList.remove("is-ocupado");
  }
}
function gf() {
  const s = Ue("[data-atc-fija]"), t = Ue(".pdp__atc");
  if (!s || !t) return;
  new IntersectionObserver(([r]) => {
    s.classList.toggle("is-on", !r.isIntersecting);
  }, { rootMargin: "0px 0px -8px 0px" }).observe(t);
}
ff();
_f();
gf();
hf();
