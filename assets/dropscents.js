var td = Object.defineProperty;
var ed = (s, t, e) => t in s ? td(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var Z = (s, t, e) => ed(s, typeof t != "symbol" ? t + "" : t, e);
function Yi(s) {
  if (s === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function Ru(s, t) {
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
var ai = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, vs = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, ml, me, $t, yi = 1e8, Rt = 1 / yi, Ca = Math.PI * 2, id = Ca / 4, rd = 0, Nu = Math.sqrt, nd = Math.cos, sd = Math.sin, ue = function(t) {
  return typeof t == "string";
}, Ht = function(t) {
  return typeof t == "function";
}, Ki = function(t) {
  return typeof t == "number";
}, yl = function(t) {
  return typeof t > "u";
}, $i = function(t) {
  return typeof t == "object";
}, Xe = function(t) {
  return t !== !1;
}, vl = function() {
  return typeof window < "u";
}, zs = function(t) {
  return Ht(t) || ue(t);
}, Fu = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Ce = Array.isArray, od = /random\([^)]+\)/g, ad = /,\s*/g, oc = /(?:-?\.?\d|\.)+/gi, Iu = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, on = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, qo = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Bu = /[+-]=-?[.\d]+/, ld = /[^,'"\[\]\s]+/gi, cd = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Xt, Oi, ka, wl, li = {}, mo = {}, $u, zu = function(t) {
  return (mo = bn(t, li)) && Ue;
}, xl = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, ws = function(t, e) {
  return !e && console.warn(t);
}, Yu = function(t, e) {
  return t && (li[t] = e) && mo && (mo[t] = e) || li;
}, xs = function() {
  return 0;
}, ud = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, ro = {
  suppressEvents: !0,
  kill: !1
}, fd = {
  suppressEvents: !0
}, bl = {}, hr = [], Pa = {}, Xu, ti = {}, Uo = {}, ac = 30, no = [], Sl = "", Tl = function(t) {
  var e = t[0], i, r;
  if ($i(e) || Ht(e) || (t = [t]), !(i = (e._gsap || {}).harness)) {
    for (r = no.length; r-- && !no[r].targetTest(e); )
      ;
    i = no[r];
  }
  for (r = t.length; r--; )
    t[r] && (t[r]._gsap || (t[r]._gsap = new ff(t[r], i))) || t.splice(r, 1);
  return t;
}, Ar = function(t) {
  return t._gsap || Tl(vi(t))[0]._gsap;
}, Wu = function(t, e, i) {
  return (i = t[e]) && Ht(i) ? t[e]() : yl(i) && t.getAttribute && t.getAttribute(e) || i;
}, We = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, Gt = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, Yt = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, fn = function(t, e) {
  var i = e.charAt(0), r = parseFloat(e.substr(2));
  return t = parseFloat(t), i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r;
}, hd = function(t, e) {
  for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; )
    ;
  return r < i;
}, yo = function() {
  var t = hr.length, e = hr.slice(0), i, r;
  for (Pa = {}, hr.length = 0, i = 0; i < t; i++)
    r = e[i], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, El = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, Vu = function(t, e, i, r) {
  hr.length && !me && yo(), t.render(e, i, !!(me && e < 0 && El(t))), hr.length && !me && yo();
}, Hu = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(ld).length < 2 ? e : ue(t) ? t.trim() : t;
}, qu = function(t) {
  return t;
}, ci = function(t, e) {
  for (var i in e)
    i in t || (t[i] = e[i]);
  return t;
}, dd = function(t) {
  return function(e, i) {
    for (var r in i)
      r in e || r === "duration" && t || r === "ease" || (e[r] = i[r]);
  };
}, bn = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, lc = function s(t, e) {
  for (var i in e)
    i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = $i(e[i]) ? s(t[i] || (t[i] = {}), e[i]) : e[i]);
  return t;
}, vo = function(t, e) {
  var i = {}, r;
  for (r in t)
    r in e || (i[r] = t[r]);
  return i;
}, Jn = function(t) {
  var e = t.parent || Xt, i = t.keyframes ? dd(Ce(t.keyframes)) : ci;
  if (Xe(t.inherit))
    for (; e; )
      i(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, pd = function(t, e) {
  for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; )
    ;
  return i < 0;
}, Uu = function(t, e, i, r, n) {
  var o = t[r], a;
  if (n)
    for (a = e[n]; o && o[n] > a; )
      o = o._prev;
  return o ? (e._next = o._next, o._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = o, e.parent = e._dp = t, e;
}, Io = function(t, e, i, r) {
  i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
  var n = e._prev, o = e._next;
  n ? n._next = o : t[i] === e && (t[i] = o), o ? o._prev = n : t[r] === e && (t[r] = n), e._next = e._prev = e.parent = null;
}, gr = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, Rr = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var i = t; i; )
      i._dirty = 1, i = i.parent;
  return t;
}, _d = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, Ma = function(t, e, i, r) {
  return t._startAt && (me ? t._startAt.revert(ro) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r));
}, gd = function s(t) {
  return !t || t._ts && s(t.parent);
}, cc = function(t) {
  return t._repeat ? Sn(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, Sn = function(t, e) {
  var i = Math.floor(t = Yt(t / e));
  return t && i === t ? i - 1 : i;
}, wo = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, Bo = function(t) {
  return t._end = Yt(t._start + (t._tDur / Math.abs(t._ts || t._rts || Rt) || 0));
}, $o = function(t, e) {
  var i = t._dp;
  return i && i.smoothChildTiming && t._ts && (t._start = Yt(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Bo(t), i._dirty || Rr(i, t)), t;
}, Gu = function(t, e) {
  var i;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = wo(t.rawTime(), e), (!e._dur || Rs(0, e.totalDuration(), i) - e._tTime > Rt) && e.render(i, !0)), Rr(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (i = t; i._dp; )
        i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
    t._zTime = -Rt;
  }
}, Ni = function(t, e, i, r) {
  return e.parent && gr(e), e._start = Yt((Ki(i) ? i : i || t !== Xt ? _i(t, i, e) : t._time) + e._delay), e._end = Yt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Uu(t, e, "_first", "_last", t._sort ? "_start" : 0), Da(e) || (t._recent = e), r || Gu(t, e), t._ts < 0 && $o(t, t._tTime), t;
}, ju = function(t, e) {
  return (li.ScrollTrigger || xl("scrollTrigger", e)) && li.ScrollTrigger.create(e, t);
}, Ku = function(t, e, i, r, n) {
  if (kl(t, e, n), !t._initted)
    return 1;
  if (!i && t._pt && !me && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Xu !== ii.frame)
    return hr.push(t), t._lazy = [n, r], 1;
}, md = function s(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || s(e));
}, Da = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, yd = function(t, e, i, r) {
  var n = t.ratio, o = e < 0 || !e && (!t._start && md(t) && !(!t._initted && Da(t)) || (t._ts < 0 || t._dp._ts < 0) && !Da(t)) ? 0 : 1, a = t._rDelay, c = 0, u, f, h;
  if (a && t._repeat && (c = Rs(0, t._tDur, e), f = Sn(c, a), t._yoyo && f & 1 && (o = 1 - o), f !== Sn(t._tTime, a) && (n = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== n || me || r || t._zTime === Rt || !e && t._zTime) {
    if (!t._initted && Ku(t, e, r, i, c))
      return;
    for (h = t._zTime, t._zTime = e || (i ? Rt : 0), i || (i = e && !h), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = c, u = t._pt; u; )
      u.r(o, u.d), u = u._next;
    e < 0 && Ma(t, e, i, !0), t._onUpdate && !i && si(t, "onUpdate"), c && t._repeat && !i && t.parent && si(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && gr(t, 1), !i && !me && (si(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = e);
}, vd = function(t, e, i) {
  var r;
  if (i > e)
    for (r = t._first; r && r._start <= i; ) {
      if (r.data === "isPause" && r._start > e)
        return r;
      r = r._next;
    }
  else
    for (r = t._last; r && r._start >= i; ) {
      if (r.data === "isPause" && r._start < e)
        return r;
      r = r._prev;
    }
}, Tn = function(t, e, i, r) {
  var n = t._repeat, o = Yt(e) || 0, a = t._tTime / t._tDur;
  return a && !r && (t._time *= o / t._dur), t._dur = o, t._tDur = n ? n < 0 ? 1e10 : Yt(o * (n + 1) + t._rDelay * n) : o, a > 0 && !r && $o(t, t._tTime = t._tDur * a), t.parent && Bo(t), i || Rr(t.parent, t), t;
}, uc = function(t) {
  return t instanceof Ye ? Rr(t) : Tn(t, t._dur);
}, wd = {
  _start: 0,
  endTime: xs,
  totalDuration: xs
}, _i = function s(t, e, i) {
  var r = t.labels, n = t._recent || wd, o = t.duration() >= yi ? n.endTime(!1) : t._dur, a, c, u;
  return ue(e) && (isNaN(e) || e in r) ? (c = e.charAt(0), u = e.substr(-1) === "%", a = e.indexOf("="), c === "<" || c === ">" ? (a >= 0 && (e = e.replace(/=/, "")), (c === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (u ? (a < 0 ? n : i).totalDuration() / 100 : 1)) : a < 0 ? (e in r || (r[e] = o), r[e]) : (c = parseFloat(e.charAt(a - 1) + e.substr(a + 1)), u && i && (c = c / 100 * (Ce(i) ? i[0] : i).totalDuration()), a > 1 ? s(t, e.substr(0, a - 1), i) + c : o + c)) : e == null ? o : +e;
}, ts = function(t, e, i) {
  var r = Ki(e[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), o = e[n], a, c;
  if (r && (o.duration = e[1]), o.parent = i, t) {
    for (a = o, c = i; c && !("immediateRender" in a); )
      a = c.vars.defaults || {}, c = Xe(c.vars.inherit) && c.parent;
    o.immediateRender = Xe(a.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[n - 1];
  }
  return new te(e[0], o, e[n + 1]);
}, wr = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, Rs = function(t, e, i) {
  return i < t ? t : i > e ? e : i;
}, Te = function(t, e) {
  return !ue(t) || !(e = cd.exec(t)) ? "" : e[1];
}, xd = function(t, e, i) {
  return wr(i, function(r) {
    return Rs(t, e, r);
  });
}, Oa = [].slice, Qu = function(t, e) {
  return t && $i(t) && "length" in t && (!e && !t.length || t.length - 1 in t && $i(t[0])) && !t.nodeType && t !== Oi;
}, bd = function(t, e, i) {
  return i === void 0 && (i = []), t.forEach(function(r) {
    var n;
    return ue(r) && !e || Qu(r, 1) ? (n = i).push.apply(n, vi(r)) : i.push(r);
  }) || i;
}, vi = function(t, e, i) {
  return $t && !e && $t.selector ? $t.selector(t) : ue(t) && !i && (ka || !En()) ? Oa.call((e || wl).querySelectorAll(t), 0) : Ce(t) ? bd(t, i) : Qu(t) ? Oa.call(t, 0) : t ? [t] : [];
}, La = function(t) {
  return t = vi(t)[0] || ws("Invalid scope") || {}, function(e) {
    var i = t.current || t.nativeElement || t;
    return vi(e, i.querySelectorAll ? i : i === t ? ws("Invalid scope") || wl.createElement("div") : t);
  };
}, Zu = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, Ju = function(t) {
  if (Ht(t))
    return t;
  var e = $i(t) ? t : {
    each: t
  }, i = Nr(e.ease), r = e.from || 0, n = parseFloat(e.base) || 0, o = {}, a = r > 0 && r < 1, c = isNaN(r) || a, u = e.axis, f = r, h = r;
  return ue(r) ? f = h = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[r] || 0 : !a && c && (f = r[0], h = r[1]), function(d, l, _) {
    var p = (_ || e).length, g = o[p], w, T, x, b, m, M, E, C, D;
    if (!g) {
      if (D = e.grid === "auto" ? 0 : (e.grid || [1, yi])[1], !D) {
        for (E = -yi; E < (E = _[D++].getBoundingClientRect().left) && D < p; )
          ;
        D < p && D--;
      }
      for (g = o[p] = [], w = c ? Math.min(D, p) * f - 0.5 : r % D, T = D === yi ? 0 : c ? p * h / D - 0.5 : r / D | 0, E = 0, C = yi, M = 0; M < p; M++)
        x = M % D - w, b = T - (M / D | 0), g[M] = m = u ? Math.abs(u === "y" ? b : x) : Nu(x * x + b * b), m > E && (E = m), m < C && (C = m);
      r === "random" && Zu(g), g.max = E - C, g.min = C, g.v = p = (parseFloat(e.amount) || parseFloat(e.each) * (D > p ? p - 1 : u ? u === "y" ? p / D : D : Math.max(D, p / D)) || 0) * (r === "edges" ? -1 : 1), g.b = p < 0 ? n - p : n, g.u = Te(e.amount || e.each) || 0, i = i && p < 0 ? Nd(i) : i;
    }
    return p = (g[d] - g.min) / g.max || 0, Yt(g.b + (i ? i(p) : p) * g.v) + g.u;
  };
}, Aa = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(i) {
    var r = Yt(Math.round(parseFloat(i) / t) * t * e);
    return (r - r % 1) / e + (Ki(i) ? 0 : Te(i));
  };
}, tf = function(t, e) {
  var i = Ce(t), r, n;
  return !i && $i(t) && (r = i = t.radius || yi, t.values ? (t = vi(t.values), (n = !Ki(t[0])) && (r *= r)) : t = Aa(t.increment)), wr(e, i ? Ht(t) ? function(o) {
    return n = t(o), Math.abs(n - o) <= r ? n : o;
  } : function(o) {
    for (var a = parseFloat(n ? o.x : o), c = parseFloat(n ? o.y : 0), u = yi, f = 0, h = t.length, d, l; h--; )
      n ? (d = t[h].x - a, l = t[h].y - c, d = d * d + l * l) : d = Math.abs(t[h] - a), d < u && (u = d, f = h);
    return f = !r || u <= r ? t[f] : o, n || f === o || Ki(o) ? f : f + Te(o);
  } : Aa(t));
}, ef = function(t, e, i, r) {
  return wr(Ce(t) ? !e : i === !0 ? !!(i = 0) : !r, function() {
    return Ce(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) * i * r) / r;
  });
}, Sd = function() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  return function(r) {
    return e.reduce(function(n, o) {
      return o(n);
    }, r);
  };
}, Td = function(t, e) {
  return function(i) {
    return t(parseFloat(i)) + (e || Te(i));
  };
}, Ed = function(t, e, i) {
  return nf(t, e, 0, 1, i);
}, rf = function(t, e, i) {
  return wr(i, function(r) {
    return t[~~e(r)];
  });
}, Cd = function s(t, e, i) {
  var r = e - t;
  return Ce(t) ? rf(t, s(0, t.length), e) : wr(i, function(n) {
    return (r + (n - t) % r) % r + t;
  });
}, kd = function s(t, e, i) {
  var r = e - t, n = r * 2;
  return Ce(t) ? rf(t, s(0, t.length - 1), e) : wr(i, function(o) {
    return o = (n + (o - t) % n) % n || 0, t + (o > r ? n - o : o);
  });
}, bs = function(t) {
  return t.replace(od, function(e) {
    var i = e.indexOf("[") + 1, r = e.substring(i || 7, i ? e.indexOf("]") : e.length - 1).split(ad);
    return ef(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5);
  });
}, nf = function(t, e, i, r, n) {
  var o = e - t, a = r - i;
  return wr(n, function(c) {
    return i + ((c - t) / o * a || 0);
  });
}, Pd = function s(t, e, i, r) {
  var n = isNaN(t + e) ? 0 : function(l) {
    return (1 - l) * t + l * e;
  };
  if (!n) {
    var o = ue(t), a = {}, c, u, f, h, d;
    if (i === !0 && (r = 1) && (i = null), o)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (Ce(t) && !Ce(e)) {
      for (f = [], h = t.length, d = h - 2, u = 1; u < h; u++)
        f.push(s(t[u - 1], t[u]));
      h--, n = function(_) {
        _ *= h;
        var p = Math.min(d, ~~_);
        return f[p](_ - p);
      }, i = e;
    } else r || (t = bn(Ce(t) ? [] : {}, t));
    if (!f) {
      for (c in e)
        Cl.call(a, t, c, "get", e[c]);
      n = function(_) {
        return Dl(_, a) || (o ? t.p : t);
      };
    }
  }
  return wr(i, n);
}, fc = function(t, e, i) {
  var r = t.labels, n = yi, o, a, c;
  for (o in r)
    a = r[o] - e, a < 0 == !!i && a && n > (a = Math.abs(a)) && (c = o, n = a);
  return c;
}, si = function(t, e, i) {
  var r = t.vars, n = r[e], o = $t, a = t._ctx, c, u, f;
  if (n)
    return c = r[e + "Params"], u = r.callbackScope || t, i && hr.length && yo(), a && ($t = a), f = c ? n.apply(u, c) : n.call(u), $t = o, f;
}, Yn = function(t) {
  return gr(t), t.scrollTrigger && t.scrollTrigger.kill(!!me), t.progress() < 1 && si(t, "onInterrupt"), t;
}, an, sf = [], of = function(t) {
  if (t)
    if (t = !t.name && t.default || t, vl() || t.headless) {
      var e = t.name, i = Ht(t), r = e && !i && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: xs,
        render: Dl,
        add: Cl,
        kill: Hd,
        modifier: Vd,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: Ml,
        aliases: {},
        register: 0
      };
      if (En(), t !== r) {
        if (ti[e])
          return;
        ci(r, ci(vo(t, n), o)), bn(r.prototype, bn(n, vo(t, o))), ti[r.prop = e] = r, t.targetTest && (no.push(r), bl[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      Yu(e, r), t.register && t.register(Ue, r, Ve);
    } else
      sf.push(t);
}, Lt = 255, Xn = {
  aqua: [0, Lt, Lt],
  lime: [0, Lt, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, Lt],
  navy: [0, 0, 128],
  white: [Lt, Lt, Lt],
  olive: [128, 128, 0],
  yellow: [Lt, Lt, 0],
  orange: [Lt, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [Lt, 0, 0],
  pink: [Lt, 192, 203],
  cyan: [0, Lt, Lt],
  transparent: [Lt, Lt, Lt, 0]
}, Go = function(t, e, i) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * Lt + 0.5 | 0;
}, af = function(t, e, i) {
  var r = t ? Ki(t) ? [t >> 16, t >> 8 & Lt, t & Lt] : 0 : Xn.black, n, o, a, c, u, f, h, d, l, _;
  if (!r) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Xn[t])
      r = Xn[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), o = t.charAt(2), a = t.charAt(3), t = "#" + n + n + o + o + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & Lt, r & Lt, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & Lt, t & Lt];
    } else if (t.substr(0, 3) === "hsl") {
      if (r = _ = t.match(oc), !e)
        c = +r[0] % 360 / 360, u = +r[1] / 100, f = +r[2] / 100, o = f <= 0.5 ? f * (u + 1) : f + u - f * u, n = f * 2 - o, r.length > 3 && (r[3] *= 1), r[0] = Go(c + 1 / 3, n, o), r[1] = Go(c, n, o), r[2] = Go(c - 1 / 3, n, o);
      else if (~t.indexOf("="))
        return r = t.match(Iu), i && r.length < 4 && (r[3] = 1), r;
    } else
      r = t.match(oc) || Xn.transparent;
    r = r.map(Number);
  }
  return e && !_ && (n = r[0] / Lt, o = r[1] / Lt, a = r[2] / Lt, h = Math.max(n, o, a), d = Math.min(n, o, a), f = (h + d) / 2, h === d ? c = u = 0 : (l = h - d, u = f > 0.5 ? l / (2 - h - d) : l / (h + d), c = h === n ? (o - a) / l + (o < a ? 6 : 0) : h === o ? (a - n) / l + 2 : (n - o) / l + 4, c *= 60), r[0] = ~~(c + 0.5), r[1] = ~~(u * 100 + 0.5), r[2] = ~~(f * 100 + 0.5)), i && r.length < 4 && (r[3] = 1), r;
}, lf = function(t) {
  var e = [], i = [], r = -1;
  return t.split(dr).forEach(function(n) {
    var o = n.match(on) || [];
    e.push.apply(e, o), i.push(r += o.length + 1);
  }), e.c = i, e;
}, hc = function(t, e, i) {
  var r = "", n = (t + r).match(dr), o = e ? "hsla(" : "rgba(", a = 0, c, u, f, h;
  if (!n)
    return t;
  if (n = n.map(function(d) {
    return (d = af(d, e, 1)) && o + (e ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")";
  }), i && (f = lf(t), c = i.c, c.join(r) !== f.c.join(r)))
    for (u = t.replace(dr, "1").split(on), h = u.length - 1; a < h; a++)
      r += u[a] + (~c.indexOf(a) ? n.shift() || o + "0,0,0,0)" : (f.length ? f : n.length ? n : i).shift());
  if (!u)
    for (u = t.split(dr), h = u.length - 1; a < h; a++)
      r += u[a] + n[a];
  return r + u[h];
}, dr = function() {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Xn)
    s += "|" + t + "\\b";
  return new RegExp(s + ")", "gi");
}(), Md = /hsl[a]?\(/, cf = function(t) {
  var e = t.join(" "), i;
  if (dr.lastIndex = 0, dr.test(e))
    return i = Md.test(e), t[1] = hc(t[1], i), t[0] = hc(t[0], i, lf(t[1])), !0;
}, Ss, ii = function() {
  var s = Date.now, t = 500, e = 33, i = s(), r = i, n = 1e3 / 240, o = n, a = [], c, u, f, h, d, l, _ = function p(g) {
    var w = s() - r, T = g === !0, x, b, m, M;
    if ((w > t || w < 0) && (i += w - e), r += w, m = r - i, x = m - o, (x > 0 || T) && (M = ++h.frame, d = m - h.time * 1e3, h.time = m = m / 1e3, o += x + (x >= n ? 4 : n - x), b = 1), T || (c = u(p)), b)
      for (l = 0; l < a.length; l++)
        a[l](m, d, M, g);
  };
  return h = {
    time: 0,
    frame: 0,
    tick: function() {
      _(!0);
    },
    deltaRatio: function(g) {
      return d / (1e3 / (g || 60));
    },
    wake: function() {
      $u && (!ka && vl() && (Oi = ka = window, wl = Oi.document || {}, li.gsap = Ue, (Oi.gsapVersions || (Oi.gsapVersions = [])).push(Ue.version), zu(mo || Oi.GreenSockGlobals || !Oi.gsap && Oi || {}), sf.forEach(of)), f = typeof requestAnimationFrame < "u" && requestAnimationFrame, c && h.sleep(), u = f || function(g) {
        return setTimeout(g, o - h.time * 1e3 + 1 | 0);
      }, Ss = 1, _(2));
    },
    sleep: function() {
      (f ? cancelAnimationFrame : clearTimeout)(c), Ss = 0, u = xs;
    },
    lagSmoothing: function(g, w) {
      t = g || 1 / 0, e = Math.min(w || 33, t);
    },
    fps: function(g) {
      n = 1e3 / (g || 240), o = h.time * 1e3 + n;
    },
    add: function(g, w, T) {
      var x = w ? function(b, m, M, E) {
        g(b, m, M, E), h.remove(x);
      } : g;
      return h.remove(g), a[T ? "unshift" : "push"](x), En(), x;
    },
    remove: function(g, w) {
      ~(w = a.indexOf(g)) && a.splice(w, 1) && l >= w && l--;
    },
    _listeners: a
  }, h;
}(), En = function() {
  return !Ss && ii.wake();
}, vt = {}, Dd = /^[\d.\-M][\d.\-,\s]/, Od = /["']/g, Ld = function(t) {
  for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], n = 1, o = i.length, a, c, u; n < o; n++)
    c = i[n], a = n !== o - 1 ? c.lastIndexOf(",") : c.length, u = c.substr(0, a), e[r] = isNaN(u) ? u.replace(Od, "").trim() : +u, r = c.substr(a + 1).trim();
  return e;
}, Ad = function(t) {
  var e = t.indexOf("(") + 1, i = t.indexOf(")"), r = t.indexOf("(", e);
  return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
}, Rd = function(t) {
  var e = (t + "").split("("), i = vt[e[0]];
  return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [Ld(e[1])] : Ad(t).split(",").map(Hu)) : vt._CE && Dd.test(t) ? vt._CE("", t) : i;
}, Nd = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, Nr = function(t, e) {
  return t && (Ht(t) ? t : vt[t] || Rd(t)) || e;
}, Ur = function(t, e, i, r) {
  i === void 0 && (i = function(c) {
    return 1 - e(1 - c);
  }), r === void 0 && (r = function(c) {
    return c < 0.5 ? e(c * 2) / 2 : 1 - e((1 - c) * 2) / 2;
  });
  var n = {
    easeIn: e,
    easeOut: i,
    easeInOut: r
  }, o;
  return We(t, function(a) {
    vt[a] = li[a] = n, vt[o = a.toLowerCase()] = i;
    for (var c in n)
      vt[o + (c === "easeIn" ? ".in" : c === "easeOut" ? ".out" : ".inOut")] = vt[a + "." + c] = n[c];
  }), n;
}, uf = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, jo = function s(t, e, i) {
  var r = e >= 1 ? e : 1, n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), o = n / Ca * (Math.asin(1 / r) || 0), a = function(f) {
    return f === 1 ? 1 : r * Math.pow(2, -10 * f) * sd((f - o) * n) + 1;
  }, c = t === "out" ? a : t === "in" ? function(u) {
    return 1 - a(1 - u);
  } : uf(a);
  return n = Ca / n, c.config = function(u, f) {
    return s(t, u, f);
  }, c;
}, Ko = function s(t, e) {
  e === void 0 && (e = 1.70158);
  var i = function(o) {
    return o ? --o * o * ((e + 1) * o + e) + 1 : 0;
  }, r = t === "out" ? i : t === "in" ? function(n) {
    return 1 - i(1 - n);
  } : uf(i);
  return r.config = function(n) {
    return s(t, n);
  }, r;
};
We("Linear,Quad,Cubic,Quart,Quint,Strong", function(s, t) {
  var e = t < 5 ? t + 1 : t;
  Ur(s + ",Power" + (e - 1), t ? function(i) {
    return Math.pow(i, e);
  } : function(i) {
    return i;
  }, function(i) {
    return 1 - Math.pow(1 - i, e);
  }, function(i) {
    return i < 0.5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2;
  });
});
vt.Linear.easeNone = vt.none = vt.Linear.easeIn;
Ur("Elastic", jo("in"), jo("out"), jo());
(function(s, t) {
  var e = 1 / t, i = 2 * e, r = 2.5 * e, n = function(a) {
    return a < e ? s * a * a : a < i ? s * Math.pow(a - 1.5 / t, 2) + 0.75 : a < r ? s * (a -= 2.25 / t) * a + 0.9375 : s * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  Ur("Bounce", function(o) {
    return 1 - n(1 - o);
  }, n);
})(7.5625, 2.75);
Ur("Expo", function(s) {
  return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
});
Ur("Circ", function(s) {
  return -(Nu(1 - s * s) - 1);
});
Ur("Sine", function(s) {
  return s === 1 ? 1 : -nd(s * id) + 1;
});
Ur("Back", Ko("in"), Ko("out"), Ko());
vt.SteppedEase = vt.steps = li.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var i = 1 / t, r = t + (e ? 0 : 1), n = e ? 1 : 0, o = 1 - Rt;
    return function(a) {
      return ((r * Rs(0, o, a) | 0) + n) * i;
    };
  }
};
vs.ease = vt["quad.out"];
We("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(s) {
  return Sl += s + "," + s + "Params,";
});
var ff = function(t, e) {
  this.id = rd++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Wu, this.set = e ? e.getSetter : Ml;
}, Ts = /* @__PURE__ */ function() {
  function s(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Tn(this, +e.duration, 1, 1), this.data = e.data, $t && (this._ctx = $t, $t.data.push(this)), Ss || ii.wake();
  }
  var t = s.prototype;
  return t.delay = function(i) {
    return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay;
  }, t.duration = function(i) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(i) {
    return arguments.length ? (this._dirty = 0, Tn(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(i, r) {
    if (En(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for ($o(this, i), !n._dp || n.parent || Gu(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && Ni(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === Rt || !this._initted && this._dur && i || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), Vu(this, i, r)), this;
  }, t.time = function(i, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + cc(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time;
  }, t.totalProgress = function(i, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(i, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + cc(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(i, r) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? Sn(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(i, r) {
    if (!arguments.length)
      return this._rts === -Rt ? 0 : this._rts;
    if (this._rts === i)
      return this;
    var n = this.parent && this._ts ? wo(this.parent._time, this) : this._tTime;
    return this._rts = +i || 0, this._ts = this._ps || i === -Rt ? 0 : this._rts, this.totalTime(Rs(-Math.abs(this._delay), this.totalDuration(), n), r !== !1), Bo(this), _d(this);
  }, t.paused = function(i) {
    return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (En(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Rt && (this._tTime -= Rt)))), this) : this._ps;
  }, t.startTime = function(i) {
    if (arguments.length) {
      this._start = Yt(i);
      var r = this.parent || this._dp;
      return r && (r._sort || !this.parent) && Ni(r, this, this._start - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(i) {
    return this._start + (Xe(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(i) {
    var r = this.parent || this._dp;
    return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? wo(r.rawTime(i), this) : this._tTime : this._tTime;
  }, t.revert = function(i) {
    i === void 0 && (i = fd);
    var r = me;
    return me = i, El(this) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), me = r, this;
  }, t.globalTime = function(i) {
    for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
      n = r._start + n / (Math.abs(r._ts) || 1), r = r._dp;
    return !this.parent && this._sat ? this._sat.globalTime(i) : n;
  }, t.repeat = function(i) {
    return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, uc(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(i) {
    if (arguments.length) {
      var r = this._time;
      return this._rDelay = i, uc(this), r ? this.time(r) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(i) {
    return arguments.length ? (this._yoyo = i, this) : this._yoyo;
  }, t.seek = function(i, r) {
    return this.totalTime(_i(this, i), Xe(r));
  }, t.restart = function(i, r) {
    return this.play().totalTime(i ? -this._delay : 0, Xe(r)), this._dur || (this._zTime = -Rt), this;
  }, t.play = function(i, r) {
    return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
  }, t.reverse = function(i, r) {
    return i != null && this.seek(i || this.totalDuration(), r), this.reversed(!0).paused(!1);
  }, t.pause = function(i, r) {
    return i != null && this.seek(i, r), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(i) {
    return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -Rt : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -Rt, this;
  }, t.isActive = function() {
    var i = this.parent || this._dp, r = this._start, n;
    return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - Rt);
  }, t.eventCallback = function(i, r, n) {
    var o = this.vars;
    return arguments.length > 1 ? (r ? (o[i] = r, n && (o[i + "Params"] = n), i === "onUpdate" && (this._onUpdate = r)) : delete o[i], this) : o[i];
  }, t.then = function(i) {
    var r = this, n = r._prom;
    return new Promise(function(o) {
      var a = Ht(i) ? i : qu, c = function() {
        var f = r.then;
        r.then = null, n && n(), Ht(a) && (a = a(r)) && (a.then || a === r) && (r.then = f), o(a), r.then = f;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? c() : r._prom = c;
    });
  }, t.kill = function() {
    Yn(this);
  }, s;
}();
ci(Ts.prototype, {
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
  _zTime: -Rt,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var Ye = /* @__PURE__ */ function(s) {
  Ru(t, s);
  function t(i, r) {
    var n;
    return i === void 0 && (i = {}), n = s.call(this, i) || this, n.labels = {}, n.smoothChildTiming = !!i.smoothChildTiming, n.autoRemoveChildren = !!i.autoRemoveChildren, n._sort = Xe(i.sortChildren), Xt && Ni(i.parent || Xt, Yi(n), r), i.reversed && n.reverse(), i.paused && n.paused(!0), i.scrollTrigger && ju(Yi(n), i.scrollTrigger), n;
  }
  var e = t.prototype;
  return e.to = function(r, n, o) {
    return ts(0, arguments, this), this;
  }, e.from = function(r, n, o) {
    return ts(1, arguments, this), this;
  }, e.fromTo = function(r, n, o, a) {
    return ts(2, arguments, this), this;
  }, e.set = function(r, n, o) {
    return n.duration = 0, n.parent = this, Jn(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new te(r, n, _i(this, o), 1), this;
  }, e.call = function(r, n, o) {
    return Ni(this, te.delayedCall(0, r, n), o);
  }, e.staggerTo = function(r, n, o, a, c, u, f) {
    return o.duration = n, o.stagger = o.stagger || a, o.onComplete = u, o.onCompleteParams = f, o.parent = this, new te(r, o, _i(this, c)), this;
  }, e.staggerFrom = function(r, n, o, a, c, u, f) {
    return o.runBackwards = 1, Jn(o).immediateRender = Xe(o.immediateRender), this.staggerTo(r, n, o, a, c, u, f);
  }, e.staggerFromTo = function(r, n, o, a, c, u, f, h) {
    return a.startAt = o, Jn(a).immediateRender = Xe(a.immediateRender), this.staggerTo(r, n, a, c, u, f, h);
  }, e.render = function(r, n, o) {
    var a = this._time, c = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, f = r <= 0 ? 0 : Yt(r), h = this._zTime < 0 != r < 0 && (this._initted || !u), d, l, _, p, g, w, T, x, b, m, M, E;
    if (this !== Xt && f > c && r >= 0 && (f = c), f !== this._tTime || o || h) {
      if (a !== this._time && u && (f += this._time - a, r += this._time - a), d = f, b = this._start, x = this._ts, w = !x, h && (u || (a = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
        if (M = this._yoyo, g = u + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(g * 100 + r, n, o);
        if (d = Yt(f % g), f === c ? (p = this._repeat, d = u) : (m = Yt(f / g), p = ~~m, p && p === m && (d = u, p--), d > u && (d = u)), m = Sn(this._tTime, g), !a && this._tTime && m !== p && this._tTime - m * g - this._dur <= 0 && (m = p), M && p & 1 && (d = u - d, E = 1), p !== m && !this._lock) {
          var C = M && m & 1, D = C === (M && p & 1);
          if (p < m && (C = !C), a = C ? 0 : f % u ? u : f, this._lock = 1, this.render(a || (E ? 0 : Yt(p * g)), n, !u)._lock = 0, this._tTime = f, !n && this.parent && si(this, "onRepeat"), this.vars.repeatRefresh && !E && (this.invalidate()._lock = 1, m = p), a && a !== this._time || w !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, c = this._tDur, D && (this._lock = 2, a = C ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !E && this.invalidate()), this._lock = 0, !this._ts && !w)
            return this;
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (T = vd(this, Yt(a), Yt(d)), T && (f -= d - (d = T._start))), this._tTime = f, this._time = d, this._act = !!x, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, a = 0), !a && f && u && !n && !m && (si(this, "onStart"), this._tTime !== f))
        return this;
      if (d >= a && r >= 0)
        for (l = this._first; l; ) {
          if (_ = l._next, (l._act || d >= l._start) && l._ts && T !== l) {
            if (l.parent !== this)
              return this.render(r, n, o);
            if (l.render(l._ts > 0 ? (d - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (d - l._start) * l._ts, n, o), d !== this._time || !this._ts && !w) {
              T = 0, _ && (f += this._zTime = -Rt);
              break;
            }
          }
          l = _;
        }
      else {
        l = this._last;
        for (var P = r < 0 ? r : d; l; ) {
          if (_ = l._prev, (l._act || P <= l._end) && l._ts && T !== l) {
            if (l.parent !== this)
              return this.render(r, n, o);
            if (l.render(l._ts > 0 ? (P - l._start) * l._ts : (l._dirty ? l.totalDuration() : l._tDur) + (P - l._start) * l._ts, n, o || me && El(l)), d !== this._time || !this._ts && !w) {
              T = 0, _ && (f += this._zTime = P ? -Rt : Rt);
              break;
            }
          }
          l = _;
        }
      }
      if (T && !n && (this.pause(), T.render(d >= a ? 0 : -Rt)._zTime = d >= a ? 1 : -1, this._ts))
        return this._start = b, Bo(this), this.render(r, n, o);
      this._onUpdate && !n && si(this, "onUpdate", !0), (f === c && this._tTime >= this.totalDuration() || !f && a) && (b === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((r || !u) && (f === c && this._ts > 0 || !f && this._ts < 0) && gr(this, 1), !n && !(r < 0 && !a) && (f || a || !c) && (si(this, f === c && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < c && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(r, n) {
    var o = this;
    if (Ki(n) || (n = _i(this, n, r)), !(r instanceof Ts)) {
      if (Ce(r))
        return r.forEach(function(a) {
          return o.add(a, n);
        }), this;
      if (ue(r))
        return this.addLabel(r, n);
      if (Ht(r))
        r = te.delayedCall(0, r);
      else
        return this;
    }
    return this !== r ? Ni(this, r, n) : this;
  }, e.getChildren = function(r, n, o, a) {
    r === void 0 && (r = !0), n === void 0 && (n = !0), o === void 0 && (o = !0), a === void 0 && (a = -yi);
    for (var c = [], u = this._first; u; )
      u._start >= a && (u instanceof te ? n && c.push(u) : (o && c.push(u), r && c.push.apply(c, u.getChildren(!0, n, o)))), u = u._next;
    return c;
  }, e.getById = function(r) {
    for (var n = this.getChildren(1, 1, 1), o = n.length; o--; )
      if (n[o].vars.id === r)
        return n[o];
  }, e.remove = function(r) {
    return ue(r) ? this.removeLabel(r) : Ht(r) ? this.killTweensOf(r) : (r.parent === this && Io(this, r), r === this._recent && (this._recent = this._last), Rr(this));
  }, e.totalTime = function(r, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Yt(ii.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), s.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(r, n) {
    return this.labels[r] = _i(this, n), this;
  }, e.removeLabel = function(r) {
    return delete this.labels[r], this;
  }, e.addPause = function(r, n, o) {
    var a = te.delayedCall(0, n || xs, o);
    return a.data = "isPause", this._hasPause = 1, Ni(this, a, _i(this, r));
  }, e.removePause = function(r) {
    var n = this._first;
    for (r = _i(this, r); n; )
      n._start === r && n.data === "isPause" && gr(n), n = n._next;
  }, e.killTweensOf = function(r, n, o) {
    for (var a = this.getTweensOf(r, o), c = a.length; c--; )
      or !== a[c] && a[c].kill(r, n);
    return this;
  }, e.getTweensOf = function(r, n) {
    for (var o = [], a = vi(r), c = this._first, u = Ki(n), f; c; )
      c instanceof te ? hd(c._targets, a) && (u ? (!or || c._initted && c._ts) && c.globalTime(0) <= n && c.globalTime(c.totalDuration()) > n : !n || c.isActive()) && o.push(c) : (f = c.getTweensOf(a, n)).length && o.push.apply(o, f), c = c._next;
    return o;
  }, e.tweenTo = function(r, n) {
    n = n || {};
    var o = this, a = _i(o, r), c = n, u = c.startAt, f = c.onStart, h = c.onStartParams, d = c.immediateRender, l, _ = te.to(o, ci({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: n.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || Rt,
      onStart: function() {
        if (o.pause(), !l) {
          var g = n.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale());
          _._dur !== g && Tn(_, g, 0, 1).render(_._time, !0, !0), l = 1;
        }
        f && f.apply(_, h || []);
      }
    }, n));
    return d ? _.render(0) : _;
  }, e.tweenFromTo = function(r, n, o) {
    return this.tweenTo(n, ci({
      startAt: {
        time: _i(this, r)
      }
    }, o));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(r) {
    return r === void 0 && (r = this._time), fc(this, _i(this, r));
  }, e.previousLabel = function(r) {
    return r === void 0 && (r = this._time), fc(this, _i(this, r), 1);
  }, e.currentLabel = function(r) {
    return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + Rt);
  }, e.shiftChildren = function(r, n, o) {
    o === void 0 && (o = 0);
    var a = this._first, c = this.labels, u;
    for (r = Yt(r); a; )
      a._start >= o && (a._start += r, a._end += r), a = a._next;
    if (n)
      for (u in c)
        c[u] >= o && (c[u] += r);
    return Rr(this);
  }, e.invalidate = function(r) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(r), n = n._next;
    return s.prototype.invalidate.call(this, r);
  }, e.clear = function(r) {
    r === void 0 && (r = !0);
    for (var n = this._first, o; n; )
      o = n._next, this.remove(n), n = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Rr(this);
  }, e.totalDuration = function(r) {
    var n = 0, o = this, a = o._last, c = yi, u, f, h;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -r : r));
    if (o._dirty) {
      for (h = o.parent; a; )
        u = a._prev, a._dirty && a.totalDuration(), f = a._start, f > c && o._sort && a._ts && !o._lock ? (o._lock = 1, Ni(o, a, f - a._delay, 1)._lock = 0) : c = f, f < 0 && a._ts && (n -= f, (!h && !o._dp || h && h.smoothChildTiming) && (o._start += Yt(f / o._ts), o._time -= f, o._tTime -= f), o.shiftChildren(-f, !1, -1 / 0), c = 0), a._end > n && a._ts && (n = a._end), a = u;
      Tn(o, o === Xt && o._time > n ? o._time : n, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, t.updateRoot = function(r) {
    if (Xt._ts && (Vu(Xt, wo(r, Xt)), Xu = ii.frame), ii.frame >= ac) {
      ac += ai.autoSleep || 120;
      var n = Xt._first;
      if ((!n || !n._ts) && ai.autoSleep && ii._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || ii.sleep();
      }
    }
  }, t;
}(Ts);
ci(Ye.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Fd = function(t, e, i, r, n, o, a) {
  var c = new Ve(this._pt, t, e, 0, 1, mf, null, n), u = 0, f = 0, h, d, l, _, p, g, w, T;
  for (c.b = i, c.e = r, i += "", r += "", (w = ~r.indexOf("random(")) && (r = bs(r)), o && (T = [i, r], o(T, t, e), i = T[0], r = T[1]), d = i.match(qo) || []; h = qo.exec(r); )
    _ = h[0], p = r.substring(u, h.index), l ? l = (l + 1) % 5 : p.substr(-5) === "rgba(" && (l = 1), _ !== d[f++] && (g = parseFloat(d[f - 1]) || 0, c._pt = {
      _next: c._pt,
      p: p || f === 1 ? p : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: g,
      c: _.charAt(1) === "=" ? fn(g, _) - g : parseFloat(_) - g,
      m: l && l < 4 ? Math.round : 0
    }, u = qo.lastIndex);
  return c.c = u < r.length ? r.substring(u, r.length) : "", c.fp = a, (Bu.test(r) || w) && (c.e = 0), this._pt = c, c;
}, Cl = function(t, e, i, r, n, o, a, c, u, f) {
  Ht(r) && (r = r(n || 0, t, o));
  var h = t[e], d = i !== "get" ? i : Ht(h) ? u ? t[e.indexOf("set") || !Ht(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : h, l = Ht(h) ? u ? Yd : _f : Pl, _;
  if (ue(r) && (~r.indexOf("random(") && (r = bs(r)), r.charAt(1) === "=" && (_ = fn(d, r) + (Te(d) || 0), (_ || _ === 0) && (r = _))), !f || d !== r || Ra)
    return !isNaN(d * r) && r !== "" ? (_ = new Ve(this._pt, t, e, +d || 0, r - (d || 0), typeof h == "boolean" ? Wd : gf, 0, l), u && (_.fp = u), a && _.modifier(a, this, t), this._pt = _) : (!h && !(e in t) && xl(e, r), Fd.call(this, t, e, d, r, l, c || ai.stringFilter, u));
}, Id = function(t, e, i, r, n) {
  if (Ht(t) && (t = es(t, n, e, i, r)), !$i(t) || t.style && t.nodeType || Ce(t) || Fu(t))
    return ue(t) ? es(t, n, e, i, r) : t;
  var o = {}, a;
  for (a in t)
    o[a] = es(t[a], n, e, i, r);
  return o;
}, hf = function(t, e, i, r, n, o) {
  var a, c, u, f;
  if (ti[t] && (a = new ti[t]()).init(n, a.rawVars ? e[t] : Id(e[t], r, n, o, i), i, r, o) !== !1 && (i._pt = c = new Ve(i._pt, n, t, 0, 1, a.render, a, 0, a.priority), i !== an))
    for (u = i._ptLookup[i._targets.indexOf(n)], f = a._props.length; f--; )
      u[a._props[f]] = c;
  return a;
}, or, Ra, kl = function s(t, e, i) {
  var r = t.vars, n = r.ease, o = r.startAt, a = r.immediateRender, c = r.lazy, u = r.onUpdate, f = r.runBackwards, h = r.yoyoEase, d = r.keyframes, l = r.autoRevert, _ = t._dur, p = t._startAt, g = t._targets, w = t.parent, T = w && w.data === "nested" ? w.vars.targets : g, x = t._overwrite === "auto" && !ml, b = t.timeline, m = r.easeReverse || h, M, E, C, D, P, B, A, R, X, $, V, Y, nt;
  if (b && (!d || !n) && (n = "none"), t._ease = Nr(n, vs.ease), t._rEase = m && (Nr(m) || t._ease), t._from = !b && !!r.runBackwards, t._from && (t.ratio = 1), !b || d && !r.stagger) {
    if (R = g[0] ? Ar(g[0]).harness : 0, Y = R && r[R.prop], M = vo(r, bl), p && (p._zTime < 0 && p.progress(1), e < 0 && f && a && !l ? p.render(-1, !0) : p.revert(f && _ ? ro : ud), p._lazy = 0), o) {
      if (gr(t._startAt = te.set(g, ci({
        data: "isStart",
        overwrite: !1,
        parent: w,
        immediateRender: !0,
        lazy: !p && Xe(c),
        startAt: null,
        delay: 0,
        onUpdate: u && function() {
          return si(t, "onUpdate");
        },
        stagger: 0
      }, o))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (me || !a && !l) && t._startAt.revert(ro), a && _ && e <= 0 && i <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (f && _ && !p) {
      if (e && (a = !1), C = ci({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !p && Xe(c),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: w
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, M), Y && (C[R.prop] = Y), gr(t._startAt = te.set(g, C)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (me ? t._startAt.revert(ro) : t._startAt.render(-1, !0)), t._zTime = e, !a)
        s(t._startAt, Rt, Rt);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, c = _ && Xe(c) || c && !_, E = 0; E < g.length; E++) {
      if (P = g[E], A = P._gsap || Tl(g)[E]._gsap, t._ptLookup[E] = $ = {}, Pa[A.id] && hr.length && yo(), V = T === g ? E : T.indexOf(P), R && (X = new R()).init(P, Y || M, t, V, T) !== !1 && (t._pt = D = new Ve(t._pt, P, X.name, 0, 1, X.render, X, 0, X.priority), X._props.forEach(function(st) {
        $[st] = D;
      }), X.priority && (B = 1)), !R || Y)
        for (C in M)
          ti[C] && (X = hf(C, M, t, V, P, T)) ? X.priority && (B = 1) : $[C] = D = Cl.call(t, P, C, "get", M[C], V, T, 0, r.stringFilter);
      t._op && t._op[E] && t.kill(P, t._op[E]), x && t._pt && (or = t, Xt.killTweensOf(P, $, t.globalTime(e)), nt = !t.parent, or = 0), t._pt && c && (Pa[A.id] = 1);
    }
    B && yf(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = u, t._initted = (!t._op || t._pt) && !nt, d && e <= 0 && b.render(yi, !0, !0);
}, Bd = function(t, e, i, r, n, o, a, c) {
  var u = (t._pt && t._ptCache || (t._ptCache = {}))[e], f, h, d, l;
  if (!u)
    for (u = t._ptCache[e] = [], d = t._ptLookup, l = t._targets.length; l--; ) {
      if (f = d[l][e], f && f.d && f.d._pt)
        for (f = f.d._pt; f && f.p !== e && f.fp !== e; )
          f = f._next;
      if (!f)
        return Ra = 1, t.vars[e] = "+=0", kl(t, a), Ra = 0, c ? ws(e + " not eligible for reset. Try splitting into individual properties") : 1;
      u.push(f);
    }
  for (l = u.length; l--; )
    h = u[l], f = h._pt || h, f.s = (r || r === 0) && !n ? r : f.s + (r || 0) + o * f.c, f.c = i - f.s, h.e && (h.e = Gt(i) + Te(h.e)), h.b && (h.b = f.s + Te(h.b));
}, $d = function(t, e) {
  var i = t[0] ? Ar(t[0]).harness : 0, r = i && i.aliases, n, o, a, c;
  if (!r)
    return e;
  n = bn({}, e);
  for (o in r)
    if (o in n)
      for (c = r[o].split(","), a = c.length; a--; )
        n[c[a]] = n[o];
  return n;
}, zd = function(t, e, i, r) {
  var n = e.ease || r || "power1.inOut", o, a;
  if (Ce(e))
    a = i[t] || (i[t] = []), e.forEach(function(c, u) {
      return a.push({
        t: u / (e.length - 1) * 100,
        v: c,
        e: n
      });
    });
  else
    for (o in e)
      a = i[o] || (i[o] = []), o === "ease" || a.push({
        t: parseFloat(t),
        v: e[o],
        e: n
      });
}, es = function(t, e, i, r, n) {
  return Ht(t) ? t.call(e, i, r, n) : ue(t) && ~t.indexOf("random(") ? bs(t) : t;
}, df = Sl + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", pf = {};
We(df + ",id,stagger,delay,duration,paused,scrollTrigger", function(s) {
  return pf[s] = 1;
});
var te = /* @__PURE__ */ function(s) {
  Ru(t, s);
  function t(i, r, n, o) {
    var a;
    typeof r == "number" && (n.duration = r, r = n, n = null), a = s.call(this, o ? r : Jn(r)) || this;
    var c = a.vars, u = c.duration, f = c.delay, h = c.immediateRender, d = c.stagger, l = c.overwrite, _ = c.keyframes, p = c.defaults, g = c.scrollTrigger, w = r.parent || Xt, T = (Ce(i) || Fu(i) ? Ki(i[0]) : "length" in r) ? [i] : vi(i), x, b, m, M, E, C, D, P;
    if (a._targets = T.length ? Tl(T) : ws("GSAP target " + i + " not found. https://gsap.com", !ai.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = l, _ || d || zs(u) || zs(f)) {
      r = a.vars;
      var B = r.easeReverse || r.yoyoEase;
      if (x = a.timeline = new Ye({
        data: "nested",
        defaults: p || {},
        targets: w && w.data === "nested" ? w.vars.targets : T
      }), x.kill(), x.parent = x._dp = Yi(a), x._start = 0, d || zs(u) || zs(f)) {
        if (M = T.length, D = d && Ju(d), $i(d))
          for (E in d)
            ~df.indexOf(E) && (P || (P = {}), P[E] = d[E]);
        for (b = 0; b < M; b++)
          m = vo(r, pf), m.stagger = 0, B && (m.easeReverse = B), P && bn(m, P), C = T[b], m.duration = +es(u, Yi(a), b, C, T), m.delay = (+es(f, Yi(a), b, C, T) || 0) - a._delay, !d && M === 1 && m.delay && (a._delay = f = m.delay, a._start += f, m.delay = 0), x.to(C, m, D ? D(b, C, T) : 0), x._ease = vt.none;
        x.duration() ? u = f = 0 : a.timeline = 0;
      } else if (_) {
        Jn(ci(x.vars.defaults, {
          ease: "none"
        })), x._ease = Nr(_.ease || r.ease || "none");
        var A = 0, R, X, $;
        if (Ce(_))
          _.forEach(function(V) {
            return x.to(T, V, ">");
          }), x.duration();
        else {
          m = {};
          for (E in _)
            E === "ease" || E === "easeEach" || zd(E, _[E], m, _.easeEach);
          for (E in m)
            for (R = m[E].sort(function(V, Y) {
              return V.t - Y.t;
            }), A = 0, b = 0; b < R.length; b++)
              X = R[b], $ = {
                ease: X.e,
                duration: (X.t - (b ? R[b - 1].t : 0)) / 100 * u
              }, $[E] = X.v, x.to(T, $, A), A += $.duration;
          x.duration() < u && x.to({}, {
            duration: u - x.duration()
          });
        }
      }
      u || a.duration(u = x.duration());
    } else
      a.timeline = 0;
    return l === !0 && !ml && (or = Yi(a), Xt.killTweensOf(T), or = 0), Ni(w, Yi(a), n), r.reversed && a.reverse(), r.paused && a.paused(!0), (h || !u && !_ && a._start === Yt(w._time) && Xe(h) && gd(Yi(a)) && w.data !== "nested") && (a._tTime = -Rt, a.render(Math.max(0, -f) || 0)), g && ju(Yi(a), g), a;
  }
  var e = t.prototype;
  return e.render = function(r, n, o) {
    var a = this._time, c = this._tDur, u = this._dur, f = r < 0, h = r > c - Rt && !f ? c : r < Rt ? 0 : r, d, l, _, p, g, w, T, x;
    if (!u)
      yd(this, r, n, o);
    else if (h !== this._tTime || !r || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f || this._lazy) {
      if (d = h, x = this.timeline, this._repeat) {
        if (p = u + this._rDelay, this._repeat < -1 && f)
          return this.totalTime(p * 100 + r, n, o);
        if (d = Yt(h % p), h === c ? (_ = this._repeat, d = u) : (g = Yt(h / p), _ = ~~g, _ && _ === g ? (d = u, _--) : d > u && (d = u)), w = this._yoyo && _ & 1, w && (d = u - d), g = Sn(this._tTime, p), d === a && !o && this._initted && _ === g)
          return this._tTime = h, this;
        _ !== g && this.vars.repeatRefresh && !w && !this._lock && d !== p && this._initted && (this._lock = o = 1, this.render(Yt(p * _), !0).invalidate()._lock = 0);
      }
      if (!this._initted) {
        if (Ku(this, f ? r : d, o, n, h))
          return this._tTime = 0, this;
        if (a !== this._time && !(o && this.vars.repeatRefresh && _ !== g))
          return this;
        if (u !== this._dur)
          return this.render(r, n, o);
      }
      if (this._rEase) {
        var b = d < a;
        if (b !== this._inv) {
          var m = b ? a : u - a;
          this._inv = b, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = a, this._invRecip = m ? (b ? -1 : 1) / m : 0, this._invScale = b ? -this.ratio : 1 - this.ratio, this._invEase = b ? this._rEase : this._ease;
        }
        this.ratio = T = this._invRatio + this._invScale * this._invEase((d - this._invTime) * this._invRecip);
      } else
        this.ratio = T = this._ease(d / u);
      if (this._from && (this.ratio = T = 1 - T), this._tTime = h, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), !a && h && !n && !g && (si(this, "onStart"), this._tTime !== h))
        return this;
      for (l = this._pt; l; )
        l.r(T, l.d), l = l._next;
      x && x.render(r < 0 ? r : x._dur * x._ease(d / this._dur), n, o) || this._startAt && (this._zTime = r), this._onUpdate && !n && (f && Ma(this, r, n, o), si(this, "onUpdate")), this._repeat && _ !== g && this.vars.onRepeat && !n && this.parent && si(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (f && !this._onUpdate && Ma(this, r, !0, !0), (r || !u) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && gr(this, 1), !n && !(f && !a) && (h || a || w) && (si(this, h === c ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < c && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(r) {
    return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), s.prototype.invalidate.call(this, r);
  }, e.resetTo = function(r, n, o, a, c) {
    Ss || ii.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), f;
    return this._initted || kl(this, u), f = this._ease(u / this._dur), Bd(this, r, n, o, a, f, u, c) ? this.resetTo(r, n, o, a, 1) : ($o(this, 0), this.parent || Uu(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(r, n) {
    if (n === void 0 && (n = "all"), !r && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Yn(this) : this.scrollTrigger && this.scrollTrigger.kill(!!me), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, n, or && or.vars.overwrite !== !0)._first || Yn(this), this.parent && o !== this.timeline.totalDuration() && Tn(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, c = r ? vi(r) : a, u = this._ptLookup, f = this._pt, h, d, l, _, p, g, w;
    if ((!n || n === "all") && pd(a, c))
      return n === "all" && (this._pt = 0), Yn(this);
    for (h = this._op = this._op || [], n !== "all" && (ue(n) && (p = {}, We(n, function(T) {
      return p[T] = 1;
    }), n = p), n = $d(a, n)), w = a.length; w--; )
      if (~c.indexOf(a[w])) {
        d = u[w], n === "all" ? (h[w] = n, _ = d, l = {}) : (l = h[w] = h[w] || {}, _ = n);
        for (p in _)
          g = d && d[p], g && ((!("kill" in g.d) || g.d.kill(p) === !0) && Io(this, g, "_pt"), delete d[p]), l !== "all" && (l[p] = 1);
      }
    return this._initted && !this._pt && f && Yn(this), this;
  }, t.to = function(r, n) {
    return new t(r, n, arguments[2]);
  }, t.from = function(r, n) {
    return ts(1, arguments);
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
    return ts(2, arguments);
  }, t.set = function(r, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n);
  }, t.killTweensOf = function(r, n, o) {
    return Xt.killTweensOf(r, n, o);
  }, t;
}(Ts);
ci(te.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
We("staggerTo,staggerFrom,staggerFromTo", function(s) {
  te[s] = function() {
    var t = new Ye(), e = Oa.call(arguments, 0);
    return e.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), t[s].apply(t, e);
  };
});
var Pl = function(t, e, i) {
  return t[e] = i;
}, _f = function(t, e, i) {
  return t[e](i);
}, Yd = function(t, e, i, r) {
  return t[e](r.fp, i);
}, Xd = function(t, e, i) {
  return t.setAttribute(e, i);
}, Ml = function(t, e) {
  return Ht(t[e]) ? _f : yl(t[e]) && t.setAttribute ? Xd : Pl;
}, gf = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, Wd = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, mf = function(t, e) {
  var i = e._pt, r = "";
  if (!t && e.b)
    r = e.b;
  else if (t === 1 && e.e)
    r = e.e;
  else {
    for (; i; )
      r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r, i = i._next;
    r += e.c;
  }
  e.set(e.t, e.p, r, e);
}, Dl = function(t, e) {
  for (var i = e._pt; i; )
    i.r(t, i.d), i = i._next;
}, Vd = function(t, e, i, r) {
  for (var n = this._pt, o; n; )
    o = n._next, n.p === r && n.modifier(t, e, i), n = o;
}, Hd = function(t) {
  for (var e = this._pt, i, r; e; )
    r = e._next, e.p === t && !e.op || e.op === t ? Io(this, e, "_pt") : e.dep || (i = 1), e = r;
  return !i;
}, qd = function(t, e, i, r) {
  r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
}, yf = function(t) {
  for (var e = t._pt, i, r, n, o; e; ) {
    for (i = e._next, r = n; r && r.pr > e.pr; )
      r = r._next;
    (e._prev = r ? r._prev : o) ? e._prev._next = e : n = e, (e._next = r) ? r._prev = e : o = e, e = i;
  }
  t._pt = n;
}, Ve = /* @__PURE__ */ function() {
  function s(e, i, r, n, o, a, c, u, f) {
    this.t = i, this.s = n, this.c = o, this.p = r, this.r = a || gf, this.d = c || this, this.set = u || Pl, this.pr = f || 0, this._next = e, e && (e._prev = this);
  }
  var t = s.prototype;
  return t.modifier = function(i, r, n) {
    this.mSet = this.mSet || this.set, this.set = qd, this.m = i, this.mt = n, this.tween = r;
  }, s;
}();
We(Sl + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(s) {
  return bl[s] = 1;
});
li.TweenMax = li.TweenLite = te;
li.TimelineLite = li.TimelineMax = Ye;
Xt = new Ye({
  sortChildren: !1,
  defaults: vs,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
ai.stringFilter = cf;
var Fr = [], so = {}, Ud = [], dc = 0, Gd = 0, Qo = function(t) {
  return (so[t] || Ud).map(function(e) {
    return e();
  });
}, Na = function() {
  var t = Date.now(), e = [];
  t - dc > 2 && (Qo("matchMediaInit"), Fr.forEach(function(i) {
    var r = i.queries, n = i.conditions, o, a, c, u;
    for (a in r)
      o = Oi.matchMedia(r[a]).matches, o && (c = 1), o !== n[a] && (n[a] = o, u = 1);
    u && (i.revert(), c && e.push(i));
  }), Qo("matchMediaRevert"), e.forEach(function(i) {
    return i.onMatch(i, function(r) {
      return i.add(null, r);
    });
  }), dc = t, Qo("matchMedia"));
}, vf = /* @__PURE__ */ function() {
  function s(e, i) {
    this.selector = i && La(i), this.data = [], this._r = [], this.isReverted = !1, this.id = Gd++, e && this.add(e);
  }
  var t = s.prototype;
  return t.add = function(i, r, n) {
    Ht(i) && (n = r, r = i, i = Ht);
    var o = this, a = function() {
      var u = $t, f = o.selector, h;
      return u && u !== o && u.data.push(o), n && (o.selector = La(n)), $t = o, h = r.apply(o, arguments), Ht(h) && o._r.push(h), $t = u, o.selector = f, o.isReverted = !1, h;
    };
    return o.last = a, i === Ht ? a(o, function(c) {
      return o.add(null, c);
    }) : i ? o[i] = a : a;
  }, t.ignore = function(i) {
    var r = $t;
    $t = null, i(this), $t = r;
  }, t.getTweens = function() {
    var i = [];
    return this.data.forEach(function(r) {
      return r instanceof s ? i.push.apply(i, r.getTweens()) : r instanceof te && !(r.parent && r.parent.data === "nested") && i.push(r);
    }), i;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(i, r) {
    var n = this;
    if (i ? function() {
      for (var a = n.getTweens(), c = n.data.length, u; c--; )
        u = n.data[c], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(f) {
          return a.splice(a.indexOf(f), 1);
        }));
      for (a.map(function(f) {
        return {
          g: f._dur || f._delay || f._sat && !f._sat.vars.immediateRender ? f.globalTime(0) : -1 / 0,
          t: f
        };
      }).sort(function(f, h) {
        return h.g - f.g || -1 / 0;
      }).forEach(function(f) {
        return f.t.revert(i);
      }), c = n.data.length; c--; )
        u = n.data[c], u instanceof Ye ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof te) && u.revert && u.revert(i);
      n._r.forEach(function(f) {
        return f(i, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), r)
      for (var o = Fr.length; o--; )
        Fr[o].id === this.id && Fr.splice(o, 1);
  }, t.revert = function(i) {
    this.kill(i || {});
  }, s;
}(), jd = /* @__PURE__ */ function() {
  function s(e) {
    this.contexts = [], this.scope = e, $t && $t.data.push(this);
  }
  var t = s.prototype;
  return t.add = function(i, r, n) {
    $i(i) || (i = {
      matches: i
    });
    var o = new vf(0, n || this.scope), a = o.conditions = {}, c, u, f;
    $t && !o.selector && (o.selector = $t.selector), this.contexts.push(o), r = o.add("onMatch", r), o.queries = i;
    for (u in i)
      u === "all" ? f = 1 : (c = Oi.matchMedia(i[u]), c && (Fr.indexOf(o) < 0 && Fr.push(o), (a[u] = c.matches) && (f = 1), c.addListener ? c.addListener(Na) : c.addEventListener("change", Na)));
    return f && r(o, function(h) {
      return o.add(null, h);
    }), this;
  }, t.revert = function(i) {
    this.kill(i || {});
  }, t.kill = function(i) {
    this.contexts.forEach(function(r) {
      return r.kill(i, !0);
    });
  }, s;
}(), xo = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    e.forEach(function(r) {
      return of(r);
    });
  },
  timeline: function(t) {
    return new Ye(t);
  },
  getTweensOf: function(t, e) {
    return Xt.getTweensOf(t, e);
  },
  getProperty: function(t, e, i, r) {
    ue(t) && (t = vi(t)[0]);
    var n = Ar(t || {}).get, o = i ? qu : Hu;
    return i === "native" && (i = ""), t && (e ? o((ti[e] && ti[e].get || n)(t, e, i, r)) : function(a, c, u) {
      return o((ti[a] && ti[a].get || n)(t, a, c, u));
    });
  },
  quickSetter: function(t, e, i) {
    if (t = vi(t), t.length > 1) {
      var r = t.map(function(f) {
        return Ue.quickSetter(f, e, i);
      }), n = r.length;
      return function(f) {
        for (var h = n; h--; )
          r[h](f);
      };
    }
    t = t[0] || {};
    var o = ti[e], a = Ar(t), c = a.harness && (a.harness.aliases || {})[e] || e, u = o ? function(f) {
      var h = new o();
      an._pt = 0, h.init(t, i ? f + i : f, an, 0, [t]), h.render(1, h), an._pt && Dl(1, an);
    } : a.set(t, c);
    return o ? u : function(f) {
      return u(t, c, i ? f + i : f, a, 1);
    };
  },
  quickTo: function(t, e, i) {
    var r, n = Ue.to(t, ci((r = {}, r[e] = "+=0.1", r.paused = !0, r.stagger = 0, r), i || {})), o = function(c, u, f) {
      return n.resetTo(e, c, u, f);
    };
    return o.tween = n, o;
  },
  isTweening: function(t) {
    return Xt.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = Nr(t.ease, vs.ease)), lc(vs, t || {});
  },
  config: function(t) {
    return lc(ai, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, i = t.effect, r = t.plugins, n = t.defaults, o = t.extendTimeline;
    (r || "").split(",").forEach(function(a) {
      return a && !ti[a] && !li[a] && ws(e + " effect requires " + a + " plugin.");
    }), Uo[e] = function(a, c, u) {
      return i(vi(a), ci(c || {}, n), u);
    }, o && (Ye.prototype[e] = function(a, c, u) {
      return this.add(Uo[e](a, $i(c) ? c : (u = c) && {}, this), u);
    });
  },
  registerEase: function(t, e) {
    vt[t] = Nr(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? Nr(t, e) : vt;
  },
  getById: function(t) {
    return Xt.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var i = new Ye(t), r, n;
    for (i.smoothChildTiming = Xe(t.smoothChildTiming), Xt.remove(i), i._dp = 0, i._time = i._tTime = Xt._time, r = Xt._first; r; )
      n = r._next, (e || !(!r._dur && r instanceof te && r.vars.onComplete === r._targets[0])) && Ni(i, r, r._start - r._delay), r = n;
    return Ni(Xt, i, 0), i;
  },
  context: function(t, e) {
    return t ? new vf(t, e) : $t;
  },
  matchMedia: function(t) {
    return new jd(t);
  },
  matchMediaRefresh: function() {
    return Fr.forEach(function(t) {
      var e = t.conditions, i, r;
      for (r in e)
        e[r] && (e[r] = !1, i = 1);
      i && t.revert();
    }) || Na();
  },
  addEventListener: function(t, e) {
    var i = so[t] || (so[t] = []);
    ~i.indexOf(e) || i.push(e);
  },
  removeEventListener: function(t, e) {
    var i = so[t], r = i && i.indexOf(e);
    r >= 0 && i.splice(r, 1);
  },
  utils: {
    wrap: Cd,
    wrapYoyo: kd,
    distribute: Ju,
    random: ef,
    snap: tf,
    normalize: Ed,
    getUnit: Te,
    clamp: xd,
    splitColor: af,
    toArray: vi,
    selector: La,
    mapRange: nf,
    pipe: Sd,
    unitize: Td,
    interpolate: Pd,
    shuffle: Zu
  },
  install: zu,
  effects: Uo,
  ticker: ii,
  updateRoot: Ye.updateRoot,
  plugins: ti,
  globalTimeline: Xt,
  core: {
    PropTween: Ve,
    globals: Yu,
    Tween: te,
    Timeline: Ye,
    Animation: Ts,
    getCache: Ar,
    _removeLinkedListItem: Io,
    reverting: function() {
      return me;
    },
    context: function(t) {
      return t && $t && ($t.data.push(t), t._ctx = $t), $t;
    },
    suppressOverwrites: function(t) {
      return ml = t;
    }
  }
};
We("to,from,fromTo,delayedCall,set,killTweensOf", function(s) {
  return xo[s] = te[s];
});
ii.add(Ye.updateRoot);
an = xo.to({}, {
  duration: 0
});
var Kd = function(t, e) {
  for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
    i = i._next;
  return i;
}, Qd = function(t, e) {
  var i = t._targets, r, n, o;
  for (r in e)
    for (n = i.length; n--; )
      o = t._ptLookup[n][r], o && (o = o.d) && (o._pt && (o = Kd(o, r)), o && o.modifier && o.modifier(e[r], t, i[n], r));
}, Zo = function(t, e) {
  return {
    name: t,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(r, n, o) {
      o._onInit = function(a) {
        var c, u;
        if (ue(n) && (c = {}, We(n, function(f) {
          return c[f] = 1;
        }), n = c), e) {
          c = {};
          for (u in n)
            c[u] = e(n[u]);
          n = c;
        }
        Qd(a, n);
      };
    }
  };
}, Ue = xo.registerPlugin({
  name: "attr",
  init: function(t, e, i, r, n) {
    var o, a, c;
    this.tween = i;
    for (o in e)
      c = t.getAttribute(o) || "", a = this.add(t, "setAttribute", (c || 0) + "", e[o], r, n, 0, 0, o), a.op = o, a.b = c, this._props.push(o);
  },
  render: function(t, e) {
    for (var i = e._pt; i; )
      me ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(t, e) {
    for (var i = e.length; i--; )
      this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
  }
}, Zo("roundProps", Aa), Zo("modifiers"), Zo("snap", tf)) || xo;
te.version = Ye.version = Ue.version = "3.15.0";
$u = 1;
vl() && En();
vt.Power0;
vt.Power1;
vt.Power2;
vt.Power3;
vt.Power4;
vt.Linear;
vt.Quad;
vt.Cubic;
vt.Quart;
vt.Quint;
vt.Strong;
vt.Elastic;
vt.Back;
vt.SteppedEase;
vt.Bounce;
vt.Sine;
vt.Expo;
vt.Circ;
/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var pc, ar, hn, Ol, Or, _c, Ll, Zd = function() {
  return typeof window < "u";
}, Qi = {}, kr = 180 / Math.PI, dn = Math.PI / 180, Gr = Math.atan2, gc = 1e8, Al = /([A-Z])/g, Jd = /(left|right|width|margin|padding|x)/i, tp = /[\s,\(]\S/, Fi = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Fa = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, ep = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, ip = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, rp = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, np = function(t, e) {
  var i = e.s + e.c * t;
  e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
}, wf = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, xf = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, sp = function(t, e, i) {
  return t.style[e] = i;
}, op = function(t, e, i) {
  return t.style.setProperty(e, i);
}, ap = function(t, e, i) {
  return t._gsap[e] = i;
}, lp = function(t, e, i) {
  return t._gsap.scaleX = t._gsap.scaleY = i;
}, cp = function(t, e, i, r, n) {
  var o = t._gsap;
  o.scaleX = o.scaleY = i, o.renderTransform(n, o);
}, up = function(t, e, i, r, n) {
  var o = t._gsap;
  o[e] = i, o.renderTransform(n, o);
}, Wt = "transform", He = Wt + "Origin", fp = function s(t, e) {
  var i = this, r = this.target, n = r.style, o = r._gsap;
  if (t in Qi && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = Fi[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(a) {
        return i.tfm[a] = Xi(r, a);
      }) : this.tfm[t] = o.x ? o[t] : Xi(r, t), t === He && (this.tfm.zOrigin = o.zOrigin);
    else
      return Fi.transform.split(",").forEach(function(a) {
        return s.call(i, a, e);
      });
    if (this.props.indexOf(Wt) >= 0)
      return;
    o.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(He, e, "")), t = Wt;
  }
  (n || e) && this.props.push(t, e, n[t]);
}, bf = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, hp = function() {
  var t = this.props, e = this.target, i = e.style, r = e._gsap, n, o;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? t[n + 1] === 2 ? e[t[n]](t[n + 2]) : e[t[n]] = t[n + 2] : t[n + 2] ? i[t[n]] = t[n + 2] : i.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(Al, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      r[o] = this.tfm[o];
    r.svg && (r.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = Ll(), (!n || !n.isStart) && !i[Wt] && (bf(i), r.zOrigin && i[He] && (i[He] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
  }
}, Sf = function(t, e) {
  var i = {
    target: t,
    props: [],
    revert: hp,
    save: fp
  };
  return t._gsap || Ue.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(r) {
    return i.save(r);
  }), i;
}, Tf, Ia = function(t, e) {
  var i = ar.createElementNS ? ar.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : ar.createElement(t);
  return i && i.style ? i : ar.createElement(t);
}, oi = function s(t, e, i) {
  var r = getComputedStyle(t);
  return r[e] || r.getPropertyValue(e.replace(Al, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && s(t, Cn(e) || e, 1) || "";
}, mc = "O,Moz,ms,Ms,Webkit".split(","), Cn = function(t, e, i) {
  var r = e || Or, n = r.style, o = 5;
  if (t in n && !i)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(mc[o] + t in n); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? mc[o] : "") + t;
}, Ba = function() {
  Zd() && window.document && (pc = window, ar = pc.document, hn = ar.documentElement, Or = Ia("div") || {
    style: {}
  }, Ia("div"), Wt = Cn(Wt), He = Wt + "Origin", Or.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Tf = !!Cn("perspective"), Ll = Ue.core.reverting, Ol = 1);
}, yc = function(t) {
  var e = t.ownerSVGElement, i = Ia("svg", e && e.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = t.cloneNode(!0), n;
  r.style.display = "block", i.appendChild(r), hn.appendChild(i);
  try {
    n = r.getBBox();
  } catch {
  }
  return i.removeChild(r), hn.removeChild(i), n;
}, vc = function(t, e) {
  for (var i = e.length; i--; )
    if (t.hasAttribute(e[i]))
      return t.getAttribute(e[i]);
}, Ef = function(t) {
  var e, i;
  try {
    e = t.getBBox();
  } catch {
    e = yc(t), i = 1;
  }
  return e && (e.width || e.height) || i || (e = yc(t)), e && !e.width && !e.x && !e.y ? {
    x: +vc(t, ["x", "cx", "x1"]) || 0,
    y: +vc(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, Cf = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Ef(t));
}, mr = function(t, e) {
  if (e) {
    var i = t.style, r;
    e in Qi && e !== He && (e = Wt), i.removeProperty ? (r = e.substr(0, 2), (r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), i.removeProperty(r === "--" ? e : e.replace(Al, "-$1").toLowerCase())) : i.removeAttribute(e);
  }
}, lr = function(t, e, i, r, n, o) {
  var a = new Ve(t._pt, e, i, 0, 1, o ? xf : wf);
  return t._pt = a, a.b = r, a.e = n, t._props.push(i), a;
}, wc = {
  deg: 1,
  rad: 1,
  turn: 1
}, dp = {
  grid: 1,
  flex: 1
}, yr = function s(t, e, i, r) {
  var n = parseFloat(i) || 0, o = (i + "").trim().substr((n + "").length) || "px", a = Or.style, c = Jd.test(e), u = t.tagName.toLowerCase() === "svg", f = (u ? "client" : "offset") + (c ? "Width" : "Height"), h = 100, d = r === "px", l = r === "%", _, p, g, w;
  if (r === o || !n || wc[r] || wc[o])
    return n;
  if (o !== "px" && !d && (n = s(t, e, i, "px")), w = t.getCTM && Cf(t), (l || o === "%") && (Qi[e] || ~e.indexOf("adius")))
    return _ = w ? t.getBBox()[c ? "width" : "height"] : t[f], Gt(l ? n / _ * h : n / 100 * _);
  if (a[c ? "width" : "height"] = h + (d ? o : r), p = r !== "rem" && ~e.indexOf("adius") || r === "em" && t.appendChild && !u ? t : t.parentNode, w && (p = (t.ownerSVGElement || {}).parentNode), (!p || p === ar || !p.appendChild) && (p = ar.body), g = p._gsap, g && l && g.width && c && g.time === ii.time && !g.uncache)
    return Gt(n / g.width * h);
  if (l && (e === "height" || e === "width")) {
    var T = t.style[e];
    t.style[e] = h + r, _ = t[f], T ? t.style[e] = T : mr(t, e);
  } else
    (l || o === "%") && !dp[oi(p, "display")] && (a.position = oi(t, "position")), p === t && (a.position = "static"), p.appendChild(Or), _ = Or[f], p.removeChild(Or), a.position = "absolute";
  return c && l && (g = Ar(p), g.time = ii.time, g.width = p[f]), Gt(d ? _ * n / h : _ && n ? h / _ * n : 0);
}, Xi = function(t, e, i, r) {
  var n;
  return Ol || Ba(), e in Fi && e !== "transform" && (e = Fi[e], ~e.indexOf(",") && (e = e.split(",")[0])), Qi[e] && e !== "transform" ? (n = Cs(t, r), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : So(oi(t, He)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = bo[e] && bo[e](t, e, i) || oi(t, e) || Wu(t, e) || (e === "opacity" ? 1 : 0))), i && !~(n + "").trim().indexOf(" ") ? yr(t, e, n, i) + i : n;
}, pp = function(t, e, i, r) {
  if (!i || i === "none") {
    var n = Cn(e, t, 1), o = n && oi(t, n, 1);
    o && o !== i ? (e = n, i = o) : e === "borderColor" && (i = oi(t, "borderTopColor"));
  }
  var a = new Ve(this._pt, t.style, e, 0, 1, mf), c = 0, u = 0, f, h, d, l, _, p, g, w, T, x, b, m;
  if (a.b = i, a.e = r, i += "", r += "", r.substring(0, 6) === "var(--" && (r = oi(t, r.substring(4, r.indexOf(")")))), r === "auto" && (p = t.style[e], t.style[e] = r, r = oi(t, e) || r, p ? t.style[e] = p : mr(t, e)), f = [i, r], cf(f), i = f[0], r = f[1], d = i.match(on) || [], m = r.match(on) || [], m.length) {
    for (; h = on.exec(r); )
      g = h[0], T = r.substring(c, h.index), _ ? _ = (_ + 1) % 5 : (T.substr(-5) === "rgba(" || T.substr(-5) === "hsla(") && (_ = 1), g !== (p = d[u++] || "") && (l = parseFloat(p) || 0, b = p.substr((l + "").length), g.charAt(1) === "=" && (g = fn(l, g) + b), w = parseFloat(g), x = g.substr((w + "").length), c = on.lastIndex - x.length, x || (x = x || ai.units[e] || b, c === r.length && (r += x, a.e += x)), b !== x && (l = yr(t, e, p, x) || 0), a._pt = {
        _next: a._pt,
        p: T || u === 1 ? T : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: l,
        c: w - l,
        m: _ && _ < 4 || e === "zIndex" ? Math.round : 0
      });
    a.c = c < r.length ? r.substring(c, r.length) : "";
  } else
    a.r = e === "display" && r === "none" ? xf : wf;
  return Bu.test(r) && (a.e = 0), this._pt = a, a;
}, xc = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, _p = function(t) {
  var e = t.split(" "), i = e[0], r = e[1] || "50%";
  return (i === "top" || i === "bottom" || r === "left" || r === "right") && (t = i, i = r, r = t), e[0] = xc[i] || i, e[1] = xc[r] || r, e.join(" ");
}, gp = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var i = e.t, r = i.style, n = e.u, o = i._gsap, a, c, u;
    if (n === "all" || n === !0)
      r.cssText = "", c = 1;
    else
      for (n = n.split(","), u = n.length; --u > -1; )
        a = n[u], Qi[a] && (c = 1, a = a === "transformOrigin" ? He : Wt), mr(i, a);
    c && (mr(i, Wt), o && (o.svg && i.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", Cs(i, 1), o.uncache = 1, bf(r)));
  }
}, bo = {
  clearProps: function(t, e, i, r, n) {
    if (n.data !== "isFromStart") {
      var o = t._pt = new Ve(t._pt, e, i, 0, 0, gp);
      return o.u = r, o.pr = -10, o.tween = n, t._props.push(i), 1;
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
}, Es = [1, 0, 0, 1, 0, 0], kf = {}, Pf = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, bc = function(t) {
  var e = oi(t, Wt);
  return Pf(e) ? Es : e.substr(7).match(Iu).map(Gt);
}, Rl = function(t, e) {
  var i = t._gsap || Ar(t), r = t.style, n = bc(t), o, a, c, u;
  return i.svg && t.getAttribute("transform") ? (c = t.transform.baseVal.consolidate().matrix, n = [c.a, c.b, c.c, c.d, c.e, c.f], n.join(",") === "1,0,0,1,0,0" ? Es : n) : (n === Es && !t.offsetParent && t !== hn && !i.svg && (c = r.display, r.display = "block", o = t.parentNode, (!o || !t.offsetParent && !t.getBoundingClientRect().width) && (u = 1, a = t.nextElementSibling, hn.appendChild(t)), n = bc(t), c ? r.display = c : mr(t, "display"), u && (a ? o.insertBefore(t, a) : o ? o.appendChild(t) : hn.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, $a = function(t, e, i, r, n, o) {
  var a = t._gsap, c = n || Rl(t, !0), u = a.xOrigin || 0, f = a.yOrigin || 0, h = a.xOffset || 0, d = a.yOffset || 0, l = c[0], _ = c[1], p = c[2], g = c[3], w = c[4], T = c[5], x = e.split(" "), b = parseFloat(x[0]) || 0, m = parseFloat(x[1]) || 0, M, E, C, D;
  i ? c !== Es && (E = l * g - _ * p) && (C = b * (g / E) + m * (-p / E) + (p * T - g * w) / E, D = b * (-_ / E) + m * (l / E) - (l * T - _ * w) / E, b = C, m = D) : (M = Ef(t), b = M.x + (~x[0].indexOf("%") ? b / 100 * M.width : b), m = M.y + (~(x[1] || x[0]).indexOf("%") ? m / 100 * M.height : m)), r || r !== !1 && a.smooth ? (w = b - u, T = m - f, a.xOffset = h + (w * l + T * p) - w, a.yOffset = d + (w * _ + T * g) - T) : a.xOffset = a.yOffset = 0, a.xOrigin = b, a.yOrigin = m, a.smooth = !!r, a.origin = e, a.originIsAbsolute = !!i, t.style[He] = "0px 0px", o && (lr(o, a, "xOrigin", u, b), lr(o, a, "yOrigin", f, m), lr(o, a, "xOffset", h, a.xOffset), lr(o, a, "yOffset", d, a.yOffset)), t.setAttribute("data-svg-origin", b + " " + m);
}, Cs = function(t, e) {
  var i = t._gsap || new ff(t);
  if ("x" in i && !e && !i.uncache)
    return i;
  var r = t.style, n = i.scaleX < 0, o = "px", a = "deg", c = getComputedStyle(t), u = oi(t, He) || "0", f, h, d, l, _, p, g, w, T, x, b, m, M, E, C, D, P, B, A, R, X, $, V, Y, nt, st, v, G, H, ht, J, ot;
  return f = h = d = p = g = w = T = x = b = 0, l = _ = 1, i.svg = !!(t.getCTM && Cf(t)), c.translate && ((c.translate !== "none" || c.scale !== "none" || c.rotate !== "none") && (r[Wt] = (c.translate !== "none" ? "translate3d(" + (c.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (c.rotate !== "none" ? "rotate(" + c.rotate + ") " : "") + (c.scale !== "none" ? "scale(" + c.scale.split(" ").join(",") + ") " : "") + (c[Wt] !== "none" ? c[Wt] : "")), r.scale = r.rotate = r.translate = "none"), E = Rl(t, i.svg), i.svg && (i.uncache ? (nt = t.getBBox(), u = i.xOrigin - nt.x + "px " + (i.yOrigin - nt.y) + "px", Y = "") : Y = !e && t.getAttribute("data-svg-origin"), $a(t, Y || u, !!Y || i.originIsAbsolute, i.smooth !== !1, E)), m = i.xOrigin || 0, M = i.yOrigin || 0, E !== Es && (B = E[0], A = E[1], R = E[2], X = E[3], f = $ = E[4], h = V = E[5], E.length === 6 ? (l = Math.sqrt(B * B + A * A), _ = Math.sqrt(X * X + R * R), p = B || A ? Gr(A, B) * kr : 0, T = R || X ? Gr(R, X) * kr + p : 0, T && (_ *= Math.abs(Math.cos(T * dn))), i.svg && (f -= m - (m * B + M * R), h -= M - (m * A + M * X))) : (ot = E[6], ht = E[7], v = E[8], G = E[9], H = E[10], J = E[11], f = E[12], h = E[13], d = E[14], C = Gr(ot, H), g = C * kr, C && (D = Math.cos(-C), P = Math.sin(-C), Y = $ * D + v * P, nt = V * D + G * P, st = ot * D + H * P, v = $ * -P + v * D, G = V * -P + G * D, H = ot * -P + H * D, J = ht * -P + J * D, $ = Y, V = nt, ot = st), C = Gr(-R, H), w = C * kr, C && (D = Math.cos(-C), P = Math.sin(-C), Y = B * D - v * P, nt = A * D - G * P, st = R * D - H * P, J = X * P + J * D, B = Y, A = nt, R = st), C = Gr(A, B), p = C * kr, C && (D = Math.cos(C), P = Math.sin(C), Y = B * D + A * P, nt = $ * D + V * P, A = A * D - B * P, V = V * D - $ * P, B = Y, $ = nt), g && Math.abs(g) + Math.abs(p) > 359.9 && (g = p = 0, w = 180 - w), l = Gt(Math.sqrt(B * B + A * A + R * R)), _ = Gt(Math.sqrt(V * V + ot * ot)), C = Gr($, V), T = Math.abs(C) > 2e-4 ? C * kr : 0, b = J ? 1 / (J < 0 ? -J : J) : 0), i.svg && (Y = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !Pf(oi(t, Wt)), Y && t.setAttribute("transform", Y))), Math.abs(T) > 90 && Math.abs(T) < 270 && (n ? (l *= -1, T += p <= 0 ? 180 : -180, p += p <= 0 ? 180 : -180) : (_ *= -1, T += T <= 0 ? 180 : -180)), e = e || i.uncache, i.x = f - ((i.xPercent = f && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + o, i.y = h - ((i.yPercent = h && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + o, i.z = d + o, i.scaleX = Gt(l), i.scaleY = Gt(_), i.rotation = Gt(p) + a, i.rotationX = Gt(g) + a, i.rotationY = Gt(w) + a, i.skewX = T + a, i.skewY = x + a, i.transformPerspective = b + o, (i.zOrigin = parseFloat(u.split(" ")[2]) || !e && i.zOrigin || 0) && (r[He] = So(u)), i.xOffset = i.yOffset = 0, i.force3D = ai.force3D, i.renderTransform = i.svg ? yp : Tf ? Mf : mp, i.uncache = 0, i;
}, So = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, Jo = function(t, e, i) {
  var r = Te(e);
  return Gt(parseFloat(e) + parseFloat(yr(t, "x", i + "px", r))) + r;
}, mp = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Mf(t, e);
}, Sr = "0deg", Nn = "0px", Tr = ") ", Mf = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, o = i.x, a = i.y, c = i.z, u = i.rotation, f = i.rotationY, h = i.rotationX, d = i.skewX, l = i.skewY, _ = i.scaleX, p = i.scaleY, g = i.transformPerspective, w = i.force3D, T = i.target, x = i.zOrigin, b = "", m = w === "auto" && t && t !== 1 || w === !0;
  if (x && (h !== Sr || f !== Sr)) {
    var M = parseFloat(f) * dn, E = Math.sin(M), C = Math.cos(M), D;
    M = parseFloat(h) * dn, D = Math.cos(M), o = Jo(T, o, E * D * -x), a = Jo(T, a, -Math.sin(M) * -x), c = Jo(T, c, C * D * -x + x);
  }
  g !== Nn && (b += "perspective(" + g + Tr), (r || n) && (b += "translate(" + r + "%, " + n + "%) "), (m || o !== Nn || a !== Nn || c !== Nn) && (b += c !== Nn || m ? "translate3d(" + o + ", " + a + ", " + c + ") " : "translate(" + o + ", " + a + Tr), u !== Sr && (b += "rotate(" + u + Tr), f !== Sr && (b += "rotateY(" + f + Tr), h !== Sr && (b += "rotateX(" + h + Tr), (d !== Sr || l !== Sr) && (b += "skew(" + d + ", " + l + Tr), (_ !== 1 || p !== 1) && (b += "scale(" + _ + ", " + p + Tr), T.style[Wt] = b || "translate(0, 0)";
}, yp = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, o = i.x, a = i.y, c = i.rotation, u = i.skewX, f = i.skewY, h = i.scaleX, d = i.scaleY, l = i.target, _ = i.xOrigin, p = i.yOrigin, g = i.xOffset, w = i.yOffset, T = i.forceCSS, x = parseFloat(o), b = parseFloat(a), m, M, E, C, D;
  c = parseFloat(c), u = parseFloat(u), f = parseFloat(f), f && (f = parseFloat(f), u += f, c += f), c || u ? (c *= dn, u *= dn, m = Math.cos(c) * h, M = Math.sin(c) * h, E = Math.sin(c - u) * -d, C = Math.cos(c - u) * d, u && (f *= dn, D = Math.tan(u - f), D = Math.sqrt(1 + D * D), E *= D, C *= D, f && (D = Math.tan(f), D = Math.sqrt(1 + D * D), m *= D, M *= D)), m = Gt(m), M = Gt(M), E = Gt(E), C = Gt(C)) : (m = h, C = d, M = E = 0), (x && !~(o + "").indexOf("px") || b && !~(a + "").indexOf("px")) && (x = yr(l, "x", o, "px"), b = yr(l, "y", a, "px")), (_ || p || g || w) && (x = Gt(x + _ - (_ * m + p * E) + g), b = Gt(b + p - (_ * M + p * C) + w)), (r || n) && (D = l.getBBox(), x = Gt(x + r / 100 * D.width), b = Gt(b + n / 100 * D.height)), D = "matrix(" + m + "," + M + "," + E + "," + C + "," + x + "," + b + ")", l.setAttribute("transform", D), T && (l.style[Wt] = D);
}, vp = function(t, e, i, r, n) {
  var o = 360, a = ue(n), c = parseFloat(n) * (a && ~n.indexOf("rad") ? kr : 1), u = c - r, f = r + u + "deg", h, d;
  return a && (h = n.split("_")[1], h === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -o)), h === "cw" && u < 0 ? u = (u + o * gc) % o - ~~(u / o) * o : h === "ccw" && u > 0 && (u = (u - o * gc) % o - ~~(u / o) * o)), t._pt = d = new Ve(t._pt, e, i, r, u, ep), d.e = f, d.u = "deg", t._props.push(i), d;
}, Sc = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, wp = function(t, e, i) {
  var r = Sc({}, i._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", o = i.style, a, c, u, f, h, d, l, _;
  r.svg ? (u = i.getAttribute("transform"), i.setAttribute("transform", ""), o[Wt] = e, a = Cs(i, 1), mr(i, Wt), i.setAttribute("transform", u)) : (u = getComputedStyle(i)[Wt], o[Wt] = e, a = Cs(i, 1), o[Wt] = u);
  for (c in Qi)
    u = r[c], f = a[c], u !== f && n.indexOf(c) < 0 && (l = Te(u), _ = Te(f), h = l !== _ ? yr(i, c, u, _) : parseFloat(u), d = parseFloat(f), t._pt = new Ve(t._pt, a, c, h, d - h, Fa), t._pt.u = _ || 0, t._props.push(c));
  Sc(a, r);
};
We("padding,margin,Width,Radius", function(s, t) {
  var e = "Top", i = "Right", r = "Bottom", n = "Left", o = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function(a) {
    return t < 2 ? s + a : "border" + a + s;
  });
  bo[t > 1 ? "border" + s : s] = function(a, c, u, f, h) {
    var d, l;
    if (arguments.length < 4)
      return d = o.map(function(_) {
        return Xi(a, _, u);
      }), l = d.join(" "), l.split(d[0]).length === 5 ? d[0] : l;
    d = (f + "").split(" "), l = {}, o.forEach(function(_, p) {
      return l[_] = d[p] = d[p] || d[(p - 1) / 2 | 0];
    }), a.init(c, l, h);
  };
});
var Df = {
  name: "css",
  register: Ba,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, i, r, n) {
    var o = this._props, a = t.style, c = i.vars.startAt, u, f, h, d, l, _, p, g, w, T, x, b, m, M, E, C, D;
    Ol || Ba(), this.styles = this.styles || Sf(t), C = this.styles.props, this.tween = i;
    for (p in e)
      if (p !== "autoRound" && (f = e[p], !(ti[p] && hf(p, e, i, r, t, n)))) {
        if (l = typeof f, _ = bo[p], l === "function" && (f = f.call(i, r, t, n), l = typeof f), l === "string" && ~f.indexOf("random(") && (f = bs(f)), _)
          _(this, t, p, f, i) && (E = 1);
        else if (p.substr(0, 2) === "--")
          u = (getComputedStyle(t).getPropertyValue(p) + "").trim(), f += "", dr.lastIndex = 0, dr.test(u) || (g = Te(u), w = Te(f), w ? g !== w && (u = yr(t, p, u, w) + w) : g && (f += g)), this.add(a, "setProperty", u, f, r, n, 0, 0, p), o.push(p), C.push(p, 0, a[p]);
        else if (l !== "undefined") {
          if (c && p in c ? (u = typeof c[p] == "function" ? c[p].call(i, r, t, n) : c[p], ue(u) && ~u.indexOf("random(") && (u = bs(u)), Te(u + "") || u === "auto" || (u += ai.units[p] || Te(Xi(t, p)) || ""), (u + "").charAt(1) === "=" && (u = Xi(t, p))) : u = Xi(t, p), d = parseFloat(u), T = l === "string" && f.charAt(1) === "=" && f.substr(0, 2), T && (f = f.substr(2)), h = parseFloat(f), p in Fi && (p === "autoAlpha" && (d === 1 && Xi(t, "visibility") === "hidden" && h && (d = 0), C.push("visibility", 0, a.visibility), lr(this, a, "visibility", d ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), p !== "scale" && p !== "transform" && (p = Fi[p], ~p.indexOf(",") && (p = p.split(",")[0]))), x = p in Qi, x) {
            if (this.styles.save(p), D = f, l === "string" && f.substring(0, 6) === "var(--") {
              if (f = oi(t, f.substring(4, f.indexOf(")"))), f.substring(0, 5) === "calc(") {
                var P = t.style.perspective;
                t.style.perspective = f, f = oi(t, "perspective"), P ? t.style.perspective = P : mr(t, "perspective");
              }
              h = parseFloat(f);
            }
            if (b || (m = t._gsap, m.renderTransform && !e.parseTransform || Cs(t, e.parseTransform), M = e.smoothOrigin !== !1 && m.smooth, b = this._pt = new Ve(this._pt, a, Wt, 0, 1, m.renderTransform, m, 0, -1), b.dep = 1), p === "scale")
              this._pt = new Ve(this._pt, m, "scaleY", m.scaleY, (T ? fn(m.scaleY, T + h) : h) - m.scaleY || 0, Fa), this._pt.u = 0, o.push("scaleY", p), p += "X";
            else if (p === "transformOrigin") {
              C.push(He, 0, a[He]), f = _p(f), m.svg ? $a(t, f, 0, M, 0, this) : (w = parseFloat(f.split(" ")[2]) || 0, w !== m.zOrigin && lr(this, m, "zOrigin", m.zOrigin, w), lr(this, a, p, So(u), So(f)));
              continue;
            } else if (p === "svgOrigin") {
              $a(t, f, 1, M, 0, this);
              continue;
            } else if (p in kf) {
              vp(this, m, p, d, T ? fn(d, T + f) : f);
              continue;
            } else if (p === "smoothOrigin") {
              lr(this, m, "smooth", m.smooth, f);
              continue;
            } else if (p === "force3D") {
              m[p] = f;
              continue;
            } else if (p === "transform") {
              wp(this, f, t);
              continue;
            }
          } else p in a || (p = Cn(p) || p);
          if (x || (h || h === 0) && (d || d === 0) && !tp.test(f) && p in a)
            g = (u + "").substr((d + "").length), h || (h = 0), w = Te(f) || (p in ai.units ? ai.units[p] : g), g !== w && (d = yr(t, p, u, w)), this._pt = new Ve(this._pt, x ? m : a, p, d, (T ? fn(d, T + h) : h) - d, !x && (w === "px" || p === "zIndex") && e.autoRound !== !1 ? np : Fa), this._pt.u = w || 0, x && D !== f ? (this._pt.b = u, this._pt.e = D, this._pt.r = rp) : g !== w && w !== "%" && (this._pt.b = u, this._pt.r = ip);
          else if (p in a)
            pp.call(this, t, p, u, T ? T + f : f);
          else if (p in t)
            this.add(t, p, u || t[p], T ? T + f : f, r, n);
          else if (p !== "parseTransform") {
            xl(p, f);
            continue;
          }
          x || (p in a ? C.push(p, 0, a[p]) : typeof t[p] == "function" ? C.push(p, 2, t[p]()) : C.push(p, 1, u || t[p])), o.push(p);
        }
      }
    E && yf(this);
  },
  render: function(t, e) {
    if (e.tween._time || !Ll())
      for (var i = e._pt; i; )
        i.r(t, i.d), i = i._next;
    else
      e.styles.revert();
  },
  get: Xi,
  aliases: Fi,
  getSetter: function(t, e, i) {
    var r = Fi[e];
    return r && r.indexOf(",") < 0 && (e = r), e in Qi && e !== He && (t._gsap.x || Xi(t, "x")) ? i && _c === i ? e === "scale" ? lp : ap : (_c = i || {}) && (e === "scale" ? cp : up) : t.style && !yl(t.style[e]) ? sp : ~e.indexOf("-") ? op : Ml(t, e);
  },
  core: {
    _removeProperty: mr,
    _getMatrix: Rl
  }
};
Ue.utils.checkPrefix = Cn;
Ue.core.getStyleSaver = Sf;
(function(s, t, e, i) {
  var r = We(s + "," + t + "," + e, function(n) {
    Qi[n] = 1;
  });
  We(t, function(n) {
    ai.units[n] = "deg", kf[n] = 1;
  }), Fi[r[13]] = s + "," + t, We(i, function(n) {
    var o = n.split(":");
    Fi[o[1]] = r[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
We("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s) {
  ai.units[s] = "px";
});
Ue.registerPlugin(Df);
var Nt = Ue.registerPlugin(Df) || Ue;
Nt.core.Tween;
function xp(s, t) {
  for (var e = 0; e < t.length; e++) {
    var i = t[e];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(s, i.key, i);
  }
}
function bp(s, t, e) {
  return t && xp(s.prototype, t), s;
}
/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var ge, oo, ri, cr, ur, pn, Of, Pr, _n, Lf, Hi, bi, Af, Rf = function() {
  return ge || typeof window < "u" && (ge = window.gsap) && ge.registerPlugin && ge;
}, Nf = 1, ln = [], _t = [], Bi = [], is = Date.now, za = function(t, e) {
  return e;
}, Sp = function() {
  var t = _n.core, e = t.bridge || {}, i = t._scrollers, r = t._proxies;
  i.push.apply(i, _t), r.push.apply(r, Bi), _t = i, Bi = r, za = function(o, a) {
    return e[o](a);
  };
}, pr = function(t, e) {
  return ~Bi.indexOf(t) && Bi[Bi.indexOf(t) + 1][e];
}, rs = function(t) {
  return !!~Lf.indexOf(t);
}, Oe = function(t, e, i, r, n) {
  return t.addEventListener(e, i, {
    passive: r !== !1,
    capture: !!n
  });
}, Me = function(t, e, i, r) {
  return t.removeEventListener(e, i, !!r);
}, Ys = "scrollLeft", Xs = "scrollTop", Ya = function() {
  return Hi && Hi.isPressed || _t.cache++;
}, To = function(t, e) {
  var i = function r(n) {
    if (n || n === 0) {
      Nf && (ri.history.scrollRestoration = "manual");
      var o = Hi && Hi.isPressed;
      n = r.v = Math.round(n) || (Hi && Hi.iOS ? 1 : 0), t(n), r.cacheID = _t.cache, o && za("ss", n);
    } else (e || _t.cache !== r.cacheID || za("ref")) && (r.cacheID = _t.cache, r.v = t());
    return r.v + r.offset;
  };
  return i.offset = 0, t && i;
}, Ne = {
  s: Ys,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: To(function(s) {
    return arguments.length ? ri.scrollTo(s, ae.sc()) : ri.pageXOffset || cr[Ys] || ur[Ys] || pn[Ys] || 0;
  })
}, ae = {
  s: Xs,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: Ne,
  sc: To(function(s) {
    return arguments.length ? ri.scrollTo(Ne.sc(), s) : ri.pageYOffset || cr[Xs] || ur[Xs] || pn[Xs] || 0;
  })
}, ze = function(t, e) {
  return (e && e._ctx && e._ctx.selector || ge.utils.toArray)(t)[0] || (typeof t == "string" && ge.config().nullTargetWarn !== !1 ? console.warn("Element not found:", t) : null);
}, Tp = function(t, e) {
  for (var i = e.length; i--; )
    if (e[i] === t || e[i].contains(t))
      return !0;
  return !1;
}, vr = function(t, e) {
  var i = e.s, r = e.sc;
  rs(t) && (t = cr.scrollingElement || ur);
  var n = _t.indexOf(t), o = r === ae.sc ? 1 : 2;
  !~n && (n = _t.push(t) - 1), _t[n + o] || Oe(t, "scroll", Ya);
  var a = _t[n + o], c = a || (_t[n + o] = To(pr(t, i), !0) || (rs(t) ? r : To(function(u) {
    return arguments.length ? t[i] = u : t[i];
  })));
  return c.target = t, a || (c.smooth = ge.getProperty(t, "scrollBehavior") === "smooth"), c;
}, Xa = function(t, e, i) {
  var r = t, n = t, o = is(), a = o, c = e || 50, u = Math.max(500, c * 3), f = function(_, p) {
    var g = is();
    p || g - o > c ? (n = r, r = _, a = o, o = g) : i ? r += _ : r = n + (_ - n) / (g - a) * (o - a);
  }, h = function() {
    n = r = i ? 0 : r, a = o = 0;
  }, d = function(_) {
    var p = a, g = n, w = is();
    return (_ || _ === 0) && _ !== r && f(_), o === a || w - a > u ? 0 : (r + (i ? g : -g)) / ((i ? w : o) - p) * 1e3;
  };
  return {
    update: f,
    reset: h,
    getVelocity: d
  };
}, Fn = function(t, e) {
  return e && !t._gsapAllow && t.cancelable !== !1 && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t;
}, Tc = function(t) {
  var e = Math.max.apply(Math, t), i = Math.min.apply(Math, t);
  return Math.abs(e) >= Math.abs(i) ? e : i;
}, Ff = function() {
  _n = ge.core.globals().ScrollTrigger, _n && _n.core && Sp();
}, If = function(t) {
  return ge = t || Rf(), !oo && ge && typeof document < "u" && document.body && (ri = window, cr = document, ur = cr.documentElement, pn = cr.body, Lf = [ri, cr, ur, pn], ge.utils.clamp, Af = ge.core.context || function() {
  }, Pr = "onpointerenter" in pn ? "pointer" : "mouse", Of = jt.isTouch = ri.matchMedia && ri.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in ri || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, bi = jt.eventTypes = ("ontouchstart" in ur ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in ur ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return Nf = 0;
  }, 500), oo = 1), _n || Ff(), oo;
};
Ne.op = ae;
_t.cache = 0;
var jt = /* @__PURE__ */ function() {
  function s(e) {
    this.init(e);
  }
  var t = s.prototype;
  return t.init = function(i) {
    oo || If(ge) || console.warn("Please gsap.registerPlugin(Observer)"), _n || Ff();
    var r = i.tolerance, n = i.dragMinimum, o = i.type, a = i.target, c = i.lineHeight, u = i.debounce, f = i.preventDefault, h = i.onStop, d = i.onStopDelay, l = i.ignore, _ = i.wheelSpeed, p = i.event, g = i.onDragStart, w = i.onDragEnd, T = i.onDrag, x = i.onPress, b = i.onRelease, m = i.onRight, M = i.onLeft, E = i.onUp, C = i.onDown, D = i.onChangeX, P = i.onChangeY, B = i.onChange, A = i.onToggleX, R = i.onToggleY, X = i.onHover, $ = i.onHoverEnd, V = i.onMove, Y = i.ignoreCheck, nt = i.isNormalizer, st = i.onGestureStart, v = i.onGestureEnd, G = i.onWheel, H = i.onEnable, ht = i.onDisable, J = i.onClick, ot = i.scrollSpeed, et = i.capture, wt = i.allowClicks, at = i.lockAxis, It = i.onLockAxis;
    this.target = a = ze(a) || ur, this.vars = i, l && (l = ge.utils.toArray(l)), r = r || 1e-9, n = n || 0, _ = _ || 1, ot = ot || 1, o = o || "wheel,touch,pointer", u = u !== !1, c || (c = parseFloat(ri.getComputedStyle(pn).lineHeight) || 22);
    var Dt, xt, Ot, K, tt, it, Qt, k = this, St = 0, ee = 0, Fe = i.passive || !f && i.passive !== !1, Ct = vr(a, Ne), j = vr(a, ae), Ie = Ct(), ui = j(), qt = ~o.indexOf("touch") && !~o.indexOf("pointer") && bi[0] === "pointerdown", ie = rs(a), kt = a.ownerDocument || cr, Pe = [0, 0, 0], Be = [0, 0, 0], Ge = 0, xr = function() {
      return Ge = is();
    }, Vt = function(O, I) {
      return (k.event = O) && l && Tp(O.target, l) || I && qt && O.pointerType !== "touch" || Y && Y(O, I);
    }, Ji = function() {
      k._vx.reset(), k._vy.reset(), xt.pause(), h && h(k);
    }, fi = function() {
      var O = k.deltaX = Tc(Pe), I = k.deltaY = Tc(Be), L = Math.abs(O) >= r, z = Math.abs(I) >= r;
      B && (L || z) && B(k, O, I, Pe, Be), L && (m && k.deltaX > 0 && m(k), M && k.deltaX < 0 && M(k), D && D(k), A && k.deltaX < 0 != St < 0 && A(k), St = k.deltaX, Pe[0] = Pe[1] = Pe[2] = 0), z && (C && k.deltaY > 0 && C(k), E && k.deltaY < 0 && E(k), P && P(k), R && k.deltaY < 0 != ee < 0 && R(k), ee = k.deltaY, Be[0] = Be[1] = Be[2] = 0), (K || Ot) && (V && V(k), Ot && (g && Ot === 1 && g(k), T && T(k), Ot = 0), K = !1), it && !(it = !1) && It && It(k), tt && (G(k), tt = !1), Dt = 0;
    }, xi = function(O, I, L) {
      Pe[L] += O, Be[L] += I, k._vx.update(O), k._vy.update(I), u ? Dt || (Dt = requestAnimationFrame(fi)) : fi();
    }, hi = function(O, I) {
      at && !Qt && (k.axis = Qt = Math.abs(O) > Math.abs(I) ? "x" : "y", it = !0), Qt !== "y" && (Pe[2] += O, k._vx.update(O, !0)), Qt !== "x" && (Be[2] += I, k._vy.update(I, !0)), u ? Dt || (Dt = requestAnimationFrame(fi)) : fi();
    }, ki = function(O) {
      if (!Vt(O, 1)) {
        O = Fn(O, f);
        var I = O.clientX, L = O.clientY, z = I - k.x, N = L - k.y, W = k.isDragging;
        k.x = I, k.y = L, (W || (z || N) && (Math.abs(k.startX - I) >= n || Math.abs(k.startY - L) >= n)) && (Ot || (Ot = W ? 2 : 1), W || (k.isDragging = !0), hi(z, N));
      }
    }, je = k.onPress = function(S) {
      Vt(S, 1) || S && S.button || (k.axis = Qt = null, xt.pause(), k.isPressed = !0, S = Fn(S), St = ee = 0, k.startX = k.x = S.clientX, k.startY = k.y = S.clientY, k._vx.reset(), k._vy.reset(), Oe(nt ? a : kt, bi[1], ki, Fe, !0), k.deltaX = k.deltaY = 0, x && x(k));
    }, lt = k.onRelease = function(S) {
      if (!Vt(S, 1)) {
        Me(nt ? a : kt, bi[1], ki, !0);
        var O = !isNaN(k.y - k.startY), I = k.isDragging, L = I && (Math.abs(k.x - k.startX) > 3 || Math.abs(k.y - k.startY) > 3), z = Fn(S);
        !L && O && (k._vx.reset(), k._vy.reset(), f && wt && ge.delayedCall(0.08, function() {
          if (is() - Ge > 300 && !S.defaultPrevented) {
            if (S.target.click)
              S.target.click();
            else if (kt.createEvent) {
              var N = kt.createEvent("MouseEvents");
              N.initMouseEvent("click", !0, !0, ri, 1, z.screenX, z.screenY, z.clientX, z.clientY, !1, !1, !1, !1, 0, null), S.target.dispatchEvent(N);
            }
          }
        })), k.isDragging = k.isGesturing = k.isPressed = !1, h && I && !nt && xt.restart(!0), Ot && fi(), w && I && w(k), b && b(k, L);
      }
    }, Ke = function(O) {
      return O.touches && O.touches.length > 1 && (k.isGesturing = !0) && st(O, k.isDragging);
    }, zt = function() {
      return (k.isGesturing = !1) || v(k);
    }, ve = function(O) {
      if (!Vt(O)) {
        var I = Ct(), L = j();
        xi((I - Ie) * ot, (L - ui) * ot, 1), Ie = I, ui = L, h && xt.restart(!0);
      }
    }, $e = function(O) {
      if (!Vt(O)) {
        O = Fn(O, f), G && (tt = !0);
        var I = (O.deltaMode === 1 ? c : O.deltaMode === 2 ? ri.innerHeight : 1) * _;
        xi(O.deltaX * I, O.deltaY * I, 0), h && !nt && xt.restart(!0);
      }
    }, Pi = function(O) {
      if (!Vt(O)) {
        var I = O.clientX, L = O.clientY, z = I - k.x, N = L - k.y;
        k.x = I, k.y = L, K = !0, h && xt.restart(!0), (z || N) && hi(z, N);
      }
    }, Q = function(O) {
      k.event = O, X(k);
    }, y = function(O) {
      k.event = O, $(k);
    }, F = function(O) {
      return Vt(O) || Fn(O, f) && J(k);
    };
    xt = k._dc = ge.delayedCall(d || 0.25, Ji).pause(), k.deltaX = k.deltaY = 0, k._vx = Xa(0, 50, !0), k._vy = Xa(0, 50, !0), k.scrollX = Ct, k.scrollY = j, k.isDragging = k.isGesturing = k.isPressed = !1, Af(this), k.enable = function(S) {
      return k.isEnabled || (Oe(ie ? kt : a, "scroll", Ya), o.indexOf("scroll") >= 0 && Oe(ie ? kt : a, "scroll", ve, Fe, et), o.indexOf("wheel") >= 0 && Oe(a, "wheel", $e, Fe, et), (o.indexOf("touch") >= 0 && Of || o.indexOf("pointer") >= 0) && (Oe(a, bi[0], je, Fe, et), Oe(kt, bi[2], lt), Oe(kt, bi[3], lt), wt && Oe(a, "click", xr, !0, !0), J && Oe(a, "click", F), st && Oe(kt, "gesturestart", Ke), v && Oe(kt, "gestureend", zt), X && Oe(a, Pr + "enter", Q), $ && Oe(a, Pr + "leave", y), V && Oe(a, Pr + "move", Pi)), k.isEnabled = !0, k.isDragging = k.isGesturing = k.isPressed = K = Ot = !1, k._vx.reset(), k._vy.reset(), Ie = Ct(), ui = j(), S && S.type && je(S), H && H(k)), k;
    }, k.disable = function() {
      k.isEnabled && (ln.filter(function(S) {
        return S !== k && rs(S.target);
      }).length || Me(ie ? kt : a, "scroll", Ya), k.isPressed && (k._vx.reset(), k._vy.reset(), Me(nt ? a : kt, bi[1], ki, !0)), Me(ie ? kt : a, "scroll", ve, et), Me(a, "wheel", $e, et), Me(a, bi[0], je, et), Me(kt, bi[2], lt), Me(kt, bi[3], lt), Me(a, "click", xr, !0), Me(a, "click", F), Me(kt, "gesturestart", Ke), Me(kt, "gestureend", zt), Me(a, Pr + "enter", Q), Me(a, Pr + "leave", y), Me(a, Pr + "move", Pi), k.isEnabled = k.isPressed = k.isDragging = !1, ht && ht(k));
    }, k.kill = k.revert = function() {
      k.disable();
      var S = ln.indexOf(k);
      S >= 0 && ln.splice(S, 1), Hi === k && (Hi = 0);
    }, ln.push(k), nt && rs(a) && (Hi = k), k.enable(p);
  }, bp(s, [{
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
jt.version = "3.15.0";
jt.create = function(s) {
  return new jt(s);
};
jt.register = If;
jt.getAll = function() {
  return ln.slice();
};
jt.getById = function(s) {
  return ln.filter(function(t) {
    return t.vars.id === s;
  })[0];
};
Rf() && ge.registerPlugin(jt);
/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var q, rn, pt, Mt, ei, Et, Nl, Eo, ks, ns, Wn, Ws, be, zo, Wa, Ae, Ec, Cc, nn, Bf, ta, $f, Le, Va, zf, Yf, rr, Ha, Fl, gn, Il, ss, qa, ea, Vs = 1, Se = Date.now, ia = Se(), wi = 0, Vn = 0, kc = function(t, e, i) {
  var r = Je(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
  return i["_" + e + "Clamp"] = r, r ? t.substr(6, t.length - 7) : t;
}, Pc = function(t, e) {
  return e && (!Je(t) || t.substr(0, 6) !== "clamp(") ? "clamp(" + t + ")" : t;
}, Ep = function s() {
  return Vn && requestAnimationFrame(s);
}, Mc = function() {
  return zo = 1;
}, Dc = function() {
  return zo = 0;
}, Li = function(t) {
  return t;
}, Hn = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, Xf = function() {
  return typeof window < "u";
}, Wf = function() {
  return q || Xf() && (q = window.gsap) && q.registerPlugin && q;
}, Wr = function(t) {
  return !!~Nl.indexOf(t);
}, Vf = function(t) {
  return (t === "Height" ? Il : pt["inner" + t]) || ei["client" + t] || Et["client" + t];
}, Hf = function(t) {
  return pr(t, "getBoundingClientRect") || (Wr(t) ? function() {
    return fo.width = pt.innerWidth, fo.height = Il, fo;
  } : function() {
    return Vi(t);
  });
}, Cp = function(t, e, i) {
  var r = i.d, n = i.d2, o = i.a;
  return (o = pr(t, "getBoundingClientRect")) ? function() {
    return o()[r];
  } : function() {
    return (e ? Vf(n) : t["client" + n]) || 0;
  };
}, kp = function(t, e) {
  return !e || ~Bi.indexOf(t) ? Hf(t) : function() {
    return fo;
  };
}, Ii = function(t, e) {
  var i = e.s, r = e.d2, n = e.d, o = e.a;
  return Math.max(0, (i = "scroll" + r) && (o = pr(t, i)) ? o() - Hf(t)()[n] : Wr(t) ? (ei[i] || Et[i]) - Vf(r) : t[i] - t["offset" + r]);
}, Hs = function(t, e) {
  for (var i = 0; i < nn.length; i += 3)
    (!e || ~e.indexOf(nn[i + 1])) && t(nn[i], nn[i + 1], nn[i + 2]);
}, Je = function(t) {
  return typeof t == "string";
}, Ee = function(t) {
  return typeof t == "function";
}, qn = function(t) {
  return typeof t == "number";
}, Mr = function(t) {
  return typeof t == "object";
}, In = function(t, e, i) {
  return t && t.progress(e ? 0 : 1) && i && t.pause();
}, jr = function(t, e, i) {
  if (t.enabled) {
    var r = t._ctx ? t._ctx.add(function() {
      return e(t, i);
    }) : e(t, i);
    r && r.totalTime && (t.callbackAnimation = r);
  }
}, Kr = Math.abs, qf = "left", Uf = "top", Bl = "right", $l = "bottom", Ir = "width", Br = "height", os = "Right", as = "Left", ls = "Top", cs = "Bottom", Jt = "padding", gi = "margin", kn = "Width", zl = "Height", ne = "px", mi = function(t) {
  return pt.getComputedStyle(t.nodeType === Node.DOCUMENT_NODE ? t.scrollingElement : t);
}, Pp = function(t) {
  var e = mi(t).position;
  t.style.position = e === "absolute" || e === "fixed" ? e : "relative";
}, Oc = function(t, e) {
  for (var i in e)
    i in t || (t[i] = e[i]);
  return t;
}, Vi = function(t, e) {
  var i = e && mi(t)[Wa] !== "matrix(1, 0, 0, 1, 0, 0)" && q.to(t, {
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
  return i && i.progress(0).kill(), r;
}, Co = function(t, e) {
  var i = e.d2;
  return t["offset" + i] || t["client" + i] || 0;
}, Gf = function(t) {
  var e = [], i = t.labels, r = t.duration(), n;
  for (n in i)
    e.push(i[n] / r);
  return e;
}, Mp = function(t) {
  return function(e) {
    return q.utils.snap(Gf(t), e);
  };
}, Yl = function(t) {
  var e = q.utils.snap(t), i = Array.isArray(t) && t.slice(0).sort(function(r, n) {
    return r - n;
  });
  return i ? function(r, n, o) {
    o === void 0 && (o = 1e-3);
    var a;
    if (!n)
      return e(r);
    if (n > 0) {
      for (r -= o, a = 0; a < i.length; a++)
        if (i[a] >= r)
          return i[a];
      return i[a - 1];
    } else
      for (a = i.length, r += o; a--; )
        if (i[a] <= r)
          return i[a];
    return i[0];
  } : function(r, n, o) {
    o === void 0 && (o = 1e-3);
    var a = e(r);
    return !n || Math.abs(a - r) < o || a - r < 0 == n < 0 ? a : e(n < 0 ? r - t : r + t);
  };
}, Dp = function(t) {
  return function(e, i) {
    return Yl(Gf(t))(e, i.direction);
  };
}, qs = function(t, e, i, r) {
  return i.split(",").forEach(function(n) {
    return t(e, n, r);
  });
}, ce = function(t, e, i, r, n) {
  return t.addEventListener(e, i, {
    passive: !r,
    capture: !!n
  });
}, le = function(t, e, i, r) {
  return t.removeEventListener(e, i, !!r);
}, Us = function(t, e, i) {
  i = i && i.wheelHandler, i && (t(e, "wheel", i), t(e, "touchmove", i));
}, Lc = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, Gs = {
  toggleActions: "play",
  anticipatePin: 0
}, ko = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, ao = function(t, e) {
  if (Je(t)) {
    var i = t.indexOf("="), r = ~i ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
    ~i && (t.indexOf("%") > i && (r *= e / 100), t = t.substr(0, i - 1)), t = r + (t in ko ? ko[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0);
  }
  return t;
}, js = function(t, e, i, r, n, o, a, c) {
  var u = n.startColor, f = n.endColor, h = n.fontSize, d = n.indent, l = n.fontWeight, _ = Mt.createElement("div"), p = Wr(i) || pr(i, "pinType") === "fixed", g = t.indexOf("scroller") !== -1, w = p ? Et : i.tagName === "IFRAME" ? i.contentDocument.body : i, T = t.indexOf("start") !== -1, x = T ? u : f, b = "border-color:" + x + ";font-size:" + h + ";color:" + x + ";font-weight:" + l + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return b += "position:" + ((g || c) && p ? "fixed;" : "absolute;"), (g || c || !p) && (b += (r === ae ? Bl : $l) + ":" + (o + parseFloat(d)) + "px;"), a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), _._isStart = T, _.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), _.style.cssText = b, _.innerText = e || e === 0 ? t + "-" + e : t, w.children[0] ? w.insertBefore(_, w.children[0]) : w.appendChild(_), _._offset = _["offset" + r.op.d2], lo(_, 0, r, T), _;
}, lo = function(t, e, i, r) {
  var n = {
    display: "block"
  }, o = i[r ? "os2" : "p2"], a = i[r ? "p2" : "os2"];
  t._isFlipped = r, n[i.a + "Percent"] = r ? -100 : 0, n[i.a] = r ? "1px" : 0, n["border" + o + kn] = 1, n["border" + a + kn] = 0, n[i.p] = e + "px", q.set(t, n);
}, dt = [], Ua = {}, Ps, Ac = function() {
  return Se() - wi > 34 && (Ps || (Ps = requestAnimationFrame(ji)));
}, Qr = function() {
  (!Le || !Le.isPressed || Le.startX > Et.clientWidth) && (_t.cache++, Le ? Ps || (Ps = requestAnimationFrame(ji)) : ji(), wi || Hr("scrollStart"), wi = Se());
}, ra = function() {
  Yf = pt.innerWidth, zf = pt.innerHeight;
}, Un = function(t) {
  _t.cache++, (t === !0 || !be && !$f && !Mt.fullscreenElement && !Mt.webkitFullscreenElement && (!Va || Yf !== pt.innerWidth || Math.abs(pt.innerHeight - zf) > pt.innerHeight * 0.25)) && Eo.restart(!0);
}, Vr = {}, Op = [], jf = function s() {
  return le(ct, "scrollEnd", s) || Lr(!0);
}, Hr = function(t) {
  return Vr[t] && Vr[t].map(function(e) {
    return e();
  }) || Op;
}, Ze = [], Kf = function(t) {
  for (var e = 0; e < Ze.length; e += 5)
    (!t || Ze[e + 4] && Ze[e + 4].query === t) && (Ze[e].style.cssText = Ze[e + 1], Ze[e].getBBox && Ze[e].setAttribute("transform", Ze[e + 2] || ""), Ze[e + 3].uncache = 1);
}, Qf = function() {
  return _t.forEach(function(t) {
    return Ee(t) && ++t.cacheID && (t.rec = t());
  });
}, Xl = function(t, e) {
  var i;
  for (Ae = 0; Ae < dt.length; Ae++)
    i = dt[Ae], i && (!e || i._ctx === e) && (t ? i.kill(1) : i.revert(!0, !0));
  ss = !0, e && Kf(e), e || Hr("revert");
}, Zf = function(t, e) {
  _t.cache++, (e || !Re) && _t.forEach(function(i) {
    return Ee(i) && i.cacheID++ && (i.rec = 0);
  }), Je(t) && (pt.history.scrollRestoration = Fl = t);
}, Re, $r = 0, Rc, Lp = function() {
  if (Rc !== $r) {
    var t = Rc = $r;
    requestAnimationFrame(function() {
      return t === $r && Lr(!0);
    });
  }
}, Jf = function() {
  Et.appendChild(gn), Il = !Le && gn.offsetHeight || pt.innerHeight, Et.removeChild(gn);
}, Nc = function(t) {
  return ks(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e) {
    return e.style.display = t ? "none" : "block";
  });
}, Lr = function(t, e) {
  if (ei = Mt.documentElement, Et = Mt.body, Nl = [pt, Mt, ei, Et], wi && !t && !ss) {
    ce(ct, "scrollEnd", jf);
    return;
  }
  Jf(), Re = ct.isRefreshing = !0, ss || Qf();
  var i = Hr("refreshInit");
  Bf && ct.sort(), e || Xl(), _t.forEach(function(r) {
    Ee(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
  }), dt.slice(0).forEach(function(r) {
    return r.refresh();
  }), ss = !1, dt.forEach(function(r) {
    if (r._subPinOffset && r.pin) {
      var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight", o = r.pin[n];
      r.revert(!0, 1), r.adjustPinSpacing(r.pin[n] - o), r.refresh();
    }
  }), qa = 1, Nc(!0), dt.forEach(function(r) {
    var n = Ii(r.scroller, r._dir), o = r.vars.end === "max" || r._endClamp && r.end > n, a = r._startClamp && r.start >= n;
    (o || a) && r.setPositions(a ? n - 1 : r.start, o ? Math.max(a ? n : r.start + 1, n) : r.end, !0);
  }), Nc(!1), qa = 0, i.forEach(function(r) {
    return r && r.render && r.render(-1);
  }), _t.forEach(function(r) {
    Ee(r) && (r.smooth && requestAnimationFrame(function() {
      return r.target.style.scrollBehavior = "smooth";
    }), r.rec && r(r.rec));
  }), Zf(Fl, 1), Eo.pause(), $r++, Re = 2, ji(2), dt.forEach(function(r) {
    return Ee(r.vars.onRefresh) && r.vars.onRefresh(r);
  }), Re = ct.isRefreshing = !1, Hr("refresh");
}, Ga = 0, co = 1, us, ji = function(t) {
  if (t === 2 || !Re && !ss) {
    ct.isUpdating = !0, us && us.update(0);
    var e = dt.length, i = Se(), r = i - ia >= 50, n = e && dt[0].scroll();
    if (co = Ga > n ? -1 : 1, Re || (Ga = n), r && (wi && !zo && i - wi > 200 && (wi = 0, Hr("scrollEnd")), Wn = ia, ia = i), co < 0) {
      for (Ae = e; Ae-- > 0; )
        dt[Ae] && dt[Ae].update(0, r);
      co = 1;
    } else
      for (Ae = 0; Ae < e; Ae++)
        dt[Ae] && dt[Ae].update(0, r);
    ct.isUpdating = !1;
  }
  Ps = 0;
}, ja = [qf, Uf, $l, Bl, gi + cs, gi + os, gi + ls, gi + as, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], uo = ja.concat([Ir, Br, "boxSizing", "max" + kn, "max" + zl, "position", gi, Jt, Jt + ls, Jt + os, Jt + cs, Jt + as]), Ap = function(t, e, i) {
  mn(i);
  var r = t._gsap;
  if (r.spacerIsNative)
    mn(r.spacerState);
  else if (t._gsap.swappedIn) {
    var n = e.parentNode;
    n && (n.insertBefore(t, e), n.removeChild(e));
  }
  t._gsap.swappedIn = !1;
}, na = function(t, e, i, r) {
  if (!t._gsap.swappedIn) {
    for (var n = ja.length, o = e.style, a = t.style, c; n--; )
      c = ja[n], o[c] = i[c];
    o.position = i.position === "absolute" ? "absolute" : "relative", i.display === "inline" && (o.display = "inline-block"), a[$l] = a[Bl] = "auto", o.flexBasis = i.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[Ir] = Co(t, Ne) + ne, o[Br] = Co(t, ae) + ne, o[Jt] = a[gi] = a[Uf] = a[qf] = "0", mn(r), a[Ir] = a["max" + kn] = i[Ir], a[Br] = a["max" + zl] = i[Br], a[Jt] = i[Jt], t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)), t._gsap.swappedIn = !0;
  }
}, Rp = /([A-Z])/g, mn = function(t) {
  if (t) {
    var e = t.t.style, i = t.length, r = 0, n, o;
    for ((t.t._gsap || q.core.getCache(t.t)).uncache = 1; r < i; r += 2)
      o = t[r + 1], n = t[r], o ? e[n] = o : e[n] && e.removeProperty(n.replace(Rp, "-$1").toLowerCase());
  }
}, Ks = function(t) {
  for (var e = uo.length, i = t.style, r = [], n = 0; n < e; n++)
    r.push(uo[n], i[uo[n]]);
  return r.t = t, r;
}, Np = function(t, e, i) {
  for (var r = [], n = t.length, o = i ? 8 : 0, a; o < n; o += 2)
    a = t[o], r.push(a, a in e ? e[a] : t[o + 1]);
  return r.t = t.t, r;
}, fo = {
  left: 0,
  top: 0
}, Fc = function(t, e, i, r, n, o, a, c, u, f, h, d, l, _) {
  Ee(t) && (t = t(c)), Je(t) && t.substr(0, 3) === "max" && (t = d + (t.charAt(4) === "=" ? ao("0" + t.substr(3), i) : 0));
  var p = l ? l.time() : 0, g, w, T;
  if (l && l.seek(0), isNaN(t) || (t = +t), qn(t))
    l && (t = q.utils.mapRange(l.scrollTrigger.start, l.scrollTrigger.end, 0, d, t)), a && lo(a, i, r, !0);
  else {
    Ee(e) && (e = e(c));
    var x = (t || "0").split(" "), b, m, M, E;
    T = ze(e, c) || Et, b = Vi(T) || {}, (!b || !b.left && !b.top) && mi(T).display === "none" && (E = T.style.display, T.style.display = "block", b = Vi(T), E ? T.style.display = E : T.style.removeProperty("display")), m = ao(x[0], b[r.d]), M = ao(x[1] || "0", i), t = b[r.p] - u[r.p] - f + m + n - M, a && lo(a, M, r, i - M < 20 || a._isStart && M > 20), i -= i - M;
  }
  if (_ && (c[_] = t || -1e-3, t < 0 && (t = 0)), o) {
    var C = t + i, D = o._isStart;
    g = "scroll" + r.d2, lo(o, C, r, D && C > 20 || !D && (h ? Math.max(Et[g], ei[g]) : o.parentNode[g]) <= C + 1), h && (u = Vi(a), h && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + ne));
  }
  return l && T && (g = Vi(T), l.seek(d), w = Vi(T), l._caScrollDist = g[r.p] - w[r.p], t = t / l._caScrollDist * d), l && l.seek(p), l ? t : Math.round(t);
}, Fp = /(webkit|moz|length|cssText|inset)/i, Ic = function(t, e, i, r) {
  if (t.parentNode !== e) {
    var n = t.style, o, a;
    if (e === Et) {
      t._stOrig = n.cssText, a = mi(t);
      for (o in a)
        !+o && !Fp.test(o) && a[o] && typeof n[o] == "string" && o !== "0" && (n[o] = a[o]);
      n.top = i, n.left = r;
    } else
      n.cssText = t._stOrig;
    q.core.getCache(t).uncache = 1, e.appendChild(t);
  }
}, th = function(t, e, i) {
  var r = e, n = r;
  return function(o) {
    var a = Math.round(t());
    return a !== r && a !== n && Math.abs(a - r) > 3 && Math.abs(a - n) > 3 && (o = a, i && i()), n = r, r = Math.round(o), r;
  };
}, Qs = function(t, e, i) {
  var r = {};
  r[e.p] = "+=" + i, q.set(t, r);
}, Bc = function(t, e) {
  var i = vr(t, e), r = "_scroll" + e.p2, n = function o(a, c, u, f, h) {
    var d = o.tween, l = c.onComplete, _ = {};
    u = u || i();
    var p = th(i, u, function() {
      d.kill(), o.tween = 0;
    });
    return h = f && h || 0, f = f || a - u, d && d.kill(), c[r] = a, c.inherit = !1, c.modifiers = _, _[r] = function() {
      return p(u + f * d.ratio + h * d.ratio * d.ratio);
    }, c.onUpdate = function() {
      _t.cache++, o.tween && ji();
    }, c.onComplete = function() {
      o.tween = 0, l && l.call(d);
    }, d = o.tween = q.to(t, c), d;
  };
  return t[r] = i, i.wheelHandler = function() {
    return n.tween && n.tween.kill() && (n.tween = 0);
  }, ce(t, "wheel", i.wheelHandler), ct.isTouch && ce(t, "touchmove", i.wheelHandler), n;
}, ct = /* @__PURE__ */ function() {
  function s(e, i) {
    rn || s.register(q) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Ha(this), this.init(e, i);
  }
  var t = s.prototype;
  return t.init = function(i, r) {
    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Vn) {
      this.update = this.refresh = this.kill = Li;
      return;
    }
    i = Oc(Je(i) || qn(i) || i.nodeType ? {
      trigger: i
    } : i, Gs);
    var n = i, o = n.onUpdate, a = n.toggleClass, c = n.id, u = n.onToggle, f = n.onRefresh, h = n.scrub, d = n.trigger, l = n.pin, _ = n.pinSpacing, p = n.invalidateOnRefresh, g = n.anticipatePin, w = n.onScrubComplete, T = n.onSnapComplete, x = n.once, b = n.snap, m = n.pinReparent, M = n.pinSpacer, E = n.containerAnimation, C = n.fastScrollEnd, D = n.preventOverlaps, P = i.horizontal || i.containerAnimation && i.horizontal !== !1 ? Ne : ae, B = !h && h !== 0, A = ze(i.scroller || pt), R = q.core.getCache(A), X = Wr(A), $ = ("pinType" in i ? i.pinType : pr(A, "pinType") || X && "fixed") === "fixed", V = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack], Y = B && i.toggleActions.split(" "), nt = "markers" in i ? i.markers : Gs.markers, st = X ? 0 : parseFloat(mi(A)["border" + P.p2 + kn]) || 0, v = this, G = i.onRefreshInit && function() {
      return i.onRefreshInit(v);
    }, H = Cp(A, X, P), ht = kp(A, X), J = 0, ot = 0, et = 0, wt = vr(A, P), at, It, Dt, xt, Ot, K, tt, it, Qt, k, St, ee, Fe, Ct, j, Ie, ui, qt, ie, kt, Pe, Be, Ge, xr, Vt, Ji, fi, xi, hi, ki, je, lt, Ke, zt, ve, $e, Pi, Q, y;
    if (v._startClamp = v._endClamp = !1, v._dir = P, g *= 45, v.scroller = A, v.scroll = E ? E.time.bind(E) : wt, xt = wt(), v.vars = i, r = r || i.animation, "refreshPriority" in i && (Bf = 1, i.refreshPriority === -9999 && (us = v)), R.tweenScroll = R.tweenScroll || {
      top: Bc(A, ae),
      left: Bc(A, Ne)
    }, v.tweenTo = at = R.tweenScroll[P.p], v.scrubDuration = function(L) {
      Ke = qn(L) && L, Ke ? lt ? lt.duration(L) : lt = q.to(r, {
        ease: "expo",
        totalProgress: "+=0",
        inherit: !1,
        duration: Ke,
        paused: !0,
        onComplete: function() {
          return w && w(v);
        }
      }) : (lt && lt.progress(1).kill(), lt = 0);
    }, r && (r.vars.lazy = !1, r._initted && !v.isReverted || r.vars.immediateRender !== !1 && i.immediateRender !== !1 && r.duration() && r.render(0, !0, !0), v.animation = r.pause(), r.scrollTrigger = v, v.scrubDuration(h), ki = 0, c || (c = r.vars.id)), b && ((!Mr(b) || b.push) && (b = {
      snapTo: b
    }), "scrollBehavior" in Et.style && q.set(X ? [Et, ei] : A, {
      scrollBehavior: "auto"
    }), _t.forEach(function(L) {
      return Ee(L) && L.target === (X ? Mt.scrollingElement || ei : A) && (L.smooth = !1);
    }), Dt = Ee(b.snapTo) ? b.snapTo : b.snapTo === "labels" ? Mp(r) : b.snapTo === "labelsDirectional" ? Dp(r) : b.directional !== !1 ? function(L, z) {
      return Yl(b.snapTo)(L, Se() - ot < 500 ? 0 : z.direction);
    } : q.utils.snap(b.snapTo), zt = b.duration || {
      min: 0.1,
      max: 2
    }, zt = Mr(zt) ? ns(zt.min, zt.max) : ns(zt, zt), ve = q.delayedCall(b.delay || Ke / 2 || 0.1, function() {
      var L = wt(), z = Se() - ot < 500, N = at.tween;
      if ((z || Math.abs(v.getVelocity()) < 10) && !N && !zo && J !== L) {
        var W = (L - K) / Ct, rt = r && !B ? r.totalProgress() : W, U = z ? 0 : (rt - je) / (Se() - Wn) * 1e3 || 0, ft = q.utils.clamp(-W, 1 - W, Kr(U / 2) * U / 0.185), bt = W + (b.inertia === !1 ? 0 : ft), Tt, gt, mt = b, Pt = mt.onStart, ut = mt.onInterrupt, fe = mt.onComplete;
        if (Tt = Dt(bt, v), qn(Tt) || (Tt = bt), gt = Math.max(0, Math.round(K + Tt * Ct)), L <= tt && L >= K && gt !== L) {
          if (N && !N._initted && N.data <= Kr(gt - L))
            return;
          b.inertia === !1 && (ft = Tt - W), at(gt, {
            duration: zt(Kr(Math.max(Kr(bt - rt), Kr(Tt - rt)) * 0.185 / U / 0.05 || 0)),
            ease: b.ease || "power3",
            data: Kr(gt - L),
            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
            onInterrupt: function() {
              return ve.restart(!0) && ut && jr(v, ut);
            },
            onComplete: function() {
              v.update(), J = wt(), r && !B && (lt ? lt.resetTo("totalProgress", Tt, r._tTime / r._tDur) : r.progress(Tt)), ki = je = r && !B ? r.totalProgress() : v.progress, T && T(v), fe && jr(v, fe);
            }
          }, L, ft * Ct, gt - L - ft * Ct), Pt && jr(v, Pt, at.tween);
        }
      } else v.isActive && J !== L && ve.restart(!0);
    }).pause()), c && (Ua[c] = v), d = v.trigger = ze(d || l !== !0 && l), y = d && d._gsap && d._gsap.stRevert, y && (y = y(v)), l = l === !0 ? d : ze(l), Je(a) && (a = {
      targets: d,
      className: a
    }), l && (_ === !1 || _ === gi || (_ = !_ && l.parentNode && l.parentNode.style && mi(l.parentNode).display === "flex" ? !1 : Jt), v.pin = l, It = q.core.getCache(l), It.spacer ? j = It.pinState : (M && (M = ze(M), M && !M.nodeType && (M = M.current || M.nativeElement), It.spacerIsNative = !!M, M && (It.spacerState = Ks(M))), It.spacer = qt = M || Mt.createElement("div"), qt.classList.add("pin-spacer"), c && qt.classList.add("pin-spacer-" + c), It.pinState = j = Ks(l)), i.force3D !== !1 && q.set(l, {
      force3D: !0
    }), v.spacer = qt = It.spacer, hi = mi(l), xr = hi[_ + P.os2], kt = q.getProperty(l), Pe = q.quickSetter(l, P.a, ne), na(l, qt, hi), ui = Ks(l)), nt) {
      ee = Mr(nt) ? Oc(nt, Lc) : Lc, k = js("scroller-start", c, A, P, ee, 0), St = js("scroller-end", c, A, P, ee, 0, k), ie = k["offset" + P.op.d2];
      var F = ze(pr(A, "content") || A);
      it = this.markerStart = js("start", c, F, P, ee, ie, 0, E), Qt = this.markerEnd = js("end", c, F, P, ee, ie, 0, E), E && (Q = q.quickSetter([it, Qt], P.a, ne)), !$ && !(Bi.length && pr(A, "fixedMarkers") === !0) && (Pp(X ? Et : A), q.set([k, St], {
        force3D: !0
      }), Ji = q.quickSetter(k, P.a, ne), xi = q.quickSetter(St, P.a, ne));
    }
    if (E) {
      var S = E.vars.onUpdate, O = E.vars.onUpdateParams;
      E.eventCallback("onUpdate", function() {
        v.update(0, 0, 1), S && S.apply(E, O || []);
      });
    }
    if (v.previous = function() {
      return dt[dt.indexOf(v) - 1];
    }, v.next = function() {
      return dt[dt.indexOf(v) + 1];
    }, v.revert = function(L, z) {
      if (!z)
        return v.kill(!0);
      var N = L !== !1 || !v.enabled, W = be;
      N !== v.isReverted && (N && ($e = Math.max(wt(), v.scroll.rec || 0), et = v.progress, Pi = r && r.progress()), it && [it, Qt, k, St].forEach(function(rt) {
        return rt.style.display = N ? "none" : "block";
      }), N && (be = v, v.update(N)), l && (!m || !v.isActive) && (N ? Ap(l, qt, j) : na(l, qt, mi(l), Vt)), N || v.update(N), be = W, v.isReverted = N);
    }, v.refresh = function(L, z, N, W) {
      if (!((be || !v.enabled) && !z)) {
        if (l && L && wi) {
          ce(s, "scrollEnd", jf);
          return;
        }
        !Re && G && G(v), be = v, at.tween && !N && (at.tween.kill(), at.tween = 0), lt && lt.pause(), p && r && (r.revert({
          kill: !1
        }).invalidate(), r.getChildren ? r.getChildren(!0, !0, !1).forEach(function(tr) {
          return tr.vars.immediateRender && tr.render(0, !0, !0);
        }) : r.vars.immediateRender && r.render(0, !0, !0)), v.isReverted || v.revert(!0, !0), v._subPinOffset = !1;
        var rt = H(), U = ht(), ft = E ? E.duration() : Ii(A, P), bt = Ct <= 0.01 || !Ct, Tt = 0, gt = W || 0, mt = Mr(N) ? N.end : i.end, Pt = i.endTrigger || d, ut = Mr(N) ? N.start : i.start || (i.start === 0 || !d ? 0 : l ? "0 0" : "0 100%"), fe = v.pinnedContainer = i.pinnedContainer && ze(i.pinnedContainer, v), Bt = d && Math.max(0, dt.indexOf(v)) || 0, he = Bt, de, we, br, Bs, xe, re, Mi, Ho, sc, An, Di, Rn, $s;
        for (nt && Mr(N) && (Rn = q.getProperty(k, P.p), $s = q.getProperty(St, P.p)); he-- > 0; )
          re = dt[he], re.end || re.refresh(0, 1) || (be = v), Mi = re.pin, Mi && (Mi === d || Mi === l || Mi === fe) && !re.isReverted && (An || (An = []), An.unshift(re), re.revert(!0, !0)), re !== dt[he] && (Bt--, he--);
        for (Ee(ut) && (ut = ut(v)), ut = kc(ut, "start", v), K = Fc(ut, d, rt, P, wt(), it, k, v, U, st, $, ft, E, v._startClamp && "_startClamp") || (l ? -1e-3 : 0), Ee(mt) && (mt = mt(v)), Je(mt) && !mt.indexOf("+=") && (~mt.indexOf(" ") ? mt = (Je(ut) ? ut.split(" ")[0] : "") + mt : (Tt = ao(mt.substr(2), rt), mt = Je(ut) ? ut : (E ? q.utils.mapRange(0, E.duration(), E.scrollTrigger.start, E.scrollTrigger.end, K) : K) + Tt, Pt = d)), mt = kc(mt, "end", v), tt = Math.max(K, Fc(mt || (Pt ? "100% 0" : ft), Pt, rt, P, wt() + Tt, Qt, St, v, U, st, $, ft, E, v._endClamp && "_endClamp")) || -1e-3, Tt = 0, he = Bt; he--; )
          re = dt[he] || {}, Mi = re.pin, Mi && re.start - re._pinPush <= K && !E && re.end > 0 && (de = re.end - (v._startClamp ? Math.max(0, re.start) : re.start), (Mi === d && re.start - re._pinPush < K || Mi === fe) && isNaN(ut) && (Tt += de * (1 - re.progress)), Mi === l && (gt += de));
        if (K += Tt, tt += Tt, v._startClamp && (v._startClamp += Tt), v._endClamp && !Re && (v._endClamp = tt || -1e-3, tt = Math.min(tt, Ii(A, P))), Ct = tt - K || (K -= 0.01) && 1e-3, bt && (et = q.utils.clamp(0, 1, q.utils.normalize(K, tt, $e))), v._pinPush = gt, it && Tt && (de = {}, de[P.a] = "+=" + Tt, fe && (de[P.p] = "-=" + wt()), q.set([it, Qt], de)), l && !(qa && v.end >= Ii(A, P)))
          de = mi(l), Bs = P === ae, br = wt(), Be = parseFloat(kt(P.a)) + gt, !ft && tt > 1 && (Di = (X ? Mt.scrollingElement || ei : A).style, Di = {
            style: Di,
            value: Di["overflow" + P.a.toUpperCase()]
          }, X && mi(Et)["overflow" + P.a.toUpperCase()] !== "scroll" && (Di.style["overflow" + P.a.toUpperCase()] = "scroll")), na(l, qt, de), ui = Ks(l), we = Vi(l, !0), Ho = $ && vr(A, Bs ? Ne : ae)(), _ ? (Vt = [_ + P.os2, Ct + gt + ne], Vt.t = qt, he = _ === Jt ? Co(l, P) + Ct + gt : 0, he && (Vt.push(P.d, he + ne), qt.style.flexBasis !== "auto" && (qt.style.flexBasis = he + ne)), mn(Vt), fe && dt.forEach(function(tr) {
            tr.pin === fe && tr.vars.pinSpacing !== !1 && (tr._subPinOffset = !0);
          }), $ && wt($e)) : (he = Co(l, P), he && qt.style.flexBasis !== "auto" && (qt.style.flexBasis = he + ne)), $ && (xe = {
            top: we.top + (Bs ? br - K : Ho) + ne,
            left: we.left + (Bs ? Ho : br - K) + ne,
            boxSizing: "border-box",
            position: "fixed"
          }, xe[Ir] = xe["max" + kn] = Math.ceil(we.width) + ne, xe[Br] = xe["max" + zl] = Math.ceil(we.height) + ne, xe[gi] = xe[gi + ls] = xe[gi + os] = xe[gi + cs] = xe[gi + as] = "0", xe[Jt] = de[Jt], xe[Jt + ls] = de[Jt + ls], xe[Jt + os] = de[Jt + os], xe[Jt + cs] = de[Jt + cs], xe[Jt + as] = de[Jt + as], Ie = Np(j, xe, m), Re && wt(0)), r ? (sc = r._initted, ta(1), r.render(r.duration(), !0, !0), Ge = kt(P.a) - Be + Ct + gt, fi = Math.abs(Ct - Ge) > 1, $ && fi && Ie.splice(Ie.length - 2, 2), r.render(0, !0, !0), sc || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), ta(0)) : Ge = Ct, Di && (Di.value ? Di.style["overflow" + P.a.toUpperCase()] = Di.value : Di.style.removeProperty("overflow-" + P.a));
        else if (d && wt() && !E)
          for (we = d.parentNode; we && we !== Et; )
            we._pinOffset && (K -= we._pinOffset, tt -= we._pinOffset), we = we.parentNode;
        An && An.forEach(function(tr) {
          return tr.revert(!1, !0);
        }), v.start = K, v.end = tt, xt = Ot = Re ? $e : wt(), !E && !Re && (xt < $e && wt($e), v.scroll.rec = 0), v.revert(!1, !0), ot = Se(), ve && (J = -1, ve.restart(!0)), be = 0, r && B && (r._initted || Pi) && r.progress() !== Pi && r.progress(Pi || 0, !0).render(r.time(), !0, !0), (bt || et !== v.progress || E || p || r && !r._initted) && (r && !B && (r._initted || et || r.vars.immediateRender !== !1) && r.totalProgress(E && K < -1e-3 && !et ? q.utils.normalize(K, tt, 0) : et, !0), v.progress = bt || (xt - K) / Ct === et ? 0 : et), l && _ && (qt._pinOffset = Math.round(v.progress * Ge)), lt && lt.invalidate(), isNaN(Rn) || (Rn -= q.getProperty(k, P.p), $s -= q.getProperty(St, P.p), Qs(k, P, Rn), Qs(it, P, Rn - (W || 0)), Qs(St, P, $s), Qs(Qt, P, $s - (W || 0))), bt && !Re && v.update(), f && !Re && !Fe && (Fe = !0, f(v), Fe = !1);
      }
    }, v.getVelocity = function() {
      return (wt() - Ot) / (Se() - Wn) * 1e3 || 0;
    }, v.endAnimation = function() {
      In(v.callbackAnimation), r && (lt ? lt.progress(1) : r.paused() ? B || In(r, v.direction < 0, 1) : In(r, r.reversed()));
    }, v.labelToScroll = function(L) {
      return r && r.labels && (K || v.refresh() || K) + r.labels[L] / r.duration() * Ct || 0;
    }, v.getTrailing = function(L) {
      var z = dt.indexOf(v), N = v.direction > 0 ? dt.slice(0, z).reverse() : dt.slice(z + 1);
      return (Je(L) ? N.filter(function(W) {
        return W.vars.preventOverlaps === L;
      }) : N).filter(function(W) {
        return v.direction > 0 ? W.end <= K : W.start >= tt;
      });
    }, v.update = function(L, z, N) {
      if (!(E && !N && !L)) {
        var W = Re === !0 ? $e : v.scroll(), rt = L ? 0 : (W - K) / Ct, U = rt < 0 ? 0 : rt > 1 ? 1 : rt || 0, ft = v.progress, bt, Tt, gt, mt, Pt, ut, fe, Bt;
        if (z && (Ot = xt, xt = E ? wt() : W, b && (je = ki, ki = r && !B ? r.totalProgress() : U)), g && l && !be && !Vs && wi && (!U && K < W + (W - Ot) / (Se() - Wn) * g ? U = 1e-4 : U === 1 && tt > W + (W - Ot) / (Se() - Wn) * g && (U = 0.9999)), U !== ft && v.enabled) {
          if (bt = v.isActive = !!U && U < 1, Tt = !!ft && ft < 1, ut = bt !== Tt, Pt = ut || !!U != !!ft, v.direction = U > ft ? 1 : -1, v.progress = U, Pt && !be && (gt = U && !ft ? 0 : U === 1 ? 1 : ft === 1 ? 2 : 3, B && (mt = !ut && Y[gt + 1] !== "none" && Y[gt + 1] || Y[gt], Bt = r && (mt === "complete" || mt === "reset" || mt in r))), D && (ut || Bt) && (Bt || h || !r) && (Ee(D) ? D(v) : v.getTrailing(D).forEach(function(br) {
            return br.endAnimation();
          })), B || (lt && !be && !Vs ? (lt._dp._time - lt._start !== lt._time && lt.render(lt._dp._time - lt._start), lt.resetTo ? lt.resetTo("totalProgress", U, r._tTime / r._tDur) : (lt.vars.totalProgress = U, lt.invalidate().restart())) : r && r.totalProgress(U, !!(be && (ot || L)))), l) {
            if (L && _ && (qt.style[_ + P.os2] = xr), !$)
              Pe(Hn(Be + Ge * U));
            else if (Pt) {
              if (fe = !L && U > ft && tt + 1 > W && W + 1 >= Ii(A, P), m)
                if (!L && (bt || fe)) {
                  var he = Vi(l, !0), de = W - K;
                  Ic(l, Et, he.top + (P === ae ? de : 0) + ne, he.left + (P === ae ? 0 : de) + ne);
                } else
                  Ic(l, qt);
              mn(bt || fe ? Ie : ui), fi && U < 1 && bt || Pe(Be + (U === 1 && !fe ? Ge : 0));
            }
          }
          b && !at.tween && !be && !Vs && ve.restart(!0), a && (ut || x && U && (U < 1 || !ea)) && ks(a.targets).forEach(function(br) {
            return br.classList[bt || x ? "add" : "remove"](a.className);
          }), o && !B && !L && o(v), Pt && !be ? (B && (Bt && (mt === "complete" ? r.pause().totalProgress(1) : mt === "reset" ? r.restart(!0).pause() : mt === "restart" ? r.restart(!0) : r[mt]()), o && o(v)), (ut || !ea) && (u && ut && jr(v, u), V[gt] && jr(v, V[gt]), x && (U === 1 ? v.kill(!1, 1) : V[gt] = 0), ut || (gt = U === 1 ? 1 : 3, V[gt] && jr(v, V[gt]))), C && !bt && Math.abs(v.getVelocity()) > (qn(C) ? C : 2500) && (In(v.callbackAnimation), lt ? lt.progress(1) : In(r, mt === "reverse" ? 1 : !U, 1))) : B && o && !be && o(v);
        }
        if (xi) {
          var we = E ? W / E.duration() * (E._caScrollDist || 0) : W;
          Ji(we + (k._isFlipped ? 1 : 0)), xi(we);
        }
        Q && Q(-W / E.duration() * (E._caScrollDist || 0));
      }
    }, v.enable = function(L, z) {
      v.enabled || (v.enabled = !0, ce(A, "resize", Un), X || ce(A, "scroll", Qr), G && ce(s, "refreshInit", G), L !== !1 && (v.progress = et = 0, xt = Ot = J = wt()), z !== !1 && v.refresh());
    }, v.getTween = function(L) {
      return L && at ? at.tween : lt;
    }, v.setPositions = function(L, z, N, W) {
      if (E) {
        var rt = E.scrollTrigger, U = E.duration(), ft = rt.end - rt.start;
        L = rt.start + ft * L / U, z = rt.start + ft * z / U;
      }
      v.refresh(!1, !1, {
        start: Pc(L, N && !!v._startClamp),
        end: Pc(z, N && !!v._endClamp)
      }, W), v.update();
    }, v.adjustPinSpacing = function(L) {
      if (Vt && L) {
        var z = Vt.indexOf(P.d) + 1;
        Vt[z] = parseFloat(Vt[z]) + L + ne, Vt[1] = parseFloat(Vt[1]) + L + ne, mn(Vt);
      }
    }, v.disable = function(L, z) {
      if (L !== !1 && v.revert(!0, !0), v.enabled && (v.enabled = v.isActive = !1, z || lt && lt.pause(), $e = 0, It && (It.uncache = 1), G && le(s, "refreshInit", G), ve && (ve.pause(), at.tween && at.tween.kill() && (at.tween = 0)), !X)) {
        for (var N = dt.length; N--; )
          if (dt[N].scroller === A && dt[N] !== v)
            return;
        le(A, "resize", Un), X || le(A, "scroll", Qr);
      }
    }, v.kill = function(L, z) {
      v.disable(L, z), lt && !z && lt.kill(), c && delete Ua[c];
      var N = dt.indexOf(v);
      N >= 0 && dt.splice(N, 1), N === Ae && co > 0 && Ae--, N = 0, dt.forEach(function(W) {
        return W.scroller === v.scroller && (N = 1);
      }), N || Re || (v.scroll.rec = 0), r && (r.scrollTrigger = null, L && r.revert({
        kill: !1
      }), z || r.kill()), it && [it, Qt, k, St].forEach(function(W) {
        return W.parentNode && W.parentNode.removeChild(W);
      }), us === v && (us = 0), l && (It && (It.uncache = 1), N = 0, dt.forEach(function(W) {
        return W.pin === l && N++;
      }), N || (It.spacer = 0)), i.onKill && i.onKill(v);
    }, dt.push(v), v.enable(!1, !1), y && y(v), r && r.add && !Ct) {
      var I = v.update;
      v.update = function() {
        v.update = I, _t.cache++, K || tt || v.refresh();
      }, q.delayedCall(0.01, v.update), Ct = 0.01, K = tt = 0;
    } else
      v.refresh();
    l && Lp();
  }, s.register = function(i) {
    return rn || (q = i || Wf(), Xf() && window.document && s.enable(), rn = Vn), rn;
  }, s.defaults = function(i) {
    if (i)
      for (var r in i)
        Gs[r] = i[r];
    return Gs;
  }, s.disable = function(i, r) {
    Vn = 0, dt.forEach(function(o) {
      return o[r ? "kill" : "disable"](i);
    }), le(pt, "wheel", Qr), le(Mt, "scroll", Qr), clearInterval(Ws), le(Mt, "touchcancel", Li), le(Et, "touchstart", Li), qs(le, Mt, "pointerdown,touchstart,mousedown", Mc), qs(le, Mt, "pointerup,touchend,mouseup", Dc), Eo.kill(), Hs(le);
    for (var n = 0; n < _t.length; n += 3)
      Us(le, _t[n], _t[n + 1]), Us(le, _t[n], _t[n + 2]);
  }, s.enable = function() {
    if (pt = window, Mt = document, ei = Mt.documentElement, Et = Mt.body, q) {
      if (ks = q.utils.toArray, ns = q.utils.clamp, Ha = q.core.context || Li, ta = q.core.suppressOverwrites || Li, Fl = pt.history.scrollRestoration || "auto", Ga = pt.pageYOffset || 0, q.core.globals("ScrollTrigger", s), Et) {
        Vn = 1, gn = document.createElement("div"), gn.style.height = "100vh", gn.style.position = "absolute", Jf(), Ep(), jt.register(q), s.isTouch = jt.isTouch, rr = jt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Va = jt.isTouch === 1, ce(pt, "wheel", Qr), Nl = [pt, Mt, ei, Et], q.matchMedia ? (s.matchMedia = function(f) {
          var h = q.matchMedia(), d;
          for (d in f)
            h.add(d, f[d]);
          return h;
        }, q.addEventListener("matchMediaInit", function() {
          Qf(), Xl();
        }), q.addEventListener("matchMediaRevert", function() {
          return Kf();
        }), q.addEventListener("matchMedia", function() {
          Lr(0, 1), Hr("matchMedia");
        }), q.matchMedia().add("(orientation: portrait)", function() {
          return ra(), ra;
        })) : console.warn("Requires GSAP 3.11.0 or later"), ra(), ce(Mt, "scroll", Qr);
        var i = Et.hasAttribute("style"), r = Et.style, n = r.borderTopStyle, o = q.core.Animation.prototype, a, c;
        for (o.revert || Object.defineProperty(o, "revert", {
          value: function() {
            return this.time(-0.01, !0);
          }
        }), r.borderTopStyle = "solid", a = Vi(Et), ae.m = Math.round(a.top + ae.sc()) || 0, Ne.m = Math.round(a.left + Ne.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), i || (Et.setAttribute("style", ""), Et.removeAttribute("style")), Ws = setInterval(Ac, 250), q.delayedCall(0.5, function() {
          return Vs = 0;
        }), ce(Mt, "touchcancel", Li), ce(Et, "touchstart", Li), qs(ce, Mt, "pointerdown,touchstart,mousedown", Mc), qs(ce, Mt, "pointerup,touchend,mouseup", Dc), Wa = q.utils.checkPrefix("transform"), uo.push(Wa), rn = Se(), Eo = q.delayedCall(0.2, Lr).pause(), nn = [Mt, "visibilitychange", function() {
          var f = pt.innerWidth, h = pt.innerHeight;
          Mt.hidden ? (Ec = f, Cc = h) : (Ec !== f || Cc !== h) && Un();
        }, Mt, "DOMContentLoaded", Lr, pt, "load", Lr, pt, "resize", Un], Hs(ce), dt.forEach(function(f) {
          return f.enable(0, 1);
        }), c = 0; c < _t.length; c += 3)
          Us(le, _t[c], _t[c + 1]), Us(le, _t[c], _t[c + 2]);
      } else if (Mt) {
        var u = function f() {
          s.enable(), Mt.removeEventListener("DOMContentLoaded", f);
        };
        Mt.addEventListener("DOMContentLoaded", u);
      }
    }
  }, s.config = function(i) {
    "limitCallbacks" in i && (ea = !!i.limitCallbacks);
    var r = i.syncInterval;
    r && clearInterval(Ws) || (Ws = r) && setInterval(Ac, r), "ignoreMobileResize" in i && (Va = s.isTouch === 1 && i.ignoreMobileResize), "autoRefreshEvents" in i && (Hs(le) || Hs(ce, i.autoRefreshEvents || "none"), $f = (i.autoRefreshEvents + "").indexOf("resize") === -1);
  }, s.scrollerProxy = function(i, r) {
    var n = ze(i), o = _t.indexOf(n), a = Wr(n);
    ~o && _t.splice(o, a ? 6 : 2), r && (a ? Bi.unshift(pt, r, Et, r, ei, r) : Bi.unshift(n, r));
  }, s.clearMatchMedia = function(i) {
    dt.forEach(function(r) {
      return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
    });
  }, s.isInViewport = function(i, r, n) {
    var o = (Je(i) ? ze(i) : i).getBoundingClientRect(), a = o[n ? Ir : Br] * r || 0;
    return n ? o.right - a > 0 && o.left + a < pt.innerWidth : o.bottom - a > 0 && o.top + a < pt.innerHeight;
  }, s.positionInViewport = function(i, r, n) {
    Je(i) && (i = ze(i));
    var o = i.getBoundingClientRect(), a = o[n ? Ir : Br], c = r == null ? a / 2 : r in ko ? ko[r] * a : ~r.indexOf("%") ? parseFloat(r) * a / 100 : parseFloat(r) || 0;
    return n ? (o.left + c) / pt.innerWidth : (o.top + c) / pt.innerHeight;
  }, s.killAll = function(i) {
    if (dt.slice(0).forEach(function(n) {
      return n.vars.id !== "ScrollSmoother" && n.kill();
    }), i !== !0) {
      var r = Vr.killAll || [];
      Vr = {}, r.forEach(function(n) {
        return n();
      });
    }
  }, s;
}();
ct.version = "3.15.0";
ct.saveStyles = function(s) {
  return s ? ks(s).forEach(function(t) {
    if (t && t.style) {
      var e = Ze.indexOf(t);
      e >= 0 && Ze.splice(e, 5), Ze.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), q.core.getCache(t), Ha());
    }
  }) : Ze;
};
ct.revert = function(s, t) {
  return Xl(!s, t);
};
ct.create = function(s, t) {
  return new ct(s, t);
};
ct.refresh = function(s) {
  return s ? Un(!0) : (rn || ct.register()) && Lr(!0);
};
ct.update = function(s) {
  return ++_t.cache && ji(s === !0 ? 2 : 0);
};
ct.clearScrollMemory = Zf;
ct.maxScroll = function(s, t) {
  return Ii(s, t ? Ne : ae);
};
ct.getScrollFunc = function(s, t) {
  return vr(ze(s), t ? Ne : ae);
};
ct.getById = function(s) {
  return Ua[s];
};
ct.getAll = function() {
  return dt.filter(function(s) {
    return s.vars.id !== "ScrollSmoother";
  });
};
ct.isScrolling = function() {
  return !!wi;
};
ct.snapDirectional = Yl;
ct.addEventListener = function(s, t) {
  var e = Vr[s] || (Vr[s] = []);
  ~e.indexOf(t) || e.push(t);
};
ct.removeEventListener = function(s, t) {
  var e = Vr[s], i = e && e.indexOf(t);
  i >= 0 && e.splice(i, 1);
};
ct.batch = function(s, t) {
  var e = [], i = {}, r = t.interval || 0.016, n = t.batchMax || 1e9, o = function(u, f) {
    var h = [], d = [], l = q.delayedCall(r, function() {
      f(h, d), h = [], d = [];
    }).pause();
    return function(_) {
      h.length || l.restart(!0), h.push(_.trigger), d.push(_), n <= h.length && l.progress(1);
    };
  }, a;
  for (a in t)
    i[a] = a.substr(0, 2) === "on" && Ee(t[a]) && a !== "onRefreshInit" ? o(a, t[a]) : t[a];
  return Ee(n) && (n = n(), ce(ct, "refresh", function() {
    return n = t.batchMax();
  })), ks(s).forEach(function(c) {
    var u = {};
    for (a in i)
      u[a] = i[a];
    u.trigger = c, e.push(ct.create(u));
  }), e;
};
var $c = function(t, e, i, r) {
  return e > r ? t(r) : e < 0 && t(0), i > r ? (r - e) / (i - e) : i < 0 ? e / (e - i) : 1;
}, sa = function s(t, e) {
  e === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = e === !0 ? "auto" : e ? "pan-" + e + (jt.isTouch ? " pinch-zoom" : "") : "none", t === ei && s(Et, e);
}, Zs = {
  auto: 1,
  scroll: 1
}, Ip = function(t) {
  var e = t.event, i = t.target, r = t.axis, n = (e.changedTouches ? e.changedTouches[0] : e).target, o = n._gsap || q.core.getCache(n), a = Se(), c;
  if (!o._isScrollT || a - o._isScrollT > 2e3) {
    for (; n && n !== Et && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(Zs[(c = mi(n)).overflowY] || Zs[c.overflowX])); )
      n = n.parentNode;
    o._isScroll = n && n !== i && !Wr(n) && (Zs[(c = mi(n)).overflowY] || Zs[c.overflowX]), o._isScrollT = a;
  }
  (o._isScroll || r === "x") && (e.stopPropagation(), e._gsapAllow = !0);
}, eh = function(t, e, i, r) {
  return jt.create({
    target: t,
    capture: !0,
    debounce: !1,
    lockAxis: !0,
    type: e,
    onWheel: r = r && Ip,
    onPress: r,
    onDrag: r,
    onScroll: r,
    onEnable: function() {
      return i && ce(Mt, jt.eventTypes[0], Yc, !1, !0);
    },
    onDisable: function() {
      return le(Mt, jt.eventTypes[0], Yc, !0);
    }
  });
}, Bp = /(input|label|select|textarea)/i, zc, Yc = function(t) {
  var e = Bp.test(t.target.tagName);
  (e || zc) && (t._gsapAllow = !0, zc = e);
}, $p = function(t) {
  Mr(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
  var e = t, i = e.normalizeScrollX, r = e.momentum, n = e.allowNestedScroll, o = e.onRelease, a, c, u = ze(t.target) || ei, f = q.core.globals().ScrollSmoother, h = f && f.get(), d = rr && (t.content && ze(t.content) || h && t.content !== !1 && !h.smooth() && h.content()), l = vr(u, ae), _ = vr(u, Ne), p = 1, g = (jt.isTouch && pt.visualViewport ? pt.visualViewport.scale * pt.visualViewport.width : pt.outerWidth) / pt.innerWidth, w = 0, T = Ee(r) ? function() {
    return r(a);
  } : function() {
    return r || 2.8;
  }, x, b, m = eh(u, t.type, !0, n), M = function() {
    return b = !1;
  }, E = Li, C = Li, D = function() {
    c = Ii(u, ae), C = ns(rr ? 1 : 0, c), i && (E = ns(0, Ii(u, Ne))), x = $r;
  }, P = function() {
    d._gsap.y = Hn(parseFloat(d._gsap.y) + l.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", l.offset = l.cacheID = 0;
  }, B = function() {
    if (b) {
      requestAnimationFrame(M);
      var nt = Hn(a.deltaY / 2), st = C(l.v - nt);
      if (d && st !== l.v + l.offset) {
        l.offset = st - l.v;
        var v = Hn((parseFloat(d && d._gsap.y) || 0) - l.offset);
        d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + v + ", 0, 1)", d._gsap.y = v + "px", l.cacheID = _t.cache, ji();
      }
      return !0;
    }
    l.offset && P(), b = !0;
  }, A, R, X, $, V = function() {
    D(), A.isActive() && A.vars.scrollY > c && (l() > c ? A.progress(1) && l(c) : A.resetTo("scrollY", c));
  };
  return d && q.set(d, {
    y: "+=0"
  }), t.ignoreCheck = function(Y) {
    return rr && Y.type === "touchmove" && B() || p > 1.05 && Y.type !== "touchstart" || a.isGesturing || Y.touches && Y.touches.length > 1;
  }, t.onPress = function() {
    b = !1;
    var Y = p;
    p = Hn((pt.visualViewport && pt.visualViewport.scale || 1) / g), A.pause(), Y !== p && sa(u, p > 1.01 ? !0 : i ? !1 : "x"), R = _(), X = l(), D(), x = $r;
  }, t.onRelease = t.onGestureStart = function(Y, nt) {
    if (l.offset && P(), !nt)
      $.restart(!0);
    else {
      _t.cache++;
      var st = T(), v, G;
      i && (v = _(), G = v + st * 0.05 * -Y.velocityX / 0.227, st *= $c(_, v, G, Ii(u, Ne)), A.vars.scrollX = E(G)), v = l(), G = v + st * 0.05 * -Y.velocityY / 0.227, st *= $c(l, v, G, Ii(u, ae)), A.vars.scrollY = C(G), A.invalidate().duration(st).play(0.01), (rr && A.vars.scrollY >= c || v >= c - 1) && q.to({}, {
        onUpdate: V,
        duration: st
      });
    }
    o && o(Y);
  }, t.onWheel = function() {
    A._ts && A.pause(), Se() - w > 1e3 && (x = 0, w = Se());
  }, t.onChange = function(Y, nt, st, v, G) {
    if ($r !== x && D(), nt && i && _(E(v[2] === nt ? R + (Y.startX - Y.x) : _() + nt - v[1])), st) {
      l.offset && P();
      var H = G[2] === st, ht = H ? X + Y.startY - Y.y : l() + st - G[1], J = C(ht);
      H && ht !== J && (X += J - ht), l(J);
    }
    (st || nt) && ji();
  }, t.onEnable = function() {
    sa(u, i ? !1 : "x"), ct.addEventListener("refresh", V), ce(pt, "resize", V), l.smooth && (l.target.style.scrollBehavior = "auto", l.smooth = _.smooth = !1), m.enable();
  }, t.onDisable = function() {
    sa(u, !0), le(pt, "resize", V), ct.removeEventListener("refresh", V), m.kill();
  }, t.lockAxis = t.lockAxis !== !1, a = new jt(t), a.iOS = rr, rr && !l() && l(1), rr && q.ticker.add(Li), $ = a._dc, A = q.to(a, {
    ease: "power4",
    paused: !0,
    inherit: !1,
    scrollX: i ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: th(l, l(), function() {
        return A.pause();
      })
    },
    onUpdate: ji,
    onComplete: $.vars.onComplete
  }), a;
};
ct.sort = function(s) {
  if (Ee(s))
    return dt.sort(s);
  var t = pt.pageYOffset || 0;
  return ct.getAll().forEach(function(e) {
    return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + pt.innerHeight;
  }), dt.sort(s || function(e, i) {
    return (e.vars.refreshPriority || 0) * -1e6 + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((i.vars.containerAnimation ? 1e6 : i._sortY) + (i.vars.refreshPriority || 0) * -1e6);
  });
};
ct.observe = function(s) {
  return new jt(s);
};
ct.normalizeScroll = function(s) {
  if (typeof s > "u")
    return Le;
  if (s === !0 && Le)
    return Le.enable();
  if (s === !1) {
    Le && Le.kill(), Le = s;
    return;
  }
  var t = s instanceof jt ? s : $p(s);
  return Le && Le.target === t.target && Le.kill(), Wr(t.target) && (Le = t), t;
};
ct.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: Xa,
  _inputObserver: eh,
  _scrollers: _t,
  _proxies: Bi,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function() {
      wi || Hr("scrollStart"), wi = Se();
    },
    // a way to get the _refreshing value in Observer
    ref: function() {
      return be;
    }
  }
};
Wf() && q.registerPlugin(ct);
var Xc = "1.3.26";
function ih(s, t, e) {
  return Math.max(s, Math.min(t, e));
}
function zp(s, t, e) {
  return (1 - e) * s + e * t;
}
function Yp(s, t, e, i) {
  return zp(s, t, 1 - Math.exp(-e * i));
}
function Xp(s, t) {
  return (s % t + t) % t;
}
var Wp = class {
  constructor() {
    Z(this, "isRunning", !1);
    Z(this, "value", 0);
    Z(this, "from", 0);
    Z(this, "to", 0);
    Z(this, "currentTime", 0);
    Z(this, "lerp");
    Z(this, "duration");
    Z(this, "easing");
    Z(this, "onUpdate");
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
      const e = ih(0, this.currentTime / this.duration, 1);
      t = e >= 1;
      const i = t ? 1 : this.easing(e);
      this.value = this.from + (this.to - this.from) * i;
    } else this.lerp ? (this.value = Yp(this.value, this.to, this.lerp * 60, s), Math.round(this.value) === Math.round(this.to) && (this.value = this.to, t = !0)) : (this.value = this.to, t = !0);
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
  fromTo(s, t, { lerp: e, duration: i, easing: r, onStart: n, onUpdate: o }) {
    this.from = this.value = s, this.to = t, this.lerp = e, this.duration = i, this.easing = r, this.currentTime = 0, this.isRunning = !0, n?.(), this.onUpdate = o;
  }
};
function Vp(s, t) {
  let e;
  return function(...i) {
    clearTimeout(e), e = setTimeout(() => {
      e = void 0, s.apply(this, i);
    }, t);
  };
}
var Hp = class {
  constructor(s, t, { autoResize: e = !0, debounce: i = 250 } = {}) {
    Z(this, "width", 0);
    Z(this, "height", 0);
    Z(this, "scrollHeight", 0);
    Z(this, "scrollWidth", 0);
    Z(this, "debouncedResize");
    Z(this, "wrapperResizeObserver");
    Z(this, "contentResizeObserver");
    Z(this, "resize", () => {
      this.onWrapperResize(), this.onContentResize();
    });
    Z(this, "onWrapperResize", () => {
      this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
    });
    Z(this, "onContentResize", () => {
      this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth);
    });
    this.wrapper = s, this.content = t, e && (this.debouncedResize = Vp(this.resize, i), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
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
}, rh = class {
  constructor() {
    Z(this, "events", {});
  }
  /**
  * Emit an event with the given data
  * @param event Event name
  * @param args Data to pass to the event handlers
  */
  emit(s, ...t) {
    const e = this.events[s] || [];
    for (let i = 0, r = e.length; i < r; i++) e[i]?.(...t);
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
const qp = 100 / 6, er = { passive: !1 };
function Wc(s, t) {
  return s === 1 ? qp : s === 2 ? t : 1;
}
var Up = class {
  constructor(s, t = {
    wheelMultiplier: 1,
    touchMultiplier: 1
  }) {
    Z(this, "touchStart", {
      x: 0,
      y: 0
    });
    Z(this, "lastDelta", {
      x: 0,
      y: 0
    });
    Z(this, "window", {
      width: 0,
      height: 0
    });
    Z(this, "emitter", new rh());
    /**
    * Event handler for 'touchstart' event
    *
    * @param event Touch event
    */
    Z(this, "onTouchStart", (s) => {
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
    Z(this, "onTouchMove", (s) => {
      const { clientX: t, clientY: e } = s.targetTouches ? s.targetTouches[0] : s, i = -(t - this.touchStart.x) * this.options.touchMultiplier, r = -(e - this.touchStart.y) * this.options.touchMultiplier;
      this.touchStart.x = t, this.touchStart.y = e, this.lastDelta = {
        x: i,
        y: r
      }, this.emitter.emit("scroll", {
        deltaX: i,
        deltaY: r,
        event: s
      });
    });
    Z(this, "onTouchEnd", (s) => {
      this.emitter.emit("scroll", {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event: s
      });
    });
    /** Event handler for 'wheel' event */
    Z(this, "onWheel", (s) => {
      let { deltaX: t, deltaY: e, deltaMode: i } = s;
      const r = Wc(i, this.window.width), n = Wc(i, this.window.height);
      t *= r, e *= n, t *= this.options.wheelMultiplier, e *= this.options.wheelMultiplier, this.emitter.emit("scroll", {
        deltaX: t,
        deltaY: e,
        event: s
      });
    });
    Z(this, "onWindowResize", () => {
      this.window = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    });
    this.element = s, this.options = t, window.addEventListener("resize", this.onWindowResize), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, er), this.element.addEventListener("touchstart", this.onTouchStart, er), this.element.addEventListener("touchmove", this.onTouchMove, er), this.element.addEventListener("touchend", this.onTouchEnd, er);
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
    this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize), this.element.removeEventListener("wheel", this.onWheel, er), this.element.removeEventListener("touchstart", this.onTouchStart, er), this.element.removeEventListener("touchmove", this.onTouchMove, er), this.element.removeEventListener("touchend", this.onTouchEnd, er);
  }
};
const Vc = (s) => Math.min(1, 1.001 - 2 ** (-10 * s));
var Gp = class {
  constructor({ wrapper: s = window, content: t = document.documentElement, eventsTarget: e = s, smoothWheel: i = !0, syncTouch: r = !1, syncTouchLerp: n = 0.075, touchInertiaExponent: o = 1.7, duration: a, easing: c, lerp: u = 0.1, infinite: f = !1, orientation: h = "vertical", gestureOrientation: d = h === "horizontal" ? "both" : "vertical", touchMultiplier: l = 1, wheelMultiplier: _ = 1, autoResize: p = !0, prevent: g, virtualScroll: w, overscroll: T = !0, autoRaf: x = !1, anchors: b = !1, autoToggle: m = !1, allowNestedScroll: M = !1, __experimental__naiveDimensions: E = !1, naiveDimensions: C = E, stopInertiaOnNavigate: D = !1, respectReducedMotion: P = !0 } = {}) {
    Z(this, "_isScrolling", !1);
    Z(this, "_isStopped", !1);
    Z(this, "_isLocked", !1);
    Z(this, "_preventNextNativeScrollEvent", !1);
    Z(this, "_resetVelocityTimeout", null);
    Z(this, "_rafId", null);
    Z(this, "_isDraggingSelection", !1);
    Z(this, "reducedMotionMediaQuery", window.matchMedia("(prefers-reduced-motion: reduce)"));
    /**
    * Whether or not the user is touching the screen
    */
    Z(this, "isTouching");
    /**
    * Whether or not the device is running iOS
    */
    Z(this, "isIos");
    /**
    * The time in ms since the lenis instance was created
    */
    Z(this, "time", 0);
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
    Z(this, "userData", {});
    /**
    * The last velocity of the scroll
    */
    Z(this, "lastVelocity", 0);
    /**
    * The current velocity of the scroll
    */
    Z(this, "velocity", 0);
    /**
    * The direction of the scroll
    */
    Z(this, "direction", 0);
    /**
    * The options passed to the lenis instance
    */
    Z(this, "options");
    /**
    * The target scroll value
    */
    Z(this, "targetScroll");
    /**
    * The animated scroll value
    */
    Z(this, "animatedScroll");
    Z(this, "animate", new Wp());
    Z(this, "emitter", new rh());
    Z(this, "dimensions");
    Z(this, "virtualScroll");
    Z(this, "onScrollEnd", (s) => {
      s instanceof CustomEvent || (this.isScrolling === "smooth" || this.isScrolling === !1) && s.stopPropagation();
    });
    Z(this, "dispatchScrollendEvent", () => {
      this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
        bubbles: this.options.wrapper === window,
        detail: { lenisScrollEnd: !0 }
      }));
    });
    Z(this, "onTransitionEnd", (s) => {
      s.propertyName?.includes("overflow") && s.target === this.rootElement && this.checkOverflow();
    });
    Z(this, "onClick", (s) => {
      const t = s.composedPath().filter((i) => i instanceof HTMLAnchorElement && i.href).map((i) => new URL(i.href)), e = new URL(window.location.href);
      if (this.options.anchors) {
        const i = t.find((r) => e.host === r.host && e.pathname === r.pathname && r.hash);
        if (i) {
          const r = typeof this.options.anchors == "object" && this.options.anchors ? this.options.anchors : void 0, n = decodeURIComponent(i.hash);
          this.scrollTo(n, r);
          return;
        }
      }
      if (this.options.stopInertiaOnNavigate && t.some((i) => e.host === i.host && e.pathname !== i.pathname)) {
        this.reset();
        return;
      }
    });
    Z(this, "onPointerDown", (s) => {
      s.button === 1 && this.reset();
    });
    Z(this, "onVirtualScroll", (s) => {
      if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(s) === !1) return;
      const { deltaX: t, deltaY: e, event: i } = s;
      if (this.emitter.emit("virtual-scroll", {
        deltaX: t,
        deltaY: e,
        event: i
      }), i.ctrlKey || i.lenisStopPropagation) return;
      const r = i.type.includes("touch"), n = i.type.includes("wheel");
      if (r && this.isIos && (i.type === "touchstart" && (this._isDraggingSelection = this.isTouchOnSelectionHandle(i)), this._isDraggingSelection)) {
        i.type === "touchend" && (this._isDraggingSelection = !1);
        return;
      }
      this.isTouching = i.type === "touchstart" || i.type === "touchmove";
      const o = t === 0 && e === 0;
      if (this.options.syncTouch && r && i.type === "touchstart" && o && !this.isStopped && !this.isLocked) {
        this.reset();
        return;
      }
      const a = this.options.gestureOrientation === "vertical" && e === 0 || this.options.gestureOrientation === "horizontal" && t === 0;
      if (o || a) return;
      let c = i.composedPath();
      c = c.slice(0, c.indexOf(this.rootElement));
      const u = this.options.prevent, f = Math.abs(t) >= Math.abs(e) ? "horizontal" : "vertical";
      if (c.find((_) => _ instanceof HTMLElement && (typeof u == "function" && u?.(_) || _.hasAttribute?.("data-lenis-prevent") || f === "vertical" && _.hasAttribute?.("data-lenis-prevent-vertical") || f === "horizontal" && _.hasAttribute?.("data-lenis-prevent-horizontal") || r && _.hasAttribute?.("data-lenis-prevent-touch") || n && _.hasAttribute?.("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.hasNestedScroll(_, {
        deltaX: t,
        deltaY: e
      })))) return;
      if (this.isStopped || this.isLocked) {
        i.cancelable && i.preventDefault();
        return;
      }
      if (!(this.options.syncTouch && r || this.options.smoothWheel && n)) {
        this.isScrolling = "native", this.animate.stop(), i.lenisStopPropagation = !0;
        return;
      }
      let h = e;
      this.options.gestureOrientation === "both" ? h = Math.abs(e) > Math.abs(t) ? e : t : this.options.gestureOrientation === "horizontal" && (h = t), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && e > 0 || this.animatedScroll === this.limit && e < 0)) && (i.lenisStopPropagation = !0), i.cancelable && i.preventDefault();
      const d = r && this.options.syncTouch, l = r && i.type === "touchend";
      l && (h = Math.sign(h) * Math.abs(this.velocity) ** this.options.touchInertiaExponent), this.scrollTo(this.targetScroll + h, {
        programmatic: !1,
        ...d ? { lerp: l ? this.options.syncTouchLerp : 1 } : {
          lerp: this.options.lerp,
          duration: this.options.duration,
          easing: this.options.easing
        }
      });
    });
    Z(this, "onNativeScroll", () => {
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
    Z(this, "raf", (s) => {
      const t = s - (this.time || s);
      this.time = s, this.animate.advance(t * 1e-3), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf));
    });
    window.lenisVersion = Xc, window.lenis || (window.lenis = {}), window.lenis.version = Xc, h === "horizontal" && (window.lenis.horizontal = !0), r === !0 && (window.lenis.touch = !0), this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent), (!s || s === document.documentElement) && (s = window), typeof a == "number" && typeof c != "function" ? c = Vc : typeof c == "function" && typeof a != "number" && (a = 1), this.options = {
      wrapper: s,
      content: t,
      eventsTarget: e,
      smoothWheel: i,
      syncTouch: r,
      syncTouchLerp: n,
      touchInertiaExponent: o,
      duration: a,
      easing: c,
      lerp: u,
      infinite: f,
      gestureOrientation: d,
      orientation: h,
      touchMultiplier: l,
      wheelMultiplier: _,
      autoResize: p,
      prevent: g,
      virtualScroll: w,
      overscroll: T,
      autoRaf: x,
      anchors: b,
      autoToggle: m,
      allowNestedScroll: M,
      naiveDimensions: C,
      stopInertiaOnNavigate: D,
      respectReducedMotion: P
    }, this.dimensions = new Hp(s, t, { autoResize: p }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, { capture: !0 }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener("click", this.onClick), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown), this.virtualScroll = new Up(e, {
      touchMultiplier: l,
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
    const i = t.getRangeAt(0).getClientRects();
    if (i.length === 0) return !1;
    const r = i[0], n = i[i.length - 1], o = 40, a = Math.hypot(e.clientX - r.left, e.clientY - r.top) <= o, c = Math.hypot(e.clientX - n.right, e.clientY - n.bottom) <= o;
    return a || c;
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
  scrollTo(s, { offset: t = 0, immediate: e = !1, lock: i = !1, programmatic: r = !0, lerp: n = r ? this.options.lerp : void 0, duration: o = r ? this.options.duration : void 0, easing: a = r ? this.options.easing : void 0, onStart: c, onComplete: u, force: f = !1, userData: h } = {}) {
    if (this.prefersReducedMotion && (r ? e = !0 : (n = 1, o = void 0, a = void 0)), (this.isStopped || this.isLocked) && !f) return;
    let d = s, l = t;
    if (typeof d == "string" && [
      "top",
      "left",
      "start",
      "#"
    ].includes(d)) d = 0;
    else if (typeof d == "string" && [
      "bottom",
      "right",
      "end"
    ].includes(d)) d = this.limit;
    else {
      let _ = null;
      if (typeof d == "string" ? (_ = d.startsWith("#") ? document.getElementById(d.slice(1)) : document.querySelector(d), _ || (d === "#top" ? d = 0 : console.warn("Lenis: Target not found", d))) : d instanceof HTMLElement && d?.nodeType && (_ = d), _) {
        if (this.options.wrapper !== window) {
          const b = this.rootElement.getBoundingClientRect();
          l -= this.isHorizontal ? b.left : b.top;
        }
        const p = _.getBoundingClientRect(), g = getComputedStyle(_), w = this.isHorizontal ? Number.parseFloat(g.scrollMarginLeft) : Number.parseFloat(g.scrollMarginTop), T = getComputedStyle(this.rootElement), x = this.isHorizontal ? Number.parseFloat(T.scrollPaddingLeft) : Number.parseFloat(T.scrollPaddingTop);
        d = (this.isHorizontal ? p.left : p.top) + this.animatedScroll - (Number.isNaN(w) ? 0 : w) - (Number.isNaN(x) ? 0 : x);
      }
    }
    if (typeof d == "number") {
      if (d += l, this.options.infinite) {
        if (r) {
          this.targetScroll = this.animatedScroll = this.scroll;
          const _ = d - this.animatedScroll;
          _ > this.limit / 2 ? d -= this.limit : _ < -this.limit / 2 && (d += this.limit);
        }
      } else d = ih(0, d, this.limit);
      if (d === this.targetScroll) {
        c?.(this), u?.(this);
        return;
      }
      if (this.userData = h ?? {}, e) {
        this.animatedScroll = this.targetScroll = d, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), u?.(this), this.userData = {}, requestAnimationFrame(() => {
          this.dispatchScrollendEvent();
        });
        return;
      }
      r || (this.targetScroll = d), typeof o == "number" && typeof a != "function" ? a = Vc : typeof a == "function" && typeof o != "number" && (o = 1), this.animate.fromTo(this.animatedScroll, d, {
        duration: o,
        easing: a,
        lerp: n,
        onStart: () => {
          i && (this.isLocked = !0), this.isScrolling = "smooth", c?.(this);
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
  hasNestedScroll(s, { deltaX: t, deltaY: e }) {
    const i = Date.now();
    s._lenis || (s._lenis = {});
    const r = s._lenis;
    let n, o, a, c, u, f, h, d, l, _;
    if (i - (r.time ?? 0) > 2e3) {
      r.time = Date.now();
      const M = window.getComputedStyle(s);
      if (r.computedStyle = M, n = [
        "auto",
        "overlay",
        "scroll"
      ].includes(M.overflowX), o = [
        "auto",
        "overlay",
        "scroll"
      ].includes(M.overflowY), u = ["auto"].includes(M.overscrollBehaviorX), f = ["auto"].includes(M.overscrollBehaviorY), r.hasOverflowX = n, r.hasOverflowY = o, !(n || o)) return !1;
      h = s.scrollWidth, d = s.scrollHeight, l = s.clientWidth, _ = s.clientHeight, a = h > l, c = d > _, r.isScrollableX = a, r.isScrollableY = c, r.scrollWidth = h, r.scrollHeight = d, r.clientWidth = l, r.clientHeight = _, r.hasOverscrollBehaviorX = u, r.hasOverscrollBehaviorY = f;
    } else
      a = r.isScrollableX, c = r.isScrollableY, n = r.hasOverflowX, o = r.hasOverflowY, h = r.scrollWidth, d = r.scrollHeight, l = r.clientWidth, _ = r.clientHeight, u = r.hasOverscrollBehaviorX, f = r.hasOverscrollBehaviorY;
    if (!(n && a || o && c)) return !1;
    const p = Math.abs(t) >= Math.abs(e) ? "horizontal" : "vertical";
    let g, w, T, x, b, m;
    if (p === "horizontal")
      g = Math.round(s.scrollLeft), w = h - l, T = t, x = n, b = a, m = u;
    else if (p === "vertical")
      g = Math.round(s.scrollTop), w = d - _, T = e, x = o, b = c, m = f;
    else return !1;
    return !m && (g >= w || g <= 0) ? !0 : (T > 0 ? g < w : g > 0) && x && b;
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
    return this.options.infinite ? Xp(this.animatedScroll, this.limit) : this.animatedScroll;
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
const Kt = (s, t = document) => t.querySelector(s), Ns = (s, t = document) => [...t.querySelectorAll(s)], Hc = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function jp(s) {
  const t = Kt("[data-facetas-panel]", s), e = Kt("[data-facetas-abrir]", s);
  if (!t || !e) return;
  let i = null;
  const r = () => {
    i = document.activeElement, t.classList.add("is-on"), e.setAttribute("aria-expanded", "true"), document.documentElement.style.overflow = "hidden", window.DropScentsLenis?.stop(), nh(s), Kt(".faceta > summary", t)?.focus();
  }, n = () => {
    t.classList.remove("is-on"), e.setAttribute("aria-expanded", "false"), document.documentElement.style.overflow = "", window.DropScentsLenis?.start(), i?.focus();
  };
  return e.addEventListener("click", () => {
    t.classList.contains("is-on") ? n() : r();
  }), Ns("[data-facetas-cerrar]", t).forEach((o) => o.addEventListener("click", n)), t.__cerrar = n, n;
}
typeof document < "u" && !document.__facetasEsc && (document.__facetasEsc = !0, document.addEventListener("keydown", (s) => {
  if (s.key !== "Escape") return;
  document.querySelector("[data-facetas-panel].is-on")?.__cerrar?.();
}));
function Kp(s, t) {
  Ns("[data-precio]", s).forEach((e) => {
    const i = Kt('[data-precio-rango="min"]', e), r = Kt('[data-precio-rango="max"]', e), n = Kt('[data-precio-campo="min"]', e), o = Kt('[data-precio-campo="max"]', e), a = Number(e.dataset.tope) || 0;
    if (!i || !r) return;
    const c = () => {
      e.style.setProperty("--desde", i.value), e.style.setProperty("--hasta", r.value);
    }, u = (h) => {
      let d = Number(i.value), l = Number(r.value);
      d > l && (h === "min" ? l = d : d = l, i.value = String(d), r.value = String(l)), n && (n.value = d === 0 ? "" : String(d)), o && (o.value = l === a ? "" : String(l)), c();
    };
    i.addEventListener("input", () => u("min")), r.addEventListener("input", () => u("max")), i.addEventListener("change", t), r.addEventListener("change", t);
    const f = () => {
      const h = n.value === "" ? 0 : Math.max(0, Math.min(a, Number(n.value))), d = o.value === "" ? a : Math.max(0, Math.min(a, Number(o.value)));
      i.value = String(Math.min(h, d)), r.value = String(Math.max(h, d)), c();
    };
    [n, o].forEach((h) => {
      h && (h.addEventListener("input", f), h.addEventListener("change", t));
    }), u("init");
  });
}
let oa = 0;
async function ho(s, t, e) {
  const i = ++oa, r = Kt("[data-facetas-resultados]", e);
  if (!r) {
    window.location.href = s;
    return;
  }
  r.classList.add("facetas-cargando");
  try {
    const [n, o] = s.split("#"), a = n.includes("?") ? "&" : "?", c = await fetch(`${n}${a}section_id=${encodeURIComponent(t)}`);
    if (!c.ok) throw new Error(c.status);
    const u = await c.text();
    if (i !== oa) return;
    const f = new DOMParser().parseFromString(u, "text/html").querySelector("[data-facetas-resultados]");
    if (!f) throw new Error("la respuesta no trae resultados");
    const h = Qp(e);
    r.innerHTML = f.innerHTML, history.pushState({ facetas: !0 }, "", s), sh(e), Zp(e, h), h.abierto && nh(e);
    const d = Kt("[data-facetas-rejilla]", e) || r, l = window.scrollY + d.getBoundingClientRect().top - 140;
    l < window.scrollY && (window.DropScentsLenis ? window.DropScentsLenis.scrollTo(l, { duration: Hc ? 0 : 0.8 }) : window.scrollTo({ top: l, behavior: Hc ? "auto" : "smooth" })), o && (location.hash = o);
  } catch {
    window.location.href = s;
  } finally {
    i === oa && r.classList.remove("facetas-cargando");
  }
}
function Qp(s) {
  const t = Kt("[data-facetas-panel]", s), e = Kt(".panel-filtros__cuerpo", s), i = document.activeElement;
  return {
    abierto: !!t?.classList.contains("is-on"),
    desplegadas: Ns(".faceta", s).map((r) => r.open),
    scroll: e ? e.scrollTop : 0,
    /* El foco se devuelve por nombre+valor, no por referencia: el elemento
       que tenia el foco ya no existe despues del reemplazo. */
    foco: i && s.contains(i) && i.name ? { name: i.name, value: i.value } : null
  };
}
function Zp(s, t) {
  if (!t) return;
  const e = Kt("[data-facetas-panel]", s);
  t.abierto && e && (e.classList.add("is-on"), Kt("[data-facetas-abrir]", s)?.setAttribute("aria-expanded", "true")), Ns(".faceta", s).forEach((r, n) => {
    t.desplegadas[n] !== void 0 && (r.open = t.desplegadas[n]);
  });
  const i = Kt(".panel-filtros__cuerpo", s);
  i && (i.scrollTop = t.scroll), t.foco && (s.querySelector(
    `[name="${CSS.escape(t.foco.name)}"][value="${CSS.escape(t.foco.value)}"]`
  ) || s.querySelector(`[name="${CSS.escape(t.foco.name)}"]`))?.focus({ preventScroll: !0 });
}
function nh(s) {
  const t = Kt("[data-facetas-cuenta]", s)?.textContent.trim(), e = Kt('[data-facetas-form] button[type="submit"]', s);
  t && e && (e.textContent = t);
}
function aa(s) {
  const t = new FormData(s), e = new URLSearchParams();
  for (const [n, o] of t.entries())
    String(o).trim() !== "" && e.append(n, o);
  const i = s.getAttribute("action") || window.location.pathname, r = e.toString();
  return r ? `${i}?${r}` : i;
}
function sh(s) {
  const t = Kt("[data-facetas]", s), e = s.dataset.seccionId || t?.dataset.seccion;
  if (!e) return;
  const i = jp(s), r = Kt("[data-facetas-form]", s), n = () => {
    r && ho(aa(r), e, s);
  };
  r && (r.addEventListener("change", (a) => {
    a.target.matches('input[type="checkbox"], input[type="number"]') && n();
  }), r.addEventListener("submit", (a) => {
    a.preventDefault(), n(), window.innerWidth < 900 && i?.();
  }), Kp(r, n));
  const o = Kt("[data-facetas-orden]", s);
  o && (o.addEventListener("change", (a) => {
    a.preventDefault(), ho(aa(o), e, s);
  }), o.addEventListener("submit", (a) => {
    a.preventDefault(), ho(aa(o), e, s);
  })), s.addEventListener("click", Jp);
}
function Jp(s) {
  const t = s.target.closest("[data-facetas-enlace]");
  if (!t || s.metaKey || s.ctrlKey || s.shiftKey || t.target === "_blank") return;
  const e = t.closest("[data-seccion-id]");
  e && (s.preventDefault(), ho(t.href, e.dataset.seccionId, e));
}
function t_(s = document) {
  Ns("[data-seccion-id]", s).forEach((t) => {
    Kt("[data-facetas-resultados]", t) && sh(t);
  }), window.__facetasPop || (window.__facetasPop = !0, window.addEventListener("popstate", (t) => {
    (t.state?.facetas || Kt("[data-facetas-resultados]")) && window.location.reload();
  }));
}
const Wl = window.matchMedia("(prefers-reduced-motion: reduce)").matches, qe = (s, t = document) => t.querySelector(s), ye = (s, t = document) => [...t.querySelectorAll(s)], e_ = '[data-chatty-widget="trigger"], #Avada-FAQ_WidgetTrigger', i_ = ".Avada-Faqs_Button.opened, .Avada-Faqs_Button--opened";
function qc() {
  if (qe(i_)) return !0;
  const s = qe(e_);
  return s ? (s.click(), !0) : typeof window.ChattyJS?.openWidget == "function" ? (window.ChattyJS.openWidget(), !0) : typeof window.avadaFaqTrigger == "function" ? (window.avadaFaqTrigger(), !0) : !1;
}
function Uc() {
  return typeof window.DropScentsChat == "function" ? (window.DropScentsChat(), !0) : window.$crisp ? (window.$crisp.push(["do", "chat:open"]), !0) : window.Tawk_API?.maximize ? (window.Tawk_API.maximize(), !0) : window.tidioChatApi?.open ? (window.tidioChatApi.open(), !0) : window.Intercom ? (window.Intercom("show"), !0) : window.zE ? (window.zE("messenger", "open"), !0) : window.Shopify?.chat?.open ? (window.Shopify.chat.open(), !0) : !1;
}
function r_() {
  if (typeof window.DropScentsChat == "function") {
    window.DropScentsChat();
    return;
  }
  if (qc() || Uc()) return;
  let s = 0;
  const t = setInterval(() => {
    s += 1, (qc() || Uc() || s > 24) && (clearInterval(t), s > 24 && n_());
  }, 250);
}
let Gc = 0;
function n_() {
  const s = window.DropScentsTextos || {};
  let t = qe(".toast");
  if (!t) {
    t = document.createElement("div"), t.className = "toast", t.setAttribute("role", "status");
    const e = document.documentElement.dataset.instagram;
    if (t.textContent = s.chatFallo || "El chat no está respondiendo ahora mismo.", e) {
      const i = document.createElement("a");
      i.href = e, i.target = "_blank", i.rel = "noopener", i.textContent = s.chatInstagram || "Escríbenos por Instagram", t.append(" ", i);
    }
    document.body.appendChild(t);
  }
  requestAnimationFrame(() => t.classList.add("is-on")), clearTimeout(Gc), Gc = setTimeout(() => t.classList.remove("is-on"), 6e3);
}
function s_() {
  document.addEventListener("click", (s) => {
    s.target.closest("[data-chat]") && (s.preventDefault(), qe("#menu-lateral:not([hidden]) [data-drawer-cerrar]")?.click(), r_());
  });
}
function o_(s = document) {
  ye("[data-galeria]", s).forEach((t) => {
    const e = ye(".card__slide", t);
    if (e.length < 2) return;
    let i = 0;
    const r = (n) => {
      i = (n + e.length) % e.length, e.forEach((o, a) => o.classList.toggle("is-on", a === i));
    };
    ye("[data-galeria-paso]", t).forEach((n) => {
      n.addEventListener("click", (o) => {
        o.preventDefault(), o.stopPropagation(), r(i + Number(n.dataset.galeriaPaso));
      });
    });
  });
}
function a_() {
  const s = qe("#menu-lateral");
  if (!s) return;
  const t = qe(".drawer__panel", s), e = qe("[data-drawer-abrir]");
  let i = null;
  const r = () => ye('a[href], button:not([disabled]), select, input, [tabindex]:not([tabindex="-1"])', t).filter((a) => a.offsetParent !== null);
  function n() {
    i = document.activeElement, s.hidden = !1, requestAnimationFrame(() => s.classList.add("is-on")), e?.setAttribute("aria-expanded", "true"), document.documentElement.style.overflow = "hidden", window.DropScentsLenis?.stop(), r()[0]?.focus();
  }
  function o() {
    s.classList.remove("is-on"), e?.setAttribute("aria-expanded", "false"), document.documentElement.style.overflow = "", window.DropScentsLenis?.start();
    const a = () => {
      s.hidden = !0;
    };
    Wl ? a() : setTimeout(a, 420), i?.focus();
  }
  e?.addEventListener("click", n), ye("[data-drawer-cerrar]", s).forEach((a) => a.addEventListener("click", o)), ye("a", t).forEach((a) => a.addEventListener("click", o)), document.addEventListener("keydown", (a) => {
    if (s.hidden) return;
    if (a.key === "Escape") {
      o();
      return;
    }
    if (a.key !== "Tab") return;
    const c = r();
    if (!c.length) return;
    const u = c[0], f = c[c.length - 1];
    a.shiftKey && document.activeElement === u ? (a.preventDefault(), f.focus()) : !a.shiftKey && document.activeElement === f && (a.preventDefault(), u.focus());
  });
}
function l_(s = document) {
  ye("[data-carrusel]", s).forEach((t) => {
    const e = qe("[data-carrusel-pista]", t);
    if (!e) return;
    const i = ye("[data-carrusel-paso]", t), r = qe("[data-carrusel-progreso]", t), n = () => {
      const a = e.firstElementChild;
      if (!a) return e.clientWidth;
      const c = parseFloat(getComputedStyle(e).columnGap) || 0;
      return a.getBoundingClientRect().width + c;
    };
    i.forEach((a) => {
      a.addEventListener("click", () => {
        e.scrollBy({
          left: n() * Number(a.dataset.carruselPaso),
          behavior: Wl ? "auto" : "smooth"
        });
      });
    });
    function o() {
      const a = e.scrollWidth - e.clientWidth, c = e.scrollLeft;
      if (i.forEach((u) => {
        const f = Number(u.dataset.carruselPaso);
        u.disabled = f < 0 ? c <= 2 : c >= a - 2;
      }), r && a > 0) {
        const u = e.clientWidth / e.scrollWidth;
        r.style.width = `${Math.max(u * 100, 8)}%`, r.style.transform = `translateX(${c / a * (100 / Math.max(u, 0.08) - 100)}%)`;
      }
    }
    e.addEventListener("scroll", o, { passive: !0 }), window.addEventListener("resize", o), o();
  });
}
function c_(s = document) {
  Wl || window.matchMedia("(hover: hover) and (pointer: fine)").matches && ye("[data-indice]", s).forEach((t) => {
    const e = qe("[data-indice-vista]", t), i = ye("[data-indice-fila]", t);
    if (!e || !i.length) return;
    const r = ye(".indice__vista-img", e), n = e.parentElement, o = Nt.quickTo(e, "x", { duration: 0.5, ease: "power3.out" }), a = Nt.quickTo(e, "y", { duration: 0.5, ease: "power3.out" }), c = (u) => {
      const f = n.getBoundingClientRect(), h = u.clientX - f.left - e.offsetWidth / 2, d = u.clientY - f.top - e.offsetHeight / 2;
      o(Math.min(Math.max(h, 0), f.width - e.offsetWidth)), a(Math.min(Math.max(d, 0), f.height - e.offsetHeight));
    };
    i.forEach((u) => {
      u.addEventListener("pointerenter", (f) => {
        const h = Number(u.dataset.i);
        r.forEach((d, l) => d.classList.toggle("is-on", l === h)), e.classList.add("is-on"), c(f);
      }), u.addEventListener("pointermove", c);
    }), t.addEventListener("pointerleave", () => e.classList.remove("is-on"));
  });
}
function u_(s = document) {
  const t = qe("[data-pdp]", s);
  if (!t) return;
  const e = ye(".pdp__img", t), i = ye("[data-pdp-mini]", t), r = qe("[data-pdp-precio]", t), n = qe("[data-pdp-antes]", t), o = window.DropScentsTextos?.formatoDinero || "";
  function a(c) {
    c < 0 || c >= e.length || (e.forEach((u, f) => u.classList.toggle("is-on", f === c)), i.forEach((u, f) => u.classList.toggle("is-on", f === c)));
  }
  i.forEach((c) => c.addEventListener("click", () => a(Number(c.dataset.pdpMini)))), ye(".pres input", t).forEach((c) => {
    c.addEventListener("change", () => {
      if (r && c.dataset.precio && (r.textContent = jc(Number(c.dataset.precio), o)), n) {
        const f = Number(c.dataset.antes || 0), h = Number(c.dataset.precio || 0);
        f > h ? (n.textContent = jc(f, o), n.hidden = !1) : n.hidden = !0;
      }
      const u = Number(c.dataset.imagen);
      !Number.isNaN(u) && u >= 0 && a(u);
    });
  });
}
function jc(s, t) {
  const e = Number(s) / 100, i = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), r = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
  return t ? t.replace(/\{\{\s*(\w+)\s*\}\}/g, (n, o) => o.includes("no_decimals") ? r.format(Math.round(e)) : i.format(e)) : `$${i.format(e)}`;
}
function f_(s = document) {
  ye(".cantidad", s).forEach((t) => {
    const e = qe(".cantidad__i", t);
    e && ye("[data-cantidad]", t).forEach((i) => {
      i.addEventListener("click", () => {
        const r = Number(e.min || 0), n = Math.max(r, (Number(e.value) || 0) + Number(i.dataset.cantidad));
        e.value = String(n), e.dispatchEvent(new Event("change", { bubbles: !0 }));
      });
    });
  });
}
function h_(s = document) {
  ye("[data-envia-al-cambiar]", s).forEach((t) => {
    t.closest("[data-facetas-orden]") || t.addEventListener("change", () => t.form?.submit());
  });
}
function oh(s = document) {
  t_(s), o_(s), l_(s), c_(s), u_(s), f_(s), h_(s);
}
const d_ = (s, t = document) => t.querySelector(s), ah = (s, t = document) => [...t.querySelectorAll(s)], p_ = 80, Po = /* @__PURE__ */ new WeakMap();
function lh(s = document) {
  ah("[data-recorrido]", s).forEach((t) => {
    if (Po.has(t)) return;
    const e = d_("[data-carrusel-pista]", t), i = t.closest(".carrusel-sec");
    if (!e || !i) return;
    const r = Nt.matchMedia();
    Po.set(t, r), r.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
      const n = () => Math.max(e.scrollWidth - e.clientWidth, 0);
      if (n() < p_) return;
      i.classList.add("is-recorrido");
      const o = () => Math.round(
        parseFloat(getComputedStyle(document.body).paddingTop) || 0
      ), a = (u) => {
        e.scrollLeft = u.progress * n();
      }, c = ct.create({
        trigger: i,
        start: () => `top ${o()}`,
        end: () => `+=${Math.max(n(), 1)}`,
        pin: !0,
        anticipatePin: 1,
        scrub: !0,
        invalidateOnRefresh: !0,
        onUpdate: a,
        onRefresh: a
      });
      return () => {
        c.kill(), i.classList.remove("is-recorrido"), e.scrollLeft = 0;
      };
    });
  });
}
function __(s = document) {
  ah("[data-recorrido]", s).forEach((t) => {
    const e = Po.get(t);
    e && (e.revert(), Po.delete(t));
  });
}
/*!
 * SplitText 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2026, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */
let Bn, $n, Kc = typeof Symbol == "function" ? Symbol() : "_split", Ka, g_ = () => Ka || Vl.register(window.gsap), Qc = typeof Intl < "u" && "Segmenter" in Intl ? new Intl.Segmenter() : 0, Ms = (s) => s ? typeof s == "string" ? Ms(document.querySelectorAll(s)) : "length" in s ? Array.from(s).reduce((t, e) => (typeof e == "string" ? t.push(...Ms(e)) : t.push(e), t), []) : [s] : [], Zc = (s) => Ms(s).filter((t) => t && t.nodeType === 1), Qa = [], la = function() {
}, m_ = { add: (s) => s() }, y_ = /\s+/g, Jc = new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.", "gu"), Mo = { left: 0, top: 0, width: 0, height: 0 }, v_ = (s, t) => {
  for (; ++t < s.length && s[t] === Mo; )
    ;
  return s[t] || Mo;
}, tu = ({ element: s, html: t, ariaL: e, ariaH: i }) => {
  s.innerHTML = t, e ? s.setAttribute("aria-label", e) : s.removeAttribute("aria-label"), i ? s.setAttribute("aria-hidden", i) : s.removeAttribute("aria-hidden");
}, eu = (s, t) => {
  if (t) {
    let e = new Set(s.join("").match(t) || Qa), i = s.length, r, n, o, a;
    if (e.size)
      for (; --i > -1; ) {
        n = s[i];
        for (o of e)
          if (o.startsWith(n) && o.length > n.length) {
            for (r = 0, a = n; o.startsWith(a += s[i + ++r]) && a.length < o.length; )
              ;
            if (r && a.length === o.length) {
              s[i] = o, s.splice(i + 1, r);
              break;
            }
          }
      }
  }
  return s;
}, iu = (s) => window.getComputedStyle(s).display === "inline" && (s.style.display = "inline-block"), Zr = (s, t, e) => t.insertBefore(typeof s == "string" ? document.createTextNode(s) : s, e), Za = (s, t, e) => {
  let i = t[s + "sClass"] || "", { tag: r = "div", aria: n = "auto", propIndex: o = !1 } = t, a = s === "line" ? "block" : "inline-block", c = i.indexOf("++") > -1, u = (f) => {
    let h = document.createElement(r), d = e.length + 1;
    return i && (h.className = i + (c ? " " + i + d : "")), o && h.style.setProperty("--" + s, d + ""), n !== "none" && h.setAttribute("aria-hidden", "true"), r !== "span" && (h.style.position = "relative", h.style.display = a), h.textContent = f, e.push(h), h;
  };
  return c && (i = i.replace("++", "")), u.collection = e, u;
}, w_ = (s, t, e, i) => {
  let r = Za("line", e, i), n = window.getComputedStyle(s).textAlign || "left";
  return (o, a) => {
    let c = r("");
    for (c.style.textAlign = n, s.insertBefore(c, t[o]); o < a; o++)
      c.appendChild(t[o]);
    c.normalize();
  };
}, ch = (s, t, e, i, r, n, o, a, c, u) => {
  var f;
  let h = Array.from(s.childNodes), d = 0, { wordDelimiter: l, reduceWhiteSpace: _ = !0, prepareText: p } = t, g = s.getBoundingClientRect(), w = g, T = !_ && window.getComputedStyle(s).whiteSpace.substring(0, 3) === "pre", x = 0, b = e.collection, m, M, E, C, D, P, B, A, R, X, $, V, Y, nt, st, v, G, H;
  for (typeof l == "object" ? (E = l.delimiter || l, M = l.replaceWith || "") : M = l === "" ? "" : l || " ", m = M !== " "; d < h.length; d++)
    if (C = h[d], C.nodeType === 3) {
      for (st = C.textContent || "", _ ? st = st.replace(y_, " ") : T && (st = st.replace(/\n/g, M + `
`)), p && (st = p(st, s)), C.textContent = st, D = M || E ? st.split(E || M) : st.match(a) || Qa, G = D[D.length - 1], A = m ? G.slice(-1) === " " : !G, G || D.pop(), w = g, B = m ? D[0].charAt(0) === " " : !D[0], B && Zr(" ", s, C), D[0] || D.shift(), eu(D, c), n && u || (C.textContent = ""), R = 1; R <= D.length; R++)
        if (v = D[R - 1], !_ && T && v.charAt(0) === `
` && ((f = C.previousSibling) == null || f.remove(), Zr(document.createElement("br"), s, C), v = v.slice(1)), !_ && v === "")
          Zr(M, s, C);
        else if (v === " ")
          s.insertBefore(document.createTextNode(" "), C);
        else {
          if (m && v.charAt(0) === " " && Zr(" ", s, C), x && R === 1 && !B && b.indexOf(x.parentNode) > -1 ? (P = b[b.length - 1], P.appendChild(document.createTextNode(i ? "" : v))) : (P = e(i ? "" : v), Zr(P, s, C), x && R === 1 && !B && P.insertBefore(x, P.firstChild)), i)
            for ($ = Qc ? eu([...Qc.segment(v)].map((ht) => ht.segment), c) : v.match(a) || Qa, H = 0; H < $.length; H++)
              P.appendChild($[H] === " " ? document.createTextNode(" ") : i($[H]));
          if (n && u) {
            if (st = C.textContent = st.substring(v.length + 1, st.length), X = P.getBoundingClientRect(), X.top > w.top && X.left <= w.left) {
              for (V = s.cloneNode(), Y = s.childNodes[0]; Y && Y !== P; )
                nt = Y, Y = Y.nextSibling, V.appendChild(nt);
              s.parentNode.insertBefore(V, s), r && iu(V);
            }
            w = X;
          }
          (R < D.length || A) && Zr(R >= D.length ? " " : m && v.slice(-1) === " " ? " " + M : M, s, C);
        }
      s.removeChild(C), x = 0;
    } else C.nodeType === 1 && (o && o.indexOf(C) > -1 ? (b.indexOf(C.previousSibling) > -1 && b[b.length - 1].appendChild(C), x = C) : (ch(C, t, e, i, r, n, o, a, c, !0), x = 0), r && iu(C));
};
const uh = class fh {
  constructor(t, e) {
    this.isSplit = !1, g_(), this.elements = Zc(t), this.chars = [], this.words = [], this.lines = [], this.masks = [], this.vars = e, this.elements.forEach((o) => {
      var a;
      e.overwrite !== !1 && ((a = o[Kc]) == null || a._data.orig.filter(({ element: c }) => c === o).forEach(tu)), o[Kc] = this;
    }), this._split = () => this.isSplit && this.split(this.vars);
    let i = [], r, n = () => {
      let o = i.length, a;
      for (; o--; ) {
        a = i[o];
        let c = a.element.offsetWidth;
        if (c !== a.width) {
          a.width = c, this._split();
          return;
        }
      }
    };
    this._data = { orig: i, obs: typeof ResizeObserver < "u" && new ResizeObserver(() => {
      clearTimeout(r), r = setTimeout(n, 200);
    }) }, la(this), this.split(e);
  }
  split(t) {
    return (this._ctx || m_).add(() => {
      this.isSplit && this.revert(), this.vars = t = t || this.vars || {};
      let { type: e = "chars,words,lines", aria: i = "auto", deepSlice: r = !0, smartWrap: n, onSplit: o, autoSplit: a = !1, specialChars: c, mask: u } = this.vars, f = e.indexOf("lines") > -1, h = e.indexOf("chars") > -1, d = e.indexOf("words") > -1, l = h && !d && !f, _ = c && ("push" in c ? new RegExp("(?:" + c.join("|") + ")", "gu") : c), p = _ ? new RegExp(_.source + "|" + Jc.source, "gu") : Jc, g = !!t.ignore && Zc(t.ignore), { orig: w, animTime: T, obs: x } = this._data, b;
      (h || d || f) && (this.elements.forEach((m, M) => {
        w[M] = {
          element: m,
          html: m.innerHTML,
          ariaL: m.getAttribute("aria-label"),
          ariaH: m.getAttribute("aria-hidden")
        }, i === "auto" ? m.setAttribute("aria-label", (m.textContent || "").trim()) : i === "hidden" && m.setAttribute("aria-hidden", "true");
        let E = [], C = [], D = [], P = h ? Za("char", t, E) : null, B = Za("word", t, C), A, R, X, $;
        if (ch(m, t, B, P, l, r && (f || l), g, p, _, !1), f) {
          let V = Ms(m.childNodes), Y = w_(m, V, t, D), nt, st = [], v = 0, G = V.map((J) => J.nodeType === 1 ? J.getBoundingClientRect() : Mo), H = Mo, ht;
          for (A = 0; A < V.length; A++)
            nt = V[A], nt.nodeType === 1 && (nt.nodeName === "BR" ? ((!A || V[A - 1].nodeName !== "BR") && (st.push(nt), Y(v, A + 1)), v = A + 1, H = v_(G, A)) : (ht = G[A], A && ht.top > H.top && ht.left < H.left + H.width - 1 && (Y(v, A), v = A), H = ht));
          v < A && Y(v, A), st.forEach((J) => {
            var ot;
            return (ot = J.parentNode) == null ? void 0 : ot.removeChild(J);
          });
        }
        if (!d) {
          for (A = 0; A < C.length; A++)
            if (R = C[A], h || !R.nextSibling || R.nextSibling.nodeType !== 3)
              if (n && !f) {
                for (X = document.createElement("span"), X.style.whiteSpace = "nowrap"; R.firstChild; )
                  X.appendChild(R.firstChild);
                R.replaceWith(X);
              } else
                R.replaceWith(...R.childNodes);
            else
              $ = R.nextSibling, $ && $.nodeType === 3 && ($.textContent = (R.textContent || "") + ($.textContent || ""), R.remove());
          C.length = 0, m.normalize();
        }
        this.lines.push(...D), this.words.push(...C), this.chars.push(...E);
      }), u && this[u] && this.masks.push(...this[u].map((m) => {
        let M = m.cloneNode();
        return m.replaceWith(M), M.appendChild(m), m.className && (M.className = m.className.trim().split(" ").map((E) => E + "-mask").join(" ")), M.style.overflow = "clip", M;
      }))), this.isSplit = !0, $n && f && a && $n.addEventListener("loadingdone", this._split), (b = o && o(this)) && b.totalTime && (this._data.anim = T ? b.totalTime(T) : b), f && a && this.elements.forEach((m, M) => {
        w[M].width = m.offsetWidth, x && x.observe(m);
      });
    }), this;
  }
  kill() {
    let { obs: t } = this._data;
    t && t.disconnect(), $n?.removeEventListener("loadingdone", this._split);
  }
  revert() {
    var t, e;
    if (this.isSplit) {
      let { orig: i, anim: r } = this._data;
      this.kill(), i.forEach(tu), this.chars.length = this.words.length = this.lines.length = i.length = this.masks.length = 0, this.isSplit = !1, r && (this._data.animTime = r.totalTime(), r.revert()), (e = (t = this.vars).onRevert) == null || e.call(t, this);
    }
    return this;
  }
  static create(t, e) {
    return new fh(t, e);
  }
  static register(t) {
    Bn = Bn || t || window.gsap, Bn && (Ms = Bn.utils.toArray, la = Bn.core.context || la), !Ka && window.innerWidth > 0 && ($n = document.fonts, Ka = !0);
  }
};
uh.version = "3.15.0";
let Vl = uh;
/*!
 * matrix 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var qi, zr, Hl, Yo, Gn, po, Do, fs, Ti = "transform", Ja = Ti + "Origin", hh, ql = function(t) {
  var e = t.ownerDocument || t;
  for (!(Ti in t.style) && ("msTransform" in t.style) && (Ti = "msTransform", Ja = Ti + "Origin"); e.parentNode && (e = e.parentNode); )
    ;
  if (zr = window, Do = new Zi(), e) {
    qi = e, Hl = e.documentElement, Yo = e.body, fs = qi.createElementNS("http://www.w3.org/2000/svg", "g"), fs.style.transform = "none";
    var i = e.createElement("div"), r = e.createElement("div"), n = e && (e.body || e.firstElementChild);
    n && n.appendChild && (n.appendChild(i), i.appendChild(r), i.style.position = "static", i.style.transform = "translate3d(0,0,1px)", hh = r.offsetParent !== i, n.removeChild(i));
  }
  return e;
}, x_ = function(t) {
  for (var e, i; t && t !== Yo; )
    i = t._gsap, i && i.uncache && i.get(t, "x"), i && !i.scaleX && !i.scaleY && i.renderTransform && (i.scaleX = i.scaleY = 1e-4, i.renderTransform(1, i), e ? e.push(i) : e = [i]), t = t.parentNode;
  return e;
}, dh = [], ph = [], Ul = function() {
  return zr.pageYOffset || qi.scrollTop || Hl.scrollTop || Yo.scrollTop || 0;
}, Gl = function() {
  return zr.pageXOffset || qi.scrollLeft || Hl.scrollLeft || Yo.scrollLeft || 0;
}, jl = function(t) {
  return t.ownerSVGElement || ((t.tagName + "").toLowerCase() === "svg" ? t : null);
}, b_ = function s(t) {
  if (zr.getComputedStyle(t).position === "fixed")
    return !0;
  if (t = t.parentNode, t && t.nodeType === 1)
    return s(t);
}, ca = function s(t, e) {
  if (t.parentNode && (qi || ql(t))) {
    var i = jl(t), r = i ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", n = i ? e ? "rect" : "g" : "div", o = e !== 2 ? 0 : 100, a = e === 3 ? 100 : 0, c = {
      position: "absolute",
      display: "block",
      pointerEvents: "none",
      margin: "0",
      padding: "0"
    }, u = qi.createElementNS ? qi.createElementNS(r.replace(/^https/, "http"), n) : qi.createElement(n);
    return e && (i ? (po || (po = s(t)), u.setAttribute("width", 0.01), u.setAttribute("height", 0.01), u.setAttribute("transform", "translate(" + o + "," + a + ")"), u.setAttribute("fill", "transparent"), po.appendChild(u)) : (Gn || (Gn = s(t), Object.assign(Gn.style, c)), Object.assign(u.style, c, {
      width: "0.1px",
      height: "0.1px",
      top: a + "px",
      left: o + "px"
    }), Gn.appendChild(u))), u;
  }
  throw "Need document and parent.";
}, S_ = function(t) {
  for (var e = new Zi(), i = 0; i < t.numberOfItems; i++)
    e.multiply(t.getItem(i).matrix);
  return e;
}, _h = function(t) {
  var e = t.getCTM(), i;
  return e || (i = t.style[Ti], t.style[Ti] = "none", t.appendChild(fs), e = fs.getCTM(), t.removeChild(fs), i ? t.style[Ti] = i : t.style.removeProperty(Ti.replace(/([A-Z])/g, "-$1").toLowerCase())), e || Do.clone();
}, T_ = function(t, e) {
  var i = jl(t), r = t === i, n = i ? dh : ph, o = t.parentNode, a = o && !i && o.shadowRoot && o.shadowRoot.appendChild ? o.shadowRoot : o, c, u, f, h, d, l;
  if (t === zr)
    return t;
  if (n.length || n.push(ca(t, 1), ca(t, 2), ca(t, 3)), c = i ? po : Gn, i)
    r ? (f = _h(t), h = -f.e / f.a, d = -f.f / f.d, u = Do) : t.getBBox ? (f = t.getBBox(), u = t.transform ? t.transform.baseVal : {}, u = u.numberOfItems ? u.numberOfItems > 1 ? S_(u) : u.getItem(0).matrix : Do, h = u.a * f.x + u.c * f.y, d = u.b * f.x + u.d * f.y) : (u = new Zi(), h = d = 0), e && t.tagName.toLowerCase() === "g" && (h = d = 0), (r || !t.getBoundingClientRect().width ? i : o).appendChild(c), c.setAttribute("transform", "matrix(" + u.a + "," + u.b + "," + u.c + "," + u.d + "," + (u.e + h) + "," + (u.f + d) + ")");
  else {
    if (h = d = 0, hh)
      for (u = t.offsetParent, f = t; f && (f = f.parentNode) && f !== u && f.parentNode; )
        (zr.getComputedStyle(f)[Ti] + "").length > 4 && (h = f.offsetLeft, d = f.offsetTop, f = 0);
    if (l = zr.getComputedStyle(t), l.position !== "absolute" && l.position !== "fixed")
      for (u = t.offsetParent; o && o !== u; )
        h += o.scrollLeft || 0, d += o.scrollTop || 0, o = o.parentNode;
    f = c.style, f.top = t.offsetTop - d + "px", f.left = t.offsetLeft - h + "px", f[Ti] = l[Ti], f[Ja] = l[Ja], f.position = l.position === "fixed" ? "fixed" : "absolute", a.appendChild(c);
  }
  return c;
}, ua = function(t, e, i, r, n, o, a) {
  return t.a = e, t.b = i, t.c = r, t.d = n, t.e = o, t.f = a, t;
}, Zi = /* @__PURE__ */ function() {
  function s(e, i, r, n, o, a) {
    e === void 0 && (e = 1), i === void 0 && (i = 0), r === void 0 && (r = 0), n === void 0 && (n = 1), o === void 0 && (o = 0), a === void 0 && (a = 0), ua(this, e, i, r, n, o, a);
  }
  var t = s.prototype;
  return t.inverse = function() {
    var i = this.a, r = this.b, n = this.c, o = this.d, a = this.e, c = this.f, u = i * o - r * n || 1e-10;
    return ua(this, o / u, -r / u, -n / u, i / u, (n * c - o * a) / u, -(i * c - r * a) / u);
  }, t.multiply = function(i) {
    var r = this.a, n = this.b, o = this.c, a = this.d, c = this.e, u = this.f, f = i.a, h = i.c, d = i.b, l = i.d, _ = i.e, p = i.f;
    return ua(this, f * r + d * o, f * n + d * a, h * r + l * o, h * n + l * a, c + _ * r + p * o, u + _ * n + p * a);
  }, t.clone = function() {
    return new s(this.a, this.b, this.c, this.d, this.e, this.f);
  }, t.equals = function(i) {
    var r = this.a, n = this.b, o = this.c, a = this.d, c = this.e, u = this.f;
    return r === i.a && n === i.b && o === i.c && a === i.d && c === i.e && u === i.f;
  }, t.apply = function(i, r) {
    r === void 0 && (r = {});
    var n = i.x, o = i.y, a = this.a, c = this.b, u = this.c, f = this.d, h = this.e, d = this.f;
    return r.x = n * a + o * u + h || 0, r.y = n * c + o * f + d || 0, r;
  }, s;
}();
function _e(s, t, e, i) {
  if (!s || !s.parentNode || (qi || ql(s)).documentElement === s)
    return new Zi();
  var r = x_(s), n = jl(s), o = n ? dh : ph, a = T_(s, e), c = o[0].getBoundingClientRect(), u = o[1].getBoundingClientRect(), f = o[2].getBoundingClientRect(), h = a.parentNode, d = !i && b_(s), l = new Zi((u.left - c.left) / 100, (u.top - c.top) / 100, (f.left - c.left) / 100, (f.top - c.top) / 100, c.left + (d ? 0 : Gl()), c.top + (d ? 0 : Ul()));
  if (h.removeChild(a), r)
    for (c = r.length; c--; )
      u = r[c], u.scaleX = u.scaleY = 0, u.renderTransform(1, u);
  return t ? l.inverse() : l;
}
function ru(s) {
  if (s === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function E_(s, t) {
  s.prototype = Object.create(t.prototype), s.prototype.constructor = s, s.__proto__ = t;
}
var yt, At, ni, Ei, Ui, fa, Wi, tl, jn, fr, gh, el, Ds, Kl, Kn, Qe, Qn, _o, mh, il, Oo = 0, yh = function() {
  return typeof window < "u";
}, vh = function() {
  return yt || yh() && (yt = window.gsap) && yt.registerPlugin && yt;
}, nr = function(t) {
  return typeof t == "function";
}, hs = function(t) {
  return typeof t == "object";
}, Si = function(t) {
  return typeof t > "u";
}, go = function() {
  return !1;
}, ds = "transform", rl = "transformOrigin", De = function(t) {
  return Math.round(t * 1e4) / 1e4;
}, zn = Array.isArray, Js = function(t, e) {
  var i = ni.createElementNS ? ni.createElementNS("http://www.w3.org/1999/xhtml".replace(/^https/, "http"), t) : ni.createElement(t);
  return i.style ? i : ni.createElement(t);
}, nu = 180 / Math.PI, Er = 1e20, C_ = new Zi(), ir = Date.now || function() {
  return (/* @__PURE__ */ new Date()).getTime();
}, Yr = [], yn = {}, k_ = 0, P_ = /^(?:a|input|textarea|button|select)$/i, su = 0, Jr = {}, zi = {}, wh = function(t, e) {
  var i = {}, r;
  for (r in t)
    i[r] = e ? t[r] * e : t[r];
  return i;
}, M_ = function(t, e) {
  for (var i in e)
    i in t || (t[i] = e[i]);
  return t;
}, ou = function s(t, e) {
  for (var i = t.length, r; i--; )
    e ? t[i].style.touchAction = e : t[i].style.removeProperty("touch-action"), r = t[i].children, r && r.length && s(r, e);
}, xh = function() {
  return Yr.forEach(function(t) {
    return t();
  });
}, D_ = function(t) {
  Yr.push(t), Yr.length === 1 && yt.ticker.add(xh);
}, au = function() {
  return !Yr.length && yt.ticker.remove(xh);
}, lu = function(t) {
  for (var e = Yr.length; e--; )
    Yr[e] === t && Yr.splice(e, 1);
  yt.to(au, {
    overwrite: !0,
    delay: 15,
    duration: 0,
    onComplete: au,
    data: "_draggable"
  });
}, O_ = function(t, e) {
  for (var i in e)
    i in t || (t[i] = e[i]);
  return t;
}, se = function(t, e, i, r) {
  if (t.addEventListener) {
    var n = Ds[e];
    r = r || (gh ? {
      passive: !1
    } : null), t.addEventListener(n || e, i, r), n && e !== n && t.addEventListener(e, i, r);
  }
}, Zt = function(t, e, i, r) {
  if (t.removeEventListener) {
    var n = Ds[e];
    t.removeEventListener(n || e, i, r), n && e !== n && t.removeEventListener(e, i, r);
  }
}, di = function(t) {
  t.preventDefault && t.preventDefault(), t.preventManipulation && t.preventManipulation();
}, L_ = function(t, e) {
  for (var i = t.length; i--; )
    if (t[i].identifier === e)
      return !0;
}, A_ = function s(t) {
  Kl = t.touches && Oo < t.touches.length, Zt(t.target, "touchend", s);
}, cu = function(t) {
  Kl = t.touches && Oo < t.touches.length, se(t.target, "touchend", A_);
}, vn = function(t) {
  return At.pageYOffset || t.scrollTop || t.documentElement.scrollTop || t.body.scrollTop || 0;
}, wn = function(t) {
  return At.pageXOffset || t.scrollLeft || t.documentElement.scrollLeft || t.body.scrollLeft || 0;
}, uu = function s(t, e) {
  se(t, "scroll", e), Pn(t.parentNode) || s(t.parentNode, e);
}, fu = function s(t, e) {
  Zt(t, "scroll", e), Pn(t.parentNode) || s(t.parentNode, e);
}, Pn = function(t) {
  return !t || t === Ei || t.nodeType === 9 || t === ni.body || t === At || !t.nodeType || !t.parentNode;
}, hu = function(t, e) {
  var i = e === "x" ? "Width" : "Height", r = "scroll" + i, n = "client" + i;
  return Math.max(0, Pn(t) ? Math.max(Ei[r], Ui[r]) - (At["inner" + i] || Ei[n] || Ui[n]) : t[r] - t[n]);
}, ha = function s(t, e) {
  var i = hu(t, "x"), r = hu(t, "y");
  Pn(t) ? t = zi : s(t.parentNode, e), t._gsMaxScrollX = i, t._gsMaxScrollY = r, e || (t._gsScrollX = t.scrollLeft || 0, t._gsScrollY = t.scrollTop || 0);
}, da = function(t, e, i) {
  var r = t.style;
  r && (Si(r[e]) && (e = jn(e, t) || e), i == null ? r.removeProperty && r.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase()) : r[e] = i);
}, Os = function(t) {
  return At.getComputedStyle(t instanceof Element ? t : t.host || (t.parentNode || {}).host || t);
}, Cr = {}, tn = function(t) {
  if (t === At)
    return Cr.left = Cr.top = 0, Cr.width = Cr.right = Ei.clientWidth || t.innerWidth || Ui.clientWidth || 0, Cr.height = Cr.bottom = (t.innerHeight || 0) - 20 < Ei.clientHeight ? Ei.clientHeight : t.innerHeight || Ui.clientHeight || 0, Cr;
  var e = t.ownerDocument || ni, i = Si(t.pageX) ? !t.nodeType && !Si(t.left) && !Si(t.top) ? t : fr(t)[0].getBoundingClientRect() : {
    left: t.pageX - wn(e),
    top: t.pageY - vn(e),
    right: t.pageX - wn(e) + 1,
    bottom: t.pageY - vn(e) + 1
  };
  return Si(i.right) && !Si(i.width) ? (i.right = i.left + i.width, i.bottom = i.top + i.height) : Si(i.width) && (i = {
    width: i.right - i.left,
    height: i.bottom - i.top,
    right: i.right,
    left: i.left,
    bottom: i.bottom,
    top: i.top
  }), i;
}, Ut = function(t, e, i) {
  var r = t.vars, n = r[i], o = t._listeners[e], a;
  return nr(n) && (a = n.apply(r.callbackScope || t, r[i + "Params"] || [t.pointerEvent])), o && t.dispatchEvent(e) === !1 && (a = !1), a;
}, du = function(t, e) {
  var i = fr(t)[0], r, n, o;
  return !i.nodeType && i !== At ? Si(t.left) ? (n = t.min || t.minX || t.minRotation || 0, r = t.min || t.minY || 0, {
    left: n,
    top: r,
    width: (t.max || t.maxX || t.maxRotation || 0) - n,
    height: (t.max || t.maxY || 0) - r
  }) : (o = {
    x: 0,
    y: 0
  }, {
    left: t.left - o.x,
    top: t.top - o.y,
    width: t.width,
    height: t.height
  }) : R_(i, e);
}, pi = {}, R_ = function(t, e) {
  e = fr(e)[0];
  var i = t.getBBox && t.ownerSVGElement, r = t.ownerDocument || ni, n, o, a, c, u, f, h, d, l, _, p, g, w;
  if (t === At)
    a = vn(r), n = wn(r), o = n + (r.documentElement.clientWidth || t.innerWidth || r.body.clientWidth || 0), c = a + ((t.innerHeight || 0) - 20 < r.documentElement.clientHeight ? r.documentElement.clientHeight : t.innerHeight || r.body.clientHeight || 0);
  else {
    if (e === At || Si(e))
      return t.getBoundingClientRect();
    n = a = 0, i ? (_ = t.getBBox(), p = _.width, g = _.height) : (t.viewBox && (_ = t.viewBox.baseVal) && (n = _.x || 0, a = _.y || 0, p = _.width, g = _.height), p || (w = Os(t), _ = w.boxSizing === "border-box", p = (parseFloat(w.width) || t.clientWidth || 0) + (_ ? 0 : parseFloat(w.borderLeftWidth) + parseFloat(w.borderRightWidth)), g = (parseFloat(w.height) || t.clientHeight || 0) + (_ ? 0 : parseFloat(w.borderTopWidth) + parseFloat(w.borderBottomWidth)))), o = p, c = g;
  }
  return t === e ? {
    left: n,
    top: a,
    width: o - n,
    height: c - a
  } : (u = _e(e, !0).multiply(_e(t)), f = u.apply({
    x: n,
    y: a
  }), h = u.apply({
    x: o,
    y: a
  }), d = u.apply({
    x: o,
    y: c
  }), l = u.apply({
    x: n,
    y: c
  }), n = Math.min(f.x, h.x, d.x, l.x), a = Math.min(f.y, h.y, d.y, l.y), {
    left: n,
    top: a,
    width: Math.max(f.x, h.x, d.x, l.x) - n,
    height: Math.max(f.y, h.y, d.y, l.y) - a
  });
}, pa = function(t, e, i, r, n, o) {
  var a = {}, c, u, f;
  if (e)
    if (n !== 1 && e instanceof Array) {
      if (a.end = c = [], f = e.length, hs(e[0]))
        for (u = 0; u < f; u++)
          c[u] = wh(e[u], n);
      else
        for (u = 0; u < f; u++)
          c[u] = e[u] * n;
      i += 1.1, r -= 1.1;
    } else nr(e) ? a.end = function(h) {
      var d = e.call(t, h), l, _;
      if (n !== 1)
        if (hs(d)) {
          l = {};
          for (_ in d)
            l[_] = d[_] * n;
          d = l;
        } else
          d *= n;
      return d;
    } : a.end = e;
  return (i || i === 0) && (a.max = i), (r || r === 0) && (a.min = r), o && (a.velocity = 0), a;
}, N_ = function s(t) {
  var e;
  return !t || !t.getAttribute || t === Ui ? !1 : (e = t.getAttribute("data-clickable")) === "true" || e !== "false" && (P_.test(t.nodeName + "") || t.getAttribute("contentEditable") === "true") ? !0 : s(t.parentNode);
}, to = function(t, e) {
  for (var i = t.length, r; i--; )
    r = t[i], r.ondragstart = r.onselectstart = e ? null : go, yt.set(r, {
      lazy: !0,
      userSelect: e ? "text" : "none"
    });
}, F_ = function s(t) {
  if (Os(t).position === "fixed")
    return !0;
  if (t = t.parentNode, t && t.nodeType === 1)
    return s(t);
}, bh, nl, I_ = function(t, e) {
  t = yt.utils.toArray(t)[0], e = e || {};
  var i = document.createElement("div"), r = i.style, n = t.firstChild, o = 0, a = 0, c = t.scrollTop, u = t.scrollLeft, f = t.scrollWidth, h = t.scrollHeight, d = 0, l = 0, _ = 0, p, g, w, T, x, b;
  bh && e.force3D !== !1 ? (x = "translate3d(", b = "px,0px)") : ds && (x = "translate(", b = "px)"), this.scrollTop = function(m, M) {
    if (!arguments.length)
      return -this.top();
    this.top(-m, M);
  }, this.scrollLeft = function(m, M) {
    if (!arguments.length)
      return -this.left();
    this.left(-m, M);
  }, this.left = function(m, M) {
    if (!arguments.length)
      return -(t.scrollLeft + a);
    var E = t.scrollLeft - u, C = a;
    if ((E > 2 || E < -2) && !M) {
      u = t.scrollLeft, yt.killTweensOf(this, {
        left: 1,
        scrollLeft: 1
      }), this.left(-u), e.onKill && e.onKill();
      return;
    }
    m = -m, m < 0 ? (a = m - 0.5 | 0, m = 0) : m > l ? (a = m - l | 0, m = l) : a = 0, (a || C) && (this._skip || (r[ds] = x + -a + "px," + -o + b), a + d >= 0 && (r.paddingRight = a + d + "px")), t.scrollLeft = m | 0, u = t.scrollLeft;
  }, this.top = function(m, M) {
    if (!arguments.length)
      return -(t.scrollTop + o);
    var E = t.scrollTop - c, C = o;
    if ((E > 2 || E < -2) && !M) {
      c = t.scrollTop, yt.killTweensOf(this, {
        top: 1,
        scrollTop: 1
      }), this.top(-c), e.onKill && e.onKill();
      return;
    }
    m = -m, m < 0 ? (o = m - 0.5 | 0, m = 0) : m > _ ? (o = m - _ | 0, m = _) : o = 0, (o || C) && (this._skip || (r[ds] = x + -a + "px," + -o + b)), t.scrollTop = m | 0, c = t.scrollTop;
  }, this.maxScrollTop = function() {
    return _;
  }, this.maxScrollLeft = function() {
    return l;
  }, this.disable = function() {
    for (n = i.firstChild; n; )
      T = n.nextSibling, t.appendChild(n), n = T;
    t === i.parentNode && t.removeChild(i);
  }, this.enable = function() {
    if (n = t.firstChild, n !== i) {
      for (; n; )
        T = n.nextSibling, i.appendChild(n), n = T;
      t.appendChild(i), this.calibrate();
    }
  }, this.calibrate = function(m) {
    var M = t.clientWidth === p, E, C, D;
    c = t.scrollTop, u = t.scrollLeft, !(M && t.clientHeight === g && i.offsetHeight === w && f === t.scrollWidth && h === t.scrollHeight && !m) && ((o || a) && (C = this.left(), D = this.top(), this.left(-t.scrollLeft), this.top(-t.scrollTop)), E = Os(t), (!M || m) && (r.display = "block", r.width = "auto", r.paddingRight = "0px", d = Math.max(0, t.scrollWidth - t.clientWidth), d && (d += parseFloat(E.paddingLeft) + (nl ? parseFloat(E.paddingRight) : 0))), r.display = "inline-block", r.position = "relative", r.overflow = "visible", r.verticalAlign = "top", r.boxSizing = "content-box", r.width = "100%", r.paddingRight = d + "px", nl && (r.paddingBottom = E.paddingBottom), p = t.clientWidth, g = t.clientHeight, f = t.scrollWidth, h = t.scrollHeight, l = t.scrollWidth - p, _ = t.scrollHeight - g, w = i.offsetHeight, r.display = "block", (C || D) && (this.left(C), this.top(D)));
  }, this.content = i, this.element = t, this._skip = !1, this.enable();
}, _a = function(t) {
  if (yh() && document.body) {
    var e = window && window.navigator;
    At = window, ni = document, Ei = ni.documentElement, Ui = ni.body, fa = Js("div"), _o = !!window.PointerEvent, Wi = Js("div"), Wi.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", Qn = Wi.style.cursor === "grab" ? "grab" : "move", Kn = e && e.userAgent.toLowerCase().indexOf("android") !== -1, el = "ontouchstart" in Ei && "orientation" in At || e && (e.MaxTouchPoints > 0 || e.msMaxTouchPoints > 0), nl = function() {
      var i = Js("div"), r = Js("div"), n = r.style, o = Ui, a;
      return n.display = "inline-block", n.position = "relative", i.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", i.appendChild(r), o.appendChild(i), a = r.offsetHeight + 18 > i.scrollHeight, o.removeChild(i), a;
    }(), Ds = function(i) {
      for (var r = i.split(","), n = ("onpointerdown" in fa ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in fa ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : i).split(","), o = {}, a = 4; --a > -1; )
        o[r[a]] = n[a], o[n[a]] = r[a];
      try {
        Ei.addEventListener("test", null, Object.defineProperty({}, "passive", {
          get: function() {
            gh = 1;
          }
        }));
      } catch {
      }
      return o;
    }("touchstart,touchmove,touchend,touchcancel"), se(ni, "touchcancel", go), se(At, "touchmove", go), Ui && Ui.addEventListener("touchstart", go), se(ni, "contextmenu", function() {
      for (var i in yn)
        yn[i].isPressed && yn[i].endDrag();
    }), yt = tl = vh();
  }
  yt ? (Qe = yt.plugins.inertia, mh = yt.core.context || function() {
  }, jn = yt.utils.checkPrefix, ds = jn(ds), rl = jn(rl), fr = yt.utils.toArray, il = yt.core.getStyleSaver, bh = !!jn("perspective")) : t && console.warn("Please gsap.registerPlugin(Draggable)");
}, B_ = /* @__PURE__ */ function() {
  function s(e) {
    this._listeners = {}, this.target = e || this;
  }
  var t = s.prototype;
  return t.addEventListener = function(i, r) {
    var n = this._listeners[i] || (this._listeners[i] = []);
    ~n.indexOf(r) || n.push(r);
  }, t.removeEventListener = function(i, r) {
    var n = this._listeners[i], o = n && n.indexOf(r);
    o >= 0 && n.splice(o, 1);
  }, t.dispatchEvent = function(i) {
    var r = this, n;
    return (this._listeners[i] || []).forEach(function(o) {
      return o.call(r, {
        type: i,
        target: r.target
      }) === !1 && (n = !1);
    }), n;
  }, s;
}(), Ln = /* @__PURE__ */ function(s) {
  E_(t, s);
  function t(e, i) {
    var r;
    r = s.call(this) || this, tl || _a(1), e = fr(e)[0], r.styles = il && il(e, "transform,left,top"), Qe || (Qe = yt.plugins.inertia), r.vars = i = wh(i || {}), r.target = e, r.x = r.y = r.rotation = 0, r.dragResistance = parseFloat(i.dragResistance) || 0, r.edgeResistance = isNaN(i.edgeResistance) ? 1 : parseFloat(i.edgeResistance) || 0, r.lockAxis = i.lockAxis, r.autoScroll = i.autoScroll || 0, r.lockedAxis = null, r.allowEventDefault = !!i.allowEventDefault, yt.getProperty(e, "x");
    var n = (i.type || "x,y").toLowerCase(), o = ~n.indexOf("x") || ~n.indexOf("y"), a = n.indexOf("rotation") !== -1, c = a ? "rotation" : o ? "x" : "left", u = o ? "y" : "top", f = !!(~n.indexOf("x") || ~n.indexOf("left") || n === "scroll"), h = !!(~n.indexOf("y") || ~n.indexOf("top") || n === "scroll"), d = i.minimumMovement || 2, l = ru(r), _ = fr(i.trigger || i.handle || e), p = {}, g = 0, w = !1, T = i.autoScrollMarginTop || 40, x = i.autoScrollMarginRight || 40, b = i.autoScrollMarginBottom || 40, m = i.autoScrollMarginLeft || 40, M = i.clickableTest || N_, E = 0, C = e._gsap || yt.core.getCache(e), D = F_(e), P = function(y, F) {
      return parseFloat(C.get(e, y, F));
    }, B = e.ownerDocument || ni, A, R, X, $, V, Y, nt, st, v, G, H, ht, J, ot, et, wt, at, It, Dt, xt, Ot, K, tt, it, Qt, k, St, ee, Fe, Ct, j, Ie, ui, qt = function(y) {
      return di(y), y.stopImmediatePropagation && y.stopImmediatePropagation(), !1;
    }, ie = function Q(y) {
      if (l.autoScroll && l.isDragging && (w || at)) {
        var F = e, S = l.autoScroll * 15, O, I, L, z, N, W, rt, U;
        for (w = !1, zi.scrollTop = At.pageYOffset != null ? At.pageYOffset : B.documentElement.scrollTop != null ? B.documentElement.scrollTop : B.body.scrollTop, zi.scrollLeft = At.pageXOffset != null ? At.pageXOffset : B.documentElement.scrollLeft != null ? B.documentElement.scrollLeft : B.body.scrollLeft, z = l.pointerX - zi.scrollLeft, N = l.pointerY - zi.scrollTop; F && !I; )
          I = Pn(F.parentNode), O = I ? zi : F.parentNode, L = I ? {
            bottom: Math.max(Ei.clientHeight, At.innerHeight || 0),
            right: Math.max(Ei.clientWidth, At.innerWidth || 0),
            left: 0,
            top: 0
          } : O.getBoundingClientRect(), W = rt = 0, h && (U = O._gsMaxScrollY - O.scrollTop, U < 0 ? rt = U : N > L.bottom - b && U ? (w = !0, rt = Math.min(U, S * (1 - Math.max(0, L.bottom - N) / b) | 0)) : N < L.top + T && O.scrollTop && (w = !0, rt = -Math.min(O.scrollTop, S * (1 - Math.max(0, N - L.top) / T) | 0)), rt && (O.scrollTop += rt)), f && (U = O._gsMaxScrollX - O.scrollLeft, U < 0 ? W = U : z > L.right - x && U ? (w = !0, W = Math.min(U, S * (1 - Math.max(0, L.right - z) / x) | 0)) : z < L.left + m && O.scrollLeft && (w = !0, W = -Math.min(O.scrollLeft, S * (1 - Math.max(0, z - L.left) / m) | 0)), W && (O.scrollLeft += W)), I && (W || rt) && (At.scrollTo(O.scrollLeft, O.scrollTop), Ke(l.pointerX + W, l.pointerY + rt)), F = O;
      }
      if (at) {
        var ft = l.x, bt = l.y;
        a ? (l.deltaX = ft - parseFloat(C.rotation), l.rotation = ft, C.rotation = ft + "deg", C.renderTransform(1, C)) : R ? (h && (l.deltaY = bt - R.top(), R.top(bt)), f && (l.deltaX = ft - R.left(), R.left(ft))) : o ? (h && (l.deltaY = bt - parseFloat(C.y), C.y = bt + "px"), f && (l.deltaX = ft - parseFloat(C.x), C.x = ft + "px"), C.renderTransform(1, C)) : (h && (l.deltaY = bt - parseFloat(e.style.top || 0), e.style.top = bt + "px"), f && (l.deltaX = ft - parseFloat(e.style.left || 0), e.style.left = ft + "px")), st && !y && !ee && (ee = !0, Ut(l, "drag", "onDrag") === !1 && (f && (l.x -= l.deltaX), h && (l.y -= l.deltaY), Q(!0)), ee = !1);
      }
      at = !1;
    }, kt = function(y, F) {
      var S = l.x, O = l.y, I, L;
      e._gsap || (C = yt.core.getCache(e)), C.uncache && yt.getProperty(e, "x"), o ? (l.x = parseFloat(C.x), l.y = parseFloat(C.y)) : a ? l.x = l.rotation = De(parseFloat(C.rotation)) : R ? (l.y = R.top(), l.x = R.left()) : (l.y = parseFloat(e.style.top || (L = Os(e)) && L.top) || 0, l.x = parseFloat(e.style.left || (L || {}).left) || 0), (Dt || xt || Ot) && !F && (l.isDragging || l.isThrowing) && (Ot && (Jr.x = l.x, Jr.y = l.y, I = Ot(Jr), I.x !== l.x && (l.x = I.x, at = !0), I.y !== l.y && (l.y = I.y, at = !0)), Dt && (I = Dt(l.x), I !== l.x && (l.x = I, a && (l.rotation = I), at = !0)), xt && (I = xt(l.y), I !== l.y && (l.y = I), at = !0)), at && ie(!0), y || (l.deltaX = l.x - S, l.deltaY = l.y - O, Ut(l, "throwupdate", "onThrowUpdate"));
    }, Pe = function(y, F, S, O) {
      return F == null && (F = -Er), S == null && (S = Er), nr(y) ? function(I) {
        var L = l.isPressed ? 1 - l.edgeResistance : 1;
        return y.call(l, (I > S ? S + (I - S) * L : I < F ? F + (I - F) * L : I) * O) * O;
      } : zn(y) ? function(I) {
        for (var L = y.length, z = 0, N = Er, W, rt; --L > -1; )
          W = y[L], rt = W - I, rt < 0 && (rt = -rt), rt < N && W >= F && W <= S && (z = L, N = rt);
        return y[z];
      } : isNaN(y) ? function(I) {
        return I;
      } : function() {
        return y * O;
      };
    }, Be = function(y, F, S, O, I, L, z) {
      return L = L && L < Er ? L * L : Er, nr(y) ? function(N) {
        var W = l.isPressed ? 1 - l.edgeResistance : 1, rt = N.x, U = N.y, ft, bt, Tt;
        return N.x = rt = rt > S ? S + (rt - S) * W : rt < F ? F + (rt - F) * W : rt, N.y = U = U > I ? I + (U - I) * W : U < O ? O + (U - O) * W : U, ft = y.call(l, N), ft !== N && (N.x = ft.x, N.y = ft.y), z !== 1 && (N.x *= z, N.y *= z), L < Er && (bt = N.x - rt, Tt = N.y - U, bt * bt + Tt * Tt > L && (N.x = rt, N.y = U)), N;
      } : zn(y) ? function(N) {
        for (var W = y.length, rt = 0, U = Er, ft, bt, Tt, gt; --W > -1; )
          Tt = y[W], ft = Tt.x - N.x, bt = Tt.y - N.y, gt = ft * ft + bt * bt, gt < U && (rt = W, U = gt);
        return U <= L ? y[rt] : N;
      } : function(N) {
        return N;
      };
    }, Ge = function() {
      var y, F, S, O;
      nt = !1, R ? (R.calibrate(), l.minX = H = -R.maxScrollLeft(), l.minY = J = -R.maxScrollTop(), l.maxX = G = l.maxY = ht = 0, nt = !0) : i.bounds && (y = du(i.bounds, e.parentNode), a ? (l.minX = H = y.left, l.maxX = G = y.left + y.width, l.minY = J = l.maxY = ht = 0) : !Si(i.bounds.maxX) || !Si(i.bounds.maxY) ? (y = i.bounds, l.minX = H = y.minX, l.minY = J = y.minY, l.maxX = G = y.maxX, l.maxY = ht = y.maxY) : (F = du(e, e.parentNode), l.minX = H = Math.round(P(c, "px") + y.left - F.left), l.minY = J = Math.round(P(u, "px") + y.top - F.top), l.maxX = G = Math.round(H + (y.width - F.width)), l.maxY = ht = Math.round(J + (y.height - F.height))), H > G && (l.minX = G, l.maxX = G = H, H = l.minX), J > ht && (l.minY = ht, l.maxY = ht = J, J = l.minY), a && (l.minRotation = H, l.maxRotation = G), nt = !0), i.liveSnap && (S = i.liveSnap === !0 ? i.snap || {} : i.liveSnap, O = zn(S) || nr(S), a ? (Dt = Pe(O ? S : S.rotation, H, G, 1), xt = null) : S.points ? Ot = Be(O ? S : S.points, H, G, J, ht, S.radius, R ? -1 : 1) : (f && (Dt = Pe(O ? S : S.x || S.left || S.scrollLeft, H, G, R ? -1 : 1)), h && (xt = Pe(O ? S : S.y || S.top || S.scrollTop, J, ht, R ? -1 : 1))));
    }, xr = function() {
      l.isThrowing = !1, Ut(l, "throwcomplete", "onThrowComplete");
    }, Vt = function() {
      l.isThrowing = !1;
    }, Ji = function(y, F) {
      var S, O, I, L;
      y && Qe ? (y === !0 && (S = i.snap || i.liveSnap || {}, O = zn(S) || nr(S), y = {
        resistance: (i.throwResistance || i.resistance || 1e3) / (a ? 10 : 1)
      }, a ? y.rotation = pa(l, O ? S : S.rotation, G, H, 1, F) : (f && (y[c] = pa(l, O ? S : S.points || S.x || S.left, G, H, R ? -1 : 1, F || l.lockedAxis === "x")), h && (y[u] = pa(l, O ? S : S.points || S.y || S.top, ht, J, R ? -1 : 1, F || l.lockedAxis === "y")), (S.points || zn(S) && hs(S[0])) && (y.linkedProps = c + "," + u, y.radius = S.radius))), l.isThrowing = !0, L = isNaN(i.overshootTolerance) ? i.edgeResistance === 1 ? 0 : 1 - l.edgeResistance + 0.2 : i.overshootTolerance, y.duration || (y.duration = {
        max: Math.max(i.minDuration || 0, "maxDuration" in i ? i.maxDuration : 2),
        min: isNaN(i.minDuration) ? L === 0 || hs(y) && y.resistance > 1e3 ? 0 : 0.5 : i.minDuration,
        overshoot: L
      }), l.tween = I = yt.to(R || e, {
        inertia: y,
        data: "_draggable",
        inherit: !1,
        onComplete: xr,
        onInterrupt: Vt,
        onUpdate: i.fastMode ? Ut : kt,
        onUpdateParams: i.fastMode ? [l, "onthrowupdate", "onThrowUpdate"] : S && S.radius ? [!1, !0] : []
      }), i.fastMode || (R && (R._skip = !0), I.render(1e9, !0, !0), kt(!0, !0), l.endX = l.x, l.endY = l.y, a && (l.endRotation = l.x), I.play(0), kt(!0, !0), R && (R._skip = !1))) : nt && l.applyBounds();
    }, fi = function(y) {
      var F = it, S;
      it = _e(e.parentNode, !0), y && l.isPressed && !it.equals(F || new Zi()) && (S = F.inverse().apply({
        x: X,
        y: $
      }), it.apply(S, S), X = S.x, $ = S.y), it.equals(C_) && (it = null);
    }, xi = function() {
      var y = 1 - l.edgeResistance, F = D ? wn(B) : 0, S = D ? vn(B) : 0, O, I, L;
      o && (C.x = P(c, "px") + "px", C.y = P(u, "px") + "px", C.renderTransform()), fi(!1), pi.x = l.pointerX - F, pi.y = l.pointerY - S, it && it.apply(pi, pi), X = pi.x, $ = pi.y, at && (Ke(l.pointerX, l.pointerY), ie(!0)), Ie = _e(e), R ? (Ge(), Y = R.top(), V = R.left()) : (hi() ? (kt(!0, !0), Ge()) : l.applyBounds(), a ? (O = e.ownerSVGElement ? [C.xOrigin - e.getBBox().x, C.yOrigin - e.getBBox().y] : (Os(e)[rl] || "0 0").split(" "), wt = l.rotationOrigin = _e(e).apply({
        x: parseFloat(O[0]) || 0,
        y: parseFloat(O[1]) || 0
      }), kt(!0, !0), I = l.pointerX - wt.x - F, L = wt.y - l.pointerY + S, V = l.x, Y = l.y = Math.atan2(L, I) * nu) : (Y = P(u, "px"), V = P(c, "px"))), nt && y && (V > G ? V = G + (V - G) / y : V < H && (V = H - (H - V) / y), a || (Y > ht ? Y = ht + (Y - ht) / y : Y < J && (Y = J - (J - Y) / y))), l.startX = V = De(V), l.startY = Y = De(Y);
    }, hi = function() {
      return l.tween && l.tween.isActive();
    }, ki = function() {
      Wi.parentNode && !hi() && !l.isDragging && Wi.parentNode.removeChild(Wi);
    }, je = function(y, F) {
      var S;
      if (!A || l.isPressed || !y || (y.type === "mousedown" || y.type === "pointerdown") && !F && ir() - E < 30 && Ds[l.pointerEvent.type]) {
        j && y && A && di(y);
        return;
      }
      if (Qt = hi(), ui = !1, l.pointerEvent = y, Ds[y.type] ? (tt = ~y.type.indexOf("touch") ? y.currentTarget || y.target : B, se(tt, "touchend", zt), se(tt, "touchmove", lt), se(tt, "touchcancel", zt), se(B, "touchstart", cu)) : (tt = null, se(B, "mousemove", lt)), St = null, (!_o || !tt) && (se(B, "mouseup", zt), y && y.target && se(y.target, "mouseup", zt)), K = M.call(l, y.target) && i.dragClickables === !1 && !F, K) {
        se(y.target, "change", zt), Ut(l, "pressInit", "onPressInit"), Ut(l, "press", "onPress"), to(_, !0), j = !1;
        return;
      }
      if (k = !tt || f === h || l.vars.allowNativeTouchScrolling === !1 || l.vars.allowContextMenu && y && (y.ctrlKey || y.which > 2) ? !1 : f ? "y" : "x", j = !k && !l.allowEventDefault, j && (di(y), se(At, "touchforcechange", di)), y.changedTouches ? (y = ot = y.changedTouches[0], et = y.identifier) : y.pointerId ? et = y.pointerId : ot = et = null, Oo++, D_(ie), $ = l.pointerY = y.pageY, X = l.pointerX = y.pageX, Ut(l, "pressInit", "onPressInit"), (k || l.autoScroll) && ha(e.parentNode), e.parentNode && l.autoScroll && !R && !a && e.parentNode._gsMaxScrollX && !Wi.parentNode && !e.getBBox && (Wi.style.width = e.parentNode.scrollWidth + "px", e.parentNode.appendChild(Wi)), xi(), l.tween && l.tween.kill(), l.isThrowing = !1, yt.killTweensOf(R || e, p, !0), R && yt.killTweensOf(e, {
        scrollTo: 1
      }, !0), l.tween = l.lockedAxis = null, (i.zIndexBoost || !a && !R && i.zIndexBoost !== !1) && (e.style.zIndex = t.zIndex++), l.isPressed = !0, st = !!(i.onDrag || l._listeners.drag), v = !!(i.onMove || l._listeners.move), i.cursor !== !1 || i.activeCursor)
        for (S = _.length; --S > -1; )
          yt.set(_[S], {
            cursor: i.activeCursor || i.cursor || (Qn === "grab" ? "grabbing" : Qn)
          });
      Ut(l, "press", "onPress"), Qe && Qe.track(R || e, o ? "x,y" : a ? "rotation" : "top,left");
    }, lt = function(y) {
      var F = y, S, O, I, L, z, N;
      if (!A || Kl || !l.isPressed || !y) {
        j && y && A && di(y);
        return;
      }
      if (l.pointerEvent = y, S = y.changedTouches, S) {
        if (y = S[0], y !== ot && y.identifier !== et) {
          for (L = S.length; --L > -1 && (y = S[L]).identifier !== et && y.target !== e; )
            ;
          if (L < 0)
            return;
        }
      } else if (y.pointerId && et && y.pointerId !== et)
        return;
      if (tt && k && !St && (pi.x = y.pageX - (D ? wn(B) : 0), pi.y = y.pageY - (D ? vn(B) : 0), it && it.apply(pi, pi), O = pi.x, I = pi.y, z = Math.abs(O - X), N = Math.abs(I - $), (z !== N && (z > d || N > d) || Kn && k === St) && (St = z > N && f ? "x" : "y", k && St !== k && se(At, "touchforcechange", di), l.vars.lockAxisOnTouchScroll !== !1 && f && h && (l.lockedAxis = St === "x" ? "y" : "x", nr(l.vars.onLockAxis) && l.vars.onLockAxis.call(l, F)), Kn && k === St))) {
        zt(F);
        return;
      }
      !l.allowEventDefault && (!k || St && k !== St) && F.cancelable !== !1 ? (di(F), j = !0) : j && (j = !1), l.autoScroll && (w = !0), Ke(y.pageX, y.pageY, v);
    }, Ke = function(y, F, S) {
      var O = 1 - l.dragResistance, I = 1 - l.edgeResistance, L = l.pointerX, z = l.pointerY, N = Y, W = l.x, rt = l.y, U = l.endX, ft = l.endY, bt = l.endRotation, Tt = at, gt, mt, Pt, ut, fe, Bt;
      l.pointerX = y, l.pointerY = F, D && (y -= wn(B), F -= vn(B)), a ? (ut = De(Math.atan2(wt.y - F, y - wt.x) * nu), fe = l.y - ut, fe > 180 ? (Y -= 360, l.y = ut) : fe < -180 && (Y += 360, l.y = ut), it && (Bt = y * it.a + F * it.c + it.e, F = y * it.b + F * it.d + it.f, y = Bt), l.x !== V || Math.max(Math.abs(X - y), Math.abs($ - F)) > d ? (l.y = ut, Pt = De(V + (Y - ut) * O)) : Pt = V) : (it && (Bt = y * it.a + F * it.c + it.e, F = y * it.b + F * it.d + it.f, y = Bt), mt = F - $, gt = y - X, mt < d && mt > -d && (mt = 0), gt < d && gt > -d && (gt = 0), (l.lockAxis || l.lockedAxis) && (gt || mt) && (Bt = l.lockedAxis, Bt || (l.lockedAxis = Bt = f && Math.abs(gt) > Math.abs(mt) ? "y" : h ? "x" : null, Bt && nr(l.vars.onLockAxis) && l.vars.onLockAxis.call(l, l.pointerEvent)), Bt === "y" ? mt = 0 : Bt === "x" && (gt = 0)), Pt = De(V + gt * O), ut = De(Y + mt * O)), (Dt || xt || Ot) && (l.x !== Pt || l.y !== ut && !a) && (Ot && (Jr.x = Pt, Jr.y = ut, Bt = Ot(Jr), Pt = De(Bt.x), ut = De(Bt.y)), Dt && (Pt = De(Dt(Pt))), xt && (ut = De(xt(ut)))), nt && (Pt > G ? Pt = G + Math.round((Pt - G) * I) : Pt < H && (Pt = H + Math.round((Pt - H) * I)), a || (ut > ht ? ut = Math.round(ht + (ut - ht) * I) : ut < J && (ut = Math.round(J + (ut - J) * I)))), (l.x !== Pt || l.y !== ut && !a) && (a ? (l.endRotation = l.x = l.endX = De(Pt), at = !0) : (h && (l.y = l.endY = ut, at = !0), f && (l.x = l.endX = Pt, at = !0)), !S || Ut(l, "move", "onMove") !== !1 ? !l.isDragging && l.isPressed && (l.isDragging = ui = !0, Ut(l, "dragstart", "onDragStart")) : (l.pointerX = L, l.pointerY = z, Y = N, l.x = W, l.y = rt, l.endX = U, l.endY = ft, l.endRotation = bt, at = Tt));
    }, zt = function Q(y, F) {
      if (!A || !l.isPressed || y && et != null && !F && (y.pointerId && y.pointerId !== et && y.target !== e || y.changedTouches && !L_(y.changedTouches, et))) {
        j && y && A && di(y);
        return;
      }
      l.isPressed = !1;
      var S = y, O = l.isDragging, I = l.vars.allowContextMenu && y && (y.ctrlKey || y.which > 2), L = yt.delayedCall(1e-3, ki), z, N, W, rt, U;
      if (tt ? (Zt(tt, "touchend", Q), Zt(tt, "touchmove", lt), Zt(tt, "touchcancel", Q), Zt(B, "touchstart", cu)) : Zt(B, "mousemove", lt), Zt(At, "touchforcechange", di), (!_o || !tt) && (Zt(B, "mouseup", Q), y && y.target && Zt(y.target, "mouseup", Q)), at = !1, O && (g = su = ir(), l.isDragging = !1), lu(ie), K && !I) {
        y && (Zt(y.target, "change", Q), l.pointerEvent = S), to(_, !1), Ut(l, "release", "onRelease"), Ut(l, "click", "onClick"), K = !1;
        return;
      }
      for (N = _.length; --N > -1; )
        da(_[N], "cursor", i.cursor || (i.cursor !== !1 ? Qn : null));
      if (Oo--, y) {
        if (z = y.changedTouches, z && (y = z[0], y !== ot && y.identifier !== et)) {
          for (N = z.length; --N > -1 && (y = z[N]).identifier !== et && y.target !== e; )
            ;
          if (N < 0 && !F)
            return;
        }
        l.pointerEvent = S, l.pointerX = y.pageX, l.pointerY = y.pageY;
      }
      return I && S ? (di(S), j = !0, Ut(l, "release", "onRelease")) : S && !O ? (j = !1, Qt && (i.snap || i.bounds) && Ji(i.inertia || i.throwProps), Ut(l, "release", "onRelease"), (!Kn || S.type !== "touchmove") && S.type.indexOf("cancel") === -1 && (Ut(l, "click", "onClick"), ir() - E < 300 && Ut(l, "doubleclick", "onDoubleClick"), rt = S.target || e, E = ir(), U = function() {
        E !== Fe && l.enabled() && !l.isPressed && !S.defaultPrevented && (rt.click ? rt.click() : B.createEvent && (W = B.createEvent("MouseEvents"), W.initMouseEvent("click", !0, !0, At, 1, l.pointerEvent.screenX, l.pointerEvent.screenY, l.pointerX, l.pointerY, !1, !1, !1, !1, 0, null), rt.dispatchEvent(W)));
      }, !Kn && !S.defaultPrevented && yt.delayedCall(0.05, U))) : (Ji(i.inertia || i.throwProps), !l.allowEventDefault && S && (i.dragClickables !== !1 || !M.call(l, S.target)) && O && (!k || St && k === St) && S.cancelable !== !1 ? (j = !0, di(S)) : j = !1, Ut(l, "release", "onRelease")), hi() && L.duration(l.tween.duration()), O && Ut(l, "dragend", "onDragEnd"), !0;
    }, ve = function(y) {
      if (y && l.isDragging && !R) {
        var F = y.target || e.parentNode, S = F.scrollLeft - F._gsScrollX, O = F.scrollTop - F._gsScrollY;
        (S || O) && (it ? (X -= S * it.a + O * it.c, $ -= O * it.d + S * it.b) : (X -= S, $ -= O), F._gsScrollX += S, F._gsScrollY += O, Ke(l.pointerX, l.pointerY));
      }
    }, $e = function(y) {
      var F = ir(), S = F - E < 100, O = F - g < 50, I = S && Fe === E, L = l.pointerEvent && l.pointerEvent.defaultPrevented, z = S && Ct === E, N = y.isTrusted || y.isTrusted == null && S && I;
      if ((I || O && l.vars.suppressClickOnDrag !== !1) && y.stopImmediatePropagation && y.stopImmediatePropagation(), S && !(l.pointerEvent && l.pointerEvent.defaultPrevented) && (!I || N && !z)) {
        N && I && (Ct = E), Fe = E;
        return;
      }
      (l.isPressed || O || S) && (!N || !y.detail || !S || L) && di(y), !S && !O && !ui && (y && y.target && (l.pointerEvent = y), Ut(l, "click", "onClick"));
    }, Pi = function(y) {
      return it ? {
        x: y.x * it.a + y.y * it.c + it.e,
        y: y.x * it.b + y.y * it.d + it.f
      } : {
        x: y.x,
        y: y.y
      };
    };
    return It = t.get(e), It && It.kill(), r.startDrag = function(Q, y) {
      var F, S, O, I;
      je(Q || l.pointerEvent, !0), y && !l.hitTest(Q || l.pointerEvent) && (F = tn(Q || l.pointerEvent), S = tn(e), O = Pi({
        x: F.left + F.width / 2,
        y: F.top + F.height / 2
      }), I = Pi({
        x: S.left + S.width / 2,
        y: S.top + S.height / 2
      }), X -= O.x - I.x, $ -= O.y - I.y), l.isDragging || (l.isDragging = ui = !0, Ut(l, "dragstart", "onDragStart"));
    }, r.drag = lt, r.endDrag = function(Q) {
      return zt(Q || l.pointerEvent, !0);
    }, r.timeSinceDrag = function() {
      return l.isDragging ? 0 : (ir() - g) / 1e3;
    }, r.timeSinceClick = function() {
      return (ir() - E) / 1e3;
    }, r.hitTest = function(Q, y) {
      return t.hitTest(l.target, Q, y);
    }, r.getDirection = function(Q, y) {
      var F = Q === "velocity" && Qe ? Q : hs(Q) && !a ? "element" : "start", S, O, I, L, z, N;
      return F === "element" && (z = tn(l.target), N = tn(Q)), S = F === "start" ? l.x - V : F === "velocity" ? Qe.getVelocity(e, c) : z.left + z.width / 2 - (N.left + N.width / 2), a ? S < 0 ? "counter-clockwise" : "clockwise" : (y = y || 2, O = F === "start" ? l.y - Y : F === "velocity" ? Qe.getVelocity(e, u) : z.top + z.height / 2 - (N.top + N.height / 2), I = Math.abs(S / O), L = I < 1 / y ? "" : S < 0 ? "left" : "right", I < y && (L !== "" && (L += "-"), L += O < 0 ? "up" : "down"), L);
    }, r.applyBounds = function(Q, y) {
      var F, S, O, I, L, z;
      if (Q && i.bounds !== Q)
        return i.bounds = Q, l.update(!0, y);
      if (kt(!0), Ge(), nt && !hi()) {
        if (F = l.x, S = l.y, F > G ? F = G : F < H && (F = H), S > ht ? S = ht : S < J && (S = J), (l.x !== F || l.y !== S) && (O = !0, l.x = l.endX = F, a ? l.endRotation = F : l.y = l.endY = S, at = !0, ie(!0), l.autoScroll && !l.isDragging))
          for (ha(e.parentNode), I = e, zi.scrollTop = At.pageYOffset != null ? At.pageYOffset : B.documentElement.scrollTop != null ? B.documentElement.scrollTop : B.body.scrollTop, zi.scrollLeft = At.pageXOffset != null ? At.pageXOffset : B.documentElement.scrollLeft != null ? B.documentElement.scrollLeft : B.body.scrollLeft; I && !z; )
            z = Pn(I.parentNode), L = z ? zi : I.parentNode, h && L.scrollTop > L._gsMaxScrollY && (L.scrollTop = L._gsMaxScrollY), f && L.scrollLeft > L._gsMaxScrollX && (L.scrollLeft = L._gsMaxScrollX), I = L;
        l.isThrowing && (O || l.endX > G || l.endX < H || l.endY > ht || l.endY < J) && Ji(i.inertia || i.throwProps, O);
      }
      return l;
    }, r.update = function(Q, y, F) {
      if (y && l.isPressed) {
        if (a)
          l.x = l.y = De(parseFloat(C.rotation));
        else {
          var S = _e(e), O = Ie.apply({
            x: l.x - V,
            y: l.y - Y
          }), I = _e(e.parentNode, !0);
          I.apply({
            x: S.e - O.x,
            y: S.f - O.y
          }, O), l.x = De(l.x - (O.x - I.e)), l.y = De(l.y - (O.y - I.f));
        }
        ie(!0), xi();
      }
      var L = l.x, z = l.y;
      return fi(!y), Q ? l.applyBounds() : (at && F && ie(!0), kt(!0)), y && (Ke(l.pointerX, l.pointerY), at && ie(!0)), l.isPressed && !y && (f && Math.abs(L - l.x) > 0.01 || h && Math.abs(z - l.y) > 0.01 && !a) && xi(), l.autoScroll && (ha(e.parentNode, l.isDragging), w = l.isDragging, ie(!0), fu(e, ve), uu(e, ve)), l;
    }, r.enable = function(Q) {
      var y = {
        lazy: !0
      }, F, S, O;
      if (i.cursor !== !1 && (y.cursor = i.cursor || Qn), yt.utils.checkPrefix("touchCallout") && (y.touchCallout = "none"), Q !== "soft") {
        for (ou(_, f === h ? "none" : i.allowNativeTouchScrolling && e.scrollHeight === e.clientHeight == (e.scrollWidth === e.clientHeight) || i.allowEventDefault ? "manipulation" : f ? "pan-y" : "pan-x"), S = _.length; --S > -1; )
          O = _[S], _o || se(O, "mousedown", je), se(O, "touchstart", je), se(O, "click", $e, !0), yt.set(O, y), O.getBBox && O.ownerSVGElement && f !== h && yt.set(O.ownerSVGElement, {
            touchAction: i.allowNativeTouchScrolling || i.allowEventDefault ? "manipulation" : f ? "pan-y" : "pan-x"
          }), i.allowContextMenu || se(O, "contextmenu", qt);
        to(_, !1);
      }
      return uu(e, ve), A = !0, Qe && Q !== "soft" && Qe.track(R || e, o ? "x,y" : a ? "rotation" : "top,left"), e._gsDragID = F = e._gsDragID || "d" + k_++, yn[F] = l, R && (R.enable(), R.element._gsDragID = F), (i.bounds || a) && xi(), i.bounds && l.applyBounds(), l;
    }, r.disable = function(Q) {
      for (var y = l.isDragging, F = _.length, S; --F > -1; )
        da(_[F], "cursor", null);
      if (Q !== "soft") {
        for (ou(_, null), F = _.length; --F > -1; )
          S = _[F], da(S, "touchCallout", null), Zt(S, "mousedown", je), Zt(S, "touchstart", je), Zt(S, "click", $e, !0), Zt(S, "contextmenu", qt);
        to(_, !0), tt && (Zt(tt, "touchcancel", zt), Zt(tt, "touchend", zt), Zt(tt, "touchmove", lt)), Zt(B, "mouseup", zt), Zt(B, "mousemove", lt);
      }
      return fu(e, ve), A = !1, Qe && Q !== "soft" && (Qe.untrack(R || e, o ? "x,y" : a ? "rotation" : "top,left"), l.tween && l.tween.kill()), R && R.disable(), lu(ie), l.isDragging = l.isPressed = K = !1, y && Ut(l, "dragend", "onDragEnd"), l;
    }, r.enabled = function(Q, y) {
      return arguments.length ? Q ? l.enable(y) : l.disable(y) : A;
    }, r.kill = function() {
      return l.isThrowing = !1, l.tween && l.tween.kill(), l.disable(), yt.set(_, {
        clearProps: "userSelect"
      }), delete yn[e._gsDragID], l;
    }, r.revert = function() {
      this.kill(), this.styles && this.styles.revert();
    }, ~n.indexOf("scroll") && (R = r.scrollProxy = new I_(e, M_({
      onKill: function() {
        l.isPressed && zt(null);
      }
    }, i)), e.style.overflowY = h && !el ? "auto" : "hidden", e.style.overflowX = f && !el ? "auto" : "hidden", e = R.content), a ? p.rotation = 1 : (f && (p[c] = 1), h && (p[u] = 1)), C.force3D = "force3D" in i ? i.force3D : !0, mh(ru(r)), r.enable(), r;
  }
  return t.register = function(i) {
    yt = i, _a();
  }, t.create = function(i, r) {
    return tl || _a(!0), fr(i).map(function(n) {
      return new t(n, r);
    });
  }, t.get = function(i) {
    return yn[(fr(i)[0] || {})._gsDragID];
  }, t.timeSinceDrag = function() {
    return (ir() - su) / 1e3;
  }, t.hitTest = function(i, r, n) {
    if (i === r)
      return !1;
    var o = tn(i), a = tn(r), c = o.top, u = o.left, f = o.right, h = o.bottom, d = o.width, l = o.height, _ = a.left > f || a.right < u || a.top > h || a.bottom < c, p, g, w;
    return _ || !n ? !_ : (w = (n + "").indexOf("%") !== -1, n = parseFloat(n) || 0, p = {
      left: Math.max(u, a.left),
      top: Math.max(c, a.top)
    }, p.width = Math.min(f, a.right) - p.left, p.height = Math.min(h, a.bottom) - p.top, p.width < 0 || p.height < 0 ? !1 : w ? (n *= 0.01, g = p.width * p.height, g >= d * l * n || g >= a.width * a.height * n) : p.width > n && p.height > n);
  }, t;
}(B_);
O_(Ln.prototype, {
  pointerX: 0,
  pointerY: 0,
  startX: 0,
  startY: 0,
  deltaX: 0,
  deltaY: 0,
  isDragging: !1,
  isPressed: !1
});
Ln.zIndex = 1e3;
Ln.version = "3.15.0";
vh() && yt.registerPlugin(Ln);
/*!
 * VelocityTracker: 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Ai, sl, ps, Sh, sn, Dr, ol, Th, Eh = function() {
  return Ai || typeof window < "u" && (Ai = window.gsap);
}, al = {}, $_ = function(t) {
  return Math.round(t * 1e4) / 1e4;
}, ll = function(t) {
  return Th(t).id;
}, Zn = function(t) {
  return al[ll(typeof t == "string" ? ps(t)[0] : t)];
}, pu = function(t) {
  var e = sn, i;
  if (t - ol >= 0.05)
    for (ol = t; e; )
      i = e.g(e.t, e.p), (i !== e.v1 || t - e.t1 > 0.2) && (e.v2 = e.v1, e.v1 = i, e.t2 = e.t1, e.t1 = t), e = e._next;
}, z_ = {
  deg: 360,
  rad: Math.PI * 2
}, ga = function() {
  Ai = Eh(), Ai && (ps = Ai.utils.toArray, Sh = Ai.utils.getUnit, Th = Ai.core.getCache, Dr = Ai.ticker, sl = 1);
}, Y_ = function(t, e, i, r) {
  this.t = t, this.p = e, this.g = t._gsap.get, this.rCap = z_[i || Sh(this.g(t, e))], this.v1 = this.v2 = this.g(t, e), this.t1 = this.t2 = Dr.time, r && (this._next = r, r._prev = this);
}, Fs = /* @__PURE__ */ function() {
  function s(e, i) {
    sl || ga(), this.target = ps(e)[0], al[ll(this.target)] = this, this._props = {}, i && this.add(i);
  }
  s.register = function(i) {
    Ai = i, ga();
  };
  var t = s.prototype;
  return t.get = function(i, r) {
    var n = this._props[i] || console.warn("Not tracking " + i + " velocity."), o, a, c;
    return o = parseFloat(r ? n.v1 : n.g(n.t, n.p)), a = o - parseFloat(n.v2), c = n.rCap, c && (a = a % c, a !== a % (c / 2) && (a = a < 0 ? a + c : a - c)), $_(a / ((r ? n.t1 : Dr.time) - n.t2));
  }, t.getAll = function() {
    var i = {}, r = this._props, n;
    for (n in r)
      i[n] = this.get(n);
    return i;
  }, t.isTracking = function(i) {
    return i in this._props;
  }, t.add = function(i, r) {
    var n = this._props[i];
    n ? (n.v1 = n.v2 = n.g(n.t, n.p), n.t1 = n.t2 = Dr.time) : (sn || (Dr.add(pu), ol = Dr.time), sn = this._props[i] = new Y_(this.target, i, r, sn));
  }, t.remove = function(i) {
    var r = this._props[i], n, o;
    r && (n = r._prev, o = r._next, n && (n._next = o), o ? o._prev = n : sn === r && (Dr.remove(pu), sn = 0), delete this._props[i]);
  }, t.kill = function(i) {
    for (var r in this._props)
      this.remove(r);
    i || delete al[ll(this.target)];
  }, s.track = function(i, r, n) {
    sl || ga();
    for (var o = [], a = ps(i), c = r.split(","), u = (n || "").split(","), f = a.length, h, d; f--; ) {
      for (h = Zn(a[f]) || new s(a[f]), d = c.length; d--; )
        h.add(c[d], u[d] || u[0]);
      o.push(h);
    }
    return o;
  }, s.untrack = function(i, r) {
    var n = r && r.split(",");
    ps(i).forEach(function(o) {
      var a = Zn(o);
      a && (n ? n.forEach(function(c) {
        return a.remove(c);
      }) : a.kill(1));
    });
  }, s.isTracking = function(i, r) {
    var n = Zn(i);
    return n && n.isTracking(r);
  }, s.getVelocity = function(i, r) {
    var n = Zn(i);
    return !n || !n.isTracking(r) ? console.warn("Not tracking velocity of " + r) : n.get(r);
  }, s;
}();
Fs.getByTarget = Zn;
Eh() && Ai.registerPlugin(Fs);
/*!
 * InertiaPlugin 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var oe, Ch, _u, kh, cl, _s, Ph, Mh, Dh, Ql, Oh, gs, ul, Lh, Lo = Fs.getByTarget, Ah = function() {
  return oe || typeof window < "u" && (oe = window.gsap) && oe.registerPlugin && oe;
}, X_ = function(t) {
  return typeof t == "string";
}, Ls = function(t) {
  return typeof t == "number";
}, _r = function(t) {
  return typeof t == "object";
}, fl = function(t) {
  return typeof t == "function";
}, W_ = 1, Rh = Array.isArray, V_ = function(t) {
  return t;
}, Xr = 1e10, gu = 1 / Xr, Nh = 0.05, H_ = function(t) {
  return Math.round(t * 1e4) / 1e4;
}, q_ = function(t, e, i) {
  for (var r in e)
    !(r in t) && r !== i && (t[r] = e[r]);
  return t;
}, U_ = function s(t) {
  var e = {}, i, r;
  for (i in t)
    e[i] = _r(r = t[i]) && !Rh(r) ? s(r) : r;
  return e;
}, mu = function(t, e, i, r, n) {
  var o = e.length, a = 0, c = Xr, u, f, h, d;
  if (_r(t)) {
    for (; o--; ) {
      u = e[o], f = 0;
      for (h in t)
        d = u[h] - t[h], f += d * d;
      f < c && (a = o, c = f);
    }
    if ((n || Xr) < Xr && n < Math.sqrt(c))
      return t;
  } else
    for (; o--; )
      u = e[o], f = u - t, f < 0 && (f = -f), f < c && u >= r && u <= i && (a = o, c = f);
  return e[a];
}, Fh = function(t, e, i, r, n, o, a) {
  if (t.end === "auto")
    return t;
  var c = t.end, u, f;
  if (i = isNaN(i) ? Xr : i, r = isNaN(r) ? -Xr : r, _r(e)) {
    if (u = e.calculated ? e : (fl(c) ? c(e, a) : mu(e, c, i, r, o)) || e, !e.calculated) {
      for (f in u)
        e[f] = u[f];
      e.calculated = !0;
    }
    u = u[n];
  } else
    u = fl(c) ? c(e, a) : Rh(c) ? mu(e, c, i, r, o) : parseFloat(c);
  return u > i ? u = i : u < r && (u = r), {
    max: u,
    min: u,
    unitFactor: t.unitFactor
  };
}, Ao = function(t, e, i) {
  return isNaN(t[e]) ? i : +t[e];
}, Zl = function(t, e) {
  return e * Nh * t / Ql;
}, yu = function(t, e, i) {
  return Math.abs((e - t) * Ql / i / Nh);
}, Ih = {
  resistance: 1,
  checkpoint: 1,
  preventOvershoot: 1,
  linkedProps: 1,
  radius: 1,
  duration: 1
}, Bh = function(t, e, i, r) {
  if (e.linkedProps) {
    var n = e.linkedProps.split(","), o = {}, a, c, u, f, h, d;
    for (a = 0; a < n.length; a++)
      c = n[a], u = e[c], u && (Ls(u.velocity) ? f = u.velocity : (h = h || Lo(t), f = h && h.isTracking(c) ? h.get(c) : 0), d = Math.abs(f / Ao(u, "resistance", r)), o[c] = parseFloat(i(t, c)) + Zl(f, d));
    return o;
  }
}, G_ = function(t, e, i, r, n, o) {
  if (i === void 0 && (i = 10), r === void 0 && (r = 0.2), n === void 0 && (n = 1), X_(t) && (t = kh(t)[0]), !t)
    return 0;
  var a = 0, c = Xr, u = e.inertia || e, f = Dh(t).get, h = Ao(u, "resistance", _s.resistance), d, l, _, p, g, w, T, x, b, m;
  m = Bh(t, u, f, h);
  for (d in u)
    Ih[d] || (l = u[d], _r(l) || (x = x || Lo(t), x && x.isTracking(d) ? l = Ls(l) ? {
      velocity: l
    } : {
      velocity: x.get(d)
    } : (p = +l || 0, _ = Math.abs(p / h))), _r(l) && (Ls(l.velocity) ? p = l.velocity : (x = x || Lo(t), p = x && x.isTracking(d) ? x.get(d) : 0), _ = Oh(r, i, Math.abs(p / Ao(l, "resistance", h))), g = parseFloat(f(t, d)) || 0, w = g + Zl(p, _), "end" in l && (l = Fh(l, m && d in m ? m : w, l.max, l.min, d, u.radius, p), gs === e && (gs = u = U_(e)), u[d] = q_(l, u[d], "end")), "max" in l && w > +l.max + gu ? (b = l.unitFactor || _s.unitFactors[d] || 1, T = g > l.max && l.min !== l.max || p * b > -15 && p * b < 45 ? r + (i - r) * 0.1 : yu(g, l.max, p), T + n < c && (c = T + n)) : "min" in l && w < +l.min - gu && (b = l.unitFactor || _s.unitFactors[d] || 1, T = g < l.min && l.min !== l.max || p * b > -45 && p * b < 15 ? r + (i - r) * 0.1 : yu(g, l.min, p), T + n < c && (c = T + n)), T > a && (a = T)), _ > a && (a = _));
  return a > c && (a = c), a > i ? i : a < r ? r : a;
}, vu = function() {
  oe = Ah(), oe && (_u = oe.parseEase, kh = oe.utils.toArray, Ph = oe.utils.getUnit, Dh = oe.core.getCache, Oh = oe.utils.clamp, ul = oe.core.getStyleSaver, Lh = oe.core.reverting || function() {
  }, cl = _u("power3"), Ql = cl(0.05), Mh = oe.core.PropTween, oe.config({
    resistance: 100,
    unitFactors: {
      time: 1e3,
      totalTime: 1e3,
      progress: 1e3,
      totalProgress: 1e3
    }
  }), _s = oe.config(), oe.registerPlugin(Fs), Ch = 1);
}, Jl = {
  version: "3.15.0",
  name: "inertia",
  register: function(t) {
    oe = t, vu();
  },
  init: function(t, e, i, r, n) {
    Ch || vu();
    var o = Lo(t);
    if (e === "auto") {
      if (!o) {
        console.warn("No inertia tracking on " + t + ". InertiaPlugin.track(target) first.");
        return;
      }
      e = o.getAll();
    }
    this.styles = ul && typeof t.style == "object" && ul(t), this.target = t, this.tween = i, gs = e;
    var a = t._gsap, c = a.get, u = e.duration, f = _r(u), h = e.preventOvershoot || f && u.overshoot === 0, d = Ao(e, "resistance", _s.resistance), l = Ls(u) ? u : G_(t, e, f && u.max || 10, f && u.min || 0.2, f && "overshoot" in u ? +u.overshoot : h ? 0 : 1), _, p, g, w, T, x, b, m, M;
    e = gs, gs = 0, M = Bh(t, e, c, d);
    for (_ in e)
      Ih[_] || (p = e[_], fl(p) && (p = p(r, t, n)), Ls(p) ? T = p : _r(p) && !isNaN(p.velocity) ? T = +p.velocity : o && o.isTracking(_) ? T = o.get(_) : console.warn("ERROR: No velocity was defined for " + t + " property: " + _), x = Zl(T, l), m = 0, g = c(t, _), w = Ph(g), g = parseFloat(g), _r(p) && (b = g + x, "end" in p && (p = Fh(p, M && _ in M ? M : b, p.max, p.min, _, e.radius, T)), "max" in p && +p.max < b ? h || p.preventOvershoot ? x = p.max - g : m = p.max - g - x : "min" in p && +p.min > b && (h || p.preventOvershoot ? x = p.min - g : m = p.min - g - x)), this._props.push(_), this.styles && this.styles.save(_), this._pt = new Mh(this._pt, t, _, g, 0, V_, 0, a.set(t, _, this)), this._pt.u = w || 0, this._pt.c1 = x, this._pt.c2 = m);
    return i.duration(l), W_;
  },
  render: function(t, e) {
    var i = e._pt;
    if (t = cl(e.tween._time / e.tween._dur), t || !Lh())
      for (; i; )
        i.set(i.t, i.p, H_(i.s + i.c1 * t + i.c2 * t * t) + i.u, i.d, t), i = i._next;
    else
      e.styles.revert();
  }
};
"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(s) {
  return Jl[s] = Fs[s];
});
Ah() && oe.registerPlugin(Jl);
/*!
 * Flip 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var j_ = 1, Mn, pe, Ft, ms, sr, Gi, hl, wu = function(t, e) {
  return t.actions.forEach(function(i) {
    return i.vars[e] && i.vars[e](i);
  });
}, dl = {}, xu = 180 / Math.PI, K_ = Math.PI / 180, Ro = {}, bu = {}, Xo = {}, tc = function(t) {
  return typeof t == "string" ? t.split(" ").join("").split(",") : t;
}, Q_ = tc("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"), Wo = tc("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"), ys = function(t) {
  return Mn(t)[0] || console.warn("Element not found:", t);
}, cn = function(t) {
  return Math.round(t * 1e4) / 1e4 || 0;
}, ma = function(t, e, i) {
  return t.forEach(function(r) {
    return r.classList[i](e);
  });
}, Su = {
  zIndex: 1,
  kill: 1,
  simple: 1,
  spin: 1,
  clearProps: 1,
  targets: 1,
  toggleClass: 1,
  onComplete: 1,
  onUpdate: 1,
  onInterrupt: 1,
  onStart: 1,
  delay: 1,
  repeat: 1,
  repeatDelay: 1,
  yoyo: 1,
  scale: 1,
  fade: 1,
  absolute: 1,
  props: 1,
  onEnter: 1,
  onLeave: 1,
  custom: 1,
  paused: 1,
  nested: 1,
  prune: 1,
  absoluteOnLeave: 1
}, $h = {
  zIndex: 1,
  simple: 1,
  clearProps: 1,
  scale: 1,
  absolute: 1,
  fitChild: 1,
  getVars: 1,
  props: 1
}, zh = function(t) {
  return t.replace(/([A-Z])/g, "-$1").toLowerCase();
}, un = function(t, e) {
  var i = {}, r;
  for (r in t)
    e[r] || (i[r] = t[r]);
  return i;
}, ec = {}, Yh = function(t) {
  var e = ec[t] = tc(t);
  return Xo[t] = e.concat(Wo), e;
}, Z_ = function(t) {
  var e = t._gsap || pe.core.getCache(t);
  return e.gmCache === pe.ticker.frame ? e.gMatrix : (e.gmCache = pe.ticker.frame, e.gMatrix = _e(t, !0, !1, !0));
}, J_ = function s(t, e, i) {
  i === void 0 && (i = 0);
  for (var r = t.parentNode, n = 1e3 * Math.pow(10, i) * (e ? -1 : 1), o = e ? -n * 900 : 0; t; )
    o += n, t = t.previousSibling;
  return r ? o + s(r, e, i + 1) : o;
}, No = function(t, e, i) {
  return t.forEach(function(r) {
    return r.d = J_(i ? r.element : r.t, e);
  }), t.sort(function(r, n) {
    return r.d - n.d;
  }), t;
}, As = function(t, e) {
  for (var i = t.element.style, r = t.css = t.css || [], n = e.length, o, a; n--; )
    o = e[n], a = i[o] || i.getPropertyValue(o), r.push(a ? o : bu[o] || (bu[o] = zh(o)), a);
  return i;
}, Fo = function(t) {
  var e = t.css, i = t.element.style, r = 0;
  for (t.cache.uncache = 1; r < e.length; r += 2)
    e[r + 1] ? i[e[r]] = e[r + 1] : i.removeProperty(e[r]);
  !e[e.indexOf("transform") + 1] && i.translate && (i.removeProperty("translate"), i.removeProperty("scale"), i.removeProperty("rotate"));
}, Tu = function(t, e) {
  t.forEach(function(i) {
    return i.a.cache.uncache = 1;
  }), e || t.finalStates.forEach(Fo);
}, ya = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","), ic = function(t, e, i) {
  var r = t.element, n = t.width, o = t.height, a = t.uncache, c = t.getProp, u = r.style, f = 4, h, d, l;
  if (typeof e != "object" && (e = t), Ft && i !== 1)
    return Ft._abs.push({
      t: r,
      b: t,
      a: t,
      sd: 0
    }), Ft._final.push(function() {
      return (t.cache.uncache = 1) && Fo(t);
    }), r;
  for (d = c("display") === "none", (!t.isVisible || d) && (d && (As(t, ["display"]).display = e.display), t.matrix = e.matrix, t.width = n = t.width || e.width, t.height = o = t.height || e.height), As(t, ya), l = window.getComputedStyle(r); f--; )
    u[ya[f]] = l[ya[f]];
  if (u.gridArea = "1 / 1 / 1 / 1", u.transition = "none", u.position = "absolute", u.width = n + "px", u.height = o + "px", u.top || (u.top = "0px"), u.left || (u.left = "0px"), a)
    h = new qr(r);
  else if (h = un(t, Ro), h.position = "absolute", t.simple) {
    var _ = r.getBoundingClientRect();
    h.matrix = new Zi(1, 0, 0, 1, _.left + Gl(), _.top + Ul());
  } else
    h.matrix = _e(r, !1, !1, !0);
  return h = xn(h, t, !0), t.x = Gi(h.x, 0.01), t.y = Gi(h.y, 0.01), r;
}, Eu = function(t, e) {
  return e !== !0 && (e = Mn(e), t = t.filter(function(i) {
    if (e.indexOf((i.sd < 0 ? i.b : i.a).element) !== -1)
      return !0;
    i.t._gsap.renderTransform(1), i.b.isVisible && (i.t.style.width = i.b.width + "px", i.t.style.height = i.b.height + "px");
  })), t;
}, Xh = function(t) {
  return No(t, !0).forEach(function(e) {
    return (e.a.isVisible || e.b.isVisible) && ic(e.sd < 0 ? e.b : e.a, e.b, 1);
  });
}, tg = function(t, e) {
  return e && t.idLookup[pl(e).id] || t.elementStates[0];
}, pl = function(t, e, i, r) {
  return t instanceof qr ? t : t instanceof Ci ? tg(t, r) : new qr(typeof t == "string" ? ys(t) || console.warn(t + " not found") : t, e, i);
}, eg = function(t, e) {
  for (var i = pe.getProperty(t.element, null, "native"), r = t.props = {}, n = e.length; n--; )
    r[e[n]] = (i(e[n]) + "").trim();
  return r.zIndex && (r.zIndex = parseFloat(r.zIndex) || 0), t;
}, Wh = function(t, e) {
  var i = t.style || t, r;
  for (r in e)
    i[r] = e[r];
}, ig = function(t) {
  var e = t.getAttribute("data-flip-id");
  return e || t.setAttribute("data-flip-id", e = "auto-" + j_++), e;
}, Vh = function(t) {
  return t.map(function(e) {
    return e.element;
  });
}, Cu = function(t, e, i) {
  return t && e.length && i.add(t(Vh(e), i, new Ci(e, 0, !0)), 0);
}, xn = function(t, e, i, r, n, o) {
  var a = t.element, c = t.cache, u = t.parent, f = t.x, h = t.y, d = e.width, l = e.height, _ = e.scaleX, p = e.scaleY, g = e.rotation, w = e.bounds, T = o && hl && hl(a, "transform,width,height"), x = t, b = e.matrix, m = b.e, M = b.f, E = t.bounds.width !== w.width || t.bounds.height !== w.height || t.scaleX !== _ || t.scaleY !== p || t.rotation !== g, C = !E && t.simple && e.simple && !n, D, P, B, A, R, X, $;
  return C || !u ? (_ = p = 1, g = D = 0) : (R = Z_(u), X = R.clone().multiply(e.ctm ? e.matrix.clone().multiply(e.ctm) : e.matrix), g = cn(Math.atan2(X.b, X.a) * xu), D = cn(Math.atan2(X.c, X.d) * xu + g) % 360, _ = Math.sqrt(Math.pow(X.a, 2) + Math.pow(X.b, 2)), p = Math.sqrt(Math.pow(X.c, 2) + Math.pow(X.d, 2)) * Math.cos(D * K_), n && (n = Mn(n)[0], A = pe.getProperty(n), $ = n.getBBox && typeof n.getBBox == "function" && n.getBBox(), x = {
    scaleX: A("scaleX"),
    scaleY: A("scaleY"),
    width: $ ? $.width : Math.ceil(parseFloat(A("width", "px"))),
    height: $ ? $.height : parseFloat(A("height", "px"))
  }), c.rotation = g + "deg", c.skewX = D + "deg"), i ? (_ *= d === x.width || !x.width ? 1 : d / x.width, p *= l === x.height || !x.height ? 1 : l / x.height, c.scaleX = _, c.scaleY = p) : (d = Gi(d * _ / x.scaleX, 0), l = Gi(l * p / x.scaleY, 0), a.style.width = d + "px", a.style.height = l + "px"), r && Wh(a, e.props), C || !u ? (f += m - t.matrix.e, h += M - t.matrix.f) : E || u !== e.parent ? (c.x = f + "px", c.y = h + "px", c.renderTransform(1, c), X = _e(n || a, !1, !1, !0), P = R.apply({
    x: X.e,
    y: X.f
  }), B = R.apply({
    x: m,
    y: M
  }), f += B.x - P.x, h += B.y - P.y) : (R.e = R.f = 0, B = R.apply({
    x: m - t.matrix.e,
    y: M - t.matrix.f
  }), f += B.x, h += B.y), f = Gi(f, 0.02), h = Gi(h, 0.02), o && !(o instanceof qr) ? T && T.revert() : (c.x = f + "px", c.y = h + "px", c.renderTransform(1, c)), o && (o.x = f, o.y = h, o.rotation = g, o.skewX = D, i ? (o.scaleX = _, o.scaleY = p) : (o.width = d, o.height = l)), o || c;
}, va = function(t, e) {
  return t instanceof Ci ? t : new Ci(t, e);
}, Hh = function(t, e, i) {
  var r = t.idLookup[i], n = t.alt[i];
  return n.isVisible && (!(e.getElementState(n.element) || n).isVisible || !r.isVisible) ? n : r;
}, wa = [], xa = "width,height,overflowX,overflowY".split(","), eo, ku = function(t) {
  if (t !== eo) {
    var e = sr.style, i = sr.clientWidth === window.outerWidth, r = sr.clientHeight === window.outerHeight, n = 4;
    if (t && (i || r)) {
      for (; n--; )
        wa[n] = e[xa[n]];
      i && (e.width = sr.clientWidth + "px", e.overflowY = "hidden"), r && (e.height = sr.clientHeight + "px", e.overflowX = "hidden"), eo = t;
    } else if (eo) {
      for (; n--; )
        wa[n] ? e[xa[n]] = wa[n] : e.removeProperty(zh(xa[n]));
      eo = t;
    }
  }
}, Pu = function(t, e) {
  for (var i = 0; i < t.length; i += 3)
    pe.set(t[i], {
      clearProps: !0
    }), t[i].setAttribute("style", t[i + e]), t[i]._gsap.gmCache = -1;
}, ba = function(t, e, i, r) {
  t instanceof Ci && e instanceof Ci || console.warn("Not a valid state object."), i = i || {};
  var n = i, o = n.clearProps, a = n.onEnter, c = n.onLeave, u = n.absolute, f = n.absoluteOnLeave, h = n.custom, d = n.delay, l = n.paused, _ = n.repeat, p = n.repeatDelay, g = n.yoyo, w = n.toggleClass, T = n.nested, x = n.zIndex, b = n.scale, m = n.fade, M = n.stagger, E = n.spin, C = n.prune, D = ("props" in i ? i : t).props, P = un(i, Su), B = pe.timeline({
    delay: d,
    paused: l,
    repeat: _,
    repeatDelay: p,
    yoyo: g,
    data: "isFlip"
  }), A = P, R = [], X = [], $ = [], V = [], Y = E === !0 ? 1 : E || 0, nt = typeof E == "function" ? E : function() {
    return Y;
  }, st = t.interrupted || e.interrupted, v = B[r !== 1 ? "to" : "from"], G, H, ht, J, ot, et, wt, at, It, Dt, xt, Ot, K, tt;
  for (H in e.idLookup)
    xt = e.alt[H] ? Hh(e, t, H) : e.idLookup[H], ot = xt.element, Dt = t.idLookup[H], t.alt[H] && ot === Dt.element && (t.alt[H].isVisible || !xt.isVisible) && (Dt = t.alt[H]), Dt ? (et = {
      t: ot,
      b: Dt,
      a: xt,
      sd: Dt.element === ot ? 0 : xt.isVisible ? 1 : -1
    }, $.push(et), et.sd && (et.sd < 0 && (et.b = xt, et.a = Dt), st && As(et.b, D ? Xo[D] : Wo), m && $.push(et.swap = {
      t: Dt.element,
      b: et.b,
      a: et.a,
      sd: -et.sd,
      swap: et
    })), ot._flip = Dt.element._flip = Ft ? Ft.timeline : B) : xt.isVisible && ($.push({
      t: ot,
      b: un(xt, {
        isVisible: 1
      }),
      a: xt,
      sd: 0,
      entering: 1
    }), ot._flip = Ft ? Ft.timeline : B);
  if (D && (ec[D] || Yh(D)).forEach(function(k) {
    return P[k] = function(St) {
      return $[St].a.props[k];
    };
  }), $.finalStates = It = [], Ot = function() {
    No($), ku(!0);
    var St = [];
    for (J = 0; J < $.length; J++)
      et = $[J], K = et.a, tt = et.b, C && !K.isDifferent(tt) && !et.entering ? $.splice(J--, 1) : (ot = et.t, T && !(et.sd < 0) && J && (K = et.a = K.clone({
        matrix: _e(ot, !1, !1, !0)
      })), tt.isVisible && K.isVisible ? (et.sd < 0 ? (T && Pu(St, 1), wt = new qr(ot, D, t.simple), xn(wt, K, b, 0, 0, wt), wt.matrix = _e(ot, !1, !1, !0), wt.bounds = ot.getBoundingClientRect(), wt.css = et.b.css, et.a = K = wt, m && (ot.style.opacity = st ? tt.opacity : K.opacity), M && V.push(ot), T && (Pu(St, 2), St.push(ot, ot.getAttribute("style")))) : et.sd > 0 && m && (ot.style.opacity = st ? K.opacity - tt.opacity : "0"), xn(K, tt, b, D), T && et.sd < 0 && St.push(ot.getAttribute("style"))) : tt.isVisible !== K.isVisible && (tt.isVisible ? K.isVisible || (tt.css = K.css, X.push(tt), $.splice(J--, 1), u && T && xn(K, tt, b, D)) : (K.isVisible && R.push(K), $.splice(J--, 1))), b || (ot.style.maxWidth = Math.max(K.width, tt.width) + "px", ot.style.maxHeight = Math.max(K.height, tt.height) + "px", ot.style.minWidth = Math.min(K.width, tt.width) + "px", ot.style.minHeight = Math.min(K.height, tt.height) + "px"), T && w && ot.classList.add(w)), It.push(K);
    var ee;
    if (w && (ee = It.map(function(j) {
      return j.element;
    }), T && ee.forEach(function(j) {
      return j.classList.remove(w);
    })), ku(!1), b ? (P.scaleX = function(j) {
      return $[j].a.scaleX;
    }, P.scaleY = function(j) {
      return $[j].a.scaleY;
    }) : (P.width = function(j) {
      return $[j].a.width + "px";
    }, P.height = function(j) {
      return $[j].a.height + "px";
    }, P.autoRound = i.autoRound || !1), P.x = function(j) {
      return $[j].a.x + "px";
    }, P.y = function(j) {
      return $[j].a.y + "px";
    }, P.rotation = function(j) {
      return $[j].a.rotation + (E ? nt(j, at[j], at) * 360 : 0);
    }, P.skewX = function(j) {
      return $[j].a.skewX;
    }, at = $.map(function(j) {
      return j.t;
    }), (x || x === 0) && (P.modifiers = {
      zIndex: function() {
        return x;
      }
    }, P.zIndex = x, P.immediateRender = i.immediateRender !== !1), m && (P.opacity = function(j) {
      return $[j].sd < 0 ? 0 : $[j].sd > 0 ? $[j].a.opacity : "+=0";
    }), V.length) {
      M = pe.utils.distribute(M);
      var Fe = at.slice(V.length);
      P.stagger = function(j, Ie) {
        return M(~V.indexOf(Ie) ? at.indexOf($[j].swap.t) : j, Ie, Fe);
      };
    }
    if (Q_.forEach(function(j) {
      return i[j] && B.eventCallback(j, i[j], i[j + "Params"]);
    }), h && at.length) {
      A = un(P, Su), "scale" in h && (h.scaleX = h.scaleY = h.scale, delete h.scale);
      for (H in h)
        G = un(h[H], $h), G[H] = P[H], !("duration" in G) && "duration" in P && (G.duration = P.duration), G.stagger = P.stagger, v.call(B, at, G, 0), delete A[H];
    }
    (at.length || X.length || R.length) && (w && B.add(function() {
      return ma(ee, w, B._zTime < 0 ? "remove" : "add");
    }, 0) && !l && ma(ee, w, "add"), at.length && v.call(B, at, A, 0)), Cu(a, R, B), Cu(c, X, B);
    var Ct = Ft && Ft.timeline;
    Ct && (Ct.add(B, 0), Ft._final.push(function() {
      return Tu($, !o);
    })), ht = B.duration(), B.call(function() {
      var j = B.time() >= ht;
      j && !Ct && Tu($, !o), w && ma(ee, w, j ? "remove" : "add");
    });
  }, f && (u = $.filter(function(k) {
    return !k.sd && !k.a.isVisible && k.b.isVisible;
  }).map(function(k) {
    return k.a.element;
  })), Ft) {
    var it;
    u && (it = Ft._abs).push.apply(it, Eu($, u)), Ft._run.push(Ot);
  } else
    u && Xh(Eu($, u)), Ot();
  var Qt = Ft ? Ft.timeline : B;
  return Qt.revert = function() {
    return rc(Qt, 1, 1);
  }, Qt;
}, rg = function s(t) {
  t.vars.onInterrupt && t.vars.onInterrupt.apply(t, t.vars.onInterruptParams || []), t.getChildren(!0, !1, !0).forEach(s);
}, rc = function(t, e, i) {
  if (t && t.progress() < 1 && (!t.paused() || i))
    return e && (rg(t), e < 2 && t.progress(1), t.kill()), !0;
}, io = function(t) {
  for (var e = t.idLookup = {}, i = t.alt = {}, r = t.elementStates, n = r.length, o; n--; )
    o = r[n], e[o.id] ? i[o.id] = o : e[o.id] = o;
}, Ci = /* @__PURE__ */ function() {
  function s(e, i, r) {
    if (this.props = i && i.props, this.simple = !!(i && i.simple), r)
      this.targets = Vh(e), this.elementStates = e, io(this);
    else {
      this.targets = Mn(e);
      var n = i && (i.kill === !1 || i.batch && !i.kill);
      Ft && !n && Ft._kill.push(this), this.update(n || !!Ft);
    }
  }
  var t = s.prototype;
  return t.update = function(i) {
    var r = this;
    return this.elementStates = this.targets.map(function(n) {
      return new qr(n, r.props, r.simple);
    }), io(this), this.interrupt(i), this.recordInlineStyles(), this;
  }, t.clear = function() {
    return this.targets.length = this.elementStates.length = 0, io(this), this;
  }, t.fit = function(i, r, n) {
    for (var o = No(this.elementStates.slice(0), !1, !0), a = (i || this).idLookup, c = 0, u, f; c < o.length; c++)
      u = o[c], n && (u.matrix = _e(u.element, !1, !1, !0)), f = a[u.id], f && xn(u, f, r, !0, 0, u), u.matrix = _e(u.element, !1, !1, !0);
    return this;
  }, t.getProperty = function(i, r) {
    var n = this.getElementState(i) || Ro;
    return (r in n ? n : n.props || Ro)[r];
  }, t.add = function(i) {
    for (var r = i.targets.length, n = this.idLookup, o = this.alt, a, c, u; r--; )
      c = i.elementStates[r], u = n[c.id], u && (c.element === u.element || o[c.id] && o[c.id].element === c.element) ? (a = this.elementStates.indexOf(c.element === u.element ? u : o[c.id]), this.targets.splice(a, 1, i.targets[r]), this.elementStates.splice(a, 1, c)) : (this.targets.push(i.targets[r]), this.elementStates.push(c));
    return i.interrupted && (this.interrupted = !0), i.simple || (this.simple = !1), io(this), this;
  }, t.compare = function(i) {
    var r = i.idLookup, n = this.idLookup, o = [], a = [], c = [], u = [], f = [], h = i.alt, d = this.alt, l = function(C, D, P) {
      return (C.isVisible !== D.isVisible ? C.isVisible ? c : u : C.isVisible ? a : o).push(P) && f.push(P);
    }, _ = function(C, D, P) {
      return f.indexOf(P) < 0 && l(C, D, P);
    }, p, g, w, T, x, b, m, M;
    for (w in r)
      x = h[w], b = d[w], p = x ? Hh(i, this, w) : r[w], T = p.element, g = n[w], b ? (M = g.isVisible || !b.isVisible && T === g.element ? g : b, m = x && !p.isVisible && !x.isVisible && M.element === x.element ? x : p, m.isVisible && M.isVisible && m.element !== M.element ? ((m.isDifferent(M) ? a : o).push(m.element, M.element), f.push(m.element, M.element)) : l(m, M, m.element), x && m.element === x.element && (x = r[w]), _(m.element !== g.element && x ? x : m, g, g.element), _(x && x.element === b.element ? x : m, b, b.element), x && _(x, b.element === x.element ? b : g, x.element)) : (g ? g.isDifferent(p) ? l(p, g, T) : o.push(T) : c.push(T), x && _(x, g, x.element));
    for (w in n)
      r[w] || (u.push(n[w].element), d[w] && u.push(d[w].element));
    return {
      changed: a,
      unchanged: o,
      enter: c,
      leave: u
    };
  }, t.recordInlineStyles = function() {
    for (var i = Xo[this.props] || Wo, r = this.elementStates.length; r--; )
      As(this.elementStates[r], i);
  }, t.interrupt = function(i) {
    var r = this, n = [];
    this.targets.forEach(function(o) {
      var a = o._flip, c = rc(a, i ? 0 : 1);
      i && c && n.indexOf(a) < 0 && a.add(function() {
        return r.updateVisibility();
      }), c && n.push(a);
    }), !i && n.length && this.updateVisibility(), this.interrupted || (this.interrupted = !!n.length);
  }, t.updateVisibility = function() {
    this.elementStates.forEach(function(i) {
      var r = i.element.getBoundingClientRect();
      i.isVisible = !!(r.width || r.height || r.top || r.left), i.uncache = 1;
    });
  }, t.getElementState = function(i) {
    return this.elementStates[this.targets.indexOf(ys(i))];
  }, t.makeAbsolute = function() {
    return No(this.elementStates.slice(0), !0, !0).map(ic);
  }, s;
}(), qr = /* @__PURE__ */ function() {
  function s(e, i, r) {
    e instanceof s ? Object.assign(this, e, i || {}) : (this.element = e, this.update(i, r));
  }
  var t = s.prototype;
  return t.isDifferent = function(i) {
    var r = this.bounds, n = i.bounds;
    return r.top !== n.top || r.left !== n.left || r.width !== n.width || r.height !== n.height || !this.matrix.equals(i.matrix) || this.opacity !== i.opacity || this.props && i.props && JSON.stringify(this.props) !== JSON.stringify(i.props);
  }, t.clone = function(i) {
    return new s(this, i);
  }, t.update = function(i, r) {
    var n = this, o = n.element, a = pe.getProperty(o), c = pe.core.getCache(o), u = o.getBoundingClientRect(), f = o.getBBox && typeof o.getBBox == "function" && o.nodeName.toLowerCase() !== "svg" && o.getBBox(), h = r ? new Zi(1, 0, 0, 1, u.left + Gl(), u.top + Ul()) : _e(o, !1, !1, !0);
    c.uncache = 1, n.getProp = a, n.element = o, n.id = ig(o), n.matrix = h, n.cache = c, n.bounds = u, n.isVisible = !!(u.width || u.height || u.left || u.top), n.display = a("display"), n.position = a("position"), n.parent = o.parentNode, n.x = a("x", "px"), n.y = a("y", "px"), n.scaleX = c.scaleX, n.scaleY = c.scaleY, n.rotation = a("rotation"), n.skewX = a("skewX"), n.opacity = a("opacity"), n.width = f ? f.width : Gi(a("width", "px"), 0.04), n.height = f ? f.height : Gi(a("height", "px"), 0.04), i && eg(n, ec[i] || Yh(i)), n.ctm = o.getCTM && o.nodeName.toLowerCase() === "svg" && _h(o).inverse(), n.simple = r || cn(h.a) === 1 && !cn(h.b) && !cn(h.c) && cn(h.d) === 1, n.uncache = 0;
  }, s;
}(), ng = /* @__PURE__ */ function() {
  function s(e, i) {
    this.vars = e, this.batch = i, this.states = [], this.timeline = i.timeline;
  }
  var t = s.prototype;
  return t.getStateById = function(i) {
    for (var r = this.states.length; r--; )
      if (this.states[r].idLookup[i])
        return this.states[r];
  }, t.kill = function() {
    this.batch.remove(this);
  }, s;
}(), sg = /* @__PURE__ */ function() {
  function s(e) {
    this.id = e, this.actions = [], this._kill = [], this._final = [], this._abs = [], this._run = [], this.data = {}, this.state = new Ci(), this.timeline = pe.timeline();
  }
  var t = s.prototype;
  return t.add = function(i) {
    var r = this.actions.filter(function(n) {
      return n.vars === i;
    });
    return r.length ? r[0] : (r = new ng(typeof i == "function" ? {
      animate: i
    } : i, this), this.actions.push(r), r);
  }, t.remove = function(i) {
    var r = this.actions.indexOf(i);
    return r >= 0 && this.actions.splice(r, 1), this;
  }, t.getState = function(i) {
    var r = this, n = Ft, o = ms;
    return Ft = this, this.state.clear(), this._kill.length = 0, this.actions.forEach(function(a) {
      a.vars.getState && (a.states.length = 0, ms = a, a.state = a.vars.getState(a)), i && a.states.forEach(function(c) {
        return r.state.add(c);
      });
    }), ms = o, Ft = n, this.killConflicts(), this;
  }, t.animate = function() {
    var i = this, r = Ft, n = this.timeline, o = this.actions.length, a, c;
    for (Ft = this, n.clear(), this._abs.length = this._final.length = this._run.length = 0, this.actions.forEach(function(u) {
      u.vars.animate && u.vars.animate(u);
      var f = u.vars.onEnter, h = u.vars.onLeave, d = u.targets, l, _;
      d && d.length && (f || h) && (l = new Ci(), u.states.forEach(function(p) {
        return l.add(p);
      }), _ = l.compare(Dn.getState(d)), _.enter.length && f && f(_.enter), _.leave.length && h && h(_.leave));
    }), Xh(this._abs), this._run.forEach(function(u) {
      return u();
    }), c = n.duration(), a = this._final.slice(0), n.add(function() {
      c <= n.time() && (a.forEach(function(u) {
        return u();
      }), wu(i, "onComplete"));
    }), Ft = r; o--; )
      this.actions[o].vars.once && this.actions[o].kill();
    return wu(this, "onStart"), n.restart(), this;
  }, t.loadState = function(i) {
    i || (i = function() {
      return 0;
    });
    var r = [];
    return this.actions.forEach(function(n) {
      if (n.vars.loadState) {
        var o, a = function c(u) {
          u && (n.targets = u), o = r.indexOf(c), ~o && (r.splice(o, 1), r.length || i());
        };
        r.push(a), n.vars.loadState(a);
      }
    }), r.length || i(), this;
  }, t.setState = function() {
    return this.actions.forEach(function(i) {
      return i.targets = i.vars.setState && i.vars.setState(i);
    }), this;
  }, t.killConflicts = function(i) {
    return this.state.interrupt(i), this._kill.forEach(function(r) {
      return r.interrupt(i);
    }), this;
  }, t.run = function(i, r) {
    var n = this;
    return this !== Ft && (i || this.getState(r), this.loadState(function() {
      n._killed || (n.setState(), n.animate());
    })), this;
  }, t.clear = function(i) {
    this.state.clear(), i || (this.actions.length = 0);
  }, t.getStateById = function(i) {
    for (var r = this.actions.length, n; r--; )
      if (n = this.actions[r].getStateById(i), n)
        return n;
    return this.state.idLookup[i] && this.state;
  }, t.kill = function() {
    this._killed = 1, this.clear(), delete dl[this.id];
  }, s;
}(), Dn = /* @__PURE__ */ function() {
  function s() {
  }
  return s.getState = function(e, i) {
    var r = va(e, i);
    return ms && ms.states.push(r), i && i.batch && s.batch(i.batch).state.add(r), r;
  }, s.from = function(e, i) {
    return i = i || {}, "clearProps" in i || (i.clearProps = !0), ba(e, va(i.targets || e.targets, {
      props: i.props || e.props,
      simple: i.simple,
      kill: !!i.kill
    }), i, -1);
  }, s.to = function(e, i) {
    return ba(e, va(i.targets || e.targets, {
      props: i.props || e.props,
      simple: i.simple,
      kill: !!i.kill
    }), i, 1);
  }, s.fromTo = function(e, i, r) {
    return ba(e, i, r);
  }, s.fit = function(e, i, r) {
    var n = r ? un(r, $h) : {}, o = r || n, a = o.absolute, c = o.scale, u = o.getVars, f = o.props, h = o.runBackwards, d = o.onComplete, l = o.simple, _ = r && r.fitChild && ys(r.fitChild), p = pl(i, f, l, e), g = pl(e, 0, l, p), w = f ? Xo[f] : Wo, T = pe.context();
    return f && Wh(n, p.props), As(g, w), h && ("immediateRender" in n || (n.immediateRender = !0), n.onComplete = function() {
      Fo(g), d && d.apply(this, arguments);
    }), a && ic(g, p), n = xn(g, p, c || _, !n.duration && f, _, n.duration || u ? n : 0), typeof r == "object" && "zIndex" in r && (n.zIndex = r.zIndex), T && !u && T.add(function() {
      return function() {
        return Fo(g);
      };
    }), u ? n : n.duration ? pe.to(g.element, n) : null;
  }, s.makeAbsolute = function(e, i) {
    return (e instanceof Ci ? e : new Ci(e, i)).makeAbsolute();
  }, s.batch = function(e) {
    return e || (e = "default"), dl[e] || (dl[e] = new sg(e));
  }, s.killFlipsOf = function(e, i) {
    (e instanceof Ci ? e.targets : Mn(e)).forEach(function(r) {
      return r && rc(r._flip, i !== !1 ? 1 : 2);
    });
  }, s.isFlipping = function(e) {
    var i = s.getByTarget(e);
    return !!i && i.isActive();
  }, s.getByTarget = function(e) {
    return (ys(e) || Ro)._flip;
  }, s.getElementState = function(e, i) {
    return new qr(ys(e), i);
  }, s.convertCoordinates = function(e, i, r) {
    var n = _e(i, !0, !0).multiply(_e(e));
    return r ? n.apply(r) : n;
  }, s.register = function(e) {
    if (sr = typeof document < "u" && document.body, sr) {
      pe = e, ql(sr), Mn = pe.utils.toArray, hl = pe.core.getStyleSaver;
      var i = pe.utils.snap(0.1);
      Gi = function(n, o) {
        return i(parseFloat(n) + o);
      };
    }
  }, s;
}();
Dn.version = "3.15.0";
typeof window < "u" && window.gsap && window.gsap.registerPlugin(Dn);
Nt.registerPlugin(ct, Vl, Ln, Jl, Dn);
const Mu = (s, t = document) => t.querySelector(s), Vo = (s, t = document) => [...t.querySelectorAll(s)], Is = window.matchMedia("(prefers-reduced-motion: reduce)").matches, qh = window.matchMedia("(hover: hover) and (pointer: fine)").matches, og = ".h2, .portada__h, .pdp__titulo-riel, .indice__h1";
function ag(s = document) {
  Is || Vo(og, s).forEach((t) => {
    t.dataset.partido || t.classList.contains("partido") || (t.dataset.partido = "1", Vl.create(t, {
      type: "lines",
      mask: "lines",
      autoSplit: !0,
      linesClass: "linea-partida",
      onSplit(e) {
        return Nt.from(e.lines, {
          yPercent: 108,
          opacity: 0,
          duration: 1.05,
          ease: "expo.out",
          stagger: 0.085,
          scrollTrigger: { trigger: t, start: "top 88%", once: !0 }
        });
      }
    }));
  });
}
function lg(s = document) {
  Is || !qh || Vo("[data-carrusel-pista]", s).forEach((t) => {
    if (t.dataset.tirable || t.closest("[data-recorrido]") || t.scrollWidth - t.clientWidth < 40) return;
    t.dataset.tirable = "1";
    let e = 0;
    Ln.create(t, {
      type: "scrollLeft",
      inertia: !0,
      dragClickables: !0,
      cursor: "grab",
      activeCursor: "grabbing",
      onPress() {
        e = 0;
      },
      onDrag() {
        e = Math.max(e, Math.abs(this.deltaX));
      }
    }), t.addEventListener("click", (i) => {
      e > 6 && (i.preventDefault(), i.stopPropagation());
    }, !0);
  });
}
const cg = ".btn--lg, .carrusel__flecha, .marq__flecha";
function ug(s = document) {
  Is || !qh || Vo(cg, s).forEach((t) => {
    if (t.dataset.iman) return;
    t.dataset.iman = "1";
    const e = Nt.quickTo(t, "x", { duration: 0.45, ease: "power3.out" }), i = Nt.quickTo(t, "y", { duration: 0.45, ease: "power3.out" });
    t.addEventListener("pointermove", (r) => {
      const n = t.getBoundingClientRect();
      e((r.clientX - (n.left + n.width / 2)) * 0.2), i((r.clientY - (n.top + n.height / 2)) * 0.2);
    }), t.addEventListener("pointerleave", () => {
      e(0), i(0);
    });
  });
}
function fg(s) {
  if (Is || !s) return;
  const t = Mu("[data-abrir-carrito]"), e = s.matches?.("img") ? s : Mu("img", s);
  if (!t || !e || !e.getBoundingClientRect().width) return;
  const i = e.cloneNode(!0);
  i.removeAttribute("loading"), i.removeAttribute("sizes"), i.setAttribute("aria-hidden", "true"), Object.assign(i.style, {
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "90",
    margin: "0",
    pointerEvents: "none",
    borderRadius: "18px",
    objectFit: "contain"
  }), document.body.appendChild(i), Dn.fit(i, e, { scale: !0 }), Nt.timeline({ onComplete: () => i.remove() }).add(Dn.fit(i, t, {
    scale: !0,
    duration: 0.72,
    ease: "power2.inOut"
  }), 0).to(i, { opacity: 0.12, duration: 0.26, ease: "power2.in" }, 0.46).fromTo(t, { scale: 1 }, {
    scale: 1.16,
    duration: 0.16,
    yoyo: !0,
    repeat: 1,
    ease: "power2.out"
  }, 0.64);
}
function Uh(s) {
  if (Is || !s) return;
  const t = Vo(".dlinea, .envio, .bundles", s);
  t.length && Nt.from(t, {
    opacity: 0,
    y: 14,
    duration: 0.5,
    ease: "power3.out",
    stagger: 0.05,
    overwrite: !0
  });
}
function Gh(s = document) {
  ag(s), lg(s), ug(s);
}
Nt.registerPlugin(ct);
const nc = window.matchMedia("(prefers-reduced-motion: reduce)").matches, Ri = (s, t = document) => t.querySelector(s), On = (s, t = document) => [...t.querySelectorAll(s)], Du = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }), hg = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
function Ou(s, t) {
  const e = Number(s) / 100;
  return t ? t.replace(/\{\{\s*(\w+)\s*\}\}/g, (i, r) => {
    switch (r) {
      case "amount":
      case "amount_with_comma_separator":
        return hg.format(e);
      case "amount_no_decimals":
      case "amount_no_decimals_with_comma_separator":
      default:
        return Du.format(Math.round(e));
    }
  }) : `$${Du.format(Math.round(e))}`;
}
function jh() {
  const s = Ri(".picker"), t = Ri("#compare");
  if (!s || !t) return;
  const e = t.dataset.moneyFormat || "", i = Number(t.dataset.envioAfuera || 0), r = {};
  On("[data-f]", t).forEach((u) => {
    r[u.dataset.f] = u;
  });
  function n(u, f, h) {
    if (!u) return;
    const d = Number(u.dataset.centimos ?? f);
    if (u.dataset.centimos = f, !h || nc || d === f) {
      u.textContent = Ou(f, e);
      return;
    }
    const l = { v: d };
    Nt.to(l, {
      v: f,
      duration: 0.55,
      ease: "power2.out",
      onUpdate: () => {
        u.textContent = Ou(l.v, e);
      }
    });
  }
  function o(u, f = !0) {
    const h = u.dataset, d = Number(h.full || 0), l = Number(h.envio || 0) || i;
    r.name && (r.name.textContent = h.nombre || ""), r.name2 && (r.name2.textContent = h.nombre || ""), n(r.d5, Number(h.d5 || 0), f), n(r.d10, Number(h.d10 || 0), f), n(r.full, d, f), n(r.full2, d, f), n(r.ship, l, f), n(r.totalUs, d, f), n(r.totalThem, d + l, f), r.link && (r.link.href = h.url || "#");
  }
  const a = On(".chip", s);
  a.forEach((u) => {
    u.addEventListener("click", () => {
      a.forEach((f) => f.setAttribute("aria-pressed", String(f === u))), o(u);
    });
  });
  const c = a.find((u) => u.getAttribute("aria-pressed") === "true") || a[0];
  c && o(c, !1);
}
function Kh() {
  On(".card__slide, .mini__shot img, .pdp__img").forEach((s) => {
    const t = () => {
      if (s.parentElement.querySelector(".card__sinfoto")) return;
      const e = document.createElement("span");
      e.className = "card__sinfoto", e.setAttribute("aria-hidden", "true"), s.parentElement.appendChild(e), s.style.display = "none";
    };
    s.addEventListener("error", t), s.complete && s.naturalWidth === 0 && t();
  });
}
let en = null;
function dg() {
  nc || (en = new Gp({ lerp: 0.11, wheelMultiplier: 1, touchMultiplier: 1.6 }), en.on("scroll", ct.update), Nt.ticker.add((s) => en.raf(s * 1e3)), Nt.ticker.lagSmoothing(0), window.DropScentsLenis = en), On('a[href^="#"]').forEach((s) => {
    s.addEventListener("click", (t) => {
      const e = s.getAttribute("href");
      if (!e || e === "#") return;
      const i = e === "#top" ? 0 : Ri(e);
      !i && i !== 0 || (t.preventDefault(), en ? en.scrollTo(i, { offset: -72, duration: 1.15 }) : window.scrollTo({ top: i === 0 ? 0 : i.offsetTop - 72 }));
    });
  });
}
function pg() {
  nc || (Ri("[data-hero-in]") && (Nt.set("[data-hero-in]", { opacity: 0, y: 26 }), Nt.timeline({ delay: 0.15 }).to("[data-hero-in]", {
    opacity: 1,
    y: 0,
    duration: 1.05,
    ease: "expo.out",
    stagger: 0.055
  })), Ri(".step") && Nt.matchMedia().add(
    { ancho: "(min-width: 900px)", angosto: "(max-width: 899px)" },
    (s) => {
      const t = s.conditions.ancho ? 50 : 0;
      On(".step").forEach((e, i) => {
        Nt.from(e, {
          opacity: 0,
          y: 70,
          x: i === 1 ? t : -t,
          rotate: t ? i === 1 ? 1.6 : -1.6 : 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: { trigger: e, start: "top 88%" }
        }), Nt.to(e, {
          yPercent: -6 - i * 5,
          ease: "none",
          scrollTrigger: { trigger: ".steps", start: "top bottom", end: "bottom top", scrub: 1 }
        });
      });
    }
  ), Ri(".compare") && (Nt.from(".compare__col--us", {
    opacity: 0,
    xPercent: 4,
    scale: 0.97,
    duration: 1,
    ease: "expo.out",
    scrollTrigger: { trigger: ".compare", start: "top 82%" }
  }), Nt.from(".compare__col--them", {
    opacity: 0,
    xPercent: -4,
    scale: 0.97,
    duration: 1,
    ease: "expo.out",
    delay: 0.08,
    scrollTrigger: { trigger: ".compare", start: "top 82%" }
  }), Nt.from(".chip", {
    opacity: 0,
    y: 14,
    duration: 0.6,
    ease: "power3.out",
    stagger: 0.045,
    scrollTrigger: { trigger: ".picker", start: "top 90%" }
  })), Ri("[data-reveal-card]") && ct.batch("[data-reveal-card]", {
    start: "top 92%",
    onEnter: (s) => Nt.from(s, {
      opacity: 0,
      y: 46,
      scale: 0.97,
      duration: 0.85,
      ease: "expo.out",
      stagger: 0.07,
      overwrite: !0
    })
  }), On(".qa__item").forEach((s, t) => {
    Nt.from(s, {
      opacity: 0,
      x: -24,
      duration: 0.7,
      ease: "power3.out",
      delay: t * 0.03,
      scrollTrigger: { trigger: s, start: "top 92%" }
    });
  }), Ri(".bubble") && Nt.from(".bubble", {
    opacity: 0,
    y: 26,
    scale: 0.92,
    transformOrigin: "bottom center",
    duration: 0.6,
    ease: "back.out(1.6)",
    stagger: 0.13,
    scrollTrigger: { trigger: ".chat", start: "top 82%" }
  }), Ri(".cierre__card") && Nt.from(".cierre__card", {
    opacity: 0,
    scale: 0.96,
    y: 40,
    duration: 1.1,
    ease: "expo.out",
    scrollTrigger: { trigger: ".cierre", start: "top 85%" }
  }));
}
function _g() {
  const s = Ri("#nav");
  s && ct.create({
    start: "top -60",
    end: 99999,
    onToggle: (t) => s.classList.toggle("is-stuck", t.isActive)
  });
}
function gg() {
  "scrollRestoration" in history && (history.scrollRestoration = "manual"), window.scrollTo(0, 0), window.addEventListener("pageshow", () => window.scrollTo(0, 0)), s_(), a_(), jh(), Kh(), dg(), oh(), pg(), _g(), document.fonts?.ready && document.fonts.ready.then(() => ct.refresh());
}
function mg() {
  window.Shopify?.designMode && (document.addEventListener("shopify:section:load", (s) => {
    oh(s.target), jh(), Kh(), lh(s.target), Gh(s.target), ct.refresh();
  }), document.addEventListener("shopify:section:unload", (s) => {
    __(s.target), ct.refresh();
  }));
}
const ke = (s, t = document) => t.querySelector(s), yg = (s, t = document) => Array.from(t.querySelectorAll(s)), vg = "carrito-drawer";
async function _l() {
  const s = ke("[data-carrito-drawer]");
  if (!s) return;
  const t = s.classList.contains("is-on"), e = await fetch(`${window.Shopify?.routes?.root || "/"}?section_id=${vg}`);
  if (!e.ok) return;
  const i = await e.text(), r = new DOMParser().parseFromString(i, "text/html").querySelector("[data-carrito-drawer]");
  r && (t && (r.classList.add("is-on"), r.hidden = !1), s.replaceWith(r), t && Uh(r), Jh());
}
function Qh(s) {
  const t = ke("[data-carrito-drawer] .drawer__panel");
  if (!t || !s) return;
  ke("[data-cart-aviso]")?.remove();
  const e = document.createElement("p");
  e.className = "dcart__aviso", e.setAttribute("data-cart-aviso", ""), e.setAttribute("role", "status"), e.textContent = s, t.querySelector(".dcart__top")?.after(e);
}
async function Zh(s) {
  try {
    const t = await s.json();
    return t.description || t.message || null;
  } catch {
    return null;
  }
}
function Jh() {
  const s = ke("[data-carrito-drawer] [data-cart-count]"), t = s ? s.textContent.trim() : null;
  t !== null && yg("[data-cart-count]").forEach((e) => {
    e.closest("[data-carrito-drawer]") || (e.textContent = t, e.hidden = t === "0");
  });
}
let gl = null;
function Sa() {
  const s = ke("[data-carrito-drawer]");
  return s ? (gl = document.activeElement, s.hidden = !1, requestAnimationFrame(() => {
    s.classList.add("is-on"), Uh(s);
  }), document.documentElement.style.overflow = "hidden", window.DropScentsLenis?.stop(), ke(".drawer__cerrar", s)?.focus(), !0) : !1;
}
function Lu() {
  const s = ke("[data-carrito-drawer]");
  s && (s.classList.remove("is-on"), document.documentElement.style.overflow = "", window.DropScentsLenis?.start(), setTimeout(() => {
    s.hidden = !0;
  }, 320), gl?.focus?.(), gl = null);
}
function wg() {
  ke("[data-carrito-drawer]") && (document.addEventListener("click", (s) => {
    if (s.target.closest("[data-abrir-carrito]")) {
      if (s.metaKey || s.ctrlKey || s.shiftKey || s.button !== 0) return;
      s.preventDefault(), Sa();
      return;
    }
    s.target.closest("[data-drawer-cerrar]") && s.target.closest("[data-carrito-drawer]") && (s.preventDefault(), Lu());
  }), document.addEventListener("keydown", (s) => {
    if (s.key !== "Escape") return;
    ke("[data-carrito-drawer].is-on") && Lu();
  }), document.addEventListener("submit", async (s) => {
    const t = s.target.closest('form[action*="/cart/add"]');
    if (!t) return;
    s.preventDefault();
    const e = t.querySelector('[type="submit"]');
    e?.classList.add("is-cargando"), fg(xg(t));
    try {
      const i = await fetch(`${window.Shopify?.routes?.root || "/"}cart/add.js`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(t)
      });
      if (!i.ok) {
        const r = await Zh(i);
        await _l(), Sa(), r ? Qh(r) : t.submit();
        return;
      }
      await _l(), Sa();
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
      o && await Ta(Number(o), 0);
      return;
    }
    const i = s.target.closest("[data-cantidad]");
    if (!i) return;
    s.preventDefault();
    const r = i.parentElement.querySelector(".cantidad__i");
    if (!r) return;
    const n = Math.max(0, Number(r.value || 0) + Number(i.dataset.cantidad));
    await Ta(Number(r.dataset.linea), n);
  }), document.addEventListener("change", async (s) => {
    const t = s.target.closest("[data-carrito-drawer] .cantidad__i");
    t && await Ta(Number(t.dataset.linea), Math.max(0, Number(t.value || 0)));
  }), Jh());
}
function xg(s) {
  const t = s.closest(".pdp");
  if (t) return ke(".pdp__img.is-on", t) || ke(".pdp__img", t);
  const e = s.closest(".bundle, .tarjeta, article, li");
  return e ? ke("img", e) : null;
}
async function Ta(s, t) {
  if (!s) return;
  ke("[data-carrito-drawer]")?.classList.add("is-ocupado");
  try {
    const i = await fetch(`${window.Shopify?.routes?.root || "/"}cart/change.js`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ line: s, quantity: t })
    }), r = i.ok ? null : await Zh(i);
    await _l(), r && Qh(r);
  } finally {
    ke("[data-carrito-drawer]")?.classList.remove("is-ocupado");
  }
}
function bg() {
  const s = ke("[data-atc-fija]"), t = ke(".pdp__atc");
  if (!s || !t) return;
  new IntersectionObserver(([i]) => {
    s.classList.toggle("is-on", !i.isIntersecting);
  }, { rootMargin: "0px 0px -8px 0px" }).observe(t);
}
const Au = (s, t = document) => t.querySelector(s), Ea = (s, t = document) => Array.from(t.querySelectorAll(s));
function Sg() {
  Ea(".marquesina").forEach((s) => {
    const t = Au("[data-marq-pista]", s), e = Ea("[data-marq-paso]", s);
    if (!t || !e.length) return;
    const i = parseFloat(getComputedStyle(t).animationDuration);
    if (!i) {
      e.forEach((f) => {
        f.hidden = !0;
      });
      return;
    }
    const r = Au(".marquesina__grupo", s), n = Ea(".marquesina__item", r);
    if (!n.length) return;
    const o = r.getBoundingClientRect().width, a = n[0].getBoundingClientRect().width + parseFloat(getComputedStyle(r).gap || 0), c = i * (a / o);
    let u = 0;
    e.forEach((f) => {
      f.addEventListener("click", () => {
        u -= Number(f.dataset.marqPaso) * c, t.style.animationDelay = `${u}s`;
      });
    }), s.addEventListener("pointerdown", () => {
      t.style.animationPlayState = "paused";
    }), s.addEventListener("pointerleave", () => {
      t.style.animationPlayState = "";
    });
  });
}
gg();
wg();
bg();
Sg();
lh();
Gh();
mg();
