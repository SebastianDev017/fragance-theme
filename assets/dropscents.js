var $l = Object.defineProperty;
var Ul = (s, t, e) => t in s ? $l(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var R = (s, t, e) => Ul(s, typeof t != "symbol" ? t + "" : t, e);
function ar(s) {
  if (s === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function _a(s, t) {
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
}, qs, Wt, lt, Fe = 1e8, st = 1 / Fe, bs = Math.PI * 2, Vl = bs / 4, ql = 0, ga = Math.sqrt, Gl = Math.cos, Kl = Math.sin, Ft = function(t) {
  return typeof t == "string";
}, mt = function(t) {
  return typeof t == "function";
}, hr = function(t) {
  return typeof t == "number";
}, Gs = function(t) {
  return typeof t > "u";
}, er = function(t) {
  return typeof t == "object";
}, fe = function(t) {
  return t !== !1;
}, Ks = function() {
  return typeof window < "u";
}, wn = function(t) {
  return mt(t) || Ft(t);
}, ma = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Zt = Array.isArray, Ql = /random\([^)]+\)/g, Zl = /,\s*/g, xo = /(?:-?\.?\d|\.)+/gi, va = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, pi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ss = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, ya = /[+-]=-?[.\d]+/, Jl = /[^,'"\[\]\s]+/gi, jl = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ft, Ke, xs, Qs, Me = {}, Hn = {}, wa, ba = function(t) {
  return (Hn = Ei(t, Me)) && ge;
}, Zs = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, on = function(t, e) {
  return !e && console.warn(t);
}, xa = function(t, e) {
  return t && (Me[t] = e) && Hn && (Hn[t] = e) || Me;
}, an = function() {
  return 0;
}, tc = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, An = {
  suppressEvents: !0,
  kill: !1
}, ec = {
  suppressEvents: !0
}, Js = {}, kr = [], Ss = {}, Sa, xe = {}, os = {}, So = 30, Ln = [], js = "", to = function(t) {
  var e = t[0], r, i;
  if (er(e) || mt(e) || (t = [t]), !(r = (e._gsap || {}).harness)) {
    for (i = Ln.length; i-- && !Ln[i].targetTest(e); )
      ;
    r = Ln[i];
  }
  for (i = t.length; i--; )
    t[i] && (t[i]._gsap || (t[i]._gsap = new Ua(t[i], r))) || t.splice(i, 1);
  return t;
}, qr = function(t) {
  return t._gsap || to(ze(t))[0]._gsap;
}, Ta = function(t, e, r) {
  return (r = t[e]) && mt(r) ? t[e]() : Gs(r) && t.getAttribute && t.getAttribute(e) || r;
}, he = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, bt = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, ut = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, mi = function(t, e) {
  var r = e.charAt(0), i = parseFloat(e.substr(2));
  return t = parseFloat(t), r === "+" ? t + i : r === "-" ? t - i : r === "*" ? t * i : t / i;
}, rc = function(t, e) {
  for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; )
    ;
  return i < r;
}, $n = function() {
  var t = kr.length, e = kr.slice(0), r, i;
  for (Ss = {}, kr.length = 0, r = 0; r < t; r++)
    i = e[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, eo = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, Ea = function(t, e, r, i) {
  kr.length && !Wt && $n(), t.render(e, r, !!(Wt && e < 0 && eo(t))), kr.length && !Wt && $n();
}, Ca = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(Jl).length < 2 ? e : Ft(t) ? t.trim() : t;
}, ka = function(t) {
  return t;
}, Oe = function(t, e) {
  for (var r in e)
    r in t || (t[r] = e[r]);
  return t;
}, ic = function(t) {
  return function(e, r) {
    for (var i in r)
      i in e || i === "duration" && t || i === "ease" || (e[i] = r[i]);
  };
}, Ei = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, To = function s(t, e) {
  for (var r in e)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = er(e[r]) ? s(t[r] || (t[r] = {}), e[r]) : e[r]);
  return t;
}, Un = function(t, e) {
  var r = {}, i;
  for (i in t)
    i in e || (r[i] = t[i]);
  return r;
}, Vi = function(t) {
  var e = t.parent || ft, r = t.keyframes ? ic(Zt(t.keyframes)) : Oe;
  if (fe(t.inherit))
    for (; e; )
      r(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, nc = function(t, e) {
  for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; )
    ;
  return r < 0;
}, Pa = function(t, e, r, i, n) {
  var o = t[i], a;
  if (n)
    for (a = e[n]; o && o[n] > a; )
      o = o._prev;
  return o ? (e._next = o._next, o._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = o, e.parent = e._dp = t, e;
}, ts = function(t, e, r, i) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var n = e._prev, o = e._next;
  n ? n._next = o : t[r] === e && (t[r] = o), o ? o._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null;
}, Or = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, Gr = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var r = t; r; )
      r._dirty = 1, r = r.parent;
  return t;
}, sc = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, Ts = function(t, e, r, i) {
  return t._startAt && (Wt ? t._startAt.revert(An) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i));
}, oc = function s(t) {
  return !t || t._ts && s(t.parent);
}, Eo = function(t) {
  return t._repeat ? Ci(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, Ci = function(t, e) {
  var r = Math.floor(t = ut(t / e));
  return t && r === t ? r - 1 : r;
}, Vn = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, es = function(t) {
  return t._end = ut(t._start + (t._tDur / Math.abs(t._ts || t._rts || st) || 0));
}, rs = function(t, e) {
  var r = t._dp;
  return r && r.smoothChildTiming && t._ts && (t._start = ut(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), es(t), r._dirty || Gr(r, t)), t;
}, Ma = function(t, e) {
  var r;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = Vn(t.rawTime(), e), (!e._dur || _n(0, e.totalDuration(), r) - e._tTime > st) && e.render(r, !0)), Gr(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (r = t; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    t._zTime = -st;
  }
}, Ze = function(t, e, r, i) {
  return e.parent && Or(e), e._start = ut((hr(r) ? r : r || t !== ft ? Re(t, r, e) : t._time) + e._delay), e._end = ut(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Pa(t, e, "_first", "_last", t._sort ? "_start" : 0), Es(e) || (t._recent = e), i || Ma(t, e), t._ts < 0 && rs(t, t._tTime), t;
}, Oa = function(t, e) {
  return (Me.ScrollTrigger || Zs("scrollTrigger", e)) && Me.ScrollTrigger.create(e, t);
}, Da = function(t, e, r, i, n) {
  if (io(t, e, n), !t._initted)
    return 1;
  if (!r && t._pt && !Wt && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Sa !== Te.frame)
    return kr.push(t), t._lazy = [n, i], 1;
}, ac = function s(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || s(e));
}, Es = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, lc = function(t, e, r, i) {
  var n = t.ratio, o = e < 0 || !e && (!t._start && ac(t) && !(!t._initted && Es(t)) || (t._ts < 0 || t._dp._ts < 0) && !Es(t)) ? 0 : 1, a = t._rDelay, l = 0, c, u, d;
  if (a && t._repeat && (l = _n(0, t._tDur, e), u = Ci(l, a), t._yoyo && u & 1 && (o = 1 - o), u !== Ci(t._tTime, a) && (n = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== n || Wt || i || t._zTime === st || !e && t._zTime) {
    if (!t._initted && Da(t, e, i, r, l))
      return;
    for (d = t._zTime, t._zTime = e || (r ? st : 0), r || (r = e && !d), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = l, c = t._pt; c; )
      c.r(o, c.d), c = c._next;
    e < 0 && Ts(t, e, r, !0), t._onUpdate && !r && Ce(t, "onUpdate"), l && t._repeat && !r && t.parent && Ce(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && Or(t, 1), !r && !Wt && (Ce(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = e);
}, cc = function(t, e, r) {
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
  return a && !i && (t._time *= o / t._dur), t._dur = o, t._tDur = n ? n < 0 ? 1e10 : ut(o * (n + 1) + t._rDelay * n) : o, a > 0 && !i && rs(t, t._tTime = t._tDur * a), t.parent && es(t), r || Gr(t.parent, t), t;
}, Co = function(t) {
  return t instanceof ue ? Gr(t) : ki(t, t._dur);
}, uc = {
  _start: 0,
  endTime: an,
  totalDuration: an
}, Re = function s(t, e, r) {
  var i = t.labels, n = t._recent || uc, o = t.duration() >= Fe ? n.endTime(!1) : t._dur, a, l, c;
  return Ft(e) && (isNaN(e) || e in i) ? (l = e.charAt(0), c = e.substr(-1) === "%", a = e.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (e = e.replace(/=/, "")), (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (c ? (a < 0 ? n : r).totalDuration() / 100 : 1)) : a < 0 ? (e in i || (i[e] = o), i[e]) : (l = parseFloat(e.charAt(a - 1) + e.substr(a + 1)), c && r && (l = l / 100 * (Zt(r) ? r[0] : r).totalDuration()), a > 1 ? s(t, e.substr(0, a - 1), r) + l : o + l)) : e == null ? o : +e;
}, qi = function(t, e, r) {
  var i = hr(e[1]), n = (i ? 2 : 1) + (t < 2 ? 0 : 1), o = e[n], a, l;
  if (i && (o.duration = e[1]), o.parent = r, t) {
    for (a = o, l = r; l && !("immediateRender" in a); )
      a = l.vars.defaults || {}, l = fe(l.vars.inherit) && l.parent;
    o.immediateRender = fe(a.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[n - 1];
  }
  return new kt(e[0], o, e[n + 1]);
}, Lr = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, _n = function(t, e, r) {
  return r < t ? t : r > e ? e : r;
}, Kt = function(t, e) {
  return !Ft(t) || !(e = jl.exec(t)) ? "" : e[1];
}, fc = function(t, e, r) {
  return Lr(r, function(i) {
    return _n(t, e, i);
  });
}, Cs = [].slice, Ra = function(t, e) {
  return t && er(t) && "length" in t && (!e && !t.length || t.length - 1 in t && er(t[0])) && !t.nodeType && t !== Ke;
}, hc = function(t, e, r) {
  return r === void 0 && (r = []), t.forEach(function(i) {
    var n;
    return Ft(i) && !e || Ra(i, 1) ? (n = r).push.apply(n, ze(i)) : r.push(i);
  }) || r;
}, ze = function(t, e, r) {
  return lt && !e && lt.selector ? lt.selector(t) : Ft(t) && !r && (xs || !Pi()) ? Cs.call((e || Qs).querySelectorAll(t), 0) : Zt(t) ? hc(t, r) : Ra(t) ? Cs.call(t, 0) : t ? [t] : [];
}, ks = function(t) {
  return t = ze(t)[0] || on("Invalid scope") || {}, function(e) {
    var r = t.current || t.nativeElement || t;
    return ze(e, r.querySelectorAll ? r : r === t ? on("Invalid scope") || Qs.createElement("div") : t);
  };
}, Aa = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, La = function(t) {
  if (mt(t))
    return t;
  var e = er(t) ? t : {
    each: t
  }, r = Kr(e.ease), i = e.from || 0, n = parseFloat(e.base) || 0, o = {}, a = i > 0 && i < 1, l = isNaN(i) || a, c = e.axis, u = i, d = i;
  return Ft(i) ? u = d = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !a && l && (u = i[0], d = i[1]), function(h, f, _) {
    var p = (_ || e).length, m = o[p], x, w, T, v, S, k, b, P, C;
    if (!m) {
      if (C = e.grid === "auto" ? 0 : (e.grid || [1, Fe])[1], !C) {
        for (b = -Fe; b < (b = _[C++].getBoundingClientRect().left) && C < p; )
          ;
        C < p && C--;
      }
      for (m = o[p] = [], x = l ? Math.min(C, p) * u - 0.5 : i % C, w = C === Fe ? 0 : l ? p * d / C - 0.5 : i / C | 0, b = 0, P = Fe, k = 0; k < p; k++)
        T = k % C - x, v = w - (k / C | 0), m[k] = S = c ? Math.abs(c === "y" ? v : T) : ga(T * T + v * v), S > b && (b = S), S < P && (P = S);
      i === "random" && Aa(m), m.max = b - P, m.min = P, m.v = p = (parseFloat(e.amount) || parseFloat(e.each) * (C > p ? p - 1 : c ? c === "y" ? p / C : C : Math.max(C, p / C)) || 0) * (i === "edges" ? -1 : 1), m.b = p < 0 ? n - p : n, m.u = Kt(e.amount || e.each) || 0, r = r && p < 0 ? Ec(r) : r;
    }
    return p = (m[h] - m.min) / m.max || 0, ut(m.b + (r ? r(p) : p) * m.v) + m.u;
  };
}, Ps = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(r) {
    var i = ut(Math.round(parseFloat(r) / t) * t * e);
    return (i - i % 1) / e + (hr(r) ? 0 : Kt(r));
  };
}, Na = function(t, e) {
  var r = Zt(t), i, n;
  return !r && er(t) && (i = r = t.radius || Fe, t.values ? (t = ze(t.values), (n = !hr(t[0])) && (i *= i)) : t = Ps(t.increment)), Lr(e, r ? mt(t) ? function(o) {
    return n = t(o), Math.abs(n - o) <= i ? n : o;
  } : function(o) {
    for (var a = parseFloat(n ? o.x : o), l = parseFloat(n ? o.y : 0), c = Fe, u = 0, d = t.length, h, f; d--; )
      n ? (h = t[d].x - a, f = t[d].y - l, h = h * h + f * f) : h = Math.abs(t[d] - a), h < c && (c = h, u = d);
    return u = !i || c <= i ? t[u] : o, n || u === o || hr(o) ? u : u + Kt(o);
  } : Ps(t));
}, Fa = function(t, e, r, i) {
  return Lr(Zt(t) ? !e : r === !0 ? !!(r = 0) : !i, function() {
    return Zt(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + r * 0.99)) / r) * r * i) / i;
  });
}, dc = function() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return function(i) {
    return e.reduce(function(n, o) {
      return o(n);
    }, i);
  };
}, pc = function(t, e) {
  return function(r) {
    return t(parseFloat(r)) + (e || Kt(r));
  };
}, _c = function(t, e, r) {
  return Ia(t, e, 0, 1, r);
}, za = function(t, e, r) {
  return Lr(r, function(i) {
    return t[~~e(i)];
  });
}, gc = function s(t, e, r) {
  var i = e - t;
  return Zt(t) ? za(t, s(0, t.length), e) : Lr(r, function(n) {
    return (i + (n - t) % i) % i + t;
  });
}, mc = function s(t, e, r) {
  var i = e - t, n = i * 2;
  return Zt(t) ? za(t, s(0, t.length - 1), e) : Lr(r, function(o) {
    return o = (n + (o - t) % n) % n || 0, t + (o > i ? n - o : o);
  });
}, ln = function(t) {
  return t.replace(Ql, function(e) {
    var r = e.indexOf("[") + 1, i = e.substring(r || 7, r ? e.indexOf("]") : e.length - 1).split(Zl);
    return Fa(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5);
  });
}, Ia = function(t, e, r, i, n) {
  var o = e - t, a = i - r;
  return Lr(n, function(l) {
    return r + ((l - t) / o * a || 0);
  });
}, vc = function s(t, e, r, i) {
  var n = isNaN(t + e) ? 0 : function(f) {
    return (1 - f) * t + f * e;
  };
  if (!n) {
    var o = Ft(t), a = {}, l, c, u, d, h;
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
  return Lr(r, n);
}, ko = function(t, e, r) {
  var i = t.labels, n = Fe, o, a, l;
  for (o in i)
    a = i[o] - e, a < 0 == !!r && a && n > (a = Math.abs(a)) && (l = o, n = a);
  return l;
}, Ce = function(t, e, r) {
  var i = t.vars, n = i[e], o = lt, a = t._ctx, l, c, u;
  if (n)
    return l = i[e + "Params"], c = i.callbackScope || t, r && kr.length && $n(), a && (lt = a), u = l ? n.apply(c, l) : n.call(c), lt = o, u;
}, Yi = function(t) {
  return Or(t), t.scrollTrigger && t.scrollTrigger.kill(!!Wt), t.progress() < 1 && Ce(t, "onInterrupt"), t;
}, _i, Ya = [], Ba = function(t) {
  if (t)
    if (t = !t.name && t.default || t, Ks() || t.headless) {
      var e = t.name, r = mt(t), i = e && !r && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: an,
        render: oo,
        add: ro,
        kill: Nc,
        modifier: Lc,
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
        Oe(i, Oe(Un(t, n), o)), Ei(i.prototype, Ei(n, Un(t, o))), xe[i.prop = e] = i, t.targetTest && (Ln.push(i), Js[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      xa(e, i), t.register && t.register(ge, i, de);
    } else
      Ya.push(t);
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
}, Wa = function(t, e, r) {
  var i = t ? hr(t) ? [t >> 16, t >> 8 & nt, t & nt] : 0 : Bi.black, n, o, a, l, c, u, d, h, f, _;
  if (!i) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Bi[t])
      i = Bi[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), o = t.charAt(2), a = t.charAt(3), t = "#" + n + n + o + o + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return i = parseInt(t.substr(1, 6), 16), [i >> 16, i >> 8 & nt, i & nt, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & nt, t & nt];
    } else if (t.substr(0, 3) === "hsl") {
      if (i = _ = t.match(xo), !e)
        l = +i[0] % 360 / 360, c = +i[1] / 100, u = +i[2] / 100, o = u <= 0.5 ? u * (c + 1) : u + c - u * c, n = u * 2 - o, i.length > 3 && (i[3] *= 1), i[0] = as(l + 1 / 3, n, o), i[1] = as(l, n, o), i[2] = as(l - 1 / 3, n, o);
      else if (~t.indexOf("="))
        return i = t.match(va), r && i.length < 4 && (i[3] = 1), i;
    } else
      i = t.match(xo) || Bi.transparent;
    i = i.map(Number);
  }
  return e && !_ && (n = i[0] / nt, o = i[1] / nt, a = i[2] / nt, d = Math.max(n, o, a), h = Math.min(n, o, a), u = (d + h) / 2, d === h ? l = c = 0 : (f = d - h, c = u > 0.5 ? f / (2 - d - h) : f / (d + h), l = d === n ? (o - a) / f + (o < a ? 6 : 0) : d === o ? (a - n) / f + 2 : (n - o) / f + 4, l *= 60), i[0] = ~~(l + 0.5), i[1] = ~~(c * 100 + 0.5), i[2] = ~~(u * 100 + 0.5)), r && i.length < 4 && (i[3] = 1), i;
}, Xa = function(t) {
  var e = [], r = [], i = -1;
  return t.split(Pr).forEach(function(n) {
    var o = n.match(pi) || [];
    e.push.apply(e, o), r.push(i += o.length + 1);
  }), e.c = r, e;
}, Po = function(t, e, r) {
  var i = "", n = (t + i).match(Pr), o = e ? "hsla(" : "rgba(", a = 0, l, c, u, d;
  if (!n)
    return t;
  if (n = n.map(function(h) {
    return (h = Wa(h, e, 1)) && o + (e ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")";
  }), r && (u = Xa(t), l = r.c, l.join(i) !== u.c.join(i)))
    for (c = t.replace(Pr, "1").split(pi), d = c.length - 1; a < d; a++)
      i += c[a] + (~l.indexOf(a) ? n.shift() || o + "0,0,0,0)" : (u.length ? u : n.length ? n : r).shift());
  if (!c)
    for (c = t.split(Pr), d = c.length - 1; a < d; a++)
      i += c[a] + n[a];
  return i + c[d];
}, Pr = function() {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Bi)
    s += "|" + t + "\\b";
  return new RegExp(s + ")", "gi");
}(), yc = /hsl[a]?\(/, Ha = function(t) {
  var e = t.join(" "), r;
  if (Pr.lastIndex = 0, Pr.test(e))
    return r = yc.test(e), t[1] = Po(t[1], r), t[0] = Po(t[0], r, Xa(t[1])), !0;
}, cn, Te = function() {
  var s = Date.now, t = 500, e = 33, r = s(), i = r, n = 1e3 / 240, o = n, a = [], l, c, u, d, h, f, _ = function p(m) {
    var x = s() - i, w = m === !0, T, v, S, k;
    if ((x > t || x < 0) && (r += x - e), i += x, S = i - r, T = S - o, (T > 0 || w) && (k = ++d.frame, h = S - d.time * 1e3, d.time = S = S / 1e3, o += T + (T >= n ? 4 : n - T), v = 1), w || (l = c(p)), v)
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
      wa && (!xs && Ks() && (Ke = xs = window, Qs = Ke.document || {}, Me.gsap = ge, (Ke.gsapVersions || (Ke.gsapVersions = [])).push(ge.version), ba(Hn || Ke.GreenSockGlobals || !Ke.gsap && Ke || {}), Ya.forEach(Ba)), u = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && d.sleep(), c = u || function(m) {
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
    add: function(m, x, w) {
      var T = x ? function(v, S, k, b) {
        m(v, S, k, b), d.remove(T);
      } : m;
      return d.remove(m), a[w ? "unshift" : "push"](T), Pi(), T;
    },
    remove: function(m, x) {
      ~(x = a.indexOf(m)) && a.splice(x, 1) && f >= x && f--;
    },
    _listeners: a
  }, d;
}(), Pi = function() {
  return !cn && Te.wake();
}, G = {}, wc = /^[\d.\-M][\d.\-,\s]/, bc = /["']/g, xc = function(t) {
  for (var e = {}, r = t.substr(1, t.length - 3).split(":"), i = r[0], n = 1, o = r.length, a, l, c; n < o; n++)
    l = r[n], a = n !== o - 1 ? l.lastIndexOf(",") : l.length, c = l.substr(0, a), e[i] = isNaN(c) ? c.replace(bc, "").trim() : +c, i = l.substr(a + 1).trim();
  return e;
}, Sc = function(t) {
  var e = t.indexOf("(") + 1, r = t.indexOf(")"), i = t.indexOf("(", e);
  return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
}, Tc = function(t) {
  var e = (t + "").split("("), r = G[e[0]];
  return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [xc(e[1])] : Sc(t).split(",").map(Ca)) : G._CE && wc.test(t) ? G._CE("", t) : r;
}, Ec = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, Kr = function(t, e) {
  return t && (mt(t) ? t : G[t] || Tc(t)) || e;
}, ii = function(t, e, r, i) {
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
}, $a = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, ls = function s(t, e, r) {
  var i = e >= 1 ? e : 1, n = (r || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), o = n / bs * (Math.asin(1 / i) || 0), a = function(u) {
    return u === 1 ? 1 : i * Math.pow(2, -10 * u) * Kl((u - o) * n) + 1;
  }, l = t === "out" ? a : t === "in" ? function(c) {
    return 1 - a(1 - c);
  } : $a(a);
  return n = bs / n, l.config = function(c, u) {
    return s(t, c, u);
  }, l;
}, cs = function s(t, e) {
  e === void 0 && (e = 1.70158);
  var r = function(o) {
    return o ? --o * o * ((e + 1) * o + e) + 1 : 0;
  }, i = t === "out" ? r : t === "in" ? function(n) {
    return 1 - r(1 - n);
  } : $a(r);
  return i.config = function(n) {
    return s(t, n);
  }, i;
};
he("Linear,Quad,Cubic,Quart,Quint,Strong", function(s, t) {
  var e = t < 5 ? t + 1 : t;
  ii(s + ",Power" + (e - 1), t ? function(r) {
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
ii("Elastic", ls("in"), ls("out"), ls());
(function(s, t) {
  var e = 1 / t, r = 2 * e, i = 2.5 * e, n = function(a) {
    return a < e ? s * a * a : a < r ? s * Math.pow(a - 1.5 / t, 2) + 0.75 : a < i ? s * (a -= 2.25 / t) * a + 0.9375 : s * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  ii("Bounce", function(o) {
    return 1 - n(1 - o);
  }, n);
})(7.5625, 2.75);
ii("Expo", function(s) {
  return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
});
ii("Circ", function(s) {
  return -(ga(1 - s * s) - 1);
});
ii("Sine", function(s) {
  return s === 1 ? 1 : -Gl(s * Vl) + 1;
});
ii("Back", cs("in"), cs("out"), cs());
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
  return js += s + "," + s + "Params,";
});
var Ua = function(t, e) {
  this.id = ql++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Ta, this.set = e ? e.getSetter : so;
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
      for (rs(this, r), !n._dp || n.parent || Ma(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && Ze(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === st || !this._initted && this._dur && r || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), Ea(this, r, i)), this;
  }, t.time = function(r, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + Eo(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time;
  }, t.totalProgress = function(r, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(r, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Eo(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(r, i) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * n, i) : this._repeat ? Ci(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(r, i) {
    if (!arguments.length)
      return this._rts === -st ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var n = this.parent && this._ts ? Vn(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -st ? 0 : this._rts, this.totalTime(_n(-Math.abs(this._delay), this.totalDuration(), n), i !== !1), es(this), sc(this);
  }, t.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Pi(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== st && (this._tTime -= st)))), this) : this._ps;
  }, t.startTime = function(r) {
    if (arguments.length) {
      this._start = ut(r);
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && Ze(i, this, this._start - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(r) {
    return this._start + (fe(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(r) {
    var i = this.parent || this._dp;
    return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Vn(i.rawTime(r), this) : this._tTime : this._tTime;
  }, t.revert = function(r) {
    r === void 0 && (r = ec);
    var i = Wt;
    return Wt = r, eo(this) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), Wt = i, this;
  }, t.globalTime = function(r) {
    for (var i = this, n = arguments.length ? r : i.rawTime(); i; )
      n = i._start + n / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(r) : n;
  }, t.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, Co(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(r) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = r, Co(this), i ? this.time(i) : this;
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
      var a = mt(r) ? r : ka, l = function() {
        var u = i.then;
        i.then = null, n && n(), mt(a) && (a = a(i)) && (a.then || a === i) && (i.then = u), o(a), i.then = u;
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
  _a(t, s);
  function t(r, i) {
    var n;
    return r === void 0 && (r = {}), n = s.call(this, r) || this, n.labels = {}, n.smoothChildTiming = !!r.smoothChildTiming, n.autoRemoveChildren = !!r.autoRemoveChildren, n._sort = fe(r.sortChildren), ft && Ze(r.parent || ft, ar(n), i), r.reversed && n.reverse(), r.paused && n.paused(!0), r.scrollTrigger && Oa(ar(n), r.scrollTrigger), n;
  }
  var e = t.prototype;
  return e.to = function(i, n, o) {
    return qi(0, arguments, this), this;
  }, e.from = function(i, n, o) {
    return qi(1, arguments, this), this;
  }, e.fromTo = function(i, n, o, a) {
    return qi(2, arguments, this), this;
  }, e.set = function(i, n, o) {
    return n.duration = 0, n.parent = this, Vi(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new kt(i, n, Re(this, o), 1), this;
  }, e.call = function(i, n, o) {
    return Ze(this, kt.delayedCall(0, i, n), o);
  }, e.staggerTo = function(i, n, o, a, l, c, u) {
    return o.duration = n, o.stagger = o.stagger || a, o.onComplete = c, o.onCompleteParams = u, o.parent = this, new kt(i, o, Re(this, l)), this;
  }, e.staggerFrom = function(i, n, o, a, l, c, u) {
    return o.runBackwards = 1, Vi(o).immediateRender = fe(o.immediateRender), this.staggerTo(i, n, o, a, l, c, u);
  }, e.staggerFromTo = function(i, n, o, a, l, c, u, d) {
    return a.startAt = o, Vi(a).immediateRender = fe(a.immediateRender), this.staggerTo(i, n, a, l, c, u, d);
  }, e.render = function(i, n, o) {
    var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, c = this._dur, u = i <= 0 ? 0 : ut(i), d = this._zTime < 0 != i < 0 && (this._initted || !c), h, f, _, p, m, x, w, T, v, S, k, b;
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
      if (this._hasPause && !this._forcing && this._lock < 2 && (w = cc(this, ut(a), ut(h)), w && (u -= h - (h = w._start))), this._tTime = u, this._time = h, this._act = !!T, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && u && c && !n && !S && (Ce(this, "onStart"), this._tTime !== u))
        return this;
      if (h >= a && i >= 0)
        for (f = this._first; f; ) {
          if (_ = f._next, (f._act || h >= f._start) && f._ts && w !== f) {
            if (f.parent !== this)
              return this.render(i, n, o);
            if (f.render(f._ts > 0 ? (h - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (h - f._start) * f._ts, n, o), h !== this._time || !this._ts && !x) {
              w = 0, _ && (u += this._zTime = -st);
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
            if (f.render(f._ts > 0 ? (E - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (E - f._start) * f._ts, n, o || Wt && eo(f)), h !== this._time || !this._ts && !x) {
              w = 0, _ && (u += this._zTime = E ? -st : st);
              break;
            }
          }
          f = _;
        }
      }
      if (w && !n && (this.pause(), w.render(h >= a ? 0 : -st)._zTime = h >= a ? 1 : -1, this._ts))
        return this._start = v, es(this), this.render(i, n, o);
      this._onUpdate && !n && Ce(this, "onUpdate", !0), (u === l && this._tTime >= this.totalDuration() || !u && a) && (v === this._start || Math.abs(T) !== Math.abs(this._ts)) && (this._lock || ((i || !c) && (u === l && this._ts > 0 || !u && this._ts < 0) && Or(this, 1), !n && !(i < 0 && !a) && (u || a || !l) && (Ce(this, u === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(i, n) {
    var o = this;
    if (hr(n) || (n = Re(this, n, i)), !(i instanceof un)) {
      if (Zt(i))
        return i.forEach(function(a) {
          return o.add(a, n);
        }), this;
      if (Ft(i))
        return this.addLabel(i, n);
      if (mt(i))
        i = kt.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? Ze(this, i, n) : this;
  }, e.getChildren = function(i, n, o, a) {
    i === void 0 && (i = !0), n === void 0 && (n = !0), o === void 0 && (o = !0), a === void 0 && (a = -Fe);
    for (var l = [], c = this._first; c; )
      c._start >= a && (c instanceof kt ? n && l.push(c) : (o && l.push(c), i && l.push.apply(l, c.getChildren(!0, n, o)))), c = c._next;
    return l;
  }, e.getById = function(i) {
    for (var n = this.getChildren(1, 1, 1), o = n.length; o--; )
      if (n[o].vars.id === i)
        return n[o];
  }, e.remove = function(i) {
    return Ft(i) ? this.removeLabel(i) : mt(i) ? this.killTweensOf(i) : (i.parent === this && ts(this, i), i === this._recent && (this._recent = this._last), Gr(this));
  }, e.totalTime = function(i, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ut(Te.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), s.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(i, n) {
    return this.labels[i] = Re(this, n), this;
  }, e.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, e.addPause = function(i, n, o) {
    var a = kt.delayedCall(0, n || an, o);
    return a.data = "isPause", this._hasPause = 1, Ze(this, a, Re(this, i));
  }, e.removePause = function(i) {
    var n = this._first;
    for (i = Re(this, i); n; )
      n._start === i && n.data === "isPause" && Or(n), n = n._next;
  }, e.killTweensOf = function(i, n, o) {
    for (var a = this.getTweensOf(i, o), l = a.length; l--; )
      xr !== a[l] && a[l].kill(i, n);
    return this;
  }, e.getTweensOf = function(i, n) {
    for (var o = [], a = ze(i), l = this._first, c = hr(n), u; l; )
      l instanceof kt ? rc(l._targets, a) && (c ? (!xr || l._initted && l._ts) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) && o.push(l) : (u = l.getTweensOf(a, n)).length && o.push.apply(o, u), l = l._next;
    return o;
  }, e.tweenTo = function(i, n) {
    n = n || {};
    var o = this, a = Re(o, i), l = n, c = l.startAt, u = l.onStart, d = l.onStartParams, h = l.immediateRender, f, _ = kt.to(o, Oe({
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
    return i === void 0 && (i = this._time), ko(this, Re(this, i));
  }, e.previousLabel = function(i) {
    return i === void 0 && (i = this._time), ko(this, Re(this, i), 1);
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
    return Gr(this);
  }, e.invalidate = function(i) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(i), n = n._next;
    return s.prototype.invalidate.call(this, i);
  }, e.clear = function(i) {
    i === void 0 && (i = !0);
    for (var n = this._first, o; n; )
      o = n._next, this.remove(n), n = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Gr(this);
  }, e.totalDuration = function(i) {
    var n = 0, o = this, a = o._last, l = Fe, c, u, d;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
    if (o._dirty) {
      for (d = o.parent; a; )
        c = a._prev, a._dirty && a.totalDuration(), u = a._start, u > l && o._sort && a._ts && !o._lock ? (o._lock = 1, Ze(o, a, u - a._delay, 1)._lock = 0) : l = u, u < 0 && a._ts && (n -= u, (!d && !o._dp || d && d.smoothChildTiming) && (o._start += ut(u / o._ts), o._time -= u, o._tTime -= u), o.shiftChildren(-u, !1, -1 / 0), l = 0), a._end > n && a._ts && (n = a._end), a = c;
      ki(o, o === ft && o._time > n ? o._time : n, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, t.updateRoot = function(i) {
    if (ft._ts && (Ea(ft, Vn(i, ft)), Sa = Te.frame), Te.frame >= So) {
      So += Pe.autoSleep || 120;
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
var Cc = function(t, e, r, i, n, o, a) {
  var l = new de(this._pt, t, e, 0, 1, Za, null, n), c = 0, u = 0, d, h, f, _, p, m, x, w;
  for (l.b = r, l.e = i, r += "", i += "", (x = ~i.indexOf("random(")) && (i = ln(i)), o && (w = [r, i], o(w, t, e), r = w[0], i = w[1]), h = r.match(ss) || []; d = ss.exec(i); )
    _ = d[0], p = i.substring(c, d.index), f ? f = (f + 1) % 5 : p.substr(-5) === "rgba(" && (f = 1), _ !== h[u++] && (m = parseFloat(h[u - 1]) || 0, l._pt = {
      _next: l._pt,
      p: p || u === 1 ? p : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: _.charAt(1) === "=" ? mi(m, _) - m : parseFloat(_) - m,
      m: f && f < 4 ? Math.round : 0
    }, c = ss.lastIndex);
  return l.c = c < i.length ? i.substring(c, i.length) : "", l.fp = a, (ya.test(i) || x) && (l.e = 0), this._pt = l, l;
}, ro = function(t, e, r, i, n, o, a, l, c, u) {
  mt(i) && (i = i(n || 0, t, o));
  var d = t[e], h = r !== "get" ? r : mt(d) ? c ? t[e.indexOf("set") || !mt(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](c) : t[e]() : d, f = mt(d) ? c ? Dc : Ka : no, _;
  if (Ft(i) && (~i.indexOf("random(") && (i = ln(i)), i.charAt(1) === "=" && (_ = mi(h, i) + (Kt(h) || 0), (_ || _ === 0) && (i = _))), !u || h !== i || Ms)
    return !isNaN(h * i) && i !== "" ? (_ = new de(this._pt, t, e, +h || 0, i - (h || 0), typeof d == "boolean" ? Ac : Qa, 0, f), c && (_.fp = c), a && _.modifier(a, this, t), this._pt = _) : (!d && !(e in t) && Zs(e, i), Cc.call(this, t, e, h, i, f, l || Pe.stringFilter, c));
}, kc = function(t, e, r, i, n) {
  if (mt(t) && (t = Gi(t, n, e, r, i)), !er(t) || t.style && t.nodeType || Zt(t) || ma(t))
    return Ft(t) ? Gi(t, n, e, r, i) : t;
  var o = {}, a;
  for (a in t)
    o[a] = Gi(t[a], n, e, r, i);
  return o;
}, Va = function(t, e, r, i, n, o) {
  var a, l, c, u;
  if (xe[t] && (a = new xe[t]()).init(n, a.rawVars ? e[t] : kc(e[t], i, n, o, r), r, i, o) !== !1 && (r._pt = l = new de(r._pt, n, t, 0, 1, a.render, a, 0, a.priority), r !== _i))
    for (c = r._ptLookup[r._targets.indexOf(n)], u = a._props.length; u--; )
      c[a._props[u]] = l;
  return a;
}, xr, Ms, io = function s(t, e, r) {
  var i = t.vars, n = i.ease, o = i.startAt, a = i.immediateRender, l = i.lazy, c = i.onUpdate, u = i.runBackwards, d = i.yoyoEase, h = i.keyframes, f = i.autoRevert, _ = t._dur, p = t._startAt, m = t._targets, x = t.parent, w = x && x.data === "nested" ? x.vars.targets : m, T = t._overwrite === "auto" && !qs, v = t.timeline, S = i.easeReverse || d, k, b, P, C, E, W, O, K, Y, Q, V, L, Z;
  if (v && (!h || !n) && (n = "none"), t._ease = Kr(n, sn.ease), t._rEase = S && (Kr(S) || t._ease), t._from = !v && !!i.runBackwards, t._from && (t.ratio = 1), !v || h && !i.stagger) {
    if (K = m[0] ? qr(m[0]).harness : 0, L = K && i[K.prop], k = Un(i, Js), p && (p._zTime < 0 && p.progress(1), e < 0 && u && a && !f ? p.render(-1, !0) : p.revert(u && _ ? An : tc), p._lazy = 0), o) {
      if (Or(t._startAt = kt.set(m, Oe({
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
      }, o))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Wt || !a && !f) && t._startAt.revert(An), a && _ && e <= 0 && r <= 0) {
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
      }, k), L && (P[K.prop] = L), Or(t._startAt = kt.set(m, P)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Wt ? t._startAt.revert(An) : t._startAt.render(-1, !0)), t._zTime = e, !a)
        s(t._startAt, st, st);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, l = _ && fe(l) || l && !_, b = 0; b < m.length; b++) {
      if (E = m[b], O = E._gsap || to(m)[b]._gsap, t._ptLookup[b] = Q = {}, Ss[O.id] && kr.length && $n(), V = w === m ? b : w.indexOf(E), K && (Y = new K()).init(E, L || k, t, V, w) !== !1 && (t._pt = C = new de(t._pt, E, Y.name, 0, 1, Y.render, Y, 0, Y.priority), Y._props.forEach(function(rt) {
        Q[rt] = C;
      }), Y.priority && (W = 1)), !K || L)
        for (P in k)
          xe[P] && (Y = Va(P, k, t, V, E, w)) ? Y.priority && (W = 1) : Q[P] = C = ro.call(t, E, P, "get", k[P], V, w, 0, i.stringFilter);
      t._op && t._op[b] && t.kill(E, t._op[b]), T && t._pt && (xr = t, ft.killTweensOf(E, Q, t.globalTime(e)), Z = !t.parent, xr = 0), t._pt && l && (Ss[O.id] = 1);
    }
    W && Ja(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = c, t._initted = (!t._op || t._pt) && !Z, h && e <= 0 && v.render(Fe, !0, !0);
}, Pc = function(t, e, r, i, n, o, a, l) {
  var c = (t._pt && t._ptCache || (t._ptCache = {}))[e], u, d, h, f;
  if (!c)
    for (c = t._ptCache[e] = [], h = t._ptLookup, f = t._targets.length; f--; ) {
      if (u = h[f][e], u && u.d && u.d._pt)
        for (u = u.d._pt; u && u.p !== e && u.fp !== e; )
          u = u._next;
      if (!u)
        return Ms = 1, t.vars[e] = "+=0", io(t, a), Ms = 0, l ? on(e + " not eligible for reset. Try splitting into individual properties") : 1;
      c.push(u);
    }
  for (f = c.length; f--; )
    d = c[f], u = d._pt || d, u.s = (i || i === 0) && !n ? i : u.s + (i || 0) + o * u.c, u.c = r - u.s, d.e && (d.e = bt(r) + Kt(d.e)), d.b && (d.b = u.s + Kt(d.b));
}, Mc = function(t, e) {
  var r = t[0] ? qr(t[0]).harness : 0, i = r && r.aliases, n, o, a, l;
  if (!i)
    return e;
  n = Ei({}, e);
  for (o in i)
    if (o in n)
      for (l = i[o].split(","), a = l.length; a--; )
        n[l[a]] = n[o];
  return n;
}, Oc = function(t, e, r, i) {
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
  return mt(t) ? t.call(e, r, i, n) : Ft(t) && ~t.indexOf("random(") ? ln(t) : t;
}, qa = js + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", Ga = {};
he(qa + ",id,stagger,delay,duration,paused,scrollTrigger", function(s) {
  return Ga[s] = 1;
});
var kt = /* @__PURE__ */ function(s) {
  _a(t, s);
  function t(r, i, n, o) {
    var a;
    typeof i == "number" && (n.duration = i, i = n, n = null), a = s.call(this, o ? i : Vi(i)) || this;
    var l = a.vars, c = l.duration, u = l.delay, d = l.immediateRender, h = l.stagger, f = l.overwrite, _ = l.keyframes, p = l.defaults, m = l.scrollTrigger, x = i.parent || ft, w = (Zt(r) || ma(r) ? hr(r[0]) : "length" in i) ? [r] : ze(r), T, v, S, k, b, P, C, E;
    if (a._targets = w.length ? to(w) : on("GSAP target " + r + " not found. https://gsap.com", !Pe.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = f, _ || h || wn(c) || wn(u)) {
      i = a.vars;
      var W = i.easeReverse || i.yoyoEase;
      if (T = a.timeline = new ue({
        data: "nested",
        defaults: p || {},
        targets: x && x.data === "nested" ? x.vars.targets : w
      }), T.kill(), T.parent = T._dp = ar(a), T._start = 0, h || wn(c) || wn(u)) {
        if (k = w.length, C = h && La(h), er(h))
          for (b in h)
            ~qa.indexOf(b) && (E || (E = {}), E[b] = h[b]);
        for (v = 0; v < k; v++)
          S = Un(i, Ga), S.stagger = 0, W && (S.easeReverse = W), E && Ei(S, E), P = w[v], S.duration = +Gi(c, ar(a), v, P, w), S.delay = (+Gi(u, ar(a), v, P, w) || 0) - a._delay, !h && k === 1 && S.delay && (a._delay = u = S.delay, a._start += u, S.delay = 0), T.to(P, S, C ? C(v, P, w) : 0), T._ease = G.none;
        T.duration() ? c = u = 0 : a.timeline = 0;
      } else if (_) {
        Vi(Oe(T.vars.defaults, {
          ease: "none"
        })), T._ease = Kr(_.ease || i.ease || "none");
        var O = 0, K, Y, Q;
        if (Zt(_))
          _.forEach(function(V) {
            return T.to(w, V, ">");
          }), T.duration();
        else {
          S = {};
          for (b in _)
            b === "ease" || b === "easeEach" || Oc(b, _[b], S, _.easeEach);
          for (b in S)
            for (K = S[b].sort(function(V, L) {
              return V.t - L.t;
            }), O = 0, v = 0; v < K.length; v++)
              Y = K[v], Q = {
                ease: Y.e,
                duration: (Y.t - (v ? K[v - 1].t : 0)) / 100 * c
              }, Q[b] = Y.v, T.to(w, Q, O), O += Q.duration;
          T.duration() < c && T.to({}, {
            duration: c - T.duration()
          });
        }
      }
      c || a.duration(c = T.duration());
    } else
      a.timeline = 0;
    return f === !0 && !qs && (xr = ar(a), ft.killTweensOf(w), xr = 0), Ze(x, ar(a), n), i.reversed && a.reverse(), i.paused && a.paused(!0), (d || !c && !_ && a._start === ut(x._time) && fe(d) && oc(ar(a)) && x.data !== "nested") && (a._tTime = -st, a.render(Math.max(0, -u) || 0)), m && Oa(ar(a), m), a;
  }
  var e = t.prototype;
  return e.render = function(i, n, o) {
    var a = this._time, l = this._tDur, c = this._dur, u = i < 0, d = i > l - st && !u ? l : i < st ? 0 : i, h, f, _, p, m, x, w, T;
    if (!c)
      lc(this, i, n, o);
    else if (d !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u || this._lazy) {
      if (h = d, T = this.timeline, this._repeat) {
        if (p = c + this._rDelay, this._repeat < -1 && u)
          return this.totalTime(p * 100 + i, n, o);
        if (h = ut(d % p), d === l ? (_ = this._repeat, h = c) : (m = ut(d / p), _ = ~~m, _ && _ === m ? (h = c, _--) : h > c && (h = c)), x = this._yoyo && _ & 1, x && (h = c - h), m = Ci(this._tTime, p), h === a && !o && this._initted && _ === m)
          return this._tTime = d, this;
        _ !== m && this.vars.repeatRefresh && !x && !this._lock && h !== p && this._initted && (this._lock = o = 1, this.render(ut(p * _), !0).invalidate()._lock = 0);
      }
      if (!this._initted) {
        if (Da(this, u ? i : h, o, n, d))
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
        this.ratio = w = this._invRatio + this._invScale * this._invEase((h - this._invTime) * this._invRecip);
      } else
        this.ratio = w = this._ease(h / c);
      if (this._from && (this.ratio = w = 1 - w), this._tTime = d, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), !a && d && !n && !m && (Ce(this, "onStart"), this._tTime !== d))
        return this;
      for (f = this._pt; f; )
        f.r(w, f.d), f = f._next;
      T && T.render(i < 0 ? i : T._dur * T._ease(h / this._dur), n, o) || this._startAt && (this._zTime = i), this._onUpdate && !n && (u && Ts(this, i, n, o), Ce(this, "onUpdate")), this._repeat && _ !== m && this.vars.onRepeat && !n && this.parent && Ce(this, "onRepeat"), (d === this._tDur || !d) && this._tTime === d && (u && !this._onUpdate && Ts(this, i, !0, !0), (i || !c) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && Or(this, 1), !n && !(u && !a) && (d || a || x) && (Ce(this, d === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), s.prototype.invalidate.call(this, i);
  }, e.resetTo = function(i, n, o, a, l) {
    cn || Te.wake(), this._ts || this.play();
    var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
    return this._initted || io(this, c), u = this._ease(c / this._dur), Pc(this, i, n, o, a, u, c, l) ? this.resetTo(i, n, o, a, 1) : (rs(this, 0), this.parent || Pa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(i, n) {
    if (n === void 0 && (n = "all"), !i && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Yi(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Wt), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, n, xr && xr.vars.overwrite !== !0)._first || Yi(this), this.parent && o !== this.timeline.totalDuration() && ki(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, l = i ? ze(i) : a, c = this._ptLookup, u = this._pt, d, h, f, _, p, m, x;
    if ((!n || n === "all") && nc(a, l))
      return n === "all" && (this._pt = 0), Yi(this);
    for (d = this._op = this._op || [], n !== "all" && (Ft(n) && (p = {}, he(n, function(w) {
      return p[w] = 1;
    }), n = p), n = Mc(a, n)), x = a.length; x--; )
      if (~l.indexOf(a[x])) {
        h = c[x], n === "all" ? (d[x] = n, _ = h, f = {}) : (f = d[x] = d[x] || {}, _ = n);
        for (p in _)
          m = h && h[p], m && ((!("kill" in m.d) || m.d.kill(p) === !0) && ts(this, m, "_pt"), delete h[p]), f !== "all" && (f[p] = 1);
      }
    return this._initted && !this._pt && u && Yi(this), this;
  }, t.to = function(i, n) {
    return new t(i, n, arguments[2]);
  }, t.from = function(i, n) {
    return qi(1, arguments);
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
    return qi(2, arguments);
  }, t.set = function(i, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(i, n);
  }, t.killTweensOf = function(i, n, o) {
    return ft.killTweensOf(i, n, o);
  }, t;
}(un);
Oe(kt.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
he("staggerTo,staggerFrom,staggerFromTo", function(s) {
  kt[s] = function() {
    var t = new ue(), e = Cs.call(arguments, 0);
    return e.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), t[s].apply(t, e);
  };
});
var no = function(t, e, r) {
  return t[e] = r;
}, Ka = function(t, e, r) {
  return t[e](r);
}, Dc = function(t, e, r, i) {
  return t[e](i.fp, r);
}, Rc = function(t, e, r) {
  return t.setAttribute(e, r);
}, so = function(t, e) {
  return mt(t[e]) ? Ka : Gs(t[e]) && t.setAttribute ? Rc : no;
}, Qa = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, Ac = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, Za = function(t, e) {
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
}, Lc = function(t, e, r, i) {
  for (var n = this._pt, o; n; )
    o = n._next, n.p === i && n.modifier(t, e, r), n = o;
}, Nc = function(t) {
  for (var e = this._pt, r, i; e; )
    i = e._next, e.p === t && !e.op || e.op === t ? ts(this, e, "_pt") : e.dep || (r = 1), e = i;
  return !r;
}, Fc = function(t, e, r, i) {
  i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
}, Ja = function(t) {
  for (var e = t._pt, r, i, n, o; e; ) {
    for (r = e._next, i = n; i && i.pr > e.pr; )
      i = i._next;
    (e._prev = i ? i._prev : o) ? e._prev._next = e : n = e, (e._next = i) ? i._prev = e : o = e, e = r;
  }
  t._pt = n;
}, de = /* @__PURE__ */ function() {
  function s(e, r, i, n, o, a, l, c, u) {
    this.t = r, this.s = n, this.c = o, this.p = i, this.r = a || Qa, this.d = l || this, this.set = c || no, this.pr = u || 0, this._next = e, e && (e._prev = this);
  }
  var t = s.prototype;
  return t.modifier = function(r, i, n) {
    this.mSet = this.mSet || this.set, this.set = Fc, this.m = r, this.mt = n, this.tween = i;
  }, s;
}();
he(js + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(s) {
  return Js[s] = 1;
});
Me.TweenMax = Me.TweenLite = kt;
Me.TimelineLite = Me.TimelineMax = ue;
ft = new ue({
  sortChildren: !1,
  defaults: sn,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Pe.stringFilter = Ha;
var Qr = [], Nn = {}, zc = [], Mo = 0, Ic = 0, us = function(t) {
  return (Nn[t] || zc).map(function(e) {
    return e();
  });
}, Os = function() {
  var t = Date.now(), e = [];
  t - Mo > 2 && (us("matchMediaInit"), Qr.forEach(function(r) {
    var i = r.queries, n = r.conditions, o, a, l, c;
    for (a in i)
      o = Ke.matchMedia(i[a]).matches, o && (l = 1), o !== n[a] && (n[a] = o, c = 1);
    c && (r.revert(), l && e.push(r));
  }), us("matchMediaRevert"), e.forEach(function(r) {
    return r.onMatch(r, function(i) {
      return r.add(null, i);
    });
  }), Mo = t, us("matchMedia"));
}, ja = /* @__PURE__ */ function() {
  function s(e, r) {
    this.selector = r && ks(r), this.data = [], this._r = [], this.isReverted = !1, this.id = Ic++, e && this.add(e);
  }
  var t = s.prototype;
  return t.add = function(r, i, n) {
    mt(r) && (n = i, i = r, r = mt);
    var o = this, a = function() {
      var c = lt, u = o.selector, d;
      return c && c !== o && c.data.push(o), n && (o.selector = ks(n)), lt = o, d = i.apply(o, arguments), mt(d) && o._r.push(d), lt = c, o.selector = u, o.isReverted = !1, d;
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
      return i instanceof s ? r.push.apply(r, i.getTweens()) : i instanceof kt && !(i.parent && i.parent.data === "nested") && r.push(i);
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
        c = n.data[l], c instanceof ue ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(), c.kill()) : !(c instanceof kt) && c.revert && c.revert(r);
      n._r.forEach(function(u) {
        return u(r, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), i)
      for (var o = Qr.length; o--; )
        Qr[o].id === this.id && Qr.splice(o, 1);
  }, t.revert = function(r) {
    this.kill(r || {});
  }, s;
}(), Yc = /* @__PURE__ */ function() {
  function s(e) {
    this.contexts = [], this.scope = e, lt && lt.data.push(this);
  }
  var t = s.prototype;
  return t.add = function(r, i, n) {
    er(r) || (r = {
      matches: r
    });
    var o = new ja(0, n || this.scope), a = o.conditions = {}, l, c, u;
    lt && !o.selector && (o.selector = lt.selector), this.contexts.push(o), i = o.add("onMatch", i), o.queries = r;
    for (c in r)
      c === "all" ? u = 1 : (l = Ke.matchMedia(r[c]), l && (Qr.indexOf(o) < 0 && Qr.push(o), (a[c] = l.matches) && (u = 1), l.addListener ? l.addListener(Os) : l.addEventListener("change", Os)));
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
}(), qn = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    e.forEach(function(i) {
      return Ba(i);
    });
  },
  timeline: function(t) {
    return new ue(t);
  },
  getTweensOf: function(t, e) {
    return ft.getTweensOf(t, e);
  },
  getProperty: function(t, e, r, i) {
    Ft(t) && (t = ze(t)[0]);
    var n = qr(t || {}).get, o = r ? ka : Ca;
    return r === "native" && (r = ""), t && (e ? o((xe[e] && xe[e].get || n)(t, e, r, i)) : function(a, l, c) {
      return o((xe[a] && xe[a].get || n)(t, a, l, c));
    });
  },
  quickSetter: function(t, e, r) {
    if (t = ze(t), t.length > 1) {
      var i = t.map(function(u) {
        return ge.quickSetter(u, e, r);
      }), n = i.length;
      return function(u) {
        for (var d = n; d--; )
          i[d](u);
      };
    }
    t = t[0] || {};
    var o = xe[e], a = qr(t), l = a.harness && (a.harness.aliases || {})[e] || e, c = o ? function(u) {
      var d = new o();
      _i._pt = 0, d.init(t, r ? u + r : u, _i, 0, [t]), d.render(1, d), _i._pt && oo(1, _i);
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
    return t && t.ease && (t.ease = Kr(t.ease, sn.ease)), To(sn, t || {});
  },
  config: function(t) {
    return To(Pe, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, r = t.effect, i = t.plugins, n = t.defaults, o = t.extendTimeline;
    (i || "").split(",").forEach(function(a) {
      return a && !xe[a] && !Me[a] && on(e + " effect requires " + a + " plugin.");
    }), os[e] = function(a, l, c) {
      return r(ze(a), Oe(l || {}, n), c);
    }, o && (ue.prototype[e] = function(a, l, c) {
      return this.add(os[e](a, er(l) ? l : (c = l) && {}, this), c);
    });
  },
  registerEase: function(t, e) {
    G[t] = Kr(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? Kr(t, e) : G;
  },
  getById: function(t) {
    return ft.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var r = new ue(t), i, n;
    for (r.smoothChildTiming = fe(t.smoothChildTiming), ft.remove(r), r._dp = 0, r._time = r._tTime = ft._time, i = ft._first; i; )
      n = i._next, (e || !(!i._dur && i instanceof kt && i.vars.onComplete === i._targets[0])) && Ze(r, i, i._start - i._delay), i = n;
    return Ze(ft, r, 0), r;
  },
  context: function(t, e) {
    return t ? new ja(t, e) : lt;
  },
  matchMedia: function(t) {
    return new Yc(t);
  },
  matchMediaRefresh: function() {
    return Qr.forEach(function(t) {
      var e = t.conditions, r, i;
      for (i in e)
        e[i] && (e[i] = !1, r = 1);
      r && t.revert();
    }) || Os();
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
    wrap: gc,
    wrapYoyo: mc,
    distribute: La,
    random: Fa,
    snap: Na,
    normalize: _c,
    getUnit: Kt,
    clamp: fc,
    splitColor: Wa,
    toArray: ze,
    selector: ks,
    mapRange: Ia,
    pipe: dc,
    unitize: pc,
    interpolate: vc,
    shuffle: Aa
  },
  install: ba,
  effects: os,
  ticker: Te,
  updateRoot: ue.updateRoot,
  plugins: xe,
  globalTimeline: ft,
  core: {
    PropTween: de,
    globals: xa,
    Tween: kt,
    Timeline: ue,
    Animation: un,
    getCache: qr,
    _removeLinkedListItem: ts,
    reverting: function() {
      return Wt;
    },
    context: function(t) {
      return t && lt && (lt.data.push(t), t._ctx = lt), lt;
    },
    suppressOverwrites: function(t) {
      return qs = t;
    }
  }
};
he("to,from,fromTo,delayedCall,set,killTweensOf", function(s) {
  return qn[s] = kt[s];
});
Te.add(ue.updateRoot);
_i = qn.to({}, {
  duration: 0
});
var Bc = function(t, e) {
  for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
    r = r._next;
  return r;
}, Wc = function(t, e) {
  var r = t._targets, i, n, o;
  for (i in e)
    for (n = r.length; n--; )
      o = t._ptLookup[n][i], o && (o = o.d) && (o._pt && (o = Bc(o, i)), o && o.modifier && o.modifier(e[i], t, r[n], i));
}, fs = function(t, e) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, n, o) {
      o._onInit = function(a) {
        var l, c;
        if (Ft(n) && (l = {}, he(n, function(u) {
          return l[u] = 1;
        }), n = l), e) {
          l = {};
          for (c in n)
            l[c] = e(n[c]);
          n = l;
        }
        Wc(a, n);
      };
    }
  };
}, ge = qn.registerPlugin({
  name: "attr",
  init: function(t, e, r, i, n) {
    var o, a, l;
    this.tween = r;
    for (o in e)
      l = t.getAttribute(o) || "", a = this.add(t, "setAttribute", (l || 0) + "", e[o], i, n, 0, 0, o), a.op = o, a.b = l, this._props.push(o);
  },
  render: function(t, e) {
    for (var r = e._pt; r; )
      Wt ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(t, e) {
    for (var r = e.length; r--; )
      this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
  }
}, fs("roundProps", Ps), fs("modifiers"), fs("snap", Na)) || qn;
kt.version = ue.version = ge.version = "3.15.0";
wa = 1;
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
var Oo, Sr, vi, ao, Ur, Do, lo, Xc = function() {
  return typeof window < "u";
}, dr = {}, Xr = 180 / Math.PI, yi = Math.PI / 180, ai = Math.atan2, Ro = 1e8, co = /([A-Z])/g, Hc = /(left|right|width|margin|padding|x)/i, $c = /[\s,\(]\S/, Je = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Ds = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Uc = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Vc = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, qc = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Gc = function(t, e) {
  var r = e.s + e.c * t;
  e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
}, tl = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, el = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, Kc = function(t, e, r) {
  return t.style[e] = r;
}, Qc = function(t, e, r) {
  return t.style.setProperty(e, r);
}, Zc = function(t, e, r) {
  return t._gsap[e] = r;
}, Jc = function(t, e, r) {
  return t._gsap.scaleX = t._gsap.scaleY = r;
}, jc = function(t, e, r, i, n) {
  var o = t._gsap;
  o.scaleX = o.scaleY = r, o.renderTransform(n, o);
}, tu = function(t, e, r, i, n) {
  var o = t._gsap;
  o[e] = r, o.renderTransform(n, o);
}, ht = "transform", pe = ht + "Origin", eu = function s(t, e) {
  var r = this, i = this.target, n = i.style, o = i._gsap;
  if (t in dr && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = Je[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(a) {
        return r.tfm[a] = lr(i, a);
      }) : this.tfm[t] = o.x ? o[t] : lr(i, t), t === pe && (this.tfm.zOrigin = o.zOrigin);
    else
      return Je.transform.split(",").forEach(function(a) {
        return s.call(r, a, e);
      });
    if (this.props.indexOf(ht) >= 0)
      return;
    o.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(pe, e, "")), t = ht;
  }
  (n || e) && this.props.push(t, e, n[t]);
}, rl = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, ru = function() {
  var t = this.props, e = this.target, r = e.style, i = e._gsap, n, o;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? t[n + 1] === 2 ? e[t[n]](t[n + 2]) : e[t[n]] = t[n + 2] : t[n + 2] ? r[t[n]] = t[n + 2] : r.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(co, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      i[o] = this.tfm[o];
    i.svg && (i.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = lo(), (!n || !n.isStart) && !r[ht] && (rl(r), i.zOrigin && r[pe] && (r[pe] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, il = function(t, e) {
  var r = {
    target: t,
    props: [],
    revert: ru,
    save: eu
  };
  return t._gsap || ge.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(i) {
    return r.save(i);
  }), r;
}, nl, Rs = function(t, e) {
  var r = Sr.createElementNS ? Sr.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Sr.createElement(t);
  return r && r.style ? r : Sr.createElement(t);
}, ke = function s(t, e, r) {
  var i = getComputedStyle(t);
  return i[e] || i.getPropertyValue(e.replace(co, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && s(t, Mi(e) || e, 1) || "";
}, Ao = "O,Moz,ms,Ms,Webkit".split(","), Mi = function(t, e, r) {
  var i = e || Ur, n = i.style, o = 5;
  if (t in n && !r)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(Ao[o] + t in n); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Ao[o] : "") + t;
}, As = function() {
  Xc() && window.document && (Oo = window, Sr = Oo.document, vi = Sr.documentElement, Ur = Rs("div") || {
    style: {}
  }, Rs("div"), ht = Mi(ht), pe = ht + "Origin", Ur.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", nl = !!Mi("perspective"), lo = ge.core.reverting, ao = 1);
}, Lo = function(t) {
  var e = t.ownerSVGElement, r = Rs("svg", e && e.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = t.cloneNode(!0), n;
  i.style.display = "block", r.appendChild(i), vi.appendChild(r);
  try {
    n = i.getBBox();
  } catch {
  }
  return r.removeChild(i), vi.removeChild(r), n;
}, No = function(t, e) {
  for (var r = e.length; r--; )
    if (t.hasAttribute(e[r]))
      return t.getAttribute(e[r]);
}, sl = function(t) {
  var e, r;
  try {
    e = t.getBBox();
  } catch {
    e = Lo(t), r = 1;
  }
  return e && (e.width || e.height) || r || (e = Lo(t)), e && !e.width && !e.x && !e.y ? {
    x: +No(t, ["x", "cx", "x1"]) || 0,
    y: +No(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, ol = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && sl(t));
}, Dr = function(t, e) {
  if (e) {
    var r = t.style, i;
    e in dr && e !== pe && (e = ht), r.removeProperty ? (i = e.substr(0, 2), (i === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), r.removeProperty(i === "--" ? e : e.replace(co, "-$1").toLowerCase())) : r.removeAttribute(e);
  }
}, Tr = function(t, e, r, i, n, o) {
  var a = new de(t._pt, e, r, 0, 1, o ? el : tl);
  return t._pt = a, a.b = i, a.e = n, t._props.push(r), a;
}, Fo = {
  deg: 1,
  rad: 1,
  turn: 1
}, iu = {
  grid: 1,
  flex: 1
}, Rr = function s(t, e, r, i) {
  var n = parseFloat(r) || 0, o = (r + "").trim().substr((n + "").length) || "px", a = Ur.style, l = Hc.test(e), c = t.tagName.toLowerCase() === "svg", u = (c ? "client" : "offset") + (l ? "Width" : "Height"), d = 100, h = i === "px", f = i === "%", _, p, m, x;
  if (i === o || !n || Fo[i] || Fo[o])
    return n;
  if (o !== "px" && !h && (n = s(t, e, r, "px")), x = t.getCTM && ol(t), (f || o === "%") && (dr[e] || ~e.indexOf("adius")))
    return _ = x ? t.getBBox()[l ? "width" : "height"] : t[u], bt(f ? n / _ * d : n / 100 * _);
  if (a[l ? "width" : "height"] = d + (h ? o : i), p = i !== "rem" && ~e.indexOf("adius") || i === "em" && t.appendChild && !c ? t : t.parentNode, x && (p = (t.ownerSVGElement || {}).parentNode), (!p || p === Sr || !p.appendChild) && (p = Sr.body), m = p._gsap, m && f && m.width && l && m.time === Te.time && !m.uncache)
    return bt(n / m.width * d);
  if (f && (e === "height" || e === "width")) {
    var w = t.style[e];
    t.style[e] = d + i, _ = t[u], w ? t.style[e] = w : Dr(t, e);
  } else
    (f || o === "%") && !iu[ke(p, "display")] && (a.position = ke(t, "position")), p === t && (a.position = "static"), p.appendChild(Ur), _ = Ur[u], p.removeChild(Ur), a.position = "absolute";
  return l && f && (m = qr(p), m.time = Te.time, m.width = p[u]), bt(h ? _ * n / d : _ && n ? d / _ * n : 0);
}, lr = function(t, e, r, i) {
  var n;
  return ao || As(), e in Je && e !== "transform" && (e = Je[e], ~e.indexOf(",") && (e = e.split(",")[0])), dr[e] && e !== "transform" ? (n = hn(t, i), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : Kn(ke(t, pe)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = Gn[e] && Gn[e](t, e, r) || ke(t, e) || Ta(t, e) || (e === "opacity" ? 1 : 0))), r && !~(n + "").trim().indexOf(" ") ? Rr(t, e, n, r) + r : n;
}, nu = function(t, e, r, i) {
  if (!r || r === "none") {
    var n = Mi(e, t, 1), o = n && ke(t, n, 1);
    o && o !== r ? (e = n, r = o) : e === "borderColor" && (r = ke(t, "borderTopColor"));
  }
  var a = new de(this._pt, t.style, e, 0, 1, Za), l = 0, c = 0, u, d, h, f, _, p, m, x, w, T, v, S;
  if (a.b = r, a.e = i, r += "", i += "", i.substring(0, 6) === "var(--" && (i = ke(t, i.substring(4, i.indexOf(")")))), i === "auto" && (p = t.style[e], t.style[e] = i, i = ke(t, e) || i, p ? t.style[e] = p : Dr(t, e)), u = [r, i], Ha(u), r = u[0], i = u[1], h = r.match(pi) || [], S = i.match(pi) || [], S.length) {
    for (; d = pi.exec(i); )
      m = d[0], w = i.substring(l, d.index), _ ? _ = (_ + 1) % 5 : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") && (_ = 1), m !== (p = h[c++] || "") && (f = parseFloat(p) || 0, v = p.substr((f + "").length), m.charAt(1) === "=" && (m = mi(f, m) + v), x = parseFloat(m), T = m.substr((x + "").length), l = pi.lastIndex - T.length, T || (T = T || Pe.units[e] || v, l === i.length && (i += T, a.e += T)), v !== T && (f = Rr(t, e, p, T) || 0), a._pt = {
        _next: a._pt,
        p: w || c === 1 ? w : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: f,
        c: x - f,
        m: _ && _ < 4 || e === "zIndex" ? Math.round : 0
      });
    a.c = l < i.length ? i.substring(l, i.length) : "";
  } else
    a.r = e === "display" && i === "none" ? el : tl;
  return ya.test(i) && (a.e = 0), this._pt = a, a;
}, zo = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, su = function(t) {
  var e = t.split(" "), r = e[0], i = e[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (t = r, r = i, i = t), e[0] = zo[r] || r, e[1] = zo[i] || i, e.join(" ");
}, ou = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var r = e.t, i = r.style, n = e.u, o = r._gsap, a, l, c;
    if (n === "all" || n === !0)
      i.cssText = "", l = 1;
    else
      for (n = n.split(","), c = n.length; --c > -1; )
        a = n[c], dr[a] && (l = 1, a = a === "transformOrigin" ? pe : ht), Dr(r, a);
    l && (Dr(r, ht), o && (o.svg && r.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", hn(r, 1), o.uncache = 1, rl(i)));
  }
}, Gn = {
  clearProps: function(t, e, r, i, n) {
    if (n.data !== "isFromStart") {
      var o = t._pt = new de(t._pt, e, r, 0, 0, ou);
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
}, fn = [1, 0, 0, 1, 0, 0], al = {}, ll = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, Io = function(t) {
  var e = ke(t, ht);
  return ll(e) ? fn : e.substr(7).match(va).map(bt);
}, uo = function(t, e) {
  var r = t._gsap || qr(t), i = t.style, n = Io(t), o, a, l, c;
  return r.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix, n = [l.a, l.b, l.c, l.d, l.e, l.f], n.join(",") === "1,0,0,1,0,0" ? fn : n) : (n === fn && !t.offsetParent && t !== vi && !r.svg && (l = i.display, i.display = "block", o = t.parentNode, (!o || !t.offsetParent && !t.getBoundingClientRect().width) && (c = 1, a = t.nextElementSibling, vi.appendChild(t)), n = Io(t), l ? i.display = l : Dr(t, "display"), c && (a ? o.insertBefore(t, a) : o ? o.appendChild(t) : vi.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, Ls = function(t, e, r, i, n, o) {
  var a = t._gsap, l = n || uo(t, !0), c = a.xOrigin || 0, u = a.yOrigin || 0, d = a.xOffset || 0, h = a.yOffset || 0, f = l[0], _ = l[1], p = l[2], m = l[3], x = l[4], w = l[5], T = e.split(" "), v = parseFloat(T[0]) || 0, S = parseFloat(T[1]) || 0, k, b, P, C;
  r ? l !== fn && (b = f * m - _ * p) && (P = v * (m / b) + S * (-p / b) + (p * w - m * x) / b, C = v * (-_ / b) + S * (f / b) - (f * w - _ * x) / b, v = P, S = C) : (k = sl(t), v = k.x + (~T[0].indexOf("%") ? v / 100 * k.width : v), S = k.y + (~(T[1] || T[0]).indexOf("%") ? S / 100 * k.height : S)), i || i !== !1 && a.smooth ? (x = v - c, w = S - u, a.xOffset = d + (x * f + w * p) - x, a.yOffset = h + (x * _ + w * m) - w) : a.xOffset = a.yOffset = 0, a.xOrigin = v, a.yOrigin = S, a.smooth = !!i, a.origin = e, a.originIsAbsolute = !!r, t.style[pe] = "0px 0px", o && (Tr(o, a, "xOrigin", c, v), Tr(o, a, "yOrigin", u, S), Tr(o, a, "xOffset", d, a.xOffset), Tr(o, a, "yOffset", h, a.yOffset)), t.setAttribute("data-svg-origin", v + " " + S);
}, hn = function(t, e) {
  var r = t._gsap || new Ua(t);
  if ("x" in r && !e && !r.uncache)
    return r;
  var i = t.style, n = r.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(t), c = ke(t, pe) || "0", u, d, h, f, _, p, m, x, w, T, v, S, k, b, P, C, E, W, O, K, Y, Q, V, L, Z, rt, g, ot, Jt, Ye, dt, zt;
  return u = d = h = p = m = x = w = T = v = 0, f = _ = 1, r.svg = !!(t.getCTM && ol(t)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[ht] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[ht] !== "none" ? l[ht] : "")), i.scale = i.rotate = i.translate = "none"), b = uo(t, r.svg), r.svg && (r.uncache ? (Z = t.getBBox(), c = r.xOrigin - Z.x + "px " + (r.yOrigin - Z.y) + "px", L = "") : L = !e && t.getAttribute("data-svg-origin"), Ls(t, L || c, !!L || r.originIsAbsolute, r.smooth !== !1, b)), S = r.xOrigin || 0, k = r.yOrigin || 0, b !== fn && (W = b[0], O = b[1], K = b[2], Y = b[3], u = Q = b[4], d = V = b[5], b.length === 6 ? (f = Math.sqrt(W * W + O * O), _ = Math.sqrt(Y * Y + K * K), p = W || O ? ai(O, W) * Xr : 0, w = K || Y ? ai(K, Y) * Xr + p : 0, w && (_ *= Math.abs(Math.cos(w * yi))), r.svg && (u -= S - (S * W + k * K), d -= k - (S * O + k * Y))) : (zt = b[6], Ye = b[7], g = b[8], ot = b[9], Jt = b[10], dt = b[11], u = b[12], d = b[13], h = b[14], P = ai(zt, Jt), m = P * Xr, P && (C = Math.cos(-P), E = Math.sin(-P), L = Q * C + g * E, Z = V * C + ot * E, rt = zt * C + Jt * E, g = Q * -E + g * C, ot = V * -E + ot * C, Jt = zt * -E + Jt * C, dt = Ye * -E + dt * C, Q = L, V = Z, zt = rt), P = ai(-K, Jt), x = P * Xr, P && (C = Math.cos(-P), E = Math.sin(-P), L = W * C - g * E, Z = O * C - ot * E, rt = K * C - Jt * E, dt = Y * E + dt * C, W = L, O = Z, K = rt), P = ai(O, W), p = P * Xr, P && (C = Math.cos(P), E = Math.sin(P), L = W * C + O * E, Z = Q * C + V * E, O = O * C - W * E, V = V * C - Q * E, W = L, Q = Z), m && Math.abs(m) + Math.abs(p) > 359.9 && (m = p = 0, x = 180 - x), f = bt(Math.sqrt(W * W + O * O + K * K)), _ = bt(Math.sqrt(V * V + zt * zt)), P = ai(Q, V), w = Math.abs(P) > 2e-4 ? P * Xr : 0, v = dt ? 1 / (dt < 0 ? -dt : dt) : 0), r.svg && (L = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !ll(ke(t, ht)), L && t.setAttribute("transform", L))), Math.abs(w) > 90 && Math.abs(w) < 270 && (n ? (f *= -1, w += p <= 0 ? 180 : -180, p += p <= 0 ? 180 : -180) : (_ *= -1, w += w <= 0 ? 180 : -180)), e = e || r.uncache, r.x = u - ((r.xPercent = u && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + o, r.y = d - ((r.yPercent = d && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-d) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + o, r.z = h + o, r.scaleX = bt(f), r.scaleY = bt(_), r.rotation = bt(p) + a, r.rotationX = bt(m) + a, r.rotationY = bt(x) + a, r.skewX = w + a, r.skewY = T + a, r.transformPerspective = v + o, (r.zOrigin = parseFloat(c.split(" ")[2]) || !e && r.zOrigin || 0) && (i[pe] = Kn(c)), r.xOffset = r.yOffset = 0, r.force3D = Pe.force3D, r.renderTransform = r.svg ? lu : nl ? cl : au, r.uncache = 0, r;
}, Kn = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, hs = function(t, e, r) {
  var i = Kt(e);
  return bt(parseFloat(e) + parseFloat(Rr(t, "x", r + "px", i))) + i;
}, au = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, cl(t, e);
}, Br = "0deg", Fi = "0px", Wr = ") ", cl = function(t, e) {
  var r = e || this, i = r.xPercent, n = r.yPercent, o = r.x, a = r.y, l = r.z, c = r.rotation, u = r.rotationY, d = r.rotationX, h = r.skewX, f = r.skewY, _ = r.scaleX, p = r.scaleY, m = r.transformPerspective, x = r.force3D, w = r.target, T = r.zOrigin, v = "", S = x === "auto" && t && t !== 1 || x === !0;
  if (T && (d !== Br || u !== Br)) {
    var k = parseFloat(u) * yi, b = Math.sin(k), P = Math.cos(k), C;
    k = parseFloat(d) * yi, C = Math.cos(k), o = hs(w, o, b * C * -T), a = hs(w, a, -Math.sin(k) * -T), l = hs(w, l, P * C * -T + T);
  }
  m !== Fi && (v += "perspective(" + m + Wr), (i || n) && (v += "translate(" + i + "%, " + n + "%) "), (S || o !== Fi || a !== Fi || l !== Fi) && (v += l !== Fi || S ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Wr), c !== Br && (v += "rotate(" + c + Wr), u !== Br && (v += "rotateY(" + u + Wr), d !== Br && (v += "rotateX(" + d + Wr), (h !== Br || f !== Br) && (v += "skew(" + h + ", " + f + Wr), (_ !== 1 || p !== 1) && (v += "scale(" + _ + ", " + p + Wr), w.style[ht] = v || "translate(0, 0)";
}, lu = function(t, e) {
  var r = e || this, i = r.xPercent, n = r.yPercent, o = r.x, a = r.y, l = r.rotation, c = r.skewX, u = r.skewY, d = r.scaleX, h = r.scaleY, f = r.target, _ = r.xOrigin, p = r.yOrigin, m = r.xOffset, x = r.yOffset, w = r.forceCSS, T = parseFloat(o), v = parseFloat(a), S, k, b, P, C;
  l = parseFloat(l), c = parseFloat(c), u = parseFloat(u), u && (u = parseFloat(u), c += u, l += u), l || c ? (l *= yi, c *= yi, S = Math.cos(l) * d, k = Math.sin(l) * d, b = Math.sin(l - c) * -h, P = Math.cos(l - c) * h, c && (u *= yi, C = Math.tan(c - u), C = Math.sqrt(1 + C * C), b *= C, P *= C, u && (C = Math.tan(u), C = Math.sqrt(1 + C * C), S *= C, k *= C)), S = bt(S), k = bt(k), b = bt(b), P = bt(P)) : (S = d, P = h, k = b = 0), (T && !~(o + "").indexOf("px") || v && !~(a + "").indexOf("px")) && (T = Rr(f, "x", o, "px"), v = Rr(f, "y", a, "px")), (_ || p || m || x) && (T = bt(T + _ - (_ * S + p * b) + m), v = bt(v + p - (_ * k + p * P) + x)), (i || n) && (C = f.getBBox(), T = bt(T + i / 100 * C.width), v = bt(v + n / 100 * C.height)), C = "matrix(" + S + "," + k + "," + b + "," + P + "," + T + "," + v + ")", f.setAttribute("transform", C), w && (f.style[ht] = C);
}, cu = function(t, e, r, i, n) {
  var o = 360, a = Ft(n), l = parseFloat(n) * (a && ~n.indexOf("rad") ? Xr : 1), c = l - i, u = i + c + "deg", d, h;
  return a && (d = n.split("_")[1], d === "short" && (c %= o, c !== c % (o / 2) && (c += c < 0 ? o : -o)), d === "cw" && c < 0 ? c = (c + o * Ro) % o - ~~(c / o) * o : d === "ccw" && c > 0 && (c = (c - o * Ro) % o - ~~(c / o) * o)), t._pt = h = new de(t._pt, e, r, i, c, Uc), h.e = u, h.u = "deg", t._props.push(r), h;
}, Yo = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, uu = function(t, e, r) {
  var i = Yo({}, r._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", o = r.style, a, l, c, u, d, h, f, _;
  i.svg ? (c = r.getAttribute("transform"), r.setAttribute("transform", ""), o[ht] = e, a = hn(r, 1), Dr(r, ht), r.setAttribute("transform", c)) : (c = getComputedStyle(r)[ht], o[ht] = e, a = hn(r, 1), o[ht] = c);
  for (l in dr)
    c = i[l], u = a[l], c !== u && n.indexOf(l) < 0 && (f = Kt(c), _ = Kt(u), d = f !== _ ? Rr(r, l, c, _) : parseFloat(c), h = parseFloat(u), t._pt = new de(t._pt, a, l, d, h - d, Ds), t._pt.u = _ || 0, t._props.push(l));
  Yo(a, i);
};
he("padding,margin,Width,Radius", function(s, t) {
  var e = "Top", r = "Right", i = "Bottom", n = "Left", o = (t < 3 ? [e, r, i, n] : [e + n, e + r, i + r, i + n]).map(function(a) {
    return t < 2 ? s + a : "border" + a + s;
  });
  Gn[t > 1 ? "border" + s : s] = function(a, l, c, u, d) {
    var h, f;
    if (arguments.length < 4)
      return h = o.map(function(_) {
        return lr(a, _, c);
      }), f = h.join(" "), f.split(h[0]).length === 5 ? h[0] : f;
    h = (u + "").split(" "), f = {}, o.forEach(function(_, p) {
      return f[_] = h[p] = h[p] || h[(p - 1) / 2 | 0];
    }), a.init(l, f, d);
  };
});
var ul = {
  name: "css",
  register: As,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, r, i, n) {
    var o = this._props, a = t.style, l = r.vars.startAt, c, u, d, h, f, _, p, m, x, w, T, v, S, k, b, P, C;
    ao || As(), this.styles = this.styles || il(t), P = this.styles.props, this.tween = r;
    for (p in e)
      if (p !== "autoRound" && (u = e[p], !(xe[p] && Va(p, e, r, i, t, n)))) {
        if (f = typeof u, _ = Gn[p], f === "function" && (u = u.call(r, i, t, n), f = typeof u), f === "string" && ~u.indexOf("random(") && (u = ln(u)), _)
          _(this, t, p, u, r) && (b = 1);
        else if (p.substr(0, 2) === "--")
          c = (getComputedStyle(t).getPropertyValue(p) + "").trim(), u += "", Pr.lastIndex = 0, Pr.test(c) || (m = Kt(c), x = Kt(u), x ? m !== x && (c = Rr(t, p, c, x) + x) : m && (u += m)), this.add(a, "setProperty", c, u, i, n, 0, 0, p), o.push(p), P.push(p, 0, a[p]);
        else if (f !== "undefined") {
          if (l && p in l ? (c = typeof l[p] == "function" ? l[p].call(r, i, t, n) : l[p], Ft(c) && ~c.indexOf("random(") && (c = ln(c)), Kt(c + "") || c === "auto" || (c += Pe.units[p] || Kt(lr(t, p)) || ""), (c + "").charAt(1) === "=" && (c = lr(t, p))) : c = lr(t, p), h = parseFloat(c), w = f === "string" && u.charAt(1) === "=" && u.substr(0, 2), w && (u = u.substr(2)), d = parseFloat(u), p in Je && (p === "autoAlpha" && (h === 1 && lr(t, "visibility") === "hidden" && d && (h = 0), P.push("visibility", 0, a.visibility), Tr(this, a, "visibility", h ? "inherit" : "hidden", d ? "inherit" : "hidden", !d)), p !== "scale" && p !== "transform" && (p = Je[p], ~p.indexOf(",") && (p = p.split(",")[0]))), T = p in dr, T) {
            if (this.styles.save(p), C = u, f === "string" && u.substring(0, 6) === "var(--") {
              if (u = ke(t, u.substring(4, u.indexOf(")"))), u.substring(0, 5) === "calc(") {
                var E = t.style.perspective;
                t.style.perspective = u, u = ke(t, "perspective"), E ? t.style.perspective = E : Dr(t, "perspective");
              }
              d = parseFloat(u);
            }
            if (v || (S = t._gsap, S.renderTransform && !e.parseTransform || hn(t, e.parseTransform), k = e.smoothOrigin !== !1 && S.smooth, v = this._pt = new de(this._pt, a, ht, 0, 1, S.renderTransform, S, 0, -1), v.dep = 1), p === "scale")
              this._pt = new de(this._pt, S, "scaleY", S.scaleY, (w ? mi(S.scaleY, w + d) : d) - S.scaleY || 0, Ds), this._pt.u = 0, o.push("scaleY", p), p += "X";
            else if (p === "transformOrigin") {
              P.push(pe, 0, a[pe]), u = su(u), S.svg ? Ls(t, u, 0, k, 0, this) : (x = parseFloat(u.split(" ")[2]) || 0, x !== S.zOrigin && Tr(this, S, "zOrigin", S.zOrigin, x), Tr(this, a, p, Kn(c), Kn(u)));
              continue;
            } else if (p === "svgOrigin") {
              Ls(t, u, 1, k, 0, this);
              continue;
            } else if (p in al) {
              cu(this, S, p, h, w ? mi(h, w + u) : u);
              continue;
            } else if (p === "smoothOrigin") {
              Tr(this, S, "smooth", S.smooth, u);
              continue;
            } else if (p === "force3D") {
              S[p] = u;
              continue;
            } else if (p === "transform") {
              uu(this, u, t);
              continue;
            }
          } else p in a || (p = Mi(p) || p);
          if (T || (d || d === 0) && (h || h === 0) && !$c.test(u) && p in a)
            m = (c + "").substr((h + "").length), d || (d = 0), x = Kt(u) || (p in Pe.units ? Pe.units[p] : m), m !== x && (h = Rr(t, p, c, x)), this._pt = new de(this._pt, T ? S : a, p, h, (w ? mi(h, w + d) : d) - h, !T && (x === "px" || p === "zIndex") && e.autoRound !== !1 ? Gc : Ds), this._pt.u = x || 0, T && C !== u ? (this._pt.b = c, this._pt.e = C, this._pt.r = qc) : m !== x && x !== "%" && (this._pt.b = c, this._pt.r = Vc);
          else if (p in a)
            nu.call(this, t, p, c, w ? w + u : u);
          else if (p in t)
            this.add(t, p, c || t[p], w ? w + u : u, i, n);
          else if (p !== "parseTransform") {
            Zs(p, u);
            continue;
          }
          T || (p in a ? P.push(p, 0, a[p]) : typeof t[p] == "function" ? P.push(p, 2, t[p]()) : P.push(p, 1, c || t[p])), o.push(p);
        }
      }
    b && Ja(this);
  },
  render: function(t, e) {
    if (e.tween._time || !lo())
      for (var r = e._pt; r; )
        r.r(t, r.d), r = r._next;
    else
      e.styles.revert();
  },
  get: lr,
  aliases: Je,
  getSetter: function(t, e, r) {
    var i = Je[e];
    return i && i.indexOf(",") < 0 && (e = i), e in dr && e !== pe && (t._gsap.x || lr(t, "x")) ? r && Do === r ? e === "scale" ? Jc : Zc : (Do = r || {}) && (e === "scale" ? jc : tu) : t.style && !Gs(t.style[e]) ? Kc : ~e.indexOf("-") ? Qc : so(t, e);
  },
  core: {
    _removeProperty: Dr,
    _getMatrix: uo
  }
};
ge.utils.checkPrefix = Mi;
ge.core.getStyleSaver = il;
(function(s, t, e, r) {
  var i = he(s + "," + t + "," + e, function(n) {
    dr[n] = 1;
  });
  he(t, function(n) {
    Pe.units[n] = "deg", al[n] = 1;
  }), Je[i[13]] = s + "," + t, he(r, function(n) {
    var o = n.split(":");
    Je[o[1]] = i[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
he("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s) {
  Pe.units[s] = "px";
});
ge.registerPlugin(ul);
var gt = ge.registerPlugin(ul) || ge;
gt.core.Tween;
function fu(s, t) {
  for (var e = 0; e < t.length; e++) {
    var r = t[e];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(s, r.key, r);
  }
}
function hu(s, t, e) {
  return t && fu(s.prototype, t), s;
}
/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Bt, Fn, Ee, Er, Cr, wi, fl, Hr, bi, hl, ur, Ue, dl, pl = function() {
  return Bt || typeof window < "u" && (Bt = window.gsap) && Bt.registerPlugin && Bt;
}, _l = 1, gi = [], $ = [], tr = [], Ki = Date.now, Ns = function(t, e) {
  return e;
}, du = function() {
  var t = bi.core, e = t.bridge || {}, r = t._scrollers, i = t._proxies;
  r.push.apply(r, $), i.push.apply(i, tr), $ = r, tr = i, Ns = function(o, a) {
    return e[o](a);
  };
}, Mr = function(t, e) {
  return ~tr.indexOf(t) && tr[tr.indexOf(t) + 1][e];
}, Qi = function(t) {
  return !!~hl.indexOf(t);
}, ie = function(t, e, r, i, n) {
  return t.addEventListener(e, r, {
    passive: i !== !1,
    capture: !!n
  });
}, re = function(t, e, r, i) {
  return t.removeEventListener(e, r, !!i);
}, bn = "scrollLeft", xn = "scrollTop", Fs = function() {
  return ur && ur.isPressed || $.cache++;
}, Qn = function(t, e) {
  var r = function i(n) {
    if (n || n === 0) {
      _l && (Ee.history.scrollRestoration = "manual");
      var o = ur && ur.isPressed;
      n = i.v = Math.round(n) || (ur && ur.iOS ? 1 : 0), t(n), i.cacheID = $.cache, o && Ns("ss", n);
    } else (e || $.cache !== i.cacheID || Ns("ref")) && (i.cacheID = $.cache, i.v = t());
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
    return arguments.length ? Ee.scrollTo(s, Ot.sc()) : Ee.pageXOffset || Er[bn] || Cr[bn] || wi[bn] || 0;
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
    return arguments.length ? Ee.scrollTo(ae.sc(), s) : Ee.pageYOffset || Er[xn] || Cr[xn] || wi[xn] || 0;
  })
}, ce = function(t, e) {
  return (e && e._ctx && e._ctx.selector || Bt.utils.toArray)(t)[0] || (typeof t == "string" && Bt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", t) : null);
}, pu = function(t, e) {
  for (var r = e.length; r--; )
    if (e[r] === t || e[r].contains(t))
      return !0;
  return !1;
}, Ar = function(t, e) {
  var r = e.s, i = e.sc;
  Qi(t) && (t = Er.scrollingElement || Cr);
  var n = $.indexOf(t), o = i === Ot.sc ? 1 : 2;
  !~n && (n = $.push(t) - 1), $[n + o] || ie(t, "scroll", Fs);
  var a = $[n + o], l = a || ($[n + o] = Qn(Mr(t, r), !0) || (Qi(t) ? i : Qn(function(c) {
    return arguments.length ? t[r] = c : t[r];
  })));
  return l.target = t, a || (l.smooth = Bt.getProperty(t, "scrollBehavior") === "smooth"), l;
}, zs = function(t, e, r) {
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
}, Bo = function(t) {
  var e = Math.max.apply(Math, t), r = Math.min.apply(Math, t);
  return Math.abs(e) >= Math.abs(r) ? e : r;
}, gl = function() {
  bi = Bt.core.globals().ScrollTrigger, bi && bi.core && du();
}, ml = function(t) {
  return Bt = t || pl(), !Fn && Bt && typeof document < "u" && document.body && (Ee = window, Er = document, Cr = Er.documentElement, wi = Er.body, hl = [Ee, Er, Cr, wi], Bt.utils.clamp, dl = Bt.core.context || function() {
  }, Hr = "onpointerenter" in wi ? "pointer" : "mouse", fl = xt.isTouch = Ee.matchMedia && Ee.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Ee || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Ue = xt.eventTypes = ("ontouchstart" in Cr ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Cr ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return _l = 0;
  }, 500), Fn = 1), bi || gl(), Fn;
};
ae.op = Ot;
$.cache = 0;
var xt = /* @__PURE__ */ function() {
  function s(e) {
    this.init(e);
  }
  var t = s.prototype;
  return t.init = function(r) {
    Fn || ml(Bt) || console.warn("Please gsap.registerPlugin(Observer)"), bi || gl();
    var i = r.tolerance, n = r.dragMinimum, o = r.type, a = r.target, l = r.lineHeight, c = r.debounce, u = r.preventDefault, d = r.onStop, h = r.onStopDelay, f = r.ignore, _ = r.wheelSpeed, p = r.event, m = r.onDragStart, x = r.onDragEnd, w = r.onDrag, T = r.onPress, v = r.onRelease, S = r.onRight, k = r.onLeft, b = r.onUp, P = r.onDown, C = r.onChangeX, E = r.onChangeY, W = r.onChange, O = r.onToggleX, K = r.onToggleY, Y = r.onHover, Q = r.onHoverEnd, V = r.onMove, L = r.ignoreCheck, Z = r.isNormalizer, rt = r.onGestureStart, g = r.onGestureEnd, ot = r.onWheel, Jt = r.onEnable, Ye = r.onDisable, dt = r.onClick, zt = r.scrollSpeed, Xt = r.capture, Tt = r.allowClicks, jt = r.lockAxis, Ht = r.onLockAxis;
    this.target = a = ce(a) || Cr, this.vars = r, f && (f = Bt.utils.toArray(f)), i = i || 1e-9, n = n || 0, _ = _ || 1, zt = zt || 1, o = o || "wheel,touch,pointer", c = c !== !1, l || (l = parseFloat(Ee.getComputedStyle(wi).lineHeight) || 22);
    var pr, te, ee, J, vt, le, me, y = this, ve = 0, rr = 0, _r = r.passive || !u && r.passive !== !1, pt = Ar(a, ae), ir = Ar(a, Ot), gr = pt(), Nr = ir(), Dt = ~o.indexOf("touch") && !~o.indexOf("pointer") && Ue[0] === "pointerdown", mr = Qi(a), yt = a.ownerDocument || Er, Be = [0, 0, 0], De = [0, 0, 0], nr = 0, Ri = function() {
      return nr = Ki();
    }, Et = function(N, j) {
      return (y.event = N) && f && pu(N.target, f) || j && Dt && N.pointerType !== "touch" || L && L(N, j);
    }, mn = function() {
      y._vx.reset(), y._vy.reset(), te.pause(), d && d(y);
    }, sr = function() {
      var N = y.deltaX = Bo(Be), j = y.deltaY = Bo(De), M = Math.abs(N) >= i, z = Math.abs(j) >= i;
      W && (M || z) && W(y, N, j, Be, De), M && (S && y.deltaX > 0 && S(y), k && y.deltaX < 0 && k(y), C && C(y), O && y.deltaX < 0 != ve < 0 && O(y), ve = y.deltaX, Be[0] = Be[1] = Be[2] = 0), z && (P && y.deltaY > 0 && P(y), b && y.deltaY < 0 && b(y), E && E(y), K && y.deltaY < 0 != rr < 0 && K(y), rr = y.deltaY, De[0] = De[1] = De[2] = 0), (J || ee) && (V && V(y), ee && (m && ee === 1 && m(y), w && w(y), ee = 0), J = !1), le && !(le = !1) && Ht && Ht(y), vt && (ot(y), vt = !1), pr = 0;
    }, ni = function(N, j, M) {
      Be[M] += N, De[M] += j, y._vx.update(N), y._vy.update(j), c ? pr || (pr = requestAnimationFrame(sr)) : sr();
    }, si = function(N, j) {
      jt && !me && (y.axis = me = Math.abs(N) > Math.abs(j) ? "x" : "y", le = !0), me !== "y" && (Be[2] += N, y._vx.update(N, !0)), me !== "x" && (De[2] += j, y._vy.update(j, !0)), c ? pr || (pr = requestAnimationFrame(sr)) : sr();
    }, vr = function(N) {
      if (!Et(N, 1)) {
        N = zi(N, u);
        var j = N.clientX, M = N.clientY, z = j - y.x, A = M - y.y, I = y.isDragging;
        y.x = j, y.y = M, (I || (z || A) && (Math.abs(y.startX - j) >= n || Math.abs(y.startY - M) >= n)) && (ee || (ee = I ? 2 : 1), I || (y.isDragging = !0), si(z, A));
      }
    }, Fr = y.onPress = function(B) {
      Et(B, 1) || B && B.button || (y.axis = me = null, te.pause(), y.isPressed = !0, B = zi(B), ve = rr = 0, y.startX = y.x = B.clientX, y.startY = y.y = B.clientY, y._vx.reset(), y._vy.reset(), ie(Z ? a : yt, Ue[1], vr, _r, !0), y.deltaX = y.deltaY = 0, T && T(y));
    }, U = y.onRelease = function(B) {
      if (!Et(B, 1)) {
        re(Z ? a : yt, Ue[1], vr, !0);
        var N = !isNaN(y.y - y.startY), j = y.isDragging, M = j && (Math.abs(y.x - y.startX) > 3 || Math.abs(y.y - y.startY) > 3), z = zi(B);
        !M && N && (y._vx.reset(), y._vy.reset(), u && Tt && Bt.delayedCall(0.08, function() {
          if (Ki() - nr > 300 && !B.defaultPrevented) {
            if (B.target.click)
              B.target.click();
            else if (yt.createEvent) {
              var A = yt.createEvent("MouseEvents");
              A.initMouseEvent("click", !0, !0, Ee, 1, z.screenX, z.screenY, z.clientX, z.clientY, !1, !1, !1, !1, 0, null), B.target.dispatchEvent(A);
            }
          }
        })), y.isDragging = y.isGesturing = y.isPressed = !1, d && j && !Z && te.restart(!0), ee && sr(), x && j && x(y), v && v(y, M);
      }
    }, zr = function(N) {
      return N.touches && N.touches.length > 1 && (y.isGesturing = !0) && rt(N, y.isDragging);
    }, We = function() {
      return (y.isGesturing = !1) || g(y);
    }, Xe = function(N) {
      if (!Et(N)) {
        var j = pt(), M = ir();
        ni((j - gr) * zt, (M - Nr) * zt, 1), gr = j, Nr = M, d && te.restart(!0);
      }
    }, He = function(N) {
      if (!Et(N)) {
        N = zi(N, u), ot && (vt = !0);
        var j = (N.deltaMode === 1 ? l : N.deltaMode === 2 ? Ee.innerHeight : 1) * _;
        ni(N.deltaX * j, N.deltaY * j, 0), d && !Z && te.restart(!0);
      }
    }, Ir = function(N) {
      if (!Et(N)) {
        var j = N.clientX, M = N.clientY, z = j - y.x, A = M - y.y;
        y.x = j, y.y = M, J = !0, d && te.restart(!0), (z || A) && si(z, A);
      }
    }, oi = function(N) {
      y.event = N, Y(y);
    }, or = function(N) {
      y.event = N, Q(y);
    }, Ai = function(N) {
      return Et(N) || zi(N, u) && dt(y);
    };
    te = y._dc = Bt.delayedCall(h || 0.25, mn).pause(), y.deltaX = y.deltaY = 0, y._vx = zs(0, 50, !0), y._vy = zs(0, 50, !0), y.scrollX = pt, y.scrollY = ir, y.isDragging = y.isGesturing = y.isPressed = !1, dl(this), y.enable = function(B) {
      return y.isEnabled || (ie(mr ? yt : a, "scroll", Fs), o.indexOf("scroll") >= 0 && ie(mr ? yt : a, "scroll", Xe, _r, Xt), o.indexOf("wheel") >= 0 && ie(a, "wheel", He, _r, Xt), (o.indexOf("touch") >= 0 && fl || o.indexOf("pointer") >= 0) && (ie(a, Ue[0], Fr, _r, Xt), ie(yt, Ue[2], U), ie(yt, Ue[3], U), Tt && ie(a, "click", Ri, !0, !0), dt && ie(a, "click", Ai), rt && ie(yt, "gesturestart", zr), g && ie(yt, "gestureend", We), Y && ie(a, Hr + "enter", oi), Q && ie(a, Hr + "leave", or), V && ie(a, Hr + "move", Ir)), y.isEnabled = !0, y.isDragging = y.isGesturing = y.isPressed = J = ee = !1, y._vx.reset(), y._vy.reset(), gr = pt(), Nr = ir(), B && B.type && Fr(B), Jt && Jt(y)), y;
    }, y.disable = function() {
      y.isEnabled && (gi.filter(function(B) {
        return B !== y && Qi(B.target);
      }).length || re(mr ? yt : a, "scroll", Fs), y.isPressed && (y._vx.reset(), y._vy.reset(), re(Z ? a : yt, Ue[1], vr, !0)), re(mr ? yt : a, "scroll", Xe, Xt), re(a, "wheel", He, Xt), re(a, Ue[0], Fr, Xt), re(yt, Ue[2], U), re(yt, Ue[3], U), re(a, "click", Ri, !0), re(a, "click", Ai), re(yt, "gesturestart", zr), re(yt, "gestureend", We), re(a, Hr + "enter", oi), re(a, Hr + "leave", or), re(a, Hr + "move", Ir), y.isEnabled = y.isPressed = y.isDragging = !1, Ye && Ye(y));
    }, y.kill = y.revert = function() {
      y.disable();
      var B = gi.indexOf(y);
      B >= 0 && gi.splice(B, 1), ur === y && (ur = 0);
    }, gi.push(y), Z && Qi(a) && (ur = y), y.enable(p);
  }, hu(s, [{
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
xt.version = "3.15.0";
xt.create = function(s) {
  return new xt(s);
};
xt.register = ml;
xt.getAll = function() {
  return gi.slice();
};
xt.getById = function(s) {
  return gi.filter(function(t) {
    return t.vars.id === s;
  })[0];
};
pl() && Bt.registerPlugin(xt);
/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var D, hi, H, et, Se, tt, fo, Zn, dn, Zi, Wi, Sn, qt, is, Is, se, Wo, Xo, di, vl, ds, yl, ne, Ys, wl, bl, br, Bs, ho, xi, po, Ji, Ws, ps, Tn = 1, Gt = Date.now, _s = Gt(), Ie = 0, Xi = 0, Ho = function(t, e, r) {
  var i = be(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
  return r["_" + e + "Clamp"] = i, i ? t.substr(6, t.length - 7) : t;
}, $o = function(t, e) {
  return e && (!be(t) || t.substr(0, 6) !== "clamp(") ? "clamp(" + t + ")" : t;
}, _u = function s() {
  return Xi && requestAnimationFrame(s);
}, Uo = function() {
  return is = 1;
}, Vo = function() {
  return is = 0;
}, Qe = function(t) {
  return t;
}, Hi = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, xl = function() {
  return typeof window < "u";
}, Sl = function() {
  return D || xl() && (D = window.gsap) && D.registerPlugin && D;
}, ti = function(t) {
  return !!~fo.indexOf(t);
}, Tl = function(t) {
  return (t === "Height" ? po : H["inner" + t]) || Se["client" + t] || tt["client" + t];
}, El = function(t) {
  return Mr(t, "getBoundingClientRect") || (ti(t) ? function() {
    return Wn.width = H.innerWidth, Wn.height = po, Wn;
  } : function() {
    return cr(t);
  });
}, gu = function(t, e, r) {
  var i = r.d, n = r.d2, o = r.a;
  return (o = Mr(t, "getBoundingClientRect")) ? function() {
    return o()[i];
  } : function() {
    return (e ? Tl(n) : t["client" + n]) || 0;
  };
}, mu = function(t, e) {
  return !e || ~tr.indexOf(t) ? El(t) : function() {
    return Wn;
  };
}, je = function(t, e) {
  var r = e.s, i = e.d2, n = e.d, o = e.a;
  return Math.max(0, (r = "scroll" + i) && (o = Mr(t, r)) ? o() - El(t)()[n] : ti(t) ? (Se[r] || tt[r]) - Tl(i) : t[r] - t["offset" + i]);
}, En = function(t, e) {
  for (var r = 0; r < di.length; r += 3)
    (!e || ~e.indexOf(di[r + 1])) && t(di[r], di[r + 1], di[r + 2]);
}, be = function(t) {
  return typeof t == "string";
}, Qt = function(t) {
  return typeof t == "function";
}, $i = function(t) {
  return typeof t == "number";
}, $r = function(t) {
  return typeof t == "object";
}, Ii = function(t, e, r) {
  return t && t.progress(e ? 0 : 1) && r && t.pause();
}, li = function(t, e, r) {
  if (t.enabled) {
    var i = t._ctx ? t._ctx.add(function() {
      return e(t, r);
    }) : e(t, r);
    i && i.totalTime && (t.callbackAnimation = i);
  }
}, ci = Math.abs, Cl = "left", kl = "top", _o = "right", go = "bottom", Zr = "width", Jr = "height", ji = "Right", tn = "Left", en = "Top", rn = "Bottom", Ct = "padding", Le = "margin", Oi = "Width", mo = "Height", Mt = "px", Ne = function(t) {
  return H.getComputedStyle(t.nodeType === Node.DOCUMENT_NODE ? t.scrollingElement : t);
}, vu = function(t) {
  var e = Ne(t).position;
  t.style.position = e === "absolute" || e === "fixed" ? e : "relative";
}, qo = function(t, e) {
  for (var r in e)
    r in t || (t[r] = e[r]);
  return t;
}, cr = function(t, e) {
  var r = e && Ne(t)[Is] !== "matrix(1, 0, 0, 1, 0, 0)" && D.to(t, {
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
}, Jn = function(t, e) {
  var r = e.d2;
  return t["offset" + r] || t["client" + r] || 0;
}, Pl = function(t) {
  var e = [], r = t.labels, i = t.duration(), n;
  for (n in r)
    e.push(r[n] / i);
  return e;
}, yu = function(t) {
  return function(e) {
    return D.utils.snap(Pl(t), e);
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
}, wu = function(t) {
  return function(e, r) {
    return vo(Pl(t))(e, r.direction);
  };
}, Cn = function(t, e, r, i) {
  return r.split(",").forEach(function(n) {
    return t(e, n, i);
  });
}, Lt = function(t, e, r, i, n) {
  return t.addEventListener(e, r, {
    passive: !i,
    capture: !!n
  });
}, At = function(t, e, r, i) {
  return t.removeEventListener(e, r, !!i);
}, kn = function(t, e, r) {
  r = r && r.wheelHandler, r && (t(e, "wheel", r), t(e, "touchmove", r));
}, Go = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, Pn = {
  toggleActions: "play",
  anticipatePin: 0
}, jn = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, zn = function(t, e) {
  if (be(t)) {
    var r = t.indexOf("="), i = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
    ~r && (t.indexOf("%") > r && (i *= e / 100), t = t.substr(0, r - 1)), t = i + (t in jn ? jn[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0);
  }
  return t;
}, Mn = function(t, e, r, i, n, o, a, l) {
  var c = n.startColor, u = n.endColor, d = n.fontSize, h = n.indent, f = n.fontWeight, _ = et.createElement("div"), p = ti(r) || Mr(r, "pinType") === "fixed", m = t.indexOf("scroller") !== -1, x = p ? tt : r.tagName === "IFRAME" ? r.contentDocument.body : r, w = t.indexOf("start") !== -1, T = w ? c : u, v = "border-color:" + T + ";font-size:" + d + ";color:" + T + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return v += "position:" + ((m || l) && p ? "fixed;" : "absolute;"), (m || l || !p) && (v += (i === Ot ? _o : go) + ":" + (o + parseFloat(h)) + "px;"), a && (v += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), _._isStart = w, _.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), _.style.cssText = v, _.innerText = e || e === 0 ? t + "-" + e : t, x.children[0] ? x.insertBefore(_, x.children[0]) : x.appendChild(_), _._offset = _["offset" + i.op.d2], In(_, 0, i, w), _;
}, In = function(t, e, r, i) {
  var n = {
    display: "block"
  }, o = r[i ? "os2" : "p2"], a = r[i ? "p2" : "os2"];
  t._isFlipped = i, n[r.a + "Percent"] = i ? -100 : 0, n[r.a] = i ? "1px" : 0, n["border" + o + Oi] = 1, n["border" + a + Oi] = 0, n[r.p] = e + "px", D.set(t, n);
}, X = [], Xs = {}, pn, Ko = function() {
  return Gt() - Ie > 34 && (pn || (pn = requestAnimationFrame(fr)));
}, ui = function() {
  (!ne || !ne.isPressed || ne.startX > tt.clientWidth) && ($.cache++, ne ? pn || (pn = requestAnimationFrame(fr)) : fr(), Ie || ri("scrollStart"), Ie = Gt());
}, gs = function() {
  bl = H.innerWidth, wl = H.innerHeight;
}, Ui = function(t) {
  $.cache++, (t === !0 || !qt && !yl && !et.fullscreenElement && !et.webkitFullscreenElement && (!Ys || bl !== H.innerWidth || Math.abs(H.innerHeight - wl) > H.innerHeight * 0.25)) && Zn.restart(!0);
}, ei = {}, bu = [], Ml = function s() {
  return At(F, "scrollEnd", s) || Vr(!0);
}, ri = function(t) {
  return ei[t] && ei[t].map(function(e) {
    return e();
  }) || bu;
}, we = [], Ol = function(t) {
  for (var e = 0; e < we.length; e += 5)
    (!t || we[e + 4] && we[e + 4].query === t) && (we[e].style.cssText = we[e + 1], we[e].getBBox && we[e].setAttribute("transform", we[e + 2] || ""), we[e + 3].uncache = 1);
}, Dl = function() {
  return $.forEach(function(t) {
    return Qt(t) && ++t.cacheID && (t.rec = t());
  });
}, yo = function(t, e) {
  var r;
  for (se = 0; se < X.length; se++)
    r = X[se], r && (!e || r._ctx === e) && (t ? r.kill(1) : r.revert(!0, !0));
  Ji = !0, e && Ol(e), e || ri("revert");
}, Rl = function(t, e) {
  $.cache++, (e || !oe) && $.forEach(function(r) {
    return Qt(r) && r.cacheID++ && (r.rec = 0);
  }), be(t) && (H.history.scrollRestoration = ho = t);
}, oe, jr = 0, Qo, xu = function() {
  if (Qo !== jr) {
    var t = Qo = jr;
    requestAnimationFrame(function() {
      return t === jr && Vr(!0);
    });
  }
}, Al = function() {
  tt.appendChild(xi), po = !ne && xi.offsetHeight || H.innerHeight, tt.removeChild(xi);
}, Zo = function(t) {
  return dn(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e) {
    return e.style.display = t ? "none" : "block";
  });
}, Vr = function(t, e) {
  if (Se = et.documentElement, tt = et.body, fo = [H, et, Se, tt], Ie && !t && !Ji) {
    Lt(F, "scrollEnd", Ml);
    return;
  }
  Al(), oe = F.isRefreshing = !0, Ji || Dl();
  var r = ri("refreshInit");
  vl && F.sort(), e || yo(), $.forEach(function(i) {
    Qt(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
  }), X.slice(0).forEach(function(i) {
    return i.refresh();
  }), Ji = !1, X.forEach(function(i) {
    if (i._subPinOffset && i.pin) {
      var n = i.vars.horizontal ? "offsetWidth" : "offsetHeight", o = i.pin[n];
      i.revert(!0, 1), i.adjustPinSpacing(i.pin[n] - o), i.refresh();
    }
  }), Ws = 1, Zo(!0), X.forEach(function(i) {
    var n = je(i.scroller, i._dir), o = i.vars.end === "max" || i._endClamp && i.end > n, a = i._startClamp && i.start >= n;
    (o || a) && i.setPositions(a ? n - 1 : i.start, o ? Math.max(a ? n : i.start + 1, n) : i.end, !0);
  }), Zo(!1), Ws = 0, r.forEach(function(i) {
    return i && i.render && i.render(-1);
  }), $.forEach(function(i) {
    Qt(i) && (i.smooth && requestAnimationFrame(function() {
      return i.target.style.scrollBehavior = "smooth";
    }), i.rec && i(i.rec));
  }), Rl(ho, 1), Zn.pause(), jr++, oe = 2, fr(2), X.forEach(function(i) {
    return Qt(i.vars.onRefresh) && i.vars.onRefresh(i);
  }), oe = F.isRefreshing = !1, ri("refresh");
}, Hs = 0, Yn = 1, nn, fr = function(t) {
  if (t === 2 || !oe && !Ji) {
    F.isUpdating = !0, nn && nn.update(0);
    var e = X.length, r = Gt(), i = r - _s >= 50, n = e && X[0].scroll();
    if (Yn = Hs > n ? -1 : 1, oe || (Hs = n), i && (Ie && !is && r - Ie > 200 && (Ie = 0, ri("scrollEnd")), Wi = _s, _s = r), Yn < 0) {
      for (se = e; se-- > 0; )
        X[se] && X[se].update(0, i);
      Yn = 1;
    } else
      for (se = 0; se < e; se++)
        X[se] && X[se].update(0, i);
    F.isUpdating = !1;
  }
  pn = 0;
}, $s = [Cl, kl, go, _o, Le + rn, Le + ji, Le + en, Le + tn, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Bn = $s.concat([Zr, Jr, "boxSizing", "max" + Oi, "max" + mo, "position", Le, Ct, Ct + en, Ct + ji, Ct + rn, Ct + tn]), Su = function(t, e, r) {
  Si(r);
  var i = t._gsap;
  if (i.spacerIsNative)
    Si(i.spacerState);
  else if (t._gsap.swappedIn) {
    var n = e.parentNode;
    n && (n.insertBefore(t, e), n.removeChild(e));
  }
  t._gsap.swappedIn = !1;
}, ms = function(t, e, r, i) {
  if (!t._gsap.swappedIn) {
    for (var n = $s.length, o = e.style, a = t.style, l; n--; )
      l = $s[n], o[l] = r[l];
    o.position = r.position === "absolute" ? "absolute" : "relative", r.display === "inline" && (o.display = "inline-block"), a[go] = a[_o] = "auto", o.flexBasis = r.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[Zr] = Jn(t, ae) + Mt, o[Jr] = Jn(t, Ot) + Mt, o[Ct] = a[Le] = a[kl] = a[Cl] = "0", Si(i), a[Zr] = a["max" + Oi] = r[Zr], a[Jr] = a["max" + mo] = r[Jr], a[Ct] = r[Ct], t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)), t._gsap.swappedIn = !0;
  }
}, Tu = /([A-Z])/g, Si = function(t) {
  if (t) {
    var e = t.t.style, r = t.length, i = 0, n, o;
    for ((t.t._gsap || D.core.getCache(t.t)).uncache = 1; i < r; i += 2)
      o = t[i + 1], n = t[i], o ? e[n] = o : e[n] && e.removeProperty(n.replace(Tu, "-$1").toLowerCase());
  }
}, On = function(t) {
  for (var e = Bn.length, r = t.style, i = [], n = 0; n < e; n++)
    i.push(Bn[n], r[Bn[n]]);
  return i.t = t, i;
}, Eu = function(t, e, r) {
  for (var i = [], n = t.length, o = r ? 8 : 0, a; o < n; o += 2)
    a = t[o], i.push(a, a in e ? e[a] : t[o + 1]);
  return i.t = t.t, i;
}, Wn = {
  left: 0,
  top: 0
}, Jo = function(t, e, r, i, n, o, a, l, c, u, d, h, f, _) {
  Qt(t) && (t = t(l)), be(t) && t.substr(0, 3) === "max" && (t = h + (t.charAt(4) === "=" ? zn("0" + t.substr(3), r) : 0));
  var p = f ? f.time() : 0, m, x, w;
  if (f && f.seek(0), isNaN(t) || (t = +t), $i(t))
    f && (t = D.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, h, t)), a && In(a, r, i, !0);
  else {
    Qt(e) && (e = e(l));
    var T = (t || "0").split(" "), v, S, k, b;
    w = ce(e, l) || tt, v = cr(w) || {}, (!v || !v.left && !v.top) && Ne(w).display === "none" && (b = w.style.display, w.style.display = "block", v = cr(w), b ? w.style.display = b : w.style.removeProperty("display")), S = zn(T[0], v[i.d]), k = zn(T[1] || "0", r), t = v[i.p] - c[i.p] - u + S + n - k, a && In(a, k, i, r - k < 20 || a._isStart && k > 20), r -= r - k;
  }
  if (_ && (l[_] = t || -1e-3, t < 0 && (t = 0)), o) {
    var P = t + r, C = o._isStart;
    m = "scroll" + i.d2, In(o, P, i, C && P > 20 || !C && (d ? Math.max(tt[m], Se[m]) : o.parentNode[m]) <= P + 1), d && (c = cr(a), d && (o.style[i.op.p] = c[i.op.p] - i.op.m - o._offset + Mt));
  }
  return f && w && (m = cr(w), f.seek(h), x = cr(w), f._caScrollDist = m[i.p] - x[i.p], t = t / f._caScrollDist * h), f && f.seek(p), f ? t : Math.round(t);
}, Cu = /(webkit|moz|length|cssText|inset)/i, jo = function(t, e, r, i) {
  if (t.parentNode !== e) {
    var n = t.style, o, a;
    if (e === tt) {
      t._stOrig = n.cssText, a = Ne(t);
      for (o in a)
        !+o && !Cu.test(o) && a[o] && typeof n[o] == "string" && o !== "0" && (n[o] = a[o]);
      n.top = r, n.left = i;
    } else
      n.cssText = t._stOrig;
    D.core.getCache(t).uncache = 1, e.appendChild(t);
  }
}, Ll = function(t, e, r) {
  var i = e, n = i;
  return function(o) {
    var a = Math.round(t());
    return a !== i && a !== n && Math.abs(a - i) > 3 && Math.abs(a - n) > 3 && (o = a, r && r()), n = i, i = Math.round(o), i;
  };
}, Dn = function(t, e, r) {
  var i = {};
  i[e.p] = "+=" + r, D.set(t, i);
}, ta = function(t, e) {
  var r = Ar(t, e), i = "_scroll" + e.p2, n = function o(a, l, c, u, d) {
    var h = o.tween, f = l.onComplete, _ = {};
    c = c || r();
    var p = Ll(r, c, function() {
      h.kill(), o.tween = 0;
    });
    return d = u && d || 0, u = u || a - c, h && h.kill(), l[i] = a, l.inherit = !1, l.modifiers = _, _[i] = function() {
      return p(c + u * h.ratio + d * h.ratio * h.ratio);
    }, l.onUpdate = function() {
      $.cache++, o.tween && fr();
    }, l.onComplete = function() {
      o.tween = 0, f && f.call(h);
    }, h = o.tween = D.to(t, l), h;
  };
  return t[i] = r, r.wheelHandler = function() {
    return n.tween && n.tween.kill() && (n.tween = 0);
  }, Lt(t, "wheel", r.wheelHandler), F.isTouch && Lt(t, "touchmove", r.wheelHandler), n;
}, F = /* @__PURE__ */ function() {
  function s(e, r) {
    hi || s.register(D) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Bs(this), this.init(e, r);
  }
  var t = s.prototype;
  return t.init = function(r, i) {
    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Xi) {
      this.update = this.refresh = this.kill = Qe;
      return;
    }
    r = qo(be(r) || $i(r) || r.nodeType ? {
      trigger: r
    } : r, Pn);
    var n = r, o = n.onUpdate, a = n.toggleClass, l = n.id, c = n.onToggle, u = n.onRefresh, d = n.scrub, h = n.trigger, f = n.pin, _ = n.pinSpacing, p = n.invalidateOnRefresh, m = n.anticipatePin, x = n.onScrubComplete, w = n.onSnapComplete, T = n.once, v = n.snap, S = n.pinReparent, k = n.pinSpacer, b = n.containerAnimation, P = n.fastScrollEnd, C = n.preventOverlaps, E = r.horizontal || r.containerAnimation && r.horizontal !== !1 ? ae : Ot, W = !d && d !== 0, O = ce(r.scroller || H), K = D.core.getCache(O), Y = ti(O), Q = ("pinType" in r ? r.pinType : Mr(O, "pinType") || Y && "fixed") === "fixed", V = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack], L = W && r.toggleActions.split(" "), Z = "markers" in r ? r.markers : Pn.markers, rt = Y ? 0 : parseFloat(Ne(O)["border" + E.p2 + Oi]) || 0, g = this, ot = r.onRefreshInit && function() {
      return r.onRefreshInit(g);
    }, Jt = gu(O, Y, E), Ye = mu(O, Y), dt = 0, zt = 0, Xt = 0, Tt = Ar(O, E), jt, Ht, pr, te, ee, J, vt, le, me, y, ve, rr, _r, pt, ir, gr, Nr, Dt, mr, yt, Be, De, nr, Ri, Et, mn, sr, ni, si, vr, Fr, U, zr, We, Xe, He, Ir, oi, or;
    if (g._startClamp = g._endClamp = !1, g._dir = E, m *= 45, g.scroller = O, g.scroll = b ? b.time.bind(b) : Tt, te = Tt(), g.vars = r, i = i || r.animation, "refreshPriority" in r && (vl = 1, r.refreshPriority === -9999 && (nn = g)), K.tweenScroll = K.tweenScroll || {
      top: ta(O, Ot),
      left: ta(O, ae)
    }, g.tweenTo = jt = K.tweenScroll[E.p], g.scrubDuration = function(M) {
      zr = $i(M) && M, zr ? U ? U.duration(M) : U = D.to(i, {
        ease: "expo",
        totalProgress: "+=0",
        inherit: !1,
        duration: zr,
        paused: !0,
        onComplete: function() {
          return x && x(g);
        }
      }) : (U && U.progress(1).kill(), U = 0);
    }, i && (i.vars.lazy = !1, i._initted && !g.isReverted || i.vars.immediateRender !== !1 && r.immediateRender !== !1 && i.duration() && i.render(0, !0, !0), g.animation = i.pause(), i.scrollTrigger = g, g.scrubDuration(d), vr = 0, l || (l = i.vars.id)), v && ((!$r(v) || v.push) && (v = {
      snapTo: v
    }), "scrollBehavior" in tt.style && D.set(Y ? [tt, Se] : O, {
      scrollBehavior: "auto"
    }), $.forEach(function(M) {
      return Qt(M) && M.target === (Y ? et.scrollingElement || Se : O) && (M.smooth = !1);
    }), pr = Qt(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? yu(i) : v.snapTo === "labelsDirectional" ? wu(i) : v.directional !== !1 ? function(M, z) {
      return vo(v.snapTo)(M, Gt() - zt < 500 ? 0 : z.direction);
    } : D.utils.snap(v.snapTo), We = v.duration || {
      min: 0.1,
      max: 2
    }, We = $r(We) ? Zi(We.min, We.max) : Zi(We, We), Xe = D.delayedCall(v.delay || zr / 2 || 0.1, function() {
      var M = Tt(), z = Gt() - zt < 500, A = jt.tween;
      if ((z || Math.abs(g.getVelocity()) < 10) && !A && !is && dt !== M) {
        var I = (M - J) / pt, Rt = i && !W ? i.totalProgress() : I, q = z ? 0 : (Rt - Fr) / (Gt() - Wi) * 1e3 || 0, wt = D.utils.clamp(-I, 1 - I, ci(q / 2) * q / 0.185), $t = I + (v.inertia === !1 ? 0 : wt), _t, at, it = v, $e = it.onStart, ct = it.onInterrupt, ye = it.onComplete;
        if (_t = pr($t, g), $i(_t) || (_t = $t), at = Math.max(0, Math.round(J + _t * pt)), M <= vt && M >= J && at !== M) {
          if (A && !A._initted && A.data <= ci(at - M))
            return;
          v.inertia === !1 && (wt = _t - I), jt(at, {
            duration: We(ci(Math.max(ci($t - Rt), ci(_t - Rt)) * 0.185 / q / 0.05 || 0)),
            ease: v.ease || "power3",
            data: ci(at - M),
            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
            onInterrupt: function() {
              return Xe.restart(!0) && ct && li(g, ct);
            },
            onComplete: function() {
              g.update(), dt = Tt(), i && !W && (U ? U.resetTo("totalProgress", _t, i._tTime / i._tDur) : i.progress(_t)), vr = Fr = i && !W ? i.totalProgress() : g.progress, w && w(g), ye && li(g, ye);
            }
          }, M, wt * pt, at - M - wt * pt), $e && li(g, $e, jt.tween);
        }
      } else g.isActive && dt !== M && Xe.restart(!0);
    }).pause()), l && (Xs[l] = g), h = g.trigger = ce(h || f !== !0 && f), or = h && h._gsap && h._gsap.stRevert, or && (or = or(g)), f = f === !0 ? h : ce(f), be(a) && (a = {
      targets: h,
      className: a
    }), f && (_ === !1 || _ === Le || (_ = !_ && f.parentNode && f.parentNode.style && Ne(f.parentNode).display === "flex" ? !1 : Ct), g.pin = f, Ht = D.core.getCache(f), Ht.spacer ? ir = Ht.pinState : (k && (k = ce(k), k && !k.nodeType && (k = k.current || k.nativeElement), Ht.spacerIsNative = !!k, k && (Ht.spacerState = On(k))), Ht.spacer = Dt = k || et.createElement("div"), Dt.classList.add("pin-spacer"), l && Dt.classList.add("pin-spacer-" + l), Ht.pinState = ir = On(f)), r.force3D !== !1 && D.set(f, {
      force3D: !0
    }), g.spacer = Dt = Ht.spacer, si = Ne(f), Ri = si[_ + E.os2], yt = D.getProperty(f), Be = D.quickSetter(f, E.a, Mt), ms(f, Dt, si), Nr = On(f)), Z) {
      rr = $r(Z) ? qo(Z, Go) : Go, y = Mn("scroller-start", l, O, E, rr, 0), ve = Mn("scroller-end", l, O, E, rr, 0, y), mr = y["offset" + E.op.d2];
      var Ai = ce(Mr(O, "content") || O);
      le = this.markerStart = Mn("start", l, Ai, E, rr, mr, 0, b), me = this.markerEnd = Mn("end", l, Ai, E, rr, mr, 0, b), b && (oi = D.quickSetter([le, me], E.a, Mt)), !Q && !(tr.length && Mr(O, "fixedMarkers") === !0) && (vu(Y ? tt : O), D.set([y, ve], {
        force3D: !0
      }), mn = D.quickSetter(y, E.a, Mt), ni = D.quickSetter(ve, E.a, Mt));
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
    }, g.revert = function(M, z) {
      if (!z)
        return g.kill(!0);
      var A = M !== !1 || !g.enabled, I = qt;
      A !== g.isReverted && (A && (He = Math.max(Tt(), g.scroll.rec || 0), Xt = g.progress, Ir = i && i.progress()), le && [le, me, y, ve].forEach(function(Rt) {
        return Rt.style.display = A ? "none" : "block";
      }), A && (qt = g, g.update(A)), f && (!S || !g.isActive) && (A ? Su(f, Dt, ir) : ms(f, Dt, Ne(f), Et)), A || g.update(A), qt = I, g.isReverted = A);
    }, g.refresh = function(M, z, A, I) {
      if (!((qt || !g.enabled) && !z)) {
        if (f && M && Ie) {
          Lt(s, "scrollEnd", Ml);
          return;
        }
        !oe && ot && ot(g), qt = g, jt.tween && !A && (jt.tween.kill(), jt.tween = 0), U && U.pause(), p && i && (i.revert({
          kill: !1
        }).invalidate(), i.getChildren ? i.getChildren(!0, !0, !1).forEach(function(yr) {
          return yr.vars.immediateRender && yr.render(0, !0, !0);
        }) : i.vars.immediateRender && i.render(0, !0, !0)), g.isReverted || g.revert(!0, !0), g._subPinOffset = !1;
        var Rt = Jt(), q = Ye(), wt = b ? b.duration() : je(O, E), $t = pt <= 0.01 || !pt, _t = 0, at = I || 0, it = $r(A) ? A.end : r.end, $e = r.endTrigger || h, ct = $r(A) ? A.start : r.start || (r.start === 0 || !h ? 0 : f ? "0 0" : "0 100%"), ye = g.pinnedContainer = r.pinnedContainer && ce(r.pinnedContainer, g), Ve = h && Math.max(0, X.indexOf(g)) || 0, It = Ve, Yt, Ut, Yr, vn, Vt, Pt, qe, ns, bo, Li, Ge, Ni, yn;
        for (Z && $r(A) && (Ni = D.getProperty(y, E.p), yn = D.getProperty(ve, E.p)); It-- > 0; )
          Pt = X[It], Pt.end || Pt.refresh(0, 1) || (qt = g), qe = Pt.pin, qe && (qe === h || qe === f || qe === ye) && !Pt.isReverted && (Li || (Li = []), Li.unshift(Pt), Pt.revert(!0, !0)), Pt !== X[It] && (Ve--, It--);
        for (Qt(ct) && (ct = ct(g)), ct = Ho(ct, "start", g), J = Jo(ct, h, Rt, E, Tt(), le, y, g, q, rt, Q, wt, b, g._startClamp && "_startClamp") || (f ? -1e-3 : 0), Qt(it) && (it = it(g)), be(it) && !it.indexOf("+=") && (~it.indexOf(" ") ? it = (be(ct) ? ct.split(" ")[0] : "") + it : (_t = zn(it.substr(2), Rt), it = be(ct) ? ct : (b ? D.utils.mapRange(0, b.duration(), b.scrollTrigger.start, b.scrollTrigger.end, J) : J) + _t, $e = h)), it = Ho(it, "end", g), vt = Math.max(J, Jo(it || ($e ? "100% 0" : wt), $e, Rt, E, Tt() + _t, me, ve, g, q, rt, Q, wt, b, g._endClamp && "_endClamp")) || -1e-3, _t = 0, It = Ve; It--; )
          Pt = X[It] || {}, qe = Pt.pin, qe && Pt.start - Pt._pinPush <= J && !b && Pt.end > 0 && (Yt = Pt.end - (g._startClamp ? Math.max(0, Pt.start) : Pt.start), (qe === h && Pt.start - Pt._pinPush < J || qe === ye) && isNaN(ct) && (_t += Yt * (1 - Pt.progress)), qe === f && (at += Yt));
        if (J += _t, vt += _t, g._startClamp && (g._startClamp += _t), g._endClamp && !oe && (g._endClamp = vt || -1e-3, vt = Math.min(vt, je(O, E))), pt = vt - J || (J -= 0.01) && 1e-3, $t && (Xt = D.utils.clamp(0, 1, D.utils.normalize(J, vt, He))), g._pinPush = at, le && _t && (Yt = {}, Yt[E.a] = "+=" + _t, ye && (Yt[E.p] = "-=" + Tt()), D.set([le, me], Yt)), f && !(Ws && g.end >= je(O, E)))
          Yt = Ne(f), vn = E === Ot, Yr = Tt(), De = parseFloat(yt(E.a)) + at, !wt && vt > 1 && (Ge = (Y ? et.scrollingElement || Se : O).style, Ge = {
            style: Ge,
            value: Ge["overflow" + E.a.toUpperCase()]
          }, Y && Ne(tt)["overflow" + E.a.toUpperCase()] !== "scroll" && (Ge.style["overflow" + E.a.toUpperCase()] = "scroll")), ms(f, Dt, Yt), Nr = On(f), Ut = cr(f, !0), ns = Q && Ar(O, vn ? ae : Ot)(), _ ? (Et = [_ + E.os2, pt + at + Mt], Et.t = Dt, It = _ === Ct ? Jn(f, E) + pt + at : 0, It && (Et.push(E.d, It + Mt), Dt.style.flexBasis !== "auto" && (Dt.style.flexBasis = It + Mt)), Si(Et), ye && X.forEach(function(yr) {
            yr.pin === ye && yr.vars.pinSpacing !== !1 && (yr._subPinOffset = !0);
          }), Q && Tt(He)) : (It = Jn(f, E), It && Dt.style.flexBasis !== "auto" && (Dt.style.flexBasis = It + Mt)), Q && (Vt = {
            top: Ut.top + (vn ? Yr - J : ns) + Mt,
            left: Ut.left + (vn ? ns : Yr - J) + Mt,
            boxSizing: "border-box",
            position: "fixed"
          }, Vt[Zr] = Vt["max" + Oi] = Math.ceil(Ut.width) + Mt, Vt[Jr] = Vt["max" + mo] = Math.ceil(Ut.height) + Mt, Vt[Le] = Vt[Le + en] = Vt[Le + ji] = Vt[Le + rn] = Vt[Le + tn] = "0", Vt[Ct] = Yt[Ct], Vt[Ct + en] = Yt[Ct + en], Vt[Ct + ji] = Yt[Ct + ji], Vt[Ct + rn] = Yt[Ct + rn], Vt[Ct + tn] = Yt[Ct + tn], gr = Eu(ir, Vt, S), oe && Tt(0)), i ? (bo = i._initted, ds(1), i.render(i.duration(), !0, !0), nr = yt(E.a) - De + pt + at, sr = Math.abs(pt - nr) > 1, Q && sr && gr.splice(gr.length - 2, 2), i.render(0, !0, !0), bo || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), ds(0)) : nr = pt, Ge && (Ge.value ? Ge.style["overflow" + E.a.toUpperCase()] = Ge.value : Ge.style.removeProperty("overflow-" + E.a));
        else if (h && Tt() && !b)
          for (Ut = h.parentNode; Ut && Ut !== tt; )
            Ut._pinOffset && (J -= Ut._pinOffset, vt -= Ut._pinOffset), Ut = Ut.parentNode;
        Li && Li.forEach(function(yr) {
          return yr.revert(!1, !0);
        }), g.start = J, g.end = vt, te = ee = oe ? He : Tt(), !b && !oe && (te < He && Tt(He), g.scroll.rec = 0), g.revert(!1, !0), zt = Gt(), Xe && (dt = -1, Xe.restart(!0)), qt = 0, i && W && (i._initted || Ir) && i.progress() !== Ir && i.progress(Ir || 0, !0).render(i.time(), !0, !0), ($t || Xt !== g.progress || b || p || i && !i._initted) && (i && !W && (i._initted || Xt || i.vars.immediateRender !== !1) && i.totalProgress(b && J < -1e-3 && !Xt ? D.utils.normalize(J, vt, 0) : Xt, !0), g.progress = $t || (te - J) / pt === Xt ? 0 : Xt), f && _ && (Dt._pinOffset = Math.round(g.progress * nr)), U && U.invalidate(), isNaN(Ni) || (Ni -= D.getProperty(y, E.p), yn -= D.getProperty(ve, E.p), Dn(y, E, Ni), Dn(le, E, Ni - (I || 0)), Dn(ve, E, yn), Dn(me, E, yn - (I || 0))), $t && !oe && g.update(), u && !oe && !_r && (_r = !0, u(g), _r = !1);
      }
    }, g.getVelocity = function() {
      return (Tt() - ee) / (Gt() - Wi) * 1e3 || 0;
    }, g.endAnimation = function() {
      Ii(g.callbackAnimation), i && (U ? U.progress(1) : i.paused() ? W || Ii(i, g.direction < 0, 1) : Ii(i, i.reversed()));
    }, g.labelToScroll = function(M) {
      return i && i.labels && (J || g.refresh() || J) + i.labels[M] / i.duration() * pt || 0;
    }, g.getTrailing = function(M) {
      var z = X.indexOf(g), A = g.direction > 0 ? X.slice(0, z).reverse() : X.slice(z + 1);
      return (be(M) ? A.filter(function(I) {
        return I.vars.preventOverlaps === M;
      }) : A).filter(function(I) {
        return g.direction > 0 ? I.end <= J : I.start >= vt;
      });
    }, g.update = function(M, z, A) {
      if (!(b && !A && !M)) {
        var I = oe === !0 ? He : g.scroll(), Rt = M ? 0 : (I - J) / pt, q = Rt < 0 ? 0 : Rt > 1 ? 1 : Rt || 0, wt = g.progress, $t, _t, at, it, $e, ct, ye, Ve;
        if (z && (ee = te, te = b ? Tt() : I, v && (Fr = vr, vr = i && !W ? i.totalProgress() : q)), m && f && !qt && !Tn && Ie && (!q && J < I + (I - ee) / (Gt() - Wi) * m ? q = 1e-4 : q === 1 && vt > I + (I - ee) / (Gt() - Wi) * m && (q = 0.9999)), q !== wt && g.enabled) {
          if ($t = g.isActive = !!q && q < 1, _t = !!wt && wt < 1, ct = $t !== _t, $e = ct || !!q != !!wt, g.direction = q > wt ? 1 : -1, g.progress = q, $e && !qt && (at = q && !wt ? 0 : q === 1 ? 1 : wt === 1 ? 2 : 3, W && (it = !ct && L[at + 1] !== "none" && L[at + 1] || L[at], Ve = i && (it === "complete" || it === "reset" || it in i))), C && (ct || Ve) && (Ve || d || !i) && (Qt(C) ? C(g) : g.getTrailing(C).forEach(function(Yr) {
            return Yr.endAnimation();
          })), W || (U && !qt && !Tn ? (U._dp._time - U._start !== U._time && U.render(U._dp._time - U._start), U.resetTo ? U.resetTo("totalProgress", q, i._tTime / i._tDur) : (U.vars.totalProgress = q, U.invalidate().restart())) : i && i.totalProgress(q, !!(qt && (zt || M)))), f) {
            if (M && _ && (Dt.style[_ + E.os2] = Ri), !Q)
              Be(Hi(De + nr * q));
            else if ($e) {
              if (ye = !M && q > wt && vt + 1 > I && I + 1 >= je(O, E), S)
                if (!M && ($t || ye)) {
                  var It = cr(f, !0), Yt = I - J;
                  jo(f, tt, It.top + (E === Ot ? Yt : 0) + Mt, It.left + (E === Ot ? 0 : Yt) + Mt);
                } else
                  jo(f, Dt);
              Si($t || ye ? gr : Nr), sr && q < 1 && $t || Be(De + (q === 1 && !ye ? nr : 0));
            }
          }
          v && !jt.tween && !qt && !Tn && Xe.restart(!0), a && (ct || T && q && (q < 1 || !ps)) && dn(a.targets).forEach(function(Yr) {
            return Yr.classList[$t || T ? "add" : "remove"](a.className);
          }), o && !W && !M && o(g), $e && !qt ? (W && (Ve && (it === "complete" ? i.pause().totalProgress(1) : it === "reset" ? i.restart(!0).pause() : it === "restart" ? i.restart(!0) : i[it]()), o && o(g)), (ct || !ps) && (c && ct && li(g, c), V[at] && li(g, V[at]), T && (q === 1 ? g.kill(!1, 1) : V[at] = 0), ct || (at = q === 1 ? 1 : 3, V[at] && li(g, V[at]))), P && !$t && Math.abs(g.getVelocity()) > ($i(P) ? P : 2500) && (Ii(g.callbackAnimation), U ? U.progress(1) : Ii(i, it === "reverse" ? 1 : !q, 1))) : W && o && !qt && o(g);
        }
        if (ni) {
          var Ut = b ? I / b.duration() * (b._caScrollDist || 0) : I;
          mn(Ut + (y._isFlipped ? 1 : 0)), ni(Ut);
        }
        oi && oi(-I / b.duration() * (b._caScrollDist || 0));
      }
    }, g.enable = function(M, z) {
      g.enabled || (g.enabled = !0, Lt(O, "resize", Ui), Y || Lt(O, "scroll", ui), ot && Lt(s, "refreshInit", ot), M !== !1 && (g.progress = Xt = 0, te = ee = dt = Tt()), z !== !1 && g.refresh());
    }, g.getTween = function(M) {
      return M && jt ? jt.tween : U;
    }, g.setPositions = function(M, z, A, I) {
      if (b) {
        var Rt = b.scrollTrigger, q = b.duration(), wt = Rt.end - Rt.start;
        M = Rt.start + wt * M / q, z = Rt.start + wt * z / q;
      }
      g.refresh(!1, !1, {
        start: $o(M, A && !!g._startClamp),
        end: $o(z, A && !!g._endClamp)
      }, I), g.update();
    }, g.adjustPinSpacing = function(M) {
      if (Et && M) {
        var z = Et.indexOf(E.d) + 1;
        Et[z] = parseFloat(Et[z]) + M + Mt, Et[1] = parseFloat(Et[1]) + M + Mt, Si(Et);
      }
    }, g.disable = function(M, z) {
      if (M !== !1 && g.revert(!0, !0), g.enabled && (g.enabled = g.isActive = !1, z || U && U.pause(), He = 0, Ht && (Ht.uncache = 1), ot && At(s, "refreshInit", ot), Xe && (Xe.pause(), jt.tween && jt.tween.kill() && (jt.tween = 0)), !Y)) {
        for (var A = X.length; A--; )
          if (X[A].scroller === O && X[A] !== g)
            return;
        At(O, "resize", Ui), Y || At(O, "scroll", ui);
      }
    }, g.kill = function(M, z) {
      g.disable(M, z), U && !z && U.kill(), l && delete Xs[l];
      var A = X.indexOf(g);
      A >= 0 && X.splice(A, 1), A === se && Yn > 0 && se--, A = 0, X.forEach(function(I) {
        return I.scroller === g.scroller && (A = 1);
      }), A || oe || (g.scroll.rec = 0), i && (i.scrollTrigger = null, M && i.revert({
        kill: !1
      }), z || i.kill()), le && [le, me, y, ve].forEach(function(I) {
        return I.parentNode && I.parentNode.removeChild(I);
      }), nn === g && (nn = 0), f && (Ht && (Ht.uncache = 1), A = 0, X.forEach(function(I) {
        return I.pin === f && A++;
      }), A || (Ht.spacer = 0)), r.onKill && r.onKill(g);
    }, X.push(g), g.enable(!1, !1), or && or(g), i && i.add && !pt) {
      var j = g.update;
      g.update = function() {
        g.update = j, $.cache++, J || vt || g.refresh();
      }, D.delayedCall(0.01, g.update), pt = 0.01, J = vt = 0;
    } else
      g.refresh();
    f && xu();
  }, s.register = function(r) {
    return hi || (D = r || Sl(), xl() && window.document && s.enable(), hi = Xi), hi;
  }, s.defaults = function(r) {
    if (r)
      for (var i in r)
        Pn[i] = r[i];
    return Pn;
  }, s.disable = function(r, i) {
    Xi = 0, X.forEach(function(o) {
      return o[i ? "kill" : "disable"](r);
    }), At(H, "wheel", ui), At(et, "scroll", ui), clearInterval(Sn), At(et, "touchcancel", Qe), At(tt, "touchstart", Qe), Cn(At, et, "pointerdown,touchstart,mousedown", Uo), Cn(At, et, "pointerup,touchend,mouseup", Vo), Zn.kill(), En(At);
    for (var n = 0; n < $.length; n += 3)
      kn(At, $[n], $[n + 1]), kn(At, $[n], $[n + 2]);
  }, s.enable = function() {
    if (H = window, et = document, Se = et.documentElement, tt = et.body, D) {
      if (dn = D.utils.toArray, Zi = D.utils.clamp, Bs = D.core.context || Qe, ds = D.core.suppressOverwrites || Qe, ho = H.history.scrollRestoration || "auto", Hs = H.pageYOffset || 0, D.core.globals("ScrollTrigger", s), tt) {
        Xi = 1, xi = document.createElement("div"), xi.style.height = "100vh", xi.style.position = "absolute", Al(), _u(), xt.register(D), s.isTouch = xt.isTouch, br = xt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Ys = xt.isTouch === 1, Lt(H, "wheel", ui), fo = [H, et, Se, tt], D.matchMedia ? (s.matchMedia = function(u) {
          var d = D.matchMedia(), h;
          for (h in u)
            d.add(h, u[h]);
          return d;
        }, D.addEventListener("matchMediaInit", function() {
          Dl(), yo();
        }), D.addEventListener("matchMediaRevert", function() {
          return Ol();
        }), D.addEventListener("matchMedia", function() {
          Vr(0, 1), ri("matchMedia");
        }), D.matchMedia().add("(orientation: portrait)", function() {
          return gs(), gs;
        })) : console.warn("Requires GSAP 3.11.0 or later"), gs(), Lt(et, "scroll", ui);
        var r = tt.hasAttribute("style"), i = tt.style, n = i.borderTopStyle, o = D.core.Animation.prototype, a, l;
        for (o.revert || Object.defineProperty(o, "revert", {
          value: function() {
            return this.time(-0.01, !0);
          }
        }), i.borderTopStyle = "solid", a = cr(tt), Ot.m = Math.round(a.top + Ot.sc()) || 0, ae.m = Math.round(a.left + ae.sc()) || 0, n ? i.borderTopStyle = n : i.removeProperty("border-top-style"), r || (tt.setAttribute("style", ""), tt.removeAttribute("style")), Sn = setInterval(Ko, 250), D.delayedCall(0.5, function() {
          return Tn = 0;
        }), Lt(et, "touchcancel", Qe), Lt(tt, "touchstart", Qe), Cn(Lt, et, "pointerdown,touchstart,mousedown", Uo), Cn(Lt, et, "pointerup,touchend,mouseup", Vo), Is = D.utils.checkPrefix("transform"), Bn.push(Is), hi = Gt(), Zn = D.delayedCall(0.2, Vr).pause(), di = [et, "visibilitychange", function() {
          var u = H.innerWidth, d = H.innerHeight;
          et.hidden ? (Wo = u, Xo = d) : (Wo !== u || Xo !== d) && Ui();
        }, et, "DOMContentLoaded", Vr, H, "load", Vr, H, "resize", Ui], En(Lt), X.forEach(function(u) {
          return u.enable(0, 1);
        }), l = 0; l < $.length; l += 3)
          kn(At, $[l], $[l + 1]), kn(At, $[l], $[l + 2]);
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
    i && clearInterval(Sn) || (Sn = i) && setInterval(Ko, i), "ignoreMobileResize" in r && (Ys = s.isTouch === 1 && r.ignoreMobileResize), "autoRefreshEvents" in r && (En(At) || En(Lt, r.autoRefreshEvents || "none"), yl = (r.autoRefreshEvents + "").indexOf("resize") === -1);
  }, s.scrollerProxy = function(r, i) {
    var n = ce(r), o = $.indexOf(n), a = ti(n);
    ~o && $.splice(o, a ? 6 : 2), i && (a ? tr.unshift(H, i, tt, i, Se, i) : tr.unshift(n, i));
  }, s.clearMatchMedia = function(r) {
    X.forEach(function(i) {
      return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
    });
  }, s.isInViewport = function(r, i, n) {
    var o = (be(r) ? ce(r) : r).getBoundingClientRect(), a = o[n ? Zr : Jr] * i || 0;
    return n ? o.right - a > 0 && o.left + a < H.innerWidth : o.bottom - a > 0 && o.top + a < H.innerHeight;
  }, s.positionInViewport = function(r, i, n) {
    be(r) && (r = ce(r));
    var o = r.getBoundingClientRect(), a = o[n ? Zr : Jr], l = i == null ? a / 2 : i in jn ? jn[i] * a : ~i.indexOf("%") ? parseFloat(i) * a / 100 : parseFloat(i) || 0;
    return n ? (o.left + l) / H.innerWidth : (o.top + l) / H.innerHeight;
  }, s.killAll = function(r) {
    if (X.slice(0).forEach(function(n) {
      return n.vars.id !== "ScrollSmoother" && n.kill();
    }), r !== !0) {
      var i = ei.killAll || [];
      ei = {}, i.forEach(function(n) {
        return n();
      });
    }
  }, s;
}();
F.version = "3.15.0";
F.saveStyles = function(s) {
  return s ? dn(s).forEach(function(t) {
    if (t && t.style) {
      var e = we.indexOf(t);
      e >= 0 && we.splice(e, 5), we.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), D.core.getCache(t), Bs());
    }
  }) : we;
};
F.revert = function(s, t) {
  return yo(!s, t);
};
F.create = function(s, t) {
  return new F(s, t);
};
F.refresh = function(s) {
  return s ? Ui(!0) : (hi || F.register()) && Vr(!0);
};
F.update = function(s) {
  return ++$.cache && fr(s === !0 ? 2 : 0);
};
F.clearScrollMemory = Rl;
F.maxScroll = function(s, t) {
  return je(s, t ? ae : Ot);
};
F.getScrollFunc = function(s, t) {
  return Ar(ce(s), t ? ae : Ot);
};
F.getById = function(s) {
  return Xs[s];
};
F.getAll = function() {
  return X.filter(function(s) {
    return s.vars.id !== "ScrollSmoother";
  });
};
F.isScrolling = function() {
  return !!Ie;
};
F.snapDirectional = vo;
F.addEventListener = function(s, t) {
  var e = ei[s] || (ei[s] = []);
  ~e.indexOf(t) || e.push(t);
};
F.removeEventListener = function(s, t) {
  var e = ei[s], r = e && e.indexOf(t);
  r >= 0 && e.splice(r, 1);
};
F.batch = function(s, t) {
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
  return Qt(n) && (n = n(), Lt(F, "refresh", function() {
    return n = t.batchMax();
  })), dn(s).forEach(function(l) {
    var c = {};
    for (a in r)
      c[a] = r[a];
    c.trigger = l, e.push(F.create(c));
  }), e;
};
var ea = function(t, e, r, i) {
  return e > i ? t(i) : e < 0 && t(0), r > i ? (i - e) / (r - e) : r < 0 ? e / (e - r) : 1;
}, vs = function s(t, e) {
  e === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = e === !0 ? "auto" : e ? "pan-" + e + (xt.isTouch ? " pinch-zoom" : "") : "none", t === Se && s(tt, e);
}, Rn = {
  auto: 1,
  scroll: 1
}, ku = function(t) {
  var e = t.event, r = t.target, i = t.axis, n = (e.changedTouches ? e.changedTouches[0] : e).target, o = n._gsap || D.core.getCache(n), a = Gt(), l;
  if (!o._isScrollT || a - o._isScrollT > 2e3) {
    for (; n && n !== tt && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(Rn[(l = Ne(n)).overflowY] || Rn[l.overflowX])); )
      n = n.parentNode;
    o._isScroll = n && n !== r && !ti(n) && (Rn[(l = Ne(n)).overflowY] || Rn[l.overflowX]), o._isScrollT = a;
  }
  (o._isScroll || i === "x") && (e.stopPropagation(), e._gsapAllow = !0);
}, Nl = function(t, e, r, i) {
  return xt.create({
    target: t,
    capture: !0,
    debounce: !1,
    lockAxis: !0,
    type: e,
    onWheel: i = i && ku,
    onPress: i,
    onDrag: i,
    onScroll: i,
    onEnable: function() {
      return r && Lt(et, xt.eventTypes[0], ia, !1, !0);
    },
    onDisable: function() {
      return At(et, xt.eventTypes[0], ia, !0);
    }
  });
}, Pu = /(input|label|select|textarea)/i, ra, ia = function(t) {
  var e = Pu.test(t.target.tagName);
  (e || ra) && (t._gsapAllow = !0, ra = e);
}, Mu = function(t) {
  $r(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
  var e = t, r = e.normalizeScrollX, i = e.momentum, n = e.allowNestedScroll, o = e.onRelease, a, l, c = ce(t.target) || Se, u = D.core.globals().ScrollSmoother, d = u && u.get(), h = br && (t.content && ce(t.content) || d && t.content !== !1 && !d.smooth() && d.content()), f = Ar(c, Ot), _ = Ar(c, ae), p = 1, m = (xt.isTouch && H.visualViewport ? H.visualViewport.scale * H.visualViewport.width : H.outerWidth) / H.innerWidth, x = 0, w = Qt(i) ? function() {
    return i(a);
  } : function() {
    return i || 2.8;
  }, T, v, S = Nl(c, t.type, !0, n), k = function() {
    return v = !1;
  }, b = Qe, P = Qe, C = function() {
    l = je(c, Ot), P = Zi(br ? 1 : 0, l), r && (b = Zi(0, je(c, ae))), T = jr;
  }, E = function() {
    h._gsap.y = Hi(parseFloat(h._gsap.y) + f.offset) + "px", h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0;
  }, W = function() {
    if (v) {
      requestAnimationFrame(k);
      var Z = Hi(a.deltaY / 2), rt = P(f.v - Z);
      if (h && rt !== f.v + f.offset) {
        f.offset = rt - f.v;
        var g = Hi((parseFloat(h && h._gsap.y) || 0) - f.offset);
        h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + g + ", 0, 1)", h._gsap.y = g + "px", f.cacheID = $.cache, fr();
      }
      return !0;
    }
    f.offset && E(), v = !0;
  }, O, K, Y, Q, V = function() {
    C(), O.isActive() && O.vars.scrollY > l && (f() > l ? O.progress(1) && f(l) : O.resetTo("scrollY", l));
  };
  return h && D.set(h, {
    y: "+=0"
  }), t.ignoreCheck = function(L) {
    return br && L.type === "touchmove" && W() || p > 1.05 && L.type !== "touchstart" || a.isGesturing || L.touches && L.touches.length > 1;
  }, t.onPress = function() {
    v = !1;
    var L = p;
    p = Hi((H.visualViewport && H.visualViewport.scale || 1) / m), O.pause(), L !== p && vs(c, p > 1.01 ? !0 : r ? !1 : "x"), K = _(), Y = f(), C(), T = jr;
  }, t.onRelease = t.onGestureStart = function(L, Z) {
    if (f.offset && E(), !Z)
      Q.restart(!0);
    else {
      $.cache++;
      var rt = w(), g, ot;
      r && (g = _(), ot = g + rt * 0.05 * -L.velocityX / 0.227, rt *= ea(_, g, ot, je(c, ae)), O.vars.scrollX = b(ot)), g = f(), ot = g + rt * 0.05 * -L.velocityY / 0.227, rt *= ea(f, g, ot, je(c, Ot)), O.vars.scrollY = P(ot), O.invalidate().duration(rt).play(0.01), (br && O.vars.scrollY >= l || g >= l - 1) && D.to({}, {
        onUpdate: V,
        duration: rt
      });
    }
    o && o(L);
  }, t.onWheel = function() {
    O._ts && O.pause(), Gt() - x > 1e3 && (T = 0, x = Gt());
  }, t.onChange = function(L, Z, rt, g, ot) {
    if (jr !== T && C(), Z && r && _(b(g[2] === Z ? K + (L.startX - L.x) : _() + Z - g[1])), rt) {
      f.offset && E();
      var Jt = ot[2] === rt, Ye = Jt ? Y + L.startY - L.y : f() + rt - ot[1], dt = P(Ye);
      Jt && Ye !== dt && (Y += dt - Ye), f(dt);
    }
    (rt || Z) && fr();
  }, t.onEnable = function() {
    vs(c, r ? !1 : "x"), F.addEventListener("refresh", V), Lt(H, "resize", V), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = _.smooth = !1), S.enable();
  }, t.onDisable = function() {
    vs(c, !0), At(H, "resize", V), F.removeEventListener("refresh", V), S.kill();
  }, t.lockAxis = t.lockAxis !== !1, a = new xt(t), a.iOS = br, br && !f() && f(1), br && D.ticker.add(Qe), Q = a._dc, O = D.to(a, {
    ease: "power4",
    paused: !0,
    inherit: !1,
    scrollX: r ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: Ll(f, f(), function() {
        return O.pause();
      })
    },
    onUpdate: fr,
    onComplete: Q.vars.onComplete
  }), a;
};
F.sort = function(s) {
  if (Qt(s))
    return X.sort(s);
  var t = H.pageYOffset || 0;
  return F.getAll().forEach(function(e) {
    return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + H.innerHeight;
  }), X.sort(s || function(e, r) {
    return (e.vars.refreshPriority || 0) * -1e6 + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((r.vars.containerAnimation ? 1e6 : r._sortY) + (r.vars.refreshPriority || 0) * -1e6);
  });
};
F.observe = function(s) {
  return new xt(s);
};
F.normalizeScroll = function(s) {
  if (typeof s > "u")
    return ne;
  if (s === !0 && ne)
    return ne.enable();
  if (s === !1) {
    ne && ne.kill(), ne = s;
    return;
  }
  var t = s instanceof xt ? s : Mu(s);
  return ne && ne.target === t.target && ne.kill(), ti(t.target) && (ne = t), t;
};
F.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: zs,
  _inputObserver: Nl,
  _scrollers: $,
  _proxies: tr,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function() {
      Ie || ri("scrollStart"), Ie = Gt();
    },
    // a way to get the _refreshing value in Observer
    ref: function() {
      return qt;
    }
  }
};
Sl() && D.registerPlugin(F);
var na = "1.3.26";
function Fl(s, t, e) {
  return Math.max(s, Math.min(t, e));
}
function Ou(s, t, e) {
  return (1 - e) * s + e * t;
}
function Du(s, t, e, r) {
  return Ou(s, t, 1 - Math.exp(-e * r));
}
function Ru(s, t) {
  return (s % t + t) % t;
}
var Au = class {
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
      const e = Fl(0, this.currentTime / this.duration, 1);
      t = e >= 1;
      const r = t ? 1 : this.easing(e);
      this.value = this.from + (this.to - this.from) * r;
    } else this.lerp ? (this.value = Du(this.value, this.to, this.lerp * 60, s), Math.round(this.value) === Math.round(this.to) && (this.value = this.to, t = !0)) : (this.value = this.to, t = !0);
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
function Lu(s, t) {
  let e;
  return function(...r) {
    clearTimeout(e), e = setTimeout(() => {
      e = void 0, s.apply(this, r);
    }, t);
  };
}
var Nu = class {
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
    this.wrapper = s, this.content = t, e && (this.debouncedResize = Lu(this.resize, r), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
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
}, zl = class {
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
const Fu = 100 / 6, wr = { passive: !1 };
function sa(s, t) {
  return s === 1 ? Fu : s === 2 ? t : 1;
}
var zu = class {
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
    R(this, "emitter", new zl());
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
      const i = sa(r, this.window.width), n = sa(r, this.window.height);
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
    this.element = s, this.options = t, window.addEventListener("resize", this.onWindowResize), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, wr), this.element.addEventListener("touchstart", this.onTouchStart, wr), this.element.addEventListener("touchmove", this.onTouchMove, wr), this.element.addEventListener("touchend", this.onTouchEnd, wr);
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
    this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize), this.element.removeEventListener("wheel", this.onWheel, wr), this.element.removeEventListener("touchstart", this.onTouchStart, wr), this.element.removeEventListener("touchmove", this.onTouchMove, wr), this.element.removeEventListener("touchend", this.onTouchEnd, wr);
  }
};
const oa = (s) => Math.min(1, 1.001 - 2 ** (-10 * s));
var Iu = class {
  constructor({ wrapper: s = window, content: t = document.documentElement, eventsTarget: e = s, smoothWheel: r = !0, syncTouch: i = !1, syncTouchLerp: n = 0.075, touchInertiaExponent: o = 1.7, duration: a, easing: l, lerp: c = 0.1, infinite: u = !1, orientation: d = "vertical", gestureOrientation: h = d === "horizontal" ? "both" : "vertical", touchMultiplier: f = 1, wheelMultiplier: _ = 1, autoResize: p = !0, prevent: m, virtualScroll: x, overscroll: w = !0, autoRaf: T = !1, anchors: v = !1, autoToggle: S = !1, allowNestedScroll: k = !1, __experimental__naiveDimensions: b = !1, naiveDimensions: P = b, stopInertiaOnNavigate: C = !1, respectReducedMotion: E = !0 } = {}) {
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
    R(this, "animate", new Au());
    R(this, "emitter", new zl());
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
    window.lenisVersion = na, window.lenis || (window.lenis = {}), window.lenis.version = na, d === "horizontal" && (window.lenis.horizontal = !0), i === !0 && (window.lenis.touch = !0), this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent), (!s || s === document.documentElement) && (s = window), typeof a == "number" && typeof l != "function" ? l = oa : typeof l == "function" && typeof a != "number" && (a = 1), this.options = {
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
      overscroll: w,
      autoRaf: T,
      anchors: v,
      autoToggle: S,
      allowNestedScroll: k,
      naiveDimensions: P,
      stopInertiaOnNavigate: C,
      respectReducedMotion: E
    }, this.dimensions = new Nu(s, t, { autoResize: p }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, { capture: !0 }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener("click", this.onClick), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown), this.virtualScroll = new zu(e, {
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
        const p = _.getBoundingClientRect(), m = getComputedStyle(_), x = this.isHorizontal ? Number.parseFloat(m.scrollMarginLeft) : Number.parseFloat(m.scrollMarginTop), w = getComputedStyle(this.rootElement), T = this.isHorizontal ? Number.parseFloat(w.scrollPaddingLeft) : Number.parseFloat(w.scrollPaddingTop);
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
      } else h = Fl(0, h, this.limit);
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
      i || (this.targetScroll = h), typeof o == "number" && typeof a != "function" ? a = oa : typeof a == "function" && typeof o != "number" && (o = 1), this.animate.fromTo(this.animatedScroll, h, {
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
    let m, x, w, T, v, S;
    if (p === "horizontal")
      m = Math.round(s.scrollLeft), x = d - f, w = t, T = n, v = a, S = c;
    else if (p === "vertical")
      m = Math.round(s.scrollTop), x = h - _, w = e, T = o, v = l, S = u;
    else return !1;
    return !S && (m >= x || m <= 0) ? !0 : (w > 0 ? m < x : m > 0) && T && v;
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
    return this.options.infinite ? Ru(this.animatedScroll, this.limit) : this.animatedScroll;
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
const St = (s, t = document) => t.querySelector(s), gn = (s, t = document) => [...t.querySelectorAll(s)], aa = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function Yu(s) {
  const t = St("[data-facetas-panel]", s), e = St("[data-facetas-abrir]", s);
  if (!t || !e) return;
  let r = null;
  const i = () => {
    r = document.activeElement, t.classList.add("is-on"), e.setAttribute("aria-expanded", "true"), document.documentElement.style.overflow = "hidden", window.DropScentsLenis?.stop(), Il(s), St(".faceta > summary", t)?.focus();
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
function Bu(s, t) {
  gn("[data-precio]", s).forEach((e) => {
    const r = St('[data-precio-rango="min"]', e), i = St('[data-precio-rango="max"]', e), n = St('[data-precio-campo="min"]', e), o = St('[data-precio-campo="max"]', e), a = Number(e.dataset.tope) || 0;
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
let ys = 0;
async function Xn(s, t, e) {
  const r = ++ys, i = St("[data-facetas-resultados]", e);
  if (!i) {
    window.location.href = s;
    return;
  }
  i.classList.add("facetas-cargando");
  try {
    const [n, o] = s.split("#"), a = n.includes("?") ? "&" : "?", l = await fetch(`${n}${a}section_id=${encodeURIComponent(t)}`);
    if (!l.ok) throw new Error(l.status);
    const c = await l.text();
    if (r !== ys) return;
    const u = new DOMParser().parseFromString(c, "text/html").querySelector("[data-facetas-resultados]");
    if (!u) throw new Error("la respuesta no trae resultados");
    const d = Wu(e);
    i.innerHTML = u.innerHTML, history.pushState({ facetas: !0 }, "", s), Yl(e), Xu(e, d), d.abierto && Il(e);
    const h = St("[data-facetas-rejilla]", e) || i, f = window.scrollY + h.getBoundingClientRect().top - 140;
    f < window.scrollY && (window.DropScentsLenis ? window.DropScentsLenis.scrollTo(f, { duration: aa ? 0 : 0.8 }) : window.scrollTo({ top: f, behavior: aa ? "auto" : "smooth" })), o && (location.hash = o);
  } catch {
    window.location.href = s;
  } finally {
    r === ys && i.classList.remove("facetas-cargando");
  }
}
function Wu(s) {
  const t = St("[data-facetas-panel]", s), e = St(".panel-filtros__cuerpo", s), r = document.activeElement;
  return {
    abierto: !!t?.classList.contains("is-on"),
    desplegadas: gn(".faceta", s).map((i) => i.open),
    scroll: e ? e.scrollTop : 0,
    /* El foco se devuelve por nombre+valor, no por referencia: el elemento
       que tenia el foco ya no existe despues del reemplazo. */
    foco: r && s.contains(r) && r.name ? { name: r.name, value: r.value } : null
  };
}
function Xu(s, t) {
  if (!t) return;
  const e = St("[data-facetas-panel]", s);
  t.abierto && e && (e.classList.add("is-on"), St("[data-facetas-abrir]", s)?.setAttribute("aria-expanded", "true")), gn(".faceta", s).forEach((i, n) => {
    t.desplegadas[n] !== void 0 && (i.open = t.desplegadas[n]);
  });
  const r = St(".panel-filtros__cuerpo", s);
  r && (r.scrollTop = t.scroll), t.foco && (s.querySelector(
    `[name="${CSS.escape(t.foco.name)}"][value="${CSS.escape(t.foco.value)}"]`
  ) || s.querySelector(`[name="${CSS.escape(t.foco.name)}"]`))?.focus({ preventScroll: !0 });
}
function Il(s) {
  const t = St("[data-facetas-cuenta]", s)?.textContent.trim(), e = St('[data-facetas-form] button[type="submit"]', s);
  t && e && (e.textContent = t);
}
function ws(s) {
  const t = new FormData(s), e = new URLSearchParams();
  for (const [n, o] of t.entries())
    String(o).trim() !== "" && e.append(n, o);
  const r = s.getAttribute("action") || window.location.pathname, i = e.toString();
  return i ? `${r}?${i}` : r;
}
function Yl(s) {
  const t = St("[data-facetas]", s), e = s.dataset.seccionId || t?.dataset.seccion;
  if (!e) return;
  const r = Yu(s), i = St("[data-facetas-form]", s), n = () => {
    i && Xn(ws(i), e, s);
  };
  i && (i.addEventListener("change", (a) => {
    a.target.matches('input[type="checkbox"], input[type="number"]') && n();
  }), i.addEventListener("submit", (a) => {
    a.preventDefault(), n(), window.innerWidth < 900 && r?.();
  }), Bu(i, n));
  const o = St("[data-facetas-orden]", s);
  o && (o.addEventListener("change", (a) => {
    a.preventDefault(), Xn(ws(o), e, s);
  }), o.addEventListener("submit", (a) => {
    a.preventDefault(), Xn(ws(o), e, s);
  })), s.addEventListener("click", Hu);
}
function Hu(s) {
  const t = s.target.closest("[data-facetas-enlace]");
  if (!t || s.metaKey || s.ctrlKey || s.shiftKey || t.target === "_blank") return;
  const e = t.closest("[data-seccion-id]");
  e && (s.preventDefault(), Xn(t.href, e.dataset.seccionId, e));
}
function $u(s = document) {
  gn("[data-seccion-id]", s).forEach((t) => {
    St("[data-facetas-resultados]", t) && Yl(t);
  }), window.__facetasPop || (window.__facetasPop = !0, window.addEventListener("popstate", (t) => {
    (t.state?.facetas || St("[data-facetas-resultados]")) && window.location.reload();
  }));
}
const wo = window.matchMedia("(prefers-reduced-motion: reduce)").matches, _e = (s, t = document) => t.querySelector(s), Nt = (s, t = document) => [...t.querySelectorAll(s)], Uu = '[data-chatty-widget="trigger"], #Avada-FAQ_WidgetTrigger', Vu = ".Avada-Faqs_Button.opened, .Avada-Faqs_Button--opened";
function la() {
  if (_e(Vu)) return !0;
  const s = _e(Uu);
  return s ? (s.click(), !0) : typeof window.ChattyJS?.openWidget == "function" ? (window.ChattyJS.openWidget(), !0) : typeof window.avadaFaqTrigger == "function" ? (window.avadaFaqTrigger(), !0) : !1;
}
function ca() {
  return typeof window.DropScentsChat == "function" ? (window.DropScentsChat(), !0) : window.$crisp ? (window.$crisp.push(["do", "chat:open"]), !0) : window.Tawk_API?.maximize ? (window.Tawk_API.maximize(), !0) : window.tidioChatApi?.open ? (window.tidioChatApi.open(), !0) : window.Intercom ? (window.Intercom("show"), !0) : window.zE ? (window.zE("messenger", "open"), !0) : window.Shopify?.chat?.open ? (window.Shopify.chat.open(), !0) : !1;
}
function qu() {
  if (typeof window.DropScentsChat == "function") {
    window.DropScentsChat();
    return;
  }
  if (la() || ca()) return;
  let s = 0;
  const t = setInterval(() => {
    s += 1, (la() || ca() || s > 24) && (clearInterval(t), s > 24 && Gu());
  }, 250);
}
let ua = 0;
function Gu() {
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
  requestAnimationFrame(() => t.classList.add("is-on")), clearTimeout(ua), ua = setTimeout(() => t.classList.remove("is-on"), 6e3);
}
function Ku() {
  document.addEventListener("click", (s) => {
    s.target.closest("[data-chat]") && (s.preventDefault(), _e("#menu-lateral:not([hidden]) [data-drawer-cerrar]")?.click(), qu());
  });
}
function Qu(s = document) {
  Nt("[data-galeria]", s).forEach((t) => {
    const e = Nt(".card__slide", t), r = Nt(".card__punto", t);
    if (e.length < 2) return;
    let i = 0;
    const n = (o) => {
      i = (o + e.length) % e.length, e.forEach((a, l) => a.classList.toggle("is-on", l === i)), r.forEach((a, l) => a.classList.toggle("is-on", l === i));
    };
    Nt("[data-galeria-paso]", t).forEach((o) => {
      o.addEventListener("click", (a) => {
        a.preventDefault(), a.stopPropagation(), n(i + Number(o.dataset.galeriaPaso));
      });
    });
  });
}
function Zu() {
  const s = _e("#menu-lateral");
  if (!s) return;
  const t = _e(".drawer__panel", s), e = _e("[data-drawer-abrir]");
  let r = null;
  const i = () => Nt('a[href], button:not([disabled]), select, input, [tabindex]:not([tabindex="-1"])', t).filter((a) => a.offsetParent !== null);
  function n() {
    r = document.activeElement, s.hidden = !1, requestAnimationFrame(() => s.classList.add("is-on")), e?.setAttribute("aria-expanded", "true"), document.documentElement.style.overflow = "hidden", window.DropScentsLenis?.stop(), i()[0]?.focus();
  }
  function o() {
    s.classList.remove("is-on"), e?.setAttribute("aria-expanded", "false"), document.documentElement.style.overflow = "", window.DropScentsLenis?.start();
    const a = () => {
      s.hidden = !0;
    };
    wo ? a() : setTimeout(a, 420), r?.focus();
  }
  e?.addEventListener("click", n), Nt("[data-drawer-cerrar]", s).forEach((a) => a.addEventListener("click", o)), Nt("a", t).forEach((a) => a.addEventListener("click", o)), document.addEventListener("keydown", (a) => {
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
function Ju(s = document) {
  Nt("[data-carrusel]", s).forEach((t) => {
    const e = _e("[data-carrusel-pista]", t);
    if (!e) return;
    const r = Nt("[data-carrusel-paso]", t), i = _e("[data-carrusel-progreso]", t), n = () => {
      const a = e.firstElementChild;
      if (!a) return e.clientWidth;
      const l = parseFloat(getComputedStyle(e).columnGap) || 0;
      return a.getBoundingClientRect().width + l;
    };
    r.forEach((a) => {
      a.addEventListener("click", () => {
        e.scrollBy({
          left: n() * Number(a.dataset.carruselPaso),
          behavior: wo ? "auto" : "smooth"
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
function ju(s = document) {
  wo || window.matchMedia("(hover: hover) and (pointer: fine)").matches && Nt("[data-indice]", s).forEach((t) => {
    const e = _e("[data-indice-vista]", t), r = Nt("[data-indice-fila]", t);
    if (!e || !r.length) return;
    const i = Nt(".indice__vista-img", e), n = e.parentElement, o = gt.quickTo(e, "x", { duration: 0.5, ease: "power3.out" }), a = gt.quickTo(e, "y", { duration: 0.5, ease: "power3.out" }), l = (c) => {
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
function tf(s = document) {
  const t = _e("[data-pdp]", s);
  if (!t) return;
  const e = Nt(".pdp__img", t), r = Nt("[data-pdp-mini]", t), i = _e("[data-pdp-precio]", t), n = _e("[data-pdp-antes]", t), o = window.DropScentsTextos?.formatoDinero || "";
  function a(l) {
    l < 0 || l >= e.length || (e.forEach((c, u) => c.classList.toggle("is-on", u === l)), r.forEach((c, u) => c.classList.toggle("is-on", u === l)));
  }
  r.forEach((l) => l.addEventListener("click", () => a(Number(l.dataset.pdpMini)))), Nt(".pres input", t).forEach((l) => {
    l.addEventListener("change", () => {
      if (i && l.dataset.precio && (i.textContent = fa(Number(l.dataset.precio), o)), n) {
        const u = Number(l.dataset.antes || 0), d = Number(l.dataset.precio || 0);
        u > d ? (n.textContent = fa(u, o), n.hidden = !1) : n.hidden = !0;
      }
      const c = Number(l.dataset.imagen);
      !Number.isNaN(c) && c >= 0 && a(c);
    });
  });
}
function fa(s, t) {
  const e = Number(s) / 100, r = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), i = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
  return t ? t.replace(/\{\{\s*(\w+)\s*\}\}/g, (n, o) => o.includes("no_decimals") ? i.format(Math.round(e)) : r.format(e)) : `$${r.format(e)}`;
}
function ef(s = document) {
  Nt(".cantidad", s).forEach((t) => {
    const e = _e(".cantidad__i", t);
    e && Nt("[data-cantidad]", t).forEach((r) => {
      r.addEventListener("click", () => {
        const i = Number(e.min || 0), n = Math.max(i, (Number(e.value) || 0) + Number(r.dataset.cantidad));
        e.value = String(n), e.dispatchEvent(new Event("change", { bubbles: !0 }));
      });
    });
  });
}
function rf(s = document) {
  Nt("[data-envia-al-cambiar]", s).forEach((t) => {
    t.closest("[data-facetas-orden]") || t.addEventListener("change", () => t.form?.submit());
  });
}
function Bl(s = document) {
  $u(s), Qu(s), Ju(s), ju(s), tf(s), ef(s), rf(s);
}
gt.registerPlugin(F);
const Ti = window.matchMedia("(prefers-reduced-motion: reduce)").matches, Ae = (s, t = document) => t.querySelector(s), Di = (s, t = document) => [...t.querySelectorAll(s)], ha = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }), nf = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
function da(s, t) {
  const e = Number(s) / 100;
  return t ? t.replace(/\{\{\s*(\w+)\s*\}\}/g, (r, i) => {
    switch (i) {
      case "amount":
      case "amount_with_comma_separator":
        return nf.format(e);
      case "amount_no_decimals":
      case "amount_no_decimals_with_comma_separator":
      default:
        return ha.format(Math.round(e));
    }
  }) : `$${ha.format(Math.round(e))}`;
}
function Wl() {
  const s = Ae(".picker"), t = Ae("#compare");
  if (!s || !t) return;
  const e = t.dataset.moneyFormat || "", r = Number(t.dataset.envioAfuera || 0), i = {};
  Di("[data-f]", t).forEach((c) => {
    i[c.dataset.f] = c;
  });
  function n(c, u, d) {
    if (!c) return;
    const h = Number(c.dataset.centimos ?? u);
    if (c.dataset.centimos = u, !d || Ti || h === u) {
      c.textContent = da(u, e);
      return;
    }
    const f = { v: h };
    gt.to(f, {
      v: u,
      duration: 0.55,
      ease: "power2.out",
      onUpdate: () => {
        c.textContent = da(f.v, e);
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
function Xl() {
  Di(".card__slide, .mini__shot img, .pdp__img").forEach((s) => {
    const t = () => {
      if (s.parentElement.querySelector(".card__sinfoto")) return;
      const e = document.createElement("span");
      e.className = "card__sinfoto", e.setAttribute("aria-hidden", "true"), s.parentElement.appendChild(e), s.style.display = "none";
    };
    s.addEventListener("error", t), s.complete && s.naturalWidth === 0 && t();
  });
}
let fi = null;
function sf() {
  Ti || (fi = new Iu({ lerp: 0.11, wheelMultiplier: 1, touchMultiplier: 1.6 }), fi.on("scroll", F.update), gt.ticker.add((s) => fi.raf(s * 1e3)), gt.ticker.lagSmoothing(0), window.DropScentsLenis = fi), Di('a[href^="#"]').forEach((s) => {
    s.addEventListener("click", (t) => {
      const e = s.getAttribute("href");
      if (!e || e === "#") return;
      const r = e === "#top" ? 0 : Ae(e);
      !r && r !== 0 || (t.preventDefault(), fi ? fi.scrollTo(r, { offset: -72, duration: 1.15 }) : window.scrollTo({ top: r === 0 ? 0 : r.offsetTop - 72 }));
    });
  });
}
function of() {
  Ti || (Ae("[data-hero-in]") && (gt.set("[data-hero-in]", { opacity: 0, y: 26 }), gt.timeline({ delay: 0.15 }).to("[data-hero-in]", {
    opacity: 1,
    y: 0,
    duration: 1.05,
    ease: "expo.out",
    stagger: 0.055
  })), Ae(".step") && gt.matchMedia().add(
    { ancho: "(min-width: 900px)", angosto: "(max-width: 899px)" },
    (s) => {
      const t = s.conditions.ancho ? 50 : 0;
      Di(".step").forEach((e, r) => {
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
  ), Ae(".compare") && (gt.from(".compare__col--us", {
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
  })), Ae("[data-reveal-card]") && F.batch("[data-reveal-card]", {
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
  }), Di(".qa__item").forEach((s, t) => {
    gt.from(s, {
      opacity: 0,
      x: -24,
      duration: 0.7,
      ease: "power3.out",
      delay: t * 0.03,
      scrollTrigger: { trigger: s, start: "top 92%" }
    });
  }), Ae(".bubble") && gt.from(".bubble", {
    opacity: 0,
    y: 26,
    scale: 0.92,
    transformOrigin: "bottom center",
    duration: 0.6,
    ease: "back.out(1.6)",
    stagger: 0.13,
    scrollTrigger: { trigger: ".chat", start: "top 82%" }
  }), Ae(".cierre__card") && gt.from(".cierre__card", {
    opacity: 0,
    scale: 0.96,
    y: 40,
    duration: 1.1,
    ease: "expo.out",
    scrollTrigger: { trigger: ".cierre", start: "top 85%" }
  }), Ae(".field__blob--lav") && (gt.to(".field__blob--lav", {
    yPercent: -18,
    ease: "none",
    scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 2 }
  }), gt.to(".field__blob--sky", {
    yPercent: -30,
    ease: "none",
    scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 2 }
  })));
}
function af() {
  const s = Ae("#nav");
  s && F.create({
    start: "top -60",
    end: 99999,
    onToggle: (t) => s.classList.toggle("is-stuck", t.isActive)
  });
}
let Us = null;
async function Hl() {
  const s = Ae("#scene");
  if (!s || !Us) return;
  const { createScene: t } = await Us(), e = t(s, { reducedMotion: Ti });
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
  ).to({}, { duration: 0.01 }, 0.99), F.refresh(), e;
}
let Vs = null;
function lf(s = {}) {
  Us = s.cargarEscena || null, "scrollRestoration" in history && (history.scrollRestoration = "manual"), window.scrollTo(0, 0), window.addEventListener("pageshow", () => window.scrollTo(0, 0)), Ku(), Zu(), Wl(), Xl(), sf(), Bl(), of(), af(), document.fonts?.ready && document.fonts.ready.then(() => F.refresh()), Hl().then((t) => {
    Vs = t;
  });
}
function cf() {
  window.Shopify?.designMode && (document.addEventListener("shopify:section:load", (s) => {
    s.target.querySelector("#scene") && (Vs?.dispose(), Hl().then((t) => {
      Vs = t;
    })), Bl(s.target), Wl(), Xl(), F.refresh();
  }), document.addEventListener("shopify:section:unload", () => F.refresh()));
}
const pa = window.DropScentsAssets?.scene;
lf({ cargarEscena: pa ? () => import(
  /* @vite-ignore */
  pa
) : null });
cf();
