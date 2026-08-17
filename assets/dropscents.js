var Pl = Object.defineProperty;
var El = (s, t, i) => t in s ? Pl(s, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : s[t] = i;
var R = (s, t, i) => El(s, typeof t != "symbol" ? t + "" : t, i);
function ni(s) {
  if (s === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function ra(s, t) {
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
}, en = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Bs, Yt, lt, Ae = 1e8, st = 1 / Ae, ps = Math.PI * 2, Ol = ps / 4, Ml = 0, na = Math.sqrt, Dl = Math.cos, Rl = Math.sin, zt = function(t) {
  return typeof t == "string";
}, gt = function(t) {
  return typeof t == "function";
}, ui = function(t) {
  return typeof t == "number";
}, Xs = function(t) {
  return typeof t > "u";
}, je = function(t) {
  return typeof t == "object";
}, ue = function(t) {
  return t !== !1;
}, Ws = function() {
  return typeof window < "u";
}, gn = function(t) {
  return gt(t) || zt(t);
}, sa = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Kt = Array.isArray, Al = /random\([^)]+\)/g, zl = /,\s*/g, po = /(?:-?\.?\d|\.)+/gi, oa = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, fr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ts = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, aa = /[+-]=-?[.\d]+/, Ll = /[^,'"\[\]\s]+/gi, Nl = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ft, $e, _s, Hs, Pe = {}, In = {}, la, ua = function(t) {
  return (In = br(t, Pe)) && de;
}, Us = function(t, i) {
  return console.warn("Invalid property", t, "set to", i, "Missing plugin? gsap.registerPlugin()");
}, rn = function(t, i) {
  return !i && console.warn(t);
}, ca = function(t, i) {
  return t && (Pe[t] = i) && In && (In[t] = i) || Pe;
}, nn = function() {
  return 0;
}, Fl = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, On = {
  suppressEvents: !0,
  kill: !1
}, Il = {
  suppressEvents: !0
}, Vs = {}, Si = [], gs = {}, fa, ye = {}, es = {}, _o = 30, Mn = [], $s = "", qs = function(t) {
  var i = t[0], e, r;
  if (je(i) || gt(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
    for (r = Mn.length; r-- && !Mn[r].targetTest(i); )
      ;
    e = Mn[r];
  }
  for (r = t.length; r--; )
    t[r] && (t[r]._gsap || (t[r]._gsap = new Aa(t[r], e))) || t.splice(r, 1);
  return t;
}, Ui = function(t) {
  return t._gsap || qs(ze(t))[0]._gsap;
}, ha = function(t, i, e) {
  return (e = t[i]) && gt(e) ? t[i]() : Xs(e) && t.getAttribute && t.getAttribute(i) || e;
}, ce = function(t, i) {
  return (t = t.split(",")).forEach(i) || t;
}, wt = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, ct = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, pr = function(t, i) {
  var e = i.charAt(0), r = parseFloat(i.substr(2));
  return t = parseFloat(t), e === "+" ? t + r : e === "-" ? t - r : e === "*" ? t * r : t / r;
}, Yl = function(t, i) {
  for (var e = i.length, r = 0; t.indexOf(i[r]) < 0 && ++r < e; )
    ;
  return r < e;
}, Yn = function() {
  var t = Si.length, i = Si.slice(0), e, r;
  for (gs = {}, Si.length = 0, e = 0; e < t; e++)
    r = i[e], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, Gs = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, da = function(t, i, e, r) {
  Si.length && !Yt && Yn(), t.render(i, e, !!(Yt && i < 0 && Gs(t))), Si.length && !Yt && Yn();
}, pa = function(t) {
  var i = parseFloat(t);
  return (i || i === 0) && (t + "").match(Ll).length < 2 ? i : zt(t) ? t.trim() : t;
}, _a = function(t) {
  return t;
}, Ee = function(t, i) {
  for (var e in i)
    e in t || (t[e] = i[e]);
  return t;
}, Bl = function(t) {
  return function(i, e) {
    for (var r in e)
      r in i || r === "duration" && t || r === "ease" || (i[r] = e[r]);
  };
}, br = function(t, i) {
  for (var e in i)
    t[e] = i[e];
  return t;
}, go = function s(t, i) {
  for (var e in i)
    e !== "__proto__" && e !== "constructor" && e !== "prototype" && (t[e] = je(i[e]) ? s(t[e] || (t[e] = {}), i[e]) : i[e]);
  return t;
}, Bn = function(t, i) {
  var e = {}, r;
  for (r in t)
    r in i || (e[r] = t[r]);
  return e;
}, Hr = function(t) {
  var i = t.parent || ft, e = t.keyframes ? Bl(Kt(t.keyframes)) : Ee;
  if (ue(t.inherit))
    for (; i; )
      e(t, i.vars.defaults), i = i.parent || i._dp;
  return t;
}, Xl = function(t, i) {
  for (var e = t.length, r = e === i.length; r && e-- && t[e] === i[e]; )
    ;
  return e < 0;
}, ga = function(t, i, e, r, n) {
  var o = t[r], a;
  if (n)
    for (a = i[n]; o && o[n] > a; )
      o = o._prev;
  return o ? (i._next = o._next, o._next = i) : (i._next = t[e], t[e] = i), i._next ? i._next._prev = i : t[r] = i, i._prev = o, i.parent = i._dp = t, i;
}, Kn = function(t, i, e, r) {
  e === void 0 && (e = "_first"), r === void 0 && (r = "_last");
  var n = i._prev, o = i._next;
  n ? n._next = o : t[e] === i && (t[e] = o), o ? o._prev = n : t[r] === i && (t[r] = n), i._next = i._prev = i.parent = null;
}, Pi = function(t, i) {
  t.parent && (!i || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, Vi = function(t, i) {
  if (t && (!i || i._end > t._dur || i._start < 0))
    for (var e = t; e; )
      e._dirty = 1, e = e.parent;
  return t;
}, Wl = function(t) {
  for (var i = t.parent; i && i.parent; )
    i._dirty = 1, i.totalDuration(), i = i.parent;
  return t;
}, ms = function(t, i, e, r) {
  return t._startAt && (Yt ? t._startAt.revert(On) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(i, !0, r));
}, Hl = function s(t) {
  return !t || t._ts && s(t.parent);
}, mo = function(t) {
  return t._repeat ? Tr(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, Tr = function(t, i) {
  var e = Math.floor(t = ct(t / i));
  return t && e === t ? e - 1 : e;
}, Xn = function(t, i) {
  return (t - i._start) * i._ts + (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur);
}, Qn = function(t) {
  return t._end = ct(t._start + (t._tDur / Math.abs(t._ts || t._rts || st) || 0));
}, Zn = function(t, i) {
  var e = t._dp;
  return e && e.smoothChildTiming && t._ts && (t._start = ct(e._time - (t._ts > 0 ? i / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - i) / -t._ts)), Qn(t), e._dirty || Vi(e, t)), t;
}, ma = function(t, i) {
  var e;
  if ((i._time || !i._dur && i._initted || i._start < t._time && (i._dur || !i.add)) && (e = Xn(t.rawTime(), i), (!i._dur || hn(0, i.totalDuration(), e) - i._tTime > st) && i.render(e, !0)), Vi(t, i)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (e = t; e._dp; )
        e.rawTime() >= 0 && e.totalTime(e._tTime), e = e._dp;
    t._zTime = -st;
  }
}, Ge = function(t, i, e, r) {
  return i.parent && Pi(i), i._start = ct((ui(e) ? e : e || t !== ft ? Me(t, e, i) : t._time) + i._delay), i._end = ct(i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0)), ga(t, i, "_first", "_last", t._sort ? "_start" : 0), vs(i) || (t._recent = i), r || ma(t, i), t._ts < 0 && Zn(t, t._tTime), t;
}, va = function(t, i) {
  return (Pe.ScrollTrigger || Us("scrollTrigger", i)) && Pe.ScrollTrigger.create(i, t);
}, ya = function(t, i, e, r, n) {
  if (Qs(t, i, n), !t._initted)
    return 1;
  if (!e && t._pt && !Yt && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && fa !== be.frame)
    return Si.push(t), t._lazy = [n, r], 1;
}, Ul = function s(t) {
  var i = t.parent;
  return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || s(i));
}, vs = function(t) {
  var i = t.data;
  return i === "isFromStart" || i === "isStart";
}, Vl = function(t, i, e, r) {
  var n = t.ratio, o = i < 0 || !i && (!t._start && Ul(t) && !(!t._initted && vs(t)) || (t._ts < 0 || t._dp._ts < 0) && !vs(t)) ? 0 : 1, a = t._rDelay, l = 0, u, c, d;
  if (a && t._repeat && (l = hn(0, t._tDur, i), c = Tr(l, a), t._yoyo && c & 1 && (o = 1 - o), c !== Tr(t._tTime, a) && (n = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== n || Yt || r || t._zTime === st || !i && t._zTime) {
    if (!t._initted && ya(t, i, r, e, l))
      return;
    for (d = t._zTime, t._zTime = i || (e ? st : 0), e || (e = i && !d), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = l, u = t._pt; u; )
      u.r(o, u.d), u = u._next;
    i < 0 && ms(t, i, e, !0), t._onUpdate && !e && Se(t, "onUpdate"), l && t._repeat && !e && t.parent && Se(t, "onRepeat"), (i >= t._tDur || i < 0) && t.ratio === o && (o && Pi(t, 1), !e && !Yt && (Se(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = i);
}, $l = function(t, i, e) {
  var r;
  if (e > i)
    for (r = t._first; r && r._start <= e; ) {
      if (r.data === "isPause" && r._start > i)
        return r;
      r = r._next;
    }
  else
    for (r = t._last; r && r._start >= e; ) {
      if (r.data === "isPause" && r._start < i)
        return r;
      r = r._prev;
    }
}, Sr = function(t, i, e, r) {
  var n = t._repeat, o = ct(i) || 0, a = t._tTime / t._tDur;
  return a && !r && (t._time *= o / t._dur), t._dur = o, t._tDur = n ? n < 0 ? 1e10 : ct(o * (n + 1) + t._rDelay * n) : o, a > 0 && !r && Zn(t, t._tTime = t._tDur * a), t.parent && Qn(t), e || Vi(t.parent, t), t;
}, vo = function(t) {
  return t instanceof le ? Vi(t) : Sr(t, t._dur);
}, ql = {
  _start: 0,
  endTime: nn,
  totalDuration: nn
}, Me = function s(t, i, e) {
  var r = t.labels, n = t._recent || ql, o = t.duration() >= Ae ? n.endTime(!1) : t._dur, a, l, u;
  return zt(i) && (isNaN(i) || i in r) ? (l = i.charAt(0), u = i.substr(-1) === "%", a = i.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (i = i.replace(/=/, "")), (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (u ? (a < 0 ? n : e).totalDuration() / 100 : 1)) : a < 0 ? (i in r || (r[i] = o), r[i]) : (l = parseFloat(i.charAt(a - 1) + i.substr(a + 1)), u && e && (l = l / 100 * (Kt(e) ? e[0] : e).totalDuration()), a > 1 ? s(t, i.substr(0, a - 1), e) + l : o + l)) : i == null ? o : +i;
}, Ur = function(t, i, e) {
  var r = ui(i[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), o = i[n], a, l;
  if (r && (o.duration = i[1]), o.parent = e, t) {
    for (a = o, l = e; l && !("immediateRender" in a); )
      a = l.vars.defaults || {}, l = ue(l.vars.inherit) && l.parent;
    o.immediateRender = ue(a.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = i[n - 1];
  }
  return new kt(i[0], o, i[n + 1]);
}, Di = function(t, i) {
  return t || t === 0 ? i(t) : i;
}, hn = function(t, i, e) {
  return e < t ? t : e > i ? i : e;
}, qt = function(t, i) {
  return !zt(t) || !(i = Nl.exec(t)) ? "" : i[1];
}, Gl = function(t, i, e) {
  return Di(e, function(r) {
    return hn(t, i, r);
  });
}, ys = [].slice, wa = function(t, i) {
  return t && je(t) && "length" in t && (!i && !t.length || t.length - 1 in t && je(t[0])) && !t.nodeType && t !== $e;
}, Kl = function(t, i, e) {
  return e === void 0 && (e = []), t.forEach(function(r) {
    var n;
    return zt(r) && !i || wa(r, 1) ? (n = e).push.apply(n, ze(r)) : e.push(r);
  }) || e;
}, ze = function(t, i, e) {
  return lt && !i && lt.selector ? lt.selector(t) : zt(t) && !e && (_s || !Cr()) ? ys.call((i || Hs).querySelectorAll(t), 0) : Kt(t) ? Kl(t, e) : wa(t) ? ys.call(t, 0) : t ? [t] : [];
}, ws = function(t) {
  return t = ze(t)[0] || rn("Invalid scope") || {}, function(i) {
    var e = t.current || t.nativeElement || t;
    return ze(i, e.querySelectorAll ? e : e === t ? rn("Invalid scope") || Hs.createElement("div") : t);
  };
}, xa = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, ba = function(t) {
  if (gt(t))
    return t;
  var i = je(t) ? t : {
    each: t
  }, e = $i(i.ease), r = i.from || 0, n = parseFloat(i.base) || 0, o = {}, a = r > 0 && r < 1, l = isNaN(r) || a, u = i.axis, c = r, d = r;
  return zt(r) ? c = d = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[r] || 0 : !a && l && (c = r[0], d = r[1]), function(h, f, _) {
    var p = (_ || i).length, m = o[p], b, w, S, v, T, P, x, E, k;
    if (!m) {
      if (k = i.grid === "auto" ? 0 : (i.grid || [1, Ae])[1], !k) {
        for (x = -Ae; x < (x = _[k++].getBoundingClientRect().left) && k < p; )
          ;
        k < p && k--;
      }
      for (m = o[p] = [], b = l ? Math.min(k, p) * c - 0.5 : r % k, w = k === Ae ? 0 : l ? p * d / k - 0.5 : r / k | 0, x = 0, E = Ae, P = 0; P < p; P++)
        S = P % k - b, v = w - (P / k | 0), m[P] = T = u ? Math.abs(u === "y" ? v : S) : na(S * S + v * v), T > x && (x = T), T < E && (E = T);
      r === "random" && xa(m), m.max = x - E, m.min = E, m.v = p = (parseFloat(i.amount) || parseFloat(i.each) * (k > p ? p - 1 : u ? u === "y" ? p / k : k : Math.max(k, p / k)) || 0) * (r === "edges" ? -1 : 1), m.b = p < 0 ? n - p : n, m.u = qt(i.amount || i.each) || 0, e = e && p < 0 ? lu(e) : e;
    }
    return p = (m[h] - m.min) / m.max || 0, ct(m.b + (e ? e(p) : p) * m.v) + m.u;
  };
}, xs = function(t) {
  var i = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(e) {
    var r = ct(Math.round(parseFloat(e) / t) * t * i);
    return (r - r % 1) / i + (ui(e) ? 0 : qt(e));
  };
}, Ta = function(t, i) {
  var e = Kt(t), r, n;
  return !e && je(t) && (r = e = t.radius || Ae, t.values ? (t = ze(t.values), (n = !ui(t[0])) && (r *= r)) : t = xs(t.increment)), Di(i, e ? gt(t) ? function(o) {
    return n = t(o), Math.abs(n - o) <= r ? n : o;
  } : function(o) {
    for (var a = parseFloat(n ? o.x : o), l = parseFloat(n ? o.y : 0), u = Ae, c = 0, d = t.length, h, f; d--; )
      n ? (h = t[d].x - a, f = t[d].y - l, h = h * h + f * f) : h = Math.abs(t[d] - a), h < u && (u = h, c = d);
    return c = !r || u <= r ? t[c] : o, n || c === o || ui(o) ? c : c + qt(o);
  } : xs(t));
}, Sa = function(t, i, e, r) {
  return Di(Kt(t) ? !i : e === !0 ? !!(e = 0) : !r, function() {
    return Kt(t) ? t[~~(Math.random() * t.length)] : (e = e || 1e-5) && (r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1) && Math.floor(Math.round((t - e / 2 + Math.random() * (i - t + e * 0.99)) / e) * e * r) / r;
  });
}, Ql = function() {
  for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
    i[e] = arguments[e];
  return function(r) {
    return i.reduce(function(n, o) {
      return o(n);
    }, r);
  };
}, Zl = function(t, i) {
  return function(e) {
    return t(parseFloat(e)) + (i || qt(e));
  };
}, jl = function(t, i, e) {
  return ka(t, i, 0, 1, e);
}, Ca = function(t, i, e) {
  return Di(e, function(r) {
    return t[~~i(r)];
  });
}, Jl = function s(t, i, e) {
  var r = i - t;
  return Kt(t) ? Ca(t, s(0, t.length), i) : Di(e, function(n) {
    return (r + (n - t) % r) % r + t;
  });
}, tu = function s(t, i, e) {
  var r = i - t, n = r * 2;
  return Kt(t) ? Ca(t, s(0, t.length - 1), i) : Di(e, function(o) {
    return o = (n + (o - t) % n) % n || 0, t + (o > r ? n - o : o);
  });
}, sn = function(t) {
  return t.replace(Al, function(i) {
    var e = i.indexOf("[") + 1, r = i.substring(e || 7, e ? i.indexOf("]") : i.length - 1).split(zl);
    return Sa(e ? r : +r[0], e ? 0 : +r[1], +r[2] || 1e-5);
  });
}, ka = function(t, i, e, r, n) {
  var o = i - t, a = r - e;
  return Di(n, function(l) {
    return e + ((l - t) / o * a || 0);
  });
}, eu = function s(t, i, e, r) {
  var n = isNaN(t + i) ? 0 : function(f) {
    return (1 - f) * t + f * i;
  };
  if (!n) {
    var o = zt(t), a = {}, l, u, c, d, h;
    if (e === !0 && (r = 1) && (e = null), o)
      t = {
        p: t
      }, i = {
        p: i
      };
    else if (Kt(t) && !Kt(i)) {
      for (c = [], d = t.length, h = d - 2, u = 1; u < d; u++)
        c.push(s(t[u - 1], t[u]));
      d--, n = function(_) {
        _ *= d;
        var p = Math.min(h, ~~_);
        return c[p](_ - p);
      }, e = i;
    } else r || (t = br(Kt(t) ? [] : {}, t));
    if (!c) {
      for (l in i)
        Ks.call(a, t, l, "get", i[l]);
      n = function(_) {
        return Js(_, a) || (o ? t.p : t);
      };
    }
  }
  return Di(e, n);
}, yo = function(t, i, e) {
  var r = t.labels, n = Ae, o, a, l;
  for (o in r)
    a = r[o] - i, a < 0 == !!e && a && n > (a = Math.abs(a)) && (l = o, n = a);
  return l;
}, Se = function(t, i, e) {
  var r = t.vars, n = r[i], o = lt, a = t._ctx, l, u, c;
  if (n)
    return l = r[i + "Params"], u = r.callbackScope || t, e && Si.length && Yn(), a && (lt = a), c = l ? n.apply(u, l) : n.call(u), lt = o, c;
}, Nr = function(t) {
  return Pi(t), t.scrollTrigger && t.scrollTrigger.kill(!!Yt), t.progress() < 1 && Se(t, "onInterrupt"), t;
}, hr, Pa = [], Ea = function(t) {
  if (t)
    if (t = !t.name && t.default || t, Ws() || t.headless) {
      var i = t.name, e = gt(t), r = i && !e && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: nn,
        render: Js,
        add: Ks,
        kill: vu,
        modifier: mu,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: js,
        aliases: {},
        register: 0
      };
      if (Cr(), t !== r) {
        if (ye[i])
          return;
        Ee(r, Ee(Bn(t, n), o)), br(r.prototype, br(n, Bn(t, o))), ye[r.prop = i] = r, t.targetTest && (Mn.push(r), Vs[i] = 1), i = (i === "css" ? "CSS" : i.charAt(0).toUpperCase() + i.substr(1)) + "Plugin";
      }
      ca(i, r), t.register && t.register(de, r, fe);
    } else
      Pa.push(t);
}, nt = 255, Fr = {
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
}, is = function(t, i, e) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? i + (e - i) * t * 6 : t < 0.5 ? e : t * 3 < 2 ? i + (e - i) * (2 / 3 - t) * 6 : i) * nt + 0.5 | 0;
}, Oa = function(t, i, e) {
  var r = t ? ui(t) ? [t >> 16, t >> 8 & nt, t & nt] : 0 : Fr.black, n, o, a, l, u, c, d, h, f, _;
  if (!r) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Fr[t])
      r = Fr[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), o = t.charAt(2), a = t.charAt(3), t = "#" + n + n + o + o + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & nt, r & nt, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & nt, t & nt];
    } else if (t.substr(0, 3) === "hsl") {
      if (r = _ = t.match(po), !i)
        l = +r[0] % 360 / 360, u = +r[1] / 100, c = +r[2] / 100, o = c <= 0.5 ? c * (u + 1) : c + u - c * u, n = c * 2 - o, r.length > 3 && (r[3] *= 1), r[0] = is(l + 1 / 3, n, o), r[1] = is(l, n, o), r[2] = is(l - 1 / 3, n, o);
      else if (~t.indexOf("="))
        return r = t.match(oa), e && r.length < 4 && (r[3] = 1), r;
    } else
      r = t.match(po) || Fr.transparent;
    r = r.map(Number);
  }
  return i && !_ && (n = r[0] / nt, o = r[1] / nt, a = r[2] / nt, d = Math.max(n, o, a), h = Math.min(n, o, a), c = (d + h) / 2, d === h ? l = u = 0 : (f = d - h, u = c > 0.5 ? f / (2 - d - h) : f / (d + h), l = d === n ? (o - a) / f + (o < a ? 6 : 0) : d === o ? (a - n) / f + 2 : (n - o) / f + 4, l *= 60), r[0] = ~~(l + 0.5), r[1] = ~~(u * 100 + 0.5), r[2] = ~~(c * 100 + 0.5)), e && r.length < 4 && (r[3] = 1), r;
}, Ma = function(t) {
  var i = [], e = [], r = -1;
  return t.split(Ci).forEach(function(n) {
    var o = n.match(fr) || [];
    i.push.apply(i, o), e.push(r += o.length + 1);
  }), i.c = e, i;
}, wo = function(t, i, e) {
  var r = "", n = (t + r).match(Ci), o = i ? "hsla(" : "rgba(", a = 0, l, u, c, d;
  if (!n)
    return t;
  if (n = n.map(function(h) {
    return (h = Oa(h, i, 1)) && o + (i ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")";
  }), e && (c = Ma(t), l = e.c, l.join(r) !== c.c.join(r)))
    for (u = t.replace(Ci, "1").split(fr), d = u.length - 1; a < d; a++)
      r += u[a] + (~l.indexOf(a) ? n.shift() || o + "0,0,0,0)" : (c.length ? c : n.length ? n : e).shift());
  if (!u)
    for (u = t.split(Ci), d = u.length - 1; a < d; a++)
      r += u[a] + n[a];
  return r + u[d];
}, Ci = function() {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Fr)
    s += "|" + t + "\\b";
  return new RegExp(s + ")", "gi");
}(), iu = /hsl[a]?\(/, Da = function(t) {
  var i = t.join(" "), e;
  if (Ci.lastIndex = 0, Ci.test(i))
    return e = iu.test(i), t[1] = wo(t[1], e), t[0] = wo(t[0], e, Ma(t[1])), !0;
}, on, be = function() {
  var s = Date.now, t = 500, i = 33, e = s(), r = e, n = 1e3 / 240, o = n, a = [], l, u, c, d, h, f, _ = function p(m) {
    var b = s() - r, w = m === !0, S, v, T, P;
    if ((b > t || b < 0) && (e += b - i), r += b, T = r - e, S = T - o, (S > 0 || w) && (P = ++d.frame, h = T - d.time * 1e3, d.time = T = T / 1e3, o += S + (S >= n ? 4 : n - S), v = 1), w || (l = u(p)), v)
      for (f = 0; f < a.length; f++)
        a[f](T, h, P, m);
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
      la && (!_s && Ws() && ($e = _s = window, Hs = $e.document || {}, Pe.gsap = de, ($e.gsapVersions || ($e.gsapVersions = [])).push(de.version), ua(In || $e.GreenSockGlobals || !$e.gsap && $e || {}), Pa.forEach(Ea)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && d.sleep(), u = c || function(m) {
        return setTimeout(m, o - d.time * 1e3 + 1 | 0);
      }, on = 1, _(2));
    },
    sleep: function() {
      (c ? cancelAnimationFrame : clearTimeout)(l), on = 0, u = nn;
    },
    lagSmoothing: function(m, b) {
      t = m || 1 / 0, i = Math.min(b || 33, t);
    },
    fps: function(m) {
      n = 1e3 / (m || 240), o = d.time * 1e3 + n;
    },
    add: function(m, b, w) {
      var S = b ? function(v, T, P, x) {
        m(v, T, P, x), d.remove(S);
      } : m;
      return d.remove(m), a[w ? "unshift" : "push"](S), Cr(), S;
    },
    remove: function(m, b) {
      ~(b = a.indexOf(m)) && a.splice(b, 1) && f >= b && f--;
    },
    _listeners: a
  }, d;
}(), Cr = function() {
  return !on && be.wake();
}, G = {}, ru = /^[\d.\-M][\d.\-,\s]/, nu = /["']/g, su = function(t) {
  for (var i = {}, e = t.substr(1, t.length - 3).split(":"), r = e[0], n = 1, o = e.length, a, l, u; n < o; n++)
    l = e[n], a = n !== o - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, a), i[r] = isNaN(u) ? u.replace(nu, "").trim() : +u, r = l.substr(a + 1).trim();
  return i;
}, ou = function(t) {
  var i = t.indexOf("(") + 1, e = t.indexOf(")"), r = t.indexOf("(", i);
  return t.substring(i, ~r && r < e ? t.indexOf(")", e + 1) : e);
}, au = function(t) {
  var i = (t + "").split("("), e = G[i[0]];
  return e && i.length > 1 && e.config ? e.config.apply(null, ~t.indexOf("{") ? [su(i[1])] : ou(t).split(",").map(pa)) : G._CE && ru.test(t) ? G._CE("", t) : e;
}, lu = function(t) {
  return function(i) {
    return 1 - t(1 - i);
  };
}, $i = function(t, i) {
  return t && (gt(t) ? t : G[t] || au(t)) || i;
}, tr = function(t, i, e, r) {
  e === void 0 && (e = function(l) {
    return 1 - i(1 - l);
  }), r === void 0 && (r = function(l) {
    return l < 0.5 ? i(l * 2) / 2 : 1 - i((1 - l) * 2) / 2;
  });
  var n = {
    easeIn: i,
    easeOut: e,
    easeInOut: r
  }, o;
  return ce(t, function(a) {
    G[a] = Pe[a] = n, G[o = a.toLowerCase()] = e;
    for (var l in n)
      G[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = G[a + "." + l] = n[l];
  }), n;
}, Ra = function(t) {
  return function(i) {
    return i < 0.5 ? (1 - t(1 - i * 2)) / 2 : 0.5 + t((i - 0.5) * 2) / 2;
  };
}, rs = function s(t, i, e) {
  var r = i >= 1 ? i : 1, n = (e || (t ? 0.3 : 0.45)) / (i < 1 ? i : 1), o = n / ps * (Math.asin(1 / r) || 0), a = function(c) {
    return c === 1 ? 1 : r * Math.pow(2, -10 * c) * Rl((c - o) * n) + 1;
  }, l = t === "out" ? a : t === "in" ? function(u) {
    return 1 - a(1 - u);
  } : Ra(a);
  return n = ps / n, l.config = function(u, c) {
    return s(t, u, c);
  }, l;
}, ns = function s(t, i) {
  i === void 0 && (i = 1.70158);
  var e = function(o) {
    return o ? --o * o * ((i + 1) * o + i) + 1 : 0;
  }, r = t === "out" ? e : t === "in" ? function(n) {
    return 1 - e(1 - n);
  } : Ra(e);
  return r.config = function(n) {
    return s(t, n);
  }, r;
};
ce("Linear,Quad,Cubic,Quart,Quint,Strong", function(s, t) {
  var i = t < 5 ? t + 1 : t;
  tr(s + ",Power" + (i - 1), t ? function(e) {
    return Math.pow(e, i);
  } : function(e) {
    return e;
  }, function(e) {
    return 1 - Math.pow(1 - e, i);
  }, function(e) {
    return e < 0.5 ? Math.pow(e * 2, i) / 2 : 1 - Math.pow((1 - e) * 2, i) / 2;
  });
});
G.Linear.easeNone = G.none = G.Linear.easeIn;
tr("Elastic", rs("in"), rs("out"), rs());
(function(s, t) {
  var i = 1 / t, e = 2 * i, r = 2.5 * i, n = function(a) {
    return a < i ? s * a * a : a < e ? s * Math.pow(a - 1.5 / t, 2) + 0.75 : a < r ? s * (a -= 2.25 / t) * a + 0.9375 : s * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  tr("Bounce", function(o) {
    return 1 - n(1 - o);
  }, n);
})(7.5625, 2.75);
tr("Expo", function(s) {
  return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
});
tr("Circ", function(s) {
  return -(na(1 - s * s) - 1);
});
tr("Sine", function(s) {
  return s === 1 ? 1 : -Dl(s * Ol) + 1;
});
tr("Back", ns("in"), ns("out"), ns());
G.SteppedEase = G.steps = Pe.SteppedEase = {
  config: function(t, i) {
    t === void 0 && (t = 1);
    var e = 1 / t, r = t + (i ? 0 : 1), n = i ? 1 : 0, o = 1 - st;
    return function(a) {
      return ((r * hn(0, o, a) | 0) + n) * e;
    };
  }
};
en.ease = G["quad.out"];
ce("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(s) {
  return $s += s + "," + s + "Params,";
});
var Aa = function(t, i) {
  this.id = Ml++, t._gsap = this, this.target = t, this.harness = i, this.get = i ? i.get : ha, this.set = i ? i.getSetter : js;
}, an = /* @__PURE__ */ function() {
  function s(i) {
    this.vars = i, this._delay = +i.delay || 0, (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) && (this._rDelay = i.repeatDelay || 0, this._yoyo = !!i.yoyo || !!i.yoyoEase), this._ts = 1, Sr(this, +i.duration, 1, 1), this.data = i.data, lt && (this._ctx = lt, lt.data.push(this)), on || be.wake();
  }
  var t = s.prototype;
  return t.delay = function(e) {
    return e || e === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay;
  }, t.duration = function(e) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(e) {
    return arguments.length ? (this._dirty = 0, Sr(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(e, r) {
    if (Cr(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (Zn(this, e), !n._dp || n.parent || ma(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && Ge(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== e || !this._dur && !r || this._initted && Math.abs(this._zTime) === st || !this._initted && this._dur && e || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), da(this, e, r)), this;
  }, t.time = function(e, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + mo(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), r) : this._time;
  }, t.totalProgress = function(e, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * e, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(e, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) + mo(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(e, r) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (e - 1) * n, r) : this._repeat ? Tr(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(e, r) {
    if (!arguments.length)
      return this._rts === -st ? 0 : this._rts;
    if (this._rts === e)
      return this;
    var n = this.parent && this._ts ? Xn(this.parent._time, this) : this._tTime;
    return this._rts = +e || 0, this._ts = this._ps || e === -st ? 0 : this._rts, this.totalTime(hn(-Math.abs(this._delay), this.totalDuration(), n), r !== !1), Qn(this), Wl(this);
  }, t.paused = function(e) {
    return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Cr(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== st && (this._tTime -= st)))), this) : this._ps;
  }, t.startTime = function(e) {
    if (arguments.length) {
      this._start = ct(e);
      var r = this.parent || this._dp;
      return r && (r._sort || !this.parent) && Ge(r, this, this._start - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(e) {
    return this._start + (ue(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(e) {
    var r = this.parent || this._dp;
    return r ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Xn(r.rawTime(e), this) : this._tTime : this._tTime;
  }, t.revert = function(e) {
    e === void 0 && (e = Il);
    var r = Yt;
    return Yt = e, Gs(this) && (this.timeline && this.timeline.revert(e), this.totalTime(-0.01, e.suppressEvents)), this.data !== "nested" && e.kill !== !1 && this.kill(), Yt = r, this;
  }, t.globalTime = function(e) {
    for (var r = this, n = arguments.length ? e : r.rawTime(); r; )
      n = r._start + n / (Math.abs(r._ts) || 1), r = r._dp;
    return !this.parent && this._sat ? this._sat.globalTime(e) : n;
  }, t.repeat = function(e) {
    return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, vo(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(e) {
    if (arguments.length) {
      var r = this._time;
      return this._rDelay = e, vo(this), r ? this.time(r) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(e) {
    return arguments.length ? (this._yoyo = e, this) : this._yoyo;
  }, t.seek = function(e, r) {
    return this.totalTime(Me(this, e), ue(r));
  }, t.restart = function(e, r) {
    return this.play().totalTime(e ? -this._delay : 0, ue(r)), this._dur || (this._zTime = -st), this;
  }, t.play = function(e, r) {
    return e != null && this.seek(e, r), this.reversed(!1).paused(!1);
  }, t.reverse = function(e, r) {
    return e != null && this.seek(e || this.totalDuration(), r), this.reversed(!0).paused(!1);
  }, t.pause = function(e, r) {
    return e != null && this.seek(e, r), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(e) {
    return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -st : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -st, this;
  }, t.isActive = function() {
    var e = this.parent || this._dp, r = this._start, n;
    return !!(!e || this._ts && this._initted && e.isActive() && (n = e.rawTime(!0)) >= r && n < this.endTime(!0) - st);
  }, t.eventCallback = function(e, r, n) {
    var o = this.vars;
    return arguments.length > 1 ? (r ? (o[e] = r, n && (o[e + "Params"] = n), e === "onUpdate" && (this._onUpdate = r)) : delete o[e], this) : o[e];
  }, t.then = function(e) {
    var r = this, n = r._prom;
    return new Promise(function(o) {
      var a = gt(e) ? e : _a, l = function() {
        var c = r.then;
        r.then = null, n && n(), gt(a) && (a = a(r)) && (a.then || a === r) && (r.then = c), o(a), r.then = c;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? l() : r._prom = l;
    });
  }, t.kill = function() {
    Nr(this);
  }, s;
}();
Ee(an.prototype, {
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
var le = /* @__PURE__ */ function(s) {
  ra(t, s);
  function t(e, r) {
    var n;
    return e === void 0 && (e = {}), n = s.call(this, e) || this, n.labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = ue(e.sortChildren), ft && Ge(e.parent || ft, ni(n), r), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && va(ni(n), e.scrollTrigger), n;
  }
  var i = t.prototype;
  return i.to = function(r, n, o) {
    return Ur(0, arguments, this), this;
  }, i.from = function(r, n, o) {
    return Ur(1, arguments, this), this;
  }, i.fromTo = function(r, n, o, a) {
    return Ur(2, arguments, this), this;
  }, i.set = function(r, n, o) {
    return n.duration = 0, n.parent = this, Hr(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new kt(r, n, Me(this, o), 1), this;
  }, i.call = function(r, n, o) {
    return Ge(this, kt.delayedCall(0, r, n), o);
  }, i.staggerTo = function(r, n, o, a, l, u, c) {
    return o.duration = n, o.stagger = o.stagger || a, o.onComplete = u, o.onCompleteParams = c, o.parent = this, new kt(r, o, Me(this, l)), this;
  }, i.staggerFrom = function(r, n, o, a, l, u, c) {
    return o.runBackwards = 1, Hr(o).immediateRender = ue(o.immediateRender), this.staggerTo(r, n, o, a, l, u, c);
  }, i.staggerFromTo = function(r, n, o, a, l, u, c, d) {
    return a.startAt = o, Hr(a).immediateRender = ue(a.immediateRender), this.staggerTo(r, n, a, l, u, c, d);
  }, i.render = function(r, n, o) {
    var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = r <= 0 ? 0 : ct(r), d = this._zTime < 0 != r < 0 && (this._initted || !u), h, f, _, p, m, b, w, S, v, T, P, x;
    if (this !== ft && c > l && r >= 0 && (c = l), c !== this._tTime || o || d) {
      if (a !== this._time && u && (c += this._time - a, r += this._time - a), h = c, v = this._start, S = this._ts, b = !S, d && (u || (a = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
        if (P = this._yoyo, m = u + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(m * 100 + r, n, o);
        if (h = ct(c % m), c === l ? (p = this._repeat, h = u) : (T = ct(c / m), p = ~~T, p && p === T && (h = u, p--), h > u && (h = u)), T = Tr(this._tTime, m), !a && this._tTime && T !== p && this._tTime - T * m - this._dur <= 0 && (T = p), P && p & 1 && (h = u - h, x = 1), p !== T && !this._lock) {
          var E = P && T & 1, k = E === (P && p & 1);
          if (p < T && (E = !E), a = E ? 0 : c % u ? u : c, this._lock = 1, this.render(a || (x ? 0 : ct(p * m)), n, !u)._lock = 0, this._tTime = c, !n && this.parent && Se(this, "onRepeat"), this.vars.repeatRefresh && !x && (this.invalidate()._lock = 1, T = p), a && a !== this._time || b !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, l = this._tDur, k && (this._lock = 2, a = E ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !x && this.invalidate()), this._lock = 0, !this._ts && !b)
            return this;
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (w = $l(this, ct(a), ct(h)), w && (c -= h - (h = w._start))), this._tTime = c, this._time = h, this._act = !!S, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, a = 0), !a && c && u && !n && !T && (Se(this, "onStart"), this._tTime !== c))
        return this;
      if (h >= a && r >= 0)
        for (f = this._first; f; ) {
          if (_ = f._next, (f._act || h >= f._start) && f._ts && w !== f) {
            if (f.parent !== this)
              return this.render(r, n, o);
            if (f.render(f._ts > 0 ? (h - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (h - f._start) * f._ts, n, o), h !== this._time || !this._ts && !b) {
              w = 0, _ && (c += this._zTime = -st);
              break;
            }
          }
          f = _;
        }
      else {
        f = this._last;
        for (var C = r < 0 ? r : h; f; ) {
          if (_ = f._prev, (f._act || C <= f._end) && f._ts && w !== f) {
            if (f.parent !== this)
              return this.render(r, n, o);
            if (f.render(f._ts > 0 ? (C - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (C - f._start) * f._ts, n, o || Yt && Gs(f)), h !== this._time || !this._ts && !b) {
              w = 0, _ && (c += this._zTime = C ? -st : st);
              break;
            }
          }
          f = _;
        }
      }
      if (w && !n && (this.pause(), w.render(h >= a ? 0 : -st)._zTime = h >= a ? 1 : -1, this._ts))
        return this._start = v, Qn(this), this.render(r, n, o);
      this._onUpdate && !n && Se(this, "onUpdate", !0), (c === l && this._tTime >= this.totalDuration() || !c && a) && (v === this._start || Math.abs(S) !== Math.abs(this._ts)) && (this._lock || ((r || !u) && (c === l && this._ts > 0 || !c && this._ts < 0) && Pi(this, 1), !n && !(r < 0 && !a) && (c || a || !l) && (Se(this, c === l && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, i.add = function(r, n) {
    var o = this;
    if (ui(n) || (n = Me(this, n, r)), !(r instanceof an)) {
      if (Kt(r))
        return r.forEach(function(a) {
          return o.add(a, n);
        }), this;
      if (zt(r))
        return this.addLabel(r, n);
      if (gt(r))
        r = kt.delayedCall(0, r);
      else
        return this;
    }
    return this !== r ? Ge(this, r, n) : this;
  }, i.getChildren = function(r, n, o, a) {
    r === void 0 && (r = !0), n === void 0 && (n = !0), o === void 0 && (o = !0), a === void 0 && (a = -Ae);
    for (var l = [], u = this._first; u; )
      u._start >= a && (u instanceof kt ? n && l.push(u) : (o && l.push(u), r && l.push.apply(l, u.getChildren(!0, n, o)))), u = u._next;
    return l;
  }, i.getById = function(r) {
    for (var n = this.getChildren(1, 1, 1), o = n.length; o--; )
      if (n[o].vars.id === r)
        return n[o];
  }, i.remove = function(r) {
    return zt(r) ? this.removeLabel(r) : gt(r) ? this.killTweensOf(r) : (r.parent === this && Kn(this, r), r === this._recent && (this._recent = this._last), Vi(this));
  }, i.totalTime = function(r, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ct(be.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), s.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime;
  }, i.addLabel = function(r, n) {
    return this.labels[r] = Me(this, n), this;
  }, i.removeLabel = function(r) {
    return delete this.labels[r], this;
  }, i.addPause = function(r, n, o) {
    var a = kt.delayedCall(0, n || nn, o);
    return a.data = "isPause", this._hasPause = 1, Ge(this, a, Me(this, r));
  }, i.removePause = function(r) {
    var n = this._first;
    for (r = Me(this, r); n; )
      n._start === r && n.data === "isPause" && Pi(n), n = n._next;
  }, i.killTweensOf = function(r, n, o) {
    for (var a = this.getTweensOf(r, o), l = a.length; l--; )
      yi !== a[l] && a[l].kill(r, n);
    return this;
  }, i.getTweensOf = function(r, n) {
    for (var o = [], a = ze(r), l = this._first, u = ui(n), c; l; )
      l instanceof kt ? Yl(l._targets, a) && (u ? (!yi || l._initted && l._ts) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) && o.push(l) : (c = l.getTweensOf(a, n)).length && o.push.apply(o, c), l = l._next;
    return o;
  }, i.tweenTo = function(r, n) {
    n = n || {};
    var o = this, a = Me(o, r), l = n, u = l.startAt, c = l.onStart, d = l.onStartParams, h = l.immediateRender, f, _ = kt.to(o, Ee({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: n.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || st,
      onStart: function() {
        if (o.pause(), !f) {
          var m = n.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale());
          _._dur !== m && Sr(_, m, 0, 1).render(_._time, !0, !0), f = 1;
        }
        c && c.apply(_, d || []);
      }
    }, n));
    return h ? _.render(0) : _;
  }, i.tweenFromTo = function(r, n, o) {
    return this.tweenTo(n, Ee({
      startAt: {
        time: Me(this, r)
      }
    }, o));
  }, i.recent = function() {
    return this._recent;
  }, i.nextLabel = function(r) {
    return r === void 0 && (r = this._time), yo(this, Me(this, r));
  }, i.previousLabel = function(r) {
    return r === void 0 && (r = this._time), yo(this, Me(this, r), 1);
  }, i.currentLabel = function(r) {
    return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + st);
  }, i.shiftChildren = function(r, n, o) {
    o === void 0 && (o = 0);
    var a = this._first, l = this.labels, u;
    for (r = ct(r); a; )
      a._start >= o && (a._start += r, a._end += r), a = a._next;
    if (n)
      for (u in l)
        l[u] >= o && (l[u] += r);
    return Vi(this);
  }, i.invalidate = function(r) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(r), n = n._next;
    return s.prototype.invalidate.call(this, r);
  }, i.clear = function(r) {
    r === void 0 && (r = !0);
    for (var n = this._first, o; n; )
      o = n._next, this.remove(n), n = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Vi(this);
  }, i.totalDuration = function(r) {
    var n = 0, o = this, a = o._last, l = Ae, u, c, d;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -r : r));
    if (o._dirty) {
      for (d = o.parent; a; )
        u = a._prev, a._dirty && a.totalDuration(), c = a._start, c > l && o._sort && a._ts && !o._lock ? (o._lock = 1, Ge(o, a, c - a._delay, 1)._lock = 0) : l = c, c < 0 && a._ts && (n -= c, (!d && !o._dp || d && d.smoothChildTiming) && (o._start += ct(c / o._ts), o._time -= c, o._tTime -= c), o.shiftChildren(-c, !1, -1 / 0), l = 0), a._end > n && a._ts && (n = a._end), a = u;
      Sr(o, o === ft && o._time > n ? o._time : n, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, t.updateRoot = function(r) {
    if (ft._ts && (da(ft, Xn(r, ft)), fa = be.frame), be.frame >= _o) {
      _o += ke.autoSleep || 120;
      var n = ft._first;
      if ((!n || !n._ts) && ke.autoSleep && be._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || be.sleep();
      }
    }
  }, t;
}(an);
Ee(le.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var uu = function(t, i, e, r, n, o, a) {
  var l = new fe(this._pt, t, i, 0, 1, Ya, null, n), u = 0, c = 0, d, h, f, _, p, m, b, w;
  for (l.b = e, l.e = r, e += "", r += "", (b = ~r.indexOf("random(")) && (r = sn(r)), o && (w = [e, r], o(w, t, i), e = w[0], r = w[1]), h = e.match(ts) || []; d = ts.exec(r); )
    _ = d[0], p = r.substring(u, d.index), f ? f = (f + 1) % 5 : p.substr(-5) === "rgba(" && (f = 1), _ !== h[c++] && (m = parseFloat(h[c - 1]) || 0, l._pt = {
      _next: l._pt,
      p: p || c === 1 ? p : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: _.charAt(1) === "=" ? pr(m, _) - m : parseFloat(_) - m,
      m: f && f < 4 ? Math.round : 0
    }, u = ts.lastIndex);
  return l.c = u < r.length ? r.substring(u, r.length) : "", l.fp = a, (aa.test(r) || b) && (l.e = 0), this._pt = l, l;
}, Ks = function(t, i, e, r, n, o, a, l, u, c) {
  gt(r) && (r = r(n || 0, t, o));
  var d = t[i], h = e !== "get" ? e : gt(d) ? u ? t[i.indexOf("set") || !gt(t["get" + i.substr(3)]) ? i : "get" + i.substr(3)](u) : t[i]() : d, f = gt(d) ? u ? pu : Fa : Zs, _;
  if (zt(r) && (~r.indexOf("random(") && (r = sn(r)), r.charAt(1) === "=" && (_ = pr(h, r) + (qt(h) || 0), (_ || _ === 0) && (r = _))), !c || h !== r || bs)
    return !isNaN(h * r) && r !== "" ? (_ = new fe(this._pt, t, i, +h || 0, r - (h || 0), typeof d == "boolean" ? gu : Ia, 0, f), u && (_.fp = u), a && _.modifier(a, this, t), this._pt = _) : (!d && !(i in t) && Us(i, r), uu.call(this, t, i, h, r, f, l || ke.stringFilter, u));
}, cu = function(t, i, e, r, n) {
  if (gt(t) && (t = Vr(t, n, i, e, r)), !je(t) || t.style && t.nodeType || Kt(t) || sa(t))
    return zt(t) ? Vr(t, n, i, e, r) : t;
  var o = {}, a;
  for (a in t)
    o[a] = Vr(t[a], n, i, e, r);
  return o;
}, za = function(t, i, e, r, n, o) {
  var a, l, u, c;
  if (ye[t] && (a = new ye[t]()).init(n, a.rawVars ? i[t] : cu(i[t], r, n, o, e), e, r, o) !== !1 && (e._pt = l = new fe(e._pt, n, t, 0, 1, a.render, a, 0, a.priority), e !== hr))
    for (u = e._ptLookup[e._targets.indexOf(n)], c = a._props.length; c--; )
      u[a._props[c]] = l;
  return a;
}, yi, bs, Qs = function s(t, i, e) {
  var r = t.vars, n = r.ease, o = r.startAt, a = r.immediateRender, l = r.lazy, u = r.onUpdate, c = r.runBackwards, d = r.yoyoEase, h = r.keyframes, f = r.autoRevert, _ = t._dur, p = t._startAt, m = t._targets, b = t.parent, w = b && b.data === "nested" ? b.vars.targets : m, S = t._overwrite === "auto" && !Bs, v = t.timeline, T = r.easeReverse || d, P, x, E, k, C, X, M, K, Y, Q, $, z, Z;
  if (v && (!h || !n) && (n = "none"), t._ease = $i(n, en.ease), t._rEase = T && ($i(T) || t._ease), t._from = !v && !!r.runBackwards, t._from && (t.ratio = 1), !v || h && !r.stagger) {
    if (K = m[0] ? Ui(m[0]).harness : 0, z = K && r[K.prop], P = Bn(r, Vs), p && (p._zTime < 0 && p.progress(1), i < 0 && c && a && !f ? p.render(-1, !0) : p.revert(c && _ ? On : Fl), p._lazy = 0), o) {
      if (Pi(t._startAt = kt.set(m, Ee({
        data: "isStart",
        overwrite: !1,
        parent: b,
        immediateRender: !0,
        lazy: !p && ue(l),
        startAt: null,
        delay: 0,
        onUpdate: u && function() {
          return Se(t, "onUpdate");
        },
        stagger: 0
      }, o))), t._startAt._dp = 0, t._startAt._sat = t, i < 0 && (Yt || !a && !f) && t._startAt.revert(On), a && _ && i <= 0 && e <= 0) {
        i && (t._zTime = i);
        return;
      }
    } else if (c && _ && !p) {
      if (i && (a = !1), E = Ee({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !p && ue(l),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: b
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, P), z && (E[K.prop] = z), Pi(t._startAt = kt.set(m, E)), t._startAt._dp = 0, t._startAt._sat = t, i < 0 && (Yt ? t._startAt.revert(On) : t._startAt.render(-1, !0)), t._zTime = i, !a)
        s(t._startAt, st, st);
      else if (!i)
        return;
    }
    for (t._pt = t._ptCache = 0, l = _ && ue(l) || l && !_, x = 0; x < m.length; x++) {
      if (C = m[x], M = C._gsap || qs(m)[x]._gsap, t._ptLookup[x] = Q = {}, gs[M.id] && Si.length && Yn(), $ = w === m ? x : w.indexOf(C), K && (Y = new K()).init(C, z || P, t, $, w) !== !1 && (t._pt = k = new fe(t._pt, C, Y.name, 0, 1, Y.render, Y, 0, Y.priority), Y._props.forEach(function(it) {
        Q[it] = k;
      }), Y.priority && (X = 1)), !K || z)
        for (E in P)
          ye[E] && (Y = za(E, P, t, $, C, w)) ? Y.priority && (X = 1) : Q[E] = k = Ks.call(t, C, E, "get", P[E], $, w, 0, r.stringFilter);
      t._op && t._op[x] && t.kill(C, t._op[x]), S && t._pt && (yi = t, ft.killTweensOf(C, Q, t.globalTime(i)), Z = !t.parent, yi = 0), t._pt && l && (gs[M.id] = 1);
    }
    X && Ba(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = u, t._initted = (!t._op || t._pt) && !Z, h && i <= 0 && v.render(Ae, !0, !0);
}, fu = function(t, i, e, r, n, o, a, l) {
  var u = (t._pt && t._ptCache || (t._ptCache = {}))[i], c, d, h, f;
  if (!u)
    for (u = t._ptCache[i] = [], h = t._ptLookup, f = t._targets.length; f--; ) {
      if (c = h[f][i], c && c.d && c.d._pt)
        for (c = c.d._pt; c && c.p !== i && c.fp !== i; )
          c = c._next;
      if (!c)
        return bs = 1, t.vars[i] = "+=0", Qs(t, a), bs = 0, l ? rn(i + " not eligible for reset. Try splitting into individual properties") : 1;
      u.push(c);
    }
  for (f = u.length; f--; )
    d = u[f], c = d._pt || d, c.s = (r || r === 0) && !n ? r : c.s + (r || 0) + o * c.c, c.c = e - c.s, d.e && (d.e = wt(e) + qt(d.e)), d.b && (d.b = c.s + qt(d.b));
}, hu = function(t, i) {
  var e = t[0] ? Ui(t[0]).harness : 0, r = e && e.aliases, n, o, a, l;
  if (!r)
    return i;
  n = br({}, i);
  for (o in r)
    if (o in n)
      for (l = r[o].split(","), a = l.length; a--; )
        n[l[a]] = n[o];
  return n;
}, du = function(t, i, e, r) {
  var n = i.ease || r || "power1.inOut", o, a;
  if (Kt(i))
    a = e[t] || (e[t] = []), i.forEach(function(l, u) {
      return a.push({
        t: u / (i.length - 1) * 100,
        v: l,
        e: n
      });
    });
  else
    for (o in i)
      a = e[o] || (e[o] = []), o === "ease" || a.push({
        t: parseFloat(t),
        v: i[o],
        e: n
      });
}, Vr = function(t, i, e, r, n) {
  return gt(t) ? t.call(i, e, r, n) : zt(t) && ~t.indexOf("random(") ? sn(t) : t;
}, La = $s + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", Na = {};
ce(La + ",id,stagger,delay,duration,paused,scrollTrigger", function(s) {
  return Na[s] = 1;
});
var kt = /* @__PURE__ */ function(s) {
  ra(t, s);
  function t(e, r, n, o) {
    var a;
    typeof r == "number" && (n.duration = r, r = n, n = null), a = s.call(this, o ? r : Hr(r)) || this;
    var l = a.vars, u = l.duration, c = l.delay, d = l.immediateRender, h = l.stagger, f = l.overwrite, _ = l.keyframes, p = l.defaults, m = l.scrollTrigger, b = r.parent || ft, w = (Kt(e) || sa(e) ? ui(e[0]) : "length" in r) ? [e] : ze(e), S, v, T, P, x, E, k, C;
    if (a._targets = w.length ? qs(w) : rn("GSAP target " + e + " not found. https://gsap.com", !ke.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = f, _ || h || gn(u) || gn(c)) {
      r = a.vars;
      var X = r.easeReverse || r.yoyoEase;
      if (S = a.timeline = new le({
        data: "nested",
        defaults: p || {},
        targets: b && b.data === "nested" ? b.vars.targets : w
      }), S.kill(), S.parent = S._dp = ni(a), S._start = 0, h || gn(u) || gn(c)) {
        if (P = w.length, k = h && ba(h), je(h))
          for (x in h)
            ~La.indexOf(x) && (C || (C = {}), C[x] = h[x]);
        for (v = 0; v < P; v++)
          T = Bn(r, Na), T.stagger = 0, X && (T.easeReverse = X), C && br(T, C), E = w[v], T.duration = +Vr(u, ni(a), v, E, w), T.delay = (+Vr(c, ni(a), v, E, w) || 0) - a._delay, !h && P === 1 && T.delay && (a._delay = c = T.delay, a._start += c, T.delay = 0), S.to(E, T, k ? k(v, E, w) : 0), S._ease = G.none;
        S.duration() ? u = c = 0 : a.timeline = 0;
      } else if (_) {
        Hr(Ee(S.vars.defaults, {
          ease: "none"
        })), S._ease = $i(_.ease || r.ease || "none");
        var M = 0, K, Y, Q;
        if (Kt(_))
          _.forEach(function($) {
            return S.to(w, $, ">");
          }), S.duration();
        else {
          T = {};
          for (x in _)
            x === "ease" || x === "easeEach" || du(x, _[x], T, _.easeEach);
          for (x in T)
            for (K = T[x].sort(function($, z) {
              return $.t - z.t;
            }), M = 0, v = 0; v < K.length; v++)
              Y = K[v], Q = {
                ease: Y.e,
                duration: (Y.t - (v ? K[v - 1].t : 0)) / 100 * u
              }, Q[x] = Y.v, S.to(w, Q, M), M += Q.duration;
          S.duration() < u && S.to({}, {
            duration: u - S.duration()
          });
        }
      }
      u || a.duration(u = S.duration());
    } else
      a.timeline = 0;
    return f === !0 && !Bs && (yi = ni(a), ft.killTweensOf(w), yi = 0), Ge(b, ni(a), n), r.reversed && a.reverse(), r.paused && a.paused(!0), (d || !u && !_ && a._start === ct(b._time) && ue(d) && Hl(ni(a)) && b.data !== "nested") && (a._tTime = -st, a.render(Math.max(0, -c) || 0)), m && va(ni(a), m), a;
  }
  var i = t.prototype;
  return i.render = function(r, n, o) {
    var a = this._time, l = this._tDur, u = this._dur, c = r < 0, d = r > l - st && !c ? l : r < st ? 0 : r, h, f, _, p, m, b, w, S;
    if (!u)
      Vl(this, r, n, o);
    else if (d !== this._tTime || !r || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
      if (h = d, S = this.timeline, this._repeat) {
        if (p = u + this._rDelay, this._repeat < -1 && c)
          return this.totalTime(p * 100 + r, n, o);
        if (h = ct(d % p), d === l ? (_ = this._repeat, h = u) : (m = ct(d / p), _ = ~~m, _ && _ === m ? (h = u, _--) : h > u && (h = u)), b = this._yoyo && _ & 1, b && (h = u - h), m = Tr(this._tTime, p), h === a && !o && this._initted && _ === m)
          return this._tTime = d, this;
        _ !== m && this.vars.repeatRefresh && !b && !this._lock && h !== p && this._initted && (this._lock = o = 1, this.render(ct(p * _), !0).invalidate()._lock = 0);
      }
      if (!this._initted) {
        if (ya(this, c ? r : h, o, n, d))
          return this._tTime = 0, this;
        if (a !== this._time && !(o && this.vars.repeatRefresh && _ !== m))
          return this;
        if (u !== this._dur)
          return this.render(r, n, o);
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
      if (this._from && (this.ratio = w = 1 - w), this._tTime = d, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), !a && d && !n && !m && (Se(this, "onStart"), this._tTime !== d))
        return this;
      for (f = this._pt; f; )
        f.r(w, f.d), f = f._next;
      S && S.render(r < 0 ? r : S._dur * S._ease(h / this._dur), n, o) || this._startAt && (this._zTime = r), this._onUpdate && !n && (c && ms(this, r, n, o), Se(this, "onUpdate")), this._repeat && _ !== m && this.vars.onRepeat && !n && this.parent && Se(this, "onRepeat"), (d === this._tDur || !d) && this._tTime === d && (c && !this._onUpdate && ms(this, r, !0, !0), (r || !u) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && Pi(this, 1), !n && !(c && !a) && (d || a || b) && (Se(this, d === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, i.targets = function() {
    return this._targets;
  }, i.invalidate = function(r) {
    return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), s.prototype.invalidate.call(this, r);
  }, i.resetTo = function(r, n, o, a, l) {
    on || be.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || Qs(this, u), c = this._ease(u / this._dur), fu(this, r, n, o, a, c, u, l) ? this.resetTo(r, n, o, a, 1) : (Zn(this, 0), this.parent || ga(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, i.kill = function(r, n) {
    if (n === void 0 && (n = "all"), !r && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Nr(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Yt), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, n, yi && yi.vars.overwrite !== !0)._first || Nr(this), this.parent && o !== this.timeline.totalDuration() && Sr(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, l = r ? ze(r) : a, u = this._ptLookup, c = this._pt, d, h, f, _, p, m, b;
    if ((!n || n === "all") && Xl(a, l))
      return n === "all" && (this._pt = 0), Nr(this);
    for (d = this._op = this._op || [], n !== "all" && (zt(n) && (p = {}, ce(n, function(w) {
      return p[w] = 1;
    }), n = p), n = hu(a, n)), b = a.length; b--; )
      if (~l.indexOf(a[b])) {
        h = u[b], n === "all" ? (d[b] = n, _ = h, f = {}) : (f = d[b] = d[b] || {}, _ = n);
        for (p in _)
          m = h && h[p], m && ((!("kill" in m.d) || m.d.kill(p) === !0) && Kn(this, m, "_pt"), delete h[p]), f !== "all" && (f[p] = 1);
      }
    return this._initted && !this._pt && c && Nr(this), this;
  }, t.to = function(r, n) {
    return new t(r, n, arguments[2]);
  }, t.from = function(r, n) {
    return Ur(1, arguments);
  }, t.delayedCall = function(r, n, o, a) {
    return new t(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: r,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: o,
      onReverseCompleteParams: o,
      callbackScope: a
    });
  }, t.fromTo = function(r, n, o) {
    return Ur(2, arguments);
  }, t.set = function(r, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n);
  }, t.killTweensOf = function(r, n, o) {
    return ft.killTweensOf(r, n, o);
  }, t;
}(an);
Ee(kt.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
ce("staggerTo,staggerFrom,staggerFromTo", function(s) {
  kt[s] = function() {
    var t = new le(), i = ys.call(arguments, 0);
    return i.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), t[s].apply(t, i);
  };
});
var Zs = function(t, i, e) {
  return t[i] = e;
}, Fa = function(t, i, e) {
  return t[i](e);
}, pu = function(t, i, e, r) {
  return t[i](r.fp, e);
}, _u = function(t, i, e) {
  return t.setAttribute(i, e);
}, js = function(t, i) {
  return gt(t[i]) ? Fa : Xs(t[i]) && t.setAttribute ? _u : Zs;
}, Ia = function(t, i) {
  return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e6) / 1e6, i);
}, gu = function(t, i) {
  return i.set(i.t, i.p, !!(i.s + i.c * t), i);
}, Ya = function(t, i) {
  var e = i._pt, r = "";
  if (!t && i.b)
    r = i.b;
  else if (t === 1 && i.e)
    r = i.e;
  else {
    for (; e; )
      r = e.p + (e.m ? e.m(e.s + e.c * t) : Math.round((e.s + e.c * t) * 1e4) / 1e4) + r, e = e._next;
    r += i.c;
  }
  i.set(i.t, i.p, r, i);
}, Js = function(t, i) {
  for (var e = i._pt; e; )
    e.r(t, e.d), e = e._next;
}, mu = function(t, i, e, r) {
  for (var n = this._pt, o; n; )
    o = n._next, n.p === r && n.modifier(t, i, e), n = o;
}, vu = function(t) {
  for (var i = this._pt, e, r; i; )
    r = i._next, i.p === t && !i.op || i.op === t ? Kn(this, i, "_pt") : i.dep || (e = 1), i = r;
  return !e;
}, yu = function(t, i, e, r) {
  r.mSet(t, i, r.m.call(r.tween, e, r.mt), r);
}, Ba = function(t) {
  for (var i = t._pt, e, r, n, o; i; ) {
    for (e = i._next, r = n; r && r.pr > i.pr; )
      r = r._next;
    (i._prev = r ? r._prev : o) ? i._prev._next = i : n = i, (i._next = r) ? r._prev = i : o = i, i = e;
  }
  t._pt = n;
}, fe = /* @__PURE__ */ function() {
  function s(i, e, r, n, o, a, l, u, c) {
    this.t = e, this.s = n, this.c = o, this.p = r, this.r = a || Ia, this.d = l || this, this.set = u || Zs, this.pr = c || 0, this._next = i, i && (i._prev = this);
  }
  var t = s.prototype;
  return t.modifier = function(e, r, n) {
    this.mSet = this.mSet || this.set, this.set = yu, this.m = e, this.mt = n, this.tween = r;
  }, s;
}();
ce($s + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(s) {
  return Vs[s] = 1;
});
Pe.TweenMax = Pe.TweenLite = kt;
Pe.TimelineLite = Pe.TimelineMax = le;
ft = new le({
  sortChildren: !1,
  defaults: en,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
ke.stringFilter = Da;
var qi = [], Dn = {}, wu = [], xo = 0, xu = 0, ss = function(t) {
  return (Dn[t] || wu).map(function(i) {
    return i();
  });
}, Ts = function() {
  var t = Date.now(), i = [];
  t - xo > 2 && (ss("matchMediaInit"), qi.forEach(function(e) {
    var r = e.queries, n = e.conditions, o, a, l, u;
    for (a in r)
      o = $e.matchMedia(r[a]).matches, o && (l = 1), o !== n[a] && (n[a] = o, u = 1);
    u && (e.revert(), l && i.push(e));
  }), ss("matchMediaRevert"), i.forEach(function(e) {
    return e.onMatch(e, function(r) {
      return e.add(null, r);
    });
  }), xo = t, ss("matchMedia"));
}, Xa = /* @__PURE__ */ function() {
  function s(i, e) {
    this.selector = e && ws(e), this.data = [], this._r = [], this.isReverted = !1, this.id = xu++, i && this.add(i);
  }
  var t = s.prototype;
  return t.add = function(e, r, n) {
    gt(e) && (n = r, r = e, e = gt);
    var o = this, a = function() {
      var u = lt, c = o.selector, d;
      return u && u !== o && u.data.push(o), n && (o.selector = ws(n)), lt = o, d = r.apply(o, arguments), gt(d) && o._r.push(d), lt = u, o.selector = c, o.isReverted = !1, d;
    };
    return o.last = a, e === gt ? a(o, function(l) {
      return o.add(null, l);
    }) : e ? o[e] = a : a;
  }, t.ignore = function(e) {
    var r = lt;
    lt = null, e(this), lt = r;
  }, t.getTweens = function() {
    var e = [];
    return this.data.forEach(function(r) {
      return r instanceof s ? e.push.apply(e, r.getTweens()) : r instanceof kt && !(r.parent && r.parent.data === "nested") && e.push(r);
    }), e;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(e, r) {
    var n = this;
    if (e ? function() {
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
        return c.t.revert(e);
      }), l = n.data.length; l--; )
        u = n.data[l], u instanceof le ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof kt) && u.revert && u.revert(e);
      n._r.forEach(function(c) {
        return c(e, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), r)
      for (var o = qi.length; o--; )
        qi[o].id === this.id && qi.splice(o, 1);
  }, t.revert = function(e) {
    this.kill(e || {});
  }, s;
}(), bu = /* @__PURE__ */ function() {
  function s(i) {
    this.contexts = [], this.scope = i, lt && lt.data.push(this);
  }
  var t = s.prototype;
  return t.add = function(e, r, n) {
    je(e) || (e = {
      matches: e
    });
    var o = new Xa(0, n || this.scope), a = o.conditions = {}, l, u, c;
    lt && !o.selector && (o.selector = lt.selector), this.contexts.push(o), r = o.add("onMatch", r), o.queries = e;
    for (u in e)
      u === "all" ? c = 1 : (l = $e.matchMedia(e[u]), l && (qi.indexOf(o) < 0 && qi.push(o), (a[u] = l.matches) && (c = 1), l.addListener ? l.addListener(Ts) : l.addEventListener("change", Ts)));
    return c && r(o, function(d) {
      return o.add(null, d);
    }), this;
  }, t.revert = function(e) {
    this.kill(e || {});
  }, t.kill = function(e) {
    this.contexts.forEach(function(r) {
      return r.kill(e, !0);
    });
  }, s;
}(), Wn = {
  registerPlugin: function() {
    for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
      i[e] = arguments[e];
    i.forEach(function(r) {
      return Ea(r);
    });
  },
  timeline: function(t) {
    return new le(t);
  },
  getTweensOf: function(t, i) {
    return ft.getTweensOf(t, i);
  },
  getProperty: function(t, i, e, r) {
    zt(t) && (t = ze(t)[0]);
    var n = Ui(t || {}).get, o = e ? _a : pa;
    return e === "native" && (e = ""), t && (i ? o((ye[i] && ye[i].get || n)(t, i, e, r)) : function(a, l, u) {
      return o((ye[a] && ye[a].get || n)(t, a, l, u));
    });
  },
  quickSetter: function(t, i, e) {
    if (t = ze(t), t.length > 1) {
      var r = t.map(function(c) {
        return de.quickSetter(c, i, e);
      }), n = r.length;
      return function(c) {
        for (var d = n; d--; )
          r[d](c);
      };
    }
    t = t[0] || {};
    var o = ye[i], a = Ui(t), l = a.harness && (a.harness.aliases || {})[i] || i, u = o ? function(c) {
      var d = new o();
      hr._pt = 0, d.init(t, e ? c + e : c, hr, 0, [t]), d.render(1, d), hr._pt && Js(1, hr);
    } : a.set(t, l);
    return o ? u : function(c) {
      return u(t, l, e ? c + e : c, a, 1);
    };
  },
  quickTo: function(t, i, e) {
    var r, n = de.to(t, Ee((r = {}, r[i] = "+=0.1", r.paused = !0, r.stagger = 0, r), e || {})), o = function(l, u, c) {
      return n.resetTo(i, l, u, c);
    };
    return o.tween = n, o;
  },
  isTweening: function(t) {
    return ft.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = $i(t.ease, en.ease)), go(en, t || {});
  },
  config: function(t) {
    return go(ke, t || {});
  },
  registerEffect: function(t) {
    var i = t.name, e = t.effect, r = t.plugins, n = t.defaults, o = t.extendTimeline;
    (r || "").split(",").forEach(function(a) {
      return a && !ye[a] && !Pe[a] && rn(i + " effect requires " + a + " plugin.");
    }), es[i] = function(a, l, u) {
      return e(ze(a), Ee(l || {}, n), u);
    }, o && (le.prototype[i] = function(a, l, u) {
      return this.add(es[i](a, je(l) ? l : (u = l) && {}, this), u);
    });
  },
  registerEase: function(t, i) {
    G[t] = $i(i);
  },
  parseEase: function(t, i) {
    return arguments.length ? $i(t, i) : G;
  },
  getById: function(t) {
    return ft.getById(t);
  },
  exportRoot: function(t, i) {
    t === void 0 && (t = {});
    var e = new le(t), r, n;
    for (e.smoothChildTiming = ue(t.smoothChildTiming), ft.remove(e), e._dp = 0, e._time = e._tTime = ft._time, r = ft._first; r; )
      n = r._next, (i || !(!r._dur && r instanceof kt && r.vars.onComplete === r._targets[0])) && Ge(e, r, r._start - r._delay), r = n;
    return Ge(ft, e, 0), e;
  },
  context: function(t, i) {
    return t ? new Xa(t, i) : lt;
  },
  matchMedia: function(t) {
    return new bu(t);
  },
  matchMediaRefresh: function() {
    return qi.forEach(function(t) {
      var i = t.conditions, e, r;
      for (r in i)
        i[r] && (i[r] = !1, e = 1);
      e && t.revert();
    }) || Ts();
  },
  addEventListener: function(t, i) {
    var e = Dn[t] || (Dn[t] = []);
    ~e.indexOf(i) || e.push(i);
  },
  removeEventListener: function(t, i) {
    var e = Dn[t], r = e && e.indexOf(i);
    r >= 0 && e.splice(r, 1);
  },
  utils: {
    wrap: Jl,
    wrapYoyo: tu,
    distribute: ba,
    random: Sa,
    snap: Ta,
    normalize: jl,
    getUnit: qt,
    clamp: Gl,
    splitColor: Oa,
    toArray: ze,
    selector: ws,
    mapRange: ka,
    pipe: Ql,
    unitize: Zl,
    interpolate: eu,
    shuffle: xa
  },
  install: ua,
  effects: es,
  ticker: be,
  updateRoot: le.updateRoot,
  plugins: ye,
  globalTimeline: ft,
  core: {
    PropTween: fe,
    globals: ca,
    Tween: kt,
    Timeline: le,
    Animation: an,
    getCache: Ui,
    _removeLinkedListItem: Kn,
    reverting: function() {
      return Yt;
    },
    context: function(t) {
      return t && lt && (lt.data.push(t), t._ctx = lt), lt;
    },
    suppressOverwrites: function(t) {
      return Bs = t;
    }
  }
};
ce("to,from,fromTo,delayedCall,set,killTweensOf", function(s) {
  return Wn[s] = kt[s];
});
be.add(le.updateRoot);
hr = Wn.to({}, {
  duration: 0
});
var Tu = function(t, i) {
  for (var e = t._pt; e && e.p !== i && e.op !== i && e.fp !== i; )
    e = e._next;
  return e;
}, Su = function(t, i) {
  var e = t._targets, r, n, o;
  for (r in i)
    for (n = e.length; n--; )
      o = t._ptLookup[n][r], o && (o = o.d) && (o._pt && (o = Tu(o, r)), o && o.modifier && o.modifier(i[r], t, e[n], r));
}, os = function(t, i) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(r, n, o) {
      o._onInit = function(a) {
        var l, u;
        if (zt(n) && (l = {}, ce(n, function(c) {
          return l[c] = 1;
        }), n = l), i) {
          l = {};
          for (u in n)
            l[u] = i(n[u]);
          n = l;
        }
        Su(a, n);
      };
    }
  };
}, de = Wn.registerPlugin({
  name: "attr",
  init: function(t, i, e, r, n) {
    var o, a, l;
    this.tween = e;
    for (o in i)
      l = t.getAttribute(o) || "", a = this.add(t, "setAttribute", (l || 0) + "", i[o], r, n, 0, 0, o), a.op = o, a.b = l, this._props.push(o);
  },
  render: function(t, i) {
    for (var e = i._pt; e; )
      Yt ? e.set(e.t, e.p, e.b, e) : e.r(t, e.d), e = e._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(t, i) {
    for (var e = i.length; e--; )
      this.add(t, e, t[e] || 0, i[e], 0, 0, 0, 0, 0, 1);
  }
}, os("roundProps", xs), os("modifiers"), os("snap", Ta)) || Wn;
kt.version = le.version = de.version = "3.15.0";
la = 1;
Ws() && Cr();
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
var bo, wi, _r, to, Wi, To, eo, Cu = function() {
  return typeof window < "u";
}, ci = {}, Yi = 180 / Math.PI, gr = Math.PI / 180, nr = Math.atan2, So = 1e8, io = /([A-Z])/g, ku = /(left|right|width|margin|padding|x)/i, Pu = /[\s,\(]\S/, Ke = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Ss = function(t, i) {
  return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i);
}, Eu = function(t, i) {
  return i.set(i.t, i.p, t === 1 ? i.e : Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i);
}, Ou = function(t, i) {
  return i.set(i.t, i.p, t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b, i);
}, Mu = function(t, i) {
  return i.set(i.t, i.p, t === 1 ? i.e : t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b, i);
}, Du = function(t, i) {
  var e = i.s + i.c * t;
  i.set(i.t, i.p, ~~(e + (e < 0 ? -0.5 : 0.5)) + i.u, i);
}, Wa = function(t, i) {
  return i.set(i.t, i.p, t ? i.e : i.b, i);
}, Ha = function(t, i) {
  return i.set(i.t, i.p, t !== 1 ? i.b : i.e, i);
}, Ru = function(t, i, e) {
  return t.style[i] = e;
}, Au = function(t, i, e) {
  return t.style.setProperty(i, e);
}, zu = function(t, i, e) {
  return t._gsap[i] = e;
}, Lu = function(t, i, e) {
  return t._gsap.scaleX = t._gsap.scaleY = e;
}, Nu = function(t, i, e, r, n) {
  var o = t._gsap;
  o.scaleX = o.scaleY = e, o.renderTransform(n, o);
}, Fu = function(t, i, e, r, n) {
  var o = t._gsap;
  o[i] = e, o.renderTransform(n, o);
}, ht = "transform", he = ht + "Origin", Iu = function s(t, i) {
  var e = this, r = this.target, n = r.style, o = r._gsap;
  if (t in ci && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = Ke[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(a) {
        return e.tfm[a] = si(r, a);
      }) : this.tfm[t] = o.x ? o[t] : si(r, t), t === he && (this.tfm.zOrigin = o.zOrigin);
    else
      return Ke.transform.split(",").forEach(function(a) {
        return s.call(e, a, i);
      });
    if (this.props.indexOf(ht) >= 0)
      return;
    o.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(he, i, "")), t = ht;
  }
  (n || i) && this.props.push(t, i, n[t]);
}, Ua = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, Yu = function() {
  var t = this.props, i = this.target, e = i.style, r = i._gsap, n, o;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? t[n + 1] === 2 ? i[t[n]](t[n + 2]) : i[t[n]] = t[n + 2] : t[n + 2] ? e[t[n]] = t[n + 2] : e.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(io, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      r[o] = this.tfm[o];
    r.svg && (r.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), n = eo(), (!n || !n.isStart) && !e[ht] && (Ua(e), r.zOrigin && e[he] && (e[he] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
  }
}, Va = function(t, i) {
  var e = {
    target: t,
    props: [],
    revert: Yu,
    save: Iu
  };
  return t._gsap || de.core.getCache(t), i && t.style && t.nodeType && i.split(",").forEach(function(r) {
    return e.save(r);
  }), e;
}, $a, Cs = function(t, i) {
  var e = wi.createElementNS ? wi.createElementNS((i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : wi.createElement(t);
  return e && e.style ? e : wi.createElement(t);
}, Ce = function s(t, i, e) {
  var r = getComputedStyle(t);
  return r[i] || r.getPropertyValue(i.replace(io, "-$1").toLowerCase()) || r.getPropertyValue(i) || !e && s(t, kr(i) || i, 1) || "";
}, Co = "O,Moz,ms,Ms,Webkit".split(","), kr = function(t, i, e) {
  var r = i || Wi, n = r.style, o = 5;
  if (t in n && !e)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(Co[o] + t in n); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Co[o] : "") + t;
}, ks = function() {
  Cu() && window.document && (bo = window, wi = bo.document, _r = wi.documentElement, Wi = Cs("div") || {
    style: {}
  }, Cs("div"), ht = kr(ht), he = ht + "Origin", Wi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", $a = !!kr("perspective"), eo = de.core.reverting, to = 1);
}, ko = function(t) {
  var i = t.ownerSVGElement, e = Cs("svg", i && i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = t.cloneNode(!0), n;
  r.style.display = "block", e.appendChild(r), _r.appendChild(e);
  try {
    n = r.getBBox();
  } catch {
  }
  return e.removeChild(r), _r.removeChild(e), n;
}, Po = function(t, i) {
  for (var e = i.length; e--; )
    if (t.hasAttribute(i[e]))
      return t.getAttribute(i[e]);
}, qa = function(t) {
  var i, e;
  try {
    i = t.getBBox();
  } catch {
    i = ko(t), e = 1;
  }
  return i && (i.width || i.height) || e || (i = ko(t)), i && !i.width && !i.x && !i.y ? {
    x: +Po(t, ["x", "cx", "x1"]) || 0,
    y: +Po(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : i;
}, Ga = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && qa(t));
}, Ei = function(t, i) {
  if (i) {
    var e = t.style, r;
    i in ci && i !== he && (i = ht), e.removeProperty ? (r = i.substr(0, 2), (r === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i), e.removeProperty(r === "--" ? i : i.replace(io, "-$1").toLowerCase())) : e.removeAttribute(i);
  }
}, xi = function(t, i, e, r, n, o) {
  var a = new fe(t._pt, i, e, 0, 1, o ? Ha : Wa);
  return t._pt = a, a.b = r, a.e = n, t._props.push(e), a;
}, Eo = {
  deg: 1,
  rad: 1,
  turn: 1
}, Bu = {
  grid: 1,
  flex: 1
}, Oi = function s(t, i, e, r) {
  var n = parseFloat(e) || 0, o = (e + "").trim().substr((n + "").length) || "px", a = Wi.style, l = ku.test(i), u = t.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (l ? "Width" : "Height"), d = 100, h = r === "px", f = r === "%", _, p, m, b;
  if (r === o || !n || Eo[r] || Eo[o])
    return n;
  if (o !== "px" && !h && (n = s(t, i, e, "px")), b = t.getCTM && Ga(t), (f || o === "%") && (ci[i] || ~i.indexOf("adius")))
    return _ = b ? t.getBBox()[l ? "width" : "height"] : t[c], wt(f ? n / _ * d : n / 100 * _);
  if (a[l ? "width" : "height"] = d + (h ? o : r), p = r !== "rem" && ~i.indexOf("adius") || r === "em" && t.appendChild && !u ? t : t.parentNode, b && (p = (t.ownerSVGElement || {}).parentNode), (!p || p === wi || !p.appendChild) && (p = wi.body), m = p._gsap, m && f && m.width && l && m.time === be.time && !m.uncache)
    return wt(n / m.width * d);
  if (f && (i === "height" || i === "width")) {
    var w = t.style[i];
    t.style[i] = d + r, _ = t[c], w ? t.style[i] = w : Ei(t, i);
  } else
    (f || o === "%") && !Bu[Ce(p, "display")] && (a.position = Ce(t, "position")), p === t && (a.position = "static"), p.appendChild(Wi), _ = Wi[c], p.removeChild(Wi), a.position = "absolute";
  return l && f && (m = Ui(p), m.time = be.time, m.width = p[c]), wt(h ? _ * n / d : _ && n ? d / _ * n : 0);
}, si = function(t, i, e, r) {
  var n;
  return to || ks(), i in Ke && i !== "transform" && (i = Ke[i], ~i.indexOf(",") && (i = i.split(",")[0])), ci[i] && i !== "transform" ? (n = un(t, r), n = i !== "transformOrigin" ? n[i] : n.svg ? n.origin : Un(Ce(t, he)) + " " + n.zOrigin + "px") : (n = t.style[i], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = Hn[i] && Hn[i](t, i, e) || Ce(t, i) || ha(t, i) || (i === "opacity" ? 1 : 0))), e && !~(n + "").trim().indexOf(" ") ? Oi(t, i, n, e) + e : n;
}, Xu = function(t, i, e, r) {
  if (!e || e === "none") {
    var n = kr(i, t, 1), o = n && Ce(t, n, 1);
    o && o !== e ? (i = n, e = o) : i === "borderColor" && (e = Ce(t, "borderTopColor"));
  }
  var a = new fe(this._pt, t.style, i, 0, 1, Ya), l = 0, u = 0, c, d, h, f, _, p, m, b, w, S, v, T;
  if (a.b = e, a.e = r, e += "", r += "", r.substring(0, 6) === "var(--" && (r = Ce(t, r.substring(4, r.indexOf(")")))), r === "auto" && (p = t.style[i], t.style[i] = r, r = Ce(t, i) || r, p ? t.style[i] = p : Ei(t, i)), c = [e, r], Da(c), e = c[0], r = c[1], h = e.match(fr) || [], T = r.match(fr) || [], T.length) {
    for (; d = fr.exec(r); )
      m = d[0], w = r.substring(l, d.index), _ ? _ = (_ + 1) % 5 : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") && (_ = 1), m !== (p = h[u++] || "") && (f = parseFloat(p) || 0, v = p.substr((f + "").length), m.charAt(1) === "=" && (m = pr(f, m) + v), b = parseFloat(m), S = m.substr((b + "").length), l = fr.lastIndex - S.length, S || (S = S || ke.units[i] || v, l === r.length && (r += S, a.e += S)), v !== S && (f = Oi(t, i, p, S) || 0), a._pt = {
        _next: a._pt,
        p: w || u === 1 ? w : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: f,
        c: b - f,
        m: _ && _ < 4 || i === "zIndex" ? Math.round : 0
      });
    a.c = l < r.length ? r.substring(l, r.length) : "";
  } else
    a.r = i === "display" && r === "none" ? Ha : Wa;
  return aa.test(r) && (a.e = 0), this._pt = a, a;
}, Oo = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Wu = function(t) {
  var i = t.split(" "), e = i[0], r = i[1] || "50%";
  return (e === "top" || e === "bottom" || r === "left" || r === "right") && (t = e, e = r, r = t), i[0] = Oo[e] || e, i[1] = Oo[r] || r, i.join(" ");
}, Hu = function(t, i) {
  if (i.tween && i.tween._time === i.tween._dur) {
    var e = i.t, r = e.style, n = i.u, o = e._gsap, a, l, u;
    if (n === "all" || n === !0)
      r.cssText = "", l = 1;
    else
      for (n = n.split(","), u = n.length; --u > -1; )
        a = n[u], ci[a] && (l = 1, a = a === "transformOrigin" ? he : ht), Ei(e, a);
    l && (Ei(e, ht), o && (o.svg && e.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", un(e, 1), o.uncache = 1, Ua(r)));
  }
}, Hn = {
  clearProps: function(t, i, e, r, n) {
    if (n.data !== "isFromStart") {
      var o = t._pt = new fe(t._pt, i, e, 0, 0, Hu);
      return o.u = r, o.pr = -10, o.tween = n, t._props.push(e), 1;
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
}, ln = [1, 0, 0, 1, 0, 0], Ka = {}, Qa = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, Mo = function(t) {
  var i = Ce(t, ht);
  return Qa(i) ? ln : i.substr(7).match(oa).map(wt);
}, ro = function(t, i) {
  var e = t._gsap || Ui(t), r = t.style, n = Mo(t), o, a, l, u;
  return e.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix, n = [l.a, l.b, l.c, l.d, l.e, l.f], n.join(",") === "1,0,0,1,0,0" ? ln : n) : (n === ln && !t.offsetParent && t !== _r && !e.svg && (l = r.display, r.display = "block", o = t.parentNode, (!o || !t.offsetParent && !t.getBoundingClientRect().width) && (u = 1, a = t.nextElementSibling, _r.appendChild(t)), n = Mo(t), l ? r.display = l : Ei(t, "display"), u && (a ? o.insertBefore(t, a) : o ? o.appendChild(t) : _r.removeChild(t))), i && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, Ps = function(t, i, e, r, n, o) {
  var a = t._gsap, l = n || ro(t, !0), u = a.xOrigin || 0, c = a.yOrigin || 0, d = a.xOffset || 0, h = a.yOffset || 0, f = l[0], _ = l[1], p = l[2], m = l[3], b = l[4], w = l[5], S = i.split(" "), v = parseFloat(S[0]) || 0, T = parseFloat(S[1]) || 0, P, x, E, k;
  e ? l !== ln && (x = f * m - _ * p) && (E = v * (m / x) + T * (-p / x) + (p * w - m * b) / x, k = v * (-_ / x) + T * (f / x) - (f * w - _ * b) / x, v = E, T = k) : (P = qa(t), v = P.x + (~S[0].indexOf("%") ? v / 100 * P.width : v), T = P.y + (~(S[1] || S[0]).indexOf("%") ? T / 100 * P.height : T)), r || r !== !1 && a.smooth ? (b = v - u, w = T - c, a.xOffset = d + (b * f + w * p) - b, a.yOffset = h + (b * _ + w * m) - w) : a.xOffset = a.yOffset = 0, a.xOrigin = v, a.yOrigin = T, a.smooth = !!r, a.origin = i, a.originIsAbsolute = !!e, t.style[he] = "0px 0px", o && (xi(o, a, "xOrigin", u, v), xi(o, a, "yOrigin", c, T), xi(o, a, "xOffset", d, a.xOffset), xi(o, a, "yOffset", h, a.yOffset)), t.setAttribute("data-svg-origin", v + " " + T);
}, un = function(t, i) {
  var e = t._gsap || new Aa(t);
  if ("x" in e && !i && !e.uncache)
    return e;
  var r = t.style, n = e.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(t), u = Ce(t, he) || "0", c, d, h, f, _, p, m, b, w, S, v, T, P, x, E, k, C, X, M, K, Y, Q, $, z, Z, it, g, ot, Qt, Ne, dt, Lt;
  return c = d = h = p = m = b = w = S = v = 0, f = _ = 1, e.svg = !!(t.getCTM && Ga(t)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (r[ht] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[ht] !== "none" ? l[ht] : "")), r.scale = r.rotate = r.translate = "none"), x = ro(t, e.svg), e.svg && (e.uncache ? (Z = t.getBBox(), u = e.xOrigin - Z.x + "px " + (e.yOrigin - Z.y) + "px", z = "") : z = !i && t.getAttribute("data-svg-origin"), Ps(t, z || u, !!z || e.originIsAbsolute, e.smooth !== !1, x)), T = e.xOrigin || 0, P = e.yOrigin || 0, x !== ln && (X = x[0], M = x[1], K = x[2], Y = x[3], c = Q = x[4], d = $ = x[5], x.length === 6 ? (f = Math.sqrt(X * X + M * M), _ = Math.sqrt(Y * Y + K * K), p = X || M ? nr(M, X) * Yi : 0, w = K || Y ? nr(K, Y) * Yi + p : 0, w && (_ *= Math.abs(Math.cos(w * gr))), e.svg && (c -= T - (T * X + P * K), d -= P - (T * M + P * Y))) : (Lt = x[6], Ne = x[7], g = x[8], ot = x[9], Qt = x[10], dt = x[11], c = x[12], d = x[13], h = x[14], E = nr(Lt, Qt), m = E * Yi, E && (k = Math.cos(-E), C = Math.sin(-E), z = Q * k + g * C, Z = $ * k + ot * C, it = Lt * k + Qt * C, g = Q * -C + g * k, ot = $ * -C + ot * k, Qt = Lt * -C + Qt * k, dt = Ne * -C + dt * k, Q = z, $ = Z, Lt = it), E = nr(-K, Qt), b = E * Yi, E && (k = Math.cos(-E), C = Math.sin(-E), z = X * k - g * C, Z = M * k - ot * C, it = K * k - Qt * C, dt = Y * C + dt * k, X = z, M = Z, K = it), E = nr(M, X), p = E * Yi, E && (k = Math.cos(E), C = Math.sin(E), z = X * k + M * C, Z = Q * k + $ * C, M = M * k - X * C, $ = $ * k - Q * C, X = z, Q = Z), m && Math.abs(m) + Math.abs(p) > 359.9 && (m = p = 0, b = 180 - b), f = wt(Math.sqrt(X * X + M * M + K * K)), _ = wt(Math.sqrt($ * $ + Lt * Lt)), E = nr(Q, $), w = Math.abs(E) > 2e-4 ? E * Yi : 0, v = dt ? 1 / (dt < 0 ? -dt : dt) : 0), e.svg && (z = t.getAttribute("transform"), e.forceCSS = t.setAttribute("transform", "") || !Qa(Ce(t, ht)), z && t.setAttribute("transform", z))), Math.abs(w) > 90 && Math.abs(w) < 270 && (n ? (f *= -1, w += p <= 0 ? 180 : -180, p += p <= 0 ? 180 : -180) : (_ *= -1, w += w <= 0 ? 180 : -180)), i = i || e.uncache, e.x = c - ((e.xPercent = c && (!i && e.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? t.offsetWidth * e.xPercent / 100 : 0) + o, e.y = d - ((e.yPercent = d && (!i && e.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-d) ? -50 : 0))) ? t.offsetHeight * e.yPercent / 100 : 0) + o, e.z = h + o, e.scaleX = wt(f), e.scaleY = wt(_), e.rotation = wt(p) + a, e.rotationX = wt(m) + a, e.rotationY = wt(b) + a, e.skewX = w + a, e.skewY = S + a, e.transformPerspective = v + o, (e.zOrigin = parseFloat(u.split(" ")[2]) || !i && e.zOrigin || 0) && (r[he] = Un(u)), e.xOffset = e.yOffset = 0, e.force3D = ke.force3D, e.renderTransform = e.svg ? Vu : $a ? Za : Uu, e.uncache = 0, e;
}, Un = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, as = function(t, i, e) {
  var r = qt(i);
  return wt(parseFloat(i) + parseFloat(Oi(t, "x", e + "px", r))) + r;
}, Uu = function(t, i) {
  i.z = "0px", i.rotationY = i.rotationX = "0deg", i.force3D = 0, Za(t, i);
}, Fi = "0deg", Ar = "0px", Ii = ") ", Za = function(t, i) {
  var e = i || this, r = e.xPercent, n = e.yPercent, o = e.x, a = e.y, l = e.z, u = e.rotation, c = e.rotationY, d = e.rotationX, h = e.skewX, f = e.skewY, _ = e.scaleX, p = e.scaleY, m = e.transformPerspective, b = e.force3D, w = e.target, S = e.zOrigin, v = "", T = b === "auto" && t && t !== 1 || b === !0;
  if (S && (d !== Fi || c !== Fi)) {
    var P = parseFloat(c) * gr, x = Math.sin(P), E = Math.cos(P), k;
    P = parseFloat(d) * gr, k = Math.cos(P), o = as(w, o, x * k * -S), a = as(w, a, -Math.sin(P) * -S), l = as(w, l, E * k * -S + S);
  }
  m !== Ar && (v += "perspective(" + m + Ii), (r || n) && (v += "translate(" + r + "%, " + n + "%) "), (T || o !== Ar || a !== Ar || l !== Ar) && (v += l !== Ar || T ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Ii), u !== Fi && (v += "rotate(" + u + Ii), c !== Fi && (v += "rotateY(" + c + Ii), d !== Fi && (v += "rotateX(" + d + Ii), (h !== Fi || f !== Fi) && (v += "skew(" + h + ", " + f + Ii), (_ !== 1 || p !== 1) && (v += "scale(" + _ + ", " + p + Ii), w.style[ht] = v || "translate(0, 0)";
}, Vu = function(t, i) {
  var e = i || this, r = e.xPercent, n = e.yPercent, o = e.x, a = e.y, l = e.rotation, u = e.skewX, c = e.skewY, d = e.scaleX, h = e.scaleY, f = e.target, _ = e.xOrigin, p = e.yOrigin, m = e.xOffset, b = e.yOffset, w = e.forceCSS, S = parseFloat(o), v = parseFloat(a), T, P, x, E, k;
  l = parseFloat(l), u = parseFloat(u), c = parseFloat(c), c && (c = parseFloat(c), u += c, l += c), l || u ? (l *= gr, u *= gr, T = Math.cos(l) * d, P = Math.sin(l) * d, x = Math.sin(l - u) * -h, E = Math.cos(l - u) * h, u && (c *= gr, k = Math.tan(u - c), k = Math.sqrt(1 + k * k), x *= k, E *= k, c && (k = Math.tan(c), k = Math.sqrt(1 + k * k), T *= k, P *= k)), T = wt(T), P = wt(P), x = wt(x), E = wt(E)) : (T = d, E = h, P = x = 0), (S && !~(o + "").indexOf("px") || v && !~(a + "").indexOf("px")) && (S = Oi(f, "x", o, "px"), v = Oi(f, "y", a, "px")), (_ || p || m || b) && (S = wt(S + _ - (_ * T + p * x) + m), v = wt(v + p - (_ * P + p * E) + b)), (r || n) && (k = f.getBBox(), S = wt(S + r / 100 * k.width), v = wt(v + n / 100 * k.height)), k = "matrix(" + T + "," + P + "," + x + "," + E + "," + S + "," + v + ")", f.setAttribute("transform", k), w && (f.style[ht] = k);
}, $u = function(t, i, e, r, n) {
  var o = 360, a = zt(n), l = parseFloat(n) * (a && ~n.indexOf("rad") ? Yi : 1), u = l - r, c = r + u + "deg", d, h;
  return a && (d = n.split("_")[1], d === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -o)), d === "cw" && u < 0 ? u = (u + o * So) % o - ~~(u / o) * o : d === "ccw" && u > 0 && (u = (u - o * So) % o - ~~(u / o) * o)), t._pt = h = new fe(t._pt, i, e, r, u, Eu), h.e = c, h.u = "deg", t._props.push(e), h;
}, Do = function(t, i) {
  for (var e in i)
    t[e] = i[e];
  return t;
}, qu = function(t, i, e) {
  var r = Do({}, e._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", o = e.style, a, l, u, c, d, h, f, _;
  r.svg ? (u = e.getAttribute("transform"), e.setAttribute("transform", ""), o[ht] = i, a = un(e, 1), Ei(e, ht), e.setAttribute("transform", u)) : (u = getComputedStyle(e)[ht], o[ht] = i, a = un(e, 1), o[ht] = u);
  for (l in ci)
    u = r[l], c = a[l], u !== c && n.indexOf(l) < 0 && (f = qt(u), _ = qt(c), d = f !== _ ? Oi(e, l, u, _) : parseFloat(u), h = parseFloat(c), t._pt = new fe(t._pt, a, l, d, h - d, Ss), t._pt.u = _ || 0, t._props.push(l));
  Do(a, r);
};
ce("padding,margin,Width,Radius", function(s, t) {
  var i = "Top", e = "Right", r = "Bottom", n = "Left", o = (t < 3 ? [i, e, r, n] : [i + n, i + e, r + e, r + n]).map(function(a) {
    return t < 2 ? s + a : "border" + a + s;
  });
  Hn[t > 1 ? "border" + s : s] = function(a, l, u, c, d) {
    var h, f;
    if (arguments.length < 4)
      return h = o.map(function(_) {
        return si(a, _, u);
      }), f = h.join(" "), f.split(h[0]).length === 5 ? h[0] : f;
    h = (c + "").split(" "), f = {}, o.forEach(function(_, p) {
      return f[_] = h[p] = h[p] || h[(p - 1) / 2 | 0];
    }), a.init(l, f, d);
  };
});
var ja = {
  name: "css",
  register: ks,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, i, e, r, n) {
    var o = this._props, a = t.style, l = e.vars.startAt, u, c, d, h, f, _, p, m, b, w, S, v, T, P, x, E, k;
    to || ks(), this.styles = this.styles || Va(t), E = this.styles.props, this.tween = e;
    for (p in i)
      if (p !== "autoRound" && (c = i[p], !(ye[p] && za(p, i, e, r, t, n)))) {
        if (f = typeof c, _ = Hn[p], f === "function" && (c = c.call(e, r, t, n), f = typeof c), f === "string" && ~c.indexOf("random(") && (c = sn(c)), _)
          _(this, t, p, c, e) && (x = 1);
        else if (p.substr(0, 2) === "--")
          u = (getComputedStyle(t).getPropertyValue(p) + "").trim(), c += "", Ci.lastIndex = 0, Ci.test(u) || (m = qt(u), b = qt(c), b ? m !== b && (u = Oi(t, p, u, b) + b) : m && (c += m)), this.add(a, "setProperty", u, c, r, n, 0, 0, p), o.push(p), E.push(p, 0, a[p]);
        else if (f !== "undefined") {
          if (l && p in l ? (u = typeof l[p] == "function" ? l[p].call(e, r, t, n) : l[p], zt(u) && ~u.indexOf("random(") && (u = sn(u)), qt(u + "") || u === "auto" || (u += ke.units[p] || qt(si(t, p)) || ""), (u + "").charAt(1) === "=" && (u = si(t, p))) : u = si(t, p), h = parseFloat(u), w = f === "string" && c.charAt(1) === "=" && c.substr(0, 2), w && (c = c.substr(2)), d = parseFloat(c), p in Ke && (p === "autoAlpha" && (h === 1 && si(t, "visibility") === "hidden" && d && (h = 0), E.push("visibility", 0, a.visibility), xi(this, a, "visibility", h ? "inherit" : "hidden", d ? "inherit" : "hidden", !d)), p !== "scale" && p !== "transform" && (p = Ke[p], ~p.indexOf(",") && (p = p.split(",")[0]))), S = p in ci, S) {
            if (this.styles.save(p), k = c, f === "string" && c.substring(0, 6) === "var(--") {
              if (c = Ce(t, c.substring(4, c.indexOf(")"))), c.substring(0, 5) === "calc(") {
                var C = t.style.perspective;
                t.style.perspective = c, c = Ce(t, "perspective"), C ? t.style.perspective = C : Ei(t, "perspective");
              }
              d = parseFloat(c);
            }
            if (v || (T = t._gsap, T.renderTransform && !i.parseTransform || un(t, i.parseTransform), P = i.smoothOrigin !== !1 && T.smooth, v = this._pt = new fe(this._pt, a, ht, 0, 1, T.renderTransform, T, 0, -1), v.dep = 1), p === "scale")
              this._pt = new fe(this._pt, T, "scaleY", T.scaleY, (w ? pr(T.scaleY, w + d) : d) - T.scaleY || 0, Ss), this._pt.u = 0, o.push("scaleY", p), p += "X";
            else if (p === "transformOrigin") {
              E.push(he, 0, a[he]), c = Wu(c), T.svg ? Ps(t, c, 0, P, 0, this) : (b = parseFloat(c.split(" ")[2]) || 0, b !== T.zOrigin && xi(this, T, "zOrigin", T.zOrigin, b), xi(this, a, p, Un(u), Un(c)));
              continue;
            } else if (p === "svgOrigin") {
              Ps(t, c, 1, P, 0, this);
              continue;
            } else if (p in Ka) {
              $u(this, T, p, h, w ? pr(h, w + c) : c);
              continue;
            } else if (p === "smoothOrigin") {
              xi(this, T, "smooth", T.smooth, c);
              continue;
            } else if (p === "force3D") {
              T[p] = c;
              continue;
            } else if (p === "transform") {
              qu(this, c, t);
              continue;
            }
          } else p in a || (p = kr(p) || p);
          if (S || (d || d === 0) && (h || h === 0) && !Pu.test(c) && p in a)
            m = (u + "").substr((h + "").length), d || (d = 0), b = qt(c) || (p in ke.units ? ke.units[p] : m), m !== b && (h = Oi(t, p, u, b)), this._pt = new fe(this._pt, S ? T : a, p, h, (w ? pr(h, w + d) : d) - h, !S && (b === "px" || p === "zIndex") && i.autoRound !== !1 ? Du : Ss), this._pt.u = b || 0, S && k !== c ? (this._pt.b = u, this._pt.e = k, this._pt.r = Mu) : m !== b && b !== "%" && (this._pt.b = u, this._pt.r = Ou);
          else if (p in a)
            Xu.call(this, t, p, u, w ? w + c : c);
          else if (p in t)
            this.add(t, p, u || t[p], w ? w + c : c, r, n);
          else if (p !== "parseTransform") {
            Us(p, c);
            continue;
          }
          S || (p in a ? E.push(p, 0, a[p]) : typeof t[p] == "function" ? E.push(p, 2, t[p]()) : E.push(p, 1, u || t[p])), o.push(p);
        }
      }
    x && Ba(this);
  },
  render: function(t, i) {
    if (i.tween._time || !eo())
      for (var e = i._pt; e; )
        e.r(t, e.d), e = e._next;
    else
      i.styles.revert();
  },
  get: si,
  aliases: Ke,
  getSetter: function(t, i, e) {
    var r = Ke[i];
    return r && r.indexOf(",") < 0 && (i = r), i in ci && i !== he && (t._gsap.x || si(t, "x")) ? e && To === e ? i === "scale" ? Lu : zu : (To = e || {}) && (i === "scale" ? Nu : Fu) : t.style && !Xs(t.style[i]) ? Ru : ~i.indexOf("-") ? Au : js(t, i);
  },
  core: {
    _removeProperty: Ei,
    _getMatrix: ro
  }
};
de.utils.checkPrefix = kr;
de.core.getStyleSaver = Va;
(function(s, t, i, e) {
  var r = ce(s + "," + t + "," + i, function(n) {
    ci[n] = 1;
  });
  ce(t, function(n) {
    ke.units[n] = "deg", Ka[n] = 1;
  }), Ke[r[13]] = s + "," + t, ce(e, function(n) {
    var o = n.split(":");
    Ke[o[1]] = r[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
ce("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s) {
  ke.units[s] = "px";
});
de.registerPlugin(ja);
var St = de.registerPlugin(ja) || de;
St.core.Tween;
function Gu(s, t) {
  for (var i = 0; i < t.length; i++) {
    var e = t[i];
    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(s, e.key, e);
  }
}
function Ku(s, t, i) {
  return t && Gu(s.prototype, t), s;
}
/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var It, Rn, Te, bi, Ti, mr, Ja, Bi, vr, tl, ai, We, el, il = function() {
  return It || typeof window < "u" && (It = window.gsap) && It.registerPlugin && It;
}, rl = 1, dr = [], U = [], Ze = [], $r = Date.now, Es = function(t, i) {
  return i;
}, Qu = function() {
  var t = vr.core, i = t.bridge || {}, e = t._scrollers, r = t._proxies;
  e.push.apply(e, U), r.push.apply(r, Ze), U = e, Ze = r, Es = function(o, a) {
    return i[o](a);
  };
}, ki = function(t, i) {
  return ~Ze.indexOf(t) && Ze[Ze.indexOf(t) + 1][i];
}, qr = function(t) {
  return !!~tl.indexOf(t);
}, ee = function(t, i, e, r, n) {
  return t.addEventListener(i, e, {
    passive: r !== !1,
    capture: !!n
  });
}, te = function(t, i, e, r) {
  return t.removeEventListener(i, e, !!r);
}, mn = "scrollLeft", vn = "scrollTop", Os = function() {
  return ai && ai.isPressed || U.cache++;
}, Vn = function(t, i) {
  var e = function r(n) {
    if (n || n === 0) {
      rl && (Te.history.scrollRestoration = "manual");
      var o = ai && ai.isPressed;
      n = r.v = Math.round(n) || (ai && ai.iOS ? 1 : 0), t(n), r.cacheID = U.cache, o && Es("ss", n);
    } else (i || U.cache !== r.cacheID || Es("ref")) && (r.cacheID = U.cache, r.v = t());
    return r.v + r.offset;
  };
  return e.offset = 0, t && e;
}, se = {
  s: mn,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: Vn(function(s) {
    return arguments.length ? Te.scrollTo(s, Ot.sc()) : Te.pageXOffset || bi[mn] || Ti[mn] || mr[mn] || 0;
  })
}, Ot = {
  s: vn,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: se,
  sc: Vn(function(s) {
    return arguments.length ? Te.scrollTo(se.sc(), s) : Te.pageYOffset || bi[vn] || Ti[vn] || mr[vn] || 0;
  })
}, ae = function(t, i) {
  return (i && i._ctx && i._ctx.selector || It.utils.toArray)(t)[0] || (typeof t == "string" && It.config().nullTargetWarn !== !1 ? console.warn("Element not found:", t) : null);
}, Zu = function(t, i) {
  for (var e = i.length; e--; )
    if (i[e] === t || i[e].contains(t))
      return !0;
  return !1;
}, Mi = function(t, i) {
  var e = i.s, r = i.sc;
  qr(t) && (t = bi.scrollingElement || Ti);
  var n = U.indexOf(t), o = r === Ot.sc ? 1 : 2;
  !~n && (n = U.push(t) - 1), U[n + o] || ee(t, "scroll", Os);
  var a = U[n + o], l = a || (U[n + o] = Vn(ki(t, e), !0) || (qr(t) ? r : Vn(function(u) {
    return arguments.length ? t[e] = u : t[e];
  })));
  return l.target = t, a || (l.smooth = It.getProperty(t, "scrollBehavior") === "smooth"), l;
}, Ms = function(t, i, e) {
  var r = t, n = t, o = $r(), a = o, l = i || 50, u = Math.max(500, l * 3), c = function(_, p) {
    var m = $r();
    p || m - o > l ? (n = r, r = _, a = o, o = m) : e ? r += _ : r = n + (_ - n) / (m - a) * (o - a);
  }, d = function() {
    n = r = e ? 0 : r, a = o = 0;
  }, h = function(_) {
    var p = a, m = n, b = $r();
    return (_ || _ === 0) && _ !== r && c(_), o === a || b - a > u ? 0 : (r + (e ? m : -m)) / ((e ? b : o) - p) * 1e3;
  };
  return {
    update: c,
    reset: d,
    getVelocity: h
  };
}, zr = function(t, i) {
  return i && !t._gsapAllow && t.cancelable !== !1 && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t;
}, Ro = function(t) {
  var i = Math.max.apply(Math, t), e = Math.min.apply(Math, t);
  return Math.abs(i) >= Math.abs(e) ? i : e;
}, nl = function() {
  vr = It.core.globals().ScrollTrigger, vr && vr.core && Qu();
}, sl = function(t) {
  return It = t || il(), !Rn && It && typeof document < "u" && document.body && (Te = window, bi = document, Ti = bi.documentElement, mr = bi.body, tl = [Te, bi, Ti, mr], It.utils.clamp, el = It.core.context || function() {
  }, Bi = "onpointerenter" in mr ? "pointer" : "mouse", Ja = xt.isTouch = Te.matchMedia && Te.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Te || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, We = xt.eventTypes = ("ontouchstart" in Ti ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Ti ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return rl = 0;
  }, 500), Rn = 1), vr || nl(), Rn;
};
se.op = Ot;
U.cache = 0;
var xt = /* @__PURE__ */ function() {
  function s(i) {
    this.init(i);
  }
  var t = s.prototype;
  return t.init = function(e) {
    Rn || sl(It) || console.warn("Please gsap.registerPlugin(Observer)"), vr || nl();
    var r = e.tolerance, n = e.dragMinimum, o = e.type, a = e.target, l = e.lineHeight, u = e.debounce, c = e.preventDefault, d = e.onStop, h = e.onStopDelay, f = e.ignore, _ = e.wheelSpeed, p = e.event, m = e.onDragStart, b = e.onDragEnd, w = e.onDrag, S = e.onPress, v = e.onRelease, T = e.onRight, P = e.onLeft, x = e.onUp, E = e.onDown, k = e.onChangeX, C = e.onChangeY, X = e.onChange, M = e.onToggleX, K = e.onToggleY, Y = e.onHover, Q = e.onHoverEnd, $ = e.onMove, z = e.ignoreCheck, Z = e.isNormalizer, it = e.onGestureStart, g = e.onGestureEnd, ot = e.onWheel, Qt = e.onEnable, Ne = e.onDisable, dt = e.onClick, Lt = e.scrollSpeed, Bt = e.capture, bt = e.allowClicks, Zt = e.lockAxis, Xt = e.onLockAxis;
    this.target = a = ae(a) || Ti, this.vars = e, f && (f = It.utils.toArray(f)), r = r || 1e-9, n = n || 0, _ = _ || 1, Lt = Lt || 1, o = o || "wheel,touch,pointer", u = u !== !1, l || (l = parseFloat(Te.getComputedStyle(mr).lineHeight) || 22);
    var fi, jt, Jt, j, mt, oe, pe, y = this, _e = 0, Je = 0, hi = e.passive || !c && e.passive !== !1, pt = Mi(a, se), ti = Mi(a, Ot), di = pt(), Ri = ti(), Mt = ~o.indexOf("touch") && !~o.indexOf("pointer") && We[0] === "pointerdown", pi = qr(a), vt = a.ownerDocument || bi, Fe = [0, 0, 0], Oe = [0, 0, 0], ei = 0, Or = function() {
      return ei = $r();
    }, Tt = function(L, J) {
      return (y.event = L) && f && Zu(L.target, f) || J && Mt && L.pointerType !== "touch" || z && z(L, J);
    }, dn = function() {
      y._vx.reset(), y._vy.reset(), jt.pause(), d && d(y);
    }, ii = function() {
      var L = y.deltaX = Ro(Fe), J = y.deltaY = Ro(Oe), O = Math.abs(L) >= r, F = Math.abs(J) >= r;
      X && (O || F) && X(y, L, J, Fe, Oe), O && (T && y.deltaX > 0 && T(y), P && y.deltaX < 0 && P(y), k && k(y), M && y.deltaX < 0 != _e < 0 && M(y), _e = y.deltaX, Fe[0] = Fe[1] = Fe[2] = 0), F && (E && y.deltaY > 0 && E(y), x && y.deltaY < 0 && x(y), C && C(y), K && y.deltaY < 0 != Je < 0 && K(y), Je = y.deltaY, Oe[0] = Oe[1] = Oe[2] = 0), (j || Jt) && ($ && $(y), Jt && (m && Jt === 1 && m(y), w && w(y), Jt = 0), j = !1), oe && !(oe = !1) && Xt && Xt(y), mt && (ot(y), mt = !1), fi = 0;
    }, er = function(L, J, O) {
      Fe[O] += L, Oe[O] += J, y._vx.update(L), y._vy.update(J), u ? fi || (fi = requestAnimationFrame(ii)) : ii();
    }, ir = function(L, J) {
      Zt && !pe && (y.axis = pe = Math.abs(L) > Math.abs(J) ? "x" : "y", oe = !0), pe !== "y" && (Fe[2] += L, y._vx.update(L, !0)), pe !== "x" && (Oe[2] += J, y._vy.update(J, !0)), u ? fi || (fi = requestAnimationFrame(ii)) : ii();
    }, _i = function(L) {
      if (!Tt(L, 1)) {
        L = zr(L, c);
        var J = L.clientX, O = L.clientY, F = J - y.x, A = O - y.y, I = y.isDragging;
        y.x = J, y.y = O, (I || (F || A) && (Math.abs(y.startX - J) >= n || Math.abs(y.startY - O) >= n)) && (Jt || (Jt = I ? 2 : 1), I || (y.isDragging = !0), ir(F, A));
      }
    }, Ai = y.onPress = function(B) {
      Tt(B, 1) || B && B.button || (y.axis = pe = null, jt.pause(), y.isPressed = !0, B = zr(B), _e = Je = 0, y.startX = y.x = B.clientX, y.startY = y.y = B.clientY, y._vx.reset(), y._vy.reset(), ee(Z ? a : vt, We[1], _i, hi, !0), y.deltaX = y.deltaY = 0, S && S(y));
    }, V = y.onRelease = function(B) {
      if (!Tt(B, 1)) {
        te(Z ? a : vt, We[1], _i, !0);
        var L = !isNaN(y.y - y.startY), J = y.isDragging, O = J && (Math.abs(y.x - y.startX) > 3 || Math.abs(y.y - y.startY) > 3), F = zr(B);
        !O && L && (y._vx.reset(), y._vy.reset(), c && bt && It.delayedCall(0.08, function() {
          if ($r() - ei > 300 && !B.defaultPrevented) {
            if (B.target.click)
              B.target.click();
            else if (vt.createEvent) {
              var A = vt.createEvent("MouseEvents");
              A.initMouseEvent("click", !0, !0, Te, 1, F.screenX, F.screenY, F.clientX, F.clientY, !1, !1, !1, !1, 0, null), B.target.dispatchEvent(A);
            }
          }
        })), y.isDragging = y.isGesturing = y.isPressed = !1, d && J && !Z && jt.restart(!0), Jt && ii(), b && J && b(y), v && v(y, O);
      }
    }, zi = function(L) {
      return L.touches && L.touches.length > 1 && (y.isGesturing = !0) && it(L, y.isDragging);
    }, Ie = function() {
      return (y.isGesturing = !1) || g(y);
    }, Ye = function(L) {
      if (!Tt(L)) {
        var J = pt(), O = ti();
        er((J - di) * Lt, (O - Ri) * Lt, 1), di = J, Ri = O, d && jt.restart(!0);
      }
    }, Be = function(L) {
      if (!Tt(L)) {
        L = zr(L, c), ot && (mt = !0);
        var J = (L.deltaMode === 1 ? l : L.deltaMode === 2 ? Te.innerHeight : 1) * _;
        er(L.deltaX * J, L.deltaY * J, 0), d && !Z && jt.restart(!0);
      }
    }, Li = function(L) {
      if (!Tt(L)) {
        var J = L.clientX, O = L.clientY, F = J - y.x, A = O - y.y;
        y.x = J, y.y = O, j = !0, d && jt.restart(!0), (F || A) && ir(F, A);
      }
    }, rr = function(L) {
      y.event = L, Y(y);
    }, ri = function(L) {
      y.event = L, Q(y);
    }, Mr = function(L) {
      return Tt(L) || zr(L, c) && dt(y);
    };
    jt = y._dc = It.delayedCall(h || 0.25, dn).pause(), y.deltaX = y.deltaY = 0, y._vx = Ms(0, 50, !0), y._vy = Ms(0, 50, !0), y.scrollX = pt, y.scrollY = ti, y.isDragging = y.isGesturing = y.isPressed = !1, el(this), y.enable = function(B) {
      return y.isEnabled || (ee(pi ? vt : a, "scroll", Os), o.indexOf("scroll") >= 0 && ee(pi ? vt : a, "scroll", Ye, hi, Bt), o.indexOf("wheel") >= 0 && ee(a, "wheel", Be, hi, Bt), (o.indexOf("touch") >= 0 && Ja || o.indexOf("pointer") >= 0) && (ee(a, We[0], Ai, hi, Bt), ee(vt, We[2], V), ee(vt, We[3], V), bt && ee(a, "click", Or, !0, !0), dt && ee(a, "click", Mr), it && ee(vt, "gesturestart", zi), g && ee(vt, "gestureend", Ie), Y && ee(a, Bi + "enter", rr), Q && ee(a, Bi + "leave", ri), $ && ee(a, Bi + "move", Li)), y.isEnabled = !0, y.isDragging = y.isGesturing = y.isPressed = j = Jt = !1, y._vx.reset(), y._vy.reset(), di = pt(), Ri = ti(), B && B.type && Ai(B), Qt && Qt(y)), y;
    }, y.disable = function() {
      y.isEnabled && (dr.filter(function(B) {
        return B !== y && qr(B.target);
      }).length || te(pi ? vt : a, "scroll", Os), y.isPressed && (y._vx.reset(), y._vy.reset(), te(Z ? a : vt, We[1], _i, !0)), te(pi ? vt : a, "scroll", Ye, Bt), te(a, "wheel", Be, Bt), te(a, We[0], Ai, Bt), te(vt, We[2], V), te(vt, We[3], V), te(a, "click", Or, !0), te(a, "click", Mr), te(vt, "gesturestart", zi), te(vt, "gestureend", Ie), te(a, Bi + "enter", rr), te(a, Bi + "leave", ri), te(a, Bi + "move", Li), y.isEnabled = y.isPressed = y.isDragging = !1, Ne && Ne(y));
    }, y.kill = y.revert = function() {
      y.disable();
      var B = dr.indexOf(y);
      B >= 0 && dr.splice(B, 1), ai === y && (ai = 0);
    }, dr.push(y), Z && qr(a) && (ai = y), y.enable(p);
  }, Ku(s, [{
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
xt.register = sl;
xt.getAll = function() {
  return dr.slice();
};
xt.getById = function(s) {
  return dr.filter(function(t) {
    return t.vars.id === s;
  })[0];
};
il() && It.registerPlugin(xt);
/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var D, ur, H, et, xe, tt, no, $n, cn, Gr, Ir, yn, Vt, jn, Ds, re, Ao, zo, cr, ol, ls, al, ie, Rs, ll, ul, vi, As, so, yr, oo, Kr, zs, us, wn = 1, $t = Date.now, cs = $t(), Le = 0, Yr = 0, Lo = function(t, i, e) {
  var r = ve(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
  return e["_" + i + "Clamp"] = r, r ? t.substr(6, t.length - 7) : t;
}, No = function(t, i) {
  return i && (!ve(t) || t.substr(0, 6) !== "clamp(") ? "clamp(" + t + ")" : t;
}, ju = function s() {
  return Yr && requestAnimationFrame(s);
}, Fo = function() {
  return jn = 1;
}, Io = function() {
  return jn = 0;
}, qe = function(t) {
  return t;
}, Br = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, cl = function() {
  return typeof window < "u";
}, fl = function() {
  return D || cl() && (D = window.gsap) && D.registerPlugin && D;
}, Zi = function(t) {
  return !!~no.indexOf(t);
}, hl = function(t) {
  return (t === "Height" ? oo : H["inner" + t]) || xe["client" + t] || tt["client" + t];
}, dl = function(t) {
  return ki(t, "getBoundingClientRect") || (Zi(t) ? function() {
    return Fn.width = H.innerWidth, Fn.height = oo, Fn;
  } : function() {
    return oi(t);
  });
}, Ju = function(t, i, e) {
  var r = e.d, n = e.d2, o = e.a;
  return (o = ki(t, "getBoundingClientRect")) ? function() {
    return o()[r];
  } : function() {
    return (i ? hl(n) : t["client" + n]) || 0;
  };
}, tc = function(t, i) {
  return !i || ~Ze.indexOf(t) ? dl(t) : function() {
    return Fn;
  };
}, Qe = function(t, i) {
  var e = i.s, r = i.d2, n = i.d, o = i.a;
  return Math.max(0, (e = "scroll" + r) && (o = ki(t, e)) ? o() - dl(t)()[n] : Zi(t) ? (xe[e] || tt[e]) - hl(r) : t[e] - t["offset" + r]);
}, xn = function(t, i) {
  for (var e = 0; e < cr.length; e += 3)
    (!i || ~i.indexOf(cr[e + 1])) && t(cr[e], cr[e + 1], cr[e + 2]);
}, ve = function(t) {
  return typeof t == "string";
}, Gt = function(t) {
  return typeof t == "function";
}, Xr = function(t) {
  return typeof t == "number";
}, Xi = function(t) {
  return typeof t == "object";
}, Lr = function(t, i, e) {
  return t && t.progress(i ? 0 : 1) && e && t.pause();
}, sr = function(t, i, e) {
  if (t.enabled) {
    var r = t._ctx ? t._ctx.add(function() {
      return i(t, e);
    }) : i(t, e);
    r && r.totalTime && (t.callbackAnimation = r);
  }
}, or = Math.abs, pl = "left", _l = "top", ao = "right", lo = "bottom", Gi = "width", Ki = "height", Qr = "Right", Zr = "Left", jr = "Top", Jr = "Bottom", Ct = "padding", De = "margin", Pr = "Width", uo = "Height", Et = "px", Re = function(t) {
  return H.getComputedStyle(t.nodeType === Node.DOCUMENT_NODE ? t.scrollingElement : t);
}, ec = function(t) {
  var i = Re(t).position;
  t.style.position = i === "absolute" || i === "fixed" ? i : "relative";
}, Yo = function(t, i) {
  for (var e in i)
    e in t || (t[e] = i[e]);
  return t;
}, oi = function(t, i) {
  var e = i && Re(t)[Ds] !== "matrix(1, 0, 0, 1, 0, 0)" && D.to(t, {
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
  }).progress(1), r = t.getBoundingClientRect ? t.getBoundingClientRect() : t.scrollingElement.getBoundingClientRect();
  return e && e.progress(0).kill(), r;
}, qn = function(t, i) {
  var e = i.d2;
  return t["offset" + e] || t["client" + e] || 0;
}, gl = function(t) {
  var i = [], e = t.labels, r = t.duration(), n;
  for (n in e)
    i.push(e[n] / r);
  return i;
}, ic = function(t) {
  return function(i) {
    return D.utils.snap(gl(t), i);
  };
}, co = function(t) {
  var i = D.utils.snap(t), e = Array.isArray(t) && t.slice(0).sort(function(r, n) {
    return r - n;
  });
  return e ? function(r, n, o) {
    o === void 0 && (o = 1e-3);
    var a;
    if (!n)
      return i(r);
    if (n > 0) {
      for (r -= o, a = 0; a < e.length; a++)
        if (e[a] >= r)
          return e[a];
      return e[a - 1];
    } else
      for (a = e.length, r += o; a--; )
        if (e[a] <= r)
          return e[a];
    return e[0];
  } : function(r, n, o) {
    o === void 0 && (o = 1e-3);
    var a = i(r);
    return !n || Math.abs(a - r) < o || a - r < 0 == n < 0 ? a : i(n < 0 ? r - t : r + t);
  };
}, rc = function(t) {
  return function(i, e) {
    return co(gl(t))(i, e.direction);
  };
}, bn = function(t, i, e, r) {
  return e.split(",").forEach(function(n) {
    return t(i, n, r);
  });
}, At = function(t, i, e, r, n) {
  return t.addEventListener(i, e, {
    passive: !r,
    capture: !!n
  });
}, Rt = function(t, i, e, r) {
  return t.removeEventListener(i, e, !!r);
}, Tn = function(t, i, e) {
  e = e && e.wheelHandler, e && (t(i, "wheel", e), t(i, "touchmove", e));
}, Bo = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, Sn = {
  toggleActions: "play",
  anticipatePin: 0
}, Gn = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, An = function(t, i) {
  if (ve(t)) {
    var e = t.indexOf("="), r = ~e ? +(t.charAt(e - 1) + 1) * parseFloat(t.substr(e + 1)) : 0;
    ~e && (t.indexOf("%") > e && (r *= i / 100), t = t.substr(0, e - 1)), t = r + (t in Gn ? Gn[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0);
  }
  return t;
}, Cn = function(t, i, e, r, n, o, a, l) {
  var u = n.startColor, c = n.endColor, d = n.fontSize, h = n.indent, f = n.fontWeight, _ = et.createElement("div"), p = Zi(e) || ki(e, "pinType") === "fixed", m = t.indexOf("scroller") !== -1, b = p ? tt : e.tagName === "IFRAME" ? e.contentDocument.body : e, w = t.indexOf("start") !== -1, S = w ? u : c, v = "border-color:" + S + ";font-size:" + d + ";color:" + S + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return v += "position:" + ((m || l) && p ? "fixed;" : "absolute;"), (m || l || !p) && (v += (r === Ot ? ao : lo) + ":" + (o + parseFloat(h)) + "px;"), a && (v += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), _._isStart = w, _.setAttribute("class", "gsap-marker-" + t + (i ? " marker-" + i : "")), _.style.cssText = v, _.innerText = i || i === 0 ? t + "-" + i : t, b.children[0] ? b.insertBefore(_, b.children[0]) : b.appendChild(_), _._offset = _["offset" + r.op.d2], zn(_, 0, r, w), _;
}, zn = function(t, i, e, r) {
  var n = {
    display: "block"
  }, o = e[r ? "os2" : "p2"], a = e[r ? "p2" : "os2"];
  t._isFlipped = r, n[e.a + "Percent"] = r ? -100 : 0, n[e.a] = r ? "1px" : 0, n["border" + o + Pr] = 1, n["border" + a + Pr] = 0, n[e.p] = i + "px", D.set(t, n);
}, W = [], Ls = {}, fn, Xo = function() {
  return $t() - Le > 34 && (fn || (fn = requestAnimationFrame(li)));
}, ar = function() {
  (!ie || !ie.isPressed || ie.startX > tt.clientWidth) && (U.cache++, ie ? fn || (fn = requestAnimationFrame(li)) : li(), Le || Ji("scrollStart"), Le = $t());
}, fs = function() {
  ul = H.innerWidth, ll = H.innerHeight;
}, Wr = function(t) {
  U.cache++, (t === !0 || !Vt && !al && !et.fullscreenElement && !et.webkitFullscreenElement && (!Rs || ul !== H.innerWidth || Math.abs(H.innerHeight - ll) > H.innerHeight * 0.25)) && $n.restart(!0);
}, ji = {}, nc = [], ml = function s() {
  return Rt(N, "scrollEnd", s) || Hi(!0);
}, Ji = function(t) {
  return ji[t] && ji[t].map(function(i) {
    return i();
  }) || nc;
}, me = [], vl = function(t) {
  for (var i = 0; i < me.length; i += 5)
    (!t || me[i + 4] && me[i + 4].query === t) && (me[i].style.cssText = me[i + 1], me[i].getBBox && me[i].setAttribute("transform", me[i + 2] || ""), me[i + 3].uncache = 1);
}, yl = function() {
  return U.forEach(function(t) {
    return Gt(t) && ++t.cacheID && (t.rec = t());
  });
}, fo = function(t, i) {
  var e;
  for (re = 0; re < W.length; re++)
    e = W[re], e && (!i || e._ctx === i) && (t ? e.kill(1) : e.revert(!0, !0));
  Kr = !0, i && vl(i), i || Ji("revert");
}, wl = function(t, i) {
  U.cache++, (i || !ne) && U.forEach(function(e) {
    return Gt(e) && e.cacheID++ && (e.rec = 0);
  }), ve(t) && (H.history.scrollRestoration = so = t);
}, ne, Qi = 0, Wo, sc = function() {
  if (Wo !== Qi) {
    var t = Wo = Qi;
    requestAnimationFrame(function() {
      return t === Qi && Hi(!0);
    });
  }
}, xl = function() {
  tt.appendChild(yr), oo = !ie && yr.offsetHeight || H.innerHeight, tt.removeChild(yr);
}, Ho = function(t) {
  return cn(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i) {
    return i.style.display = t ? "none" : "block";
  });
}, Hi = function(t, i) {
  if (xe = et.documentElement, tt = et.body, no = [H, et, xe, tt], Le && !t && !Kr) {
    At(N, "scrollEnd", ml);
    return;
  }
  xl(), ne = N.isRefreshing = !0, Kr || yl();
  var e = Ji("refreshInit");
  ol && N.sort(), i || fo(), U.forEach(function(r) {
    Gt(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
  }), W.slice(0).forEach(function(r) {
    return r.refresh();
  }), Kr = !1, W.forEach(function(r) {
    if (r._subPinOffset && r.pin) {
      var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight", o = r.pin[n];
      r.revert(!0, 1), r.adjustPinSpacing(r.pin[n] - o), r.refresh();
    }
  }), zs = 1, Ho(!0), W.forEach(function(r) {
    var n = Qe(r.scroller, r._dir), o = r.vars.end === "max" || r._endClamp && r.end > n, a = r._startClamp && r.start >= n;
    (o || a) && r.setPositions(a ? n - 1 : r.start, o ? Math.max(a ? n : r.start + 1, n) : r.end, !0);
  }), Ho(!1), zs = 0, e.forEach(function(r) {
    return r && r.render && r.render(-1);
  }), U.forEach(function(r) {
    Gt(r) && (r.smooth && requestAnimationFrame(function() {
      return r.target.style.scrollBehavior = "smooth";
    }), r.rec && r(r.rec));
  }), wl(so, 1), $n.pause(), Qi++, ne = 2, li(2), W.forEach(function(r) {
    return Gt(r.vars.onRefresh) && r.vars.onRefresh(r);
  }), ne = N.isRefreshing = !1, Ji("refresh");
}, Ns = 0, Ln = 1, tn, li = function(t) {
  if (t === 2 || !ne && !Kr) {
    N.isUpdating = !0, tn && tn.update(0);
    var i = W.length, e = $t(), r = e - cs >= 50, n = i && W[0].scroll();
    if (Ln = Ns > n ? -1 : 1, ne || (Ns = n), r && (Le && !jn && e - Le > 200 && (Le = 0, Ji("scrollEnd")), Ir = cs, cs = e), Ln < 0) {
      for (re = i; re-- > 0; )
        W[re] && W[re].update(0, r);
      Ln = 1;
    } else
      for (re = 0; re < i; re++)
        W[re] && W[re].update(0, r);
    N.isUpdating = !1;
  }
  fn = 0;
}, Fs = [pl, _l, lo, ao, De + Jr, De + Qr, De + jr, De + Zr, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Nn = Fs.concat([Gi, Ki, "boxSizing", "max" + Pr, "max" + uo, "position", De, Ct, Ct + jr, Ct + Qr, Ct + Jr, Ct + Zr]), oc = function(t, i, e) {
  wr(e);
  var r = t._gsap;
  if (r.spacerIsNative)
    wr(r.spacerState);
  else if (t._gsap.swappedIn) {
    var n = i.parentNode;
    n && (n.insertBefore(t, i), n.removeChild(i));
  }
  t._gsap.swappedIn = !1;
}, hs = function(t, i, e, r) {
  if (!t._gsap.swappedIn) {
    for (var n = Fs.length, o = i.style, a = t.style, l; n--; )
      l = Fs[n], o[l] = e[l];
    o.position = e.position === "absolute" ? "absolute" : "relative", e.display === "inline" && (o.display = "inline-block"), a[lo] = a[ao] = "auto", o.flexBasis = e.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[Gi] = qn(t, se) + Et, o[Ki] = qn(t, Ot) + Et, o[Ct] = a[De] = a[_l] = a[pl] = "0", wr(r), a[Gi] = a["max" + Pr] = e[Gi], a[Ki] = a["max" + uo] = e[Ki], a[Ct] = e[Ct], t.parentNode !== i && (t.parentNode.insertBefore(i, t), i.appendChild(t)), t._gsap.swappedIn = !0;
  }
}, ac = /([A-Z])/g, wr = function(t) {
  if (t) {
    var i = t.t.style, e = t.length, r = 0, n, o;
    for ((t.t._gsap || D.core.getCache(t.t)).uncache = 1; r < e; r += 2)
      o = t[r + 1], n = t[r], o ? i[n] = o : i[n] && i.removeProperty(n.replace(ac, "-$1").toLowerCase());
  }
}, kn = function(t) {
  for (var i = Nn.length, e = t.style, r = [], n = 0; n < i; n++)
    r.push(Nn[n], e[Nn[n]]);
  return r.t = t, r;
}, lc = function(t, i, e) {
  for (var r = [], n = t.length, o = e ? 8 : 0, a; o < n; o += 2)
    a = t[o], r.push(a, a in i ? i[a] : t[o + 1]);
  return r.t = t.t, r;
}, Fn = {
  left: 0,
  top: 0
}, Uo = function(t, i, e, r, n, o, a, l, u, c, d, h, f, _) {
  Gt(t) && (t = t(l)), ve(t) && t.substr(0, 3) === "max" && (t = h + (t.charAt(4) === "=" ? An("0" + t.substr(3), e) : 0));
  var p = f ? f.time() : 0, m, b, w;
  if (f && f.seek(0), isNaN(t) || (t = +t), Xr(t))
    f && (t = D.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, h, t)), a && zn(a, e, r, !0);
  else {
    Gt(i) && (i = i(l));
    var S = (t || "0").split(" "), v, T, P, x;
    w = ae(i, l) || tt, v = oi(w) || {}, (!v || !v.left && !v.top) && Re(w).display === "none" && (x = w.style.display, w.style.display = "block", v = oi(w), x ? w.style.display = x : w.style.removeProperty("display")), T = An(S[0], v[r.d]), P = An(S[1] || "0", e), t = v[r.p] - u[r.p] - c + T + n - P, a && zn(a, P, r, e - P < 20 || a._isStart && P > 20), e -= e - P;
  }
  if (_ && (l[_] = t || -1e-3, t < 0 && (t = 0)), o) {
    var E = t + e, k = o._isStart;
    m = "scroll" + r.d2, zn(o, E, r, k && E > 20 || !k && (d ? Math.max(tt[m], xe[m]) : o.parentNode[m]) <= E + 1), d && (u = oi(a), d && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + Et));
  }
  return f && w && (m = oi(w), f.seek(h), b = oi(w), f._caScrollDist = m[r.p] - b[r.p], t = t / f._caScrollDist * h), f && f.seek(p), f ? t : Math.round(t);
}, uc = /(webkit|moz|length|cssText|inset)/i, Vo = function(t, i, e, r) {
  if (t.parentNode !== i) {
    var n = t.style, o, a;
    if (i === tt) {
      t._stOrig = n.cssText, a = Re(t);
      for (o in a)
        !+o && !uc.test(o) && a[o] && typeof n[o] == "string" && o !== "0" && (n[o] = a[o]);
      n.top = e, n.left = r;
    } else
      n.cssText = t._stOrig;
    D.core.getCache(t).uncache = 1, i.appendChild(t);
  }
}, bl = function(t, i, e) {
  var r = i, n = r;
  return function(o) {
    var a = Math.round(t());
    return a !== r && a !== n && Math.abs(a - r) > 3 && Math.abs(a - n) > 3 && (o = a, e && e()), n = r, r = Math.round(o), r;
  };
}, Pn = function(t, i, e) {
  var r = {};
  r[i.p] = "+=" + e, D.set(t, r);
}, $o = function(t, i) {
  var e = Mi(t, i), r = "_scroll" + i.p2, n = function o(a, l, u, c, d) {
    var h = o.tween, f = l.onComplete, _ = {};
    u = u || e();
    var p = bl(e, u, function() {
      h.kill(), o.tween = 0;
    });
    return d = c && d || 0, c = c || a - u, h && h.kill(), l[r] = a, l.inherit = !1, l.modifiers = _, _[r] = function() {
      return p(u + c * h.ratio + d * h.ratio * h.ratio);
    }, l.onUpdate = function() {
      U.cache++, o.tween && li();
    }, l.onComplete = function() {
      o.tween = 0, f && f.call(h);
    }, h = o.tween = D.to(t, l), h;
  };
  return t[r] = e, e.wheelHandler = function() {
    return n.tween && n.tween.kill() && (n.tween = 0);
  }, At(t, "wheel", e.wheelHandler), N.isTouch && At(t, "touchmove", e.wheelHandler), n;
}, N = /* @__PURE__ */ function() {
  function s(i, e) {
    ur || s.register(D) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), As(this), this.init(i, e);
  }
  var t = s.prototype;
  return t.init = function(e, r) {
    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Yr) {
      this.update = this.refresh = this.kill = qe;
      return;
    }
    e = Yo(ve(e) || Xr(e) || e.nodeType ? {
      trigger: e
    } : e, Sn);
    var n = e, o = n.onUpdate, a = n.toggleClass, l = n.id, u = n.onToggle, c = n.onRefresh, d = n.scrub, h = n.trigger, f = n.pin, _ = n.pinSpacing, p = n.invalidateOnRefresh, m = n.anticipatePin, b = n.onScrubComplete, w = n.onSnapComplete, S = n.once, v = n.snap, T = n.pinReparent, P = n.pinSpacer, x = n.containerAnimation, E = n.fastScrollEnd, k = n.preventOverlaps, C = e.horizontal || e.containerAnimation && e.horizontal !== !1 ? se : Ot, X = !d && d !== 0, M = ae(e.scroller || H), K = D.core.getCache(M), Y = Zi(M), Q = ("pinType" in e ? e.pinType : ki(M, "pinType") || Y && "fixed") === "fixed", $ = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack], z = X && e.toggleActions.split(" "), Z = "markers" in e ? e.markers : Sn.markers, it = Y ? 0 : parseFloat(Re(M)["border" + C.p2 + Pr]) || 0, g = this, ot = e.onRefreshInit && function() {
      return e.onRefreshInit(g);
    }, Qt = Ju(M, Y, C), Ne = tc(M, Y), dt = 0, Lt = 0, Bt = 0, bt = Mi(M, C), Zt, Xt, fi, jt, Jt, j, mt, oe, pe, y, _e, Je, hi, pt, ti, di, Ri, Mt, pi, vt, Fe, Oe, ei, Or, Tt, dn, ii, er, ir, _i, Ai, V, zi, Ie, Ye, Be, Li, rr, ri;
    if (g._startClamp = g._endClamp = !1, g._dir = C, m *= 45, g.scroller = M, g.scroll = x ? x.time.bind(x) : bt, jt = bt(), g.vars = e, r = r || e.animation, "refreshPriority" in e && (ol = 1, e.refreshPriority === -9999 && (tn = g)), K.tweenScroll = K.tweenScroll || {
      top: $o(M, Ot),
      left: $o(M, se)
    }, g.tweenTo = Zt = K.tweenScroll[C.p], g.scrubDuration = function(O) {
      zi = Xr(O) && O, zi ? V ? V.duration(O) : V = D.to(r, {
        ease: "expo",
        totalProgress: "+=0",
        inherit: !1,
        duration: zi,
        paused: !0,
        onComplete: function() {
          return b && b(g);
        }
      }) : (V && V.progress(1).kill(), V = 0);
    }, r && (r.vars.lazy = !1, r._initted && !g.isReverted || r.vars.immediateRender !== !1 && e.immediateRender !== !1 && r.duration() && r.render(0, !0, !0), g.animation = r.pause(), r.scrollTrigger = g, g.scrubDuration(d), _i = 0, l || (l = r.vars.id)), v && ((!Xi(v) || v.push) && (v = {
      snapTo: v
    }), "scrollBehavior" in tt.style && D.set(Y ? [tt, xe] : M, {
      scrollBehavior: "auto"
    }), U.forEach(function(O) {
      return Gt(O) && O.target === (Y ? et.scrollingElement || xe : M) && (O.smooth = !1);
    }), fi = Gt(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? ic(r) : v.snapTo === "labelsDirectional" ? rc(r) : v.directional !== !1 ? function(O, F) {
      return co(v.snapTo)(O, $t() - Lt < 500 ? 0 : F.direction);
    } : D.utils.snap(v.snapTo), Ie = v.duration || {
      min: 0.1,
      max: 2
    }, Ie = Xi(Ie) ? Gr(Ie.min, Ie.max) : Gr(Ie, Ie), Ye = D.delayedCall(v.delay || zi / 2 || 0.1, function() {
      var O = bt(), F = $t() - Lt < 500, A = Zt.tween;
      if ((F || Math.abs(g.getVelocity()) < 10) && !A && !jn && dt !== O) {
        var I = (O - j) / pt, Dt = r && !X ? r.totalProgress() : I, q = F ? 0 : (Dt - Ai) / ($t() - Ir) * 1e3 || 0, yt = D.utils.clamp(-I, 1 - I, or(q / 2) * q / 0.185), Wt = I + (v.inertia === !1 ? 0 : yt), _t, at, rt = v, Xe = rt.onStart, ut = rt.onInterrupt, ge = rt.onComplete;
        if (_t = fi(Wt, g), Xr(_t) || (_t = Wt), at = Math.max(0, Math.round(j + _t * pt)), O <= mt && O >= j && at !== O) {
          if (A && !A._initted && A.data <= or(at - O))
            return;
          v.inertia === !1 && (yt = _t - I), Zt(at, {
            duration: Ie(or(Math.max(or(Wt - Dt), or(_t - Dt)) * 0.185 / q / 0.05 || 0)),
            ease: v.ease || "power3",
            data: or(at - O),
            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
            onInterrupt: function() {
              return Ye.restart(!0) && ut && sr(g, ut);
            },
            onComplete: function() {
              g.update(), dt = bt(), r && !X && (V ? V.resetTo("totalProgress", _t, r._tTime / r._tDur) : r.progress(_t)), _i = Ai = r && !X ? r.totalProgress() : g.progress, w && w(g), ge && sr(g, ge);
            }
          }, O, yt * pt, at - O - yt * pt), Xe && sr(g, Xe, Zt.tween);
        }
      } else g.isActive && dt !== O && Ye.restart(!0);
    }).pause()), l && (Ls[l] = g), h = g.trigger = ae(h || f !== !0 && f), ri = h && h._gsap && h._gsap.stRevert, ri && (ri = ri(g)), f = f === !0 ? h : ae(f), ve(a) && (a = {
      targets: h,
      className: a
    }), f && (_ === !1 || _ === De || (_ = !_ && f.parentNode && f.parentNode.style && Re(f.parentNode).display === "flex" ? !1 : Ct), g.pin = f, Xt = D.core.getCache(f), Xt.spacer ? ti = Xt.pinState : (P && (P = ae(P), P && !P.nodeType && (P = P.current || P.nativeElement), Xt.spacerIsNative = !!P, P && (Xt.spacerState = kn(P))), Xt.spacer = Mt = P || et.createElement("div"), Mt.classList.add("pin-spacer"), l && Mt.classList.add("pin-spacer-" + l), Xt.pinState = ti = kn(f)), e.force3D !== !1 && D.set(f, {
      force3D: !0
    }), g.spacer = Mt = Xt.spacer, ir = Re(f), Or = ir[_ + C.os2], vt = D.getProperty(f), Fe = D.quickSetter(f, C.a, Et), hs(f, Mt, ir), Ri = kn(f)), Z) {
      Je = Xi(Z) ? Yo(Z, Bo) : Bo, y = Cn("scroller-start", l, M, C, Je, 0), _e = Cn("scroller-end", l, M, C, Je, 0, y), pi = y["offset" + C.op.d2];
      var Mr = ae(ki(M, "content") || M);
      oe = this.markerStart = Cn("start", l, Mr, C, Je, pi, 0, x), pe = this.markerEnd = Cn("end", l, Mr, C, Je, pi, 0, x), x && (rr = D.quickSetter([oe, pe], C.a, Et)), !Q && !(Ze.length && ki(M, "fixedMarkers") === !0) && (ec(Y ? tt : M), D.set([y, _e], {
        force3D: !0
      }), dn = D.quickSetter(y, C.a, Et), er = D.quickSetter(_e, C.a, Et));
    }
    if (x) {
      var B = x.vars.onUpdate, L = x.vars.onUpdateParams;
      x.eventCallback("onUpdate", function() {
        g.update(0, 0, 1), B && B.apply(x, L || []);
      });
    }
    if (g.previous = function() {
      return W[W.indexOf(g) - 1];
    }, g.next = function() {
      return W[W.indexOf(g) + 1];
    }, g.revert = function(O, F) {
      if (!F)
        return g.kill(!0);
      var A = O !== !1 || !g.enabled, I = Vt;
      A !== g.isReverted && (A && (Be = Math.max(bt(), g.scroll.rec || 0), Bt = g.progress, Li = r && r.progress()), oe && [oe, pe, y, _e].forEach(function(Dt) {
        return Dt.style.display = A ? "none" : "block";
      }), A && (Vt = g, g.update(A)), f && (!T || !g.isActive) && (A ? oc(f, Mt, ti) : hs(f, Mt, Re(f), Tt)), A || g.update(A), Vt = I, g.isReverted = A);
    }, g.refresh = function(O, F, A, I) {
      if (!((Vt || !g.enabled) && !F)) {
        if (f && O && Le) {
          At(s, "scrollEnd", ml);
          return;
        }
        !ne && ot && ot(g), Vt = g, Zt.tween && !A && (Zt.tween.kill(), Zt.tween = 0), V && V.pause(), p && r && (r.revert({
          kill: !1
        }).invalidate(), r.getChildren ? r.getChildren(!0, !0, !1).forEach(function(gi) {
          return gi.vars.immediateRender && gi.render(0, !0, !0);
        }) : r.vars.immediateRender && r.render(0, !0, !0)), g.isReverted || g.revert(!0, !0), g._subPinOffset = !1;
        var Dt = Qt(), q = Ne(), yt = x ? x.duration() : Qe(M, C), Wt = pt <= 0.01 || !pt, _t = 0, at = I || 0, rt = Xi(A) ? A.end : e.end, Xe = e.endTrigger || h, ut = Xi(A) ? A.start : e.start || (e.start === 0 || !h ? 0 : f ? "0 0" : "0 100%"), ge = g.pinnedContainer = e.pinnedContainer && ae(e.pinnedContainer, g), He = h && Math.max(0, W.indexOf(g)) || 0, Nt = He, Ft, Ht, Ni, pn, Ut, Pt, Ue, Jn, ho, Dr, Ve, Rr, _n;
        for (Z && Xi(A) && (Rr = D.getProperty(y, C.p), _n = D.getProperty(_e, C.p)); Nt-- > 0; )
          Pt = W[Nt], Pt.end || Pt.refresh(0, 1) || (Vt = g), Ue = Pt.pin, Ue && (Ue === h || Ue === f || Ue === ge) && !Pt.isReverted && (Dr || (Dr = []), Dr.unshift(Pt), Pt.revert(!0, !0)), Pt !== W[Nt] && (He--, Nt--);
        for (Gt(ut) && (ut = ut(g)), ut = Lo(ut, "start", g), j = Uo(ut, h, Dt, C, bt(), oe, y, g, q, it, Q, yt, x, g._startClamp && "_startClamp") || (f ? -1e-3 : 0), Gt(rt) && (rt = rt(g)), ve(rt) && !rt.indexOf("+=") && (~rt.indexOf(" ") ? rt = (ve(ut) ? ut.split(" ")[0] : "") + rt : (_t = An(rt.substr(2), Dt), rt = ve(ut) ? ut : (x ? D.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, j) : j) + _t, Xe = h)), rt = Lo(rt, "end", g), mt = Math.max(j, Uo(rt || (Xe ? "100% 0" : yt), Xe, Dt, C, bt() + _t, pe, _e, g, q, it, Q, yt, x, g._endClamp && "_endClamp")) || -1e-3, _t = 0, Nt = He; Nt--; )
          Pt = W[Nt] || {}, Ue = Pt.pin, Ue && Pt.start - Pt._pinPush <= j && !x && Pt.end > 0 && (Ft = Pt.end - (g._startClamp ? Math.max(0, Pt.start) : Pt.start), (Ue === h && Pt.start - Pt._pinPush < j || Ue === ge) && isNaN(ut) && (_t += Ft * (1 - Pt.progress)), Ue === f && (at += Ft));
        if (j += _t, mt += _t, g._startClamp && (g._startClamp += _t), g._endClamp && !ne && (g._endClamp = mt || -1e-3, mt = Math.min(mt, Qe(M, C))), pt = mt - j || (j -= 0.01) && 1e-3, Wt && (Bt = D.utils.clamp(0, 1, D.utils.normalize(j, mt, Be))), g._pinPush = at, oe && _t && (Ft = {}, Ft[C.a] = "+=" + _t, ge && (Ft[C.p] = "-=" + bt()), D.set([oe, pe], Ft)), f && !(zs && g.end >= Qe(M, C)))
          Ft = Re(f), pn = C === Ot, Ni = bt(), Oe = parseFloat(vt(C.a)) + at, !yt && mt > 1 && (Ve = (Y ? et.scrollingElement || xe : M).style, Ve = {
            style: Ve,
            value: Ve["overflow" + C.a.toUpperCase()]
          }, Y && Re(tt)["overflow" + C.a.toUpperCase()] !== "scroll" && (Ve.style["overflow" + C.a.toUpperCase()] = "scroll")), hs(f, Mt, Ft), Ri = kn(f), Ht = oi(f, !0), Jn = Q && Mi(M, pn ? se : Ot)(), _ ? (Tt = [_ + C.os2, pt + at + Et], Tt.t = Mt, Nt = _ === Ct ? qn(f, C) + pt + at : 0, Nt && (Tt.push(C.d, Nt + Et), Mt.style.flexBasis !== "auto" && (Mt.style.flexBasis = Nt + Et)), wr(Tt), ge && W.forEach(function(gi) {
            gi.pin === ge && gi.vars.pinSpacing !== !1 && (gi._subPinOffset = !0);
          }), Q && bt(Be)) : (Nt = qn(f, C), Nt && Mt.style.flexBasis !== "auto" && (Mt.style.flexBasis = Nt + Et)), Q && (Ut = {
            top: Ht.top + (pn ? Ni - j : Jn) + Et,
            left: Ht.left + (pn ? Jn : Ni - j) + Et,
            boxSizing: "border-box",
            position: "fixed"
          }, Ut[Gi] = Ut["max" + Pr] = Math.ceil(Ht.width) + Et, Ut[Ki] = Ut["max" + uo] = Math.ceil(Ht.height) + Et, Ut[De] = Ut[De + jr] = Ut[De + Qr] = Ut[De + Jr] = Ut[De + Zr] = "0", Ut[Ct] = Ft[Ct], Ut[Ct + jr] = Ft[Ct + jr], Ut[Ct + Qr] = Ft[Ct + Qr], Ut[Ct + Jr] = Ft[Ct + Jr], Ut[Ct + Zr] = Ft[Ct + Zr], di = lc(ti, Ut, T), ne && bt(0)), r ? (ho = r._initted, ls(1), r.render(r.duration(), !0, !0), ei = vt(C.a) - Oe + pt + at, ii = Math.abs(pt - ei) > 1, Q && ii && di.splice(di.length - 2, 2), r.render(0, !0, !0), ho || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), ls(0)) : ei = pt, Ve && (Ve.value ? Ve.style["overflow" + C.a.toUpperCase()] = Ve.value : Ve.style.removeProperty("overflow-" + C.a));
        else if (h && bt() && !x)
          for (Ht = h.parentNode; Ht && Ht !== tt; )
            Ht._pinOffset && (j -= Ht._pinOffset, mt -= Ht._pinOffset), Ht = Ht.parentNode;
        Dr && Dr.forEach(function(gi) {
          return gi.revert(!1, !0);
        }), g.start = j, g.end = mt, jt = Jt = ne ? Be : bt(), !x && !ne && (jt < Be && bt(Be), g.scroll.rec = 0), g.revert(!1, !0), Lt = $t(), Ye && (dt = -1, Ye.restart(!0)), Vt = 0, r && X && (r._initted || Li) && r.progress() !== Li && r.progress(Li || 0, !0).render(r.time(), !0, !0), (Wt || Bt !== g.progress || x || p || r && !r._initted) && (r && !X && (r._initted || Bt || r.vars.immediateRender !== !1) && r.totalProgress(x && j < -1e-3 && !Bt ? D.utils.normalize(j, mt, 0) : Bt, !0), g.progress = Wt || (jt - j) / pt === Bt ? 0 : Bt), f && _ && (Mt._pinOffset = Math.round(g.progress * ei)), V && V.invalidate(), isNaN(Rr) || (Rr -= D.getProperty(y, C.p), _n -= D.getProperty(_e, C.p), Pn(y, C, Rr), Pn(oe, C, Rr - (I || 0)), Pn(_e, C, _n), Pn(pe, C, _n - (I || 0))), Wt && !ne && g.update(), c && !ne && !hi && (hi = !0, c(g), hi = !1);
      }
    }, g.getVelocity = function() {
      return (bt() - Jt) / ($t() - Ir) * 1e3 || 0;
    }, g.endAnimation = function() {
      Lr(g.callbackAnimation), r && (V ? V.progress(1) : r.paused() ? X || Lr(r, g.direction < 0, 1) : Lr(r, r.reversed()));
    }, g.labelToScroll = function(O) {
      return r && r.labels && (j || g.refresh() || j) + r.labels[O] / r.duration() * pt || 0;
    }, g.getTrailing = function(O) {
      var F = W.indexOf(g), A = g.direction > 0 ? W.slice(0, F).reverse() : W.slice(F + 1);
      return (ve(O) ? A.filter(function(I) {
        return I.vars.preventOverlaps === O;
      }) : A).filter(function(I) {
        return g.direction > 0 ? I.end <= j : I.start >= mt;
      });
    }, g.update = function(O, F, A) {
      if (!(x && !A && !O)) {
        var I = ne === !0 ? Be : g.scroll(), Dt = O ? 0 : (I - j) / pt, q = Dt < 0 ? 0 : Dt > 1 ? 1 : Dt || 0, yt = g.progress, Wt, _t, at, rt, Xe, ut, ge, He;
        if (F && (Jt = jt, jt = x ? bt() : I, v && (Ai = _i, _i = r && !X ? r.totalProgress() : q)), m && f && !Vt && !wn && Le && (!q && j < I + (I - Jt) / ($t() - Ir) * m ? q = 1e-4 : q === 1 && mt > I + (I - Jt) / ($t() - Ir) * m && (q = 0.9999)), q !== yt && g.enabled) {
          if (Wt = g.isActive = !!q && q < 1, _t = !!yt && yt < 1, ut = Wt !== _t, Xe = ut || !!q != !!yt, g.direction = q > yt ? 1 : -1, g.progress = q, Xe && !Vt && (at = q && !yt ? 0 : q === 1 ? 1 : yt === 1 ? 2 : 3, X && (rt = !ut && z[at + 1] !== "none" && z[at + 1] || z[at], He = r && (rt === "complete" || rt === "reset" || rt in r))), k && (ut || He) && (He || d || !r) && (Gt(k) ? k(g) : g.getTrailing(k).forEach(function(Ni) {
            return Ni.endAnimation();
          })), X || (V && !Vt && !wn ? (V._dp._time - V._start !== V._time && V.render(V._dp._time - V._start), V.resetTo ? V.resetTo("totalProgress", q, r._tTime / r._tDur) : (V.vars.totalProgress = q, V.invalidate().restart())) : r && r.totalProgress(q, !!(Vt && (Lt || O)))), f) {
            if (O && _ && (Mt.style[_ + C.os2] = Or), !Q)
              Fe(Br(Oe + ei * q));
            else if (Xe) {
              if (ge = !O && q > yt && mt + 1 > I && I + 1 >= Qe(M, C), T)
                if (!O && (Wt || ge)) {
                  var Nt = oi(f, !0), Ft = I - j;
                  Vo(f, tt, Nt.top + (C === Ot ? Ft : 0) + Et, Nt.left + (C === Ot ? 0 : Ft) + Et);
                } else
                  Vo(f, Mt);
              wr(Wt || ge ? di : Ri), ii && q < 1 && Wt || Fe(Oe + (q === 1 && !ge ? ei : 0));
            }
          }
          v && !Zt.tween && !Vt && !wn && Ye.restart(!0), a && (ut || S && q && (q < 1 || !us)) && cn(a.targets).forEach(function(Ni) {
            return Ni.classList[Wt || S ? "add" : "remove"](a.className);
          }), o && !X && !O && o(g), Xe && !Vt ? (X && (He && (rt === "complete" ? r.pause().totalProgress(1) : rt === "reset" ? r.restart(!0).pause() : rt === "restart" ? r.restart(!0) : r[rt]()), o && o(g)), (ut || !us) && (u && ut && sr(g, u), $[at] && sr(g, $[at]), S && (q === 1 ? g.kill(!1, 1) : $[at] = 0), ut || (at = q === 1 ? 1 : 3, $[at] && sr(g, $[at]))), E && !Wt && Math.abs(g.getVelocity()) > (Xr(E) ? E : 2500) && (Lr(g.callbackAnimation), V ? V.progress(1) : Lr(r, rt === "reverse" ? 1 : !q, 1))) : X && o && !Vt && o(g);
        }
        if (er) {
          var Ht = x ? I / x.duration() * (x._caScrollDist || 0) : I;
          dn(Ht + (y._isFlipped ? 1 : 0)), er(Ht);
        }
        rr && rr(-I / x.duration() * (x._caScrollDist || 0));
      }
    }, g.enable = function(O, F) {
      g.enabled || (g.enabled = !0, At(M, "resize", Wr), Y || At(M, "scroll", ar), ot && At(s, "refreshInit", ot), O !== !1 && (g.progress = Bt = 0, jt = Jt = dt = bt()), F !== !1 && g.refresh());
    }, g.getTween = function(O) {
      return O && Zt ? Zt.tween : V;
    }, g.setPositions = function(O, F, A, I) {
      if (x) {
        var Dt = x.scrollTrigger, q = x.duration(), yt = Dt.end - Dt.start;
        O = Dt.start + yt * O / q, F = Dt.start + yt * F / q;
      }
      g.refresh(!1, !1, {
        start: No(O, A && !!g._startClamp),
        end: No(F, A && !!g._endClamp)
      }, I), g.update();
    }, g.adjustPinSpacing = function(O) {
      if (Tt && O) {
        var F = Tt.indexOf(C.d) + 1;
        Tt[F] = parseFloat(Tt[F]) + O + Et, Tt[1] = parseFloat(Tt[1]) + O + Et, wr(Tt);
      }
    }, g.disable = function(O, F) {
      if (O !== !1 && g.revert(!0, !0), g.enabled && (g.enabled = g.isActive = !1, F || V && V.pause(), Be = 0, Xt && (Xt.uncache = 1), ot && Rt(s, "refreshInit", ot), Ye && (Ye.pause(), Zt.tween && Zt.tween.kill() && (Zt.tween = 0)), !Y)) {
        for (var A = W.length; A--; )
          if (W[A].scroller === M && W[A] !== g)
            return;
        Rt(M, "resize", Wr), Y || Rt(M, "scroll", ar);
      }
    }, g.kill = function(O, F) {
      g.disable(O, F), V && !F && V.kill(), l && delete Ls[l];
      var A = W.indexOf(g);
      A >= 0 && W.splice(A, 1), A === re && Ln > 0 && re--, A = 0, W.forEach(function(I) {
        return I.scroller === g.scroller && (A = 1);
      }), A || ne || (g.scroll.rec = 0), r && (r.scrollTrigger = null, O && r.revert({
        kill: !1
      }), F || r.kill()), oe && [oe, pe, y, _e].forEach(function(I) {
        return I.parentNode && I.parentNode.removeChild(I);
      }), tn === g && (tn = 0), f && (Xt && (Xt.uncache = 1), A = 0, W.forEach(function(I) {
        return I.pin === f && A++;
      }), A || (Xt.spacer = 0)), e.onKill && e.onKill(g);
    }, W.push(g), g.enable(!1, !1), ri && ri(g), r && r.add && !pt) {
      var J = g.update;
      g.update = function() {
        g.update = J, U.cache++, j || mt || g.refresh();
      }, D.delayedCall(0.01, g.update), pt = 0.01, j = mt = 0;
    } else
      g.refresh();
    f && sc();
  }, s.register = function(e) {
    return ur || (D = e || fl(), cl() && window.document && s.enable(), ur = Yr), ur;
  }, s.defaults = function(e) {
    if (e)
      for (var r in e)
        Sn[r] = e[r];
    return Sn;
  }, s.disable = function(e, r) {
    Yr = 0, W.forEach(function(o) {
      return o[r ? "kill" : "disable"](e);
    }), Rt(H, "wheel", ar), Rt(et, "scroll", ar), clearInterval(yn), Rt(et, "touchcancel", qe), Rt(tt, "touchstart", qe), bn(Rt, et, "pointerdown,touchstart,mousedown", Fo), bn(Rt, et, "pointerup,touchend,mouseup", Io), $n.kill(), xn(Rt);
    for (var n = 0; n < U.length; n += 3)
      Tn(Rt, U[n], U[n + 1]), Tn(Rt, U[n], U[n + 2]);
  }, s.enable = function() {
    if (H = window, et = document, xe = et.documentElement, tt = et.body, D) {
      if (cn = D.utils.toArray, Gr = D.utils.clamp, As = D.core.context || qe, ls = D.core.suppressOverwrites || qe, so = H.history.scrollRestoration || "auto", Ns = H.pageYOffset || 0, D.core.globals("ScrollTrigger", s), tt) {
        Yr = 1, yr = document.createElement("div"), yr.style.height = "100vh", yr.style.position = "absolute", xl(), ju(), xt.register(D), s.isTouch = xt.isTouch, vi = xt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Rs = xt.isTouch === 1, At(H, "wheel", ar), no = [H, et, xe, tt], D.matchMedia ? (s.matchMedia = function(c) {
          var d = D.matchMedia(), h;
          for (h in c)
            d.add(h, c[h]);
          return d;
        }, D.addEventListener("matchMediaInit", function() {
          yl(), fo();
        }), D.addEventListener("matchMediaRevert", function() {
          return vl();
        }), D.addEventListener("matchMedia", function() {
          Hi(0, 1), Ji("matchMedia");
        }), D.matchMedia().add("(orientation: portrait)", function() {
          return fs(), fs;
        })) : console.warn("Requires GSAP 3.11.0 or later"), fs(), At(et, "scroll", ar);
        var e = tt.hasAttribute("style"), r = tt.style, n = r.borderTopStyle, o = D.core.Animation.prototype, a, l;
        for (o.revert || Object.defineProperty(o, "revert", {
          value: function() {
            return this.time(-0.01, !0);
          }
        }), r.borderTopStyle = "solid", a = oi(tt), Ot.m = Math.round(a.top + Ot.sc()) || 0, se.m = Math.round(a.left + se.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), e || (tt.setAttribute("style", ""), tt.removeAttribute("style")), yn = setInterval(Xo, 250), D.delayedCall(0.5, function() {
          return wn = 0;
        }), At(et, "touchcancel", qe), At(tt, "touchstart", qe), bn(At, et, "pointerdown,touchstart,mousedown", Fo), bn(At, et, "pointerup,touchend,mouseup", Io), Ds = D.utils.checkPrefix("transform"), Nn.push(Ds), ur = $t(), $n = D.delayedCall(0.2, Hi).pause(), cr = [et, "visibilitychange", function() {
          var c = H.innerWidth, d = H.innerHeight;
          et.hidden ? (Ao = c, zo = d) : (Ao !== c || zo !== d) && Wr();
        }, et, "DOMContentLoaded", Hi, H, "load", Hi, H, "resize", Wr], xn(At), W.forEach(function(c) {
          return c.enable(0, 1);
        }), l = 0; l < U.length; l += 3)
          Tn(Rt, U[l], U[l + 1]), Tn(Rt, U[l], U[l + 2]);
      } else if (et) {
        var u = function c() {
          s.enable(), et.removeEventListener("DOMContentLoaded", c);
        };
        et.addEventListener("DOMContentLoaded", u);
      }
    }
  }, s.config = function(e) {
    "limitCallbacks" in e && (us = !!e.limitCallbacks);
    var r = e.syncInterval;
    r && clearInterval(yn) || (yn = r) && setInterval(Xo, r), "ignoreMobileResize" in e && (Rs = s.isTouch === 1 && e.ignoreMobileResize), "autoRefreshEvents" in e && (xn(Rt) || xn(At, e.autoRefreshEvents || "none"), al = (e.autoRefreshEvents + "").indexOf("resize") === -1);
  }, s.scrollerProxy = function(e, r) {
    var n = ae(e), o = U.indexOf(n), a = Zi(n);
    ~o && U.splice(o, a ? 6 : 2), r && (a ? Ze.unshift(H, r, tt, r, xe, r) : Ze.unshift(n, r));
  }, s.clearMatchMedia = function(e) {
    W.forEach(function(r) {
      return r._ctx && r._ctx.query === e && r._ctx.kill(!0, !0);
    });
  }, s.isInViewport = function(e, r, n) {
    var o = (ve(e) ? ae(e) : e).getBoundingClientRect(), a = o[n ? Gi : Ki] * r || 0;
    return n ? o.right - a > 0 && o.left + a < H.innerWidth : o.bottom - a > 0 && o.top + a < H.innerHeight;
  }, s.positionInViewport = function(e, r, n) {
    ve(e) && (e = ae(e));
    var o = e.getBoundingClientRect(), a = o[n ? Gi : Ki], l = r == null ? a / 2 : r in Gn ? Gn[r] * a : ~r.indexOf("%") ? parseFloat(r) * a / 100 : parseFloat(r) || 0;
    return n ? (o.left + l) / H.innerWidth : (o.top + l) / H.innerHeight;
  }, s.killAll = function(e) {
    if (W.slice(0).forEach(function(n) {
      return n.vars.id !== "ScrollSmoother" && n.kill();
    }), e !== !0) {
      var r = ji.killAll || [];
      ji = {}, r.forEach(function(n) {
        return n();
      });
    }
  }, s;
}();
N.version = "3.15.0";
N.saveStyles = function(s) {
  return s ? cn(s).forEach(function(t) {
    if (t && t.style) {
      var i = me.indexOf(t);
      i >= 0 && me.splice(i, 5), me.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), D.core.getCache(t), As());
    }
  }) : me;
};
N.revert = function(s, t) {
  return fo(!s, t);
};
N.create = function(s, t) {
  return new N(s, t);
};
N.refresh = function(s) {
  return s ? Wr(!0) : (ur || N.register()) && Hi(!0);
};
N.update = function(s) {
  return ++U.cache && li(s === !0 ? 2 : 0);
};
N.clearScrollMemory = wl;
N.maxScroll = function(s, t) {
  return Qe(s, t ? se : Ot);
};
N.getScrollFunc = function(s, t) {
  return Mi(ae(s), t ? se : Ot);
};
N.getById = function(s) {
  return Ls[s];
};
N.getAll = function() {
  return W.filter(function(s) {
    return s.vars.id !== "ScrollSmoother";
  });
};
N.isScrolling = function() {
  return !!Le;
};
N.snapDirectional = co;
N.addEventListener = function(s, t) {
  var i = ji[s] || (ji[s] = []);
  ~i.indexOf(t) || i.push(t);
};
N.removeEventListener = function(s, t) {
  var i = ji[s], e = i && i.indexOf(t);
  e >= 0 && i.splice(e, 1);
};
N.batch = function(s, t) {
  var i = [], e = {}, r = t.interval || 0.016, n = t.batchMax || 1e9, o = function(u, c) {
    var d = [], h = [], f = D.delayedCall(r, function() {
      c(d, h), d = [], h = [];
    }).pause();
    return function(_) {
      d.length || f.restart(!0), d.push(_.trigger), h.push(_), n <= d.length && f.progress(1);
    };
  }, a;
  for (a in t)
    e[a] = a.substr(0, 2) === "on" && Gt(t[a]) && a !== "onRefreshInit" ? o(a, t[a]) : t[a];
  return Gt(n) && (n = n(), At(N, "refresh", function() {
    return n = t.batchMax();
  })), cn(s).forEach(function(l) {
    var u = {};
    for (a in e)
      u[a] = e[a];
    u.trigger = l, i.push(N.create(u));
  }), i;
};
var qo = function(t, i, e, r) {
  return i > r ? t(r) : i < 0 && t(0), e > r ? (r - i) / (e - i) : e < 0 ? i / (i - e) : 1;
}, ds = function s(t, i) {
  i === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = i === !0 ? "auto" : i ? "pan-" + i + (xt.isTouch ? " pinch-zoom" : "") : "none", t === xe && s(tt, i);
}, En = {
  auto: 1,
  scroll: 1
}, cc = function(t) {
  var i = t.event, e = t.target, r = t.axis, n = (i.changedTouches ? i.changedTouches[0] : i).target, o = n._gsap || D.core.getCache(n), a = $t(), l;
  if (!o._isScrollT || a - o._isScrollT > 2e3) {
    for (; n && n !== tt && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(En[(l = Re(n)).overflowY] || En[l.overflowX])); )
      n = n.parentNode;
    o._isScroll = n && n !== e && !Zi(n) && (En[(l = Re(n)).overflowY] || En[l.overflowX]), o._isScrollT = a;
  }
  (o._isScroll || r === "x") && (i.stopPropagation(), i._gsapAllow = !0);
}, Tl = function(t, i, e, r) {
  return xt.create({
    target: t,
    capture: !0,
    debounce: !1,
    lockAxis: !0,
    type: i,
    onWheel: r = r && cc,
    onPress: r,
    onDrag: r,
    onScroll: r,
    onEnable: function() {
      return e && At(et, xt.eventTypes[0], Ko, !1, !0);
    },
    onDisable: function() {
      return Rt(et, xt.eventTypes[0], Ko, !0);
    }
  });
}, fc = /(input|label|select|textarea)/i, Go, Ko = function(t) {
  var i = fc.test(t.target.tagName);
  (i || Go) && (t._gsapAllow = !0, Go = i);
}, hc = function(t) {
  Xi(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
  var i = t, e = i.normalizeScrollX, r = i.momentum, n = i.allowNestedScroll, o = i.onRelease, a, l, u = ae(t.target) || xe, c = D.core.globals().ScrollSmoother, d = c && c.get(), h = vi && (t.content && ae(t.content) || d && t.content !== !1 && !d.smooth() && d.content()), f = Mi(u, Ot), _ = Mi(u, se), p = 1, m = (xt.isTouch && H.visualViewport ? H.visualViewport.scale * H.visualViewport.width : H.outerWidth) / H.innerWidth, b = 0, w = Gt(r) ? function() {
    return r(a);
  } : function() {
    return r || 2.8;
  }, S, v, T = Tl(u, t.type, !0, n), P = function() {
    return v = !1;
  }, x = qe, E = qe, k = function() {
    l = Qe(u, Ot), E = Gr(vi ? 1 : 0, l), e && (x = Gr(0, Qe(u, se))), S = Qi;
  }, C = function() {
    h._gsap.y = Br(parseFloat(h._gsap.y) + f.offset) + "px", h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0;
  }, X = function() {
    if (v) {
      requestAnimationFrame(P);
      var Z = Br(a.deltaY / 2), it = E(f.v - Z);
      if (h && it !== f.v + f.offset) {
        f.offset = it - f.v;
        var g = Br((parseFloat(h && h._gsap.y) || 0) - f.offset);
        h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + g + ", 0, 1)", h._gsap.y = g + "px", f.cacheID = U.cache, li();
      }
      return !0;
    }
    f.offset && C(), v = !0;
  }, M, K, Y, Q, $ = function() {
    k(), M.isActive() && M.vars.scrollY > l && (f() > l ? M.progress(1) && f(l) : M.resetTo("scrollY", l));
  };
  return h && D.set(h, {
    y: "+=0"
  }), t.ignoreCheck = function(z) {
    return vi && z.type === "touchmove" && X() || p > 1.05 && z.type !== "touchstart" || a.isGesturing || z.touches && z.touches.length > 1;
  }, t.onPress = function() {
    v = !1;
    var z = p;
    p = Br((H.visualViewport && H.visualViewport.scale || 1) / m), M.pause(), z !== p && ds(u, p > 1.01 ? !0 : e ? !1 : "x"), K = _(), Y = f(), k(), S = Qi;
  }, t.onRelease = t.onGestureStart = function(z, Z) {
    if (f.offset && C(), !Z)
      Q.restart(!0);
    else {
      U.cache++;
      var it = w(), g, ot;
      e && (g = _(), ot = g + it * 0.05 * -z.velocityX / 0.227, it *= qo(_, g, ot, Qe(u, se)), M.vars.scrollX = x(ot)), g = f(), ot = g + it * 0.05 * -z.velocityY / 0.227, it *= qo(f, g, ot, Qe(u, Ot)), M.vars.scrollY = E(ot), M.invalidate().duration(it).play(0.01), (vi && M.vars.scrollY >= l || g >= l - 1) && D.to({}, {
        onUpdate: $,
        duration: it
      });
    }
    o && o(z);
  }, t.onWheel = function() {
    M._ts && M.pause(), $t() - b > 1e3 && (S = 0, b = $t());
  }, t.onChange = function(z, Z, it, g, ot) {
    if (Qi !== S && k(), Z && e && _(x(g[2] === Z ? K + (z.startX - z.x) : _() + Z - g[1])), it) {
      f.offset && C();
      var Qt = ot[2] === it, Ne = Qt ? Y + z.startY - z.y : f() + it - ot[1], dt = E(Ne);
      Qt && Ne !== dt && (Y += dt - Ne), f(dt);
    }
    (it || Z) && li();
  }, t.onEnable = function() {
    ds(u, e ? !1 : "x"), N.addEventListener("refresh", $), At(H, "resize", $), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = _.smooth = !1), T.enable();
  }, t.onDisable = function() {
    ds(u, !0), Rt(H, "resize", $), N.removeEventListener("refresh", $), T.kill();
  }, t.lockAxis = t.lockAxis !== !1, a = new xt(t), a.iOS = vi, vi && !f() && f(1), vi && D.ticker.add(qe), Q = a._dc, M = D.to(a, {
    ease: "power4",
    paused: !0,
    inherit: !1,
    scrollX: e ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: bl(f, f(), function() {
        return M.pause();
      })
    },
    onUpdate: li,
    onComplete: Q.vars.onComplete
  }), a;
};
N.sort = function(s) {
  if (Gt(s))
    return W.sort(s);
  var t = H.pageYOffset || 0;
  return N.getAll().forEach(function(i) {
    return i._sortY = i.trigger ? t + i.trigger.getBoundingClientRect().top : i.start + H.innerHeight;
  }), W.sort(s || function(i, e) {
    return (i.vars.refreshPriority || 0) * -1e6 + (i.vars.containerAnimation ? 1e6 : i._sortY) - ((e.vars.containerAnimation ? 1e6 : e._sortY) + (e.vars.refreshPriority || 0) * -1e6);
  });
};
N.observe = function(s) {
  return new xt(s);
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
  var t = s instanceof xt ? s : hc(s);
  return ie && ie.target === t.target && ie.kill(), Zi(t.target) && (ie = t), t;
};
N.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: Ms,
  _inputObserver: Tl,
  _scrollers: U,
  _proxies: Ze,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function() {
      Le || Ji("scrollStart"), Le = $t();
    },
    // a way to get the _refreshing value in Observer
    ref: function() {
      return Vt;
    }
  }
};
fl() && D.registerPlugin(N);
var Qo = "1.3.26";
function Sl(s, t, i) {
  return Math.max(s, Math.min(t, i));
}
function dc(s, t, i) {
  return (1 - i) * s + i * t;
}
function pc(s, t, i, e) {
  return dc(s, t, 1 - Math.exp(-i * e));
}
function _c(s, t) {
  return (s % t + t) % t;
}
var gc = class {
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
      const i = Sl(0, this.currentTime / this.duration, 1);
      t = i >= 1;
      const e = t ? 1 : this.easing(i);
      this.value = this.from + (this.to - this.from) * e;
    } else this.lerp ? (this.value = pc(this.value, this.to, this.lerp * 60, s), Math.round(this.value) === Math.round(this.to) && (this.value = this.to, t = !0)) : (this.value = this.to, t = !0);
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
  fromTo(s, t, { lerp: i, duration: e, easing: r, onStart: n, onUpdate: o }) {
    this.from = this.value = s, this.to = t, this.lerp = i, this.duration = e, this.easing = r, this.currentTime = 0, this.isRunning = !0, n?.(), this.onUpdate = o;
  }
};
function mc(s, t) {
  let i;
  return function(...e) {
    clearTimeout(i), i = setTimeout(() => {
      i = void 0, s.apply(this, e);
    }, t);
  };
}
var vc = class {
  constructor(s, t, { autoResize: i = !0, debounce: e = 250 } = {}) {
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
    this.wrapper = s, this.content = t, i && (this.debouncedResize = mc(this.resize, e), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
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
}, Cl = class {
  constructor() {
    R(this, "events", {});
  }
  /**
  * Emit an event with the given data
  * @param event Event name
  * @param args Data to pass to the event handlers
  */
  emit(s, ...t) {
    const i = this.events[s] || [];
    for (let e = 0, r = i.length; e < r; e++) i[e]?.(...t);
  }
  /**
  * Add a callback to the event
  * @param event Event name
  * @param cb Callback function
  * @returns Unsubscribe function
  */
  on(s, t) {
    return this.events[s] ? this.events[s].push(t) : this.events[s] = [t], () => {
      this.events[s] = this.events[s]?.filter((i) => t !== i);
    };
  }
  /**
  * Remove a callback from the event
  * @param event Event name
  * @param callback Callback function
  */
  off(s, t) {
    this.events[s] = this.events[s]?.filter((i) => t !== i);
  }
  /**
  * Remove all event listeners and clean up
  */
  destroy() {
    this.events = {};
  }
};
const yc = 100 / 6, mi = { passive: !1 };
function Zo(s, t) {
  return s === 1 ? yc : s === 2 ? t : 1;
}
var wc = class {
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
    R(this, "emitter", new Cl());
    /**
    * Event handler for 'touchstart' event
    *
    * @param event Touch event
    */
    R(this, "onTouchStart", (s) => {
      const { clientX: t, clientY: i } = s.targetTouches ? s.targetTouches[0] : s;
      this.touchStart.x = t, this.touchStart.y = i, this.lastDelta = {
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
      const { clientX: t, clientY: i } = s.targetTouches ? s.targetTouches[0] : s, e = -(t - this.touchStart.x) * this.options.touchMultiplier, r = -(i - this.touchStart.y) * this.options.touchMultiplier;
      this.touchStart.x = t, this.touchStart.y = i, this.lastDelta = {
        x: e,
        y: r
      }, this.emitter.emit("scroll", {
        deltaX: e,
        deltaY: r,
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
      let { deltaX: t, deltaY: i, deltaMode: e } = s;
      const r = Zo(e, this.window.width), n = Zo(e, this.window.height);
      t *= r, i *= n, t *= this.options.wheelMultiplier, i *= this.options.wheelMultiplier, this.emitter.emit("scroll", {
        deltaX: t,
        deltaY: i,
        event: s
      });
    });
    R(this, "onWindowResize", () => {
      this.window = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    });
    this.element = s, this.options = t, window.addEventListener("resize", this.onWindowResize), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, mi), this.element.addEventListener("touchstart", this.onTouchStart, mi), this.element.addEventListener("touchmove", this.onTouchMove, mi), this.element.addEventListener("touchend", this.onTouchEnd, mi);
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
    this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize), this.element.removeEventListener("wheel", this.onWheel, mi), this.element.removeEventListener("touchstart", this.onTouchStart, mi), this.element.removeEventListener("touchmove", this.onTouchMove, mi), this.element.removeEventListener("touchend", this.onTouchEnd, mi);
  }
};
const jo = (s) => Math.min(1, 1.001 - 2 ** (-10 * s));
var xc = class {
  constructor({ wrapper: s = window, content: t = document.documentElement, eventsTarget: i = s, smoothWheel: e = !0, syncTouch: r = !1, syncTouchLerp: n = 0.075, touchInertiaExponent: o = 1.7, duration: a, easing: l, lerp: u = 0.1, infinite: c = !1, orientation: d = "vertical", gestureOrientation: h = d === "horizontal" ? "both" : "vertical", touchMultiplier: f = 1, wheelMultiplier: _ = 1, autoResize: p = !0, prevent: m, virtualScroll: b, overscroll: w = !0, autoRaf: S = !1, anchors: v = !1, autoToggle: T = !1, allowNestedScroll: P = !1, __experimental__naiveDimensions: x = !1, naiveDimensions: E = x, stopInertiaOnNavigate: k = !1, respectReducedMotion: C = !0 } = {}) {
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
    R(this, "animate", new gc());
    R(this, "emitter", new Cl());
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
      const t = s.composedPath().filter((e) => e instanceof HTMLAnchorElement && e.href).map((e) => new URL(e.href)), i = new URL(window.location.href);
      if (this.options.anchors) {
        const e = t.find((r) => i.host === r.host && i.pathname === r.pathname && r.hash);
        if (e) {
          const r = typeof this.options.anchors == "object" && this.options.anchors ? this.options.anchors : void 0, n = decodeURIComponent(e.hash);
          this.scrollTo(n, r);
          return;
        }
      }
      if (this.options.stopInertiaOnNavigate && t.some((e) => i.host === e.host && i.pathname !== e.pathname)) {
        this.reset();
        return;
      }
    });
    R(this, "onPointerDown", (s) => {
      s.button === 1 && this.reset();
    });
    R(this, "onVirtualScroll", (s) => {
      if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(s) === !1) return;
      const { deltaX: t, deltaY: i, event: e } = s;
      if (this.emitter.emit("virtual-scroll", {
        deltaX: t,
        deltaY: i,
        event: e
      }), e.ctrlKey || e.lenisStopPropagation) return;
      const r = e.type.includes("touch"), n = e.type.includes("wheel");
      if (r && this.isIos && (e.type === "touchstart" && (this._isDraggingSelection = this.isTouchOnSelectionHandle(e)), this._isDraggingSelection)) {
        e.type === "touchend" && (this._isDraggingSelection = !1);
        return;
      }
      this.isTouching = e.type === "touchstart" || e.type === "touchmove";
      const o = t === 0 && i === 0;
      if (this.options.syncTouch && r && e.type === "touchstart" && o && !this.isStopped && !this.isLocked) {
        this.reset();
        return;
      }
      const a = this.options.gestureOrientation === "vertical" && i === 0 || this.options.gestureOrientation === "horizontal" && t === 0;
      if (o || a) return;
      let l = e.composedPath();
      l = l.slice(0, l.indexOf(this.rootElement));
      const u = this.options.prevent, c = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
      if (l.find((_) => _ instanceof HTMLElement && (typeof u == "function" && u?.(_) || _.hasAttribute?.("data-lenis-prevent") || c === "vertical" && _.hasAttribute?.("data-lenis-prevent-vertical") || c === "horizontal" && _.hasAttribute?.("data-lenis-prevent-horizontal") || r && _.hasAttribute?.("data-lenis-prevent-touch") || n && _.hasAttribute?.("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.hasNestedScroll(_, {
        deltaX: t,
        deltaY: i
      })))) return;
      if (this.isStopped || this.isLocked) {
        e.cancelable && e.preventDefault();
        return;
      }
      if (!(this.options.syncTouch && r || this.options.smoothWheel && n)) {
        this.isScrolling = "native", this.animate.stop(), e.lenisStopPropagation = !0;
        return;
      }
      let d = i;
      this.options.gestureOrientation === "both" ? d = Math.abs(i) > Math.abs(t) ? i : t : this.options.gestureOrientation === "horizontal" && (d = t), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && i > 0 || this.animatedScroll === this.limit && i < 0)) && (e.lenisStopPropagation = !0), e.cancelable && e.preventDefault();
      const h = r && this.options.syncTouch, f = r && e.type === "touchend";
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
    window.lenisVersion = Qo, window.lenis || (window.lenis = {}), window.lenis.version = Qo, d === "horizontal" && (window.lenis.horizontal = !0), r === !0 && (window.lenis.touch = !0), this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent), (!s || s === document.documentElement) && (s = window), typeof a == "number" && typeof l != "function" ? l = jo : typeof l == "function" && typeof a != "number" && (a = 1), this.options = {
      wrapper: s,
      content: t,
      eventsTarget: i,
      smoothWheel: e,
      syncTouch: r,
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
      allowNestedScroll: P,
      naiveDimensions: E,
      stopInertiaOnNavigate: k,
      respectReducedMotion: C
    }, this.dimensions = new vc(s, t, { autoResize: p }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, { capture: !0 }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener("click", this.onClick), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown), this.virtualScroll = new wc(i, {
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
    const i = s.targetTouches[0] ?? s.changedTouches[0];
    if (!i) return !1;
    const e = t.getRangeAt(0).getClientRects();
    if (e.length === 0) return !1;
    const r = e[0], n = e[e.length - 1], o = 40, a = Math.hypot(i.clientX - r.left, i.clientY - r.top) <= o, l = Math.hypot(i.clientX - n.right, i.clientY - n.bottom) <= o;
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
  scrollTo(s, { offset: t = 0, immediate: i = !1, lock: e = !1, programmatic: r = !0, lerp: n = r ? this.options.lerp : void 0, duration: o = r ? this.options.duration : void 0, easing: a = r ? this.options.easing : void 0, onStart: l, onComplete: u, force: c = !1, userData: d } = {}) {
    if (this.prefersReducedMotion && (r ? i = !0 : (n = 1, o = void 0, a = void 0)), (this.isStopped || this.isLocked) && !c) return;
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
        if (r) {
          this.targetScroll = this.animatedScroll = this.scroll;
          const _ = h - this.animatedScroll;
          _ > this.limit / 2 ? h -= this.limit : _ < -this.limit / 2 && (h += this.limit);
        }
      } else h = Sl(0, h, this.limit);
      if (h === this.targetScroll) {
        l?.(this), u?.(this);
        return;
      }
      if (this.userData = d ?? {}, i) {
        this.animatedScroll = this.targetScroll = h, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), u?.(this), this.userData = {}, requestAnimationFrame(() => {
          this.dispatchScrollendEvent();
        });
        return;
      }
      r || (this.targetScroll = h), typeof o == "number" && typeof a != "function" ? a = jo : typeof a == "function" && typeof o != "number" && (o = 1), this.animate.fromTo(this.animatedScroll, h, {
        duration: o,
        easing: a,
        lerp: n,
        onStart: () => {
          e && (this.isLocked = !0), this.isScrolling = "smooth", l?.(this);
        },
        onUpdate: (_, p) => {
          this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = _ - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = _, this.setScroll(this.scroll), r && (this.targetScroll = _), p || this.emit(), p && (this.reset(), this.emit(), u?.(this), this.userData = {}, requestAnimationFrame(() => {
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
  hasNestedScroll(s, { deltaX: t, deltaY: i }) {
    const e = Date.now();
    s._lenis || (s._lenis = {});
    const r = s._lenis;
    let n, o, a, l, u, c, d, h, f, _;
    if (e - (r.time ?? 0) > 2e3) {
      r.time = Date.now();
      const P = window.getComputedStyle(s);
      if (r.computedStyle = P, n = [
        "auto",
        "overlay",
        "scroll"
      ].includes(P.overflowX), o = [
        "auto",
        "overlay",
        "scroll"
      ].includes(P.overflowY), u = ["auto"].includes(P.overscrollBehaviorX), c = ["auto"].includes(P.overscrollBehaviorY), r.hasOverflowX = n, r.hasOverflowY = o, !(n || o)) return !1;
      d = s.scrollWidth, h = s.scrollHeight, f = s.clientWidth, _ = s.clientHeight, a = d > f, l = h > _, r.isScrollableX = a, r.isScrollableY = l, r.scrollWidth = d, r.scrollHeight = h, r.clientWidth = f, r.clientHeight = _, r.hasOverscrollBehaviorX = u, r.hasOverscrollBehaviorY = c;
    } else
      a = r.isScrollableX, l = r.isScrollableY, n = r.hasOverflowX, o = r.hasOverflowY, d = r.scrollWidth, h = r.scrollHeight, f = r.clientWidth, _ = r.clientHeight, u = r.hasOverscrollBehaviorX, c = r.hasOverscrollBehaviorY;
    if (!(n && a || o && l)) return !1;
    const p = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
    let m, b, w, S, v, T;
    if (p === "horizontal")
      m = Math.round(s.scrollLeft), b = d - f, w = t, S = n, v = a, T = u;
    else if (p === "vertical")
      m = Math.round(s.scrollTop), b = h - _, w = i, S = o, v = l, T = c;
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
    return this.options.infinite ? _c(this.animatedScroll, this.limit) : this.animatedScroll;
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
St.registerPlugin(N);
const xr = window.matchMedia("(prefers-reduced-motion: reduce)").matches, we = (s, t = document) => t.querySelector(s), Er = (s, t = document) => [...t.querySelectorAll(s)], Jo = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }), bc = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
function ta(s, t) {
  const i = Number(s) / 100;
  return t ? t.replace(/\{\{\s*(\w+)\s*\}\}/g, (e, r) => {
    switch (r) {
      case "amount":
      case "amount_with_comma_separator":
        return bc.format(i);
      case "amount_no_decimals":
      case "amount_no_decimals_with_comma_separator":
      default:
        return Jo.format(Math.round(i));
    }
  }) : `$${Jo.format(Math.round(i))}`;
}
function Tc() {
  if (typeof window.DropScentsChat == "function") {
    window.DropScentsChat();
    return;
  }
  if (window.$crisp) {
    window.$crisp.push(["do", "chat:open"]);
    return;
  }
  if (window.Tawk_API?.maximize) {
    window.Tawk_API.maximize();
    return;
  }
  if (window.tidioChatApi?.open) {
    window.tidioChatApi.open();
    return;
  }
  if (window.Intercom) {
    window.Intercom("show");
    return;
  }
  if (window.zE) {
    window.zE("messenger", "open");
    return;
  }
  if (window.Shopify?.chat?.open) {
    window.Shopify.chat.open();
    return;
  }
  Sc();
}
let ea = 0;
function Sc() {
  let s = we(".toast");
  if (!s) {
    s = document.createElement("div"), s.className = "toast", s.setAttribute("role", "status");
    const t = document.documentElement.dataset.instagram || "https://instagram.com/dropscents";
    s.innerHTML = `El chat todavía no está conectado.
      <a href="${t}" target="_blank" rel="noopener">Escríbenos por Instagram</a>`, document.body.appendChild(s);
  }
  requestAnimationFrame(() => s.classList.add("is-on")), clearTimeout(ea), ea = setTimeout(() => s.classList.remove("is-on"), 6e3);
}
function Cc() {
  document.addEventListener("click", (s) => {
    s.target.closest("[data-chat]") && (s.preventDefault(), Tc());
  });
}
function kc() {
  const s = we(".picker"), t = we("#compare");
  if (!s || !t) return;
  const i = t.dataset.moneyFormat || "", e = Number(t.dataset.envioAfuera || 0), r = {};
  Er("[data-f]", t).forEach((u) => {
    r[u.dataset.f] = u;
  });
  function n(u, c, d) {
    if (!u) return;
    const h = Number(u.dataset.centimos ?? c);
    if (u.dataset.centimos = c, !d || xr || h === c) {
      u.textContent = ta(c, i);
      return;
    }
    const f = { v: h };
    St.to(f, {
      v: c,
      duration: 0.55,
      ease: "power2.out",
      onUpdate: () => {
        u.textContent = ta(f.v, i);
      }
    });
  }
  function o(u, c = !0) {
    const d = u.dataset, h = Number(d.full || 0);
    r.name && (r.name.textContent = d.nombre || ""), r.name2 && (r.name2.textContent = d.nombre || ""), n(r.d5, Number(d.d5 || 0), c), n(r.d10, Number(d.d10 || 0), c), n(r.full, h, c), n(r.full2, h, c), n(r.ship, e, c), n(r.totalUs, h, c), n(r.totalThem, h + e, c), r.link && (r.link.href = d.url || "#");
  }
  const a = Er(".chip", s);
  a.forEach((u) => {
    u.addEventListener("click", () => {
      a.forEach((c) => c.setAttribute("aria-pressed", String(c === u))), o(u);
    });
  });
  const l = a.find((u) => u.getAttribute("aria-pressed") === "true") || a[0];
  l && o(l, !1);
}
function Pc() {
  Er(".card__shot img").forEach((s) => {
    const t = () => s.parentElement.classList.add("is-empty");
    s.addEventListener("error", t), s.complete && s.naturalWidth === 0 && t();
  });
}
let lr = null;
function Ec() {
  xr || (lr = new xc({ lerp: 0.11, wheelMultiplier: 1, touchMultiplier: 1.6 }), lr.on("scroll", N.update), St.ticker.add((s) => lr.raf(s * 1e3)), St.ticker.lagSmoothing(0), window.DropScentsLenis = lr), Er('a[href^="#"]').forEach((s) => {
    s.addEventListener("click", (t) => {
      const i = s.getAttribute("href");
      if (!i || i === "#") return;
      const e = i === "#top" ? 0 : we(i);
      !e && e !== 0 || (t.preventDefault(), lr ? lr.scrollTo(e, { offset: -72, duration: 1.15 }) : window.scrollTo({ top: e === 0 ? 0 : e.offsetTop - 72 }));
    });
  });
}
function Oc() {
  xr || (we("[data-hero-in]") && (St.set("[data-hero-in]", { opacity: 0, y: 26 }), St.timeline({ delay: 0.15 }).to("[data-hero-in]", {
    opacity: 1,
    y: 0,
    duration: 1.05,
    ease: "expo.out",
    stagger: 0.055
  })), we(".step") && St.matchMedia().add(
    { ancho: "(min-width: 900px)", angosto: "(max-width: 899px)" },
    (s) => {
      const t = s.conditions.ancho ? 50 : 0;
      Er(".step").forEach((i, e) => {
        St.from(i, {
          opacity: 0,
          y: 70,
          x: e === 1 ? t : -t,
          rotate: t ? e === 1 ? 1.6 : -1.6 : 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: { trigger: i, start: "top 88%" }
        }), St.to(i, {
          yPercent: -6 - e * 5,
          ease: "none",
          scrollTrigger: { trigger: ".steps", start: "top bottom", end: "bottom top", scrub: 1 }
        });
      });
    }
  ), we(".compare") && (St.from(".compare__col--us", {
    opacity: 0,
    xPercent: 4,
    scale: 0.97,
    duration: 1,
    ease: "expo.out",
    scrollTrigger: { trigger: ".compare", start: "top 82%" }
  }), St.from(".compare__col--them", {
    opacity: 0,
    xPercent: -4,
    scale: 0.97,
    duration: 1,
    ease: "expo.out",
    delay: 0.08,
    scrollTrigger: { trigger: ".compare", start: "top 82%" }
  }), St.from(".chip", {
    opacity: 0,
    y: 14,
    duration: 0.6,
    ease: "power3.out",
    stagger: 0.045,
    scrollTrigger: { trigger: ".picker", start: "top 90%" }
  })), we("[data-reveal-card]") && N.batch("[data-reveal-card]", {
    start: "top 92%",
    onEnter: (s) => St.from(s, {
      opacity: 0,
      y: 46,
      scale: 0.97,
      duration: 0.85,
      ease: "expo.out",
      stagger: 0.07,
      overwrite: !0
    })
  }), Er(".qa__item").forEach((s, t) => {
    St.from(s, {
      opacity: 0,
      x: -24,
      duration: 0.7,
      ease: "power3.out",
      delay: t * 0.03,
      scrollTrigger: { trigger: s, start: "top 92%" }
    });
  }), we(".bubble") && St.from(".bubble", {
    opacity: 0,
    y: 26,
    scale: 0.92,
    transformOrigin: "bottom center",
    duration: 0.6,
    ease: "back.out(1.6)",
    stagger: 0.13,
    scrollTrigger: { trigger: ".chat", start: "top 82%" }
  }), we(".cierre__card") && St.from(".cierre__card", {
    opacity: 0,
    scale: 0.96,
    y: 40,
    duration: 1.1,
    ease: "expo.out",
    scrollTrigger: { trigger: ".cierre", start: "top 85%" }
  }), we(".field__blob--lav") && (St.to(".field__blob--lav", {
    yPercent: -18,
    ease: "none",
    scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 2 }
  }), St.to(".field__blob--sky", {
    yPercent: -30,
    ease: "none",
    scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 2 }
  })));
}
function Mc() {
  const s = we("#nav");
  s && N.create({
    start: "top -60",
    end: 99999,
    onToggle: (t) => s.classList.toggle("is-stuck", t.isActive)
  });
}
let Is = null;
async function kl() {
  const s = we("#scene");
  if (!s || !Is) return;
  const { createScene: t } = await Is(), i = t(s, { reducedMotion: xr });
  return window.addEventListener("resize", () => {
    i.resize(), xr && i.render();
  }), xr || St.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "+=185%",
      pin: !0,
      scrub: 1,
      onUpdate: (r) => i.timeline.progress(r.progress),
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
  ).to({}, { duration: 0.01 }, 0.99), N.refresh(), i;
}
let Ys = null;
function Dc(s = {}) {
  Is = s.cargarEscena || null, "scrollRestoration" in history && (history.scrollRestoration = "manual"), window.scrollTo(0, 0), window.addEventListener("pageshow", () => window.scrollTo(0, 0)), Cc(), kc(), Pc(), Ec(), Oc(), Mc(), document.fonts?.ready && document.fonts.ready.then(() => N.refresh()), kl().then((t) => {
    Ys = t;
  });
}
function Rc() {
  window.Shopify?.designMode && (document.addEventListener("shopify:section:load", (s) => {
    s.target.querySelector("#scene") && (Ys?.dispose(), kl().then((t) => {
      Ys = t;
    })), N.refresh();
  }), document.addEventListener("shopify:section:unload", () => N.refresh()));
}
const ia = window.DropScentsAssets?.scene;
Dc({ cargarEscena: ia ? () => import(
  /* @vite-ignore */
  ia
) : null });
Rc();
