var Bl = Object.defineProperty;
var Wl = (s, t, e) => t in s ? Bl(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var R = (s, t, e) => Wl(s, typeof t != "symbol" ? t + "" : t, e);
function ar(s) {
  if (s === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function ha(s, t) {
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
}, nn = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, $s, Wt, lt, Ne = 1e8, st = 1 / Ne, ws = Math.PI * 2, Xl = ws / 4, Hl = 0, da = Math.sqrt, $l = Math.cos, Ul = Math.sin, Ft = function(t) {
  return typeof t == "string";
}, gt = function(t) {
  return typeof t == "function";
}, hr = function(t) {
  return typeof t == "number";
}, Us = function(t) {
  return typeof t > "u";
}, er = function(t) {
  return typeof t == "object";
}, fe = function(t) {
  return t !== !1;
}, Vs = function() {
  return typeof window < "u";
}, yn = function(t) {
  return gt(t) || Ft(t);
}, pa = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Zt = Array.isArray, Vl = /random\([^)]+\)/g, ql = /,\s*/g, wo = /(?:-?\.?\d|\.)+/gi, _a = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, pi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ns = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, ga = /[+-]=-?[.\d]+/, Gl = /[^,'"\[\]\s]+/gi, Kl = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ft, Ge, xs, qs, Me = {}, Xn = {}, ma, va = function(t) {
  return (Xn = Ti(t, Me)) && ge;
}, Gs = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, sn = function(t, e) {
  return !e && console.warn(t);
}, ya = function(t, e) {
  return t && (Me[t] = e) && Xn && (Xn[t] = e) || Me;
}, on = function() {
  return 0;
}, Ql = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Rn = {
  suppressEvents: !0,
  kill: !1
}, Zl = {
  suppressEvents: !0
}, Ks = {}, kr = [], bs = {}, wa, be = {}, ss = {}, xo = 30, An = [], Qs = "", Zs = function(t) {
  var e = t[0], r, i;
  if (er(e) || gt(e) || (t = [t]), !(r = (e._gsap || {}).harness)) {
    for (i = An.length; i-- && !An[i].targetTest(e); )
      ;
    r = An[i];
  }
  for (i = t.length; i--; )
    t[i] && (t[i]._gsap || (t[i]._gsap = new Xa(t[i], r))) || t.splice(i, 1);
  return t;
}, qr = function(t) {
  return t._gsap || Zs(Fe(t))[0]._gsap;
}, xa = function(t, e, r) {
  return (r = t[e]) && gt(r) ? t[e]() : Us(r) && t.getAttribute && t.getAttribute(e) || r;
}, he = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, wt = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, ct = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, mi = function(t, e) {
  var r = e.charAt(0), i = parseFloat(e.substr(2));
  return t = parseFloat(t), r === "+" ? t + i : r === "-" ? t - i : r === "*" ? t * i : t / i;
}, Jl = function(t, e) {
  for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; )
    ;
  return i < r;
}, Hn = function() {
  var t = kr.length, e = kr.slice(0), r, i;
  for (bs = {}, kr.length = 0, r = 0; r < t; r++)
    i = e[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Js = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, ba = function(t, e, r, i) {
  kr.length && !Wt && Hn(), t.render(e, r, !!(Wt && e < 0 && Js(t))), kr.length && !Wt && Hn();
}, Sa = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(Gl).length < 2 ? e : Ft(t) ? t.trim() : t;
}, Ta = function(t) {
  return t;
}, Oe = function(t, e) {
  for (var r in e)
    r in t || (t[r] = e[r]);
  return t;
}, jl = function(t) {
  return function(e, r) {
    for (var i in r)
      i in e || i === "duration" && t || i === "ease" || (e[i] = r[i]);
  };
}, Ti = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, bo = function s(t, e) {
  for (var r in e)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = er(e[r]) ? s(t[r] || (t[r] = {}), e[r]) : e[r]);
  return t;
}, $n = function(t, e) {
  var r = {}, i;
  for (i in t)
    i in e || (r[i] = t[i]);
  return r;
}, Ui = function(t) {
  var e = t.parent || ft, r = t.keyframes ? jl(Zt(t.keyframes)) : Oe;
  if (fe(t.inherit))
    for (; e; )
      r(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, tu = function(t, e) {
  for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; )
    ;
  return r < 0;
}, Ea = function(t, e, r, i, n) {
  var o = t[i], a;
  if (n)
    for (a = e[n]; o && o[n] > a; )
      o = o._prev;
  return o ? (e._next = o._next, o._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = o, e.parent = e._dp = t, e;
}, jn = function(t, e, r, i) {
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
}, eu = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, Ss = function(t, e, r, i) {
  return t._startAt && (Wt ? t._startAt.revert(Rn) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i));
}, ru = function s(t) {
  return !t || t._ts && s(t.parent);
}, So = function(t) {
  return t._repeat ? Ei(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, Ei = function(t, e) {
  var r = Math.floor(t = ct(t / e));
  return t && r === t ? r - 1 : r;
}, Un = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, ts = function(t) {
  return t._end = ct(t._start + (t._tDur / Math.abs(t._ts || t._rts || st) || 0));
}, es = function(t, e) {
  var r = t._dp;
  return r && r.smoothChildTiming && t._ts && (t._start = ct(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), ts(t), r._dirty || Gr(r, t)), t;
}, Ca = function(t, e) {
  var r;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = Un(t.rawTime(), e), (!e._dur || pn(0, e.totalDuration(), r) - e._tTime > st) && e.render(r, !0)), Gr(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (r = t; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    t._zTime = -st;
  }
}, Ze = function(t, e, r, i) {
  return e.parent && Or(e), e._start = ct((hr(r) ? r : r || t !== ft ? Re(t, r, e) : t._time) + e._delay), e._end = ct(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Ea(t, e, "_first", "_last", t._sort ? "_start" : 0), Ts(e) || (t._recent = e), i || Ca(t, e), t._ts < 0 && es(t, t._tTime), t;
}, ka = function(t, e) {
  return (Me.ScrollTrigger || Gs("scrollTrigger", e)) && Me.ScrollTrigger.create(e, t);
}, Pa = function(t, e, r, i, n) {
  if (to(t, e, n), !t._initted)
    return 1;
  if (!r && t._pt && !Wt && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && wa !== Te.frame)
    return kr.push(t), t._lazy = [n, i], 1;
}, iu = function s(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || s(e));
}, Ts = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, nu = function(t, e, r, i) {
  var n = t.ratio, o = e < 0 || !e && (!t._start && iu(t) && !(!t._initted && Ts(t)) || (t._ts < 0 || t._dp._ts < 0) && !Ts(t)) ? 0 : 1, a = t._rDelay, l = 0, u, c, d;
  if (a && t._repeat && (l = pn(0, t._tDur, e), c = Ei(l, a), t._yoyo && c & 1 && (o = 1 - o), c !== Ei(t._tTime, a) && (n = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== n || Wt || i || t._zTime === st || !e && t._zTime) {
    if (!t._initted && Pa(t, e, i, r, l))
      return;
    for (d = t._zTime, t._zTime = e || (r ? st : 0), r || (r = e && !d), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = l, u = t._pt; u; )
      u.r(o, u.d), u = u._next;
    e < 0 && Ss(t, e, r, !0), t._onUpdate && !r && Ce(t, "onUpdate"), l && t._repeat && !r && t.parent && Ce(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && Or(t, 1), !r && !Wt && (Ce(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = e);
}, su = function(t, e, r) {
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
  return a && !i && (t._time *= o / t._dur), t._dur = o, t._tDur = n ? n < 0 ? 1e10 : ct(o * (n + 1) + t._rDelay * n) : o, a > 0 && !i && es(t, t._tTime = t._tDur * a), t.parent && ts(t), r || Gr(t.parent, t), t;
}, To = function(t) {
  return t instanceof ce ? Gr(t) : Ci(t, t._dur);
}, ou = {
  _start: 0,
  endTime: on,
  totalDuration: on
}, Re = function s(t, e, r) {
  var i = t.labels, n = t._recent || ou, o = t.duration() >= Ne ? n.endTime(!1) : t._dur, a, l, u;
  return Ft(e) && (isNaN(e) || e in i) ? (l = e.charAt(0), u = e.substr(-1) === "%", a = e.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (e = e.replace(/=/, "")), (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (u ? (a < 0 ? n : r).totalDuration() / 100 : 1)) : a < 0 ? (e in i || (i[e] = o), i[e]) : (l = parseFloat(e.charAt(a - 1) + e.substr(a + 1)), u && r && (l = l / 100 * (Zt(r) ? r[0] : r).totalDuration()), a > 1 ? s(t, e.substr(0, a - 1), r) + l : o + l)) : e == null ? o : +e;
}, Vi = function(t, e, r) {
  var i = hr(e[1]), n = (i ? 2 : 1) + (t < 2 ? 0 : 1), o = e[n], a, l;
  if (i && (o.duration = e[1]), o.parent = r, t) {
    for (a = o, l = r; l && !("immediateRender" in a); )
      a = l.vars.defaults || {}, l = fe(l.vars.inherit) && l.parent;
    o.immediateRender = fe(a.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[n - 1];
  }
  return new Ct(e[0], o, e[n + 1]);
}, Lr = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, pn = function(t, e, r) {
  return r < t ? t : r > e ? e : r;
}, Kt = function(t, e) {
  return !Ft(t) || !(e = Kl.exec(t)) ? "" : e[1];
}, au = function(t, e, r) {
  return Lr(r, function(i) {
    return pn(t, e, i);
  });
}, Es = [].slice, Ma = function(t, e) {
  return t && er(t) && "length" in t && (!e && !t.length || t.length - 1 in t && er(t[0])) && !t.nodeType && t !== Ge;
}, lu = function(t, e, r) {
  return r === void 0 && (r = []), t.forEach(function(i) {
    var n;
    return Ft(i) && !e || Ma(i, 1) ? (n = r).push.apply(n, Fe(i)) : r.push(i);
  }) || r;
}, Fe = function(t, e, r) {
  return lt && !e && lt.selector ? lt.selector(t) : Ft(t) && !r && (xs || !ki()) ? Es.call((e || qs).querySelectorAll(t), 0) : Zt(t) ? lu(t, r) : Ma(t) ? Es.call(t, 0) : t ? [t] : [];
}, Cs = function(t) {
  return t = Fe(t)[0] || sn("Invalid scope") || {}, function(e) {
    var r = t.current || t.nativeElement || t;
    return Fe(e, r.querySelectorAll ? r : r === t ? sn("Invalid scope") || qs.createElement("div") : t);
  };
}, Oa = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, Da = function(t) {
  if (gt(t))
    return t;
  var e = er(t) ? t : {
    each: t
  }, r = Kr(e.ease), i = e.from || 0, n = parseFloat(e.base) || 0, o = {}, a = i > 0 && i < 1, l = isNaN(i) || a, u = e.axis, c = i, d = i;
  return Ft(i) ? c = d = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !a && l && (c = i[0], d = i[1]), function(h, f, _) {
    var p = (_ || e).length, m = o[p], b, w, T, v, S, k, x, P, C;
    if (!m) {
      if (C = e.grid === "auto" ? 0 : (e.grid || [1, Ne])[1], !C) {
        for (x = -Ne; x < (x = _[C++].getBoundingClientRect().left) && C < p; )
          ;
        C < p && C--;
      }
      for (m = o[p] = [], b = l ? Math.min(C, p) * c - 0.5 : i % C, w = C === Ne ? 0 : l ? p * d / C - 0.5 : i / C | 0, x = 0, P = Ne, k = 0; k < p; k++)
        T = k % C - b, v = w - (k / C | 0), m[k] = S = u ? Math.abs(u === "y" ? v : T) : da(T * T + v * v), S > x && (x = S), S < P && (P = S);
      i === "random" && Oa(m), m.max = x - P, m.min = P, m.v = p = (parseFloat(e.amount) || parseFloat(e.each) * (C > p ? p - 1 : u ? u === "y" ? p / C : C : Math.max(C, p / C)) || 0) * (i === "edges" ? -1 : 1), m.b = p < 0 ? n - p : n, m.u = Kt(e.amount || e.each) || 0, r = r && p < 0 ? xu(r) : r;
    }
    return p = (m[h] - m.min) / m.max || 0, ct(m.b + (r ? r(p) : p) * m.v) + m.u;
  };
}, ks = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(r) {
    var i = ct(Math.round(parseFloat(r) / t) * t * e);
    return (i - i % 1) / e + (hr(r) ? 0 : Kt(r));
  };
}, Ra = function(t, e) {
  var r = Zt(t), i, n;
  return !r && er(t) && (i = r = t.radius || Ne, t.values ? (t = Fe(t.values), (n = !hr(t[0])) && (i *= i)) : t = ks(t.increment)), Lr(e, r ? gt(t) ? function(o) {
    return n = t(o), Math.abs(n - o) <= i ? n : o;
  } : function(o) {
    for (var a = parseFloat(n ? o.x : o), l = parseFloat(n ? o.y : 0), u = Ne, c = 0, d = t.length, h, f; d--; )
      n ? (h = t[d].x - a, f = t[d].y - l, h = h * h + f * f) : h = Math.abs(t[d] - a), h < u && (u = h, c = d);
    return c = !i || u <= i ? t[c] : o, n || c === o || hr(o) ? c : c + Kt(o);
  } : ks(t));
}, Aa = function(t, e, r, i) {
  return Lr(Zt(t) ? !e : r === !0 ? !!(r = 0) : !i, function() {
    return Zt(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + r * 0.99)) / r) * r * i) / i;
  });
}, uu = function() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return function(i) {
    return e.reduce(function(n, o) {
      return o(n);
    }, i);
  };
}, cu = function(t, e) {
  return function(r) {
    return t(parseFloat(r)) + (e || Kt(r));
  };
}, fu = function(t, e, r) {
  return Na(t, e, 0, 1, r);
}, La = function(t, e, r) {
  return Lr(r, function(i) {
    return t[~~e(i)];
  });
}, hu = function s(t, e, r) {
  var i = e - t;
  return Zt(t) ? La(t, s(0, t.length), e) : Lr(r, function(n) {
    return (i + (n - t) % i) % i + t;
  });
}, du = function s(t, e, r) {
  var i = e - t, n = i * 2;
  return Zt(t) ? La(t, s(0, t.length - 1), e) : Lr(r, function(o) {
    return o = (n + (o - t) % n) % n || 0, t + (o > i ? n - o : o);
  });
}, an = function(t) {
  return t.replace(Vl, function(e) {
    var r = e.indexOf("[") + 1, i = e.substring(r || 7, r ? e.indexOf("]") : e.length - 1).split(ql);
    return Aa(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5);
  });
}, Na = function(t, e, r, i, n) {
  var o = e - t, a = i - r;
  return Lr(n, function(l) {
    return r + ((l - t) / o * a || 0);
  });
}, pu = function s(t, e, r, i) {
  var n = isNaN(t + e) ? 0 : function(f) {
    return (1 - f) * t + f * e;
  };
  if (!n) {
    var o = Ft(t), a = {}, l, u, c, d, h;
    if (r === !0 && (i = 1) && (r = null), o)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (Zt(t) && !Zt(e)) {
      for (c = [], d = t.length, h = d - 2, u = 1; u < d; u++)
        c.push(s(t[u - 1], t[u]));
      d--, n = function(_) {
        _ *= d;
        var p = Math.min(h, ~~_);
        return c[p](_ - p);
      }, r = e;
    } else i || (t = Ti(Zt(t) ? [] : {}, t));
    if (!c) {
      for (l in e)
        js.call(a, t, l, "get", e[l]);
      n = function(_) {
        return io(_, a) || (o ? t.p : t);
      };
    }
  }
  return Lr(r, n);
}, Eo = function(t, e, r) {
  var i = t.labels, n = Ne, o, a, l;
  for (o in i)
    a = i[o] - e, a < 0 == !!r && a && n > (a = Math.abs(a)) && (l = o, n = a);
  return l;
}, Ce = function(t, e, r) {
  var i = t.vars, n = i[e], o = lt, a = t._ctx, l, u, c;
  if (n)
    return l = i[e + "Params"], u = i.callbackScope || t, r && kr.length && Hn(), a && (lt = a), c = l ? n.apply(u, l) : n.call(u), lt = o, c;
}, Ii = function(t) {
  return Or(t), t.scrollTrigger && t.scrollTrigger.kill(!!Wt), t.progress() < 1 && Ce(t, "onInterrupt"), t;
}, _i, Fa = [], za = function(t) {
  if (t)
    if (t = !t.name && t.default || t, Vs() || t.headless) {
      var e = t.name, r = gt(t), i = e && !r && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: on,
        render: io,
        add: js,
        kill: Du,
        modifier: Ou,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: ro,
        aliases: {},
        register: 0
      };
      if (ki(), t !== i) {
        if (be[e])
          return;
        Oe(i, Oe($n(t, n), o)), Ti(i.prototype, Ti(n, $n(t, o))), be[i.prop = e] = i, t.targetTest && (An.push(i), Ks[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      ya(e, i), t.register && t.register(ge, i, de);
    } else
      Fa.push(t);
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
}, os = function(t, e, r) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : t * 3 < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * nt + 0.5 | 0;
}, Ia = function(t, e, r) {
  var i = t ? hr(t) ? [t >> 16, t >> 8 & nt, t & nt] : 0 : Yi.black, n, o, a, l, u, c, d, h, f, _;
  if (!i) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Yi[t])
      i = Yi[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), o = t.charAt(2), a = t.charAt(3), t = "#" + n + n + o + o + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return i = parseInt(t.substr(1, 6), 16), [i >> 16, i >> 8 & nt, i & nt, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & nt, t & nt];
    } else if (t.substr(0, 3) === "hsl") {
      if (i = _ = t.match(wo), !e)
        l = +i[0] % 360 / 360, u = +i[1] / 100, c = +i[2] / 100, o = c <= 0.5 ? c * (u + 1) : c + u - c * u, n = c * 2 - o, i.length > 3 && (i[3] *= 1), i[0] = os(l + 1 / 3, n, o), i[1] = os(l, n, o), i[2] = os(l - 1 / 3, n, o);
      else if (~t.indexOf("="))
        return i = t.match(_a), r && i.length < 4 && (i[3] = 1), i;
    } else
      i = t.match(wo) || Yi.transparent;
    i = i.map(Number);
  }
  return e && !_ && (n = i[0] / nt, o = i[1] / nt, a = i[2] / nt, d = Math.max(n, o, a), h = Math.min(n, o, a), c = (d + h) / 2, d === h ? l = u = 0 : (f = d - h, u = c > 0.5 ? f / (2 - d - h) : f / (d + h), l = d === n ? (o - a) / f + (o < a ? 6 : 0) : d === o ? (a - n) / f + 2 : (n - o) / f + 4, l *= 60), i[0] = ~~(l + 0.5), i[1] = ~~(u * 100 + 0.5), i[2] = ~~(c * 100 + 0.5)), r && i.length < 4 && (i[3] = 1), i;
}, Ya = function(t) {
  var e = [], r = [], i = -1;
  return t.split(Pr).forEach(function(n) {
    var o = n.match(pi) || [];
    e.push.apply(e, o), r.push(i += o.length + 1);
  }), e.c = r, e;
}, Co = function(t, e, r) {
  var i = "", n = (t + i).match(Pr), o = e ? "hsla(" : "rgba(", a = 0, l, u, c, d;
  if (!n)
    return t;
  if (n = n.map(function(h) {
    return (h = Ia(h, e, 1)) && o + (e ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")";
  }), r && (c = Ya(t), l = r.c, l.join(i) !== c.c.join(i)))
    for (u = t.replace(Pr, "1").split(pi), d = u.length - 1; a < d; a++)
      i += u[a] + (~l.indexOf(a) ? n.shift() || o + "0,0,0,0)" : (c.length ? c : n.length ? n : r).shift());
  if (!u)
    for (u = t.split(Pr), d = u.length - 1; a < d; a++)
      i += u[a] + n[a];
  return i + u[d];
}, Pr = function() {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Yi)
    s += "|" + t + "\\b";
  return new RegExp(s + ")", "gi");
}(), _u = /hsl[a]?\(/, Ba = function(t) {
  var e = t.join(" "), r;
  if (Pr.lastIndex = 0, Pr.test(e))
    return r = _u.test(e), t[1] = Co(t[1], r), t[0] = Co(t[0], r, Ya(t[1])), !0;
}, ln, Te = function() {
  var s = Date.now, t = 500, e = 33, r = s(), i = r, n = 1e3 / 240, o = n, a = [], l, u, c, d, h, f, _ = function p(m) {
    var b = s() - i, w = m === !0, T, v, S, k;
    if ((b > t || b < 0) && (r += b - e), i += b, S = i - r, T = S - o, (T > 0 || w) && (k = ++d.frame, h = S - d.time * 1e3, d.time = S = S / 1e3, o += T + (T >= n ? 4 : n - T), v = 1), w || (l = u(p)), v)
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
      ma && (!xs && Vs() && (Ge = xs = window, qs = Ge.document || {}, Me.gsap = ge, (Ge.gsapVersions || (Ge.gsapVersions = [])).push(ge.version), va(Xn || Ge.GreenSockGlobals || !Ge.gsap && Ge || {}), Fa.forEach(za)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && d.sleep(), u = c || function(m) {
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
      var T = b ? function(v, S, k, x) {
        m(v, S, k, x), d.remove(T);
      } : m;
      return d.remove(m), a[w ? "unshift" : "push"](T), ki(), T;
    },
    remove: function(m, b) {
      ~(b = a.indexOf(m)) && a.splice(b, 1) && f >= b && f--;
    },
    _listeners: a
  }, d;
}(), ki = function() {
  return !ln && Te.wake();
}, G = {}, gu = /^[\d.\-M][\d.\-,\s]/, mu = /["']/g, vu = function(t) {
  for (var e = {}, r = t.substr(1, t.length - 3).split(":"), i = r[0], n = 1, o = r.length, a, l, u; n < o; n++)
    l = r[n], a = n !== o - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, a), e[i] = isNaN(u) ? u.replace(mu, "").trim() : +u, i = l.substr(a + 1).trim();
  return e;
}, yu = function(t) {
  var e = t.indexOf("(") + 1, r = t.indexOf(")"), i = t.indexOf("(", e);
  return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
}, wu = function(t) {
  var e = (t + "").split("("), r = G[e[0]];
  return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [vu(e[1])] : yu(t).split(",").map(Sa)) : G._CE && gu.test(t) ? G._CE("", t) : r;
}, xu = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, Kr = function(t, e) {
  return t && (gt(t) ? t : G[t] || wu(t)) || e;
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
}, Wa = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, as = function s(t, e, r) {
  var i = e >= 1 ? e : 1, n = (r || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), o = n / ws * (Math.asin(1 / i) || 0), a = function(c) {
    return c === 1 ? 1 : i * Math.pow(2, -10 * c) * Ul((c - o) * n) + 1;
  }, l = t === "out" ? a : t === "in" ? function(u) {
    return 1 - a(1 - u);
  } : Wa(a);
  return n = ws / n, l.config = function(u, c) {
    return s(t, u, c);
  }, l;
}, ls = function s(t, e) {
  e === void 0 && (e = 1.70158);
  var r = function(o) {
    return o ? --o * o * ((e + 1) * o + e) + 1 : 0;
  }, i = t === "out" ? r : t === "in" ? function(n) {
    return 1 - r(1 - n);
  } : Wa(r);
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
ii("Elastic", as("in"), as("out"), as());
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
  return -(da(1 - s * s) - 1);
});
ii("Sine", function(s) {
  return s === 1 ? 1 : -$l(s * Xl) + 1;
});
ii("Back", ls("in"), ls("out"), ls());
G.SteppedEase = G.steps = Me.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var r = 1 / t, i = t + (e ? 0 : 1), n = e ? 1 : 0, o = 1 - st;
    return function(a) {
      return ((i * pn(0, o, a) | 0) + n) * r;
    };
  }
};
nn.ease = G["quad.out"];
he("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(s) {
  return Qs += s + "," + s + "Params,";
});
var Xa = function(t, e) {
  this.id = Hl++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : xa, this.set = e ? e.getSetter : ro;
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
      for (es(this, r), !n._dp || n.parent || Ca(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && Ze(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === st || !this._initted && this._dur && r || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), ba(this, r, i)), this;
  }, t.time = function(r, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + So(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time;
  }, t.totalProgress = function(r, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(r, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + So(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(r, i) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * n, i) : this._repeat ? Ei(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(r, i) {
    if (!arguments.length)
      return this._rts === -st ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var n = this.parent && this._ts ? Un(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -st ? 0 : this._rts, this.totalTime(pn(-Math.abs(this._delay), this.totalDuration(), n), i !== !1), ts(this), eu(this);
  }, t.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ki(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== st && (this._tTime -= st)))), this) : this._ps;
  }, t.startTime = function(r) {
    if (arguments.length) {
      this._start = ct(r);
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && Ze(i, this, this._start - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(r) {
    return this._start + (fe(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(r) {
    var i = this.parent || this._dp;
    return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Un(i.rawTime(r), this) : this._tTime : this._tTime;
  }, t.revert = function(r) {
    r === void 0 && (r = Zl);
    var i = Wt;
    return Wt = r, Js(this) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), Wt = i, this;
  }, t.globalTime = function(r) {
    for (var i = this, n = arguments.length ? r : i.rawTime(); i; )
      n = i._start + n / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(r) : n;
  }, t.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, To(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(r) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = r, To(this), i ? this.time(i) : this;
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
      var a = gt(r) ? r : Ta, l = function() {
        var c = i.then;
        i.then = null, n && n(), gt(a) && (a = a(i)) && (a.then || a === i) && (i.then = c), o(a), i.then = c;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? l() : i._prom = l;
    });
  }, t.kill = function() {
    Ii(this);
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
var ce = /* @__PURE__ */ function(s) {
  ha(t, s);
  function t(r, i) {
    var n;
    return r === void 0 && (r = {}), n = s.call(this, r) || this, n.labels = {}, n.smoothChildTiming = !!r.smoothChildTiming, n.autoRemoveChildren = !!r.autoRemoveChildren, n._sort = fe(r.sortChildren), ft && Ze(r.parent || ft, ar(n), i), r.reversed && n.reverse(), r.paused && n.paused(!0), r.scrollTrigger && ka(ar(n), r.scrollTrigger), n;
  }
  var e = t.prototype;
  return e.to = function(i, n, o) {
    return Vi(0, arguments, this), this;
  }, e.from = function(i, n, o) {
    return Vi(1, arguments, this), this;
  }, e.fromTo = function(i, n, o, a) {
    return Vi(2, arguments, this), this;
  }, e.set = function(i, n, o) {
    return n.duration = 0, n.parent = this, Ui(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new Ct(i, n, Re(this, o), 1), this;
  }, e.call = function(i, n, o) {
    return Ze(this, Ct.delayedCall(0, i, n), o);
  }, e.staggerTo = function(i, n, o, a, l, u, c) {
    return o.duration = n, o.stagger = o.stagger || a, o.onComplete = u, o.onCompleteParams = c, o.parent = this, new Ct(i, o, Re(this, l)), this;
  }, e.staggerFrom = function(i, n, o, a, l, u, c) {
    return o.runBackwards = 1, Ui(o).immediateRender = fe(o.immediateRender), this.staggerTo(i, n, o, a, l, u, c);
  }, e.staggerFromTo = function(i, n, o, a, l, u, c, d) {
    return a.startAt = o, Ui(a).immediateRender = fe(a.immediateRender), this.staggerTo(i, n, a, l, u, c, d);
  }, e.render = function(i, n, o) {
    var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = i <= 0 ? 0 : ct(i), d = this._zTime < 0 != i < 0 && (this._initted || !u), h, f, _, p, m, b, w, T, v, S, k, x;
    if (this !== ft && c > l && i >= 0 && (c = l), c !== this._tTime || o || d) {
      if (a !== this._time && u && (c += this._time - a, i += this._time - a), h = c, v = this._start, T = this._ts, b = !T, d && (u || (a = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
        if (k = this._yoyo, m = u + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(m * 100 + i, n, o);
        if (h = ct(c % m), c === l ? (p = this._repeat, h = u) : (S = ct(c / m), p = ~~S, p && p === S && (h = u, p--), h > u && (h = u)), S = Ei(this._tTime, m), !a && this._tTime && S !== p && this._tTime - S * m - this._dur <= 0 && (S = p), k && p & 1 && (h = u - h, x = 1), p !== S && !this._lock) {
          var P = k && S & 1, C = P === (k && p & 1);
          if (p < S && (P = !P), a = P ? 0 : c % u ? u : c, this._lock = 1, this.render(a || (x ? 0 : ct(p * m)), n, !u)._lock = 0, this._tTime = c, !n && this.parent && Ce(this, "onRepeat"), this.vars.repeatRefresh && !x && (this.invalidate()._lock = 1, S = p), a && a !== this._time || b !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, l = this._tDur, C && (this._lock = 2, a = P ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !x && this.invalidate()), this._lock = 0, !this._ts && !b)
            return this;
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (w = su(this, ct(a), ct(h)), w && (c -= h - (h = w._start))), this._tTime = c, this._time = h, this._act = !!T, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && c && u && !n && !S && (Ce(this, "onStart"), this._tTime !== c))
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
            if (f.render(f._ts > 0 ? (E - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (E - f._start) * f._ts, n, o || Wt && Js(f)), h !== this._time || !this._ts && !b) {
              w = 0, _ && (c += this._zTime = E ? -st : st);
              break;
            }
          }
          f = _;
        }
      }
      if (w && !n && (this.pause(), w.render(h >= a ? 0 : -st)._zTime = h >= a ? 1 : -1, this._ts))
        return this._start = v, ts(this), this.render(i, n, o);
      this._onUpdate && !n && Ce(this, "onUpdate", !0), (c === l && this._tTime >= this.totalDuration() || !c && a) && (v === this._start || Math.abs(T) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (c === l && this._ts > 0 || !c && this._ts < 0) && Or(this, 1), !n && !(i < 0 && !a) && (c || a || !l) && (Ce(this, c === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < l && this.timeScale() > 0) && this._prom())));
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
      if (gt(i))
        i = Ct.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? Ze(this, i, n) : this;
  }, e.getChildren = function(i, n, o, a) {
    i === void 0 && (i = !0), n === void 0 && (n = !0), o === void 0 && (o = !0), a === void 0 && (a = -Ne);
    for (var l = [], u = this._first; u; )
      u._start >= a && (u instanceof Ct ? n && l.push(u) : (o && l.push(u), i && l.push.apply(l, u.getChildren(!0, n, o)))), u = u._next;
    return l;
  }, e.getById = function(i) {
    for (var n = this.getChildren(1, 1, 1), o = n.length; o--; )
      if (n[o].vars.id === i)
        return n[o];
  }, e.remove = function(i) {
    return Ft(i) ? this.removeLabel(i) : gt(i) ? this.killTweensOf(i) : (i.parent === this && jn(this, i), i === this._recent && (this._recent = this._last), Gr(this));
  }, e.totalTime = function(i, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ct(Te.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), s.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(i, n) {
    return this.labels[i] = Re(this, n), this;
  }, e.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, e.addPause = function(i, n, o) {
    var a = Ct.delayedCall(0, n || on, o);
    return a.data = "isPause", this._hasPause = 1, Ze(this, a, Re(this, i));
  }, e.removePause = function(i) {
    var n = this._first;
    for (i = Re(this, i); n; )
      n._start === i && n.data === "isPause" && Or(n), n = n._next;
  }, e.killTweensOf = function(i, n, o) {
    for (var a = this.getTweensOf(i, o), l = a.length; l--; )
      br !== a[l] && a[l].kill(i, n);
    return this;
  }, e.getTweensOf = function(i, n) {
    for (var o = [], a = Fe(i), l = this._first, u = hr(n), c; l; )
      l instanceof Ct ? Jl(l._targets, a) && (u ? (!br || l._initted && l._ts) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) && o.push(l) : (c = l.getTweensOf(a, n)).length && o.push.apply(o, c), l = l._next;
    return o;
  }, e.tweenTo = function(i, n) {
    n = n || {};
    var o = this, a = Re(o, i), l = n, u = l.startAt, c = l.onStart, d = l.onStartParams, h = l.immediateRender, f, _ = Ct.to(o, Oe({
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
    return this.tweenTo(n, Oe({
      startAt: {
        time: Re(this, i)
      }
    }, o));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(i) {
    return i === void 0 && (i = this._time), Eo(this, Re(this, i));
  }, e.previousLabel = function(i) {
    return i === void 0 && (i = this._time), Eo(this, Re(this, i), 1);
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
    var n = 0, o = this, a = o._last, l = Ne, u, c, d;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
    if (o._dirty) {
      for (d = o.parent; a; )
        u = a._prev, a._dirty && a.totalDuration(), c = a._start, c > l && o._sort && a._ts && !o._lock ? (o._lock = 1, Ze(o, a, c - a._delay, 1)._lock = 0) : l = c, c < 0 && a._ts && (n -= c, (!d && !o._dp || d && d.smoothChildTiming) && (o._start += ct(c / o._ts), o._time -= c, o._tTime -= c), o.shiftChildren(-c, !1, -1 / 0), l = 0), a._end > n && a._ts && (n = a._end), a = u;
      Ci(o, o === ft && o._time > n ? o._time : n, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, t.updateRoot = function(i) {
    if (ft._ts && (ba(ft, Un(i, ft)), wa = Te.frame), Te.frame >= xo) {
      xo += Pe.autoSleep || 120;
      var n = ft._first;
      if ((!n || !n._ts) && Pe.autoSleep && Te._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || Te.sleep();
      }
    }
  }, t;
}(un);
Oe(ce.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var bu = function(t, e, r, i, n, o, a) {
  var l = new de(this._pt, t, e, 0, 1, Ga, null, n), u = 0, c = 0, d, h, f, _, p, m, b, w;
  for (l.b = r, l.e = i, r += "", i += "", (b = ~i.indexOf("random(")) && (i = an(i)), o && (w = [r, i], o(w, t, e), r = w[0], i = w[1]), h = r.match(ns) || []; d = ns.exec(i); )
    _ = d[0], p = i.substring(u, d.index), f ? f = (f + 1) % 5 : p.substr(-5) === "rgba(" && (f = 1), _ !== h[c++] && (m = parseFloat(h[c - 1]) || 0, l._pt = {
      _next: l._pt,
      p: p || c === 1 ? p : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: _.charAt(1) === "=" ? mi(m, _) - m : parseFloat(_) - m,
      m: f && f < 4 ? Math.round : 0
    }, u = ns.lastIndex);
  return l.c = u < i.length ? i.substring(u, i.length) : "", l.fp = a, (ga.test(i) || b) && (l.e = 0), this._pt = l, l;
}, js = function(t, e, r, i, n, o, a, l, u, c) {
  gt(i) && (i = i(n || 0, t, o));
  var d = t[e], h = r !== "get" ? r : gt(d) ? u ? t[e.indexOf("set") || !gt(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : d, f = gt(d) ? u ? ku : Va : eo, _;
  if (Ft(i) && (~i.indexOf("random(") && (i = an(i)), i.charAt(1) === "=" && (_ = mi(h, i) + (Kt(h) || 0), (_ || _ === 0) && (i = _))), !c || h !== i || Ps)
    return !isNaN(h * i) && i !== "" ? (_ = new de(this._pt, t, e, +h || 0, i - (h || 0), typeof d == "boolean" ? Mu : qa, 0, f), u && (_.fp = u), a && _.modifier(a, this, t), this._pt = _) : (!d && !(e in t) && Gs(e, i), bu.call(this, t, e, h, i, f, l || Pe.stringFilter, u));
}, Su = function(t, e, r, i, n) {
  if (gt(t) && (t = qi(t, n, e, r, i)), !er(t) || t.style && t.nodeType || Zt(t) || pa(t))
    return Ft(t) ? qi(t, n, e, r, i) : t;
  var o = {}, a;
  for (a in t)
    o[a] = qi(t[a], n, e, r, i);
  return o;
}, Ha = function(t, e, r, i, n, o) {
  var a, l, u, c;
  if (be[t] && (a = new be[t]()).init(n, a.rawVars ? e[t] : Su(e[t], i, n, o, r), r, i, o) !== !1 && (r._pt = l = new de(r._pt, n, t, 0, 1, a.render, a, 0, a.priority), r !== _i))
    for (u = r._ptLookup[r._targets.indexOf(n)], c = a._props.length; c--; )
      u[a._props[c]] = l;
  return a;
}, br, Ps, to = function s(t, e, r) {
  var i = t.vars, n = i.ease, o = i.startAt, a = i.immediateRender, l = i.lazy, u = i.onUpdate, c = i.runBackwards, d = i.yoyoEase, h = i.keyframes, f = i.autoRevert, _ = t._dur, p = t._startAt, m = t._targets, b = t.parent, w = b && b.data === "nested" ? b.vars.targets : m, T = t._overwrite === "auto" && !$s, v = t.timeline, S = i.easeReverse || d, k, x, P, C, E, W, O, K, Y, Q, V, L, Z;
  if (v && (!h || !n) && (n = "none"), t._ease = Kr(n, nn.ease), t._rEase = S && (Kr(S) || t._ease), t._from = !v && !!i.runBackwards, t._from && (t.ratio = 1), !v || h && !i.stagger) {
    if (K = m[0] ? qr(m[0]).harness : 0, L = K && i[K.prop], k = $n(i, Ks), p && (p._zTime < 0 && p.progress(1), e < 0 && c && a && !f ? p.render(-1, !0) : p.revert(c && _ ? Rn : Ql), p._lazy = 0), o) {
      if (Or(t._startAt = Ct.set(m, Oe({
        data: "isStart",
        overwrite: !1,
        parent: b,
        immediateRender: !0,
        lazy: !p && fe(l),
        startAt: null,
        delay: 0,
        onUpdate: u && function() {
          return Ce(t, "onUpdate");
        },
        stagger: 0
      }, o))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Wt || !a && !f) && t._startAt.revert(Rn), a && _ && e <= 0 && r <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (c && _ && !p) {
      if (e && (a = !1), P = Oe({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !p && fe(l),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: b
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, k), L && (P[K.prop] = L), Or(t._startAt = Ct.set(m, P)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (Wt ? t._startAt.revert(Rn) : t._startAt.render(-1, !0)), t._zTime = e, !a)
        s(t._startAt, st, st);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, l = _ && fe(l) || l && !_, x = 0; x < m.length; x++) {
      if (E = m[x], O = E._gsap || Zs(m)[x]._gsap, t._ptLookup[x] = Q = {}, bs[O.id] && kr.length && Hn(), V = w === m ? x : w.indexOf(E), K && (Y = new K()).init(E, L || k, t, V, w) !== !1 && (t._pt = C = new de(t._pt, E, Y.name, 0, 1, Y.render, Y, 0, Y.priority), Y._props.forEach(function(rt) {
        Q[rt] = C;
      }), Y.priority && (W = 1)), !K || L)
        for (P in k)
          be[P] && (Y = Ha(P, k, t, V, E, w)) ? Y.priority && (W = 1) : Q[P] = C = js.call(t, E, P, "get", k[P], V, w, 0, i.stringFilter);
      t._op && t._op[x] && t.kill(E, t._op[x]), T && t._pt && (br = t, ft.killTweensOf(E, Q, t.globalTime(e)), Z = !t.parent, br = 0), t._pt && l && (bs[O.id] = 1);
    }
    W && Ka(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = u, t._initted = (!t._op || t._pt) && !Z, h && e <= 0 && v.render(Ne, !0, !0);
}, Tu = function(t, e, r, i, n, o, a, l) {
  var u = (t._pt && t._ptCache || (t._ptCache = {}))[e], c, d, h, f;
  if (!u)
    for (u = t._ptCache[e] = [], h = t._ptLookup, f = t._targets.length; f--; ) {
      if (c = h[f][e], c && c.d && c.d._pt)
        for (c = c.d._pt; c && c.p !== e && c.fp !== e; )
          c = c._next;
      if (!c)
        return Ps = 1, t.vars[e] = "+=0", to(t, a), Ps = 0, l ? sn(e + " not eligible for reset. Try splitting into individual properties") : 1;
      u.push(c);
    }
  for (f = u.length; f--; )
    d = u[f], c = d._pt || d, c.s = (i || i === 0) && !n ? i : c.s + (i || 0) + o * c.c, c.c = r - c.s, d.e && (d.e = wt(r) + Kt(d.e)), d.b && (d.b = c.s + Kt(d.b));
}, Eu = function(t, e) {
  var r = t[0] ? qr(t[0]).harness : 0, i = r && r.aliases, n, o, a, l;
  if (!i)
    return e;
  n = Ti({}, e);
  for (o in i)
    if (o in n)
      for (l = i[o].split(","), a = l.length; a--; )
        n[l[a]] = n[o];
  return n;
}, Cu = function(t, e, r, i) {
  var n = e.ease || i || "power1.inOut", o, a;
  if (Zt(e))
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
  return gt(t) ? t.call(e, r, i, n) : Ft(t) && ~t.indexOf("random(") ? an(t) : t;
}, $a = Qs + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", Ua = {};
he($a + ",id,stagger,delay,duration,paused,scrollTrigger", function(s) {
  return Ua[s] = 1;
});
var Ct = /* @__PURE__ */ function(s) {
  ha(t, s);
  function t(r, i, n, o) {
    var a;
    typeof i == "number" && (n.duration = i, i = n, n = null), a = s.call(this, o ? i : Ui(i)) || this;
    var l = a.vars, u = l.duration, c = l.delay, d = l.immediateRender, h = l.stagger, f = l.overwrite, _ = l.keyframes, p = l.defaults, m = l.scrollTrigger, b = i.parent || ft, w = (Zt(r) || pa(r) ? hr(r[0]) : "length" in i) ? [r] : Fe(r), T, v, S, k, x, P, C, E;
    if (a._targets = w.length ? Zs(w) : sn("GSAP target " + r + " not found. https://gsap.com", !Pe.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = f, _ || h || yn(u) || yn(c)) {
      i = a.vars;
      var W = i.easeReverse || i.yoyoEase;
      if (T = a.timeline = new ce({
        data: "nested",
        defaults: p || {},
        targets: b && b.data === "nested" ? b.vars.targets : w
      }), T.kill(), T.parent = T._dp = ar(a), T._start = 0, h || yn(u) || yn(c)) {
        if (k = w.length, C = h && Da(h), er(h))
          for (x in h)
            ~$a.indexOf(x) && (E || (E = {}), E[x] = h[x]);
        for (v = 0; v < k; v++)
          S = $n(i, Ua), S.stagger = 0, W && (S.easeReverse = W), E && Ti(S, E), P = w[v], S.duration = +qi(u, ar(a), v, P, w), S.delay = (+qi(c, ar(a), v, P, w) || 0) - a._delay, !h && k === 1 && S.delay && (a._delay = c = S.delay, a._start += c, S.delay = 0), T.to(P, S, C ? C(v, P, w) : 0), T._ease = G.none;
        T.duration() ? u = c = 0 : a.timeline = 0;
      } else if (_) {
        Ui(Oe(T.vars.defaults, {
          ease: "none"
        })), T._ease = Kr(_.ease || i.ease || "none");
        var O = 0, K, Y, Q;
        if (Zt(_))
          _.forEach(function(V) {
            return T.to(w, V, ">");
          }), T.duration();
        else {
          S = {};
          for (x in _)
            x === "ease" || x === "easeEach" || Cu(x, _[x], S, _.easeEach);
          for (x in S)
            for (K = S[x].sort(function(V, L) {
              return V.t - L.t;
            }), O = 0, v = 0; v < K.length; v++)
              Y = K[v], Q = {
                ease: Y.e,
                duration: (Y.t - (v ? K[v - 1].t : 0)) / 100 * u
              }, Q[x] = Y.v, T.to(w, Q, O), O += Q.duration;
          T.duration() < u && T.to({}, {
            duration: u - T.duration()
          });
        }
      }
      u || a.duration(u = T.duration());
    } else
      a.timeline = 0;
    return f === !0 && !$s && (br = ar(a), ft.killTweensOf(w), br = 0), Ze(b, ar(a), n), i.reversed && a.reverse(), i.paused && a.paused(!0), (d || !u && !_ && a._start === ct(b._time) && fe(d) && ru(ar(a)) && b.data !== "nested") && (a._tTime = -st, a.render(Math.max(0, -c) || 0)), m && ka(ar(a), m), a;
  }
  var e = t.prototype;
  return e.render = function(i, n, o) {
    var a = this._time, l = this._tDur, u = this._dur, c = i < 0, d = i > l - st && !c ? l : i < st ? 0 : i, h, f, _, p, m, b, w, T;
    if (!u)
      nu(this, i, n, o);
    else if (d !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
      if (h = d, T = this.timeline, this._repeat) {
        if (p = u + this._rDelay, this._repeat < -1 && c)
          return this.totalTime(p * 100 + i, n, o);
        if (h = ct(d % p), d === l ? (_ = this._repeat, h = u) : (m = ct(d / p), _ = ~~m, _ && _ === m ? (h = u, _--) : h > u && (h = u)), b = this._yoyo && _ & 1, b && (h = u - h), m = Ei(this._tTime, p), h === a && !o && this._initted && _ === m)
          return this._tTime = d, this;
        _ !== m && this.vars.repeatRefresh && !b && !this._lock && h !== p && this._initted && (this._lock = o = 1, this.render(ct(p * _), !0).invalidate()._lock = 0);
      }
      if (!this._initted) {
        if (Pa(this, c ? i : h, o, n, d))
          return this._tTime = 0, this;
        if (a !== this._time && !(o && this.vars.repeatRefresh && _ !== m))
          return this;
        if (u !== this._dur)
          return this.render(i, n, o);
      }
      if (this._rEase) {
        var v = h < a;
        if (v !== this._inv) {
          var S = v ? a : u - a;
          this._inv = v, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = a, this._invRecip = S ? (v ? -1 : 1) / S : 0, this._invScale = v ? -this.ratio : 1 - this.ratio, this._invEase = v ? this._rEase : this._ease;
        }
        this.ratio = w = this._invRatio + this._invScale * this._invEase((h - this._invTime) * this._invRecip);
      } else
        this.ratio = w = this._ease(h / u);
      if (this._from && (this.ratio = w = 1 - w), this._tTime = d, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), !a && d && !n && !m && (Ce(this, "onStart"), this._tTime !== d))
        return this;
      for (f = this._pt; f; )
        f.r(w, f.d), f = f._next;
      T && T.render(i < 0 ? i : T._dur * T._ease(h / this._dur), n, o) || this._startAt && (this._zTime = i), this._onUpdate && !n && (c && Ss(this, i, n, o), Ce(this, "onUpdate")), this._repeat && _ !== m && this.vars.onRepeat && !n && this.parent && Ce(this, "onRepeat"), (d === this._tDur || !d) && this._tTime === d && (c && !this._onUpdate && Ss(this, i, !0, !0), (i || !u) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && Or(this, 1), !n && !(c && !a) && (d || a || b) && (Ce(this, d === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), s.prototype.invalidate.call(this, i);
  }, e.resetTo = function(i, n, o, a, l) {
    ln || Te.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || to(this, u), c = this._ease(u / this._dur), Tu(this, i, n, o, a, c, u, l) ? this.resetTo(i, n, o, a, 1) : (es(this, 0), this.parent || Ea(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(i, n) {
    if (n === void 0 && (n = "all"), !i && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Ii(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Wt), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, n, br && br.vars.overwrite !== !0)._first || Ii(this), this.parent && o !== this.timeline.totalDuration() && Ci(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, l = i ? Fe(i) : a, u = this._ptLookup, c = this._pt, d, h, f, _, p, m, b;
    if ((!n || n === "all") && tu(a, l))
      return n === "all" && (this._pt = 0), Ii(this);
    for (d = this._op = this._op || [], n !== "all" && (Ft(n) && (p = {}, he(n, function(w) {
      return p[w] = 1;
    }), n = p), n = Eu(a, n)), b = a.length; b--; )
      if (~l.indexOf(a[b])) {
        h = u[b], n === "all" ? (d[b] = n, _ = h, f = {}) : (f = d[b] = d[b] || {}, _ = n);
        for (p in _)
          m = h && h[p], m && ((!("kill" in m.d) || m.d.kill(p) === !0) && jn(this, m, "_pt"), delete h[p]), f !== "all" && (f[p] = 1);
      }
    return this._initted && !this._pt && c && Ii(this), this;
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
    var t = new ce(), e = Es.call(arguments, 0);
    return e.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), t[s].apply(t, e);
  };
});
var eo = function(t, e, r) {
  return t[e] = r;
}, Va = function(t, e, r) {
  return t[e](r);
}, ku = function(t, e, r, i) {
  return t[e](i.fp, r);
}, Pu = function(t, e, r) {
  return t.setAttribute(e, r);
}, ro = function(t, e) {
  return gt(t[e]) ? Va : Us(t[e]) && t.setAttribute ? Pu : eo;
}, qa = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, Mu = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, Ga = function(t, e) {
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
}, io = function(t, e) {
  for (var r = e._pt; r; )
    r.r(t, r.d), r = r._next;
}, Ou = function(t, e, r, i) {
  for (var n = this._pt, o; n; )
    o = n._next, n.p === i && n.modifier(t, e, r), n = o;
}, Du = function(t) {
  for (var e = this._pt, r, i; e; )
    i = e._next, e.p === t && !e.op || e.op === t ? jn(this, e, "_pt") : e.dep || (r = 1), e = i;
  return !r;
}, Ru = function(t, e, r, i) {
  i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
}, Ka = function(t) {
  for (var e = t._pt, r, i, n, o; e; ) {
    for (r = e._next, i = n; i && i.pr > e.pr; )
      i = i._next;
    (e._prev = i ? i._prev : o) ? e._prev._next = e : n = e, (e._next = i) ? i._prev = e : o = e, e = r;
  }
  t._pt = n;
}, de = /* @__PURE__ */ function() {
  function s(e, r, i, n, o, a, l, u, c) {
    this.t = r, this.s = n, this.c = o, this.p = i, this.r = a || qa, this.d = l || this, this.set = u || eo, this.pr = c || 0, this._next = e, e && (e._prev = this);
  }
  var t = s.prototype;
  return t.modifier = function(r, i, n) {
    this.mSet = this.mSet || this.set, this.set = Ru, this.m = r, this.mt = n, this.tween = i;
  }, s;
}();
he(Qs + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(s) {
  return Ks[s] = 1;
});
Me.TweenMax = Me.TweenLite = Ct;
Me.TimelineLite = Me.TimelineMax = ce;
ft = new ce({
  sortChildren: !1,
  defaults: nn,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Pe.stringFilter = Ba;
var Qr = [], Ln = {}, Au = [], ko = 0, Lu = 0, us = function(t) {
  return (Ln[t] || Au).map(function(e) {
    return e();
  });
}, Ms = function() {
  var t = Date.now(), e = [];
  t - ko > 2 && (us("matchMediaInit"), Qr.forEach(function(r) {
    var i = r.queries, n = r.conditions, o, a, l, u;
    for (a in i)
      o = Ge.matchMedia(i[a]).matches, o && (l = 1), o !== n[a] && (n[a] = o, u = 1);
    u && (r.revert(), l && e.push(r));
  }), us("matchMediaRevert"), e.forEach(function(r) {
    return r.onMatch(r, function(i) {
      return r.add(null, i);
    });
  }), ko = t, us("matchMedia"));
}, Qa = /* @__PURE__ */ function() {
  function s(e, r) {
    this.selector = r && Cs(r), this.data = [], this._r = [], this.isReverted = !1, this.id = Lu++, e && this.add(e);
  }
  var t = s.prototype;
  return t.add = function(r, i, n) {
    gt(r) && (n = i, i = r, r = gt);
    var o = this, a = function() {
      var u = lt, c = o.selector, d;
      return u && u !== o && u.data.push(o), n && (o.selector = Cs(n)), lt = o, d = i.apply(o, arguments), gt(d) && o._r.push(d), lt = u, o.selector = c, o.isReverted = !1, d;
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
        u = n.data[l], u instanceof ce ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof Ct) && u.revert && u.revert(r);
      n._r.forEach(function(c) {
        return c(r, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), i)
      for (var o = Qr.length; o--; )
        Qr[o].id === this.id && Qr.splice(o, 1);
  }, t.revert = function(r) {
    this.kill(r || {});
  }, s;
}(), Nu = /* @__PURE__ */ function() {
  function s(e) {
    this.contexts = [], this.scope = e, lt && lt.data.push(this);
  }
  var t = s.prototype;
  return t.add = function(r, i, n) {
    er(r) || (r = {
      matches: r
    });
    var o = new Qa(0, n || this.scope), a = o.conditions = {}, l, u, c;
    lt && !o.selector && (o.selector = lt.selector), this.contexts.push(o), i = o.add("onMatch", i), o.queries = r;
    for (u in r)
      u === "all" ? c = 1 : (l = Ge.matchMedia(r[u]), l && (Qr.indexOf(o) < 0 && Qr.push(o), (a[u] = l.matches) && (c = 1), l.addListener ? l.addListener(Ms) : l.addEventListener("change", Ms)));
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
}(), Vn = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    e.forEach(function(i) {
      return za(i);
    });
  },
  timeline: function(t) {
    return new ce(t);
  },
  getTweensOf: function(t, e) {
    return ft.getTweensOf(t, e);
  },
  getProperty: function(t, e, r, i) {
    Ft(t) && (t = Fe(t)[0]);
    var n = qr(t || {}).get, o = r ? Ta : Sa;
    return r === "native" && (r = ""), t && (e ? o((be[e] && be[e].get || n)(t, e, r, i)) : function(a, l, u) {
      return o((be[a] && be[a].get || n)(t, a, l, u));
    });
  },
  quickSetter: function(t, e, r) {
    if (t = Fe(t), t.length > 1) {
      var i = t.map(function(c) {
        return ge.quickSetter(c, e, r);
      }), n = i.length;
      return function(c) {
        for (var d = n; d--; )
          i[d](c);
      };
    }
    t = t[0] || {};
    var o = be[e], a = qr(t), l = a.harness && (a.harness.aliases || {})[e] || e, u = o ? function(c) {
      var d = new o();
      _i._pt = 0, d.init(t, r ? c + r : c, _i, 0, [t]), d.render(1, d), _i._pt && io(1, _i);
    } : a.set(t, l);
    return o ? u : function(c) {
      return u(t, l, r ? c + r : c, a, 1);
    };
  },
  quickTo: function(t, e, r) {
    var i, n = ge.to(t, Oe((i = {}, i[e] = "+=0.1", i.paused = !0, i.stagger = 0, i), r || {})), o = function(l, u, c) {
      return n.resetTo(e, l, u, c);
    };
    return o.tween = n, o;
  },
  isTweening: function(t) {
    return ft.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = Kr(t.ease, nn.ease)), bo(nn, t || {});
  },
  config: function(t) {
    return bo(Pe, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, r = t.effect, i = t.plugins, n = t.defaults, o = t.extendTimeline;
    (i || "").split(",").forEach(function(a) {
      return a && !be[a] && !Me[a] && sn(e + " effect requires " + a + " plugin.");
    }), ss[e] = function(a, l, u) {
      return r(Fe(a), Oe(l || {}, n), u);
    }, o && (ce.prototype[e] = function(a, l, u) {
      return this.add(ss[e](a, er(l) ? l : (u = l) && {}, this), u);
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
    var r = new ce(t), i, n;
    for (r.smoothChildTiming = fe(t.smoothChildTiming), ft.remove(r), r._dp = 0, r._time = r._tTime = ft._time, i = ft._first; i; )
      n = i._next, (e || !(!i._dur && i instanceof Ct && i.vars.onComplete === i._targets[0])) && Ze(r, i, i._start - i._delay), i = n;
    return Ze(ft, r, 0), r;
  },
  context: function(t, e) {
    return t ? new Qa(t, e) : lt;
  },
  matchMedia: function(t) {
    return new Nu(t);
  },
  matchMediaRefresh: function() {
    return Qr.forEach(function(t) {
      var e = t.conditions, r, i;
      for (i in e)
        e[i] && (e[i] = !1, r = 1);
      r && t.revert();
    }) || Ms();
  },
  addEventListener: function(t, e) {
    var r = Ln[t] || (Ln[t] = []);
    ~r.indexOf(e) || r.push(e);
  },
  removeEventListener: function(t, e) {
    var r = Ln[t], i = r && r.indexOf(e);
    i >= 0 && r.splice(i, 1);
  },
  utils: {
    wrap: hu,
    wrapYoyo: du,
    distribute: Da,
    random: Aa,
    snap: Ra,
    normalize: fu,
    getUnit: Kt,
    clamp: au,
    splitColor: Ia,
    toArray: Fe,
    selector: Cs,
    mapRange: Na,
    pipe: uu,
    unitize: cu,
    interpolate: pu,
    shuffle: Oa
  },
  install: va,
  effects: ss,
  ticker: Te,
  updateRoot: ce.updateRoot,
  plugins: be,
  globalTimeline: ft,
  core: {
    PropTween: de,
    globals: ya,
    Tween: Ct,
    Timeline: ce,
    Animation: un,
    getCache: qr,
    _removeLinkedListItem: jn,
    reverting: function() {
      return Wt;
    },
    context: function(t) {
      return t && lt && (lt.data.push(t), t._ctx = lt), lt;
    },
    suppressOverwrites: function(t) {
      return $s = t;
    }
  }
};
he("to,from,fromTo,delayedCall,set,killTweensOf", function(s) {
  return Vn[s] = Ct[s];
});
Te.add(ce.updateRoot);
_i = Vn.to({}, {
  duration: 0
});
var Fu = function(t, e) {
  for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
    r = r._next;
  return r;
}, zu = function(t, e) {
  var r = t._targets, i, n, o;
  for (i in e)
    for (n = r.length; n--; )
      o = t._ptLookup[n][i], o && (o = o.d) && (o._pt && (o = Fu(o, i)), o && o.modifier && o.modifier(e[i], t, r[n], i));
}, cs = function(t, e) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, n, o) {
      o._onInit = function(a) {
        var l, u;
        if (Ft(n) && (l = {}, he(n, function(c) {
          return l[c] = 1;
        }), n = l), e) {
          l = {};
          for (u in n)
            l[u] = e(n[u]);
          n = l;
        }
        zu(a, n);
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
      Wt ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(t, e) {
    for (var r = e.length; r--; )
      this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
  }
}, cs("roundProps", ks), cs("modifiers"), cs("snap", Ra)) || Vn;
Ct.version = ce.version = ge.version = "3.15.0";
ma = 1;
Vs() && ki();
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
var Po, Sr, vi, no, Ur, Mo, so, Iu = function() {
  return typeof window < "u";
}, dr = {}, Xr = 180 / Math.PI, yi = Math.PI / 180, ai = Math.atan2, Oo = 1e8, oo = /([A-Z])/g, Yu = /(left|right|width|margin|padding|x)/i, Bu = /[\s,\(]\S/, Je = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Os = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Wu = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Xu = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Hu = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, $u = function(t, e) {
  var r = e.s + e.c * t;
  e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
}, Za = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, Ja = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, Uu = function(t, e, r) {
  return t.style[e] = r;
}, Vu = function(t, e, r) {
  return t.style.setProperty(e, r);
}, qu = function(t, e, r) {
  return t._gsap[e] = r;
}, Gu = function(t, e, r) {
  return t._gsap.scaleX = t._gsap.scaleY = r;
}, Ku = function(t, e, r, i, n) {
  var o = t._gsap;
  o.scaleX = o.scaleY = r, o.renderTransform(n, o);
}, Qu = function(t, e, r, i, n) {
  var o = t._gsap;
  o[e] = r, o.renderTransform(n, o);
}, ht = "transform", pe = ht + "Origin", Zu = function s(t, e) {
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
}, ja = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, Ju = function() {
  var t = this.props, e = this.target, r = e.style, i = e._gsap, n, o;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? t[n + 1] === 2 ? e[t[n]](t[n + 2]) : e[t[n]] = t[n + 2] : t[n + 2] ? r[t[n]] = t[n + 2] : r.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(oo, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      i[o] = this.tfm[o];
    i.svg && (i.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = so(), (!n || !n.isStart) && !r[ht] && (ja(r), i.zOrigin && r[pe] && (r[pe] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, tl = function(t, e) {
  var r = {
    target: t,
    props: [],
    revert: Ju,
    save: Zu
  };
  return t._gsap || ge.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(i) {
    return r.save(i);
  }), r;
}, el, Ds = function(t, e) {
  var r = Sr.createElementNS ? Sr.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Sr.createElement(t);
  return r && r.style ? r : Sr.createElement(t);
}, ke = function s(t, e, r) {
  var i = getComputedStyle(t);
  return i[e] || i.getPropertyValue(e.replace(oo, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && s(t, Pi(e) || e, 1) || "";
}, Do = "O,Moz,ms,Ms,Webkit".split(","), Pi = function(t, e, r) {
  var i = e || Ur, n = i.style, o = 5;
  if (t in n && !r)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(Do[o] + t in n); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Do[o] : "") + t;
}, Rs = function() {
  Iu() && window.document && (Po = window, Sr = Po.document, vi = Sr.documentElement, Ur = Ds("div") || {
    style: {}
  }, Ds("div"), ht = Pi(ht), pe = ht + "Origin", Ur.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", el = !!Pi("perspective"), so = ge.core.reverting, no = 1);
}, Ro = function(t) {
  var e = t.ownerSVGElement, r = Ds("svg", e && e.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = t.cloneNode(!0), n;
  i.style.display = "block", r.appendChild(i), vi.appendChild(r);
  try {
    n = i.getBBox();
  } catch {
  }
  return r.removeChild(i), vi.removeChild(r), n;
}, Ao = function(t, e) {
  for (var r = e.length; r--; )
    if (t.hasAttribute(e[r]))
      return t.getAttribute(e[r]);
}, rl = function(t) {
  var e, r;
  try {
    e = t.getBBox();
  } catch {
    e = Ro(t), r = 1;
  }
  return e && (e.width || e.height) || r || (e = Ro(t)), e && !e.width && !e.x && !e.y ? {
    x: +Ao(t, ["x", "cx", "x1"]) || 0,
    y: +Ao(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, il = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && rl(t));
}, Dr = function(t, e) {
  if (e) {
    var r = t.style, i;
    e in dr && e !== pe && (e = ht), r.removeProperty ? (i = e.substr(0, 2), (i === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), r.removeProperty(i === "--" ? e : e.replace(oo, "-$1").toLowerCase())) : r.removeAttribute(e);
  }
}, Tr = function(t, e, r, i, n, o) {
  var a = new de(t._pt, e, r, 0, 1, o ? Ja : Za);
  return t._pt = a, a.b = i, a.e = n, t._props.push(r), a;
}, Lo = {
  deg: 1,
  rad: 1,
  turn: 1
}, ju = {
  grid: 1,
  flex: 1
}, Rr = function s(t, e, r, i) {
  var n = parseFloat(r) || 0, o = (r + "").trim().substr((n + "").length) || "px", a = Ur.style, l = Yu.test(e), u = t.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (l ? "Width" : "Height"), d = 100, h = i === "px", f = i === "%", _, p, m, b;
  if (i === o || !n || Lo[i] || Lo[o])
    return n;
  if (o !== "px" && !h && (n = s(t, e, r, "px")), b = t.getCTM && il(t), (f || o === "%") && (dr[e] || ~e.indexOf("adius")))
    return _ = b ? t.getBBox()[l ? "width" : "height"] : t[c], wt(f ? n / _ * d : n / 100 * _);
  if (a[l ? "width" : "height"] = d + (h ? o : i), p = i !== "rem" && ~e.indexOf("adius") || i === "em" && t.appendChild && !u ? t : t.parentNode, b && (p = (t.ownerSVGElement || {}).parentNode), (!p || p === Sr || !p.appendChild) && (p = Sr.body), m = p._gsap, m && f && m.width && l && m.time === Te.time && !m.uncache)
    return wt(n / m.width * d);
  if (f && (e === "height" || e === "width")) {
    var w = t.style[e];
    t.style[e] = d + i, _ = t[c], w ? t.style[e] = w : Dr(t, e);
  } else
    (f || o === "%") && !ju[ke(p, "display")] && (a.position = ke(t, "position")), p === t && (a.position = "static"), p.appendChild(Ur), _ = Ur[c], p.removeChild(Ur), a.position = "absolute";
  return l && f && (m = qr(p), m.time = Te.time, m.width = p[c]), wt(h ? _ * n / d : _ && n ? d / _ * n : 0);
}, lr = function(t, e, r, i) {
  var n;
  return no || Rs(), e in Je && e !== "transform" && (e = Je[e], ~e.indexOf(",") && (e = e.split(",")[0])), dr[e] && e !== "transform" ? (n = fn(t, i), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : Gn(ke(t, pe)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = qn[e] && qn[e](t, e, r) || ke(t, e) || xa(t, e) || (e === "opacity" ? 1 : 0))), r && !~(n + "").trim().indexOf(" ") ? Rr(t, e, n, r) + r : n;
}, tc = function(t, e, r, i) {
  if (!r || r === "none") {
    var n = Pi(e, t, 1), o = n && ke(t, n, 1);
    o && o !== r ? (e = n, r = o) : e === "borderColor" && (r = ke(t, "borderTopColor"));
  }
  var a = new de(this._pt, t.style, e, 0, 1, Ga), l = 0, u = 0, c, d, h, f, _, p, m, b, w, T, v, S;
  if (a.b = r, a.e = i, r += "", i += "", i.substring(0, 6) === "var(--" && (i = ke(t, i.substring(4, i.indexOf(")")))), i === "auto" && (p = t.style[e], t.style[e] = i, i = ke(t, e) || i, p ? t.style[e] = p : Dr(t, e)), c = [r, i], Ba(c), r = c[0], i = c[1], h = r.match(pi) || [], S = i.match(pi) || [], S.length) {
    for (; d = pi.exec(i); )
      m = d[0], w = i.substring(l, d.index), _ ? _ = (_ + 1) % 5 : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") && (_ = 1), m !== (p = h[u++] || "") && (f = parseFloat(p) || 0, v = p.substr((f + "").length), m.charAt(1) === "=" && (m = mi(f, m) + v), b = parseFloat(m), T = m.substr((b + "").length), l = pi.lastIndex - T.length, T || (T = T || Pe.units[e] || v, l === i.length && (i += T, a.e += T)), v !== T && (f = Rr(t, e, p, T) || 0), a._pt = {
        _next: a._pt,
        p: w || u === 1 ? w : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: f,
        c: b - f,
        m: _ && _ < 4 || e === "zIndex" ? Math.round : 0
      });
    a.c = l < i.length ? i.substring(l, i.length) : "";
  } else
    a.r = e === "display" && i === "none" ? Ja : Za;
  return ga.test(i) && (a.e = 0), this._pt = a, a;
}, No = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, ec = function(t) {
  var e = t.split(" "), r = e[0], i = e[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (t = r, r = i, i = t), e[0] = No[r] || r, e[1] = No[i] || i, e.join(" ");
}, rc = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var r = e.t, i = r.style, n = e.u, o = r._gsap, a, l, u;
    if (n === "all" || n === !0)
      i.cssText = "", l = 1;
    else
      for (n = n.split(","), u = n.length; --u > -1; )
        a = n[u], dr[a] && (l = 1, a = a === "transformOrigin" ? pe : ht), Dr(r, a);
    l && (Dr(r, ht), o && (o.svg && r.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", fn(r, 1), o.uncache = 1, ja(i)));
  }
}, qn = {
  clearProps: function(t, e, r, i, n) {
    if (n.data !== "isFromStart") {
      var o = t._pt = new de(t._pt, e, r, 0, 0, rc);
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
}, cn = [1, 0, 0, 1, 0, 0], nl = {}, sl = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, Fo = function(t) {
  var e = ke(t, ht);
  return sl(e) ? cn : e.substr(7).match(_a).map(wt);
}, ao = function(t, e) {
  var r = t._gsap || qr(t), i = t.style, n = Fo(t), o, a, l, u;
  return r.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix, n = [l.a, l.b, l.c, l.d, l.e, l.f], n.join(",") === "1,0,0,1,0,0" ? cn : n) : (n === cn && !t.offsetParent && t !== vi && !r.svg && (l = i.display, i.display = "block", o = t.parentNode, (!o || !t.offsetParent && !t.getBoundingClientRect().width) && (u = 1, a = t.nextElementSibling, vi.appendChild(t)), n = Fo(t), l ? i.display = l : Dr(t, "display"), u && (a ? o.insertBefore(t, a) : o ? o.appendChild(t) : vi.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, As = function(t, e, r, i, n, o) {
  var a = t._gsap, l = n || ao(t, !0), u = a.xOrigin || 0, c = a.yOrigin || 0, d = a.xOffset || 0, h = a.yOffset || 0, f = l[0], _ = l[1], p = l[2], m = l[3], b = l[4], w = l[5], T = e.split(" "), v = parseFloat(T[0]) || 0, S = parseFloat(T[1]) || 0, k, x, P, C;
  r ? l !== cn && (x = f * m - _ * p) && (P = v * (m / x) + S * (-p / x) + (p * w - m * b) / x, C = v * (-_ / x) + S * (f / x) - (f * w - _ * b) / x, v = P, S = C) : (k = rl(t), v = k.x + (~T[0].indexOf("%") ? v / 100 * k.width : v), S = k.y + (~(T[1] || T[0]).indexOf("%") ? S / 100 * k.height : S)), i || i !== !1 && a.smooth ? (b = v - u, w = S - c, a.xOffset = d + (b * f + w * p) - b, a.yOffset = h + (b * _ + w * m) - w) : a.xOffset = a.yOffset = 0, a.xOrigin = v, a.yOrigin = S, a.smooth = !!i, a.origin = e, a.originIsAbsolute = !!r, t.style[pe] = "0px 0px", o && (Tr(o, a, "xOrigin", u, v), Tr(o, a, "yOrigin", c, S), Tr(o, a, "xOffset", d, a.xOffset), Tr(o, a, "yOffset", h, a.yOffset)), t.setAttribute("data-svg-origin", v + " " + S);
}, fn = function(t, e) {
  var r = t._gsap || new Xa(t);
  if ("x" in r && !e && !r.uncache)
    return r;
  var i = t.style, n = r.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(t), u = ke(t, pe) || "0", c, d, h, f, _, p, m, b, w, T, v, S, k, x, P, C, E, W, O, K, Y, Q, V, L, Z, rt, g, ot, Jt, Ie, dt, zt;
  return c = d = h = p = m = b = w = T = v = 0, f = _ = 1, r.svg = !!(t.getCTM && il(t)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[ht] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[ht] !== "none" ? l[ht] : "")), i.scale = i.rotate = i.translate = "none"), x = ao(t, r.svg), r.svg && (r.uncache ? (Z = t.getBBox(), u = r.xOrigin - Z.x + "px " + (r.yOrigin - Z.y) + "px", L = "") : L = !e && t.getAttribute("data-svg-origin"), As(t, L || u, !!L || r.originIsAbsolute, r.smooth !== !1, x)), S = r.xOrigin || 0, k = r.yOrigin || 0, x !== cn && (W = x[0], O = x[1], K = x[2], Y = x[3], c = Q = x[4], d = V = x[5], x.length === 6 ? (f = Math.sqrt(W * W + O * O), _ = Math.sqrt(Y * Y + K * K), p = W || O ? ai(O, W) * Xr : 0, w = K || Y ? ai(K, Y) * Xr + p : 0, w && (_ *= Math.abs(Math.cos(w * yi))), r.svg && (c -= S - (S * W + k * K), d -= k - (S * O + k * Y))) : (zt = x[6], Ie = x[7], g = x[8], ot = x[9], Jt = x[10], dt = x[11], c = x[12], d = x[13], h = x[14], P = ai(zt, Jt), m = P * Xr, P && (C = Math.cos(-P), E = Math.sin(-P), L = Q * C + g * E, Z = V * C + ot * E, rt = zt * C + Jt * E, g = Q * -E + g * C, ot = V * -E + ot * C, Jt = zt * -E + Jt * C, dt = Ie * -E + dt * C, Q = L, V = Z, zt = rt), P = ai(-K, Jt), b = P * Xr, P && (C = Math.cos(-P), E = Math.sin(-P), L = W * C - g * E, Z = O * C - ot * E, rt = K * C - Jt * E, dt = Y * E + dt * C, W = L, O = Z, K = rt), P = ai(O, W), p = P * Xr, P && (C = Math.cos(P), E = Math.sin(P), L = W * C + O * E, Z = Q * C + V * E, O = O * C - W * E, V = V * C - Q * E, W = L, Q = Z), m && Math.abs(m) + Math.abs(p) > 359.9 && (m = p = 0, b = 180 - b), f = wt(Math.sqrt(W * W + O * O + K * K)), _ = wt(Math.sqrt(V * V + zt * zt)), P = ai(Q, V), w = Math.abs(P) > 2e-4 ? P * Xr : 0, v = dt ? 1 / (dt < 0 ? -dt : dt) : 0), r.svg && (L = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !sl(ke(t, ht)), L && t.setAttribute("transform", L))), Math.abs(w) > 90 && Math.abs(w) < 270 && (n ? (f *= -1, w += p <= 0 ? 180 : -180, p += p <= 0 ? 180 : -180) : (_ *= -1, w += w <= 0 ? 180 : -180)), e = e || r.uncache, r.x = c - ((r.xPercent = c && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + o, r.y = d - ((r.yPercent = d && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-d) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + o, r.z = h + o, r.scaleX = wt(f), r.scaleY = wt(_), r.rotation = wt(p) + a, r.rotationX = wt(m) + a, r.rotationY = wt(b) + a, r.skewX = w + a, r.skewY = T + a, r.transformPerspective = v + o, (r.zOrigin = parseFloat(u.split(" ")[2]) || !e && r.zOrigin || 0) && (i[pe] = Gn(u)), r.xOffset = r.yOffset = 0, r.force3D = Pe.force3D, r.renderTransform = r.svg ? nc : el ? ol : ic, r.uncache = 0, r;
}, Gn = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, fs = function(t, e, r) {
  var i = Kt(e);
  return wt(parseFloat(e) + parseFloat(Rr(t, "x", r + "px", i))) + i;
}, ic = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, ol(t, e);
}, Br = "0deg", Ni = "0px", Wr = ") ", ol = function(t, e) {
  var r = e || this, i = r.xPercent, n = r.yPercent, o = r.x, a = r.y, l = r.z, u = r.rotation, c = r.rotationY, d = r.rotationX, h = r.skewX, f = r.skewY, _ = r.scaleX, p = r.scaleY, m = r.transformPerspective, b = r.force3D, w = r.target, T = r.zOrigin, v = "", S = b === "auto" && t && t !== 1 || b === !0;
  if (T && (d !== Br || c !== Br)) {
    var k = parseFloat(c) * yi, x = Math.sin(k), P = Math.cos(k), C;
    k = parseFloat(d) * yi, C = Math.cos(k), o = fs(w, o, x * C * -T), a = fs(w, a, -Math.sin(k) * -T), l = fs(w, l, P * C * -T + T);
  }
  m !== Ni && (v += "perspective(" + m + Wr), (i || n) && (v += "translate(" + i + "%, " + n + "%) "), (S || o !== Ni || a !== Ni || l !== Ni) && (v += l !== Ni || S ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Wr), u !== Br && (v += "rotate(" + u + Wr), c !== Br && (v += "rotateY(" + c + Wr), d !== Br && (v += "rotateX(" + d + Wr), (h !== Br || f !== Br) && (v += "skew(" + h + ", " + f + Wr), (_ !== 1 || p !== 1) && (v += "scale(" + _ + ", " + p + Wr), w.style[ht] = v || "translate(0, 0)";
}, nc = function(t, e) {
  var r = e || this, i = r.xPercent, n = r.yPercent, o = r.x, a = r.y, l = r.rotation, u = r.skewX, c = r.skewY, d = r.scaleX, h = r.scaleY, f = r.target, _ = r.xOrigin, p = r.yOrigin, m = r.xOffset, b = r.yOffset, w = r.forceCSS, T = parseFloat(o), v = parseFloat(a), S, k, x, P, C;
  l = parseFloat(l), u = parseFloat(u), c = parseFloat(c), c && (c = parseFloat(c), u += c, l += c), l || u ? (l *= yi, u *= yi, S = Math.cos(l) * d, k = Math.sin(l) * d, x = Math.sin(l - u) * -h, P = Math.cos(l - u) * h, u && (c *= yi, C = Math.tan(u - c), C = Math.sqrt(1 + C * C), x *= C, P *= C, c && (C = Math.tan(c), C = Math.sqrt(1 + C * C), S *= C, k *= C)), S = wt(S), k = wt(k), x = wt(x), P = wt(P)) : (S = d, P = h, k = x = 0), (T && !~(o + "").indexOf("px") || v && !~(a + "").indexOf("px")) && (T = Rr(f, "x", o, "px"), v = Rr(f, "y", a, "px")), (_ || p || m || b) && (T = wt(T + _ - (_ * S + p * x) + m), v = wt(v + p - (_ * k + p * P) + b)), (i || n) && (C = f.getBBox(), T = wt(T + i / 100 * C.width), v = wt(v + n / 100 * C.height)), C = "matrix(" + S + "," + k + "," + x + "," + P + "," + T + "," + v + ")", f.setAttribute("transform", C), w && (f.style[ht] = C);
}, sc = function(t, e, r, i, n) {
  var o = 360, a = Ft(n), l = parseFloat(n) * (a && ~n.indexOf("rad") ? Xr : 1), u = l - i, c = i + u + "deg", d, h;
  return a && (d = n.split("_")[1], d === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -o)), d === "cw" && u < 0 ? u = (u + o * Oo) % o - ~~(u / o) * o : d === "ccw" && u > 0 && (u = (u - o * Oo) % o - ~~(u / o) * o)), t._pt = h = new de(t._pt, e, r, i, u, Wu), h.e = c, h.u = "deg", t._props.push(r), h;
}, zo = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, oc = function(t, e, r) {
  var i = zo({}, r._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", o = r.style, a, l, u, c, d, h, f, _;
  i.svg ? (u = r.getAttribute("transform"), r.setAttribute("transform", ""), o[ht] = e, a = fn(r, 1), Dr(r, ht), r.setAttribute("transform", u)) : (u = getComputedStyle(r)[ht], o[ht] = e, a = fn(r, 1), o[ht] = u);
  for (l in dr)
    u = i[l], c = a[l], u !== c && n.indexOf(l) < 0 && (f = Kt(u), _ = Kt(c), d = f !== _ ? Rr(r, l, u, _) : parseFloat(u), h = parseFloat(c), t._pt = new de(t._pt, a, l, d, h - d, Os), t._pt.u = _ || 0, t._props.push(l));
  zo(a, i);
};
he("padding,margin,Width,Radius", function(s, t) {
  var e = "Top", r = "Right", i = "Bottom", n = "Left", o = (t < 3 ? [e, r, i, n] : [e + n, e + r, i + r, i + n]).map(function(a) {
    return t < 2 ? s + a : "border" + a + s;
  });
  qn[t > 1 ? "border" + s : s] = function(a, l, u, c, d) {
    var h, f;
    if (arguments.length < 4)
      return h = o.map(function(_) {
        return lr(a, _, u);
      }), f = h.join(" "), f.split(h[0]).length === 5 ? h[0] : f;
    h = (c + "").split(" "), f = {}, o.forEach(function(_, p) {
      return f[_] = h[p] = h[p] || h[(p - 1) / 2 | 0];
    }), a.init(l, f, d);
  };
});
var al = {
  name: "css",
  register: Rs,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, r, i, n) {
    var o = this._props, a = t.style, l = r.vars.startAt, u, c, d, h, f, _, p, m, b, w, T, v, S, k, x, P, C;
    no || Rs(), this.styles = this.styles || tl(t), P = this.styles.props, this.tween = r;
    for (p in e)
      if (p !== "autoRound" && (c = e[p], !(be[p] && Ha(p, e, r, i, t, n)))) {
        if (f = typeof c, _ = qn[p], f === "function" && (c = c.call(r, i, t, n), f = typeof c), f === "string" && ~c.indexOf("random(") && (c = an(c)), _)
          _(this, t, p, c, r) && (x = 1);
        else if (p.substr(0, 2) === "--")
          u = (getComputedStyle(t).getPropertyValue(p) + "").trim(), c += "", Pr.lastIndex = 0, Pr.test(u) || (m = Kt(u), b = Kt(c), b ? m !== b && (u = Rr(t, p, u, b) + b) : m && (c += m)), this.add(a, "setProperty", u, c, i, n, 0, 0, p), o.push(p), P.push(p, 0, a[p]);
        else if (f !== "undefined") {
          if (l && p in l ? (u = typeof l[p] == "function" ? l[p].call(r, i, t, n) : l[p], Ft(u) && ~u.indexOf("random(") && (u = an(u)), Kt(u + "") || u === "auto" || (u += Pe.units[p] || Kt(lr(t, p)) || ""), (u + "").charAt(1) === "=" && (u = lr(t, p))) : u = lr(t, p), h = parseFloat(u), w = f === "string" && c.charAt(1) === "=" && c.substr(0, 2), w && (c = c.substr(2)), d = parseFloat(c), p in Je && (p === "autoAlpha" && (h === 1 && lr(t, "visibility") === "hidden" && d && (h = 0), P.push("visibility", 0, a.visibility), Tr(this, a, "visibility", h ? "inherit" : "hidden", d ? "inherit" : "hidden", !d)), p !== "scale" && p !== "transform" && (p = Je[p], ~p.indexOf(",") && (p = p.split(",")[0]))), T = p in dr, T) {
            if (this.styles.save(p), C = c, f === "string" && c.substring(0, 6) === "var(--") {
              if (c = ke(t, c.substring(4, c.indexOf(")"))), c.substring(0, 5) === "calc(") {
                var E = t.style.perspective;
                t.style.perspective = c, c = ke(t, "perspective"), E ? t.style.perspective = E : Dr(t, "perspective");
              }
              d = parseFloat(c);
            }
            if (v || (S = t._gsap, S.renderTransform && !e.parseTransform || fn(t, e.parseTransform), k = e.smoothOrigin !== !1 && S.smooth, v = this._pt = new de(this._pt, a, ht, 0, 1, S.renderTransform, S, 0, -1), v.dep = 1), p === "scale")
              this._pt = new de(this._pt, S, "scaleY", S.scaleY, (w ? mi(S.scaleY, w + d) : d) - S.scaleY || 0, Os), this._pt.u = 0, o.push("scaleY", p), p += "X";
            else if (p === "transformOrigin") {
              P.push(pe, 0, a[pe]), c = ec(c), S.svg ? As(t, c, 0, k, 0, this) : (b = parseFloat(c.split(" ")[2]) || 0, b !== S.zOrigin && Tr(this, S, "zOrigin", S.zOrigin, b), Tr(this, a, p, Gn(u), Gn(c)));
              continue;
            } else if (p === "svgOrigin") {
              As(t, c, 1, k, 0, this);
              continue;
            } else if (p in nl) {
              sc(this, S, p, h, w ? mi(h, w + c) : c);
              continue;
            } else if (p === "smoothOrigin") {
              Tr(this, S, "smooth", S.smooth, c);
              continue;
            } else if (p === "force3D") {
              S[p] = c;
              continue;
            } else if (p === "transform") {
              oc(this, c, t);
              continue;
            }
          } else p in a || (p = Pi(p) || p);
          if (T || (d || d === 0) && (h || h === 0) && !Bu.test(c) && p in a)
            m = (u + "").substr((h + "").length), d || (d = 0), b = Kt(c) || (p in Pe.units ? Pe.units[p] : m), m !== b && (h = Rr(t, p, u, b)), this._pt = new de(this._pt, T ? S : a, p, h, (w ? mi(h, w + d) : d) - h, !T && (b === "px" || p === "zIndex") && e.autoRound !== !1 ? $u : Os), this._pt.u = b || 0, T && C !== c ? (this._pt.b = u, this._pt.e = C, this._pt.r = Hu) : m !== b && b !== "%" && (this._pt.b = u, this._pt.r = Xu);
          else if (p in a)
            tc.call(this, t, p, u, w ? w + c : c);
          else if (p in t)
            this.add(t, p, u || t[p], w ? w + c : c, i, n);
          else if (p !== "parseTransform") {
            Gs(p, c);
            continue;
          }
          T || (p in a ? P.push(p, 0, a[p]) : typeof t[p] == "function" ? P.push(p, 2, t[p]()) : P.push(p, 1, u || t[p])), o.push(p);
        }
      }
    x && Ka(this);
  },
  render: function(t, e) {
    if (e.tween._time || !so())
      for (var r = e._pt; r; )
        r.r(t, r.d), r = r._next;
    else
      e.styles.revert();
  },
  get: lr,
  aliases: Je,
  getSetter: function(t, e, r) {
    var i = Je[e];
    return i && i.indexOf(",") < 0 && (e = i), e in dr && e !== pe && (t._gsap.x || lr(t, "x")) ? r && Mo === r ? e === "scale" ? Gu : qu : (Mo = r || {}) && (e === "scale" ? Ku : Qu) : t.style && !Us(t.style[e]) ? Uu : ~e.indexOf("-") ? Vu : ro(t, e);
  },
  core: {
    _removeProperty: Dr,
    _getMatrix: ao
  }
};
ge.utils.checkPrefix = Pi;
ge.core.getStyleSaver = tl;
(function(s, t, e, r) {
  var i = he(s + "," + t + "," + e, function(n) {
    dr[n] = 1;
  });
  he(t, function(n) {
    Pe.units[n] = "deg", nl[n] = 1;
  }), Je[i[13]] = s + "," + t, he(r, function(n) {
    var o = n.split(":");
    Je[o[1]] = i[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
he("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s) {
  Pe.units[s] = "px";
});
ge.registerPlugin(al);
var Mt = ge.registerPlugin(al) || ge;
Mt.core.Tween;
function ac(s, t) {
  for (var e = 0; e < t.length; e++) {
    var r = t[e];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(s, r.key, r);
  }
}
function lc(s, t, e) {
  return t && ac(s.prototype, t), s;
}
/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Bt, Nn, Ee, Er, Cr, wi, ll, Hr, xi, ul, cr, $e, cl, fl = function() {
  return Bt || typeof window < "u" && (Bt = window.gsap) && Bt.registerPlugin && Bt;
}, hl = 1, gi = [], $ = [], tr = [], Gi = Date.now, Ls = function(t, e) {
  return e;
}, uc = function() {
  var t = xi.core, e = t.bridge || {}, r = t._scrollers, i = t._proxies;
  r.push.apply(r, $), i.push.apply(i, tr), $ = r, tr = i, Ls = function(o, a) {
    return e[o](a);
  };
}, Mr = function(t, e) {
  return ~tr.indexOf(t) && tr[tr.indexOf(t) + 1][e];
}, Ki = function(t) {
  return !!~ul.indexOf(t);
}, ie = function(t, e, r, i, n) {
  return t.addEventListener(e, r, {
    passive: i !== !1,
    capture: !!n
  });
}, re = function(t, e, r, i) {
  return t.removeEventListener(e, r, !!i);
}, wn = "scrollLeft", xn = "scrollTop", Ns = function() {
  return cr && cr.isPressed || $.cache++;
}, Kn = function(t, e) {
  var r = function i(n) {
    if (n || n === 0) {
      hl && (Ee.history.scrollRestoration = "manual");
      var o = cr && cr.isPressed;
      n = i.v = Math.round(n) || (cr && cr.iOS ? 1 : 0), t(n), i.cacheID = $.cache, o && Ls("ss", n);
    } else (e || $.cache !== i.cacheID || Ls("ref")) && (i.cacheID = $.cache, i.v = t());
    return i.v + i.offset;
  };
  return r.offset = 0, t && r;
}, ae = {
  s: wn,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: Kn(function(s) {
    return arguments.length ? Ee.scrollTo(s, Ot.sc()) : Ee.pageXOffset || Er[wn] || Cr[wn] || wi[wn] || 0;
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
  sc: Kn(function(s) {
    return arguments.length ? Ee.scrollTo(ae.sc(), s) : Ee.pageYOffset || Er[xn] || Cr[xn] || wi[xn] || 0;
  })
}, ue = function(t, e) {
  return (e && e._ctx && e._ctx.selector || Bt.utils.toArray)(t)[0] || (typeof t == "string" && Bt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", t) : null);
}, cc = function(t, e) {
  for (var r = e.length; r--; )
    if (e[r] === t || e[r].contains(t))
      return !0;
  return !1;
}, Ar = function(t, e) {
  var r = e.s, i = e.sc;
  Ki(t) && (t = Er.scrollingElement || Cr);
  var n = $.indexOf(t), o = i === Ot.sc ? 1 : 2;
  !~n && (n = $.push(t) - 1), $[n + o] || ie(t, "scroll", Ns);
  var a = $[n + o], l = a || ($[n + o] = Kn(Mr(t, r), !0) || (Ki(t) ? i : Kn(function(u) {
    return arguments.length ? t[r] = u : t[r];
  })));
  return l.target = t, a || (l.smooth = Bt.getProperty(t, "scrollBehavior") === "smooth"), l;
}, Fs = function(t, e, r) {
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
}, Fi = function(t, e) {
  return e && !t._gsapAllow && t.cancelable !== !1 && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t;
}, Io = function(t) {
  var e = Math.max.apply(Math, t), r = Math.min.apply(Math, t);
  return Math.abs(e) >= Math.abs(r) ? e : r;
}, dl = function() {
  xi = Bt.core.globals().ScrollTrigger, xi && xi.core && uc();
}, pl = function(t) {
  return Bt = t || fl(), !Nn && Bt && typeof document < "u" && document.body && (Ee = window, Er = document, Cr = Er.documentElement, wi = Er.body, ul = [Ee, Er, Cr, wi], Bt.utils.clamp, cl = Bt.core.context || function() {
  }, Hr = "onpointerenter" in wi ? "pointer" : "mouse", ll = xt.isTouch = Ee.matchMedia && Ee.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Ee || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, $e = xt.eventTypes = ("ontouchstart" in Cr ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Cr ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return hl = 0;
  }, 500), Nn = 1), xi || dl(), Nn;
};
ae.op = Ot;
$.cache = 0;
var xt = /* @__PURE__ */ function() {
  function s(e) {
    this.init(e);
  }
  var t = s.prototype;
  return t.init = function(r) {
    Nn || pl(Bt) || console.warn("Please gsap.registerPlugin(Observer)"), xi || dl();
    var i = r.tolerance, n = r.dragMinimum, o = r.type, a = r.target, l = r.lineHeight, u = r.debounce, c = r.preventDefault, d = r.onStop, h = r.onStopDelay, f = r.ignore, _ = r.wheelSpeed, p = r.event, m = r.onDragStart, b = r.onDragEnd, w = r.onDrag, T = r.onPress, v = r.onRelease, S = r.onRight, k = r.onLeft, x = r.onUp, P = r.onDown, C = r.onChangeX, E = r.onChangeY, W = r.onChange, O = r.onToggleX, K = r.onToggleY, Y = r.onHover, Q = r.onHoverEnd, V = r.onMove, L = r.ignoreCheck, Z = r.isNormalizer, rt = r.onGestureStart, g = r.onGestureEnd, ot = r.onWheel, Jt = r.onEnable, Ie = r.onDisable, dt = r.onClick, zt = r.scrollSpeed, Xt = r.capture, St = r.allowClicks, jt = r.lockAxis, Ht = r.onLockAxis;
    this.target = a = ue(a) || Cr, this.vars = r, f && (f = Bt.utils.toArray(f)), i = i || 1e-9, n = n || 0, _ = _ || 1, zt = zt || 1, o = o || "wheel,touch,pointer", u = u !== !1, l || (l = parseFloat(Ee.getComputedStyle(wi).lineHeight) || 22);
    var pr, te, ee, J, mt, le, me, y = this, ve = 0, rr = 0, _r = r.passive || !c && r.passive !== !1, pt = Ar(a, ae), ir = Ar(a, Ot), gr = pt(), Nr = ir(), Dt = ~o.indexOf("touch") && !~o.indexOf("pointer") && $e[0] === "pointerdown", mr = Ki(a), vt = a.ownerDocument || Er, Ye = [0, 0, 0], De = [0, 0, 0], nr = 0, Di = function() {
      return nr = Gi();
    }, Tt = function(N, j) {
      return (y.event = N) && f && cc(N.target, f) || j && Dt && N.pointerType !== "touch" || L && L(N, j);
    }, gn = function() {
      y._vx.reset(), y._vy.reset(), te.pause(), d && d(y);
    }, sr = function() {
      var N = y.deltaX = Io(Ye), j = y.deltaY = Io(De), M = Math.abs(N) >= i, F = Math.abs(j) >= i;
      W && (M || F) && W(y, N, j, Ye, De), M && (S && y.deltaX > 0 && S(y), k && y.deltaX < 0 && k(y), C && C(y), O && y.deltaX < 0 != ve < 0 && O(y), ve = y.deltaX, Ye[0] = Ye[1] = Ye[2] = 0), F && (P && y.deltaY > 0 && P(y), x && y.deltaY < 0 && x(y), E && E(y), K && y.deltaY < 0 != rr < 0 && K(y), rr = y.deltaY, De[0] = De[1] = De[2] = 0), (J || ee) && (V && V(y), ee && (m && ee === 1 && m(y), w && w(y), ee = 0), J = !1), le && !(le = !1) && Ht && Ht(y), mt && (ot(y), mt = !1), pr = 0;
    }, ni = function(N, j, M) {
      Ye[M] += N, De[M] += j, y._vx.update(N), y._vy.update(j), u ? pr || (pr = requestAnimationFrame(sr)) : sr();
    }, si = function(N, j) {
      jt && !me && (y.axis = me = Math.abs(N) > Math.abs(j) ? "x" : "y", le = !0), me !== "y" && (Ye[2] += N, y._vx.update(N, !0)), me !== "x" && (De[2] += j, y._vy.update(j, !0)), u ? pr || (pr = requestAnimationFrame(sr)) : sr();
    }, vr = function(N) {
      if (!Tt(N, 1)) {
        N = Fi(N, c);
        var j = N.clientX, M = N.clientY, F = j - y.x, A = M - y.y, z = y.isDragging;
        y.x = j, y.y = M, (z || (F || A) && (Math.abs(y.startX - j) >= n || Math.abs(y.startY - M) >= n)) && (ee || (ee = z ? 2 : 1), z || (y.isDragging = !0), si(F, A));
      }
    }, Fr = y.onPress = function(B) {
      Tt(B, 1) || B && B.button || (y.axis = me = null, te.pause(), y.isPressed = !0, B = Fi(B), ve = rr = 0, y.startX = y.x = B.clientX, y.startY = y.y = B.clientY, y._vx.reset(), y._vy.reset(), ie(Z ? a : vt, $e[1], vr, _r, !0), y.deltaX = y.deltaY = 0, T && T(y));
    }, U = y.onRelease = function(B) {
      if (!Tt(B, 1)) {
        re(Z ? a : vt, $e[1], vr, !0);
        var N = !isNaN(y.y - y.startY), j = y.isDragging, M = j && (Math.abs(y.x - y.startX) > 3 || Math.abs(y.y - y.startY) > 3), F = Fi(B);
        !M && N && (y._vx.reset(), y._vy.reset(), c && St && Bt.delayedCall(0.08, function() {
          if (Gi() - nr > 300 && !B.defaultPrevented) {
            if (B.target.click)
              B.target.click();
            else if (vt.createEvent) {
              var A = vt.createEvent("MouseEvents");
              A.initMouseEvent("click", !0, !0, Ee, 1, F.screenX, F.screenY, F.clientX, F.clientY, !1, !1, !1, !1, 0, null), B.target.dispatchEvent(A);
            }
          }
        })), y.isDragging = y.isGesturing = y.isPressed = !1, d && j && !Z && te.restart(!0), ee && sr(), b && j && b(y), v && v(y, M);
      }
    }, zr = function(N) {
      return N.touches && N.touches.length > 1 && (y.isGesturing = !0) && rt(N, y.isDragging);
    }, Be = function() {
      return (y.isGesturing = !1) || g(y);
    }, We = function(N) {
      if (!Tt(N)) {
        var j = pt(), M = ir();
        ni((j - gr) * zt, (M - Nr) * zt, 1), gr = j, Nr = M, d && te.restart(!0);
      }
    }, Xe = function(N) {
      if (!Tt(N)) {
        N = Fi(N, c), ot && (mt = !0);
        var j = (N.deltaMode === 1 ? l : N.deltaMode === 2 ? Ee.innerHeight : 1) * _;
        ni(N.deltaX * j, N.deltaY * j, 0), d && !Z && te.restart(!0);
      }
    }, Ir = function(N) {
      if (!Tt(N)) {
        var j = N.clientX, M = N.clientY, F = j - y.x, A = M - y.y;
        y.x = j, y.y = M, J = !0, d && te.restart(!0), (F || A) && si(F, A);
      }
    }, oi = function(N) {
      y.event = N, Y(y);
    }, or = function(N) {
      y.event = N, Q(y);
    }, Ri = function(N) {
      return Tt(N) || Fi(N, c) && dt(y);
    };
    te = y._dc = Bt.delayedCall(h || 0.25, gn).pause(), y.deltaX = y.deltaY = 0, y._vx = Fs(0, 50, !0), y._vy = Fs(0, 50, !0), y.scrollX = pt, y.scrollY = ir, y.isDragging = y.isGesturing = y.isPressed = !1, cl(this), y.enable = function(B) {
      return y.isEnabled || (ie(mr ? vt : a, "scroll", Ns), o.indexOf("scroll") >= 0 && ie(mr ? vt : a, "scroll", We, _r, Xt), o.indexOf("wheel") >= 0 && ie(a, "wheel", Xe, _r, Xt), (o.indexOf("touch") >= 0 && ll || o.indexOf("pointer") >= 0) && (ie(a, $e[0], Fr, _r, Xt), ie(vt, $e[2], U), ie(vt, $e[3], U), St && ie(a, "click", Di, !0, !0), dt && ie(a, "click", Ri), rt && ie(vt, "gesturestart", zr), g && ie(vt, "gestureend", Be), Y && ie(a, Hr + "enter", oi), Q && ie(a, Hr + "leave", or), V && ie(a, Hr + "move", Ir)), y.isEnabled = !0, y.isDragging = y.isGesturing = y.isPressed = J = ee = !1, y._vx.reset(), y._vy.reset(), gr = pt(), Nr = ir(), B && B.type && Fr(B), Jt && Jt(y)), y;
    }, y.disable = function() {
      y.isEnabled && (gi.filter(function(B) {
        return B !== y && Ki(B.target);
      }).length || re(mr ? vt : a, "scroll", Ns), y.isPressed && (y._vx.reset(), y._vy.reset(), re(Z ? a : vt, $e[1], vr, !0)), re(mr ? vt : a, "scroll", We, Xt), re(a, "wheel", Xe, Xt), re(a, $e[0], Fr, Xt), re(vt, $e[2], U), re(vt, $e[3], U), re(a, "click", Di, !0), re(a, "click", Ri), re(vt, "gesturestart", zr), re(vt, "gestureend", Be), re(a, Hr + "enter", oi), re(a, Hr + "leave", or), re(a, Hr + "move", Ir), y.isEnabled = y.isPressed = y.isDragging = !1, Ie && Ie(y));
    }, y.kill = y.revert = function() {
      y.disable();
      var B = gi.indexOf(y);
      B >= 0 && gi.splice(B, 1), cr === y && (cr = 0);
    }, gi.push(y), Z && Ki(a) && (cr = y), y.enable(p);
  }, lc(s, [{
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
xt.register = pl;
xt.getAll = function() {
  return gi.slice();
};
xt.getById = function(s) {
  return gi.filter(function(t) {
    return t.vars.id === s;
  })[0];
};
fl() && Bt.registerPlugin(xt);
/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var D, hi, H, et, Se, tt, lo, Qn, hn, Qi, Bi, bn, qt, rs, zs, se, Yo, Bo, di, _l, hs, gl, ne, Is, ml, vl, xr, Ys, uo, bi, co, Zi, Bs, ds, Sn = 1, Gt = Date.now, ps = Gt(), ze = 0, Wi = 0, Wo = function(t, e, r) {
  var i = xe(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
  return r["_" + e + "Clamp"] = i, i ? t.substr(6, t.length - 7) : t;
}, Xo = function(t, e) {
  return e && (!xe(t) || t.substr(0, 6) !== "clamp(") ? "clamp(" + t + ")" : t;
}, fc = function s() {
  return Wi && requestAnimationFrame(s);
}, Ho = function() {
  return rs = 1;
}, $o = function() {
  return rs = 0;
}, Ke = function(t) {
  return t;
}, Xi = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, yl = function() {
  return typeof window < "u";
}, wl = function() {
  return D || yl() && (D = window.gsap) && D.registerPlugin && D;
}, ti = function(t) {
  return !!~lo.indexOf(t);
}, xl = function(t) {
  return (t === "Height" ? co : H["inner" + t]) || Se["client" + t] || tt["client" + t];
}, bl = function(t) {
  return Mr(t, "getBoundingClientRect") || (ti(t) ? function() {
    return Bn.width = H.innerWidth, Bn.height = co, Bn;
  } : function() {
    return ur(t);
  });
}, hc = function(t, e, r) {
  var i = r.d, n = r.d2, o = r.a;
  return (o = Mr(t, "getBoundingClientRect")) ? function() {
    return o()[i];
  } : function() {
    return (e ? xl(n) : t["client" + n]) || 0;
  };
}, dc = function(t, e) {
  return !e || ~tr.indexOf(t) ? bl(t) : function() {
    return Bn;
  };
}, je = function(t, e) {
  var r = e.s, i = e.d2, n = e.d, o = e.a;
  return Math.max(0, (r = "scroll" + i) && (o = Mr(t, r)) ? o() - bl(t)()[n] : ti(t) ? (Se[r] || tt[r]) - xl(i) : t[r] - t["offset" + i]);
}, Tn = function(t, e) {
  for (var r = 0; r < di.length; r += 3)
    (!e || ~e.indexOf(di[r + 1])) && t(di[r], di[r + 1], di[r + 2]);
}, xe = function(t) {
  return typeof t == "string";
}, Qt = function(t) {
  return typeof t == "function";
}, Hi = function(t) {
  return typeof t == "number";
}, $r = function(t) {
  return typeof t == "object";
}, zi = function(t, e, r) {
  return t && t.progress(e ? 0 : 1) && r && t.pause();
}, li = function(t, e, r) {
  if (t.enabled) {
    var i = t._ctx ? t._ctx.add(function() {
      return e(t, r);
    }) : e(t, r);
    i && i.totalTime && (t.callbackAnimation = i);
  }
}, ui = Math.abs, Sl = "left", Tl = "top", fo = "right", ho = "bottom", Zr = "width", Jr = "height", Ji = "Right", ji = "Left", tn = "Top", en = "Bottom", Et = "padding", Ae = "margin", Mi = "Width", po = "Height", Pt = "px", Le = function(t) {
  return H.getComputedStyle(t.nodeType === Node.DOCUMENT_NODE ? t.scrollingElement : t);
}, pc = function(t) {
  var e = Le(t).position;
  t.style.position = e === "absolute" || e === "fixed" ? e : "relative";
}, Uo = function(t, e) {
  for (var r in e)
    r in t || (t[r] = e[r]);
  return t;
}, ur = function(t, e) {
  var r = e && Le(t)[zs] !== "matrix(1, 0, 0, 1, 0, 0)" && D.to(t, {
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
}, Zn = function(t, e) {
  var r = e.d2;
  return t["offset" + r] || t["client" + r] || 0;
}, El = function(t) {
  var e = [], r = t.labels, i = t.duration(), n;
  for (n in r)
    e.push(r[n] / i);
  return e;
}, _c = function(t) {
  return function(e) {
    return D.utils.snap(El(t), e);
  };
}, _o = function(t) {
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
}, gc = function(t) {
  return function(e, r) {
    return _o(El(t))(e, r.direction);
  };
}, En = function(t, e, r, i) {
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
}, Cn = function(t, e, r) {
  r = r && r.wheelHandler, r && (t(e, "wheel", r), t(e, "touchmove", r));
}, Vo = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, kn = {
  toggleActions: "play",
  anticipatePin: 0
}, Jn = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, Fn = function(t, e) {
  if (xe(t)) {
    var r = t.indexOf("="), i = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
    ~r && (t.indexOf("%") > r && (i *= e / 100), t = t.substr(0, r - 1)), t = i + (t in Jn ? Jn[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0);
  }
  return t;
}, Pn = function(t, e, r, i, n, o, a, l) {
  var u = n.startColor, c = n.endColor, d = n.fontSize, h = n.indent, f = n.fontWeight, _ = et.createElement("div"), p = ti(r) || Mr(r, "pinType") === "fixed", m = t.indexOf("scroller") !== -1, b = p ? tt : r.tagName === "IFRAME" ? r.contentDocument.body : r, w = t.indexOf("start") !== -1, T = w ? u : c, v = "border-color:" + T + ";font-size:" + d + ";color:" + T + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return v += "position:" + ((m || l) && p ? "fixed;" : "absolute;"), (m || l || !p) && (v += (i === Ot ? fo : ho) + ":" + (o + parseFloat(h)) + "px;"), a && (v += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), _._isStart = w, _.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), _.style.cssText = v, _.innerText = e || e === 0 ? t + "-" + e : t, b.children[0] ? b.insertBefore(_, b.children[0]) : b.appendChild(_), _._offset = _["offset" + i.op.d2], zn(_, 0, i, w), _;
}, zn = function(t, e, r, i) {
  var n = {
    display: "block"
  }, o = r[i ? "os2" : "p2"], a = r[i ? "p2" : "os2"];
  t._isFlipped = i, n[r.a + "Percent"] = i ? -100 : 0, n[r.a] = i ? "1px" : 0, n["border" + o + Mi] = 1, n["border" + a + Mi] = 0, n[r.p] = e + "px", D.set(t, n);
}, X = [], Ws = {}, dn, qo = function() {
  return Gt() - ze > 34 && (dn || (dn = requestAnimationFrame(fr)));
}, ci = function() {
  (!ne || !ne.isPressed || ne.startX > tt.clientWidth) && ($.cache++, ne ? dn || (dn = requestAnimationFrame(fr)) : fr(), ze || ri("scrollStart"), ze = Gt());
}, _s = function() {
  vl = H.innerWidth, ml = H.innerHeight;
}, $i = function(t) {
  $.cache++, (t === !0 || !qt && !gl && !et.fullscreenElement && !et.webkitFullscreenElement && (!Is || vl !== H.innerWidth || Math.abs(H.innerHeight - ml) > H.innerHeight * 0.25)) && Qn.restart(!0);
}, ei = {}, mc = [], Cl = function s() {
  return At(I, "scrollEnd", s) || Vr(!0);
}, ri = function(t) {
  return ei[t] && ei[t].map(function(e) {
    return e();
  }) || mc;
}, we = [], kl = function(t) {
  for (var e = 0; e < we.length; e += 5)
    (!t || we[e + 4] && we[e + 4].query === t) && (we[e].style.cssText = we[e + 1], we[e].getBBox && we[e].setAttribute("transform", we[e + 2] || ""), we[e + 3].uncache = 1);
}, Pl = function() {
  return $.forEach(function(t) {
    return Qt(t) && ++t.cacheID && (t.rec = t());
  });
}, go = function(t, e) {
  var r;
  for (se = 0; se < X.length; se++)
    r = X[se], r && (!e || r._ctx === e) && (t ? r.kill(1) : r.revert(!0, !0));
  Zi = !0, e && kl(e), e || ri("revert");
}, Ml = function(t, e) {
  $.cache++, (e || !oe) && $.forEach(function(r) {
    return Qt(r) && r.cacheID++ && (r.rec = 0);
  }), xe(t) && (H.history.scrollRestoration = uo = t);
}, oe, jr = 0, Go, vc = function() {
  if (Go !== jr) {
    var t = Go = jr;
    requestAnimationFrame(function() {
      return t === jr && Vr(!0);
    });
  }
}, Ol = function() {
  tt.appendChild(bi), co = !ne && bi.offsetHeight || H.innerHeight, tt.removeChild(bi);
}, Ko = function(t) {
  return hn(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e) {
    return e.style.display = t ? "none" : "block";
  });
}, Vr = function(t, e) {
  if (Se = et.documentElement, tt = et.body, lo = [H, et, Se, tt], ze && !t && !Zi) {
    Lt(I, "scrollEnd", Cl);
    return;
  }
  Ol(), oe = I.isRefreshing = !0, Zi || Pl();
  var r = ri("refreshInit");
  _l && I.sort(), e || go(), $.forEach(function(i) {
    Qt(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
  }), X.slice(0).forEach(function(i) {
    return i.refresh();
  }), Zi = !1, X.forEach(function(i) {
    if (i._subPinOffset && i.pin) {
      var n = i.vars.horizontal ? "offsetWidth" : "offsetHeight", o = i.pin[n];
      i.revert(!0, 1), i.adjustPinSpacing(i.pin[n] - o), i.refresh();
    }
  }), Bs = 1, Ko(!0), X.forEach(function(i) {
    var n = je(i.scroller, i._dir), o = i.vars.end === "max" || i._endClamp && i.end > n, a = i._startClamp && i.start >= n;
    (o || a) && i.setPositions(a ? n - 1 : i.start, o ? Math.max(a ? n : i.start + 1, n) : i.end, !0);
  }), Ko(!1), Bs = 0, r.forEach(function(i) {
    return i && i.render && i.render(-1);
  }), $.forEach(function(i) {
    Qt(i) && (i.smooth && requestAnimationFrame(function() {
      return i.target.style.scrollBehavior = "smooth";
    }), i.rec && i(i.rec));
  }), Ml(uo, 1), Qn.pause(), jr++, oe = 2, fr(2), X.forEach(function(i) {
    return Qt(i.vars.onRefresh) && i.vars.onRefresh(i);
  }), oe = I.isRefreshing = !1, ri("refresh");
}, Xs = 0, In = 1, rn, fr = function(t) {
  if (t === 2 || !oe && !Zi) {
    I.isUpdating = !0, rn && rn.update(0);
    var e = X.length, r = Gt(), i = r - ps >= 50, n = e && X[0].scroll();
    if (In = Xs > n ? -1 : 1, oe || (Xs = n), i && (ze && !rs && r - ze > 200 && (ze = 0, ri("scrollEnd")), Bi = ps, ps = r), In < 0) {
      for (se = e; se-- > 0; )
        X[se] && X[se].update(0, i);
      In = 1;
    } else
      for (se = 0; se < e; se++)
        X[se] && X[se].update(0, i);
    I.isUpdating = !1;
  }
  dn = 0;
}, Hs = [Sl, Tl, ho, fo, Ae + en, Ae + Ji, Ae + tn, Ae + ji, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Yn = Hs.concat([Zr, Jr, "boxSizing", "max" + Mi, "max" + po, "position", Ae, Et, Et + tn, Et + Ji, Et + en, Et + ji]), yc = function(t, e, r) {
  Si(r);
  var i = t._gsap;
  if (i.spacerIsNative)
    Si(i.spacerState);
  else if (t._gsap.swappedIn) {
    var n = e.parentNode;
    n && (n.insertBefore(t, e), n.removeChild(e));
  }
  t._gsap.swappedIn = !1;
}, gs = function(t, e, r, i) {
  if (!t._gsap.swappedIn) {
    for (var n = Hs.length, o = e.style, a = t.style, l; n--; )
      l = Hs[n], o[l] = r[l];
    o.position = r.position === "absolute" ? "absolute" : "relative", r.display === "inline" && (o.display = "inline-block"), a[ho] = a[fo] = "auto", o.flexBasis = r.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[Zr] = Zn(t, ae) + Pt, o[Jr] = Zn(t, Ot) + Pt, o[Et] = a[Ae] = a[Tl] = a[Sl] = "0", Si(i), a[Zr] = a["max" + Mi] = r[Zr], a[Jr] = a["max" + po] = r[Jr], a[Et] = r[Et], t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)), t._gsap.swappedIn = !0;
  }
}, wc = /([A-Z])/g, Si = function(t) {
  if (t) {
    var e = t.t.style, r = t.length, i = 0, n, o;
    for ((t.t._gsap || D.core.getCache(t.t)).uncache = 1; i < r; i += 2)
      o = t[i + 1], n = t[i], o ? e[n] = o : e[n] && e.removeProperty(n.replace(wc, "-$1").toLowerCase());
  }
}, Mn = function(t) {
  for (var e = Yn.length, r = t.style, i = [], n = 0; n < e; n++)
    i.push(Yn[n], r[Yn[n]]);
  return i.t = t, i;
}, xc = function(t, e, r) {
  for (var i = [], n = t.length, o = r ? 8 : 0, a; o < n; o += 2)
    a = t[o], i.push(a, a in e ? e[a] : t[o + 1]);
  return i.t = t.t, i;
}, Bn = {
  left: 0,
  top: 0
}, Qo = function(t, e, r, i, n, o, a, l, u, c, d, h, f, _) {
  Qt(t) && (t = t(l)), xe(t) && t.substr(0, 3) === "max" && (t = h + (t.charAt(4) === "=" ? Fn("0" + t.substr(3), r) : 0));
  var p = f ? f.time() : 0, m, b, w;
  if (f && f.seek(0), isNaN(t) || (t = +t), Hi(t))
    f && (t = D.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, h, t)), a && zn(a, r, i, !0);
  else {
    Qt(e) && (e = e(l));
    var T = (t || "0").split(" "), v, S, k, x;
    w = ue(e, l) || tt, v = ur(w) || {}, (!v || !v.left && !v.top) && Le(w).display === "none" && (x = w.style.display, w.style.display = "block", v = ur(w), x ? w.style.display = x : w.style.removeProperty("display")), S = Fn(T[0], v[i.d]), k = Fn(T[1] || "0", r), t = v[i.p] - u[i.p] - c + S + n - k, a && zn(a, k, i, r - k < 20 || a._isStart && k > 20), r -= r - k;
  }
  if (_ && (l[_] = t || -1e-3, t < 0 && (t = 0)), o) {
    var P = t + r, C = o._isStart;
    m = "scroll" + i.d2, zn(o, P, i, C && P > 20 || !C && (d ? Math.max(tt[m], Se[m]) : o.parentNode[m]) <= P + 1), d && (u = ur(a), d && (o.style[i.op.p] = u[i.op.p] - i.op.m - o._offset + Pt));
  }
  return f && w && (m = ur(w), f.seek(h), b = ur(w), f._caScrollDist = m[i.p] - b[i.p], t = t / f._caScrollDist * h), f && f.seek(p), f ? t : Math.round(t);
}, bc = /(webkit|moz|length|cssText|inset)/i, Zo = function(t, e, r, i) {
  if (t.parentNode !== e) {
    var n = t.style, o, a;
    if (e === tt) {
      t._stOrig = n.cssText, a = Le(t);
      for (o in a)
        !+o && !bc.test(o) && a[o] && typeof n[o] == "string" && o !== "0" && (n[o] = a[o]);
      n.top = r, n.left = i;
    } else
      n.cssText = t._stOrig;
    D.core.getCache(t).uncache = 1, e.appendChild(t);
  }
}, Dl = function(t, e, r) {
  var i = e, n = i;
  return function(o) {
    var a = Math.round(t());
    return a !== i && a !== n && Math.abs(a - i) > 3 && Math.abs(a - n) > 3 && (o = a, r && r()), n = i, i = Math.round(o), i;
  };
}, On = function(t, e, r) {
  var i = {};
  i[e.p] = "+=" + r, D.set(t, i);
}, Jo = function(t, e) {
  var r = Ar(t, e), i = "_scroll" + e.p2, n = function o(a, l, u, c, d) {
    var h = o.tween, f = l.onComplete, _ = {};
    u = u || r();
    var p = Dl(r, u, function() {
      h.kill(), o.tween = 0;
    });
    return d = c && d || 0, c = c || a - u, h && h.kill(), l[i] = a, l.inherit = !1, l.modifiers = _, _[i] = function() {
      return p(u + c * h.ratio + d * h.ratio * h.ratio);
    }, l.onUpdate = function() {
      $.cache++, o.tween && fr();
    }, l.onComplete = function() {
      o.tween = 0, f && f.call(h);
    }, h = o.tween = D.to(t, l), h;
  };
  return t[i] = r, r.wheelHandler = function() {
    return n.tween && n.tween.kill() && (n.tween = 0);
  }, Lt(t, "wheel", r.wheelHandler), I.isTouch && Lt(t, "touchmove", r.wheelHandler), n;
}, I = /* @__PURE__ */ function() {
  function s(e, r) {
    hi || s.register(D) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Ys(this), this.init(e, r);
  }
  var t = s.prototype;
  return t.init = function(r, i) {
    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Wi) {
      this.update = this.refresh = this.kill = Ke;
      return;
    }
    r = Uo(xe(r) || Hi(r) || r.nodeType ? {
      trigger: r
    } : r, kn);
    var n = r, o = n.onUpdate, a = n.toggleClass, l = n.id, u = n.onToggle, c = n.onRefresh, d = n.scrub, h = n.trigger, f = n.pin, _ = n.pinSpacing, p = n.invalidateOnRefresh, m = n.anticipatePin, b = n.onScrubComplete, w = n.onSnapComplete, T = n.once, v = n.snap, S = n.pinReparent, k = n.pinSpacer, x = n.containerAnimation, P = n.fastScrollEnd, C = n.preventOverlaps, E = r.horizontal || r.containerAnimation && r.horizontal !== !1 ? ae : Ot, W = !d && d !== 0, O = ue(r.scroller || H), K = D.core.getCache(O), Y = ti(O), Q = ("pinType" in r ? r.pinType : Mr(O, "pinType") || Y && "fixed") === "fixed", V = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack], L = W && r.toggleActions.split(" "), Z = "markers" in r ? r.markers : kn.markers, rt = Y ? 0 : parseFloat(Le(O)["border" + E.p2 + Mi]) || 0, g = this, ot = r.onRefreshInit && function() {
      return r.onRefreshInit(g);
    }, Jt = hc(O, Y, E), Ie = dc(O, Y), dt = 0, zt = 0, Xt = 0, St = Ar(O, E), jt, Ht, pr, te, ee, J, mt, le, me, y, ve, rr, _r, pt, ir, gr, Nr, Dt, mr, vt, Ye, De, nr, Di, Tt, gn, sr, ni, si, vr, Fr, U, zr, Be, We, Xe, Ir, oi, or;
    if (g._startClamp = g._endClamp = !1, g._dir = E, m *= 45, g.scroller = O, g.scroll = x ? x.time.bind(x) : St, te = St(), g.vars = r, i = i || r.animation, "refreshPriority" in r && (_l = 1, r.refreshPriority === -9999 && (rn = g)), K.tweenScroll = K.tweenScroll || {
      top: Jo(O, Ot),
      left: Jo(O, ae)
    }, g.tweenTo = jt = K.tweenScroll[E.p], g.scrubDuration = function(M) {
      zr = Hi(M) && M, zr ? U ? U.duration(M) : U = D.to(i, {
        ease: "expo",
        totalProgress: "+=0",
        inherit: !1,
        duration: zr,
        paused: !0,
        onComplete: function() {
          return b && b(g);
        }
      }) : (U && U.progress(1).kill(), U = 0);
    }, i && (i.vars.lazy = !1, i._initted && !g.isReverted || i.vars.immediateRender !== !1 && r.immediateRender !== !1 && i.duration() && i.render(0, !0, !0), g.animation = i.pause(), i.scrollTrigger = g, g.scrubDuration(d), vr = 0, l || (l = i.vars.id)), v && ((!$r(v) || v.push) && (v = {
      snapTo: v
    }), "scrollBehavior" in tt.style && D.set(Y ? [tt, Se] : O, {
      scrollBehavior: "auto"
    }), $.forEach(function(M) {
      return Qt(M) && M.target === (Y ? et.scrollingElement || Se : O) && (M.smooth = !1);
    }), pr = Qt(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? _c(i) : v.snapTo === "labelsDirectional" ? gc(i) : v.directional !== !1 ? function(M, F) {
      return _o(v.snapTo)(M, Gt() - zt < 500 ? 0 : F.direction);
    } : D.utils.snap(v.snapTo), Be = v.duration || {
      min: 0.1,
      max: 2
    }, Be = $r(Be) ? Qi(Be.min, Be.max) : Qi(Be, Be), We = D.delayedCall(v.delay || zr / 2 || 0.1, function() {
      var M = St(), F = Gt() - zt < 500, A = jt.tween;
      if ((F || Math.abs(g.getVelocity()) < 10) && !A && !rs && dt !== M) {
        var z = (M - J) / pt, Rt = i && !W ? i.totalProgress() : z, q = F ? 0 : (Rt - Fr) / (Gt() - Bi) * 1e3 || 0, yt = D.utils.clamp(-z, 1 - z, ui(q / 2) * q / 0.185), $t = z + (v.inertia === !1 ? 0 : yt), _t, at, it = v, He = it.onStart, ut = it.onInterrupt, ye = it.onComplete;
        if (_t = pr($t, g), Hi(_t) || (_t = $t), at = Math.max(0, Math.round(J + _t * pt)), M <= mt && M >= J && at !== M) {
          if (A && !A._initted && A.data <= ui(at - M))
            return;
          v.inertia === !1 && (yt = _t - z), jt(at, {
            duration: Be(ui(Math.max(ui($t - Rt), ui(_t - Rt)) * 0.185 / q / 0.05 || 0)),
            ease: v.ease || "power3",
            data: ui(at - M),
            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
            onInterrupt: function() {
              return We.restart(!0) && ut && li(g, ut);
            },
            onComplete: function() {
              g.update(), dt = St(), i && !W && (U ? U.resetTo("totalProgress", _t, i._tTime / i._tDur) : i.progress(_t)), vr = Fr = i && !W ? i.totalProgress() : g.progress, w && w(g), ye && li(g, ye);
            }
          }, M, yt * pt, at - M - yt * pt), He && li(g, He, jt.tween);
        }
      } else g.isActive && dt !== M && We.restart(!0);
    }).pause()), l && (Ws[l] = g), h = g.trigger = ue(h || f !== !0 && f), or = h && h._gsap && h._gsap.stRevert, or && (or = or(g)), f = f === !0 ? h : ue(f), xe(a) && (a = {
      targets: h,
      className: a
    }), f && (_ === !1 || _ === Ae || (_ = !_ && f.parentNode && f.parentNode.style && Le(f.parentNode).display === "flex" ? !1 : Et), g.pin = f, Ht = D.core.getCache(f), Ht.spacer ? ir = Ht.pinState : (k && (k = ue(k), k && !k.nodeType && (k = k.current || k.nativeElement), Ht.spacerIsNative = !!k, k && (Ht.spacerState = Mn(k))), Ht.spacer = Dt = k || et.createElement("div"), Dt.classList.add("pin-spacer"), l && Dt.classList.add("pin-spacer-" + l), Ht.pinState = ir = Mn(f)), r.force3D !== !1 && D.set(f, {
      force3D: !0
    }), g.spacer = Dt = Ht.spacer, si = Le(f), Di = si[_ + E.os2], vt = D.getProperty(f), Ye = D.quickSetter(f, E.a, Pt), gs(f, Dt, si), Nr = Mn(f)), Z) {
      rr = $r(Z) ? Uo(Z, Vo) : Vo, y = Pn("scroller-start", l, O, E, rr, 0), ve = Pn("scroller-end", l, O, E, rr, 0, y), mr = y["offset" + E.op.d2];
      var Ri = ue(Mr(O, "content") || O);
      le = this.markerStart = Pn("start", l, Ri, E, rr, mr, 0, x), me = this.markerEnd = Pn("end", l, Ri, E, rr, mr, 0, x), x && (oi = D.quickSetter([le, me], E.a, Pt)), !Q && !(tr.length && Mr(O, "fixedMarkers") === !0) && (pc(Y ? tt : O), D.set([y, ve], {
        force3D: !0
      }), gn = D.quickSetter(y, E.a, Pt), ni = D.quickSetter(ve, E.a, Pt));
    }
    if (x) {
      var B = x.vars.onUpdate, N = x.vars.onUpdateParams;
      x.eventCallback("onUpdate", function() {
        g.update(0, 0, 1), B && B.apply(x, N || []);
      });
    }
    if (g.previous = function() {
      return X[X.indexOf(g) - 1];
    }, g.next = function() {
      return X[X.indexOf(g) + 1];
    }, g.revert = function(M, F) {
      if (!F)
        return g.kill(!0);
      var A = M !== !1 || !g.enabled, z = qt;
      A !== g.isReverted && (A && (Xe = Math.max(St(), g.scroll.rec || 0), Xt = g.progress, Ir = i && i.progress()), le && [le, me, y, ve].forEach(function(Rt) {
        return Rt.style.display = A ? "none" : "block";
      }), A && (qt = g, g.update(A)), f && (!S || !g.isActive) && (A ? yc(f, Dt, ir) : gs(f, Dt, Le(f), Tt)), A || g.update(A), qt = z, g.isReverted = A);
    }, g.refresh = function(M, F, A, z) {
      if (!((qt || !g.enabled) && !F)) {
        if (f && M && ze) {
          Lt(s, "scrollEnd", Cl);
          return;
        }
        !oe && ot && ot(g), qt = g, jt.tween && !A && (jt.tween.kill(), jt.tween = 0), U && U.pause(), p && i && (i.revert({
          kill: !1
        }).invalidate(), i.getChildren ? i.getChildren(!0, !0, !1).forEach(function(yr) {
          return yr.vars.immediateRender && yr.render(0, !0, !0);
        }) : i.vars.immediateRender && i.render(0, !0, !0)), g.isReverted || g.revert(!0, !0), g._subPinOffset = !1;
        var Rt = Jt(), q = Ie(), yt = x ? x.duration() : je(O, E), $t = pt <= 0.01 || !pt, _t = 0, at = z || 0, it = $r(A) ? A.end : r.end, He = r.endTrigger || h, ut = $r(A) ? A.start : r.start || (r.start === 0 || !h ? 0 : f ? "0 0" : "0 100%"), ye = g.pinnedContainer = r.pinnedContainer && ue(r.pinnedContainer, g), Ue = h && Math.max(0, X.indexOf(g)) || 0, It = Ue, Yt, Ut, Yr, mn, Vt, kt, Ve, is, yo, Ai, qe, Li, vn;
        for (Z && $r(A) && (Li = D.getProperty(y, E.p), vn = D.getProperty(ve, E.p)); It-- > 0; )
          kt = X[It], kt.end || kt.refresh(0, 1) || (qt = g), Ve = kt.pin, Ve && (Ve === h || Ve === f || Ve === ye) && !kt.isReverted && (Ai || (Ai = []), Ai.unshift(kt), kt.revert(!0, !0)), kt !== X[It] && (Ue--, It--);
        for (Qt(ut) && (ut = ut(g)), ut = Wo(ut, "start", g), J = Qo(ut, h, Rt, E, St(), le, y, g, q, rt, Q, yt, x, g._startClamp && "_startClamp") || (f ? -1e-3 : 0), Qt(it) && (it = it(g)), xe(it) && !it.indexOf("+=") && (~it.indexOf(" ") ? it = (xe(ut) ? ut.split(" ")[0] : "") + it : (_t = Fn(it.substr(2), Rt), it = xe(ut) ? ut : (x ? D.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, J) : J) + _t, He = h)), it = Wo(it, "end", g), mt = Math.max(J, Qo(it || (He ? "100% 0" : yt), He, Rt, E, St() + _t, me, ve, g, q, rt, Q, yt, x, g._endClamp && "_endClamp")) || -1e-3, _t = 0, It = Ue; It--; )
          kt = X[It] || {}, Ve = kt.pin, Ve && kt.start - kt._pinPush <= J && !x && kt.end > 0 && (Yt = kt.end - (g._startClamp ? Math.max(0, kt.start) : kt.start), (Ve === h && kt.start - kt._pinPush < J || Ve === ye) && isNaN(ut) && (_t += Yt * (1 - kt.progress)), Ve === f && (at += Yt));
        if (J += _t, mt += _t, g._startClamp && (g._startClamp += _t), g._endClamp && !oe && (g._endClamp = mt || -1e-3, mt = Math.min(mt, je(O, E))), pt = mt - J || (J -= 0.01) && 1e-3, $t && (Xt = D.utils.clamp(0, 1, D.utils.normalize(J, mt, Xe))), g._pinPush = at, le && _t && (Yt = {}, Yt[E.a] = "+=" + _t, ye && (Yt[E.p] = "-=" + St()), D.set([le, me], Yt)), f && !(Bs && g.end >= je(O, E)))
          Yt = Le(f), mn = E === Ot, Yr = St(), De = parseFloat(vt(E.a)) + at, !yt && mt > 1 && (qe = (Y ? et.scrollingElement || Se : O).style, qe = {
            style: qe,
            value: qe["overflow" + E.a.toUpperCase()]
          }, Y && Le(tt)["overflow" + E.a.toUpperCase()] !== "scroll" && (qe.style["overflow" + E.a.toUpperCase()] = "scroll")), gs(f, Dt, Yt), Nr = Mn(f), Ut = ur(f, !0), is = Q && Ar(O, mn ? ae : Ot)(), _ ? (Tt = [_ + E.os2, pt + at + Pt], Tt.t = Dt, It = _ === Et ? Zn(f, E) + pt + at : 0, It && (Tt.push(E.d, It + Pt), Dt.style.flexBasis !== "auto" && (Dt.style.flexBasis = It + Pt)), Si(Tt), ye && X.forEach(function(yr) {
            yr.pin === ye && yr.vars.pinSpacing !== !1 && (yr._subPinOffset = !0);
          }), Q && St(Xe)) : (It = Zn(f, E), It && Dt.style.flexBasis !== "auto" && (Dt.style.flexBasis = It + Pt)), Q && (Vt = {
            top: Ut.top + (mn ? Yr - J : is) + Pt,
            left: Ut.left + (mn ? is : Yr - J) + Pt,
            boxSizing: "border-box",
            position: "fixed"
          }, Vt[Zr] = Vt["max" + Mi] = Math.ceil(Ut.width) + Pt, Vt[Jr] = Vt["max" + po] = Math.ceil(Ut.height) + Pt, Vt[Ae] = Vt[Ae + tn] = Vt[Ae + Ji] = Vt[Ae + en] = Vt[Ae + ji] = "0", Vt[Et] = Yt[Et], Vt[Et + tn] = Yt[Et + tn], Vt[Et + Ji] = Yt[Et + Ji], Vt[Et + en] = Yt[Et + en], Vt[Et + ji] = Yt[Et + ji], gr = xc(ir, Vt, S), oe && St(0)), i ? (yo = i._initted, hs(1), i.render(i.duration(), !0, !0), nr = vt(E.a) - De + pt + at, sr = Math.abs(pt - nr) > 1, Q && sr && gr.splice(gr.length - 2, 2), i.render(0, !0, !0), yo || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), hs(0)) : nr = pt, qe && (qe.value ? qe.style["overflow" + E.a.toUpperCase()] = qe.value : qe.style.removeProperty("overflow-" + E.a));
        else if (h && St() && !x)
          for (Ut = h.parentNode; Ut && Ut !== tt; )
            Ut._pinOffset && (J -= Ut._pinOffset, mt -= Ut._pinOffset), Ut = Ut.parentNode;
        Ai && Ai.forEach(function(yr) {
          return yr.revert(!1, !0);
        }), g.start = J, g.end = mt, te = ee = oe ? Xe : St(), !x && !oe && (te < Xe && St(Xe), g.scroll.rec = 0), g.revert(!1, !0), zt = Gt(), We && (dt = -1, We.restart(!0)), qt = 0, i && W && (i._initted || Ir) && i.progress() !== Ir && i.progress(Ir || 0, !0).render(i.time(), !0, !0), ($t || Xt !== g.progress || x || p || i && !i._initted) && (i && !W && (i._initted || Xt || i.vars.immediateRender !== !1) && i.totalProgress(x && J < -1e-3 && !Xt ? D.utils.normalize(J, mt, 0) : Xt, !0), g.progress = $t || (te - J) / pt === Xt ? 0 : Xt), f && _ && (Dt._pinOffset = Math.round(g.progress * nr)), U && U.invalidate(), isNaN(Li) || (Li -= D.getProperty(y, E.p), vn -= D.getProperty(ve, E.p), On(y, E, Li), On(le, E, Li - (z || 0)), On(ve, E, vn), On(me, E, vn - (z || 0))), $t && !oe && g.update(), c && !oe && !_r && (_r = !0, c(g), _r = !1);
      }
    }, g.getVelocity = function() {
      return (St() - ee) / (Gt() - Bi) * 1e3 || 0;
    }, g.endAnimation = function() {
      zi(g.callbackAnimation), i && (U ? U.progress(1) : i.paused() ? W || zi(i, g.direction < 0, 1) : zi(i, i.reversed()));
    }, g.labelToScroll = function(M) {
      return i && i.labels && (J || g.refresh() || J) + i.labels[M] / i.duration() * pt || 0;
    }, g.getTrailing = function(M) {
      var F = X.indexOf(g), A = g.direction > 0 ? X.slice(0, F).reverse() : X.slice(F + 1);
      return (xe(M) ? A.filter(function(z) {
        return z.vars.preventOverlaps === M;
      }) : A).filter(function(z) {
        return g.direction > 0 ? z.end <= J : z.start >= mt;
      });
    }, g.update = function(M, F, A) {
      if (!(x && !A && !M)) {
        var z = oe === !0 ? Xe : g.scroll(), Rt = M ? 0 : (z - J) / pt, q = Rt < 0 ? 0 : Rt > 1 ? 1 : Rt || 0, yt = g.progress, $t, _t, at, it, He, ut, ye, Ue;
        if (F && (ee = te, te = x ? St() : z, v && (Fr = vr, vr = i && !W ? i.totalProgress() : q)), m && f && !qt && !Sn && ze && (!q && J < z + (z - ee) / (Gt() - Bi) * m ? q = 1e-4 : q === 1 && mt > z + (z - ee) / (Gt() - Bi) * m && (q = 0.9999)), q !== yt && g.enabled) {
          if ($t = g.isActive = !!q && q < 1, _t = !!yt && yt < 1, ut = $t !== _t, He = ut || !!q != !!yt, g.direction = q > yt ? 1 : -1, g.progress = q, He && !qt && (at = q && !yt ? 0 : q === 1 ? 1 : yt === 1 ? 2 : 3, W && (it = !ut && L[at + 1] !== "none" && L[at + 1] || L[at], Ue = i && (it === "complete" || it === "reset" || it in i))), C && (ut || Ue) && (Ue || d || !i) && (Qt(C) ? C(g) : g.getTrailing(C).forEach(function(Yr) {
            return Yr.endAnimation();
          })), W || (U && !qt && !Sn ? (U._dp._time - U._start !== U._time && U.render(U._dp._time - U._start), U.resetTo ? U.resetTo("totalProgress", q, i._tTime / i._tDur) : (U.vars.totalProgress = q, U.invalidate().restart())) : i && i.totalProgress(q, !!(qt && (zt || M)))), f) {
            if (M && _ && (Dt.style[_ + E.os2] = Di), !Q)
              Ye(Xi(De + nr * q));
            else if (He) {
              if (ye = !M && q > yt && mt + 1 > z && z + 1 >= je(O, E), S)
                if (!M && ($t || ye)) {
                  var It = ur(f, !0), Yt = z - J;
                  Zo(f, tt, It.top + (E === Ot ? Yt : 0) + Pt, It.left + (E === Ot ? 0 : Yt) + Pt);
                } else
                  Zo(f, Dt);
              Si($t || ye ? gr : Nr), sr && q < 1 && $t || Ye(De + (q === 1 && !ye ? nr : 0));
            }
          }
          v && !jt.tween && !qt && !Sn && We.restart(!0), a && (ut || T && q && (q < 1 || !ds)) && hn(a.targets).forEach(function(Yr) {
            return Yr.classList[$t || T ? "add" : "remove"](a.className);
          }), o && !W && !M && o(g), He && !qt ? (W && (Ue && (it === "complete" ? i.pause().totalProgress(1) : it === "reset" ? i.restart(!0).pause() : it === "restart" ? i.restart(!0) : i[it]()), o && o(g)), (ut || !ds) && (u && ut && li(g, u), V[at] && li(g, V[at]), T && (q === 1 ? g.kill(!1, 1) : V[at] = 0), ut || (at = q === 1 ? 1 : 3, V[at] && li(g, V[at]))), P && !$t && Math.abs(g.getVelocity()) > (Hi(P) ? P : 2500) && (zi(g.callbackAnimation), U ? U.progress(1) : zi(i, it === "reverse" ? 1 : !q, 1))) : W && o && !qt && o(g);
        }
        if (ni) {
          var Ut = x ? z / x.duration() * (x._caScrollDist || 0) : z;
          gn(Ut + (y._isFlipped ? 1 : 0)), ni(Ut);
        }
        oi && oi(-z / x.duration() * (x._caScrollDist || 0));
      }
    }, g.enable = function(M, F) {
      g.enabled || (g.enabled = !0, Lt(O, "resize", $i), Y || Lt(O, "scroll", ci), ot && Lt(s, "refreshInit", ot), M !== !1 && (g.progress = Xt = 0, te = ee = dt = St()), F !== !1 && g.refresh());
    }, g.getTween = function(M) {
      return M && jt ? jt.tween : U;
    }, g.setPositions = function(M, F, A, z) {
      if (x) {
        var Rt = x.scrollTrigger, q = x.duration(), yt = Rt.end - Rt.start;
        M = Rt.start + yt * M / q, F = Rt.start + yt * F / q;
      }
      g.refresh(!1, !1, {
        start: Xo(M, A && !!g._startClamp),
        end: Xo(F, A && !!g._endClamp)
      }, z), g.update();
    }, g.adjustPinSpacing = function(M) {
      if (Tt && M) {
        var F = Tt.indexOf(E.d) + 1;
        Tt[F] = parseFloat(Tt[F]) + M + Pt, Tt[1] = parseFloat(Tt[1]) + M + Pt, Si(Tt);
      }
    }, g.disable = function(M, F) {
      if (M !== !1 && g.revert(!0, !0), g.enabled && (g.enabled = g.isActive = !1, F || U && U.pause(), Xe = 0, Ht && (Ht.uncache = 1), ot && At(s, "refreshInit", ot), We && (We.pause(), jt.tween && jt.tween.kill() && (jt.tween = 0)), !Y)) {
        for (var A = X.length; A--; )
          if (X[A].scroller === O && X[A] !== g)
            return;
        At(O, "resize", $i), Y || At(O, "scroll", ci);
      }
    }, g.kill = function(M, F) {
      g.disable(M, F), U && !F && U.kill(), l && delete Ws[l];
      var A = X.indexOf(g);
      A >= 0 && X.splice(A, 1), A === se && In > 0 && se--, A = 0, X.forEach(function(z) {
        return z.scroller === g.scroller && (A = 1);
      }), A || oe || (g.scroll.rec = 0), i && (i.scrollTrigger = null, M && i.revert({
        kill: !1
      }), F || i.kill()), le && [le, me, y, ve].forEach(function(z) {
        return z.parentNode && z.parentNode.removeChild(z);
      }), rn === g && (rn = 0), f && (Ht && (Ht.uncache = 1), A = 0, X.forEach(function(z) {
        return z.pin === f && A++;
      }), A || (Ht.spacer = 0)), r.onKill && r.onKill(g);
    }, X.push(g), g.enable(!1, !1), or && or(g), i && i.add && !pt) {
      var j = g.update;
      g.update = function() {
        g.update = j, $.cache++, J || mt || g.refresh();
      }, D.delayedCall(0.01, g.update), pt = 0.01, J = mt = 0;
    } else
      g.refresh();
    f && vc();
  }, s.register = function(r) {
    return hi || (D = r || wl(), yl() && window.document && s.enable(), hi = Wi), hi;
  }, s.defaults = function(r) {
    if (r)
      for (var i in r)
        kn[i] = r[i];
    return kn;
  }, s.disable = function(r, i) {
    Wi = 0, X.forEach(function(o) {
      return o[i ? "kill" : "disable"](r);
    }), At(H, "wheel", ci), At(et, "scroll", ci), clearInterval(bn), At(et, "touchcancel", Ke), At(tt, "touchstart", Ke), En(At, et, "pointerdown,touchstart,mousedown", Ho), En(At, et, "pointerup,touchend,mouseup", $o), Qn.kill(), Tn(At);
    for (var n = 0; n < $.length; n += 3)
      Cn(At, $[n], $[n + 1]), Cn(At, $[n], $[n + 2]);
  }, s.enable = function() {
    if (H = window, et = document, Se = et.documentElement, tt = et.body, D) {
      if (hn = D.utils.toArray, Qi = D.utils.clamp, Ys = D.core.context || Ke, hs = D.core.suppressOverwrites || Ke, uo = H.history.scrollRestoration || "auto", Xs = H.pageYOffset || 0, D.core.globals("ScrollTrigger", s), tt) {
        Wi = 1, bi = document.createElement("div"), bi.style.height = "100vh", bi.style.position = "absolute", Ol(), fc(), xt.register(D), s.isTouch = xt.isTouch, xr = xt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Is = xt.isTouch === 1, Lt(H, "wheel", ci), lo = [H, et, Se, tt], D.matchMedia ? (s.matchMedia = function(c) {
          var d = D.matchMedia(), h;
          for (h in c)
            d.add(h, c[h]);
          return d;
        }, D.addEventListener("matchMediaInit", function() {
          Pl(), go();
        }), D.addEventListener("matchMediaRevert", function() {
          return kl();
        }), D.addEventListener("matchMedia", function() {
          Vr(0, 1), ri("matchMedia");
        }), D.matchMedia().add("(orientation: portrait)", function() {
          return _s(), _s;
        })) : console.warn("Requires GSAP 3.11.0 or later"), _s(), Lt(et, "scroll", ci);
        var r = tt.hasAttribute("style"), i = tt.style, n = i.borderTopStyle, o = D.core.Animation.prototype, a, l;
        for (o.revert || Object.defineProperty(o, "revert", {
          value: function() {
            return this.time(-0.01, !0);
          }
        }), i.borderTopStyle = "solid", a = ur(tt), Ot.m = Math.round(a.top + Ot.sc()) || 0, ae.m = Math.round(a.left + ae.sc()) || 0, n ? i.borderTopStyle = n : i.removeProperty("border-top-style"), r || (tt.setAttribute("style", ""), tt.removeAttribute("style")), bn = setInterval(qo, 250), D.delayedCall(0.5, function() {
          return Sn = 0;
        }), Lt(et, "touchcancel", Ke), Lt(tt, "touchstart", Ke), En(Lt, et, "pointerdown,touchstart,mousedown", Ho), En(Lt, et, "pointerup,touchend,mouseup", $o), zs = D.utils.checkPrefix("transform"), Yn.push(zs), hi = Gt(), Qn = D.delayedCall(0.2, Vr).pause(), di = [et, "visibilitychange", function() {
          var c = H.innerWidth, d = H.innerHeight;
          et.hidden ? (Yo = c, Bo = d) : (Yo !== c || Bo !== d) && $i();
        }, et, "DOMContentLoaded", Vr, H, "load", Vr, H, "resize", $i], Tn(Lt), X.forEach(function(c) {
          return c.enable(0, 1);
        }), l = 0; l < $.length; l += 3)
          Cn(At, $[l], $[l + 1]), Cn(At, $[l], $[l + 2]);
      } else if (et) {
        var u = function c() {
          s.enable(), et.removeEventListener("DOMContentLoaded", c);
        };
        et.addEventListener("DOMContentLoaded", u);
      }
    }
  }, s.config = function(r) {
    "limitCallbacks" in r && (ds = !!r.limitCallbacks);
    var i = r.syncInterval;
    i && clearInterval(bn) || (bn = i) && setInterval(qo, i), "ignoreMobileResize" in r && (Is = s.isTouch === 1 && r.ignoreMobileResize), "autoRefreshEvents" in r && (Tn(At) || Tn(Lt, r.autoRefreshEvents || "none"), gl = (r.autoRefreshEvents + "").indexOf("resize") === -1);
  }, s.scrollerProxy = function(r, i) {
    var n = ue(r), o = $.indexOf(n), a = ti(n);
    ~o && $.splice(o, a ? 6 : 2), i && (a ? tr.unshift(H, i, tt, i, Se, i) : tr.unshift(n, i));
  }, s.clearMatchMedia = function(r) {
    X.forEach(function(i) {
      return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
    });
  }, s.isInViewport = function(r, i, n) {
    var o = (xe(r) ? ue(r) : r).getBoundingClientRect(), a = o[n ? Zr : Jr] * i || 0;
    return n ? o.right - a > 0 && o.left + a < H.innerWidth : o.bottom - a > 0 && o.top + a < H.innerHeight;
  }, s.positionInViewport = function(r, i, n) {
    xe(r) && (r = ue(r));
    var o = r.getBoundingClientRect(), a = o[n ? Zr : Jr], l = i == null ? a / 2 : i in Jn ? Jn[i] * a : ~i.indexOf("%") ? parseFloat(i) * a / 100 : parseFloat(i) || 0;
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
I.version = "3.15.0";
I.saveStyles = function(s) {
  return s ? hn(s).forEach(function(t) {
    if (t && t.style) {
      var e = we.indexOf(t);
      e >= 0 && we.splice(e, 5), we.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), D.core.getCache(t), Ys());
    }
  }) : we;
};
I.revert = function(s, t) {
  return go(!s, t);
};
I.create = function(s, t) {
  return new I(s, t);
};
I.refresh = function(s) {
  return s ? $i(!0) : (hi || I.register()) && Vr(!0);
};
I.update = function(s) {
  return ++$.cache && fr(s === !0 ? 2 : 0);
};
I.clearScrollMemory = Ml;
I.maxScroll = function(s, t) {
  return je(s, t ? ae : Ot);
};
I.getScrollFunc = function(s, t) {
  return Ar(ue(s), t ? ae : Ot);
};
I.getById = function(s) {
  return Ws[s];
};
I.getAll = function() {
  return X.filter(function(s) {
    return s.vars.id !== "ScrollSmoother";
  });
};
I.isScrolling = function() {
  return !!ze;
};
I.snapDirectional = _o;
I.addEventListener = function(s, t) {
  var e = ei[s] || (ei[s] = []);
  ~e.indexOf(t) || e.push(t);
};
I.removeEventListener = function(s, t) {
  var e = ei[s], r = e && e.indexOf(t);
  r >= 0 && e.splice(r, 1);
};
I.batch = function(s, t) {
  var e = [], r = {}, i = t.interval || 0.016, n = t.batchMax || 1e9, o = function(u, c) {
    var d = [], h = [], f = D.delayedCall(i, function() {
      c(d, h), d = [], h = [];
    }).pause();
    return function(_) {
      d.length || f.restart(!0), d.push(_.trigger), h.push(_), n <= d.length && f.progress(1);
    };
  }, a;
  for (a in t)
    r[a] = a.substr(0, 2) === "on" && Qt(t[a]) && a !== "onRefreshInit" ? o(a, t[a]) : t[a];
  return Qt(n) && (n = n(), Lt(I, "refresh", function() {
    return n = t.batchMax();
  })), hn(s).forEach(function(l) {
    var u = {};
    for (a in r)
      u[a] = r[a];
    u.trigger = l, e.push(I.create(u));
  }), e;
};
var jo = function(t, e, r, i) {
  return e > i ? t(i) : e < 0 && t(0), r > i ? (i - e) / (r - e) : r < 0 ? e / (e - r) : 1;
}, ms = function s(t, e) {
  e === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = e === !0 ? "auto" : e ? "pan-" + e + (xt.isTouch ? " pinch-zoom" : "") : "none", t === Se && s(tt, e);
}, Dn = {
  auto: 1,
  scroll: 1
}, Sc = function(t) {
  var e = t.event, r = t.target, i = t.axis, n = (e.changedTouches ? e.changedTouches[0] : e).target, o = n._gsap || D.core.getCache(n), a = Gt(), l;
  if (!o._isScrollT || a - o._isScrollT > 2e3) {
    for (; n && n !== tt && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(Dn[(l = Le(n)).overflowY] || Dn[l.overflowX])); )
      n = n.parentNode;
    o._isScroll = n && n !== r && !ti(n) && (Dn[(l = Le(n)).overflowY] || Dn[l.overflowX]), o._isScrollT = a;
  }
  (o._isScroll || i === "x") && (e.stopPropagation(), e._gsapAllow = !0);
}, Rl = function(t, e, r, i) {
  return xt.create({
    target: t,
    capture: !0,
    debounce: !1,
    lockAxis: !0,
    type: e,
    onWheel: i = i && Sc,
    onPress: i,
    onDrag: i,
    onScroll: i,
    onEnable: function() {
      return r && Lt(et, xt.eventTypes[0], ea, !1, !0);
    },
    onDisable: function() {
      return At(et, xt.eventTypes[0], ea, !0);
    }
  });
}, Tc = /(input|label|select|textarea)/i, ta, ea = function(t) {
  var e = Tc.test(t.target.tagName);
  (e || ta) && (t._gsapAllow = !0, ta = e);
}, Ec = function(t) {
  $r(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
  var e = t, r = e.normalizeScrollX, i = e.momentum, n = e.allowNestedScroll, o = e.onRelease, a, l, u = ue(t.target) || Se, c = D.core.globals().ScrollSmoother, d = c && c.get(), h = xr && (t.content && ue(t.content) || d && t.content !== !1 && !d.smooth() && d.content()), f = Ar(u, Ot), _ = Ar(u, ae), p = 1, m = (xt.isTouch && H.visualViewport ? H.visualViewport.scale * H.visualViewport.width : H.outerWidth) / H.innerWidth, b = 0, w = Qt(i) ? function() {
    return i(a);
  } : function() {
    return i || 2.8;
  }, T, v, S = Rl(u, t.type, !0, n), k = function() {
    return v = !1;
  }, x = Ke, P = Ke, C = function() {
    l = je(u, Ot), P = Qi(xr ? 1 : 0, l), r && (x = Qi(0, je(u, ae))), T = jr;
  }, E = function() {
    h._gsap.y = Xi(parseFloat(h._gsap.y) + f.offset) + "px", h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0;
  }, W = function() {
    if (v) {
      requestAnimationFrame(k);
      var Z = Xi(a.deltaY / 2), rt = P(f.v - Z);
      if (h && rt !== f.v + f.offset) {
        f.offset = rt - f.v;
        var g = Xi((parseFloat(h && h._gsap.y) || 0) - f.offset);
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
    return xr && L.type === "touchmove" && W() || p > 1.05 && L.type !== "touchstart" || a.isGesturing || L.touches && L.touches.length > 1;
  }, t.onPress = function() {
    v = !1;
    var L = p;
    p = Xi((H.visualViewport && H.visualViewport.scale || 1) / m), O.pause(), L !== p && ms(u, p > 1.01 ? !0 : r ? !1 : "x"), K = _(), Y = f(), C(), T = jr;
  }, t.onRelease = t.onGestureStart = function(L, Z) {
    if (f.offset && E(), !Z)
      Q.restart(!0);
    else {
      $.cache++;
      var rt = w(), g, ot;
      r && (g = _(), ot = g + rt * 0.05 * -L.velocityX / 0.227, rt *= jo(_, g, ot, je(u, ae)), O.vars.scrollX = x(ot)), g = f(), ot = g + rt * 0.05 * -L.velocityY / 0.227, rt *= jo(f, g, ot, je(u, Ot)), O.vars.scrollY = P(ot), O.invalidate().duration(rt).play(0.01), (xr && O.vars.scrollY >= l || g >= l - 1) && D.to({}, {
        onUpdate: V,
        duration: rt
      });
    }
    o && o(L);
  }, t.onWheel = function() {
    O._ts && O.pause(), Gt() - b > 1e3 && (T = 0, b = Gt());
  }, t.onChange = function(L, Z, rt, g, ot) {
    if (jr !== T && C(), Z && r && _(x(g[2] === Z ? K + (L.startX - L.x) : _() + Z - g[1])), rt) {
      f.offset && E();
      var Jt = ot[2] === rt, Ie = Jt ? Y + L.startY - L.y : f() + rt - ot[1], dt = P(Ie);
      Jt && Ie !== dt && (Y += dt - Ie), f(dt);
    }
    (rt || Z) && fr();
  }, t.onEnable = function() {
    ms(u, r ? !1 : "x"), I.addEventListener("refresh", V), Lt(H, "resize", V), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = _.smooth = !1), S.enable();
  }, t.onDisable = function() {
    ms(u, !0), At(H, "resize", V), I.removeEventListener("refresh", V), S.kill();
  }, t.lockAxis = t.lockAxis !== !1, a = new xt(t), a.iOS = xr, xr && !f() && f(1), xr && D.ticker.add(Ke), Q = a._dc, O = D.to(a, {
    ease: "power4",
    paused: !0,
    inherit: !1,
    scrollX: r ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: Dl(f, f(), function() {
        return O.pause();
      })
    },
    onUpdate: fr,
    onComplete: Q.vars.onComplete
  }), a;
};
I.sort = function(s) {
  if (Qt(s))
    return X.sort(s);
  var t = H.pageYOffset || 0;
  return I.getAll().forEach(function(e) {
    return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + H.innerHeight;
  }), X.sort(s || function(e, r) {
    return (e.vars.refreshPriority || 0) * -1e6 + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((r.vars.containerAnimation ? 1e6 : r._sortY) + (r.vars.refreshPriority || 0) * -1e6);
  });
};
I.observe = function(s) {
  return new xt(s);
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
  var t = s instanceof xt ? s : Ec(s);
  return ne && ne.target === t.target && ne.kill(), ti(t.target) && (ne = t), t;
};
I.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: Fs,
  _inputObserver: Rl,
  _scrollers: $,
  _proxies: tr,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function() {
      ze || ri("scrollStart"), ze = Gt();
    },
    // a way to get the _refreshing value in Observer
    ref: function() {
      return qt;
    }
  }
};
wl() && D.registerPlugin(I);
var ra = "1.3.26";
function Al(s, t, e) {
  return Math.max(s, Math.min(t, e));
}
function Cc(s, t, e) {
  return (1 - e) * s + e * t;
}
function kc(s, t, e, r) {
  return Cc(s, t, 1 - Math.exp(-e * r));
}
function Pc(s, t) {
  return (s % t + t) % t;
}
var Mc = class {
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
      const e = Al(0, this.currentTime / this.duration, 1);
      t = e >= 1;
      const r = t ? 1 : this.easing(e);
      this.value = this.from + (this.to - this.from) * r;
    } else this.lerp ? (this.value = kc(this.value, this.to, this.lerp * 60, s), Math.round(this.value) === Math.round(this.to) && (this.value = this.to, t = !0)) : (this.value = this.to, t = !0);
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
function Oc(s, t) {
  let e;
  return function(...r) {
    clearTimeout(e), e = setTimeout(() => {
      e = void 0, s.apply(this, r);
    }, t);
  };
}
var Dc = class {
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
    this.wrapper = s, this.content = t, e && (this.debouncedResize = Oc(this.resize, r), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
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
}, Ll = class {
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
const Rc = 100 / 6, wr = { passive: !1 };
function ia(s, t) {
  return s === 1 ? Rc : s === 2 ? t : 1;
}
var Ac = class {
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
    R(this, "emitter", new Ll());
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
      const i = ia(r, this.window.width), n = ia(r, this.window.height);
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
const na = (s) => Math.min(1, 1.001 - 2 ** (-10 * s));
var Lc = class {
  constructor({ wrapper: s = window, content: t = document.documentElement, eventsTarget: e = s, smoothWheel: r = !0, syncTouch: i = !1, syncTouchLerp: n = 0.075, touchInertiaExponent: o = 1.7, duration: a, easing: l, lerp: u = 0.1, infinite: c = !1, orientation: d = "vertical", gestureOrientation: h = d === "horizontal" ? "both" : "vertical", touchMultiplier: f = 1, wheelMultiplier: _ = 1, autoResize: p = !0, prevent: m, virtualScroll: b, overscroll: w = !0, autoRaf: T = !1, anchors: v = !1, autoToggle: S = !1, allowNestedScroll: k = !1, __experimental__naiveDimensions: x = !1, naiveDimensions: P = x, stopInertiaOnNavigate: C = !1, respectReducedMotion: E = !0 } = {}) {
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
    R(this, "animate", new Mc());
    R(this, "emitter", new Ll());
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
    window.lenisVersion = ra, window.lenis || (window.lenis = {}), window.lenis.version = ra, d === "horizontal" && (window.lenis.horizontal = !0), i === !0 && (window.lenis.touch = !0), this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent), (!s || s === document.documentElement) && (s = window), typeof a == "number" && typeof l != "function" ? l = na : typeof l == "function" && typeof a != "number" && (a = 1), this.options = {
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
      autoRaf: T,
      anchors: v,
      autoToggle: S,
      allowNestedScroll: k,
      naiveDimensions: P,
      stopInertiaOnNavigate: C,
      respectReducedMotion: E
    }, this.dimensions = new Dc(s, t, { autoResize: p }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, { capture: !0 }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener("click", this.onClick), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown), this.virtualScroll = new Ac(e, {
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
        const p = _.getBoundingClientRect(), m = getComputedStyle(_), b = this.isHorizontal ? Number.parseFloat(m.scrollMarginLeft) : Number.parseFloat(m.scrollMarginTop), w = getComputedStyle(this.rootElement), T = this.isHorizontal ? Number.parseFloat(w.scrollPaddingLeft) : Number.parseFloat(w.scrollPaddingTop);
        h = (this.isHorizontal ? p.left : p.top) + this.animatedScroll - (Number.isNaN(b) ? 0 : b) - (Number.isNaN(T) ? 0 : T);
      }
    }
    if (typeof h == "number") {
      if (h += f, this.options.infinite) {
        if (i) {
          this.targetScroll = this.animatedScroll = this.scroll;
          const _ = h - this.animatedScroll;
          _ > this.limit / 2 ? h -= this.limit : _ < -this.limit / 2 && (h += this.limit);
        }
      } else h = Al(0, h, this.limit);
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
      i || (this.targetScroll = h), typeof o == "number" && typeof a != "function" ? a = na : typeof a == "function" && typeof o != "number" && (o = 1), this.animate.fromTo(this.animatedScroll, h, {
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
    let m, b, w, T, v, S;
    if (p === "horizontal")
      m = Math.round(s.scrollLeft), b = d - f, w = t, T = n, v = a, S = u;
    else if (p === "vertical")
      m = Math.round(s.scrollTop), b = h - _, w = e, T = o, v = l, S = c;
    else return !1;
    return !S && (m >= b || m <= 0) ? !0 : (w > 0 ? m < b : m > 0) && T && v;
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
    return this.options.infinite ? Pc(this.animatedScroll, this.limit) : this.animatedScroll;
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
const bt = (s, t = document) => t.querySelector(s), _n = (s, t = document) => [...t.querySelectorAll(s)], sa = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function Nc(s) {
  const t = bt("[data-facetas-panel]", s), e = bt("[data-facetas-abrir]", s);
  if (!t || !e) return;
  let r = null;
  const i = () => {
    r = document.activeElement, t.classList.add("is-on"), e.setAttribute("aria-expanded", "true"), document.documentElement.style.overflow = "hidden", window.DropScentsLenis?.stop(), Nl(s), bt(".faceta > summary", t)?.focus();
  }, n = () => {
    t.classList.remove("is-on"), e.setAttribute("aria-expanded", "false"), document.documentElement.style.overflow = "", window.DropScentsLenis?.start(), r?.focus();
  };
  return e.addEventListener("click", () => {
    t.classList.contains("is-on") ? n() : i();
  }), _n("[data-facetas-cerrar]", t).forEach((o) => o.addEventListener("click", n)), t.__cerrar = n, n;
}
typeof document < "u" && !document.__facetasEsc && (document.__facetasEsc = !0, document.addEventListener("keydown", (s) => {
  if (s.key !== "Escape") return;
  document.querySelector("[data-facetas-panel].is-on")?.__cerrar?.();
}));
function Fc(s, t) {
  _n("[data-precio]", s).forEach((e) => {
    const r = bt('[data-precio-rango="min"]', e), i = bt('[data-precio-rango="max"]', e), n = bt('[data-precio-campo="min"]', e), o = bt('[data-precio-campo="max"]', e), a = Number(e.dataset.tope) || 0;
    if (!r || !i) return;
    const l = () => {
      e.style.setProperty("--desde", r.value), e.style.setProperty("--hasta", i.value);
    }, u = (d) => {
      let h = Number(r.value), f = Number(i.value);
      h > f && (d === "min" ? f = h : h = f, r.value = String(h), i.value = String(f)), n && (n.value = h === 0 ? "" : String(h)), o && (o.value = f === a ? "" : String(f)), l();
    };
    r.addEventListener("input", () => u("min")), i.addEventListener("input", () => u("max")), r.addEventListener("change", t), i.addEventListener("change", t);
    const c = () => {
      const d = n.value === "" ? 0 : Math.max(0, Math.min(a, Number(n.value))), h = o.value === "" ? a : Math.max(0, Math.min(a, Number(o.value)));
      r.value = String(Math.min(d, h)), i.value = String(Math.max(d, h)), l();
    };
    [n, o].forEach((d) => {
      d && (d.addEventListener("input", c), d.addEventListener("change", t));
    }), u("init");
  });
}
let vs = 0;
async function Wn(s, t, e) {
  const r = ++vs, i = bt("[data-facetas-resultados]", e);
  if (!i) {
    window.location.href = s;
    return;
  }
  i.classList.add("facetas-cargando");
  try {
    const [n, o] = s.split("#"), a = n.includes("?") ? "&" : "?", l = await fetch(`${n}${a}section_id=${encodeURIComponent(t)}`);
    if (!l.ok) throw new Error(l.status);
    const u = await l.text();
    if (r !== vs) return;
    const c = new DOMParser().parseFromString(u, "text/html").querySelector("[data-facetas-resultados]");
    if (!c) throw new Error("la respuesta no trae resultados");
    const d = zc(e);
    i.innerHTML = c.innerHTML, history.pushState({ facetas: !0 }, "", s), Fl(e), Ic(e, d), d.abierto && Nl(e);
    const h = bt("[data-facetas-rejilla]", e) || i, f = window.scrollY + h.getBoundingClientRect().top - 140;
    f < window.scrollY && (window.DropScentsLenis ? window.DropScentsLenis.scrollTo(f, { duration: sa ? 0 : 0.8 }) : window.scrollTo({ top: f, behavior: sa ? "auto" : "smooth" })), o && (location.hash = o);
  } catch {
    window.location.href = s;
  } finally {
    r === vs && i.classList.remove("facetas-cargando");
  }
}
function zc(s) {
  const t = bt("[data-facetas-panel]", s), e = bt(".panel-filtros__cuerpo", s), r = document.activeElement;
  return {
    abierto: !!t?.classList.contains("is-on"),
    desplegadas: _n(".faceta", s).map((i) => i.open),
    scroll: e ? e.scrollTop : 0,
    /* El foco se devuelve por nombre+valor, no por referencia: el elemento
       que tenia el foco ya no existe despues del reemplazo. */
    foco: r && s.contains(r) && r.name ? { name: r.name, value: r.value } : null
  };
}
function Ic(s, t) {
  if (!t) return;
  const e = bt("[data-facetas-panel]", s);
  t.abierto && e && (e.classList.add("is-on"), bt("[data-facetas-abrir]", s)?.setAttribute("aria-expanded", "true")), _n(".faceta", s).forEach((i, n) => {
    t.desplegadas[n] !== void 0 && (i.open = t.desplegadas[n]);
  });
  const r = bt(".panel-filtros__cuerpo", s);
  r && (r.scrollTop = t.scroll), t.foco && (s.querySelector(
    `[name="${CSS.escape(t.foco.name)}"][value="${CSS.escape(t.foco.value)}"]`
  ) || s.querySelector(`[name="${CSS.escape(t.foco.name)}"]`))?.focus({ preventScroll: !0 });
}
function Nl(s) {
  const t = bt("[data-facetas-cuenta]", s)?.textContent.trim(), e = bt('[data-facetas-form] button[type="submit"]', s);
  t && e && (e.textContent = t);
}
function ys(s) {
  const t = new FormData(s), e = new URLSearchParams();
  for (const [n, o] of t.entries())
    String(o).trim() !== "" && e.append(n, o);
  const r = s.getAttribute("action") || window.location.pathname, i = e.toString();
  return i ? `${r}?${i}` : r;
}
function Fl(s) {
  const t = bt("[data-facetas]", s), e = s.dataset.seccionId || t?.dataset.seccion;
  if (!e) return;
  const r = Nc(s), i = bt("[data-facetas-form]", s), n = () => {
    i && Wn(ys(i), e, s);
  };
  i && (i.addEventListener("change", (a) => {
    a.target.matches('input[type="checkbox"], input[type="number"]') && n();
  }), i.addEventListener("submit", (a) => {
    a.preventDefault(), n(), window.innerWidth < 900 && r?.();
  }), Fc(i, n));
  const o = bt("[data-facetas-orden]", s);
  o && (o.addEventListener("change", (a) => {
    a.preventDefault(), Wn(ys(o), e, s);
  }), o.addEventListener("submit", (a) => {
    a.preventDefault(), Wn(ys(o), e, s);
  })), s.addEventListener("click", Yc);
}
function Yc(s) {
  const t = s.target.closest("[data-facetas-enlace]");
  if (!t || s.metaKey || s.ctrlKey || s.shiftKey || t.target === "_blank") return;
  const e = t.closest("[data-seccion-id]");
  e && (s.preventDefault(), Wn(t.href, e.dataset.seccionId, e));
}
function Bc(s = document) {
  _n("[data-seccion-id]", s).forEach((t) => {
    bt("[data-facetas-resultados]", t) && Fl(t);
  }), window.__facetasPop || (window.__facetasPop = !0, window.addEventListener("popstate", (t) => {
    (t.state?.facetas || bt("[data-facetas-resultados]")) && window.location.reload();
  }));
}
const mo = window.matchMedia("(prefers-reduced-motion: reduce)").matches, _e = (s, t = document) => t.querySelector(s), Nt = (s, t = document) => [...t.querySelectorAll(s)], Wc = '[data-chatty-widget="trigger"], #Avada-FAQ_WidgetTrigger', Xc = ".Avada-Faqs_Button.opened, .Avada-Faqs_Button--opened";
function oa() {
  if (_e(Xc)) return !0;
  const s = _e(Wc);
  return s ? (s.click(), !0) : typeof window.ChattyJS?.openWidget == "function" ? (window.ChattyJS.openWidget(), !0) : typeof window.avadaFaqTrigger == "function" ? (window.avadaFaqTrigger(), !0) : !1;
}
function aa() {
  return typeof window.DropScentsChat == "function" ? (window.DropScentsChat(), !0) : window.$crisp ? (window.$crisp.push(["do", "chat:open"]), !0) : window.Tawk_API?.maximize ? (window.Tawk_API.maximize(), !0) : window.tidioChatApi?.open ? (window.tidioChatApi.open(), !0) : window.Intercom ? (window.Intercom("show"), !0) : window.zE ? (window.zE("messenger", "open"), !0) : window.Shopify?.chat?.open ? (window.Shopify.chat.open(), !0) : !1;
}
function Hc() {
  if (typeof window.DropScentsChat == "function") {
    window.DropScentsChat();
    return;
  }
  if (oa() || aa()) return;
  let s = 0;
  const t = setInterval(() => {
    s += 1, (oa() || aa() || s > 24) && (clearInterval(t), s > 24 && $c());
  }, 250);
}
let la = 0;
function $c() {
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
  requestAnimationFrame(() => t.classList.add("is-on")), clearTimeout(la), la = setTimeout(() => t.classList.remove("is-on"), 6e3);
}
function Uc() {
  document.addEventListener("click", (s) => {
    s.target.closest("[data-chat]") && (s.preventDefault(), _e("#menu-lateral:not([hidden]) [data-drawer-cerrar]")?.click(), Hc());
  });
}
function Vc(s = document) {
  Nt("[data-galeria]", s).forEach((t) => {
    const e = Nt(".card__slide", t), r = Nt(".card__punto", t);
    if (e.length < 2) return;
    let i = 0;
    const n = (a) => {
      i = (a + e.length) % e.length, e.forEach((l, u) => l.classList.toggle("is-on", u === i)), r.forEach((l, u) => l.classList.toggle("is-on", u === i));
    }, o = t.closest(".chip") || t;
    Nt("[data-galeria-paso]", o).forEach((a) => {
      a.addEventListener("click", (l) => {
        l.preventDefault(), l.stopPropagation(), n(i + Number(a.dataset.galeriaPaso));
      });
    });
  });
}
function qc() {
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
    mo ? a() : setTimeout(a, 420), r?.focus();
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
    const u = l[0], c = l[l.length - 1];
    a.shiftKey && document.activeElement === u ? (a.preventDefault(), c.focus()) : !a.shiftKey && document.activeElement === c && (a.preventDefault(), u.focus());
  });
}
function Gc(s = document) {
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
          behavior: mo ? "auto" : "smooth"
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
function Kc(s = document) {
  mo || window.matchMedia("(hover: hover) and (pointer: fine)").matches && Nt("[data-indice]", s).forEach((t) => {
    const e = _e("[data-indice-vista]", t), r = Nt("[data-indice-fila]", t);
    if (!e || !r.length) return;
    const i = Nt(".indice__vista-img", e), n = e.parentElement, o = Mt.quickTo(e, "x", { duration: 0.5, ease: "power3.out" }), a = Mt.quickTo(e, "y", { duration: 0.5, ease: "power3.out" }), l = (u) => {
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
function Qc(s = document) {
  const t = _e("[data-pdp]", s);
  if (!t) return;
  const e = Nt(".pdp__img", t), r = Nt("[data-pdp-mini]", t), i = _e("[data-pdp-precio]", t), n = _e("[data-pdp-antes]", t), o = window.DropScentsTextos?.formatoDinero || "";
  function a(l) {
    l < 0 || l >= e.length || (e.forEach((u, c) => u.classList.toggle("is-on", c === l)), r.forEach((u, c) => u.classList.toggle("is-on", c === l)));
  }
  r.forEach((l) => l.addEventListener("click", () => a(Number(l.dataset.pdpMini)))), Nt(".pres input", t).forEach((l) => {
    l.addEventListener("change", () => {
      if (i && l.dataset.precio && (i.textContent = ua(Number(l.dataset.precio), o)), n) {
        const c = Number(l.dataset.antes || 0), d = Number(l.dataset.precio || 0);
        c > d ? (n.textContent = ua(c, o), n.hidden = !1) : n.hidden = !0;
      }
      const u = Number(l.dataset.imagen);
      !Number.isNaN(u) && u >= 0 && a(u);
    });
  });
}
function ua(s, t) {
  const e = Number(s) / 100, r = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), i = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
  return t ? t.replace(/\{\{\s*(\w+)\s*\}\}/g, (n, o) => o.includes("no_decimals") ? i.format(Math.round(e)) : r.format(e)) : `$${r.format(e)}`;
}
function Zc(s = document) {
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
function Jc(s = document) {
  Nt("[data-envia-al-cambiar]", s).forEach((t) => {
    t.closest("[data-facetas-orden]") || t.addEventListener("change", () => t.form?.submit());
  });
}
function zl(s = document) {
  Bc(s), Vc(s), Gc(s), Kc(s), Qc(s), Zc(s), Jc(s);
}
Mt.registerPlugin(I);
const vo = window.matchMedia("(prefers-reduced-motion: reduce)").matches, Qe = (s, t = document) => t.querySelector(s), Oi = (s, t = document) => [...t.querySelectorAll(s)], ca = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }), jc = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
function fa(s, t) {
  const e = Number(s) / 100;
  return t ? t.replace(/\{\{\s*(\w+)\s*\}\}/g, (r, i) => {
    switch (i) {
      case "amount":
      case "amount_with_comma_separator":
        return jc.format(e);
      case "amount_no_decimals":
      case "amount_no_decimals_with_comma_separator":
      default:
        return ca.format(Math.round(e));
    }
  }) : `$${ca.format(Math.round(e))}`;
}
function Il() {
  const s = Qe(".picker"), t = Qe("#compare");
  if (!s || !t) return;
  const e = t.dataset.moneyFormat || "", r = Number(t.dataset.envioAfuera || 0), i = {};
  Oi("[data-f]", t).forEach((u) => {
    i[u.dataset.f] = u;
  });
  function n(u, c, d) {
    if (!u) return;
    const h = Number(u.dataset.centimos ?? c);
    if (u.dataset.centimos = c, !d || vo || h === c) {
      u.textContent = fa(c, e);
      return;
    }
    const f = { v: h };
    Mt.to(f, {
      v: c,
      duration: 0.55,
      ease: "power2.out",
      onUpdate: () => {
        u.textContent = fa(f.v, e);
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
function Yl() {
  Oi(".card__slide, .mini__shot img, .pdp__img").forEach((s) => {
    const t = () => {
      if (s.parentElement.querySelector(".card__sinfoto")) return;
      const e = document.createElement("span");
      e.className = "card__sinfoto", e.setAttribute("aria-hidden", "true"), s.parentElement.appendChild(e), s.style.display = "none";
    };
    s.addEventListener("error", t), s.complete && s.naturalWidth === 0 && t();
  });
}
let fi = null;
function tf() {
  vo || (fi = new Lc({ lerp: 0.11, wheelMultiplier: 1, touchMultiplier: 1.6 }), fi.on("scroll", I.update), Mt.ticker.add((s) => fi.raf(s * 1e3)), Mt.ticker.lagSmoothing(0), window.DropScentsLenis = fi), Oi('a[href^="#"]').forEach((s) => {
    s.addEventListener("click", (t) => {
      const e = s.getAttribute("href");
      if (!e || e === "#") return;
      const r = e === "#top" ? 0 : Qe(e);
      !r && r !== 0 || (t.preventDefault(), fi ? fi.scrollTo(r, { offset: -72, duration: 1.15 }) : window.scrollTo({ top: r === 0 ? 0 : r.offsetTop - 72 }));
    });
  });
}
function ef() {
  vo || (Qe("[data-hero-in]") && (Mt.set("[data-hero-in]", { opacity: 0, y: 26 }), Mt.timeline({ delay: 0.15 }).to("[data-hero-in]", {
    opacity: 1,
    y: 0,
    duration: 1.05,
    ease: "expo.out",
    stagger: 0.055
  })), Qe(".step") && Mt.matchMedia().add(
    { ancho: "(min-width: 900px)", angosto: "(max-width: 899px)" },
    (s) => {
      const t = s.conditions.ancho ? 50 : 0;
      Oi(".step").forEach((e, r) => {
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
  ), Qe(".compare") && (Mt.from(".compare__col--us", {
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
  })), Qe("[data-reveal-card]") && I.batch("[data-reveal-card]", {
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
  }), Oi(".qa__item").forEach((s, t) => {
    Mt.from(s, {
      opacity: 0,
      x: -24,
      duration: 0.7,
      ease: "power3.out",
      delay: t * 0.03,
      scrollTrigger: { trigger: s, start: "top 92%" }
    });
  }), Qe(".bubble") && Mt.from(".bubble", {
    opacity: 0,
    y: 26,
    scale: 0.92,
    transformOrigin: "bottom center",
    duration: 0.6,
    ease: "back.out(1.6)",
    stagger: 0.13,
    scrollTrigger: { trigger: ".chat", start: "top 82%" }
  }), Qe(".cierre__card") && Mt.from(".cierre__card", {
    opacity: 0,
    scale: 0.96,
    y: 40,
    duration: 1.1,
    ease: "expo.out",
    scrollTrigger: { trigger: ".cierre", start: "top 85%" }
  }));
}
function rf() {
  const s = Qe("#nav");
  s && I.create({
    start: "top -60",
    end: 99999,
    onToggle: (t) => s.classList.toggle("is-stuck", t.isActive)
  });
}
function nf() {
  "scrollRestoration" in history && (history.scrollRestoration = "manual"), window.scrollTo(0, 0), window.addEventListener("pageshow", () => window.scrollTo(0, 0)), Uc(), qc(), Il(), Yl(), tf(), zl(), ef(), rf(), document.fonts?.ready && document.fonts.ready.then(() => I.refresh());
}
function sf() {
  window.Shopify?.designMode && (document.addEventListener("shopify:section:load", (s) => {
    zl(s.target), Il(), Yl(), I.refresh();
  }), document.addEventListener("shopify:section:unload", () => I.refresh()));
}
nf();
sf();
